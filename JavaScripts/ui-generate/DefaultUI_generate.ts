
/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * ATTENTION: onStart 等UI脚本自带函数不可改写为异步执行，有需求的异步逻辑请使用函数封装，通过函数接口在内部使用
 * UI: UI/DefaultUI.ui
*/



@UIBind('UI/DefaultUI.ui')
export default class DefaultUI_Generate extends UIScript {
		private virtualJoystickPanel_Internal: mw.VirtualJoystickPanel
	public get virtualJoystickPanel(): mw.VirtualJoystickPanel {
		if(!this.virtualJoystickPanel_Internal&&this.uiWidgetBase) {
			this.virtualJoystickPanel_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/virtualJoystickPanel') as mw.VirtualJoystickPanel
		}
		return this.virtualJoystickPanel_Internal
	}
	private mBtn_exchange_Internal: mw.Button
	public get mBtn_exchange(): mw.Button {
		if(!this.mBtn_exchange_Internal&&this.uiWidgetBase) {
			this.mBtn_exchange_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mBtn_exchange') as mw.Button
		}
		return this.mBtn_exchange_Internal
	}
	private mBtn_prop_Internal: mw.Button
	public get mBtn_prop(): mw.Button {
		if(!this.mBtn_prop_Internal&&this.uiWidgetBase) {
			this.mBtn_prop_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mBtn_prop') as mw.Button
		}
		return this.mBtn_prop_Internal
	}
	private canvas_Internal: mw.Canvas
	public get canvas(): mw.Canvas {
		if(!this.canvas_Internal&&this.uiWidgetBase) {
			this.canvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/ScrollBox/canvas') as mw.Canvas
		}
		return this.canvas_Internal
	}
	private mCanvas_Time_Internal: mw.Canvas
	public get mCanvas_Time(): mw.Canvas {
		if(!this.mCanvas_Time_Internal&&this.uiWidgetBase) {
			this.mCanvas_Time_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mCanvas_Time') as mw.Canvas
		}
		return this.mCanvas_Time_Internal
	}
	private mText_Time_Internal: mw.TextBlock
	public get mText_Time(): mw.TextBlock {
		if(!this.mText_Time_Internal&&this.uiWidgetBase) {
			this.mText_Time_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mCanvas_Time/mText_Time') as mw.TextBlock
		}
		return this.mText_Time_Internal
	}


 
	/**
	* onStart 之前触发一次
	*/
	protected onAwake() {
	}
	 
}
 