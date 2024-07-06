import EventData from "./EventData";
import DefaultUI from "./M_XC/DefaultUI";
import { Obj_Manager } from "./M_XC/Obj_Manager";
import Tips from "./util/Tips";

export default class EventController  {
    private static _instance :EventController;

    public static get instance(){
        if(!this._instance)
        {
            this._instance = new EventController();
        }
        return this._instance;
    }
    public get EventMap(){
        return UIService.getUI(DefaultUI).slots;
    }

    public get exChangeMap(){
        return UIService.getUI(DefaultUI).exChange;
    }

    public judge(tag:string,obj:GameObject){
        this[`${tag}`](obj);
    }



    private ToiletDoor(obj:GameObject){
        if(this.EventMap.has("tissue")){
            //TODO 黑屏一下打开门
            obj.worldTransform.rotation = Rotation.zero

        }else{
            Tips.show("门外有人吗，能给我哪些纸巾吗，万分感谢！！！")
        }
    }

    private cola(obj:GameObject){
        if(this.EventMap.has("cola")){
            //TODO 黑屏一下打开机长大门
            obj.worldTransform.rotation = Rotation.zero
        }else{
            Tips.show("那个客人想要一杯可乐，可是可乐已经没了，要被投诉了")
        }
    }

    private bag(obj){
        if(!this.EventMap.has("bag")){
            Tips.show("乘客您好现在没有危险请不要触碰降落伞");
        }
    }

    private terrorist(obj:GameObject){
        if(!this.EventMap.has("toiletPegs")){
            Tips.show("这个人看起来好危险");
        }else{
            //TODO 黑屏一下恐怖分子倒下
            const char =  (obj as Character).loadAnimation("");
            char.play();
        }
    }
    private aircraftDoor(Obj:GameObject){
        Obj.worldTransform.position = Vector.zero;

    }
    private commander(){
        Tips.show("哦 我睡着了吗，请你不要举报我，拜托了！")
    }



}