(function(){
var Yc=Object.defineProperty;var Ms=fe=>{throw TypeError(fe)};var qc=(fe,ne,be)=>ne in fe?Yc(fe,ne,{enumerable:!0,configurable:!0,writable:!0,value:be}):fe[ne]=be;var et=(fe,ne,be)=>qc(fe,typeof ne!="symbol"?ne+"":ne,be),Mi=(fe,ne,be)=>ne.has(fe)||Ms("Cannot "+be);var u=(fe,ne,be)=>(Mi(fe,ne,"read from private field"),be?be.call(fe):ne.get(fe)),B=(fe,ne,be)=>ne.has(fe)?Ms("Cannot add the same private member more than once"):ne instanceof WeakSet?ne.add(fe):ne.set(fe,be),z=(fe,ne,be,Jt)=>(Mi(fe,ne,"write to private field"),Jt?Jt.call(fe,be):ne.set(fe,be),be),j=(fe,ne,be)=>(Mi(fe,ne,"access private method"),be);(function(){"use strict";var ss,Rr,Kt,fr,Cr,Pr,Ir,Bt,Lr,Ye,ln,Vt,gt,Tt,zr,dr,Q,Ti,Ni,pn,Oi,Ts,Ns,Vr,Kc,hn,os,lt,Ei,ct,vr,Pe,qe,Ie,Ke,Nt,pr,Zt,Dr,cn,un,Ft,In,oe,Zc,Qc,Ri,Jc,Ci,_n,Fn,Pi,Ii,mt,Ot,Ze,hr,fn,dn,Ln,ls;var ne=Array.isArray,be=Array.prototype.indexOf,Jt=Array.prototype.includes,gn=Array.from,Li=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,zi=Object.getOwnPropertyDescriptors,Os=Object.prototype,Rs=Array.prototype,Hn=Object.getPrototypeOf,Di=Object.isExtensible;function Fr(e){return typeof e=="function"}const Cs=()=>{};function Ps(e){return e()}function Un(e){for(var t=0;t<e.length;t++)e[t]()}function Bi(){var e,t,r=new Promise((n,i)=>{e=n,t=i});return{promise:r,resolve:e,reject:t}}function Vi(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const Te=2,wr=4,Hr=8,Wn=1<<24,ft=16,tt=32,It=64,jn=128,Xn=256,dt=512,xe=1024,me=2048,rt=4096,Re=8192,Ce=16384,br=32768,mn=1<<25,Wt=65536,yn=1<<17,Is=1<<18,xr=1<<19,Fi=1<<20,bt=1<<25,wn=1<<21,Sr=1<<22,jt=1<<23,xt=Symbol("$state"),Hi=Symbol("component"),Ui=Symbol("legacy props"),Ls=Symbol(""),bn=Symbol("attributes"),Gn=Symbol("class"),Yn=Symbol("style"),Ur=Symbol("text"),Wr=new class extends Error{constructor(){super(...arguments);et(this,"name","StaleReactionError");et(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},xn=!!((ss=globalThis.document)!=null&&ss.contentType)&&globalThis.document.contentType.includes("xml"),zs=1,Ds=2,Wi=4,Bs=8,Vs=16,Fs=1,Hs=2,ji=4,Us=8,Ws=16,js=1,Xs=2,ye=Symbol("uninitialized"),Xi="http://www.w3.org/1999/xhtml",Gs="http://www.w3.org/2000/svg",Ys="@attach";function qs(){console.warn("https://svelte.dev/e/derived_inert")}function Ks(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Zs(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Gi(e){return e===this.v}function Qs(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Yi(e){return!Qs(e,this.v)}function Js(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function eo(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function to(e,t,r){throw new Error("https://svelte.dev/e/each_key_duplicate")}function ro(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function no(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function io(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ao(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function so(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function oo(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function lo(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function co(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function uo(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let kr=!1,eu=!1;function fo(){kr=!0}let de=null;function Er(e){de=e}function St(e,t=!1,r){de={p:de,i:!1,c:null,e:null,s:e,x:null,r:U,l:kr&&!t?{s:null,u:null,$:[]}:null}}function kt(e){var t=de,r=t.e;if(r!==null){t.e=null;for(var n of r)_a(n)}return t.i=!0,de=t.p,qn(e)}function qn(e={}){return Li(e,Hi,{value:!0}),e}function jr(){return!kr||de!==null&&de.l===null}let $r=[];function vo(){var e=$r;$r=[],Un(e)}function Et(e){if($r.length===0){var t=$r;queueMicrotask(()=>{t===$r&&vo()})}$r.push(e)}const po=-7169;function pe(e,t){e.f=e.f&po|t}function Kn(e){(e.f&dt)!==0||e.deps===null?pe(e,xe):pe(e,rt)}function qi(e,t,r){(e.f&me)!==0?t.add(e):(e.f&rt)!==0&&r.add(e),pe(e,xe)}function ho(e,t){if(t){const r=document.body;e.autofocus=!0,Et(()=>{document.activeElement===r&&e.focus()})}}function Xr(e){var t=H,r=U;it(null),at(null);try{return e()}finally{it(t),at(r)}}function Ki(e,t,r,n){const i=jr()?Ar:Zn;var s=e.filter(h=>!h.settled),a=t.map(i);if(r.length===0&&s.length===0){n(a);return}var o=U,l=_o(),c=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(h=>h.promise)):null;function d(h){if((o.f&Ce)===0){l();try{n([...a,...h])}catch(g){At(g,o)}Sn()}}var p=Zi();if(r.length===0){c.then(()=>d([])).finally(p);return}function y(){Promise.all(r.map(h=>go(h))).then(d).catch(h=>At(h,o)).finally(p)}c?c.then(()=>{l(),y(),Sn()}):y()}function _o(){var e=U,t=H,r=de,n=L;return function(s=!0){at(e),it(t),Er(r),s&&(e.f&Ce)===0&&(n==null||n.activate(),n==null||n.apply())}}function Sn(e=!0){at(null),it(null),Er(null),e&&(L==null||L.deactivate())}function Zi(){var e=U,t=e.b,r=L,n=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,r),r.increment(n,e),()=>{t==null||t.update_pending_count(-1,r),r.decrement(n,e)}}function Ar(e){var t=Te|me;return U!==null&&(U.f|=xr),{ctx:de,deps:null,effects:null,equals:Gi,f:t,fn:e,reactions:null,rv:0,v:ye,wv:0,parent:U,ac:null}}const Gr=Symbol("obsolete");function go(e,t,r){let n=U;n===null&&eo();var i=void 0,s=Xt(ye),a=!H,o=new Set;return No(()=>{var h,g;var l=U,c=Bi();i=c.promise;try{Promise.resolve(e()).then(c.resolve,k=>{k!==Wr&&c.reject(k)}).finally(Sn)}catch(k){c.reject(k),Sn()}var d=L;if(a){if((l.f&br)!==0)var p=Zi();if((h=n.b)!=null&&h.is_rendered())(g=d.async_deriveds.get(l))==null||g.reject(Gr);else for(const k of o.values())k.reject(Gr);o.add(c),d.async_deriveds.set(l,c)}const y=(k,f=void 0)=>{p==null||p(),o.delete(c),f!==Gr&&(d.activate(),f?(s.f|=jt,Tr(s,f)):((s.f&jt)!==0&&(s.f^=jt),Tr(s,k)),d.deactivate())};c.promise.then(y,k=>y(null,k||"unknown"))}),oi(()=>{for(const l of o)l.reject(Gr)}),new Promise(l=>{function c(d){function p(){d===i?l(s):c(i)}d.then(p,p)}c(i)})}function nt(e){const t=Ar(e);return ka(t),t}function Zn(e){const t=Ar(e);return t.equals=Yi,t}function mo(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)$e(t[r])}}function Qn(e){var t,r=U,n=e.parent;if(!zt&&n!==null&&e.v!==ye&&(n.f&(Ce|Re))!==0)return qs(),e.v;at(n);try{mo(e),t=Ta(e)}finally{at(r)}return t}function Qi(e){var t=Qn(e);if(!e.equals(t)&&(e.wv=Aa(),(!(L!=null&&L.is_fork)||e.deps===null)&&(L!==null?(L.capture(e,t,!0),Yr==null||Yr.capture(e,t,!0)):e.v=t,e.deps===null))){pe(e,xe);return}zt||(Ee!==null?(si()||L!=null&&L.is_fork)&&Ee.set(e,t):Kn(e))}function yo(e){var t;if(e.effects!==null)for(const r of e.effects)(r.teardown||r.ac)&&((t=r.teardown)==null||t.call(r),r.ac!==null&&Xr(()=>{r.ac.abort(Wr),r.ac=null}),r.fn!==null&&(r.teardown=Cs),en(r,0),ci(r))}function Ji(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&Nr(t)}let Jn=null,Mr=null,L=null,Yr=null,Ee=null,ei=null,ti=!1,qr=null,kn=null;var ea=0,tu=new Set;let wo=1;const Pn=class Pn{constructor(){B(this,Q);et(this,"id",wo++);B(this,Rr,!1);et(this,"linked",!0);B(this,Kt,null);B(this,fr,null);et(this,"async_deriveds",new Map);et(this,"current",new Map);et(this,"previous",new Map);B(this,Cr,new Set);B(this,Pr,new Set);B(this,Ir,0);B(this,Bt,new Map);B(this,Lr,null);B(this,Ye,[]);B(this,ln,[]);B(this,Vt,new Set);B(this,gt,new Set);B(this,Tt,new Map);B(this,zr,new Set);et(this,"is_fork",!1);B(this,dr,!1);Mr===null?Jn=Mr=this:(z(Mr,fr,this),z(this,Kt,Mr)),Mr=this}skip_effect(t){u(this,Tt).has(t)||u(this,Tt).set(t,{d:[],m:[]}),u(this,zr).delete(t)}unskip_effect(t,r=n=>this.schedule(n)){var n=u(this,Tt).get(t);if(n){u(this,Tt).delete(t);for(var i of n.d)pe(i,me),r(i);for(i of n.m)pe(i,rt),r(i)}u(this,zr).add(t)}capture(t,r,n=!1){t.v!==ye&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&jt)===0&&(this.current.set(t,[r,n]),Ee==null||Ee.set(t,r)),this.is_fork||(t.v=r)}activate(){L=this}deactivate(){L=null,Ee=null}flush(){try{ti=!0,L=this,j(this,Q,pn).call(this)}finally{ea=0,ei=null,qr=null,kn=null,ti=!1,L=null,Ee=null,$t.clear()}}discard(){var t;for(const r of u(this,Pr))r(this);u(this,Pr).clear();for(const r of this.async_deriveds.values())r.reject(Gr);j(this,Q,hn).call(this),(t=u(this,Lr))==null||t.resolve()}register_created_effect(t){u(this,ln).push(t)}increment(t,r){if(z(this,Ir,u(this,Ir)+1),t){let n=u(this,Bt).get(r)??0;u(this,Bt).set(r,n+1)}}decrement(t,r){if(z(this,Ir,u(this,Ir)-1),t){let n=u(this,Bt).get(r)??0;n===1?u(this,Bt).delete(r):u(this,Bt).set(r,n-1)}u(this,dr)||(z(this,dr,!0),Et(()=>{z(this,dr,!1),this.linked&&this.flush()}))}transfer_effects(t,r){for(const n of t)u(this,Vt).add(n);for(const n of r)u(this,gt).add(n);t.clear(),r.clear()}oncommit(t){u(this,Cr).add(t)}ondiscard(t){u(this,Pr).add(t)}settled(){return(u(this,Lr)??z(this,Lr,Bi())).promise}static ensure(){if(L===null){const t=L=new Pn;ti||Et(()=>{u(t,Rr)||t.flush()})}return L}apply(){{Ee=null;return}}schedule(t){var r;if(ei=t,(r=t.b)!=null&&r.is_pending&&(t.f&(wr|Hr|Wn))!==0&&(t.f&br)===0){t.b.defer_effect(t);return}u(this,Ye).push(t)}};Rr=new WeakMap,Kt=new WeakMap,fr=new WeakMap,Cr=new WeakMap,Pr=new WeakMap,Ir=new WeakMap,Bt=new WeakMap,Lr=new WeakMap,Ye=new WeakMap,ln=new WeakMap,Vt=new WeakMap,gt=new WeakMap,Tt=new WeakMap,zr=new WeakMap,dr=new WeakMap,Q=new WeakSet,Ti=function(){if(this.is_fork)return!0;for(const n of u(this,Bt).keys()){for(var t=n,r=!1;t.parent!==null;){if(u(this,Tt).has(t)){r=!0;break}t=t.parent}if(!r)return!0}return!1},Ni=function(){var t=[];for(const s of u(this,Ye))if(!((s.f&Ce)!==0||(s.f&(me|rt))===0)){for(var r=s,n=!1;r.parent!==null;){r=r.parent;var i=r.f;if((i&(It|tt))!==0){if((i&xe)===0){n=!0;break}r.f^=xe}}n||t.push(r)}return z(this,Ye,[]),t},pn=function(){var o,l,c,d;z(this,Rr,!0);for(const p of u(this,Vt))u(this,gt).delete(p),pe(p,me),this.schedule(p);for(const p of u(this,gt))pe(p,rt),this.schedule(p);this.apply();for(var t=qr=[],r=[],n=kn=[];u(this,Ye).length>0;){ea++>1e3&&(j(this,Q,hn).call(this),bo());for(const p of j(this,Q,Ni).call(this))try{j(this,Q,Oi).call(this,p,t,r)}catch(y){throw ia(p),j(this,Q,Ti).call(this)||this.discard(),y}}if(L=null,n.length>0){var i=Pn.ensure();for(const p of n)i.schedule(p)}if(qr=null,kn=null,j(this,Q,Ti).call(this)){j(this,Q,Vr).call(this,r),j(this,Q,Vr).call(this,t);for(const[p,y]of u(this,Tt))na(p,y);n.length>0&&j(o=L,Q,pn).call(o);return}const s=j(this,Q,Ts).call(this);if(s){j(this,Q,Vr).call(this,r),j(this,Q,Vr).call(this,t),j(l=s,Q,Ns).call(l,this);return}u(this,Vt).clear(),u(this,gt).clear();for(const p of u(this,Cr))p(this);u(this,Cr).clear(),Yr=this,ta(r),ta(t),Yr=null,(c=u(this,Lr))==null||c.resolve();var a=L;if(u(this,Ir)===0&&(u(this,Ye).length===0||a!==null)&&j(this,Q,hn).call(this),u(this,Ye).length>0)if(a!==null){for(const p of u(this,Ye))u(a,Ye).push(p);z(this,Ye,[])}else a=this;a!==null&&($t.clear(),j(d=a,Q,pn).call(d))},Oi=function(t,r,n){t.f^=xe;for(var i=t.first;i!==null;){var s=i.f,a=(s&(tt|It))!==0,o=a&&(s&xe)!==0,l=o||(s&Re)!==0||u(this,Tt).has(i);if(!l&&i.fn!==null){a?i.f^=xe:(s&wr)!==0?r.push(i):Jr(i)&&((s&ft)!==0&&u(this,gt).add(i),Nr(i));var c=i.first;if(c!==null){i=c;continue}}for(;i!==null;){var d=i.next;if(d!==null){i=d;break}i=i.parent}}},Ts=function(){for(var t=u(this,Kt);t!==null;){if(!t.is_fork){for(const[r,[,n]]of this.current)if(t.current.has(r)&&!n)return t}t=u(t,Kt)}return null},Ns=function(t){var n;for(const[i,s]of t.current)!this.previous.has(i)&&t.previous.has(i)&&this.previous.set(i,t.previous.get(i)),this.current.set(i,s);for(const[i,s]of t.async_deriveds){const a=this.async_deriveds.get(i);a&&s.promise.then(a.resolve).catch(a.reject)}t.async_deriveds.clear(),this.transfer_effects(u(t,Vt),u(t,gt));const r=i=>{var s=i.reactions;if(s!==null&&!((i.f&Te)!==0&&(i.f&(me|rt))===0))for(const l of s){var a=l.f;if((a&Te)!==0)r(l);else{var o=l;a&(Sr|ft)&&!this.async_deriveds.has(o)&&(u(this,gt).delete(o),pe(o,me),this.schedule(o))}}};for(const i of this.current.keys())r(i);this.oncommit(()=>t.discard()),j(n=t,Q,hn).call(n),L=this,j(this,Q,pn).call(this)},Vr=function(t){for(var r=0;r<t.length;r+=1)qi(t[r],u(this,Vt),u(this,gt))},Kc=function(){var p,y;for(let h=Jn;h!==null;h=u(h,fr)){var t=h.id<this.id,r=[];for(const[g,[k,f]]of this.current){if(h.current.has(g)){var n=h.current.get(g)[0];if(t&&k!==n)h.current.set(g,[k,f]);else continue}r.push(g)}if(t)for(const[g,k]of this.async_deriveds){const f=h.async_deriveds.get(g);f&&k.promise.then(f.resolve).catch(f.reject)}var i=[...h.current.keys()].filter(g=>!h.current.get(g)[1]);if(!(!u(h,Rr)||i.length===0)){var s=i.filter(g=>!this.current.has(g));if(s.length===0)t&&h.discard();else if(r.length>0){if(t)for(const g of u(this,zr))h.unskip_effect(g,k=>{var f;(k.f&(ft|Sr))!==0?h.schedule(k):j(f=h,Q,Vr).call(f,[k])});h.activate();var a=new Set,o=new Map;for(var l of r)ra(l,s,a,o);o=new Map;var c=[...h.current].filter(([g,k])=>{const f=this.current.get(g);return f?f[0]!==k[0]||f[1]!==k[1]:!0}).map(([g])=>g);if(c.length>0)for(const g of u(this,ln))(g.f&(Ce|Re|yn))===0&&ri(g,c,o)&&((g.f&(Sr|ft))!==0?(pe(g,me),h.schedule(g)):u(h,Vt).add(g));if(u(h,Ye).length>0&&!u(h,dr)){h.apply();for(var d of j(p=h,Q,Ni).call(p))j(y=h,Q,Oi).call(y,d,[],[])}h.deactivate()}}}},hn=function(){if(this.linked){var t=u(this,Kt),r=u(this,fr);t===null?Jn=r:z(t,fr,r),r===null?Mr=t:z(r,Kt,t),this.linked=!1}};let er=Pn;function bo(){try{ao()}catch(e){At(e,ei)}}let vt=null;function ta(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(Ce|Re))===0&&Jr(n)&&(vt=new Set,Nr(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&wa(n),(vt==null?void 0:vt.size)>0)){$t.clear();for(const i of vt){if((i.f&(Ce|Re))!==0)continue;const s=[i];let a=i.parent;for(;a!==null;)vt.has(a)&&(vt.delete(a),s.push(a)),a=a.parent;for(let o=s.length-1;o>=0;o--){const l=s[o];(l.f&(Ce|Re))===0&&Nr(l)}}vt.clear()}}vt=null}}function ra(e,t,r,n){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(const i of e.reactions){const s=i.f;(s&Te)!==0?ra(i,t,r,n):(s&(Sr|ft))!==0&&(s&me)===0&&ri(i,t,n)&&(pe(i,me),ni(i))}}function ri(e,t,r){const n=r.get(e);if(n!==void 0)return n;if(e.deps!==null)for(const i of e.deps){if(Jt.call(t,i))return!0;if((i.f&Te)!==0&&ri(i,t,r))return r.set(i,!0),!0}return r.set(e,!1),!1}function ni(e){L.schedule(e)}function na(e,t){if(!((e.f&tt)!==0&&(e.f&xe)!==0)){(e.f&me)!==0?t.d.push(e):(e.f&rt)!==0&&t.m.push(e),pe(e,xe);for(var r=e.first;r!==null;)na(r,t),r=r.next}}function ia(e){pe(e,xe);for(var t=e.first;t!==null;)ia(t),t=t.next}let En=new Set;const $t=new Map;let aa=!1;function Xt(e,t){var r={f:0,v:e,reactions:null,equals:Gi,rv:0,wv:0};return r}function F(e,t){const r=Xt(e);return ka(r),r}function xo(e,t=!1,r=!0){var i;const n=Xt(e);return t||(n.equals=Yi),kr&&r&&de!==null&&de.l!==null&&((i=de.l).s??(i.s=[])).push(n),n}function E(e,t,r=!1){H!==null&&(!ht||(H.f&yn)!==0)&&jr()&&(H.f&(Te|ft|Sr|yn))!==0&&(Mt===null||!Mt.has(e))&&co();let n=r?ze(t):t;return Tr(e,n,kn)}var tr=null,ii=0;function Tr(e,t,r=null){if(!e.equals(t)){zt?$t.set(e,t):$t.has(e)||$t.set(e,e.v);var n=er.ensure();if(n.capture(e,t),(e.f&Te)!==0){const i=e;(e.f&me)!==0&&Qn(i),Ee===null&&Kn(i)}e.wv=Aa(),tr=null,ii=0,oa(e,me,r),tr=null,jr()&&U!==null&&(U.f&xe)!==0&&(U.f&(tt|It))===0&&(st===null?Co([e]):st.push(e)),!n.is_fork&&En.size>0&&!aa&&So()}return t}function So(){aa=!1;for(const e of En){(e.f&xe)!==0&&pe(e,rt);let t;try{t=Jr(e)}catch{t=!0}t&&Nr(e)}En.clear()}function sa(e,t=1){var r=v(e),n=t===1?r++:r--;return E(e,r),n}function Kr(e){E(e,e.v+1)}function oa(e,t,r){var n=e.reactions;if(n!==null){var i=jr(),s=n.length;if(ii+=s,ii>1e5&&tr===null&&(tr=new Set),tr!==null){if(tr.has(e))return;tr.add(e)}for(var a=0;a<s;a++){var o=n[a],l=o.f;if(!(!i&&o===U)){var c=(l&me)===0;if(c&&pe(o,t),(l&yn)!==0)En.add(o);else if((l&Te)!==0){var d=o;Ee==null||Ee.delete(d),oa(d,rt,r)}else if(c){var p=o;(l&ft)!==0&&vt!==null&&vt.add(p),r!==null?r.push(p):ni(p)}}}}}function ze(e){if(typeof e!="object"||e===null||xt in e||Hi in e)return e;const t=Hn(e);if(t!==Os&&t!==Rs)return e;var r=new Map,n=ne(e),i=F(0),s=sr,a=o=>{if(sr===s)return o();var l=H,c=sr;it(null),$a(s);var d=o();return it(l),$a(c),d};return n&&r.set("length",F(e.length)),new Proxy(e,{defineProperty(o,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&oo();var d=r.get(l);return d===void 0?a(()=>{var p=F(c.value);return r.set(l,p),p}):E(d,c.value,!0),!0},deleteProperty(o,l){var c=r.get(l);if(c===void 0){if(l in o){const d=a(()=>F(ye));r.set(l,d),Kr(i)}}else E(c,ye),Kr(i);return!0},get(o,l,c){var h;if(l===xt)return e;var d=r.get(l),p=l in o;if(d===void 0&&(!p||(h=Ut(o,l))!=null&&h.writable)&&(d=a(()=>{var g=ze(p?o[l]:ye),k=F(g);return k}),r.set(l,d)),d!==void 0){var y=v(d);return y===ye?void 0:y}return Reflect.get(o,l,c)},getOwnPropertyDescriptor(o,l){var y;(y=this.has)==null||y.call(this,o,l);var c=Reflect.getOwnPropertyDescriptor(o,l),d=r.get(l);if(d!==void 0){var p=v(d);if(p===ye)return;if(c&&"value"in c)c.value=p;else return{enumerable:!0,configurable:!0,value:p,writable:!0}}return c},has(o,l){var y;if(l===xt)return!0;var c=r.get(l),d=c!==void 0&&c.v!==ye||Reflect.has(o,l);if(c!==void 0||U!==null&&(!d||(y=Ut(o,l))!=null&&y.writable)){c===void 0&&(c=a(()=>{var h=d?ze(o[l]):ye,g=F(h);return g}),r.set(l,c));var p=v(c);if(p===ye)return!1}return d},set(o,l,c,d){var S;var p=r.get(l),y=l in o;if(n&&l==="length")for(var h=c;h<p.v;h+=1){var g=r.get(h+"");g!==void 0?E(g,ye):h in o&&(g=a(()=>F(ye)),r.set(h+"",g))}if(p===void 0)(!y||(S=Ut(o,l))!=null&&S.writable)&&(p=a(()=>F(void 0)),E(p,ze(c)),r.set(l,p));else{y=p.v!==ye;var k=a(()=>ze(c));E(p,k)}var f=Reflect.getOwnPropertyDescriptor(o,l);if(f!=null&&f.set&&f.set.call(d,c),!y){if(n&&typeof l=="string"){var _=r.get("length"),m=Number(l);Number.isInteger(m)&&m>=_.v&&E(_,m+1)}Kr(i)}return!0},ownKeys(o){v(i);var l=Reflect.ownKeys(o).filter(p=>{var y=r.get(p);return y===void 0||y.v!==ye});for(var[c,d]of r)d.v!==ye&&!(c in o)&&l.push(c);return l},setPrototypeOf(){lo()}})}function la(e){try{if(e!==null&&typeof e=="object"&&xt in e)return e[xt]}catch{}return e}function ca(e,t){return Object.is(la(e),la(t))}var ua,fa,da,va;function ko(){if(ua===void 0){ua=window,fa=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;da=Ut(t,"firstChild").get,va=Ut(t,"nextSibling").get,Di(e)&&(e[Gn]=void 0,e[bn]=null,e[Yn]=void 0,e.__e=void 0),Di(r)&&(r[Ur]=void 0)}}function Lt(e=""){return document.createTextNode(e)}function rr(e){return da.call(e)}function Zr(e){return va.call(e)}function P(e,t){return rr(e)}function G(e,t=!1){{var r=rr(e);return r instanceof Comment&&r.data===""?Zr(r):r}}function q(e,t=!1){return rr(e)}function C(e,t=1,r=!1){let n=e;for(;t--;)n=Zr(n);return n}function Eo(e){e.textContent=""}function pa(){return!1}function ai(e,t,r){return t==null||t===Xi?r?document.createElement(e,{is:r}):document.createElement(e):r?document.createElementNS(t,e,{is:r}):document.createElementNS(t,e)}function $o(e){var t=U;if(t===null)return H.f|=jt,e;if((t.f&br)===0&&(t.f&wr)===0)throw e;At(e,t)}function At(e,t){if(!(t!==null&&(t.f&Ce)!==0)){for(;t!==null;){if((t.f&jn)!==0&&(t.f&(Ce|mn))===0){if((t.f&br)===0)throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw e}}function ha(e){U===null&&(H===null&&io(),no()),zt&&ro()}function Ao(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function pt(e,t){var r=U;r!==null&&(r.f&Re)!==0&&(e|=Re);var n={ctx:de,deps:null,nodes:null,f:e|me|dt,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};L==null||L.register_created_effect(n);var i=n;if((e&wr)!==0)qr!==null?qr.push(n):er.ensure().schedule(n);else if(t!==null){try{Nr(n)}catch(a){throw $e(n),a}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&xr)===0&&(i=i.first,(e&ft)!==0&&(e&Wt)!==0&&i!==null&&(i.f|=Wt))}if(i!==null&&(i.parent=r,r!==null&&Ao(i,r),H!==null&&(H.f&Te)!==0&&(e&It)===0)){var s=H;(s.effects??(s.effects=[])).push(i)}return n}function si(){return H!==null&&!ht}function oi(e){const t=pt(Hr,null);return pe(t,xe),t.teardown=e,t}function nr(e){ha();var t=U.f,r=!H&&(t&tt)!==0&&de!==null&&!de.i;if(r){var n=de;(n.e??(n.e=[])).push(e)}else return _a(e)}function _a(e){return pt(wr|Fi,e)}function Mo(e){return ha(),pt(Hr|Fi,e)}function To(e){er.ensure();const t=pt(It|xr,e);return(r={})=>new Promise(n=>{r.outro?ir(t,()=>{$e(t),n(void 0)}):($e(t),n(void 0))})}function li(e){return pt(wr,e)}function No(e){return pt(Sr|xr,e)}function ga(e,t=0){return pt(Hr|t,e)}function he(e,t=[],r=[],n=[]){Ki(n,t,r,i=>{pt(Hr,()=>{e(...i.map(v))})})}function Qr(e,t=0){var r=pt(ft|t,e);return r}function ma(e,t=0){var r=pt(Wn|t,e);return r}function De(e){return pt(tt|xr,e)}function ya(e){var t=e.teardown;if(t!==null){const r=zt,n=H;Sa(!0),it(null);try{t.call(null)}catch(i){At(i,e.parent)}finally{Sa(r),it(n)}}}function ci(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const i=r.ac;i!==null&&Xr(()=>{i.abort(Wr)});var n=r.next;(r.f&It)!==0?r.parent=null:$e(r,t),r=n}}function Oo(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&tt)===0&&$e(t),t=r}}function $e(e,t=!0){var r=!1;(t||(e.f&Is)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Ro(e.nodes.start,e.nodes.end),r=!0),e.f|=mn,ci(e,t&&!r),en(e,0);var n=e.nodes&&e.nodes.t;if(n!==null)for(const s of n)s.stop();ya(e),e.f^=mn,e.f|=Ce;var i=e.parent;i!==null&&i.first!==null&&wa(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Ro(e,t){for(;e!==null;){var r=e===t?null:Zr(e);e.remove(),e=r}}function wa(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function ir(e,t,r=!0){var n=[];e.f|=Xn,ba(e,n,!0);var i=()=>{r&&$e(e),t&&t()},s=n.length;if(s>0){var a=()=>--s||i();for(var o of n)o.out(a)}else i()}function ba(e,t,r){if((e.f&Re)===0){e.f^=Re;var n=e.nodes&&e.nodes.t;if(n!==null)for(const o of n)(o.is_global||r)&&t.push(o);for(var i=e.first;i!==null;){var s=i.next;if((i.f&It)===0){var a=(i.f&Wt)!==0||(i.f&tt)!==0&&(e.f&ft)!==0;ba(i,t,a?r:!1)}i=s}}}function $n(e){e.f&=~Xn,xa(e,!0)}function xa(e,t){if((e.f&Xn)===0&&(e.f&Re)!==0){e.f^=Re,(e.f&xe)===0&&(pe(e,me),er.ensure().schedule(e));for(var r=e.first;r!==null;){var n=r.next,i=(r.f&Wt)!==0||(r.f&tt)!==0;xa(r,i?t:!1),r=n}var s=e.nodes&&e.nodes.t;if(s!==null)for(const a of s)(a.is_global||t)&&a.in()}}function ui(e,t){if(e.nodes)for(var r=e.nodes.start,n=e.nodes.end;r!==null;){var i=r===n?null:Zr(r);t.append(r),r=i}}let An=!1,zt=!1;function Sa(e){zt=e}let H=null,ht=!1;function it(e){H=e}let U=null;function at(e){U=e}let Mt=null;function ka(e){H!==null&&((H.f&wn)!==0||(H.f&Te)!==0)&&(Mt??(Mt=new Set)).add(e)}let Be=null,Ue=0,st=null;function Co(e){st=e}let Ea=1,ar=0,sr=ar;function $a(e){sr=e}function Aa(){return++Ea}function Jr(e){var t=e.f;if((t&me)!==0)return!0;if((t&rt)!==0){for(var r=e.deps,n=r.length,i=0;i<n;i++){var s=r[i];if(Jr(s)&&Qi(s),s.wv>e.wv)return!0}(t&dt)!==0&&Ee===null&&pe(e,xe)}return!1}function Ma(e,t,r=!0){var n=e.reactions;if(n!==null&&!(Mt!==null&&Mt.has(e)))for(var i=0;i<n.length;i++){var s=n[i];(s.f&Te)!==0?Ma(s,t,!1):t===s&&(r?pe(s,me):(s.f&xe)!==0&&pe(s,rt),ni(s))}}function Ta(e){var t=Be,r=Ue,n=st,i=H,s=Mt,a=de,o=ht,l=sr,c=e.f;Be=null,Ue=0,st=null,H=(c&(tt|It))===0?e:null,Mt=null,Er(e.ctx),ht=!1,sr=++ar,e.ac!==null&&(Xr(()=>{e.ac.abort(Wr)}),e.ac=null);try{e.f|=wn;var d=e.fn,p=d();e.f|=br;var y=Na(e);if(jr()&&st!==null&&!ht&&y!==null&&(e.f&(Te|rt|me))===0)for(var h=0;h<st.length;h++)Ma(st[h],e);if(i!==null&&i!==e){if(ar++,i.deps!==null)for(let g=0;g<r;g+=1)i.deps[g].rv=ar;if(t!==null)for(const g of t)g.rv=ar;st!==null&&(n===null?n=st:n.push(...st))}return(e.f&jt)!==0&&(e.f^=jt),p}catch(g){return Na(e),$o(g)}finally{e.f^=wn,Be=t,Ue=r,st=n,H=i,Mt=s,Er(a),ht=o,sr=l}}function Na(e){var i;var t=e.deps,r=L==null?void 0:L.is_fork;if(Be!==null){var n;if(r||en(e,Ue),t!==null&&Ue>0)for(t.length=Ue+Be.length,n=0;n<Be.length;n++)t[Ue+n]=Be[n];else e.deps=t=Be;if(si()&&(e.f&dt)!==0)for(n=Ue;n<t.length;n++)((i=t[n]).reactions??(i.reactions=[])).push(e)}else!r&&t!==null&&Ue<t.length&&(en(e,Ue),t.length=Ue);return t}function Po(e,t){let r=t.reactions;if(r!==null){var n=be.call(r,e);if(n!==-1){var i=r.length-1;i===0?r=t.reactions=null:(r[n]=r[i],r.pop())}}if(r===null&&(t.f&Te)!==0&&(Be===null||!Jt.call(Be,t))){var s=t;(s.f&dt)!==0&&(s.f^=dt),s.v!==ye&&Kn(s),s.ac!==null&&Xr(()=>{s.ac.abort(Wr),s.ac=null,pe(s,me)}),yo(s),en(s,0)}}function en(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Po(e,r[n])}function Nr(e){var t=e.f;if((t&Ce)===0){pe(e,xe);var r=U,n=An;U=e,An=(t&(tt|It))===0;try{(t&(ft|Wn))!==0?Oo(e):ci(e),ya(e);var i=Ta(e);e.teardown=typeof i=="function"?i:null,e.wv=Ea;var s}finally{An=n,U=r}}}function v(e){var t=e.f,r=(t&Te)!==0;if(H!==null&&!ht){var n=U!==null&&(U.f&Ce)!==0;if(!n&&(Mt===null||!Mt.has(e))){var i=H.deps;if((H.f&wn)!==0)e.rv<ar&&(e.rv=ar,Be===null&&i!==null&&i[Ue]===e?Ue++:Be===null?Be=[e]:Be.push(e));else{H.deps??(H.deps=[]),Jt.call(H.deps,e)||H.deps.push(e);var s=e.reactions;s===null?e.reactions=[H]:Jt.call(s,H)||s.push(H)}}}if(zt&&$t.has(e))return $t.get(e);if(r){var a=e;if(zt){var o=a.v;return((a.f&xe)===0&&a.reactions!==null||Ra(a))&&(o=Qn(a)),$t.set(a,o),o}var l=(a.f&dt)===0&&!ht&&H!==null&&(An||(H.f&dt)!==0),c=(a.f&br)===0;Jr(a)&&(l&&(a.f|=dt),Qi(a)),l&&!c&&(Ji(a),Oa(a))}if(Ee!=null&&Ee.has(e))return Ee.get(e);if((e.f&jt)!==0)throw e.v;return e.v}function Oa(e){if(e.f|=dt,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&Te)!==0&&(t.f&dt)===0&&(Ji(t),Oa(t))}function Ra(e){if(e.v===ye)return!0;if(e.deps===null)return!1;for(const t of e.deps)if($t.has(t)||(t.f&Te)!==0&&Ra(t))return!0;return!1}function Gt(e){var t=ht;try{return ht=!0,e()}finally{ht=t}}function or(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(xt in e)fi(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&xt in r&&fi(r)}}}function fi(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{fi(e[n],t)}catch{}const r=Hn(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=zi(r);for(let i in n){const s=n[i].get;if(s)try{s.call(e)}catch{}}}}}function Io(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Lo=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function zo(e){return Lo.includes(e)}const Do={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Bo(e){return e=e.toLowerCase(),Do[e]??e}const Vo=["touchstart","touchmove"];function Fo(e){return Vo.includes(e)}const lr=Symbol("events"),Ca=new Set,di=new Set;function Ho(e,t,r,n={}){function i(s){if(n.capture||hi.call(t,s),!s.cancelBubble)return Xr(()=>r==null?void 0:r.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?(i.__removed=!1,Et(()=>{i.__removed||t.addEventListener(e,i,n)})):t.addEventListener(e,i,n),i}function ee(e,t,r){(t[lr]??(t[lr]={}))[e]=r}function cr(e){for(var t=0;t<e.length;t++)Ca.add(e[t]);for(var r of di)r(e)}let vi=null,pi=!1;function hi(e){var k,f;var t=this,r=t.ownerDocument,n=e.type,i=((k=e.composedPath)==null?void 0:k.call(e))||[],s=i[0]||e.target;vi=e,pi||(pi=!0,setTimeout(()=>{pi=!1,vi=null}));var a=0,o=vi===e&&e[lr];if(o){var l=i.indexOf(o);if(l!==-1&&(t===document||t===window)){e[lr]=t;return}var c=i.indexOf(t);if(c===-1)return;l<=c&&(a=l)}if(s=i[a]||e.target,s!==t){Li(e,"currentTarget",{configurable:!0,get(){return s||r}});var d=H,p=U;it(null),at(null);try{for(var y,h=[];s!==null&&s!==t;){try{var g=(f=s[lr])==null?void 0:f[n];g!=null&&(!s.disabled||e.target===s)&&g.call(s,e)}catch(_){y?h.push(_):y=_}if(e.cancelBubble)break;a++,s=a<i.length?i[a]:null}if(y){for(let _ of h)queueMicrotask(()=>{throw _});throw y}}finally{e[lr]=t,delete e.currentTarget,it(d),at(p)}}}const _i=((os=globalThis==null?void 0:globalThis.window)==null?void 0:os.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Uo(e){return(_i==null?void 0:_i.createHTML(e))??e}function Pa(e){var t=ai("template");return t.innerHTML=Uo(e.replaceAll("<!>","<!---->")),t.content}function tn(e,t){var r=U;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function _e(e,t){var r=(t&js)!==0,n=(t&Xs)!==0,i,s=!e.startsWith("<!>");return()=>{i===void 0&&(i=Pa(s?e:"<!>"+e),r||(i=rr(i)));var a=n||fa?document.importNode(i,!0):i.cloneNode(!0);if(r){var o=rr(a),l=a.lastChild;tn(o,l)}else tn(a,a);return a}}function Wo(e,t,r="svg"){var n=!e.startsWith("<!>"),i=`<${r}>${n?e:"<!>"+e}</${r}>`,s;return()=>{if(!s){var a=Pa(i),o=rr(a);s=rr(o)}var l=s.cloneNode(!0);return tn(l,l),l}}function jo(e,t){return Wo(e,t,"svg")}function K(){var e=document.createDocumentFragment(),t=document.createComment(""),r=Lt();return e.append(t,r),tn(t,r),e}function M(e,t){e!==null&&e.before(t)}function Xo(e){let t=0,r=Xt(0),n;return()=>{si()&&(v(r),ga(()=>(t===0&&(n=Gt(()=>e(()=>Kr(r)))),t+=1,()=>{Et(()=>{t-=1,t===0&&(n==null||n(),n=void 0,Kr(r))})})))}}var Go=Wt|xr;function Yo(e,t,r,n){new qo(e,t,r,n)}class qo{constructor(t,r,n,i){B(this,oe);et(this,"parent");et(this,"is_pending",!1);et(this,"transform_error");B(this,lt);B(this,Ei,null);B(this,ct);B(this,vr);B(this,Pe);B(this,qe,null);B(this,Ie,null);B(this,Ke,null);B(this,Nt,null);B(this,pr,0);B(this,Zt,0);B(this,Dr,!1);B(this,cn,new Set);B(this,un,new Set);B(this,Ft,null);B(this,In,Xo(()=>(z(this,Ft,Xt(u(this,pr))),()=>{z(this,Ft,null)})));var s;z(this,lt,t),z(this,ct,r),z(this,vr,a=>{var o=U;o.b=this,o.f|=jn,n(a)}),this.parent=U.b,this.transform_error=i??((s=this.parent)==null?void 0:s.transform_error)??(a=>a),z(this,Pe,Qr(()=>{j(this,oe,Ci).call(this)},Go))}defer_effect(t){qi(t,u(this,cn),u(this,un))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!u(this,ct).pending}update_pending_count(t,r){j(this,oe,Pi).call(this,t,r),z(this,pr,u(this,pr)+t),!(!u(this,Ft)||u(this,Dr))&&(z(this,Dr,!0),Et(()=>{z(this,Dr,!1),u(this,Ft)&&Tr(u(this,Ft),u(this,pr))}))}get_effect_pending(){return u(this,In).call(this),v(u(this,Ft))}error(t){if(!u(this,ct).onerror&&!u(this,ct).failed)throw t;L!=null&&L.is_fork?(u(this,qe)&&L.skip_effect(u(this,qe)),u(this,Ie)&&L.skip_effect(u(this,Ie)),u(this,Ke)&&L.skip_effect(u(this,Ke)),L.oncommit(()=>{j(this,oe,Ii).call(this,t)})):j(this,oe,Ii).call(this,t)}}lt=new WeakMap,Ei=new WeakMap,ct=new WeakMap,vr=new WeakMap,Pe=new WeakMap,qe=new WeakMap,Ie=new WeakMap,Ke=new WeakMap,Nt=new WeakMap,pr=new WeakMap,Zt=new WeakMap,Dr=new WeakMap,cn=new WeakMap,un=new WeakMap,Ft=new WeakMap,In=new WeakMap,oe=new WeakSet,Zc=function(){try{z(this,qe,De(()=>u(this,vr).call(this,u(this,lt))))}catch(t){this.error(t)}},Qc=function(t){const r=u(this,ct).failed,{reset:n,invoke_onerror:i}=j(this,oe,Ri).call(this,t);Et(i),r&&z(this,Ke,De(()=>{r(u(this,lt),()=>t,()=>n)}))},Ri=function(t){var r=!1,n=!1;const i=()=>{if(r){Zs();return}r=!0,n&&uo(),u(this,Ke)!==null&&ir(u(this,Ke),()=>{z(this,Ke,null)}),j(this,oe,Fn).call(this,()=>{j(this,oe,Ci).call(this)})};return{reset:i,invoke_onerror:()=>{var a,o;try{n=!0,(o=(a=u(this,ct)).onerror)==null||o.call(a,t,i),n=!1}catch(l){At(l,u(this,Pe)&&u(this,Pe).parent)}}}},Jc=function(){const t=u(this,ct).pending;t&&(this.is_pending=!0,z(this,Ie,De(()=>t(u(this,lt)))),Et(()=>{var r=z(this,Nt,document.createDocumentFragment()),n=Lt(),i=!1;if(r.append(n),z(this,qe,j(this,oe,Fn).call(this,()=>{try{return De(()=>u(this,vr).call(this,n))}catch(s){try{this.error(s),i=!0}catch(a){At(a,u(this,Pe).parent)}return null}})),u(this,qe)===null){z(this,Nt,null),i&&j(this,oe,_n).call(this,L);return}u(this,Zt)===0&&(u(this,lt).before(r),z(this,Nt,null),ir(u(this,Ie),()=>{z(this,Ie,null)}),j(this,oe,_n).call(this,L))}))},Ci=function(){try{if(this.is_pending=this.has_pending_snippet(),z(this,Zt,0),z(this,pr,0),z(this,qe,De(()=>{u(this,vr).call(this,u(this,lt))})),u(this,Zt)>0){var t=z(this,Nt,document.createDocumentFragment());ui(u(this,qe),t);const r=u(this,ct).pending;z(this,Ie,De(()=>r(u(this,lt))))}else j(this,oe,_n).call(this,L)}catch(r){this.error(r)}},_n=function(t){this.is_pending=!1,t.transfer_effects(u(this,cn),u(this,un))},Fn=function(t){var r=U,n=H,i=de;at(u(this,Pe)),it(u(this,Pe)),Er(u(this,Pe).ctx);try{return er.ensure(),t()}finally{at(r),it(n),Er(i)}},Pi=function(t,r){var n;if(!this.has_pending_snippet()){this.parent&&j(n=this.parent,oe,Pi).call(n,t,r);return}z(this,Zt,u(this,Zt)+t),u(this,Zt)===0&&(j(this,oe,_n).call(this,r),u(this,Ie)&&ir(u(this,Ie),()=>{z(this,Ie,null)}),u(this,Nt)&&(u(this,lt).before(u(this,Nt)),z(this,Nt,null)))},Ii=function(t){u(this,qe)&&($e(u(this,qe)),z(this,qe,null)),u(this,Ie)&&($e(u(this,Ie)),z(this,Ie,null)),u(this,Ke)&&($e(u(this,Ke)),z(this,Ke,null));let r=u(this,ct).failed;const n=i=>{const{reset:s,invoke_onerror:a}=j(this,oe,Ri).call(this,i);a(),r&&z(this,Ke,j(this,oe,Fn).call(this,()=>{try{return De(()=>{var o=U;o.b=this,o.f|=jn,r(u(this,lt),()=>i,()=>s)})}catch(o){return At(o,u(this,Pe).parent),null}}))};Et(()=>{var i;try{i=this.transform_error(t)}catch(s){At(s,u(this,Pe)&&u(this,Pe).parent);return}i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(n,s=>At(s,u(this,Pe)&&u(this,Pe).parent)):n(i)})};function Z(e,t){var r=t==null?"":typeof t=="object"?`${t}`:t;r!==(e[Ur]??(e[Ur]=e.nodeValue))&&(e[Ur]=r,e.nodeValue=`${r}`)}function Ko(e,t){return Zo(e,t)}const Mn=new Map;function Zo(e,{target:t,anchor:r,props:n={},events:i,context:s,intro:a=!0,transformError:o}){ko();var l=void 0,c=To(()=>{var d=r??t.appendChild(Lt());Yo(d,{pending:()=>{}},h=>{St({});var g=de;s&&(g.c=s),i&&(n.$$events=i),l=e(h,n)||qn(),kt()},o);var p=new Set,y=h=>{for(var g=0;g<h.length;g++){var k=h[g];if(!p.has(k)){p.add(k);var f=Fo(k);for(const S of[t,document]){var _=Mn.get(S);_===void 0&&(_=new Map,Mn.set(S,_));var m=_.get(k);m===void 0?(S.addEventListener(k,hi,{passive:f}),_.set(k,1)):_.set(k,m+1)}}}};return y(gn(Ca)),di.add(y),()=>{var f;for(var h of p)for(const _ of[t,document]){var g=Mn.get(_),k=g.get(h);--k==0?(_.removeEventListener(h,hi),g.delete(h),g.size===0&&Mn.delete(_)):g.set(h,k)}di.delete(y),d!==r&&((f=d.parentNode)==null||f.removeChild(d))}});return Qo.set(l,c),l}let Qo=new WeakMap;class gi{constructor(t,r=!0){et(this,"anchor");B(this,mt,new Map);B(this,Ot,new Map);B(this,Ze,new Map);B(this,hr,new Set);B(this,fn,!0);B(this,dn,t=>{if(u(this,mt).has(t)){var r=u(this,mt).get(t),n=u(this,Ot).get(r);if(n)$n(n),u(this,hr).delete(r);else{var i=u(this,Ze).get(r);i&&($n(i.effect),u(this,Ot).set(r,i.effect),u(this,Ze).delete(r),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),n=i.effect)}for(const[s,a]of u(this,mt)){if(u(this,mt).delete(s),s===t)break;const o=u(this,Ze).get(a);o&&($e(o.effect),u(this,Ze).delete(a))}for(const[s,a]of u(this,Ot)){if(s===r||u(this,hr).has(s))continue;const o=()=>{if(Array.from(u(this,mt).values()).includes(s)){var c=document.createDocumentFragment();ui(a,c),c.append(Lt()),u(this,Ze).set(s,{effect:a,fragment:c})}else $e(a);u(this,hr).delete(s),u(this,Ot).delete(s)};u(this,fn)||!n?(u(this,hr).add(s),ir(a,o,!1)):o()}}});B(this,Ln,t=>{u(this,mt).delete(t);const r=Array.from(u(this,mt).values());for(const[n,i]of u(this,Ze))r.includes(n)||($e(i.effect),u(this,Ze).delete(n))});this.anchor=t,z(this,fn,r)}ensure(t,r){var n=L,i=pa();if(r&&!u(this,Ot).has(t)&&!u(this,Ze).has(t))if(i){var s=document.createDocumentFragment(),a=Lt();s.append(a),u(this,Ze).set(t,{effect:De(()=>r(a)),fragment:s})}else u(this,Ot).set(t,De(()=>r(this.anchor)));if(u(this,mt).set(n,t),i){for(const[o,l]of u(this,Ot))o===t?n.unskip_effect(l):n.skip_effect(l);for(const[o,l]of u(this,Ze))o===t?n.unskip_effect(l.effect):n.skip_effect(l.effect);n.oncommit(u(this,dn)),n.ondiscard(u(this,Ln))}else u(this,dn).call(this,n)}}mt=new WeakMap,Ot=new WeakMap,Ze=new WeakMap,hr=new WeakMap,fn=new WeakMap,dn=new WeakMap,Ln=new WeakMap;function We(e,t,r=!1){var n=new gi(e),i=r?Wt:0;function s(a,o){n.ensure(a,o)}Qr(()=>{var a=!1;t((o,l=0)=>{a=!0,s(l,o)}),a||s(-1,null)},i)}function Ia(e,t){return t}function Jo(e,t,r){for(var n=[],i=t.length,s,a=t.length,o=0;o<i;o++){let p=t[o];ir(p,()=>{if(s){if(s.pending.delete(p),s.done.add(p),s.pending.size===0){var y=e.outrogroups;mi(e,gn(s.done)),y.delete(s),y.size===0&&(e.outrogroups=null)}}else a-=1},!1)}if(a===0){var l=n.length===0&&r!==null&&e.pending.size===0;if(l){var c=r,d=c.parentNode;Eo(d),d.append(c),e.items.clear()}mi(e,t,!l)}else s={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(s)}function mi(e,t,r=!0){var n;if(e.pending.size>0){n=new Set;for(const a of e.pending.values())for(const o of a)n.add(e.items.get(o).e)}for(var i=0;i<t.length;i++){var s=t[i];if(n!=null&&n.has(s)){s.f|=bt;const a=document.createDocumentFragment();ui(s,a)}else $e(t[i],r)}}var La;function Yt(e,t,r,n,i,s=null){var a=e,o=new Map,l=(t&Wi)!==0;if(l){var c=e;a=c.appendChild(Lt())}var d=null,p=Zn(()=>{var S=r();return ne(S)?S:S==null?[]:gn(S)}),y,h=new Map,g=!0;function k(S){(m.effect.f&Ce)===0&&(m.pending.delete(S),m.fallback=d,el(m,y,a,t,n),d!==null&&(y.length===0?(d.f&bt)===0?$n(d):(d.f^=bt,nn(d,null,a)):ir(d,()=>{d=null})))}function f(S){m.pending.delete(S)}var _=Qr(()=>{y=v(p);for(var S=y.length,$=new Set,x=L,A=pa(),N=0;N<S;N+=1){var D=y[N],I=n(D,N),J=g?null:o.get(I);J?(J.v&&Tr(J.v,D),J.i&&Tr(J.i,N),A&&x.unskip_effect(J.e)):(J=tl(o,g?a:La??(La=Lt()),D,I,N,i,t,r),g||(J.e.f|=bt),o.set(I,J)),$.add(I)}if(S===0&&s&&!d&&(g?d=De(()=>s(a)):(d=De(()=>s(La??(La=Lt()))),d.f|=bt)),S>$.size&&to(),!g)if(h.set(x,$),A){for(const[ae,Ne]of o)$.has(ae)||x.skip_effect(Ne.e);x.oncommit(k),x.ondiscard(f)}else k(x);v(p)}),m={effect:_,items:o,pending:h,outrogroups:null,fallback:d};g=!1}function rn(e){for(;e!==null&&(e.f&tt)===0;)e=e.next;return e}function el(e,t,r,n,i){var J,ae,Ne,Fe,Le,yt,Qe,ut,wt;var s=(n&Bs)!==0,a=t.length,o=e.items,l=rn(e.effect.first),c,d=null,p,y=[],h=[],g,k,f,_;if(s)for(_=0;_<a;_+=1)g=t[_],k=i(g,_),f=o.get(k).e,(f.f&bt)===0&&((ae=(J=f.nodes)==null?void 0:J.a)==null||ae.measure(),(p??(p=new Set)).add(f));for(_=0;_<a;_+=1){if(g=t[_],k=i(g,_),f=o.get(k).e,e.outrogroups!==null)for(const ke of e.outrogroups)ke.pending.delete(f),ke.done.delete(f);if((f.f&Re)!==0&&($n(f),s&&((Fe=(Ne=f.nodes)==null?void 0:Ne.a)==null||Fe.unfix(),(p??(p=new Set)).delete(f))),(f.f&bt)!==0)if(f.f^=bt,f===l)nn(f,null,r);else{var m=d?d.next:l;f===e.effect.last&&(e.effect.last=f.prev),f.prev&&(f.prev.next=f.next),f.next&&(f.next.prev=f.prev),qt(e,d,f),qt(e,f,m),nn(f,m,r),d=f,y=[],h=[],l=rn(d.next);continue}if(f!==l){if(c!==void 0&&c.has(f)){if(y.length<h.length){var S=h[0],$;d=S.prev;var x=y[0],A=y[y.length-1];for($=0;$<y.length;$+=1)nn(y[$],S,r);for($=0;$<h.length;$+=1)c.delete(h[$]);qt(e,x.prev,A.next),qt(e,d,x),qt(e,A,S),l=S,d=A,_-=1,y=[],h=[]}else c.delete(f),nn(f,l,r),qt(e,f.prev,f.next),qt(e,f,d===null?e.effect.first:d.next),qt(e,d,f),d=f;continue}for(y=[],h=[];l!==null&&l!==f;)(c??(c=new Set)).add(l),h.push(l),l=rn(l.next);if(l===null)continue}(f.f&bt)===0&&y.push(f),d=f,l=rn(f.next)}if(e.outrogroups!==null){for(const ke of e.outrogroups)ke.pending.size===0&&(mi(e,gn(ke.done)),(Le=e.outrogroups)==null||Le.delete(ke));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||c!==void 0){var N=[];if(c!==void 0)for(f of c)(f.f&Re)===0&&N.push(f);for(;l!==null;)(l.f&Re)===0&&l!==e.fallback&&N.push(l),l=rn(l.next);var D=N.length;if(D>0){var I=(n&Wi)!==0&&a===0?r:null;if(s){for(_=0;_<D;_+=1)(Qe=(yt=N[_].nodes)==null?void 0:yt.a)==null||Qe.measure();for(_=0;_<D;_+=1)(wt=(ut=N[_].nodes)==null?void 0:ut.a)==null||wt.fix()}Jo(e,N,I)}}s&&Et(()=>{var ke,Rt;if(p!==void 0)for(f of p)(Rt=(ke=f.nodes)==null?void 0:ke.a)==null||Rt.apply()})}function tl(e,t,r,n,i,s,a,o){var l=(a&zs)!==0?(a&Vs)===0?xo(r,!1,!1):Xt(r):null,c=(a&Ds)!==0?Xt(i):null;return{v:l,i:c,e:De(()=>(s(t,l??r,c??i,o),()=>{e.delete(n)}))}}function nn(e,t,r){if(e.nodes)for(var n=e.nodes.start,i=e.nodes.end,s=t&&(t.f&bt)===0?t.nodes.start:r;n!==null;){var a=Zr(n);if(s.before(n),n===i)return;n=a}}function qt(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function se(e,t,r,n,i){var o,l;if((o=t.$$host)!=null&&o.$$shadowRoot){const c=ai("slot");M(e,c);return}var s=(l=t.$$slots)==null?void 0:l[r],a=!1;s===!0&&(s=t.children,a=!0),s===void 0||s(e,a?()=>n:n)}function rl(e,t,r){var n=new gi(e);Qr(()=>{var i=t()??null;n.ensure(i,i&&(s=>r(s,i)))},Wt)}function nl(e,t,r,n,i,s){var a=null,o=e,l=new gi(o,!1);Qr(()=>{const c=t()||null;var d=Gs;if(c===null){l.ensure(null,null);return}return l.ensure(c,p=>{if(c){if(a=ai(c,d),tn(a,a),n){var y=null,h=a.appendChild(Lt());n(a,h),y==null||y.remove()}U.nodes.end=a,p.before(a)}}),()=>{}},Wt),oi(()=>{})}function il(e,t){var r=void 0,n;ma(()=>{r!==(r=t())&&(n&&($e(n),n=null),r&&(n=De(()=>{li(()=>r(e))})))})}function za(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=za(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function al(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=za(e))&&(n&&(n+=" "),n+=t);return n}function Or(e){return typeof e=="object"?al(e):e??""}const Da=[...` 	
\r\f \v\uFEFF`];function sl(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var i of Object.keys(r))if(r[i])n=n?n+" "+i:i;else if(n.length)for(var s=i.length,a=0;(a=n.indexOf(i,a))>=0;){var o=a+s;(a===0||Da.includes(n[a-1]))&&(o===n.length||Da.includes(n[o]))?n=(a===0?"":n.substring(0,a))+n.substring(o+1):a=o}}return n===""?null:n}function Ba(e,t=!1){var r=t?" !important;":";",n="";for(var i of Object.keys(e)){var s=e[i];s!=null&&s!==""&&(n+=" "+i+": "+s+r)}return n}function yi(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function ol(e,t){if(t){var r="",n,i;if(Array.isArray(t)?(n=t[0],i=t[1]):n=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var s=!1,a=0,o=!1,l=[];n&&l.push(...Object.keys(n).map(yi)),i&&l.push(...Object.keys(i).map(yi));var c=0,d=-1;const k=e.length;for(var p=0;p<k;p++){var y=e[p];if(o?y==="/"&&e[p-1]==="*"&&(o=!1):s?s===y&&(s=!1):y==="/"&&e[p+1]==="*"?o=!0:y==='"'||y==="'"?s=y:y==="("?a++:y===")"&&a--,!o&&s===!1&&a===0){if(y===":"&&d===-1)d=p;else if(y===";"||p===k-1){if(d!==-1){var h=yi(e.substring(c,d).trim());if(!l.includes(h)){y!==";"&&p++;var g=e.substring(c,p).trim();r+=" "+g+";"}}c=p+1,d=-1}}}}return n&&(r+=Ba(n)),i&&(r+=Ba(i,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function je(e,t,r,n,i,s){var a=e[Gn];if(a!==r||a===void 0){var o=sl(r,n,s);o==null?e.removeAttribute("class"):t?e.className=o:e.setAttribute("class",o),e[Gn]=r}else if(s&&i!==s)for(var l in s){var c=!!s[l];(i==null||c!==!!i[l])&&e.classList.toggle(l,c)}return s}function wi(e,t={},r,n){for(var i in r){var s=r[i];t[i]!==s&&(r[i]==null?e.style.removeProperty(i):e.style.setProperty(i,s,n))}}function Va(e,t,r,n){var i=e[Yn];if(i!==t){var s=ol(t,n);s==null?e.removeAttribute("style"):e.style.cssText=s,e[Yn]=t}else n&&(Array.isArray(n)?(wi(e,r==null?void 0:r[0],n[0]),wi(e,r==null?void 0:r[1],n[1],"important")):wi(e,r,n));return n}function Fa(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Ha(e,t){var r=!("__defaultValue"in e);!r&&e.__defaultValue===t||(e.__defaultValue=t,Ua(e,!r||"__value"in e))}function Ua(e,t){var r=e.__defaultValue,n=e.multiple,i=n?r??[]:null;if(!(n&&!ne(i))){var s=e.selectedIndex,a=t&&n?new Set(e.selectedOptions):null;for(var o of e.options){var l=bi(o);Fa(o,n?i.includes(l):ca(l,r))}if(t)if(a!==null)for(o of e.options){var c=a.has(o);o.selected!==c&&(o.selected=c)}else e.selectedIndex!==s&&(e.selectedIndex=s)}}function Dt(e,t,r=!1){if(e.multiple){if(t==null)return;if(!ne(t))return Ks();for(var n of e.options)n.selected=t.includes(bi(n));return}for(n of e.options){var i=bi(n);if(ca(i,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function ur(e){var t=new MutationObserver(r=>{r.every(ll)||("__defaultValue"in e&&Ua(e,!1),"__value"in e&&Dt(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),oi(()=>{t.disconnect()})}function bi(e){return"__value"in e?e.__value:e.value}function ll(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(r=>r.nodeName==="SELECTEDCONTENT")}return!1}const an=Symbol("class"),sn=Symbol("style"),Wa=Symbol("is custom element"),ja=Symbol("is html"),cl=xn?"input":"INPUT",ul=xn?"option":"OPTION",Xa=xn?"select":"SELECT",fl=xn?"progress":"PROGRESS";function Tn(e,t){var r=Nn(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==fl)||(e.value=t??"")}function dl(e,t){var r=Nn(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function Ae(e,t,r,n){var i=Nn(e);i[t]!==(i[t]=r)&&(t==="loading"&&(e[Ls]=r),r==null?e.removeAttribute(t):typeof r!="string"&&qa(e).has(t)?e[t]=r:e.setAttribute(t,r))}function vl(e,t,r,n,i=!1,s=!1){var a=Nn(e),o=a[Wa],l=!a[ja],c=t||{},d=e.nodeName===ul,p=e.nodeName===Xa;for(var y in t)!(y in r)&&y[0]+y[1]!=="$$"&&(r[y]=null);r.class?r.class=Or(r.class):r[an]&&(r.class=null),r[sn]&&(r.style??(r.style=null));var h=qa(e);if(e.nodeName===cl&&"type"in r&&("value"in r||"__value"in r)){var g=r.type;(g!==c.type||g===void 0&&e.hasAttribute("type"))&&(c.type=g,Ae(e,"type",g))}for(const x in r){let A=r[x];if(d&&x==="value"&&A==null){e.value=e.__value="",c[x]=A;continue}if(x==="class"){var k=e.namespaceURI==="http://www.w3.org/1999/xhtml";je(e,k,A,n,t==null?void 0:t[an],r[an]),c[x]=A,c[an]=r[an];continue}if(x==="style"){Va(e,A,t==null?void 0:t[sn],r[sn]),c[x]=A,c[sn]=r[sn];continue}var f=c[x];if(!(A===f&&!(A===void 0&&e.hasAttribute(x)))){c[x]=A;var _=x[0]+x[1];if(_!=="$$")if(_==="on"){const N={},D="$$"+x;let I=x.slice(2);var m=zo(I);if(Io(I)&&(I=I.slice(0,-7),N.capture=!0),!m&&f){if(A!=null)continue;e.removeEventListener(I,c[D],N),c[D]=null}if(m)ee(I,e,A),cr([I]);else if(A!=null){let J=function(ae){c[x].call(this,ae)};c[D]=Ho(I,e,J,N)}}else if(x==="style")Ae(e,x,A);else if(x==="autofocus")ho(e,!!A);else if(!o&&(x==="__value"||x==="value"&&A!=null))e.value=e.__value=A;else if(x==="selected"&&d)Fa(e,A);else{var S=x;l||(S=Bo(S));var $=S==="defaultValue"||S==="defaultChecked";if(p&&S==="defaultValue")continue;if(A==null&&!o&&!$)if(a[x]=null,S==="value"||S==="checked"){let N=e;const D=t===void 0;if(S==="value"){let I=N.defaultValue;N.removeAttribute(S),N.defaultValue=I,N.value=N.__value=D?I:null}else{let I=N.defaultChecked;N.removeAttribute(S),N.defaultChecked=I,N.checked=D?I:!1}}else e.removeAttribute(x);else $||(o||typeof A!="string")&&h.has(S)?(e[S]=A,S in a&&(a[S]=ye)):typeof A!="function"&&Ae(e,S,A)}}}return c}function Ga(e,t,r=[],n=[],i=[],s,a=!1,o=!1){Ki(i,r,n,l=>{var c=void 0,d={},p=e.nodeName===Xa,y=!1;if(ma(()=>{var g=t(...l.map(v)),k=vl(e,c,g,s,a,o);if(y&&p){var f=e;"defaultValue"in g&&Ha(f,g.defaultValue),"value"in g&&Dt(f,g.value)}for(let m of Object.getOwnPropertySymbols(d))g[m]||$e(d[m]);for(let m of Object.getOwnPropertySymbols(g)){var _=g[m];m.description===Ys&&(!c||_!==c[m])&&(d[m]&&$e(d[m]),d[m]=De(()=>il(e,()=>_))),k[m]=_}c=k}),p){var h=e;li(()=>{var g=c;"defaultValue"in g&&Ha(h,g.defaultValue),Dt(h,g.value,!0),ur(h)})}y=!0})}function Nn(e){return e[bn]??(e[bn]={[Wa]:e.nodeName.includes("-"),[ja]:e.namespaceURI===Xi})}var Ya=new Map;function qa(e){var t=e.getAttribute("is")||e.nodeName,r=Ya.get(t);if(r)return r;Ya.set(t,r=new Set);for(var n,i=e,s=Element.prototype;s!==i;){n=zi(i);for(var a in n)n[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&r.add(a);i=Hn(i)}return r}function xi(e,t){return e===t||(e==null?void 0:e[xt])===t}function Si(e=qn(),t,r,n){var i=de.r,s=U;return li(()=>{var a,o;return ga(()=>{a=o,o=[],Gt(()=>{xi(r(...o),e)||(t(e,...o),a&&xi(r(...a),e)&&t(null,...a))})}),()=>{let l=s;for(;l!==i&&l.parent!==null&&l.parent.f&mn;)l=l.parent;const c=()=>{o&&xi(r(...o),e)&&t(null,...o)},d=l.teardown;l.teardown=()=>{c(),d==null||d()}}}),e}function pl(e=!1){const t=de,r=t.l.u;if(!r)return;let n=()=>or(t.s);if(e){let i=0,s={};const a=Ar(()=>{let o=!1;const l=t.s;for(const c in l)l[c]!==s[c]&&(s[c]=l[c],o=!0);return o&&i++,i});n=()=>v(a)}r.b.length&&Mo(()=>{Ka(t,n),Un(r.b)}),nr(()=>{const i=Gt(()=>r.m.map(Ps));return()=>{for(const s of i)typeof s=="function"&&s()}}),r.a.length&&nr(()=>{Ka(t,n),Un(r.a)})}function Ka(e,t){if(e.l.s)for(const r of e.l.s)v(r);t()}let On=!1;function hl(e){var t=On;try{return On=!1,[e(),On]}finally{On=t}}const _l={get(e,t){if(!e.exclude.includes(t))return v(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var n=U;try{at(e.parent_effect),e.special[t]=_t({get[t](){return e.props[t]}},t,ji)}finally{at(n)}}return e.special[t](r),sa(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),sa(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ie(e,t){return new Proxy({props:e,exclude:t,special:{},version:Xt(0),parent_effect:U},_l)}const gl={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Fr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let i=e.props[n];Fr(i)&&(i=i());const s=Ut(i,t);if(s&&s.set)return s.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Fr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const i=Ut(n,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===xt||t===Ui)return!1;for(let r of e.props)if(Fr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Fr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function ce(...e){return new Proxy({props:e},gl)}function _t(e,t,r,n){var $;var i=!kr||(r&Hs)!==0,s=(r&Us)!==0,a=(r&Ws)!==0,o=n,l=!0,c=void 0,d=()=>a&&i?(c??(c=Ar(n)),v(c)):(l&&(l=!1,o=a?Gt(n):n),o);let p;if(s){var y=xt in e||Ui in e;p=(($=Ut(e,t))==null?void 0:$.set)??(y&&t in e?x=>e[t]=x:void 0)}var h,g=!1;s?[h,g]=hl(()=>e[t]):h=e[t],h===void 0&&n!==void 0&&(h=d(),p&&(i&&so(),p(h)));var k;if(i?k=()=>{var x=e[t];return x===void 0?d():(l=!0,x)}:k=()=>{var x=e[t];return x!==void 0&&(o=void 0),x===void 0?o:x},i&&(r&ji)===0)return k;if(p){var f=e.$$legacy;return(function(x,A){return arguments.length>0?((!i||!A||f||g)&&p(A?k():x),x):k()})}var _=!1,m=((r&Fs)!==0?Ar:Zn)(()=>(_=!1,k()));s&&v(m);var S=U;return(function(x,A){if(arguments.length>0){const N=A?v(m):i&&s?ze(x):x;return E(m,N),_=!0,o!==void 0&&(o=N),x}return zt&&_||(S.f&Ce)!==0?m.v:v(m)})}function ki(e){de===null&&Js(),kr&&de.l!==null?ml(de).m.push(e):nr(()=>{const t=Gt(e);if(typeof t=="function")return t})}function ml(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const yl="5";typeof window<"u"&&((ls=window.__svelte??(window.__svelte={})).v??(ls.v=new Set)).add(yl);const X=ze({ready:!1,cleanScreen:!1,panelOpen:!0,settingsOpen:!1,startupOpen:!0,focusSection:null,focusNonce:0,popupSection:null,status:{}});function wl(e){X.popupSection=X.popupSection===e?null:e}const Xe=ze({});function Za(e){try{return structuredClone(e)}catch{return JSON.parse(JSON.stringify(e))}}function te(e){var t,r,n;if(e==null)return e;try{return((n=(r=(t=window.XRA)==null?void 0:t.i18n)==null?void 0:r.t)==null?void 0:n.call(r,e))??e}catch{return e}}function Ve(e,t){const r=e.split(".");let n=Xe;for(const i of r){if(n==null)return t;n=n[i]}return n===void 0?t:n}function bl(e){var r,n,i,s,a,o,l,c;const t=window.XRA;if(t){if(e.startsWith("background.")){(n=(r=t.background)==null?void 0:r.apply)==null||n.call(r);return}if(e==="ui.language"){(s=(i=t.i18n)==null?void 0:i.setLanguage)==null||s.call(i,Xe.ui.language);return}if(e==="ui.preview_wireframe"){typeof t.applyMocapWireframeVisibility=="function"&&t.applyMocapWireframeVisibility();return}if(e==="ui.mocap_view"){typeof t.applyMocapWireframeVisibility=="function"&&t.applyMocapWireframeVisibility();return}if(e.startsWith("performance.")){window.XRA_render_fps_limit=Number(Xe.performance.render_fps??60),window.XRA_gpu_preference=String(Xe.performance.gpu_preference||"default"),window.XRA_preserve_drawing_buffer=Xe.performance.preserve_drawing_buffer!==!1,window.XRA_antialias=Xe.performance.antialias!=="off",(o=(a=t.events)==null?void 0:a.emit)==null||o.call(a,"performance",Xe.performance);return}(c=(l=t.events)==null?void 0:l.emit)==null||c.call(l,"config-change",{path:e,value:Ve(e)})}}function ot(e,t){var s,a;const r=window.XRA,n=e.split(".");let i=Xe;for(let o=0;o<n.length-1;o++)i[n[o]]==null&&(i[n[o]]={}),i=i[n[o]];if(i[n[n.length-1]]=t,r!=null&&r.config){let o=r.config;for(let l=0;l<n.length-1;l++)o[n[l]]==null&&(o[n[l]]={}),o=o[n[l]];o[n[n.length-1]]=t}bl(e);try{(a=(s=r==null?void 0:r.profileService)==null?void 0:s.save)==null||a.call(s)}catch{}}function Rn(e,t,r){return new Promise((n,i)=>{const s=setTimeout(()=>i(new Error(`${r} timed out after ${t} ms`)),t);Promise.resolve(e).then(a=>{clearTimeout(s),n(a)},a=>{clearTimeout(s),i(a)})})}async function Qa({timeout:e=12e3,dataTimeout:t=8e3}={}){var n,i,s;const r=(n=window.XRA)==null?void 0:n.nativeBridge;if(!(r!=null&&r.startNativeStreamer))throw new Error("native bridge unavailable");try{await Rn(r.startNativeStreamer(),e,"Camera start");const a=performance.now()+t;for(;performance.now()<a;){if((i=r.cameraDataReady)!=null&&i.call(r))return!0;await new Promise(o=>setTimeout(o,120))}return!0}catch(a){try{await((s=r.forceStopCamera)==null?void 0:s.call(r))}catch{}throw a}}async function xl({timeout:e=8e3}={}){var r,n;const t=(r=window.XRA)==null?void 0:r.nativeBridge;if(t!=null&&t.stopNativeStreamer)try{await Rn(t.stopNativeStreamer(),e,"Camera stop")}catch(i){try{await((n=t.forceStopCamera)==null?void 0:n.call(t))}catch{}throw i}}async function Sl({timeout:e=12e3,readyTimeout:t=6e3}={}){var n,i,s,a;const r=(n=window.XRA)==null?void 0:n.recorder;if(!(r!=null&&r.start))throw new Error("recorder unavailable");try{await Rn(r.start(),e,"Recording start");const o=performance.now()+t;for(;performance.now()<o;){if((s=(i=r.status)==null?void 0:i.call(r))!=null&&s.active)return!0;await new Promise(l=>setTimeout(l,120))}return!0}catch(o){try{await((a=r.stop)==null?void 0:a.call(r))}catch{}throw o}}async function kl({timeout:e=8e3}={}){var r,n;const t=(r=window.XRA)==null?void 0:r.recorder;if(t!=null&&t.stop)try{await Rn(t.stop(),e,"Recording stop")}catch(i){try{await((n=t.stop)==null?void 0:n.call(t))}catch{}throw i}}function Cn(){var e,t,r;X.cleanScreen=!X.cleanScreen,document.body.classList.toggle("xra-total-clean-screen",X.cleanScreen);try{(r=(t=(e=window.XRA)==null?void 0:e.ui)==null?void 0:t.setHidden)==null||r.call(t,X.cleanScreen)}catch{}}function El(){var e;try{Object.assign(Xe,Za(((e=window.XRA)==null?void 0:e.config)||{}))}catch{}}function Ja(){var e;try{const t=(e=window.SA_bridge)==null?void 0:e.backend;t&&typeof t.status=="function"&&(X.status=t.status()||{})}catch{}}function $l(){const e=()=>window.XRA&&window.XRA.config?(Object.assign(Xe,Za(window.XRA.config)),X.ready=!0,Ja(),window.addEventListener("keydown",t=>{t.key==="Escape"&&X.cleanScreen&&(t.preventDefault(),Cn())},!0),!0):!1;if(!e()){const t=setInterval(()=>{e()&&clearInterval(t)},200)}}const Al={camera:{title:"Camera",icon:"Camera"},devices:{title:"Devices",icon:"SlidersHorizontal"},pose_model:{title:"Pose model",icon:"PersonStanding"},performance:{title:"Performance",icon:"Zap"},tracking:{title:"Motion capture",icon:"Activity"},body:{title:"Body",icon:"PersonStanding"},collider:{title:"Body collider",icon:"Shield"},lip:{title:"Audio & Lip-sync",icon:"Mic"},background:{title:"Background",icon:"Image"},avatar:{title:"Character position (avatar only)",icon:"User"},second_avatar:{title:"Remote avatar (Studio Link)",icon:"Globe"},stage:{title:"3D Stage & Environment",icon:"Landmark"},recorder:{title:"Recording / capture",icon:"Video"},visual_effects:{title:"Visual effects",icon:"Sparkles"},debug:{title:"Diagnostics",icon:"Bug"},ui:{title:"UI & overlays",icon:"Monitor"}},es=["performance","tracking","body","collider","lip","background","stage","avatar","second_avatar","recorder","visual_effects","debug","ui","camera","devices","pose_model"],Ml=new Set(["left_settings","_custom_","_excluded_"]),Tl=new Set(["camera.view_presets","camera.selected_view_preset","ui.preview_video","ui.preview_wireframe","ui.preview_debug","performance.auto_last_result","recorder.output_dir"]);function ts(e){const t=String(e).replace(/_/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").trim();return t.charAt(0).toUpperCase()+t.slice(1)}const Nl={"ui.language":{type:"select",options:()=>{var e,t;return((t=(e=window.XRA)==null?void 0:e.i18n)==null?void 0:t.LANGUAGES)||[["en","English"]]}},"background.mode":{type:"select",options:[["color","Color"],["image","Image"],["none","None (transparent · OBS)"]]},"background.color":{type:"color"},"background.path":{type:"text"},"ui.mocap_view":{type:"select",label:"Mocap window",options:[["off","Off"],["both","Webcam + skeleton"],["wireframe","Skeleton only"],["video","Webcam only"]]},"ui.mocap_visibility":{type:"select",label:"Mocap window visibility",options:[["always","Always on (black while idle)"],["auto","Auto (hide when tracking is off)"]]},"performance.tracking_pipeline":{type:"select",label:"Tracking mode",options:[["FULL_BODY","Full Body"],["FACE","Face only"],["UPPER_BODY","Upper body"]]},"performance.render_resolution":{type:"select",options:[["720p","720p (HD · GPU Saving)"],["1080p","1080p (Full HD · Recommended)"],["1440p","1440p (2K · High resolution)"]]},"performance.render_fps":{type:"slider",min:15,max:240,step:1},"performance.gpu_preference":{type:"select",label:"Graphics card (GPU)",options:[["default","Default"],["high-performance","Dedicated GPU (High Performance)"],["low-power","Integrated GPU (Low Power)"]]},"performance.shadows":{type:"select",options:[["auto","Auto"],["on","Enabled"],["off","Disabled (GPU saving)"]]},"performance.antialias":{type:"select",label:"Anti-Aliasing (AA)",options:[["auto","Enabled (Hardware MSAA · Recommended)"],["off","Disabled"]]},"performance.spring_bone":{type:"select",label:"Hair/cloth physics (Spring Bone)",options:[["full","Full (every frame)"],["half","Half (1 frame out of 2 · Saving)"],["off","Off"]]},"performance.infer_mode":{type:"select",options:[["native","Native (Auto)"],["640x360","640×360 (Recommended · 30 FPS smooth)"],["640x480","640×480 (Standard 4:3 format)"],["1280x720","1280×720 (HD 720p · High precision)"]]},"performance.pose_fps":{type:"slider",min:5,max:30,step:1},"performance.hand_fps":{type:"slider",min:5,max:30,step:1},"performance.min_tracking_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_pose_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_face_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_joint_confidence":{type:"slider",min:.05,max:1,step:.05},"tracking.hand_recovery_mode":{type:"select",options:[["normal","Normal"],["aggressive","Aggressive"],["off","Off"]]},"tracking.hand_detection_sensitivity":{type:"select",options:[["high","High"],["normal","Normal"],["low","Low"]]},"tracking.stabilize_hand_percent":{type:"slider",min:0,max:100,step:1},"tracking.stabilize_arm":{type:"slider",min:0,max:100,step:1},"tracking.stabilize_arm_time":{type:"slider",min:0,max:2,step:.05},"tracking.native_smoothing":{type:"slider",min:0,max:1,step:.01},"tracking.body_bend_reduction":{type:"slider",min:0,max:1,step:.01},"tracking.upper_body_guard_strength":{type:"slider",min:0,max:1,step:.01},"tracking.guard_jump_deg":{type:"slider",min:5,max:120,step:1},"tracking.guard_hold_ms":{type:"slider",min:0,max:2e3,step:10},"tracking.guard_reacquire_deg":{type:"slider",min:5,max:120,step:1},"tracking.adaptive_smoothing_strength":{type:"slider",min:0,max:1,step:.01},"tracking.guard_confidence_min":{type:"slider",min:0,max:1,step:.01},"tracking.guard_release_ms":{type:"slider",min:0,max:2e3,step:10},"tracking.guard_mode":{type:"select",options:[["off","Off"],["auto","Auto"]]},"tracking.desk_torso_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_hips_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_legs_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_max_yaw_deg":{type:"slider",min:0,max:90,step:1},"tracking.desk_max_pitch_deg":{type:"slider",min:0,max:90,step:1},"tracking.desk_max_roll_deg":{type:"slider",min:0,max:90,step:1},"body.anchor_strength":{type:"slider",min:0,max:1,step:.01},"body.transition_ms":{type:"slider",min:0,max:2e3,step:10},"avatar.offset_x":{type:"slider",min:-5,max:5,step:.01},"avatar.offset_y":{type:"slider",min:-5,max:5,step:.01},"avatar.offset_z":{type:"slider",min:-5,max:5,step:.01},"avatar.rotation_y":{type:"slider",min:-180,max:180,step:1},"second_avatar.offset_x":{type:"slider",min:-20,max:20,step:.1},"second_avatar.offset_y":{type:"slider",min:-10,max:10,step:.1},"second_avatar.offset_z":{type:"slider",min:-10,max:10,step:.1},"second_avatar.rotation_y":{type:"slider",min:-180,max:180,step:1},"stage.scale":{type:"slider",min:.1,max:5,step:.01},"stage.rotation_x":{type:"slider",min:-180,max:180,step:1},"stage.rotation_y":{type:"slider",min:-180,max:180,step:1},"stage.rotation_z":{type:"slider",min:-180,max:180,step:1},"stage.offset_x":{type:"slider",min:-10,max:10,step:.05},"stage.offset_y":{type:"slider",min:-10,max:10,step:.05},"stage.offset_z":{type:"slider",min:-10,max:10,step:.05},"stage.scene_zoom":{type:"slider",min:.5,max:3,step:.01},"stage.lights_intensity":{type:"slider",min:0,max:3,step:.05},"collider.preset":{type:"select",options:[["CUSTOM","Custom"],["NONE","None"]]},"collider.reaction":{type:"select",options:[["z_push","Z push"],["bounce","Bounce"],["block","Block"]]},"collider.head":{type:"slider",min:0,max:200,step:1},"collider.chest":{type:"slider",min:0,max:200,step:1},"collider.waist":{type:"slider",min:0,max:200,step:1},"collider.hip":{type:"slider",min:0,max:200,step:1},"collider.front_clearance":{type:"slider",min:0,max:50,step:1},"lip.analysis_fps":{type:"slider",min:5,max:60,step:1},"lip.fft_size":{type:"select",label:"FFT size",options:[["256","256"],["512","512"],["1024","1024"],["2048","2048"]]},"lip.mic_mix":{type:"slider",min:0,max:1,step:.01},"lip.threshold":{type:"slider",min:0,max:.2,step:.001},"lip.response_gain":{type:"slider",min:0,max:3,step:.05},"lip.vowel_emphasis":{type:"slider",min:0,max:3,step:.05},"recorder.mode":{type:"select",label:"Recording source",options:[["video_audio","Video + Audio"],["video","Video only"],["audio","Audio only"]]},"recorder.audio_only_variant":{type:"select",label:"Audio only mode",options:[["both","Processed + RAW"],["processed","Processed"],["raw","RAW"]]},"recorder.capture_source":{type:"select",label:"Output source",options:[["classic_v74","Classic output · recommended"],["clean_scene","Clean scene output · experimental (no UI)"],["native_xr","XR native video only · fallback"]]},"recorder.output_format":{type:"select",options:[["webm","WebM"],["mp4","MP4"]]},"recorder.audio_profile":{type:"select",options:[["podcast","Podcast"],["call","Call (Browser echo/noise filters)"]]},"recorder.hardware_encode":{type:"select",options:[["auto","Auto"],["on","On"],["off","Off (CPU)"]]},"recorder.width":{type:"slider",min:320,max:3840,step:2},"recorder.height":{type:"slider",min:240,max:2160,step:2},"recorder.fps":{type:"slider",min:15,max:60,step:1},"recorder.gate_threshold_db":{type:"slider",min:-80,max:-5,step:.5},"recorder.gate_hold_ms":{type:"slider",min:0,max:1e3,step:10},"recorder.gate_release_ms":{type:"slider",min:0,max:1e3,step:10},"recorder.video_bps":{type:"slider",min:5e5,max:2e7,step:1e5},"recorder.audio_bps":{type:"slider",min:32e3,max:32e4,step:8e3},"recorder.segment_minutes":{type:"select",options:[["0","Off"],["30","Every 30 min"],["60","Every 60 min"]]},"recorder.raw_audio_format":{type:"select",options:[["flac","FLAC (lossless)"],["wav","WAV (large)"]]},"recorder.filename":{type:"text"},"camera.optimized":{type:"toggle"},"camera.width":{type:"slider",min:160,max:1920,step:2},"camera.height":{type:"slider",min:120,max:1080,step:2},"camera.fps":{type:"slider",min:5,max:60,step:1}};function Ol(e){const t=[];for(const[r,n]of Object.entries(e||{})){if(Ml.has(r)||!n||typeof n!="object"||Array.isArray(n))continue;const i=Al[r]||{},s=[];for(const[a,o]of Object.entries(n)){const l=`${r}.${a}`;if(Tl.has(l))continue;const c=Nl[l]||{};if(c.hidden||o!==null&&typeof o=="object")continue;const d=c.type||(typeof o=="boolean"?"toggle":typeof o=="number"?"number":"text");s.push({type:d,path:l,label:c.label||ts(a),min:c.min,max:c.max,step:c.step,options:c.options})}s.length&&t.push({id:r,title:i.title||ts(r),icon:i.icon||"⚙",controls:s})}return t.sort((r,n)=>{const i=es.indexOf(r.id),s=es.indexOf(n.id);return(i<0?999:i)-(s<0?999:s)}),t}var Rl=_e("<option> </option>"),Cl=_e("<select></select>"),Pl=_e("<select><option> </option><option> </option></select>"),Il=_e('<input type="range"/> <span class="xra-val"> </span>',1),Ll=_e('<input type="checkbox"/>'),zl=_e('<input type="color"/>'),Dl=_e('<input type="number"/>'),Bl=_e('<input type="text"/>'),Vl=_e('<label class="xra-row"><span class="xra-row-label"> </span> <!></label>');function Fl(e,t){St(t,!0);const r=nt(()=>typeof t.control.options=="function"?t.control.options():t.control.options||[]),n=f=>f===!1?"off":"auto",i=f=>f==="off"?!1:null;var s=Vl(),a=P(s),o=q(a,!0),l=C(a,2);{var c=f=>{var _=Cl();Yt(_,21,()=>v(r),Ia,(S,$)=>{var x=Rl(),A=q(x,!0),N={};he(D=>{Z(A,D),N!==(N=v($)[0])&&(x.value=(x.__value=N)??"")},[()=>te(v($)[1])]),M(S,x)});var m;ur(_),he(S=>{m!==(m=S)&&(_.value=(_.__value=m)??"",Dt(_,m))},[()=>Ve(t.control.path)]),ee("change",_,S=>ot(t.control.path,S.currentTarget.value)),M(f,_)},d=f=>{var _=Pl(),m=P(_),S=q(m,!0);m.value=m.__value="auto";var $=C(m),x=q($,!0);$.value=$.__value="off";var A;ur(_),he((N,D,I)=>{Z(S,N),Z(x,D),A!==(A=I)&&(_.value=(_.__value=A)??"",Dt(_,A))},[()=>te("Auto (follow tracking)"),()=>te("Off"),()=>n(Ve(t.control.path))]),ee("change",_,N=>ot(t.control.path,i(N.currentTarget.value))),M(f,_)},p=f=>{var _=Il(),m=G(_),S=C(m,2),$=q(S,!0);he((x,A)=>{Ae(m,"min",t.control.min),Ae(m,"max",t.control.max),Ae(m,"step",t.control.step),Tn(m,x),Z($,A)},[()=>Ve(t.control.path,t.control.min),()=>Ve(t.control.path)]),ee("input",m,x=>ot(t.control.path,Number(x.currentTarget.value))),M(f,_)},y=f=>{var _=Ll();he(m=>dl(_,m),[()=>!!Ve(t.control.path)]),ee("change",_,m=>ot(t.control.path,m.currentTarget.checked)),M(f,_)},h=f=>{var _=zl();he(m=>Tn(_,m),[()=>Ve(t.control.path)]),ee("input",_,m=>ot(t.control.path,m.currentTarget.value)),M(f,_)},g=f=>{var _=Dl();he(m=>{Ae(_,"step",t.control.step||"any"),Tn(_,m)},[()=>Ve(t.control.path,0)]),ee("input",_,m=>ot(t.control.path,Number(m.currentTarget.value))),M(f,_)},k=f=>{var _=Bl();he(m=>Tn(_,m),[()=>Ve(t.control.path,"")]),ee("change",_,m=>ot(t.control.path,m.currentTarget.value)),M(f,_)};We(l,f=>{t.control.type==="select"?f(c):t.control.type==="tristate"?f(d,1):t.control.type==="slider"?f(p,2):t.control.type==="toggle"?f(y,3):t.control.type==="color"?f(h,4):t.control.type==="number"?f(g,5):t.control.type==="text"&&f(k,6)})}he(f=>Z(o,f),[()=>te(t.control.label)]),M(e,s),kt()}cr(["change","input"]);function rs(e,t){St(t,!0);var r=K(),n=G(r);Yt(n,17,()=>t.section.controls,i=>i.path,(i,s)=>{var a=K(),o=G(a);{var l=d=>{Fl(d,{get control(){return v(s)}})},c=nt(()=>!v(s).when||v(s).when(Xe));We(o,d=>{v(c)&&d(l)})}M(i,a)}),M(e,r),kt()}fo();/**
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
 */const Hl={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
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
 */const Ul=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
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
 */const ns=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();var Wl=jo("<svg><!><!></svg>");function ue(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]),n=ie(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);St(t,!1);let i=_t(t,"name",8,void 0),s=_t(t,"color",8,"currentColor"),a=_t(t,"size",8,24),o=_t(t,"strokeWidth",8,2),l=_t(t,"absoluteStrokeWidth",8,!1),c=_t(t,"iconNode",24,()=>[]);pl();var d=Wl();Ga(d,(h,g,k)=>({...Hl,...h,...n,width:a(),height:a(),stroke:s(),"stroke-width":g,class:k}),[()=>Ul(n)?void 0:{"aria-hidden":"true"},()=>(or(l()),or(o()),or(a()),Gt(()=>l()?Number(o())*24/Number(a()):o())),()=>(or(ns),or(i()),or(r),Gt(()=>ns("lucide-icon","lucide",i()?`lucide-${i()}`:"",r.class)))]);var p=P(d);Yt(p,1,c,Ia,(h,g)=>{var k=nt(()=>Vi(v(g),2));let f=()=>v(k)[0],_=()=>v(k)[1];var m=K(),S=G(m);nl(S,f,!0,($,x)=>{Ga($,()=>({..._()}))}),M(h,m)});var y=C(p);se(y,t,"default",{}),M(e,d),kt()}function jl(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];ue(e,ce({name:"camera"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=K(),o=G(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function Xl(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 5H3"}],["path",{d:"M12 19H3"}],["path",{d:"M14 3v4"}],["path",{d:"M16 17v4"}],["path",{d:"M21 12h-9"}],["path",{d:"M21 19h-5"}],["path",{d:"M21 5h-7"}],["path",{d:"M8 10v4"}],["path",{d:"M8 12H3"}]];ue(e,ce({name:"sliders-horizontal"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=K(),o=G(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function Gl(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"5",r:"1"}],["path",{d:"m9 20 3-6 3 6"}],["path",{d:"m6 8 6 2 6-2"}],["path",{d:"M12 10v4"}]];ue(e,ce({name:"person-standing"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=K(),o=G(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function Yl(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];ue(e,ce({name:"zap"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=K(),o=G(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function ql(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]];ue(e,ce({name:"activity"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=K(),o=G(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function Kl(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];ue(e,ce({name:"shield"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=K(),o=G(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function Zl(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 19v3"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3"}]];ue(e,ce({name:"mic"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=K(),o=G(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function Ql(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]];ue(e,ce({name:"image"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=K(),o=G(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function Jl(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 18v-7"}],["path",{d:"M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"}],["path",{d:"M14 18v-7"}],["path",{d:"M18 18v-7"}],["path",{d:"M3 22h18"}],["path",{d:"M6 18v-7"}]];ue(e,ce({name:"landmark"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=K(),o=G(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function ec(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];ue(e,ce({name:"user"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=K(),o=G(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function tc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];ue(e,ce({name:"globe"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=K(),o=G(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function rc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]];ue(e,ce({name:"video"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=K(),o=G(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function nc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];ue(e,ce({name:"sparkles"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=K(),o=G(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function ic(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 20v-9"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97"}],["path",{d:"M22 13h-4"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97"}],["path",{d:"M6 13H2"}],["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13"}]];ue(e,ce({name:"bug"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=K(),o=G(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function ac(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]];ue(e,ce({name:"monitor"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=K(),o=G(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function sc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"10",r:"8"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 22h10"}],["path",{d:"M12 22v-4"}]];ue(e,ce({name:"webcam"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=K(),o=G(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function is(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}]];ue(e,ce({name:"circle"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=K(),o=G(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function oc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];ue(e,ce({name:"square"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=K(),o=G(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function lc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]];ue(e,ce({name:"eye"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=K(),o=G(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function cc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}],["path",{d:"m2 2 20 20"}]];ue(e,ce({name:"eye-off"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=K(),o=G(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function uc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];ue(e,ce({name:"folder-open"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=K(),o=G(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function fc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];ue(e,ce({name:"info"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=K(),o=G(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function dc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ue(e,ce({name:"x"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=K(),o=G(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function vc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];ue(e,ce({name:"settings"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=K(),o=G(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function pc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ue(e,ce({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=K(),o=G(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function Ge(e,t){const r={Camera:jl,SlidersHorizontal:Xl,PersonStanding:Gl,Zap:Yl,Activity:ql,Shield:Kl,Mic:Zl,Image:Ql,Landmark:Jl,User:ec,Globe:tc,Video:rc,Sparkles:nc,Bug:ic,Monitor:ac,Webcam:sc,Circle:is,Square:oc,Eye:lc,EyeOff:cc,FolderOpen:uc,Info:fc,X:dc,Settings:vc,RefreshCw:pc};let n=_t(t,"name",3,"Circle"),i=_t(t,"size",3,16),s=_t(t,"strokeWidth",3,2),a=_t(t,"class",3,"");const o=nt(()=>r[n()]??is);var l=K(),c=G(l);rl(c,()=>v(o),(d,p)=>{p(d,{get size(){return i()},get"stroke-width"(){return s()},get class(){return a()}})}),M(e,l)}var hc=_e('<div class="xra-sec-body"><!></div>'),_c=_e('<details class="xra-sec"><summary><span class="xra-sec-title"><!> <span> </span></span> <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></summary> <!></details>');function gc(e,t){St(t,!0);const r="ui.sections_open";let n=F(ze(Gt(()=>{var f;return((f=Ve(r,{}))==null?void 0:f[t.section.id])??!1}))),i;function s(){E(n,!v(n)),ot(`${r}.${t.section.id}`,v(n))}nr(()=>{X.focusNonce,!(X.focusSection!==t.section.id||!X.panelOpen)&&(E(n,!0),ot(`${r}.${t.section.id}`,!0),requestAnimationFrame(()=>i==null?void 0:i.scrollIntoView({block:"nearest",behavior:"smooth"})))});var a=_c(),o=P(a),l=P(o),c=P(l);Ge(c,{get name(){return t.section.icon},size:15,class:"xra-sec-icon"});var d=C(c,2),p=q(d,!0),y=C(l,2);let h;var g=C(o,2);{var k=f=>{var _=hc(),m=P(_);rs(m,{get section(){return t.section}}),M(f,_)};We(g,f=>{v(n)&&f(k)})}Si(a,f=>i=f,()=>i),he(f=>{a.open=v(n),Z(p,f),h=je(y,0,"xra-sec-chevron",null,h,{open:v(n)})},[()=>te(t.section.title)]),ee("click",o,f=>{f.preventDefault(),s()}),M(e,a),kt()}cr(["click"]);var on=_e('<option class="svelte-x8svx4"> </option>'),mc=_e('<div class="warn svelte-x8svx4"> </div>'),yc=_e('<div class="xra-startup svelte-x8svx4"><div class="card svelte-x8svx4"><div class="head svelte-x8svx4"><div class="svelte-x8svx4"><h2 class="svelte-x8svx4">XR Animator</h2> <div class="sub svelte-x8svx4"> </div></div></div> <div class="grid svelte-x8svx4"><label class="field svelte-x8svx4"><div class="sub svelte-x8svx4">Language</div> <select class="svelte-x8svx4"></select></label> <label class="field svelte-x8svx4"><div class="sub svelte-x8svx4">Master preset</div> <select class="svelte-x8svx4"></select></label></div> <div class="status svelte-x8svx4"> </div> <section class="camera svelte-x8svx4"><div class="camera-head svelte-x8svx4"><div class="camera-title svelte-x8svx4"> </div> <div> </div></div> <div class="camera-row svelte-x8svx4"><select class="svelte-x8svx4"><!></select> <button type="button" class="action svelte-x8svx4"><!></button></div> <!></section> <div class="sub bg svelte-x8svx4"> </div> <div class="avatar svelte-x8svx4"><div class="sub svelte-x8svx4"> </div> <button type="button" class="action svelte-x8svx4"> </button></div> <div class="foot svelte-x8svx4"><button type="button" class="action primary confirm svelte-x8svx4"> </button></div></div></div>');function wc(e,t){St(t,!0);const r=()=>window.XRA,n=w=>te(w),i=["AUTO","ECO","LOW","BALANCED","QUALITY","HIGH","MAX","CUSTOM"];function s(){var w,b,T;try{(T=(b=(w=r())==null?void 0:w.profileService)==null?void 0:b.save)==null||T.call(b,0)}catch{}}const a=(()=>{var b,T;const w=(T=(b=r())==null?void 0:b.i18n)==null?void 0:T.LANGUAGES;return Array.isArray(w)&&w.length?w:[["auto","Auto / System"],["en","English"],["it","Italiano"]]})();let o=F("auto"),l=F("CUSTOM"),c=F(""),d=F("default"),p=F(ze([])),y=F(!1),h=F(""),g=F(!1),k=F(""),f=F(""),_=F("Loading avatar…"),m=F(!0),S=F(!1),$=F(!1),x=F(!1),A=F(!1),N=0,D=[];async function I(w){const b=r();if(w=String(w||"CUSTOM").toUpperCase(),w==="CUSTOM"){b.config.performance.master_preset="CUSTOM",s(),E(c,"CUSTOM · ready");return}if(w==="AUTO"){E(c,"Benchmarking…");const T=await b.performance.benchmarkHardwareOnly();E(c,`AUTO → ${T.preset} (${T.fps.toFixed(1)} fps)`),await b.performance.applyPresetSafe(T.preset),b.config.performance.master_preset="AUTO",b.config.performance.auto_last_result=T,s();return}E(c,`${w}: applying…`),await b.performance.applyPresetSafe(w),E(c,`${w} · applied`)}function J(w=""){var V,W,re;const b=(V=r())==null?void 0:V.nativeBridge,T=((W=b==null?void 0:b.activeCamera)==null?void 0:W.call(b))||{},O=!!((re=b==null?void 0:b.cameraRunning)!=null&&re.call(b));E(g,O),E(k,w||(O?`${n("ON")} · ${T.label||n("Default camera")}`:n("OFF")),!0)}async function ae(w=!1){var T,O,V;const b=(T=r())==null?void 0:T.nativeBridge;if(b!=null&&b.enumerateCameras){E(x,!0);try{const W=await b.enumerateCameras({requestPermission:w}),re=b.activeCamera()||{};E(p,(W||[]).map(Me=>({deviceId:Me.deviceId,label:Me.label})),!0);const ge=re.deviceId||((O=Xe.devices)==null?void 0:O.camera_device_id)||"";E(h,v(p).some(Me=>Me.deviceId===ge)?ge:((V=v(p)[0])==null?void 0:V.deviceId)||"",!0),E(y,!0),J()}catch{E(y,!0),J(n("Camera unavailable"))}finally{E(x,!1)}}}async function Ne(w){var V,W;const b=(V=r())==null?void 0:V.nativeBridge,T=((W=w==null?void 0:w.currentTarget)==null?void 0:W.value)??v(h),O=v(p).find(re=>re.deviceId===T);if(O){E(x,!0);try{const re={deviceId:O.deviceId,label:O.label};b.cameraRunning()?await b.switchCamera(re):await b.setCameraPreference(re),J()}catch(re){J("Error · "+re.message)}finally{E(x,!1)}}}function Fe(){var T,O,V,W,re,ge,Me,He;const w=(V=(O=(T=r())==null?void 0:T.xraBackend)==null?void 0:O.snapshot)==null?void 0:V.call(O),b=(w==null?void 0:w.capture)||((He=(Me=(ge=(re=(W=window.SA_bridge)==null?void 0:W.backend)==null?void 0:re.status)==null?void 0:ge.call(re))==null?void 0:Me.backend)==null?void 0:He.capture);if(b!=null&&b.camera_busy){const Ct=(b.busy_processes&&b.busy_processes.length?b.busy_processes:b.busy_process?[b.busy_process]:[]).filter(yr=>!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(String(yr).trim()));if(Ct.length)return{busy:!0,proc:Ct.join(", ")}}if(b!=null&&b.last_error&&b.last_error.includes("Webcam occupata")){const we=b.last_error.match(/Webcam occupata da:\s*([^.]+)/i),Ct=we?we[1].trim():"";if(!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(Ct))return{busy:!0,proc:b.last_error}}return{busy:!1,proc:""}}function Le(){var w,b,T,O,V,W,re,ge,Me;if(typeof((b=(w=r())==null?void 0:w.nativeBridge)==null?void 0:b.isAvatarReady)=="function")return r().nativeBridge.isAvatarReady();if((T=window.MMD_SA)!=null&&T.MMD_started){const He=(W=(V=(O=window.MMD_SA)==null?void 0:O.THREEX)==null?void 0:V.get_model)==null?void 0:W.call(V,0);let we=He;if((He==null?void 0:He.type)==="MMD_dummy")try{we=He.model||null}catch{we=null}const Ct=((re=we==null?void 0:we.model)==null?void 0:re.scene)||(we==null?void 0:we.mesh)||(we==null?void 0:we.scene)||null;if(we&&!(He!=null&&He.loading)&&!we.loading&&!((Me=(ge=window.MMD_SA)==null?void 0:ge.THREEX)!=null&&Me._loading_model)&&Ct)return Ct.visible!==!1}return!1}function yt(){var b,T,O;const w=(b=r())==null?void 0:b.xraBackend;return!w||!w.active?!0:!!((O=(T=w.snapshot)==null?void 0:T.call(w))!=null&&O.ready)}function Qe(){if(v(A)||!X.startupOpen)return;const w=Fe();E(f,w.busy?`Webcam in use by another application (${w.proc}). Close it to start tracking.`:"",!0),Le()?yt()?w.busy?(E(m,!0),E(_,n("Camera busy…"),!0)):v(S)?E(m,!0):(E(m,!1),E(_,"START")):(E(m,!0),E(_,n("Connecting to backend…"),!0)):(E(m,!0),E(_,n("Loading avatar…"),!0))}async function ut(w){var T,O,V;const b=((T=w==null?void 0:w.currentTarget)==null?void 0:T.value)??v(l);E(l,b,!0),E($,!0);try{await I(b),r().events.emit("state",{path:"performance.master_preset",value:r().config.performance.master_preset}),El()}catch(W){console.error("[XRA START]",W),E(c,"Preset error: "+W.message)}finally{E($,!1),(V=(O=r().ui)==null?void 0:O.refresh)==null||V.call(O)}}function wt(w){var b,T,O,V;E(o,((b=w==null?void 0:w.currentTarget)==null?void 0:b.value)??v(o),!0),(V=(O=(T=r())==null?void 0:T.i18n)==null?void 0:O.setLanguage)==null||V.call(O,v(o))}async function ke(){var w,b;try{await((b=(w=r().nativeBridge)==null?void 0:w.openVrmPicker)==null?void 0:b.call(w))}catch(T){r().toast("VRM loader: "+T.message,"error",4500)}}async function Rt(w=!1){var T,O,V,W,re,ge;if(v(A)||v(m))return;E(A,!0),N&&(clearInterval(N),N=0),E(S,!0),E(_,"Starting…");const b=r();if(s(),X.startupOpen=!1,(O=(T=b.ui)==null?void 0:T.refresh)==null||O.call(T),w)try{typeof b.whenNativeReady=="function"&&await b.whenNativeReady(15e3),(V=b.xraBackend)!=null&&V.waitUntilReady&&await b.xraBackend.waitUntilReady(6e3).catch(()=>{}),await Qa()}catch(Me){(re=(W=globalThis.XRA_CAMERA_OWNERSHIP)==null?void 0:W.isOwnershipError)!=null&&re.call(W,Me)||(console.warn("[XRA START]","Auto-starting camera on START failed",Me),(ge=b.toast)==null||ge.call(b,"Starting camera: "+Me.message,"warn",5e3))}}ki(()=>{var b,T,O,V,W,re,ge,Me,He,we,Ct,yr,ys,ws,bs,xs,Ss,Bn,ks,Es,$s,As;const w=r();E(c,n("Ready."),!0),E(o,((T=(b=w==null?void 0:w.config)==null?void 0:b.ui)==null?void 0:T.language)||"auto",!0),E(l,((V=(O=w==null?void 0:w.config)==null?void 0:O.performance)==null?void 0:V.master_preset)==="MINIMAL"?"ECO":((re=(W=w==null?void 0:w.config)==null?void 0:W.performance)==null?void 0:re.master_preset)||"CUSTOM",!0),E(d,((Me=(ge=w==null?void 0:w.config)==null?void 0:ge.background)==null?void 0:Me.path)||((we=(He=w==null?void 0:w.config)==null?void 0:He.background)==null?void 0:we.color)||"default",!0);try{const Pt=(ys=(yr=(Ct=window.SA_bridge)==null?void 0:Ct.backend)==null?void 0:yr.status)==null?void 0:ys.call(yr),Vn=(bs=(ws=window.System)==null?void 0:ws._browser)==null?void 0:bs.camera;(Ss=(xs=Pt==null?void 0:Pt.backend)==null?void 0:xs.capture)!=null&&Ss.running&&!(Vn!=null&&Vn.running)&&((ks=(Bn=window.SA_bridge.backend)==null?void 0:Bn.stop)==null||ks.call(Bn).catch(()=>{}))}catch{}J(),setTimeout(()=>ae(!1),100),N=setInterval(Qe,300),window.addEventListener("MMDStarted",Qe),(Es=w.xraBackend)!=null&&Es.onStatus&&w.xraBackend.onStatus(Qe),Qe(),(As=($s=w.whenNativeReady)==null?void 0:$s.call(w))==null||As.then(()=>{X.startupOpen&&ae(!1)});for(const Pt of["camera-started","camera-stopped","camera-switched"])D.push(w.events.on(Pt,()=>{X.startupOpen&&ae(!1)}));for(const Pt of["avatar-loading","avatar-changed","avatar-ready"])D.push(w.events.on(Pt,()=>Qe()));return()=>{N&&clearInterval(N),window.removeEventListener("MMDStarted",Qe);for(const Pt of D)try{Pt()}catch{}D=[]}});var _r=yc(),Br=P(_r),gr=P(Br),R=P(gr),Y=C(P(R),2),le=q(Y,!0),ve=C(gr,2),Oe=P(ve),Se=C(P(Oe),2);Yt(Se,21,()=>a,([w,b])=>w,(w,b)=>{var T=nt(()=>Vi(v(b),2));let O=()=>v(T)[0],V=()=>v(T)[1];var W=on(),re=q(W,!0),ge={};he(()=>{Z(re,V()),ge!==(ge=O())&&(W.value=(W.__value=ge)??"")}),M(w,W)});var Je;ur(Se);var mr=C(Oe,2),Ht=C(P(mr),2);Yt(Ht,20,()=>i,w=>w,(w,b)=>{var T=on(),O=q(T,!0),V={};he(()=>{Z(O,b),V!==(V=b)&&(T.value=(T.__value=V)??"")}),M(w,T)});var zn;ur(Ht);var cs=C(ve,2),Cc=q(cs,!0),us=C(cs,2),fs=P(us),ds=P(fs),Pc=q(ds,!0),vs=C(ds,2);let ps;var Ic=q(vs,!0),hs=C(fs,2),Qt=P(hs),Lc=P(Qt);{var zc=w=>{var b=on(),T=q(b,!0);b.value=b.__value="",he(O=>Z(T,O),[()=>n("Loading cameras…")]),M(w,b)},Dc=w=>{var b=on(),T=q(b,!0);b.value=b.__value="",he(O=>Z(T,O),[()=>n("No cameras found")]),M(w,b)},Bc=w=>{var b=K(),T=G(b);Yt(T,17,()=>v(p),O=>O.deviceId,(O,V)=>{var W=on(),re=q(W,!0),ge={};he(()=>{Z(re,v(V).label),ge!==(ge=v(V).deviceId)&&(W.value=(W.__value=ge)??"")}),M(O,W)}),M(w,b)};We(Lc,w=>{v(y)?v(p).length?w(Bc,-1):w(Dc,1):w(zc)})}var Dn;ur(Qt);var vn=C(Qt,2),Vc=P(vn);Ge(Vc,{name:"RefreshCw",size:14});var Fc=C(hs,2);{var Hc=w=>{var b=mc(),T=q(b,!0);he(()=>Z(T,v(f))),M(w,b)};We(Fc,w=>{v(f)&&w(Hc)})}var _s=C(us,2),Uc=q(_s),gs=C(_s,2),ms=P(gs),Wc=q(ms,!0),$i=C(ms,2),jc=q($i,!0),Xc=C(gs,2),Ai=P(Xc),Gc=q(Ai,!0);he((w,b,T,O,V,W)=>{Z(le,w),Se.disabled=v(A),Je!==(Je=v(o))&&(Se.value=(Se.__value=Je)??"",Dt(Se,Je)),Ht.disabled=v($)||v(A),zn!==(zn=v(l))&&(Ht.value=(Ht.__value=zn)??"",Dt(Ht,zn)),Z(Cc,v(c)),Z(Pc,b),ps=je(vs,1,"camera-state svelte-x8svx4",null,ps,{on:v(g)}),Z(Ic,v(k)),Qt.disabled=v(x),Dn!==(Dn=v(h))&&(Qt.value=(Qt.__value=Dn)??"",Dt(Qt,Dn)),Ae(vn,"title",T),Ae(vn,"aria-label",O),vn.disabled=v(x),Z(Uc,`Background: ${v(d)??""}`),Z(Wc,V),$i.disabled=v(A),Z(jc,W),Ai.disabled=v(m)||v(S),Z(Gc,v(_))},[()=>n("Quick setup · changes apply immediately."),()=>n("Webcam"),()=>n("Refresh cameras"),()=>n("Refresh cameras"),()=>n("Avatar: the last VRM you chose is copied into avatars/ and restored at startup."),()=>n("Load / change VRM…")]),ee("change",Se,wt),ee("change",Ht,ut),ee("change",Qt,Ne),ee("click",vn,()=>ae(!0)),ee("click",$i,ke),ee("click",Ai,()=>Rt(!0)),M(e,_r),kt()}cr(["change","click"]);var bc=_e('<button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button>'),xc=_e('<nav class="xra-dock group fixed left-2 top-1/2 z-[99990] flex w-[46px] max-h-[92vh] -translate-y-1/2 flex-col gap-0.5 overflow-hidden rounded-xl border border-white/10 bg-[var(--xra-ui-bg)] p-1.5 font-sans text-[12.5px] leading-snug text-[var(--xra-ui-fg)] shadow-[0_12px_40px_rgba(0,0,0,.55)] transition-[width] duration-200 hover:w-[232px]"><!> <div class="my-1 h-px bg-white/10"></div> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button></nav>');function Sc(e,t){St(t,!0);const r=()=>window.XRA;let n=F(!1),i=F(!1),s=0;function a(){var Y,le,ve,Oe,Se;const R=r();if(R){try{E(n,!!((le=(Y=R.nativeBridge)==null?void 0:Y.cameraRunning)!=null&&le.call(Y)))}catch{}try{E(i,!!((Se=(Oe=(ve=R.recorder)==null?void 0:ve.status)==null?void 0:Oe.call(ve))!=null&&Se.active))}catch{}}}let o=F(!1),l=F("");async function c(){var Y,le,ve,Oe;if(v(o))return;E(o,!0);const R=!v(n);E(l,R?"Starting…":"Stopping…",!0);try{R?(await Qa(),E(n,!0)):(await xl(),E(n,!1))}catch(Se){try{await((le=(Y=r().nativeBridge)==null?void 0:Y.forceStopCamera)==null?void 0:le.call(Y))}catch{}E(n,!1),(Oe=(ve=r()).toast)==null||Oe.call(ve,"Tracking: "+Se.message,"warn",4500)}finally{E(o,!1),E(l,""),setTimeout(a,250)}}let d=F(!1),p=F("");async function y(){var Y,le;if(v(d))return;E(d,!0);const R=!v(i);E(p,R?"Starting…":"Stopping…",!0);try{R?(await Sl(),E(i,!0)):(await kl(),E(i,!1))}catch(ve){E(i,!1),(le=(Y=r()).toast)==null||le.call(Y,"Recording: "+ve.message,"warn",4500)}finally{E(d,!1),E(p,""),setTimeout(a,250)}}async function h(){var R,Y,le,ve;try{await((Y=(R=r().nativeBridge)==null?void 0:R.openVrmPicker)==null?void 0:Y.call(R))}catch(Oe){(ve=(le=r()).toast)==null||ve.call(le,"VRM loader: "+Oe.message,"error",4500)}}function g(){var R,Y;try{(Y=(R=r().nativeBridge)==null?void 0:R.showAbout)==null||Y.call(R)}catch{}}const k=[{id:"ui",icon:"Monitor",label:"UI Settings"},{id:"camera",icon:"Camera",label:"Webcam settings"},{id:"avatar",icon:"User",label:"Model settings"},{id:"second_avatar",icon:"Globe",label:"Studio link"},{id:"stage",icon:"Landmark",label:"Environment + Camera"},{id:"background",icon:"Image",label:"Background"},{id:"lip",icon:"Mic",label:"Audio"}],f="hover:bg-white/10",_="flex-1 overflow-hidden opacity-0 transition-opacity duration-150 group-hover:opacity-100";ki(()=>(a(),s=setInterval(a,1e3),()=>clearInterval(s)));var m=xc(),S=P(m);Yt(S,17,()=>k,R=>R.id,(R,Y)=>{var le=bc();je(le,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var ve=P(le),Oe=P(ve);Ge(Oe,{get name(){return v(Y).icon},size:16});var Se=C(ve,2);je(Se,1,Or(_));var Je=q(Se,!0);he((mr,Ht)=>{Ae(le,"title",mr),Z(Je,Ht)},[()=>te(v(Y).label),()=>te(v(Y).label)]),ee("click",le,()=>wl(v(Y).id)),M(R,le)});var $=C(S,4),x=P($),A=P(x);{let R=nt(()=>v(n)?"text-emerald-400":"");Ge(A,{name:"Webcam",size:16,get class(){return v(R)}})}var N=C(x,2);je(N,1,Or(_));var D=q(N,!0),I=C($,2),J=P(I),ae=P(J);{let R=nt(()=>v(d)?"Circle":v(i)?"Square":"Circle"),Y=nt(()=>v(i)?"text-red-400":"");Ge(ae,{get name(){return v(R)},size:16,get class(){return v(Y)}})}var Ne=C(J,2);je(Ne,1,Or(_));var Fe=q(Ne,!0),Le=C(I,2);je(Le,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var yt=P(Le),Qe=P(yt);Ge(Qe,{name:"FolderOpen",size:16});var ut=C(yt,2);je(ut,1,Or(_));var wt=q(ut,!0),ke=C(Le,2);je(ke,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var Rt=P(ke),_r=P(Rt);Ge(_r,{name:"Info",size:16});var Br=C(Rt,2);je(Br,1,Or(_));var gr=q(Br,!0);he((R,Y,le,ve,Oe,Se,Je,mr)=>{je($,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${v(n)?"bg-emerald-500/20 hover:bg-emerald-500/30":f} ${v(o)?"opacity-60":""}`),Ae($,"title",R),$.disabled=v(o),Z(D,Y),je(I,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${v(i)?"bg-red-500/30 hover:bg-red-500/40 text-red-200":f} ${v(d)?"opacity-60":""}`),Ae(I,"title",le),I.disabled=v(d),Z(Fe,ve),Ae(Le,"title",Oe),Z(wt,Se),Ae(ke,"title",Je),Z(gr,mr)},[()=>te("Tracking"),()=>v(o)?te(v(l)):v(n)?te("Tracking on"):te("Tracking off"),()=>te("Record"),()=>v(d)?te(v(p)):v(i)?te("Stop recording"):te("Record"),()=>te("Load / change VRM…"),()=>te("Load / change VRM…"),()=>te("About"),()=>te("About")]),ee("click",$,c),ee("click",I,y),ee("click",Le,h),ee("click",ke,g),M(e,m),kt()}cr(["click"]);var kc=_e('<div class="absolute inset-0 z-30 grid place-items-center bg-black text-[12px] text-[var(--xra-ui-fg)]"> </div>'),Ec=_e('<div class="xra-mocap-window fixed z-[99991] flex flex-col overflow-hidden rounded-xl border border-white/15 bg-[var(--xra-ui-bg)] text-[var(--xra-ui-fg)] shadow-[0_16px_48px_rgba(0,0,0,.6)] font-sans"><header class="flex shrink-0 cursor-move touch-none select-none items-center gap-2 px-2 py-1.5"><!> <span class="flex-1 text-[12px] font-semibold"> </span> <select class="rounded-md border border-white/15 bg-[#101214] px-1.5 py-0.5 text-[11px] text-[var(--xra-ui-fg)]"><option> </option><option> </option><option> </option><option> </option></select> <button type="button" class="rounded-md border border-white/15 bg-white/5 px-1.5 py-0.5 cursor-pointer text-[var(--xra-ui-fg)]"><!></button></header> <div class="relative min-h-0 flex-1 overflow-hidden bg-black"><!> <div class="absolute bottom-0 right-0 z-20 h-5 w-5 cursor-nwse-resize touch-none"></div></div></div>');function $c(e,t){St(t,!0);const r=()=>window.XRA,n=Ve("ui.mocap_window",{})||{};let i=F(ze(Number.isFinite(n.x)?n.x:48)),s=F(ze(Number.isFinite(n.y)?n.y:96)),a=F(ze(Number.isFinite(n.w)?n.w:360)),o=F(ze(Number.isFinite(n.h)?n.h:270)),l=F(void 0),c=F(!1),d=0;const p=nt(()=>Ve("ui.mocap_visibility","always")!=="auto"||v(c));function y(){ot("ui.mocap_window",{x:Math.round(v(i)),y:Math.round(v(s)),w:Math.round(v(a)),h:Math.round(v(o))})}function h(){var m,S,$;try{($=(S=(m=r())==null?void 0:m.nativeBridge)==null?void 0:S.updateMocapWindow)==null||$.call(S)}catch{}}function g(m,S){m.preventDefault();const $=m.clientX,x=m.clientY,A=v(i),N=v(s),D=v(a),I=v(o),J=Ne=>{const Fe=Ne.clientX-$,Le=Ne.clientY-x;S==="move"?(E(i,Math.max(0,Math.min(window.innerWidth-80,A+Fe)),!0),E(s,Math.max(0,Math.min(window.innerHeight-30,N+Le)),!0)):(E(a,Math.max(200,Math.min(window.innerWidth-v(i),D+Fe)),!0),E(o,Math.max(130,Math.min(window.innerHeight-v(s),I+Le)),!0))},ae=()=>{window.removeEventListener("pointermove",J),window.removeEventListener("pointerup",ae),y()};window.addEventListener("pointermove",J),window.addEventListener("pointerup",ae)}nr(()=>{var S,$,x;const m=v(l);if(m){try{(x=($=(S=r())==null?void 0:S.nativeBridge)==null?void 0:$.attachMocapWindow)==null||x.call($,m)}catch{}return()=>{var A,N,D;try{(D=(N=(A=r())==null?void 0:A.nativeBridge)==null?void 0:N.detachMocapWindow)==null||D.call(N)}catch{}}}}),nr(()=>{v(i),v(s),v(a),v(o),v(c),h()}),ki(()=>{const m=()=>{var S,$,x;E(c,!!((x=($=(S=r())==null?void 0:S.nativeBridge)==null?void 0:$.cameraRunning)!=null&&x.call($)))};return m(),d=setInterval(m,500),window.addEventListener("resize",h),()=>{clearInterval(d),window.removeEventListener("resize",h)}});var k=K(),f=G(k);{var _=m=>{var S=Ec(),$=P(S),x=P($);Ge(x,{name:"Activity",size:14});var A=C(x,2),N=q(A,!0),D=C(A,2),I=P(D),J=q(I,!0);I.value=I.__value="both";var ae=C(I),Ne=q(ae,!0);ae.value=ae.__value="wireframe";var Fe=C(ae),Le=q(Fe,!0);Fe.value=Fe.__value="video";var yt=C(Fe),Qe=q(yt,!0);yt.value=yt.__value="off";var ut;ur(D);var wt=C(D,2),ke=P(wt);Ge(ke,{name:"X",size:13});var Rt=C($,2),_r=P(Rt);{var Br=R=>{var Y=kc(),le=q(Y,!0);he(ve=>Z(le,ve),[()=>te("Tracking is off")]),M(R,Y)};We(_r,R=>{v(c)||R(Br)})}var gr=C(_r,2);Si(Rt,R=>E(l,R),()=>v(l)),he((R,Y,le,ve,Oe,Se,Je,mr)=>{Va(S,`left:${v(i)??""}px; top:${v(s)??""}px; width:${v(a)??""}px; height:${v(o)??""}px;`),Z(N,R),Z(J,Y),Z(Ne,le),Z(Le,ve),Z(Qe,Oe),ut!==(ut=Se)&&(D.value=(D.__value=ut)??"",Dt(D,ut)),Ae(wt,"title",Je),Ae(gr,"title",mr)},[()=>te("Mocap"),()=>te("Webcam + skeleton"),()=>te("Skeleton only"),()=>te("Webcam only"),()=>te("Off"),()=>Ve("ui.mocap_view","off"),()=>te("Close"),()=>te("Resize")]),ee("pointerdown",$,R=>g(R,"move")),ee("change",D,R=>ot("ui.mocap_view",R.currentTarget.value)),ee("pointerdown",D,R=>R.stopPropagation()),ee("click",wt,()=>ot("ui.mocap_view","off")),ee("pointerdown",wt,R=>R.stopPropagation()),ee("pointerdown",gr,R=>{R.stopPropagation(),g(R,"resize")}),M(m,S)};We(f,m=>{v(p)&&m(_)})}M(e,k),kt()}cr(["pointerdown","change","click"]);var Ac=_e('<aside class="xra-section-popup fixed left-[64px] top-1/2 z-[99992] flex max-h-[72vh] w-[300px] -translate-y-1/2 flex-col overflow-hidden rounded-xl border border-white/12 bg-[var(--xra-ui-bg)] text-[var(--xra-ui-fg)] shadow-[0_16px_48px_rgba(0,0,0,.6)] font-sans"><header class="flex shrink-0 items-center gap-2 border-b border-white/10 bg-[var(--xra-ui-bg2)] px-3 py-2"><!> <span class="text-[12.5px] font-semibold"> </span></header> <div class="min-h-0 flex-1 overflow-auto px-2.5 py-2"><!></div></aside>');function Mc(e,t){St(t,!0);let r;nr(()=>{const d=y=>{const h=y.target;r&&h instanceof Node&&r.contains(h)||h instanceof Element&&h.closest(".xra-dock")||(X.popupSection=null)},p=y=>{y.key==="Escape"&&(X.popupSection=null)};return document.addEventListener("pointerdown",d,!0),window.addEventListener("keydown",p,!0),()=>{document.removeEventListener("pointerdown",d,!0),window.removeEventListener("keydown",p,!0)}});var n=Ac(),i=P(n),s=P(i);Ge(s,{get name(){return t.section.icon},size:15,class:"text-[var(--xra-ui-dim)]"});var a=C(s,2),o=q(a,!0),l=C(i,2),c=P(l);rs(c,{get section(){return t.section}}),Si(n,d=>r=d,()=>r),he(d=>Z(o,d),[()=>te(t.section.title)]),M(e,n),kt()}var Tc=_e('<aside class="xra-panel"><header class="xra-panel-head"><strong>XR Animator</strong> <span class="xra-spacer"></span> <button><!></button> <button title="Close panel"><!></button></header> <div class="xra-panel-body"></div></aside>'),Nc=_e('<button class="xra-panel-launcher"><!></button>'),Oc=_e("<!> <!> <!> <!> <!>",1);function Rc(e,t){St(t,!0),$l();const r=nt(()=>Ol(Xe));var n=Oc(),i=G(n);{var s=f=>{wc(f,{})};We(i,f=>{X.ready&&X.startupOpen&&f(s)})}var a=C(i,2);{var o=f=>{Sc(f,{})};We(a,f=>{X.ready&&!X.startupOpen&&f(o)})}var l=C(a,2);{var c=f=>{const _=nt(()=>v(r).find(x=>x.id===X.popupSection));var m=K(),S=G(m);{var $=x=>{Mc(x,{get section(){return v(_)}})};We(S,x=>{v(_)&&x($)})}M(f,m)};We(l,f=>{X.ready&&!X.startupOpen&&X.popupSection&&f(c)})}var d=C(l,2);{var p=f=>{$c(f,{})},y=nt(()=>X.ready&&!X.startupOpen&&Ve("ui.mocap_view","off")!=="off");We(d,f=>{v(y)&&f(p)})}var h=C(d,2);{var g=f=>{var D,I,J;var _=Tc(),m=P(_),S=C(P(m),4);Ae(S,"title",((J=(I=(D=window.XRA)==null?void 0:D.i18n)==null?void 0:I.t)==null?void 0:J.call(I,"Clean screen mode (Press Esc to restore)"))||"Clean screen (Esc)");var $=P(S);Ge($,{name:"EyeOff",size:15});var x=C(S,2),A=P(x);Ge(A,{name:"X",size:15});var N=C(m,2);Yt(N,21,()=>v(r),ae=>ae.id,(ae,Ne)=>{gc(ae,{get section(){return v(Ne)}})}),ee("click",S,function(...ae){Cn==null||Cn.apply(this,ae)}),ee("click",x,()=>X.panelOpen=!1),M(f,_)},k=f=>{var _=Nc(),m=P(_);Ge(m,{name:"Settings",size:16}),ee("click",_,()=>{X.panelOpen=!0,Ja()}),M(f,_)};We(h,f=>{X.ready&&!X.startupOpen&&X.panelOpen?f(g):X.ready&&!X.startupOpen&&f(k,1)})}M(e,n),kt()}cr(["click"]),window.XRA_SVELTE_UI=!0;function as(){let e=document.getElementById("XRA_SVELTE");e||(e=document.createElement("div"),e.id="XRA_SVELTE",document.body.appendChild(e)),Ko(Rc,{target:e})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",as):as()})();

})();
