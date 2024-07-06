import { Items, M_Player } from "../M_XC/GameStart"
@Component
export default class ItemTrigger extends Script {
    @Property({displayName:"第几关的物品",group:"物品属性"})
    public level_num : number =0

    @Property({displayName:"物品的图标GUID/物体资源的guid",group:"物品属性"})
    public img_id : string = ''

    @Property({displayName:"是否使用物体图标作为UI图标",group:"物品属性"})
    public use_ui_icon : boolean = false

    private model : Model
    protected onStart(): void {
        if(SystemUtil.isServer())
            return
        this.gameObject.name = "Item"
        this.gameObject.tag = "奖励"
        this.model = this.gameObject as Model
        //Icon资源处理
        if(this.use_ui_icon)
        {
            assetIDChangeIconUrlRequest([this.img_id]).then(()=>{
                Items.instance.ItemAssets.set(this.img_id,getAssetIconDataByAssetID(this.img_id))
            })
        }
        else
            AssetUtil.asyncDownloadAsset(this.img_id)
        this.model.onTouch.add((obj:GameObject)=>{
            if(obj instanceof Character){
                if(obj == Player.localPlayer.character){
                    Event.dispatchToLocal("visible_button","收集物品",this,2,"")
                    this.model.setOutline(true , new LinearColor(1,1,1),0.5)
                }
            }
        })

        this.model.onTouchEnd.add((obj:GameObject)=>{
            if(obj instanceof Character){
                if(obj == Player.localPlayer.character){
                    Event.dispatchToLocal("Unvisible_button")
                    this.model.setOutline(false)
                }
            }
        })

        Event.addLocalListener("OutLine_false",()=>{
            try {
                this.model.setOutline(false)
            } catch (error) {
                
            }

        })

        Event.addLocalListener("InitData",(Data)=>{
            if(Data == this.img_id){
                Items.instance.Update_UI(SlateVisibility.Hidden)
                Items.instance.Get_Item(this.level_num,this.img_id,this.use_ui_icon)
                M_Player.instance.PlayerGoalCnt++
                Event.dispatchToLocal("Update_gold")
                this.model.setOutline(false)
                this.gameObject.destroy()
            }
        })
    }

    public get_item(){
        Items.instance.Update_UI(SlateVisibility.Hidden)
        Items.instance.Get_Item(this.level_num,this.img_id,this.use_ui_icon)
        M_Player.instance.PlayerGoalCnt++
        Event.dispatchToLocal("Update_gold")
        Event.dispatchToLocal("SaveData",this.img_id)
        this.model.setOutline(false)
        this.gameObject.destroy()
    }
}