/*
 * @Author: wushen112 330177253@qq.com
 * @Date: 2024-07-07 00:31:49
 * @LastEditors: wushen112 330177253@qq.com
 * @LastEditTime: 2024-07-07 09:43:25
 * @FilePath: \test\JavaScripts\EventController.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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

    /**成功条件 劫匪 */
    public success1:boolean = false
    /**成功条件叫醒机长 */
    public success2:boolean = false

    public get EventMap(){
        return UIService.getUI(DefaultUI).slots;
    }


    public judge(obj:GameObject){
        try {
            this[`${obj.tag}`](obj);
            return false;
        } catch (error) {
            console.log("没有找到方法")
            return true;
        }
        
    }



    /**
     * @param obj 
     * @returns 返回是否拾取
     */
    private ToiletDoor(obj:GameObject){
        if(this.EventMap.has("tissue")){
            //TODO 黑屏一下打开门
            obj.worldTransform.rotation = Rotation.zero

        }else{
            Tips.show("门外有人吗，能给我哪些纸巾吗，万分感谢！！！")
        }
        return false
    }

    private CR_gril(obj:GameObject){
        if(this.EventMap.has("cola")){
            //TODO 黑屏一下打开机长大门
            obj.worldTransform.rotation = Rotation.zero
        }else{
            Tips.show("那个客人想要一杯可乐，可是可乐已经没了，要被投诉了")
        }
        return false
    }

    private parachute(obj){
        if(!this.EventMap.has("bag")){
            Tips.show("乘客您好现在没有危险请不要触碰降落伞");
        }else{
            Tips.show("趁现在偷偷获得降落伞");
            Obj_Manager.instance.exChange();
        }
        return false
    }

    private terrorist(obj:GameObject){
        if(!this.EventMap.has("toiletPegs")){
            Tips.show("这个人看起来好危险");
        }else{
            //TODO 黑屏一下恐怖分子倒下
            this.success1=true;
            const char =  (obj as Character).loadAnimation("");
            char.play();
        }
        
    }

    private aircraftDoor(Obj:GameObject){
        Obj.worldTransform.position = Vector.zero;
 
        
    }

    private commander(){
        Tips.show("哦 我睡着了吗，请你不要举报我，拜托了！")
        this.success2 = true;
    }



}