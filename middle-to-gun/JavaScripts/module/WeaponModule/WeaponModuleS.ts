import { Helper } from "../../tools/Helper";
import Utils from "../../tools/Utils";
import Weapon from "./Weapon";
import WeaponData, { ProjectileType } from "./WeaponData";
import WeaponModuleC from "./WeaponModuleC";

export default class WeaponModuleS extends ModuleS<WeaponModuleC, WeaponData> {
    protected onPlayerEnterGame(player: mw.Player): void {
        this.initWeapon(player);
    }

    protected onPlayerLeft(player: mw.Player): void {
        let playerId = player.playerId;
        this.destoryWeapon(playerId);
    }

    //#region Normal Attack
    @Decorator.noReply()
    public net_fireNormalAttack(shootDir: mw.Vector, projectileIndex: number[],
        attackIndex: number, projectileType: ProjectileType): void {
        this.fireNormalAttack(this.currentPlayer, shootDir, projectileIndex, attackIndex, projectileType);
    }

    private async fireNormalAttack(player: mw.Player, shootDir: mw.Vector,
        projectileIndex: number[], attackIndex: number, projectileType: ProjectileType): Promise<void> {
        let weaponData = Helper.weaponDataMap.get(projectileIndex[0]);
        let atkAnimation = weaponData.normalAnims[attackIndex];
        if (atkAnimation != "-1") {
            await Utils.asyncDownloadAsset(atkAnimation);
            player.character.loadAnimation(atkAnimation).play();
        }
        let atkTime = weaponData.normalAtkTime[attackIndex];
        TimeUtil.delaySecond(atkTime).then(() => {
            if (!this.playerWeaponMap.has(player.playerId)) return;
            let fireData = Utils.vectorToString(shootDir) +
                "|" + projectileIndex[1] +
                "|" + projectileType +
                "|" + weaponData.normalBulletCount[attackIndex] +
                "|" + weaponData.normalFireInterval[attackIndex];
            this.playerWeaponMap.get(player.playerId).fireData = fireData;
        });
    }
    //#endregion

    //#region Weapon
    private playerWeaponMap: Map<number, Weapon> = new Map<number, Weapon>();
    private async initWeapon(player: mw.Player): Promise<void> {
        let playerId = player.playerId;
        if (this.playerWeaponMap.has(playerId)) return;
        let weapon = await mw.Script.spawnScript(Weapon, true);
        let weaponId = DataCenterS.getData(player, WeaponData).weaponIndex;
        let playerId_WeaponId = playerId + "|" + weaponId;
        weapon.playerId_WeaponId = playerId_WeaponId;
        this.playerWeaponMap.set(playerId, weapon);

        this.getClient(player).net_switchWeaponData(weaponId);
    }

    @Decorator.noReply()
    public net_switchWeapon(weaponId: number): void {
        let player = this.currentPlayer;
        this.switchWeapon(player, weaponId);
    }

    private async switchWeapon(player: mw.Player, weaponId: number): Promise<void> {
        let playerId = player.playerId;
        if (!this.playerWeaponMap.has(playerId)) await this.initWeapon(player);
        if (!this.playerWeaponMap.has(playerId)) return;
        let weapon = this.playerWeaponMap.get(playerId);
        if (!weapon) return;
        weapon.weaponId = weaponId;
        DataCenterS.getData(player, WeaponData).setWeaponIndex(weaponId);
    }

    private destoryWeapon(playerId: number): void {
        if (!this.playerWeaponMap.has(playerId)) return;
        let weapon = this.playerWeaponMap.get(playerId);
        if (!weapon) return;
        weapon.weaponId = -1;
    }
    //#endregion

    //#region Projectile
    @Decorator.noReply()
    public net_switchProjectile(projectileIndex: number): void {
        this.currentData.setProjectileIndex(projectileIndex);
    }
    //#endregion
}