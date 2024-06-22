import { WeaponProp, Helper } from "../../tools/Helper";
import HUDModuleC from "../HUDModule/HUDModuleC";
import { Projectile } from "./Projectile";
import WeaponData, { ProjectileType } from "./WeaponData";
import WeaponModuleS from "./WeaponModuleS";

export default class WeaponModuleC extends ModuleC<WeaponModuleS, WeaponData> {
    private hudModuleC: HUDModuleC = null;
    private get getHUDModuleC(): HUDModuleC {
        if (!this.hudModuleC) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }

    private currentCamera: mw.Camera = null;
    private get getCurrentCamera(): mw.Camera {
        if (this.currentCamera == null) {
            this.currentCamera = Camera.currentCamera;
        }
        return this.currentCamera;
    }

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        this.bindEventAction();
    }

    private bindEventAction(): void {
        this.getHUDModuleC.onNormalAction.add(this.normalIntervalAttack.bind(this));
        //#region KeyDown
        InputUtil.onKeyDown(mw.Keys.E, () => {
            this.bulletCount = this.currentWeaponData.bulletCount;
            this.getHUDModuleC.updateBulletCount(this.bulletCount);
        });
        let isNormal = true;
        InputUtil.onKeyDown(mw.Keys.R, () => {
            isNormal = !isNormal;
            this.switchProjectileType(isNormal ? ProjectileType.Normal : ProjectileType.ArcTracing_Weak);
        });
        //#endregion
    }

    protected onEnterScene(sceneType: number): void {
        this.currentWeaponIndex[1] = this.data.projectileIndex;
    }

    //#region Switch Weapon
    private currentWeaponIndex: number[] = [0, 0];
    private currentWeaponData: WeaponProp = null;
    private bulletCount: number = 0;
    private weaponIcon: string = "278406";
    private weaponName: string = "神兵弓箭";
    public switchWeaponData(weaponId: number): void {
        if (this.currentWeaponIndex[0] == weaponId) return;
        this.setWeaponPropData(weaponId);
        this.switchWeapon();
    }

    public net_switchWeaponData(weaponId: number): void {
        this.setWeaponPropData(weaponId);
    }

    private setWeaponPropData(weaponId: number): void {
        this.currentWeaponIndex[0] = weaponId;
        this.currentWeaponData = Helper.weaponDataMap.get(this.currentWeaponIndex[0]);
        Helper.damage = this.currentWeaponData.damage;
        this.updateNormalData();
    }

    private switchWeapon(): void {
        this.server.net_switchWeapon(this.currentWeaponIndex[0]);
    }

    public switchProjectile(projectileIndex: number): void {
        if (this.currentWeaponIndex[1] == projectileIndex) return;
        this.currentWeaponIndex[1] = projectileIndex;
        this.server.net_switchProjectile(this.currentWeaponIndex[1]);
    }

    public switchProjectileType(projectileType: ProjectileType): void {
        this.currentProjectileType = projectileType;
    }

    private fireAnchor: mw.Model = null;
    public setFireAnchor(fireAnchor: mw.Model): void {
        this.fireAnchor = fireAnchor;
    }
    //#endregion

    //#region Normal
    private normalIntervalId: any = null;
    private normalIntervalAttack(isPress: boolean): void {
        if (isPress) {
            this.normalAttack();
            this.normalIntervalId = TimeUtil.setInterval(this.normalAttack.bind(this), 0.1);
        } else {
            TimeUtil.clearInterval(this.normalIntervalId);
        }
    }

    private normalAnims: string[] = [];
    private normalAttackLength: number = 0;
    private normalAnimTimes: number[] = [];
    private normalAtkTime: number[] = [];
    private normalAttackIndex: number = -1;
    private updateNormalData(): void {
        this.normalAnims = this.currentWeaponData.normalAnims;
        this.normalAttackLength = this.normalAnims.length;
        this.normalAnimTimes = this.currentWeaponData.normalAnimTimes;
        this.normalAtkTime = this.currentWeaponData.normalAtkTime;
        this.normalAttackIndex = 0;
        this.bulletCount = this.currentWeaponData.bulletCount;
        this.weaponIcon = this.currentWeaponData.weaponIcon;
        this.weaponName = this.currentWeaponData.weaponName;
        this.getHUDModuleC.updateGunPropUI(this.weaponIcon, this.bulletCount, this.weaponName);
    }

    private isCanNormalAttack: boolean = true;
    private currentProjectileType: ProjectileType = ProjectileType.Normal;
    private normalAttack(): void {
        if (!this.isCanNormalAttack || !this.fireAnchor || this.bulletCount <= 0) return;
        if (this.normalAttackIndex >= this.normalAttackLength) this.normalAttackIndex = 0;
        this.updateNormalAttackState();
        this.resetNormalAttackIndex();
        let shootDir = this.calculateFireDirection(this.getCurrentCamera.worldTransform, this.fireAnchor.worldTransform.position);
        this.server.net_fireNormalAttack(shootDir, this.currentWeaponIndex, this.normalAttackIndex++, this.currentProjectileType);
        this.bulletCount--;
        this.getHUDModuleC.updateBulletCount(this.bulletCount);
        TimeUtil.delaySecond(this.normalAtkTime[this.normalAttackIndex - 1]).then(() => {
            this.getHUDModuleC.startAimUITween();
        });
    }

    private updateNormalAttackState(): void {
        this.isCanNormalAttack = false;
        TimeUtil.delaySecond(this.normalAtkTime[this.normalAttackIndex]).then(() => {
            this.isCanNormalAttack = true;
        });
    }

    private normalAttackTimeoutId: any = null;
    private clearNormalAttackTimeout(): void {
        if (this.normalAttackTimeoutId) {
            clearTimeout(this.normalAttackTimeoutId);
            this.normalAttackTimeoutId = null;
        }
    }
    private resetNormalAttackIndex(): void {
        this.clearNormalAttackTimeout();
        this.normalAttackTimeoutId = setTimeout(() => {
            this.normalAttackIndex = 0;
            if (!this.isCanNormalAttack) this.isCanNormalAttack = true;
        }, this.normalAnimTimes[this.normalAttackIndex] * 1000);
    }
    //#endregion

    protected onUpdate(dt: number): void {
        if (Helper.activeBulletMap.size == 0) return;
        Helper.activeBulletMap.forEach((value: Set<Projectile>) => {
            value.forEach((projectile: Projectile) => {
                projectile.update(dt);
            });
        });
    }

    private calculateFireDirection(cameraWorldTransform: mw.Transform, firePosition: mw.Vector): mw.Vector {
        let cameraShootDir = Camera.currentCamera.worldTransform.clone().getForwardVector().clone();
        let endLoc = cameraShootDir.multiply(100000).add(cameraWorldTransform.clone().position);
        let shootDir = endLoc.clone().subtract(firePosition);
        let hitRes = QueryUtil.lineTrace(cameraWorldTransform.clone().position, endLoc, true, mw.SystemUtil.isPIE);
        hitRes = hitRes.filter(e => { return !(e.gameObject instanceof mw.Trigger); });
        if (hitRes && hitRes.length > 0 && mw.Vector.dot(hitRes[0].gameObject.worldTransform.position.clone().subtract(firePosition), shootDir) > 0) {
            shootDir = hitRes[0].impactPoint.clone().subtract(firePosition);
        }
        return shootDir.normalized;
    }
}