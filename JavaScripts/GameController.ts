import EventController from "./EventController";
import DefaultUI from "./M_XC/DefaultUI";
import { Obj_Manager } from "./M_XC/Obj_Manager";
import GameAnimation from "./util/GameAnimaiton";
import Tips from "./util/Tips";

/*
 * @Author: wushen112 330177253@qq.com
 * @Date: 2024-07-06 14:11:24
 * @LastEditors: wushen112 330177253@qq.com
 * @LastEditTime: 2024-07-07 00:24:10
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
            this.hit();
            return ;
        }

        this.win();
    }
    /**爆炸死亡  */
    async dieBybomb(){
        const effect = await Effect.asyncSpawn("") as Effect;
        effect.worldTransform.position = Vector.zero;
        effect.play();
        
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
    /**撞击死亡 */
    hit(){

    }

}

export enum Ending{
    dieBybomb,
    dropFail,
    dropWin,
    win
}
