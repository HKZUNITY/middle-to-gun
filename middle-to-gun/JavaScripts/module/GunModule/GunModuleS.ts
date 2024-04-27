import { GameConfig } from "../../config/GameConfig";
import Utils from "../../tools/Utils";
import GunModuleC from "./GunModuleC";

export default class GunModuleS extends ModuleS<GunModuleC, null> {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {

    }

    private weaponMap: Map<string, mw.GameObject> = new Map<string, mw.GameObject>();
    protected onPlayerLeft(player: mw.Player): void {
        let userId = player.userId;
        if (!this.weaponMap.has(userId)) return;
        let weapon = this.weaponMap.get(userId);
        weapon?.getChildren().forEach((value: mw.GameObject) => {
            value?.destroy();
        });
        weapon?.destroy();
        this.weaponMap.delete(userId);
        // console.error("wfz-A");
    }

    @Decorator.noReply()
    public net_switchGun(gunId: number): void {
        let player = this.currentPlayer;
        this.switchStance(player);
        this.switchGun(gunId, player);
    }

    private async switchStance(player: mw.Player): Promise<void> {
        let somatotype = player.character.description.advance.base.characterSetting.somatotype;
        let stanceId = (somatotype % 2 == 0) ? "49098" : "94261";
        await Utils.asyncDownloadAsset(stanceId);
        player.character.loadSubStance(stanceId).play();
    }

    private async switchGun(gunId: number, player: mw.Player): Promise<void> {
        player.character.movementEnabled = false;
        let weapon = await GameObject.asyncSpawn<mw.GameObject>(
            GameConfig.GUN.getElement(gunId).GUNPREFAB,
            {
                replicates: true,
                // transform: new mw.Transform(player.character.worldTransform.position, mw.Rotation.zero, mw.Vector.one)
            }
        );
        await weapon.asyncReady();
        player.character.attachToSlot(weapon, mw.HumanoidSlotType.BackOrnamental);
        weapon.localTransform.position = mw.Vector.zero;
        player.character.movementEnabled = true;

        await TimeUtil.delaySecond(2);
        let userId = player.userId;
        if (this.weaponMap.has(userId)) {
            let weapon = this.weaponMap.get(userId);
            weapon?.getChildren().forEach((value: mw.GameObject) => {
                value?.destroy();
            });
            weapon?.destroy();
            // console.error("wfz-A");
        }
        this.weaponMap.set(userId, weapon);
    }
}