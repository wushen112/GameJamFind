/*
 * @Author: wushen112 330177253@qq.com
 * @Date: 2024-07-06 10:39:43
 * @LastEditors: wushen112 330177253@qq.com
 * @LastEditTime: 2024-07-06 21:31:59
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
import EventData from "../EventData";
import TimeController from "../TimeController";
import DefaultUI_Generate from "../ui-generate/DefaultUI_generate";
import { Items, M_Player, Select_UI, Slot_UI, Tip_UI, Tools } from "./GameStart";
import { Obj_Manager } from "./Obj_Manager";


export default class DefaultUI extends DefaultUI_Generate{

	//倒计时0.1秒计时器
	private  _timer :number = 0;
	/**总时间 */
	public time:number = 180;

	private slot_cnt :number

	private M_slots :Array<Slot_UI> = new Array<Slot_UI>();

	public slots: Map<string,Slot_Data> = new Map<string,Slot_Data>();
	public exChange:Map<string,string> = new Map<string,string>()

	onStart(){
		this.virtualJoystickPanel.onInputDir.add((vec)=>{
			TimeController.instance.time = Vector2.distance(Vector2.zero,vec)
		})
		this.mBtn_exchange.onClicked.add(()=>{
			Obj_Manager.instance.getItem();
		})
		//获得物品栏
		Event.addLocalListener(EventData.Get_Item,(id:string,tag:string)=>{
			
			let temp = this.slots.get(tag)
			if(temp){
				temp.cnt++
			}
			else{
				var slot_data : Slot_Data = {
					icon_id : id,
					tag: tag,
					cnt : 1
				}
				this.slots.set(tag,slot_data)
			}
			this.update_slot()
		})
		//更新物品栏
		Event.addLocalListener("Update_Slot",(flag:boolean,tag_ary:any,consume_cnt:any)=>{
			if(!flag)
				return
			console.log("ui")
			for(let i = 0 ; i < tag_ary.length ;i++){
				let data = this.slots.get(tag_ary[i])
				data.cnt -= consume_cnt[i]
			}

			this.update_slot()
		})
		//初始化物品栏
		Event.addLocalListener(EventData.Init_Slot,(cnt:number)=>{this.init_canvas(cnt)})

		this.canUpdate = true;
	}

	onShow(){

	}

	public init_canvas(cnt:number){
		this.slot_cnt = cnt
		for(let i = 0 ; i< cnt ; i++){
			let slot = UIService.create(Slot_UI)
			slot.init(i)
			this.canvas.addChild(slot.uiWidgetBase)
			this.M_slots.push(slot)
		}
	}

	private update_slot(){
		let index = 0
		for(let value of this.slots.values()){
			if(value.cnt>0){
				this.M_slots[index].update_ui(value.cnt,value.icon_id)
				index++
			}
			else
				continue
		}
		for(index;index<this.M_slots.length;index++){
			this.M_slots[index].init(index)
		}
	}

	onUpdate(dt){
		TweenUtil.TWEEN.update();
		this._timer += dt * TimeController.instance.time 
		if(this._timer >= 0.1&&this.time>0){
			this.time -= 0.1;
			this._timer = 0;
			//TODO 添加一个倒计时的Ui
			const data = this.calTime(this.time);
			this.mText_Time.text = data.minute+':'+data.second+':'+data.ms
		}
		if(this.time<=0){
			//TODO 走死亡路径
		}

		//const hitResult = QueryUtil.lineTrace(Camera.currentCamera.worldTransform.position,ScreenUtil.getSightBeadPosition(),true,true)
		//console.log(hitResult[0].gameObject.name)

	}

	calTime(time:number){
		const minute = Math.floor (time /60);
		const second = Math.floor (time%60);
		const ms =Math.round( (time - Math.floor(time))*10);
		return {minute,second,ms};
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
