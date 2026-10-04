(function(){
var Kc=Object.defineProperty;var Co=ge=>{throw TypeError(ge)};var Zc=(ge,ce,Ae)=>ce in ge?Kc(ge,ce,{enumerable:!0,configurable:!0,writable:!0,value:Ae}):ge[ce]=Ae;var it=(ge,ce,Ae)=>Zc(ge,typeof ce!="symbol"?ce+"":ce,Ae),Di=(ge,ce,Ae)=>ce.has(ge)||Co("Cannot "+Ae);var u=(ge,ce,Ae)=>(Di(ge,ce,"read from private field"),Ae?Ae.call(ge):ce.get(ge)),F=(ge,ce,Ae)=>ce.has(ge)?Co("Cannot add the same private member more than once"):ce instanceof WeakSet?ce.add(ge):ce.set(ge,Ae),B=(ge,ce,Ae,rr)=>(Di(ge,ce,"write to private field"),rr?rr.call(ge,Ae):ce.set(ge,Ae),Ae),G=(ge,ce,Ae)=>(Di(ge,ce,"access private method"),Ae);(function(){"use strict";var go,Or,Zt,dr,Pr,Rr,Lr,Vt,Ir,Je,dn,Ft,xt,Pt,zr,vr,ne,Bi,Vi,xn,Fi,Oo,Po,Hr,Qc,kn,mo,ft,Ri,dt,pr,Ue,et,je,tt,Rt,hr,Qt,Dr,vn,pn,Ht,Xn,pe,Jc,eu,Hi,tu,Ui,Sn,Qn,ji,Wi,kt,Lt,rt,_r,hn,_n,Gn,yo;var ce=Array.isArray,Ae=Array.prototype.indexOf,rr=Array.prototype.includes,En=Array.from,Xi=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,Gi=Object.getOwnPropertyDescriptors,Ro=Object.prototype,Lo=Array.prototype,Jn=Object.getPrototypeOf,qi=Object.isExtensible;function Ur(e){return typeof e=="function"}const Io=()=>{};function zo(e){return e()}function ei(e){for(var t=0;t<e.length;t++)e[t]()}function Yi(){var e,t,r=new Promise((n,i)=>{e=n,t=i});return{promise:r,resolve:e,reject:t}}function Ki(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const Le=2,wr=4,jr=8,ti=1<<24,ht=16,at=32,It=64,ri=128,ni=256,_t=512,Me=1024,Se=2048,ot=4096,Ve=8192,Fe=16384,br=32768,$n=1<<25,jt=65536,An=1<<17,Do=1<<18,xr=1<<19,Zi=1<<20,$t=1<<25,Mn=1<<21,kr=1<<22,Wt=1<<23,At=Symbol("$state"),Qi=Symbol("component"),Ji=Symbol("legacy props"),Bo=Symbol(""),Tn=Symbol("attributes"),ii=Symbol("class"),ai=Symbol("style"),Wr=Symbol("text"),Xr=new class extends Error{constructor(){super(...arguments);it(this,"name","StaleReactionError");it(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},Nn=!!((go=globalThis.document)!=null&&go.contentType)&&globalThis.document.contentType.includes("xml"),Vo=1,Fo=2,ea=4,Ho=8,Uo=16,jo=1,Wo=2,ta=4,Xo=8,Go=16,qo=1,Yo=2,Ee=Symbol("uninitialized"),ra="http://www.w3.org/1999/xhtml",Ko="http://www.w3.org/2000/svg",Zo="@attach";function Qo(){console.warn("https://svelte.dev/e/derived_inert")}function Jo(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function es(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function na(e){return e===this.v}function ts(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function ia(e){return!ts(e,this.v)}function rs(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function ns(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function is(e,t,r){throw new Error("https://svelte.dev/e/each_key_duplicate")}function as(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function os(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ss(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ls(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function cs(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function us(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function fs(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ds(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function vs(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Sr=!1,ru=!1;function ps(){Sr=!0}let me=null;function Er(e){me=e}function gt(e,t=!1,r){me={p:me,i:!1,c:null,e:null,s:e,x:null,r:W,l:Sr&&!t?{s:null,u:null,$:[]}:null}}function mt(e){var t=me,r=t.e;if(r!==null){t.e=null;for(var n of r)$a(n)}return t.i=!0,me=t.p,oi(e)}function oi(e={}){return Xi(e,Qi,{value:!0}),e}function Gr(){return!Sr||me!==null&&me.l===null}let $r=[];function hs(){var e=$r;$r=[],ei(e)}function Mt(e){if($r.length===0){var t=$r;queueMicrotask(()=>{t===$r&&hs()})}$r.push(e)}const _s=-7169;function be(e,t){e.f=e.f&_s|t}function si(e){(e.f&_t)!==0||e.deps===null?be(e,Me):be(e,ot)}function aa(e,t,r){(e.f&Se)!==0?t.add(e):(e.f&ot)!==0&&r.add(e),be(e,Me)}function gs(e,t){if(t){const r=document.body;e.autofocus=!0,Mt(()=>{document.activeElement===r&&e.focus()})}}function qr(e){var t=j,r=W;st(null),lt(null);try{return e()}finally{st(t),lt(r)}}function oa(e,t,r,n){const i=Gr()?Ar:li;var a=e.filter(h=>!h.settled),o=t.map(i);if(r.length===0&&a.length===0){n(o);return}var s=W,l=ms(),c=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(h=>h.promise)):null;function d(h){if((s.f&Fe)===0){l();try{n([...o,...h])}catch(g){Nt(g,s)}Cn()}}var v=sa();if(r.length===0){c.then(()=>d([])).finally(v);return}function m(){Promise.all(r.map(h=>ys(h))).then(d).catch(h=>Nt(h,s)).finally(v)}c?c.then(()=>{l(),m(),Cn()}):m()}function ms(){var e=W,t=j,r=me,n=D;return function(a=!0){lt(e),st(t),Er(r),a&&(e.f&Fe)===0&&(n==null||n.activate(),n==null||n.apply())}}function Cn(e=!0){lt(null),st(null),Er(null),e&&(D==null||D.deactivate())}function sa(){var e=W,t=e.b,r=D,n=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,r),r.increment(n,e),()=>{t==null||t.update_pending_count(-1,r),r.decrement(n,e)}}function Ar(e){var t=Le|Se;return W!==null&&(W.f|=xr),{ctx:me,deps:null,effects:null,equals:na,f:t,fn:e,reactions:null,rv:0,v:Ee,wv:0,parent:W,ac:null}}const Yr=Symbol("obsolete");function ys(e,t,r){let n=W;n===null&&ns();var i=void 0,a=Xt(Ee),o=!j,s=new Set;return Os(()=>{var h,g;var l=W,c=Yi();i=c.promise;try{Promise.resolve(e()).then(c.resolve,E=>{E!==Xr&&c.reject(E)}).finally(Cn)}catch(E){c.reject(E),Cn()}var d=D;if(o){if((l.f&br)!==0)var v=sa();if((h=n.b)!=null&&h.is_rendered())(g=d.async_deriveds.get(l))==null||g.reject(Yr);else for(const E of s.values())E.reject(Yr);s.add(c),d.async_deriveds.set(l,c)}const m=(E,p=void 0)=>{v==null||v(),s.delete(c),p!==Yr&&(d.activate(),p?(a.f|=Wt,Tr(a,p)):((a.f&Wt)!==0&&(a.f^=Wt),Tr(a,E)),d.deactivate())};c.promise.then(m,E=>m(null,E||"unknown"))}),Rn(()=>{for(const l of s)l.reject(Yr)}),new Promise(l=>{function c(d){function v(){d===i?l(a):c(i)}d.then(v,v)}c(i)})}function Ie(e){const t=Ar(e);return Ra(t),t}function li(e){const t=Ar(e);return t.equals=ia,t}function ws(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)Oe(t[r])}}function ci(e){var t,r=W,n=e.parent;if(!Dt&&n!==null&&e.v!==Ee&&(n.f&(Fe|Ve))!==0)return Qo(),e.v;lt(n);try{ws(e),t=Ba(e)}finally{lt(r)}return t}function la(e){var t=ci(e);if(!e.equals(t)&&(e.wv=za(),(!(D!=null&&D.is_fork)||e.deps===null)&&(D!==null?(D.capture(e,t,!0),Kr==null||Kr.capture(e,t,!0)):e.v=t,e.deps===null))){be(e,Me);return}Dt||(Ce!==null?(gi()||D!=null&&D.is_fork)&&Ce.set(e,t):si(e))}function bs(e){var t;if(e.effects!==null)for(const r of e.effects)(r.teardown||r.ac)&&((t=r.teardown)==null||t.call(r),r.ac!==null&&qr(()=>{r.ac.abort(Xr),r.ac=null}),r.fn!==null&&(r.teardown=Io),rn(r,0),yi(r))}function ca(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&Nr(t)}let ui=null,Mr=null,D=null,Kr=null,Ce=null,fi=null,di=!1,Zr=null,On=null;var ua=0,nu=new Set;let xs=1;const Wn=class Wn{constructor(){F(this,ne);it(this,"id",xs++);F(this,Or,!1);it(this,"linked",!0);F(this,Zt,null);F(this,dr,null);it(this,"async_deriveds",new Map);it(this,"current",new Map);it(this,"previous",new Map);F(this,Pr,new Set);F(this,Rr,new Set);F(this,Lr,0);F(this,Vt,new Map);F(this,Ir,null);F(this,Je,[]);F(this,dn,[]);F(this,Ft,new Set);F(this,xt,new Set);F(this,Pt,new Map);F(this,zr,new Set);it(this,"is_fork",!1);F(this,vr,!1);Mr===null?ui=Mr=this:(B(Mr,dr,this),B(this,Zt,Mr)),Mr=this}skip_effect(t){u(this,Pt).has(t)||u(this,Pt).set(t,{d:[],m:[]}),u(this,zr).delete(t)}unskip_effect(t,r=n=>this.schedule(n)){var n=u(this,Pt).get(t);if(n){u(this,Pt).delete(t);for(var i of n.d)be(i,Se),r(i);for(i of n.m)be(i,ot),r(i)}u(this,zr).add(t)}capture(t,r,n=!1){t.v!==Ee&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&Wt)===0&&(this.current.set(t,[r,n]),Ce==null||Ce.set(t,r)),this.is_fork||(t.v=r)}activate(){D=this}deactivate(){D=null,Ce=null}flush(){try{di=!0,D=this,G(this,ne,xn).call(this)}finally{ua=0,fi=null,Zr=null,On=null,di=!1,D=null,Ce=null,Tt.clear()}}discard(){var t;for(const r of u(this,Rr))r(this);u(this,Rr).clear();for(const r of this.async_deriveds.values())r.reject(Yr);G(this,ne,kn).call(this),(t=u(this,Ir))==null||t.resolve()}register_created_effect(t){u(this,dn).push(t)}increment(t,r){if(B(this,Lr,u(this,Lr)+1),t){let n=u(this,Vt).get(r)??0;u(this,Vt).set(r,n+1)}}decrement(t,r){if(B(this,Lr,u(this,Lr)-1),t){let n=u(this,Vt).get(r)??0;n===1?u(this,Vt).delete(r):u(this,Vt).set(r,n-1)}u(this,vr)||(B(this,vr,!0),Mt(()=>{B(this,vr,!1),this.linked&&this.flush()}))}transfer_effects(t,r){for(const n of t)u(this,Ft).add(n);for(const n of r)u(this,xt).add(n);t.clear(),r.clear()}oncommit(t){u(this,Pr).add(t)}ondiscard(t){u(this,Rr).add(t)}settled(){return(u(this,Ir)??B(this,Ir,Yi())).promise}static ensure(){if(D===null){const t=D=new Wn;di||Mt(()=>{u(t,Or)||t.flush()})}return D}apply(){{Ce=null;return}}schedule(t){var r;if(fi=t,(r=t.b)!=null&&r.is_pending&&(t.f&(wr|jr|ti))!==0&&(t.f&br)===0){t.b.defer_effect(t);return}u(this,Je).push(t)}};Or=new WeakMap,Zt=new WeakMap,dr=new WeakMap,Pr=new WeakMap,Rr=new WeakMap,Lr=new WeakMap,Vt=new WeakMap,Ir=new WeakMap,Je=new WeakMap,dn=new WeakMap,Ft=new WeakMap,xt=new WeakMap,Pt=new WeakMap,zr=new WeakMap,vr=new WeakMap,ne=new WeakSet,Bi=function(){if(this.is_fork)return!0;for(const n of u(this,Vt).keys()){for(var t=n,r=!1;t.parent!==null;){if(u(this,Pt).has(t)){r=!0;break}t=t.parent}if(!r)return!0}return!1},Vi=function(){var t=[];for(const a of u(this,Je))if(!((a.f&Fe)!==0||(a.f&(Se|ot))===0)){for(var r=a,n=!1;r.parent!==null;){r=r.parent;var i=r.f;if((i&(It|at))!==0){if((i&Me)===0){n=!0;break}r.f^=Me}}n||t.push(r)}return B(this,Je,[]),t},xn=function(){var s,l,c,d;B(this,Or,!0);for(const v of u(this,Ft))u(this,xt).delete(v),be(v,Se),this.schedule(v);for(const v of u(this,xt))be(v,ot),this.schedule(v);this.apply();for(var t=Zr=[],r=[],n=On=[];u(this,Je).length>0;){ua++>1e3&&(G(this,ne,kn).call(this),ks());for(const v of G(this,ne,Vi).call(this))try{G(this,ne,Fi).call(this,v,t,r)}catch(m){throw pa(v),G(this,ne,Bi).call(this)||this.discard(),m}}if(D=null,n.length>0){var i=Wn.ensure();for(const v of n)i.schedule(v)}if(Zr=null,On=null,G(this,ne,Bi).call(this)){G(this,ne,Hr).call(this,r),G(this,ne,Hr).call(this,t);for(const[v,m]of u(this,Pt))va(v,m);n.length>0&&G(s=D,ne,xn).call(s);return}const a=G(this,ne,Oo).call(this);if(a){G(this,ne,Hr).call(this,r),G(this,ne,Hr).call(this,t),G(l=a,ne,Po).call(l,this);return}u(this,Ft).clear(),u(this,xt).clear();for(const v of u(this,Pr))v(this);u(this,Pr).clear(),Kr=this,fa(r),fa(t),Kr=null,(c=u(this,Ir))==null||c.resolve();var o=D;if(u(this,Lr)===0&&(u(this,Je).length===0||o!==null)&&G(this,ne,kn).call(this),u(this,Je).length>0)if(o!==null){for(const v of u(this,Je))u(o,Je).push(v);B(this,Je,[])}else o=this;o!==null&&(Tt.clear(),G(d=o,ne,xn).call(d))},Fi=function(t,r,n){t.f^=Me;for(var i=t.first;i!==null;){var a=i.f,o=(a&(at|It))!==0,s=o&&(a&Me)!==0,l=s||(a&Ve)!==0||u(this,Pt).has(i);if(!l&&i.fn!==null){o?i.f^=Me:(a&wr)!==0?r.push(i):tn(i)&&((a&ht)!==0&&u(this,xt).add(i),Nr(i));var c=i.first;if(c!==null){i=c;continue}}for(;i!==null;){var d=i.next;if(d!==null){i=d;break}i=i.parent}}},Oo=function(){for(var t=u(this,Zt);t!==null;){if(!t.is_fork){for(const[r,[,n]]of this.current)if(t.current.has(r)&&!n)return t}t=u(t,Zt)}return null},Po=function(t){var n;for(const[i,a]of t.current)!this.previous.has(i)&&t.previous.has(i)&&this.previous.set(i,t.previous.get(i)),this.current.set(i,a);for(const[i,a]of t.async_deriveds){const o=this.async_deriveds.get(i);o&&a.promise.then(o.resolve).catch(o.reject)}t.async_deriveds.clear(),this.transfer_effects(u(t,Ft),u(t,xt));const r=i=>{var a=i.reactions;if(a!==null&&!((i.f&Le)!==0&&(i.f&(Se|ot))===0))for(const l of a){var o=l.f;if((o&Le)!==0)r(l);else{var s=l;o&(kr|ht)&&!this.async_deriveds.has(s)&&(u(this,xt).delete(s),be(s,Se),this.schedule(s))}}};for(const i of this.current.keys())r(i);this.oncommit(()=>t.discard()),G(n=t,ne,kn).call(n),D=this,G(this,ne,xn).call(this)},Hr=function(t){for(var r=0;r<t.length;r+=1)aa(t[r],u(this,Ft),u(this,xt))},Qc=function(){var v,m;for(let h=ui;h!==null;h=u(h,dr)){var t=h.id<this.id,r=[];for(const[g,[E,p]]of this.current){if(h.current.has(g)){var n=h.current.get(g)[0];if(t&&E!==n)h.current.set(g,[E,p]);else continue}r.push(g)}if(t)for(const[g,E]of this.async_deriveds){const p=h.async_deriveds.get(g);p&&E.promise.then(p.resolve).catch(p.reject)}var i=[...h.current.keys()].filter(g=>!h.current.get(g)[1]);if(!(!u(h,Or)||i.length===0)){var a=i.filter(g=>!this.current.has(g));if(a.length===0)t&&h.discard();else if(r.length>0){if(t)for(const g of u(this,zr))h.unskip_effect(g,E=>{var p;(E.f&(ht|kr))!==0?h.schedule(E):G(p=h,ne,Hr).call(p,[E])});h.activate();var o=new Set,s=new Map;for(var l of r)da(l,a,o,s);s=new Map;var c=[...h.current].filter(([g,E])=>{const p=this.current.get(g);return p?p[0]!==E[0]||p[1]!==E[1]:!0}).map(([g])=>g);if(c.length>0)for(const g of u(this,dn))(g.f&(Fe|Ve|An))===0&&vi(g,c,s)&&((g.f&(kr|ht))!==0?(be(g,Se),h.schedule(g)):u(h,Ft).add(g));if(u(h,Je).length>0&&!u(h,vr)){h.apply();for(var d of G(v=h,ne,Vi).call(v))G(m=h,ne,Fi).call(m,d,[],[])}h.deactivate()}}}},kn=function(){if(this.linked){var t=u(this,Zt),r=u(this,dr);t===null?ui=r:B(t,dr,r),r===null?Mr=t:B(r,Zt,t),this.linked=!1}};let nr=Wn;function ks(){try{ls()}catch(e){Nt(e,fi)}}let yt=null;function fa(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(Fe|Ve))===0&&tn(n)&&(yt=new Set,Nr(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&Na(n),(yt==null?void 0:yt.size)>0)){Tt.clear();for(const i of yt){if((i.f&(Fe|Ve))!==0)continue;const a=[i];let o=i.parent;for(;o!==null;)yt.has(o)&&(yt.delete(o),a.push(o)),o=o.parent;for(let s=a.length-1;s>=0;s--){const l=a[s];(l.f&(Fe|Ve))===0&&Nr(l)}}yt.clear()}}yt=null}}function da(e,t,r,n){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(const i of e.reactions){const a=i.f;(a&Le)!==0?da(i,t,r,n):(a&(kr|ht))!==0&&(a&Se)===0&&vi(i,t,n)&&(be(i,Se),pi(i))}}function vi(e,t,r){const n=r.get(e);if(n!==void 0)return n;if(e.deps!==null)for(const i of e.deps){if(rr.call(t,i))return!0;if((i.f&Le)!==0&&vi(i,t,r))return r.set(i,!0),!0}return r.set(e,!1),!1}function pi(e){D.schedule(e)}function va(e,t){if(!((e.f&at)!==0&&(e.f&Me)!==0)){(e.f&Se)!==0?t.d.push(e):(e.f&ot)!==0&&t.m.push(e),be(e,Me);for(var r=e.first;r!==null;)va(r,t),r=r.next}}function pa(e){be(e,Me);for(var t=e.first;t!==null;)pa(t),t=t.next}let Pn=new Set;const Tt=new Map;let ha=!1;function Xt(e,t){var r={f:0,v:e,reactions:null,equals:na,rv:0,wv:0};return r}function H(e,t){const r=Xt(e);return Ra(r),r}function Ss(e,t=!1,r=!0){var i;const n=Xt(e);return t||(n.equals=ia),Sr&&r&&me!==null&&me.l!==null&&((i=me.l).s??(i.s=[])).push(n),n}function N(e,t,r=!1){j!==null&&(!bt||(j.f&An)!==0)&&Gr()&&(j.f&(Le|ht|kr|An))!==0&&(Ct===null||!Ct.has(e))&&ds();let n=r?ze(t):t;return Tr(e,n,On)}var ir=null,hi=0;function Tr(e,t,r=null){if(!e.equals(t)){Dt?Tt.set(e,t):Tt.has(e)||Tt.set(e,e.v);var n=nr.ensure();if(n.capture(e,t),(e.f&Le)!==0){const i=e;(e.f&Se)!==0&&ci(i),Ce===null&&si(i)}e.wv=za(),ir=null,hi=0,ga(e,Se,r),ir=null,Gr()&&W!==null&&(W.f&Me)!==0&&(W.f&(at|It))===0&&(ct===null?Ls([e]):ct.push(e)),!n.is_fork&&Pn.size>0&&!ha&&Es()}return t}function Es(){ha=!1;for(const e of Pn){(e.f&Me)!==0&&be(e,ot);let t;try{t=tn(e)}catch{t=!0}t&&Nr(e)}Pn.clear()}function _a(e,t=1){var r=f(e),n=t===1?r++:r--;return N(e,r),n}function Qr(e){N(e,e.v+1)}function ga(e,t,r){var n=e.reactions;if(n!==null){var i=Gr(),a=n.length;if(hi+=a,hi>1e5&&ir===null&&(ir=new Set),ir!==null){if(ir.has(e))return;ir.add(e)}for(var o=0;o<a;o++){var s=n[o],l=s.f;if(!(!i&&s===W)){var c=(l&Se)===0;if(c&&be(s,t),(l&An)!==0)Pn.add(s);else if((l&Le)!==0){var d=s;Ce==null||Ce.delete(d),ga(d,ot,r)}else if(c){var v=s;(l&ht)!==0&&yt!==null&&yt.add(v),r!==null?r.push(v):pi(v)}}}}}function ze(e){if(typeof e!="object"||e===null||At in e||Qi in e)return e;const t=Jn(e);if(t!==Ro&&t!==Lo)return e;var r=new Map,n=ce(e),i=H(0),a=cr,o=s=>{if(cr===a)return s();var l=j,c=cr;st(null),Ia(a);var d=s();return st(l),Ia(c),d};return n&&r.set("length",H(e.length)),new Proxy(e,{defineProperty(s,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&us();var d=r.get(l);return d===void 0?o(()=>{var v=H(c.value);return r.set(l,v),v}):N(d,c.value,!0),!0},deleteProperty(s,l){var c=r.get(l);if(c===void 0){if(l in s){const d=o(()=>H(Ee));r.set(l,d),Qr(i)}}else N(c,Ee),Qr(i);return!0},get(s,l,c){var h;if(l===At)return e;var d=r.get(l),v=l in s;if(d===void 0&&(!v||(h=Ut(s,l))!=null&&h.writable)&&(d=o(()=>{var g=ze(v?s[l]:Ee),E=H(g);return E}),r.set(l,d)),d!==void 0){var m=f(d);return m===Ee?void 0:m}return Reflect.get(s,l,c)},getOwnPropertyDescriptor(s,l){var m;(m=this.has)==null||m.call(this,s,l);var c=Reflect.getOwnPropertyDescriptor(s,l),d=r.get(l);if(d!==void 0){var v=f(d);if(v===Ee)return;if(c&&"value"in c)c.value=v;else return{enumerable:!0,configurable:!0,value:v,writable:!0}}return c},has(s,l){var m;if(l===At)return!0;var c=r.get(l),d=c!==void 0&&c.v!==Ee||Reflect.has(s,l);if(c!==void 0||W!==null&&(!d||(m=Ut(s,l))!=null&&m.writable)){c===void 0&&(c=o(()=>{var h=d?ze(s[l]):Ee,g=H(h);return g}),r.set(l,c));var v=f(c);if(v===Ee)return!1}return d},set(s,l,c,d){var _;var v=r.get(l),m=l in s;if(n&&l==="length")for(var h=c;h<v.v;h+=1){var g=r.get(h+"");g!==void 0?N(g,Ee):h in s&&(g=o(()=>H(Ee)),r.set(h+"",g))}if(v===void 0)(!m||(_=Ut(s,l))!=null&&_.writable)&&(v=o(()=>H(void 0)),N(v,ze(c)),r.set(l,v));else{m=v.v!==Ee;var E=o(()=>ze(c));N(v,E)}var p=Reflect.getOwnPropertyDescriptor(s,l);if(p!=null&&p.set&&p.set.call(d,c),!m){if(n&&typeof l=="string"){var w=r.get("length"),k=Number(l);Number.isInteger(k)&&k>=w.v&&N(w,k+1)}Qr(i)}return!0},ownKeys(s){f(i);var l=Reflect.ownKeys(s).filter(v=>{var m=r.get(v);return m===void 0||m.v!==Ee});for(var[c,d]of r)d.v!==Ee&&!(c in s)&&l.push(c);return l},setPrototypeOf(){fs()}})}function ma(e){try{if(e!==null&&typeof e=="object"&&At in e)return e[At]}catch{}return e}function ya(e,t){return Object.is(ma(e),ma(t))}var wa,ba,xa,ka;function $s(){if(wa===void 0){wa=window,ba=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;xa=Ut(t,"firstChild").get,ka=Ut(t,"nextSibling").get,qi(e)&&(e[ii]=void 0,e[Tn]=null,e[ai]=void 0,e.__e=void 0),qi(r)&&(r[Wr]=void 0)}}function zt(e=""){return document.createTextNode(e)}function ar(e){return xa.call(e)}function Jr(e){return ka.call(e)}function L(e,t){return ar(e)}function J(e,t=!1){{var r=ar(e);return r instanceof Comment&&r.data===""?Jr(r):r}}function U(e,t=!1){return ar(e)}function O(e,t=1,r=!1){let n=e;for(;t--;)n=Jr(n);return n}function As(e){e.textContent=""}function Sa(){return!1}function _i(e,t,r){return t==null||t===ra?r?document.createElement(e,{is:r}):document.createElement(e):r?document.createElementNS(t,e,{is:r}):document.createElementNS(t,e)}function Ms(e){var t=W;if(t===null)return j.f|=Wt,e;if((t.f&br)===0&&(t.f&wr)===0)throw e;Nt(e,t)}function Nt(e,t){if(!(t!==null&&(t.f&Fe)!==0)){for(;t!==null;){if((t.f&ri)!==0&&(t.f&(Fe|$n))===0){if((t.f&br)===0)throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw e}}function Ea(e){W===null&&(j===null&&ss(),os()),Dt&&as()}function Ts(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function wt(e,t){var r=W;r!==null&&(r.f&Ve)!==0&&(e|=Ve);var n={ctx:me,deps:null,nodes:null,f:e|Se|_t,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};D==null||D.register_created_effect(n);var i=n;if((e&wr)!==0)Zr!==null?Zr.push(n):nr.ensure().schedule(n);else if(t!==null){try{Nr(n)}catch(o){throw Oe(n),o}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&xr)===0&&(i=i.first,(e&ht)!==0&&(e&jt)!==0&&i!==null&&(i.f|=jt))}if(i!==null&&(i.parent=r,r!==null&&Ts(i,r),j!==null&&(j.f&Le)!==0&&(e&It)===0)){var a=j;(a.effects??(a.effects=[])).push(i)}return n}function gi(){return j!==null&&!bt}function Rn(e){const t=wt(jr,null);return be(t,Me),t.teardown=e,t}function or(e){Ea();var t=W.f,r=!j&&(t&at)!==0&&me!==null&&!me.i;if(r){var n=me;(n.e??(n.e=[])).push(e)}else return $a(e)}function $a(e){return wt(wr|Zi,e)}function Ns(e){return Ea(),wt(jr|Zi,e)}function Cs(e){nr.ensure();const t=wt(It|xr,e);return(r={})=>new Promise(n=>{r.outro?sr(t,()=>{Oe(t),n(void 0)}):(Oe(t),n(void 0))})}function mi(e){return wt(wr,e)}function Os(e){return wt(kr|xr,e)}function Aa(e,t=0){return wt(jr|t,e)}function ue(e,t=[],r=[],n=[]){oa(n,t,r,i=>{wt(jr,()=>{e(...i.map(f))})})}function en(e,t=0){var r=wt(ht|t,e);return r}function Ma(e,t=0){var r=wt(ti|t,e);return r}function Xe(e){return wt(at|xr,e)}function Ta(e){var t=e.teardown;if(t!==null){const r=Dt,n=j;Pa(!0),st(null);try{t.call(null)}catch(i){Nt(i,e.parent)}finally{Pa(r),st(n)}}}function yi(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const i=r.ac;i!==null&&qr(()=>{i.abort(Xr)});var n=r.next;(r.f&It)!==0?r.parent=null:Oe(r,t),r=n}}function Ps(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&at)===0&&Oe(t),t=r}}function Oe(e,t=!0){var r=!1;(t||(e.f&Do)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Rs(e.nodes.start,e.nodes.end),r=!0),e.f|=$n,yi(e,t&&!r),rn(e,0);var n=e.nodes&&e.nodes.t;if(n!==null)for(const a of n)a.stop();Ta(e),e.f^=$n,e.f|=Fe;var i=e.parent;i!==null&&i.first!==null&&Na(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Rs(e,t){for(;e!==null;){var r=e===t?null:Jr(e);e.remove(),e=r}}function Na(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function sr(e,t,r=!0){var n=[];e.f|=ni,Ca(e,n,!0);var i=()=>{r&&Oe(e),t&&t()},a=n.length;if(a>0){var o=()=>--a||i();for(var s of n)s.out(o)}else i()}function Ca(e,t,r){if((e.f&Ve)===0){e.f^=Ve;var n=e.nodes&&e.nodes.t;if(n!==null)for(const s of n)(s.is_global||r)&&t.push(s);for(var i=e.first;i!==null;){var a=i.next;if((i.f&It)===0){var o=(i.f&jt)!==0||(i.f&at)!==0&&(e.f&ht)!==0;Ca(i,t,o?r:!1)}i=a}}}function Ln(e){e.f&=~ni,Oa(e,!0)}function Oa(e,t){if((e.f&ni)===0&&(e.f&Ve)!==0){e.f^=Ve,(e.f&Me)===0&&(be(e,Se),nr.ensure().schedule(e));for(var r=e.first;r!==null;){var n=r.next,i=(r.f&jt)!==0||(r.f&at)!==0;Oa(r,i?t:!1),r=n}var a=e.nodes&&e.nodes.t;if(a!==null)for(const o of a)(o.is_global||t)&&o.in()}}function wi(e,t){if(e.nodes)for(var r=e.nodes.start,n=e.nodes.end;r!==null;){var i=r===n?null:Jr(r);t.append(r),r=i}}let In=!1,Dt=!1;function Pa(e){Dt=e}let j=null,bt=!1;function st(e){j=e}let W=null;function lt(e){W=e}let Ct=null;function Ra(e){j!==null&&((j.f&Mn)!==0||(j.f&Le)!==0)&&(Ct??(Ct=new Set)).add(e)}let Ge=null,Ze=0,ct=null;function Ls(e){ct=e}let La=1,lr=0,cr=lr;function Ia(e){cr=e}function za(){return++La}function tn(e){var t=e.f;if((t&Se)!==0)return!0;if((t&ot)!==0){for(var r=e.deps,n=r.length,i=0;i<n;i++){var a=r[i];if(tn(a)&&la(a),a.wv>e.wv)return!0}(t&_t)!==0&&Ce===null&&be(e,Me)}return!1}function Da(e,t,r=!0){var n=e.reactions;if(n!==null&&!(Ct!==null&&Ct.has(e)))for(var i=0;i<n.length;i++){var a=n[i];(a.f&Le)!==0?Da(a,t,!1):t===a&&(r?be(a,Se):(a.f&Me)!==0&&be(a,ot),pi(a))}}function Ba(e){var t=Ge,r=Ze,n=ct,i=j,a=Ct,o=me,s=bt,l=cr,c=e.f;Ge=null,Ze=0,ct=null,j=(c&(at|It))===0?e:null,Ct=null,Er(e.ctx),bt=!1,cr=++lr,e.ac!==null&&(qr(()=>{e.ac.abort(Xr)}),e.ac=null);try{e.f|=Mn;var d=e.fn,v=d();e.f|=br;var m=Va(e);if(Gr()&&ct!==null&&!bt&&m!==null&&(e.f&(Le|ot|Se))===0)for(var h=0;h<ct.length;h++)Da(ct[h],e);if(i!==null&&i!==e){if(lr++,i.deps!==null)for(let g=0;g<r;g+=1)i.deps[g].rv=lr;if(t!==null)for(const g of t)g.rv=lr;ct!==null&&(n===null?n=ct:n.push(...ct))}return(e.f&Wt)!==0&&(e.f^=Wt),v}catch(g){return Va(e),Ms(g)}finally{e.f^=Mn,Ge=t,Ze=r,ct=n,j=i,Ct=a,Er(o),bt=s,cr=l}}function Va(e){var i;var t=e.deps,r=D==null?void 0:D.is_fork;if(Ge!==null){var n;if(r||rn(e,Ze),t!==null&&Ze>0)for(t.length=Ze+Ge.length,n=0;n<Ge.length;n++)t[Ze+n]=Ge[n];else e.deps=t=Ge;if(gi()&&(e.f&_t)!==0)for(n=Ze;n<t.length;n++)((i=t[n]).reactions??(i.reactions=[])).push(e)}else!r&&t!==null&&Ze<t.length&&(rn(e,Ze),t.length=Ze);return t}function Is(e,t){let r=t.reactions;if(r!==null){var n=Ae.call(r,e);if(n!==-1){var i=r.length-1;i===0?r=t.reactions=null:(r[n]=r[i],r.pop())}}if(r===null&&(t.f&Le)!==0&&(Ge===null||!rr.call(Ge,t))){var a=t;(a.f&_t)!==0&&(a.f^=_t),a.v!==Ee&&si(a),a.ac!==null&&qr(()=>{a.ac.abort(Xr),a.ac=null,be(a,Se)}),bs(a),rn(a,0)}}function rn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Is(e,r[n])}function Nr(e){var t=e.f;if((t&Fe)===0){be(e,Me);var r=W,n=In;W=e,In=(t&(at|It))===0;try{(t&(ht|ti))!==0?Ps(e):yi(e),Ta(e);var i=Ba(e);e.teardown=typeof i=="function"?i:null,e.wv=La;var a}finally{In=n,W=r}}}function f(e){var t=e.f,r=(t&Le)!==0;if(j!==null&&!bt){var n=W!==null&&(W.f&Fe)!==0;if(!n&&(Ct===null||!Ct.has(e))){var i=j.deps;if((j.f&Mn)!==0)e.rv<lr&&(e.rv=lr,Ge===null&&i!==null&&i[Ze]===e?Ze++:Ge===null?Ge=[e]:Ge.push(e));else{j.deps??(j.deps=[]),rr.call(j.deps,e)||j.deps.push(e);var a=e.reactions;a===null?e.reactions=[j]:rr.call(a,j)||a.push(j)}}}if(Dt&&Tt.has(e))return Tt.get(e);if(r){var o=e;if(Dt){var s=o.v;return((o.f&Me)===0&&o.reactions!==null||Ha(o))&&(s=ci(o)),Tt.set(o,s),s}var l=(o.f&_t)===0&&!bt&&j!==null&&(In||(j.f&_t)!==0),c=(o.f&br)===0;tn(o)&&(l&&(o.f|=_t),la(o)),l&&!c&&(ca(o),Fa(o))}if(Ce!=null&&Ce.has(e))return Ce.get(e);if((e.f&Wt)!==0)throw e.v;return e.v}function Fa(e){if(e.f|=_t,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&Le)!==0&&(t.f&_t)===0&&(ca(t),Fa(t))}function Ha(e){if(e.v===Ee)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Tt.has(t)||(t.f&Le)!==0&&Ha(t))return!0;return!1}function Gt(e){var t=bt;try{return bt=!0,e()}finally{bt=t}}function ur(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(At in e)bi(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&At in r&&bi(r)}}}function bi(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{bi(e[n],t)}catch{}const r=Jn(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=Gi(r);for(let i in n){const a=n[i].get;if(a)try{a.call(e)}catch{}}}}}function zs(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Ds=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Bs(e){return Ds.includes(e)}const Vs={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Fs(e){return e=e.toLowerCase(),Vs[e]??e}const Hs=["touchstart","touchmove"];function Us(e){return Hs.includes(e)}const fr=Symbol("events"),Ua=new Set,xi=new Set;function ja(e,t,r,n={}){function i(a){if(n.capture||Ei.call(t,a),!a.cancelBubble)return qr(()=>r==null?void 0:r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?(i.__removed=!1,Mt(()=>{i.__removed||t.addEventListener(e,i,n)})):t.addEventListener(e,i,n),i}function zn(e,t,r,n,i){var a={capture:n,passive:i},o=ja(e,t,r,a);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Rn(()=>{o.__removed=!0,t.removeEventListener(e,o,a)})}function q(e,t,r){(t[fr]??(t[fr]={}))[e]=r}function qt(e){for(var t=0;t<e.length;t++)Ua.add(e[t]);for(var r of xi)r(e)}let ki=null,Si=!1;function Ei(e){var E,p;var t=this,r=t.ownerDocument,n=e.type,i=((E=e.composedPath)==null?void 0:E.call(e))||[],a=i[0]||e.target;ki=e,Si||(Si=!0,setTimeout(()=>{Si=!1,ki=null}));var o=0,s=ki===e&&e[fr];if(s){var l=i.indexOf(s);if(l!==-1&&(t===document||t===window)){e[fr]=t;return}var c=i.indexOf(t);if(c===-1)return;l<=c&&(o=l)}if(a=i[o]||e.target,a!==t){Xi(e,"currentTarget",{configurable:!0,get(){return a||r}});var d=j,v=W;st(null),lt(null);try{for(var m,h=[];a!==null&&a!==t;){try{var g=(p=a[fr])==null?void 0:p[n];g!=null&&(!a.disabled||e.target===a)&&g.call(a,e)}catch(w){m?h.push(w):m=w}if(e.cancelBubble)break;o++,a=o<i.length?i[o]:null}if(m){for(let w of h)queueMicrotask(()=>{throw w});throw m}}finally{e[fr]=t,delete e.currentTarget,st(d),lt(v)}}}const $i=((mo=globalThis==null?void 0:globalThis.window)==null?void 0:mo.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function js(e){return($i==null?void 0:$i.createHTML(e))??e}function Wa(e){var t=_i("template");return t.innerHTML=js(e.replaceAll("<!>","<!---->")),t.content}function nn(e,t){var r=W;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function de(e,t){var r=(t&qo)!==0,n=(t&Yo)!==0,i,a=!e.startsWith("<!>");return()=>{i===void 0&&(i=Wa(a?e:"<!>"+e),r||(i=ar(i)));var o=n||ba?document.importNode(i,!0):i.cloneNode(!0);if(r){var s=ar(o),l=o.lastChild;nn(s,l)}else nn(o,o);return o}}function Ws(e,t,r="svg"){var n=!e.startsWith("<!>"),i=`<${r}>${n?e:"<!>"+e}</${r}>`,a;return()=>{if(!a){var o=Wa(i),s=ar(o);a=ar(s)}var l=a.cloneNode(!0);return nn(l,l),l}}function Xs(e,t){return Ws(e,t,"svg")}function re(){var e=document.createDocumentFragment(),t=document.createComment(""),r=zt();return e.append(t,r),nn(t,r),e}function C(e,t){e!==null&&e.before(t)}function Gs(e){let t=0,r=Xt(0),n;return()=>{gi()&&(f(r),Aa(()=>(t===0&&(n=Gt(()=>e(()=>Qr(r)))),t+=1,()=>{Mt(()=>{t-=1,t===0&&(n==null||n(),n=void 0,Qr(r))})})))}}var qs=jt|xr;function Ys(e,t,r,n){new Ks(e,t,r,n)}class Ks{constructor(t,r,n,i){F(this,pe);it(this,"parent");it(this,"is_pending",!1);it(this,"transform_error");F(this,ft);F(this,Ri,null);F(this,dt);F(this,pr);F(this,Ue);F(this,et,null);F(this,je,null);F(this,tt,null);F(this,Rt,null);F(this,hr,0);F(this,Qt,0);F(this,Dr,!1);F(this,vn,new Set);F(this,pn,new Set);F(this,Ht,null);F(this,Xn,Gs(()=>(B(this,Ht,Xt(u(this,hr))),()=>{B(this,Ht,null)})));var a;B(this,ft,t),B(this,dt,r),B(this,pr,o=>{var s=W;s.b=this,s.f|=ri,n(o)}),this.parent=W.b,this.transform_error=i??((a=this.parent)==null?void 0:a.transform_error)??(o=>o),B(this,Ue,en(()=>{G(this,pe,Ui).call(this)},qs))}defer_effect(t){aa(t,u(this,vn),u(this,pn))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!u(this,dt).pending}update_pending_count(t,r){G(this,pe,ji).call(this,t,r),B(this,hr,u(this,hr)+t),!(!u(this,Ht)||u(this,Dr))&&(B(this,Dr,!0),Mt(()=>{B(this,Dr,!1),u(this,Ht)&&Tr(u(this,Ht),u(this,hr))}))}get_effect_pending(){return u(this,Xn).call(this),f(u(this,Ht))}error(t){if(!u(this,dt).onerror&&!u(this,dt).failed)throw t;D!=null&&D.is_fork?(u(this,et)&&D.skip_effect(u(this,et)),u(this,je)&&D.skip_effect(u(this,je)),u(this,tt)&&D.skip_effect(u(this,tt)),D.oncommit(()=>{G(this,pe,Wi).call(this,t)})):G(this,pe,Wi).call(this,t)}}ft=new WeakMap,Ri=new WeakMap,dt=new WeakMap,pr=new WeakMap,Ue=new WeakMap,et=new WeakMap,je=new WeakMap,tt=new WeakMap,Rt=new WeakMap,hr=new WeakMap,Qt=new WeakMap,Dr=new WeakMap,vn=new WeakMap,pn=new WeakMap,Ht=new WeakMap,Xn=new WeakMap,pe=new WeakSet,Jc=function(){try{B(this,et,Xe(()=>u(this,pr).call(this,u(this,ft))))}catch(t){this.error(t)}},eu=function(t){const r=u(this,dt).failed,{reset:n,invoke_onerror:i}=G(this,pe,Hi).call(this,t);Mt(i),r&&B(this,tt,Xe(()=>{r(u(this,ft),()=>t,()=>n)}))},Hi=function(t){var r=!1,n=!1;const i=()=>{if(r){es();return}r=!0,n&&vs(),u(this,tt)!==null&&sr(u(this,tt),()=>{B(this,tt,null)}),G(this,pe,Qn).call(this,()=>{G(this,pe,Ui).call(this)})};return{reset:i,invoke_onerror:()=>{var o,s;try{n=!0,(s=(o=u(this,dt)).onerror)==null||s.call(o,t,i),n=!1}catch(l){Nt(l,u(this,Ue)&&u(this,Ue).parent)}}}},tu=function(){const t=u(this,dt).pending;t&&(this.is_pending=!0,B(this,je,Xe(()=>t(u(this,ft)))),Mt(()=>{var r=B(this,Rt,document.createDocumentFragment()),n=zt(),i=!1;if(r.append(n),B(this,et,G(this,pe,Qn).call(this,()=>{try{return Xe(()=>u(this,pr).call(this,n))}catch(a){try{this.error(a),i=!0}catch(o){Nt(o,u(this,Ue).parent)}return null}})),u(this,et)===null){B(this,Rt,null),i&&G(this,pe,Sn).call(this,D);return}u(this,Qt)===0&&(u(this,ft).before(r),B(this,Rt,null),sr(u(this,je),()=>{B(this,je,null)}),G(this,pe,Sn).call(this,D))}))},Ui=function(){try{if(this.is_pending=this.has_pending_snippet(),B(this,Qt,0),B(this,hr,0),B(this,et,Xe(()=>{u(this,pr).call(this,u(this,ft))})),u(this,Qt)>0){var t=B(this,Rt,document.createDocumentFragment());wi(u(this,et),t);const r=u(this,dt).pending;B(this,je,Xe(()=>r(u(this,ft))))}else G(this,pe,Sn).call(this,D)}catch(r){this.error(r)}},Sn=function(t){this.is_pending=!1,t.transfer_effects(u(this,vn),u(this,pn))},Qn=function(t){var r=W,n=j,i=me;lt(u(this,Ue)),st(u(this,Ue)),Er(u(this,Ue).ctx);try{return nr.ensure(),t()}finally{lt(r),st(n),Er(i)}},ji=function(t,r){var n;if(!this.has_pending_snippet()){this.parent&&G(n=this.parent,pe,ji).call(n,t,r);return}B(this,Qt,u(this,Qt)+t),u(this,Qt)===0&&(G(this,pe,Sn).call(this,r),u(this,je)&&sr(u(this,je),()=>{B(this,je,null)}),u(this,Rt)&&(u(this,ft).before(u(this,Rt)),B(this,Rt,null)))},Wi=function(t){u(this,et)&&(Oe(u(this,et)),B(this,et,null)),u(this,je)&&(Oe(u(this,je)),B(this,je,null)),u(this,tt)&&(Oe(u(this,tt)),B(this,tt,null));let r=u(this,dt).failed;const n=i=>{const{reset:a,invoke_onerror:o}=G(this,pe,Hi).call(this,i);o(),r&&B(this,tt,G(this,pe,Qn).call(this,()=>{try{return Xe(()=>{var s=W;s.b=this,s.f|=ri,r(u(this,ft),()=>i,()=>a)})}catch(s){return Nt(s,u(this,Ue).parent),null}}))};Mt(()=>{var i;try{i=this.transform_error(t)}catch(a){Nt(a,u(this,Ue)&&u(this,Ue).parent);return}i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(n,a=>Nt(a,u(this,Ue)&&u(this,Ue).parent)):n(i)})};function V(e,t){var r=t==null?"":typeof t=="object"?`${t}`:t;r!==(e[Wr]??(e[Wr]=e.nodeValue))&&(e[Wr]=r,e.nodeValue=`${r}`)}function Zs(e,t){return Qs(e,t)}const Dn=new Map;function Qs(e,{target:t,anchor:r,props:n={},events:i,context:a,intro:o=!0,transformError:s}){$s();var l=void 0,c=Cs(()=>{var d=r??t.appendChild(zt());Ys(d,{pending:()=>{}},h=>{gt({});var g=me;a&&(g.c=a),i&&(n.$$events=i),l=e(h,n)||oi(),mt()},s);var v=new Set,m=h=>{for(var g=0;g<h.length;g++){var E=h[g];if(!v.has(E)){v.add(E);var p=Us(E);for(const _ of[t,document]){var w=Dn.get(_);w===void 0&&(w=new Map,Dn.set(_,w));var k=w.get(E);k===void 0?(_.addEventListener(E,Ei,{passive:p}),w.set(E,1)):w.set(E,k+1)}}}};return m(En(Ua)),xi.add(m),()=>{var p;for(var h of v)for(const w of[t,document]){var g=Dn.get(w),E=g.get(h);--E==0?(w.removeEventListener(h,Ei),g.delete(h),g.size===0&&Dn.delete(w)):g.set(h,E)}xi.delete(m),d!==r&&((p=d.parentNode)==null||p.removeChild(d))}});return Js.set(l,c),l}let Js=new WeakMap;class Ai{constructor(t,r=!0){it(this,"anchor");F(this,kt,new Map);F(this,Lt,new Map);F(this,rt,new Map);F(this,_r,new Set);F(this,hn,!0);F(this,_n,t=>{if(u(this,kt).has(t)){var r=u(this,kt).get(t),n=u(this,Lt).get(r);if(n)Ln(n),u(this,_r).delete(r);else{var i=u(this,rt).get(r);i&&(Ln(i.effect),u(this,Lt).set(r,i.effect),u(this,rt).delete(r),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),n=i.effect)}for(const[a,o]of u(this,kt)){if(u(this,kt).delete(a),a===t)break;const s=u(this,rt).get(o);s&&(Oe(s.effect),u(this,rt).delete(o))}for(const[a,o]of u(this,Lt)){if(a===r||u(this,_r).has(a))continue;const s=()=>{if(Array.from(u(this,kt).values()).includes(a)){var c=document.createDocumentFragment();wi(o,c),c.append(zt()),u(this,rt).set(a,{effect:o,fragment:c})}else Oe(o);u(this,_r).delete(a),u(this,Lt).delete(a)};u(this,hn)||!n?(u(this,_r).add(a),sr(o,s,!1)):s()}}});F(this,Gn,t=>{u(this,kt).delete(t);const r=Array.from(u(this,kt).values());for(const[n,i]of u(this,rt))r.includes(n)||(Oe(i.effect),u(this,rt).delete(n))});this.anchor=t,B(this,hn,r)}ensure(t,r){var n=D,i=Sa();if(r&&!u(this,Lt).has(t)&&!u(this,rt).has(t))if(i){var a=document.createDocumentFragment(),o=zt();a.append(o),u(this,rt).set(t,{effect:Xe(()=>r(o)),fragment:a})}else u(this,Lt).set(t,Xe(()=>r(this.anchor)));if(u(this,kt).set(n,t),i){for(const[s,l]of u(this,Lt))s===t?n.unskip_effect(l):n.skip_effect(l);for(const[s,l]of u(this,rt))s===t?n.unskip_effect(l.effect):n.skip_effect(l.effect);n.oncommit(u(this,_n)),n.ondiscard(u(this,Gn))}else u(this,_n).call(this,n)}}kt=new WeakMap,Lt=new WeakMap,rt=new WeakMap,_r=new WeakMap,hn=new WeakMap,_n=new WeakMap,Gn=new WeakMap;function qe(e,t,r=!1){var n=new Ai(e),i=r?jt:0;function a(o,s){n.ensure(o,s)}en(()=>{var o=!1;t((s,l=0)=>{o=!0,a(l,s)}),o||a(-1,null)},i)}function Xa(e,t){return t}function el(e,t,r){for(var n=[],i=t.length,a,o=t.length,s=0;s<i;s++){let v=t[s];sr(v,()=>{if(a){if(a.pending.delete(v),a.done.add(v),a.pending.size===0){var m=e.outrogroups;Mi(e,En(a.done)),m.delete(a),m.size===0&&(e.outrogroups=null)}}else o-=1},!1)}if(o===0){var l=n.length===0&&r!==null&&e.pending.size===0;if(l){var c=r,d=c.parentNode;As(d),d.append(c),e.items.clear()}Mi(e,t,!l)}else a={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(a)}function Mi(e,t,r=!0){var n;if(e.pending.size>0){n=new Set;for(const o of e.pending.values())for(const s of o)n.add(e.items.get(s).e)}for(var i=0;i<t.length;i++){var a=t[i];if(n!=null&&n.has(a)){a.f|=$t;const o=document.createDocumentFragment();wi(a,o)}else Oe(t[i],r)}}var Ga;function Bt(e,t,r,n,i,a=null){var o=e,s=new Map,l=(t&ea)!==0;if(l){var c=e;o=c.appendChild(zt())}var d=null,v=li(()=>{var _=r();return ce(_)?_:_==null?[]:En(_)}),m,h=new Map,g=!0;function E(_){(k.effect.f&Fe)===0&&(k.pending.delete(_),k.fallback=d,tl(k,m,o,t,n),d!==null&&(m.length===0?(d.f&$t)===0?Ln(d):(d.f^=$t,on(d,null,o)):sr(d,()=>{d=null})))}function p(_){k.pending.delete(_)}var w=en(()=>{m=f(v);for(var _=m.length,A=new Set,x=D,M=Sa(),T=0;T<_;T+=1){var I=m[T],S=n(I,T),$=g?null:s.get(S);$?($.v&&Tr($.v,I),$.i&&Tr($.i,T),M&&x.unskip_effect($.e)):($=rl(s,g?o:Ga??(Ga=zt()),I,S,T,i,t,r),g||($.e.f|=$t),s.set(S,$)),A.add(S)}if(_===0&&a&&!d&&(g?d=Xe(()=>a(o)):(d=Xe(()=>a(Ga??(Ga=zt()))),d.f|=$t)),_>A.size&&is(),!g)if(h.set(x,A),M){for(const[R,ee]of s)A.has(R)||x.skip_effect(ee.e);x.oncommit(E),x.ondiscard(p)}else E(x);f(v)}),k={effect:w,items:s,pending:h,outrogroups:null,fallback:d};g=!1}function an(e){for(;e!==null&&(e.f&at)===0;)e=e.next;return e}function tl(e,t,r,n,i){var $,R,ee,X,ae,te,$e,vt,St;var a=(n&Ho)!==0,o=t.length,s=e.items,l=an(e.effect.first),c,d=null,v,m=[],h=[],g,E,p,w;if(a)for(w=0;w<o;w+=1)g=t[w],E=i(g,w),p=s.get(E).e,(p.f&$t)===0&&((R=($=p.nodes)==null?void 0:$.a)==null||R.measure(),(v??(v=new Set)).add(p));for(w=0;w<o;w+=1){if(g=t[w],E=i(g,w),p=s.get(E).e,e.outrogroups!==null)for(const Ne of e.outrogroups)Ne.pending.delete(p),Ne.done.delete(p);if((p.f&Ve)!==0&&(Ln(p),a&&((X=(ee=p.nodes)==null?void 0:ee.a)==null||X.unfix(),(v??(v=new Set)).delete(p))),(p.f&$t)!==0)if(p.f^=$t,p===l)on(p,null,r);else{var k=d?d.next:l;p===e.effect.last&&(e.effect.last=p.prev),p.prev&&(p.prev.next=p.next),p.next&&(p.next.prev=p.prev),Yt(e,d,p),Yt(e,p,k),on(p,k,r),d=p,m=[],h=[],l=an(d.next);continue}if(p!==l){if(c!==void 0&&c.has(p)){if(m.length<h.length){var _=h[0],A;d=_.prev;var x=m[0],M=m[m.length-1];for(A=0;A<m.length;A+=1)on(m[A],_,r);for(A=0;A<h.length;A+=1)c.delete(h[A]);Yt(e,x.prev,M.next),Yt(e,d,x),Yt(e,M,_),l=_,d=M,w-=1,m=[],h=[]}else c.delete(p),on(p,l,r),Yt(e,p.prev,p.next),Yt(e,p,d===null?e.effect.first:d.next),Yt(e,d,p),d=p;continue}for(m=[],h=[];l!==null&&l!==p;)(c??(c=new Set)).add(l),h.push(l),l=an(l.next);if(l===null)continue}(p.f&$t)===0&&m.push(p),d=p,l=an(p.next)}if(e.outrogroups!==null){for(const Ne of e.outrogroups)Ne.pending.size===0&&(Mi(e,En(Ne.done)),(ae=e.outrogroups)==null||ae.delete(Ne));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||c!==void 0){var T=[];if(c!==void 0)for(p of c)(p.f&Ve)===0&&T.push(p);for(;l!==null;)(l.f&Ve)===0&&l!==e.fallback&&T.push(l),l=an(l.next);var I=T.length;if(I>0){var S=(n&ea)!==0&&o===0?r:null;if(a){for(w=0;w<I;w+=1)($e=(te=T[w].nodes)==null?void 0:te.a)==null||$e.measure();for(w=0;w<I;w+=1)(St=(vt=T[w].nodes)==null?void 0:vt.a)==null||St.fix()}el(e,T,S)}}a&&Mt(()=>{var Ne,Pe;if(v!==void 0)for(p of v)(Pe=(Ne=p.nodes)==null?void 0:Ne.a)==null||Pe.apply()})}function rl(e,t,r,n,i,a,o,s){var l=(o&Vo)!==0?(o&Uo)===0?Ss(r,!1,!1):Xt(r):null,c=(o&Fo)!==0?Xt(i):null;return{v:l,i:c,e:Xe(()=>(a(t,l??r,c??i,s),()=>{e.delete(n)}))}}function on(e,t,r){if(e.nodes)for(var n=e.nodes.start,i=e.nodes.end,a=t&&(t.f&$t)===0?t.nodes.start:r;n!==null;){var o=Jr(n);if(a.before(n),n===i)return;n=o}}function Yt(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function ve(e,t,r,n,i){var s,l;if((s=t.$$host)!=null&&s.$$shadowRoot){const c=_i("slot");C(e,c);return}var a=(l=t.$$slots)==null?void 0:l[r],o=!1;a===!0&&(a=t.children,o=!0),a===void 0||a(e,o?()=>n:n)}function nl(e,t,r){var n=new Ai(e);en(()=>{var i=t()??null;n.ensure(i,i&&(a=>r(a,i)))},jt)}function il(e,t,r,n,i,a){var o=null,s=e,l=new Ai(s,!1);en(()=>{const c=t()||null;var d=Ko;if(c===null){l.ensure(null,null);return}return l.ensure(c,v=>{if(c){if(o=_i(c,d),nn(o,o),n){var m=null,h=o.appendChild(zt());n(o,h),m==null||m.remove()}W.nodes.end=o,v.before(o)}}),()=>{}},jt),Rn(()=>{})}function al(e,t){var r=void 0,n;Ma(()=>{r!==(r=t())&&(n&&(Oe(n),n=null),r&&(n=Xe(()=>{mi(()=>r(e))})))})}function qa(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=qa(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function ol(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=qa(e))&&(n&&(n+=" "),n+=t);return n}function Cr(e){return typeof e=="object"?ol(e):e??""}const Ya=[...` 	
\r\f \v\uFEFF`];function sl(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var i of Object.keys(r))if(r[i])n=n?n+" "+i:i;else if(n.length)for(var a=i.length,o=0;(o=n.indexOf(i,o))>=0;){var s=o+a;(o===0||Ya.includes(n[o-1]))&&(s===n.length||Ya.includes(n[s]))?n=(o===0?"":n.substring(0,o))+n.substring(s+1):o=s}}return n===""?null:n}function Ka(e,t=!1){var r=t?" !important;":";",n="";for(var i of Object.keys(e)){var a=e[i];a!=null&&a!==""&&(n+=" "+i+": "+a+r)}return n}function Ti(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function ll(e,t){if(t){var r="",n,i;if(Array.isArray(t)?(n=t[0],i=t[1]):n=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var a=!1,o=0,s=!1,l=[];n&&l.push(...Object.keys(n).map(Ti)),i&&l.push(...Object.keys(i).map(Ti));var c=0,d=-1;const E=e.length;for(var v=0;v<E;v++){var m=e[v];if(s?m==="/"&&e[v-1]==="*"&&(s=!1):a?a===m&&(a=!1):m==="/"&&e[v+1]==="*"?s=!0:m==='"'||m==="'"?a=m:m==="("?o++:m===")"&&o--,!s&&a===!1&&o===0){if(m===":"&&d===-1)d=v;else if(m===";"||v===E-1){if(d!==-1){var h=Ti(e.substring(c,d).trim());if(!l.includes(h)){m!==";"&&v++;var g=e.substring(c,v).trim();r+=" "+g+";"}}c=v+1,d=-1}}}}return n&&(r+=Ka(n)),i&&(r+=Ka(i,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function De(e,t,r,n,i,a){var o=e[ii];if(o!==r||o===void 0){var s=sl(r,n,a);s==null?e.removeAttribute("class"):t?e.className=s:e.setAttribute("class",s),e[ii]=r}else if(a&&i!==a)for(var l in a){var c=!!a[l];(i==null||c!==!!i[l])&&e.classList.toggle(l,c)}return a}function Ni(e,t={},r,n){for(var i in r){var a=r[i];t[i]!==a&&(r[i]==null?e.style.removeProperty(i):e.style.setProperty(i,a,n))}}function Bn(e,t,r,n){var i=e[ai];if(i!==t){var a=ll(t,n);a==null?e.removeAttribute("style"):e.style.cssText=a,e[ai]=t}else n&&(Array.isArray(n)?(Ni(e,r==null?void 0:r[0],n[0]),Ni(e,r==null?void 0:r[1],n[1],"important")):Ni(e,r,n));return n}function Za(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Qa(e,t){var r=!("__defaultValue"in e);!r&&e.__defaultValue===t||(e.__defaultValue=t,Ja(e,!r||"__value"in e))}function Ja(e,t){var r=e.__defaultValue,n=e.multiple,i=n?r??[]:null;if(!(n&&!ce(i))){var a=e.selectedIndex,o=t&&n?new Set(e.selectedOptions):null;for(var s of e.options){var l=Ci(s);Za(s,n?i.includes(l):ya(l,r))}if(t)if(o!==null)for(s of e.options){var c=o.has(s);s.selected!==c&&(s.selected=c)}else e.selectedIndex!==a&&(e.selectedIndex=a)}}function Ot(e,t,r=!1){if(e.multiple){if(t==null)return;if(!ce(t))return Jo();for(var n of e.options)n.selected=t.includes(Ci(n));return}for(n of e.options){var i=Ci(n);if(ya(i,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function Kt(e){var t=new MutationObserver(r=>{r.every(cl)||("__defaultValue"in e&&Ja(e,!1),"__value"in e&&Ot(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Rn(()=>{t.disconnect()})}function Ci(e){return"__value"in e?e.__value:e.value}function cl(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(r=>r.nodeName==="SELECTEDCONTENT")}return!1}const sn=Symbol("class"),ln=Symbol("style"),eo=Symbol("is custom element"),to=Symbol("is html"),ul=Nn?"input":"INPUT",fl=Nn?"option":"OPTION",ro=Nn?"select":"SELECT",dl=Nn?"progress":"PROGRESS";function cn(e,t){var r=Vn(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==dl)||(e.value=t??"")}function vl(e,t){var r=Vn(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function Te(e,t,r,n){var i=Vn(e);i[t]!==(i[t]=r)&&(t==="loading"&&(e[Bo]=r),r==null?e.removeAttribute(t):typeof r!="string"&&ao(e).has(t)?e[t]=r:e.setAttribute(t,r))}function pl(e,t,r,n,i=!1,a=!1){var o=Vn(e),s=o[eo],l=!o[to],c=t||{},d=e.nodeName===fl,v=e.nodeName===ro;for(var m in t)!(m in r)&&m[0]+m[1]!=="$$"&&(r[m]=null);r.class?r.class=Cr(r.class):r[sn]&&(r.class=null),r[ln]&&(r.style??(r.style=null));var h=ao(e);if(e.nodeName===ul&&"type"in r&&("value"in r||"__value"in r)){var g=r.type;(g!==c.type||g===void 0&&e.hasAttribute("type"))&&(c.type=g,Te(e,"type",g))}for(const x in r){let M=r[x];if(d&&x==="value"&&M==null){e.value=e.__value="",c[x]=M;continue}if(x==="class"){var E=e.namespaceURI==="http://www.w3.org/1999/xhtml";De(e,E,M,n,t==null?void 0:t[sn],r[sn]),c[x]=M,c[sn]=r[sn];continue}if(x==="style"){Bn(e,M,t==null?void 0:t[ln],r[ln]),c[x]=M,c[ln]=r[ln];continue}var p=c[x];if(!(M===p&&!(M===void 0&&e.hasAttribute(x)))){c[x]=M;var w=x[0]+x[1];if(w!=="$$")if(w==="on"){const T={},I="$$"+x;let S=x.slice(2);var k=Bs(S);if(zs(S)&&(S=S.slice(0,-7),T.capture=!0),!k&&p){if(M!=null)continue;e.removeEventListener(S,c[I],T),c[I]=null}if(k)q(S,e,M),qt([S]);else if(M!=null){let $=function(R){c[x].call(this,R)};c[I]=ja(S,e,$,T)}}else if(x==="style")Te(e,x,M);else if(x==="autofocus")gs(e,!!M);else if(!s&&(x==="__value"||x==="value"&&M!=null))e.value=e.__value=M;else if(x==="selected"&&d)Za(e,M);else{var _=x;l||(_=Fs(_));var A=_==="defaultValue"||_==="defaultChecked";if(v&&_==="defaultValue")continue;if(M==null&&!s&&!A)if(o[x]=null,_==="value"||_==="checked"){let T=e;const I=t===void 0;if(_==="value"){let S=T.defaultValue;T.removeAttribute(_),T.defaultValue=S,T.value=T.__value=I?S:null}else{let S=T.defaultChecked;T.removeAttribute(_),T.defaultChecked=S,T.checked=I?S:!1}}else e.removeAttribute(x);else A||(s||typeof M!="string")&&h.has(_)?(e[_]=M,_ in o&&(o[_]=Ee)):typeof M!="function"&&Te(e,_,M)}}}return c}function no(e,t,r=[],n=[],i=[],a,o=!1,s=!1){oa(i,r,n,l=>{var c=void 0,d={},v=e.nodeName===ro,m=!1;if(Ma(()=>{var g=t(...l.map(f)),E=pl(e,c,g,a,o,s);if(m&&v){var p=e;"defaultValue"in g&&Qa(p,g.defaultValue),"value"in g&&Ot(p,g.value)}for(let k of Object.getOwnPropertySymbols(d))g[k]||Oe(d[k]);for(let k of Object.getOwnPropertySymbols(g)){var w=g[k];k.description===Zo&&(!c||w!==c[k])&&(d[k]&&Oe(d[k]),d[k]=Xe(()=>al(e,()=>w))),E[k]=w}c=E}),v){var h=e;mi(()=>{var g=c;"defaultValue"in g&&Qa(h,g.defaultValue),Ot(h,g.value,!0),Kt(h)})}m=!0})}function Vn(e){return e[Tn]??(e[Tn]={[eo]:e.nodeName.includes("-"),[to]:e.namespaceURI===ra})}var io=new Map;function ao(e){var t=e.getAttribute("is")||e.nodeName,r=io.get(t);if(r)return r;io.set(t,r=new Set);for(var n,i=e,a=Element.prototype;a!==i;){n=Gi(i);for(var o in n)n[o].set&&o!=="innerHTML"&&o!=="textContent"&&o!=="innerText"&&r.add(o);i=Jn(i)}return r}function Oi(e,t){return e===t||(e==null?void 0:e[At])===t}function Pi(e=oi(),t,r,n){var i=me.r,a=W;return mi(()=>{var o,s;return Aa(()=>{o=s,s=[],Gt(()=>{Oi(r(...s),e)||(t(e,...s),o&&Oi(r(...o),e)&&t(null,...o))})}),()=>{let l=a;for(;l!==i&&l.parent!==null&&l.parent.f&$n;)l=l.parent;const c=()=>{s&&Oi(r(...s),e)&&t(null,...s)},d=l.teardown;l.teardown=()=>{c(),d==null||d()}}}),e}function hl(e=!1){const t=me,r=t.l.u;if(!r)return;let n=()=>ur(t.s);if(e){let i=0,a={};const o=Ar(()=>{let s=!1;const l=t.s;for(const c in l)l[c]!==a[c]&&(a[c]=l[c],s=!0);return s&&i++,i});n=()=>f(o)}r.b.length&&Ns(()=>{oo(t,n),ei(r.b)}),or(()=>{const i=Gt(()=>r.m.map(zo));return()=>{for(const a of i)typeof a=="function"&&a()}}),r.a.length&&or(()=>{oo(t,n),ei(r.a)})}function oo(e,t){if(e.l.s)for(const r of e.l.s)f(r);t()}let Fn=!1;function _l(e){var t=Fn;try{return Fn=!1,[e(),Fn]}finally{Fn=t}}const gl={get(e,t){if(!e.exclude.includes(t))return f(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var n=W;try{lt(e.parent_effect),e.special[t]=ut({get[t](){return e.props[t]}},t,ta)}finally{lt(n)}}return e.special[t](r),_a(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),_a(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function fe(e,t){return new Proxy({props:e,exclude:t,special:{},version:Xt(0),parent_effect:W},gl)}const ml={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Ur(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let i=e.props[n];Ur(i)&&(i=i());const a=Ut(i,t);if(a&&a.set)return a.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Ur(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const i=Ut(n,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===At||t===Ji)return!1;for(let r of e.props)if(Ur(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Ur(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function he(...e){return new Proxy({props:e},ml)}function ut(e,t,r,n){var A;var i=!Sr||(r&Wo)!==0,a=(r&Xo)!==0,o=(r&Go)!==0,s=n,l=!0,c=void 0,d=()=>o&&i?(c??(c=Ar(n)),f(c)):(l&&(l=!1,s=o?Gt(n):n),s);let v;if(a){var m=At in e||Ji in e;v=((A=Ut(e,t))==null?void 0:A.set)??(m&&t in e?x=>e[t]=x:void 0)}var h,g=!1;a?[h,g]=_l(()=>e[t]):h=e[t],h===void 0&&n!==void 0&&(h=d(),v&&(i&&cs(),v(h)));var E;if(i?E=()=>{var x=e[t];return x===void 0?d():(l=!0,x)}:E=()=>{var x=e[t];return x!==void 0&&(s=void 0),x===void 0?s:x},i&&(r&ta)===0)return E;if(v){var p=e.$$legacy;return(function(x,M){return arguments.length>0?((!i||!M||p||g)&&v(M?E():x),x):E()})}var w=!1,k=((r&jo)!==0?Ar:li)(()=>(w=!1,E()));a&&f(k);var _=W;return(function(x,M){if(arguments.length>0){const T=M?f(k):i&&a?ze(x):x;return N(k,T),w=!0,s!==void 0&&(s=T),x}return Dt&&w||(_.f&Fe)!==0?k.v:f(k)})}function Hn(e){me===null&&rs(),Sr&&me.l!==null?yl(me).m.push(e):or(()=>{const t=Gt(e);if(typeof t=="function")return t})}function yl(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const wl="5";typeof window<"u"&&((yo=window.__svelte??(window.__svelte={})).v??(yo.v=new Set)).add(wl);const Y=ze({ready:!1,cleanScreen:!1,panelOpen:!0,settingsOpen:!1,startupOpen:!0,focusSection:null,focusNonce:0,popupSection:null,dockExpanded:!1,search:"",status:{}});function bl(e){Y.popupSection=Y.popupSection===e?null:e}const He=ze({});function so(e){try{return structuredClone(e)}catch{return JSON.parse(JSON.stringify(e))}}function oe(e){var t,r,n;if(e==null)return e;try{return((n=(r=(t=window.XRA)==null?void 0:t.i18n)==null?void 0:r.t)==null?void 0:n.call(r,e))??e}catch{return e}}function Ye(e,t){const r=e.split(".");let n=He;for(const i of r){if(n==null)return t;n=n[i]}return n===void 0?t:n}function xl(e){var r,n,i,a,o,s,l,c;const t=window.XRA;if(t){if(e.startsWith("background.")){(n=(r=t.background)==null?void 0:r.apply)==null||n.call(r);return}if(e==="ui.language"){(a=(i=t.i18n)==null?void 0:i.setLanguage)==null||a.call(i,He.ui.language);return}if(e==="ui.preview_wireframe"){typeof t.applyMocapWireframeVisibility=="function"&&t.applyMocapWireframeVisibility();return}if(e==="ui.mocap_view"){typeof t.applyMocapWireframeVisibility=="function"&&t.applyMocapWireframeVisibility();return}if(e.startsWith("performance.")){window.XRA_render_fps_limit=Number(He.performance.render_fps??60),window.XRA_gpu_preference=String(He.performance.gpu_preference||"default"),window.XRA_preserve_drawing_buffer=He.performance.preserve_drawing_buffer!==!1,window.XRA_antialias=He.performance.antialias!=="off",(s=(o=t.events)==null?void 0:o.emit)==null||s.call(o,"performance",He.performance);return}(c=(l=t.events)==null?void 0:l.emit)==null||c.call(l,"config-change",{path:e,value:Ye(e)})}}function Qe(e,t){var a,o;const r=window.XRA,n=e.split(".");let i=He;for(let s=0;s<n.length-1;s++)i[n[s]]==null&&(i[n[s]]={}),i=i[n[s]];if(i[n[n.length-1]]=t,r!=null&&r.config){let s=r.config;for(let l=0;l<n.length-1;l++)s[n[l]]==null&&(s[n[l]]={}),s=s[n[l]];s[n[n.length-1]]=t}xl(e);try{(o=(a=r==null?void 0:r.profileService)==null?void 0:a.save)==null||o.call(a)}catch{}}function Un(e,t,r){return new Promise((n,i)=>{const a=setTimeout(()=>i(new Error(`${r} timed out after ${t} ms`)),t);Promise.resolve(e).then(o=>{clearTimeout(a),n(o)},o=>{clearTimeout(a),i(o)})})}async function lo({timeout:e=12e3,dataTimeout:t=8e3}={}){var n,i,a;const r=(n=window.XRA)==null?void 0:n.nativeBridge;if(!(r!=null&&r.startNativeStreamer))throw new Error("native bridge unavailable");try{await Un(r.startNativeStreamer(),e,"Camera start");const o=performance.now()+t;for(;performance.now()<o;){if((i=r.cameraDataReady)!=null&&i.call(r))return!0;await new Promise(s=>setTimeout(s,120))}return!0}catch(o){try{await((a=r.forceStopCamera)==null?void 0:a.call(r))}catch{}throw o}}async function kl({timeout:e=8e3}={}){var r,n;const t=(r=window.XRA)==null?void 0:r.nativeBridge;if(t!=null&&t.stopNativeStreamer)try{await Un(t.stopNativeStreamer(),e,"Camera stop")}catch(i){try{await((n=t.forceStopCamera)==null?void 0:n.call(t))}catch{}throw i}}async function Sl({timeout:e=12e3,readyTimeout:t=6e3}={}){var n,i,a,o;const r=(n=window.XRA)==null?void 0:n.recorder;if(!(r!=null&&r.start))throw new Error("recorder unavailable");try{await Un(r.start(),e,"Recording start");const s=performance.now()+t;for(;performance.now()<s;){if((a=(i=r.status)==null?void 0:i.call(r))!=null&&a.active)return!0;await new Promise(l=>setTimeout(l,120))}return!0}catch(s){try{await((o=r.stop)==null?void 0:o.call(r))}catch{}throw s}}async function El({timeout:e=8e3}={}){var r,n;const t=(r=window.XRA)==null?void 0:r.recorder;if(t!=null&&t.stop)try{await Un(t.stop(),e,"Recording stop")}catch(i){try{await((n=t.stop)==null?void 0:n.call(t))}catch{}throw i}}function jn(){var e,t,r;Y.cleanScreen=!Y.cleanScreen,document.body.classList.toggle("xra-total-clean-screen",Y.cleanScreen);try{(r=(t=(e=window.XRA)==null?void 0:e.ui)==null?void 0:t.setHidden)==null||r.call(t,Y.cleanScreen)}catch{}}function $l(){var e;try{Object.assign(He,so(((e=window.XRA)==null?void 0:e.config)||{}))}catch{}}function co(){var e;try{const t=(e=window.SA_bridge)==null?void 0:e.backend;t&&typeof t.status=="function"&&(Y.status=t.status()||{})}catch{}}function Al(){const e=()=>window.XRA&&window.XRA.config?(Object.assign(He,so(window.XRA.config)),Y.ready=!0,co(),window.addEventListener("keydown",t=>{t.key==="Escape"&&Y.cleanScreen&&(t.preventDefault(),jn())},!0),!0):!1;if(!e()){const t=setInterval(()=>{e()&&clearInterval(t)},200)}}const Ml={camera:{title:"Camera",icon:"Camera"},devices:{title:"Devices",icon:"SlidersHorizontal"},pose_model:{title:"Pose model",icon:"PersonStanding"},performance:{title:"Performance",icon:"Zap"},tracking:{title:"Motion capture",icon:"Activity"},body:{title:"Body",icon:"PersonStanding"},collider:{title:"Body collider",icon:"Shield"},lip:{title:"Audio & Lip-sync",icon:"Mic"},background:{title:"Background",icon:"Image"},avatar:{title:"Character position (avatar only)",icon:"User"},second_avatar:{title:"Remote avatar (Studio Link)",icon:"Globe"},stage:{title:"3D Stage & Environment",icon:"Landmark"},recorder:{title:"Recording / capture",icon:"Video"},visual_effects:{title:"Visual effects",icon:"Sparkles"},debug:{title:"Diagnostics",icon:"Bug"},ui:{title:"UI & overlays",icon:"Monitor"}},uo=["performance","tracking","body","collider","lip","background","stage","avatar","second_avatar","recorder","visual_effects","debug","ui","camera","devices","pose_model"],Tl=new Set(["left_settings","_custom_","_excluded_"]),Nl=new Set(["camera.view_presets","camera.selected_view_preset","ui.preview_video","ui.preview_wireframe","ui.preview_debug","performance.auto_last_result","performance.tracker_backend","recorder.output_dir"]);function fo(e){const t=String(e).replace(/_/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").trim();return t.charAt(0).toUpperCase()+t.slice(1)}const un=e=>{var t;return String(((t=e.tracking)==null?void 0:t.guard_mode)||"").toLowerCase()!=="off"},Cl={"ui.language":{type:"select",options:()=>{var e,t;return((t=(e=window.XRA)==null?void 0:e.i18n)==null?void 0:t.LANGUAGES)||[["en","English"]]}},"background.mode":{type:"select",options:[["color","Color"],["image","Image"],["none","None (transparent · OBS)"]]},"background.color":{type:"color",when:e=>{var t;return((t=e.background)==null?void 0:t.mode)==="color"}},"background.path":{type:"text",when:e=>{var t;return((t=e.background)==null?void 0:t.mode)==="image"},desc:"Path or file name of the background image."},"ui.mocap_view":{type:"select",label:"Mocap window",options:[["off","Off"],["both","Webcam + skeleton"],["wireframe","Skeleton only"],["video","Webcam only"]]},"ui.mocap_visibility":{type:"select",label:"Mocap window visibility",options:[["always","Always on (black while idle)"],["auto","Auto (hide when tracking is off)"]]},"performance.tracking_pipeline":{type:"select",label:"Tracking mode",options:[["FULL_BODY","Full Body"],["FACE","Face only"],["UPPER_BODY","Upper body"]]},"performance.render_resolution":{type:"select",options:[["720p","720p (HD · GPU Saving)"],["1080p","1080p (Full HD · Recommended)"],["1440p","1440p (2K · High resolution)"]]},"performance.render_fps":{type:"slider",min:15,max:240,step:1},"performance.gpu_preference":{type:"select",label:"Graphics card (GPU)",options:[["default","Default"],["high-performance","Dedicated GPU (High Performance)"],["low-power","Integrated GPU (Low Power)"]]},"performance.shadows":{type:"select",options:[["auto","Auto"],["on","Enabled"],["off","Disabled (GPU saving)"]]},"performance.antialias":{type:"select",label:"Anti-Aliasing (AA)",options:[["auto","Enabled (Hardware MSAA · Recommended)"],["off","Disabled"]]},"performance.spring_bone":{type:"select",label:"Hair/cloth physics (Spring Bone)",options:[["full","Full (every frame)"],["half","Half (1 frame out of 2 · Saving)"],["off","Off"]]},"performance.infer_mode":{type:"select",options:[["native","Native (Auto)"],["640x360","640×360 (Recommended · 30 FPS smooth)"],["640x480","640×480 (Standard 4:3 format)"],["1280x720","1280×720 (HD 720p · High precision)"]]},"performance.pose_fps":{type:"slider",min:5,max:30,step:1},"performance.hand_fps":{type:"slider",min:5,max:30,step:1},"performance.min_tracking_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_pose_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_face_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_joint_confidence":{type:"slider",min:.05,max:1,step:.05},"tracking.hand_recovery_mode":{type:"select",options:[["normal","Normal"],["aggressive","Aggressive"],["off","Off"]],desc:"How the backend re-acquires hands after they leave the frame."},"tracking.hand_detection_sensitivity":{type:"select",options:[["high","High"],["normal","Normal"],["low","Low"]]},"tracking.stabilize_hand_percent":{type:"slider",min:0,max:100,step:1,group:"Stabilization"},"tracking.stabilize_arm":{type:"slider",min:0,max:100,step:1},"tracking.stabilize_arm_time":{type:"slider",min:0,max:2,step:.05},"tracking.native_smoothing":{type:"slider",min:0,max:1,step:.01,group:"Smoothing"},"tracking.adaptive_smoothing_strength":{type:"slider",min:0,max:1,step:.01},"tracking.body_bend_reduction":{type:"slider",min:0,max:1,step:.01,group:"Body"},"tracking.upper_body_guard":{type:"toggle",group:"Guard",desc:"Hold the upper body steady when tracking confidence drops."},"tracking.upper_body_guard_strength":{type:"slider",min:0,max:1,step:.01,group:"Guard",enabled:e=>{var t;return!!((t=e.tracking)!=null&&t.upper_body_guard)}},"tracking.guard_mode":{type:"select",group:"Guard",options:[["off","Off"],["auto","Auto"]],desc:"Auto re-acquires tracking after an occlusion or a fast jump."},"tracking.guard_jump_deg":{type:"slider",min:5,max:120,step:1,enabled:un,desc:"Largest sudden joint-angle jump (deg) treated as noise."},"tracking.guard_hold_ms":{type:"slider",min:0,max:2e3,step:10,enabled:un,desc:"How long to hold the pose before re-acquiring (ms)."},"tracking.guard_reacquire_deg":{type:"slider",min:5,max:120,step:1,enabled:un,desc:"Angle (deg) needed to end the hold and resume tracking."},"tracking.guard_confidence_min":{type:"slider",min:0,max:1,step:.01,enabled:un},"tracking.guard_release_ms":{type:"slider",min:0,max:2e3,step:10,enabled:un},"tracking.desk_torso_lock":{type:"slider",min:0,max:1,step:.01,group:"Desk lock",desc:"Lock torso rotation when working at a desk."},"tracking.desk_hips_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_legs_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_max_yaw_deg":{type:"slider",min:0,max:90,step:1},"tracking.desk_max_pitch_deg":{type:"slider",min:0,max:90,step:1},"tracking.desk_max_roll_deg":{type:"slider",min:0,max:90,step:1},"body.anchor_strength":{type:"slider",min:0,max:1,step:.01},"body.transition_ms":{type:"slider",min:0,max:2e3,step:10},"avatar.offset_x":{type:"slider",min:-5,max:5,step:.01},"avatar.offset_y":{type:"slider",min:-5,max:5,step:.01},"avatar.offset_z":{type:"slider",min:-5,max:5,step:.01},"avatar.rotation_y":{type:"slider",min:-180,max:180,step:1},"second_avatar.offset_x":{type:"slider",min:-20,max:20,step:.1},"second_avatar.offset_y":{type:"slider",min:-10,max:10,step:.1},"second_avatar.offset_z":{type:"slider",min:-10,max:10,step:.1},"second_avatar.rotation_y":{type:"slider",min:-180,max:180,step:1},"stage.scale":{type:"slider",min:.1,max:5,step:.01},"stage.rotation_x":{type:"slider",min:-180,max:180,step:1},"stage.rotation_y":{type:"slider",min:-180,max:180,step:1},"stage.rotation_z":{type:"slider",min:-180,max:180,step:1},"stage.offset_x":{type:"slider",min:-10,max:10,step:.05},"stage.offset_y":{type:"slider",min:-10,max:10,step:.05},"stage.offset_z":{type:"slider",min:-10,max:10,step:.05},"stage.scene_zoom":{type:"slider",min:.5,max:3,step:.01},"stage.lights_intensity":{type:"slider",min:0,max:3,step:.05},"collider.preset":{type:"select",options:[["CUSTOM","Custom"],["NONE","None"]]},"collider.reaction":{type:"select",options:[["z_push","Z push"],["bounce","Bounce"],["block","Block"]]},"collider.head":{type:"slider",min:0,max:200,step:1},"collider.chest":{type:"slider",min:0,max:200,step:1},"collider.waist":{type:"slider",min:0,max:200,step:1},"collider.hip":{type:"slider",min:0,max:200,step:1},"collider.front_clearance":{type:"slider",min:0,max:50,step:1},"lip.analysis_fps":{type:"slider",min:5,max:60,step:1},"lip.fft_size":{type:"select",label:"FFT size",options:[["256","256"],["512","512"],["1024","1024"],["2048","2048"]]},"lip.mic_mix":{type:"slider",min:0,max:1,step:.01},"lip.threshold":{type:"slider",min:0,max:.2,step:.001},"lip.response_gain":{type:"slider",min:0,max:3,step:.05},"lip.vowel_emphasis":{type:"slider",min:0,max:3,step:.05},"recorder.mode":{type:"select",label:"Recording source",options:[["video_audio","Video + Audio"],["video","Video only"],["audio","Audio only"]]},"recorder.audio_only_variant":{type:"select",label:"Audio only mode",options:[["both","Processed + RAW"],["processed","Processed"],["raw","RAW"]]},"recorder.capture_source":{type:"select",label:"Output source",options:[["classic_v74","Classic output · recommended"],["clean_scene","Clean scene output · experimental (no UI)"],["native_xr","XR native video only · fallback"]]},"recorder.output_format":{type:"select",options:[["webm","WebM"],["mp4","MP4"]]},"recorder.audio_profile":{type:"select",options:[["podcast","Podcast"],["call","Call (Browser echo/noise filters)"]]},"recorder.hardware_encode":{type:"select",options:[["auto","Auto"],["on","On"],["off","Off (CPU)"]]},"recorder.width":{type:"slider",min:320,max:3840,step:2},"recorder.height":{type:"slider",min:240,max:2160,step:2},"recorder.fps":{type:"slider",min:15,max:60,step:1},"recorder.gate_threshold_db":{type:"slider",min:-80,max:-5,step:.5},"recorder.gate_hold_ms":{type:"slider",min:0,max:1e3,step:10},"recorder.gate_release_ms":{type:"slider",min:0,max:1e3,step:10},"recorder.video_bps":{type:"slider",min:5e5,max:2e7,step:1e5},"recorder.audio_bps":{type:"slider",min:32e3,max:32e4,step:8e3},"recorder.segment_minutes":{type:"select",options:[["0","Off"],["30","Every 30 min"],["60","Every 60 min"]]},"recorder.raw_audio_format":{type:"select",options:[["flac","FLAC (lossless)"],["wav","WAV (large)"]]},"recorder.filename":{type:"text"},"camera.optimized":{type:"toggle"},"camera.width":{type:"slider",min:160,max:1920,step:2},"camera.height":{type:"slider",min:120,max:1080,step:2},"camera.fps":{type:"slider",min:5,max:60,step:1}};function Ol(e){const t=[];for(const[r,n]of Object.entries(e||{})){if(Tl.has(r)||!n||typeof n!="object"||Array.isArray(n))continue;const i=Ml[r]||{},a=[];for(const[o,s]of Object.entries(n)){const l=`${r}.${o}`;if(Nl.has(l))continue;const c=Cl[l]||{};if(c.hidden||s!==null&&typeof s=="object")continue;const d=c.type||(typeof s=="boolean"?"toggle":typeof s=="number"?"number":"text");a.push({type:d,path:l,label:c.label||fo(o),min:c.min,max:c.max,step:c.step,options:c.options,when:c.when,enabled:c.enabled,group:c.group,desc:c.desc})}a.length&&t.push({id:r,title:i.title||fo(r),icon:i.icon||"⚙",controls:a})}return t.sort((r,n)=>{const i=uo.indexOf(r.id),a=uo.indexOf(n.id);return(i<0?999:i)-(a<0?999:a)}),t}var Pl=de("<option> </option>"),Rl=de("<select></select>"),Ll=de("<select><option> </option><option> </option></select>"),Il=de('<span class="xra-val"> </span> <div class="xra-meter-wrap"><div class="xra-meter"></div> <input class="xra-meter-input" type="range"/> <div class="xra-meter-scale"><span> </span><span> </span></div></div>',1),zl=de('<input type="checkbox"/>'),Dl=de('<input type="color"/>'),Bl=de('<input type="number"/>'),Vl=de('<input type="text"/>'),Fl=de('<label><span class="xra-row-label"> </span> <!></label>');function Hl(e,t){gt(t,!0);let r=ut(t,"disabled",3,!1);const n=Ie(()=>typeof t.control.options=="function"?t.control.options():t.control.options||[]),i=k=>k===!1?"off":"auto",a=k=>k==="off"?!1:null;var o=Fl();let s;var l=L(o),c=U(l,!0),d=O(l,2);{var v=k=>{var _=Rl();Bt(_,21,()=>f(n),Xa,(x,M)=>{var T=Pl(),I=U(T,!0),S={};ue($=>{V(I,$),S!==(S=f(M)[0])&&(T.value=(T.__value=S)??"")},[()=>oe(f(M)[1])]),C(x,T)});var A;Kt(_),ue(x=>{_.disabled=r(),A!==(A=x)&&(_.value=(_.__value=A)??"",Ot(_,A))},[()=>Ye(t.control.path)]),q("change",_,x=>Qe(t.control.path,x.currentTarget.value)),C(k,_)},m=k=>{var _=Ll(),A=L(_),x=U(A,!0);A.value=A.__value="auto";var M=O(A),T=U(M,!0);M.value=M.__value="off";var I;Kt(_),ue((S,$,R)=>{_.disabled=r(),V(x,S),V(T,$),I!==(I=R)&&(_.value=(_.__value=I)??"",Ot(_,I))},[()=>oe("Auto (follow tracking)"),()=>oe("Off"),()=>i(Ye(t.control.path))]),q("change",_,S=>Qe(t.control.path,a(S.currentTarget.value))),C(k,_)},h=k=>{const _=Ie(()=>Number(Ye(t.control.path,t.control.min))),A=Ie(()=>t.control.max>t.control.min?Math.round((f(_)-t.control.min)/(t.control.max-t.control.min)*100):0);var x=Il(),M=J(x),T=U(M,!0),I=O(M,2),S=L(I),$=O(S,2),R=O($,2),ee=L(R),X=U(ee,!0),ae=O(ee),te=U(ae,!0);ue($e=>{V(T,$e),Bn(S,`--xra-fill:${f(A)??""}%`),Te($,"min",t.control.min),Te($,"max",t.control.max),Te($,"step",t.control.step),cn($,f(_)),$.disabled=r(),V(X,t.control.min),V(te,t.control.max)},[()=>Ye(t.control.path)]),q("input",$,$e=>Qe(t.control.path,Number($e.currentTarget.value))),C(k,x)},g=k=>{var _=zl();ue(A=>{vl(_,A),_.disabled=r()},[()=>!!Ye(t.control.path)]),q("change",_,A=>Qe(t.control.path,A.currentTarget.checked)),C(k,_)},E=k=>{var _=Dl();ue(A=>{cn(_,A),_.disabled=r()},[()=>Ye(t.control.path)]),q("input",_,A=>Qe(t.control.path,A.currentTarget.value)),C(k,_)},p=k=>{var _=Bl();ue(A=>{Te(_,"step",t.control.step||"any"),cn(_,A),_.disabled=r()},[()=>Ye(t.control.path,0)]),q("input",_,A=>Qe(t.control.path,Number(A.currentTarget.value))),C(k,_)},w=k=>{var _=Vl();ue(A=>{cn(_,A),_.disabled=r()},[()=>Ye(t.control.path,"")]),q("change",_,A=>Qe(t.control.path,A.currentTarget.value)),C(k,_)};qe(d,k=>{t.control.type==="select"?k(v):t.control.type==="tristate"?k(m,1):t.control.type==="slider"?k(h,2):t.control.type==="toggle"?k(g,3):t.control.type==="color"?k(E,4):t.control.type==="number"?k(p,5):t.control.type==="text"&&k(w,6)})}ue(k=>{s=De(o,1,"xra-row",null,s,{"xra-row-slider":t.control.type==="slider",disabled:r()}),Te(l,"title",t.control.desc||""),V(c,k)},[()=>oe(t.control.label)]),C(e,o),mt()}qt(["change","input"]);var Ul=de('<div class="xra-group"> </div>');function vo(e,t){gt(t,!0);const r=Ie(()=>{const a=(Y.search||"").trim().toLowerCase(),o=[];let s=null;for(const l of t.section.controls)l.when&&!l.when(He)||a&&!`${l.label} ${l.path}`.toLowerCase().includes(a)||(l.group&&l.group!==s?(o.push({header:l.group}),s=l.group):l.group||(s=null),o.push({control:l,disabled:l.enabled?!l.enabled(He):!1}));return o});var n=re(),i=J(n);Bt(i,19,()=>f(r),(a,o)=>a.header?`g${o}`:a.control.path,(a,o)=>{var s=re(),l=J(s);{var c=v=>{var m=Ul(),h=U(m,!0);ue(()=>V(h,f(o).header)),C(v,m)},d=v=>{Hl(v,{get control(){return f(o).control},get disabled(){return f(o).disabled}})};qe(l,v=>{f(o).header?v(c):v(d,-1)})}C(a,s)}),C(e,n),mt()}ps();/**
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
 */const jl={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
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
 */const po=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();var Xl=Xs("<svg><!><!></svg>");function _e(e,t){const r=fe(t,["children","$$slots","$$events","$$legacy"]),n=fe(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);gt(t,!1);let i=ut(t,"name",8,void 0),a=ut(t,"color",8,"currentColor"),o=ut(t,"size",8,24),s=ut(t,"strokeWidth",8,2),l=ut(t,"absoluteStrokeWidth",8,!1),c=ut(t,"iconNode",24,()=>[]);hl();var d=Xl();no(d,(h,g,E)=>({...jl,...h,...n,width:o(),height:o(),stroke:a(),"stroke-width":g,class:E}),[()=>Wl(n)?void 0:{"aria-hidden":"true"},()=>(ur(l()),ur(s()),ur(o()),Gt(()=>l()?Number(s())*24/Number(o()):s())),()=>(ur(po),ur(i()),ur(r),Gt(()=>po("lucide-icon","lucide",i()?`lucide-${i()}`:"",r.class)))]);var v=L(d);Bt(v,1,c,Xa,(h,g)=>{var E=Ie(()=>Ki(f(g),2));let p=()=>f(E)[0],w=()=>f(E)[1];var k=re(),_=J(k);il(_,p,!0,(A,x)=>{no(A,()=>({...w()}))}),C(h,k)});var m=O(v);ve(m,t,"default",{}),C(e,d),mt()}function Gl(e,t){const r=fe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];_e(e,he({name:"camera"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=re(),s=J(o);ve(s,t,"default",{}),C(i,o)},$$slots:{default:!0}}))}function ql(e,t){const r=fe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 5H3"}],["path",{d:"M12 19H3"}],["path",{d:"M14 3v4"}],["path",{d:"M16 17v4"}],["path",{d:"M21 12h-9"}],["path",{d:"M21 19h-5"}],["path",{d:"M21 5h-7"}],["path",{d:"M8 10v4"}],["path",{d:"M8 12H3"}]];_e(e,he({name:"sliders-horizontal"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=re(),s=J(o);ve(s,t,"default",{}),C(i,o)},$$slots:{default:!0}}))}function Yl(e,t){const r=fe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"5",r:"1"}],["path",{d:"m9 20 3-6 3 6"}],["path",{d:"m6 8 6 2 6-2"}],["path",{d:"M12 10v4"}]];_e(e,he({name:"person-standing"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=re(),s=J(o);ve(s,t,"default",{}),C(i,o)},$$slots:{default:!0}}))}function Kl(e,t){const r=fe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];_e(e,he({name:"zap"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=re(),s=J(o);ve(s,t,"default",{}),C(i,o)},$$slots:{default:!0}}))}function Zl(e,t){const r=fe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]];_e(e,he({name:"activity"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=re(),s=J(o);ve(s,t,"default",{}),C(i,o)},$$slots:{default:!0}}))}function Ql(e,t){const r=fe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];_e(e,he({name:"shield"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=re(),s=J(o);ve(s,t,"default",{}),C(i,o)},$$slots:{default:!0}}))}function Jl(e,t){const r=fe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 19v3"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3"}]];_e(e,he({name:"mic"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=re(),s=J(o);ve(s,t,"default",{}),C(i,o)},$$slots:{default:!0}}))}function ec(e,t){const r=fe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]];_e(e,he({name:"image"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=re(),s=J(o);ve(s,t,"default",{}),C(i,o)},$$slots:{default:!0}}))}function tc(e,t){const r=fe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 18v-7"}],["path",{d:"M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"}],["path",{d:"M14 18v-7"}],["path",{d:"M18 18v-7"}],["path",{d:"M3 22h18"}],["path",{d:"M6 18v-7"}]];_e(e,he({name:"landmark"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=re(),s=J(o);ve(s,t,"default",{}),C(i,o)},$$slots:{default:!0}}))}function rc(e,t){const r=fe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];_e(e,he({name:"user"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=re(),s=J(o);ve(s,t,"default",{}),C(i,o)},$$slots:{default:!0}}))}function nc(e,t){const r=fe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];_e(e,he({name:"globe"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=re(),s=J(o);ve(s,t,"default",{}),C(i,o)},$$slots:{default:!0}}))}function ic(e,t){const r=fe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]];_e(e,he({name:"video"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=re(),s=J(o);ve(s,t,"default",{}),C(i,o)},$$slots:{default:!0}}))}function ac(e,t){const r=fe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];_e(e,he({name:"sparkles"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=re(),s=J(o);ve(s,t,"default",{}),C(i,o)},$$slots:{default:!0}}))}function oc(e,t){const r=fe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 20v-9"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97"}],["path",{d:"M22 13h-4"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97"}],["path",{d:"M6 13H2"}],["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13"}]];_e(e,he({name:"bug"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=re(),s=J(o);ve(s,t,"default",{}),C(i,o)},$$slots:{default:!0}}))}function sc(e,t){const r=fe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]];_e(e,he({name:"monitor"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=re(),s=J(o);ve(s,t,"default",{}),C(i,o)},$$slots:{default:!0}}))}function lc(e,t){const r=fe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"10",r:"8"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 22h10"}],["path",{d:"M12 22v-4"}]];_e(e,he({name:"webcam"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=re(),s=J(o);ve(s,t,"default",{}),C(i,o)},$$slots:{default:!0}}))}function ho(e,t){const r=fe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}]];_e(e,he({name:"circle"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=re(),s=J(o);ve(s,t,"default",{}),C(i,o)},$$slots:{default:!0}}))}function cc(e,t){const r=fe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];_e(e,he({name:"square"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=re(),s=J(o);ve(s,t,"default",{}),C(i,o)},$$slots:{default:!0}}))}function uc(e,t){const r=fe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]];_e(e,he({name:"eye"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=re(),s=J(o);ve(s,t,"default",{}),C(i,o)},$$slots:{default:!0}}))}function fc(e,t){const r=fe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}],["path",{d:"m2 2 20 20"}]];_e(e,he({name:"eye-off"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=re(),s=J(o);ve(s,t,"default",{}),C(i,o)},$$slots:{default:!0}}))}function dc(e,t){const r=fe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];_e(e,he({name:"folder-open"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=re(),s=J(o);ve(s,t,"default",{}),C(i,o)},$$slots:{default:!0}}))}function vc(e,t){const r=fe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];_e(e,he({name:"info"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=re(),s=J(o);ve(s,t,"default",{}),C(i,o)},$$slots:{default:!0}}))}function pc(e,t){const r=fe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];_e(e,he({name:"x"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=re(),s=J(o);ve(s,t,"default",{}),C(i,o)},$$slots:{default:!0}}))}function hc(e,t){const r=fe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];_e(e,he({name:"settings"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=re(),s=J(o);ve(s,t,"default",{}),C(i,o)},$$slots:{default:!0}}))}function _c(e,t){const r=fe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];_e(e,he({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=re(),s=J(o);ve(s,t,"default",{}),C(i,o)},$$slots:{default:!0}}))}function Ke(e,t){const r={Camera:Gl,SlidersHorizontal:ql,PersonStanding:Yl,Zap:Kl,Activity:Zl,Shield:Ql,Mic:Jl,Image:ec,Landmark:tc,User:rc,Globe:nc,Video:ic,Sparkles:ac,Bug:oc,Monitor:sc,Webcam:lc,Circle:ho,Square:cc,Eye:uc,EyeOff:fc,FolderOpen:dc,Info:vc,X:pc,Settings:hc,RefreshCw:_c};let n=ut(t,"name",3,"Circle"),i=ut(t,"size",3,16),a=ut(t,"strokeWidth",3,2),o=ut(t,"class",3,"");const s=Ie(()=>r[n()]??ho);var l=re(),c=J(l);nl(c,()=>f(s),(d,v)=>{v(d,{get size(){return i()},get"stroke-width"(){return a()},get class(){return o()}})}),C(e,l)}var gc=de('<div class="xra-sec-body"><!></div>'),mc=de('<details class="xra-sec"><summary><span class="xra-sec-title"><!> <span> </span></span> <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></summary> <!></details>');function yc(e,t){gt(t,!0);const r="ui.sections_open";let n=H(ze(Gt(()=>{var w;return((w=Ye(r,{}))==null?void 0:w[t.section.id])??!1})));const i=Ie(()=>!!(Y.search||"").trim());let a;function o(){N(n,!f(n)),Qe(`${r}.${t.section.id}`,f(n))}or(()=>{Y.focusNonce,!(Y.focusSection!==t.section.id||!Y.panelOpen)&&(N(n,!0),Qe(`${r}.${t.section.id}`,!0),requestAnimationFrame(()=>a==null?void 0:a.scrollIntoView({block:"nearest",behavior:"smooth"})))});var s=mc(),l=L(s),c=L(l),d=L(c);Ke(d,{get name(){return t.section.icon},size:15,class:"xra-sec-icon"});var v=O(d,2),m=U(v,!0),h=O(c,2);let g;var E=O(l,2);{var p=w=>{var k=gc(),_=L(k);vo(_,{get section(){return t.section}}),C(w,k)};qe(E,w=>{(f(n)||f(i))&&w(p)})}Pi(s,w=>a=w,()=>a),ue(w=>{s.open=f(n)||f(i),V(m,w),g=De(h,0,"xra-sec-chevron",null,g,{open:f(n)})},[()=>oe(t.section.title)]),q("click",l,w=>{w.preventDefault(),o()}),C(e,s),mt()}qt(["click"]);var fn=de('<option class="svelte-x8svx4"> </option>'),wc=de('<div class="warn svelte-x8svx4"> </div>'),bc=de('<div class="xra-startup svelte-x8svx4"><div class="card svelte-x8svx4" role="dialog" aria-label="XR Animator VMC"><div class="col left svelte-x8svx4"><div class="brand svelte-x8svx4"><span class="logo svelte-x8svx4">XR</span> <span class="name svelte-x8svx4">Animator <b class="svelte-x8svx4">VMC</b></span></div> <div class="sub svelte-x8svx4"> </div> <pre class="log svelte-x8svx4"> </pre> <div class="credits svelte-x8svx4">Engine: XR Animator by Butz Yung (CC BY-NC-SA 4.0)<br class="svelte-x8svx4"/> Backends: native MediaPipe · optional ONNX Runtime</div></div> <div class="col right svelte-x8svx4"><div class="group-title svelte-x8svx4"> </div> <button type="button" class="q primary svelte-x8svx4"> </button> <button type="button" class="q svelte-x8svx4"> </button> <div class="group-title svelte-x8svx4"> <span></span></div> <div class="row svelte-x8svx4"><select class="svelte-x8svx4"><!></select> <button type="button" class="q icon svelte-x8svx4"><!></button></div> <!> <div class="group-title svelte-x8svx4"> </div> <label class="field svelte-x8svx4"><span class="svelte-x8svx4"> </span> <select class="svelte-x8svx4"></select></label> <label class="field svelte-x8svx4"><span class="svelte-x8svx4"> </span> <select class="svelte-x8svx4"></select></label> <button type="button" class="q ghost svelte-x8svx4"> </button></div></div></div>');function xc(e,t){gt(t,!0);const r=()=>window.XRA,n=y=>oe(y),i=["AUTO","ECO","LOW","BALANCED","QUALITY","HIGH","MAX","CUSTOM"],a=4e3;function o(){var y,b,P;try{(P=(b=(y=r())==null?void 0:y.profileService)==null?void 0:b.save)==null||P.call(b,0)}catch{}}const s=(()=>{var b,P;const y=(P=(b=r())==null?void 0:b.i18n)==null?void 0:P.LANGUAGES;return Array.isArray(y)&&y.length?y:[["auto","Auto / System"],["en","English"],["it","Italiano"]]})();let l=H("auto"),c=H("CUSTOM"),d=H("default"),v=H(ze([])),m=H(!1),h=H(""),g=H(!1),E=H(""),p=H(""),w=H(!1),k=H(!1),_=H(!1),A=H(ze([])),x=!1,M=!1,T=0,I=0,S=[];function $(y){(f(A).length?f(A)[f(A).length-1]:"")!==y&&N(A,[...f(A),y].slice(-40),!0)}function R(){var y,b,P;x||(x=!0,I&&(clearInterval(I),I=0),o(),Y.startupOpen=!1,(P=(b=(y=r())==null?void 0:y.ui)==null?void 0:b.refresh)==null||P.call(b))}async function ee(){var y,b;N(w,!0),$("Starting tracking…");try{await lo()}catch(P){(b=(y=r()).toast)==null||b.call(y,"Tracking: "+P.message,"warn",4500)}finally{N(w,!1),R()}}async function X(y){const b=r();if(y=String(y||"CUSTOM").toUpperCase(),y==="CUSTOM"){b.config.performance.master_preset="CUSTOM",o(),$("Preset: CUSTOM");return}if(y==="AUTO"){$("Benchmarking hardware…");const P=await b.performance.benchmarkHardwareOnly();$(`AUTO → ${P.preset} (${P.fps.toFixed(1)} fps)`),await b.performance.applyPresetSafe(P.preset),b.config.performance.master_preset="AUTO",b.config.performance.auto_last_result=P,o();return}$(`Applying preset: ${y}…`),await b.performance.applyPresetSafe(y),$(`Preset ${y} applied`)}function ae(y=""){var Q,ie,le;const b=(Q=r())==null?void 0:Q.nativeBridge,P=((ie=b==null?void 0:b.activeCamera)==null?void 0:ie.call(b))||{},z=!!((le=b==null?void 0:b.cameraRunning)!=null&&le.call(b));N(g,z),N(E,y||(z?`${n("ON")} · ${P.label||n("Default camera")}`:n("OFF")),!0)}async function te(y=!1){var P,z,Q;const b=(P=r())==null?void 0:P.nativeBridge;if(b!=null&&b.enumerateCameras){N(_,!0);try{const ie=await b.enumerateCameras({requestPermission:y}),le=b.activeCamera()||{};N(v,(ie||[]).map(We=>({deviceId:We.deviceId,label:We.label})),!0);const ke=le.deviceId||((z=He.devices)==null?void 0:z.camera_device_id)||"";N(h,f(v).some(We=>We.deviceId===ke)?ke:((Q=f(v)[0])==null?void 0:Q.deviceId)||"",!0),N(m,!0),ae(),$(f(v).length?`${f(v).length} camera${f(v).length>1?"s":""} detected`:"No cameras found")}catch{N(m,!0),ae(n("Camera unavailable")),$("Camera enumeration failed")}finally{N(_,!1)}}}async function $e(y){var Q,ie;const b=(Q=r())==null?void 0:Q.nativeBridge,P=((ie=y==null?void 0:y.currentTarget)==null?void 0:ie.value)??f(h),z=f(v).find(le=>le.deviceId===P);if(z){N(_,!0);try{const le={deviceId:z.deviceId,label:z.label};b.cameraRunning()?await b.switchCamera(le):await b.setCameraPreference(le),ae(),$(`Webcam: ${z.label}`)}catch(le){ae("Error · "+le.message),$("Webcam switch failed")}finally{N(_,!1)}}}function vt(){var P,z,Q,ie,le,ke,We,Be;const y=(Q=(z=(P=r())==null?void 0:P.xraBackend)==null?void 0:z.snapshot)==null?void 0:Q.call(z),b=(y==null?void 0:y.capture)||((Be=(We=(ke=(le=(ie=window.SA_bridge)==null?void 0:ie.backend)==null?void 0:le.status)==null?void 0:ke.call(le))==null?void 0:We.backend)==null?void 0:Be.capture);if(b!=null&&b.camera_busy){const pt=(b.busy_processes&&b.busy_processes.length?b.busy_processes:b.busy_process?[b.busy_process]:[]).filter(bn=>!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(String(bn).trim()));if(pt.length)return{busy:!0,proc:pt.join(", ")}}if(b!=null&&b.last_error&&b.last_error.includes("Webcam occupata")){const xe=b.last_error.match(/Webcam occupata da:\s*([^.]+)/i),pt=xe?xe[1].trim():"";if(!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(pt))return{busy:!0,proc:b.last_error}}return{busy:!1,proc:""}}function St(){var y,b,P,z,Q,ie,le,ke,We;if(typeof((b=(y=r())==null?void 0:y.nativeBridge)==null?void 0:b.isAvatarReady)=="function")return r().nativeBridge.isAvatarReady();if((P=window.MMD_SA)!=null&&P.MMD_started){const Be=(ie=(Q=(z=window.MMD_SA)==null?void 0:z.THREEX)==null?void 0:Q.get_model)==null?void 0:ie.call(Q,0);let xe=Be;if((Be==null?void 0:Be.type)==="MMD_dummy")try{xe=Be.model||null}catch{xe=null}const pt=((le=xe==null?void 0:xe.model)==null?void 0:le.scene)||(xe==null?void 0:xe.mesh)||(xe==null?void 0:xe.scene)||null;if(xe&&!(Be!=null&&Be.loading)&&!xe.loading&&!((We=(ke=window.MMD_SA)==null?void 0:ke.THREEX)!=null&&We._loading_model)&&pt)return pt.visible!==!1}return!1}function Ne(){var b,P,z;const y=(b=r())==null?void 0:b.xraBackend;return!y||!y.active?!0:!!((z=(P=y.snapshot)==null?void 0:P.call(y))!=null&&z.ready)}function Pe(){if(x)return;const y=vt();y.busy?(N(p,`Webcam in use by another application (${y.proc}). Close it to start tracking.`),$("Webcam is busy — close the other app")):N(p,""),St()&&$("Avatar ready"),Ne()&&$("Mocap backend ready")}function gn(){Pe(),!f(w)&&!M&&Date.now()-T>a&&R()}async function Jt(y){var P,z,Q;const b=((P=y==null?void 0:y.currentTarget)==null?void 0:P.value)??f(c);N(c,b,!0),N(k,!0);try{await X(b),r().events.emit("state",{path:"performance.master_preset",value:r().config.performance.master_preset}),$l()}catch(ie){console.error("[XRA START]",ie),$("Preset error: "+ie.message)}finally{N(k,!1),(Q=(z=r().ui)==null?void 0:z.refresh)==null||Q.call(z)}}function mn(y){var b,P,z,Q;N(l,((b=y==null?void 0:y.currentTarget)==null?void 0:b.value)??f(l),!0),(Q=(z=(P=r())==null?void 0:P.i18n)==null?void 0:z.setLanguage)==null||Q.call(z,f(l))}async function K(){var y,b;try{await((b=(y=r().nativeBridge)==null?void 0:y.openVrmPicker)==null?void 0:b.call(y))}catch(P){r().toast("VRM loader: "+P.message,"error",4500)}}Hn(()=>{var P,z,Q,ie,le,ke,We,Be,xe,pt,bn,To,No;const y=r();T=Date.now(),$("Initializing XR Animator VMC…"),N(l,((z=(P=y==null?void 0:y.config)==null?void 0:P.ui)==null?void 0:z.language)||"auto",!0),N(c,((ie=(Q=y==null?void 0:y.config)==null?void 0:Q.performance)==null?void 0:ie.master_preset)==="MINIMAL"?"ECO":((ke=(le=y==null?void 0:y.config)==null?void 0:le.performance)==null?void 0:ke.master_preset)||"CUSTOM",!0),N(d,((Be=(We=y==null?void 0:y.config)==null?void 0:We.background)==null?void 0:Be.path)||((pt=(xe=y==null?void 0:y.config)==null?void 0:xe.background)==null?void 0:pt.color)||"default",!0),ae(),setTimeout(()=>te(!1),100),I=setInterval(gn,250),window.addEventListener("MMDStarted",Pe),(bn=y.xraBackend)!=null&&bn.onStatus&&y.xraBackend.onStatus(Pe);const b=yr=>{yr.key==="Escape"&&R()};window.addEventListener("keydown",b,!0),Pe(),(No=(To=y.whenNativeReady)==null?void 0:To.call(y))==null||No.then(()=>{Y.startupOpen&&te(!1)});for(const yr of["camera-started","camera-stopped","camera-switched"])S.push(y.events.on(yr,()=>{Y.startupOpen&&te(!1)}));for(const yr of["avatar-loading","avatar-changed","avatar-ready"])S.push(y.events.on(yr,()=>Pe()));return()=>{I&&clearInterval(I),window.removeEventListener("MMDStarted",Pe),window.removeEventListener("keydown",b,!0);for(const yr of S)try{yr()}catch{}S=[]}});var Z=bc(),se=L(Z),we=L(se),Re=O(L(we),2),nt=U(Re,!0),Et=O(Re,2),ye=U(Et,!0),er=O(we,2),Br=L(er),yn=U(Br,!0),Vr=O(Br,2),Li=U(Vr,!0),Fr=O(Vr,2),Ii=U(Fr,!0),qn=O(Fr,2),wo=L(qn),Bc=O(wo);let bo;var xo=O(qn,2),tr=L(xo),Vc=L(tr);{var Fc=y=>{var b=fn(),P=U(b,!0);b.value=b.__value="",ue(z=>V(P,z),[()=>n("Loading cameras…")]),C(y,b)},Hc=y=>{var b=fn(),P=U(b,!0);b.value=b.__value="",ue(z=>V(P,z),[()=>n("No cameras found")]),C(y,b)},Uc=y=>{var b=re(),P=J(b);Bt(P,17,()=>f(v),z=>z.deviceId,(z,Q)=>{var ie=fn(),le=U(ie,!0),ke={};ue(()=>{V(le,f(Q).label),ke!==(ke=f(Q).deviceId)&&(ie.value=(ie.__value=ke)??"")}),C(z,ie)}),C(y,b)};qe(Vc,y=>{f(m)?f(v).length?y(Uc,-1):y(Hc,1):y(Fc)})}var Yn;Kt(tr);var wn=O(tr,2),jc=L(wn);Ke(jc,{name:"RefreshCw",size:14});var ko=O(xo,2);{var Wc=y=>{var b=wc(),P=U(b,!0);ue(()=>V(P,f(p))),C(y,b)};qe(ko,y=>{f(p)&&y(Wc)})}var So=O(ko,2),Xc=U(So,!0),Eo=O(So,2),$o=L(Eo),Gc=U($o,!0),gr=O($o,2);Bt(gr,20,()=>i,y=>y,(y,b)=>{var P=fn(),z=U(P,!0),Q={};ue(()=>{V(z,b),Q!==(Q=b)&&(P.value=(P.__value=Q)??"")}),C(y,P)});var Kn;Kt(gr);var Ao=O(Eo,2),Mo=L(Ao),qc=U(Mo,!0),mr=O(Mo,2);Bt(mr,21,()=>s,([y,b])=>y,(y,b)=>{var P=Ie(()=>Ki(f(b),2));let z=()=>f(P)[0],Q=()=>f(P)[1];var ie=fn(),le=U(ie,!0),ke={};ue(()=>{V(le,Q()),ke!==(ke=z())&&(ie.value=(ie.__value=ke)??"")}),C(y,ie)});var Zn;Kt(mr);var zi=O(Ao,2),Yc=U(zi,!0);ue((y,b,P,z,Q,ie,le,ke,We,Be,xe,pt)=>{V(nt,y),V(ye,b),V(yn,P),Vr.disabled=f(w),V(Li,z),Fr.disabled=f(w),V(Ii,Q),V(wo,`${ie??""} `),bo=De(Bc,1,"dot svelte-x8svx4",null,bo,{on:f(g)}),tr.disabled=f(_)||f(w),Yn!==(Yn=f(h))&&(tr.value=(tr.__value=Yn)??"",Ot(tr,Yn)),Te(wn,"title",le),Te(wn,"aria-label",ke),wn.disabled=f(_)||f(w),V(Xc,We),V(Gc,Be),gr.disabled=f(k)||f(w),Kn!==(Kn=f(c))&&(gr.value=(gr.__value=Kn)??"",Ot(gr,Kn)),V(qc,xe),mr.disabled=f(w),Zn!==(Zn=f(l))&&(mr.value=(mr.__value=Zn)??"",Ot(mr,Zn)),zi.disabled=f(w),V(Yc,pt)},[()=>n("Quick setup · changes apply immediately."),()=>f(A).join(`
`),()=>n("Quick start"),()=>f(w)?n("Starting…"):n("Start tracking"),()=>n("Load / change VRM…"),()=>n("Webcam"),()=>n("Refresh cameras"),()=>n("Refresh cameras"),()=>n("Options"),()=>n("Master preset"),()=>n("Language"),()=>n("Continue")]),q("click",Z,R),q("click",se,y=>y.stopPropagation()),zn("pointerenter",se,()=>{M=!0,T=Date.now()}),q("pointermove",se,()=>{T=Date.now()}),zn("pointerleave",se,()=>{M=!1,T=Date.now()}),q("click",Vr,ee),q("click",Fr,K),q("change",tr,$e),q("click",wn,()=>te(!0)),q("change",gr,Jt),q("change",mr,mn),q("click",zi,R),C(e,Z),mt()}qt(["click","pointermove","change"]);var kc=de('<button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button>'),Sc=de('<nav class="xra-dock group fixed left-2 top-1/2 z-[99990] flex w-[46px] max-h-[92vh] -translate-y-1/2 flex-col gap-0.5 overflow-hidden rounded-xl border border-white/10 bg-[var(--xra-ui-bg)] p-1.5 font-sans text-[12.5px] leading-snug text-[var(--xra-ui-fg)] shadow-[0_12px_40px_rgba(0,0,0,.55)] transition-[width] duration-200 hover:w-[232px]"><!> <div class="my-1 h-px bg-white/10"></div> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button></nav>');function Ec(e,t){gt(t,!0);const r=()=>window.XRA;let n=H(!1),i=H(!1),a=0;function o(){var Z,se,we,Re,nt;const K=r();if(K){try{N(n,!!((se=(Z=K.nativeBridge)==null?void 0:Z.cameraRunning)!=null&&se.call(Z)))}catch{}try{N(i,!!((nt=(Re=(we=K.recorder)==null?void 0:we.status)==null?void 0:Re.call(we))!=null&&nt.active))}catch{}}}let s=H(!1),l=H("");async function c(){var Z,se,we,Re;if(f(s))return;N(s,!0);const K=!f(n);N(l,K?"Starting…":"Stopping…",!0);try{K?(await lo(),N(n,!0)):(await kl(),N(n,!1))}catch(nt){try{await((se=(Z=r().nativeBridge)==null?void 0:Z.forceStopCamera)==null?void 0:se.call(Z))}catch{}N(n,!1),(Re=(we=r()).toast)==null||Re.call(we,"Tracking: "+nt.message,"warn",4500)}finally{N(s,!1),N(l,""),setTimeout(o,250)}}let d=H(!1),v=H("");async function m(){var Z,se;if(f(d))return;N(d,!0);const K=!f(i);N(v,K?"Starting…":"Stopping…",!0);try{K?(await Sl(),N(i,!0)):(await El(),N(i,!1))}catch(we){N(i,!1),(se=(Z=r()).toast)==null||se.call(Z,"Recording: "+we.message,"warn",4500)}finally{N(d,!1),N(v,""),setTimeout(o,250)}}async function h(){var K,Z,se,we;try{await((Z=(K=r().nativeBridge)==null?void 0:K.openVrmPicker)==null?void 0:Z.call(K))}catch(Re){(we=(se=r()).toast)==null||we.call(se,"VRM loader: "+Re.message,"error",4500)}}function g(){var K,Z;try{(Z=(K=r().nativeBridge)==null?void 0:K.showAbout)==null||Z.call(K)}catch{}}const E=[{id:"ui",icon:"Monitor",label:"UI Settings"},{id:"camera",icon:"Camera",label:"Webcam settings"},{id:"avatar",icon:"User",label:"Model settings"},{id:"second_avatar",icon:"Globe",label:"Studio link"},{id:"stage",icon:"Landmark",label:"Environment + Camera"},{id:"background",icon:"Image",label:"Background"},{id:"lip",icon:"Mic",label:"Audio"}],p="hover:bg-white/10",w="flex-1 overflow-hidden opacity-0 transition-opacity duration-150 group-hover:opacity-100";Hn(()=>(o(),a=setInterval(o,1e3),()=>clearInterval(a)));var k=Sc(),_=L(k);Bt(_,17,()=>E,K=>K.id,(K,Z)=>{var se=kc();De(se,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var we=L(se),Re=L(we);Ke(Re,{get name(){return f(Z).icon},size:16});var nt=O(we,2);De(nt,1,Cr(w));var Et=U(nt,!0);ue((ye,er)=>{Te(se,"aria-label",ye),V(Et,er)},[()=>oe(f(Z).label),()=>oe(f(Z).label)]),q("click",se,()=>bl(f(Z).id)),C(K,se)});var A=O(_,4),x=L(A),M=L(x);{let K=Ie(()=>f(n)?"text-emerald-400":"");Ke(M,{name:"Webcam",size:16,get class(){return f(K)}})}var T=O(x,2);De(T,1,Cr(w));var I=U(T,!0),S=O(A,2),$=L(S),R=L($);{let K=Ie(()=>f(d)?"Circle":f(i)?"Square":"Circle"),Z=Ie(()=>f(i)?"text-red-400":"");Ke(R,{get name(){return f(K)},size:16,get class(){return f(Z)}})}var ee=O($,2);De(ee,1,Cr(w));var X=U(ee,!0),ae=O(S,2);De(ae,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var te=L(ae),$e=L(te);Ke($e,{name:"FolderOpen",size:16});var vt=O(te,2);De(vt,1,Cr(w));var St=U(vt,!0),Ne=O(ae,2);De(Ne,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var Pe=L(Ne),gn=L(Pe);Ke(gn,{name:"Info",size:16});var Jt=O(Pe,2);De(Jt,1,Cr(w));var mn=U(Jt,!0);ue((K,Z,se,we,Re,nt,Et,ye)=>{De(A,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${f(n)?"bg-emerald-500/20 hover:bg-emerald-500/30":p} ${f(s)?"opacity-60":""}`),Te(A,"aria-label",K),A.disabled=f(s),V(I,Z),De(S,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${f(i)?"bg-red-500/30 hover:bg-red-500/40 text-red-200":p} ${f(d)?"opacity-60":""}`),Te(S,"aria-label",se),S.disabled=f(d),V(X,we),Te(ae,"aria-label",Re),V(St,nt),Te(Ne,"aria-label",Et),V(mn,ye)},[()=>oe("Tracking"),()=>f(s)?oe(f(l)):f(n)?oe("Tracking on"):oe("Tracking off"),()=>oe("Record"),()=>f(d)?oe(f(v)):f(i)?oe("Stop recording"):oe("Record"),()=>oe("Load / change VRM…"),()=>oe("Load / change VRM…"),()=>oe("About"),()=>oe("About")]),zn("pointerenter",k,()=>{Y.dockExpanded=!0}),zn("pointerleave",k,()=>{Y.dockExpanded=!1}),q("click",A,c),q("click",S,m),q("click",ae,h),q("click",Ne,g),C(e,k),mt()}qt(["click"]);var $c=de('<div class="absolute inset-0 z-30 grid place-items-center bg-black text-[12px] text-[var(--xra-ui-fg)]"> </div>'),Ac=de('<div class="xra-mocap-window fixed z-[99991] flex flex-col overflow-hidden rounded-xl border border-white/15 bg-[var(--xra-ui-bg)] text-[var(--xra-ui-fg)] shadow-[0_16px_48px_rgba(0,0,0,.6)] font-sans"><header class="flex shrink-0 cursor-move touch-none select-none items-center gap-2 px-2 py-1.5"><!> <span class="flex-1 text-[12px] font-semibold"> </span> <span class="flex items-center gap-1 text-[10.5px] tabular-nums text-[var(--xra-ui-dim)]"><span></span> </span> <select class="rounded-md border border-white/15 bg-[#101214] px-1.5 py-0.5 text-[11px] text-[var(--xra-ui-fg)]"><option> </option><option> </option><option> </option><option> </option></select> <button type="button" class="rounded-md border border-white/15 bg-white/5 px-1.5 py-0.5 cursor-pointer text-[var(--xra-ui-fg)]"><!></button></header> <div class="relative min-h-0 flex-1 overflow-hidden bg-black"><!> <div class="absolute bottom-0 right-0 z-20 h-5 w-5 cursor-nwse-resize touch-none"></div></div></div>');function Mc(e,t){gt(t,!0);const r=()=>window.XRA,n=Ye("ui.mocap_window",{})||{};let i=H(ze(Number.isFinite(n.x)?n.x:48)),a=H(ze(Number.isFinite(n.y)?n.y:96)),o=H(ze(Number.isFinite(n.w)?n.w:360)),s=H(ze(Number.isFinite(n.h)?n.h:270)),l=H(void 0),c=H(!1),d=H(0),v=null,m=0,h=0;const g=Ie(()=>Ye("ui.mocap_visibility","always")!=="auto"||f(c));function E(){Qe("ui.mocap_window",{x:Math.round(f(i)),y:Math.round(f(a)),w:Math.round(f(o)),h:Math.round(f(s))})}function p(){var x,M,T;try{(T=(M=(x=r())==null?void 0:x.nativeBridge)==null?void 0:M.updateMocapWindow)==null||T.call(M)}catch{}}function w(x,M){x.preventDefault();const T=x.clientX,I=x.clientY,S=f(i),$=f(a),R=f(o),ee=f(s),X=te=>{const $e=te.clientX-T,vt=te.clientY-I;M==="move"?(N(i,Math.max(0,Math.min(window.innerWidth-80,S+$e)),!0),N(a,Math.max(0,Math.min(window.innerHeight-30,$+vt)),!0)):(N(o,Math.max(200,Math.min(window.innerWidth-f(i),R+$e)),!0),N(s,Math.max(130,Math.min(window.innerHeight-f(a),ee+vt)),!0))},ae=()=>{window.removeEventListener("pointermove",X),window.removeEventListener("pointerup",ae),E()};window.addEventListener("pointermove",X),window.addEventListener("pointerup",ae)}or(()=>{var M,T,I;const x=f(l);if(x){try{(I=(T=(M=r())==null?void 0:M.nativeBridge)==null?void 0:T.attachMocapWindow)==null||I.call(T,x)}catch{}return()=>{var S,$,R;try{(R=($=(S=r())==null?void 0:S.nativeBridge)==null?void 0:$.detachMocapWindow)==null||R.call($)}catch{}}}}),or(()=>{f(i),f(a),f(o),f(s),f(c),p()}),Hn(()=>{const x=()=>{var I,S,$,R,ee,X;N(c,!!(($=(S=(I=r())==null?void 0:I.nativeBridge)==null?void 0:S.cameraRunning)!=null&&$.call(S)));const M=Number((((X=(ee=(R=r())==null?void 0:R.xraBackend)==null?void 0:ee.snapshot)==null?void 0:X.call(ee))||{}).framesReceived||0),T=performance.now();v!=null&&T>m&&N(d,Math.max(0,(M-v)/((T-m)/1e3)),!0),v=M,m=T};return x(),h=setInterval(x,500),window.addEventListener("resize",p),()=>{clearInterval(h),window.removeEventListener("resize",p)}});var k=re(),_=J(k);{var A=x=>{var M=Ac(),T=L(M),I=L(T);Ke(I,{name:"Activity",size:14});var S=O(I,2),$=U(S,!0),R=O(S,2),ee=L(R);let X;var ae=O(ee),te=O(R,2),$e=L(te),vt=U($e,!0);$e.value=$e.__value="both";var St=O($e),Ne=U(St,!0);St.value=St.__value="wireframe";var Pe=O(St),gn=U(Pe,!0);Pe.value=Pe.__value="video";var Jt=O(Pe),mn=U(Jt,!0);Jt.value=Jt.__value="off";var K;Kt(te);var Z=O(te,2),se=L(Z);Ke(se,{name:"X",size:13});var we=O(T,2),Re=L(we);{var nt=ye=>{var er=$c(),Br=U(er,!0);ue(yn=>V(Br,yn),[()=>oe("Tracking is off")]),C(ye,er)};qe(Re,ye=>{f(c)||ye(nt)})}var Et=O(Re,2);Pi(we,ye=>N(l,ye),()=>f(l)),ue((ye,er,Br,yn,Vr,Li,Fr,Ii,qn)=>{Bn(M,`left:${f(i)??""}px; top:${f(a)??""}px; width:${f(o)??""}px; height:${f(s)??""}px;`),V($,ye),X=De(ee,1,"h-1.5 w-1.5 rounded-full",null,X,{"bg-[var(--xra-ui-accent)]":f(c),"bg-[#565656]":!f(c)}),V(ae,` ${er??""}`),V(vt,Br),V(Ne,yn),V(gn,Vr),V(mn,Li),K!==(K=Fr)&&(te.value=(te.__value=K)??"",Ot(te,K)),Te(Z,"title",Ii),Te(Et,"title",qn)},[()=>oe("Mocap"),()=>f(c)?f(d)>=1?`${Math.round(f(d))} fps`:"LIVE":"OFF",()=>oe("Webcam + skeleton"),()=>oe("Skeleton only"),()=>oe("Webcam only"),()=>oe("Off"),()=>Ye("ui.mocap_view","off"),()=>oe("Close"),()=>oe("Resize")]),q("pointerdown",T,ye=>w(ye,"move")),q("change",te,ye=>Qe("ui.mocap_view",ye.currentTarget.value)),q("pointerdown",te,ye=>ye.stopPropagation()),q("click",Z,()=>Qe("ui.mocap_view","off")),q("pointerdown",Z,ye=>ye.stopPropagation()),q("pointerdown",Et,ye=>{ye.stopPropagation(),w(ye,"resize")}),C(x,M)};qe(_,x=>{f(g)&&x(A)})}C(e,k),mt()}qt(["pointerdown","change","click"]);var Tc=de('<aside class="xra-section-popup fixed top-1/2 z-[99992] flex max-h-[72vh] w-[320px] -translate-y-1/2 flex-col overflow-hidden rounded-xl border border-white/12 bg-[var(--xra-ui-bg)] text-[12.5px] leading-[1.45] text-[var(--xra-ui-fg)] shadow-[0_16px_48px_rgba(0,0,0,.6)] font-sans transition-[left] duration-200"><header class="flex shrink-0 items-center gap-2 bg-[var(--xra-ui-bg2)] px-3 py-2 shadow-[inset_0_-1px_0_var(--xra-ui-accent-soft)]"><!> <span class="text-[12.5px] font-semibold text-[#cfcfcf]"> </span></header> <div class="min-h-0 flex-1 overflow-auto px-2.5 py-2"><!></div></aside>');function Nc(e,t){gt(t,!0);let r;or(()=>{const d=m=>{const h=m.target;r&&h instanceof Node&&r.contains(h)||h instanceof Element&&h.closest(".xra-dock")||(Y.popupSection=null)},v=m=>{m.key==="Escape"&&(Y.popupSection=null)};return document.addEventListener("pointerdown",d,!0),window.addEventListener("keydown",v,!0),()=>{document.removeEventListener("pointerdown",d,!0),window.removeEventListener("keydown",v,!0)}});var n=Tc(),i=L(n),a=L(i);Ke(a,{get name(){return t.section.icon},size:14,class:"text-[var(--xra-ui-dim)]"});var o=O(a,2),s=U(o,!0),l=O(i,2),c=L(l);vo(c,{get section(){return t.section}}),Pi(n,d=>r=d,()=>r),ue(d=>{Bn(n,`left:${Y.dockExpanded?248:62}px;`),V(s,d)},[()=>oe(t.section.title)]),C(e,n),mt()}var Cc=de("<option> </option>"),Oc=de('<div class="status"> </div>'),Pc=de('<div><div class="head"><span class="title">Mocap backend</span> <span class="prov" title="Active backend / execution provider"> </span></div> <div class="row"><select></select> <button type="button" title="Refresh backends" aria-label="Refresh backends"><!></button></div> <!></div>');function Rc(e,t){gt(t,!0);const r=()=>window.XRA;let n=H(ze([])),i=H(!1),a=H(""),o=H(""),s=H("");const l=Ie(()=>{var S;return((S=He.performance)==null?void 0:S.tracker_backend)||"mediapipe-tasks-landmarker"});async function c(){var $,R,ee;const S=($=r())==null?void 0:$.xraBackend;if(S){try{N(n,await((R=S.listBackends)==null?void 0:R.call(S))||[],!0)}catch{}try{const X=((ee=S.snapshot)==null?void 0:ee.call(S))||{};N(o,X.model||"",!0),N(s,X.providerHuman||X.provider||"",!0)}catch{}}}async function d(S){const R=await(await fetch("/__xra_backend/download",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:S})})).json().catch(()=>({}));if(!R.ok)throw new Error(R.error||"download failed")}async function v(S,$=3e4){var X;const R=r().xraBackend,ee=performance.now()+$;for(;performance.now()<ee;){const ae=((X=R.snapshot)==null?void 0:X.call(R))||{};if(ae.model===S&&ae.ready)return!0;if(ae.model===S&&ae.lastError)throw new Error(ae.lastError);await new Promise(te=>setTimeout(te,250))}return!1}async function m(S){const $=S.currentTarget.value;if($!==f(l)){N(i,!0);try{const R=f(n).find(X=>X.id===$);R&&R.installed===!1&&(N(a,"Downloading models…"),await d($),await c()),N(a,"Switching…"),r().xraBackend.select($),await v($)?(Qe("performance.tracker_backend",$),N(a,"")):N(a,"Not ready yet")}catch(R){N(a,"Error: "+R.message)}finally{N(i,!1),c()}}}Hn(c);var h=Pc();let g;var E=L(h),p=O(L(E),2),w=U(p,!0),k=O(E,2),_=L(k);Bt(_,21,()=>f(n),S=>S.id,(S,$)=>{var R=Cc(),ee=U(R),X={};ue(()=>{V(ee,`${f($).label??""}${f($).installed===!1?" · needs download":""}`),X!==(X=f($).id)&&(R.value=(R.__value=X)??"")}),C(S,R)});var A;Kt(_);var x=O(_,2),M=L(x);Ke(M,{name:"RefreshCw",size:13});var T=O(k,2);{var I=S=>{var $=Oc(),R=U($,!0);ue(()=>V(R,f(a))),C(S,$)};qe(T,S=>{f(a)&&S(I)})}ue(()=>{g=De(h,1,"xra-backend",null,g,{busy:f(i)}),V(w,f(s)||f(o)||"—"),_.disabled=f(i),A!==(A=f(l))&&(_.value=(_.__value=A)??"",Ot(_,A)),x.disabled=f(i)}),q("change",_,m),q("click",x,c),C(e,h),mt()}qt(["change","click"]);var Lc=de('<aside class="xra-panel"><header class="xra-panel-head"><strong>XR Animator</strong> <span class="xra-spacer"></span> <button><!></button> <button title="Close panel"><!></button></header> <div class="xra-panel-search"><input type="search" placeholder="Search settings…"/></div> <div class="xra-panel-body"><!> <!></div></aside>'),Ic=de('<button class="xra-panel-launcher"><!></button>'),zc=de("<!> <!> <!> <!> <!>",1);function Dc(e,t){gt(t,!0),Al();const r=Ie(()=>Ol(He));var n=zc(),i=J(n);{var a=p=>{Ec(p,{})};qe(i,p=>{Y.ready&&p(a)})}var o=O(i,2);{var s=p=>{const w=Ie(()=>f(r).find(x=>x.id===Y.popupSection));var k=re(),_=J(k);{var A=x=>{Nc(x,{get section(){return f(w)}})};qe(_,x=>{f(w)&&x(A)})}C(p,k)};qe(o,p=>{Y.ready&&Y.popupSection&&p(s)})}var l=O(o,2);{var c=p=>{Mc(p,{})},d=Ie(()=>Y.ready&&Ye("ui.mocap_view","off")!=="off");qe(l,p=>{f(d)&&p(c)})}var v=O(l,2);{var m=p=>{var ee,X,ae;var w=Lc(),k=L(w),_=O(L(k),4);Te(_,"title",((ae=(X=(ee=window.XRA)==null?void 0:ee.i18n)==null?void 0:X.t)==null?void 0:ae.call(X,"Clean screen mode (Press Esc to restore)"))||"Clean screen (Esc)");var A=L(_);Ke(A,{name:"EyeOff",size:15});var x=O(_,2),M=L(x);Ke(M,{name:"X",size:15});var T=O(k,2),I=L(T),S=O(T,2),$=L(S);Rc($,{});var R=O($,2);Bt(R,17,()=>f(r),te=>te.id,(te,$e)=>{yc(te,{get section(){return f($e)}})}),ue(()=>cn(I,Y.search)),q("click",_,function(...te){jn==null||jn.apply(this,te)}),q("click",x,()=>Y.panelOpen=!1),q("input",I,te=>Y.search=te.currentTarget.value),C(p,w)},h=p=>{var w=Ic(),k=L(w);Ke(k,{name:"Settings",size:16}),q("click",w,()=>{Y.panelOpen=!0,co()}),C(p,w)};qe(v,p=>{Y.ready&&Y.panelOpen?p(m):Y.ready&&p(h,1)})}var g=O(v,2);{var E=p=>{xc(p,{})};qe(g,p=>{Y.ready&&Y.startupOpen&&p(E)})}C(e,n),mt()}qt(["click","input"]),window.XRA_SVELTE_UI=!0;function _o(){let e=document.getElementById("XRA_SVELTE");e||(e=document.createElement("div"),e.id="XRA_SVELTE",document.body.appendChild(e)),Zs(Dc,{target:e})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",_o):_o()})();

})();
