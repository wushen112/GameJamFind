@Component
export default class SlotTrigger extends Script {
    @Property({displayName:"物体资源的guid",group:"物品属性"})
    public img_id : string = ''

    @Property({displayName:"物体的Tag",group:"物品属性"})
    private obj_tag : string = ""

    private obj_model : Model

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {

        this.gameObject.tag = this.obj_tag
        this.gameObject.name = "Slot"
        this.obj_model = this.gameObject as Model
        AssetUtil.asyncDownloadAsset(this.img_id)

        this.obj_model.onTouch.add((obj:GameObject)=>{
            if(obj instanceof Character){
                if(obj == Player.localPlayer.character){
                    Event.dispatchToLocal("visible_button","获取"+this.obj_tag,this,0,"")
                    this.obj_model.setOutline(true , new LinearColor(1,1,1),0.5)
                }
            }
        })

        this.obj_model.onTouchEnd.add((obj:GameObject)=>{
            if(obj instanceof Character){
                if(obj == Player.localPlayer.character){
                    Event.dispatchToLocal("Unvisible_button")
                    this.obj_model.setOutline(false)
                }
            }
        })

        Event.addLocalListener("OutLine_false",()=>{
            try {
                this.obj_model.setOutline(false)
            } catch (error) {
                
            }

        })
    }

    public get_item(){
        SoundService.playSound("130806")
        Event.dispatchToLocal("Get_Slot_Obj",this.img_id,this.obj_tag)
        Event.dispatchToLocal("Tips","已获得"+this.obj_tag)
        this.obj_model.setOutline(false)
        this.gameObject.destroy()
    }


}