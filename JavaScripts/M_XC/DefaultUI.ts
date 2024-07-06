import { Items, M_Player, Select_UI, Slot_UI, Tip_UI, Tools } from "./GameStart";

@UIBind('')
export default class DefaultUI extends UIScript {
	private obj_canvas : Canvas;
	private select_ui : Select_UI
	private tip_canvas : Canvas;
	private PLayTime : number = 120 //游玩时间
	private BoxState : boolean = false; //宝箱领取状态
	private goalText : TextBlock;//玩家金币数目
	private goalImage : Image;//玩家金币图标

	/*****************************物品栏相关********************************/
	private M_slots :Array<Slot_UI> = new Array<Slot_UI>();
	private slots: Map<string,Slot_Data> = new Map<string,Slot_Data>();
	private slot_cnt :number
	public init_canvas(cnt:number){
		this.slot_cnt = cnt
		for(let i = 0 ; i< cnt ; i++){
			let slot = UIService.create(Slot_UI)
			slot.init(i)
			this.obj_canvas.addChild(slot.uiWidgetBase)
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
	/**********************************************************************/

	/** 仅在游戏时间对非模板实例调用一次 */
    protected  onStart() {
		//设置能否每帧触发onUpdate
		this.canUpdate = true;
		
		//找到对应的跳跃按钮
        const jumpBtn = this.uiWidgetBase.findChildByPath('RootCanvas/Button_Jump') as Button

		const LayBtn = this.uiWidgetBase.findChildByPath('RootCanvas/Button_Lay') as Button

		this.goalText = this.uiWidgetBase.findChildByPath('RootCanvas/Goal/TextBlock') as TextBlock

		const IllBtn = this.uiWidgetBase.findChildByPath('RootCanvas/Ill/Ill_Button') as Button

		const TrailBtn = this.uiWidgetBase.findChildByPath('RootCanvas/Trailing/Ill_Button') as Button

		const WingBtn = this.uiWidgetBase.findChildByPath('RootCanvas/Wing/Ill_Button') as Button

		const Cloth = this.uiWidgetBase.findChildByPath('RootCanvas/Cloth/Ill_Button') as Button

		const Hat = this.uiWidgetBase.findChildByPath('RootCanvas/Hat/Ill_Button') as Button

		const Anim = this.uiWidgetBase.findChildByPath('RootCanvas/Anim/Ill_Button') as Button

		const BGM = this.uiWidgetBase.findChildByPath('RootCanvas/BGM/Ill_Button') as Button

		this.obj_canvas = this.uiWidgetBase.findChildByPath('RootCanvas/ScrollBox/Canvas') as Canvas

		const dot = this.uiWidgetBase.findChildByPath('RootCanvas/Image') as Image

		const RSTBtn = this.uiWidgetBase.findChildByPath('RootCanvas/RstButton') as Button

		this.goalImage = this.uiWidgetBase.findChildByPath('RootCanvas/Goal/IMG') as Image

		RSTBtn.onPressed.add(()=>{
			M_Player.instance.Rst();
		})

		Event.addLocalListener("dot",(preset:boolean)=>{
			if(!preset)
				dot.destroyObject()
		})
		
		
		this.tip_canvas = this.uiWidgetBase.findChildByPath('RootCanvas/Canvas_1') as Canvas

		/**********tip相关***********/
		Event.addLocalListener("Tips",(tip:string)=>{
			this.UpdateTip(tip)
		})
		/***************************/

		/*********物品栏相关*********/
		Event.addLocalListener("Init_Slot",(cnt:number)=>{this.init_canvas(cnt)})

		Event.addLocalListener("Get_Slot_Obj",(id:string,tag:string)=>{
			
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
		/************************/

		/*********按钮相关*********/
		Event.addLocalListener("visible_button",(tag:string,scr:any,type:number,event_name:string)=>{
			if(this.select_ui)
				return
			this.select_ui = UIService.show(Select_UI,scr,tag,type,event_name,this.slots)
			this.select_ui.uiWidgetBase.position = new Vector2(1450,700)
			//this.update_slot()
		})

		Event.addLocalListener("Unvisible_button",()=>{
			try {
				this.select_ui.destroy()
				this.select_ui = undefined
			} catch (error) {
				
			}

		})
		/************************/
		
				
		/*********图鉴相关*********/
		Event.addLocalListener("Update_gold",()=>{
			this.UpdateGold()
		})

		IllBtn.onPressed.add(()=>{
			Items.instance.Update_UI(SlateVisibility.Visible)
		})

		TrailBtn.onPressed.add(()=>{
			Event.dispatchToLocal("Open_UI",1)
		})

		WingBtn.onPressed.add(()=>{
			Event.dispatchToLocal("Open_UI",2)
		})

		Cloth.onPressed.add(()=>{
			Event.dispatchToLocal("Open_UI",3)
		})

		Hat.onPressed.add(()=>{
			Event.dispatchToLocal("Open_UI",4)
		})

		Anim.onPressed.add(()=>{
			Event.dispatchToLocal("Open_UI",5)
		})

		BGM.onPressed.add(()=>{
			Event.dispatchToLocal("Open_UI",6)
		})
		/************************/

		//点击跳跃按钮,异步获取人物后执行跳跃
        jumpBtn.onPressed.add(()=>{
			Player.asyncGetLocalPlayer().then((player) => {
				player.character.changeState(CharacterStateType.Jumping);
			});
		})	 

		LayBtn.onPressed.add(()=>{
			M_Player.instance.Lay()
		})


		//******************************************倒计时宝箱功能********************************************************** */
		const ReadyBG = this.uiWidgetBase.findChildByPath('RootCanvas/Box/ReadyBG') as Image   //倒计时到达后，提醒领取宝箱的背景
		const BoxBtn = this.uiWidgetBase.findChildByPath('RootCanvas/Box/Button') as Button //宝箱交互按钮
		const TimeText = this.uiWidgetBase.findChildByPath('RootCanvas/Box/Time') as TextBlock //宝箱领取倒计时文本

		//倒计时逻辑,每两分钟给予一次奖励
		setInterval(()=>{
			if(!this.BoxState)
				this.PLayTime--
			if(this.PLayTime == 0){
				this.BoxState = true
				TimeText.text = "宝箱已就绪"
				ReadyBG.visibility = SlateVisibility.Visible
			}
			else
				TimeText.text = this.PLayTime.toString()+"s"
		},1000)

		BoxBtn.onPressed.add(()=>{
			if(this.BoxState){
				let RandomGold = MathUtil.randomInt(1,6) //随机生成一个数，作为奖励奖杯数
				this.UpdateTip("获取"+RandomGold+"个奖杯")
				M_Player.instance.PlayerGoalCnt += RandomGold
				this.UpdateGold()
				this.PLayTime = 120 ;
				this.BoxState = false;
				ReadyBG.visibility = SlateVisibility.Hidden
				TimeText.text = this.PLayTime.toString()+"s"
			}
			else
				this.UpdateTip("宝箱还未准备好")
		})
		//**************************************************************************************************************** */
    }

	//更新玩家金币数
	private UpdateGold(){
		Tools.imageJump(this.goalImage)
		this.goalText.text = M_Player.instance.PlayerGoalCnt.toString()
	}

	//更新Tip
	private UpdateTip(tip:string){
		let tip_ui = UIService.create(Tip_UI)
			tip_ui.init(tip)
			this.tip_canvas.addChild(tip_ui.uiWidgetBase)
			setTimeout(() => {
				tip_ui.destroy()
			}, 2000);
	}

	onUpdate(){
		TweenUtil.TWEEN.update();
	}
}
