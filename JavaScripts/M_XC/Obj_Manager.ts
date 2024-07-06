/*
 * @Author: wushen112 330177253@qq.com
 * @Date: 2024-07-06 10:39:43
 * @LastEditors: wushen112 330177253@qq.com
 * @LastEditTime: 2024-07-06 20:58:08
 * @FilePath: \test\JavaScripts\M_XC\Obj_Manager.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//import ItemTrigger from "../Trigger/ItemTrigger"
//import SlotTrigger from "../Trigger/SlotTrigger"
//import UseItemTrigger from "../Trigger/UseItemTrigger"

import EventData from "../EventData"
import DefaultUI from "./DefaultUI"

export class Obj_Manager  {

    private static _instacne: Obj_Manager
    public static get instance(): Obj_Manager {
        if (Obj_Manager._instacne == null) {
            Obj_Manager._instacne = new Obj_Manager()
        }
        return Obj_Manager._instacne
    }

    
    private _preobj:Model = null

    private curItem:HitResult
    public check_get(res : any){
        let ui_flag : boolean = false
        res.forEach(result =>{
            let obj = result.gameObject
            if(obj){
                let name = obj.tag
                switch (name) {
                    case "Slot":
                        //let scr1 = obj.getComponent()
                        // Event.dispatchToLocal("visible_button","获取"+obj.tag,scr1,0,"")
                        UIService.getUI(DefaultUI).mBtn_exchange.visibility = SlateVisibility.Visible
                        ui_flag = true
                        this.model_outline(true,obj)
                        this.curItem = result
                        break;
                    case "Item":
                        //let scr2 = obj.getComponent()
                        // Event.dispatchToLocal("visible_button","收集物品",scr2,2,"")
                        UIService.getUI(DefaultUI).mBtn_exchange.visibility = SlateVisibility.Visible
                        ui_flag = true
                        this.model_outline(true,obj)
                        this.curItem = result
                        break;
                    // case "trigger":
                    //     //let scr3 = obj.getComponent()
                    //     // Event.dispatchToLocal("visible_button",scr3.tip,scr3,1,scr3.event_name)
                    //     UIService.getUI(DefaultUI).mBtn_exchange.visibility = SlateVisibility.Visible
                    //     ui_flag = true
                    //     this.model_outline(true,GameObject.findGameObjectById(scr3._obj) as Model)
                    //     break;
                }
            }
        })
        if(!ui_flag){
            UIService.getUI(DefaultUI).mBtn_exchange.visibility = SlateVisibility.Hidden
            // Event.dispatchToLocal("OutLine_false")
            if(this._preobj){
                this._preobj.setOutline(false)
            }
        }
    }

    public map:Map<string,string> = new Map();
    init(){
        this.map.set("toiletPegs","48727")
        this.map.set("cola","48727")
        this.map.set("bag","48727")
        this.map.set("parachute","48727")
        this.map.set("tissue","48727")

    }
    public getItem(){
        if(!this.curItem){
            return ;
        }
        const gameObj = this.curItem.gameObject
        const imgId = this.map.get(gameObj.tag)
        Event.dispatchToLocal(EventData.Get_Item,gameObj.gameObjectId,gameObj.tag);
        
    }

    private model_outline(flag:boolean,obj:Model){
        if(flag){
            this._preobj = obj
            obj.setOutline(true , new LinearColor(1,1,1),0.5)
        }
        else
            obj.setOutline(false)


    }
}