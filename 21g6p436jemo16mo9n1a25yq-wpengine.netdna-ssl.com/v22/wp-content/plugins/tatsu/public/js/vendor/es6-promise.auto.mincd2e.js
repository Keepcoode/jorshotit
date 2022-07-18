!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.ES6Promise=e()}(this,function(){"use strict";function t(t){return"function"==typeof t}function e(){var t=setTimeout;return function(){return t(n,1)}}function n(){for(var t=0;t<w;t+=2){(0,x[t])(x[t+1]),x[t]=void 0,x[t+1]=void 0}w=0}function r(t,e){var n=arguments,r=this,o=new this.constructor(i);void 0===o[O]&&_(o);var s=r._state;return s?function(){var t=n[s-1];S(function(){return v(s,o,t,r._result)})}():h(r,o,t,e),o}function o(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(i);return c(e,t),e}function i(){}function s(t){try{return t.then}catch(t){return F.error=t,F}}function u(e,n,i){n.constructor===e.constructor&&i===r&&n.constructor.resolve===o?function(t,e){e._state===k?f(t,e._result):e._state===q?l(t,e._result):h(e,void 0,function(e){return c(t,e)},function(e){return l(t,e)})}(e,n):i===F?l(e,F.error):void 0===i?f(e,n):t(i)?function(t,e,n){S(function(t){var r=!1,o=function(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}(n,e,function(n){r||(r=!0,e!==n?c(t,n):f(t,n))},function(e){r||(r=!0,l(t,e))},t._label);!r&&o&&(r=!0,l(t,o))},t)}(e,n,i):f(e,n)}function c(t,e){t===e?l(t,new TypeError("You cannot resolve a promise with itself")):function(t){return"function"==typeof t||"object"==typeof t&&null!==t}(e)?u(t,e,s(e)):f(t,e)}function a(t){t._onerror&&t._onerror(t._result),p(t)}function f(t,e){t._state===Y&&(t._result=e,t._state=k,0!==t._subscribers.length&&S(p,t))}function l(t,e){t._state===Y&&(t._state=q,t._result=e,S(a,t))}function h(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+k]=n,o[i+q]=r,0===i&&t._state&&S(p,t)}function p(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?v(n,r,o,i):o(i);t._subscribers.length=0}}function d(){this.error=null}function v(e,n,r,o){var i=t(r),s=void 0,u=void 0,a=void 0,h=void 0;if(i){if((s=function(t,e){try{return t(e)}catch(t){return D.error=t,D}}(r,o))===D?(h=!0,u=s.error,s=null):a=!0,n===s)return void l(n,new TypeError("A promises callback cannot return that same promise."))}else s=o,a=!0;n._state!==Y||(i&&a?c(n,s):h?l(n,u):e===k?f(n,s):e===q&&l(n,s))}function _(t){t[O]=K++,t._state=void 0,t._result=void 0,t._subscribers=[]}function y(t,e){this._instanceConstructor=t,this.promise=new t(i),this.promise[O]||_(this.promise),b(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?f(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&f(this.promise,this._result))):l(this.promise,new Error("Array Methods must be provided an Array"))}function m(t){this[O]=K++,this._result=this._state=void 0,this._subscribers=[],i!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof m?function(t,e){try{e(function(e){c(t,e)},function(e){l(t,e)})}catch(e){l(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}var b=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},w=0,g=void 0,A=void 0,S=function(t,e){x[w]=t,x[w+1]=e,2===(w+=2)&&(A?A(n):C())},j="undefined"!=typeof window?window:void 0,E=j||{},P=E.MutationObserver||E.WebKitMutationObserver,T="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),M="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,x=new Array(1e3),C=void 0;C=T?function(){return process.nextTick(n)}:P?function(){var t=0,e=new P(n),r=document.createTextNode("");return e.observe(r,{characterData:!0}),function(){r.data=t=++t%2}}():M?function(){var t=new MessageChannel;return t.port1.onmessage=n,function(){return t.port2.postMessage(0)}}():void 0===j&&"function"==typeof require?function(){try{var t=require("vertx");return void 0!==(g=t.runOnLoop||t.runOnContext)?function(){g(n)}:e()}catch(t){return e()}}():e();var O=Math.random().toString(36).substring(16),Y=void 0,k=1,q=2,F=new d,D=new d,K=0;return y.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===Y&&n<t;n++)this._eachEntry(e[n],n)},y.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,c=n.resolve;if(c===o){var a=s(t);if(a===r&&t._state!==Y)this._settledAt(t._state,e,t._result);else if("function"!=typeof a)this._remaining--,this._result[e]=t;else if(n===m){var f=new n(i);u(f,t,a),this._willSettleAt(f,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(c(t),e)},y.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===Y&&(this._remaining--,t===q?l(r,n):this._result[e]=n),0===this._remaining&&f(r,this._result)},y.prototype._willSettleAt=function(t,e){var n=this;h(t,void 0,function(t){return n._settledAt(k,e,t)},function(t){return n._settledAt(q,e,t)})},m.all=function(t){return new y(this,t).promise},m.race=function(t){var e=this;return new e(b(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})},m.resolve=o,m.reject=function(t){var e=new this(i);return l(e,t),e},m._setScheduler=function(t){A=t},m._setAsap=function(t){S=t},m._asap=S,m.prototype={constructor:m,then:r,catch:function(t){return this.then(null,t)}},m.polyfill=function(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===n&&!e.cast)return}t.Promise=m},m.Promise=m,m}),ES6Promise.polyfill();