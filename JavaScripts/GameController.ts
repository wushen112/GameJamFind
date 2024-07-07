import EventController from "./EventController";
import DefaultUI from "./M_XC/DefaultUI";
import Awake_generate from "./ui-generate/Awake_generate";
import { Obj_Manager } from "./M_XC/Obj_Manager";
import GameAnimation from "./util/GameAnimaiton";
import Tips from "./util/Tips";

/*
 * @Author: wushen112 330177253@qq.com
 * @Date: 2024-07-06 14:11:24
 * @LastEditors: wushen112 330177253@qq.com
 * @LastEditTime: 2024-07-07 11:39:52
 * @FilePath: \test\JavaScripts\GameController.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default class GameController {
    private static _insance: GameController;
    public static get instance() {
        if (!this._insance) {
            this._insance = new GameController();
        }

        return this._insance;
    
    }


    public startCamera: Camera = null;
    public endCamera: Camera = null;
    public currCameta: Camera = null
    public hitCamera:Camera = null;
    onUpdate() {

    }
    public startPos = new Vector(2039,1088,540)
    LoopFrist() {
        Player.localPlayer.character.worldTransform.position = this.startPos;
        //音效
        let sound = "17357BC7"
        //特效
        const effect = GameObject.findGameObjectById("0318B5B8") as Effect;
        let hud = UIService.show(Awake_generate)
        hud.mCanvas_Black.visibility = 0;
        let eye1 = hud.mImg_Eye1
        let eye2 = hud.mImg_Eye2
        let eye1Pos = 0
        let eye2Pos = new Vector2(0, 0)
        
        // 眨眼
        let eye1Tween = new mw.Tween({ value: eye1.size.y }).to({ value: eye1.size.y / 2 }, 1000).onUpdate((obj) => {
            eye1Pos = obj.value
            eye1.size.y = eye1Pos
        }).interpolation(TweenUtil.Interpolation.Bezier).repeat(2)
        let eye2Tween = new mw.Tween({ value: eye2.position.y }).to({ value: hud.mCanvas_Black.position.y * 0.75 }, 1000).onUpdate((obj) => {
            eye2Pos.y = obj.value
            eye2.position = eye2Pos
        }).interpolation(TweenUtil.Interpolation.Bezier).repeat(2)
        //闭眼
        let eye1BackTween = new mw.Tween({ value: eye1.size.y }).to({ value: hud.mCanvas_Black.position.y / 2 }, 1000).onUpdate((obj) => {
            eye1Pos = obj.value
            eye1.size.y = eye1Pos
        }).interpolation(TweenUtil.Interpolation.Bezier)
        let eye2BackTween = new mw.Tween({ value: eye2.position.y }).to({ value: hud.mCanvas_Black.position.y / 2 }, 1000).onUpdate((obj) => {
            eye2Pos.y = obj.value
            eye2.position = eye2Pos
        }).interpolation(TweenUtil.Interpolation.Bezier)


        SoundService.playSound(sound)
        setTimeout(() => {
            eye1Tween.start().chain(eye1BackTween.start())
            eye2Tween.start().chain(eye2BackTween.start())
            setTimeout(() => {
                effect.play();
                setTimeout(() => {
                    UIService.hide(Awake_generate)
                    //进入正式游戏写这里面
                    
                }, 500);
            }, 4000);
        }, 1000);
    }

    //TODO 判断死亡
    judgeDie(isJump = false) {
        if (isJump) {
            if (UIService.getUI(DefaultUI).slots.has("parachute")) {
                this.dropSuccess();
            } else {
                this.dropFail();
            }
            return;
        }


        if (EventController.instance.success1 == false) {
            this.dieBybomb();
            return;
        }
        if (EventController.instance.success2 == false) {
            this.airCollision();
            return;
        }

        this.win();
    }
    /**爆炸死亡  */
    dieBybomb() {
        const effect = GameObject.findGameObjectById("0318B5B8") as Effect;
        effect.loopCount = 3;
        effect.worldTransform.position = Player.localPlayer.character.worldTransform.position;
        effect.play();
        
    }

    airCollision() {
        const airA = GameObject.findGameObjectById("2293A559") as GameObject;
        const airB = GameObject.findGameObjectById("1F8FDF36") as GameObject;
        const effect = GameObject.findGameObjectById("0BDCEFE5") as Effect;
        const airAPosition=airA.worldTransform.position.clone();
        const airBPosition=airB.worldTransform.position.clone();
        let airTween = new mw.Tween(airBPosition).to(airAPosition,2000).onUpdate((value) => {
            airB.worldTransform.position= value
        }).start();
        setTimeout(() => {
            effect.play();
           
        }, 1800);
        setTimeout(() => {
            Camera.switch(GameController.instance.currCameta,0.2)
        }, 2000);
        Camera.switch(GameController.instance.hitCamera,0.2)

    }
    /**掉落结局 */
    dropFail() {
        Tips.show("恭喜你，落地失败");
    }
    dropSuccess() {
        Tips.show("恭喜你，成功落地");
    }

    /**真正胜利的结局 */
    win() {
        const air = GameObject.findGameObjectById("3481F2C3") as GameObject;
        new Tween(air.worldTransform.position).to(new Vector(-24037,9640,-74971),1000)
        .onUpdate((value)=>{
            air.worldTransform.position=value
        })
        .onComplete(()=>{
            new Tween(air.worldTransform.position).to(new Vector(-1203,9640,-74971),1000)
            .onUpdate((value)=>{
                air.worldTransform.position=value
            })
            .onComplete(()=>{
                Tips.show("恭喜你，成功落地")
            })
            .start()
        }).start()
      //  Camera.currentCamera.lock(air)
    }

}

export enum Ending {
    dieBybomb,
    airCollision,
    dropFail,
    dropWin,
    win
}
