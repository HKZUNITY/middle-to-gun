import { Notice } from "../../common/notice/Notice";
import { EventType } from "../../tools/EventType";
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
        this.defaultAds();
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
        this.getAdPanel.showRewardAd(() => {
            if (!GlobalData.isOpenIAA) {
                this.setCoin(10000);
                return;
            }
            Utils.showRewardAd(() => {
                this.setCoin(10000);
            });
        }, "免费领取10000金币");
    }

    public getDiamondByAd(): void {
        this.getAdPanel.showRewardAd(() => {
            if (!GlobalData.isOpenIAA) {
                this.setDiamond(1);
                return;
            }
            Utils.showRewardAd(() => {
                this.setDiamond(1);
            });
        }, "免费领取1个钻石");
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


    private defaultAds(): void {
        this.delay15Seconds();
        this.setInterval180Seconds();
    }

    private delay15Seconds(): void {
        TimeUtil.delaySecond(15).then(() => {
            this.getAdPanel.showRewardAd(() => {
                if (!GlobalData.isOpenIAA) {
                    this.setDiamond(2);
                    return;
                }
                Utils.showRewardAd(() => {
                    this.setDiamond(2);
                });
            }, "大礼包\n免费获得2个钻石");
        });
    }

    private setInterval180Seconds(): void {
        TimeUtil.setInterval(() => {
            this.getAdPanel.showRewardAd(() => {
                if (!GlobalData.isOpenIAA) {
                    this.setDiamond(3);
                    return;
                }
                Utils.showRewardAd(() => {
                    this.setDiamond(3);
                });
            }, "幸运大礼包\n免费获得3个钻石");
        }, 180);
    }

    private isFirst: boolean = true;
    public dieAds(): void {
        if (this.isFirst) {
            this.isFirst = false;
            return;
        }
        this.getAdPanel.showRewardAd(() => {
            if (!GlobalData.isOpenIAA) {
                this.setDiamond(2);
                return;
            }
            Utils.showRewardAd(() => {
                this.setDiamond(2);
            });
        }, "被击败奖励\n免费获得2个钻石");
        Event.dispatchToLocal(EventType.TryOutGun);
    }
}