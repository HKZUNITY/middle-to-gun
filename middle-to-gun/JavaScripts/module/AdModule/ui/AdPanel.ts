import Utils from "../../../tools/Utils";
import AdPanel_Generate from "../../../ui-generate/module/AdModule/AdPanel_generate";

export default class AdPanel extends AdPanel_Generate {
    protected onStart(): void {
        this.canUpdate = false;
        this.layer = mw.UILayerDialog;

        this.bindButtons();
    }

    private bindButtons(): void {
        this.mYesBtn.onClicked.add(this.onClickYesButton.bind(this));
        this.mNoBtn.onClicked.add(this.onClickNoButton.bind(this));
    }

    private onClickYesButton(): void {
        this.hideAdPanel();
        if (this.callback) this.callback();
    }

    private onClickNoButton(): void {
        this.hideAdPanel();
    }

    private callback: () => void = null;
    private yesText: string = "领取";
    public showRewardAd(callback: () => void, contentText: string, noText: string = "取消", yesText = "领取", isAuto: boolean = true): void {
        this.callback = callback;
        this.mContentTxt.text = contentText;
        this.mNoBtn.text = noText;
        this.mYesBtn.text = yesText;
        this.yesText = yesText;
        this.showAdPanel();
        if (isAuto) this.autoYes();
    }

    private yesInterval: any = null;
    private autoYes(): void {
        this.clearAutoYesInterval();
        let time: number = 5;
        this.mYesBtn.text = this.yesText + "(" + time + ")";
        this.yesInterval = TimeUtil.setInterval(() => {
            time--;
            this.mYesBtn.text = this.yesText + "(" + time + ")";
            if (time <= 0) {
                this.onClickYesButton();
                this.clearAutoYesInterval();
            }
        }, 1);
    }

    private clearAutoYesInterval(): void {
        if (this.yesInterval) {
            TimeUtil.clearInterval(this.yesInterval);
            this.yesInterval = null;
        }
    }

    public showAdPanel(): void {
        if (this.visible) return;
        this.show();
    }

    public hideAdPanel(): void {
        this.clearAutoYesInterval();
        if (!this.visible) return;
        Utils.closeUITween(
            this.rootCanvas,
            null,
            () => {
                this.hide();
            }
        );
    }

    protected onShow(...params: any[]): void {
        Utils.openUITween(
            this.rootCanvas,
            null,
            null
        );
    }
}