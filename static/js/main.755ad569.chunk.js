(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],{20:function(e,a,t){e.exports={container:"ResetViewController_container__1iiij"}},24:function(e,a,t){e.exports={app:"App_app__J-qCh"}},29:function(e,a,t){e.exports={container:"Setup_container__2Qk8F"}},37:function(e,a,t){e.exports=t(48)},42:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var n,l=t(0),r=t.n(l),c=t(11),u=t.n(c),i=(t(42),t(27)),o=t(24),d=t.n(o),s=t(65),V=t(29),E=t.n(V),b=r.a.memo((function(e){return r.a.createElement("div",{className:E.a.container},r.a.createElement("div",null,r.a.createElement("div",null,"Min"),r.a.createElement(s.a,{type:"number",value:e.minValue,error:e.disable.disabledSetValue,onChange:e.onSetMinValue})),r.a.createElement("div",null,r.a.createElement("div",null,"Max"),r.a.createElement(s.a,{type:"number",value:e.maxValue,error:e.disable.disabledSetValue,onChange:e.onSetMaxValue})))})),m=t(64),S=t(20),p=t.n(S),_=r.a.memo((function(e){return r.a.createElement("div",{className:p.a.container},r.a.createElement(m.a,{variant:"contained",color:"secondary",disabled:e.disableBtn.disabledIncValue,onClick:e.incValue},"+"),r.a.createElement(m.a,{variant:"contained",color:"secondary",disabled:e.disableBtn.disabledSetValue,onClick:e.onChangeSetValue},"Set Value"),r.a.createElement(m.a,{variant:"contained",color:"secondary",disabled:e.disableBtn.disabledDecValue,onClick:e.decValue},"-"))})),I=t(21),T=t(3);!function(e){e.INCREASE_VALUE="INCREASE_VALUE",e.SET_INTERIM_MIN_VALUE="SET_INTERIM_MIN_VALUE",e.SET_INTERIM_MAX_VALUE="SET_INTERIM_MAX_VALUE",e.DECREASE_VALUE="DECREASE_VALUE",e.SET_DISABLE="SET_DISABLE",e.SET_SETTINGS="SET_SETTINGS",e.SET_ERROR="SET_ERROR",e.errorText="set value pls"}(n||(n={}));var O=function(e){return function(a){return{type:e,payload:a}}},v=O(n.SET_SETTINGS),M=O(n.INCREASE_VALUE),j=O(n.DECREASE_VALUE),y=O(n.SET_INTERIM_MIN_VALUE),R=O(n.SET_INTERIM_MAX_VALUE),x=O(n.SET_DISABLE),A=O(n.SET_ERROR),f={interimValueMin:0,interimValueMax:0,maxValue:0,minValue:0,disable:{disabledSetValue:!1,disabledIncValue:!1,disabledDecValue:!1,disabledResetValue:!1},errorMessage:"set value pls",error:!0,currentValue:0},N=function(e){return e.counter},C=t(63),L=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:p.a.container},e.error?r.a.createElement("span",null,e.textError):r.a.createElement("span",null,e.currentValue)),r.a.createElement("div",{className:p.a.container},r.a.createElement(m.a,{variant:"contained",color:"secondary",disabled:e.disableBtn.disabledResetValue,onClick:e.reset},"reset")))};var g=function(){var e=Object(I.c)(N),a=e.disable,t=e.maxValue,n=e.minValue,c=e.errorMessage,u=e.error,o=e.currentValue,s=Object(I.b)(),V=Object(l.useState)(n),E=Object(i.a)(V,2),m=E[0],S=E[1],p=Object(l.useState)(t),T=Object(i.a)(p,2),O=T[0],f=T[1],g=Object(l.useCallback)((function(){D(m,O)}),[m,O]),h=Object(l.useCallback)((function(e){S(+e.currentTarget.value),s(y({min:+e.currentTarget.value}))}),[s]),k=Object(l.useCallback)((function(e){f(+e.currentTarget.value),s(R({max:+e.currentTarget.value}))}),[s]),D=Object(l.useCallback)((function(e,a){s(v({minValue:e,maxValue:a})),s(A({error:!1}))}),[s]),U=Object(l.useCallback)((function(){s((function(e,a){var t=a();t.counter.currentValue<t.counter.maxValue&&e(M({})),t.counter.maxValue-1===t.counter.currentValue&&e(x({disabledDecValue:!1,disabledIncValue:!0,disabledResetValue:!1,disabledSetValue:!0}))}))}),[s]),B=Object(l.useCallback)((function(){s((function(e,a){var t=a();t.counter.currentValue>t.counter.minValue&&e(j({})),t.counter.minValue+1===t.counter.currentValue&&e(x({disabledSetValue:!0,disabledResetValue:!1,disabledIncValue:!1,disabledDecValue:!0}))}))}),[s]),w=Object(l.useCallback)((function(){f(0),S(0),s(A({error:!0}))}),[s]);return r.a.createElement("div",{className:d.a.app},r.a.createElement("div",{className:"wrapper"},r.a.createElement(C.a,{elevation:3},r.a.createElement(b,{error:u,disable:a,onSetMaxValue:k,onSetMinValue:h,maxValue:O,minValue:m}),r.a.createElement(_,{disableBtn:a,minValue:m,maxValue:O,onChangeSetValue:g,incValue:U,decValue:B}),r.a.createElement(L,{error:u,reset:w,disableBtn:a,textError:c,currentValue:o}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h=t(14),k=t(34),D=Object(h.c)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_INTERIM_MAX_VALUE":return Object(T.a)(Object(T.a)({},e),{},{interimValueMax:a.payload.max,disable:Object(T.a)(Object(T.a)({},e.disable),{},{disabledIncValue:e.interimValueMin>=a.payload.max||a.payload.max<0,disabledSetValue:e.interimValueMin>=a.payload.max||a.payload.max<0,disabledDecValue:e.interimValueMin>=a.payload.max||a.payload.max<0,disabledResetValue:e.interimValueMin>=a.payload.max||a.payload.max<0})});case"SET_INTERIM_MIN_VALUE":return Object(T.a)(Object(T.a)({},e),{},{interimValueMin:a.payload.min,disable:Object(T.a)(Object(T.a)({},e.disable),{},{disabledDecValue:a.payload.min>=e.interimValueMax||a.payload.min<0,disabledSetValue:a.payload.min>=e.interimValueMax||a.payload.min<0,disabledIncValue:a.payload.min>=e.interimValueMax||a.payload.min<0,disabledResetValue:a.payload.min>=e.interimValueMax||a.payload.min<0})});case"SET_SETTINGS":return Object(T.a)(Object(T.a)({},e),{},{maxValue:a.payload.maxValue,minValue:a.payload.minValue,currentValue:a.payload.minValue});case"INCREASE_VALUE":return Object(T.a)(Object(T.a)({},e),{},{currentValue:e.currentValue+1});case"DECREASE_VALUE":return Object(T.a)(Object(T.a)({},e),{},{currentValue:e.currentValue-1});case"SET_DISABLE":return Object(T.a)(Object(T.a)({},e),{},{disable:Object(T.a)(Object(T.a)({},e.disable),{},{disabledDecValue:a.payload.disabledDecValue,disabledIncValue:a.payload.disabledIncValue,disabledSetValue:a.payload.disabledSetValue,disabledResetValue:a.payload.disabledResetValue})});case"SET_ERROR":return Object(T.a)(Object(T.a)({},e),{},{errorMessage:e.errorMessage,error:a.payload.error});default:return e}}}),U=Object(h.d)(D,Object(h.a)(k.a));u.a.render(r.a.createElement(I.a,{store:U},r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.755ad569.chunk.js.map