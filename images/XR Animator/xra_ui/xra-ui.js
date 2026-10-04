(function(){
var Xc=Object.defineProperty;var Ns=pe=>{throw TypeError(pe)};var Gc=(pe,ae,$e)=>ae in pe?Xc(pe,ae,{enumerable:!0,configurable:!0,writable:!0,value:$e}):pe[ae]=$e;var nt=(pe,ae,$e)=>Gc(pe,typeof ae!="symbol"?ae+"":ae,$e),Di=(pe,ae,$e)=>ae.has(pe)||Ns("Cannot "+$e);var u=(pe,ae,$e)=>(Di(pe,ae,"read from private field"),$e?$e.call(pe):ae.get(pe)),B=(pe,ae,$e)=>ae.has(pe)?Ns("Cannot add the same private member more than once"):ae instanceof WeakSet?ae.add(pe):ae.set(pe,$e),D=(pe,ae,$e,er)=>(Di(pe,ae,"write to private field"),er?er.call(pe,$e):ae.set(pe,$e),$e),U=(pe,ae,$e)=>(Di(pe,ae,"access private method"),$e);(function(){"use strict";var _s,Or,Yt,dr,Pr,Rr,Lr,Bt,Ir,Qe,dn,Vt,wt,Ot,zr,pr,ee,Bi,Vi,xn,Fi,Cs,Os,Hr,qc,kn,gs,ft,Ri,dt,vr,He,Je,Ue,et,Pt,hr,Kt,Dr,pn,vn,Ft,Wn,le,Yc,Kc,Hi,Zc,Ui,Sn,Zn,ji,Wi,bt,Rt,tt,_r,hn,_n,Xn,ms;var ae=Array.isArray,$e=Array.prototype.indexOf,er=Array.prototype.includes,En=Array.from,Xi=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor,Gi=Object.getOwnPropertyDescriptors,Ps=Object.prototype,Rs=Array.prototype,Qn=Object.getPrototypeOf,qi=Object.isExtensible;function Ur(e){return typeof e=="function"}const Ls=()=>{};function Is(e){return e()}function Jn(e){for(var t=0;t<e.length;t++)e[t]()}function Yi(){var e,t,r=new Promise((n,i)=>{e=n,t=i});return{promise:r,resolve:e,reject:t}}function Ki(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const Le=2,wr=4,jr=8,ei=1<<24,ht=16,it=32,Lt=64,ti=128,ri=256,_t=512,Ae=1024,Se=2048,at=4096,ze=8192,De=16384,br=32768,$n=1<<25,Ut=65536,An=1<<17,zs=1<<18,xr=1<<19,Zi=1<<20,St=1<<25,Mn=1<<21,kr=1<<22,jt=1<<23,Et=Symbol("$state"),Qi=Symbol("component"),Ji=Symbol("legacy props"),Ds=Symbol(""),Tn=Symbol("attributes"),ni=Symbol("class"),ii=Symbol("style"),Wr=Symbol("text"),Xr=new class extends Error{constructor(){super(...arguments);nt(this,"name","StaleReactionError");nt(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},Nn=!!((_s=globalThis.document)!=null&&_s.contentType)&&globalThis.document.contentType.includes("xml"),Bs=1,Vs=2,ea=4,Fs=8,Hs=16,Us=1,js=2,ta=4,Ws=8,Xs=16,Gs=1,qs=2,Ee=Symbol("uninitialized"),ra="http://www.w3.org/1999/xhtml",Ys="http://www.w3.org/2000/svg",Ks="@attach";function Zs(){console.warn("https://svelte.dev/e/derived_inert")}function Qs(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Js(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function na(e){return e===this.v}function eo(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function ia(e){return!eo(e,this.v)}function to(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function ro(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function no(e,t,r){throw new Error("https://svelte.dev/e/each_key_duplicate")}function io(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ao(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function so(e){throw new Error("https://svelte.dev/e/effect_orphan")}function oo(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function lo(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function co(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function uo(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function fo(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function po(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Sr=!1,Qc=!1;function vo(){Sr=!0}let ve=null;function Er(e){ve=e}function $t(e,t=!1,r){ve={p:ve,i:!1,c:null,e:null,s:e,x:null,r:H,l:Sr&&!t?{s:null,u:null,$:[]}:null}}function At(e){var t=ve,r=t.e;if(r!==null){t.e=null;for(var n of r)$a(n)}return t.i=!0,ve=t.p,ai(e)}function ai(e={}){return Xi(e,Qi,{value:!0}),e}function Gr(){return!Sr||ve!==null&&ve.l===null}let $r=[];function ho(){var e=$r;$r=[],Jn(e)}function Mt(e){if($r.length===0){var t=$r;queueMicrotask(()=>{t===$r&&ho()})}$r.push(e)}const _o=-7169;function be(e,t){e.f=e.f&_o|t}function si(e){(e.f&_t)!==0||e.deps===null?be(e,Ae):be(e,at)}function aa(e,t,r){(e.f&Se)!==0?t.add(e):(e.f&at)!==0&&r.add(e),be(e,Ae)}function go(e,t){if(t){const r=document.body;e.autofocus=!0,Mt(()=>{document.activeElement===r&&e.focus()})}}function qr(e){var t=F,r=H;st(null),ot(null);try{return e()}finally{st(t),ot(r)}}function sa(e,t,r,n){const i=Gr()?Ar:oi;var s=e.filter(h=>!h.settled),a=t.map(i);if(r.length===0&&s.length===0){n(a);return}var o=H,l=mo(),c=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(h=>h.promise)):null;function f(h){if((o.f&De)===0){l();try{n([...a,...h])}catch(_){Nt(_,o)}Cn()}}var p=oa();if(r.length===0){c.then(()=>f([])).finally(p);return}function m(){Promise.all(r.map(h=>yo(h))).then(f).catch(h=>Nt(h,o)).finally(p)}c?c.then(()=>{l(),m(),Cn()}):m()}function mo(){var e=H,t=F,r=ve,n=z;return function(s=!0){ot(e),st(t),Er(r),s&&(e.f&De)===0&&(n==null||n.activate(),n==null||n.apply())}}function Cn(e=!0){ot(null),st(null),Er(null),e&&(z==null||z.deactivate())}function oa(){var e=H,t=e.b,r=z,n=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,r),r.increment(n,e),()=>{t==null||t.update_pending_count(-1,r),r.decrement(n,e)}}function Ar(e){var t=Le|Se;return H!==null&&(H.f|=xr),{ctx:ve,deps:null,effects:null,equals:na,f:t,fn:e,reactions:null,rv:0,v:Ee,wv:0,parent:H,ac:null}}const Yr=Symbol("obsolete");function yo(e,t,r){let n=H;n===null&&ro();var i=void 0,s=Wt(Ee),a=!F,o=new Set;return Oo(()=>{var h,_;var l=H,c=Yi();i=c.promise;try{Promise.resolve(e()).then(c.resolve,S=>{S!==Xr&&c.reject(S)}).finally(Cn)}catch(S){c.reject(S),Cn()}var f=z;if(a){if((l.f&br)!==0)var p=oa();if((h=n.b)!=null&&h.is_rendered())(_=f.async_deriveds.get(l))==null||_.reject(Yr);else for(const S of o.values())S.reject(Yr);o.add(c),f.async_deriveds.set(l,c)}const m=(S,v=void 0)=>{p==null||p(),o.delete(c),v!==Yr&&(f.activate(),v?(s.f|=jt,Tr(s,v)):((s.f&jt)!==0&&(s.f^=jt),Tr(s,S)),f.deactivate())};c.promise.then(m,S=>m(null,S||"unknown"))}),Rn(()=>{for(const l of o)l.reject(Yr)}),new Promise(l=>{function c(f){function p(){f===i?l(s):c(i)}f.then(p,p)}c(i)})}function Be(e){const t=Ar(e);return Ra(t),t}function oi(e){const t=Ar(e);return t.equals=ia,t}function wo(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)Oe(t[r])}}function li(e){var t,r=H,n=e.parent;if(!zt&&n!==null&&e.v!==Ee&&(n.f&(De|ze))!==0)return Zs(),e.v;ot(n);try{wo(e),t=Ba(e)}finally{ot(r)}return t}function la(e){var t=li(e);if(!e.equals(t)&&(e.wv=za(),(!(z!=null&&z.is_fork)||e.deps===null)&&(z!==null?(z.capture(e,t,!0),Kr==null||Kr.capture(e,t,!0)):e.v=t,e.deps===null))){be(e,Ae);return}zt||(Ce!==null?(_i()||z!=null&&z.is_fork)&&Ce.set(e,t):si(e))}function bo(e){var t;if(e.effects!==null)for(const r of e.effects)(r.teardown||r.ac)&&((t=r.teardown)==null||t.call(r),r.ac!==null&&qr(()=>{r.ac.abort(Xr),r.ac=null}),r.fn!==null&&(r.teardown=Ls),rn(r,0),mi(r))}function ca(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&Nr(t)}let ci=null,Mr=null,z=null,Kr=null,Ce=null,ui=null,fi=!1,Zr=null,On=null;var ua=0,Jc=new Set;let xo=1;const jn=class jn{constructor(){B(this,ee);nt(this,"id",xo++);B(this,Or,!1);nt(this,"linked",!0);B(this,Yt,null);B(this,dr,null);nt(this,"async_deriveds",new Map);nt(this,"current",new Map);nt(this,"previous",new Map);B(this,Pr,new Set);B(this,Rr,new Set);B(this,Lr,0);B(this,Bt,new Map);B(this,Ir,null);B(this,Qe,[]);B(this,dn,[]);B(this,Vt,new Set);B(this,wt,new Set);B(this,Ot,new Map);B(this,zr,new Set);nt(this,"is_fork",!1);B(this,pr,!1);Mr===null?ci=Mr=this:(D(Mr,dr,this),D(this,Yt,Mr)),Mr=this}skip_effect(t){u(this,Ot).has(t)||u(this,Ot).set(t,{d:[],m:[]}),u(this,zr).delete(t)}unskip_effect(t,r=n=>this.schedule(n)){var n=u(this,Ot).get(t);if(n){u(this,Ot).delete(t);for(var i of n.d)be(i,Se),r(i);for(i of n.m)be(i,at),r(i)}u(this,zr).add(t)}capture(t,r,n=!1){t.v!==Ee&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&jt)===0&&(this.current.set(t,[r,n]),Ce==null||Ce.set(t,r)),this.is_fork||(t.v=r)}activate(){z=this}deactivate(){z=null,Ce=null}flush(){try{fi=!0,z=this,U(this,ee,xn).call(this)}finally{ua=0,ui=null,Zr=null,On=null,fi=!1,z=null,Ce=null,Tt.clear()}}discard(){var t;for(const r of u(this,Rr))r(this);u(this,Rr).clear();for(const r of this.async_deriveds.values())r.reject(Yr);U(this,ee,kn).call(this),(t=u(this,Ir))==null||t.resolve()}register_created_effect(t){u(this,dn).push(t)}increment(t,r){if(D(this,Lr,u(this,Lr)+1),t){let n=u(this,Bt).get(r)??0;u(this,Bt).set(r,n+1)}}decrement(t,r){if(D(this,Lr,u(this,Lr)-1),t){let n=u(this,Bt).get(r)??0;n===1?u(this,Bt).delete(r):u(this,Bt).set(r,n-1)}u(this,pr)||(D(this,pr,!0),Mt(()=>{D(this,pr,!1),this.linked&&this.flush()}))}transfer_effects(t,r){for(const n of t)u(this,Vt).add(n);for(const n of r)u(this,wt).add(n);t.clear(),r.clear()}oncommit(t){u(this,Pr).add(t)}ondiscard(t){u(this,Rr).add(t)}settled(){return(u(this,Ir)??D(this,Ir,Yi())).promise}static ensure(){if(z===null){const t=z=new jn;fi||Mt(()=>{u(t,Or)||t.flush()})}return z}apply(){{Ce=null;return}}schedule(t){var r;if(ui=t,(r=t.b)!=null&&r.is_pending&&(t.f&(wr|jr|ei))!==0&&(t.f&br)===0){t.b.defer_effect(t);return}u(this,Qe).push(t)}};Or=new WeakMap,Yt=new WeakMap,dr=new WeakMap,Pr=new WeakMap,Rr=new WeakMap,Lr=new WeakMap,Bt=new WeakMap,Ir=new WeakMap,Qe=new WeakMap,dn=new WeakMap,Vt=new WeakMap,wt=new WeakMap,Ot=new WeakMap,zr=new WeakMap,pr=new WeakMap,ee=new WeakSet,Bi=function(){if(this.is_fork)return!0;for(const n of u(this,Bt).keys()){for(var t=n,r=!1;t.parent!==null;){if(u(this,Ot).has(t)){r=!0;break}t=t.parent}if(!r)return!0}return!1},Vi=function(){var t=[];for(const s of u(this,Qe))if(!((s.f&De)!==0||(s.f&(Se|at))===0)){for(var r=s,n=!1;r.parent!==null;){r=r.parent;var i=r.f;if((i&(Lt|it))!==0){if((i&Ae)===0){n=!0;break}r.f^=Ae}}n||t.push(r)}return D(this,Qe,[]),t},xn=function(){var o,l,c,f;D(this,Or,!0);for(const p of u(this,Vt))u(this,wt).delete(p),be(p,Se),this.schedule(p);for(const p of u(this,wt))be(p,at),this.schedule(p);this.apply();for(var t=Zr=[],r=[],n=On=[];u(this,Qe).length>0;){ua++>1e3&&(U(this,ee,kn).call(this),ko());for(const p of U(this,ee,Vi).call(this))try{U(this,ee,Fi).call(this,p,t,r)}catch(m){throw va(p),U(this,ee,Bi).call(this)||this.discard(),m}}if(z=null,n.length>0){var i=jn.ensure();for(const p of n)i.schedule(p)}if(Zr=null,On=null,U(this,ee,Bi).call(this)){U(this,ee,Hr).call(this,r),U(this,ee,Hr).call(this,t);for(const[p,m]of u(this,Ot))pa(p,m);n.length>0&&U(o=z,ee,xn).call(o);return}const s=U(this,ee,Cs).call(this);if(s){U(this,ee,Hr).call(this,r),U(this,ee,Hr).call(this,t),U(l=s,ee,Os).call(l,this);return}u(this,Vt).clear(),u(this,wt).clear();for(const p of u(this,Pr))p(this);u(this,Pr).clear(),Kr=this,fa(r),fa(t),Kr=null,(c=u(this,Ir))==null||c.resolve();var a=z;if(u(this,Lr)===0&&(u(this,Qe).length===0||a!==null)&&U(this,ee,kn).call(this),u(this,Qe).length>0)if(a!==null){for(const p of u(this,Qe))u(a,Qe).push(p);D(this,Qe,[])}else a=this;a!==null&&(Tt.clear(),U(f=a,ee,xn).call(f))},Fi=function(t,r,n){t.f^=Ae;for(var i=t.first;i!==null;){var s=i.f,a=(s&(it|Lt))!==0,o=a&&(s&Ae)!==0,l=o||(s&ze)!==0||u(this,Ot).has(i);if(!l&&i.fn!==null){a?i.f^=Ae:(s&wr)!==0?r.push(i):tn(i)&&((s&ht)!==0&&u(this,wt).add(i),Nr(i));var c=i.first;if(c!==null){i=c;continue}}for(;i!==null;){var f=i.next;if(f!==null){i=f;break}i=i.parent}}},Cs=function(){for(var t=u(this,Yt);t!==null;){if(!t.is_fork){for(const[r,[,n]]of this.current)if(t.current.has(r)&&!n)return t}t=u(t,Yt)}return null},Os=function(t){var n;for(const[i,s]of t.current)!this.previous.has(i)&&t.previous.has(i)&&this.previous.set(i,t.previous.get(i)),this.current.set(i,s);for(const[i,s]of t.async_deriveds){const a=this.async_deriveds.get(i);a&&s.promise.then(a.resolve).catch(a.reject)}t.async_deriveds.clear(),this.transfer_effects(u(t,Vt),u(t,wt));const r=i=>{var s=i.reactions;if(s!==null&&!((i.f&Le)!==0&&(i.f&(Se|at))===0))for(const l of s){var a=l.f;if((a&Le)!==0)r(l);else{var o=l;a&(kr|ht)&&!this.async_deriveds.has(o)&&(u(this,wt).delete(o),be(o,Se),this.schedule(o))}}};for(const i of this.current.keys())r(i);this.oncommit(()=>t.discard()),U(n=t,ee,kn).call(n),z=this,U(this,ee,xn).call(this)},Hr=function(t){for(var r=0;r<t.length;r+=1)aa(t[r],u(this,Vt),u(this,wt))},qc=function(){var p,m;for(let h=ci;h!==null;h=u(h,dr)){var t=h.id<this.id,r=[];for(const[_,[S,v]]of this.current){if(h.current.has(_)){var n=h.current.get(_)[0];if(t&&S!==n)h.current.set(_,[S,v]);else continue}r.push(_)}if(t)for(const[_,S]of this.async_deriveds){const v=h.async_deriveds.get(_);v&&S.promise.then(v.resolve).catch(v.reject)}var i=[...h.current.keys()].filter(_=>!h.current.get(_)[1]);if(!(!u(h,Or)||i.length===0)){var s=i.filter(_=>!this.current.has(_));if(s.length===0)t&&h.discard();else if(r.length>0){if(t)for(const _ of u(this,zr))h.unskip_effect(_,S=>{var v;(S.f&(ht|kr))!==0?h.schedule(S):U(v=h,ee,Hr).call(v,[S])});h.activate();var a=new Set,o=new Map;for(var l of r)da(l,s,a,o);o=new Map;var c=[...h.current].filter(([_,S])=>{const v=this.current.get(_);return v?v[0]!==S[0]||v[1]!==S[1]:!0}).map(([_])=>_);if(c.length>0)for(const _ of u(this,dn))(_.f&(De|ze|An))===0&&di(_,c,o)&&((_.f&(kr|ht))!==0?(be(_,Se),h.schedule(_)):u(h,Vt).add(_));if(u(h,Qe).length>0&&!u(h,pr)){h.apply();for(var f of U(p=h,ee,Vi).call(p))U(m=h,ee,Fi).call(m,f,[],[])}h.deactivate()}}}},kn=function(){if(this.linked){var t=u(this,Yt),r=u(this,dr);t===null?ci=r:D(t,dr,r),r===null?Mr=t:D(r,Yt,t),this.linked=!1}};let tr=jn;function ko(){try{oo()}catch(e){Nt(e,ui)}}let gt=null;function fa(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(De|ze))===0&&tn(n)&&(gt=new Set,Nr(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&Na(n),(gt==null?void 0:gt.size)>0)){Tt.clear();for(const i of gt){if((i.f&(De|ze))!==0)continue;const s=[i];let a=i.parent;for(;a!==null;)gt.has(a)&&(gt.delete(a),s.push(a)),a=a.parent;for(let o=s.length-1;o>=0;o--){const l=s[o];(l.f&(De|ze))===0&&Nr(l)}}gt.clear()}}gt=null}}function da(e,t,r,n){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(const i of e.reactions){const s=i.f;(s&Le)!==0?da(i,t,r,n):(s&(kr|ht))!==0&&(s&Se)===0&&di(i,t,n)&&(be(i,Se),pi(i))}}function di(e,t,r){const n=r.get(e);if(n!==void 0)return n;if(e.deps!==null)for(const i of e.deps){if(er.call(t,i))return!0;if((i.f&Le)!==0&&di(i,t,r))return r.set(i,!0),!0}return r.set(e,!1),!1}function pi(e){z.schedule(e)}function pa(e,t){if(!((e.f&it)!==0&&(e.f&Ae)!==0)){(e.f&Se)!==0?t.d.push(e):(e.f&at)!==0&&t.m.push(e),be(e,Ae);for(var r=e.first;r!==null;)pa(r,t),r=r.next}}function va(e){be(e,Ae);for(var t=e.first;t!==null;)va(t),t=t.next}let Pn=new Set;const Tt=new Map;let ha=!1;function Wt(e,t){var r={f:0,v:e,reactions:null,equals:na,rv:0,wv:0};return r}function Y(e,t){const r=Wt(e);return Ra(r),r}function So(e,t=!1,r=!0){var i;const n=Wt(e);return t||(n.equals=ia),Sr&&r&&ve!==null&&ve.l!==null&&((i=ve.l).s??(i.s=[])).push(n),n}function O(e,t,r=!1){F!==null&&(!yt||(F.f&An)!==0)&&Gr()&&(F.f&(Le|ht|kr|An))!==0&&(Ct===null||!Ct.has(e))&&fo();let n=r?Ve(t):t;return Tr(e,n,On)}var rr=null,vi=0;function Tr(e,t,r=null){if(!e.equals(t)){zt?Tt.set(e,t):Tt.has(e)||Tt.set(e,e.v);var n=tr.ensure();if(n.capture(e,t),(e.f&Le)!==0){const i=e;(e.f&Se)!==0&&li(i),Ce===null&&si(i)}e.wv=za(),rr=null,vi=0,ga(e,Se,r),rr=null,Gr()&&H!==null&&(H.f&Ae)!==0&&(H.f&(it|Lt))===0&&(lt===null?Lo([e]):lt.push(e)),!n.is_fork&&Pn.size>0&&!ha&&Eo()}return t}function Eo(){ha=!1;for(const e of Pn){(e.f&Ae)!==0&&be(e,at);let t;try{t=tn(e)}catch{t=!0}t&&Nr(e)}Pn.clear()}function _a(e,t=1){var r=d(e),n=t===1?r++:r--;return O(e,r),n}function Qr(e){O(e,e.v+1)}function ga(e,t,r){var n=e.reactions;if(n!==null){var i=Gr(),s=n.length;if(vi+=s,vi>1e5&&rr===null&&(rr=new Set),rr!==null){if(rr.has(e))return;rr.add(e)}for(var a=0;a<s;a++){var o=n[a],l=o.f;if(!(!i&&o===H)){var c=(l&Se)===0;if(c&&be(o,t),(l&An)!==0)Pn.add(o);else if((l&Le)!==0){var f=o;Ce==null||Ce.delete(f),ga(f,at,r)}else if(c){var p=o;(l&ht)!==0&&gt!==null&&gt.add(p),r!==null?r.push(p):pi(p)}}}}}function Ve(e){if(typeof e!="object"||e===null||Et in e||Qi in e)return e;const t=Qn(e);if(t!==Ps&&t!==Rs)return e;var r=new Map,n=ae(e),i=Y(0),s=or,a=o=>{if(or===s)return o();var l=F,c=or;st(null),Ia(s);var f=o();return st(l),Ia(c),f};return n&&r.set("length",Y(e.length)),new Proxy(e,{defineProperty(o,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&co();var f=r.get(l);return f===void 0?a(()=>{var p=Y(c.value);return r.set(l,p),p}):O(f,c.value,!0),!0},deleteProperty(o,l){var c=r.get(l);if(c===void 0){if(l in o){const f=a(()=>Y(Ee));r.set(l,f),Qr(i)}}else O(c,Ee),Qr(i);return!0},get(o,l,c){var h;if(l===Et)return e;var f=r.get(l),p=l in o;if(f===void 0&&(!p||(h=Ht(o,l))!=null&&h.writable)&&(f=a(()=>{var _=Ve(p?o[l]:Ee),S=Y(_);return S}),r.set(l,f)),f!==void 0){var m=d(f);return m===Ee?void 0:m}return Reflect.get(o,l,c)},getOwnPropertyDescriptor(o,l){var m;(m=this.has)==null||m.call(this,o,l);var c=Reflect.getOwnPropertyDescriptor(o,l),f=r.get(l);if(f!==void 0){var p=d(f);if(p===Ee)return;if(c&&"value"in c)c.value=p;else return{enumerable:!0,configurable:!0,value:p,writable:!0}}return c},has(o,l){var m;if(l===Et)return!0;var c=r.get(l),f=c!==void 0&&c.v!==Ee||Reflect.has(o,l);if(c!==void 0||H!==null&&(!f||(m=Ht(o,l))!=null&&m.writable)){c===void 0&&(c=a(()=>{var h=f?Ve(o[l]):Ee,_=Y(h);return _}),r.set(l,c));var p=d(c);if(p===Ee)return!1}return f},set(o,l,c,f){var y;var p=r.get(l),m=l in o;if(n&&l==="length")for(var h=c;h<p.v;h+=1){var _=r.get(h+"");_!==void 0?O(_,Ee):h in o&&(_=a(()=>Y(Ee)),r.set(h+"",_))}if(p===void 0)(!m||(y=Ht(o,l))!=null&&y.writable)&&(p=a(()=>Y(void 0)),O(p,Ve(c)),r.set(l,p));else{m=p.v!==Ee;var S=a(()=>Ve(c));O(p,S)}var v=Reflect.getOwnPropertyDescriptor(o,l);if(v!=null&&v.set&&v.set.call(f,c),!m){if(n&&typeof l=="string"){var b=r.get("length"),k=Number(l);Number.isInteger(k)&&k>=b.v&&O(b,k+1)}Qr(i)}return!0},ownKeys(o){d(i);var l=Reflect.ownKeys(o).filter(p=>{var m=r.get(p);return m===void 0||m.v!==Ee});for(var[c,f]of r)f.v!==Ee&&!(c in o)&&l.push(c);return l},setPrototypeOf(){uo()}})}function ma(e){try{if(e!==null&&typeof e=="object"&&Et in e)return e[Et]}catch{}return e}function ya(e,t){return Object.is(ma(e),ma(t))}var wa,ba,xa,ka;function $o(){if(wa===void 0){wa=window,ba=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;xa=Ht(t,"firstChild").get,ka=Ht(t,"nextSibling").get,qi(e)&&(e[ni]=void 0,e[Tn]=null,e[ii]=void 0,e.__e=void 0),qi(r)&&(r[Wr]=void 0)}}function It(e=""){return document.createTextNode(e)}function nr(e){return xa.call(e)}function Jr(e){return ka.call(e)}function I(e,t){return nr(e)}function K(e,t=!1){{var r=nr(e);return r instanceof Comment&&r.data===""?Jr(r):r}}function j(e,t=!1){return nr(e)}function P(e,t=1,r=!1){let n=e;for(;t--;)n=Jr(n);return n}function Ao(e){e.textContent=""}function Sa(){return!1}function hi(e,t,r){return t==null||t===ra?r?document.createElement(e,{is:r}):document.createElement(e):r?document.createElementNS(t,e,{is:r}):document.createElementNS(t,e)}function Mo(e){var t=H;if(t===null)return F.f|=jt,e;if((t.f&br)===0&&(t.f&wr)===0)throw e;Nt(e,t)}function Nt(e,t){if(!(t!==null&&(t.f&De)!==0)){for(;t!==null;){if((t.f&ti)!==0&&(t.f&(De|$n))===0){if((t.f&br)===0)throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw e}}function Ea(e){H===null&&(F===null&&so(),ao()),zt&&io()}function To(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function mt(e,t){var r=H;r!==null&&(r.f&ze)!==0&&(e|=ze);var n={ctx:ve,deps:null,nodes:null,f:e|Se|_t,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};z==null||z.register_created_effect(n);var i=n;if((e&wr)!==0)Zr!==null?Zr.push(n):tr.ensure().schedule(n);else if(t!==null){try{Nr(n)}catch(a){throw Oe(n),a}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&xr)===0&&(i=i.first,(e&ht)!==0&&(e&Ut)!==0&&i!==null&&(i.f|=Ut))}if(i!==null&&(i.parent=r,r!==null&&To(i,r),F!==null&&(F.f&Le)!==0&&(e&Lt)===0)){var s=F;(s.effects??(s.effects=[])).push(i)}return n}function _i(){return F!==null&&!yt}function Rn(e){const t=mt(jr,null);return be(t,Ae),t.teardown=e,t}function ir(e){Ea();var t=H.f,r=!F&&(t&it)!==0&&ve!==null&&!ve.i;if(r){var n=ve;(n.e??(n.e=[])).push(e)}else return $a(e)}function $a(e){return mt(wr|Zi,e)}function No(e){return Ea(),mt(jr|Zi,e)}function Co(e){tr.ensure();const t=mt(Lt|xr,e);return(r={})=>new Promise(n=>{r.outro?ar(t,()=>{Oe(t),n(void 0)}):(Oe(t),n(void 0))})}function gi(e){return mt(wr,e)}function Oo(e){return mt(kr|xr,e)}function Aa(e,t=0){return mt(jr|t,e)}function he(e,t=[],r=[],n=[]){sa(n,t,r,i=>{mt(jr,()=>{e(...i.map(d))})})}function en(e,t=0){var r=mt(ht|t,e);return r}function Ma(e,t=0){var r=mt(ei|t,e);return r}function We(e){return mt(it|xr,e)}function Ta(e){var t=e.teardown;if(t!==null){const r=zt,n=F;Pa(!0),st(null);try{t.call(null)}catch(i){Nt(i,e.parent)}finally{Pa(r),st(n)}}}function mi(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const i=r.ac;i!==null&&qr(()=>{i.abort(Xr)});var n=r.next;(r.f&Lt)!==0?r.parent=null:Oe(r,t),r=n}}function Po(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&it)===0&&Oe(t),t=r}}function Oe(e,t=!0){var r=!1;(t||(e.f&zs)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Ro(e.nodes.start,e.nodes.end),r=!0),e.f|=$n,mi(e,t&&!r),rn(e,0);var n=e.nodes&&e.nodes.t;if(n!==null)for(const s of n)s.stop();Ta(e),e.f^=$n,e.f|=De;var i=e.parent;i!==null&&i.first!==null&&Na(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Ro(e,t){for(;e!==null;){var r=e===t?null:Jr(e);e.remove(),e=r}}function Na(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function ar(e,t,r=!0){var n=[];e.f|=ri,Ca(e,n,!0);var i=()=>{r&&Oe(e),t&&t()},s=n.length;if(s>0){var a=()=>--s||i();for(var o of n)o.out(a)}else i()}function Ca(e,t,r){if((e.f&ze)===0){e.f^=ze;var n=e.nodes&&e.nodes.t;if(n!==null)for(const o of n)(o.is_global||r)&&t.push(o);for(var i=e.first;i!==null;){var s=i.next;if((i.f&Lt)===0){var a=(i.f&Ut)!==0||(i.f&it)!==0&&(e.f&ht)!==0;Ca(i,t,a?r:!1)}i=s}}}function Ln(e){e.f&=~ri,Oa(e,!0)}function Oa(e,t){if((e.f&ri)===0&&(e.f&ze)!==0){e.f^=ze,(e.f&Ae)===0&&(be(e,Se),tr.ensure().schedule(e));for(var r=e.first;r!==null;){var n=r.next,i=(r.f&Ut)!==0||(r.f&it)!==0;Oa(r,i?t:!1),r=n}var s=e.nodes&&e.nodes.t;if(s!==null)for(const a of s)(a.is_global||t)&&a.in()}}function yi(e,t){if(e.nodes)for(var r=e.nodes.start,n=e.nodes.end;r!==null;){var i=r===n?null:Jr(r);t.append(r),r=i}}let In=!1,zt=!1;function Pa(e){zt=e}let F=null,yt=!1;function st(e){F=e}let H=null;function ot(e){H=e}let Ct=null;function Ra(e){F!==null&&((F.f&Mn)!==0||(F.f&Le)!==0)&&(Ct??(Ct=new Set)).add(e)}let Xe=null,Ye=0,lt=null;function Lo(e){lt=e}let La=1,sr=0,or=sr;function Ia(e){or=e}function za(){return++La}function tn(e){var t=e.f;if((t&Se)!==0)return!0;if((t&at)!==0){for(var r=e.deps,n=r.length,i=0;i<n;i++){var s=r[i];if(tn(s)&&la(s),s.wv>e.wv)return!0}(t&_t)!==0&&Ce===null&&be(e,Ae)}return!1}function Da(e,t,r=!0){var n=e.reactions;if(n!==null&&!(Ct!==null&&Ct.has(e)))for(var i=0;i<n.length;i++){var s=n[i];(s.f&Le)!==0?Da(s,t,!1):t===s&&(r?be(s,Se):(s.f&Ae)!==0&&be(s,at),pi(s))}}function Ba(e){var t=Xe,r=Ye,n=lt,i=F,s=Ct,a=ve,o=yt,l=or,c=e.f;Xe=null,Ye=0,lt=null,F=(c&(it|Lt))===0?e:null,Ct=null,Er(e.ctx),yt=!1,or=++sr,e.ac!==null&&(qr(()=>{e.ac.abort(Xr)}),e.ac=null);try{e.f|=Mn;var f=e.fn,p=f();e.f|=br;var m=Va(e);if(Gr()&&lt!==null&&!yt&&m!==null&&(e.f&(Le|at|Se))===0)for(var h=0;h<lt.length;h++)Da(lt[h],e);if(i!==null&&i!==e){if(sr++,i.deps!==null)for(let _=0;_<r;_+=1)i.deps[_].rv=sr;if(t!==null)for(const _ of t)_.rv=sr;lt!==null&&(n===null?n=lt:n.push(...lt))}return(e.f&jt)!==0&&(e.f^=jt),p}catch(_){return Va(e),Mo(_)}finally{e.f^=Mn,Xe=t,Ye=r,lt=n,F=i,Ct=s,Er(a),yt=o,or=l}}function Va(e){var i;var t=e.deps,r=z==null?void 0:z.is_fork;if(Xe!==null){var n;if(r||rn(e,Ye),t!==null&&Ye>0)for(t.length=Ye+Xe.length,n=0;n<Xe.length;n++)t[Ye+n]=Xe[n];else e.deps=t=Xe;if(_i()&&(e.f&_t)!==0)for(n=Ye;n<t.length;n++)((i=t[n]).reactions??(i.reactions=[])).push(e)}else!r&&t!==null&&Ye<t.length&&(rn(e,Ye),t.length=Ye);return t}function Io(e,t){let r=t.reactions;if(r!==null){var n=$e.call(r,e);if(n!==-1){var i=r.length-1;i===0?r=t.reactions=null:(r[n]=r[i],r.pop())}}if(r===null&&(t.f&Le)!==0&&(Xe===null||!er.call(Xe,t))){var s=t;(s.f&_t)!==0&&(s.f^=_t),s.v!==Ee&&si(s),s.ac!==null&&qr(()=>{s.ac.abort(Xr),s.ac=null,be(s,Se)}),bo(s),rn(s,0)}}function rn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Io(e,r[n])}function Nr(e){var t=e.f;if((t&De)===0){be(e,Ae);var r=H,n=In;H=e,In=(t&(it|Lt))===0;try{(t&(ht|ei))!==0?Po(e):mi(e),Ta(e);var i=Ba(e);e.teardown=typeof i=="function"?i:null,e.wv=La;var s}finally{In=n,H=r}}}function d(e){var t=e.f,r=(t&Le)!==0;if(F!==null&&!yt){var n=H!==null&&(H.f&De)!==0;if(!n&&(Ct===null||!Ct.has(e))){var i=F.deps;if((F.f&Mn)!==0)e.rv<sr&&(e.rv=sr,Xe===null&&i!==null&&i[Ye]===e?Ye++:Xe===null?Xe=[e]:Xe.push(e));else{F.deps??(F.deps=[]),er.call(F.deps,e)||F.deps.push(e);var s=e.reactions;s===null?e.reactions=[F]:er.call(s,F)||s.push(F)}}}if(zt&&Tt.has(e))return Tt.get(e);if(r){var a=e;if(zt){var o=a.v;return((a.f&Ae)===0&&a.reactions!==null||Ha(a))&&(o=li(a)),Tt.set(a,o),o}var l=(a.f&_t)===0&&!yt&&F!==null&&(In||(F.f&_t)!==0),c=(a.f&br)===0;tn(a)&&(l&&(a.f|=_t),la(a)),l&&!c&&(ca(a),Fa(a))}if(Ce!=null&&Ce.has(e))return Ce.get(e);if((e.f&jt)!==0)throw e.v;return e.v}function Fa(e){if(e.f|=_t,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&Le)!==0&&(t.f&_t)===0&&(ca(t),Fa(t))}function Ha(e){if(e.v===Ee)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Tt.has(t)||(t.f&Le)!==0&&Ha(t))return!0;return!1}function Xt(e){var t=yt;try{return yt=!0,e()}finally{yt=t}}function lr(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Et in e)wi(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&Et in r&&wi(r)}}}function wi(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{wi(e[n],t)}catch{}const r=Qn(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=Gi(r);for(let i in n){const s=n[i].get;if(s)try{s.call(e)}catch{}}}}}function zo(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Do=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Bo(e){return Do.includes(e)}const Vo={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Fo(e){return e=e.toLowerCase(),Vo[e]??e}const Ho=["touchstart","touchmove"];function Uo(e){return Ho.includes(e)}const cr=Symbol("events"),Ua=new Set,bi=new Set;function ja(e,t,r,n={}){function i(s){if(n.capture||Si.call(t,s),!s.cancelBubble)return qr(()=>r==null?void 0:r.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?(i.__removed=!1,Mt(()=>{i.__removed||t.addEventListener(e,i,n)})):t.addEventListener(e,i,n),i}function zn(e,t,r,n,i){var s={capture:n,passive:i},a=ja(e,t,r,s);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Rn(()=>{a.__removed=!0,t.removeEventListener(e,a,s)})}function Z(e,t,r){(t[cr]??(t[cr]={}))[e]=r}function ur(e){for(var t=0;t<e.length;t++)Ua.add(e[t]);for(var r of bi)r(e)}let xi=null,ki=!1;function Si(e){var S,v;var t=this,r=t.ownerDocument,n=e.type,i=((S=e.composedPath)==null?void 0:S.call(e))||[],s=i[0]||e.target;xi=e,ki||(ki=!0,setTimeout(()=>{ki=!1,xi=null}));var a=0,o=xi===e&&e[cr];if(o){var l=i.indexOf(o);if(l!==-1&&(t===document||t===window)){e[cr]=t;return}var c=i.indexOf(t);if(c===-1)return;l<=c&&(a=l)}if(s=i[a]||e.target,s!==t){Xi(e,"currentTarget",{configurable:!0,get(){return s||r}});var f=F,p=H;st(null),ot(null);try{for(var m,h=[];s!==null&&s!==t;){try{var _=(v=s[cr])==null?void 0:v[n];_!=null&&(!s.disabled||e.target===s)&&_.call(s,e)}catch(b){m?h.push(b):m=b}if(e.cancelBubble)break;a++,s=a<i.length?i[a]:null}if(m){for(let b of h)queueMicrotask(()=>{throw b});throw m}}finally{e[cr]=t,delete e.currentTarget,st(f),ot(p)}}}const Ei=((gs=globalThis==null?void 0:globalThis.window)==null?void 0:gs.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function jo(e){return(Ei==null?void 0:Ei.createHTML(e))??e}function Wa(e){var t=hi("template");return t.innerHTML=jo(e.replaceAll("<!>","<!---->")),t.content}function nn(e,t){var r=H;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function me(e,t){var r=(t&Gs)!==0,n=(t&qs)!==0,i,s=!e.startsWith("<!>");return()=>{i===void 0&&(i=Wa(s?e:"<!>"+e),r||(i=nr(i)));var a=n||ba?document.importNode(i,!0):i.cloneNode(!0);if(r){var o=nr(a),l=a.lastChild;nn(o,l)}else nn(a,a);return a}}function Wo(e,t,r="svg"){var n=!e.startsWith("<!>"),i=`<${r}>${n?e:"<!>"+e}</${r}>`,s;return()=>{if(!s){var a=Wa(i),o=nr(a);s=nr(o)}var l=s.cloneNode(!0);return nn(l,l),l}}function Xo(e,t){return Wo(e,t,"svg")}function J(){var e=document.createDocumentFragment(),t=document.createComment(""),r=It();return e.append(t,r),nn(t,r),e}function M(e,t){e!==null&&e.before(t)}function Go(e){let t=0,r=Wt(0),n;return()=>{_i()&&(d(r),Aa(()=>(t===0&&(n=Xt(()=>e(()=>Qr(r)))),t+=1,()=>{Mt(()=>{t-=1,t===0&&(n==null||n(),n=void 0,Qr(r))})})))}}var qo=Ut|xr;function Yo(e,t,r,n){new Ko(e,t,r,n)}class Ko{constructor(t,r,n,i){B(this,le);nt(this,"parent");nt(this,"is_pending",!1);nt(this,"transform_error");B(this,ft);B(this,Ri,null);B(this,dt);B(this,vr);B(this,He);B(this,Je,null);B(this,Ue,null);B(this,et,null);B(this,Pt,null);B(this,hr,0);B(this,Kt,0);B(this,Dr,!1);B(this,pn,new Set);B(this,vn,new Set);B(this,Ft,null);B(this,Wn,Go(()=>(D(this,Ft,Wt(u(this,hr))),()=>{D(this,Ft,null)})));var s;D(this,ft,t),D(this,dt,r),D(this,vr,a=>{var o=H;o.b=this,o.f|=ti,n(a)}),this.parent=H.b,this.transform_error=i??((s=this.parent)==null?void 0:s.transform_error)??(a=>a),D(this,He,en(()=>{U(this,le,Ui).call(this)},qo))}defer_effect(t){aa(t,u(this,pn),u(this,vn))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!u(this,dt).pending}update_pending_count(t,r){U(this,le,ji).call(this,t,r),D(this,hr,u(this,hr)+t),!(!u(this,Ft)||u(this,Dr))&&(D(this,Dr,!0),Mt(()=>{D(this,Dr,!1),u(this,Ft)&&Tr(u(this,Ft),u(this,hr))}))}get_effect_pending(){return u(this,Wn).call(this),d(u(this,Ft))}error(t){if(!u(this,dt).onerror&&!u(this,dt).failed)throw t;z!=null&&z.is_fork?(u(this,Je)&&z.skip_effect(u(this,Je)),u(this,Ue)&&z.skip_effect(u(this,Ue)),u(this,et)&&z.skip_effect(u(this,et)),z.oncommit(()=>{U(this,le,Wi).call(this,t)})):U(this,le,Wi).call(this,t)}}ft=new WeakMap,Ri=new WeakMap,dt=new WeakMap,vr=new WeakMap,He=new WeakMap,Je=new WeakMap,Ue=new WeakMap,et=new WeakMap,Pt=new WeakMap,hr=new WeakMap,Kt=new WeakMap,Dr=new WeakMap,pn=new WeakMap,vn=new WeakMap,Ft=new WeakMap,Wn=new WeakMap,le=new WeakSet,Yc=function(){try{D(this,Je,We(()=>u(this,vr).call(this,u(this,ft))))}catch(t){this.error(t)}},Kc=function(t){const r=u(this,dt).failed,{reset:n,invoke_onerror:i}=U(this,le,Hi).call(this,t);Mt(i),r&&D(this,et,We(()=>{r(u(this,ft),()=>t,()=>n)}))},Hi=function(t){var r=!1,n=!1;const i=()=>{if(r){Js();return}r=!0,n&&po(),u(this,et)!==null&&ar(u(this,et),()=>{D(this,et,null)}),U(this,le,Zn).call(this,()=>{U(this,le,Ui).call(this)})};return{reset:i,invoke_onerror:()=>{var a,o;try{n=!0,(o=(a=u(this,dt)).onerror)==null||o.call(a,t,i),n=!1}catch(l){Nt(l,u(this,He)&&u(this,He).parent)}}}},Zc=function(){const t=u(this,dt).pending;t&&(this.is_pending=!0,D(this,Ue,We(()=>t(u(this,ft)))),Mt(()=>{var r=D(this,Pt,document.createDocumentFragment()),n=It(),i=!1;if(r.append(n),D(this,Je,U(this,le,Zn).call(this,()=>{try{return We(()=>u(this,vr).call(this,n))}catch(s){try{this.error(s),i=!0}catch(a){Nt(a,u(this,He).parent)}return null}})),u(this,Je)===null){D(this,Pt,null),i&&U(this,le,Sn).call(this,z);return}u(this,Kt)===0&&(u(this,ft).before(r),D(this,Pt,null),ar(u(this,Ue),()=>{D(this,Ue,null)}),U(this,le,Sn).call(this,z))}))},Ui=function(){try{if(this.is_pending=this.has_pending_snippet(),D(this,Kt,0),D(this,hr,0),D(this,Je,We(()=>{u(this,vr).call(this,u(this,ft))})),u(this,Kt)>0){var t=D(this,Pt,document.createDocumentFragment());yi(u(this,Je),t);const r=u(this,dt).pending;D(this,Ue,We(()=>r(u(this,ft))))}else U(this,le,Sn).call(this,z)}catch(r){this.error(r)}},Sn=function(t){this.is_pending=!1,t.transfer_effects(u(this,pn),u(this,vn))},Zn=function(t){var r=H,n=F,i=ve;ot(u(this,He)),st(u(this,He)),Er(u(this,He).ctx);try{return tr.ensure(),t()}finally{ot(r),st(n),Er(i)}},ji=function(t,r){var n;if(!this.has_pending_snippet()){this.parent&&U(n=this.parent,le,ji).call(n,t,r);return}D(this,Kt,u(this,Kt)+t),u(this,Kt)===0&&(U(this,le,Sn).call(this,r),u(this,Ue)&&ar(u(this,Ue),()=>{D(this,Ue,null)}),u(this,Pt)&&(u(this,ft).before(u(this,Pt)),D(this,Pt,null)))},Wi=function(t){u(this,Je)&&(Oe(u(this,Je)),D(this,Je,null)),u(this,Ue)&&(Oe(u(this,Ue)),D(this,Ue,null)),u(this,et)&&(Oe(u(this,et)),D(this,et,null));let r=u(this,dt).failed;const n=i=>{const{reset:s,invoke_onerror:a}=U(this,le,Hi).call(this,i);a(),r&&D(this,et,U(this,le,Zn).call(this,()=>{try{return We(()=>{var o=H;o.b=this,o.f|=ti,r(u(this,ft),()=>i,()=>s)})}catch(o){return Nt(o,u(this,He).parent),null}}))};Mt(()=>{var i;try{i=this.transform_error(t)}catch(s){Nt(s,u(this,He)&&u(this,He).parent);return}i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(n,s=>Nt(s,u(this,He)&&u(this,He).parent)):n(i)})};function V(e,t){var r=t==null?"":typeof t=="object"?`${t}`:t;r!==(e[Wr]??(e[Wr]=e.nodeValue))&&(e[Wr]=r,e.nodeValue=`${r}`)}function Zo(e,t){return Qo(e,t)}const Dn=new Map;function Qo(e,{target:t,anchor:r,props:n={},events:i,context:s,intro:a=!0,transformError:o}){$o();var l=void 0,c=Co(()=>{var f=r??t.appendChild(It());Yo(f,{pending:()=>{}},h=>{$t({});var _=ve;s&&(_.c=s),i&&(n.$$events=i),l=e(h,n)||ai(),At()},o);var p=new Set,m=h=>{for(var _=0;_<h.length;_++){var S=h[_];if(!p.has(S)){p.add(S);var v=Uo(S);for(const y of[t,document]){var b=Dn.get(y);b===void 0&&(b=new Map,Dn.set(y,b));var k=b.get(S);k===void 0?(y.addEventListener(S,Si,{passive:v}),b.set(S,1)):b.set(S,k+1)}}}};return m(En(Ua)),bi.add(m),()=>{var v;for(var h of p)for(const b of[t,document]){var _=Dn.get(b),S=_.get(h);--S==0?(b.removeEventListener(h,Si),_.delete(h),_.size===0&&Dn.delete(b)):_.set(h,S)}bi.delete(m),f!==r&&((v=f.parentNode)==null||v.removeChild(f))}});return Jo.set(l,c),l}let Jo=new WeakMap;class $i{constructor(t,r=!0){nt(this,"anchor");B(this,bt,new Map);B(this,Rt,new Map);B(this,tt,new Map);B(this,_r,new Set);B(this,hn,!0);B(this,_n,t=>{if(u(this,bt).has(t)){var r=u(this,bt).get(t),n=u(this,Rt).get(r);if(n)Ln(n),u(this,_r).delete(r);else{var i=u(this,tt).get(r);i&&(Ln(i.effect),u(this,Rt).set(r,i.effect),u(this,tt).delete(r),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),n=i.effect)}for(const[s,a]of u(this,bt)){if(u(this,bt).delete(s),s===t)break;const o=u(this,tt).get(a);o&&(Oe(o.effect),u(this,tt).delete(a))}for(const[s,a]of u(this,Rt)){if(s===r||u(this,_r).has(s))continue;const o=()=>{if(Array.from(u(this,bt).values()).includes(s)){var c=document.createDocumentFragment();yi(a,c),c.append(It()),u(this,tt).set(s,{effect:a,fragment:c})}else Oe(a);u(this,_r).delete(s),u(this,Rt).delete(s)};u(this,hn)||!n?(u(this,_r).add(s),ar(a,o,!1)):o()}}});B(this,Xn,t=>{u(this,bt).delete(t);const r=Array.from(u(this,bt).values());for(const[n,i]of u(this,tt))r.includes(n)||(Oe(i.effect),u(this,tt).delete(n))});this.anchor=t,D(this,hn,r)}ensure(t,r){var n=z,i=Sa();if(r&&!u(this,Rt).has(t)&&!u(this,tt).has(t))if(i){var s=document.createDocumentFragment(),a=It();s.append(a),u(this,tt).set(t,{effect:We(()=>r(a)),fragment:s})}else u(this,Rt).set(t,We(()=>r(this.anchor)));if(u(this,bt).set(n,t),i){for(const[o,l]of u(this,Rt))o===t?n.unskip_effect(l):n.skip_effect(l);for(const[o,l]of u(this,tt))o===t?n.unskip_effect(l.effect):n.skip_effect(l.effect);n.oncommit(u(this,_n)),n.ondiscard(u(this,Xn))}else u(this,_n).call(this,n)}}bt=new WeakMap,Rt=new WeakMap,tt=new WeakMap,_r=new WeakMap,hn=new WeakMap,_n=new WeakMap,Xn=new WeakMap;function Ke(e,t,r=!1){var n=new $i(e),i=r?Ut:0;function s(a,o){n.ensure(a,o)}en(()=>{var a=!1;t((o,l=0)=>{a=!0,s(l,o)}),a||s(-1,null)},i)}function Xa(e,t){return t}function el(e,t,r){for(var n=[],i=t.length,s,a=t.length,o=0;o<i;o++){let p=t[o];ar(p,()=>{if(s){if(s.pending.delete(p),s.done.add(p),s.pending.size===0){var m=e.outrogroups;Ai(e,En(s.done)),m.delete(s),m.size===0&&(e.outrogroups=null)}}else a-=1},!1)}if(a===0){var l=n.length===0&&r!==null&&e.pending.size===0;if(l){var c=r,f=c.parentNode;Ao(f),f.append(c),e.items.clear()}Ai(e,t,!l)}else s={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(s)}function Ai(e,t,r=!0){var n;if(e.pending.size>0){n=new Set;for(const a of e.pending.values())for(const o of a)n.add(e.items.get(o).e)}for(var i=0;i<t.length;i++){var s=t[i];if(n!=null&&n.has(s)){s.f|=St;const a=document.createDocumentFragment();yi(s,a)}else Oe(t[i],r)}}var Ga;function Gt(e,t,r,n,i,s=null){var a=e,o=new Map,l=(t&ea)!==0;if(l){var c=e;a=c.appendChild(It())}var f=null,p=oi(()=>{var y=r();return ae(y)?y:y==null?[]:En(y)}),m,h=new Map,_=!0;function S(y){(k.effect.f&De)===0&&(k.pending.delete(y),k.fallback=f,tl(k,m,a,t,n),f!==null&&(m.length===0?(f.f&St)===0?Ln(f):(f.f^=St,sn(f,null,a)):ar(f,()=>{f=null})))}function v(y){k.pending.delete(y)}var b=en(()=>{m=d(p);for(var y=m.length,E=new Set,x=z,$=Sa(),A=0;A<y;A+=1){var L=m[A],T=n(L,A),N=_?null:o.get(T);N?(N.v&&Tr(N.v,L),N.i&&Tr(N.i,A),$&&x.unskip_effect(N.e)):(N=rl(o,_?a:Ga??(Ga=It()),L,T,A,i,t,r),_||(N.e.f|=St),o.set(T,N)),E.add(T)}if(y===0&&s&&!f&&(_?f=We(()=>s(a)):(f=We(()=>s(Ga??(Ga=It()))),f.f|=St)),y>E.size&&no(),!_)if(h.set(x,E),$){for(const[Q,ce]of o)E.has(Q)||x.skip_effect(ce.e);x.oncommit(S),x.ondiscard(v)}else S(x);d(p)}),k={effect:b,items:o,pending:h,outrogroups:null,fallback:f};_=!1}function an(e){for(;e!==null&&(e.f&it)===0;)e=e.next;return e}function tl(e,t,r,n,i){var N,Q,ce,de,ye,_e,Te,pt,xt;var s=(n&Fs)!==0,a=t.length,o=e.items,l=an(e.effect.first),c,f=null,p,m=[],h=[],_,S,v,b;if(s)for(b=0;b<a;b+=1)_=t[b],S=i(_,b),v=o.get(S).e,(v.f&St)===0&&((Q=(N=v.nodes)==null?void 0:N.a)==null||Q.measure(),(p??(p=new Set)).add(v));for(b=0;b<a;b+=1){if(_=t[b],S=i(_,b),v=o.get(S).e,e.outrogroups!==null)for(const Ne of e.outrogroups)Ne.pending.delete(v),Ne.done.delete(v);if((v.f&ze)!==0&&(Ln(v),s&&((de=(ce=v.nodes)==null?void 0:ce.a)==null||de.unfix(),(p??(p=new Set)).delete(v))),(v.f&St)!==0)if(v.f^=St,v===l)sn(v,null,r);else{var k=f?f.next:l;v===e.effect.last&&(e.effect.last=v.prev),v.prev&&(v.prev.next=v.next),v.next&&(v.next.prev=v.prev),qt(e,f,v),qt(e,v,k),sn(v,k,r),f=v,m=[],h=[],l=an(f.next);continue}if(v!==l){if(c!==void 0&&c.has(v)){if(m.length<h.length){var y=h[0],E;f=y.prev;var x=m[0],$=m[m.length-1];for(E=0;E<m.length;E+=1)sn(m[E],y,r);for(E=0;E<h.length;E+=1)c.delete(h[E]);qt(e,x.prev,$.next),qt(e,f,x),qt(e,$,y),l=y,f=$,b-=1,m=[],h=[]}else c.delete(v),sn(v,l,r),qt(e,v.prev,v.next),qt(e,v,f===null?e.effect.first:f.next),qt(e,f,v),f=v;continue}for(m=[],h=[];l!==null&&l!==v;)(c??(c=new Set)).add(l),h.push(l),l=an(l.next);if(l===null)continue}(v.f&St)===0&&m.push(v),f=v,l=an(v.next)}if(e.outrogroups!==null){for(const Ne of e.outrogroups)Ne.pending.size===0&&(Ai(e,En(Ne.done)),(ye=e.outrogroups)==null||ye.delete(Ne));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||c!==void 0){var A=[];if(c!==void 0)for(v of c)(v.f&ze)===0&&A.push(v);for(;l!==null;)(l.f&ze)===0&&l!==e.fallback&&A.push(l),l=an(l.next);var L=A.length;if(L>0){var T=(n&ea)!==0&&a===0?r:null;if(s){for(b=0;b<L;b+=1)(Te=(_e=A[b].nodes)==null?void 0:_e.a)==null||Te.measure();for(b=0;b<L;b+=1)(xt=(pt=A[b].nodes)==null?void 0:pt.a)==null||xt.fix()}el(e,A,T)}}s&&Mt(()=>{var Ne,Pe;if(p!==void 0)for(v of p)(Pe=(Ne=v.nodes)==null?void 0:Ne.a)==null||Pe.apply()})}function rl(e,t,r,n,i,s,a,o){var l=(a&Bs)!==0?(a&Hs)===0?So(r,!1,!1):Wt(r):null,c=(a&Vs)!==0?Wt(i):null;return{v:l,i:c,e:We(()=>(s(t,l??r,c??i,o),()=>{e.delete(n)}))}}function sn(e,t,r){if(e.nodes)for(var n=e.nodes.start,i=e.nodes.end,s=t&&(t.f&St)===0?t.nodes.start:r;n!==null;){var a=Jr(n);if(s.before(n),n===i)return;n=a}}function qt(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function oe(e,t,r,n,i){var o,l;if((o=t.$$host)!=null&&o.$$shadowRoot){const c=hi("slot");M(e,c);return}var s=(l=t.$$slots)==null?void 0:l[r],a=!1;s===!0&&(s=t.children,a=!0),s===void 0||s(e,a?()=>n:n)}function nl(e,t,r){var n=new $i(e);en(()=>{var i=t()??null;n.ensure(i,i&&(s=>r(s,i)))},Ut)}function il(e,t,r,n,i,s){var a=null,o=e,l=new $i(o,!1);en(()=>{const c=t()||null;var f=Ys;if(c===null){l.ensure(null,null);return}return l.ensure(c,p=>{if(c){if(a=hi(c,f),nn(a,a),n){var m=null,h=a.appendChild(It());n(a,h),m==null||m.remove()}H.nodes.end=a,p.before(a)}}),()=>{}},Ut),Rn(()=>{})}function al(e,t){var r=void 0,n;Ma(()=>{r!==(r=t())&&(n&&(Oe(n),n=null),r&&(n=We(()=>{gi(()=>r(e))})))})}function qa(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=qa(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function sl(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=qa(e))&&(n&&(n+=" "),n+=t);return n}function Cr(e){return typeof e=="object"?sl(e):e??""}const Ya=[...` 	
\r\f \v\uFEFF`];function ol(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var i of Object.keys(r))if(r[i])n=n?n+" "+i:i;else if(n.length)for(var s=i.length,a=0;(a=n.indexOf(i,a))>=0;){var o=a+s;(a===0||Ya.includes(n[a-1]))&&(o===n.length||Ya.includes(n[o]))?n=(a===0?"":n.substring(0,a))+n.substring(o+1):a=o}}return n===""?null:n}function Ka(e,t=!1){var r=t?" !important;":";",n="";for(var i of Object.keys(e)){var s=e[i];s!=null&&s!==""&&(n+=" "+i+": "+s+r)}return n}function Mi(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function ll(e,t){if(t){var r="",n,i;if(Array.isArray(t)?(n=t[0],i=t[1]):n=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var s=!1,a=0,o=!1,l=[];n&&l.push(...Object.keys(n).map(Mi)),i&&l.push(...Object.keys(i).map(Mi));var c=0,f=-1;const S=e.length;for(var p=0;p<S;p++){var m=e[p];if(o?m==="/"&&e[p-1]==="*"&&(o=!1):s?s===m&&(s=!1):m==="/"&&e[p+1]==="*"?o=!0:m==='"'||m==="'"?s=m:m==="("?a++:m===")"&&a--,!o&&s===!1&&a===0){if(m===":"&&f===-1)f=p;else if(m===";"||p===S-1){if(f!==-1){var h=Mi(e.substring(c,f).trim());if(!l.includes(h)){m!==";"&&p++;var _=e.substring(c,p).trim();r+=" "+_+";"}}c=p+1,f=-1}}}}return n&&(r+=Ka(n)),i&&(r+=Ka(i,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Fe(e,t,r,n,i,s){var a=e[ni];if(a!==r||a===void 0){var o=ol(r,n,s);o==null?e.removeAttribute("class"):t?e.className=o:e.setAttribute("class",o),e[ni]=r}else if(s&&i!==s)for(var l in s){var c=!!s[l];(i==null||c!==!!i[l])&&e.classList.toggle(l,c)}return s}function Ti(e,t={},r,n){for(var i in r){var s=r[i];t[i]!==s&&(r[i]==null?e.style.removeProperty(i):e.style.setProperty(i,s,n))}}function Bn(e,t,r,n){var i=e[ii];if(i!==t){var s=ll(t,n);s==null?e.removeAttribute("style"):e.style.cssText=s,e[ii]=t}else n&&(Array.isArray(n)?(Ti(e,r==null?void 0:r[0],n[0]),Ti(e,r==null?void 0:r[1],n[1],"important")):Ti(e,r,n));return n}function Za(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Qa(e,t){var r=!("__defaultValue"in e);!r&&e.__defaultValue===t||(e.__defaultValue=t,Ja(e,!r||"__value"in e))}function Ja(e,t){var r=e.__defaultValue,n=e.multiple,i=n?r??[]:null;if(!(n&&!ae(i))){var s=e.selectedIndex,a=t&&n?new Set(e.selectedOptions):null;for(var o of e.options){var l=Ni(o);Za(o,n?i.includes(l):ya(l,r))}if(t)if(a!==null)for(o of e.options){var c=a.has(o);o.selected!==c&&(o.selected=c)}else e.selectedIndex!==s&&(e.selectedIndex=s)}}function Dt(e,t,r=!1){if(e.multiple){if(t==null)return;if(!ae(t))return Qs();for(var n of e.options)n.selected=t.includes(Ni(n));return}for(n of e.options){var i=Ni(n);if(ya(i,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function fr(e){var t=new MutationObserver(r=>{r.every(cl)||("__defaultValue"in e&&Ja(e,!1),"__value"in e&&Dt(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Rn(()=>{t.disconnect()})}function Ni(e){return"__value"in e?e.__value:e.value}function cl(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(r=>r.nodeName==="SELECTEDCONTENT")}return!1}const on=Symbol("class"),ln=Symbol("style"),es=Symbol("is custom element"),ts=Symbol("is html"),ul=Nn?"input":"INPUT",fl=Nn?"option":"OPTION",rs=Nn?"select":"SELECT",dl=Nn?"progress":"PROGRESS";function cn(e,t){var r=Vn(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==dl)||(e.value=t??"")}function pl(e,t){var r=Vn(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function Me(e,t,r,n){var i=Vn(e);i[t]!==(i[t]=r)&&(t==="loading"&&(e[Ds]=r),r==null?e.removeAttribute(t):typeof r!="string"&&as(e).has(t)?e[t]=r:e.setAttribute(t,r))}function vl(e,t,r,n,i=!1,s=!1){var a=Vn(e),o=a[es],l=!a[ts],c=t||{},f=e.nodeName===fl,p=e.nodeName===rs;for(var m in t)!(m in r)&&m[0]+m[1]!=="$$"&&(r[m]=null);r.class?r.class=Cr(r.class):r[on]&&(r.class=null),r[ln]&&(r.style??(r.style=null));var h=as(e);if(e.nodeName===ul&&"type"in r&&("value"in r||"__value"in r)){var _=r.type;(_!==c.type||_===void 0&&e.hasAttribute("type"))&&(c.type=_,Me(e,"type",_))}for(const x in r){let $=r[x];if(f&&x==="value"&&$==null){e.value=e.__value="",c[x]=$;continue}if(x==="class"){var S=e.namespaceURI==="http://www.w3.org/1999/xhtml";Fe(e,S,$,n,t==null?void 0:t[on],r[on]),c[x]=$,c[on]=r[on];continue}if(x==="style"){Bn(e,$,t==null?void 0:t[ln],r[ln]),c[x]=$,c[ln]=r[ln];continue}var v=c[x];if(!($===v&&!($===void 0&&e.hasAttribute(x)))){c[x]=$;var b=x[0]+x[1];if(b!=="$$")if(b==="on"){const A={},L="$$"+x;let T=x.slice(2);var k=Bo(T);if(zo(T)&&(T=T.slice(0,-7),A.capture=!0),!k&&v){if($!=null)continue;e.removeEventListener(T,c[L],A),c[L]=null}if(k)Z(T,e,$),ur([T]);else if($!=null){let N=function(Q){c[x].call(this,Q)};c[L]=ja(T,e,N,A)}}else if(x==="style")Me(e,x,$);else if(x==="autofocus")go(e,!!$);else if(!o&&(x==="__value"||x==="value"&&$!=null))e.value=e.__value=$;else if(x==="selected"&&f)Za(e,$);else{var y=x;l||(y=Fo(y));var E=y==="defaultValue"||y==="defaultChecked";if(p&&y==="defaultValue")continue;if($==null&&!o&&!E)if(a[x]=null,y==="value"||y==="checked"){let A=e;const L=t===void 0;if(y==="value"){let T=A.defaultValue;A.removeAttribute(y),A.defaultValue=T,A.value=A.__value=L?T:null}else{let T=A.defaultChecked;A.removeAttribute(y),A.defaultChecked=T,A.checked=L?T:!1}}else e.removeAttribute(x);else E||(o||typeof $!="string")&&h.has(y)?(e[y]=$,y in a&&(a[y]=Ee)):typeof $!="function"&&Me(e,y,$)}}}return c}function ns(e,t,r=[],n=[],i=[],s,a=!1,o=!1){sa(i,r,n,l=>{var c=void 0,f={},p=e.nodeName===rs,m=!1;if(Ma(()=>{var _=t(...l.map(d)),S=vl(e,c,_,s,a,o);if(m&&p){var v=e;"defaultValue"in _&&Qa(v,_.defaultValue),"value"in _&&Dt(v,_.value)}for(let k of Object.getOwnPropertySymbols(f))_[k]||Oe(f[k]);for(let k of Object.getOwnPropertySymbols(_)){var b=_[k];k.description===Ks&&(!c||b!==c[k])&&(f[k]&&Oe(f[k]),f[k]=We(()=>al(e,()=>b))),S[k]=b}c=S}),p){var h=e;gi(()=>{var _=c;"defaultValue"in _&&Qa(h,_.defaultValue),Dt(h,_.value,!0),fr(h)})}m=!0})}function Vn(e){return e[Tn]??(e[Tn]={[es]:e.nodeName.includes("-"),[ts]:e.namespaceURI===ra})}var is=new Map;function as(e){var t=e.getAttribute("is")||e.nodeName,r=is.get(t);if(r)return r;is.set(t,r=new Set);for(var n,i=e,s=Element.prototype;s!==i;){n=Gi(i);for(var a in n)n[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&r.add(a);i=Qn(i)}return r}function Ci(e,t){return e===t||(e==null?void 0:e[Et])===t}function Oi(e=ai(),t,r,n){var i=ve.r,s=H;return gi(()=>{var a,o;return Aa(()=>{a=o,o=[],Xt(()=>{Ci(r(...o),e)||(t(e,...o),a&&Ci(r(...a),e)&&t(null,...a))})}),()=>{let l=s;for(;l!==i&&l.parent!==null&&l.parent.f&$n;)l=l.parent;const c=()=>{o&&Ci(r(...o),e)&&t(null,...o)},f=l.teardown;l.teardown=()=>{c(),f==null||f()}}}),e}function hl(e=!1){const t=ve,r=t.l.u;if(!r)return;let n=()=>lr(t.s);if(e){let i=0,s={};const a=Ar(()=>{let o=!1;const l=t.s;for(const c in l)l[c]!==s[c]&&(s[c]=l[c],o=!0);return o&&i++,i});n=()=>d(a)}r.b.length&&No(()=>{ss(t,n),Jn(r.b)}),ir(()=>{const i=Xt(()=>r.m.map(Is));return()=>{for(const s of i)typeof s=="function"&&s()}}),r.a.length&&ir(()=>{ss(t,n),Jn(r.a)})}function ss(e,t){if(e.l.s)for(const r of e.l.s)d(r);t()}let Fn=!1;function _l(e){var t=Fn;try{return Fn=!1,[e(),Fn]}finally{Fn=t}}const gl={get(e,t){if(!e.exclude.includes(t))return d(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var n=H;try{ot(e.parent_effect),e.special[t]=ct({get[t](){return e.props[t]}},t,ta)}finally{ot(n)}}return e.special[t](r),_a(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),_a(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function se(e,t){return new Proxy({props:e,exclude:t,special:{},version:Wt(0),parent_effect:H},gl)}const ml={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Ur(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let i=e.props[n];Ur(i)&&(i=i());const s=Ht(i,t);if(s&&s.set)return s.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Ur(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const i=Ht(n,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===Et||t===Ji)return!1;for(let r of e.props)if(Ur(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Ur(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function ue(...e){return new Proxy({props:e},ml)}function ct(e,t,r,n){var E;var i=!Sr||(r&js)!==0,s=(r&Ws)!==0,a=(r&Xs)!==0,o=n,l=!0,c=void 0,f=()=>a&&i?(c??(c=Ar(n)),d(c)):(l&&(l=!1,o=a?Xt(n):n),o);let p;if(s){var m=Et in e||Ji in e;p=((E=Ht(e,t))==null?void 0:E.set)??(m&&t in e?x=>e[t]=x:void 0)}var h,_=!1;s?[h,_]=_l(()=>e[t]):h=e[t],h===void 0&&n!==void 0&&(h=f(),p&&(i&&lo(),p(h)));var S;if(i?S=()=>{var x=e[t];return x===void 0?f():(l=!0,x)}:S=()=>{var x=e[t];return x!==void 0&&(o=void 0),x===void 0?o:x},i&&(r&ta)===0)return S;if(p){var v=e.$$legacy;return(function(x,$){return arguments.length>0?((!i||!$||v||_)&&p($?S():x),x):S()})}var b=!1,k=((r&Us)!==0?Ar:oi)(()=>(b=!1,S()));s&&d(k);var y=H;return(function(x,$){if(arguments.length>0){const A=$?d(k):i&&s?Ve(x):x;return O(k,A),b=!0,o!==void 0&&(o=A),x}return zt&&b||(y.f&De)!==0?k.v:d(k)})}function Pi(e){ve===null&&to(),Sr&&ve.l!==null?yl(ve).m.push(e):ir(()=>{const t=Xt(e);if(typeof t=="function")return t})}function yl(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const wl="5";typeof window<"u"&&((ms=window.__svelte??(window.__svelte={})).v??(ms.v=new Set)).add(wl);const W=Ve({ready:!1,cleanScreen:!1,panelOpen:!0,settingsOpen:!1,startupOpen:!0,focusSection:null,focusNonce:0,popupSection:null,dockExpanded:!1,search:"",status:{}});function bl(e){W.popupSection=W.popupSection===e?null:e}const Ge=Ve({});function os(e){try{return structuredClone(e)}catch{return JSON.parse(JSON.stringify(e))}}function re(e){var t,r,n;if(e==null)return e;try{return((n=(r=(t=window.XRA)==null?void 0:t.i18n)==null?void 0:r.t)==null?void 0:n.call(r,e))??e}catch{return e}}function qe(e,t){const r=e.split(".");let n=Ge;for(const i of r){if(n==null)return t;n=n[i]}return n===void 0?t:n}function xl(e){var r,n,i,s,a,o,l,c;const t=window.XRA;if(t){if(e.startsWith("background.")){(n=(r=t.background)==null?void 0:r.apply)==null||n.call(r);return}if(e==="ui.language"){(s=(i=t.i18n)==null?void 0:i.setLanguage)==null||s.call(i,Ge.ui.language);return}if(e==="ui.preview_wireframe"){typeof t.applyMocapWireframeVisibility=="function"&&t.applyMocapWireframeVisibility();return}if(e==="ui.mocap_view"){typeof t.applyMocapWireframeVisibility=="function"&&t.applyMocapWireframeVisibility();return}if(e.startsWith("performance.")){window.XRA_render_fps_limit=Number(Ge.performance.render_fps??60),window.XRA_gpu_preference=String(Ge.performance.gpu_preference||"default"),window.XRA_preserve_drawing_buffer=Ge.performance.preserve_drawing_buffer!==!1,window.XRA_antialias=Ge.performance.antialias!=="off",(o=(a=t.events)==null?void 0:a.emit)==null||o.call(a,"performance",Ge.performance);return}(c=(l=t.events)==null?void 0:l.emit)==null||c.call(l,"config-change",{path:e,value:qe(e)})}}function ut(e,t){var s,a;const r=window.XRA,n=e.split(".");let i=Ge;for(let o=0;o<n.length-1;o++)i[n[o]]==null&&(i[n[o]]={}),i=i[n[o]];if(i[n[n.length-1]]=t,r!=null&&r.config){let o=r.config;for(let l=0;l<n.length-1;l++)o[n[l]]==null&&(o[n[l]]={}),o=o[n[l]];o[n[n.length-1]]=t}xl(e);try{(a=(s=r==null?void 0:r.profileService)==null?void 0:s.save)==null||a.call(s)}catch{}}function Hn(e,t,r){return new Promise((n,i)=>{const s=setTimeout(()=>i(new Error(`${r} timed out after ${t} ms`)),t);Promise.resolve(e).then(a=>{clearTimeout(s),n(a)},a=>{clearTimeout(s),i(a)})})}async function ls({timeout:e=12e3,dataTimeout:t=8e3}={}){var n,i,s;const r=(n=window.XRA)==null?void 0:n.nativeBridge;if(!(r!=null&&r.startNativeStreamer))throw new Error("native bridge unavailable");try{await Hn(r.startNativeStreamer(),e,"Camera start");const a=performance.now()+t;for(;performance.now()<a;){if((i=r.cameraDataReady)!=null&&i.call(r))return!0;await new Promise(o=>setTimeout(o,120))}return!0}catch(a){try{await((s=r.forceStopCamera)==null?void 0:s.call(r))}catch{}throw a}}async function kl({timeout:e=8e3}={}){var r,n;const t=(r=window.XRA)==null?void 0:r.nativeBridge;if(t!=null&&t.stopNativeStreamer)try{await Hn(t.stopNativeStreamer(),e,"Camera stop")}catch(i){try{await((n=t.forceStopCamera)==null?void 0:n.call(t))}catch{}throw i}}async function Sl({timeout:e=12e3,readyTimeout:t=6e3}={}){var n,i,s,a;const r=(n=window.XRA)==null?void 0:n.recorder;if(!(r!=null&&r.start))throw new Error("recorder unavailable");try{await Hn(r.start(),e,"Recording start");const o=performance.now()+t;for(;performance.now()<o;){if((s=(i=r.status)==null?void 0:i.call(r))!=null&&s.active)return!0;await new Promise(l=>setTimeout(l,120))}return!0}catch(o){try{await((a=r.stop)==null?void 0:a.call(r))}catch{}throw o}}async function El({timeout:e=8e3}={}){var r,n;const t=(r=window.XRA)==null?void 0:r.recorder;if(t!=null&&t.stop)try{await Hn(t.stop(),e,"Recording stop")}catch(i){try{await((n=t.stop)==null?void 0:n.call(t))}catch{}throw i}}function Un(){var e,t,r;W.cleanScreen=!W.cleanScreen,document.body.classList.toggle("xra-total-clean-screen",W.cleanScreen);try{(r=(t=(e=window.XRA)==null?void 0:e.ui)==null?void 0:t.setHidden)==null||r.call(t,W.cleanScreen)}catch{}}function $l(){var e;try{Object.assign(Ge,os(((e=window.XRA)==null?void 0:e.config)||{}))}catch{}}function cs(){var e;try{const t=(e=window.SA_bridge)==null?void 0:e.backend;t&&typeof t.status=="function"&&(W.status=t.status()||{})}catch{}}function Al(){const e=()=>window.XRA&&window.XRA.config?(Object.assign(Ge,os(window.XRA.config)),W.ready=!0,cs(),window.addEventListener("keydown",t=>{t.key==="Escape"&&W.cleanScreen&&(t.preventDefault(),Un())},!0),!0):!1;if(!e()){const t=setInterval(()=>{e()&&clearInterval(t)},200)}}const Ml={camera:{title:"Camera",icon:"Camera"},devices:{title:"Devices",icon:"SlidersHorizontal"},pose_model:{title:"Pose model",icon:"PersonStanding"},performance:{title:"Performance",icon:"Zap"},tracking:{title:"Motion capture",icon:"Activity"},body:{title:"Body",icon:"PersonStanding"},collider:{title:"Body collider",icon:"Shield"},lip:{title:"Audio & Lip-sync",icon:"Mic"},background:{title:"Background",icon:"Image"},avatar:{title:"Character position (avatar only)",icon:"User"},second_avatar:{title:"Remote avatar (Studio Link)",icon:"Globe"},stage:{title:"3D Stage & Environment",icon:"Landmark"},recorder:{title:"Recording / capture",icon:"Video"},visual_effects:{title:"Visual effects",icon:"Sparkles"},debug:{title:"Diagnostics",icon:"Bug"},ui:{title:"UI & overlays",icon:"Monitor"}},us=["performance","tracking","body","collider","lip","background","stage","avatar","second_avatar","recorder","visual_effects","debug","ui","camera","devices","pose_model"],Tl=new Set(["left_settings","_custom_","_excluded_"]),Nl=new Set(["camera.view_presets","camera.selected_view_preset","ui.preview_video","ui.preview_wireframe","ui.preview_debug","performance.auto_last_result","recorder.output_dir"]);function fs(e){const t=String(e).replace(/_/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").trim();return t.charAt(0).toUpperCase()+t.slice(1)}const un=e=>{var t;return String(((t=e.tracking)==null?void 0:t.guard_mode)||"").toLowerCase()!=="off"},Cl={"ui.language":{type:"select",options:()=>{var e,t;return((t=(e=window.XRA)==null?void 0:e.i18n)==null?void 0:t.LANGUAGES)||[["en","English"]]}},"background.mode":{type:"select",options:[["color","Color"],["image","Image"],["none","None (transparent · OBS)"]]},"background.color":{type:"color",when:e=>{var t;return((t=e.background)==null?void 0:t.mode)==="color"}},"background.path":{type:"text",when:e=>{var t;return((t=e.background)==null?void 0:t.mode)==="image"},desc:"Path or file name of the background image."},"ui.mocap_view":{type:"select",label:"Mocap window",options:[["off","Off"],["both","Webcam + skeleton"],["wireframe","Skeleton only"],["video","Webcam only"]]},"ui.mocap_visibility":{type:"select",label:"Mocap window visibility",options:[["always","Always on (black while idle)"],["auto","Auto (hide when tracking is off)"]]},"performance.tracking_pipeline":{type:"select",label:"Tracking mode",options:[["FULL_BODY","Full Body"],["FACE","Face only"],["UPPER_BODY","Upper body"]]},"performance.render_resolution":{type:"select",options:[["720p","720p (HD · GPU Saving)"],["1080p","1080p (Full HD · Recommended)"],["1440p","1440p (2K · High resolution)"]]},"performance.render_fps":{type:"slider",min:15,max:240,step:1},"performance.gpu_preference":{type:"select",label:"Graphics card (GPU)",options:[["default","Default"],["high-performance","Dedicated GPU (High Performance)"],["low-power","Integrated GPU (Low Power)"]]},"performance.shadows":{type:"select",options:[["auto","Auto"],["on","Enabled"],["off","Disabled (GPU saving)"]]},"performance.antialias":{type:"select",label:"Anti-Aliasing (AA)",options:[["auto","Enabled (Hardware MSAA · Recommended)"],["off","Disabled"]]},"performance.spring_bone":{type:"select",label:"Hair/cloth physics (Spring Bone)",options:[["full","Full (every frame)"],["half","Half (1 frame out of 2 · Saving)"],["off","Off"]]},"performance.infer_mode":{type:"select",options:[["native","Native (Auto)"],["640x360","640×360 (Recommended · 30 FPS smooth)"],["640x480","640×480 (Standard 4:3 format)"],["1280x720","1280×720 (HD 720p · High precision)"]]},"performance.pose_fps":{type:"slider",min:5,max:30,step:1},"performance.hand_fps":{type:"slider",min:5,max:30,step:1},"performance.min_tracking_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_pose_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_face_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_joint_confidence":{type:"slider",min:.05,max:1,step:.05},"tracking.hand_recovery_mode":{type:"select",options:[["normal","Normal"],["aggressive","Aggressive"],["off","Off"]],desc:"How the backend re-acquires hands after they leave the frame."},"tracking.hand_detection_sensitivity":{type:"select",options:[["high","High"],["normal","Normal"],["low","Low"]]},"tracking.stabilize_hand_percent":{type:"slider",min:0,max:100,step:1,group:"Stabilization"},"tracking.stabilize_arm":{type:"slider",min:0,max:100,step:1},"tracking.stabilize_arm_time":{type:"slider",min:0,max:2,step:.05},"tracking.native_smoothing":{type:"slider",min:0,max:1,step:.01,group:"Smoothing"},"tracking.adaptive_smoothing_strength":{type:"slider",min:0,max:1,step:.01},"tracking.body_bend_reduction":{type:"slider",min:0,max:1,step:.01,group:"Body"},"tracking.upper_body_guard":{type:"toggle",group:"Guard",desc:"Hold the upper body steady when tracking confidence drops."},"tracking.upper_body_guard_strength":{type:"slider",min:0,max:1,step:.01,group:"Guard",enabled:e=>{var t;return!!((t=e.tracking)!=null&&t.upper_body_guard)}},"tracking.guard_mode":{type:"select",group:"Guard",options:[["off","Off"],["auto","Auto"]],desc:"Auto re-acquires tracking after an occlusion or a fast jump."},"tracking.guard_jump_deg":{type:"slider",min:5,max:120,step:1,enabled:un,desc:"Largest sudden joint-angle jump (deg) treated as noise."},"tracking.guard_hold_ms":{type:"slider",min:0,max:2e3,step:10,enabled:un,desc:"How long to hold the pose before re-acquiring (ms)."},"tracking.guard_reacquire_deg":{type:"slider",min:5,max:120,step:1,enabled:un,desc:"Angle (deg) needed to end the hold and resume tracking."},"tracking.guard_confidence_min":{type:"slider",min:0,max:1,step:.01,enabled:un},"tracking.guard_release_ms":{type:"slider",min:0,max:2e3,step:10,enabled:un},"tracking.desk_torso_lock":{type:"slider",min:0,max:1,step:.01,group:"Desk lock",desc:"Lock torso rotation when working at a desk."},"tracking.desk_hips_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_legs_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_max_yaw_deg":{type:"slider",min:0,max:90,step:1},"tracking.desk_max_pitch_deg":{type:"slider",min:0,max:90,step:1},"tracking.desk_max_roll_deg":{type:"slider",min:0,max:90,step:1},"body.anchor_strength":{type:"slider",min:0,max:1,step:.01},"body.transition_ms":{type:"slider",min:0,max:2e3,step:10},"avatar.offset_x":{type:"slider",min:-5,max:5,step:.01},"avatar.offset_y":{type:"slider",min:-5,max:5,step:.01},"avatar.offset_z":{type:"slider",min:-5,max:5,step:.01},"avatar.rotation_y":{type:"slider",min:-180,max:180,step:1},"second_avatar.offset_x":{type:"slider",min:-20,max:20,step:.1},"second_avatar.offset_y":{type:"slider",min:-10,max:10,step:.1},"second_avatar.offset_z":{type:"slider",min:-10,max:10,step:.1},"second_avatar.rotation_y":{type:"slider",min:-180,max:180,step:1},"stage.scale":{type:"slider",min:.1,max:5,step:.01},"stage.rotation_x":{type:"slider",min:-180,max:180,step:1},"stage.rotation_y":{type:"slider",min:-180,max:180,step:1},"stage.rotation_z":{type:"slider",min:-180,max:180,step:1},"stage.offset_x":{type:"slider",min:-10,max:10,step:.05},"stage.offset_y":{type:"slider",min:-10,max:10,step:.05},"stage.offset_z":{type:"slider",min:-10,max:10,step:.05},"stage.scene_zoom":{type:"slider",min:.5,max:3,step:.01},"stage.lights_intensity":{type:"slider",min:0,max:3,step:.05},"collider.preset":{type:"select",options:[["CUSTOM","Custom"],["NONE","None"]]},"collider.reaction":{type:"select",options:[["z_push","Z push"],["bounce","Bounce"],["block","Block"]]},"collider.head":{type:"slider",min:0,max:200,step:1},"collider.chest":{type:"slider",min:0,max:200,step:1},"collider.waist":{type:"slider",min:0,max:200,step:1},"collider.hip":{type:"slider",min:0,max:200,step:1},"collider.front_clearance":{type:"slider",min:0,max:50,step:1},"lip.analysis_fps":{type:"slider",min:5,max:60,step:1},"lip.fft_size":{type:"select",label:"FFT size",options:[["256","256"],["512","512"],["1024","1024"],["2048","2048"]]},"lip.mic_mix":{type:"slider",min:0,max:1,step:.01},"lip.threshold":{type:"slider",min:0,max:.2,step:.001},"lip.response_gain":{type:"slider",min:0,max:3,step:.05},"lip.vowel_emphasis":{type:"slider",min:0,max:3,step:.05},"recorder.mode":{type:"select",label:"Recording source",options:[["video_audio","Video + Audio"],["video","Video only"],["audio","Audio only"]]},"recorder.audio_only_variant":{type:"select",label:"Audio only mode",options:[["both","Processed + RAW"],["processed","Processed"],["raw","RAW"]]},"recorder.capture_source":{type:"select",label:"Output source",options:[["classic_v74","Classic output · recommended"],["clean_scene","Clean scene output · experimental (no UI)"],["native_xr","XR native video only · fallback"]]},"recorder.output_format":{type:"select",options:[["webm","WebM"],["mp4","MP4"]]},"recorder.audio_profile":{type:"select",options:[["podcast","Podcast"],["call","Call (Browser echo/noise filters)"]]},"recorder.hardware_encode":{type:"select",options:[["auto","Auto"],["on","On"],["off","Off (CPU)"]]},"recorder.width":{type:"slider",min:320,max:3840,step:2},"recorder.height":{type:"slider",min:240,max:2160,step:2},"recorder.fps":{type:"slider",min:15,max:60,step:1},"recorder.gate_threshold_db":{type:"slider",min:-80,max:-5,step:.5},"recorder.gate_hold_ms":{type:"slider",min:0,max:1e3,step:10},"recorder.gate_release_ms":{type:"slider",min:0,max:1e3,step:10},"recorder.video_bps":{type:"slider",min:5e5,max:2e7,step:1e5},"recorder.audio_bps":{type:"slider",min:32e3,max:32e4,step:8e3},"recorder.segment_minutes":{type:"select",options:[["0","Off"],["30","Every 30 min"],["60","Every 60 min"]]},"recorder.raw_audio_format":{type:"select",options:[["flac","FLAC (lossless)"],["wav","WAV (large)"]]},"recorder.filename":{type:"text"},"camera.optimized":{type:"toggle"},"camera.width":{type:"slider",min:160,max:1920,step:2},"camera.height":{type:"slider",min:120,max:1080,step:2},"camera.fps":{type:"slider",min:5,max:60,step:1}};function Ol(e){const t=[];for(const[r,n]of Object.entries(e||{})){if(Tl.has(r)||!n||typeof n!="object"||Array.isArray(n))continue;const i=Ml[r]||{},s=[];for(const[a,o]of Object.entries(n)){const l=`${r}.${a}`;if(Nl.has(l))continue;const c=Cl[l]||{};if(c.hidden||o!==null&&typeof o=="object")continue;const f=c.type||(typeof o=="boolean"?"toggle":typeof o=="number"?"number":"text");s.push({type:f,path:l,label:c.label||fs(a),min:c.min,max:c.max,step:c.step,options:c.options,when:c.when,enabled:c.enabled,group:c.group,desc:c.desc})}s.length&&t.push({id:r,title:i.title||fs(r),icon:i.icon||"⚙",controls:s})}return t.sort((r,n)=>{const i=us.indexOf(r.id),s=us.indexOf(n.id);return(i<0?999:i)-(s<0?999:s)}),t}var Pl=me("<option> </option>"),Rl=me("<select></select>"),Ll=me("<select><option> </option><option> </option></select>"),Il=me('<span class="xra-val"> </span> <div class="xra-meter-wrap"><div class="xra-meter"></div> <input class="xra-meter-input" type="range"/> <div class="xra-meter-scale"><span> </span><span> </span></div></div>',1),zl=me('<input type="checkbox"/>'),Dl=me('<input type="color"/>'),Bl=me('<input type="number"/>'),Vl=me('<input type="text"/>'),Fl=me('<label><span class="xra-row-label"> </span> <!></label>');function Hl(e,t){$t(t,!0);let r=ct(t,"disabled",3,!1);const n=Be(()=>typeof t.control.options=="function"?t.control.options():t.control.options||[]),i=k=>k===!1?"off":"auto",s=k=>k==="off"?!1:null;var a=Fl();let o;var l=I(a),c=j(l,!0),f=P(l,2);{var p=k=>{var y=Rl();Gt(y,21,()=>d(n),Xa,(x,$)=>{var A=Pl(),L=j(A,!0),T={};he(N=>{V(L,N),T!==(T=d($)[0])&&(A.value=(A.__value=T)??"")},[()=>re(d($)[1])]),M(x,A)});var E;fr(y),he(x=>{y.disabled=r(),E!==(E=x)&&(y.value=(y.__value=E)??"",Dt(y,E))},[()=>qe(t.control.path)]),Z("change",y,x=>ut(t.control.path,x.currentTarget.value)),M(k,y)},m=k=>{var y=Ll(),E=I(y),x=j(E,!0);E.value=E.__value="auto";var $=P(E),A=j($,!0);$.value=$.__value="off";var L;fr(y),he((T,N,Q)=>{y.disabled=r(),V(x,T),V(A,N),L!==(L=Q)&&(y.value=(y.__value=L)??"",Dt(y,L))},[()=>re("Auto (follow tracking)"),()=>re("Off"),()=>i(qe(t.control.path))]),Z("change",y,T=>ut(t.control.path,s(T.currentTarget.value))),M(k,y)},h=k=>{const y=Be(()=>Number(qe(t.control.path,t.control.min))),E=Be(()=>t.control.max>t.control.min?Math.round((d(y)-t.control.min)/(t.control.max-t.control.min)*100):0);var x=Il(),$=K(x),A=j($,!0),L=P($,2),T=I(L),N=P(T,2),Q=P(N,2),ce=I(Q),de=j(ce,!0),ye=P(ce),_e=j(ye,!0);he(Te=>{V(A,Te),Bn(T,`--xra-fill:${d(E)??""}%`),Me(N,"min",t.control.min),Me(N,"max",t.control.max),Me(N,"step",t.control.step),cn(N,d(y)),N.disabled=r(),V(de,t.control.min),V(_e,t.control.max)},[()=>qe(t.control.path)]),Z("input",N,Te=>ut(t.control.path,Number(Te.currentTarget.value))),M(k,x)},_=k=>{var y=zl();he(E=>{pl(y,E),y.disabled=r()},[()=>!!qe(t.control.path)]),Z("change",y,E=>ut(t.control.path,E.currentTarget.checked)),M(k,y)},S=k=>{var y=Dl();he(E=>{cn(y,E),y.disabled=r()},[()=>qe(t.control.path)]),Z("input",y,E=>ut(t.control.path,E.currentTarget.value)),M(k,y)},v=k=>{var y=Bl();he(E=>{Me(y,"step",t.control.step||"any"),cn(y,E),y.disabled=r()},[()=>qe(t.control.path,0)]),Z("input",y,E=>ut(t.control.path,Number(E.currentTarget.value))),M(k,y)},b=k=>{var y=Vl();he(E=>{cn(y,E),y.disabled=r()},[()=>qe(t.control.path,"")]),Z("change",y,E=>ut(t.control.path,E.currentTarget.value)),M(k,y)};Ke(f,k=>{t.control.type==="select"?k(p):t.control.type==="tristate"?k(m,1):t.control.type==="slider"?k(h,2):t.control.type==="toggle"?k(_,3):t.control.type==="color"?k(S,4):t.control.type==="number"?k(v,5):t.control.type==="text"&&k(b,6)})}he(k=>{o=Fe(a,1,"xra-row",null,o,{"xra-row-slider":t.control.type==="slider",disabled:r()}),Me(l,"title",t.control.desc||""),V(c,k)},[()=>re(t.control.label)]),M(e,a),At()}ur(["change","input"]);var Ul=me('<div class="xra-group"> </div>');function ds(e,t){$t(t,!0);const r=Be(()=>{const s=(W.search||"").trim().toLowerCase(),a=[];let o=null;for(const l of t.section.controls)l.when&&!l.when(Ge)||s&&!`${l.label} ${l.path}`.toLowerCase().includes(s)||(l.group&&l.group!==o?(a.push({header:l.group}),o=l.group):l.group||(o=null),a.push({control:l,disabled:l.enabled?!l.enabled(Ge):!1}));return a});var n=J(),i=K(n);Gt(i,19,()=>d(r),(s,a)=>s.header?`g${a}`:s.control.path,(s,a)=>{var o=J(),l=K(o);{var c=p=>{var m=Ul(),h=j(m,!0);he(()=>V(h,d(a).header)),M(p,m)},f=p=>{Hl(p,{get control(){return d(a).control},get disabled(){return d(a).disabled}})};Ke(l,p=>{d(a).header?p(c):p(f,-1)})}M(s,o)}),M(e,n),At()}vo();/**
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
 */const ps=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();var Xl=Xo("<svg><!><!></svg>");function fe(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]),n=se(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);$t(t,!1);let i=ct(t,"name",8,void 0),s=ct(t,"color",8,"currentColor"),a=ct(t,"size",8,24),o=ct(t,"strokeWidth",8,2),l=ct(t,"absoluteStrokeWidth",8,!1),c=ct(t,"iconNode",24,()=>[]);hl();var f=Xl();ns(f,(h,_,S)=>({...jl,...h,...n,width:a(),height:a(),stroke:s(),"stroke-width":_,class:S}),[()=>Wl(n)?void 0:{"aria-hidden":"true"},()=>(lr(l()),lr(o()),lr(a()),Xt(()=>l()?Number(o())*24/Number(a()):o())),()=>(lr(ps),lr(i()),lr(r),Xt(()=>ps("lucide-icon","lucide",i()?`lucide-${i()}`:"",r.class)))]);var p=I(f);Gt(p,1,c,Xa,(h,_)=>{var S=Be(()=>Ki(d(_),2));let v=()=>d(S)[0],b=()=>d(S)[1];var k=J(),y=K(k);il(y,v,!0,(E,x)=>{ns(E,()=>({...b()}))}),M(h,k)});var m=P(p);oe(m,t,"default",{}),M(e,f),At()}function Gl(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];fe(e,ue({name:"camera"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=J(),o=K(a);oe(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function ql(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 5H3"}],["path",{d:"M12 19H3"}],["path",{d:"M14 3v4"}],["path",{d:"M16 17v4"}],["path",{d:"M21 12h-9"}],["path",{d:"M21 19h-5"}],["path",{d:"M21 5h-7"}],["path",{d:"M8 10v4"}],["path",{d:"M8 12H3"}]];fe(e,ue({name:"sliders-horizontal"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=J(),o=K(a);oe(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function Yl(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"5",r:"1"}],["path",{d:"m9 20 3-6 3 6"}],["path",{d:"m6 8 6 2 6-2"}],["path",{d:"M12 10v4"}]];fe(e,ue({name:"person-standing"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=J(),o=K(a);oe(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function Kl(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];fe(e,ue({name:"zap"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=J(),o=K(a);oe(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function Zl(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]];fe(e,ue({name:"activity"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=J(),o=K(a);oe(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function Ql(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];fe(e,ue({name:"shield"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=J(),o=K(a);oe(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function Jl(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 19v3"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3"}]];fe(e,ue({name:"mic"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=J(),o=K(a);oe(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function ec(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]];fe(e,ue({name:"image"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=J(),o=K(a);oe(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function tc(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 18v-7"}],["path",{d:"M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"}],["path",{d:"M14 18v-7"}],["path",{d:"M18 18v-7"}],["path",{d:"M3 22h18"}],["path",{d:"M6 18v-7"}]];fe(e,ue({name:"landmark"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=J(),o=K(a);oe(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function rc(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];fe(e,ue({name:"user"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=J(),o=K(a);oe(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function nc(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];fe(e,ue({name:"globe"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=J(),o=K(a);oe(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function ic(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]];fe(e,ue({name:"video"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=J(),o=K(a);oe(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function ac(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];fe(e,ue({name:"sparkles"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=J(),o=K(a);oe(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function sc(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 20v-9"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97"}],["path",{d:"M22 13h-4"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97"}],["path",{d:"M6 13H2"}],["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13"}]];fe(e,ue({name:"bug"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=J(),o=K(a);oe(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function oc(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]];fe(e,ue({name:"monitor"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=J(),o=K(a);oe(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function lc(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"10",r:"8"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 22h10"}],["path",{d:"M12 22v-4"}]];fe(e,ue({name:"webcam"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=J(),o=K(a);oe(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function vs(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}]];fe(e,ue({name:"circle"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=J(),o=K(a);oe(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function cc(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];fe(e,ue({name:"square"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=J(),o=K(a);oe(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function uc(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]];fe(e,ue({name:"eye"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=J(),o=K(a);oe(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function fc(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}],["path",{d:"m2 2 20 20"}]];fe(e,ue({name:"eye-off"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=J(),o=K(a);oe(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function dc(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];fe(e,ue({name:"folder-open"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=J(),o=K(a);oe(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function pc(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];fe(e,ue({name:"info"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=J(),o=K(a);oe(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function vc(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];fe(e,ue({name:"x"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=J(),o=K(a);oe(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function hc(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];fe(e,ue({name:"settings"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=J(),o=K(a);oe(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function _c(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];fe(e,ue({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=J(),o=K(a);oe(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function Ze(e,t){const r={Camera:Gl,SlidersHorizontal:ql,PersonStanding:Yl,Zap:Kl,Activity:Zl,Shield:Ql,Mic:Jl,Image:ec,Landmark:tc,User:rc,Globe:nc,Video:ic,Sparkles:ac,Bug:sc,Monitor:oc,Webcam:lc,Circle:vs,Square:cc,Eye:uc,EyeOff:fc,FolderOpen:dc,Info:pc,X:vc,Settings:hc,RefreshCw:_c};let n=ct(t,"name",3,"Circle"),i=ct(t,"size",3,16),s=ct(t,"strokeWidth",3,2),a=ct(t,"class",3,"");const o=Be(()=>r[n()]??vs);var l=J(),c=K(l);nl(c,()=>d(o),(f,p)=>{p(f,{get size(){return i()},get"stroke-width"(){return s()},get class(){return a()}})}),M(e,l)}var gc=me('<div class="xra-sec-body"><!></div>'),mc=me('<details class="xra-sec"><summary><span class="xra-sec-title"><!> <span> </span></span> <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></summary> <!></details>');function yc(e,t){$t(t,!0);const r="ui.sections_open";let n=Y(Ve(Xt(()=>{var b;return((b=qe(r,{}))==null?void 0:b[t.section.id])??!1})));const i=Be(()=>!!(W.search||"").trim());let s;function a(){O(n,!d(n)),ut(`${r}.${t.section.id}`,d(n))}ir(()=>{W.focusNonce,!(W.focusSection!==t.section.id||!W.panelOpen)&&(O(n,!0),ut(`${r}.${t.section.id}`,!0),requestAnimationFrame(()=>s==null?void 0:s.scrollIntoView({block:"nearest",behavior:"smooth"})))});var o=mc(),l=I(o),c=I(l),f=I(c);Ze(f,{get name(){return t.section.icon},size:15,class:"xra-sec-icon"});var p=P(f,2),m=j(p,!0),h=P(c,2);let _;var S=P(l,2);{var v=b=>{var k=gc(),y=I(k);ds(y,{get section(){return t.section}}),M(b,k)};Ke(S,b=>{(d(n)||d(i))&&b(v)})}Oi(o,b=>s=b,()=>s),he(b=>{o.open=d(n)||d(i),V(m,b),_=Fe(h,0,"xra-sec-chevron",null,_,{open:d(n)})},[()=>re(t.section.title)]),Z("click",l,b=>{b.preventDefault(),a()}),M(e,o),At()}ur(["click"]);var fn=me('<option class="svelte-x8svx4"> </option>'),wc=me('<div class="warn svelte-x8svx4"> </div>'),bc=me('<div class="xra-startup svelte-x8svx4"><div class="card svelte-x8svx4" role="dialog" aria-label="XR Animator VMC"><div class="col left svelte-x8svx4"><div class="brand svelte-x8svx4"><span class="logo svelte-x8svx4">XR</span> <span class="name svelte-x8svx4">Animator <b class="svelte-x8svx4">VMC</b></span></div> <div class="sub svelte-x8svx4"> </div> <pre class="log svelte-x8svx4"> </pre> <div class="credits svelte-x8svx4">Engine: XR Animator by Butz Yung (CC BY-NC-SA 4.0)<br class="svelte-x8svx4"/> Backends: native MediaPipe · optional ONNX Runtime</div></div> <div class="col right svelte-x8svx4"><div class="group-title svelte-x8svx4"> </div> <button type="button" class="q primary svelte-x8svx4"> </button> <button type="button" class="q svelte-x8svx4"> </button> <div class="group-title svelte-x8svx4"> <span></span></div> <div class="row svelte-x8svx4"><select class="svelte-x8svx4"><!></select> <button type="button" class="q icon svelte-x8svx4"><!></button></div> <!> <div class="group-title svelte-x8svx4"> </div> <label class="field svelte-x8svx4"><span class="svelte-x8svx4"> </span> <select class="svelte-x8svx4"></select></label> <label class="field svelte-x8svx4"><span class="svelte-x8svx4"> </span> <select class="svelte-x8svx4"></select></label> <button type="button" class="q ghost svelte-x8svx4"> </button></div></div></div>');function xc(e,t){$t(t,!0);const r=()=>window.XRA,n=g=>re(g),i=["AUTO","ECO","LOW","BALANCED","QUALITY","HIGH","MAX","CUSTOM"],s=4e3;function a(){var g,w,C;try{(C=(w=(g=r())==null?void 0:g.profileService)==null?void 0:w.save)==null||C.call(w,0)}catch{}}const o=(()=>{var w,C;const g=(C=(w=r())==null?void 0:w.i18n)==null?void 0:C.LANGUAGES;return Array.isArray(g)&&g.length?g:[["auto","Auto / System"],["en","English"],["it","Italiano"]]})();let l=Y("auto"),c=Y("CUSTOM"),f=Y("default"),p=Y(Ve([])),m=Y(!1),h=Y(""),_=Y(!1),S=Y(""),v=Y(""),b=Y(!1),k=Y(!1),y=Y(!1),E=Y(Ve([])),x=!1,$=!1,A=0,L=0,T=[];function N(g){(d(E).length?d(E)[d(E).length-1]:"")!==g&&O(E,[...d(E),g].slice(-40),!0)}function Q(){var g,w,C;x||(x=!0,L&&(clearInterval(L),L=0),a(),W.startupOpen=!1,(C=(w=(g=r())==null?void 0:g.ui)==null?void 0:w.refresh)==null||C.call(w))}async function ce(){var g,w;O(b,!0),N("Starting tracking…");try{await ls()}catch(C){(w=(g=r()).toast)==null||w.call(g,"Tracking: "+C.message,"warn",4500)}finally{O(b,!1),Q()}}async function de(g){const w=r();if(g=String(g||"CUSTOM").toUpperCase(),g==="CUSTOM"){w.config.performance.master_preset="CUSTOM",a(),N("Preset: CUSTOM");return}if(g==="AUTO"){N("Benchmarking hardware…");const C=await w.performance.benchmarkHardwareOnly();N(`AUTO → ${C.preset} (${C.fps.toFixed(1)} fps)`),await w.performance.applyPresetSafe(C.preset),w.config.performance.master_preset="AUTO",w.config.performance.auto_last_result=C,a();return}N(`Applying preset: ${g}…`),await w.performance.applyPresetSafe(g),N(`Preset ${g} applied`)}function ye(g=""){var q,te,ie;const w=(q=r())==null?void 0:q.nativeBridge,C=((te=w==null?void 0:w.activeCamera)==null?void 0:te.call(w))||{},R=!!((ie=w==null?void 0:w.cameraRunning)!=null&&ie.call(w));O(_,R),O(S,g||(R?`${n("ON")} · ${C.label||n("Default camera")}`:n("OFF")),!0)}async function _e(g=!1){var C,R,q;const w=(C=r())==null?void 0:C.nativeBridge;if(w!=null&&w.enumerateCameras){O(y,!0);try{const te=await w.enumerateCameras({requestPermission:g}),ie=w.activeCamera()||{};O(p,(te||[]).map(je=>({deviceId:je.deviceId,label:je.label})),!0);const ke=ie.deviceId||((R=Ge.devices)==null?void 0:R.camera_device_id)||"";O(h,d(p).some(je=>je.deviceId===ke)?ke:((q=d(p)[0])==null?void 0:q.deviceId)||"",!0),O(m,!0),ye(),N(d(p).length?`${d(p).length} camera${d(p).length>1?"s":""} detected`:"No cameras found")}catch{O(m,!0),ye(n("Camera unavailable")),N("Camera enumeration failed")}finally{O(y,!1)}}}async function Te(g){var q,te;const w=(q=r())==null?void 0:q.nativeBridge,C=((te=g==null?void 0:g.currentTarget)==null?void 0:te.value)??d(h),R=d(p).find(ie=>ie.deviceId===C);if(R){O(y,!0);try{const ie={deviceId:R.deviceId,label:R.label};w.cameraRunning()?await w.switchCamera(ie):await w.setCameraPreference(ie),ye(),N(`Webcam: ${R.label}`)}catch(ie){ye("Error · "+ie.message),N("Webcam switch failed")}finally{O(y,!1)}}}function pt(){var C,R,q,te,ie,ke,je,Ie;const g=(q=(R=(C=r())==null?void 0:C.xraBackend)==null?void 0:R.snapshot)==null?void 0:q.call(R),w=(g==null?void 0:g.capture)||((Ie=(je=(ke=(ie=(te=window.SA_bridge)==null?void 0:te.backend)==null?void 0:ie.status)==null?void 0:ke.call(ie))==null?void 0:je.backend)==null?void 0:Ie.capture);if(w!=null&&w.camera_busy){const vt=(w.busy_processes&&w.busy_processes.length?w.busy_processes:w.busy_process?[w.busy_process]:[]).filter(bn=>!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(String(bn).trim()));if(vt.length)return{busy:!0,proc:vt.join(", ")}}if(w!=null&&w.last_error&&w.last_error.includes("Webcam occupata")){const xe=w.last_error.match(/Webcam occupata da:\s*([^.]+)/i),vt=xe?xe[1].trim():"";if(!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(vt))return{busy:!0,proc:w.last_error}}return{busy:!1,proc:""}}function xt(){var g,w,C,R,q,te,ie,ke,je;if(typeof((w=(g=r())==null?void 0:g.nativeBridge)==null?void 0:w.isAvatarReady)=="function")return r().nativeBridge.isAvatarReady();if((C=window.MMD_SA)!=null&&C.MMD_started){const Ie=(te=(q=(R=window.MMD_SA)==null?void 0:R.THREEX)==null?void 0:q.get_model)==null?void 0:te.call(q,0);let xe=Ie;if((Ie==null?void 0:Ie.type)==="MMD_dummy")try{xe=Ie.model||null}catch{xe=null}const vt=((ie=xe==null?void 0:xe.model)==null?void 0:ie.scene)||(xe==null?void 0:xe.mesh)||(xe==null?void 0:xe.scene)||null;if(xe&&!(Ie!=null&&Ie.loading)&&!xe.loading&&!((je=(ke=window.MMD_SA)==null?void 0:ke.THREEX)!=null&&je._loading_model)&&vt)return vt.visible!==!1}return!1}function Ne(){var w,C,R;const g=(w=r())==null?void 0:w.xraBackend;return!g||!g.active?!0:!!((R=(C=g.snapshot)==null?void 0:C.call(g))!=null&&R.ready)}function Pe(){if(x)return;const g=pt();g.busy?(O(v,`Webcam in use by another application (${g.proc}). Close it to start tracking.`),N("Webcam is busy — close the other app")):O(v,""),xt()&&N("Avatar ready"),Ne()&&N("Mocap backend ready")}function gn(){Pe(),!d(b)&&!$&&Date.now()-A>s&&Q()}async function Zt(g){var C,R,q;const w=((C=g==null?void 0:g.currentTarget)==null?void 0:C.value)??d(c);O(c,w,!0),O(k,!0);try{await de(w),r().events.emit("state",{path:"performance.master_preset",value:r().config.performance.master_preset}),$l()}catch(te){console.error("[XRA START]",te),N("Preset error: "+te.message)}finally{O(k,!1),(q=(R=r().ui)==null?void 0:R.refresh)==null||q.call(R)}}function mn(g){var w,C,R,q;O(l,((w=g==null?void 0:g.currentTarget)==null?void 0:w.value)??d(l),!0),(q=(R=(C=r())==null?void 0:C.i18n)==null?void 0:R.setLanguage)==null||q.call(R,d(l))}async function X(){var g,w;try{await((w=(g=r().nativeBridge)==null?void 0:g.openVrmPicker)==null?void 0:w.call(g))}catch(C){r().toast("VRM loader: "+C.message,"error",4500)}}Pi(()=>{var C,R,q,te,ie,ke,je,Ie,xe,vt,bn,Ms,Ts;const g=r();A=Date.now(),N("Initializing XR Animator VMC…"),O(l,((R=(C=g==null?void 0:g.config)==null?void 0:C.ui)==null?void 0:R.language)||"auto",!0),O(c,((te=(q=g==null?void 0:g.config)==null?void 0:q.performance)==null?void 0:te.master_preset)==="MINIMAL"?"ECO":((ke=(ie=g==null?void 0:g.config)==null?void 0:ie.performance)==null?void 0:ke.master_preset)||"CUSTOM",!0),O(f,((Ie=(je=g==null?void 0:g.config)==null?void 0:je.background)==null?void 0:Ie.path)||((vt=(xe=g==null?void 0:g.config)==null?void 0:xe.background)==null?void 0:vt.color)||"default",!0),ye(),setTimeout(()=>_e(!1),100),L=setInterval(gn,250),window.addEventListener("MMDStarted",Pe),(bn=g.xraBackend)!=null&&bn.onStatus&&g.xraBackend.onStatus(Pe);const w=yr=>{yr.key==="Escape"&&Q()};window.addEventListener("keydown",w,!0),Pe(),(Ts=(Ms=g.whenNativeReady)==null?void 0:Ms.call(g))==null||Ts.then(()=>{W.startupOpen&&_e(!1)});for(const yr of["camera-started","camera-stopped","camera-switched"])T.push(g.events.on(yr,()=>{W.startupOpen&&_e(!1)}));for(const yr of["avatar-loading","avatar-changed","avatar-ready"])T.push(g.events.on(yr,()=>Pe()));return()=>{L&&clearInterval(L),window.removeEventListener("MMDStarted",Pe),window.removeEventListener("keydown",w,!0);for(const yr of T)try{yr()}catch{}T=[]}});var G=bc(),ne=I(G),we=I(ne),Re=P(I(we),2),rt=j(Re,!0),kt=P(Re,2),ge=j(kt,!0),Qt=P(we,2),Br=I(Qt),yn=j(Br,!0),Vr=P(Br,2),Li=j(Vr,!0),Fr=P(Vr,2),Ii=j(Fr,!0),Gn=P(Fr,2),ys=I(Gn),Lc=P(ys);let ws;var bs=P(Gn,2),Jt=I(bs),Ic=I(Jt);{var zc=g=>{var w=fn(),C=j(w,!0);w.value=w.__value="",he(R=>V(C,R),[()=>n("Loading cameras…")]),M(g,w)},Dc=g=>{var w=fn(),C=j(w,!0);w.value=w.__value="",he(R=>V(C,R),[()=>n("No cameras found")]),M(g,w)},Bc=g=>{var w=J(),C=K(w);Gt(C,17,()=>d(p),R=>R.deviceId,(R,q)=>{var te=fn(),ie=j(te,!0),ke={};he(()=>{V(ie,d(q).label),ke!==(ke=d(q).deviceId)&&(te.value=(te.__value=ke)??"")}),M(R,te)}),M(g,w)};Ke(Ic,g=>{d(m)?d(p).length?g(Bc,-1):g(Dc,1):g(zc)})}var qn;fr(Jt);var wn=P(Jt,2),Vc=I(wn);Ze(Vc,{name:"RefreshCw",size:14});var xs=P(bs,2);{var Fc=g=>{var w=wc(),C=j(w,!0);he(()=>V(C,d(v))),M(g,w)};Ke(xs,g=>{d(v)&&g(Fc)})}var ks=P(xs,2),Hc=j(ks,!0),Ss=P(ks,2),Es=I(Ss),Uc=j(Es,!0),gr=P(Es,2);Gt(gr,20,()=>i,g=>g,(g,w)=>{var C=fn(),R=j(C,!0),q={};he(()=>{V(R,w),q!==(q=w)&&(C.value=(C.__value=q)??"")}),M(g,C)});var Yn;fr(gr);var $s=P(Ss,2),As=I($s),jc=j(As,!0),mr=P(As,2);Gt(mr,21,()=>o,([g,w])=>g,(g,w)=>{var C=Be(()=>Ki(d(w),2));let R=()=>d(C)[0],q=()=>d(C)[1];var te=fn(),ie=j(te,!0),ke={};he(()=>{V(ie,q()),ke!==(ke=R())&&(te.value=(te.__value=ke)??"")}),M(g,te)});var Kn;fr(mr);var zi=P($s,2),Wc=j(zi,!0);he((g,w,C,R,q,te,ie,ke,je,Ie,xe,vt)=>{V(rt,g),V(ge,w),V(yn,C),Vr.disabled=d(b),V(Li,R),Fr.disabled=d(b),V(Ii,q),V(ys,`${te??""} `),ws=Fe(Lc,1,"dot svelte-x8svx4",null,ws,{on:d(_)}),Jt.disabled=d(y)||d(b),qn!==(qn=d(h))&&(Jt.value=(Jt.__value=qn)??"",Dt(Jt,qn)),Me(wn,"title",ie),Me(wn,"aria-label",ke),wn.disabled=d(y)||d(b),V(Hc,je),V(Uc,Ie),gr.disabled=d(k)||d(b),Yn!==(Yn=d(c))&&(gr.value=(gr.__value=Yn)??"",Dt(gr,Yn)),V(jc,xe),mr.disabled=d(b),Kn!==(Kn=d(l))&&(mr.value=(mr.__value=Kn)??"",Dt(mr,Kn)),zi.disabled=d(b),V(Wc,vt)},[()=>n("Quick setup · changes apply immediately."),()=>d(E).join(`
`),()=>n("Quick start"),()=>d(b)?n("Starting…"):n("Start tracking"),()=>n("Load / change VRM…"),()=>n("Webcam"),()=>n("Refresh cameras"),()=>n("Refresh cameras"),()=>n("Options"),()=>n("Master preset"),()=>n("Language"),()=>n("Continue")]),Z("click",G,Q),Z("click",ne,g=>g.stopPropagation()),zn("pointerenter",ne,()=>{$=!0,A=Date.now()}),Z("pointermove",ne,()=>{A=Date.now()}),zn("pointerleave",ne,()=>{$=!1,A=Date.now()}),Z("click",Vr,ce),Z("click",Fr,X),Z("change",Jt,Te),Z("click",wn,()=>_e(!0)),Z("change",gr,Zt),Z("change",mr,mn),Z("click",zi,Q),M(e,G),At()}ur(["click","pointermove","change"]);var kc=me('<button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button>'),Sc=me('<nav class="xra-dock group fixed left-2 top-1/2 z-[99990] flex w-[46px] max-h-[92vh] -translate-y-1/2 flex-col gap-0.5 overflow-hidden rounded-xl border border-white/10 bg-[var(--xra-ui-bg)] p-1.5 font-sans text-[12.5px] leading-snug text-[var(--xra-ui-fg)] shadow-[0_12px_40px_rgba(0,0,0,.55)] transition-[width] duration-200 hover:w-[232px]"><!> <div class="my-1 h-px bg-white/10"></div> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button></nav>');function Ec(e,t){$t(t,!0);const r=()=>window.XRA;let n=Y(!1),i=Y(!1),s=0;function a(){var G,ne,we,Re,rt;const X=r();if(X){try{O(n,!!((ne=(G=X.nativeBridge)==null?void 0:G.cameraRunning)!=null&&ne.call(G)))}catch{}try{O(i,!!((rt=(Re=(we=X.recorder)==null?void 0:we.status)==null?void 0:Re.call(we))!=null&&rt.active))}catch{}}}let o=Y(!1),l=Y("");async function c(){var G,ne,we,Re;if(d(o))return;O(o,!0);const X=!d(n);O(l,X?"Starting…":"Stopping…",!0);try{X?(await ls(),O(n,!0)):(await kl(),O(n,!1))}catch(rt){try{await((ne=(G=r().nativeBridge)==null?void 0:G.forceStopCamera)==null?void 0:ne.call(G))}catch{}O(n,!1),(Re=(we=r()).toast)==null||Re.call(we,"Tracking: "+rt.message,"warn",4500)}finally{O(o,!1),O(l,""),setTimeout(a,250)}}let f=Y(!1),p=Y("");async function m(){var G,ne;if(d(f))return;O(f,!0);const X=!d(i);O(p,X?"Starting…":"Stopping…",!0);try{X?(await Sl(),O(i,!0)):(await El(),O(i,!1))}catch(we){O(i,!1),(ne=(G=r()).toast)==null||ne.call(G,"Recording: "+we.message,"warn",4500)}finally{O(f,!1),O(p,""),setTimeout(a,250)}}async function h(){var X,G,ne,we;try{await((G=(X=r().nativeBridge)==null?void 0:X.openVrmPicker)==null?void 0:G.call(X))}catch(Re){(we=(ne=r()).toast)==null||we.call(ne,"VRM loader: "+Re.message,"error",4500)}}function _(){var X,G;try{(G=(X=r().nativeBridge)==null?void 0:X.showAbout)==null||G.call(X)}catch{}}const S=[{id:"ui",icon:"Monitor",label:"UI Settings"},{id:"camera",icon:"Camera",label:"Webcam settings"},{id:"avatar",icon:"User",label:"Model settings"},{id:"second_avatar",icon:"Globe",label:"Studio link"},{id:"stage",icon:"Landmark",label:"Environment + Camera"},{id:"background",icon:"Image",label:"Background"},{id:"lip",icon:"Mic",label:"Audio"}],v="hover:bg-white/10",b="flex-1 overflow-hidden opacity-0 transition-opacity duration-150 group-hover:opacity-100";Pi(()=>(a(),s=setInterval(a,1e3),()=>clearInterval(s)));var k=Sc(),y=I(k);Gt(y,17,()=>S,X=>X.id,(X,G)=>{var ne=kc();Fe(ne,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var we=I(ne),Re=I(we);Ze(Re,{get name(){return d(G).icon},size:16});var rt=P(we,2);Fe(rt,1,Cr(b));var kt=j(rt,!0);he((ge,Qt)=>{Me(ne,"aria-label",ge),V(kt,Qt)},[()=>re(d(G).label),()=>re(d(G).label)]),Z("click",ne,()=>bl(d(G).id)),M(X,ne)});var E=P(y,4),x=I(E),$=I(x);{let X=Be(()=>d(n)?"text-emerald-400":"");Ze($,{name:"Webcam",size:16,get class(){return d(X)}})}var A=P(x,2);Fe(A,1,Cr(b));var L=j(A,!0),T=P(E,2),N=I(T),Q=I(N);{let X=Be(()=>d(f)?"Circle":d(i)?"Square":"Circle"),G=Be(()=>d(i)?"text-red-400":"");Ze(Q,{get name(){return d(X)},size:16,get class(){return d(G)}})}var ce=P(N,2);Fe(ce,1,Cr(b));var de=j(ce,!0),ye=P(T,2);Fe(ye,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var _e=I(ye),Te=I(_e);Ze(Te,{name:"FolderOpen",size:16});var pt=P(_e,2);Fe(pt,1,Cr(b));var xt=j(pt,!0),Ne=P(ye,2);Fe(Ne,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var Pe=I(Ne),gn=I(Pe);Ze(gn,{name:"Info",size:16});var Zt=P(Pe,2);Fe(Zt,1,Cr(b));var mn=j(Zt,!0);he((X,G,ne,we,Re,rt,kt,ge)=>{Fe(E,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${d(n)?"bg-emerald-500/20 hover:bg-emerald-500/30":v} ${d(o)?"opacity-60":""}`),Me(E,"aria-label",X),E.disabled=d(o),V(L,G),Fe(T,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${d(i)?"bg-red-500/30 hover:bg-red-500/40 text-red-200":v} ${d(f)?"opacity-60":""}`),Me(T,"aria-label",ne),T.disabled=d(f),V(de,we),Me(ye,"aria-label",Re),V(xt,rt),Me(Ne,"aria-label",kt),V(mn,ge)},[()=>re("Tracking"),()=>d(o)?re(d(l)):d(n)?re("Tracking on"):re("Tracking off"),()=>re("Record"),()=>d(f)?re(d(p)):d(i)?re("Stop recording"):re("Record"),()=>re("Load / change VRM…"),()=>re("Load / change VRM…"),()=>re("About"),()=>re("About")]),zn("pointerenter",k,()=>{W.dockExpanded=!0}),zn("pointerleave",k,()=>{W.dockExpanded=!1}),Z("click",E,c),Z("click",T,m),Z("click",ye,h),Z("click",Ne,_),M(e,k),At()}ur(["click"]);var $c=me('<div class="absolute inset-0 z-30 grid place-items-center bg-black text-[12px] text-[var(--xra-ui-fg)]"> </div>'),Ac=me('<div class="xra-mocap-window fixed z-[99991] flex flex-col overflow-hidden rounded-xl border border-white/15 bg-[var(--xra-ui-bg)] text-[var(--xra-ui-fg)] shadow-[0_16px_48px_rgba(0,0,0,.6)] font-sans"><header class="flex shrink-0 cursor-move touch-none select-none items-center gap-2 px-2 py-1.5"><!> <span class="flex-1 text-[12px] font-semibold"> </span> <span class="flex items-center gap-1 text-[10.5px] tabular-nums text-[var(--xra-ui-dim)]"><span></span> </span> <select class="rounded-md border border-white/15 bg-[#101214] px-1.5 py-0.5 text-[11px] text-[var(--xra-ui-fg)]"><option> </option><option> </option><option> </option><option> </option></select> <button type="button" class="rounded-md border border-white/15 bg-white/5 px-1.5 py-0.5 cursor-pointer text-[var(--xra-ui-fg)]"><!></button></header> <div class="relative min-h-0 flex-1 overflow-hidden bg-black"><!> <div class="absolute bottom-0 right-0 z-20 h-5 w-5 cursor-nwse-resize touch-none"></div></div></div>');function Mc(e,t){$t(t,!0);const r=()=>window.XRA,n=qe("ui.mocap_window",{})||{};let i=Y(Ve(Number.isFinite(n.x)?n.x:48)),s=Y(Ve(Number.isFinite(n.y)?n.y:96)),a=Y(Ve(Number.isFinite(n.w)?n.w:360)),o=Y(Ve(Number.isFinite(n.h)?n.h:270)),l=Y(void 0),c=Y(!1),f=Y(0),p=null,m=0,h=0;const _=Be(()=>qe("ui.mocap_visibility","always")!=="auto"||d(c));function S(){ut("ui.mocap_window",{x:Math.round(d(i)),y:Math.round(d(s)),w:Math.round(d(a)),h:Math.round(d(o))})}function v(){var x,$,A;try{(A=($=(x=r())==null?void 0:x.nativeBridge)==null?void 0:$.updateMocapWindow)==null||A.call($)}catch{}}function b(x,$){x.preventDefault();const A=x.clientX,L=x.clientY,T=d(i),N=d(s),Q=d(a),ce=d(o),de=_e=>{const Te=_e.clientX-A,pt=_e.clientY-L;$==="move"?(O(i,Math.max(0,Math.min(window.innerWidth-80,T+Te)),!0),O(s,Math.max(0,Math.min(window.innerHeight-30,N+pt)),!0)):(O(a,Math.max(200,Math.min(window.innerWidth-d(i),Q+Te)),!0),O(o,Math.max(130,Math.min(window.innerHeight-d(s),ce+pt)),!0))},ye=()=>{window.removeEventListener("pointermove",de),window.removeEventListener("pointerup",ye),S()};window.addEventListener("pointermove",de),window.addEventListener("pointerup",ye)}ir(()=>{var $,A,L;const x=d(l);if(x){try{(L=(A=($=r())==null?void 0:$.nativeBridge)==null?void 0:A.attachMocapWindow)==null||L.call(A,x)}catch{}return()=>{var T,N,Q;try{(Q=(N=(T=r())==null?void 0:T.nativeBridge)==null?void 0:N.detachMocapWindow)==null||Q.call(N)}catch{}}}}),ir(()=>{d(i),d(s),d(a),d(o),d(c),v()}),Pi(()=>{const x=()=>{var L,T,N,Q,ce,de;O(c,!!((N=(T=(L=r())==null?void 0:L.nativeBridge)==null?void 0:T.cameraRunning)!=null&&N.call(T)));const $=Number((((de=(ce=(Q=r())==null?void 0:Q.xraBackend)==null?void 0:ce.snapshot)==null?void 0:de.call(ce))||{}).framesReceived||0),A=performance.now();p!=null&&A>m&&O(f,Math.max(0,($-p)/((A-m)/1e3)),!0),p=$,m=A};return x(),h=setInterval(x,500),window.addEventListener("resize",v),()=>{clearInterval(h),window.removeEventListener("resize",v)}});var k=J(),y=K(k);{var E=x=>{var $=Ac(),A=I($),L=I(A);Ze(L,{name:"Activity",size:14});var T=P(L,2),N=j(T,!0),Q=P(T,2),ce=I(Q);let de;var ye=P(ce),_e=P(Q,2),Te=I(_e),pt=j(Te,!0);Te.value=Te.__value="both";var xt=P(Te),Ne=j(xt,!0);xt.value=xt.__value="wireframe";var Pe=P(xt),gn=j(Pe,!0);Pe.value=Pe.__value="video";var Zt=P(Pe),mn=j(Zt,!0);Zt.value=Zt.__value="off";var X;fr(_e);var G=P(_e,2),ne=I(G);Ze(ne,{name:"X",size:13});var we=P(A,2),Re=I(we);{var rt=ge=>{var Qt=$c(),Br=j(Qt,!0);he(yn=>V(Br,yn),[()=>re("Tracking is off")]),M(ge,Qt)};Ke(Re,ge=>{d(c)||ge(rt)})}var kt=P(Re,2);Oi(we,ge=>O(l,ge),()=>d(l)),he((ge,Qt,Br,yn,Vr,Li,Fr,Ii,Gn)=>{Bn($,`left:${d(i)??""}px; top:${d(s)??""}px; width:${d(a)??""}px; height:${d(o)??""}px;`),V(N,ge),de=Fe(ce,1,"h-1.5 w-1.5 rounded-full",null,de,{"bg-[var(--xra-ui-accent)]":d(c),"bg-[#565656]":!d(c)}),V(ye,` ${Qt??""}`),V(pt,Br),V(Ne,yn),V(gn,Vr),V(mn,Li),X!==(X=Fr)&&(_e.value=(_e.__value=X)??"",Dt(_e,X)),Me(G,"title",Ii),Me(kt,"title",Gn)},[()=>re("Mocap"),()=>d(c)?d(f)>=1?`${Math.round(d(f))} fps`:"LIVE":"OFF",()=>re("Webcam + skeleton"),()=>re("Skeleton only"),()=>re("Webcam only"),()=>re("Off"),()=>qe("ui.mocap_view","off"),()=>re("Close"),()=>re("Resize")]),Z("pointerdown",A,ge=>b(ge,"move")),Z("change",_e,ge=>ut("ui.mocap_view",ge.currentTarget.value)),Z("pointerdown",_e,ge=>ge.stopPropagation()),Z("click",G,()=>ut("ui.mocap_view","off")),Z("pointerdown",G,ge=>ge.stopPropagation()),Z("pointerdown",kt,ge=>{ge.stopPropagation(),b(ge,"resize")}),M(x,$)};Ke(y,x=>{d(_)&&x(E)})}M(e,k),At()}ur(["pointerdown","change","click"]);var Tc=me('<aside class="xra-section-popup fixed top-1/2 z-[99992] flex max-h-[72vh] w-[320px] -translate-y-1/2 flex-col overflow-hidden rounded-xl border border-white/12 bg-[var(--xra-ui-bg)] text-[12.5px] leading-[1.45] text-[var(--xra-ui-fg)] shadow-[0_16px_48px_rgba(0,0,0,.6)] font-sans transition-[left] duration-200"><header class="flex shrink-0 items-center gap-2 bg-[var(--xra-ui-bg2)] px-3 py-2 shadow-[inset_0_-1px_0_var(--xra-ui-accent-soft)]"><!> <span class="text-[12.5px] font-semibold text-[#cfcfcf]"> </span></header> <div class="min-h-0 flex-1 overflow-auto px-2.5 py-2"><!></div></aside>');function Nc(e,t){$t(t,!0);let r;ir(()=>{const f=m=>{const h=m.target;r&&h instanceof Node&&r.contains(h)||h instanceof Element&&h.closest(".xra-dock")||(W.popupSection=null)},p=m=>{m.key==="Escape"&&(W.popupSection=null)};return document.addEventListener("pointerdown",f,!0),window.addEventListener("keydown",p,!0),()=>{document.removeEventListener("pointerdown",f,!0),window.removeEventListener("keydown",p,!0)}});var n=Tc(),i=I(n),s=I(i);Ze(s,{get name(){return t.section.icon},size:14,class:"text-[var(--xra-ui-dim)]"});var a=P(s,2),o=j(a,!0),l=P(i,2),c=I(l);ds(c,{get section(){return t.section}}),Oi(n,f=>r=f,()=>r),he(f=>{Bn(n,`left:${W.dockExpanded?248:62}px;`),V(o,f)},[()=>re(t.section.title)]),M(e,n),At()}var Cc=me('<aside class="xra-panel"><header class="xra-panel-head"><strong>XR Animator</strong> <span class="xra-spacer"></span> <button><!></button> <button title="Close panel"><!></button></header> <div class="xra-panel-search"><input type="search" placeholder="Search settings…"/></div> <div class="xra-panel-body"></div></aside>'),Oc=me('<button class="xra-panel-launcher"><!></button>'),Pc=me("<!> <!> <!> <!> <!>",1);function Rc(e,t){$t(t,!0),Al();const r=Be(()=>Ol(Ge));var n=Pc(),i=K(n);{var s=v=>{Ec(v,{})};Ke(i,v=>{W.ready&&v(s)})}var a=P(i,2);{var o=v=>{const b=Be(()=>d(r).find(x=>x.id===W.popupSection));var k=J(),y=K(k);{var E=x=>{Nc(x,{get section(){return d(b)}})};Ke(y,x=>{d(b)&&x(E)})}M(v,k)};Ke(a,v=>{W.ready&&W.popupSection&&v(o)})}var l=P(a,2);{var c=v=>{Mc(v,{})},f=Be(()=>W.ready&&qe("ui.mocap_view","off")!=="off");Ke(l,v=>{d(f)&&v(c)})}var p=P(l,2);{var m=v=>{var N,Q,ce;var b=Cc(),k=I(b),y=P(I(k),4);Me(y,"title",((ce=(Q=(N=window.XRA)==null?void 0:N.i18n)==null?void 0:Q.t)==null?void 0:ce.call(Q,"Clean screen mode (Press Esc to restore)"))||"Clean screen (Esc)");var E=I(y);Ze(E,{name:"EyeOff",size:15});var x=P(y,2),$=I(x);Ze($,{name:"X",size:15});var A=P(k,2),L=I(A),T=P(A,2);Gt(T,21,()=>d(r),de=>de.id,(de,ye)=>{yc(de,{get section(){return d(ye)}})}),he(()=>cn(L,W.search)),Z("click",y,function(...de){Un==null||Un.apply(this,de)}),Z("click",x,()=>W.panelOpen=!1),Z("input",L,de=>W.search=de.currentTarget.value),M(v,b)},h=v=>{var b=Oc(),k=I(b);Ze(k,{name:"Settings",size:16}),Z("click",b,()=>{W.panelOpen=!0,cs()}),M(v,b)};Ke(p,v=>{W.ready&&W.panelOpen?v(m):W.ready&&v(h,1)})}var _=P(p,2);{var S=v=>{xc(v,{})};Ke(_,v=>{W.ready&&W.startupOpen&&v(S)})}M(e,n),At()}ur(["click","input"]),window.XRA_SVELTE_UI=!0;function hs(){let e=document.getElementById("XRA_SVELTE");e||(e=document.createElement("div"),e.id="XRA_SVELTE",document.body.appendChild(e)),Zo(Rc,{target:e})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",hs):hs()})();

})();
