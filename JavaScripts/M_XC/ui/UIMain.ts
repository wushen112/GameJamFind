import EventData from "../../EventData";
import StartGame_Generate from "../../ui-generate/StartGame_generate";
import DefaultUI from "../DefaultUI";

export default class MainUI extends StartGame_Generate{
    onStart(){
        this.mBtn_Start.onClicked.add(()=>{
            UIService.hideUI(this)
            //TODO
            UIService.show(DefaultUI)
            Event.dispatchToLocal(EventData.GameStart);
        })
    }
}