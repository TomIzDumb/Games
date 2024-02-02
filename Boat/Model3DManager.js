var gdjs;(function(c){const i=new c.Logger("Model3DManager");class u{constructor(r,t){this._loadedThreeModels=new Map;this._loader=null;this._invalidModel=null;if(this._resources=r,this._resourcesLoader=t,typeof THREE!="undefined"){this._loader=new THREE_ADDONS.GLTFLoader;const n=new THREE.BoxGeometry(1,1,1),e=new THREE.MeshBasicMaterial({color:"#ff00ff"});this._invalidModel=new THREE.Mesh(n,e)}}setResources(r){this._resources=r}loadModels(r,t){const e=this._resources.filter(function(s){return s.kind==="model3D"});if(e.length===0||!this._loader)return t(e.length);let o=0;for(let s=0;s<e.length;++s){const a=e[s],d=this._resourcesLoader.getFullUrl(a.file);this._loader.withCredentials=this._resourcesLoader.checkIfCredentialsRequired(d),this._loader.load(d,l=>{l.scene.rotation.order="ZYX",this._loadedThreeModels.set(a.name,l.scene),o++,o===e.length?t(e.length):r(o,e.length)},void 0,l=>{i.error(l),o++,o===e.length?t(e.length):r(o,e.length)})}}getModel(r){return this._loadedThreeModels.get(r)||this._invalidModel}}c.Model3DManager=u})(gdjs||(gdjs={}));
//# sourceMappingURL=Model3DManager.js.map