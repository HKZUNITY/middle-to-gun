import ConfirmPanel from "../../common/ConfirmPanel";
import { Notice } from "../../common/notice/Notice";
import CoinModuleC from "../CoinModule/CoinModuleC";

@Component
export default class GetNpc extends Script {
    private confirmPanel: ConfirmPanel = null;
    private get getConfirmPanel(): ConfirmPanel {
        if (this.confirmPanel == null) {
            this.confirmPanel = UIService.getUI(ConfirmPanel);
        }
        return this.confirmPanel;
    }
    private coinModuleC: CoinModuleC = null;
    private get getCoinModuleC(): CoinModuleC {
        if (this.coinModuleC == null) {
            this.coinModuleC = ModuleService.getModule(CoinModuleC);
        }
        return this.coinModuleC;
    }
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        if (mw.SystemUtil.isClient()) {
            let parent = this.gameObject;
            let p = parent.getChildren();
            for (let i = 0; i < p.length; ++i) {
                let t = p[i].getChildren()[0] as mw.Trigger;
                let c = p[i] as mw.Character;
                t.onEnter.add((p: mw.Character) => {
                    if (p.gameObjectId == Player.localPlayer.character.gameObjectId) {
                        this.getConfirmPanel.confirmTips(() => {
                            if (this.getCoinModuleC.getDiamond >= 1) {
                                this.getCoinModuleC.setDiamond(-1);
                                Player.localPlayer.character.setDescription(c.getDescription());
                                Player.localPlayer.character.asyncReady().then(() => {
                                    Player.localPlayer.character.syncDescription();
                                });
                                Notice.showDownNotice("穿戴成功");
                                return true;
                            } else {
                                Notice.showDownNotice("钻石不足");
                                this.getCoinModuleC.getDiamondByAd(1);
                                return false;
                            }
                        }, "花费一个钻石免费穿戴", "穿戴", "取消", "免费");
                    }
                });
            }
        }
    }

    /**
     * 周期函数 每帧执行
     * 此函数执行需要将this.useUpdate赋值为true
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    protected onUpdate(dt: number): void {

    }

    /** 脚本被销毁时最后一帧执行完调用此函数 */
    protected onDestroy(): void {

    }
}