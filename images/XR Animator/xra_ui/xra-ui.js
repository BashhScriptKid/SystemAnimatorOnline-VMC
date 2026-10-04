(function(){
var Gc=Object.defineProperty;var $s=ue=>{throw TypeError(ue)};var Yc=(ue,ne,xe)=>ne in ue?Gc(ue,ne,{enumerable:!0,configurable:!0,writable:!0,value:xe}):ue[ne]=xe;var Je=(ue,ne,xe)=>Yc(ue,typeof ne!="symbol"?ne+"":ne,xe),Ci=(ue,ne,xe)=>ne.has(ue)||$s("Cannot "+xe);var u=(ue,ne,xe)=>(Ci(ue,ne,"read from private field"),xe?xe.call(ue):ne.get(ue)),B=(ue,ne,xe)=>ne.has(ue)?$s("Cannot add the same private member more than once"):ne instanceof WeakSet?ne.add(ue):ne.set(ue,xe),D=(ue,ne,xe,Zt)=>(Ci(ue,ne,"write to private field"),Zt?Zt.call(ue,xe):ne.set(ue,xe),xe),U=(ue,ne,xe)=>(Ci(ue,ne,"access private method"),xe);(function(){"use strict";var us,Nr,Gt,cr,Or,Cr,Pr,zt,Rr,Ge,ln,Dt,_t,Mt,Ir,ur,J,Pi,Ri,hn,Ii,As,Ms,Vr,qc,_n,fs,ot,Ti,lt,fr,Re,Ye,Ie,qe,Tt,dr,Yt,Lr,cn,un,Bt,zn,oe,Kc,Zc,Li,Qc,zi,gn,Wn,Di,Bi,gt,Nt,Ke,vr,fn,dn,Dn,ds;var ne=Array.isArray,xe=Array.prototype.indexOf,Zt=Array.prototype.includes,mn=Array.from,Vi=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,Fi=Object.getOwnPropertyDescriptors,Ts=Object.prototype,Ns=Array.prototype,jn=Object.getPrototypeOf,Hi=Object.isExtensible;function Fr(e){return typeof e=="function"}const Os=()=>{};function Cs(e){return e()}function Xn(e){for(var t=0;t<e.length;t++)e[t]()}function Ui(){var e,t,r=new Promise((n,i)=>{e=n,t=i});return{promise:r,resolve:e,reject:t}}function Wi(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const Te=2,mr=4,Hr=8,Gn=1<<24,ut=16,et=32,Pt=64,Yn=128,qn=256,ft=512,ke=1024,ye=2048,tt=4096,Ce=8192,Pe=16384,yr=32768,yn=1<<25,Ft=65536,wn=1<<17,Ps=1<<18,wr=1<<19,ji=1<<20,wt=1<<25,bn=1<<21,br=1<<22,Ht=1<<23,bt=Symbol("$state"),Xi=Symbol("component"),Gi=Symbol("legacy props"),Rs=Symbol(""),xn=Symbol("attributes"),Kn=Symbol("class"),Zn=Symbol("style"),Ur=Symbol("text"),Wr=new class extends Error{constructor(){super(...arguments);Je(this,"name","StaleReactionError");Je(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},kn=!!((us=globalThis.document)!=null&&us.contentType)&&globalThis.document.contentType.includes("xml"),Is=1,Ls=2,Yi=4,zs=8,Ds=16,Bs=1,Vs=2,qi=4,Fs=8,Hs=16,Us=1,Ws=2,we=Symbol("uninitialized"),Ki="http://www.w3.org/1999/xhtml",js="http://www.w3.org/2000/svg",Xs="@attach";function Gs(){console.warn("https://svelte.dev/e/derived_inert")}function Ys(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function qs(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Zi(e){return e===this.v}function Ks(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Qi(e){return!Ks(e,this.v)}function Zs(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Qs(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Js(e,t,r){throw new Error("https://svelte.dev/e/each_key_duplicate")}function eo(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function to(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ro(e){throw new Error("https://svelte.dev/e/effect_orphan")}function no(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function io(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function ao(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function so(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function oo(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function lo(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let xr=!1,Jc=!1;function co(){xr=!0}let fe=null;function kr(e){fe=e}function xt(e,t=!1,r){fe={p:fe,i:!1,c:null,e:null,s:e,x:null,r:F,l:xr&&!t?{s:null,u:null,$:[]}:null}}function kt(e){var t=fe,r=t.e;if(r!==null){t.e=null;for(var n of r)wa(n)}return t.i=!0,fe=t.p,Qn(e)}function Qn(e={}){return Vi(e,Xi,{value:!0}),e}function jr(){return!xr||fe!==null&&fe.l===null}let Sr=[];function uo(){var e=Sr;Sr=[],Xn(e)}function St(e){if(Sr.length===0){var t=Sr;queueMicrotask(()=>{t===Sr&&uo()})}Sr.push(e)}const fo=-7169;function he(e,t){e.f=e.f&fo|t}function Jn(e){(e.f&ft)!==0||e.deps===null?he(e,ke):he(e,tt)}function Ji(e,t,r){(e.f&ye)!==0?t.add(e):(e.f&tt)!==0&&r.add(e),he(e,ke)}function vo(e,t){if(t){const r=document.body;e.autofocus=!0,St(()=>{document.activeElement===r&&e.focus()})}}function Xr(e){var t=V,r=F;nt(null),it(null);try{return e()}finally{nt(t),it(r)}}function ea(e,t,r,n){const i=jr()?Er:ei;var s=e.filter(h=>!h.settled),a=t.map(i);if(r.length===0&&s.length===0){n(a);return}var o=F,l=po(),c=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(h=>h.promise)):null;function f(h){if((o.f&Pe)===0){l();try{n([...a,...h])}catch(g){$t(g,o)}Sn()}}var p=ta();if(r.length===0){c.then(()=>f([])).finally(p);return}function w(){Promise.all(r.map(h=>ho(h))).then(f).catch(h=>$t(h,o)).finally(p)}c?c.then(()=>{l(),w(),Sn()}):w()}function po(){var e=F,t=V,r=fe,n=z;return function(s=!0){it(e),nt(t),kr(r),s&&(e.f&Pe)===0&&(n==null||n.activate(),n==null||n.apply())}}function Sn(e=!0){it(null),nt(null),kr(null),e&&(z==null||z.deactivate())}function ta(){var e=F,t=e.b,r=z,n=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,r),r.increment(n,e),()=>{t==null||t.update_pending_count(-1,r),r.decrement(n,e)}}function Er(e){var t=Te|ye;return F!==null&&(F.f|=wr),{ctx:fe,deps:null,effects:null,equals:Zi,f:t,fn:e,reactions:null,rv:0,v:we,wv:0,parent:F,ac:null}}const Gr=Symbol("obsolete");function ho(e,t,r){let n=F;n===null&&Qs();var i=void 0,s=Ut(we),a=!V,o=new Set;return Mo(()=>{var h,g;var l=F,c=Ui();i=c.promise;try{Promise.resolve(e()).then(c.resolve,S=>{S!==Wr&&c.reject(S)}).finally(Sn)}catch(S){c.reject(S),Sn()}var f=z;if(a){if((l.f&yr)!==0)var p=ta();if((h=n.b)!=null&&h.is_rendered())(g=f.async_deriveds.get(l))==null||g.reject(Gr);else for(const S of o.values())S.reject(Gr);o.add(c),f.async_deriveds.set(l,c)}const w=(S,d=void 0)=>{p==null||p(),o.delete(c),d!==Gr&&(f.activate(),d?(s.f|=Ht,Ar(s,d)):((s.f&Ht)!==0&&(s.f^=Ht),Ar(s,S)),f.deactivate())};c.promise.then(w,S=>w(null,S||"unknown"))}),An(()=>{for(const l of o)l.reject(Gr)}),new Promise(l=>{function c(f){function p(){f===i?l(s):c(i)}f.then(p,p)}c(i)})}function rt(e){const t=Er(e);return Ma(t),t}function ei(e){const t=Er(e);return t.equals=Qi,t}function _o(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)Me(t[r])}}function ti(e){var t,r=F,n=e.parent;if(!It&&n!==null&&e.v!==we&&(n.f&(Pe|Ce))!==0)return Gs(),e.v;it(n);try{_o(e),t=Pa(e)}finally{it(r)}return t}function ra(e){var t=ti(e);if(!e.equals(t)&&(e.wv=Oa(),(!(z!=null&&z.is_fork)||e.deps===null)&&(z!==null?(z.capture(e,t,!0),Yr==null||Yr.capture(e,t,!0)):e.v=t,e.deps===null))){he(e,ke);return}It||(Ae!==null?(ci()||z!=null&&z.is_fork)&&Ae.set(e,t):Jn(e))}function go(e){var t;if(e.effects!==null)for(const r of e.effects)(r.teardown||r.ac)&&((t=r.teardown)==null||t.call(r),r.ac!==null&&Xr(()=>{r.ac.abort(Wr),r.ac=null}),r.fn!==null&&(r.teardown=Os),en(r,0),fi(r))}function na(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&Mr(t)}let ri=null,$r=null,z=null,Yr=null,Ae=null,ni=null,ii=!1,qr=null,En=null;var ia=0,eu=new Set;let mo=1;const Ln=class Ln{constructor(){B(this,J);Je(this,"id",mo++);B(this,Nr,!1);Je(this,"linked",!0);B(this,Gt,null);B(this,cr,null);Je(this,"async_deriveds",new Map);Je(this,"current",new Map);Je(this,"previous",new Map);B(this,Or,new Set);B(this,Cr,new Set);B(this,Pr,0);B(this,zt,new Map);B(this,Rr,null);B(this,Ge,[]);B(this,ln,[]);B(this,Dt,new Set);B(this,_t,new Set);B(this,Mt,new Map);B(this,Ir,new Set);Je(this,"is_fork",!1);B(this,ur,!1);$r===null?ri=$r=this:(D($r,cr,this),D(this,Gt,$r)),$r=this}skip_effect(t){u(this,Mt).has(t)||u(this,Mt).set(t,{d:[],m:[]}),u(this,Ir).delete(t)}unskip_effect(t,r=n=>this.schedule(n)){var n=u(this,Mt).get(t);if(n){u(this,Mt).delete(t);for(var i of n.d)he(i,ye),r(i);for(i of n.m)he(i,tt),r(i)}u(this,Ir).add(t)}capture(t,r,n=!1){t.v!==we&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&Ht)===0&&(this.current.set(t,[r,n]),Ae==null||Ae.set(t,r)),this.is_fork||(t.v=r)}activate(){z=this}deactivate(){z=null,Ae=null}flush(){try{ii=!0,z=this,U(this,J,hn).call(this)}finally{ia=0,ni=null,qr=null,En=null,ii=!1,z=null,Ae=null,Et.clear()}}discard(){var t;for(const r of u(this,Cr))r(this);u(this,Cr).clear();for(const r of this.async_deriveds.values())r.reject(Gr);U(this,J,_n).call(this),(t=u(this,Rr))==null||t.resolve()}register_created_effect(t){u(this,ln).push(t)}increment(t,r){if(D(this,Pr,u(this,Pr)+1),t){let n=u(this,zt).get(r)??0;u(this,zt).set(r,n+1)}}decrement(t,r){if(D(this,Pr,u(this,Pr)-1),t){let n=u(this,zt).get(r)??0;n===1?u(this,zt).delete(r):u(this,zt).set(r,n-1)}u(this,ur)||(D(this,ur,!0),St(()=>{D(this,ur,!1),this.linked&&this.flush()}))}transfer_effects(t,r){for(const n of t)u(this,Dt).add(n);for(const n of r)u(this,_t).add(n);t.clear(),r.clear()}oncommit(t){u(this,Or).add(t)}ondiscard(t){u(this,Cr).add(t)}settled(){return(u(this,Rr)??D(this,Rr,Ui())).promise}static ensure(){if(z===null){const t=z=new Ln;ii||St(()=>{u(t,Nr)||t.flush()})}return z}apply(){{Ae=null;return}}schedule(t){var r;if(ni=t,(r=t.b)!=null&&r.is_pending&&(t.f&(mr|Hr|Gn))!==0&&(t.f&yr)===0){t.b.defer_effect(t);return}u(this,Ge).push(t)}};Nr=new WeakMap,Gt=new WeakMap,cr=new WeakMap,Or=new WeakMap,Cr=new WeakMap,Pr=new WeakMap,zt=new WeakMap,Rr=new WeakMap,Ge=new WeakMap,ln=new WeakMap,Dt=new WeakMap,_t=new WeakMap,Mt=new WeakMap,Ir=new WeakMap,ur=new WeakMap,J=new WeakSet,Pi=function(){if(this.is_fork)return!0;for(const n of u(this,zt).keys()){for(var t=n,r=!1;t.parent!==null;){if(u(this,Mt).has(t)){r=!0;break}t=t.parent}if(!r)return!0}return!1},Ri=function(){var t=[];for(const s of u(this,Ge))if(!((s.f&Pe)!==0||(s.f&(ye|tt))===0)){for(var r=s,n=!1;r.parent!==null;){r=r.parent;var i=r.f;if((i&(Pt|et))!==0){if((i&ke)===0){n=!0;break}r.f^=ke}}n||t.push(r)}return D(this,Ge,[]),t},hn=function(){var o,l,c,f;D(this,Nr,!0);for(const p of u(this,Dt))u(this,_t).delete(p),he(p,ye),this.schedule(p);for(const p of u(this,_t))he(p,tt),this.schedule(p);this.apply();for(var t=qr=[],r=[],n=En=[];u(this,Ge).length>0;){ia++>1e3&&(U(this,J,_n).call(this),yo());for(const p of U(this,J,Ri).call(this))try{U(this,J,Ii).call(this,p,t,r)}catch(w){throw la(p),U(this,J,Pi).call(this)||this.discard(),w}}if(z=null,n.length>0){var i=Ln.ensure();for(const p of n)i.schedule(p)}if(qr=null,En=null,U(this,J,Pi).call(this)){U(this,J,Vr).call(this,r),U(this,J,Vr).call(this,t);for(const[p,w]of u(this,Mt))oa(p,w);n.length>0&&U(o=z,J,hn).call(o);return}const s=U(this,J,As).call(this);if(s){U(this,J,Vr).call(this,r),U(this,J,Vr).call(this,t),U(l=s,J,Ms).call(l,this);return}u(this,Dt).clear(),u(this,_t).clear();for(const p of u(this,Or))p(this);u(this,Or).clear(),Yr=this,aa(r),aa(t),Yr=null,(c=u(this,Rr))==null||c.resolve();var a=z;if(u(this,Pr)===0&&(u(this,Ge).length===0||a!==null)&&U(this,J,_n).call(this),u(this,Ge).length>0)if(a!==null){for(const p of u(this,Ge))u(a,Ge).push(p);D(this,Ge,[])}else a=this;a!==null&&(Et.clear(),U(f=a,J,hn).call(f))},Ii=function(t,r,n){t.f^=ke;for(var i=t.first;i!==null;){var s=i.f,a=(s&(et|Pt))!==0,o=a&&(s&ke)!==0,l=o||(s&Ce)!==0||u(this,Mt).has(i);if(!l&&i.fn!==null){a?i.f^=ke:(s&mr)!==0?r.push(i):Jr(i)&&((s&ut)!==0&&u(this,_t).add(i),Mr(i));var c=i.first;if(c!==null){i=c;continue}}for(;i!==null;){var f=i.next;if(f!==null){i=f;break}i=i.parent}}},As=function(){for(var t=u(this,Gt);t!==null;){if(!t.is_fork){for(const[r,[,n]]of this.current)if(t.current.has(r)&&!n)return t}t=u(t,Gt)}return null},Ms=function(t){var n;for(const[i,s]of t.current)!this.previous.has(i)&&t.previous.has(i)&&this.previous.set(i,t.previous.get(i)),this.current.set(i,s);for(const[i,s]of t.async_deriveds){const a=this.async_deriveds.get(i);a&&s.promise.then(a.resolve).catch(a.reject)}t.async_deriveds.clear(),this.transfer_effects(u(t,Dt),u(t,_t));const r=i=>{var s=i.reactions;if(s!==null&&!((i.f&Te)!==0&&(i.f&(ye|tt))===0))for(const l of s){var a=l.f;if((a&Te)!==0)r(l);else{var o=l;a&(br|ut)&&!this.async_deriveds.has(o)&&(u(this,_t).delete(o),he(o,ye),this.schedule(o))}}};for(const i of this.current.keys())r(i);this.oncommit(()=>t.discard()),U(n=t,J,_n).call(n),z=this,U(this,J,hn).call(this)},Vr=function(t){for(var r=0;r<t.length;r+=1)Ji(t[r],u(this,Dt),u(this,_t))},qc=function(){var p,w;for(let h=ri;h!==null;h=u(h,cr)){var t=h.id<this.id,r=[];for(const[g,[S,d]]of this.current){if(h.current.has(g)){var n=h.current.get(g)[0];if(t&&S!==n)h.current.set(g,[S,d]);else continue}r.push(g)}if(t)for(const[g,S]of this.async_deriveds){const d=h.async_deriveds.get(g);d&&S.promise.then(d.resolve).catch(d.reject)}var i=[...h.current.keys()].filter(g=>!h.current.get(g)[1]);if(!(!u(h,Nr)||i.length===0)){var s=i.filter(g=>!this.current.has(g));if(s.length===0)t&&h.discard();else if(r.length>0){if(t)for(const g of u(this,Ir))h.unskip_effect(g,S=>{var d;(S.f&(ut|br))!==0?h.schedule(S):U(d=h,J,Vr).call(d,[S])});h.activate();var a=new Set,o=new Map;for(var l of r)sa(l,s,a,o);o=new Map;var c=[...h.current].filter(([g,S])=>{const d=this.current.get(g);return d?d[0]!==S[0]||d[1]!==S[1]:!0}).map(([g])=>g);if(c.length>0)for(const g of u(this,ln))(g.f&(Pe|Ce|wn))===0&&ai(g,c,o)&&((g.f&(br|ut))!==0?(he(g,ye),h.schedule(g)):u(h,Dt).add(g));if(u(h,Ge).length>0&&!u(h,ur)){h.apply();for(var f of U(p=h,J,Ri).call(p))U(w=h,J,Ii).call(w,f,[],[])}h.deactivate()}}}},_n=function(){if(this.linked){var t=u(this,Gt),r=u(this,cr);t===null?ri=r:D(t,cr,r),r===null?$r=t:D(r,Gt,t),this.linked=!1}};let Qt=Ln;function yo(){try{no()}catch(e){$t(e,ni)}}let dt=null;function aa(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(Pe|Ce))===0&&Jr(n)&&(dt=new Set,Mr(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&Sa(n),(dt==null?void 0:dt.size)>0)){Et.clear();for(const i of dt){if((i.f&(Pe|Ce))!==0)continue;const s=[i];let a=i.parent;for(;a!==null;)dt.has(a)&&(dt.delete(a),s.push(a)),a=a.parent;for(let o=s.length-1;o>=0;o--){const l=s[o];(l.f&(Pe|Ce))===0&&Mr(l)}}dt.clear()}}dt=null}}function sa(e,t,r,n){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(const i of e.reactions){const s=i.f;(s&Te)!==0?sa(i,t,r,n):(s&(br|ut))!==0&&(s&ye)===0&&ai(i,t,n)&&(he(i,ye),si(i))}}function ai(e,t,r){const n=r.get(e);if(n!==void 0)return n;if(e.deps!==null)for(const i of e.deps){if(Zt.call(t,i))return!0;if((i.f&Te)!==0&&ai(i,t,r))return r.set(i,!0),!0}return r.set(e,!1),!1}function si(e){z.schedule(e)}function oa(e,t){if(!((e.f&et)!==0&&(e.f&ke)!==0)){(e.f&ye)!==0?t.d.push(e):(e.f&tt)!==0&&t.m.push(e),he(e,ke);for(var r=e.first;r!==null;)oa(r,t),r=r.next}}function la(e){he(e,ke);for(var t=e.first;t!==null;)la(t),t=t.next}let $n=new Set;const Et=new Map;let ca=!1;function Ut(e,t){var r={f:0,v:e,reactions:null,equals:Zi,rv:0,wv:0};return r}function j(e,t){const r=Ut(e);return Ma(r),r}function wo(e,t=!1,r=!0){var i;const n=Ut(e);return t||(n.equals=Qi),xr&&r&&fe!==null&&fe.l!==null&&((i=fe.l).s??(i.s=[])).push(n),n}function A(e,t,r=!1){V!==null&&(!pt||(V.f&wn)!==0)&&jr()&&(V.f&(Te|ut|br|wn))!==0&&(At===null||!At.has(e))&&oo();let n=r?De(t):t;return Ar(e,n,En)}var Jt=null,oi=0;function Ar(e,t,r=null){if(!e.equals(t)){It?Et.set(e,t):Et.has(e)||Et.set(e,e.v);var n=Qt.ensure();if(n.capture(e,t),(e.f&Te)!==0){const i=e;(e.f&ye)!==0&&ti(i),Ae===null&&Jn(i)}e.wv=Oa(),Jt=null,oi=0,fa(e,ye,r),Jt=null,jr()&&F!==null&&(F.f&ke)!==0&&(F.f&(et|Pt))===0&&(at===null?Oo([e]):at.push(e)),!n.is_fork&&$n.size>0&&!ca&&bo()}return t}function bo(){ca=!1;for(const e of $n){(e.f&ke)!==0&&he(e,tt);let t;try{t=Jr(e)}catch{t=!0}t&&Mr(e)}$n.clear()}function ua(e,t=1){var r=v(e),n=t===1?r++:r--;return A(e,r),n}function Kr(e){A(e,e.v+1)}function fa(e,t,r){var n=e.reactions;if(n!==null){var i=jr(),s=n.length;if(oi+=s,oi>1e5&&Jt===null&&(Jt=new Set),Jt!==null){if(Jt.has(e))return;Jt.add(e)}for(var a=0;a<s;a++){var o=n[a],l=o.f;if(!(!i&&o===F)){var c=(l&ye)===0;if(c&&he(o,t),(l&wn)!==0)$n.add(o);else if((l&Te)!==0){var f=o;Ae==null||Ae.delete(f),fa(f,tt,r)}else if(c){var p=o;(l&ut)!==0&&dt!==null&&dt.add(p),r!==null?r.push(p):si(p)}}}}}function De(e){if(typeof e!="object"||e===null||bt in e||Xi in e)return e;const t=jn(e);if(t!==Ts&&t!==Ns)return e;var r=new Map,n=ne(e),i=j(0),s=ir,a=o=>{if(ir===s)return o();var l=V,c=ir;nt(null),Na(s);var f=o();return nt(l),Na(c),f};return n&&r.set("length",j(e.length)),new Proxy(e,{defineProperty(o,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&ao();var f=r.get(l);return f===void 0?a(()=>{var p=j(c.value);return r.set(l,p),p}):A(f,c.value,!0),!0},deleteProperty(o,l){var c=r.get(l);if(c===void 0){if(l in o){const f=a(()=>j(we));r.set(l,f),Kr(i)}}else A(c,we),Kr(i);return!0},get(o,l,c){var h;if(l===bt)return e;var f=r.get(l),p=l in o;if(f===void 0&&(!p||(h=Vt(o,l))!=null&&h.writable)&&(f=a(()=>{var g=De(p?o[l]:we),S=j(g);return S}),r.set(l,f)),f!==void 0){var w=v(f);return w===we?void 0:w}return Reflect.get(o,l,c)},getOwnPropertyDescriptor(o,l){var w;(w=this.has)==null||w.call(this,o,l);var c=Reflect.getOwnPropertyDescriptor(o,l),f=r.get(l);if(f!==void 0){var p=v(f);if(p===we)return;if(c&&"value"in c)c.value=p;else return{enumerable:!0,configurable:!0,value:p,writable:!0}}return c},has(o,l){var w;if(l===bt)return!0;var c=r.get(l),f=c!==void 0&&c.v!==we||Reflect.has(o,l);if(c!==void 0||F!==null&&(!f||(w=Vt(o,l))!=null&&w.writable)){c===void 0&&(c=a(()=>{var h=f?De(o[l]):we,g=j(h);return g}),r.set(l,c));var p=v(c);if(p===we)return!1}return f},set(o,l,c,f){var b;var p=r.get(l),w=l in o;if(n&&l==="length")for(var h=c;h<p.v;h+=1){var g=r.get(h+"");g!==void 0?A(g,we):h in o&&(g=a(()=>j(we)),r.set(h+"",g))}if(p===void 0)(!w||(b=Vt(o,l))!=null&&b.writable)&&(p=a(()=>j(void 0)),A(p,De(c)),r.set(l,p));else{w=p.v!==we;var S=a(()=>De(c));A(p,S)}var d=Reflect.getOwnPropertyDescriptor(o,l);if(d!=null&&d.set&&d.set.call(f,c),!w){if(n&&typeof l=="string"){var y=r.get("length"),_=Number(l);Number.isInteger(_)&&_>=y.v&&A(y,_+1)}Kr(i)}return!0},ownKeys(o){v(i);var l=Reflect.ownKeys(o).filter(p=>{var w=r.get(p);return w===void 0||w.v!==we});for(var[c,f]of r)f.v!==we&&!(c in o)&&l.push(c);return l},setPrototypeOf(){so()}})}function da(e){try{if(e!==null&&typeof e=="object"&&bt in e)return e[bt]}catch{}return e}function va(e,t){return Object.is(da(e),da(t))}var pa,ha,_a,ga;function xo(){if(pa===void 0){pa=window,ha=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;_a=Vt(t,"firstChild").get,ga=Vt(t,"nextSibling").get,Hi(e)&&(e[Kn]=void 0,e[xn]=null,e[Zn]=void 0,e.__e=void 0),Hi(r)&&(r[Ur]=void 0)}}function Rt(e=""){return document.createTextNode(e)}function er(e){return _a.call(e)}function Zr(e){return ga.call(e)}function L(e,t){return er(e)}function X(e,t=!1){{var r=er(e);return r instanceof Comment&&r.data===""?Zr(r):r}}function q(e,t=!1){return er(e)}function C(e,t=1,r=!1){let n=e;for(;t--;)n=Zr(n);return n}function ko(e){e.textContent=""}function ma(){return!1}function li(e,t,r){return t==null||t===Ki?r?document.createElement(e,{is:r}):document.createElement(e):r?document.createElementNS(t,e,{is:r}):document.createElementNS(t,e)}function So(e){var t=F;if(t===null)return V.f|=Ht,e;if((t.f&yr)===0&&(t.f&mr)===0)throw e;$t(e,t)}function $t(e,t){if(!(t!==null&&(t.f&Pe)!==0)){for(;t!==null;){if((t.f&Yn)!==0&&(t.f&(Pe|yn))===0){if((t.f&yr)===0)throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw e}}function ya(e){F===null&&(V===null&&ro(),to()),It&&eo()}function Eo(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function vt(e,t){var r=F;r!==null&&(r.f&Ce)!==0&&(e|=Ce);var n={ctx:fe,deps:null,nodes:null,f:e|ye|ft,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};z==null||z.register_created_effect(n);var i=n;if((e&mr)!==0)qr!==null?qr.push(n):Qt.ensure().schedule(n);else if(t!==null){try{Mr(n)}catch(a){throw Me(n),a}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&wr)===0&&(i=i.first,(e&ut)!==0&&(e&Ft)!==0&&i!==null&&(i.f|=Ft))}if(i!==null&&(i.parent=r,r!==null&&Eo(i,r),V!==null&&(V.f&Te)!==0&&(e&Pt)===0)){var s=V;(s.effects??(s.effects=[])).push(i)}return n}function ci(){return V!==null&&!pt}function An(e){const t=vt(Hr,null);return he(t,ke),t.teardown=e,t}function tr(e){ya();var t=F.f,r=!V&&(t&et)!==0&&fe!==null&&!fe.i;if(r){var n=fe;(n.e??(n.e=[])).push(e)}else return wa(e)}function wa(e){return vt(mr|ji,e)}function $o(e){return ya(),vt(Hr|ji,e)}function Ao(e){Qt.ensure();const t=vt(Pt|wr,e);return(r={})=>new Promise(n=>{r.outro?rr(t,()=>{Me(t),n(void 0)}):(Me(t),n(void 0))})}function ui(e){return vt(mr,e)}function Mo(e){return vt(br|wr,e)}function ba(e,t=0){return vt(Hr|t,e)}function _e(e,t=[],r=[],n=[]){ea(n,t,r,i=>{vt(Hr,()=>{e(...i.map(v))})})}function Qr(e,t=0){var r=vt(ut|t,e);return r}function xa(e,t=0){var r=vt(Gn|t,e);return r}function Be(e){return vt(et|wr,e)}function ka(e){var t=e.teardown;if(t!==null){const r=It,n=V;Aa(!0),nt(null);try{t.call(null)}catch(i){$t(i,e.parent)}finally{Aa(r),nt(n)}}}function fi(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const i=r.ac;i!==null&&Xr(()=>{i.abort(Wr)});var n=r.next;(r.f&Pt)!==0?r.parent=null:Me(r,t),r=n}}function To(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&et)===0&&Me(t),t=r}}function Me(e,t=!0){var r=!1;(t||(e.f&Ps)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(No(e.nodes.start,e.nodes.end),r=!0),e.f|=yn,fi(e,t&&!r),en(e,0);var n=e.nodes&&e.nodes.t;if(n!==null)for(const s of n)s.stop();ka(e),e.f^=yn,e.f|=Pe;var i=e.parent;i!==null&&i.first!==null&&Sa(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function No(e,t){for(;e!==null;){var r=e===t?null:Zr(e);e.remove(),e=r}}function Sa(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function rr(e,t,r=!0){var n=[];e.f|=qn,Ea(e,n,!0);var i=()=>{r&&Me(e),t&&t()},s=n.length;if(s>0){var a=()=>--s||i();for(var o of n)o.out(a)}else i()}function Ea(e,t,r){if((e.f&Ce)===0){e.f^=Ce;var n=e.nodes&&e.nodes.t;if(n!==null)for(const o of n)(o.is_global||r)&&t.push(o);for(var i=e.first;i!==null;){var s=i.next;if((i.f&Pt)===0){var a=(i.f&Ft)!==0||(i.f&et)!==0&&(e.f&ut)!==0;Ea(i,t,a?r:!1)}i=s}}}function Mn(e){e.f&=~qn,$a(e,!0)}function $a(e,t){if((e.f&qn)===0&&(e.f&Ce)!==0){e.f^=Ce,(e.f&ke)===0&&(he(e,ye),Qt.ensure().schedule(e));for(var r=e.first;r!==null;){var n=r.next,i=(r.f&Ft)!==0||(r.f&et)!==0;$a(r,i?t:!1),r=n}var s=e.nodes&&e.nodes.t;if(s!==null)for(const a of s)(a.is_global||t)&&a.in()}}function di(e,t){if(e.nodes)for(var r=e.nodes.start,n=e.nodes.end;r!==null;){var i=r===n?null:Zr(r);t.append(r),r=i}}let Tn=!1,It=!1;function Aa(e){It=e}let V=null,pt=!1;function nt(e){V=e}let F=null;function it(e){F=e}let At=null;function Ma(e){V!==null&&((V.f&bn)!==0||(V.f&Te)!==0)&&(At??(At=new Set)).add(e)}let Ve=null,We=0,at=null;function Oo(e){at=e}let Ta=1,nr=0,ir=nr;function Na(e){ir=e}function Oa(){return++Ta}function Jr(e){var t=e.f;if((t&ye)!==0)return!0;if((t&tt)!==0){for(var r=e.deps,n=r.length,i=0;i<n;i++){var s=r[i];if(Jr(s)&&ra(s),s.wv>e.wv)return!0}(t&ft)!==0&&Ae===null&&he(e,ke)}return!1}function Ca(e,t,r=!0){var n=e.reactions;if(n!==null&&!(At!==null&&At.has(e)))for(var i=0;i<n.length;i++){var s=n[i];(s.f&Te)!==0?Ca(s,t,!1):t===s&&(r?he(s,ye):(s.f&ke)!==0&&he(s,tt),si(s))}}function Pa(e){var t=Ve,r=We,n=at,i=V,s=At,a=fe,o=pt,l=ir,c=e.f;Ve=null,We=0,at=null,V=(c&(et|Pt))===0?e:null,At=null,kr(e.ctx),pt=!1,ir=++nr,e.ac!==null&&(Xr(()=>{e.ac.abort(Wr)}),e.ac=null);try{e.f|=bn;var f=e.fn,p=f();e.f|=yr;var w=Ra(e);if(jr()&&at!==null&&!pt&&w!==null&&(e.f&(Te|tt|ye))===0)for(var h=0;h<at.length;h++)Ca(at[h],e);if(i!==null&&i!==e){if(nr++,i.deps!==null)for(let g=0;g<r;g+=1)i.deps[g].rv=nr;if(t!==null)for(const g of t)g.rv=nr;at!==null&&(n===null?n=at:n.push(...at))}return(e.f&Ht)!==0&&(e.f^=Ht),p}catch(g){return Ra(e),So(g)}finally{e.f^=bn,Ve=t,We=r,at=n,V=i,At=s,kr(a),pt=o,ir=l}}function Ra(e){var i;var t=e.deps,r=z==null?void 0:z.is_fork;if(Ve!==null){var n;if(r||en(e,We),t!==null&&We>0)for(t.length=We+Ve.length,n=0;n<Ve.length;n++)t[We+n]=Ve[n];else e.deps=t=Ve;if(ci()&&(e.f&ft)!==0)for(n=We;n<t.length;n++)((i=t[n]).reactions??(i.reactions=[])).push(e)}else!r&&t!==null&&We<t.length&&(en(e,We),t.length=We);return t}function Co(e,t){let r=t.reactions;if(r!==null){var n=xe.call(r,e);if(n!==-1){var i=r.length-1;i===0?r=t.reactions=null:(r[n]=r[i],r.pop())}}if(r===null&&(t.f&Te)!==0&&(Ve===null||!Zt.call(Ve,t))){var s=t;(s.f&ft)!==0&&(s.f^=ft),s.v!==we&&Jn(s),s.ac!==null&&Xr(()=>{s.ac.abort(Wr),s.ac=null,he(s,ye)}),go(s),en(s,0)}}function en(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Co(e,r[n])}function Mr(e){var t=e.f;if((t&Pe)===0){he(e,ke);var r=F,n=Tn;F=e,Tn=(t&(et|Pt))===0;try{(t&(ut|Gn))!==0?To(e):fi(e),ka(e);var i=Pa(e);e.teardown=typeof i=="function"?i:null,e.wv=Ta;var s}finally{Tn=n,F=r}}}function v(e){var t=e.f,r=(t&Te)!==0;if(V!==null&&!pt){var n=F!==null&&(F.f&Pe)!==0;if(!n&&(At===null||!At.has(e))){var i=V.deps;if((V.f&bn)!==0)e.rv<nr&&(e.rv=nr,Ve===null&&i!==null&&i[We]===e?We++:Ve===null?Ve=[e]:Ve.push(e));else{V.deps??(V.deps=[]),Zt.call(V.deps,e)||V.deps.push(e);var s=e.reactions;s===null?e.reactions=[V]:Zt.call(s,V)||s.push(V)}}}if(It&&Et.has(e))return Et.get(e);if(r){var a=e;if(It){var o=a.v;return((a.f&ke)===0&&a.reactions!==null||La(a))&&(o=ti(a)),Et.set(a,o),o}var l=(a.f&ft)===0&&!pt&&V!==null&&(Tn||(V.f&ft)!==0),c=(a.f&yr)===0;Jr(a)&&(l&&(a.f|=ft),ra(a)),l&&!c&&(na(a),Ia(a))}if(Ae!=null&&Ae.has(e))return Ae.get(e);if((e.f&Ht)!==0)throw e.v;return e.v}function Ia(e){if(e.f|=ft,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&Te)!==0&&(t.f&ft)===0&&(na(t),Ia(t))}function La(e){if(e.v===we)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Et.has(t)||(t.f&Te)!==0&&La(t))return!0;return!1}function Wt(e){var t=pt;try{return pt=!0,e()}finally{pt=t}}function ar(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(bt in e)vi(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&bt in r&&vi(r)}}}function vi(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{vi(e[n],t)}catch{}const r=jn(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=Fi(r);for(let i in n){const s=n[i].get;if(s)try{s.call(e)}catch{}}}}}function Po(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Ro=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Io(e){return Ro.includes(e)}const Lo={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function zo(e){return e=e.toLowerCase(),Lo[e]??e}const Do=["touchstart","touchmove"];function Bo(e){return Do.includes(e)}const sr=Symbol("events"),za=new Set,pi=new Set;function Da(e,t,r,n={}){function i(s){if(n.capture||mi.call(t,s),!s.cancelBubble)return Xr(()=>r==null?void 0:r.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?(i.__removed=!1,St(()=>{i.__removed||t.addEventListener(e,i,n)})):t.addEventListener(e,i,n),i}function hi(e,t,r,n,i){var s={capture:n,passive:i},a=Da(e,t,r,s);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&An(()=>{a.__removed=!0,t.removeEventListener(e,a,s)})}function G(e,t,r){(t[sr]??(t[sr]={}))[e]=r}function or(e){for(var t=0;t<e.length;t++)za.add(e[t]);for(var r of pi)r(e)}let _i=null,gi=!1;function mi(e){var S,d;var t=this,r=t.ownerDocument,n=e.type,i=((S=e.composedPath)==null?void 0:S.call(e))||[],s=i[0]||e.target;_i=e,gi||(gi=!0,setTimeout(()=>{gi=!1,_i=null}));var a=0,o=_i===e&&e[sr];if(o){var l=i.indexOf(o);if(l!==-1&&(t===document||t===window)){e[sr]=t;return}var c=i.indexOf(t);if(c===-1)return;l<=c&&(a=l)}if(s=i[a]||e.target,s!==t){Vi(e,"currentTarget",{configurable:!0,get(){return s||r}});var f=V,p=F;nt(null),it(null);try{for(var w,h=[];s!==null&&s!==t;){try{var g=(d=s[sr])==null?void 0:d[n];g!=null&&(!s.disabled||e.target===s)&&g.call(s,e)}catch(y){w?h.push(y):w=y}if(e.cancelBubble)break;a++,s=a<i.length?i[a]:null}if(w){for(let y of h)queueMicrotask(()=>{throw y});throw w}}finally{e[sr]=t,delete e.currentTarget,nt(f),it(p)}}}const yi=((fs=globalThis==null?void 0:globalThis.window)==null?void 0:fs.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Vo(e){return(yi==null?void 0:yi.createHTML(e))??e}function Ba(e){var t=li("template");return t.innerHTML=Vo(e.replaceAll("<!>","<!---->")),t.content}function tn(e,t){var r=F;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function ge(e,t){var r=(t&Us)!==0,n=(t&Ws)!==0,i,s=!e.startsWith("<!>");return()=>{i===void 0&&(i=Ba(s?e:"<!>"+e),r||(i=er(i)));var a=n||ha?document.importNode(i,!0):i.cloneNode(!0);if(r){var o=er(a),l=a.lastChild;tn(o,l)}else tn(a,a);return a}}function Fo(e,t,r="svg"){var n=!e.startsWith("<!>"),i=`<${r}>${n?e:"<!>"+e}</${r}>`,s;return()=>{if(!s){var a=Ba(i),o=er(a);s=er(o)}var l=s.cloneNode(!0);return tn(l,l),l}}function Ho(e,t){return Fo(e,t,"svg")}function Z(){var e=document.createDocumentFragment(),t=document.createComment(""),r=Rt();return e.append(t,r),tn(t,r),e}function M(e,t){e!==null&&e.before(t)}function Uo(e){let t=0,r=Ut(0),n;return()=>{ci()&&(v(r),ba(()=>(t===0&&(n=Wt(()=>e(()=>Kr(r)))),t+=1,()=>{St(()=>{t-=1,t===0&&(n==null||n(),n=void 0,Kr(r))})})))}}var Wo=Ft|wr;function jo(e,t,r,n){new Xo(e,t,r,n)}class Xo{constructor(t,r,n,i){B(this,oe);Je(this,"parent");Je(this,"is_pending",!1);Je(this,"transform_error");B(this,ot);B(this,Ti,null);B(this,lt);B(this,fr);B(this,Re);B(this,Ye,null);B(this,Ie,null);B(this,qe,null);B(this,Tt,null);B(this,dr,0);B(this,Yt,0);B(this,Lr,!1);B(this,cn,new Set);B(this,un,new Set);B(this,Bt,null);B(this,zn,Uo(()=>(D(this,Bt,Ut(u(this,dr))),()=>{D(this,Bt,null)})));var s;D(this,ot,t),D(this,lt,r),D(this,fr,a=>{var o=F;o.b=this,o.f|=Yn,n(a)}),this.parent=F.b,this.transform_error=i??((s=this.parent)==null?void 0:s.transform_error)??(a=>a),D(this,Re,Qr(()=>{U(this,oe,zi).call(this)},Wo))}defer_effect(t){Ji(t,u(this,cn),u(this,un))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!u(this,lt).pending}update_pending_count(t,r){U(this,oe,Di).call(this,t,r),D(this,dr,u(this,dr)+t),!(!u(this,Bt)||u(this,Lr))&&(D(this,Lr,!0),St(()=>{D(this,Lr,!1),u(this,Bt)&&Ar(u(this,Bt),u(this,dr))}))}get_effect_pending(){return u(this,zn).call(this),v(u(this,Bt))}error(t){if(!u(this,lt).onerror&&!u(this,lt).failed)throw t;z!=null&&z.is_fork?(u(this,Ye)&&z.skip_effect(u(this,Ye)),u(this,Ie)&&z.skip_effect(u(this,Ie)),u(this,qe)&&z.skip_effect(u(this,qe)),z.oncommit(()=>{U(this,oe,Bi).call(this,t)})):U(this,oe,Bi).call(this,t)}}ot=new WeakMap,Ti=new WeakMap,lt=new WeakMap,fr=new WeakMap,Re=new WeakMap,Ye=new WeakMap,Ie=new WeakMap,qe=new WeakMap,Tt=new WeakMap,dr=new WeakMap,Yt=new WeakMap,Lr=new WeakMap,cn=new WeakMap,un=new WeakMap,Bt=new WeakMap,zn=new WeakMap,oe=new WeakSet,Kc=function(){try{D(this,Ye,Be(()=>u(this,fr).call(this,u(this,ot))))}catch(t){this.error(t)}},Zc=function(t){const r=u(this,lt).failed,{reset:n,invoke_onerror:i}=U(this,oe,Li).call(this,t);St(i),r&&D(this,qe,Be(()=>{r(u(this,ot),()=>t,()=>n)}))},Li=function(t){var r=!1,n=!1;const i=()=>{if(r){qs();return}r=!0,n&&lo(),u(this,qe)!==null&&rr(u(this,qe),()=>{D(this,qe,null)}),U(this,oe,Wn).call(this,()=>{U(this,oe,zi).call(this)})};return{reset:i,invoke_onerror:()=>{var a,o;try{n=!0,(o=(a=u(this,lt)).onerror)==null||o.call(a,t,i),n=!1}catch(l){$t(l,u(this,Re)&&u(this,Re).parent)}}}},Qc=function(){const t=u(this,lt).pending;t&&(this.is_pending=!0,D(this,Ie,Be(()=>t(u(this,ot)))),St(()=>{var r=D(this,Tt,document.createDocumentFragment()),n=Rt(),i=!1;if(r.append(n),D(this,Ye,U(this,oe,Wn).call(this,()=>{try{return Be(()=>u(this,fr).call(this,n))}catch(s){try{this.error(s),i=!0}catch(a){$t(a,u(this,Re).parent)}return null}})),u(this,Ye)===null){D(this,Tt,null),i&&U(this,oe,gn).call(this,z);return}u(this,Yt)===0&&(u(this,ot).before(r),D(this,Tt,null),rr(u(this,Ie),()=>{D(this,Ie,null)}),U(this,oe,gn).call(this,z))}))},zi=function(){try{if(this.is_pending=this.has_pending_snippet(),D(this,Yt,0),D(this,dr,0),D(this,Ye,Be(()=>{u(this,fr).call(this,u(this,ot))})),u(this,Yt)>0){var t=D(this,Tt,document.createDocumentFragment());di(u(this,Ye),t);const r=u(this,lt).pending;D(this,Ie,Be(()=>r(u(this,ot))))}else U(this,oe,gn).call(this,z)}catch(r){this.error(r)}},gn=function(t){this.is_pending=!1,t.transfer_effects(u(this,cn),u(this,un))},Wn=function(t){var r=F,n=V,i=fe;it(u(this,Re)),nt(u(this,Re)),kr(u(this,Re).ctx);try{return Qt.ensure(),t()}finally{it(r),nt(n),kr(i)}},Di=function(t,r){var n;if(!this.has_pending_snippet()){this.parent&&U(n=this.parent,oe,Di).call(n,t,r);return}D(this,Yt,u(this,Yt)+t),u(this,Yt)===0&&(U(this,oe,gn).call(this,r),u(this,Ie)&&rr(u(this,Ie),()=>{D(this,Ie,null)}),u(this,Tt)&&(u(this,ot).before(u(this,Tt)),D(this,Tt,null)))},Bi=function(t){u(this,Ye)&&(Me(u(this,Ye)),D(this,Ye,null)),u(this,Ie)&&(Me(u(this,Ie)),D(this,Ie,null)),u(this,qe)&&(Me(u(this,qe)),D(this,qe,null));let r=u(this,lt).failed;const n=i=>{const{reset:s,invoke_onerror:a}=U(this,oe,Li).call(this,i);a(),r&&D(this,qe,U(this,oe,Wn).call(this,()=>{try{return Be(()=>{var o=F;o.b=this,o.f|=Yn,r(u(this,ot),()=>i,()=>s)})}catch(o){return $t(o,u(this,Re).parent),null}}))};St(()=>{var i;try{i=this.transform_error(t)}catch(s){$t(s,u(this,Re)&&u(this,Re).parent);return}i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(n,s=>$t(s,u(this,Re)&&u(this,Re).parent)):n(i)})};function K(e,t){var r=t==null?"":typeof t=="object"?`${t}`:t;r!==(e[Ur]??(e[Ur]=e.nodeValue))&&(e[Ur]=r,e.nodeValue=`${r}`)}function Go(e,t){return Yo(e,t)}const Nn=new Map;function Yo(e,{target:t,anchor:r,props:n={},events:i,context:s,intro:a=!0,transformError:o}){xo();var l=void 0,c=Ao(()=>{var f=r??t.appendChild(Rt());jo(f,{pending:()=>{}},h=>{xt({});var g=fe;s&&(g.c=s),i&&(n.$$events=i),l=e(h,n)||Qn(),kt()},o);var p=new Set,w=h=>{for(var g=0;g<h.length;g++){var S=h[g];if(!p.has(S)){p.add(S);var d=Bo(S);for(const b of[t,document]){var y=Nn.get(b);y===void 0&&(y=new Map,Nn.set(b,y));var _=y.get(S);_===void 0?(b.addEventListener(S,mi,{passive:d}),y.set(S,1)):y.set(S,_+1)}}}};return w(mn(za)),pi.add(w),()=>{var d;for(var h of p)for(const y of[t,document]){var g=Nn.get(y),S=g.get(h);--S==0?(y.removeEventListener(h,mi),g.delete(h),g.size===0&&Nn.delete(y)):g.set(h,S)}pi.delete(w),f!==r&&((d=f.parentNode)==null||d.removeChild(f))}});return qo.set(l,c),l}let qo=new WeakMap;class wi{constructor(t,r=!0){Je(this,"anchor");B(this,gt,new Map);B(this,Nt,new Map);B(this,Ke,new Map);B(this,vr,new Set);B(this,fn,!0);B(this,dn,t=>{if(u(this,gt).has(t)){var r=u(this,gt).get(t),n=u(this,Nt).get(r);if(n)Mn(n),u(this,vr).delete(r);else{var i=u(this,Ke).get(r);i&&(Mn(i.effect),u(this,Nt).set(r,i.effect),u(this,Ke).delete(r),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),n=i.effect)}for(const[s,a]of u(this,gt)){if(u(this,gt).delete(s),s===t)break;const o=u(this,Ke).get(a);o&&(Me(o.effect),u(this,Ke).delete(a))}for(const[s,a]of u(this,Nt)){if(s===r||u(this,vr).has(s))continue;const o=()=>{if(Array.from(u(this,gt).values()).includes(s)){var c=document.createDocumentFragment();di(a,c),c.append(Rt()),u(this,Ke).set(s,{effect:a,fragment:c})}else Me(a);u(this,vr).delete(s),u(this,Nt).delete(s)};u(this,fn)||!n?(u(this,vr).add(s),rr(a,o,!1)):o()}}});B(this,Dn,t=>{u(this,gt).delete(t);const r=Array.from(u(this,gt).values());for(const[n,i]of u(this,Ke))r.includes(n)||(Me(i.effect),u(this,Ke).delete(n))});this.anchor=t,D(this,fn,r)}ensure(t,r){var n=z,i=ma();if(r&&!u(this,Nt).has(t)&&!u(this,Ke).has(t))if(i){var s=document.createDocumentFragment(),a=Rt();s.append(a),u(this,Ke).set(t,{effect:Be(()=>r(a)),fragment:s})}else u(this,Nt).set(t,Be(()=>r(this.anchor)));if(u(this,gt).set(n,t),i){for(const[o,l]of u(this,Nt))o===t?n.unskip_effect(l):n.skip_effect(l);for(const[o,l]of u(this,Ke))o===t?n.unskip_effect(l.effect):n.skip_effect(l.effect);n.oncommit(u(this,dn)),n.ondiscard(u(this,Dn))}else u(this,dn).call(this,n)}}gt=new WeakMap,Nt=new WeakMap,Ke=new WeakMap,vr=new WeakMap,fn=new WeakMap,dn=new WeakMap,Dn=new WeakMap;function je(e,t,r=!1){var n=new wi(e),i=r?Ft:0;function s(a,o){n.ensure(a,o)}Qr(()=>{var a=!1;t((o,l=0)=>{a=!0,s(l,o)}),a||s(-1,null)},i)}function Va(e,t){return t}function Ko(e,t,r){for(var n=[],i=t.length,s,a=t.length,o=0;o<i;o++){let p=t[o];rr(p,()=>{if(s){if(s.pending.delete(p),s.done.add(p),s.pending.size===0){var w=e.outrogroups;bi(e,mn(s.done)),w.delete(s),w.size===0&&(e.outrogroups=null)}}else a-=1},!1)}if(a===0){var l=n.length===0&&r!==null&&e.pending.size===0;if(l){var c=r,f=c.parentNode;ko(f),f.append(c),e.items.clear()}bi(e,t,!l)}else s={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(s)}function bi(e,t,r=!0){var n;if(e.pending.size>0){n=new Set;for(const a of e.pending.values())for(const o of a)n.add(e.items.get(o).e)}for(var i=0;i<t.length;i++){var s=t[i];if(n!=null&&n.has(s)){s.f|=wt;const a=document.createDocumentFragment();di(s,a)}else Me(t[i],r)}}var Fa;function jt(e,t,r,n,i,s=null){var a=e,o=new Map,l=(t&Yi)!==0;if(l){var c=e;a=c.appendChild(Rt())}var f=null,p=ei(()=>{var b=r();return ne(b)?b:b==null?[]:mn(b)}),w,h=new Map,g=!0;function S(b){(_.effect.f&Pe)===0&&(_.pending.delete(b),_.fallback=f,Zo(_,w,a,t,n),f!==null&&(w.length===0?(f.f&wt)===0?Mn(f):(f.f^=wt,nn(f,null,a)):rr(f,()=>{f=null})))}function d(b){_.pending.delete(b)}var y=Qr(()=>{w=v(p);for(var b=w.length,E=new Set,k=z,$=ma(),N=0;N<b;N+=1){var R=w[N],P=n(R,N),Y=g?null:o.get(P);Y?(Y.v&&Ar(Y.v,R),Y.i&&Ar(Y.i,N),$&&k.unskip_effect(Y.e)):(Y=Qo(o,g?a:Fa??(Fa=Rt()),R,P,N,i,t,r),g||(Y.e.f|=wt),o.set(P,Y)),E.add(P)}if(b===0&&s&&!f&&(g?f=Be(()=>s(a)):(f=Be(()=>s(Fa??(Fa=Rt()))),f.f|=wt)),b>E.size&&Js(),!g)if(h.set(k,E),$){for(const[de,Ne]of o)E.has(de)||k.skip_effect(Ne.e);k.oncommit(S),k.ondiscard(d)}else S(k);v(p)}),_={effect:y,items:o,pending:h,outrogroups:null,fallback:f};g=!1}function rn(e){for(;e!==null&&(e.f&et)===0;)e=e.next;return e}function Zo(e,t,r,n,i){var Y,de,Ne,Ee,$e,mt,qt,ct,yt;var s=(n&zs)!==0,a=t.length,o=e.items,l=rn(e.effect.first),c,f=null,p,w=[],h=[],g,S,d,y;if(s)for(y=0;y<a;y+=1)g=t[y],S=i(g,y),d=o.get(S).e,(d.f&wt)===0&&((de=(Y=d.nodes)==null?void 0:Y.a)==null||de.measure(),(p??(p=new Set)).add(d));for(y=0;y<a;y+=1){if(g=t[y],S=i(g,y),d=o.get(S).e,e.outrogroups!==null)for(const pe of e.outrogroups)pe.pending.delete(d),pe.done.delete(d);if((d.f&Ce)!==0&&(Mn(d),s&&((Ee=(Ne=d.nodes)==null?void 0:Ne.a)==null||Ee.unfix(),(p??(p=new Set)).delete(d))),(d.f&wt)!==0)if(d.f^=wt,d===l)nn(d,null,r);else{var _=f?f.next:l;d===e.effect.last&&(e.effect.last=d.prev),d.prev&&(d.prev.next=d.next),d.next&&(d.next.prev=d.prev),Xt(e,f,d),Xt(e,d,_),nn(d,_,r),f=d,w=[],h=[],l=rn(f.next);continue}if(d!==l){if(c!==void 0&&c.has(d)){if(w.length<h.length){var b=h[0],E;f=b.prev;var k=w[0],$=w[w.length-1];for(E=0;E<w.length;E+=1)nn(w[E],b,r);for(E=0;E<h.length;E+=1)c.delete(h[E]);Xt(e,k.prev,$.next),Xt(e,f,k),Xt(e,$,b),l=b,f=$,y-=1,w=[],h=[]}else c.delete(d),nn(d,l,r),Xt(e,d.prev,d.next),Xt(e,d,f===null?e.effect.first:f.next),Xt(e,f,d),f=d;continue}for(w=[],h=[];l!==null&&l!==d;)(c??(c=new Set)).add(l),h.push(l),l=rn(l.next);if(l===null)continue}(d.f&wt)===0&&w.push(d),f=d,l=rn(d.next)}if(e.outrogroups!==null){for(const pe of e.outrogroups)pe.pending.size===0&&(bi(e,mn(pe.done)),($e=e.outrogroups)==null||$e.delete(pe));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||c!==void 0){var N=[];if(c!==void 0)for(d of c)(d.f&Ce)===0&&N.push(d);for(;l!==null;)(l.f&Ce)===0&&l!==e.fallback&&N.push(l),l=rn(l.next);var R=N.length;if(R>0){var P=(n&Yi)!==0&&a===0?r:null;if(s){for(y=0;y<R;y+=1)(qt=(mt=N[y].nodes)==null?void 0:mt.a)==null||qt.measure();for(y=0;y<R;y+=1)(yt=(ct=N[y].nodes)==null?void 0:ct.a)==null||yt.fix()}Ko(e,N,P)}}s&&St(()=>{var pe,Ot;if(p!==void 0)for(d of p)(Ot=(pe=d.nodes)==null?void 0:pe.a)==null||Ot.apply()})}function Qo(e,t,r,n,i,s,a,o){var l=(a&Is)!==0?(a&Ds)===0?wo(r,!1,!1):Ut(r):null,c=(a&Ls)!==0?Ut(i):null;return{v:l,i:c,e:Be(()=>(s(t,l??r,c??i,o),()=>{e.delete(n)}))}}function nn(e,t,r){if(e.nodes)for(var n=e.nodes.start,i=e.nodes.end,s=t&&(t.f&wt)===0?t.nodes.start:r;n!==null;){var a=Zr(n);if(s.before(n),n===i)return;n=a}}function Xt(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function se(e,t,r,n,i){var o,l;if((o=t.$$host)!=null&&o.$$shadowRoot){const c=li("slot");M(e,c);return}var s=(l=t.$$slots)==null?void 0:l[r],a=!1;s===!0&&(s=t.children,a=!0),s===void 0||s(e,a?()=>n:n)}function Jo(e,t,r){var n=new wi(e);Qr(()=>{var i=t()??null;n.ensure(i,i&&(s=>r(s,i)))},Ft)}function el(e,t,r,n,i,s){var a=null,o=e,l=new wi(o,!1);Qr(()=>{const c=t()||null;var f=js;if(c===null){l.ensure(null,null);return}return l.ensure(c,p=>{if(c){if(a=li(c,f),tn(a,a),n){var w=null,h=a.appendChild(Rt());n(a,h),w==null||w.remove()}F.nodes.end=a,p.before(a)}}),()=>{}},Ft),An(()=>{})}function tl(e,t){var r=void 0,n;xa(()=>{r!==(r=t())&&(n&&(Me(n),n=null),r&&(n=Be(()=>{ui(()=>r(e))})))})}function Ha(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=Ha(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function rl(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=Ha(e))&&(n&&(n+=" "),n+=t);return n}function Tr(e){return typeof e=="object"?rl(e):e??""}const Ua=[...` 	
\r\f \v\uFEFF`];function nl(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var i of Object.keys(r))if(r[i])n=n?n+" "+i:i;else if(n.length)for(var s=i.length,a=0;(a=n.indexOf(i,a))>=0;){var o=a+s;(a===0||Ua.includes(n[a-1]))&&(o===n.length||Ua.includes(n[o]))?n=(a===0?"":n.substring(0,a))+n.substring(o+1):a=o}}return n===""?null:n}function Wa(e,t=!1){var r=t?" !important;":";",n="";for(var i of Object.keys(e)){var s=e[i];s!=null&&s!==""&&(n+=" "+i+": "+s+r)}return n}function xi(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function il(e,t){if(t){var r="",n,i;if(Array.isArray(t)?(n=t[0],i=t[1]):n=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var s=!1,a=0,o=!1,l=[];n&&l.push(...Object.keys(n).map(xi)),i&&l.push(...Object.keys(i).map(xi));var c=0,f=-1;const S=e.length;for(var p=0;p<S;p++){var w=e[p];if(o?w==="/"&&e[p-1]==="*"&&(o=!1):s?s===w&&(s=!1):w==="/"&&e[p+1]==="*"?o=!0:w==='"'||w==="'"?s=w:w==="("?a++:w===")"&&a--,!o&&s===!1&&a===0){if(w===":"&&f===-1)f=p;else if(w===";"||p===S-1){if(f!==-1){var h=xi(e.substring(c,f).trim());if(!l.includes(h)){w!==";"&&p++;var g=e.substring(c,p).trim();r+=" "+g+";"}}c=p+1,f=-1}}}}return n&&(r+=Wa(n)),i&&(r+=Wa(i,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Fe(e,t,r,n,i,s){var a=e[Kn];if(a!==r||a===void 0){var o=nl(r,n,s);o==null?e.removeAttribute("class"):t?e.className=o:e.setAttribute("class",o),e[Kn]=r}else if(s&&i!==s)for(var l in s){var c=!!s[l];(i==null||c!==!!i[l])&&e.classList.toggle(l,c)}return s}function ki(e,t={},r,n){for(var i in r){var s=r[i];t[i]!==s&&(r[i]==null?e.style.removeProperty(i):e.style.setProperty(i,s,n))}}function Si(e,t,r,n){var i=e[Zn];if(i!==t){var s=il(t,n);s==null?e.removeAttribute("style"):e.style.cssText=s,e[Zn]=t}else n&&(Array.isArray(n)?(ki(e,r==null?void 0:r[0],n[0]),ki(e,r==null?void 0:r[1],n[1],"important")):ki(e,r,n));return n}function ja(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Xa(e,t){var r=!("__defaultValue"in e);!r&&e.__defaultValue===t||(e.__defaultValue=t,Ga(e,!r||"__value"in e))}function Ga(e,t){var r=e.__defaultValue,n=e.multiple,i=n?r??[]:null;if(!(n&&!ne(i))){var s=e.selectedIndex,a=t&&n?new Set(e.selectedOptions):null;for(var o of e.options){var l=Ei(o);ja(o,n?i.includes(l):va(l,r))}if(t)if(a!==null)for(o of e.options){var c=a.has(o);o.selected!==c&&(o.selected=c)}else e.selectedIndex!==s&&(e.selectedIndex=s)}}function Lt(e,t,r=!1){if(e.multiple){if(t==null)return;if(!ne(t))return Ys();for(var n of e.options)n.selected=t.includes(Ei(n));return}for(n of e.options){var i=Ei(n);if(va(i,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function lr(e){var t=new MutationObserver(r=>{r.every(al)||("__defaultValue"in e&&Ga(e,!1),"__value"in e&&Lt(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),An(()=>{t.disconnect()})}function Ei(e){return"__value"in e?e.__value:e.value}function al(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(r=>r.nodeName==="SELECTEDCONTENT")}return!1}const an=Symbol("class"),sn=Symbol("style"),Ya=Symbol("is custom element"),qa=Symbol("is html"),sl=kn?"input":"INPUT",ol=kn?"option":"OPTION",Ka=kn?"select":"SELECT",ll=kn?"progress":"PROGRESS";function On(e,t){var r=Cn(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==ll)||(e.value=t??"")}function cl(e,t){var r=Cn(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function Se(e,t,r,n){var i=Cn(e);i[t]!==(i[t]=r)&&(t==="loading"&&(e[Rs]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Ja(e).has(t)?e[t]=r:e.setAttribute(t,r))}function ul(e,t,r,n,i=!1,s=!1){var a=Cn(e),o=a[Ya],l=!a[qa],c=t||{},f=e.nodeName===ol,p=e.nodeName===Ka;for(var w in t)!(w in r)&&w[0]+w[1]!=="$$"&&(r[w]=null);r.class?r.class=Tr(r.class):r[an]&&(r.class=null),r[sn]&&(r.style??(r.style=null));var h=Ja(e);if(e.nodeName===sl&&"type"in r&&("value"in r||"__value"in r)){var g=r.type;(g!==c.type||g===void 0&&e.hasAttribute("type"))&&(c.type=g,Se(e,"type",g))}for(const k in r){let $=r[k];if(f&&k==="value"&&$==null){e.value=e.__value="",c[k]=$;continue}if(k==="class"){var S=e.namespaceURI==="http://www.w3.org/1999/xhtml";Fe(e,S,$,n,t==null?void 0:t[an],r[an]),c[k]=$,c[an]=r[an];continue}if(k==="style"){Si(e,$,t==null?void 0:t[sn],r[sn]),c[k]=$,c[sn]=r[sn];continue}var d=c[k];if(!($===d&&!($===void 0&&e.hasAttribute(k)))){c[k]=$;var y=k[0]+k[1];if(y!=="$$")if(y==="on"){const N={},R="$$"+k;let P=k.slice(2);var _=Io(P);if(Po(P)&&(P=P.slice(0,-7),N.capture=!0),!_&&d){if($!=null)continue;e.removeEventListener(P,c[R],N),c[R]=null}if(_)G(P,e,$),or([P]);else if($!=null){let Y=function(de){c[k].call(this,de)};c[R]=Da(P,e,Y,N)}}else if(k==="style")Se(e,k,$);else if(k==="autofocus")vo(e,!!$);else if(!o&&(k==="__value"||k==="value"&&$!=null))e.value=e.__value=$;else if(k==="selected"&&f)ja(e,$);else{var b=k;l||(b=zo(b));var E=b==="defaultValue"||b==="defaultChecked";if(p&&b==="defaultValue")continue;if($==null&&!o&&!E)if(a[k]=null,b==="value"||b==="checked"){let N=e;const R=t===void 0;if(b==="value"){let P=N.defaultValue;N.removeAttribute(b),N.defaultValue=P,N.value=N.__value=R?P:null}else{let P=N.defaultChecked;N.removeAttribute(b),N.defaultChecked=P,N.checked=R?P:!1}}else e.removeAttribute(k);else E||(o||typeof $!="string")&&h.has(b)?(e[b]=$,b in a&&(a[b]=we)):typeof $!="function"&&Se(e,b,$)}}}return c}function Za(e,t,r=[],n=[],i=[],s,a=!1,o=!1){ea(i,r,n,l=>{var c=void 0,f={},p=e.nodeName===Ka,w=!1;if(xa(()=>{var g=t(...l.map(v)),S=ul(e,c,g,s,a,o);if(w&&p){var d=e;"defaultValue"in g&&Xa(d,g.defaultValue),"value"in g&&Lt(d,g.value)}for(let _ of Object.getOwnPropertySymbols(f))g[_]||Me(f[_]);for(let _ of Object.getOwnPropertySymbols(g)){var y=g[_];_.description===Xs&&(!c||y!==c[_])&&(f[_]&&Me(f[_]),f[_]=Be(()=>tl(e,()=>y))),S[_]=y}c=S}),p){var h=e;ui(()=>{var g=c;"defaultValue"in g&&Xa(h,g.defaultValue),Lt(h,g.value,!0),lr(h)})}w=!0})}function Cn(e){return e[xn]??(e[xn]={[Ya]:e.nodeName.includes("-"),[qa]:e.namespaceURI===Ki})}var Qa=new Map;function Ja(e){var t=e.getAttribute("is")||e.nodeName,r=Qa.get(t);if(r)return r;Qa.set(t,r=new Set);for(var n,i=e,s=Element.prototype;s!==i;){n=Fi(i);for(var a in n)n[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&r.add(a);i=jn(i)}return r}function $i(e,t){return e===t||(e==null?void 0:e[bt])===t}function Ai(e=Qn(),t,r,n){var i=fe.r,s=F;return ui(()=>{var a,o;return ba(()=>{a=o,o=[],Wt(()=>{$i(r(...o),e)||(t(e,...o),a&&$i(r(...a),e)&&t(null,...a))})}),()=>{let l=s;for(;l!==i&&l.parent!==null&&l.parent.f&yn;)l=l.parent;const c=()=>{o&&$i(r(...o),e)&&t(null,...o)},f=l.teardown;l.teardown=()=>{c(),f==null||f()}}}),e}function fl(e=!1){const t=fe,r=t.l.u;if(!r)return;let n=()=>ar(t.s);if(e){let i=0,s={};const a=Er(()=>{let o=!1;const l=t.s;for(const c in l)l[c]!==s[c]&&(s[c]=l[c],o=!0);return o&&i++,i});n=()=>v(a)}r.b.length&&$o(()=>{es(t,n),Xn(r.b)}),tr(()=>{const i=Wt(()=>r.m.map(Cs));return()=>{for(const s of i)typeof s=="function"&&s()}}),r.a.length&&tr(()=>{es(t,n),Xn(r.a)})}function es(e,t){if(e.l.s)for(const r of e.l.s)v(r);t()}let Pn=!1;function dl(e){var t=Pn;try{return Pn=!1,[e(),Pn]}finally{Pn=t}}const vl={get(e,t){if(!e.exclude.includes(t))return v(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var n=F;try{it(e.parent_effect),e.special[t]=ht({get[t](){return e.props[t]}},t,qi)}finally{it(n)}}return e.special[t](r),ua(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),ua(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ie(e,t){return new Proxy({props:e,exclude:t,special:{},version:Ut(0),parent_effect:F},vl)}const pl={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Fr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let i=e.props[n];Fr(i)&&(i=i());const s=Vt(i,t);if(s&&s.set)return s.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Fr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const i=Vt(n,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===bt||t===Gi)return!1;for(let r of e.props)if(Fr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Fr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function le(...e){return new Proxy({props:e},pl)}function ht(e,t,r,n){var E;var i=!xr||(r&Vs)!==0,s=(r&Fs)!==0,a=(r&Hs)!==0,o=n,l=!0,c=void 0,f=()=>a&&i?(c??(c=Er(n)),v(c)):(l&&(l=!1,o=a?Wt(n):n),o);let p;if(s){var w=bt in e||Gi in e;p=((E=Vt(e,t))==null?void 0:E.set)??(w&&t in e?k=>e[t]=k:void 0)}var h,g=!1;s?[h,g]=dl(()=>e[t]):h=e[t],h===void 0&&n!==void 0&&(h=f(),p&&(i&&io(),p(h)));var S;if(i?S=()=>{var k=e[t];return k===void 0?f():(l=!0,k)}:S=()=>{var k=e[t];return k!==void 0&&(o=void 0),k===void 0?o:k},i&&(r&qi)===0)return S;if(p){var d=e.$$legacy;return(function(k,$){return arguments.length>0?((!i||!$||d||g)&&p($?S():k),k):S()})}var y=!1,_=((r&Bs)!==0?Er:ei)(()=>(y=!1,S()));s&&v(_);var b=F;return(function(k,$){if(arguments.length>0){const N=$?v(_):i&&s?De(k):k;return A(_,N),y=!0,o!==void 0&&(o=N),k}return It&&y||(b.f&Pe)!==0?_.v:v(_)})}function Mi(e){fe===null&&Zs(),xr&&fe.l!==null?hl(fe).m.push(e):tr(()=>{const t=Wt(e);if(typeof t=="function")return t})}function hl(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const _l="5";typeof window<"u"&&((ds=window.__svelte??(window.__svelte={})).v??(ds.v=new Set)).add(_l);const Q=De({ready:!1,cleanScreen:!1,panelOpen:!0,settingsOpen:!1,startupOpen:!0,focusSection:null,focusNonce:0,popupSection:null,dockExpanded:!1,status:{}});function gl(e){Q.popupSection=Q.popupSection===e?null:e}const Xe=De({});function ts(e){try{return structuredClone(e)}catch{return JSON.parse(JSON.stringify(e))}}function te(e){var t,r,n;if(e==null)return e;try{return((n=(r=(t=window.XRA)==null?void 0:t.i18n)==null?void 0:r.t)==null?void 0:n.call(r,e))??e}catch{return e}}function He(e,t){const r=e.split(".");let n=Xe;for(const i of r){if(n==null)return t;n=n[i]}return n===void 0?t:n}function ml(e){var r,n,i,s,a,o,l,c;const t=window.XRA;if(t){if(e.startsWith("background.")){(n=(r=t.background)==null?void 0:r.apply)==null||n.call(r);return}if(e==="ui.language"){(s=(i=t.i18n)==null?void 0:i.setLanguage)==null||s.call(i,Xe.ui.language);return}if(e==="ui.preview_wireframe"){typeof t.applyMocapWireframeVisibility=="function"&&t.applyMocapWireframeVisibility();return}if(e==="ui.mocap_view"){typeof t.applyMocapWireframeVisibility=="function"&&t.applyMocapWireframeVisibility();return}if(e.startsWith("performance.")){window.XRA_render_fps_limit=Number(Xe.performance.render_fps??60),window.XRA_gpu_preference=String(Xe.performance.gpu_preference||"default"),window.XRA_preserve_drawing_buffer=Xe.performance.preserve_drawing_buffer!==!1,window.XRA_antialias=Xe.performance.antialias!=="off",(o=(a=t.events)==null?void 0:a.emit)==null||o.call(a,"performance",Xe.performance);return}(c=(l=t.events)==null?void 0:l.emit)==null||c.call(l,"config-change",{path:e,value:He(e)})}}function st(e,t){var s,a;const r=window.XRA,n=e.split(".");let i=Xe;for(let o=0;o<n.length-1;o++)i[n[o]]==null&&(i[n[o]]={}),i=i[n[o]];if(i[n[n.length-1]]=t,r!=null&&r.config){let o=r.config;for(let l=0;l<n.length-1;l++)o[n[l]]==null&&(o[n[l]]={}),o=o[n[l]];o[n[n.length-1]]=t}ml(e);try{(a=(s=r==null?void 0:r.profileService)==null?void 0:s.save)==null||a.call(s)}catch{}}function Rn(e,t,r){return new Promise((n,i)=>{const s=setTimeout(()=>i(new Error(`${r} timed out after ${t} ms`)),t);Promise.resolve(e).then(a=>{clearTimeout(s),n(a)},a=>{clearTimeout(s),i(a)})})}async function rs({timeout:e=12e3,dataTimeout:t=8e3}={}){var n,i,s;const r=(n=window.XRA)==null?void 0:n.nativeBridge;if(!(r!=null&&r.startNativeStreamer))throw new Error("native bridge unavailable");try{await Rn(r.startNativeStreamer(),e,"Camera start");const a=performance.now()+t;for(;performance.now()<a;){if((i=r.cameraDataReady)!=null&&i.call(r))return!0;await new Promise(o=>setTimeout(o,120))}return!0}catch(a){try{await((s=r.forceStopCamera)==null?void 0:s.call(r))}catch{}throw a}}async function yl({timeout:e=8e3}={}){var r,n;const t=(r=window.XRA)==null?void 0:r.nativeBridge;if(t!=null&&t.stopNativeStreamer)try{await Rn(t.stopNativeStreamer(),e,"Camera stop")}catch(i){try{await((n=t.forceStopCamera)==null?void 0:n.call(t))}catch{}throw i}}async function wl({timeout:e=12e3,readyTimeout:t=6e3}={}){var n,i,s,a;const r=(n=window.XRA)==null?void 0:n.recorder;if(!(r!=null&&r.start))throw new Error("recorder unavailable");try{await Rn(r.start(),e,"Recording start");const o=performance.now()+t;for(;performance.now()<o;){if((s=(i=r.status)==null?void 0:i.call(r))!=null&&s.active)return!0;await new Promise(l=>setTimeout(l,120))}return!0}catch(o){try{await((a=r.stop)==null?void 0:a.call(r))}catch{}throw o}}async function bl({timeout:e=8e3}={}){var r,n;const t=(r=window.XRA)==null?void 0:r.recorder;if(t!=null&&t.stop)try{await Rn(t.stop(),e,"Recording stop")}catch(i){try{await((n=t.stop)==null?void 0:n.call(t))}catch{}throw i}}function In(){var e,t,r;Q.cleanScreen=!Q.cleanScreen,document.body.classList.toggle("xra-total-clean-screen",Q.cleanScreen);try{(r=(t=(e=window.XRA)==null?void 0:e.ui)==null?void 0:t.setHidden)==null||r.call(t,Q.cleanScreen)}catch{}}function xl(){var e;try{Object.assign(Xe,ts(((e=window.XRA)==null?void 0:e.config)||{}))}catch{}}function ns(){var e;try{const t=(e=window.SA_bridge)==null?void 0:e.backend;t&&typeof t.status=="function"&&(Q.status=t.status()||{})}catch{}}function kl(){const e=()=>window.XRA&&window.XRA.config?(Object.assign(Xe,ts(window.XRA.config)),Q.ready=!0,ns(),window.addEventListener("keydown",t=>{t.key==="Escape"&&Q.cleanScreen&&(t.preventDefault(),In())},!0),!0):!1;if(!e()){const t=setInterval(()=>{e()&&clearInterval(t)},200)}}const Sl={camera:{title:"Camera",icon:"Camera"},devices:{title:"Devices",icon:"SlidersHorizontal"},pose_model:{title:"Pose model",icon:"PersonStanding"},performance:{title:"Performance",icon:"Zap"},tracking:{title:"Motion capture",icon:"Activity"},body:{title:"Body",icon:"PersonStanding"},collider:{title:"Body collider",icon:"Shield"},lip:{title:"Audio & Lip-sync",icon:"Mic"},background:{title:"Background",icon:"Image"},avatar:{title:"Character position (avatar only)",icon:"User"},second_avatar:{title:"Remote avatar (Studio Link)",icon:"Globe"},stage:{title:"3D Stage & Environment",icon:"Landmark"},recorder:{title:"Recording / capture",icon:"Video"},visual_effects:{title:"Visual effects",icon:"Sparkles"},debug:{title:"Diagnostics",icon:"Bug"},ui:{title:"UI & overlays",icon:"Monitor"}},is=["performance","tracking","body","collider","lip","background","stage","avatar","second_avatar","recorder","visual_effects","debug","ui","camera","devices","pose_model"],El=new Set(["left_settings","_custom_","_excluded_"]),$l=new Set(["camera.view_presets","camera.selected_view_preset","ui.preview_video","ui.preview_wireframe","ui.preview_debug","performance.auto_last_result","recorder.output_dir"]);function as(e){const t=String(e).replace(/_/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").trim();return t.charAt(0).toUpperCase()+t.slice(1)}const Al={"ui.language":{type:"select",options:()=>{var e,t;return((t=(e=window.XRA)==null?void 0:e.i18n)==null?void 0:t.LANGUAGES)||[["en","English"]]}},"background.mode":{type:"select",options:[["color","Color"],["image","Image"],["none","None (transparent · OBS)"]]},"background.color":{type:"color"},"background.path":{type:"text"},"ui.mocap_view":{type:"select",label:"Mocap window",options:[["off","Off"],["both","Webcam + skeleton"],["wireframe","Skeleton only"],["video","Webcam only"]]},"ui.mocap_visibility":{type:"select",label:"Mocap window visibility",options:[["always","Always on (black while idle)"],["auto","Auto (hide when tracking is off)"]]},"performance.tracking_pipeline":{type:"select",label:"Tracking mode",options:[["FULL_BODY","Full Body"],["FACE","Face only"],["UPPER_BODY","Upper body"]]},"performance.render_resolution":{type:"select",options:[["720p","720p (HD · GPU Saving)"],["1080p","1080p (Full HD · Recommended)"],["1440p","1440p (2K · High resolution)"]]},"performance.render_fps":{type:"slider",min:15,max:240,step:1},"performance.gpu_preference":{type:"select",label:"Graphics card (GPU)",options:[["default","Default"],["high-performance","Dedicated GPU (High Performance)"],["low-power","Integrated GPU (Low Power)"]]},"performance.shadows":{type:"select",options:[["auto","Auto"],["on","Enabled"],["off","Disabled (GPU saving)"]]},"performance.antialias":{type:"select",label:"Anti-Aliasing (AA)",options:[["auto","Enabled (Hardware MSAA · Recommended)"],["off","Disabled"]]},"performance.spring_bone":{type:"select",label:"Hair/cloth physics (Spring Bone)",options:[["full","Full (every frame)"],["half","Half (1 frame out of 2 · Saving)"],["off","Off"]]},"performance.infer_mode":{type:"select",options:[["native","Native (Auto)"],["640x360","640×360 (Recommended · 30 FPS smooth)"],["640x480","640×480 (Standard 4:3 format)"],["1280x720","1280×720 (HD 720p · High precision)"]]},"performance.pose_fps":{type:"slider",min:5,max:30,step:1},"performance.hand_fps":{type:"slider",min:5,max:30,step:1},"performance.min_tracking_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_pose_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_face_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_joint_confidence":{type:"slider",min:.05,max:1,step:.05},"tracking.hand_recovery_mode":{type:"select",options:[["normal","Normal"],["aggressive","Aggressive"],["off","Off"]]},"tracking.hand_detection_sensitivity":{type:"select",options:[["high","High"],["normal","Normal"],["low","Low"]]},"tracking.stabilize_hand_percent":{type:"slider",min:0,max:100,step:1},"tracking.stabilize_arm":{type:"slider",min:0,max:100,step:1},"tracking.stabilize_arm_time":{type:"slider",min:0,max:2,step:.05},"tracking.native_smoothing":{type:"slider",min:0,max:1,step:.01},"tracking.body_bend_reduction":{type:"slider",min:0,max:1,step:.01},"tracking.upper_body_guard_strength":{type:"slider",min:0,max:1,step:.01},"tracking.guard_jump_deg":{type:"slider",min:5,max:120,step:1},"tracking.guard_hold_ms":{type:"slider",min:0,max:2e3,step:10},"tracking.guard_reacquire_deg":{type:"slider",min:5,max:120,step:1},"tracking.adaptive_smoothing_strength":{type:"slider",min:0,max:1,step:.01},"tracking.guard_confidence_min":{type:"slider",min:0,max:1,step:.01},"tracking.guard_release_ms":{type:"slider",min:0,max:2e3,step:10},"tracking.guard_mode":{type:"select",options:[["off","Off"],["auto","Auto"]]},"tracking.desk_torso_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_hips_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_legs_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_max_yaw_deg":{type:"slider",min:0,max:90,step:1},"tracking.desk_max_pitch_deg":{type:"slider",min:0,max:90,step:1},"tracking.desk_max_roll_deg":{type:"slider",min:0,max:90,step:1},"body.anchor_strength":{type:"slider",min:0,max:1,step:.01},"body.transition_ms":{type:"slider",min:0,max:2e3,step:10},"avatar.offset_x":{type:"slider",min:-5,max:5,step:.01},"avatar.offset_y":{type:"slider",min:-5,max:5,step:.01},"avatar.offset_z":{type:"slider",min:-5,max:5,step:.01},"avatar.rotation_y":{type:"slider",min:-180,max:180,step:1},"second_avatar.offset_x":{type:"slider",min:-20,max:20,step:.1},"second_avatar.offset_y":{type:"slider",min:-10,max:10,step:.1},"second_avatar.offset_z":{type:"slider",min:-10,max:10,step:.1},"second_avatar.rotation_y":{type:"slider",min:-180,max:180,step:1},"stage.scale":{type:"slider",min:.1,max:5,step:.01},"stage.rotation_x":{type:"slider",min:-180,max:180,step:1},"stage.rotation_y":{type:"slider",min:-180,max:180,step:1},"stage.rotation_z":{type:"slider",min:-180,max:180,step:1},"stage.offset_x":{type:"slider",min:-10,max:10,step:.05},"stage.offset_y":{type:"slider",min:-10,max:10,step:.05},"stage.offset_z":{type:"slider",min:-10,max:10,step:.05},"stage.scene_zoom":{type:"slider",min:.5,max:3,step:.01},"stage.lights_intensity":{type:"slider",min:0,max:3,step:.05},"collider.preset":{type:"select",options:[["CUSTOM","Custom"],["NONE","None"]]},"collider.reaction":{type:"select",options:[["z_push","Z push"],["bounce","Bounce"],["block","Block"]]},"collider.head":{type:"slider",min:0,max:200,step:1},"collider.chest":{type:"slider",min:0,max:200,step:1},"collider.waist":{type:"slider",min:0,max:200,step:1},"collider.hip":{type:"slider",min:0,max:200,step:1},"collider.front_clearance":{type:"slider",min:0,max:50,step:1},"lip.analysis_fps":{type:"slider",min:5,max:60,step:1},"lip.fft_size":{type:"select",label:"FFT size",options:[["256","256"],["512","512"],["1024","1024"],["2048","2048"]]},"lip.mic_mix":{type:"slider",min:0,max:1,step:.01},"lip.threshold":{type:"slider",min:0,max:.2,step:.001},"lip.response_gain":{type:"slider",min:0,max:3,step:.05},"lip.vowel_emphasis":{type:"slider",min:0,max:3,step:.05},"recorder.mode":{type:"select",label:"Recording source",options:[["video_audio","Video + Audio"],["video","Video only"],["audio","Audio only"]]},"recorder.audio_only_variant":{type:"select",label:"Audio only mode",options:[["both","Processed + RAW"],["processed","Processed"],["raw","RAW"]]},"recorder.capture_source":{type:"select",label:"Output source",options:[["classic_v74","Classic output · recommended"],["clean_scene","Clean scene output · experimental (no UI)"],["native_xr","XR native video only · fallback"]]},"recorder.output_format":{type:"select",options:[["webm","WebM"],["mp4","MP4"]]},"recorder.audio_profile":{type:"select",options:[["podcast","Podcast"],["call","Call (Browser echo/noise filters)"]]},"recorder.hardware_encode":{type:"select",options:[["auto","Auto"],["on","On"],["off","Off (CPU)"]]},"recorder.width":{type:"slider",min:320,max:3840,step:2},"recorder.height":{type:"slider",min:240,max:2160,step:2},"recorder.fps":{type:"slider",min:15,max:60,step:1},"recorder.gate_threshold_db":{type:"slider",min:-80,max:-5,step:.5},"recorder.gate_hold_ms":{type:"slider",min:0,max:1e3,step:10},"recorder.gate_release_ms":{type:"slider",min:0,max:1e3,step:10},"recorder.video_bps":{type:"slider",min:5e5,max:2e7,step:1e5},"recorder.audio_bps":{type:"slider",min:32e3,max:32e4,step:8e3},"recorder.segment_minutes":{type:"select",options:[["0","Off"],["30","Every 30 min"],["60","Every 60 min"]]},"recorder.raw_audio_format":{type:"select",options:[["flac","FLAC (lossless)"],["wav","WAV (large)"]]},"recorder.filename":{type:"text"},"camera.optimized":{type:"toggle"},"camera.width":{type:"slider",min:160,max:1920,step:2},"camera.height":{type:"slider",min:120,max:1080,step:2},"camera.fps":{type:"slider",min:5,max:60,step:1}};function Ml(e){const t=[];for(const[r,n]of Object.entries(e||{})){if(El.has(r)||!n||typeof n!="object"||Array.isArray(n))continue;const i=Sl[r]||{},s=[];for(const[a,o]of Object.entries(n)){const l=`${r}.${a}`;if($l.has(l))continue;const c=Al[l]||{};if(c.hidden||o!==null&&typeof o=="object")continue;const f=c.type||(typeof o=="boolean"?"toggle":typeof o=="number"?"number":"text");s.push({type:f,path:l,label:c.label||as(a),min:c.min,max:c.max,step:c.step,options:c.options})}s.length&&t.push({id:r,title:i.title||as(r),icon:i.icon||"⚙",controls:s})}return t.sort((r,n)=>{const i=is.indexOf(r.id),s=is.indexOf(n.id);return(i<0?999:i)-(s<0?999:s)}),t}var Tl=ge("<option> </option>"),Nl=ge("<select></select>"),Ol=ge("<select><option> </option><option> </option></select>"),Cl=ge('<span class="xra-val"> </span> <input type="range"/>',1),Pl=ge('<input type="checkbox"/>'),Rl=ge('<input type="color"/>'),Il=ge('<input type="number"/>'),Ll=ge('<input type="text"/>'),zl=ge('<label><span class="xra-row-label"> </span> <!></label>');function Dl(e,t){xt(t,!0);const r=rt(()=>typeof t.control.options=="function"?t.control.options():t.control.options||[]),n=y=>y===!1?"off":"auto",i=y=>y==="off"?!1:null;var s=zl();let a;var o=L(s),l=q(o,!0),c=C(o,2);{var f=y=>{var _=Nl();jt(_,21,()=>v(r),Va,(E,k)=>{var $=Tl(),N=q($,!0),R={};_e(P=>{K(N,P),R!==(R=v(k)[0])&&($.value=($.__value=R)??"")},[()=>te(v(k)[1])]),M(E,$)});var b;lr(_),_e(E=>{b!==(b=E)&&(_.value=(_.__value=b)??"",Lt(_,b))},[()=>He(t.control.path)]),G("change",_,E=>st(t.control.path,E.currentTarget.value)),M(y,_)},p=y=>{var _=Ol(),b=L(_),E=q(b,!0);b.value=b.__value="auto";var k=C(b),$=q(k,!0);k.value=k.__value="off";var N;lr(_),_e((R,P,Y)=>{K(E,R),K($,P),N!==(N=Y)&&(_.value=(_.__value=N)??"",Lt(_,N))},[()=>te("Auto (follow tracking)"),()=>te("Off"),()=>n(He(t.control.path))]),G("change",_,R=>st(t.control.path,i(R.currentTarget.value))),M(y,_)},w=y=>{var _=Cl(),b=X(_),E=q(b,!0),k=C(b,2);_e(($,N)=>{K(E,$),Se(k,"min",t.control.min),Se(k,"max",t.control.max),Se(k,"step",t.control.step),On(k,N)},[()=>He(t.control.path),()=>He(t.control.path,t.control.min)]),G("input",k,$=>st(t.control.path,Number($.currentTarget.value))),M(y,_)},h=y=>{var _=Pl();_e(b=>cl(_,b),[()=>!!He(t.control.path)]),G("change",_,b=>st(t.control.path,b.currentTarget.checked)),M(y,_)},g=y=>{var _=Rl();_e(b=>On(_,b),[()=>He(t.control.path)]),G("input",_,b=>st(t.control.path,b.currentTarget.value)),M(y,_)},S=y=>{var _=Il();_e(b=>{Se(_,"step",t.control.step||"any"),On(_,b)},[()=>He(t.control.path,0)]),G("input",_,b=>st(t.control.path,Number(b.currentTarget.value))),M(y,_)},d=y=>{var _=Ll();_e(b=>On(_,b),[()=>He(t.control.path,"")]),G("change",_,b=>st(t.control.path,b.currentTarget.value)),M(y,_)};je(c,y=>{t.control.type==="select"?y(f):t.control.type==="tristate"?y(p,1):t.control.type==="slider"?y(w,2):t.control.type==="toggle"?y(h,3):t.control.type==="color"?y(g,4):t.control.type==="number"?y(S,5):t.control.type==="text"&&y(d,6)})}_e(y=>{a=Fe(s,1,"xra-row",null,a,{"xra-row-slider":t.control.type==="slider"}),K(l,y)},[()=>te(t.control.label)]),M(e,s),kt()}or(["change","input"]);function ss(e,t){xt(t,!0);var r=Z(),n=X(r);jt(n,17,()=>t.section.controls,i=>i.path,(i,s)=>{var a=Z(),o=X(a);{var l=f=>{Dl(f,{get control(){return v(s)}})},c=rt(()=>!v(s).when||v(s).when(Xe));je(o,f=>{v(c)&&f(l)})}M(i,a)}),M(e,r),kt()}co();/**
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
 */const os=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();var Fl=Ho("<svg><!><!></svg>");function ce(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]),n=ie(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);xt(t,!1);let i=ht(t,"name",8,void 0),s=ht(t,"color",8,"currentColor"),a=ht(t,"size",8,24),o=ht(t,"strokeWidth",8,2),l=ht(t,"absoluteStrokeWidth",8,!1),c=ht(t,"iconNode",24,()=>[]);fl();var f=Fl();Za(f,(h,g,S)=>({...Bl,...h,...n,width:a(),height:a(),stroke:s(),"stroke-width":g,class:S}),[()=>Vl(n)?void 0:{"aria-hidden":"true"},()=>(ar(l()),ar(o()),ar(a()),Wt(()=>l()?Number(o())*24/Number(a()):o())),()=>(ar(os),ar(i()),ar(r),Wt(()=>os("lucide-icon","lucide",i()?`lucide-${i()}`:"",r.class)))]);var p=L(f);jt(p,1,c,Va,(h,g)=>{var S=rt(()=>Wi(v(g),2));let d=()=>v(S)[0],y=()=>v(S)[1];var _=Z(),b=X(_);el(b,d,!0,(E,k)=>{Za(E,()=>({...y()}))}),M(h,_)});var w=C(p);se(w,t,"default",{}),M(e,f),kt()}function Hl(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];ce(e,le({name:"camera"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=X(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function Ul(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 5H3"}],["path",{d:"M12 19H3"}],["path",{d:"M14 3v4"}],["path",{d:"M16 17v4"}],["path",{d:"M21 12h-9"}],["path",{d:"M21 19h-5"}],["path",{d:"M21 5h-7"}],["path",{d:"M8 10v4"}],["path",{d:"M8 12H3"}]];ce(e,le({name:"sliders-horizontal"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=X(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function Wl(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"5",r:"1"}],["path",{d:"m9 20 3-6 3 6"}],["path",{d:"m6 8 6 2 6-2"}],["path",{d:"M12 10v4"}]];ce(e,le({name:"person-standing"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=X(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function jl(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];ce(e,le({name:"zap"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=X(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function Xl(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]];ce(e,le({name:"activity"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=X(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function Gl(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];ce(e,le({name:"shield"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=X(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function Yl(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 19v3"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3"}]];ce(e,le({name:"mic"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=X(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function ql(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]];ce(e,le({name:"image"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=X(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function Kl(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 18v-7"}],["path",{d:"M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"}],["path",{d:"M14 18v-7"}],["path",{d:"M18 18v-7"}],["path",{d:"M3 22h18"}],["path",{d:"M6 18v-7"}]];ce(e,le({name:"landmark"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=X(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function Zl(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];ce(e,le({name:"user"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=X(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function Ql(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];ce(e,le({name:"globe"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=X(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function Jl(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]];ce(e,le({name:"video"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=X(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function ec(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];ce(e,le({name:"sparkles"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=X(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function tc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 20v-9"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97"}],["path",{d:"M22 13h-4"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97"}],["path",{d:"M6 13H2"}],["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13"}]];ce(e,le({name:"bug"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=X(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function rc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]];ce(e,le({name:"monitor"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=X(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function nc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"10",r:"8"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 22h10"}],["path",{d:"M12 22v-4"}]];ce(e,le({name:"webcam"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=X(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function ls(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}]];ce(e,le({name:"circle"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=X(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function ic(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];ce(e,le({name:"square"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=X(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function ac(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]];ce(e,le({name:"eye"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=X(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function sc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}],["path",{d:"m2 2 20 20"}]];ce(e,le({name:"eye-off"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=X(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function oc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];ce(e,le({name:"folder-open"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=X(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function lc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];ce(e,le({name:"info"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=X(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function cc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ce(e,le({name:"x"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=X(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function uc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];ce(e,le({name:"settings"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=X(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function fc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ce(e,le({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=X(a);se(o,t,"default",{}),M(i,a)},$$slots:{default:!0}}))}function Ue(e,t){const r={Camera:Hl,SlidersHorizontal:Ul,PersonStanding:Wl,Zap:jl,Activity:Xl,Shield:Gl,Mic:Yl,Image:ql,Landmark:Kl,User:Zl,Globe:Ql,Video:Jl,Sparkles:ec,Bug:tc,Monitor:rc,Webcam:nc,Circle:ls,Square:ic,Eye:ac,EyeOff:sc,FolderOpen:oc,Info:lc,X:cc,Settings:uc,RefreshCw:fc};let n=ht(t,"name",3,"Circle"),i=ht(t,"size",3,16),s=ht(t,"strokeWidth",3,2),a=ht(t,"class",3,"");const o=rt(()=>r[n()]??ls);var l=Z(),c=X(l);Jo(c,()=>v(o),(f,p)=>{p(f,{get size(){return i()},get"stroke-width"(){return s()},get class(){return a()}})}),M(e,l)}var dc=ge('<div class="xra-sec-body"><!></div>'),vc=ge('<details class="xra-sec"><summary><span class="xra-sec-title"><!> <span> </span></span> <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></summary> <!></details>');function pc(e,t){xt(t,!0);const r="ui.sections_open";let n=j(De(Wt(()=>{var d;return((d=He(r,{}))==null?void 0:d[t.section.id])??!1}))),i;function s(){A(n,!v(n)),st(`${r}.${t.section.id}`,v(n))}tr(()=>{Q.focusNonce,!(Q.focusSection!==t.section.id||!Q.panelOpen)&&(A(n,!0),st(`${r}.${t.section.id}`,!0),requestAnimationFrame(()=>i==null?void 0:i.scrollIntoView({block:"nearest",behavior:"smooth"})))});var a=vc(),o=L(a),l=L(o),c=L(l);Ue(c,{get name(){return t.section.icon},size:15,class:"xra-sec-icon"});var f=C(c,2),p=q(f,!0),w=C(l,2);let h;var g=C(o,2);{var S=d=>{var y=dc(),_=L(y);ss(_,{get section(){return t.section}}),M(d,y)};je(g,d=>{v(n)&&d(S)})}Ai(a,d=>i=d,()=>i),_e(d=>{a.open=v(n),K(p,d),h=Fe(w,0,"xra-sec-chevron",null,h,{open:v(n)})},[()=>te(t.section.title)]),G("click",o,d=>{d.preventDefault(),s()}),M(e,a),kt()}or(["click"]);var on=ge('<option class="svelte-x8svx4"> </option>'),hc=ge('<div class="warn svelte-x8svx4"> </div>'),_c=ge('<div class="xra-startup svelte-x8svx4"><div class="card svelte-x8svx4" role="dialog" aria-label="XR Animator VMC"><div class="head svelte-x8svx4"><div class="svelte-x8svx4"><h2 class="svelte-x8svx4">XR Animator <span class="brand-tag svelte-x8svx4">VMC</span></h2> <div class="sub svelte-x8svx4"> </div></div> <button type="button" class="close svelte-x8svx4"><!></button></div> <div class="grid svelte-x8svx4"><label class="field svelte-x8svx4"><div class="sub svelte-x8svx4">Language</div> <select class="svelte-x8svx4"></select></label> <label class="field svelte-x8svx4"><div class="sub svelte-x8svx4">Master preset</div> <select class="svelte-x8svx4"></select></label></div> <div class="status svelte-x8svx4"> </div> <section class="camera svelte-x8svx4"><div class="camera-head svelte-x8svx4"><div class="camera-title svelte-x8svx4"> </div> <div> </div></div> <div class="camera-row svelte-x8svx4"><select class="svelte-x8svx4"><!></select> <button type="button" class="action svelte-x8svx4"><!></button></div> <!></section> <div class="sub bg svelte-x8svx4"> </div> <div class="avatar svelte-x8svx4"><div class="sub svelte-x8svx4"> </div> <button type="button" class="action svelte-x8svx4"> </button></div> <div class="foot svelte-x8svx4"><button type="button" class="action svelte-x8svx4"> </button> <button type="button" class="action primary svelte-x8svx4"> </button></div></div></div>');function gc(e,t){xt(t,!0);const r=()=>window.XRA,n=m=>te(m),i=["AUTO","ECO","LOW","BALANCED","QUALITY","HIGH","MAX","CUSTOM"];function s(){var m,x,T;try{(T=(x=(m=r())==null?void 0:m.profileService)==null?void 0:x.save)==null||T.call(x,0)}catch{}}const a=(()=>{var x,T;const m=(T=(x=r())==null?void 0:x.i18n)==null?void 0:T.LANGUAGES;return Array.isArray(m)&&m.length?m:[["auto","Auto / System"],["en","English"],["it","Italiano"]]})();let o=j("auto"),l=j("CUSTOM"),c=j(""),f=j("default"),p=j(De([])),w=j(!1),h=j(""),g=j(!1),S=j(""),d=j(""),y=j(!1),_=j(!1),b=j(!1),E=j(!1),k=!1,$=!1,N=0,R=0,P=[];function Y(){var m,x,T;k||(k=!0,R&&(clearInterval(R),R=0),s(),Q.startupOpen=!1,(T=(x=(m=r())==null?void 0:m.ui)==null?void 0:x.refresh)==null||T.call(x))}async function de(){var m,x;A(_,!0);try{await rs()}catch(T){(x=(m=r()).toast)==null||x.call(m,"Tracking: "+T.message,"warn",4500)}finally{A(_,!1),Y()}}async function Ne(m){const x=r();if(m=String(m||"CUSTOM").toUpperCase(),m==="CUSTOM"){x.config.performance.master_preset="CUSTOM",s(),A(c,"CUSTOM · ready");return}if(m==="AUTO"){A(c,"Benchmarking…");const T=await x.performance.benchmarkHardwareOnly();A(c,`AUTO → ${T.preset} (${T.fps.toFixed(1)} fps)`),await x.performance.applyPresetSafe(T.preset),x.config.performance.master_preset="AUTO",x.config.performance.auto_last_result=T,s();return}A(c,`${m}: applying…`),await x.performance.applyPresetSafe(m),A(c,`${m} · applied`)}function Ee(m=""){var W,ee,re;const x=(W=r())==null?void 0:W.nativeBridge,T=((ee=x==null?void 0:x.activeCamera)==null?void 0:ee.call(x))||{},I=!!((re=x==null?void 0:x.cameraRunning)!=null&&re.call(x));A(g,I),A(S,m||(I?`${n("ON")} · ${T.label||n("Default camera")}`:n("OFF")),!0)}async function $e(m=!1){var T,I,W;const x=(T=r())==null?void 0:T.nativeBridge;if(x!=null&&x.enumerateCameras){A(E,!0);try{const ee=await x.enumerateCameras({requestPermission:m}),re=x.activeCamera()||{};A(p,(ee||[]).map(ze=>({deviceId:ze.deviceId,label:ze.label})),!0);const me=re.deviceId||((I=Xe.devices)==null?void 0:I.camera_device_id)||"";A(h,v(p).some(ze=>ze.deviceId===me)?me:((W=v(p)[0])==null?void 0:W.deviceId)||"",!0),A(w,!0),Ee()}catch{A(w,!0),Ee(n("Camera unavailable"))}finally{A(E,!1)}}}async function mt(m){var W,ee;const x=(W=r())==null?void 0:W.nativeBridge,T=((ee=m==null?void 0:m.currentTarget)==null?void 0:ee.value)??v(h),I=v(p).find(re=>re.deviceId===T);if(I){A(E,!0);try{const re={deviceId:I.deviceId,label:I.label};x.cameraRunning()?await x.switchCamera(re):await x.setCameraPreference(re),Ee()}catch(re){Ee("Error · "+re.message)}finally{A(E,!1)}}}function qt(){var T,I,W,ee,re,me,ze,Oe;const m=(W=(I=(T=r())==null?void 0:T.xraBackend)==null?void 0:I.snapshot)==null?void 0:W.call(I),x=(m==null?void 0:m.capture)||((Oe=(ze=(me=(re=(ee=window.SA_bridge)==null?void 0:ee.backend)==null?void 0:re.status)==null?void 0:me.call(re))==null?void 0:ze.backend)==null?void 0:Oe.capture);if(x!=null&&x.camera_busy){const Ct=(x.busy_processes&&x.busy_processes.length?x.busy_processes:x.busy_process?[x.busy_process]:[]).filter(pn=>!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(String(pn).trim()));if(Ct.length)return{busy:!0,proc:Ct.join(", ")}}if(x!=null&&x.last_error&&x.last_error.includes("Webcam occupata")){const be=x.last_error.match(/Webcam occupata da:\s*([^.]+)/i),Ct=be?be[1].trim():"";if(!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(Ct))return{busy:!0,proc:x.last_error}}return{busy:!1,proc:""}}function ct(){var m,x,T,I,W,ee,re,me,ze;if(typeof((x=(m=r())==null?void 0:m.nativeBridge)==null?void 0:x.isAvatarReady)=="function")return r().nativeBridge.isAvatarReady();if((T=window.MMD_SA)!=null&&T.MMD_started){const Oe=(ee=(W=(I=window.MMD_SA)==null?void 0:I.THREEX)==null?void 0:W.get_model)==null?void 0:ee.call(W,0);let be=Oe;if((Oe==null?void 0:Oe.type)==="MMD_dummy")try{be=Oe.model||null}catch{be=null}const Ct=((re=be==null?void 0:be.model)==null?void 0:re.scene)||(be==null?void 0:be.mesh)||(be==null?void 0:be.scene)||null;if(be&&!(Oe!=null&&Oe.loading)&&!be.loading&&!((ze=(me=window.MMD_SA)==null?void 0:me.THREEX)!=null&&ze._loading_model)&&Ct)return Ct.visible!==!1}return!1}function yt(){var x,T,I;const m=(x=r())==null?void 0:x.xraBackend;return!m||!m.active?!0:!!((I=(T=m.snapshot)==null?void 0:T.call(m))!=null&&I.ready)}function pe(){if(k)return;const m=qt();A(d,m.busy?`Webcam in use by another application (${m.proc}). Close it to start tracking.`:"",!0),A(y,ct()&&yt(),!0),v(y)&&!$&&!N?N=Date.now()+2e3:v(y)||(N=0)}function Ot(){pe(),N&&!$&&!v(_)&&Date.now()>=N&&Y()}async function zr(m){var T,I,W;const x=((T=m==null?void 0:m.currentTarget)==null?void 0:T.value)??v(l);A(l,x,!0),A(b,!0);try{await Ne(x),r().events.emit("state",{path:"performance.master_preset",value:r().config.performance.master_preset}),xl()}catch(ee){console.error("[XRA START]",ee),A(c,"Preset error: "+ee.message)}finally{A(b,!1),(W=(I=r().ui)==null?void 0:I.refresh)==null||W.call(I)}}function Dr(m){var x,T,I,W;A(o,((x=m==null?void 0:m.currentTarget)==null?void 0:x.value)??v(o),!0),(W=(I=(T=r())==null?void 0:T.i18n)==null?void 0:I.setLanguage)==null||W.call(I,v(o))}async function Br(){var m,x;try{await((x=(m=r().nativeBridge)==null?void 0:m.openVrmPicker)==null?void 0:x.call(m))}catch(T){r().toast("VRM loader: "+T.message,"error",4500)}}Mi(()=>{var T,I,W,ee,re,me,ze,Oe,be,Ct,pn,Ss,Es;const m=r();A(c,n("Ready."),!0),A(o,((I=(T=m==null?void 0:m.config)==null?void 0:T.ui)==null?void 0:I.language)||"auto",!0),A(l,((ee=(W=m==null?void 0:m.config)==null?void 0:W.performance)==null?void 0:ee.master_preset)==="MINIMAL"?"ECO":((me=(re=m==null?void 0:m.config)==null?void 0:re.performance)==null?void 0:me.master_preset)||"CUSTOM",!0),A(f,((Oe=(ze=m==null?void 0:m.config)==null?void 0:ze.background)==null?void 0:Oe.path)||((Ct=(be=m==null?void 0:m.config)==null?void 0:be.background)==null?void 0:Ct.color)||"default",!0),Ee(),setTimeout(()=>$e(!1),100),R=setInterval(Ot,300),window.addEventListener("MMDStarted",pe),(pn=m.xraBackend)!=null&&pn.onStatus&&m.xraBackend.onStatus(pe);const x=gr=>{gr.key==="Escape"&&Y()};window.addEventListener("keydown",x,!0),pe(),(Es=(Ss=m.whenNativeReady)==null?void 0:Ss.call(m))==null||Es.then(()=>{Q.startupOpen&&$e(!1)});for(const gr of["camera-started","camera-stopped","camera-switched"])P.push(m.events.on(gr,()=>{Q.startupOpen&&$e(!1)}));for(const gr of["avatar-loading","avatar-changed","avatar-ready"])P.push(m.events.on(gr,()=>pe()));return()=>{R&&clearInterval(R),window.removeEventListener("MMDStarted",pe),window.removeEventListener("keydown",x,!0);for(const gr of P)try{gr()}catch{}P=[]}});var O=_c(),H=L(O),ae=L(H),ve=L(ae),Le=C(L(ve),2),Ze=q(Le,!0),Qe=C(ve,2),pr=L(Qe);Ue(pr,{name:"X",size:15});var Bn=C(ae,2),vs=L(Bn),hr=C(L(vs),2);jt(hr,21,()=>a,([m,x])=>m,(m,x)=>{var T=rt(()=>Wi(v(x),2));let I=()=>v(T)[0],W=()=>v(T)[1];var ee=on(),re=q(ee,!0),me={};_e(()=>{K(re,W()),me!==(me=I())&&(ee.value=(ee.__value=me)??"")}),M(m,ee)});var Vn;lr(hr);var Nc=C(vs,2),_r=C(L(Nc),2);jt(_r,20,()=>i,m=>m,(m,x)=>{var T=on(),I=q(T,!0),W={};_e(()=>{K(I,x),W!==(W=x)&&(T.value=(T.__value=W)??"")}),M(m,T)});var Fn;lr(_r);var ps=C(Bn,2),Oc=q(ps,!0),hs=C(ps,2),_s=L(hs),gs=L(_s),Cc=q(gs,!0),ms=C(gs,2);let ys;var Pc=q(ms,!0),ws=C(_s,2),Kt=L(ws),Rc=L(Kt);{var Ic=m=>{var x=on(),T=q(x,!0);x.value=x.__value="",_e(I=>K(T,I),[()=>n("Loading cameras…")]),M(m,x)},Lc=m=>{var x=on(),T=q(x,!0);x.value=x.__value="",_e(I=>K(T,I),[()=>n("No cameras found")]),M(m,x)},zc=m=>{var x=Z(),T=X(x);jt(T,17,()=>v(p),I=>I.deviceId,(I,W)=>{var ee=on(),re=q(ee,!0),me={};_e(()=>{K(re,v(W).label),me!==(me=v(W).deviceId)&&(ee.value=(ee.__value=me)??"")}),M(I,ee)}),M(m,x)};je(Rc,m=>{v(w)?v(p).length?m(zc,-1):m(Lc,1):m(Ic)})}var Hn;lr(Kt);var vn=C(Kt,2),Dc=L(vn);Ue(Dc,{name:"RefreshCw",size:14});var Bc=C(ws,2);{var Vc=m=>{var x=hc(),T=q(x,!0);_e(()=>K(T,v(d))),M(m,x)};je(Bc,m=>{v(d)&&m(Vc)})}var bs=C(hs,2),Fc=q(bs),xs=C(bs,2),ks=L(xs),Hc=q(ks,!0),Ni=C(ks,2),Uc=q(Ni,!0),Wc=C(xs,2),Un=L(Wc),jc=q(Un,!0),Oi=C(Un,2),Xc=q(Oi,!0);_e((m,x,T,I,W,ee,re,me,ze,Oe)=>{K(Ze,m),Se(Qe,"title",x),Se(Qe,"aria-label",T),hr.disabled=v(_),Vn!==(Vn=v(o))&&(hr.value=(hr.__value=Vn)??"",Lt(hr,Vn)),_r.disabled=v(b)||v(_),Fn!==(Fn=v(l))&&(_r.value=(_r.__value=Fn)??"",Lt(_r,Fn)),K(Oc,v(c)),K(Cc,I),ys=Fe(ms,1,"camera-state svelte-x8svx4",null,ys,{on:v(g)}),K(Pc,v(S)),Kt.disabled=v(E)||v(_),Hn!==(Hn=v(h))&&(Kt.value=(Kt.__value=Hn)??"",Lt(Kt,Hn)),Se(vn,"title",W),Se(vn,"aria-label",ee),vn.disabled=v(E)||v(_),K(Fc,`Background: ${v(f)??""}`),K(Hc,re),Ni.disabled=v(_),K(Uc,me),Un.disabled=v(_),K(jc,ze),Oi.disabled=v(_),K(Xc,Oe)},[()=>n("Quick setup · changes apply immediately."),()=>n("Close"),()=>n("Close"),()=>n("Webcam"),()=>n("Refresh cameras"),()=>n("Refresh cameras"),()=>n("Avatar: the last VRM you chose is copied into avatars/ and restored at startup."),()=>n("Load / change VRM…"),()=>n("Continue"),()=>v(_)?n("Starting…"):n("Start tracking")]),G("click",O,Y),G("click",H,m=>m.stopPropagation()),G("pointerdown",H,m=>m.stopPropagation()),hi("pointerenter",H,()=>{$=!0}),G("click",Qe,Y),G("change",hr,Dr),G("change",_r,zr),G("change",Kt,mt),G("click",vn,()=>$e(!0)),G("click",Ni,Br),G("click",Un,Y),G("click",Oi,de),M(e,O),kt()}or(["click","pointerdown","change"]);var mc=ge('<button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button>'),yc=ge('<nav class="xra-dock group fixed left-2 top-1/2 z-[99990] flex w-[46px] max-h-[92vh] -translate-y-1/2 flex-col gap-0.5 overflow-hidden rounded-xl border border-white/10 bg-[var(--xra-ui-bg)] p-1.5 font-sans text-[12.5px] leading-snug text-[var(--xra-ui-fg)] shadow-[0_12px_40px_rgba(0,0,0,.55)] transition-[width] duration-200 hover:w-[232px]"><!> <div class="my-1 h-px bg-white/10"></div> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button></nav>');function wc(e,t){xt(t,!0);const r=()=>window.XRA;let n=j(!1),i=j(!1),s=0;function a(){var H,ae,ve,Le,Ze;const O=r();if(O){try{A(n,!!((ae=(H=O.nativeBridge)==null?void 0:H.cameraRunning)!=null&&ae.call(H)))}catch{}try{A(i,!!((Ze=(Le=(ve=O.recorder)==null?void 0:ve.status)==null?void 0:Le.call(ve))!=null&&Ze.active))}catch{}}}let o=j(!1),l=j("");async function c(){var H,ae,ve,Le;if(v(o))return;A(o,!0);const O=!v(n);A(l,O?"Starting…":"Stopping…",!0);try{O?(await rs(),A(n,!0)):(await yl(),A(n,!1))}catch(Ze){try{await((ae=(H=r().nativeBridge)==null?void 0:H.forceStopCamera)==null?void 0:ae.call(H))}catch{}A(n,!1),(Le=(ve=r()).toast)==null||Le.call(ve,"Tracking: "+Ze.message,"warn",4500)}finally{A(o,!1),A(l,""),setTimeout(a,250)}}let f=j(!1),p=j("");async function w(){var H,ae;if(v(f))return;A(f,!0);const O=!v(i);A(p,O?"Starting…":"Stopping…",!0);try{O?(await wl(),A(i,!0)):(await bl(),A(i,!1))}catch(ve){A(i,!1),(ae=(H=r()).toast)==null||ae.call(H,"Recording: "+ve.message,"warn",4500)}finally{A(f,!1),A(p,""),setTimeout(a,250)}}async function h(){var O,H,ae,ve;try{await((H=(O=r().nativeBridge)==null?void 0:O.openVrmPicker)==null?void 0:H.call(O))}catch(Le){(ve=(ae=r()).toast)==null||ve.call(ae,"VRM loader: "+Le.message,"error",4500)}}function g(){var O,H;try{(H=(O=r().nativeBridge)==null?void 0:O.showAbout)==null||H.call(O)}catch{}}const S=[{id:"ui",icon:"Monitor",label:"UI Settings"},{id:"camera",icon:"Camera",label:"Webcam settings"},{id:"avatar",icon:"User",label:"Model settings"},{id:"second_avatar",icon:"Globe",label:"Studio link"},{id:"stage",icon:"Landmark",label:"Environment + Camera"},{id:"background",icon:"Image",label:"Background"},{id:"lip",icon:"Mic",label:"Audio"}],d="hover:bg-white/10",y="flex-1 overflow-hidden opacity-0 transition-opacity duration-150 group-hover:opacity-100";Mi(()=>(a(),s=setInterval(a,1e3),()=>clearInterval(s)));var _=yc(),b=L(_);jt(b,17,()=>S,O=>O.id,(O,H)=>{var ae=mc();Fe(ae,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var ve=L(ae),Le=L(ve);Ue(Le,{get name(){return v(H).icon},size:16});var Ze=C(ve,2);Fe(Ze,1,Tr(y));var Qe=q(Ze,!0);_e((pr,Bn)=>{Se(ae,"title",pr),K(Qe,Bn)},[()=>te(v(H).label),()=>te(v(H).label)]),G("click",ae,()=>gl(v(H).id)),M(O,ae)});var E=C(b,4),k=L(E),$=L(k);{let O=rt(()=>v(n)?"text-emerald-400":"");Ue($,{name:"Webcam",size:16,get class(){return v(O)}})}var N=C(k,2);Fe(N,1,Tr(y));var R=q(N,!0),P=C(E,2),Y=L(P),de=L(Y);{let O=rt(()=>v(f)?"Circle":v(i)?"Square":"Circle"),H=rt(()=>v(i)?"text-red-400":"");Ue(de,{get name(){return v(O)},size:16,get class(){return v(H)}})}var Ne=C(Y,2);Fe(Ne,1,Tr(y));var Ee=q(Ne,!0),$e=C(P,2);Fe($e,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var mt=L($e),qt=L(mt);Ue(qt,{name:"FolderOpen",size:16});var ct=C(mt,2);Fe(ct,1,Tr(y));var yt=q(ct,!0),pe=C($e,2);Fe(pe,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var Ot=L(pe),zr=L(Ot);Ue(zr,{name:"Info",size:16});var Dr=C(Ot,2);Fe(Dr,1,Tr(y));var Br=q(Dr,!0);_e((O,H,ae,ve,Le,Ze,Qe,pr)=>{Fe(E,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${v(n)?"bg-emerald-500/20 hover:bg-emerald-500/30":d} ${v(o)?"opacity-60":""}`),Se(E,"title",O),E.disabled=v(o),K(R,H),Fe(P,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${v(i)?"bg-red-500/30 hover:bg-red-500/40 text-red-200":d} ${v(f)?"opacity-60":""}`),Se(P,"title",ae),P.disabled=v(f),K(Ee,ve),Se($e,"title",Le),K(yt,Ze),Se(pe,"title",Qe),K(Br,pr)},[()=>te("Tracking"),()=>v(o)?te(v(l)):v(n)?te("Tracking on"):te("Tracking off"),()=>te("Record"),()=>v(f)?te(v(p)):v(i)?te("Stop recording"):te("Record"),()=>te("Load / change VRM…"),()=>te("Load / change VRM…"),()=>te("About"),()=>te("About")]),hi("pointerenter",_,()=>{Q.dockExpanded=!0}),hi("pointerleave",_,()=>{Q.dockExpanded=!1}),G("click",E,c),G("click",P,w),G("click",$e,h),G("click",pe,g),M(e,_),kt()}or(["click"]);var bc=ge('<div class="absolute inset-0 z-30 grid place-items-center bg-black text-[12px] text-[var(--xra-ui-fg)]"> </div>'),xc=ge('<div class="xra-mocap-window fixed z-[99991] flex flex-col overflow-hidden rounded-xl border border-white/15 bg-[var(--xra-ui-bg)] text-[var(--xra-ui-fg)] shadow-[0_16px_48px_rgba(0,0,0,.6)] font-sans"><header class="flex shrink-0 cursor-move touch-none select-none items-center gap-2 px-2 py-1.5"><!> <span class="flex-1 text-[12px] font-semibold"> </span> <select class="rounded-md border border-white/15 bg-[#101214] px-1.5 py-0.5 text-[11px] text-[var(--xra-ui-fg)]"><option> </option><option> </option><option> </option><option> </option></select> <button type="button" class="rounded-md border border-white/15 bg-white/5 px-1.5 py-0.5 cursor-pointer text-[var(--xra-ui-fg)]"><!></button></header> <div class="relative min-h-0 flex-1 overflow-hidden bg-black"><!> <div class="absolute bottom-0 right-0 z-20 h-5 w-5 cursor-nwse-resize touch-none"></div></div></div>');function kc(e,t){xt(t,!0);const r=()=>window.XRA,n=He("ui.mocap_window",{})||{};let i=j(De(Number.isFinite(n.x)?n.x:48)),s=j(De(Number.isFinite(n.y)?n.y:96)),a=j(De(Number.isFinite(n.w)?n.w:360)),o=j(De(Number.isFinite(n.h)?n.h:270)),l=j(void 0),c=j(!1),f=0;const p=rt(()=>He("ui.mocap_visibility","always")!=="auto"||v(c));function w(){st("ui.mocap_window",{x:Math.round(v(i)),y:Math.round(v(s)),w:Math.round(v(a)),h:Math.round(v(o))})}function h(){var _,b,E;try{(E=(b=(_=r())==null?void 0:_.nativeBridge)==null?void 0:b.updateMocapWindow)==null||E.call(b)}catch{}}function g(_,b){_.preventDefault();const E=_.clientX,k=_.clientY,$=v(i),N=v(s),R=v(a),P=v(o),Y=Ne=>{const Ee=Ne.clientX-E,$e=Ne.clientY-k;b==="move"?(A(i,Math.max(0,Math.min(window.innerWidth-80,$+Ee)),!0),A(s,Math.max(0,Math.min(window.innerHeight-30,N+$e)),!0)):(A(a,Math.max(200,Math.min(window.innerWidth-v(i),R+Ee)),!0),A(o,Math.max(130,Math.min(window.innerHeight-v(s),P+$e)),!0))},de=()=>{window.removeEventListener("pointermove",Y),window.removeEventListener("pointerup",de),w()};window.addEventListener("pointermove",Y),window.addEventListener("pointerup",de)}tr(()=>{var b,E,k;const _=v(l);if(_){try{(k=(E=(b=r())==null?void 0:b.nativeBridge)==null?void 0:E.attachMocapWindow)==null||k.call(E,_)}catch{}return()=>{var $,N,R;try{(R=(N=($=r())==null?void 0:$.nativeBridge)==null?void 0:N.detachMocapWindow)==null||R.call(N)}catch{}}}}),tr(()=>{v(i),v(s),v(a),v(o),v(c),h()}),Mi(()=>{const _=()=>{var b,E,k;A(c,!!((k=(E=(b=r())==null?void 0:b.nativeBridge)==null?void 0:E.cameraRunning)!=null&&k.call(E)))};return _(),f=setInterval(_,500),window.addEventListener("resize",h),()=>{clearInterval(f),window.removeEventListener("resize",h)}});var S=Z(),d=X(S);{var y=_=>{var b=xc(),E=L(b),k=L(E);Ue(k,{name:"Activity",size:14});var $=C(k,2),N=q($,!0),R=C($,2),P=L(R),Y=q(P,!0);P.value=P.__value="both";var de=C(P),Ne=q(de,!0);de.value=de.__value="wireframe";var Ee=C(de),$e=q(Ee,!0);Ee.value=Ee.__value="video";var mt=C(Ee),qt=q(mt,!0);mt.value=mt.__value="off";var ct;lr(R);var yt=C(R,2),pe=L(yt);Ue(pe,{name:"X",size:13});var Ot=C(E,2),zr=L(Ot);{var Dr=O=>{var H=bc(),ae=q(H,!0);_e(ve=>K(ae,ve),[()=>te("Tracking is off")]),M(O,H)};je(zr,O=>{v(c)||O(Dr)})}var Br=C(zr,2);Ai(Ot,O=>A(l,O),()=>v(l)),_e((O,H,ae,ve,Le,Ze,Qe,pr)=>{Si(b,`left:${v(i)??""}px; top:${v(s)??""}px; width:${v(a)??""}px; height:${v(o)??""}px;`),K(N,O),K(Y,H),K(Ne,ae),K($e,ve),K(qt,Le),ct!==(ct=Ze)&&(R.value=(R.__value=ct)??"",Lt(R,ct)),Se(yt,"title",Qe),Se(Br,"title",pr)},[()=>te("Mocap"),()=>te("Webcam + skeleton"),()=>te("Skeleton only"),()=>te("Webcam only"),()=>te("Off"),()=>He("ui.mocap_view","off"),()=>te("Close"),()=>te("Resize")]),G("pointerdown",E,O=>g(O,"move")),G("change",R,O=>st("ui.mocap_view",O.currentTarget.value)),G("pointerdown",R,O=>O.stopPropagation()),G("click",yt,()=>st("ui.mocap_view","off")),G("pointerdown",yt,O=>O.stopPropagation()),G("pointerdown",Br,O=>{O.stopPropagation(),g(O,"resize")}),M(_,b)};je(d,_=>{v(p)&&_(y)})}M(e,S),kt()}or(["pointerdown","change","click"]);var Sc=ge('<aside class="xra-section-popup fixed top-1/2 z-[99992] flex max-h-[72vh] w-[320px] -translate-y-1/2 flex-col overflow-hidden rounded-xl border border-white/12 bg-[var(--xra-ui-bg)] text-[12.5px] leading-[1.45] text-[var(--xra-ui-fg)] shadow-[0_16px_48px_rgba(0,0,0,.6)] font-sans transition-[left] duration-200"><header class="flex shrink-0 items-center gap-2 border-b border-white/10 bg-[var(--xra-ui-bg2)] px-3 py-2"><!> <span class="text-[12.5px] font-semibold"> </span></header> <div class="min-h-0 flex-1 overflow-auto px-2.5 py-2"><!></div></aside>');function Ec(e,t){xt(t,!0);let r;tr(()=>{const f=w=>{const h=w.target;r&&h instanceof Node&&r.contains(h)||h instanceof Element&&h.closest(".xra-dock")||(Q.popupSection=null)},p=w=>{w.key==="Escape"&&(Q.popupSection=null)};return document.addEventListener("pointerdown",f,!0),window.addEventListener("keydown",p,!0),()=>{document.removeEventListener("pointerdown",f,!0),window.removeEventListener("keydown",p,!0)}});var n=Sc(),i=L(n),s=L(i);Ue(s,{get name(){return t.section.icon},size:15,class:"text-[var(--xra-ui-dim)]"});var a=C(s,2),o=q(a,!0),l=C(i,2),c=L(l);ss(c,{get section(){return t.section}}),Ai(n,f=>r=f,()=>r),_e(f=>{Si(n,`left:${Q.dockExpanded?248:62}px;`),K(o,f)},[()=>te(t.section.title)]),M(e,n),kt()}var $c=ge('<aside class="xra-panel"><header class="xra-panel-head"><strong>XR Animator</strong> <span class="xra-spacer"></span> <button><!></button> <button title="Close panel"><!></button></header> <div class="xra-panel-body"></div></aside>'),Ac=ge('<button class="xra-panel-launcher"><!></button>'),Mc=ge("<!> <!> <!> <!> <!>",1);function Tc(e,t){xt(t,!0),kl();const r=rt(()=>Ml(Xe));var n=Mc(),i=X(n);{var s=d=>{wc(d,{})};je(i,d=>{Q.ready&&d(s)})}var a=C(i,2);{var o=d=>{const y=rt(()=>v(r).find(k=>k.id===Q.popupSection));var _=Z(),b=X(_);{var E=k=>{Ec(k,{get section(){return v(y)}})};je(b,k=>{v(y)&&k(E)})}M(d,_)};je(a,d=>{Q.ready&&Q.popupSection&&d(o)})}var l=C(a,2);{var c=d=>{kc(d,{})},f=rt(()=>Q.ready&&He("ui.mocap_view","off")!=="off");je(l,d=>{v(f)&&d(c)})}var p=C(l,2);{var w=d=>{var R,P,Y;var y=$c(),_=L(y),b=C(L(_),4);Se(b,"title",((Y=(P=(R=window.XRA)==null?void 0:R.i18n)==null?void 0:P.t)==null?void 0:Y.call(P,"Clean screen mode (Press Esc to restore)"))||"Clean screen (Esc)");var E=L(b);Ue(E,{name:"EyeOff",size:15});var k=C(b,2),$=L(k);Ue($,{name:"X",size:15});var N=C(_,2);jt(N,21,()=>v(r),de=>de.id,(de,Ne)=>{pc(de,{get section(){return v(Ne)}})}),G("click",b,function(...de){In==null||In.apply(this,de)}),G("click",k,()=>Q.panelOpen=!1),M(d,y)},h=d=>{var y=Ac(),_=L(y);Ue(_,{name:"Settings",size:16}),G("click",y,()=>{Q.panelOpen=!0,ns()}),M(d,y)};je(p,d=>{Q.ready&&Q.panelOpen?d(w):Q.ready&&d(h,1)})}var g=C(p,2);{var S=d=>{gc(d,{})};je(g,d=>{Q.ready&&Q.startupOpen&&d(S)})}M(e,n),kt()}or(["click"]),window.XRA_SVELTE_UI=!0;function cs(){let e=document.getElementById("XRA_SVELTE");e||(e=document.createElement("div"),e.id="XRA_SVELTE",document.body.appendChild(e)),Go(Tc,{target:e})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",cs):cs()})();

})();
