gdjs.Main_95MenuCode = {};
gdjs.Main_95MenuCode.GDGroundObjects1= [];
gdjs.Main_95MenuCode.GDGroundObjects2= [];
gdjs.Main_95MenuCode.GDPlayerObjects1= [];
gdjs.Main_95MenuCode.GDPlayerObjects2= [];
gdjs.Main_95MenuCode.GDPlayer2Objects1= [];
gdjs.Main_95MenuCode.GDPlayer2Objects2= [];
gdjs.Main_95MenuCode.GDLavaObjects1= [];
gdjs.Main_95MenuCode.GDLavaObjects2= [];
gdjs.Main_95MenuCode.GDSoulObjects1= [];
gdjs.Main_95MenuCode.GDSoulObjects2= [];
gdjs.Main_95MenuCode.GDSepperateObjects1= [];
gdjs.Main_95MenuCode.GDSepperateObjects2= [];
gdjs.Main_95MenuCode.GDOverScreenObjects1= [];
gdjs.Main_95MenuCode.GDOverScreenObjects2= [];
gdjs.Main_95MenuCode.GDNext_95LevelObjects1= [];
gdjs.Main_95MenuCode.GDNext_95LevelObjects2= [];
gdjs.Main_95MenuCode.GDLevel_95NameObjects1= [];
gdjs.Main_95MenuCode.GDLevel_95NameObjects2= [];
gdjs.Main_95MenuCode.GDTut_95TextObjects1= [];
gdjs.Main_95MenuCode.GDTut_95TextObjects2= [];
gdjs.Main_95MenuCode.GDCollectableObjects1= [];
gdjs.Main_95MenuCode.GDCollectableObjects2= [];
gdjs.Main_95MenuCode.GDBackgrouundObjects1= [];
gdjs.Main_95MenuCode.GDBackgrouundObjects2= [];
gdjs.Main_95MenuCode.GDTransitionObjects1= [];
gdjs.Main_95MenuCode.GDTransitionObjects2= [];
gdjs.Main_95MenuCode.GDLogoObjects1= [];
gdjs.Main_95MenuCode.GDLogoObjects2= [];
gdjs.Main_95MenuCode.GDNewTextObjects1= [];
gdjs.Main_95MenuCode.GDNewTextObjects2= [];

gdjs.Main_95MenuCode.conditionTrue_0 = {val:false};
gdjs.Main_95MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Main_95MenuCode.condition1IsTrue_0 = {val:false};


gdjs.Main_95MenuCode.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.Main_95MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_95MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Backgrouund"), gdjs.Main_95MenuCode.GDBackgrouundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.Main_95MenuCode.GDPlayer2Objects1);
{for(var i = 0, len = gdjs.Main_95MenuCode.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.Main_95MenuCode.GDPlayer2Objects1[i].flipX(true);
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Overscreen");
}{for(var i = 0, len = gdjs.Main_95MenuCode.GDBackgrouundObjects1.length ;i < len;++i) {
    gdjs.Main_95MenuCode.GDBackgrouundObjects1[i].setOpacity(20);
}
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "MainMenu.ogg", true, 70, 1);
}}

}


{



}


{


gdjs.Main_95MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if (gdjs.Main_95MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "1", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "New sound effect.wav", false, 100, 1);
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Backgrouund"), gdjs.Main_95MenuCode.GDBackgrouundObjects1);
{for(var i = 0, len = gdjs.Main_95MenuCode.GDBackgrouundObjects1.length ;i < len;++i) {
    gdjs.Main_95MenuCode.GDBackgrouundObjects1[i].setXOffset(gdjs.Main_95MenuCode.GDBackgrouundObjects1[i].getXOffset() + (1));
}
}}

}


{



}


{


gdjs.Main_95MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_95MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 3, "", 0);
}{gdjs.evtTools.tween.tweenCameraZoom(runtimeScene, "Out", 1, "", 600, "easeInOutExpo");
}}

}


};

gdjs.Main_95MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_95MenuCode.GDGroundObjects1.length = 0;
gdjs.Main_95MenuCode.GDGroundObjects2.length = 0;
gdjs.Main_95MenuCode.GDPlayerObjects1.length = 0;
gdjs.Main_95MenuCode.GDPlayerObjects2.length = 0;
gdjs.Main_95MenuCode.GDPlayer2Objects1.length = 0;
gdjs.Main_95MenuCode.GDPlayer2Objects2.length = 0;
gdjs.Main_95MenuCode.GDLavaObjects1.length = 0;
gdjs.Main_95MenuCode.GDLavaObjects2.length = 0;
gdjs.Main_95MenuCode.GDSoulObjects1.length = 0;
gdjs.Main_95MenuCode.GDSoulObjects2.length = 0;
gdjs.Main_95MenuCode.GDSepperateObjects1.length = 0;
gdjs.Main_95MenuCode.GDSepperateObjects2.length = 0;
gdjs.Main_95MenuCode.GDOverScreenObjects1.length = 0;
gdjs.Main_95MenuCode.GDOverScreenObjects2.length = 0;
gdjs.Main_95MenuCode.GDNext_95LevelObjects1.length = 0;
gdjs.Main_95MenuCode.GDNext_95LevelObjects2.length = 0;
gdjs.Main_95MenuCode.GDLevel_95NameObjects1.length = 0;
gdjs.Main_95MenuCode.GDLevel_95NameObjects2.length = 0;
gdjs.Main_95MenuCode.GDTut_95TextObjects1.length = 0;
gdjs.Main_95MenuCode.GDTut_95TextObjects2.length = 0;
gdjs.Main_95MenuCode.GDCollectableObjects1.length = 0;
gdjs.Main_95MenuCode.GDCollectableObjects2.length = 0;
gdjs.Main_95MenuCode.GDBackgrouundObjects1.length = 0;
gdjs.Main_95MenuCode.GDBackgrouundObjects2.length = 0;
gdjs.Main_95MenuCode.GDTransitionObjects1.length = 0;
gdjs.Main_95MenuCode.GDTransitionObjects2.length = 0;
gdjs.Main_95MenuCode.GDLogoObjects1.length = 0;
gdjs.Main_95MenuCode.GDLogoObjects2.length = 0;
gdjs.Main_95MenuCode.GDNewTextObjects1.length = 0;
gdjs.Main_95MenuCode.GDNewTextObjects2.length = 0;

gdjs.Main_95MenuCode.eventsList0(runtimeScene);

return;

}

gdjs['Main_95MenuCode'] = gdjs.Main_95MenuCode;
