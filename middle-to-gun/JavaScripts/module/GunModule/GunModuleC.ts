import GunModuleS from "./GunModuleS";

export default class GunModuleC extends ModuleC<GunModuleS, null> {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {

    }

    public switchGun(gunId: number): void {
        this.server.net_switchGun(gunId);
    }
}