/*
 * @Author: wushen112 330177253@qq.com
 * @Date: 2024-07-07 00:31:49
 * @LastEditors: wushen112 330177253@qq.com
 * @LastEditTime: 2024-07-07 12:16:44
 * @FilePath: \test\JavaScripts\EventController.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import EventData from "./EventData";
import DefaultUI from "./M_XC/DefaultUI";
import { Obj_Manager } from "./M_XC/Obj_Manager";
import Tips from "./util/Tips";
import BlackChange_generate from "./ui-generate/BlackChange_generate";

export default class EventController {
    private static _instance: EventController;
    private Black: BlackChange_generate
    public static get instance() {
        if (!this._instance) {
            this._instance = new EventController();
        }
        return this._instance;
    }

    /**成功条件 劫匪 */
    public success1: boolean = false
    /**成功条件叫醒机长 */
    public success2: boolean = false

    public get EventMap() {
        return UIService.getUI(DefaultUI).slots;
    }


    public judge(obj: GameObject) {
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
    private ToiletDoor(obj: GameObject) {
        if (this.EventMap.has("tissue")) {
            //TODO 黑屏一下打开门

            Tips.show("大叔：你有纸巾吗， 哦 谢谢你给我纸巾，我终于可以出去了！！！")
            setTimeout(() => {
                this.Black = UIService.show(BlackChange_generate)
                this.Black.mImg_take.text = "门内传来冲水声，大叔离开了"
                obj.setVisibility(false);
                obj.setCollision(PropertyStatus.Off);
                UIService.getUI(DefaultUI).slots.delete("tissue");
                UIService.getUI(DefaultUI).update_slot();
                setTimeout(() => {
                    UIService.hide(BlackChange_generate)
                }, 1500);
            }, 1000);
        } else {
            Tips.show("大叔：不给我纸巾我是不会出去的！！！")
        }
        return false
    }

    private CR_gril(obj: GameObject) {
        if (this.EventMap.has("cola")) {
            Tips.show("空乘：谢谢，我这就拿去给机长")
            setTimeout(() => {
                //TODO 黑屏一下打开机长大门
                this.Black = UIService.show(BlackChange_generate)
                this.Black.mImg_take.text = "空乘进去了，门打开了"
                obj.setVisibility(false);
                obj.setCollision(PropertyStatus.Off);
                obj.getChildren()[0].setVisibility(false);
                obj.getChildren()[0].setCollision(PropertyStatus.Off);
                setTimeout(() => {
                    UIService.hide(BlackChange_generate)
                }, 1500);
            }, 1000);
        } else {
            Tips.show("空乘：机长想喝橙汁，但是我不能走开")
        }
        return false
    }

    private parachute(obj) {
        if (!this.EventMap.has("bag")) {
            Tips.show("空乘：您好，请不要乱拿东西");
            Tips.show("我：也许可以偷偷拿相似的替代");
        } else {
            Tips.show("我：趁现在用背包替换替换");
            Tips.show("获得了降落伞");
            UIService.getUI(DefaultUI).slots.delete("bag");
            UIService.getUI(DefaultUI).update_slot();
            const gameObj = Obj_Manager.instance.curItem.gameObject
            const imgId = Obj_Manager.instance.map.get(gameObj.tag)
            Event.dispatchToLocal(EventData.Get_Item, imgId, gameObj.tag, gameObj);
        }
        return false
    }

    private terrorist(obj: GameObject) {
        if (!this.EventMap.has("toiletPegs")) {
            Tips.show("我：这个人看起来很可疑，一直看时间");
        } else {
            //TODO 黑屏一下恐怖分子倒下
            setTimeout(() => {
                //TODO 黑屏一下打开机长大门
                this.Black = UIService.show(BlackChange_generate)
                this.Black.mImg_take.text = "眼前的男人，大叫一声便倒下了"
                this.success1 = true;
                const char = (obj as Character).loadAnimation("8355");
                char.play();
                setTimeout(() => {
                    char.speed = 0
                }, 800);
                setTimeout(() => {
                    UIService.hide(BlackChange_generate)
                }, 1500);
            }, 1000);
        }

    }

    /**开门 */
    private aircraftDoor(Obj: GameObject) {
        Obj.setVisibility(false);
        Obj.setCollision(PropertyStatus.Off)
    }

    private commander() {
        Tips.show("机长：嗯？ 我睡着了吗？对不起！")
        this.success2 = true;
    }



}