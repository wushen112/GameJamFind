
/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * ATTENTION: onStart 等UI脚本自带函数不可改写为异步执行，有需求的异步逻辑请使用函数封装，通过函数接口在内部使用
 * UI: UI/EndTips.ui
*/



@UIBind('UI/EndTips.ui')
export default class EndTips_Generate extends UIScript {
		private mText_Take_Internal: mw.TextBlock
	public get mText_Take(): mw.TextBlock {
		if(!this.mText_Take_Internal&&this.uiWidgetBase) {
			this.mText_Take_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mText_Take') as mw.TextBlock
		}
		return this.mText_Take_Internal
	}


 
	/**
	* onStart 之前触发一次
	*/
	protected onAwake() {
	}
	 
}
 