gdjs._57Code = {};
gdjs._57Code.GDCollectableObjects1_1final = [];

gdjs._57Code.GDLavaObjects2_1final = [];

gdjs._57Code.GDNext_95LevelObjects2_1final = [];

gdjs._57Code.GDPlayer2Objects1_1final = [];

gdjs._57Code.GDPlayer2Objects2_1final = [];

gdjs._57Code.GDPlayerObjects1_1final = [];

gdjs._57Code.GDPlayerObjects2_1final = [];

gdjs._57Code.GDGroundObjects1= [];
gdjs._57Code.GDGroundObjects2= [];
gdjs._57Code.GDGroundObjects3= [];
gdjs._57Code.GDPlayerObjects1= [];
gdjs._57Code.GDPlayerObjects2= [];
gdjs._57Code.GDPlayerObjects3= [];
gdjs._57Code.GDPlayer2Objects1= [];
gdjs._57Code.GDPlayer2Objects2= [];
gdjs._57Code.GDPlayer2Objects3= [];
gdjs._57Code.GDLavaObjects1= [];
gdjs._57Code.GDLavaObjects2= [];
gdjs._57Code.GDLavaObjects3= [];
gdjs._57Code.GDSoulObjects1= [];
gdjs._57Code.GDSoulObjects2= [];
gdjs._57Code.GDSoulObjects3= [];
gdjs._57Code.GDSepperateObjects1= [];
gdjs._57Code.GDSepperateObjects2= [];
gdjs._57Code.GDSepperateObjects3= [];
gdjs._57Code.GDOverScreenObjects1= [];
gdjs._57Code.GDOverScreenObjects2= [];
gdjs._57Code.GDOverScreenObjects3= [];
gdjs._57Code.GDNext_95LevelObjects1= [];
gdjs._57Code.GDNext_95LevelObjects2= [];
gdjs._57Code.GDNext_95LevelObjects3= [];
gdjs._57Code.GDLevel_95NameObjects1= [];
gdjs._57Code.GDLevel_95NameObjects2= [];
gdjs._57Code.GDLevel_95NameObjects3= [];
gdjs._57Code.GDTut_95TextObjects1= [];
gdjs._57Code.GDTut_95TextObjects2= [];
gdjs._57Code.GDTut_95TextObjects3= [];
gdjs._57Code.GDCollectableObjects1= [];
gdjs._57Code.GDCollectableObjects2= [];
gdjs._57Code.GDCollectableObjects3= [];
gdjs._57Code.GDBackgrouundObjects1= [];
gdjs._57Code.GDBackgrouundObjects2= [];
gdjs._57Code.GDBackgrouundObjects3= [];
gdjs._57Code.GDTransitionObjects1= [];
gdjs._57Code.GDTransitionObjects2= [];
gdjs._57Code.GDTransitionObjects3= [];
gdjs._57Code.GDLevel_95NameObjects1= [];
gdjs._57Code.GDLevel_95NameObjects2= [];
gdjs._57Code.GDLevel_95NameObjects3= [];
gdjs._57Code.GDNext_95LevelObjects1= [];
gdjs._57Code.GDNext_95LevelObjects2= [];
gdjs._57Code.GDNext_95LevelObjects3= [];

gdjs._57Code.conditionTrue_0 = {val:false};
gdjs._57Code.condition0IsTrue_0 = {val:false};
gdjs._57Code.condition1IsTrue_0 = {val:false};
gdjs._57Code.condition2IsTrue_0 = {val:false};
gdjs._57Code.condition3IsTrue_0 = {val:false};
gdjs._57Code.conditionTrue_1 = {val:false};
gdjs._57Code.condition0IsTrue_1 = {val:false};
gdjs._57Code.condition1IsTrue_1 = {val:false};
gdjs._57Code.condition2IsTrue_1 = {val:false};
gdjs._57Code.condition3IsTrue_1 = {val:false};


gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDTransitionObjects2Objects = Hashtable.newFrom({"Transition": gdjs._57Code.GDTransitionObjects2});
gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDBackgrouundObjects1Objects = Hashtable.newFrom({"Backgrouund": gdjs._57Code.GDBackgrouundObjects1});
gdjs._57Code.asyncCallback8618356 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Level_Name"), gdjs._57Code.GDLevel_95NameObjects2);

{for(var i = 0, len = gdjs._57Code.GDLevel_95NameObjects2.length ;i < len;++i) {
    gdjs._57Code.GDLevel_95NameObjects2[i].getBehavior("Tween").addObjectPositionTween("Out", 544, 722, "easeOutQuad", 600, true);
}
}}
gdjs._57Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs._57Code.GDLevel_95NameObjects1) asyncObjectsList.addObject("Level_Name", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._57Code.asyncCallback8618356(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._57Code.eventsList1 = function(runtimeScene) {

{



}


{


gdjs._57Code.condition0IsTrue_0.val = false;
{
gdjs._57Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs._57Code.condition0IsTrue_0.val) {
gdjs._57Code.GDTransitionObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDTransitionObjects2Objects, 0, 0, "");
}{for(var i = 0, len = gdjs._57Code.GDTransitionObjects2.length ;i < len;++i) {
    gdjs._57Code.GDTransitionObjects2[i].setSize(1280, 720);
}
}{for(var i = 0, len = gdjs._57Code.GDTransitionObjects2.length ;i < len;++i) {
    gdjs._57Code.GDTransitionObjects2[i].getBehavior("Tween").addObjectPositionXTween("In", 1280, "easeOutQuad", 600, false);
}
}}

}


{



}


{


gdjs._57Code.condition0IsTrue_0.val = false;
{
gdjs._57Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs._57Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Level_Name"), gdjs._57Code.GDLevel_95NameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._57Code.GDPlayerObjects1);
gdjs._57Code.GDBackgrouundObjects1.length = 0;

{gdjs.evtTools.camera.showLayer(runtimeScene, "Overscreen");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDBackgrouundObjects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs._57Code.GDBackgrouundObjects1.length ;i < len;++i) {
    gdjs._57Code.GDBackgrouundObjects1[i].setSize(1280, 720);
}
}{for(var i = 0, len = gdjs._57Code.GDBackgrouundObjects1.length ;i < len;++i) {
    gdjs._57Code.GDBackgrouundObjects1[i].setOpacity(20);
}
}{for(var i = 0, len = gdjs._57Code.GDBackgrouundObjects1.length ;i < len;++i) {
    gdjs._57Code.GDBackgrouundObjects1[i].setZOrder(-(999999999999999999999));
}
}{for(var i = 0, len = gdjs._57Code.GDLevel_95NameObjects1.length ;i < len;++i) {
    gdjs._57Code.GDLevel_95NameObjects1[i].setZOrder(100000000000000000000000);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{for(var i = 0, len = gdjs._57Code.GDLevel_95NameObjects1.length ;i < len;++i) {
    gdjs._57Code.GDLevel_95NameObjects1[i].setPosition(542,-(78));
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber((( gdjs._57Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs._57Code.GDPlayerObjects1[0].getPointX("")));
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber((( gdjs._57Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs._57Code.GDPlayerObjects1[0].getPointY("")));
}{for(var i = 0, len = gdjs._57Code.GDLevel_95NameObjects1.length ;i < len;++i) {
    gdjs._57Code.GDLevel_95NameObjects1[i].setString("Level " + gdjs.evtTools.runtimeScene.getSceneName(runtimeScene));
}
}{for(var i = 0, len = gdjs._57Code.GDLevel_95NameObjects1.length ;i < len;++i) {
    gdjs._57Code.GDLevel_95NameObjects1[i].getBehavior("Tween").addObjectPositionTween("Start", 542, 354, "easeOutQuad", 600, false);
}
}
{ //Subevents
gdjs._57Code.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs._57Code.GDPlayerObjects2});
gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDGroundObjects2Objects = Hashtable.newFrom({"Ground": gdjs._57Code.GDGroundObjects2});
gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs._57Code.GDPlayerObjects3});
gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDLavaObjects3Objects = Hashtable.newFrom({"Lava": gdjs._57Code.GDLavaObjects3});
gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDSoulObjects2Objects = Hashtable.newFrom({"Soul": gdjs._57Code.GDSoulObjects2});
gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs._57Code.GDPlayerObjects3});
gdjs._57Code.asyncCallback8622108 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs._57Code.GDPlayerObjects3);

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDPlayerObjects3Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), "");
}{for(var i = 0, len = gdjs._57Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs._57Code.GDPlayerObjects3[i].setSize(48, 48);
}
}}
gdjs._57Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs._57Code.GDPlayerObjects2) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._57Code.asyncCallback8622108(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDPlayer2Objects3Objects = Hashtable.newFrom({"Player2": gdjs._57Code.GDPlayer2Objects3});
gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDLavaObjects3Objects = Hashtable.newFrom({"Lava": gdjs._57Code.GDLavaObjects3});
gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDSoulObjects2Objects = Hashtable.newFrom({"Soul": gdjs._57Code.GDSoulObjects2});
gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs._57Code.GDPlayerObjects3});
gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDNext_9595LevelObjects3Objects = Hashtable.newFrom({"Next_Level": gdjs._57Code.GDNext_95LevelObjects3});
gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDPlayer2Objects3Objects = Hashtable.newFrom({"Player2": gdjs._57Code.GDPlayer2Objects3});
gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDNext_9595LevelObjects3Objects = Hashtable.newFrom({"Next_Level": gdjs._57Code.GDNext_95LevelObjects3});
gdjs._57Code.asyncCallback8627060 = function (runtimeScene, asyncObjectsList) {
{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3))), false);
}}
gdjs._57Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._57Code.asyncCallback8627060(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDPlayer2Objects2Objects = Hashtable.newFrom({"Player2": gdjs._57Code.GDPlayer2Objects2});
gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs._57Code.GDPlayerObjects2});
gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs._57Code.GDPlayerObjects2});
gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs._57Code.GDPlayerObjects2});
gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDCollectableObjects2Objects = Hashtable.newFrom({"Collectable": gdjs._57Code.GDCollectableObjects2});
gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDPlayer2Objects2Objects = Hashtable.newFrom({"Player2": gdjs._57Code.GDPlayer2Objects2});
gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDCollectableObjects2Objects = Hashtable.newFrom({"Collectable": gdjs._57Code.GDCollectableObjects2});
gdjs._57Code.eventsList4 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs._57Code.GDGroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._57Code.GDPlayerObjects2);

gdjs._57Code.condition0IsTrue_0.val = false;
gdjs._57Code.condition1IsTrue_0.val = false;
{
gdjs._57Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDPlayerObjects2Objects, gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDGroundObjects2Objects, false, runtimeScene, false);
}if ( gdjs._57Code.condition0IsTrue_0.val ) {
{
{gdjs._57Code.conditionTrue_1 = gdjs._57Code.condition1IsTrue_0;
gdjs._57Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8619492);
}
}}
if (gdjs._57Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Land", false, 100, 1);
}}

}


{



}


{

gdjs._57Code.GDLavaObjects2.length = 0;

gdjs._57Code.GDPlayerObjects2.length = 0;


gdjs._57Code.condition0IsTrue_0.val = false;
{
{gdjs._57Code.conditionTrue_1 = gdjs._57Code.condition0IsTrue_0;
gdjs._57Code.GDLavaObjects2_1final.length = 0;gdjs._57Code.GDPlayerObjects2_1final.length = 0;gdjs._57Code.condition0IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Lava"), gdjs._57Code.GDLavaObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._57Code.GDPlayerObjects3);
gdjs._57Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDPlayerObjects3Objects, gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDLavaObjects3Objects, false, runtimeScene, false);
if( gdjs._57Code.condition0IsTrue_1.val ) {
    gdjs._57Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs._57Code.GDLavaObjects3.length;j<jLen;++j) {
        if ( gdjs._57Code.GDLavaObjects2_1final.indexOf(gdjs._57Code.GDLavaObjects3[j]) === -1 )
            gdjs._57Code.GDLavaObjects2_1final.push(gdjs._57Code.GDLavaObjects3[j]);
    }
    for(var j = 0, jLen = gdjs._57Code.GDPlayerObjects3.length;j<jLen;++j) {
        if ( gdjs._57Code.GDPlayerObjects2_1final.indexOf(gdjs._57Code.GDPlayerObjects3[j]) === -1 )
            gdjs._57Code.GDPlayerObjects2_1final.push(gdjs._57Code.GDPlayerObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs._57Code.GDLavaObjects2_1final, gdjs._57Code.GDLavaObjects2);
gdjs.copyArray(gdjs._57Code.GDPlayerObjects2_1final, gdjs._57Code.GDPlayerObjects2);
}
}
}if (gdjs._57Code.condition0IsTrue_0.val) {
/* Reuse gdjs._57Code.GDPlayerObjects2 */
gdjs._57Code.GDSoulObjects2.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "Player_Die.ogg", false, 100, 1);
}{for(var i = 0, len = gdjs._57Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._57Code.GDPlayerObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDSoulObjects2Objects, (( gdjs._57Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs._57Code.GDPlayerObjects2[0].getPointX("")), (( gdjs._57Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs._57Code.GDPlayerObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs._57Code.GDSoulObjects2.length ;i < len;++i) {
    gdjs._57Code.GDSoulObjects2[i].setAngle(270);
}
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.5, 0, 0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs._57Code.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs._57Code.GDLavaObjects2.length = 0;

gdjs._57Code.GDPlayer2Objects2.length = 0;


gdjs._57Code.condition0IsTrue_0.val = false;
{
{gdjs._57Code.conditionTrue_1 = gdjs._57Code.condition0IsTrue_0;
gdjs._57Code.GDLavaObjects2_1final.length = 0;gdjs._57Code.GDPlayer2Objects2_1final.length = 0;gdjs._57Code.condition0IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Lava"), gdjs._57Code.GDLavaObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs._57Code.GDPlayer2Objects3);
gdjs._57Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDPlayer2Objects3Objects, gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDLavaObjects3Objects, false, runtimeScene, false);
if( gdjs._57Code.condition0IsTrue_1.val ) {
    gdjs._57Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs._57Code.GDLavaObjects3.length;j<jLen;++j) {
        if ( gdjs._57Code.GDLavaObjects2_1final.indexOf(gdjs._57Code.GDLavaObjects3[j]) === -1 )
            gdjs._57Code.GDLavaObjects2_1final.push(gdjs._57Code.GDLavaObjects3[j]);
    }
    for(var j = 0, jLen = gdjs._57Code.GDPlayer2Objects3.length;j<jLen;++j) {
        if ( gdjs._57Code.GDPlayer2Objects2_1final.indexOf(gdjs._57Code.GDPlayer2Objects3[j]) === -1 )
            gdjs._57Code.GDPlayer2Objects2_1final.push(gdjs._57Code.GDPlayer2Objects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs._57Code.GDLavaObjects2_1final, gdjs._57Code.GDLavaObjects2);
gdjs.copyArray(gdjs._57Code.GDPlayer2Objects2_1final, gdjs._57Code.GDPlayer2Objects2);
}
}
}if (gdjs._57Code.condition0IsTrue_0.val) {
/* Reuse gdjs._57Code.GDPlayer2Objects2 */
gdjs._57Code.GDSoulObjects2.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "Player_Die.ogg", false, 100, 1);
}{for(var i = 0, len = gdjs._57Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs._57Code.GDPlayer2Objects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDSoulObjects2Objects, (( gdjs._57Code.GDPlayer2Objects2.length === 0 ) ? 0 :gdjs._57Code.GDPlayer2Objects2[0].getPointX("")), (( gdjs._57Code.GDPlayer2Objects2.length === 0 ) ? 0 :gdjs._57Code.GDPlayer2Objects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs._57Code.GDSoulObjects2.length ;i < len;++i) {
    gdjs._57Code.GDSoulObjects2[i].setAngle(270);
}
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.5, 0, 0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}}

}


{



}


{

gdjs._57Code.GDNext_95LevelObjects2.length = 0;

gdjs._57Code.GDPlayerObjects2.length = 0;

gdjs._57Code.GDPlayer2Objects2.length = 0;


gdjs._57Code.condition0IsTrue_0.val = false;
{
{gdjs._57Code.conditionTrue_1 = gdjs._57Code.condition0IsTrue_0;
gdjs._57Code.GDNext_95LevelObjects2_1final.length = 0;gdjs._57Code.GDPlayerObjects2_1final.length = 0;gdjs._57Code.GDPlayer2Objects2_1final.length = 0;gdjs._57Code.condition0IsTrue_1.val = false;
gdjs._57Code.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Next_Level"), gdjs._57Code.GDNext_95LevelObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._57Code.GDPlayerObjects3);
gdjs._57Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDPlayerObjects3Objects, gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDNext_9595LevelObjects3Objects, false, runtimeScene, false);
if( gdjs._57Code.condition0IsTrue_1.val ) {
    gdjs._57Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs._57Code.GDNext_95LevelObjects3.length;j<jLen;++j) {
        if ( gdjs._57Code.GDNext_95LevelObjects2_1final.indexOf(gdjs._57Code.GDNext_95LevelObjects3[j]) === -1 )
            gdjs._57Code.GDNext_95LevelObjects2_1final.push(gdjs._57Code.GDNext_95LevelObjects3[j]);
    }
    for(var j = 0, jLen = gdjs._57Code.GDPlayerObjects3.length;j<jLen;++j) {
        if ( gdjs._57Code.GDPlayerObjects2_1final.indexOf(gdjs._57Code.GDPlayerObjects3[j]) === -1 )
            gdjs._57Code.GDPlayerObjects2_1final.push(gdjs._57Code.GDPlayerObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Next_Level"), gdjs._57Code.GDNext_95LevelObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs._57Code.GDPlayer2Objects3);
gdjs._57Code.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDPlayer2Objects3Objects, gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDNext_9595LevelObjects3Objects, false, runtimeScene, false);
if( gdjs._57Code.condition1IsTrue_1.val ) {
    gdjs._57Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs._57Code.GDNext_95LevelObjects3.length;j<jLen;++j) {
        if ( gdjs._57Code.GDNext_95LevelObjects2_1final.indexOf(gdjs._57Code.GDNext_95LevelObjects3[j]) === -1 )
            gdjs._57Code.GDNext_95LevelObjects2_1final.push(gdjs._57Code.GDNext_95LevelObjects3[j]);
    }
    for(var j = 0, jLen = gdjs._57Code.GDPlayer2Objects3.length;j<jLen;++j) {
        if ( gdjs._57Code.GDPlayer2Objects2_1final.indexOf(gdjs._57Code.GDPlayer2Objects3[j]) === -1 )
            gdjs._57Code.GDPlayer2Objects2_1final.push(gdjs._57Code.GDPlayer2Objects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs._57Code.GDNext_95LevelObjects2_1final, gdjs._57Code.GDNext_95LevelObjects2);
gdjs.copyArray(gdjs._57Code.GDPlayerObjects2_1final, gdjs._57Code.GDPlayerObjects2);
gdjs.copyArray(gdjs._57Code.GDPlayer2Objects2_1final, gdjs._57Code.GDPlayer2Objects2);
}
}
}if (gdjs._57Code.condition0IsTrue_0.val) {
/* Reuse gdjs._57Code.GDNext_95LevelObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs._57Code.GDTransitionObjects2);
{for(var i = 0, len = gdjs._57Code.GDTransitionObjects2.length ;i < len;++i) {
    gdjs._57Code.GDTransitionObjects2[i].setX(-(1280));
}
}{for(var i = 0, len = gdjs._57Code.GDTransitionObjects2.length ;i < len;++i) {
    gdjs._57Code.GDTransitionObjects2[i].getBehavior("Tween").addObjectPositionXTween("Out", 0, "easeInQuad", 500, false);
}
}{for(var i = 0, len = gdjs._57Code.GDNext_95LevelObjects2.length ;i < len;++i) {
    gdjs._57Code.GDNext_95LevelObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs._57Code.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._57Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs._57Code.GDPlayer2Objects2);

gdjs._57Code.condition0IsTrue_0.val = false;
{
gdjs._57Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDPlayer2Objects2Objects, gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDPlayerObjects2Objects, false, runtimeScene, false);
}if (gdjs._57Code.condition0IsTrue_0.val) {
/* Reuse gdjs._57Code.GDPlayerObjects2 */
/* Reuse gdjs._57Code.GDPlayer2Objects2 */
{for(var i = 0, len = gdjs._57Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs._57Code.GDPlayer2Objects2[i].separateFromObjectsList(gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDPlayerObjects2Objects, false);
}
}}

}


{



}


{

gdjs._57Code.GDCollectableObjects1.length = 0;

gdjs._57Code.GDPlayerObjects1.length = 0;

gdjs._57Code.GDPlayer2Objects1.length = 0;


gdjs._57Code.condition0IsTrue_0.val = false;
{
{gdjs._57Code.conditionTrue_1 = gdjs._57Code.condition0IsTrue_0;
gdjs._57Code.GDCollectableObjects1_1final.length = 0;gdjs._57Code.GDPlayerObjects1_1final.length = 0;gdjs._57Code.GDPlayer2Objects1_1final.length = 0;gdjs._57Code.condition0IsTrue_1.val = false;
gdjs._57Code.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Collectable"), gdjs._57Code.GDCollectableObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._57Code.GDPlayerObjects2);
gdjs._57Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDPlayerObjects2Objects, gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDCollectableObjects2Objects, false, runtimeScene, false);
if( gdjs._57Code.condition0IsTrue_1.val ) {
    gdjs._57Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs._57Code.GDCollectableObjects2.length;j<jLen;++j) {
        if ( gdjs._57Code.GDCollectableObjects1_1final.indexOf(gdjs._57Code.GDCollectableObjects2[j]) === -1 )
            gdjs._57Code.GDCollectableObjects1_1final.push(gdjs._57Code.GDCollectableObjects2[j]);
    }
    for(var j = 0, jLen = gdjs._57Code.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs._57Code.GDPlayerObjects1_1final.indexOf(gdjs._57Code.GDPlayerObjects2[j]) === -1 )
            gdjs._57Code.GDPlayerObjects1_1final.push(gdjs._57Code.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Collectable"), gdjs._57Code.GDCollectableObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs._57Code.GDPlayer2Objects2);
gdjs._57Code.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDPlayer2Objects2Objects, gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDCollectableObjects2Objects, false, runtimeScene, false);
if( gdjs._57Code.condition1IsTrue_1.val ) {
    gdjs._57Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs._57Code.GDCollectableObjects2.length;j<jLen;++j) {
        if ( gdjs._57Code.GDCollectableObjects1_1final.indexOf(gdjs._57Code.GDCollectableObjects2[j]) === -1 )
            gdjs._57Code.GDCollectableObjects1_1final.push(gdjs._57Code.GDCollectableObjects2[j]);
    }
    for(var j = 0, jLen = gdjs._57Code.GDPlayer2Objects2.length;j<jLen;++j) {
        if ( gdjs._57Code.GDPlayer2Objects1_1final.indexOf(gdjs._57Code.GDPlayer2Objects2[j]) === -1 )
            gdjs._57Code.GDPlayer2Objects1_1final.push(gdjs._57Code.GDPlayer2Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs._57Code.GDCollectableObjects1_1final, gdjs._57Code.GDCollectableObjects1);
gdjs.copyArray(gdjs._57Code.GDPlayerObjects1_1final, gdjs._57Code.GDPlayerObjects1);
gdjs.copyArray(gdjs._57Code.GDPlayer2Objects1_1final, gdjs._57Code.GDPlayer2Objects1);
}
}
}if (gdjs._57Code.condition0IsTrue_0.val) {
/* Reuse gdjs._57Code.GDCollectableObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(4).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Collectable.ogg", false, 60, 1);
}{for(var i = 0, len = gdjs._57Code.GDCollectableObjects1.length ;i < len;++i) {
    gdjs._57Code.GDCollectableObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.5, 0, 0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDSepperateObjects2Objects = Hashtable.newFrom({"Sepperate": gdjs._57Code.GDSepperateObjects2});
gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDPlayer2Objects2Objects = Hashtable.newFrom({"Player2": gdjs._57Code.GDPlayer2Objects2});
gdjs._57Code.asyncCallback8635276 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Player2"), gdjs._57Code.GDPlayer2Objects3);

{for(var i = 0, len = gdjs._57Code.GDPlayer2Objects3.length ;i < len;++i) {
    gdjs._57Code.GDPlayer2Objects3[i].getBehavior("PlatformerObject").setCanJump();
}
}}
gdjs._57Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs._57Code.GDPlayer2Objects2) asyncObjectsList.addObject("Player2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs._57Code.asyncCallback8635276(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDSepperateObjects2Objects = Hashtable.newFrom({"Sepperate": gdjs._57Code.GDSepperateObjects2});
gdjs._57Code.asyncCallback8639572 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Player2"), gdjs._57Code.GDPlayer2Objects3);

{for(var i = 0, len = gdjs._57Code.GDPlayer2Objects3.length ;i < len;++i) {
    gdjs._57Code.GDPlayer2Objects3[i].deleteFromScene(runtimeScene);
}
}}
gdjs._57Code.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs._57Code.GDPlayer2Objects2) asyncObjectsList.addObject("Player2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs._57Code.asyncCallback8639572(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._57Code.eventsList7 = function(runtimeScene) {

{



}


{


gdjs._57Code.condition0IsTrue_0.val = false;
gdjs._57Code.condition1IsTrue_0.val = false;
{
{gdjs._57Code.conditionTrue_1 = gdjs._57Code.condition0IsTrue_0;
gdjs._57Code.condition0IsTrue_1.val = false;
gdjs._57Code.condition1IsTrue_1.val = false;
{
gdjs._57Code.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs._57Code.condition0IsTrue_1.val ) {
    gdjs._57Code.conditionTrue_1.val = true;
}
}
{
gdjs._57Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "q");
if( gdjs._57Code.condition1IsTrue_1.val ) {
    gdjs._57Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs._57Code.condition0IsTrue_0.val ) {
{
gdjs._57Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}}
if (gdjs._57Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._57Code.GDPlayerObjects2);
gdjs._57Code.GDPlayer2Objects2.length = 0;

gdjs._57Code.GDSepperateObjects2.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "Sepperate.ogg", false, 100, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDSepperateObjects2Objects, (( gdjs._57Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs._57Code.GDPlayerObjects2[0].getPointX("")), (( gdjs._57Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs._57Code.GDPlayerObjects2[0].getPointY("")) + 12, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDPlayer2Objects2Objects, (( gdjs._57Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs._57Code.GDPlayerObjects2[0].getPointX("")), (( gdjs._57Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs._57Code.GDPlayerObjects2[0].getPointY("")) + 12, "");
}{for(var i = 0, len = gdjs._57Code.GDSepperateObjects2.length ;i < len;++i) {
    gdjs._57Code.GDSepperateObjects2[i].setAngle(270);
}
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.5, 0, 0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs._57Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs._57Code.GDPlayer2Objects2[i].getBehavior("Tween").addObjectPositionYTween("Create", (( gdjs._57Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs._57Code.GDPlayerObjects2[0].getPointY("")) - 90, "easeOutQuad", 300, false);
}
}{for(var i = 0, len = gdjs._57Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs._57Code.GDPlayer2Objects2[i].setSize(48, 48);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}
{ //Subevents
gdjs._57Code.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs._57Code.condition0IsTrue_0.val = false;
gdjs._57Code.condition1IsTrue_0.val = false;
{
gdjs._57Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if ( gdjs._57Code.condition0IsTrue_0.val ) {
{
{gdjs._57Code.conditionTrue_1 = gdjs._57Code.condition1IsTrue_0;
gdjs._57Code.condition0IsTrue_1.val = false;
gdjs._57Code.condition1IsTrue_1.val = false;
{
gdjs._57Code.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
if( gdjs._57Code.condition0IsTrue_1.val ) {
    gdjs._57Code.conditionTrue_1.val = true;
}
}
{
gdjs._57Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "e");
if( gdjs._57Code.condition1IsTrue_1.val ) {
    gdjs._57Code.conditionTrue_1.val = true;
}
}
{
}
}
}}
if (gdjs._57Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._57Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs._57Code.GDPlayer2Objects2);
gdjs._57Code.GDSepperateObjects2.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "Reverse_Sepperate.ogg", false, 100, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._57Code.mapOfGDgdjs_46_9557Code_46GDSepperateObjects2Objects, (( gdjs._57Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs._57Code.GDPlayerObjects2[0].getPointX("")), (( gdjs._57Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs._57Code.GDPlayerObjects2[0].getPointY("")) + 12, "");
}{for(var i = 0, len = gdjs._57Code.GDSepperateObjects2.length ;i < len;++i) {
    gdjs._57Code.GDSepperateObjects2[i].setAngle(270);
}
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.5, 0, 0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs._57Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs._57Code.GDPlayer2Objects2[i].getBehavior("Tween").addObjectScaleTween("Destroy", 0, 0, "easeOutQuad", 300, false, false);
}
}{for(var i = 0, len = gdjs._57Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs._57Code.GDPlayer2Objects2[i].getBehavior("Tween").addObjectPositionTween("Destroy2", (( gdjs._57Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs._57Code.GDPlayerObjects2[0].getPointX("")), (( gdjs._57Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs._57Code.GDPlayerObjects2[0].getPointY("")), "easeOutQuad", 300, false);
}
}{for(var i = 0, len = gdjs._57Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs._57Code.GDPlayer2Objects2[i].activateBehavior("PlatformerObject", false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}
{ //Subevents
gdjs._57Code.eventsList6(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs._57Code.condition0IsTrue_0.val = false;
{
{gdjs._57Code.conditionTrue_1 = gdjs._57Code.condition0IsTrue_0;
gdjs._57Code.condition0IsTrue_1.val = false;
gdjs._57Code.condition1IsTrue_1.val = false;
{
gdjs._57Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs._57Code.condition0IsTrue_1.val ) {
    gdjs._57Code.conditionTrue_1.val = true;
}
}
{
gdjs._57Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs._57Code.condition1IsTrue_1.val ) {
    gdjs._57Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs._57Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._57Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs._57Code.GDPlayer2Objects2);
{for(var i = 0, len = gdjs._57Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._57Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs._57Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs._57Code.GDPlayer2Objects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs._57Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._57Code.GDPlayerObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs._57Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs._57Code.GDPlayer2Objects2[i].flipX(false);
}
}}

}


{



}


{


gdjs._57Code.condition0IsTrue_0.val = false;
{
{gdjs._57Code.conditionTrue_1 = gdjs._57Code.condition0IsTrue_0;
gdjs._57Code.condition0IsTrue_1.val = false;
gdjs._57Code.condition1IsTrue_1.val = false;
{
gdjs._57Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs._57Code.condition0IsTrue_1.val ) {
    gdjs._57Code.conditionTrue_1.val = true;
}
}
{
gdjs._57Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs._57Code.condition1IsTrue_1.val ) {
    gdjs._57Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs._57Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._57Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs._57Code.GDPlayer2Objects2);
{for(var i = 0, len = gdjs._57Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._57Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs._57Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs._57Code.GDPlayer2Objects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs._57Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._57Code.GDPlayerObjects2[i].flipX(true);
}
}{for(var i = 0, len = gdjs._57Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs._57Code.GDPlayer2Objects2[i].flipX(true);
}
}}

}


{



}


{


gdjs._57Code.condition0IsTrue_0.val = false;
{
{gdjs._57Code.conditionTrue_1 = gdjs._57Code.condition0IsTrue_0;
gdjs._57Code.condition0IsTrue_1.val = false;
gdjs._57Code.condition1IsTrue_1.val = false;
gdjs._57Code.condition2IsTrue_1.val = false;
{
gdjs._57Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs._57Code.condition0IsTrue_1.val ) {
    gdjs._57Code.conditionTrue_1.val = true;
}
}
{
gdjs._57Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs._57Code.condition1IsTrue_1.val ) {
    gdjs._57Code.conditionTrue_1.val = true;
}
}
{
gdjs._57Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs._57Code.condition2IsTrue_1.val ) {
    gdjs._57Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs._57Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._57Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs._57Code.GDPlayer2Objects1);
{for(var i = 0, len = gdjs._57Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._57Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs._57Code.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs._57Code.GDPlayer2Objects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};gdjs._57Code.eventsList8 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._57Code.GDPlayerObjects2);

gdjs._57Code.condition0IsTrue_0.val = false;
gdjs._57Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._57Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs._57Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs._57Code.condition0IsTrue_0.val = true;
        gdjs._57Code.GDPlayerObjects2[k] = gdjs._57Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs._57Code.GDPlayerObjects2.length = k;}if ( gdjs._57Code.condition0IsTrue_0.val ) {
{
{gdjs._57Code.conditionTrue_1 = gdjs._57Code.condition1IsTrue_0;
gdjs._57Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8647196);
}
}}
if (gdjs._57Code.condition1IsTrue_0.val) {
/* Reuse gdjs._57Code.GDPlayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs._57Code.GDPlayer2Objects2);
{for(var i = 0, len = gdjs._57Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._57Code.GDPlayerObjects2[i].setAnimationName("Walk");
}
}{for(var i = 0, len = gdjs._57Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs._57Code.GDPlayer2Objects2[i].setAnimationName("Walk");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._57Code.GDPlayerObjects1);

gdjs._57Code.condition0IsTrue_0.val = false;
gdjs._57Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._57Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs._57Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        gdjs._57Code.condition0IsTrue_0.val = true;
        gdjs._57Code.GDPlayerObjects1[k] = gdjs._57Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs._57Code.GDPlayerObjects1.length = k;}if ( gdjs._57Code.condition0IsTrue_0.val ) {
{
{gdjs._57Code.conditionTrue_1 = gdjs._57Code.condition1IsTrue_0;
gdjs._57Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8648900);
}
}}
if (gdjs._57Code.condition1IsTrue_0.val) {
/* Reuse gdjs._57Code.GDPlayerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs._57Code.GDPlayer2Objects1);
{for(var i = 0, len = gdjs._57Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._57Code.GDPlayerObjects1[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs._57Code.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs._57Code.GDPlayer2Objects1[i].setAnimationName("Idle");
}
}}

}


};gdjs._57Code.eventsList9 = function(runtimeScene) {

{


gdjs._57Code.condition0IsTrue_0.val = false;
{
gdjs._57Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs._57Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(9);
}}

}


{



}


{



}


{


gdjs._57Code.eventsList1(runtimeScene);
}


{


gdjs._57Code.eventsList4(runtimeScene);
}


{


gdjs._57Code.eventsList7(runtimeScene);
}


{


gdjs._57Code.eventsList8(runtimeScene);
}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Backgrouund"), gdjs._57Code.GDBackgrouundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Collectable"), gdjs._57Code.GDCollectableObjects1);
{for(var i = 0, len = gdjs._57Code.GDCollectableObjects1.length ;i < len;++i) {
    gdjs._57Code.GDCollectableObjects1[i].rotate(90, runtimeScene);
}
}{for(var i = 0, len = gdjs._57Code.GDBackgrouundObjects1.length ;i < len;++i) {
    gdjs._57Code.GDBackgrouundObjects1[i].setXOffset(gdjs._57Code.GDBackgrouundObjects1[i].getXOffset() + (2));
}
}}

}


};

gdjs._57Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._57Code.GDGroundObjects1.length = 0;
gdjs._57Code.GDGroundObjects2.length = 0;
gdjs._57Code.GDGroundObjects3.length = 0;
gdjs._57Code.GDPlayerObjects1.length = 0;
gdjs._57Code.GDPlayerObjects2.length = 0;
gdjs._57Code.GDPlayerObjects3.length = 0;
gdjs._57Code.GDPlayer2Objects1.length = 0;
gdjs._57Code.GDPlayer2Objects2.length = 0;
gdjs._57Code.GDPlayer2Objects3.length = 0;
gdjs._57Code.GDLavaObjects1.length = 0;
gdjs._57Code.GDLavaObjects2.length = 0;
gdjs._57Code.GDLavaObjects3.length = 0;
gdjs._57Code.GDSoulObjects1.length = 0;
gdjs._57Code.GDSoulObjects2.length = 0;
gdjs._57Code.GDSoulObjects3.length = 0;
gdjs._57Code.GDSepperateObjects1.length = 0;
gdjs._57Code.GDSepperateObjects2.length = 0;
gdjs._57Code.GDSepperateObjects3.length = 0;
gdjs._57Code.GDOverScreenObjects1.length = 0;
gdjs._57Code.GDOverScreenObjects2.length = 0;
gdjs._57Code.GDOverScreenObjects3.length = 0;
gdjs._57Code.GDNext_95LevelObjects1.length = 0;
gdjs._57Code.GDNext_95LevelObjects2.length = 0;
gdjs._57Code.GDNext_95LevelObjects3.length = 0;
gdjs._57Code.GDLevel_95NameObjects1.length = 0;
gdjs._57Code.GDLevel_95NameObjects2.length = 0;
gdjs._57Code.GDLevel_95NameObjects3.length = 0;
gdjs._57Code.GDTut_95TextObjects1.length = 0;
gdjs._57Code.GDTut_95TextObjects2.length = 0;
gdjs._57Code.GDTut_95TextObjects3.length = 0;
gdjs._57Code.GDCollectableObjects1.length = 0;
gdjs._57Code.GDCollectableObjects2.length = 0;
gdjs._57Code.GDCollectableObjects3.length = 0;
gdjs._57Code.GDBackgrouundObjects1.length = 0;
gdjs._57Code.GDBackgrouundObjects2.length = 0;
gdjs._57Code.GDBackgrouundObjects3.length = 0;
gdjs._57Code.GDTransitionObjects1.length = 0;
gdjs._57Code.GDTransitionObjects2.length = 0;
gdjs._57Code.GDTransitionObjects3.length = 0;
gdjs._57Code.GDLevel_95NameObjects1.length = 0;
gdjs._57Code.GDLevel_95NameObjects2.length = 0;
gdjs._57Code.GDLevel_95NameObjects3.length = 0;
gdjs._57Code.GDNext_95LevelObjects1.length = 0;
gdjs._57Code.GDNext_95LevelObjects2.length = 0;
gdjs._57Code.GDNext_95LevelObjects3.length = 0;

gdjs._57Code.eventsList9(runtimeScene);

return;

}

gdjs['_57Code'] = gdjs._57Code;
