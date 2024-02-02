gdjs.DieCode = {};
gdjs.DieCode.GDJumpscareObjects1= [];
gdjs.DieCode.GDJumpscareObjects2= [];
gdjs.DieCode.GDBGObjects1= [];
gdjs.DieCode.GDBGObjects2= [];


gdjs.DieCode.asyncCallback15726924 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}
gdjs.DieCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.DieCode.asyncCallback15726924(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.DieCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Jumpscare"), gdjs.DieCode.GDJumpscareObjects1);
{for(var i = 0, len = gdjs.DieCode.GDJumpscareObjects1.length ;i < len;++i) {
    gdjs.DieCode.GDJumpscareObjects1[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.DieCode.GDJumpscareObjects1.length ;i < len;++i) {
    gdjs.DieCode.GDJumpscareObjects1[i].setAnimation(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Player_Die.wav", false, gdjs.evtTools.sound.getGlobalVolume(runtimeScene), 1);
}{for(var i = 0, len = gdjs.DieCode.GDJumpscareObjects1.length ;i < len;++i) {
    gdjs.DieCode.GDJumpscareObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.DieCode.GDJumpscareObjects1.length ;i < len;++i) {
    gdjs.DieCode.GDJumpscareObjects1[i].getBehavior("Tween").addObjectOpacityTween("In", 255, "linear", 5000, false);
}
}
{ //Subevents
gdjs.DieCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Jumpscare"), gdjs.DieCode.GDJumpscareObjects1);
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, (( gdjs.DieCode.GDJumpscareObjects1.length === 0 ) ? 0 :gdjs.DieCode.GDJumpscareObjects1[0].getOpacity()) / 2);
}}

}


};

gdjs.DieCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DieCode.GDJumpscareObjects1.length = 0;
gdjs.DieCode.GDJumpscareObjects2.length = 0;
gdjs.DieCode.GDBGObjects1.length = 0;
gdjs.DieCode.GDBGObjects2.length = 0;

gdjs.DieCode.eventsList1(runtimeScene);

return;

}

gdjs['DieCode'] = gdjs.DieCode;
