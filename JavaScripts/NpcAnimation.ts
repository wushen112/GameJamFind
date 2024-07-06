
@Component
export default class NpcAnimation extends Script {
    @Property({ displayName: "动画guid" })
    private AnimaGuid: string = "";
    @Property({ displayName: "动画动画插槽",enumType :AnimSlot})
    private animSlot: AnimSlot = 0;
    @Property({ displayName: "姿态guid" })
    private StanceGuid: string = "";
    @Property({ displayName: "挂件guid" })
    private propGuid: string = "";
    @Property({ displayName: "挂件插槽", enumType :HumanoidSlotType})
    private NpcSlotType: HumanoidSlotType=16;
    @Property({ displayName: "是否开启碰撞" })
    private Collission: boolean=true;

    private Npc: Character;
    private anima: Animation;
    private Stance: SubStance;
    private prop: GameObject;
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
            this.Npc = this.gameObject as Character;
            this.init()
    }

    //初始化人物
    async init() {
        if(this.Collission){
            this.Npc.setCollision(CollisionStatus.On)
        }else{
            this.Npc.setCollision(CollisionStatus.QueryCollisionOnly)
        }
        //判断是否有动画
        if (this.AnimaGuid != null && this.AnimaGuid != "") {
            if (AssetUtil.assetLoaded(this.AnimaGuid)) {
                await AssetUtil.asyncDownloadAsset(this.AnimaGuid)
            }
            this.anima = this.Npc.loadAnimation(this.AnimaGuid)
            this.anima.loop = 0;
            this.anima.slot = this.animSlot;
            this.anima.play()
            console.log("Anima:" + this.gameObject + ":" + this.anima)
        }
        //判断是否有姿态
        if (this.StanceGuid != null && this.StanceGuid != "") {
            if (AssetUtil.assetLoaded(this.StanceGuid)) {
                await AssetUtil.asyncDownloadAsset(this.StanceGuid)
            }
            this.Stance = this.Npc.loadSubStance(this.StanceGuid);
            this.Stance.blendMode = StanceBlendMode.BlendLower;
            this.Stance.play();
            console.log("Stance:" + this.gameObject + ":" + this.anima)
        }
        //判断是否有挂件
        if (this.propGuid != null && this.propGuid != "") {
            if (AssetUtil.assetLoaded(this.propGuid)) {
                await AssetUtil.asyncDownloadAsset(this.propGuid)
            }
            this.prop = GameObject.spawn(this.propGuid)
            this.Npc.attachToSlot(this.prop, this.NpcSlotType)
            console.log("Stance:" + this.gameObject + ":" + this.anima)
        }
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