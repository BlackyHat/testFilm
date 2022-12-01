!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i),i.register("876k2",(function(t,n){var r,a,o,s;r=t.exports,a="ModalBox",o=function(){return f},Object.defineProperty(r,a,{get:o,set:s,enumerable:!0,configurable:!0});var u=i("8MBJY"),c=i("a2hTj"),l=i("hKHmD"),f=function(){"use strict";function t(){var n=this;e(u)(this,t),e(l)(this,"addListenerOnClickClose",(function(){var e=n;n.modal.addEventListener("click",(function(t){(t.target.classList.contains("js-modal")||t.target.classList.contains("modal__icon"))&&e.closeModal()}))})),e(l)(this,"addListenerOnKeyClose",(function(){document.addEventListener("keydown",n.onKeyClose)})),e(l)(this,"onKeyClose",(function(e){"Escape"===e.code&&(n.closeModal(),document.removeEventListener("keydown",n.onKeyClose))})),e(l)(this,"closeModal",(function(){n.modal.remove()})),this.modalBackdrop="",this.modalBox="",this.modal=""}return e(c)(t,[{key:"createModal",value:function(){document.querySelector(".js-modal")||(document.querySelector("main").insertAdjacentHTML("beforeend",'<div class="js-modal modal">\n        <div class="js-modal__box modal__box">\n          <button class="modal__icon link button">\n            </button>\n        </div>\n      </div >'),this.modal=document.querySelector(".js-modal"),this.modalBox=document.querySelector(".js-modal__box"))}}]),t}()})),i.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),i.register("a2hTj",(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t&&n(e.prototype,t);r&&n(e,r);return e}})),i.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),i.register("bpxeT",(function(e,t){"use strict";function n(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(i,a){var o=e.apply(t,r);function s(e){n(o,i,a,s,u,"next",e)}function u(e){n(o,i,a,s,u,"throw",e)}s(void 0)}))}}})),i.register("2TvXO",(function(e,t){var n=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var i=t&&t.prototype instanceof m?t:m,a=Object.create(i.prototype),o=new S(r||[]);return a._invoke=function(e,t,n){var r=f;return function(i,a){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw a;return R()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=C(o,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=l(e,t,n);if("normal"===u.type){if(r=n.done?p:h,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=p,n.method="throw",n.arg=u.arg)}}}(e,n,o),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",v={};function m(){}function y(){}function g(){}var k={};u(k,a,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(E([])));x&&x!==n&&r.call(x,a)&&(k=x);var _=g.prototype=m.prototype=Object.create(k);function w(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function I(e,t){function n(i,a,o,s){var u=l(e[i],e,a);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,o,s)}),(function(e){n("throw",e,o,s)})):t.resolve(f).then((function(e){c.value=e,o(c)}),(function(e){return n("throw",e,o,s)}))}s(u.arg)}var i;this._invoke=function(e,r){function a(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(a,a):a()}}function C(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,C(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function E(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:R}}function R(){return{value:t,done:!0}}return y.prototype=g,u(_,"constructor",g),u(g,"constructor",y),y.displayName=u(g,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,s,"GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},w(I.prototype),u(I.prototype,o,(function(){return this})),e.AsyncIterator=I,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var o=new I(c(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},w(_),u(_,s,"Generator"),u(_,a,(function(){return this})),u(_,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=E,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var u=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),N(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;N(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:E(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})),i.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n.default(e)||r.default(e)||o.default(e)||a.default()};var n=s(i("kMC0W")),r=s(i("7AJDX")),a=s(i("8CtQK")),o=s(i("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),i.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=i("8NIkP"))&&n.__esModule?n:{default:n}})),i.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),i.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),i.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),i.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=i("8NIkP"))&&n.__esModule?n:{default:n}})),i.register("1t1Wn",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n.default(e)||r.default(e,t)||o.default(e,t)||a.default()};var n=s(i("8slrw")),r=s(i("7AJDX")),a=s(i("ifqQW")),o=s(i("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),i.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),i.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),i.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),i.register("eYQtU",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r.default(e,t)};var n,r=(n=i("gD1JV"))&&n.__esModule?n:{default:n}})),i.register("gD1JV",(function(e,t){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n(e,t)}})),i.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return o.apply(null,arguments)};var n,r=(n=i("gD1JV"))&&n.__esModule?n:{default:n};function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,n){return(o=a()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return n&&r.default(a,n.prototype),a}).apply(null,arguments)}})),i.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),i.register("fVNic",(function(e,t){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n(e)}})),i.register("2MbLg",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t=n.default();return function(){var n,i=r.default(e);if(t){var o=r.default(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return a.default(this,n)}};var n=o(i("aTHs7")),r=o(i("fVNic")),a=o(i("jmhxu"));function o(e){return e&&e.__esModule?e:{default:e}}})),i.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),i.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==r.default(t)&&"function"!=typeof t?n.default(e):t};var n=a(i("ds8z5")),r=a(i("l5bVx"));function a(e){return e&&e.__esModule?e:{default:e}}})),i.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),i.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=i("fVNic"))&&n.__esModule?n:{default:n}}));var a,o,s={};a=void 0===t?"undefined"==typeof window?s:window:t,o=function(e){"use strict";if(void 0===e&&void 0===e.document)return!1;var t,n,r,i,a,o="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",s='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',u="Success",c="Failure",l="Warning",f="Info",h={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},d="Success",p="Failure",v="Warning",m="Info",y={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},g="Show",k="Ask",b="Prompt",x={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},_="Standard",w="Hourglass",I="Circle",C="Arrows",T="Dots",N="Pulse",S="Custom",E="Notiflix",R={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},A="Standard",P="Hourglass",O="Circle",L="Arrows",D="Dots",M="Pulse",F={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},z=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+o)},j=function(e){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+e+o)},W=function(t){return t||(t="head"),null!==e.document[t]||(z('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},U=function(t,n){if(!W("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var r=e.document.createElement("style");r.id=n,r.innerHTML=t(),e.document.head.appendChild(r)}},B=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var r=function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=t&&"[object Object]"===Object.prototype.toString.call(n[r])?B(e[r],n[r]):n[r])};n<arguments.length;n++)r(arguments[n]);return e},q=function(t){var n=e.document.createElement("div");return n.innerHTML=t,n.textContent||n.innerText||""},H=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},V=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},X=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},K=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},G=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},Y=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},J=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},Q=0,$=function(n,r,i,a){if(!W("body"))return!1;t||ue.Notify.init({});var o=B(!0,t,{});if("object"==typeof i&&!Array.isArray(i)||"object"==typeof a&&!Array.isArray(a)){var d={};"object"==typeof i?d=i:"object"==typeof a&&(d=a),t=B(!0,t,d)}var p=t[n.toLocaleLowerCase("en")];Q++,"string"!=typeof r&&(r="Notiflix "+n),t.plainText&&(r=q(r)),!t.plainText&&r.length>t.messageMaxLength&&(t=B(!0,t,{closeButton:!0,messageMaxLength:150}),r='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),r.length>t.messageMaxLength&&(r=r.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(p.fontAwesomeIconColor=p.background),t.cssAnimation||(t.cssAnimationDuration=0);var v=e.document.getElementById(h.wrapID)||e.document.createElement("div");if(v.id=h.wrapID,v.style.width=t.width,v.style.zIndex=t.zindex,v.style.opacity=t.opacity,"center-center"===t.position?(v.style.left=t.distance,v.style.top=t.distance,v.style.right=t.distance,v.style.bottom=t.distance,v.style.margin="auto",v.classList.add("nx-flex-center-center"),v.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",v.style.display="flex",v.style.flexWrap="wrap",v.style.flexDirection="column",v.style.justifyContent="center",v.style.alignItems="center",v.style.pointerEvents="none"):"center-top"===t.position?(v.style.left=t.distance,v.style.right=t.distance,v.style.top=t.distance,v.style.bottom="auto",v.style.margin="auto"):"center-bottom"===t.position?(v.style.left=t.distance,v.style.right=t.distance,v.style.bottom=t.distance,v.style.top="auto",v.style.margin="auto"):"right-bottom"===t.position?(v.style.right=t.distance,v.style.bottom=t.distance,v.style.top="auto",v.style.left="auto"):"left-top"===t.position?(v.style.left=t.distance,v.style.top=t.distance,v.style.right="auto",v.style.bottom="auto"):"left-bottom"===t.position?(v.style.left=t.distance,v.style.bottom=t.distance,v.style.top="auto",v.style.right="auto"):(v.style.right=t.distance,v.style.top=t.distance,v.style.left="auto",v.style.bottom="auto"),t.backOverlay){var m=e.document.getElementById(h.overlayID)||e.document.createElement("div");m.id=h.overlayID,m.style.width="100%",m.style.height="100%",m.style.position="fixed",m.style.zIndex=t.zindex-1,m.style.left=0,m.style.top=0,m.style.right=0,m.style.bottom=0,m.style.background=p.backOverlayColor||t.backOverlayColor,m.className=t.cssAnimation?"nx-with-animation":"",m.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(h.overlayID)||e.document.body.appendChild(m)}e.document.getElementById(h.wrapID)||e.document.body.appendChild(v);var y=e.document.createElement("div");y.id=t.ID+"-"+Q,y.className=t.className+" "+p.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof i?"nx-with-close-button":"")+" "+("function"==typeof i?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),y.style.fontSize=t.fontSize,y.style.color=p.textColor,y.style.background=p.background,y.style.borderRadius=t.borderRadius,y.style.pointerEvents="all",t.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.style.fontFamily='"'+t.fontFamily+'", '+s,t.cssAnimation&&(y.style.animationDuration=t.cssAnimationDuration+"ms");var g="";if(t.closeButton&&"function"!=typeof i&&(g='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+p.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)y.innerHTML='<i style="color:'+p.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+p.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+r+"</span>"+(t.closeButton?g:"");else{var k="";n===u?k='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':n===c?k='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':n===l?k='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':n===f&&(k='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),y.innerHTML=k+'<span class="nx-message nx-with-icon">'+r+"</span>"+(t.closeButton?g:"")}else y.innerHTML='<span class="nx-message">'+r+"</span>"+(t.closeButton?g:"");if("left-bottom"===t.position||"right-bottom"===t.position){var b=e.document.getElementById(h.wrapID);b.insertBefore(y,b.firstChild)}else e.document.getElementById(h.wrapID).appendChild(y);var x=e.document.getElementById(y.id);if(x){var _,w,I=function(){x.classList.add("nx-remove");var t=e.document.getElementById(h.overlayID);t&&0>=v.childElementCount&&t.classList.add("nx-remove"),clearTimeout(_)},C=function(){if(x&&null!==x.parentNode&&x.parentNode.removeChild(x),0>=v.childElementCount&&null!==v.parentNode){v.parentNode.removeChild(v);var t=e.document.getElementById(h.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(w)};if(t.closeButton&&"function"!=typeof i&&e.document.getElementById(y.id).querySelector("span.nx-close-button").addEventListener("click",(function(){I();var e=setTimeout((function(){C(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof i||t.clickToClose)&&x.addEventListener("click",(function(){"function"==typeof i&&i(),I();var e=setTimeout((function(){C(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof i){var T=function(){_=setTimeout((function(){I()}),t.timeout),w=setTimeout((function(){C()}),t.timeout+t.cssAnimationDuration)};T(),t.pauseOnHover&&(x.addEventListener("mouseenter",(function(){x.classList.add("nx-paused"),clearTimeout(_),clearTimeout(w)})),x.addEventListener("mouseleave",(function(){x.classList.remove("nx-paused"),T()})))}}if(t.showOnlyTheLastOne&&0<Q)for(var N,S=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+Q+"])"),E=0;E<S.length;E++)null!==(N=S[E]).parentNode&&N.parentNode.removeChild(N);t=B(!0,t,o)},Z=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ee=function(t,r,i,a,o,u){if(!W("body"))return!1;n||ue.Report.init({});var c={};if("object"==typeof o&&!Array.isArray(o)||"object"==typeof u&&!Array.isArray(u)){var l={};"object"==typeof o?l=o:"object"==typeof u&&(l=u),c=B(!0,n,{}),n=B(!0,n,l)}var f=n[t.toLocaleLowerCase("en")];"string"!=typeof r&&(r="Notiflix "+t),"string"!=typeof i&&(t===d?i='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':t===p?i='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':t===v?i='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':t===m&&(i='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof a&&(a="Okay"),n.plainText&&(r=q(r),i=q(i),a=q(a)),n.plainText||(r.length>n.titleMaxLength&&(r="Possible HTML Tags Error",i='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',a="Okay"),i.length>n.messageMaxLength&&(r="Possible HTML Tags Error",i='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',a="Okay"),a.length>n.buttonMaxLength&&(r="Possible HTML Tags Error",i='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',a="Okay")),r.length>n.titleMaxLength&&(r=r.substring(0,n.titleMaxLength)+"..."),i.length>n.messageMaxLength&&(i=i.substring(0,n.messageMaxLength)+"..."),a.length>n.buttonMaxLength&&(a=a.substring(0,n.buttonMaxLength)+"..."),n.cssAnimation||(n.cssAnimationDuration=0);var h=e.document.createElement("div");h.id=y.ID,h.className=n.className,h.style.zIndex=n.zindex,h.style.borderRadius=n.borderRadius,h.style.fontFamily='"'+n.fontFamily+'", '+s,n.rtl&&(h.setAttribute("dir","rtl"),h.classList.add("nx-rtl-on")),h.style.display="flex",h.style.flexWrap="wrap",h.style.flexDirection="column",h.style.alignItems="center",h.style.justifyContent="center";var g="",k=!0===n.backOverlayClickToClose;n.backOverlay&&(g='<div class="'+n.className+"-overlay"+(n.cssAnimation?" nx-with-animation":"")+(k?" nx-report-click-to-close":"")+'" style="background:'+(f.backOverlayColor||n.backOverlayColor)+";animation-duration:"+n.cssAnimationDuration+'ms;"></div>');var b="";if(t===d?b=function(e,t){return e||(e="110px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,f.svgColor):t===p?b=function(e,t){return e||(e="110px"),t||(t="#ff5549"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,f.svgColor):t===v?b=function(e,t){return e||(e="110px"),t||(t="#eebf31"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,f.svgColor):t===m&&(b=function(e,t){return e||(e="110px"),t||(t="#26c0d3"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,f.svgColor)),h.innerHTML=g+'<div class="'+n.className+"-content"+(n.cssAnimation?" nx-with-animation ":"")+" nx-"+n.cssAnimationStyle+'" style="width:'+n.width+"; background:"+n.backgroundColor+"; animation-duration:"+n.cssAnimationDuration+'ms;"><div style="width:'+n.svgSize+"; height:"+n.svgSize+';" class="'+n.className+'-icon">'+b+'</div><h5 class="'+n.className+'-title" style="font-weight:500; font-size:'+n.titleFontSize+"; color:"+f.titleColor+';">'+r+'</h5><p class="'+n.className+'-message" style="font-size:'+n.messageFontSize+"; color:"+f.messageColor+';">'+i+'</p><a id="NXReportButton" class="'+n.className+'-button" style="font-weight:500; font-size:'+n.buttonFontSize+"; background:"+f.buttonBackground+"; color:"+f.buttonColor+';">'+a+"</a></div>",!e.document.getElementById(h.id)){e.document.body.appendChild(h);var x=function(){var t=e.document.getElementById(h.id);t.classList.add("nx-remove");var r=setTimeout((function(){null!==t.parentNode&&t.parentNode.removeChild(t),clearTimeout(r)}),n.cssAnimationDuration)};e.document.getElementById("NXReportButton").addEventListener("click",(function(){"function"==typeof o&&o(),x()})),g&&k&&e.document.querySelector(".nx-report-click-to-close").addEventListener("click",(function(){x()}))}n=B(!0,n,c)},te=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ne=function(t,n,i,a,o,u,c,l,f){if(!W("body"))return!1;r||ue.Confirm.init({});var h=B(!0,r,{});"object"!=typeof f||Array.isArray(f)||(r=B(!0,r,f)),"string"!=typeof n&&(n="Notiflix Confirm"),"string"!=typeof i&&(i="Do you agree with me?"),"string"!=typeof o&&(o="Yes"),"string"!=typeof u&&(u="No"),"function"!=typeof c&&(c=void 0),"function"!=typeof l&&(l=void 0),r.plainText&&(n=q(n),i=q(i),o=q(o),u=q(u)),r.plainText||(n.length>r.titleMaxLength&&(n="Possible HTML Tags Error",i='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',o="Okay",u="..."),i.length>r.messageMaxLength&&(n="Possible HTML Tags Error",i='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',o="Okay",u="..."),(o.length||u.length)>r.buttonsMaxLength&&(n="Possible HTML Tags Error",i='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',o="Okay",u="...")),n.length>r.titleMaxLength&&(n=n.substring(0,r.titleMaxLength)+"..."),i.length>r.messageMaxLength&&(i=i.substring(0,r.messageMaxLength)+"..."),o.length>r.buttonsMaxLength&&(o=o.substring(0,r.buttonsMaxLength)+"..."),u.length>r.buttonsMaxLength&&(u=u.substring(0,r.buttonsMaxLength)+"..."),r.cssAnimation||(r.cssAnimationDuration=0);var d=e.document.createElement("div");d.id=x.ID,d.className=r.className+(r.cssAnimation?" nx-with-animation nx-"+r.cssAnimationStyle:""),d.style.zIndex=r.zindex,d.style.padding=r.distance,r.rtl&&(d.setAttribute("dir","rtl"),d.classList.add("nx-rtl-on"));var p="string"==typeof r.position?r.position.trim():"center";d.classList.add("nx-position-"+p),d.style.fontFamily='"'+r.fontFamily+'", '+s;var v="";r.backOverlay&&(v='<div class="'+r.className+"-overlay"+(r.cssAnimation?" nx-with-animation":"")+'" style="background:'+r.backOverlayColor+";animation-duration:"+r.cssAnimationDuration+'ms;"></div>');var m="";"function"==typeof c&&(m='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+r.cancelButtonColor+";background:"+r.cancelButtonBackground+";font-size:"+r.buttonsFontSize+';">'+u+"</a>");var y="",g=null,_=void 0;if(t===k||t===b){g=a||"";var w=t===k||200<g.length?Math.ceil(1.5*g.length):250;y='<div><input id="NXConfirmValidationInput" type="text" '+(t===b?'value="'+g+'"':"")+' maxlength="'+w+'" style="font-size:'+r.messageFontSize+";border-radius: "+r.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(d.innerHTML=v+'<div class="'+r.className+'-content" style="width:'+r.width+"; background:"+r.backgroundColor+"; animation-duration:"+r.cssAnimationDuration+"ms; border-radius: "+r.borderRadius+';"><div class="'+r.className+'-head"><h5 style="color:'+r.titleColor+";font-size:"+r.titleFontSize+';">'+n+'</h5><div style="color:'+r.messageColor+";font-size:"+r.messageFontSize+';">'+i+y+'</div></div><div class="'+r.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+("function"==typeof c?"":" nx-full")+'" style="color:'+r.okButtonColor+";background:"+r.okButtonBackground+";font-size:"+r.buttonsFontSize+';">'+o+"</a>"+m+"</div></div>",!e.document.getElementById(d.id)){e.document.body.appendChild(d);var I=e.document.getElementById(d.id),C=e.document.getElementById("NXConfirmButtonOk"),T=e.document.getElementById("NXConfirmValidationInput");T&&(T.focus(),T.setSelectionRange(0,(T.value||"").length),T.addEventListener("keyup",(function(e){var n=e.target.value;t===k&&n!==g?(e.preventDefault(),T.classList.add("nx-validation-failure"),T.classList.remove("nx-validation-success")):(t===k&&(T.classList.remove("nx-validation-failure"),T.classList.add("nx-validation-success")),("enter"===(e.key||"").toLocaleLowerCase("en")||13===e.keyCode)&&C.dispatchEvent(new Event("click")))}))),C.addEventListener("click",(function(e){if(t===k&&g&&T){if((T.value||"").toString()!==g)return T.focus(),T.classList.add("nx-validation-failure"),e.stopPropagation(),e.preventDefault(),e.returnValue=!1,e.cancelBubble=!0,!1;T.classList.remove("nx-validation-failure")}"function"==typeof c&&(t===b&&T&&(_=T.value||""),c(_)),I.classList.add("nx-remove");var n=setTimeout((function(){null!==I.parentNode&&(I.parentNode.removeChild(I),clearTimeout(n))}),r.cssAnimationDuration)})),"function"==typeof c&&e.document.getElementById("NXConfirmButtonCancel").addEventListener("click",(function(){"function"==typeof l&&(t===b&&T&&(_=T.value||""),l(_)),I.classList.add("nx-remove");var e=setTimeout((function(){null!==I.parentNode&&(I.parentNode.removeChild(I),clearTimeout(e))}),r.cssAnimationDuration)}))}r=B(!0,r,h)},re=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},ie=function(t,n,r,a,o){if(!W("body"))return!1;i||ue.Loading.init({});var u=B(!0,i,{});if("object"==typeof n&&!Array.isArray(n)||"object"==typeof r&&!Array.isArray(r)){var c={};"object"==typeof n?c=n:"object"==typeof r&&(c=r),i=B(!0,i,c)}var l="";if("string"==typeof n&&0<n.length&&(l=n),a){var f="";0<(l=l.length>i.messageMaxLength?q(l).toString().substring(0,i.messageMaxLength)+"...":q(l).toString()).length&&(f='<p id="'+i.messageID+'" class="nx-loading-message" style="color:'+i.messageColor+";font-size:"+i.messageFontSize+';">'+l+"</p>"),i.cssAnimation||(i.cssAnimationDuration=0);var h="";if(t===_)h=H(i.svgSize,i.svgColor);else if(t===w)h=V(i.svgSize,i.svgColor);else if(t===I)h=X(i.svgSize,i.svgColor);else if(t===C)h=K(i.svgSize,i.svgColor);else if(t===T)h=G(i.svgSize,i.svgColor);else if(t===N)h=Y(i.svgSize,i.svgColor);else if(t===S&&null!==i.customSvgCode&&null===i.customSvgUrl)h=i.customSvgCode||"";else if(t===S&&null!==i.customSvgUrl&&null===i.customSvgCode)h='<img class="nx-custom-loading-icon" width="'+i.svgSize+'" height="'+i.svgSize+'" src="'+i.customSvgUrl+'" alt="Notiflix">';else{if(t===S&&(null===i.customSvgUrl||null===i.customSvgCode))return z('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;h=function(e,t,n){return e||(e="60px"),t||(t="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(i.svgSize,"#f8f8f8","#32c682")}var d=parseInt((i.svgSize||"").replace(/[^0-9]/g,"")),p=e.innerWidth,v=d>=p?p-40+"px":d+"px",m='<div style="width:'+v+"; height:"+v+';" class="'+i.className+"-icon"+(0<l.length?" nx-with-message":"")+'">'+h+"</div>",y=e.document.createElement("div");y.id=R.ID,y.className=i.className+(i.cssAnimation?" nx-with-animation":"")+(i.clickToClose?" nx-loading-click-to-close":""),y.style.zIndex=i.zindex,y.style.background=i.backgroundColor,y.style.animationDuration=i.cssAnimationDuration+"ms",y.style.fontFamily='"'+i.fontFamily+'", '+s,y.style.display="flex",y.style.flexWrap="wrap",y.style.flexDirection="column",y.style.alignItems="center",y.style.justifyContent="center",i.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.innerHTML=m+f,!e.document.getElementById(y.id)&&(e.document.body.appendChild(y),i.clickToClose)&&e.document.getElementById(y.id).addEventListener("click",(function(){y.classList.add("nx-remove");var e=setTimeout((function(){null!==y.parentNode&&(y.parentNode.removeChild(y),clearTimeout(e))}),i.cssAnimationDuration)}))}else if(e.document.getElementById(R.ID))var g=e.document.getElementById(R.ID),k=setTimeout((function(){g.classList.add("nx-remove");var e=setTimeout((function(){null!==g.parentNode&&(g.parentNode.removeChild(g),clearTimeout(e))}),i.cssAnimationDuration);clearTimeout(k)}),o);i=B(!0,i,u)},ae=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},oe=0,se=function(t,n,r,i,o,u){var c;if(Array.isArray(r)){if(1>r.length)return z("Array of HTMLElements should contains at least one HTMLElement."),!1;c=r}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,r)){if(1>r.length)return z("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;c=Array.prototype.slice.call(r)}else{if("string"!=typeof r||1>(r||"").length||1===(r||"").length&&("#"===(r||"")[0]||"."===(r||"")[0]))return z("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var l=e.document.querySelectorAll(r);if(1>l.length)return z('You called the "Notiflix.Block..." function with "'+r+'" selector, but there is no such element(s) in the document.'),!1;c=l}a||ue.Block.init({});var f=B(!0,a,{});if("object"==typeof i&&!Array.isArray(i)||"object"==typeof o&&!Array.isArray(o)){var h={};"object"==typeof i?h=i:"object"==typeof o&&(h=o),a=B(!0,a,h)}var d="";"string"==typeof i&&0<i.length&&(d=i),a.cssAnimation||(a.cssAnimationDuration=0);var p=F.className;"string"==typeof a.className&&(p=a.className.trim());var v="number"==typeof a.querySelectorLimit?a.querySelectorLimit:200,m=(c||[]).length>=v?v:c.length,y="nx-block-temporary-position";if(t){for(var g,k=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],b=0;b<m;b++)if(g=c[b]){if(-1<k.indexOf(g.tagName.toLocaleLowerCase("en")))break;var x=g.querySelectorAll("[id^="+F.ID+"]");if(1>x.length){var _="";n&&(_=n===P?V(a.svgSize,a.svgColor):n===O?X(a.svgSize,a.svgColor):n===L?K(a.svgSize,a.svgColor):n===D?G(a.svgSize,a.svgColor):n===M?Y(a.svgSize,a.svgColor):H(a.svgSize,a.svgColor));var w='<span class="'+p+'-icon" style="width:'+a.svgSize+";height:"+a.svgSize+';">'+_+"</span>",I="";0<d.length&&(d=d.length>a.messageMaxLength?q(d).substring(0,a.messageMaxLength)+"...":q(d),I='<span style="font-size:'+a.messageFontSize+";color:"+a.messageColor+';" class="'+p+'-message">'+d+"</span>"),oe++;var C=e.document.createElement("div");C.id=F.ID+"-"+oe,C.className=p+(a.cssAnimation?" nx-with-animation":""),C.style.position=a.position,C.style.zIndex=a.zindex,C.style.background=a.backgroundColor,C.style.animationDuration=a.cssAnimationDuration+"ms",C.style.fontFamily='"'+a.fontFamily+'", '+s,C.style.display="flex",C.style.flexWrap="wrap",C.style.flexDirection="column",C.style.alignItems="center",C.style.justifyContent="center",a.rtl&&(C.setAttribute("dir","rtl"),C.classList.add("nx-rtl-on")),C.innerHTML=w+I;var T,N=e.getComputedStyle(g).getPropertyValue("position"),S="string"==typeof N?N.toLocaleLowerCase("en"):"relative",E=Math.round(1.25*parseInt(a.svgSize))+40,R="";E>(g.offsetHeight||0)&&(R="min-height:"+E+"px;"),T=g.getAttribute("id")?"#"+g.getAttribute("id"):g.classList[0]?"."+g.classList[0]:(g.tagName||"").toLocaleLowerCase("en");var A="",U=-1>=["absolute","relative","fixed","sticky"].indexOf(S);if(U||0<R.length){if(!W("head"))return!1;U&&(A="position:relative!important;");var J='<style id="Style-'+F.ID+"-"+oe+'">'+T+"."+y+"{"+A+R+"}</style>",Q=e.document.createRange();Q.selectNode(e.document.head);var $=Q.createContextualFragment(J);e.document.head.appendChild($),g.classList.add(y)}g.appendChild(C)}}}else var Z=function(t){var n=setTimeout((function(){null!==t.parentNode&&t.parentNode.removeChild(t);var r=t.getAttribute("id"),i=e.document.getElementById("Style-"+r);i&&null!==i.parentNode&&i.parentNode.removeChild(i),clearTimeout(n)}),a.cssAnimationDuration)},ee=function(e){if(e&&0<e.length)for(var t,n=0;n<e.length;n++)(t=e[n])&&(t.classList.add("nx-remove"),Z(t));else j("string"==typeof r?'"Notiflix.Block.remove();" function called with "'+r+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+r+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},te=function(e){var t=setTimeout((function(){e.classList.remove(y),clearTimeout(t)}),a.cssAnimationDuration+300)},ne=setTimeout((function(){for(var e,t=0;t<m;t++)(e=c[t])&&(te(e),x=e.querySelectorAll("[id^="+F.ID+"]"),ee(x));clearTimeout(ne)}),u);a=B(!0,a,f)},ue={Notify:{init:function(e){t=B(!0,h,e),U(J,"NotiflixNotifyInternalCSS")},merge:function(e){return t?void(t=B(!0,t,e)):(z("You have to initialize the Notify module before call Merge function."),!1)},success:function(e,t,n){$(u,e,t,n)},failure:function(e,t,n){$(c,e,t,n)},warning:function(e,t,n){$(l,e,t,n)},info:function(e,t,n){$(f,e,t,n)}},Report:{init:function(e){n=B(!0,y,e),U(Z,"NotiflixReportInternalCSS")},merge:function(e){return n?void(n=B(!0,n,e)):(z("You have to initialize the Report module before call Merge function."),!1)},success:function(e,t,n,r,i){ee(d,e,t,n,r,i)},failure:function(e,t,n,r,i){ee(p,e,t,n,r,i)},warning:function(e,t,n,r,i){ee(v,e,t,n,r,i)},info:function(e,t,n,r,i){ee(m,e,t,n,r,i)}},Confirm:{init:function(e){r=B(!0,x,e),U(te,"NotiflixConfirmInternalCSS")},merge:function(e){return r?void(r=B(!0,r,e)):(z("You have to initialize the Confirm module before call Merge function."),!1)},show:function(e,t,n,r,i,a,o){ne(g,e,t,null,n,r,i,a,o)},ask:function(e,t,n,r,i,a,o,s){ne(k,e,t,n,r,i,a,o,s)},prompt:function(e,t,n,r,i,a,o,s){ne(b,e,t,n,r,i,a,o,s)}},Loading:{init:function(e){i=B(!0,R,e),U(re,"NotiflixLoadingInternalCSS")},merge:function(e){return i?void(i=B(!0,i,e)):(z("You have to initialize the Loading module before call Merge function."),!1)},standard:function(e,t){ie(_,e,t,!0,0)},hourglass:function(e,t){ie(w,e,t,!0,0)},circle:function(e,t){ie(I,e,t,!0,0)},arrows:function(e,t){ie(C,e,t,!0,0)},dots:function(e,t){ie(T,e,t,!0,0)},pulse:function(e,t){ie(N,e,t,!0,0)},custom:function(e,t){ie(S,e,t,!0,0)},notiflix:function(e,t){ie(E,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),ie(null,null,null,!1,e)},change:function(t){!function(t){"string"!=typeof t&&(t="");var n=e.document.getElementById(R.ID);if(n)if(0<t.length){t=t.length>i.messageMaxLength?q(t).substring(0,i.messageMaxLength)+"...":q(t);var r=n.getElementsByTagName("p")[0];if(r)r.innerHTML=t;else{var a=e.document.createElement("p");a.id=i.messageID,a.className="nx-loading-message nx-loading-message-new",a.style.color=i.messageColor,a.style.fontSize=i.messageFontSize,a.innerHTML=t,n.appendChild(a)}}else z("Where is the new message?")}(t)}},Block:{init:function(e){a=B(!0,F,e),U(ae,"NotiflixBlockInternalCSS")},merge:function(e){return a?void(a=B(!0,a,e)):(z('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(e,t,n){se(!0,A,e,t,n)},hourglass:function(e,t,n){se(!0,P,e,t,n)},circle:function(e,t,n){se(!0,O,e,t,n)},arrows:function(e,t,n){se(!0,L,e,t,n)},dots:function(e,t,n){se(!0,D,e,t,n)},pulse:function(e,t,n){se(!0,M,e,t,n)},remove:function(e,t){"number"!=typeof t&&(t=0),se(!1,null,e,null,null,t)}}};return"object"==typeof e.Notiflix?B(!0,e.Notiflix,{Notify:ue.Notify,Report:ue.Report,Confirm:ue.Confirm,Loading:ue.Loading,Block:ue.Block}):{Notify:ue.Notify,Report:ue.Report,Confirm:ue.Confirm,Loading:ue.Loading,Block:ue.Block}},"function"==typeof define&&define.amd?define([],(function(){return o(a)})):"object"==typeof s?s=o(a):a.Notiflix=o(a);var u=i("876k2"),c=i("bpxeT"),l=i("8MBJY"),f=i("a2hTj"),h=i("2TvXO"),d=(c=i("bpxeT"),l=i("8MBJY"),f=i("a2hTj"),i("hKHmD")),p=i("8nrFW"),v=(h=i("2TvXO"),c=i("bpxeT"),l=i("8MBJY"),f=i("a2hTj"),i("1t1Wn")),m=(p=i("8nrFW"),h=i("2TvXO"),i("ds8z5")),y=(l=i("8MBJY"),f=i("a2hTj"),i("eYQtU")),g=(v=i("1t1Wn"),p=i("8nrFW"),{});Object.defineProperty(g,"__esModule",{value:!0}),g.default=function(e){return I(e)};var k=w(i("ge8co")),b=w(i("cZGw3")),x=w(i("fVNic")),_=w(i("gD1JV"));function w(e){return e&&e.__esModule?e:{default:e}}function I(e){var t="function"==typeof Map?new Map:void 0;return I=function(e){if(null===e||!b.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return k.default(e,arguments,x.default(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),_.default(n,e)},I(e)}var C,T,N,S=i("2MbLg"),E=C={};function R(){throw new Error("setTimeout has not been defined")}function A(){throw new Error("clearTimeout has not been defined")}function P(e){if(T===setTimeout)return setTimeout(e,0);if((T===R||!T)&&setTimeout)return T=setTimeout,setTimeout(e,0);try{return T(e,0)}catch(t){try{return T.call(null,e,0)}catch(t){return T.call(this,e,0)}}}!function(){try{T="function"==typeof setTimeout?setTimeout:R}catch(e){T=R}try{N="function"==typeof clearTimeout?clearTimeout:A}catch(e){N=A}}();var O,L=[],D=!1,M=-1;function F(){D&&O&&(D=!1,O.length?L=O.concat(L):M=-1,L.length&&z())}function z(){if(!D){var e=P(F);D=!0;for(var t=L.length;t;){for(O=L,L=[];++M<t;)O&&O[M].run();M=-1,t=L.length}O=null,D=!1,function(e){if(N===clearTimeout)return clearTimeout(e);if((N===A||!N)&&clearTimeout)return N=clearTimeout,clearTimeout(e);try{N(e)}catch(t){try{return N.call(null,e)}catch(t){return N.call(this,e)}}}(e)}}function j(e,t){this.fun=e,this.array=t}function W(){}E.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];L.push(new j(e,t)),1!==L.length||D||P(z)},j.prototype.run=function(){this.fun.apply(null,this.array)},E.title="browser",E.browser=!0,E.env={},E.argv=[],E.version="",E.versions={},E.on=W,E.addListener=W,E.once=W,E.off=W,E.removeListener=W,E.removeAllListeners=W,E.emit=W,E.prependListener=W,E.prependOnceListener=W,E.listeners=function(e){return[]},E.binding=function(e){throw new Error("process.binding is not supported")},E.cwd=function(){return"/"},E.chdir=function(e){throw new Error("process.chdir is not supported")},E.umask=function(){return 0};
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
var U=!1,B=!1,q="${JSCORE_VERSION}",H=function(e,t){if(!e)throw V(t)},V=function(e){return new Error("Firebase Database ("+q+") INTERNAL ASSERT FAILED: "+e)},X=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},K={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,f=(3&a)<<4|s>>4,h=(15&s)<<2|c>>6,d=63&c;u||(d=64,o||(h=64)),r.push(n[l],n[f],n[h],n[d])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(X(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var a=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw Error();var c=a<<2|o>>4;if(r.push(c),64!==s){var l=o<<4&240|s>>2;if(r.push(l),64!==u){var f=s<<6&192|u;r.push(f)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},G=function(e){var t=X(e);return K.encodeByteArray(t,!0)},Y=function(e){return G(e).replace(/\./g,"")},J=function(e){try{return K.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function Q(e){return $(void 0,e)}function $(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=$(e[n],t[n]));return e}
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
function Z(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function ee(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Z())}function te(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function ne(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function re(){return!0===U||!0===B}function ie(){return"object"==typeof indexedDB}function ae(){return new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}function oe(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
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
var se=function(){return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},ue=function(){try{return se()||function(){if(void 0!==C&&void 0!==C.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&J(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},ce=function(e){var t,n;return null===(n=null===(t=ue())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},le=function(e){var t=ce(e);if(t){var n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error("Invalid host ".concat(t," with no separate hostname and port!"));var r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]}},fe=function(){var e;return null===(e=ue())||void 0===e?void 0:e.config},he=function(e){var t;return null===(t=ue())||void 0===t?void 0:t["_".concat(e)]},de=function(){"use strict";function t(){var n=this;e(l)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}return e(f)(t,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),t}();
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
function pe(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var a=Object.assign({iss:"https://securetoken.google.com/".concat(n),aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Y(JSON.stringify({alg:"none",type:"JWT"})),Y(JSON.stringify(a)),""].join(".")}
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
 */var ve=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t,i,a){var o;return e(l)(this,r),(o=n.call(this,i)).code=t,o.customData=a,o.name="FirebaseError",Object.setPrototypeOf(e(m)(o),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(e(m)(o),me.prototype.create),o}return r}(e(g)(Error)),me=function(){"use strict";function t(n,r,i){e(l)(this,t),this.service=n,this.serviceName=r,this.errors=i}return e(f)(t,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?ye(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new ve(a,u,i);return c}}]),t}();function ye(e,t){return e.replace(ge,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var ge=/\{\$([^}]+)}/g;
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
 */function ke(e){return JSON.parse(e)}function be(e){return JSON.stringify(e)}
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
 */var xe=function(e){var t={},n={},r={},i="";try{var a=e.split(".");t=ke(J(a[0])||""),n=ke(J(a[1])||""),i=a[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}},_e=function(e){var t=xe(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")};
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
function we(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Ie(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function Ce(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Te(e,t,n){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function Ne(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],f=t[c];if(Se(l)&&Se(f)){if(!Ne(l,f))return!1}else if(l!==f)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var h=!0,d=!1,p=void 0;try{for(var v,m=r[Symbol.iterator]();!(h=(v=m.next()).done);h=!0){var y=v.value;if(!n.includes(y))return!1}}catch(e){d=!0,p=e}finally{try{h||null==m.return||m.return()}finally{if(d)throw p}}return!0}function Se(e){return null!==e&&"object"==typeof e}
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
function Ee(t){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=function(t,r){var i=e(v)(r.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){n.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):n.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},u=Object.entries(t)[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return n.length?"&"+n.join("&"):""}function Re(t){var n={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var r=e(v)(t.split("="),2),i=r[0],a=r[1];n[decodeURIComponent(i)]=decodeURIComponent(a)}})),n}function Ae(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */var Pe=function(){"use strict";function t(){e(l)(this,t),this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var n=1;n<this.blockSize;++n)this.pad_[n]=0;this.reset()}return e(f)(t,[{key:"reset",value:function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}},{key:"compress_",value:function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(var i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(var a=16;a<80;a++){var o=n[a-3]^n[a-8]^n[a-14]^n[a-16];n[a]=4294967295&(o<<1|o>>>31)}for(var s,u,c=this.chain_[0],l=this.chain_[1],f=this.chain_[2],h=this.chain_[3],d=this.chain_[4],p=0;p<80;p++){p<40?p<20?(s=h^l&(f^h),u=1518500249):(s=l^f^h,u=1859775393):p<60?(s=l&f|h&(l|f),u=2400959708):(s=l^f^h,u=3395469782);var v=(c<<5|c>>>27)+s+d+u+n[p]&4294967295;d=h,h=f,f=4294967295&(l<<30|l>>>2),l=c,c=v}this.chain_[0]=this.chain_[0]+c&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+f&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+d&4294967295}},{key:"update",value:function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=0,i=this.buf_,a=this.inbuf_;r<t;){if(0===a)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[a]=e.charCodeAt(r),++r,++a===this.blockSize){this.compress_(i),a=0;break}}else for(;r<t;)if(i[a]=e[r],++r,++a===this.blockSize){this.compress_(i),a=0;break}}this.inbuf_=a,this.total_+=t}}},{key:"digest",value:function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);for(var r=0,i=0;i<5;i++)for(var a=24;a>=0;a-=8)e[r]=this.chain_[i]>>a&255,++r;return e}}]),t}();var Oe=function(){"use strict";function t(n,r){var i=this;e(l)(this,t),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){n(i)})).catch((function(e){i.error(e)}))}return e(f)(t,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=Le),void 0===r.error&&(r.error=Le),void 0===r.complete&&(r.complete=Le);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),t}();function Le(){}
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
 */function De(e,t){return"".concat(e," failed: ").concat(t," argument ")}
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
var Me=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);if(i>=55296&&i<=56319){var a=i-55296;r++,H(r<e.length,"Surrogate pair missing trail surrogate."),i=65536+(a<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Fe=function(e){for(var t=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t},ze=144e5;function je(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(ze,r+i)}
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
function We(e){return e&&e._delegate?e._delegate:e}var Ue=function(){"use strict";function t(n,r,i){e(l)(this,t),this.name=n,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e(f)(t,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),t}(),Be="[DEFAULT]",qe=function(){"use strict";function t(n,r){e(l)(this,t),this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e(f)(t,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new de;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:Be})}catch(e){}var n=!0,r=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=e(v)(a.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var f=this.getOrInitializeService({instanceIdentifier:l});c.resolve(f)}catch(e){}}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var t=this;return e(c)(e(h).mark((function n(){var r;return e(h).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Array.from(t.instances.values()),n.next=3,Promise.all(e(p)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(e(p)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return n.stop()}}),n)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.options,r=void 0===n?{}:n,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:r}),o=!0,s=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var f=e(v)(c.value,2),h=f[0],d=f[1],p=this.normalizeInstanceIdentifier(h);i===p&&d.resolve(a)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return a}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var a=this.instances.get(r);return a&&e(a,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,a=this.instances.get(n);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===Be?void 0:t),options:i}),this.instances.set(n,a),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(a,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be;return this.component?this.component.multipleInstances?e:Be:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),t}();
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
 */var He,Ve,Xe=function(){"use strict";function t(n){e(l)(this,t),this.name=n,this.providers=new Map}return e(f)(t,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new qe(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),t}(),Ke=(l=i("8MBJY"),f=i("a2hTj"),d=i("hKHmD"),p=i("8nrFW"),[]);(Ve=He||(He={}))[Ve.DEBUG=0]="DEBUG",Ve[Ve.VERBOSE=1]="VERBOSE",Ve[Ve.INFO=2]="INFO",Ve[Ve.WARN=3]="WARN",Ve[Ve.ERROR=4]="ERROR",Ve[Ve.SILENT=5]="SILENT";var Ge,Ye={debug:He.DEBUG,verbose:He.VERBOSE,info:He.INFO,warn:He.WARN,error:He.ERROR,silent:He.SILENT},Je=He.INFO,Qe=(Ge={},e(d)(Ge,He.DEBUG,"log"),e(d)(Ge,He.VERBOSE,"log"),e(d)(Ge,He.INFO,"info"),e(d)(Ge,He.WARN,"warn"),e(d)(Ge,He.ERROR,"error"),Ge),$e=function(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var o;if(!(n<t.logLevel)){var s=(new Date).toISOString(),u=Qe[n];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(n,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(t.name,":")].concat(e(p)(i)))}},Ze=function(){"use strict";function t(n){e(l)(this,t),this.name=n,this._logLevel=Je,this._logHandler=$e,this._userLogHandler=null,Ke.push(this)}return e(f)(t,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in He))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?Ye[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,He.DEBUG].concat(e(p)(n))),this._logHandler.apply(this,[this,He.DEBUG].concat(e(p)(n)))}},{key:"log",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,He.VERBOSE].concat(e(p)(n))),this._logHandler.apply(this,[this,He.VERBOSE].concat(e(p)(n)))}},{key:"info",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,He.INFO].concat(e(p)(n))),this._logHandler.apply(this,[this,He.INFO].concat(e(p)(n)))}},{key:"warn",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,He.WARN].concat(e(p)(n))),this._logHandler.apply(this,[this,He.WARN].concat(e(p)(n)))}},{key:"error",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,He.ERROR].concat(e(p)(n))),this._logHandler.apply(this,[this,He.ERROR].concat(e(p)(n)))}}]),t}();c=i("bpxeT");var et={};Object.defineProperty(et,"__esModule",{value:!0}),et.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){nt.default(e,t,n[t])}))}return e};var tt,nt=(tt=i("hKHmD"))&&tt.__esModule?tt:{default:tt};var rt,it;p=i("8nrFW"),h=i("2TvXO"),p=i("8nrFW");var at=new WeakMap,ot=new WeakMap,st=new WeakMap,ut=new WeakMap,ct=new WeakMap;var lt={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return ot.get(e);if("objectStoreNames"===t)return e.objectStoreNames||st.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dt(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function ft(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(it||(it=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.apply(pt(this),n),dt(at.get(this))}:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return dt(t.apply(pt(this),n))}:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var o,s=(o=t).call.apply(o,[pt(this),n].concat(e(p)(i)));return st.set(s,n.sort?n.sort():[n]),dt(s)}}function ht(e){return"function"==typeof e?ft(e):(e instanceof IDBTransaction&&function(e){if(!ot.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),r()},a=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));ot.set(e,t)}}(e),t=e,(rt||(rt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,lt):e);var t}function dt(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(dt(t.result)),r()},a=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&at.set(e,t)})).catch((function(){})),ct.set(n,t),n;var t,n;if(ut.has(e))return ut.get(e);var r=ht(e);return r!==e&&(ut.set(e,r),ct.set(r,e)),r}var pt=function(e){return ct.get(e)};function vt(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,a=n.blocking,o=n.terminated,s=indexedDB.open(e,t),u=dt(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(dt(s.result),e.oldVersion,e.newVersion,dt(s.transaction))})),r&&s.addEventListener("blocked",(function(){return r()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),u}var mt=["get","getKey","getAll","getAllKeys","count"],yt=["put","add","delete","clear"],gt=new Map;function kt(t,n){if(t instanceof IDBDatabase&&!(n in t)&&"string"==typeof n){if(gt.get(n))return gt.get(n);var r=n.replace(/FromIndex$/,""),i=n!==r,a=yt.includes(r);if(r in(i?IDBIndex:IDBObjectStore).prototype&&(a||mt.includes(r))){var o,s=(o=e(c)(e(h).mark((function t(n){var o,s,u,c,l,f,d=arguments;return e(h).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(o=d.length,s=new Array(o>1?o-1:0),u=1;u<o;u++)s[u-1]=d[u];return l=this.transaction(n,a?"readwrite":"readonly"),f=l.store,i&&(f=f.index(s.shift())),t.next=7,Promise.all([(c=f)[r].apply(c,e(p)(s)),a&&l.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)}))),function(e){return o.apply(this,arguments)});return gt.set(n,s),s}}}lt=function(t){return e(et)({},t,{get:function(e,n,r){return kt(e,n)||t.get(e,n,r)},has:function(e,n){return!!kt(e,n)||t.has(e,n)}})}(lt);
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
var bt=function(){"use strict";function t(n){e(l)(this,t),this.container=n}return e(f)(t,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),t}();var xt,_t,wt="@firebase/app",It="0.8.4",Ct=new Ze("@firebase/app"),Tt="[DEFAULT]",Nt=(xt={},e(d)(xt,wt,"fire-core"),e(d)(xt,"@firebase/app-compat","fire-core-compat"),e(d)(xt,"@firebase/analytics","fire-analytics"),e(d)(xt,"@firebase/analytics-compat","fire-analytics-compat"),e(d)(xt,"@firebase/app-check","fire-app-check"),e(d)(xt,"@firebase/app-check-compat","fire-app-check-compat"),e(d)(xt,"@firebase/auth","fire-auth"),e(d)(xt,"@firebase/auth-compat","fire-auth-compat"),e(d)(xt,"@firebase/database","fire-rtdb"),e(d)(xt,"@firebase/database-compat","fire-rtdb-compat"),e(d)(xt,"@firebase/functions","fire-fn"),e(d)(xt,"@firebase/functions-compat","fire-fn-compat"),e(d)(xt,"@firebase/installations","fire-iid"),e(d)(xt,"@firebase/installations-compat","fire-iid-compat"),e(d)(xt,"@firebase/messaging","fire-fcm"),e(d)(xt,"@firebase/messaging-compat","fire-fcm-compat"),e(d)(xt,"@firebase/performance","fire-perf"),e(d)(xt,"@firebase/performance-compat","fire-perf-compat"),e(d)(xt,"@firebase/remote-config","fire-rc"),e(d)(xt,"@firebase/remote-config-compat","fire-rc-compat"),e(d)(xt,"@firebase/storage","fire-gcs"),e(d)(xt,"@firebase/storage-compat","fire-gcs-compat"),e(d)(xt,"@firebase/firestore","fire-fst"),e(d)(xt,"@firebase/firestore-compat","fire-fst-compat"),e(d)(xt,"fire-js","fire-js"),e(d)(xt,"firebase","fire-js-all"),xt),St=new Map,Et=new Map;function Rt(e,t){try{e.container.addComponent(t)}catch(n){Ct.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function At(e){var t=e.name;if(Et.has(t))return Ct.debug("There were multiple attempts to register component ".concat(t,".")),!1;Et.set(t,e);var n=!0,r=!1,i=void 0;try{for(var a,o=St.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){Rt(a.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}function Pt(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
var Ot=(_t={},e(d)(_t,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),e(d)(_t,"bad-app-name","Illegal App name: '{$appName}"),e(d)(_t,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),e(d)(_t,"app-deleted","Firebase App named '{$appName}' already deleted"),e(d)(_t,"no-options","Need to provide options, when not being deployed to hosting via source."),e(d)(_t,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),e(d)(_t,"invalid-log-argument","First argument to `onLog` must be null or a function."),e(d)(_t,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),e(d)(_t,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),e(d)(_t,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),e(d)(_t,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),_t),Lt=new me("app","Firebase",Ot),Dt=function(){"use strict";function t(n,r,i){var a=this;e(l)(this,t),this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ue("app",(function(){return a}),"PUBLIC"))}return e(f)(t,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}]),t}(),Mt="9.14.0";function Ft(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!=typeof t){var r=t;t={name:r}}var i=Object.assign({name:Tt,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw Lt.create("bad-app-name",{appName:String(a)});if(n||(n=fe()),!n)throw Lt.create("no-options");var o=St.get(a);if(o){if(Ne(n,o.options)&&Ne(i,o.config))return o;throw Lt.create("duplicate-app",{appName:a})}var s=new Xe(a),u=!0,c=!1,l=void 0;try{for(var f,h=Et.values()[Symbol.iterator]();!(u=(f=h.next()).done);u=!0){var d=f.value;s.addComponent(d)}}catch(e){c=!0,l=e}finally{try{u||null==h.return||h.return()}finally{if(c)throw l}}var p=new Dt(n,i,s);return St.set(a,p),p}function zt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tt,t=St.get(e);if(!t&&e===Tt)return Ft();if(!t)throw Lt.create("no-app",{appName:e});return t}function jt(e,t,n){var r,i=null!==(r=Nt[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void Ct.warn(s.join(" "))}At(new Ue("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
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
var Wt="firebase-heartbeat-store",Ut=null;function Bt(){return Ut||(Ut=vt("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(Wt)}}).catch((function(e){throw Lt.create("idb-open",{originalErrorMessage:e.message})}))),Ut}function qt(e){return Ht.apply(this,arguments)}function Ht(){return(Ht=e(c)(e(h).mark((function t(n){var r,i,a;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Bt();case 4:return i=e.sent,e.abrupt("return",i.transaction(Wt).objectStore(Wt).get(Kt(n)));case 8:e.prev=8,e.t0=e.catch(1),e.t0 instanceof ve?Ct.warn(e.t0.message):(a=Lt.create("idb-get",{originalErrorMessage:null===(r=e.t0)||void 0===r?void 0:r.message}),Ct.warn(a.message));case 11:case"end":return e.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function Vt(e,t){return Xt.apply(this,arguments)}function Xt(){return(Xt=e(c)(e(h).mark((function t(n,r){var i,a,o,s,u;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Bt();case 4:return a=e.sent,o=a.transaction(Wt,"readwrite"),s=o.objectStore(Wt),e.next=9,s.put(r,Kt(n));case 9:return e.abrupt("return",o.done);case 12:e.prev=12,e.t0=e.catch(1),e.t0 instanceof ve?Ct.warn(e.t0.message):(u=Lt.create("idb-set",{originalErrorMessage:null===(i=e.t0)||void 0===i?void 0:i.message}),Ct.warn(u.message));case 15:case"end":return e.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}function Kt(e){return"".concat(e.name,"!").concat(e.options.appId)}
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
 */var Gt=function(){"use strict";function t(n){var r=this;e(l)(this,t),this.container=n,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new $t(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return e(f)(t,[{key:"triggerHeartbeat",value:function(){var t=this;return e(c)(e(h).mark((function n(){var r,i,a;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),a=Yt(),null!==t._heartbeatsCache){e.next=7;break}return e.next=6,t._heartbeatsCachePromise;case 6:t._heartbeatsCache=e.sent;case 7:if(t._heartbeatsCache.lastSentHeartbeatDate!==a&&!t._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){e.next=11;break}return e.abrupt("return");case 11:t._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return t._heartbeatsCache.heartbeats=t._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",t._storage.overwrite(t._heartbeatsCache));case 14:case"end":return e.stop()}}),n)})))()}},{key:"getHeartbeatsHeader",value:function(){var t=this;return e(c)(e(h).mark((function n(){var r,i,a,o,s;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t._heartbeatsCache){e.next=3;break}return e.next=3,t._heartbeatsCachePromise;case 3:if(null!==t._heartbeatsCache&&0!==t._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(r=Yt(),i=Jt(t._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,o=i.unsentEntries,s=Y(JSON.stringify({version:2,heartbeats:a})),t._heartbeatsCache.lastSentHeartbeatDate=r,!(o.length>0)){e.next=15;break}return t._heartbeatsCache.heartbeats=o,e.next=13,t._storage.overwrite(t._heartbeatsCache);case 13:e.next=16;break;case 15:t._heartbeatsCache.heartbeats=[],t._storage.overwrite(t._heartbeatsCache);case 16:return e.abrupt("return",s);case 17:case"end":return e.stop()}}),n)})))()}}]),t}();function Yt(){return(new Date).toISOString().substring(0,10)}function Jt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=n.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),Zt(n)>t)return o.dates.pop(),"break"}else if(n.push({agent:a.agent,dates:[a.date]}),Zt(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:n,unsentEntries:r}}var Qt,$t=function(){"use strict";function t(n){e(l)(this,t),this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e(f)(t,[{key:"runIndexedDBEnvironmentCheck",value:function(){return e(c)(e(h).mark((function t(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ie()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",ae().then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),t)})))()}},{key:"read",value:function(){var t=this;return e(c)(e(h).mark((function n(){var r;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,qt(t.app);case 9:return r=e.sent,e.abrupt("return",r||{heartbeats:[]});case 11:case"end":return e.stop()}}),n)})))()}},{key:"overwrite",value:function(t){var n=this;return e(c)(e(h).mark((function r(){var i,a;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n._canUseIndexedDBPromise;case 3:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,n.read();case 10:return a=e.sent,e.abrupt("return",Vt(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 12:case"end":return e.stop()}}),r)})))()}},{key:"add",value:function(t){var n=this;return e(c)(e(h).mark((function r(){var i,a;return e(h).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,n._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,n.read();case 10:return a=r.sent,r.abrupt("return",Vt(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e(p)(a.heartbeats).concat(e(p)(t.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),t}();function Zt(e){return Y(JSON.stringify({version:2,heartbeats:e})).length}
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
 */Qt="",At(new Ue("platform-logger",(function(e){return new bt(e)}),"PRIVATE")),At(new Ue("heartbeat",(function(e){return new Gt(e)}),"PRIVATE")),jt(wt,It,Qt),jt(wt,It,"esm2017"),jt("fire-js","");
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
jt("firebase","9.14.0","app");c=i("bpxeT"),l=i("8MBJY"),f=i("a2hTj"),d=i("hKHmD"),v=i("1t1Wn"),h=i("2TvXO"),c=i("bpxeT"),d=i("hKHmD"),p=i("8nrFW"),h=i("2TvXO");var en,tn="@firebase/installations",nn="0.5.16",rn=1e4,an="w:".concat(nn),on="FIS_v2",sn=36e5,un=(en={},e(d)(en,"missing-app-config-values",'Missing App configuration value: "{$valueName}"'),e(d)(en,"not-registered","Firebase Installation is not registered."),e(d)(en,"installation-not-found","Firebase Installation not found."),e(d)(en,"request-failed",'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"'),e(d)(en,"app-offline","Could not process request. Application offline."),e(d)(en,"delete-pending-registration","Can't delete installation while there is a pending registration request."),en),cn=new me("installations","Installations",un);function ln(e){return e instanceof ve&&e.code.includes("request-failed")}
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
 */function fn(e){var t=e.projectId;return"".concat("https://firebaseinstallations.googleapis.com/v1","/projects/").concat(t,"/installations")}function hn(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}function dn(e,t){return pn.apply(this,arguments)}function pn(){return(pn=e(c)(e(h).mark((function t(n,r){var i,a;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.json();case 2:return i=e.sent,a=i.error,e.abrupt("return",cn.create("request-failed",{requestName:n,serverCode:a.code,serverMessage:a.message,serverStatus:a.status}));case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function vn(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function mn(e,t){var n=t.refreshToken,r=vn(e);return r.append("Authorization",function(e){return"".concat(on," ").concat(e)}(n)),r}function yn(e){return gn.apply(this,arguments)}function gn(){return(gn=e(c)(e(h).mark((function t(n){var r;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:if(!((r=e.sent).status>=500&&r.status<600)){e.next=5;break}return e.abrupt("return",n());case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function kn(e,t){return bn.apply(this,arguments)}function bn(){return(bn=
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
e(c)(e(h).mark((function t(n,r){var i,a,o,s,u,c,l,f,d,p,v,m;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.appConfig,a=n.heartbeatServiceProvider,o=r.fid,s=fn(i),u=vn(i),!(c=a.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,c.getHeartbeatsHeader();case 7:(l=e.sent)&&u.append("x-firebase-client",l);case 9:return f={fid:o,authVersion:on,appId:i.appId,sdkVersion:an},d={method:"POST",headers:u,body:JSON.stringify(f)},e.next=13,yn((function(){return fetch(s,d)}));case 13:if(!(p=e.sent).ok){e.next=22;break}return e.next=17,p.json();case 17:return v=e.sent,m={fid:v.fid||o,registrationStatus:2,refreshToken:v.refreshToken,authToken:hn(v.authToken)},e.abrupt("return",m);case 22:return e.next=24,dn("Create Installation",p);case 24:throw e.sent;case 25:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */function xn(e){return new Promise((function(t){setTimeout(t,e)}))}
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
var _n=/^[cdef][\w-]{21}$/;function wn(){try{var t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;var n=function(t){return(n=t,btoa((r=String).fromCharCode.apply(r,e(p)(n))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var n,r}
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
 */(t);return _n.test(n)?n:""}catch(e){return""}}function In(e){return"".concat(e.appName,"!").concat(e.appId)}
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
 */var Cn=new Map;function Tn(e,t){var n=In(e);Nn(n,t),function(e,t){var n=En();n&&n.postMessage({key:e,fid:t});Rn()}(n,t)}function Nn(e,t){var n=Cn.get(e);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}var Sn=null;function En(){return!Sn&&"BroadcastChannel"in self&&((Sn=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){Nn(e.data.key,e.data.fid)}),Sn}function Rn(){0===Cn.size&&Sn&&(Sn.close(),Sn=null)}
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
 */var An="firebase-installations-store",Pn=null;function On(){return Pn||(Pn=vt("firebase-installations-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(An)}})),Pn}function Ln(e,t){return Dn.apply(this,arguments)}function Dn(){return(Dn=e(c)(e(h).mark((function t(n,r){var i,a,o,s,u;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=In(n),e.next=3,On();case 3:return a=e.sent,o=a.transaction(An,"readwrite"),s=o.objectStore(An),e.next=8,s.get(i);case 8:return u=e.sent,e.next=11,s.put(r,i);case 11:return e.next=13,o.done;case 13:return u&&u.fid===r.fid||Tn(n,r.fid),e.abrupt("return",r);case 15:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Mn(e){return Fn.apply(this,arguments)}function Fn(){return(Fn=e(c)(e(h).mark((function t(n){var r,i,a;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=In(n),e.next=3,On();case 3:return i=e.sent,a=i.transaction(An,"readwrite"),e.next=7,a.objectStore(An).delete(r);case 7:return e.next=9,a.done;case 9:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function zn(e,t){return jn.apply(this,arguments)}function jn(){return(jn=e(c)(e(h).mark((function t(n,r){var i,a,o,s,u,c;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=In(n),e.next=3,On();case 3:return a=e.sent,o=a.transaction(An,"readwrite"),s=o.objectStore(An),e.next=8,s.get(i);case 8:if(u=e.sent,void 0!==(c=r(u))){e.next=15;break}return e.next=13,s.delete(i);case 13:e.next=17;break;case 15:return e.next=17,s.put(c,i);case 17:return e.next=19,o.done;case 19:return!c||u&&u.fid===c.fid||Tn(n,c.fid),e.abrupt("return",c);case 21:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Wn(e){return Un.apply(this,arguments)}function Un(){return(Un=
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
e(c)(e(h).mark((function t(n){var r,i;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,zn(n.appConfig,(function(e){var t=Bn(e),i=qn(n,t);return r=i.registrationPromise,i.installationEntry}));case 3:if(""!==(i=e.sent).fid){e.next=9;break}return e.next=7,r;case 7:return e.t0=e.sent,e.abrupt("return",{installationEntry:e.t0});case 9:return e.abrupt("return",{installationEntry:i,registrationPromise:r});case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Bn(e){return Gn(e||{fid:wn(),registrationStatus:0})}function qn(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(cn.create("app-offline"))};var n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=function(e,t){return Hn.apply(this,arguments)}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Vn(e)}:{installationEntry:t}}function Hn(){return(Hn=e(c)(e(h).mark((function t(n,r){var i;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,kn(n,r);case 3:return i=e.sent,e.abrupt("return",Ln(n.appConfig,i));case 7:if(e.prev=7,e.t0=e.catch(0),!ln(e.t0)||409!==e.t0.customData.serverCode){e.next=14;break}return e.next=12,Mn(n.appConfig);case 12:e.next=16;break;case 14:return e.next=16,Ln(n.appConfig,{fid:r.fid,registrationStatus:0});case 16:throw e.t0;case 17:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function Vn(e){return Xn.apply(this,arguments)}function Xn(){return(Xn=e(c)(e(h).mark((function t(n){var r,i,a,o;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Kn(n.appConfig);case 2:r=e.sent;case 3:if(1!==r.registrationStatus){e.next=11;break}return e.next=6,xn(100);case 6:return e.next=8,Kn(n.appConfig);case 8:r=e.sent,e.next=3;break;case 11:if(0!==r.registrationStatus){e.next=22;break}return e.next=14,Wn(n);case 14:if(i=e.sent,a=i.installationEntry,!(o=i.registrationPromise)){e.next=21;break}return e.abrupt("return",o);case 21:return e.abrupt("return",a);case 22:return e.abrupt("return",r);case 23:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Kn(e){return zn(e,(function(e){if(!e)throw cn.create("installation-not-found");return Gn(e)}))}function Gn(e){return 1===(t=e).registrationStatus&&t.registrationTime+rn<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}function Yn(e,t){return Jn.apply(this,arguments)}function Jn(){return(Jn=
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
e(c)(e(h).mark((function t(n,r){var i,a,o,s,u,c,l,f,d,p,v;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.appConfig,a=n.heartbeatServiceProvider,o=Qn(i,r),s=mn(i,r),!(u=a.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,u.getHeartbeatsHeader();case 7:(c=e.sent)&&s.append("x-firebase-client",c);case 9:return l={installation:{sdkVersion:an,appId:i.appId}},f={method:"POST",headers:s,body:JSON.stringify(l)},e.next=13,yn((function(){return fetch(o,f)}));case 13:if(!(d=e.sent).ok){e.next=22;break}return e.next=17,d.json();case 17:return p=e.sent,v=hn(p),e.abrupt("return",v);case 22:return e.next=24,dn("Generate Auth Token",d);case 24:throw e.sent;case 25:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Qn(e,t){var n=t.fid;return"".concat(fn(e),"/").concat(n,"/authTokens:generate")}function $n(e){return Zn.apply(this,arguments)}function Zn(){return Zn=
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
e(c)(e(h).mark((function t(n){var r,i,a,o,s=arguments;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]&&s[1],e.next=4,zn(n.appConfig,(function(e){if(!ar(e))throw cn.create("not-registered");var t=e.authToken;if(!r&&or(t))return e;if(1===t.requestStatus)return i=er(n,r),e;if(!navigator.onLine)throw cn.create("app-offline");var a=sr(e);return i=rr(n,a),a}));case 4:if(a=e.sent,!i){e.next=11;break}return e.next=8,i;case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=a.authToken;case 12:return o=e.t0,e.abrupt("return",o);case 14:case"end":return e.stop()}}),t)}))),Zn.apply(this,arguments)}function er(e,t){return tr.apply(this,arguments)}function tr(){return(tr=e(c)(e(h).mark((function t(n,r){var i,a;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,nr(n.appConfig);case 2:i=e.sent;case 3:if(1!==i.authToken.requestStatus){e.next=11;break}return e.next=6,xn(100);case 6:return e.next=8,nr(n.appConfig);case 8:i=e.sent,e.next=3;break;case 11:if(0!==(a=i.authToken).requestStatus){e.next=16;break}return e.abrupt("return",$n(n,r));case 16:return e.abrupt("return",a);case 17:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function nr(e){return zn(e,(function(e){if(!ar(e))throw cn.create("not-registered");var t,n=e.authToken;return 1===(t=n).requestStatus&&t.requestTime+rn<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}function rr(e,t){return ir.apply(this,arguments)}function ir(){return(ir=e(c)(e(h).mark((function t(n,r){var i,a,o;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Yn(n,r);case 3:return i=e.sent,a=Object.assign(Object.assign({},r),{authToken:i}),e.next=7,Ln(n.appConfig,a);case 7:return e.abrupt("return",i);case 10:if(e.prev=10,e.t0=e.catch(0),!ln(e.t0)||401!==e.t0.customData.serverCode&&404!==e.t0.customData.serverCode){e.next=17;break}return e.next=15,Mn(n.appConfig);case 15:e.next=20;break;case 17:return o=Object.assign(Object.assign({},r),{authToken:{requestStatus:0}}),e.next=20,Ln(n.appConfig,o);case 20:throw e.t0;case 21:case"end":return e.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function ar(e){return void 0!==e&&2===e.registrationStatus}function or(e){return 2===e.requestStatus&&!function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+sn}(e)}function sr(e){var t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function ur(){return(ur=
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
e(c)(e(h).mark((function t(n){var r,i,a,o;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n,e.next=3,Wn(r);case 3:return i=e.sent,a=i.installationEntry,(o=i.registrationPromise)?o.catch(console.error):$n(r).catch(console.error),e.abrupt("return",a.fid);case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function cr(){return cr=
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
e(c)(e(h).mark((function t(n){var r,i,a,o=arguments;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]&&o[1],i=n,e.next=4,lr(i);case 4:return e.next=6,$n(i,r);case 6:return a=e.sent,e.abrupt("return",a.token);case 8:case"end":return e.stop()}}),t)}))),cr.apply(this,arguments)}function lr(e){return fr.apply(this,arguments)}function fr(){return(fr=e(c)(e(h).mark((function t(n){var r;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Wn(n);case 2:if(!(r=e.sent.registrationPromise)){e.next=6;break}return e.next=6,r;case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function hr(e){return cn.create("missing-app-config-values",{valueName:e})}
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
 */var dr="installations",pr=function(e){var t=Pt(e.getProvider("app").getImmediate(),dr).getImmediate(),n={getId:function(){return function(e){return ur.apply(this,arguments)}(t)},getToken:function(e){return function(e){return cr.apply(this,arguments)}(t,e)}};return n};At(new Ue(dr,(function(e){var t=e.getProvider("app").getImmediate(),n=
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
function(e){if(!e||!e.options)throw hr("App Configuration");if(!e.name)throw hr("App Name");var t=!0,n=!1,r=void 0;try{for(var i,a=["projectId","apiKey","appId"][Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(!e.options[o])throw hr(o)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:Pt(t,"heartbeat"),_delete:function(){return Promise.resolve()}}}),"PUBLIC")),At(new Ue("installations-internal",pr,"PRIVATE")),jt(tn,nn),jt(tn,nn,"esm2017");
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
var vr,mr="analytics",yr=6e4,gr="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",kr="https://www.googletagmanager.com/gtag/js",br=new Ze("@firebase/analytics");
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
function xr(e){return Promise.all(e.map((function(e){return e.catch((function(e){return e}))})))}function _r(e,t){var n=document.createElement("script");n.src="".concat(kr,"?l=").concat(e,"&id=").concat(t),n.async=!0,document.head.appendChild(n)}function wr(e,t,n,r,i,a){return Ir.apply(this,arguments)}function Ir(){return(Ir=e(c)(e(h).mark((function t(n,r,i,a,o,s){var u,c,l;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=a[o],e.prev=1,!u){e.next=7;break}return e.next=5,r[u];case 5:e.next=14;break;case 7:return e.next=9,xr(i);case 9:if(c=e.sent,!(l=c.find((function(e){return e.measurementId===o})))){e.next=14;break}return e.next=14,r[l.appId];case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),br.error(e.t0);case 19:n("config",o,s);case 20:case"end":return e.stop()}}),t,null,[[1,16]])})))).apply(this,arguments)}function Cr(e,t,n,r,i){return Tr.apply(this,arguments)}function Tr(){return(Tr=e(c)(e(h).mark((function t(n,r,i,a,o){var s,u,c,l,f,d,p,v,m,y,g;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,s=[],!o||!o.send_to){e.next=38;break}return u=o.send_to,Array.isArray(u)||(u=[u]),e.next=7,xr(i);case 7:c=e.sent,l=!0,f=!1,d=void 0,e.prev=9,p=u[Symbol.iterator]();case 11:if(l=(v=p.next()).done){e.next=24;break}if(m=v.value,y=c.find((function(e){return e.measurementId===m})),!(g=y&&r[y.appId])){e.next=19;break}s.push(g),e.next=21;break;case 19:return s=[],e.abrupt("break",24);case 21:l=!0,e.next=11;break;case 24:e.next=30;break;case 26:e.prev=26,e.t0=e.catch(9),f=!0,d=e.t0;case 30:e.prev=30,e.prev=31,l||null==p.return||p.return();case 33:if(e.prev=33,!f){e.next=36;break}throw d;case 36:return e.finish(33);case 37:return e.finish(30);case 38:return 0===s.length&&(s=Object.values(r)),e.next=41,Promise.all(s);case 41:n("event",a,o||{}),e.next=47;break;case 44:e.prev=44,e.t1=e.catch(0),br.error(e.t1);case 47:case"end":return e.stop()}}),t,null,[[0,44],[9,26,30,38],[31,,33,37]])})))).apply(this,arguments)}function Nr(t,n,r,i,a){var o=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];window[i].push(arguments)};return window[a]&&"function"==typeof window[a]&&(o=window[a]),window[a]=function(t,n,r,i){function a(){return(a=e(c)(e(h).mark((function a(o,s,u){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"event"!==o){e.next=6;break}return e.next=4,Cr(t,n,r,s,u);case 4:e.next=12;break;case 6:if("config"!==o){e.next=11;break}return e.next=9,wr(t,n,r,i,s,u);case 9:e.next=12;break;case 11:"consent"===o?t("consent","update",u):t("set",s);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),br.error(e.t0);case 17:case"end":return e.stop()}}),a,null,[[0,14]])})))).apply(this,arguments)}return function(e,t,n){return a.apply(this,arguments)}}(o,t,n,r),{gtagCore:o,wrappedGtag:window[a]}}function Sr(e){var t=window.document.getElementsByTagName("script"),n=!0,r=!1,i=void 0;try{for(var a,o=Object.values(t)[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s.src&&s.src.includes(kr)&&s.src.includes(e))return s}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return null}
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
var Er=(vr={},e(d)(vr,"already-exists","A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId."),e(d)(vr,"already-initialized","initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance."),e(d)(vr,"already-initialized-settings","Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect."),e(d)(vr,"interop-component-reg-failed","Firebase Analytics Interop Component failed to instantiate: {$reason}"),e(d)(vr,"invalid-analytics-context","Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),e(d)(vr,"indexeddb-unavailable","IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),e(d)(vr,"fetch-throttle","The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}."),e(d)(vr,"config-fetch-failed","Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}"),e(d)(vr,"no-api-key",'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.'),e(d)(vr,"no-app-id",'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'),vr),Rr=new me("analytics","Analytics",Er),Ar=function(){"use strict";function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;e(l)(this,t),this.throttleMetadata=n,this.intervalMillis=r}return e(f)(t,[{key:"getThrottleMetadata",value:function(e){return this.throttleMetadata[e]}},{key:"setThrottleMetadata",value:function(e,t){this.throttleMetadata[e]=t}},{key:"deleteThrottleMetadata",value:function(e){delete this.throttleMetadata[e]}}]),t}(),Pr=new Ar;function Or(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}function Lr(e){return Dr.apply(this,arguments)}function Dr(){return(Dr=e(c)(e(h).mark((function t(n){var r,i,a,o,s,u,c,l;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.appId,a=n.apiKey,o={method:"GET",headers:Or(a)},s=gr.replace("{app-id}",i),e.next=6,fetch(s,o);case 6:if(200===(u=e.sent).status||304===u.status){e.next=19;break}return c="",e.prev=9,e.next=12,u.json();case 12:l=e.sent,(null===(r=l.error)||void 0===r?void 0:r.message)&&(c=l.error.message),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(9);case 18:throw Rr.create("config-fetch-failed",{httpStatus:u.status,responseMessage:c});case 19:return e.abrupt("return",u.json());case 20:case"end":return e.stop()}}),t,null,[[9,16]])})))).apply(this,arguments)}function Mr(e){return Fr.apply(this,arguments)}function Fr(){return Fr=e(c)(e(h).mark((function t(n){var r,i,a,o,s,u,l,f,d=arguments;return e(h).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=d.length>1&&void 0!==d[1]?d[1]:Pr,i=d.length>2?d[2]:void 0,a=n.options,o=a.appId,s=a.apiKey,u=a.measurementId,o){t.next=4;break}throw Rr.create("no-app-id");case 4:if(s){t.next=8;break}if(!u){t.next=7;break}return t.abrupt("return",{measurementId:u,appId:o});case 7:throw Rr.create("no-api-key");case 8:return l=r.getThrottleMetadata(o)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new Hr,setTimeout(e(c)(e(h).mark((function t(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.abort();case 1:case"end":return e.stop()}}),t)}))),void 0!==i?i:yr),t.abrupt("return",zr({appId:o,apiKey:s,measurementId:u},l,f,r));case 12:case"end":return t.stop()}}),t)}))),Fr.apply(this,arguments)}function zr(e,t,n){return jr.apply(this,arguments)}function jr(){return jr=e(c)(e(h).mark((function t(n,r,i){var a,o,s,u,c,l,f,d,p,v,m,y=arguments;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.throttleEndTimeMillis,o=r.backoffCount,s=y.length>3&&void 0!==y[3]?y[3]:Pr,l=n.appId,f=n.measurementId,e.prev=3,e.next=6,Wr(i,a);case 6:e.next=14;break;case 8:if(e.prev=8,e.t0=e.catch(3),!f){e.next=13;break}return br.warn("Timed out fetching this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(f)+' provided in the "measurementId" field in the local Firebase config. ['.concat(null===(u=e.t0)||void 0===u?void 0:u.message,"]")),e.abrupt("return",{appId:l,measurementId:f});case 13:throw e.t0;case 14:return e.prev=14,e.next=17,Lr(n);case 17:return d=e.sent,s.deleteThrottleMetadata(l),e.abrupt("return",d);case 22:if(e.prev=22,e.t1=e.catch(14),Ur(p=e.t1)){e.next=33;break}if(s.deleteThrottleMetadata(l),!f){e.next=32;break}return br.warn("Failed to fetch this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(f)+' provided in the "measurementId" field in the local Firebase config. ['.concat(null==p?void 0:p.message,"]")),e.abrupt("return",{appId:l,measurementId:f});case 32:throw e.t1;case 33:return v=503===Number(null===(c=null==p?void 0:p.customData)||void 0===c?void 0:c.httpStatus)?je(o,s.intervalMillis,30):je(o,s.intervalMillis),m={throttleEndTimeMillis:Date.now()+v,backoffCount:o+1},s.setThrottleMetadata(l,m),br.debug("Calling attemptFetch again in ".concat(v," millis")),e.abrupt("return",zr(n,m,i,s));case 38:case"end":return e.stop()}}),t,null,[[3,8],[14,22]])}))),jr.apply(this,arguments)}function Wr(e,t){return new Promise((function(n,r){var i=Math.max(t-Date.now(),0),a=setTimeout(n,i);e.addEventListener((function(){clearTimeout(a),r(Rr.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}function Ur(e){if(!(e instanceof ve&&e.customData))return!1;var t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}var Br,qr,Hr=function(){"use strict";function t(){e(l)(this,t),this.listeners=[]}return e(f)(t,[{key:"addEventListener",value:function(e){this.listeners.push(e)}},{key:"abort",value:function(){this.listeners.forEach((function(e){return e()}))}}]),t}();
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
 */function Vr(){return(Vr=e(c)(e(h).mark((function t(n,r,i,a,o){var s,u;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o||!o.global){e.next=5;break}return n("event",i,a),e.abrupt("return");case 5:return e.next=7,r;case 7:s=e.sent,u=Object.assign(Object.assign({},a),{send_to:s}),n("event",i,u);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Xr(e){qr=e}function Kr(e){Br=e}function Gr(){return Yr.apply(this,arguments)}function Yr(){return(Yr=
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
e(c)(e(h).mark((function t(){var n;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ie()){e.next=6;break}return br.warn(Rr.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),e.abrupt("return",!1);case 6:return e.prev=6,e.next=9,ae();case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(6),br.warn(Rr.create("indexeddb-unavailable",{errorInfo:null===(n=e.t0)||void 0===n?void 0:n.toString()}).message),e.abrupt("return",!1);case 15:return e.abrupt("return",!0);case 16:case"end":return e.stop()}}),t,null,[[6,11]])})))).apply(this,arguments)}function Jr(){return Jr=e(c)(e(h).mark((function t(n,r,i,a,o,s,u){var c,l,f,d,p,m,y;return e(h).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(l=Mr(n)).then((function(e){i[e.measurementId]=e.appId,n.options.measurementId&&e.measurementId!==n.options.measurementId&&br.warn("The measurement ID in the local Firebase config (".concat(n.options.measurementId,")")+" does not match the measurement ID fetched from the server (".concat(e.measurementId,").")+" To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.")})).catch((function(e){return br.error(e)})),r.push(l),f=Gr().then((function(e){return e?a.getId():void 0})),t.t0=e(v),t.next=8,Promise.all([l,f]);case 8:return t.t1=t.sent,d=(0,t.t0)(t.t1,2),p=d[0],m=d[1],Sr(s)||_r(s,p.measurementId),qr&&(o("consent","default",qr),Xr(void 0)),o("js",new Date),(y=null!==(c=null==u?void 0:u.config)&&void 0!==c?c:{}).origin="firebase",y.update=!0,null!=m&&(y.firebase_id=m),o("config",p.measurementId,y),Br&&(o("set",Br),Kr(void 0)),t.abrupt("return",p.measurementId);case 22:case"end":return t.stop()}}),t)}))),Jr.apply(this,arguments)}
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
 */var Qr,$r,Zr=function(){"use strict";function t(n){e(l)(this,t),this.app=n}return e(f)(t,[{key:"_delete",value:function(){return delete ei[this.app.options.appId],Promise.resolve()}}]),t}(),ei={},ti=[],ni={},ri="dataLayer",ii="gtag",ai=!1;function oi(e,t,n){!function(){var e=[];if(te()&&e.push("This is a browser extension environment."),oe()||e.push("Cookies are not available."),e.length>0){var t=e.map((function(e,t){return"(".concat(t+1,") ").concat(e)})).join(" "),n=Rr.create("invalid-analytics-context",{errorInfo:t});br.warn(n.message)}}();var r,i,a=e.options.appId;if(!a)throw Rr.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw Rr.create("no-api-key");br.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest'+" measurement ID for this Firebase app. Falling back to the measurement ID ".concat(e.options.measurementId)+' provided in the "measurementId" field in the local Firebase config.')}if(null!=ei[a])throw Rr.create("already-exists",{id:a});if(!ai){r=ri,i=[],Array.isArray(window[r])?i=window[r]:window[r]=i;var o=Nr(ei,ti,ni,ri,ii),s=o.wrappedGtag,u=o.gtagCore;$r=s,Qr=u,ai=!0}return ei[a]=function(e,t,n,r,i,a,o){return Jr.apply(this,arguments)}(e,ti,ni,t,Qr,ri,n),new Zr(e)}function si(e,t,n,r){e=We(e),function(e,t,n,r,i){return Vr.apply(this,arguments)}($r,ei[e.app.options.appId],t,n,r).catch((function(e){return br.error(e)}))}var ui="@firebase/analytics",ci="0.8.4";At(new Ue(mr,(function(e,t){var n=t.options;return oi(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),n)}),"PUBLIC")),At(new Ue("analytics-internal",(function(e){try{var t=e.getProvider(mr).getImmediate();return{logEvent:function(e,n,r){return si(t,e,n,r)}}}catch(e){throw Rr.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),jt(ui,ci),jt(ui,ci,"esm2017");m=i("ds8z5"),c=i("bpxeT"),l=i("8MBJY"),f=i("a2hTj"),y=i("eYQtU"),v=i("1t1Wn"),p=i("8nrFW");var li=i("l5bVx"),fi=(S=i("2MbLg"),h=i("2TvXO"),"@firebase/database"),hi="0.13.10",di="";
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
var pi,vi=function(){"use strict";function t(n){e(l)(this,t),this.domStorage_=n,this.prefix_="firebase:"}return e(f)(t,[{key:"set",value:function(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),be(t))}},{key:"get",value:function(e){var t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:ke(t)}},{key:"remove",value:function(e){this.domStorage_.removeItem(this.prefixedName_(e))}},{key:"prefixedName_",value:function(e){return this.prefix_+e}},{key:"toString",value:function(){return this.domStorage_.toString()}}]),t}(),mi=function(){"use strict";function t(){e(l)(this,t),this.cache_={},this.isInMemoryStorage=!0}return e(f)(t,[{key:"set",value:function(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}},{key:"get",value:function(e){return we(this.cache_,e)?this.cache_[e]:null}},{key:"remove",value:function(e){delete this.cache_[e]}}]),t}(),yi=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){var t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new vi(t)}}catch(e){}return new mi},gi=yi("localStorage"),ki=yi("sessionStorage"),bi=new Ze("@firebase/database"),xi=(pi=1,function(){return pi++}),_i=function(e){var t=Me(e),n=new Pe;n.update(t);var r=n.digest();return K.encodeByteArray(r)},wi=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r="",i=0;i<t.length;i++){var a=t[i];Array.isArray(a)||a&&"object"==typeof a&&"number"==typeof a.length?r+=wi.apply(null,a):r+="object"==typeof a?be(a):a,r+=" "}return r},Ii=null,Ci=!0,Ti=function(e,t){H(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(bi.logLevel=He.VERBOSE,Ii=bi.log.bind(bi),t&&ki.set("logging_enabled",!0)):"function"==typeof e?Ii=e:(Ii=null,ki.remove("logging_enabled"))},Ni=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(!0===Ci&&(Ci=!1,null===Ii&&!0===ki.get("logging_enabled")&&Ti(!0)),Ii){var r=wi.apply(null,t);Ii(r)}},Si=function(t){return function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];Ni.apply(void 0,[t].concat(e(p)(r)))}},Ei=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i="FIREBASE INTERNAL ERROR: "+wi.apply(void 0,e(p)(n));bi.error(i)},Ri=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i="FIREBASE FATAL ERROR: ".concat(wi.apply(void 0,e(p)(n)));throw bi.error(i),new Error(i)},Ai=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i="FIREBASE WARNING: "+wi.apply(void 0,e(p)(n));bi.warn(i)},Pi=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Oi="[MIN_NAME]",Li="[MAX_NAME]",Di=function(e,t){if(e===t)return 0;if(e===Oi||t===Li)return-1;if(t===Oi||e===Li)return 1;var n=Vi(e),r=Vi(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1},Mi=function(e,t){return e===t?0:e<t?-1:1},Fi=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+be(t))},zi=function(e){if("object"!=typeof e||null===e)return be(e);var t=[];for(var n in e)t.push(n);t.sort();for(var r="{",i=0;i<t.length;i++)0!==i&&(r+=","),r+=be(t[i]),r+=":",r+=zi(e[t[i]]);return r+="}"},ji=function(e,t){var n=e.length;if(n<=t)return[e];for(var r=[],i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};
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
 */function Wi(e,t){for(var n in e)e.hasOwnProperty(n)&&t(n,e[n])}var Ui=function(e){H(!Pi(e),"Invalid JSON number");var t,n,r,i,a,o=1023;0===e?(n=0,r=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(n=(i=Math.min(Math.floor(Math.log(e)/Math.LN2),o))+o,r=Math.round(e*Math.pow(2,52-i)-Math.pow(2,52))):(n=0,r=Math.round(e/Math.pow(2,-1074))));var s=[];for(a=52;a;a-=1)s.push(r%2?1:0),r=Math.floor(r/2);for(a=11;a;a-=1)s.push(n%2?1:0),n=Math.floor(n/2);s.push(t?1:0),s.reverse();var u=s.join(""),c="";for(a=0;a<64;a+=8){var l=parseInt(u.substr(a,8),2).toString(16);1===l.length&&(l="0"+l),c+=l}return c.toLowerCase()};var Bi=new RegExp("^-?(0*)\\d{1,10}$"),qi=-2147483648,Hi=2147483647,Vi=function(e){if(Bi.test(e)){var t=Number(e);if(t>=qi&&t<=Hi)return t}return null},Xi=function(e){try{e()}catch(e){setTimeout((function(){var t=e.stack||"";throw Ai("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Ki=function(e,t){var n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n},Gi=function(){"use strict";function t(n,r){var i=this;e(l)(this,t),this.appName_=n,this.appCheckProvider=r,this.appCheck=null==r?void 0:r.getImmediate({optional:!0}),this.appCheck||null==r||r.get().then((function(e){return i.appCheck=e}))}return e(f)(t,[{key:"getToken",value:function(e){var t=this;return this.appCheck?this.appCheck.getToken(e):new Promise((function(n,r){var i=t;setTimeout((function(){i.appCheck?i.getToken(e).then(n,r):n(null)}),0)}))}},{key:"addTokenChangeListener",value:function(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((function(t){return t.addTokenListener(e)}))}},{key:"notifyForInvalidToken",value:function(){Ai('Provided AppCheck credentials for the app named "'.concat(this.appName_,'" ')+"are invalid. This usually indicates your app was not initialized correctly.")}}]),t}(),Yi=function(){"use strict";function t(n,r,i){var a=this;e(l)(this,t),this.appName_=n,this.firebaseOptions_=r,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit((function(e){return a.auth_=e}))}return e(f)(t,[{key:"getToken",value:function(e){var t=this;return this.auth_?this.auth_.getToken(e).catch((function(e){return e&&"auth/token-not-initialized"===e.code?(Ni("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)})):new Promise((function(n,r){var i=t;setTimeout((function(){i.auth_?i.getToken(e).then(n,r):n(null)}),0)}))}},{key:"addTokenChangeListener",value:function(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((function(t){return t.addAuthTokenListener(e)}))}},{key:"removeTokenChangeListener",value:function(e){this.authProvider_.get().then((function(t){return t.removeAuthTokenListener(e)}))}},{key:"notifyForInvalidToken",value:function(){var e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ai(e)}}]),t}(),Ji=function(){"use strict";function t(n){e(l)(this,t),this.accessToken=n}return e(f)(t,[{key:"getToken",value:function(e){return Promise.resolve({accessToken:this.accessToken})}},{key:"addTokenChangeListener",value:function(e){e(this.accessToken)}},{key:"removeTokenChangeListener",value:function(e){}},{key:"notifyForInvalidToken",value:function(){}}]),t}();Ji.OWNER="owner";
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
var Qi="5",$i=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Zi="websocket",ea="long_polling",ta=function(){"use strict";function t(n,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",u=arguments.length>6&&void 0!==arguments[6]&&arguments[6];e(l)(this,t),this.secure=r,this.namespace=i,this.webSocketOnly=a,this.nodeAdmin=o,this.persistenceKey=s,this.includeNamespaceInQueryParams=u,this._host=n.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=gi.get("host:"+n)||this._host}return e(f)(t,[{key:"isCacheableHost",value:function(){return"s-"===this.internalHost.substr(0,2)}},{key:"isCustomHost",value:function(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}},{key:"host",get:function(){return this._host},set:function(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&gi.set("host:"+this._host,this.internalHost))}},{key:"toString",value:function(){var e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}},{key:"toURLString",value:function(){var e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns=".concat(this.namespace):"";return"".concat(e).concat(this.host,"/").concat(t)}}]),t}();function na(e,t,n){var r;if(H("string"==typeof t,"typeof type must == string"),H("object"==typeof n,"typeof params must == object"),t===Zi)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==ea)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);var i=[];return Wi(n,(function(e,t){i.push(e+"="+t)})),r+i.join("&")}
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
 */var ra=function(){"use strict";function t(){e(l)(this,t),this.counters_={}}return e(f)(t,[{key:"incrementCounter",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;we(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}},{key:"get",value:function(){return Q(this.counters_)}}]),t}(),ia={},aa={};
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
 */function oa(e){var t=e.toString();return ia[t]||(ia[t]=new ra),ia[t]}
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
var sa=function(){"use strict";function t(n){e(l)(this,t),this.onMessage_=n,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}return e(f)(t,[{key:"closeAfter",value:function(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}},{key:"handleResponse",value:function(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){var n=function(e){i[e]&&Xi((function(){r.onMessage_(i[e])}))},r=this,i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(var a=0;a<i.length;++a)n(a);if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}]),t}(),ua="start",ca="close",la=function(){"use strict";function t(n,r,i,a,o,s,u){var c=this;e(l)(this,t),this.connId=n,this.repoInfo=r,this.applicationId=i,this.appCheckToken=a,this.authToken=o,this.transportSessionId=s,this.lastSessionId=u,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Si(n),this.stats_=oa(r),this.urlFn=function(e){return c.appCheckToken&&(e.ac=c.appCheckToken),na(r,ea,e)}}return e(f)(t,[{key:"open",value:function(t,n){var r=this;this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new sa(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((function(){r.log_("Timed out trying to connect."),r.onClosed_(),r.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(re()||"complete"===document.readyState)e();else{var t=!1,n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((function(){var t=r;if(!r.isClosed_){r.scriptTagHolder=new fa((function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var a=e(v)(r,5),o=a[0],s=a[1],u=a[2];a[3],a[4];if(t.incrementIncomingBytes_(r),t.scriptTagHolder)if(t.connectTimeoutTimer_&&(clearTimeout(t.connectTimeoutTimer_),t.connectTimeoutTimer_=null),t.everConnected_=!0,o===ua)t.id=s,t.password=u;else{if(o!==ca)throw new Error("Unrecognized command received: "+o);if(s){var c=t;t.scriptTagHolder.sendNewPolls=!1,t.myPacketOrderer.closeAfter(s,(function(){c.onClosed_()}))}else t.onClosed_()}}),(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var a=e(v)(r,2),o=a[0],s=a[1];t.incrementIncomingBytes_(r),t.myPacketOrderer.handleResponse(o,s)}),(function(){t.onClosed_()}),r.urlFn);var n={start:"t"};n.ser=Math.floor(1e8*Math.random()),r.scriptTagHolder.uniqueCallbackIdentifier&&(n.cb=r.scriptTagHolder.uniqueCallbackIdentifier),n.v=Qi,r.transportSessionId&&(n.s=r.transportSessionId),r.lastSessionId&&(n.ls=r.lastSessionId),r.applicationId&&(n.p=r.applicationId),r.appCheckToken&&(n.ac=r.appCheckToken),"undefined"!=typeof location&&location.hostname&&$i.test(location.hostname)&&(n.r="f");var i=r.urlFn(n);r.log_("Connecting via long-poll to "+i),r.scriptTagHolder.addTag(i,(function(){}))}}))}},{key:"start",value:function(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}},{key:"markConnectionHealthy",value:function(){}},{key:"shutdown_",value:function(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}},{key:"onClosed_",value:function(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}},{key:"close",value:function(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}},{key:"send",value:function(e){var t=be(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);for(var n=G(t),r=ji(n,1840),i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}},{key:"addDisconnectPingFrame",value:function(e,t){if(!re()){this.myDisconnFrame=document.createElement("iframe");var n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}}},{key:"incrementIncomingBytes_",value:function(e){var t=be(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}],[{key:"forceAllow",value:function(){t.forceAllow_=!0}},{key:"forceDisallow",value:function(){t.forceDisallow_=!0}},{key:"isAvailable",value:function(){return!re()&&(!!t.forceAllow_||!(t.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}}]),t}(),fa=function(){"use strict";function t(n,r,i,a){if(e(l)(this,t),this.onDisconnect=i,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,re())this.commandCB=n,this.onMessageCB=r;else{this.uniqueCallbackIdentifier=xi(),window["pLPCommand"+this.uniqueCallbackIdentifier]=n,window["pRTLPCB"+this.uniqueCallbackIdentifier]=r,this.myIFrame=t.createIFrame_();var o="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11))o='<script>document.domain="'+document.domain+'";<\/script>';var s="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(s),this.myIFrame.doc.close()}catch(e){Ni("frame writing exception"),e.stack&&Ni(e.stack),Ni(e)}}}return e(f)(t,[{key:"close",value:function(){if(this.alive=!1,this.myIFrame){var e=this;this.myIFrame.doc.body.innerHTML="",setTimeout((function(){null!==e.myIFrame&&(document.body.removeChild(e.myIFrame),e.myIFrame=null)}),Math.floor(0))}var t=this.onDisconnect;t&&(this.onDisconnect=null,t())}},{key:"startLongPoll",value:function(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}},{key:"newRequest_",value:function(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;var e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;for(var t=this.urlFn(e),n="",r=0;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;var i=this.pendingSegs.shift();n=n+"&seg"+r+"="+i.seg+"&ts"+r+"="+i.ts+"&d"+r+"="+i.d,r++}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}},{key:"enqueueSegment",value:function(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}},{key:"addLongPollTag_",value:function(e,t){var n=this;this.outstandingRequests.add(t);var r=function(){n.outstandingRequests.delete(t),n.newRequest_()},i=setTimeout(r,Math.floor(25e3));this.addTag(e,(function(){clearTimeout(i),r()}))}},{key:"addTag",value:function(e,t){var n=this;re()?this.doNodeLongPoll(e,t):setTimeout((function(){try{var r=n;if(!n.sendNewPolls)return;var i=n.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){var e=i.readyState;e&&"loaded"!==e&&"complete"!==e||(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=function(){Ni("Long-poll script failed to load: "+e),r.sendNewPolls=!1,r.close()},n.myIFrame.doc.body.appendChild(i)}catch(e){}}),Math.floor(1))}}],[{key:"createIFrame_",value:function(){var e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||Ni("No IE domain setting required")}catch(n){var t=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+t+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}}]),t}(),ha=null;
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
 */"undefined"!=typeof MozWebSocket?ha=MozWebSocket:"undefined"!=typeof WebSocket&&(ha=WebSocket);var da=function(){"use strict";function t(n,r,i,a,o,s,u){e(l)(this,t),this.connId=n,this.applicationId=i,this.appCheckToken=a,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Si(this.connId),this.stats_=oa(r),this.connURL=t.connectionURL_(r,s,u,a,i),this.nodeAdmin=r.nodeAdmin}return e(f)(t,[{key:"open",value:function(e,t){var n=this;this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,gi.set("previous_websocket_failure",!0);try{var r;if(re()){var i=this.nodeAdmin?"AdminNode":"Node";r={headers:{"User-Agent":"Firebase/".concat(Qi,"/").concat(di,"/").concat(C.platform,"/").concat(i),"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(r.headers.Authorization="Bearer ".concat(this.authToken)),this.appCheckToken&&(r.headers["X-Firebase-AppCheck"]=this.appCheckToken);var a={},o=0===this.connURL.indexOf("wss://")?a.HTTPS_PROXY||a.https_proxy:a.HTTP_PROXY||a.http_proxy;o&&(r.proxy={origin:o})}this.mySock=new ha(this.connURL,[],r)}catch(e){this.log_("Error instantiating WebSocket.");var s=e.message||e.data;return s&&this.log_(s),void this.onClosed_()}this.mySock.onopen=function(){n.log_("Websocket connected."),n.everConnected_=!0},this.mySock.onclose=function(){n.log_("Websocket connection was disconnected."),n.mySock=null,n.onClosed_()},this.mySock.onmessage=function(e){n.handleIncomingFrame(e)},this.mySock.onerror=function(e){n.log_("WebSocket error.  Closing connection.");var t=e.message||e.data;t&&n.log_(t),n.onClosed_()}}},{key:"start",value:function(){}},{key:"markConnectionHealthy",value:function(){gi.remove("previous_websocket_failure")}},{key:"appendFrame_",value:function(e){if(this.frames.push(e),this.frames.length===this.totalFrames){var t=this.frames.join("");this.frames=null;var n=ke(t);this.onMessage(n)}}},{key:"handleNewFrameCount_",value:function(e){this.totalFrames=e,this.frames=[]}},{key:"extractFrameCount_",value:function(e){if(H(null===this.frames,"We already have a frame buffer"),e.length<=6){var t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}},{key:"handleIncomingFrame",value:function(e){if(null!==this.mySock){var t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{var n=this.extractFrameCount_(t);null!==n&&this.appendFrame_(n)}}}},{key:"send",value:function(e){this.resetKeepAlive();var t=be(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);var n=ji(t,16384);n.length>1&&this.sendString_(String(n.length));for(var r=0;r<n.length;r++)this.sendString_(n[r])}},{key:"shutdown_",value:function(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}},{key:"onClosed_",value:function(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}},{key:"close",value:function(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}},{key:"resetKeepAlive",value:function(){var e=this;clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((function(){e.mySock&&e.sendString_("0"),e.resetKeepAlive()}),Math.floor(45e3))}},{key:"sendString_",value:function(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}],[{key:"connectionURL_",value:function(e,t,n,r,i){var a={};return a.v=Qi,!re()&&"undefined"!=typeof location&&location.hostname&&$i.test(location.hostname)&&(a.r="f"),t&&(a.s=t),n&&(a.ls=n),r&&(a.ac=r),i&&(a.p=i),na(e,Zi,a)}},{key:"forceDisallow",value:function(){t.forceDisallow_=!0}},{key:"isAvailable",value:function(){var e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){var n=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==ha&&!t.forceDisallow_}},{key:"previouslyFailed",value:function(){return gi.isInMemoryStorage||!0===gi.get("previous_websocket_failure")}}]),t}();da.responsesRequiredToBeHealthy=2,da.healthyTimeout=3e4;
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
var pa=function(){"use strict";function t(n){e(l)(this,t),this.initTransports_(n)}return e(f)(t,[{key:"initTransports_",value:function(e){var n=da&&da.isAvailable(),r=n&&!da.previouslyFailed();if(e.webSocketOnly&&(n||Ai("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[da];else{var i=this.transports_=[],a=!0,o=!1,s=void 0;try{for(var u,c=t.ALL_TRANSPORTS[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;l&&l.isAvailable()&&i.push(l)}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}t.globalTransportInitialized_=!0}}},{key:"initialTransport",value:function(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}},{key:"upgradeTransport",value:function(){return this.transports_.length>1?this.transports_[1]:null}}],[{key:"ALL_TRANSPORTS",get:function(){return[la,da]}},{key:"IS_TRANSPORT_INITIALIZED",get:function(){return this.globalTransportInitialized_}}]),t}();pa.globalTransportInitialized_=!1;
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
var va=function(){"use strict";function t(n,r,i,a,o,s,u,c,f,h){e(l)(this,t),this.id=n,this.repoInfo_=r,this.applicationId_=i,this.appCheckToken_=a,this.authToken_=o,this.onMessage_=s,this.onReady_=u,this.onDisconnect_=c,this.onKill_=f,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Si("c:"+this.id+":"),this.transportManager_=new pa(r),this.log_("Connection created"),this.start_()}return e(f)(t,[{key:"start_",value:function(){var e=this,t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((function(){e.conn_&&e.conn_.open(n,r)}),Math.floor(0));var i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ki((function(){e.healthyTimeout_=null,e.isHealthy_||(e.conn_&&e.conn_.bytesReceived>102400?(e.log_("Connection exceeded healthy timeout but has received "+e.conn_.bytesReceived+" bytes.  Marking connection healthy."),e.isHealthy_=!0,e.conn_.markConnectionHealthy()):e.conn_&&e.conn_.bytesSent>10240?e.log_("Connection exceeded healthy timeout but has sent "+e.conn_.bytesSent+" bytes.  Leaving connection alive."):(e.log_("Closing unhealthy connection after timeout."),e.close()))}),Math.floor(i)))}},{key:"nextTransportId_",value:function(){return"c:"+this.id+":"+this.connectionCount++}},{key:"disconnReceiver_",value:function(e){var t=this;return function(n){e===t.conn_?t.onConnectionLost_(n):e===t.secondaryConn_?(t.log_("Secondary connection lost."),t.onSecondaryConnectionLost_()):t.log_("closing an old connection")}}},{key:"connReceiver_",value:function(e){var t=this;return function(n){2!==t.state_&&(e===t.rx_?t.onPrimaryMessageReceived_(n):e===t.secondaryConn_?t.onSecondaryMessageReceived_(n):t.log_("message on old connection"))}}},{key:"sendRequest",value:function(e){var t={t:"d",d:e};this.sendData_(t)}},{key:"tryCleanupConnection",value:function(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}},{key:"onSecondaryControl_",value:function(e){if("t"in e){var t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}},{key:"onSecondaryMessageReceived_",value:function(e){var t=Fi("t",e),n=Fi("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}},{key:"upgradeIfSecondaryHealthy_",value:function(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}},{key:"proceedWithUpgrade_",value:function(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}},{key:"onPrimaryMessageReceived_",value:function(e){var t=Fi("t",e),n=Fi("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}},{key:"onDataMessage_",value:function(e){this.onPrimaryResponse_(),this.onMessage_(e)}},{key:"onPrimaryResponse_",value:function(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}},{key:"onControl_",value:function(e){var t=Fi("t",e);if("d"in e){var n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(var r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?Ei("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ei("Unknown control packet command: "+t)}}},{key:"onHandshake_",value:function(e){var t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Qi!==n&&Ai("Protocol version mismatch detected"),this.tryStartUpgrade_())}},{key:"tryStartUpgrade_",value:function(){var e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}},{key:"startUpgrade_",value:function(e){var t=this;this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ki((function(){t.secondaryConn_&&(t.log_("Timed out trying to upgrade."),t.secondaryConn_.close())}),Math.floor(6e4))}},{key:"onReset_",value:function(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}},{key:"onConnectionEstablished_",value:function(e,t){var n=this;this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ki((function(){n.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}},{key:"sendPingOnPrimaryIfNecessary_",value:function(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}},{key:"onSecondaryConnectionLost_",value:function(){var e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}},{key:"onConnectionLost_",value:function(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(gi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}},{key:"onConnectionShutdown_",value:function(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}},{key:"sendData_",value:function(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}},{key:"close",value:function(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}},{key:"closeConnections_",value:function(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}]),t}(),ma=function(){"use strict";function t(){e(l)(this,t)}return e(f)(t,[{key:"put",value:function(e,t,n,r){}},{key:"merge",value:function(e,t,n,r){}},{key:"refreshAuthToken",value:function(e){}},{key:"refreshAppCheckToken",value:function(e){}},{key:"onDisconnectPut",value:function(e,t,n){}},{key:"onDisconnectMerge",value:function(e,t,n){}},{key:"onDisconnectCancel",value:function(e,t){}},{key:"reportStats",value:function(e){}}]),t}(),ya=function(){"use strict";function t(n){e(l)(this,t),this.allowedEvents_=n,this.listeners_={},H(Array.isArray(n)&&n.length>0,"Requires a non-empty array")}return e(f)(t,[{key:"trigger",value:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(Array.isArray(this.listeners_[t]))for(var a=e(p)(this.listeners_[t]),o=0;o<a.length;o++)a[o].callback.apply(a[o].context,r)}},{key:"on",value:function(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});var r=this.getInitialEvent(e);r&&t.apply(n,r)}},{key:"off",value:function(e,t,n){this.validateEventType_(e);for(var r=this.listeners_[e]||[],i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}},{key:"validateEventType_",value:function(e){H(this.allowedEvents_.find((function(t){return t===e})),"Unknown event: "+e)}}]),t}(),ga=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(){var t;return e(l)(this,r),(t=n.call(this,["online"])).online_=!0,"undefined"==typeof window||void 0===window.addEventListener||ee()||(window.addEventListener("online",(function(){t.online_||(t.online_=!0,t.trigger("online",!0))}),!1),window.addEventListener("offline",(function(){t.online_&&(t.online_=!1,t.trigger("online",!1))}),!1)),t}return e(f)(r,[{key:"getInitialEvent",value:function(e){return H("online"===e,"Unknown event type: "+e),[this.online_]}},{key:"currentlyOnline",value:function(){return this.online_}}],[{key:"getInstance",value:function(){return new r}}]),r}(ya),ka=function(){"use strict";function t(n,r){if(e(l)(this,t),void 0===r){this.pieces_=n.split("/");for(var i=0,a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[i]=this.pieces_[a],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=n,this.pieceNum_=r}return e(f)(t,[{key:"toString",value:function(){for(var e="",t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}]),t}();function ba(){return new ka("")}function xa(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function _a(e){return e.pieces_.length-e.pieceNum_}function wa(e){var t=e.pieceNum_;return t<e.pieces_.length&&t++,new ka(e.pieces_,t)}function Ia(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Ca(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.pieces_.slice(e.pieceNum_+t)}function Ta(e){if(e.pieceNum_>=e.pieces_.length)return null;for(var t=[],n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ka(t,0)}function Na(e,t){for(var n=[],r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof ka)for(var i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else for(var a=t.split("/"),o=0;o<a.length;o++)a[o].length>0&&n.push(a[o]);return new ka(n,0)}function Sa(e){return e.pieceNum_>=e.pieces_.length}function Ea(e,t){var n=xa(e),r=xa(t);if(null===n)return t;if(n===r)return Ea(wa(e),wa(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Ra(e,t){if(_a(e)!==_a(t))return!1;for(var n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function Aa(e,t){var n=e.pieceNum_,r=t.pieceNum_;if(_a(e)>_a(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}var Pa=function t(n,r){"use strict";e(l)(this,t),this.errorPrefix_=r,this.parts_=Ca(n,0),this.byteLength_=Math.max(1,this.parts_.length);for(var i=0;i<this.parts_.length;i++)this.byteLength_+=Fe(this.parts_[i]);Oa(this)};function Oa(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+La(e))}function La(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
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
 */var Da=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(){var t,i,a;return e(l)(this,r),t=n.call(this,["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(a="visibilitychange",i="hidden"):void 0!==document.mozHidden?(a="mozvisibilitychange",i="mozHidden"):void 0!==document.msHidden?(a="msvisibilitychange",i="msHidden"):void 0!==document.webkitHidden&&(a="webkitvisibilitychange",i="webkitHidden")),t.visible_=!0,a&&document.addEventListener(a,(function(){var e=!document[i];e!==t.visible_&&(t.visible_=e,t.trigger("visible",e))}),!1),t}return e(f)(r,[{key:"getInitialEvent",value:function(e){return H("visible"===e,"Unknown event type: "+e),[this.visible_]}}],[{key:"getInstance",value:function(){return new r}}]),r}(ya),Ma=1e3,Fa=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t,i,a,o,s,u,c,f){var h;if(e(l)(this,r),(h=n.call(this)).repoInfo_=t,h.applicationId_=i,h.onDataUpdate_=a,h.onConnectStatus_=o,h.onServerInfoUpdate_=s,h.authTokenProvider_=u,h.appCheckTokenProvider_=c,h.authOverride_=f,h.id=r.nextPersistentConnectionId_++,h.log_=Si("p:"+h.id+":"),h.interruptReasons_={},h.listens=new Map,h.outstandingPuts_=[],h.outstandingGets_=[],h.outstandingPutCount_=0,h.outstandingGetCount_=0,h.onDisconnectRequestQueue_=[],h.connected_=!1,h.reconnectDelay_=Ma,h.maxReconnectDelay_=3e5,h.securityDebugCallback_=null,h.lastSessionId=null,h.establishConnectionTimer_=null,h.visible_=!1,h.requestCBHash_={},h.requestNumber_=0,h.realtime_=null,h.authToken_=null,h.appCheckToken_=null,h.forceTokenRefresh_=!1,h.invalidAuthTokenCount_=0,h.invalidAppCheckTokenCount_=0,h.firstConnection_=!0,h.lastConnectionAttemptTime_=null,h.lastConnectionEstablishedTime_=null,f&&!re())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");return Da.getInstance().on("visible",h.onVisible_,e(m)(h)),-1===t.host.indexOf("fblocal")&&ga.getInstance().on("online",h.onOnline_,e(m)(h)),h}return e(f)(r,[{key:"sendRequest",value:function(e,t,n){var r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(be(i)),H(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}},{key:"get",value:function(e){this.initConnection_();var t=new de,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:function(e){var n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;var r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}},{key:"listen",value:function(e,t,n,r){this.initConnection_();var i=e._queryIdentifier,a=e._path.toString();this.log_("Listen called for "+a+" "+i),this.listens.has(a)||this.listens.set(a,new Map),H(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),H(!this.listens.get(a).has(i),"listen() called twice for same path/queryId.");var o={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(a).set(i,o),this.connected_&&this.sendListen_(o)}},{key:"sendGet_",value:function(e){var t=this,n=this.outstandingGets_[e];this.sendRequest("g",n.request,(function(r){delete t.outstandingGets_[e],t.outstandingGetCount_--,0===t.outstandingGetCount_&&(t.outstandingGets_=[]),n.onComplete&&n.onComplete(r)}))}},{key:"sendListen_",value:function(e){var t=this,n=e.query,i=n._path.toString(),a=n._queryIdentifier;this.log_("Listen on "+i+" for "+a);var o={p:i};e.tag&&(o.q=n._queryObject,o.t=e.tag),o.h=e.hashFn(),this.sendRequest("q",o,(function(o){var s=o.d,u=o.s;r.warnOnListenWarnings_(s,n),(t.listens.get(i)&&t.listens.get(i).get(a))===e&&(t.log_("listen response",o),"ok"!==u&&t.removeListen_(i,a),e.onComplete&&e.onComplete(u,s))}))}},{key:"refreshAuthToken",value:function(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(function(){})),this.reduceReconnectDelayIfAdminCredential_(e)}},{key:"reduceReconnectDelayIfAdminCredential_",value:function(e){var t;(e&&40===e.length||"object"==typeof(t=xe(e).claims)&&!0===t.admin)&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}},{key:"refreshAppCheckToken",value:function(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(function(){}))}},{key:"tryAuth",value:function(){if(this.connected_&&this.authToken_){var e=this,t=this.authToken_,n=_e(t)?"auth":"gauth",r={cred:t};null===this.authOverride_?r.noauth=!0:"object"==typeof this.authOverride_&&(r.authvar=this.authOverride_),this.sendRequest(n,r,(function(n){var r=n.s,i=n.d||"error";e.authToken_===t&&("ok"===r?e.invalidAuthTokenCount_=0:e.onAuthRevoked_(r,i))}))}}},{key:"tryAppCheck",value:function(){var e=this;this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(function(t){var n=t.s,r=t.d||"error";"ok"===n?e.invalidAppCheckTokenCount_=0:e.onAppCheckRevoked_(n,r)}))}},{key:"unlisten",value:function(e,t){var n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),H(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}},{key:"sendUnlisten_",value:function(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);var i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}},{key:"onDisconnectPut",value:function(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}},{key:"onDisconnectMerge",value:function(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}},{key:"onDisconnectCancel",value:function(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}},{key:"sendOnDisconnect_",value:function(e,t,n,r){var i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(function(e){r&&setTimeout((function(){r(e.s,e.d)}),Math.floor(0))}))}},{key:"put",value:function(e,t,n,r){this.putInternal("p",e,t,n,r)}},{key:"merge",value:function(e,t,n,r){this.putInternal("m",e,t,n,r)}},{key:"putInternal",value:function(e,t,n,r,i){this.initConnection_();var a={p:t,d:n};void 0!==i&&(a.h=i),this.outstandingPuts_.push({action:e,request:a,onComplete:r}),this.outstandingPutCount_++;var o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}},{key:"sendPut_",value:function(e){var t=this,n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,(function(r){t.log_(n+" response",r),delete t.outstandingPuts_[e],t.outstandingPutCount_--,0===t.outstandingPutCount_&&(t.outstandingPuts_=[]),i&&i(r.s,r.d)}))}},{key:"reportStats",value:function(e){if(this.connected_){var t=this,n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,(function(e){if("ok"!==e.s){var n=e.d;t.log_("reportStats","Error sending stats: "+n)}}))}}},{key:"onDataMessage_",value:function(e){if("r"in e){this.log_("from server: "+be(e));var t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}},{key:"onDataPush_",value:function(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):Ei("Unrecognized action received from server: "+be(e)+"\nAre you using the latest client?")}},{key:"onReady_",value:function(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}},{key:"scheduleConnect_",value:function(e){var t=this;H(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((function(){t.establishConnectionTimer_=null,t.establishConnection_()}),Math.floor(e))}},{key:"initConnection_",value:function(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}},{key:"onVisible_",value:function(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ma,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}},{key:"onOnline_",value:function(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ma,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}},{key:"onRealtimeDisconnect_",value:function(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=Ma),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();var e=(new Date).getTime()-this.lastConnectionAttemptTime_,t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}},{key:"establishConnection_",value:function(){var t=this;return e(c)(e(h).mark((function n(){var i,a,o,s,u,c,l,f,d,p,m,y,g;return e(h).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.shouldReconnect_()){n.next=31;break}return t.log_("Making a connection attempt"),t.lastConnectionAttemptTime_=(new Date).getTime(),t.lastConnectionEstablishedTime_=null,i=t.onDataMessage_.bind(t),a=t.onReady_.bind(t),o=t.onRealtimeDisconnect_.bind(t),s=t.id+":"+r.nextConnectionId_++,u=t.lastSessionId,c=!1,l=null,f=function(){l?l.close():(c=!0,o())},d=function(e){H(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(e)},t.realtime_={close:f,sendRequest:d},p=t.forceTokenRefresh_,t.forceTokenRefresh_=!1,n.prev=16,n.t0=e(v),n.next=20,Promise.all([t.authTokenProvider_.getToken(p),t.appCheckTokenProvider_.getToken(p)]);case 20:n.t1=n.sent,m=(0,n.t0)(n.t1,2),y=m[0],g=m[1],c?Ni("getToken() completed but was canceled"):(Ni("getToken() completed. Creating connection."),t.authToken_=y&&y.accessToken,t.appCheckToken_=g&&g.token,l=new va(s,t.repoInfo_,t.applicationId_,t.appCheckToken_,t.authToken_,i,a,o,(function(e){Ai(e+" ("+t.repoInfo_.toString()+")"),t.interrupt("server_kill")}),u)),n.next=31;break;case 27:n.prev=27,n.t2=n.catch(16),t.log_("Failed to get token: "+n.t2),c||(t.repoInfo_.nodeAdmin&&Ai(n.t2),f());case 31:case"end":return n.stop()}}),n,null,[[16,27]])})))()}},{key:"interrupt",value:function(e){Ni("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}},{key:"resume",value:function(e){Ni("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ce(this.interruptReasons_)&&(this.reconnectDelay_=Ma,this.realtime_||this.scheduleConnect_(0))}},{key:"handleTimestamp_",value:function(e){var t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}},{key:"cancelSentTransactions_",value:function(){for(var e=0;e<this.outstandingPuts_.length;e++){var t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}},{key:"onListenRevoked_",value:function(e,t){var n;n=t?t.map((function(e){return zi(e)})).join("$"):"default";var r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}},{key:"removeListen_",value:function(e,t){var n,r=new ka(e).toString();if(this.listens.has(r)){var i=this.listens.get(r);n=i.get(t),i.delete(t),0===i.size&&this.listens.delete(r)}else n=void 0;return n}},{key:"onAuthRevoked_",value:function(e,t){Ni("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}},{key:"onAppCheckRevoked_",value:function(e,t){Ni("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}},{key:"onSecurityDebugPacket_",value:function(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}},{key:"restoreState_",value:function(){this.tryAuth(),this.tryAppCheck();var e=!0,t=!1,n=void 0,r=!0,i=!1,a=void 0;try{for(var o,s=this.listens.values()[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{for(var c,l=u.values()[Symbol.iterator]();!(e=(c=l.next()).done);e=!0){var f=c.value;this.sendListen_(f)}}catch(e){t=!0,n=e}finally{try{e||null==l.return||l.return()}finally{if(t)throw n}}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}for(var h=0;h<this.outstandingPuts_.length;h++)this.outstandingPuts_[h]&&this.sendPut_(h);for(;this.onDisconnectRequestQueue_.length;){var d=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(d.action,d.pathString,d.data,d.onComplete)}for(var p=0;p<this.outstandingGets_.length;p++)this.outstandingGets_[p]&&this.sendGet_(p)}},{key:"sendConnectStats_",value:function(){var e={},t="js";re()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+di.replace(/\./g,"-")]=1,ee()?e["framework.cordova"]=1:ne()&&(e["framework.reactnative"]=1),this.reportStats(e)}},{key:"shouldReconnect_",value:function(){var e=ga.getInstance().currentlyOnline();return Ce(this.interruptReasons_)&&e}}],[{key:"warnOnListenWarnings_",value:function(e,t){if(e&&"object"==typeof e&&we(e,"w")){var n=Ie(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){var r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();Ai("Using an unspecified index. Your data will be downloaded and "+"filtered on the client. Consider adding ".concat(r," at ")+"".concat(i," to your security rules for better performance."))}}}}]),r}(ma);
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
 */Fa.nextPersistentConnectionId_=0,Fa.nextConnectionId_=0;
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
var za,ja=function(){"use strict";function t(n,r){e(l)(this,t),this.name=n,this.node=r}return e(f)(t,null,[{key:"Wrap",value:function(e,n){return new t(e,n)}}]),t}(),Wa=function(){"use strict";function t(){e(l)(this,t)}return e(f)(t,[{key:"getCompare",value:function(){return this.compare.bind(this)}},{key:"indexedValueChanged",value:function(e,t){var n=new ja(Oi,e),r=new ja(Oi,t);return 0!==this.compare(n,r)}},{key:"minPost",value:function(){return ja.MIN}}]),t}(),Ua=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(){return e(l)(this,r),n.apply(this,arguments)}return e(f)(r,[{key:"compare",value:function(e,t){return Di(e.name,t.name)}},{key:"isDefinedOn",value:function(e){throw V("KeyIndex.isDefinedOn not expected to be called.")}},{key:"indexedValueChanged",value:function(e,t){return!1}},{key:"minPost",value:function(){return ja.MIN}},{key:"maxPost",value:function(){return new ja(Li,za)}},{key:"makePost",value:function(e,t){return H("string"==typeof e,"KeyIndex indexValue must always be a string."),new ja(e,za)}},{key:"toString",value:function(){return".key"}}],[{key:"__EMPTY_NODE",get:function(){return za},set:function(e){za=e}}]),r}(Wa),Ba=new Ua,qa=function(){"use strict";function t(n,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;e(l)(this,t),this.isReverse_=a,this.resultGenerator_=o,this.nodeStack_=[];for(var s=1;!n.isEmpty();)if(s=r?i(n.key,r):1,a&&(s*=-1),s<0)n=this.isReverse_?n.left:n.right;else{if(0===s){this.nodeStack_.push(n);break}this.nodeStack_.push(n),n=this.isReverse_?n.right:n.left}}return e(f)(t,[{key:"getNext",value:function(){if(0===this.nodeStack_.length)return null;var e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}},{key:"hasNext",value:function(){return this.nodeStack_.length>0}},{key:"peek",value:function(){if(0===this.nodeStack_.length)return null;var e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}]),t}(),Ha=function(){"use strict";function t(n,r,i,a,o){e(l)(this,t),this.key=n,this.value=r,this.color=null!=i?i:t.RED,this.left=null!=a?a:Ka.EMPTY_NODE,this.right=null!=o?o:Ka.EMPTY_NODE}return e(f)(t,[{key:"copy",value:function(e,n,r,i,a){return new t(null!=e?e:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=a?a:this.right)}},{key:"count",value:function(){return this.left.count()+1+this.right.count()}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min_",value:function(){return this.left.isEmpty()?this:this.left.min_()}},{key:"minKey",value:function(){return this.min_().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp_()}},{key:"removeMin_",value:function(){if(this.left.isEmpty())return Ka.EMPTY_NODE;var e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}},{key:"remove",value:function(e,t){var n,r;if(t(e,(n=this).key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Ka.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}},{key:"isRed_",value:function(){return this.color}},{key:"fixUp_",value:function(){var e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}},{key:"moveRedLeft_",value:function(){var e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}},{key:"moveRedRight_",value:function(){var e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}},{key:"rotateLeft_",value:function(){var e=this.copy(null,null,t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}},{key:"rotateRight_",value:function(){var e=this.copy(null,null,t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}},{key:"colorFlip_",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth_",value:function(){var e=this.check_();return Math.pow(2,e)<=this.count()+1}},{key:"check_",value:function(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");var e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}]),t}();
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
 */Ha.RED=!0,Ha.BLACK=!1;var Va,Xa=function(){"use strict";function t(){e(l)(this,t)}return e(f)(t,[{key:"copy",value:function(e,t,n,r,i){return this}},{key:"insert",value:function(e,t,n){return new Ha(e,t,null)}},{key:"remove",value:function(e,t){return this}},{key:"count",value:function(){return 0}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"check_",value:function(){return 0}},{key:"isRed_",value:function(){return!1}}]),t}(),Ka=function(){"use strict";function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.EMPTY_NODE;e(l)(this,t),this.comparator_=n,this.root_=r}return e(f)(t,[{key:"insert",value:function(e,n){return new t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ha.BLACK,null,null))}},{key:"remove",value:function(e){return new t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ha.BLACK,null,null))}},{key:"get",value:function(e){for(var t,n=this.root_;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key)))return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}},{key:"getPredecessorKey",value:function(e){for(var t,n=this.root_,r=null;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key))){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}},{key:"isEmpty",value:function(){return this.root_.isEmpty()}},{key:"count",value:function(){return this.root_.count()}},{key:"minKey",value:function(){return this.root_.minKey()}},{key:"maxKey",value:function(){return this.root_.maxKey()}},{key:"inorderTraversal",value:function(e){return this.root_.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.root_.reverseTraversal(e)}},{key:"getIterator",value:function(e){return new qa(this.root_,null,this.comparator_,!1,e)}},{key:"getIteratorFrom",value:function(e,t){return new qa(this.root_,e,this.comparator_,!1,t)}},{key:"getReverseIteratorFrom",value:function(e,t){return new qa(this.root_,e,this.comparator_,!0,t)}},{key:"getReverseIterator",value:function(e){return new qa(this.root_,null,this.comparator_,!0,e)}}]),t}();
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
function Ga(e,t){return Di(e.name,t.name)}function Ya(e,t){return Di(e,t)}
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
 */Ka.EMPTY_NODE=new Xa;var Ja,Qa,$a,Za=function(e){return"number"==typeof e?"number:"+Ui(e):"string:"+e},eo=function(e){if(e.isLeafNode()){var t=e.val();H("string"==typeof t||"number"==typeof t||"object"==typeof t&&we(t,".sv"),"Priority must be a string or number.")}else H(e===Va||e.isEmpty(),"priority of unexpected type.");H(e===Va||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")},to=function(){"use strict";function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.__childrenNodeConstructor.EMPTY_NODE;e(l)(this,t),this.value_=n,this.priorityNode_=r,this.lazyHash_=null,H(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),eo(this.priorityNode_)}return e(f)(t,[{key:"isLeafNode",value:function(){return!0}},{key:"getPriority",value:function(){return this.priorityNode_}},{key:"updatePriority",value:function(e){return new t(this.value_,e)}},{key:"getImmediateChild",value:function(e){return".priority"===e?this.priorityNode_:t.__childrenNodeConstructor.EMPTY_NODE}},{key:"getChild",value:function(e){return Sa(e)?this:".priority"===xa(e)?this.priorityNode_:t.__childrenNodeConstructor.EMPTY_NODE}},{key:"hasChild",value:function(){return!1}},{key:"getPredecessorChildName",value:function(e,t){return null}},{key:"updateImmediateChild",value:function(e,n){return".priority"===e?this.updatePriority(n):n.isEmpty()&&".priority"!==e?this:t.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}},{key:"updateChild",value:function(e,n){var r=xa(e);return null===r?n:n.isEmpty()&&".priority"!==r?this:(H(".priority"!==r||1===_a(e),".priority must be the last token in a path"),this.updateImmediateChild(r,t.__childrenNodeConstructor.EMPTY_NODE.updateChild(wa(e),n)))}},{key:"isEmpty",value:function(){return!1}},{key:"numChildren",value:function(){return 0}},{key:"forEachChild",value:function(e,t){return!1}},{key:"val",value:function(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}},{key:"hash",value:function(){if(null===this.lazyHash_){var t="";this.priorityNode_.isEmpty()||(t+="priority:"+Za(this.priorityNode_.val())+":");var n=e(li)(this.value_);t+=n+":",t+="number"===n?Ui(this.value_):this.value_,this.lazyHash_=_i(t)}return this.lazyHash_}},{key:"getValue",value:function(){return this.value_}},{key:"compareTo",value:function(e){return e===t.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof t.__childrenNodeConstructor?-1:(H(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}},{key:"compareToLeafNode_",value:function(n){var r=e(li)(n.value_),i=e(li)(this.value_),a=t.VALUE_TYPE_ORDER.indexOf(r),o=t.VALUE_TYPE_ORDER.indexOf(i);return H(a>=0,"Unknown leaf type: "+r),H(o>=0,"Unknown leaf type: "+i),a===o?"object"===i?0:this.value_<n.value_?-1:this.value_===n.value_?0:1:o-a}},{key:"withIndex",value:function(){return this}},{key:"isIndexed",value:function(){return!0}},{key:"equals",value:function(e){if(e===this)return!0;if(e.isLeafNode()){var t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}],[{key:"__childrenNodeConstructor",get:function(){return Ja},set:function(e){Ja=e}}]),t}();to.VALUE_TYPE_ORDER=["object","boolean","number","string"];var no,ro,io=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(){return e(l)(this,r),n.apply(this,arguments)}return e(f)(r,[{key:"compare",value:function(e,t){var n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?Di(e.name,t.name):i}},{key:"isDefinedOn",value:function(e){return!e.getPriority().isEmpty()}},{key:"indexedValueChanged",value:function(e,t){return!e.getPriority().equals(t.getPriority())}},{key:"minPost",value:function(){return ja.MIN}},{key:"maxPost",value:function(){return new ja(Li,new to("[PRIORITY-POST]",$a))}},{key:"makePost",value:function(e,t){var n=Qa(e);return new ja(t,new to("[PRIORITY-POST]",n))}},{key:"toString",value:function(){return".priority"}}]),r}(Wa),ao=new io,oo=Math.log(2),so=function(){"use strict";function t(n){e(l)(this,t);var r;this.count=(r=n+1,parseInt(Math.log(r)/oo,10)),this.current_=this.count-1;var i,a=(i=this.count,parseInt(Array(i+1).join("1"),2));this.bits_=n+1&a}return e(f)(t,[{key:"nextBitIsOne",value:function(){var e=!(this.bits_&1<<this.current_);return this.current_--,e}}]),t}(),uo=function(e,t,n,r){e.sort(t);var i=function(t,r){var a,o,s=r-t;if(0===s)return null;if(1===s)return a=e[t],o=n?n(a):a,new Ha(o,a.node,Ha.BLACK,null,null);var u=parseInt(s/2,10)+t,c=i(t,u),l=i(u+1,r);return a=e[u],o=n?n(a):a,new Ha(o,a.node,Ha.BLACK,c,l)},a=function(t){for(var r=null,a=null,o=e.length,s=function(t,r){var a=o-t,s=o;o-=t;var c=i(a+1,s),l=e[a],f=n?n(l):l;u(new Ha(f,l.node,r,null,c))},u=function(e){r?(r.left=e,r=e):(a=e,r=e)},c=0;c<t.count;++c){var l=t.nextBitIsOne(),f=Math.pow(2,t.count-(c+1));l?s(f,Ha.BLACK):(s(f,Ha.BLACK),s(f,Ha.RED))}return a}(new so(e.length));return new Ka(r||t,a)},co={},lo=function(){"use strict";function t(n,r){e(l)(this,t),this.indexes_=n,this.indexSet_=r}return e(f)(t,[{key:"get",value:function(e){var t=Ie(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ka?t:null}},{key:"hasIndex",value:function(e){return we(this.indexSet_,e.toString())}},{key:"addIndex",value:function(e,n){H(e!==Ba,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var r,i=[],a=!1,o=n.getIterator(ja.Wrap),s=o.getNext();s;)a=a||e.isDefinedOn(s.node),i.push(s),s=o.getNext();r=a?uo(i,e.getCompare()):co;var u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;var l=Object.assign({},this.indexes_);return l[u]=r,new t(l,c)}},{key:"addToIndexes",value:function(e,n){var r=this;return new t(Te(this.indexes_,(function(t,i){var a=Ie(r.indexSet_,i);if(H(a,"Missing index implementation for "+i),t===co){if(a.isDefinedOn(e.node)){for(var o=[],s=n.getIterator(ja.Wrap),u=s.getNext();u;)u.name!==e.name&&o.push(u),u=s.getNext();return o.push(e),uo(o,a.getCompare())}return co}var c=n.get(e.name),l=t;return c&&(l=l.remove(new ja(e.name,c))),l.insert(e,e.node)})),this.indexSet_)}},{key:"removeFromIndexes",value:function(e,n){return new t(Te(this.indexes_,(function(t){if(t===co)return t;var r=n.get(e.name);return r?t.remove(new ja(e.name,r)):t})),this.indexSet_)}}],[{key:"Default",get:function(){return H(co&&ao,"ChildrenNode.ts has not been loaded"),no=no||new t({".priority":co},{".priority":ao})}}]),t}(),fo=function(){"use strict";function t(n,r,i){e(l)(this,t),this.children_=n,this.priorityNode_=r,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&eo(this.priorityNode_),this.children_.isEmpty()&&H(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}return e(f)(t,[{key:"isLeafNode",value:function(){return!1}},{key:"getPriority",value:function(){return this.priorityNode_||ro}},{key:"updatePriority",value:function(e){return this.children_.isEmpty()?this:new t(this.children_,e,this.indexMap_)}},{key:"getImmediateChild",value:function(e){if(".priority"===e)return this.getPriority();var t=this.children_.get(e);return null===t?ro:t}},{key:"getChild",value:function(e){var t=xa(e);return null===t?this:this.getImmediateChild(t).getChild(wa(e))}},{key:"hasChild",value:function(e){return null!==this.children_.get(e)}},{key:"updateImmediateChild",value:function(e,n){if(H(n,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(n);var r,i,a=new ja(e,n);n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(a,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(a,this.children_));var o=r.isEmpty()?ro:this.priorityNode_;return new t(r,o,i)}},{key:"updateChild",value:function(e,t){var n=xa(e);if(null===n)return t;H(".priority"!==xa(e)||1===_a(e),".priority must be the last token in a path");var r=this.getImmediateChild(n).updateChild(wa(e),t);return this.updateImmediateChild(n,r)}},{key:"isEmpty",value:function(){return this.children_.isEmpty()}},{key:"numChildren",value:function(){return this.children_.count()}},{key:"val",value:function(e){if(this.isEmpty())return null;var n={},r=0,i=0,a=!0;if(this.forEachChild(ao,(function(o,s){n[o]=s.val(e),r++,a&&t.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):a=!1})),!e&&a&&i<2*r){var o=[];for(var s in n)o[s]=n[s];return o}return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}},{key:"hash",value:function(){if(null===this.lazyHash_){var e="";this.getPriority().isEmpty()||(e+="priority:"+Za(this.getPriority().val())+":"),this.forEachChild(ao,(function(t,n){var r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":_i(e)}return this.lazyHash_}},{key:"getPredecessorChildName",value:function(e,t,n){var r=this.resolveIndex_(n);if(r){var i=r.getPredecessorKey(new ja(e,t));return i?i.name:null}return this.children_.getPredecessorKey(e)}},{key:"getFirstChildName",value:function(e){var t=this.resolveIndex_(e);if(t){var n=t.minKey();return n&&n.name}return this.children_.minKey()}},{key:"getFirstChild",value:function(e){var t=this.getFirstChildName(e);return t?new ja(t,this.children_.get(t)):null}},{key:"getLastChildName",value:function(e){var t=this.resolveIndex_(e);if(t){var n=t.maxKey();return n&&n.name}return this.children_.maxKey()}},{key:"getLastChild",value:function(e){var t=this.getLastChildName(e);return t?new ja(t,this.children_.get(t)):null}},{key:"forEachChild",value:function(e,t){var n=this.resolveIndex_(e);return n?n.inorderTraversal((function(e){return t(e.name,e.node)})):this.children_.inorderTraversal(t)}},{key:"getIterator",value:function(e){return this.getIteratorFrom(e.minPost(),e)}},{key:"getIteratorFrom",value:function(e,t){var n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(function(e){return e}));for(var r=this.children_.getIteratorFrom(e.name,ja.Wrap),i=r.peek();null!=i&&t.compare(i,e)<0;)r.getNext(),i=r.peek();return r}},{key:"getReverseIterator",value:function(e){return this.getReverseIteratorFrom(e.maxPost(),e)}},{key:"getReverseIteratorFrom",value:function(e,t){var n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(function(e){return e}));for(var r=this.children_.getReverseIteratorFrom(e.name,ja.Wrap),i=r.peek();null!=i&&t.compare(i,e)>0;)r.getNext(),i=r.peek();return r}},{key:"compareTo",value:function(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ho?-1:0}},{key:"withIndex",value:function(e){if(e===Ba||this.indexMap_.hasIndex(e))return this;var n=this.indexMap_.addIndex(e,this.children_);return new t(this.children_,this.priorityNode_,n)}},{key:"isIndexed",value:function(e){return e===Ba||this.indexMap_.hasIndex(e)}},{key:"equals",value:function(e){if(e===this)return!0;if(e.isLeafNode())return!1;var t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){for(var n=this.getIterator(ao),r=t.getIterator(ao),i=n.getNext(),a=r.getNext();i&&a;){if(i.name!==a.name||!i.node.equals(a.node))return!1;i=n.getNext(),a=r.getNext()}return null===i&&null===a}return!1}return!1}},{key:"resolveIndex_",value:function(e){return e===Ba?null:this.indexMap_.get(e.toString())}}],[{key:"EMPTY_NODE",get:function(){return ro||(ro=new t(new Ka(Ya),null,lo.Default))}}]),t}();fo.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;var ho=new(function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(){return e(l)(this,r),n.call(this,new Ka(Ya),fo.EMPTY_NODE,lo.Default)}return e(f)(r,[{key:"compareTo",value:function(e){return e===this?0:1}},{key:"equals",value:function(e){return e===this}},{key:"getPriority",value:function(){return this}},{key:"getImmediateChild",value:function(e){return fo.EMPTY_NODE}},{key:"isEmpty",value:function(){return!1}}]),r}(fo));Object.defineProperties(ja,{MIN:{value:new ja(Oi,fo.EMPTY_NODE)},MAX:{value:new ja(Li,ho)}}),Ua.__EMPTY_NODE=fo.EMPTY_NODE,to.__childrenNodeConstructor=fo,Va=ho,function(e){$a=e}(ho);function po(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(null===t)return fo.EMPTY_NODE;if("object"==typeof t&&".priority"in t&&(n=t[".priority"]),H(null===n||"string"==typeof n||"number"==typeof n||"object"==typeof n&&".sv"in n,"Invalid priority type found: "+(void 0===n?"undefined":e(li)(n))),"object"==typeof t&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!=typeof t||".sv"in t){var r=t;return new to(r,po(n))}if(t instanceof Array){var i=fo.EMPTY_NODE;return Wi(t,(function(e,n){if(we(t,e)&&"."!==e.substring(0,1)){var r=po(n);!r.isLeafNode()&&r.isEmpty()||(i=i.updateImmediateChild(e,r))}})),i.updatePriority(po(n))}var a=[],o=!1,s=t;if(Wi(s,(function(e,t){if("."!==e.substring(0,1)){var n=po(t);n.isEmpty()||(o=o||!n.getPriority().isEmpty(),a.push(new ja(e,n)))}})),0===a.length)return fo.EMPTY_NODE;var u=uo(a,Ga,(function(e){return e.name}),Ya);if(o){var c=uo(a,ao.getCompare());return new fo(u,po(n),new lo({".priority":c},{".priority":ao}))}return new fo(u,po(n),lo.Default)}!function(e){Qa=e}(po);
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
var vo,mo,yo=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t){var i;return e(l)(this,r),(i=n.call(this)).indexPath_=t,H(!Sa(t)&&".priority"!==xa(t),"Can't create PathIndex with empty path or .priority key"),i}return e(f)(r,[{key:"extractChild",value:function(e){return e.getChild(this.indexPath_)}},{key:"isDefinedOn",value:function(e){return!e.getChild(this.indexPath_).isEmpty()}},{key:"compare",value:function(e,t){var n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?Di(e.name,t.name):i}},{key:"makePost",value:function(e,t){var n=po(e),r=fo.EMPTY_NODE.updateChild(this.indexPath_,n);return new ja(t,r)}},{key:"maxPost",value:function(){var e=fo.EMPTY_NODE.updateChild(this.indexPath_,ho);return new ja(Li,e)}},{key:"toString",value:function(){return Ca(this.indexPath_,0).join("/")}}]),r}(Wa),go=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(){return e(l)(this,r),n.apply(this,arguments)}return e(f)(r,[{key:"compare",value:function(e,t){var n=e.node.compareTo(t.node);return 0===n?Di(e.name,t.name):n}},{key:"isDefinedOn",value:function(e){return!0}},{key:"indexedValueChanged",value:function(e,t){return!e.equals(t)}},{key:"minPost",value:function(){return ja.MIN}},{key:"maxPost",value:function(){return ja.MAX}},{key:"makePost",value:function(e,t){var n=po(e);return new ja(t,n)}},{key:"toString",value:function(){return".value"}}]),r}(Wa),ko=new go,bo="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
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
 */vo=0,mo=[];
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
function xo(e){return{type:"value",snapshotNode:e}}function _o(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function wo(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Io(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
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
var Co=function(){"use strict";function t(){e(l)(this,t),this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ao}return e(f)(t,[{key:"hasStart",value:function(){return this.startSet_}},{key:"hasStartAfter",value:function(){return this.startAfterSet_}},{key:"hasEndBefore",value:function(){return this.endBeforeSet_}},{key:"isViewFromLeft",value:function(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}},{key:"getIndexStartValue",value:function(){return H(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}},{key:"getIndexStartName",value:function(){return H(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Oi}},{key:"hasEnd",value:function(){return this.endSet_}},{key:"getIndexEndValue",value:function(){return H(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}},{key:"getIndexEndName",value:function(){return H(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Li}},{key:"hasLimit",value:function(){return this.limitSet_}},{key:"hasAnchoredLimit",value:function(){return this.limitSet_&&""!==this.viewFrom_}},{key:"getLimit",value:function(){return H(this.limitSet_,"Only valid if limit has been set"),this.limit_}},{key:"getIndex",value:function(){return this.index_}},{key:"loadsAllData",value:function(){return!(this.startSet_||this.endSet_||this.limitSet_)}},{key:"isDefault",value:function(){return this.loadsAllData()&&this.index_===ao}},{key:"copy",value:function(){var e=new t;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}]),t}();
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
 */function To(e){var t,n={};return e.isDefault()||(e.index_===ao?t="$priority":e.index_===ko?t="$value":e.index_===Ba?t="$key":(H(e.index_ instanceof yo,"Unrecognized index type!"),t=e.index_.toString()),n.orderBy=be(t),e.startSet_&&(n.startAt=be(e.indexStartValue_),e.startNameSet_&&(n.startAt+=","+be(e.indexStartName_))),e.endSet_&&(n.endAt=be(e.indexEndValue_),e.endNameSet_&&(n.endAt+=","+be(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?n.limitToFirst=e.limit_:n.limitToLast=e.limit_)),n}function No(e){var t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;var n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==ao&&(t.i=e.index_.toString()),t}
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
 */var So=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t,i,a,o){var s;return e(l)(this,r),(s=n.call(this)).repoInfo_=t,s.onDataUpdate_=i,s.authTokenProvider_=a,s.appCheckTokenProvider_=o,s.log_=Si("p:rest:"),s.listens_={},s}return e(f)(r,[{key:"reportStats",value:function(e){throw new Error("Method not implemented.")}},{key:"listen",value:function(e,t,n,i){var a=this,o=e._path.toString();this.log_("Listen called for "+o+" "+e._queryIdentifier);var s=r.getListenId_(e,n),u={};this.listens_[s]=u;var c=To(e._queryParams);this.restRequest_(o+".json",c,(function(e,t){var r=t;(404===e&&(r=null,e=null),null===e&&a.onDataUpdate_(o,r,!1,n),Ie(a.listens_,s)===u)&&i(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)}))}},{key:"unlisten",value:function(e,t){var n=r.getListenId_(e,t);delete this.listens_[n]}},{key:"get",value:function(e){var t=this,n=To(e._queryParams),r=e._path.toString(),i=new de;return this.restRequest_(r+".json",n,(function(e,n){var a=n;404===e&&(a=null,e=null),null===e?(t.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))})),i.promise}},{key:"refreshAuthToken",value:function(e){}},{key:"restRequest_",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,i=this;return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((function(a){var o=e(v)(a,2),s=o[0],u=o[1],c=i;s&&s.accessToken&&(n.auth=s.accessToken),u&&u.token&&(n.ac=u.token);var l=(i.repoInfo_.secure?"https://":"http://")+i.repoInfo_.host+t+"?ns="+i.repoInfo_.namespace+Ee(n);i.log_("Sending REST request for "+l);var f=new XMLHttpRequest;f.onreadystatechange=function(){if(r&&4===f.readyState){c.log_("REST Response for "+l+" received. status:",f.status,"response:",f.responseText);var e=null;if(f.status>=200&&f.status<300){try{e=ke(f.responseText)}catch(e){Ai("Failed to parse JSON response for "+l+": "+f.responseText)}r(null,e)}else 401!==f.status&&404!==f.status&&Ai("Got unsuccessful REST response for "+l+" Status: "+f.status),r(f.status);r=null}},f.open("GET",l,!0),f.send()}))}}],[{key:"getListenId_",value:function(e,t){return void 0!==t?"tag$"+t:(H(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}}]),r}(ma),Eo=function(){"use strict";function t(){e(l)(this,t),this.rootNode_=fo.EMPTY_NODE}return e(f)(t,[{key:"getNode",value:function(e){return this.rootNode_.getChild(e)}},{key:"updateSnapshot",value:function(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}]),t}();
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
function Ro(){return{value:null,children:new Map}}function Ao(e,t,n){if(Sa(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{var r=xa(t);e.children.has(r)||e.children.set(r,Ro()),Ao(e.children.get(r),t=wa(t),n)}}function Po(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach((function(e,n){t(n,e)}))}
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
 */(e,(function(e,r){Po(r,new ka(t.toString()+"/"+e),n)}))}var Oo,Lo,Do=function(){"use strict";function t(n){e(l)(this,t),this.collection_=n,this.last_=null}return e(f)(t,[{key:"get",value:function(){var e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Wi(this.last_,(function(e,n){t[e]=t[e]-n})),this.last_=e,t}}]),t}(),Mo=function(){"use strict";function t(n,r){e(l)(this,t),this.server_=r,this.statsToReport_={},this.statsListener_=new Do(n);var i=1e4+2e4*Math.random();Ki(this.reportStats_.bind(this),Math.floor(i))}return e(f)(t,[{key:"reportStats_",value:function(){var e=this,t=this.statsListener_.get(),n={},r=!1;Wi(t,(function(t,i){i>0&&we(e.statsToReport_,t)&&(n[t]=i,r=!0)})),r&&this.server_.reportStats(n),Ki(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}]),t}();
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
 */function Fo(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
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
 */(Lo=Oo||(Oo={}))[Lo.OVERWRITE=0]="OVERWRITE",Lo[Lo.MERGE=1]="MERGE",Lo[Lo.ACK_USER_WRITE=2]="ACK_USER_WRITE",Lo[Lo.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";var zo,jo=function(){"use strict";function t(n,r,i){e(l)(this,t),this.path=n,this.affectedTree=r,this.revert=i,this.type=Oo.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}return e(f)(t,[{key:"operationForChild",value:function(e){if(Sa(this.path)){if(null!=this.affectedTree.value)return H(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;var n=this.affectedTree.subtree(new ka(e));return new t(ba(),n,this.revert)}return H(xa(this.path)===e,"operationForChild called for unrelated child."),new t(wa(this.path),this.affectedTree,this.revert)}}]),t}(),Wo=function(){"use strict";function t(n,r,i){e(l)(this,t),this.source=n,this.path=r,this.snap=i,this.type=Oo.OVERWRITE}return e(f)(t,[{key:"operationForChild",value:function(e){return Sa(this.path)?new t(this.source,ba(),this.snap.getImmediateChild(e)):new t(this.source,wa(this.path),this.snap)}}]),t}(),Uo=function(){"use strict";function t(n,r,i){e(l)(this,t),this.source=n,this.path=r,this.children=i,this.type=Oo.MERGE}return e(f)(t,[{key:"operationForChild",value:function(e){if(Sa(this.path)){var n=this.children.subtree(new ka(e));return n.isEmpty()?null:n.value?new Wo(this.source,ba(),n.value):new t(this.source,ba(),n)}return H(xa(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new t(this.source,wa(this.path),this.children)}},{key:"toString",value:function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}]),t}(),Bo=function(){"use strict";function t(n,r,i){e(l)(this,t),this.node_=n,this.fullyInitialized_=r,this.filtered_=i}return e(f)(t,[{key:"isFullyInitialized",value:function(){return this.fullyInitialized_}},{key:"isFiltered",value:function(){return this.filtered_}},{key:"isCompleteForPath",value:function(e){if(Sa(e))return this.isFullyInitialized()&&!this.filtered_;var t=xa(e);return this.isCompleteForChild(t)}},{key:"isCompleteForChild",value:function(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}},{key:"getNode",value:function(){return this.node_}}]),t}();
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
 */function qo(e,t,n,r,i,a){var o=r.filter((function(e){return e.type===n}));o.sort((function(t,n){return function(e,t,n){if(null==t.childName||null==n.childName)throw V("Should only compare child_ events.");var r=new ja(t.childName,t.snapshotNode),i=new ja(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
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
 */(e,t,n)})),o.forEach((function(n){var r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,a);i.forEach((function(i){i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function Ho(e,t){return{eventCache:e,serverCache:t}}function Vo(e,t,n,r){return Ho(new Bo(t,n,r),e.serverCache)}function Xo(e,t,n,r){return Ho(e.eventCache,new Bo(t,n,r))}function Ko(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Go(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
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
 */var Yo=function(){return zo||(zo=new Ka(Mi)),zo},Jo=function(){"use strict";function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Yo();e(l)(this,t),this.value=n,this.children=r}return e(f)(t,[{key:"isEmpty",value:function(){return null===this.value&&this.children.isEmpty()}},{key:"findRootMostMatchingPathAndValue",value:function(e,t){if(null!=this.value&&t(this.value))return{path:ba(),value:this.value};if(Sa(e))return null;var n=xa(e),r=this.children.get(n);if(null!==r){var i=r.findRootMostMatchingPathAndValue(wa(e),t);return null!=i?{path:Na(new ka(n),i.path),value:i.value}:null}return null}},{key:"findRootMostValueAndPath",value:function(e){return this.findRootMostMatchingPathAndValue(e,(function(){return!0}))}},{key:"subtree",value:function(e){if(Sa(e))return this;var n=xa(e),r=this.children.get(n);return null!==r?r.subtree(wa(e)):new t(null)}},{key:"set",value:function(e,n){if(Sa(e))return new t(n,this.children);var r=xa(e),i=(this.children.get(r)||new t(null)).set(wa(e),n),a=this.children.insert(r,i);return new t(this.value,a)}},{key:"remove",value:function(e){if(Sa(e))return this.children.isEmpty()?new t(null):new t(null,this.children);var n=xa(e),r=this.children.get(n);if(r){var i,a=r.remove(wa(e));return i=a.isEmpty()?this.children.remove(n):this.children.insert(n,a),null===this.value&&i.isEmpty()?new t(null):new t(this.value,i)}return this}},{key:"get",value:function(e){if(Sa(e))return this.value;var t=xa(e),n=this.children.get(t);return n?n.get(wa(e)):null}},{key:"setTree",value:function(e,n){if(Sa(e))return n;var r,i=xa(e),a=(this.children.get(i)||new t(null)).setTree(wa(e),n);return r=a.isEmpty()?this.children.remove(i):this.children.insert(i,a),new t(this.value,r)}},{key:"fold",value:function(e){return this.fold_(ba(),e)}},{key:"fold_",value:function(e,t){var n={};return this.children.inorderTraversal((function(r,i){n[r]=i.fold_(Na(e,r),t)})),t(e,this.value,n)}},{key:"findOnPath",value:function(e,t){return this.findOnPath_(e,ba(),t)}},{key:"findOnPath_",value:function(e,t,n){var r=!!this.value&&n(t,this.value);if(r)return r;if(Sa(e))return null;var i=xa(e),a=this.children.get(i);return a?a.findOnPath_(wa(e),Na(t,i),n):null}},{key:"foreachOnPath",value:function(e,t){return this.foreachOnPath_(e,ba(),t)}},{key:"foreachOnPath_",value:function(e,n,r){if(Sa(e))return this;this.value&&r(n,this.value);var i=xa(e),a=this.children.get(i);return a?a.foreachOnPath_(wa(e),Na(n,i),r):new t(null)}},{key:"foreach",value:function(e){this.foreach_(ba(),e)}},{key:"foreach_",value:function(e,t){this.children.inorderTraversal((function(n,r){r.foreach_(Na(e,n),t)})),this.value&&t(e,this.value)}},{key:"foreachChild",value:function(e){this.children.inorderTraversal((function(t,n){n.value&&e(t,n.value)}))}}],[{key:"fromObject",value:function(e){var n=new t(null);return Wi(e,(function(e,t){n=n.set(new ka(e),t)})),n}}]),t}(),Qo=function(){"use strict";function t(n){e(l)(this,t),this.writeTree_=n}return e(f)(t,null,[{key:"empty",value:function(){return new t(new Jo(null))}}]),t}();function $o(e,t,n){if(Sa(t))return new Qo(new Jo(n));var r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){var i=r.path,a=r.value,o=Ea(i,t);return a=a.updateChild(o,n),new Qo(e.writeTree_.set(i,a))}var s=new Jo(n),u=e.writeTree_.setTree(t,s);return new Qo(u)}function Zo(e,t,n){var r=e;return Wi(n,(function(e,n){r=$o(r,Na(t,e),n)})),r}function es(e,t){if(Sa(t))return Qo.empty();var n=e.writeTree_.setTree(t,new Jo(null));return new Qo(n)}function ts(e,t){return null!=ns(e,t)}function ns(e,t){var n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Ea(n.path,t)):null}function rs(e){var t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(ao,(function(e,n){t.push(new ja(e,n))})):e.writeTree_.children.inorderTraversal((function(e,n){null!=n.value&&t.push(new ja(e,n.value))})),t}function is(e,t){if(Sa(t))return e;var n=ns(e,t);return new Qo(null!=n?new Jo(n):e.writeTree_.subtree(t))}function as(e){return e.writeTree_.isEmpty()}function os(e,t){return ss(ba(),e.writeTree_,t)}function ss(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);var r=null;return t.children.inorderTraversal((function(t,i){".priority"===t?(H(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=ss(Na(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(Na(e,".priority"),r)),n}
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
 */function us(e,t){return _s(t,e)}function cs(e,t){for(var n=0;n<e.allWrites.length;n++){var r=e.allWrites[n];if(r.writeId===t)return r}return null}function ls(e,t){var n=e.allWrites.findIndex((function(e){return e.writeId===t}));H(n>=0,"removeWrite called with nonexistent writeId.");var r=e.allWrites[n];e.allWrites.splice(n,1);for(var i=r.visible,a=!1,o=e.allWrites.length-1;i&&o>=0;){var s=e.allWrites[o];s.visible&&(o>=n&&fs(s,r.path)?i=!1:Aa(r.path,s.path)&&(a=!0)),o--}if(i){if(a)return function(e){e.visibleWrites=ds(e.allWrites,hs,ba()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;r.snap?e.visibleWrites=es(e.visibleWrites,r.path):Wi(r.children,(function(t){e.visibleWrites=es(e.visibleWrites,Na(r.path,t))}));return!0}return!1}function fs(e,t){if(e.snap)return Aa(e.path,t);for(var n in e.children)if(e.children.hasOwnProperty(n)&&Aa(Na(e.path,n),t))return!0;return!1}function hs(e){return e.visible}function ds(e,t,n){for(var r=Qo.empty(),i=0;i<e.length;++i){var a=e[i];if(t(a)){var o=a.path,s=void 0;if(a.snap)Aa(n,o)?r=$o(r,s=Ea(n,o),a.snap):Aa(o,n)&&(s=Ea(o,n),r=$o(r,ba(),a.snap.getChild(s)));else{if(!a.children)throw V("WriteRecord should have .snap or .children");if(Aa(n,o))r=Zo(r,s=Ea(n,o),a.children);else if(Aa(o,n))if(Sa(s=Ea(o,n)))r=Zo(r,ba(),a.children);else{var u=Ie(a.children,xa(s));if(u){var c=u.getChild(wa(s));r=$o(r,ba(),c)}}}}}return r}function ps(e,t,n,r,i){if(r||i){var a=is(e.visibleWrites,t);if(!i&&as(a))return n;if(i||null!=n||ts(a,ba())){return os(ds(e.allWrites,(function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(Aa(e.path,t)||Aa(t,e.path))}),t),n||fo.EMPTY_NODE)}return null}var o=ns(e.visibleWrites,t);if(null!=o)return o;var s=is(e.visibleWrites,t);return as(s)?n:null!=n||ts(s,ba())?os(s,n||fo.EMPTY_NODE):null}function vs(e,t,n,r){return ps(e.writeTree,e.treePath,t,n,r)}function ms(e,t){return function(e,t,n){var r=fo.EMPTY_NODE,i=ns(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(ao,(function(e,t){r=r.updateImmediateChild(e,t)})),r;if(n){var a=is(e.visibleWrites,t);return n.forEachChild(ao,(function(e,t){var n=os(is(a,new ka(e)),t);r=r.updateImmediateChild(e,n)})),rs(a).forEach((function(e){r=r.updateImmediateChild(e.name,e.node)})),r}return rs(is(e.visibleWrites,t)).forEach((function(e){r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function ys(e,t,n,r){return function(e,t,n,r,i){H(r||i,"Either existingEventSnap or existingServerSnap must exist");var a=Na(t,n);if(ts(e.visibleWrites,a))return null;var o=is(e.visibleWrites,a);return as(o)?i.getChild(n):os(o,i.getChild(n))}(e.writeTree,e.treePath,t,n,r)}function gs(e,t){return function(e,t){return ns(e.visibleWrites,t)}(e.writeTree,Na(e.treePath,t))}function ks(e,t,n,r,i,a){return function(e,t,n,r,i,a,o){var s,u=is(e.visibleWrites,t),c=ns(u,ba());if(null!=c)s=c;else{if(null==n)return[];s=os(u,n)}if((s=s.withIndex(o)).isEmpty()||s.isLeafNode())return[];for(var l=[],f=o.getCompare(),h=a?s.getReverseIteratorFrom(r,o):s.getIteratorFrom(r,o),d=h.getNext();d&&l.length<i;)0!==f(d,r)&&l.push(d),d=h.getNext();return l}(e.writeTree,e.treePath,t,n,r,i,a)}function bs(e,t,n){return function(e,t,n,r){var i=Na(t,n),a=ns(e.visibleWrites,i);return null!=a?a:r.isCompleteForChild(n)?os(is(e.visibleWrites,i),r.getNode().getImmediateChild(n)):null}(e.writeTree,e.treePath,t,n)}function xs(e,t){return _s(Na(e.treePath,t),e.writeTree)}function _s(e,t){return{treePath:e,writeTree:t}}
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
 */var ws=function(){"use strict";function t(){e(l)(this,t),this.changeMap=new Map}return e(f)(t,[{key:"trackChildChange",value:function(e){var t=e.type,n=e.childName;H("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),H(".priority"!==n,"Only non-priority child changes can be tracked.");var r=this.changeMap.get(n);if(r){var i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,Io(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,wo(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,_o(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw V("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,Io(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}},{key:"getChanges",value:function(){return Array.from(this.changeMap.values())}}]),t}(),Is=new(function(){"use strict";function t(){e(l)(this,t)}return e(f)(t,[{key:"getCompleteChild",value:function(e){return null}},{key:"getChildAfterChild",value:function(e,t,n){return null}}]),t}()),Cs=function(){"use strict";function t(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e(l)(this,t),this.writes_=n,this.viewCache_=r,this.optCompleteServerCache_=i}return e(f)(t,[{key:"getCompleteChild",value:function(e){var t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);var n=null!=this.optCompleteServerCache_?new Bo(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return bs(this.writes_,e,n)}},{key:"getChildAfterChild",value:function(e,t,n){var r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Go(this.viewCache_),i=ks(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}]),t}();
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
 */function Ts(e,t,n,r,i){var a,o,s=new ws;if(n.type===Oo.OVERWRITE){var u=n;u.source.fromUser?a=Es(e,t,u.path,u.snap,r,i,s):(H(u.source.fromServer,"Unknown source."),o=u.source.tagged||t.serverCache.isFiltered()&&!Sa(u.path),a=Ss(e,t,u.path,u.snap,r,i,o,s))}else if(n.type===Oo.MERGE){var c=n;c.source.fromUser?a=function(e,t,n,r,i,a,o){var s=t;return r.foreach((function(r,u){var c=Na(n,r);Rs(t,xa(c))&&(s=Es(e,s,c,u,i,a,o))})),r.foreach((function(r,u){var c=Na(n,r);Rs(t,xa(c))||(s=Es(e,s,c,u,i,a,o))})),s}(e,t,c.path,c.children,r,i,s):(H(c.source.fromServer,"Unknown source."),o=c.source.tagged||t.serverCache.isFiltered(),a=Ps(e,t,c.path,c.children,r,i,o,s))}else if(n.type===Oo.ACK_USER_WRITE){var l=n;a=l.revert?function(e,t,n,r,i,a){var o;if(null!=gs(r,n))return t;var s,u=new Cs(r,t,i),c=t.eventCache.getNode();if(Sa(n)||".priority"===xa(n)){var l;if(t.serverCache.isFullyInitialized())l=vs(r,Go(t));else{var f=t.serverCache.getNode();H(f instanceof fo,"serverChildren would be complete if leaf node"),l=ms(r,f)}s=e.filter.updateFullNode(c,l,a)}else{var h=xa(n),d=bs(r,h,t.serverCache);null==d&&t.serverCache.isCompleteForChild(h)&&(d=c.getImmediateChild(h)),(s=null!=d?e.filter.updateChild(c,h,d,wa(n),u,a):t.eventCache.getNode().hasChild(h)?e.filter.updateChild(c,h,fo.EMPTY_NODE,wa(n),u,a):c).isEmpty()&&t.serverCache.isFullyInitialized()&&(o=vs(r,Go(t))).isLeafNode()&&(s=e.filter.updateFullNode(s,o,a))}return o=t.serverCache.isFullyInitialized()||null!=gs(r,ba()),Vo(t,s,o,e.filter.filtersNodes())}
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
 */(e,t,l.path,r,i,s):function(e,t,n,r,i,a,o){if(null!=gs(i,n))return t;var s=t.serverCache.isFiltered(),u=t.serverCache;if(null!=r.value){if(Sa(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return Ss(e,t,n,u.getNode().getChild(n),i,a,s,o);if(Sa(n)){var c=new Jo(null);return u.getNode().forEachChild(Ba,(function(e,t){c=c.set(new ka(e),t)})),Ps(e,t,n,c,i,a,s,o)}return t}var l=new Jo(null);return r.foreach((function(e,t){var r=Na(n,e);u.isCompleteForPath(r)&&(l=l.set(e,u.getNode().getChild(r)))})),Ps(e,t,n,l,i,a,s,o)}(e,t,l.path,l.affectedTree,r,i,s)}else{if(n.type!==Oo.LISTEN_COMPLETE)throw V("Unknown operation type: "+n.type);a=function(e,t,n,r,i){var a=t.serverCache,o=Xo(t,a.getNode(),a.isFullyInitialized()||Sa(n),a.isFiltered());return Ns(e,o,n,r,Is,i)}(e,t,n.path,r,s)}var f=s.getChanges();return function(e,t,n){var r=t.eventCache;if(r.isFullyInitialized()){var i=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=Ko(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&n.push(xo(Ko(t)))}}(t,a,f),{viewCache:a,changes:f}}function Ns(e,t,n,r,i,a){var o,s,u=t.eventCache;if(null!=gs(r,n))return t;if(Sa(n))if(H(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){var c=Go(t),l=ms(r,c instanceof fo?c:fo.EMPTY_NODE);o=e.filter.updateFullNode(t.eventCache.getNode(),l,a)}else{var f=vs(r,Go(t));o=e.filter.updateFullNode(t.eventCache.getNode(),f,a)}else{var h=xa(n);if(".priority"===h){H(1===_a(n),"Can't have a priority with additional path components");var d=u.getNode(),p=ys(r,n,d,s=t.serverCache.getNode());o=null!=p?e.filter.updatePriority(d,p):u.getNode()}else{var v,m=wa(n);if(u.isCompleteForChild(h)){s=t.serverCache.getNode();var y=ys(r,n,u.getNode(),s);v=null!=y?u.getNode().getImmediateChild(h).updateChild(m,y):u.getNode().getImmediateChild(h)}else v=bs(r,h,t.serverCache);o=null!=v?e.filter.updateChild(u.getNode(),h,v,m,i,a):u.getNode()}}return Vo(t,o,u.isFullyInitialized()||Sa(n),e.filter.filtersNodes())}function Ss(e,t,n,r,i,a,o,s){var u,c=t.serverCache,l=o?e.filter:e.filter.getIndexedFilter();if(Sa(n))u=l.updateFullNode(c.getNode(),r,null);else if(l.filtersNodes()&&!c.isFiltered()){var f=c.getNode().updateChild(n,r);u=l.updateFullNode(c.getNode(),f,null)}else{var h=xa(n);if(!c.isCompleteForPath(n)&&_a(n)>1)return t;var d=wa(n),p=c.getNode().getImmediateChild(h).updateChild(d,r);u=".priority"===h?l.updatePriority(c.getNode(),p):l.updateChild(c.getNode(),h,p,d,Is,null)}var v=Xo(t,u,c.isFullyInitialized()||Sa(n),l.filtersNodes());return Ns(e,v,n,i,new Cs(i,v,a),s)}function Es(e,t,n,r,i,a,o){var s,u,c=t.eventCache,l=new Cs(i,t,a);if(Sa(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,o),s=Vo(t,u,!0,e.filter.filtersNodes());else{var f=xa(n);if(".priority"===f)u=e.filter.updatePriority(t.eventCache.getNode(),r),s=Vo(t,u,c.isFullyInitialized(),c.isFiltered());else{var h,d=wa(n),p=c.getNode().getImmediateChild(f);if(Sa(d))h=r;else{var v=l.getCompleteChild(f);h=null!=v?".priority"===Ia(d)&&v.getChild(Ta(d)).isEmpty()?v:v.updateChild(d,r):fo.EMPTY_NODE}if(p.equals(h))s=t;else s=Vo(t,e.filter.updateChild(c.getNode(),f,h,d,l,o),c.isFullyInitialized(),e.filter.filtersNodes())}}return s}function Rs(e,t){return e.eventCache.isCompleteForChild(t)}function As(e,t,n){return n.foreach((function(e,n){t=t.updateChild(e,n)})),t}function Ps(e,t,n,r,i,a,o,s){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;var u,c=t;u=Sa(n)?r:new Jo(null).setTree(n,r);var l=t.serverCache.getNode();return u.children.inorderTraversal((function(n,r){if(l.hasChild(n)){var u=As(0,t.serverCache.getNode().getImmediateChild(n),r);c=Ss(e,c,new ka(n),u,i,a,o,s)}})),u.children.inorderTraversal((function(n,r){var u=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!l.hasChild(n)&&!u){var f=As(0,t.serverCache.getNode().getImmediateChild(n),r);c=Ss(e,c,new ka(n),f,i,a,o,s)}})),c}var Os;function Ls(e,t){var n=Go(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Sa(t)&&!n.getImmediateChild(xa(t)).isEmpty())?n.getChild(t):null}function Ds(e,t,n,r){t.type===Oo.MERGE&&null!==t.source.queryId&&(H(Go(e.viewCache_),"We should always have a full cache before handling merges"),H(Ko(e.viewCache_),"Missing event cache, even though we have a server cache"));var i,a,o=e.viewCache_,s=Ts(e.processor_,o,t,n,r);return i=e.processor_,a=s.viewCache,H(a.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),H(a.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed"),H(s.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,Ms(e,s.changes,s.viewCache.eventCache.getNode(),null)}function Ms(e,t,n,r){var i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){var i=[],a=[];return t.forEach((function(t){var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&a.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),qo(e,i,"child_removed",t,r,n),qo(e,i,"child_added",t,r,n),qo(e,i,"child_moved",a,r,n),qo(e,i,"child_changed",t,r,n),qo(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
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
 */var Fs;function zs(e,t,n,r){var i=t.source.queryId;if(null!==i){var a=e.views.get(i);return H(null!=a,"SyncTree gave us an op for an invalid query."),Ds(a,t,n,r)}var o=[],s=!0,u=!1,c=void 0;try{for(var l,f=e.views.values()[Symbol.iterator]();!(s=(l=f.next()).done);s=!0){var h=l.value;o=o.concat(Ds(h,t,n,r))}}catch(e){u=!0,c=e}finally{try{s||null==f.return||f.return()}finally{if(u)throw c}}return o}function js(e,t){var n=null,r=!0,i=!1,a=void 0;try{for(var o,s=e.views.values()[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;n=n||Ls(u,t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}var Ws=function t(n){"use strict";e(l)(this,t),this.listenProvider_=n,this.syncPointTree_=new Jo(null),this.pendingWriteTree_={visibleWrites:Qo.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map};function Us(e,t,n,r,i){return function(e,t,n,r,i){H(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=$o(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?Xs(e,new Wo({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Bs(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=cs(e.pendingWriteTree_,t),i=ls(e.pendingWriteTree_,t);if(i){var a=new Jo(null);return null!=r.snap?a=a.set(ba(),!0):Wi(r.children,(function(e){a=a.set(new ka(e),!0)})),Xs(e,new jo(r.path,a,n))}return[]}function qs(e,t,n){return Xs(e,new Wo({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Hs(e,t,n,r){var i=Ys(e,r);if(null!=i){var a=Js(i),o=a.path,s=a.queryId,u=Ea(o,t);return Qs(e,o,new Wo(Fo(s),u,n))}return[]}function Vs(e,t,n){var r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,(function(e,n){var r=js(n,Ea(e,t));if(r)return r}));return ps(r,t,i,n,!0)}function Xs(e,t){return Ks(t,e.syncPointTree_,null,us(e.pendingWriteTree_,ba()))}function Ks(e,t,n,r){if(Sa(e.path))return Gs(e,t,n,r);var i=t.get(ba());null==n&&null!=i&&(n=js(i,ba()));var a=[],o=xa(e.path),s=e.operationForChild(o),u=t.children.get(o);if(u&&s){var c=n?n.getImmediateChild(o):null,l=xs(r,o);a=a.concat(Ks(s,u,c,l))}return i&&(a=a.concat(zs(i,e,r,n))),a}function Gs(e,t,n,r){var i=t.get(ba());null==n&&null!=i&&(n=js(i,ba()));var a=[];return t.children.inorderTraversal((function(t,i){var o=n?n.getImmediateChild(t):null,s=xs(r,t),u=e.operationForChild(t);u&&(a=a.concat(Gs(u,i,o,s)))})),i&&(a=a.concat(zs(i,e,r,n))),a}function Ys(e,t){return e.tagToQueryMap.get(t)}function Js(e){var t=e.indexOf("$");return H(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ka(e.substr(0,t))}}function Qs(e,t,n){var r=e.syncPointTree_.get(t);return H(r,"Missing sync point for query tag that we're tracking"),zs(r,n,us(e.pendingWriteTree_,t),null)}
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
var $s=function(){"use strict";function t(n){e(l)(this,t),this.node_=n}return e(f)(t,[{key:"getImmediateChild",value:function(e){return new t(this.node_.getImmediateChild(e))}},{key:"node",value:function(){return this.node_}}]),t}(),Zs=function(){"use strict";function t(n,r){e(l)(this,t),this.syncTree_=n,this.path_=r}return e(f)(t,[{key:"getImmediateChild",value:function(e){var n=Na(this.path_,e);return new t(this.syncTree_,n)}},{key:"node",value:function(){return Vs(this.syncTree_,this.path_)}}]),t}(),eu=function(e,t,n){return e&&"object"==typeof e?(H(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?tu(e[".sv"],t,n):"object"==typeof e[".sv"]?nu(e[".sv"],t):void H(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},tu=function(e,t,n){if("timestamp"===e)return n.timestamp;H(!1,"Unexpected server value: "+e)},nu=function(e,t,n){e.hasOwnProperty("increment")||H(!1,"Unexpected server value: "+JSON.stringify(e,null,2));var r=e.increment;"number"!=typeof r&&H(!1,"Unexpected increment value: "+r);var i=t.node();if(H(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;var a=i.getValue();return"number"!=typeof a?r:a+r},ru=function(e,t,n,r){return au(t,new Zs(n,e),r)},iu=function(e,t,n){return au(e,new $s(t),n)};function au(e,t,n){var r,i=e.getPriority().val(),a=eu(i,t.getImmediateChild(".priority"),n);if(e.isLeafNode()){var o=e,s=eu(o.getValue(),t,n);return s!==o.getValue()||a!==o.getPriority().val()?new to(s,po(a)):e}var u=e;return r=u,a!==u.getPriority().val()&&(r=r.updatePriority(new to(a))),u.forEachChild(ao,(function(e,i){var a=au(i,t.getImmediateChild(e),n);a!==i&&(r=r.updateImmediateChild(e,a))})),r}
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
 */var ou=function t(){"use strict";var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{children:{},childCount:0};e(l)(this,t),this.name=n,this.parent=r,this.node=i};function su(e,t){for(var n=t instanceof ka?t:new ka(t),r=e,i=xa(n);null!==i;){var a=Ie(r.node.children,i)||{children:{},childCount:0};r=new ou(i,r,a),i=xa(n=wa(n))}return r}function uu(e){return e.node.value}function cu(e,t){e.node.value=t,pu(e)}function lu(e){return e.node.childCount>0}function fu(e,t){Wi(e.node.children,(function(n,r){t(new ou(n,e,r))}))}function hu(e,t,n,r){n&&!r&&t(e),fu(e,(function(e){hu(e,t,!0,r)})),n&&r&&t(e)}function du(e){return new ka(null===e.parent?e.name:du(e.parent)+"/"+e.name)}function pu(e){null!==e.parent&&function(e,t,n){var r=function(e){return void 0===uu(e)&&!lu(e)}(n),i=we(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,pu(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,pu(e))}
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
 */(e.parent,e.name,e)}var vu=/[\[\].#$\/\u0000-\u001F\u007F]/,mu=/[\[\].#$\u0000-\u001F\u007F]/,yu=10485760,gu=function(e){return"string"==typeof e&&0!==e.length&&!vu.test(e)},ku=function(e){return"string"==typeof e&&0!==e.length&&!mu.test(e)},bu=function(e,t,n){var r=n instanceof ka?new Pa(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+La(r));if("function"==typeof t)throw new Error(e+"contains a function "+La(r)+" with contents = "+t.toString());if(Pi(t))throw new Error(e+"contains "+t.toString()+" "+La(r));if("string"==typeof t&&t.length>3495253.3333333335&&Fe(t)>yu)throw new Error(e+"contains a string greater than "+"10485760 utf8 bytes "+La(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){var i=!1,a=!1;if(Wi(t,(function(t,n){if(".value"===t)i=!0;else if(".priority"!==t&&".sv"!==t&&(a=!0,!gu(t)))throw new Error(e+" contains an invalid key ("+t+") "+La(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,s;s=t,(o=r).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(s),o.byteLength_+=Fe(s),Oa(o),bu(e,n,r),function(e){var t=e.parts_.pop();e.byteLength_-=Fe(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),i&&a)throw new Error(e+' contains ".value" child '+La(r)+" in addition to actual children.")}},xu=function(e,t){var n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!gu(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),ku(e)}(n))throw new Error(De(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')},_u=function t(){"use strict";e(l)(this,t),this.eventLists_=[],this.recursionDepth_=0};function wu(e,t){for(var n=null,r=0;r<t.length;r++){var i=t[r],a=i.getPath();null===n||Ra(a,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:a}),n.events.push(i)}n&&e.eventLists_.push(n)}function Iu(e,t,n){wu(e,n),Cu(e,(function(e){return Aa(e,t)||Aa(t,e)}))}function Cu(e,t){e.recursionDepth_++;for(var n=!0,r=0;r<e.eventLists_.length;r++){var i=e.eventLists_[r];if(i)t(i.path)?(Tu(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}n&&(e.eventLists_=[]),e.recursionDepth_--}function Tu(e){for(var t=0;t<e.events.length;t++){var n=e.events[t];if(null!==n){e.events[t]=null;var r=n.getEventRunner();Ii&&Ni("event: "+n.toString()),Xi(r)}}}
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
 */var Nu="repo_interrupt",Su=function(){"use strict";function t(n,r,i,a){e(l)(this,t),this.repoInfo_=n,this.forceRestClient_=r,this.authTokenProvider_=i,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new _u,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ro(),this.transactionQueueTree_=new ou,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}return e(f)(t,[{key:"toString",value:function(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}]),t}();function Eu(e,t,n){if(e.stats_=oa(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new So(e.repoInfo_,(function(t,n,r,i){Pu(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((function(){return Ou(e,!0)}),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{be(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Fa(e.repoInfo_,t,(function(t,n,r,i){Pu(e,t,n,r,i)}),(function(t){Ou(e,t)}),(function(t){!function(e,t){Wi(t,(function(t,n){Lu(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}var r,i,a;e.authTokenProvider_.addTokenChangeListener((function(t){e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((function(t){e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=(r=e.repoInfo_,i=function(){return new Mo(e.stats_,e.server_)},a=r.toString(),aa[a]||(aa[a]=i()),aa[a]),e.infoData_=new Eo,e.infoSyncTree_=new Ws({startListening:function(t,n,r,i){var a=[],o=e.infoData_.getNode(t._path);return o.isEmpty()||(a=qs(e.infoSyncTree_,t._path,o),setTimeout((function(){i("ok")}),0)),a},stopListening:function(){}}),Lu(e,"connected",!1),e.serverSyncTree_=new Ws({startListening:function(t,n,r,i){return e.server_.listen(t,r,n,(function(n,r){var a=i(n,r);Iu(e.eventQueue_,t._path,a)})),[]},stopListening:function(t,n){e.server_.unlisten(t,n)}})}function Ru(e){var t=e.infoData_.getNode(new ka(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Au(e){return(t=(t={timestamp:Ru(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function Pu(e,t,n,r,i){e.dataUpdateCount++;var a=new ka(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;var o=[];if(i)if(r){var s=Te(n,(function(e){return po(e)}));o=function(e,t,n,r){var i=Ys(e,r);if(i){var a=Js(i),o=a.path,s=a.queryId,u=Ea(o,t),c=Jo.fromObject(n);return Qs(e,o,new Uo(Fo(s),u,c))}return[]}(e.serverSyncTree_,a,s,i)}else{var u=po(n);o=Hs(e.serverSyncTree_,a,u,i)}else if(r){var c=Te(n,(function(e){return po(e)}));o=function(e,t,n){var r=Jo.fromObject(n);return Xs(e,new Uo({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,a,c)}else{var l=po(n);o=qs(e.serverSyncTree_,a,l)}var f=a;o.length>0&&(f=Uu(e,a)),Iu(e.eventQueue_,f,o)}function Ou(e,t){Lu(e,"connected",t),!1===t&&function(e){Fu(e,"onDisconnectEvents");var t=Au(e),n=Ro();Po(e.onDisconnect_,ba(),(function(r,i){var a=ru(r,i,e.serverSyncTree_,t);Ao(n,r,a)}));var r=[];Po(n,ba(),(function(t,n){r=r.concat(qs(e.serverSyncTree_,t,n));var i=Xu(e,t);Uu(e,i)})),e.onDisconnect_=Ro(),Iu(e.eventQueue_,ba(),r)}(e)}function Lu(e,t,n){var r=new ka("/.info/"+t),i=po(n);e.infoData_.updateSnapshot(r,i);var a=qs(e.infoSyncTree_,r,i);Iu(e.eventQueue_,r,a)}function Du(e){return e.nextWriteId_++}function Mu(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Nu)}function Fu(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a="";t.persistentConnection_&&(a=t.persistentConnection_.id+":"),Ni.apply(void 0,[a].concat(e(p)(r)))}function zu(e,t,n){return Vs(e.serverSyncTree_,t,n)||fo.EMPTY_NODE}function ju(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.transactionQueueTree_;if(t||Vu(e,t),uu(t)){var n=qu(e,t);H(n.length>0,"Sending zero length transaction queue");var r=n.every((function(e){return 0===e.status}));r&&Wu(e,du(t),n)}else lu(t)&&fu(t,(function(t){ju(e,t)}))}function Wu(e,t,n){for(var r=n.map((function(e){return e.currentWriteId})),i=zu(e,t,r),a=i,o=i.hash(),s=0;s<n.length;s++){var u=n[s];H(0===u.status,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;var c=Ea(t,u.path);a=a.updateChild(c,u.currentOutputSnapshotRaw)}var l=a.val(!0),f=t;e.server_.put(f.toString(),l,(function(r){Fu(e,"transaction put response",{path:f.toString(),status:r});var i=[];if("ok"===r){for(var a=function(t){n[t].status=2,i=i.concat(Bs(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&o.push((function(){return n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)})),n[t].unwatcher()},o=[],s=0;s<n.length;s++)a(s);Vu(e,su(e.transactionQueueTree_,t)),ju(e,e.transactionQueueTree_),Iu(e.eventQueue_,t,i);for(var u=0;u<o.length;u++)Xi(o[u])}else{if("datastale"===r)for(var c=0;c<n.length;c++)3===n[c].status?n[c].status=4:n[c].status=0;else{Ai("transaction at "+f.toString()+" failed: "+r);for(var l=0;l<n.length;l++)n[l].status=4,n[l].abortReason=r}Uu(e,t)}}),o)}function Uu(e,t){var n=Bu(e,t),r=du(n);return function(e,t,n){var r=function(r){var s,u=t[r],c=Ea(n,u.path),l=!1,f=void 0;if(H(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===u.status)l=!0,f=u.abortReason,a=a.concat(Bs(e.serverSyncTree_,u.currentWriteId,!0));else if(0===u.status)if(u.retryCount>=25)l=!0,f="maxretry",a=a.concat(Bs(e.serverSyncTree_,u.currentWriteId,!0));else{var h=zu(e,u.path,o);u.currentInputSnapshot=h;var d=t[r].update(h.val());if(void 0!==d){bu("transaction failed: Data returned ",d,u.path);var p=po(d);"object"==typeof d&&null!=d&&we(d,".priority")||(p=p.updatePriority(h.getPriority()));var v=u.currentWriteId,m=Au(e),y=iu(p,h,m);u.currentOutputSnapshotRaw=p,u.currentOutputSnapshotResolved=y,u.currentWriteId=Du(e),o.splice(o.indexOf(v),1),a=(a=a.concat(Us(e.serverSyncTree_,u.path,y,u.currentWriteId,u.applyLocally))).concat(Bs(e.serverSyncTree_,v,!0))}else l=!0,f="nodata",a=a.concat(Bs(e.serverSyncTree_,u.currentWriteId,!0))}Iu(e.eventQueue_,n,a),a=[],l&&(t[r].status=2,s=t[r].unwatcher,setTimeout(s,Math.floor(0)),t[r].onComplete&&("nodata"===f?i.push((function(){return t[r].onComplete(null,!1,t[r].currentInputSnapshot)})):i.push((function(){return t[r].onComplete(new Error(f),!1,null)}))))};if(0===t.length)return;for(var i=[],a=[],o=t.filter((function(e){return 0===e.status})).map((function(e){return e.currentWriteId})),s=0;s<t.length;s++)r(s);Vu(e,e.transactionQueueTree_);for(var u=0;u<i.length;u++)Xi(i[u]);ju(e,e.transactionQueueTree_)}(e,qu(e,n),r),r}function Bu(e,t){var n,r=e.transactionQueueTree_;for(n=xa(t);null!==n&&void 0===uu(r);)r=su(r,n),n=xa(t=wa(t));return r}function qu(e,t){var n=[];return Hu(e,t,n),n.sort((function(e,t){return e.order-t.order})),n}function Hu(e,t,n){var r=uu(t);if(r)for(var i=0;i<r.length;i++)n.push(r[i]);fu(t,(function(t){Hu(e,t,n)}))}function Vu(e,t){var n=uu(t);if(n){for(var r=0,i=0;i<n.length;i++)2!==n[i].status&&(n[r]=n[i],r++);n.length=r,cu(t,n.length>0?n:void 0)}fu(t,(function(t){Vu(e,t)}))}function Xu(e,t){var n=du(Bu(e,t)),r=su(e.transactionQueueTree_,t);return function(e,t,n){for(var r=n?e:e.parent;null!==r;){if(t(r))return!0;r=r.parent}}(r,(function(t){Ku(e,t)})),Ku(e,r),hu(r,(function(t){Ku(e,t)})),n}function Ku(e,t){var n=uu(t);if(n){for(var r=[],i=[],a=-1,o=0;o<n.length;o++)3===n[o].status||(1===n[o].status?(H(a===o-1,"All SENT items should be at beginning of queue."),a=o,n[o].status=3,n[o].abortReason="set"):(H(0===n[o].status,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Bs(e.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));-1===a?cu(t,void 0):n.length=a+1,Iu(e.eventQueue_,du(t),i);for(var s=0;s<r.length;s++)Xi(r[s])}}
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
 */var Gu=function(e,t){var n=Yu(e),r=n.namespace;"firebase.com"===n.domain&&Ri(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||Ri("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Ai("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");var i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ta(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new ka(n.pathString)}},Yu=function(e){var t="",n="",r="",i="",a="",o=!0,s="https",u=443;if("string"==typeof e){var c=e.indexOf("//");c>=0&&(s=e.substring(0,c-1),e=e.substring(c+2));var l=e.indexOf("/");-1===l&&(l=e.length);var f=e.indexOf("?");-1===f&&(f=e.length),t=e.substring(0,Math.min(l,f)),l<f&&(i=function(e){for(var t="",n=e.split("/"),r=0;r<n.length;r++)if(n[r].length>0){var i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(l,f)));var h=function(e){var t={};"?"===e.charAt(0)&&(e=e.substring(1));var n=!0,r=!1,i=void 0;try{for(var a,o=e.split("&")[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(0!==s.length){var u=s.split("=");2===u.length?t[decodeURIComponent(u[0])]=decodeURIComponent(u[1]):Ai("Invalid query segment '".concat(s,"' in query '").concat(e,"'"))}}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return t}(e.substring(Math.min(e.length,f)));(c=t.indexOf(":"))>=0?(o="https"===s||"wss"===s,u=parseInt(t.substring(c+1),10)):c=t.length;var d=t.slice(0,c);if("localhost"===d.toLowerCase())n="localhost";else if(d.split(".").length<=2)n=d;else{var p=t.indexOf(".");r=t.substring(0,p).toLowerCase(),n=t.substring(p+1),a=r}"ns"in h&&(a=h.ns)}return{host:t,port:u,domain:n,subdomain:r,secure:o,scheme:s,pathString:i,namespace:a}},Ju=function(){"use strict";function t(n,r,i,a){e(l)(this,t),this._repo=n,this._path=r,this._queryParams=i,this._orderByCalled=a}return e(f)(t,[{key:"key",get:function(){return Sa(this._path)?null:Ia(this._path)}},{key:"ref",get:function(){return new Qu(this._repo,this._path)}},{key:"_queryIdentifier",get:function(){var e=No(this._queryParams),t=zi(e);return"{}"===t?"default":t}},{key:"_queryObject",get:function(){return No(this._queryParams)}},{key:"isEqual",value:function(e){if(!((e=We(e))instanceof t))return!1;var n=this._repo===e._repo,r=Ra(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}},{key:"toJSON",value:function(){return this.toString()}},{key:"toString",value:function(){return this._repo.toString()+function(e){for(var t="",n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}]),t}();var Qu=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t,i){return e(l)(this,r),n.call(this,t,i,new Co,!1)}return e(f)(r,[{key:"parent",get:function(){var e=Ta(this._path);return null===e?null:new r(this._repo,e)}},{key:"root",get:function(){for(var e=this;null!==e.parent;)e=e.parent;return e}}]),r}(Ju);!function(e){H(!Os,"__referenceConstructor has already been defined"),Os=e}(Qu),function(e){H(!Fs,"__referenceConstructor has already been defined"),Fs=e}(Qu);
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
var $u={},Zu=!1;function ec(e,t,n,r){e.repoInfo_=new ta("".concat(t,":").concat(n),!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams),r&&(e.authTokenProvider_=r)}function tc(e,t,n,r,i){var a=r||e.options.databaseURL;void 0===a&&(e.options.projectId||Ri("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ni("Using default host for project ",e.options.projectId),a="".concat(e.options.projectId,"-default-rtdb.firebaseio.com"));var o,s=Gu(a,i),u=s.repoInfo,c=void 0;void 0!==C&&C.env&&(c=C.env.FIREBASE_DATABASE_EMULATOR_HOST),c?(o=!0,a="http://".concat(c,"?ns=").concat(u.namespace),u=(s=Gu(a,i)).repoInfo):o=!s.repoInfo.secure;var l=i&&o?new Ji(Ji.OWNER):new Yi(e.name,e.options,t);xu("Invalid Firebase Database URL",s),Sa(s.path)||Ri("Database URL must point to the root of a Firebase Database (not including a child path).");var f=function(e,t,n,r){var i=$u[t.name];i||(i={},$u[t.name]=i);var a=i[e.toURLString()];a&&Ri("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return a=new Su(e,Zu,n,r),i[e.toURLString()]=a,a}(u,e,l,new Gi(e.name,n));return new nc(f,e)}var nc=function(){"use strict";function t(n,r){e(l)(this,t),this._repoInternal=n,this.app=r,this.type="database",this._instanceStarted=!1}return e(f)(t,[{key:"_repo",get:function(){return this._instanceStarted||(Eu(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}},{key:"_root",get:function(){return this._rootInternal||(this._rootInternal=new Qu(this._repo,ba())),this._rootInternal}},{key:"_delete",value:function(){var e,t,n;return null!==this._rootInternal&&(e=this._repo,t=this.app.name,(n=$u[t])&&n[e.key]===e||Ri("Database ".concat(t,"(").concat(e.repoInfo_,") has already been deleted.")),Mu(e),delete n[e.key],this._repoInternal=null,this._rootInternal=null),Promise.resolve()}},{key:"_checkNotDeleted",value:function(e){null===this._rootInternal&&Ri("Cannot call "+e+" on a deleted database.")}}]),t}();function rc(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:zt(),n=arguments.length>1?arguments[1]:void 0,r=Pt(t,"database").getImmediate({identifier:n}),i=le("database");return i&&ic.apply(void 0,[r].concat(e(p)(i))),r}function ic(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};(e=We(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&Ri("Cannot call useEmulator() after instance has already been initialized.");var i=e._repoInternal,a=void 0;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Ri('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),a=new Ji(Ji.OWNER);else if(r.mockUserToken){var o="string"==typeof r.mockUserToken?r.mockUserToken:pe(r.mockUserToken,e.app.options.projectId);a=new Ji(o)}ec(i,t,n,a)}Fa.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Fa.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
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
function(e){di=Mt,At(new Ue("database",(function(e,t){var n=t.instanceIdentifier;return tc(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),n)}),"PUBLIC").setMultipleInstances(!0)),jt(fi,hi,e),jt(fi,hi,"esm2017")}
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
 */();c=i("bpxeT"),l=i("8MBJY"),i("ge8co"),f=i("a2hTj");var ac={};Object.defineProperty(ac,"__esModule",{value:!0}),ac.default=function(e,t,n){return sc(e,t,n)};var oc=function(e){return e&&e.__esModule?e:{default:e}}(i("2mz0K"));function sc(e,t,n){return(sc="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=oc.default(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n||e):i.value}})(e,t,n)}var uc=i("fVNic"),cc=(y=i("eYQtU"),i("jmhxu")),lc=(v=i("1t1Wn"),p=i("8nrFW"),li=i("l5bVx"),S=i("2MbLg"),h=i("2TvXO"),function(){"use strict";function t(n){e(l)(this,t),this.uid=n}return e(f)(t,[{key:"isAuthenticated",value:function(){return null!=this.uid}},{key:"toKey",value:function(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}},{key:"isEqual",value:function(e){return e.uid===this.uid}}]),t}());lc.UNAUTHENTICATED=new lc(null),lc.GOOGLE_CREDENTIALS=new lc("google-credentials-uid"),lc.FIRST_PARTY=new lc("first-party-uid"),lc.MOCK_USER=new lc("mock-user");
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
var fc="9.14.0",hc=new Ze("@firebase/firestore");
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
 */function dc(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(hc.logLevel<=He.DEBUG){var a,o=r.map(vc);(a=hc).debug.apply(a,["Firestore (".concat(fc,"): ").concat(t)].concat(e(p)(o)))}}function pc(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(hc.logLevel<=He.ERROR){var a,o=r.map(vc);(a=hc).error.apply(a,["Firestore (".concat(fc,"): ").concat(t)].concat(e(p)(o)))}}function vc(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */function mc(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unexpected state",t="FIRESTORE (".concat(fc,") INTERNAL ASSERTION FAILED: ")+e;throw pc(t),new Error(t)}function yc(e,t){e||mc()}
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
var gc="invalid-argument",kc="failed-precondition",bc=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t,i){var a;return e(l)(this,r),(a=n.call(this,t,i)).code=t,a.message=i,a.toString=function(){return"".concat(a.name,": [code=").concat(a.code,"]: ").concat(a.message)},e(cc)(a)}return r}(ve),xc=function t(n,r){"use strict";e(l)(this,t),this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer ".concat(n))},_c=function(){"use strict";function t(){e(l)(this,t)}return e(f)(t,[{key:"getToken",value:function(){return Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(lc.UNAUTHENTICATED)}))}},{key:"shutdown",value:function(){}}]),t}(),wc=function(){"use strict";function t(n){var r=this;e(l)(this,t),this.auth=null,n.onInit((function(e){r.auth=e}))}return e(f)(t,[{key:"getToken",value:function(){var e=this;return this.auth?this.auth.getToken().then((function(t){return t?(yc("string"==typeof t.accessToken),new xc(t.accessToken,new lc(e.auth.getUid()))):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){}},{key:"shutdown",value:function(){}}]),t}(),Ic=function(){"use strict";function t(n,r,i,a){e(l)(this,t),this.t=n,this.i=r,this.o=i,this.u=a,this.type="FirstParty",this.user=lc.FIRST_PARTY,this.h=new Map}return e(f)(t,[{key:"l",value:function(){return this.u?this.u():(yc(!("object"!=typeof this.t||null===this.t||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}},{key:"headers",get:function(){this.h.set("X-Goog-AuthUser",this.i);var e=this.l();return e&&this.h.set("Authorization",e),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}}]),t}(),Cc=function(){"use strict";function t(n,r,i,a){e(l)(this,t),this.t=n,this.i=r,this.o=i,this.u=a}return e(f)(t,[{key:"getToken",value:function(){return Promise.resolve(new Ic(this.t,this.i,this.o,this.u))}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(lc.FIRST_PARTY)}))}},{key:"shutdown",value:function(){}},{key:"invalidateToken",value:function(){}}]),t}(),Tc=function t(n){"use strict";e(l)(this,t),this.value=n,this.type="AppCheck",this.headers=new Map,n&&n.length>0&&this.headers.set("x-firebase-appcheck",this.value)},Nc=function(){"use strict";function t(n){var r=this;e(l)(this,t),this.m=n,this.appCheck=null,n.onInit((function(e){r.appCheck=e}))}return e(f)(t,[{key:"getToken",value:function(){return this.appCheck?this.appCheck.getToken().then((function(e){return e?(yc("string"==typeof e.token),new Tc(e.token)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){}},{key:"shutdown",value:function(){}}]),t}(),Sc=function(){"use strict";function t(n,r){e(l)(this,t),this.projectId=n,this.database=r||"(default)"}return e(f)(t,[{key:"isDefaultDatabase",get:function(){return"(default)"===this.database}},{key:"isEqual",value:function(e){return e instanceof t&&e.projectId===this.projectId&&e.database===this.database}}],[{key:"empty",value:function(){return new t("","")}}]),t}();
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
var Ec,Rc;
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
(Rc=Ec||(Ec={}))[Rc.OK=0]="OK",Rc[Rc.CANCELLED=1]="CANCELLED",Rc[Rc.UNKNOWN=2]="UNKNOWN",Rc[Rc.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Rc[Rc.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Rc[Rc.NOT_FOUND=5]="NOT_FOUND",Rc[Rc.ALREADY_EXISTS=6]="ALREADY_EXISTS",Rc[Rc.PERMISSION_DENIED=7]="PERMISSION_DENIED",Rc[Rc.UNAUTHENTICATED=16]="UNAUTHENTICATED",Rc[Rc.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Rc[Rc.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Rc[Rc.ABORTED=10]="ABORTED",Rc[Rc.OUT_OF_RANGE=11]="OUT_OF_RANGE",Rc[Rc.UNIMPLEMENTED=12]="UNIMPLEMENTED",Rc[Rc.INTERNAL=13]="INTERNAL",Rc[Rc.UNAVAILABLE=14]="UNAVAILABLE",Rc[Rc.DATA_LOSS=15]="DATA_LOSS";function Ac(e,t){return e<t?-1:e>t?1:0}
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
var Pc=function(){"use strict";function t(n,r,i,a,o){e(l)(this,t),this.key=n,this.value=r,this.color=null!=i?i:t.RED,this.left=null!=a?a:t.EMPTY,this.right=null!=o?o:t.EMPTY,this.size=this.left.size+1+this.right.size}return e(f)(t,[{key:"copy",value:function(e,n,r,i,a){return new t(null!=e?e:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=a?a:this.right)}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min",value:function(){return this.left.isEmpty()?this:this.left.min()}},{key:"minKey",value:function(){return this.min().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}},{key:"removeMin",value:function(){if(this.left.isEmpty())return t.EMPTY;var e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}},{key:"remove",value:function(e,n){var r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===n(e,i.key)){if(i.right.isEmpty())return t.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}},{key:"isRed",value:function(){return this.color}},{key:"fixUp",value:function(){var e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}},{key:"moveRedLeft",value:function(){var e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}},{key:"moveRedRight",value:function(){var e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}},{key:"rotateLeft",value:function(){var e=this.copy(null,null,t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}},{key:"rotateRight",value:function(){var e=this.copy(null,null,t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}},{key:"colorFlip",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth",value:function(){var e=this.check();return Math.pow(2,e)<=this.size+1}},{key:"check",value:function(){if(this.isRed()&&this.left.isRed())throw mc();if(this.right.isRed())throw mc();var e=this.left.check();if(e!==this.right.check())throw mc();return e+(this.isRed()?0:1)}}]),t}();Pc.EMPTY=null,Pc.RED=!0,Pc.BLACK=!1,Pc.EMPTY=new(function(){"use strict";function t(){e(l)(this,t),this.size=0}return e(f)(t,[{key:"key",get:function(){throw mc()}},{key:"value",get:function(){throw mc()}},{key:"color",get:function(){throw mc()}},{key:"left",get:function(){throw mc()}},{key:"right",get:function(){throw mc()}},{key:"copy",value:function(e,t,n,r,i){return this}},{key:"insert",value:function(e,t,n){return new Pc(e,t)}},{key:"remove",value:function(e,t){return this}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"isRed",value:function(){return!1}},{key:"checkMaxDepth",value:function(){return!0}},{key:"check",value:function(){return 0}}]),t}());
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
var Oc=Symbol.iterator,Lc=function(){"use strict";function t(n){e(l)(this,t),this.binaryString=n}return e(f)(t,[{key:Oc,value:function(){var e=this,t=0;return{next:function(){return t<e.binaryString.length?{value:e.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}}},{key:"toBase64",value:function(){var e;return e=this.binaryString,btoa(e)}},{key:"toUint8Array",value:function(){return function(e){for(var t=new Uint8Array(e.length),n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}},{key:"approximateByteSize",value:function(){return 2*this.binaryString.length}},{key:"compareTo",value:function(e){return Ac(this.binaryString,e.binaryString)}},{key:"isEqual",value:function(e){return this.binaryString===e.binaryString}}],[{key:"fromBase64String",value:function(e){return new t(atob(e))}},{key:"fromUint8Array",value:function(e){var n=function(e){for(var t="",n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new t(n)}}]),t}();Lc.EMPTY_BYTE_STRING=new Lc("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
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
var Dc=new Map;var Mc=function(){"use strict";function t(n){var r;if(e(l)(this,t),void 0===n.host){if(void 0!==n.ssl)throw new bc(gc,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=n.host,this.ssl=null===(r=n.ssl)||void 0===r||r;if(this.credentials=n.credentials,this.ignoreUndefinedProperties=!!n.ignoreUndefinedProperties,void 0===n.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==n.cacheSizeBytes&&n.cacheSizeBytes<1048576)throw new bc(gc,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=n.cacheSizeBytes}this.experimentalForceLongPolling=!!n.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!n.experimentalAutoDetectLongPolling,this.useFetchStreams=!!n.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new bc(gc,"".concat("experimentalForceLongPolling"," and ").concat("experimentalAutoDetectLongPolling"," cannot be used together."))}(0,n.experimentalForceLongPolling,0,n.experimentalAutoDetectLongPolling)}return e(f)(t,[{key:"isEqual",value:function(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}]),t}(),Fc=function(){"use strict";function t(n,r,i,a){e(l)(this,t),this._authCredentials=n,this._appCheckCredentials=r,this._databaseId=i,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mc({}),this._settingsFrozen=!1}return e(f)(t,[{key:"app",get:function(){if(!this._app)throw new bc(kc,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}},{key:"_initialized",get:function(){return this._settingsFrozen}},{key:"_terminated",get:function(){return void 0!==this._terminateTask}},{key:"_setSettings",value:function(e){if(this._settingsFrozen)throw new bc(kc,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mc(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new _c;switch(e.type){case"gapi":var t=e.client;return new Cc(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new bc(gc,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}},{key:"_getSettings",value:function(){return this._settings}},{key:"_freezeSettings",value:function(){return this._settingsFrozen=!0,this._settings}},{key:"_delete",value:function(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}},{key:"toJSON",value:function(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}},{key:"_terminate",value:function(){return function(e){var t=Dc.get(e);t&&(dc("ComponentProvider","Removing Datastore"),Dc.delete(e),t.terminate())}(this),Promise.resolve()}}]),t}();
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
 */new RegExp("[~\\*/\\[\\]]");!function(e){fc=e}("".concat(Mt,"_lite")),At(new Ue("firestore/lite",(function(e,t){var n=t.instanceIdentifier,r=t.options,i=e.getProvider("app").getImmediate(),a=new Fc(new wc(e.getProvider("auth-internal")),new Nc(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new bc(gc,'"projectId" not provided in firebase.initializeApp.');return new Sc(e.options.projectId,t)}(i,n),i);return r&&a._setSettings(r),a}),"PUBLIC").setMultipleInstances(!0)),jt("firestore-lite","3.7.3",""),jt("firestore-lite","3.7.3","esm2017");m=i("ds8z5"),c=i("bpxeT"),l=i("8MBJY"),f=i("a2hTj"),d=i("hKHmD"),uc=i("fVNic"),y=i("eYQtU"),v=i("1t1Wn"),p=i("8nrFW"),S=i("2MbLg"),h=i("2TvXO");function zc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function jc(){return e(d)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var Wc=jc,Uc=new me("auth","Firebase",jc()),Bc=new Ze("@firebase/auth");function qc(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;Bc.logLevel<=He.ERROR&&(a=Bc).error.apply(a,["Auth (".concat(Mt,"): ").concat(t)].concat(e(p)(r)))}
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
 */function Hc(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];throw Kc.apply(void 0,[t].concat(e(p)(r)))}function Vc(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return Kc.apply(void 0,[t].concat(e(p)(r)))}function Xc(t,n,r){var i=Object.assign(Object.assign({},Wc()),e(d)({},n,r));return new me("auth","Firebase",i).create(n,{appName:t.name})}function Kc(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;if("string"!=typeof t){var o,s=r[0],u=e(p)(r.slice(1));return u[0]&&(u[0].appName=t.name),(o=t._errorFactory).create.apply(o,[s].concat(e(p)(u)))}return(a=Uc).create.apply(a,[t].concat(e(p)(r)))}function Gc(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(!t)throw Kc.apply(void 0,[n].concat(e(p)(i)))}function Yc(e){var t="INTERNAL ASSERTION FAILED: "+e;throw qc(t),new Error(t)}function Jc(e,t){e||Yc(t)}
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
 */var Qc=new Map;function $c(e){Jc(e instanceof Function,"Expected a class definition");var t=Qc.get(e);return t?(Jc(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Qc.set(e,t),t)}
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
 */function Zc(e,t){var n=Pt(e,"auth");if(n.isInitialized()){var r=n.getImmediate();if(Ne(n.getOptions(),null!=t?t:{}))return r;Hc(r,"already-initialized")}return n.initialize({options:t})}
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
function el(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function tl(){return"http:"===nl()||"https:"===nl()}function nl(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
var rl=function(){"use strict";function t(n,r){e(l)(this,t),this.shortDelay=n,this.longDelay=r,Jc(r>n,"Short delay should be less than long delay!"),this.isMobile=ee()||ne()}return e(f)(t,[{key:"get",value:function(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(tl()||te()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}]),t}();
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
 */function il(e,t){Jc(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
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
 */var al,ol=function(){"use strict";function t(){e(l)(this,t)}return e(f)(t,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Yc("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Yc("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Yc("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),t}(),sl=(al={},e(d)(al,"CREDENTIAL_MISMATCH","custom-token-mismatch"),e(d)(al,"MISSING_CUSTOM_TOKEN","internal-error"),e(d)(al,"INVALID_IDENTIFIER","invalid-email"),e(d)(al,"MISSING_CONTINUE_URI","internal-error"),e(d)(al,"INVALID_PASSWORD","wrong-password"),e(d)(al,"MISSING_PASSWORD","internal-error"),e(d)(al,"EMAIL_EXISTS","email-already-in-use"),e(d)(al,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),e(d)(al,"INVALID_IDP_RESPONSE","invalid-credential"),e(d)(al,"INVALID_PENDING_TOKEN","invalid-credential"),e(d)(al,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),e(d)(al,"MISSING_REQ_TYPE","internal-error"),e(d)(al,"EMAIL_NOT_FOUND","user-not-found"),e(d)(al,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),e(d)(al,"EXPIRED_OOB_CODE","expired-action-code"),e(d)(al,"INVALID_OOB_CODE","invalid-action-code"),e(d)(al,"MISSING_OOB_CODE","internal-error"),e(d)(al,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),e(d)(al,"INVALID_ID_TOKEN","invalid-user-token"),e(d)(al,"TOKEN_EXPIRED","user-token-expired"),e(d)(al,"USER_NOT_FOUND","user-token-expired"),e(d)(al,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),e(d)(al,"INVALID_CODE","invalid-verification-code"),e(d)(al,"INVALID_SESSION_INFO","invalid-verification-id"),e(d)(al,"INVALID_TEMPORARY_PROOF","invalid-credential"),e(d)(al,"MISSING_SESSION_INFO","missing-verification-id"),e(d)(al,"SESSION_EXPIRED","code-expired"),e(d)(al,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),e(d)(al,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),e(d)(al,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),e(d)(al,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),e(d)(al,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),e(d)(al,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),e(d)(al,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),e(d)(al,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),e(d)(al,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),e(d)(al,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),e(d)(al,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),al),ul=new rl(3e4,6e4);function cl(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function ll(e,t,n,r){return fl.apply(this,arguments)}function fl(){return fl=e(c)(e(h).mark((function t(n,r,i,a){var o,s=arguments;return e(h).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=s.length>4&&void 0!==s[4]?s[4]:{},t.abrupt("return",hl(n,o,e(c)(e(h).mark((function t(){var o,s,u,c;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},s={},a&&("GET"===r?s=a:o={body:JSON.stringify(a)}),u=Ee(Object.assign({key:n.config.apiKey},s)).slice(1),e.next=6,n._getAdditionalHeaders();case 6:return(c=e.sent)["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),e.abrupt("return",ol.fetch()(ml(n,n.config.apiHost,i,u),Object.assign({method:r,headers:c,referrerPolicy:"no-referrer"},o)));case 10:case"end":return e.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)}))),fl.apply(this,arguments)}function hl(e,t,n){return dl.apply(this,arguments)}function dl(){return(dl=e(c)(e(h).mark((function t(n,r,i){var a,o,s,u,c,l,f,d,p;return e(h).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n._canInitEmulator=!1,a=Object.assign(Object.assign({},sl),r),t.prev=2,o=new yl(n),t.next=6,Promise.race([i(),o.promise]);case 6:return s=t.sent,o.clearNetworkTimeout(),t.next=10,s.json();case 10:if(!("needConfirmation"in(u=t.sent))){t.next=13;break}throw gl(n,"account-exists-with-different-credential",u);case 13:if(!s.ok||"errorMessage"in u){t.next=17;break}return t.abrupt("return",u);case 17:if(c=s.ok?u.errorMessage:u.error.message,l=e(v)(c.split(" : "),2),f=l[0],d=l[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==f){t.next=23;break}throw gl(n,"credential-already-in-use",u);case 23:if("EMAIL_EXISTS"!==f){t.next=27;break}throw gl(n,"email-already-in-use",u);case 27:if("USER_DISABLED"!==f){t.next=29;break}throw gl(n,"user-disabled",u);case 29:if(p=a[f]||f.toLowerCase().replace(/[_\s]+/g,"-"),!d){t.next=34;break}throw Xc(n,p,d);case 34:Hc(n,p);case 35:t.next=42;break;case 37:if(t.prev=37,t.t0=t.catch(2),!(t.t0 instanceof ve)){t.next=41;break}throw t.t0;case 41:Hc(n,"network-request-failed");case 42:case"end":return t.stop()}}),t,null,[[2,37]])})))).apply(this,arguments)}function pl(e,t,n,r){return vl.apply(this,arguments)}function vl(){return vl=e(c)(e(h).mark((function t(n,r,i,a){var o,s,u=arguments;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=u.length>4&&void 0!==u[4]?u[4]:{},e.next=3,ll(n,r,i,a,o);case 3:return"mfaPendingCredential"in(s=e.sent)&&Hc(n,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),t)}))),vl.apply(this,arguments)}function ml(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?il(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var yl=function(){"use strict";function t(n){var r=this;e(l)(this,t),this.auth=n,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(Vc(n.auth,"network-request-failed"))}),ul.get())}))}return e(f)(t,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),t}();function gl(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=Vc(e,t,r);return i.customData._tokenResponse=n,i}function kl(e,t){return bl.apply(this,arguments)}function bl(){return(bl=
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
e(c)(e(h).mark((function t(n,r){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ll(n,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function xl(e,t){return _l.apply(this,arguments)}function _l(){return(_l=e(c)(e(h).mark((function t(n,r){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ll(n,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */function wl(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function Il(){return Il=e(c)(e(h).mark((function t(n){var r,i,a,o,s,u,c=arguments;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]&&c[1],i=We(n),e.next=4,i.getIdToken(r);case 4:return a=e.sent,Gc((o=Tl(a))&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error"),s="object"==typeof o.firebase?o.firebase:void 0,u=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:o,token:a,authTime:wl(Cl(o.auth_time)),issuedAtTime:wl(Cl(o.iat)),expirationTime:wl(Cl(o.exp)),signInProvider:u||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),t)}))),Il.apply(this,arguments)}function Cl(e){return 1e3*Number(e)}function Tl(t){var n,r=e(v)(t.split("."),3),i=r[0],a=r[1],o=r[2];if(void 0===i||void 0===a||void 0===o)return qc("JWT malformed, contained fewer than 3 sections"),null;try{var s=J(a);return s?JSON.parse(s):(qc("Failed to decode base64 JWT payload"),null)}catch(e){return qc("Caught error parsing JWT payload as JSON",null===(n=e)||void 0===n?void 0:n.toString()),null}}function Nl(e,t){return Sl.apply(this,arguments)}function Sl(){return Sl=
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
e(c)(e(h).mark((function t(n,r){var i=arguments;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof ve&&El(e.t0))){e.next=15;break}if(n.auth.currentUser!==n){e.next=15;break}return e.next=15,n.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),t,null,[[3,9]])}))),Sl.apply(this,arguments)}function El(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */var Rl=function(){"use strict";function t(n){e(l)(this,t),this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return e(f)(t,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var n=this.getInterval(t),r=this;this.timerId=setTimeout(e(c)(e(h).mark((function t(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),t)}))),n)}}},{key:"iteration",value:function(){var t=this;return e(c)(e(h).mark((function n(){var r;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,t.user.getIdToken(!0);case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(1),"auth/network-request-failed"===(null===(r=e.t0)||void 0===r?void 0:r.code)&&t.schedule(!0),e.abrupt("return");case 10:t.schedule();case 11:case"end":return e.stop()}}),n,null,[[1,6]])})))()}}]),t}(),Al=function(){"use strict";function t(n,r){e(l)(this,t),this.createdAt=n,this.lastLoginAt=r,this._initializeTime()}return e(f)(t,[{key:"_initializeTime",value:function(){this.lastSignInTime=wl(this.lastLoginAt),this.creationTime=wl(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),t}();
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
 */function Pl(e){return Ol.apply(this,arguments)}function Ol(){return(Ol=
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
e(c)(e(h).mark((function t(n){var r,i,a,o,s,u,c,l,f,d,p;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.auth,e.next=4,n.getIdToken();case 4:return a=e.sent,e.next=7,Nl(n,xl(i,{idToken:a}));case 7:Gc(null==(o=e.sent)?void 0:o.users.length,i,"internal-error"),s=o.users[0],n._notifyReloadListener(s),u=(null===(r=s.providerUserInfo)||void 0===r?void 0:r.length)?Ml(s.providerUserInfo):[],c=Dl(n.providerData,u),l=n.isAnonymous,f=!(n.email&&s.passwordHash||(null==c?void 0:c.length)),d=!!l&&f,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Al(s.createdAt,s.lastLoginAt),isAnonymous:d},Object.assign(n,p);case 18:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ll(){return(Ll=e(c)(e(h).mark((function t(n){var r;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=We(n),e.next=3,Pl(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Dl(t,n){var r=t.filter((function(e){return!n.some((function(t){return t.providerId===e.providerId}))}));return e(p)(r).concat(e(p)(n))}function Ml(e){return e.map((function(e){var t=e.providerId,n=zc(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function Fl(e,t){return zl.apply(this,arguments)}function zl(){return(zl=
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
e(c)(e(h).mark((function t(n,r){var i;return e(h).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,hl(n,{},e(c)(e(h).mark((function t(){var i,a,o,s,u,c;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Ee({grant_type:"refresh_token",refresh_token:r}).slice(1),a=n.config,o=a.tokenApiHost,s=a.apiKey,u=ml(n,o,"/v1/token","key=".concat(s)),e.next=5,n._getAdditionalHeaders();case 5:return(c=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",ol.fetch()(u,{method:"POST",headers:c,body:i}));case 8:case"end":return e.stop()}}),t)}))));case 2:return i=t.sent,t.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
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
 */var jl=function(){"use strict";function t(){e(l)(this,t),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return e(f)(t,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){Gc(e.idToken,"internal-error"),Gc(void 0!==e.idToken,"internal-error"),Gc(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,Gc(n=Tl(t),"internal-error"),Gc(void 0!==n.exp,"internal-error"),Gc(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(c)(e(h).mark((function i(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Gc(!r.accessToken||r.refreshToken,t,"user-token-expired"),n||!r.accessToken||r.isExpired){e.next=3;break}return e.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){e.next=7;break}return e.next=6,r.refresh(t,r.refreshToken);case 6:return e.abrupt("return",r.accessToken);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(t,n){var r=this;return e(c)(e(h).mark((function i(){var a,o,s,u;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Fl(t,n);case 2:a=e.sent,o=a.accessToken,s=a.refreshToken,u=a.expiresIn,r.updateTokensAndExpiration(o,s,Number(u));case 7:case"end":return e.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new t,this.toJSON())}},{key:"_performRefresh",value:function(){return Yc("not implemented")}}],[{key:"fromJSON",value:function(e,n){var r=n.refreshToken,i=n.accessToken,a=n.expirationTime,o=new t;return r&&(Gc("string"==typeof r,"internal-error",{appName:e}),o.refreshToken=r),i&&(Gc("string"==typeof i,"internal-error",{appName:e}),o.accessToken=i),a&&(Gc("number"==typeof a,"internal-error",{appName:e}),o.expirationTime=a),o}}]),t}();
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
 */function Wl(e,t){Gc("string"==typeof e||void 0===e,"internal-error",{appName:t})}var Ul=function(){"use strict";function t(n){e(l)(this,t);var r=n.uid,i=n.auth,a=n.stsTokenManager,o=zc(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Rl(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?e(p)(o.providerData):[],this.metadata=new Al(o.createdAt||void 0,o.lastLoginAt||void 0)}return e(f)(t,[{key:"getIdToken",value:function(t){var n=this;return e(c)(e(h).mark((function r(){var i;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Nl(n,n.stsTokenManager.getToken(n.auth,t));case 2:if(Gc(i=e.sent,n.auth,"internal-error"),n.accessToken===i){e.next=9;break}return n.accessToken=i,e.next=8,n.auth._persistUserIfCurrent(n);case 8:n.auth._notifyListenersIfCurrent(n);case 9:return e.abrupt("return",i);case 10:case"end":return e.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return Il.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return Ll.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(Gc(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(e){return new t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){Gc(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(c)(e(h).mark((function i(){var a;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=!1,t.idToken&&t.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(t),a=!0),!n){e.next=5;break}return e.next=5,Pl(r);case 5:return e.next=7,r.auth._persistUserIfCurrent(r);case 7:a&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return e.stop()}}),i)})))()}},{key:"delete",value:function(){var t=this;return e(c)(e(h).mark((function n(){var r;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:return r=e.sent,e.next=5,Nl(t,kl(t.auth,{idToken:r}));case 5:return t.stsTokenManager.clearRefreshToken(),e.abrupt("return",t.auth.signOut());case 7:case"end":return e.stop()}}),n)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(e,n){var r,i,a,o,s,u,c,l,f=null!==(r=n.displayName)&&void 0!==r?r:void 0,h=null!==(i=n.email)&&void 0!==i?i:void 0,d=null!==(a=n.phoneNumber)&&void 0!==a?a:void 0,p=null!==(o=n.photoURL)&&void 0!==o?o:void 0,v=null!==(s=n.tenantId)&&void 0!==s?s:void 0,m=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,y=null!==(c=n.createdAt)&&void 0!==c?c:void 0,g=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,k=n.uid,b=n.emailVerified,x=n.isAnonymous,_=n.providerData,w=n.stsTokenManager;Gc(k&&w,e,"internal-error");var I=jl.fromJSON(this.name,w);Gc("string"==typeof k,e,"internal-error"),Wl(f,e.name),Wl(h,e.name),Gc("boolean"==typeof b,e,"internal-error"),Gc("boolean"==typeof x,e,"internal-error"),Wl(d,e.name),Wl(p,e.name),Wl(v,e.name),Wl(m,e.name),Wl(y,e.name),Wl(g,e.name);var C=new t({uid:k,auth:e,email:h,emailVerified:b,displayName:f,isAnonymous:x,photoURL:p,phoneNumber:d,tenantId:v,stsTokenManager:I,createdAt:y,lastLoginAt:g});return _&&Array.isArray(_)&&(C.providerData=_.map((function(e){return Object.assign({},e)}))),m&&(C._redirectEventId=m),C}},{key:"_fromIdTokenResponse",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(c)(e(h).mark((function a(){var o,s;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=new jl).updateFromServerResponse(r),s=new t({uid:r.localId,auth:n,stsTokenManager:o,isAnonymous:i}),e.next=5,Pl(s);case 5:return e.abrupt("return",s);case 6:case"end":return e.stop()}}),a)})))()}}]),t}(),Bl=function(){"use strict";function t(){e(l)(this,t),this.type="NONE",this.storage={}}return e(f)(t,[{key:"_isAvailable",value:function(){return e(c)(e(h).mark((function t(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),t)})))()}},{key:"_set",value:function(t,n){var r=this;return e(c)(e(h).mark((function i(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.storage[t]=n;case 1:case"end":return e.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(c)(e(h).mark((function r(){var i;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.storage[t],e.abrupt("return",void 0===i?null:i);case 2:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(c)(e(h).mark((function r(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete n.storage[t];case 1:case"end":return e.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),t}();
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
 */Bl.type="NONE";var ql=Bl;
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
 */function Hl(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var Vl=function(){"use strict";function t(n,r,i){e(l)(this,t),this.persistence=n,this.auth=r,this.userKey=i;var a=this.auth,o=a.config,s=a.name;this.fullUserKey=Hl(this.userKey,o.apiKey,s),this.fullPersistenceKey=Hl("persistence",o.apiKey,s),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return e(f)(t,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var t=this;return e(c)(e(h).mark((function n(){var r;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.persistence._get(t.fullUserKey);case 2:return r=e.sent,e.abrupt("return",r?Ul._fromJSON(t.auth,r):null);case 4:case"end":return e.stop()}}),n)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(t){var n=this;return e(c)(e(h).mark((function r(){var i;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.persistence!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.getCurrentUser();case 4:return i=e.sent,e.next=7,n.removeCurrentUser();case 7:if(n.persistence=t,!i){e.next=10;break}return e.abrupt("return",n.setCurrentUser(i));case 10:case"end":return e.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return e(c)(e(h).mark((function a(){var o,s,u,l,f,d,p,v,m,y,g,k,b;return e(h).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r.length){a.next=2;break}return a.abrupt("return",new t($c(ql),n,i));case 2:return a.next=4,Promise.all(r.map(function(){var t=e(c)(e(h).mark((function t(n){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",n);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:o=a.sent.filter((function(e){return e})),s=o[0]||$c(ql),u=Hl(i,n.config.apiKey,n.name),l=null,f=!0,d=!1,p=void 0,a.prev=9,v=r[Symbol.iterator]();case 11:if(f=(m=v.next()).done){a.next=29;break}return y=m.value,a.prev=13,a.next=16,y._get(u);case 16:if(!(g=a.sent)){a.next=22;break}return k=Ul._fromJSON(n,g),y!==s&&(l=k),s=y,a.abrupt("break",29);case 22:a.next=26;break;case 24:a.prev=24,a.t0=a.catch(13);case 26:f=!0,a.next=11;break;case 29:a.next=35;break;case 31:a.prev=31,a.t1=a.catch(9),d=!0,p=a.t1;case 35:a.prev=35,a.prev=36,f||null==v.return||v.return();case 38:if(a.prev=38,!d){a.next=41;break}throw p;case 41:return a.finish(38);case 42:return a.finish(35);case 43:if(b=o.filter((function(e){return e._shouldAllowMigration})),s._shouldAllowMigration&&b.length){a.next=46;break}return a.abrupt("return",new t(s,n,i));case 46:if(s=b[0],!l){a.next=50;break}return a.next=50,s._set(u,l.toJSON());case 50:return a.next=52,Promise.all(r.map(function(){var t=e(c)(e(h).mark((function t(n){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n===s){e.next=8;break}return e.prev=1,e.next=4,n._remove(u);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()));case 52:return a.abrupt("return",new t(s,n,i));case 53:case"end":return a.stop()}}),a,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),t}();
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
 */function Xl(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Jl(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Kl(t))return"Firefox";if(t.includes("silk/"))return"Silk";if($l(t))return"Blackberry";if(Zl(t))return"Webos";if(Gl(t))return"Safari";if((t.includes("chrome/")||Yl(t))&&!t.includes("edge/"))return"Chrome";if(Ql(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function Kl(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z();return/firefox\//i.test(e)}function Gl(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Yl(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z();return/crios\//i.test(e)}function Jl(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z();return/iemobile/i.test(e)}function Ql(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z();return/android/i.test(e)}function $l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z();return/blackberry/i.test(e)}function Zl(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z();return/webos/i.test(e)}function ef(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function tf(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z();return ef(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function nf(){return((e=Z()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function rf(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z();return ef(e)||Ql(e)||Zl(e)||$l(e)||/windows phone/i.test(e)||Jl(e)}
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
function af(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=Xl(Z());break;case"Worker":t="".concat(Xl(Z()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(Mt,"/").concat(r)}
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
 */var of=function(){"use strict";function t(n){e(l)(this,t),this.auth=n,this.queue=[]}return e(f)(t,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(t){var n=this;return e(c)(e(h).mark((function r(){var i,a,o,s,u,c,l,f,d,p,v,m,y,g;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.auth.currentUser!==t){e.next=3;break}return e.abrupt("return");case 3:a=[],e.prev=4,o=!0,s=!1,u=void 0,e.prev=6,c=n.queue[Symbol.iterator]();case 8:if(o=(l=c.next()).done){e.next=16;break}return f=l.value,e.next=12,f(t);case 12:f.onAbort&&a.push(f.onAbort);case 13:o=!0,e.next=8;break;case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(6),s=!0,u=e.t0;case 22:e.prev=22,e.prev=23,o||null==c.return||c.return();case 25:if(e.prev=25,!s){e.next=28;break}throw u;case 28:return e.finish(25);case 29:return e.finish(22);case 30:e.next=53;break;case 32:for(e.prev=32,e.t1=e.catch(4),a.reverse(),d=!0,p=!1,v=void 0,e.prev=36,m=a[Symbol.iterator]();!(d=(y=m.next()).done);d=!0){g=y.value;try{g()}catch(e){}}e.next=44;break;case 40:e.prev=40,e.t2=e.catch(36),p=!0,v=e.t2;case 44:e.prev=44,e.prev=45,d||null==m.return||m.return();case 47:if(e.prev=47,!p){e.next=50;break}throw v;case 50:return e.finish(47);case 51:return e.finish(44);case 52:throw n.auth._errorFactory.create("login-blocked",{originalMessage:null===(i=e.t1)||void 0===i?void 0:i.message});case 53:case"end":return e.stop()}}),r,null,[[4,32],[6,18,22,30],[23,,25,29],[36,40,44,52],[45,,47,51]])})))()}}]),t}(),sf=function(){"use strict";function t(n,r,i){e(l)(this,t),this.app=n,this.heartbeatServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cf(this),this.idTokenSubscription=new cf(this),this.beforeStateQueue=new of(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Uc,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=i.sdkClientVersion}return e(f)(t,[{key:"_initializeWithPersistence",value:function(t,n){n&&(this._popupRedirectResolver=$c(n));var r=this;return this._initializationPromise=this.queue(e(c)(e(h).mark((function i(){var a,o;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r._deleted){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,Vl.create(r,t);case 5:if(r.persistenceManager=e.sent,!r._deleted){e.next=8;break}return e.abrupt("return");case 8:if(!(null===(a=r._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){e.next=16;break}return e.prev=9,e.next=12,r._popupRedirectResolver._initialize(r);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.next=18,r.initializeCurrentUser(n);case 18:if(r.lastNotifiedUid=(null===(o=r.currentUser)||void 0===o?void 0:o.uid)||null,!r._deleted){e.next=21;break}return e.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return e.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var t=this;return e(c)(e(h).mark((function n(){var r;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t._deleted){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.assertedPersistence.getCurrentUser();case 4:if(r=e.sent,t.currentUser||r){e.next=7;break}return e.abrupt("return");case 7:if(!t.currentUser||!r||t.currentUser.uid!==r.uid){e.next=12;break}return t._currentUser._assign(r),e.next=11,t.currentUser.getIdToken();case 11:return e.abrupt("return");case 12:return e.next=14,t._updateCurrentUser(r,!0);case 14:case"end":return e.stop()}}),n)})))()}},{key:"initializeCurrentUser",value:function(t){var n=this;return e(c)(e(h).mark((function r(){var i,a,o,s,u,c,l;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n.assertedPersistence.getCurrentUser();case 3:if(a=e.sent,o=a,s=!1,!t||!n.config.authDomain){e.next=15;break}return e.next=9,n.getOrInitRedirectPersistenceManager();case 9:return u=null===(i=n.redirectUser)||void 0===i?void 0:i._redirectEventId,c=null==o?void 0:o._redirectEventId,e.next=13,n.tryRedirectSignIn(t);case 13:l=e.sent,u&&u!==c||!(null==l?void 0:l.user)||(o=l.user,s=!0);case 15:if(o){e.next=17;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 17:if(o._redirectEventId){e.next=33;break}if(!s){e.next=28;break}return e.prev=19,e.next=22,n.beforeStateQueue.runMiddleware(o);case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(19),o=a,n._popupRedirectResolver._overrideRedirectResult(n,(function(){return Promise.reject(e.t0)}));case 28:if(!o){e.next=32;break}return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 32:return e.abrupt("return",n.directlySetCurrentUser(null));case 33:return Gc(n._popupRedirectResolver,n,"argument-error"),e.next=36,n.getOrInitRedirectPersistenceManager();case 36:if(!n.redirectUser||n.redirectUser._redirectEventId!==o._redirectEventId){e.next=38;break}return e.abrupt("return",n.directlySetCurrentUser(o));case 38:return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 39:case"end":return e.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(t){var n=this;return e(c)(e(h).mark((function r(){var i;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=null,e.prev=1,e.next=4,n._popupRedirectResolver._completeRedirectFn(n,t,!0);case 4:i=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,n._setRedirectUser(null);case 11:return e.abrupt("return",i);case 12:case"end":return e.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(t){var n=this;return e(c)(e(h).mark((function r(){var i;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Pl(t);case 4:e.next=10;break;case 6:if(e.prev=6,e.t0=e.catch(1),"auth/network-request-failed"===(null===(i=e.t0)||void 0===i?void 0:i.code)){e.next=10;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 10:return e.abrupt("return",n.directlySetCurrentUser(t));case 11:case"end":return e.stop()}}),r,null,[[1,6]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var t=this;return e(c)(e(h).mark((function n(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._deleted=!0;case 1:case"end":return e.stop()}}),n)})))()}},{key:"updateCurrentUser",value:function(t){var n=this;return e(c)(e(h).mark((function r(){var i;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=t?We(t):null)&&Gc(i.auth.config.apiKey===n.config.apiKey,n,"invalid-user-token"),e.abrupt("return",n._updateCurrentUser(i&&i._clone(n)));case 3:case"end":return e.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(c)(e(h).mark((function i(){return e(h).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!r._deleted){i.next=2;break}return i.abrupt("return");case 2:if(t&&Gc(r.tenantId===t.tenantId,r,"tenant-id-mismatch"),n){i.next=6;break}return i.next=6,r.beforeStateQueue.runMiddleware(t);case 6:return i.abrupt("return",r.queue(e(c)(e(h).mark((function n(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.directlySetCurrentUser(t);case 2:r.notifyAuthListeners();case 3:case"end":return e.stop()}}),n)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var t=this;return e(c)(e(h).mark((function n(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.beforeStateQueue.runMiddleware(null);case 2:if(!t.redirectPersistenceManager&&!t._popupRedirectResolver){e.next=5;break}return e.next=5,t._setRedirectUser(null);case 5:return e.abrupt("return",t._updateCurrentUser(null,!0));case 6:case"end":return e.stop()}}),n)})))()}},{key:"setPersistence",value:function(t){var n=this;return this.queue(e(c)(e(h).mark((function r(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.assertedPersistence.setPersistence($c(t));case 2:case"end":return e.stop()}}),r)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new me("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(t,n){var r=this;return e(c)(e(h).mark((function i(){var a;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getOrInitRedirectPersistenceManager(n);case 2:return a=e.sent,e.abrupt("return",null===t?a.removeCurrentUser():a.setCurrentUser(t));case 4:case"end":return e.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(t){var n=this;return e(c)(e(h).mark((function r(){var i;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.redirectPersistenceManager){e.next=9;break}return Gc(i=t&&$c(t)||n._popupRedirectResolver,n,"argument-error"),e.next=5,Vl.create(n,[$c(i._redirectPersistence)],"redirectUser");case 5:return n.redirectPersistenceManager=e.sent,e.next=8,n.redirectPersistenceManager.getCurrentUser();case 8:n.redirectUser=e.sent;case 9:return e.abrupt("return",n.redirectPersistenceManager);case 10:case"end":return e.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(t){var n=this;return e(c)(e(h).mark((function r(){var i,a;return e(h).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._isInitialized){r.next=4;break}return r.next=4,n.queue(e(c)(e(h).mark((function t(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)}))));case 4:if((null===(i=n._currentUser)||void 0===i?void 0:i._redirectEventId)!==t){r.next=6;break}return r.abrupt("return",n._currentUser);case 6:if((null===(a=n.redirectUser)||void 0===a?void 0:a._redirectEventId)!==t){r.next=8;break}return r.abrupt("return",n.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(t){var n=this;return e(c)(e(h).mark((function r(){return e(h).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t!==n.currentUser){r.next=2;break}return r.abrupt("return",n.queue(e(c)(e(h).mark((function r(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.directlySetCurrentUser(t));case 1:case"end":return e.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Gc(o,this,"internal-error"),o.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(t){var n=this;return e(c)(e(h).mark((function r(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.currentUser&&n.currentUser!==t&&n._currentUser._stopProactiveRefresh(),t&&n.isProactiveRefreshEnabled&&t._startProactiveRefresh(),n.currentUser=t,!t){e.next=8;break}return e.next=6,n.assertedPersistence.setCurrentUser(t);case 6:e.next=10;break;case 8:return e.next=10,n.assertedPersistence.removeCurrentUser();case 10:case"end":return e.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return Gc(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=af(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var t=this;return e(c)(e(h).mark((function n(){var r,i,a;return e(h).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=e(d)({},"X-Client-Version",t.clientVersion),t.app.options.appId&&(i["X-Firebase-gmpid"]=t.app.options.appId),n.next=5,null===(r=t.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(a=n.sent)&&(i["X-Firebase-Client"]=a),n.abrupt("return",i);case 8:case"end":return n.stop()}}),n)})))()}}]),t}();
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
 */function uf(e){return We(e)}var cf=function(){"use strict";function t(n){var r,i,a=this;e(l)(this,t),this.auth=n,this.observer=null,this.addObserver=(i=new Oe((function(e){return a.observer=e}),r)).subscribe.bind(i)}return e(f)(t,[{key:"next",get:function(){return Gc(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),t}();function lf(t,n,r){var i=uf(t);Gc(i._canInitEmulator,i,"emulator-config-failed"),Gc(/^https?:\/\//.test(n),i,"invalid-emulator-scheme");var a=!!(null==r?void 0:r.disableWarnings),o=ff(n),s=function(t){var n=ff(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(n.length));if(!r)return{host:"",port:null};var i=r[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){var o=a[1];return{host:o,port:hf(i.substr(o.length+1))}}var s=e(v)(i.split(":"),2);return{host:s[0],port:hf(s[1])}}(n),u=s.host,c=s.port,l=null===c?"":":".concat(c);i.config.emulator={url:"".concat(o,"//").concat(u).concat(l,"/")},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function ff(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function hf(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var df=function(){"use strict";function t(n,r){e(l)(this,t),this.providerId=n,this.signInMethod=r}return e(f)(t,[{key:"toJSON",value:function(){return Yc("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return Yc("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return Yc("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return Yc("not implemented")}}]),t}();function pf(e,t){return vf.apply(this,arguments)}function vf(){return(vf=e(c)(e(h).mark((function t(n,r){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ll(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function mf(e,t){return yf.apply(this,arguments)}function yf(){return(yf=
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
e(c)(e(h).mark((function t(n,r){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",pl(n,"POST","/v1/accounts:signInWithPassword",cl(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function gf(e,t){return kf.apply(this,arguments)}function kf(){return(kf=
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
e(c)(e(h).mark((function t(n,r){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",pl(n,"POST","/v1/accounts:signInWithEmailLink",cl(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function bf(e,t){return xf.apply(this,arguments)}function xf(){return(xf=e(c)(e(h).mark((function t(n,r){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",pl(n,"POST","/v1/accounts:signInWithEmailLink",cl(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var _f=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t,i,a){var o,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e(l)(this,r),(o=n.call(this,"password",a))._email=t,o._password=i,o._tenantId=s,o}return e(f)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(t){var n=this;return e(c)(e(h).mark((function r(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",mf(t,{returnSecureToken:!0,email:n._email,password:n._password}));case 4:return e.abrupt("return",gf(t,{email:n._email,oobCode:n._password}));case 5:Hc(t,"internal-error");case 6:case"end":return e.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(t,n){var r=this;return e(c)(e(h).mark((function i(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",pf(t,{idToken:n,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return e.abrupt("return",bf(t,{idToken:n,email:r._email,oobCode:r._password}));case 5:Hc(t,"internal-error");case 6:case"end":return e.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(df);function wf(e,t){return If.apply(this,arguments)}function If(){return(If=
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
e(c)(e(h).mark((function t(n,r){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",pl(n,"POST","/v1/accounts:signInWithIdp",cl(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var Cf=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(){var t;return e(l)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,t}return e(f)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return wf(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,wf(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,wf(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ee(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Hc("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,i=t.signInMethod,a=zc(t,["providerId","signInMethod"]);if(!n||!i)return null;var o=new r(n,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),r}(df);function Tf(e,t){return Nf.apply(this,arguments)}function Nf(){return(Nf=
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
e(c)(e(h).mark((function t(n,r){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ll(n,"POST","/v1/accounts:sendVerificationCode",cl(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Sf(){return(Sf=e(c)(e(h).mark((function t(n,r){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",pl(n,"POST","/v1/accounts:signInWithPhoneNumber",cl(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ef(){return(Ef=e(c)(e(h).mark((function t(n,r){var i;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pl(n,"POST","/v1/accounts:signInWithPhoneNumber",cl(n,r));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw gl(n,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var Rf=e(d)({},"USER_NOT_FOUND","user-not-found");function Af(){return(Af=e(c)(e(h).mark((function t(n,r){var i;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",pl(n,"POST","/v1/accounts:signInWithPhoneNumber",cl(n,i),Rf));case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var Pf=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t){var i;return e(l)(this,r),(i=n.call(this,"phone","phone")).params=t,i}return e(f)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return Sf.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return Ef.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return Af.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return n||t||i||a?new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:a}):null}}]),r}(df);
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
 */var Of=function(){"use strict";function t(n){var r,i,a,o,s,u;e(l)(this,t);var c=Re(Ae(n)),f=null!==(r=c.apiKey)&&void 0!==r?r:null,h=null!==(i=c.oobCode)&&void 0!==i?i:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=c.mode)&&void 0!==a?a:null);Gc(f&&h&&d,"argument-error"),this.apiKey=f,this.operation=d,this.code=h,this.continueUrl=null!==(o=c.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(s=c.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(u=c.tenantId)&&void 0!==u?u:null}return e(f)(t,null,[{key:"parseLink",value:function(e){var n=function(e){var t=Re(Ae(e)).link,n=t?Re(Ae(t)).deep_link_id:null,r=Re(Ae(e)).deep_link_id;return(r?Re(Ae(r)).link:null)||r||n||t||e}(e);try{return new t(n)}catch(e){return null}}}]),t}();
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
var Lf=function(){"use strict";function t(){e(l)(this,t),this.providerId=t.PROVIDER_ID}return e(f)(t,null,[{key:"credential",value:function(e,t){return _f._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=Of.parseLink(t);return Gc(n,"argument-error"),_f._fromEmailAndCode(e,n.code,n.tenantId)}}]),t}();Lf.PROVIDER_ID="password",Lf.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Lf.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
var Df=function(){"use strict";function t(n){e(l)(this,t),this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}return e(f)(t,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),t}(),Mf=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(){var t;return e(l)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],t}return e(f)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return e(p)(this.scopes)}}]),r}(Df),Ff=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(){return e(l)(this,r),n.call(this,"facebook.com")}return e(f)(r,null,[{key:"credential",value:function(e){return Cf._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(Mf);
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
 */Ff.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ff.PROVIDER_ID="facebook.com";
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
var zf=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(){var t;return e(l)(this,r),(t=n.call(this,"google.com")).addScope("profile"),t}return e(f)(r,null,[{key:"credential",value:function(e,t){return Cf._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,i=t.oauthAccessToken;if(!n&&!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(Mf);zf.GOOGLE_SIGN_IN_METHOD="google.com",zf.PROVIDER_ID="google.com";
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
var jf=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(){return e(l)(this,r),n.call(this,"github.com")}return e(f)(r,null,[{key:"credential",value:function(e){return Cf._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(Mf);jf.GITHUB_SIGN_IN_METHOD="github.com",jf.PROVIDER_ID="github.com";
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
var Wf=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(){return e(l)(this,r),n.call(this,"twitter.com")}return e(f)(r,null,[{key:"credential",value:function(e,t){return Cf._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,i=t.oauthTokenSecret;if(!n||!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(Mf);function Uf(e,t){return Bf.apply(this,arguments)}function Bf(){return(Bf=
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
e(c)(e(h).mark((function t(n,r){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",pl(n,"POST","/v1/accounts:signUp",cl(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */Wf.TWITTER_SIGN_IN_METHOD="twitter.com",Wf.PROVIDER_ID="twitter.com";var qf=function(){"use strict";function t(n){e(l)(this,t),this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}return e(f)(t,null,[{key:"_fromIdTokenResponse",value:function(n,r,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e(c)(e(h).mark((function o(){var s,u,c;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ul._fromIdTokenResponse(n,i,a);case 2:return s=e.sent,u=Hf(i),c=new t({user:s,providerId:u,_tokenResponse:i,operationType:r}),e.abrupt("return",c);case 6:case"end":return e.stop()}}),o)})))()}},{key:"_forOperation",value:function(n,r,i){return e(c)(e(h).mark((function a(){var o;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._updateTokensIfNecessary(i,!0);case 2:return o=Hf(i),e.abrupt("return",new t({user:n,providerId:o,_tokenResponse:i,operationType:r}));case 4:case"end":return e.stop()}}),a)})))()}}]),t}();function Hf(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
var Vf=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t,i,a,o){var s,u;return e(l)(this,r),(s=n.call(this,i.code,i.message)).operationType=a,s.user=o,Object.setPrototypeOf(e(m)(s),r.prototype),s.customData={appName:t.name,tenantId:null!==(u=t.tenantId)&&void 0!==u?u:void 0,_serverResponse:i.customData._serverResponse,operationType:a},s}return e(f)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,i){return new r(e,t,n,i)}}]),r}(ve);function Xf(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw Vf._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */function Kf(e,t){return Gf.apply(this,arguments)}function Gf(){return Gf=e(c)(e(h).mark((function t(n,r){var i,a,o=arguments;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.length>2&&void 0!==o[2]&&o[2],e.t0=Nl,e.t1=n,e.t2=r,e.t3=n.auth,e.next=7,n.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",qf._forOperation(n,"link",a));case 14:case"end":return e.stop()}}),t)}))),Gf.apply(this,arguments)}function Yf(e,t){return Jf.apply(this,arguments)}function Jf(){return Jf=
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
e(c)(e(h).mark((function t(n,r){var i,a,o,s,u,c,l,f=arguments;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=f.length>2&&void 0!==f[2]&&f[2],o=n.auth,s="reauthenticate",e.prev=4,e.next=7,Nl(n,Xf(o,s,r,n),i);case 7:return Gc((u=e.sent).idToken,o,"internal-error"),Gc(c=Tl(u.idToken),o,"internal-error"),l=c.sub,Gc(n.uid===l,o,"user-mismatch"),e.abrupt("return",qf._forOperation(n,s,u));case 16:throw e.prev=16,e.t0=e.catch(4),"auth/user-not-found"===(null===(a=e.t0)||void 0===a?void 0:a.code)&&Hc(o,"user-mismatch"),e.t0;case 20:case"end":return e.stop()}}),t,null,[[4,16]])}))),Jf.apply(this,arguments)}function Qf(e,t){return $f.apply(this,arguments)}function $f(){return $f=
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
e(c)(e(h).mark((function t(n,r){var i,a,o,s,u=arguments;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.length>2&&void 0!==u[2]&&u[2],a="signIn",e.next=4,Xf(n,a,r);case 4:return o=e.sent,e.next=7,qf._fromIdTokenResponse(n,a,o);case 7:if(s=e.sent,i){e.next=11;break}return e.next=11,n._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),t)}))),$f.apply(this,arguments)}function Zf(e,t,n){return eh.apply(this,arguments)}function eh(){return(eh=e(c)(e(h).mark((function t(n,r,i){var a,o,s;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=uf(n),e.next=3,Uf(a,{returnSecureToken:!0,email:r,password:i});case 3:return o=e.sent,e.next=6,qf._fromIdTokenResponse(a,"signIn",o);case 6:return s=e.sent,e.next=9,a._updateCurrentUser(s.user);case 9:return e.abrupt("return",s);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function th(e,t,n,r){return We(e).onIdTokenChanged(t,n,r)}function nh(e,t,n){return We(e).beforeAuthStateChanged(t,n)}
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
function rh(e,t){return ll(e,"POST","/v2/accounts/mfaEnrollment:start",cl(e,t))}new WeakMap;var ih="__sak",ah=function(){"use strict";function t(n,r){e(l)(this,t),this.storageRetriever=n,this.type=r}return e(f)(t,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(ih,"1"),this.storage.removeItem(ih),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),t}();
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
 */var oh=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(){var t,i;return e(l)(this,r),(t=n.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(e,n){return t.onStorageEvent(e,n)},t.listeners={},t.localCache={},t.pollTimer=null,t.safariLocalStorageNotSynced=(Gl(i=Z())||ef(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),t.fallbackToPolling=rf(),t._shouldAllowMigration=!0,t}return e(f)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var a=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},o=this.storage.getItem(r);nf()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(t,n){var i=this,a=this;return e(c)(e(h).mark((function o(){return e(h).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e(ac)(e(uc)(r.prototype),"_set",i).call(a,t,n);case 2:a.localCache[t]=JSON.stringify(n);case 3:case"end":return o.stop()}}),o)})))()}},{key:"_get",value:function(t){var n=this,i=this;return e(c)(e(h).mark((function a(){var o;return e(h).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(ac)(e(uc)(r.prototype),"_get",n).call(i,t);case 2:return o=a.sent,i.localCache[t]=JSON.stringify(o),a.abrupt("return",o);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(t){var n=this,i=this;return e(c)(e(h).mark((function a(){return e(h).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(ac)(e(uc)(r.prototype),"_remove",n).call(i,t);case 2:delete i.localCache[t];case 3:case"end":return a.stop()}}),a)})))()}}]),r}(ah);oh.type="LOCAL";var sh=oh,uh=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(){return e(l)(this,r),n.call(this,(function(){return window.sessionStorage}),"SESSION")}return e(f)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}(ah);
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
 */uh.type="SESSION";var ch=uh;
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
 */function lh(t){return Promise.all(t.map((n=e(c)(e(h).mark((function t(n){var r;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),t,null,[[0,7]])}))),function(e){return n.apply(this,arguments)})));var n}
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
 */var fh=function(){"use strict";function t(n){e(l)(this,t),this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return e(f)(t,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(t){var n=this;return e(c)(e(h).mark((function r(){var i,a,o,s,u,l,f,d;return e(h).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=(i=t).data,o=a.eventId,s=a.eventType,u=a.data,null==(l=n.handlersMap[s])?void 0:l.size){r.next=5;break}return r.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:o,eventType:s}),f=Array.from(l).map(function(){var t=e(c)(e(h).mark((function t(n){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(i.origin,u));case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),r.next=9,lh(f);case 9:d=r.sent,i.ports[0].postMessage({status:"done",eventId:o,eventType:s,response:d});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(e){var n=this.receivers.find((function(t){return t.isListeningto(e)}));if(n)return n;var r=new t(e);return this.receivers.push(r),r}}]),t}();
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
function hh(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */fh.receivers=[];var dh=function(){"use strict";function t(n){e(l)(this,t),this.target=n,this.handlers=new Set}return e(f)(t,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return e(c)(e(h).mark((function a(){var o,s,u;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o="undefined"!=typeof MessageChannel?new MessageChannel:null){e.next=3;break}throw new Error("connection_unavailable");case 3:return e.abrupt("return",new Promise((function(e,a){var c=hh("",20);o.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),r);u={messageChannel:o,onMessage:function(t){var n=t;if(n.data.eventId===c)switch(n.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),e(n.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},i.handlers.add(u),o.port1.addEventListener("message",u.onMessage),i.target.postMessage({eventType:t,eventId:c,data:n},[o.port2])})).finally((function(){u&&i.removeMessageHandler(u)})));case 6:case"end":return e.stop()}}),a)})))()}}]),t}();
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
 */function ph(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
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
function vh(){return void 0!==ph().WorkerGlobalScope&&"function"==typeof ph().importScripts}function mh(){return yh.apply(this,arguments)}function yh(){return(yh=e(c)(e(h).mark((function t(){var n;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return n=e.sent,e.abrupt("return",n.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}
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
var gh="firebaseLocalStorageDb",kh="firebaseLocalStorage",bh="fbase_key",xh=function(){"use strict";function t(n){e(l)(this,t),this.request=n}return e(f)(t,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),t}();function _h(e,t){return e.transaction([kh],t?"readwrite":"readonly").objectStore(kh)}function wh(){var e=indexedDB.deleteDatabase(gh);return new xh(e).toPromise()}function Ih(){var t=indexedDB.open(gh,1);return new Promise((function(n,r){t.addEventListener("error",(function(){r(t.error)})),t.addEventListener("upgradeneeded",(function(){var e=t.result;try{e.createObjectStore(kh,{keyPath:bh})}catch(e){r(e)}})),t.addEventListener("success",e(c)(e(h).mark((function r(){var i;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=t.result).objectStoreNames.contains(kh)){e.next=12;break}return i.close(),e.next=5,wh();case 5:return e.t0=n,e.next=8,Ih();case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 12:n(i);case 13:case"end":return e.stop()}}),r)}))))}))}function Ch(e,t,n){return Th.apply(this,arguments)}function Th(){return(Th=e(c)(e(h).mark((function t(n,r,i){var a,o;return e(h).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=_h(n,!0).put((a={},e(d)(a,bh,r),e(d)(a,"value",i),a)),t.abrupt("return",new xh(o).toPromise());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Nh(e,t){return Sh.apply(this,arguments)}function Sh(){return(Sh=e(c)(e(h).mark((function t(n,r){var i,a;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=_h(n,!1).get(r),e.next=3,new xh(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Eh(e,t){var n=_h(e,!0).delete(t);return new xh(n).toPromise()}var Rh=function(){"use strict";function t(){e(l)(this,t),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return e(f)(t,[{key:"_openDb",value:function(){var t=this;return e(c)(e(h).mark((function n(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.db){e.next=2;break}return e.abrupt("return",t.db);case 2:return e.next=4,Ih();case 4:return t.db=e.sent,e.abrupt("return",t.db);case 6:case"end":return e.stop()}}),n)})))()}},{key:"_withRetries",value:function(t){var n=this;return e(c)(e(h).mark((function r(){var i,a;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0;case 1:return e.prev=2,e.next=5,n._openDb();case 5:return a=e.sent,e.next=8,t(a);case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(2),!(i++>3)){e.next=15;break}throw e.t0;case 15:n.db&&(n.db.close(),n.db=void 0);case 16:e.next=1;break;case 18:case"end":return e.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var t=this;return e(c)(e(h).mark((function n(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",vh()?t.initializeReceiver():t.initializeSender());case 1:case"end":return e.stop()}}),n)})))()}},{key:"initializeReceiver",value:function(){var t=this;return e(c)(e(h).mark((function n(){return e(h).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.receiver=fh._getInstance(vh()?self:null),t.receiver._subscribe("keyChanged",function(){var n=e(c)(e(h).mark((function n(r,i){var a;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._poll();case 2:return a=e.sent,e.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return e.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),t.receiver._subscribe("ping",function(){var t=e(c)(e(h).mark((function t(n,r){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()}},{key:"initializeSender",value:function(){var t=this;return e(c)(e(h).mark((function n(){var r,i,a;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,mh();case 3:if(t.activeServiceWorker=e.sent,t.activeServiceWorker){e.next=6;break}return e.abrupt("return");case 6:return t.sender=new dh(t.activeServiceWorker),e.next=9,t.sender._send("ping",{},800);case 9:if(a=e.sent){e.next=12;break}return e.abrupt("return");case 12:(null===(r=a[0])||void 0===r?void 0:r.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(t.serviceWorkerReceiverAvailable=!0);case 13:case"end":return e.stop()}}),n)})))()}},{key:"notifyServiceWorker",value:function(t){var n=this;return e(c)(e(h).mark((function r(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.sender&&n.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===n.activeServiceWorker)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,n.sender._send("keyChanged",{key:t},n.serviceWorkerReceiverAvailable?800:50);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return e(c)(e(h).mark((function t(){var n;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,Ih();case 5:return n=e.sent,e.next=8,Ch(n,ih,"1");case 8:return e.next=10,Eh(n,ih);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(t){var n=this;return e(c)(e(h).mark((function r(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingWrites++,e.prev=1,e.next=4,t();case 4:return e.prev=4,n.pendingWrites--,e.finish(4);case 7:case"end":return e.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(t,n){var r=this;return e(c)(e(h).mark((function i(){return e(h).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",r._withPendingWrite(e(c)(e(h).mark((function i(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return Ch(e,t,n)}));case 2:return r.localCache[t]=n,e.abrupt("return",r.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(c)(e(h).mark((function r(){var i;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return Nh(e,t)}));case 2:return i=e.sent,n.localCache[t]=i,e.abrupt("return",i);case 5:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(c)(e(h).mark((function r(){return e(h).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",n._withPendingWrite(e(c)(e(h).mark((function r(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return Eh(e,t)}));case 2:return delete n.localCache[t],e.abrupt("return",n.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var t=this;return e(c)(e(h).mark((function n(){var r,i,a,o,s,u,c,l,f,d,p,v,m,y,g,k,b;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._withRetries((function(e){var t=_h(e,!1).getAll();return new xh(t).toPromise()}));case 2:if(r=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:if(0===t.pendingWrites){e.next=7;break}return e.abrupt("return",[]);case 7:for(i=[],a=new Set,o=!0,s=!1,u=void 0,e.prev=10,c=r[Symbol.iterator]();!(o=(l=c.next()).done);o=!0)f=l.value,d=f.fbase_key,p=f.value,a.add(d),JSON.stringify(t.localCache[d])!==JSON.stringify(p)&&(t.notifyListeners(d,p),i.push(d));e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),s=!0,u=e.t0;case 18:e.prev=18,e.prev=19,o||null==c.return||c.return();case 21:if(e.prev=21,!s){e.next=24;break}throw u;case 24:return e.finish(21);case 25:return e.finish(18);case 26:for(v=!0,m=!1,y=void 0,e.prev=27,g=Object.keys(t.localCache)[Symbol.iterator]();!(v=(k=g.next()).done);v=!0)b=k.value,t.localCache[b]&&!a.has(b)&&(t.notifyListeners(b,null),i.push(b));e.next=35;break;case 31:e.prev=31,e.t1=e.catch(27),m=!0,y=e.t1;case 35:e.prev=35,e.prev=36,v||null==g.return||g.return();case 38:if(e.prev=38,!m){e.next=41;break}throw y;case 41:return e.finish(38);case 42:return e.finish(35);case 43:return e.abrupt("return",i);case 44:case"end":return e.stop()}}),n,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var t=this;this.pollTimer=setInterval(e(c)(e(h).mark((function n(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._poll());case 1:case"end":return e.stop()}}),n)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),t}();Rh.type="LOCAL";var Ah=Rh;
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
 */function Ph(e,t){return ll(e,"POST","/v2/accounts/mfaSignIn:start",cl(e,t))}function Oh(e){return new Promise((function(t,n){var r,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=Vc("internal-error");t.customData=e,n(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(a)}))}function Lh(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
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
Lh("rcb"),new rl(3e4,6e4);var Dh="recaptcha";
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
 */function Mh(e,t,n){return Fh.apply(this,arguments)}function Fh(){return(Fh=e(c)(e(h).mark((function t(n,r,i){var a,o,s,u,c,l,f,d;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(o=e.sent,e.prev=4,Gc("string"==typeof o,n,"argument-error"),Gc(i.type===Dh,n,"argument-error"),!("session"in(s="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(u=s.session,!("phoneNumber"in s)){e.next=19;break}return Gc("enroll"===u.type,n,"internal-error"),e.next=15,rh(n,{idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:o}});case 15:return c=e.sent,e.abrupt("return",c.phoneSessionInfo.sessionInfo);case 19:return Gc("signin"===u.type,n,"internal-error"),Gc(l=(null===(a=s.multiFactorHint)||void 0===a?void 0:a.uid)||s.multiFactorUid,n,"missing-multi-factor-info"),e.next=24,Ph(n,{mfaPendingCredential:u.credential,mfaEnrollmentId:l,phoneSignInInfo:{recaptchaToken:o}});case 24:return f=e.sent,e.abrupt("return",f.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,Tf(n,{phoneNumber:s.phoneNumber,recaptchaToken:o});case 30:return d=e.sent.sessionInfo,e.abrupt("return",d);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),t,null,[[4,,32,35]])})))).apply(this,arguments)}
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
var zh=function(){"use strict";function t(n){e(l)(this,t),this.providerId=t.PROVIDER_ID,this.auth=uf(n)}return e(f)(t,[{key:"verifyPhoneNumber",value:function(e,t){return Mh(this.auth,e,We(t))}}],[{key:"credential",value:function(e,t){return Pf._fromVerification(e,t)}},{key:"credentialFromResult",value:function(e){var n=e;return t.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(e){return t.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?Pf._fromTokenResponse(n,r):null}}]),t}();
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
function jh(e,t){return t?$c(t):(Gc(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */zh.PROVIDER_ID="phone",zh.PHONE_SIGN_IN_METHOD="phone";var Wh=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t){var i;return e(l)(this,r),(i=n.call(this,"custom","custom")).params=t,i}return e(f)(r,[{key:"_getIdTokenResponse",value:function(e){return wf(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return wf(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return wf(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(df);function Uh(e){return Qf(e.auth,new Wh(e),e.bypassAuthState)}function Bh(e){var t=e.auth,n=e.user;return Gc(n,t,"internal-error"),Yf(n,new Wh(e),e.bypassAuthState)}function qh(e){return Hh.apply(this,arguments)}function Hh(){return(Hh=e(c)(e(h).mark((function t(n){var r,i;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.auth,Gc(i=n.user,r,"internal-error"),e.abrupt("return",Kf(i,new Wh(n),n.bypassAuthState));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var Vh=function(){"use strict";function t(n,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];e(l)(this,t),this.auth=n,this.resolver=i,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return e(f)(t,[{key:"execute",value:function(){var t,n=this;return new Promise((t=e(c)(e(h).mark((function t(r,i){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingPromise={resolve:r,reject:i},e.prev=1,e.next=4,n.resolver._initialize(n.auth);case 4:return n.eventManager=e.sent,e.next=7,n.onExecution();case 7:n.eventManager.registerConsumer(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n.reject(e.t0);case 13:case"end":return e.stop()}}),t,null,[[1,10]])}))),function(e,n){return t.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(t){var n=this;return e(c)(e(h).mark((function r(){var i,a,o,s,u,c,l;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.urlResponse,a=t.sessionId,o=t.postBody,s=t.tenantId,u=t.error,c=t.type,!u){e.next=4;break}return n.reject(u),e.abrupt("return");case 4:return l={auth:n.auth,requestUri:i,sessionId:a,tenantId:s||void 0,postBody:o||void 0,user:n.user,bypassAuthState:n.bypassAuthState},e.prev=5,e.t0=n,e.next=9,n.getIdpTask(c)(l);case 9:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=16;break;case 13:e.prev=13,e.t2=e.catch(5),n.reject(e.t2);case 16:case"end":return e.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Uh;case"linkViaPopup":case"linkViaRedirect":return qh;case"reauthViaPopup":case"reauthViaRedirect":return Bh;default:Hc(this.auth,"internal-error")}}},{key:"resolve",value:function(e){Jc(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){Jc(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),t}(),Xh=new rl(2e3,1e4);
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
 */var Kh=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t,i,a,o,s){var u;return e(l)(this,r),(u=n.call(this,t,i,o,s)).provider=a,u.authWindow=null,u.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=e(m)(u),u}return e(f)(r,[{key:"executeNotNull",value:function(){var t=this;return e(c)(e(h).mark((function n(){var r;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.execute();case 2:return Gc(r=e.sent,t.auth,"internal-error"),e.abrupt("return",r);case 5:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){var t=this;return e(c)(e(h).mark((function n(){var r;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Jc(1===t.filter.length,"Popup operations only handle one event"),r=hh(),e.next=4,t.resolver._openPopup(t.auth,t.provider,t.filter[0],r);case 4:t.authWindow=e.sent,t.authWindow.associatedEvent=r,t.resolver._originValidation(t.auth).catch((function(e){t.reject(e)})),t.resolver._isIframeWebStorageSupported(t.auth,(function(e){e||t.reject(Vc(t.auth,"web-storage-unsupported"))})),t.pollUserCancellation();case 9:case"end":return e.stop()}}),n)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(Vc(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(Vc(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,Xh.get())};t()}}]),r}(Vh);Kh.currentPopupAction=null;
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
var Gh=new Map,Yh=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t,i){var a,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(l)(this,r),(a=n.call(this,t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o)).eventId=null,a}return e(f)(r,[{key:"execute",value:function(){var t=this,n=this;return e(c)(e(h).mark((function i(){var a,o;return e(h).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=Gh.get(n.auth._key())){i.next=21;break}return i.prev=2,i.next=5,Jh(n.resolver,n.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,e(ac)(e(uc)(r.prototype),"execute",t).call(n);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:o=i.t0,a=function(){return Promise.resolve(o)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:Gh.set(n.auth._key(),a);case 21:return n.bypassAuthState||Gh.set(n.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(t){var n=this,i=this,a=function(){return e(ac)(e(uc)(r.prototype),"onAuthEvent",n)};return e(c)(e(h).mark((function n(){var r;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("signInViaRedirect"!==t.type){e.next=4;break}return e.abrupt("return",a().call(i,t));case 4:if("unknown"!==t.type){e.next=7;break}return i.resolve(null),e.abrupt("return");case 7:if(!t.eventId){e.next=17;break}return e.next=10,i.auth._redirectUserForId(t.eventId);case 10:if(!(r=e.sent)){e.next=16;break}return i.user=r,e.abrupt("return",a().call(i,t));case 16:i.resolve(null);case 17:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){return e(c)(e(h).mark((function t(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)})))()}},{key:"cleanUp",value:function(){}}]),r}(Vh);function Jh(e,t){return Qh.apply(this,arguments)}function Qh(){return(Qh=e(c)(e(h).mark((function t(n,r){var i,a,o;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=ed(r),a=Zh(n),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,o="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function $h(e,t){Gh.set(e._key(),t)}function Zh(e){return $c(e._redirectPersistence)}function ed(e){return Hl("pendingRedirect",e.config.apiKey,e.name)}
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
 */function td(e,t){return nd.apply(this,arguments)}function nd(){return nd=e(c)(e(h).mark((function t(n,r){var i,a,o,s,u,c=arguments;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a=uf(n),o=jh(a,r),s=new Yh(a,o,i),e.next=6,s.execute();case 6:if(!(u=e.sent)||i){e.next=13;break}return delete u.user._redirectEventId,e.next=11,a._persistUserIfCurrent(u.user);case 11:return e.next=13,a._setRedirectUser(null,r);case 13:return e.abrupt("return",u);case 14:case"end":return e.stop()}}),t)}))),nd.apply(this,arguments)}
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
var rd=function(){"use strict";function t(n){e(l)(this,t),this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return e(f)(t,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ad(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!ad(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Vc(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(id(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(id(e)),this.lastProcessedEventTime=Date.now()}}]),t}();function id(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function ad(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function od(e){return sd.apply(this,arguments)}function sd(){return sd=
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
e(c)(e(h).mark((function t(n){var r,i=arguments;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",ll(n,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),t)}))),sd.apply(this,arguments)}
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
 */var ud=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cd=/^https?/;function ld(){return(ld=e(c)(e(h).mark((function t(n){var r,i,a,o,s,u,c;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,od(n);case 4:r=e.sent.authorizedDomains,i=!0,a=!1,o=void 0,e.prev=6,s=r[Symbol.iterator]();case 8:if(i=(u=s.next()).done){e.next=20;break}if(c=u.value,e.prev=10,!fd(c)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,o=e.t1;case 26:e.prev=26,e.prev=27,i||null==s.return||s.return();case 29:if(e.prev=29,!a){e.next=32;break}throw o;case 32:return e.finish(29);case 33:return e.finish(26);case 34:Hc(n,"unauthorized-domain");case 35:case"end":return e.stop()}}),t,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function fd(e){var t=el(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&a.hostname===i}if(!cd.test(r))return!1;if(ud.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */var hd=new rl(3e4,6e4);function dd(){var t=ph().___jsl,n=!0,r=!1,i=void 0;if(null==t?void 0:t.H)try{for(var a,o=Object.keys(t.H)[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(t.H[s].r=t.H[s].r||[],t.H[s].L=t.H[s].L||[],t.H[s].r=e(p)(t.H[s].L),t.CP)for(var u=0;u<t.CP.length;u++)t.CP[u]=null}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}var pd=null;function vd(e){return pd=pd||function(e){return new Promise((function(t,n){var r,i,a;function o(){dd(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){dd(),n(Vc(e,"network-request-failed"))},timeout:hd.get()})}if(null===(i=null===(r=ph().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=ph().gapi)||void 0===a?void 0:a.load)){var s=Lh("iframefcb");return ph()[s]=function(){gapi.load?o():n(Vc(e,"network-request-failed"))},Oh("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}o()}})).catch((function(e){throw pd=null,e}))}(e),pd}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */var md=new rl(5e3,15e3),yd={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gd=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kd(e){var t=e.config;Gc(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?il(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:Mt},i=gd.get(e.config.apiHost);i&&(r.eid=i);var a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),"".concat(n,"?").concat(Ee(r).slice(1))}function bd(e){return xd.apply(this,arguments)}function xd(){return xd=e(c)(e(h).mark((function t(n){var r,i;return e(h).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,vd(n);case 2:return r=t.sent,Gc(i=ph().gapi,n,"internal-error"),t.abrupt("return",r.open({where:document.body,url:kd(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yd,dontclear:!0},(function(t){return new Promise((r=e(c)(e(h).mark((function r(i,a){var o,s,u;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=function(){ph().clearTimeout(s),i(t)},e.next=3,t.restyle({setHideOnLeave:!1});case 3:o=Vc(n,"network-request-failed"),s=ph().setTimeout((function(){a(o)}),md.get()),t.ping(u).then(u,(function(){a(o)}));case 7:case"end":return e.stop()}}),r)}))),function(e,t){return r.apply(this,arguments)}));var r})));case 6:case"end":return t.stop()}}),t)}))),xd.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */var _d={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wd="_blank",Id="http://localhost",Cd=function(){"use strict";function t(n){e(l)(this,t),this.window=n,this.associatedEvent=null}return e(f)(t,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),t}();function Td(t,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},_d),{width:i.toString(),height:a.toString(),top:o,left:s}),l=Z().toLowerCase();r&&(u=Yl(l)?wd:r),Kl(l)&&(n=n||Id,c.scrollbars="yes");var f=Object.entries(c).reduce((function(t,n){var r=e(v)(n,2),i=r[0],a=r[1];return"".concat(t).concat(i,"=").concat(a,",")}),"");if(tf(l)&&"_self"!==u)return Nd(n||"",u),new Cd(null);var h=window.open(n||"",u,f);Gc(h,t,"popup-blocked");try{h.focus()}catch(e){}return new Cd(h)}function Nd(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */var Sd="__/auth/handler",Ed="emulator/auth/handler";function Rd(t,n,r,i,a,o){Gc(t.config.authDomain,t,"auth-domain-config-required"),Gc(t.config.apiKey,t,"invalid-api-key");var s={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:i,v:Mt,eventId:a};if(n instanceof Df){n.setDefaultLanguage(t.languageCode),s.providerId=n.providerId||"",Ce(n.getCustomParameters())||(s.customParameters=JSON.stringify(n.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var f,h=Object.entries(o||{})[Symbol.iterator]();!(u=(f=h.next()).done);u=!0){var d=e(v)(f.value,2),p=d[0],m=d[1];s[p]=m}}catch(e){c=!0,l=e}finally{try{u||null==h.return||h.return()}finally{if(c)throw l}}}if(n instanceof Mf){var y=n.getScopes().filter((function(e){return""!==e}));y.length>0&&(s.scopes=y.join(","))}t.tenantId&&(s.tid=t.tenantId);var g,k,b=s,x=!0,_=!1,w=void 0;try{for(var I,C=Object.keys(b)[Symbol.iterator]();!(x=(I=C.next()).done);x=!0){var T=I.value;void 0===b[T]&&delete b[T]}}catch(e){_=!0,w=e}finally{try{x||null==C.return||C.return()}finally{if(_)throw w}}return"".concat((g=t,k=g.config,k.emulator?il(k,Ed):"https://".concat(k.authDomain,"/").concat(Sd)),"?").concat(Ee(b).slice(1))}
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
var Ad="webStorageSupport",Pd=function(){"use strict";function t(){e(l)(this,t),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ch,this._completeRedirectFn=td,this._overrideRedirectResult=$h}return e(f)(t,[{key:"_openPopup",value:function(t,n,r,i){var a=this;return e(c)(e(h).mark((function o(){var s,u;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Jc(null===(s=a.eventManagers[t._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),u=Rd(t,n,r,el(),i),e.abrupt("return",Td(t,u,hh()));case 4:case"end":return e.stop()}}),o)})))()}},{key:"_openRedirect",value:function(t,n,r,i){var a=this;return e(c)(e(h).mark((function o(){return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a._originValidation(t);case 2:return o=Rd(t,n,r,el(),i),ph().location.href=o,e.abrupt("return",new Promise((function(){})));case 4:case"end":return e.stop()}var o}),o)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,a=r.promise;return i?Promise.resolve(i):(Jc(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[n]={promise:o},o.catch((function(){delete t.eventManagers[n]})),o}},{key:"initAndGetManager",value:function(t){var n=this;return e(c)(e(h).mark((function r(){var i,a;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,bd(t);case 2:return i=e.sent,a=new rd(t),i.register("authEvent",(function(e){return Gc(null==e?void 0:e.authEvent,t,"invalid-auth-event"),{status:a.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),n.eventManagers[t._key()]={manager:a},n.iframes[t._key()]=i,e.abrupt("return",a);case 8:case"end":return e.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(Ad,{type:Ad},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),Hc(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return ld.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return rf()||Gl()||ef()}}]),t}(),Od=Pd,Ld=function(t){"use strict";e(y)(r,t);var n=e(S)(r);function r(t){var i;return e(l)(this,r),(i=n.call(this,"phone")).credential=t,i}return e(f)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return ll(e,"POST","/v2/accounts/mfaEnrollment:finalize",cl(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return ll(e,"POST","/v2/accounts/mfaSignIn:finalize",cl(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(function(){"use strict";function t(n){e(l)(this,t),this.factorId=n}return e(f)(t,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return Yc("unexpected MultiFactorSessionType")}}}]),t}());(function(){"use strict";function t(){e(l)(this,t)}return e(f)(t,null,[{key:"assertion",value:function(e){return Ld._fromCredential(e)}}]),t}()).FACTOR_ID="phone";var Dd="@firebase/auth",Md="0.20.11",Fd=function(){"use strict";function t(n){e(l)(this,t),this.auth=n,this.internalListeners=new Map}return e(f)(t,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(t){var n=this;return e(c)(e(h).mark((function r(){var i;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.assertAuthConfigured(),e.next=3,n.auth._initializationPromise;case 3:if(n.auth.currentUser){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,n.auth.currentUser.getIdToken(t);case 7:return i=e.sent,e.abrupt("return",{accessToken:i});case 9:case"end":return e.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){Gc(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),t}();
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
var zd,jd=he("authIdTokenMaxAge")||300,Wd=null,Ud=function(t){return n=e(c)(e(h).mark((function n(r){var i,a,o;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=r,!e.t0){e.next=5;break}return e.next=4,r.getIdTokenResult();case 4:e.t0=e.sent;case 5:if(i=e.t0,!((a=i&&((new Date).getTime()-Date.parse(i.issuedAtTime))/1e3)&&a>jd)){e.next=9;break}return e.abrupt("return");case 9:if(o=null==i?void 0:i.token,Wd!==o){e.next=12;break}return e.abrupt("return");case 12:return Wd=o,e.next=15,fetch(t,{method:o?"POST":"DELETE",headers:o?{Authorization:"Bearer ".concat(o)}:{}});case 15:case"end":return e.stop()}}),n)}))),function(e){return n.apply(this,arguments)};var n};function Bd(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:zt(),t=Pt(e,"auth");if(t.isInitialized())return t.getImmediate();var n=Zc(e,{popupRedirectResolver:Od,persistence:[Ah,sh,ch]}),r=he("authTokenSyncURL");if(r){var i=Ud(r);nh(n,i,(function(){return i(n.currentUser)})),th(n,(function(e){return i(e)}))}var a=ce("auth");return a&&lf(n,"http://".concat(a)),n}zd="Browser",At(new Ue("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=r.options,o=a.apiKey,s=a.authDomain;return function(e,t){Gc(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),Gc(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var r={apiKey:o,authDomain:s,clientPlatform:zd,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:af(zd)},i=new sf(e,t,r);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map($c);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(i,n),i}(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),At(new Ue("auth-internal",(function(e){var t=uf(e.getProvider("auth").getImmediate());return new Fd(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),jt(Dd,Md,
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
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(zd)),jt(Dd,Md,"esm2017");var qd={apiKey:"AIzaSyCdMyNr6hyJdUGTvscIGf-cwWwUDuJgJHU",authDomain:"my-awesome-filmoteka.firebaseapp.com",projectId:"my-awesome-filmoteka",storageBucket:"my-awesome-filmoteka.appspot.com",messagingSenderId:"774761298251",appId:"1:774761298251:web:d761136a1dde215f0250ce",measurementId:"G-3L76ZDF9LH",databaseURL:"https://my-awesome-filmoteka-default-rtdb.europe-west1.firebasedatabase.app"},Hd=rc(Ft(qd));console.log(Hd);var Vd=function(){"use strict";function t(){e(l)(this,t),this.formData={}}return e(f)(t,[{key:"createAccount",value:function(){var t=this;return e(c)(e(h).mark((function n(){var r,i,a,o,s;return e(h).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.formData,i=r.email,a=r.password,o=Ft(qd),s=Bd(o),e.next=5,Zf(s,i,a).then((function(e){console.log(e.user),hasAccount=!0;e.user})).catch((function(e){var t=e.code,n=e.message;console.log(e),400===t&&Notify.failure("Wrong password",n)}));case 5:case"end":return e.stop()}}),n)})))()}}]),t}(),Xd={login:document.querySelector(".login"),main:document.querySelector("main")},Kd=new Vd;Xd.login.addEventListener("click",(function(e){e.preventDefault(),Gd.createModal(),t='<form class="login-form">\n  <label for="user_email">Email</label>\n  <input type="email" name="email" id="user_email" />\n\n  <label for="user_password">Password</label>\n  <input type="password" name="password" id="user_password" />\n  <button type="submit" class="login-form__submit">Log In</button>\n</form>',Gd.modalBox.innerHTML+=t,Gd.modalBox.classList.add("login__box"),Xd.form=document.querySelector(".login-form"),Gd.addListenerOnClickClose(),Gd.addListenerOnKeyClose(),Xd.form.addEventListener("input",Yd),Xd.form.addEventListener("submit",Jd);var t}));var Gd=new(0,u.ModalBox);function Yd(e){Kd.formData[e.target.name]=e.target.value}function Jd(e){e.preventDefault(),Kd.createAccount(),e.currentTarget.reset()}}();
//# sourceMappingURL=index.70ea9637.js.map
