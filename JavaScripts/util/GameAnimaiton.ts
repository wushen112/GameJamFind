/*
 * @Author       : hangyuan.zhang hangyuan.zhang@appshahe.com
 * @Date         : 2023-05-18 14:57:43
 * @LastEditors  : hangyuan.zhang hangyuan.zhang@appshahe.com
 * @LastEditTime : 2024-04-24 11:48:40
 * @FilePath     : \RE\JavaScripts\submodule\utils\GameAnimaiton.ts
 * @Description  : 
 */

export default class GameAnimation {


    private static _instance: GameAnimation = null;
    public static get instance(): GameAnimation {
        if (GameAnimation._instance == null) {
            GameAnimation._instance = new GameAnimation();
        }
        return GameAnimation._instance;
    }
    /**
     * 不为全明星服务的通用的飘字
     * @param startLocation 
     * @param endLocation 
     * @param targetUI 
     * @param time 
     * @param onFinished 
     */
    public playFlyUI(startLocation: mw.Vector2, endLocation: mw.Vector2, targetUI: mw.Widget, time: number, onFinished?: () => void) {
        let tween = new mw.Tween(startLocation.clone());
        //飘到指定位置
        tween.to(endLocation, time * 1000).onUpdate((data: mw.Vector2) => {
            console.log(targetUI.position)
            targetUI.position = data;
        }).onComplete(() => {
            onFinished && onFinished();
        })
        tween.start()
    }


    /**
     * 
     * @param targetUI 需要放大的目标UI
     * @param largeTime 放大的时间
     * @param largeStart 放大开始的大小
     * @param largeRate 放大最终的大小
     * @param shrinkTime 缩小的时间  
     * @param shrinkRate 缩小的最终大小  
     * @param onFinished 结束的回调
     * @returns 两个tween 放大，缩小
     */
    public playerEnlargeAnimation(targetUI: any, largeTime: number, largeStart: mw.Vector2, largeRate: mw.Vector2, shrinkTime: number = 0, shrinkRate?: mw.Vector2, onFinished?: () => void) {
        //缩小
        let shrinkAnim = null
        if (shrinkTime != 0) {
            shrinkAnim = new mw.Tween(largeRate)
                .to(shrinkRate, shrinkTime * 1000)
                .onUpdate((data) => {
                    // console.log("data 缩小", data)
                    targetUI.renderScale = data
                }).onComplete(() => {
                    onFinished && onFinished();
                })
        }
        //放大
        let enLargeAnim = new mw.Tween(largeStart)
            .to(largeRate, largeTime * 1000)
            .onUpdate((data) => {
                // console.log("data", data);
                targetUI.renderScale = data
            }).onComplete(() => {
                if (shrinkTime != 0) {
                    shrinkAnim.start()
                } else {
                    onFinished && onFinished();
                }
            })
            .start();
        return [enLargeAnim, shrinkAnim]
    }
    /**
     * 平移的动画
     * @param starVector2 开始的位置
     * @param endVector2 结束的位置
     * @param time 持续的时间
     * @param ui 被平移的ui
     */
    playTranslateAnimation(startLocation: mw.Vector2, endLocation: mw.Vector2, time: number, targetUI: mw.Widget, onFinished?: () => void) {

        return new mw.Tween(startLocation)
            .to(endLocation, time * 1000)
            .onUpdate((data) => {
                //console.log("data", targetUI, data);
                targetUI.position = data
            }).onComplete(() => {
                onFinished && onFinished();
            })
            .start()
    }
    /**
     * 渲染透明
     * @param start 
     * @param end 
     * @param time 
     * @param targetUI 
     * @param onFinished 
     * @returns 返回tween
     */
    playFadeAnimation(start: number, end: number, time: number, targetUI: mw.Widget, onFinished?: () => void) {

        return new mw.Tween({ renderOpacity: start })
            .to({ renderOpacity: end }, time * 1000)
            .onUpdate((data) => {
                //console.log("data", targetUI, data);
                targetUI.renderOpacity = data.renderOpacity
            }).onComplete(() => {
                onFinished && onFinished();
            })
            .start()
    }



    /**
     * 左右抖动的动画
     * @param targetUI 目标UI
     * @param angle 旋转的角度
     * @param time 时间
     * @param times 次数
     * @param onFinished 结束的回调 
     */
    playWobbleAnimation(targetUI: any, angle: number, time: number, times: number, onFinished?: () => void, startAngle?: number) {

        if (!startAngle) {
            startAngle = targetUI.renderTransformAngle;
        }

        let targetAngle = startAngle + angle;

        let rightWobble = new mw.Tween({ angle1: targetAngle })
            .to({ angle1: times != 0 ? startAngle - angle : startAngle }, time * 2000)
            .onUpdate((data) => {
                // console.log("data", targetUI, data.angle1);
                targetUI.renderTransformAngle = data.angle1;
            }).onComplete(() => {
                if (times > 0) {
                    this.playWobbleAnimation(targetUI, angle, time, times - 1, onFinished, startAngle)
                } else {
                    onFinished && onFinished();
                }
            })


        new mw.Tween({ angle1: startAngle })
            .to({ angle1: targetAngle }, time * 1000)
            .onUpdate((data) => {
                // console.log("data", targetUI, data.angle1);
                targetUI.renderTransformAngle = data.angle1;
            }).onComplete(() => {
                rightWobble.start();
            })
            .start()
    }

    /**
    * 通过位移抖动的动画
    * @param targetUI 目标UI
    * @param offsetPos 位移相对原来位置得偏移
    * @param time 时间
    * @param times 次数
    * @param onFinished 结束的回调 
    * @returns 返回左 右两个tween
    */
    playTransWobbleAnimation(targetUI: mw.Canvas, offsetPos: Vector2, time: number, times: number, startPos?: Vector2, onFinished?: () => void) {
        let position = targetUI.position.clone();
        if (startPos) {
            position = startPos;
        }
        const endPosition = position.clone().subtract(offsetPos);
        let rightWobble = new mw.Tween(endPosition.clone())
            .to(position.clone(), time * 2000)
            .onUpdate((data) => {
                //console.log("data 位置", targetUI, data);
                targetUI.position = data
            }).onComplete(() => {
                if (times > 0) {
                    this.playTransWobbleAnimation(targetUI, offsetPos, time, times - 1, startPos, onFinished)
                } else {
                    onFinished && onFinished();
                }
            })


        let leftWobble = new mw.Tween(position.clone())
            .to(endPosition.clone(), time * 1000)
            .onUpdate((data) => {
                targetUI.position = data;
            }).onComplete(() => {
                rightWobble.start();
            })
            .start()
        return [leftWobble, rightWobble]
    }




}



export enum IconType {

    /**建造的货币 */
    MONEY = 1,
    /**竞技币 */
    TOKEN,
    /** 战令经验 */
    BP_EXP,
    /**排位积分 */
    BR_SCORE,
    WEEK_CHECK_SCORE
}