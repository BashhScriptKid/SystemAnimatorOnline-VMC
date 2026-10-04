(function(){
var zc=Object.defineProperty;var ks=oe=>{throw TypeError(oe)};var Dc=(oe,Q,me)=>Q in oe?zc(oe,Q,{enumerable:!0,configurable:!0,writable:!0,value:me}):oe[Q]=me;var We=(oe,Q,me)=>Dc(oe,typeof Q!="symbol"?Q+"":Q,me),Mi=(oe,Q,me)=>Q.has(oe)||ks("Cannot "+me);var f=(oe,Q,me)=>(Mi(oe,Q,"read from private field"),me?me.call(oe):Q.get(oe)),I=(oe,Q,me)=>Q.has(oe)?ks("Cannot add the same private member more than once"):Q instanceof WeakSet?Q.add(oe):Q.set(oe,me),C=(oe,Q,me,Xt)=>(Mi(oe,Q,"write to private field"),Xt?Xt.call(oe,me):Q.set(oe,me),me),U=(oe,Q,me)=>(Mi(oe,Q,"access private method"),me);(function(){"use strict";var is,Mr,Ht,ar,Tr,Nr,Or,Nt,Pr,De,an,Ot,lt,wt,Cr,sr,j,Ti,Ni,dn,Oi,$s,Es,zr,Vc,vn,as,Ze,Si,Qe,or,Oe,Ve,Pe,Be,bt,lr,jt,Rr,sn,on,Pt,Cn,ie,Bc,Fc,Pi,Uc,Ci,pn,Fn,Ri,Ii,ct,xt,Fe,cr,ln,cn,Rn,ss;var Q=Array.isArray,me=Array.prototype.indexOf,Xt=Array.prototype.includes,hn=Array.from,Li=Object.defineProperty,Rt=Object.getOwnPropertyDescriptor,zi=Object.getOwnPropertyDescriptors,As=Object.prototype,Ms=Array.prototype,Un=Object.getPrototypeOf,Di=Object.isExtensible;function Dr(e){return typeof e=="function"}const Ts=()=>{};function Ns(e){return e()}function Hn(e){for(var t=0;t<e.length;t++)e[t]()}function Vi(){var e,t,r=new Promise((n,i)=>{e=n,t=i});return{promise:r,resolve:e,reject:t}}function Bi(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const $e=2,hr=4,Vr=8,jn=1<<24,tt=16,Ge=32,Et=64,Wn=128,Gn=256,rt=512,ye=1024,_e=2048,Xe=4096,Me=8192,Te=16384,_r=32768,_n=1<<25,It=65536,gn=1<<17,Os=1<<18,gr=1<<19,Fi=1<<20,ut=1<<25,mn=1<<21,mr=1<<22,Lt=1<<23,dt=Symbol("$state"),Ui=Symbol("component"),Hi=Symbol("legacy props"),Ps=Symbol(""),yn=Symbol("attributes"),Xn=Symbol("class"),Yn=Symbol("style"),Br=Symbol("text"),Fr=new class extends Error{constructor(){super(...arguments);We(this,"name","StaleReactionError");We(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},wn=!!((is=globalThis.document)!=null&&is.contentType)&&globalThis.document.contentType.includes("xml"),Cs=1,Rs=2,ji=4,Is=8,Ls=16,zs=1,Ds=2,Wi=4,Vs=8,Bs=16,Fs=1,Us=2,ge=Symbol("uninitialized"),Gi="http://www.w3.org/1999/xhtml",Hs="http://www.w3.org/2000/svg",js="@attach";function Ws(){console.warn("https://svelte.dev/e/derived_inert")}function Gs(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Xs(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Xi(e){return e===this.v}function Ys(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Yi(e){return!Ys(e,this.v)}function qs(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Ks(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Zs(e,t,r){throw new Error("https://svelte.dev/e/each_key_duplicate")}function Qs(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Js(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function eo(e){throw new Error("https://svelte.dev/e/effect_orphan")}function to(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ro(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function no(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function io(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ao(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function so(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let yr=!1,Hc=!1;function oo(){yr=!0}let le=null;function wr(e){le=e}function Yt(e,t=!1,r){le={p:le,i:!1,c:null,e:null,s:e,x:null,r:B,l:yr&&!t?{s:null,u:null,$:[]}:null}}function qt(e){var t=le,r=t.e;if(r!==null){t.e=null;for(var n of r)_a(n)}return t.i=!0,le=t.p,qn(e)}function qn(e={}){return Li(e,Ui,{value:!0}),e}function Ur(){return!yr||le!==null&&le.l===null}let br=[];function lo(){var e=br;br=[],Hn(e)}function vt(e){if(br.length===0){var t=br;queueMicrotask(()=>{t===br&&lo()})}br.push(e)}const co=-7169;function pe(e,t){e.f=e.f&co|t}function Kn(e){(e.f&rt)!==0||e.deps===null?pe(e,ye):pe(e,Xe)}function qi(e,t,r){(e.f&_e)!==0?t.add(e):(e.f&Xe)!==0&&r.add(e),pe(e,ye)}function fo(e,t){if(t){const r=document.body;e.autofocus=!0,vt(()=>{document.activeElement===r&&e.focus()})}}function Hr(e){var t=V,r=B;Ye(null),qe(null);try{return e()}finally{Ye(t),qe(r)}}function Ki(e,t,r,n){const i=Ur()?xr:Zn;var a=e.filter(p=>!p.settled),s=t.map(i);if(r.length===0&&a.length===0){n(s);return}var o=B,l=uo(),c=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(p=>p.promise)):null;function v(p){if((o.f&Te)===0){l();try{n([...s,...p])}catch(h){gt(h,o)}bn()}}var d=Zi();if(r.length===0){c.then(()=>v([])).finally(d);return}function _(){Promise.all(r.map(p=>vo(p))).then(v).catch(p=>gt(p,o)).finally(d)}c?c.then(()=>{l(),_(),bn()}):_()}function uo(){var e=B,t=V,r=le,n=O;return function(a=!0){qe(e),Ye(t),wr(r),a&&(e.f&Te)===0&&(n==null||n.activate(),n==null||n.apply())}}function bn(e=!0){qe(null),Ye(null),wr(null),e&&(O==null||O.deactivate())}function Zi(){var e=B,t=e.b,r=O,n=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,r),r.increment(n,e),()=>{t==null||t.update_pending_count(-1,r),r.decrement(n,e)}}function xr(e){var t=$e|_e;return B!==null&&(B.f|=gr),{ctx:le,deps:null,effects:null,equals:Xi,f:t,fn:e,reactions:null,rv:0,v:ge,wv:0,parent:B,ac:null}}const jr=Symbol("obsolete");function vo(e,t,r){let n=B;n===null&&Ks();var i=void 0,a=zt(ge),s=!V,o=new Set;return Eo(()=>{var p,h;var l=B,c=Vi();i=c.promise;try{Promise.resolve(e()).then(c.resolve,x=>{x!==Fr&&c.reject(x)}).finally(bn)}catch(x){c.reject(x),bn()}var v=O;if(s){if((l.f&_r)!==0)var d=Zi();if((p=n.b)!=null&&p.is_rendered())(h=v.async_deriveds.get(l))==null||h.reject(jr);else for(const x of o.values())x.reject(jr);o.add(c),v.async_deriveds.set(l,c)}const _=(x,u=void 0)=>{d==null||d(),o.delete(c),u!==jr&&(v.activate(),u?(a.f|=Lt,kr(a,u)):((a.f&Lt)!==0&&(a.f^=Lt),kr(a,x)),v.deactivate())};c.promise.then(_,x=>_(null,x||"unknown"))}),oi(()=>{for(const l of o)l.reject(jr)}),new Promise(l=>{function c(v){function d(){v===i?l(a):c(i)}v.then(d,d)}c(i)})}function pt(e){const t=xr(e);return ka(t),t}function Zn(e){const t=xr(e);return t.equals=Yi,t}function po(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)Se(t[r])}}function Qn(e){var t,r=B,n=e.parent;if(!Mt&&n!==null&&e.v!==ge&&(n.f&(Te|Me))!==0)return Ws(),e.v;qe(n);try{po(e),t=Ta(e)}finally{qe(r)}return t}function Qi(e){var t=Qn(e);if(!e.equals(t)&&(e.wv=Aa(),(!(O!=null&&O.is_fork)||e.deps===null)&&(O!==null?(O.capture(e,t,!0),Wr==null||Wr.capture(e,t,!0)):e.v=t,e.deps===null))){pe(e,ye);return}Mt||(xe!==null?(si()||O!=null&&O.is_fork)&&xe.set(e,t):Kn(e))}function ho(e){var t;if(e.effects!==null)for(const r of e.effects)(r.teardown||r.ac)&&((t=r.teardown)==null||t.call(r),r.ac!==null&&Hr(()=>{r.ac.abort(Fr),r.ac=null}),r.fn!==null&&(r.teardown=Ts),Zr(r,0),ci(r))}function Ji(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&$r(t)}let Jn=null,Sr=null,O=null,Wr=null,xe=null,ei=null,ti=!1,Gr=null,xn=null;var ea=0,jc=new Set;let _o=1;const Pn=class Pn{constructor(){I(this,j);We(this,"id",_o++);I(this,Mr,!1);We(this,"linked",!0);I(this,Ht,null);I(this,ar,null);We(this,"async_deriveds",new Map);We(this,"current",new Map);We(this,"previous",new Map);I(this,Tr,new Set);I(this,Nr,new Set);I(this,Or,0);I(this,Nt,new Map);I(this,Pr,null);I(this,De,[]);I(this,an,[]);I(this,Ot,new Set);I(this,lt,new Set);I(this,wt,new Map);I(this,Cr,new Set);We(this,"is_fork",!1);I(this,sr,!1);Sr===null?Jn=Sr=this:(C(Sr,ar,this),C(this,Ht,Sr)),Sr=this}skip_effect(t){f(this,wt).has(t)||f(this,wt).set(t,{d:[],m:[]}),f(this,Cr).delete(t)}unskip_effect(t,r=n=>this.schedule(n)){var n=f(this,wt).get(t);if(n){f(this,wt).delete(t);for(var i of n.d)pe(i,_e),r(i);for(i of n.m)pe(i,Xe),r(i)}f(this,Cr).add(t)}capture(t,r,n=!1){t.v!==ge&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&Lt)===0&&(this.current.set(t,[r,n]),xe==null||xe.set(t,r)),this.is_fork||(t.v=r)}activate(){O=this}deactivate(){O=null,xe=null}flush(){try{ti=!0,O=this,U(this,j,dn).call(this)}finally{ea=0,ei=null,Gr=null,xn=null,ti=!1,O=null,xe=null,ht.clear()}}discard(){var t;for(const r of f(this,Nr))r(this);f(this,Nr).clear();for(const r of this.async_deriveds.values())r.reject(jr);U(this,j,vn).call(this),(t=f(this,Pr))==null||t.resolve()}register_created_effect(t){f(this,an).push(t)}increment(t,r){if(C(this,Or,f(this,Or)+1),t){let n=f(this,Nt).get(r)??0;f(this,Nt).set(r,n+1)}}decrement(t,r){if(C(this,Or,f(this,Or)-1),t){let n=f(this,Nt).get(r)??0;n===1?f(this,Nt).delete(r):f(this,Nt).set(r,n-1)}f(this,sr)||(C(this,sr,!0),vt(()=>{C(this,sr,!1),this.linked&&this.flush()}))}transfer_effects(t,r){for(const n of t)f(this,Ot).add(n);for(const n of r)f(this,lt).add(n);t.clear(),r.clear()}oncommit(t){f(this,Tr).add(t)}ondiscard(t){f(this,Nr).add(t)}settled(){return(f(this,Pr)??C(this,Pr,Vi())).promise}static ensure(){if(O===null){const t=O=new Pn;ti||vt(()=>{f(t,Mr)||t.flush()})}return O}apply(){{xe=null;return}}schedule(t){var r;if(ei=t,(r=t.b)!=null&&r.is_pending&&(t.f&(hr|Vr|jn))!==0&&(t.f&_r)===0){t.b.defer_effect(t);return}f(this,De).push(t)}};Mr=new WeakMap,Ht=new WeakMap,ar=new WeakMap,Tr=new WeakMap,Nr=new WeakMap,Or=new WeakMap,Nt=new WeakMap,Pr=new WeakMap,De=new WeakMap,an=new WeakMap,Ot=new WeakMap,lt=new WeakMap,wt=new WeakMap,Cr=new WeakMap,sr=new WeakMap,j=new WeakSet,Ti=function(){if(this.is_fork)return!0;for(const n of f(this,Nt).keys()){for(var t=n,r=!1;t.parent!==null;){if(f(this,wt).has(t)){r=!0;break}t=t.parent}if(!r)return!0}return!1},Ni=function(){var t=[];for(const a of f(this,De))if(!((a.f&Te)!==0||(a.f&(_e|Xe))===0)){for(var r=a,n=!1;r.parent!==null;){r=r.parent;var i=r.f;if((i&(Et|Ge))!==0){if((i&ye)===0){n=!0;break}r.f^=ye}}n||t.push(r)}return C(this,De,[]),t},dn=function(){var o,l,c,v;C(this,Mr,!0);for(const d of f(this,Ot))f(this,lt).delete(d),pe(d,_e),this.schedule(d);for(const d of f(this,lt))pe(d,Xe),this.schedule(d);this.apply();for(var t=Gr=[],r=[],n=xn=[];f(this,De).length>0;){ea++>1e3&&(U(this,j,vn).call(this),go());for(const d of U(this,j,Ni).call(this))try{U(this,j,Oi).call(this,d,t,r)}catch(_){throw ia(d),U(this,j,Ti).call(this)||this.discard(),_}}if(O=null,n.length>0){var i=Pn.ensure();for(const d of n)i.schedule(d)}if(Gr=null,xn=null,U(this,j,Ti).call(this)){U(this,j,zr).call(this,r),U(this,j,zr).call(this,t);for(const[d,_]of f(this,wt))na(d,_);n.length>0&&U(o=O,j,dn).call(o);return}const a=U(this,j,$s).call(this);if(a){U(this,j,zr).call(this,r),U(this,j,zr).call(this,t),U(l=a,j,Es).call(l,this);return}f(this,Ot).clear(),f(this,lt).clear();for(const d of f(this,Tr))d(this);f(this,Tr).clear(),Wr=this,ta(r),ta(t),Wr=null,(c=f(this,Pr))==null||c.resolve();var s=O;if(f(this,Or)===0&&(f(this,De).length===0||s!==null)&&U(this,j,vn).call(this),f(this,De).length>0)if(s!==null){for(const d of f(this,De))f(s,De).push(d);C(this,De,[])}else s=this;s!==null&&(ht.clear(),U(v=s,j,dn).call(v))},Oi=function(t,r,n){t.f^=ye;for(var i=t.first;i!==null;){var a=i.f,s=(a&(Ge|Et))!==0,o=s&&(a&ye)!==0,l=o||(a&Me)!==0||f(this,wt).has(i);if(!l&&i.fn!==null){s?i.f^=ye:(a&hr)!==0?r.push(i):Kr(i)&&((a&tt)!==0&&f(this,lt).add(i),$r(i));var c=i.first;if(c!==null){i=c;continue}}for(;i!==null;){var v=i.next;if(v!==null){i=v;break}i=i.parent}}},$s=function(){for(var t=f(this,Ht);t!==null;){if(!t.is_fork){for(const[r,[,n]]of this.current)if(t.current.has(r)&&!n)return t}t=f(t,Ht)}return null},Es=function(t){var n;for(const[i,a]of t.current)!this.previous.has(i)&&t.previous.has(i)&&this.previous.set(i,t.previous.get(i)),this.current.set(i,a);for(const[i,a]of t.async_deriveds){const s=this.async_deriveds.get(i);s&&a.promise.then(s.resolve).catch(s.reject)}t.async_deriveds.clear(),this.transfer_effects(f(t,Ot),f(t,lt));const r=i=>{var a=i.reactions;if(a!==null&&!((i.f&$e)!==0&&(i.f&(_e|Xe))===0))for(const l of a){var s=l.f;if((s&$e)!==0)r(l);else{var o=l;s&(mr|tt)&&!this.async_deriveds.has(o)&&(f(this,lt).delete(o),pe(o,_e),this.schedule(o))}}};for(const i of this.current.keys())r(i);this.oncommit(()=>t.discard()),U(n=t,j,vn).call(n),O=this,U(this,j,dn).call(this)},zr=function(t){for(var r=0;r<t.length;r+=1)qi(t[r],f(this,Ot),f(this,lt))},Vc=function(){var d,_;for(let p=Jn;p!==null;p=f(p,ar)){var t=p.id<this.id,r=[];for(const[h,[x,u]]of this.current){if(p.current.has(h)){var n=p.current.get(h)[0];if(t&&x!==n)p.current.set(h,[x,u]);else continue}r.push(h)}if(t)for(const[h,x]of this.async_deriveds){const u=p.async_deriveds.get(h);u&&x.promise.then(u.resolve).catch(u.reject)}var i=[...p.current.keys()].filter(h=>!p.current.get(h)[1]);if(!(!f(p,Mr)||i.length===0)){var a=i.filter(h=>!this.current.has(h));if(a.length===0)t&&p.discard();else if(r.length>0){if(t)for(const h of f(this,Cr))p.unskip_effect(h,x=>{var u;(x.f&(tt|mr))!==0?p.schedule(x):U(u=p,j,zr).call(u,[x])});p.activate();var s=new Set,o=new Map;for(var l of r)ra(l,a,s,o);o=new Map;var c=[...p.current].filter(([h,x])=>{const u=this.current.get(h);return u?u[0]!==x[0]||u[1]!==x[1]:!0}).map(([h])=>h);if(c.length>0)for(const h of f(this,an))(h.f&(Te|Me|gn))===0&&ri(h,c,o)&&((h.f&(mr|tt))!==0?(pe(h,_e),p.schedule(h)):f(p,Ot).add(h));if(f(p,De).length>0&&!f(p,sr)){p.apply();for(var v of U(d=p,j,Ni).call(d))U(_=p,j,Oi).call(_,v,[],[])}p.deactivate()}}}},vn=function(){if(this.linked){var t=f(this,Ht),r=f(this,ar);t===null?Jn=r:C(t,ar,r),r===null?Sr=t:C(r,Ht,t),this.linked=!1}};let Kt=Pn;function go(){try{to()}catch(e){gt(e,ei)}}let nt=null;function ta(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(Te|Me))===0&&Kr(n)&&(nt=new Set,$r(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&wa(n),(nt==null?void 0:nt.size)>0)){ht.clear();for(const i of nt){if((i.f&(Te|Me))!==0)continue;const a=[i];let s=i.parent;for(;s!==null;)nt.has(s)&&(nt.delete(s),a.push(s)),s=s.parent;for(let o=a.length-1;o>=0;o--){const l=a[o];(l.f&(Te|Me))===0&&$r(l)}}nt.clear()}}nt=null}}function ra(e,t,r,n){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(const i of e.reactions){const a=i.f;(a&$e)!==0?ra(i,t,r,n):(a&(mr|tt))!==0&&(a&_e)===0&&ri(i,t,n)&&(pe(i,_e),ni(i))}}function ri(e,t,r){const n=r.get(e);if(n!==void 0)return n;if(e.deps!==null)for(const i of e.deps){if(Xt.call(t,i))return!0;if((i.f&$e)!==0&&ri(i,t,r))return r.set(i,!0),!0}return r.set(e,!1),!1}function ni(e){O.schedule(e)}function na(e,t){if(!((e.f&Ge)!==0&&(e.f&ye)!==0)){(e.f&_e)!==0?t.d.push(e):(e.f&Xe)!==0&&t.m.push(e),pe(e,ye);for(var r=e.first;r!==null;)na(r,t),r=r.next}}function ia(e){pe(e,ye);for(var t=e.first;t!==null;)ia(t),t=t.next}let Sn=new Set;const ht=new Map;let aa=!1;function zt(e,t){var r={f:0,v:e,reactions:null,equals:Xi,rv:0,wv:0};return r}function K(e,t){const r=zt(e);return ka(r),r}function mo(e,t=!1,r=!0){var i;const n=zt(e);return t||(n.equals=Yi),yr&&r&&le!==null&&le.l!==null&&((i=le.l).s??(i.s=[])).push(n),n}function T(e,t,r=!1){V!==null&&(!at||(V.f&gn)!==0)&&Ur()&&(V.f&($e|tt|mr|gn))!==0&&(mt===null||!mt.has(e))&&ao();let n=r?_t(t):t;return kr(e,n,xn)}var Zt=null,ii=0;function kr(e,t,r=null){if(!e.equals(t)){Mt?ht.set(e,t):ht.has(e)||ht.set(e,e.v);var n=Kt.ensure();if(n.capture(e,t),(e.f&$e)!==0){const i=e;(e.f&_e)!==0&&Qn(i),xe===null&&Kn(i)}e.wv=Aa(),Zt=null,ii=0,oa(e,_e,r),Zt=null,Ur()&&B!==null&&(B.f&ye)!==0&&(B.f&(Ge|Et))===0&&(Ke===null?To([e]):Ke.push(e)),!n.is_fork&&Sn.size>0&&!aa&&yo()}return t}function yo(){aa=!1;for(const e of Sn){(e.f&ye)!==0&&pe(e,Xe);let t;try{t=Kr(e)}catch{t=!0}t&&$r(e)}Sn.clear()}function sa(e,t=1){var r=w(e),n=t===1?r++:r--;return T(e,r),n}function Xr(e){T(e,e.v+1)}function oa(e,t,r){var n=e.reactions;if(n!==null){var i=Ur(),a=n.length;if(ii+=a,ii>1e5&&Zt===null&&(Zt=new Set),Zt!==null){if(Zt.has(e))return;Zt.add(e)}for(var s=0;s<a;s++){var o=n[s],l=o.f;if(!(!i&&o===B)){var c=(l&_e)===0;if(c&&pe(o,t),(l&gn)!==0)Sn.add(o);else if((l&$e)!==0){var v=o;xe==null||xe.delete(v),oa(v,Xe,r)}else if(c){var d=o;(l&tt)!==0&&nt!==null&&nt.add(d),r!==null?r.push(d):ni(d)}}}}}function _t(e){if(typeof e!="object"||e===null||dt in e||Ui in e)return e;const t=Un(e);if(t!==As&&t!==Ms)return e;var r=new Map,n=Q(e),i=K(0),a=tr,s=o=>{if(tr===a)return o();var l=V,c=tr;Ye(null),Ea(a);var v=o();return Ye(l),Ea(c),v};return n&&r.set("length",K(e.length)),new Proxy(e,{defineProperty(o,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&no();var v=r.get(l);return v===void 0?s(()=>{var d=K(c.value);return r.set(l,d),d}):T(v,c.value,!0),!0},deleteProperty(o,l){var c=r.get(l);if(c===void 0){if(l in o){const v=s(()=>K(ge));r.set(l,v),Xr(i)}}else T(c,ge),Xr(i);return!0},get(o,l,c){var p;if(l===dt)return e;var v=r.get(l),d=l in o;if(v===void 0&&(!d||(p=Rt(o,l))!=null&&p.writable)&&(v=s(()=>{var h=_t(d?o[l]:ge),x=K(h);return x}),r.set(l,v)),v!==void 0){var _=w(v);return _===ge?void 0:_}return Reflect.get(o,l,c)},getOwnPropertyDescriptor(o,l){var _;(_=this.has)==null||_.call(this,o,l);var c=Reflect.getOwnPropertyDescriptor(o,l),v=r.get(l);if(v!==void 0){var d=w(v);if(d===ge)return;if(c&&"value"in c)c.value=d;else return{enumerable:!0,configurable:!0,value:d,writable:!0}}return c},has(o,l){var _;if(l===dt)return!0;var c=r.get(l),v=c!==void 0&&c.v!==ge||Reflect.has(o,l);if(c!==void 0||B!==null&&(!v||(_=Rt(o,l))!=null&&_.writable)){c===void 0&&(c=s(()=>{var p=v?_t(o[l]):ge,h=K(p);return h}),r.set(l,c));var d=w(c);if(d===ge)return!1}return v},set(o,l,c,v){var k;var d=r.get(l),_=l in o;if(n&&l==="length")for(var p=c;p<d.v;p+=1){var h=r.get(p+"");h!==void 0?T(h,ge):p in o&&(h=s(()=>K(ge)),r.set(p+"",h))}if(d===void 0)(!_||(k=Rt(o,l))!=null&&k.writable)&&(d=s(()=>K(void 0)),T(d,_t(c)),r.set(l,d));else{_=d.v!==ge;var x=s(()=>_t(c));T(d,x)}var u=Reflect.getOwnPropertyDescriptor(o,l);if(u!=null&&u.set&&u.set.call(v,c),!_){if(n&&typeof l=="string"){var g=r.get("length"),b=Number(l);Number.isInteger(b)&&b>=g.v&&T(g,b+1)}Xr(i)}return!0},ownKeys(o){w(i);var l=Reflect.ownKeys(o).filter(d=>{var _=r.get(d);return _===void 0||_.v!==ge});for(var[c,v]of r)v.v!==ge&&!(c in o)&&l.push(c);return l},setPrototypeOf(){io()}})}function la(e){try{if(e!==null&&typeof e=="object"&&dt in e)return e[dt]}catch{}return e}function ca(e,t){return Object.is(la(e),la(t))}var fa,ua,da,va;function wo(){if(fa===void 0){fa=window,ua=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;da=Rt(t,"firstChild").get,va=Rt(t,"nextSibling").get,Di(e)&&(e[Xn]=void 0,e[yn]=null,e[Yn]=void 0,e.__e=void 0),Di(r)&&(r[Br]=void 0)}}function At(e=""){return document.createTextNode(e)}function Qt(e){return da.call(e)}function Yr(e){return va.call(e)}function z(e,t){return Qt(e)}function W(e,t=!1){{var r=Qt(e);return r instanceof Comment&&r.data===""?Yr(r):r}}function te(e,t=!1){return Qt(e)}function D(e,t=1,r=!1){let n=e;for(;t--;)n=Yr(n);return n}function bo(e){e.textContent=""}function pa(){return!1}function ai(e,t,r){return t==null||t===Gi?r?document.createElement(e,{is:r}):document.createElement(e):r?document.createElementNS(t,e,{is:r}):document.createElementNS(t,e)}function xo(e){var t=B;if(t===null)return V.f|=Lt,e;if((t.f&_r)===0&&(t.f&hr)===0)throw e;gt(e,t)}function gt(e,t){if(!(t!==null&&(t.f&Te)!==0)){for(;t!==null;){if((t.f&Wn)!==0&&(t.f&(Te|_n))===0){if((t.f&_r)===0)throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw e}}function ha(e){B===null&&(V===null&&eo(),Js()),Mt&&Qs()}function So(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function it(e,t){var r=B;r!==null&&(r.f&Me)!==0&&(e|=Me);var n={ctx:le,deps:null,nodes:null,f:e|_e|rt,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};O==null||O.register_created_effect(n);var i=n;if((e&hr)!==0)Gr!==null?Gr.push(n):Kt.ensure().schedule(n);else if(t!==null){try{$r(n)}catch(s){throw Se(n),s}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&gr)===0&&(i=i.first,(e&tt)!==0&&(e&It)!==0&&i!==null&&(i.f|=It))}if(i!==null&&(i.parent=r,r!==null&&So(i,r),V!==null&&(V.f&$e)!==0&&(e&Et)===0)){var a=V;(a.effects??(a.effects=[])).push(i)}return n}function si(){return V!==null&&!at}function oi(e){const t=it(Vr,null);return pe(t,ye),t.teardown=e,t}function kn(e){ha();var t=B.f,r=!V&&(t&Ge)!==0&&le!==null&&!le.i;if(r){var n=le;(n.e??(n.e=[])).push(e)}else return _a(e)}function _a(e){return it(hr|Fi,e)}function ko(e){return ha(),it(Vr|Fi,e)}function $o(e){Kt.ensure();const t=it(Et|gr,e);return(r={})=>new Promise(n=>{r.outro?Jt(t,()=>{Se(t),n(void 0)}):(Se(t),n(void 0))})}function li(e){return it(hr,e)}function Eo(e){return it(mr|gr,e)}function ga(e,t=0){return it(Vr|t,e)}function we(e,t=[],r=[],n=[]){Ki(n,t,r,i=>{it(Vr,()=>{e(...i.map(w))})})}function qr(e,t=0){var r=it(tt|t,e);return r}function ma(e,t=0){var r=it(jn|t,e);return r}function Re(e){return it(Ge|gr,e)}function ya(e){var t=e.teardown;if(t!==null){const r=Mt,n=V;Sa(!0),Ye(null);try{t.call(null)}catch(i){gt(i,e.parent)}finally{Sa(r),Ye(n)}}}function ci(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const i=r.ac;i!==null&&Hr(()=>{i.abort(Fr)});var n=r.next;(r.f&Et)!==0?r.parent=null:Se(r,t),r=n}}function Ao(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Ge)===0&&Se(t),t=r}}function Se(e,t=!0){var r=!1;(t||(e.f&Os)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Mo(e.nodes.start,e.nodes.end),r=!0),e.f|=_n,ci(e,t&&!r),Zr(e,0);var n=e.nodes&&e.nodes.t;if(n!==null)for(const a of n)a.stop();ya(e),e.f^=_n,e.f|=Te;var i=e.parent;i!==null&&i.first!==null&&wa(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Mo(e,t){for(;e!==null;){var r=e===t?null:Yr(e);e.remove(),e=r}}function wa(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Jt(e,t,r=!0){var n=[];e.f|=Gn,ba(e,n,!0);var i=()=>{r&&Se(e),t&&t()},a=n.length;if(a>0){var s=()=>--a||i();for(var o of n)o.out(s)}else i()}function ba(e,t,r){if((e.f&Me)===0){e.f^=Me;var n=e.nodes&&e.nodes.t;if(n!==null)for(const o of n)(o.is_global||r)&&t.push(o);for(var i=e.first;i!==null;){var a=i.next;if((i.f&Et)===0){var s=(i.f&It)!==0||(i.f&Ge)!==0&&(e.f&tt)!==0;ba(i,t,s?r:!1)}i=a}}}function $n(e){e.f&=~Gn,xa(e,!0)}function xa(e,t){if((e.f&Gn)===0&&(e.f&Me)!==0){e.f^=Me,(e.f&ye)===0&&(pe(e,_e),Kt.ensure().schedule(e));for(var r=e.first;r!==null;){var n=r.next,i=(r.f&It)!==0||(r.f&Ge)!==0;xa(r,i?t:!1),r=n}var a=e.nodes&&e.nodes.t;if(a!==null)for(const s of a)(s.is_global||t)&&s.in()}}function fi(e,t){if(e.nodes)for(var r=e.nodes.start,n=e.nodes.end;r!==null;){var i=r===n?null:Yr(r);t.append(r),r=i}}let En=!1,Mt=!1;function Sa(e){Mt=e}let V=null,at=!1;function Ye(e){V=e}let B=null;function qe(e){B=e}let mt=null;function ka(e){V!==null&&((V.f&mn)!==0||(V.f&$e)!==0)&&(mt??(mt=new Set)).add(e)}let Ie=null,Le=0,Ke=null;function To(e){Ke=e}let $a=1,er=0,tr=er;function Ea(e){tr=e}function Aa(){return++$a}function Kr(e){var t=e.f;if((t&_e)!==0)return!0;if((t&Xe)!==0){for(var r=e.deps,n=r.length,i=0;i<n;i++){var a=r[i];if(Kr(a)&&Qi(a),a.wv>e.wv)return!0}(t&rt)!==0&&xe===null&&pe(e,ye)}return!1}function Ma(e,t,r=!0){var n=e.reactions;if(n!==null&&!(mt!==null&&mt.has(e)))for(var i=0;i<n.length;i++){var a=n[i];(a.f&$e)!==0?Ma(a,t,!1):t===a&&(r?pe(a,_e):(a.f&ye)!==0&&pe(a,Xe),ni(a))}}function Ta(e){var t=Ie,r=Le,n=Ke,i=V,a=mt,s=le,o=at,l=tr,c=e.f;Ie=null,Le=0,Ke=null,V=(c&(Ge|Et))===0?e:null,mt=null,wr(e.ctx),at=!1,tr=++er,e.ac!==null&&(Hr(()=>{e.ac.abort(Fr)}),e.ac=null);try{e.f|=mn;var v=e.fn,d=v();e.f|=_r;var _=Na(e);if(Ur()&&Ke!==null&&!at&&_!==null&&(e.f&($e|Xe|_e))===0)for(var p=0;p<Ke.length;p++)Ma(Ke[p],e);if(i!==null&&i!==e){if(er++,i.deps!==null)for(let h=0;h<r;h+=1)i.deps[h].rv=er;if(t!==null)for(const h of t)h.rv=er;Ke!==null&&(n===null?n=Ke:n.push(...Ke))}return(e.f&Lt)!==0&&(e.f^=Lt),d}catch(h){return Na(e),xo(h)}finally{e.f^=mn,Ie=t,Le=r,Ke=n,V=i,mt=a,wr(s),at=o,tr=l}}function Na(e){var i;var t=e.deps,r=O==null?void 0:O.is_fork;if(Ie!==null){var n;if(r||Zr(e,Le),t!==null&&Le>0)for(t.length=Le+Ie.length,n=0;n<Ie.length;n++)t[Le+n]=Ie[n];else e.deps=t=Ie;if(si()&&(e.f&rt)!==0)for(n=Le;n<t.length;n++)((i=t[n]).reactions??(i.reactions=[])).push(e)}else!r&&t!==null&&Le<t.length&&(Zr(e,Le),t.length=Le);return t}function No(e,t){let r=t.reactions;if(r!==null){var n=me.call(r,e);if(n!==-1){var i=r.length-1;i===0?r=t.reactions=null:(r[n]=r[i],r.pop())}}if(r===null&&(t.f&$e)!==0&&(Ie===null||!Xt.call(Ie,t))){var a=t;(a.f&rt)!==0&&(a.f^=rt),a.v!==ge&&Kn(a),a.ac!==null&&Hr(()=>{a.ac.abort(Fr),a.ac=null,pe(a,_e)}),ho(a),Zr(a,0)}}function Zr(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)No(e,r[n])}function $r(e){var t=e.f;if((t&Te)===0){pe(e,ye);var r=B,n=En;B=e,En=(t&(Ge|Et))===0;try{(t&(tt|jn))!==0?Ao(e):ci(e),ya(e);var i=Ta(e);e.teardown=typeof i=="function"?i:null,e.wv=$a;var a}finally{En=n,B=r}}}function w(e){var t=e.f,r=(t&$e)!==0;if(V!==null&&!at){var n=B!==null&&(B.f&Te)!==0;if(!n&&(mt===null||!mt.has(e))){var i=V.deps;if((V.f&mn)!==0)e.rv<er&&(e.rv=er,Ie===null&&i!==null&&i[Le]===e?Le++:Ie===null?Ie=[e]:Ie.push(e));else{V.deps??(V.deps=[]),Xt.call(V.deps,e)||V.deps.push(e);var a=e.reactions;a===null?e.reactions=[V]:Xt.call(a,V)||a.push(V)}}}if(Mt&&ht.has(e))return ht.get(e);if(r){var s=e;if(Mt){var o=s.v;return((s.f&ye)===0&&s.reactions!==null||Pa(s))&&(o=Qn(s)),ht.set(s,o),o}var l=(s.f&rt)===0&&!at&&V!==null&&(En||(V.f&rt)!==0),c=(s.f&_r)===0;Kr(s)&&(l&&(s.f|=rt),Qi(s)),l&&!c&&(Ji(s),Oa(s))}if(xe!=null&&xe.has(e))return xe.get(e);if((e.f&Lt)!==0)throw e.v;return e.v}function Oa(e){if(e.f|=rt,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&$e)!==0&&(t.f&rt)===0&&(Ji(t),Oa(t))}function Pa(e){if(e.v===ge)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(ht.has(t)||(t.f&$e)!==0&&Pa(t))return!0;return!1}function Dt(e){var t=at;try{return at=!0,e()}finally{at=t}}function rr(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(dt in e)ui(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&dt in r&&ui(r)}}}function ui(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{ui(e[n],t)}catch{}const r=Un(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=zi(r);for(let i in n){const a=n[i].get;if(a)try{a.call(e)}catch{}}}}}function Oo(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Po=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Co(e){return Po.includes(e)}const Ro={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Io(e){return e=e.toLowerCase(),Ro[e]??e}const Lo=["touchstart","touchmove"];function zo(e){return Lo.includes(e)}const nr=Symbol("events"),Ca=new Set,di=new Set;function Do(e,t,r,n={}){function i(a){if(n.capture||hi.call(t,a),!a.cancelBubble)return Hr(()=>r==null?void 0:r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?(i.__removed=!1,vt(()=>{i.__removed||t.addEventListener(e,i,n)})):t.addEventListener(e,i,n),i}function ce(e,t,r){(t[nr]??(t[nr]={}))[e]=r}function Er(e){for(var t=0;t<e.length;t++)Ca.add(e[t]);for(var r of di)r(e)}let vi=null,pi=!1;function hi(e){var x,u;var t=this,r=t.ownerDocument,n=e.type,i=((x=e.composedPath)==null?void 0:x.call(e))||[],a=i[0]||e.target;vi=e,pi||(pi=!0,setTimeout(()=>{pi=!1,vi=null}));var s=0,o=vi===e&&e[nr];if(o){var l=i.indexOf(o);if(l!==-1&&(t===document||t===window)){e[nr]=t;return}var c=i.indexOf(t);if(c===-1)return;l<=c&&(s=l)}if(a=i[s]||e.target,a!==t){Li(e,"currentTarget",{configurable:!0,get(){return a||r}});var v=V,d=B;Ye(null),qe(null);try{for(var _,p=[];a!==null&&a!==t;){try{var h=(u=a[nr])==null?void 0:u[n];h!=null&&(!a.disabled||e.target===a)&&h.call(a,e)}catch(g){_?p.push(g):_=g}if(e.cancelBubble)break;s++,a=s<i.length?i[s]:null}if(_){for(let g of p)queueMicrotask(()=>{throw g});throw _}}finally{e[nr]=t,delete e.currentTarget,Ye(v),qe(d)}}}const _i=((as=globalThis==null?void 0:globalThis.window)==null?void 0:as.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Vo(e){return(_i==null?void 0:_i.createHTML(e))??e}function Ra(e){var t=ai("template");return t.innerHTML=Vo(e.replaceAll("<!>","<!---->")),t.content}function Qr(e,t){var r=B;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function be(e,t){var r=(t&Fs)!==0,n=(t&Us)!==0,i,a=!e.startsWith("<!>");return()=>{i===void 0&&(i=Ra(a?e:"<!>"+e),r||(i=Qt(i)));var s=n||ua?document.importNode(i,!0):i.cloneNode(!0);if(r){var o=Qt(s),l=s.lastChild;Qr(o,l)}else Qr(s,s);return s}}function Bo(e,t,r="svg"){var n=!e.startsWith("<!>"),i=`<${r}>${n?e:"<!>"+e}</${r}>`,a;return()=>{if(!a){var s=Ra(i),o=Qt(s);a=Qt(o)}var l=a.cloneNode(!0);return Qr(l,l),l}}function Fo(e,t){return Bo(e,t,"svg")}function Y(){var e=document.createDocumentFragment(),t=document.createComment(""),r=At();return e.append(t,r),Qr(t,r),e}function M(e,t){e!==null&&e.before(t)}function Uo(e){let t=0,r=zt(0),n;return()=>{si()&&(w(r),ga(()=>(t===0&&(n=Dt(()=>e(()=>Xr(r)))),t+=1,()=>{vt(()=>{t-=1,t===0&&(n==null||n(),n=void 0,Xr(r))})})))}}var Ho=It|gr;function jo(e,t,r,n){new Wo(e,t,r,n)}class Wo{constructor(t,r,n,i){I(this,ie);We(this,"parent");We(this,"is_pending",!1);We(this,"transform_error");I(this,Ze);I(this,Si,null);I(this,Qe);I(this,or);I(this,Oe);I(this,Ve,null);I(this,Pe,null);I(this,Be,null);I(this,bt,null);I(this,lr,0);I(this,jt,0);I(this,Rr,!1);I(this,sn,new Set);I(this,on,new Set);I(this,Pt,null);I(this,Cn,Uo(()=>(C(this,Pt,zt(f(this,lr))),()=>{C(this,Pt,null)})));var a;C(this,Ze,t),C(this,Qe,r),C(this,or,s=>{var o=B;o.b=this,o.f|=Wn,n(s)}),this.parent=B.b,this.transform_error=i??((a=this.parent)==null?void 0:a.transform_error)??(s=>s),C(this,Oe,qr(()=>{U(this,ie,Ci).call(this)},Ho))}defer_effect(t){qi(t,f(this,sn),f(this,on))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!f(this,Qe).pending}update_pending_count(t,r){U(this,ie,Ri).call(this,t,r),C(this,lr,f(this,lr)+t),!(!f(this,Pt)||f(this,Rr))&&(C(this,Rr,!0),vt(()=>{C(this,Rr,!1),f(this,Pt)&&kr(f(this,Pt),f(this,lr))}))}get_effect_pending(){return f(this,Cn).call(this),w(f(this,Pt))}error(t){if(!f(this,Qe).onerror&&!f(this,Qe).failed)throw t;O!=null&&O.is_fork?(f(this,Ve)&&O.skip_effect(f(this,Ve)),f(this,Pe)&&O.skip_effect(f(this,Pe)),f(this,Be)&&O.skip_effect(f(this,Be)),O.oncommit(()=>{U(this,ie,Ii).call(this,t)})):U(this,ie,Ii).call(this,t)}}Ze=new WeakMap,Si=new WeakMap,Qe=new WeakMap,or=new WeakMap,Oe=new WeakMap,Ve=new WeakMap,Pe=new WeakMap,Be=new WeakMap,bt=new WeakMap,lr=new WeakMap,jt=new WeakMap,Rr=new WeakMap,sn=new WeakMap,on=new WeakMap,Pt=new WeakMap,Cn=new WeakMap,ie=new WeakSet,Bc=function(){try{C(this,Ve,Re(()=>f(this,or).call(this,f(this,Ze))))}catch(t){this.error(t)}},Fc=function(t){const r=f(this,Qe).failed,{reset:n,invoke_onerror:i}=U(this,ie,Pi).call(this,t);vt(i),r&&C(this,Be,Re(()=>{r(f(this,Ze),()=>t,()=>n)}))},Pi=function(t){var r=!1,n=!1;const i=()=>{if(r){Xs();return}r=!0,n&&so(),f(this,Be)!==null&&Jt(f(this,Be),()=>{C(this,Be,null)}),U(this,ie,Fn).call(this,()=>{U(this,ie,Ci).call(this)})};return{reset:i,invoke_onerror:()=>{var s,o;try{n=!0,(o=(s=f(this,Qe)).onerror)==null||o.call(s,t,i),n=!1}catch(l){gt(l,f(this,Oe)&&f(this,Oe).parent)}}}},Uc=function(){const t=f(this,Qe).pending;t&&(this.is_pending=!0,C(this,Pe,Re(()=>t(f(this,Ze)))),vt(()=>{var r=C(this,bt,document.createDocumentFragment()),n=At(),i=!1;if(r.append(n),C(this,Ve,U(this,ie,Fn).call(this,()=>{try{return Re(()=>f(this,or).call(this,n))}catch(a){try{this.error(a),i=!0}catch(s){gt(s,f(this,Oe).parent)}return null}})),f(this,Ve)===null){C(this,bt,null),i&&U(this,ie,pn).call(this,O);return}f(this,jt)===0&&(f(this,Ze).before(r),C(this,bt,null),Jt(f(this,Pe),()=>{C(this,Pe,null)}),U(this,ie,pn).call(this,O))}))},Ci=function(){try{if(this.is_pending=this.has_pending_snippet(),C(this,jt,0),C(this,lr,0),C(this,Ve,Re(()=>{f(this,or).call(this,f(this,Ze))})),f(this,jt)>0){var t=C(this,bt,document.createDocumentFragment());fi(f(this,Ve),t);const r=f(this,Qe).pending;C(this,Pe,Re(()=>r(f(this,Ze))))}else U(this,ie,pn).call(this,O)}catch(r){this.error(r)}},pn=function(t){this.is_pending=!1,t.transfer_effects(f(this,sn),f(this,on))},Fn=function(t){var r=B,n=V,i=le;qe(f(this,Oe)),Ye(f(this,Oe)),wr(f(this,Oe).ctx);try{return Kt.ensure(),t()}finally{qe(r),Ye(n),wr(i)}},Ri=function(t,r){var n;if(!this.has_pending_snippet()){this.parent&&U(n=this.parent,ie,Ri).call(n,t,r);return}C(this,jt,f(this,jt)+t),f(this,jt)===0&&(U(this,ie,pn).call(this,r),f(this,Pe)&&Jt(f(this,Pe),()=>{C(this,Pe,null)}),f(this,bt)&&(f(this,Ze).before(f(this,bt)),C(this,bt,null)))},Ii=function(t){f(this,Ve)&&(Se(f(this,Ve)),C(this,Ve,null)),f(this,Pe)&&(Se(f(this,Pe)),C(this,Pe,null)),f(this,Be)&&(Se(f(this,Be)),C(this,Be,null));let r=f(this,Qe).failed;const n=i=>{const{reset:a,invoke_onerror:s}=U(this,ie,Pi).call(this,i);s(),r&&C(this,Be,U(this,ie,Fn).call(this,()=>{try{return Re(()=>{var o=B;o.b=this,o.f|=Wn,r(f(this,Ze),()=>i,()=>a)})}catch(o){return gt(o,f(this,Oe).parent),null}}))};vt(()=>{var i;try{i=this.transform_error(t)}catch(a){gt(a,f(this,Oe)&&f(this,Oe).parent);return}i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(n,a=>gt(a,f(this,Oe)&&f(this,Oe).parent)):n(i)})};function re(e,t){var r=t==null?"":typeof t=="object"?`${t}`:t;r!==(e[Br]??(e[Br]=e.nodeValue))&&(e[Br]=r,e.nodeValue=`${r}`)}function Go(e,t){return Xo(e,t)}const An=new Map;function Xo(e,{target:t,anchor:r,props:n={},events:i,context:a,intro:s=!0,transformError:o}){wo();var l=void 0,c=$o(()=>{var v=r??t.appendChild(At());jo(v,{pending:()=>{}},p=>{Yt({});var h=le;a&&(h.c=a),i&&(n.$$events=i),l=e(p,n)||qn(),qt()},o);var d=new Set,_=p=>{for(var h=0;h<p.length;h++){var x=p[h];if(!d.has(x)){d.add(x);var u=zo(x);for(const k of[t,document]){var g=An.get(k);g===void 0&&(g=new Map,An.set(k,g));var b=g.get(x);b===void 0?(k.addEventListener(x,hi,{passive:u}),g.set(x,1)):g.set(x,b+1)}}}};return _(hn(Ca)),di.add(_),()=>{var u;for(var p of d)for(const g of[t,document]){var h=An.get(g),x=h.get(p);--x==0?(g.removeEventListener(p,hi),h.delete(p),h.size===0&&An.delete(g)):h.set(p,x)}di.delete(_),v!==r&&((u=v.parentNode)==null||u.removeChild(v))}});return Yo.set(l,c),l}let Yo=new WeakMap;class gi{constructor(t,r=!0){We(this,"anchor");I(this,ct,new Map);I(this,xt,new Map);I(this,Fe,new Map);I(this,cr,new Set);I(this,ln,!0);I(this,cn,t=>{if(f(this,ct).has(t)){var r=f(this,ct).get(t),n=f(this,xt).get(r);if(n)$n(n),f(this,cr).delete(r);else{var i=f(this,Fe).get(r);i&&($n(i.effect),f(this,xt).set(r,i.effect),f(this,Fe).delete(r),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),n=i.effect)}for(const[a,s]of f(this,ct)){if(f(this,ct).delete(a),a===t)break;const o=f(this,Fe).get(s);o&&(Se(o.effect),f(this,Fe).delete(s))}for(const[a,s]of f(this,xt)){if(a===r||f(this,cr).has(a))continue;const o=()=>{if(Array.from(f(this,ct).values()).includes(a)){var c=document.createDocumentFragment();fi(s,c),c.append(At()),f(this,Fe).set(a,{effect:s,fragment:c})}else Se(s);f(this,cr).delete(a),f(this,xt).delete(a)};f(this,ln)||!n?(f(this,cr).add(a),Jt(s,o,!1)):o()}}});I(this,Rn,t=>{f(this,ct).delete(t);const r=Array.from(f(this,ct).values());for(const[n,i]of f(this,Fe))r.includes(n)||(Se(i.effect),f(this,Fe).delete(n))});this.anchor=t,C(this,ln,r)}ensure(t,r){var n=O,i=pa();if(r&&!f(this,xt).has(t)&&!f(this,Fe).has(t))if(i){var a=document.createDocumentFragment(),s=At();a.append(s),f(this,Fe).set(t,{effect:Re(()=>r(s)),fragment:a})}else f(this,xt).set(t,Re(()=>r(this.anchor)));if(f(this,ct).set(n,t),i){for(const[o,l]of f(this,xt))o===t?n.unskip_effect(l):n.skip_effect(l);for(const[o,l]of f(this,Fe))o===t?n.unskip_effect(l.effect):n.skip_effect(l.effect);n.oncommit(f(this,cn)),n.ondiscard(f(this,Rn))}else f(this,cn).call(this,n)}}ct=new WeakMap,xt=new WeakMap,Fe=new WeakMap,cr=new WeakMap,ln=new WeakMap,cn=new WeakMap,Rn=new WeakMap;function Vt(e,t,r=!1){var n=new gi(e),i=r?It:0;function a(s,o){n.ensure(s,o)}qr(()=>{var s=!1;t((o,l=0)=>{s=!0,a(l,o)}),s||a(-1,null)},i)}function Ia(e,t){return t}function qo(e,t,r){for(var n=[],i=t.length,a,s=t.length,o=0;o<i;o++){let d=t[o];Jt(d,()=>{if(a){if(a.pending.delete(d),a.done.add(d),a.pending.size===0){var _=e.outrogroups;mi(e,hn(a.done)),_.delete(a),_.size===0&&(e.outrogroups=null)}}else s-=1},!1)}if(s===0){var l=n.length===0&&r!==null&&e.pending.size===0;if(l){var c=r,v=c.parentNode;bo(v),v.append(c),e.items.clear()}mi(e,t,!l)}else a={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(a)}function mi(e,t,r=!0){var n;if(e.pending.size>0){n=new Set;for(const s of e.pending.values())for(const o of s)n.add(e.items.get(o).e)}for(var i=0;i<t.length;i++){var a=t[i];if(n!=null&&n.has(a)){a.f|=ut;const s=document.createDocumentFragment();fi(a,s)}else Se(t[i],r)}}var La;function Bt(e,t,r,n,i,a=null){var s=e,o=new Map,l=(t&ji)!==0;if(l){var c=e;s=c.appendChild(At())}var v=null,d=Zn(()=>{var k=r();return Q(k)?k:k==null?[]:hn(k)}),_,p=new Map,h=!0;function x(k){(b.effect.f&Te)===0&&(b.pending.delete(k),b.fallback=v,Ko(b,_,s,t,n),v!==null&&(_.length===0?(v.f&ut)===0?$n(v):(v.f^=ut,en(v,null,s)):Jt(v,()=>{v=null})))}function u(k){b.pending.delete(k)}var g=qr(()=>{_=w(d);for(var k=_.length,P=new Set,S=O,$=pa(),A=0;A<k;A+=1){var X=_[A],ee=n(X,A),de=h?null:o.get(ee);de?(de.v&&kr(de.v,X),de.i&&kr(de.i,A),$&&S.unskip_effect(de.e)):(de=Zo(o,h?s:La??(La=At()),X,ee,A,i,t,r),h||(de.e.f|=ut),o.set(ee,de)),P.add(ee)}if(k===0&&a&&!v&&(h?v=Re(()=>a(s)):(v=Re(()=>a(La??(La=At()))),v.f|=ut)),k>P.size&&Zs(),!h)if(p.set(S,P),$){for(const[Ue,Je]of o)P.has(Ue)||S.skip_effect(Je.e);S.oncommit(x),S.ondiscard(u)}else x(S);w(d)}),b={effect:g,items:o,pending:p,outrogroups:null,fallback:v};h=!1}function Jr(e){for(;e!==null&&(e.f&Ge)===0;)e=e.next;return e}function Ko(e,t,r,n,i){var de,Ue,Je,fr,Ir,ur,ft,St,dr;var a=(n&Is)!==0,s=t.length,o=e.items,l=Jr(e.effect.first),c,v=null,d,_=[],p=[],h,x,u,g;if(a)for(g=0;g<s;g+=1)h=t[g],x=i(h,g),u=o.get(x).e,(u.f&ut)===0&&((Ue=(de=u.nodes)==null?void 0:de.a)==null||Ue.measure(),(d??(d=new Set)).add(u));for(g=0;g<s;g+=1){if(h=t[g],x=i(h,g),u=o.get(x).e,e.outrogroups!==null)for(const He of e.outrogroups)He.pending.delete(u),He.done.delete(u);if((u.f&Me)!==0&&($n(u),a&&((fr=(Je=u.nodes)==null?void 0:Je.a)==null||fr.unfix(),(d??(d=new Set)).delete(u))),(u.f&ut)!==0)if(u.f^=ut,u===l)en(u,null,r);else{var b=v?v.next:l;u===e.effect.last&&(e.effect.last=u.prev),u.prev&&(u.prev.next=u.next),u.next&&(u.next.prev=u.prev),Ft(e,v,u),Ft(e,u,b),en(u,b,r),v=u,_=[],p=[],l=Jr(v.next);continue}if(u!==l){if(c!==void 0&&c.has(u)){if(_.length<p.length){var k=p[0],P;v=k.prev;var S=_[0],$=_[_.length-1];for(P=0;P<_.length;P+=1)en(_[P],k,r);for(P=0;P<p.length;P+=1)c.delete(p[P]);Ft(e,S.prev,$.next),Ft(e,v,S),Ft(e,$,k),l=k,v=$,g-=1,_=[],p=[]}else c.delete(u),en(u,l,r),Ft(e,u.prev,u.next),Ft(e,u,v===null?e.effect.first:v.next),Ft(e,v,u),v=u;continue}for(_=[],p=[];l!==null&&l!==u;)(c??(c=new Set)).add(l),p.push(l),l=Jr(l.next);if(l===null)continue}(u.f&ut)===0&&_.push(u),v=u,l=Jr(u.next)}if(e.outrogroups!==null){for(const He of e.outrogroups)He.pending.size===0&&(mi(e,hn(He.done)),(Ir=e.outrogroups)==null||Ir.delete(He));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||c!==void 0){var A=[];if(c!==void 0)for(u of c)(u.f&Me)===0&&A.push(u);for(;l!==null;)(l.f&Me)===0&&l!==e.fallback&&A.push(l),l=Jr(l.next);var X=A.length;if(X>0){var ee=(n&ji)!==0&&s===0?r:null;if(a){for(g=0;g<X;g+=1)(ft=(ur=A[g].nodes)==null?void 0:ur.a)==null||ft.measure();for(g=0;g<X;g+=1)(dr=(St=A[g].nodes)==null?void 0:St.a)==null||dr.fix()}qo(e,A,ee)}}a&&vt(()=>{var He,vr;if(d!==void 0)for(u of d)(vr=(He=u.nodes)==null?void 0:He.a)==null||vr.apply()})}function Zo(e,t,r,n,i,a,s,o){var l=(s&Cs)!==0?(s&Ls)===0?mo(r,!1,!1):zt(r):null,c=(s&Rs)!==0?zt(i):null;return{v:l,i:c,e:Re(()=>(a(t,l??r,c??i,o),()=>{e.delete(n)}))}}function en(e,t,r){if(e.nodes)for(var n=e.nodes.start,i=e.nodes.end,a=t&&(t.f&ut)===0?t.nodes.start:r;n!==null;){var s=Yr(n);if(a.before(n),n===i)return;n=s}}function Ft(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function ne(e,t,r,n,i){var o,l;if((o=t.$$host)!=null&&o.$$shadowRoot){const c=ai("slot");M(e,c);return}var a=(l=t.$$slots)==null?void 0:l[r],s=!1;a===!0&&(a=t.children,s=!0),a===void 0||a(e,s?()=>n:n)}function Qo(e,t,r){var n=new gi(e);qr(()=>{var i=t()??null;n.ensure(i,i&&(a=>r(a,i)))},It)}function Jo(e,t,r,n,i,a){var s=null,o=e,l=new gi(o,!1);qr(()=>{const c=t()||null;var v=Hs;if(c===null){l.ensure(null,null);return}return l.ensure(c,d=>{if(c){if(s=ai(c,v),Qr(s,s),n){var _=null,p=s.appendChild(At());n(s,p),_==null||_.remove()}B.nodes.end=s,d.before(s)}}),()=>{}},It),oi(()=>{})}function el(e,t){var r=void 0,n;ma(()=>{r!==(r=t())&&(n&&(Se(n),n=null),r&&(n=Re(()=>{li(()=>r(e))})))})}function za(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=za(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function tl(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=za(e))&&(n&&(n+=" "),n+=t);return n}function ir(e){return typeof e=="object"?tl(e):e??""}const Da=[...` 	
\r\f \v\uFEFF`];function rl(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var i of Object.keys(r))if(r[i])n=n?n+" "+i:i;else if(n.length)for(var a=i.length,s=0;(s=n.indexOf(i,s))>=0;){var o=s+a;(s===0||Da.includes(n[s-1]))&&(o===n.length||Da.includes(n[o]))?n=(s===0?"":n.substring(0,s))+n.substring(o+1):s=o}}return n===""?null:n}function Va(e,t=!1){var r=t?" !important;":";",n="";for(var i of Object.keys(e)){var a=e[i];a!=null&&a!==""&&(n+=" "+i+": "+a+r)}return n}function yi(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function nl(e,t){if(t){var r="",n,i;if(Array.isArray(t)?(n=t[0],i=t[1]):n=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var a=!1,s=0,o=!1,l=[];n&&l.push(...Object.keys(n).map(yi)),i&&l.push(...Object.keys(i).map(yi));var c=0,v=-1;const x=e.length;for(var d=0;d<x;d++){var _=e[d];if(o?_==="/"&&e[d-1]==="*"&&(o=!1):a?a===_&&(a=!1):_==="/"&&e[d+1]==="*"?o=!0:_==='"'||_==="'"?a=_:_==="("?s++:_===")"&&s--,!o&&a===!1&&s===0){if(_===":"&&v===-1)v=d;else if(_===";"||d===x-1){if(v!==-1){var p=yi(e.substring(c,v).trim());if(!l.includes(p)){_!==";"&&d++;var h=e.substring(c,d).trim();r+=" "+h+";"}}c=d+1,v=-1}}}}return n&&(r+=Va(n)),i&&(r+=Va(i,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Ne(e,t,r,n,i,a){var s=e[Xn];if(s!==r||s===void 0){var o=rl(r,n,a);o==null?e.removeAttribute("class"):t?e.className=o:e.setAttribute("class",o),e[Xn]=r}else if(a&&i!==a)for(var l in a){var c=!!a[l];(i==null||c!==!!i[l])&&e.classList.toggle(l,c)}return a}function wi(e,t={},r,n){for(var i in r){var a=r[i];t[i]!==a&&(r[i]==null?e.style.removeProperty(i):e.style.setProperty(i,a,n))}}function il(e,t,r,n){var i=e[Yn];if(i!==t){var a=nl(t,n);a==null?e.removeAttribute("style"):e.style.cssText=a,e[Yn]=t}else n&&(Array.isArray(n)?(wi(e,r==null?void 0:r[0],n[0]),wi(e,r==null?void 0:r[1],n[1],"important")):wi(e,r,n));return n}function Ba(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Fa(e,t){var r=!("__defaultValue"in e);!r&&e.__defaultValue===t||(e.__defaultValue=t,Ua(e,!r||"__value"in e))}function Ua(e,t){var r=e.__defaultValue,n=e.multiple,i=n?r??[]:null;if(!(n&&!Q(i))){var a=e.selectedIndex,s=t&&n?new Set(e.selectedOptions):null;for(var o of e.options){var l=bi(o);Ba(o,n?i.includes(l):ca(l,r))}if(t)if(s!==null)for(o of e.options){var c=s.has(o);o.selected!==c&&(o.selected=c)}else e.selectedIndex!==a&&(e.selectedIndex=a)}}function Ut(e,t,r=!1){if(e.multiple){if(t==null)return;if(!Q(t))return Gs();for(var n of e.options)n.selected=t.includes(bi(n));return}for(n of e.options){var i=bi(n);if(ca(i,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function Ar(e){var t=new MutationObserver(r=>{r.every(al)||("__defaultValue"in e&&Ua(e,!1),"__value"in e&&Ut(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),oi(()=>{t.disconnect()})}function bi(e){return"__value"in e?e.__value:e.value}function al(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(r=>r.nodeName==="SELECTEDCONTENT")}return!1}const tn=Symbol("class"),rn=Symbol("style"),Ha=Symbol("is custom element"),ja=Symbol("is html"),sl=wn?"input":"INPUT",ol=wn?"option":"OPTION",Wa=wn?"select":"SELECT",ll=wn?"progress":"PROGRESS";function Mn(e,t){var r=Tn(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==ll)||(e.value=t??"")}function cl(e,t){var r=Tn(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function Ee(e,t,r,n){var i=Tn(e);i[t]!==(i[t]=r)&&(t==="loading"&&(e[Ps]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Ya(e).has(t)?e[t]=r:e.setAttribute(t,r))}function fl(e,t,r,n,i=!1,a=!1){var s=Tn(e),o=s[Ha],l=!s[ja],c=t||{},v=e.nodeName===ol,d=e.nodeName===Wa;for(var _ in t)!(_ in r)&&_[0]+_[1]!=="$$"&&(r[_]=null);r.class?r.class=ir(r.class):r[tn]&&(r.class=null),r[rn]&&(r.style??(r.style=null));var p=Ya(e);if(e.nodeName===sl&&"type"in r&&("value"in r||"__value"in r)){var h=r.type;(h!==c.type||h===void 0&&e.hasAttribute("type"))&&(c.type=h,Ee(e,"type",h))}for(const S in r){let $=r[S];if(v&&S==="value"&&$==null){e.value=e.__value="",c[S]=$;continue}if(S==="class"){var x=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ne(e,x,$,n,t==null?void 0:t[tn],r[tn]),c[S]=$,c[tn]=r[tn];continue}if(S==="style"){il(e,$,t==null?void 0:t[rn],r[rn]),c[S]=$,c[rn]=r[rn];continue}var u=c[S];if(!($===u&&!($===void 0&&e.hasAttribute(S)))){c[S]=$;var g=S[0]+S[1];if(g!=="$$")if(g==="on"){const A={},X="$$"+S;let ee=S.slice(2);var b=Co(ee);if(Oo(ee)&&(ee=ee.slice(0,-7),A.capture=!0),!b&&u){if($!=null)continue;e.removeEventListener(ee,c[X],A),c[X]=null}if(b)ce(ee,e,$),Er([ee]);else if($!=null){let de=function(Ue){c[S].call(this,Ue)};c[X]=Do(ee,e,de,A)}}else if(S==="style")Ee(e,S,$);else if(S==="autofocus")fo(e,!!$);else if(!o&&(S==="__value"||S==="value"&&$!=null))e.value=e.__value=$;else if(S==="selected"&&v)Ba(e,$);else{var k=S;l||(k=Io(k));var P=k==="defaultValue"||k==="defaultChecked";if(d&&k==="defaultValue")continue;if($==null&&!o&&!P)if(s[S]=null,k==="value"||k==="checked"){let A=e;const X=t===void 0;if(k==="value"){let ee=A.defaultValue;A.removeAttribute(k),A.defaultValue=ee,A.value=A.__value=X?ee:null}else{let ee=A.defaultChecked;A.removeAttribute(k),A.defaultChecked=ee,A.checked=X?ee:!1}}else e.removeAttribute(S);else P||(o||typeof $!="string")&&p.has(k)?(e[k]=$,k in s&&(s[k]=ge)):typeof $!="function"&&Ee(e,k,$)}}}return c}function Ga(e,t,r=[],n=[],i=[],a,s=!1,o=!1){Ki(i,r,n,l=>{var c=void 0,v={},d=e.nodeName===Wa,_=!1;if(ma(()=>{var h=t(...l.map(w)),x=fl(e,c,h,a,s,o);if(_&&d){var u=e;"defaultValue"in h&&Fa(u,h.defaultValue),"value"in h&&Ut(u,h.value)}for(let b of Object.getOwnPropertySymbols(v))h[b]||Se(v[b]);for(let b of Object.getOwnPropertySymbols(h)){var g=h[b];b.description===js&&(!c||g!==c[b])&&(v[b]&&Se(v[b]),v[b]=Re(()=>el(e,()=>g))),x[b]=g}c=x}),d){var p=e;li(()=>{var h=c;"defaultValue"in h&&Fa(p,h.defaultValue),Ut(p,h.value,!0),Ar(p)})}_=!0})}function Tn(e){return e[yn]??(e[yn]={[Ha]:e.nodeName.includes("-"),[ja]:e.namespaceURI===Gi})}var Xa=new Map;function Ya(e){var t=e.getAttribute("is")||e.nodeName,r=Xa.get(t);if(r)return r;Xa.set(t,r=new Set);for(var n,i=e,a=Element.prototype;a!==i;){n=zi(i);for(var s in n)n[s].set&&s!=="innerHTML"&&s!=="textContent"&&s!=="innerText"&&r.add(s);i=Un(i)}return r}function xi(e,t){return e===t||(e==null?void 0:e[dt])===t}function ul(e=qn(),t,r,n){var i=le.r,a=B;return li(()=>{var s,o;return ga(()=>{s=o,o=[],Dt(()=>{xi(r(...o),e)||(t(e,...o),s&&xi(r(...s),e)&&t(null,...s))})}),()=>{let l=a;for(;l!==i&&l.parent!==null&&l.parent.f&_n;)l=l.parent;const c=()=>{o&&xi(r(...o),e)&&t(null,...o)},v=l.teardown;l.teardown=()=>{c(),v==null||v()}}}),e}function dl(e=!1){const t=le,r=t.l.u;if(!r)return;let n=()=>rr(t.s);if(e){let i=0,a={};const s=xr(()=>{let o=!1;const l=t.s;for(const c in l)l[c]!==a[c]&&(a[c]=l[c],o=!0);return o&&i++,i});n=()=>w(s)}r.b.length&&ko(()=>{qa(t,n),Hn(r.b)}),kn(()=>{const i=Dt(()=>r.m.map(Ns));return()=>{for(const a of i)typeof a=="function"&&a()}}),r.a.length&&kn(()=>{qa(t,n),Hn(r.a)})}function qa(e,t){if(e.l.s)for(const r of e.l.s)w(r);t()}let Nn=!1;function vl(e){var t=Nn;try{return Nn=!1,[e(),Nn]}finally{Nn=t}}const pl={get(e,t){if(!e.exclude.includes(t))return w(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var n=B;try{qe(e.parent_effect),e.special[t]=st({get[t](){return e.props[t]}},t,Wi)}finally{qe(n)}}return e.special[t](r),sa(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),sa(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function J(e,t){return new Proxy({props:e,exclude:t,special:{},version:zt(0),parent_effect:B},pl)}const hl={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Dr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let i=e.props[n];Dr(i)&&(i=i());const a=Rt(i,t);if(a&&a.set)return a.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Dr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const i=Rt(n,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===dt||t===Hi)return!1;for(let r of e.props)if(Dr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Dr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function ae(...e){return new Proxy({props:e},hl)}function st(e,t,r,n){var P;var i=!yr||(r&Ds)!==0,a=(r&Vs)!==0,s=(r&Bs)!==0,o=n,l=!0,c=void 0,v=()=>s&&i?(c??(c=xr(n)),w(c)):(l&&(l=!1,o=s?Dt(n):n),o);let d;if(a){var _=dt in e||Hi in e;d=((P=Rt(e,t))==null?void 0:P.set)??(_&&t in e?S=>e[t]=S:void 0)}var p,h=!1;a?[p,h]=vl(()=>e[t]):p=e[t],p===void 0&&n!==void 0&&(p=v(),d&&(i&&ro(),d(p)));var x;if(i?x=()=>{var S=e[t];return S===void 0?v():(l=!0,S)}:x=()=>{var S=e[t];return S!==void 0&&(o=void 0),S===void 0?o:S},i&&(r&Wi)===0)return x;if(d){var u=e.$$legacy;return(function(S,$){return arguments.length>0?((!i||!$||u||h)&&d($?x():S),S):x()})}var g=!1,b=((r&zs)!==0?xr:Zn)(()=>(g=!1,x()));a&&w(b);var k=B;return(function(S,$){if(arguments.length>0){const A=$?w(b):i&&a?_t(S):S;return T(b,A),g=!0,o!==void 0&&(o=A),S}return Mt&&g||(k.f&Te)!==0?b.v:w(b)})}function Ka(e){le===null&&qs(),yr&&le.l!==null?_l(le).m.push(e):kn(()=>{const t=Dt(e);if(typeof t=="function")return t})}function _l(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const gl="5";typeof window<"u"&&((ss=window.__svelte??(window.__svelte={})).v??(ss.v=new Set)).add(gl);const Z=_t({ready:!1,cleanScreen:!1,panelOpen:!0,settingsOpen:!1,startupOpen:!0,focusSection:null,focusNonce:0,status:{}});function ml(e){Z.panelOpen=!0,Z.focusSection=e,Z.focusNonce++}const ze=_t({});function Za(e){try{return structuredClone(e)}catch{return JSON.parse(JSON.stringify(e))}}function he(e){var t,r,n;if(e==null)return e;try{return((n=(r=(t=window.XRA)==null?void 0:t.i18n)==null?void 0:r.t)==null?void 0:n.call(r,e))??e}catch{return e}}function yt(e,t){const r=e.split(".");let n=ze;for(const i of r){if(n==null)return t;n=n[i]}return n===void 0?t:n}function yl(e){var r,n,i,a,s,o,l,c;const t=window.XRA;if(t){if(e.startsWith("background.")){(n=(r=t.background)==null?void 0:r.apply)==null||n.call(r);return}if(e==="ui.language"){(a=(i=t.i18n)==null?void 0:i.setLanguage)==null||a.call(i,ze.ui.language);return}if(e==="ui.preview_wireframe"){typeof t.applyMocapWireframeVisibility=="function"&&t.applyMocapWireframeVisibility();return}if(e.startsWith("performance.")){window.XRA_render_fps_limit=Number(ze.performance.render_fps??60),window.XRA_gpu_preference=String(ze.performance.gpu_preference||"default"),window.XRA_preserve_drawing_buffer=ze.performance.preserve_drawing_buffer!==!1,window.XRA_antialias=ze.performance.antialias!=="off",(o=(s=t.events)==null?void 0:s.emit)==null||o.call(s,"performance",ze.performance);return}(c=(l=t.events)==null?void 0:l.emit)==null||c.call(l,"config-change",{path:e,value:yt(e)})}}function Tt(e,t){var a,s;const r=window.XRA,n=e.split(".");let i=ze;for(let o=0;o<n.length-1;o++)i[n[o]]==null&&(i[n[o]]={}),i=i[n[o]];if(i[n[n.length-1]]=t,r!=null&&r.config){let o=r.config;for(let l=0;l<n.length-1;l++)o[n[l]]==null&&(o[n[l]]={}),o=o[n[l]];o[n[n.length-1]]=t}yl(e);try{(s=(a=r==null?void 0:r.profileService)==null?void 0:a.save)==null||s.call(a)}catch{}}function On(){var e,t,r;Z.cleanScreen=!Z.cleanScreen,document.body.classList.toggle("xra-total-clean-screen",Z.cleanScreen);try{(r=(t=(e=window.XRA)==null?void 0:e.ui)==null?void 0:t.setHidden)==null||r.call(t,Z.cleanScreen)}catch{}}function wl(){var e;try{Object.assign(ze,Za(((e=window.XRA)==null?void 0:e.config)||{}))}catch{}}function Qa(){var e;try{const t=(e=window.SA_bridge)==null?void 0:e.backend;t&&typeof t.status=="function"&&(Z.status=t.status()||{})}catch{}}function bl(){const e=()=>window.XRA&&window.XRA.config?(Object.assign(ze,Za(window.XRA.config)),Z.ready=!0,Qa(),window.addEventListener("keydown",t=>{t.key==="Escape"&&Z.cleanScreen&&(t.preventDefault(),On())},!0),!0):!1;if(!e()){const t=setInterval(()=>{e()&&clearInterval(t)},200)}}const xl={camera:{title:"Camera",icon:"Camera"},devices:{title:"Devices",icon:"SlidersHorizontal"},pose_model:{title:"Pose model",icon:"PersonStanding"},performance:{title:"Performance",icon:"Zap"},tracking:{title:"Motion capture",icon:"Activity"},body:{title:"Body",icon:"PersonStanding"},collider:{title:"Body collider",icon:"Shield"},lip:{title:"Audio & Lip-sync",icon:"Mic"},background:{title:"Background",icon:"Image"},avatar:{title:"Character position (avatar only)",icon:"User"},second_avatar:{title:"Remote avatar (Studio Link)",icon:"Globe"},stage:{title:"3D Stage & Environment",icon:"Landmark"},recorder:{title:"Recording / capture",icon:"Video"},visual_effects:{title:"Visual effects",icon:"Sparkles"},debug:{title:"Diagnostics",icon:"Bug"},ui:{title:"UI & overlays",icon:"Monitor"}},Ja=["performance","tracking","body","collider","lip","background","stage","avatar","second_avatar","recorder","visual_effects","debug","ui","camera","devices","pose_model"],Sl=new Set(["left_settings","_custom_","_excluded_"]),kl=new Set(["camera.view_presets","camera.selected_view_preset","ui.preview_video","ui.preview_debug","performance.auto_last_result","recorder.output_dir"]);function es(e){const t=String(e).replace(/_/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").trim();return t.charAt(0).toUpperCase()+t.slice(1)}const $l={"ui.language":{type:"select",options:()=>{var e,t;return((t=(e=window.XRA)==null?void 0:e.i18n)==null?void 0:t.LANGUAGES)||[["en","English"]]}},"background.mode":{type:"select",options:[["color","Color"],["image","Image"],["none","None (transparent · OBS)"]]},"background.color":{type:"color"},"background.path":{type:"text"},"ui.preview_wireframe":{type:"tristate",label:"Mocap wireframe"},"performance.tracking_pipeline":{type:"select",label:"Tracking mode",options:[["FULL_BODY","Full Body"],["FACE","Face only"],["UPPER_BODY","Upper body"]]},"performance.render_resolution":{type:"select",options:[["720p","720p (HD · GPU Saving)"],["1080p","1080p (Full HD · Recommended)"],["1440p","1440p (2K · High resolution)"]]},"performance.render_fps":{type:"slider",min:15,max:240,step:1},"performance.gpu_preference":{type:"select",label:"Graphics card (GPU)",options:[["default","Default"],["high-performance","Dedicated GPU (High Performance)"],["low-power","Integrated GPU (Low Power)"]]},"performance.shadows":{type:"select",options:[["auto","Auto"],["on","Enabled"],["off","Disabled (GPU saving)"]]},"performance.antialias":{type:"select",label:"Anti-Aliasing (AA)",options:[["auto","Enabled (Hardware MSAA · Recommended)"],["off","Disabled"]]},"performance.spring_bone":{type:"select",label:"Hair/cloth physics (Spring Bone)",options:[["full","Full (every frame)"],["half","Half (1 frame out of 2 · Saving)"],["off","Off"]]},"performance.infer_mode":{type:"select",options:[["native","Native (Auto)"],["640x360","640×360 (Recommended · 30 FPS smooth)"],["640x480","640×480 (Standard 4:3 format)"],["1280x720","1280×720 (HD 720p · High precision)"]]},"performance.pose_fps":{type:"slider",min:5,max:30,step:1},"performance.hand_fps":{type:"slider",min:5,max:30,step:1},"performance.min_tracking_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_pose_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_face_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_joint_confidence":{type:"slider",min:.05,max:1,step:.05},"tracking.hand_recovery_mode":{type:"select",options:[["normal","Normal"],["aggressive","Aggressive"],["off","Off"]]},"tracking.hand_detection_sensitivity":{type:"select",options:[["high","High"],["normal","Normal"],["low","Low"]]},"tracking.stabilize_hand_percent":{type:"slider",min:0,max:100,step:1},"tracking.stabilize_arm":{type:"slider",min:0,max:100,step:1},"tracking.stabilize_arm_time":{type:"slider",min:0,max:2,step:.05},"tracking.native_smoothing":{type:"slider",min:0,max:1,step:.01},"tracking.body_bend_reduction":{type:"slider",min:0,max:1,step:.01},"tracking.upper_body_guard_strength":{type:"slider",min:0,max:1,step:.01},"tracking.guard_jump_deg":{type:"slider",min:5,max:120,step:1},"tracking.guard_hold_ms":{type:"slider",min:0,max:2e3,step:10},"tracking.guard_reacquire_deg":{type:"slider",min:5,max:120,step:1},"tracking.adaptive_smoothing_strength":{type:"slider",min:0,max:1,step:.01},"tracking.guard_confidence_min":{type:"slider",min:0,max:1,step:.01},"tracking.guard_release_ms":{type:"slider",min:0,max:2e3,step:10},"tracking.guard_mode":{type:"select",options:[["off","Off"],["auto","Auto"]]},"tracking.desk_torso_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_hips_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_legs_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_max_yaw_deg":{type:"slider",min:0,max:90,step:1},"tracking.desk_max_pitch_deg":{type:"slider",min:0,max:90,step:1},"tracking.desk_max_roll_deg":{type:"slider",min:0,max:90,step:1},"body.anchor_strength":{type:"slider",min:0,max:1,step:.01},"body.transition_ms":{type:"slider",min:0,max:2e3,step:10},"avatar.offset_x":{type:"slider",min:-5,max:5,step:.01},"avatar.offset_y":{type:"slider",min:-5,max:5,step:.01},"avatar.offset_z":{type:"slider",min:-5,max:5,step:.01},"avatar.rotation_y":{type:"slider",min:-180,max:180,step:1},"second_avatar.offset_x":{type:"slider",min:-20,max:20,step:.1},"second_avatar.offset_y":{type:"slider",min:-10,max:10,step:.1},"second_avatar.offset_z":{type:"slider",min:-10,max:10,step:.1},"second_avatar.rotation_y":{type:"slider",min:-180,max:180,step:1},"stage.scale":{type:"slider",min:.1,max:5,step:.01},"stage.rotation_x":{type:"slider",min:-180,max:180,step:1},"stage.rotation_y":{type:"slider",min:-180,max:180,step:1},"stage.rotation_z":{type:"slider",min:-180,max:180,step:1},"stage.offset_x":{type:"slider",min:-10,max:10,step:.05},"stage.offset_y":{type:"slider",min:-10,max:10,step:.05},"stage.offset_z":{type:"slider",min:-10,max:10,step:.05},"stage.scene_zoom":{type:"slider",min:.5,max:3,step:.01},"stage.lights_intensity":{type:"slider",min:0,max:3,step:.05},"collider.preset":{type:"select",options:[["CUSTOM","Custom"],["NONE","None"]]},"collider.reaction":{type:"select",options:[["z_push","Z push"],["bounce","Bounce"],["block","Block"]]},"collider.head":{type:"slider",min:0,max:200,step:1},"collider.chest":{type:"slider",min:0,max:200,step:1},"collider.waist":{type:"slider",min:0,max:200,step:1},"collider.hip":{type:"slider",min:0,max:200,step:1},"collider.front_clearance":{type:"slider",min:0,max:50,step:1},"lip.analysis_fps":{type:"slider",min:5,max:60,step:1},"lip.fft_size":{type:"select",label:"FFT size",options:[["256","256"],["512","512"],["1024","1024"],["2048","2048"]]},"lip.mic_mix":{type:"slider",min:0,max:1,step:.01},"lip.threshold":{type:"slider",min:0,max:.2,step:.001},"lip.response_gain":{type:"slider",min:0,max:3,step:.05},"lip.vowel_emphasis":{type:"slider",min:0,max:3,step:.05},"recorder.mode":{type:"select",label:"Recording source",options:[["video_audio","Video + Audio"],["video","Video only"],["audio","Audio only"]]},"recorder.audio_only_variant":{type:"select",label:"Audio only mode",options:[["both","Processed + RAW"],["processed","Processed"],["raw","RAW"]]},"recorder.capture_source":{type:"select",label:"Output source",options:[["classic_v74","Classic output · recommended"],["clean_scene","Clean scene output · experimental (no UI)"],["native_xr","XR native video only · fallback"]]},"recorder.output_format":{type:"select",options:[["webm","WebM"],["mp4","MP4"]]},"recorder.audio_profile":{type:"select",options:[["podcast","Podcast"],["call","Call (Browser echo/noise filters)"]]},"recorder.hardware_encode":{type:"select",options:[["auto","Auto"],["on","On"],["off","Off (CPU)"]]},"recorder.width":{type:"slider",min:320,max:3840,step:2},"recorder.height":{type:"slider",min:240,max:2160,step:2},"recorder.fps":{type:"slider",min:15,max:60,step:1},"recorder.gate_threshold_db":{type:"slider",min:-80,max:-5,step:.5},"recorder.gate_hold_ms":{type:"slider",min:0,max:1e3,step:10},"recorder.gate_release_ms":{type:"slider",min:0,max:1e3,step:10},"recorder.video_bps":{type:"slider",min:5e5,max:2e7,step:1e5},"recorder.audio_bps":{type:"slider",min:32e3,max:32e4,step:8e3},"recorder.segment_minutes":{type:"select",options:[["0","Off"],["30","Every 30 min"],["60","Every 60 min"]]},"recorder.raw_audio_format":{type:"select",options:[["flac","FLAC (lossless)"],["wav","WAV (large)"]]},"recorder.filename":{type:"text"},"camera.optimized":{type:"toggle"},"camera.width":{type:"slider",min:160,max:1920,step:2},"camera.height":{type:"slider",min:120,max:1080,step:2},"camera.fps":{type:"slider",min:5,max:60,step:1}};function El(e){const t=[];for(const[r,n]of Object.entries(e||{})){if(Sl.has(r)||!n||typeof n!="object"||Array.isArray(n))continue;const i=xl[r]||{},a=[];for(const[s,o]of Object.entries(n)){const l=`${r}.${s}`;if(kl.has(l))continue;const c=$l[l]||{};if(c.hidden||o!==null&&typeof o=="object")continue;const v=c.type||(typeof o=="boolean"?"toggle":typeof o=="number"?"number":"text");a.push({type:v,path:l,label:c.label||es(s),min:c.min,max:c.max,step:c.step,options:c.options})}a.length&&t.push({id:r,title:i.title||es(r),icon:i.icon||"⚙",controls:a})}return t.sort((r,n)=>{const i=Ja.indexOf(r.id),a=Ja.indexOf(n.id);return(i<0?999:i)-(a<0?999:a)}),t}var Al=be("<option> </option>"),Ml=be("<select></select>"),Tl=be("<select><option> </option><option> </option></select>"),Nl=be('<input type="range"/> <span class="xra-val"> </span>',1),Ol=be('<input type="checkbox"/>'),Pl=be('<input type="color"/>'),Cl=be('<input type="number"/>'),Rl=be('<input type="text"/>'),Il=be('<label class="xra-row"><span class="xra-row-label"> </span> <!></label>');function Ll(e,t){Yt(t,!0);const r=pt(()=>typeof t.control.options=="function"?t.control.options():t.control.options||[]),n=u=>u===!1?"off":"auto",i=u=>u==="off"?!1:null;var a=Il(),s=z(a),o=te(s,!0),l=D(s,2);{var c=u=>{var g=Ml();Bt(g,21,()=>w(r),Ia,(k,P)=>{var S=Al(),$=te(S,!0),A={};we(X=>{re($,X),A!==(A=w(P)[0])&&(S.value=(S.__value=A)??"")},[()=>he(w(P)[1])]),M(k,S)});var b;Ar(g),we(k=>{b!==(b=k)&&(g.value=(g.__value=b)??"",Ut(g,b))},[()=>yt(t.control.path)]),ce("change",g,k=>Tt(t.control.path,k.currentTarget.value)),M(u,g)},v=u=>{var g=Tl(),b=z(g),k=te(b,!0);b.value=b.__value="auto";var P=D(b),S=te(P,!0);P.value=P.__value="off";var $;Ar(g),we((A,X,ee)=>{re(k,A),re(S,X),$!==($=ee)&&(g.value=(g.__value=$)??"",Ut(g,$))},[()=>he("Auto (follow tracking)"),()=>he("Off"),()=>n(yt(t.control.path))]),ce("change",g,A=>Tt(t.control.path,i(A.currentTarget.value))),M(u,g)},d=u=>{var g=Nl(),b=W(g),k=D(b,2),P=te(k,!0);we((S,$)=>{Ee(b,"min",t.control.min),Ee(b,"max",t.control.max),Ee(b,"step",t.control.step),Mn(b,S),re(P,$)},[()=>yt(t.control.path,t.control.min),()=>yt(t.control.path)]),ce("input",b,S=>Tt(t.control.path,Number(S.currentTarget.value))),M(u,g)},_=u=>{var g=Ol();we(b=>cl(g,b),[()=>!!yt(t.control.path)]),ce("change",g,b=>Tt(t.control.path,b.currentTarget.checked)),M(u,g)},p=u=>{var g=Pl();we(b=>Mn(g,b),[()=>yt(t.control.path)]),ce("input",g,b=>Tt(t.control.path,b.currentTarget.value)),M(u,g)},h=u=>{var g=Cl();we(b=>{Ee(g,"step",t.control.step||"any"),Mn(g,b)},[()=>yt(t.control.path,0)]),ce("input",g,b=>Tt(t.control.path,Number(b.currentTarget.value))),M(u,g)},x=u=>{var g=Rl();we(b=>Mn(g,b),[()=>yt(t.control.path,"")]),ce("change",g,b=>Tt(t.control.path,b.currentTarget.value)),M(u,g)};Vt(l,u=>{t.control.type==="select"?u(c):t.control.type==="tristate"?u(v,1):t.control.type==="slider"?u(d,2):t.control.type==="toggle"?u(_,3):t.control.type==="color"?u(p,4):t.control.type==="number"?u(h,5):t.control.type==="text"&&u(x,6)})}we(u=>re(o,u),[()=>he(t.control.label)]),M(e,a),qt()}Er(["change","input"]),oo();/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const zl={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Dl=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const ts=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();var Vl=Fo("<svg><!><!></svg>");function se(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]),n=J(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Yt(t,!1);let i=st(t,"name",8,void 0),a=st(t,"color",8,"currentColor"),s=st(t,"size",8,24),o=st(t,"strokeWidth",8,2),l=st(t,"absoluteStrokeWidth",8,!1),c=st(t,"iconNode",24,()=>[]);dl();var v=Vl();Ga(v,(p,h,x)=>({...zl,...p,...n,width:s(),height:s(),stroke:a(),"stroke-width":h,class:x}),[()=>Dl(n)?void 0:{"aria-hidden":"true"},()=>(rr(l()),rr(o()),rr(s()),Dt(()=>l()?Number(o())*24/Number(s()):o())),()=>(rr(ts),rr(i()),rr(r),Dt(()=>ts("lucide-icon","lucide",i()?`lucide-${i()}`:"",r.class)))]);var d=z(v);Bt(d,1,c,Ia,(p,h)=>{var x=pt(()=>Bi(w(h),2));let u=()=>w(x)[0],g=()=>w(x)[1];var b=Y(),k=W(b);Jo(k,u,!0,(P,S)=>{Ga(P,()=>({...g()}))}),M(p,b)});var _=D(d);ne(_,t,"default",{}),M(e,v),qt()}function Bl(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];se(e,ae({name:"camera"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Y(),o=W(s);ne(o,t,"default",{}),M(i,s)},$$slots:{default:!0}}))}function Fl(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M10 5H3"}],["path",{d:"M12 19H3"}],["path",{d:"M14 3v4"}],["path",{d:"M16 17v4"}],["path",{d:"M21 12h-9"}],["path",{d:"M21 19h-5"}],["path",{d:"M21 5h-7"}],["path",{d:"M8 10v4"}],["path",{d:"M8 12H3"}]];se(e,ae({name:"sliders-horizontal"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Y(),o=W(s);ne(o,t,"default",{}),M(i,s)},$$slots:{default:!0}}))}function Ul(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"5",r:"1"}],["path",{d:"m9 20 3-6 3 6"}],["path",{d:"m6 8 6 2 6-2"}],["path",{d:"M12 10v4"}]];se(e,ae({name:"person-standing"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Y(),o=W(s);ne(o,t,"default",{}),M(i,s)},$$slots:{default:!0}}))}function Hl(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];se(e,ae({name:"zap"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Y(),o=W(s);ne(o,t,"default",{}),M(i,s)},$$slots:{default:!0}}))}function jl(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]];se(e,ae({name:"activity"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Y(),o=W(s);ne(o,t,"default",{}),M(i,s)},$$slots:{default:!0}}))}function Wl(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];se(e,ae({name:"shield"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Y(),o=W(s);ne(o,t,"default",{}),M(i,s)},$$slots:{default:!0}}))}function Gl(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 19v3"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3"}]];se(e,ae({name:"mic"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Y(),o=W(s);ne(o,t,"default",{}),M(i,s)},$$slots:{default:!0}}))}function Xl(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]];se(e,ae({name:"image"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Y(),o=W(s);ne(o,t,"default",{}),M(i,s)},$$slots:{default:!0}}))}function Yl(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M10 18v-7"}],["path",{d:"M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"}],["path",{d:"M14 18v-7"}],["path",{d:"M18 18v-7"}],["path",{d:"M3 22h18"}],["path",{d:"M6 18v-7"}]];se(e,ae({name:"landmark"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Y(),o=W(s);ne(o,t,"default",{}),M(i,s)},$$slots:{default:!0}}))}function ql(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];se(e,ae({name:"user"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Y(),o=W(s);ne(o,t,"default",{}),M(i,s)},$$slots:{default:!0}}))}function Kl(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];se(e,ae({name:"globe"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Y(),o=W(s);ne(o,t,"default",{}),M(i,s)},$$slots:{default:!0}}))}function Zl(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]];se(e,ae({name:"video"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Y(),o=W(s);ne(o,t,"default",{}),M(i,s)},$$slots:{default:!0}}))}function Ql(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];se(e,ae({name:"sparkles"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Y(),o=W(s);ne(o,t,"default",{}),M(i,s)},$$slots:{default:!0}}))}function Jl(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 20v-9"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97"}],["path",{d:"M22 13h-4"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97"}],["path",{d:"M6 13H2"}],["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13"}]];se(e,ae({name:"bug"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Y(),o=W(s);ne(o,t,"default",{}),M(i,s)},$$slots:{default:!0}}))}function ec(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]];se(e,ae({name:"monitor"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Y(),o=W(s);ne(o,t,"default",{}),M(i,s)},$$slots:{default:!0}}))}function tc(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"10",r:"8"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 22h10"}],["path",{d:"M12 22v-4"}]];se(e,ae({name:"webcam"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Y(),o=W(s);ne(o,t,"default",{}),M(i,s)},$$slots:{default:!0}}))}function rs(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}]];se(e,ae({name:"circle"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Y(),o=W(s);ne(o,t,"default",{}),M(i,s)},$$slots:{default:!0}}))}function rc(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];se(e,ae({name:"square"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Y(),o=W(s);ne(o,t,"default",{}),M(i,s)},$$slots:{default:!0}}))}function nc(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]];se(e,ae({name:"eye"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Y(),o=W(s);ne(o,t,"default",{}),M(i,s)},$$slots:{default:!0}}))}function ic(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}],["path",{d:"m2 2 20 20"}]];se(e,ae({name:"eye-off"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Y(),o=W(s);ne(o,t,"default",{}),M(i,s)},$$slots:{default:!0}}))}function ac(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];se(e,ae({name:"folder-open"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Y(),o=W(s);ne(o,t,"default",{}),M(i,s)},$$slots:{default:!0}}))}function sc(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];se(e,ae({name:"info"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Y(),o=W(s);ne(o,t,"default",{}),M(i,s)},$$slots:{default:!0}}))}function oc(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];se(e,ae({name:"x"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Y(),o=W(s);ne(o,t,"default",{}),M(i,s)},$$slots:{default:!0}}))}function lc(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];se(e,ae({name:"settings"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Y(),o=W(s);ne(o,t,"default",{}),M(i,s)},$$slots:{default:!0}}))}function cc(e,t){const r=J(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];se(e,ae({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Y(),o=W(s);ne(o,t,"default",{}),M(i,s)},$$slots:{default:!0}}))}function ot(e,t){const r={Camera:Bl,SlidersHorizontal:Fl,PersonStanding:Ul,Zap:Hl,Activity:jl,Shield:Wl,Mic:Gl,Image:Xl,Landmark:Yl,User:ql,Globe:Kl,Video:Zl,Sparkles:Ql,Bug:Jl,Monitor:ec,Webcam:tc,Circle:rs,Square:rc,Eye:nc,EyeOff:ic,FolderOpen:ac,Info:sc,X:oc,Settings:lc,RefreshCw:cc};let n=st(t,"name",3,"Circle"),i=st(t,"size",3,16),a=st(t,"strokeWidth",3,2),s=st(t,"class",3,"");const o=pt(()=>r[n()]??rs);var l=Y(),c=W(l);Qo(c,()=>w(o),(v,d)=>{d(v,{get size(){return i()},get"stroke-width"(){return a()},get class(){return s()}})}),M(e,l)}var fc=be('<div class="xra-sec-body"></div>'),uc=be('<details class="xra-sec"><summary><span class="xra-sec-title"><!> <span> </span></span> <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></summary> <!></details>');function dc(e,t){Yt(t,!0);const r="ui.sections_open";let n=K(_t(Dt(()=>{var u;return((u=yt(r,{}))==null?void 0:u[t.section.id])??!1}))),i;function a(){T(n,!w(n)),Tt(`${r}.${t.section.id}`,w(n))}kn(()=>{Z.focusNonce,!(Z.focusSection!==t.section.id||!Z.panelOpen)&&(T(n,!0),Tt(`${r}.${t.section.id}`,!0),requestAnimationFrame(()=>i==null?void 0:i.scrollIntoView({block:"nearest",behavior:"smooth"})))});var s=uc(),o=z(s),l=z(o),c=z(l);ot(c,{get name(){return t.section.icon},size:15,class:"xra-sec-icon"});var v=D(c,2),d=te(v,!0),_=D(l,2);let p;var h=D(o,2);{var x=u=>{var g=fc();Bt(g,21,()=>t.section.controls,b=>b.path,(b,k)=>{var P=Y(),S=W(P);{var $=X=>{Ll(X,{get control(){return w(k)}})},A=pt(()=>!w(k).when||w(k).when(ze));Vt(S,X=>{w(A)&&X($)})}M(b,P)}),M(u,g)};Vt(h,u=>{w(n)&&u(x)})}ul(s,u=>i=u,()=>i),we(u=>{s.open=w(n),re(d,u),p=Ne(_,0,"xra-sec-chevron",null,p,{open:w(n)})},[()=>he(t.section.title)]),ce("click",o,u=>{u.preventDefault(),a()}),M(e,s),qt()}Er(["click"]);var nn=be('<option class="svelte-x8svx4"> </option>'),vc=be('<div class="warn svelte-x8svx4"> </div>'),pc=be('<div class="xra-startup svelte-x8svx4"><div class="card svelte-x8svx4"><div class="head svelte-x8svx4"><div class="svelte-x8svx4"><h2 class="svelte-x8svx4">XR Animator</h2> <div class="sub svelte-x8svx4"> </div></div></div> <div class="grid svelte-x8svx4"><label class="field svelte-x8svx4"><div class="sub svelte-x8svx4">Language</div> <select class="svelte-x8svx4"></select></label> <label class="field svelte-x8svx4"><div class="sub svelte-x8svx4">Master preset</div> <select class="svelte-x8svx4"></select></label></div> <div class="status svelte-x8svx4"> </div> <section class="camera svelte-x8svx4"><div class="camera-head svelte-x8svx4"><div class="camera-title svelte-x8svx4"> </div> <div> </div></div> <div class="camera-row svelte-x8svx4"><select class="svelte-x8svx4"><!></select> <button type="button" class="action svelte-x8svx4"><!></button></div> <!></section> <div class="sub bg svelte-x8svx4"> </div> <div class="avatar svelte-x8svx4"><div class="sub svelte-x8svx4"> </div> <button type="button" class="action svelte-x8svx4"> </button></div> <div class="foot svelte-x8svx4"><button type="button" class="action primary confirm svelte-x8svx4"> </button></div></div></div>');function hc(e,t){Yt(t,!0);const r=()=>window.XRA,n=m=>he(m),i=["AUTO","ECO","LOW","BALANCED","QUALITY","HIGH","MAX","CUSTOM"];function a(){var m,y,E;try{(E=(y=(m=r())==null?void 0:m.profileService)==null?void 0:y.save)==null||E.call(y,0)}catch{}}const s=(()=>{var y,E;const m=(E=(y=r())==null?void 0:y.i18n)==null?void 0:E.LANGUAGES;return Array.isArray(m)&&m.length?m:[["auto","Auto / System"],["en","English"],["it","Italiano"]]})();let o=K("auto"),l=K("CUSTOM"),c=K(""),v=K("default"),d=K(_t([])),_=K(!1),p=K(""),h=K(!1),x=K(""),u=K(""),g=K("Loading avatar…"),b=K(!0),k=K(!1),P=K(!1),S=K(!1),$=K(!1),A=0,X=[];async function ee(m){const y=r();if(m=String(m||"CUSTOM").toUpperCase(),m==="CUSTOM"){y.config.performance.master_preset="CUSTOM",a(),T(c,"CUSTOM · ready");return}if(m==="AUTO"){T(c,"Benchmarking…");const E=await y.performance.benchmarkHardwareOnly();T(c,`AUTO → ${E.preset} (${E.fps.toFixed(1)} fps)`),await y.performance.applyPresetSafe(E.preset),y.config.performance.master_preset="AUTO",y.config.performance.auto_last_result=E,a();return}T(c,`${m}: applying…`),await y.performance.applyPresetSafe(m),T(c,`${m} · applied`)}function de(m=""){var L,F,q;const y=(L=r())==null?void 0:L.nativeBridge,E=((F=y==null?void 0:y.activeCamera)==null?void 0:F.call(y))||{},N=!!((q=y==null?void 0:y.cameraRunning)!=null&&q.call(y));T(h,N),T(x,m||(N?`${n("ON")} · ${E.label||n("Default camera")}`:n("OFF")),!0)}async function Ue(m=!1){var E,N,L;const y=(E=r())==null?void 0:E.nativeBridge;if(y!=null&&y.enumerateCameras){T(S,!0);try{const F=await y.enumerateCameras({requestPermission:m}),q=y.activeCamera()||{};T(d,(F||[]).map(Ae=>({deviceId:Ae.deviceId,label:Ae.label})),!0);const fe=q.deviceId||((N=ze.devices)==null?void 0:N.camera_device_id)||"";T(p,w(d).some(Ae=>Ae.deviceId===fe)?fe:((L=w(d)[0])==null?void 0:L.deviceId)||"",!0),T(_,!0),de()}catch{T(_,!0),de(n("Camera unavailable"))}finally{T(S,!1)}}}async function Je(m){var L,F;const y=(L=r())==null?void 0:L.nativeBridge,E=((F=m==null?void 0:m.currentTarget)==null?void 0:F.value)??w(p),N=w(d).find(q=>q.deviceId===E);if(N){T(S,!0);try{const q={deviceId:N.deviceId,label:N.label};y.cameraRunning()?await y.switchCamera(q):await y.setCameraPreference(q),de()}catch(q){de("Error · "+q.message)}finally{T(S,!1)}}}function fr(){var E,N,L,F,q,fe,Ae,ke;const m=(L=(N=(E=r())==null?void 0:E.xraBackend)==null?void 0:N.snapshot)==null?void 0:L.call(N),y=(m==null?void 0:m.capture)||((ke=(Ae=(fe=(q=(F=window.SA_bridge)==null?void 0:F.backend)==null?void 0:q.status)==null?void 0:fe.call(q))==null?void 0:Ae.backend)==null?void 0:ke.capture);if(y!=null&&y.camera_busy){const kt=(y.busy_processes&&y.busy_processes.length?y.busy_processes:y.busy_process?[y.busy_process]:[]).filter(pr=>!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(String(pr).trim()));if(kt.length)return{busy:!0,proc:kt.join(", ")}}if(y!=null&&y.last_error&&y.last_error.includes("Webcam occupata")){const ue=y.last_error.match(/Webcam occupata da:\s*([^.]+)/i),kt=ue?ue[1].trim():"";if(!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(kt))return{busy:!0,proc:y.last_error}}return{busy:!1,proc:""}}function Ir(){var m,y,E,N,L,F,q,fe,Ae;if(typeof((y=(m=r())==null?void 0:m.nativeBridge)==null?void 0:y.isAvatarReady)=="function")return r().nativeBridge.isAvatarReady();if((E=window.MMD_SA)!=null&&E.MMD_started){const ke=(F=(L=(N=window.MMD_SA)==null?void 0:N.THREEX)==null?void 0:L.get_model)==null?void 0:F.call(L,0);let ue=ke;if((ke==null?void 0:ke.type)==="MMD_dummy")try{ue=ke.model||null}catch{ue=null}const kt=((q=ue==null?void 0:ue.model)==null?void 0:q.scene)||(ue==null?void 0:ue.mesh)||(ue==null?void 0:ue.scene)||null;if(ue&&!(ke!=null&&ke.loading)&&!ue.loading&&!((Ae=(fe=window.MMD_SA)==null?void 0:fe.THREEX)!=null&&Ae._loading_model)&&kt)return kt.visible!==!1}return!1}function ur(){var y,E,N;const m=(y=r())==null?void 0:y.xraBackend;return!m||!m.active?!0:!!((N=(E=m.snapshot)==null?void 0:E.call(m))!=null&&N.ready)}function ft(){if(w($)||!Z.startupOpen)return;const m=fr();T(u,m.busy?`Webcam in use by another application (${m.proc}). Close it to start tracking.`:"",!0),Ir()?ur()?m.busy?(T(b,!0),T(g,n("Camera busy…"),!0)):w(k)?T(b,!0):(T(b,!1),T(g,"START")):(T(b,!0),T(g,n("Connecting to backend…"),!0)):(T(b,!0),T(g,n("Loading avatar…"),!0))}async function St(m){var E,N,L;const y=((E=m==null?void 0:m.currentTarget)==null?void 0:E.value)??w(l);T(l,y,!0),T(P,!0);try{await ee(y),r().events.emit("state",{path:"performance.master_preset",value:r().config.performance.master_preset}),wl()}catch(F){console.error("[XRA START]",F),T(c,"Preset error: "+F.message)}finally{T(P,!1),(L=(N=r().ui)==null?void 0:N.refresh)==null||L.call(N)}}function dr(m){var y,E,N,L;T(o,((y=m==null?void 0:m.currentTarget)==null?void 0:y.value)??w(o),!0),(L=(N=(E=r())==null?void 0:E.i18n)==null?void 0:N.setLanguage)==null||L.call(N,w(o))}async function He(){var m,y;try{await((y=(m=r().nativeBridge)==null?void 0:m.openVrmPicker)==null?void 0:y.call(m))}catch(E){r().toast("VRM loader: "+E.message,"error",4500)}}async function vr(m=!1){var E,N,L,F,q,fe,Ae,ke;if(w($)||w(b))return;T($,!0),A&&(clearInterval(A),A=0),T(k,!0),T(g,"Starting…");const y=r();if(a(),Z.startupOpen=!1,(N=(E=y.ui)==null?void 0:E.refresh)==null||N.call(E),m)try{typeof y.whenNativeReady=="function"&&await y.whenNativeReady(15e3),(L=y.xraBackend)!=null&&L.waitUntilReady&&await y.xraBackend.waitUntilReady(6e3).catch(()=>{}),await((q=(F=y.nativeBridge)==null?void 0:F.startNativeStreamer)==null?void 0:q.call(F))}catch(ue){(Ae=(fe=globalThis.XRA_CAMERA_OWNERSHIP)==null?void 0:fe.isOwnershipError)!=null&&Ae.call(fe,ue)||(console.warn("[XRA START]","Auto-starting camera on START failed",ue),(ke=y.toast)==null||ke.call(y,"Starting camera: "+ue.message,"warn",5e3))}}Ka(()=>{var y,E,N,L,F,q,fe,Ae,ke,ue,kt,pr,hs,_s,gs,ms,ys,Vn,ws,bs,xs,Ss;const m=r();T(c,n("Ready."),!0),T(o,((E=(y=m==null?void 0:m.config)==null?void 0:y.ui)==null?void 0:E.language)||"auto",!0),T(l,((L=(N=m==null?void 0:m.config)==null?void 0:N.performance)==null?void 0:L.master_preset)==="MINIMAL"?"ECO":((q=(F=m==null?void 0:m.config)==null?void 0:F.performance)==null?void 0:q.master_preset)||"CUSTOM",!0),T(v,((Ae=(fe=m==null?void 0:m.config)==null?void 0:fe.background)==null?void 0:Ae.path)||((ue=(ke=m==null?void 0:m.config)==null?void 0:ke.background)==null?void 0:ue.color)||"default",!0);try{const $t=(hs=(pr=(kt=window.SA_bridge)==null?void 0:kt.backend)==null?void 0:pr.status)==null?void 0:hs.call(pr),Bn=(gs=(_s=window.System)==null?void 0:_s._browser)==null?void 0:gs.camera;(ys=(ms=$t==null?void 0:$t.backend)==null?void 0:ms.capture)!=null&&ys.running&&!(Bn!=null&&Bn.running)&&((ws=(Vn=window.SA_bridge.backend)==null?void 0:Vn.stop)==null||ws.call(Vn).catch(()=>{}))}catch{}de(),setTimeout(()=>Ue(!1),100),A=setInterval(ft,300),window.addEventListener("MMDStarted",ft),(bs=m.xraBackend)!=null&&bs.onStatus&&m.xraBackend.onStatus(ft),ft(),(Ss=(xs=m.whenNativeReady)==null?void 0:xs.call(m))==null||Ss.then(()=>{Z.startupOpen&&Ue(!1)});for(const $t of["camera-started","camera-stopped","camera-switched"])X.push(m.events.on($t,()=>{Z.startupOpen&&Ue(!1)}));for(const $t of["avatar-loading","avatar-changed","avatar-ready"])X.push(m.events.on($t,()=>ft()));return()=>{A&&clearInterval(A),window.removeEventListener("MMDStarted",ft);for(const $t of X)try{$t()}catch{}X=[]}});var In=pc(),Lr=z(In),fn=z(Lr),ki=z(fn),Ln=D(z(ki),2),$i=te(Ln,!0),R=D(fn,2),H=z(R),G=D(z(H),2);Bt(G,21,()=>s,([m,y])=>m,(m,y)=>{var E=pt(()=>Bi(w(y),2));let N=()=>w(E)[0],L=()=>w(E)[1];var F=nn(),q=te(F,!0),fe={};we(()=>{re(q,L()),fe!==(fe=N())&&(F.value=(F.__value=fe)??"")}),M(m,F)});var ve;Ar(G);var et=D(H,2),Ce=D(z(et),2);Bt(Ce,20,()=>i,m=>m,(m,y)=>{var E=nn(),N=te(E,!0),L={};we(()=>{re(N,y),L!==(L=y)&&(E.value=(E.__value=L)??"")}),M(m,E)});var je;Ar(Ce);var Ct=D(R,2),Wt=te(Ct,!0),zn=D(Ct,2),os=z(zn),ls=z(os),Sc=te(ls,!0),cs=D(ls,2);let fs;var kc=te(cs,!0),us=D(os,2),Gt=z(us),$c=z(Gt);{var Ec=m=>{var y=nn(),E=te(y,!0);y.value=y.__value="",we(N=>re(E,N),[()=>n("Loading cameras…")]),M(m,y)},Ac=m=>{var y=nn(),E=te(y,!0);y.value=y.__value="",we(N=>re(E,N),[()=>n("No cameras found")]),M(m,y)},Mc=m=>{var y=Y(),E=W(y);Bt(E,17,()=>w(d),N=>N.deviceId,(N,L)=>{var F=nn(),q=te(F,!0),fe={};we(()=>{re(q,w(L).label),fe!==(fe=w(L).deviceId)&&(F.value=(F.__value=fe)??"")}),M(N,F)}),M(m,y)};Vt($c,m=>{w(_)?w(d).length?m(Mc,-1):m(Ac,1):m(Ec)})}var Dn;Ar(Gt);var un=D(Gt,2),Tc=z(un);ot(Tc,{name:"RefreshCw",size:14});var Nc=D(us,2);{var Oc=m=>{var y=vc(),E=te(y,!0);we(()=>re(E,w(u))),M(m,y)};Vt(Nc,m=>{w(u)&&m(Oc)})}var ds=D(zn,2),Pc=te(ds),vs=D(ds,2),ps=z(vs),Cc=te(ps,!0),Ei=D(ps,2),Rc=te(Ei,!0),Ic=D(vs,2),Ai=z(Ic),Lc=te(Ai,!0);we((m,y,E,N,L,F)=>{re($i,m),G.disabled=w($),ve!==(ve=w(o))&&(G.value=(G.__value=ve)??"",Ut(G,ve)),Ce.disabled=w(P)||w($),je!==(je=w(l))&&(Ce.value=(Ce.__value=je)??"",Ut(Ce,je)),re(Wt,w(c)),re(Sc,y),fs=Ne(cs,1,"camera-state svelte-x8svx4",null,fs,{on:w(h)}),re(kc,w(x)),Gt.disabled=w(S),Dn!==(Dn=w(p))&&(Gt.value=(Gt.__value=Dn)??"",Ut(Gt,Dn)),Ee(un,"title",E),Ee(un,"aria-label",N),un.disabled=w(S),re(Pc,`Background: ${w(v)??""}`),re(Cc,L),Ei.disabled=w($),re(Rc,F),Ai.disabled=w(b)||w(k),re(Lc,w(g))},[()=>n("Quick setup · changes apply immediately."),()=>n("Webcam"),()=>n("Refresh cameras"),()=>n("Refresh cameras"),()=>n("Avatar: the last VRM you chose is copied into avatars/ and restored at startup."),()=>n("Load / change VRM…")]),ce("change",G,dr),ce("change",Ce,St),ce("change",Gt,Je),ce("click",un,()=>Ue(!0)),ce("click",Ei,He),ce("click",Ai,()=>vr(!0)),M(e,In),qt()}Er(["change","click"]);var _c=be('<button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button>'),gc=be('<nav class="xra-dock group fixed left-2 top-1/2 z-[99990] flex w-[46px] max-h-[92vh] -translate-y-1/2 flex-col gap-0.5 overflow-hidden rounded-xl border border-white/10 bg-[var(--xra-ui-bg)] p-1.5 font-sans text-[12.5px] leading-snug text-[var(--xra-ui-fg)] shadow-[0_12px_40px_rgba(0,0,0,.55)] transition-[width] duration-200 hover:w-[232px]"><!> <div class="my-1 h-px bg-white/10"></div> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button></nav>');function mc(e,t){Yt(t,!0);const r=()=>window.XRA;let n=K(!1),i=K(!1),a=K(!1),s=0;function o(){var H,G,ve,et,Ce,je,Ct;const R=r();if(R){try{T(n,!!((G=(H=R.nativeBridge)==null?void 0:H.cameraRunning)!=null&&G.call(H)))}catch{}try{T(i,!!((Ce=(et=(ve=R.recorder)==null?void 0:ve.status)==null?void 0:et.call(ve))!=null&&Ce.active))}catch{}try{T(a,!!((Ct=(je=R.nativeBridge)==null?void 0:je.getPreviewVisibility)!=null&&Ct.call(je,"video")))}catch{}}}async function l(){var H,G;const R=r().nativeBridge;try{R.cameraRunning()?await R.stopNativeStreamer():await R.startNativeStreamer()}catch(ve){(G=(H=r()).toast)==null||G.call(H,"Tracking: "+ve.message,"warn",4e3)}finally{setTimeout(o,250)}}async function c(){var H,G,ve;const R=r().recorder;try{(H=R.status)!=null&&H.call(R).active?await R.stop():await R.start()}catch(et){(ve=(G=r()).toast)==null||ve.call(G,"Recording: "+et.message,"warn",4e3)}finally{setTimeout(o,250)}}function v(){var H,G;const R=!w(a);try{(G=(H=r().nativeBridge)==null?void 0:H.setPreviewVisibility)==null||G.call(H,"video",R)}catch{}T(a,R)}async function d(){var R,H,G,ve;try{await((H=(R=r().nativeBridge)==null?void 0:R.openVrmPicker)==null?void 0:H.call(R))}catch(et){(ve=(G=r()).toast)==null||ve.call(G,"VRM loader: "+et.message,"error",4500)}}function _(){var R,H;try{(H=(R=r().nativeBridge)==null?void 0:R.showAbout)==null||H.call(R)}catch{}}const p=[{id:"ui",icon:"Monitor",label:"UI Settings"},{id:"camera",icon:"Camera",label:"Webcam settings"},{id:"avatar",icon:"User",label:"Model settings"},{id:"second_avatar",icon:"Globe",label:"Studio link"},{id:"stage",icon:"Landmark",label:"Environment + Camera"},{id:"background",icon:"Image",label:"Background"},{id:"lip",icon:"Mic",label:"Audio"}],h="hover:bg-white/10",x="flex-1 overflow-hidden opacity-0 transition-opacity duration-150 group-hover:opacity-100";Ka(()=>(o(),s=setInterval(o,1e3),()=>clearInterval(s)));var u=gc(),g=z(u);Bt(g,17,()=>p,R=>R.id,(R,H)=>{var G=_c();Ne(G,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var ve=z(G),et=z(ve);ot(et,{get name(){return w(H).icon},size:16});var Ce=D(ve,2);Ne(Ce,1,ir(x));var je=te(Ce,!0);we((Ct,Wt)=>{Ee(G,"title",Ct),re(je,Wt)},[()=>he(w(H).label),()=>he(w(H).label)]),ce("click",G,()=>ml(w(H).id)),M(R,G)});var b=D(g,4),k=z(b),P=z(k);{let R=pt(()=>w(n)?"text-emerald-400":"");ot(P,{name:"Webcam",size:16,get class(){return w(R)}})}var S=D(k,2);Ne(S,1,ir(x));var $=te(S,!0),A=D(b,2),X=z(A),ee=z(X);{let R=pt(()=>w(i)?"Square":"Circle"),H=pt(()=>w(i)?"text-red-400":"");ot(ee,{get name(){return w(R)},size:16,get class(){return w(H)}})}var de=D(X,2);Ne(de,1,ir(x));var Ue=te(de,!0),Je=D(A,2),fr=z(Je),Ir=z(fr);{let R=pt(()=>w(a)?"Eye":"EyeOff");ot(Ir,{get name(){return w(R)},size:16})}var ur=D(fr,2);Ne(ur,1,ir(x));var ft=te(ur,!0),St=D(Je,2);Ne(St,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var dr=z(St),He=z(dr);ot(He,{name:"FolderOpen",size:16});var vr=D(dr,2);Ne(vr,1,ir(x));var In=te(vr,!0),Lr=D(St,2);Ne(Lr,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var fn=z(Lr),ki=z(fn);ot(ki,{name:"Info",size:16});var Ln=D(fn,2);Ne(Ln,1,ir(x));var $i=te(Ln,!0);we((R,H,G,ve,et,Ce,je,Ct,Wt,zn)=>{Ne(b,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${w(n)?"bg-emerald-500/20":h}`),Ee(b,"title",R),re($,H),Ne(A,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${w(i)?"bg-red-500/30 text-red-200":h}`),Ee(A,"title",G),re(Ue,ve),Ne(Je,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${w(a)?"bg-emerald-500/20":h}`),Ee(Je,"title",et),re(ft,Ce),Ee(St,"title",je),re(In,Ct),Ee(Lr,"title",Wt),re($i,zn)},[()=>he("Tracking"),()=>w(n)?he("Tracking on"):he("Tracking off"),()=>he("Record"),()=>w(i)?he("Stop recording"):he("Record"),()=>he("Preview"),()=>w(a)?he("Hide preview"):he("Show preview"),()=>he("Load / change VRM…"),()=>he("Load / change VRM…"),()=>he("About"),()=>he("About")]),ce("click",b,l),ce("click",A,c),ce("click",Je,v),ce("click",St,d),ce("click",Lr,_),M(e,u),qt()}Er(["click"]);var yc=be('<aside class="xra-panel"><header class="xra-panel-head"><strong>XR Animator</strong> <span class="xra-spacer"></span> <button><!></button> <button title="Close panel"><!></button></header> <div class="xra-panel-body"></div></aside>'),wc=be('<button class="xra-panel-launcher"><!></button>'),bc=be("<!> <!> <!>",1);function xc(e,t){Yt(t,!0),bl();const r=pt(()=>El(ze));var n=bc(),i=W(n);{var a=d=>{hc(d,{})};Vt(i,d=>{Z.ready&&Z.startupOpen&&d(a)})}var s=D(i,2);{var o=d=>{mc(d,{})};Vt(s,d=>{Z.ready&&!Z.startupOpen&&d(o)})}var l=D(s,2);{var c=d=>{var k,P,S;var _=yc(),p=z(_),h=D(z(p),4);Ee(h,"title",((S=(P=(k=window.XRA)==null?void 0:k.i18n)==null?void 0:P.t)==null?void 0:S.call(P,"Clean screen mode (Press Esc to restore)"))||"Clean screen (Esc)");var x=z(h);ot(x,{name:"EyeOff",size:15});var u=D(h,2),g=z(u);ot(g,{name:"X",size:15});var b=D(p,2);Bt(b,21,()=>w(r),$=>$.id,($,A)=>{dc($,{get section(){return w(A)}})}),ce("click",h,function(...$){On==null||On.apply(this,$)}),ce("click",u,()=>Z.panelOpen=!1),M(d,_)},v=d=>{var _=wc(),p=z(_);ot(p,{name:"Settings",size:16}),ce("click",_,()=>{Z.panelOpen=!0,Qa()}),M(d,_)};Vt(l,d=>{Z.ready&&!Z.startupOpen&&Z.panelOpen?d(c):Z.ready&&!Z.startupOpen&&d(v,1)})}M(e,n),qt()}Er(["click"]),window.XRA_SVELTE_UI=!0;function ns(){let e=document.getElementById("XRA_SVELTE");e||(e=document.createElement("div"),e.id="XRA_SVELTE",document.body.appendChild(e)),Go(xc,{target:e})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ns):ns()})();

})();
