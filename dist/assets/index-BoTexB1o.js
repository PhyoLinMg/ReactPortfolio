var Qn=Object.defineProperty;var Kn=(e,t,n)=>t in e?Qn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var K=(e,t,n)=>Kn(e,typeof t!="symbol"?t+"":t,n);import{a as At,r as O,m as P,u as er,b as tr,j as c}from"./framer-motion-9MK8dLmd.js";import{a as nr,r as yn,b as rr}from"./react-vendor-DO159-mZ.js";import{G as T}from"./react-icons-B3dYWQhk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();var we={},_t;function ir(){if(_t)return we;_t=1;var e=nr();return we.createRoot=e.createRoot,we.hydrateRoot=e.hydrateRoot,we}var ar=ir();function $e(){return $e=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},$e.apply(null,arguments)}function sr(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function or(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var cr=function(){function e(n){var i=this;this._insertTag=function(r){var a;i.tags.length===0?i.insertionPoint?a=i.insertionPoint.nextSibling:i.prepend?a=i.container.firstChild:a=i.before:a=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(r,a),i.tags.push(r)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(i){i.forEach(this._insertTag)},t.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(or(this));var r=this.tags[this.tags.length-1];if(this.isSpeedy){var a=sr(r);try{a.insertRule(i,a.cssRules.length)}catch{}}else r.appendChild(document.createTextNode(i));this.ctr++},t.flush=function(){this.tags.forEach(function(i){var r;return(r=i.parentNode)==null?void 0:r.removeChild(i)}),this.tags=[],this.ctr=0},e}(),F="-ms-",Le="-moz-",$="-webkit-",bn="comm",gt="rule",xt="decl",lr="@import",wn="@keyframes",dr="@layer",ur=Math.abs,De=String.fromCharCode,hr=Object.assign;function pr(e,t){return V(e,0)^45?(((t<<2^V(e,0))<<2^V(e,1))<<2^V(e,2))<<2^V(e,3):0}function En(e){return e.trim()}function fr(e,t){return(e=t.exec(e))?e[0]:e}function L(e,t,n){return e.replace(t,n)}function at(e,t){return e.indexOf(t)}function V(e,t){return e.charCodeAt(t)|0}function fe(e,t,n){return e.slice(t,n)}function U(e){return e.length}function vt(e){return e.length}function Ee(e,t){return t.push(e),e}function mr(e,t){return e.map(t).join("")}var Re=1,ae=1,Tn=0,B=0,M=0,se="";function Me(e,t,n,i,r,a,o){return{value:e,root:t,parent:n,type:i,props:r,children:a,line:Re,column:ae,length:o,return:""}}function le(e,t){return hr(Me("",null,null,"",null,null,0),e,{length:-e.length},t)}function gr(){return M}function xr(){return M=B>0?V(se,--B):0,ae--,M===10&&(ae=1,Re--),M}function q(){return M=B<Tn?V(se,B++):0,ae++,M===10&&(ae=1,Re++),M}function Y(){return V(se,B)}function Ne(){return B}function ye(e,t){return fe(se,e,t)}function me(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function kn(e){return Re=ae=1,Tn=U(se=e),B=0,[]}function Sn(e){return se="",e}function Ie(e){return En(ye(B-1,st(e===91?e+2:e===40?e+1:e)))}function vr(e){for(;(M=Y())&&M<33;)q();return me(e)>2||me(M)>3?"":" "}function yr(e,t){for(;--t&&q()&&!(M<48||M>102||M>57&&M<65||M>70&&M<97););return ye(e,Ne()+(t<6&&Y()==32&&q()==32))}function st(e){for(;q();)switch(M){case e:return B;case 34:case 39:e!==34&&e!==39&&st(M);break;case 40:e===41&&st(e);break;case 92:q();break}return B}function br(e,t){for(;q()&&e+M!==57;)if(e+M===84&&Y()===47)break;return"/*"+ye(t,B-1)+"*"+De(e===47?e:q())}function wr(e){for(;!me(Y());)q();return ye(e,B)}function Er(e){return Sn(Oe("",null,null,null,[""],e=kn(e),0,[0],e))}function Oe(e,t,n,i,r,a,o,l,d){for(var u=0,p=0,f=o,x=0,N=0,y=0,g=1,w=1,E=1,A=0,k="",D=r,m=a,_=i,I=k;w;)switch(y=A,A=q()){case 40:if(y!=108&&V(I,f-1)==58){at(I+=L(Ie(A),"&","&\f"),"&\f")!=-1&&(E=-1);break}case 34:case 39:case 91:I+=Ie(A);break;case 9:case 10:case 13:case 32:I+=vr(y);break;case 92:I+=yr(Ne()-1,7);continue;case 47:switch(Y()){case 42:case 47:Ee(Tr(br(q(),Ne()),t,n),d);break;default:I+="/"}break;case 123*g:l[u++]=U(I)*E;case 125*g:case 59:case 0:switch(A){case 0:case 125:w=0;case 59+p:E==-1&&(I=L(I,/\f/g,"")),N>0&&U(I)-f&&Ee(N>32?Lt(I+";",i,n,f-1):Lt(L(I," ","")+";",i,n,f-2),d);break;case 59:I+=";";default:if(Ee(_=$t(I,t,n,u,p,r,l,k,D=[],m=[],f),a),A===123)if(p===0)Oe(I,t,_,_,D,a,f,l,m);else switch(x===99&&V(I,3)===110?100:x){case 100:case 108:case 109:case 115:Oe(e,_,_,i&&Ee($t(e,_,_,0,0,r,l,k,r,D=[],f),m),r,m,f,l,i?D:m);break;default:Oe(I,_,_,_,[""],m,0,l,m)}}u=p=N=0,g=E=1,k=I="",f=o;break;case 58:f=1+U(I),N=y;default:if(g<1){if(A==123)--g;else if(A==125&&g++==0&&xr()==125)continue}switch(I+=De(A),A*g){case 38:E=p>0?1:(I+="\f",-1);break;case 44:l[u++]=(U(I)-1)*E,E=1;break;case 64:Y()===45&&(I+=Ie(q())),x=Y(),p=f=U(k=I+=wr(Ne())),A++;break;case 45:y===45&&U(I)==2&&(g=0)}}return a}function $t(e,t,n,i,r,a,o,l,d,u,p){for(var f=r-1,x=r===0?a:[""],N=vt(x),y=0,g=0,w=0;y<i;++y)for(var E=0,A=fe(e,f+1,f=ur(g=o[y])),k=e;E<N;++E)(k=En(g>0?x[E]+" "+A:L(A,/&\f/g,x[E])))&&(d[w++]=k);return Me(e,t,n,r===0?gt:l,d,u,p)}function Tr(e,t,n){return Me(e,t,n,bn,De(gr()),fe(e,2,-2),0)}function Lt(e,t,n,i){return Me(e,t,n,xt,fe(e,0,i),fe(e,i+1,-1),i)}function re(e,t){for(var n="",i=vt(e),r=0;r<i;r++)n+=t(e[r],r,e,t)||"";return n}function kr(e,t,n,i){switch(e.type){case dr:if(e.children.length)break;case lr:case xt:return e.return=e.return||e.value;case bn:return"";case wn:return e.return=e.value+"{"+re(e.children,i)+"}";case gt:e.value=e.props.join(",")}return U(n=re(e.children,i))?e.return=e.value+"{"+n+"}":""}function Sr(e){var t=vt(e);return function(n,i,r,a){for(var o="",l=0;l<t;l++)o+=e[l](n,i,r,a)||"";return o}}function Nr(e){return function(t){t.root||(t=t.return)&&e(t)}}var jt=function(t){var n=new WeakMap;return function(i){if(n.has(i))return n.get(i);var r=t(i);return n.set(i,r),r}};function Nn(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Ir=function(t,n,i){for(var r=0,a=0;r=a,a=Y(),r===38&&a===12&&(n[i]=1),!me(a);)q();return ye(t,B)},Or=function(t,n){var i=-1,r=44;do switch(me(r)){case 0:r===38&&Y()===12&&(n[i]=1),t[i]+=Ir(B-1,n,i);break;case 2:t[i]+=Ie(r);break;case 4:if(r===44){t[++i]=Y()===58?"&\f":"",n[i]=t[i].length;break}default:t[i]+=De(r)}while(r=q());return t},Cr=function(t,n){return Sn(Or(kn(t),n))},Dt=new WeakMap,Ar=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,i=t.parent,r=t.column===i.column&&t.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Dt.get(i))&&!r){Dt.set(t,!0);for(var a=[],o=Cr(n,a),l=i.props,d=0,u=0;d<o.length;d++)for(var p=0;p<l.length;p++,u++)t.props[u]=a[d]?o[d].replace(/&\f/g,l[p]):l[p]+" "+o[d]}}},_r=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function In(e,t){switch(pr(e,t)){case 5103:return $+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $+e+Le+e+F+e+e;case 6828:case 4268:return $+e+F+e+e;case 6165:return $+e+F+"flex-"+e+e;case 5187:return $+e+L(e,/(\w+).+(:[^]+)/,$+"box-$1$2"+F+"flex-$1$2")+e;case 5443:return $+e+F+"flex-item-"+L(e,/flex-|-self/,"")+e;case 4675:return $+e+F+"flex-line-pack"+L(e,/align-content|flex-|-self/,"")+e;case 5548:return $+e+F+L(e,"shrink","negative")+e;case 5292:return $+e+F+L(e,"basis","preferred-size")+e;case 6060:return $+"box-"+L(e,"-grow","")+$+e+F+L(e,"grow","positive")+e;case 4554:return $+L(e,/([^-])(transform)/g,"$1"+$+"$2")+e;case 6187:return L(L(L(e,/(zoom-|grab)/,$+"$1"),/(image-set)/,$+"$1"),e,"")+e;case 5495:case 3959:return L(e,/(image-set\([^]*)/,$+"$1$`$1");case 4968:return L(L(e,/(.+:)(flex-)?(.*)/,$+"box-pack:$3"+F+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$+e+e;case 4095:case 3583:case 4068:case 2532:return L(e,/(.+)-inline(.+)/,$+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(U(e)-1-t>6)switch(V(e,t+1)){case 109:if(V(e,t+4)!==45)break;case 102:return L(e,/(.+:)(.+)-([^]+)/,"$1"+$+"$2-$3$1"+Le+(V(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~at(e,"stretch")?In(L(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(V(e,t+1)!==115)break;case 6444:switch(V(e,U(e)-3-(~at(e,"!important")&&10))){case 107:return L(e,":",":"+$)+e;case 101:return L(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+$+(V(e,14)===45?"inline-":"")+"box$3$1"+$+"$2$3$1"+F+"$2box$3")+e}break;case 5936:switch(V(e,t+11)){case 114:return $+e+F+L(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $+e+F+L(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $+e+F+L(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return $+e+F+e+e}return e}var $r=function(t,n,i,r){if(t.length>-1&&!t.return)switch(t.type){case xt:t.return=In(t.value,t.length);break;case wn:return re([le(t,{value:L(t.value,"@","@"+$)})],r);case gt:if(t.length)return mr(t.props,function(a){switch(fr(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return re([le(t,{props:[L(a,/:(read-\w+)/,":"+Le+"$1")]})],r);case"::placeholder":return re([le(t,{props:[L(a,/:(plac\w+)/,":"+$+"input-$1")]}),le(t,{props:[L(a,/:(plac\w+)/,":"+Le+"$1")]}),le(t,{props:[L(a,/:(plac\w+)/,F+"input-$1")]})],r)}return""})}},Lr=[$r],jr=function(t){var n=t.key;if(n==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(g){var w=g.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var r=t.stylisPlugins||Lr,a={},o,l=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(g){for(var w=g.getAttribute("data-emotion").split(" "),E=1;E<w.length;E++)a[w[E]]=!0;l.push(g)});var d,u=[Ar,_r];{var p,f=[kr,Nr(function(g){p.insert(g)})],x=Sr(u.concat(r,f)),N=function(w){return re(Er(w),x)};d=function(w,E,A,k){p=A,N(w?w+"{"+E.styles+"}":E.styles),k&&(y.inserted[E.name]=!0)}}var y={key:n,sheet:new cr({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:a,registered:{},insert:d};return y.sheet.hydrate(l),y},Be={exports:{}},j={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rt;function Dr(){if(Rt)return j;Rt=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,r=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,o=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,p=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,x=e?Symbol.for("react.suspense_list"):60120,N=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,w=e?Symbol.for("react.fundamental"):60117,E=e?Symbol.for("react.responder"):60118,A=e?Symbol.for("react.scope"):60119;function k(m){if(typeof m=="object"&&m!==null){var _=m.$$typeof;switch(_){case t:switch(m=m.type,m){case d:case u:case i:case a:case r:case f:return m;default:switch(m=m&&m.$$typeof,m){case l:case p:case y:case N:case o:return m;default:return _}}case n:return _}}}function D(m){return k(m)===u}return j.AsyncMode=d,j.ConcurrentMode=u,j.ContextConsumer=l,j.ContextProvider=o,j.Element=t,j.ForwardRef=p,j.Fragment=i,j.Lazy=y,j.Memo=N,j.Portal=n,j.Profiler=a,j.StrictMode=r,j.Suspense=f,j.isAsyncMode=function(m){return D(m)||k(m)===d},j.isConcurrentMode=D,j.isContextConsumer=function(m){return k(m)===l},j.isContextProvider=function(m){return k(m)===o},j.isElement=function(m){return typeof m=="object"&&m!==null&&m.$$typeof===t},j.isForwardRef=function(m){return k(m)===p},j.isFragment=function(m){return k(m)===i},j.isLazy=function(m){return k(m)===y},j.isMemo=function(m){return k(m)===N},j.isPortal=function(m){return k(m)===n},j.isProfiler=function(m){return k(m)===a},j.isStrictMode=function(m){return k(m)===r},j.isSuspense=function(m){return k(m)===f},j.isValidElementType=function(m){return typeof m=="string"||typeof m=="function"||m===i||m===u||m===a||m===r||m===f||m===x||typeof m=="object"&&m!==null&&(m.$$typeof===y||m.$$typeof===N||m.$$typeof===o||m.$$typeof===l||m.$$typeof===p||m.$$typeof===w||m.$$typeof===E||m.$$typeof===A||m.$$typeof===g)},j.typeOf=k,j}var Mt;function Rr(){return Mt||(Mt=1,Be.exports=Dr()),Be.exports}var qe,zt;function Mr(){if(zt)return qe;zt=1;var e=Rr(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},r={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};a[e.ForwardRef]=i,a[e.Memo]=r;function o(y){return e.isMemo(y)?r:a[y.$$typeof]||t}var l=Object.defineProperty,d=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,x=Object.prototype;function N(y,g,w){if(typeof g!="string"){if(x){var E=f(g);E&&E!==x&&N(y,E,w)}var A=d(g);u&&(A=A.concat(u(g)));for(var k=o(y),D=o(g),m=0;m<A.length;++m){var _=A[m];if(!n[_]&&!(w&&w[_])&&!(D&&D[_])&&!(k&&k[_])){var I=p(g,_);try{l(y,_,I)}catch{}}}}return y}return qe=N,qe}Mr();var zr=!0;function On(e,t,n){var i="";return n.split(" ").forEach(function(r){e[r]!==void 0?t.push(e[r]+";"):r&&(i+=r+" ")}),i}var yt=function(t,n,i){var r=t.key+"-"+n.name;(i===!1||zr===!1)&&t.registered[r]===void 0&&(t.registered[r]=n.styles)},bt=function(t,n,i){yt(t,n,i);var r=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var a=n;do t.insert(n===a?"."+r:"",a,t.sheet,!0),a=a.next;while(a!==void 0)}};function Pr(e){for(var t=0,n,i=0,r=e.length;r>=4;++i,r-=4)n=e.charCodeAt(i)&255|(e.charCodeAt(++i)&255)<<8|(e.charCodeAt(++i)&255)<<16|(e.charCodeAt(++i)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(r){case 3:t^=(e.charCodeAt(i+2)&255)<<16;case 2:t^=(e.charCodeAt(i+1)&255)<<8;case 1:t^=e.charCodeAt(i)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Vr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Fr=/[A-Z]|^ms/g,Br=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Cn=function(t){return t.charCodeAt(1)===45},Pt=function(t){return t!=null&&typeof t!="boolean"},He=Nn(function(e){return Cn(e)?e:e.replace(Fr,"-$&").toLowerCase()}),Vt=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Br,function(i,r,a){return G={name:r,styles:a,next:G},r})}return Vr[t]!==1&&!Cn(t)&&typeof n=="number"&&n!==0?n+"px":n};function ge(e,t,n){if(n==null)return"";var i=n;if(i.__emotion_styles!==void 0)return i;switch(typeof n){case"boolean":return"";case"object":{var r=n;if(r.anim===1)return G={name:r.name,styles:r.styles,next:G},r.name;var a=n;if(a.styles!==void 0){var o=a.next;if(o!==void 0)for(;o!==void 0;)G={name:o.name,styles:o.styles,next:G},o=o.next;var l=a.styles+";";return l}return qr(e,t,n)}case"function":{if(e!==void 0){var d=G,u=n(e);return G=d,ge(e,t,u)}break}}var p=n;if(t==null)return p;var f=t[p];return f!==void 0?f:p}function qr(e,t,n){var i="";if(Array.isArray(n))for(var r=0;r<n.length;r++)i+=ge(e,t,n[r])+";";else for(var a in n){var o=n[a];if(typeof o!="object"){var l=o;t!=null&&t[l]!==void 0?i+=a+"{"+t[l]+"}":Pt(l)&&(i+=He(a)+":"+Vt(a,l)+";")}else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var d=0;d<o.length;d++)Pt(o[d])&&(i+=He(a)+":"+Vt(a,o[d])+";");else{var u=ge(e,t,o);switch(a){case"animation":case"animationName":{i+=He(a)+":"+u+";";break}default:i+=a+"{"+u+"}"}}}return i}var Ft=/label:\s*([^\s;{]+)\s*(;|$)/g,G;function ze(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,r="";G=void 0;var a=e[0];if(a==null||a.raw===void 0)i=!1,r+=ge(n,t,a);else{var o=a;r+=o[0]}for(var l=1;l<e.length;l++)if(r+=ge(n,t,e[l]),i){var d=a;r+=d[l]}Ft.lastIndex=0;for(var u="",p;(p=Ft.exec(r))!==null;)u+="-"+p[1];var f=Pr(r)+u;return{name:f,styles:r,next:G}}var Hr=function(t){return t()},An=At.useInsertionEffect?At.useInsertionEffect:!1,_n=An||Hr,Bt=An||O.useLayoutEffect,$n=O.createContext(typeof HTMLElement<"u"?jr({key:"css"}):null);$n.Provider;var wt=function(t){return O.forwardRef(function(n,i){var r=O.useContext($n);return t(n,r,i)})},xe=O.createContext({}),Ur=function(t,n){if(typeof n=="function"){var i=n(t);return i}return $e({},t,n)},Gr=jt(function(e){return jt(function(t){return Ur(e,t)})}),Yr=function(t){var n=O.useContext(xe);return t.theme!==n&&(n=Gr(n)(t.theme)),O.createElement(xe.Provider,{value:n},t.children)},Et={}.hasOwnProperty,ot="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Zr=function(t,n){var i={};for(var r in n)Et.call(n,r)&&(i[r]=n[r]);return i[ot]=t,i},Jr=function(t){var n=t.cache,i=t.serialized,r=t.isStringTag;return yt(n,i,r),_n(function(){return bt(n,i,r)}),null},Wr=wt(function(e,t,n){var i=e.css;typeof i=="string"&&t.registered[i]!==void 0&&(i=t.registered[i]);var r=e[ot],a=[i],o="";typeof e.className=="string"?o=On(t.registered,a,e.className):e.className!=null&&(o=e.className+" ");var l=ze(a,void 0,O.useContext(xe));o+=t.key+"-"+l.name;var d={};for(var u in e)Et.call(e,u)&&u!=="css"&&u!==ot&&(d[u]=e[u]);return d.className=o,n&&(d.ref=n),O.createElement(O.Fragment,null,O.createElement(Jr,{cache:t,serialized:l,isStringTag:typeof r=="string"}),O.createElement(r,d))}),Xr=Wr,qt=function(t,n){var i=arguments;if(n==null||!Et.call(n,"css"))return O.createElement.apply(void 0,i);var r=i.length,a=new Array(r);a[0]=Xr,a[1]=Zr(t,n);for(var o=2;o<r;o++)a[o]=i[o];return O.createElement.apply(null,a)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(qt||(qt={}));var Qr=wt(function(e,t){var n=e.styles,i=ze([n],void 0,O.useContext(xe)),r=O.useRef();return Bt(function(){var a=t.key+"-global",o=new t.sheet.constructor({key:a,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),l=!1,d=document.querySelector('style[data-emotion="'+a+" "+i.name+'"]');return t.sheet.tags.length&&(o.before=t.sheet.tags[0]),d!==null&&(l=!0,d.setAttribute("data-emotion",a),o.hydrate([d])),r.current=[o,l],function(){o.flush()}},[t]),Bt(function(){var a=r.current,o=a[0],l=a[1];if(l){a[1]=!1;return}if(i.next!==void 0&&bt(t,i.next,!0),o.tags.length){var d=o.tags[o.tags.length-1].nextElementSibling;o.before=d,o.flush()}t.insert("",i,o,!1)},[t,i.name]),null});function Ln(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return ze(t)}function Kr(){var e=Ln.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var ei=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ti=Nn(function(e){return ei.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),ni=ti,ri=function(t){return t!=="theme"},Ht=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?ni:ri},Ut=function(t,n,i){var r;if(n){var a=n.shouldForwardProp;r=t.__emotion_forwardProp&&a?function(o){return t.__emotion_forwardProp(o)&&a(o)}:a}return typeof r!="function"&&i&&(r=t.__emotion_forwardProp),r},ii=function(t){var n=t.cache,i=t.serialized,r=t.isStringTag;return yt(n,i,r),_n(function(){return bt(n,i,r)}),null},ai=function e(t,n){var i=t.__emotion_real===t,r=i&&t.__emotion_base||t,a,o;n!==void 0&&(a=n.label,o=n.target);var l=Ut(t,n,i),d=l||Ht(r),u=!d("as");return function(){var p=arguments,f=i&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&f.push("label:"+a+";"),p[0]==null||p[0].raw===void 0)f.push.apply(f,p);else{var x=p[0];f.push(x[0]);for(var N=p.length,y=1;y<N;y++)f.push(p[y],x[y])}var g=wt(function(w,E,A){var k=u&&w.as||r,D="",m=[],_=w;if(w.theme==null){_={};for(var I in w)_[I]=w[I];_.theme=O.useContext(xe)}typeof w.className=="string"?D=On(E.registered,m,w.className):w.className!=null&&(D=w.className+" ");var ce=ze(f.concat(m),E.registered,_);D+=E.key+"-"+ce.name,o!==void 0&&(D+=" "+o);var X=u&&l===void 0?Ht(k):d,Q={};for(var be in w)u&&be==="as"||X(be)&&(Q[be]=w[be]);return Q.className=D,A&&(Q.ref=A),O.createElement(O.Fragment,null,O.createElement(ii,{cache:E,serialized:ce,isStringTag:typeof k=="string"}),O.createElement(k,Q))});return g.displayName=a!==void 0?a:"Styled("+(typeof r=="string"?r:r.displayName||r.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=r,g.__emotion_styles=f,g.__emotion_forwardProp=l,Object.defineProperty(g,"toString",{value:function(){return"."+o}}),g.withComponent=function(w,E){var A=e(w,$e({},n,E,{shouldForwardProp:Ut(g,E,!0)}));return A.apply(void 0,f)},g}},si=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],S=ai.bind(null);si.forEach(function(e){S[e]=S(e)});const s={colors:{primary:"#2A2D3E",secondary:"#454964",accent:"#14B473",light:"#14B473",text:"#ffffff",textLight:"#ffffff",textDark:"#ffffff",glass:{background:"rgba(255, 255, 255, 0.05)",border:"transparent",card:"rgba(42, 45, 62, 0.2)"},gradient:{main:"linear-gradient(135deg, #2A2D3E 0%, #454964 50%, #2A2D3E 100%)",accent:"linear-gradient(135deg, #14B473 0%, #14B473 100%)",glass:"linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)"},overlay:{light:"rgba(255, 255, 255, 0.1)",dark:"rgba(42, 45, 62, 0.3)"}},fonts:{body:"'Inter', sans-serif",heading:"'Poppins', sans-serif"},breakpoints:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px"},spacing:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"2rem",xl:"4rem"},transitions:{default:"0.3s ease"}},oi=S(P.nav)`
  position: fixed;
  right: ${s.spacing.xl};
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  background: ${s.colors.glass.background}80;
  backdrop-filter: blur(10px);
  padding: ${s.spacing.lg};
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  gap: ${s.spacing.md};
  box-shadow: 
    0 4px 24px rgba(0, 0, 0, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.1);

  @media print {
    display: none;
  }

  @media (max-width: ${s.breakpoints.sm}) {
    right: ${s.spacing.sm};
    padding: ${s.spacing.md};
    gap: ${s.spacing.lg};
    background: ${s.colors.glass.background};
  }

  @media (max-height: 500px) {
    gap: ${s.spacing.sm};
    padding: ${s.spacing.sm};
  }
`,ci=S(P.button)`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${e=>e.active?s.colors.accent:"rgba(255, 255, 255, 0.3)"};
  border: 2px solid ${e=>e.active?s.colors.accent:"rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  position: relative;
  opacity: ${e=>e.active?1:.7};
  transition: all ${s.transitions.default};

  @media (max-width: ${s.breakpoints.sm}) {
    width: 14px;
    height: 14px;
  }

  &:hover {
    opacity: 1;
    transform: scale(1.2);
    border-color: ${s.colors.accent};
    background: ${e=>e.active?s.colors.accent:"rgba(255, 255, 255, 0.5)"};
  }

  &:focus {
    outline: none;
    box-shadow: 
      0 0 0 2px ${s.colors.accent}40,
      0 0 0 4px ${s.colors.accent}20;
  }

  &::before {
    content: attr(data-tooltip);
    position: absolute;
    right: 24px;
    top: 50%;
    transform: translateY(-50%);
    background: ${s.colors.glass.card};
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 0.9rem;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: all ${s.transitions.default};
    box-shadow: 
      0 4px 12px rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px rgba(255, 255, 255, 0.1);
    color: ${s.colors.light};
    font-weight: 500;
    letter-spacing: 0.5px;

    @media (max-width: ${s.breakpoints.sm}) {
      right: auto;
      left: -16px;
      transform: translate(-100%, -50%);
      font-size: 0.85rem;
      padding: 6px 12px;
    }
  }

  &:hover::before {
    opacity: 1;
    transform: translate(-100%, -50%);

    @media (min-width: ${s.breakpoints.sm}) {
      right: 32px;
      transform: translateY(-50%) scale(1.02);
    }
  }

  @media (hover: none) {
    &:active {
      transform: scale(0.95);
    }
  }
`,li=S(P.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(
    90deg,
    ${s.colors.accent},
    ${s.colors.accent}dd
  );
  transform-origin: 0%;
  z-index: 1000;
  box-shadow: 0 0 10px ${s.colors.accent}80;

  @media print {
    display: none;
  }

  @media (max-width: ${s.breakpoints.sm}) {
    height: 2px;
  }
`,de=[{id:"about",name:"Home"},{id:"projects",name:"Projects"},{id:"timeline",name:"Timeline"},{id:"skills",name:"Skills"},{id:"contact",name:"Contact"}],di=()=>{const[e,t]=O.useState("hero"),{scrollYProgress:n}=er(),i=tr(n,{stiffness:100,damping:30,restDelta:.001});O.useEffect(()=>{const a=()=>{const o=window.innerHeight;de.forEach(({id:l,name:d})=>{const u=document.getElementById(l);if(u){const{top:p,bottom:f}=u.getBoundingClientRect();if(p<=o/2&&f>=o/2){t(l);const x=document.getElementById("section-announcer");x&&(x.textContent=`Current section: ${d}`)}}})};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]);const r=(a,o)=>{var l,d;if(a.key==="Enter"||a.key===" ")a.preventDefault(),(l=document.getElementById(o))==null||l.scrollIntoView({behavior:"smooth"});else if(a.key==="ArrowUp"||a.key==="ArrowDown"){a.preventDefault();const u=de.findIndex(({id:x})=>x===o),p=a.key==="ArrowUp"?Math.max(0,u-1):Math.min(de.length-1,u+1),f=de[p];(d=document.getElementById(f.id))==null||d.scrollIntoView({behavior:"smooth"})}};return c.jsxs(c.Fragment,{children:[c.jsx(li,{style:{scaleX:i},role:"progressbar","aria-label":"Reading progress","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(n.get()*100)}),c.jsx("div",{id:"section-announcer",className:"sr-only",role:"status","aria-live":"polite"}),c.jsx(oi,{role:"navigation","aria-label":"Section navigation",children:de.map(({id:a,name:o})=>c.jsx(ci,{active:e===a,onClick:()=>{var l;return(l=document.getElementById(a))==null?void 0:l.scrollIntoView({behavior:"smooth"})},onKeyDown:l=>r(l,a),"data-tooltip":o,tabIndex:0,"aria-label":`${o} section ${e===a?"(current section)":""}`,"aria-current":e===a?"true":void 0,whileHover:{scale:1.2},whileTap:{scale:.9},role:"button"},a))})]})},Z=["hero","projects","skills","contact"],ui=()=>{O.useEffect(()=>{const e=t=>{var r,a,o,l;if(t.target instanceof HTMLInputElement||t.target instanceof HTMLTextAreaElement)return;const n=Z.find(d=>{const u=document.getElementById(d);if(!u)return!1;const p=u.getBoundingClientRect();return p.top<=window.innerHeight/2&&p.bottom>=window.innerHeight/2}),i=n?Z.indexOf(n):-1;switch(t.key){case"ArrowDown":case"PageDown":t.preventDefault(),i<Z.length-1&&((r=document.getElementById(Z[i+1]))==null||r.scrollIntoView({behavior:"smooth"}));break;case"ArrowUp":case"PageUp":t.preventDefault(),i>0&&((a=document.getElementById(Z[i-1]))==null||a.scrollIntoView({behavior:"smooth"}));break;case"Home":t.preventDefault(),(o=document.getElementById(Z[0]))==null||o.scrollIntoView({behavior:"smooth"});break;case"End":t.preventDefault(),(l=document.getElementById(Z[Z.length-1]))==null||l.scrollIntoView({behavior:"smooth"});break}};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[])},hi=S.div`
  @media print {
    background: white !important;
    color: black !important;
    
    * {
      color: black !important;
      text-shadow: none !important;
      box-shadow: none !important;
    }

    section {
      min-height: auto !important;
      padding: 2rem 0 !important;
      page-break-inside: avoid;
    }

    a[href]:after {
      content: " (" attr(href) ")";
      font-size: 0.8em;
    }
  }

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  position: relative;
  background: transparent;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 70% 30%,
      ${s.colors.accent}15 0%,
      transparent 100%
    );
    pointer-events: none;
    z-index: 0;
  }
`,pi=S.header`
  background: ${s.colors.glass.background};
  backdrop-filter: blur(8px);
  padding: ${s.spacing.md} 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;

  @media print {
    display: none;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 0;
    right: 0;
    height: 20px;
    background: linear-gradient(to bottom, ${s.colors.glass.background}, transparent);
  }
`,fi=S.nav`
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${s.spacing.md};
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
  }
`,mi=S(P.div)`
  color: ${s.colors.light};
  font-family: ${s.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
`,gi=S.div`
  display: flex;
  gap: ${s.spacing.lg};

  a {
    color: ${s.colors.textLight};
    transition: all ${s.transitions.default};
    font-weight: 500;
    padding: ${s.spacing.xs} ${s.spacing.sm};
    border-radius: 4px;

    &:hover {
      color: ${s.colors.light};
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  @media (max-width: ${s.breakpoints.sm}) {
    gap: ${s.spacing.md};
  }
`,xi=S.main`
  flex: 1;
  margin-top: 4.5rem;
  width: 100%;
  overflow-x: hidden;
`,vi=S.a`
  position: absolute;
  top: -40px;
  left: 0;
  background: ${s.colors.accent};
  color: ${s.colors.textDark};
  padding: ${s.spacing.sm};
  z-index: 9999;
  transition: top 0.2s;

  &:focus {
    top: 0;
  }
`,yi=S.footer`
  background: ${s.colors.glass.background};
  backdrop-filter: blur(8px);
  color: ${s.colors.textLight};
  padding: ${s.spacing.lg} 0;
  text-align: center;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 0;
    right: 0;
    height: 20px;
    background: linear-gradient(to top, ${s.colors.glass.background}, transparent);
  }
`,bi=({children:e})=>(ui(),O.useEffect(()=>{console.info(`Keyboard Navigation:
`,`- Arrow Up/Down or PageUp/PageDown: Navigate between sections
`,`- Home: Go to top
`,"- End: Go to bottom")},[]),c.jsxs(hi,{children:[c.jsx(vi,{href:"#main-content",children:"Skip to main content"}),c.jsx(pi,{role:"banner",children:c.jsx(fi,{role:"navigation","aria-label":"Main navigation",children:c.jsxs("div",{className:"container",children:[c.jsx(mi,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5},role:"heading","aria-level":1,children:"Lin Maung"}),c.jsxs(gi,{role:"list",children:[c.jsx("a",{href:"#about",role:"listitem","aria-label":"About section",children:"About"}),c.jsx("a",{href:"#projects",role:"listitem","aria-label":"Projects section",children:"Projects"}),c.jsx("a",{href:"#timeline",role:"listitem","aria-label":"Timeline",children:"Timeline"}),c.jsx("a",{href:"#skills",role:"listitem","aria-label":"Skills section",children:"Skills"}),c.jsx("a",{href:"#contact",role:"listitem","aria-label":"Contact section",children:"Contact"})]})]})})}),c.jsx(xi,{id:"main-content",role:"main",tabIndex:-1,children:e}),c.jsx(di,{}),c.jsx(yi,{role:"contentinfo",children:c.jsx("div",{className:"container",children:c.jsxs("p",{children:["© ",new Date().getFullYear()," Phyo Lin Mg. All rights reserved."]})})})]}));function wi(e){return T({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"}}]})(e)}function Ei(e){return T({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"}}]})(e)}function Te(e){return T({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M180.41 203.01c-.72 22.65 10.6 32.68 10.88 39.05a8.164 8.164 0 0 1-4.1 6.27l-12.8 8.96a10.66 10.66 0 0 1-5.63 1.92c-.43-.02-8.19 1.83-20.48-25.61a78.608 78.608 0 0 1-62.61 29.45c-16.28.89-60.4-9.24-58.13-56.21-1.59-38.28 34.06-62.06 70.93-60.05 7.1.02 21.6.37 46.99 6.27v-15.62c2.69-26.46-14.7-46.99-44.81-43.91-2.4.01-19.4-.5-45.84 10.11-7.36 3.38-8.3 2.82-10.75 2.82-7.41 0-4.36-21.48-2.94-24.2 5.21-6.4 35.86-18.35 65.94-18.18a76.857 76.857 0 0 1 55.69 17.28 70.285 70.285 0 0 1 17.67 52.36l-.01 69.29zM93.99 235.4c32.43-.47 46.16-19.97 49.29-30.47 2.46-10.05 2.05-16.41 2.05-27.4-9.67-2.32-23.59-4.85-39.56-4.87-15.15-1.14-42.82 5.63-41.74 32.26-1.24 16.79 11.12 31.4 29.96 30.48zm170.92 23.05c-7.86.72-11.52-4.86-12.68-10.37l-49.8-164.65c-.97-2.78-1.61-5.65-1.92-8.58a4.61 4.61 0 0 1 3.86-5.25c.24-.04-2.13 0 22.25 0 8.78-.88 11.64 6.03 12.55 10.37l35.72 140.83 33.16-140.83c.53-3.22 2.94-11.07 12.8-10.24h17.16c2.17-.18 11.11-.5 12.68 10.37l33.42 142.63L420.98 80.1c.48-2.18 2.72-11.37 12.68-10.37h19.72c.85-.13 6.15-.81 5.25 8.58-.43 1.85 3.41-10.66-52.75 169.9-1.15 5.51-4.82 11.09-12.68 10.37h-18.69c-10.94 1.15-12.51-9.66-12.68-10.75L328.67 110.7l-32.78 136.99c-.16 1.09-1.73 11.9-12.68 10.75h-18.3zm273.48 5.63c-5.88.01-33.92-.3-57.36-12.29a12.802 12.802 0 0 1-7.81-11.91v-10.75c0-8.45 6.2-6.9 8.83-5.89 10.04 4.06 16.48 7.14 28.81 9.6 36.65 7.53 52.77-2.3 56.72-4.48 13.15-7.81 14.19-25.68 5.25-34.95-10.48-8.79-15.48-9.12-53.13-21-4.64-1.29-43.7-13.61-43.79-52.36-.61-28.24 25.05-56.18 69.52-55.95 12.67-.01 46.43 4.13 55.57 15.62 1.35 2.09 2.02 4.55 1.92 7.04v10.11c0 4.44-1.62 6.66-4.87 6.66-7.71-.86-21.39-11.17-49.16-10.75-6.89-.36-39.89.91-38.41 24.97-.43 18.96 26.61 26.07 29.7 26.89 36.46 10.97 48.65 12.79 63.12 29.58 17.14 22.25 7.9 48.3 4.35 55.44-19.08 37.49-68.42 34.44-69.26 34.42zm40.2 104.86c-70.03 51.72-171.69 79.25-258.49 79.25A469.127 469.127 0 0 1 2.83 327.46c-6.53-5.89-.77-13.96 7.17-9.47a637.37 637.37 0 0 0 316.88 84.12 630.22 630.22 0 0 0 241.59-49.55c11.78-5 21.77 7.8 10.12 16.38zm29.19-33.29c-8.96-11.52-59.28-5.38-81.81-2.69-6.79.77-7.94-5.12-1.79-9.47 40.07-28.17 105.88-20.1 113.44-10.63 7.55 9.47-2.05 75.41-39.56 106.91-5.76 4.87-11.27 2.3-8.71-4.1 8.44-21.25 27.39-68.49 18.43-80.02z"}}]})(e)}function Ti(e){return T({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z"}}]})(e)}function ki(e){return T({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216.29 158.39H137C97 147.9 6.51 150.63 6.51 233.18c0 30.09 15 51.23 35 61-25.1 23-37 33.85-37 49.21 0 11 4.47 21.14 17.89 26.81C8.13 383.61 0 393.35 0 411.65c0 32.11 28.05 50.82 101.63 50.82 70.75 0 111.79-26.42 111.79-73.18 0-58.66-45.16-56.5-151.63-63l13.43-21.55c27.27 7.58 118.7 10 118.7-67.89 0-18.7-7.73-31.71-15-41.07l37.41-2.84zm-63.42 241.9c0 32.06-104.89 32.1-104.89 2.43 0-8.14 5.27-15 10.57-21.54 77.71 5.3 94.32 3.37 94.32 19.11zm-50.81-134.58c-52.8 0-50.46-71.16 1.2-71.16 49.54 0 50.82 71.16-1.2 71.16zm133.3 100.51v-32.1c26.75-3.66 27.24-2 27.24-11V203.61c0-8.5-2.05-7.38-27.24-16.26l4.47-32.92H324v168.71c0 6.51.4 7.32 6.51 8.14l20.73 2.84v32.1zm52.45-244.31c-23.17 0-36.59-13.43-36.59-36.61s13.42-35.77 36.59-35.77c23.58 0 37 12.62 37 35.77s-13.42 36.61-37 36.61zM512 350.46c-17.49 8.53-43.1 16.26-66.28 16.26-48.38 0-66.67-19.5-66.67-65.46V194.75c0-5.42 1.05-4.06-31.71-4.06V154.5c35.78-4.07 50-22 54.47-66.27h38.63c0 65.83-1.34 61.81 3.26 61.81H501v40.65h-60.56v97.15c0 6.92-4.92 51.41 60.57 26.84z"}}]})(e)}function Tt(e){return T({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(e)}function Gt(e){return T({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M105.2 24.9c-3.1-8.9-15.7-8.9-18.9 0L29.8 199.7h132c-.1 0-56.6-174.8-56.6-174.8zM.9 287.7c-2.6 8 .3 16.9 7.1 22l247.9 184-226.2-294zm160.8-88l94.3 294 94.3-294zm349.4 88l-28.8-88-226.3 294 247.9-184c6.9-5.1 9.7-14 7.2-22zM425.7 24.9c-3.1-8.9-15.7-8.9-18.9 0l-56.6 174.8h132z"}}]})(e)}function Si(e){return T({attr:{viewBox:"0 0 488 512"},child:[{tag:"path",attr:{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"}}]})(e)}function ee(e){return T({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"}}]})(e)}function Ni(e){return T({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.1 425c-1.4-11.2-19-23.1-28.2-31.9-5.1-5-29-23.1-30.4-29.9-1.4-6.6 9.7-21.5 13.3-28.9 5.1-10.7 8.8-23.7 11.3-32.6 18.8-66.1 20.7-156.9-6.2-211.2-10.2-20.6-38.6-49-56.4-62.5-42-31.7-119.6-35.3-170.1-16.6-14.1 5.2-27.8 9.8-40.1 17.1-33.1 19.4-68.3 32.5-78.1 71.6-24.2 10.8-31.5 41.8-30.3 77.8.2 7 4.1 15.8 2.7 22.4-.7 3.3-5.2 7.6-6.1 9.8-11.6 27.7-2.3 64 11.1 83.7 8.1 11.9 21.5 22.4 39.2 25.2.7 10.6 3.3 19.7 8.2 30.4 3.1 6.8 14.7 19 10.4 27.7-2.2 4.4-21 13.8-27.3 17.6C89 407.2 73.7 415 54.2 429c-12.6 9-32.3 10.2-29.2 31.1 2.1 14.1 10.1 31.6 14.7 45.8.7 2 1.4 4.1 2.1 6h422c4.9-15.3 9.7-30.9 14.6-47.2 3.4-11.4 10.2-27.8 8.7-39.7zM205.9 33.7c1.8-.5 3.4.7 4.9 2.4-.2 5.2-5.4 5.1-8.9 6.8-5.4 6.7-13.4 9.8-20 17.2-6.8 7.5-14.4 27.7-23.4 30-4.5 1.1-9.7-.8-13.6-.5-10.4.7-17.7 6-28.3 7.5 13.6-29.9 56.1-54 89.3-63.4zm-104.8 93.6c13.5-14.9 32.1-24.1 54.8-25.9 11.7 29.7-8.4 65-.9 97.6 2.3 9.9 10.2 25.4-2.4 25.7.3-28.3-34.8-46.3-61.3-29.6-1.8-21.5-4.9-51.7 9.8-67.8zm36.7 200.2c-1-4.1-2.7-12.9-2.3-15.1 1.6-8.7 17.1-12.5 11-24.7-11.3-.1-13.8 10.2-24.1 11.3-26.7 2.6-45.6-35.4-44.4-58.4 1-19.5 17.6-38.2 40.1-35.8 16 1.8 21.4 19.2 24.5 34.7 9.2.5 22.5-.4 26.9-7.6-.6-17.5-8.8-31.6-8.2-47.7 1-30.3 17.5-57.6 4.8-87.4 13.6-30.9 53.5-55.3 83.1-70 36.6-18.3 94.9-3.7 129.3 15.8 19.7 11.1 34.4 32.7 48.3 50.7-19.5-5.8-36.1 4.2-33.1 20.3 16.3-14.9 44.2-.2 52.5 16.4 7.9 15.8 7.8 39.3 9 62.8 2.9 57-10.4 115.9-39.1 157.1-7.7 11-14.1 23-24.9 30.6-26 18.2-65.4 34.7-99.2 23.4-44.7-15-65-44.8-89.5-78.8.7 18.7 13.8 34.1 26.8 48.4 11.3 12.5 25 26.6 39.7 32.4-12.3-2.9-31.1-3.8-36.2 7.2-28.6-1.9-55.1-4.8-68.7-24.2-10.6-15.4-21.4-41.4-26.3-61.4zm222 124.1c4.1-3 11.1-2.9 17.4-3.6-5.4-2.7-13-3.7-19.3-2.2-.1-4.2-2-6.8-3.2-10.2 10.6-3.8 35.5-28.5 49.6-20.3 6.7 3.9 9.5 26.2 10.1 37 .4 9-.8 18-4.5 22.8-18.8-.6-35.8-2.8-50.7-7 .9-6.1-1-12.1.6-16.5zm-17.2-20c-16.8.8-26-1.2-38.3-10.8.2-.8 1.4-.5 1.5-1.4 18 8 40.8-3.3 59-4.9-7.9 5.1-14.6 11.6-22.2 17.1zm-12.1 33.2c-1.6-9.4-3.5-12-2.8-20.2 25-16.6 29.7 28.6 2.8 20.2zM226 438.6c-11.6-.7-48.1-14-38.5-23.7 9.4 6.5 27.5 4.9 41.3 7.3.8 4.4-2.8 10.2-2.8 16.4zM57.7 497.1c-4.3-12.7-9.2-25.1-14.8-36.9 30.8-23.8 65.3-48.9 102.2-63.5 2.8-1.1 23.2 25.4 26.2 27.6 16.5 11.7 37 21 56.2 30.2 1.2 8.8 3.9 20.2 8.7 35.5.7 2.3 1.4 4.7 2.2 7.2H57.7zm240.6 5.7h-.8c.3-.2.5-.4.8-.5v.5zm7.5-5.7c2.1-1.4 4.3-2.8 6.4-4.3 1.1 1.4 2.2 2.8 3.2 4.3h-9.6zm15.1-24.7c-10.8 7.3-20.6 18.3-33.3 25.2-6 3.3-27 11.7-33.4 10.2-3.6-.8-3.9-5.3-5.4-9.5-3.1-9-10.1-23.4-10.8-37-.8-17.2-2.5-46 16-42.4 14.9 2.9 32.3 9.7 43.9 16.1 7.1 3.9 11.1 8.6 21.9 9.5-.1 1.4-.1 2.8-.2 4.3-5.9 3.9-15.3 3.8-21.8 7.1 9.5.4 17 2.7 23.5 5.9-.1 3.4-.3 7-.4 10.6zm53.4 24.7h-14c-.1-3.2-2.8-5.8-6.1-5.8s-5.9 2.6-6.1 5.8h-17.4c-2.8-4.4-5.7-8.6-8.9-12.5 2.1-2.2 4-4.7 6-6.9 9 3.7 14.8-4.9 21.7-4.2 7.9.8 14.2 11.7 25.4 11l-.6 12.6zm8.7 0c.2-4 .4-7.8.6-11.5 15.6-7.3 29 1.3 35.7 11.5H383zm83.4-37c-2.3 11.2-5.8 24-9.9 37.1-.2-.1-.4-.1-.6-.1H428c.6-1.1 1.2-2.2 1.9-3.3-2.6-6.1-9-8.7-10.9-15.5 12.1-22.7 6.5-93.4-24.2-78.5 4.3-6.3 15.6-11.5 20.8-19.3 13 10.4 20.8 20.3 33.2 31.4 6.8 6 20 13.3 21.4 23.1.8 5.5-2.6 18.9-3.8 25.1zM222.2 130.5c5.4-14.9 27.2-34.7 45-32 7.7 1.2 18 8.2 12.2 17.7-30.2-7-45.2 12.6-54.4 33.1-8.1-2-4.9-13.1-2.8-18.8zm184.1 63.1c8.2-3.6 22.4-.7 29.6-5.3-4.2-11.5-10.3-21.4-9.3-37.7.5 0 1 0 1.4.1 6.8 14.2 12.7 29.2 21.4 41.7-5.7 13.5-43.6 25.4-43.1 1.2zm20.4-43zm-117.2 45.7c-6.8-10.9-19-32.5-14.5-45.3 6.5 11.9 8.6 24.4 17.8 33.3 4.1 4 12.2 9 8.2 20.2-.9 2.7-7.8 8.6-11.7 9.7-14.4 4.3-47.9.9-36.6-17.1 11.9.7 27.9 7.8 36.8-.8zm27.3 70c3.8 6.6 1.4 18.7 12.1 20.6 20.2 3.4 43.6-12.3 58.1-17.8 9-15.2-.8-20.7-8.9-30.5-16.6-20-38.8-44.8-38-74.7 6.7-4.9 7.3 7.4 8.2 9.7 8.7 20.3 30.4 46.2 46.3 63.5 3.9 4.3 10.3 8.4 11 11.2 2.1 8.2-5.4 18-4.5 23.5-21.7 13.9-45.8 29.1-81.4 25.6-7.4-6.7-10.3-21.4-2.9-31.1zm-201.3-9.2c-6.8-3.9-8.4-21-16.4-21.4-11.4-.7-9.3 22.2-9.3 35.5-7.8-7.1-9.2-29.1-3.5-40.3-6.6-3.2-9.5 3.6-13.1 5.9 4.7-34.1 49.8-15.8 42.3 20.3zm299.6 28.8c-10.1 19.2-24.4 40.4-54 41-.6-6.2-1.1-15.6 0-19.4 22.7-2.2 36.6-13.7 54-21.6zm-141.9 12.4c18.9 9.9 53.6 11 79.3 10.2 1.4 5.6 1.3 12.6 1.4 19.4-33 1.8-72-6.4-80.7-29.6zm92.2 46.7c-1.7 4.3-5.3 9.3-9.8 11.1-12.1 4.9-45.6 8.7-62.4-.3-10.7-5.7-17.5-18.5-23.4-26-2.8-3.6-16.9-12.9-.2-12.9 13.1 32.7 58 29 95.8 28.1z"}}]})(e)}function Ii(e){return T({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504.4,115.83a5.72,5.72,0,0,0-.28-.68,8.52,8.52,0,0,0-.53-1.25,6,6,0,0,0-.54-.71,9.36,9.36,0,0,0-.72-.94c-.23-.22-.52-.4-.77-.6a8.84,8.84,0,0,0-.9-.68L404.4,55.55a8,8,0,0,0-8,0L300.12,111h0a8.07,8.07,0,0,0-.88.69,7.68,7.68,0,0,0-.78.6,8.23,8.23,0,0,0-.72.93c-.17.24-.39.45-.54.71a9.7,9.7,0,0,0-.52,1.25c-.08.23-.21.44-.28.68a8.08,8.08,0,0,0-.28,2.08V223.18l-80.22,46.19V63.44a7.8,7.8,0,0,0-.28-2.09c-.06-.24-.2-.45-.28-.68a8.35,8.35,0,0,0-.52-1.24c-.14-.26-.37-.47-.54-.72a9.36,9.36,0,0,0-.72-.94,9.46,9.46,0,0,0-.78-.6,9.8,9.8,0,0,0-.88-.68h0L115.61,1.07a8,8,0,0,0-8,0L11.34,56.49h0a6.52,6.52,0,0,0-.88.69,7.81,7.81,0,0,0-.79.6,8.15,8.15,0,0,0-.71.93c-.18.25-.4.46-.55.72a7.88,7.88,0,0,0-.51,1.24,6.46,6.46,0,0,0-.29.67,8.18,8.18,0,0,0-.28,2.1v329.7a8,8,0,0,0,4,6.95l192.5,110.84a8.83,8.83,0,0,0,1.33.54c.21.08.41.2.63.26a7.92,7.92,0,0,0,4.1,0c.2-.05.37-.16.55-.22a8.6,8.6,0,0,0,1.4-.58L404.4,400.09a8,8,0,0,0,4-6.95V287.88l92.24-53.11a8,8,0,0,0,4-7V117.92A8.63,8.63,0,0,0,504.4,115.83ZM111.6,17.28h0l80.19,46.15-80.2,46.18L31.41,63.44Zm88.25,60V278.6l-46.53,26.79-33.69,19.4V123.5l46.53-26.79Zm0,412.78L23.37,388.5V77.32L57.06,96.7l46.52,26.8V338.68a6.94,6.94,0,0,0,.12.9,8,8,0,0,0,.16,1.18h0a5.92,5.92,0,0,0,.38.9,6.38,6.38,0,0,0,.42,1v0a8.54,8.54,0,0,0,.6.78,7.62,7.62,0,0,0,.66.84l0,0c.23.22.52.38.77.58a8.93,8.93,0,0,0,.86.66l0,0,0,0,92.19,52.18Zm8-106.17-80.06-45.32,84.09-48.41,92.26-53.11,80.13,46.13-58.8,33.56Zm184.52,4.57L215.88,490.11V397.8L346.6,323.2l45.77-26.15Zm0-119.13L358.68,250l-46.53-26.79V131.79l33.69,19.4L392.37,178Zm8-105.28-80.2-46.17,80.2-46.16,80.18,46.15Zm8,105.28V178L455,151.19l33.68-19.4v91.39h0Z"}}]})(e)}function jn(e){return T({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(e)}function Oi(e){return T({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 32v448h448V32H0zm372.2 106.1l-24 23c-2.1 1.6-3.1 4.2-2.7 6.7v169.3c-.4 2.6.6 5.2 2.7 6.7l23.5 23v5.1h-118V367l24.3-23.6c2.4-2.4 2.4-3.1 2.4-6.7V199.8l-67.6 171.6h-9.1L125 199.8v115c-.7 4.8 1 9.7 4.4 13.2l31.6 38.3v5.1H71.2v-5.1l31.6-38.3c3.4-3.5 4.9-8.4 4.1-13.2v-133c.4-3.7-1-7.3-3.8-9.8L75 138.1V133h87.3l67.4 148L289 133.1h83.2v5z"}}]})(e)}function Ci(e){return T({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z"}}]})(e)}function Ue(e){return T({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"}}]})(e)}function Ai(e){return T({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"}}]})(e)}function te(e){return T({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"}}]})(e)}function Ge(e){return T({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"}}]})(e)}function Yt(e){return T({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"}}]})(e)}function Dn(e){return T({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"}}]})(e)}function _i(e){return T({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"}}]})(e)}function $i(e){return T({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"}}]})(e)}function Li(e){return T({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.63 214.63l-45.25-45.25c-6-6-14.14-9.37-22.63-9.37H384V80c0-26.51-21.49-48-48-48H176c-26.51 0-48 21.49-48 48v80H77.25c-8.49 0-16.62 3.37-22.63 9.37L9.37 214.63c-6 6-9.37 14.14-9.37 22.63V320h128v-16c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v16h128v-16c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v16h128v-82.75c0-8.48-3.37-16.62-9.37-22.62zM320 160H192V96h128v64zm64 208c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-16H192v16c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-16H0v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96H384v16z"}}]})(e)}const ji=S.section`
  min-height: calc(100vh - 4.5rem);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  color: ${s.colors.textLight};
  padding: ${s.spacing.lg} 0;

  @media (min-width: ${s.breakpoints.md}) {
    padding: ${s.spacing.xl} 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;
    
    @media (min-width: ${s.breakpoints.sm}) {
      width: 90%;
    }
  }
`,Di=S.div`
  position: relative;
  z-index: 1;
  max-width: 1000px;
  width: 100%;
  background: ${s.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: ${s.spacing.lg};
  border: none;

  @media (min-width: ${s.breakpoints.md}) {
    padding: ${s.spacing.xl};
  }
`,Pe=Kr`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Ri=S.h1`
  animation: ${Pe} 0.5s ease-out forwards;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  margin-bottom: ${s.spacing.md};
  color: ${s.colors.light};
  line-height: 1.1;
  letter-spacing: -0.02em;
  white-space: nowrap;
`,Mi=S.h2`
  animation: ${Pe} 0.5s ease-out 0.2s forwards;
  opacity: 0;
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  margin-bottom: ${s.spacing.lg};
  opacity: 0.9;
  font-weight: 500;
`,zi=S.p`
  animation: ${Pe} 0.5s ease-out 0.4s forwards;
  opacity: 0;
  font-size: clamp(1rem, 1.2vw, 1.2rem);
  max-width: 600px;
  margin-bottom: ${s.spacing.xl};
  opacity: 0.8;
  line-height: 1.7;
`,Pi=S.div`
  animation: ${Pe} 0.5s ease-out 0.6s forwards;
  opacity: 0;
  display: flex;
  gap: ${s.spacing.md};
  
  a {
    color: ${s.colors.textLight};
    font-size: 1.5rem;
    transition: all ${s.transitions.default};
    padding: ${s.spacing.xs};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${s.colors.glass.background};
    
    &:hover {
      color: ${s.colors.light};
      transform: translateY(-3px);
      background: ${s.colors.glass.card};
      box-shadow: 0 4px 12px rgba(246, 177, 122, 0.2);
    }
  }

  @media (min-width: ${s.breakpoints.md}) {
    gap: ${s.spacing.lg};
    
    a {
      font-size: 1.75rem;
    }
  }
`,Vi=()=>c.jsx(ji,{id:"about",role:"region","aria-label":"Introduction",children:c.jsx("div",{className:"container",children:c.jsx(Di,{children:c.jsxs("div",{children:[c.jsx(Ri,{role:"heading","aria-level":2,children:"Hi, I'm Phyo Lin Mg"}),c.jsx(Mi,{role:"heading","aria-level":3,children:"Full Stack Developer"}),c.jsx(zi,{role:"paragraph",children:"I create elegant solutions to complex problems, specializing in modern android/web development with a focus on user experience and clean code."}),c.jsxs(Pi,{role:"list","aria-label":"Social media links",children:[c.jsxs("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Visit my GitHub profile",role:"listitem",children:[c.jsx(Tt,{"aria-hidden":"true"}),c.jsx("span",{className:"sr-only",children:"GitHub"})]}),c.jsxs("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Visit my LinkedIn profile",role:"listitem",children:[c.jsx(jn,{"aria-hidden":"true"}),c.jsx("span",{className:"sr-only",children:"LinkedIn"})]}),c.jsxs("a",{href:"mailto:phyolinmg@dev.gmail.com","aria-label":"Send me an email",role:"listitem",children:[c.jsx(Dn,{"aria-hidden":"true"}),c.jsx("span",{className:"sr-only",children:"Email"})]})]})]})})})}),Fi=Ln`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap');

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    overflow-x: hidden;
    width: 100%;
  }

  body {
    font-family: ${s.fonts.body};
    color: ${s.colors.text};
    line-height: 1.6;
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${s.colors.gradient.main};
    background-attachment: fixed;
  }

  #root {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${s.fonts.heading};
    font-weight: 600;
    line-height: 1.3;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  section {
    width: 100%;
    position: relative;
    margin: 0;
    padding: 0;
    background: transparent;
    border: none;
    &::before,
    &::after {
      display: none;
    }
  }

  .container {
    width: min(90%, 1200px);
    margin-inline: auto;
    padding-inline: ${s.spacing.md};
    position: relative;
  }

  @media (max-width: ${s.breakpoints.sm}) {
    html {
      font-size: 14px;
    }
  }

  @media print {
    html {
      font-size: 12pt;
    }

    body {
      background: white !important;
      color: black !important;
      margin: 0;
      padding: 0;
    }

    /* Ensure proper page breaks */
    section {
      page-break-inside: avoid;
      break-inside: avoid;
    }

    h1, h2, h3 {
      page-break-after: avoid;
      break-after: avoid;
    }

    img {
      page-break-inside: avoid;
      break-inside: avoid;
    }

    /* Remove unnecessary elements */
    .no-print,
    button,
    nav,
    .social-links {
      display: none !important;
    }

    /* Ensure links are useful in printed version */
    a {
      text-decoration: none !important;
      color: black !important;
    }

    a[href^="http"]:after {
      content: " (" attr(href) ")";
      font-size: 0.8em;
      font-style: italic;
    }

    /* Improve readability */
    p, li {
      orphans: 3;
      widows: 3;
    }

    /* Reset backgrounds and colors */
    * {
      background: transparent !important;
      color: black !important;
      text-shadow: none !important;
      filter: none !important;
      -ms-filter: none !important;
      box-shadow: none !important;
    }

    /* Add page numbers */
    @page {
      margin: 2cm;
    }

    @page :first {
      margin-top: 3cm;
    }
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${s.colors.glass.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${s.colors.glass.card};
    border-radius: 5px;
    border: 2px solid ${s.colors.glass.border};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${s.colors.accent};
  }

  /* Screen reader only utility class */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,Bi=()=>c.jsx(Qr,{styles:Fi});class ie extends Error{constructor(n,i){const r=`${ie.extractMessage(n)}: ${JSON.stringify({response:n,request:i})}`;super(r);K(this,"response");K(this,"request");Object.setPrototypeOf(this,ie.prototype),this.response=n,this.request=i,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,ie)}static extractMessage(n){var i,r;return((r=(i=n.errors)==null?void 0:i[0])==null?void 0:r.message)??`GraphQL Error (Code: ${String(n.status)})`}}const Zt=e=>e.toUpperCase(),Ye=e=>typeof e=="function"?e():e,Rn=(e,t)=>e.map((n,i)=>[n,t[i]]),ne=e=>{let t={};return e instanceof Headers?t=qi(e):Array.isArray(e)?e.forEach(([n,i])=>{n&&i!==void 0&&(t[n]=i)}):e&&(t=e),t},qi=e=>{const t={};return e.forEach((n,i)=>{t[i]=n}),t},Hi=e=>{try{const t=e();return Ui(t)?t.catch(n=>Jt(n)):t}catch(t){return Jt(t)}},Jt=e=>e instanceof Error?e:new Error(String(e)),Ui=e=>typeof e=="object"&&e!==null&&"then"in e&&typeof e.then=="function"&&"catch"in e&&typeof e.catch=="function"&&"finally"in e&&typeof e.finally=="function",kt=e=>{throw new Error(`Unhandled case: ${String(e)}`)},Ce=e=>typeof e=="object"&&e!==null&&!Array.isArray(e),Gi=(e,t)=>e.documents?e:{documents:e,requestHeaders:t,signal:void 0},Yi=(e,t,n)=>e.query?e:{query:e,variables:t,requestHeaders:n,signal:void 0};function Ae(e,t){if(!!!e)throw new Error(t)}function Zi(e){return typeof e=="object"&&e!==null}function Ji(e,t){if(!!!e)throw new Error("Unexpected invariant triggered.")}const Wi=/\r\n|[\n\r]/g;function ct(e,t){let n=0,i=1;for(const r of e.body.matchAll(Wi)){if(typeof r.index=="number"||Ji(!1),r.index>=t)break;n=r.index+r[0].length,i+=1}return{line:i,column:t+1-n}}function Xi(e){return Mn(e.source,ct(e.source,e.start))}function Mn(e,t){const n=e.locationOffset.column-1,i="".padStart(n)+e.body,r=t.line-1,a=e.locationOffset.line-1,o=t.line+a,l=t.line===1?n:0,d=t.column+l,u=`${e.name}:${o}:${d}
`,p=i.split(/\r\n|[\n\r]/g),f=p[r];if(f.length>120){const x=Math.floor(d/80),N=d%80,y=[];for(let g=0;g<f.length;g+=80)y.push(f.slice(g,g+80));return u+Wt([[`${o} |`,y[0]],...y.slice(1,x+1).map(g=>["|",g]),["|","^".padStart(N)],["|",y[x+1]]])}return u+Wt([[`${o-1} |`,p[r-1]],[`${o} |`,f],["|","^".padStart(d)],[`${o+1} |`,p[r+1]]])}function Wt(e){const t=e.filter(([i,r])=>r!==void 0),n=Math.max(...t.map(([i])=>i.length));return t.map(([i,r])=>i.padStart(n)+(r?" "+r:"")).join(`
`)}function Qi(e){const t=e[0];return t==null||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}class St extends Error{constructor(t,...n){var i,r,a;const{nodes:o,source:l,positions:d,path:u,originalError:p,extensions:f}=Qi(n);super(t),this.name="GraphQLError",this.path=u??void 0,this.originalError=p??void 0,this.nodes=Xt(Array.isArray(o)?o:o?[o]:void 0);const x=Xt((i=this.nodes)===null||i===void 0?void 0:i.map(y=>y.loc).filter(y=>y!=null));this.source=l??(x==null||(r=x[0])===null||r===void 0?void 0:r.source),this.positions=d??(x==null?void 0:x.map(y=>y.start)),this.locations=d&&l?d.map(y=>ct(l,y)):x==null?void 0:x.map(y=>ct(y.source,y.start));const N=Zi(p==null?void 0:p.extensions)?p==null?void 0:p.extensions:void 0;this.extensions=(a=f??N)!==null&&a!==void 0?a:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),p!=null&&p.stack?Object.defineProperty(this,"stack",{value:p.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,St):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let t=this.message;if(this.nodes)for(const n of this.nodes)n.loc&&(t+=`

`+Xi(n.loc));else if(this.source&&this.locations)for(const n of this.locations)t+=`

`+Mn(this.source,n);return t}toJSON(){const t={message:this.message};return this.locations!=null&&(t.locations=this.locations),this.path!=null&&(t.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(t.extensions=this.extensions),t}}function Xt(e){return e===void 0||e.length===0?void 0:e}function z(e,t,n){return new St(`Syntax Error: ${n}`,{source:e,positions:[t]})}class Ki{constructor(t,n,i){this.start=t.start,this.end=n.end,this.startToken=t,this.endToken=n,this.source=i}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class zn{constructor(t,n,i,r,a,o){this.kind=t,this.start=n,this.end=i,this.line=r,this.column=a,this.value=o,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const Pn={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},e1=new Set(Object.keys(Pn));function Qt(e){const t=e==null?void 0:e.kind;return typeof t=="string"&&e1.has(t)}var J;(function(e){e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription"})(J||(J={}));var lt;(function(e){e.QUERY="QUERY",e.MUTATION="MUTATION",e.SUBSCRIPTION="SUBSCRIPTION",e.FIELD="FIELD",e.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",e.FRAGMENT_SPREAD="FRAGMENT_SPREAD",e.INLINE_FRAGMENT="INLINE_FRAGMENT",e.VARIABLE_DEFINITION="VARIABLE_DEFINITION",e.SCHEMA="SCHEMA",e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.FIELD_DEFINITION="FIELD_DEFINITION",e.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.ENUM_VALUE="ENUM_VALUE",e.INPUT_OBJECT="INPUT_OBJECT",e.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(lt||(lt={}));var b;(function(e){e.NAME="Name",e.DOCUMENT="Document",e.OPERATION_DEFINITION="OperationDefinition",e.VARIABLE_DEFINITION="VariableDefinition",e.SELECTION_SET="SelectionSet",e.FIELD="Field",e.ARGUMENT="Argument",e.FRAGMENT_SPREAD="FragmentSpread",e.INLINE_FRAGMENT="InlineFragment",e.FRAGMENT_DEFINITION="FragmentDefinition",e.VARIABLE="Variable",e.INT="IntValue",e.FLOAT="FloatValue",e.STRING="StringValue",e.BOOLEAN="BooleanValue",e.NULL="NullValue",e.ENUM="EnumValue",e.LIST="ListValue",e.OBJECT="ObjectValue",e.OBJECT_FIELD="ObjectField",e.DIRECTIVE="Directive",e.NAMED_TYPE="NamedType",e.LIST_TYPE="ListType",e.NON_NULL_TYPE="NonNullType",e.SCHEMA_DEFINITION="SchemaDefinition",e.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",e.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",e.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",e.FIELD_DEFINITION="FieldDefinition",e.INPUT_VALUE_DEFINITION="InputValueDefinition",e.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",e.UNION_TYPE_DEFINITION="UnionTypeDefinition",e.ENUM_TYPE_DEFINITION="EnumTypeDefinition",e.ENUM_VALUE_DEFINITION="EnumValueDefinition",e.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",e.DIRECTIVE_DEFINITION="DirectiveDefinition",e.SCHEMA_EXTENSION="SchemaExtension",e.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",e.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",e.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",e.UNION_TYPE_EXTENSION="UnionTypeExtension",e.ENUM_TYPE_EXTENSION="EnumTypeExtension",e.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(b||(b={}));function dt(e){return e===9||e===32}function ve(e){return e>=48&&e<=57}function Vn(e){return e>=97&&e<=122||e>=65&&e<=90}function Fn(e){return Vn(e)||e===95}function t1(e){return Vn(e)||ve(e)||e===95}function n1(e){var t;let n=Number.MAX_SAFE_INTEGER,i=null,r=-1;for(let o=0;o<e.length;++o){var a;const l=e[o],d=r1(l);d!==l.length&&(i=(a=i)!==null&&a!==void 0?a:o,r=o,o!==0&&d<n&&(n=d))}return e.map((o,l)=>l===0?o:o.slice(n)).slice((t=i)!==null&&t!==void 0?t:0,r+1)}function r1(e){let t=0;for(;t<e.length&&dt(e.charCodeAt(t));)++t;return t}function i1(e,t){const n=e.replace(/"""/g,'\\"""'),i=n.split(/\r\n|[\n\r]/g),r=i.length===1,a=i.length>1&&i.slice(1).every(N=>N.length===0||dt(N.charCodeAt(0))),o=n.endsWith('\\"""'),l=e.endsWith('"')&&!o,d=e.endsWith("\\"),u=l||d,p=!r||e.length>70||u||a||o;let f="";const x=r&&dt(e.charCodeAt(0));return(p&&!x||a)&&(f+=`
`),f+=n,(p||u)&&(f+=`
`),'"""'+f+'"""'}var h;(function(e){e.SOF="<SOF>",e.EOF="<EOF>",e.BANG="!",e.DOLLAR="$",e.AMP="&",e.PAREN_L="(",e.PAREN_R=")",e.SPREAD="...",e.COLON=":",e.EQUALS="=",e.AT="@",e.BRACKET_L="[",e.BRACKET_R="]",e.BRACE_L="{",e.PIPE="|",e.BRACE_R="}",e.NAME="Name",e.INT="Int",e.FLOAT="Float",e.STRING="String",e.BLOCK_STRING="BlockString",e.COMMENT="Comment"})(h||(h={}));class a1{constructor(t){const n=new zn(h.SOF,0,0,0,0);this.source=t,this.lastToken=n,this.token=n,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let t=this.token;if(t.kind!==h.EOF)do if(t.next)t=t.next;else{const n=o1(this,t.end);t.next=n,n.prev=t,t=n}while(t.kind===h.COMMENT);return t}}function s1(e){return e===h.BANG||e===h.DOLLAR||e===h.AMP||e===h.PAREN_L||e===h.PAREN_R||e===h.SPREAD||e===h.COLON||e===h.EQUALS||e===h.AT||e===h.BRACKET_L||e===h.BRACKET_R||e===h.BRACE_L||e===h.PIPE||e===h.BRACE_R}function oe(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function Ve(e,t){return Bn(e.charCodeAt(t))&&qn(e.charCodeAt(t+1))}function Bn(e){return e>=55296&&e<=56319}function qn(e){return e>=56320&&e<=57343}function W(e,t){const n=e.source.body.codePointAt(t);if(n===void 0)return h.EOF;if(n>=32&&n<=126){const i=String.fromCodePoint(n);return i==='"'?`'"'`:`"${i}"`}return"U+"+n.toString(16).toUpperCase().padStart(4,"0")}function R(e,t,n,i,r){const a=e.line,o=1+n-e.lineStart;return new zn(t,n,i,a,o,r)}function o1(e,t){const n=e.source.body,i=n.length;let r=t;for(;r<i;){const a=n.charCodeAt(r);switch(a){case 65279:case 9:case 32:case 44:++r;continue;case 10:++r,++e.line,e.lineStart=r;continue;case 13:n.charCodeAt(r+1)===10?r+=2:++r,++e.line,e.lineStart=r;continue;case 35:return c1(e,r);case 33:return R(e,h.BANG,r,r+1);case 36:return R(e,h.DOLLAR,r,r+1);case 38:return R(e,h.AMP,r,r+1);case 40:return R(e,h.PAREN_L,r,r+1);case 41:return R(e,h.PAREN_R,r,r+1);case 46:if(n.charCodeAt(r+1)===46&&n.charCodeAt(r+2)===46)return R(e,h.SPREAD,r,r+3);break;case 58:return R(e,h.COLON,r,r+1);case 61:return R(e,h.EQUALS,r,r+1);case 64:return R(e,h.AT,r,r+1);case 91:return R(e,h.BRACKET_L,r,r+1);case 93:return R(e,h.BRACKET_R,r,r+1);case 123:return R(e,h.BRACE_L,r,r+1);case 124:return R(e,h.PIPE,r,r+1);case 125:return R(e,h.BRACE_R,r,r+1);case 34:return n.charCodeAt(r+1)===34&&n.charCodeAt(r+2)===34?f1(e,r):d1(e,r)}if(ve(a)||a===45)return l1(e,r,a);if(Fn(a))return m1(e,r);throw z(e.source,r,a===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:oe(a)||Ve(n,r)?`Unexpected character: ${W(e,r)}.`:`Invalid character: ${W(e,r)}.`)}return R(e,h.EOF,i,i)}function c1(e,t){const n=e.source.body,i=n.length;let r=t+1;for(;r<i;){const a=n.charCodeAt(r);if(a===10||a===13)break;if(oe(a))++r;else if(Ve(n,r))r+=2;else break}return R(e,h.COMMENT,t,r,n.slice(t+1,r))}function l1(e,t,n){const i=e.source.body;let r=t,a=n,o=!1;if(a===45&&(a=i.charCodeAt(++r)),a===48){if(a=i.charCodeAt(++r),ve(a))throw z(e.source,r,`Invalid number, unexpected digit after 0: ${W(e,r)}.`)}else r=Ze(e,r,a),a=i.charCodeAt(r);if(a===46&&(o=!0,a=i.charCodeAt(++r),r=Ze(e,r,a),a=i.charCodeAt(r)),(a===69||a===101)&&(o=!0,a=i.charCodeAt(++r),(a===43||a===45)&&(a=i.charCodeAt(++r)),r=Ze(e,r,a),a=i.charCodeAt(r)),a===46||Fn(a))throw z(e.source,r,`Invalid number, expected digit but got: ${W(e,r)}.`);return R(e,o?h.FLOAT:h.INT,t,r,i.slice(t,r))}function Ze(e,t,n){if(!ve(n))throw z(e.source,t,`Invalid number, expected digit but got: ${W(e,t)}.`);const i=e.source.body;let r=t+1;for(;ve(i.charCodeAt(r));)++r;return r}function d1(e,t){const n=e.source.body,i=n.length;let r=t+1,a=r,o="";for(;r<i;){const l=n.charCodeAt(r);if(l===34)return o+=n.slice(a,r),R(e,h.STRING,t,r+1,o);if(l===92){o+=n.slice(a,r);const d=n.charCodeAt(r+1)===117?n.charCodeAt(r+2)===123?u1(e,r):h1(e,r):p1(e,r);o+=d.value,r+=d.size,a=r;continue}if(l===10||l===13)break;if(oe(l))++r;else if(Ve(n,r))r+=2;else throw z(e.source,r,`Invalid character within String: ${W(e,r)}.`)}throw z(e.source,r,"Unterminated string.")}function u1(e,t){const n=e.source.body;let i=0,r=3;for(;r<12;){const a=n.charCodeAt(t+r++);if(a===125){if(r<5||!oe(i))break;return{value:String.fromCodePoint(i),size:r}}if(i=i<<4|pe(a),i<0)break}throw z(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+r)}".`)}function h1(e,t){const n=e.source.body,i=Kt(n,t+2);if(oe(i))return{value:String.fromCodePoint(i),size:6};if(Bn(i)&&n.charCodeAt(t+6)===92&&n.charCodeAt(t+7)===117){const r=Kt(n,t+8);if(qn(r))return{value:String.fromCodePoint(i,r),size:12}}throw z(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+6)}".`)}function Kt(e,t){return pe(e.charCodeAt(t))<<12|pe(e.charCodeAt(t+1))<<8|pe(e.charCodeAt(t+2))<<4|pe(e.charCodeAt(t+3))}function pe(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function p1(e,t){const n=e.source.body;switch(n.charCodeAt(t+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw z(e.source,t,`Invalid character escape sequence: "${n.slice(t,t+2)}".`)}function f1(e,t){const n=e.source.body,i=n.length;let r=e.lineStart,a=t+3,o=a,l="";const d=[];for(;a<i;){const u=n.charCodeAt(a);if(u===34&&n.charCodeAt(a+1)===34&&n.charCodeAt(a+2)===34){l+=n.slice(o,a),d.push(l);const p=R(e,h.BLOCK_STRING,t,a+3,n1(d).join(`
`));return e.line+=d.length-1,e.lineStart=r,p}if(u===92&&n.charCodeAt(a+1)===34&&n.charCodeAt(a+2)===34&&n.charCodeAt(a+3)===34){l+=n.slice(o,a),o=a+1,a+=4;continue}if(u===10||u===13){l+=n.slice(o,a),d.push(l),u===13&&n.charCodeAt(a+1)===10?a+=2:++a,l="",o=a,r=a;continue}if(oe(u))++a;else if(Ve(n,a))a+=2;else throw z(e.source,a,`Invalid character within String: ${W(e,a)}.`)}throw z(e.source,a,"Unterminated string.")}function m1(e,t){const n=e.source.body,i=n.length;let r=t+1;for(;r<i;){const a=n.charCodeAt(r);if(t1(a))++r;else break}return R(e,h.NAME,t,r,n.slice(t,r))}const g1=10,Hn=2;function Nt(e){return Fe(e,[])}function Fe(e,t){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?`[function ${e.name}]`:"[function]";case"object":return x1(e,t);default:return String(e)}}function x1(e,t){if(e===null)return"null";if(t.includes(e))return"[Circular]";const n=[...t,e];if(v1(e)){const i=e.toJSON();if(i!==e)return typeof i=="string"?i:Fe(i,n)}else if(Array.isArray(e))return b1(e,n);return y1(e,n)}function v1(e){return typeof e.toJSON=="function"}function y1(e,t){const n=Object.entries(e);return n.length===0?"{}":t.length>Hn?"["+w1(e)+"]":"{ "+n.map(([r,a])=>r+": "+Fe(a,t)).join(", ")+" }"}function b1(e,t){if(e.length===0)return"[]";if(t.length>Hn)return"[Array]";const n=Math.min(g1,e.length),i=e.length-n,r=[];for(let a=0;a<n;++a)r.push(Fe(e[a],t));return i===1?r.push("... 1 more item"):i>1&&r.push(`... ${i} more items`),"["+r.join(", ")+"]"}function w1(e){const t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if(t==="Object"&&typeof e.constructor=="function"){const n=e.constructor.name;if(typeof n=="string"&&n!=="")return n}return t}const E1=globalThis.process&&!0,T1=E1?function(t,n){return t instanceof n}:function(t,n){if(t instanceof n)return!0;if(typeof t=="object"&&t!==null){var i;const r=n.prototype[Symbol.toStringTag],a=Symbol.toStringTag in t?t[Symbol.toStringTag]:(i=t.constructor)===null||i===void 0?void 0:i.name;if(r===a){const o=Nt(t);throw new Error(`Cannot use ${r} "${o}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class Un{constructor(t,n="GraphQL request",i={line:1,column:1}){typeof t=="string"||Ae(!1,`Body must be a string. Received: ${Nt(t)}.`),this.body=t,this.name=n,this.locationOffset=i,this.locationOffset.line>0||Ae(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||Ae(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function k1(e){return T1(e,Un)}function S1(e,t){const n=new N1(e,t),i=n.parseDocument();return Object.defineProperty(i,"tokenCount",{enumerable:!1,value:n.tokenCount}),i}class N1{constructor(t,n={}){const i=k1(t)?t:new Un(t);this._lexer=new a1(i),this._options=n,this._tokenCounter=0}get tokenCount(){return this._tokenCounter}parseName(){const t=this.expectToken(h.NAME);return this.node(t,{kind:b.NAME,value:t.value})}parseDocument(){return this.node(this._lexer.token,{kind:b.DOCUMENT,definitions:this.many(h.SOF,this.parseDefinition,h.EOF)})}parseDefinition(){if(this.peek(h.BRACE_L))return this.parseOperationDefinition();const t=this.peekDescription(),n=t?this._lexer.lookahead():this._lexer.token;if(n.kind===h.NAME){switch(n.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(t)throw z(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(n.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(n)}parseOperationDefinition(){const t=this._lexer.token;if(this.peek(h.BRACE_L))return this.node(t,{kind:b.OPERATION_DEFINITION,operation:J.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const n=this.parseOperationType();let i;return this.peek(h.NAME)&&(i=this.parseName()),this.node(t,{kind:b.OPERATION_DEFINITION,operation:n,name:i,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const t=this.expectToken(h.NAME);switch(t.value){case"query":return J.QUERY;case"mutation":return J.MUTATION;case"subscription":return J.SUBSCRIPTION}throw this.unexpected(t)}parseVariableDefinitions(){return this.optionalMany(h.PAREN_L,this.parseVariableDefinition,h.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:b.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(h.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(h.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const t=this._lexer.token;return this.expectToken(h.DOLLAR),this.node(t,{kind:b.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:b.SELECTION_SET,selections:this.many(h.BRACE_L,this.parseSelection,h.BRACE_R)})}parseSelection(){return this.peek(h.SPREAD)?this.parseFragment():this.parseField()}parseField(){const t=this._lexer.token,n=this.parseName();let i,r;return this.expectOptionalToken(h.COLON)?(i=n,r=this.parseName()):r=n,this.node(t,{kind:b.FIELD,alias:i,name:r,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(h.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(t){const n=t?this.parseConstArgument:this.parseArgument;return this.optionalMany(h.PAREN_L,n,h.PAREN_R)}parseArgument(t=!1){const n=this._lexer.token,i=this.parseName();return this.expectToken(h.COLON),this.node(n,{kind:b.ARGUMENT,name:i,value:this.parseValueLiteral(t)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const t=this._lexer.token;this.expectToken(h.SPREAD);const n=this.expectOptionalKeyword("on");return!n&&this.peek(h.NAME)?this.node(t,{kind:b.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(t,{kind:b.INLINE_FRAGMENT,typeCondition:n?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const t=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(t,{kind:b.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(t,{kind:b.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(t){const n=this._lexer.token;switch(n.kind){case h.BRACKET_L:return this.parseList(t);case h.BRACE_L:return this.parseObject(t);case h.INT:return this.advanceLexer(),this.node(n,{kind:b.INT,value:n.value});case h.FLOAT:return this.advanceLexer(),this.node(n,{kind:b.FLOAT,value:n.value});case h.STRING:case h.BLOCK_STRING:return this.parseStringLiteral();case h.NAME:switch(this.advanceLexer(),n.value){case"true":return this.node(n,{kind:b.BOOLEAN,value:!0});case"false":return this.node(n,{kind:b.BOOLEAN,value:!1});case"null":return this.node(n,{kind:b.NULL});default:return this.node(n,{kind:b.ENUM,value:n.value})}case h.DOLLAR:if(t)if(this.expectToken(h.DOLLAR),this._lexer.token.kind===h.NAME){const i=this._lexer.token.value;throw z(this._lexer.source,n.start,`Unexpected variable "$${i}" in constant value.`)}else throw this.unexpected(n);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const t=this._lexer.token;return this.advanceLexer(),this.node(t,{kind:b.STRING,value:t.value,block:t.kind===h.BLOCK_STRING})}parseList(t){const n=()=>this.parseValueLiteral(t);return this.node(this._lexer.token,{kind:b.LIST,values:this.any(h.BRACKET_L,n,h.BRACKET_R)})}parseObject(t){const n=()=>this.parseObjectField(t);return this.node(this._lexer.token,{kind:b.OBJECT,fields:this.any(h.BRACE_L,n,h.BRACE_R)})}parseObjectField(t){const n=this._lexer.token,i=this.parseName();return this.expectToken(h.COLON),this.node(n,{kind:b.OBJECT_FIELD,name:i,value:this.parseValueLiteral(t)})}parseDirectives(t){const n=[];for(;this.peek(h.AT);)n.push(this.parseDirective(t));return n}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(t){const n=this._lexer.token;return this.expectToken(h.AT),this.node(n,{kind:b.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(t)})}parseTypeReference(){const t=this._lexer.token;let n;if(this.expectOptionalToken(h.BRACKET_L)){const i=this.parseTypeReference();this.expectToken(h.BRACKET_R),n=this.node(t,{kind:b.LIST_TYPE,type:i})}else n=this.parseNamedType();return this.expectOptionalToken(h.BANG)?this.node(t,{kind:b.NON_NULL_TYPE,type:n}):n}parseNamedType(){return this.node(this._lexer.token,{kind:b.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(h.STRING)||this.peek(h.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("schema");const i=this.parseConstDirectives(),r=this.many(h.BRACE_L,this.parseOperationTypeDefinition,h.BRACE_R);return this.node(t,{kind:b.SCHEMA_DEFINITION,description:n,directives:i,operationTypes:r})}parseOperationTypeDefinition(){const t=this._lexer.token,n=this.parseOperationType();this.expectToken(h.COLON);const i=this.parseNamedType();return this.node(t,{kind:b.OPERATION_TYPE_DEFINITION,operation:n,type:i})}parseScalarTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("scalar");const i=this.parseName(),r=this.parseConstDirectives();return this.node(t,{kind:b.SCALAR_TYPE_DEFINITION,description:n,name:i,directives:r})}parseObjectTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("type");const i=this.parseName(),r=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),o=this.parseFieldsDefinition();return this.node(t,{kind:b.OBJECT_TYPE_DEFINITION,description:n,name:i,interfaces:r,directives:a,fields:o})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(h.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(h.BRACE_L,this.parseFieldDefinition,h.BRACE_R)}parseFieldDefinition(){const t=this._lexer.token,n=this.parseDescription(),i=this.parseName(),r=this.parseArgumentDefs();this.expectToken(h.COLON);const a=this.parseTypeReference(),o=this.parseConstDirectives();return this.node(t,{kind:b.FIELD_DEFINITION,description:n,name:i,arguments:r,type:a,directives:o})}parseArgumentDefs(){return this.optionalMany(h.PAREN_L,this.parseInputValueDef,h.PAREN_R)}parseInputValueDef(){const t=this._lexer.token,n=this.parseDescription(),i=this.parseName();this.expectToken(h.COLON);const r=this.parseTypeReference();let a;this.expectOptionalToken(h.EQUALS)&&(a=this.parseConstValueLiteral());const o=this.parseConstDirectives();return this.node(t,{kind:b.INPUT_VALUE_DEFINITION,description:n,name:i,type:r,defaultValue:a,directives:o})}parseInterfaceTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("interface");const i=this.parseName(),r=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),o=this.parseFieldsDefinition();return this.node(t,{kind:b.INTERFACE_TYPE_DEFINITION,description:n,name:i,interfaces:r,directives:a,fields:o})}parseUnionTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("union");const i=this.parseName(),r=this.parseConstDirectives(),a=this.parseUnionMemberTypes();return this.node(t,{kind:b.UNION_TYPE_DEFINITION,description:n,name:i,directives:r,types:a})}parseUnionMemberTypes(){return this.expectOptionalToken(h.EQUALS)?this.delimitedMany(h.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("enum");const i=this.parseName(),r=this.parseConstDirectives(),a=this.parseEnumValuesDefinition();return this.node(t,{kind:b.ENUM_TYPE_DEFINITION,description:n,name:i,directives:r,values:a})}parseEnumValuesDefinition(){return this.optionalMany(h.BRACE_L,this.parseEnumValueDefinition,h.BRACE_R)}parseEnumValueDefinition(){const t=this._lexer.token,n=this.parseDescription(),i=this.parseEnumValueName(),r=this.parseConstDirectives();return this.node(t,{kind:b.ENUM_VALUE_DEFINITION,description:n,name:i,directives:r})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw z(this._lexer.source,this._lexer.token.start,`${ke(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("input");const i=this.parseName(),r=this.parseConstDirectives(),a=this.parseInputFieldsDefinition();return this.node(t,{kind:b.INPUT_OBJECT_TYPE_DEFINITION,description:n,name:i,directives:r,fields:a})}parseInputFieldsDefinition(){return this.optionalMany(h.BRACE_L,this.parseInputValueDef,h.BRACE_R)}parseTypeSystemExtension(){const t=this._lexer.lookahead();if(t.kind===h.NAME)switch(t.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(t)}parseSchemaExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const n=this.parseConstDirectives(),i=this.optionalMany(h.BRACE_L,this.parseOperationTypeDefinition,h.BRACE_R);if(n.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:b.SCHEMA_EXTENSION,directives:n,operationTypes:i})}parseScalarTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const n=this.parseName(),i=this.parseConstDirectives();if(i.length===0)throw this.unexpected();return this.node(t,{kind:b.SCALAR_TYPE_EXTENSION,name:n,directives:i})}parseObjectTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const n=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),a=this.parseFieldsDefinition();if(i.length===0&&r.length===0&&a.length===0)throw this.unexpected();return this.node(t,{kind:b.OBJECT_TYPE_EXTENSION,name:n,interfaces:i,directives:r,fields:a})}parseInterfaceTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const n=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),a=this.parseFieldsDefinition();if(i.length===0&&r.length===0&&a.length===0)throw this.unexpected();return this.node(t,{kind:b.INTERFACE_TYPE_EXTENSION,name:n,interfaces:i,directives:r,fields:a})}parseUnionTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const n=this.parseName(),i=this.parseConstDirectives(),r=this.parseUnionMemberTypes();if(i.length===0&&r.length===0)throw this.unexpected();return this.node(t,{kind:b.UNION_TYPE_EXTENSION,name:n,directives:i,types:r})}parseEnumTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const n=this.parseName(),i=this.parseConstDirectives(),r=this.parseEnumValuesDefinition();if(i.length===0&&r.length===0)throw this.unexpected();return this.node(t,{kind:b.ENUM_TYPE_EXTENSION,name:n,directives:i,values:r})}parseInputObjectTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const n=this.parseName(),i=this.parseConstDirectives(),r=this.parseInputFieldsDefinition();if(i.length===0&&r.length===0)throw this.unexpected();return this.node(t,{kind:b.INPUT_OBJECT_TYPE_EXTENSION,name:n,directives:i,fields:r})}parseDirectiveDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("directive"),this.expectToken(h.AT);const i=this.parseName(),r=this.parseArgumentDefs(),a=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const o=this.parseDirectiveLocations();return this.node(t,{kind:b.DIRECTIVE_DEFINITION,description:n,name:i,arguments:r,repeatable:a,locations:o})}parseDirectiveLocations(){return this.delimitedMany(h.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const t=this._lexer.token,n=this.parseName();if(Object.prototype.hasOwnProperty.call(lt,n.value))return n;throw this.unexpected(t)}node(t,n){return this._options.noLocation!==!0&&(n.loc=new Ki(t,this._lexer.lastToken,this._lexer.source)),n}peek(t){return this._lexer.token.kind===t}expectToken(t){const n=this._lexer.token;if(n.kind===t)return this.advanceLexer(),n;throw z(this._lexer.source,n.start,`Expected ${Gn(t)}, found ${ke(n)}.`)}expectOptionalToken(t){return this._lexer.token.kind===t?(this.advanceLexer(),!0):!1}expectKeyword(t){const n=this._lexer.token;if(n.kind===h.NAME&&n.value===t)this.advanceLexer();else throw z(this._lexer.source,n.start,`Expected "${t}", found ${ke(n)}.`)}expectOptionalKeyword(t){const n=this._lexer.token;return n.kind===h.NAME&&n.value===t?(this.advanceLexer(),!0):!1}unexpected(t){const n=t??this._lexer.token;return z(this._lexer.source,n.start,`Unexpected ${ke(n)}.`)}any(t,n,i){this.expectToken(t);const r=[];for(;!this.expectOptionalToken(i);)r.push(n.call(this));return r}optionalMany(t,n,i){if(this.expectOptionalToken(t)){const r=[];do r.push(n.call(this));while(!this.expectOptionalToken(i));return r}return[]}many(t,n,i){this.expectToken(t);const r=[];do r.push(n.call(this));while(!this.expectOptionalToken(i));return r}delimitedMany(t,n){this.expectOptionalToken(t);const i=[];do i.push(n.call(this));while(this.expectOptionalToken(t));return i}advanceLexer(){const{maxTokens:t}=this._options,n=this._lexer.advance();if(n.kind!==h.EOF&&(++this._tokenCounter,t!==void 0&&this._tokenCounter>t))throw z(this._lexer.source,n.start,`Document contains more that ${t} tokens. Parsing aborted.`)}}function ke(e){const t=e.value;return Gn(e.kind)+(t!=null?` "${t}"`:"")}function Gn(e){return s1(e)?`"${e}"`:e}function I1(e){return`"${e.replace(O1,C1)}"`}const O1=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function C1(e){return A1[e.charCodeAt(0)]}const A1=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],_1=Object.freeze({});function $1(e,t,n=Pn){const i=new Map;for(const E of Object.values(b))i.set(E,L1(t,E));let r,a=Array.isArray(e),o=[e],l=-1,d=[],u=e,p,f;const x=[],N=[];do{l++;const E=l===o.length,A=E&&d.length!==0;if(E){if(p=N.length===0?void 0:x[x.length-1],u=f,f=N.pop(),A)if(a){u=u.slice();let D=0;for(const[m,_]of d){const I=m-D;_===null?(u.splice(I,1),D++):u[I]=_}}else{u=Object.defineProperties({},Object.getOwnPropertyDescriptors(u));for(const[D,m]of d)u[D]=m}l=r.index,o=r.keys,d=r.edits,a=r.inArray,r=r.prev}else if(f){if(p=a?l:o[l],u=f[p],u==null)continue;x.push(p)}let k;if(!Array.isArray(u)){var y,g;Qt(u)||Ae(!1,`Invalid AST Node: ${Nt(u)}.`);const D=E?(y=i.get(u.kind))===null||y===void 0?void 0:y.leave:(g=i.get(u.kind))===null||g===void 0?void 0:g.enter;if(k=D==null?void 0:D.call(t,u,p,f,x,N),k===_1)break;if(k===!1){if(!E){x.pop();continue}}else if(k!==void 0&&(d.push([p,k]),!E))if(Qt(k))u=k;else{x.pop();continue}}if(k===void 0&&A&&d.push([p,u]),E)x.pop();else{var w;r={inArray:a,index:l,keys:o,edits:d,prev:r},a=Array.isArray(u),o=a?u:(w=n[u.kind])!==null&&w!==void 0?w:[],l=-1,d=[],f&&N.push(f),f=u}}while(r!==void 0);return d.length!==0?d[d.length-1][1]:e}function L1(e,t){const n=e[t];return typeof n=="object"?n:typeof n=="function"?{enter:n,leave:void 0}:{enter:e.enter,leave:e.leave}}function j1(e){return $1(e,R1)}const D1=80,R1={Name:{leave:e=>e.value},Variable:{leave:e=>"$"+e.name},Document:{leave:e=>v(e.definitions,`

`)},OperationDefinition:{leave(e){const t=C("(",v(e.variableDefinitions,", "),")"),n=v([e.operation,v([e.name,t]),v(e.directives," ")]," ");return(n==="query"?"":n+" ")+e.selectionSet}},VariableDefinition:{leave:({variable:e,type:t,defaultValue:n,directives:i})=>e+": "+t+C(" = ",n)+C(" ",v(i," "))},SelectionSet:{leave:({selections:e})=>H(e)},Field:{leave({alias:e,name:t,arguments:n,directives:i,selectionSet:r}){const a=C("",e,": ")+t;let o=a+C("(",v(n,", "),")");return o.length>D1&&(o=a+C(`(
`,_e(v(n,`
`)),`
)`)),v([o,v(i," "),r]," ")}},Argument:{leave:({name:e,value:t})=>e+": "+t},FragmentSpread:{leave:({name:e,directives:t})=>"..."+e+C(" ",v(t," "))},InlineFragment:{leave:({typeCondition:e,directives:t,selectionSet:n})=>v(["...",C("on ",e),v(t," "),n]," ")},FragmentDefinition:{leave:({name:e,typeCondition:t,variableDefinitions:n,directives:i,selectionSet:r})=>`fragment ${e}${C("(",v(n,", "),")")} on ${t} ${C("",v(i," ")," ")}`+r},IntValue:{leave:({value:e})=>e},FloatValue:{leave:({value:e})=>e},StringValue:{leave:({value:e,block:t})=>t?i1(e):I1(e)},BooleanValue:{leave:({value:e})=>e?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:e})=>e},ListValue:{leave:({values:e})=>"["+v(e,", ")+"]"},ObjectValue:{leave:({fields:e})=>"{"+v(e,", ")+"}"},ObjectField:{leave:({name:e,value:t})=>e+": "+t},Directive:{leave:({name:e,arguments:t})=>"@"+e+C("(",v(t,", "),")")},NamedType:{leave:({name:e})=>e},ListType:{leave:({type:e})=>"["+e+"]"},NonNullType:{leave:({type:e})=>e+"!"},SchemaDefinition:{leave:({description:e,directives:t,operationTypes:n})=>C("",e,`
`)+v(["schema",v(t," "),H(n)]," ")},OperationTypeDefinition:{leave:({operation:e,type:t})=>e+": "+t},ScalarTypeDefinition:{leave:({description:e,name:t,directives:n})=>C("",e,`
`)+v(["scalar",t,v(n," ")]," ")},ObjectTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:i,fields:r})=>C("",e,`
`)+v(["type",t,C("implements ",v(n," & ")),v(i," "),H(r)]," ")},FieldDefinition:{leave:({description:e,name:t,arguments:n,type:i,directives:r})=>C("",e,`
`)+t+(en(n)?C(`(
`,_e(v(n,`
`)),`
)`):C("(",v(n,", "),")"))+": "+i+C(" ",v(r," "))},InputValueDefinition:{leave:({description:e,name:t,type:n,defaultValue:i,directives:r})=>C("",e,`
`)+v([t+": "+n,C("= ",i),v(r," ")]," ")},InterfaceTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:i,fields:r})=>C("",e,`
`)+v(["interface",t,C("implements ",v(n," & ")),v(i," "),H(r)]," ")},UnionTypeDefinition:{leave:({description:e,name:t,directives:n,types:i})=>C("",e,`
`)+v(["union",t,v(n," "),C("= ",v(i," | "))]," ")},EnumTypeDefinition:{leave:({description:e,name:t,directives:n,values:i})=>C("",e,`
`)+v(["enum",t,v(n," "),H(i)]," ")},EnumValueDefinition:{leave:({description:e,name:t,directives:n})=>C("",e,`
`)+v([t,v(n," ")]," ")},InputObjectTypeDefinition:{leave:({description:e,name:t,directives:n,fields:i})=>C("",e,`
`)+v(["input",t,v(n," "),H(i)]," ")},DirectiveDefinition:{leave:({description:e,name:t,arguments:n,repeatable:i,locations:r})=>C("",e,`
`)+"directive @"+t+(en(n)?C(`(
`,_e(v(n,`
`)),`
)`):C("(",v(n,", "),")"))+(i?" repeatable":"")+" on "+v(r," | ")},SchemaExtension:{leave:({directives:e,operationTypes:t})=>v(["extend schema",v(e," "),H(t)]," ")},ScalarTypeExtension:{leave:({name:e,directives:t})=>v(["extend scalar",e,v(t," ")]," ")},ObjectTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:i})=>v(["extend type",e,C("implements ",v(t," & ")),v(n," "),H(i)]," ")},InterfaceTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:i})=>v(["extend interface",e,C("implements ",v(t," & ")),v(n," "),H(i)]," ")},UnionTypeExtension:{leave:({name:e,directives:t,types:n})=>v(["extend union",e,v(t," "),C("= ",v(n," | "))]," ")},EnumTypeExtension:{leave:({name:e,directives:t,values:n})=>v(["extend enum",e,v(t," "),H(n)]," ")},InputObjectTypeExtension:{leave:({name:e,directives:t,fields:n})=>v(["extend input",e,v(t," "),H(n)]," ")}};function v(e,t=""){var n;return(n=e==null?void 0:e.filter(i=>i).join(t))!==null&&n!==void 0?n:""}function H(e){return C(`{
`,_e(v(e,`
`)),`
}`)}function C(e,t,n=""){return t!=null&&t!==""?e+t+n:""}function _e(e){return C("  ",e.replace(/\n/g,`
  `))}function en(e){var t;return(t=e==null?void 0:e.some(n=>n.includes(`
`)))!==null&&t!==void 0?t:!1}const tn="Accept",ut="Content-Type",ht="application/json",Yn="application/graphql-response+json",nn=e=>e.replace(/([\s,]|#[^\n\r]+)+/g," ").trim(),M1=e=>{const t=e.toLowerCase();return t.includes(Yn)||t.includes(ht)},rn=e=>{try{if(Array.isArray(e))return{_tag:"Batch",executionResults:e.map(an)};if(Ce(e))return{_tag:"Single",executionResult:an(e)};throw new Error(`Invalid execution result: result is not object or array. 
Got:
${String(e)}`)}catch(t){return t}},an=e=>{if(typeof e!="object"||e===null)throw new Error("Invalid execution result: result is not object");let t,n,i;if("errors"in e){if(!Ce(e.errors)&&!Array.isArray(e.errors))throw new Error("Invalid execution result: errors is not plain object OR array");t=e.errors}if("data"in e){if(!Ce(e.data)&&e.data!==null)throw new Error("Invalid execution result: data is not plain object");n=e.data}if("extensions"in e){if(!Ce(e.extensions))throw new Error("Invalid execution result: extensions is not plain object");i=e.extensions}return{data:n,errors:t,extensions:i}},z1=e=>e._tag==="Batch"?e.executionResults.some(sn):sn(e.executionResult),sn=e=>Array.isArray(e.errors)?e.errors.length>0:!!e.errors,Zn=e=>typeof e=="object"&&e!==null&&"kind"in e&&e.kind===b.OPERATION_DEFINITION,P1=e=>{var i;let t;const n=e.definitions.filter(Zn);return n.length===1&&(t=(i=n[0].name)==null?void 0:i.value),t},V1=e=>{let t=!1;const n=e.definitions.filter(Zn);return n.length===1&&(t=n[0].operation===J.MUTATION),t},Je=(e,t)=>{const n=typeof e=="string"?e:j1(e);let i=!1,r;if(t)return{expression:n,isMutation:i,operationName:r};const a=Hi(()=>typeof e=="string"?S1(e):e);return a instanceof Error?{expression:n,isMutation:i,operationName:r}:(r=P1(a),i=V1(a),{expression:n,operationName:r,isMutation:i})},It=JSON,We=async e=>{const t={...e,method:e.request._tag==="Single"?e.request.document.isMutation?"POST":Zt(e.method??"post"):e.request.hasMutations?"POST":Zt(e.method??"post"),fetchOptions:{...e.fetchOptions,errorPolicy:e.fetchOptions.errorPolicy??"none"}},i=await B1(t.method)(t);if(!i.ok)return new ie({status:i.status,headers:i.headers},{query:e.request._tag==="Single"?e.request.document.expression:e.request.query,variables:e.request.variables});const r=await F1(i,e.fetchOptions.jsonSerializer??It);if(r instanceof Error)throw r;const a={status:i.status,headers:i.headers};if(z1(r)&&t.fetchOptions.errorPolicy==="none"){const o=r._tag==="Batch"?{...r.executionResults,...a}:{...r.executionResult,...a};return new ie(o,{query:e.request._tag==="Single"?e.request.document.expression:e.request.query,variables:e.request.variables})}switch(r._tag){case"Single":return{...a,...on(t)(r.executionResult)};case"Batch":return{...a,data:r.executionResults.map(on(t))};default:kt(r)}},on=e=>t=>({extensions:t.extensions,data:t.data,errors:e.fetchOptions.errorPolicy==="all"?t.errors:void 0}),F1=async(e,t)=>{const n=e.headers.get(ut),i=await e.text();return n&&M1(n)?rn(t.parse(i)):rn(i)},B1=e=>async t=>{const n=new Headers(t.headers);let i=null,r;n.has(tn)||n.set(tn,[Yn,ht].join(", ")),e==="POST"?(r=(t.fetchOptions.jsonSerializer??It).stringify(q1(t)),typeof r=="string"&&!n.has(ut)&&n.set(ut,ht)):i=H1(t);const a={method:e,headers:n,body:r,...t.fetchOptions};let o=new URL(t.url),l=a;if(t.middleware){const u=await Promise.resolve(t.middleware({...a,url:t.url,operationName:t.request._tag==="Single"?t.request.document.operationName:void 0,variables:t.request.variables})),{url:p,...f}=u;o=new URL(p),l=f}return i&&i.forEach((u,p)=>{o.searchParams.append(p,u)}),await(t.fetch??fetch)(o,l)},q1=e=>{switch(e.request._tag){case"Single":return{query:e.request.document.expression,variables:e.request.variables,operationName:e.request.document.operationName};case"Batch":return Rn(e.request.query,e.request.variables??[]).map(([t,n])=>({query:t,variables:n}));default:throw kt(e.request)}},H1=e=>{var i;const t=e.fetchOptions.jsonSerializer??It,n=new URLSearchParams;switch(e.request._tag){case"Single":return n.append("query",nn(e.request.document.expression)),e.request.variables&&n.append("variables",t.stringify(e.request.variables)),e.request.document.operationName&&n.append("operationName",e.request.document.operationName),n;case"Batch":{const r=((i=e.request.variables)==null?void 0:i.map(l=>t.stringify(l)))??[],a=e.request.query.map(nn),o=Rn(a,r).map(([l,d])=>({query:l,variables:d}));return n.append("query",t.stringify(o)),n}default:throw kt(e.request)}};class U1{constructor(t,n={}){K(this,"url");K(this,"requestConfig");K(this,"rawRequest",async(...t)=>{const[n,i,r]=t,a=Yi(n,i,r),{headers:o,fetch:l=globalThis.fetch,method:d="POST",requestMiddleware:u,responseMiddleware:p,excludeOperationName:f,...x}=this.requestConfig,{url:N}=this;a.signal!==void 0&&(x.signal=a.signal);const y=Je(a.query,f),g=await We({url:N,request:{_tag:"Single",document:y,variables:a.variables},headers:{...ne(Ye(o)),...ne(a.requestHeaders)},fetch:l,method:d,fetchOptions:x,middleware:u});if(p&&await p(g,{operationName:y.operationName,variables:i,url:this.url}),g instanceof Error)throw g;return g});this.url=t,this.requestConfig=n}async request(t,...n){const[i,r]=n,a=G1(t,i,r),{headers:o,fetch:l=globalThis.fetch,method:d="POST",requestMiddleware:u,responseMiddleware:p,excludeOperationName:f,...x}=this.requestConfig,{url:N}=this;a.signal!==void 0&&(x.signal=a.signal);const y=Je(a.document,f),g=await We({url:N,request:{_tag:"Single",document:y,variables:a.variables},headers:{...ne(Ye(o)),...ne(a.requestHeaders)},fetch:l,method:d,fetchOptions:x,middleware:u});if(p&&await p(g,{operationName:y.operationName,variables:a.variables,url:this.url}),g instanceof Error)throw g;return g.data}async batchRequests(t,n){const i=Gi(t,n),{headers:r,excludeOperationName:a,...o}=this.requestConfig;i.signal!==void 0&&(o.signal=i.signal);const l=i.documents.map(({document:x})=>Je(x,a)),d=l.map(({expression:x})=>x),u=l.some(({isMutation:x})=>x),p=i.documents.map(({variables:x})=>x),f=await We({url:this.url,request:{_tag:"Batch",operationName:void 0,query:d,hasMutations:u,variables:p},headers:{...ne(Ye(r)),...ne(i.requestHeaders)},fetch:this.requestConfig.fetch??globalThis.fetch,method:this.requestConfig.method||"POST",fetchOptions:o,middleware:this.requestConfig.requestMiddleware});if(this.requestConfig.responseMiddleware&&await this.requestConfig.responseMiddleware(f,{operationName:void 0,variables:p,url:this.url}),f instanceof Error)throw f;return f.data}setHeaders(t){return this.requestConfig.headers=t,this}setHeader(t,n){const{headers:i}=this.requestConfig;return i?i[t]=n:this.requestConfig.headers={[t]:n},this}setEndpoint(t){return this.url=t,this}}const G1=(e,t,n)=>e.document?e:{document:e,variables:t,requestHeaders:n,signal:void 0},Y1=()=>"e0b132b4ca96ee6941c02bc746f2f8",Z1="https://graphql.datocms.com/",J1=Y1(),Ot=new U1(Z1,{headers:{Authorization:`Bearer ${J1}`}}),W1=`
  query {
    allProjects(orderBy: title_ASC) {
      id
      title
      description
      techused
      liveurl
      image {
        url
      }
    }
  }
`;async function X1(){return(await Ot.request(W1)).allProjects}const Q1=S.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: ${s.spacing.lg} 0;

  @media (min-width: ${s.breakpoints.md}) {
    padding: ${s.spacing.xl} 0;
  }
`,K1=S(P.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: calc(${s.spacing.xl} * 1.5);
  color: ${s.colors.textLight};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -${s.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${s.colors.accent};
    border-radius: 2px;
  }

  @media (min-width: ${s.breakpoints.md}) {
    margin-bottom: calc(${s.spacing.xl} * 2);
  }
`,ea=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: ${s.spacing.lg};
  width: 100%;
  margin-top: ${s.spacing.lg};

  @media (min-width: ${s.breakpoints.md}) {
    gap: ${s.spacing.xl};
    margin-top: ${s.spacing.xl};
  }
`,ta=S(P.div)`
  background: ${s.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 12px;
  overflow: hidden;
  color: ${s.colors.textLight};
  transition: all ${s.transitions.default};
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(246, 177, 122, 0.15);
  }
`,na=S.div`
  width: 100%;
  height: 180px;
  background-image: url(${e=>e.imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;

  @media (min-width: ${s.breakpoints.md}) {
    height: 220px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(to top, ${s.colors.glass.card}, transparent);
  }
`,ra=S.div`
  padding: ${s.spacing.md};
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: ${s.breakpoints.md}) {
    padding: ${s.spacing.lg};
  }
`,ia=S.h3`
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  margin-bottom: ${s.spacing.sm};
  color: ${s.colors.light};
  font-weight: 600;
`,aa=S.p`
  color: ${s.colors.textLight};
  margin-bottom: ${s.spacing.lg};
  font-size: clamp(0.9rem, 2vw, 1rem);
  line-height: 1.6;
  flex: 1;
  opacity: 0.9;
`,sa=S.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${s.spacing.xs};
  margin-bottom: ${s.spacing.md};

  @media (min-width: ${s.breakpoints.md}) {
    gap: ${s.spacing.sm};
    margin-bottom: ${s.spacing.lg};
  }
`,oa=S.span`
  background: ${s.colors.glass.card};
  color: ${s.colors.accent};
  padding: 4px 10px;
  border-radius: 20px;
  font-size: clamp(0.75rem, 2vw, 0.85rem);
  font-weight: 500;
  transition: all ${s.transitions.default};

  @media (min-width: ${s.breakpoints.md}) {
    padding: 6px 12px;
  }

  &:hover {
    background: ${s.colors.gradient.accent};
    color: ${s.colors.textDark};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(246, 177, 122, 0.2);
  }
`,ca=S.div`
  display: flex;
  gap: ${s.spacing.md};
  margin-top: auto;
  padding-top: ${s.spacing.md};
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  
  a {
    color: ${s.colors.accent};
    font-size: clamp(1rem, 2vw, 1.2rem);
    transition: all ${s.transitions.default};
    padding: ${s.spacing.xs};
    border-radius: 4px;
    
    &:hover {
      color: ${s.colors.light};
      background: ${s.colors.glass.card};
      transform: translateY(-2px);
    }
  }
`,la=()=>{const[e,t]=O.useState([]);O.useEffect(()=>{async function r(){const a=await X1();t(a)}r()},[]);const n={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},i={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};return c.jsx(Q1,{id:"projects",role:"region","aria-label":"Featured Projects",children:c.jsxs("div",{className:"container",children:[c.jsx(K1,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},role:"heading","aria-level":2,children:"Featured Projects"}),c.jsx(P.div,{variants:n,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:c.jsx(ea,{role:"list",children:e.map(r=>c.jsxs(ta,{variants:i,role:"listitem","aria-labelledby":`project-title-${r.id}`,children:[c.jsx(na,{imageUrl:r.image.url,role:"img","aria-label":`Screenshot of ${r.title}`}),c.jsxs(ra,{children:[c.jsx(ia,{id:`project-title-${r.id}`,children:r.title}),c.jsx(aa,{children:r.description}),c.jsx(sa,{role:"list","aria-label":`Technologies used in ${r.title}`,children:r.techused.split(", ").map(a=>c.jsx(oa,{role:"listitem",children:a},a))}),c.jsx(ca,{children:c.jsxs("a",{href:r.liveurl,target:"_blank",rel:"noopener noreferrer","aria-label":`Visit ${r.title} live site`,children:[c.jsx(_i,{"aria-hidden":"true"}),c.jsx("span",{className:"sr-only",children:"Live site"})]})})]})]},r.id))})})]})})};var ue={},Xe={exports:{}},Qe,cn;function da(){if(cn)return Qe;cn=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Qe=e,Qe}var Ke,ln;function ua(){if(ln)return Ke;ln=1;var e=da();function t(){}function n(){}return n.resetWarningCache=t,Ke=function(){function i(o,l,d,u,p,f){if(f!==e){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}i.isRequired=i;function r(){return i}var a={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:r,element:i,elementType:i,instanceOf:r,node:i,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:n,resetWarningCache:t};return a.PropTypes=a,a},Ke}var dn;function Jn(){return dn||(dn=1,Xe.exports=ua()()),Xe.exports}var et={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var un;function Wn(){return un||(un=1,function(e){(function(){var t={}.hasOwnProperty;function n(){for(var a="",o=0;o<arguments.length;o++){var l=arguments[o];l&&(a=r(a,i(l)))}return a}function i(a){if(typeof a=="string"||typeof a=="number")return a;if(typeof a!="object")return"";if(Array.isArray(a))return n.apply(null,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var o="";for(var l in a)t.call(a,l)&&a[l]&&(o=r(o,l));return o}function r(a,o){return o?a?a+" "+o:a+o:a}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}(et)),et.exports}var hn;function ha(){if(hn)return ue;hn=1,ue.__esModule=!0,ue.default=void 0;var e=i(yn()),t=i(Jn()),n=i(Wn());function i(o){return o&&o.__esModule?o:{default:o}}const r=({animate:o=!0,className:l="",layout:d="2-columns",lineColor:u="#FFF",children:p})=>(typeof window=="object"&&document.documentElement.style.setProperty("--line-color",u),e.default.createElement("div",{className:(0,n.default)(l,"vertical-timeline",{"vertical-timeline--animate":o,"vertical-timeline--two-columns":d==="2-columns","vertical-timeline--one-column-left":d==="1-column"||d==="1-column-left","vertical-timeline--one-column-right":d==="1-column-right"})},p));r.propTypes={children:t.default.oneOfType([t.default.arrayOf(t.default.node),t.default.node]).isRequired,className:t.default.string,animate:t.default.bool,layout:t.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:t.default.string};var a=r;return ue.default=a,ue}var he={};function pt(){return pt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},pt.apply(this,arguments)}function pa(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,ft(e,t)}function ft(e,t){return ft=Object.setPrototypeOf||function(i,r){return i.__proto__=r,i},ft(e,t)}function fa(e,t){if(e==null)return{};var n={},i=Object.keys(e),r,a;for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}var mt=new Map,Se=new WeakMap,pn=0,Xn=void 0;function ma(e){Xn=e}function ga(e){return e?(Se.has(e)||(pn+=1,Se.set(e,pn.toString())),Se.get(e)):"0"}function xa(e){return Object.keys(e).sort().filter(function(t){return e[t]!==void 0}).map(function(t){return t+"_"+(t==="root"?ga(e.root):e[t])}).toString()}function va(e){var t=xa(e),n=mt.get(t);if(!n){var i=new Map,r,a=new IntersectionObserver(function(o){o.forEach(function(l){var d,u=l.isIntersecting&&r.some(function(p){return l.intersectionRatio>=p});e.trackVisibility&&typeof l.isVisible>"u"&&(l.isVisible=u),(d=i.get(l.target))==null||d.forEach(function(p){p(u,l)})})},e);r=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:a,elements:i},mt.set(t,n)}return n}function Ct(e,t,n,i){if(n===void 0&&(n={}),i===void 0&&(i=Xn),typeof window.IntersectionObserver>"u"&&i!==void 0){var r=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),function(){}}var a=va(n),o=a.id,l=a.observer,d=a.elements,u=d.get(e)||[];return d.has(e)||d.set(e,u),u.push(t),l.observe(e),function(){u.splice(u.indexOf(t),1),u.length===0&&(d.delete(e),l.unobserve(e)),d.size===0&&(l.disconnect(),mt.delete(o))}}var ya=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function fn(e){return typeof e.children!="function"}var je=function(e){pa(t,e);function t(i){var r;return r=e.call(this,i)||this,r.node=null,r._unobserveCb=null,r.handleNode=function(a){r.node&&(r.unobserve(),!a&&!r.props.triggerOnce&&!r.props.skip&&r.setState({inView:!!r.props.initialInView,entry:void 0})),r.node=a||null,r.observeNode()},r.handleChange=function(a,o){a&&r.props.triggerOnce&&r.unobserve(),fn(r.props)||r.setState({inView:a,entry:o}),r.props.onChange&&r.props.onChange(a,o)},r.state={inView:!!i.initialInView,entry:void 0},r}var n=t.prototype;return n.componentDidUpdate=function(r){(r.rootMargin!==this.props.rootMargin||r.root!==this.props.root||r.threshold!==this.props.threshold||r.skip!==this.props.skip||r.trackVisibility!==this.props.trackVisibility||r.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},n.componentWillUnmount=function(){this.unobserve(),this.node=null},n.observeNode=function(){if(!(!this.node||this.props.skip)){var r=this.props,a=r.threshold,o=r.root,l=r.rootMargin,d=r.trackVisibility,u=r.delay,p=r.fallbackInView;this._unobserveCb=Ct(this.node,this.handleChange,{threshold:a,root:o,rootMargin:l,trackVisibility:d,delay:u},p)}},n.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},n.render=function(){if(!fn(this.props)){var r=this.state,a=r.inView,o=r.entry;return this.props.children({inView:a,entry:o,ref:this.handleNode})}var l=this.props,d=l.children,u=l.as,p=fa(l,ya);return O.createElement(u||"div",pt({ref:this.handleNode},p),d)},t}(O.Component);je.displayName="InView";je.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};function ba(e){var t=e===void 0?{}:e,n=t.threshold,i=t.delay,r=t.trackVisibility,a=t.rootMargin,o=t.root,l=t.triggerOnce,d=t.skip,u=t.initialInView,p=t.fallbackInView,f=O.useRef(),x=O.useState({inView:!!u}),N=x[0],y=x[1],g=O.useCallback(function(E){f.current!==void 0&&(f.current(),f.current=void 0),!d&&E&&(f.current=Ct(E,function(A,k){y({inView:A,entry:k}),k.isIntersecting&&l&&f.current&&(f.current(),f.current=void 0)},{root:o,rootMargin:a,threshold:n,trackVisibility:r,delay:i},p))},[Array.isArray(n)?n.toString():n,o,a,l,d,r,p,i]);O.useEffect(function(){!f.current&&N.entry&&!l&&!d&&y({inView:!!u})});var w=[g,N.inView,N.entry];return w.ref=w[0],w.inView=w[1],w.entry=w[2],w}const wa=Object.freeze(Object.defineProperty({__proto__:null,InView:je,default:je,defaultFallbackInView:ma,observe:Ct,useInView:ba},Symbol.toStringTag,{value:"Module"})),Ea=rr(wa);var mn;function Ta(){if(mn)return he;mn=1,he.__esModule=!0,he.default=void 0;var e=r(yn()),t=r(Jn()),n=r(Wn()),i=Ea;function r(l){return l&&l.__esModule?l:{default:l}}const a=({children:l="",className:d="",contentArrowStyle:u=null,contentStyle:p=null,date:f="",dateClassName:x="",icon:N=null,iconClassName:y="",iconOnClick:g=null,onTimelineElementClick:w=null,iconStyle:E=null,id:A="",position:k="",style:D=null,textClassName:m="",intersectionObserverProps:_={rootMargin:"0px 0px -40px 0px",triggerOnce:!0},visible:I=!1,shadowSize:ce="small"})=>e.default.createElement(i.InView,_,({inView:X,ref:Q})=>e.default.createElement("div",{ref:Q,id:A,className:(0,n.default)(d,"vertical-timeline-element",{"vertical-timeline-element--left":k==="left","vertical-timeline-element--right":k==="right","vertical-timeline-element--no-children":l===""}),style:D},e.default.createElement(e.default.Fragment,null,e.default.createElement("span",{style:E,onClick:g,className:(0,n.default)(y,"vertical-timeline-element-icon",`shadow-size-${ce}`,{"bounce-in":X||I,"is-hidden":!(X||I)})},N),e.default.createElement("div",{style:p,onClick:w,className:(0,n.default)(m,"vertical-timeline-element-content",{"bounce-in":X||I,"is-hidden":!(X||I)})},e.default.createElement("div",{style:u,className:"vertical-timeline-element-content-arrow"}),l,e.default.createElement("span",{className:(0,n.default)(x,"vertical-timeline-element-date")},f)))));a.propTypes={children:t.default.oneOfType([t.default.arrayOf(t.default.node),t.default.node]),className:t.default.string,contentArrowStyle:t.default.shape({}),contentStyle:t.default.shape({}),date:t.default.node,dateClassName:t.default.string,icon:t.default.element,iconClassName:t.default.string,iconStyle:t.default.shape({}),iconOnClick:t.default.func,onTimelineElementClick:t.default.func,id:t.default.string,position:t.default.string,style:t.default.shape({}),textClassName:t.default.string,visible:t.default.bool,shadowSize:t.default.string,intersectionObserverProps:t.default.shape({root:t.default.object,rootMargin:t.default.string,threshold:t.default.number,triggerOnce:t.default.bool})};var o=a;return he.default=o,he}var tt,gn;function ka(){return gn||(gn=1,tt={VerticalTimeline:ha().default,VerticalTimelineElement:Ta().default}),tt}var nt=ka();function Sa(e){return T({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"}}]})(e)}function Na(e){return T({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 368a16 16 0 01-7.94-2.11L108 285.84a8 8 0 00-12 6.94V368a16 16 0 008.23 14l144 80a16 16 0 0015.54 0l144-80a16 16 0 008.23-14v-75.22a8 8 0 00-12-6.94l-140.06 80.05A16 16 0 01256 368z"}},{tag:"path",attr:{d:"M495.92 190.5v-.11a16 16 0 00-8-12.28l-224-128a16 16 0 00-15.88 0l-224 128a16 16 0 000 27.78l224 128a16 16 0 0015.88 0L461 221.28a2 2 0 013 1.74v144.53c0 8.61 6.62 16 15.23 16.43A16 16 0 00496 368V192a14.76 14.76 0 00-.08-1.5z"}}]})(e)}const Ia=`
{
  allTimelines(orderBy: startdate_DESC) {
        daterange
        id
        name
        summarypoints
        techstack
        timelinetype
        title
    }
}
`;async function Oa(){return(await Ot.request(Ia)).allTimelines}const Ca=S.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  color: ${s.colors.textLight};
  padding: ${s.spacing.lg} ${s.spacing.md};

  @media (min-width: ${s.breakpoints.md}) {
    padding: ${s.spacing.xl} ${s.spacing.lg};
  }
`,Aa=S(P.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: ${s.spacing.xl};
  color: ${s.colors.light};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -${s.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${s.colors.light};
    border-radius: 2px;
  }
`,_a=()=>{const[e,t]=O.useState(null);return O.useEffect(()=>{async function n(){const i=await Oa();t(i)}n()},[]),e?(console.log("🚀 ~ timeLineData:",e),c.jsxs(Ca,{id:"timeline",role:"region","aria-label":"Timeline",children:[c.jsx(Aa,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},role:"heading","aria-level":2,children:"Timeline"}),c.jsxs(nt.VerticalTimeline,{children:[e.map((n,i)=>c.jsx(nt.VerticalTimelineElement,{className:`vertical-timeline-element--${n.timelinetype}`,contentStyle:n.timelinetype==="work"?i===0?{background:"#14B473",color:"#fff"}:{background:"rgb(163, 184, 216)",color:"#fff"}:{background:"rgb(163, 184, 216)",color:"#fff"},contentArrowStyle:n.timelinetype==="work"?{borderRight:i===0?"7px solid #14B473":"7px solid rgb(240, 240, 240)"}:{borderRight:"7px solid rgb(255, 224, 230)"},date:n.daterange,iconStyle:n.timelinetype==="work"?{background:"rgb(33, 150, 243)",color:"#fff"}:{background:"rgb(255, 160, 200)",color:"#fff"},icon:n.timelinetype==="work"?c.jsx(Sa,{}):c.jsx(Na,{}),children:n.timelinetype==="work"?c.jsxs("div",{style:{color:s.colors.text},children:[c.jsx("h3",{className:"vertical-timeline-element-title",children:n.title}),c.jsx("h4",{className:"vertical-timeline-element-subtitle",children:n.name}),c.jsxs("p",{className:"vertical-timeline-element-tech",children:["🔧 ",n.techstack]}),c.jsx("p",{children:n.summarypoints})]}):c.jsxs("div",{style:{color:"black"},children:[c.jsx("h3",{className:"vertical-timeline-element-title",children:n.name}),c.jsx("h4",{className:"vertical-timeline-element-subtitle",children:n.title}),c.jsx("p",{children:n.summarypoints})]})},i)),c.jsx(nt.VerticalTimelineElement,{iconStyle:{background:"rgb(16, 204, 82)",color:"#fff"},icon:c.jsx($i,{})})]})]})):c.jsx("div",{children:"Loading..."})},$a=`
{
  allSkillcategories {
        id
        icon
        title
        skills {
            id
            icon
            name
        }
    }
}
`;async function La(){return(await Ot.request($a)).allSkillcategories}function ja(e){return T({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M12.581 0c.436.037.871.1 1.299.186 1.679.383 3.121 1.213 4.382 2.365 1.161 1.06 1.917 2.372 2.335 3.881.089.321.216.56.586.624.205.035.238.245.239.43.003.646.002 1.294.002 1.94l-.002 1.21c-.001.356-.116.479-.466.474-.211-.003-.293.119-.344.291-.146.489-.33.966-.552 1.426-.818 1.682-2.084 2.938-3.688 3.87-.077.045-.155.088-.233.131-.252.137-.258.146-.155.415.114.299.358.529.664.625.269.096.553.134.827.21a.672.672 0 0 1 .236.094c-.066.082-.156.067-.231.082-.36.073-.713.184-1.086.17a1.275 1.275 0 0 1-.438-.064c-.114-.045-.152-.006-.176.109a5.354 5.354 0 0 0-.084.92c-.015.617-.071 1.23-.112 1.844-.042.598-.018.651.558.842.281.094.563.187.842.286.069.024.15.038.192.117-.04.057-.098.035-.146.035-.493.003-.985.005-1.478.001-.524-.005-.806-.282-.845-.803-.055-.762-.12-1.524-.182-2.286a.947.947 0 0 0-.026-.12c-.079.455-.065.879-.084 1.298-.023.528-.008 1.057-.007 1.584 0 .27.086.388.335.483.359.135.711.295 1.114.262.141-.012.276.062.402.129.032.017.073.033.069.073-.004.043-.049.047-.084.045-.657-.019-1.317.065-1.972-.028-.323-.046-.533-.236-.631-.552-.094-.303-.114-.617-.137-.93-.046-.626-.078-1.253-.116-1.88a.222.222 0 0 0-.061-.171.282.282 0 0 0-.031.193c-.002.956-.002 1.911-.001 2.866 0 .388.123.575.494.708.481.172.976.298 1.47.423.11.028.225.047.242.192h-1.852c-.051-.01-.103-.022-.155-.03-.701-.1-1.001-.372-1.143-1.042l-.067-.331-.226-1.103c-.069.12-.118.25-.144.386-.083.399-.151.802-.243 1.2-.113.493-.444.763-.932.857l-.33.063H8.558c.057-.171.216-.185.355-.221.476-.127.96-.223 1.417-.409a.603.603 0 0 0 .397-.521c.058-.435.002-.865-.013-1.296a1.528 1.528 0 0 0-.078-.315.405.405 0 0 0-.071.207c-.026.296-.049.591-.075.886-.038.432-.273.716-.679.81a1.702 1.702 0 0 1-.37.045c-.557.003-1.115-.001-1.673-.005-.048 0-.109.019-.148-.065.178-.103.377-.168.582-.187a5.67 5.67 0 0 0 .939-.193c.42-.114.522-.249.512-.687-.023-.931-.091-1.86-.069-2.791.004-.184.001-.368.001-.551a2.387 2.387 0 0 0-.05.385 40.299 40.299 0 0 1-.186 2.623c-.052.513-.296.748-.804.805-.446.051-.889.002-1.332-.02-.108-.006-.234.012-.339-.064.043-.066.106-.07.16-.087.362-.115.725-.224 1.086-.344.246-.081.35-.235.355-.492a2.241 2.241 0 0 0-.003-.232 45.315 45.315 0 0 1-.105-2.149 5.487 5.487 0 0 0-.035-.478c-.024-.188-.131-.287-.295-.258-.505.092-.99-.006-1.473-.139-.059-.016-.134-.007-.178-.088a.986.986 0 0 1 .285-.09c.255-.052.507-.121.753-.208.312-.112.564-.347.695-.651.089-.203.056-.317-.112-.398-1.418-.683-2.512-1.73-3.391-3.017a8.152 8.152 0 0 1-1.123-2.447c-.067-.246-.156-.3-.383-.26-.306.053-.401.006-.535-.273v-3.49c.144-.303.205-.341.534-.329.235.01.247-.004.309-.242.396-1.508 1.082-2.861 2.171-3.988C6.9 1.42 8.523.631 10.34.203c.456-.108.922-.15 1.387-.203h.854Zm7.974 8.948a7.34 7.34 0 0 0-.048-.938 8.353 8.353 0 0 0-.099-.65c-.598-2.964-2.344-5.02-5.051-6.268-1.553-.715-3.21-.835-4.878-.511-3.248.633-5.396 2.583-6.539 5.652-.436 1.173-.495 2.406-.37 3.65.087.935.339 1.846.745 2.694.585 1.213 1.444 2.207 2.477 3.058.343.286.719.528 1.121.719.235.111.247.105.245-.146.006-.16.003-.32-.009-.48-.125-1.02-.142-2.045-.169-3.069a.392.392 0 0 0-.184-.353c-.385-.268-.713-.592-.921-1.019-.474-.97-.372-2.361.813-3.215.136-.097.217-.19.198-.373a1.724 1.724 0 0 1 .031-.442c.177-1.187.748-2.138 1.722-2.84.68-.492 1.442-.772 2.286-.782.483-.007.953.11 1.414.244 1.609.467 2.846 2.07 2.845 3.697a.64.64 0 0 0 .268.565c.463.371.821.83.943 1.426.22 1.077-.083 1.982-.979 2.634-.266.194-.347.406-.333.698.002.047 0 .095-.002.142l-.062 1.439c-.025.586-.138 1.165-.117 1.754.008.223.006.226.201.128a7.46 7.46 0 0 0 2.393-1.903c1.32-1.577 2.074-3.372 2.059-5.511ZM9.117 12.102c1.489.021 2.443-1.578 1.716-2.879a1.937 1.937 0 0 0-1.699-.991c-1.094-.004-1.954.822-1.958 1.881-.005 1.148.813 1.985 1.941 1.989Zm5.794 0c1.101.002 1.935-.823 1.935-1.917 0-1.091-.846-1.949-1.92-1.947-1.064.003-1.94.866-1.943 1.915-.003 1.105.831 1.948 1.928 1.949Zm-1.472 1.937c-.208.128-.407.277-.63.384-.536.257-1.063.257-1.579-.048-.158-.094-.308-.201-.464-.298-.047-.028-.092-.103-.15-.062-.044.03-.01.1-.001.151.037.179.064.362.082.544.027.565.293.992.742 1.31a.984.984 0 0 0 .791.186c.565-.119 1.025-.614 1.124-1.218.043-.266.005-.544.109-.803a.133.133 0 0 0-.024-.146Zm-8.78-4.92c-.012-1.102.143-2.055.54-2.961.633-1.443 1.642-2.553 2.98-3.374a.378.378 0 0 1 .459.067c.06.06.036.118.01.178a1.09 1.09 0 0 1-.48.51c-1.079.639-1.829 1.571-2.357 2.688a6.325 6.325 0 0 0-.618 2.986c.055 1.309.439 2.516 1.213 3.588.088.104.148.23.173.365.01.08.059.168-.031.228a.312.312 0 0 1-.288.041.502.502 0 0 1-.234-.185c-.72-.979-1.193-2.056-1.331-3.273-.036-.326-.004-.653-.036-.858ZM8.94 2.34a.373.373 0 0 1 .378-.382c.211.001.409.226.416.473.004.138-.309.39-.476.386-.189-.005-.318-.2-.318-.477Zm-.465 7.48a.609.609 0 0 1 .586-.631c.38-.003.671.271.675.633.004.356-.27.622-.639.621-.38-.002-.621-.241-.622-.623Zm6.496.623c-.381-.002-.625-.255-.621-.646a.635.635 0 0 1 .596-.613.656.656 0 0 1 .669.643c.001.354-.275.618-.644.616Z"}}]})(e)}function Da(e){return T({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M5.223 17.905h6.76l1.731 3.047H0l4.815-8.344 2.018-3.494 1.733 3.002zm2.52-10.371L9.408 4.65l9.415 16.301h-3.334zm2.59-4.486h3.33L24 20.952h-3.334z"}}]})(e)}function Ra(e){return T({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M23.5154 13.4558c-.2744-1.8854-.692-3.7828-.9904-5.0477-.358-1.5035-1.6349-2.5775-3.1742-2.673-1.5155-.0955-4.0215-.2028-7.3627-.2028-3.3413 0-5.8472.1074-7.3627.2028-1.5394.0955-2.8163 1.1695-3.1743 2.673-.2983 1.265-.716 3.1623-.9904 5.0477-.191 1.2769-.3341 2.7685-.4535 4.463-.0596.9427.2506 1.8496.8831 2.5537.6324.704 1.4916 1.1217 2.4463 1.1575 2.0763.0955 5.2625.2148 8.6634.2148 3.401 0 6.587-.1193 8.6634-.2148.9427-.0477 1.8139-.4535 2.4463-1.1575.6325-.704.9427-1.611.883-2.5537-.1312-1.6945-.2863-3.198-.4773-4.463zm-1.6467 5.9188c-.3342.37-.7876.5848-1.2888.6086-2.0644.0955-5.2148.2148-8.5918.2148-3.3771 0-6.5274-.1193-8.5919-.2148-.5011-.0239-.9546-.2386-1.2887-.6086-.3342-.3699-.5012-.8472-.4654-1.3484.1074-1.6468.2506-3.1026.4415-4.3317.2625-1.8258.6683-3.6754.9666-4.9045.191-.7995.8592-1.3604 1.6826-1.42C6.2244 7.2745 8.6945 7.167 12 7.167c3.2935 0 5.7756.1074 7.2673.2029.8114.0477 1.4916.6205 1.6825 1.42.2864 1.2291.6921 3.0787.9666 4.9045.179 1.2291.3222 2.685.4415 4.3317 0 .5012-.167.9785-.4892 1.3484zM11.988 4.1958c.5608 0 1.0262-.4535 1.0262-1.0143 0-.561-.4534-1.0263-1.0262-1.0263-.5609 0-1.0263.4535-1.0263 1.0263 0 .5489.4654 1.0143 1.0263 1.0143zm5.9665 7.84c-.9069 0-1.6468.7399-1.6468 1.6468h3.2936c0-.907-.728-1.6468-1.6468-1.6468zm-11.933 0c-.907 0-1.6468.7399-1.6468 1.6468h3.2935c0-.907-.728-1.6468-1.6468-1.6468zm5.9665 5.9665c1.4677 0 2.661-1.1933 2.661-2.661h-5.334c0 1.4558 1.1933 2.661 2.673 2.661z"}}]})(e)}function rt(e){return T({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"}}]})(e)}function Ma(e){return T({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.315c.766.047 1.677.788 1.677.788L24 9.948v9.789h-4.263V24H9.789l-9-9C.303 14.5 0 13.795 0 13.105c0-.319.18-.818.316-1.105l3.789-7.895zm.679.679v11.787c.002.543.021 1.024.498 1.508L10.204 23h8.533v-4.263L4.784 4.784zm12.055-.678c-.899-.896-1.809-1.78-2.74-2.643-.302-.267-.567-.468-1.07-.462-.37.014-.87.195-.87.195L6.341 4.105l10.498.001z"}}]})(e)}function za(e){return T({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z"}}]})(e)}function Pa(e){return T({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M22.695 4.297a3.807 3.807 0 0 0-5.29-.09.368.368 0 0 0 0 .533l.46.47a.363.363 0 0 0 .474.032 2.182 2.182 0 0 1 2.86 3.291c-3.023 3.02-7.056-5.447-16.211-1.083a1.24 1.24 0 0 0-.534 1.745l1.571 2.713a1.238 1.238 0 0 0 1.681.461l.037-.02-.029.02.688-.384a16.083 16.083 0 0 0 2.193-1.635.384.384 0 0 1 .499-.016.357.357 0 0 1 .016.534 16.435 16.435 0 0 1-2.316 1.741H8.77l-.696.39a1.958 1.958 0 0 1-.963.25 1.987 1.987 0 0 1-1.726-.989L3.9 9.696C1.06 11.72-.686 15.603.26 20.522a.363.363 0 0 0 .354.296h1.675a.363.363 0 0 0 .37-.331 2.478 2.478 0 0 1 4.915 0 .36.36 0 0 0 .357.317h1.638a.363.363 0 0 0 .357-.317 2.478 2.478 0 0 1 4.914 0 .363.363 0 0 0 .358.317h1.627a.363.363 0 0 0 .363-.357c.037-2.294.656-4.93 2.42-6.25 6.108-4.57 4.502-8.486 3.088-9.9zm-6.229 6.901l-1.165-.584a.73.73 0 1 1 1.165.587z"}}]})(e)}function Va(e){return T({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M12.002 0a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.54 4.931a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm0 9.862a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm-8.54 4.931a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.276zm-8.542-4.93a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.277zm0-9.863a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.542-3.378L2.953 6.777v10.448l9.049 5.224 9.047-5.224V6.777zm0 1.601 7.66 13.27H4.34zm-1.387.371L3.97 15.037V7.363zm2.774 0 6.646 3.838v7.674zM5.355 17.44h13.293l-6.646 3.836z"}}]})(e)}function Fa(e){return T({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"}}]})(e)}function Ba(e){return T({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M12.135.003a2.577 2.577 0 0 0-1.42.344L2.55 5.06a2.577 2.577 0 0 0-.953.967l3.957 2.17a1.765 1.765 0 0 1 .603-.588l4.951-2.86a1.761 1.761 0 0 1 1.76 0l4.951 2.86a1.753 1.753 0 0 1 .526.46l3.921-2.265a2.577 2.577 0 0 0-.816-.744L13.291.347a2.577 2.577 0 0 0-1.152-.34Zm-.145 4.912a1.36 1.36 0 0 0-.68.182L6.36 7.953a1.345 1.345 0 0 0-.454.435l1.92 1.055a1.05 1.05 0 0 1 .31-.275l3.34-1.928a1.054 1.054 0 0 1 1.051 0l3.336 1.928a1.066 1.066 0 0 1 .238.199l.018-.01-.002-.002 1.877-1.08a1.353 1.353 0 0 0-.373-.322l-4.95-2.86a1.357 1.357 0 0 0-.68-.178Zm10.432 1.149-3.92 2.26a1.757 1.757 0 0 1 .2.812v5.715c0 .627-.332 1.21-.88 1.528l-4.95 2.86a1.761 1.761 0 0 1-.64.214v4.524a2.577 2.577 0 0 0 1.059-.313l8.162-4.713a2.577 2.577 0 0 0 1.289-2.23V7.297a2.577 2.577 0 0 0-.318-1.228Zm-20.937.238a2.577 2.577 0 0 0-.227.99v9.43c0 .918.491 1.767 1.293 2.229l8.162 4.713a2.57 2.57 0 0 0 1.225.336v-4.531a1.761 1.761 0 0 1-.833-.235L6.156 16.38a1.765 1.765 0 0 1-.877-1.528V9.136a1.776 1.776 0 0 1 .131-.676Zm16.67 2.223-1.89 1.092a1.058 1.058 0 0 1 .124.46v3.856c0 .378-.2.72-.526.907l-3.336 1.93a1.04 1.04 0 0 1-.295.107v2.17c.152-.027.304-.078.44-.157l4.949-2.859a1.36 1.36 0 0 0 .68-1.18V9.136a1.36 1.36 0 0 0-.147-.607Zm-12.387.13a1.36 1.36 0 0 0-.088.481v5.715a1.36 1.36 0 0 0 .68 1.18l4.95 2.86c.194.112.412.166.627.177v-2.174a1.054 1.054 0 0 1-.46-.123L8.14 14.843a1.054 1.054 0 0 1-.532-.908v-3.853a.99.99 0 0 1 .077-.38l-.034-.013z"}}]})(e)}function xn(e){return T({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M1.525 5.87c-2.126 3.054-1.862 7.026-.237 10.269.037.079.078.154.118.229.023.052.049.1.077.15.013.027.031.056.047.082.026.052.054.102.081.152l.157.266c.03.049.057.097.09.146.056.094.12.187.178.281.026.04.05.078.079.117a6.368 6.368 0 00.31.445c.078.107.156.211.24.315.027.038.058.076.086.115l.22.269c.028.03.055.067.084.099.098.118.202.233.306.35l.005.006a3.134 3.134 0 00.425.44c.08.083.16.165.245.245l.101.097c.111.105.223.209.34.309.002 0 .003.002.005.003l.057.05c.102.089.205.178.31.26l.125.105c.085.068.174.133.26.2l.137.105c.093.07.192.139.287.207.035.025.07.05.106.073l.03.023.28.185.12.08c.148.094.294.184.44.272.041.02.084.044.123.068.108.062.22.125.329.183.06.034.122.063.184.094.075.042.153.083.234.125a.324.324 0 01.056.023c.033.015.064.031.096.047.12.06.245.118.375.175.024.01.05.02.076.034.144.063.289.123.438.182.034.01.07.027.105.04.135.051.274.103.411.152l.05.018c.154.052.305.102.46.15.036.01.073.023.111.033.16.048.314.105.474.137 10.273 1.872 13.258-6.177 13.258-6.177-2.508 3.266-6.958 4.127-11.174 3.169-.156-.036-.312-.086-.47-.132a13.539 13.539 0 01-.567-.182l-.062-.024c-.136-.046-.267-.097-.4-.148a1.615 1.615 0 00-.11-.04c-.148-.06-.29-.121-.433-.184-.031-.01-.057-.024-.088-.036a23.44 23.44 0 01-.362-.17 1.485 1.485 0 01-.106-.052c-.094-.044-.188-.095-.28-.143a3.947 3.947 0 01-.187-.096c-.114-.06-.227-.125-.34-.187-.034-.024-.073-.044-.112-.066a15.922 15.922 0 01-.439-.27 2.107 2.107 0 01-.118-.078 6.01 6.01 0 01-.312-.207c-.035-.023-.067-.048-.103-.073a9.553 9.553 0 01-.295-.212c-.042-.034-.087-.066-.132-.1-.088-.07-.177-.135-.265-.208l-.118-.095a10.593 10.593 0 01-.335-.28.258.258 0 00-.037-.031l-.347-.316-.1-.094c-.082-.084-.166-.164-.25-.246l-.098-.1a9.081 9.081 0 01-.309-.323l-.015-.016c-.106-.116-.21-.235-.313-.355-.027-.03-.053-.064-.08-.097l-.227-.277a21.275 21.275 0 01-.34-.449C2.152 11.79 1.306 7.384 3.177 3.771m4.943-.473c-1.54 2.211-1.454 5.169-.254 7.508a9.111 9.111 0 00.678 1.133c.23.33.484.721.793.988.107.122.223.24.344.36l.09.09c.114.11.232.217.35.325l.016.013a9.867 9.867 0 00.414.342c.034.023.063.05.096.073.14.108.282.212.428.316l.015.009c.062.045.128.086.198.13.028.018.06.042.09.06.106.068.21.132.318.197.017.007.032.016.048.023.09.055.188.108.282.157.033.02.065.035.1.054.066.033.132.068.197.102l.032.014c.135.067.273.129.408.19.034.014.063.025.092.039.111.048.224.094.336.137.05.017.097.037.144.052.102.038.21.073.31.108l.14.045c.147.045.295.104.449.13C22.164 17.206 24 11.098 24 11.098c-1.653 2.38-4.852 3.513-8.261 2.628a8.04 8.04 0 01-.449-.13c-.048-.014-.09-.029-.136-.043-.104-.036-.211-.07-.312-.109l-.144-.054c-.113-.045-.227-.087-.336-.135-.034-.015-.065-.025-.091-.04-.14-.063-.281-.125-.418-.192l-.206-.107-.119-.06a5.673 5.673 0 01-.265-.15.62.62 0 01-.062-.035c-.106-.066-.217-.13-.318-.198-.034-.019-.065-.042-.097-.062l-.208-.136c-.144-.1-.285-.208-.428-.313-.032-.029-.063-.053-.094-.079-1.499-1.178-2.681-2.79-3.242-4.613-.59-1.897-.46-4.023.56-5.75m4.292-.147c-.909 1.334-.996 2.99-.37 4.46.665 1.563 2.024 2.79 3.608 3.37.065.025.128.046.196.07l.088.027c.092.03.185.063.28.084 4.381.845 5.567-2.25 5.886-2.704-1.043 1.498-2.792 1.857-4.938 1.335a4.85 4.85 0 01-.516-.16 6.352 6.352 0 01-.618-.254 6.53 6.53 0 01-1.082-.66c-1.922-1.457-3.113-4.236-1.859-6.5"}}]})(e)}function qa(e){return T({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M24 24H0V0h24L12 12Z"}}]})(e)}function Ha(e){return T({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M12 0C5.377 0 0 5.377 0 12s5.377 12 12 12 12-5.377 12-12S18.623 0 12 0zm0 .75c2.871 0 5.482 1.082 7.469 2.85H4.53A11.197 11.197 0 0 1 12 .75zm-7.186 3.6h14.372L12 18.723 4.814 4.35zM3.6 4.53V19.47A11.197 11.197 0 0 1 .75 12c0-2.87 1.082-5.481 2.85-7.468zm16.8 0A11.197 11.197 0 0 1 23.25 12c0 2.871-1.082 5.482-2.85 7.469V4.53zM4.35 5.1l7.275 14.55H4.35V5.1zm15.3 0v14.55h-7.275L19.651 5.1zM4.533 20.4H19.469A11.197 11.197 0 0 1 12 23.25a11.197 11.197 0 0 1-7.468-2.85z"}}]})(e)}function Ua(e){return T({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"}}]})(e)}function Ga(e){return T({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"}}]})(e)}function Ya(e){return T({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z"}}]})(e)}function Za(e){return T({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z"}}]})(e)}function Ja(e){return T({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M.741 19.365h8.36s-1.598-7.291 3.693-10.243l.134-.066c1.286-.637 4.907-2.431 10.702 1.854.19-.159.37-.286.37-.286s-5.503-5.492-11.63-4.878c-3.079.275-6.867 3.079-9.09 6.783C1.058 16.233.741 19.365.741 19.365Zm8.804-.783a10.682 10.682 0 0 1-.127-1.333l1.143.412c.063.498.159.963.254 1.376l-1.27-.455Zm-7.799-4.317L.529 13.82c-.201.455-.423.984-.529 1.27l1.217.444c.137-.359.36-.878.529-1.269Zm7.831.296.857.677c.042-.413.116-.825.222-1.238l-.762-.603c-.137.391-.233.783-.317 1.164Zm2.042-2.646-.508-.762c.191-.243.413-.486.656-.709l.476.72a5.958 5.958 0 0 0-.624.751ZM4.19 8.878l.752.656c-.254.265-.498.551-.72.836l-.815-.698c.244-.265.508-.529.783-.794Zm9.799 1.027-.243-.73c.265-.117.571-.233.931-.339l.233.698a6.82 6.82 0 0 0-.921.371Zm3.122-.656.042-.667c.339.021.688.064 1.048.138l-.042.656a5.859 5.859 0 0 0-1.048-.127ZM8.942 6.392l-.476-.731c-.265.138-.54.286-.826.455l.487.741c.275-.169.54-.328.815-.465Zm9.217-.053.042-.709c-.095-.053-.36-.18-1.026-.371l-.043.699c.349.116.688.243 1.027.381ZM13.238 5.28h.106l-.212-.645c-.328 0-.666.021-1.016.063l.201.625a8.87 8.87 0 0 1 .921-.043Z"}}]})(e)}function Wa(e){return T({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M1.44 0v7.575l6.561 3.79V3.787zm21.12 4.227l-6.561 3.791v7.574l6.56-3.787zM8.72 4.23v7.575l6.561 3.787V8.018zm0 8.405v7.575L15.28 24v-7.578z"}}]})(e)}function Xa(e){return T({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"}}]})(e)}function vn(e){return T({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M23,1 C23,1 16.471872,0.541707069 14,3 C13.9767216,3.03685748 10,7 10,7 L5,8 L2,10 L10,14 L14,22 L16,19 L17,14 C17,14 20.9631426,10.0232786 21,10 C23.4582929,7.5281282 23,1 23,1 Z M17,8 C16.4475,8 16,7.5525 16,7 C16,6.4475 16.4475,6 17,6 C17.5525,6 18,6.4475 18,7 C18,7.5525 17.5525,8 17,8 Z M7,17 C6,16 4,16 3,17 C2,18 2,22 2,22 C2,22 6,22 7,21 C8,20 8,18 7,17 Z"}}]})(e)}function Qa(e){return T({attr:{fill:"none",viewBox:"0 0 24 24"},child:[{tag:"g",attr:{clipPath:"url(#a)"},child:[{tag:"path",attr:{d:"M14.27 13.385h-.268c-.21.129-.302.373-.21.582l1.002 2.457a5.15 5.15 0 0 0 2.084-2.62l-2.596-.419h-.012Zm-4.016.338a.483.483 0 0 0-.443-.338h-.093l-2.584.431a5.143 5.143 0 0 0 2.084 2.596l.99-2.41v-.035c.046-.058.046-.162.046-.244Zm2.13.943a.44.44 0 0 0-.594-.175c-.081.059-.14.094-.174.175h-.012l-1.269 2.293a5.195 5.195 0 0 0 2.83.14c.162-.035.337-.081.5-.14l-1.27-2.293h-.01Zm4.017-5.32-1.956 1.711.011.035a.43.43 0 0 0-.046.617c.058.07.128.116.21.14l.011.011 2.526.722c.082-1.13-.163-2.27-.756-3.236Zm-3.621.186c.012.244.21.43.454.419a.54.54 0 0 0 .245-.058h.011l2.13-1.525a5.182 5.182 0 0 0-2.991-1.444l.151 2.608Zm-2.258.36a.442.442 0 0 0 .605-.104.45.45 0 0 0 .093-.244h.012l.14-2.62c-.175.023-.35.058-.536.093a5.064 5.064 0 0 0-2.468 1.35l2.142 1.526h.011ZM9.368 11.86a.426.426 0 0 0 .303-.535c0-.093-.059-.163-.128-.221v-.012L7.588 9.31a5.194 5.194 0 0 0-.734 3.283l2.515-.722v-.012Zm1.91.769.721.349.722-.35.174-.78-.5-.616h-.804l-.5.617.186.78Zm12.677 1.536-2.06-8.929a1.588 1.588 0 0 0-.862-1.094L12.687.148a1.69 1.69 0 0 0-1.385 0L2.966 4.142c-.431.21-.757.605-.862 1.094l-2.06 8.93a1.373 1.373 0 0 0 0 .686c.011.07.035.14.058.21.035.105.093.221.151.314.035.047.058.093.105.128L6.121 22.7c.023 0 .058.047.058.07.116.105.221.186.326.256.14.093.303.163.466.198.128.058.267.058.372.058h9.454c.081 0 .162-.035.232-.058.059-.012.117-.035.163-.047.047-.023.082-.035.128-.058.059-.023.117-.058.175-.093.14-.093.268-.21.384-.326l.175-.233 5.588-6.962c.116-.14.198-.29.256-.442a1.4 1.4 0 0 0 .058-.21 1.37 1.37 0 0 0 0-.687Zm-8.65 3.481c.024.07.047.14.082.198a.392.392 0 0 0-.035.303c.14.28.268.536.442.792.093.128.187.267.28.395 0 .035.035.094.046.14a.5.5 0 0 1-.174.687.495.495 0 0 1-.687-.175c-.012-.035-.024-.058-.035-.093-.023-.035-.047-.105-.07-.105a5.205 5.205 0 0 1-.14-.477c-.104-.29-.198-.57-.349-.838a.437.437 0 0 0-.245-.163l-.093-.186a6.517 6.517 0 0 1-4.621-.012l-.117.21a.394.394 0 0 0-.221.104c-.163.28-.28.57-.384.897a4.155 4.155 0 0 1-.14.465c-.023 0-.047.082-.07.117a.501.501 0 0 1-.943-.338c.012-.035.035-.058.047-.093.046-.035.046-.093.046-.128.105-.14.187-.268.28-.407.186-.245.337-.524.454-.804a.628.628 0 0 0-.035-.29l.081-.21a6.532 6.532 0 0 1-2.875-3.598l-.233.035a.451.451 0 0 0-.268-.104 6.044 6.044 0 0 0-.896.256c-.128.07-.28.128-.431.174a1.01 1.01 0 0 1-.151.035.51.51 0 0 1-.63-.314.504.504 0 0 1 .327-.64c.023 0 .058-.012.093-.012v-.012h.012l.128-.023c.163-.047.326-.047.477-.047.303 0 .605-.07.896-.14a.67.67 0 0 0 .222-.22l.22-.059a6.35 6.35 0 0 1 1.002-4.505l-.163-.14a.51.51 0 0 0-.093-.29 4.765 4.765 0 0 0-.745-.525c-.14-.07-.28-.151-.42-.244-.022-.024-.07-.059-.092-.082l-.012-.011c-.233-.187-.291-.49-.128-.734a.528.528 0 0 1 .407-.175.655.655 0 0 1 .35.14l.104.082c.117.104.222.233.326.349.21.221.431.43.676.605a.45.45 0 0 0 .302.035l.175.128a6.398 6.398 0 0 1 3.26-1.862c.29-.07.605-.117.908-.14l.011-.21a.524.524 0 0 0 .163-.267 4.583 4.583 0 0 0-.058-.897 3.14 3.14 0 0 1-.07-.477v-.14a.517.517 0 0 1 .454-.559.497.497 0 0 1 .548.443v.256a3.14 3.14 0 0 1-.07.477c-.047.291-.07.594-.058.897a.397.397 0 0 0 .163.256l.011.22A6.49 6.49 0 0 1 16.692 7.6l.186-.14a.45.45 0 0 0 .303-.034 4.18 4.18 0 0 0 .675-.606c.105-.116.21-.233.326-.349.035-.023.081-.07.116-.07.198-.21.513-.21.687 0 .221.186.21.5 0 .699 0 .023-.035.046-.07.07a2.907 2.907 0 0 1-.512.326 4.274 4.274 0 0 0-.745.523.357.357 0 0 0-.093.28l-.186.163a6.333 6.333 0 0 1 1.024 4.494l.221.058a.483.483 0 0 0 .222.21c.29.08.593.127.896.162h.477c.035.035.093.047.14.059a.5.5 0 0 1 .43.57c-.058.268-.279.466-.558.43-.035-.01-.082-.01-.082-.023v-.011a.605.605 0 0 1-.163-.023 2.27 2.27 0 0 1-.419-.175 4.101 4.101 0 0 0-.896-.245c-.105 0-.198 0-.268.094a8.755 8.755 0 0 1-.221-.035c-.477 1.525-1.525 2.805-2.876 3.62Z"}}]},{tag:"defs",attr:{},child:[{tag:"clipPath",attr:{id:"a"},child:[{tag:"path",attr:{d:"M0 0h24v24H0z"}}]}]}]})(e)}const Ka={ReactJS:c.jsx(te,{}),NodeJS:c.jsx(Ue,{}),TypeScript:c.jsx(Xa,{}),AWS:c.jsx(Te,{}),Git:c.jsx(ki,{}),PHP:c.jsx(Ya,{}),PostgreSQL:c.jsx(Za,{}),MongoDB:c.jsx(Ua,{}),"Ruby On Rails":c.jsx(Ja,{}),"Material UI":c.jsx(Ha,{}),HTML5:c.jsx(Fa,{}),CSS3:c.jsx(rt,{}),jQuery:c.jsx(xn,{}),"AWS-ECS":c.jsx(Da,{}),Dart:c.jsx(Ma,{}),Cognito:c.jsx(Te,{}),Lambda:c.jsx(Te,{}),ECS:c.jsx(Te,{}),Android:c.jsx(wi,{}),Kotlin:c.jsx(qa,{}),"Jetpack Compose":c.jsx(Ba,{}),Room:c.jsx(Yt,{}),Database:c.jsx(Yt,{}),Bitrise:c.jsx(Ra,{}),Laravel:c.jsx(Ii,{}),Jenkins:c.jsx(Ni,{}),Docker:c.jsx(Ti,{}),GraphQL:c.jsx(Va,{}),"CI/CD":c.jsx(Gt,{}),GitLab:c.jsx(Gt,{}),GitHub:c.jsx(Tt,{}),Heroku:c.jsx(vn,{}),Netlify:c.jsx(vn,{}),Firebase:c.jsx(za,{}),GCP:c.jsx(Si,{}),Azure:c.jsx(Ci,{}),Kubernetes:c.jsx(Qa,{}),Terraform:c.jsx(Wa,{}),ArgoCD:c.jsx(ja,{}),Java:c.jsx(ee,{}),"Spring Boot":c.jsx(ee,{}),Python:c.jsx(Ai,{}),"Node.js":c.jsx(Ue,{}),"Express.js":c.jsx(Ue,{}),Hibernate:c.jsx(ee,{}),Maven:c.jsx(ee,{}),Gradle:c.jsx(Pa,{}),JUnit:c.jsx(ee,{}),Mockito:c.jsx(ee,{}),Jest:c.jsx(te,{}),React:c.jsx(te,{}),Angular:c.jsx(Ei,{}),"Vue.js":c.jsx(Ge,{}),"Next.js":c.jsx(te,{}),Gatsby:c.jsx(te,{}),"Nuxt.js":c.jsx(Ge,{}),Redux:c.jsx(te,{}),Vuex:c.jsx(Ge,{}),"Tailwind CSS":c.jsx(rt,{}),Bootstrap:c.jsx(rt,{}),JQuery:c.jsx(xn,{}),MySQL:c.jsx(Ga,{})},e0=S.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  color: ${s.colors.textLight};
  padding: ${s.spacing.lg} ${s.spacing.md};

  @media (min-width: ${s.breakpoints.md}) {
    padding: ${s.spacing.xl} ${s.spacing.lg};
  }
`,t0=S(P.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: ${s.spacing.xl};
  color: ${s.colors.light};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -${s.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${s.colors.light};
    border-radius: 2px;
  }
`,n0=S.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${s.spacing.lg};
  width: 100%;
  max-width: 1200px;
  margin-top: ${s.spacing.xl};

  @media (min-width: ${s.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${s.spacing.xl};
  }
`,r0=S(P.div)`
  background: ${s.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: ${s.spacing.lg};
  transition: all ${s.transitions.default};
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  width: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(246, 177, 122, 0.15);
  }
`,i0=S.h3`
  font-size: clamp(1.5rem, 3vw, 1.75rem);
  margin-bottom: ${s.spacing.xl};
  color: ${s.colors.light};
  display: flex;
  align-items: center;
  gap: ${s.spacing.sm};
  font-weight: 600;
  position: relative;
  padding-bottom: ${s.spacing.md};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: ${s.colors.accent};
    border-radius: 2px;
  }

  svg {
    font-size: clamp(1.75rem, 3vw, 2rem);
    color: ${s.colors.accent};
  }
`,a0=S.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${s.spacing.md};
  flex: 1;
  width: 100%;
`,s0=S(P.div)`
  display: flex;
  align-items: center;
  gap: ${s.spacing.sm};
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  padding: ${s.spacing.md};
  border-radius: 12px;
  transition: all ${s.transitions.default};
  background: ${s.colors.glass.card};

  svg {
    font-size: clamp(1.1rem, 2vw, 1.5rem);
    color: ${s.colors.accent};
    transition: all ${s.transitions.default};
  }

  &:hover {
    background: ${s.colors.gradient.glass};
    transform: translateX(5px);
    box-shadow: 0 4px 12px rgba(246, 177, 122, 0.2);

    svg {
      transform: scale(1.1) rotate(5deg);
      color: ${s.colors.light};
    }
  }
`,o0=()=>{const[e,t]=O.useState([]);O.useEffect(()=>{async function r(){const a=await La();t(a)}r()},[]);const n={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},i={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};return c.jsxs(e0,{id:"skills",role:"region","aria-label":"Skills and Expertise",children:[c.jsx(t0,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},role:"heading","aria-level":2,children:"Skills & Expertise"}),c.jsx(P.div,{variants:n,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:c.jsx(n0,{role:"list",children:e.map((r,a)=>c.jsxs(r0,{variants:i,role:"listitem","aria-labelledby":`category-title-${a}`,children:[c.jsx(i0,{id:`category-title-${a}`,children:r.title}),c.jsx(a0,{role:"list","aria-label":`${r.title} skills`,children:r.skills.map((o,l)=>c.jsxs(s0,{variants:i,role:"listitem",children:[c.jsx("span",{"aria-hidden":"true",children:Ka[o.icon]||c.jsx(Li,{})}),c.jsx("span",{children:o.name}),c.jsx("span",{className:"sr-only",children:`${o.name} - ${r.title} skill`})]},l))})]},a))})})]})},c0=S.section`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${s.colors.textLight};
  padding: ${s.spacing.lg} 0;

  @media (min-width: ${s.breakpoints.md}) {
    padding: ${s.spacing.xl} 0;
  }

  .container {
    position: relative;
    z-index: 2;
    width: 95%;
    margin: 0 auto;

    @media (min-width: ${s.breakpoints.sm}) {
      width: 90%;
    }
  }
`,l0=S(P.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: ${s.spacing.lg};
  color: ${s.colors.light};
  position: relative;

  @media (min-width: ${s.breakpoints.md}) {
    margin-bottom: ${s.spacing.xl};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -${s.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${s.colors.accent};
    border-radius: 2px;
  }
`,d0=S.div`
  max-width: 600px;
  margin: ${s.spacing.lg} auto;
  text-align: center;
  background: ${s.colors.glass.background};
  backdrop-filter: blur(8px);
  padding: ${s.spacing.lg};
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(246, 177, 122, 0.15);

  @media (min-width: ${s.breakpoints.md}) {
    margin: ${s.spacing.xl} auto;
    padding: ${s.spacing.xl};
  }
`,u0=S(P.p)`
  font-size: clamp(1rem, 2vw, 1.3rem);
  margin-bottom: ${s.spacing.lg};
  color: ${s.colors.textLight};
  line-height: 1.8;
  opacity: 0.9;

  @media (min-width: ${s.breakpoints.md}) {
    margin-bottom: ${s.spacing.xl};
  }
`,h0=S(P.a)`
  display: inline-flex;
  align-items: center;
  gap: ${s.spacing.sm};
  font-size: clamp(0.9rem, 2vw, 1.3rem);
  color: ${s.colors.accent};
  margin-bottom: ${s.spacing.lg};
  padding: ${s.spacing.sm} ${s.spacing.lg};
  border-radius: 30px;
  transition: all ${s.transitions.default};
  font-weight: 500;
  background: ${s.colors.glass.card};
  border: 1px solid ${s.colors.accent};
  word-break: break-all;

  @media (min-width: ${s.breakpoints.sm}) {
    word-break: normal;
    padding: ${s.spacing.md} ${s.spacing.lg};
  }

  svg {
    font-size: 1.2em;
    flex-shrink: 0;

    @media (min-width: ${s.breakpoints.md}) {
      font-size: 1.4em;
    }
  }

  &:hover {
    background: ${s.colors.gradient.accent};
    color: ${s.colors.textDark};
    transform: translateY(-3px);
    box-shadow: 0 6px 16px ${s.colors.overlay.dark};
  }
`,p0=S(P.div)`
  display: flex;
  justify-content: center;
  gap: ${s.spacing.md};
  margin-top: ${s.spacing.lg};

  @media (min-width: ${s.breakpoints.md}) {
    gap: ${s.spacing.lg};
    margin-top: ${s.spacing.xl};
  }
`,it=S(P.a)`
  color: ${s.colors.accent};
  font-size: 1.6rem;
  transition: all ${s.transitions.default};
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${s.colors.glass.card};
  box-shadow: 0 4px 12px rgba(246, 177, 122, 0.1);

  @media (min-width: ${s.breakpoints.md}) {
    width: 60px;
    height: 60px;
    font-size: 2rem;
  }

  &:hover {
    color: ${s.colors.light};
    transform: translateY(-3px) rotate(8deg);
    box-shadow: 0 6px 16px rgba(246, 177, 122, 0.2);
    background: ${s.colors.gradient.glass};
  }
`,f0=()=>{const e={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},t={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};return c.jsx(c0,{id:"contact",role:"region","aria-label":"Contact Information",children:c.jsx("div",{className:"container",children:c.jsxs(P.div,{variants:e,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:[c.jsx(l0,{variants:t,role:"heading","aria-level":2,children:"Get In Touch"}),c.jsxs(d0,{role:"article",children:[c.jsx(u0,{variants:t,role:"paragraph",children:"I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!"}),c.jsxs(h0,{href:"mailto:phyolinmg@dev.gmail.com",variants:t,whileHover:{scale:1.05},whileTap:{scale:.95},"aria-label":"Send me an email at phyolinmg@dev.gmail.com",children:[c.jsx(Dn,{"aria-hidden":"true"}),c.jsx("span",{children:"phyolinmg@dev.gmail.com"})]}),c.jsxs(p0,{variants:t,role:"list","aria-label":"Social media links",children:[c.jsxs(it,{href:"https://github.com/PhyoLinMg",target:"_blank",rel:"noopener noreferrer",whileHover:{y:-5},role:"listitem","aria-label":"Visit my GitHub profile",children:[c.jsx(Tt,{"aria-hidden":"true"}),c.jsx("span",{className:"sr-only",children:"GitHub"})]}),c.jsxs(it,{href:"https://linkedin.com/phyolinmg1998/",target:"_blank",rel:"noopener noreferrer",whileHover:{y:-5},role:"listitem","aria-label":"Connect with me on LinkedIn",children:[c.jsx(jn,{"aria-hidden":"true"}),c.jsx("span",{className:"sr-only",children:"LinkedIn"})]}),c.jsxs(it,{href:"https://medium.com/@linmgdev",target:"_blank",rel:"noopener noreferrer",whileHover:{y:-5},role:"listitem","aria-label":"Follow me on Twitter",children:[c.jsx(Oi,{"aria-hidden":"true"}),c.jsx("span",{className:"sr-only",children:"Medium"})]})]})]})]})})})};function m0(){return c.jsxs(Yr,{theme:s,children:[c.jsx(Bi,{}),c.jsxs(bi,{children:[c.jsx(Vi,{}),c.jsx(la,{}),c.jsx(_a,{}),c.jsx(o0,{}),c.jsx(f0,{})]})]})}ar.createRoot(document.getElementById("root")).render(c.jsx(O.StrictMode,{children:c.jsx(m0,{})}));
//# sourceMappingURL=index-BoTexB1o.js.map
