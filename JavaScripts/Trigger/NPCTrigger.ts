import { M_Player } from "../M_XC/GameStart"

@Component
export default class NPCTrigger extends Script {
    @Property({displayName:"NPC",capture:true})
    private npc_id : string = ""
    @Property({displayName:"NPC攻击动画"})
    private attack_anim : string =""
    protected async onStart(): Promise<void> {
        AssetUtil.asyncDownloadAsset(this.attack_anim)

        if(SystemUtil.isClient()) {
            let npc =  GameObject.findGameObjectById(this.npc_id) as Character
            let trigger = this.gameObject as Trigger
            trigger.onEnter.add((obj :GameObject)=>{
                if(obj == Player.localPlayer.character)
                {
                    Navigation.follow(npc, obj, 10, () => { 
                        console.log("追踪到玩家")
                        EffectService.playOnGameObject("151570", npc, {slotType: HumanoidSlotType.Rings})
                        
                        let anim = npc.loadAnimation(this.attack_anim)
                        anim.play()
                        M_Player.instance.Death()
                        Navigation.stopFollow(npc)
                    });
                }
            })

            trigger.onLeave.add((obj:GameObject)=>{
                if(obj == Player.localPlayer.character)
                   Navigation.stopFollow(npc)
            })
        }
    }

}