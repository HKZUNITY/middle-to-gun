﻿import GlobalData from "../../tools/GlobalData";
import Utils from "../../tools/Utils";
import AdPanel from "../AdModule/ui/AdPanel";
import { PlayerModuleC } from "./PlayerModuleC";

@Component
export default class AddMaxHp extends Script {

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
    private playerModuleC: PlayerModuleC = null;
    private get getPlayerModuleC(): PlayerModuleC {
        if (this.playerModuleC == null) {
            this.playerModuleC = ModuleService.getModule(PlayerModuleC);
        }
        return this.playerModuleC;
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
        this.initModule();
        this.initUIPanel();
        this.initTrigger();
    }

    private initModule(): void {
        this.playerModuleC = ModuleService.getModule(PlayerModuleC);
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
        this.getAdPanel.showRewardAd(() => {
            this.getPlayerModuleC.addMaxHp();
        }, "奖励翻倍\n提高最大生命值 + " + GlobalData.maxHp * 2, "取消", "免费获取");
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