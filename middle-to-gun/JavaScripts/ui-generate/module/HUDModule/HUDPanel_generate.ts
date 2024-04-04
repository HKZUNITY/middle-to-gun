/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/HUDModule/HUDPanel.ui
 * TIME: 2024.03.16-12.54.22
 */
 
@UIBind('UI/module/HUDModule/HUDPanel.ui')
export default class HUDPanel_Generate extends UIScript {
		private mVirtualJoystickPanel_Internal: mw.VirtualJoystickPanel
	public get mVirtualJoystickPanel(): mw.VirtualJoystickPanel {
		if(!this.mVirtualJoystickPanel_Internal&&this.uiWidgetBase) {
			this.mVirtualJoystickPanel_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mVirtualJoystickPanel') as mw.VirtualJoystickPanel
		}
		return this.mVirtualJoystickPanel_Internal
	}
	private mTouchPad_Internal: mw.TouchPad
	public get mTouchPad(): mw.TouchPad {
		if(!this.mTouchPad_Internal&&this.uiWidgetBase) {
			this.mTouchPad_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mTouchPad') as mw.TouchPad
		}
		return this.mTouchPad_Internal
	}
	private mSetButton_Internal: mw.Button
	public get mSetButton(): mw.Button {
		if(!this.mSetButton_Internal&&this.uiWidgetBase) {
			this.mSetButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightButtonCanvas_1/SetCanvas/mSetButton') as mw.Button
		}
		return this.mSetButton_Internal
	}
	private mRankButton_Internal: mw.Button
	public get mRankButton(): mw.Button {
		if(!this.mRankButton_Internal&&this.uiWidgetBase) {
			this.mRankButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightButtonCanvas_1/RankCanvas/mRankButton') as mw.Button
		}
		return this.mRankButton_Internal
	}
	private mTaskButton_Internal: mw.Button
	public get mTaskButton(): mw.Button {
		if(!this.mTaskButton_Internal&&this.uiWidgetBase) {
			this.mTaskButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightButtonCanvas_1/TaskCanvas/mTaskButton') as mw.Button
		}
		return this.mTaskButton_Internal
	}
	private mTaskPointImage_Internal: mw.Image
	public get mTaskPointImage(): mw.Image {
		if(!this.mTaskPointImage_Internal&&this.uiWidgetBase) {
			this.mTaskPointImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightButtonCanvas_1/TaskCanvas/mTaskPointImage') as mw.Image
		}
		return this.mTaskPointImage_Internal
	}
	private mTaskBgImage_Internal: mw.Image
	public get mTaskBgImage(): mw.Image {
		if(!this.mTaskBgImage_Internal&&this.uiWidgetBase) {
			this.mTaskBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightButtonCanvas_1/TaskCanvas/mTaskBgImage') as mw.Image
		}
		return this.mTaskBgImage_Internal
	}
	private mActivityButton_Internal: mw.Button
	public get mActivityButton(): mw.Button {
		if(!this.mActivityButton_Internal&&this.uiWidgetBase) {
			this.mActivityButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightButtonCanvas_2/ActivityCanvas/mActivityButton') as mw.Button
		}
		return this.mActivityButton_Internal
	}
	private mActivityPointImage_Internal: mw.Image
	public get mActivityPointImage(): mw.Image {
		if(!this.mActivityPointImage_Internal&&this.uiWidgetBase) {
			this.mActivityPointImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightButtonCanvas_2/ActivityCanvas/mActivityPointImage') as mw.Image
		}
		return this.mActivityPointImage_Internal
	}
	private mShopButton_Internal: mw.Button
	public get mShopButton(): mw.Button {
		if(!this.mShopButton_Internal&&this.uiWidgetBase) {
			this.mShopButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/RightButtonCanvas_2/ShopCanvas/mShopButton') as mw.Button
		}
		return this.mShopButton_Internal
	}
	private mIconmage_Internal: mw.Image
	public get mIconmage(): mw.Image {
		if(!this.mIconmage_Internal&&this.uiWidgetBase) {
			this.mIconmage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/PlayerCanvas/PlayerIconCanvas/mIconmage') as mw.Image
		}
		return this.mIconmage_Internal
	}
	private mRankTextBlock_Internal: mw.TextBlock
	public get mRankTextBlock(): mw.TextBlock {
		if(!this.mRankTextBlock_Internal&&this.uiWidgetBase) {
			this.mRankTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/PlayerCanvas/RankCanvas/mRankTextBlock') as mw.TextBlock
		}
		return this.mRankTextBlock_Internal
	}
	private mHpProgressBar_Internal: mw.ProgressBar
	public get mHpProgressBar(): mw.ProgressBar {
		if(!this.mHpProgressBar_Internal&&this.uiWidgetBase) {
			this.mHpProgressBar_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/PlayerCanvas/HpCanvas/mHpProgressBar') as mw.ProgressBar
		}
		return this.mHpProgressBar_Internal
	}
	private mHpTextBlock_Internal: mw.TextBlock
	public get mHpTextBlock(): mw.TextBlock {
		if(!this.mHpTextBlock_Internal&&this.uiWidgetBase) {
			this.mHpTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/PlayerCanvas/HpCanvas/mHpTextBlock') as mw.TextBlock
		}
		return this.mHpTextBlock_Internal
	}
	private mKillTipCountCanvas_Internal: mw.Canvas
	public get mKillTipCountCanvas(): mw.Canvas {
		if(!this.mKillTipCountCanvas_Internal&&this.uiWidgetBase) {
			this.mKillTipCountCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/KillStreakCanvas/mKillTipCountCanvas') as mw.Canvas
		}
		return this.mKillTipCountCanvas_Internal
	}
	private mKillTipTextBlock1_Internal: mw.TextBlock
	public get mKillTipTextBlock1(): mw.TextBlock {
		if(!this.mKillTipTextBlock1_Internal&&this.uiWidgetBase) {
			this.mKillTipTextBlock1_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/KillStreakCanvas/mKillTipCountCanvas/mKillTipTextBlock1') as mw.TextBlock
		}
		return this.mKillTipTextBlock1_Internal
	}
	private mKillTipTextBlock2_Internal: mw.TextBlock
	public get mKillTipTextBlock2(): mw.TextBlock {
		if(!this.mKillTipTextBlock2_Internal&&this.uiWidgetBase) {
			this.mKillTipTextBlock2_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/KillStreakCanvas/mKillTipCountCanvas/mKillTipTextBlock2') as mw.TextBlock
		}
		return this.mKillTipTextBlock2_Internal
	}
	private mKillTipTextBlock3_Internal: mw.TextBlock
	public get mKillTipTextBlock3(): mw.TextBlock {
		if(!this.mKillTipTextBlock3_Internal&&this.uiWidgetBase) {
			this.mKillTipTextBlock3_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/KillStreakCanvas/mKillTipTextBlock3') as mw.TextBlock
		}
		return this.mKillTipTextBlock3_Internal
	}
	private mKillTipCanvas_Internal: mw.Canvas
	public get mKillTipCanvas(): mw.Canvas {
		if(!this.mKillTipCanvas_Internal&&this.uiWidgetBase) {
			this.mKillTipCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mKillTipCanvas') as mw.Canvas
		}
		return this.mKillTipCanvas_Internal
	}
	private mInvincibleCanvas_Internal: mw.Canvas
	public get mInvincibleCanvas(): mw.Canvas {
		if(!this.mInvincibleCanvas_Internal&&this.uiWidgetBase) {
			this.mInvincibleCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mInvincibleCanvas') as mw.Canvas
		}
		return this.mInvincibleCanvas_Internal
	}
	private mInvincibleProgressBar_Internal: mw.ProgressBar
	public get mInvincibleProgressBar(): mw.ProgressBar {
		if(!this.mInvincibleProgressBar_Internal&&this.uiWidgetBase) {
			this.mInvincibleProgressBar_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mInvincibleCanvas/mInvincibleProgressBar') as mw.ProgressBar
		}
		return this.mInvincibleProgressBar_Internal
	}
	private mInvincibleTextBlock_Internal: mw.TextBlock
	public get mInvincibleTextBlock(): mw.TextBlock {
		if(!this.mInvincibleTextBlock_Internal&&this.uiWidgetBase) {
			this.mInvincibleTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mInvincibleCanvas/mInvincibleTextBlock') as mw.TextBlock
		}
		return this.mInvincibleTextBlock_Internal
	}
	private mDeadCanvas_Internal: mw.Canvas
	public get mDeadCanvas(): mw.Canvas {
		if(!this.mDeadCanvas_Internal&&this.uiWidgetBase) {
			this.mDeadCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mDeadCanvas') as mw.Canvas
		}
		return this.mDeadCanvas_Internal
	}
	private mDeadCountDownTextBlock_Internal: mw.TextBlock
	public get mDeadCountDownTextBlock(): mw.TextBlock {
		if(!this.mDeadCountDownTextBlock_Internal&&this.uiWidgetBase) {
			this.mDeadCountDownTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mDeadCanvas/mDeadCountDownTextBlock') as mw.TextBlock
		}
		return this.mDeadCountDownTextBlock_Internal
	}
	private mSetCanvas_Internal: mw.Canvas
	public get mSetCanvas(): mw.Canvas {
		if(!this.mSetCanvas_Internal&&this.uiWidgetBase) {
			this.mSetCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas') as mw.Canvas
		}
		return this.mSetCanvas_Internal
	}
	private mFireCanvas_Internal: mw.Canvas
	public get mFireCanvas(): mw.Canvas {
		if(!this.mFireCanvas_Internal&&this.uiWidgetBase) {
			this.mFireCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mFireCanvas') as mw.Canvas
		}
		return this.mFireCanvas_Internal
	}
	private mFireProgressBar_Internal: mw.ProgressBar
	public get mFireProgressBar(): mw.ProgressBar {
		if(!this.mFireProgressBar_Internal&&this.uiWidgetBase) {
			this.mFireProgressBar_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mFireCanvas/mFireProgressBar') as mw.ProgressBar
		}
		return this.mFireProgressBar_Internal
	}
	private mControlCanvas_Internal: mw.Canvas
	public get mControlCanvas(): mw.Canvas {
		if(!this.mControlCanvas_Internal&&this.uiWidgetBase) {
			this.mControlCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mControlCanvas') as mw.Canvas
		}
		return this.mControlCanvas_Internal
	}
	private mControlProgressBar_Internal: mw.ProgressBar
	public get mControlProgressBar(): mw.ProgressBar {
		if(!this.mControlProgressBar_Internal&&this.uiWidgetBase) {
			this.mControlProgressBar_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mControlCanvas/mControlProgressBar') as mw.ProgressBar
		}
		return this.mControlProgressBar_Internal
	}
	private mBgmCanvas_Internal: mw.Canvas
	public get mBgmCanvas(): mw.Canvas {
		if(!this.mBgmCanvas_Internal&&this.uiWidgetBase) {
			this.mBgmCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mBgmCanvas') as mw.Canvas
		}
		return this.mBgmCanvas_Internal
	}
	private mBgmProgressBar_Internal: mw.ProgressBar
	public get mBgmProgressBar(): mw.ProgressBar {
		if(!this.mBgmProgressBar_Internal&&this.uiWidgetBase) {
			this.mBgmProgressBar_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mBgmCanvas/mBgmProgressBar') as mw.ProgressBar
		}
		return this.mBgmProgressBar_Internal
	}
	private mSoundCanvas_Internal: mw.Canvas
	public get mSoundCanvas(): mw.Canvas {
		if(!this.mSoundCanvas_Internal&&this.uiWidgetBase) {
			this.mSoundCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mSoundCanvas') as mw.Canvas
		}
		return this.mSoundCanvas_Internal
	}
	private mSoundProgressBar_Internal: mw.ProgressBar
	public get mSoundProgressBar(): mw.ProgressBar {
		if(!this.mSoundProgressBar_Internal&&this.uiWidgetBase) {
			this.mSoundProgressBar_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mSoundCanvas/mSoundProgressBar') as mw.ProgressBar
		}
		return this.mSoundProgressBar_Internal
	}
	private mSetCloseButton_Internal: mw.Button
	public get mSetCloseButton(): mw.Button {
		if(!this.mSetCloseButton_Internal&&this.uiWidgetBase) {
			this.mSetCloseButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/mSetCloseButton') as mw.Button
		}
		return this.mSetCloseButton_Internal
	}
	private mResetPosButton_Internal: mw.Button
	public get mResetPosButton(): mw.Button {
		if(!this.mResetPosButton_Internal&&this.uiWidgetBase) {
			this.mResetPosButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSetCanvas/SetBgCanvas/mResetPosButton') as mw.Button
		}
		return this.mResetPosButton_Internal
	}


	protected onAwake() {
		//设置能否每帧触发onUpdate
		this.canUpdate = false;
		this.layer = mw.UILayerBottom;
		this.initButtons();
	}
	protected initButtons() {
		//按钮添加点击
		
		//按钮添加点击
		
		this.mSetButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mSetButton");
		});
		this.mSetButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mRankButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mRankButton");
		});
		this.mRankButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mTaskButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mTaskButton");
		});
		this.mTaskButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mActivityButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mActivityButton");
		});
		this.mActivityButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mShopButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mShopButton");
		});
		this.mShopButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mSetCloseButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mSetCloseButton");
		});
		this.mSetCloseButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mResetPosButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mResetPosButton");
		});
		this.mResetPosButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		//按钮多语言
		
		//文本多语言
		
		this.initLanguage(this.mRankTextBlock)
		
	
		this.initLanguage(this.mHpTextBlock)
		
	
		this.initLanguage(this.mKillTipTextBlock1)
		
	
		this.initLanguage(this.mKillTipTextBlock2)
		
	
		this.initLanguage(this.mKillTipTextBlock3)
		
	
		this.initLanguage(this.mInvincibleTextBlock)
		
	
		this.initLanguage(this.mDeadCountDownTextBlock)
		
	
		//文本多语言
		
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/PlayerCanvas/HpCanvas/HpTextBlock") as any);
		
	
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mDeadCanvas/DeadTextBlock") as any);
		
	
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mDeadCanvas/DeadTipsTextBlock") as any);
		
	
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetTextBlock") as any);
		
	
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mFireCanvas/FireTextBlock") as any);
		
	
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mFireCanvas/LowFireTextBlock") as any);
		
	
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mFireCanvas/MiddleFireTextBlock") as any);
		
	
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mFireCanvas/HighFireTextBlock") as any);
		
	
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mControlCanvas/ControlTextBlock") as any);
		
	
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mControlCanvas/LowControlTextBlock") as any);
		
	
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mControlCanvas/MiddleControlTextBlock") as any);
		
	
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mControlCanvas/HighControlTextBlock") as any);
		
	
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mBgmCanvas/BgmTextBlock") as any);
		
	
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mBgmCanvas/LowBgmTextBlock") as any);
		
	
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mBgmCanvas/MiddleBgmTextBlock") as any);
		
	
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mBgmCanvas/HighBgmTextBlock") as any);
		
	
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mSoundCanvas/SoundTextBlock") as any);
		
	
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mSoundCanvas/LowSoundTextBlock") as any);
		
	
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mSoundCanvas/MiddleSoundTextBlock") as any);
		
	
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/SetMainCanvas/mSoundCanvas/HighSoundTextBlock") as any);
		
	
		this.initLanguage(this.uiWidgetBase.findChildByPath("RootCanvas/mSetCanvas/SetBgCanvas/mResetPosButton/ResetTextBlock") as any);
		
	
	}
	
	/**初始化多语言*/
	private initLanguage(ui: mw.StaleButton | mw.TextBlock) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }

	protected onShow(...params: any[]): void {};

	/**显示panel*/
    public show(...param): void {
		mw.UIService.showUI(this, this.layer, ...param);
	}

	/**隐藏panel*/
    public hide(): void {
		mw.UIService.hideUI(this);
	}
 }
 