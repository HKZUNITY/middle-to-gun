﻿/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/AdModule/AdPanel.ui
 * TIME: 2024.03.13-23.04.52
 */
 
@UIBind('UI/module/AdModule/AdPanel.ui')
export default class AdPanel_Generate extends UIScript {
		private mTitleTxt_Internal: mw.TextBlock
	public get mTitleTxt(): mw.TextBlock {
		if(!this.mTitleTxt_Internal&&this.uiWidgetBase) {
			this.mTitleTxt_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/Canvas/Canvas_1/mTitleTxt') as mw.TextBlock
		}
		return this.mTitleTxt_Internal
	}
	private mContentTxt_Internal: mw.TextBlock
	public get mContentTxt(): mw.TextBlock {
		if(!this.mContentTxt_Internal&&this.uiWidgetBase) {
			this.mContentTxt_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/Canvas/Canvas_1/mContentTxt') as mw.TextBlock
		}
		return this.mContentTxt_Internal
	}
	private mNoBtn_Internal: mw.StaleButton
	public get mNoBtn(): mw.StaleButton {
		if(!this.mNoBtn_Internal&&this.uiWidgetBase) {
			this.mNoBtn_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/Canvas/Canvas_1/mNoBtn') as mw.StaleButton
		}
		return this.mNoBtn_Internal
	}
	private mYesBtn_Internal: mw.StaleButton
	public get mYesBtn(): mw.StaleButton {
		if(!this.mYesBtn_Internal&&this.uiWidgetBase) {
			this.mYesBtn_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/Canvas/Canvas_1/mYesBtn') as mw.StaleButton
		}
		return this.mYesBtn_Internal
	}


	protected onAwake() {
		//设置能否每帧触发onUpdate
		this.canUpdate = false;
		this.layer = mw.UILayerBottom;
		this.initButtons();
	}
	protected initButtons() {
		//按钮添加点击
		
		this.mNoBtn.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mNoBtn");
		});
		this.initLanguage(this.mNoBtn);
		this.mNoBtn.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mYesBtn.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mYesBtn");
		});
		this.initLanguage(this.mYesBtn);
		this.mYesBtn.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		//按钮添加点击
		
		//按钮多语言
		
		//文本多语言
		
		this.initLanguage(this.mTitleTxt)
		
	
		this.initLanguage(this.mContentTxt)
		
	
		//文本多语言
		
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
 