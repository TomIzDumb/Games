gdjs.StatsCode = {};
gdjs.StatsCode.GDGroundObjects1= [];
gdjs.StatsCode.GDGroundObjects2= [];
gdjs.StatsCode.GDPlayerObjects1= [];
gdjs.StatsCode.GDPlayerObjects2= [];
gdjs.StatsCode.GDPlayer2Objects1= [];
gdjs.StatsCode.GDPlayer2Objects2= [];
gdjs.StatsCode.GDLavaObjects1= [];
gdjs.StatsCode.GDLavaObjects2= [];
gdjs.StatsCode.GDSoulObjects1= [];
gdjs.StatsCode.GDSoulObjects2= [];
gdjs.StatsCode.GDSepperateObjects1= [];
gdjs.StatsCode.GDSepperateObjects2= [];
gdjs.StatsCode.GDOverScreenObjects1= [];
gdjs.StatsCode.GDOverScreenObjects2= [];
gdjs.StatsCode.GDNext_95LevelObjects1= [];
gdjs.StatsCode.GDNext_95LevelObjects2= [];
gdjs.StatsCode.GDLevel_95NameObjects1= [];
gdjs.StatsCode.GDLevel_95NameObjects2= [];
gdjs.StatsCode.GDTut_95TextObjects1= [];
gdjs.StatsCode.GDTut_95TextObjects2= [];
gdjs.StatsCode.GDCollectableObjects1= [];
gdjs.StatsCode.GDCollectableObjects2= [];
gdjs.StatsCode.GDBackgrouundObjects1= [];
gdjs.StatsCode.GDBackgrouundObjects2= [];
gdjs.StatsCode.GDTransitionObjects1= [];
gdjs.StatsCode.GDTransitionObjects2= [];
gdjs.StatsCode.GDLogoObjects1= [];
gdjs.StatsCode.GDLogoObjects2= [];
gdjs.StatsCode.GDNewTextObjects1= [];
gdjs.StatsCode.GDNewTextObjects2= [];
gdjs.StatsCode.GDNewText2Objects1= [];
gdjs.StatsCode.GDNewText2Objects2= [];

gdjs.StatsCode.conditionTrue_0 = {val:false};
gdjs.StatsCode.condition0IsTrue_0 = {val:false};
gdjs.StatsCode.condition1IsTrue_0 = {val:false};
gdjs.StatsCode.condition2IsTrue_0 = {val:false};
gdjs.StatsCode.conditionTrue_1 = {val:false};
gdjs.StatsCode.condition0IsTrue_1 = {val:false};
gdjs.StatsCode.condition1IsTrue_1 = {val:false};
gdjs.StatsCode.condition2IsTrue_1 = {val:false};


gdjs.StatsCode.eventsList0 = function(runtimeScene) {

{



}


{



}


{


gdjs.StatsCode.condition0IsTrue_0.val = false;
{
gdjs.StatsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.StatsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Backgrouund"), gdjs.StatsCode.GDBackgrouundObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.StatsCode.GDNewTextObjects1);
{gdjs.evtTools.camera.showLayer(runtimeScene, "Overscreen");
}{for(var i = 0, len = gdjs.StatsCode.GDBackgrouundObjects1.length ;i < len;++i) {
    gdjs.StatsCode.GDBackgrouundObjects1[i].setOpacity(20);
}
}{for(var i = 0, len = gdjs.StatsCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.StatsCode.GDNewTextObjects1[i].setString("Thanks For Playing!\n\nYou Collected " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4))) + "/12 Collectables.");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "MainMenu.ogg", true, 100, 0.7);
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Backgrouund"), gdjs.StatsCode.GDBackgrouundObjects1);
{for(var i = 0, len = gdjs.StatsCode.GDBackgrouundObjects1.length ;i < len;++i) {
    gdjs.StatsCode.GDBackgrouundObjects1[i].setXOffset(gdjs.StatsCode.GDBackgrouundObjects1[i].getXOffset() + (1));
}
}}

}


{



}


{


gdjs.StatsCode.condition0IsTrue_0.val = false;
{
gdjs.StatsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.StatsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 3, "", 0);
}{gdjs.evtTools.tween.tweenCameraZoom(runtimeScene, "Out", 1, "", 600, "easeOutCubic");
}}

}


{


{
}

}


{



}


{


gdjs.StatsCode.condition0IsTrue_0.val = false;
gdjs.StatsCode.condition1IsTrue_0.val = false;
{
gdjs.StatsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}if ( gdjs.StatsCode.condition0IsTrue_0.val ) {
{
{gdjs.StatsCode.conditionTrue_1 = gdjs.StatsCode.condition1IsTrue_0;
gdjs.StatsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8579780);
}
}}
if (gdjs.StatsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.StatsCode.GDNewText2Objects1);
{for(var i = 0, len = gdjs.StatsCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.StatsCode.GDNewText2Objects1[i].setString("Did ya even look at them?");
}
}}

}


{


gdjs.StatsCode.condition0IsTrue_0.val = false;
gdjs.StatsCode.condition1IsTrue_0.val = false;
{
gdjs.StatsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if ( gdjs.StatsCode.condition0IsTrue_0.val ) {
{
{gdjs.StatsCode.conditionTrue_1 = gdjs.StatsCode.condition1IsTrue_0;
gdjs.StatsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8580820);
}
}}
if (gdjs.StatsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.StatsCode.GDNewText2Objects1);
{for(var i = 0, len = gdjs.StatsCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.StatsCode.GDNewText2Objects1[i].setString("Nice. Atleast you got 1 lol.");
}
}}

}


{


gdjs.StatsCode.condition0IsTrue_0.val = false;
gdjs.StatsCode.condition1IsTrue_0.val = false;
{
gdjs.StatsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 2;
}if ( gdjs.StatsCode.condition0IsTrue_0.val ) {
{
{gdjs.StatsCode.conditionTrue_1 = gdjs.StatsCode.condition1IsTrue_0;
gdjs.StatsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8581860);
}
}}
if (gdjs.StatsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.StatsCode.GDNewText2Objects1);
{for(var i = 0, len = gdjs.StatsCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.StatsCode.GDNewText2Objects1[i].setString("2 is a cool number ngl.");
}
}}

}


{


gdjs.StatsCode.condition0IsTrue_0.val = false;
gdjs.StatsCode.condition1IsTrue_0.val = false;
{
gdjs.StatsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 3;
}if ( gdjs.StatsCode.condition0IsTrue_0.val ) {
{
{gdjs.StatsCode.conditionTrue_1 = gdjs.StatsCode.condition1IsTrue_0;
gdjs.StatsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8582900);
}
}}
if (gdjs.StatsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.StatsCode.GDNewText2Objects1);
{for(var i = 0, len = gdjs.StatsCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.StatsCode.GDNewText2Objects1[i].setString("Good job! You got 3 atleast.");
}
}}

}


{


gdjs.StatsCode.condition0IsTrue_0.val = false;
gdjs.StatsCode.condition1IsTrue_0.val = false;
{
gdjs.StatsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 4;
}if ( gdjs.StatsCode.condition0IsTrue_0.val ) {
{
{gdjs.StatsCode.conditionTrue_1 = gdjs.StatsCode.condition1IsTrue_0;
gdjs.StatsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8583940);
}
}}
if (gdjs.StatsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.StatsCode.GDNewText2Objects1);
{for(var i = 0, len = gdjs.StatsCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.StatsCode.GDNewText2Objects1[i].setString("Oh wow! that's almost half the collectables.. wait I can't do math");
}
}}

}


{


gdjs.StatsCode.condition0IsTrue_0.val = false;
gdjs.StatsCode.condition1IsTrue_0.val = false;
{
gdjs.StatsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 5;
}if ( gdjs.StatsCode.condition0IsTrue_0.val ) {
{
{gdjs.StatsCode.conditionTrue_1 = gdjs.StatsCode.condition1IsTrue_0;
gdjs.StatsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8585132);
}
}}
if (gdjs.StatsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.StatsCode.GDNewText2Objects1);
{for(var i = 0, len = gdjs.StatsCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.StatsCode.GDNewText2Objects1[i].setString("You got almost half the collectables!! Woo hoo great 5/12 good job g.");
}
}}

}


{


gdjs.StatsCode.condition0IsTrue_0.val = false;
gdjs.StatsCode.condition1IsTrue_0.val = false;
{
gdjs.StatsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 6;
}if ( gdjs.StatsCode.condition0IsTrue_0.val ) {
{
{gdjs.StatsCode.conditionTrue_1 = gdjs.StatsCode.condition1IsTrue_0;
gdjs.StatsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8586324);
}
}}
if (gdjs.StatsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.StatsCode.GDNewText2Objects1);
{for(var i = 0, len = gdjs.StatsCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.StatsCode.GDNewText2Objects1[i].setString("Oh wow 6 is a good number!");
}
}}

}


{


gdjs.StatsCode.condition0IsTrue_0.val = false;
gdjs.StatsCode.condition1IsTrue_0.val = false;
{
gdjs.StatsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 7;
}if ( gdjs.StatsCode.condition0IsTrue_0.val ) {
{
{gdjs.StatsCode.conditionTrue_1 = gdjs.StatsCode.condition1IsTrue_0;
gdjs.StatsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8587364);
}
}}
if (gdjs.StatsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.StatsCode.GDNewText2Objects1);
{for(var i = 0, len = gdjs.StatsCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.StatsCode.GDNewText2Objects1[i].setString("7 is my favorite number. It's not 10 but you still did great!");
}
}}

}


{


gdjs.StatsCode.condition0IsTrue_0.val = false;
gdjs.StatsCode.condition1IsTrue_0.val = false;
{
gdjs.StatsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 8;
}if ( gdjs.StatsCode.condition0IsTrue_0.val ) {
{
{gdjs.StatsCode.conditionTrue_1 = gdjs.StatsCode.condition1IsTrue_0;
gdjs.StatsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8588492);
}
}}
if (gdjs.StatsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.StatsCode.GDNewText2Objects1);
{for(var i = 0, len = gdjs.StatsCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.StatsCode.GDNewText2Objects1[i].setString("8 is uhh.... a cool number I guess nice job.");
}
}}

}


{


gdjs.StatsCode.condition0IsTrue_0.val = false;
gdjs.StatsCode.condition1IsTrue_0.val = false;
{
gdjs.StatsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 9;
}if ( gdjs.StatsCode.condition0IsTrue_0.val ) {
{
{gdjs.StatsCode.conditionTrue_1 = gdjs.StatsCode.condition1IsTrue_0;
gdjs.StatsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8589612);
}
}}
if (gdjs.StatsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.StatsCode.GDNewText2Objects1);
{for(var i = 0, len = gdjs.StatsCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.StatsCode.GDNewText2Objects1[i].setString("9 very close!!");
}
}}

}


{


gdjs.StatsCode.condition0IsTrue_0.val = false;
gdjs.StatsCode.condition1IsTrue_0.val = false;
{
gdjs.StatsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 10;
}if ( gdjs.StatsCode.condition0IsTrue_0.val ) {
{
{gdjs.StatsCode.conditionTrue_1 = gdjs.StatsCode.condition1IsTrue_0;
gdjs.StatsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8590652);
}
}}
if (gdjs.StatsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.StatsCode.GDNewText2Objects1);
{for(var i = 0, len = gdjs.StatsCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.StatsCode.GDNewText2Objects1[i].setString("DANG you're only missing 2");
}
}}

}


{


gdjs.StatsCode.condition0IsTrue_0.val = false;
gdjs.StatsCode.condition1IsTrue_0.val = false;
{
gdjs.StatsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 11;
}if ( gdjs.StatsCode.condition0IsTrue_0.val ) {
{
{gdjs.StatsCode.conditionTrue_1 = gdjs.StatsCode.condition1IsTrue_0;
gdjs.StatsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8591692);
}
}}
if (gdjs.StatsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.StatsCode.GDNewText2Objects1);
{for(var i = 0, len = gdjs.StatsCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.StatsCode.GDNewText2Objects1[i].setString("psst.. you missed one..");
}
}}

}


{


gdjs.StatsCode.condition0IsTrue_0.val = false;
gdjs.StatsCode.condition1IsTrue_0.val = false;
{
gdjs.StatsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 12;
}if ( gdjs.StatsCode.condition0IsTrue_0.val ) {
{
{gdjs.StatsCode.conditionTrue_1 = gdjs.StatsCode.condition1IsTrue_0;
gdjs.StatsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8592732);
}
}}
if (gdjs.StatsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.StatsCode.GDNewText2Objects1);
{for(var i = 0, len = gdjs.StatsCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.StatsCode.GDNewText2Objects1[i].setString("YOOOOOOOOOOOO YOU GOT ALL THE COLLECTABLES!!!");
}
}}

}


};

gdjs.StatsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StatsCode.GDGroundObjects1.length = 0;
gdjs.StatsCode.GDGroundObjects2.length = 0;
gdjs.StatsCode.GDPlayerObjects1.length = 0;
gdjs.StatsCode.GDPlayerObjects2.length = 0;
gdjs.StatsCode.GDPlayer2Objects1.length = 0;
gdjs.StatsCode.GDPlayer2Objects2.length = 0;
gdjs.StatsCode.GDLavaObjects1.length = 0;
gdjs.StatsCode.GDLavaObjects2.length = 0;
gdjs.StatsCode.GDSoulObjects1.length = 0;
gdjs.StatsCode.GDSoulObjects2.length = 0;
gdjs.StatsCode.GDSepperateObjects1.length = 0;
gdjs.StatsCode.GDSepperateObjects2.length = 0;
gdjs.StatsCode.GDOverScreenObjects1.length = 0;
gdjs.StatsCode.GDOverScreenObjects2.length = 0;
gdjs.StatsCode.GDNext_95LevelObjects1.length = 0;
gdjs.StatsCode.GDNext_95LevelObjects2.length = 0;
gdjs.StatsCode.GDLevel_95NameObjects1.length = 0;
gdjs.StatsCode.GDLevel_95NameObjects2.length = 0;
gdjs.StatsCode.GDTut_95TextObjects1.length = 0;
gdjs.StatsCode.GDTut_95TextObjects2.length = 0;
gdjs.StatsCode.GDCollectableObjects1.length = 0;
gdjs.StatsCode.GDCollectableObjects2.length = 0;
gdjs.StatsCode.GDBackgrouundObjects1.length = 0;
gdjs.StatsCode.GDBackgrouundObjects2.length = 0;
gdjs.StatsCode.GDTransitionObjects1.length = 0;
gdjs.StatsCode.GDTransitionObjects2.length = 0;
gdjs.StatsCode.GDLogoObjects1.length = 0;
gdjs.StatsCode.GDLogoObjects2.length = 0;
gdjs.StatsCode.GDNewTextObjects1.length = 0;
gdjs.StatsCode.GDNewTextObjects2.length = 0;
gdjs.StatsCode.GDNewText2Objects1.length = 0;
gdjs.StatsCode.GDNewText2Objects2.length = 0;

gdjs.StatsCode.eventsList0(runtimeScene);

return;

}

gdjs['StatsCode'] = gdjs.StatsCode;
