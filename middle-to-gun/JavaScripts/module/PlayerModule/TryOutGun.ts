import { GameConfig } from "../../config/GameConfig";
import GlobalData from "../../tools/GlobalData";
import Utils from "../../tools/Utils";
import AdPanel from "../AdModule/ui/AdPanel";
import GunModuleC from "../GunModule/GunModuleC";
import { MorphModuleC } from "../MorphModule/MorphModule";
import ShopModuleC from "../ShopModule/ShopModuleC";

@Component
export default class TryOutGun extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
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
    private gunModuleC: GunModuleC = null;
    private get getGunModuleC(): GunModuleC {
        if (this.gunModuleC == null) {
            this.gunModuleC = ModuleService.getModule(GunModuleC);
        }
        return this.gunModuleC;
    }

    private morphModuleC: MorphModuleC = null;
    private get getMorphModuleC(): MorphModuleC {
        if (this.morphModuleC == null) {
            this.morphModuleC = ModuleService.getModule(MorphModuleC);
        }
        return this.morphModuleC;
    }

    private shopModuleC: ShopModuleC = null;
    private get getShopModuleC(): ShopModuleC {
        if (this.shopModuleC == null) {
            this.shopModuleC = ModuleService.getModule(ShopModuleC);
        }
        return this.shopModuleC;
    }

    private adPanel: AdPanel = null;
    private get getAdPanel(): AdPanel {
        if (this.adPanel == null) {
            this.adPanel = UIService.getUI(AdPanel);
        }
        return this.adPanel;
    }

    /**客户端的onStart */
    private async onStartC(): Promise<void> {
        await ModuleService.ready();
        this.useUpdate = false;
        this.initGunAnchor();
        this.initModule();
        this.initUIPanel();
        this.initTrigger();
    }

    private gunAnchor: mw.Model = null;
    private initGunAnchor(): void {
        this.gunAnchor = this.gameObject.getChildByName("gunAnchor") as mw.Model;
        this.switchGunModel(Utils.randomInt(10, 14));
    }

    private initModule(): void {
        this.gunModuleC = ModuleService.getModule(GunModuleC);
    }

    private initUIPanel(): void {
        this.adPanel = UIService.getUI(AdPanel);
    }

    private initTrigger(): void {
        let trigger = this.gameObject as mw.Trigger;
        trigger.onEnter.add(this.onTriggerEnter.bind(this));
    }

    private onTriggerEnter(character: mw.Character): void {
        if (Player.localPlayer.character != character) return;
        let gunElement = GameConfig.GUN.getElement(this.gunkey);
        this.getAdPanel.showRewardAd(() => {
            if (!this.gunkey) return;
            this.switchGun();
            this.switchGunModel(Utils.randomInt(10, 14));
        }, gunElement.GUNNAME + "\n免费使用一局", "取消", "免费使用");
    }

    private switchGun(): void {
        if (this.getMorphModuleC.getIsMorph) {
            this.getShopModuleC.setUseShopId_Gun(this.gunkey);
        } else {
            this.getGunModuleC.switchGun(this.gunkey);
        }
    }

    private gunModel: mw.Model = null;
    private gunkey: number = null;
    private async switchGunModel(key: number): Promise<void> {
        if (this.gunkey == key) return;
        this.gunkey = key;
        if (this.gunModel) GameObjPool.despawn(this.gunModel);
        let gunElement = GameConfig.GUN.getElement(this.gunkey);
        let gunId = gunElement.GUNICON_M;
        await Utils.asyncDownloadAsset(gunId);
        this.gunModel = await GameObjPool.asyncSpawn(gunId, mwext.GameObjPoolSourceType.Asset);
        this.gunModel.parent = this.gunAnchor;
        this.gunModel.localTransform.position = gunElement.GUNLOC;
        this.gunModel.localTransform.rotation = new mw.Rotation(0, 15, 0);
        this.gunModel.localTransform.scale = gunElement.GUNSCALE;
    }

    /**客户端的onUpdate */
    private onUpdateC(dt: number): void {

    }
    /**--------------------------------【客户端】-------------------------------- */

    /**--------------------------------【服务端】-------------------------------- */
    /**服务端的onStart */
    private onStartS(): void {
        this.useUpdate = false;
    }

    /**服务端的onUpdate */
    private onUpdateS(dt: number): void {

    }
    /**--------------------------------【服务端】-------------------------------- */

    /** 脚本被销毁时最后一帧执行完调用此函数 */
    protected onDestroy(): void {

    }
}