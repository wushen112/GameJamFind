/*
 * @Author: wushen112 330177253@qq.com
 * @Date: 2024-07-06 16:26:55
 * @LastEditors: wushen112 330177253@qq.com
 * @LastEditTime: 2024-07-06 17:26:21
 * @FilePath: \test\JavaScripts\M_XC\ui\UIMain.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import EventData from "../../EventData";
import GameController from "../../GameController";
import StartGame_Generate from "../../ui-generate/StartGame_generate";
import DefaultUI from "../DefaultUI";

export default class MainUI extends StartGame_Generate{
    onStart(){
        this.mBtn_Start.onClicked.add(()=>{
            UIService.hideUI(this)
            //TODO
            UIService.show(DefaultUI)
            
            Event.dispatchToLocal(EventData.GameStart);
            //初始化5个物品栏
            Event.dispatchToLocal(EventData.Init_Slot,5);

            Camera.switch(GameController.instance.currCameta)
        })
    }
}