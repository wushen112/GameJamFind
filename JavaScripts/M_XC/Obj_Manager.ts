//import ItemTrigger from "../Trigger/ItemTrigger"
//import SlotTrigger from "../Trigger/SlotTrigger"
//import UseItemTrigger from "../Trigger/UseItemTrigger"

export class Obj_Manager  {

    private static _instacne: Obj_Manager
    public static get instance(): Obj_Manager {
        if (Obj_Manager._instacne == null) {
            Obj_Manager._instacne = new Obj_Manager()
        }
        return Obj_Manager._instacne
    }

    

    public check_get(res : any){
        let ui_flag : boolean = false
        res.forEach(result =>{
            let obj = result.gameObject
            if(obj){
                let name = obj.name
                switch (name) {
                    case "Slot":
                        let scr1 = obj.getComponent()
                        Event.dispatchToLocal("visible_button","获取"+obj.tag,scr1,0,"")
                        ui_flag = true
                        this.model_outline(true,obj)
                        break;
                    case "Item":
                        let scr2 = obj.getComponent()
                        Event.dispatchToLocal("visible_button","收集物品",scr2,2,"")
                        ui_flag = true
                        this.model_outline(true,obj)
                        break;
                    case "trigger":
                        let scr3 = obj.getComponent()
                        Event.dispatchToLocal("visible_button",scr3.tip,scr3,1,scr3.event_name)
                        ui_flag = true
                        this.model_outline(true,GameObject.findGameObjectById(scr3._obj) as Model)
                        break;
                }
            }
        })
        if(!ui_flag){
            Event.dispatchToLocal("Unvisible_button")
            Event.dispatchToLocal("OutLine_false")
        }
    }

    private model_outline(flag:boolean,obj:Model){
        if(flag)
            obj.setOutline(true , new LinearColor(1,1,1),0.5)
        else
            obj.setOutline(false)
    }
}