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
    private moveSpeed: number = 150;

    @mw.Property({ displayName: "最大生命值", group: "设置属性", tooltip: "最大生命值", range: { min: 100, max: 100000, showSlider: true } })
    private maxHp: number = 100;

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
        this.npc.collisionWithOtherCharacterEnabled = false;
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
        this.curHp = this.maxHp;
        this.npc.displayName = Utils.randomNpcName();
        this.setNpcDescriptionAndGun();
    }

    private async setNpcDescriptionAndGun(): Promise<void> {
        let roleId = Utils.getNpx();
        await Utils.asyncDownloadAsset(roleId);
        this.npc.setDescription([roleId]);
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
            this.getPlayerModuleS.playerKillNpc(senderGuid, damage, true);
            TimeUtil.delaySecond(this.respawnTime).then(() => {
                this.curHp = this.maxHp;
                this.respawnS();
            });
        }
        this.getPlayerModuleS.playerAtkNpcFlyText(senderGuid, hitPoint, damage);
        this.getPlayerModuleS.playerKillNpc(senderGuid, damage, false);
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
        this.index = 0;
        this.pathFlag = true;
        this.curBossDir = mw.Vector.zero;
        this.targetPos = mw.Vector.zero;
        this.targetDistance = 0;
        this.npc.worldTransform.position = new mw.Vector(this.pathVector[this.index].x, this.pathVector[this.index].y, -500);
    }

    private setNpcStateS(isVisibility: boolean): void {
        this.npc.ragdollEnabled = !isVisibility;
        this.useUpdate = isVisibility;
    }

    private initMove(): void {
        for (let i = 0; i < this.pathVector.length; ++i) {
            this.pathVector[i] = new mw.Vector(this.pathVector[i].x + Utils.randomInt(-50, 50), this.pathVector[i].y + Utils.randomInt(-50, 50), this.pathVector[i].z);
        }
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