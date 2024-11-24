(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();var Ie={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},oe={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},_e=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],$={CSS:{},springs:{}};function I(e,r,n){return Math.min(Math.max(e,r),n)}function R(e,r){return e.indexOf(r)>-1}function ee(e,r){return e.apply(null,r)}var f={arr:function(e){return Array.isArray(e)},obj:function(e){return R(Object.prototype.toString.call(e),"Object")},pth:function(e){return f.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||f.svg(e)},str:function(e){return typeof e=="string"},fnc:function(e){return typeof e=="function"},und:function(e){return typeof e>"u"},nil:function(e){return f.und(e)||e===null},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return f.hex(e)||f.rgb(e)||f.hsl(e)},key:function(e){return!Ie.hasOwnProperty(e)&&!oe.hasOwnProperty(e)&&e!=="targets"&&e!=="keyframes"}};function Oe(e){var r=/\(([^)]+)\)/.exec(e);return r?r[1].split(",").map(function(n){return parseFloat(n)}):[]}function ke(e,r){var n=Oe(e),a=I(f.und(n[0])?1:n[0],.1,100),t=I(f.und(n[1])?100:n[1],.1,100),o=I(f.und(n[2])?10:n[2],.1,100),u=I(f.und(n[3])?0:n[3],.1,100),s=Math.sqrt(t/a),i=o/(2*Math.sqrt(t*a)),m=i<1?s*Math.sqrt(1-i*i):0,c=1,l=i<1?(i*s+-u)/m:-u+s;function h(p){var d=r?r*p/1e3:p;return i<1?d=Math.exp(-d*i*s)*(c*Math.cos(m*d)+l*Math.sin(m*d)):d=(c+l*d)*Math.exp(-d*s),p===0||p===1?p:1-d}function w(){var p=$.springs[e];if(p)return p;for(var d=1/6,b=0,M=0;;)if(b+=d,h(b)===1){if(M++,M>=16)break}else M=0;var g=b*d*1e3;return $.springs[e]=g,g}return r?h:w}function Je(e){return e===void 0&&(e=10),function(r){return Math.ceil(I(r,1e-6,1)*e)*(1/e)}}var Ye=function(){var e=11,r=1/(e-1);function n(c,l){return 1-3*l+3*c}function a(c,l){return 3*l-6*c}function t(c){return 3*c}function o(c,l,h){return((n(l,h)*c+a(l,h))*c+t(l))*c}function u(c,l,h){return 3*n(l,h)*c*c+2*a(l,h)*c+t(l)}function s(c,l,h,w,p){var d,b,M=0;do b=l+(h-l)/2,d=o(b,w,p)-c,d>0?h=b:l=b;while(Math.abs(d)>1e-7&&++M<10);return b}function i(c,l,h,w){for(var p=0;p<4;++p){var d=u(l,h,w);if(d===0)return l;var b=o(l,h,w)-c;l-=b/d}return l}function m(c,l,h,w){if(!(0<=c&&c<=1&&0<=h&&h<=1))return;var p=new Float32Array(e);if(c!==l||h!==w)for(var d=0;d<e;++d)p[d]=o(d*r,c,h);function b(M){for(var g=0,v=1,x=e-1;v!==x&&p[v]<=M;++v)g+=r;--v;var A=(M-p[v])/(p[v+1]-p[v]),L=g+A*r,B=u(L,c,h);return B>=.001?i(M,L,c,h):B===0?L:s(M,g,g+r,c,h)}return function(M){return c===l&&h===w||M===0||M===1?M:o(b(M),l,w)}}return m}(),Ce=function(){var e={linear:function(){return function(a){return a}}},r={Sine:function(){return function(a){return 1-Math.cos(a*Math.PI/2)}},Expo:function(){return function(a){return a?Math.pow(2,10*a-10):0}},Circ:function(){return function(a){return 1-Math.sqrt(1-a*a)}},Back:function(){return function(a){return a*a*(3*a-2)}},Bounce:function(){return function(a){for(var t,o=4;a<((t=Math.pow(2,--o))-1)/11;);return 1/Math.pow(4,3-o)-7.5625*Math.pow((t*3-2)/22-a,2)}},Elastic:function(a,t){a===void 0&&(a=1),t===void 0&&(t=.5);var o=I(a,1,10),u=I(t,.1,2);return function(s){return s===0||s===1?s:-o*Math.pow(2,10*(s-1))*Math.sin((s-1-u/(Math.PI*2)*Math.asin(1/o))*(Math.PI*2)/u)}}},n=["Quad","Cubic","Quart","Quint"];return n.forEach(function(a,t){r[a]=function(){return function(o){return Math.pow(o,t+2)}}}),Object.keys(r).forEach(function(a){var t=r[a];e["easeIn"+a]=t,e["easeOut"+a]=function(o,u){return function(s){return 1-t(o,u)(1-s)}},e["easeInOut"+a]=function(o,u){return function(s){return s<.5?t(o,u)(s*2)/2:1-t(o,u)(s*-2+2)/2}},e["easeOutIn"+a]=function(o,u){return function(s){return s<.5?(1-t(o,u)(1-s*2))/2:(t(o,u)(s*2-1)+1)/2}}}),e}();function ue(e,r){if(f.fnc(e))return e;var n=e.split("(")[0],a=Ce[n],t=Oe(e);switch(n){case"spring":return ke(e,r);case"cubicBezier":return ee(Ye,t);case"steps":return ee(Je,t);default:return ee(a,t)}}function De(e){try{var r=document.querySelectorAll(e);return r}catch{return}}function Q(e,r){for(var n=e.length,a=arguments.length>=2?arguments[1]:void 0,t=[],o=0;o<n;o++)if(o in e){var u=e[o];r.call(a,u,o,e)&&t.push(u)}return t}function _(e){return e.reduce(function(r,n){return r.concat(f.arr(n)?_(n):n)},[])}function Me(e){return f.arr(e)?e:(f.str(e)&&(e=De(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function se(e,r){return e.some(function(n){return n===r})}function ce(e){var r={};for(var n in e)r[n]=e[n];return r}function te(e,r){var n=ce(e);for(var a in e)n[a]=r.hasOwnProperty(a)?r[a]:e[a];return n}function J(e,r){var n=ce(e);for(var a in r)n[a]=f.und(e[a])?r[a]:e[a];return n}function Ge(e){var r=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);return r?"rgba("+r[1]+",1)":e}function Xe(e){var r=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=e.replace(r,function(s,i,m,c){return i+i+m+m+c+c}),a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),t=parseInt(a[1],16),o=parseInt(a[2],16),u=parseInt(a[3],16);return"rgba("+t+","+o+","+u+",1)"}function er(e){var r=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),n=parseInt(r[1],10)/360,a=parseInt(r[2],10)/100,t=parseInt(r[3],10)/100,o=r[4]||1;function u(h,w,p){return p<0&&(p+=1),p>1&&(p-=1),p<1/6?h+(w-h)*6*p:p<1/2?w:p<2/3?h+(w-h)*(2/3-p)*6:h}var s,i,m;if(a==0)s=i=m=t;else{var c=t<.5?t*(1+a):t+a-t*a,l=2*t-c;s=u(l,c,n+1/3),i=u(l,c,n),m=u(l,c,n-1/3)}return"rgba("+s*255+","+i*255+","+m*255+","+o+")"}function rr(e){if(f.rgb(e))return Ge(e);if(f.hex(e))return Xe(e);if(f.hsl(e))return er(e)}function C(e){var r=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(r)return r[1]}function tr(e){if(R(e,"translate")||e==="perspective")return"px";if(R(e,"rotate")||R(e,"skew"))return"deg"}function ne(e,r){return f.fnc(e)?e(r.target,r.id,r.total):e}function O(e,r){return e.getAttribute(r)}function fe(e,r,n){var a=C(r);if(se([n,"deg","rad","turn"],a))return r;var t=$.CSS[r+n];if(!f.und(t))return t;var o=100,u=document.createElement(e.tagName),s=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;s.appendChild(u),u.style.position="absolute",u.style.width=o+n;var i=o/u.offsetWidth;s.removeChild(u);var m=i*parseFloat(r);return $.CSS[r+n]=m,m}function Ae(e,r,n){if(r in e.style){var a=r.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),t=e.style[r]||getComputedStyle(e).getPropertyValue(a)||"0";return n?fe(e,t,n):t}}function le(e,r){if(f.dom(e)&&!f.inp(e)&&(!f.nil(O(e,r))||f.svg(e)&&e[r]))return"attribute";if(f.dom(e)&&se(_e,r))return"transform";if(f.dom(e)&&r!=="transform"&&Ae(e,r))return"css";if(e[r]!=null)return"object"}function Be(e){if(f.dom(e)){for(var r=e.style.transform||"",n=/(\w+)\(([^)]*)\)/g,a=new Map,t;t=n.exec(r);)a.set(t[1],t[2]);return a}}function nr(e,r,n,a){var t=R(r,"scale")?1:0+tr(r),o=Be(e).get(r)||t;return n&&(n.transforms.list.set(r,o),n.transforms.last=r),a?fe(e,o,a):o}function de(e,r,n,a){switch(le(e,r)){case"transform":return nr(e,r,a,n);case"css":return Ae(e,r,n);case"attribute":return O(e,r);default:return e[r]||0}}function ve(e,r){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var a=C(e)||0,t=parseFloat(r),o=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return t+o+a;case"-":return t-o+a;case"*":return t*o+a}}function Fe(e,r){if(f.col(e))return rr(e);if(/\s/g.test(e))return e;var n=C(e),a=n?e.substr(0,e.length-n.length):e;return r?a+r:a}function ge(e,r){return Math.sqrt(Math.pow(r.x-e.x,2)+Math.pow(r.y-e.y,2))}function ar(e){return Math.PI*2*O(e,"r")}function ir(e){return O(e,"width")*2+O(e,"height")*2}function or(e){return ge({x:O(e,"x1"),y:O(e,"y1")},{x:O(e,"x2"),y:O(e,"y2")})}function Ve(e){for(var r=e.points,n=0,a,t=0;t<r.numberOfItems;t++){var o=r.getItem(t);t>0&&(n+=ge(a,o)),a=o}return n}function ur(e){var r=e.points;return Ve(e)+ge(r.getItem(r.numberOfItems-1),r.getItem(0))}function qe(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return ar(e);case"rect":return ir(e);case"line":return or(e);case"polyline":return Ve(e);case"polygon":return ur(e)}}function sr(e){var r=qe(e);return e.setAttribute("stroke-dasharray",r),r}function cr(e){for(var r=e.parentNode;f.svg(r)&&f.svg(r.parentNode);)r=r.parentNode;return r}function je(e,r){var n=r||{},a=n.el||cr(e),t=a.getBoundingClientRect(),o=O(a,"viewBox"),u=t.width,s=t.height,i=n.viewBox||(o?o.split(" "):[0,0,u,s]);return{el:a,viewBox:i,x:i[0]/1,y:i[1]/1,w:u,h:s,vW:i[2],vH:i[3]}}function fr(e,r){var n=f.str(e)?De(e)[0]:e,a=r||100;return function(t){return{property:t,el:n,svg:je(n),totalLength:qe(n)*(a/100)}}}function lr(e,r,n){function a(c){c===void 0&&(c=0);var l=r+c>=1?r+c:0;return e.el.getPointAtLength(l)}var t=je(e.el,e.svg),o=a(),u=a(-1),s=a(1),i=n?1:t.w/t.vW,m=n?1:t.h/t.vH;switch(e.property){case"x":return(o.x-t.x)*i;case"y":return(o.y-t.y)*m;case"angle":return Math.atan2(s.y-u.y,s.x-u.x)*180/Math.PI}}function Te(e,r){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,a=Fe(f.pth(e)?e.totalLength:e,r)+"";return{original:a,numbers:a.match(n)?a.match(n).map(Number):[0],strings:f.str(e)||r?a.split(n):[]}}function he(e){var r=e?_(f.arr(e)?e.map(Me):Me(e)):[];return Q(r,function(n,a,t){return t.indexOf(n)===a})}function He(e){var r=he(e);return r.map(function(n,a){return{target:n,id:a,total:r.length,transforms:{list:Be(n)}}})}function dr(e,r){var n=ce(r);if(/^spring/.test(n.easing)&&(n.duration=ke(n.easing)),f.arr(e)){var a=e.length,t=a===2&&!f.obj(e[0]);t?e={value:e}:f.fnc(r.duration)||(n.duration=r.duration/a)}var o=f.arr(e)?e:[e];return o.map(function(u,s){var i=f.obj(u)&&!f.pth(u)?u:{value:u};return f.und(i.delay)&&(i.delay=s?0:r.delay),f.und(i.endDelay)&&(i.endDelay=s===o.length-1?r.endDelay:0),i}).map(function(u){return J(u,n)})}function vr(e){for(var r=Q(_(e.map(function(o){return Object.keys(o)})),function(o){return f.key(o)}).reduce(function(o,u){return o.indexOf(u)<0&&o.push(u),o},[]),n={},a=function(o){var u=r[o];n[u]=e.map(function(s){var i={};for(var m in s)f.key(m)?m==u&&(i.value=s[m]):i[m]=s[m];return i})},t=0;t<r.length;t++)a(t);return n}function gr(e,r){var n=[],a=r.keyframes;a&&(r=J(vr(a),r));for(var t in r)f.key(t)&&n.push({name:t,tweens:dr(r[t],e)});return n}function hr(e,r){var n={};for(var a in e){var t=ne(e[a],r);f.arr(t)&&(t=t.map(function(o){return ne(o,r)}),t.length===1&&(t=t[0])),n[a]=t}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}function mr(e,r){var n;return e.tweens.map(function(a){var t=hr(a,r),o=t.value,u=f.arr(o)?o[1]:o,s=C(u),i=de(r.target,e.name,s,r),m=n?n.to.original:i,c=f.arr(o)?o[0]:m,l=C(c)||C(i),h=s||l;return f.und(u)&&(u=m),t.from=Te(c,h),t.to=Te(ve(u,c),h),t.start=n?n.end:0,t.end=t.start+t.delay+t.duration+t.endDelay,t.easing=ue(t.easing,t.duration),t.isPath=f.pth(o),t.isPathTargetInsideSVG=t.isPath&&f.svg(r.target),t.isColor=f.col(t.from.original),t.isColor&&(t.round=1),n=t,t})}var ze={css:function(e,r,n){return e.style[r]=n},attribute:function(e,r,n){return e.setAttribute(r,n)},object:function(e,r,n){return e[r]=n},transform:function(e,r,n,a,t){if(a.list.set(r,n),r===a.last||t){var o="";a.list.forEach(function(u,s){o+=s+"("+u+") "}),e.style.transform=o}}};function Ne(e,r){var n=He(e);n.forEach(function(a){for(var t in r){var o=ne(r[t],a),u=a.target,s=C(o),i=de(u,t,s,a),m=s||C(i),c=ve(Fe(o,m),i),l=le(u,t);ze[l](u,t,c,a.transforms,!0)}})}function pr(e,r){var n=le(e.target,r.name);if(n){var a=mr(r,e),t=a[a.length-1];return{type:n,property:r.name,animatable:e,tweens:a,duration:t.end,delay:a[0].delay,endDelay:t.endDelay}}}function yr(e,r){return Q(_(e.map(function(n){return r.map(function(a){return pr(n,a)})})),function(n){return!f.und(n)})}function We(e,r){var n=e.length,a=function(o){return o.timelineOffset?o.timelineOffset:0},t={};return t.duration=n?Math.max.apply(Math,e.map(function(o){return a(o)+o.duration})):r.duration,t.delay=n?Math.min.apply(Math,e.map(function(o){return a(o)+o.delay})):r.delay,t.endDelay=n?t.duration-Math.max.apply(Math,e.map(function(o){return a(o)+o.duration-o.endDelay})):r.endDelay,t}var we=0;function br(e){var r=te(Ie,e),n=te(oe,e),a=gr(n,e),t=He(e.targets),o=yr(t,a),u=We(o,n),s=we;return we++,J(r,{id:s,children:[],animatables:t,animations:o,duration:u.duration,delay:u.delay,endDelay:u.endDelay})}var S=[],Re=function(){var e;function r(){!e&&(!xe()||!y.suspendWhenDocumentHidden)&&S.length>0&&(e=requestAnimationFrame(n))}function n(t){for(var o=S.length,u=0;u<o;){var s=S[u];s.paused?(S.splice(u,1),o--):(s.tick(t),u++)}e=u>0?requestAnimationFrame(n):void 0}function a(){y.suspendWhenDocumentHidden&&(xe()?e=cancelAnimationFrame(e):(S.forEach(function(t){return t._onDocumentVisibility()}),Re()))}return typeof document<"u"&&document.addEventListener("visibilitychange",a),r}();function xe(){return!!document&&document.hidden}function y(e){e===void 0&&(e={});var r=0,n=0,a=0,t,o=0,u=null;function s(g){var v=window.Promise&&new Promise(function(x){return u=x});return g.finished=v,v}var i=br(e);s(i);function m(){var g=i.direction;g!=="alternate"&&(i.direction=g!=="normal"?"normal":"reverse"),i.reversed=!i.reversed,t.forEach(function(v){return v.reversed=i.reversed})}function c(g){return i.reversed?i.duration-g:g}function l(){r=0,n=c(i.currentTime)*(1/y.speed)}function h(g,v){v&&v.seek(g-v.timelineOffset)}function w(g){if(i.reversePlayback)for(var x=o;x--;)h(g,t[x]);else for(var v=0;v<o;v++)h(g,t[v])}function p(g){for(var v=0,x=i.animations,A=x.length;v<A;){var L=x[v],B=L.animatable,j=L.tweens,F=j.length-1,T=j[F];F&&(T=Q(j,function(Qe){return g<Qe.end})[0]||T);for(var V=I(g-T.start-T.delay,0,T.duration)/T.duration,U=isNaN(V)?1:T.easing(V),E=T.to.strings,Y=T.round,G=[],Ke=T.to.numbers.length,q=void 0,H=0;H<Ke;H++){var z=void 0,pe=T.to.numbers[H],ye=T.from.numbers[H]||0;T.isPath?z=lr(T.value,U*pe,T.isPathTargetInsideSVG):z=ye+U*(pe-ye),Y&&(T.isColor&&H>2||(z=Math.round(z*Y)/Y)),G.push(z)}var be=E.length;if(!be)q=G[0];else{q=E[0];for(var N=0;N<be;N++){E[N];var Le=E[N+1],X=G[N];isNaN(X)||(Le?q+=X+Le:q+=X+" ")}}ze[L.type](B.target,L.property,q,B.transforms),L.currentValue=q,v++}}function d(g){i[g]&&!i.passThrough&&i[g](i)}function b(){i.remaining&&i.remaining!==!0&&i.remaining--}function M(g){var v=i.duration,x=i.delay,A=v-i.endDelay,L=c(g);i.progress=I(L/v*100,0,100),i.reversePlayback=L<i.currentTime,t&&w(L),!i.began&&i.currentTime>0&&(i.began=!0,d("begin")),!i.loopBegan&&i.currentTime>0&&(i.loopBegan=!0,d("loopBegin")),L<=x&&i.currentTime!==0&&p(0),(L>=A&&i.currentTime!==v||!v)&&p(v),L>x&&L<A?(i.changeBegan||(i.changeBegan=!0,i.changeCompleted=!1,d("changeBegin")),d("change"),p(L)):i.changeBegan&&(i.changeCompleted=!0,i.changeBegan=!1,d("changeComplete")),i.currentTime=I(L,0,v),i.began&&d("update"),g>=v&&(n=0,b(),i.remaining?(r=a,d("loopComplete"),i.loopBegan=!1,i.direction==="alternate"&&m()):(i.paused=!0,i.completed||(i.completed=!0,d("loopComplete"),d("complete"),!i.passThrough&&"Promise"in window&&(u(),s(i)))))}return i.reset=function(){var g=i.direction;i.passThrough=!1,i.currentTime=0,i.progress=0,i.paused=!0,i.began=!1,i.loopBegan=!1,i.changeBegan=!1,i.completed=!1,i.changeCompleted=!1,i.reversePlayback=!1,i.reversed=g==="reverse",i.remaining=i.loop,t=i.children,o=t.length;for(var v=o;v--;)i.children[v].reset();(i.reversed&&i.loop!==!0||g==="alternate"&&i.loop===1)&&i.remaining++,p(i.reversed?i.duration:0)},i._onDocumentVisibility=l,i.set=function(g,v){return Ne(g,v),i},i.tick=function(g){a=g,r||(r=a),M((a+(n-r))*y.speed)},i.seek=function(g){M(c(g))},i.pause=function(){i.paused=!0,l()},i.play=function(){i.paused&&(i.completed&&i.reset(),i.paused=!1,S.push(i),l(),Re())},i.reverse=function(){m(),i.completed=!i.reversed,l()},i.restart=function(){i.reset(),i.play()},i.remove=function(g){var v=he(g);Ue(v,i)},i.reset(),i.autoplay&&i.play(),i}function Pe(e,r){for(var n=r.length;n--;)se(e,r[n].animatable.target)&&r.splice(n,1)}function Ue(e,r){var n=r.animations,a=r.children;Pe(e,n);for(var t=a.length;t--;){var o=a[t],u=o.animations;Pe(e,u),!u.length&&!o.children.length&&a.splice(t,1)}!n.length&&!a.length&&r.pause()}function Lr(e){for(var r=he(e),n=S.length;n--;){var a=S[n];Ue(r,a)}}function Mr(e,r){r===void 0&&(r={});var n=r.direction||"normal",a=r.easing?ue(r.easing):null,t=r.grid,o=r.axis,u=r.from||0,s=u==="first",i=u==="center",m=u==="last",c=f.arr(e),l=parseFloat(c?e[0]:e),h=c?parseFloat(e[1]):0,w=C(c?e[1]:e)||0,p=r.start||0+(c?l:0),d=[],b=0;return function(M,g,v){if(s&&(u=0),i&&(u=(v-1)/2),m&&(u=v-1),!d.length){for(var x=0;x<v;x++){if(!t)d.push(Math.abs(u-x));else{var A=i?(t[0]-1)/2:u%t[0],L=i?(t[1]-1)/2:Math.floor(u/t[0]),B=x%t[0],j=Math.floor(x/t[0]),F=A-B,T=L-j,V=Math.sqrt(F*F+T*T);o==="x"&&(V=-F),o==="y"&&(V=-T),d.push(V)}b=Math.max.apply(Math,d)}a&&(d=d.map(function(E){return a(E/b)*b})),n==="reverse"&&(d=d.map(function(E){return o?E<0?E*-1:-E:Math.abs(b-E)}))}var U=c?(h-l)/b:l;return p+U*(Math.round(d[g]*100)/100)+w}}function Tr(e){e===void 0&&(e={});var r=y(e);return r.duration=0,r.add=function(n,a){var t=S.indexOf(r),o=r.children;t>-1&&S.splice(t,1);function u(h){h.passThrough=!0}for(var s=0;s<o.length;s++)u(o[s]);var i=J(n,te(oe,e));i.targets=i.targets||e.targets;var m=r.duration;i.autoplay=!1,i.direction=r.direction,i.timelineOffset=f.und(a)?m:ve(a,m),u(r),r.seek(i.timelineOffset);var c=y(i);u(c),o.push(c);var l=We(o,e);return r.delay=l.delay,r.endDelay=l.endDelay,r.duration=l.duration,r.seek(0),r.reset(),r.autoplay&&r.play(),r},r}y.version="3.2.1";y.speed=1;y.suspendWhenDocumentHidden=!0;y.running=S;y.remove=Lr;y.get=de;y.set=Ne;y.convertPx=fe;y.path=fr;y.setDashoffset=sr;y.stagger=Mr;y.timeline=Tr;y.easing=ue;y.penner=Ce;y.random=function(e,r){return Math.floor(Math.random()*(r-e+1))+e};const W=e=>new Promise(r=>setTimeout(()=>{r()},e));var ae=document.querySelector("body");ae.classList.add("blurred");var K=document.querySelector("#m-player");onload=async()=>{ae.classList.remove("blurred"),ae.classList.add("blur-in"),await W(1e3),K.classList.remove("hidden"),K.classList.add("blur-in")};var ie=document.querySelector("main"),Ee=document.querySelector("#about"),Z=!1;const Ze=()=>{ie.scrollTop>=Ee.offsetTop&&Z==!1?(Z=!0,document.documentElement.classList.add("dark")):ie.scrollTop<Ee.offsetTop&&Z==!0&&(Z=!1,document.documentElement.classList.remove("dark"))};ie.onscroll=()=>{Ze()};onresize=()=>{Ze()};document.querySelector("#nav-button");document.querySelector("#nav-button");K.addEventListener("mouseover",function(e){y({targets:"#m-player",width:"20vw",duration:1e3,easing:"easeOutExpo"})});K.addEventListener("mouseout",function(e){y({targets:"#m-player",width:"5vw",duration:1e3,easing:"easeOutExpo"})});var k=document.querySelector("#m-audio"),P=document.querySelector("#m-control"),me=document.querySelector("#m-label"),D=document.querySelector("#m-ping");["play","playing"].forEach(e=>{k.addEventListener(e,()=>{P.style.transform="scale(1)",P.src.includes("play-icon")&&(P.src=P.src.replace("play","pause"),y({targets:"#m-label, #dots",keyframes:[{opacity:1},{opacity:0}],easing:"linear",duration:500,complete:()=>{me.innerHTML="Now Playing",y({targets:"#m-label, #dots",keyframes:[{opacity:0},{opacity:1}],easing:"linear",duration:500,complete:()=>{[...D.classList].includes("animate-ping")?(D.classList.toggle("animate-ping"),console.log("toggled")):(D.classList.add("animate-ping"),console.log("added"))}})}}))})});k.volume=.25;k.play();["keydown","mousedown","pointerdown","pointerup","touchend"].forEach(e=>{document.body.addEventListener(e,r=>{r.target.id!="m-control"&&(k.volume=.25,k.play())},{once:!0})});(!k.paused||k.currentTime)&&(P.src=P.src.replace("play","pause"),y({targets:"#m-label, #dots",keyframes:[{opacity:1},{opacity:0}],easing:"linear",duration:500,complete:()=>{me.innerHTML="Now Playing",y({targets:"#m-label, #dots",keyframes:[{opacity:0},{opacity:1}],easing:"linear",duration:500,complete:()=>{[...D.classList].includes("animate-ping")?(D.classList.toggle("animate-ping"),console.log("toggled")):(D.classList.add("animate-ping"),console.log("added"))}})}}));P.addEventListener("click",()=>{P.src.includes("play-icon")?(k.volume=.25,k.play()):P.src.includes("pause-icon")&&(k.pause(),P.src=P.src.replace("pause","play"),P.style.transform="scale(1)",y({targets:"#m-label, #dots",keyframes:[{opacity:1},{opacity:0}],easing:"linear",duration:500,complete:()=>{me.innerHTML="Play Now",y({targets:"#m-label, #dots",keyframes:[{opacity:0},{opacity:1}],easing:"linear",duration:500,complete:()=>{[...D.classList].includes("animate-ping")?(D.classList.toggle("animate-ping"),console.log("toggled")):(D.classList.add("animate-ping"),console.log("added"))}})}}))});["mousedown","dragstart"].forEach(e=>{P.addEventListener(e,()=>{P.style.transform="scale(0.8)"})});["mouseup","dragend","drop"].forEach(e=>{P.addEventListener(e,()=>{P.style.transform="scale(1)"})});const Se=["Programmer","Tech VA","Developer"];var re=document.querySelector("#tWriter");const $e=async()=>{const e=async n=>{for(var a in[...n])await W(75),n=n.substring(0,n.length-1),re.innerHTML=n},r=async n=>{let a="";for(let t in[...n])await W(100),a=n.substring(0,Number(t)+1),re.innerHTML=a};for(let n in Se)e(re.innerHTML),await W(1500),r(Se[n]),await W(1500);$e()};$e();