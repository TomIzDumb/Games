gdjs.Wrong_95wayCode = {};
gdjs.Wrong_95wayCode.GDWrong_95WayObjects1= [];
gdjs.Wrong_95wayCode.GDWrong_95WayObjects2= [];


gdjs.Wrong_95wayCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Wrong_Way"), gdjs.Wrong_95wayCode.GDWrong_95WayObjects1);
{for(var i = 0, len = gdjs.Wrong_95wayCode.GDWrong_95WayObjects1.length ;i < len;++i) {
    gdjs.Wrong_95wayCode.GDWrong_95WayObjects1[i].play();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


};

gdjs.Wrong_95wayCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Wrong_95wayCode.GDWrong_95WayObjects1.length = 0;
gdjs.Wrong_95wayCode.GDWrong_95WayObjects2.length = 0;

gdjs.Wrong_95wayCode.eventsList0(runtimeScene);

return;

}

gdjs['Wrong_95wayCode'] = gdjs.Wrong_95wayCode;
