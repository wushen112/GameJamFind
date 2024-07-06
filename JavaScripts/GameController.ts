/*
 * @Author: wushen112 330177253@qq.com
 * @Date: 2024-07-06 14:11:24
 * @LastEditors: wushen112 330177253@qq.com
 * @LastEditTime: 2024-07-06 16:16:03
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
}