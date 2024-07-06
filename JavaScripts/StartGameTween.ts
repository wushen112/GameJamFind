
@Component
export default class StartGameTween extends Script {
    private aircraft: GameObject
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        this.useUpdate = true;
        this.aircraft = this.gameObject;
        let tempPosition: Vector = Vector.zero
        // 初始位置
        let nowPos: Vector = this.aircraft.worldTransform.position.clone()
        // 上方位置
        let UpPos: Vector = this.aircraft.worldTransform.position.clone().add(new Vector(0, 0, 300))
        // 下方位置
        let downPos: Vector = this.aircraft.worldTransform.position.clone().add(new Vector(0, 0, -300)) 
        let fristTween = new mw.Tween(nowPos).to({ x:UpPos.x,y:UpPos.y,z:UpPos.z }, MathUtil.randomInt(2000,3000)).onUpdate((value) => {
            tempPosition.x= value.x
            tempPosition.y= value.y
            tempPosition.z= value.z
            this.aircraft.worldTransform.position= tempPosition
            console.log("up"+tempPosition)
        }).interpolation(TweenUtil.Interpolation.Bezier)
        let downTween = new mw.Tween(UpPos).to({ x:downPos.x,y:downPos.y,z:downPos.z }, MathUtil.randomInt(2000,3000)).onUpdate((value) => {
            tempPosition.x= value.x
            tempPosition.y= value.y
            tempPosition.z= value.z
            this.aircraft.worldTransform.position = tempPosition
            console.log("down"+tempPosition)
        }).interpolation(TweenUtil.Interpolation.Bezier)
        let upTween = new mw.Tween(downPos).to({ x:UpPos.x,y:UpPos.y,z:UpPos.z }, MathUtil.randomInt(2000,3000)).onUpdate((value) => {
            tempPosition.x= value.x
            tempPosition.y= value.y
            tempPosition.z= value.z
            this.aircraft.worldTransform.position= tempPosition
            console.log("up"+tempPosition)
        }).interpolation(TweenUtil.Interpolation.Bezier)
        fristTween.onComplete((Boolean) => {
            downTween.start()
        })
        downTween.onComplete((Boolean) => {
            upTween.start()
        })
        upTween.onComplete((Boolean) => {
            downTween.start()
        })
        fristTween.start()

    }


    /**
     * 周期函数 每帧执行
     * 此函数执行需要将this.useUpdate赋值为true
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    protected onUpdate(dt: number): void {
        TweenUtil.TWEEN.update();
    }

    /** 脚本被销毁时最后一帧执行完调用此函数 */
    protected onDestroy(): void {

    }
}