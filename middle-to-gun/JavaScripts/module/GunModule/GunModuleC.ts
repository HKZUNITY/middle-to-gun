import GunModuleS from "./GunModuleS";

export default class GunModuleC extends ModuleC<GunModuleS, null> {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {

    }

    private currentGunId: number = -1;

    public switchGun(gunId: number): void {
        if (this.currentGunId == gunId) return;
        this.currentGunId = gunId;
        this.server.net_switchGun(gunId);
    }
}