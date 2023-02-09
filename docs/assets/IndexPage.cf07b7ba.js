import{c as B,h as z,a as ve}from"./render.0597ea01.js";import{c as g,h as f,g as L,r as R,E as fe,F as ne,a as ae,T as he,w as $,o as be,b as G,G as _e,H as pe,I as ye,e as T,d as X,f as we,j as ke,_ as xe,t as Ie,u as qe,v as E,y as k,B as t,x as N,z as Se,A as Ae}from"./index.e96e2b5a.js";import{u as M,a as Be,v as Ce,Q as Z}from"./QIcon.952baa42.js";import{_ as Te}from"./dragon.efe091d4.js";var ze=B({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:r}){const s=g(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>f(e.tag,{class:s.value},z(r.default))}});const V={dark:{type:Boolean,default:null}};function F(e,r){return g(()=>e.dark===null?r.dark.isActive:e.dark)}var Le=B({name:"QCard",props:{...V,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:r}){const{proxy:{$q:s}}=L(),i=F(e,s),h=g(()=>"q-card"+(i.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>f(e.tag,{class:h.value},z(r.default))}}),$e=B({name:"QItem",props:{...V,...M,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:r,emit:s}){const{proxy:{$q:i}}=L(),h=F(e,i),{hasLink:m,linkAttrs:p,linkClass:u,linkTag:d,navigateOnClick:I}=Be(),v=R(null),b=R(null),w=g(()=>e.clickable===!0||m.value===!0||e.tag==="label"),q=g(()=>e.disable!==!0&&w.value===!0),S=g(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(h.value===!0?" q-item--dark":"")+(m.value===!0&&e.active===null?u.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(q.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),l=g(()=>{if(e.insetLevel===void 0)return null;const c=i.lang.rtl===!0?"Right":"Left";return{["padding"+c]:16+e.insetLevel*56+"px"}});function y(c){q.value===!0&&(b.value!==null&&(c.qKeyEvent!==!0&&document.activeElement===v.value?b.value.focus():document.activeElement===b.value&&v.value.focus()),I(c))}function x(c){if(q.value===!0&&fe(c,13)===!0){ne(c),c.qKeyEvent=!0;const j=new MouseEvent("click",c);j.qKeyEvent=!0,v.value.dispatchEvent(j)}s("keyup",c)}function a(){const c=ve(r.default,[]);return q.value===!0&&c.unshift(f("div",{class:"q-focus-helper",tabindex:-1,ref:b})),c}return()=>{const c={ref:v,class:S.value,style:l.value,role:"listitem",onClick:y,onKeyup:x};return q.value===!0?(c.tabindex=e.tabindex||"0",Object.assign(c,p.value)):w.value===!0&&(c["aria-disabled"]="true"),f(d.value,c,a())}}}),D=B({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:r}){const s=g(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>f("div",{class:s.value},z(r.default))}}),Y=B({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:r}){const s=g(()=>parseInt(e.lines,10)),i=g(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(s.value===1?" ellipsis":"")),h=g(()=>e.lines!==void 0&&s.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":s.value}:null);return()=>f("div",{style:h.value,class:i.value},z(r.default))}}),je=B({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:r,emit:s}){let i=!1,h,m,p,u,d,I;function v(){h&&h(),h=null,i=!1,clearTimeout(p),clearTimeout(u),m!==void 0&&m.removeEventListener("transitionend",d),d=null}function b(l,y,x){l.style.overflowY="hidden",y!==void 0&&(l.style.height=`${y}px`),l.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,i=!0,h=x}function w(l,y){l.style.overflowY=null,l.style.height=null,l.style.transition=null,v(),y!==I&&s(y)}function q(l,y){let x=0;m=l,i===!0?(v(),x=l.offsetHeight===l.scrollHeight?0:void 0):I="hide",b(l,x,y),p=setTimeout(()=>{l.style.height=`${l.scrollHeight}px`,d=a=>{(Object(a)!==a||a.target===l)&&w(l,"show")},l.addEventListener("transitionend",d),u=setTimeout(d,e.duration*1.1)},100)}function S(l,y){let x;m=l,i===!0?v():(I="show",x=l.scrollHeight),b(l,x,y),p=setTimeout(()=>{l.style.height=0,d=a=>{(Object(a)!==a||a.target===l)&&w(l,"hide")},l.addEventListener("transitionend",d),u=setTimeout(d,e.duration*1.1)},100)}return ae(()=>{i===!0&&v()}),()=>f(he,{css:!1,appear:e.appear,onEnter:q,onLeave:S},r.default)}});const Qe={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},H={xs:2,sm:4,md:8,lg:16,xl:24};var J=B({name:"QSeparator",props:{...V,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const r=L(),s=F(e,r.proxy.$q),i=g(()=>e.vertical===!0?"vertical":"horizontal"),h=g(()=>` q-separator--${i.value}`),m=g(()=>e.inset!==!1?`${h.value}-${Qe[e.inset]}`:""),p=g(()=>`q-separator${h.value}${m.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(s.value===!0?" q-separator--dark":"")),u=g(()=>{const d={};if(e.size!==void 0&&(d[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const I=e.spaced===!0?`${H.md}px`:e.spaced in H?`${H[e.spaced]}px`:e.spaced,v=e.vertical===!0?["Left","Right"]:["Top","Bottom"];d[`margin${v[0]}`]=d[`margin${v[1]}`]=I}return d});return()=>f("hr",{class:p.value,style:u.value,"aria-orientation":i.value})}});const Ee={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Pe=["before-show","show","before-hide","hide"];function Re({showing:e,canShow:r,hideOnRouteChange:s,handleShow:i,handleHide:h,processOnMount:m}){const p=L(),{props:u,emit:d,proxy:I}=p;let v;function b(a){e.value===!0?S(a):w(a)}function w(a){if(u.disable===!0||a!==void 0&&a.qAnchorHandled===!0||r!==void 0&&r(a)!==!0)return;const c=u["onUpdate:modelValue"]!==void 0;c===!0&&(d("update:modelValue",!0),v=a,G(()=>{v===a&&(v=void 0)})),(u.modelValue===null||c===!1)&&q(a)}function q(a){e.value!==!0&&(e.value=!0,d("before-show",a),i!==void 0?i(a):d("show",a))}function S(a){if(u.disable===!0)return;const c=u["onUpdate:modelValue"]!==void 0;c===!0&&(d("update:modelValue",!1),v=a,G(()=>{v===a&&(v=void 0)})),(u.modelValue===null||c===!1)&&l(a)}function l(a){e.value!==!1&&(e.value=!1,d("before-hide",a),h!==void 0?h(a):d("hide",a))}function y(a){u.disable===!0&&a===!0?u["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!1):a===!0!==e.value&&(a===!0?q:l)(v)}$(()=>u.modelValue,y),s!==void 0&&Ce(p)===!0&&$(()=>I.$route.fullPath,()=>{s.value===!0&&e.value===!0&&S()}),m===!0&&be(()=>{y(u.modelValue)});const x={show:w,hide:S,toggle:b};return Object.assign(I,x),x}let O,P=0;const _=new Array(256);for(let e=0;e<256;e++)_[e]=(e+256).toString(16).substring(1);const Ve=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return r=>{const s=new Uint8Array(r);return e.getRandomValues(s),s}}return r=>{const s=[];for(let i=r;i>0;i--)s.push(Math.floor(Math.random()*256));return s}})(),ee=4096;function te(){(O===void 0||P+16>ee)&&(P=0,O=Ve(ee));const e=Array.prototype.slice.call(O,P,P+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,_[e[0]]+_[e[1]]+_[e[2]]+_[e[3]]+"-"+_[e[4]]+_[e[5]]+"-"+_[e[6]]+_[e[7]]+"-"+_[e[8]]+_[e[9]]+"-"+_[e[10]]+_[e[11]]+_[e[12]]+_[e[13]]+_[e[14]]+_[e[15]]}const C=_e({}),Fe=Object.keys(M);var Ne=B({name:"QExpansionItem",props:{...M,...Ee,...V,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...Pe,"click","after-show","after-hide"],setup(e,{slots:r,emit:s}){const{proxy:{$q:i}}=L(),h=F(e,i),m=R(e.modelValue!==null?e.modelValue:e.defaultOpened),p=R(null),u=te(),{show:d,hide:I,toggle:v}=Re({showing:m});let b,w;const q=g(()=>`q-expansion-item q-item-type q-expansion-item--${m.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),S=g(()=>{if(e.contentInsetLevel===void 0)return null;const o=i.lang.rtl===!0?"Right":"Left";return{["padding"+o]:e.contentInsetLevel*56+"px"}}),l=g(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),y=g(()=>{const o={};return Fe.forEach(A=>{o[A]=e[A]}),o}),x=g(()=>l.value===!0||e.expandIconToggle!==!0),a=g(()=>e.expandedIcon!==void 0&&m.value===!0?e.expandedIcon:e.expandIcon||i.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),c=g(()=>e.disable!==!0&&(l.value===!0||e.expandIconToggle===!0)),j=g(()=>({expanded:m.value===!0,detailsId:e.targetUid,toggle:v,show:d,hide:I})),U=g(()=>{const o=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:i.lang.label[m.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":m.value===!0?"true":"false","aria-owns":u,"aria-controls":u,"aria-label":o}});$(()=>e.group,o=>{w!==void 0&&w(),o!==void 0&&W()});function ie(o){l.value!==!0&&v(o),s("click",o)}function oe(o){o.keyCode===13&&K(o,!0)}function K(o,A){A!==!0&&p.value!==null&&p.value.focus(),v(o),ne(o)}function le(){s("after-show")}function se(){s("after-hide")}function W(){b===void 0&&(b=te()),m.value===!0&&(C[e.group]=b);const o=$(m,Q=>{Q===!0?C[e.group]=b:C[e.group]===b&&delete C[e.group]}),A=$(()=>C[e.group],(Q,me)=>{me===b&&Q!==void 0&&Q!==b&&I()});w=()=>{o(),A(),C[e.group]===b&&delete C[e.group],w=void 0}}function re(){const o={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},A=[f(Z,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&m.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:a.value})];return c.value===!0&&(Object.assign(o,{tabindex:0,...U.value,onClick:K,onKeyup:oe}),A.unshift(f("div",{ref:p,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),f(D,o,()=>A)}function ue(){let o;return r.header!==void 0?o=[].concat(r.header(j.value)):(o=[f(D,()=>[f(Y,{lines:e.labelLines},()=>e.label||""),e.caption?f(Y,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&o[e.switchToggleSide===!0?"push":"unshift"](f(D,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>f(Z,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&o[e.switchToggleSide===!0?"unshift":"push"](re()),o}function de(){const o={ref:"item",style:e.headerStyle,class:e.headerClass,dark:h.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return x.value===!0&&(o.clickable=!0,o.onClick=ie,Object.assign(o,l.value===!0?y.value:U.value)),f($e,o,ue)}function ce(){return pe(f("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:S.value,id:u},z(r.default)),[[ye,m.value]])}function ge(){const o=[de(),f(je,{duration:e.duration,onShow:le,onHide:se},ce)];return e.expandSeparator===!0&&o.push(f(J,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:h.value}),f(J,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:h.value})),o}return e.group!==void 0&&W(),ae(()=>{w!==void 0&&w()}),()=>f("div",{class:q.value},[f("div",{class:"q-expansion-item__container relative-position"},ge())])}}),De=B({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:r}){const{proxy:{$q:s}}=L(),i=X(we,T);if(i===T)return console.error("QPage needs to be a deep child of QLayout"),T;if(X(ke,T)===T)return console.error("QPage needs to be child of QPageContainer"),T;const m=g(()=>{const u=(i.header.space===!0?i.header.size:0)+(i.footer.space===!0?i.footer.size:0);if(typeof e.styleFn=="function"){const d=i.isContainer.value===!0?i.containerHeight.value:s.screen.height;return e.styleFn(u,d)}return{minHeight:i.isContainer.value===!0?i.containerHeight.value-u+"px":s.screen.height===0?u!==0?`calc(100vh - ${u}px)`:"100vh":s.screen.height-u+"px"}}),p=g(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>f("main",{class:p.value,style:m.value},z(r.default))}}),He="/cssvgweb/assets/inka_preview.a85bb013.png",Oe="/cssvgweb/assets/inka_now_for_windows2.svg.24aa9665.svg",Me="/cssvgweb/assets/inka12.b22d2e22.svg",Ue="/cssvgweb/assets/viracocha.6ddeded0.svg",Ke="/cssvgweb/assets/smiley.279afffc.svg",We="/cssvgweb/assets/fox_ice.b58453aa.svg",Ge="/cssvgweb/assets/smiley3.c6d5b002.svg",Xe="/cssvgweb/assets/mountain.7ae9c339.svg",Ze="/cssvgweb/assets/bird.967cbe22.svg",Ye="/cssvgweb/assets/inka1_1.e76172f5.svg",Je="/cssvgweb/assets/witch.2527b05a.svg",et="/cssvgweb/assets/inka3.f238a993.svg",tt="/cssvgweb/assets/face_wink.e6013a05.svg",nt="/cssvgweb/assets/merry_consume.7ba69002.svg",at="/cssvgweb/assets/fish.77d3caf8.svg",it="/cssvgweb/assets/thumbup.696a4cac.svg",ot="/cssvgweb/assets/bird_stroke.03434357.svg",lt="/cssvgweb/assets/weird.fc718736.svg";const st={},n=e=>(Se("data-v-52ab37c9"),e=e(),Ae(),e),rt=n(()=>t("b",null,'"csSvg" or "inka" ',-1)),ut={class:"q-my-md"},dt=n(()=>t("span",{class:"text-h4"}," inka 1.3 Beta ",-1)),ct=n(()=>t("span",{class:"text-h6"}," 9/feb/2023",-1)),gt=n(()=>t("br",null,null,-1)),mt=n(()=>t("br",null,null,-1)),vt=n(()=>t("div",{class:"text-h5"},"Windows",-1)),ft=n(()=>t("ul",null,[t("a",{href:"/cssvgweb/inka-1.3.0.exe"}," inka-1.3.0.exe Beta "),t("div",null,[t("b",null,[t("u",null," IMPORTANT!")]),k(" It requires this experimental version of inkscape to work "),t("a",{download:"",role:"menuitem",href:"https://gitlab.com/inkscape/inkscape/-/jobs/3709519237/artifacts/download?file_type=archive",rel:"nofollow",target:"_self",class:"dropdown-item"}," inkscape:windows:x64:archive ")])],-1)),ht=n(()=>t("div",{class:"text-h5"},"Linux",-1)),bt=n(()=>t("ul",null,[t("a",{href:"/cssvgweb/inka-1.3.0.AppImage"}," inka-1.3.0.AppImage Beta "),t("div",null,[t("b",null,[t("u",null," IMPORTANT!")]),k(" It requires this experimental version of inkscape to work "),t("a",{download:"",role:"menuitem",href:"https://gitlab.com/inkscape/inkscape/-/jobs/3709519231/artifacts/download?file_type=archive",rel:"nofollow",target:"_self",class:"dropdown-item"}," appimage:linux:archive ")])],-1)),_t=n(()=>t("hr",null,null,-1)),pt=n(()=>t("a",{href:"/cssvgweb/inka-1.2.1.AppImage"}," inka-1.2.1.AppImage (linux) ",-1)),yt=n(()=>t("ul",null,[t("li",null,'Added "open SVG with inkscape" button that asks and remembers inkscape path, and "open SVG with default program"'),t("li",null,"Complete redesign of the UI, now in dark mode, and refactored so in the future is easier to add custom themes, improved spacing, etc"),t("li",null,"Fixed bug on start it would not load correctly last project"),t("li",null,'Add "_inka" to saved projects'),t("li",null,[k("Demonstration: "),t("a",{href:"https://www.youtube.com/watch?v=I_WHppKb0r8&feature=youtu.be",target:"_blank"},"video")])],-1)),wt=n(()=>t("hr",null,null,-1)),kt=n(()=>t("a",{href:"/cssvgweb/inka-1.2.0.AppImage"}," inka-1.2.0.AppImage (linux) ",-1)),xt=n(()=>t("ul",null,[t("li",null,'Add support to animate rotation and translation only on "g" elements'),t("li",null,"Add support to animate stroke, stroke-width, stroke-dasharray and stroke-linecap"),t("li",null,"Fix bug that reseted project to last saved state"),t("li",null,"Remember animation time on refresh or restart project"),t("li",null,"Improved performance on drag kfs"),t("li",null,"Improve animation viewer, now only shows what is inside the main layer"),t("li",null,[k("Demonstration: "),t("a",{href:"https://www.youtube.com/watch?v=lA5omC4sO2U",target:"_blank"},"video")])],-1)),It=n(()=>t("hr",null,null,-1)),qt=n(()=>t("a",{href:"/cssvgweb/inka-1.1.0.AppImage"}," inka-1.1.0.AppImage (linux) ",-1)),St=n(()=>t("ul",null,[t("li",null,"Fix bug on drag key frame when kf viewer was scrolled would not drag properly"),t("li",null,"Fix bug on puase and play again would start animation from zero instead of current time"),t("li",null,"Add support for fill-opacity attribute"),t("li",null,"Fix bug on start or refresh app would not remember y scroll on animator"),t("li",null,"knonw bug (also on older versions): change duration is glitchy"),t("li",null,"knonw bug (also on older versions): drag keyframes sometimes is glitchy")],-1)),At=n(()=>t("hr",null,null,-1)),Bt=n(()=>t("a",{href:"/cssvgweb/inka-1.0.0.AppImage"}," inka-1.0.0.AppImage (linux) ",-1)),Ct=n(()=>t("ul",null,[t("li",null,"Known bug: on drag keyframe while scrolled in kf editor it won't drag properly"),t("li",null,"See attribute keyframe value on hover"),t("li",null,"Fix bug that svg would not refresh on pause/update time and create a new keyframe"),t("li",null,"Refactored a bunch of code to make it more mantainable in the future"),t("li",null,"Added face wink logo on AppImage"),t("li",null,'Changed name from "cssvg" to "inka" in the AppImage'),t("li",null,"Changed version to 1.0.0 just to start using version numbers as they are intended"),t("li",null,"Prevents timepicker of being dragged if it haven't been clicked")],-1)),Tt=n(()=>t("hr",null,null,-1)),zt=n(()=>t("a",{href:"/cssvgweb/cssvg-0.0.2.AppImage"}," cssvg-0.0.2.AppImage (linux) ",-1)),Lt=n(()=>t("ul",null,[t("li",null,"Add capability to drag keyframes to change the time"),t("li",null,"Delete keyframes now with right click instead of left click "),t("li",null,[k("Demonstration: "),t("a",{href:"https://www.youtube.com/watch?v=w35GS6fKksE",target:"_blank"},"making smiley youtube tutorial")])],-1)),$t=n(()=>t("hr",null,null,-1)),jt=n(()=>t("a",{href:"/cssvgweb/cssvg-0.0.1.AppImage"}," cssvg-0.0.1.AppImage (linux) ",-1)),Qt=n(()=>t("ul",null,[k(" First stable version on linux "),t("li",null,[k(" Demonstration: "),t("a",{href:"https://www.youtube.com/watch?v=vPwZxCoeH_0",target:"_blank"}," first extensive video tutorial with voice")])],-1)),Et=n(()=>t("hr",null,null,-1)),Pt=n(()=>t("a",{href:"/cssvgweb/cssvg%20Setup%200.0.1.exe",disabled:"",target:"_blank",title:"discontinued for lack of time, maybe in the future will be retaken"}," cssvg-0.0.1.exe (windows) ",-1)),Rt=n(()=>t("ul",null,[k(" Discontinued at the moment, may be retaken in the future (only download this version if you dare) "),t("li",null,[k(" Demonstration: "),t("a",{href:"https://www.youtube.com/watch?v=f8kHLQNz8zE",target:"_blank"}," animating in windows video tutorial")])],-1)),Vt=n(()=>t("img",{decoding:"async",loading:"lazy",src:He,style:{width:"100%"}},null,-1)),Ft=n(()=>t("p",{style:{color:"orange"}},[t("b",null,"Warning:"),k(" This project is under active development and it contains multiple bugs that we are currently fixing. To understand how to use it you can watch tutorials on our "),t("a",{href:"https://www.youtube.com/channel/UCh30W9QnXS-XZwNuk-twnyg",target:"_blank",rel:"noopener noreferrer"},"youtube"),k(" channel or join us in "),t("a",{href:"https://discord.gg/F8Wzc5SPjq",target:"_blank",rel:"noopener noreferrer"},"discord")],-1)),Nt=n(()=>t("hr",null,null,-1)),Dt=n(()=>t("b",null,"Animations created and exported with this tool:",-1)),Ht=n(()=>t("ul",{class:"imgCont"},[t("img",{decoding:"async",loading:"lazy",src:Oe,style:{background:"burlywood"}}),t("img",{decoding:"async",loading:"lazy",src:Me,style:{background:"burlywood"}}),t("img",{decoding:"async",loading:"lazy",src:Ue}),t("img",{decoding:"async",loading:"lazy",src:Ke}),t("img",{decoding:"async",loading:"lazy",src:We}),t("img",{decoding:"async",loading:"lazy",src:Ge}),t("img",{decoding:"async",loading:"lazy",src:Xe}),t("img",{decoding:"async",loading:"lazy",src:Ze}),t("img",{decoding:"async",loading:"lazy",src:Ye,style:{background:"burlywood"}}),t("img",{decoding:"async",loading:"lazy",src:Je}),t("img",{decoding:"async",loading:"lazy",src:et}),t("img",{decoding:"async",loading:"lazy",src:tt}),t("img",{decoding:"async",loading:"lazy",src:nt}),t("img",{decoding:"async",loading:"lazy",src:at}),t("img",{decoding:"async",loading:"lazy",src:Te}),t("img",{decoding:"async",loading:"lazy",src:it}),t("img",{decoding:"async",loading:"lazy",src:ot,style:{background:"skyblue"}}),t("img",{decoding:"async",loading:"lazy",src:lt})],-1)),Ot=n(()=>t("hr",null,null,-1)),Mt=n(()=>t("b",null,"Inkscape recomended configuration:",-1)),Ut=n(()=>t("ul",null,[t("li",null,"Preferences -> Interface -> Default Window Size: Small"),t("li",null,"Preferences -> Interface -> Saving Window size and position: Remember and use last window geometry "),t("li",null,"Preferences -> Input/Output -> Numeric precision: 8")],-1)),Kt=n(()=>t("hr",null,null,-1)),Wt=n(()=>t("b",null,"Roadmap / To Do list:",-1)),Gt=n(()=>t("ul",null,[t("li",null,"Improve keyframe system, to be able to drag keyframes, edit values, delete, inpsect, etc"),t("li",null,"Improve hierachy system to be able to add attributes or elements directly from the hierarchy"),t("li",null,"Add capabilities to handle and reuse multiple animations inside the same animation"),t("li",null,'(Maybe) Add an "inka" profile to inkscape to improve user experience by setting default preferences etc'),t("li",null,"Make standard humanoid skeleton to make animations reusable, then add funcitonality download/upload reusable template animations")],-1)),Xt=n(()=>t("hr",null,null,-1)),Zt=n(()=>t("b",null,"News",-1)),Yt=n(()=>t("ul",null,[t("li",null,[t("b",null," 09/feb/2022 ")]),t("ul",null,[t("li",null,"New major version release candiadate with a lot of new features on inkscape and inka side"),t("li",null,"Add windows support"),t("li",null,"Add record functionality"),t("li",null,"Improved UI and UX"),t("li",null,"Add remember kfs on inkscape"),t("li",null,"Add option to enable/disable refresh inksape"),t("li",null,"Add option to reset inkcape path")])],-1)),Jt=n(()=>t("ul",null,[t("li",null,[t("b",null," 23/11/22 ")]),t("ul",null,[t("li",null,"Added file system capabilities to load and save projects directly from the program "),t("li",null,"Pick file name and path on export")])],-1)),en=n(()=>t("ul",null,[t("li",null,[t("b",null," 13/11/22 ")]),t("ul",null,[t("li",null,"Major changes on animation editor, improved UI, improved TimePicker, KfEditor, etc"),t("li",null,"Add multi-file handling, now you can import many files and save your animations to comeback later "),t("li",null,"Added code viewer"),t("li",null,"Added Menu page where you can load saved projects or import new ones"),t("li",null," Discontinued windows version support for the moment, in the future is possible that we retake that initiative, but at the moment is too much time spent on testin and fixing bugs only for windows. ")]),t("li",null,[t("b",null," 25/10/22 ")]),t("ul",null,[t("li",null," Released new version (only for linux download) with export functionality, bug fixes, improved code, remember attributes state, show individual kfs for each attribute only if exist, on hover on kf show value, on hover on attr name shows current attr value changed attrs color. ")]),t("li",null,[t("b",null," 20/10/22 ")]),t("ul",null,[t("li",null," Export funtionality already working on dev, and will be available to the public soon. ")])],-1)),tn=n(()=>t("hr",null,null,-1)),nn=n(()=>t("b",null,"Knwon limitations, bugs, etc:",-1)),an=n(()=>t("ul",null,[t("li",null,"Rotation and translation can't be in the same group, need a specific group to track each transform"),t("li",null,"Rotations limited by inkscape degrees (max 180, min -180), so if you need custom rotation, has to be added manually"),t("li",null,"Resize, skew transforms not supported"),t("li",null,"d attribute won't properly morph if you change the type of nodes from one keyframe from another, so is necesary to convert all nodes to curves (shown in video tutorials) "),t("li",null,"Blur animation still not implemented")],-1)),on=n(()=>t("hr",null,null,-1));function ln(e,r){return Ie(),qe(De,{style:{padding:"2%"},id:"page"},{default:E(()=>[rt,k("is a tool to animate SVG with CSS animations and Inkscape. "),t("div",ut,[N(Ne,{class:"shadow-1 overflow-hidden",style:{"background-color":"brown"},icon:"download",label:"Download options","header-class":""},{default:E(()=>[N(Le,null,{default:E(()=>[N(ze,null,{default:E(()=>[dt,k(),ct,gt,mt,vt,ft,ht,bt,_t,pt,k(" 29/12/2022 "),yt,wt,kt,k(" 18/12/2022 "),xt,It,qt,St,At,Bt,Ct,Tt,zt,Lt,$t,jt,Qt,Et,Pt,Rt]),_:1})]),_:1})]),_:1})]),Vt,Ft,Nt,Dt,Ht,Ot,Mt,Ut,Kt,Wt,Gt,Xt,Zt,Yt,Jt,en,tn,nn,an,on]),_:1})}var cn=xe(st,[["render",ln],["__scopeId","data-v-52ab37c9"]]);export{cn as default};
