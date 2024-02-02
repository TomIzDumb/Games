gdjs._51Code = {};
gdjs._51Code.GDCollectableObjects1_1final = [];

gdjs._51Code.GDLavaObjects2_1final = [];

gdjs._51Code.GDNext_95LevelObjects2_1final = [];

gdjs._51Code.GDPlayer2Objects1_1final = [];

gdjs._51Code.GDPlayer2Objects2_1final = [];

gdjs._51Code.GDPlayerObjects1_1final = [];

gdjs._51Code.GDPlayerObjects2_1final = [];

gdjs._51Code.GDGroundObjects1= [];
gdjs._51Code.GDGroundObjects2= [];
gdjs._51Code.GDGroundObjects3= [];
gdjs._51Code.GDPlayerObjects1= [];
gdjs._51Code.GDPlayerObjects2= [];
gdjs._51Code.GDPlayerObjects3= [];
gdjs._51Code.GDPlayer2Objects1= [];
gdjs._51Code.GDPlayer2Objects2= [];
gdjs._51Code.GDPlayer2Objects3= [];
gdjs._51Code.GDLavaObjects1= [];
gdjs._51Code.GDLavaObjects2= [];
gdjs._51Code.GDLavaObjects3= [];
gdjs._51Code.GDSoulObjects1= [];
gdjs._51Code.GDSoulObjects2= [];
gdjs._51Code.GDSoulObjects3= [];
gdjs._51Code.GDSepperateObjects1= [];
gdjs._51Code.GDSepperateObjects2= [];
gdjs._51Code.GDSepperateObjects3= [];
gdjs._51Code.GDOverScreenObjects1= [];
gdjs._51Code.GDOverScreenObjects2= [];
gdjs._51Code.GDOverScreenObjects3= [];
gdjs._51Code.GDNext_95LevelObjects1= [];
gdjs._51Code.GDNext_95LevelObjects2= [];
gdjs._51Code.GDNext_95LevelObjects3= [];
gdjs._51Code.GDLevel_95NameObjects1= [];
gdjs._51Code.GDLevel_95NameObjects2= [];
gdjs._51Code.GDLevel_95NameObjects3= [];
gdjs._51Code.GDTut_95TextObjects1= [];
gdjs._51Code.GDTut_95TextObjects2= [];
gdjs._51Code.GDTut_95TextObjects3= [];
gdjs._51Code.GDCollectableObjects1= [];
gdjs._51Code.GDCollectableObjects2= [];
gdjs._51Code.GDCollectableObjects3= [];
gdjs._51Code.GDBackgrouundObjects1= [];
gdjs._51Code.GDBackgrouundObjects2= [];
gdjs._51Code.GDBackgrouundObjects3= [];
gdjs._51Code.GDTransitionObjects1= [];
gdjs._51Code.GDTransitionObjects2= [];
gdjs._51Code.GDTransitionObjects3= [];
gdjs._51Code.GDLevel_95NameObjects1= [];
gdjs._51Code.GDLevel_95NameObjects2= [];
gdjs._51Code.GDLevel_95NameObjects3= [];
gdjs._51Code.GDNext_95LevelObjects1= [];
gdjs._51Code.GDNext_95LevelObjects2= [];
gdjs._51Code.GDNext_95LevelObjects3= [];
gdjs._51Code.GDNewTextObjects1= [];
gdjs._51Code.GDNewTextObjects2= [];
gdjs._51Code.GDNewTextObjects3= [];

gdjs._51Code.conditionTrue_0 = {val:false};
gdjs._51Code.condition0IsTrue_0 = {val:false};
gdjs._51Code.condition1IsTrue_0 = {val:false};
gdjs._51Code.condition2IsTrue_0 = {val:false};
gdjs._51Code.condition3IsTrue_0 = {val:false};
gdjs._51Code.conditionTrue_1 = {val:false};
gdjs._51Code.condition0IsTrue_1 = {val:false};
gdjs._51Code.condition1IsTrue_1 = {val:false};
gdjs._51Code.condition2IsTrue_1 = {val:false};
gdjs._51Code.condition3IsTrue_1 = {val:false};


gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDTransitionObjects2Objects = Hashtable.newFrom({"Transition": gdjs._51Code.GDTransitionObjects2});
gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDBackgrouundObjects1Objects = Hashtable.newFrom({"Backgrouund": gdjs._51Code.GDBackgrouundObjects1});
gdjs._51Code.asyncCallback8618356 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Level_Name"), gdjs._51Code.GDLevel_95NameObjects2);

{for(var i = 0, len = gdjs._51Code.GDLevel_95NameObjects2.length ;i < len;++i) {
    gdjs._51Code.GDLevel_95NameObjects2[i].getBehavior("Tween").addObjectPositionTween("Out", 544, 722, "easeOutQuad", 600, true);
}
}}
gdjs._51Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs._51Code.GDLevel_95NameObjects1) asyncObjectsList.addObject("Level_Name", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._51Code.asyncCallback8618356(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._51Code.eventsList1 = function(runtimeScene) {

{



}


{


gdjs._51Code.condition0IsTrue_0.val = false;
{
gdjs._51Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs._51Code.condition0IsTrue_0.val) {
gdjs._51Code.GDTransitionObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDTransitionObjects2Objects, 0, 0, "");
}{for(var i = 0, len = gdjs._51Code.GDTransitionObjects2.length ;i < len;++i) {
    gdjs._51Code.GDTransitionObjects2[i].setSize(1280, 720);
}
}{for(var i = 0, len = gdjs._51Code.GDTransitionObjects2.length ;i < len;++i) {
    gdjs._51Code.GDTransitionObjects2[i].getBehavior("Tween").addObjectPositionXTween("In", 1280, "easeOutQuad", 600, false);
}
}}

}


{



}


{


gdjs._51Code.condition0IsTrue_0.val = false;
{
gdjs._51Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs._51Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Level_Name"), gdjs._51Code.GDLevel_95NameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._51Code.GDPlayerObjects1);
gdjs._51Code.GDBackgrouundObjects1.length = 0;

{gdjs.evtTools.camera.showLayer(runtimeScene, "Overscreen");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDBackgrouundObjects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs._51Code.GDBackgrouundObjects1.length ;i < len;++i) {
    gdjs._51Code.GDBackgrouundObjects1[i].setSize(1280, 720);
}
}{for(var i = 0, len = gdjs._51Code.GDBackgrouundObjects1.length ;i < len;++i) {
    gdjs._51Code.GDBackgrouundObjects1[i].setOpacity(20);
}
}{for(var i = 0, len = gdjs._51Code.GDBackgrouundObjects1.length ;i < len;++i) {
    gdjs._51Code.GDBackgrouundObjects1[i].setZOrder(-(999999999999999999999));
}
}{for(var i = 0, len = gdjs._51Code.GDLevel_95NameObjects1.length ;i < len;++i) {
    gdjs._51Code.GDLevel_95NameObjects1[i].setZOrder(100000000000000000000000);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{for(var i = 0, len = gdjs._51Code.GDLevel_95NameObjects1.length ;i < len;++i) {
    gdjs._51Code.GDLevel_95NameObjects1[i].setPosition(542,-(78));
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber((( gdjs._51Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs._51Code.GDPlayerObjects1[0].getPointX("")));
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber((( gdjs._51Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs._51Code.GDPlayerObjects1[0].getPointY("")));
}{for(var i = 0, len = gdjs._51Code.GDLevel_95NameObjects1.length ;i < len;++i) {
    gdjs._51Code.GDLevel_95NameObjects1[i].setString("Level " + gdjs.evtTools.runtimeScene.getSceneName(runtimeScene));
}
}{for(var i = 0, len = gdjs._51Code.GDLevel_95NameObjects1.length ;i < len;++i) {
    gdjs._51Code.GDLevel_95NameObjects1[i].getBehavior("Tween").addObjectPositionTween("Start", 542, 354, "easeOutQuad", 600, false);
}
}
{ //Subevents
gdjs._51Code.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs._51Code.GDPlayerObjects2});
gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDGroundObjects2Objects = Hashtable.newFrom({"Ground": gdjs._51Code.GDGroundObjects2});
gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs._51Code.GDPlayerObjects3});
gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDLavaObjects3Objects = Hashtable.newFrom({"Lava": gdjs._51Code.GDLavaObjects3});
gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDSoulObjects2Objects = Hashtable.newFrom({"Soul": gdjs._51Code.GDSoulObjects2});
gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs._51Code.GDPlayerObjects3});
gdjs._51Code.asyncCallback8622108 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs._51Code.GDPlayerObjects3);

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDPlayerObjects3Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), "");
}{for(var i = 0, len = gdjs._51Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs._51Code.GDPlayerObjects3[i].setSize(48, 48);
}
}}
gdjs._51Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs._51Code.GDPlayerObjects2) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._51Code.asyncCallback8622108(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDPlayer2Objects3Objects = Hashtable.newFrom({"Player2": gdjs._51Code.GDPlayer2Objects3});
gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDLavaObjects3Objects = Hashtable.newFrom({"Lava": gdjs._51Code.GDLavaObjects3});
gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDSoulObjects2Objects = Hashtable.newFrom({"Soul": gdjs._51Code.GDSoulObjects2});
gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs._51Code.GDPlayerObjects3});
gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDNext_9595LevelObjects3Objects = Hashtable.newFrom({"Next_Level": gdjs._51Code.GDNext_95LevelObjects3});
gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDPlayer2Objects3Objects = Hashtable.newFrom({"Player2": gdjs._51Code.GDPlayer2Objects3});
gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDNext_9595LevelObjects3Objects = Hashtable.newFrom({"Next_Level": gdjs._51Code.GDNext_95LevelObjects3});
gdjs._51Code.asyncCallback8627060 = function (runtimeScene, asyncObjectsList) {
{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3))), false);
}}
gdjs._51Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._51Code.asyncCallback8627060(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDPlayer2Objects2Objects = Hashtable.newFrom({"Player2": gdjs._51Code.GDPlayer2Objects2});
gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs._51Code.GDPlayerObjects2});
gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs._51Code.GDPlayerObjects2});
gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs._51Code.GDPlayerObjects2});
gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDCollectableObjects2Objects = Hashtable.newFrom({"Collectable": gdjs._51Code.GDCollectableObjects2});
gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDPlayer2Objects2Objects = Hashtable.newFrom({"Player2": gdjs._51Code.GDPlayer2Objects2});
gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDCollectableObjects2Objects = Hashtable.newFrom({"Collectable": gdjs._51Code.GDCollectableObjects2});
gdjs._51Code.eventsList4 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs._51Code.GDGroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._51Code.GDPlayerObjects2);

gdjs._51Code.condition0IsTrue_0.val = false;
gdjs._51Code.condition1IsTrue_0.val = false;
{
gdjs._51Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDPlayerObjects2Objects, gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDGroundObjects2Objects, false, runtimeScene, false);
}if ( gdjs._51Code.condition0IsTrue_0.val ) {
{
{gdjs._51Code.conditionTrue_1 = gdjs._51Code.condition1IsTrue_0;
gdjs._51Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8619492);
}
}}
if (gdjs._51Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Land", false, 100, 1);
}}

}


{



}


{

gdjs._51Code.GDLavaObjects2.length = 0;

gdjs._51Code.GDPlayerObjects2.length = 0;


gdjs._51Code.condition0IsTrue_0.val = false;
{
{gdjs._51Code.conditionTrue_1 = gdjs._51Code.condition0IsTrue_0;
gdjs._51Code.GDLavaObjects2_1final.length = 0;gdjs._51Code.GDPlayerObjects2_1final.length = 0;gdjs._51Code.condition0IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Lava"), gdjs._51Code.GDLavaObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._51Code.GDPlayerObjects3);
gdjs._51Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDPlayerObjects3Objects, gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDLavaObjects3Objects, false, runtimeScene, false);
if( gdjs._51Code.condition0IsTrue_1.val ) {
    gdjs._51Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs._51Code.GDLavaObjects3.length;j<jLen;++j) {
        if ( gdjs._51Code.GDLavaObjects2_1final.indexOf(gdjs._51Code.GDLavaObjects3[j]) === -1 )
            gdjs._51Code.GDLavaObjects2_1final.push(gdjs._51Code.GDLavaObjects3[j]);
    }
    for(var j = 0, jLen = gdjs._51Code.GDPlayerObjects3.length;j<jLen;++j) {
        if ( gdjs._51Code.GDPlayerObjects2_1final.indexOf(gdjs._51Code.GDPlayerObjects3[j]) === -1 )
            gdjs._51Code.GDPlayerObjects2_1final.push(gdjs._51Code.GDPlayerObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs._51Code.GDLavaObjects2_1final, gdjs._51Code.GDLavaObjects2);
gdjs.copyArray(gdjs._51Code.GDPlayerObjects2_1final, gdjs._51Code.GDPlayerObjects2);
}
}
}if (gdjs._51Code.condition0IsTrue_0.val) {
/* Reuse gdjs._51Code.GDPlayerObjects2 */
gdjs._51Code.GDSoulObjects2.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "Player_Die.ogg", false, 100, 1);
}{for(var i = 0, len = gdjs._51Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._51Code.GDPlayerObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDSoulObjects2Objects, (( gdjs._51Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs._51Code.GDPlayerObjects2[0].getPointX("")), (( gdjs._51Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs._51Code.GDPlayerObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs._51Code.GDSoulObjects2.length ;i < len;++i) {
    gdjs._51Code.GDSoulObjects2[i].setAngle(270);
}
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.5, 0, 0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs._51Code.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs._51Code.GDLavaObjects2.length = 0;

gdjs._51Code.GDPlayer2Objects2.length = 0;


gdjs._51Code.condition0IsTrue_0.val = false;
{
{gdjs._51Code.conditionTrue_1 = gdjs._51Code.condition0IsTrue_0;
gdjs._51Code.GDLavaObjects2_1final.length = 0;gdjs._51Code.GDPlayer2Objects2_1final.length = 0;gdjs._51Code.condition0IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Lava"), gdjs._51Code.GDLavaObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs._51Code.GDPlayer2Objects3);
gdjs._51Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDPlayer2Objects3Objects, gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDLavaObjects3Objects, false, runtimeScene, false);
if( gdjs._51Code.condition0IsTrue_1.val ) {
    gdjs._51Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs._51Code.GDLavaObjects3.length;j<jLen;++j) {
        if ( gdjs._51Code.GDLavaObjects2_1final.indexOf(gdjs._51Code.GDLavaObjects3[j]) === -1 )
            gdjs._51Code.GDLavaObjects2_1final.push(gdjs._51Code.GDLavaObjects3[j]);
    }
    for(var j = 0, jLen = gdjs._51Code.GDPlayer2Objects3.length;j<jLen;++j) {
        if ( gdjs._51Code.GDPlayer2Objects2_1final.indexOf(gdjs._51Code.GDPlayer2Objects3[j]) === -1 )
            gdjs._51Code.GDPlayer2Objects2_1final.push(gdjs._51Code.GDPlayer2Objects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs._51Code.GDLavaObjects2_1final, gdjs._51Code.GDLavaObjects2);
gdjs.copyArray(gdjs._51Code.GDPlayer2Objects2_1final, gdjs._51Code.GDPlayer2Objects2);
}
}
}if (gdjs._51Code.condition0IsTrue_0.val) {
/* Reuse gdjs._51Code.GDPlayer2Objects2 */
gdjs._51Code.GDSoulObjects2.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "Player_Die.ogg", false, 100, 1);
}{for(var i = 0, len = gdjs._51Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs._51Code.GDPlayer2Objects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDSoulObjects2Objects, (( gdjs._51Code.GDPlayer2Objects2.length === 0 ) ? 0 :gdjs._51Code.GDPlayer2Objects2[0].getPointX("")), (( gdjs._51Code.GDPlayer2Objects2.length === 0 ) ? 0 :gdjs._51Code.GDPlayer2Objects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs._51Code.GDSoulObjects2.length ;i < len;++i) {
    gdjs._51Code.GDSoulObjects2[i].setAngle(270);
}
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.5, 0, 0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}}

}


{



}


{

gdjs._51Code.GDNext_95LevelObjects2.length = 0;

gdjs._51Code.GDPlayerObjects2.length = 0;

gdjs._51Code.GDPlayer2Objects2.length = 0;


gdjs._51Code.condition0IsTrue_0.val = false;
{
{gdjs._51Code.conditionTrue_1 = gdjs._51Code.condition0IsTrue_0;
gdjs._51Code.GDNext_95LevelObjects2_1final.length = 0;gdjs._51Code.GDPlayerObjects2_1final.length = 0;gdjs._51Code.GDPlayer2Objects2_1final.length = 0;gdjs._51Code.condition0IsTrue_1.val = false;
gdjs._51Code.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Next_Level"), gdjs._51Code.GDNext_95LevelObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._51Code.GDPlayerObjects3);
gdjs._51Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDPlayerObjects3Objects, gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDNext_9595LevelObjects3Objects, false, runtimeScene, false);
if( gdjs._51Code.condition0IsTrue_1.val ) {
    gdjs._51Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs._51Code.GDNext_95LevelObjects3.length;j<jLen;++j) {
        if ( gdjs._51Code.GDNext_95LevelObjects2_1final.indexOf(gdjs._51Code.GDNext_95LevelObjects3[j]) === -1 )
            gdjs._51Code.GDNext_95LevelObjects2_1final.push(gdjs._51Code.GDNext_95LevelObjects3[j]);
    }
    for(var j = 0, jLen = gdjs._51Code.GDPlayerObjects3.length;j<jLen;++j) {
        if ( gdjs._51Code.GDPlayerObjects2_1final.indexOf(gdjs._51Code.GDPlayerObjects3[j]) === -1 )
            gdjs._51Code.GDPlayerObjects2_1final.push(gdjs._51Code.GDPlayerObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Next_Level"), gdjs._51Code.GDNext_95LevelObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs._51Code.GDPlayer2Objects3);
gdjs._51Code.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDPlayer2Objects3Objects, gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDNext_9595LevelObjects3Objects, false, runtimeScene, false);
if( gdjs._51Code.condition1IsTrue_1.val ) {
    gdjs._51Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs._51Code.GDNext_95LevelObjects3.length;j<jLen;++j) {
        if ( gdjs._51Code.GDNext_95LevelObjects2_1final.indexOf(gdjs._51Code.GDNext_95LevelObjects3[j]) === -1 )
            gdjs._51Code.GDNext_95LevelObjects2_1final.push(gdjs._51Code.GDNext_95LevelObjects3[j]);
    }
    for(var j = 0, jLen = gdjs._51Code.GDPlayer2Objects3.length;j<jLen;++j) {
        if ( gdjs._51Code.GDPlayer2Objects2_1final.indexOf(gdjs._51Code.GDPlayer2Objects3[j]) === -1 )
            gdjs._51Code.GDPlayer2Objects2_1final.push(gdjs._51Code.GDPlayer2Objects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs._51Code.GDNext_95LevelObjects2_1final, gdjs._51Code.GDNext_95LevelObjects2);
gdjs.copyArray(gdjs._51Code.GDPlayerObjects2_1final, gdjs._51Code.GDPlayerObjects2);
gdjs.copyArray(gdjs._51Code.GDPlayer2Objects2_1final, gdjs._51Code.GDPlayer2Objects2);
}
}
}if (gdjs._51Code.condition0IsTrue_0.val) {
/* Reuse gdjs._51Code.GDNext_95LevelObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs._51Code.GDTransitionObjects2);
{for(var i = 0, len = gdjs._51Code.GDTransitionObjects2.length ;i < len;++i) {
    gdjs._51Code.GDTransitionObjects2[i].setX(-(1280));
}
}{for(var i = 0, len = gdjs._51Code.GDTransitionObjects2.length ;i < len;++i) {
    gdjs._51Code.GDTransitionObjects2[i].getBehavior("Tween").addObjectPositionXTween("Out", 0, "easeInQuad", 500, false);
}
}{for(var i = 0, len = gdjs._51Code.GDNext_95LevelObjects2.length ;i < len;++i) {
    gdjs._51Code.GDNext_95LevelObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs._51Code.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._51Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs._51Code.GDPlayer2Objects2);

gdjs._51Code.condition0IsTrue_0.val = false;
{
gdjs._51Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDPlayer2Objects2Objects, gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDPlayerObjects2Objects, false, runtimeScene, false);
}if (gdjs._51Code.condition0IsTrue_0.val) {
/* Reuse gdjs._51Code.GDPlayerObjects2 */
/* Reuse gdjs._51Code.GDPlayer2Objects2 */
{for(var i = 0, len = gdjs._51Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs._51Code.GDPlayer2Objects2[i].separateFromObjectsList(gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDPlayerObjects2Objects, false);
}
}}

}


{



}


{

gdjs._51Code.GDCollectableObjects1.length = 0;

gdjs._51Code.GDPlayerObjects1.length = 0;

gdjs._51Code.GDPlayer2Objects1.length = 0;


gdjs._51Code.condition0IsTrue_0.val = false;
{
{gdjs._51Code.conditionTrue_1 = gdjs._51Code.condition0IsTrue_0;
gdjs._51Code.GDCollectableObjects1_1final.length = 0;gdjs._51Code.GDPlayerObjects1_1final.length = 0;gdjs._51Code.GDPlayer2Objects1_1final.length = 0;gdjs._51Code.condition0IsTrue_1.val = false;
gdjs._51Code.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Collectable"), gdjs._51Code.GDCollectableObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._51Code.GDPlayerObjects2);
gdjs._51Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDPlayerObjects2Objects, gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDCollectableObjects2Objects, false, runtimeScene, false);
if( gdjs._51Code.condition0IsTrue_1.val ) {
    gdjs._51Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs._51Code.GDCollectableObjects2.length;j<jLen;++j) {
        if ( gdjs._51Code.GDCollectableObjects1_1final.indexOf(gdjs._51Code.GDCollectableObjects2[j]) === -1 )
            gdjs._51Code.GDCollectableObjects1_1final.push(gdjs._51Code.GDCollectableObjects2[j]);
    }
    for(var j = 0, jLen = gdjs._51Code.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs._51Code.GDPlayerObjects1_1final.indexOf(gdjs._51Code.GDPlayerObjects2[j]) === -1 )
            gdjs._51Code.GDPlayerObjects1_1final.push(gdjs._51Code.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Collectable"), gdjs._51Code.GDCollectableObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs._51Code.GDPlayer2Objects2);
gdjs._51Code.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDPlayer2Objects2Objects, gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDCollectableObjects2Objects, false, runtimeScene, false);
if( gdjs._51Code.condition1IsTrue_1.val ) {
    gdjs._51Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs._51Code.GDCollectableObjects2.length;j<jLen;++j) {
        if ( gdjs._51Code.GDCollectableObjects1_1final.indexOf(gdjs._51Code.GDCollectableObjects2[j]) === -1 )
            gdjs._51Code.GDCollectableObjects1_1final.push(gdjs._51Code.GDCollectableObjects2[j]);
    }
    for(var j = 0, jLen = gdjs._51Code.GDPlayer2Objects2.length;j<jLen;++j) {
        if ( gdjs._51Code.GDPlayer2Objects1_1final.indexOf(gdjs._51Code.GDPlayer2Objects2[j]) === -1 )
            gdjs._51Code.GDPlayer2Objects1_1final.push(gdjs._51Code.GDPlayer2Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs._51Code.GDCollectableObjects1_1final, gdjs._51Code.GDCollectableObjects1);
gdjs.copyArray(gdjs._51Code.GDPlayerObjects1_1final, gdjs._51Code.GDPlayerObjects1);
gdjs.copyArray(gdjs._51Code.GDPlayer2Objects1_1final, gdjs._51Code.GDPlayer2Objects1);
}
}
}if (gdjs._51Code.condition0IsTrue_0.val) {
/* Reuse gdjs._51Code.GDCollectableObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(4).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Collectable.ogg", false, 60, 1);
}{for(var i = 0, len = gdjs._51Code.GDCollectableObjects1.length ;i < len;++i) {
    gdjs._51Code.GDCollectableObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.5, 0, 0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDSepperateObjects2Objects = Hashtable.newFrom({"Sepperate": gdjs._51Code.GDSepperateObjects2});
gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDPlayer2Objects2Objects = Hashtable.newFrom({"Player2": gdjs._51Code.GDPlayer2Objects2});
gdjs._51Code.asyncCallback8635276 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Player2"), gdjs._51Code.GDPlayer2Objects3);

{for(var i = 0, len = gdjs._51Code.GDPlayer2Objects3.length ;i < len;++i) {
    gdjs._51Code.GDPlayer2Objects3[i].getBehavior("PlatformerObject").setCanJump();
}
}}
gdjs._51Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs._51Code.GDPlayer2Objects2) asyncObjectsList.addObject("Player2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs._51Code.asyncCallback8635276(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDSepperateObjects2Objects = Hashtable.newFrom({"Sepperate": gdjs._51Code.GDSepperateObjects2});
gdjs._51Code.asyncCallback8639572 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Player2"), gdjs._51Code.GDPlayer2Objects3);

{for(var i = 0, len = gdjs._51Code.GDPlayer2Objects3.length ;i < len;++i) {
    gdjs._51Code.GDPlayer2Objects3[i].deleteFromScene(runtimeScene);
}
}}
gdjs._51Code.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs._51Code.GDPlayer2Objects2) asyncObjectsList.addObject("Player2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs._51Code.asyncCallback8639572(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._51Code.eventsList7 = function(runtimeScene) {

{



}


{


gdjs._51Code.condition0IsTrue_0.val = false;
gdjs._51Code.condition1IsTrue_0.val = false;
{
{gdjs._51Code.conditionTrue_1 = gdjs._51Code.condition0IsTrue_0;
gdjs._51Code.condition0IsTrue_1.val = false;
gdjs._51Code.condition1IsTrue_1.val = false;
{
gdjs._51Code.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs._51Code.condition0IsTrue_1.val ) {
    gdjs._51Code.conditionTrue_1.val = true;
}
}
{
gdjs._51Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "q");
if( gdjs._51Code.condition1IsTrue_1.val ) {
    gdjs._51Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs._51Code.condition0IsTrue_0.val ) {
{
gdjs._51Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}}
if (gdjs._51Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._51Code.GDPlayerObjects2);
gdjs._51Code.GDPlayer2Objects2.length = 0;

gdjs._51Code.GDSepperateObjects2.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "Sepperate.ogg", false, 100, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDSepperateObjects2Objects, (( gdjs._51Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs._51Code.GDPlayerObjects2[0].getPointX("")), (( gdjs._51Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs._51Code.GDPlayerObjects2[0].getPointY("")) + 12, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDPlayer2Objects2Objects, (( gdjs._51Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs._51Code.GDPlayerObjects2[0].getPointX("")), (( gdjs._51Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs._51Code.GDPlayerObjects2[0].getPointY("")) + 12, "");
}{for(var i = 0, len = gdjs._51Code.GDSepperateObjects2.length ;i < len;++i) {
    gdjs._51Code.GDSepperateObjects2[i].setAngle(270);
}
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.5, 0, 0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs._51Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs._51Code.GDPlayer2Objects2[i].getBehavior("Tween").addObjectPositionYTween("Create", (( gdjs._51Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs._51Code.GDPlayerObjects2[0].getPointY("")) - 90, "easeOutQuad", 300, false);
}
}{for(var i = 0, len = gdjs._51Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs._51Code.GDPlayer2Objects2[i].setSize(48, 48);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}
{ //Subevents
gdjs._51Code.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs._51Code.condition0IsTrue_0.val = false;
gdjs._51Code.condition1IsTrue_0.val = false;
{
gdjs._51Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if ( gdjs._51Code.condition0IsTrue_0.val ) {
{
{gdjs._51Code.conditionTrue_1 = gdjs._51Code.condition1IsTrue_0;
gdjs._51Code.condition0IsTrue_1.val = false;
gdjs._51Code.condition1IsTrue_1.val = false;
{
gdjs._51Code.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
if( gdjs._51Code.condition0IsTrue_1.val ) {
    gdjs._51Code.conditionTrue_1.val = true;
}
}
{
gdjs._51Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "e");
if( gdjs._51Code.condition1IsTrue_1.val ) {
    gdjs._51Code.conditionTrue_1.val = true;
}
}
{
}
}
}}
if (gdjs._51Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._51Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs._51Code.GDPlayer2Objects2);
gdjs._51Code.GDSepperateObjects2.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "Reverse_Sepperate.ogg", false, 100, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._51Code.mapOfGDgdjs_46_9551Code_46GDSepperateObjects2Objects, (( gdjs._51Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs._51Code.GDPlayerObjects2[0].getPointX("")), (( gdjs._51Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs._51Code.GDPlayerObjects2[0].getPointY("")) + 12, "");
}{for(var i = 0, len = gdjs._51Code.GDSepperateObjects2.length ;i < len;++i) {
    gdjs._51Code.GDSepperateObjects2[i].setAngle(270);
}
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.5, 0, 0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs._51Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs._51Code.GDPlayer2Objects2[i].getBehavior("Tween").addObjectScaleTween("Destroy", 0, 0, "easeOutQuad", 300, false, false);
}
}{for(var i = 0, len = gdjs._51Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs._51Code.GDPlayer2Objects2[i].getBehavior("Tween").addObjectPositionTween("Destroy2", (( gdjs._51Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs._51Code.GDPlayerObjects2[0].getPointX("")), (( gdjs._51Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs._51Code.GDPlayerObjects2[0].getPointY("")), "easeOutQuad", 300, false);
}
}{for(var i = 0, len = gdjs._51Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs._51Code.GDPlayer2Objects2[i].activateBehavior("PlatformerObject", false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}
{ //Subevents
gdjs._51Code.eventsList6(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs._51Code.condition0IsTrue_0.val = false;
{
{gdjs._51Code.conditionTrue_1 = gdjs._51Code.condition0IsTrue_0;
gdjs._51Code.condition0IsTrue_1.val = false;
gdjs._51Code.condition1IsTrue_1.val = false;
{
gdjs._51Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs._51Code.condition0IsTrue_1.val ) {
    gdjs._51Code.conditionTrue_1.val = true;
}
}
{
gdjs._51Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs._51Code.condition1IsTrue_1.val ) {
    gdjs._51Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs._51Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._51Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs._51Code.GDPlayer2Objects2);
{for(var i = 0, len = gdjs._51Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._51Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs._51Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs._51Code.GDPlayer2Objects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs._51Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._51Code.GDPlayerObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs._51Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs._51Code.GDPlayer2Objects2[i].flipX(false);
}
}}

}


{



}


{


gdjs._51Code.condition0IsTrue_0.val = false;
{
{gdjs._51Code.conditionTrue_1 = gdjs._51Code.condition0IsTrue_0;
gdjs._51Code.condition0IsTrue_1.val = false;
gdjs._51Code.condition1IsTrue_1.val = false;
{
gdjs._51Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs._51Code.condition0IsTrue_1.val ) {
    gdjs._51Code.conditionTrue_1.val = true;
}
}
{
gdjs._51Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs._51Code.condition1IsTrue_1.val ) {
    gdjs._51Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs._51Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._51Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs._51Code.GDPlayer2Objects2);
{for(var i = 0, len = gdjs._51Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._51Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs._51Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs._51Code.GDPlayer2Objects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs._51Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._51Code.GDPlayerObjects2[i].flipX(true);
}
}{for(var i = 0, len = gdjs._51Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs._51Code.GDPlayer2Objects2[i].flipX(true);
}
}}

}


{



}


{


gdjs._51Code.condition0IsTrue_0.val = false;
{
{gdjs._51Code.conditionTrue_1 = gdjs._51Code.condition0IsTrue_0;
gdjs._51Code.condition0IsTrue_1.val = false;
gdjs._51Code.condition1IsTrue_1.val = false;
gdjs._51Code.condition2IsTrue_1.val = false;
{
gdjs._51Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs._51Code.condition0IsTrue_1.val ) {
    gdjs._51Code.conditionTrue_1.val = true;
}
}
{
gdjs._51Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs._51Code.condition1IsTrue_1.val ) {
    gdjs._51Code.conditionTrue_1.val = true;
}
}
{
gdjs._51Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs._51Code.condition2IsTrue_1.val ) {
    gdjs._51Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs._51Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._51Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs._51Code.GDPlayer2Objects1);
{for(var i = 0, len = gdjs._51Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._51Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs._51Code.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs._51Code.GDPlayer2Objects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};gdjs._51Code.eventsList8 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._51Code.GDPlayerObjects2);

gdjs._51Code.condition0IsTrue_0.val = false;
gdjs._51Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._51Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs._51Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs._51Code.condition0IsTrue_0.val = true;
        gdjs._51Code.GDPlayerObjects2[k] = gdjs._51Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs._51Code.GDPlayerObjects2.length = k;}if ( gdjs._51Code.condition0IsTrue_0.val ) {
{
{gdjs._51Code.conditionTrue_1 = gdjs._51Code.condition1IsTrue_0;
gdjs._51Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8647196);
}
}}
if (gdjs._51Code.condition1IsTrue_0.val) {
/* Reuse gdjs._51Code.GDPlayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs._51Code.GDPlayer2Objects2);
{for(var i = 0, len = gdjs._51Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._51Code.GDPlayerObjects2[i].setAnimationName("Walk");
}
}{for(var i = 0, len = gdjs._51Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs._51Code.GDPlayer2Objects2[i].setAnimationName("Walk");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._51Code.GDPlayerObjects1);

gdjs._51Code.condition0IsTrue_0.val = false;
gdjs._51Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._51Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs._51Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        gdjs._51Code.condition0IsTrue_0.val = true;
        gdjs._51Code.GDPlayerObjects1[k] = gdjs._51Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs._51Code.GDPlayerObjects1.length = k;}if ( gdjs._51Code.condition0IsTrue_0.val ) {
{
{gdjs._51Code.conditionTrue_1 = gdjs._51Code.condition1IsTrue_0;
gdjs._51Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8648900);
}
}}
if (gdjs._51Code.condition1IsTrue_0.val) {
/* Reuse gdjs._51Code.GDPlayerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs._51Code.GDPlayer2Objects1);
{for(var i = 0, len = gdjs._51Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._51Code.GDPlayerObjects1[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs._51Code.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs._51Code.GDPlayer2Objects1[i].setAnimationName("Idle");
}
}}

}


};gdjs._51Code.eventsList9 = function(runtimeScene) {

{


gdjs._51Code.condition0IsTrue_0.val = false;
{
gdjs._51Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs._51Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(3);
}}

}


{



}


{



}


{


gdjs._51Code.eventsList1(runtimeScene);
}


{


gdjs._51Code.eventsList4(runtimeScene);
}


{


gdjs._51Code.eventsList7(runtimeScene);
}


{


gdjs._51Code.eventsList8(runtimeScene);
}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Backgrouund"), gdjs._51Code.GDBackgrouundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Collectable"), gdjs._51Code.GDCollectableObjects1);
{for(var i = 0, len = gdjs._51Code.GDCollectableObjects1.length ;i < len;++i) {
    gdjs._51Code.GDCollectableObjects1[i].rotate(90, runtimeScene);
}
}{for(var i = 0, len = gdjs._51Code.GDBackgrouundObjects1.length ;i < len;++i) {
    gdjs._51Code.GDBackgrouundObjects1[i].setXOffset(gdjs._51Code.GDBackgrouundObjects1[i].getXOffset() + (2));
}
}}

}


};

gdjs._51Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._51Code.GDGroundObjects1.length = 0;
gdjs._51Code.GDGroundObjects2.length = 0;
gdjs._51Code.GDGroundObjects3.length = 0;
gdjs._51Code.GDPlayerObjects1.length = 0;
gdjs._51Code.GDPlayerObjects2.length = 0;
gdjs._51Code.GDPlayerObjects3.length = 0;
gdjs._51Code.GDPlayer2Objects1.length = 0;
gdjs._51Code.GDPlayer2Objects2.length = 0;
gdjs._51Code.GDPlayer2Objects3.length = 0;
gdjs._51Code.GDLavaObjects1.length = 0;
gdjs._51Code.GDLavaObjects2.length = 0;
gdjs._51Code.GDLavaObjects3.length = 0;
gdjs._51Code.GDSoulObjects1.length = 0;
gdjs._51Code.GDSoulObjects2.length = 0;
gdjs._51Code.GDSoulObjects3.length = 0;
gdjs._51Code.GDSepperateObjects1.length = 0;
gdjs._51Code.GDSepperateObjects2.length = 0;
gdjs._51Code.GDSepperateObjects3.length = 0;
gdjs._51Code.GDOverScreenObjects1.length = 0;
gdjs._51Code.GDOverScreenObjects2.length = 0;
gdjs._51Code.GDOverScreenObjects3.length = 0;
gdjs._51Code.GDNext_95LevelObjects1.length = 0;
gdjs._51Code.GDNext_95LevelObjects2.length = 0;
gdjs._51Code.GDNext_95LevelObjects3.length = 0;
gdjs._51Code.GDLevel_95NameObjects1.length = 0;
gdjs._51Code.GDLevel_95NameObjects2.length = 0;
gdjs._51Code.GDLevel_95NameObjects3.length = 0;
gdjs._51Code.GDTut_95TextObjects1.length = 0;
gdjs._51Code.GDTut_95TextObjects2.length = 0;
gdjs._51Code.GDTut_95TextObjects3.length = 0;
gdjs._51Code.GDCollectableObjects1.length = 0;
gdjs._51Code.GDCollectableObjects2.length = 0;
gdjs._51Code.GDCollectableObjects3.length = 0;
gdjs._51Code.GDBackgrouundObjects1.length = 0;
gdjs._51Code.GDBackgrouundObjects2.length = 0;
gdjs._51Code.GDBackgrouundObjects3.length = 0;
gdjs._51Code.GDTransitionObjects1.length = 0;
gdjs._51Code.GDTransitionObjects2.length = 0;
gdjs._51Code.GDTransitionObjects3.length = 0;
gdjs._51Code.GDLevel_95NameObjects1.length = 0;
gdjs._51Code.GDLevel_95NameObjects2.length = 0;
gdjs._51Code.GDLevel_95NameObjects3.length = 0;
gdjs._51Code.GDNext_95LevelObjects1.length = 0;
gdjs._51Code.GDNext_95LevelObjects2.length = 0;
gdjs._51Code.GDNext_95LevelObjects3.length = 0;
gdjs._51Code.GDNewTextObjects1.length = 0;
gdjs._51Code.GDNewTextObjects2.length = 0;
gdjs._51Code.GDNewTextObjects3.length = 0;

gdjs._51Code.eventsList9(runtimeScene);

return;

}

gdjs['_51Code'] = gdjs._51Code;
