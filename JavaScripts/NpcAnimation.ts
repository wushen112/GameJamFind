
@Component
export default class NpcAnimation extends Script {
    @Property({displayName:"动画guid"})
    private   AnimaGuid : string = "";

    private Npc : Character;
    private anima: Animation;
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        setTimeout(() => {
            this.Npc= this.gameObject as Character;
            this.init(this.AnimaGuid)
        }, 3000);
        // AssetUtil.asyncDownloadAsset(this.AnimaGuid)
        // 
    }


    async init(guid){
        if(AssetUtil.assetLoaded(guid)){
            await AssetUtil.asyncDownloadAsset(guid)
        }
        this.anima=this.Npc.loadAnimation(this.AnimaGuid)
        this.anima.loop=0;
        this.anima.play()
        console.log("anima:"+this.gameObject+":"+this.anima)
    }

    /**
     * 周期函数 每帧执行
     * 此函数执行需要将this.useUpdate赋值为true
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    protected onUpdate(dt: number): void {

    }

    /** 脚本被销毁时最后一帧执行完调用此函数 */
    protected onDestroy(): void {

    }
}