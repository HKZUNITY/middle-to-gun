﻿import ConfirmPanel from "../common/ConfirmPanel";

@Component
export default class JumpGame extends Script {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        if (mw.SystemUtil.isClient()) {
            this.useUpdate = false;
            this.onStartC();
        } else if (mw.SystemUtil.isServer()) {
            this.useUpdate = false;
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

    /**------------------------------------------- 客户端 ------------------------------------------------ */
    private confirmPanel: ConfirmPanel = null;
    private get getConfirmPanel(): ConfirmPanel {
        if (this.confirmPanel == null) {
            this.confirmPanel = UIService.getUI(ConfirmPanel);
        }
        return this.confirmPanel;
    }

    private jumpTrigger: mw.Trigger = null;
    /**客户端的OnStart */
    private onStartC(): void {
        this.jumpTrigger = this.gameObject as mw.Trigger;
        this.jumpTrigger.onEnter.add((character: mw.Character) => {
            if (Player.localPlayer.character != character) return;
            this.getConfirmPanel.confirmTips(() => {
                mw.RouteService.enterNewGame("P_1daa99958ce8cf1a9b493d98c2616f805f78f1a2");
            }, "前往 枪战躲猫猫-废弃医院", "前往", "取消");
        });
    }

    /**客户端的update */
    private onUpdateC(dt: number): void {

    }

    /**------------------------------------------- 客户端 ------------------------------------------------ */

    /**------------------------------------------- 服务端 ------------------------------------------------ */
    /**服务端的OnStart */
    private onStartS(): void {
    }

    /**服务端的update */
    private onUpdateS(dt: number): void {

    }
    /**------------------------------------------- 服务端 ------------------------------------------------ */
}