import EventController from "./EventController";
import DefaultUI from "./M_XC/DefaultUI";
import Awake_generate from "./ui-generate/Awake_generate";
import { Obj_Manager } from "./M_XC/Obj_Manager";
import GameAnimation from "./util/GameAnimaiton";
import EndTips_generate from "./ui-generate/EndTips_generate"
import Tips from "./util/Tips";
import MainUI from "./M_XC/ui/UIMain";

/*
 * @Author: wushen112 330177253@qq.com
 * @Date: 2024-07-06 14:11:24
 * @LastEditors: wushen112 330177253@qq.com
 * @LastEditTime: 2024-07-07 14:53:20
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
    public hitCamera: Camera = null;
    public BagCamera: Camera = null;
    public parachuteCamera: Camera = null;
    private EndTips: EndTips_generate
    onUpdate() {

    }
    LoopFrist() {

        //音效
        let soundNao = GameObject.findGameObjectById("17357BC7") as Sound
        let soundQueen = GameObject.findGameObjectById("01EC1A8F") as Sound
        let soundBao = GameObject.findGameObjectById("3E1551CA") as Sound
        //特效
        const effect = GameObject.findGameObjectById("2C6CFD01") as Effect;
        let hud = UIService.show(Awake_generate)
        hud.mCanvas_Black.visibility = 0;

        // 眨眼
        let eye1Tween = new mw.Tween({ value: 1 }).to({ value: 0.2 }, 500).onUpdate((obj) => {
            hud.mCanvas_Black.renderOpacity = obj.value
        })
        let eye1BackTween = new mw.Tween({ value: 0.2 }).to({ value: 1 }, 500).onUpdate((obj) => {
            hud.mCanvas_Black.renderOpacity = obj.value
        })
        soundNao.play()
        setTimeout(() => {
            soundNao.play()
            setTimeout(() => {
                soundNao.play()
            }, 400)
        }, 400)
        setTimeout(() => {
            eye1Tween.start().chain(eye1BackTween.start())
            eye1BackTween.start().chain(eye1Tween.start())
            setTimeout(() => {
                effect.play();
                soundBao.play()
                setTimeout(() => {
                    eye1Tween.pause()
                    eye1BackTween.pause()
                    hud.mCanvas_Black.renderOpacity = 1
                    soundQueen.play()
                    setTimeout(() => {
                        soundBao.pause()
                        soundQueen.pause()
                        UIService.hide(Awake_generate)
                        //进入正式游戏写这里面
                        this.gameStart()
                    }, 3000);
                }, 500);
            }, 2000);
        }, 1400);
    }

    gameStart() {
        let hud = UIService.show(Awake_generate)
        let sound = GameObject.findGameObjectById("22185F22") as Sound
        sound.play()
        let eye1Tween = new mw.Tween({ value: 1 }).to({ value: 0 }, 500).onUpdate((obj) => {
            hud.mCanvas_Black.renderOpacity = obj.value
        }).start();
        setTimeout(() => {
            UIService.hide(Awake_generate)
            //进入正式游戏写这里面
            UIService.show(DefaultUI);
        }, 500);
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
        effect.play();
        Camera.switch(GameController.instance.hitCamera, 0.5)
        setTimeout(() => {
            Camera.switch(GameController.instance.currCameta, 0.5)
        }, 2000);

    }

    airCollision() {
        const airA = GameObject.findGameObjectById("2293A559") as GameObject;
        const airB = GameObject.findGameObjectById("1F8FDF36") as GameObject;
        const effect = GameObject.findGameObjectById("0BDCEFE5") as Effect;
        const airAPosition = airA.worldTransform.position.clone();
        const airBPosition = airB.worldTransform.position.clone();
        let airTween = new mw.Tween(airBPosition).to(airAPosition, 2000).onUpdate((value) => {
            airB.worldTransform.position = value
        }).start();
        setTimeout(() => {
            effect.play();

        }, 1800);
        setTimeout(() => {
            Camera.switch(GameController.instance.currCameta, 0.2)
        }, 2000);
        Camera.switch(GameController.instance.hitCamera, 0.2)
        setTimeout(() => {
            UIService.hide(EndTips_generate)
        }, 2000);
    }
    /**掉落结局 */
    dropFail() {
        Camera.switch(GameController.instance.BagCamera, 0.2)
        this.EndTips = UIService.show(EndTips_generate)
        this.EndTips.mText_Take.text = "大部分人从高空跳下都会摔死"
        setTimeout(() => {
            UIService.hide(EndTips_generate)
            setTimeout(() => {
                Camera.switch(GameController.instance.currCameta, 0.2)
            }, 2000);
        }, 2000);
    }
    dropSuccess() {
        Camera.switch(GameController.instance.parachuteCamera, 0.2)
        this.EndTips = UIService.show(EndTips_generate)
        this.EndTips.mText_Take.text = "你成功避免了死亡，但你本可成为拯救他人的英雄"
        setTimeout(() => {
            UIService.hide(EndTips_generate)
            setTimeout(() => {
                Camera.switch(GameController.instance.currCameta, 0.2)
            }, 2000);
        }, 2000);
    }

    /**真正胜利的结局 */
    win() {
        const air = GameObject.findGameObjectById("3481F2C3") as GameObject;
        // new Tween(air.worldTransform.position).to(new Vector(-24037, 9640, -74971), 1000)
        //     .onUpdate((value) => {
        //         air.worldTransform.position = value
        //     })
        //     .onComplete(() => {
        //         new Tween(air.worldTransform.position).to(new Vector(-1203, 9640, -74971), 1000)
        //             .onUpdate((value) => {
        //                 air.worldTransform.position = value
        //             })
        //             .onComplete(() => {
        //                 Tips.show("恭喜你，成功落地")
        //                 setTimeout(() => {
        //                     Tips.show("真的--成功了吗")
        //                     UIService.show(MainUI);
        //                     Camera.switch(GameController.instance.startCamera,0.5)
        //                 }, 1000);
        //             })
        //             .start()
        //     }).start()
         Camera.switch(GameController.instance.endCamera)
    }

}

export enum Ending {
    dieBybomb,
    airCollision,
    dropFail,
    dropWin,
    win
}
