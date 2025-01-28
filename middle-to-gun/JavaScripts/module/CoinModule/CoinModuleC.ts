import { Notice } from "../../common/notice/Notice";
import GlobalData from "../../tools/GlobalData";
import Utils from "../../tools/Utils";
import AdPanel from "../AdModule/ui/AdPanel";
import CoinData from "./CoinData";
import CoinModuleS from "./CoinModuleS";
import CoinPanel from "./ui/CoinPanel";

export default class CoinModuleC extends ModuleC<CoinModuleS, CoinData> {
    private coinPanel: CoinPanel = null;
    private get getCoinPanel(): CoinPanel {
        if (this.coinPanel == null) {
            this.coinPanel = mw.UIService.getUI(CoinPanel);
        }
        return this.coinPanel;
    }

    private adPanel: AdPanel = null;
    private get getAdPanel(): AdPanel {
        if (this.adPanel == null) {
            this.adPanel = UIService.getUI(AdPanel);
        }
        return this.adPanel;
    }

    public onAddCoinAction: Action = new Action();
    public onAddDiamondAction: Action = new Action();

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        // this.initModule();
        this.initUIPanel();
        this.bindEventAction();
    }

    // private initModule(): void {

    // }

    private initUIPanel(): void {
        this.coinPanel = mw.UIService.getUI(CoinPanel);
        this.adPanel = UIService.getUI(AdPanel);
    }

    private bindEventAction(): void {
        this.onAddCoinAction.add(this.getCoinByAd.bind(this));
        this.onAddDiamondAction.add(this.getDiamondByAd.bind(this));
    }

    private coin: number = 0;
    private diamond: number = 0;
    protected onEnterScene(sceneType: number): void {
        this.getCoinPanel.show();
        this.coin = this.data.coin;
        this.diamond = this.data.diamond;
        this.getCoinPanel.setCoinAndDiamond(this.coin, this.diamond);
    }

    public setCoin(coin: number): void {
        this.coin += coin;
        this.popupNotice(coin, true);
        if (this.coin < 0) this.coin = 0;
        this.server.net_setCoin(this.coin);
        this.getCoinPanel.setCoin(this.coin);
    }

    public setDiamond(diamond: number): void {
        this.diamond += diamond;
        this.popupNotice(diamond, false);
        if (this.diamond < 0) this.diamond = 0;
        this.server.net_setDiamond(this.diamond);
        this.getCoinPanel.setDiamond(this.diamond);
    }

    public get getCoin(): number {
        return this.coin;
    }

    public get getDiamond(): number {
        return this.diamond;
    }

    public getCoinByAd(): void {
        if (GlobalData.isOpenIAA) {
            this.getAdPanel.showRewardAd(() => {
                this.setCoin(GlobalData.addCoin);
            }, `免费领取${GlobalData.addCoin}金币`);
        } else {
            this.setCoin(GlobalData.addCoin);
        }
    }

    public getDiamondByAd(): void {
        if (GlobalData.isOpenIAA) {
            this.getAdPanel.showRewardAd(() => {
                this.setDiamond(GlobalData.addDiamond);
            }, `免费领取${GlobalData.addDiamond}个钻石`);
        } else {
            this.setDiamond(GlobalData.addDiamond);
        }
    }

    public net_killPlayerAddCoin(coin: number): void {
        this.coin += coin;
        this.popupNotice(coin, true);
        this.getCoinPanel.setCoin(this.coin);
    }

    private popupNotice(num: number, isCoin: boolean): void {
        if (num == 0) return;
        Notice.showDownNotice("<color=#" + (num > 0 ? "yellow>" : "red>") + (num > 0 ? "获得" : "花费") + (isCoin ? "金币" : "钻石") + num + "</color>");
        // Notice.showDownNotice("<color=#lime>" + "<size=18>" + killerName + " 击败了 " + killedName + "</size>" + "</color>"
        //     + "\n" + "<color=#red>完成了" + killTips + "</color>");
    }
}