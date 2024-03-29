
gdjs.evtsExt__AdvancedJump__DiveDash = gdjs.evtsExt__AdvancedJump__DiveDash || {};

/**
 * Behavior generated from Dive dash
 */
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash = class DiveDash extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.PlatformerCharacter = behaviorData.PlatformerCharacter !== undefined ? behaviorData.PlatformerCharacter : "";
    this._behaviorData.PlatformerConfigurationStack = behaviorData.PlatformerConfigurationStack !== undefined ? behaviorData.PlatformerConfigurationStack : "";
    this._behaviorData.DiveMaxFallingSpeed = behaviorData.DiveMaxFallingSpeed !== undefined ? behaviorData.DiveMaxFallingSpeed : Number("3000") || 0;
    this._behaviorData.DiveInitialFallingSpeed = behaviorData.DiveInitialFallingSpeed !== undefined ? behaviorData.DiveInitialFallingSpeed : Number("1000") || 0;
    this._behaviorData.DiveGravity = behaviorData.DiveGravity !== undefined ? behaviorData.DiveGravity : Number("8000") || 0;
    this._behaviorData.IsDiving = false;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.PlatformerCharacter !== newBehaviorData.PlatformerCharacter)
      this._behaviorData.PlatformerCharacter = newBehaviorData.PlatformerCharacter;
    if (oldBehaviorData.PlatformerConfigurationStack !== newBehaviorData.PlatformerConfigurationStack)
      this._behaviorData.PlatformerConfigurationStack = newBehaviorData.PlatformerConfigurationStack;
    if (oldBehaviorData.DiveMaxFallingSpeed !== newBehaviorData.DiveMaxFallingSpeed)
      this._behaviorData.DiveMaxFallingSpeed = newBehaviorData.DiveMaxFallingSpeed;
    if (oldBehaviorData.DiveInitialFallingSpeed !== newBehaviorData.DiveInitialFallingSpeed)
      this._behaviorData.DiveInitialFallingSpeed = newBehaviorData.DiveInitialFallingSpeed;
    if (oldBehaviorData.DiveGravity !== newBehaviorData.DiveGravity)
      this._behaviorData.DiveGravity = newBehaviorData.DiveGravity;
    if (oldBehaviorData.IsDiving !== newBehaviorData.IsDiving)
      this._behaviorData.IsDiving = newBehaviorData.IsDiving;

    return true;
  }

  // Properties:
  
  _getPlatformerCharacter() {
    return this._behaviorData.PlatformerCharacter !== undefined ? this._behaviorData.PlatformerCharacter : "";
  }
  _setPlatformerCharacter(newValue) {
    this._behaviorData.PlatformerCharacter = newValue;
  }
  _getPlatformerConfigurationStack() {
    return this._behaviorData.PlatformerConfigurationStack !== undefined ? this._behaviorData.PlatformerConfigurationStack : "";
  }
  _setPlatformerConfigurationStack(newValue) {
    this._behaviorData.PlatformerConfigurationStack = newValue;
  }
  _getDiveMaxFallingSpeed() {
    return this._behaviorData.DiveMaxFallingSpeed !== undefined ? this._behaviorData.DiveMaxFallingSpeed : Number("3000") || 0;
  }
  _setDiveMaxFallingSpeed(newValue) {
    this._behaviorData.DiveMaxFallingSpeed = newValue;
  }
  _getDiveInitialFallingSpeed() {
    return this._behaviorData.DiveInitialFallingSpeed !== undefined ? this._behaviorData.DiveInitialFallingSpeed : Number("1000") || 0;
  }
  _setDiveInitialFallingSpeed(newValue) {
    this._behaviorData.DiveInitialFallingSpeed = newValue;
  }
  _getDiveGravity() {
    return this._behaviorData.DiveGravity !== undefined ? this._behaviorData.DiveGravity : Number("8000") || 0;
  }
  _setDiveGravity(newValue) {
    this._behaviorData.DiveGravity = newValue;
  }
  _getIsDiving() {
    return this._behaviorData.IsDiving !== undefined ? this._behaviorData.IsDiving : false;
  }
  _setIsDiving(newValue) {
    this._behaviorData.IsDiving = newValue;
  }
  _toggleIsDiving() {
    this._setIsDiving(!this._getIsDiving());
  }
}

/**
 * Shared data generated from Dive dash
 */
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.SharedData = class DiveDashSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._AdvancedJump_DiveDashSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._AdvancedJump_DiveDashSharedData = new gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.SharedData(
      initialData
    );
  }
  return instanceContainer._AdvancedJump_DiveDashSharedData;
}

// Methods:
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.doStepPreEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.doStepPreEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.doStepPreEventsContext.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isOnFloor() ) {
        gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsDiving() ) {
        gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerConfigurationStack")).RevertConfiguration("DiveDash", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsDiving(false);
}
}}

}


};

gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
, "PlatformerConfigurationStack": this._getPlatformerConfigurationStack()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.SimulateDiveKeyContext = {};
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.SimulateDiveKeyContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.SimulateDiveKeyContext.GDObjectObjects2= [];

gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.SimulateDiveKeyContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.SimulateDiveKeyContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.SimulateDiveKeyContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.SimulateDiveKeyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.SimulateDiveKeyContext.GDObjectObjects1);

gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.SimulateDiveKeyContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.SimulateDiveKeyContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.SimulateDiveKeyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CanDive((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.SimulateDiveKeyContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.SimulateDiveKeyContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.SimulateDiveKeyContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.SimulateDiveKeyContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.SimulateDiveKeyContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.SimulateDiveKeyContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.SimulateDiveKeyContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.SimulateDiveKeyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).abortJump();
}
}{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.SimulateDiveKeyContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.SimulateDiveKeyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerConfigurationStack")).ConfigureMaxFallSpeed((gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.SimulateDiveKeyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDiveMaxFallingSpeed()), "DiveDash", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.SimulateDiveKeyContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.SimulateDiveKeyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerConfigurationStack")).ConfigureGravity((gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.SimulateDiveKeyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDiveGravity()), "DiveDash", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.SimulateDiveKeyContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.SimulateDiveKeyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).setCurrentFallSpeed((gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.SimulateDiveKeyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDiveInitialFallingSpeed()));
}
}{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.SimulateDiveKeyContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.SimulateDiveKeyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsDiving(true);
}
}}

}


};

gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.SimulateDiveKey = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
, "PlatformerConfigurationStack": this._getPlatformerConfigurationStack()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.SimulateDiveKeyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.SimulateDiveKeyContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.SimulateDiveKeyContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext = {};
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.GDObjectObjects2= [];

gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.condition2IsTrue_1 = {val:false};


gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.GDObjectObjects1.length = 0;


gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.condition1IsTrue_0.val = false;
{
{gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.conditionTrue_1 = gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.condition0IsTrue_0;
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.GDObjectObjects1_1final.length = 0;gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.condition0IsTrue_1.val = false;
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.condition1IsTrue_1.val = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.GDObjectObjects2);
for(var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isJumping() ) {
        gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.condition0IsTrue_1.val = true;
        gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.GDObjectObjects2.length = k;if( gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.condition0IsTrue_1.val ) {
    gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.GDObjectObjects2.length;j<jLen;++j) {
        if ( gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.GDObjectObjects1_1final.push(gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.GDObjectObjects2);
for(var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).isFalling() ) {
        gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.condition1IsTrue_1.val = true;
        gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.GDObjectObjects2.length = k;if( gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.condition1IsTrue_1.val ) {
    gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.GDObjectObjects2.length;j<jLen;++j) {
        if ( gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.GDObjectObjects1_1final.push(gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.GDObjectObjects1_1final, gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.GDObjectObjects1);
}
}
}if ( gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsDiving()) ) {
        gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.condition1IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDive = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
, "PlatformerConfigurationStack": this._getPlatformerConfigurationStack()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.CanDiveContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.IsDivingContext = {};
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.IsDivingContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.IsDivingContext.GDObjectObjects2= [];

gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.IsDivingContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.IsDivingContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.IsDivingContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.IsDivingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.IsDivingContext.GDObjectObjects1);

gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.IsDivingContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.IsDivingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.IsDivingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsDiving() ) {
        gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.IsDivingContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.IsDivingContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.IsDivingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.IsDivingContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.IsDivingContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.IsDiving = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
, "PlatformerConfigurationStack": this._getPlatformerConfigurationStack()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.IsDivingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.IsDivingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash.prototype.IsDivingContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}


gdjs.registerBehavior("AdvancedJump::DiveDash", gdjs.evtsExt__AdvancedJump__DiveDash.DiveDash);
