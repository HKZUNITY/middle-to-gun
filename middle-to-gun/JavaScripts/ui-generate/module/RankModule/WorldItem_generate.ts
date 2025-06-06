﻿/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/RankModule/WorldItem.ui
 * TIME: 2024.03.13-23.04.53
 */
 
@UIBind('UI/module/RankModule/WorldItem.ui')
export default class WorldItem_Generate extends UIScript {
		private mRankTextBlock_Internal: mw.TextBlock
	public get mRankTextBlock(): mw.TextBlock {
		if(!this.mRankTextBlock_Internal&&this.uiWidgetBase) {
			this.mRankTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/Canvas/mRankTextBlock') as mw.TextBlock
		}
		return this.mRankTextBlock_Internal
	}
	private mNameTextBlock_Internal: mw.TextBlock
	public get mNameTextBlock(): mw.TextBlock {
		if(!this.mNameTextBlock_Internal&&this.uiWidgetBase) {
			this.mNameTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/Canvas/mNameTextBlock') as mw.TextBlock
		}
		return this.mNameTextBlock_Internal
	}
	private mKillCountTextBlock_Internal: mw.TextBlock
	public get mKillCountTextBlock(): mw.TextBlock {
		if(!this.mKillCountTextBlock_Internal&&this.uiWidgetBase) {
			this.mKillCountTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/Canvas/mKillCountTextBlock') as mw.TextBlock
		}
		return this.mKillCountTextBlock_Internal
	}
	private mDieCountTextBlock_Internal: mw.TextBlock
	public get mDieCountTextBlock(): mw.TextBlock {
		if(!this.mDieCountTextBlock_Internal&&this.uiWidgetBase) {
			this.mDieCountTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/Canvas/mDieCountTextBlock') as mw.TextBlock
		}
		return this.mDieCountTextBlock_Internal
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
		
		//按钮多语言
		
		//文本多语言
		
		this.initLanguage(this.mRankTextBlock)
		
	
		this.initLanguage(this.mNameTextBlock)
		
	
		this.initLanguage(this.mKillCountTextBlock)
		
	
		this.initLanguage(this.mDieCountTextBlock)
		
	
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
 