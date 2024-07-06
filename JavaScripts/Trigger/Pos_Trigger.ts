import { M_Player } from "../M_XC/GameStart"

@Component
export default class Pos_Trigger extends Script {
    @Property({displayName:"触发器类型",
               enumType:{
                  "检查点触发器" : 0 ,
                  "死亡触发器" : 1 ,
                  "死亡模型触发" : 2
               },
               defaultValue : 0 ,
               tooltip:"【检查点触发器】:记录角色复活点,挂载到触发器上" +
                    "\n 【死亡触发器】: 让玩家死亡,挂载到触发器上" +
                    "\n 【死亡模型触发】:让玩家死亡,挂载到模型上"})
    private type  = 0
    
    private trigger : Trigger
    private model : Model
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        if(SystemUtil.isServer())
            return
        switch (this.type) {
            case 0:
                this.trigger = this.gameObject as Trigger
                this.trigger.onEnter.add((other:GameObject)=>{
                    if(other == Player.localPlayer.character){
                        Event.dispatchToLocal("Reach",this.gameObject.worldTransform.position)
                        Event.dispatchToLocal("Tips","已记录检查点")
                    }
                })
                break;
            case 1:
                this.trigger = this.gameObject as Trigger
                this.trigger.onEnter.add((other:GameObject)=>{
                    if(other == Player.localPlayer.character)
                        this.death()
                })
                break;
            case 2:
                this.model = this.gameObject as Model
                this.model.onTouch.add((other:GameObject)=>{
                    if(other == Player.localPlayer.character)
                        this.death()
                })
                break;
        }
    }
    
    private death(){
        M_Player.instance.Death()
        
    }

}