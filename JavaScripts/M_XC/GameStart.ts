/**
 * Find核心脚本
 * @version v1.0.4
 * @author 许淳
 * @abstract 解决“披萨问题”
 * @abstract 增加收获奖杯动效
 */
import EventController from "../EventController";
import EventData from "../EventData";
import GameController, { Ending } from "../GameController";
import GameAnimation from "../util/GameAnimaiton";
import DefaultUI from "./DefaultUI";
import { Obj_Manager } from "./Obj_Manager";
import MainUI from "./ui/UIMain";

export namespace Tools{
    export function imageJump(targetImg: mw.Widget) {
        let vector2 = new mw.Vector2(1, 1);
        let tweenA = new Tween({ scale: 1 }).to({ scale: 1.3 }, 500).onUpdate((v) => {
            vector2.x = v.scale;
            vector2.y = v.scale;
            targetImg.renderScale = (vector2);
        })
        let tweenB = new Tween({ scale: 1.3 }).to({ scale: 1 }, 500).onUpdate((v) => {
            vector2.x = v.scale;
            vector2.y = v.scale;
            targetImg.renderScale = (vector2);
        })
        tweenA.chain(tweenB);
        tweenA.start();
    }
}

//获取物品提示UI
@UIBind('Get_Item_UI.ui')
export  class Get_Item_UI extends UIScript {
    //显示函数
	protected onShow(img_id:string,use_ui_icon:boolean) {
        //获取控件
		let img = this.uiWidgetBase.findChildByPath('RootCanvas/Item_Image') as Image
        //设置图片尺寸
		img.size = new Vector2(200,200)
        //设置图片ICON
		if(use_ui_icon)
            img.setImageByAssetIconData(Items.instance.ItemAssets.get(img_id))
		else
			img.imageGuid = img_id
        //播放对应音效
		SoundService.playSound("130806")
        //设定过段时间后销毁
		setTimeout(() => {
			this.destroy()
		}, 1000);
	}

}

//交互UI
@UIBind('Select_UI.ui')
export class Select_UI extends UIScript {
    private _btn : Button;//按钮
    private _text : TextBlock;//文字
    //显示UI函数
    protected onShow(scr : any , tip:string,type:number,event_name:string,slots:Map<string,Slot_Data>){
        //获取控件
        this._btn = this.uiWidgetBase.findChildByPath('RootCanvas/Button') as Button
        this._text = this.uiWidgetBase.findChildByPath('RootCanvas/TextBlock') as TextBlock
        //根据情况设定按键反馈
        switch (type) {
            case 0:
                this._btn.onPressed.add(()=>{
                    scr.get_item()
                    this.destroy()
                    Event.dispatchToLocal("Unvisible_button")
                })
                break;
            case 1:
                this._btn.onPressed.add(()=>{
                    Event.dispatchToLocal(event_name,slots)
                    this.destroy()
                    Event.dispatchToLocal("Unvisible_button")
                })
                break;
            case 2:
                this._btn.onPressed.add(()=>{
                    scr.get_item()
                    this.destroy()
                    Event.dispatchToLocal("Unvisible_button")
                })
                break;
        }
        //根据用户设定设置按键提示文本
        this._text.text = tip
    }

}

//物品栏UI
@UIBind('Slot_UI.ui')
export  class Slot_UI extends UIScript {
    
    private Obj_BG : Image;//物品图片
    private Cnt_text : TextBlock;//物品数量
    public index : number;//物品栏序号
    //初始化函数
    public init(id){
        //获取对应控件
        this.Obj_BG = this.uiWidgetBase.findChildByPath('RootCanvas/Obj_BG') as Image
        this.Cnt_text = this.uiWidgetBase.findChildByPath('RootCanvas/Obj_Cnt') as TextBlock
        //设置初始参数
        this.Obj_BG.imageGuid = "163360"
        this.Cnt_text.visibility = SlateVisibility.Hidden 
        this.index = id
    }
    //更新物品栏UI
    public update_ui(cnt:number,id:string){
        this.Cnt_text.text = cnt.toString()
        this.Obj_BG.imageGuid = id
        this.Obj_BG.size = new Vector2(150,150)
        this.Cnt_text.visibility = SlateVisibility.Visible
    }

}

//提示UI
@UIBind('Tip_UI.ui')
export  class Tip_UI extends UIScript {
    //初始化UI
    public init(tip:string){
        //获取控件
        let tip_text = this.uiWidgetBase.findChildByPath('RootCanvas/TextBlock') as TextBlock
        //设置提示内容
        tip_text.text = tip
    }
}

//图鉴子UI
@UIBind('Dress_UI.ui')
export  class Dress_UI extends UIScript {

	private name :TextBlock
	private button : Button
	private get_image : Image
	private id :number
	private if_get :boolean
	private type : number
	private AssetGUID:string

	public _init(name:string,index:number,type:number,Asset_GUID){
		this.name = this.uiWidgetBase.findChildByPath('RootCanvas/TextBlock') as TextBlock

		this.button = this.uiWidgetBase.findChildByPath('RootCanvas/Button') as Button

		this.get_image = this.uiWidgetBase.findChildByPath('RootCanvas/Image_1') as Image

		this.name.text = name
		this.get_image.visibility = SlateVisibility.Hidden
		this.id = index
		this.if_get = false
		this.AssetGUID = Asset_GUID
		this.type = type
		this.button.onPressed.add(()=>{
			if(this.if_get){
				Event.dispatchToLocal("IAA","想要装扮这个物品了嘛，喵呜",this.type,this.id,2,this.AssetGUID)
			}
			else{
				if(M_Player.instance.PlayerGoalCnt<1)
					Event.dispatchToLocal("IAA","看广告提前解锁对应物品",this.type,this.id,0,this.AssetGUID)
				else
					Event.dispatchToLocal("IAA","是否花费1个奖品解锁该物品",this.type,this.id,1,this.AssetGUID)
			}
		})

	}

	public get_dress(){
		this.get_image.visibility = SlateVisibility.Visible
		this.if_get = true
	}
}

//图鉴UI
@UIBind('Illustrate_UI.ui')
export  class Illustrate_UI extends UIScript {
	public levels_canvas : Canvas;	//资源容器
	private cancel_btn : Button;	//关闭按钮
	private title:TextBlock;        //标题
	
    //图鉴UI显示函数
	protected onShow(){
		this.setVisible(SlateVisibility.Hidden)
	}
    //图鉴UI初始化函数
	public _init(type : number){
        //设置标题
		let title : string =""
		switch (type) {
			case 1:
				title =  "拖尾"
				break
			case 2:
				title =  "翅膀"
				break
			case 3:
				title =  "套装"
				break
			case 4:
				title =  "头顶装饰"
				break
			case 5:
				title =  "动作"
				break
			case 6:
				title =  "背景音乐"
				break
			default:
				title =  "奖杯图鉴"
				break
		}
        //获取对应UI控件
		this.levels_canvas = this.uiWidgetBase.findChildByPath('RootCanvas/ScrollBox/Item') as Canvas
		this.cancel_btn = this.uiWidgetBase.findChildByPath('RootCanvas/ScrollBox/Cancel_btn') as Button
		this.title = this.uiWidgetBase.findChildByPath('RootCanvas/ScrollBox/Title_text') as TextBlock
        //设置子UI布局
		if(type == 0)
			this.levels_canvas.autoLayoutSpacing = 50
		else
			this.levels_canvas.autoLayoutSpacing = 65
        //设置子UI排列方式
		this.levels_canvas.autoLayoutContainerRule = UILayoutType.Horizontal
        //设置图鉴UI标题
		this.title.text = title
        //添加关闭按钮反馈
		this.cancel_btn.onPressed.add(()=>{
			this.setVisible(SlateVisibility.Hidden)
		})
	}

}

//关卡收集物子UI
@UIBind('Item_UI.ui')
export  class Item_UI extends UIScript {

	private text : TextBlock; //物品文字
	private img : Button; //物品按钮
	private _level_number : number;//物品所属关卡号
	private _image : Image;//物品图片
    //初始化函数
	public init(_cnt:number){
        //获取按键
		this.img = this.uiWidgetBase.findChildByPath('RootCanvas/Item_img') as Button
		this.text = this.uiWidgetBase.findChildByPath('RootCanvas/TextBlock') as TextBlock
		this._image = this.uiWidgetBase.findChildByPath('RootCanvas/Image') as Image
        //初始化物品所属关卡号
		this._level_number = _cnt
        //添加按钮反馈
		this.img.onPressed.add(()=>{
			   Event.dispatchToLocal("IAA","看广告提前解锁对应物品",0,this._level_number,0)
		})
	}
    //获取物品后更新UI
	public Change_img(cnt_num:string,use_ui_icon:boolean){
        //毁灭按钮
		this.img.destroyObject()
        //更新物品图片
		if(use_ui_icon)
            this._image.setImageByAssetIconData(Items.instance.ItemAssets.get(cnt_num))
		else
			this._image.imageGuid = cnt_num
		this._image.imageColor = new LinearColor(1,1,1)
        //摧毁文字
		this.text.destroyObject()
	}
}

//关卡收集物UI
@UIBind('Level_UI.ui')
export  class Level_UI extends UIScript {

	private Level_name : TextBlock;//关卡名称
	private Level_title : TextBlock;//关卡标题
	private Items_canvas : Canvas;//关卡容器
	private Item_cnt : number =0;//关卡子UI数
    private max_item : number=0;//最大物品数

	private Items : Array<Item_UI> = new Array<Item_UI>();//存储关卡子UI
    //初始化函数
	public init(_cnt:number,name:string,_Item_cnt:number){
        //获取对应控件
		this.Level_name = this.uiWidgetBase.findChildByPath('RootCanvas/Level_name') as TextBlock
		this.Level_title = this.uiWidgetBase.findChildByPath('RootCanvas/Level_number') as TextBlock
		this.Items_canvas = this.uiWidgetBase.findChildByPath('RootCanvas/Canvas') as Canvas
        //设置关卡标题
		this.Level_name.text = name
		this.Level_title.text = "第 " + _cnt.toString() + " 关"
        //根据用户设定添加子UI
		for (let index = 0; index < _Item_cnt;index++)
		{
			let Item = UIService.create(Item_UI)
			Item.init(_cnt)
			this.Items_canvas.addChild(Item.uiWidgetBase)
			this.Items.push(Item)
		}
        this.max_item = _Item_cnt;
	}
    //获取物体时更新UI
	public Get_Item(cnt_num:string,use_ui_icon:boolean){
		this.Items[this.Item_cnt].Change_img(cnt_num,use_ui_icon)
		this.Item_cnt++
        if(this.Item_cnt == this.max_item){
            Event.dispatchToServer("完成关卡",this.Level_name.text)
            Event.dispatchToLocal(this.Level_name.text)}
	}
}

//关卡类
@Serializable
class LevelList {
    @Property({ displayName: "关卡名称",tooltip:"当前关卡的名称" })
    public Level_Name: string = "";
    @Property({ displayName: "关卡可收集物品数",tooltip:"当前关卡可收集物品总数" })
    public Level_Objs_Cnt: number = 0;

    //构造函数
    constructor(a?: string, b?: number) {
        this.Level_Name = a;
        this.Level_Objs_Cnt = b;
    }
}

//GUID素材类
@Serializable
class TitleList {
    @Property({ displayName: "称谓名称",tooltip:"称谓名称" })
    public Title_Name: string = "";
    @Property({ displayName: "称谓需求奖杯数",tooltip:"称谓需求奖杯数" })
    public Title_Gold: number = 0;

    //构造函数
    constructor(a?: string, b?: number) {
        this.Title_Name = a;
        this.Title_Gold = b;
    }
}

//GUID素材类
@Serializable
class AssetList {
    @Property({ displayName: "素材名称",tooltip:"素材名称" })
    public Asset_Name: string = "";
    @Property({ displayName: "素材GUID",tooltip:"添加素材GUID" })
    public Asset_GUID: string = "";

    //构造函数
    constructor(a?: string, b?: string) {
        this.Asset_Name = a;
        this.Asset_GUID = b;
    }
}

//Transfrom调整类素材
@Serializable
class TransformAssetList extends AssetList{
    @Property({ displayName: "位置调整",tooltip:"位置调整"})
    public Asset_Position : Vector = new Vector();
    @Property({ displayName: "旋转调整",tooltip:"旋转调整"})
    public Asset_Rotation : Rotation = new Rotation();
    @Property({ displayName: "缩放调整",tooltip:"缩放调整"})
    public Asset_Scale : Vector = new Vector();
    //构造函数
    constructor(a?:string,b?:string,c?:Vector,d?:Rotation,e?:Vector){
        super(a,b);
        this.Asset_Position = c;
        this.Asset_Rotation = d;
        this.Asset_Scale = e;
    }
}

//资源UI类
class AssetUI {
    //资源面板UI
    private AssetIllustrateUI : Illustrate_UI = null ;
    //资源子UI
    private AssetDressUI : Array<Dress_UI> = null ;
    //资源类型
    private AssetType : number = 0 ;

    //构造函数
    constructor(a?:Illustrate_UI,b?:Array<Dress_UI>,c?:number){
        this.AssetIllustrateUI = a;
        this.AssetDressUI = b;
        this.AssetType = c;
        UIService.showUI(this.AssetIllustrateUI)
        Event.addLocalListener("Open_UI",(type :number)=>{
            if(type == this.AssetType) this.AssetIllustrateUI.setVisible(SlateVisibility.Visible);
        })
    }

    public UpdateUI(ChildUIid:number) : void{
        this.AssetDressUI[ChildUIid].get_dress(); //获得资源后更新资源UI
        this.AssetIllustrateUI.setVisible(SlateVisibility.Hidden);//关闭主UI
    }
}

//关卡物品类
export class Items  {
    private M_ItemUI : Illustrate_UI;    //主物品面板UI

    //设置类单例
    private static _instacne: Items;
    public static get instance(): Items {
        if (Items._instacne == null) {
            Items._instacne = new Items();
        }
        return  Items._instacne;
    }

    private levels : Array<Level_UI> = new Array<Level_UI>();  //子任务单元UI
    public ItemAssets : Map<string,AssetIconData> = new Map<string,AssetIconData>();//存储Icon资源

    //初始化Item函数
    public _init(LevelLists : LevelList[]){
        //图鉴UI创建并初始化
        this.M_ItemUI = UIService.create(Illustrate_UI);
        this.M_ItemUI._init(0);
        UIService.showUI(this.M_ItemUI);

        //根据用户设置配置任务面板
        let cnt = 0;
        LevelLists.forEach(level =>{
			let LEVEL = UIService.create(Level_UI);
			LEVEL.init(cnt+1,level.Level_Name,level.Level_Objs_Cnt);
			this.M_ItemUI.levels_canvas.addChild(LEVEL.uiWidgetBase);
			this.levels.push(LEVEL);
			cnt++;
		})
    }

    public Get_Item(level_num:number,img_id:string,use_ui_icon:boolean){
        this.levels[level_num-1].Get_Item(img_id,use_ui_icon)
        UIService.show(Get_Item_UI,img_id,use_ui_icon)
    }

    public Update_UI(state:SlateVisibility){
        this.M_ItemUI.setVisible(state)
    }
}

//装饰物品类
export class Dress  {

    //单例模式
    private static _instacne: Dress
    public static get instance(): Dress {
        if (Dress._instacne == null) {
            Dress._instacne = new  Dress()
        }
        return  Dress._instacne
    }
  
    private AssetUILists : Array<AssetUI> = new Array<AssetUI>() ;

    public init(AssetLists : any,AssetType:number){

        let tempIllustrate =  UIService.create(Illustrate_UI); // 创建资源UI主面板
        tempIllustrate._init(AssetType);//初始化资源UI主面板

        let tempChildUIArray = new Array<Dress_UI>() ; //创建子UI数组存储所有子UI
        for(let index = 0 ; index < AssetLists.length ; index++){
            AssetUtil.asyncDownloadAsset(AssetLists[index].Asset_GUID); //下载所需资源
            let tempChildUI = UIService.create(Dress_UI); //创建资源子UI
            tempChildUI._init(AssetLists[index].Asset_Name,index,AssetType,AssetLists[index].Asset_GUID); //初始化资源子UI
            tempChildUIArray.push(tempChildUI);//子UI存入数组
            tempIllustrate.levels_canvas.addChild(tempChildUI.uiWidgetBase);//子UI放入主UI中
        }

        let tempAssetUI = new AssetUI(tempIllustrate,tempChildUIArray,AssetType);//创建资源UI对象
        this.AssetUILists.push(tempAssetUI);//资源UI放入列表中统一管理
    }

    public Update_DressUI(id:number,type:number){ 
        this.AssetUILists[type-1].UpdateUI(id);//更新资源UI
    }
}

//广告UI
@UIBind('IAAUI.ui')
export  class IAA extends UIScript {

	private no_btn : Button;//关闭按钮
	private yes_btn : Button;//确认按钮
	private tip_text : TextBlock;//看广告提示词
	private IAA_button : AdsButton;//广告按钮

	private IAA_type : number = 0;  // 广告类型
	private ID : number = 0;  //图鉴物品的关卡号或装饰物品的ID
    //显示函数
	protected onShow(tip:string,type:number,id:number,own:number,Asset_GUID:string){
        //获取对应按键
		this.no_btn = this.uiWidgetBase.findChildByPath('RootCanvas/Button_1') as Button;
		this.tip_text = this.uiWidgetBase.findChildByPath('RootCanvas/TextBlock') as TextBlock;
		this.IAA_button = this.uiWidgetBase.findChildByPath('RootCanvas/AdsButton') as AdsButton;
		this.yes_btn = this.uiWidgetBase.findChildByPath('RootCanvas/Button_1_1') as Button;
		this.tip_text.text = tip;  //设置广告UI提示语
		this.IAA_type = type;  //设置当前广告类型
		this.ID = id;  //设置解锁物品关卡号
		this.uiWidgetBase.zOrder = 1100000;   //设置广告UI渲染层级
        //关闭按钮响应事件
		this.no_btn.onPressed.add(()=>{
			this.destroy();
		})
        //根据情况设定广告UI
		switch (own) {
			case 0:
				this.yes_btn.visibility = SlateVisibility.Hidden;
				this.IAA_button.onShow.add((is_Success:boolean)=>{
					if(SystemUtil.isPIE){
						this.reward(Asset_GUID);
						this.destroy();
					}
				})
		
				this.IAA_button.onClose.add((is_Success:boolean)=>{
					if(is_Success){
						this.reward(Asset_GUID);
						this.destroy();
					}
					else
						console.log("广告播放失败，为什么？");
				})
				break;
		
			case 1 :
				this.IAA_button.visibility = SlateVisibility.Hidden;
				this.yes_btn.onPressed.add(()=>{
					this.reward(Asset_GUID);
					M_Player.instance.PlayerGoalCnt -= 1;
					Event.dispatchToLocal("Update_gold");
					this.destroy();
				})
				break;
			case 2:
				this.IAA_button.visibility = SlateVisibility.Hidden;
				this.yes_btn.onPressed.add(()=>{
					this.reward(Asset_GUID);
					this.destroy();
				})
				break;
		}
	}
	
	private reward(AssetGUID:string){
		switch (this.IAA_type) {
			case 0:
				let objs = GameObject.findGameObjectsByTag("奖励")
				for (let index = 0; index < objs.length;index++)
				{
					let code = objs[index].getComponent() as any;

					if(code.level_num == this.ID)
					{
						code.get_item()
						break
					}
				}

				break;
			default:
				Event.dispatchToLocal("Get_Dress",this.IAA_type,this.ID,AssetGUID)
				break;
		}
	}
}

//玩家头顶称谓UI
@UIBind('UserRankUI.ui')
class UserRankUI extends UIScript{
    private UserTitleText : TextBlock = null;

    public init(defaultTitle : string){
        this.UserTitleText = this.uiWidgetBase.findChildByPath('RootCanvas/Image/Name') as TextBlock;
        this.UserTitleText.text = defaultTitle;
        return this;
    }

    public Update(Title : string):void{this.UserTitleText.text = Title;};
}

//玩家类
export class M_Player {
    //玩家单例
    private static _instacne: M_Player;
    public static get instance(): M_Player {
        if (M_Player._instacne == null) {
            M_Player._instacne = new M_Player();
        }
        return M_Player._instacne;
    }

    public PlayerGoalCnt : number;     //玩家的金币数目
    private PlayerChar : Character;    //玩家的角色对象
    private MoveState : boolean;       //玩家的移动状态
    private ReBornPos : Vector;        //玩家的复活位置
    private PlayerWing : Effect;       //玩家的翅膀装扮
    private PlayerTrail : Effect;      //玩家的拖尾装扮
    private PlayerHat : GameObject;    //玩家的帽子装扮
    private defaultStyle; // 玩家初始装扮
    private PlayerName : string;       //玩家的名称
    private LastSoundID : string; //上一首歌曲的播放ID
    private TitleUI : UserRankUI; //玩家的称谓UI
    public IllustrateCnt : number; // 玩家找到的图鉴数

    private PlayerSaveData : Array<string> = new Array<string>();//存储已获得的物体

    //一切的初始化
    public async init(reborn_pos : Vector,title:string):Promise<void>{
        this.PlayerGoalCnt = 0;
        this.IllustrateCnt = 0;
        this.PlayerChar = Player.localPlayer.character;
        this.MoveState = true;
        this.ReBornPos = reborn_pos;
        this.PlayerChar.collisionWithOtherCharacterEnabled = false
        //记录初始装扮
        setTimeout(() => {
            this.defaultStyle = this.PlayerChar.getDescription();
        }, 1000); 
        //记录点更新
        Event.addLocalListener("Reach",(pos : Vector)=>{
            this.ReBornPos = pos.add(new Vector(0,0,50))
        })
        //设置玩家名称
        setTimeout(() => {
            if(SystemUtil.isPIE) this.PlayerName = "宝了个贝的";
            else this.PlayerName = AccountService.getNickName();
            Event.dispatchToServer("SetName", this.PlayerName)
        }, 1000);
        //设置玩家的称谓
        this.TitleUI = UIService.create(UserRankUI).init(title);
        this.PlayerChar.overheadUI.setTargetUIWidget(this.TitleUI.uiWidgetBase);
        this.PlayerChar.overheadUI.drawSize = new Vector2(600,200);
        //存档
        Event.addLocalListener("SaveData",(GUID:string)=>{
            this.PlayerSaveData.push(GUID);
            Event.dispatchToServer("PlayerLeaveSave",this.PlayerSaveData)
        })
        //读档
        await DataCenterC.ready()
        setTimeout(() => {
            this.PlayerSaveData = DataCenterC.getData(PlayData).DataArr
            this.PlayerSaveData.forEach((Data)=>{
                Event.dispatchToLocal("InitData",Data)
            })
        }, 1000);
        
    }
    //获取装扮
    public async GetAsset(guid:string,...params: unknown[]):Promise<void>{
        switch (params[0]) {
            case 1:
                if(this.PlayerTrail) this.PlayerTrail.destroy();
                this.PlayerTrail = await GameObject.asyncSpawn(guid) as Effect
                this.PlayerChar.attachToSlot(this.PlayerTrail,HumanoidSlotType.Buttocks)
                break;
            case 2:
                if(this.PlayerWing) this.PlayerWing.destroy();
                this.PlayerWing = await GameObject.asyncSpawn(guid) as Effect;
                this.PlayerWing.localTransform = params[1] as Transform;
                this.PlayerChar.attachToSlot(this.PlayerWing,HumanoidSlotType.BackOrnamental);
                break;
            case 3:
                this.PlayerChar.setDescription([guid])
                this.PlayerChar.syncDescription()
                break;
            case 4:
                if(this.PlayerHat) this.PlayerHat.destroy();
                this.PlayerHat = await GameObject.asyncSpawn(guid) as GameObject;
                this.PlayerHat.localTransform = params[1] as Transform;
                this.PlayerChar.attachToSlot(this.PlayerHat,HumanoidSlotType.Rings);
                break;
            case 5:
                this.PlayerChar.loadAnimation(guid).play();
                break;
            default:
                SoundService.stopSound(this.LastSoundID);
                this.playBGM(guid)
                break;
        }
    }
    //切换运动模式
    public Lay(){
        if(this.PlayerChar.isJumping)
            return
        if(this.MoveState){
            this.PlayerChar.changeState(CharacterStateType.Crouching)
            this.PlayerChar.crouchedHeight = 50;
        }
        else
            this.PlayerChar.changeState(CharacterStateType.Running)
            this.MoveState = !this.MoveState 
    }
    //玩家死亡
    public Death(){
        this.MoveState =true
        this.PlayerChar.changeState(CharacterStateType.Ragdoll)
        setTimeout(() => {
            this.PlayerChar.changeState(CharacterStateType.Running)
            this.PlayerChar.worldTransform.position = this.ReBornPos
        }, 1000);
        
    }
    //射线检测
    public test_query(){ 
       let res = QueryUtil.lineTrace(Camera.currentCamera.worldTransform.position,Camera.currentCamera.worldTransform.position.add(Camera.currentCamera.worldTransform.getForwardVector().multiply(150))
       ,true,true,[],false,false,this.PlayerChar)
       Obj_Manager.instance.check_get(res)
    }
    //根据资源GUID播放音乐
    private playBGM(id:string):void{
        this.LastSoundID = SoundService.playSound(id , 1 , 25)
    }

    public Rst(){
        if(this.PlayerWing) this.PlayerWing.destroy();
        if(this.PlayerTrail) this.PlayerTrail.destroy();
        if(this.PlayerHat) this.PlayerHat.destroy();
        setTimeout(() => {
            this.PlayerChar.setDescription(this.defaultStyle)
            this.PlayerChar.syncDescription()
        }, 100);
    }

    public UpdateTitle(title:string){
        this.TitleUI.Update(title);
    }
}

//资源编辑UI
@UIBind('GameManagerUI.ui')
class GameManagerUI extends UIScript{
    private DropList :Dropdown; // 下拉菜单控件
    private AssetGuidInput: InputBox;//参数输入控件
    private AssetGuidName: TextBlock;//文本提示控件
    private TransformCanvas: Canvas;//Transform调整UI界面
    private YesBtn : Button;//确认按钮
    private AssetType : number;//资源类型
    private Transform_x : InputBox;
    private Transform_y : InputBox;
    private Transform_z : InputBox;
    private Rotation_x : InputBox;
    private Rotation_y : InputBox;
    private Rotation_z : InputBox;
    private Scale_x : InputBox;
    private Scale_y : InputBox;
    private Scale_z : InputBox;

    //显示函数
    protected onShow(){
        //获取对应控件
        this.DropList = this.uiWidgetBase.findChildByPath('RootCanvas/ToolTips/Dropdown') as Dropdown;
        this.AssetGuidInput = this.uiWidgetBase.findChildByPath('RootCanvas/ToolTips/InputBox') as InputBox;
        this.AssetGuidName = this.uiWidgetBase.findChildByPath('RootCanvas/ToolTips/Title_1') as TextBlock;
        this.TransformCanvas = this.uiWidgetBase.findChildByPath('RootCanvas/Transfrom') as Canvas;
        this.YesBtn = this.uiWidgetBase.findChildByPath('RootCanvas/Play') as Button;
        this.Transform_x = this.uiWidgetBase.findChildByPath('RootCanvas/Transfrom/InputBox_px') as InputBox;
        this.Transform_y = this.uiWidgetBase.findChildByPath('RootCanvas/Transfrom/InputBox_py') as InputBox;
        this.Transform_z = this.uiWidgetBase.findChildByPath('RootCanvas/Transfrom/InputBox_pz') as InputBox;
        this.Rotation_x = this.uiWidgetBase.findChildByPath('RootCanvas/Transfrom/InputBox_rx') as InputBox;
        this.Rotation_y = this.uiWidgetBase.findChildByPath('RootCanvas/Transfrom/InputBox_ry') as InputBox;
        this.Rotation_z = this.uiWidgetBase.findChildByPath('RootCanvas/Transfrom/InputBox_rz') as InputBox;
        this.Scale_x = this.uiWidgetBase.findChildByPath('RootCanvas/Transfrom/InputBox_sx') as InputBox;
        this.Scale_y = this.uiWidgetBase.findChildByPath('RootCanvas/Transfrom/InputBox_sy') as InputBox;
        this.Scale_z = this.uiWidgetBase.findChildByPath('RootCanvas/Transfrom/InputBox_sz') as InputBox;
        this.AssetGuidName.text = "填写拖尾资源GUID:";
        this.AssetType = 1;
        this.YesBtn.onClicked.add(()=>{
            let AssetGUID = this.AssetGuidInput.text;
            if(this.AssetType==4||this.AssetType==2){
                let pos = new Vector(Number(this.Transform_x.text),Number(this.Transform_y.text),Number(this.Transform_z.text));
                let rot = new Rotation(Number(this.Rotation_x.text),Number(this.Rotation_y.text),Number(this.Rotation_z.text));
                let scale = new Vector(Number(this.Scale_x.text),Number(this.Scale_y.text),Number(this.Scale_z.text));
                console.log(pos+"|"+rot+"|"+scale)
                AssetUtil.asyncDownloadAsset(AssetGUID).then(()=>{
                    M_Player.instance.GetAsset(AssetGUID,this.AssetType,new Transform(pos,rot,scale))
                })
            }
            else{
                AssetUtil.asyncDownloadAsset(AssetGUID).then(()=>{
                    M_Player.instance.GetAsset(AssetGUID,this.AssetType)
                })
            }
        })
        //设置切换事件
        this.DropList.onSelectionChangedEvent.add((SelectTag:string,Info:SelectInfo)=>{
            switch (SelectTag) {
                case "编辑拖尾效果":
                    this.AssetGuidName.text = "填写拖尾资源GUID:";
                    this.AssetType = 1; 
                    this.TransformCanvas.visibility = SlateVisibility.Hidden ;  
                    break;
                case "编辑翅膀效果":  
                    this.AssetGuidName.text = "填写翅膀资源GUID:";  
                    this.AssetType = 2;
                    this.TransformCanvas.visibility = SlateVisibility.Visible ;                
                    break;
                case "编辑服装效果":
                    this.AssetGuidName.text = "填写服装资源GUID:";  
                    this.AssetType = 3; 
                    this.TransformCanvas.visibility = SlateVisibility.Hidden ;  
                    break;
                case "编辑帽子效果":
                    this.AssetGuidName.text = "填写帽子资源GUID:"; 
                    this.AssetType = 4; 
                    this.TransformCanvas.visibility = SlateVisibility.Visible ;  
                    break;
                case "编辑动作效果":
                    this.AssetGuidName.text = "填写动作资源GUID:"; 
                    this.AssetType = 5; 
                    this.TransformCanvas.visibility = SlateVisibility.Hidden ;  
                    break;
                default:
                    this.AssetGuidName.text = "填写音乐资源GUID:"; 
                    this.AssetType = 6; 
                    this.TransformCanvas.visibility = SlateVisibility.Hidden ;  
                    break;
            }
        })
    }
}

export class PlayData extends Subdata{

    @Decorator.persistence()
    DataArr : Array<string>

    protected initDefaultData(): void {
        this.DataArr =  new Array<string>()
    }
}

@Component
export default class GameStart extends Script {
    @Property({displayName:"是否开启编辑模式",group:"编辑模式"})
    private IsPie : boolean = false;

    @Property({displayName:"默认复活点",group:"基础设置"})
    private reborn_pos : Vector = Vector.zero;

    @Property({displayName:"物品栏数",group:"基础设置"})
    private slots : number = 20;

    @Property({displayName:"是否启用第一人称",group:"基础设置"})
    private preset : boolean = false;

    @Property({displayName:"关卡",group:"关卡列表",arrayDefault:new LevelList("",0)})
    public LevelLists : LevelList[] = [];

    @Property({displayName:"称谓",group:"称谓列表",arrayDefault:new TitleList("",0)})
    public TitleLists : TitleList[] = [];

    @Property({displayName:"音乐",group:"音乐列表",arrayDefault:new AssetList("","")})
    public MusicLists : AssetList[] = [];

    @Property({displayName:"拖尾装扮",group:"拖尾装扮列表",arrayDefault:new AssetList("","")})
    public TrailLists : AssetList[] = [];

    @Property({displayName:"换装资源",group:"换装资源列表",arrayDefault:new AssetList("","")})
    public ClothLists : AssetList[] = [];

    @Property({displayName:"动作资源",group:"动作资源列表",arrayDefault:new AssetList("","")})
    public AnimLists : AssetList[] = [];

    @Property({displayName:"翅膀资源",group:"翅膀资源列表",arrayDefault:new TransformAssetList("","",Vector.zero,new Rotation(0,0,90),Vector.one)})
    public WingLists : TransformAssetList[]=[];

    @Property({displayName:"头顶装扮资源",group:"头顶装扮资源列表",arrayDefault:new TransformAssetList("","",Vector.zero,Rotation.zero,Vector.one)})
    public HatLists : TransformAssetList[]=[];


    private cnt_time = 0 ;//计时器


    private _character:Character = null;
    protected onStart(): void {
        if(SystemUtil.isServer()){
            Event.addClientListener("SetName",(player : Player,name:string)=>{
                player.character.displayName = name
            })

            DataStorage.setTemporaryStorage(SystemUtil.isPIE) 

            Event.addClientListener("PlayerLeaveSave",(player:Player,Data:Array<string>)=>{
                DataCenterS.getData(player,PlayData).DataArr = Data
                DataCenterS.getData(player,PlayData).save(true)
            })
            Event.addClientListener("完成关卡",(player:Player,event_name:string)=>{
                Event.dispatchToLocal(event_name)
            })
        }
        else{
            //是否开启编辑模式
            if(this.IsPie) UIService.show(GameManagerUI);
            //初始化物品栏

            //设置摄像机模式
            if(this.preset ){
                setTimeout(() => {
                  //  Camera.currentCamera.preset = 0
                    Camera.currentCamera.springArm.collisionEnabled = false
                  //  Camera.currentCamera.springArm.length = 0
                    Event.dispatchToLocal("dot",this.preset)
                }, 500);
            
            }
            else{
                setTimeout(() => {
                  //  Camera.currentCamera.preset = 1
                   // Camera.currentCamera.springArm.length = 350
                    Event.dispatchToLocal("dot",this.preset)
                }, 500);
            }
            this.useUpdate = this.preset

            //初始化玩家信息
            M_Player.instance.init(this.reborn_pos,this.TitleLists[0].Title_Name)
            //初始化资源信息
            Dress.instance.init(this.TrailLists,1);
            Dress.instance.init(this.WingLists,2);
            Dress.instance.init(this.ClothLists,3);
            Dress.instance.init(this.HatLists,4);
            Dress.instance.init(this.AnimLists,5);
            Dress.instance.init(this.MusicLists,6);
            //配置关卡物品信息
            Items.instance._init(this.LevelLists);
            //监听并创建广告
            Event.addLocalListener("IAA",(tip:string,type:number,level_num:number,own:number,Asset_GUID:string)=>{
                UIService.show(IAA,tip,type,level_num,own,Asset_GUID)
            })
            //装扮发放
            Event.addLocalListener("Get_Dress",(type:number,id:number,Asset_GUID:string)=>{
                Dress.instance.Update_DressUI(id,type)
                switch (type) {
                    case 2:
                        M_Player.instance.GetAsset(Asset_GUID,type,new Transform(this.WingLists[id].Asset_Position,this.WingLists[id].Asset_Rotation,this.WingLists[id].Asset_Scale));
                        break;
                    case 4:
                        M_Player.instance.GetAsset(Asset_GUID,type,new Transform(this.HatLists[id].Asset_Position,this.HatLists[id].Asset_Rotation,this.HatLists[id].Asset_Scale));
                        break;
                    default:
                        M_Player.instance.GetAsset(Asset_GUID,type);
                        break;
                }
            })

            Event.addLocalListener("Update_gold",()=>{
                M_Player.instance.IllustrateCnt++;
                let title = this.TitleLists[0].Title_Name;
                this.TitleLists.forEach((Title)=>{
                    if(Title.Title_Gold<=M_Player.instance.IllustrateCnt)
                        title = Title.Title_Name;
                })
                M_Player.instance.UpdateTitle(title);
            })
        }
        InputUtil.onKeyDown(Keys.L,()=>{
            GameController.instance.win()
        })
        this._character = Player.localPlayer.character;

        GameObject.asyncFindGameObjectById("05FB4265").then(e=>{
            (e as Trigger).onEnter.add(()=>{
               Event.dispatchToLocal(EventData.Over,true);
            })
        })

        //监听游戏结束事件

        Event.addLocalListener(EventData.Over,(isJump:boolean =false)=>{
            UIService.hide(DefaultUI);
            Player.localPlayer.character.worldTransform.position = new Vector(2039,1088,540)
            GameController.instance.judgeDie(isJump);
            UIService.getUI(DefaultUI).slots.forEach((value,key)=>{
                value.obj.setVisibility(true);
                value.obj.setCollision(PropertyStatus.On);
            })
            EventController.instance.success1 = false;
			EventController.instance.success2 = false;
			UIService.getUI(DefaultUI).slots.clear();
            UIService.getUI(DefaultUI).update_slot();
            UIService.getUI(DefaultUI).time = 60;
            // Obj_Manager.instance.init_obj();
            GameController.instance.gameStart();
        })
 
        Event.addLocalListener(EventData.GameStart,()=>{
            GameController.instance.LoopFrist()
        })

        this.useUpdate = true

        UIService.show(MainUI)
        this.initCamera()

    }

    /**初始化死亡的摄像机 */
    async initCamera(){
        await GameObject.asyncFindGameObjectById("2E7C9721").then((e)=>{
            GameController.instance.startCamera = e as Camera;
        })
        GameObject.asyncFindGameObjectById("076F21BB").then((e)=>{
            GameController.instance.endCamera = e as Camera;
        })
        GameObject.asyncFindGameObjectById("0568C96E").then((e)=>{
            GameController.instance.hitCamera = e as Camera ;
        })
        GameObject.asyncFindGameObjectById("39D20B5C").then((e)=>{
            GameController.instance.BagCamera = e as Camera ;
        })
         GameObject.asyncFindGameObjectById("2885B76B").then((e)=>{
            GameController.instance.parachuteCamera = e as Camera ;
        })

        GameController.instance.currCameta = Camera.currentCamera;

        Camera.switch  ( GameController.instance.startCamera); 
    }

    protected onUpdate(dt: number): void {
        this.cnt_time += dt
        if(this.cnt_time> 0.5){
            M_Player.instance.test_query()
            this.cnt_time = 0
        }
        // if(this._character.worldTransform.position.z<= -750){
        //     GameController.instance.judgeDie(true);
        //     this._character.worldTransform.position = 
        // }

    }
}