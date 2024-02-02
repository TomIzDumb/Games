gdjs._492Code = {};
gdjs._492Code.GDBulletObjects1_1final = [];

gdjs._492Code.GDCollectableObjects1_1final = [];

gdjs._492Code.GDDelete_95BulletObjects1_1final = [];

gdjs._492Code.GDGroundObjects1_1final = [];

gdjs._492Code.GDLavaObjects2_1final = [];

gdjs._492Code.GDNext_95LevelObjects2_1final = [];

gdjs._492Code.GDPlayer2Objects1_1final = [];

gdjs._492Code.GDPlayer2Objects2_1final = [];

gdjs._492Code.GDPlayerObjects1_1final = [];

gdjs._492Code.GDPlayerObjects2_1final = [];

gdjs._492Code.GDGroundObjects1= [];
gdjs._492Code.GDGroundObjects2= [];
gdjs._492Code.GDGroundObjects3= [];
gdjs._492Code.GDPlayerObjects1= [];
gdjs._492Code.GDPlayerObjects2= [];
gdjs._492Code.GDPlayerObjects3= [];
gdjs._492Code.GDPlayer2Objects1= [];
gdjs._492Code.GDPlayer2Objects2= [];
gdjs._492Code.GDPlayer2Objects3= [];
gdjs._492Code.GDLavaObjects1= [];
gdjs._492Code.GDLavaObjects2= [];
gdjs._492Code.GDLavaObjects3= [];
gdjs._492Code.GDSoulObjects1= [];
gdjs._492Code.GDSoulObjects2= [];
gdjs._492Code.GDSoulObjects3= [];
gdjs._492Code.GDSepperateObjects1= [];
gdjs._492Code.GDSepperateObjects2= [];
gdjs._492Code.GDSepperateObjects3= [];
gdjs._492Code.GDOverScreenObjects1= [];
gdjs._492Code.GDOverScreenObjects2= [];
gdjs._492Code.GDOverScreenObjects3= [];
gdjs._492Code.GDNext_95LevelObjects1= [];
gdjs._492Code.GDNext_95LevelObjects2= [];
gdjs._492Code.GDNext_95LevelObjects3= [];
gdjs._492Code.GDLevel_95NameObjects1= [];
gdjs._492Code.GDLevel_95NameObjects2= [];
gdjs._492Code.GDLevel_95NameObjects3= [];
gdjs._492Code.GDTut_95TextObjects1= [];
gdjs._492Code.GDTut_95TextObjects2= [];
gdjs._492Code.GDTut_95TextObjects3= [];
gdjs._492Code.GDCollectableObjects1= [];
gdjs._492Code.GDCollectableObjects2= [];
gdjs._492Code.GDCollectableObjects3= [];
gdjs._492Code.GDBackgrouundObjects1= [];
gdjs._492Code.GDBackgrouundObjects2= [];
gdjs._492Code.GDBackgrouundObjects3= [];
gdjs._492Code.GDTransitionObjects1= [];
gdjs._492Code.GDTransitionObjects2= [];
gdjs._492Code.GDTransitionObjects3= [];
gdjs._492Code.GDLevel_95NameObjects1= [];
gdjs._492Code.GDLevel_95NameObjects2= [];
gdjs._492Code.GDLevel_95NameObjects3= [];
gdjs._492Code.GDNext_95LevelObjects1= [];
gdjs._492Code.GDNext_95LevelObjects2= [];
gdjs._492Code.GDNext_95LevelObjects3= [];
gdjs._492Code.GDBossObjects1= [];
gdjs._492Code.GDBossObjects2= [];
gdjs._492Code.GDBossObjects3= [];
gdjs._492Code.GDBulletObjects1= [];
gdjs._492Code.GDBulletObjects2= [];
gdjs._492Code.GDBulletObjects3= [];
gdjs._492Code.GDDelete_95BulletObjects1= [];
gdjs._492Code.GDDelete_95BulletObjects2= [];
gdjs._492Code.GDDelete_95BulletObjects3= [];
gdjs._492Code.GDButtonObjects1= [];
gdjs._492Code.GDButtonObjects2= [];
gdjs._492Code.GDButtonObjects3= [];
gdjs._492Code.GDExplode_95BossObjects1= [];
gdjs._492Code.GDExplode_95BossObjects2= [];
gdjs._492Code.GDExplode_95BossObjects3= [];

gdjs._492Code.conditionTrue_0 = {val:false};
gdjs._492Code.condition0IsTrue_0 = {val:false};
gdjs._492Code.condition1IsTrue_0 = {val:false};
gdjs._492Code.condition2IsTrue_0 = {val:false};
gdjs._492Code.condition3IsTrue_0 = {val:false};
gdjs._492Code.condition4IsTrue_0 = {val:false};
gdjs._492Code.conditionTrue_1 = {val:false};
gdjs._492Code.condition0IsTrue_1 = {val:false};
gdjs._492Code.condition1IsTrue_1 = {val:false};
gdjs._492Code.condition2IsTrue_1 = {val:false};
gdjs._492Code.condition3IsTrue_1 = {val:false};
gdjs._492Code.condition4IsTrue_1 = {val:false};


gdjs._492Code.asyncCallback8523076 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs._492Code.GDPlayerObjects2);

{for(var i = 0, len = gdjs._492Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._492Code.GDPlayerObjects2[i].activateBehavior("PlatformerObject", true);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BulletRate");
}}
gdjs._492Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs._492Code.GDPlayerObjects1) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs._492Code.asyncCallback8523076(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDTransitionObjects2Objects = Hashtable.newFrom({"Transition": gdjs._492Code.GDTransitionObjects2});
gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDBackgrouundObjects1Objects = Hashtable.newFrom({"Backgrouund": gdjs._492Code.GDBackgrouundObjects1});
gdjs._492Code.asyncCallback8618356 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Level_Name"), gdjs._492Code.GDLevel_95NameObjects2);

{for(var i = 0, len = gdjs._492Code.GDLevel_95NameObjects2.length ;i < len;++i) {
    gdjs._492Code.GDLevel_95NameObjects2[i].getBehavior("Tween").addObjectPositionTween("Out", 544, 722, "easeOutQuad", 600, true);
}
}}
gdjs._492Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs._492Code.GDLevel_95NameObjects1) asyncObjectsList.addObject("Level_Name", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._492Code.asyncCallback8618356(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._492Code.eventsList2 = function(runtimeScene) {

{



}


{


gdjs._492Code.condition0IsTrue_0.val = false;
{
gdjs._492Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs._492Code.condition0IsTrue_0.val) {
gdjs._492Code.GDTransitionObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDTransitionObjects2Objects, 0, 0, "");
}{for(var i = 0, len = gdjs._492Code.GDTransitionObjects2.length ;i < len;++i) {
    gdjs._492Code.GDTransitionObjects2[i].setSize(1280, 720);
}
}{for(var i = 0, len = gdjs._492Code.GDTransitionObjects2.length ;i < len;++i) {
    gdjs._492Code.GDTransitionObjects2[i].getBehavior("Tween").addObjectPositionXTween("In", 1280, "easeOutQuad", 600, false);
}
}}

}


{



}


{


gdjs._492Code.condition0IsTrue_0.val = false;
{
gdjs._492Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs._492Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Level_Name"), gdjs._492Code.GDLevel_95NameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._492Code.GDPlayerObjects1);
gdjs._492Code.GDBackgrouundObjects1.length = 0;

{gdjs.evtTools.camera.showLayer(runtimeScene, "Overscreen");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDBackgrouundObjects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs._492Code.GDBackgrouundObjects1.length ;i < len;++i) {
    gdjs._492Code.GDBackgrouundObjects1[i].setSize(1280, 720);
}
}{for(var i = 0, len = gdjs._492Code.GDBackgrouundObjects1.length ;i < len;++i) {
    gdjs._492Code.GDBackgrouundObjects1[i].setOpacity(20);
}
}{for(var i = 0, len = gdjs._492Code.GDBackgrouundObjects1.length ;i < len;++i) {
    gdjs._492Code.GDBackgrouundObjects1[i].setZOrder(-(999999999999999999999));
}
}{for(var i = 0, len = gdjs._492Code.GDLevel_95NameObjects1.length ;i < len;++i) {
    gdjs._492Code.GDLevel_95NameObjects1[i].setZOrder(100000000000000000000000);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{for(var i = 0, len = gdjs._492Code.GDLevel_95NameObjects1.length ;i < len;++i) {
    gdjs._492Code.GDLevel_95NameObjects1[i].setPosition(542,-(78));
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber((( gdjs._492Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs._492Code.GDPlayerObjects1[0].getPointX("")));
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber((( gdjs._492Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs._492Code.GDPlayerObjects1[0].getPointY("")));
}{for(var i = 0, len = gdjs._492Code.GDLevel_95NameObjects1.length ;i < len;++i) {
    gdjs._492Code.GDLevel_95NameObjects1[i].setString("Level " + gdjs.evtTools.runtimeScene.getSceneName(runtimeScene));
}
}{for(var i = 0, len = gdjs._492Code.GDLevel_95NameObjects1.length ;i < len;++i) {
    gdjs._492Code.GDLevel_95NameObjects1[i].getBehavior("Tween").addObjectPositionTween("Start", 542, 354, "easeOutQuad", 600, false);
}
}
{ //Subevents
gdjs._492Code.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs._492Code.GDPlayerObjects2});
gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDGroundObjects2Objects = Hashtable.newFrom({"Ground": gdjs._492Code.GDGroundObjects2});
gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs._492Code.GDPlayerObjects3});
gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDLavaObjects3Objects = Hashtable.newFrom({"Lava": gdjs._492Code.GDLavaObjects3});
gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDSoulObjects2Objects = Hashtable.newFrom({"Soul": gdjs._492Code.GDSoulObjects2});
gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs._492Code.GDPlayerObjects3});
gdjs._492Code.asyncCallback8622108 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs._492Code.GDPlayerObjects3);

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDPlayerObjects3Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), "");
}{for(var i = 0, len = gdjs._492Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs._492Code.GDPlayerObjects3[i].setSize(48, 48);
}
}}
gdjs._492Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs._492Code.GDPlayerObjects2) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._492Code.asyncCallback8622108(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDPlayer2Objects3Objects = Hashtable.newFrom({"Player2": gdjs._492Code.GDPlayer2Objects3});
gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDLavaObjects3Objects = Hashtable.newFrom({"Lava": gdjs._492Code.GDLavaObjects3});
gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDSoulObjects2Objects = Hashtable.newFrom({"Soul": gdjs._492Code.GDSoulObjects2});
gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs._492Code.GDPlayerObjects3});
gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDNext_9595LevelObjects3Objects = Hashtable.newFrom({"Next_Level": gdjs._492Code.GDNext_95LevelObjects3});
gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDPlayer2Objects3Objects = Hashtable.newFrom({"Player2": gdjs._492Code.GDPlayer2Objects3});
gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDNext_9595LevelObjects3Objects = Hashtable.newFrom({"Next_Level": gdjs._492Code.GDNext_95LevelObjects3});
gdjs._492Code.asyncCallback8627060 = function (runtimeScene, asyncObjectsList) {
{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3))), false);
}}
gdjs._492Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._492Code.asyncCallback8627060(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDPlayer2Objects2Objects = Hashtable.newFrom({"Player2": gdjs._492Code.GDPlayer2Objects2});
gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs._492Code.GDPlayerObjects2});
gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs._492Code.GDPlayerObjects2});
gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs._492Code.GDPlayerObjects2});
gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDCollectableObjects2Objects = Hashtable.newFrom({"Collectable": gdjs._492Code.GDCollectableObjects2});
gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDPlayer2Objects2Objects = Hashtable.newFrom({"Player2": gdjs._492Code.GDPlayer2Objects2});
gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDCollectableObjects2Objects = Hashtable.newFrom({"Collectable": gdjs._492Code.GDCollectableObjects2});
gdjs._492Code.eventsList5 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs._492Code.GDGroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._492Code.GDPlayerObjects2);

gdjs._492Code.condition0IsTrue_0.val = false;
gdjs._492Code.condition1IsTrue_0.val = false;
{
gdjs._492Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDPlayerObjects2Objects, gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDGroundObjects2Objects, false, runtimeScene, false);
}if ( gdjs._492Code.condition0IsTrue_0.val ) {
{
{gdjs._492Code.conditionTrue_1 = gdjs._492Code.condition1IsTrue_0;
gdjs._492Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8619492);
}
}}
if (gdjs._492Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Land", false, 100, 1);
}}

}


{



}


{

gdjs._492Code.GDLavaObjects2.length = 0;

gdjs._492Code.GDPlayerObjects2.length = 0;


gdjs._492Code.condition0IsTrue_0.val = false;
{
{gdjs._492Code.conditionTrue_1 = gdjs._492Code.condition0IsTrue_0;
gdjs._492Code.GDLavaObjects2_1final.length = 0;gdjs._492Code.GDPlayerObjects2_1final.length = 0;gdjs._492Code.condition0IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Lava"), gdjs._492Code.GDLavaObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._492Code.GDPlayerObjects3);
gdjs._492Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDPlayerObjects3Objects, gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDLavaObjects3Objects, false, runtimeScene, false);
if( gdjs._492Code.condition0IsTrue_1.val ) {
    gdjs._492Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs._492Code.GDLavaObjects3.length;j<jLen;++j) {
        if ( gdjs._492Code.GDLavaObjects2_1final.indexOf(gdjs._492Code.GDLavaObjects3[j]) === -1 )
            gdjs._492Code.GDLavaObjects2_1final.push(gdjs._492Code.GDLavaObjects3[j]);
    }
    for(var j = 0, jLen = gdjs._492Code.GDPlayerObjects3.length;j<jLen;++j) {
        if ( gdjs._492Code.GDPlayerObjects2_1final.indexOf(gdjs._492Code.GDPlayerObjects3[j]) === -1 )
            gdjs._492Code.GDPlayerObjects2_1final.push(gdjs._492Code.GDPlayerObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs._492Code.GDLavaObjects2_1final, gdjs._492Code.GDLavaObjects2);
gdjs.copyArray(gdjs._492Code.GDPlayerObjects2_1final, gdjs._492Code.GDPlayerObjects2);
}
}
}if (gdjs._492Code.condition0IsTrue_0.val) {
/* Reuse gdjs._492Code.GDPlayerObjects2 */
gdjs._492Code.GDSoulObjects2.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "Player_Die.ogg", false, 100, 1);
}{for(var i = 0, len = gdjs._492Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._492Code.GDPlayerObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDSoulObjects2Objects, (( gdjs._492Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs._492Code.GDPlayerObjects2[0].getPointX("")), (( gdjs._492Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs._492Code.GDPlayerObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs._492Code.GDSoulObjects2.length ;i < len;++i) {
    gdjs._492Code.GDSoulObjects2[i].setAngle(270);
}
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.5, 0, 0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs._492Code.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs._492Code.GDLavaObjects2.length = 0;

gdjs._492Code.GDPlayer2Objects2.length = 0;


gdjs._492Code.condition0IsTrue_0.val = false;
{
{gdjs._492Code.conditionTrue_1 = gdjs._492Code.condition0IsTrue_0;
gdjs._492Code.GDLavaObjects2_1final.length = 0;gdjs._492Code.GDPlayer2Objects2_1final.length = 0;gdjs._492Code.condition0IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Lava"), gdjs._492Code.GDLavaObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs._492Code.GDPlayer2Objects3);
gdjs._492Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDPlayer2Objects3Objects, gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDLavaObjects3Objects, false, runtimeScene, false);
if( gdjs._492Code.condition0IsTrue_1.val ) {
    gdjs._492Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs._492Code.GDLavaObjects3.length;j<jLen;++j) {
        if ( gdjs._492Code.GDLavaObjects2_1final.indexOf(gdjs._492Code.GDLavaObjects3[j]) === -1 )
            gdjs._492Code.GDLavaObjects2_1final.push(gdjs._492Code.GDLavaObjects3[j]);
    }
    for(var j = 0, jLen = gdjs._492Code.GDPlayer2Objects3.length;j<jLen;++j) {
        if ( gdjs._492Code.GDPlayer2Objects2_1final.indexOf(gdjs._492Code.GDPlayer2Objects3[j]) === -1 )
            gdjs._492Code.GDPlayer2Objects2_1final.push(gdjs._492Code.GDPlayer2Objects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs._492Code.GDLavaObjects2_1final, gdjs._492Code.GDLavaObjects2);
gdjs.copyArray(gdjs._492Code.GDPlayer2Objects2_1final, gdjs._492Code.GDPlayer2Objects2);
}
}
}if (gdjs._492Code.condition0IsTrue_0.val) {
/* Reuse gdjs._492Code.GDPlayer2Objects2 */
gdjs._492Code.GDSoulObjects2.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "Player_Die.ogg", false, 100, 1);
}{for(var i = 0, len = gdjs._492Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs._492Code.GDPlayer2Objects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDSoulObjects2Objects, (( gdjs._492Code.GDPlayer2Objects2.length === 0 ) ? 0 :gdjs._492Code.GDPlayer2Objects2[0].getPointX("")), (( gdjs._492Code.GDPlayer2Objects2.length === 0 ) ? 0 :gdjs._492Code.GDPlayer2Objects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs._492Code.GDSoulObjects2.length ;i < len;++i) {
    gdjs._492Code.GDSoulObjects2[i].setAngle(270);
}
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.5, 0, 0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}}

}


{



}


{

gdjs._492Code.GDNext_95LevelObjects2.length = 0;

gdjs._492Code.GDPlayerObjects2.length = 0;

gdjs._492Code.GDPlayer2Objects2.length = 0;


gdjs._492Code.condition0IsTrue_0.val = false;
{
{gdjs._492Code.conditionTrue_1 = gdjs._492Code.condition0IsTrue_0;
gdjs._492Code.GDNext_95LevelObjects2_1final.length = 0;gdjs._492Code.GDPlayerObjects2_1final.length = 0;gdjs._492Code.GDPlayer2Objects2_1final.length = 0;gdjs._492Code.condition0IsTrue_1.val = false;
gdjs._492Code.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Next_Level"), gdjs._492Code.GDNext_95LevelObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._492Code.GDPlayerObjects3);
gdjs._492Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDPlayerObjects3Objects, gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDNext_9595LevelObjects3Objects, false, runtimeScene, false);
if( gdjs._492Code.condition0IsTrue_1.val ) {
    gdjs._492Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs._492Code.GDNext_95LevelObjects3.length;j<jLen;++j) {
        if ( gdjs._492Code.GDNext_95LevelObjects2_1final.indexOf(gdjs._492Code.GDNext_95LevelObjects3[j]) === -1 )
            gdjs._492Code.GDNext_95LevelObjects2_1final.push(gdjs._492Code.GDNext_95LevelObjects3[j]);
    }
    for(var j = 0, jLen = gdjs._492Code.GDPlayerObjects3.length;j<jLen;++j) {
        if ( gdjs._492Code.GDPlayerObjects2_1final.indexOf(gdjs._492Code.GDPlayerObjects3[j]) === -1 )
            gdjs._492Code.GDPlayerObjects2_1final.push(gdjs._492Code.GDPlayerObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Next_Level"), gdjs._492Code.GDNext_95LevelObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs._492Code.GDPlayer2Objects3);
gdjs._492Code.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDPlayer2Objects3Objects, gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDNext_9595LevelObjects3Objects, false, runtimeScene, false);
if( gdjs._492Code.condition1IsTrue_1.val ) {
    gdjs._492Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs._492Code.GDNext_95LevelObjects3.length;j<jLen;++j) {
        if ( gdjs._492Code.GDNext_95LevelObjects2_1final.indexOf(gdjs._492Code.GDNext_95LevelObjects3[j]) === -1 )
            gdjs._492Code.GDNext_95LevelObjects2_1final.push(gdjs._492Code.GDNext_95LevelObjects3[j]);
    }
    for(var j = 0, jLen = gdjs._492Code.GDPlayer2Objects3.length;j<jLen;++j) {
        if ( gdjs._492Code.GDPlayer2Objects2_1final.indexOf(gdjs._492Code.GDPlayer2Objects3[j]) === -1 )
            gdjs._492Code.GDPlayer2Objects2_1final.push(gdjs._492Code.GDPlayer2Objects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs._492Code.GDNext_95LevelObjects2_1final, gdjs._492Code.GDNext_95LevelObjects2);
gdjs.copyArray(gdjs._492Code.GDPlayerObjects2_1final, gdjs._492Code.GDPlayerObjects2);
gdjs.copyArray(gdjs._492Code.GDPlayer2Objects2_1final, gdjs._492Code.GDPlayer2Objects2);
}
}
}if (gdjs._492Code.condition0IsTrue_0.val) {
/* Reuse gdjs._492Code.GDNext_95LevelObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs._492Code.GDTransitionObjects2);
{for(var i = 0, len = gdjs._492Code.GDTransitionObjects2.length ;i < len;++i) {
    gdjs._492Code.GDTransitionObjects2[i].setX(-(1280));
}
}{for(var i = 0, len = gdjs._492Code.GDTransitionObjects2.length ;i < len;++i) {
    gdjs._492Code.GDTransitionObjects2[i].getBehavior("Tween").addObjectPositionXTween("Out", 0, "easeInQuad", 500, false);
}
}{for(var i = 0, len = gdjs._492Code.GDNext_95LevelObjects2.length ;i < len;++i) {
    gdjs._492Code.GDNext_95LevelObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs._492Code.eventsList4(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._492Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs._492Code.GDPlayer2Objects2);

gdjs._492Code.condition0IsTrue_0.val = false;
{
gdjs._492Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDPlayer2Objects2Objects, gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDPlayerObjects2Objects, false, runtimeScene, false);
}if (gdjs._492Code.condition0IsTrue_0.val) {
/* Reuse gdjs._492Code.GDPlayerObjects2 */
/* Reuse gdjs._492Code.GDPlayer2Objects2 */
{for(var i = 0, len = gdjs._492Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs._492Code.GDPlayer2Objects2[i].separateFromObjectsList(gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDPlayerObjects2Objects, false);
}
}}

}


{



}


{

gdjs._492Code.GDCollectableObjects1.length = 0;

gdjs._492Code.GDPlayerObjects1.length = 0;

gdjs._492Code.GDPlayer2Objects1.length = 0;


gdjs._492Code.condition0IsTrue_0.val = false;
{
{gdjs._492Code.conditionTrue_1 = gdjs._492Code.condition0IsTrue_0;
gdjs._492Code.GDCollectableObjects1_1final.length = 0;gdjs._492Code.GDPlayerObjects1_1final.length = 0;gdjs._492Code.GDPlayer2Objects1_1final.length = 0;gdjs._492Code.condition0IsTrue_1.val = false;
gdjs._492Code.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Collectable"), gdjs._492Code.GDCollectableObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._492Code.GDPlayerObjects2);
gdjs._492Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDPlayerObjects2Objects, gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDCollectableObjects2Objects, false, runtimeScene, false);
if( gdjs._492Code.condition0IsTrue_1.val ) {
    gdjs._492Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs._492Code.GDCollectableObjects2.length;j<jLen;++j) {
        if ( gdjs._492Code.GDCollectableObjects1_1final.indexOf(gdjs._492Code.GDCollectableObjects2[j]) === -1 )
            gdjs._492Code.GDCollectableObjects1_1final.push(gdjs._492Code.GDCollectableObjects2[j]);
    }
    for(var j = 0, jLen = gdjs._492Code.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs._492Code.GDPlayerObjects1_1final.indexOf(gdjs._492Code.GDPlayerObjects2[j]) === -1 )
            gdjs._492Code.GDPlayerObjects1_1final.push(gdjs._492Code.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Collectable"), gdjs._492Code.GDCollectableObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs._492Code.GDPlayer2Objects2);
gdjs._492Code.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDPlayer2Objects2Objects, gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDCollectableObjects2Objects, false, runtimeScene, false);
if( gdjs._492Code.condition1IsTrue_1.val ) {
    gdjs._492Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs._492Code.GDCollectableObjects2.length;j<jLen;++j) {
        if ( gdjs._492Code.GDCollectableObjects1_1final.indexOf(gdjs._492Code.GDCollectableObjects2[j]) === -1 )
            gdjs._492Code.GDCollectableObjects1_1final.push(gdjs._492Code.GDCollectableObjects2[j]);
    }
    for(var j = 0, jLen = gdjs._492Code.GDPlayer2Objects2.length;j<jLen;++j) {
        if ( gdjs._492Code.GDPlayer2Objects1_1final.indexOf(gdjs._492Code.GDPlayer2Objects2[j]) === -1 )
            gdjs._492Code.GDPlayer2Objects1_1final.push(gdjs._492Code.GDPlayer2Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs._492Code.GDCollectableObjects1_1final, gdjs._492Code.GDCollectableObjects1);
gdjs.copyArray(gdjs._492Code.GDPlayerObjects1_1final, gdjs._492Code.GDPlayerObjects1);
gdjs.copyArray(gdjs._492Code.GDPlayer2Objects1_1final, gdjs._492Code.GDPlayer2Objects1);
}
}
}if (gdjs._492Code.condition0IsTrue_0.val) {
/* Reuse gdjs._492Code.GDCollectableObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(4).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Collectable.ogg", false, 60, 1);
}{for(var i = 0, len = gdjs._492Code.GDCollectableObjects1.length ;i < len;++i) {
    gdjs._492Code.GDCollectableObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.5, 0, 0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDSepperateObjects2Objects = Hashtable.newFrom({"Sepperate": gdjs._492Code.GDSepperateObjects2});
gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDPlayer2Objects2Objects = Hashtable.newFrom({"Player2": gdjs._492Code.GDPlayer2Objects2});
gdjs._492Code.asyncCallback8635276 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Player2"), gdjs._492Code.GDPlayer2Objects3);

{for(var i = 0, len = gdjs._492Code.GDPlayer2Objects3.length ;i < len;++i) {
    gdjs._492Code.GDPlayer2Objects3[i].getBehavior("PlatformerObject").setCanJump();
}
}}
gdjs._492Code.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs._492Code.GDPlayer2Objects2) asyncObjectsList.addObject("Player2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs._492Code.asyncCallback8635276(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDSepperateObjects2Objects = Hashtable.newFrom({"Sepperate": gdjs._492Code.GDSepperateObjects2});
gdjs._492Code.asyncCallback8639572 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Player2"), gdjs._492Code.GDPlayer2Objects3);

{for(var i = 0, len = gdjs._492Code.GDPlayer2Objects3.length ;i < len;++i) {
    gdjs._492Code.GDPlayer2Objects3[i].deleteFromScene(runtimeScene);
}
}}
gdjs._492Code.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs._492Code.GDPlayer2Objects2) asyncObjectsList.addObject("Player2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs._492Code.asyncCallback8639572(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._492Code.eventsList8 = function(runtimeScene) {

{



}


{


gdjs._492Code.condition0IsTrue_0.val = false;
gdjs._492Code.condition1IsTrue_0.val = false;
{
{gdjs._492Code.conditionTrue_1 = gdjs._492Code.condition0IsTrue_0;
gdjs._492Code.condition0IsTrue_1.val = false;
gdjs._492Code.condition1IsTrue_1.val = false;
{
gdjs._492Code.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs._492Code.condition0IsTrue_1.val ) {
    gdjs._492Code.conditionTrue_1.val = true;
}
}
{
gdjs._492Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "q");
if( gdjs._492Code.condition1IsTrue_1.val ) {
    gdjs._492Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs._492Code.condition0IsTrue_0.val ) {
{
gdjs._492Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}}
if (gdjs._492Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._492Code.GDPlayerObjects2);
gdjs._492Code.GDPlayer2Objects2.length = 0;

gdjs._492Code.GDSepperateObjects2.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "Sepperate.ogg", false, 100, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDSepperateObjects2Objects, (( gdjs._492Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs._492Code.GDPlayerObjects2[0].getPointX("")), (( gdjs._492Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs._492Code.GDPlayerObjects2[0].getPointY("")) + 12, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDPlayer2Objects2Objects, (( gdjs._492Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs._492Code.GDPlayerObjects2[0].getPointX("")), (( gdjs._492Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs._492Code.GDPlayerObjects2[0].getPointY("")) + 12, "");
}{for(var i = 0, len = gdjs._492Code.GDSepperateObjects2.length ;i < len;++i) {
    gdjs._492Code.GDSepperateObjects2[i].setAngle(270);
}
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.5, 0, 0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs._492Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs._492Code.GDPlayer2Objects2[i].getBehavior("Tween").addObjectPositionYTween("Create", (( gdjs._492Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs._492Code.GDPlayerObjects2[0].getPointY("")) - 90, "easeOutQuad", 300, false);
}
}{for(var i = 0, len = gdjs._492Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs._492Code.GDPlayer2Objects2[i].setSize(48, 48);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}
{ //Subevents
gdjs._492Code.eventsList6(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs._492Code.condition0IsTrue_0.val = false;
gdjs._492Code.condition1IsTrue_0.val = false;
{
gdjs._492Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if ( gdjs._492Code.condition0IsTrue_0.val ) {
{
{gdjs._492Code.conditionTrue_1 = gdjs._492Code.condition1IsTrue_0;
gdjs._492Code.condition0IsTrue_1.val = false;
gdjs._492Code.condition1IsTrue_1.val = false;
{
gdjs._492Code.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
if( gdjs._492Code.condition0IsTrue_1.val ) {
    gdjs._492Code.conditionTrue_1.val = true;
}
}
{
gdjs._492Code.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "e");
if( gdjs._492Code.condition1IsTrue_1.val ) {
    gdjs._492Code.conditionTrue_1.val = true;
}
}
{
}
}
}}
if (gdjs._492Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._492Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs._492Code.GDPlayer2Objects2);
gdjs._492Code.GDSepperateObjects2.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "Reverse_Sepperate.ogg", false, 100, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDSepperateObjects2Objects, (( gdjs._492Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs._492Code.GDPlayerObjects2[0].getPointX("")), (( gdjs._492Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs._492Code.GDPlayerObjects2[0].getPointY("")) + 12, "");
}{for(var i = 0, len = gdjs._492Code.GDSepperateObjects2.length ;i < len;++i) {
    gdjs._492Code.GDSepperateObjects2[i].setAngle(270);
}
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.5, 0, 0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs._492Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs._492Code.GDPlayer2Objects2[i].getBehavior("Tween").addObjectScaleTween("Destroy", 0, 0, "easeOutQuad", 300, false, false);
}
}{for(var i = 0, len = gdjs._492Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs._492Code.GDPlayer2Objects2[i].getBehavior("Tween").addObjectPositionTween("Destroy2", (( gdjs._492Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs._492Code.GDPlayerObjects2[0].getPointX("")), (( gdjs._492Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs._492Code.GDPlayerObjects2[0].getPointY("")), "easeOutQuad", 300, false);
}
}{for(var i = 0, len = gdjs._492Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs._492Code.GDPlayer2Objects2[i].activateBehavior("PlatformerObject", false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}
{ //Subevents
gdjs._492Code.eventsList7(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs._492Code.condition0IsTrue_0.val = false;
{
{gdjs._492Code.conditionTrue_1 = gdjs._492Code.condition0IsTrue_0;
gdjs._492Code.condition0IsTrue_1.val = false;
gdjs._492Code.condition1IsTrue_1.val = false;
{
gdjs._492Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs._492Code.condition0IsTrue_1.val ) {
    gdjs._492Code.conditionTrue_1.val = true;
}
}
{
gdjs._492Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs._492Code.condition1IsTrue_1.val ) {
    gdjs._492Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs._492Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._492Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs._492Code.GDPlayer2Objects2);
{for(var i = 0, len = gdjs._492Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._492Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs._492Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs._492Code.GDPlayer2Objects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs._492Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._492Code.GDPlayerObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs._492Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs._492Code.GDPlayer2Objects2[i].flipX(false);
}
}}

}


{



}


{


gdjs._492Code.condition0IsTrue_0.val = false;
{
{gdjs._492Code.conditionTrue_1 = gdjs._492Code.condition0IsTrue_0;
gdjs._492Code.condition0IsTrue_1.val = false;
gdjs._492Code.condition1IsTrue_1.val = false;
{
gdjs._492Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs._492Code.condition0IsTrue_1.val ) {
    gdjs._492Code.conditionTrue_1.val = true;
}
}
{
gdjs._492Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs._492Code.condition1IsTrue_1.val ) {
    gdjs._492Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs._492Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._492Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs._492Code.GDPlayer2Objects2);
{for(var i = 0, len = gdjs._492Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._492Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs._492Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs._492Code.GDPlayer2Objects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs._492Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._492Code.GDPlayerObjects2[i].flipX(true);
}
}{for(var i = 0, len = gdjs._492Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs._492Code.GDPlayer2Objects2[i].flipX(true);
}
}}

}


{



}


{


gdjs._492Code.condition0IsTrue_0.val = false;
{
{gdjs._492Code.conditionTrue_1 = gdjs._492Code.condition0IsTrue_0;
gdjs._492Code.condition0IsTrue_1.val = false;
gdjs._492Code.condition1IsTrue_1.val = false;
gdjs._492Code.condition2IsTrue_1.val = false;
{
gdjs._492Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs._492Code.condition0IsTrue_1.val ) {
    gdjs._492Code.conditionTrue_1.val = true;
}
}
{
gdjs._492Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs._492Code.condition1IsTrue_1.val ) {
    gdjs._492Code.conditionTrue_1.val = true;
}
}
{
gdjs._492Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs._492Code.condition2IsTrue_1.val ) {
    gdjs._492Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs._492Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._492Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs._492Code.GDPlayer2Objects1);
{for(var i = 0, len = gdjs._492Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._492Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs._492Code.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs._492Code.GDPlayer2Objects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};gdjs._492Code.eventsList9 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._492Code.GDPlayerObjects2);

gdjs._492Code.condition0IsTrue_0.val = false;
gdjs._492Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._492Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs._492Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs._492Code.condition0IsTrue_0.val = true;
        gdjs._492Code.GDPlayerObjects2[k] = gdjs._492Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs._492Code.GDPlayerObjects2.length = k;}if ( gdjs._492Code.condition0IsTrue_0.val ) {
{
{gdjs._492Code.conditionTrue_1 = gdjs._492Code.condition1IsTrue_0;
gdjs._492Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8647196);
}
}}
if (gdjs._492Code.condition1IsTrue_0.val) {
/* Reuse gdjs._492Code.GDPlayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs._492Code.GDPlayer2Objects2);
{for(var i = 0, len = gdjs._492Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._492Code.GDPlayerObjects2[i].setAnimationName("Walk");
}
}{for(var i = 0, len = gdjs._492Code.GDPlayer2Objects2.length ;i < len;++i) {
    gdjs._492Code.GDPlayer2Objects2[i].setAnimationName("Walk");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._492Code.GDPlayerObjects1);

gdjs._492Code.condition0IsTrue_0.val = false;
gdjs._492Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._492Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs._492Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        gdjs._492Code.condition0IsTrue_0.val = true;
        gdjs._492Code.GDPlayerObjects1[k] = gdjs._492Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs._492Code.GDPlayerObjects1.length = k;}if ( gdjs._492Code.condition0IsTrue_0.val ) {
{
{gdjs._492Code.conditionTrue_1 = gdjs._492Code.condition1IsTrue_0;
gdjs._492Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8648900);
}
}}
if (gdjs._492Code.condition1IsTrue_0.val) {
/* Reuse gdjs._492Code.GDPlayerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs._492Code.GDPlayer2Objects1);
{for(var i = 0, len = gdjs._492Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._492Code.GDPlayerObjects1[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs._492Code.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs._492Code.GDPlayer2Objects1[i].setAnimationName("Idle");
}
}}

}


};gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs._492Code.GDBulletObjects1});
gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs._492Code.GDBulletObjects2});
gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs._492Code.GDPlayerObjects2});
gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs._492Code.GDBulletObjects2});
gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDPlayer2Objects2Objects = Hashtable.newFrom({"Player2": gdjs._492Code.GDPlayer2Objects2});
gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs._492Code.GDBulletObjects2});
gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDDelete_9595BulletObjects2Objects = Hashtable.newFrom({"Delete_Bullet": gdjs._492Code.GDDelete_95BulletObjects2});
gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs._492Code.GDBulletObjects2});
gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDGroundObjects2Objects = Hashtable.newFrom({"Ground": gdjs._492Code.GDGroundObjects2});
gdjs._492Code.asyncCallback8528948 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Bullet"), gdjs._492Code.GDBulletObjects2);

{for(var i = 0, len = gdjs._492Code.GDBulletObjects2.length ;i < len;++i) {
    gdjs._492Code.GDBulletObjects2[i].deleteFromScene(runtimeScene);
}
}}
gdjs._492Code.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs._492Code.GDBulletObjects1) asyncObjectsList.addObject("Bullet", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.001), (runtimeScene) => (gdjs._492Code.asyncCallback8528948(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs._492Code.GDPlayerObjects2});
gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs._492Code.GDBulletObjects2});
gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDSoulObjects1Objects = Hashtable.newFrom({"Soul": gdjs._492Code.GDSoulObjects1});
gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs._492Code.GDPlayerObjects2});
gdjs._492Code.asyncCallback8532804 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs._492Code.GDPlayerObjects2);

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDPlayerObjects2Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), "");
}{for(var i = 0, len = gdjs._492Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._492Code.GDPlayerObjects2[i].setSize(48, 48);
}
}}
gdjs._492Code.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs._492Code.GDPlayerObjects1) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._492Code.asyncCallback8532804(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDPlayer2Objects2Objects = Hashtable.newFrom({"Player2": gdjs._492Code.GDPlayer2Objects2});
gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs._492Code.GDBulletObjects2});
gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDSoulObjects1Objects = Hashtable.newFrom({"Soul": gdjs._492Code.GDSoulObjects1});
gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs._492Code.GDPlayerObjects1});
gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs._492Code.GDButtonObjects1});
gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDExplode_9595BossObjects1Objects = Hashtable.newFrom({"Explode_Boss": gdjs._492Code.GDExplode_95BossObjects1});
gdjs._492Code.asyncCallback8541660 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Stats", false);
}}
gdjs._492Code.eventsList12 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs._492Code.asyncCallback8541660(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._492Code.eventsList13 = function(runtimeScene) {

{


gdjs._492Code.condition0IsTrue_0.val = false;
{
gdjs._492Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs._492Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Level_Name"), gdjs._492Code.GDLevel_95NameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._492Code.GDPlayerObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Boss.ogg", true, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(12);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 3, "", 0);
}{for(var i = 0, len = gdjs._492Code.GDLevel_95NameObjects1.length ;i < len;++i) {
    gdjs._492Code.GDLevel_95NameObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._492Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._492Code.GDPlayerObjects1[i].activateBehavior("PlatformerObject", false);
}
}{gdjs.evtTools.tween.tweenCameraZoom(runtimeScene, "Out", 1, "", 1000, "easeInOutQuad");
}
{ //Subevents
gdjs._492Code.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{



}


{


gdjs._492Code.eventsList2(runtimeScene);
}


{


gdjs._492Code.eventsList5(runtimeScene);
}


{


gdjs._492Code.eventsList8(runtimeScene);
}


{


gdjs._492Code.eventsList9(runtimeScene);
}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Backgrouund"), gdjs._492Code.GDBackgrouundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Collectable"), gdjs._492Code.GDCollectableObjects1);
{for(var i = 0, len = gdjs._492Code.GDCollectableObjects1.length ;i < len;++i) {
    gdjs._492Code.GDCollectableObjects1[i].rotate(90, runtimeScene);
}
}{for(var i = 0, len = gdjs._492Code.GDBackgrouundObjects1.length ;i < len;++i) {
    gdjs._492Code.GDBackgrouundObjects1[i].setXOffset(gdjs._492Code.GDBackgrouundObjects1[i].getXOffset() + (2));
}
}}

}


{



}


{


gdjs._492Code.condition0IsTrue_0.val = false;
gdjs._492Code.condition1IsTrue_0.val = false;
{
gdjs._492Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "BulletRate") > 0.2;
}if ( gdjs._492Code.condition0IsTrue_0.val ) {
{
gdjs._492Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != 6;
}}
if (gdjs._492Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Boss"), gdjs._492Code.GDBossObjects1);
gdjs._492Code.GDBulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDBulletObjects1Objects, (( gdjs._492Code.GDBossObjects1.length === 0 ) ? 0 :gdjs._492Code.GDBossObjects1[0].getPointX("")), (( gdjs._492Code.GDBossObjects1.length === 0 ) ? 0 :gdjs._492Code.GDBossObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs._492Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs._492Code.GDBulletObjects1[i].setSize(32, 32);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BulletRate");
}{for(var i = 0, len = gdjs._492Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs._492Code.GDBulletObjects1[i].setZOrder((( gdjs._492Code.GDBossObjects1.length === 0 ) ? 0 :gdjs._492Code.GDBossObjects1[0].getZOrder()) - 1);
}
}}

}


{



}


{

gdjs._492Code.GDBulletObjects1.length = 0;

gdjs._492Code.GDDelete_95BulletObjects1.length = 0;

gdjs._492Code.GDGroundObjects1.length = 0;

gdjs._492Code.GDPlayerObjects1.length = 0;

gdjs._492Code.GDPlayer2Objects1.length = 0;


gdjs._492Code.condition0IsTrue_0.val = false;
{
{gdjs._492Code.conditionTrue_1 = gdjs._492Code.condition0IsTrue_0;
gdjs._492Code.GDBulletObjects1_1final.length = 0;gdjs._492Code.GDDelete_95BulletObjects1_1final.length = 0;gdjs._492Code.GDGroundObjects1_1final.length = 0;gdjs._492Code.GDPlayerObjects1_1final.length = 0;gdjs._492Code.GDPlayer2Objects1_1final.length = 0;gdjs._492Code.condition0IsTrue_1.val = false;
gdjs._492Code.condition1IsTrue_1.val = false;
gdjs._492Code.condition2IsTrue_1.val = false;
gdjs._492Code.condition3IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs._492Code.GDBulletObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._492Code.GDPlayerObjects2);
gdjs._492Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDBulletObjects2Objects, gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDPlayerObjects2Objects, false, runtimeScene, false);
if( gdjs._492Code.condition0IsTrue_1.val ) {
    gdjs._492Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs._492Code.GDBulletObjects2.length;j<jLen;++j) {
        if ( gdjs._492Code.GDBulletObjects1_1final.indexOf(gdjs._492Code.GDBulletObjects2[j]) === -1 )
            gdjs._492Code.GDBulletObjects1_1final.push(gdjs._492Code.GDBulletObjects2[j]);
    }
    for(var j = 0, jLen = gdjs._492Code.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs._492Code.GDPlayerObjects1_1final.indexOf(gdjs._492Code.GDPlayerObjects2[j]) === -1 )
            gdjs._492Code.GDPlayerObjects1_1final.push(gdjs._492Code.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs._492Code.GDBulletObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs._492Code.GDPlayer2Objects2);
gdjs._492Code.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDBulletObjects2Objects, gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDPlayer2Objects2Objects, false, runtimeScene, false);
if( gdjs._492Code.condition1IsTrue_1.val ) {
    gdjs._492Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs._492Code.GDBulletObjects2.length;j<jLen;++j) {
        if ( gdjs._492Code.GDBulletObjects1_1final.indexOf(gdjs._492Code.GDBulletObjects2[j]) === -1 )
            gdjs._492Code.GDBulletObjects1_1final.push(gdjs._492Code.GDBulletObjects2[j]);
    }
    for(var j = 0, jLen = gdjs._492Code.GDPlayer2Objects2.length;j<jLen;++j) {
        if ( gdjs._492Code.GDPlayer2Objects1_1final.indexOf(gdjs._492Code.GDPlayer2Objects2[j]) === -1 )
            gdjs._492Code.GDPlayer2Objects1_1final.push(gdjs._492Code.GDPlayer2Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs._492Code.GDBulletObjects2);
gdjs.copyArray(runtimeScene.getObjects("Delete_Bullet"), gdjs._492Code.GDDelete_95BulletObjects2);
gdjs._492Code.condition2IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDBulletObjects2Objects, gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDDelete_9595BulletObjects2Objects, false, runtimeScene, false);
if( gdjs._492Code.condition2IsTrue_1.val ) {
    gdjs._492Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs._492Code.GDBulletObjects2.length;j<jLen;++j) {
        if ( gdjs._492Code.GDBulletObjects1_1final.indexOf(gdjs._492Code.GDBulletObjects2[j]) === -1 )
            gdjs._492Code.GDBulletObjects1_1final.push(gdjs._492Code.GDBulletObjects2[j]);
    }
    for(var j = 0, jLen = gdjs._492Code.GDDelete_95BulletObjects2.length;j<jLen;++j) {
        if ( gdjs._492Code.GDDelete_95BulletObjects1_1final.indexOf(gdjs._492Code.GDDelete_95BulletObjects2[j]) === -1 )
            gdjs._492Code.GDDelete_95BulletObjects1_1final.push(gdjs._492Code.GDDelete_95BulletObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs._492Code.GDBulletObjects2);
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs._492Code.GDGroundObjects2);
gdjs._492Code.condition3IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDBulletObjects2Objects, gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDGroundObjects2Objects, false, runtimeScene, false);
if( gdjs._492Code.condition3IsTrue_1.val ) {
    gdjs._492Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs._492Code.GDBulletObjects2.length;j<jLen;++j) {
        if ( gdjs._492Code.GDBulletObjects1_1final.indexOf(gdjs._492Code.GDBulletObjects2[j]) === -1 )
            gdjs._492Code.GDBulletObjects1_1final.push(gdjs._492Code.GDBulletObjects2[j]);
    }
    for(var j = 0, jLen = gdjs._492Code.GDGroundObjects2.length;j<jLen;++j) {
        if ( gdjs._492Code.GDGroundObjects1_1final.indexOf(gdjs._492Code.GDGroundObjects2[j]) === -1 )
            gdjs._492Code.GDGroundObjects1_1final.push(gdjs._492Code.GDGroundObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs._492Code.GDBulletObjects1_1final, gdjs._492Code.GDBulletObjects1);
gdjs.copyArray(gdjs._492Code.GDDelete_95BulletObjects1_1final, gdjs._492Code.GDDelete_95BulletObjects1);
gdjs.copyArray(gdjs._492Code.GDGroundObjects1_1final, gdjs._492Code.GDGroundObjects1);
gdjs.copyArray(gdjs._492Code.GDPlayerObjects1_1final, gdjs._492Code.GDPlayerObjects1);
gdjs.copyArray(gdjs._492Code.GDPlayer2Objects1_1final, gdjs._492Code.GDPlayer2Objects1);
}
}
}if (gdjs._492Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs._492Code.eventsList10(runtimeScene);} //End of subevents
}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Boss"), gdjs._492Code.GDBossObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs._492Code.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Explode_Boss"), gdjs._492Code.GDExplode_95BossObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._492Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs._492Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs._492Code.GDBulletObjects1[i].rotateTowardPosition((( gdjs._492Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs._492Code.GDPlayerObjects1[0].getPointX("")), (( gdjs._492Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs._492Code.GDPlayerObjects1[0].getPointY("")), 0, runtimeScene);
}
}{for(var i = 0, len = gdjs._492Code.GDExplode_95BossObjects1.length ;i < len;++i) {
    gdjs._492Code.GDExplode_95BossObjects1[i].rotate(900, runtimeScene);
}
}{for(var i = 0, len = gdjs._492Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs._492Code.GDBulletObjects1[i].addForceTowardPosition((( gdjs._492Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs._492Code.GDPlayerObjects1[0].getPointX("")), (( gdjs._492Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs._492Code.GDPlayerObjects1[0].getPointY("")), 5, 1);
}
}{for(var i = 0, len = gdjs._492Code.GDExplode_95BossObjects1.length ;i < len;++i) {
    gdjs._492Code.GDExplode_95BossObjects1[i].setPosition((( gdjs._492Code.GDBossObjects1.length === 0 ) ? 0 :gdjs._492Code.GDBossObjects1[0].getPointX("")),(( gdjs._492Code.GDBossObjects1.length === 0 ) ? 0 :gdjs._492Code.GDBossObjects1[0].getPointY("")));
}
}}

}


{



}


{

gdjs._492Code.GDBulletObjects1.length = 0;

gdjs._492Code.GDPlayerObjects1.length = 0;


gdjs._492Code.condition0IsTrue_0.val = false;
{
{gdjs._492Code.conditionTrue_1 = gdjs._492Code.condition0IsTrue_0;
gdjs._492Code.GDBulletObjects1_1final.length = 0;gdjs._492Code.GDPlayerObjects1_1final.length = 0;gdjs._492Code.condition0IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs._492Code.GDBulletObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._492Code.GDPlayerObjects2);
gdjs._492Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDPlayerObjects2Objects, gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDBulletObjects2Objects, false, runtimeScene, false);
if( gdjs._492Code.condition0IsTrue_1.val ) {
    gdjs._492Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs._492Code.GDBulletObjects2.length;j<jLen;++j) {
        if ( gdjs._492Code.GDBulletObjects1_1final.indexOf(gdjs._492Code.GDBulletObjects2[j]) === -1 )
            gdjs._492Code.GDBulletObjects1_1final.push(gdjs._492Code.GDBulletObjects2[j]);
    }
    for(var j = 0, jLen = gdjs._492Code.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs._492Code.GDPlayerObjects1_1final.indexOf(gdjs._492Code.GDPlayerObjects2[j]) === -1 )
            gdjs._492Code.GDPlayerObjects1_1final.push(gdjs._492Code.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs._492Code.GDBulletObjects1_1final, gdjs._492Code.GDBulletObjects1);
gdjs.copyArray(gdjs._492Code.GDPlayerObjects1_1final, gdjs._492Code.GDPlayerObjects1);
}
}
}if (gdjs._492Code.condition0IsTrue_0.val) {
/* Reuse gdjs._492Code.GDPlayerObjects1 */
gdjs._492Code.GDSoulObjects1.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "Player_Die.ogg", false, 100, 1);
}{for(var i = 0, len = gdjs._492Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._492Code.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDSoulObjects1Objects, (( gdjs._492Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs._492Code.GDPlayerObjects1[0].getPointX("")), (( gdjs._492Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs._492Code.GDPlayerObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs._492Code.GDSoulObjects1.length ;i < len;++i) {
    gdjs._492Code.GDSoulObjects1[i].setAngle(270);
}
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.5, 0, 0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs._492Code.eventsList11(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs._492Code.GDBulletObjects1.length = 0;

gdjs._492Code.GDPlayer2Objects1.length = 0;


gdjs._492Code.condition0IsTrue_0.val = false;
{
{gdjs._492Code.conditionTrue_1 = gdjs._492Code.condition0IsTrue_0;
gdjs._492Code.GDBulletObjects1_1final.length = 0;gdjs._492Code.GDPlayer2Objects1_1final.length = 0;gdjs._492Code.condition0IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs._492Code.GDBulletObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs._492Code.GDPlayer2Objects2);
gdjs._492Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDPlayer2Objects2Objects, gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDBulletObjects2Objects, false, runtimeScene, false);
if( gdjs._492Code.condition0IsTrue_1.val ) {
    gdjs._492Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs._492Code.GDBulletObjects2.length;j<jLen;++j) {
        if ( gdjs._492Code.GDBulletObjects1_1final.indexOf(gdjs._492Code.GDBulletObjects2[j]) === -1 )
            gdjs._492Code.GDBulletObjects1_1final.push(gdjs._492Code.GDBulletObjects2[j]);
    }
    for(var j = 0, jLen = gdjs._492Code.GDPlayer2Objects2.length;j<jLen;++j) {
        if ( gdjs._492Code.GDPlayer2Objects1_1final.indexOf(gdjs._492Code.GDPlayer2Objects2[j]) === -1 )
            gdjs._492Code.GDPlayer2Objects1_1final.push(gdjs._492Code.GDPlayer2Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs._492Code.GDBulletObjects1_1final, gdjs._492Code.GDBulletObjects1);
gdjs.copyArray(gdjs._492Code.GDPlayer2Objects1_1final, gdjs._492Code.GDPlayer2Objects1);
}
}
}if (gdjs._492Code.condition0IsTrue_0.val) {
/* Reuse gdjs._492Code.GDPlayer2Objects1 */
gdjs._492Code.GDSoulObjects1.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "Player_Die.ogg", false, 100, 1);
}{for(var i = 0, len = gdjs._492Code.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs._492Code.GDPlayer2Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDSoulObjects1Objects, (( gdjs._492Code.GDPlayer2Objects1.length === 0 ) ? 0 :gdjs._492Code.GDPlayer2Objects1[0].getPointX("")), (( gdjs._492Code.GDPlayer2Objects1.length === 0 ) ? 0 :gdjs._492Code.GDPlayer2Objects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs._492Code.GDSoulObjects1.length ;i < len;++i) {
    gdjs._492Code.GDSoulObjects1[i].setAngle(270);
}
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.5, 0, 0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs._492Code.GDButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._492Code.GDPlayerObjects1);

gdjs._492Code.condition0IsTrue_0.val = false;
gdjs._492Code.condition1IsTrue_0.val = false;
gdjs._492Code.condition2IsTrue_0.val = false;
{
gdjs._492Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDPlayerObjects1Objects, gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDButtonObjects1Objects, false, runtimeScene, false);
}if ( gdjs._492Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._492Code.GDButtonObjects1.length;i<l;++i) {
    if ( gdjs._492Code.GDButtonObjects1[i].isCurrentAnimationName("NewSprite") ) {
        gdjs._492Code.condition1IsTrue_0.val = true;
        gdjs._492Code.GDButtonObjects1[k] = gdjs._492Code.GDButtonObjects1[i];
        ++k;
    }
}
gdjs._492Code.GDButtonObjects1.length = k;}if ( gdjs._492Code.condition1IsTrue_0.val ) {
{
{gdjs._492Code.conditionTrue_1 = gdjs._492Code.condition2IsTrue_0;
gdjs._492Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8536692);
}
}}
}
if (gdjs._492Code.condition2IsTrue_0.val) {
/* Reuse gdjs._492Code.GDButtonObjects1 */
{for(var i = 0, len = gdjs._492Code.GDButtonObjects1.length ;i < len;++i) {
    gdjs._492Code.GDButtonObjects1[i].setAnimationName("Down");
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "New sound effect3", false, 100, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) / 4);
}}

}


{



}


{


gdjs._492Code.condition0IsTrue_0.val = false;
gdjs._492Code.condition1IsTrue_0.val = false;
{
gdjs._492Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 6;
}if ( gdjs._492Code.condition0IsTrue_0.val ) {
{
{gdjs._492Code.conditionTrue_1 = gdjs._492Code.condition1IsTrue_0;
gdjs._492Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8538196);
}
}}
if (gdjs._492Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Boss"), gdjs._492Code.GDBossObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs._492Code.GDBulletObjects1);
gdjs._492Code.GDExplode_95BossObjects1.length = 0;

{for(var i = 0, len = gdjs._492Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs._492Code.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._492Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs._492Code.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._492Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs._492Code.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._492Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs._492Code.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._492Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs._492Code.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._492Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs._492Code.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._492Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs._492Code.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._492Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs._492Code.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "New sound effect2", false, 100, 1);
}{for(var i = 0, len = gdjs._492Code.GDBossObjects1.length ;i < len;++i) {
    gdjs._492Code.GDBossObjects1[i].getBehavior("Tween").addObjectHeightTween("ByeH", 0, "swingFromTo", 4000, false);
}
}{for(var i = 0, len = gdjs._492Code.GDBossObjects1.length ;i < len;++i) {
    gdjs._492Code.GDBossObjects1[i].getBehavior("Tween").addObjectWidthTween("ByeW", 300, "easeInOutCubic", 4000, false);
}
}{for(var i = 0, len = gdjs._492Code.GDBossObjects1.length ;i < len;++i) {
    gdjs._492Code.GDBossObjects1[i].getBehavior("Tween").addObjectOpacityTween("ByeV", 0, "easeInOutBack", 4000, false);
}
}{for(var i = 0, len = gdjs._492Code.GDBossObjects1.length ;i < len;++i) {
    gdjs._492Code.GDBossObjects1[i].getBehavior("EllipseMovement").SetRadiusX(300, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._492Code.mapOfGDgdjs_46_95492Code_46GDExplode_9595BossObjects1Objects, (( gdjs._492Code.GDBossObjects1.length === 0 ) ? 0 :gdjs._492Code.GDBossObjects1[0].getPointX("")), (( gdjs._492Code.GDBossObjects1.length === 0 ) ? 0 :gdjs._492Code.GDBossObjects1[0].getPointY("")), "");
}
{ //Subevents
gdjs._492Code.eventsList12(runtimeScene);} //End of subevents
}

}


};

gdjs._492Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._492Code.GDGroundObjects1.length = 0;
gdjs._492Code.GDGroundObjects2.length = 0;
gdjs._492Code.GDGroundObjects3.length = 0;
gdjs._492Code.GDPlayerObjects1.length = 0;
gdjs._492Code.GDPlayerObjects2.length = 0;
gdjs._492Code.GDPlayerObjects3.length = 0;
gdjs._492Code.GDPlayer2Objects1.length = 0;
gdjs._492Code.GDPlayer2Objects2.length = 0;
gdjs._492Code.GDPlayer2Objects3.length = 0;
gdjs._492Code.GDLavaObjects1.length = 0;
gdjs._492Code.GDLavaObjects2.length = 0;
gdjs._492Code.GDLavaObjects3.length = 0;
gdjs._492Code.GDSoulObjects1.length = 0;
gdjs._492Code.GDSoulObjects2.length = 0;
gdjs._492Code.GDSoulObjects3.length = 0;
gdjs._492Code.GDSepperateObjects1.length = 0;
gdjs._492Code.GDSepperateObjects2.length = 0;
gdjs._492Code.GDSepperateObjects3.length = 0;
gdjs._492Code.GDOverScreenObjects1.length = 0;
gdjs._492Code.GDOverScreenObjects2.length = 0;
gdjs._492Code.GDOverScreenObjects3.length = 0;
gdjs._492Code.GDNext_95LevelObjects1.length = 0;
gdjs._492Code.GDNext_95LevelObjects2.length = 0;
gdjs._492Code.GDNext_95LevelObjects3.length = 0;
gdjs._492Code.GDLevel_95NameObjects1.length = 0;
gdjs._492Code.GDLevel_95NameObjects2.length = 0;
gdjs._492Code.GDLevel_95NameObjects3.length = 0;
gdjs._492Code.GDTut_95TextObjects1.length = 0;
gdjs._492Code.GDTut_95TextObjects2.length = 0;
gdjs._492Code.GDTut_95TextObjects3.length = 0;
gdjs._492Code.GDCollectableObjects1.length = 0;
gdjs._492Code.GDCollectableObjects2.length = 0;
gdjs._492Code.GDCollectableObjects3.length = 0;
gdjs._492Code.GDBackgrouundObjects1.length = 0;
gdjs._492Code.GDBackgrouundObjects2.length = 0;
gdjs._492Code.GDBackgrouundObjects3.length = 0;
gdjs._492Code.GDTransitionObjects1.length = 0;
gdjs._492Code.GDTransitionObjects2.length = 0;
gdjs._492Code.GDTransitionObjects3.length = 0;
gdjs._492Code.GDLevel_95NameObjects1.length = 0;
gdjs._492Code.GDLevel_95NameObjects2.length = 0;
gdjs._492Code.GDLevel_95NameObjects3.length = 0;
gdjs._492Code.GDNext_95LevelObjects1.length = 0;
gdjs._492Code.GDNext_95LevelObjects2.length = 0;
gdjs._492Code.GDNext_95LevelObjects3.length = 0;
gdjs._492Code.GDBossObjects1.length = 0;
gdjs._492Code.GDBossObjects2.length = 0;
gdjs._492Code.GDBossObjects3.length = 0;
gdjs._492Code.GDBulletObjects1.length = 0;
gdjs._492Code.GDBulletObjects2.length = 0;
gdjs._492Code.GDBulletObjects3.length = 0;
gdjs._492Code.GDDelete_95BulletObjects1.length = 0;
gdjs._492Code.GDDelete_95BulletObjects2.length = 0;
gdjs._492Code.GDDelete_95BulletObjects3.length = 0;
gdjs._492Code.GDButtonObjects1.length = 0;
gdjs._492Code.GDButtonObjects2.length = 0;
gdjs._492Code.GDButtonObjects3.length = 0;
gdjs._492Code.GDExplode_95BossObjects1.length = 0;
gdjs._492Code.GDExplode_95BossObjects2.length = 0;
gdjs._492Code.GDExplode_95BossObjects3.length = 0;

gdjs._492Code.eventsList13(runtimeScene);

return;

}

gdjs['_492Code'] = gdjs._492Code;
