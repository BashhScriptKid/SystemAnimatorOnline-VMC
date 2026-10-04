(function(){
var Vc=Object.defineProperty;var Es=fe=>{throw TypeError(fe)};var Fc=(fe,ie,xe)=>ie in fe?Vc(fe,ie,{enumerable:!0,configurable:!0,writable:!0,value:xe}):fe[ie]=xe;var et=(fe,ie,xe)=>Fc(fe,typeof ie!="symbol"?ie+"":ie,xe),Ni=(fe,ie,xe)=>ie.has(fe)||Es("Cannot "+xe);var u=(fe,ie,xe)=>(Ni(fe,ie,"read from private field"),xe?xe.call(fe):ie.get(fe)),B=(fe,ie,xe)=>ie.has(fe)?Es("Cannot add the same private member more than once"):ie instanceof WeakSet?ie.add(fe):ie.set(fe,xe),L=(fe,ie,xe,ir)=>(Ni(fe,ie,"write to private field"),ir?ir.call(fe,xe):ie.set(fe,xe),xe),W=(fe,ie,xe)=>(Ni(fe,ie,"access private method"),xe);(function(){"use strict";var ss,Lr,Qt,_r,zr,Dr,Br,Dt,Vr,Ye,fn,Bt,mt,Mt,Fr,gr,Z,Ti,Oi,gn,Pi,As,Ms,Ur,Hc,mn,os,lt,Ei,ct,mr,Re,qe,Ie,Ke,Nt,yr,Jt,Hr,dn,vn,Vt,zn,oe,Uc,Wc,Ci,jc,Ri,yn,Un,Ii,Li,yt,Tt,Ze,wr,pn,hn,Dn,ls;var ie=Array.isArray,xe=Array.prototype.indexOf,ir=Array.prototype.includes,wn=Array.from,zi=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,Di=Object.getOwnPropertyDescriptors,Ns=Object.prototype,Ts=Array.prototype,Wn=Object.getPrototypeOf,Bi=Object.isExtensible;function Wr(e){return typeof e=="function"}const Os=()=>{};function Ps(e){return e()}function jn(e){for(var t=0;t<e.length;t++)e[t]()}function Vi(){var e,t,r=new Promise((n,i)=>{e=n,t=i});return{promise:r,resolve:e,reject:t}}function Fi(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const Ne=2,Sr=4,jr=8,Gn=1<<24,ft=16,tt=32,Rt=64,Xn=128,Yn=256,dt=512,ke=1024,we=2048,rt=4096,Oe=8192,Pe=16384,$r=32768,bn=1<<25,Wt=65536,xn=1<<17,Cs=1<<18,Er=1<<19,Hi=1<<20,xt=1<<25,kn=1<<21,Ar=1<<22,jt=1<<23,kt=Symbol("$state"),Ui=Symbol("component"),Wi=Symbol("legacy props"),Rs=Symbol(""),Sn=Symbol("attributes"),qn=Symbol("class"),Kn=Symbol("style"),Gr=Symbol("text"),Xr=new class extends Error{constructor(){super(...arguments);et(this,"name","StaleReactionError");et(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},$n=!!((ss=globalThis.document)!=null&&ss.contentType)&&globalThis.document.contentType.includes("xml"),Is=1,Ls=2,ji=4,zs=8,Ds=16,Bs=1,Vs=2,Gi=4,Fs=8,Hs=16,Us=1,Ws=2,be=Symbol("uninitialized"),Xi="http://www.w3.org/1999/xhtml",js="http://www.w3.org/2000/svg",Gs="@attach";function Xs(){console.warn("https://svelte.dev/e/derived_inert")}function Ys(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function qs(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Yi(e){return e===this.v}function Ks(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function qi(e){return!Ks(e,this.v)}function Zs(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Qs(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Js(e,t,r){throw new Error("https://svelte.dev/e/each_key_duplicate")}function eo(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function to(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ro(e){throw new Error("https://svelte.dev/e/effect_orphan")}function no(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function io(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function ao(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function so(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function oo(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function lo(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Mr=!1,Gc=!1;function co(){Mr=!0}let de=null;function Nr(e){de=e}function Gt(e,t=!1,r){de={p:de,i:!1,c:null,e:null,s:e,x:null,r:H,l:Mr&&!t?{s:null,u:null,$:[]}:null}}function Xt(e){var t=de,r=t.e;if(r!==null){t.e=null;for(var n of r)ga(n)}return t.i=!0,de=t.p,Zn(e)}function Zn(e={}){return zi(e,Ui,{value:!0}),e}function Yr(){return!Mr||de!==null&&de.l===null}let Tr=[];function uo(){var e=Tr;Tr=[],jn(e)}function St(e){if(Tr.length===0){var t=Tr;queueMicrotask(()=>{t===Tr&&uo()})}Tr.push(e)}const fo=-7169;function he(e,t){e.f=e.f&fo|t}function Qn(e){(e.f&dt)!==0||e.deps===null?he(e,ke):he(e,rt)}function Ki(e,t,r){(e.f&we)!==0?t.add(e):(e.f&rt)!==0&&r.add(e),he(e,ke)}function vo(e,t){if(t){const r=document.body;e.autofocus=!0,St(()=>{document.activeElement===r&&e.focus()})}}function qr(e){var t=F,r=H;it(null),at(null);try{return e()}finally{it(t),at(r)}}function Zi(e,t,r,n){const i=Yr()?Or:Jn;var a=e.filter(_=>!_.settled),s=t.map(i);if(r.length===0&&a.length===0){n(s);return}var o=H,l=po(),c=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(_=>_.promise)):null;function d(_){if((o.f&Pe)===0){l();try{n([...s,..._])}catch(v){Et(v,o)}En()}}var p=Qi();if(r.length===0){c.then(()=>d([])).finally(p);return}function b(){Promise.all(r.map(_=>ho(_))).then(d).catch(_=>Et(_,o)).finally(p)}c?c.then(()=>{l(),b(),En()}):b()}function po(){var e=H,t=F,r=de,n=I;return function(a=!0){at(e),it(t),Nr(r),a&&(e.f&Pe)===0&&(n==null||n.activate(),n==null||n.apply())}}function En(e=!0){at(null),it(null),Nr(null),e&&(I==null||I.deactivate())}function Qi(){var e=H,t=e.b,r=I,n=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,r),r.increment(n,e),()=>{t==null||t.update_pending_count(-1,r),r.decrement(n,e)}}function Or(e){var t=Ne|we;return H!==null&&(H.f|=Er),{ctx:de,deps:null,effects:null,equals:Yi,f:t,fn:e,reactions:null,rv:0,v:be,wv:0,parent:H,ac:null}}const Kr=Symbol("obsolete");function ho(e,t,r){let n=H;n===null&&Qs();var i=void 0,a=Yt(be),s=!F,o=new Set;return Mo(()=>{var _,v;var l=H,c=Vi();i=c.promise;try{Promise.resolve(e()).then(c.resolve,x=>{x!==Xr&&c.reject(x)}).finally(En)}catch(x){c.reject(x),En()}var d=I;if(s){if((l.f&$r)!==0)var p=Qi();if((_=n.b)!=null&&_.is_rendered())(v=d.async_deriveds.get(l))==null||v.reject(Kr);else for(const x of o.values())x.reject(Kr);o.add(c),d.async_deriveds.set(l,c)}const b=(x,f=void 0)=>{p==null||p(),o.delete(c),f!==Kr&&(d.activate(),f?(a.f|=jt,Cr(a,f)):((a.f&jt)!==0&&(a.f^=jt),Cr(a,x)),d.deactivate())};c.promise.then(b,x=>b(null,x||"unknown"))}),ci(()=>{for(const l of o)l.reject(Kr)}),new Promise(l=>{function c(d){function p(){d===i?l(a):c(i)}d.then(p,p)}c(i)})}function nt(e){const t=Or(e);return $a(t),t}function Jn(e){const t=Or(e);return t.equals=qi,t}function _o(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)Ee(t[r])}}function ei(e){var t,r=H,n=e.parent;if(!Lt&&n!==null&&e.v!==be&&(n.f&(Pe|Oe))!==0)return Xs(),e.v;at(n);try{_o(e),t=Ta(e)}finally{at(r)}return t}function Ji(e){var t=ei(e);if(!e.equals(t)&&(e.wv=Ma(),(!(I!=null&&I.is_fork)||e.deps===null)&&(I!==null?(I.capture(e,t,!0),Zr==null||Zr.capture(e,t,!0)):e.v=t,e.deps===null))){he(e,ke);return}Lt||($e!==null?(li()||I!=null&&I.is_fork)&&$e.set(e,t):Qn(e))}function go(e){var t;if(e.effects!==null)for(const r of e.effects)(r.teardown||r.ac)&&((t=r.teardown)==null||t.call(r),r.ac!==null&&qr(()=>{r.ac.abort(Xr),r.ac=null}),r.fn!==null&&(r.teardown=Os),nn(r,0),fi(r))}function ea(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&Ir(t)}let ti=null,Pr=null,I=null,Zr=null,$e=null,ri=null,ni=!1,Qr=null,An=null;var ta=0,Xc=new Set;let mo=1;const Ln=class Ln{constructor(){B(this,Z);et(this,"id",mo++);B(this,Lr,!1);et(this,"linked",!0);B(this,Qt,null);B(this,_r,null);et(this,"async_deriveds",new Map);et(this,"current",new Map);et(this,"previous",new Map);B(this,zr,new Set);B(this,Dr,new Set);B(this,Br,0);B(this,Dt,new Map);B(this,Vr,null);B(this,Ye,[]);B(this,fn,[]);B(this,Bt,new Set);B(this,mt,new Set);B(this,Mt,new Map);B(this,Fr,new Set);et(this,"is_fork",!1);B(this,gr,!1);Pr===null?ti=Pr=this:(L(Pr,_r,this),L(this,Qt,Pr)),Pr=this}skip_effect(t){u(this,Mt).has(t)||u(this,Mt).set(t,{d:[],m:[]}),u(this,Fr).delete(t)}unskip_effect(t,r=n=>this.schedule(n)){var n=u(this,Mt).get(t);if(n){u(this,Mt).delete(t);for(var i of n.d)he(i,we),r(i);for(i of n.m)he(i,rt),r(i)}u(this,Fr).add(t)}capture(t,r,n=!1){t.v!==be&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&jt)===0&&(this.current.set(t,[r,n]),$e==null||$e.set(t,r)),this.is_fork||(t.v=r)}activate(){I=this}deactivate(){I=null,$e=null}flush(){try{ni=!0,I=this,W(this,Z,gn).call(this)}finally{ta=0,ri=null,Qr=null,An=null,ni=!1,I=null,$e=null,$t.clear()}}discard(){var t;for(const r of u(this,Dr))r(this);u(this,Dr).clear();for(const r of this.async_deriveds.values())r.reject(Kr);W(this,Z,mn).call(this),(t=u(this,Vr))==null||t.resolve()}register_created_effect(t){u(this,fn).push(t)}increment(t,r){if(L(this,Br,u(this,Br)+1),t){let n=u(this,Dt).get(r)??0;u(this,Dt).set(r,n+1)}}decrement(t,r){if(L(this,Br,u(this,Br)-1),t){let n=u(this,Dt).get(r)??0;n===1?u(this,Dt).delete(r):u(this,Dt).set(r,n-1)}u(this,gr)||(L(this,gr,!0),St(()=>{L(this,gr,!1),this.linked&&this.flush()}))}transfer_effects(t,r){for(const n of t)u(this,Bt).add(n);for(const n of r)u(this,mt).add(n);t.clear(),r.clear()}oncommit(t){u(this,zr).add(t)}ondiscard(t){u(this,Dr).add(t)}settled(){return(u(this,Vr)??L(this,Vr,Vi())).promise}static ensure(){if(I===null){const t=I=new Ln;ni||St(()=>{u(t,Lr)||t.flush()})}return I}apply(){{$e=null;return}}schedule(t){var r;if(ri=t,(r=t.b)!=null&&r.is_pending&&(t.f&(Sr|jr|Gn))!==0&&(t.f&$r)===0){t.b.defer_effect(t);return}u(this,Ye).push(t)}};Lr=new WeakMap,Qt=new WeakMap,_r=new WeakMap,zr=new WeakMap,Dr=new WeakMap,Br=new WeakMap,Dt=new WeakMap,Vr=new WeakMap,Ye=new WeakMap,fn=new WeakMap,Bt=new WeakMap,mt=new WeakMap,Mt=new WeakMap,Fr=new WeakMap,gr=new WeakMap,Z=new WeakSet,Ti=function(){if(this.is_fork)return!0;for(const n of u(this,Dt).keys()){for(var t=n,r=!1;t.parent!==null;){if(u(this,Mt).has(t)){r=!0;break}t=t.parent}if(!r)return!0}return!1},Oi=function(){var t=[];for(const a of u(this,Ye))if(!((a.f&Pe)!==0||(a.f&(we|rt))===0)){for(var r=a,n=!1;r.parent!==null;){r=r.parent;var i=r.f;if((i&(Rt|tt))!==0){if((i&ke)===0){n=!0;break}r.f^=ke}}n||t.push(r)}return L(this,Ye,[]),t},gn=function(){var o,l,c,d;L(this,Lr,!0);for(const p of u(this,Bt))u(this,mt).delete(p),he(p,we),this.schedule(p);for(const p of u(this,mt))he(p,rt),this.schedule(p);this.apply();for(var t=Qr=[],r=[],n=An=[];u(this,Ye).length>0;){ta++>1e3&&(W(this,Z,mn).call(this),yo());for(const p of W(this,Z,Oi).call(this))try{W(this,Z,Pi).call(this,p,t,r)}catch(b){throw aa(p),W(this,Z,Ti).call(this)||this.discard(),b}}if(I=null,n.length>0){var i=Ln.ensure();for(const p of n)i.schedule(p)}if(Qr=null,An=null,W(this,Z,Ti).call(this)){W(this,Z,Ur).call(this,r),W(this,Z,Ur).call(this,t);for(const[p,b]of u(this,Mt))ia(p,b);n.length>0&&W(o=I,Z,gn).call(o);return}const a=W(this,Z,As).call(this);if(a){W(this,Z,Ur).call(this,r),W(this,Z,Ur).call(this,t),W(l=a,Z,Ms).call(l,this);return}u(this,Bt).clear(),u(this,mt).clear();for(const p of u(this,zr))p(this);u(this,zr).clear(),Zr=this,ra(r),ra(t),Zr=null,(c=u(this,Vr))==null||c.resolve();var s=I;if(u(this,Br)===0&&(u(this,Ye).length===0||s!==null)&&W(this,Z,mn).call(this),u(this,Ye).length>0)if(s!==null){for(const p of u(this,Ye))u(s,Ye).push(p);L(this,Ye,[])}else s=this;s!==null&&($t.clear(),W(d=s,Z,gn).call(d))},Pi=function(t,r,n){t.f^=ke;for(var i=t.first;i!==null;){var a=i.f,s=(a&(tt|Rt))!==0,o=s&&(a&ke)!==0,l=o||(a&Oe)!==0||u(this,Mt).has(i);if(!l&&i.fn!==null){s?i.f^=ke:(a&Sr)!==0?r.push(i):rn(i)&&((a&ft)!==0&&u(this,mt).add(i),Ir(i));var c=i.first;if(c!==null){i=c;continue}}for(;i!==null;){var d=i.next;if(d!==null){i=d;break}i=i.parent}}},As=function(){for(var t=u(this,Qt);t!==null;){if(!t.is_fork){for(const[r,[,n]]of this.current)if(t.current.has(r)&&!n)return t}t=u(t,Qt)}return null},Ms=function(t){var n;for(const[i,a]of t.current)!this.previous.has(i)&&t.previous.has(i)&&this.previous.set(i,t.previous.get(i)),this.current.set(i,a);for(const[i,a]of t.async_deriveds){const s=this.async_deriveds.get(i);s&&a.promise.then(s.resolve).catch(s.reject)}t.async_deriveds.clear(),this.transfer_effects(u(t,Bt),u(t,mt));const r=i=>{var a=i.reactions;if(a!==null&&!((i.f&Ne)!==0&&(i.f&(we|rt))===0))for(const l of a){var s=l.f;if((s&Ne)!==0)r(l);else{var o=l;s&(Ar|ft)&&!this.async_deriveds.has(o)&&(u(this,mt).delete(o),he(o,we),this.schedule(o))}}};for(const i of this.current.keys())r(i);this.oncommit(()=>t.discard()),W(n=t,Z,mn).call(n),I=this,W(this,Z,gn).call(this)},Ur=function(t){for(var r=0;r<t.length;r+=1)Ki(t[r],u(this,Bt),u(this,mt))},Hc=function(){var p,b;for(let _=ti;_!==null;_=u(_,_r)){var t=_.id<this.id,r=[];for(const[v,[x,f]]of this.current){if(_.current.has(v)){var n=_.current.get(v)[0];if(t&&x!==n)_.current.set(v,[x,f]);else continue}r.push(v)}if(t)for(const[v,x]of this.async_deriveds){const f=_.async_deriveds.get(v);f&&x.promise.then(f.resolve).catch(f.reject)}var i=[..._.current.keys()].filter(v=>!_.current.get(v)[1]);if(!(!u(_,Lr)||i.length===0)){var a=i.filter(v=>!this.current.has(v));if(a.length===0)t&&_.discard();else if(r.length>0){if(t)for(const v of u(this,Fr))_.unskip_effect(v,x=>{var f;(x.f&(ft|Ar))!==0?_.schedule(x):W(f=_,Z,Ur).call(f,[x])});_.activate();var s=new Set,o=new Map;for(var l of r)na(l,a,s,o);o=new Map;var c=[..._.current].filter(([v,x])=>{const f=this.current.get(v);return f?f[0]!==x[0]||f[1]!==x[1]:!0}).map(([v])=>v);if(c.length>0)for(const v of u(this,fn))(v.f&(Pe|Oe|xn))===0&&ii(v,c,o)&&((v.f&(Ar|ft))!==0?(he(v,we),_.schedule(v)):u(_,Bt).add(v));if(u(_,Ye).length>0&&!u(_,gr)){_.apply();for(var d of W(p=_,Z,Oi).call(p))W(b=_,Z,Pi).call(b,d,[],[])}_.deactivate()}}}},mn=function(){if(this.linked){var t=u(this,Qt),r=u(this,_r);t===null?ti=r:L(t,_r,r),r===null?Pr=t:L(r,Qt,t),this.linked=!1}};let ar=Ln;function yo(){try{no()}catch(e){Et(e,ri)}}let vt=null;function ra(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(Pe|Oe))===0&&rn(n)&&(vt=new Set,Ir(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&ba(n),(vt==null?void 0:vt.size)>0)){$t.clear();for(const i of vt){if((i.f&(Pe|Oe))!==0)continue;const a=[i];let s=i.parent;for(;s!==null;)vt.has(s)&&(vt.delete(s),a.push(s)),s=s.parent;for(let o=a.length-1;o>=0;o--){const l=a[o];(l.f&(Pe|Oe))===0&&Ir(l)}}vt.clear()}}vt=null}}function na(e,t,r,n){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(const i of e.reactions){const a=i.f;(a&Ne)!==0?na(i,t,r,n):(a&(Ar|ft))!==0&&(a&we)===0&&ii(i,t,n)&&(he(i,we),ai(i))}}function ii(e,t,r){const n=r.get(e);if(n!==void 0)return n;if(e.deps!==null)for(const i of e.deps){if(ir.call(t,i))return!0;if((i.f&Ne)!==0&&ii(i,t,r))return r.set(i,!0),!0}return r.set(e,!1),!1}function ai(e){I.schedule(e)}function ia(e,t){if(!((e.f&tt)!==0&&(e.f&ke)!==0)){(e.f&we)!==0?t.d.push(e):(e.f&rt)!==0&&t.m.push(e),he(e,ke);for(var r=e.first;r!==null;)ia(r,t),r=r.next}}function aa(e){he(e,ke);for(var t=e.first;t!==null;)aa(t),t=t.next}let Mn=new Set;const $t=new Map;let sa=!1;function Yt(e,t){var r={f:0,v:e,reactions:null,equals:Yi,rv:0,wv:0};return r}function G(e,t){const r=Yt(e);return $a(r),r}function wo(e,t=!1,r=!0){var i;const n=Yt(e);return t||(n.equals=qi),Mr&&r&&de!==null&&de.l!==null&&((i=de.l).s??(i.s=[])).push(n),n}function N(e,t,r=!1){F!==null&&(!ht||(F.f&xn)!==0)&&Yr()&&(F.f&(Ne|ft|Ar|xn))!==0&&(At===null||!At.has(e))&&oo();let n=r?Ve(t):t;return Cr(e,n,An)}var sr=null,si=0;function Cr(e,t,r=null){if(!e.equals(t)){Lt?$t.set(e,t):$t.has(e)||$t.set(e,e.v);var n=ar.ensure();if(n.capture(e,t),(e.f&Ne)!==0){const i=e;(e.f&we)!==0&&ei(i),$e===null&&Qn(i)}e.wv=Ma(),sr=null,si=0,la(e,we,r),sr=null,Yr()&&H!==null&&(H.f&ke)!==0&&(H.f&(tt|Rt))===0&&(st===null?Oo([e]):st.push(e)),!n.is_fork&&Mn.size>0&&!sa&&bo()}return t}function bo(){sa=!1;for(const e of Mn){(e.f&ke)!==0&&he(e,rt);let t;try{t=rn(e)}catch{t=!0}t&&Ir(e)}Mn.clear()}function oa(e,t=1){var r=h(e),n=t===1?r++:r--;return N(e,r),n}function Jr(e){N(e,e.v+1)}function la(e,t,r){var n=e.reactions;if(n!==null){var i=Yr(),a=n.length;if(si+=a,si>1e5&&sr===null&&(sr=new Set),sr!==null){if(sr.has(e))return;sr.add(e)}for(var s=0;s<a;s++){var o=n[s],l=o.f;if(!(!i&&o===H)){var c=(l&we)===0;if(c&&he(o,t),(l&xn)!==0)Mn.add(o);else if((l&Ne)!==0){var d=o;$e==null||$e.delete(d),la(d,rt,r)}else if(c){var p=o;(l&ft)!==0&&vt!==null&&vt.add(p),r!==null?r.push(p):ai(p)}}}}}function Ve(e){if(typeof e!="object"||e===null||kt in e||Ui in e)return e;const t=Wn(e);if(t!==Ns&&t!==Ts)return e;var r=new Map,n=ie(e),i=G(0),a=ur,s=o=>{if(ur===a)return o();var l=F,c=ur;it(null),Aa(a);var d=o();return it(l),Aa(c),d};return n&&r.set("length",G(e.length)),new Proxy(e,{defineProperty(o,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&ao();var d=r.get(l);return d===void 0?s(()=>{var p=G(c.value);return r.set(l,p),p}):N(d,c.value,!0),!0},deleteProperty(o,l){var c=r.get(l);if(c===void 0){if(l in o){const d=s(()=>G(be));r.set(l,d),Jr(i)}}else N(c,be),Jr(i);return!0},get(o,l,c){var _;if(l===kt)return e;var d=r.get(l),p=l in o;if(d===void 0&&(!p||(_=Ut(o,l))!=null&&_.writable)&&(d=s(()=>{var v=Ve(p?o[l]:be),x=G(v);return x}),r.set(l,d)),d!==void 0){var b=h(d);return b===be?void 0:b}return Reflect.get(o,l,c)},getOwnPropertyDescriptor(o,l){var b;(b=this.has)==null||b.call(this,o,l);var c=Reflect.getOwnPropertyDescriptor(o,l),d=r.get(l);if(d!==void 0){var p=h(d);if(p===be)return;if(c&&"value"in c)c.value=p;else return{enumerable:!0,configurable:!0,value:p,writable:!0}}return c},has(o,l){var b;if(l===kt)return!0;var c=r.get(l),d=c!==void 0&&c.v!==be||Reflect.has(o,l);if(c!==void 0||H!==null&&(!d||(b=Ut(o,l))!=null&&b.writable)){c===void 0&&(c=s(()=>{var _=d?Ve(o[l]):be,v=G(_);return v}),r.set(l,c));var p=h(c);if(p===be)return!1}return d},set(o,l,c,d){var S;var p=r.get(l),b=l in o;if(n&&l==="length")for(var _=c;_<p.v;_+=1){var v=r.get(_+"");v!==void 0?N(v,be):_ in o&&(v=s(()=>G(be)),r.set(_+"",v))}if(p===void 0)(!b||(S=Ut(o,l))!=null&&S.writable)&&(p=s(()=>G(void 0)),N(p,Ve(c)),r.set(l,p));else{b=p.v!==be;var x=s(()=>Ve(c));N(p,x)}var f=Reflect.getOwnPropertyDescriptor(o,l);if(f!=null&&f.set&&f.set.call(d,c),!b){if(n&&typeof l=="string"){var g=r.get("length"),m=Number(l);Number.isInteger(m)&&m>=g.v&&N(g,m+1)}Jr(i)}return!0},ownKeys(o){h(i);var l=Reflect.ownKeys(o).filter(p=>{var b=r.get(p);return b===void 0||b.v!==be});for(var[c,d]of r)d.v!==be&&!(c in o)&&l.push(c);return l},setPrototypeOf(){so()}})}function ca(e){try{if(e!==null&&typeof e=="object"&&kt in e)return e[kt]}catch{}return e}function ua(e,t){return Object.is(ca(e),ca(t))}var fa,da,va,pa;function xo(){if(fa===void 0){fa=window,da=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;va=Ut(t,"firstChild").get,pa=Ut(t,"nextSibling").get,Bi(e)&&(e[qn]=void 0,e[Sn]=null,e[Kn]=void 0,e.__e=void 0),Bi(r)&&(r[Gr]=void 0)}}function It(e=""){return document.createTextNode(e)}function or(e){return va.call(e)}function en(e){return pa.call(e)}function z(e,t){return or(e)}function Y(e,t=!1){{var r=or(e);return r instanceof Comment&&r.data===""?en(r):r}}function q(e,t=!1){return or(e)}function P(e,t=1,r=!1){let n=e;for(;t--;)n=en(n);return n}function ko(e){e.textContent=""}function ha(){return!1}function oi(e,t,r){return t==null||t===Xi?r?document.createElement(e,{is:r}):document.createElement(e):r?document.createElementNS(t,e,{is:r}):document.createElementNS(t,e)}function So(e){var t=H;if(t===null)return F.f|=jt,e;if((t.f&$r)===0&&(t.f&Sr)===0)throw e;Et(e,t)}function Et(e,t){if(!(t!==null&&(t.f&Pe)!==0)){for(;t!==null;){if((t.f&Xn)!==0&&(t.f&(Pe|bn))===0){if((t.f&$r)===0)throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw e}}function _a(e){H===null&&(F===null&&ro(),to()),Lt&&eo()}function $o(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function pt(e,t){var r=H;r!==null&&(r.f&Oe)!==0&&(e|=Oe);var n={ctx:de,deps:null,nodes:null,f:e|we|dt,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};I==null||I.register_created_effect(n);var i=n;if((e&Sr)!==0)Qr!==null?Qr.push(n):ar.ensure().schedule(n);else if(t!==null){try{Ir(n)}catch(s){throw Ee(n),s}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&Er)===0&&(i=i.first,(e&ft)!==0&&(e&Wt)!==0&&i!==null&&(i.f|=Wt))}if(i!==null&&(i.parent=r,r!==null&&$o(i,r),F!==null&&(F.f&Ne)!==0&&(e&Rt)===0)){var a=F;(a.effects??(a.effects=[])).push(i)}return n}function li(){return F!==null&&!ht}function ci(e){const t=pt(jr,null);return he(t,ke),t.teardown=e,t}function Rr(e){_a();var t=H.f,r=!F&&(t&tt)!==0&&de!==null&&!de.i;if(r){var n=de;(n.e??(n.e=[])).push(e)}else return ga(e)}function ga(e){return pt(Sr|Hi,e)}function Eo(e){return _a(),pt(jr|Hi,e)}function Ao(e){ar.ensure();const t=pt(Rt|Er,e);return(r={})=>new Promise(n=>{r.outro?lr(t,()=>{Ee(t),n(void 0)}):(Ee(t),n(void 0))})}function ui(e){return pt(Sr,e)}function Mo(e){return pt(Ar|Er,e)}function ma(e,t=0){return pt(jr|t,e)}function ge(e,t=[],r=[],n=[]){Zi(n,t,r,i=>{pt(jr,()=>{e(...i.map(h))})})}function tn(e,t=0){var r=pt(ft|t,e);return r}function ya(e,t=0){var r=pt(Gn|t,e);return r}function Fe(e){return pt(tt|Er,e)}function wa(e){var t=e.teardown;if(t!==null){const r=Lt,n=F;Sa(!0),it(null);try{t.call(null)}catch(i){Et(i,e.parent)}finally{Sa(r),it(n)}}}function fi(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const i=r.ac;i!==null&&qr(()=>{i.abort(Xr)});var n=r.next;(r.f&Rt)!==0?r.parent=null:Ee(r,t),r=n}}function No(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&tt)===0&&Ee(t),t=r}}function Ee(e,t=!0){var r=!1;(t||(e.f&Cs)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(To(e.nodes.start,e.nodes.end),r=!0),e.f|=bn,fi(e,t&&!r),nn(e,0);var n=e.nodes&&e.nodes.t;if(n!==null)for(const a of n)a.stop();wa(e),e.f^=bn,e.f|=Pe;var i=e.parent;i!==null&&i.first!==null&&ba(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function To(e,t){for(;e!==null;){var r=e===t?null:en(e);e.remove(),e=r}}function ba(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function lr(e,t,r=!0){var n=[];e.f|=Yn,xa(e,n,!0);var i=()=>{r&&Ee(e),t&&t()},a=n.length;if(a>0){var s=()=>--a||i();for(var o of n)o.out(s)}else i()}function xa(e,t,r){if((e.f&Oe)===0){e.f^=Oe;var n=e.nodes&&e.nodes.t;if(n!==null)for(const o of n)(o.is_global||r)&&t.push(o);for(var i=e.first;i!==null;){var a=i.next;if((i.f&Rt)===0){var s=(i.f&Wt)!==0||(i.f&tt)!==0&&(e.f&ft)!==0;xa(i,t,s?r:!1)}i=a}}}function Nn(e){e.f&=~Yn,ka(e,!0)}function ka(e,t){if((e.f&Yn)===0&&(e.f&Oe)!==0){e.f^=Oe,(e.f&ke)===0&&(he(e,we),ar.ensure().schedule(e));for(var r=e.first;r!==null;){var n=r.next,i=(r.f&Wt)!==0||(r.f&tt)!==0;ka(r,i?t:!1),r=n}var a=e.nodes&&e.nodes.t;if(a!==null)for(const s of a)(s.is_global||t)&&s.in()}}function di(e,t){if(e.nodes)for(var r=e.nodes.start,n=e.nodes.end;r!==null;){var i=r===n?null:en(r);t.append(r),r=i}}let Tn=!1,Lt=!1;function Sa(e){Lt=e}let F=null,ht=!1;function it(e){F=e}let H=null;function at(e){H=e}let At=null;function $a(e){F!==null&&((F.f&kn)!==0||(F.f&Ne)!==0)&&(At??(At=new Set)).add(e)}let He=null,je=0,st=null;function Oo(e){st=e}let Ea=1,cr=0,ur=cr;function Aa(e){ur=e}function Ma(){return++Ea}function rn(e){var t=e.f;if((t&we)!==0)return!0;if((t&rt)!==0){for(var r=e.deps,n=r.length,i=0;i<n;i++){var a=r[i];if(rn(a)&&Ji(a),a.wv>e.wv)return!0}(t&dt)!==0&&$e===null&&he(e,ke)}return!1}function Na(e,t,r=!0){var n=e.reactions;if(n!==null&&!(At!==null&&At.has(e)))for(var i=0;i<n.length;i++){var a=n[i];(a.f&Ne)!==0?Na(a,t,!1):t===a&&(r?he(a,we):(a.f&ke)!==0&&he(a,rt),ai(a))}}function Ta(e){var t=He,r=je,n=st,i=F,a=At,s=de,o=ht,l=ur,c=e.f;He=null,je=0,st=null,F=(c&(tt|Rt))===0?e:null,At=null,Nr(e.ctx),ht=!1,ur=++cr,e.ac!==null&&(qr(()=>{e.ac.abort(Xr)}),e.ac=null);try{e.f|=kn;var d=e.fn,p=d();e.f|=$r;var b=Oa(e);if(Yr()&&st!==null&&!ht&&b!==null&&(e.f&(Ne|rt|we))===0)for(var _=0;_<st.length;_++)Na(st[_],e);if(i!==null&&i!==e){if(cr++,i.deps!==null)for(let v=0;v<r;v+=1)i.deps[v].rv=cr;if(t!==null)for(const v of t)v.rv=cr;st!==null&&(n===null?n=st:n.push(...st))}return(e.f&jt)!==0&&(e.f^=jt),p}catch(v){return Oa(e),So(v)}finally{e.f^=kn,He=t,je=r,st=n,F=i,At=a,Nr(s),ht=o,ur=l}}function Oa(e){var i;var t=e.deps,r=I==null?void 0:I.is_fork;if(He!==null){var n;if(r||nn(e,je),t!==null&&je>0)for(t.length=je+He.length,n=0;n<He.length;n++)t[je+n]=He[n];else e.deps=t=He;if(li()&&(e.f&dt)!==0)for(n=je;n<t.length;n++)((i=t[n]).reactions??(i.reactions=[])).push(e)}else!r&&t!==null&&je<t.length&&(nn(e,je),t.length=je);return t}function Po(e,t){let r=t.reactions;if(r!==null){var n=xe.call(r,e);if(n!==-1){var i=r.length-1;i===0?r=t.reactions=null:(r[n]=r[i],r.pop())}}if(r===null&&(t.f&Ne)!==0&&(He===null||!ir.call(He,t))){var a=t;(a.f&dt)!==0&&(a.f^=dt),a.v!==be&&Qn(a),a.ac!==null&&qr(()=>{a.ac.abort(Xr),a.ac=null,he(a,we)}),go(a),nn(a,0)}}function nn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Po(e,r[n])}function Ir(e){var t=e.f;if((t&Pe)===0){he(e,ke);var r=H,n=Tn;H=e,Tn=(t&(tt|Rt))===0;try{(t&(ft|Gn))!==0?No(e):fi(e),wa(e);var i=Ta(e);e.teardown=typeof i=="function"?i:null,e.wv=Ea;var a}finally{Tn=n,H=r}}}function h(e){var t=e.f,r=(t&Ne)!==0;if(F!==null&&!ht){var n=H!==null&&(H.f&Pe)!==0;if(!n&&(At===null||!At.has(e))){var i=F.deps;if((F.f&kn)!==0)e.rv<cr&&(e.rv=cr,He===null&&i!==null&&i[je]===e?je++:He===null?He=[e]:He.push(e));else{F.deps??(F.deps=[]),ir.call(F.deps,e)||F.deps.push(e);var a=e.reactions;a===null?e.reactions=[F]:ir.call(a,F)||a.push(F)}}}if(Lt&&$t.has(e))return $t.get(e);if(r){var s=e;if(Lt){var o=s.v;return((s.f&ke)===0&&s.reactions!==null||Ca(s))&&(o=ei(s)),$t.set(s,o),o}var l=(s.f&dt)===0&&!ht&&F!==null&&(Tn||(F.f&dt)!==0),c=(s.f&$r)===0;rn(s)&&(l&&(s.f|=dt),Ji(s)),l&&!c&&(ea(s),Pa(s))}if($e!=null&&$e.has(e))return $e.get(e);if((e.f&jt)!==0)throw e.v;return e.v}function Pa(e){if(e.f|=dt,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&Ne)!==0&&(t.f&dt)===0&&(ea(t),Pa(t))}function Ca(e){if(e.v===be)return!0;if(e.deps===null)return!1;for(const t of e.deps)if($t.has(t)||(t.f&Ne)!==0&&Ca(t))return!0;return!1}function qt(e){var t=ht;try{return ht=!0,e()}finally{ht=t}}function fr(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(kt in e)vi(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&kt in r&&vi(r)}}}function vi(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{vi(e[n],t)}catch{}const r=Wn(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=Di(r);for(let i in n){const a=n[i].get;if(a)try{a.call(e)}catch{}}}}}function Co(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Ro=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Io(e){return Ro.includes(e)}const Lo={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function zo(e){return e=e.toLowerCase(),Lo[e]??e}const Do=["touchstart","touchmove"];function Bo(e){return Do.includes(e)}const dr=Symbol("events"),Ra=new Set,pi=new Set;function Vo(e,t,r,n={}){function i(a){if(n.capture||gi.call(t,a),!a.cancelBubble)return qr(()=>r==null?void 0:r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?(i.__removed=!1,St(()=>{i.__removed||t.addEventListener(e,i,n)})):t.addEventListener(e,i,n),i}function Q(e,t,r){(t[dr]??(t[dr]={}))[e]=r}function vr(e){for(var t=0;t<e.length;t++)Ra.add(e[t]);for(var r of pi)r(e)}let hi=null,_i=!1;function gi(e){var x,f;var t=this,r=t.ownerDocument,n=e.type,i=((x=e.composedPath)==null?void 0:x.call(e))||[],a=i[0]||e.target;hi=e,_i||(_i=!0,setTimeout(()=>{_i=!1,hi=null}));var s=0,o=hi===e&&e[dr];if(o){var l=i.indexOf(o);if(l!==-1&&(t===document||t===window)){e[dr]=t;return}var c=i.indexOf(t);if(c===-1)return;l<=c&&(s=l)}if(a=i[s]||e.target,a!==t){zi(e,"currentTarget",{configurable:!0,get(){return a||r}});var d=F,p=H;it(null),at(null);try{for(var b,_=[];a!==null&&a!==t;){try{var v=(f=a[dr])==null?void 0:f[n];v!=null&&(!a.disabled||e.target===a)&&v.call(a,e)}catch(g){b?_.push(g):b=g}if(e.cancelBubble)break;s++,a=s<i.length?i[s]:null}if(b){for(let g of _)queueMicrotask(()=>{throw g});throw b}}finally{e[dr]=t,delete e.currentTarget,it(d),at(p)}}}const mi=((os=globalThis==null?void 0:globalThis.window)==null?void 0:os.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Fo(e){return(mi==null?void 0:mi.createHTML(e))??e}function Ia(e){var t=oi("template");return t.innerHTML=Fo(e.replaceAll("<!>","<!---->")),t.content}function an(e,t){var r=H;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function me(e,t){var r=(t&Us)!==0,n=(t&Ws)!==0,i,a=!e.startsWith("<!>");return()=>{i===void 0&&(i=Ia(a?e:"<!>"+e),r||(i=or(i)));var s=n||da?document.importNode(i,!0):i.cloneNode(!0);if(r){var o=or(s),l=s.lastChild;an(o,l)}else an(s,s);return s}}function Ho(e,t,r="svg"){var n=!e.startsWith("<!>"),i=`<${r}>${n?e:"<!>"+e}</${r}>`,a;return()=>{if(!a){var s=Ia(i),o=or(s);a=or(o)}var l=a.cloneNode(!0);return an(l,l),l}}function Uo(e,t){return Ho(e,t,"svg")}function J(){var e=document.createDocumentFragment(),t=document.createComment(""),r=It();return e.append(t,r),an(t,r),e}function T(e,t){e!==null&&e.before(t)}function Wo(e){let t=0,r=Yt(0),n;return()=>{li()&&(h(r),ma(()=>(t===0&&(n=qt(()=>e(()=>Jr(r)))),t+=1,()=>{St(()=>{t-=1,t===0&&(n==null||n(),n=void 0,Jr(r))})})))}}var jo=Wt|Er;function Go(e,t,r,n){new Xo(e,t,r,n)}class Xo{constructor(t,r,n,i){B(this,oe);et(this,"parent");et(this,"is_pending",!1);et(this,"transform_error");B(this,lt);B(this,Ei,null);B(this,ct);B(this,mr);B(this,Re);B(this,qe,null);B(this,Ie,null);B(this,Ke,null);B(this,Nt,null);B(this,yr,0);B(this,Jt,0);B(this,Hr,!1);B(this,dn,new Set);B(this,vn,new Set);B(this,Vt,null);B(this,zn,Wo(()=>(L(this,Vt,Yt(u(this,yr))),()=>{L(this,Vt,null)})));var a;L(this,lt,t),L(this,ct,r),L(this,mr,s=>{var o=H;o.b=this,o.f|=Xn,n(s)}),this.parent=H.b,this.transform_error=i??((a=this.parent)==null?void 0:a.transform_error)??(s=>s),L(this,Re,tn(()=>{W(this,oe,Ri).call(this)},jo))}defer_effect(t){Ki(t,u(this,dn),u(this,vn))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!u(this,ct).pending}update_pending_count(t,r){W(this,oe,Ii).call(this,t,r),L(this,yr,u(this,yr)+t),!(!u(this,Vt)||u(this,Hr))&&(L(this,Hr,!0),St(()=>{L(this,Hr,!1),u(this,Vt)&&Cr(u(this,Vt),u(this,yr))}))}get_effect_pending(){return u(this,zn).call(this),h(u(this,Vt))}error(t){if(!u(this,ct).onerror&&!u(this,ct).failed)throw t;I!=null&&I.is_fork?(u(this,qe)&&I.skip_effect(u(this,qe)),u(this,Ie)&&I.skip_effect(u(this,Ie)),u(this,Ke)&&I.skip_effect(u(this,Ke)),I.oncommit(()=>{W(this,oe,Li).call(this,t)})):W(this,oe,Li).call(this,t)}}lt=new WeakMap,Ei=new WeakMap,ct=new WeakMap,mr=new WeakMap,Re=new WeakMap,qe=new WeakMap,Ie=new WeakMap,Ke=new WeakMap,Nt=new WeakMap,yr=new WeakMap,Jt=new WeakMap,Hr=new WeakMap,dn=new WeakMap,vn=new WeakMap,Vt=new WeakMap,zn=new WeakMap,oe=new WeakSet,Uc=function(){try{L(this,qe,Fe(()=>u(this,mr).call(this,u(this,lt))))}catch(t){this.error(t)}},Wc=function(t){const r=u(this,ct).failed,{reset:n,invoke_onerror:i}=W(this,oe,Ci).call(this,t);St(i),r&&L(this,Ke,Fe(()=>{r(u(this,lt),()=>t,()=>n)}))},Ci=function(t){var r=!1,n=!1;const i=()=>{if(r){qs();return}r=!0,n&&lo(),u(this,Ke)!==null&&lr(u(this,Ke),()=>{L(this,Ke,null)}),W(this,oe,Un).call(this,()=>{W(this,oe,Ri).call(this)})};return{reset:i,invoke_onerror:()=>{var s,o;try{n=!0,(o=(s=u(this,ct)).onerror)==null||o.call(s,t,i),n=!1}catch(l){Et(l,u(this,Re)&&u(this,Re).parent)}}}},jc=function(){const t=u(this,ct).pending;t&&(this.is_pending=!0,L(this,Ie,Fe(()=>t(u(this,lt)))),St(()=>{var r=L(this,Nt,document.createDocumentFragment()),n=It(),i=!1;if(r.append(n),L(this,qe,W(this,oe,Un).call(this,()=>{try{return Fe(()=>u(this,mr).call(this,n))}catch(a){try{this.error(a),i=!0}catch(s){Et(s,u(this,Re).parent)}return null}})),u(this,qe)===null){L(this,Nt,null),i&&W(this,oe,yn).call(this,I);return}u(this,Jt)===0&&(u(this,lt).before(r),L(this,Nt,null),lr(u(this,Ie),()=>{L(this,Ie,null)}),W(this,oe,yn).call(this,I))}))},Ri=function(){try{if(this.is_pending=this.has_pending_snippet(),L(this,Jt,0),L(this,yr,0),L(this,qe,Fe(()=>{u(this,mr).call(this,u(this,lt))})),u(this,Jt)>0){var t=L(this,Nt,document.createDocumentFragment());di(u(this,qe),t);const r=u(this,ct).pending;L(this,Ie,Fe(()=>r(u(this,lt))))}else W(this,oe,yn).call(this,I)}catch(r){this.error(r)}},yn=function(t){this.is_pending=!1,t.transfer_effects(u(this,dn),u(this,vn))},Un=function(t){var r=H,n=F,i=de;at(u(this,Re)),it(u(this,Re)),Nr(u(this,Re).ctx);try{return ar.ensure(),t()}finally{at(r),it(n),Nr(i)}},Ii=function(t,r){var n;if(!this.has_pending_snippet()){this.parent&&W(n=this.parent,oe,Ii).call(n,t,r);return}L(this,Jt,u(this,Jt)+t),u(this,Jt)===0&&(W(this,oe,yn).call(this,r),u(this,Ie)&&lr(u(this,Ie),()=>{L(this,Ie,null)}),u(this,Nt)&&(u(this,lt).before(u(this,Nt)),L(this,Nt,null)))},Li=function(t){u(this,qe)&&(Ee(u(this,qe)),L(this,qe,null)),u(this,Ie)&&(Ee(u(this,Ie)),L(this,Ie,null)),u(this,Ke)&&(Ee(u(this,Ke)),L(this,Ke,null));let r=u(this,ct).failed;const n=i=>{const{reset:a,invoke_onerror:s}=W(this,oe,Ci).call(this,i);s(),r&&L(this,Ke,W(this,oe,Un).call(this,()=>{try{return Fe(()=>{var o=H;o.b=this,o.f|=Xn,r(u(this,lt),()=>i,()=>a)})}catch(o){return Et(o,u(this,Re).parent),null}}))};St(()=>{var i;try{i=this.transform_error(t)}catch(a){Et(a,u(this,Re)&&u(this,Re).parent);return}i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(n,a=>Et(a,u(this,Re)&&u(this,Re).parent)):n(i)})};function K(e,t){var r=t==null?"":typeof t=="object"?`${t}`:t;r!==(e[Gr]??(e[Gr]=e.nodeValue))&&(e[Gr]=r,e.nodeValue=`${r}`)}function Yo(e,t){return qo(e,t)}const On=new Map;function qo(e,{target:t,anchor:r,props:n={},events:i,context:a,intro:s=!0,transformError:o}){xo();var l=void 0,c=Ao(()=>{var d=r??t.appendChild(It());Go(d,{pending:()=>{}},_=>{Gt({});var v=de;a&&(v.c=a),i&&(n.$$events=i),l=e(_,n)||Zn(),Xt()},o);var p=new Set,b=_=>{for(var v=0;v<_.length;v++){var x=_[v];if(!p.has(x)){p.add(x);var f=Bo(x);for(const S of[t,document]){var g=On.get(S);g===void 0&&(g=new Map,On.set(S,g));var m=g.get(x);m===void 0?(S.addEventListener(x,gi,{passive:f}),g.set(x,1)):g.set(x,m+1)}}}};return b(wn(Ra)),pi.add(b),()=>{var f;for(var _ of p)for(const g of[t,document]){var v=On.get(g),x=v.get(_);--x==0?(g.removeEventListener(_,gi),v.delete(_),v.size===0&&On.delete(g)):v.set(_,x)}pi.delete(b),d!==r&&((f=d.parentNode)==null||f.removeChild(d))}});return Ko.set(l,c),l}let Ko=new WeakMap;class yi{constructor(t,r=!0){et(this,"anchor");B(this,yt,new Map);B(this,Tt,new Map);B(this,Ze,new Map);B(this,wr,new Set);B(this,pn,!0);B(this,hn,t=>{if(u(this,yt).has(t)){var r=u(this,yt).get(t),n=u(this,Tt).get(r);if(n)Nn(n),u(this,wr).delete(r);else{var i=u(this,Ze).get(r);i&&(Nn(i.effect),u(this,Tt).set(r,i.effect),u(this,Ze).delete(r),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),n=i.effect)}for(const[a,s]of u(this,yt)){if(u(this,yt).delete(a),a===t)break;const o=u(this,Ze).get(s);o&&(Ee(o.effect),u(this,Ze).delete(s))}for(const[a,s]of u(this,Tt)){if(a===r||u(this,wr).has(a))continue;const o=()=>{if(Array.from(u(this,yt).values()).includes(a)){var c=document.createDocumentFragment();di(s,c),c.append(It()),u(this,Ze).set(a,{effect:s,fragment:c})}else Ee(s);u(this,wr).delete(a),u(this,Tt).delete(a)};u(this,pn)||!n?(u(this,wr).add(a),lr(s,o,!1)):o()}}});B(this,Dn,t=>{u(this,yt).delete(t);const r=Array.from(u(this,yt).values());for(const[n,i]of u(this,Ze))r.includes(n)||(Ee(i.effect),u(this,Ze).delete(n))});this.anchor=t,L(this,pn,r)}ensure(t,r){var n=I,i=ha();if(r&&!u(this,Tt).has(t)&&!u(this,Ze).has(t))if(i){var a=document.createDocumentFragment(),s=It();a.append(s),u(this,Ze).set(t,{effect:Fe(()=>r(s)),fragment:a})}else u(this,Tt).set(t,Fe(()=>r(this.anchor)));if(u(this,yt).set(n,t),i){for(const[o,l]of u(this,Tt))o===t?n.unskip_effect(l):n.skip_effect(l);for(const[o,l]of u(this,Ze))o===t?n.unskip_effect(l.effect):n.skip_effect(l.effect);n.oncommit(u(this,hn)),n.ondiscard(u(this,Dn))}else u(this,hn).call(this,n)}}yt=new WeakMap,Tt=new WeakMap,Ze=new WeakMap,wr=new WeakMap,pn=new WeakMap,hn=new WeakMap,Dn=new WeakMap;function _t(e,t,r=!1){var n=new yi(e),i=r?Wt:0;function a(s,o){n.ensure(s,o)}tn(()=>{var s=!1;t((o,l=0)=>{s=!0,a(l,o)}),s||a(-1,null)},i)}function La(e,t){return t}function Zo(e,t,r){for(var n=[],i=t.length,a,s=t.length,o=0;o<i;o++){let p=t[o];lr(p,()=>{if(a){if(a.pending.delete(p),a.done.add(p),a.pending.size===0){var b=e.outrogroups;wi(e,wn(a.done)),b.delete(a),b.size===0&&(e.outrogroups=null)}}else s-=1},!1)}if(s===0){var l=n.length===0&&r!==null&&e.pending.size===0;if(l){var c=r,d=c.parentNode;ko(d),d.append(c),e.items.clear()}wi(e,t,!l)}else a={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(a)}function wi(e,t,r=!0){var n;if(e.pending.size>0){n=new Set;for(const s of e.pending.values())for(const o of s)n.add(e.items.get(o).e)}for(var i=0;i<t.length;i++){var a=t[i];if(n!=null&&n.has(a)){a.f|=xt;const s=document.createDocumentFragment();di(a,s)}else Ee(t[i],r)}}var za;function Kt(e,t,r,n,i,a=null){var s=e,o=new Map,l=(t&ji)!==0;if(l){var c=e;s=c.appendChild(It())}var d=null,p=Jn(()=>{var S=r();return ie(S)?S:S==null?[]:wn(S)}),b,_=new Map,v=!0;function x(S){(m.effect.f&Pe)===0&&(m.pending.delete(S),m.fallback=d,Qo(m,b,s,t,n),d!==null&&(b.length===0?(d.f&xt)===0?Nn(d):(d.f^=xt,on(d,null,s)):lr(d,()=>{d=null})))}function f(S){m.pending.delete(S)}var g=tn(()=>{b=h(p);for(var S=b.length,A=new Set,k=I,E=ha(),$=0;$<S;$+=1){var C=b[$],D=n(C,$),te=v?null:o.get(D);te?(te.v&&Cr(te.v,C),te.i&&Cr(te.i,$),E&&k.unskip_effect(te.e)):(te=Jo(o,v?s:za??(za=It()),C,D,$,i,t,r),v||(te.e.f|=xt),o.set(D,te)),A.add(D)}if(S===0&&a&&!d&&(v?d=Fe(()=>a(s)):(d=Fe(()=>a(za??(za=It()))),d.f|=xt)),S>A.size&&Js(),!v)if(_.set(k,A),E){for(const[ye,Ae]of o)A.has(ye)||k.skip_effect(Ae.e);k.oncommit(x),k.ondiscard(f)}else x(k);h(p)}),m={effect:g,items:o,pending:_,outrogroups:null,fallback:d};v=!1}function sn(e){for(;e!==null&&(e.f&tt)===0;)e=e.next;return e}function Qo(e,t,r,n,i){var te,ye,Ae,Le,wt,bt,Qe,ze,ut;var a=(n&zs)!==0,s=t.length,o=e.items,l=sn(e.effect.first),c,d=null,p,b=[],_=[],v,x,f,g;if(a)for(g=0;g<s;g+=1)v=t[g],x=i(v,g),f=o.get(x).e,(f.f&xt)===0&&((ye=(te=f.nodes)==null?void 0:te.a)==null||ye.measure(),(p??(p=new Set)).add(f));for(g=0;g<s;g+=1){if(v=t[g],x=i(v,g),f=o.get(x).e,e.outrogroups!==null)for(const De of e.outrogroups)De.pending.delete(f),De.done.delete(f);if((f.f&Oe)!==0&&(Nn(f),a&&((Le=(Ae=f.nodes)==null?void 0:Ae.a)==null||Le.unfix(),(p??(p=new Set)).delete(f))),(f.f&xt)!==0)if(f.f^=xt,f===l)on(f,null,r);else{var m=d?d.next:l;f===e.effect.last&&(e.effect.last=f.prev),f.prev&&(f.prev.next=f.next),f.next&&(f.next.prev=f.prev),Zt(e,d,f),Zt(e,f,m),on(f,m,r),d=f,b=[],_=[],l=sn(d.next);continue}if(f!==l){if(c!==void 0&&c.has(f)){if(b.length<_.length){var S=_[0],A;d=S.prev;var k=b[0],E=b[b.length-1];for(A=0;A<b.length;A+=1)on(b[A],S,r);for(A=0;A<_.length;A+=1)c.delete(_[A]);Zt(e,k.prev,E.next),Zt(e,d,k),Zt(e,E,S),l=S,d=E,g-=1,b=[],_=[]}else c.delete(f),on(f,l,r),Zt(e,f.prev,f.next),Zt(e,f,d===null?e.effect.first:d.next),Zt(e,d,f),d=f;continue}for(b=[],_=[];l!==null&&l!==f;)(c??(c=new Set)).add(l),_.push(l),l=sn(l.next);if(l===null)continue}(f.f&xt)===0&&b.push(f),d=f,l=sn(f.next)}if(e.outrogroups!==null){for(const De of e.outrogroups)De.pending.size===0&&(wi(e,wn(De.done)),(wt=e.outrogroups)==null||wt.delete(De));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||c!==void 0){var $=[];if(c!==void 0)for(f of c)(f.f&Oe)===0&&$.push(f);for(;l!==null;)(l.f&Oe)===0&&l!==e.fallback&&$.push(l),l=sn(l.next);var C=$.length;if(C>0){var D=(n&ji)!==0&&s===0?r:null;if(a){for(g=0;g<C;g+=1)(Qe=(bt=$[g].nodes)==null?void 0:bt.a)==null||Qe.measure();for(g=0;g<C;g+=1)(ut=(ze=$[g].nodes)==null?void 0:ze.a)==null||ut.fix()}Zo(e,$,D)}}a&&St(()=>{var De,Ot;if(p!==void 0)for(f of p)(Ot=(De=f.nodes)==null?void 0:De.a)==null||Ot.apply()})}function Jo(e,t,r,n,i,a,s,o){var l=(s&Is)!==0?(s&Ds)===0?wo(r,!1,!1):Yt(r):null,c=(s&Ls)!==0?Yt(i):null;return{v:l,i:c,e:Fe(()=>(a(t,l??r,c??i,o),()=>{e.delete(n)}))}}function on(e,t,r){if(e.nodes)for(var n=e.nodes.start,i=e.nodes.end,a=t&&(t.f&xt)===0?t.nodes.start:r;n!==null;){var s=en(n);if(a.before(n),n===i)return;n=s}}function Zt(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function se(e,t,r,n,i){var o,l;if((o=t.$$host)!=null&&o.$$shadowRoot){const c=oi("slot");T(e,c);return}var a=(l=t.$$slots)==null?void 0:l[r],s=!1;a===!0&&(a=t.children,s=!0),a===void 0||a(e,s?()=>n:n)}function el(e,t,r){var n=new yi(e);tn(()=>{var i=t()??null;n.ensure(i,i&&(a=>r(a,i)))},Wt)}function tl(e,t,r,n,i,a){var s=null,o=e,l=new yi(o,!1);tn(()=>{const c=t()||null;var d=js;if(c===null){l.ensure(null,null);return}return l.ensure(c,p=>{if(c){if(s=oi(c,d),an(s,s),n){var b=null,_=s.appendChild(It());n(s,_),b==null||b.remove()}H.nodes.end=s,p.before(s)}}),()=>{}},Wt),ci(()=>{})}function rl(e,t){var r=void 0,n;ya(()=>{r!==(r=t())&&(n&&(Ee(n),n=null),r&&(n=Fe(()=>{ui(()=>r(e))})))})}function Da(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=Da(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function nl(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=Da(e))&&(n&&(n+=" "),n+=t);return n}function pr(e){return typeof e=="object"?nl(e):e??""}const Ba=[...` 	
\r\f \v\uFEFF`];function il(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var i of Object.keys(r))if(r[i])n=n?n+" "+i:i;else if(n.length)for(var a=i.length,s=0;(s=n.indexOf(i,s))>=0;){var o=s+a;(s===0||Ba.includes(n[s-1]))&&(o===n.length||Ba.includes(n[o]))?n=(s===0?"":n.substring(0,s))+n.substring(o+1):s=o}}return n===""?null:n}function Va(e,t=!1){var r=t?" !important;":";",n="";for(var i of Object.keys(e)){var a=e[i];a!=null&&a!==""&&(n+=" "+i+": "+a+r)}return n}function bi(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function al(e,t){if(t){var r="",n,i;if(Array.isArray(t)?(n=t[0],i=t[1]):n=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var a=!1,s=0,o=!1,l=[];n&&l.push(...Object.keys(n).map(bi)),i&&l.push(...Object.keys(i).map(bi));var c=0,d=-1;const x=e.length;for(var p=0;p<x;p++){var b=e[p];if(o?b==="/"&&e[p-1]==="*"&&(o=!1):a?a===b&&(a=!1):b==="/"&&e[p+1]==="*"?o=!0:b==='"'||b==="'"?a=b:b==="("?s++:b===")"&&s--,!o&&a===!1&&s===0){if(b===":"&&d===-1)d=p;else if(b===";"||p===x-1){if(d!==-1){var _=bi(e.substring(c,d).trim());if(!l.includes(_)){b!==";"&&p++;var v=e.substring(c,p).trim();r+=" "+v+";"}}c=p+1,d=-1}}}}return n&&(r+=Va(n)),i&&(r+=Va(i,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Ce(e,t,r,n,i,a){var s=e[qn];if(s!==r||s===void 0){var o=il(r,n,a);o==null?e.removeAttribute("class"):t?e.className=o:e.setAttribute("class",o),e[qn]=r}else if(a&&i!==a)for(var l in a){var c=!!a[l];(i==null||c!==!!i[l])&&e.classList.toggle(l,c)}return a}function xi(e,t={},r,n){for(var i in r){var a=r[i];t[i]!==a&&(r[i]==null?e.style.removeProperty(i):e.style.setProperty(i,a,n))}}function Fa(e,t,r,n){var i=e[Kn];if(i!==t){var a=al(t,n);a==null?e.removeAttribute("style"):e.style.cssText=a,e[Kn]=t}else n&&(Array.isArray(n)?(xi(e,r==null?void 0:r[0],n[0]),xi(e,r==null?void 0:r[1],n[1],"important")):xi(e,r,n));return n}function Ha(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Ua(e,t){var r=!("__defaultValue"in e);!r&&e.__defaultValue===t||(e.__defaultValue=t,Wa(e,!r||"__value"in e))}function Wa(e,t){var r=e.__defaultValue,n=e.multiple,i=n?r??[]:null;if(!(n&&!ie(i))){var a=e.selectedIndex,s=t&&n?new Set(e.selectedOptions):null;for(var o of e.options){var l=ki(o);Ha(o,n?i.includes(l):ua(l,r))}if(t)if(s!==null)for(o of e.options){var c=s.has(o);o.selected!==c&&(o.selected=c)}else e.selectedIndex!==a&&(e.selectedIndex=a)}}function zt(e,t,r=!1){if(e.multiple){if(t==null)return;if(!ie(t))return Ys();for(var n of e.options)n.selected=t.includes(ki(n));return}for(n of e.options){var i=ki(n);if(ua(i,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function hr(e){var t=new MutationObserver(r=>{r.every(sl)||("__defaultValue"in e&&Wa(e,!1),"__value"in e&&zt(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ci(()=>{t.disconnect()})}function ki(e){return"__value"in e?e.__value:e.value}function sl(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(r=>r.nodeName==="SELECTEDCONTENT")}return!1}const ln=Symbol("class"),cn=Symbol("style"),ja=Symbol("is custom element"),Ga=Symbol("is html"),ol=$n?"input":"INPUT",ll=$n?"option":"OPTION",Xa=$n?"select":"SELECT",cl=$n?"progress":"PROGRESS";function Pn(e,t){var r=Cn(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==cl)||(e.value=t??"")}function ul(e,t){var r=Cn(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function Se(e,t,r,n){var i=Cn(e);i[t]!==(i[t]=r)&&(t==="loading"&&(e[Rs]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Ka(e).has(t)?e[t]=r:e.setAttribute(t,r))}function fl(e,t,r,n,i=!1,a=!1){var s=Cn(e),o=s[ja],l=!s[Ga],c=t||{},d=e.nodeName===ll,p=e.nodeName===Xa;for(var b in t)!(b in r)&&b[0]+b[1]!=="$$"&&(r[b]=null);r.class?r.class=pr(r.class):r[ln]&&(r.class=null),r[cn]&&(r.style??(r.style=null));var _=Ka(e);if(e.nodeName===ol&&"type"in r&&("value"in r||"__value"in r)){var v=r.type;(v!==c.type||v===void 0&&e.hasAttribute("type"))&&(c.type=v,Se(e,"type",v))}for(const k in r){let E=r[k];if(d&&k==="value"&&E==null){e.value=e.__value="",c[k]=E;continue}if(k==="class"){var x=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ce(e,x,E,n,t==null?void 0:t[ln],r[ln]),c[k]=E,c[ln]=r[ln];continue}if(k==="style"){Fa(e,E,t==null?void 0:t[cn],r[cn]),c[k]=E,c[cn]=r[cn];continue}var f=c[k];if(!(E===f&&!(E===void 0&&e.hasAttribute(k)))){c[k]=E;var g=k[0]+k[1];if(g!=="$$")if(g==="on"){const $={},C="$$"+k;let D=k.slice(2);var m=Io(D);if(Co(D)&&(D=D.slice(0,-7),$.capture=!0),!m&&f){if(E!=null)continue;e.removeEventListener(D,c[C],$),c[C]=null}if(m)Q(D,e,E),vr([D]);else if(E!=null){let te=function(ye){c[k].call(this,ye)};c[C]=Vo(D,e,te,$)}}else if(k==="style")Se(e,k,E);else if(k==="autofocus")vo(e,!!E);else if(!o&&(k==="__value"||k==="value"&&E!=null))e.value=e.__value=E;else if(k==="selected"&&d)Ha(e,E);else{var S=k;l||(S=zo(S));var A=S==="defaultValue"||S==="defaultChecked";if(p&&S==="defaultValue")continue;if(E==null&&!o&&!A)if(s[k]=null,S==="value"||S==="checked"){let $=e;const C=t===void 0;if(S==="value"){let D=$.defaultValue;$.removeAttribute(S),$.defaultValue=D,$.value=$.__value=C?D:null}else{let D=$.defaultChecked;$.removeAttribute(S),$.defaultChecked=D,$.checked=C?D:!1}}else e.removeAttribute(k);else A||(o||typeof E!="string")&&_.has(S)?(e[S]=E,S in s&&(s[S]=be)):typeof E!="function"&&Se(e,S,E)}}}return c}function Ya(e,t,r=[],n=[],i=[],a,s=!1,o=!1){Zi(i,r,n,l=>{var c=void 0,d={},p=e.nodeName===Xa,b=!1;if(ya(()=>{var v=t(...l.map(h)),x=fl(e,c,v,a,s,o);if(b&&p){var f=e;"defaultValue"in v&&Ua(f,v.defaultValue),"value"in v&&zt(f,v.value)}for(let m of Object.getOwnPropertySymbols(d))v[m]||Ee(d[m]);for(let m of Object.getOwnPropertySymbols(v)){var g=v[m];m.description===Gs&&(!c||g!==c[m])&&(d[m]&&Ee(d[m]),d[m]=Fe(()=>rl(e,()=>g))),x[m]=g}c=x}),p){var _=e;ui(()=>{var v=c;"defaultValue"in v&&Ua(_,v.defaultValue),zt(_,v.value,!0),hr(_)})}b=!0})}function Cn(e){return e[Sn]??(e[Sn]={[ja]:e.nodeName.includes("-"),[Ga]:e.namespaceURI===Xi})}var qa=new Map;function Ka(e){var t=e.getAttribute("is")||e.nodeName,r=qa.get(t);if(r)return r;qa.set(t,r=new Set);for(var n,i=e,a=Element.prototype;a!==i;){n=Di(i);for(var s in n)n[s].set&&s!=="innerHTML"&&s!=="textContent"&&s!=="innerText"&&r.add(s);i=Wn(i)}return r}function Si(e,t){return e===t||(e==null?void 0:e[kt])===t}function Za(e=Zn(),t,r,n){var i=de.r,a=H;return ui(()=>{var s,o;return ma(()=>{s=o,o=[],qt(()=>{Si(r(...o),e)||(t(e,...o),s&&Si(r(...s),e)&&t(null,...s))})}),()=>{let l=a;for(;l!==i&&l.parent!==null&&l.parent.f&bn;)l=l.parent;const c=()=>{o&&Si(r(...o),e)&&t(null,...o)},d=l.teardown;l.teardown=()=>{c(),d==null||d()}}}),e}function dl(e=!1){const t=de,r=t.l.u;if(!r)return;let n=()=>fr(t.s);if(e){let i=0,a={};const s=Or(()=>{let o=!1;const l=t.s;for(const c in l)l[c]!==a[c]&&(a[c]=l[c],o=!0);return o&&i++,i});n=()=>h(s)}r.b.length&&Eo(()=>{Qa(t,n),jn(r.b)}),Rr(()=>{const i=qt(()=>r.m.map(Ps));return()=>{for(const a of i)typeof a=="function"&&a()}}),r.a.length&&Rr(()=>{Qa(t,n),jn(r.a)})}function Qa(e,t){if(e.l.s)for(const r of e.l.s)h(r);t()}let Rn=!1;function vl(e){var t=Rn;try{return Rn=!1,[e(),Rn]}finally{Rn=t}}const pl={get(e,t){if(!e.exclude.includes(t))return h(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var n=H;try{at(e.parent_effect),e.special[t]=gt({get[t](){return e.props[t]}},t,Gi)}finally{at(n)}}return e.special[t](r),oa(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),oa(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ae(e,t){return new Proxy({props:e,exclude:t,special:{},version:Yt(0),parent_effect:H},pl)}const hl={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Wr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let i=e.props[n];Wr(i)&&(i=i());const a=Ut(i,t);if(a&&a.set)return a.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Wr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const i=Ut(n,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===kt||t===Wi)return!1;for(let r of e.props)if(Wr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Wr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function le(...e){return new Proxy({props:e},hl)}function gt(e,t,r,n){var A;var i=!Mr||(r&Vs)!==0,a=(r&Fs)!==0,s=(r&Hs)!==0,o=n,l=!0,c=void 0,d=()=>s&&i?(c??(c=Or(n)),h(c)):(l&&(l=!1,o=s?qt(n):n),o);let p;if(a){var b=kt in e||Wi in e;p=((A=Ut(e,t))==null?void 0:A.set)??(b&&t in e?k=>e[t]=k:void 0)}var _,v=!1;a?[_,v]=vl(()=>e[t]):_=e[t],_===void 0&&n!==void 0&&(_=d(),p&&(i&&io(),p(_)));var x;if(i?x=()=>{var k=e[t];return k===void 0?d():(l=!0,k)}:x=()=>{var k=e[t];return k!==void 0&&(o=void 0),k===void 0?o:k},i&&(r&Gi)===0)return x;if(p){var f=e.$$legacy;return(function(k,E){return arguments.length>0?((!i||!E||f||v)&&p(E?x():k),k):x()})}var g=!1,m=((r&Bs)!==0?Or:Jn)(()=>(g=!1,x()));a&&h(m);var S=H;return(function(k,E){if(arguments.length>0){const $=E?h(m):i&&a?Ve(k):k;return N(m,$),g=!0,o!==void 0&&(o=$),k}return Lt&&g||(S.f&Pe)!==0?m.v:h(m)})}function $i(e){de===null&&Zs(),Mr&&de.l!==null?_l(de).m.push(e):Rr(()=>{const t=qt(e);if(typeof t=="function")return t})}function _l(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const gl="5";typeof window<"u"&&((ls=window.__svelte??(window.__svelte={})).v??(ls.v=new Set)).add(gl);const ee=Ve({ready:!1,cleanScreen:!1,panelOpen:!0,settingsOpen:!1,startupOpen:!0,focusSection:null,focusNonce:0,status:{}});function ml(e){ee.panelOpen=!0,ee.focusSection=e,ee.focusNonce++}const Ge=Ve({});function Ja(e){try{return structuredClone(e)}catch{return JSON.parse(JSON.stringify(e))}}function re(e){var t,r,n;if(e==null)return e;try{return((n=(r=(t=window.XRA)==null?void 0:t.i18n)==null?void 0:r.t)==null?void 0:n.call(r,e))??e}catch{return e}}function Ue(e,t){const r=e.split(".");let n=Ge;for(const i of r){if(n==null)return t;n=n[i]}return n===void 0?t:n}function yl(e){var r,n,i,a,s,o,l,c;const t=window.XRA;if(t){if(e.startsWith("background.")){(n=(r=t.background)==null?void 0:r.apply)==null||n.call(r);return}if(e==="ui.language"){(a=(i=t.i18n)==null?void 0:i.setLanguage)==null||a.call(i,Ge.ui.language);return}if(e==="ui.preview_wireframe"){typeof t.applyMocapWireframeVisibility=="function"&&t.applyMocapWireframeVisibility();return}if(e==="ui.mocap_view"){typeof t.applyMocapWireframeVisibility=="function"&&t.applyMocapWireframeVisibility();return}if(e.startsWith("performance.")){window.XRA_render_fps_limit=Number(Ge.performance.render_fps??60),window.XRA_gpu_preference=String(Ge.performance.gpu_preference||"default"),window.XRA_preserve_drawing_buffer=Ge.performance.preserve_drawing_buffer!==!1,window.XRA_antialias=Ge.performance.antialias!=="off",(o=(s=t.events)==null?void 0:s.emit)==null||o.call(s,"performance",Ge.performance);return}(c=(l=t.events)==null?void 0:l.emit)==null||c.call(l,"config-change",{path:e,value:Ue(e)})}}function ot(e,t){var a,s;const r=window.XRA,n=e.split(".");let i=Ge;for(let o=0;o<n.length-1;o++)i[n[o]]==null&&(i[n[o]]={}),i=i[n[o]];if(i[n[n.length-1]]=t,r!=null&&r.config){let o=r.config;for(let l=0;l<n.length-1;l++)o[n[l]]==null&&(o[n[l]]={}),o=o[n[l]];o[n[n.length-1]]=t}yl(e);try{(s=(a=r==null?void 0:r.profileService)==null?void 0:a.save)==null||s.call(a)}catch{}}function In(){var e,t,r;ee.cleanScreen=!ee.cleanScreen,document.body.classList.toggle("xra-total-clean-screen",ee.cleanScreen);try{(r=(t=(e=window.XRA)==null?void 0:e.ui)==null?void 0:t.setHidden)==null||r.call(t,ee.cleanScreen)}catch{}}function wl(){var e;try{Object.assign(Ge,Ja(((e=window.XRA)==null?void 0:e.config)||{}))}catch{}}function es(){var e;try{const t=(e=window.SA_bridge)==null?void 0:e.backend;t&&typeof t.status=="function"&&(ee.status=t.status()||{})}catch{}}function bl(){const e=()=>window.XRA&&window.XRA.config?(Object.assign(Ge,Ja(window.XRA.config)),ee.ready=!0,es(),window.addEventListener("keydown",t=>{t.key==="Escape"&&ee.cleanScreen&&(t.preventDefault(),In())},!0),!0):!1;if(!e()){const t=setInterval(()=>{e()&&clearInterval(t)},200)}}const xl={camera:{title:"Camera",icon:"Camera"},devices:{title:"Devices",icon:"SlidersHorizontal"},pose_model:{title:"Pose model",icon:"PersonStanding"},performance:{title:"Performance",icon:"Zap"},tracking:{title:"Motion capture",icon:"Activity"},body:{title:"Body",icon:"PersonStanding"},collider:{title:"Body collider",icon:"Shield"},lip:{title:"Audio & Lip-sync",icon:"Mic"},background:{title:"Background",icon:"Image"},avatar:{title:"Character position (avatar only)",icon:"User"},second_avatar:{title:"Remote avatar (Studio Link)",icon:"Globe"},stage:{title:"3D Stage & Environment",icon:"Landmark"},recorder:{title:"Recording / capture",icon:"Video"},visual_effects:{title:"Visual effects",icon:"Sparkles"},debug:{title:"Diagnostics",icon:"Bug"},ui:{title:"UI & overlays",icon:"Monitor"}},ts=["performance","tracking","body","collider","lip","background","stage","avatar","second_avatar","recorder","visual_effects","debug","ui","camera","devices","pose_model"],kl=new Set(["left_settings","_custom_","_excluded_"]),Sl=new Set(["camera.view_presets","camera.selected_view_preset","ui.preview_video","ui.preview_wireframe","ui.preview_debug","performance.auto_last_result","recorder.output_dir"]);function rs(e){const t=String(e).replace(/_/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").trim();return t.charAt(0).toUpperCase()+t.slice(1)}const $l={"ui.language":{type:"select",options:()=>{var e,t;return((t=(e=window.XRA)==null?void 0:e.i18n)==null?void 0:t.LANGUAGES)||[["en","English"]]}},"background.mode":{type:"select",options:[["color","Color"],["image","Image"],["none","None (transparent · OBS)"]]},"background.color":{type:"color"},"background.path":{type:"text"},"ui.mocap_view":{type:"select",label:"Mocap window",options:[["off","Off"],["both","Webcam + skeleton"],["wireframe","Skeleton only"],["video","Webcam only"]]},"ui.mocap_visibility":{type:"select",label:"Mocap window visibility",options:[["always","Always on (black while idle)"],["auto","Auto (hide when tracking is off)"]]},"performance.tracking_pipeline":{type:"select",label:"Tracking mode",options:[["FULL_BODY","Full Body"],["FACE","Face only"],["UPPER_BODY","Upper body"]]},"performance.render_resolution":{type:"select",options:[["720p","720p (HD · GPU Saving)"],["1080p","1080p (Full HD · Recommended)"],["1440p","1440p (2K · High resolution)"]]},"performance.render_fps":{type:"slider",min:15,max:240,step:1},"performance.gpu_preference":{type:"select",label:"Graphics card (GPU)",options:[["default","Default"],["high-performance","Dedicated GPU (High Performance)"],["low-power","Integrated GPU (Low Power)"]]},"performance.shadows":{type:"select",options:[["auto","Auto"],["on","Enabled"],["off","Disabled (GPU saving)"]]},"performance.antialias":{type:"select",label:"Anti-Aliasing (AA)",options:[["auto","Enabled (Hardware MSAA · Recommended)"],["off","Disabled"]]},"performance.spring_bone":{type:"select",label:"Hair/cloth physics (Spring Bone)",options:[["full","Full (every frame)"],["half","Half (1 frame out of 2 · Saving)"],["off","Off"]]},"performance.infer_mode":{type:"select",options:[["native","Native (Auto)"],["640x360","640×360 (Recommended · 30 FPS smooth)"],["640x480","640×480 (Standard 4:3 format)"],["1280x720","1280×720 (HD 720p · High precision)"]]},"performance.pose_fps":{type:"slider",min:5,max:30,step:1},"performance.hand_fps":{type:"slider",min:5,max:30,step:1},"performance.min_tracking_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_pose_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_face_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_joint_confidence":{type:"slider",min:.05,max:1,step:.05},"tracking.hand_recovery_mode":{type:"select",options:[["normal","Normal"],["aggressive","Aggressive"],["off","Off"]]},"tracking.hand_detection_sensitivity":{type:"select",options:[["high","High"],["normal","Normal"],["low","Low"]]},"tracking.stabilize_hand_percent":{type:"slider",min:0,max:100,step:1},"tracking.stabilize_arm":{type:"slider",min:0,max:100,step:1},"tracking.stabilize_arm_time":{type:"slider",min:0,max:2,step:.05},"tracking.native_smoothing":{type:"slider",min:0,max:1,step:.01},"tracking.body_bend_reduction":{type:"slider",min:0,max:1,step:.01},"tracking.upper_body_guard_strength":{type:"slider",min:0,max:1,step:.01},"tracking.guard_jump_deg":{type:"slider",min:5,max:120,step:1},"tracking.guard_hold_ms":{type:"slider",min:0,max:2e3,step:10},"tracking.guard_reacquire_deg":{type:"slider",min:5,max:120,step:1},"tracking.adaptive_smoothing_strength":{type:"slider",min:0,max:1,step:.01},"tracking.guard_confidence_min":{type:"slider",min:0,max:1,step:.01},"tracking.guard_release_ms":{type:"slider",min:0,max:2e3,step:10},"tracking.guard_mode":{type:"select",options:[["off","Off"],["auto","Auto"]]},"tracking.desk_torso_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_hips_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_legs_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_max_yaw_deg":{type:"slider",min:0,max:90,step:1},"tracking.desk_max_pitch_deg":{type:"slider",min:0,max:90,step:1},"tracking.desk_max_roll_deg":{type:"slider",min:0,max:90,step:1},"body.anchor_strength":{type:"slider",min:0,max:1,step:.01},"body.transition_ms":{type:"slider",min:0,max:2e3,step:10},"avatar.offset_x":{type:"slider",min:-5,max:5,step:.01},"avatar.offset_y":{type:"slider",min:-5,max:5,step:.01},"avatar.offset_z":{type:"slider",min:-5,max:5,step:.01},"avatar.rotation_y":{type:"slider",min:-180,max:180,step:1},"second_avatar.offset_x":{type:"slider",min:-20,max:20,step:.1},"second_avatar.offset_y":{type:"slider",min:-10,max:10,step:.1},"second_avatar.offset_z":{type:"slider",min:-10,max:10,step:.1},"second_avatar.rotation_y":{type:"slider",min:-180,max:180,step:1},"stage.scale":{type:"slider",min:.1,max:5,step:.01},"stage.rotation_x":{type:"slider",min:-180,max:180,step:1},"stage.rotation_y":{type:"slider",min:-180,max:180,step:1},"stage.rotation_z":{type:"slider",min:-180,max:180,step:1},"stage.offset_x":{type:"slider",min:-10,max:10,step:.05},"stage.offset_y":{type:"slider",min:-10,max:10,step:.05},"stage.offset_z":{type:"slider",min:-10,max:10,step:.05},"stage.scene_zoom":{type:"slider",min:.5,max:3,step:.01},"stage.lights_intensity":{type:"slider",min:0,max:3,step:.05},"collider.preset":{type:"select",options:[["CUSTOM","Custom"],["NONE","None"]]},"collider.reaction":{type:"select",options:[["z_push","Z push"],["bounce","Bounce"],["block","Block"]]},"collider.head":{type:"slider",min:0,max:200,step:1},"collider.chest":{type:"slider",min:0,max:200,step:1},"collider.waist":{type:"slider",min:0,max:200,step:1},"collider.hip":{type:"slider",min:0,max:200,step:1},"collider.front_clearance":{type:"slider",min:0,max:50,step:1},"lip.analysis_fps":{type:"slider",min:5,max:60,step:1},"lip.fft_size":{type:"select",label:"FFT size",options:[["256","256"],["512","512"],["1024","1024"],["2048","2048"]]},"lip.mic_mix":{type:"slider",min:0,max:1,step:.01},"lip.threshold":{type:"slider",min:0,max:.2,step:.001},"lip.response_gain":{type:"slider",min:0,max:3,step:.05},"lip.vowel_emphasis":{type:"slider",min:0,max:3,step:.05},"recorder.mode":{type:"select",label:"Recording source",options:[["video_audio","Video + Audio"],["video","Video only"],["audio","Audio only"]]},"recorder.audio_only_variant":{type:"select",label:"Audio only mode",options:[["both","Processed + RAW"],["processed","Processed"],["raw","RAW"]]},"recorder.capture_source":{type:"select",label:"Output source",options:[["classic_v74","Classic output · recommended"],["clean_scene","Clean scene output · experimental (no UI)"],["native_xr","XR native video only · fallback"]]},"recorder.output_format":{type:"select",options:[["webm","WebM"],["mp4","MP4"]]},"recorder.audio_profile":{type:"select",options:[["podcast","Podcast"],["call","Call (Browser echo/noise filters)"]]},"recorder.hardware_encode":{type:"select",options:[["auto","Auto"],["on","On"],["off","Off (CPU)"]]},"recorder.width":{type:"slider",min:320,max:3840,step:2},"recorder.height":{type:"slider",min:240,max:2160,step:2},"recorder.fps":{type:"slider",min:15,max:60,step:1},"recorder.gate_threshold_db":{type:"slider",min:-80,max:-5,step:.5},"recorder.gate_hold_ms":{type:"slider",min:0,max:1e3,step:10},"recorder.gate_release_ms":{type:"slider",min:0,max:1e3,step:10},"recorder.video_bps":{type:"slider",min:5e5,max:2e7,step:1e5},"recorder.audio_bps":{type:"slider",min:32e3,max:32e4,step:8e3},"recorder.segment_minutes":{type:"select",options:[["0","Off"],["30","Every 30 min"],["60","Every 60 min"]]},"recorder.raw_audio_format":{type:"select",options:[["flac","FLAC (lossless)"],["wav","WAV (large)"]]},"recorder.filename":{type:"text"},"camera.optimized":{type:"toggle"},"camera.width":{type:"slider",min:160,max:1920,step:2},"camera.height":{type:"slider",min:120,max:1080,step:2},"camera.fps":{type:"slider",min:5,max:60,step:1}};function El(e){const t=[];for(const[r,n]of Object.entries(e||{})){if(kl.has(r)||!n||typeof n!="object"||Array.isArray(n))continue;const i=xl[r]||{},a=[];for(const[s,o]of Object.entries(n)){const l=`${r}.${s}`;if(Sl.has(l))continue;const c=$l[l]||{};if(c.hidden||o!==null&&typeof o=="object")continue;const d=c.type||(typeof o=="boolean"?"toggle":typeof o=="number"?"number":"text");a.push({type:d,path:l,label:c.label||rs(s),min:c.min,max:c.max,step:c.step,options:c.options})}a.length&&t.push({id:r,title:i.title||rs(r),icon:i.icon||"⚙",controls:a})}return t.sort((r,n)=>{const i=ts.indexOf(r.id),a=ts.indexOf(n.id);return(i<0?999:i)-(a<0?999:a)}),t}var Al=me("<option> </option>"),Ml=me("<select></select>"),Nl=me("<select><option> </option><option> </option></select>"),Tl=me('<input type="range"/> <span class="xra-val"> </span>',1),Ol=me('<input type="checkbox"/>'),Pl=me('<input type="color"/>'),Cl=me('<input type="number"/>'),Rl=me('<input type="text"/>'),Il=me('<label class="xra-row"><span class="xra-row-label"> </span> <!></label>');function Ll(e,t){Gt(t,!0);const r=nt(()=>typeof t.control.options=="function"?t.control.options():t.control.options||[]),n=f=>f===!1?"off":"auto",i=f=>f==="off"?!1:null;var a=Il(),s=z(a),o=q(s,!0),l=P(s,2);{var c=f=>{var g=Ml();Kt(g,21,()=>h(r),La,(S,A)=>{var k=Al(),E=q(k,!0),$={};ge(C=>{K(E,C),$!==($=h(A)[0])&&(k.value=(k.__value=$)??"")},[()=>re(h(A)[1])]),T(S,k)});var m;hr(g),ge(S=>{m!==(m=S)&&(g.value=(g.__value=m)??"",zt(g,m))},[()=>Ue(t.control.path)]),Q("change",g,S=>ot(t.control.path,S.currentTarget.value)),T(f,g)},d=f=>{var g=Nl(),m=z(g),S=q(m,!0);m.value=m.__value="auto";var A=P(m),k=q(A,!0);A.value=A.__value="off";var E;hr(g),ge(($,C,D)=>{K(S,$),K(k,C),E!==(E=D)&&(g.value=(g.__value=E)??"",zt(g,E))},[()=>re("Auto (follow tracking)"),()=>re("Off"),()=>n(Ue(t.control.path))]),Q("change",g,$=>ot(t.control.path,i($.currentTarget.value))),T(f,g)},p=f=>{var g=Tl(),m=Y(g),S=P(m,2),A=q(S,!0);ge((k,E)=>{Se(m,"min",t.control.min),Se(m,"max",t.control.max),Se(m,"step",t.control.step),Pn(m,k),K(A,E)},[()=>Ue(t.control.path,t.control.min),()=>Ue(t.control.path)]),Q("input",m,k=>ot(t.control.path,Number(k.currentTarget.value))),T(f,g)},b=f=>{var g=Ol();ge(m=>ul(g,m),[()=>!!Ue(t.control.path)]),Q("change",g,m=>ot(t.control.path,m.currentTarget.checked)),T(f,g)},_=f=>{var g=Pl();ge(m=>Pn(g,m),[()=>Ue(t.control.path)]),Q("input",g,m=>ot(t.control.path,m.currentTarget.value)),T(f,g)},v=f=>{var g=Cl();ge(m=>{Se(g,"step",t.control.step||"any"),Pn(g,m)},[()=>Ue(t.control.path,0)]),Q("input",g,m=>ot(t.control.path,Number(m.currentTarget.value))),T(f,g)},x=f=>{var g=Rl();ge(m=>Pn(g,m),[()=>Ue(t.control.path,"")]),Q("change",g,m=>ot(t.control.path,m.currentTarget.value)),T(f,g)};_t(l,f=>{t.control.type==="select"?f(c):t.control.type==="tristate"?f(d,1):t.control.type==="slider"?f(p,2):t.control.type==="toggle"?f(b,3):t.control.type==="color"?f(_,4):t.control.type==="number"?f(v,5):t.control.type==="text"&&f(x,6)})}ge(f=>K(o,f),[()=>re(t.control.label)]),T(e,a),Xt()}vr(["change","input"]),co();/**
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
 */const ns=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();var Bl=Uo("<svg><!><!></svg>");function ce(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]),n=ae(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Gt(t,!1);let i=gt(t,"name",8,void 0),a=gt(t,"color",8,"currentColor"),s=gt(t,"size",8,24),o=gt(t,"strokeWidth",8,2),l=gt(t,"absoluteStrokeWidth",8,!1),c=gt(t,"iconNode",24,()=>[]);dl();var d=Bl();Ya(d,(_,v,x)=>({...zl,..._,...n,width:s(),height:s(),stroke:a(),"stroke-width":v,class:x}),[()=>Dl(n)?void 0:{"aria-hidden":"true"},()=>(fr(l()),fr(o()),fr(s()),qt(()=>l()?Number(o())*24/Number(s()):o())),()=>(fr(ns),fr(i()),fr(r),qt(()=>ns("lucide-icon","lucide",i()?`lucide-${i()}`:"",r.class)))]);var p=z(d);Kt(p,1,c,La,(_,v)=>{var x=nt(()=>Fi(h(v),2));let f=()=>h(x)[0],g=()=>h(x)[1];var m=J(),S=Y(m);tl(S,f,!0,(A,k)=>{Ya(A,()=>({...g()}))}),T(_,m)});var b=P(p);se(b,t,"default",{}),T(e,d),Xt()}function Vl(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];ce(e,le({name:"camera"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=Y(s);se(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function Fl(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 5H3"}],["path",{d:"M12 19H3"}],["path",{d:"M14 3v4"}],["path",{d:"M16 17v4"}],["path",{d:"M21 12h-9"}],["path",{d:"M21 19h-5"}],["path",{d:"M21 5h-7"}],["path",{d:"M8 10v4"}],["path",{d:"M8 12H3"}]];ce(e,le({name:"sliders-horizontal"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=Y(s);se(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function Hl(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"5",r:"1"}],["path",{d:"m9 20 3-6 3 6"}],["path",{d:"m6 8 6 2 6-2"}],["path",{d:"M12 10v4"}]];ce(e,le({name:"person-standing"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=Y(s);se(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function Ul(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];ce(e,le({name:"zap"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=Y(s);se(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function Wl(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]];ce(e,le({name:"activity"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=Y(s);se(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function jl(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];ce(e,le({name:"shield"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=Y(s);se(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function Gl(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 19v3"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3"}]];ce(e,le({name:"mic"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=Y(s);se(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function Xl(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]];ce(e,le({name:"image"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=Y(s);se(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function Yl(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 18v-7"}],["path",{d:"M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"}],["path",{d:"M14 18v-7"}],["path",{d:"M18 18v-7"}],["path",{d:"M3 22h18"}],["path",{d:"M6 18v-7"}]];ce(e,le({name:"landmark"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=Y(s);se(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function ql(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];ce(e,le({name:"user"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=Y(s);se(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function Kl(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];ce(e,le({name:"globe"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=Y(s);se(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function Zl(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]];ce(e,le({name:"video"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=Y(s);se(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function Ql(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];ce(e,le({name:"sparkles"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=Y(s);se(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function Jl(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 20v-9"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97"}],["path",{d:"M22 13h-4"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97"}],["path",{d:"M6 13H2"}],["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13"}]];ce(e,le({name:"bug"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=Y(s);se(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function ec(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]];ce(e,le({name:"monitor"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=Y(s);se(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function tc(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"10",r:"8"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 22h10"}],["path",{d:"M12 22v-4"}]];ce(e,le({name:"webcam"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=Y(s);se(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function is(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}]];ce(e,le({name:"circle"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=Y(s);se(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function rc(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];ce(e,le({name:"square"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=Y(s);se(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function nc(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]];ce(e,le({name:"eye"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=Y(s);se(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function ic(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}],["path",{d:"m2 2 20 20"}]];ce(e,le({name:"eye-off"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=Y(s);se(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function ac(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];ce(e,le({name:"folder-open"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=Y(s);se(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function sc(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];ce(e,le({name:"info"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=Y(s);se(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function oc(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ce(e,le({name:"x"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=Y(s);se(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function lc(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];ce(e,le({name:"settings"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=Y(s);se(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function cc(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ce(e,le({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=Y(s);se(o,t,"default",{}),T(i,s)},$$slots:{default:!0}}))}function Xe(e,t){const r={Camera:Vl,SlidersHorizontal:Fl,PersonStanding:Hl,Zap:Ul,Activity:Wl,Shield:jl,Mic:Gl,Image:Xl,Landmark:Yl,User:ql,Globe:Kl,Video:Zl,Sparkles:Ql,Bug:Jl,Monitor:ec,Webcam:tc,Circle:is,Square:rc,Eye:nc,EyeOff:ic,FolderOpen:ac,Info:sc,X:oc,Settings:lc,RefreshCw:cc};let n=gt(t,"name",3,"Circle"),i=gt(t,"size",3,16),a=gt(t,"strokeWidth",3,2),s=gt(t,"class",3,"");const o=nt(()=>r[n()]??is);var l=J(),c=Y(l);el(c,()=>h(o),(d,p)=>{p(d,{get size(){return i()},get"stroke-width"(){return a()},get class(){return s()}})}),T(e,l)}var uc=me('<div class="xra-sec-body"></div>'),fc=me('<details class="xra-sec"><summary><span class="xra-sec-title"><!> <span> </span></span> <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></summary> <!></details>');function dc(e,t){Gt(t,!0);const r="ui.sections_open";let n=G(Ve(qt(()=>{var f;return((f=Ue(r,{}))==null?void 0:f[t.section.id])??!1}))),i;function a(){N(n,!h(n)),ot(`${r}.${t.section.id}`,h(n))}Rr(()=>{ee.focusNonce,!(ee.focusSection!==t.section.id||!ee.panelOpen)&&(N(n,!0),ot(`${r}.${t.section.id}`,!0),requestAnimationFrame(()=>i==null?void 0:i.scrollIntoView({block:"nearest",behavior:"smooth"})))});var s=fc(),o=z(s),l=z(o),c=z(l);Xe(c,{get name(){return t.section.icon},size:15,class:"xra-sec-icon"});var d=P(c,2),p=q(d,!0),b=P(l,2);let _;var v=P(o,2);{var x=f=>{var g=uc();Kt(g,21,()=>t.section.controls,m=>m.path,(m,S)=>{var A=J(),k=Y(A);{var E=C=>{Ll(C,{get control(){return h(S)}})},$=nt(()=>!h(S).when||h(S).when(Ge));_t(k,C=>{h($)&&C(E)})}T(m,A)}),T(f,g)};_t(v,f=>{h(n)&&f(x)})}Za(s,f=>i=f,()=>i),ge(f=>{s.open=h(n),K(p,f),_=Ce(b,0,"xra-sec-chevron",null,_,{open:h(n)})},[()=>re(t.section.title)]),Q("click",o,f=>{f.preventDefault(),a()}),T(e,s),Xt()}vr(["click"]);var un=me('<option class="svelte-x8svx4"> </option>'),vc=me('<div class="warn svelte-x8svx4"> </div>'),pc=me('<div class="xra-startup svelte-x8svx4"><div class="card svelte-x8svx4"><div class="head svelte-x8svx4"><div class="svelte-x8svx4"><h2 class="svelte-x8svx4">XR Animator</h2> <div class="sub svelte-x8svx4"> </div></div></div> <div class="grid svelte-x8svx4"><label class="field svelte-x8svx4"><div class="sub svelte-x8svx4">Language</div> <select class="svelte-x8svx4"></select></label> <label class="field svelte-x8svx4"><div class="sub svelte-x8svx4">Master preset</div> <select class="svelte-x8svx4"></select></label></div> <div class="status svelte-x8svx4"> </div> <section class="camera svelte-x8svx4"><div class="camera-head svelte-x8svx4"><div class="camera-title svelte-x8svx4"> </div> <div> </div></div> <div class="camera-row svelte-x8svx4"><select class="svelte-x8svx4"><!></select> <button type="button" class="action svelte-x8svx4"><!></button></div> <!></section> <div class="sub bg svelte-x8svx4"> </div> <div class="avatar svelte-x8svx4"><div class="sub svelte-x8svx4"> </div> <button type="button" class="action svelte-x8svx4"> </button></div> <div class="foot svelte-x8svx4"><button type="button" class="action primary confirm svelte-x8svx4"> </button></div></div></div>');function hc(e,t){Gt(t,!0);const r=()=>window.XRA,n=y=>re(y),i=["AUTO","ECO","LOW","BALANCED","QUALITY","HIGH","MAX","CUSTOM"];function a(){var y,w,M;try{(M=(w=(y=r())==null?void 0:y.profileService)==null?void 0:w.save)==null||M.call(w,0)}catch{}}const s=(()=>{var w,M;const y=(M=(w=r())==null?void 0:w.i18n)==null?void 0:M.LANGUAGES;return Array.isArray(y)&&y.length?y:[["auto","Auto / System"],["en","English"],["it","Italiano"]]})();let o=G("auto"),l=G("CUSTOM"),c=G(""),d=G("default"),p=G(Ve([])),b=G(!1),_=G(""),v=G(!1),x=G(""),f=G(""),g=G("Loading avatar…"),m=G(!0),S=G(!1),A=G(!1),k=G(!1),E=G(!1),$=0,C=[];async function D(y){const w=r();if(y=String(y||"CUSTOM").toUpperCase(),y==="CUSTOM"){w.config.performance.master_preset="CUSTOM",a(),N(c,"CUSTOM · ready");return}if(y==="AUTO"){N(c,"Benchmarking…");const M=await w.performance.benchmarkHardwareOnly();N(c,`AUTO → ${M.preset} (${M.fps.toFixed(1)} fps)`),await w.performance.applyPresetSafe(M.preset),w.config.performance.master_preset="AUTO",w.config.performance.auto_last_result=M,a();return}N(c,`${y}: applying…`),await w.performance.applyPresetSafe(y),N(c,`${y} · applied`)}function te(y=""){var V,U,ne;const w=(V=r())==null?void 0:V.nativeBridge,M=((U=w==null?void 0:w.activeCamera)==null?void 0:U.call(w))||{},O=!!((ne=w==null?void 0:w.cameraRunning)!=null&&ne.call(w));N(v,O),N(x,y||(O?`${n("ON")} · ${M.label||n("Default camera")}`:n("OFF")),!0)}async function ye(y=!1){var M,O,V;const w=(M=r())==null?void 0:M.nativeBridge;if(w!=null&&w.enumerateCameras){N(k,!0);try{const U=await w.enumerateCameras({requestPermission:y}),ne=w.activeCamera()||{};N(p,(U||[]).map(Te=>({deviceId:Te.deviceId,label:Te.label})),!0);const ve=ne.deviceId||((O=Ge.devices)==null?void 0:O.camera_device_id)||"";N(_,h(p).some(Te=>Te.deviceId===ve)?ve:((V=h(p)[0])==null?void 0:V.deviceId)||"",!0),N(b,!0),te()}catch{N(b,!0),te(n("Camera unavailable"))}finally{N(k,!1)}}}async function Ae(y){var V,U;const w=(V=r())==null?void 0:V.nativeBridge,M=((U=y==null?void 0:y.currentTarget)==null?void 0:U.value)??h(_),O=h(p).find(ne=>ne.deviceId===M);if(O){N(k,!0);try{const ne={deviceId:O.deviceId,label:O.label};w.cameraRunning()?await w.switchCamera(ne):await w.setCameraPreference(ne),te()}catch(ne){te("Error · "+ne.message)}finally{N(k,!1)}}}function Le(){var M,O,V,U,ne,ve,Te,Me;const y=(V=(O=(M=r())==null?void 0:M.xraBackend)==null?void 0:O.snapshot)==null?void 0:V.call(O),w=(y==null?void 0:y.capture)||((Me=(Te=(ve=(ne=(U=window.SA_bridge)==null?void 0:U.backend)==null?void 0:ne.status)==null?void 0:ve.call(ne))==null?void 0:Te.backend)==null?void 0:Me.capture);if(w!=null&&w.camera_busy){const Pt=(w.busy_processes&&w.busy_processes.length?w.busy_processes:w.busy_process?[w.busy_process]:[]).filter(kr=>!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(String(kr).trim()));if(Pt.length)return{busy:!0,proc:Pt.join(", ")}}if(w!=null&&w.last_error&&w.last_error.includes("Webcam occupata")){const pe=w.last_error.match(/Webcam occupata da:\s*([^.]+)/i),Pt=pe?pe[1].trim():"";if(!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(Pt))return{busy:!0,proc:w.last_error}}return{busy:!1,proc:""}}function wt(){var y,w,M,O,V,U,ne,ve,Te;if(typeof((w=(y=r())==null?void 0:y.nativeBridge)==null?void 0:w.isAvatarReady)=="function")return r().nativeBridge.isAvatarReady();if((M=window.MMD_SA)!=null&&M.MMD_started){const Me=(U=(V=(O=window.MMD_SA)==null?void 0:O.THREEX)==null?void 0:V.get_model)==null?void 0:U.call(V,0);let pe=Me;if((Me==null?void 0:Me.type)==="MMD_dummy")try{pe=Me.model||null}catch{pe=null}const Pt=((ne=pe==null?void 0:pe.model)==null?void 0:ne.scene)||(pe==null?void 0:pe.mesh)||(pe==null?void 0:pe.scene)||null;if(pe&&!(Me!=null&&Me.loading)&&!pe.loading&&!((Te=(ve=window.MMD_SA)==null?void 0:ve.THREEX)!=null&&Te._loading_model)&&Pt)return Pt.visible!==!1}return!1}function bt(){var w,M,O;const y=(w=r())==null?void 0:w.xraBackend;return!y||!y.active?!0:!!((O=(M=y.snapshot)==null?void 0:M.call(y))!=null&&O.ready)}function Qe(){if(h(E)||!ee.startupOpen)return;const y=Le();N(f,y.busy?`Webcam in use by another application (${y.proc}). Close it to start tracking.`:"",!0),wt()?bt()?y.busy?(N(m,!0),N(g,n("Camera busy…"),!0)):h(S)?N(m,!0):(N(m,!1),N(g,"START")):(N(m,!0),N(g,n("Connecting to backend…"),!0)):(N(m,!0),N(g,n("Loading avatar…"),!0))}async function ze(y){var M,O,V;const w=((M=y==null?void 0:y.currentTarget)==null?void 0:M.value)??h(l);N(l,w,!0),N(A,!0);try{await D(w),r().events.emit("state",{path:"performance.master_preset",value:r().config.performance.master_preset}),wl()}catch(U){console.error("[XRA START]",U),N(c,"Preset error: "+U.message)}finally{N(A,!1),(V=(O=r().ui)==null?void 0:O.refresh)==null||V.call(O)}}function ut(y){var w,M,O,V;N(o,((w=y==null?void 0:y.currentTarget)==null?void 0:w.value)??h(o),!0),(V=(O=(M=r())==null?void 0:M.i18n)==null?void 0:O.setLanguage)==null||V.call(O,h(o))}async function De(){var y,w;try{await((w=(y=r().nativeBridge)==null?void 0:y.openVrmPicker)==null?void 0:w.call(y))}catch(M){r().toast("VRM loader: "+M.message,"error",4500)}}async function Ot(y=!1){var M,O,V,U,ne,ve,Te,Me;if(h(E)||h(m))return;N(E,!0),$&&(clearInterval($),$=0),N(S,!0),N(g,"Starting…");const w=r();if(a(),ee.startupOpen=!1,(O=(M=w.ui)==null?void 0:M.refresh)==null||O.call(M),y)try{typeof w.whenNativeReady=="function"&&await w.whenNativeReady(15e3),(V=w.xraBackend)!=null&&V.waitUntilReady&&await w.xraBackend.waitUntilReady(6e3).catch(()=>{}),await((ne=(U=w.nativeBridge)==null?void 0:U.startNativeStreamer)==null?void 0:ne.call(U))}catch(pe){(Te=(ve=globalThis.XRA_CAMERA_OWNERSHIP)==null?void 0:ve.isOwnershipError)!=null&&Te.call(ve,pe)||(console.warn("[XRA START]","Auto-starting camera on START failed",pe),(Me=w.toast)==null||Me.call(w,"Starting camera: "+pe.message,"warn",5e3))}}$i(()=>{var w,M,O,V,U,ne,ve,Te,Me,pe,Pt,kr,gs,ms,ys,ws,bs,Fn,xs,ks,Ss,$s;const y=r();N(c,n("Ready."),!0),N(o,((M=(w=y==null?void 0:y.config)==null?void 0:w.ui)==null?void 0:M.language)||"auto",!0),N(l,((V=(O=y==null?void 0:y.config)==null?void 0:O.performance)==null?void 0:V.master_preset)==="MINIMAL"?"ECO":((ne=(U=y==null?void 0:y.config)==null?void 0:U.performance)==null?void 0:ne.master_preset)||"CUSTOM",!0),N(d,((Te=(ve=y==null?void 0:y.config)==null?void 0:ve.background)==null?void 0:Te.path)||((pe=(Me=y==null?void 0:y.config)==null?void 0:Me.background)==null?void 0:pe.color)||"default",!0);try{const Ct=(gs=(kr=(Pt=window.SA_bridge)==null?void 0:Pt.backend)==null?void 0:kr.status)==null?void 0:gs.call(kr),Hn=(ys=(ms=window.System)==null?void 0:ms._browser)==null?void 0:ys.camera;(bs=(ws=Ct==null?void 0:Ct.backend)==null?void 0:ws.capture)!=null&&bs.running&&!(Hn!=null&&Hn.running)&&((xs=(Fn=window.SA_bridge.backend)==null?void 0:Fn.stop)==null||xs.call(Fn).catch(()=>{}))}catch{}te(),setTimeout(()=>ye(!1),100),$=setInterval(Qe,300),window.addEventListener("MMDStarted",Qe),(ks=y.xraBackend)!=null&&ks.onStatus&&y.xraBackend.onStatus(Qe),Qe(),($s=(Ss=y.whenNativeReady)==null?void 0:Ss.call(y))==null||$s.then(()=>{ee.startupOpen&&ye(!1)});for(const Ct of["camera-started","camera-stopped","camera-switched"])C.push(y.events.on(Ct,()=>{ee.startupOpen&&ye(!1)}));for(const Ct of["avatar-loading","avatar-changed","avatar-ready"])C.push(y.events.on(Ct,()=>Qe()));return()=>{$&&clearInterval($),window.removeEventListener("MMDStarted",Qe);for(const Ct of C)try{Ct()}catch{}C=[]}});var br=pc(),er=z(br),tr=z(er),_e=z(tr),Ft=P(z(_e),2),xr=q(Ft,!0),R=P(tr,2),j=z(R),X=P(z(j),2);Kt(X,21,()=>s,([y,w])=>y,(y,w)=>{var M=nt(()=>Fi(h(w),2));let O=()=>h(M)[0],V=()=>h(M)[1];var U=un(),ne=q(U,!0),ve={};ge(()=>{K(ne,V()),ve!==(ve=O())&&(U.value=(U.__value=ve)??"")}),T(y,U)});var ue;hr(X);var We=P(j,2),Be=P(z(We),2);Kt(Be,20,()=>i,y=>y,(y,w)=>{var M=un(),O=q(M,!0),V={};ge(()=>{K(O,w),V!==(V=w)&&(M.value=(M.__value=V)??"")}),T(y,M)});var Je;hr(Be);var Ht=P(R,2),rr=q(Ht,!0),Bn=P(Ht,2),cs=z(Bn),us=z(cs),Ec=q(us,!0),fs=P(us,2);let ds;var Ac=q(fs,!0),vs=P(cs,2),nr=z(vs),Mc=z(nr);{var Nc=y=>{var w=un(),M=q(w,!0);w.value=w.__value="",ge(O=>K(M,O),[()=>n("Loading cameras…")]),T(y,w)},Tc=y=>{var w=un(),M=q(w,!0);w.value=w.__value="",ge(O=>K(M,O),[()=>n("No cameras found")]),T(y,w)},Oc=y=>{var w=J(),M=Y(w);Kt(M,17,()=>h(p),O=>O.deviceId,(O,V)=>{var U=un(),ne=q(U,!0),ve={};ge(()=>{K(ne,h(V).label),ve!==(ve=h(V).deviceId)&&(U.value=(U.__value=ve)??"")}),T(O,U)}),T(y,w)};_t(Mc,y=>{h(b)?h(p).length?y(Oc,-1):y(Tc,1):y(Nc)})}var Vn;hr(nr);var _n=P(nr,2),Pc=z(_n);Xe(Pc,{name:"RefreshCw",size:14});var Cc=P(vs,2);{var Rc=y=>{var w=vc(),M=q(w,!0);ge(()=>K(M,h(f))),T(y,w)};_t(Cc,y=>{h(f)&&y(Rc)})}var ps=P(Bn,2),Ic=q(ps),hs=P(ps,2),_s=z(hs),Lc=q(_s,!0),Ai=P(_s,2),zc=q(Ai,!0),Dc=P(hs,2),Mi=z(Dc),Bc=q(Mi,!0);ge((y,w,M,O,V,U)=>{K(xr,y),X.disabled=h(E),ue!==(ue=h(o))&&(X.value=(X.__value=ue)??"",zt(X,ue)),Be.disabled=h(A)||h(E),Je!==(Je=h(l))&&(Be.value=(Be.__value=Je)??"",zt(Be,Je)),K(rr,h(c)),K(Ec,w),ds=Ce(fs,1,"camera-state svelte-x8svx4",null,ds,{on:h(v)}),K(Ac,h(x)),nr.disabled=h(k),Vn!==(Vn=h(_))&&(nr.value=(nr.__value=Vn)??"",zt(nr,Vn)),Se(_n,"title",M),Se(_n,"aria-label",O),_n.disabled=h(k),K(Ic,`Background: ${h(d)??""}`),K(Lc,V),Ai.disabled=h(E),K(zc,U),Mi.disabled=h(m)||h(S),K(Bc,h(g))},[()=>n("Quick setup · changes apply immediately."),()=>n("Webcam"),()=>n("Refresh cameras"),()=>n("Refresh cameras"),()=>n("Avatar: the last VRM you chose is copied into avatars/ and restored at startup."),()=>n("Load / change VRM…")]),Q("change",X,ut),Q("change",Be,ze),Q("change",nr,Ae),Q("click",_n,()=>ye(!0)),Q("click",Ai,De),Q("click",Mi,()=>Ot(!0)),T(e,br),Xt()}vr(["change","click"]);var _c=me('<button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button>'),gc=me('<nav class="xra-dock group fixed left-2 top-1/2 z-[99990] flex w-[46px] max-h-[92vh] -translate-y-1/2 flex-col gap-0.5 overflow-hidden rounded-xl border border-white/10 bg-[var(--xra-ui-bg)] p-1.5 font-sans text-[12.5px] leading-snug text-[var(--xra-ui-fg)] shadow-[0_12px_40px_rgba(0,0,0,.55)] transition-[width] duration-200 hover:w-[232px]"><!> <div class="my-1 h-px bg-white/10"></div> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button></nav>');function mc(e,t){Gt(t,!0);const r=()=>window.XRA;let n=G(!1),i=G(!1),a=G(!1),s=0;function o(){var j,X,ue,We,Be,Je,Ht;const R=r();if(R){try{N(n,!!((X=(j=R.nativeBridge)==null?void 0:j.cameraRunning)!=null&&X.call(j)))}catch{}try{N(i,!!((Be=(We=(ue=R.recorder)==null?void 0:ue.status)==null?void 0:We.call(ue))!=null&&Be.active))}catch{}try{N(a,!!((Ht=(Je=R.nativeBridge)==null?void 0:Je.getPreviewVisibility)!=null&&Ht.call(Je,"video")))}catch{}}}async function l(){var j,X;const R=r().nativeBridge;try{R.cameraRunning()?await R.stopNativeStreamer():await R.startNativeStreamer()}catch(ue){(X=(j=r()).toast)==null||X.call(j,"Tracking: "+ue.message,"warn",4e3)}finally{setTimeout(o,250)}}async function c(){var j,X,ue;const R=r().recorder;try{(j=R.status)!=null&&j.call(R).active?await R.stop():await R.start()}catch(We){(ue=(X=r()).toast)==null||ue.call(X,"Recording: "+We.message,"warn",4e3)}finally{setTimeout(o,250)}}function d(){var j,X;const R=!h(a);try{(X=(j=r().nativeBridge)==null?void 0:j.setPreviewVisibility)==null||X.call(j,"video",R)}catch{}N(a,R)}async function p(){var R,j,X,ue;try{await((j=(R=r().nativeBridge)==null?void 0:R.openVrmPicker)==null?void 0:j.call(R))}catch(We){(ue=(X=r()).toast)==null||ue.call(X,"VRM loader: "+We.message,"error",4500)}}function b(){var R,j;try{(j=(R=r().nativeBridge)==null?void 0:R.showAbout)==null||j.call(R)}catch{}}const _=[{id:"ui",icon:"Monitor",label:"UI Settings"},{id:"camera",icon:"Camera",label:"Webcam settings"},{id:"avatar",icon:"User",label:"Model settings"},{id:"second_avatar",icon:"Globe",label:"Studio link"},{id:"stage",icon:"Landmark",label:"Environment + Camera"},{id:"background",icon:"Image",label:"Background"},{id:"lip",icon:"Mic",label:"Audio"}],v="hover:bg-white/10",x="flex-1 overflow-hidden opacity-0 transition-opacity duration-150 group-hover:opacity-100";$i(()=>(o(),s=setInterval(o,1e3),()=>clearInterval(s)));var f=gc(),g=z(f);Kt(g,17,()=>_,R=>R.id,(R,j)=>{var X=_c();Ce(X,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var ue=z(X),We=z(ue);Xe(We,{get name(){return h(j).icon},size:16});var Be=P(ue,2);Ce(Be,1,pr(x));var Je=q(Be,!0);ge((Ht,rr)=>{Se(X,"title",Ht),K(Je,rr)},[()=>re(h(j).label),()=>re(h(j).label)]),Q("click",X,()=>ml(h(j).id)),T(R,X)});var m=P(g,4),S=z(m),A=z(S);{let R=nt(()=>h(n)?"text-emerald-400":"");Xe(A,{name:"Webcam",size:16,get class(){return h(R)}})}var k=P(S,2);Ce(k,1,pr(x));var E=q(k,!0),$=P(m,2),C=z($),D=z(C);{let R=nt(()=>h(i)?"Square":"Circle"),j=nt(()=>h(i)?"text-red-400":"");Xe(D,{get name(){return h(R)},size:16,get class(){return h(j)}})}var te=P(C,2);Ce(te,1,pr(x));var ye=q(te,!0),Ae=P($,2),Le=z(Ae),wt=z(Le);{let R=nt(()=>h(a)?"Eye":"EyeOff");Xe(wt,{get name(){return h(R)},size:16})}var bt=P(Le,2);Ce(bt,1,pr(x));var Qe=q(bt,!0),ze=P(Ae,2);Ce(ze,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var ut=z(ze),De=z(ut);Xe(De,{name:"FolderOpen",size:16});var Ot=P(ut,2);Ce(Ot,1,pr(x));var br=q(Ot,!0),er=P(ze,2);Ce(er,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var tr=z(er),_e=z(tr);Xe(_e,{name:"Info",size:16});var Ft=P(tr,2);Ce(Ft,1,pr(x));var xr=q(Ft,!0);ge((R,j,X,ue,We,Be,Je,Ht,rr,Bn)=>{Ce(m,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${h(n)?"bg-emerald-500/20":v}`),Se(m,"title",R),K(E,j),Ce($,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${h(i)?"bg-red-500/30 text-red-200":v}`),Se($,"title",X),K(ye,ue),Ce(Ae,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${h(a)?"bg-emerald-500/20":v}`),Se(Ae,"title",We),K(Qe,Be),Se(ze,"title",Je),K(br,Ht),Se(er,"title",rr),K(xr,Bn)},[()=>re("Tracking"),()=>h(n)?re("Tracking on"):re("Tracking off"),()=>re("Record"),()=>h(i)?re("Stop recording"):re("Record"),()=>re("Preview"),()=>h(a)?re("Hide preview"):re("Show preview"),()=>re("Load / change VRM…"),()=>re("Load / change VRM…"),()=>re("About"),()=>re("About")]),Q("click",m,l),Q("click",$,c),Q("click",Ae,d),Q("click",ze,p),Q("click",er,b),T(e,f),Xt()}vr(["click"]);var yc=me('<div class="absolute inset-0 z-30 grid place-items-center bg-black text-[12px] text-[var(--xra-ui-fg)]"> </div>'),wc=me('<div class="xra-mocap-window fixed z-[99991] flex flex-col overflow-hidden rounded-xl border border-white/15 bg-[var(--xra-ui-bg)] text-[var(--xra-ui-fg)] shadow-[0_16px_48px_rgba(0,0,0,.6)] font-sans"><header class="flex shrink-0 cursor-move touch-none select-none items-center gap-2 px-2 py-1.5"><!> <span class="flex-1 text-[12px] font-semibold"> </span> <select class="rounded-md border border-white/15 bg-[#101214] px-1.5 py-0.5 text-[11px] text-[var(--xra-ui-fg)]"><option> </option><option> </option><option> </option><option> </option></select> <button type="button" class="rounded-md border border-white/15 bg-white/5 px-1.5 py-0.5 cursor-pointer text-[var(--xra-ui-fg)]"><!></button></header> <div class="relative min-h-0 flex-1 overflow-hidden bg-black"><!> <div class="absolute bottom-0 right-0 z-20 h-5 w-5 cursor-nwse-resize touch-none"></div></div></div>');function bc(e,t){Gt(t,!0);const r=()=>window.XRA,n=Ue("ui.mocap_window",{})||{};let i=G(Ve(Number.isFinite(n.x)?n.x:48)),a=G(Ve(Number.isFinite(n.y)?n.y:96)),s=G(Ve(Number.isFinite(n.w)?n.w:360)),o=G(Ve(Number.isFinite(n.h)?n.h:270)),l=G(void 0),c=G(!1),d=0;const p=nt(()=>Ue("ui.mocap_visibility","always")!=="auto"||h(c));function b(){ot("ui.mocap_window",{x:Math.round(h(i)),y:Math.round(h(a)),w:Math.round(h(s)),h:Math.round(h(o))})}function _(){var m,S,A;try{(A=(S=(m=r())==null?void 0:m.nativeBridge)==null?void 0:S.updateMocapWindow)==null||A.call(S)}catch{}}function v(m,S){m.preventDefault();const A=m.clientX,k=m.clientY,E=h(i),$=h(a),C=h(s),D=h(o),te=Ae=>{const Le=Ae.clientX-A,wt=Ae.clientY-k;S==="move"?(N(i,Math.max(0,Math.min(window.innerWidth-80,E+Le)),!0),N(a,Math.max(0,Math.min(window.innerHeight-30,$+wt)),!0)):(N(s,Math.max(200,Math.min(window.innerWidth-h(i),C+Le)),!0),N(o,Math.max(130,Math.min(window.innerHeight-h(a),D+wt)),!0))},ye=()=>{window.removeEventListener("pointermove",te),window.removeEventListener("pointerup",ye),b()};window.addEventListener("pointermove",te),window.addEventListener("pointerup",ye)}Rr(()=>{var S,A,k;const m=h(l);if(m){try{(k=(A=(S=r())==null?void 0:S.nativeBridge)==null?void 0:A.attachMocapWindow)==null||k.call(A,m)}catch{}return()=>{var E,$,C;try{(C=($=(E=r())==null?void 0:E.nativeBridge)==null?void 0:$.detachMocapWindow)==null||C.call($)}catch{}}}}),Rr(()=>{h(i),h(a),h(s),h(o),h(c),_()}),$i(()=>{const m=()=>{var S,A,k;N(c,!!((k=(A=(S=r())==null?void 0:S.nativeBridge)==null?void 0:A.cameraRunning)!=null&&k.call(A)))};return m(),d=setInterval(m,500),window.addEventListener("resize",_),()=>{clearInterval(d),window.removeEventListener("resize",_)}});var x=J(),f=Y(x);{var g=m=>{var S=wc(),A=z(S),k=z(A);Xe(k,{name:"Activity",size:14});var E=P(k,2),$=q(E,!0),C=P(E,2),D=z(C),te=q(D,!0);D.value=D.__value="both";var ye=P(D),Ae=q(ye,!0);ye.value=ye.__value="wireframe";var Le=P(ye),wt=q(Le,!0);Le.value=Le.__value="video";var bt=P(Le),Qe=q(bt,!0);bt.value=bt.__value="off";var ze;hr(C);var ut=P(C,2),De=z(ut);Xe(De,{name:"X",size:13});var Ot=P(A,2),br=z(Ot);{var er=_e=>{var Ft=yc(),xr=q(Ft,!0);ge(R=>K(xr,R),[()=>re("Tracking is off")]),T(_e,Ft)};_t(br,_e=>{h(c)||_e(er)})}var tr=P(br,2);Za(Ot,_e=>N(l,_e),()=>h(l)),ge((_e,Ft,xr,R,j,X,ue,We)=>{Fa(S,`left:${h(i)??""}px; top:${h(a)??""}px; width:${h(s)??""}px; height:${h(o)??""}px;`),K($,_e),K(te,Ft),K(Ae,xr),K(wt,R),K(Qe,j),ze!==(ze=X)&&(C.value=(C.__value=ze)??"",zt(C,ze)),Se(ut,"title",ue),Se(tr,"title",We)},[()=>re("Mocap"),()=>re("Webcam + skeleton"),()=>re("Skeleton only"),()=>re("Webcam only"),()=>re("Off"),()=>Ue("ui.mocap_view","off"),()=>re("Close"),()=>re("Resize")]),Q("pointerdown",A,_e=>v(_e,"move")),Q("change",C,_e=>ot("ui.mocap_view",_e.currentTarget.value)),Q("pointerdown",C,_e=>_e.stopPropagation()),Q("click",ut,()=>ot("ui.mocap_view","off")),Q("pointerdown",ut,_e=>_e.stopPropagation()),Q("pointerdown",tr,_e=>{_e.stopPropagation(),v(_e,"resize")}),T(m,S)};_t(f,m=>{h(p)&&m(g)})}T(e,x),Xt()}vr(["pointerdown","change","click"]);var xc=me('<aside class="xra-panel"><header class="xra-panel-head"><strong>XR Animator</strong> <span class="xra-spacer"></span> <button><!></button> <button title="Close panel"><!></button></header> <div class="xra-panel-body"></div></aside>'),kc=me('<button class="xra-panel-launcher"><!></button>'),Sc=me("<!> <!> <!> <!>",1);function $c(e,t){Gt(t,!0),bl();const r=nt(()=>El(Ge));var n=Sc(),i=Y(n);{var a=v=>{hc(v,{})};_t(i,v=>{ee.ready&&ee.startupOpen&&v(a)})}var s=P(i,2);{var o=v=>{mc(v,{})};_t(s,v=>{ee.ready&&!ee.startupOpen&&v(o)})}var l=P(s,2);{var c=v=>{bc(v,{})},d=nt(()=>ee.ready&&!ee.startupOpen&&Ue("ui.mocap_view","off")!=="off");_t(l,v=>{h(d)&&v(c)})}var p=P(l,2);{var b=v=>{var E,$,C;var x=xc(),f=z(x),g=P(z(f),4);Se(g,"title",((C=($=(E=window.XRA)==null?void 0:E.i18n)==null?void 0:$.t)==null?void 0:C.call($,"Clean screen mode (Press Esc to restore)"))||"Clean screen (Esc)");var m=z(g);Xe(m,{name:"EyeOff",size:15});var S=P(g,2),A=z(S);Xe(A,{name:"X",size:15});var k=P(f,2);Kt(k,21,()=>h(r),D=>D.id,(D,te)=>{dc(D,{get section(){return h(te)}})}),Q("click",g,function(...D){In==null||In.apply(this,D)}),Q("click",S,()=>ee.panelOpen=!1),T(v,x)},_=v=>{var x=kc(),f=z(x);Xe(f,{name:"Settings",size:16}),Q("click",x,()=>{ee.panelOpen=!0,es()}),T(v,x)};_t(p,v=>{ee.ready&&!ee.startupOpen&&ee.panelOpen?v(b):ee.ready&&!ee.startupOpen&&v(_,1)})}T(e,n),Xt()}vr(["click"]),window.XRA_SVELTE_UI=!0;function as(){let e=document.getElementById("XRA_SVELTE");e||(e=document.createElement("div"),e.id="XRA_SVELTE",document.body.appendChild(e)),Yo($c,{target:e})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",as):as()})();

})();
