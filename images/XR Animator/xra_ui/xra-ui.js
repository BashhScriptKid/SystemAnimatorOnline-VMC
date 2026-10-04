(function(){
var jc=Object.defineProperty;var Ts=fe=>{throw TypeError(fe)};var Xc=(fe,ie,xe)=>ie in fe?jc(fe,ie,{enumerable:!0,configurable:!0,writable:!0,value:xe}):fe[ie]=xe;var Ze=(fe,ie,xe)=>Xc(fe,typeof ie!="symbol"?ie+"":ie,xe),Ci=(fe,ie,xe)=>ie.has(fe)||Ts("Cannot "+xe);var u=(fe,ie,xe)=>(Ci(fe,ie,"read from private field"),xe?xe.call(fe):ie.get(fe)),D=(fe,ie,xe)=>ie.has(fe)?Ts("Cannot add the same private member more than once"):ie instanceof WeakSet?ie.add(fe):ie.set(fe,xe),I=(fe,ie,xe,or)=>(Ci(fe,ie,"write to private field"),or?or.call(fe,xe):ie.set(fe,xe),xe),X=(fe,ie,xe)=>(Ci(fe,ie,"access private method"),xe);(function(){"use strict";var ds,Dr,tr,yr,Br,Vr,Fr,Vt,Hr,Xe,hn,Ft,yt,Tt,Ur,wr,K,Ii,Li,bn,zi,Ns,Os,Gr,Gc,xn,vs,at,Oi,st,br,Ce,Ge,Ie,Ye,Nt,xr,rr,Wr,_n,gn,Ht,Hn,oe,Yc,qc,Di,Kc,Bi,Sn,Yn,Vi,Fi,wt,Ot,qe,Sr,mn,yn,Un,ps;var ie=Array.isArray,xe=Array.prototype.indexOf,or=Array.prototype.includes,kn=Array.from,Hi=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,Ui=Object.getOwnPropertyDescriptors,Ps=Object.prototype,Rs=Array.prototype,qn=Object.getPrototypeOf,Wi=Object.isExtensible;function Yr(e){return typeof e=="function"}const Cs=()=>{};function Is(e){return e()}function Kn(e){for(var t=0;t<e.length;t++)e[t]()}function ji(){var e,t,r=new Promise((n,i)=>{e=n,t=i});return{promise:r,resolve:e,reject:t}}function Xi(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const Te=2,Er=4,qr=8,Zn=1<<24,dt=16,Qe=32,Lt=64,Qn=128,Jn=256,vt=512,Se=1024,ye=2048,Je=4096,Oe=8192,Pe=16384,Ar=32768,$n=1<<25,Gt=65536,En=1<<17,Ls=1<<18,Mr=1<<19,Gi=1<<20,St=1<<25,An=1<<21,Tr=1<<22,Yt=1<<23,kt=Symbol("$state"),Yi=Symbol("component"),qi=Symbol("legacy props"),zs=Symbol(""),Mn=Symbol("attributes"),ei=Symbol("class"),ti=Symbol("style"),Kr=Symbol("text"),Zr=new class extends Error{constructor(){super(...arguments);Ze(this,"name","StaleReactionError");Ze(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},Tn=!!((ds=globalThis.document)!=null&&ds.contentType)&&globalThis.document.contentType.includes("xml"),Ds=1,Bs=2,Ki=4,Vs=8,Fs=16,Hs=1,Us=2,Zi=4,Ws=8,js=16,Xs=1,Gs=2,we=Symbol("uninitialized"),Qi="http://www.w3.org/1999/xhtml",Ys="http://www.w3.org/2000/svg",qs="@attach";function Ks(){console.warn("https://svelte.dev/e/derived_inert")}function Zs(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Qs(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Ji(e){return e===this.v}function Js(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function ea(e){return!Js(e,this.v)}function eo(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function to(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function ro(e,t,r){throw new Error("https://svelte.dev/e/each_key_duplicate")}function no(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function io(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ao(e){throw new Error("https://svelte.dev/e/effect_orphan")}function so(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function oo(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function lo(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function co(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function uo(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function fo(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Nr=!1,Zc=!1;function vo(){Nr=!0}let de=null;function Or(e){de=e}function qt(e,t=!1,r){de={p:de,i:!1,c:null,e:null,s:e,x:null,r:W,l:Nr&&!t?{s:null,u:null,$:[]}:null}}function Kt(e){var t=de,r=t.e;if(r!==null){t.e=null;for(var n of r)xa(n)}return t.i=!0,de=t.p,ri(e)}function ri(e={}){return Hi(e,Yi,{value:!0}),e}function Qr(){return!Nr||de!==null&&de.l===null}let Pr=[];function po(){var e=Pr;Pr=[],Kn(e)}function $t(e){if(Pr.length===0){var t=Pr;queueMicrotask(()=>{t===Pr&&po()})}Pr.push(e)}const ho=-7169;function pe(e,t){e.f=e.f&ho|t}function ni(e){(e.f&vt)!==0||e.deps===null?pe(e,Se):pe(e,Je)}function ta(e,t,r){(e.f&ye)!==0?t.add(e):(e.f&Je)!==0&&r.add(e),pe(e,Se)}function _o(e,t){if(t){const r=document.body;e.autofocus=!0,$t(()=>{document.activeElement===r&&e.focus()})}}function Jr(e){var t=U,r=W;tt(null),rt(null);try{return e()}finally{tt(t),rt(r)}}function ra(e,t,r,n){const i=Qr()?Rr:ii;var a=e.filter(_=>!_.settled),s=t.map(i);if(r.length===0&&a.length===0){n(s);return}var o=W,l=go(),c=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(_=>_.promise)):null;function d(_){if((o.f&Pe)===0){l();try{n([...s,..._])}catch(p){At(p,o)}Nn()}}var h=na();if(r.length===0){c.then(()=>d([])).finally(h);return}function y(){Promise.all(r.map(_=>mo(_))).then(d).catch(_=>At(_,o)).finally(h)}c?c.then(()=>{l(),y(),Nn()}):y()}function go(){var e=W,t=U,r=de,n=C;return function(a=!0){rt(e),tt(t),Or(r),a&&(e.f&Pe)===0&&(n==null||n.activate(),n==null||n.apply())}}function Nn(e=!0){rt(null),tt(null),Or(null),e&&(C==null||C.deactivate())}function na(){var e=W,t=e.b,r=C,n=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,r),r.increment(n,e),()=>{t==null||t.update_pending_count(-1,r),r.decrement(n,e)}}function Rr(e){var t=Te|ye;return W!==null&&(W.f|=Mr),{ctx:de,deps:null,effects:null,equals:Ji,f:t,fn:e,reactions:null,rv:0,v:we,wv:0,parent:W,ac:null}}const en=Symbol("obsolete");function mo(e,t,r){let n=W;n===null&&to();var i=void 0,a=Zt(we),s=!U,o=new Set;return Oo(()=>{var _,p;var l=W,c=ji();i=c.promise;try{Promise.resolve(e()).then(c.resolve,k=>{k!==Zr&&c.reject(k)}).finally(Nn)}catch(k){c.reject(k),Nn()}var d=C;if(s){if((l.f&Ar)!==0)var h=na();if((_=n.b)!=null&&_.is_rendered())(p=d.async_deriveds.get(l))==null||p.reject(en);else for(const k of o.values())k.reject(en);o.add(c),d.async_deriveds.set(l,c)}const y=(k,f=void 0)=>{h==null||h(),o.delete(c),f!==en&&(d.activate(),f?(a.f|=Yt,Ir(a,f)):((a.f&Yt)!==0&&(a.f^=Yt),Ir(a,k)),d.deactivate())};c.promise.then(y,k=>y(null,k||"unknown"))}),pi(()=>{for(const l of o)l.reject(en)}),new Promise(l=>{function c(d){function h(){d===i?l(a):c(i)}d.then(h,h)}c(i)})}function et(e){const t=Rr(e);return Na(t),t}function ii(e){const t=Rr(e);return t.equals=ea,t}function yo(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)Ee(t[r])}}function ai(e){var t,r=W,n=e.parent;if(!Dt&&n!==null&&e.v!==we&&(n.f&(Pe|Oe))!==0)return Ks(),e.v;rt(n);try{yo(e),t=Ia(e)}finally{rt(r)}return t}function ia(e){var t=ai(e);if(!e.equals(t)&&(e.wv=Ra(),(!(C!=null&&C.is_fork)||e.deps===null)&&(C!==null?(C.capture(e,t,!0),tn==null||tn.capture(e,t,!0)):e.v=t,e.deps===null))){pe(e,Se);return}Dt||($e!==null?(vi()||C!=null&&C.is_fork)&&$e.set(e,t):ni(e))}function wo(e){var t;if(e.effects!==null)for(const r of e.effects)(r.teardown||r.ac)&&((t=r.teardown)==null||t.call(r),r.ac!==null&&Jr(()=>{r.ac.abort(Zr),r.ac=null}),r.fn!==null&&(r.teardown=Cs),ln(r,0),_i(r))}function aa(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&zr(t)}let si=null,Cr=null,C=null,tn=null,$e=null,oi=null,li=!1,rn=null,On=null;var sa=0,Qc=new Set;let bo=1;const Fn=class Fn{constructor(){D(this,K);Ze(this,"id",bo++);D(this,Dr,!1);Ze(this,"linked",!0);D(this,tr,null);D(this,yr,null);Ze(this,"async_deriveds",new Map);Ze(this,"current",new Map);Ze(this,"previous",new Map);D(this,Br,new Set);D(this,Vr,new Set);D(this,Fr,0);D(this,Vt,new Map);D(this,Hr,null);D(this,Xe,[]);D(this,hn,[]);D(this,Ft,new Set);D(this,yt,new Set);D(this,Tt,new Map);D(this,Ur,new Set);Ze(this,"is_fork",!1);D(this,wr,!1);Cr===null?si=Cr=this:(I(Cr,yr,this),I(this,tr,Cr)),Cr=this}skip_effect(t){u(this,Tt).has(t)||u(this,Tt).set(t,{d:[],m:[]}),u(this,Ur).delete(t)}unskip_effect(t,r=n=>this.schedule(n)){var n=u(this,Tt).get(t);if(n){u(this,Tt).delete(t);for(var i of n.d)pe(i,ye),r(i);for(i of n.m)pe(i,Je),r(i)}u(this,Ur).add(t)}capture(t,r,n=!1){t.v!==we&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&Yt)===0&&(this.current.set(t,[r,n]),$e==null||$e.set(t,r)),this.is_fork||(t.v=r)}activate(){C=this}deactivate(){C=null,$e=null}flush(){try{li=!0,C=this,X(this,K,bn).call(this)}finally{sa=0,oi=null,rn=null,On=null,li=!1,C=null,$e=null,Et.clear()}}discard(){var t;for(const r of u(this,Vr))r(this);u(this,Vr).clear();for(const r of this.async_deriveds.values())r.reject(en);X(this,K,xn).call(this),(t=u(this,Hr))==null||t.resolve()}register_created_effect(t){u(this,hn).push(t)}increment(t,r){if(I(this,Fr,u(this,Fr)+1),t){let n=u(this,Vt).get(r)??0;u(this,Vt).set(r,n+1)}}decrement(t,r){if(I(this,Fr,u(this,Fr)-1),t){let n=u(this,Vt).get(r)??0;n===1?u(this,Vt).delete(r):u(this,Vt).set(r,n-1)}u(this,wr)||(I(this,wr,!0),$t(()=>{I(this,wr,!1),this.linked&&this.flush()}))}transfer_effects(t,r){for(const n of t)u(this,Ft).add(n);for(const n of r)u(this,yt).add(n);t.clear(),r.clear()}oncommit(t){u(this,Br).add(t)}ondiscard(t){u(this,Vr).add(t)}settled(){return(u(this,Hr)??I(this,Hr,ji())).promise}static ensure(){if(C===null){const t=C=new Fn;li||$t(()=>{u(t,Dr)||t.flush()})}return C}apply(){{$e=null;return}}schedule(t){var r;if(oi=t,(r=t.b)!=null&&r.is_pending&&(t.f&(Er|qr|Zn))!==0&&(t.f&Ar)===0){t.b.defer_effect(t);return}u(this,Xe).push(t)}};Dr=new WeakMap,tr=new WeakMap,yr=new WeakMap,Br=new WeakMap,Vr=new WeakMap,Fr=new WeakMap,Vt=new WeakMap,Hr=new WeakMap,Xe=new WeakMap,hn=new WeakMap,Ft=new WeakMap,yt=new WeakMap,Tt=new WeakMap,Ur=new WeakMap,wr=new WeakMap,K=new WeakSet,Ii=function(){if(this.is_fork)return!0;for(const n of u(this,Vt).keys()){for(var t=n,r=!1;t.parent!==null;){if(u(this,Tt).has(t)){r=!0;break}t=t.parent}if(!r)return!0}return!1},Li=function(){var t=[];for(const a of u(this,Xe))if(!((a.f&Pe)!==0||(a.f&(ye|Je))===0)){for(var r=a,n=!1;r.parent!==null;){r=r.parent;var i=r.f;if((i&(Lt|Qe))!==0){if((i&Se)===0){n=!0;break}r.f^=Se}}n||t.push(r)}return I(this,Xe,[]),t},bn=function(){var o,l,c,d;I(this,Dr,!0);for(const h of u(this,Ft))u(this,yt).delete(h),pe(h,ye),this.schedule(h);for(const h of u(this,yt))pe(h,Je),this.schedule(h);this.apply();for(var t=rn=[],r=[],n=On=[];u(this,Xe).length>0;){sa++>1e3&&(X(this,K,xn).call(this),xo());for(const h of X(this,K,Li).call(this))try{X(this,K,zi).call(this,h,t,r)}catch(y){throw ua(h),X(this,K,Ii).call(this)||this.discard(),y}}if(C=null,n.length>0){var i=Fn.ensure();for(const h of n)i.schedule(h)}if(rn=null,On=null,X(this,K,Ii).call(this)){X(this,K,Gr).call(this,r),X(this,K,Gr).call(this,t);for(const[h,y]of u(this,Tt))ca(h,y);n.length>0&&X(o=C,K,bn).call(o);return}const a=X(this,K,Ns).call(this);if(a){X(this,K,Gr).call(this,r),X(this,K,Gr).call(this,t),X(l=a,K,Os).call(l,this);return}u(this,Ft).clear(),u(this,yt).clear();for(const h of u(this,Br))h(this);u(this,Br).clear(),tn=this,oa(r),oa(t),tn=null,(c=u(this,Hr))==null||c.resolve();var s=C;if(u(this,Fr)===0&&(u(this,Xe).length===0||s!==null)&&X(this,K,xn).call(this),u(this,Xe).length>0)if(s!==null){for(const h of u(this,Xe))u(s,Xe).push(h);I(this,Xe,[])}else s=this;s!==null&&(Et.clear(),X(d=s,K,bn).call(d))},zi=function(t,r,n){t.f^=Se;for(var i=t.first;i!==null;){var a=i.f,s=(a&(Qe|Lt))!==0,o=s&&(a&Se)!==0,l=o||(a&Oe)!==0||u(this,Tt).has(i);if(!l&&i.fn!==null){s?i.f^=Se:(a&Er)!==0?r.push(i):on(i)&&((a&dt)!==0&&u(this,yt).add(i),zr(i));var c=i.first;if(c!==null){i=c;continue}}for(;i!==null;){var d=i.next;if(d!==null){i=d;break}i=i.parent}}},Ns=function(){for(var t=u(this,tr);t!==null;){if(!t.is_fork){for(const[r,[,n]]of this.current)if(t.current.has(r)&&!n)return t}t=u(t,tr)}return null},Os=function(t){var n;for(const[i,a]of t.current)!this.previous.has(i)&&t.previous.has(i)&&this.previous.set(i,t.previous.get(i)),this.current.set(i,a);for(const[i,a]of t.async_deriveds){const s=this.async_deriveds.get(i);s&&a.promise.then(s.resolve).catch(s.reject)}t.async_deriveds.clear(),this.transfer_effects(u(t,Ft),u(t,yt));const r=i=>{var a=i.reactions;if(a!==null&&!((i.f&Te)!==0&&(i.f&(ye|Je))===0))for(const l of a){var s=l.f;if((s&Te)!==0)r(l);else{var o=l;s&(Tr|dt)&&!this.async_deriveds.has(o)&&(u(this,yt).delete(o),pe(o,ye),this.schedule(o))}}};for(const i of this.current.keys())r(i);this.oncommit(()=>t.discard()),X(n=t,K,xn).call(n),C=this,X(this,K,bn).call(this)},Gr=function(t){for(var r=0;r<t.length;r+=1)ta(t[r],u(this,Ft),u(this,yt))},Gc=function(){var h,y;for(let _=si;_!==null;_=u(_,yr)){var t=_.id<this.id,r=[];for(const[p,[k,f]]of this.current){if(_.current.has(p)){var n=_.current.get(p)[0];if(t&&k!==n)_.current.set(p,[k,f]);else continue}r.push(p)}if(t)for(const[p,k]of this.async_deriveds){const f=_.async_deriveds.get(p);f&&k.promise.then(f.resolve).catch(f.reject)}var i=[..._.current.keys()].filter(p=>!_.current.get(p)[1]);if(!(!u(_,Dr)||i.length===0)){var a=i.filter(p=>!this.current.has(p));if(a.length===0)t&&_.discard();else if(r.length>0){if(t)for(const p of u(this,Ur))_.unskip_effect(p,k=>{var f;(k.f&(dt|Tr))!==0?_.schedule(k):X(f=_,K,Gr).call(f,[k])});_.activate();var s=new Set,o=new Map;for(var l of r)la(l,a,s,o);o=new Map;var c=[..._.current].filter(([p,k])=>{const f=this.current.get(p);return f?f[0]!==k[0]||f[1]!==k[1]:!0}).map(([p])=>p);if(c.length>0)for(const p of u(this,hn))(p.f&(Pe|Oe|En))===0&&ci(p,c,o)&&((p.f&(Tr|dt))!==0?(pe(p,ye),_.schedule(p)):u(_,Ft).add(p));if(u(_,Xe).length>0&&!u(_,wr)){_.apply();for(var d of X(h=_,K,Li).call(h))X(y=_,K,zi).call(y,d,[],[])}_.deactivate()}}}},xn=function(){if(this.linked){var t=u(this,tr),r=u(this,yr);t===null?si=r:I(t,yr,r),r===null?Cr=t:I(r,tr,t),this.linked=!1}};let lr=Fn;function xo(){try{so()}catch(e){At(e,oi)}}let pt=null;function oa(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(Pe|Oe))===0&&on(n)&&(pt=new Set,zr(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&Ea(n),(pt==null?void 0:pt.size)>0)){Et.clear();for(const i of pt){if((i.f&(Pe|Oe))!==0)continue;const a=[i];let s=i.parent;for(;s!==null;)pt.has(s)&&(pt.delete(s),a.push(s)),s=s.parent;for(let o=a.length-1;o>=0;o--){const l=a[o];(l.f&(Pe|Oe))===0&&zr(l)}}pt.clear()}}pt=null}}function la(e,t,r,n){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(const i of e.reactions){const a=i.f;(a&Te)!==0?la(i,t,r,n):(a&(Tr|dt))!==0&&(a&ye)===0&&ci(i,t,n)&&(pe(i,ye),ui(i))}}function ci(e,t,r){const n=r.get(e);if(n!==void 0)return n;if(e.deps!==null)for(const i of e.deps){if(or.call(t,i))return!0;if((i.f&Te)!==0&&ci(i,t,r))return r.set(i,!0),!0}return r.set(e,!1),!1}function ui(e){C.schedule(e)}function ca(e,t){if(!((e.f&Qe)!==0&&(e.f&Se)!==0)){(e.f&ye)!==0?t.d.push(e):(e.f&Je)!==0&&t.m.push(e),pe(e,Se);for(var r=e.first;r!==null;)ca(r,t),r=r.next}}function ua(e){pe(e,Se);for(var t=e.first;t!==null;)ua(t),t=t.next}let Pn=new Set;const Et=new Map;let fa=!1;function Zt(e,t){var r={f:0,v:e,reactions:null,equals:Ji,rv:0,wv:0};return r}function H(e,t){const r=Zt(e);return Na(r),r}function So(e,t=!1,r=!0){var i;const n=Zt(e);return t||(n.equals=ea),Nr&&r&&de!==null&&de.l!==null&&((i=de.l).s??(i.s=[])).push(n),n}function $(e,t,r=!1){U!==null&&(!_t||(U.f&En)!==0)&&Qr()&&(U.f&(Te|dt|Tr|En))!==0&&(Mt===null||!Mt.has(e))&&uo();let n=r?Le(t):t;return Ir(e,n,On)}var cr=null,fi=0;function Ir(e,t,r=null){if(!e.equals(t)){Dt?Et.set(e,t):Et.has(e)||Et.set(e,e.v);var n=lr.ensure();if(n.capture(e,t),(e.f&Te)!==0){const i=e;(e.f&ye)!==0&&ai(i),$e===null&&ni(i)}e.wv=Ra(),cr=null,fi=0,va(e,ye,r),cr=null,Qr()&&W!==null&&(W.f&Se)!==0&&(W.f&(Qe|Lt))===0&&(nt===null?Co([e]):nt.push(e)),!n.is_fork&&Pn.size>0&&!fa&&ko()}return t}function ko(){fa=!1;for(const e of Pn){(e.f&Se)!==0&&pe(e,Je);let t;try{t=on(e)}catch{t=!0}t&&zr(e)}Pn.clear()}function da(e,t=1){var r=v(e),n=t===1?r++:r--;return $(e,r),n}function nn(e){$(e,e.v+1)}function va(e,t,r){var n=e.reactions;if(n!==null){var i=Qr(),a=n.length;if(fi+=a,fi>1e5&&cr===null&&(cr=new Set),cr!==null){if(cr.has(e))return;cr.add(e)}for(var s=0;s<a;s++){var o=n[s],l=o.f;if(!(!i&&o===W)){var c=(l&ye)===0;if(c&&pe(o,t),(l&En)!==0)Pn.add(o);else if((l&Te)!==0){var d=o;$e==null||$e.delete(d),va(d,Je,r)}else if(c){var h=o;(l&dt)!==0&&pt!==null&&pt.add(h),r!==null?r.push(h):ui(h)}}}}}function Le(e){if(typeof e!="object"||e===null||kt in e||Yi in e)return e;const t=qn(e);if(t!==Ps&&t!==Rs)return e;var r=new Map,n=ie(e),i=H(0),a=vr,s=o=>{if(vr===a)return o();var l=U,c=vr;tt(null),Pa(a);var d=o();return tt(l),Pa(c),d};return n&&r.set("length",H(e.length)),new Proxy(e,{defineProperty(o,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&lo();var d=r.get(l);return d===void 0?s(()=>{var h=H(c.value);return r.set(l,h),h}):$(d,c.value,!0),!0},deleteProperty(o,l){var c=r.get(l);if(c===void 0){if(l in o){const d=s(()=>H(we));r.set(l,d),nn(i)}}else $(c,we),nn(i);return!0},get(o,l,c){var _;if(l===kt)return e;var d=r.get(l),h=l in o;if(d===void 0&&(!h||(_=Xt(o,l))!=null&&_.writable)&&(d=s(()=>{var p=Le(h?o[l]:we),k=H(p);return k}),r.set(l,d)),d!==void 0){var y=v(d);return y===we?void 0:y}return Reflect.get(o,l,c)},getOwnPropertyDescriptor(o,l){var y;(y=this.has)==null||y.call(this,o,l);var c=Reflect.getOwnPropertyDescriptor(o,l),d=r.get(l);if(d!==void 0){var h=v(d);if(h===we)return;if(c&&"value"in c)c.value=h;else return{enumerable:!0,configurable:!0,value:h,writable:!0}}return c},has(o,l){var y;if(l===kt)return!0;var c=r.get(l),d=c!==void 0&&c.v!==we||Reflect.has(o,l);if(c!==void 0||W!==null&&(!d||(y=Xt(o,l))!=null&&y.writable)){c===void 0&&(c=s(()=>{var _=d?Le(o[l]):we,p=H(_);return p}),r.set(l,c));var h=v(c);if(h===we)return!1}return d},set(o,l,c,d){var x;var h=r.get(l),y=l in o;if(n&&l==="length")for(var _=c;_<h.v;_+=1){var p=r.get(_+"");p!==void 0?$(p,we):_ in o&&(p=s(()=>H(we)),r.set(_+"",p))}if(h===void 0)(!y||(x=Xt(o,l))!=null&&x.writable)&&(h=s(()=>H(void 0)),$(h,Le(c)),r.set(l,h));else{y=h.v!==we;var k=s(()=>Le(c));$(h,k)}var f=Reflect.getOwnPropertyDescriptor(o,l);if(f!=null&&f.set&&f.set.call(d,c),!y){if(n&&typeof l=="string"){var g=r.get("length"),m=Number(l);Number.isInteger(m)&&m>=g.v&&$(g,m+1)}nn(i)}return!0},ownKeys(o){v(i);var l=Reflect.ownKeys(o).filter(h=>{var y=r.get(h);return y===void 0||y.v!==we});for(var[c,d]of r)d.v!==we&&!(c in o)&&l.push(c);return l},setPrototypeOf(){co()}})}function pa(e){try{if(e!==null&&typeof e=="object"&&kt in e)return e[kt]}catch{}return e}function ha(e,t){return Object.is(pa(e),pa(t))}var _a,ga,ma,ya;function $o(){if(_a===void 0){_a=window,ga=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;ma=Xt(t,"firstChild").get,ya=Xt(t,"nextSibling").get,Wi(e)&&(e[ei]=void 0,e[Mn]=null,e[ti]=void 0,e.__e=void 0),Wi(r)&&(r[Kr]=void 0)}}function zt(e=""){return document.createTextNode(e)}function ur(e){return ma.call(e)}function an(e){return ya.call(e)}function L(e,t){return ur(e)}function G(e,t=!1){{var r=ur(e);return r instanceof Comment&&r.data===""?an(r):r}}function Y(e,t=!1){return ur(e)}function P(e,t=1,r=!1){let n=e;for(;t--;)n=an(n);return n}function Eo(e){e.textContent=""}function wa(){return!1}function di(e,t,r){return t==null||t===Qi?r?document.createElement(e,{is:r}):document.createElement(e):r?document.createElementNS(t,e,{is:r}):document.createElementNS(t,e)}function Ao(e){var t=W;if(t===null)return U.f|=Yt,e;if((t.f&Ar)===0&&(t.f&Er)===0)throw e;At(e,t)}function At(e,t){if(!(t!==null&&(t.f&Pe)!==0)){for(;t!==null;){if((t.f&Qn)!==0&&(t.f&(Pe|$n))===0){if((t.f&Ar)===0)throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw e}}function ba(e){W===null&&(U===null&&ao(),io()),Dt&&no()}function Mo(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function ht(e,t){var r=W;r!==null&&(r.f&Oe)!==0&&(e|=Oe);var n={ctx:de,deps:null,nodes:null,f:e|ye|vt,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};C==null||C.register_created_effect(n);var i=n;if((e&Er)!==0)rn!==null?rn.push(n):lr.ensure().schedule(n);else if(t!==null){try{zr(n)}catch(s){throw Ee(n),s}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&Mr)===0&&(i=i.first,(e&dt)!==0&&(e&Gt)!==0&&i!==null&&(i.f|=Gt))}if(i!==null&&(i.parent=r,r!==null&&Mo(i,r),U!==null&&(U.f&Te)!==0&&(e&Lt)===0)){var a=U;(a.effects??(a.effects=[])).push(i)}return n}function vi(){return U!==null&&!_t}function pi(e){const t=ht(qr,null);return pe(t,Se),t.teardown=e,t}function Lr(e){ba();var t=W.f,r=!U&&(t&Qe)!==0&&de!==null&&!de.i;if(r){var n=de;(n.e??(n.e=[])).push(e)}else return xa(e)}function xa(e){return ht(Er|Gi,e)}function To(e){return ba(),ht(qr|Gi,e)}function No(e){lr.ensure();const t=ht(Lt|Mr,e);return(r={})=>new Promise(n=>{r.outro?fr(t,()=>{Ee(t),n(void 0)}):(Ee(t),n(void 0))})}function hi(e){return ht(Er,e)}function Oo(e){return ht(Tr|Mr,e)}function Sa(e,t=0){return ht(qr|t,e)}function _e(e,t=[],r=[],n=[]){ra(n,t,r,i=>{ht(qr,()=>{e(...i.map(v))})})}function sn(e,t=0){var r=ht(dt|t,e);return r}function ka(e,t=0){var r=ht(Zn|t,e);return r}function ze(e){return ht(Qe|Mr,e)}function $a(e){var t=e.teardown;if(t!==null){const r=Dt,n=U;Ta(!0),tt(null);try{t.call(null)}catch(i){At(i,e.parent)}finally{Ta(r),tt(n)}}}function _i(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const i=r.ac;i!==null&&Jr(()=>{i.abort(Zr)});var n=r.next;(r.f&Lt)!==0?r.parent=null:Ee(r,t),r=n}}function Po(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Qe)===0&&Ee(t),t=r}}function Ee(e,t=!0){var r=!1;(t||(e.f&Ls)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Ro(e.nodes.start,e.nodes.end),r=!0),e.f|=$n,_i(e,t&&!r),ln(e,0);var n=e.nodes&&e.nodes.t;if(n!==null)for(const a of n)a.stop();$a(e),e.f^=$n,e.f|=Pe;var i=e.parent;i!==null&&i.first!==null&&Ea(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Ro(e,t){for(;e!==null;){var r=e===t?null:an(e);e.remove(),e=r}}function Ea(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function fr(e,t,r=!0){var n=[];e.f|=Jn,Aa(e,n,!0);var i=()=>{r&&Ee(e),t&&t()},a=n.length;if(a>0){var s=()=>--a||i();for(var o of n)o.out(s)}else i()}function Aa(e,t,r){if((e.f&Oe)===0){e.f^=Oe;var n=e.nodes&&e.nodes.t;if(n!==null)for(const o of n)(o.is_global||r)&&t.push(o);for(var i=e.first;i!==null;){var a=i.next;if((i.f&Lt)===0){var s=(i.f&Gt)!==0||(i.f&Qe)!==0&&(e.f&dt)!==0;Aa(i,t,s?r:!1)}i=a}}}function Rn(e){e.f&=~Jn,Ma(e,!0)}function Ma(e,t){if((e.f&Jn)===0&&(e.f&Oe)!==0){e.f^=Oe,(e.f&Se)===0&&(pe(e,ye),lr.ensure().schedule(e));for(var r=e.first;r!==null;){var n=r.next,i=(r.f&Gt)!==0||(r.f&Qe)!==0;Ma(r,i?t:!1),r=n}var a=e.nodes&&e.nodes.t;if(a!==null)for(const s of a)(s.is_global||t)&&s.in()}}function gi(e,t){if(e.nodes)for(var r=e.nodes.start,n=e.nodes.end;r!==null;){var i=r===n?null:an(r);t.append(r),r=i}}let Cn=!1,Dt=!1;function Ta(e){Dt=e}let U=null,_t=!1;function tt(e){U=e}let W=null;function rt(e){W=e}let Mt=null;function Na(e){U!==null&&((U.f&An)!==0||(U.f&Te)!==0)&&(Mt??(Mt=new Set)).add(e)}let De=null,Ue=0,nt=null;function Co(e){nt=e}let Oa=1,dr=0,vr=dr;function Pa(e){vr=e}function Ra(){return++Oa}function on(e){var t=e.f;if((t&ye)!==0)return!0;if((t&Je)!==0){for(var r=e.deps,n=r.length,i=0;i<n;i++){var a=r[i];if(on(a)&&ia(a),a.wv>e.wv)return!0}(t&vt)!==0&&$e===null&&pe(e,Se)}return!1}function Ca(e,t,r=!0){var n=e.reactions;if(n!==null&&!(Mt!==null&&Mt.has(e)))for(var i=0;i<n.length;i++){var a=n[i];(a.f&Te)!==0?Ca(a,t,!1):t===a&&(r?pe(a,ye):(a.f&Se)!==0&&pe(a,Je),ui(a))}}function Ia(e){var t=De,r=Ue,n=nt,i=U,a=Mt,s=de,o=_t,l=vr,c=e.f;De=null,Ue=0,nt=null,U=(c&(Qe|Lt))===0?e:null,Mt=null,Or(e.ctx),_t=!1,vr=++dr,e.ac!==null&&(Jr(()=>{e.ac.abort(Zr)}),e.ac=null);try{e.f|=An;var d=e.fn,h=d();e.f|=Ar;var y=La(e);if(Qr()&&nt!==null&&!_t&&y!==null&&(e.f&(Te|Je|ye))===0)for(var _=0;_<nt.length;_++)Ca(nt[_],e);if(i!==null&&i!==e){if(dr++,i.deps!==null)for(let p=0;p<r;p+=1)i.deps[p].rv=dr;if(t!==null)for(const p of t)p.rv=dr;nt!==null&&(n===null?n=nt:n.push(...nt))}return(e.f&Yt)!==0&&(e.f^=Yt),h}catch(p){return La(e),Ao(p)}finally{e.f^=An,De=t,Ue=r,nt=n,U=i,Mt=a,Or(s),_t=o,vr=l}}function La(e){var i;var t=e.deps,r=C==null?void 0:C.is_fork;if(De!==null){var n;if(r||ln(e,Ue),t!==null&&Ue>0)for(t.length=Ue+De.length,n=0;n<De.length;n++)t[Ue+n]=De[n];else e.deps=t=De;if(vi()&&(e.f&vt)!==0)for(n=Ue;n<t.length;n++)((i=t[n]).reactions??(i.reactions=[])).push(e)}else!r&&t!==null&&Ue<t.length&&(ln(e,Ue),t.length=Ue);return t}function Io(e,t){let r=t.reactions;if(r!==null){var n=xe.call(r,e);if(n!==-1){var i=r.length-1;i===0?r=t.reactions=null:(r[n]=r[i],r.pop())}}if(r===null&&(t.f&Te)!==0&&(De===null||!or.call(De,t))){var a=t;(a.f&vt)!==0&&(a.f^=vt),a.v!==we&&ni(a),a.ac!==null&&Jr(()=>{a.ac.abort(Zr),a.ac=null,pe(a,ye)}),wo(a),ln(a,0)}}function ln(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Io(e,r[n])}function zr(e){var t=e.f;if((t&Pe)===0){pe(e,Se);var r=W,n=Cn;W=e,Cn=(t&(Qe|Lt))===0;try{(t&(dt|Zn))!==0?Po(e):_i(e),$a(e);var i=Ia(e);e.teardown=typeof i=="function"?i:null,e.wv=Oa;var a}finally{Cn=n,W=r}}}function v(e){var t=e.f,r=(t&Te)!==0;if(U!==null&&!_t){var n=W!==null&&(W.f&Pe)!==0;if(!n&&(Mt===null||!Mt.has(e))){var i=U.deps;if((U.f&An)!==0)e.rv<dr&&(e.rv=dr,De===null&&i!==null&&i[Ue]===e?Ue++:De===null?De=[e]:De.push(e));else{U.deps??(U.deps=[]),or.call(U.deps,e)||U.deps.push(e);var a=e.reactions;a===null?e.reactions=[U]:or.call(a,U)||a.push(U)}}}if(Dt&&Et.has(e))return Et.get(e);if(r){var s=e;if(Dt){var o=s.v;return((s.f&Se)===0&&s.reactions!==null||Da(s))&&(o=ai(s)),Et.set(s,o),o}var l=(s.f&vt)===0&&!_t&&U!==null&&(Cn||(U.f&vt)!==0),c=(s.f&Ar)===0;on(s)&&(l&&(s.f|=vt),ia(s)),l&&!c&&(aa(s),za(s))}if($e!=null&&$e.has(e))return $e.get(e);if((e.f&Yt)!==0)throw e.v;return e.v}function za(e){if(e.f|=vt,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&Te)!==0&&(t.f&vt)===0&&(aa(t),za(t))}function Da(e){if(e.v===we)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Et.has(t)||(t.f&Te)!==0&&Da(t))return!0;return!1}function Qt(e){var t=_t;try{return _t=!0,e()}finally{_t=t}}function pr(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(kt in e)mi(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&kt in r&&mi(r)}}}function mi(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{mi(e[n],t)}catch{}const r=qn(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=Ui(r);for(let i in n){const a=n[i].get;if(a)try{a.call(e)}catch{}}}}}function Lo(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const zo=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Do(e){return zo.includes(e)}const Bo={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Vo(e){return e=e.toLowerCase(),Bo[e]??e}const Fo=["touchstart","touchmove"];function Ho(e){return Fo.includes(e)}const hr=Symbol("events"),Ba=new Set,yi=new Set;function Uo(e,t,r,n={}){function i(a){if(n.capture||xi.call(t,a),!a.cancelBubble)return Jr(()=>r==null?void 0:r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?(i.__removed=!1,$t(()=>{i.__removed||t.addEventListener(e,i,n)})):t.addEventListener(e,i,n),i}function Q(e,t,r){(t[hr]??(t[hr]={}))[e]=r}function _r(e){for(var t=0;t<e.length;t++)Ba.add(e[t]);for(var r of yi)r(e)}let wi=null,bi=!1;function xi(e){var k,f;var t=this,r=t.ownerDocument,n=e.type,i=((k=e.composedPath)==null?void 0:k.call(e))||[],a=i[0]||e.target;wi=e,bi||(bi=!0,setTimeout(()=>{bi=!1,wi=null}));var s=0,o=wi===e&&e[hr];if(o){var l=i.indexOf(o);if(l!==-1&&(t===document||t===window)){e[hr]=t;return}var c=i.indexOf(t);if(c===-1)return;l<=c&&(s=l)}if(a=i[s]||e.target,a!==t){Hi(e,"currentTarget",{configurable:!0,get(){return a||r}});var d=U,h=W;tt(null),rt(null);try{for(var y,_=[];a!==null&&a!==t;){try{var p=(f=a[hr])==null?void 0:f[n];p!=null&&(!a.disabled||e.target===a)&&p.call(a,e)}catch(g){y?_.push(g):y=g}if(e.cancelBubble)break;s++,a=s<i.length?i[s]:null}if(y){for(let g of _)queueMicrotask(()=>{throw g});throw y}}finally{e[hr]=t,delete e.currentTarget,tt(d),rt(h)}}}const Si=((vs=globalThis==null?void 0:globalThis.window)==null?void 0:vs.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Wo(e){return(Si==null?void 0:Si.createHTML(e))??e}function Va(e){var t=di("template");return t.innerHTML=Wo(e.replaceAll("<!>","<!---->")),t.content}function cn(e,t){var r=W;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function ge(e,t){var r=(t&Xs)!==0,n=(t&Gs)!==0,i,a=!e.startsWith("<!>");return()=>{i===void 0&&(i=Va(a?e:"<!>"+e),r||(i=ur(i)));var s=n||ga?document.importNode(i,!0):i.cloneNode(!0);if(r){var o=ur(s),l=s.lastChild;cn(o,l)}else cn(s,s);return s}}function jo(e,t,r="svg"){var n=!e.startsWith("<!>"),i=`<${r}>${n?e:"<!>"+e}</${r}>`,a;return()=>{if(!a){var s=Va(i),o=ur(s);a=ur(o)}var l=a.cloneNode(!0);return cn(l,l),l}}function Xo(e,t){return jo(e,t,"svg")}function J(){var e=document.createDocumentFragment(),t=document.createComment(""),r=zt();return e.append(t,r),cn(t,r),e}function N(e,t){e!==null&&e.before(t)}function Go(e){let t=0,r=Zt(0),n;return()=>{vi()&&(v(r),Sa(()=>(t===0&&(n=Qt(()=>e(()=>nn(r)))),t+=1,()=>{$t(()=>{t-=1,t===0&&(n==null||n(),n=void 0,nn(r))})})))}}var Yo=Gt|Mr;function qo(e,t,r,n){new Ko(e,t,r,n)}class Ko{constructor(t,r,n,i){D(this,oe);Ze(this,"parent");Ze(this,"is_pending",!1);Ze(this,"transform_error");D(this,at);D(this,Oi,null);D(this,st);D(this,br);D(this,Ce);D(this,Ge,null);D(this,Ie,null);D(this,Ye,null);D(this,Nt,null);D(this,xr,0);D(this,rr,0);D(this,Wr,!1);D(this,_n,new Set);D(this,gn,new Set);D(this,Ht,null);D(this,Hn,Go(()=>(I(this,Ht,Zt(u(this,xr))),()=>{I(this,Ht,null)})));var a;I(this,at,t),I(this,st,r),I(this,br,s=>{var o=W;o.b=this,o.f|=Qn,n(s)}),this.parent=W.b,this.transform_error=i??((a=this.parent)==null?void 0:a.transform_error)??(s=>s),I(this,Ce,sn(()=>{X(this,oe,Bi).call(this)},Yo))}defer_effect(t){ta(t,u(this,_n),u(this,gn))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!u(this,st).pending}update_pending_count(t,r){X(this,oe,Vi).call(this,t,r),I(this,xr,u(this,xr)+t),!(!u(this,Ht)||u(this,Wr))&&(I(this,Wr,!0),$t(()=>{I(this,Wr,!1),u(this,Ht)&&Ir(u(this,Ht),u(this,xr))}))}get_effect_pending(){return u(this,Hn).call(this),v(u(this,Ht))}error(t){if(!u(this,st).onerror&&!u(this,st).failed)throw t;C!=null&&C.is_fork?(u(this,Ge)&&C.skip_effect(u(this,Ge)),u(this,Ie)&&C.skip_effect(u(this,Ie)),u(this,Ye)&&C.skip_effect(u(this,Ye)),C.oncommit(()=>{X(this,oe,Fi).call(this,t)})):X(this,oe,Fi).call(this,t)}}at=new WeakMap,Oi=new WeakMap,st=new WeakMap,br=new WeakMap,Ce=new WeakMap,Ge=new WeakMap,Ie=new WeakMap,Ye=new WeakMap,Nt=new WeakMap,xr=new WeakMap,rr=new WeakMap,Wr=new WeakMap,_n=new WeakMap,gn=new WeakMap,Ht=new WeakMap,Hn=new WeakMap,oe=new WeakSet,Yc=function(){try{I(this,Ge,ze(()=>u(this,br).call(this,u(this,at))))}catch(t){this.error(t)}},qc=function(t){const r=u(this,st).failed,{reset:n,invoke_onerror:i}=X(this,oe,Di).call(this,t);$t(i),r&&I(this,Ye,ze(()=>{r(u(this,at),()=>t,()=>n)}))},Di=function(t){var r=!1,n=!1;const i=()=>{if(r){Qs();return}r=!0,n&&fo(),u(this,Ye)!==null&&fr(u(this,Ye),()=>{I(this,Ye,null)}),X(this,oe,Yn).call(this,()=>{X(this,oe,Bi).call(this)})};return{reset:i,invoke_onerror:()=>{var s,o;try{n=!0,(o=(s=u(this,st)).onerror)==null||o.call(s,t,i),n=!1}catch(l){At(l,u(this,Ce)&&u(this,Ce).parent)}}}},Kc=function(){const t=u(this,st).pending;t&&(this.is_pending=!0,I(this,Ie,ze(()=>t(u(this,at)))),$t(()=>{var r=I(this,Nt,document.createDocumentFragment()),n=zt(),i=!1;if(r.append(n),I(this,Ge,X(this,oe,Yn).call(this,()=>{try{return ze(()=>u(this,br).call(this,n))}catch(a){try{this.error(a),i=!0}catch(s){At(s,u(this,Ce).parent)}return null}})),u(this,Ge)===null){I(this,Nt,null),i&&X(this,oe,Sn).call(this,C);return}u(this,rr)===0&&(u(this,at).before(r),I(this,Nt,null),fr(u(this,Ie),()=>{I(this,Ie,null)}),X(this,oe,Sn).call(this,C))}))},Bi=function(){try{if(this.is_pending=this.has_pending_snippet(),I(this,rr,0),I(this,xr,0),I(this,Ge,ze(()=>{u(this,br).call(this,u(this,at))})),u(this,rr)>0){var t=I(this,Nt,document.createDocumentFragment());gi(u(this,Ge),t);const r=u(this,st).pending;I(this,Ie,ze(()=>r(u(this,at))))}else X(this,oe,Sn).call(this,C)}catch(r){this.error(r)}},Sn=function(t){this.is_pending=!1,t.transfer_effects(u(this,_n),u(this,gn))},Yn=function(t){var r=W,n=U,i=de;rt(u(this,Ce)),tt(u(this,Ce)),Or(u(this,Ce).ctx);try{return lr.ensure(),t()}finally{rt(r),tt(n),Or(i)}},Vi=function(t,r){var n;if(!this.has_pending_snippet()){this.parent&&X(n=this.parent,oe,Vi).call(n,t,r);return}I(this,rr,u(this,rr)+t),u(this,rr)===0&&(X(this,oe,Sn).call(this,r),u(this,Ie)&&fr(u(this,Ie),()=>{I(this,Ie,null)}),u(this,Nt)&&(u(this,at).before(u(this,Nt)),I(this,Nt,null)))},Fi=function(t){u(this,Ge)&&(Ee(u(this,Ge)),I(this,Ge,null)),u(this,Ie)&&(Ee(u(this,Ie)),I(this,Ie,null)),u(this,Ye)&&(Ee(u(this,Ye)),I(this,Ye,null));let r=u(this,st).failed;const n=i=>{const{reset:a,invoke_onerror:s}=X(this,oe,Di).call(this,i);s(),r&&I(this,Ye,X(this,oe,Yn).call(this,()=>{try{return ze(()=>{var o=W;o.b=this,o.f|=Qn,r(u(this,at),()=>i,()=>a)})}catch(o){return At(o,u(this,Ce).parent),null}}))};$t(()=>{var i;try{i=this.transform_error(t)}catch(a){At(a,u(this,Ce)&&u(this,Ce).parent);return}i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(n,a=>At(a,u(this,Ce)&&u(this,Ce).parent)):n(i)})};function q(e,t){var r=t==null?"":typeof t=="object"?`${t}`:t;r!==(e[Kr]??(e[Kr]=e.nodeValue))&&(e[Kr]=r,e.nodeValue=`${r}`)}function Zo(e,t){return Qo(e,t)}const In=new Map;function Qo(e,{target:t,anchor:r,props:n={},events:i,context:a,intro:s=!0,transformError:o}){$o();var l=void 0,c=No(()=>{var d=r??t.appendChild(zt());qo(d,{pending:()=>{}},_=>{qt({});var p=de;a&&(p.c=a),i&&(n.$$events=i),l=e(_,n)||ri(),Kt()},o);var h=new Set,y=_=>{for(var p=0;p<_.length;p++){var k=_[p];if(!h.has(k)){h.add(k);var f=Ho(k);for(const x of[t,document]){var g=In.get(x);g===void 0&&(g=new Map,In.set(x,g));var m=g.get(k);m===void 0?(x.addEventListener(k,xi,{passive:f}),g.set(k,1)):g.set(k,m+1)}}}};return y(kn(Ba)),yi.add(y),()=>{var f;for(var _ of h)for(const g of[t,document]){var p=In.get(g),k=p.get(_);--k==0?(g.removeEventListener(_,xi),p.delete(_),p.size===0&&In.delete(g)):p.set(_,k)}yi.delete(y),d!==r&&((f=d.parentNode)==null||f.removeChild(d))}});return Jo.set(l,c),l}let Jo=new WeakMap;class ki{constructor(t,r=!0){Ze(this,"anchor");D(this,wt,new Map);D(this,Ot,new Map);D(this,qe,new Map);D(this,Sr,new Set);D(this,mn,!0);D(this,yn,t=>{if(u(this,wt).has(t)){var r=u(this,wt).get(t),n=u(this,Ot).get(r);if(n)Rn(n),u(this,Sr).delete(r);else{var i=u(this,qe).get(r);i&&(Rn(i.effect),u(this,Ot).set(r,i.effect),u(this,qe).delete(r),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),n=i.effect)}for(const[a,s]of u(this,wt)){if(u(this,wt).delete(a),a===t)break;const o=u(this,qe).get(s);o&&(Ee(o.effect),u(this,qe).delete(s))}for(const[a,s]of u(this,Ot)){if(a===r||u(this,Sr).has(a))continue;const o=()=>{if(Array.from(u(this,wt).values()).includes(a)){var c=document.createDocumentFragment();gi(s,c),c.append(zt()),u(this,qe).set(a,{effect:s,fragment:c})}else Ee(s);u(this,Sr).delete(a),u(this,Ot).delete(a)};u(this,mn)||!n?(u(this,Sr).add(a),fr(s,o,!1)):o()}}});D(this,Un,t=>{u(this,wt).delete(t);const r=Array.from(u(this,wt).values());for(const[n,i]of u(this,qe))r.includes(n)||(Ee(i.effect),u(this,qe).delete(n))});this.anchor=t,I(this,mn,r)}ensure(t,r){var n=C,i=wa();if(r&&!u(this,Ot).has(t)&&!u(this,qe).has(t))if(i){var a=document.createDocumentFragment(),s=zt();a.append(s),u(this,qe).set(t,{effect:ze(()=>r(s)),fragment:a})}else u(this,Ot).set(t,ze(()=>r(this.anchor)));if(u(this,wt).set(n,t),i){for(const[o,l]of u(this,Ot))o===t?n.unskip_effect(l):n.skip_effect(l);for(const[o,l]of u(this,qe))o===t?n.unskip_effect(l.effect):n.skip_effect(l.effect);n.oncommit(u(this,yn)),n.ondiscard(u(this,Un))}else u(this,yn).call(this,n)}}wt=new WeakMap,Ot=new WeakMap,qe=new WeakMap,Sr=new WeakMap,mn=new WeakMap,yn=new WeakMap,Un=new WeakMap;function gt(e,t,r=!1){var n=new ki(e),i=r?Gt:0;function a(s,o){n.ensure(s,o)}sn(()=>{var s=!1;t((o,l=0)=>{s=!0,a(l,o)}),s||a(-1,null)},i)}function Fa(e,t){return t}function el(e,t,r){for(var n=[],i=t.length,a,s=t.length,o=0;o<i;o++){let h=t[o];fr(h,()=>{if(a){if(a.pending.delete(h),a.done.add(h),a.pending.size===0){var y=e.outrogroups;$i(e,kn(a.done)),y.delete(a),y.size===0&&(e.outrogroups=null)}}else s-=1},!1)}if(s===0){var l=n.length===0&&r!==null&&e.pending.size===0;if(l){var c=r,d=c.parentNode;Eo(d),d.append(c),e.items.clear()}$i(e,t,!l)}else a={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(a)}function $i(e,t,r=!0){var n;if(e.pending.size>0){n=new Set;for(const s of e.pending.values())for(const o of s)n.add(e.items.get(o).e)}for(var i=0;i<t.length;i++){var a=t[i];if(n!=null&&n.has(a)){a.f|=St;const s=document.createDocumentFragment();gi(a,s)}else Ee(t[i],r)}}var Ha;function Jt(e,t,r,n,i,a=null){var s=e,o=new Map,l=(t&Ki)!==0;if(l){var c=e;s=c.appendChild(zt())}var d=null,h=ii(()=>{var x=r();return ie(x)?x:x==null?[]:kn(x)}),y,_=new Map,p=!0;function k(x){(m.effect.f&Pe)===0&&(m.pending.delete(x),m.fallback=d,tl(m,y,s,t,n),d!==null&&(y.length===0?(d.f&St)===0?Rn(d):(d.f^=St,fn(d,null,s)):fr(d,()=>{d=null})))}function f(x){m.pending.delete(x)}var g=sn(()=>{y=v(h);for(var x=y.length,M=new Set,S=C,E=wa(),A=0;A<x;A+=1){var R=y[A],z=n(R,A),te=p?null:o.get(z);te?(te.v&&Ir(te.v,R),te.i&&Ir(te.i,A),E&&S.unskip_effect(te.e)):(te=rl(o,p?s:Ha??(Ha=zt()),R,z,A,i,t,r),p||(te.e.f|=St),o.set(z,te)),M.add(z)}if(x===0&&a&&!d&&(p?d=ze(()=>a(s)):(d=ze(()=>a(Ha??(Ha=zt()))),d.f|=St)),x>M.size&&ro(),!p)if(_.set(S,M),E){for(const[le,Ve]of o)M.has(le)||S.skip_effect(Ve.e);S.oncommit(k),S.ondiscard(f)}else k(S);v(h)}),m={effect:g,items:o,pending:_,outrogroups:null,fallback:d};p=!1}function un(e){for(;e!==null&&(e.f&Qe)===0;)e=e.next;return e}function tl(e,t,r,n,i){var te,le,Ve,Fe,ot,Pt,Ae,lt,bt;var a=(n&Vs)!==0,s=t.length,o=e.items,l=un(e.effect.first),c,d=null,h,y=[],_=[],p,k,f,g;if(a)for(g=0;g<s;g+=1)p=t[g],k=i(p,g),f=o.get(k).e,(f.f&St)===0&&((le=(te=f.nodes)==null?void 0:te.a)==null||le.measure(),(h??(h=new Set)).add(f));for(g=0;g<s;g+=1){if(p=t[g],k=i(p,g),f=o.get(k).e,e.outrogroups!==null)for(const Ne of e.outrogroups)Ne.pending.delete(f),Ne.done.delete(f);if((f.f&Oe)!==0&&(Rn(f),a&&((Fe=(Ve=f.nodes)==null?void 0:Ve.a)==null||Fe.unfix(),(h??(h=new Set)).delete(f))),(f.f&St)!==0)if(f.f^=St,f===l)fn(f,null,r);else{var m=d?d.next:l;f===e.effect.last&&(e.effect.last=f.prev),f.prev&&(f.prev.next=f.next),f.next&&(f.next.prev=f.prev),er(e,d,f),er(e,f,m),fn(f,m,r),d=f,y=[],_=[],l=un(d.next);continue}if(f!==l){if(c!==void 0&&c.has(f)){if(y.length<_.length){var x=_[0],M;d=x.prev;var S=y[0],E=y[y.length-1];for(M=0;M<y.length;M+=1)fn(y[M],x,r);for(M=0;M<_.length;M+=1)c.delete(_[M]);er(e,S.prev,E.next),er(e,d,S),er(e,E,x),l=x,d=E,g-=1,y=[],_=[]}else c.delete(f),fn(f,l,r),er(e,f.prev,f.next),er(e,f,d===null?e.effect.first:d.next),er(e,d,f),d=f;continue}for(y=[],_=[];l!==null&&l!==f;)(c??(c=new Set)).add(l),_.push(l),l=un(l.next);if(l===null)continue}(f.f&St)===0&&y.push(f),d=f,l=un(f.next)}if(e.outrogroups!==null){for(const Ne of e.outrogroups)Ne.pending.size===0&&($i(e,kn(Ne.done)),(ot=e.outrogroups)==null||ot.delete(Ne));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||c!==void 0){var A=[];if(c!==void 0)for(f of c)(f.f&Oe)===0&&A.push(f);for(;l!==null;)(l.f&Oe)===0&&l!==e.fallback&&A.push(l),l=un(l.next);var R=A.length;if(R>0){var z=(n&Ki)!==0&&s===0?r:null;if(a){for(g=0;g<R;g+=1)(Ae=(Pt=A[g].nodes)==null?void 0:Pt.a)==null||Ae.measure();for(g=0;g<R;g+=1)(bt=(lt=A[g].nodes)==null?void 0:lt.a)==null||bt.fix()}el(e,A,z)}}a&&$t(()=>{var Ne,Ut;if(h!==void 0)for(f of h)(Ut=(Ne=f.nodes)==null?void 0:Ne.a)==null||Ut.apply()})}function rl(e,t,r,n,i,a,s,o){var l=(s&Ds)!==0?(s&Fs)===0?So(r,!1,!1):Zt(r):null,c=(s&Bs)!==0?Zt(i):null;return{v:l,i:c,e:ze(()=>(a(t,l??r,c??i,o),()=>{e.delete(n)}))}}function fn(e,t,r){if(e.nodes)for(var n=e.nodes.start,i=e.nodes.end,a=t&&(t.f&St)===0?t.nodes.start:r;n!==null;){var s=an(n);if(a.before(n),n===i)return;n=s}}function er(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function se(e,t,r,n,i){var o,l;if((o=t.$$host)!=null&&o.$$shadowRoot){const c=di("slot");N(e,c);return}var a=(l=t.$$slots)==null?void 0:l[r],s=!1;a===!0&&(a=t.children,s=!0),a===void 0||a(e,s?()=>n:n)}function nl(e,t,r){var n=new ki(e);sn(()=>{var i=t()??null;n.ensure(i,i&&(a=>r(a,i)))},Gt)}function il(e,t,r,n,i,a){var s=null,o=e,l=new ki(o,!1);sn(()=>{const c=t()||null;var d=Ys;if(c===null){l.ensure(null,null);return}return l.ensure(c,h=>{if(c){if(s=di(c,d),cn(s,s),n){var y=null,_=s.appendChild(zt());n(s,_),y==null||y.remove()}W.nodes.end=s,h.before(s)}}),()=>{}},Gt),pi(()=>{})}function al(e,t){var r=void 0,n;ka(()=>{r!==(r=t())&&(n&&(Ee(n),n=null),r&&(n=ze(()=>{hi(()=>r(e))})))})}function Ua(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=Ua(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function sl(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=Ua(e))&&(n&&(n+=" "),n+=t);return n}function gr(e){return typeof e=="object"?sl(e):e??""}const Wa=[...` 	
\r\f \v\uFEFF`];function ol(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var i of Object.keys(r))if(r[i])n=n?n+" "+i:i;else if(n.length)for(var a=i.length,s=0;(s=n.indexOf(i,s))>=0;){var o=s+a;(s===0||Wa.includes(n[s-1]))&&(o===n.length||Wa.includes(n[o]))?n=(s===0?"":n.substring(0,s))+n.substring(o+1):s=o}}return n===""?null:n}function ja(e,t=!1){var r=t?" !important;":";",n="";for(var i of Object.keys(e)){var a=e[i];a!=null&&a!==""&&(n+=" "+i+": "+a+r)}return n}function Ei(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function ll(e,t){if(t){var r="",n,i;if(Array.isArray(t)?(n=t[0],i=t[1]):n=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var a=!1,s=0,o=!1,l=[];n&&l.push(...Object.keys(n).map(Ei)),i&&l.push(...Object.keys(i).map(Ei));var c=0,d=-1;const k=e.length;for(var h=0;h<k;h++){var y=e[h];if(o?y==="/"&&e[h-1]==="*"&&(o=!1):a?a===y&&(a=!1):y==="/"&&e[h+1]==="*"?o=!0:y==='"'||y==="'"?a=y:y==="("?s++:y===")"&&s--,!o&&a===!1&&s===0){if(y===":"&&d===-1)d=h;else if(y===";"||h===k-1){if(d!==-1){var _=Ei(e.substring(c,d).trim());if(!l.includes(_)){y!==";"&&h++;var p=e.substring(c,h).trim();r+=" "+p+";"}}c=h+1,d=-1}}}}return n&&(r+=ja(n)),i&&(r+=ja(i,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Re(e,t,r,n,i,a){var s=e[ei];if(s!==r||s===void 0){var o=ol(r,n,a);o==null?e.removeAttribute("class"):t?e.className=o:e.setAttribute("class",o),e[ei]=r}else if(a&&i!==a)for(var l in a){var c=!!a[l];(i==null||c!==!!i[l])&&e.classList.toggle(l,c)}return a}function Ai(e,t={},r,n){for(var i in r){var a=r[i];t[i]!==a&&(r[i]==null?e.style.removeProperty(i):e.style.setProperty(i,a,n))}}function Xa(e,t,r,n){var i=e[ti];if(i!==t){var a=ll(t,n);a==null?e.removeAttribute("style"):e.style.cssText=a,e[ti]=t}else n&&(Array.isArray(n)?(Ai(e,r==null?void 0:r[0],n[0]),Ai(e,r==null?void 0:r[1],n[1],"important")):Ai(e,r,n));return n}function Ga(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Ya(e,t){var r=!("__defaultValue"in e);!r&&e.__defaultValue===t||(e.__defaultValue=t,qa(e,!r||"__value"in e))}function qa(e,t){var r=e.__defaultValue,n=e.multiple,i=n?r??[]:null;if(!(n&&!ie(i))){var a=e.selectedIndex,s=t&&n?new Set(e.selectedOptions):null;for(var o of e.options){var l=Mi(o);Ga(o,n?i.includes(l):ha(l,r))}if(t)if(s!==null)for(o of e.options){var c=s.has(o);o.selected!==c&&(o.selected=c)}else e.selectedIndex!==a&&(e.selectedIndex=a)}}function Bt(e,t,r=!1){if(e.multiple){if(t==null)return;if(!ie(t))return Zs();for(var n of e.options)n.selected=t.includes(Mi(n));return}for(n of e.options){var i=Mi(n);if(ha(i,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function mr(e){var t=new MutationObserver(r=>{r.every(cl)||("__defaultValue"in e&&qa(e,!1),"__value"in e&&Bt(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),pi(()=>{t.disconnect()})}function Mi(e){return"__value"in e?e.__value:e.value}function cl(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(r=>r.nodeName==="SELECTEDCONTENT")}return!1}const dn=Symbol("class"),vn=Symbol("style"),Ka=Symbol("is custom element"),Za=Symbol("is html"),ul=Tn?"input":"INPUT",fl=Tn?"option":"OPTION",Qa=Tn?"select":"SELECT",dl=Tn?"progress":"PROGRESS";function Ln(e,t){var r=zn(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==dl)||(e.value=t??"")}function vl(e,t){var r=zn(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function ke(e,t,r,n){var i=zn(e);i[t]!==(i[t]=r)&&(t==="loading"&&(e[zs]=r),r==null?e.removeAttribute(t):typeof r!="string"&&ts(e).has(t)?e[t]=r:e.setAttribute(t,r))}function pl(e,t,r,n,i=!1,a=!1){var s=zn(e),o=s[Ka],l=!s[Za],c=t||{},d=e.nodeName===fl,h=e.nodeName===Qa;for(var y in t)!(y in r)&&y[0]+y[1]!=="$$"&&(r[y]=null);r.class?r.class=gr(r.class):r[dn]&&(r.class=null),r[vn]&&(r.style??(r.style=null));var _=ts(e);if(e.nodeName===ul&&"type"in r&&("value"in r||"__value"in r)){var p=r.type;(p!==c.type||p===void 0&&e.hasAttribute("type"))&&(c.type=p,ke(e,"type",p))}for(const S in r){let E=r[S];if(d&&S==="value"&&E==null){e.value=e.__value="",c[S]=E;continue}if(S==="class"){var k=e.namespaceURI==="http://www.w3.org/1999/xhtml";Re(e,k,E,n,t==null?void 0:t[dn],r[dn]),c[S]=E,c[dn]=r[dn];continue}if(S==="style"){Xa(e,E,t==null?void 0:t[vn],r[vn]),c[S]=E,c[vn]=r[vn];continue}var f=c[S];if(!(E===f&&!(E===void 0&&e.hasAttribute(S)))){c[S]=E;var g=S[0]+S[1];if(g!=="$$")if(g==="on"){const A={},R="$$"+S;let z=S.slice(2);var m=Do(z);if(Lo(z)&&(z=z.slice(0,-7),A.capture=!0),!m&&f){if(E!=null)continue;e.removeEventListener(z,c[R],A),c[R]=null}if(m)Q(z,e,E),_r([z]);else if(E!=null){let te=function(le){c[S].call(this,le)};c[R]=Uo(z,e,te,A)}}else if(S==="style")ke(e,S,E);else if(S==="autofocus")_o(e,!!E);else if(!o&&(S==="__value"||S==="value"&&E!=null))e.value=e.__value=E;else if(S==="selected"&&d)Ga(e,E);else{var x=S;l||(x=Vo(x));var M=x==="defaultValue"||x==="defaultChecked";if(h&&x==="defaultValue")continue;if(E==null&&!o&&!M)if(s[S]=null,x==="value"||x==="checked"){let A=e;const R=t===void 0;if(x==="value"){let z=A.defaultValue;A.removeAttribute(x),A.defaultValue=z,A.value=A.__value=R?z:null}else{let z=A.defaultChecked;A.removeAttribute(x),A.defaultChecked=z,A.checked=R?z:!1}}else e.removeAttribute(S);else M||(o||typeof E!="string")&&_.has(x)?(e[x]=E,x in s&&(s[x]=we)):typeof E!="function"&&ke(e,x,E)}}}return c}function Ja(e,t,r=[],n=[],i=[],a,s=!1,o=!1){ra(i,r,n,l=>{var c=void 0,d={},h=e.nodeName===Qa,y=!1;if(ka(()=>{var p=t(...l.map(v)),k=pl(e,c,p,a,s,o);if(y&&h){var f=e;"defaultValue"in p&&Ya(f,p.defaultValue),"value"in p&&Bt(f,p.value)}for(let m of Object.getOwnPropertySymbols(d))p[m]||Ee(d[m]);for(let m of Object.getOwnPropertySymbols(p)){var g=p[m];m.description===qs&&(!c||g!==c[m])&&(d[m]&&Ee(d[m]),d[m]=ze(()=>al(e,()=>g))),k[m]=g}c=k}),h){var _=e;hi(()=>{var p=c;"defaultValue"in p&&Ya(_,p.defaultValue),Bt(_,p.value,!0),mr(_)})}y=!0})}function zn(e){return e[Mn]??(e[Mn]={[Ka]:e.nodeName.includes("-"),[Za]:e.namespaceURI===Qi})}var es=new Map;function ts(e){var t=e.getAttribute("is")||e.nodeName,r=es.get(t);if(r)return r;es.set(t,r=new Set);for(var n,i=e,a=Element.prototype;a!==i;){n=Ui(i);for(var s in n)n[s].set&&s!=="innerHTML"&&s!=="textContent"&&s!=="innerText"&&r.add(s);i=qn(i)}return r}function Ti(e,t){return e===t||(e==null?void 0:e[kt])===t}function rs(e=ri(),t,r,n){var i=de.r,a=W;return hi(()=>{var s,o;return Sa(()=>{s=o,o=[],Qt(()=>{Ti(r(...o),e)||(t(e,...o),s&&Ti(r(...s),e)&&t(null,...s))})}),()=>{let l=a;for(;l!==i&&l.parent!==null&&l.parent.f&$n;)l=l.parent;const c=()=>{o&&Ti(r(...o),e)&&t(null,...o)},d=l.teardown;l.teardown=()=>{c(),d==null||d()}}}),e}function hl(e=!1){const t=de,r=t.l.u;if(!r)return;let n=()=>pr(t.s);if(e){let i=0,a={};const s=Rr(()=>{let o=!1;const l=t.s;for(const c in l)l[c]!==a[c]&&(a[c]=l[c],o=!0);return o&&i++,i});n=()=>v(s)}r.b.length&&To(()=>{ns(t,n),Kn(r.b)}),Lr(()=>{const i=Qt(()=>r.m.map(Is));return()=>{for(const a of i)typeof a=="function"&&a()}}),r.a.length&&Lr(()=>{ns(t,n),Kn(r.a)})}function ns(e,t){if(e.l.s)for(const r of e.l.s)v(r);t()}let Dn=!1;function _l(e){var t=Dn;try{return Dn=!1,[e(),Dn]}finally{Dn=t}}const gl={get(e,t){if(!e.exclude.includes(t))return v(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var n=W;try{rt(e.parent_effect),e.special[t]=mt({get[t](){return e.props[t]}},t,Zi)}finally{rt(n)}}return e.special[t](r),da(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),da(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ae(e,t){return new Proxy({props:e,exclude:t,special:{},version:Zt(0),parent_effect:W},gl)}const ml={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Yr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let i=e.props[n];Yr(i)&&(i=i());const a=Xt(i,t);if(a&&a.set)return a.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Yr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const i=Xt(n,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===kt||t===qi)return!1;for(let r of e.props)if(Yr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Yr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function ce(...e){return new Proxy({props:e},ml)}function mt(e,t,r,n){var M;var i=!Nr||(r&Us)!==0,a=(r&Ws)!==0,s=(r&js)!==0,o=n,l=!0,c=void 0,d=()=>s&&i?(c??(c=Rr(n)),v(c)):(l&&(l=!1,o=s?Qt(n):n),o);let h;if(a){var y=kt in e||qi in e;h=((M=Xt(e,t))==null?void 0:M.set)??(y&&t in e?S=>e[t]=S:void 0)}var _,p=!1;a?[_,p]=_l(()=>e[t]):_=e[t],_===void 0&&n!==void 0&&(_=d(),h&&(i&&oo(),h(_)));var k;if(i?k=()=>{var S=e[t];return S===void 0?d():(l=!0,S)}:k=()=>{var S=e[t];return S!==void 0&&(o=void 0),S===void 0?o:S},i&&(r&Zi)===0)return k;if(h){var f=e.$$legacy;return(function(S,E){return arguments.length>0?((!i||!E||f||p)&&h(E?k():S),S):k()})}var g=!1,m=((r&Hs)!==0?Rr:ii)(()=>(g=!1,k()));a&&v(m);var x=W;return(function(S,E){if(arguments.length>0){const A=E?v(m):i&&a?Le(S):S;return $(m,A),g=!0,o!==void 0&&(o=A),S}return Dt&&g||(x.f&Pe)!==0?m.v:v(m)})}function Ni(e){de===null&&eo(),Nr&&de.l!==null?yl(de).m.push(e):Lr(()=>{const t=Qt(e);if(typeof t=="function")return t})}function yl(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const wl="5";typeof window<"u"&&((ps=window.__svelte??(window.__svelte={})).v??(ps.v=new Set)).add(wl);const ee=Le({ready:!1,cleanScreen:!1,panelOpen:!0,settingsOpen:!1,startupOpen:!0,focusSection:null,focusNonce:0,status:{}});function bl(e){ee.panelOpen=!0,ee.focusSection=e,ee.focusNonce++}const We=Le({});function is(e){try{return structuredClone(e)}catch{return JSON.parse(JSON.stringify(e))}}function Z(e){var t,r,n;if(e==null)return e;try{return((n=(r=(t=window.XRA)==null?void 0:t.i18n)==null?void 0:r.t)==null?void 0:n.call(r,e))??e}catch{return e}}function Be(e,t){const r=e.split(".");let n=We;for(const i of r){if(n==null)return t;n=n[i]}return n===void 0?t:n}function xl(e){var r,n,i,a,s,o,l,c;const t=window.XRA;if(t){if(e.startsWith("background.")){(n=(r=t.background)==null?void 0:r.apply)==null||n.call(r);return}if(e==="ui.language"){(a=(i=t.i18n)==null?void 0:i.setLanguage)==null||a.call(i,We.ui.language);return}if(e==="ui.preview_wireframe"){typeof t.applyMocapWireframeVisibility=="function"&&t.applyMocapWireframeVisibility();return}if(e==="ui.mocap_view"){typeof t.applyMocapWireframeVisibility=="function"&&t.applyMocapWireframeVisibility();return}if(e.startsWith("performance.")){window.XRA_render_fps_limit=Number(We.performance.render_fps??60),window.XRA_gpu_preference=String(We.performance.gpu_preference||"default"),window.XRA_preserve_drawing_buffer=We.performance.preserve_drawing_buffer!==!1,window.XRA_antialias=We.performance.antialias!=="off",(o=(s=t.events)==null?void 0:s.emit)==null||o.call(s,"performance",We.performance);return}(c=(l=t.events)==null?void 0:l.emit)==null||c.call(l,"config-change",{path:e,value:Be(e)})}}function it(e,t){var a,s;const r=window.XRA,n=e.split(".");let i=We;for(let o=0;o<n.length-1;o++)i[n[o]]==null&&(i[n[o]]={}),i=i[n[o]];if(i[n[n.length-1]]=t,r!=null&&r.config){let o=r.config;for(let l=0;l<n.length-1;l++)o[n[l]]==null&&(o[n[l]]={}),o=o[n[l]];o[n[n.length-1]]=t}xl(e);try{(s=(a=r==null?void 0:r.profileService)==null?void 0:a.save)==null||s.call(a)}catch{}}function Bn(e,t,r){return new Promise((n,i)=>{const a=setTimeout(()=>i(new Error(`${r} timed out after ${t} ms`)),t);Promise.resolve(e).then(s=>{clearTimeout(a),n(s)},s=>{clearTimeout(a),i(s)})})}async function as({timeout:e=12e3,dataTimeout:t=8e3}={}){var n,i,a;const r=(n=window.XRA)==null?void 0:n.nativeBridge;if(!(r!=null&&r.startNativeStreamer))throw new Error("native bridge unavailable");try{await Bn(r.startNativeStreamer(),e,"Camera start");const s=performance.now()+t;for(;performance.now()<s;){if((i=r.cameraDataReady)!=null&&i.call(r))return!0;await new Promise(o=>setTimeout(o,120))}return!0}catch(s){try{await((a=r.forceStopCamera)==null?void 0:a.call(r))}catch{}throw s}}async function Sl({timeout:e=8e3}={}){var r,n;const t=(r=window.XRA)==null?void 0:r.nativeBridge;if(t!=null&&t.stopNativeStreamer)try{await Bn(t.stopNativeStreamer(),e,"Camera stop")}catch(i){try{await((n=t.forceStopCamera)==null?void 0:n.call(t))}catch{}throw i}}async function kl({timeout:e=12e3,readyTimeout:t=6e3}={}){var n,i,a,s;const r=(n=window.XRA)==null?void 0:n.recorder;if(!(r!=null&&r.start))throw new Error("recorder unavailable");try{await Bn(r.start(),e,"Recording start");const o=performance.now()+t;for(;performance.now()<o;){if((a=(i=r.status)==null?void 0:i.call(r))!=null&&a.active)return!0;await new Promise(l=>setTimeout(l,120))}return!0}catch(o){try{await((s=r.stop)==null?void 0:s.call(r))}catch{}throw o}}async function $l({timeout:e=8e3}={}){var r,n;const t=(r=window.XRA)==null?void 0:r.recorder;if(t!=null&&t.stop)try{await Bn(t.stop(),e,"Recording stop")}catch(i){try{await((n=t.stop)==null?void 0:n.call(t))}catch{}throw i}}function Vn(){var e,t,r;ee.cleanScreen=!ee.cleanScreen,document.body.classList.toggle("xra-total-clean-screen",ee.cleanScreen);try{(r=(t=(e=window.XRA)==null?void 0:e.ui)==null?void 0:t.setHidden)==null||r.call(t,ee.cleanScreen)}catch{}}function El(){var e;try{Object.assign(We,is(((e=window.XRA)==null?void 0:e.config)||{}))}catch{}}function ss(){var e;try{const t=(e=window.SA_bridge)==null?void 0:e.backend;t&&typeof t.status=="function"&&(ee.status=t.status()||{})}catch{}}function Al(){const e=()=>window.XRA&&window.XRA.config?(Object.assign(We,is(window.XRA.config)),ee.ready=!0,ss(),window.addEventListener("keydown",t=>{t.key==="Escape"&&ee.cleanScreen&&(t.preventDefault(),Vn())},!0),!0):!1;if(!e()){const t=setInterval(()=>{e()&&clearInterval(t)},200)}}const Ml={camera:{title:"Camera",icon:"Camera"},devices:{title:"Devices",icon:"SlidersHorizontal"},pose_model:{title:"Pose model",icon:"PersonStanding"},performance:{title:"Performance",icon:"Zap"},tracking:{title:"Motion capture",icon:"Activity"},body:{title:"Body",icon:"PersonStanding"},collider:{title:"Body collider",icon:"Shield"},lip:{title:"Audio & Lip-sync",icon:"Mic"},background:{title:"Background",icon:"Image"},avatar:{title:"Character position (avatar only)",icon:"User"},second_avatar:{title:"Remote avatar (Studio Link)",icon:"Globe"},stage:{title:"3D Stage & Environment",icon:"Landmark"},recorder:{title:"Recording / capture",icon:"Video"},visual_effects:{title:"Visual effects",icon:"Sparkles"},debug:{title:"Diagnostics",icon:"Bug"},ui:{title:"UI & overlays",icon:"Monitor"}},os=["performance","tracking","body","collider","lip","background","stage","avatar","second_avatar","recorder","visual_effects","debug","ui","camera","devices","pose_model"],Tl=new Set(["left_settings","_custom_","_excluded_"]),Nl=new Set(["camera.view_presets","camera.selected_view_preset","ui.preview_video","ui.preview_wireframe","ui.preview_debug","performance.auto_last_result","recorder.output_dir"]);function ls(e){const t=String(e).replace(/_/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").trim();return t.charAt(0).toUpperCase()+t.slice(1)}const Ol={"ui.language":{type:"select",options:()=>{var e,t;return((t=(e=window.XRA)==null?void 0:e.i18n)==null?void 0:t.LANGUAGES)||[["en","English"]]}},"background.mode":{type:"select",options:[["color","Color"],["image","Image"],["none","None (transparent · OBS)"]]},"background.color":{type:"color"},"background.path":{type:"text"},"ui.mocap_view":{type:"select",label:"Mocap window",options:[["off","Off"],["both","Webcam + skeleton"],["wireframe","Skeleton only"],["video","Webcam only"]]},"ui.mocap_visibility":{type:"select",label:"Mocap window visibility",options:[["always","Always on (black while idle)"],["auto","Auto (hide when tracking is off)"]]},"performance.tracking_pipeline":{type:"select",label:"Tracking mode",options:[["FULL_BODY","Full Body"],["FACE","Face only"],["UPPER_BODY","Upper body"]]},"performance.render_resolution":{type:"select",options:[["720p","720p (HD · GPU Saving)"],["1080p","1080p (Full HD · Recommended)"],["1440p","1440p (2K · High resolution)"]]},"performance.render_fps":{type:"slider",min:15,max:240,step:1},"performance.gpu_preference":{type:"select",label:"Graphics card (GPU)",options:[["default","Default"],["high-performance","Dedicated GPU (High Performance)"],["low-power","Integrated GPU (Low Power)"]]},"performance.shadows":{type:"select",options:[["auto","Auto"],["on","Enabled"],["off","Disabled (GPU saving)"]]},"performance.antialias":{type:"select",label:"Anti-Aliasing (AA)",options:[["auto","Enabled (Hardware MSAA · Recommended)"],["off","Disabled"]]},"performance.spring_bone":{type:"select",label:"Hair/cloth physics (Spring Bone)",options:[["full","Full (every frame)"],["half","Half (1 frame out of 2 · Saving)"],["off","Off"]]},"performance.infer_mode":{type:"select",options:[["native","Native (Auto)"],["640x360","640×360 (Recommended · 30 FPS smooth)"],["640x480","640×480 (Standard 4:3 format)"],["1280x720","1280×720 (HD 720p · High precision)"]]},"performance.pose_fps":{type:"slider",min:5,max:30,step:1},"performance.hand_fps":{type:"slider",min:5,max:30,step:1},"performance.min_tracking_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_pose_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_face_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_joint_confidence":{type:"slider",min:.05,max:1,step:.05},"tracking.hand_recovery_mode":{type:"select",options:[["normal","Normal"],["aggressive","Aggressive"],["off","Off"]]},"tracking.hand_detection_sensitivity":{type:"select",options:[["high","High"],["normal","Normal"],["low","Low"]]},"tracking.stabilize_hand_percent":{type:"slider",min:0,max:100,step:1},"tracking.stabilize_arm":{type:"slider",min:0,max:100,step:1},"tracking.stabilize_arm_time":{type:"slider",min:0,max:2,step:.05},"tracking.native_smoothing":{type:"slider",min:0,max:1,step:.01},"tracking.body_bend_reduction":{type:"slider",min:0,max:1,step:.01},"tracking.upper_body_guard_strength":{type:"slider",min:0,max:1,step:.01},"tracking.guard_jump_deg":{type:"slider",min:5,max:120,step:1},"tracking.guard_hold_ms":{type:"slider",min:0,max:2e3,step:10},"tracking.guard_reacquire_deg":{type:"slider",min:5,max:120,step:1},"tracking.adaptive_smoothing_strength":{type:"slider",min:0,max:1,step:.01},"tracking.guard_confidence_min":{type:"slider",min:0,max:1,step:.01},"tracking.guard_release_ms":{type:"slider",min:0,max:2e3,step:10},"tracking.guard_mode":{type:"select",options:[["off","Off"],["auto","Auto"]]},"tracking.desk_torso_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_hips_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_legs_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_max_yaw_deg":{type:"slider",min:0,max:90,step:1},"tracking.desk_max_pitch_deg":{type:"slider",min:0,max:90,step:1},"tracking.desk_max_roll_deg":{type:"slider",min:0,max:90,step:1},"body.anchor_strength":{type:"slider",min:0,max:1,step:.01},"body.transition_ms":{type:"slider",min:0,max:2e3,step:10},"avatar.offset_x":{type:"slider",min:-5,max:5,step:.01},"avatar.offset_y":{type:"slider",min:-5,max:5,step:.01},"avatar.offset_z":{type:"slider",min:-5,max:5,step:.01},"avatar.rotation_y":{type:"slider",min:-180,max:180,step:1},"second_avatar.offset_x":{type:"slider",min:-20,max:20,step:.1},"second_avatar.offset_y":{type:"slider",min:-10,max:10,step:.1},"second_avatar.offset_z":{type:"slider",min:-10,max:10,step:.1},"second_avatar.rotation_y":{type:"slider",min:-180,max:180,step:1},"stage.scale":{type:"slider",min:.1,max:5,step:.01},"stage.rotation_x":{type:"slider",min:-180,max:180,step:1},"stage.rotation_y":{type:"slider",min:-180,max:180,step:1},"stage.rotation_z":{type:"slider",min:-180,max:180,step:1},"stage.offset_x":{type:"slider",min:-10,max:10,step:.05},"stage.offset_y":{type:"slider",min:-10,max:10,step:.05},"stage.offset_z":{type:"slider",min:-10,max:10,step:.05},"stage.scene_zoom":{type:"slider",min:.5,max:3,step:.01},"stage.lights_intensity":{type:"slider",min:0,max:3,step:.05},"collider.preset":{type:"select",options:[["CUSTOM","Custom"],["NONE","None"]]},"collider.reaction":{type:"select",options:[["z_push","Z push"],["bounce","Bounce"],["block","Block"]]},"collider.head":{type:"slider",min:0,max:200,step:1},"collider.chest":{type:"slider",min:0,max:200,step:1},"collider.waist":{type:"slider",min:0,max:200,step:1},"collider.hip":{type:"slider",min:0,max:200,step:1},"collider.front_clearance":{type:"slider",min:0,max:50,step:1},"lip.analysis_fps":{type:"slider",min:5,max:60,step:1},"lip.fft_size":{type:"select",label:"FFT size",options:[["256","256"],["512","512"],["1024","1024"],["2048","2048"]]},"lip.mic_mix":{type:"slider",min:0,max:1,step:.01},"lip.threshold":{type:"slider",min:0,max:.2,step:.001},"lip.response_gain":{type:"slider",min:0,max:3,step:.05},"lip.vowel_emphasis":{type:"slider",min:0,max:3,step:.05},"recorder.mode":{type:"select",label:"Recording source",options:[["video_audio","Video + Audio"],["video","Video only"],["audio","Audio only"]]},"recorder.audio_only_variant":{type:"select",label:"Audio only mode",options:[["both","Processed + RAW"],["processed","Processed"],["raw","RAW"]]},"recorder.capture_source":{type:"select",label:"Output source",options:[["classic_v74","Classic output · recommended"],["clean_scene","Clean scene output · experimental (no UI)"],["native_xr","XR native video only · fallback"]]},"recorder.output_format":{type:"select",options:[["webm","WebM"],["mp4","MP4"]]},"recorder.audio_profile":{type:"select",options:[["podcast","Podcast"],["call","Call (Browser echo/noise filters)"]]},"recorder.hardware_encode":{type:"select",options:[["auto","Auto"],["on","On"],["off","Off (CPU)"]]},"recorder.width":{type:"slider",min:320,max:3840,step:2},"recorder.height":{type:"slider",min:240,max:2160,step:2},"recorder.fps":{type:"slider",min:15,max:60,step:1},"recorder.gate_threshold_db":{type:"slider",min:-80,max:-5,step:.5},"recorder.gate_hold_ms":{type:"slider",min:0,max:1e3,step:10},"recorder.gate_release_ms":{type:"slider",min:0,max:1e3,step:10},"recorder.video_bps":{type:"slider",min:5e5,max:2e7,step:1e5},"recorder.audio_bps":{type:"slider",min:32e3,max:32e4,step:8e3},"recorder.segment_minutes":{type:"select",options:[["0","Off"],["30","Every 30 min"],["60","Every 60 min"]]},"recorder.raw_audio_format":{type:"select",options:[["flac","FLAC (lossless)"],["wav","WAV (large)"]]},"recorder.filename":{type:"text"},"camera.optimized":{type:"toggle"},"camera.width":{type:"slider",min:160,max:1920,step:2},"camera.height":{type:"slider",min:120,max:1080,step:2},"camera.fps":{type:"slider",min:5,max:60,step:1}};function Pl(e){const t=[];for(const[r,n]of Object.entries(e||{})){if(Tl.has(r)||!n||typeof n!="object"||Array.isArray(n))continue;const i=Ml[r]||{},a=[];for(const[s,o]of Object.entries(n)){const l=`${r}.${s}`;if(Nl.has(l))continue;const c=Ol[l]||{};if(c.hidden||o!==null&&typeof o=="object")continue;const d=c.type||(typeof o=="boolean"?"toggle":typeof o=="number"?"number":"text");a.push({type:d,path:l,label:c.label||ls(s),min:c.min,max:c.max,step:c.step,options:c.options})}a.length&&t.push({id:r,title:i.title||ls(r),icon:i.icon||"⚙",controls:a})}return t.sort((r,n)=>{const i=os.indexOf(r.id),a=os.indexOf(n.id);return(i<0?999:i)-(a<0?999:a)}),t}var Rl=ge("<option> </option>"),Cl=ge("<select></select>"),Il=ge("<select><option> </option><option> </option></select>"),Ll=ge('<input type="range"/> <span class="xra-val"> </span>',1),zl=ge('<input type="checkbox"/>'),Dl=ge('<input type="color"/>'),Bl=ge('<input type="number"/>'),Vl=ge('<input type="text"/>'),Fl=ge('<label class="xra-row"><span class="xra-row-label"> </span> <!></label>');function Hl(e,t){qt(t,!0);const r=et(()=>typeof t.control.options=="function"?t.control.options():t.control.options||[]),n=f=>f===!1?"off":"auto",i=f=>f==="off"?!1:null;var a=Fl(),s=L(a),o=Y(s,!0),l=P(s,2);{var c=f=>{var g=Cl();Jt(g,21,()=>v(r),Fa,(x,M)=>{var S=Rl(),E=Y(S,!0),A={};_e(R=>{q(E,R),A!==(A=v(M)[0])&&(S.value=(S.__value=A)??"")},[()=>Z(v(M)[1])]),N(x,S)});var m;mr(g),_e(x=>{m!==(m=x)&&(g.value=(g.__value=m)??"",Bt(g,m))},[()=>Be(t.control.path)]),Q("change",g,x=>it(t.control.path,x.currentTarget.value)),N(f,g)},d=f=>{var g=Il(),m=L(g),x=Y(m,!0);m.value=m.__value="auto";var M=P(m),S=Y(M,!0);M.value=M.__value="off";var E;mr(g),_e((A,R,z)=>{q(x,A),q(S,R),E!==(E=z)&&(g.value=(g.__value=E)??"",Bt(g,E))},[()=>Z("Auto (follow tracking)"),()=>Z("Off"),()=>n(Be(t.control.path))]),Q("change",g,A=>it(t.control.path,i(A.currentTarget.value))),N(f,g)},h=f=>{var g=Ll(),m=G(g),x=P(m,2),M=Y(x,!0);_e((S,E)=>{ke(m,"min",t.control.min),ke(m,"max",t.control.max),ke(m,"step",t.control.step),Ln(m,S),q(M,E)},[()=>Be(t.control.path,t.control.min),()=>Be(t.control.path)]),Q("input",m,S=>it(t.control.path,Number(S.currentTarget.value))),N(f,g)},y=f=>{var g=zl();_e(m=>vl(g,m),[()=>!!Be(t.control.path)]),Q("change",g,m=>it(t.control.path,m.currentTarget.checked)),N(f,g)},_=f=>{var g=Dl();_e(m=>Ln(g,m),[()=>Be(t.control.path)]),Q("input",g,m=>it(t.control.path,m.currentTarget.value)),N(f,g)},p=f=>{var g=Bl();_e(m=>{ke(g,"step",t.control.step||"any"),Ln(g,m)},[()=>Be(t.control.path,0)]),Q("input",g,m=>it(t.control.path,Number(m.currentTarget.value))),N(f,g)},k=f=>{var g=Vl();_e(m=>Ln(g,m),[()=>Be(t.control.path,"")]),Q("change",g,m=>it(t.control.path,m.currentTarget.value)),N(f,g)};gt(l,f=>{t.control.type==="select"?f(c):t.control.type==="tristate"?f(d,1):t.control.type==="slider"?f(h,2):t.control.type==="toggle"?f(y,3):t.control.type==="color"?f(_,4):t.control.type==="number"?f(p,5):t.control.type==="text"&&f(k,6)})}_e(f=>q(o,f),[()=>Z(t.control.label)]),N(e,a),Kt()}_r(["change","input"]),vo();/**
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
 */const Ul={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
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
 */const Wl=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
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
 */const cs=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();var jl=Xo("<svg><!><!></svg>");function ue(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]),n=ae(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);qt(t,!1);let i=mt(t,"name",8,void 0),a=mt(t,"color",8,"currentColor"),s=mt(t,"size",8,24),o=mt(t,"strokeWidth",8,2),l=mt(t,"absoluteStrokeWidth",8,!1),c=mt(t,"iconNode",24,()=>[]);hl();var d=jl();Ja(d,(_,p,k)=>({...Ul,..._,...n,width:s(),height:s(),stroke:a(),"stroke-width":p,class:k}),[()=>Wl(n)?void 0:{"aria-hidden":"true"},()=>(pr(l()),pr(o()),pr(s()),Qt(()=>l()?Number(o())*24/Number(s()):o())),()=>(pr(cs),pr(i()),pr(r),Qt(()=>cs("lucide-icon","lucide",i()?`lucide-${i()}`:"",r.class)))]);var h=L(d);Jt(h,1,c,Fa,(_,p)=>{var k=et(()=>Xi(v(p),2));let f=()=>v(k)[0],g=()=>v(k)[1];var m=J(),x=G(m);il(x,f,!0,(M,S)=>{Ja(M,()=>({...g()}))}),N(_,m)});var y=P(h);se(y,t,"default",{}),N(e,d),Kt()}function Xl(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];ue(e,ce({name:"camera"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=G(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Gl(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 5H3"}],["path",{d:"M12 19H3"}],["path",{d:"M14 3v4"}],["path",{d:"M16 17v4"}],["path",{d:"M21 12h-9"}],["path",{d:"M21 19h-5"}],["path",{d:"M21 5h-7"}],["path",{d:"M8 10v4"}],["path",{d:"M8 12H3"}]];ue(e,ce({name:"sliders-horizontal"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=G(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Yl(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"5",r:"1"}],["path",{d:"m9 20 3-6 3 6"}],["path",{d:"m6 8 6 2 6-2"}],["path",{d:"M12 10v4"}]];ue(e,ce({name:"person-standing"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=G(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function ql(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];ue(e,ce({name:"zap"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=G(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Kl(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]];ue(e,ce({name:"activity"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=G(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Zl(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];ue(e,ce({name:"shield"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=G(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Ql(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 19v3"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3"}]];ue(e,ce({name:"mic"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=G(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Jl(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]];ue(e,ce({name:"image"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=G(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function ec(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 18v-7"}],["path",{d:"M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"}],["path",{d:"M14 18v-7"}],["path",{d:"M18 18v-7"}],["path",{d:"M3 22h18"}],["path",{d:"M6 18v-7"}]];ue(e,ce({name:"landmark"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=G(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function tc(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];ue(e,ce({name:"user"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=G(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function rc(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];ue(e,ce({name:"globe"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=G(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function nc(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]];ue(e,ce({name:"video"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=G(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function ic(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];ue(e,ce({name:"sparkles"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=G(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function ac(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 20v-9"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97"}],["path",{d:"M22 13h-4"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97"}],["path",{d:"M6 13H2"}],["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13"}]];ue(e,ce({name:"bug"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=G(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function sc(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]];ue(e,ce({name:"monitor"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=G(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function oc(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"10",r:"8"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 22h10"}],["path",{d:"M12 22v-4"}]];ue(e,ce({name:"webcam"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=G(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function us(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}]];ue(e,ce({name:"circle"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=G(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function lc(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];ue(e,ce({name:"square"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=G(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function cc(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]];ue(e,ce({name:"eye"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=G(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function uc(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}],["path",{d:"m2 2 20 20"}]];ue(e,ce({name:"eye-off"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=G(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function fc(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];ue(e,ce({name:"folder-open"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=G(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function dc(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];ue(e,ce({name:"info"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=G(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function vc(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ue(e,ce({name:"x"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=G(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function pc(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];ue(e,ce({name:"settings"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=G(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function hc(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ue(e,ce({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=J(),o=G(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function je(e,t){const r={Camera:Xl,SlidersHorizontal:Gl,PersonStanding:Yl,Zap:ql,Activity:Kl,Shield:Zl,Mic:Ql,Image:Jl,Landmark:ec,User:tc,Globe:rc,Video:nc,Sparkles:ic,Bug:ac,Monitor:sc,Webcam:oc,Circle:us,Square:lc,Eye:cc,EyeOff:uc,FolderOpen:fc,Info:dc,X:vc,Settings:pc,RefreshCw:hc};let n=mt(t,"name",3,"Circle"),i=mt(t,"size",3,16),a=mt(t,"strokeWidth",3,2),s=mt(t,"class",3,"");const o=et(()=>r[n()]??us);var l=J(),c=G(l);nl(c,()=>v(o),(d,h)=>{h(d,{get size(){return i()},get"stroke-width"(){return a()},get class(){return s()}})}),N(e,l)}var _c=ge('<div class="xra-sec-body"></div>'),gc=ge('<details class="xra-sec"><summary><span class="xra-sec-title"><!> <span> </span></span> <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></summary> <!></details>');function mc(e,t){qt(t,!0);const r="ui.sections_open";let n=H(Le(Qt(()=>{var f;return((f=Be(r,{}))==null?void 0:f[t.section.id])??!1}))),i;function a(){$(n,!v(n)),it(`${r}.${t.section.id}`,v(n))}Lr(()=>{ee.focusNonce,!(ee.focusSection!==t.section.id||!ee.panelOpen)&&($(n,!0),it(`${r}.${t.section.id}`,!0),requestAnimationFrame(()=>i==null?void 0:i.scrollIntoView({block:"nearest",behavior:"smooth"})))});var s=gc(),o=L(s),l=L(o),c=L(l);je(c,{get name(){return t.section.icon},size:15,class:"xra-sec-icon"});var d=P(c,2),h=Y(d,!0),y=P(l,2);let _;var p=P(o,2);{var k=f=>{var g=_c();Jt(g,21,()=>t.section.controls,m=>m.path,(m,x)=>{var M=J(),S=G(M);{var E=R=>{Hl(R,{get control(){return v(x)}})},A=et(()=>!v(x).when||v(x).when(We));gt(S,R=>{v(A)&&R(E)})}N(m,M)}),N(f,g)};gt(p,f=>{v(n)&&f(k)})}rs(s,f=>i=f,()=>i),_e(f=>{s.open=v(n),q(h,f),_=Re(y,0,"xra-sec-chevron",null,_,{open:v(n)})},[()=>Z(t.section.title)]),Q("click",o,f=>{f.preventDefault(),a()}),N(e,s),Kt()}_r(["click"]);var pn=ge('<option class="svelte-x8svx4"> </option>'),yc=ge('<div class="warn svelte-x8svx4"> </div>'),wc=ge('<div class="xra-startup svelte-x8svx4"><div class="card svelte-x8svx4"><div class="head svelte-x8svx4"><div class="svelte-x8svx4"><h2 class="svelte-x8svx4">XR Animator</h2> <div class="sub svelte-x8svx4"> </div></div></div> <div class="grid svelte-x8svx4"><label class="field svelte-x8svx4"><div class="sub svelte-x8svx4">Language</div> <select class="svelte-x8svx4"></select></label> <label class="field svelte-x8svx4"><div class="sub svelte-x8svx4">Master preset</div> <select class="svelte-x8svx4"></select></label></div> <div class="status svelte-x8svx4"> </div> <section class="camera svelte-x8svx4"><div class="camera-head svelte-x8svx4"><div class="camera-title svelte-x8svx4"> </div> <div> </div></div> <div class="camera-row svelte-x8svx4"><select class="svelte-x8svx4"><!></select> <button type="button" class="action svelte-x8svx4"><!></button></div> <!></section> <div class="sub bg svelte-x8svx4"> </div> <div class="avatar svelte-x8svx4"><div class="sub svelte-x8svx4"> </div> <button type="button" class="action svelte-x8svx4"> </button></div> <div class="foot svelte-x8svx4"><button type="button" class="action primary confirm svelte-x8svx4"> </button></div></div></div>');function bc(e,t){qt(t,!0);const r=()=>window.XRA,n=w=>Z(w),i=["AUTO","ECO","LOW","BALANCED","QUALITY","HIGH","MAX","CUSTOM"];function a(){var w,b,T;try{(T=(b=(w=r())==null?void 0:w.profileService)==null?void 0:b.save)==null||T.call(b,0)}catch{}}const s=(()=>{var b,T;const w=(T=(b=r())==null?void 0:b.i18n)==null?void 0:T.LANGUAGES;return Array.isArray(w)&&w.length?w:[["auto","Auto / System"],["en","English"],["it","Italiano"]]})();let o=H("auto"),l=H("CUSTOM"),c=H(""),d=H("default"),h=H(Le([])),y=H(!1),_=H(""),p=H(!1),k=H(""),f=H(""),g=H("Loading avatar…"),m=H(!0),x=H(!1),M=H(!1),S=H(!1),E=H(!1),A=0,R=[];async function z(w){const b=r();if(w=String(w||"CUSTOM").toUpperCase(),w==="CUSTOM"){b.config.performance.master_preset="CUSTOM",a(),$(c,"CUSTOM · ready");return}if(w==="AUTO"){$(c,"Benchmarking…");const T=await b.performance.benchmarkHardwareOnly();$(c,`AUTO → ${T.preset} (${T.fps.toFixed(1)} fps)`),await b.performance.applyPresetSafe(T.preset),b.config.performance.master_preset="AUTO",b.config.performance.auto_last_result=T,a();return}$(c,`${w}: applying…`),await b.performance.applyPresetSafe(w),$(c,`${w} · applied`)}function te(w=""){var F,j,re;const b=(F=r())==null?void 0:F.nativeBridge,T=((j=b==null?void 0:b.activeCamera)==null?void 0:j.call(b))||{},O=!!((re=b==null?void 0:b.cameraRunning)!=null&&re.call(b));$(p,O),$(k,w||(O?`${n("ON")} · ${T.label||n("Default camera")}`:n("OFF")),!0)}async function le(w=!1){var T,O,F;const b=(T=r())==null?void 0:T.nativeBridge;if(b!=null&&b.enumerateCameras){$(S,!0);try{const j=await b.enumerateCameras({requestPermission:w}),re=b.activeCamera()||{};$(h,(j||[]).map(Me=>({deviceId:Me.deviceId,label:Me.label})),!0);const he=re.deviceId||((O=We.devices)==null?void 0:O.camera_device_id)||"";$(_,v(h).some(Me=>Me.deviceId===he)?he:((F=v(h)[0])==null?void 0:F.deviceId)||"",!0),$(y,!0),te()}catch{$(y,!0),te(n("Camera unavailable"))}finally{$(S,!1)}}}async function Ve(w){var F,j;const b=(F=r())==null?void 0:F.nativeBridge,T=((j=w==null?void 0:w.currentTarget)==null?void 0:j.value)??v(_),O=v(h).find(re=>re.deviceId===T);if(O){$(S,!0);try{const re={deviceId:O.deviceId,label:O.label};b.cameraRunning()?await b.switchCamera(re):await b.setCameraPreference(re),te()}catch(re){te("Error · "+re.message)}finally{$(S,!1)}}}function Fe(){var T,O,F,j,re,he,Me,He;const w=(F=(O=(T=r())==null?void 0:T.xraBackend)==null?void 0:O.snapshot)==null?void 0:F.call(O),b=(w==null?void 0:w.capture)||((He=(Me=(he=(re=(j=window.SA_bridge)==null?void 0:j.backend)==null?void 0:re.status)==null?void 0:he.call(re))==null?void 0:Me.backend)==null?void 0:He.capture);if(b!=null&&b.camera_busy){const Ct=(b.busy_processes&&b.busy_processes.length?b.busy_processes:b.busy_process?[b.busy_process]:[]).filter($r=>!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(String($r).trim()));if(Ct.length)return{busy:!0,proc:Ct.join(", ")}}if(b!=null&&b.last_error&&b.last_error.includes("Webcam occupata")){const be=b.last_error.match(/Webcam occupata da:\s*([^.]+)/i),Ct=be?be[1].trim():"";if(!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(Ct))return{busy:!0,proc:b.last_error}}return{busy:!1,proc:""}}function ot(){var w,b,T,O,F,j,re,he,Me;if(typeof((b=(w=r())==null?void 0:w.nativeBridge)==null?void 0:b.isAvatarReady)=="function")return r().nativeBridge.isAvatarReady();if((T=window.MMD_SA)!=null&&T.MMD_started){const He=(j=(F=(O=window.MMD_SA)==null?void 0:O.THREEX)==null?void 0:F.get_model)==null?void 0:j.call(F,0);let be=He;if((He==null?void 0:He.type)==="MMD_dummy")try{be=He.model||null}catch{be=null}const Ct=((re=be==null?void 0:be.model)==null?void 0:re.scene)||(be==null?void 0:be.mesh)||(be==null?void 0:be.scene)||null;if(be&&!(He!=null&&He.loading)&&!be.loading&&!((Me=(he=window.MMD_SA)==null?void 0:he.THREEX)!=null&&Me._loading_model)&&Ct)return Ct.visible!==!1}return!1}function Pt(){var b,T,O;const w=(b=r())==null?void 0:b.xraBackend;return!w||!w.active?!0:!!((O=(T=w.snapshot)==null?void 0:T.call(w))!=null&&O.ready)}function Ae(){if(v(E)||!ee.startupOpen)return;const w=Fe();$(f,w.busy?`Webcam in use by another application (${w.proc}). Close it to start tracking.`:"",!0),ot()?Pt()?w.busy?($(m,!0),$(g,n("Camera busy…"),!0)):v(x)?$(m,!0):($(m,!1),$(g,"START")):($(m,!0),$(g,n("Connecting to backend…"),!0)):($(m,!0),$(g,n("Loading avatar…"),!0))}async function lt(w){var T,O,F;const b=((T=w==null?void 0:w.currentTarget)==null?void 0:T.value)??v(l);$(l,b,!0),$(M,!0);try{await z(b),r().events.emit("state",{path:"performance.master_preset",value:r().config.performance.master_preset}),El()}catch(j){console.error("[XRA START]",j),$(c,"Preset error: "+j.message)}finally{$(M,!1),(F=(O=r().ui)==null?void 0:O.refresh)==null||F.call(O)}}function bt(w){var b,T,O,F;$(o,((b=w==null?void 0:w.currentTarget)==null?void 0:b.value)??v(o),!0),(F=(O=(T=r())==null?void 0:T.i18n)==null?void 0:O.setLanguage)==null||F.call(O,v(o))}async function Ne(){var w,b;try{await((b=(w=r().nativeBridge)==null?void 0:w.openVrmPicker)==null?void 0:b.call(w))}catch(T){r().toast("VRM loader: "+T.message,"error",4500)}}async function Ut(w=!1){var T,O,F,j,re,he;if(v(E)||v(m))return;$(E,!0),A&&(clearInterval(A),A=0),$(x,!0),$(g,"Starting…");const b=r();if(a(),ee.startupOpen=!1,(O=(T=b.ui)==null?void 0:T.refresh)==null||O.call(T),w)try{typeof b.whenNativeReady=="function"&&await b.whenNativeReady(15e3),(F=b.xraBackend)!=null&&F.waitUntilReady&&await b.xraBackend.waitUntilReady(6e3).catch(()=>{}),await as()}catch(Me){(re=(j=globalThis.XRA_CAMERA_OWNERSHIP)==null?void 0:j.isOwnershipError)!=null&&re.call(j,Me)||(console.warn("[XRA START]","Auto-starting camera on START failed",Me),(he=b.toast)==null||he.call(b,"Starting camera: "+Me.message,"warn",5e3))}}Ni(()=>{var b,T,O,F,j,re,he,Me,He,be,Ct,$r,ws,bs,xs,Ss,ks,Xn,$s,Es,As,Ms;const w=r();$(c,n("Ready."),!0),$(o,((T=(b=w==null?void 0:w.config)==null?void 0:b.ui)==null?void 0:T.language)||"auto",!0),$(l,((F=(O=w==null?void 0:w.config)==null?void 0:O.performance)==null?void 0:F.master_preset)==="MINIMAL"?"ECO":((re=(j=w==null?void 0:w.config)==null?void 0:j.performance)==null?void 0:re.master_preset)||"CUSTOM",!0),$(d,((Me=(he=w==null?void 0:w.config)==null?void 0:he.background)==null?void 0:Me.path)||((be=(He=w==null?void 0:w.config)==null?void 0:He.background)==null?void 0:be.color)||"default",!0);try{const It=(ws=($r=(Ct=window.SA_bridge)==null?void 0:Ct.backend)==null?void 0:$r.status)==null?void 0:ws.call($r),Gn=(xs=(bs=window.System)==null?void 0:bs._browser)==null?void 0:xs.camera;(ks=(Ss=It==null?void 0:It.backend)==null?void 0:Ss.capture)!=null&&ks.running&&!(Gn!=null&&Gn.running)&&(($s=(Xn=window.SA_bridge.backend)==null?void 0:Xn.stop)==null||$s.call(Xn).catch(()=>{}))}catch{}te(),setTimeout(()=>le(!1),100),A=setInterval(Ae,300),window.addEventListener("MMDStarted",Ae),(Es=w.xraBackend)!=null&&Es.onStatus&&w.xraBackend.onStatus(Ae),Ae(),(Ms=(As=w.whenNativeReady)==null?void 0:As.call(w))==null||Ms.then(()=>{ee.startupOpen&&le(!1)});for(const It of["camera-started","camera-stopped","camera-switched"])R.push(w.events.on(It,()=>{ee.startupOpen&&le(!1)}));for(const It of["avatar-loading","avatar-changed","avatar-ready"])R.push(w.events.on(It,()=>Ae()));return()=>{A&&clearInterval(A),window.removeEventListener("MMDStarted",Ae);for(const It of R)try{It()}catch{}R=[]}});var xt=wc(),jr=L(xt),kr=L(jr),ve=L(kr),nr=P(L(ve),2),Rt=Y(nr,!0),Wt=P(kr,2),Xr=L(Wt),ct=P(L(Xr),2);Jt(ct,21,()=>s,([w,b])=>w,(w,b)=>{var T=et(()=>Xi(v(b),2));let O=()=>v(T)[0],F=()=>v(T)[1];var j=pn(),re=Y(j,!0),he={};_e(()=>{q(re,F()),he!==(he=O())&&(j.value=(j.__value=he)??"")}),N(w,j)});var ir;mr(ct);var V=P(Xr,2),B=P(L(V),2);Jt(B,20,()=>i,w=>w,(w,b)=>{var T=pn(),O=Y(T,!0),F={};_e(()=>{q(O,b),F!==(F=b)&&(T.value=(T.__value=F)??"")}),N(w,T)});var ne;mr(B);var me=P(Wt,2),Ke=Y(me,!0),ut=P(me,2),ft=L(ut),jt=L(ft),ar=Y(jt,!0),Wn=P(jt,2);let hs;var Pc=Y(Wn,!0),_s=P(ft,2),sr=L(_s),Rc=L(sr);{var Cc=w=>{var b=pn(),T=Y(b,!0);b.value=b.__value="",_e(O=>q(T,O),[()=>n("Loading cameras…")]),N(w,b)},Ic=w=>{var b=pn(),T=Y(b,!0);b.value=b.__value="",_e(O=>q(T,O),[()=>n("No cameras found")]),N(w,b)},Lc=w=>{var b=J(),T=G(b);Jt(T,17,()=>v(h),O=>O.deviceId,(O,F)=>{var j=pn(),re=Y(j,!0),he={};_e(()=>{q(re,v(F).label),he!==(he=v(F).deviceId)&&(j.value=(j.__value=he)??"")}),N(O,j)}),N(w,b)};gt(Rc,w=>{v(y)?v(h).length?w(Lc,-1):w(Ic,1):w(Cc)})}var jn;mr(sr);var wn=P(sr,2),zc=L(wn);je(zc,{name:"RefreshCw",size:14});var Dc=P(_s,2);{var Bc=w=>{var b=yc(),T=Y(b,!0);_e(()=>q(T,v(f))),N(w,b)};gt(Dc,w=>{v(f)&&w(Bc)})}var gs=P(ut,2),Vc=Y(gs),ms=P(gs,2),ys=L(ms),Fc=Y(ys,!0),Pi=P(ys,2),Hc=Y(Pi,!0),Uc=P(ms,2),Ri=L(Uc),Wc=Y(Ri,!0);_e((w,b,T,O,F,j)=>{q(Rt,w),ct.disabled=v(E),ir!==(ir=v(o))&&(ct.value=(ct.__value=ir)??"",Bt(ct,ir)),B.disabled=v(M)||v(E),ne!==(ne=v(l))&&(B.value=(B.__value=ne)??"",Bt(B,ne)),q(Ke,v(c)),q(ar,b),hs=Re(Wn,1,"camera-state svelte-x8svx4",null,hs,{on:v(p)}),q(Pc,v(k)),sr.disabled=v(S),jn!==(jn=v(_))&&(sr.value=(sr.__value=jn)??"",Bt(sr,jn)),ke(wn,"title",T),ke(wn,"aria-label",O),wn.disabled=v(S),q(Vc,`Background: ${v(d)??""}`),q(Fc,F),Pi.disabled=v(E),q(Hc,j),Ri.disabled=v(m)||v(x),q(Wc,v(g))},[()=>n("Quick setup · changes apply immediately."),()=>n("Webcam"),()=>n("Refresh cameras"),()=>n("Refresh cameras"),()=>n("Avatar: the last VRM you chose is copied into avatars/ and restored at startup."),()=>n("Load / change VRM…")]),Q("change",ct,bt),Q("change",B,lt),Q("change",sr,Ve),Q("click",wn,()=>le(!0)),Q("click",Pi,Ne),Q("click",Ri,()=>Ut(!0)),N(e,xt),Kt()}_r(["change","click"]);var xc=ge('<button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button>'),Sc=ge('<nav class="xra-dock group fixed left-2 top-1/2 z-[99990] flex w-[46px] max-h-[92vh] -translate-y-1/2 flex-col gap-0.5 overflow-hidden rounded-xl border border-white/10 bg-[var(--xra-ui-bg)] p-1.5 font-sans text-[12.5px] leading-snug text-[var(--xra-ui-fg)] shadow-[0_12px_40px_rgba(0,0,0,.55)] transition-[width] duration-200 hover:w-[232px]"><!> <div class="my-1 h-px bg-white/10"></div> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button></nav>');function kc(e,t){qt(t,!0);const r=()=>window.XRA;let n=H(!1),i=H(!1),a=H(!1),s=0;function o(){var B,ne,me,Ke,ut,ft,jt;const V=r();if(V){try{$(n,!!((ne=(B=V.nativeBridge)==null?void 0:B.cameraRunning)!=null&&ne.call(B)))}catch{}try{$(i,!!((ut=(Ke=(me=V.recorder)==null?void 0:me.status)==null?void 0:Ke.call(me))!=null&&ut.active))}catch{}try{$(a,!!((jt=(ft=V.nativeBridge)==null?void 0:ft.getPreviewVisibility)!=null&&jt.call(ft,"video")))}catch{}}}let l=H(!1),c=H("");async function d(){var B,ne,me,Ke;if(v(l))return;$(l,!0);const V=!v(n);$(c,V?"Starting…":"Stopping…",!0);try{V?(await as(),$(n,!0)):(await Sl(),$(n,!1))}catch(ut){try{await((ne=(B=r().nativeBridge)==null?void 0:B.forceStopCamera)==null?void 0:ne.call(B))}catch{}$(n,!1),(Ke=(me=r()).toast)==null||Ke.call(me,"Tracking: "+ut.message,"warn",4500)}finally{$(l,!1),$(c,""),setTimeout(o,250)}}let h=H(!1),y=H("");async function _(){var B,ne;if(v(h))return;$(h,!0);const V=!v(i);$(y,V?"Starting…":"Stopping…",!0);try{V?(await kl(),$(i,!0)):(await $l(),$(i,!1))}catch(me){$(i,!1),(ne=(B=r()).toast)==null||ne.call(B,"Recording: "+me.message,"warn",4500)}finally{$(h,!1),$(y,""),setTimeout(o,250)}}function p(){var B,ne;const V=!v(a);try{(ne=(B=r().nativeBridge)==null?void 0:B.setPreviewVisibility)==null||ne.call(B,"video",V)}catch{}$(a,V)}async function k(){var V,B,ne,me;try{await((B=(V=r().nativeBridge)==null?void 0:V.openVrmPicker)==null?void 0:B.call(V))}catch(Ke){(me=(ne=r()).toast)==null||me.call(ne,"VRM loader: "+Ke.message,"error",4500)}}function f(){var V,B;try{(B=(V=r().nativeBridge)==null?void 0:V.showAbout)==null||B.call(V)}catch{}}const g=[{id:"ui",icon:"Monitor",label:"UI Settings"},{id:"camera",icon:"Camera",label:"Webcam settings"},{id:"avatar",icon:"User",label:"Model settings"},{id:"second_avatar",icon:"Globe",label:"Studio link"},{id:"stage",icon:"Landmark",label:"Environment + Camera"},{id:"background",icon:"Image",label:"Background"},{id:"lip",icon:"Mic",label:"Audio"}],m="hover:bg-white/10",x="flex-1 overflow-hidden opacity-0 transition-opacity duration-150 group-hover:opacity-100";Ni(()=>(o(),s=setInterval(o,1e3),()=>clearInterval(s)));var M=Sc(),S=L(M);Jt(S,17,()=>g,V=>V.id,(V,B)=>{var ne=xc();Re(ne,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var me=L(ne),Ke=L(me);je(Ke,{get name(){return v(B).icon},size:16});var ut=P(me,2);Re(ut,1,gr(x));var ft=Y(ut,!0);_e((jt,ar)=>{ke(ne,"title",jt),q(ft,ar)},[()=>Z(v(B).label),()=>Z(v(B).label)]),Q("click",ne,()=>bl(v(B).id)),N(V,ne)});var E=P(S,4),A=L(E),R=L(A);{let V=et(()=>v(n)?"text-emerald-400":"");je(R,{name:"Webcam",size:16,get class(){return v(V)}})}var z=P(A,2);Re(z,1,gr(x));var te=Y(z,!0),le=P(E,2),Ve=L(le),Fe=L(Ve);{let V=et(()=>v(h)?"Circle":v(i)?"Square":"Circle"),B=et(()=>v(i)?"text-red-400":"");je(Fe,{get name(){return v(V)},size:16,get class(){return v(B)}})}var ot=P(Ve,2);Re(ot,1,gr(x));var Pt=Y(ot,!0),Ae=P(le,2),lt=L(Ae),bt=L(lt);{let V=et(()=>v(a)?"Eye":"EyeOff");je(bt,{get name(){return v(V)},size:16})}var Ne=P(lt,2);Re(Ne,1,gr(x));var Ut=Y(Ne,!0),xt=P(Ae,2);Re(xt,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var jr=L(xt),kr=L(jr);je(kr,{name:"FolderOpen",size:16});var ve=P(jr,2);Re(ve,1,gr(x));var nr=Y(ve,!0),Rt=P(xt,2);Re(Rt,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var Wt=L(Rt),Xr=L(Wt);je(Xr,{name:"Info",size:16});var ct=P(Wt,2);Re(ct,1,gr(x));var ir=Y(ct,!0);_e((V,B,ne,me,Ke,ut,ft,jt,ar,Wn)=>{Re(E,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${v(n)?"bg-emerald-500/20 hover:bg-emerald-500/30":m} ${v(l)?"opacity-60":""}`),ke(E,"title",V),E.disabled=v(l),q(te,B),Re(le,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${v(i)?"bg-red-500/30 hover:bg-red-500/40 text-red-200":m} ${v(h)?"opacity-60":""}`),ke(le,"title",ne),le.disabled=v(h),q(Pt,me),Re(Ae,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${v(a)?"bg-emerald-500/20 hover:bg-emerald-500/30":m}`),ke(Ae,"title",Ke),q(Ut,ut),ke(xt,"title",ft),q(nr,jt),ke(Rt,"title",ar),q(ir,Wn)},[()=>Z("Tracking"),()=>v(l)?Z(v(c)):v(n)?Z("Tracking on"):Z("Tracking off"),()=>Z("Record"),()=>v(h)?Z(v(y)):v(i)?Z("Stop recording"):Z("Record"),()=>Z("Preview"),()=>v(a)?Z("Hide preview"):Z("Show preview"),()=>Z("Load / change VRM…"),()=>Z("Load / change VRM…"),()=>Z("About"),()=>Z("About")]),Q("click",E,d),Q("click",le,_),Q("click",Ae,p),Q("click",xt,k),Q("click",Rt,f),N(e,M),Kt()}_r(["click"]);var $c=ge('<div class="absolute inset-0 z-30 grid place-items-center bg-black text-[12px] text-[var(--xra-ui-fg)]"> </div>'),Ec=ge('<div class="xra-mocap-window fixed z-[99991] flex flex-col overflow-hidden rounded-xl border border-white/15 bg-[var(--xra-ui-bg)] text-[var(--xra-ui-fg)] shadow-[0_16px_48px_rgba(0,0,0,.6)] font-sans"><header class="flex shrink-0 cursor-move touch-none select-none items-center gap-2 px-2 py-1.5"><!> <span class="flex-1 text-[12px] font-semibold"> </span> <select class="rounded-md border border-white/15 bg-[#101214] px-1.5 py-0.5 text-[11px] text-[var(--xra-ui-fg)]"><option> </option><option> </option><option> </option><option> </option></select> <button type="button" class="rounded-md border border-white/15 bg-white/5 px-1.5 py-0.5 cursor-pointer text-[var(--xra-ui-fg)]"><!></button></header> <div class="relative min-h-0 flex-1 overflow-hidden bg-black"><!> <div class="absolute bottom-0 right-0 z-20 h-5 w-5 cursor-nwse-resize touch-none"></div></div></div>');function Ac(e,t){qt(t,!0);const r=()=>window.XRA,n=Be("ui.mocap_window",{})||{};let i=H(Le(Number.isFinite(n.x)?n.x:48)),a=H(Le(Number.isFinite(n.y)?n.y:96)),s=H(Le(Number.isFinite(n.w)?n.w:360)),o=H(Le(Number.isFinite(n.h)?n.h:270)),l=H(void 0),c=H(!1),d=0;const h=et(()=>Be("ui.mocap_visibility","always")!=="auto"||v(c));function y(){it("ui.mocap_window",{x:Math.round(v(i)),y:Math.round(v(a)),w:Math.round(v(s)),h:Math.round(v(o))})}function _(){var m,x,M;try{(M=(x=(m=r())==null?void 0:m.nativeBridge)==null?void 0:x.updateMocapWindow)==null||M.call(x)}catch{}}function p(m,x){m.preventDefault();const M=m.clientX,S=m.clientY,E=v(i),A=v(a),R=v(s),z=v(o),te=Ve=>{const Fe=Ve.clientX-M,ot=Ve.clientY-S;x==="move"?($(i,Math.max(0,Math.min(window.innerWidth-80,E+Fe)),!0),$(a,Math.max(0,Math.min(window.innerHeight-30,A+ot)),!0)):($(s,Math.max(200,Math.min(window.innerWidth-v(i),R+Fe)),!0),$(o,Math.max(130,Math.min(window.innerHeight-v(a),z+ot)),!0))},le=()=>{window.removeEventListener("pointermove",te),window.removeEventListener("pointerup",le),y()};window.addEventListener("pointermove",te),window.addEventListener("pointerup",le)}Lr(()=>{var x,M,S;const m=v(l);if(m){try{(S=(M=(x=r())==null?void 0:x.nativeBridge)==null?void 0:M.attachMocapWindow)==null||S.call(M,m)}catch{}return()=>{var E,A,R;try{(R=(A=(E=r())==null?void 0:E.nativeBridge)==null?void 0:A.detachMocapWindow)==null||R.call(A)}catch{}}}}),Lr(()=>{v(i),v(a),v(s),v(o),v(c),_()}),Ni(()=>{const m=()=>{var x,M,S;$(c,!!((S=(M=(x=r())==null?void 0:x.nativeBridge)==null?void 0:M.cameraRunning)!=null&&S.call(M)))};return m(),d=setInterval(m,500),window.addEventListener("resize",_),()=>{clearInterval(d),window.removeEventListener("resize",_)}});var k=J(),f=G(k);{var g=m=>{var x=Ec(),M=L(x),S=L(M);je(S,{name:"Activity",size:14});var E=P(S,2),A=Y(E,!0),R=P(E,2),z=L(R),te=Y(z,!0);z.value=z.__value="both";var le=P(z),Ve=Y(le,!0);le.value=le.__value="wireframe";var Fe=P(le),ot=Y(Fe,!0);Fe.value=Fe.__value="video";var Pt=P(Fe),Ae=Y(Pt,!0);Pt.value=Pt.__value="off";var lt;mr(R);var bt=P(R,2),Ne=L(bt);je(Ne,{name:"X",size:13});var Ut=P(M,2),xt=L(Ut);{var jr=ve=>{var nr=$c(),Rt=Y(nr,!0);_e(Wt=>q(Rt,Wt),[()=>Z("Tracking is off")]),N(ve,nr)};gt(xt,ve=>{v(c)||ve(jr)})}var kr=P(xt,2);rs(Ut,ve=>$(l,ve),()=>v(l)),_e((ve,nr,Rt,Wt,Xr,ct,ir,V)=>{Xa(x,`left:${v(i)??""}px; top:${v(a)??""}px; width:${v(s)??""}px; height:${v(o)??""}px;`),q(A,ve),q(te,nr),q(Ve,Rt),q(ot,Wt),q(Ae,Xr),lt!==(lt=ct)&&(R.value=(R.__value=lt)??"",Bt(R,lt)),ke(bt,"title",ir),ke(kr,"title",V)},[()=>Z("Mocap"),()=>Z("Webcam + skeleton"),()=>Z("Skeleton only"),()=>Z("Webcam only"),()=>Z("Off"),()=>Be("ui.mocap_view","off"),()=>Z("Close"),()=>Z("Resize")]),Q("pointerdown",M,ve=>p(ve,"move")),Q("change",R,ve=>it("ui.mocap_view",ve.currentTarget.value)),Q("pointerdown",R,ve=>ve.stopPropagation()),Q("click",bt,()=>it("ui.mocap_view","off")),Q("pointerdown",bt,ve=>ve.stopPropagation()),Q("pointerdown",kr,ve=>{ve.stopPropagation(),p(ve,"resize")}),N(m,x)};gt(f,m=>{v(h)&&m(g)})}N(e,k),Kt()}_r(["pointerdown","change","click"]);var Mc=ge('<aside class="xra-panel"><header class="xra-panel-head"><strong>XR Animator</strong> <span class="xra-spacer"></span> <button><!></button> <button title="Close panel"><!></button></header> <div class="xra-panel-body"></div></aside>'),Tc=ge('<button class="xra-panel-launcher"><!></button>'),Nc=ge("<!> <!> <!> <!>",1);function Oc(e,t){qt(t,!0),Al();const r=et(()=>Pl(We));var n=Nc(),i=G(n);{var a=p=>{bc(p,{})};gt(i,p=>{ee.ready&&ee.startupOpen&&p(a)})}var s=P(i,2);{var o=p=>{kc(p,{})};gt(s,p=>{ee.ready&&!ee.startupOpen&&p(o)})}var l=P(s,2);{var c=p=>{Ac(p,{})},d=et(()=>ee.ready&&!ee.startupOpen&&Be("ui.mocap_view","off")!=="off");gt(l,p=>{v(d)&&p(c)})}var h=P(l,2);{var y=p=>{var E,A,R;var k=Mc(),f=L(k),g=P(L(f),4);ke(g,"title",((R=(A=(E=window.XRA)==null?void 0:E.i18n)==null?void 0:A.t)==null?void 0:R.call(A,"Clean screen mode (Press Esc to restore)"))||"Clean screen (Esc)");var m=L(g);je(m,{name:"EyeOff",size:15});var x=P(g,2),M=L(x);je(M,{name:"X",size:15});var S=P(f,2);Jt(S,21,()=>v(r),z=>z.id,(z,te)=>{mc(z,{get section(){return v(te)}})}),Q("click",g,function(...z){Vn==null||Vn.apply(this,z)}),Q("click",x,()=>ee.panelOpen=!1),N(p,k)},_=p=>{var k=Tc(),f=L(k);je(f,{name:"Settings",size:16}),Q("click",k,()=>{ee.panelOpen=!0,ss()}),N(p,k)};gt(h,p=>{ee.ready&&!ee.startupOpen&&ee.panelOpen?p(y):ee.ready&&!ee.startupOpen&&p(_,1)})}N(e,n),Kt()}_r(["click"]),window.XRA_SVELTE_UI=!0;function fs(){let e=document.getElementById("XRA_SVELTE");e||(e=document.createElement("div"),e.id="XRA_SVELTE",document.body.appendChild(e)),Zo(Oc,{target:e})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",fs):fs()})();

})();
