/*! For license information please see main.109ffb9d.js.LICENSE.txt */
!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=1)}([function(e,t,r){"use strict";e.exports=r(3)},function(e,t,r){e.exports=r(5)},function(e,t,r){},function(e,t,r){"use strict";var n=r(4),o="function"===typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,f=o?Symbol.for("react.profiler"):60114,a=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,v="function"===typeof Symbol&&Symbol.iterator;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function S(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}function w(){}function j(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}S.prototype.isReactComponent={},S.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error(b(85));this.updater.enqueueSetState(this,e,t,"setState")},S.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=S.prototype;var O=j.prototype=new w;O.constructor=j,n(O,S.prototype),O.isPureReactComponent=!0;var _={current:null},k=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var n,o={},c=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)k.call(t,n)&&!x.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var f=Array(l),a=0;a<l;a++)f[a]=arguments[a+2];o.children=f}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:u,type:e,key:c,ref:i,props:o,_owner:_.current}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===u}var P=/\/+/g,$=[];function R(e,t,r,n){if($.length){var o=$.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>$.length&&$.push(e)}function I(e,t,r){return null==e?0:function e(t,r,n,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var l=!1;if(null===t)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case u:case c:l=!0}}if(l)return n(o,t,""===r?"."+M(t,0):r),1;if(l=0,r=""===r?".":r+":",Array.isArray(t))for(var f=0;f<t.length;f++){var a=r+M(i=t[f],f);l+=e(i,a,n,o)}else if(null===t||"object"!==typeof t?a=null:a="function"===typeof(a=v&&t[v]||t["@@iterator"])?a:null,"function"===typeof a)for(t=a.call(t),f=0;!(i=t.next()).done;)l+=e(i=i.value,a=r+M(i,f++),n,o);else if("object"===i)throw n=""+t,Error(b(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return l}(e,"",t,r)}function M(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function U(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?T(e,n,r,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+r)),n.push(e))}function T(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(P,"$&/")+"/"),I(e,q,t=R(t,u,n,o)),A(t)}var F={current:null};function L(){var e=F.current;if(null===e)throw Error(b(321));return e}var N={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return T(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;I(e,U,t=R(null,null,t,r)),A(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return T(e,t,null,(function(e){return e})),t},only:function(e){if(!C(e))throw Error(b(143));return e}},t.Component=S,t.Fragment=i,t.Profiler=f,t.PureComponent=j,t.StrictMode=l,t.Suspense=y,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error(b(267,e));var o=n({},e.props),c=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=_.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(a in t)k.call(t,a)&&!x.hasOwnProperty(a)&&(o[a]=void 0===t[a]&&void 0!==f?f[a]:t[a])}var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){f=Array(a);for(var s=0;s<a;s++)f[s]=arguments[s+2];o.children=f}return{$$typeof:u,type:e.type,key:c,ref:i,props:o,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return L().useCallback(e,t)},t.useContext=function(e,t){return L().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return L().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return L().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return L().useLayoutEffect(e,t)},t.useMemo=function(e,t){return L().useMemo(e,t)},t.useReducer=function(e,t,r){return L().useReducer(e,t,r)},t.useRef=function(e){return L().useRef(e)},t.useState=function(e){return L().useState(e)},t.version="16.13.1"},function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function c(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,i,l=c(e),f=1;f<arguments.length;f++){for(var a in r=Object(arguments[f]))o.call(r,a)&&(l[a]=r[a]);if(n){i=n(r);for(var s=0;s<i.length;s++)u.call(r,i[s])&&(l[i[s]]=r[i[s]])}}return l}},function(e,t,r){"use strict";r.r(t);r(2),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,u=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(l){o=!0,u=l}finally{try{n||null==i.return||i.return()}finally{if(o)throw u}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=r(0),c=r.n(u),i=function(e){var t=o(Object(u.useState)(0),2),r=t[0],n=t[1];return c.a.createElement("div",null,c.a.createElement("p",null,"You clicked ",r," times"),c.a.createElement("button",{onClick:function(){return n(r+1)}},e.label))};"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}));var l=window;l.components||(l.components={}),l.components["purescript-app"]={Counter:i}}]);
//# sourceMappingURL=main.109ffb9d.js.map