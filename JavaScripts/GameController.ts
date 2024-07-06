import EventController from "./EventController";
import DefaultUI from "./M_XC/DefaultUI";
import { Obj_Manager } from "./M_XC/Obj_Manager";
import GameAnimation from "./util/GameAnimaiton";
import Tips from "./util/Tips";

/*
 * @Author: wushen112 330177253@qq.com
 * @Date: 2024-07-06 14:11:24
 * @LastEditors: wushen112 330177253@qq.com
 * @LastEditTime: 2024-07-07 00:39:20
 * @FilePath: \test\JavaScripts\GameController.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default class GameController{
    private static _insance : GameController;
    public static get instance(){
        if(!this._insance){
            this._insance = new GameController();
        }
        return this._insance;
    } 


    public startCamera:Camera = null;
    public endCamera:Camera = null;
    public currCameta:Camera = null
    onUpdate(){ 
        
    }


    //TODO 判断死亡
    judgeDie(isJump = false){
        if(isJump){
            if(UIService.getUI(DefaultUI).slots.has("parachute")){
                this.dropSuccess();
            }else{
                this.dropFail();
            }
            return ;
        }

        
        if(EventController.instance.success1 == false){
            this.dieBybomb();
            return ;
        }
        if(EventController.instance.success2 == false   ){
            this.airCollision();
            return ;
        }

        this.win();
    }
    /**爆炸死亡  */
    dieBybomb(){
        const effect = GameObject.findGameObjectById("0318B5B8") as Effect;
        effect.play();
    }

    airCollision(){
        const airA =GameObject.findGameObjectById("2293A559") as GameObject;
        const airB = GameObject.findGameObjectById("1F8FDF36") as GameObject;
        const effect = GameObject.findGameObjectById("0BDCEFE5") as Effect;
        let tempPosition:Vector=Vector.zero
        const airAPosition=airA.worldTransform.position.clone();
        const airBPosition=airB.worldTransform.position.clone();
        let airTween = new mw.Tween(airBPosition).to({ x:airAPosition.x,y:airAPosition.y,z:airAPosition.z },2000).onUpdate((value) => {
            tempPosition.x= value.x
            tempPosition.y= value.y
            tempPosition.z= value.z
            airB.worldTransform.position= tempPosition
        }).interpolation(TweenUtil.Interpolation.Bezier)
        setTimeout(() => {
            effect.play();
        }, 1800);
    }
    /**掉落结局 */
    dropFail(){
        Tips.show("恭喜你，落地失败");
    }
    dropSuccess(){
        Tips.show("恭喜你，成功落地");
    }
    /**真正胜利的结局 */
    win(){
        
    }

}

export enum Ending{
    dieBybomb,
    airCollision,
    dropFail,
    dropWin,
    win
}
