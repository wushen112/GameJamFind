
/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * ATTENTION: onStart 等UI脚本自带函数不可改写为异步执行，有需求的异步逻辑请使用函数封装，通过函数接口在内部使用
 * UI: UI/Loading.ui
*/



@UIBind('UI/Loading.ui')
export default class Loading_Generate extends UIScript {
		private mText_Tips_Internal: mw.TextBlock
	public get mText_Tips(): mw.TextBlock {
		if(!this.mText_Tips_Internal&&this.uiWidgetBase) {
			this.mText_Tips_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mText_Tips') as mw.TextBlock
		}
		return this.mText_Tips_Internal
	}


 
	/**
	* onStart 之前触发一次
	*/
	protected onAwake() {
	}
	 
}
 