gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDBlackObjects1= [];
gdjs.MainMenuCode.GDBlackObjects2= [];
gdjs.MainMenuCode.GDBlackObjects3= [];
gdjs.MainMenuCode.GDBlackObjects4= [];
gdjs.MainMenuCode.GDBlackObjects5= [];
gdjs.MainMenuCode.GDMade_95ByObjects1= [];
gdjs.MainMenuCode.GDMade_95ByObjects2= [];
gdjs.MainMenuCode.GDMade_95ByObjects3= [];
gdjs.MainMenuCode.GDMade_95ByObjects4= [];
gdjs.MainMenuCode.GDMade_95ByObjects5= [];
gdjs.MainMenuCode.GDBoatObjects1= [];
gdjs.MainMenuCode.GDBoatObjects2= [];
gdjs.MainMenuCode.GDBoatObjects3= [];
gdjs.MainMenuCode.GDBoatObjects4= [];
gdjs.MainMenuCode.GDBoatObjects5= [];
gdjs.MainMenuCode.GDPlayObjects1= [];
gdjs.MainMenuCode.GDPlayObjects2= [];
gdjs.MainMenuCode.GDPlayObjects3= [];
gdjs.MainMenuCode.GDPlayObjects4= [];
gdjs.MainMenuCode.GDPlayObjects5= [];
gdjs.MainMenuCode.GDSettingsObjects1= [];
gdjs.MainMenuCode.GDSettingsObjects2= [];
gdjs.MainMenuCode.GDSettingsObjects3= [];
gdjs.MainMenuCode.GDSettingsObjects4= [];
gdjs.MainMenuCode.GDSettingsObjects5= [];
gdjs.MainMenuCode.GDExitObjects1= [];
gdjs.MainMenuCode.GDExitObjects2= [];
gdjs.MainMenuCode.GDExitObjects3= [];
gdjs.MainMenuCode.GDExitObjects4= [];
gdjs.MainMenuCode.GDExitObjects5= [];
gdjs.MainMenuCode.GDCreditsObjects1= [];
gdjs.MainMenuCode.GDCreditsObjects2= [];
gdjs.MainMenuCode.GDCreditsObjects3= [];
gdjs.MainMenuCode.GDCreditsObjects4= [];
gdjs.MainMenuCode.GDCreditsObjects5= [];
gdjs.MainMenuCode.GDCredits_95ThanksObjects1= [];
gdjs.MainMenuCode.GDCredits_95ThanksObjects2= [];
gdjs.MainMenuCode.GDCredits_95ThanksObjects3= [];
gdjs.MainMenuCode.GDCredits_95ThanksObjects4= [];
gdjs.MainMenuCode.GDCredits_95ThanksObjects5= [];
gdjs.MainMenuCode.GDyt_95btnObjects1= [];
gdjs.MainMenuCode.GDyt_95btnObjects2= [];
gdjs.MainMenuCode.GDyt_95btnObjects3= [];
gdjs.MainMenuCode.GDyt_95btnObjects4= [];
gdjs.MainMenuCode.GDyt_95btnObjects5= [];
gdjs.MainMenuCode.GDCredits_95alsoObjects1= [];
gdjs.MainMenuCode.GDCredits_95alsoObjects2= [];
gdjs.MainMenuCode.GDCredits_95alsoObjects3= [];
gdjs.MainMenuCode.GDCredits_95alsoObjects4= [];
gdjs.MainMenuCode.GDCredits_95alsoObjects5= [];
gdjs.MainMenuCode.GDOptions_95TXTObjects1= [];
gdjs.MainMenuCode.GDOptions_95TXTObjects2= [];
gdjs.MainMenuCode.GDOptions_95TXTObjects3= [];
gdjs.MainMenuCode.GDOptions_95TXTObjects4= [];
gdjs.MainMenuCode.GDOptions_95TXTObjects5= [];
gdjs.MainMenuCode.GDVolume_95SliderObjects1= [];
gdjs.MainMenuCode.GDVolume_95SliderObjects2= [];
gdjs.MainMenuCode.GDVolume_95SliderObjects3= [];
gdjs.MainMenuCode.GDVolume_95SliderObjects4= [];
gdjs.MainMenuCode.GDVolume_95SliderObjects5= [];
gdjs.MainMenuCode.GDOptions_95VolumeObjects1= [];
gdjs.MainMenuCode.GDOptions_95VolumeObjects2= [];
gdjs.MainMenuCode.GDOptions_95VolumeObjects3= [];
gdjs.MainMenuCode.GDOptions_95VolumeObjects4= [];
gdjs.MainMenuCode.GDOptions_95VolumeObjects5= [];
gdjs.MainMenuCode.GDOptions_95FullScreenObjects1= [];
gdjs.MainMenuCode.GDOptions_95FullScreenObjects2= [];
gdjs.MainMenuCode.GDOptions_95FullScreenObjects3= [];
gdjs.MainMenuCode.GDOptions_95FullScreenObjects4= [];
gdjs.MainMenuCode.GDOptions_95FullScreenObjects5= [];
gdjs.MainMenuCode.GDFullScreenObjects1= [];
gdjs.MainMenuCode.GDFullScreenObjects2= [];
gdjs.MainMenuCode.GDFullScreenObjects3= [];
gdjs.MainMenuCode.GDFullScreenObjects4= [];
gdjs.MainMenuCode.GDFullScreenObjects5= [];
gdjs.MainMenuCode.GDNoiseObjects1= [];
gdjs.MainMenuCode.GDNoiseObjects2= [];
gdjs.MainMenuCode.GDNoiseObjects3= [];
gdjs.MainMenuCode.GDNoiseObjects4= [];
gdjs.MainMenuCode.GDNoiseObjects5= [];
gdjs.MainMenuCode.GDwaitwhatObjects1= [];
gdjs.MainMenuCode.GDwaitwhatObjects2= [];
gdjs.MainMenuCode.GDwaitwhatObjects3= [];
gdjs.MainMenuCode.GDwaitwhatObjects4= [];
gdjs.MainMenuCode.GDwaitwhatObjects5= [];


gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDPlayObjects2Objects = Hashtable.newFrom({"Play": gdjs.MainMenuCode.GDPlayObjects2});
gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main_Game", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15607004);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Hover.wav", false, 30, gdjs.randomFloatInRange(0.7, 1.1));
}}

}


};gdjs.MainMenuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MainMenuCode.GDPlayObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDPlayObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainMenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDSettingsObjects3Objects = Hashtable.newFrom({"Settings": gdjs.MainMenuCode.GDSettingsObjects3});
gdjs.MainMenuCode.asyncCallback15608660 = function (runtimeScene, asyncObjectsList) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "click.wav", false, 100, 1);
}}
gdjs.MainMenuCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.MainMenuCode.asyncCallback15608660(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainMenuCode.asyncCallback15609812 = function (runtimeScene, asyncObjectsList) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}{gdjs.evtTools.sound.playSound(runtimeScene, "click.wav", false, 100, 1);
}}
gdjs.MainMenuCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.MainMenuCode.asyncCallback15609812(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainMenuCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 0;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainMenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 1;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainMenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15610532);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Hover.wav", false, 30, gdjs.randomFloatInRange(0.7, 1.1));
}}

}


};gdjs.MainMenuCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Settings"), gdjs.MainMenuCode.GDSettingsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDSettingsObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainMenuCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FullScreen"), gdjs.MainMenuCode.GDFullScreenObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDFullScreenObjects3.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDFullScreenObjects3[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDFullScreenObjects3[k] = gdjs.MainMenuCode.GDFullScreenObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDFullScreenObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15611420);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FullScreen"), gdjs.MainMenuCode.GDFullScreenObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDFullScreenObjects3.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDFullScreenObjects3[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDFullScreenObjects3[k] = gdjs.MainMenuCode.GDFullScreenObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDFullScreenObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15612556);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15613364);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Options");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15614028);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Options");
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Volume_Slider"), gdjs.MainMenuCode.GDVolume_95SliderObjects3);
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber((( gdjs.MainMenuCode.GDVolume_95SliderObjects3.length === 0 ) ? 0 :gdjs.MainMenuCode.GDVolume_95SliderObjects3[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Options"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FullScreen"), gdjs.MainMenuCode.GDFullScreenObjects3);
gdjs.copyArray(runtimeScene.getObjects("Volume_Slider"), gdjs.MainMenuCode.GDVolume_95SliderObjects3);
{for(var i = 0, len = gdjs.MainMenuCode.GDFullScreenObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDFullScreenObjects3[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDVolume_95SliderObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDVolume_95SliderObjects3[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Options");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FullScreen"), gdjs.MainMenuCode.GDFullScreenObjects2);
gdjs.copyArray(runtimeScene.getObjects("Volume_Slider"), gdjs.MainMenuCode.GDVolume_95SliderObjects2);
{for(var i = 0, len = gdjs.MainMenuCode.GDFullScreenObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDFullScreenObjects2[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDVolume_95SliderObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDVolume_95SliderObjects2[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDCreditsObjects3Objects = Hashtable.newFrom({"Credits": gdjs.MainMenuCode.GDCreditsObjects3});
gdjs.MainMenuCode.asyncCallback15619764 = function (runtimeScene, asyncObjectsList) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "click.wav", false, 100, 1);
}}
gdjs.MainMenuCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.MainMenuCode.asyncCallback15619764(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainMenuCode.asyncCallback15620916 = function (runtimeScene, asyncObjectsList) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.sound.playSound(runtimeScene, "click.wav", false, 100, 1);
}}
gdjs.MainMenuCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.MainMenuCode.asyncCallback15620916(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainMenuCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainMenuCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainMenuCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15621636);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Hover.wav", false, 30, gdjs.randomFloatInRange(0.7, 1.1));
}}

}


};gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDyt_9595btnObjects2Objects = Hashtable.newFrom({"yt_btn": gdjs.MainMenuCode.GDyt_95btnObjects2});
gdjs.MainMenuCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Credits"), gdjs.MainMenuCode.GDCreditsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDCreditsObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainMenuCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15622348);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Credits");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15623036);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Credits");
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("yt_btn"), gdjs.MainMenuCode.GDyt_95btnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDyt_9595btnObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Credits");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/@TomIzDumb", runtimeScene);
}}

}


};gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDExitObjects1Objects = Hashtable.newFrom({"Exit": gdjs.MainMenuCode.GDExitObjects1});
gdjs.MainMenuCode.asyncCallback15626316 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("waitwhat"), gdjs.MainMenuCode.GDwaitwhatObjects4);
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "Glitch", false);
}{for(var i = 0, len = gdjs.MainMenuCode.GDwaitwhatObjects4.length ;i < len;++i) {
    gdjs.MainMenuCode.GDwaitwhatObjects4[i].hide(false);
}
}}
gdjs.MainMenuCode.eventsList10 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.MainMenuCode.asyncCallback15626316(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainMenuCode.asyncCallback15626148 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
{ //Subevents
gdjs.MainMenuCode.eventsList10(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.MainMenuCode.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.MainMenuCode.asyncCallback15626148(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainMenuCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click.wav", false, 100, 1);
}{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "Glitch", true);
}
{ //Subevents
gdjs.MainMenuCode.eventsList11(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15626892);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Hover.wav", false, 30, gdjs.randomFloatInRange(0.7, 1.1));
}}

}


};gdjs.MainMenuCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.MainMenuCode.GDExitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDExitObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainMenuCode.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.MainMenuCode.eventsList14 = function(runtimeScene) {

{


gdjs.MainMenuCode.eventsList1(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList5(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList9(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList13(runtimeScene);
}


};gdjs.MainMenuCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs.MainMenuCode.GDBlackObjects1);
gdjs.copyArray(runtimeScene.getObjects("Noise"), gdjs.MainMenuCode.GDNoiseObjects1);
gdjs.copyArray(runtimeScene.getObjects("Volume_Slider"), gdjs.MainMenuCode.GDVolume_95SliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("waitwhat"), gdjs.MainMenuCode.GDwaitwhatObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDVolume_95SliderObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDVolume_95SliderObjects1[i].SetValue(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDBlackObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBlackObjects1[i].setOpacity(150);
}
}{gdjs.evtsExt__WithThreeJS__Create3DScene.func(runtimeScene, 80, "7;16;26", "Skybox2.png", "0;0;0", 0.1, 4, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.sound.playSound(runtimeScene, "Ocean.wav", true, 45, 1);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "boat_title.ogg", 0, true, 60, 1);
}{gdjs.evtTools.input.showCursor(runtimeScene);
}{gdjs.evtsExt__MousePointerLock__ExitPointerLock.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "Glitch", false);
}{for(var i = 0, len = gdjs.MainMenuCode.GDNoiseObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDNoiseObjects1[i].setOpacity(6);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDwaitwhatObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDwaitwhatObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15602428);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FullScreen"), gdjs.MainMenuCode.GDFullScreenObjects1);
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}{for(var i = 0, len = gdjs.MainMenuCode.GDFullScreenObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDFullScreenObjects1[i].SetChecked(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15603476);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FullScreen"), gdjs.MainMenuCode.GDFullScreenObjects1);
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{for(var i = 0, len = gdjs.MainMenuCode.GDFullScreenObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDFullScreenObjects1[i].SetChecked(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__WithThreeJS__Rotate3DCameraLikeHead.func(runtimeScene, "+", 0, -(0.5), 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.MainMenuCode.eventsList14(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDBlackObjects1.length = 0;
gdjs.MainMenuCode.GDBlackObjects2.length = 0;
gdjs.MainMenuCode.GDBlackObjects3.length = 0;
gdjs.MainMenuCode.GDBlackObjects4.length = 0;
gdjs.MainMenuCode.GDBlackObjects5.length = 0;
gdjs.MainMenuCode.GDMade_95ByObjects1.length = 0;
gdjs.MainMenuCode.GDMade_95ByObjects2.length = 0;
gdjs.MainMenuCode.GDMade_95ByObjects3.length = 0;
gdjs.MainMenuCode.GDMade_95ByObjects4.length = 0;
gdjs.MainMenuCode.GDMade_95ByObjects5.length = 0;
gdjs.MainMenuCode.GDBoatObjects1.length = 0;
gdjs.MainMenuCode.GDBoatObjects2.length = 0;
gdjs.MainMenuCode.GDBoatObjects3.length = 0;
gdjs.MainMenuCode.GDBoatObjects4.length = 0;
gdjs.MainMenuCode.GDBoatObjects5.length = 0;
gdjs.MainMenuCode.GDPlayObjects1.length = 0;
gdjs.MainMenuCode.GDPlayObjects2.length = 0;
gdjs.MainMenuCode.GDPlayObjects3.length = 0;
gdjs.MainMenuCode.GDPlayObjects4.length = 0;
gdjs.MainMenuCode.GDPlayObjects5.length = 0;
gdjs.MainMenuCode.GDSettingsObjects1.length = 0;
gdjs.MainMenuCode.GDSettingsObjects2.length = 0;
gdjs.MainMenuCode.GDSettingsObjects3.length = 0;
gdjs.MainMenuCode.GDSettingsObjects4.length = 0;
gdjs.MainMenuCode.GDSettingsObjects5.length = 0;
gdjs.MainMenuCode.GDExitObjects1.length = 0;
gdjs.MainMenuCode.GDExitObjects2.length = 0;
gdjs.MainMenuCode.GDExitObjects3.length = 0;
gdjs.MainMenuCode.GDExitObjects4.length = 0;
gdjs.MainMenuCode.GDExitObjects5.length = 0;
gdjs.MainMenuCode.GDCreditsObjects1.length = 0;
gdjs.MainMenuCode.GDCreditsObjects2.length = 0;
gdjs.MainMenuCode.GDCreditsObjects3.length = 0;
gdjs.MainMenuCode.GDCreditsObjects4.length = 0;
gdjs.MainMenuCode.GDCreditsObjects5.length = 0;
gdjs.MainMenuCode.GDCredits_95ThanksObjects1.length = 0;
gdjs.MainMenuCode.GDCredits_95ThanksObjects2.length = 0;
gdjs.MainMenuCode.GDCredits_95ThanksObjects3.length = 0;
gdjs.MainMenuCode.GDCredits_95ThanksObjects4.length = 0;
gdjs.MainMenuCode.GDCredits_95ThanksObjects5.length = 0;
gdjs.MainMenuCode.GDyt_95btnObjects1.length = 0;
gdjs.MainMenuCode.GDyt_95btnObjects2.length = 0;
gdjs.MainMenuCode.GDyt_95btnObjects3.length = 0;
gdjs.MainMenuCode.GDyt_95btnObjects4.length = 0;
gdjs.MainMenuCode.GDyt_95btnObjects5.length = 0;
gdjs.MainMenuCode.GDCredits_95alsoObjects1.length = 0;
gdjs.MainMenuCode.GDCredits_95alsoObjects2.length = 0;
gdjs.MainMenuCode.GDCredits_95alsoObjects3.length = 0;
gdjs.MainMenuCode.GDCredits_95alsoObjects4.length = 0;
gdjs.MainMenuCode.GDCredits_95alsoObjects5.length = 0;
gdjs.MainMenuCode.GDOptions_95TXTObjects1.length = 0;
gdjs.MainMenuCode.GDOptions_95TXTObjects2.length = 0;
gdjs.MainMenuCode.GDOptions_95TXTObjects3.length = 0;
gdjs.MainMenuCode.GDOptions_95TXTObjects4.length = 0;
gdjs.MainMenuCode.GDOptions_95TXTObjects5.length = 0;
gdjs.MainMenuCode.GDVolume_95SliderObjects1.length = 0;
gdjs.MainMenuCode.GDVolume_95SliderObjects2.length = 0;
gdjs.MainMenuCode.GDVolume_95SliderObjects3.length = 0;
gdjs.MainMenuCode.GDVolume_95SliderObjects4.length = 0;
gdjs.MainMenuCode.GDVolume_95SliderObjects5.length = 0;
gdjs.MainMenuCode.GDOptions_95VolumeObjects1.length = 0;
gdjs.MainMenuCode.GDOptions_95VolumeObjects2.length = 0;
gdjs.MainMenuCode.GDOptions_95VolumeObjects3.length = 0;
gdjs.MainMenuCode.GDOptions_95VolumeObjects4.length = 0;
gdjs.MainMenuCode.GDOptions_95VolumeObjects5.length = 0;
gdjs.MainMenuCode.GDOptions_95FullScreenObjects1.length = 0;
gdjs.MainMenuCode.GDOptions_95FullScreenObjects2.length = 0;
gdjs.MainMenuCode.GDOptions_95FullScreenObjects3.length = 0;
gdjs.MainMenuCode.GDOptions_95FullScreenObjects4.length = 0;
gdjs.MainMenuCode.GDOptions_95FullScreenObjects5.length = 0;
gdjs.MainMenuCode.GDFullScreenObjects1.length = 0;
gdjs.MainMenuCode.GDFullScreenObjects2.length = 0;
gdjs.MainMenuCode.GDFullScreenObjects3.length = 0;
gdjs.MainMenuCode.GDFullScreenObjects4.length = 0;
gdjs.MainMenuCode.GDFullScreenObjects5.length = 0;
gdjs.MainMenuCode.GDNoiseObjects1.length = 0;
gdjs.MainMenuCode.GDNoiseObjects2.length = 0;
gdjs.MainMenuCode.GDNoiseObjects3.length = 0;
gdjs.MainMenuCode.GDNoiseObjects4.length = 0;
gdjs.MainMenuCode.GDNoiseObjects5.length = 0;
gdjs.MainMenuCode.GDwaitwhatObjects1.length = 0;
gdjs.MainMenuCode.GDwaitwhatObjects2.length = 0;
gdjs.MainMenuCode.GDwaitwhatObjects3.length = 0;
gdjs.MainMenuCode.GDwaitwhatObjects4.length = 0;
gdjs.MainMenuCode.GDwaitwhatObjects5.length = 0;

gdjs.MainMenuCode.eventsList15(runtimeScene);

return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
