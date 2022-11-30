!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i),i.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),i.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return o.apply(null,arguments)};var n,r=(n=i("gD1JV"))&&n.__esModule?n:{default:n};function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,n){return(o=a()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return n&&r.default(a,n.prototype),a}).apply(null,arguments)}})),i.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),i.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=i("fVNic"))&&n.__esModule?n:{default:n}}));var a=i("bpxeT"),o=i("8MBJY"),s=i("a2hTj"),u=i("hKHmD"),c=i("8nrFW"),l=i("2TvXO"),f=(a=i("bpxeT"),o=i("8MBJY"),s=i("a2hTj"),i("1t1Wn")),h=(c=i("8nrFW"),l=i("2TvXO"),i("ds8z5")),p=(o=i("8MBJY"),s=i("a2hTj"),i("eYQtU")),d=(f=i("1t1Wn"),c=i("8nrFW"),{});Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(e){return w(e)};var v=b(i("ge8co")),g=b(i("cZGw3")),y=b(i("fVNic")),m=b(i("gD1JV"));function b(e){return e&&e.__esModule?e:{default:e}}function w(e){var t="function"==typeof Map?new Map:void 0;return w=function(e){if(null===e||!g.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return v.default(e,arguments,y.default(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),m.default(n,e)},w(e)}var k,I,x,E=i("2MbLg"),_=k={};function T(){throw new Error("setTimeout has not been defined")}function S(){throw new Error("clearTimeout has not been defined")}function D(e){if(I===setTimeout)return setTimeout(e,0);if((I===T||!I)&&setTimeout)return I=setTimeout,setTimeout(e,0);try{return I(e,0)}catch(t){try{return I.call(null,e,0)}catch(t){return I.call(this,e,0)}}}!function(){try{I="function"==typeof setTimeout?setTimeout:T}catch(e){I=T}try{x="function"==typeof clearTimeout?clearTimeout:S}catch(e){x=S}}();var A,C=[],O=!1,R=-1;function P(){O&&A&&(O=!1,A.length?C=A.concat(C):R=-1,C.length&&M())}function M(){if(!O){var e=D(P);O=!0;for(var t=C.length;t;){for(A=C,C=[];++R<t;)A&&A[R].run();R=-1,t=C.length}A=null,O=!1,function(e){if(x===clearTimeout)return clearTimeout(e);if((x===S||!x)&&clearTimeout)return x=clearTimeout,clearTimeout(e);try{x(e)}catch(t){try{return x.call(null,e)}catch(t){return x.call(this,e)}}}(e)}}function N(e,t){this.fun=e,this.array=t}function L(){}_.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];C.push(new N(e,t)),1!==C.length||O||D(M)},N.prototype.run=function(){this.fun.apply(null,this.array)},_.title="browser",_.browser=!0,_.env={},_.argv=[],_.version="",_.versions={},_.on=L,_.addListener=L,_.once=L,_.off=L,_.removeListener=L,_.removeAllListeners=L,_.emit=L,_.prependListener=L,_.prependOnceListener=L,_.listeners=function(e){return[]},_.binding=function(e){throw new Error("process.binding is not supported")},_.cwd=function(){return"/"},_.chdir=function(e){throw new Error("process.chdir is not supported")},_.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var F=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},j={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,f=(3&a)<<4|s>>4,h=(15&s)<<2|c>>6,p=63&c;u||(p=64,o||(h=64)),r.push(n[l],n[f],n[h],n[p])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(F(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var a=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw Error();var c=a<<2|o>>4;if(r.push(c),64!==s){var l=o<<4&240|s>>2;if(r.push(l),64!==u){var f=s<<6&192|u;r.push(f)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},B=function(e){return function(e){var t=F(e);return j.encodeByteArray(t,!0)}(e).replace(/\./g,"")},U=function(e){try{return j.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function H(){return"object"==typeof indexedDB}function V(){return new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}function W(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var K=function(){return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},q=function(){try{return K()||function(){if(void 0!==k&&void 0!==k.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&U(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},G=function(e){var t=function(e){var t,n;return null===(n=null===(t=q())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]}(e);if(t){var n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error("Invalid host ".concat(t," with no separate hostname and port!"));var r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]}},$=function(){var e;return null===(e=q())||void 0===e?void 0:e.config},Y=function(){"use strict";function t(){var n=this;e(o)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}return e(s)(t,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function J(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var a=Object.assign({iss:"https://securetoken.google.com/".concat(n),aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[B(JSON.stringify({alg:"none",type:"JWT"})),B(JSON.stringify(a)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X=function(t){"use strict";e(p)(r,t);var n=e(E)(r);function r(t,i,a){var s;return e(o)(this,r),(s=n.call(this,i)).code=t,s.customData=a,s.name="FirebaseError",Object.setPrototypeOf(e(h)(s),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(e(h)(s),Z.prototype.create),s}return r}(e(d)(Error)),Z=function(){"use strict";function t(n,r,i){e(o)(this,t),this.service=n,this.serviceName=r,this.errors=i}return e(s)(t,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?Q(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new X(a,u,i);return c}}]),t}();function Q(e,t){return e.replace(ee,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var ee=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],f=t[c];if(ne(l)&&ne(f)){if(!te(l,f))return!1}else if(l!==f)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var h=!0,p=!1,d=void 0;try{for(var v,g=r[Symbol.iterator]();!(h=(v=g.next()).done);h=!0){var y=v.value;if(!n.includes(y))return!1}}catch(e){p=!0,d=e}finally{try{h||null==g.return||g.return()}finally{if(p)throw d}}return!0}function ne(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var re=144e5;function ie(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(re,r+i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ae(e){return e&&e._delegate?e._delegate:e}var oe=function(){"use strict";function t(n,r,i){e(o)(this,t),this.name=n,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e(s)(t,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),t}(),se="[DEFAULT]",ue=function(){"use strict";function t(n,r){e(o)(this,t),this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e(s)(t,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new Y;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:se})}catch(e){}var n=!0,r=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=e(f)(a.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var h=this.getOrInitializeService({instanceIdentifier:l});c.resolve(h)}catch(e){}}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var t=this;return e(a)(e(l).mark((function n(){var r;return e(l).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Array.from(t.instances.values()),n.next=3,Promise.all(e(c)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(e(c)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return n.stop()}}),n)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.options,r=void 0===n?{}:n,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:r}),o=!0,s=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var h=e(f)(c.value,2),p=h[0],d=h[1],v=this.normalizeInstanceIdentifier(p);i===v&&d.resolve(a)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return a}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var a=this.instances.get(r);return a&&e(a,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,a=this.instances.get(n);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===se?void 0:t),options:i}),this.instances.set(n,a),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(a,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se;return this.component?this.component.multipleInstances?e:se:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce,le,fe=function(){"use strict";function t(n){e(o)(this,t),this.name=n,this.providers=new Map}return e(s)(t,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new ue(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),t}(),he=(o=i("8MBJY"),s=i("a2hTj"),u=i("hKHmD"),c=i("8nrFW"),[]);(le=ce||(ce={}))[le.DEBUG=0]="DEBUG",le[le.VERBOSE=1]="VERBOSE",le[le.INFO=2]="INFO",le[le.WARN=3]="WARN",le[le.ERROR=4]="ERROR",le[le.SILENT=5]="SILENT";var pe,de={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},ve=ce.INFO,ge=(pe={},e(u)(pe,ce.DEBUG,"log"),e(u)(pe,ce.VERBOSE,"log"),e(u)(pe,ce.INFO,"info"),e(u)(pe,ce.WARN,"warn"),e(u)(pe,ce.ERROR,"error"),pe),ye=function(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var o;if(!(n<t.logLevel)){var s=(new Date).toISOString(),u=ge[n];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(n,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(t.name,":")].concat(e(c)(i)))}},me=function(){"use strict";function t(n){e(o)(this,t),this.name=n,this._logLevel=ve,this._logHandler=ye,this._userLogHandler=null,he.push(this)}return e(s)(t,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in ce))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?de[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ce.DEBUG].concat(e(c)(n))),this._logHandler.apply(this,[this,ce.DEBUG].concat(e(c)(n)))}},{key:"log",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ce.VERBOSE].concat(e(c)(n))),this._logHandler.apply(this,[this,ce.VERBOSE].concat(e(c)(n)))}},{key:"info",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ce.INFO].concat(e(c)(n))),this._logHandler.apply(this,[this,ce.INFO].concat(e(c)(n)))}},{key:"warn",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ce.WARN].concat(e(c)(n))),this._logHandler.apply(this,[this,ce.WARN].concat(e(c)(n)))}},{key:"error",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,ce.ERROR].concat(e(c)(n))),this._logHandler.apply(this,[this,ce.ERROR].concat(e(c)(n)))}}]),t}();a=i("bpxeT");var be={};Object.defineProperty(be,"__esModule",{value:!0}),be.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){ke.default(e,t,n[t])}))}return e};var we,ke=(we=i("hKHmD"))&&we.__esModule?we:{default:we};var Ie,xe;c=i("8nrFW"),l=i("2TvXO"),c=i("8nrFW");var Ee=new WeakMap,_e=new WeakMap,Te=new WeakMap,Se=new WeakMap,De=new WeakMap;var Ae={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return _e.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Te.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Re(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function Ce(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(xe||(xe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.apply(Pe(this),n),Re(Ee.get(this))}:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return Re(t.apply(Pe(this),n))}:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var o,s=(o=t).call.apply(o,[Pe(this),n].concat(e(c)(i)));return Te.set(s,n.sort?n.sort():[n]),Re(s)}}function Oe(e){return"function"==typeof e?Ce(e):(e instanceof IDBTransaction&&function(e){if(!_e.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),r()},a=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));_e.set(e,t)}}(e),t=e,(Ie||(Ie=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,Ae):e);var t}function Re(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(Re(t.result)),r()},a=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&Ee.set(e,t)})).catch((function(){})),De.set(n,t),n;var t,n;if(Se.has(e))return Se.get(e);var r=Oe(e);return r!==e&&(Se.set(e,r),De.set(r,e)),r}var Pe=function(e){return De.get(e)};function Me(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,a=n.blocking,o=n.terminated,s=indexedDB.open(e,t),u=Re(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(Re(s.result),e.oldVersion,e.newVersion,Re(s.transaction))})),r&&s.addEventListener("blocked",(function(){return r()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),u}var Ne=["get","getKey","getAll","getAllKeys","count"],Le=["put","add","delete","clear"],Fe=new Map;function je(t,n){if(t instanceof IDBDatabase&&!(n in t)&&"string"==typeof n){if(Fe.get(n))return Fe.get(n);var r=n.replace(/FromIndex$/,""),i=n!==r,o=Le.includes(r);if(r in(i?IDBIndex:IDBObjectStore).prototype&&(o||Ne.includes(r))){var s,u=(s=e(a)(e(l).mark((function t(n){var a,s,u,f,h,p,d=arguments;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a=d.length,s=new Array(a>1?a-1:0),u=1;u<a;u++)s[u-1]=d[u];return h=this.transaction(n,o?"readwrite":"readonly"),p=h.store,i&&(p=p.index(s.shift())),t.next=7,Promise.all([(f=p)[r].apply(f,e(c)(s)),o&&h.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)}))),function(e){return s.apply(this,arguments)});return Fe.set(n,u),u}}}Ae=function(t){return e(be)({},t,{get:function(e,n,r){return je(e,n)||t.get(e,n,r)},has:function(e,n){return!!je(e,n)||t.has(e,n)}})}(Ae);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Be=function(){"use strict";function t(n){e(o)(this,t),this.container=n}return e(s)(t,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),t}();var Ue,ze,He="@firebase/app",Ve="0.8.4",We=new me("@firebase/app"),Ke="[DEFAULT]",qe=(Ue={},e(u)(Ue,He,"fire-core"),e(u)(Ue,"@firebase/app-compat","fire-core-compat"),e(u)(Ue,"@firebase/analytics","fire-analytics"),e(u)(Ue,"@firebase/analytics-compat","fire-analytics-compat"),e(u)(Ue,"@firebase/app-check","fire-app-check"),e(u)(Ue,"@firebase/app-check-compat","fire-app-check-compat"),e(u)(Ue,"@firebase/auth","fire-auth"),e(u)(Ue,"@firebase/auth-compat","fire-auth-compat"),e(u)(Ue,"@firebase/database","fire-rtdb"),e(u)(Ue,"@firebase/database-compat","fire-rtdb-compat"),e(u)(Ue,"@firebase/functions","fire-fn"),e(u)(Ue,"@firebase/functions-compat","fire-fn-compat"),e(u)(Ue,"@firebase/installations","fire-iid"),e(u)(Ue,"@firebase/installations-compat","fire-iid-compat"),e(u)(Ue,"@firebase/messaging","fire-fcm"),e(u)(Ue,"@firebase/messaging-compat","fire-fcm-compat"),e(u)(Ue,"@firebase/performance","fire-perf"),e(u)(Ue,"@firebase/performance-compat","fire-perf-compat"),e(u)(Ue,"@firebase/remote-config","fire-rc"),e(u)(Ue,"@firebase/remote-config-compat","fire-rc-compat"),e(u)(Ue,"@firebase/storage","fire-gcs"),e(u)(Ue,"@firebase/storage-compat","fire-gcs-compat"),e(u)(Ue,"@firebase/firestore","fire-fst"),e(u)(Ue,"@firebase/firestore-compat","fire-fst-compat"),e(u)(Ue,"fire-js","fire-js"),e(u)(Ue,"firebase","fire-js-all"),Ue),Ge=new Map,$e=new Map;function Ye(e,t){try{e.container.addComponent(t)}catch(n){We.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function Je(e){var t=e.name;if($e.has(t))return We.debug("There were multiple attempts to register component ".concat(t,".")),!1;$e.set(t,e);var n=!0,r=!1,i=void 0;try{for(var a,o=Ge.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){Ye(a.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}function Xe(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ze=(ze={},e(u)(ze,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),e(u)(ze,"bad-app-name","Illegal App name: '{$appName}"),e(u)(ze,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),e(u)(ze,"app-deleted","Firebase App named '{$appName}' already deleted"),e(u)(ze,"no-options","Need to provide options, when not being deployed to hosting via source."),e(u)(ze,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),e(u)(ze,"invalid-log-argument","First argument to `onLog` must be null or a function."),e(u)(ze,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),e(u)(ze,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),e(u)(ze,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),e(u)(ze,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),ze),Qe=new Z("app","Firebase",Ze),et=function(){"use strict";function t(n,r,i){var a=this;e(o)(this,t),this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new oe("app",(function(){return a}),"PUBLIC"))}return e(s)(t,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw Qe.create("app-deleted",{appName:this._name})}}]),t}();function tt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!=typeof t){var r=t;t={name:r}}var i=Object.assign({name:Ke,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw Qe.create("bad-app-name",{appName:String(a)});if(n||(n=$()),!n)throw Qe.create("no-options");var o=Ge.get(a);if(o){if(te(n,o.options)&&te(i,o.config))return o;throw Qe.create("duplicate-app",{appName:a})}var s=new fe(a),u=!0,c=!1,l=void 0;try{for(var f,h=$e.values()[Symbol.iterator]();!(u=(f=h.next()).done);u=!0){var p=f.value;s.addComponent(p)}}catch(e){c=!0,l=e}finally{try{u||null==h.return||h.return()}finally{if(c)throw l}}var d=new et(n,i,s);return Ge.set(a,d),d}function nt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=Ge.get(e);if(!t&&e===Ke)return tt();if(!t)throw Qe.create("no-app",{appName:e});return t}function rt(e,t,n){var r,i=null!==(r=qe[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void We.warn(s.join(" "))}Je(new oe("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var it="firebase-heartbeat-store",at=null;function ot(){return at||(at=Me("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(it)}}).catch((function(e){throw Qe.create("idb-open",{originalErrorMessage:e.message})}))),at}function st(e){return ut.apply(this,arguments)}function ut(){return(ut=e(a)(e(l).mark((function t(n){var r,i,a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,ot();case 4:return i=e.sent,e.abrupt("return",i.transaction(it).objectStore(it).get(ft(n)));case 8:e.prev=8,e.t0=e.catch(1),e.t0 instanceof X?We.warn(e.t0.message):(a=Qe.create("idb-get",{originalErrorMessage:null===(r=e.t0)||void 0===r?void 0:r.message}),We.warn(a.message));case 11:case"end":return e.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function ct(e,t){return lt.apply(this,arguments)}function lt(){return(lt=e(a)(e(l).mark((function t(n,r){var i,a,o,s,u;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,ot();case 4:return a=e.sent,o=a.transaction(it,"readwrite"),s=o.objectStore(it),e.next=9,s.put(r,ft(n));case 9:return e.abrupt("return",o.done);case 12:e.prev=12,e.t0=e.catch(1),e.t0 instanceof X?We.warn(e.t0.message):(u=Qe.create("idb-set",{originalErrorMessage:null===(i=e.t0)||void 0===i?void 0:i.message}),We.warn(u.message));case 15:case"end":return e.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}function ft(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht=function(){"use strict";function t(n){var r=this;e(o)(this,t),this.container=n,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new gt(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return e(s)(t,[{key:"triggerHeartbeat",value:function(){var t=this;return e(a)(e(l).mark((function n(){var r,i,a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),a=pt(),null!==t._heartbeatsCache){e.next=7;break}return e.next=6,t._heartbeatsCachePromise;case 6:t._heartbeatsCache=e.sent;case 7:if(t._heartbeatsCache.lastSentHeartbeatDate!==a&&!t._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){e.next=11;break}return e.abrupt("return");case 11:t._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return t._heartbeatsCache.heartbeats=t._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",t._storage.overwrite(t._heartbeatsCache));case 14:case"end":return e.stop()}}),n)})))()}},{key:"getHeartbeatsHeader",value:function(){var t=this;return e(a)(e(l).mark((function n(){var r,i,a,o,s;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t._heartbeatsCache){e.next=3;break}return e.next=3,t._heartbeatsCachePromise;case 3:if(null!==t._heartbeatsCache&&0!==t._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(r=pt(),i=dt(t._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,o=i.unsentEntries,s=B(JSON.stringify({version:2,heartbeats:a})),t._heartbeatsCache.lastSentHeartbeatDate=r,!(o.length>0)){e.next=15;break}return t._heartbeatsCache.heartbeats=o,e.next=13,t._storage.overwrite(t._heartbeatsCache);case 13:e.next=16;break;case 15:t._heartbeatsCache.heartbeats=[],t._storage.overwrite(t._heartbeatsCache);case 16:return e.abrupt("return",s);case 17:case"end":return e.stop()}}),n)})))()}}]),t}();function pt(){return(new Date).toISOString().substring(0,10)}function dt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=n.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),yt(n)>t)return o.dates.pop(),"break"}else if(n.push({agent:a.agent,dates:[a.date]}),yt(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:n,unsentEntries:r}}var vt,gt=function(){"use strict";function t(n){e(o)(this,t),this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e(s)(t,[{key:"runIndexedDBEnvironmentCheck",value:function(){return e(a)(e(l).mark((function t(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(H()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",V().then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),t)})))()}},{key:"read",value:function(){var t=this;return e(a)(e(l).mark((function n(){var r;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,st(t.app);case 9:return r=e.sent,e.abrupt("return",r||{heartbeats:[]});case 11:case"end":return e.stop()}}),n)})))()}},{key:"overwrite",value:function(t){var n=this;return e(a)(e(l).mark((function r(){var i,a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n._canUseIndexedDBPromise;case 3:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,n.read();case 10:return a=e.sent,e.abrupt("return",ct(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 12:case"end":return e.stop()}}),r)})))()}},{key:"add",value:function(t){var n=this;return e(a)(e(l).mark((function r(){var i,a;return e(l).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,n._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,n.read();case 10:return a=r.sent,r.abrupt("return",ct(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e(c)(a.heartbeats).concat(e(c)(t.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),t}();function yt(e){return B(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt="",Je(new oe("platform-logger",(function(e){return new Be(e)}),"PRIVATE")),Je(new oe("heartbeat",(function(e){return new ht(e)}),"PRIVATE")),rt(He,Ve,vt),rt(He,Ve,"esm2017"),rt("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
rt("firebase","9.14.0","app");a=i("bpxeT"),o=i("8MBJY"),s=i("a2hTj"),u=i("hKHmD"),f=i("1t1Wn"),l=i("2TvXO"),a=i("bpxeT"),u=i("hKHmD"),c=i("8nrFW"),l=i("2TvXO");var mt,bt="@firebase/installations",wt="0.5.16",kt=1e4,It="w:".concat(wt),xt="FIS_v2",Et=36e5,_t=(mt={},e(u)(mt,"missing-app-config-values",'Missing App configuration value: "{$valueName}"'),e(u)(mt,"not-registered","Firebase Installation is not registered."),e(u)(mt,"installation-not-found","Firebase Installation not found."),e(u)(mt,"request-failed",'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"'),e(u)(mt,"app-offline","Could not process request. Application offline."),e(u)(mt,"delete-pending-registration","Can't delete installation while there is a pending registration request."),mt),Tt=new Z("installations","Installations",_t);function St(e){return e instanceof X&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(e){var t=e.projectId;return"".concat("https://firebaseinstallations.googleapis.com/v1","/projects/").concat(t,"/installations")}function At(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}function Ct(e,t){return Ot.apply(this,arguments)}function Ot(){return(Ot=e(a)(e(l).mark((function t(n,r){var i,a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.json();case 2:return i=e.sent,a=i.error,e.abrupt("return",Tt.create("request-failed",{requestName:n,serverCode:a.code,serverMessage:a.message,serverStatus:a.status}));case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Rt(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Pt(e,t){var n=t.refreshToken,r=Rt(e);return r.append("Authorization",function(e){return"".concat(xt," ").concat(e)}(n)),r}function Mt(e){return Nt.apply(this,arguments)}function Nt(){return(Nt=e(a)(e(l).mark((function t(n){var r;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:if(!((r=e.sent).status>=500&&r.status<600)){e.next=5;break}return e.abrupt("return",n());case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Lt(e,t){return Ft.apply(this,arguments)}function Ft(){return(Ft=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(l).mark((function t(n,r){var i,a,o,s,u,c,f,h,p,d,v,g;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.appConfig,a=n.heartbeatServiceProvider,o=r.fid,s=Dt(i),u=Rt(i),!(c=a.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,c.getHeartbeatsHeader();case 7:(f=e.sent)&&u.append("x-firebase-client",f);case 9:return h={fid:o,authVersion:xt,appId:i.appId,sdkVersion:It},p={method:"POST",headers:u,body:JSON.stringify(h)},e.next=13,Mt((function(){return fetch(s,p)}));case 13:if(!(d=e.sent).ok){e.next=22;break}return e.next=17,d.json();case 17:return v=e.sent,g={fid:v.fid||o,registrationStatus:2,refreshToken:v.refreshToken,authToken:At(v.authToken)},e.abrupt("return",g);case 22:return e.next=24,Ct("Create Installation",d);case 24:throw e.sent;case 25:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(e){return new Promise((function(t){setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Bt=/^[cdef][\w-]{21}$/;function Ut(){try{var t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;var n=function(t){return(n=t,btoa((r=String).fromCharCode.apply(r,e(c)(n))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var n,r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);return Bt.test(n)?n:""}catch(e){return""}}function zt(e){return"".concat(e.appName,"!").concat(e.appId)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ht=new Map;function Vt(e,t){var n=zt(e);Wt(n,t),function(e,t){var n=qt();n&&n.postMessage({key:e,fid:t});Gt()}(n,t)}function Wt(e,t){var n=Ht.get(e);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}var Kt=null;function qt(){return!Kt&&"BroadcastChannel"in self&&((Kt=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){Wt(e.data.key,e.data.fid)}),Kt}function Gt(){0===Ht.size&&Kt&&(Kt.close(),Kt=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $t="firebase-installations-store",Yt=null;function Jt(){return Yt||(Yt=Me("firebase-installations-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore($t)}})),Yt}function Xt(e,t){return Zt.apply(this,arguments)}function Zt(){return(Zt=e(a)(e(l).mark((function t(n,r){var i,a,o,s,u;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=zt(n),e.next=3,Jt();case 3:return a=e.sent,o=a.transaction($t,"readwrite"),s=o.objectStore($t),e.next=8,s.get(i);case 8:return u=e.sent,e.next=11,s.put(r,i);case 11:return e.next=13,o.done;case 13:return u&&u.fid===r.fid||Vt(n,r.fid),e.abrupt("return",r);case 15:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Qt(e){return en.apply(this,arguments)}function en(){return(en=e(a)(e(l).mark((function t(n){var r,i,a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=zt(n),e.next=3,Jt();case 3:return i=e.sent,a=i.transaction($t,"readwrite"),e.next=7,a.objectStore($t).delete(r);case 7:return e.next=9,a.done;case 9:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function tn(e,t){return nn.apply(this,arguments)}function nn(){return(nn=e(a)(e(l).mark((function t(n,r){var i,a,o,s,u,c;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=zt(n),e.next=3,Jt();case 3:return a=e.sent,o=a.transaction($t,"readwrite"),s=o.objectStore($t),e.next=8,s.get(i);case 8:if(u=e.sent,void 0!==(c=r(u))){e.next=15;break}return e.next=13,s.delete(i);case 13:e.next=17;break;case 15:return e.next=17,s.put(c,i);case 17:return e.next=19,o.done;case 19:return!c||u&&u.fid===c.fid||Vt(n,c.fid),e.abrupt("return",c);case 21:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function rn(e){return an.apply(this,arguments)}function an(){return(an=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(l).mark((function t(n){var r,i;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,tn(n.appConfig,(function(e){var t=on(e),i=sn(n,t);return r=i.registrationPromise,i.installationEntry}));case 3:if(""!==(i=e.sent).fid){e.next=9;break}return e.next=7,r;case 7:return e.t0=e.sent,e.abrupt("return",{installationEntry:e.t0});case 9:return e.abrupt("return",{installationEntry:i,registrationPromise:r});case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function on(e){return hn(e||{fid:Ut(),registrationStatus:0})}function sn(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(Tt.create("app-offline"))};var n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=function(e,t){return un.apply(this,arguments)}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:cn(e)}:{installationEntry:t}}function un(){return(un=e(a)(e(l).mark((function t(n,r){var i;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Lt(n,r);case 3:return i=e.sent,e.abrupt("return",Xt(n.appConfig,i));case 7:if(e.prev=7,e.t0=e.catch(0),!St(e.t0)||409!==e.t0.customData.serverCode){e.next=14;break}return e.next=12,Qt(n.appConfig);case 12:e.next=16;break;case 14:return e.next=16,Xt(n.appConfig,{fid:r.fid,registrationStatus:0});case 16:throw e.t0;case 17:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function cn(e){return ln.apply(this,arguments)}function ln(){return(ln=e(a)(e(l).mark((function t(n){var r,i,a,o;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fn(n.appConfig);case 2:r=e.sent;case 3:if(1!==r.registrationStatus){e.next=11;break}return e.next=6,jt(100);case 6:return e.next=8,fn(n.appConfig);case 8:r=e.sent,e.next=3;break;case 11:if(0!==r.registrationStatus){e.next=22;break}return e.next=14,rn(n);case 14:if(i=e.sent,a=i.installationEntry,!(o=i.registrationPromise)){e.next=21;break}return e.abrupt("return",o);case 21:return e.abrupt("return",a);case 22:return e.abrupt("return",r);case 23:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function fn(e){return tn(e,(function(e){if(!e)throw Tt.create("installation-not-found");return hn(e)}))}function hn(e){return 1===(t=e).registrationStatus&&t.registrationTime+kt<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}function pn(e,t){return dn.apply(this,arguments)}function dn(){return(dn=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(l).mark((function t(n,r){var i,a,o,s,u,c,f,h,p,d,v;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.appConfig,a=n.heartbeatServiceProvider,o=vn(i,r),s=Pt(i,r),!(u=a.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,u.getHeartbeatsHeader();case 7:(c=e.sent)&&s.append("x-firebase-client",c);case 9:return f={installation:{sdkVersion:It,appId:i.appId}},h={method:"POST",headers:s,body:JSON.stringify(f)},e.next=13,Mt((function(){return fetch(o,h)}));case 13:if(!(p=e.sent).ok){e.next=22;break}return e.next=17,p.json();case 17:return d=e.sent,v=At(d),e.abrupt("return",v);case 22:return e.next=24,Ct("Generate Auth Token",p);case 24:throw e.sent;case 25:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function vn(e,t){var n=t.fid;return"".concat(Dt(e),"/").concat(n,"/authTokens:generate")}function gn(e){return yn.apply(this,arguments)}function yn(){return yn=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(l).mark((function t(n){var r,i,a,o,s=arguments;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]&&s[1],e.next=4,tn(n.appConfig,(function(e){if(!xn(e))throw Tt.create("not-registered");var t=e.authToken;if(!r&&En(t))return e;if(1===t.requestStatus)return i=mn(n,r),e;if(!navigator.onLine)throw Tt.create("app-offline");var a=_n(e);return i=kn(n,a),a}));case 4:if(a=e.sent,!i){e.next=11;break}return e.next=8,i;case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=a.authToken;case 12:return o=e.t0,e.abrupt("return",o);case 14:case"end":return e.stop()}}),t)}))),yn.apply(this,arguments)}function mn(e,t){return bn.apply(this,arguments)}function bn(){return(bn=e(a)(e(l).mark((function t(n,r){var i,a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,wn(n.appConfig);case 2:i=e.sent;case 3:if(1!==i.authToken.requestStatus){e.next=11;break}return e.next=6,jt(100);case 6:return e.next=8,wn(n.appConfig);case 8:i=e.sent,e.next=3;break;case 11:if(0!==(a=i.authToken).requestStatus){e.next=16;break}return e.abrupt("return",gn(n,r));case 16:return e.abrupt("return",a);case 17:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function wn(e){return tn(e,(function(e){if(!xn(e))throw Tt.create("not-registered");var t,n=e.authToken;return 1===(t=n).requestStatus&&t.requestTime+kt<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}function kn(e,t){return In.apply(this,arguments)}function In(){return(In=e(a)(e(l).mark((function t(n,r){var i,a,o;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,pn(n,r);case 3:return i=e.sent,a=Object.assign(Object.assign({},r),{authToken:i}),e.next=7,Xt(n.appConfig,a);case 7:return e.abrupt("return",i);case 10:if(e.prev=10,e.t0=e.catch(0),!St(e.t0)||401!==e.t0.customData.serverCode&&404!==e.t0.customData.serverCode){e.next=17;break}return e.next=15,Qt(n.appConfig);case 15:e.next=20;break;case 17:return o=Object.assign(Object.assign({},r),{authToken:{requestStatus:0}}),e.next=20,Xt(n.appConfig,o);case 20:throw e.t0;case 21:case"end":return e.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function xn(e){return void 0!==e&&2===e.registrationStatus}function En(e){return 2===e.requestStatus&&!function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Et}(e)}function _n(e){var t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Tn(){return(Tn=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(l).mark((function t(n){var r,i,a,o;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n,e.next=3,rn(r);case 3:return i=e.sent,a=i.installationEntry,(o=i.registrationPromise)?o.catch(console.error):gn(r).catch(console.error),e.abrupt("return",a.fid);case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Sn(){return Sn=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(l).mark((function t(n){var r,i,a,o=arguments;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]&&o[1],i=n,e.next=4,Dn(i);case 4:return e.next=6,gn(i,r);case 6:return a=e.sent,e.abrupt("return",a.token);case 8:case"end":return e.stop()}}),t)}))),Sn.apply(this,arguments)}function Dn(e){return An.apply(this,arguments)}function An(){return(An=e(a)(e(l).mark((function t(n){var r;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,rn(n);case 2:if(!(r=e.sent.registrationPromise)){e.next=6;break}return e.next=6,r;case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Cn(e){return Tt.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var On="installations",Rn=function(e){var t=Xe(e.getProvider("app").getImmediate(),On).getImmediate(),n={getId:function(){return function(e){return Tn.apply(this,arguments)}(t)},getToken:function(e){return function(e){return Sn.apply(this,arguments)}(t,e)}};return n};Je(new oe(On,(function(e){var t=e.getProvider("app").getImmediate(),n=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){if(!e||!e.options)throw Cn("App Configuration");if(!e.name)throw Cn("App Name");var t=!0,n=!1,r=void 0;try{for(var i,a=["projectId","apiKey","appId"][Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(!e.options[o])throw Cn(o)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:Xe(t,"heartbeat"),_delete:function(){return Promise.resolve()}}}),"PUBLIC")),Je(new oe("installations-internal",Rn,"PRIVATE")),rt(bt,wt),rt(bt,wt,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Pn,Mn="analytics",Nn=6e4,Ln="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Fn="https://www.googletagmanager.com/gtag/js",jn=new me("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Bn(e){return Promise.all(e.map((function(e){return e.catch((function(e){return e}))})))}function Un(e,t){var n=document.createElement("script");n.src="".concat(Fn,"?l=").concat(e,"&id=").concat(t),n.async=!0,document.head.appendChild(n)}function zn(e,t,n,r,i,a){return Hn.apply(this,arguments)}function Hn(){return(Hn=e(a)(e(l).mark((function t(n,r,i,a,o,s){var u,c,f;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=a[o],e.prev=1,!u){e.next=7;break}return e.next=5,r[u];case 5:e.next=14;break;case 7:return e.next=9,Bn(i);case 9:if(c=e.sent,!(f=c.find((function(e){return e.measurementId===o})))){e.next=14;break}return e.next=14,r[f.appId];case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),jn.error(e.t0);case 19:n("config",o,s);case 20:case"end":return e.stop()}}),t,null,[[1,16]])})))).apply(this,arguments)}function Vn(e,t,n,r,i){return Wn.apply(this,arguments)}function Wn(){return(Wn=e(a)(e(l).mark((function t(n,r,i,a,o){var s,u,c,f,h,p,d,v,g,y,m;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,s=[],!o||!o.send_to){e.next=38;break}return u=o.send_to,Array.isArray(u)||(u=[u]),e.next=7,Bn(i);case 7:c=e.sent,f=!0,h=!1,p=void 0,e.prev=9,d=u[Symbol.iterator]();case 11:if(f=(v=d.next()).done){e.next=24;break}if(g=v.value,y=c.find((function(e){return e.measurementId===g})),!(m=y&&r[y.appId])){e.next=19;break}s.push(m),e.next=21;break;case 19:return s=[],e.abrupt("break",24);case 21:f=!0,e.next=11;break;case 24:e.next=30;break;case 26:e.prev=26,e.t0=e.catch(9),h=!0,p=e.t0;case 30:e.prev=30,e.prev=31,f||null==d.return||d.return();case 33:if(e.prev=33,!h){e.next=36;break}throw p;case 36:return e.finish(33);case 37:return e.finish(30);case 38:return 0===s.length&&(s=Object.values(r)),e.next=41,Promise.all(s);case 41:n("event",a,o||{}),e.next=47;break;case 44:e.prev=44,e.t1=e.catch(0),jn.error(e.t1);case 47:case"end":return e.stop()}}),t,null,[[0,44],[9,26,30,38],[31,,33,37]])})))).apply(this,arguments)}function Kn(t,n,r,i,o){var s=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];window[i].push(arguments)};return window[o]&&"function"==typeof window[o]&&(s=window[o]),window[o]=function(t,n,r,i){function o(){return(o=e(a)(e(l).mark((function a(o,s,u){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"event"!==o){e.next=6;break}return e.next=4,Vn(t,n,r,s,u);case 4:e.next=12;break;case 6:if("config"!==o){e.next=11;break}return e.next=9,zn(t,n,r,i,s,u);case 9:e.next=12;break;case 11:"consent"===o?t("consent","update",u):t("set",s);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),jn.error(e.t0);case 17:case"end":return e.stop()}}),a,null,[[0,14]])})))).apply(this,arguments)}return function(e,t,n){return o.apply(this,arguments)}}(s,t,n,r),{gtagCore:s,wrappedGtag:window[o]}}function qn(e){var t=window.document.getElementsByTagName("script"),n=!0,r=!1,i=void 0;try{for(var a,o=Object.values(t)[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s.src&&s.src.includes(Fn)&&s.src.includes(e))return s}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Gn=(Pn={},e(u)(Pn,"already-exists","A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId."),e(u)(Pn,"already-initialized","initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance."),e(u)(Pn,"already-initialized-settings","Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect."),e(u)(Pn,"interop-component-reg-failed","Firebase Analytics Interop Component failed to instantiate: {$reason}"),e(u)(Pn,"invalid-analytics-context","Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),e(u)(Pn,"indexeddb-unavailable","IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),e(u)(Pn,"fetch-throttle","The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}."),e(u)(Pn,"config-fetch-failed","Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}"),e(u)(Pn,"no-api-key",'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.'),e(u)(Pn,"no-app-id",'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'),Pn),$n=new Z("analytics","Analytics",Gn),Yn=function(){"use strict";function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;e(o)(this,t),this.throttleMetadata=n,this.intervalMillis=r}return e(s)(t,[{key:"getThrottleMetadata",value:function(e){return this.throttleMetadata[e]}},{key:"setThrottleMetadata",value:function(e,t){this.throttleMetadata[e]=t}},{key:"deleteThrottleMetadata",value:function(e){delete this.throttleMetadata[e]}}]),t}(),Jn=new Yn;function Xn(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}function Zn(e){return Qn.apply(this,arguments)}function Qn(){return(Qn=e(a)(e(l).mark((function t(n){var r,i,a,o,s,u,c,f;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.appId,a=n.apiKey,o={method:"GET",headers:Xn(a)},s=Ln.replace("{app-id}",i),e.next=6,fetch(s,o);case 6:if(200===(u=e.sent).status||304===u.status){e.next=19;break}return c="",e.prev=9,e.next=12,u.json();case 12:f=e.sent,(null===(r=f.error)||void 0===r?void 0:r.message)&&(c=f.error.message),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(9);case 18:throw $n.create("config-fetch-failed",{httpStatus:u.status,responseMessage:c});case 19:return e.abrupt("return",u.json());case 20:case"end":return e.stop()}}),t,null,[[9,16]])})))).apply(this,arguments)}function er(e){return tr.apply(this,arguments)}function tr(){return tr=e(a)(e(l).mark((function t(n){var r,i,o,s,u,c,f,h,p=arguments;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=p.length>1&&void 0!==p[1]?p[1]:Jn,i=p.length>2?p[2]:void 0,o=n.options,s=o.appId,u=o.apiKey,c=o.measurementId,s){t.next=4;break}throw $n.create("no-app-id");case 4:if(u){t.next=8;break}if(!c){t.next=7;break}return t.abrupt("return",{measurementId:c,appId:s});case 7:throw $n.create("no-api-key");case 8:return f=r.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},h=new ur,setTimeout(e(a)(e(l).mark((function t(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h.abort();case 1:case"end":return e.stop()}}),t)}))),void 0!==i?i:Nn),t.abrupt("return",nr({appId:s,apiKey:u,measurementId:c},f,h,r));case 12:case"end":return t.stop()}}),t)}))),tr.apply(this,arguments)}function nr(e,t,n){return rr.apply(this,arguments)}function rr(){return rr=e(a)(e(l).mark((function t(n,r,i){var a,o,s,u,c,f,h,p,d,v,g,y=arguments;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.throttleEndTimeMillis,o=r.backoffCount,s=y.length>3&&void 0!==y[3]?y[3]:Jn,f=n.appId,h=n.measurementId,e.prev=3,e.next=6,ir(i,a);case 6:e.next=14;break;case 8:if(e.prev=8,e.t0=e.catch(3),!h){e.next=13;break}return jn.warn("Timed out fetching this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(h)+' provided in the "measurementId" field in the local Firebase config. ['.concat(null===(u=e.t0)||void 0===u?void 0:u.message,"]")),e.abrupt("return",{appId:f,measurementId:h});case 13:throw e.t0;case 14:return e.prev=14,e.next=17,Zn(n);case 17:return p=e.sent,s.deleteThrottleMetadata(f),e.abrupt("return",p);case 22:if(e.prev=22,e.t1=e.catch(14),ar(d=e.t1)){e.next=33;break}if(s.deleteThrottleMetadata(f),!h){e.next=32;break}return jn.warn("Failed to fetch this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(h)+' provided in the "measurementId" field in the local Firebase config. ['.concat(null==d?void 0:d.message,"]")),e.abrupt("return",{appId:f,measurementId:h});case 32:throw e.t1;case 33:return v=503===Number(null===(c=null==d?void 0:d.customData)||void 0===c?void 0:c.httpStatus)?ie(o,s.intervalMillis,30):ie(o,s.intervalMillis),g={throttleEndTimeMillis:Date.now()+v,backoffCount:o+1},s.setThrottleMetadata(f,g),jn.debug("Calling attemptFetch again in ".concat(v," millis")),e.abrupt("return",nr(n,g,i,s));case 38:case"end":return e.stop()}}),t,null,[[3,8],[14,22]])}))),rr.apply(this,arguments)}function ir(e,t){return new Promise((function(n,r){var i=Math.max(t-Date.now(),0),a=setTimeout(n,i);e.addEventListener((function(){clearTimeout(a),r($n.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}function ar(e){if(!(e instanceof X&&e.customData))return!1;var t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}var or,sr,ur=function(){"use strict";function t(){e(o)(this,t),this.listeners=[]}return e(s)(t,[{key:"addEventListener",value:function(e){this.listeners.push(e)}},{key:"abort",value:function(){this.listeners.forEach((function(e){return e()}))}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(){return(cr=e(a)(e(l).mark((function t(n,r,i,a,o){var s,u;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o||!o.global){e.next=5;break}return n("event",i,a),e.abrupt("return");case 5:return e.next=7,r;case 7:s=e.sent,u=Object.assign(Object.assign({},a),{send_to:s}),n("event",i,u);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function lr(e){sr=e}function fr(e){or=e}function hr(){return pr.apply(this,arguments)}function pr(){return(pr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(a)(e(l).mark((function t(){var n;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(H()){e.next=6;break}return jn.warn($n.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),e.abrupt("return",!1);case 6:return e.prev=6,e.next=9,V();case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(6),jn.warn($n.create("indexeddb-unavailable",{errorInfo:null===(n=e.t0)||void 0===n?void 0:n.toString()}).message),e.abrupt("return",!1);case 15:return e.abrupt("return",!0);case 16:case"end":return e.stop()}}),t,null,[[6,11]])})))).apply(this,arguments)}function dr(){return(dr=e(a)(e(l).mark((function t(n,r,i,a,o,s,u){var c,h,p,d,v,g,y;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(h=er(n)).then((function(e){i[e.measurementId]=e.appId,n.options.measurementId&&e.measurementId!==n.options.measurementId&&jn.warn("The measurement ID in the local Firebase config (".concat(n.options.measurementId,")")+" does not match the measurement ID fetched from the server (".concat(e.measurementId,").")+" To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.")})).catch((function(e){return jn.error(e)})),r.push(h),p=hr().then((function(e){return e?a.getId():void 0})),t.t0=e(f),t.next=8,Promise.all([h,p]);case 8:return t.t1=t.sent,d=(0,t.t0)(t.t1,2),v=d[0],g=d[1],qn(s)||Un(s,v.measurementId),sr&&(o("consent","default",sr),lr(void 0)),o("js",new Date),(y=null!==(c=null==u?void 0:u.config)&&void 0!==c?c:{}).origin="firebase",y.update=!0,null!=g&&(y.firebase_id=g),o("config",v.measurementId,y),or&&(o("set",or),fr(void 0)),t.abrupt("return",v.measurementId);case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vr,gr,yr=function(){"use strict";function t(n){e(o)(this,t),this.app=n}return e(s)(t,[{key:"_delete",value:function(){return delete mr[this.app.options.appId],Promise.resolve()}}]),t}(),mr={},br=[],wr={},kr="dataLayer",Ir="gtag",xr=!1;function Er(e,t,n){!function(){var e=[];if(z()&&e.push("This is a browser extension environment."),W()||e.push("Cookies are not available."),e.length>0){var t=e.map((function(e,t){return"(".concat(t+1,") ").concat(e)})).join(" "),n=$n.create("invalid-analytics-context",{errorInfo:t});jn.warn(n.message)}}();var r,i,a=e.options.appId;if(!a)throw $n.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw $n.create("no-api-key");jn.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest'+" measurement ID for this Firebase app. Falling back to the measurement ID ".concat(e.options.measurementId)+' provided in the "measurementId" field in the local Firebase config.')}if(null!=mr[a])throw $n.create("already-exists",{id:a});if(!xr){r=kr,i=[],Array.isArray(window[r])?i=window[r]:window[r]=i;var o=Kn(mr,br,wr,kr,Ir),s=o.wrappedGtag,u=o.gtagCore;gr=s,vr=u,xr=!0}return mr[a]=function(e,t,n,r,i,a,o){return dr.apply(this,arguments)}(e,br,wr,t,vr,kr,n),new yr(e)}function _r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Xe(e,Mn);if(n.isInitialized()){var r=n.getImmediate();if(te(t,n.getOptions()))return r;throw $n.create("already-initialized")}var i=n.initialize({options:t});return i}function Tr(e,t,n,r){e=ae(e),function(e,t,n,r,i){return cr.apply(this,arguments)}(gr,mr[e.app.options.appId],t,n,r).catch((function(e){return jn.error(e)}))}var Sr="@firebase/analytics",Dr="0.8.4";Je(new oe(Mn,(function(e,t){var n=t.options;return Er(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),n)}),"PUBLIC")),Je(new oe("analytics-internal",(function(e){try{var t=e.getProvider(Mn).getImmediate();return{logEvent:function(e,n,r){return Tr(t,e,n,r)}}}catch(e){throw $n.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),rt(Sr,Dr),rt(Sr,Dr,"esm2017");a=i("bpxeT"),o=i("8MBJY"),i("ge8co"),s=i("a2hTj");var Ar={};Object.defineProperty(Ar,"__esModule",{value:!0}),Ar.default=function(e,t,n){return Or(e,t,n)};var Cr=function(e){return e&&e.__esModule?e:{default:e}}(i("2mz0K"));function Or(e,t,n){return(Or="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=Cr.default(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n||e):i.value}})(e,t,n)}i("fVNic"),p=i("eYQtU");var Rr=i("jmhxu"),Pr=(f=i("1t1Wn"),c=i("8nrFW"),i("l5bVx"),E=i("2MbLg"),l=i("2TvXO"),function(){"use strict";function t(n){e(o)(this,t),this.uid=n}return e(s)(t,[{key:"isAuthenticated",value:function(){return null!=this.uid}},{key:"toKey",value:function(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}},{key:"isEqual",value:function(e){return e.uid===this.uid}}]),t}());Pr.UNAUTHENTICATED=new Pr(null),Pr.GOOGLE_CREDENTIALS=new Pr("google-credentials-uid"),Pr.FIRST_PARTY=new Pr("first-party-uid"),Pr.MOCK_USER=new Pr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Mr="9.14.0",Nr=new me("@firebase/firestore");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(Nr.logLevel<=ce.DEBUG){var a,o=r.map(Br);(a=Nr).debug.apply(a,["Firestore (".concat(Mr,"): ").concat(t)].concat(e(c)(o)))}}function Fr(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(Nr.logLevel<=ce.ERROR){var a,o=r.map(Br);(a=Nr).error.apply(a,["Firestore (".concat(Mr,"): ").concat(t)].concat(e(c)(o)))}}function jr(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(Nr.logLevel<=ce.WARN){var a,o=r.map(Br);(a=Nr).warn.apply(a,["Firestore (".concat(Mr,"): ").concat(t)].concat(e(c)(o)))}}function Br(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unexpected state",t="FIRESTORE (".concat(Mr,") INTERNAL ASSERTION FAILED: ")+e;throw Fr(t),new Error(t)}function zr(e,t){e||Ur()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Hr="invalid-argument",Vr="failed-precondition",Wr=function(t){"use strict";e(p)(r,t);var n=e(E)(r);function r(t,i){var a;return e(o)(this,r),(a=n.call(this,t,i)).code=t,a.message=i,a.toString=function(){return"".concat(a.name,": [code=").concat(a.code,"]: ").concat(a.message)},e(Rr)(a)}return r}(X),Kr=function t(n,r){"use strict";e(o)(this,t),this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer ".concat(n))},qr=function(){"use strict";function t(){e(o)(this,t)}return e(s)(t,[{key:"getToken",value:function(){return Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(Pr.UNAUTHENTICATED)}))}},{key:"shutdown",value:function(){}}]),t}(),Gr=function(){"use strict";function t(n){e(o)(this,t),this.token=n,this.changeListener=null}return e(s)(t,[{key:"getToken",value:function(){return Promise.resolve(this.token)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){var n=this;this.changeListener=t,e.enqueueRetryable((function(){return t(n.token.user)}))}},{key:"shutdown",value:function(){this.changeListener=null}}]),t}(),$r=function(){"use strict";function t(n){var r=this;e(o)(this,t),this.auth=null,n.onInit((function(e){r.auth=e}))}return e(s)(t,[{key:"getToken",value:function(){var e=this;return this.auth?this.auth.getToken().then((function(t){return t?(zr("string"==typeof t.accessToken),new Kr(t.accessToken,new Pr(e.auth.getUid()))):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){}},{key:"shutdown",value:function(){}}]),t}(),Yr=function(){"use strict";function t(n,r,i,a){e(o)(this,t),this.t=n,this.i=r,this.o=i,this.u=a,this.type="FirstParty",this.user=Pr.FIRST_PARTY,this.h=new Map}return e(s)(t,[{key:"l",value:function(){return this.u?this.u():(zr(!("object"!=typeof this.t||null===this.t||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}},{key:"headers",get:function(){this.h.set("X-Goog-AuthUser",this.i);var e=this.l();return e&&this.h.set("Authorization",e),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}}]),t}(),Jr=function(){"use strict";function t(n,r,i,a){e(o)(this,t),this.t=n,this.i=r,this.o=i,this.u=a}return e(s)(t,[{key:"getToken",value:function(){return Promise.resolve(new Yr(this.t,this.i,this.o,this.u))}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(Pr.FIRST_PARTY)}))}},{key:"shutdown",value:function(){}},{key:"invalidateToken",value:function(){}}]),t}(),Xr=function t(n){"use strict";e(o)(this,t),this.value=n,this.type="AppCheck",this.headers=new Map,n&&n.length>0&&this.headers.set("x-firebase-appcheck",this.value)},Zr=function(){"use strict";function t(n){var r=this;e(o)(this,t),this.m=n,this.appCheck=null,n.onInit((function(e){r.appCheck=e}))}return e(s)(t,[{key:"getToken",value:function(){return this.appCheck?this.appCheck.getToken().then((function(e){return e?(zr("string"==typeof e.token),new Xr(e.token)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){}},{key:"shutdown",value:function(){}}]),t}(),Qr=function(){"use strict";function t(n,r){e(o)(this,t),this.projectId=n,this.database=r||"(default)"}return e(s)(t,[{key:"isDefaultDatabase",get:function(){return"(default)"===this.database}},{key:"isEqual",value:function(e){return e instanceof t&&e.projectId===this.projectId&&e.database===this.database}}],[{key:"empty",value:function(){return new t("","")}}]),t}();function ei(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e="".concat(e.substring(0,20),"...")),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";var t=(n=e).constructor?n.constructor.name:null;return t?"a custom ".concat(t," object"):"an object"}var n;return"function"==typeof e?"a function":Ur()}function ti(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Wr(Hr,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");var n=ei(e);throw new Wr(Hr,"Expected type '".concat(t.name,"', but it was: ").concat(n))}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ni,ri;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(ri=ni||(ni={}))[ri.OK=0]="OK",ri[ri.CANCELLED=1]="CANCELLED",ri[ri.UNKNOWN=2]="UNKNOWN",ri[ri.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ri[ri.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ri[ri.NOT_FOUND=5]="NOT_FOUND",ri[ri.ALREADY_EXISTS=6]="ALREADY_EXISTS",ri[ri.PERMISSION_DENIED=7]="PERMISSION_DENIED",ri[ri.UNAUTHENTICATED=16]="UNAUTHENTICATED",ri[ri.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ri[ri.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ri[ri.ABORTED=10]="ABORTED",ri[ri.OUT_OF_RANGE=11]="OUT_OF_RANGE",ri[ri.UNIMPLEMENTED=12]="UNIMPLEMENTED",ri[ri.INTERNAL=13]="INTERNAL",ri[ri.UNAVAILABLE=14]="UNAVAILABLE",ri[ri.DATA_LOSS=15]="DATA_LOSS";function ii(e,t){return e<t?-1:e>t?1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ai=function(){"use strict";function t(n,r,i,a,s){e(o)(this,t),this.key=n,this.value=r,this.color=null!=i?i:t.RED,this.left=null!=a?a:t.EMPTY,this.right=null!=s?s:t.EMPTY,this.size=this.left.size+1+this.right.size}return e(s)(t,[{key:"copy",value:function(e,n,r,i,a){return new t(null!=e?e:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=a?a:this.right)}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min",value:function(){return this.left.isEmpty()?this:this.left.min()}},{key:"minKey",value:function(){return this.min().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}},{key:"removeMin",value:function(){if(this.left.isEmpty())return t.EMPTY;var e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}},{key:"remove",value:function(e,n){var r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===n(e,i.key)){if(i.right.isEmpty())return t.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}},{key:"isRed",value:function(){return this.color}},{key:"fixUp",value:function(){var e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}},{key:"moveRedLeft",value:function(){var e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}},{key:"moveRedRight",value:function(){var e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}},{key:"rotateLeft",value:function(){var e=this.copy(null,null,t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}},{key:"rotateRight",value:function(){var e=this.copy(null,null,t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}},{key:"colorFlip",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth",value:function(){var e=this.check();return Math.pow(2,e)<=this.size+1}},{key:"check",value:function(){if(this.isRed()&&this.left.isRed())throw Ur();if(this.right.isRed())throw Ur();var e=this.left.check();if(e!==this.right.check())throw Ur();return e+(this.isRed()?0:1)}}]),t}();ai.EMPTY=null,ai.RED=!0,ai.BLACK=!1,ai.EMPTY=new(function(){"use strict";function t(){e(o)(this,t),this.size=0}return e(s)(t,[{key:"key",get:function(){throw Ur()}},{key:"value",get:function(){throw Ur()}},{key:"color",get:function(){throw Ur()}},{key:"left",get:function(){throw Ur()}},{key:"right",get:function(){throw Ur()}},{key:"copy",value:function(e,t,n,r,i){return this}},{key:"insert",value:function(e,t,n){return new ai(e,t)}},{key:"remove",value:function(e,t){return this}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"isRed",value:function(){return!1}},{key:"checkMaxDepth",value:function(){return!0}},{key:"check",value:function(){return 0}}]),t}());
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var oi=Symbol.iterator,si=function(){"use strict";function t(n){e(o)(this,t),this.binaryString=n}return e(s)(t,[{key:oi,value:function(){var e=this,t=0;return{next:function(){return t<e.binaryString.length?{value:e.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}}},{key:"toBase64",value:function(){var e;return e=this.binaryString,btoa(e)}},{key:"toUint8Array",value:function(){return function(e){for(var t=new Uint8Array(e.length),n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}},{key:"approximateByteSize",value:function(){return 2*this.binaryString.length}},{key:"compareTo",value:function(e){return ii(this.binaryString,e.binaryString)}},{key:"isEqual",value:function(e){return this.binaryString===e.binaryString}}],[{key:"fromBase64String",value:function(e){return new t(atob(e))}},{key:"fromUint8Array",value:function(e){return new t(function(e){for(var t="",n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}}]),t}();si.EMPTY_BYTE_STRING=new si("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ui=new Map;var ci=function(){"use strict";function t(n){var r;if(e(o)(this,t),void 0===n.host){if(void 0!==n.ssl)throw new Wr(Hr,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=n.host,this.ssl=null===(r=n.ssl)||void 0===r||r;if(this.credentials=n.credentials,this.ignoreUndefinedProperties=!!n.ignoreUndefinedProperties,void 0===n.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==n.cacheSizeBytes&&n.cacheSizeBytes<1048576)throw new Wr(Hr,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=n.cacheSizeBytes}this.experimentalForceLongPolling=!!n.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!n.experimentalAutoDetectLongPolling,this.useFetchStreams=!!n.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new Wr(Hr,"".concat("experimentalForceLongPolling"," and ").concat("experimentalAutoDetectLongPolling"," cannot be used together."))}(0,n.experimentalForceLongPolling,0,n.experimentalAutoDetectLongPolling)}return e(s)(t,[{key:"isEqual",value:function(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}]),t}(),li=function(){"use strict";function t(n,r,i,a){e(o)(this,t),this._authCredentials=n,this._appCheckCredentials=r,this._databaseId=i,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ci({}),this._settingsFrozen=!1}return e(s)(t,[{key:"app",get:function(){if(!this._app)throw new Wr(Vr,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}},{key:"_initialized",get:function(){return this._settingsFrozen}},{key:"_terminated",get:function(){return void 0!==this._terminateTask}},{key:"_setSettings",value:function(e){if(this._settingsFrozen)throw new Wr(Vr,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ci(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new qr;switch(e.type){case"gapi":var t=e.client;return new Jr(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Wr(Hr,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}},{key:"_getSettings",value:function(){return this._settings}},{key:"_freezeSettings",value:function(){return this._settingsFrozen=!0,this._settings}},{key:"_delete",value:function(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}},{key:"toJSON",value:function(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}},{key:"_terminate",value:function(){return e=this,(t=ui.get(e))&&(Lr("ComponentProvider","Removing Datastore"),ui.delete(e),t.terminate()),Promise.resolve();var e,t}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(e,t,n){var r,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=(e=ti(e,li))._getSettings();if("firestore.googleapis.com"!==a.host&&a.host!==t&&jr("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},a),{host:"".concat(t,":").concat(n),ssl:!1})),i.mockUserToken){var o,s;if("string"==typeof i.mockUserToken)o=i.mockUserToken,s=Pr.MOCK_USER;else{o=J(i.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);var u=i.mockUserToken.sub||i.mockUserToken.user_id;if(!u)throw new Wr(Hr,"mockUserToken must contain 'sub' or 'user_id' field!");s=new Pr(u)}e._authCredentials=new Gr(new Kr(o,s))}}new RegExp("[~\\*/\\[\\]]");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var hi;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hi="".concat("9.14.0","_lite"),Mr=hi,Je(new oe("firestore/lite",(function(e,t){var n=t.instanceIdentifier,r=t.options,i=e.getProvider("app").getImmediate(),a=new li(new $r(e.getProvider("auth-internal")),new Zr(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Wr(Hr,'"projectId" not provided in firebase.initializeApp.');return new Qr(e.options.projectId,t)}(i,n),i);return r&&a._setSettings(r),a}),"PUBLIC").setMultipleInstances(!0)),rt("firestore-lite","3.7.3",""),rt("firestore-lite","3.7.3","esm2017");var pi=tt({apiKey:"AIzaSyCdMyNr6hyJdUGTvscIGf-cwWwUDuJgJHU",authDomain:"my-awesome-filmoteka.firebaseapp.com",projectId:"my-awesome-filmoteka",storageBucket:"my-awesome-filmoteka.appspot.com",messagingSenderId:"774761298251",appId:"1:774761298251:web:d761136a1dde215f0250ce",measurementId:"G-3L76ZDF9LH"}),di=(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt(),t=Xe(e=ae(e),Mn);t.isInitialized()?t.getImmediate():_r(e)}(pi),function(t,n){var r="string"==typeof t?t:n||"(default)",i=Xe("object"==typeof t?t:nt(),"firestore/lite").getImmediate({identifier:r});if(!i._initialized){var a=G("firestore");a&&fi.apply(void 0,[i].concat(e(c)(a)))}return i}(pi));console.log(di)}();
//# sourceMappingURL=index.afa06568.js.map
