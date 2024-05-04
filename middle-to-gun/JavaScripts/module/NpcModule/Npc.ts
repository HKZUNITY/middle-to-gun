import { GameConfig } from "../../config/GameConfig";
import { PrefabEvent } from "../../tools/PrefabEvent";
import Utils from "../../tools/Utils";
import { PlayerModuleS } from "../PlayerModule/PlayerModuleS";
import RadarPanel from "../RadarModule/ui/RadarPanel";

@Component
export default class Npc extends Script {
    @mw.Property({ displayName: "当前剩余血量", group: "设置属性", tooltip: "当前剩余血量", replicated: true, onChanged: "onHpChanged" })
    private curHp: number = 0;

    @mw.Property({ displayName: "路径", group: "设置属性", tooltip: "路径" })
    private pathVector: mw.Vector[] = [mw.Vector.zero];

    @mw.Property({ displayName: "移动速度", group: "设置属性", tooltip: "移动速度", range: { min: 100, max: 1000, showSlider: true } })
    private moveSpeed: number = 300;

    /**爆炸特效 */
    private explosionEffect: string = "27422";
    /**重生时间 */
    private respawnTime: number = 5;
    /**重生特效 */
    private respawnEffect: string = "142750";

    private npc: mw.Character = null;

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        this.onStartCS();
    }

    /**onStart */
    private async onStartCS(): Promise<void> {
        await TimeUtil.delaySecond(5);
        await ModuleService.ready();
        this.npc = this.gameObject as mw.Character;
        await this.npc.asyncReady();
        if (mw.SystemUtil.isClient()) {
            this.onStartC();
        } else if (mw.SystemUtil.isServer()) {
            this.onStartS();
        }
    }

    /**
     * 周期函数 每帧执行
     * 此函数执行需要将this.useUpdate赋值为true
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    protected onUpdate(dt: number): void {
        if (mw.SystemUtil.isClient()) {
            this.onUpdateC(dt);
        } else if (mw.SystemUtil.isServer()) {
            this.onUpdateS(dt);
        }
    }
    /**--------------------------------【客户端】-------------------------------- */
    /**客户端的onStart */
    private onStartC(): void {
        this.useUpdate = false;
        this.initDataC();
    }

    private initDataC(): void {
        UIService.getUI(RadarPanel).setNpcPoint(this.npc);
        this.npc.setOutline(true, mw.LinearColor.red, 0.5);
    }

    /**客户端的onUpdate */
    private onUpdateC(dt: number): void {

    }
    /**--------------------------------【客户端】-------------------------------- */

    /**--------------------------------【服务端】-------------------------------- */
    private playerModuleS: PlayerModuleS = null;
    private get getPlayerModuleS(): PlayerModuleS {
        if (this.playerModuleS == null) {
            this.playerModuleS = ModuleService.getModule(PlayerModuleS);
        }
        return this.playerModuleS;
    }

    /**服务端的onStart */
    private onStartS(): void {
        this.useUpdate = true;
        this.initDataS();
        this.initMove();
        this.bindEventS();
    }

    private initDataS(): void {
        this.curHp = 100;
        this.npc.displayName = Utils.randomNpcName();
        this.setNpcDescriptionAndGun();
    }

    private npcGunMoeld: mw.Model = null;
    private async setNpcDescriptionAndGun(): Promise<void> {
        let roleId = GameConfig.ROLE.getElement(Utils.randomInt(1, 34)).ROLEID;
        await Utils.asyncDownloadAsset(roleId);
        this.npc.setDescription([roleId]);

        let gunId = GameConfig.GUN.getElement(Utils.randomInt(1, 14)).GUNICON_M;
        await Utils.asyncDownloadAsset(gunId);
        if (this.npcGunMoeld) GameObjPool.despawn(this.npcGunMoeld);
        this.npcGunMoeld = await GameObjPool.asyncSpawn(gunId, mwext.GameObjPoolSourceType.Asset);
        this.npcGunMoeld.setCollision(mw.PropertyStatus.Off);
        this.npc.attachToSlot(this.npcGunMoeld, mw.HumanoidSlotType.RightHand);

        await Utils.asyncDownloadAsset("285372");
        let npcAnim = this.npc.loadAnimation("285372");
        npcAnim.loop = 0;
        npcAnim.play();

        // let somatotype = this.npc.description.advance.base.characterSetting.somatotype;
        // let stanceId = (somatotype % 2 == 0) ? "49096" : "94258";
        // await Utils.asyncDownloadAsset(stanceId);
        // this.npc.loadSubStance(stanceId).play();
    }

    /**
     * 绑定事件
     */
    private bindEventS(): void {
        PrefabEvent.PrefabEvtFight.onHit(this.playerAtkEnemyS.bind(this));
    }

    /**
     * 玩家攻击敌人
     * @param senderGuid
     * @param targetGuid
     * @param damage
     * @param hitPoint
     * @returns
     */
    private playerAtkEnemyS(senderGuid: string, targetGuid: string, damage: number, hitPoint: mw.Vector): void {
        if (this.npc.gameObjectId != targetGuid) return;
        if (this.curHp <= 0) return;
        let tmpHp = this.curHp - damage;
        if (tmpHp > 0) {
            this.curHp = tmpHp;
        } else {
            this.curHp = 0;
            this.dieS();
            this.getPlayerModuleS.playerKillNpc(senderGuid);
            TimeUtil.delaySecond(this.respawnTime).then(() => {
                this.curHp = 100;
                this.respawnS();
            });
        }
        this.getPlayerModuleS.playerAtkNpcFlyText(senderGuid, hitPoint, damage);
    }

    private dieS(): void {
        this.setNpcStateS(false);
        EffectService.playAtPosition(
            this.explosionEffect,
            this.gameObject.worldTransform.position,
            {
                scale: mw.Vector.one.multiply(1)
            });
    }

    private async respawnS(): Promise<void> {
        await this.setNpcDescriptionAndGun();
        this.setNpcStateS(true);
        EffectService.playOnGameObject(this.respawnEffect, this.npc, { slotType: mw.HumanoidSlotType.Root });
    }

    private setNpcStateS(isVisibility: boolean): void {
        this.npc.ragdollEnabled = !isVisibility;
        this.useUpdate = isVisibility;
    }

    private initMove(): void {
        this.targetPos = this.pathVector[this.index];
        this.npc.maxWalkSpeed = this.moveSpeed;
    }

    private frameCount: number = 0;
    private maxFrameCount: number = 1;
    /**服务端的onUpdate */
    private onUpdateS(dt: number): void {
        this.frameCount++;
        if (this.frameCount < this.maxFrameCount) return;
        this.frameCount = 0;
        this.updateMove();
    }

    private index: number = 0;
    private pathFlag: boolean = true;
    private curBossDir: mw.Vector = mw.Vector.zero;
    private targetPos: mw.Vector = mw.Vector.zero;
    private targetDistance: number = 0;
    private updateMove(): void {
        if (!this.pathVector || this.pathVector.length <= 1) return;

        this.curBossDir = this.targetPos.clone().add(this.targetPos.clone().subtract(this.npc.worldTransform.position.clone()))
        this.npc.lookAt(this.curBossDir);
        this.npc.addMovement(mw.Vector.forward);

        this.targetDistance = Math.sqrt(
            Math.pow(this.npc.worldTransform.position.x - this.pathVector[this.index].x, 2) +
            Math.pow(this.npc.worldTransform.position.y - this.pathVector[this.index].y, 2)
        );

        //到达寻路点
        if (this.targetDistance > 50) return;
        if (this.pathFlag && this.index < this.pathVector.length - 1) {
            this.index++
            if (this.index == this.pathVector.length - 1) this.pathFlag = false;
        } else if (!this.pathFlag && this.index > 0) {
            this.index--
            if (this.index == 0) this.pathFlag = true;
        }
        this.targetPos = this.pathVector[this.index];
    }
    /**--------------------------------【服务端】-------------------------------- */

    /** 脚本被销毁时最后一帧执行完调用此函数 */
    protected onDestroy(): void {

    }
}