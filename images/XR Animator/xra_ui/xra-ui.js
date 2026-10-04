(function(){
var Wc=Object.defineProperty;var $s=fe=>{throw TypeError(fe)};var jc=(fe,ae,be)=>ae in fe?Wc(fe,ae,{enumerable:!0,configurable:!0,writable:!0,value:be}):fe[ae]=be;var et=(fe,ae,be)=>jc(fe,typeof ae!="symbol"?ae+"":ae,be),Oi=(fe,ae,be)=>ae.has(fe)||$s("Cannot "+be);var u=(fe,ae,be)=>(Oi(fe,ae,"read from private field"),be?be.call(fe):ae.get(fe)),V=(fe,ae,be)=>ae.has(fe)?$s("Cannot add the same private member more than once"):ae instanceof WeakSet?ae.add(fe):ae.set(fe,be),z=(fe,ae,be,Zt)=>(Oi(fe,ae,"write to private field"),Zt?Zt.call(fe,be):ae.set(fe,be),be),U=(fe,ae,be)=>(Oi(fe,ae,"access private method"),be);(function(){"use strict";var us,Nr,Gt,cr,Cr,Or,Pr,zt,Rr,qe,ln,Dt,mt,Tt,Ir,ur,J,Pi,Ri,hn,Ii,As,Ms,Vr,Xc,_n,fs,lt,Ti,ct,fr,Ie,Ke,Le,Ze,Nt,dr,Yt,Lr,cn,un,Bt,Dn,le,Gc,Yc,Li,qc,zi,gn,jn,Di,Bi,yt,Ct,Qe,pr,fn,dn,Bn,ds;var ae=Array.isArray,be=Array.prototype.indexOf,Zt=Array.prototype.includes,mn=Array.from,Vi=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,Fi=Object.getOwnPropertyDescriptors,Ts=Object.prototype,Ns=Array.prototype,Xn=Object.getPrototypeOf,Hi=Object.isExtensible;function Fr(e){return typeof e=="function"}const Cs=()=>{};function Os(e){return e()}function Gn(e){for(var t=0;t<e.length;t++)e[t]()}function Ui(){var e,t,r=new Promise((n,i)=>{e=n,t=i});return{promise:r,resolve:e,reject:t}}function Wi(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const Me=2,mr=4,Hr=8,Yn=1<<24,dt=16,tt=32,Pt=64,qn=128,Kn=256,pt=512,xe=1024,ye=2048,rt=4096,Oe=8192,Pe=16384,yr=32768,yn=1<<25,Ft=65536,wn=1<<17,Ps=1<<18,wr=1<<19,ji=1<<20,bt=1<<25,bn=1<<21,br=1<<22,Ht=1<<23,xt=Symbol("$state"),Xi=Symbol("component"),Gi=Symbol("legacy props"),Rs=Symbol(""),xn=Symbol("attributes"),Zn=Symbol("class"),Qn=Symbol("style"),Ur=Symbol("text"),Wr=new class extends Error{constructor(){super(...arguments);et(this,"name","StaleReactionError");et(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},kn=!!((us=globalThis.document)!=null&&us.contentType)&&globalThis.document.contentType.includes("xml"),Is=1,Ls=2,Yi=4,zs=8,Ds=16,Bs=1,Vs=2,qi=4,Fs=8,Hs=16,Us=1,Ws=2,we=Symbol("uninitialized"),Ki="http://www.w3.org/1999/xhtml",js="http://www.w3.org/2000/svg",Xs="@attach";function Gs(){console.warn("https://svelte.dev/e/derived_inert")}function Ys(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function qs(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Zi(e){return e===this.v}function Ks(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Qi(e){return!Ks(e,this.v)}function Zs(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Qs(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Js(e,t,r){throw new Error("https://svelte.dev/e/each_key_duplicate")}function eo(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function to(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ro(e){throw new Error("https://svelte.dev/e/effect_orphan")}function no(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function io(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function ao(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function so(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function oo(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function lo(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let xr=!1,Kc=!1;function co(){xr=!0}let de=null;function kr(e){de=e}function kt(e,t=!1,r){de={p:de,i:!1,c:null,e:null,s:e,x:null,r:H,l:xr&&!t?{s:null,u:null,$:[]}:null}}function St(e){var t=de,r=t.e;if(r!==null){t.e=null;for(var n of r)wa(n)}return t.i=!0,de=t.p,Jn(e)}function Jn(e={}){return Vi(e,Xi,{value:!0}),e}function jr(){return!xr||de!==null&&de.l===null}let Sr=[];function uo(){var e=Sr;Sr=[],Gn(e)}function Et(e){if(Sr.length===0){var t=Sr;queueMicrotask(()=>{t===Sr&&uo()})}Sr.push(e)}const fo=-7169;function ve(e,t){e.f=e.f&fo|t}function ei(e){(e.f&pt)!==0||e.deps===null?ve(e,xe):ve(e,rt)}function Ji(e,t,r){(e.f&ye)!==0?t.add(e):(e.f&rt)!==0&&r.add(e),ve(e,xe)}function po(e,t){if(t){const r=document.body;e.autofocus=!0,Et(()=>{document.activeElement===r&&e.focus()})}}function Xr(e){var t=F,r=H;it(null),at(null);try{return e()}finally{it(t),at(r)}}function ea(e,t,r,n){const i=jr()?Er:ti;var s=e.filter(h=>!h.settled),a=t.map(i);if(r.length===0&&s.length===0){n(a);return}var o=H,l=vo(),c=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(h=>h.promise)):null;function f(h){if((o.f&Pe)===0){l();try{n([...a,...h])}catch(g){At(g,o)}Sn()}}var v=ta();if(r.length===0){c.then(()=>f([])).finally(v);return}function b(){Promise.all(r.map(h=>ho(h))).then(f).catch(h=>At(h,o)).finally(v)}c?c.then(()=>{l(),b(),Sn()}):b()}function vo(){var e=H,t=F,r=de,n=L;return function(s=!0){at(e),it(t),kr(r),s&&(e.f&Pe)===0&&(n==null||n.activate(),n==null||n.apply())}}function Sn(e=!0){at(null),it(null),kr(null),e&&(L==null||L.deactivate())}function ta(){var e=H,t=e.b,r=L,n=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,r),r.increment(n,e),()=>{t==null||t.update_pending_count(-1,r),r.decrement(n,e)}}function Er(e){var t=Me|ye;return H!==null&&(H.f|=wr),{ctx:de,deps:null,effects:null,equals:Zi,f:t,fn:e,reactions:null,rv:0,v:we,wv:0,parent:H,ac:null}}const Gr=Symbol("obsolete");function ho(e,t,r){let n=H;n===null&&Qs();var i=void 0,s=Ut(we),a=!F,o=new Set;return Mo(()=>{var h,g;var l=H,c=Ui();i=c.promise;try{Promise.resolve(e()).then(c.resolve,S=>{S!==Wr&&c.reject(S)}).finally(Sn)}catch(S){c.reject(S),Sn()}var f=L;if(a){if((l.f&yr)!==0)var v=ta();if((h=n.b)!=null&&h.is_rendered())(g=f.async_deriveds.get(l))==null||g.reject(Gr);else for(const S of o.values())S.reject(Gr);o.add(c),f.async_deriveds.set(l,c)}const b=(S,d=void 0)=>{v==null||v(),o.delete(c),d!==Gr&&(f.activate(),d?(s.f|=Ht,Ar(s,d)):((s.f&Ht)!==0&&(s.f^=Ht),Ar(s,S)),f.deactivate())};c.promise.then(b,S=>b(null,S||"unknown"))}),An(()=>{for(const l of o)l.reject(Gr)}),new Promise(l=>{function c(f){function v(){f===i?l(s):c(i)}f.then(v,v)}c(i)})}function nt(e){const t=Er(e);return Ma(t),t}function ti(e){const t=Er(e);return t.equals=Qi,t}function _o(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)$e(t[r])}}function ri(e){var t,r=H,n=e.parent;if(!It&&n!==null&&e.v!==we&&(n.f&(Pe|Oe))!==0)return Gs(),e.v;at(n);try{_o(e),t=Pa(e)}finally{at(r)}return t}function ra(e){var t=ri(e);if(!e.equals(t)&&(e.wv=Ca(),(!(L!=null&&L.is_fork)||e.deps===null)&&(L!==null?(L.capture(e,t,!0),Yr==null||Yr.capture(e,t,!0)):e.v=t,e.deps===null))){ve(e,xe);return}It||(Ee!==null?(ui()||L!=null&&L.is_fork)&&Ee.set(e,t):ei(e))}function go(e){var t;if(e.effects!==null)for(const r of e.effects)(r.teardown||r.ac)&&((t=r.teardown)==null||t.call(r),r.ac!==null&&Xr(()=>{r.ac.abort(Wr),r.ac=null}),r.fn!==null&&(r.teardown=Cs),en(r,0),di(r))}function na(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&Mr(t)}let ni=null,$r=null,L=null,Yr=null,Ee=null,ii=null,ai=!1,qr=null,En=null;var ia=0,Zc=new Set;let mo=1;const zn=class zn{constructor(){V(this,J);et(this,"id",mo++);V(this,Nr,!1);et(this,"linked",!0);V(this,Gt,null);V(this,cr,null);et(this,"async_deriveds",new Map);et(this,"current",new Map);et(this,"previous",new Map);V(this,Cr,new Set);V(this,Or,new Set);V(this,Pr,0);V(this,zt,new Map);V(this,Rr,null);V(this,qe,[]);V(this,ln,[]);V(this,Dt,new Set);V(this,mt,new Set);V(this,Tt,new Map);V(this,Ir,new Set);et(this,"is_fork",!1);V(this,ur,!1);$r===null?ni=$r=this:(z($r,cr,this),z(this,Gt,$r)),$r=this}skip_effect(t){u(this,Tt).has(t)||u(this,Tt).set(t,{d:[],m:[]}),u(this,Ir).delete(t)}unskip_effect(t,r=n=>this.schedule(n)){var n=u(this,Tt).get(t);if(n){u(this,Tt).delete(t);for(var i of n.d)ve(i,ye),r(i);for(i of n.m)ve(i,rt),r(i)}u(this,Ir).add(t)}capture(t,r,n=!1){t.v!==we&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&Ht)===0&&(this.current.set(t,[r,n]),Ee==null||Ee.set(t,r)),this.is_fork||(t.v=r)}activate(){L=this}deactivate(){L=null,Ee=null}flush(){try{ai=!0,L=this,U(this,J,hn).call(this)}finally{ia=0,ii=null,qr=null,En=null,ai=!1,L=null,Ee=null,$t.clear()}}discard(){var t;for(const r of u(this,Or))r(this);u(this,Or).clear();for(const r of this.async_deriveds.values())r.reject(Gr);U(this,J,_n).call(this),(t=u(this,Rr))==null||t.resolve()}register_created_effect(t){u(this,ln).push(t)}increment(t,r){if(z(this,Pr,u(this,Pr)+1),t){let n=u(this,zt).get(r)??0;u(this,zt).set(r,n+1)}}decrement(t,r){if(z(this,Pr,u(this,Pr)-1),t){let n=u(this,zt).get(r)??0;n===1?u(this,zt).delete(r):u(this,zt).set(r,n-1)}u(this,ur)||(z(this,ur,!0),Et(()=>{z(this,ur,!1),this.linked&&this.flush()}))}transfer_effects(t,r){for(const n of t)u(this,Dt).add(n);for(const n of r)u(this,mt).add(n);t.clear(),r.clear()}oncommit(t){u(this,Cr).add(t)}ondiscard(t){u(this,Or).add(t)}settled(){return(u(this,Rr)??z(this,Rr,Ui())).promise}static ensure(){if(L===null){const t=L=new zn;ai||Et(()=>{u(t,Nr)||t.flush()})}return L}apply(){{Ee=null;return}}schedule(t){var r;if(ii=t,(r=t.b)!=null&&r.is_pending&&(t.f&(mr|Hr|Yn))!==0&&(t.f&yr)===0){t.b.defer_effect(t);return}u(this,qe).push(t)}};Nr=new WeakMap,Gt=new WeakMap,cr=new WeakMap,Cr=new WeakMap,Or=new WeakMap,Pr=new WeakMap,zt=new WeakMap,Rr=new WeakMap,qe=new WeakMap,ln=new WeakMap,Dt=new WeakMap,mt=new WeakMap,Tt=new WeakMap,Ir=new WeakMap,ur=new WeakMap,J=new WeakSet,Pi=function(){if(this.is_fork)return!0;for(const n of u(this,zt).keys()){for(var t=n,r=!1;t.parent!==null;){if(u(this,Tt).has(t)){r=!0;break}t=t.parent}if(!r)return!0}return!1},Ri=function(){var t=[];for(const s of u(this,qe))if(!((s.f&Pe)!==0||(s.f&(ye|rt))===0)){for(var r=s,n=!1;r.parent!==null;){r=r.parent;var i=r.f;if((i&(Pt|tt))!==0){if((i&xe)===0){n=!0;break}r.f^=xe}}n||t.push(r)}return z(this,qe,[]),t},hn=function(){var o,l,c,f;z(this,Nr,!0);for(const v of u(this,Dt))u(this,mt).delete(v),ve(v,ye),this.schedule(v);for(const v of u(this,mt))ve(v,rt),this.schedule(v);this.apply();for(var t=qr=[],r=[],n=En=[];u(this,qe).length>0;){ia++>1e3&&(U(this,J,_n).call(this),yo());for(const v of U(this,J,Ri).call(this))try{U(this,J,Ii).call(this,v,t,r)}catch(b){throw la(v),U(this,J,Pi).call(this)||this.discard(),b}}if(L=null,n.length>0){var i=zn.ensure();for(const v of n)i.schedule(v)}if(qr=null,En=null,U(this,J,Pi).call(this)){U(this,J,Vr).call(this,r),U(this,J,Vr).call(this,t);for(const[v,b]of u(this,Tt))oa(v,b);n.length>0&&U(o=L,J,hn).call(o);return}const s=U(this,J,As).call(this);if(s){U(this,J,Vr).call(this,r),U(this,J,Vr).call(this,t),U(l=s,J,Ms).call(l,this);return}u(this,Dt).clear(),u(this,mt).clear();for(const v of u(this,Cr))v(this);u(this,Cr).clear(),Yr=this,aa(r),aa(t),Yr=null,(c=u(this,Rr))==null||c.resolve();var a=L;if(u(this,Pr)===0&&(u(this,qe).length===0||a!==null)&&U(this,J,_n).call(this),u(this,qe).length>0)if(a!==null){for(const v of u(this,qe))u(a,qe).push(v);z(this,qe,[])}else a=this;a!==null&&($t.clear(),U(f=a,J,hn).call(f))},Ii=function(t,r,n){t.f^=xe;for(var i=t.first;i!==null;){var s=i.f,a=(s&(tt|Pt))!==0,o=a&&(s&xe)!==0,l=o||(s&Oe)!==0||u(this,Tt).has(i);if(!l&&i.fn!==null){a?i.f^=xe:(s&mr)!==0?r.push(i):Jr(i)&&((s&dt)!==0&&u(this,mt).add(i),Mr(i));var c=i.first;if(c!==null){i=c;continue}}for(;i!==null;){var f=i.next;if(f!==null){i=f;break}i=i.parent}}},As=function(){for(var t=u(this,Gt);t!==null;){if(!t.is_fork){for(const[r,[,n]]of this.current)if(t.current.has(r)&&!n)return t}t=u(t,Gt)}return null},Ms=function(t){var n;for(const[i,s]of t.current)!this.previous.has(i)&&t.previous.has(i)&&this.previous.set(i,t.previous.get(i)),this.current.set(i,s);for(const[i,s]of t.async_deriveds){const a=this.async_deriveds.get(i);a&&s.promise.then(a.resolve).catch(a.reject)}t.async_deriveds.clear(),this.transfer_effects(u(t,Dt),u(t,mt));const r=i=>{var s=i.reactions;if(s!==null&&!((i.f&Me)!==0&&(i.f&(ye|rt))===0))for(const l of s){var a=l.f;if((a&Me)!==0)r(l);else{var o=l;a&(br|dt)&&!this.async_deriveds.has(o)&&(u(this,mt).delete(o),ve(o,ye),this.schedule(o))}}};for(const i of this.current.keys())r(i);this.oncommit(()=>t.discard()),U(n=t,J,_n).call(n),L=this,U(this,J,hn).call(this)},Vr=function(t){for(var r=0;r<t.length;r+=1)Ji(t[r],u(this,Dt),u(this,mt))},Xc=function(){var v,b;for(let h=ni;h!==null;h=u(h,cr)){var t=h.id<this.id,r=[];for(const[g,[S,d]]of this.current){if(h.current.has(g)){var n=h.current.get(g)[0];if(t&&S!==n)h.current.set(g,[S,d]);else continue}r.push(g)}if(t)for(const[g,S]of this.async_deriveds){const d=h.async_deriveds.get(g);d&&S.promise.then(d.resolve).catch(d.reject)}var i=[...h.current.keys()].filter(g=>!h.current.get(g)[1]);if(!(!u(h,Nr)||i.length===0)){var s=i.filter(g=>!this.current.has(g));if(s.length===0)t&&h.discard();else if(r.length>0){if(t)for(const g of u(this,Ir))h.unskip_effect(g,S=>{var d;(S.f&(dt|br))!==0?h.schedule(S):U(d=h,J,Vr).call(d,[S])});h.activate();var a=new Set,o=new Map;for(var l of r)sa(l,s,a,o);o=new Map;var c=[...h.current].filter(([g,S])=>{const d=this.current.get(g);return d?d[0]!==S[0]||d[1]!==S[1]:!0}).map(([g])=>g);if(c.length>0)for(const g of u(this,ln))(g.f&(Pe|Oe|wn))===0&&si(g,c,o)&&((g.f&(br|dt))!==0?(ve(g,ye),h.schedule(g)):u(h,Dt).add(g));if(u(h,qe).length>0&&!u(h,ur)){h.apply();for(var f of U(v=h,J,Ri).call(v))U(b=h,J,Ii).call(b,f,[],[])}h.deactivate()}}}},_n=function(){if(this.linked){var t=u(this,Gt),r=u(this,cr);t===null?ni=r:z(t,cr,r),r===null?$r=t:z(r,Gt,t),this.linked=!1}};let Qt=zn;function yo(){try{no()}catch(e){At(e,ii)}}let vt=null;function aa(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(Pe|Oe))===0&&Jr(n)&&(vt=new Set,Mr(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&Sa(n),(vt==null?void 0:vt.size)>0)){$t.clear();for(const i of vt){if((i.f&(Pe|Oe))!==0)continue;const s=[i];let a=i.parent;for(;a!==null;)vt.has(a)&&(vt.delete(a),s.push(a)),a=a.parent;for(let o=s.length-1;o>=0;o--){const l=s[o];(l.f&(Pe|Oe))===0&&Mr(l)}}vt.clear()}}vt=null}}function sa(e,t,r,n){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(const i of e.reactions){const s=i.f;(s&Me)!==0?sa(i,t,r,n):(s&(br|dt))!==0&&(s&ye)===0&&si(i,t,n)&&(ve(i,ye),oi(i))}}function si(e,t,r){const n=r.get(e);if(n!==void 0)return n;if(e.deps!==null)for(const i of e.deps){if(Zt.call(t,i))return!0;if((i.f&Me)!==0&&si(i,t,r))return r.set(i,!0),!0}return r.set(e,!1),!1}function oi(e){L.schedule(e)}function oa(e,t){if(!((e.f&tt)!==0&&(e.f&xe)!==0)){(e.f&ye)!==0?t.d.push(e):(e.f&rt)!==0&&t.m.push(e),ve(e,xe);for(var r=e.first;r!==null;)oa(r,t),r=r.next}}function la(e){ve(e,xe);for(var t=e.first;t!==null;)la(t),t=t.next}let $n=new Set;const $t=new Map;let ca=!1;function Ut(e,t){var r={f:0,v:e,reactions:null,equals:Zi,rv:0,wv:0};return r}function X(e,t){const r=Ut(e);return Ma(r),r}function wo(e,t=!1,r=!0){var i;const n=Ut(e);return t||(n.equals=Qi),xr&&r&&de!==null&&de.l!==null&&((i=de.l).s??(i.s=[])).push(n),n}function N(e,t,r=!1){F!==null&&(!_t||(F.f&wn)!==0)&&jr()&&(F.f&(Me|dt|br|wn))!==0&&(Mt===null||!Mt.has(e))&&oo();let n=r?Re(t):t;return Ar(e,n,En)}var Jt=null,li=0;function Ar(e,t,r=null){if(!e.equals(t)){It?$t.set(e,t):$t.has(e)||$t.set(e,e.v);var n=Qt.ensure();if(n.capture(e,t),(e.f&Me)!==0){const i=e;(e.f&ye)!==0&&ri(i),Ee===null&&ei(i)}e.wv=Ca(),Jt=null,li=0,fa(e,ye,r),Jt=null,jr()&&H!==null&&(H.f&xe)!==0&&(H.f&(tt|Pt))===0&&(st===null?Co([e]):st.push(e)),!n.is_fork&&$n.size>0&&!ca&&bo()}return t}function bo(){ca=!1;for(const e of $n){(e.f&xe)!==0&&ve(e,rt);let t;try{t=Jr(e)}catch{t=!0}t&&Mr(e)}$n.clear()}function ua(e,t=1){var r=p(e),n=t===1?r++:r--;return N(e,r),n}function Kr(e){N(e,e.v+1)}function fa(e,t,r){var n=e.reactions;if(n!==null){var i=jr(),s=n.length;if(li+=s,li>1e5&&Jt===null&&(Jt=new Set),Jt!==null){if(Jt.has(e))return;Jt.add(e)}for(var a=0;a<s;a++){var o=n[a],l=o.f;if(!(!i&&o===H)){var c=(l&ye)===0;if(c&&ve(o,t),(l&wn)!==0)$n.add(o);else if((l&Me)!==0){var f=o;Ee==null||Ee.delete(f),fa(f,rt,r)}else if(c){var v=o;(l&dt)!==0&&vt!==null&&vt.add(v),r!==null?r.push(v):oi(v)}}}}}function Re(e){if(typeof e!="object"||e===null||xt in e||Xi in e)return e;const t=Xn(e);if(t!==Ts&&t!==Ns)return e;var r=new Map,n=ae(e),i=X(0),s=ir,a=o=>{if(ir===s)return o();var l=F,c=ir;it(null),Na(s);var f=o();return it(l),Na(c),f};return n&&r.set("length",X(e.length)),new Proxy(e,{defineProperty(o,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&ao();var f=r.get(l);return f===void 0?a(()=>{var v=X(c.value);return r.set(l,v),v}):N(f,c.value,!0),!0},deleteProperty(o,l){var c=r.get(l);if(c===void 0){if(l in o){const f=a(()=>X(we));r.set(l,f),Kr(i)}}else N(c,we),Kr(i);return!0},get(o,l,c){var h;if(l===xt)return e;var f=r.get(l),v=l in o;if(f===void 0&&(!v||(h=Vt(o,l))!=null&&h.writable)&&(f=a(()=>{var g=Re(v?o[l]:we),S=X(g);return S}),r.set(l,f)),f!==void 0){var b=p(f);return b===we?void 0:b}return Reflect.get(o,l,c)},getOwnPropertyDescriptor(o,l){var b;(b=this.has)==null||b.call(this,o,l);var c=Reflect.getOwnPropertyDescriptor(o,l),f=r.get(l);if(f!==void 0){var v=p(f);if(v===we)return;if(c&&"value"in c)c.value=v;else return{enumerable:!0,configurable:!0,value:v,writable:!0}}return c},has(o,l){var b;if(l===xt)return!0;var c=r.get(l),f=c!==void 0&&c.v!==we||Reflect.has(o,l);if(c!==void 0||H!==null&&(!f||(b=Vt(o,l))!=null&&b.writable)){c===void 0&&(c=a(()=>{var h=f?Re(o[l]):we,g=X(h);return g}),r.set(l,c));var v=p(c);if(v===we)return!1}return f},set(o,l,c,f){var w;var v=r.get(l),b=l in o;if(n&&l==="length")for(var h=c;h<v.v;h+=1){var g=r.get(h+"");g!==void 0?N(g,we):h in o&&(g=a(()=>X(we)),r.set(h+"",g))}if(v===void 0)(!b||(w=Vt(o,l))!=null&&w.writable)&&(v=a(()=>X(void 0)),N(v,Re(c)),r.set(l,v));else{b=v.v!==we;var S=a(()=>Re(c));N(v,S)}var d=Reflect.getOwnPropertyDescriptor(o,l);if(d!=null&&d.set&&d.set.call(f,c),!b){if(n&&typeof l=="string"){var _=r.get("length"),y=Number(l);Number.isInteger(y)&&y>=_.v&&N(_,y+1)}Kr(i)}return!0},ownKeys(o){p(i);var l=Reflect.ownKeys(o).filter(v=>{var b=r.get(v);return b===void 0||b.v!==we});for(var[c,f]of r)f.v!==we&&!(c in o)&&l.push(c);return l},setPrototypeOf(){so()}})}function da(e){try{if(e!==null&&typeof e=="object"&&xt in e)return e[xt]}catch{}return e}function pa(e,t){return Object.is(da(e),da(t))}var va,ha,_a,ga;function xo(){if(va===void 0){va=window,ha=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;_a=Vt(t,"firstChild").get,ga=Vt(t,"nextSibling").get,Hi(e)&&(e[Zn]=void 0,e[xn]=null,e[Qn]=void 0,e.__e=void 0),Hi(r)&&(r[Ur]=void 0)}}function Rt(e=""){return document.createTextNode(e)}function er(e){return _a.call(e)}function Zr(e){return ga.call(e)}function B(e,t){return er(e)}function G(e,t=!1){{var r=er(e);return r instanceof Comment&&r.data===""?Zr(r):r}}function q(e,t=!1){return er(e)}function P(e,t=1,r=!1){let n=e;for(;t--;)n=Zr(n);return n}function ko(e){e.textContent=""}function ma(){return!1}function ci(e,t,r){return t==null||t===Ki?r?document.createElement(e,{is:r}):document.createElement(e):r?document.createElementNS(t,e,{is:r}):document.createElementNS(t,e)}function So(e){var t=H;if(t===null)return F.f|=Ht,e;if((t.f&yr)===0&&(t.f&mr)===0)throw e;At(e,t)}function At(e,t){if(!(t!==null&&(t.f&Pe)!==0)){for(;t!==null;){if((t.f&qn)!==0&&(t.f&(Pe|yn))===0){if((t.f&yr)===0)throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw e}}function ya(e){H===null&&(F===null&&ro(),to()),It&&eo()}function Eo(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function ht(e,t){var r=H;r!==null&&(r.f&Oe)!==0&&(e|=Oe);var n={ctx:de,deps:null,nodes:null,f:e|ye|pt,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};L==null||L.register_created_effect(n);var i=n;if((e&mr)!==0)qr!==null?qr.push(n):Qt.ensure().schedule(n);else if(t!==null){try{Mr(n)}catch(a){throw $e(n),a}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&wr)===0&&(i=i.first,(e&dt)!==0&&(e&Ft)!==0&&i!==null&&(i.f|=Ft))}if(i!==null&&(i.parent=r,r!==null&&Eo(i,r),F!==null&&(F.f&Me)!==0&&(e&Pt)===0)){var s=F;(s.effects??(s.effects=[])).push(i)}return n}function ui(){return F!==null&&!_t}function An(e){const t=ht(Hr,null);return ve(t,xe),t.teardown=e,t}function tr(e){ya();var t=H.f,r=!F&&(t&tt)!==0&&de!==null&&!de.i;if(r){var n=de;(n.e??(n.e=[])).push(e)}else return wa(e)}function wa(e){return ht(mr|ji,e)}function $o(e){return ya(),ht(Hr|ji,e)}function Ao(e){Qt.ensure();const t=ht(Pt|wr,e);return(r={})=>new Promise(n=>{r.outro?rr(t,()=>{$e(t),n(void 0)}):($e(t),n(void 0))})}function fi(e){return ht(mr,e)}function Mo(e){return ht(br|wr,e)}function ba(e,t=0){return ht(Hr|t,e)}function he(e,t=[],r=[],n=[]){ea(n,t,r,i=>{ht(Hr,()=>{e(...i.map(p))})})}function Qr(e,t=0){var r=ht(dt|t,e);return r}function xa(e,t=0){var r=ht(Yn|t,e);return r}function Be(e){return ht(tt|wr,e)}function ka(e){var t=e.teardown;if(t!==null){const r=It,n=F;Aa(!0),it(null);try{t.call(null)}catch(i){At(i,e.parent)}finally{Aa(r),it(n)}}}function di(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const i=r.ac;i!==null&&Xr(()=>{i.abort(Wr)});var n=r.next;(r.f&Pt)!==0?r.parent=null:$e(r,t),r=n}}function To(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&tt)===0&&$e(t),t=r}}function $e(e,t=!0){var r=!1;(t||(e.f&Ps)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(No(e.nodes.start,e.nodes.end),r=!0),e.f|=yn,di(e,t&&!r),en(e,0);var n=e.nodes&&e.nodes.t;if(n!==null)for(const s of n)s.stop();ka(e),e.f^=yn,e.f|=Pe;var i=e.parent;i!==null&&i.first!==null&&Sa(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function No(e,t){for(;e!==null;){var r=e===t?null:Zr(e);e.remove(),e=r}}function Sa(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function rr(e,t,r=!0){var n=[];e.f|=Kn,Ea(e,n,!0);var i=()=>{r&&$e(e),t&&t()},s=n.length;if(s>0){var a=()=>--s||i();for(var o of n)o.out(a)}else i()}function Ea(e,t,r){if((e.f&Oe)===0){e.f^=Oe;var n=e.nodes&&e.nodes.t;if(n!==null)for(const o of n)(o.is_global||r)&&t.push(o);for(var i=e.first;i!==null;){var s=i.next;if((i.f&Pt)===0){var a=(i.f&Ft)!==0||(i.f&tt)!==0&&(e.f&dt)!==0;Ea(i,t,a?r:!1)}i=s}}}function Mn(e){e.f&=~Kn,$a(e,!0)}function $a(e,t){if((e.f&Kn)===0&&(e.f&Oe)!==0){e.f^=Oe,(e.f&xe)===0&&(ve(e,ye),Qt.ensure().schedule(e));for(var r=e.first;r!==null;){var n=r.next,i=(r.f&Ft)!==0||(r.f&tt)!==0;$a(r,i?t:!1),r=n}var s=e.nodes&&e.nodes.t;if(s!==null)for(const a of s)(a.is_global||t)&&a.in()}}function pi(e,t){if(e.nodes)for(var r=e.nodes.start,n=e.nodes.end;r!==null;){var i=r===n?null:Zr(r);t.append(r),r=i}}let Tn=!1,It=!1;function Aa(e){It=e}let F=null,_t=!1;function it(e){F=e}let H=null;function at(e){H=e}let Mt=null;function Ma(e){F!==null&&((F.f&bn)!==0||(F.f&Me)!==0)&&(Mt??(Mt=new Set)).add(e)}let Ve=null,je=0,st=null;function Co(e){st=e}let Ta=1,nr=0,ir=nr;function Na(e){ir=e}function Ca(){return++Ta}function Jr(e){var t=e.f;if((t&ye)!==0)return!0;if((t&rt)!==0){for(var r=e.deps,n=r.length,i=0;i<n;i++){var s=r[i];if(Jr(s)&&ra(s),s.wv>e.wv)return!0}(t&pt)!==0&&Ee===null&&ve(e,xe)}return!1}function Oa(e,t,r=!0){var n=e.reactions;if(n!==null&&!(Mt!==null&&Mt.has(e)))for(var i=0;i<n.length;i++){var s=n[i];(s.f&Me)!==0?Oa(s,t,!1):t===s&&(r?ve(s,ye):(s.f&xe)!==0&&ve(s,rt),oi(s))}}function Pa(e){var t=Ve,r=je,n=st,i=F,s=Mt,a=de,o=_t,l=ir,c=e.f;Ve=null,je=0,st=null,F=(c&(tt|Pt))===0?e:null,Mt=null,kr(e.ctx),_t=!1,ir=++nr,e.ac!==null&&(Xr(()=>{e.ac.abort(Wr)}),e.ac=null);try{e.f|=bn;var f=e.fn,v=f();e.f|=yr;var b=Ra(e);if(jr()&&st!==null&&!_t&&b!==null&&(e.f&(Me|rt|ye))===0)for(var h=0;h<st.length;h++)Oa(st[h],e);if(i!==null&&i!==e){if(nr++,i.deps!==null)for(let g=0;g<r;g+=1)i.deps[g].rv=nr;if(t!==null)for(const g of t)g.rv=nr;st!==null&&(n===null?n=st:n.push(...st))}return(e.f&Ht)!==0&&(e.f^=Ht),v}catch(g){return Ra(e),So(g)}finally{e.f^=bn,Ve=t,je=r,st=n,F=i,Mt=s,kr(a),_t=o,ir=l}}function Ra(e){var i;var t=e.deps,r=L==null?void 0:L.is_fork;if(Ve!==null){var n;if(r||en(e,je),t!==null&&je>0)for(t.length=je+Ve.length,n=0;n<Ve.length;n++)t[je+n]=Ve[n];else e.deps=t=Ve;if(ui()&&(e.f&pt)!==0)for(n=je;n<t.length;n++)((i=t[n]).reactions??(i.reactions=[])).push(e)}else!r&&t!==null&&je<t.length&&(en(e,je),t.length=je);return t}function Oo(e,t){let r=t.reactions;if(r!==null){var n=be.call(r,e);if(n!==-1){var i=r.length-1;i===0?r=t.reactions=null:(r[n]=r[i],r.pop())}}if(r===null&&(t.f&Me)!==0&&(Ve===null||!Zt.call(Ve,t))){var s=t;(s.f&pt)!==0&&(s.f^=pt),s.v!==we&&ei(s),s.ac!==null&&Xr(()=>{s.ac.abort(Wr),s.ac=null,ve(s,ye)}),go(s),en(s,0)}}function en(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Oo(e,r[n])}function Mr(e){var t=e.f;if((t&Pe)===0){ve(e,xe);var r=H,n=Tn;H=e,Tn=(t&(tt|Pt))===0;try{(t&(dt|Yn))!==0?To(e):di(e),ka(e);var i=Pa(e);e.teardown=typeof i=="function"?i:null,e.wv=Ta;var s}finally{Tn=n,H=r}}}function p(e){var t=e.f,r=(t&Me)!==0;if(F!==null&&!_t){var n=H!==null&&(H.f&Pe)!==0;if(!n&&(Mt===null||!Mt.has(e))){var i=F.deps;if((F.f&bn)!==0)e.rv<nr&&(e.rv=nr,Ve===null&&i!==null&&i[je]===e?je++:Ve===null?Ve=[e]:Ve.push(e));else{F.deps??(F.deps=[]),Zt.call(F.deps,e)||F.deps.push(e);var s=e.reactions;s===null?e.reactions=[F]:Zt.call(s,F)||s.push(F)}}}if(It&&$t.has(e))return $t.get(e);if(r){var a=e;if(It){var o=a.v;return((a.f&xe)===0&&a.reactions!==null||La(a))&&(o=ri(a)),$t.set(a,o),o}var l=(a.f&pt)===0&&!_t&&F!==null&&(Tn||(F.f&pt)!==0),c=(a.f&yr)===0;Jr(a)&&(l&&(a.f|=pt),ra(a)),l&&!c&&(na(a),Ia(a))}if(Ee!=null&&Ee.has(e))return Ee.get(e);if((e.f&Ht)!==0)throw e.v;return e.v}function Ia(e){if(e.f|=pt,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&Me)!==0&&(t.f&pt)===0&&(na(t),Ia(t))}function La(e){if(e.v===we)return!0;if(e.deps===null)return!1;for(const t of e.deps)if($t.has(t)||(t.f&Me)!==0&&La(t))return!0;return!1}function Wt(e){var t=_t;try{return _t=!0,e()}finally{_t=t}}function ar(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(xt in e)vi(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&xt in r&&vi(r)}}}function vi(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{vi(e[n],t)}catch{}const r=Xn(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=Fi(r);for(let i in n){const s=n[i].get;if(s)try{s.call(e)}catch{}}}}}function Po(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Ro=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Io(e){return Ro.includes(e)}const Lo={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function zo(e){return e=e.toLowerCase(),Lo[e]??e}const Do=["touchstart","touchmove"];function Bo(e){return Do.includes(e)}const sr=Symbol("events"),za=new Set,hi=new Set;function Da(e,t,r,n={}){function i(s){if(n.capture||mi.call(t,s),!s.cancelBubble)return Xr(()=>r==null?void 0:r.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?(i.__removed=!1,Et(()=>{i.__removed||t.addEventListener(e,i,n)})):t.addEventListener(e,i,n),i}function Nn(e,t,r,n,i){var s={capture:n,passive:i},a=Da(e,t,r,s);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&An(()=>{a.__removed=!0,t.removeEventListener(e,a,s)})}function K(e,t,r){(t[sr]??(t[sr]={}))[e]=r}function or(e){for(var t=0;t<e.length;t++)za.add(e[t]);for(var r of hi)r(e)}let _i=null,gi=!1;function mi(e){var S,d;var t=this,r=t.ownerDocument,n=e.type,i=((S=e.composedPath)==null?void 0:S.call(e))||[],s=i[0]||e.target;_i=e,gi||(gi=!0,setTimeout(()=>{gi=!1,_i=null}));var a=0,o=_i===e&&e[sr];if(o){var l=i.indexOf(o);if(l!==-1&&(t===document||t===window)){e[sr]=t;return}var c=i.indexOf(t);if(c===-1)return;l<=c&&(a=l)}if(s=i[a]||e.target,s!==t){Vi(e,"currentTarget",{configurable:!0,get(){return s||r}});var f=F,v=H;it(null),at(null);try{for(var b,h=[];s!==null&&s!==t;){try{var g=(d=s[sr])==null?void 0:d[n];g!=null&&(!s.disabled||e.target===s)&&g.call(s,e)}catch(_){b?h.push(_):b=_}if(e.cancelBubble)break;a++,s=a<i.length?i[a]:null}if(b){for(let _ of h)queueMicrotask(()=>{throw _});throw b}}finally{e[sr]=t,delete e.currentTarget,it(f),at(v)}}}const yi=((fs=globalThis==null?void 0:globalThis.window)==null?void 0:fs.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Vo(e){return(yi==null?void 0:yi.createHTML(e))??e}function Ba(e){var t=ci("template");return t.innerHTML=Vo(e.replaceAll("<!>","<!---->")),t.content}function tn(e,t){var r=H;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function _e(e,t){var r=(t&Us)!==0,n=(t&Ws)!==0,i,s=!e.startsWith("<!>");return()=>{i===void 0&&(i=Ba(s?e:"<!>"+e),r||(i=er(i)));var a=n||ha?document.importNode(i,!0):i.cloneNode(!0);if(r){var o=er(a),l=a.lastChild;tn(o,l)}else tn(a,a);return a}}function Fo(e,t,r="svg"){var n=!e.startsWith("<!>"),i=`<${r}>${n?e:"<!>"+e}</${r}>`,s;return()=>{if(!s){var a=Ba(i),o=er(a);s=er(o)}var l=s.cloneNode(!0);return tn(l,l),l}}function Ho(e,t){return Fo(e,t,"svg")}function Z(){var e=document.createDocumentFragment(),t=document.createComment(""),r=Rt();return e.append(t,r),tn(t,r),e}function A(e,t){e!==null&&e.before(t)}function Uo(e){let t=0,r=Ut(0),n;return()=>{ui()&&(p(r),ba(()=>(t===0&&(n=Wt(()=>e(()=>Kr(r)))),t+=1,()=>{Et(()=>{t-=1,t===0&&(n==null||n(),n=void 0,Kr(r))})})))}}var Wo=Ft|wr;function jo(e,t,r,n){new Xo(e,t,r,n)}class Xo{constructor(t,r,n,i){V(this,le);et(this,"parent");et(this,"is_pending",!1);et(this,"transform_error");V(this,lt);V(this,Ti,null);V(this,ct);V(this,fr);V(this,Ie);V(this,Ke,null);V(this,Le,null);V(this,Ze,null);V(this,Nt,null);V(this,dr,0);V(this,Yt,0);V(this,Lr,!1);V(this,cn,new Set);V(this,un,new Set);V(this,Bt,null);V(this,Dn,Uo(()=>(z(this,Bt,Ut(u(this,dr))),()=>{z(this,Bt,null)})));var s;z(this,lt,t),z(this,ct,r),z(this,fr,a=>{var o=H;o.b=this,o.f|=qn,n(a)}),this.parent=H.b,this.transform_error=i??((s=this.parent)==null?void 0:s.transform_error)??(a=>a),z(this,Ie,Qr(()=>{U(this,le,zi).call(this)},Wo))}defer_effect(t){Ji(t,u(this,cn),u(this,un))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!u(this,ct).pending}update_pending_count(t,r){U(this,le,Di).call(this,t,r),z(this,dr,u(this,dr)+t),!(!u(this,Bt)||u(this,Lr))&&(z(this,Lr,!0),Et(()=>{z(this,Lr,!1),u(this,Bt)&&Ar(u(this,Bt),u(this,dr))}))}get_effect_pending(){return u(this,Dn).call(this),p(u(this,Bt))}error(t){if(!u(this,ct).onerror&&!u(this,ct).failed)throw t;L!=null&&L.is_fork?(u(this,Ke)&&L.skip_effect(u(this,Ke)),u(this,Le)&&L.skip_effect(u(this,Le)),u(this,Ze)&&L.skip_effect(u(this,Ze)),L.oncommit(()=>{U(this,le,Bi).call(this,t)})):U(this,le,Bi).call(this,t)}}lt=new WeakMap,Ti=new WeakMap,ct=new WeakMap,fr=new WeakMap,Ie=new WeakMap,Ke=new WeakMap,Le=new WeakMap,Ze=new WeakMap,Nt=new WeakMap,dr=new WeakMap,Yt=new WeakMap,Lr=new WeakMap,cn=new WeakMap,un=new WeakMap,Bt=new WeakMap,Dn=new WeakMap,le=new WeakSet,Gc=function(){try{z(this,Ke,Be(()=>u(this,fr).call(this,u(this,lt))))}catch(t){this.error(t)}},Yc=function(t){const r=u(this,ct).failed,{reset:n,invoke_onerror:i}=U(this,le,Li).call(this,t);Et(i),r&&z(this,Ze,Be(()=>{r(u(this,lt),()=>t,()=>n)}))},Li=function(t){var r=!1,n=!1;const i=()=>{if(r){qs();return}r=!0,n&&lo(),u(this,Ze)!==null&&rr(u(this,Ze),()=>{z(this,Ze,null)}),U(this,le,jn).call(this,()=>{U(this,le,zi).call(this)})};return{reset:i,invoke_onerror:()=>{var a,o;try{n=!0,(o=(a=u(this,ct)).onerror)==null||o.call(a,t,i),n=!1}catch(l){At(l,u(this,Ie)&&u(this,Ie).parent)}}}},qc=function(){const t=u(this,ct).pending;t&&(this.is_pending=!0,z(this,Le,Be(()=>t(u(this,lt)))),Et(()=>{var r=z(this,Nt,document.createDocumentFragment()),n=Rt(),i=!1;if(r.append(n),z(this,Ke,U(this,le,jn).call(this,()=>{try{return Be(()=>u(this,fr).call(this,n))}catch(s){try{this.error(s),i=!0}catch(a){At(a,u(this,Ie).parent)}return null}})),u(this,Ke)===null){z(this,Nt,null),i&&U(this,le,gn).call(this,L);return}u(this,Yt)===0&&(u(this,lt).before(r),z(this,Nt,null),rr(u(this,Le),()=>{z(this,Le,null)}),U(this,le,gn).call(this,L))}))},zi=function(){try{if(this.is_pending=this.has_pending_snippet(),z(this,Yt,0),z(this,dr,0),z(this,Ke,Be(()=>{u(this,fr).call(this,u(this,lt))})),u(this,Yt)>0){var t=z(this,Nt,document.createDocumentFragment());pi(u(this,Ke),t);const r=u(this,ct).pending;z(this,Le,Be(()=>r(u(this,lt))))}else U(this,le,gn).call(this,L)}catch(r){this.error(r)}},gn=function(t){this.is_pending=!1,t.transfer_effects(u(this,cn),u(this,un))},jn=function(t){var r=H,n=F,i=de;at(u(this,Ie)),it(u(this,Ie)),kr(u(this,Ie).ctx);try{return Qt.ensure(),t()}finally{at(r),it(n),kr(i)}},Di=function(t,r){var n;if(!this.has_pending_snippet()){this.parent&&U(n=this.parent,le,Di).call(n,t,r);return}z(this,Yt,u(this,Yt)+t),u(this,Yt)===0&&(U(this,le,gn).call(this,r),u(this,Le)&&rr(u(this,Le),()=>{z(this,Le,null)}),u(this,Nt)&&(u(this,lt).before(u(this,Nt)),z(this,Nt,null)))},Bi=function(t){u(this,Ke)&&($e(u(this,Ke)),z(this,Ke,null)),u(this,Le)&&($e(u(this,Le)),z(this,Le,null)),u(this,Ze)&&($e(u(this,Ze)),z(this,Ze,null));let r=u(this,ct).failed;const n=i=>{const{reset:s,invoke_onerror:a}=U(this,le,Li).call(this,i);a(),r&&z(this,Ze,U(this,le,jn).call(this,()=>{try{return Be(()=>{var o=H;o.b=this,o.f|=qn,r(u(this,lt),()=>i,()=>s)})}catch(o){return At(o,u(this,Ie).parent),null}}))};Et(()=>{var i;try{i=this.transform_error(t)}catch(s){At(s,u(this,Ie)&&u(this,Ie).parent);return}i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(n,s=>At(s,u(this,Ie)&&u(this,Ie).parent)):n(i)})};function Y(e,t){var r=t==null?"":typeof t=="object"?`${t}`:t;r!==(e[Ur]??(e[Ur]=e.nodeValue))&&(e[Ur]=r,e.nodeValue=`${r}`)}function Go(e,t){return Yo(e,t)}const Cn=new Map;function Yo(e,{target:t,anchor:r,props:n={},events:i,context:s,intro:a=!0,transformError:o}){xo();var l=void 0,c=Ao(()=>{var f=r??t.appendChild(Rt());jo(f,{pending:()=>{}},h=>{kt({});var g=de;s&&(g.c=s),i&&(n.$$events=i),l=e(h,n)||Jn(),St()},o);var v=new Set,b=h=>{for(var g=0;g<h.length;g++){var S=h[g];if(!v.has(S)){v.add(S);var d=Bo(S);for(const w of[t,document]){var _=Cn.get(w);_===void 0&&(_=new Map,Cn.set(w,_));var y=_.get(S);y===void 0?(w.addEventListener(S,mi,{passive:d}),_.set(S,1)):_.set(S,y+1)}}}};return b(mn(za)),hi.add(b),()=>{var d;for(var h of v)for(const _ of[t,document]){var g=Cn.get(_),S=g.get(h);--S==0?(_.removeEventListener(h,mi),g.delete(h),g.size===0&&Cn.delete(_)):g.set(h,S)}hi.delete(b),f!==r&&((d=f.parentNode)==null||d.removeChild(f))}});return qo.set(l,c),l}let qo=new WeakMap;class wi{constructor(t,r=!0){et(this,"anchor");V(this,yt,new Map);V(this,Ct,new Map);V(this,Qe,new Map);V(this,pr,new Set);V(this,fn,!0);V(this,dn,t=>{if(u(this,yt).has(t)){var r=u(this,yt).get(t),n=u(this,Ct).get(r);if(n)Mn(n),u(this,pr).delete(r);else{var i=u(this,Qe).get(r);i&&(Mn(i.effect),u(this,Ct).set(r,i.effect),u(this,Qe).delete(r),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),n=i.effect)}for(const[s,a]of u(this,yt)){if(u(this,yt).delete(s),s===t)break;const o=u(this,Qe).get(a);o&&($e(o.effect),u(this,Qe).delete(a))}for(const[s,a]of u(this,Ct)){if(s===r||u(this,pr).has(s))continue;const o=()=>{if(Array.from(u(this,yt).values()).includes(s)){var c=document.createDocumentFragment();pi(a,c),c.append(Rt()),u(this,Qe).set(s,{effect:a,fragment:c})}else $e(a);u(this,pr).delete(s),u(this,Ct).delete(s)};u(this,fn)||!n?(u(this,pr).add(s),rr(a,o,!1)):o()}}});V(this,Bn,t=>{u(this,yt).delete(t);const r=Array.from(u(this,yt).values());for(const[n,i]of u(this,Qe))r.includes(n)||($e(i.effect),u(this,Qe).delete(n))});this.anchor=t,z(this,fn,r)}ensure(t,r){var n=L,i=ma();if(r&&!u(this,Ct).has(t)&&!u(this,Qe).has(t))if(i){var s=document.createDocumentFragment(),a=Rt();s.append(a),u(this,Qe).set(t,{effect:Be(()=>r(a)),fragment:s})}else u(this,Ct).set(t,Be(()=>r(this.anchor)));if(u(this,yt).set(n,t),i){for(const[o,l]of u(this,Ct))o===t?n.unskip_effect(l):n.skip_effect(l);for(const[o,l]of u(this,Qe))o===t?n.unskip_effect(l.effect):n.skip_effect(l.effect);n.oncommit(u(this,dn)),n.ondiscard(u(this,Bn))}else u(this,dn).call(this,n)}}yt=new WeakMap,Ct=new WeakMap,Qe=new WeakMap,pr=new WeakMap,fn=new WeakMap,dn=new WeakMap,Bn=new WeakMap;function Xe(e,t,r=!1){var n=new wi(e),i=r?Ft:0;function s(a,o){n.ensure(a,o)}Qr(()=>{var a=!1;t((o,l=0)=>{a=!0,s(l,o)}),a||s(-1,null)},i)}function Va(e,t){return t}function Ko(e,t,r){for(var n=[],i=t.length,s,a=t.length,o=0;o<i;o++){let v=t[o];rr(v,()=>{if(s){if(s.pending.delete(v),s.done.add(v),s.pending.size===0){var b=e.outrogroups;bi(e,mn(s.done)),b.delete(s),b.size===0&&(e.outrogroups=null)}}else a-=1},!1)}if(a===0){var l=n.length===0&&r!==null&&e.pending.size===0;if(l){var c=r,f=c.parentNode;ko(f),f.append(c),e.items.clear()}bi(e,t,!l)}else s={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(s)}function bi(e,t,r=!0){var n;if(e.pending.size>0){n=new Set;for(const a of e.pending.values())for(const o of a)n.add(e.items.get(o).e)}for(var i=0;i<t.length;i++){var s=t[i];if(n!=null&&n.has(s)){s.f|=bt;const a=document.createDocumentFragment();pi(s,a)}else $e(t[i],r)}}var Fa;function jt(e,t,r,n,i,s=null){var a=e,o=new Map,l=(t&Yi)!==0;if(l){var c=e;a=c.appendChild(Rt())}var f=null,v=ti(()=>{var w=r();return ae(w)?w:w==null?[]:mn(w)}),b,h=new Map,g=!0;function S(w){(y.effect.f&Pe)===0&&(y.pending.delete(w),y.fallback=f,Zo(y,b,a,t,n),f!==null&&(b.length===0?(f.f&bt)===0?Mn(f):(f.f^=bt,nn(f,null,a)):rr(f,()=>{f=null})))}function d(w){y.pending.delete(w)}var _=Qr(()=>{b=p(v);for(var w=b.length,E=new Set,k=L,$=ma(),T=0;T<w;T+=1){var I=b[T],C=n(I,T),D=g?null:o.get(C);D?(D.v&&Ar(D.v,I),D.i&&Ar(D.i,T),$&&k.unskip_effect(D.e)):(D=Qo(o,g?a:Fa??(Fa=Rt()),I,C,T,i,t,r),g||(D.e.f|=bt),o.set(C,D)),E.add(C)}if(w===0&&s&&!f&&(g?f=Be(()=>s(a)):(f=Be(()=>s(Fa??(Fa=Rt()))),f.f|=bt)),w>E.size&&Js(),!g)if(h.set(k,E),$){for(const[ne,Te]of o)E.has(ne)||k.skip_effect(Te.e);k.oncommit(S),k.ondiscard(d)}else S(k);p(v)}),y={effect:_,items:o,pending:h,outrogroups:null,fallback:f};g=!1}function rn(e){for(;e!==null&&(e.f&tt)===0;)e=e.next;return e}function Zo(e,t,r,n,i){var D,ne,Te,Ue,ke,We,qt,ut,wt;var s=(n&zs)!==0,a=t.length,o=e.items,l=rn(e.effect.first),c,f=null,v,b=[],h=[],g,S,d,_;if(s)for(_=0;_<a;_+=1)g=t[_],S=i(g,_),d=o.get(S).e,(d.f&bt)===0&&((ne=(D=d.nodes)==null?void 0:D.a)==null||ne.measure(),(v??(v=new Set)).add(d));for(_=0;_<a;_+=1){if(g=t[_],S=i(g,_),d=o.get(S).e,e.outrogroups!==null)for(const Se of e.outrogroups)Se.pending.delete(d),Se.done.delete(d);if((d.f&Oe)!==0&&(Mn(d),s&&((Ue=(Te=d.nodes)==null?void 0:Te.a)==null||Ue.unfix(),(v??(v=new Set)).delete(d))),(d.f&bt)!==0)if(d.f^=bt,d===l)nn(d,null,r);else{var y=f?f.next:l;d===e.effect.last&&(e.effect.last=d.prev),d.prev&&(d.prev.next=d.next),d.next&&(d.next.prev=d.prev),Xt(e,f,d),Xt(e,d,y),nn(d,y,r),f=d,b=[],h=[],l=rn(f.next);continue}if(d!==l){if(c!==void 0&&c.has(d)){if(b.length<h.length){var w=h[0],E;f=w.prev;var k=b[0],$=b[b.length-1];for(E=0;E<b.length;E+=1)nn(b[E],w,r);for(E=0;E<h.length;E+=1)c.delete(h[E]);Xt(e,k.prev,$.next),Xt(e,f,k),Xt(e,$,w),l=w,f=$,_-=1,b=[],h=[]}else c.delete(d),nn(d,l,r),Xt(e,d.prev,d.next),Xt(e,d,f===null?e.effect.first:f.next),Xt(e,f,d),f=d;continue}for(b=[],h=[];l!==null&&l!==d;)(c??(c=new Set)).add(l),h.push(l),l=rn(l.next);if(l===null)continue}(d.f&bt)===0&&b.push(d),f=d,l=rn(d.next)}if(e.outrogroups!==null){for(const Se of e.outrogroups)Se.pending.size===0&&(bi(e,mn(Se.done)),(ke=e.outrogroups)==null||ke.delete(Se));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||c!==void 0){var T=[];if(c!==void 0)for(d of c)(d.f&Oe)===0&&T.push(d);for(;l!==null;)(l.f&Oe)===0&&l!==e.fallback&&T.push(l),l=rn(l.next);var I=T.length;if(I>0){var C=(n&Yi)!==0&&a===0?r:null;if(s){for(_=0;_<I;_+=1)(qt=(We=T[_].nodes)==null?void 0:We.a)==null||qt.measure();for(_=0;_<I;_+=1)(wt=(ut=T[_].nodes)==null?void 0:ut.a)==null||wt.fix()}Ko(e,T,C)}}s&&Et(()=>{var Se,ze;if(v!==void 0)for(d of v)(ze=(Se=d.nodes)==null?void 0:Se.a)==null||ze.apply()})}function Qo(e,t,r,n,i,s,a,o){var l=(a&Is)!==0?(a&Ds)===0?wo(r,!1,!1):Ut(r):null,c=(a&Ls)!==0?Ut(i):null;return{v:l,i:c,e:Be(()=>(s(t,l??r,c??i,o),()=>{e.delete(n)}))}}function nn(e,t,r){if(e.nodes)for(var n=e.nodes.start,i=e.nodes.end,s=t&&(t.f&bt)===0?t.nodes.start:r;n!==null;){var a=Zr(n);if(s.before(n),n===i)return;n=a}}function Xt(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function oe(e,t,r,n,i){var o,l;if((o=t.$$host)!=null&&o.$$shadowRoot){const c=ci("slot");A(e,c);return}var s=(l=t.$$slots)==null?void 0:l[r],a=!1;s===!0&&(s=t.children,a=!0),s===void 0||s(e,a?()=>n:n)}function Jo(e,t,r){var n=new wi(e);Qr(()=>{var i=t()??null;n.ensure(i,i&&(s=>r(s,i)))},Ft)}function el(e,t,r,n,i,s){var a=null,o=e,l=new wi(o,!1);Qr(()=>{const c=t()||null;var f=js;if(c===null){l.ensure(null,null);return}return l.ensure(c,v=>{if(c){if(a=ci(c,f),tn(a,a),n){var b=null,h=a.appendChild(Rt());n(a,h),b==null||b.remove()}H.nodes.end=a,v.before(a)}}),()=>{}},Ft),An(()=>{})}function tl(e,t){var r=void 0,n;xa(()=>{r!==(r=t())&&(n&&($e(n),n=null),r&&(n=Be(()=>{fi(()=>r(e))})))})}function Ha(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=Ha(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function rl(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=Ha(e))&&(n&&(n+=" "),n+=t);return n}function Tr(e){return typeof e=="object"?rl(e):e??""}const Ua=[...` 	
\r\f \v\uFEFF`];function nl(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var i of Object.keys(r))if(r[i])n=n?n+" "+i:i;else if(n.length)for(var s=i.length,a=0;(a=n.indexOf(i,a))>=0;){var o=a+s;(a===0||Ua.includes(n[a-1]))&&(o===n.length||Ua.includes(n[o]))?n=(a===0?"":n.substring(0,a))+n.substring(o+1):a=o}}return n===""?null:n}function Wa(e,t=!1){var r=t?" !important;":";",n="";for(var i of Object.keys(e)){var s=e[i];s!=null&&s!==""&&(n+=" "+i+": "+s+r)}return n}function xi(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function il(e,t){if(t){var r="",n,i;if(Array.isArray(t)?(n=t[0],i=t[1]):n=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var s=!1,a=0,o=!1,l=[];n&&l.push(...Object.keys(n).map(xi)),i&&l.push(...Object.keys(i).map(xi));var c=0,f=-1;const S=e.length;for(var v=0;v<S;v++){var b=e[v];if(o?b==="/"&&e[v-1]==="*"&&(o=!1):s?s===b&&(s=!1):b==="/"&&e[v+1]==="*"?o=!0:b==='"'||b==="'"?s=b:b==="("?a++:b===")"&&a--,!o&&s===!1&&a===0){if(b===":"&&f===-1)f=v;else if(b===";"||v===S-1){if(f!==-1){var h=xi(e.substring(c,f).trim());if(!l.includes(h)){b!==";"&&v++;var g=e.substring(c,v).trim();r+=" "+g+";"}}c=v+1,f=-1}}}}return n&&(r+=Wa(n)),i&&(r+=Wa(i,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Fe(e,t,r,n,i,s){var a=e[Zn];if(a!==r||a===void 0){var o=nl(r,n,s);o==null?e.removeAttribute("class"):t?e.className=o:e.setAttribute("class",o),e[Zn]=r}else if(s&&i!==s)for(var l in s){var c=!!s[l];(i==null||c!==!!i[l])&&e.classList.toggle(l,c)}return s}function ki(e,t={},r,n){for(var i in r){var s=r[i];t[i]!==s&&(r[i]==null?e.style.removeProperty(i):e.style.setProperty(i,s,n))}}function Si(e,t,r,n){var i=e[Qn];if(i!==t){var s=il(t,n);s==null?e.removeAttribute("style"):e.style.cssText=s,e[Qn]=t}else n&&(Array.isArray(n)?(ki(e,r==null?void 0:r[0],n[0]),ki(e,r==null?void 0:r[1],n[1],"important")):ki(e,r,n));return n}function ja(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Xa(e,t){var r=!("__defaultValue"in e);!r&&e.__defaultValue===t||(e.__defaultValue=t,Ga(e,!r||"__value"in e))}function Ga(e,t){var r=e.__defaultValue,n=e.multiple,i=n?r??[]:null;if(!(n&&!ae(i))){var s=e.selectedIndex,a=t&&n?new Set(e.selectedOptions):null;for(var o of e.options){var l=Ei(o);ja(o,n?i.includes(l):pa(l,r))}if(t)if(a!==null)for(o of e.options){var c=a.has(o);o.selected!==c&&(o.selected=c)}else e.selectedIndex!==s&&(e.selectedIndex=s)}}function Lt(e,t,r=!1){if(e.multiple){if(t==null)return;if(!ae(t))return Ys();for(var n of e.options)n.selected=t.includes(Ei(n));return}for(n of e.options){var i=Ei(n);if(pa(i,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function lr(e){var t=new MutationObserver(r=>{r.every(al)||("__defaultValue"in e&&Ga(e,!1),"__value"in e&&Lt(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),An(()=>{t.disconnect()})}function Ei(e){return"__value"in e?e.__value:e.value}function al(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(r=>r.nodeName==="SELECTEDCONTENT")}return!1}const an=Symbol("class"),sn=Symbol("style"),Ya=Symbol("is custom element"),qa=Symbol("is html"),sl=kn?"input":"INPUT",ol=kn?"option":"OPTION",Ka=kn?"select":"SELECT",ll=kn?"progress":"PROGRESS";function On(e,t){var r=Pn(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==ll)||(e.value=t??"")}function cl(e,t){var r=Pn(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function Ae(e,t,r,n){var i=Pn(e);i[t]!==(i[t]=r)&&(t==="loading"&&(e[Rs]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Ja(e).has(t)?e[t]=r:e.setAttribute(t,r))}function ul(e,t,r,n,i=!1,s=!1){var a=Pn(e),o=a[Ya],l=!a[qa],c=t||{},f=e.nodeName===ol,v=e.nodeName===Ka;for(var b in t)!(b in r)&&b[0]+b[1]!=="$$"&&(r[b]=null);r.class?r.class=Tr(r.class):r[an]&&(r.class=null),r[sn]&&(r.style??(r.style=null));var h=Ja(e);if(e.nodeName===sl&&"type"in r&&("value"in r||"__value"in r)){var g=r.type;(g!==c.type||g===void 0&&e.hasAttribute("type"))&&(c.type=g,Ae(e,"type",g))}for(const k in r){let $=r[k];if(f&&k==="value"&&$==null){e.value=e.__value="",c[k]=$;continue}if(k==="class"){var S=e.namespaceURI==="http://www.w3.org/1999/xhtml";Fe(e,S,$,n,t==null?void 0:t[an],r[an]),c[k]=$,c[an]=r[an];continue}if(k==="style"){Si(e,$,t==null?void 0:t[sn],r[sn]),c[k]=$,c[sn]=r[sn];continue}var d=c[k];if(!($===d&&!($===void 0&&e.hasAttribute(k)))){c[k]=$;var _=k[0]+k[1];if(_!=="$$")if(_==="on"){const T={},I="$$"+k;let C=k.slice(2);var y=Io(C);if(Po(C)&&(C=C.slice(0,-7),T.capture=!0),!y&&d){if($!=null)continue;e.removeEventListener(C,c[I],T),c[I]=null}if(y)K(C,e,$),or([C]);else if($!=null){let D=function(ne){c[k].call(this,ne)};c[I]=Da(C,e,D,T)}}else if(k==="style")Ae(e,k,$);else if(k==="autofocus")po(e,!!$);else if(!o&&(k==="__value"||k==="value"&&$!=null))e.value=e.__value=$;else if(k==="selected"&&f)ja(e,$);else{var w=k;l||(w=zo(w));var E=w==="defaultValue"||w==="defaultChecked";if(v&&w==="defaultValue")continue;if($==null&&!o&&!E)if(a[k]=null,w==="value"||w==="checked"){let T=e;const I=t===void 0;if(w==="value"){let C=T.defaultValue;T.removeAttribute(w),T.defaultValue=C,T.value=T.__value=I?C:null}else{let C=T.defaultChecked;T.removeAttribute(w),T.defaultChecked=C,T.checked=I?C:!1}}else e.removeAttribute(k);else E||(o||typeof $!="string")&&h.has(w)?(e[w]=$,w in a&&(a[w]=we)):typeof $!="function"&&Ae(e,w,$)}}}return c}function Za(e,t,r=[],n=[],i=[],s,a=!1,o=!1){ea(i,r,n,l=>{var c=void 0,f={},v=e.nodeName===Ka,b=!1;if(xa(()=>{var g=t(...l.map(p)),S=ul(e,c,g,s,a,o);if(b&&v){var d=e;"defaultValue"in g&&Xa(d,g.defaultValue),"value"in g&&Lt(d,g.value)}for(let y of Object.getOwnPropertySymbols(f))g[y]||$e(f[y]);for(let y of Object.getOwnPropertySymbols(g)){var _=g[y];y.description===Xs&&(!c||_!==c[y])&&(f[y]&&$e(f[y]),f[y]=Be(()=>tl(e,()=>_))),S[y]=_}c=S}),v){var h=e;fi(()=>{var g=c;"defaultValue"in g&&Xa(h,g.defaultValue),Lt(h,g.value,!0),lr(h)})}b=!0})}function Pn(e){return e[xn]??(e[xn]={[Ya]:e.nodeName.includes("-"),[qa]:e.namespaceURI===Ki})}var Qa=new Map;function Ja(e){var t=e.getAttribute("is")||e.nodeName,r=Qa.get(t);if(r)return r;Qa.set(t,r=new Set);for(var n,i=e,s=Element.prototype;s!==i;){n=Fi(i);for(var a in n)n[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&r.add(a);i=Xn(i)}return r}function $i(e,t){return e===t||(e==null?void 0:e[xt])===t}function Ai(e=Jn(),t,r,n){var i=de.r,s=H;return fi(()=>{var a,o;return ba(()=>{a=o,o=[],Wt(()=>{$i(r(...o),e)||(t(e,...o),a&&$i(r(...a),e)&&t(null,...a))})}),()=>{let l=s;for(;l!==i&&l.parent!==null&&l.parent.f&yn;)l=l.parent;const c=()=>{o&&$i(r(...o),e)&&t(null,...o)},f=l.teardown;l.teardown=()=>{c(),f==null||f()}}}),e}function fl(e=!1){const t=de,r=t.l.u;if(!r)return;let n=()=>ar(t.s);if(e){let i=0,s={};const a=Er(()=>{let o=!1;const l=t.s;for(const c in l)l[c]!==s[c]&&(s[c]=l[c],o=!0);return o&&i++,i});n=()=>p(a)}r.b.length&&$o(()=>{es(t,n),Gn(r.b)}),tr(()=>{const i=Wt(()=>r.m.map(Os));return()=>{for(const s of i)typeof s=="function"&&s()}}),r.a.length&&tr(()=>{es(t,n),Gn(r.a)})}function es(e,t){if(e.l.s)for(const r of e.l.s)p(r);t()}let Rn=!1;function dl(e){var t=Rn;try{return Rn=!1,[e(),Rn]}finally{Rn=t}}const pl={get(e,t){if(!e.exclude.includes(t))return p(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var n=H;try{at(e.parent_effect),e.special[t]=gt({get[t](){return e.props[t]}},t,qi)}finally{at(n)}}return e.special[t](r),ua(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),ua(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function se(e,t){return new Proxy({props:e,exclude:t,special:{},version:Ut(0),parent_effect:H},pl)}const vl={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Fr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let i=e.props[n];Fr(i)&&(i=i());const s=Vt(i,t);if(s&&s.set)return s.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Fr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const i=Vt(n,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===xt||t===Gi)return!1;for(let r of e.props)if(Fr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Fr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function ce(...e){return new Proxy({props:e},vl)}function gt(e,t,r,n){var E;var i=!xr||(r&Vs)!==0,s=(r&Fs)!==0,a=(r&Hs)!==0,o=n,l=!0,c=void 0,f=()=>a&&i?(c??(c=Er(n)),p(c)):(l&&(l=!1,o=a?Wt(n):n),o);let v;if(s){var b=xt in e||Gi in e;v=((E=Vt(e,t))==null?void 0:E.set)??(b&&t in e?k=>e[t]=k:void 0)}var h,g=!1;s?[h,g]=dl(()=>e[t]):h=e[t],h===void 0&&n!==void 0&&(h=f(),v&&(i&&io(),v(h)));var S;if(i?S=()=>{var k=e[t];return k===void 0?f():(l=!0,k)}:S=()=>{var k=e[t];return k!==void 0&&(o=void 0),k===void 0?o:k},i&&(r&qi)===0)return S;if(v){var d=e.$$legacy;return(function(k,$){return arguments.length>0?((!i||!$||d||g)&&v($?S():k),k):S()})}var _=!1,y=((r&Bs)!==0?Er:ti)(()=>(_=!1,S()));s&&p(y);var w=H;return(function(k,$){if(arguments.length>0){const T=$?p(y):i&&s?Re(k):k;return N(y,T),_=!0,o!==void 0&&(o=T),k}return It&&_||(w.f&Pe)!==0?y.v:p(y)})}function Mi(e){de===null&&Zs(),xr&&de.l!==null?hl(de).m.push(e):tr(()=>{const t=Wt(e);if(typeof t=="function")return t})}function hl(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const _l="5";typeof window<"u"&&((ds=window.__svelte??(window.__svelte={})).v??(ds.v=new Set)).add(_l);const Q=Re({ready:!1,cleanScreen:!1,panelOpen:!0,settingsOpen:!1,startupOpen:!0,focusSection:null,focusNonce:0,popupSection:null,dockExpanded:!1,status:{}});function gl(e){Q.popupSection=Q.popupSection===e?null:e}const Ge=Re({});function ts(e){try{return structuredClone(e)}catch{return JSON.parse(JSON.stringify(e))}}function re(e){var t,r,n;if(e==null)return e;try{return((n=(r=(t=window.XRA)==null?void 0:t.i18n)==null?void 0:r.t)==null?void 0:n.call(r,e))??e}catch{return e}}function He(e,t){const r=e.split(".");let n=Ge;for(const i of r){if(n==null)return t;n=n[i]}return n===void 0?t:n}function ml(e){var r,n,i,s,a,o,l,c;const t=window.XRA;if(t){if(e.startsWith("background.")){(n=(r=t.background)==null?void 0:r.apply)==null||n.call(r);return}if(e==="ui.language"){(s=(i=t.i18n)==null?void 0:i.setLanguage)==null||s.call(i,Ge.ui.language);return}if(e==="ui.preview_wireframe"){typeof t.applyMocapWireframeVisibility=="function"&&t.applyMocapWireframeVisibility();return}if(e==="ui.mocap_view"){typeof t.applyMocapWireframeVisibility=="function"&&t.applyMocapWireframeVisibility();return}if(e.startsWith("performance.")){window.XRA_render_fps_limit=Number(Ge.performance.render_fps??60),window.XRA_gpu_preference=String(Ge.performance.gpu_preference||"default"),window.XRA_preserve_drawing_buffer=Ge.performance.preserve_drawing_buffer!==!1,window.XRA_antialias=Ge.performance.antialias!=="off",(o=(a=t.events)==null?void 0:a.emit)==null||o.call(a,"performance",Ge.performance);return}(c=(l=t.events)==null?void 0:l.emit)==null||c.call(l,"config-change",{path:e,value:He(e)})}}function ot(e,t){var s,a;const r=window.XRA,n=e.split(".");let i=Ge;for(let o=0;o<n.length-1;o++)i[n[o]]==null&&(i[n[o]]={}),i=i[n[o]];if(i[n[n.length-1]]=t,r!=null&&r.config){let o=r.config;for(let l=0;l<n.length-1;l++)o[n[l]]==null&&(o[n[l]]={}),o=o[n[l]];o[n[n.length-1]]=t}ml(e);try{(a=(s=r==null?void 0:r.profileService)==null?void 0:s.save)==null||a.call(s)}catch{}}function In(e,t,r){return new Promise((n,i)=>{const s=setTimeout(()=>i(new Error(`${r} timed out after ${t} ms`)),t);Promise.resolve(e).then(a=>{clearTimeout(s),n(a)},a=>{clearTimeout(s),i(a)})})}async function rs({timeout:e=12e3,dataTimeout:t=8e3}={}){var n,i,s;const r=(n=window.XRA)==null?void 0:n.nativeBridge;if(!(r!=null&&r.startNativeStreamer))throw new Error("native bridge unavailable");try{await In(r.startNativeStreamer(),e,"Camera start");const a=performance.now()+t;for(;performance.now()<a;){if((i=r.cameraDataReady)!=null&&i.call(r))return!0;await new Promise(o=>setTimeout(o,120))}return!0}catch(a){try{await((s=r.forceStopCamera)==null?void 0:s.call(r))}catch{}throw a}}async function yl({timeout:e=8e3}={}){var r,n;const t=(r=window.XRA)==null?void 0:r.nativeBridge;if(t!=null&&t.stopNativeStreamer)try{await In(t.stopNativeStreamer(),e,"Camera stop")}catch(i){try{await((n=t.forceStopCamera)==null?void 0:n.call(t))}catch{}throw i}}async function wl({timeout:e=12e3,readyTimeout:t=6e3}={}){var n,i,s,a;const r=(n=window.XRA)==null?void 0:n.recorder;if(!(r!=null&&r.start))throw new Error("recorder unavailable");try{await In(r.start(),e,"Recording start");const o=performance.now()+t;for(;performance.now()<o;){if((s=(i=r.status)==null?void 0:i.call(r))!=null&&s.active)return!0;await new Promise(l=>setTimeout(l,120))}return!0}catch(o){try{await((a=r.stop)==null?void 0:a.call(r))}catch{}throw o}}async function bl({timeout:e=8e3}={}){var r,n;const t=(r=window.XRA)==null?void 0:r.recorder;if(t!=null&&t.stop)try{await In(t.stop(),e,"Recording stop")}catch(i){try{await((n=t.stop)==null?void 0:n.call(t))}catch{}throw i}}function Ln(){var e,t,r;Q.cleanScreen=!Q.cleanScreen,document.body.classList.toggle("xra-total-clean-screen",Q.cleanScreen);try{(r=(t=(e=window.XRA)==null?void 0:e.ui)==null?void 0:t.setHidden)==null||r.call(t,Q.cleanScreen)}catch{}}function xl(){var e;try{Object.assign(Ge,ts(((e=window.XRA)==null?void 0:e.config)||{}))}catch{}}function ns(){var e;try{const t=(e=window.SA_bridge)==null?void 0:e.backend;t&&typeof t.status=="function"&&(Q.status=t.status()||{})}catch{}}function kl(){const e=()=>window.XRA&&window.XRA.config?(Object.assign(Ge,ts(window.XRA.config)),Q.ready=!0,ns(),window.addEventListener("keydown",t=>{t.key==="Escape"&&Q.cleanScreen&&(t.preventDefault(),Ln())},!0),!0):!1;if(!e()){const t=setInterval(()=>{e()&&clearInterval(t)},200)}}const Sl={camera:{title:"Camera",icon:"Camera"},devices:{title:"Devices",icon:"SlidersHorizontal"},pose_model:{title:"Pose model",icon:"PersonStanding"},performance:{title:"Performance",icon:"Zap"},tracking:{title:"Motion capture",icon:"Activity"},body:{title:"Body",icon:"PersonStanding"},collider:{title:"Body collider",icon:"Shield"},lip:{title:"Audio & Lip-sync",icon:"Mic"},background:{title:"Background",icon:"Image"},avatar:{title:"Character position (avatar only)",icon:"User"},second_avatar:{title:"Remote avatar (Studio Link)",icon:"Globe"},stage:{title:"3D Stage & Environment",icon:"Landmark"},recorder:{title:"Recording / capture",icon:"Video"},visual_effects:{title:"Visual effects",icon:"Sparkles"},debug:{title:"Diagnostics",icon:"Bug"},ui:{title:"UI & overlays",icon:"Monitor"}},is=["performance","tracking","body","collider","lip","background","stage","avatar","second_avatar","recorder","visual_effects","debug","ui","camera","devices","pose_model"],El=new Set(["left_settings","_custom_","_excluded_"]),$l=new Set(["camera.view_presets","camera.selected_view_preset","ui.preview_video","ui.preview_wireframe","ui.preview_debug","performance.auto_last_result","recorder.output_dir"]);function as(e){const t=String(e).replace(/_/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").trim();return t.charAt(0).toUpperCase()+t.slice(1)}const Al={"ui.language":{type:"select",options:()=>{var e,t;return((t=(e=window.XRA)==null?void 0:e.i18n)==null?void 0:t.LANGUAGES)||[["en","English"]]}},"background.mode":{type:"select",options:[["color","Color"],["image","Image"],["none","None (transparent · OBS)"]]},"background.color":{type:"color"},"background.path":{type:"text"},"ui.mocap_view":{type:"select",label:"Mocap window",options:[["off","Off"],["both","Webcam + skeleton"],["wireframe","Skeleton only"],["video","Webcam only"]]},"ui.mocap_visibility":{type:"select",label:"Mocap window visibility",options:[["always","Always on (black while idle)"],["auto","Auto (hide when tracking is off)"]]},"performance.tracking_pipeline":{type:"select",label:"Tracking mode",options:[["FULL_BODY","Full Body"],["FACE","Face only"],["UPPER_BODY","Upper body"]]},"performance.render_resolution":{type:"select",options:[["720p","720p (HD · GPU Saving)"],["1080p","1080p (Full HD · Recommended)"],["1440p","1440p (2K · High resolution)"]]},"performance.render_fps":{type:"slider",min:15,max:240,step:1},"performance.gpu_preference":{type:"select",label:"Graphics card (GPU)",options:[["default","Default"],["high-performance","Dedicated GPU (High Performance)"],["low-power","Integrated GPU (Low Power)"]]},"performance.shadows":{type:"select",options:[["auto","Auto"],["on","Enabled"],["off","Disabled (GPU saving)"]]},"performance.antialias":{type:"select",label:"Anti-Aliasing (AA)",options:[["auto","Enabled (Hardware MSAA · Recommended)"],["off","Disabled"]]},"performance.spring_bone":{type:"select",label:"Hair/cloth physics (Spring Bone)",options:[["full","Full (every frame)"],["half","Half (1 frame out of 2 · Saving)"],["off","Off"]]},"performance.infer_mode":{type:"select",options:[["native","Native (Auto)"],["640x360","640×360 (Recommended · 30 FPS smooth)"],["640x480","640×480 (Standard 4:3 format)"],["1280x720","1280×720 (HD 720p · High precision)"]]},"performance.pose_fps":{type:"slider",min:5,max:30,step:1},"performance.hand_fps":{type:"slider",min:5,max:30,step:1},"performance.min_tracking_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_pose_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_face_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_joint_confidence":{type:"slider",min:.05,max:1,step:.05},"tracking.hand_recovery_mode":{type:"select",options:[["normal","Normal"],["aggressive","Aggressive"],["off","Off"]]},"tracking.hand_detection_sensitivity":{type:"select",options:[["high","High"],["normal","Normal"],["low","Low"]]},"tracking.stabilize_hand_percent":{type:"slider",min:0,max:100,step:1},"tracking.stabilize_arm":{type:"slider",min:0,max:100,step:1},"tracking.stabilize_arm_time":{type:"slider",min:0,max:2,step:.05},"tracking.native_smoothing":{type:"slider",min:0,max:1,step:.01},"tracking.body_bend_reduction":{type:"slider",min:0,max:1,step:.01},"tracking.upper_body_guard_strength":{type:"slider",min:0,max:1,step:.01},"tracking.guard_jump_deg":{type:"slider",min:5,max:120,step:1},"tracking.guard_hold_ms":{type:"slider",min:0,max:2e3,step:10},"tracking.guard_reacquire_deg":{type:"slider",min:5,max:120,step:1},"tracking.adaptive_smoothing_strength":{type:"slider",min:0,max:1,step:.01},"tracking.guard_confidence_min":{type:"slider",min:0,max:1,step:.01},"tracking.guard_release_ms":{type:"slider",min:0,max:2e3,step:10},"tracking.guard_mode":{type:"select",options:[["off","Off"],["auto","Auto"]]},"tracking.desk_torso_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_hips_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_legs_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_max_yaw_deg":{type:"slider",min:0,max:90,step:1},"tracking.desk_max_pitch_deg":{type:"slider",min:0,max:90,step:1},"tracking.desk_max_roll_deg":{type:"slider",min:0,max:90,step:1},"body.anchor_strength":{type:"slider",min:0,max:1,step:.01},"body.transition_ms":{type:"slider",min:0,max:2e3,step:10},"avatar.offset_x":{type:"slider",min:-5,max:5,step:.01},"avatar.offset_y":{type:"slider",min:-5,max:5,step:.01},"avatar.offset_z":{type:"slider",min:-5,max:5,step:.01},"avatar.rotation_y":{type:"slider",min:-180,max:180,step:1},"second_avatar.offset_x":{type:"slider",min:-20,max:20,step:.1},"second_avatar.offset_y":{type:"slider",min:-10,max:10,step:.1},"second_avatar.offset_z":{type:"slider",min:-10,max:10,step:.1},"second_avatar.rotation_y":{type:"slider",min:-180,max:180,step:1},"stage.scale":{type:"slider",min:.1,max:5,step:.01},"stage.rotation_x":{type:"slider",min:-180,max:180,step:1},"stage.rotation_y":{type:"slider",min:-180,max:180,step:1},"stage.rotation_z":{type:"slider",min:-180,max:180,step:1},"stage.offset_x":{type:"slider",min:-10,max:10,step:.05},"stage.offset_y":{type:"slider",min:-10,max:10,step:.05},"stage.offset_z":{type:"slider",min:-10,max:10,step:.05},"stage.scene_zoom":{type:"slider",min:.5,max:3,step:.01},"stage.lights_intensity":{type:"slider",min:0,max:3,step:.05},"collider.preset":{type:"select",options:[["CUSTOM","Custom"],["NONE","None"]]},"collider.reaction":{type:"select",options:[["z_push","Z push"],["bounce","Bounce"],["block","Block"]]},"collider.head":{type:"slider",min:0,max:200,step:1},"collider.chest":{type:"slider",min:0,max:200,step:1},"collider.waist":{type:"slider",min:0,max:200,step:1},"collider.hip":{type:"slider",min:0,max:200,step:1},"collider.front_clearance":{type:"slider",min:0,max:50,step:1},"lip.analysis_fps":{type:"slider",min:5,max:60,step:1},"lip.fft_size":{type:"select",label:"FFT size",options:[["256","256"],["512","512"],["1024","1024"],["2048","2048"]]},"lip.mic_mix":{type:"slider",min:0,max:1,step:.01},"lip.threshold":{type:"slider",min:0,max:.2,step:.001},"lip.response_gain":{type:"slider",min:0,max:3,step:.05},"lip.vowel_emphasis":{type:"slider",min:0,max:3,step:.05},"recorder.mode":{type:"select",label:"Recording source",options:[["video_audio","Video + Audio"],["video","Video only"],["audio","Audio only"]]},"recorder.audio_only_variant":{type:"select",label:"Audio only mode",options:[["both","Processed + RAW"],["processed","Processed"],["raw","RAW"]]},"recorder.capture_source":{type:"select",label:"Output source",options:[["classic_v74","Classic output · recommended"],["clean_scene","Clean scene output · experimental (no UI)"],["native_xr","XR native video only · fallback"]]},"recorder.output_format":{type:"select",options:[["webm","WebM"],["mp4","MP4"]]},"recorder.audio_profile":{type:"select",options:[["podcast","Podcast"],["call","Call (Browser echo/noise filters)"]]},"recorder.hardware_encode":{type:"select",options:[["auto","Auto"],["on","On"],["off","Off (CPU)"]]},"recorder.width":{type:"slider",min:320,max:3840,step:2},"recorder.height":{type:"slider",min:240,max:2160,step:2},"recorder.fps":{type:"slider",min:15,max:60,step:1},"recorder.gate_threshold_db":{type:"slider",min:-80,max:-5,step:.5},"recorder.gate_hold_ms":{type:"slider",min:0,max:1e3,step:10},"recorder.gate_release_ms":{type:"slider",min:0,max:1e3,step:10},"recorder.video_bps":{type:"slider",min:5e5,max:2e7,step:1e5},"recorder.audio_bps":{type:"slider",min:32e3,max:32e4,step:8e3},"recorder.segment_minutes":{type:"select",options:[["0","Off"],["30","Every 30 min"],["60","Every 60 min"]]},"recorder.raw_audio_format":{type:"select",options:[["flac","FLAC (lossless)"],["wav","WAV (large)"]]},"recorder.filename":{type:"text"},"camera.optimized":{type:"toggle"},"camera.width":{type:"slider",min:160,max:1920,step:2},"camera.height":{type:"slider",min:120,max:1080,step:2},"camera.fps":{type:"slider",min:5,max:60,step:1}};function Ml(e){const t=[];for(const[r,n]of Object.entries(e||{})){if(El.has(r)||!n||typeof n!="object"||Array.isArray(n))continue;const i=Sl[r]||{},s=[];for(const[a,o]of Object.entries(n)){const l=`${r}.${a}`;if($l.has(l))continue;const c=Al[l]||{};if(c.hidden||o!==null&&typeof o=="object")continue;const f=c.type||(typeof o=="boolean"?"toggle":typeof o=="number"?"number":"text");s.push({type:f,path:l,label:c.label||as(a),min:c.min,max:c.max,step:c.step,options:c.options})}s.length&&t.push({id:r,title:i.title||as(r),icon:i.icon||"⚙",controls:s})}return t.sort((r,n)=>{const i=is.indexOf(r.id),s=is.indexOf(n.id);return(i<0?999:i)-(s<0?999:s)}),t}var Tl=_e("<option> </option>"),Nl=_e("<select></select>"),Cl=_e("<select><option> </option><option> </option></select>"),Ol=_e('<span class="xra-val"> </span> <input type="range"/>',1),Pl=_e('<input type="checkbox"/>'),Rl=_e('<input type="color"/>'),Il=_e('<input type="number"/>'),Ll=_e('<input type="text"/>'),zl=_e('<label><span class="xra-row-label"> </span> <!></label>');function Dl(e,t){kt(t,!0);const r=nt(()=>typeof t.control.options=="function"?t.control.options():t.control.options||[]),n=_=>_===!1?"off":"auto",i=_=>_==="off"?!1:null;var s=zl();let a;var o=B(s),l=q(o,!0),c=P(o,2);{var f=_=>{var y=Nl();jt(y,21,()=>p(r),Va,(E,k)=>{var $=Tl(),T=q($,!0),I={};he(C=>{Y(T,C),I!==(I=p(k)[0])&&($.value=($.__value=I)??"")},[()=>re(p(k)[1])]),A(E,$)});var w;lr(y),he(E=>{w!==(w=E)&&(y.value=(y.__value=w)??"",Lt(y,w))},[()=>He(t.control.path)]),K("change",y,E=>ot(t.control.path,E.currentTarget.value)),A(_,y)},v=_=>{var y=Cl(),w=B(y),E=q(w,!0);w.value=w.__value="auto";var k=P(w),$=q(k,!0);k.value=k.__value="off";var T;lr(y),he((I,C,D)=>{Y(E,I),Y($,C),T!==(T=D)&&(y.value=(y.__value=T)??"",Lt(y,T))},[()=>re("Auto (follow tracking)"),()=>re("Off"),()=>n(He(t.control.path))]),K("change",y,I=>ot(t.control.path,i(I.currentTarget.value))),A(_,y)},b=_=>{var y=Ol(),w=G(y),E=q(w,!0),k=P(w,2);he(($,T)=>{Y(E,$),Ae(k,"min",t.control.min),Ae(k,"max",t.control.max),Ae(k,"step",t.control.step),On(k,T)},[()=>He(t.control.path),()=>He(t.control.path,t.control.min)]),K("input",k,$=>ot(t.control.path,Number($.currentTarget.value))),A(_,y)},h=_=>{var y=Pl();he(w=>cl(y,w),[()=>!!He(t.control.path)]),K("change",y,w=>ot(t.control.path,w.currentTarget.checked)),A(_,y)},g=_=>{var y=Rl();he(w=>On(y,w),[()=>He(t.control.path)]),K("input",y,w=>ot(t.control.path,w.currentTarget.value)),A(_,y)},S=_=>{var y=Il();he(w=>{Ae(y,"step",t.control.step||"any"),On(y,w)},[()=>He(t.control.path,0)]),K("input",y,w=>ot(t.control.path,Number(w.currentTarget.value))),A(_,y)},d=_=>{var y=Ll();he(w=>On(y,w),[()=>He(t.control.path,"")]),K("change",y,w=>ot(t.control.path,w.currentTarget.value)),A(_,y)};Xe(c,_=>{t.control.type==="select"?_(f):t.control.type==="tristate"?_(v,1):t.control.type==="slider"?_(b,2):t.control.type==="toggle"?_(h,3):t.control.type==="color"?_(g,4):t.control.type==="number"?_(S,5):t.control.type==="text"&&_(d,6)})}he(_=>{a=Fe(s,1,"xra-row",null,a,{"xra-row-slider":t.control.type==="slider"}),Y(l,_)},[()=>re(t.control.label)]),A(e,s),St()}or(["change","input"]);function ss(e,t){kt(t,!0);var r=Z(),n=G(r);jt(n,17,()=>t.section.controls,i=>i.path,(i,s)=>{var a=Z(),o=G(a);{var l=f=>{Dl(f,{get control(){return p(s)}})},c=nt(()=>!p(s).when||p(s).when(Ge));Xe(o,f=>{p(c)&&f(l)})}A(i,a)}),A(e,r),St()}co();/**
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
 */const Bl={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
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
 */const Vl=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
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
 */const os=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();var Fl=Ho("<svg><!><!></svg>");function ue(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]),n=se(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);kt(t,!1);let i=gt(t,"name",8,void 0),s=gt(t,"color",8,"currentColor"),a=gt(t,"size",8,24),o=gt(t,"strokeWidth",8,2),l=gt(t,"absoluteStrokeWidth",8,!1),c=gt(t,"iconNode",24,()=>[]);fl();var f=Fl();Za(f,(h,g,S)=>({...Bl,...h,...n,width:a(),height:a(),stroke:s(),"stroke-width":g,class:S}),[()=>Vl(n)?void 0:{"aria-hidden":"true"},()=>(ar(l()),ar(o()),ar(a()),Wt(()=>l()?Number(o())*24/Number(a()):o())),()=>(ar(os),ar(i()),ar(r),Wt(()=>os("lucide-icon","lucide",i()?`lucide-${i()}`:"",r.class)))]);var v=B(f);jt(v,1,c,Va,(h,g)=>{var S=nt(()=>Wi(p(g),2));let d=()=>p(S)[0],_=()=>p(S)[1];var y=Z(),w=G(y);el(w,d,!0,(E,k)=>{Za(E,()=>({..._()}))}),A(h,y)});var b=P(v);oe(b,t,"default",{}),A(e,f),St()}function Hl(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];ue(e,ce({name:"camera"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);oe(o,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function Ul(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 5H3"}],["path",{d:"M12 19H3"}],["path",{d:"M14 3v4"}],["path",{d:"M16 17v4"}],["path",{d:"M21 12h-9"}],["path",{d:"M21 19h-5"}],["path",{d:"M21 5h-7"}],["path",{d:"M8 10v4"}],["path",{d:"M8 12H3"}]];ue(e,ce({name:"sliders-horizontal"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);oe(o,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function Wl(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"5",r:"1"}],["path",{d:"m9 20 3-6 3 6"}],["path",{d:"m6 8 6 2 6-2"}],["path",{d:"M12 10v4"}]];ue(e,ce({name:"person-standing"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);oe(o,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function jl(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];ue(e,ce({name:"zap"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);oe(o,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function Xl(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]];ue(e,ce({name:"activity"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);oe(o,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function Gl(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];ue(e,ce({name:"shield"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);oe(o,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function Yl(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 19v3"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3"}]];ue(e,ce({name:"mic"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);oe(o,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function ql(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]];ue(e,ce({name:"image"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);oe(o,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function Kl(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 18v-7"}],["path",{d:"M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"}],["path",{d:"M14 18v-7"}],["path",{d:"M18 18v-7"}],["path",{d:"M3 22h18"}],["path",{d:"M6 18v-7"}]];ue(e,ce({name:"landmark"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);oe(o,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function Zl(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];ue(e,ce({name:"user"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);oe(o,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function Ql(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];ue(e,ce({name:"globe"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);oe(o,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function Jl(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]];ue(e,ce({name:"video"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);oe(o,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function ec(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];ue(e,ce({name:"sparkles"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);oe(o,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function tc(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 20v-9"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97"}],["path",{d:"M22 13h-4"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97"}],["path",{d:"M6 13H2"}],["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13"}]];ue(e,ce({name:"bug"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);oe(o,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function rc(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]];ue(e,ce({name:"monitor"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);oe(o,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function nc(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"10",r:"8"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 22h10"}],["path",{d:"M12 22v-4"}]];ue(e,ce({name:"webcam"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);oe(o,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function ls(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}]];ue(e,ce({name:"circle"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);oe(o,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function ic(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];ue(e,ce({name:"square"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);oe(o,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function ac(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]];ue(e,ce({name:"eye"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);oe(o,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function sc(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}],["path",{d:"m2 2 20 20"}]];ue(e,ce({name:"eye-off"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);oe(o,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function oc(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];ue(e,ce({name:"folder-open"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);oe(o,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function lc(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];ue(e,ce({name:"info"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);oe(o,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function cc(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ue(e,ce({name:"x"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);oe(o,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function uc(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];ue(e,ce({name:"settings"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);oe(o,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function fc(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ue(e,ce({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);oe(o,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function Ye(e,t){const r={Camera:Hl,SlidersHorizontal:Ul,PersonStanding:Wl,Zap:jl,Activity:Xl,Shield:Gl,Mic:Yl,Image:ql,Landmark:Kl,User:Zl,Globe:Ql,Video:Jl,Sparkles:ec,Bug:tc,Monitor:rc,Webcam:nc,Circle:ls,Square:ic,Eye:ac,EyeOff:sc,FolderOpen:oc,Info:lc,X:cc,Settings:uc,RefreshCw:fc};let n=gt(t,"name",3,"Circle"),i=gt(t,"size",3,16),s=gt(t,"strokeWidth",3,2),a=gt(t,"class",3,"");const o=nt(()=>r[n()]??ls);var l=Z(),c=G(l);Jo(c,()=>p(o),(f,v)=>{v(f,{get size(){return i()},get"stroke-width"(){return s()},get class(){return a()}})}),A(e,l)}var dc=_e('<div class="xra-sec-body"><!></div>'),pc=_e('<details class="xra-sec"><summary><span class="xra-sec-title"><!> <span> </span></span> <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></summary> <!></details>');function vc(e,t){kt(t,!0);const r="ui.sections_open";let n=X(Re(Wt(()=>{var d;return((d=He(r,{}))==null?void 0:d[t.section.id])??!1}))),i;function s(){N(n,!p(n)),ot(`${r}.${t.section.id}`,p(n))}tr(()=>{Q.focusNonce,!(Q.focusSection!==t.section.id||!Q.panelOpen)&&(N(n,!0),ot(`${r}.${t.section.id}`,!0),requestAnimationFrame(()=>i==null?void 0:i.scrollIntoView({block:"nearest",behavior:"smooth"})))});var a=pc(),o=B(a),l=B(o),c=B(l);Ye(c,{get name(){return t.section.icon},size:15,class:"xra-sec-icon"});var f=P(c,2),v=q(f,!0),b=P(l,2);let h;var g=P(o,2);{var S=d=>{var _=dc(),y=B(_);ss(y,{get section(){return t.section}}),A(d,_)};Xe(g,d=>{p(n)&&d(S)})}Ai(a,d=>i=d,()=>i),he(d=>{a.open=p(n),Y(v,d),h=Fe(b,0,"xra-sec-chevron",null,h,{open:p(n)})},[()=>re(t.section.title)]),K("click",o,d=>{d.preventDefault(),s()}),A(e,a),St()}or(["click"]);var on=_e('<option class="svelte-x8svx4"> </option>'),hc=_e('<div class="warn svelte-x8svx4"> </div>'),_c=_e('<div class="xra-startup svelte-x8svx4"><div class="card svelte-x8svx4" role="dialog" aria-label="XR Animator VMC"><div class="col left svelte-x8svx4"><div class="brand svelte-x8svx4"><span class="logo svelte-x8svx4">XR</span> <span class="name svelte-x8svx4">Animator <b class="svelte-x8svx4">VMC</b></span></div> <div class="sub svelte-x8svx4"> </div> <pre class="log svelte-x8svx4"> </pre> <div class="credits svelte-x8svx4">Engine: XR Animator by Butz Yung (CC BY-NC-SA 4.0)<br class="svelte-x8svx4"/> Backends: native MediaPipe · optional ONNX Runtime</div></div> <div class="col right svelte-x8svx4"><div class="group-title svelte-x8svx4"> </div> <button type="button" class="q primary svelte-x8svx4"> </button> <button type="button" class="q svelte-x8svx4"> </button> <div class="group-title svelte-x8svx4"> <span></span></div> <div class="row svelte-x8svx4"><select class="svelte-x8svx4"><!></select> <button type="button" class="q icon svelte-x8svx4"><!></button></div> <!> <div class="group-title svelte-x8svx4"> </div> <label class="field svelte-x8svx4"><span class="svelte-x8svx4"> </span> <select class="svelte-x8svx4"></select></label> <label class="field svelte-x8svx4"><span class="svelte-x8svx4"> </span> <select class="svelte-x8svx4"></select></label> <button type="button" class="q ghost svelte-x8svx4"> </button></div></div></div>');function gc(e,t){kt(t,!0);const r=()=>window.XRA,n=m=>re(m),i=["AUTO","ECO","LOW","BALANCED","QUALITY","HIGH","MAX","CUSTOM"],s=4e3;function a(){var m,x,M;try{(M=(x=(m=r())==null?void 0:m.profileService)==null?void 0:x.save)==null||M.call(x,0)}catch{}}const o=(()=>{var x,M;const m=(M=(x=r())==null?void 0:x.i18n)==null?void 0:M.LANGUAGES;return Array.isArray(m)&&m.length?m:[["auto","Auto / System"],["en","English"],["it","Italiano"]]})();let l=X("auto"),c=X("CUSTOM"),f=X("default"),v=X(Re([])),b=X(!1),h=X(""),g=X(!1),S=X(""),d=X(""),_=X(!1),y=X(!1),w=X(!1),E=X(Re([])),k=!1,$=!1,T=0,I=0,C=[];function D(m){(p(E).length?p(E)[p(E).length-1]:"")!==m&&N(E,[...p(E),m].slice(-40),!0)}function ne(){var m,x,M;k||(k=!0,I&&(clearInterval(I),I=0),a(),Q.startupOpen=!1,(M=(x=(m=r())==null?void 0:m.ui)==null?void 0:x.refresh)==null||M.call(x))}async function Te(){var m,x;N(_,!0),D("Starting tracking…");try{await rs()}catch(M){(x=(m=r()).toast)==null||x.call(m,"Tracking: "+M.message,"warn",4500)}finally{N(_,!1),ne()}}async function Ue(m){const x=r();if(m=String(m||"CUSTOM").toUpperCase(),m==="CUSTOM"){x.config.performance.master_preset="CUSTOM",a(),D("Preset: CUSTOM");return}if(m==="AUTO"){D("Benchmarking hardware…");const M=await x.performance.benchmarkHardwareOnly();D(`AUTO → ${M.preset} (${M.fps.toFixed(1)} fps)`),await x.performance.applyPresetSafe(M.preset),x.config.performance.master_preset="AUTO",x.config.performance.auto_last_result=M,a();return}D(`Applying preset: ${m}…`),await x.performance.applyPresetSafe(m),D(`Preset ${m} applied`)}function ke(m=""){var j,ee,ie;const x=(j=r())==null?void 0:j.nativeBridge,M=((ee=x==null?void 0:x.activeCamera)==null?void 0:ee.call(x))||{},R=!!((ie=x==null?void 0:x.cameraRunning)!=null&&ie.call(x));N(g,R),N(S,m||(R?`${n("ON")} · ${M.label||n("Default camera")}`:n("OFF")),!0)}async function We(m=!1){var M,R,j;const x=(M=r())==null?void 0:M.nativeBridge;if(x!=null&&x.enumerateCameras){N(w,!0);try{const ee=await x.enumerateCameras({requestPermission:m}),ie=x.activeCamera()||{};N(v,(ee||[]).map(De=>({deviceId:De.deviceId,label:De.label})),!0);const me=ie.deviceId||((R=Ge.devices)==null?void 0:R.camera_device_id)||"";N(h,p(v).some(De=>De.deviceId===me)?me:((j=p(v)[0])==null?void 0:j.deviceId)||"",!0),N(b,!0),ke(),D(p(v).length?`${p(v).length} camera${p(v).length>1?"s":""} detected`:"No cameras found")}catch{N(b,!0),ke(n("Camera unavailable")),D("Camera enumeration failed")}finally{N(w,!1)}}}async function qt(m){var j,ee;const x=(j=r())==null?void 0:j.nativeBridge,M=((ee=m==null?void 0:m.currentTarget)==null?void 0:ee.value)??p(h),R=p(v).find(ie=>ie.deviceId===M);if(R){N(w,!0);try{const ie={deviceId:R.deviceId,label:R.label};x.cameraRunning()?await x.switchCamera(ie):await x.setCameraPreference(ie),ke(),D(`Webcam: ${R.label}`)}catch(ie){ke("Error · "+ie.message),D("Webcam switch failed")}finally{N(w,!1)}}}function ut(){var M,R,j,ee,ie,me,De,Ce;const m=(j=(R=(M=r())==null?void 0:M.xraBackend)==null?void 0:R.snapshot)==null?void 0:j.call(R),x=(m==null?void 0:m.capture)||((Ce=(De=(me=(ie=(ee=window.SA_bridge)==null?void 0:ee.backend)==null?void 0:ie.status)==null?void 0:me.call(ie))==null?void 0:De.backend)==null?void 0:Ce.capture);if(x!=null&&x.camera_busy){const ft=(x.busy_processes&&x.busy_processes.length?x.busy_processes:x.busy_process?[x.busy_process]:[]).filter(vn=>!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(String(vn).trim()));if(ft.length)return{busy:!0,proc:ft.join(", ")}}if(x!=null&&x.last_error&&x.last_error.includes("Webcam occupata")){const ge=x.last_error.match(/Webcam occupata da:\s*([^.]+)/i),ft=ge?ge[1].trim():"";if(!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(ft))return{busy:!0,proc:x.last_error}}return{busy:!1,proc:""}}function wt(){var m,x,M,R,j,ee,ie,me,De;if(typeof((x=(m=r())==null?void 0:m.nativeBridge)==null?void 0:x.isAvatarReady)=="function")return r().nativeBridge.isAvatarReady();if((M=window.MMD_SA)!=null&&M.MMD_started){const Ce=(ee=(j=(R=window.MMD_SA)==null?void 0:R.THREEX)==null?void 0:j.get_model)==null?void 0:ee.call(j,0);let ge=Ce;if((Ce==null?void 0:Ce.type)==="MMD_dummy")try{ge=Ce.model||null}catch{ge=null}const ft=((ie=ge==null?void 0:ge.model)==null?void 0:ie.scene)||(ge==null?void 0:ge.mesh)||(ge==null?void 0:ge.scene)||null;if(ge&&!(Ce!=null&&Ce.loading)&&!ge.loading&&!((De=(me=window.MMD_SA)==null?void 0:me.THREEX)!=null&&De._loading_model)&&ft)return ft.visible!==!1}return!1}function Se(){var x,M,R;const m=(x=r())==null?void 0:x.xraBackend;return!m||!m.active?!0:!!((R=(M=m.snapshot)==null?void 0:M.call(m))!=null&&R.ready)}function ze(){if(k)return;const m=ut();m.busy?(N(d,`Webcam in use by another application (${m.proc}). Close it to start tracking.`),D("Webcam is busy — close the other app")):N(d,""),wt()&&D("Avatar ready"),Se()&&D("Mocap backend ready")}function zr(){ze(),!p(_)&&!$&&Date.now()-T>s&&ne()}async function Dr(m){var M,R,j;const x=((M=m==null?void 0:m.currentTarget)==null?void 0:M.value)??p(c);N(c,x,!0),N(y,!0);try{await Ue(x),r().events.emit("state",{path:"performance.master_preset",value:r().config.performance.master_preset}),xl()}catch(ee){console.error("[XRA START]",ee),D("Preset error: "+ee.message)}finally{N(y,!1),(j=(R=r().ui)==null?void 0:R.refresh)==null||j.call(R)}}function Br(m){var x,M,R,j;N(l,((x=m==null?void 0:m.currentTarget)==null?void 0:x.value)??p(l),!0),(j=(R=(M=r())==null?void 0:M.i18n)==null?void 0:R.setLanguage)==null||j.call(R,p(l))}async function O(){var m,x;try{await((x=(m=r().nativeBridge)==null?void 0:m.openVrmPicker)==null?void 0:x.call(m))}catch(M){r().toast("VRM loader: "+M.message,"error",4500)}}Mi(()=>{var M,R,j,ee,ie,me,De,Ce,ge,ft,vn,Ss,Es;const m=r();T=Date.now(),D("Initializing XR Animator VMC…"),N(l,((R=(M=m==null?void 0:m.config)==null?void 0:M.ui)==null?void 0:R.language)||"auto",!0),N(c,((ee=(j=m==null?void 0:m.config)==null?void 0:j.performance)==null?void 0:ee.master_preset)==="MINIMAL"?"ECO":((me=(ie=m==null?void 0:m.config)==null?void 0:ie.performance)==null?void 0:me.master_preset)||"CUSTOM",!0),N(f,((Ce=(De=m==null?void 0:m.config)==null?void 0:De.background)==null?void 0:Ce.path)||((ft=(ge=m==null?void 0:m.config)==null?void 0:ge.background)==null?void 0:ft.color)||"default",!0),ke(),setTimeout(()=>We(!1),100),I=setInterval(zr,250),window.addEventListener("MMDStarted",ze),(vn=m.xraBackend)!=null&&vn.onStatus&&m.xraBackend.onStatus(ze);const x=gr=>{gr.key==="Escape"&&ne()};window.addEventListener("keydown",x,!0),ze(),(Es=(Ss=m.whenNativeReady)==null?void 0:Ss.call(m))==null||Es.then(()=>{Q.startupOpen&&We(!1)});for(const gr of["camera-started","camera-stopped","camera-switched"])C.push(m.events.on(gr,()=>{Q.startupOpen&&We(!1)}));for(const gr of["avatar-loading","avatar-changed","avatar-ready"])C.push(m.events.on(gr,()=>ze()));return()=>{I&&clearInterval(I),window.removeEventListener("MMDStarted",ze),window.removeEventListener("keydown",x,!0);for(const gr of C)try{gr()}catch{}C=[]}});var W=_c(),te=B(W),pe=B(te),Ne=P(B(pe),2),Je=q(Ne,!0),Ot=P(Ne,2),vr=q(Ot,!0),Ni=P(pe,2),ps=B(Ni),Nc=q(ps,!0),Vn=P(ps,2),Cc=q(Vn,!0),Fn=P(Vn,2),Oc=q(Fn,!0),vs=P(Fn,2),hs=B(vs),Pc=P(hs);let _s;var gs=P(vs,2),Kt=B(gs),Rc=B(Kt);{var Ic=m=>{var x=on(),M=q(x,!0);x.value=x.__value="",he(R=>Y(M,R),[()=>n("Loading cameras…")]),A(m,x)},Lc=m=>{var x=on(),M=q(x,!0);x.value=x.__value="",he(R=>Y(M,R),[()=>n("No cameras found")]),A(m,x)},zc=m=>{var x=Z(),M=G(x);jt(M,17,()=>p(v),R=>R.deviceId,(R,j)=>{var ee=on(),ie=q(ee,!0),me={};he(()=>{Y(ie,p(j).label),me!==(me=p(j).deviceId)&&(ee.value=(ee.__value=me)??"")}),A(R,ee)}),A(m,x)};Xe(Rc,m=>{p(b)?p(v).length?m(zc,-1):m(Lc,1):m(Ic)})}var Hn;lr(Kt);var pn=P(Kt,2),Dc=B(pn);Ye(Dc,{name:"RefreshCw",size:14});var ms=P(gs,2);{var Bc=m=>{var x=hc(),M=q(x,!0);he(()=>Y(M,p(d))),A(m,x)};Xe(ms,m=>{p(d)&&m(Bc)})}var ys=P(ms,2),Vc=q(ys,!0),ws=P(ys,2),bs=B(ws),Fc=q(bs,!0),hr=P(bs,2);jt(hr,20,()=>i,m=>m,(m,x)=>{var M=on(),R=q(M,!0),j={};he(()=>{Y(R,x),j!==(j=x)&&(M.value=(M.__value=j)??"")}),A(m,M)});var Un;lr(hr);var xs=P(ws,2),ks=B(xs),Hc=q(ks,!0),_r=P(ks,2);jt(_r,21,()=>o,([m,x])=>m,(m,x)=>{var M=nt(()=>Wi(p(x),2));let R=()=>p(M)[0],j=()=>p(M)[1];var ee=on(),ie=q(ee,!0),me={};he(()=>{Y(ie,j()),me!==(me=R())&&(ee.value=(ee.__value=me)??"")}),A(m,ee)});var Wn;lr(_r);var Ci=P(xs,2),Uc=q(Ci,!0);he((m,x,M,R,j,ee,ie,me,De,Ce,ge,ft)=>{Y(Je,m),Y(vr,x),Y(Nc,M),Vn.disabled=p(_),Y(Cc,R),Fn.disabled=p(_),Y(Oc,j),Y(hs,`${ee??""} `),_s=Fe(Pc,1,"dot svelte-x8svx4",null,_s,{on:p(g)}),Kt.disabled=p(w)||p(_),Hn!==(Hn=p(h))&&(Kt.value=(Kt.__value=Hn)??"",Lt(Kt,Hn)),Ae(pn,"title",ie),Ae(pn,"aria-label",me),pn.disabled=p(w)||p(_),Y(Vc,De),Y(Fc,Ce),hr.disabled=p(y)||p(_),Un!==(Un=p(c))&&(hr.value=(hr.__value=Un)??"",Lt(hr,Un)),Y(Hc,ge),_r.disabled=p(_),Wn!==(Wn=p(l))&&(_r.value=(_r.__value=Wn)??"",Lt(_r,Wn)),Ci.disabled=p(_),Y(Uc,ft)},[()=>n("Quick setup · changes apply immediately."),()=>p(E).join(`
`),()=>n("Quick start"),()=>p(_)?n("Starting…"):n("Start tracking"),()=>n("Load / change VRM…"),()=>n("Webcam"),()=>n("Refresh cameras"),()=>n("Refresh cameras"),()=>n("Options"),()=>n("Master preset"),()=>n("Language"),()=>n("Continue")]),K("click",W,ne),K("click",te,m=>m.stopPropagation()),Nn("pointerenter",te,()=>{$=!0,T=Date.now()}),K("pointermove",te,()=>{T=Date.now()}),Nn("pointerleave",te,()=>{$=!1,T=Date.now()}),K("click",Vn,Te),K("click",Fn,O),K("change",Kt,qt),K("click",pn,()=>We(!0)),K("change",hr,Dr),K("change",_r,Br),K("click",Ci,ne),A(e,W),St()}or(["click","pointermove","change"]);var mc=_e('<button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button>'),yc=_e('<nav class="xra-dock group fixed left-2 top-1/2 z-[99990] flex w-[46px] max-h-[92vh] -translate-y-1/2 flex-col gap-0.5 overflow-hidden rounded-xl border border-white/10 bg-[var(--xra-ui-bg)] p-1.5 font-sans text-[12.5px] leading-snug text-[var(--xra-ui-fg)] shadow-[0_12px_40px_rgba(0,0,0,.55)] transition-[width] duration-200 hover:w-[232px]"><!> <div class="my-1 h-px bg-white/10"></div> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button></nav>');function wc(e,t){kt(t,!0);const r=()=>window.XRA;let n=X(!1),i=X(!1),s=0;function a(){var W,te,pe,Ne,Je;const O=r();if(O){try{N(n,!!((te=(W=O.nativeBridge)==null?void 0:W.cameraRunning)!=null&&te.call(W)))}catch{}try{N(i,!!((Je=(Ne=(pe=O.recorder)==null?void 0:pe.status)==null?void 0:Ne.call(pe))!=null&&Je.active))}catch{}}}let o=X(!1),l=X("");async function c(){var W,te,pe,Ne;if(p(o))return;N(o,!0);const O=!p(n);N(l,O?"Starting…":"Stopping…",!0);try{O?(await rs(),N(n,!0)):(await yl(),N(n,!1))}catch(Je){try{await((te=(W=r().nativeBridge)==null?void 0:W.forceStopCamera)==null?void 0:te.call(W))}catch{}N(n,!1),(Ne=(pe=r()).toast)==null||Ne.call(pe,"Tracking: "+Je.message,"warn",4500)}finally{N(o,!1),N(l,""),setTimeout(a,250)}}let f=X(!1),v=X("");async function b(){var W,te;if(p(f))return;N(f,!0);const O=!p(i);N(v,O?"Starting…":"Stopping…",!0);try{O?(await wl(),N(i,!0)):(await bl(),N(i,!1))}catch(pe){N(i,!1),(te=(W=r()).toast)==null||te.call(W,"Recording: "+pe.message,"warn",4500)}finally{N(f,!1),N(v,""),setTimeout(a,250)}}async function h(){var O,W,te,pe;try{await((W=(O=r().nativeBridge)==null?void 0:O.openVrmPicker)==null?void 0:W.call(O))}catch(Ne){(pe=(te=r()).toast)==null||pe.call(te,"VRM loader: "+Ne.message,"error",4500)}}function g(){var O,W;try{(W=(O=r().nativeBridge)==null?void 0:O.showAbout)==null||W.call(O)}catch{}}const S=[{id:"ui",icon:"Monitor",label:"UI Settings"},{id:"camera",icon:"Camera",label:"Webcam settings"},{id:"avatar",icon:"User",label:"Model settings"},{id:"second_avatar",icon:"Globe",label:"Studio link"},{id:"stage",icon:"Landmark",label:"Environment + Camera"},{id:"background",icon:"Image",label:"Background"},{id:"lip",icon:"Mic",label:"Audio"}],d="hover:bg-white/10",_="flex-1 overflow-hidden opacity-0 transition-opacity duration-150 group-hover:opacity-100";Mi(()=>(a(),s=setInterval(a,1e3),()=>clearInterval(s)));var y=yc(),w=B(y);jt(w,17,()=>S,O=>O.id,(O,W)=>{var te=mc();Fe(te,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var pe=B(te),Ne=B(pe);Ye(Ne,{get name(){return p(W).icon},size:16});var Je=P(pe,2);Fe(Je,1,Tr(_));var Ot=q(Je,!0);he((vr,Ni)=>{Ae(te,"title",vr),Y(Ot,Ni)},[()=>re(p(W).label),()=>re(p(W).label)]),K("click",te,()=>gl(p(W).id)),A(O,te)});var E=P(w,4),k=B(E),$=B(k);{let O=nt(()=>p(n)?"text-emerald-400":"");Ye($,{name:"Webcam",size:16,get class(){return p(O)}})}var T=P(k,2);Fe(T,1,Tr(_));var I=q(T,!0),C=P(E,2),D=B(C),ne=B(D);{let O=nt(()=>p(f)?"Circle":p(i)?"Square":"Circle"),W=nt(()=>p(i)?"text-red-400":"");Ye(ne,{get name(){return p(O)},size:16,get class(){return p(W)}})}var Te=P(D,2);Fe(Te,1,Tr(_));var Ue=q(Te,!0),ke=P(C,2);Fe(ke,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var We=B(ke),qt=B(We);Ye(qt,{name:"FolderOpen",size:16});var ut=P(We,2);Fe(ut,1,Tr(_));var wt=q(ut,!0),Se=P(ke,2);Fe(Se,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var ze=B(Se),zr=B(ze);Ye(zr,{name:"Info",size:16});var Dr=P(ze,2);Fe(Dr,1,Tr(_));var Br=q(Dr,!0);he((O,W,te,pe,Ne,Je,Ot,vr)=>{Fe(E,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${p(n)?"bg-emerald-500/20 hover:bg-emerald-500/30":d} ${p(o)?"opacity-60":""}`),Ae(E,"title",O),E.disabled=p(o),Y(I,W),Fe(C,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${p(i)?"bg-red-500/30 hover:bg-red-500/40 text-red-200":d} ${p(f)?"opacity-60":""}`),Ae(C,"title",te),C.disabled=p(f),Y(Ue,pe),Ae(ke,"title",Ne),Y(wt,Je),Ae(Se,"title",Ot),Y(Br,vr)},[()=>re("Tracking"),()=>p(o)?re(p(l)):p(n)?re("Tracking on"):re("Tracking off"),()=>re("Record"),()=>p(f)?re(p(v)):p(i)?re("Stop recording"):re("Record"),()=>re("Load / change VRM…"),()=>re("Load / change VRM…"),()=>re("About"),()=>re("About")]),Nn("pointerenter",y,()=>{Q.dockExpanded=!0}),Nn("pointerleave",y,()=>{Q.dockExpanded=!1}),K("click",E,c),K("click",C,b),K("click",ke,h),K("click",Se,g),A(e,y),St()}or(["click"]);var bc=_e('<div class="absolute inset-0 z-30 grid place-items-center bg-black text-[12px] text-[var(--xra-ui-fg)]"> </div>'),xc=_e('<div class="xra-mocap-window fixed z-[99991] flex flex-col overflow-hidden rounded-xl border border-white/15 bg-[var(--xra-ui-bg)] text-[var(--xra-ui-fg)] shadow-[0_16px_48px_rgba(0,0,0,.6)] font-sans"><header class="flex shrink-0 cursor-move touch-none select-none items-center gap-2 px-2 py-1.5"><!> <span class="flex-1 text-[12px] font-semibold"> </span> <select class="rounded-md border border-white/15 bg-[#101214] px-1.5 py-0.5 text-[11px] text-[var(--xra-ui-fg)]"><option> </option><option> </option><option> </option><option> </option></select> <button type="button" class="rounded-md border border-white/15 bg-white/5 px-1.5 py-0.5 cursor-pointer text-[var(--xra-ui-fg)]"><!></button></header> <div class="relative min-h-0 flex-1 overflow-hidden bg-black"><!> <div class="absolute bottom-0 right-0 z-20 h-5 w-5 cursor-nwse-resize touch-none"></div></div></div>');function kc(e,t){kt(t,!0);const r=()=>window.XRA,n=He("ui.mocap_window",{})||{};let i=X(Re(Number.isFinite(n.x)?n.x:48)),s=X(Re(Number.isFinite(n.y)?n.y:96)),a=X(Re(Number.isFinite(n.w)?n.w:360)),o=X(Re(Number.isFinite(n.h)?n.h:270)),l=X(void 0),c=X(!1),f=0;const v=nt(()=>He("ui.mocap_visibility","always")!=="auto"||p(c));function b(){ot("ui.mocap_window",{x:Math.round(p(i)),y:Math.round(p(s)),w:Math.round(p(a)),h:Math.round(p(o))})}function h(){var y,w,E;try{(E=(w=(y=r())==null?void 0:y.nativeBridge)==null?void 0:w.updateMocapWindow)==null||E.call(w)}catch{}}function g(y,w){y.preventDefault();const E=y.clientX,k=y.clientY,$=p(i),T=p(s),I=p(a),C=p(o),D=Te=>{const Ue=Te.clientX-E,ke=Te.clientY-k;w==="move"?(N(i,Math.max(0,Math.min(window.innerWidth-80,$+Ue)),!0),N(s,Math.max(0,Math.min(window.innerHeight-30,T+ke)),!0)):(N(a,Math.max(200,Math.min(window.innerWidth-p(i),I+Ue)),!0),N(o,Math.max(130,Math.min(window.innerHeight-p(s),C+ke)),!0))},ne=()=>{window.removeEventListener("pointermove",D),window.removeEventListener("pointerup",ne),b()};window.addEventListener("pointermove",D),window.addEventListener("pointerup",ne)}tr(()=>{var w,E,k;const y=p(l);if(y){try{(k=(E=(w=r())==null?void 0:w.nativeBridge)==null?void 0:E.attachMocapWindow)==null||k.call(E,y)}catch{}return()=>{var $,T,I;try{(I=(T=($=r())==null?void 0:$.nativeBridge)==null?void 0:T.detachMocapWindow)==null||I.call(T)}catch{}}}}),tr(()=>{p(i),p(s),p(a),p(o),p(c),h()}),Mi(()=>{const y=()=>{var w,E,k;N(c,!!((k=(E=(w=r())==null?void 0:w.nativeBridge)==null?void 0:E.cameraRunning)!=null&&k.call(E)))};return y(),f=setInterval(y,500),window.addEventListener("resize",h),()=>{clearInterval(f),window.removeEventListener("resize",h)}});var S=Z(),d=G(S);{var _=y=>{var w=xc(),E=B(w),k=B(E);Ye(k,{name:"Activity",size:14});var $=P(k,2),T=q($,!0),I=P($,2),C=B(I),D=q(C,!0);C.value=C.__value="both";var ne=P(C),Te=q(ne,!0);ne.value=ne.__value="wireframe";var Ue=P(ne),ke=q(Ue,!0);Ue.value=Ue.__value="video";var We=P(Ue),qt=q(We,!0);We.value=We.__value="off";var ut;lr(I);var wt=P(I,2),Se=B(wt);Ye(Se,{name:"X",size:13});var ze=P(E,2),zr=B(ze);{var Dr=O=>{var W=bc(),te=q(W,!0);he(pe=>Y(te,pe),[()=>re("Tracking is off")]),A(O,W)};Xe(zr,O=>{p(c)||O(Dr)})}var Br=P(zr,2);Ai(ze,O=>N(l,O),()=>p(l)),he((O,W,te,pe,Ne,Je,Ot,vr)=>{Si(w,`left:${p(i)??""}px; top:${p(s)??""}px; width:${p(a)??""}px; height:${p(o)??""}px;`),Y(T,O),Y(D,W),Y(Te,te),Y(ke,pe),Y(qt,Ne),ut!==(ut=Je)&&(I.value=(I.__value=ut)??"",Lt(I,ut)),Ae(wt,"title",Ot),Ae(Br,"title",vr)},[()=>re("Mocap"),()=>re("Webcam + skeleton"),()=>re("Skeleton only"),()=>re("Webcam only"),()=>re("Off"),()=>He("ui.mocap_view","off"),()=>re("Close"),()=>re("Resize")]),K("pointerdown",E,O=>g(O,"move")),K("change",I,O=>ot("ui.mocap_view",O.currentTarget.value)),K("pointerdown",I,O=>O.stopPropagation()),K("click",wt,()=>ot("ui.mocap_view","off")),K("pointerdown",wt,O=>O.stopPropagation()),K("pointerdown",Br,O=>{O.stopPropagation(),g(O,"resize")}),A(y,w)};Xe(d,y=>{p(v)&&y(_)})}A(e,S),St()}or(["pointerdown","change","click"]);var Sc=_e('<aside class="xra-section-popup fixed top-1/2 z-[99992] flex max-h-[72vh] w-[320px] -translate-y-1/2 flex-col overflow-hidden rounded-xl border border-white/12 bg-[var(--xra-ui-bg)] text-[12.5px] leading-[1.45] text-[var(--xra-ui-fg)] shadow-[0_16px_48px_rgba(0,0,0,.6)] font-sans transition-[left] duration-200"><header class="flex shrink-0 items-center gap-2 border-b border-white/10 bg-[var(--xra-ui-bg2)] px-3 py-2"><!> <span class="text-[12.5px] font-semibold"> </span></header> <div class="min-h-0 flex-1 overflow-auto px-2.5 py-2"><!></div></aside>');function Ec(e,t){kt(t,!0);let r;tr(()=>{const f=b=>{const h=b.target;r&&h instanceof Node&&r.contains(h)||h instanceof Element&&h.closest(".xra-dock")||(Q.popupSection=null)},v=b=>{b.key==="Escape"&&(Q.popupSection=null)};return document.addEventListener("pointerdown",f,!0),window.addEventListener("keydown",v,!0),()=>{document.removeEventListener("pointerdown",f,!0),window.removeEventListener("keydown",v,!0)}});var n=Sc(),i=B(n),s=B(i);Ye(s,{get name(){return t.section.icon},size:15,class:"text-[var(--xra-ui-dim)]"});var a=P(s,2),o=q(a,!0),l=P(i,2),c=B(l);ss(c,{get section(){return t.section}}),Ai(n,f=>r=f,()=>r),he(f=>{Si(n,`left:${Q.dockExpanded?248:62}px;`),Y(o,f)},[()=>re(t.section.title)]),A(e,n),St()}var $c=_e('<aside class="xra-panel"><header class="xra-panel-head"><strong>XR Animator</strong> <span class="xra-spacer"></span> <button><!></button> <button title="Close panel"><!></button></header> <div class="xra-panel-body"></div></aside>'),Ac=_e('<button class="xra-panel-launcher"><!></button>'),Mc=_e("<!> <!> <!> <!> <!>",1);function Tc(e,t){kt(t,!0),kl();const r=nt(()=>Ml(Ge));var n=Mc(),i=G(n);{var s=d=>{wc(d,{})};Xe(i,d=>{Q.ready&&d(s)})}var a=P(i,2);{var o=d=>{const _=nt(()=>p(r).find(k=>k.id===Q.popupSection));var y=Z(),w=G(y);{var E=k=>{Ec(k,{get section(){return p(_)}})};Xe(w,k=>{p(_)&&k(E)})}A(d,y)};Xe(a,d=>{Q.ready&&Q.popupSection&&d(o)})}var l=P(a,2);{var c=d=>{kc(d,{})},f=nt(()=>Q.ready&&He("ui.mocap_view","off")!=="off");Xe(l,d=>{p(f)&&d(c)})}var v=P(l,2);{var b=d=>{var I,C,D;var _=$c(),y=B(_),w=P(B(y),4);Ae(w,"title",((D=(C=(I=window.XRA)==null?void 0:I.i18n)==null?void 0:C.t)==null?void 0:D.call(C,"Clean screen mode (Press Esc to restore)"))||"Clean screen (Esc)");var E=B(w);Ye(E,{name:"EyeOff",size:15});var k=P(w,2),$=B(k);Ye($,{name:"X",size:15});var T=P(y,2);jt(T,21,()=>p(r),ne=>ne.id,(ne,Te)=>{vc(ne,{get section(){return p(Te)}})}),K("click",w,function(...ne){Ln==null||Ln.apply(this,ne)}),K("click",k,()=>Q.panelOpen=!1),A(d,_)},h=d=>{var _=Ac(),y=B(_);Ye(y,{name:"Settings",size:16}),K("click",_,()=>{Q.panelOpen=!0,ns()}),A(d,_)};Xe(v,d=>{Q.ready&&Q.panelOpen?d(b):Q.ready&&d(h,1)})}var g=P(v,2);{var S=d=>{gc(d,{})};Xe(g,d=>{Q.ready&&Q.startupOpen&&d(S)})}A(e,n),St()}or(["click"]),window.XRA_SVELTE_UI=!0;function cs(){let e=document.getElementById("XRA_SVELTE");e||(e=document.createElement("div"),e.id="XRA_SVELTE",document.body.appendChild(e)),Go(Tc,{target:e})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",cs):cs()})();

})();
