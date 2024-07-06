
@Component
export default class UseItemTrigger extends Script {
    @Property({displayName:"使用道具事件名称"})
    private event_name : string = ""

    @Property({displayName:"使用道具提示词"})
    private tip:string=""

    @Property({displayName:"消耗道具的tag",arrayDefault:""})
    private tag_ary:Array<string>= new Array<string>()

    @Property({displayName:"每个物品的消耗数量",arrayDefault:""})
    private consume_cnt:Array<number>= new Array<number>()

    @Property({displayName:"控制物品的GUID",capture:true})
    private obg_id : string =""

    @Property({displayName:"缺少物品提示词"})
    private _tip : string = ""

    @Property({displayName:"选中高亮物体GUID",capture:true})
    private _obj : string = ""

    @Property({displayName:"使用效果",enumType:{
        "打开对应门" : 0,
        "解锁禁行区" : 1,
        "显示或隐藏区域" : 2 ,
        "自定义效果": 3
    },defaultValue :0,
    tooltip:"【打开对应门】:使用物品打开门，高亮填门的GUID，控制物体填运动器的GUID"+
            "\n【解锁禁行区】:使用物体解锁禁行区,高亮物体的GUID,控制物体填禁行区的GUID"+
            "\n【显示或隐藏区域】:使用物体显示或隐藏区域,高亮物体的GUID,控制物体的GUID"+
            "\n【自定义效果】:通过成功使用物品后，发送使用物品事件"})
    private use_type : number  = 0          
    private model :Model
    protected onStart(): void {
        this.gameObject.name = "trigger"
        let trigger = this.gameObject as Trigger
        this.model = GameObject.findGameObjectById(this._obj) as Model
        trigger.onEnter.add((obj:GameObject)=>{
            if(obj instanceof Character){
                if(obj == Player.localPlayer.character){
                    Event.dispatchToLocal("visible_button",this.tip,this,1,this.gameObject.gameObjectId)
                    try {
                        this.model.setOutline(true,new LinearColor(1,1,1),0.5)
                    } catch (error) {
                        console.warn("无法获取模型")
                    }
                }
            }
        })

        trigger.onLeave.add((obj:GameObject)=>{
            if(obj instanceof Character){
                if(obj == Player.localPlayer.character){
                    Event.dispatchToLocal("Unvisible_button")
                    try {
                        this.model.setOutline(false)
                    } catch (error) {
                        console.warn("无法获取模型")
                    }
                }
            }
        })

        Event.addLocalListener("OutLine_false",()=>{
            try {
                let obj = GameObject.findGameObjectById(this._obj) as Model
                obj.setOutline(false)
            } catch (error) {
                
            }

        })

        Event.addLocalListener(this.gameObject.gameObjectId, (slots:any)=>{
           let flag = true
           for(let i = 0 ;i <this.tag_ary.length;i++){
                let data = slots.get(this.tag_ary[i])
                if(data){
                    if( data.cnt >= this.consume_cnt[i])
                        continue
                    else{
                        flag = false
                        break
                    }
                }
                else{
                    flag = false
                    break
                }
           }
           Event.dispatchToLocal("Update_Slot",flag,this.tag_ary,this.consume_cnt)
           this.Use_Design_Func(flag)
        })
    }



    private Use_Design_Func(flag:boolean){
        if(!flag){
            SoundService.playSound("169190")
            Event.dispatchToLocal("Tips",this._tip)
            return
        }
        switch (this.use_type) {
            case 0:
                let obj = GameObject.findGameObjectById(this.obg_id) as IntegratedMover
                obj.enable = true
                let delaytime = obj.rotationRepeatTime + obj.linearRepeatTime + obj.scaleRepeatDelay 
                setTimeout(() => {
                    obj.enable = false
                }, delaytime*1000);
                console.log(delaytime)
                SoundService.playSound("206094")
                break;
            case 1:
                let ban_area = GameObject.findGameObjectById(this.obg_id) as BlockingVolume
                ban_area.addPassableTarget(Player.localPlayer.character)
                SoundService.playSound("199753")
                break;
            case 2:
                let state = this.model.getVisibility()
                if(state){
                    this.model.setVisibility(false)
                    //this.model.collisionEnabled = false
                    this.model.setCollision(CollisionStatus.Off)
                }
                else{
                    //this.model.collisionEnabled = true
                    this.model.setCollision(CollisionStatus.On)
                    this.model.setVisibility(true)
                }
                break;
            case 3:
                Event.dispatchToLocal(this.event_name)
                break;
        }
        try {
            this.model.setOutline(false)
        } catch (error) {
            console.warn("无法获取模型")
        }
        this.gameObject.destroy()
    }
}