(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[3],{46:function(t,e,n){"use strict";n.r(e),n.d(e,"getCLS",(function(){return m})),n.d(e,"getFCP",(function(){return g})),n.d(e,"getFID",(function(){return h})),n.d(e,"getLCP",(function(){return S})),n.d(e,"getTTFB",(function(){return F}));var i,a,r=function(){return"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)},o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return{name:t,value:e,delta:0,entries:[],id:r(),isFinal:!1}},u=function(t,e){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var n=new PerformanceObserver((function(t){return t.getEntries().map(e)}));return n.observe({type:t,buffered:!0}),n}}catch(t){}},c=!1,s=!1,d=function(t){c=!t.persisted},p=function(){addEventListener("pagehide",d),addEventListener("beforeunload",(function(){}))},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];s||(p(),s=!0),addEventListener("visibilitychange",(function(e){var n=e.timeStamp;"hidden"===document.visibilityState&&t({timeStamp:n,isUnloading:c})}),{capture:!0,once:e})},l=function(t,e,n,i){var a;return function(){n&&e.isFinal&&n.disconnect(),e.value>=0&&(i||e.isFinal||"hidden"===document.visibilityState)&&(e.delta=e.value-(a||0),(e.delta||e.isFinal||void 0===a)&&(t(e),a=e.value))}},m=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=o("CLS",0),a=function(t){t.hadRecentInput||(i.value+=t.value,i.entries.push(t),e())},r=u("layout-shift",a);r&&(e=l(t,i,r,n),f((function(t){var n=t.isUnloading;r.takeRecords().map(a),n&&(i.isFinal=!0),e()})))},v=function(){return void 0===i&&(i="hidden"===document.visibilityState?0:1/0,f((function(t){var e=t.timeStamp;return i=e}),!0)),{get timeStamp(){return i}}},g=function(t){var e,n=o("FCP"),i=v(),a=u("paint",(function(t){"first-contentful-paint"===t.name&&t.startTime<i.timeStamp&&(n.value=t.startTime,n.isFinal=!0,n.entries.push(t),e())}));a&&(e=l(t,n,a))},h=function(t){var e=o("FID"),n=v(),i=function(t){t.startTime<n.timeStamp&&(e.value=t.processingStart-t.startTime,e.entries.push(t),e.isFinal=!0,r())},a=u("first-input",i),r=l(t,e,a);a?f((function(){a.takeRecords().map(i),a.disconnect()}),!0):window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay((function(t,i){i.timeStamp<n.timeStamp&&(e.value=t,e.isFinal=!0,e.entries=[{entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+t}],r())}))},y=function(){return a||(a=new Promise((function(t){return["scroll","keydown","pointerdown"].map((function(e){addEventListener(e,t,{once:!0,passive:!0,capture:!0})}))}))),a},S=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=o("LCP"),a=v(),r=function(t){var n=t.startTime;n<a.timeStamp?(i.value=n,i.entries.push(t)):i.isFinal=!0,e()},c=u("largest-contentful-paint",r);if(c){e=l(t,i,c,n);var s=function(){i.isFinal||(c.takeRecords().map(r),i.isFinal=!0,e())};y().then(s),f(s,!0)}},F=function(t){var e,n=o("TTFB");e=function(){try{var e=performance.getEntriesByType("navigation")[0]||function(){var t=performance.timing,e={entryType:"navigation",startTime:0};for(var n in t)"navigationStart"!==n&&"toJSON"!==n&&(e[n]=Math.max(t[n]-t.navigationStart,0));return e}();n.value=n.delta=e.responseStart,n.entries=[e],n.isFinal=!0,t(n)}catch(t){}},"complete"===document.readyState?setTimeout(e,0):addEventListener("pageshow",e)}}}]);
//# sourceMappingURL=3.41f5ed20.chunk.js.map