'use strict';

/*
 * @Author: wushen112 330177253@qq.com
 * @Date: 2024-07-06 11:08:02
 * @LastEditors: wushen112 330177253@qq.com
 * @LastEditTime: 2024-07-06 11:09:01
 * @FilePath: \test\JavaScripts\EventData.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class EventData {
}
EventData.GameStart = "gameStart";

var foreign1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: EventData
});

/*
 * @Author: wushen112 330177253@qq.com
 * @Date: 2024-07-06 14:11:24
 * @LastEditors: wushen112 330177253@qq.com
 * @LastEditTime: 2024-07-06 14:17:15
 * @FilePath: \test\JavaScripts\GameController.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class GameController {
    static get instance() {
        if (!this._insance) {
            this._insance = new GameController();
        }
        return this._insance;
    }
    onUpdate() {
    }
}

var foreign2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: GameController
});

var foreign3 = /*#__PURE__*/Object.freeze({
    __proto__: null
});

/*
 * @Author: wushen112 330177253@qq.com
 * @Date: 2024-07-06 11:29:43
 * @LastEditors: wushen112 330177253@qq.com
 * @LastEditTime: 2024-07-06 14:06:20
 * @FilePath: \test\JavaScripts\TimeController.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class TimeController {
    constructor() {
        this.time = 0;
    }
    static get instance() {
        if (!this._instance) {
            this._instance = new TimeController();
        }
        return this._instance;
    }
}

var foreign9 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: TimeController
});

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * ATTENTION: onStart 等UI脚本自带函数不可改写为异步执行，有需求的异步逻辑请使用函数封装，通过函数接口在内部使用
 * UI: UI/DefaultUI.ui
*/
let DefaultUI_Generate = class DefaultUI_Generate extends UIScript {
    get virtualJoystickPanel() {
        if (!this.virtualJoystickPanel_Internal && this.uiWidgetBase) {
            this.virtualJoystickPanel_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/virtualJoystickPanel');
        }
        return this.virtualJoystickPanel_Internal;
    }
    get mCanvas_Time() {
        if (!this.mCanvas_Time_Internal && this.uiWidgetBase) {
            this.mCanvas_Time_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mCanvas_Time');
        }
        return this.mCanvas_Time_Internal;
    }
    get mText_Time() {
        if (!this.mText_Time_Internal && this.uiWidgetBase) {
            this.mText_Time_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mCanvas_Time/mText_Time');
        }
        return this.mText_Time_Internal;
    }
    /**
    * onStart 之前触发一次
    */
    onAwake() {
    }
};
DefaultUI_Generate = __decorate([
    UIBind('UI/DefaultUI.ui')
], DefaultUI_Generate);
var DefaultUI_Generate$1 = DefaultUI_Generate;

var foreign15 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: DefaultUI_Generate$1
});

/*
 * @Author: wushen112 330177253@qq.com
 * @Date: 2024-07-06 10:39:43
 * @LastEditors: wushen112 330177253@qq.com
 * @LastEditTime: 2024-07-06 15:54:10
 * @FilePath: \test\JavaScripts\M_XC\DefaultUI.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: wushen112 330177253@qq.com
 * @Date: 2024-07-06 10:39:43
 * @LastEditors: wushen112 330177253@qq.com
 * @LastEditTime: 2024-07-06 14:06:40
 * @FilePath: \test\JavaScripts\M_XC\DefaultUI.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class DefaultUI extends DefaultUI_Generate$1 {
    constructor() {
        super(...arguments);
        //倒计时0.1秒计时器
        this._timer = 0;
        /**总时间 */
        this.time = 180;
    }
    onStart() {
        this.virtualJoystickPanel.onInputDir.add((vec) => {
            TimeController.instance.time = Vector2.distance(Vector2.zero, vec);
        });
    }
    onUpdate(dt) {
        TweenUtil.TWEEN.update();
        this._timer += dt * TimeController.instance.time;
        console.log("当前速度是", TimeController.instance.time);
        if (this._timer >= 0.1 && this.time > 0) {
            this.time -= 0.1;
            this._timer = 0;
            //TODO 添加一个倒计时的Ui
            const data = this.calTime(this.time);
            this.mText_Time.text = data.minute + ':' + data.second + ':' + data.ms;
        }
        if (this.time <= 0) ;
        //const hitResult = QueryUtil.lineTrace(Camera.currentCamera.worldTransform.position,ScreenUtil.getSightBeadPosition(),true,true)
        //console.log(hitResult[0].gameObject.name)
    }
    calTime(time) {
        const minute = Math.floor(time / 60);
        const second = Math.floor(time % 60);
        const ms = Math.round((time - Math.floor(time)) * 10);
        return { minute, second, ms };
    }
}
// @UIBind('')
// export default class DefaultUI2 extends UIScript {
// 	private obj_canvas : Canvas;
// 	private select_ui : Select_UI
// 	private tip_canvas : Canvas;
// 	private PLayTime : number = 120 //游玩时间
// 	private BoxState : boolean = false; //宝箱领取状态
// 	private goalText : TextBlock;//玩家金币数目
// 	private goalImage : Image;//玩家金币图标
// 	private vir : VirtualJoystickPanel
// 	/*****************************物品栏相关********************************/
// 	private M_slots :Array<Slot_UI> = new Array<Slot_UI>();
// 	private slots: Map<string,Slot_Data> = new Map<string,Slot_Data>();
// 	private slot_cnt :number
// 	public init_canvas(cnt:number){
// 		this.slot_cnt = cnt
// 		for(let i = 0 ; i< cnt ; i++){
// 			let slot = UIService.create(Slot_UI)
// 			slot.init(i)
// 			this.obj_canvas.addChild(slot.uiWidgetBase)
// 			this.M_slots.push(slot)
// 		}
// 	}
// 	private update_slot(){
// 		let index = 0
// 		for(let value of this.slots.values()){
// 			if(value.cnt>0){
// 				this.M_slots[index].update_ui(value.cnt,value.icon_id)
// 				index++
// 			}
// 			else
// 				continue
// 		}
// 		for(index;index<this.M_slots.length;index++){
// 			this.M_slots[index].init(index)
// 		}
// 	}
// 	/**********************************************************************/
// 	/** 仅在游戏时间对非模板实例调用一次 */
//     protected  onStart() {
// 		//设置能否每帧触发onUpdate
// 		this.canUpdate = true;
// 		//找到对应的跳跃按钮
//         const jumpBtn = this.uiWidgetBase.findChildByPath('RootCanvas/Button_Jump') as Button
// 		const LayBtn = this.uiWidgetBase.findChildByPath('RootCanvas/Button_Lay') as Button
// 		this.goalText = this.uiWidgetBase.findChildByPath('RootCanvas/Goal/TextBlock') as TextBlock
// 		const IllBtn = this.uiWidgetBase.findChildByPath('RootCanvas/Ill/Ill_Button') as Button
// 		const TrailBtn = this.uiWidgetBase.findChildByPath('RootCanvas/Trailing/Ill_Button') as Button
// 		const WingBtn = this.uiWidgetBase.findChildByPath('RootCanvas/Wing/Ill_Button') as Button
// 		const Cloth = this.uiWidgetBase.findChildByPath('RootCanvas/Cloth/Ill_Button') as Button
// 		const Hat = this.uiWidgetBase.findChildByPath('RootCanvas/Hat/Ill_Button') as Button
// 		const Anim = this.uiWidgetBase.findChildByPath('RootCanvas/Anim/Ill_Button') as Button
// 		const BGM = this.uiWidgetBase.findChildByPath('RootCanvas/BGM/Ill_Button') as Button
// 		this.obj_canvas = this.uiWidgetBase.findChildByPath('RootCanvas/ScrollBox/Canvas') as Canvas
// 		const dot = this.uiWidgetBase.findChildByPath('RootCanvas/Image') as Image
// 		const RSTBtn = this.uiWidgetBase.findChildByPath('RootCanvas/RstButton') as Button
// 		this.goalImage = this.uiWidgetBase.findChildByPath('RootCanvas/Goal/IMG') as Image
// 		this.timeUI = this.uiWidgetBase.findChildByPath('RootCanvas/mCanvas_Time/mText_Time') as TextBlock
// 		this.vir = this.uiWidgetBase.findChildByPath('RootCanvas/VirtualJoystickPanel') as VirtualJoystickPanel
// 		this.vir.onInputDir.add((vec)=>{
// 			TimeController.instance.time = Vector2.distance(Vector2.zero,vec)
// 		})
// 		RSTBtn.onPressed.add(()=>{
// 			M_Player.instance.Rst();
// 		})
// 		Event.addLocalListener("dot",(preset:boolean)=>{
// 			if(!preset)
// 				dot.destroyObject()
// 		})
// 		this.tip_canvas = this.uiWidgetBase.findChildByPath('RootCanvas/Canvas_1') as Canvas
// 		/**********tip相关***********/
// 		Event.addLocalListener("Tips",(tip:string)=>{
// 			this.UpdateTip(tip)
// 		})
// 		/***************************/
// 		/*********物品栏相关*********/
// 		Event.addLocalListener("Init_Slot",(cnt:number)=>{this.init_canvas(cnt)})
// 		Event.addLocalListener("Get_Slot_Obj",(id:string,tag:string)=>{
// 			let temp = this.slots.get(tag)
// 			if(temp){
// 				temp.cnt++
// 			}
// 			else{
// 				var slot_data : Slot_Data = {
// 					icon_id : id,
// 					tag: tag,
// 					cnt : 1
// 				}
// 				this.slots.set(tag,slot_data)
// 			}
// 			this.update_slot()
// 		})
// 		Event.addLocalListener("Update_Slot",(flag:boolean,tag_ary:any,consume_cnt:any)=>{
// 			if(!flag)
// 				return
// 			console.log("ui")
// 			for(let i = 0 ; i < tag_ary.length ;i++){
// 				let data = this.slots.get(tag_ary[i])
// 				data.cnt -= consume_cnt[i]
// 			}
// 			this.update_slot()
// 		})
// 		/************************/
// 		/*********按钮相关*********/
// 		Event.addLocalListener("visible_button",(tag:string,scr:any,type:number,event_name:string)=>{
// 			if(this.select_ui)
// 				return
// 			this.select_ui = UIService.show(Select_UI,scr,tag,type,event_name,this.slots)
// 			this.select_ui.uiWidgetBase.position = new Vector2(1450,700)
// 			//this.update_slot()
// 		})
// 		Event.addLocalListener("Unvisible_button",()=>{
// 			try {
// 				this.select_ui.destroy()
// 				this.select_ui = undefined
// 			} catch (error) {
// 			}
// 		})
// 		/************************/
// 		/*********图鉴相关*********/
// 		Event.addLocalListener("Update_gold",()=>{
// 			this.UpdateGold()
// 		})
// 		IllBtn.onPressed.add(()=>{
// 			Items.instance.Update_UI(SlateVisibility.Visible)
// 		})
// 		TrailBtn.onPressed.add(()=>{
// 			Event.dispatchToLocal("Open_UI",1)
// 		})
// 		WingBtn.onPressed.add(()=>{
// 			Event.dispatchToLocal("Open_UI",2)
// 		})
// 		Cloth.onPressed.add(()=>{
// 			Event.dispatchToLocal("Open_UI",3)
// 		})
// 		Hat.onPressed.add(()=>{
// 			Event.dispatchToLocal("Open_UI",4)
// 		})
// 		Anim.onPressed.add(()=>{
// 			Event.dispatchToLocal("Open_UI",5)
// 		})
// 		BGM.onPressed.add(()=>{
// 			Event.dispatchToLocal("Open_UI",6)
// 		})
// 		/************************/
// 		//点击跳跃按钮,异步获取人物后执行跳跃
//         jumpBtn.onPressed.add(()=>{
// 			Player.asyncGetLocalPlayer().then((player) => {
// 				player.character.changeState(CharacterStateType.Jumping);
// 			});
// 		})	 
// 		LayBtn.onPressed.add(()=>{
// 			M_Player.instance.Lay()
// 		})
// 		//******************************************倒计时宝箱功能********************************************************** */
// 		const ReadyBG = this.uiWidgetBase.findChildByPath('RootCanvas/Box/ReadyBG') as Image   //倒计时到达后，提醒领取宝箱的背景
// 		const BoxBtn = this.uiWidgetBase.findChildByPath('RootCanvas/Box/Button') as Button //宝箱交互按钮
// 		const TimeText = this.uiWidgetBase.findChildByPath('RootCanvas/Box/Time') as TextBlock //宝箱领取倒计时文本
// 		//倒计时逻辑,每两分钟给予一次奖励
// 		setInterval(()=>{
// 			if(!this.BoxState)
// 				this.PLayTime--
// 			if(this.PLayTime == 0){
// 				this.BoxState = true
// 				TimeText.text = "宝箱已就绪"
// 				ReadyBG.visibility = SlateVisibility.Visible
// 			}
// 			else
// 				TimeText.text = this.PLayTime.toString()+"s"
// 		},1000)
// 		BoxBtn.onPressed.add(()=>{
// 			if(this.BoxState){
// 				let RandomGold = MathUtil.randomInt(1,6) //随机生成一个数，作为奖励奖杯数
// 				this.UpdateTip("获取"+RandomGold+"个奖杯")
// 				M_Player.instance.PlayerGoalCnt += RandomGold
// 				this.UpdateGold()
// 				this.PLayTime = 120 ;
// 				this.BoxState = false;
// 				ReadyBG.visibility = SlateVisibility.Hidden
// 				TimeText.text = this.PLayTime.toString()+"s"
// 			}
// 			else
// 				this.UpdateTip("宝箱还未准备好")
// 		})
// 		//**************************************************************************************************************** */
//     }
// 	//更新玩家金币数
// 	private UpdateGold(){
// 		Tools.imageJump(this.goalImage)
// 		this.goalText.text = M_Player.instance.PlayerGoalCnt.toString()
// 	}
// 	//更新Tip
// 	private UpdateTip(tip:string){
// 		let tip_ui = UIService.create(Tip_UI)
// 			tip_ui.init(tip)
// 			this.tip_canvas.addChild(tip_ui.uiWidgetBase)
// 			setTimeout(() => {
// 				tip_ui.destroy()
// 			}, 2000);
// 	}
// 	onUpdate(dt){
// 		TweenUtil.TWEEN.update();
// 		this._timer += dt * TimeController.instance.time 
// 		console.log("当前速度是",TimeController.instance.time )
// 		if(this._timer >= 0.1&&this.time>0){
// 			this.time -= 0.1;
// 			this._timer = 0;
// 			//TODO 添加一个倒计时的Ui
// 			const data = this.calTime(this.time);
// 			this.timeUI.text = data.minute+':'+data.second+':'+data.ms
// 		}
// 		if(this.time<=0){
// 			//TODO 走死亡路径
// 		}
// 		//const hitResult = QueryUtil.lineTrace(Camera.currentCamera.worldTransform.position,ScreenUtil.getSightBeadPosition(),true,true)
// 		//console.log(hitResult[0].gameObject.name)
// 	}
// 	calTime(time:number){
// 		const minute = Math.floor (time /60);
// 		const second = Math.floor (time%60);
// 		const ms =Math.round( (time - Math.floor(time))*10);
// 		return {minute,second,ms};
// 	}
// }

var foreign4 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: DefaultUI
});

//import ItemTrigger from "../Trigger/ItemTrigger"
//import SlotTrigger from "../Trigger/SlotTrigger"
//import UseItemTrigger from "../Trigger/UseItemTrigger"
class Obj_Manager {
    static get instance() {
        if (Obj_Manager._instacne == null) {
            Obj_Manager._instacne = new Obj_Manager();
        }
        return Obj_Manager._instacne;
    }
    check_get(res) {
        let ui_flag = false;
        res.forEach(result => {
            let obj = result.gameObject;
            if (obj) {
                let name = obj.name;
                switch (name) {
                    case "Slot":
                        let scr1 = obj.getComponent();
                        Event.dispatchToLocal("visible_button", "获取" + obj.tag, scr1, 0, "");
                        ui_flag = true;
                        this.model_outline(true, obj);
                        break;
                    case "Item":
                        let scr2 = obj.getComponent();
                        Event.dispatchToLocal("visible_button", "收集物品", scr2, 2, "");
                        ui_flag = true;
                        this.model_outline(true, obj);
                        break;
                    case "trigger":
                        let scr3 = obj.getComponent();
                        Event.dispatchToLocal("visible_button", scr3.tip, scr3, 1, scr3.event_name);
                        ui_flag = true;
                        this.model_outline(true, GameObject.findGameObjectById(scr3._obj));
                        break;
                }
            }
        });
        if (!ui_flag) {
            Event.dispatchToLocal("Unvisible_button");
            Event.dispatchToLocal("OutLine_false");
        }
    }
    model_outline(flag, obj) {
        if (flag)
            obj.setOutline(true, new LinearColor(1, 1, 1), 0.5);
        else
            obj.setOutline(false);
    }
}

var foreign6 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Obj_Manager: Obj_Manager
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * ATTENTION: onStart 等UI脚本自带函数不可改写为异步执行，有需求的异步逻辑请使用函数封装，通过函数接口在内部使用
 * UI: UI/StartGame.ui
*/
let StartGame_Generate = class StartGame_Generate extends UIScript {
    get mBtn_Start() {
        if (!this.mBtn_Start_Internal && this.uiWidgetBase) {
            this.mBtn_Start_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mBtn_Start');
        }
        return this.mBtn_Start_Internal;
    }
    /**
    * onStart 之前触发一次
    */
    onAwake() {
    }
};
StartGame_Generate = __decorate([
    UIBind('UI/StartGame.ui')
], StartGame_Generate);
var StartGame_Generate$1 = StartGame_Generate;

var foreign25 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: StartGame_Generate$1
});

class MainUI extends StartGame_Generate$1 {
    onStart() {
        this.mBtn_Start.onClicked.add(() => {
            UIService.hideUI(this);
            //TODO
            UIService.show(DefaultUI);
            Event.dispatchToLocal(EventData.GameStart);
        });
    }
}

var foreign7 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: MainUI
});

var Tools;
(function (Tools) {
    function imageJump(targetImg) {
        let vector2 = new mw.Vector2(1, 1);
        let tweenA = new Tween({ scale: 1 }).to({ scale: 1.3 }, 500).onUpdate((v) => {
            vector2.x = v.scale;
            vector2.y = v.scale;
            targetImg.renderScale = (vector2);
        });
        let tweenB = new Tween({ scale: 1.3 }).to({ scale: 1 }, 500).onUpdate((v) => {
            vector2.x = v.scale;
            vector2.y = v.scale;
            targetImg.renderScale = (vector2);
        });
        tweenA.chain(tweenB);
        tweenA.start();
    }
    Tools.imageJump = imageJump;
})(Tools || (Tools = {}));
//获取物品提示UI
let Get_Item_UI = class Get_Item_UI extends UIScript {
    //显示函数
    onShow(img_id, use_ui_icon) {
        //获取控件
        let img = this.uiWidgetBase.findChildByPath('RootCanvas/Item_Image');
        //设置图片尺寸
        img.size = new Vector2(200, 200);
        //设置图片ICON
        if (use_ui_icon)
            img.setImageByAssetIconData(Items.instance.ItemAssets.get(img_id));
        else
            img.imageGuid = img_id;
        //播放对应音效
        SoundService.playSound("130806");
        //设定过段时间后销毁
        setTimeout(() => {
            this.destroy();
        }, 1000);
    }
};
Get_Item_UI = __decorate([
    UIBind('Get_Item_UI.ui')
], Get_Item_UI);
//交互UI
let Select_UI = class Select_UI extends UIScript {
    //显示UI函数
    onShow(scr, tip, type, event_name, slots) {
        //获取控件
        this._btn = this.uiWidgetBase.findChildByPath('RootCanvas/Button');
        this._text = this.uiWidgetBase.findChildByPath('RootCanvas/TextBlock');
        //根据情况设定按键反馈
        switch (type) {
            case 0:
                this._btn.onPressed.add(() => {
                    scr.get_item();
                    this.destroy();
                    Event.dispatchToLocal("Unvisible_button");
                });
                break;
            case 1:
                this._btn.onPressed.add(() => {
                    Event.dispatchToLocal(event_name, slots);
                    this.destroy();
                    Event.dispatchToLocal("Unvisible_button");
                });
                break;
            case 2:
                this._btn.onPressed.add(() => {
                    scr.get_item();
                    this.destroy();
                    Event.dispatchToLocal("Unvisible_button");
                });
                break;
        }
        //根据用户设定设置按键提示文本
        this._text.text = tip;
    }
};
Select_UI = __decorate([
    UIBind('Select_UI.ui')
], Select_UI);
//物品栏UI
let Slot_UI = class Slot_UI extends UIScript {
    //初始化函数
    init(id) {
        //获取对应控件
        this.Obj_BG = this.uiWidgetBase.findChildByPath('RootCanvas/Obj_BG');
        this.Cnt_text = this.uiWidgetBase.findChildByPath('RootCanvas/Obj_Cnt');
        //设置初始参数
        this.Obj_BG.imageGuid = "163360";
        this.Cnt_text.visibility = SlateVisibility.Hidden;
        this.index = id;
    }
    //更新物品栏UI
    update_ui(cnt, id) {
        this.Cnt_text.text = cnt.toString();
        assetIDChangeIconUrlRequest([id]).then(() => {
            this.Obj_BG.setImageByAssetIconData(getAssetIconDataByAssetID(id));
            this.Obj_BG.size = new Vector2(150, 150);
        });
        this.Cnt_text.visibility = SlateVisibility.Visible;
    }
};
Slot_UI = __decorate([
    UIBind('Slot_UI.ui')
], Slot_UI);
//提示UI
let Tip_UI = class Tip_UI extends UIScript {
    //初始化UI
    init(tip) {
        //获取控件
        let tip_text = this.uiWidgetBase.findChildByPath('RootCanvas/TextBlock');
        //设置提示内容
        tip_text.text = tip;
    }
};
Tip_UI = __decorate([
    UIBind('Tip_UI.ui')
], Tip_UI);
//图鉴子UI
let Dress_UI = class Dress_UI extends UIScript {
    _init(name, index, type, Asset_GUID) {
        this.name = this.uiWidgetBase.findChildByPath('RootCanvas/TextBlock');
        this.button = this.uiWidgetBase.findChildByPath('RootCanvas/Button');
        this.get_image = this.uiWidgetBase.findChildByPath('RootCanvas/Image_1');
        this.name.text = name;
        this.get_image.visibility = SlateVisibility.Hidden;
        this.id = index;
        this.if_get = false;
        this.AssetGUID = Asset_GUID;
        this.type = type;
        this.button.onPressed.add(() => {
            if (this.if_get) {
                Event.dispatchToLocal("IAA", "想要装扮这个物品了嘛，喵呜", this.type, this.id, 2, this.AssetGUID);
            }
            else {
                if (M_Player.instance.PlayerGoalCnt < 1)
                    Event.dispatchToLocal("IAA", "看广告提前解锁对应物品", this.type, this.id, 0, this.AssetGUID);
                else
                    Event.dispatchToLocal("IAA", "是否花费1个奖品解锁该物品", this.type, this.id, 1, this.AssetGUID);
            }
        });
    }
    get_dress() {
        this.get_image.visibility = SlateVisibility.Visible;
        this.if_get = true;
    }
};
Dress_UI = __decorate([
    UIBind('Dress_UI.ui')
], Dress_UI);
//图鉴UI
let Illustrate_UI = class Illustrate_UI extends UIScript {
    //图鉴UI显示函数
    onShow() {
        this.setVisible(SlateVisibility.Hidden);
    }
    //图鉴UI初始化函数
    _init(type) {
        //设置标题
        let title = "";
        switch (type) {
            case 1:
                title = "拖尾";
                break;
            case 2:
                title = "翅膀";
                break;
            case 3:
                title = "套装";
                break;
            case 4:
                title = "头顶装饰";
                break;
            case 5:
                title = "动作";
                break;
            case 6:
                title = "背景音乐";
                break;
            default:
                title = "奖杯图鉴";
                break;
        }
        //获取对应UI控件
        this.levels_canvas = this.uiWidgetBase.findChildByPath('RootCanvas/ScrollBox/Item');
        this.cancel_btn = this.uiWidgetBase.findChildByPath('RootCanvas/ScrollBox/Cancel_btn');
        this.title = this.uiWidgetBase.findChildByPath('RootCanvas/ScrollBox/Title_text');
        //设置子UI布局
        if (type == 0)
            this.levels_canvas.autoLayoutSpacing = 50;
        else
            this.levels_canvas.autoLayoutSpacing = 65;
        //设置子UI排列方式
        this.levels_canvas.autoLayoutContainerRule = UILayoutType.Horizontal;
        //设置图鉴UI标题
        this.title.text = title;
        //添加关闭按钮反馈
        this.cancel_btn.onPressed.add(() => {
            this.setVisible(SlateVisibility.Hidden);
        });
    }
};
Illustrate_UI = __decorate([
    UIBind('Illustrate_UI.ui')
], Illustrate_UI);
//关卡收集物子UI
let Item_UI = class Item_UI extends UIScript {
    //初始化函数
    init(_cnt) {
        //获取按键
        this.img = this.uiWidgetBase.findChildByPath('RootCanvas/Item_img');
        this.text = this.uiWidgetBase.findChildByPath('RootCanvas/TextBlock');
        this._image = this.uiWidgetBase.findChildByPath('RootCanvas/Image');
        //初始化物品所属关卡号
        this._level_number = _cnt;
        //添加按钮反馈
        this.img.onPressed.add(() => {
            Event.dispatchToLocal("IAA", "看广告提前解锁对应物品", 0, this._level_number, 0);
        });
    }
    //获取物品后更新UI
    Change_img(cnt_num, use_ui_icon) {
        //毁灭按钮
        this.img.destroyObject();
        //更新物品图片
        if (use_ui_icon)
            this._image.setImageByAssetIconData(Items.instance.ItemAssets.get(cnt_num));
        else
            this._image.imageGuid = cnt_num;
        this._image.imageColor = new LinearColor(1, 1, 1);
        //摧毁文字
        this.text.destroyObject();
    }
};
Item_UI = __decorate([
    UIBind('Item_UI.ui')
], Item_UI);
//关卡收集物UI
let Level_UI = class Level_UI extends UIScript {
    constructor() {
        super(...arguments);
        this.Item_cnt = 0; //关卡子UI数
        this.max_item = 0; //最大物品数
        this.Items = new Array(); //存储关卡子UI
    }
    //初始化函数
    init(_cnt, name, _Item_cnt) {
        //获取对应控件
        this.Level_name = this.uiWidgetBase.findChildByPath('RootCanvas/Level_name');
        this.Level_title = this.uiWidgetBase.findChildByPath('RootCanvas/Level_number');
        this.Items_canvas = this.uiWidgetBase.findChildByPath('RootCanvas/Canvas');
        //设置关卡标题
        this.Level_name.text = name;
        this.Level_title.text = "第 " + _cnt.toString() + " 关";
        //根据用户设定添加子UI
        for (let index = 0; index < _Item_cnt; index++) {
            let Item = UIService.create(Item_UI);
            Item.init(_cnt);
            this.Items_canvas.addChild(Item.uiWidgetBase);
            this.Items.push(Item);
        }
        this.max_item = _Item_cnt;
    }
    //获取物体时更新UI
    Get_Item(cnt_num, use_ui_icon) {
        this.Items[this.Item_cnt].Change_img(cnt_num, use_ui_icon);
        this.Item_cnt++;
        if (this.Item_cnt == this.max_item) {
            Event.dispatchToServer("完成关卡", this.Level_name.text);
            Event.dispatchToLocal(this.Level_name.text);
        }
    }
};
Level_UI = __decorate([
    UIBind('Level_UI.ui')
], Level_UI);
//关卡类
let LevelList = class LevelList {
    //构造函数
    constructor(a, b) {
        this.Level_Name = "";
        this.Level_Objs_Cnt = 0;
        this.Level_Name = a;
        this.Level_Objs_Cnt = b;
    }
};
__decorate([
    Property({ displayName: "关卡名称", tooltip: "当前关卡的名称" })
], LevelList.prototype, "Level_Name", void 0);
__decorate([
    Property({ displayName: "关卡可收集物品数", tooltip: "当前关卡可收集物品总数" })
], LevelList.prototype, "Level_Objs_Cnt", void 0);
LevelList = __decorate([
    Serializable
], LevelList);
//GUID素材类
let TitleList = class TitleList {
    //构造函数
    constructor(a, b) {
        this.Title_Name = "";
        this.Title_Gold = 0;
        this.Title_Name = a;
        this.Title_Gold = b;
    }
};
__decorate([
    Property({ displayName: "称谓名称", tooltip: "称谓名称" })
], TitleList.prototype, "Title_Name", void 0);
__decorate([
    Property({ displayName: "称谓需求奖杯数", tooltip: "称谓需求奖杯数" })
], TitleList.prototype, "Title_Gold", void 0);
TitleList = __decorate([
    Serializable
], TitleList);
//GUID素材类
let AssetList = class AssetList {
    //构造函数
    constructor(a, b) {
        this.Asset_Name = "";
        this.Asset_GUID = "";
        this.Asset_Name = a;
        this.Asset_GUID = b;
    }
};
__decorate([
    Property({ displayName: "素材名称", tooltip: "素材名称" })
], AssetList.prototype, "Asset_Name", void 0);
__decorate([
    Property({ displayName: "素材GUID", tooltip: "添加素材GUID" })
], AssetList.prototype, "Asset_GUID", void 0);
AssetList = __decorate([
    Serializable
], AssetList);
//Transfrom调整类素材
let TransformAssetList = class TransformAssetList extends AssetList {
    //构造函数
    constructor(a, b, c, d, e) {
        super(a, b);
        this.Asset_Position = new Vector();
        this.Asset_Rotation = new Rotation();
        this.Asset_Scale = new Vector();
        this.Asset_Position = c;
        this.Asset_Rotation = d;
        this.Asset_Scale = e;
    }
};
__decorate([
    Property({ displayName: "位置调整", tooltip: "位置调整" })
], TransformAssetList.prototype, "Asset_Position", void 0);
__decorate([
    Property({ displayName: "旋转调整", tooltip: "旋转调整" })
], TransformAssetList.prototype, "Asset_Rotation", void 0);
__decorate([
    Property({ displayName: "缩放调整", tooltip: "缩放调整" })
], TransformAssetList.prototype, "Asset_Scale", void 0);
TransformAssetList = __decorate([
    Serializable
], TransformAssetList);
//资源UI类
class AssetUI {
    //构造函数
    constructor(a, b, c) {
        //资源面板UI
        this.AssetIllustrateUI = null;
        //资源子UI
        this.AssetDressUI = null;
        //资源类型
        this.AssetType = 0;
        this.AssetIllustrateUI = a;
        this.AssetDressUI = b;
        this.AssetType = c;
        UIService.showUI(this.AssetIllustrateUI);
        Event.addLocalListener("Open_UI", (type) => {
            if (type == this.AssetType)
                this.AssetIllustrateUI.setVisible(SlateVisibility.Visible);
        });
    }
    UpdateUI(ChildUIid) {
        this.AssetDressUI[ChildUIid].get_dress(); //获得资源后更新资源UI
        this.AssetIllustrateUI.setVisible(SlateVisibility.Hidden); //关闭主UI
    }
}
//关卡物品类
class Items {
    constructor() {
        this.levels = new Array(); //子任务单元UI
        this.ItemAssets = new Map(); //存储Icon资源
    }
    static get instance() {
        if (Items._instacne == null) {
            Items._instacne = new Items();
        }
        return Items._instacne;
    }
    //初始化Item函数
    _init(LevelLists) {
        //图鉴UI创建并初始化
        this.M_ItemUI = UIService.create(Illustrate_UI);
        this.M_ItemUI._init(0);
        UIService.showUI(this.M_ItemUI);
        //根据用户设置配置任务面板
        let cnt = 0;
        LevelLists.forEach(level => {
            let LEVEL = UIService.create(Level_UI);
            LEVEL.init(cnt + 1, level.Level_Name, level.Level_Objs_Cnt);
            this.M_ItemUI.levels_canvas.addChild(LEVEL.uiWidgetBase);
            this.levels.push(LEVEL);
            cnt++;
        });
    }
    Get_Item(level_num, img_id, use_ui_icon) {
        this.levels[level_num - 1].Get_Item(img_id, use_ui_icon);
        UIService.show(Get_Item_UI, img_id, use_ui_icon);
    }
    Update_UI(state) {
        this.M_ItemUI.setVisible(state);
    }
}
//装饰物品类
class Dress {
    constructor() {
        this.AssetUILists = new Array();
    }
    static get instance() {
        if (Dress._instacne == null) {
            Dress._instacne = new Dress();
        }
        return Dress._instacne;
    }
    init(AssetLists, AssetType) {
        let tempIllustrate = UIService.create(Illustrate_UI); // 创建资源UI主面板
        tempIllustrate._init(AssetType); //初始化资源UI主面板
        let tempChildUIArray = new Array(); //创建子UI数组存储所有子UI
        for (let index = 0; index < AssetLists.length; index++) {
            AssetUtil.asyncDownloadAsset(AssetLists[index].Asset_GUID); //下载所需资源
            let tempChildUI = UIService.create(Dress_UI); //创建资源子UI
            tempChildUI._init(AssetLists[index].Asset_Name, index, AssetType, AssetLists[index].Asset_GUID); //初始化资源子UI
            tempChildUIArray.push(tempChildUI); //子UI存入数组
            tempIllustrate.levels_canvas.addChild(tempChildUI.uiWidgetBase); //子UI放入主UI中
        }
        let tempAssetUI = new AssetUI(tempIllustrate, tempChildUIArray, AssetType); //创建资源UI对象
        this.AssetUILists.push(tempAssetUI); //资源UI放入列表中统一管理
    }
    Update_DressUI(id, type) {
        this.AssetUILists[type - 1].UpdateUI(id); //更新资源UI
    }
}
//广告UI
let IAA = class IAA extends UIScript {
    constructor() {
        super(...arguments);
        this.IAA_type = 0; // 广告类型
        this.ID = 0; //图鉴物品的关卡号或装饰物品的ID
    }
    //显示函数
    onShow(tip, type, id, own, Asset_GUID) {
        //获取对应按键
        this.no_btn = this.uiWidgetBase.findChildByPath('RootCanvas/Button_1');
        this.tip_text = this.uiWidgetBase.findChildByPath('RootCanvas/TextBlock');
        this.IAA_button = this.uiWidgetBase.findChildByPath('RootCanvas/AdsButton');
        this.yes_btn = this.uiWidgetBase.findChildByPath('RootCanvas/Button_1_1');
        this.tip_text.text = tip; //设置广告UI提示语
        this.IAA_type = type; //设置当前广告类型
        this.ID = id; //设置解锁物品关卡号
        this.uiWidgetBase.zOrder = 1100000; //设置广告UI渲染层级
        //关闭按钮响应事件
        this.no_btn.onPressed.add(() => {
            this.destroy();
        });
        //根据情况设定广告UI
        switch (own) {
            case 0:
                this.yes_btn.visibility = SlateVisibility.Hidden;
                this.IAA_button.onShow.add((is_Success) => {
                    if (SystemUtil.isPIE) {
                        this.reward(Asset_GUID);
                        this.destroy();
                    }
                });
                this.IAA_button.onClose.add((is_Success) => {
                    if (is_Success) {
                        this.reward(Asset_GUID);
                        this.destroy();
                    }
                    else
                        console.log("广告播放失败，为什么？");
                });
                break;
            case 1:
                this.IAA_button.visibility = SlateVisibility.Hidden;
                this.yes_btn.onPressed.add(() => {
                    this.reward(Asset_GUID);
                    M_Player.instance.PlayerGoalCnt -= 1;
                    Event.dispatchToLocal("Update_gold");
                    this.destroy();
                });
                break;
            case 2:
                this.IAA_button.visibility = SlateVisibility.Hidden;
                this.yes_btn.onPressed.add(() => {
                    this.reward(Asset_GUID);
                    this.destroy();
                });
                break;
        }
    }
    reward(AssetGUID) {
        switch (this.IAA_type) {
            case 0:
                let objs = GameObject.findGameObjectsByTag("奖励");
                for (let index = 0; index < objs.length; index++) {
                    let code = objs[index].getComponent();
                    if (code.level_num == this.ID) {
                        code.get_item();
                        break;
                    }
                }
                break;
            default:
                Event.dispatchToLocal("Get_Dress", this.IAA_type, this.ID, AssetGUID);
                break;
        }
    }
};
IAA = __decorate([
    UIBind('IAAUI.ui')
], IAA);
//玩家头顶称谓UI
let UserRankUI = class UserRankUI extends UIScript {
    constructor() {
        super(...arguments);
        this.UserTitleText = null;
    }
    init(defaultTitle) {
        this.UserTitleText = this.uiWidgetBase.findChildByPath('RootCanvas/Image/Name');
        this.UserTitleText.text = defaultTitle;
        return this;
    }
    Update(Title) { this.UserTitleText.text = Title; }
    ;
};
UserRankUI = __decorate([
    UIBind('UserRankUI.ui')
], UserRankUI);
//玩家类
class M_Player {
    constructor() {
        this.PlayerSaveData = new Array(); //存储已获得的物体
    }
    static get instance() {
        if (M_Player._instacne == null) {
            M_Player._instacne = new M_Player();
        }
        return M_Player._instacne;
    }
    //一切的初始化
    async init(reborn_pos, title) {
        this.PlayerGoalCnt = 0;
        this.IllustrateCnt = 0;
        this.PlayerChar = Player.localPlayer.character;
        this.MoveState = true;
        this.ReBornPos = reborn_pos;
        this.PlayerChar.collisionWithOtherCharacterEnabled = false;
        //记录初始装扮
        setTimeout(() => {
            this.defaultStyle = this.PlayerChar.getDescription();
        }, 1000);
        //记录点更新
        Event.addLocalListener("Reach", (pos) => {
            this.ReBornPos = pos.add(new Vector(0, 0, 50));
        });
        //设置玩家名称
        setTimeout(() => {
            if (SystemUtil.isPIE)
                this.PlayerName = "宝了个贝的";
            else
                this.PlayerName = AccountService.getNickName();
            Event.dispatchToServer("SetName", this.PlayerName);
        }, 1000);
        //设置玩家的称谓
        this.TitleUI = UIService.create(UserRankUI).init(title);
        this.PlayerChar.overheadUI.setTargetUIWidget(this.TitleUI.uiWidgetBase);
        this.PlayerChar.overheadUI.drawSize = new Vector2(600, 200);
        //存档
        Event.addLocalListener("SaveData", (GUID) => {
            this.PlayerSaveData.push(GUID);
            Event.dispatchToServer("PlayerLeaveSave", this.PlayerSaveData);
        });
        //读档
        await DataCenterC.ready();
        setTimeout(() => {
            this.PlayerSaveData = DataCenterC.getData(PlayData).DataArr;
            this.PlayerSaveData.forEach((Data) => {
                Event.dispatchToLocal("InitData", Data);
            });
        }, 1000);
    }
    //获取装扮
    async GetAsset(guid, ...params) {
        switch (params[0]) {
            case 1:
                if (this.PlayerTrail)
                    this.PlayerTrail.destroy();
                this.PlayerTrail = await GameObject.asyncSpawn(guid);
                this.PlayerChar.attachToSlot(this.PlayerTrail, HumanoidSlotType.Buttocks);
                break;
            case 2:
                if (this.PlayerWing)
                    this.PlayerWing.destroy();
                this.PlayerWing = await GameObject.asyncSpawn(guid);
                this.PlayerWing.localTransform = params[1];
                this.PlayerChar.attachToSlot(this.PlayerWing, HumanoidSlotType.BackOrnamental);
                break;
            case 3:
                this.PlayerChar.setDescription([guid]);
                this.PlayerChar.syncDescription();
                break;
            case 4:
                if (this.PlayerHat)
                    this.PlayerHat.destroy();
                this.PlayerHat = await GameObject.asyncSpawn(guid);
                this.PlayerHat.localTransform = params[1];
                this.PlayerChar.attachToSlot(this.PlayerHat, HumanoidSlotType.Rings);
                break;
            case 5:
                this.PlayerChar.loadAnimation(guid).play();
                break;
            default:
                SoundService.stopSound(this.LastSoundID);
                this.playBGM(guid);
                break;
        }
    }
    //切换运动模式
    Lay() {
        if (this.PlayerChar.isJumping)
            return;
        if (this.MoveState) {
            this.PlayerChar.changeState(CharacterStateType.Crouching);
            this.PlayerChar.crouchedHeight = 50;
        }
        else
            this.PlayerChar.changeState(CharacterStateType.Running);
        this.MoveState = !this.MoveState;
    }
    //玩家死亡
    Death() {
        this.MoveState = true;
        this.PlayerChar.changeState(CharacterStateType.Ragdoll);
        setTimeout(() => {
            this.PlayerChar.changeState(CharacterStateType.Running);
            this.PlayerChar.worldTransform.position = this.ReBornPos;
        }, 1000);
    }
    //射线检测
    test_query() {
        let res = QueryUtil.lineTrace(Camera.currentCamera.worldTransform.position, Camera.currentCamera.worldTransform.position.add(Camera.currentCamera.worldTransform.getForwardVector().multiply(600)), false, true, [], false, false, this.PlayerChar);
        Obj_Manager.instance.check_get(res);
    }
    //根据资源GUID播放音乐
    playBGM(id) {
        this.LastSoundID = SoundService.playSound(id, 1, 25);
    }
    Rst() {
        if (this.PlayerWing)
            this.PlayerWing.destroy();
        if (this.PlayerTrail)
            this.PlayerTrail.destroy();
        if (this.PlayerHat)
            this.PlayerHat.destroy();
        setTimeout(() => {
            this.PlayerChar.setDescription(this.defaultStyle);
            this.PlayerChar.syncDescription();
        }, 100);
    }
    UpdateTitle(title) {
        this.TitleUI.Update(title);
    }
}
//资源编辑UI
let GameManagerUI = class GameManagerUI extends UIScript {
    //显示函数
    onShow() {
        //获取对应控件
        this.DropList = this.uiWidgetBase.findChildByPath('RootCanvas/ToolTips/Dropdown');
        this.AssetGuidInput = this.uiWidgetBase.findChildByPath('RootCanvas/ToolTips/InputBox');
        this.AssetGuidName = this.uiWidgetBase.findChildByPath('RootCanvas/ToolTips/Title_1');
        this.TransformCanvas = this.uiWidgetBase.findChildByPath('RootCanvas/Transfrom');
        this.YesBtn = this.uiWidgetBase.findChildByPath('RootCanvas/Play');
        this.Transform_x = this.uiWidgetBase.findChildByPath('RootCanvas/Transfrom/InputBox_px');
        this.Transform_y = this.uiWidgetBase.findChildByPath('RootCanvas/Transfrom/InputBox_py');
        this.Transform_z = this.uiWidgetBase.findChildByPath('RootCanvas/Transfrom/InputBox_pz');
        this.Rotation_x = this.uiWidgetBase.findChildByPath('RootCanvas/Transfrom/InputBox_rx');
        this.Rotation_y = this.uiWidgetBase.findChildByPath('RootCanvas/Transfrom/InputBox_ry');
        this.Rotation_z = this.uiWidgetBase.findChildByPath('RootCanvas/Transfrom/InputBox_rz');
        this.Scale_x = this.uiWidgetBase.findChildByPath('RootCanvas/Transfrom/InputBox_sx');
        this.Scale_y = this.uiWidgetBase.findChildByPath('RootCanvas/Transfrom/InputBox_sy');
        this.Scale_z = this.uiWidgetBase.findChildByPath('RootCanvas/Transfrom/InputBox_sz');
        this.AssetGuidName.text = "填写拖尾资源GUID:";
        this.AssetType = 1;
        this.YesBtn.onClicked.add(() => {
            let AssetGUID = this.AssetGuidInput.text;
            if (this.AssetType == 4 || this.AssetType == 2) {
                let pos = new Vector(Number(this.Transform_x.text), Number(this.Transform_y.text), Number(this.Transform_z.text));
                let rot = new Rotation(Number(this.Rotation_x.text), Number(this.Rotation_y.text), Number(this.Rotation_z.text));
                let scale = new Vector(Number(this.Scale_x.text), Number(this.Scale_y.text), Number(this.Scale_z.text));
                console.log(pos + "|" + rot + "|" + scale);
                AssetUtil.asyncDownloadAsset(AssetGUID).then(() => {
                    M_Player.instance.GetAsset(AssetGUID, this.AssetType, new Transform(pos, rot, scale));
                });
            }
            else {
                AssetUtil.asyncDownloadAsset(AssetGUID).then(() => {
                    M_Player.instance.GetAsset(AssetGUID, this.AssetType);
                });
            }
        });
        //设置切换事件
        this.DropList.onSelectionChangedEvent.add((SelectTag, Info) => {
            switch (SelectTag) {
                case "编辑拖尾效果":
                    this.AssetGuidName.text = "填写拖尾资源GUID:";
                    this.AssetType = 1;
                    this.TransformCanvas.visibility = SlateVisibility.Hidden;
                    break;
                case "编辑翅膀效果":
                    this.AssetGuidName.text = "填写翅膀资源GUID:";
                    this.AssetType = 2;
                    this.TransformCanvas.visibility = SlateVisibility.Visible;
                    break;
                case "编辑服装效果":
                    this.AssetGuidName.text = "填写服装资源GUID:";
                    this.AssetType = 3;
                    this.TransformCanvas.visibility = SlateVisibility.Hidden;
                    break;
                case "编辑帽子效果":
                    this.AssetGuidName.text = "填写帽子资源GUID:";
                    this.AssetType = 4;
                    this.TransformCanvas.visibility = SlateVisibility.Visible;
                    break;
                case "编辑动作效果":
                    this.AssetGuidName.text = "填写动作资源GUID:";
                    this.AssetType = 5;
                    this.TransformCanvas.visibility = SlateVisibility.Hidden;
                    break;
                default:
                    this.AssetGuidName.text = "填写音乐资源GUID:";
                    this.AssetType = 6;
                    this.TransformCanvas.visibility = SlateVisibility.Hidden;
                    break;
            }
        });
    }
};
GameManagerUI = __decorate([
    UIBind('GameManagerUI.ui')
], GameManagerUI);
class PlayData extends Subdata {
    initDefaultData() {
        this.DataArr = new Array();
    }
}
__decorate([
    Decorator.persistence()
], PlayData.prototype, "DataArr", void 0);
let GameStart = class GameStart extends Script {
    constructor() {
        super(...arguments);
        this.IsPie = false;
        this.reborn_pos = Vector.zero;
        this.slots = 20;
        this.preset = false;
        this.LevelLists = [];
        this.TitleLists = [];
        this.MusicLists = [];
        this.TrailLists = [];
        this.ClothLists = [];
        this.AnimLists = [];
        this.WingLists = [];
        this.HatLists = [];
        this.cnt_time = 0; //计时器
    }
    onStart() {
        if (SystemUtil.isServer()) {
            Event.addClientListener("SetName", (player, name) => {
                player.character.displayName = name;
            });
            DataStorage.setTemporaryStorage(SystemUtil.isPIE);
            Event.addClientListener("PlayerLeaveSave", (player, Data) => {
                DataCenterS.getData(player, PlayData).DataArr = Data;
                DataCenterS.getData(player, PlayData).save(true);
            });
            Event.addClientListener("完成关卡", (player, event_name) => {
                Event.dispatchToLocal(event_name);
            });
        }
        else {
            //是否开启编辑模式
            if (this.IsPie)
                UIService.show(GameManagerUI);
            //初始化物品栏
            Event.dispatchToLocal("Init_Slot", this.slots);
            //设置摄像机模式
            if (this.preset) {
                setTimeout(() => {
                    //  Camera.currentCamera.preset = 0
                    Camera.currentCamera.springArm.collisionEnabled = false;
                    //  Camera.currentCamera.springArm.length = 0
                    Event.dispatchToLocal("dot", this.preset);
                }, 500);
            }
            else {
                setTimeout(() => {
                    //  Camera.currentCamera.preset = 1
                    // Camera.currentCamera.springArm.length = 350
                    Event.dispatchToLocal("dot", this.preset);
                }, 500);
            }
            this.useUpdate = this.preset;
            //初始化玩家信息
            M_Player.instance.init(this.reborn_pos, this.TitleLists[0].Title_Name);
            //初始化资源信息
            Dress.instance.init(this.TrailLists, 1);
            Dress.instance.init(this.WingLists, 2);
            Dress.instance.init(this.ClothLists, 3);
            Dress.instance.init(this.HatLists, 4);
            Dress.instance.init(this.AnimLists, 5);
            Dress.instance.init(this.MusicLists, 6);
            //配置关卡物品信息
            Items.instance._init(this.LevelLists);
            //监听并创建广告
            Event.addLocalListener("IAA", (tip, type, level_num, own, Asset_GUID) => {
                UIService.show(IAA, tip, type, level_num, own, Asset_GUID);
            });
            //装扮发放
            Event.addLocalListener("Get_Dress", (type, id, Asset_GUID) => {
                Dress.instance.Update_DressUI(id, type);
                switch (type) {
                    case 2:
                        M_Player.instance.GetAsset(Asset_GUID, type, new Transform(this.WingLists[id].Asset_Position, this.WingLists[id].Asset_Rotation, this.WingLists[id].Asset_Scale));
                        break;
                    case 4:
                        M_Player.instance.GetAsset(Asset_GUID, type, new Transform(this.HatLists[id].Asset_Position, this.HatLists[id].Asset_Rotation, this.HatLists[id].Asset_Scale));
                        break;
                    default:
                        M_Player.instance.GetAsset(Asset_GUID, type);
                        break;
                }
            });
            Event.addLocalListener("Update_gold", () => {
                M_Player.instance.IllustrateCnt++;
                let title = this.TitleLists[0].Title_Name;
                this.TitleLists.forEach((Title) => {
                    if (Title.Title_Gold <= M_Player.instance.IllustrateCnt)
                        title = Title.Title_Name;
                });
                M_Player.instance.UpdateTitle(title);
            });
        }
        this.useUpdate = true;
        UIService.show(MainUI);
    }
    onUpdate(dt) {
        this.cnt_time += dt;
        if (this.cnt_time > 0.5) {
            M_Player.instance.test_query();
            this.cnt_time = 0;
        }
    }
};
__decorate([
    Property({ displayName: "是否开启编辑模式", group: "编辑模式" })
], GameStart.prototype, "IsPie", void 0);
__decorate([
    Property({ displayName: "默认复活点", group: "基础设置" })
], GameStart.prototype, "reborn_pos", void 0);
__decorate([
    Property({ displayName: "物品栏数", group: "基础设置" })
], GameStart.prototype, "slots", void 0);
__decorate([
    Property({ displayName: "是否启用第一人称", group: "基础设置" })
], GameStart.prototype, "preset", void 0);
__decorate([
    Property({ displayName: "关卡", group: "关卡列表", arrayDefault: new LevelList("", 0) })
], GameStart.prototype, "LevelLists", void 0);
__decorate([
    Property({ displayName: "称谓", group: "称谓列表", arrayDefault: new TitleList("", 0) })
], GameStart.prototype, "TitleLists", void 0);
__decorate([
    Property({ displayName: "音乐", group: "音乐列表", arrayDefault: new AssetList("", "") })
], GameStart.prototype, "MusicLists", void 0);
__decorate([
    Property({ displayName: "拖尾装扮", group: "拖尾装扮列表", arrayDefault: new AssetList("", "") })
], GameStart.prototype, "TrailLists", void 0);
__decorate([
    Property({ displayName: "换装资源", group: "换装资源列表", arrayDefault: new AssetList("", "") })
], GameStart.prototype, "ClothLists", void 0);
__decorate([
    Property({ displayName: "动作资源", group: "动作资源列表", arrayDefault: new AssetList("", "") })
], GameStart.prototype, "AnimLists", void 0);
__decorate([
    Property({ displayName: "翅膀资源", group: "翅膀资源列表", arrayDefault: new TransformAssetList("", "", Vector.zero, new Rotation(0, 0, 90), Vector.one) })
], GameStart.prototype, "WingLists", void 0);
__decorate([
    Property({ displayName: "头顶装扮资源", group: "头顶装扮资源列表", arrayDefault: new TransformAssetList("", "", Vector.zero, Rotation.zero, Vector.one) })
], GameStart.prototype, "HatLists", void 0);
GameStart = __decorate([
    Component
], GameStart);
var GameStart$1 = GameStart;

var foreign5 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Dress: Dress,
    get Dress_UI () { return Dress_UI; },
    get Get_Item_UI () { return Get_Item_UI; },
    get IAA () { return IAA; },
    get Illustrate_UI () { return Illustrate_UI; },
    get Item_UI () { return Item_UI; },
    Items: Items,
    get Level_UI () { return Level_UI; },
    M_Player: M_Player,
    PlayData: PlayData,
    get Select_UI () { return Select_UI; },
    get Slot_UI () { return Slot_UI; },
    get Tip_UI () { return Tip_UI; },
    get Tools () { return Tools; },
    default: GameStart$1
});

let NpcStac = class NpcStac extends Script {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
    }
    /**
     * 周期函数 每帧执行
     * 此函数执行需要将this.useUpdate赋值为true
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    onUpdate(dt) {
    }
    /** 脚本被销毁时最后一帧执行完调用此函数 */
    onDestroy() {
    }
};
NpcStac = __decorate([
    Component
], NpcStac);
var NpcStac$1 = NpcStac;

var foreign8 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: NpcStac$1
});

let ItemTrigger = class ItemTrigger extends Script {
    constructor() {
        super(...arguments);
        this.level_num = 0;
        this.img_id = '';
        this.use_ui_icon = false;
    }
    onStart() {
        if (SystemUtil.isServer())
            return;
        this.gameObject.name = "Item";
        this.gameObject.tag = "奖励";
        this.model = this.gameObject;
        //Icon资源处理
        if (this.use_ui_icon) {
            assetIDChangeIconUrlRequest([this.img_id]).then(() => {
                Items.instance.ItemAssets.set(this.img_id, getAssetIconDataByAssetID(this.img_id));
            });
        }
        else
            AssetUtil.asyncDownloadAsset(this.img_id);
        this.model.onTouch.add((obj) => {
            if (obj instanceof Character) {
                if (obj == Player.localPlayer.character) {
                    Event.dispatchToLocal("visible_button", "收集物品", this, 2, "");
                    this.model.setOutline(true, new LinearColor(1, 1, 1), 0.5);
                }
            }
        });
        this.model.onTouchEnd.add((obj) => {
            if (obj instanceof Character) {
                if (obj == Player.localPlayer.character) {
                    Event.dispatchToLocal("Unvisible_button");
                    this.model.setOutline(false);
                }
            }
        });
        Event.addLocalListener("OutLine_false", () => {
            try {
                this.model.setOutline(false);
            }
            catch (error) {
            }
        });
        Event.addLocalListener("InitData", (Data) => {
            if (Data == this.img_id) {
                Items.instance.Update_UI(SlateVisibility.Hidden);
                Items.instance.Get_Item(this.level_num, this.img_id, this.use_ui_icon);
                M_Player.instance.PlayerGoalCnt++;
                Event.dispatchToLocal("Update_gold");
                this.model.setOutline(false);
                this.gameObject.destroy();
            }
        });
    }
    get_item() {
        Items.instance.Update_UI(SlateVisibility.Hidden);
        Items.instance.Get_Item(this.level_num, this.img_id, this.use_ui_icon);
        M_Player.instance.PlayerGoalCnt++;
        Event.dispatchToLocal("Update_gold");
        Event.dispatchToLocal("SaveData", this.img_id);
        this.model.setOutline(false);
        this.gameObject.destroy();
    }
};
__decorate([
    Property({ displayName: "第几关的物品", group: "物品属性" })
], ItemTrigger.prototype, "level_num", void 0);
__decorate([
    Property({ displayName: "物品的图标GUID/物体资源的guid", group: "物品属性" })
], ItemTrigger.prototype, "img_id", void 0);
__decorate([
    Property({ displayName: "是否使用物体图标作为UI图标", group: "物品属性" })
], ItemTrigger.prototype, "use_ui_icon", void 0);
ItemTrigger = __decorate([
    Component
], ItemTrigger);
var ItemTrigger$1 = ItemTrigger;

var foreign10 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: ItemTrigger$1
});

let NPCTrigger = class NPCTrigger extends Script {
    constructor() {
        super(...arguments);
        this.npc_id = "";
        this.attack_anim = "";
    }
    async onStart() {
        AssetUtil.asyncDownloadAsset(this.attack_anim);
        if (SystemUtil.isClient()) {
            let npc = GameObject.findGameObjectById(this.npc_id);
            let trigger = this.gameObject;
            trigger.onEnter.add((obj) => {
                if (obj == Player.localPlayer.character) {
                    Navigation.follow(npc, obj, 10, () => {
                        console.log("追踪到玩家");
                        EffectService.playOnGameObject("151570", npc, { slotType: HumanoidSlotType.Rings });
                        let anim = npc.loadAnimation(this.attack_anim);
                        anim.play();
                        M_Player.instance.Death();
                        Navigation.stopFollow(npc);
                    });
                }
            });
            trigger.onLeave.add((obj) => {
                if (obj == Player.localPlayer.character)
                    Navigation.stopFollow(npc);
            });
        }
    }
};
__decorate([
    Property({ displayName: "NPC", capture: true })
], NPCTrigger.prototype, "npc_id", void 0);
__decorate([
    Property({ displayName: "NPC攻击动画" })
], NPCTrigger.prototype, "attack_anim", void 0);
NPCTrigger = __decorate([
    Component
], NPCTrigger);
var NPCTrigger$1 = NPCTrigger;

var foreign11 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: NPCTrigger$1
});

let Pos_Trigger = class Pos_Trigger extends Script {
    constructor() {
        super(...arguments);
        this.type = 0;
    }
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
        if (SystemUtil.isServer())
            return;
        switch (this.type) {
            case 0:
                this.trigger = this.gameObject;
                this.trigger.onEnter.add((other) => {
                    if (other == Player.localPlayer.character) {
                        Event.dispatchToLocal("Reach", this.gameObject.worldTransform.position);
                        Event.dispatchToLocal("Tips", "已记录检查点");
                    }
                });
                break;
            case 1:
                this.trigger = this.gameObject;
                this.trigger.onEnter.add((other) => {
                    if (other == Player.localPlayer.character)
                        this.death();
                });
                break;
            case 2:
                this.model = this.gameObject;
                this.model.onTouch.add((other) => {
                    if (other == Player.localPlayer.character)
                        this.death();
                });
                break;
        }
    }
    death() {
        M_Player.instance.Death();
    }
};
__decorate([
    Property({ displayName: "触发器类型",
        enumType: {
            "检查点触发器": 0,
            "死亡触发器": 1,
            "死亡模型触发": 2
        },
        defaultValue: 0,
        tooltip: "【检查点触发器】:记录角色复活点,挂载到触发器上" +
            "\n 【死亡触发器】: 让玩家死亡,挂载到触发器上" +
            "\n 【死亡模型触发】:让玩家死亡,挂载到模型上" })
], Pos_Trigger.prototype, "type", void 0);
Pos_Trigger = __decorate([
    Component
], Pos_Trigger);
var Pos_Trigger$1 = Pos_Trigger;

var foreign12 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: Pos_Trigger$1
});

let SlotTrigger = class SlotTrigger extends Script {
    constructor() {
        super(...arguments);
        this.img_id = '';
        this.obj_tag = "";
    }
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
        this.gameObject.tag = this.obj_tag;
        this.gameObject.name = "Slot";
        this.obj_model = this.gameObject;
        AssetUtil.asyncDownloadAsset(this.img_id);
        this.obj_model.onTouch.add((obj) => {
            if (obj instanceof Character) {
                if (obj == Player.localPlayer.character) {
                    Event.dispatchToLocal("visible_button", "获取" + this.obj_tag, this, 0, "");
                    this.obj_model.setOutline(true, new LinearColor(1, 1, 1), 0.5);
                }
            }
        });
        this.obj_model.onTouchEnd.add((obj) => {
            if (obj instanceof Character) {
                if (obj == Player.localPlayer.character) {
                    Event.dispatchToLocal("Unvisible_button");
                    this.obj_model.setOutline(false);
                }
            }
        });
        Event.addLocalListener("OutLine_false", () => {
            try {
                this.obj_model.setOutline(false);
            }
            catch (error) {
            }
        });
    }
    get_item() {
        SoundService.playSound("130806");
        Event.dispatchToLocal("Get_Slot_Obj", this.img_id, this.obj_tag);
        Event.dispatchToLocal("Tips", "已获得" + this.obj_tag);
        this.obj_model.setOutline(false);
        this.gameObject.destroy();
    }
};
__decorate([
    Property({ displayName: "物体资源的guid", group: "物品属性" })
], SlotTrigger.prototype, "img_id", void 0);
__decorate([
    Property({ displayName: "物体的Tag", group: "物品属性" })
], SlotTrigger.prototype, "obj_tag", void 0);
SlotTrigger = __decorate([
    Component
], SlotTrigger);
var SlotTrigger$1 = SlotTrigger;

var foreign13 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: SlotTrigger$1
});

let UseItemTrigger = class UseItemTrigger extends Script {
    constructor() {
        super(...arguments);
        this.event_name = "";
        this.tip = "";
        this.tag_ary = new Array();
        this.consume_cnt = new Array();
        this.obg_id = "";
        this._tip = "";
        this._obj = "";
        this.use_type = 0;
    }
    onStart() {
        this.gameObject.name = "trigger";
        let trigger = this.gameObject;
        this.model = GameObject.findGameObjectById(this._obj);
        trigger.onEnter.add((obj) => {
            if (obj instanceof Character) {
                if (obj == Player.localPlayer.character) {
                    Event.dispatchToLocal("visible_button", this.tip, this, 1, this.gameObject.gameObjectId);
                    try {
                        this.model.setOutline(true, new LinearColor(1, 1, 1), 0.5);
                    }
                    catch (error) {
                        console.warn("无法获取模型");
                    }
                }
            }
        });
        trigger.onLeave.add((obj) => {
            if (obj instanceof Character) {
                if (obj == Player.localPlayer.character) {
                    Event.dispatchToLocal("Unvisible_button");
                    try {
                        this.model.setOutline(false);
                    }
                    catch (error) {
                        console.warn("无法获取模型");
                    }
                }
            }
        });
        Event.addLocalListener("OutLine_false", () => {
            try {
                let obj = GameObject.findGameObjectById(this._obj);
                obj.setOutline(false);
            }
            catch (error) {
            }
        });
        Event.addLocalListener(this.gameObject.gameObjectId, (slots) => {
            let flag = true;
            for (let i = 0; i < this.tag_ary.length; i++) {
                let data = slots.get(this.tag_ary[i]);
                if (data) {
                    if (data.cnt >= this.consume_cnt[i])
                        continue;
                    else {
                        flag = false;
                        break;
                    }
                }
                else {
                    flag = false;
                    break;
                }
            }
            Event.dispatchToLocal("Update_Slot", flag, this.tag_ary, this.consume_cnt);
            this.Use_Design_Func(flag);
        });
    }
    Use_Design_Func(flag) {
        if (!flag) {
            SoundService.playSound("169190");
            Event.dispatchToLocal("Tips", this._tip);
            return;
        }
        switch (this.use_type) {
            case 0:
                let obj = GameObject.findGameObjectById(this.obg_id);
                obj.enable = true;
                let delaytime = obj.rotationRepeatTime + obj.linearRepeatTime + obj.scaleRepeatDelay;
                setTimeout(() => {
                    obj.enable = false;
                }, delaytime * 1000);
                console.log(delaytime);
                SoundService.playSound("206094");
                break;
            case 1:
                let ban_area = GameObject.findGameObjectById(this.obg_id);
                ban_area.addPassableTarget(Player.localPlayer.character);
                SoundService.playSound("199753");
                break;
            case 2:
                let state = this.model.getVisibility();
                if (state) {
                    this.model.setVisibility(false);
                    //this.model.collisionEnabled = false
                    this.model.setCollision(CollisionStatus.Off);
                }
                else {
                    //this.model.collisionEnabled = true
                    this.model.setCollision(CollisionStatus.On);
                    this.model.setVisibility(true);
                }
                break;
            case 3:
                Event.dispatchToLocal(this.event_name);
                break;
        }
        try {
            this.model.setOutline(false);
        }
        catch (error) {
            console.warn("无法获取模型");
        }
        this.gameObject.destroy();
    }
};
__decorate([
    Property({ displayName: "使用道具事件名称" })
], UseItemTrigger.prototype, "event_name", void 0);
__decorate([
    Property({ displayName: "使用道具提示词" })
], UseItemTrigger.prototype, "tip", void 0);
__decorate([
    Property({ displayName: "消耗道具的tag", arrayDefault: "" })
], UseItemTrigger.prototype, "tag_ary", void 0);
__decorate([
    Property({ displayName: "每个物品的消耗数量", arrayDefault: "" })
], UseItemTrigger.prototype, "consume_cnt", void 0);
__decorate([
    Property({ displayName: "控制物品的GUID", capture: true })
], UseItemTrigger.prototype, "obg_id", void 0);
__decorate([
    Property({ displayName: "缺少物品提示词" })
], UseItemTrigger.prototype, "_tip", void 0);
__decorate([
    Property({ displayName: "选中高亮物体GUID", capture: true })
], UseItemTrigger.prototype, "_obj", void 0);
__decorate([
    Property({ displayName: "使用效果", enumType: {
            "打开对应门": 0,
            "解锁禁行区": 1,
            "显示或隐藏区域": 2,
            "自定义效果": 3
        }, defaultValue: 0,
        tooltip: "【打开对应门】:使用物品打开门，高亮填门的GUID，控制物体填运动器的GUID" +
            "\n【解锁禁行区】:使用物体解锁禁行区,高亮物体的GUID,控制物体填禁行区的GUID" +
            "\n【显示或隐藏区域】:使用物体显示或隐藏区域,高亮物体的GUID,控制物体的GUID" +
            "\n【自定义效果】:通过成功使用物品后，发送使用物品事件" })
], UseItemTrigger.prototype, "use_type", void 0);
UseItemTrigger = __decorate([
    Component
], UseItemTrigger);
var UseItemTrigger$1 = UseItemTrigger;

var foreign14 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: UseItemTrigger$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * ATTENTION: onStart 等UI脚本自带函数不可改写为异步执行，有需求的异步逻辑请使用函数封装，通过函数接口在内部使用
 * UI: UI/Dress_UI.ui
*/
let Dress_UI_Generate = class Dress_UI_Generate extends UIScript {
    /**
    * onStart 之前触发一次
    */
    onAwake() {
    }
};
Dress_UI_Generate = __decorate([
    UIBind('UI/Dress_UI.ui')
], Dress_UI_Generate);
var Dress_UI_Generate$1 = Dress_UI_Generate;

var foreign16 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: Dress_UI_Generate$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * ATTENTION: onStart 等UI脚本自带函数不可改写为异步执行，有需求的异步逻辑请使用函数封装，通过函数接口在内部使用
 * UI: UI/GameManagerUI.ui
*/
let GameManagerUI_Generate = class GameManagerUI_Generate extends UIScript {
    /**
    * onStart 之前触发一次
    */
    onAwake() {
    }
};
GameManagerUI_Generate = __decorate([
    UIBind('UI/GameManagerUI.ui')
], GameManagerUI_Generate);
var GameManagerUI_Generate$1 = GameManagerUI_Generate;

var foreign17 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: GameManagerUI_Generate$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * ATTENTION: onStart 等UI脚本自带函数不可改写为异步执行，有需求的异步逻辑请使用函数封装，通过函数接口在内部使用
 * UI: UI/Get_Item_UI.ui
*/
let Get_Item_UI_Generate = class Get_Item_UI_Generate extends UIScript {
    /**
    * onStart 之前触发一次
    */
    onAwake() {
    }
};
Get_Item_UI_Generate = __decorate([
    UIBind('UI/Get_Item_UI.ui')
], Get_Item_UI_Generate);
var Get_Item_UI_Generate$1 = Get_Item_UI_Generate;

var foreign18 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: Get_Item_UI_Generate$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * ATTENTION: onStart 等UI脚本自带函数不可改写为异步执行，有需求的异步逻辑请使用函数封装，通过函数接口在内部使用
 * UI: UI/IAAUI.ui
*/
let IAAUI_Generate = class IAAUI_Generate extends UIScript {
    /**
    * onStart 之前触发一次
    */
    onAwake() {
    }
};
IAAUI_Generate = __decorate([
    UIBind('UI/IAAUI.ui')
], IAAUI_Generate);
var IAAUI_Generate$1 = IAAUI_Generate;

var foreign19 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: IAAUI_Generate$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * ATTENTION: onStart 等UI脚本自带函数不可改写为异步执行，有需求的异步逻辑请使用函数封装，通过函数接口在内部使用
 * UI: UI/Illustrate_UI.ui
*/
let Illustrate_UI_Generate = class Illustrate_UI_Generate extends UIScript {
    /**
    * onStart 之前触发一次
    */
    onAwake() {
    }
};
Illustrate_UI_Generate = __decorate([
    UIBind('UI/Illustrate_UI.ui')
], Illustrate_UI_Generate);
var Illustrate_UI_Generate$1 = Illustrate_UI_Generate;

var foreign20 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: Illustrate_UI_Generate$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * ATTENTION: onStart 等UI脚本自带函数不可改写为异步执行，有需求的异步逻辑请使用函数封装，通过函数接口在内部使用
 * UI: UI/Item_UI.ui
*/
let Item_UI_Generate = class Item_UI_Generate extends UIScript {
    /**
    * onStart 之前触发一次
    */
    onAwake() {
    }
};
Item_UI_Generate = __decorate([
    UIBind('UI/Item_UI.ui')
], Item_UI_Generate);
var Item_UI_Generate$1 = Item_UI_Generate;

var foreign21 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: Item_UI_Generate$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * ATTENTION: onStart 等UI脚本自带函数不可改写为异步执行，有需求的异步逻辑请使用函数封装，通过函数接口在内部使用
 * UI: UI/Level_UI.ui
*/
let Level_UI_Generate = class Level_UI_Generate extends UIScript {
    /**
    * onStart 之前触发一次
    */
    onAwake() {
    }
};
Level_UI_Generate = __decorate([
    UIBind('UI/Level_UI.ui')
], Level_UI_Generate);
var Level_UI_Generate$1 = Level_UI_Generate;

var foreign22 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: Level_UI_Generate$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * ATTENTION: onStart 等UI脚本自带函数不可改写为异步执行，有需求的异步逻辑请使用函数封装，通过函数接口在内部使用
 * UI: UI/Select_UI.ui
*/
let Select_UI_Generate = class Select_UI_Generate extends UIScript {
    /**
    * onStart 之前触发一次
    */
    onAwake() {
    }
};
Select_UI_Generate = __decorate([
    UIBind('UI/Select_UI.ui')
], Select_UI_Generate);
var Select_UI_Generate$1 = Select_UI_Generate;

var foreign23 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: Select_UI_Generate$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * ATTENTION: onStart 等UI脚本自带函数不可改写为异步执行，有需求的异步逻辑请使用函数封装，通过函数接口在内部使用
 * UI: UI/Slot_UI.ui
*/
let Slot_UI_Generate = class Slot_UI_Generate extends UIScript {
    /**
    * onStart 之前触发一次
    */
    onAwake() {
    }
};
Slot_UI_Generate = __decorate([
    UIBind('UI/Slot_UI.ui')
], Slot_UI_Generate);
var Slot_UI_Generate$1 = Slot_UI_Generate;

var foreign24 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: Slot_UI_Generate$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * ATTENTION: onStart 等UI脚本自带函数不可改写为异步执行，有需求的异步逻辑请使用函数封装，通过函数接口在内部使用
 * UI: UI/Tips.ui
*/
let Tips_Generate = class Tips_Generate extends UIScript {
    get mCell1() {
        if (!this.mCell1_Internal && this.uiWidgetBase) {
            this.mCell1_Internal = this.uiWidgetBase.findChildByPath('Canvas/mCell1');
        }
        return this.mCell1_Internal;
    }
    get mCell2() {
        if (!this.mCell2_Internal && this.uiWidgetBase) {
            this.mCell2_Internal = this.uiWidgetBase.findChildByPath('Canvas/mCell2');
        }
        return this.mCell2_Internal;
    }
    get mCell3() {
        if (!this.mCell3_Internal && this.uiWidgetBase) {
            this.mCell3_Internal = this.uiWidgetBase.findChildByPath('Canvas/mCell3');
        }
        return this.mCell3_Internal;
    }
    /**
    * onStart 之前触发一次
    */
    onAwake() {
    }
};
Tips_Generate = __decorate([
    UIBind('UI/Tips.ui')
], Tips_Generate);
var Tips_Generate$1 = Tips_Generate;

var foreign26 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: Tips_Generate$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * ATTENTION: onStart 等UI脚本自带函数不可改写为异步执行，有需求的异步逻辑请使用函数封装，通过函数接口在内部使用
 * UI: UI/Tip_UI.ui
*/
let Tip_UI_Generate = class Tip_UI_Generate extends UIScript {
    /**
    * onStart 之前触发一次
    */
    onAwake() {
    }
};
Tip_UI_Generate = __decorate([
    UIBind('UI/Tip_UI.ui')
], Tip_UI_Generate);
var Tip_UI_Generate$1 = Tip_UI_Generate;

var foreign27 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: Tip_UI_Generate$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * ATTENTION: onStart 等UI脚本自带函数不可改写为异步执行，有需求的异步逻辑请使用函数封装，通过函数接口在内部使用
 * UI: UI/UserRankUI.ui
*/
let UserRankUI_Generate = class UserRankUI_Generate extends UIScript {
    /**
    * onStart 之前触发一次
    */
    onAwake() {
    }
};
UserRankUI_Generate = __decorate([
    UIBind('UI/UserRankUI.ui')
], UserRankUI_Generate);
var UserRankUI_Generate$1 = UserRankUI_Generate;

var foreign28 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: UserRankUI_Generate$1
});

/*
 * @Author       : hangyuan.zhang hangyuan.zhang@appshahe.com
 * @Date         : 2023-05-18 14:57:43
 * @LastEditors  : hangyuan.zhang hangyuan.zhang@appshahe.com
 * @LastEditTime : 2024-04-24 11:48:40
 * @FilePath     : \RE\JavaScripts\submodule\utils\GameAnimaiton.ts
 * @Description  :
 */
class GameAnimation {
    static get instance() {
        if (GameAnimation._instance == null) {
            GameAnimation._instance = new GameAnimation();
        }
        return GameAnimation._instance;
    }
    /**
     * 不为全明星服务的通用的飘字
     * @param startLocation
     * @param endLocation
     * @param targetUI
     * @param time
     * @param onFinished
     */
    playFlyUI(startLocation, endLocation, targetUI, time, onFinished) {
        let tween = new mw.Tween(startLocation.clone());
        //飘到指定位置
        tween.to(endLocation, time * 1000).onUpdate((data) => {
            console.log(targetUI.position);
            targetUI.position = data;
        }).onComplete(() => {
            onFinished && onFinished();
        });
        tween.start();
    }
    /**
     *
     * @param targetUI 需要放大的目标UI
     * @param largeTime 放大的时间
     * @param largeStart 放大开始的大小
     * @param largeRate 放大最终的大小
     * @param shrinkTime 缩小的时间
     * @param shrinkRate 缩小的最终大小
     * @param onFinished 结束的回调
     * @returns 两个tween 放大，缩小
     */
    playerEnlargeAnimation(targetUI, largeTime, largeStart, largeRate, shrinkTime = 0, shrinkRate, onFinished) {
        //缩小
        let shrinkAnim = null;
        if (shrinkTime != 0) {
            shrinkAnim = new mw.Tween(largeRate)
                .to(shrinkRate, shrinkTime * 1000)
                .onUpdate((data) => {
                // console.log("data 缩小", data)
                targetUI.renderScale = data;
            }).onComplete(() => {
                onFinished && onFinished();
            });
        }
        //放大
        let enLargeAnim = new mw.Tween(largeStart)
            .to(largeRate, largeTime * 1000)
            .onUpdate((data) => {
            // console.log("data", data);
            targetUI.renderScale = data;
        }).onComplete(() => {
            if (shrinkTime != 0) {
                shrinkAnim.start();
            }
            else {
                onFinished && onFinished();
            }
        })
            .start();
        return [enLargeAnim, shrinkAnim];
    }
    /**
     * 平移的动画
     * @param starVector2 开始的位置
     * @param endVector2 结束的位置
     * @param time 持续的时间
     * @param ui 被平移的ui
     */
    playTranslateAnimation(startLocation, endLocation, time, targetUI, onFinished) {
        return new mw.Tween(startLocation)
            .to(endLocation, time * 1000)
            .onUpdate((data) => {
            //console.log("data", targetUI, data);
            targetUI.position = data;
        }).onComplete(() => {
            onFinished && onFinished();
        })
            .start();
    }
    /**
     * 渲染透明
     * @param start
     * @param end
     * @param time
     * @param targetUI
     * @param onFinished
     * @returns 返回tween
     */
    playFadeAnimation(start, end, time, targetUI, onFinished) {
        return new mw.Tween({ renderOpacity: start })
            .to({ renderOpacity: end }, time * 1000)
            .onUpdate((data) => {
            //console.log("data", targetUI, data);
            targetUI.renderOpacity = data.renderOpacity;
        }).onComplete(() => {
            onFinished && onFinished();
        })
            .start();
    }
    /**
     * 左右抖动的动画
     * @param targetUI 目标UI
     * @param angle 旋转的角度
     * @param time 时间
     * @param times 次数
     * @param onFinished 结束的回调
     */
    playWobbleAnimation(targetUI, angle, time, times, onFinished, startAngle) {
        if (!startAngle) {
            startAngle = targetUI.renderTransformAngle;
        }
        let targetAngle = startAngle + angle;
        let rightWobble = new mw.Tween({ angle1: targetAngle })
            .to({ angle1: times != 0 ? startAngle - angle : startAngle }, time * 2000)
            .onUpdate((data) => {
            // console.log("data", targetUI, data.angle1);
            targetUI.renderTransformAngle = data.angle1;
        }).onComplete(() => {
            if (times > 0) {
                this.playWobbleAnimation(targetUI, angle, time, times - 1, onFinished, startAngle);
            }
            else {
                onFinished && onFinished();
            }
        });
        new mw.Tween({ angle1: startAngle })
            .to({ angle1: targetAngle }, time * 1000)
            .onUpdate((data) => {
            // console.log("data", targetUI, data.angle1);
            targetUI.renderTransformAngle = data.angle1;
        }).onComplete(() => {
            rightWobble.start();
        })
            .start();
    }
    /**
    * 通过位移抖动的动画
    * @param targetUI 目标UI
    * @param offsetPos 位移相对原来位置得偏移
    * @param time 时间
    * @param times 次数
    * @param onFinished 结束的回调
    * @returns 返回左 右两个tween
    */
    playTransWobbleAnimation(targetUI, offsetPos, time, times, startPos, onFinished) {
        let position = targetUI.position.clone();
        if (startPos) {
            position = startPos;
        }
        const endPosition = position.clone().subtract(offsetPos);
        let rightWobble = new mw.Tween(endPosition.clone())
            .to(position.clone(), time * 2000)
            .onUpdate((data) => {
            //console.log("data 位置", targetUI, data);
            targetUI.position = data;
        }).onComplete(() => {
            if (times > 0) {
                this.playTransWobbleAnimation(targetUI, offsetPos, time, times - 1, startPos, onFinished);
            }
            else {
                onFinished && onFinished();
            }
        });
        let leftWobble = new mw.Tween(position.clone())
            .to(endPosition.clone(), time * 1000)
            .onUpdate((data) => {
            targetUI.position = data;
        }).onComplete(() => {
            rightWobble.start();
        })
            .start();
        return [leftWobble, rightWobble];
    }
}
GameAnimation._instance = null;
var IconType;
(function (IconType) {
    /**建造的货币 */
    IconType[IconType["MONEY"] = 1] = "MONEY";
    /**竞技币 */
    IconType[IconType["TOKEN"] = 2] = "TOKEN";
    /** 战令经验 */
    IconType[IconType["BP_EXP"] = 3] = "BP_EXP";
    /**排位积分 */
    IconType[IconType["BR_SCORE"] = 4] = "BR_SCORE";
    IconType[IconType["WEEK_CHECK_SCORE"] = 5] = "WEEK_CHECK_SCORE";
})(IconType || (IconType = {}));

var foreign29 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get IconType () { return IconType; },
    default: GameAnimation
});

/**
 * 系统提示，一个顶一个向上跳动，然后消失，最多三条。继承自Tips_Generate
 */
class Tips extends Tips_Generate$1 {
    constructor() {
        super(...arguments);
        /**当前空闲的条目*/
        this.freeCellArr = [];
        /**当前激活的条目*/
        this.activeCellArr = [];
        /**已经完成的条目*/
        this.overCellArr = [];
    }
    /**
     * 获得提示单例
     * @returns 返回提示单例
     *  */
    static get instance() {
        if (this._instance == null) {
            this._instance = mw.UIService.create(Tips);
        }
        return this._instance;
    }
    /**
     * 初始化当前空闲的条目，隐藏UI
     */
    onStart() {
        this.freeCellArr = [this.mCell1, this.mCell2, this.mCell3];
        this.canUpdate = true;
        this.onLayout();
    }
    /**
     * 隐藏的对象不参与UI布局，所以要布局完成后再隐藏
    */
    onLayout() {
        for (let i = 0; i < this.freeCellArr.length; i++) {
            this.freeCellArr[i].visibility = (mw.SlateVisibility.Collapsed);
        }
    }
    /**
     * 显示系统提示 (Client Only)
     * @param content 提示内容
     */
    static show(content) {
        //	if (mw.SystemUtil.isServer()) return;
        mw.UIService.showUI(Tips.instance, mw.UILayerSystem);
        Tips.instance.showMsg(content);
    }
    /**
     * 显示Msg提示，如果没有空闲的条目，就把最后一个条目移动到最上面，然后显示提示内容
     * @param content 提示内容
     */
    showMsg(content) {
        let cell = null;
        if (this.freeCellArr.length > 0) {
            cell = this.freeCellArr.shift();
        }
        else {
            cell = this.activeCellArr.shift();
        }
        /**Fix 动态计算Canvas居中位置*/
        cell.position = new mw.Vector2(mw.WindowUtil.getViewportSize().x / 2 - cell.size.x / 2, cell.position.y);
        let text = cell.findChildByPath('Content_txt');
        text.text = (content);
        cell["state"] = 0;
        cell["stopTime"] = 0;
        this.activeCellArr.push(cell);
    }
    /**
     * 计算条目canvas的位置，移动Tips，如果条目移动到最上面，就隐藏
     * @param dt 两帧之间的时间差
     */
    onUpdate(dt) {
        if (this.activeCellArr.length == 0)
            return;
        let pos = null;
        for (let i = 0; i < this.activeCellArr.length; i++) {
            let cell = this.activeCellArr[i];
            switch (cell["state"]) {
                case 0:
                    cell.visibility = (mw.SlateVisibility.Visible);
                    pos = cell.position;
                    pos.y = Tips.Y_START;
                    cell.position = (pos);
                    cell["state"]++;
                    break;
                case 1:
                    pos = cell.position;
                    pos.y -= Tips.MOVE_SPEED * dt;
                    if (i == 0) {
                        if (pos.y <= Tips.Y_OVER) {
                            pos.y = Tips.Y_OVER;
                            cell["state"]++;
                        }
                    }
                    else {
                        let lastCellPos = this.activeCellArr[i - 1].position;
                        if (pos.y <= lastCellPos.y + 60) {
                            pos.y = lastCellPos.y + 60;
                            cell["stopTime"] += dt;
                            if (cell["stopTime"] >= Tips.KEEP_TIME) {
                                cell["state"] += 2;
                            }
                        }
                    }
                    cell.position = (pos);
                    break;
                case 2:
                    cell["stopTime"] += dt;
                    if (cell["stopTime"] >= Tips.KEEP_TIME) {
                        cell["state"]++;
                    }
                    break;
                case 3:
                    cell.visibility = (mw.SlateVisibility.Collapsed);
                    this.overCellArr.push(cell);
                    break;
            }
        }
        while (this.overCellArr.length > 0) {
            let cell = this.overCellArr.shift();
            let index = this.activeCellArr.indexOf(cell);
            this.activeCellArr.splice(index, 1);
            this.freeCellArr.push(cell);
        }
    }
}
/**Y轴开始位置 */
Tips.Y_START = 400;
/**Y轴结束位置 */
Tips.Y_OVER = 150;
/**移动速度 */
Tips.MOVE_SPEED = 500;
/**停留时间 */
Tips.KEEP_TIME = 0.5;

var foreign30 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: Tips
});

const MWModuleMap = { 
     '0E7183864A7BE7B6C4C7DB81F06D570F': foreign1,
     '6A7B488949D3ABA96D0BAF849CA1E1AE': foreign2,
     'EF845E584ECE1C8E53A96195763FC1A5': foreign3,
     'E793F4E748068B7014AF149815249190': foreign4,
     'E6FC771744B6D913C9441E8A915DBCC2': foreign5,
     '490247FE43D457B85EF057977517099F': foreign6,
     '479D7D3447F0007FEBC3848FA422CC17': foreign7,
     'DBC140CC44FE89A79BCC09B71D68A796': foreign8,
     '580046DB47BBB90B934FA39B65B973E2': foreign9,
     '4A90E38C4192D7FAF16F83898FCAC219': foreign10,
     '809067014B3CF9466A80A6BDF1F8A03C': foreign11,
     'B2294BEE486C64585D4D6C9D2E2A29B7': foreign12,
     'BE51F1314FF9E1B0831555944A504573': foreign13,
     '1AF9AC044BAA508BD6CB78A1D707B013': foreign14,
     'D19D4E004C90F3D4E782A2AFE156D630': foreign15,
     '0965A9604AF9AD8B0D8833AEA19AD6B3': foreign16,
     '47D601104E1D68F07F2871B500E05DDA': foreign17,
     'B32DECB342B4A4672D51B18EACB7414D': foreign18,
     '8185F352414C0F496EE35CA1F89225DD': foreign19,
     '6EB27D4A41492DD6186ED4B7EE8D2769': foreign20,
     '8429EB3645CB15E6D119FE9993CE5143': foreign21,
     'B65F55934F932B773F12C3B17E2BD513': foreign22,
     '4EE162D549346C5B7AF997BDA462E33A': foreign23,
     'E92897A248DE8503D010E6862B7DEAF3': foreign24,
     'CD5328F04B946C23AB08E68E155C2D5B': foreign25,
     '170235FE46D26B4DAADC9293EE730933': foreign26,
     'DC156E8E44BD796E1A1BEDB806E0B1FF': foreign27,
     '49C2BC27412134605F5B07941953FA9F': foreign28,
     '29D97FD64EBCDB9B626BAD9E95CEB3B0': foreign29,
     '20B62ED84F3052C4D65101B34996EF09': foreign30,
};
const MWFileMapping = new WeakMap([[foreign1 || {}, "JavaScripts/EventData"],
[foreign2 || {}, "JavaScripts/GameController"],
[foreign3 || {}, "JavaScripts/M_XC/Data/Data_interface"],
[foreign4 || {}, "JavaScripts/M_XC/DefaultUI"],
[foreign5 || {}, "JavaScripts/M_XC/GameStart"],
[foreign6 || {}, "JavaScripts/M_XC/Obj_Manager"],
[foreign7 || {}, "JavaScripts/M_XC/ui/UIMain"],
[foreign8 || {}, "JavaScripts/NpcAnimation"],
[foreign9 || {}, "JavaScripts/TimeController"],
[foreign10 || {}, "JavaScripts/Trigger/ItemTrigger"],
[foreign11 || {}, "JavaScripts/Trigger/NPCTrigger"],
[foreign12 || {}, "JavaScripts/Trigger/Pos_Trigger"],
[foreign13 || {}, "JavaScripts/Trigger/SlotTrigger"],
[foreign14 || {}, "JavaScripts/Trigger/UseItemTrigger"],
[foreign15 || {}, "JavaScripts/ui-generate/DefaultUI_generate"],
[foreign16 || {}, "JavaScripts/ui-generate/Dress_UI_generate"],
[foreign17 || {}, "JavaScripts/ui-generate/GameManagerUI_generate"],
[foreign18 || {}, "JavaScripts/ui-generate/Get_Item_UI_generate"],
[foreign19 || {}, "JavaScripts/ui-generate/IAAUI_generate"],
[foreign20 || {}, "JavaScripts/ui-generate/Illustrate_UI_generate"],
[foreign21 || {}, "JavaScripts/ui-generate/Item_UI_generate"],
[foreign22 || {}, "JavaScripts/ui-generate/Level_UI_generate"],
[foreign23 || {}, "JavaScripts/ui-generate/Select_UI_generate"],
[foreign24 || {}, "JavaScripts/ui-generate/Slot_UI_generate"],
[foreign25 || {}, "JavaScripts/ui-generate/StartGame_generate"],
[foreign26 || {}, "JavaScripts/ui-generate/Tips_generate"],
[foreign27 || {}, "JavaScripts/ui-generate/Tip_UI_generate"],
[foreign28 || {}, "JavaScripts/ui-generate/UserRankUI_generate"],
[foreign29 || {}, "JavaScripts/util/GameAnimaiton"],
[foreign30 || {}, "JavaScripts/util/Tips"]]);

exports.MWFileMapping = MWFileMapping;
exports.MWModuleMap = MWModuleMap;
//# sourceMappingURL=game.js.map
