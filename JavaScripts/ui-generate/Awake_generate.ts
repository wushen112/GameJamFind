
/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * ATTENTION: onStart 等UI脚本自带函数不可改写为异步执行，有需求的异步逻辑请使用函数封装，通过函数接口在内部使用
 * UI: UI/Awake.ui
*/



@UIBind('UI/Awake.ui')
export default class Awake_Generate extends UIScript {
		private mCanvas_Black_Internal: mw.Canvas
	public get mCanvas_Black(): mw.Canvas {
		if(!this.mCanvas_Black_Internal&&this.uiWidgetBase) {
			this.mCanvas_Black_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mCanvas_Black') as mw.Canvas
		}
		return this.mCanvas_Black_Internal
	}
	private mImg_Eye1_Internal: mw.Image
	public get mImg_Eye1(): mw.Image {
		if(!this.mImg_Eye1_Internal&&this.uiWidgetBase) {
			this.mImg_Eye1_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mCanvas_Black/mImg_Eye1') as mw.Image
		}
		return this.mImg_Eye1_Internal
	}


 
	/**
	* onStart 之前触发一次
	*/
	protected onAwake() {
	}
	 
}
 