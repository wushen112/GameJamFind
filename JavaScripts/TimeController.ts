/*
 * @Author: wushen112 330177253@qq.com
 * @Date: 2024-07-06 11:29:43
 * @LastEditors: wushen112 330177253@qq.com
 * @LastEditTime: 2024-07-06 14:06:20
 * @FilePath: \test\JavaScripts\TimeController.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default class TimeController {
    private static _instance :TimeController;
    public static get instance(){
        if(!this._instance){
            this._instance = new TimeController()
        }
        return this._instance;
    }
    public time:number = 0;
    
}