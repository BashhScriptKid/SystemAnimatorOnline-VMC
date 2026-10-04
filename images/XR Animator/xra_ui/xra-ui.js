(function(){
var jc=Object.defineProperty;var As=ue=>{throw TypeError(ue)};var Xc=(ue,ne,be)=>ne in ue?jc(ue,ne,{enumerable:!0,configurable:!0,writable:!0,value:be}):ue[ne]=be;var Qe=(ue,ne,be)=>Xc(ue,typeof ne!="symbol"?ne+"":ne,be),Ai=(ue,ne,be)=>ne.has(ue)||As("Cannot "+be);var u=(ue,ne,be)=>(Ai(ue,ne,"read from private field"),be?be.call(ue):ne.get(ue)),B=(ue,ne,be)=>ne.has(ue)?As("Cannot add the same private member more than once"):ne instanceof WeakSet?ne.add(ue):ne.set(ue,be),z=(ue,ne,be,Jt)=>(Ai(ue,ne,"write to private field"),Jt?Jt.call(ue,be):ne.set(ue,be),be),j=(ue,ne,be)=>(Ai(ue,ne,"access private method"),be);(function(){"use strict";var as,Rr,Kt,ur,Cr,Pr,Ir,zt,Lr,Xe,ln,Dt,gt,At,zr,fr,Y,Mi,Ti,pn,Ni,Ms,Ts,Vr,Gc,hn,ss,st,ki,ot,dr,Ce,Ge,Pe,Ye,Mt,vr,Zt,Dr,cn,un,Bt,In,se,Yc,qc,Oi,Kc,Ri,_n,Fn,Ci,Pi,mt,Tt,qe,pr,fn,dn,Ln,os;var ne=Array.isArray,be=Array.prototype.indexOf,Jt=Array.prototype.includes,gn=Array.from,Ii=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,Li=Object.getOwnPropertyDescriptors,Ns=Object.prototype,Os=Array.prototype,Hn=Object.getPrototypeOf,zi=Object.isExtensible;function Fr(e){return typeof e=="function"}const Rs=()=>{};function Cs(e){return e()}function Un(e){for(var t=0;t<e.length;t++)e[t]()}function Di(){var e,t,r=new Promise((n,i)=>{e=n,t=i});return{promise:r,resolve:e,reject:t}}function Bi(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const Te=2,yr=4,Hr=8,Wn=1<<24,ct=16,Je=32,Ct=64,jn=128,Xn=256,ut=512,xe=1024,me=2048,et=4096,Oe=8192,Re=16384,wr=32768,mn=1<<25,Ht=65536,yn=1<<17,Ps=1<<18,br=1<<19,Vi=1<<20,bt=1<<25,wn=1<<21,xr=1<<22,Ut=1<<23,xt=Symbol("$state"),Fi=Symbol("component"),Hi=Symbol("legacy props"),Is=Symbol(""),bn=Symbol("attributes"),Gn=Symbol("class"),Yn=Symbol("style"),Ur=Symbol("text"),Wr=new class extends Error{constructor(){super(...arguments);Qe(this,"name","StaleReactionError");Qe(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},xn=!!((as=globalThis.document)!=null&&as.contentType)&&globalThis.document.contentType.includes("xml"),Ls=1,zs=2,Ui=4,Ds=8,Bs=16,Vs=1,Fs=2,Wi=4,Hs=8,Us=16,Ws=1,js=2,ye=Symbol("uninitialized"),ji="http://www.w3.org/1999/xhtml",Xs="http://www.w3.org/2000/svg",Gs="@attach";function Ys(){console.warn("https://svelte.dev/e/derived_inert")}function qs(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Ks(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Xi(e){return e===this.v}function Zs(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Gi(e){return!Zs(e,this.v)}function Qs(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Js(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function eo(e,t,r){throw new Error("https://svelte.dev/e/each_key_duplicate")}function to(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ro(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function no(e){throw new Error("https://svelte.dev/e/effect_orphan")}function io(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ao(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function so(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function oo(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function lo(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function co(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Sr=!1,Zc=!1;function uo(){Sr=!0}let fe=null;function kr(e){fe=e}function Wt(e,t=!1,r){fe={p:fe,i:!1,c:null,e:null,s:e,x:null,r:U,l:Sr&&!t?{s:null,u:null,$:[]}:null}}function jt(e){var t=fe,r=t.e;if(r!==null){t.e=null;for(var n of r)ha(n)}return t.i=!0,fe=t.p,qn(e)}function qn(e={}){return Ii(e,Fi,{value:!0}),e}function jr(){return!Sr||fe!==null&&fe.l===null}let $r=[];function fo(){var e=$r;$r=[],Un(e)}function St(e){if($r.length===0){var t=$r;queueMicrotask(()=>{t===$r&&fo()})}$r.push(e)}const vo=-7169;function ve(e,t){e.f=e.f&vo|t}function Kn(e){(e.f&ut)!==0||e.deps===null?ve(e,xe):ve(e,et)}function Yi(e,t,r){(e.f&me)!==0?t.add(e):(e.f&et)!==0&&r.add(e),ve(e,xe)}function po(e,t){if(t){const r=document.body;e.autofocus=!0,St(()=>{document.activeElement===r&&e.focus()})}}function Xr(e){var t=H,r=U;tt(null),rt(null);try{return e()}finally{tt(t),rt(r)}}function qi(e,t,r,n){const i=jr()?Er:Zn;var s=e.filter(_=>!_.settled),a=t.map(i);if(r.length===0&&s.length===0){n(a);return}var o=U,l=ho(),c=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(_=>_.promise)):null;function d(_){if((o.f&Re)===0){l();try{n([...a,..._])}catch(v){$t(v,o)}Sn()}}var h=Ki();if(r.length===0){c.then(()=>d([])).finally(h);return}function w(){Promise.all(r.map(_=>_o(_))).then(d).catch(_=>$t(_,o)).finally(h)}c?c.then(()=>{l(),w(),Sn()}):w()}function ho(){var e=U,t=H,r=fe,n=L;return function(s=!0){rt(e),tt(t),kr(r),s&&(e.f&Re)===0&&(n==null||n.activate(),n==null||n.apply())}}function Sn(e=!0){rt(null),tt(null),kr(null),e&&(L==null||L.deactivate())}function Ki(){var e=U,t=e.b,r=L,n=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,r),r.increment(n,e),()=>{t==null||t.update_pending_count(-1,r),r.decrement(n,e)}}function Er(e){var t=Te|me;return U!==null&&(U.f|=br),{ctx:fe,deps:null,effects:null,equals:Xi,f:t,fn:e,reactions:null,rv:0,v:ye,wv:0,parent:U,ac:null}}const Gr=Symbol("obsolete");function _o(e,t,r){let n=U;n===null&&Js();var i=void 0,s=Xt(ye),a=!H,o=new Set;return To(()=>{var _,v;var l=U,c=Di();i=c.promise;try{Promise.resolve(e()).then(c.resolve,S=>{S!==Wr&&c.reject(S)}).finally(Sn)}catch(S){c.reject(S),Sn()}var d=L;if(a){if((l.f&wr)!==0)var h=Ki();if((_=n.b)!=null&&_.is_rendered())(v=d.async_deriveds.get(l))==null||v.reject(Gr);else for(const S of o.values())S.reject(Gr);o.add(c),d.async_deriveds.set(l,c)}const w=(S,f=void 0)=>{h==null||h(),o.delete(c),f!==Gr&&(d.activate(),f?(s.f|=Ut,Mr(s,f)):((s.f&Ut)!==0&&(s.f^=Ut),Mr(s,S)),d.deactivate())};c.promise.then(w,S=>w(null,S||"unknown"))}),oi(()=>{for(const l of o)l.reject(Gr)}),new Promise(l=>{function c(d){function h(){d===i?l(s):c(i)}d.then(h,h)}c(i)})}function ft(e){const t=Er(e);return Sa(t),t}function Zn(e){const t=Er(e);return t.equals=Gi,t}function go(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)Ee(t[r])}}function Qn(e){var t,r=U,n=e.parent;if(!It&&n!==null&&e.v!==ye&&(n.f&(Re|Oe))!==0)return Ys(),e.v;rt(n);try{go(e),t=Ma(e)}finally{rt(r)}return t}function Zi(e){var t=Qn(e);if(!e.equals(t)&&(e.wv=Ea(),(!(L!=null&&L.is_fork)||e.deps===null)&&(L!==null?(L.capture(e,t,!0),Yr==null||Yr.capture(e,t,!0)):e.v=t,e.deps===null))){ve(e,xe);return}It||($e!==null?(si()||L!=null&&L.is_fork)&&$e.set(e,t):Kn(e))}function mo(e){var t;if(e.effects!==null)for(const r of e.effects)(r.teardown||r.ac)&&((t=r.teardown)==null||t.call(r),r.ac!==null&&Xr(()=>{r.ac.abort(Wr),r.ac=null}),r.fn!==null&&(r.teardown=Rs),en(r,0),ci(r))}function Qi(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&Nr(t)}let Jn=null,Ar=null,L=null,Yr=null,$e=null,ei=null,ti=!1,qr=null,kn=null;var Ji=0,Qc=new Set;let yo=1;const Pn=class Pn{constructor(){B(this,Y);Qe(this,"id",yo++);B(this,Rr,!1);Qe(this,"linked",!0);B(this,Kt,null);B(this,ur,null);Qe(this,"async_deriveds",new Map);Qe(this,"current",new Map);Qe(this,"previous",new Map);B(this,Cr,new Set);B(this,Pr,new Set);B(this,Ir,0);B(this,zt,new Map);B(this,Lr,null);B(this,Xe,[]);B(this,ln,[]);B(this,Dt,new Set);B(this,gt,new Set);B(this,At,new Map);B(this,zr,new Set);Qe(this,"is_fork",!1);B(this,fr,!1);Ar===null?Jn=Ar=this:(z(Ar,ur,this),z(this,Kt,Ar)),Ar=this}skip_effect(t){u(this,At).has(t)||u(this,At).set(t,{d:[],m:[]}),u(this,zr).delete(t)}unskip_effect(t,r=n=>this.schedule(n)){var n=u(this,At).get(t);if(n){u(this,At).delete(t);for(var i of n.d)ve(i,me),r(i);for(i of n.m)ve(i,et),r(i)}u(this,zr).add(t)}capture(t,r,n=!1){t.v!==ye&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&Ut)===0&&(this.current.set(t,[r,n]),$e==null||$e.set(t,r)),this.is_fork||(t.v=r)}activate(){L=this}deactivate(){L=null,$e=null}flush(){try{ti=!0,L=this,j(this,Y,pn).call(this)}finally{Ji=0,ei=null,qr=null,kn=null,ti=!1,L=null,$e=null,kt.clear()}}discard(){var t;for(const r of u(this,Pr))r(this);u(this,Pr).clear();for(const r of this.async_deriveds.values())r.reject(Gr);j(this,Y,hn).call(this),(t=u(this,Lr))==null||t.resolve()}register_created_effect(t){u(this,ln).push(t)}increment(t,r){if(z(this,Ir,u(this,Ir)+1),t){let n=u(this,zt).get(r)??0;u(this,zt).set(r,n+1)}}decrement(t,r){if(z(this,Ir,u(this,Ir)-1),t){let n=u(this,zt).get(r)??0;n===1?u(this,zt).delete(r):u(this,zt).set(r,n-1)}u(this,fr)||(z(this,fr,!0),St(()=>{z(this,fr,!1),this.linked&&this.flush()}))}transfer_effects(t,r){for(const n of t)u(this,Dt).add(n);for(const n of r)u(this,gt).add(n);t.clear(),r.clear()}oncommit(t){u(this,Cr).add(t)}ondiscard(t){u(this,Pr).add(t)}settled(){return(u(this,Lr)??z(this,Lr,Di())).promise}static ensure(){if(L===null){const t=L=new Pn;ti||St(()=>{u(t,Rr)||t.flush()})}return L}apply(){{$e=null;return}}schedule(t){var r;if(ei=t,(r=t.b)!=null&&r.is_pending&&(t.f&(yr|Hr|Wn))!==0&&(t.f&wr)===0){t.b.defer_effect(t);return}u(this,Xe).push(t)}};Rr=new WeakMap,Kt=new WeakMap,ur=new WeakMap,Cr=new WeakMap,Pr=new WeakMap,Ir=new WeakMap,zt=new WeakMap,Lr=new WeakMap,Xe=new WeakMap,ln=new WeakMap,Dt=new WeakMap,gt=new WeakMap,At=new WeakMap,zr=new WeakMap,fr=new WeakMap,Y=new WeakSet,Mi=function(){if(this.is_fork)return!0;for(const n of u(this,zt).keys()){for(var t=n,r=!1;t.parent!==null;){if(u(this,At).has(t)){r=!0;break}t=t.parent}if(!r)return!0}return!1},Ti=function(){var t=[];for(const s of u(this,Xe))if(!((s.f&Re)!==0||(s.f&(me|et))===0)){for(var r=s,n=!1;r.parent!==null;){r=r.parent;var i=r.f;if((i&(Ct|Je))!==0){if((i&xe)===0){n=!0;break}r.f^=xe}}n||t.push(r)}return z(this,Xe,[]),t},pn=function(){var o,l,c,d;z(this,Rr,!0);for(const h of u(this,Dt))u(this,gt).delete(h),ve(h,me),this.schedule(h);for(const h of u(this,gt))ve(h,et),this.schedule(h);this.apply();for(var t=qr=[],r=[],n=kn=[];u(this,Xe).length>0;){Ji++>1e3&&(j(this,Y,hn).call(this),wo());for(const h of j(this,Y,Ti).call(this))try{j(this,Y,Ni).call(this,h,t,r)}catch(w){throw na(h),j(this,Y,Mi).call(this)||this.discard(),w}}if(L=null,n.length>0){var i=Pn.ensure();for(const h of n)i.schedule(h)}if(qr=null,kn=null,j(this,Y,Mi).call(this)){j(this,Y,Vr).call(this,r),j(this,Y,Vr).call(this,t);for(const[h,w]of u(this,At))ra(h,w);n.length>0&&j(o=L,Y,pn).call(o);return}const s=j(this,Y,Ms).call(this);if(s){j(this,Y,Vr).call(this,r),j(this,Y,Vr).call(this,t),j(l=s,Y,Ts).call(l,this);return}u(this,Dt).clear(),u(this,gt).clear();for(const h of u(this,Cr))h(this);u(this,Cr).clear(),Yr=this,ea(r),ea(t),Yr=null,(c=u(this,Lr))==null||c.resolve();var a=L;if(u(this,Ir)===0&&(u(this,Xe).length===0||a!==null)&&j(this,Y,hn).call(this),u(this,Xe).length>0)if(a!==null){for(const h of u(this,Xe))u(a,Xe).push(h);z(this,Xe,[])}else a=this;a!==null&&(kt.clear(),j(d=a,Y,pn).call(d))},Ni=function(t,r,n){t.f^=xe;for(var i=t.first;i!==null;){var s=i.f,a=(s&(Je|Ct))!==0,o=a&&(s&xe)!==0,l=o||(s&Oe)!==0||u(this,At).has(i);if(!l&&i.fn!==null){a?i.f^=xe:(s&yr)!==0?r.push(i):Jr(i)&&((s&ct)!==0&&u(this,gt).add(i),Nr(i));var c=i.first;if(c!==null){i=c;continue}}for(;i!==null;){var d=i.next;if(d!==null){i=d;break}i=i.parent}}},Ms=function(){for(var t=u(this,Kt);t!==null;){if(!t.is_fork){for(const[r,[,n]]of this.current)if(t.current.has(r)&&!n)return t}t=u(t,Kt)}return null},Ts=function(t){var n;for(const[i,s]of t.current)!this.previous.has(i)&&t.previous.has(i)&&this.previous.set(i,t.previous.get(i)),this.current.set(i,s);for(const[i,s]of t.async_deriveds){const a=this.async_deriveds.get(i);a&&s.promise.then(a.resolve).catch(a.reject)}t.async_deriveds.clear(),this.transfer_effects(u(t,Dt),u(t,gt));const r=i=>{var s=i.reactions;if(s!==null&&!((i.f&Te)!==0&&(i.f&(me|et))===0))for(const l of s){var a=l.f;if((a&Te)!==0)r(l);else{var o=l;a&(xr|ct)&&!this.async_deriveds.has(o)&&(u(this,gt).delete(o),ve(o,me),this.schedule(o))}}};for(const i of this.current.keys())r(i);this.oncommit(()=>t.discard()),j(n=t,Y,hn).call(n),L=this,j(this,Y,pn).call(this)},Vr=function(t){for(var r=0;r<t.length;r+=1)Yi(t[r],u(this,Dt),u(this,gt))},Gc=function(){var h,w;for(let _=Jn;_!==null;_=u(_,ur)){var t=_.id<this.id,r=[];for(const[v,[S,f]]of this.current){if(_.current.has(v)){var n=_.current.get(v)[0];if(t&&S!==n)_.current.set(v,[S,f]);else continue}r.push(v)}if(t)for(const[v,S]of this.async_deriveds){const f=_.async_deriveds.get(v);f&&S.promise.then(f.resolve).catch(f.reject)}var i=[..._.current.keys()].filter(v=>!_.current.get(v)[1]);if(!(!u(_,Rr)||i.length===0)){var s=i.filter(v=>!this.current.has(v));if(s.length===0)t&&_.discard();else if(r.length>0){if(t)for(const v of u(this,zr))_.unskip_effect(v,S=>{var f;(S.f&(ct|xr))!==0?_.schedule(S):j(f=_,Y,Vr).call(f,[S])});_.activate();var a=new Set,o=new Map;for(var l of r)ta(l,s,a,o);o=new Map;var c=[..._.current].filter(([v,S])=>{const f=this.current.get(v);return f?f[0]!==S[0]||f[1]!==S[1]:!0}).map(([v])=>v);if(c.length>0)for(const v of u(this,ln))(v.f&(Re|Oe|yn))===0&&ri(v,c,o)&&((v.f&(xr|ct))!==0?(ve(v,me),_.schedule(v)):u(_,Dt).add(v));if(u(_,Xe).length>0&&!u(_,fr)){_.apply();for(var d of j(h=_,Y,Ti).call(h))j(w=_,Y,Ni).call(w,d,[],[])}_.deactivate()}}}},hn=function(){if(this.linked){var t=u(this,Kt),r=u(this,ur);t===null?Jn=r:z(t,ur,r),r===null?Ar=t:z(r,Kt,t),this.linked=!1}};let er=Pn;function wo(){try{io()}catch(e){$t(e,ei)}}let dt=null;function ea(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(Re|Oe))===0&&Jr(n)&&(dt=new Set,Nr(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&ya(n),(dt==null?void 0:dt.size)>0)){kt.clear();for(const i of dt){if((i.f&(Re|Oe))!==0)continue;const s=[i];let a=i.parent;for(;a!==null;)dt.has(a)&&(dt.delete(a),s.push(a)),a=a.parent;for(let o=s.length-1;o>=0;o--){const l=s[o];(l.f&(Re|Oe))===0&&Nr(l)}}dt.clear()}}dt=null}}function ta(e,t,r,n){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(const i of e.reactions){const s=i.f;(s&Te)!==0?ta(i,t,r,n):(s&(xr|ct))!==0&&(s&me)===0&&ri(i,t,n)&&(ve(i,me),ni(i))}}function ri(e,t,r){const n=r.get(e);if(n!==void 0)return n;if(e.deps!==null)for(const i of e.deps){if(Jt.call(t,i))return!0;if((i.f&Te)!==0&&ri(i,t,r))return r.set(i,!0),!0}return r.set(e,!1),!1}function ni(e){L.schedule(e)}function ra(e,t){if(!((e.f&Je)!==0&&(e.f&xe)!==0)){(e.f&me)!==0?t.d.push(e):(e.f&et)!==0&&t.m.push(e),ve(e,xe);for(var r=e.first;r!==null;)ra(r,t),r=r.next}}function na(e){ve(e,xe);for(var t=e.first;t!==null;)na(t),t=t.next}let $n=new Set;const kt=new Map;let ia=!1;function Xt(e,t){var r={f:0,v:e,reactions:null,equals:Xi,rv:0,wv:0};return r}function F(e,t){const r=Xt(e);return Sa(r),r}function bo(e,t=!1,r=!0){var i;const n=Xt(e);return t||(n.equals=Gi),Sr&&r&&fe!==null&&fe.l!==null&&((i=fe.l).s??(i.s=[])).push(n),n}function $(e,t,r=!1){H!==null&&(!pt||(H.f&yn)!==0)&&jr()&&(H.f&(Te|ct|xr|yn))!==0&&(Et===null||!Et.has(e))&&lo();let n=r?Le(t):t;return Mr(e,n,kn)}var tr=null,ii=0;function Mr(e,t,r=null){if(!e.equals(t)){It?kt.set(e,t):kt.has(e)||kt.set(e,e.v);var n=er.ensure();if(n.capture(e,t),(e.f&Te)!==0){const i=e;(e.f&me)!==0&&Qn(i),$e===null&&Kn(i)}e.wv=Ea(),tr=null,ii=0,sa(e,me,r),tr=null,jr()&&U!==null&&(U.f&xe)!==0&&(U.f&(Je|Ct))===0&&(nt===null?Ro([e]):nt.push(e)),!n.is_fork&&$n.size>0&&!ia&&xo()}return t}function xo(){ia=!1;for(const e of $n){(e.f&xe)!==0&&ve(e,et);let t;try{t=Jr(e)}catch{t=!0}t&&Nr(e)}$n.clear()}function aa(e,t=1){var r=p(e),n=t===1?r++:r--;return $(e,r),n}function Kr(e){$(e,e.v+1)}function sa(e,t,r){var n=e.reactions;if(n!==null){var i=jr(),s=n.length;if(ii+=s,ii>1e5&&tr===null&&(tr=new Set),tr!==null){if(tr.has(e))return;tr.add(e)}for(var a=0;a<s;a++){var o=n[a],l=o.f;if(!(!i&&o===U)){var c=(l&me)===0;if(c&&ve(o,t),(l&yn)!==0)$n.add(o);else if((l&Te)!==0){var d=o;$e==null||$e.delete(d),sa(d,et,r)}else if(c){var h=o;(l&ct)!==0&&dt!==null&&dt.add(h),r!==null?r.push(h):ni(h)}}}}}function Le(e){if(typeof e!="object"||e===null||xt in e||Fi in e)return e;const t=Hn(e);if(t!==Ns&&t!==Os)return e;var r=new Map,n=ne(e),i=F(0),s=ar,a=o=>{if(ar===s)return o();var l=H,c=ar;tt(null),$a(s);var d=o();return tt(l),$a(c),d};return n&&r.set("length",F(e.length)),new Proxy(e,{defineProperty(o,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&so();var d=r.get(l);return d===void 0?a(()=>{var h=F(c.value);return r.set(l,h),h}):$(d,c.value,!0),!0},deleteProperty(o,l){var c=r.get(l);if(c===void 0){if(l in o){const d=a(()=>F(ye));r.set(l,d),Kr(i)}}else $(c,ye),Kr(i);return!0},get(o,l,c){var _;if(l===xt)return e;var d=r.get(l),h=l in o;if(d===void 0&&(!h||(_=Ft(o,l))!=null&&_.writable)&&(d=a(()=>{var v=Le(h?o[l]:ye),S=F(v);return S}),r.set(l,d)),d!==void 0){var w=p(d);return w===ye?void 0:w}return Reflect.get(o,l,c)},getOwnPropertyDescriptor(o,l){var w;(w=this.has)==null||w.call(this,o,l);var c=Reflect.getOwnPropertyDescriptor(o,l),d=r.get(l);if(d!==void 0){var h=p(d);if(h===ye)return;if(c&&"value"in c)c.value=h;else return{enumerable:!0,configurable:!0,value:h,writable:!0}}return c},has(o,l){var w;if(l===xt)return!0;var c=r.get(l),d=c!==void 0&&c.v!==ye||Reflect.has(o,l);if(c!==void 0||U!==null&&(!d||(w=Ft(o,l))!=null&&w.writable)){c===void 0&&(c=a(()=>{var _=d?Le(o[l]):ye,v=F(_);return v}),r.set(l,c));var h=p(c);if(h===ye)return!1}return d},set(o,l,c,d){var k;var h=r.get(l),w=l in o;if(n&&l==="length")for(var _=c;_<h.v;_+=1){var v=r.get(_+"");v!==void 0?$(v,ye):_ in o&&(v=a(()=>F(ye)),r.set(_+"",v))}if(h===void 0)(!w||(k=Ft(o,l))!=null&&k.writable)&&(h=a(()=>F(void 0)),$(h,Le(c)),r.set(l,h));else{w=h.v!==ye;var S=a(()=>Le(c));$(h,S)}var f=Reflect.getOwnPropertyDescriptor(o,l);if(f!=null&&f.set&&f.set.call(d,c),!w){if(n&&typeof l=="string"){var g=r.get("length"),m=Number(l);Number.isInteger(m)&&m>=g.v&&$(g,m+1)}Kr(i)}return!0},ownKeys(o){p(i);var l=Reflect.ownKeys(o).filter(h=>{var w=r.get(h);return w===void 0||w.v!==ye});for(var[c,d]of r)d.v!==ye&&!(c in o)&&l.push(c);return l},setPrototypeOf(){oo()}})}function oa(e){try{if(e!==null&&typeof e=="object"&&xt in e)return e[xt]}catch{}return e}function la(e,t){return Object.is(oa(e),oa(t))}var ca,ua,fa,da;function So(){if(ca===void 0){ca=window,ua=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;fa=Ft(t,"firstChild").get,da=Ft(t,"nextSibling").get,zi(e)&&(e[Gn]=void 0,e[bn]=null,e[Yn]=void 0,e.__e=void 0),zi(r)&&(r[Ur]=void 0)}}function Pt(e=""){return document.createTextNode(e)}function rr(e){return fa.call(e)}function Zr(e){return da.call(e)}function D(e,t){return rr(e)}function G(e,t=!1){{var r=rr(e);return r instanceof Comment&&r.data===""?Zr(r):r}}function q(e,t=!1){return rr(e)}function I(e,t=1,r=!1){let n=e;for(;t--;)n=Zr(n);return n}function ko(e){e.textContent=""}function va(){return!1}function ai(e,t,r){return t==null||t===ji?r?document.createElement(e,{is:r}):document.createElement(e):r?document.createElementNS(t,e,{is:r}):document.createElementNS(t,e)}function $o(e){var t=U;if(t===null)return H.f|=Ut,e;if((t.f&wr)===0&&(t.f&yr)===0)throw e;$t(e,t)}function $t(e,t){if(!(t!==null&&(t.f&Re)!==0)){for(;t!==null;){if((t.f&jn)!==0&&(t.f&(Re|mn))===0){if((t.f&wr)===0)throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw e}}function pa(e){U===null&&(H===null&&no(),ro()),It&&to()}function Eo(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function vt(e,t){var r=U;r!==null&&(r.f&Oe)!==0&&(e|=Oe);var n={ctx:fe,deps:null,nodes:null,f:e|me|ut,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};L==null||L.register_created_effect(n);var i=n;if((e&yr)!==0)qr!==null?qr.push(n):er.ensure().schedule(n);else if(t!==null){try{Nr(n)}catch(a){throw Ee(n),a}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&br)===0&&(i=i.first,(e&ct)!==0&&(e&Ht)!==0&&i!==null&&(i.f|=Ht))}if(i!==null&&(i.parent=r,r!==null&&Eo(i,r),H!==null&&(H.f&Te)!==0&&(e&Ct)===0)){var s=H;(s.effects??(s.effects=[])).push(i)}return n}function si(){return H!==null&&!pt}function oi(e){const t=vt(Hr,null);return ve(t,xe),t.teardown=e,t}function Tr(e){pa();var t=U.f,r=!H&&(t&Je)!==0&&fe!==null&&!fe.i;if(r){var n=fe;(n.e??(n.e=[])).push(e)}else return ha(e)}function ha(e){return vt(yr|Vi,e)}function Ao(e){return pa(),vt(Hr|Vi,e)}function Mo(e){er.ensure();const t=vt(Ct|br,e);return(r={})=>new Promise(n=>{r.outro?nr(t,()=>{Ee(t),n(void 0)}):(Ee(t),n(void 0))})}function li(e){return vt(yr,e)}function To(e){return vt(xr|br,e)}function _a(e,t=0){return vt(Hr|t,e)}function he(e,t=[],r=[],n=[]){qi(n,t,r,i=>{vt(Hr,()=>{e(...i.map(p))})})}function Qr(e,t=0){var r=vt(ct|t,e);return r}function ga(e,t=0){var r=vt(Wn|t,e);return r}function ze(e){return vt(Je|br,e)}function ma(e){var t=e.teardown;if(t!==null){const r=It,n=H;xa(!0),tt(null);try{t.call(null)}catch(i){$t(i,e.parent)}finally{xa(r),tt(n)}}}function ci(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const i=r.ac;i!==null&&Xr(()=>{i.abort(Wr)});var n=r.next;(r.f&Ct)!==0?r.parent=null:Ee(r,t),r=n}}function No(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Je)===0&&Ee(t),t=r}}function Ee(e,t=!0){var r=!1;(t||(e.f&Ps)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Oo(e.nodes.start,e.nodes.end),r=!0),e.f|=mn,ci(e,t&&!r),en(e,0);var n=e.nodes&&e.nodes.t;if(n!==null)for(const s of n)s.stop();ma(e),e.f^=mn,e.f|=Re;var i=e.parent;i!==null&&i.first!==null&&ya(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Oo(e,t){for(;e!==null;){var r=e===t?null:Zr(e);e.remove(),e=r}}function ya(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function nr(e,t,r=!0){var n=[];e.f|=Xn,wa(e,n,!0);var i=()=>{r&&Ee(e),t&&t()},s=n.length;if(s>0){var a=()=>--s||i();for(var o of n)o.out(a)}else i()}function wa(e,t,r){if((e.f&Oe)===0){e.f^=Oe;var n=e.nodes&&e.nodes.t;if(n!==null)for(const o of n)(o.is_global||r)&&t.push(o);for(var i=e.first;i!==null;){var s=i.next;if((i.f&Ct)===0){var a=(i.f&Ht)!==0||(i.f&Je)!==0&&(e.f&ct)!==0;wa(i,t,a?r:!1)}i=s}}}function En(e){e.f&=~Xn,ba(e,!0)}function ba(e,t){if((e.f&Xn)===0&&(e.f&Oe)!==0){e.f^=Oe,(e.f&xe)===0&&(ve(e,me),er.ensure().schedule(e));for(var r=e.first;r!==null;){var n=r.next,i=(r.f&Ht)!==0||(r.f&Je)!==0;ba(r,i?t:!1),r=n}var s=e.nodes&&e.nodes.t;if(s!==null)for(const a of s)(a.is_global||t)&&a.in()}}function ui(e,t){if(e.nodes)for(var r=e.nodes.start,n=e.nodes.end;r!==null;){var i=r===n?null:Zr(r);t.append(r),r=i}}let An=!1,It=!1;function xa(e){It=e}let H=null,pt=!1;function tt(e){H=e}let U=null;function rt(e){U=e}let Et=null;function Sa(e){H!==null&&((H.f&wn)!==0||(H.f&Te)!==0)&&(Et??(Et=new Set)).add(e)}let De=null,Ue=0,nt=null;function Ro(e){nt=e}let ka=1,ir=0,ar=ir;function $a(e){ar=e}function Ea(){return++ka}function Jr(e){var t=e.f;if((t&me)!==0)return!0;if((t&et)!==0){for(var r=e.deps,n=r.length,i=0;i<n;i++){var s=r[i];if(Jr(s)&&Zi(s),s.wv>e.wv)return!0}(t&ut)!==0&&$e===null&&ve(e,xe)}return!1}function Aa(e,t,r=!0){var n=e.reactions;if(n!==null&&!(Et!==null&&Et.has(e)))for(var i=0;i<n.length;i++){var s=n[i];(s.f&Te)!==0?Aa(s,t,!1):t===s&&(r?ve(s,me):(s.f&xe)!==0&&ve(s,et),ni(s))}}function Ma(e){var t=De,r=Ue,n=nt,i=H,s=Et,a=fe,o=pt,l=ar,c=e.f;De=null,Ue=0,nt=null,H=(c&(Je|Ct))===0?e:null,Et=null,kr(e.ctx),pt=!1,ar=++ir,e.ac!==null&&(Xr(()=>{e.ac.abort(Wr)}),e.ac=null);try{e.f|=wn;var d=e.fn,h=d();e.f|=wr;var w=Ta(e);if(jr()&&nt!==null&&!pt&&w!==null&&(e.f&(Te|et|me))===0)for(var _=0;_<nt.length;_++)Aa(nt[_],e);if(i!==null&&i!==e){if(ir++,i.deps!==null)for(let v=0;v<r;v+=1)i.deps[v].rv=ir;if(t!==null)for(const v of t)v.rv=ir;nt!==null&&(n===null?n=nt:n.push(...nt))}return(e.f&Ut)!==0&&(e.f^=Ut),h}catch(v){return Ta(e),$o(v)}finally{e.f^=wn,De=t,Ue=r,nt=n,H=i,Et=s,kr(a),pt=o,ar=l}}function Ta(e){var i;var t=e.deps,r=L==null?void 0:L.is_fork;if(De!==null){var n;if(r||en(e,Ue),t!==null&&Ue>0)for(t.length=Ue+De.length,n=0;n<De.length;n++)t[Ue+n]=De[n];else e.deps=t=De;if(si()&&(e.f&ut)!==0)for(n=Ue;n<t.length;n++)((i=t[n]).reactions??(i.reactions=[])).push(e)}else!r&&t!==null&&Ue<t.length&&(en(e,Ue),t.length=Ue);return t}function Co(e,t){let r=t.reactions;if(r!==null){var n=be.call(r,e);if(n!==-1){var i=r.length-1;i===0?r=t.reactions=null:(r[n]=r[i],r.pop())}}if(r===null&&(t.f&Te)!==0&&(De===null||!Jt.call(De,t))){var s=t;(s.f&ut)!==0&&(s.f^=ut),s.v!==ye&&Kn(s),s.ac!==null&&Xr(()=>{s.ac.abort(Wr),s.ac=null,ve(s,me)}),mo(s),en(s,0)}}function en(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Co(e,r[n])}function Nr(e){var t=e.f;if((t&Re)===0){ve(e,xe);var r=U,n=An;U=e,An=(t&(Je|Ct))===0;try{(t&(ct|Wn))!==0?No(e):ci(e),ma(e);var i=Ma(e);e.teardown=typeof i=="function"?i:null,e.wv=ka;var s}finally{An=n,U=r}}}function p(e){var t=e.f,r=(t&Te)!==0;if(H!==null&&!pt){var n=U!==null&&(U.f&Re)!==0;if(!n&&(Et===null||!Et.has(e))){var i=H.deps;if((H.f&wn)!==0)e.rv<ir&&(e.rv=ir,De===null&&i!==null&&i[Ue]===e?Ue++:De===null?De=[e]:De.push(e));else{H.deps??(H.deps=[]),Jt.call(H.deps,e)||H.deps.push(e);var s=e.reactions;s===null?e.reactions=[H]:Jt.call(s,H)||s.push(H)}}}if(It&&kt.has(e))return kt.get(e);if(r){var a=e;if(It){var o=a.v;return((a.f&xe)===0&&a.reactions!==null||Oa(a))&&(o=Qn(a)),kt.set(a,o),o}var l=(a.f&ut)===0&&!pt&&H!==null&&(An||(H.f&ut)!==0),c=(a.f&wr)===0;Jr(a)&&(l&&(a.f|=ut),Zi(a)),l&&!c&&(Qi(a),Na(a))}if($e!=null&&$e.has(e))return $e.get(e);if((e.f&Ut)!==0)throw e.v;return e.v}function Na(e){if(e.f|=ut,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&Te)!==0&&(t.f&ut)===0&&(Qi(t),Na(t))}function Oa(e){if(e.v===ye)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(kt.has(t)||(t.f&Te)!==0&&Oa(t))return!0;return!1}function Gt(e){var t=pt;try{return pt=!0,e()}finally{pt=t}}function sr(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(xt in e)fi(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&xt in r&&fi(r)}}}function fi(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{fi(e[n],t)}catch{}const r=Hn(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=Li(r);for(let i in n){const s=n[i].get;if(s)try{s.call(e)}catch{}}}}}function Po(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Io=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Lo(e){return Io.includes(e)}const zo={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Do(e){return e=e.toLowerCase(),zo[e]??e}const Bo=["touchstart","touchmove"];function Vo(e){return Bo.includes(e)}const or=Symbol("events"),Ra=new Set,di=new Set;function Fo(e,t,r,n={}){function i(s){if(n.capture||hi.call(t,s),!s.cancelBubble)return Xr(()=>r==null?void 0:r.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?(i.__removed=!1,St(()=>{i.__removed||t.addEventListener(e,i,n)})):t.addEventListener(e,i,n),i}function ee(e,t,r){(t[or]??(t[or]={}))[e]=r}function lr(e){for(var t=0;t<e.length;t++)Ra.add(e[t]);for(var r of di)r(e)}let vi=null,pi=!1;function hi(e){var S,f;var t=this,r=t.ownerDocument,n=e.type,i=((S=e.composedPath)==null?void 0:S.call(e))||[],s=i[0]||e.target;vi=e,pi||(pi=!0,setTimeout(()=>{pi=!1,vi=null}));var a=0,o=vi===e&&e[or];if(o){var l=i.indexOf(o);if(l!==-1&&(t===document||t===window)){e[or]=t;return}var c=i.indexOf(t);if(c===-1)return;l<=c&&(a=l)}if(s=i[a]||e.target,s!==t){Ii(e,"currentTarget",{configurable:!0,get(){return s||r}});var d=H,h=U;tt(null),rt(null);try{for(var w,_=[];s!==null&&s!==t;){try{var v=(f=s[or])==null?void 0:f[n];v!=null&&(!s.disabled||e.target===s)&&v.call(s,e)}catch(g){w?_.push(g):w=g}if(e.cancelBubble)break;a++,s=a<i.length?i[a]:null}if(w){for(let g of _)queueMicrotask(()=>{throw g});throw w}}finally{e[or]=t,delete e.currentTarget,tt(d),rt(h)}}}const _i=((ss=globalThis==null?void 0:globalThis.window)==null?void 0:ss.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Ho(e){return(_i==null?void 0:_i.createHTML(e))??e}function Ca(e){var t=ai("template");return t.innerHTML=Ho(e.replaceAll("<!>","<!---->")),t.content}function tn(e,t){var r=U;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function _e(e,t){var r=(t&Ws)!==0,n=(t&js)!==0,i,s=!e.startsWith("<!>");return()=>{i===void 0&&(i=Ca(s?e:"<!>"+e),r||(i=rr(i)));var a=n||ua?document.importNode(i,!0):i.cloneNode(!0);if(r){var o=rr(a),l=a.lastChild;tn(o,l)}else tn(a,a);return a}}function Uo(e,t,r="svg"){var n=!e.startsWith("<!>"),i=`<${r}>${n?e:"<!>"+e}</${r}>`,s;return()=>{if(!s){var a=Ca(i),o=rr(a);s=rr(o)}var l=s.cloneNode(!0);return tn(l,l),l}}function Wo(e,t){return Uo(e,t,"svg")}function Z(){var e=document.createDocumentFragment(),t=document.createComment(""),r=Pt();return e.append(t,r),tn(t,r),e}function N(e,t){e!==null&&e.before(t)}function jo(e){let t=0,r=Xt(0),n;return()=>{si()&&(p(r),_a(()=>(t===0&&(n=Gt(()=>e(()=>Kr(r)))),t+=1,()=>{St(()=>{t-=1,t===0&&(n==null||n(),n=void 0,Kr(r))})})))}}var Xo=Ht|br;function Go(e,t,r,n){new Yo(e,t,r,n)}class Yo{constructor(t,r,n,i){B(this,se);Qe(this,"parent");Qe(this,"is_pending",!1);Qe(this,"transform_error");B(this,st);B(this,ki,null);B(this,ot);B(this,dr);B(this,Ce);B(this,Ge,null);B(this,Pe,null);B(this,Ye,null);B(this,Mt,null);B(this,vr,0);B(this,Zt,0);B(this,Dr,!1);B(this,cn,new Set);B(this,un,new Set);B(this,Bt,null);B(this,In,jo(()=>(z(this,Bt,Xt(u(this,vr))),()=>{z(this,Bt,null)})));var s;z(this,st,t),z(this,ot,r),z(this,dr,a=>{var o=U;o.b=this,o.f|=jn,n(a)}),this.parent=U.b,this.transform_error=i??((s=this.parent)==null?void 0:s.transform_error)??(a=>a),z(this,Ce,Qr(()=>{j(this,se,Ri).call(this)},Xo))}defer_effect(t){Yi(t,u(this,cn),u(this,un))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!u(this,ot).pending}update_pending_count(t,r){j(this,se,Ci).call(this,t,r),z(this,vr,u(this,vr)+t),!(!u(this,Bt)||u(this,Dr))&&(z(this,Dr,!0),St(()=>{z(this,Dr,!1),u(this,Bt)&&Mr(u(this,Bt),u(this,vr))}))}get_effect_pending(){return u(this,In).call(this),p(u(this,Bt))}error(t){if(!u(this,ot).onerror&&!u(this,ot).failed)throw t;L!=null&&L.is_fork?(u(this,Ge)&&L.skip_effect(u(this,Ge)),u(this,Pe)&&L.skip_effect(u(this,Pe)),u(this,Ye)&&L.skip_effect(u(this,Ye)),L.oncommit(()=>{j(this,se,Pi).call(this,t)})):j(this,se,Pi).call(this,t)}}st=new WeakMap,ki=new WeakMap,ot=new WeakMap,dr=new WeakMap,Ce=new WeakMap,Ge=new WeakMap,Pe=new WeakMap,Ye=new WeakMap,Mt=new WeakMap,vr=new WeakMap,Zt=new WeakMap,Dr=new WeakMap,cn=new WeakMap,un=new WeakMap,Bt=new WeakMap,In=new WeakMap,se=new WeakSet,Yc=function(){try{z(this,Ge,ze(()=>u(this,dr).call(this,u(this,st))))}catch(t){this.error(t)}},qc=function(t){const r=u(this,ot).failed,{reset:n,invoke_onerror:i}=j(this,se,Oi).call(this,t);St(i),r&&z(this,Ye,ze(()=>{r(u(this,st),()=>t,()=>n)}))},Oi=function(t){var r=!1,n=!1;const i=()=>{if(r){Ks();return}r=!0,n&&co(),u(this,Ye)!==null&&nr(u(this,Ye),()=>{z(this,Ye,null)}),j(this,se,Fn).call(this,()=>{j(this,se,Ri).call(this)})};return{reset:i,invoke_onerror:()=>{var a,o;try{n=!0,(o=(a=u(this,ot)).onerror)==null||o.call(a,t,i),n=!1}catch(l){$t(l,u(this,Ce)&&u(this,Ce).parent)}}}},Kc=function(){const t=u(this,ot).pending;t&&(this.is_pending=!0,z(this,Pe,ze(()=>t(u(this,st)))),St(()=>{var r=z(this,Mt,document.createDocumentFragment()),n=Pt(),i=!1;if(r.append(n),z(this,Ge,j(this,se,Fn).call(this,()=>{try{return ze(()=>u(this,dr).call(this,n))}catch(s){try{this.error(s),i=!0}catch(a){$t(a,u(this,Ce).parent)}return null}})),u(this,Ge)===null){z(this,Mt,null),i&&j(this,se,_n).call(this,L);return}u(this,Zt)===0&&(u(this,st).before(r),z(this,Mt,null),nr(u(this,Pe),()=>{z(this,Pe,null)}),j(this,se,_n).call(this,L))}))},Ri=function(){try{if(this.is_pending=this.has_pending_snippet(),z(this,Zt,0),z(this,vr,0),z(this,Ge,ze(()=>{u(this,dr).call(this,u(this,st))})),u(this,Zt)>0){var t=z(this,Mt,document.createDocumentFragment());ui(u(this,Ge),t);const r=u(this,ot).pending;z(this,Pe,ze(()=>r(u(this,st))))}else j(this,se,_n).call(this,L)}catch(r){this.error(r)}},_n=function(t){this.is_pending=!1,t.transfer_effects(u(this,cn),u(this,un))},Fn=function(t){var r=U,n=H,i=fe;rt(u(this,Ce)),tt(u(this,Ce)),kr(u(this,Ce).ctx);try{return er.ensure(),t()}finally{rt(r),tt(n),kr(i)}},Ci=function(t,r){var n;if(!this.has_pending_snippet()){this.parent&&j(n=this.parent,se,Ci).call(n,t,r);return}z(this,Zt,u(this,Zt)+t),u(this,Zt)===0&&(j(this,se,_n).call(this,r),u(this,Pe)&&nr(u(this,Pe),()=>{z(this,Pe,null)}),u(this,Mt)&&(u(this,st).before(u(this,Mt)),z(this,Mt,null)))},Pi=function(t){u(this,Ge)&&(Ee(u(this,Ge)),z(this,Ge,null)),u(this,Pe)&&(Ee(u(this,Pe)),z(this,Pe,null)),u(this,Ye)&&(Ee(u(this,Ye)),z(this,Ye,null));let r=u(this,ot).failed;const n=i=>{const{reset:s,invoke_onerror:a}=j(this,se,Oi).call(this,i);a(),r&&z(this,Ye,j(this,se,Fn).call(this,()=>{try{return ze(()=>{var o=U;o.b=this,o.f|=jn,r(u(this,st),()=>i,()=>s)})}catch(o){return $t(o,u(this,Ce).parent),null}}))};St(()=>{var i;try{i=this.transform_error(t)}catch(s){$t(s,u(this,Ce)&&u(this,Ce).parent);return}i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(n,s=>$t(s,u(this,Ce)&&u(this,Ce).parent)):n(i)})};function K(e,t){var r=t==null?"":typeof t=="object"?`${t}`:t;r!==(e[Ur]??(e[Ur]=e.nodeValue))&&(e[Ur]=r,e.nodeValue=`${r}`)}function qo(e,t){return Ko(e,t)}const Mn=new Map;function Ko(e,{target:t,anchor:r,props:n={},events:i,context:s,intro:a=!0,transformError:o}){So();var l=void 0,c=Mo(()=>{var d=r??t.appendChild(Pt());Go(d,{pending:()=>{}},_=>{Wt({});var v=fe;s&&(v.c=s),i&&(n.$$events=i),l=e(_,n)||qn(),jt()},o);var h=new Set,w=_=>{for(var v=0;v<_.length;v++){var S=_[v];if(!h.has(S)){h.add(S);var f=Vo(S);for(const k of[t,document]){var g=Mn.get(k);g===void 0&&(g=new Map,Mn.set(k,g));var m=g.get(S);m===void 0?(k.addEventListener(S,hi,{passive:f}),g.set(S,1)):g.set(S,m+1)}}}};return w(gn(Ra)),di.add(w),()=>{var f;for(var _ of h)for(const g of[t,document]){var v=Mn.get(g),S=v.get(_);--S==0?(g.removeEventListener(_,hi),v.delete(_),v.size===0&&Mn.delete(g)):v.set(_,S)}di.delete(w),d!==r&&((f=d.parentNode)==null||f.removeChild(d))}});return Zo.set(l,c),l}let Zo=new WeakMap;class gi{constructor(t,r=!0){Qe(this,"anchor");B(this,mt,new Map);B(this,Tt,new Map);B(this,qe,new Map);B(this,pr,new Set);B(this,fn,!0);B(this,dn,t=>{if(u(this,mt).has(t)){var r=u(this,mt).get(t),n=u(this,Tt).get(r);if(n)En(n),u(this,pr).delete(r);else{var i=u(this,qe).get(r);i&&(En(i.effect),u(this,Tt).set(r,i.effect),u(this,qe).delete(r),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),n=i.effect)}for(const[s,a]of u(this,mt)){if(u(this,mt).delete(s),s===t)break;const o=u(this,qe).get(a);o&&(Ee(o.effect),u(this,qe).delete(a))}for(const[s,a]of u(this,Tt)){if(s===r||u(this,pr).has(s))continue;const o=()=>{if(Array.from(u(this,mt).values()).includes(s)){var c=document.createDocumentFragment();ui(a,c),c.append(Pt()),u(this,qe).set(s,{effect:a,fragment:c})}else Ee(a);u(this,pr).delete(s),u(this,Tt).delete(s)};u(this,fn)||!n?(u(this,pr).add(s),nr(a,o,!1)):o()}}});B(this,Ln,t=>{u(this,mt).delete(t);const r=Array.from(u(this,mt).values());for(const[n,i]of u(this,qe))r.includes(n)||(Ee(i.effect),u(this,qe).delete(n))});this.anchor=t,z(this,fn,r)}ensure(t,r){var n=L,i=va();if(r&&!u(this,Tt).has(t)&&!u(this,qe).has(t))if(i){var s=document.createDocumentFragment(),a=Pt();s.append(a),u(this,qe).set(t,{effect:ze(()=>r(a)),fragment:s})}else u(this,Tt).set(t,ze(()=>r(this.anchor)));if(u(this,mt).set(n,t),i){for(const[o,l]of u(this,Tt))o===t?n.unskip_effect(l):n.skip_effect(l);for(const[o,l]of u(this,qe))o===t?n.unskip_effect(l.effect):n.skip_effect(l.effect);n.oncommit(u(this,dn)),n.ondiscard(u(this,Ln))}else u(this,dn).call(this,n)}}mt=new WeakMap,Tt=new WeakMap,qe=new WeakMap,pr=new WeakMap,fn=new WeakMap,dn=new WeakMap,Ln=new WeakMap;function ht(e,t,r=!1){var n=new gi(e),i=r?Ht:0;function s(a,o){n.ensure(a,o)}Qr(()=>{var a=!1;t((o,l=0)=>{a=!0,s(l,o)}),a||s(-1,null)},i)}function Pa(e,t){return t}function Qo(e,t,r){for(var n=[],i=t.length,s,a=t.length,o=0;o<i;o++){let h=t[o];nr(h,()=>{if(s){if(s.pending.delete(h),s.done.add(h),s.pending.size===0){var w=e.outrogroups;mi(e,gn(s.done)),w.delete(s),w.size===0&&(e.outrogroups=null)}}else a-=1},!1)}if(a===0){var l=n.length===0&&r!==null&&e.pending.size===0;if(l){var c=r,d=c.parentNode;ko(d),d.append(c),e.items.clear()}mi(e,t,!l)}else s={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(s)}function mi(e,t,r=!0){var n;if(e.pending.size>0){n=new Set;for(const a of e.pending.values())for(const o of a)n.add(e.items.get(o).e)}for(var i=0;i<t.length;i++){var s=t[i];if(n!=null&&n.has(s)){s.f|=bt;const a=document.createDocumentFragment();ui(s,a)}else Ee(t[i],r)}}var Ia;function Yt(e,t,r,n,i,s=null){var a=e,o=new Map,l=(t&Ui)!==0;if(l){var c=e;a=c.appendChild(Pt())}var d=null,h=Zn(()=>{var k=r();return ne(k)?k:k==null?[]:gn(k)}),w,_=new Map,v=!0;function S(k){(m.effect.f&Re)===0&&(m.pending.delete(k),m.fallback=d,Jo(m,w,a,t,n),d!==null&&(w.length===0?(d.f&bt)===0?En(d):(d.f^=bt,nn(d,null,a)):nr(d,()=>{d=null})))}function f(k){m.pending.delete(k)}var g=Qr(()=>{w=p(h);for(var k=w.length,A=new Set,x=L,E=va(),M=0;M<k;M+=1){var C=w[M],P=n(C,M),J=v?null:o.get(P);J?(J.v&&Mr(J.v,C),J.i&&Mr(J.i,M),E&&x.unskip_effect(J.e)):(J=el(o,v?a:Ia??(Ia=Pt()),C,P,M,i,t,r),v||(J.e.f|=bt),o.set(P,J)),A.add(P)}if(k===0&&s&&!d&&(v?d=ze(()=>s(a)):(d=ze(()=>s(Ia??(Ia=Pt()))),d.f|=bt)),k>A.size&&eo(),!v)if(_.set(x,A),E){for(const[ge,Ve]of o)A.has(ge)||x.skip_effect(Ve.e);x.oncommit(S),x.ondiscard(f)}else S(x);p(h)}),m={effect:g,items:o,pending:_,outrogroups:null,fallback:d};v=!1}function rn(e){for(;e!==null&&(e.f&Je)===0;)e=e.next;return e}function Jo(e,t,r,n,i){var J,ge,Ve,Fe,Ie,yt,Ke,lt,wt;var s=(n&Ds)!==0,a=t.length,o=e.items,l=rn(e.effect.first),c,d=null,h,w=[],_=[],v,S,f,g;if(s)for(g=0;g<a;g+=1)v=t[g],S=i(v,g),f=o.get(S).e,(f.f&bt)===0&&((ge=(J=f.nodes)==null?void 0:J.a)==null||ge.measure(),(h??(h=new Set)).add(f));for(g=0;g<a;g+=1){if(v=t[g],S=i(v,g),f=o.get(S).e,e.outrogroups!==null)for(const ke of e.outrogroups)ke.pending.delete(f),ke.done.delete(f);if((f.f&Oe)!==0&&(En(f),s&&((Fe=(Ve=f.nodes)==null?void 0:Ve.a)==null||Fe.unfix(),(h??(h=new Set)).delete(f))),(f.f&bt)!==0)if(f.f^=bt,f===l)nn(f,null,r);else{var m=d?d.next:l;f===e.effect.last&&(e.effect.last=f.prev),f.prev&&(f.prev.next=f.next),f.next&&(f.next.prev=f.prev),qt(e,d,f),qt(e,f,m),nn(f,m,r),d=f,w=[],_=[],l=rn(d.next);continue}if(f!==l){if(c!==void 0&&c.has(f)){if(w.length<_.length){var k=_[0],A;d=k.prev;var x=w[0],E=w[w.length-1];for(A=0;A<w.length;A+=1)nn(w[A],k,r);for(A=0;A<_.length;A+=1)c.delete(_[A]);qt(e,x.prev,E.next),qt(e,d,x),qt(e,E,k),l=k,d=E,g-=1,w=[],_=[]}else c.delete(f),nn(f,l,r),qt(e,f.prev,f.next),qt(e,f,d===null?e.effect.first:d.next),qt(e,d,f),d=f;continue}for(w=[],_=[];l!==null&&l!==f;)(c??(c=new Set)).add(l),_.push(l),l=rn(l.next);if(l===null)continue}(f.f&bt)===0&&w.push(f),d=f,l=rn(f.next)}if(e.outrogroups!==null){for(const ke of e.outrogroups)ke.pending.size===0&&(mi(e,gn(ke.done)),(Ie=e.outrogroups)==null||Ie.delete(ke));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||c!==void 0){var M=[];if(c!==void 0)for(f of c)(f.f&Oe)===0&&M.push(f);for(;l!==null;)(l.f&Oe)===0&&l!==e.fallback&&M.push(l),l=rn(l.next);var C=M.length;if(C>0){var P=(n&Ui)!==0&&a===0?r:null;if(s){for(g=0;g<C;g+=1)(Ke=(yt=M[g].nodes)==null?void 0:yt.a)==null||Ke.measure();for(g=0;g<C;g+=1)(wt=(lt=M[g].nodes)==null?void 0:lt.a)==null||wt.fix()}Qo(e,M,P)}}s&&St(()=>{var ke,Nt;if(h!==void 0)for(f of h)(Nt=(ke=f.nodes)==null?void 0:ke.a)==null||Nt.apply()})}function el(e,t,r,n,i,s,a,o){var l=(a&Ls)!==0?(a&Bs)===0?bo(r,!1,!1):Xt(r):null,c=(a&zs)!==0?Xt(i):null;return{v:l,i:c,e:ze(()=>(s(t,l??r,c??i,o),()=>{e.delete(n)}))}}function nn(e,t,r){if(e.nodes)for(var n=e.nodes.start,i=e.nodes.end,s=t&&(t.f&bt)===0?t.nodes.start:r;n!==null;){var a=Zr(n);if(s.before(n),n===i)return;n=a}}function qt(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function ae(e,t,r,n,i){var o,l;if((o=t.$$host)!=null&&o.$$shadowRoot){const c=ai("slot");N(e,c);return}var s=(l=t.$$slots)==null?void 0:l[r],a=!1;s===!0&&(s=t.children,a=!0),s===void 0||s(e,a?()=>n:n)}function tl(e,t,r){var n=new gi(e);Qr(()=>{var i=t()??null;n.ensure(i,i&&(s=>r(s,i)))},Ht)}function rl(e,t,r,n,i,s){var a=null,o=e,l=new gi(o,!1);Qr(()=>{const c=t()||null;var d=Xs;if(c===null){l.ensure(null,null);return}return l.ensure(c,h=>{if(c){if(a=ai(c,d),tn(a,a),n){var w=null,_=a.appendChild(Pt());n(a,_),w==null||w.remove()}U.nodes.end=a,h.before(a)}}),()=>{}},Ht),oi(()=>{})}function nl(e,t){var r=void 0,n;ga(()=>{r!==(r=t())&&(n&&(Ee(n),n=null),r&&(n=ze(()=>{li(()=>r(e))})))})}function La(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=La(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function il(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=La(e))&&(n&&(n+=" "),n+=t);return n}function Or(e){return typeof e=="object"?il(e):e??""}const za=[...` 	
\r\f \v\uFEFF`];function al(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var i of Object.keys(r))if(r[i])n=n?n+" "+i:i;else if(n.length)for(var s=i.length,a=0;(a=n.indexOf(i,a))>=0;){var o=a+s;(a===0||za.includes(n[a-1]))&&(o===n.length||za.includes(n[o]))?n=(a===0?"":n.substring(0,a))+n.substring(o+1):a=o}}return n===""?null:n}function Da(e,t=!1){var r=t?" !important;":";",n="";for(var i of Object.keys(e)){var s=e[i];s!=null&&s!==""&&(n+=" "+i+": "+s+r)}return n}function yi(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function sl(e,t){if(t){var r="",n,i;if(Array.isArray(t)?(n=t[0],i=t[1]):n=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var s=!1,a=0,o=!1,l=[];n&&l.push(...Object.keys(n).map(yi)),i&&l.push(...Object.keys(i).map(yi));var c=0,d=-1;const S=e.length;for(var h=0;h<S;h++){var w=e[h];if(o?w==="/"&&e[h-1]==="*"&&(o=!1):s?s===w&&(s=!1):w==="/"&&e[h+1]==="*"?o=!0:w==='"'||w==="'"?s=w:w==="("?a++:w===")"&&a--,!o&&s===!1&&a===0){if(w===":"&&d===-1)d=h;else if(w===";"||h===S-1){if(d!==-1){var _=yi(e.substring(c,d).trim());if(!l.includes(_)){w!==";"&&h++;var v=e.substring(c,h).trim();r+=" "+v+";"}}c=h+1,d=-1}}}}return n&&(r+=Da(n)),i&&(r+=Da(i,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function We(e,t,r,n,i,s){var a=e[Gn];if(a!==r||a===void 0){var o=al(r,n,s);o==null?e.removeAttribute("class"):t?e.className=o:e.setAttribute("class",o),e[Gn]=r}else if(s&&i!==s)for(var l in s){var c=!!s[l];(i==null||c!==!!i[l])&&e.classList.toggle(l,c)}return s}function wi(e,t={},r,n){for(var i in r){var s=r[i];t[i]!==s&&(r[i]==null?e.style.removeProperty(i):e.style.setProperty(i,s,n))}}function Ba(e,t,r,n){var i=e[Yn];if(i!==t){var s=sl(t,n);s==null?e.removeAttribute("style"):e.style.cssText=s,e[Yn]=t}else n&&(Array.isArray(n)?(wi(e,r==null?void 0:r[0],n[0]),wi(e,r==null?void 0:r[1],n[1],"important")):wi(e,r,n));return n}function Va(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Fa(e,t){var r=!("__defaultValue"in e);!r&&e.__defaultValue===t||(e.__defaultValue=t,Ha(e,!r||"__value"in e))}function Ha(e,t){var r=e.__defaultValue,n=e.multiple,i=n?r??[]:null;if(!(n&&!ne(i))){var s=e.selectedIndex,a=t&&n?new Set(e.selectedOptions):null;for(var o of e.options){var l=bi(o);Va(o,n?i.includes(l):la(l,r))}if(t)if(a!==null)for(o of e.options){var c=a.has(o);o.selected!==c&&(o.selected=c)}else e.selectedIndex!==s&&(e.selectedIndex=s)}}function Lt(e,t,r=!1){if(e.multiple){if(t==null)return;if(!ne(t))return qs();for(var n of e.options)n.selected=t.includes(bi(n));return}for(n of e.options){var i=bi(n);if(la(i,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function cr(e){var t=new MutationObserver(r=>{r.every(ol)||("__defaultValue"in e&&Ha(e,!1),"__value"in e&&Lt(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),oi(()=>{t.disconnect()})}function bi(e){return"__value"in e?e.__value:e.value}function ol(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(r=>r.nodeName==="SELECTEDCONTENT")}return!1}const an=Symbol("class"),sn=Symbol("style"),Ua=Symbol("is custom element"),Wa=Symbol("is html"),ll=xn?"input":"INPUT",cl=xn?"option":"OPTION",ja=xn?"select":"SELECT",ul=xn?"progress":"PROGRESS";function Tn(e,t){var r=Nn(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==ul)||(e.value=t??"")}function fl(e,t){var r=Nn(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function Ae(e,t,r,n){var i=Nn(e);i[t]!==(i[t]=r)&&(t==="loading"&&(e[Is]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Ya(e).has(t)?e[t]=r:e.setAttribute(t,r))}function dl(e,t,r,n,i=!1,s=!1){var a=Nn(e),o=a[Ua],l=!a[Wa],c=t||{},d=e.nodeName===cl,h=e.nodeName===ja;for(var w in t)!(w in r)&&w[0]+w[1]!=="$$"&&(r[w]=null);r.class?r.class=Or(r.class):r[an]&&(r.class=null),r[sn]&&(r.style??(r.style=null));var _=Ya(e);if(e.nodeName===ll&&"type"in r&&("value"in r||"__value"in r)){var v=r.type;(v!==c.type||v===void 0&&e.hasAttribute("type"))&&(c.type=v,Ae(e,"type",v))}for(const x in r){let E=r[x];if(d&&x==="value"&&E==null){e.value=e.__value="",c[x]=E;continue}if(x==="class"){var S=e.namespaceURI==="http://www.w3.org/1999/xhtml";We(e,S,E,n,t==null?void 0:t[an],r[an]),c[x]=E,c[an]=r[an];continue}if(x==="style"){Ba(e,E,t==null?void 0:t[sn],r[sn]),c[x]=E,c[sn]=r[sn];continue}var f=c[x];if(!(E===f&&!(E===void 0&&e.hasAttribute(x)))){c[x]=E;var g=x[0]+x[1];if(g!=="$$")if(g==="on"){const M={},C="$$"+x;let P=x.slice(2);var m=Lo(P);if(Po(P)&&(P=P.slice(0,-7),M.capture=!0),!m&&f){if(E!=null)continue;e.removeEventListener(P,c[C],M),c[C]=null}if(m)ee(P,e,E),lr([P]);else if(E!=null){let J=function(ge){c[x].call(this,ge)};c[C]=Fo(P,e,J,M)}}else if(x==="style")Ae(e,x,E);else if(x==="autofocus")po(e,!!E);else if(!o&&(x==="__value"||x==="value"&&E!=null))e.value=e.__value=E;else if(x==="selected"&&d)Va(e,E);else{var k=x;l||(k=Do(k));var A=k==="defaultValue"||k==="defaultChecked";if(h&&k==="defaultValue")continue;if(E==null&&!o&&!A)if(a[x]=null,k==="value"||k==="checked"){let M=e;const C=t===void 0;if(k==="value"){let P=M.defaultValue;M.removeAttribute(k),M.defaultValue=P,M.value=M.__value=C?P:null}else{let P=M.defaultChecked;M.removeAttribute(k),M.defaultChecked=P,M.checked=C?P:!1}}else e.removeAttribute(x);else A||(o||typeof E!="string")&&_.has(k)?(e[k]=E,k in a&&(a[k]=ye)):typeof E!="function"&&Ae(e,k,E)}}}return c}function Xa(e,t,r=[],n=[],i=[],s,a=!1,o=!1){qi(i,r,n,l=>{var c=void 0,d={},h=e.nodeName===ja,w=!1;if(ga(()=>{var v=t(...l.map(p)),S=dl(e,c,v,s,a,o);if(w&&h){var f=e;"defaultValue"in v&&Fa(f,v.defaultValue),"value"in v&&Lt(f,v.value)}for(let m of Object.getOwnPropertySymbols(d))v[m]||Ee(d[m]);for(let m of Object.getOwnPropertySymbols(v)){var g=v[m];m.description===Gs&&(!c||g!==c[m])&&(d[m]&&Ee(d[m]),d[m]=ze(()=>nl(e,()=>g))),S[m]=g}c=S}),h){var _=e;li(()=>{var v=c;"defaultValue"in v&&Fa(_,v.defaultValue),Lt(_,v.value,!0),cr(_)})}w=!0})}function Nn(e){return e[bn]??(e[bn]={[Ua]:e.nodeName.includes("-"),[Wa]:e.namespaceURI===ji})}var Ga=new Map;function Ya(e){var t=e.getAttribute("is")||e.nodeName,r=Ga.get(t);if(r)return r;Ga.set(t,r=new Set);for(var n,i=e,s=Element.prototype;s!==i;){n=Li(i);for(var a in n)n[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&r.add(a);i=Hn(i)}return r}function xi(e,t){return e===t||(e==null?void 0:e[xt])===t}function qa(e=qn(),t,r,n){var i=fe.r,s=U;return li(()=>{var a,o;return _a(()=>{a=o,o=[],Gt(()=>{xi(r(...o),e)||(t(e,...o),a&&xi(r(...a),e)&&t(null,...a))})}),()=>{let l=s;for(;l!==i&&l.parent!==null&&l.parent.f&mn;)l=l.parent;const c=()=>{o&&xi(r(...o),e)&&t(null,...o)},d=l.teardown;l.teardown=()=>{c(),d==null||d()}}}),e}function vl(e=!1){const t=fe,r=t.l.u;if(!r)return;let n=()=>sr(t.s);if(e){let i=0,s={};const a=Er(()=>{let o=!1;const l=t.s;for(const c in l)l[c]!==s[c]&&(s[c]=l[c],o=!0);return o&&i++,i});n=()=>p(a)}r.b.length&&Ao(()=>{Ka(t,n),Un(r.b)}),Tr(()=>{const i=Gt(()=>r.m.map(Cs));return()=>{for(const s of i)typeof s=="function"&&s()}}),r.a.length&&Tr(()=>{Ka(t,n),Un(r.a)})}function Ka(e,t){if(e.l.s)for(const r of e.l.s)p(r);t()}let On=!1;function pl(e){var t=On;try{return On=!1,[e(),On]}finally{On=t}}const hl={get(e,t){if(!e.exclude.includes(t))return p(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var n=U;try{rt(e.parent_effect),e.special[t]=_t({get[t](){return e.props[t]}},t,Wi)}finally{rt(n)}}return e.special[t](r),aa(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),aa(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ie(e,t){return new Proxy({props:e,exclude:t,special:{},version:Xt(0),parent_effect:U},hl)}const _l={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Fr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let i=e.props[n];Fr(i)&&(i=i());const s=Ft(i,t);if(s&&s.set)return s.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Fr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const i=Ft(n,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===xt||t===Hi)return!1;for(let r of e.props)if(Fr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Fr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function le(...e){return new Proxy({props:e},_l)}function _t(e,t,r,n){var A;var i=!Sr||(r&Fs)!==0,s=(r&Hs)!==0,a=(r&Us)!==0,o=n,l=!0,c=void 0,d=()=>a&&i?(c??(c=Er(n)),p(c)):(l&&(l=!1,o=a?Gt(n):n),o);let h;if(s){var w=xt in e||Hi in e;h=((A=Ft(e,t))==null?void 0:A.set)??(w&&t in e?x=>e[t]=x:void 0)}var _,v=!1;s?[_,v]=pl(()=>e[t]):_=e[t],_===void 0&&n!==void 0&&(_=d(),h&&(i&&ao(),h(_)));var S;if(i?S=()=>{var x=e[t];return x===void 0?d():(l=!0,x)}:S=()=>{var x=e[t];return x!==void 0&&(o=void 0),x===void 0?o:x},i&&(r&Wi)===0)return S;if(h){var f=e.$$legacy;return(function(x,E){return arguments.length>0?((!i||!E||f||v)&&h(E?S():x),x):S()})}var g=!1,m=((r&Vs)!==0?Er:Zn)(()=>(g=!1,S()));s&&p(m);var k=U;return(function(x,E){if(arguments.length>0){const M=E?p(m):i&&s?Le(x):x;return $(m,M),g=!0,o!==void 0&&(o=M),x}return It&&g||(k.f&Re)!==0?m.v:p(m)})}function Si(e){fe===null&&Qs(),Sr&&fe.l!==null?gl(fe).m.push(e):Tr(()=>{const t=Gt(e);if(typeof t=="function")return t})}function gl(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const ml="5";typeof window<"u"&&((os=window.__svelte??(window.__svelte={})).v??(os.v=new Set)).add(ml);const Q=Le({ready:!1,cleanScreen:!1,panelOpen:!0,settingsOpen:!1,startupOpen:!0,focusSection:null,focusNonce:0,status:{}});function yl(e){Q.panelOpen=!0,Q.focusSection=e,Q.focusNonce++}const je=Le({});function Za(e){try{return structuredClone(e)}catch{return JSON.parse(JSON.stringify(e))}}function re(e){var t,r,n;if(e==null)return e;try{return((n=(r=(t=window.XRA)==null?void 0:t.i18n)==null?void 0:r.t)==null?void 0:n.call(r,e))??e}catch{return e}}function Be(e,t){const r=e.split(".");let n=je;for(const i of r){if(n==null)return t;n=n[i]}return n===void 0?t:n}function wl(e){var r,n,i,s,a,o,l,c;const t=window.XRA;if(t){if(e.startsWith("background.")){(n=(r=t.background)==null?void 0:r.apply)==null||n.call(r);return}if(e==="ui.language"){(s=(i=t.i18n)==null?void 0:i.setLanguage)==null||s.call(i,je.ui.language);return}if(e==="ui.preview_wireframe"){typeof t.applyMocapWireframeVisibility=="function"&&t.applyMocapWireframeVisibility();return}if(e==="ui.mocap_view"){typeof t.applyMocapWireframeVisibility=="function"&&t.applyMocapWireframeVisibility();return}if(e.startsWith("performance.")){window.XRA_render_fps_limit=Number(je.performance.render_fps??60),window.XRA_gpu_preference=String(je.performance.gpu_preference||"default"),window.XRA_preserve_drawing_buffer=je.performance.preserve_drawing_buffer!==!1,window.XRA_antialias=je.performance.antialias!=="off",(o=(a=t.events)==null?void 0:a.emit)==null||o.call(a,"performance",je.performance);return}(c=(l=t.events)==null?void 0:l.emit)==null||c.call(l,"config-change",{path:e,value:Be(e)})}}function it(e,t){var s,a;const r=window.XRA,n=e.split(".");let i=je;for(let o=0;o<n.length-1;o++)i[n[o]]==null&&(i[n[o]]={}),i=i[n[o]];if(i[n[n.length-1]]=t,r!=null&&r.config){let o=r.config;for(let l=0;l<n.length-1;l++)o[n[l]]==null&&(o[n[l]]={}),o=o[n[l]];o[n[n.length-1]]=t}wl(e);try{(a=(s=r==null?void 0:r.profileService)==null?void 0:s.save)==null||a.call(s)}catch{}}function Rn(e,t,r){return new Promise((n,i)=>{const s=setTimeout(()=>i(new Error(`${r} timed out after ${t} ms`)),t);Promise.resolve(e).then(a=>{clearTimeout(s),n(a)},a=>{clearTimeout(s),i(a)})})}async function Qa({timeout:e=12e3,dataTimeout:t=8e3}={}){var n,i,s;const r=(n=window.XRA)==null?void 0:n.nativeBridge;if(!(r!=null&&r.startNativeStreamer))throw new Error("native bridge unavailable");try{await Rn(r.startNativeStreamer(),e,"Camera start");const a=performance.now()+t;for(;performance.now()<a;){if((i=r.cameraDataReady)!=null&&i.call(r))return!0;await new Promise(o=>setTimeout(o,120))}return!0}catch(a){try{await((s=r.forceStopCamera)==null?void 0:s.call(r))}catch{}throw a}}async function bl({timeout:e=8e3}={}){var r,n;const t=(r=window.XRA)==null?void 0:r.nativeBridge;if(t!=null&&t.stopNativeStreamer)try{await Rn(t.stopNativeStreamer(),e,"Camera stop")}catch(i){try{await((n=t.forceStopCamera)==null?void 0:n.call(t))}catch{}throw i}}async function xl({timeout:e=12e3,readyTimeout:t=6e3}={}){var n,i,s,a;const r=(n=window.XRA)==null?void 0:n.recorder;if(!(r!=null&&r.start))throw new Error("recorder unavailable");try{await Rn(r.start(),e,"Recording start");const o=performance.now()+t;for(;performance.now()<o;){if((s=(i=r.status)==null?void 0:i.call(r))!=null&&s.active)return!0;await new Promise(l=>setTimeout(l,120))}return!0}catch(o){try{await((a=r.stop)==null?void 0:a.call(r))}catch{}throw o}}async function Sl({timeout:e=8e3}={}){var r,n;const t=(r=window.XRA)==null?void 0:r.recorder;if(t!=null&&t.stop)try{await Rn(t.stop(),e,"Recording stop")}catch(i){try{await((n=t.stop)==null?void 0:n.call(t))}catch{}throw i}}function Cn(){var e,t,r;Q.cleanScreen=!Q.cleanScreen,document.body.classList.toggle("xra-total-clean-screen",Q.cleanScreen);try{(r=(t=(e=window.XRA)==null?void 0:e.ui)==null?void 0:t.setHidden)==null||r.call(t,Q.cleanScreen)}catch{}}function kl(){var e;try{Object.assign(je,Za(((e=window.XRA)==null?void 0:e.config)||{}))}catch{}}function Ja(){var e;try{const t=(e=window.SA_bridge)==null?void 0:e.backend;t&&typeof t.status=="function"&&(Q.status=t.status()||{})}catch{}}function $l(){const e=()=>window.XRA&&window.XRA.config?(Object.assign(je,Za(window.XRA.config)),Q.ready=!0,Ja(),window.addEventListener("keydown",t=>{t.key==="Escape"&&Q.cleanScreen&&(t.preventDefault(),Cn())},!0),!0):!1;if(!e()){const t=setInterval(()=>{e()&&clearInterval(t)},200)}}const El={camera:{title:"Camera",icon:"Camera"},devices:{title:"Devices",icon:"SlidersHorizontal"},pose_model:{title:"Pose model",icon:"PersonStanding"},performance:{title:"Performance",icon:"Zap"},tracking:{title:"Motion capture",icon:"Activity"},body:{title:"Body",icon:"PersonStanding"},collider:{title:"Body collider",icon:"Shield"},lip:{title:"Audio & Lip-sync",icon:"Mic"},background:{title:"Background",icon:"Image"},avatar:{title:"Character position (avatar only)",icon:"User"},second_avatar:{title:"Remote avatar (Studio Link)",icon:"Globe"},stage:{title:"3D Stage & Environment",icon:"Landmark"},recorder:{title:"Recording / capture",icon:"Video"},visual_effects:{title:"Visual effects",icon:"Sparkles"},debug:{title:"Diagnostics",icon:"Bug"},ui:{title:"UI & overlays",icon:"Monitor"}},es=["performance","tracking","body","collider","lip","background","stage","avatar","second_avatar","recorder","visual_effects","debug","ui","camera","devices","pose_model"],Al=new Set(["left_settings","_custom_","_excluded_"]),Ml=new Set(["camera.view_presets","camera.selected_view_preset","ui.preview_video","ui.preview_wireframe","ui.preview_debug","performance.auto_last_result","recorder.output_dir"]);function ts(e){const t=String(e).replace(/_/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").trim();return t.charAt(0).toUpperCase()+t.slice(1)}const Tl={"ui.language":{type:"select",options:()=>{var e,t;return((t=(e=window.XRA)==null?void 0:e.i18n)==null?void 0:t.LANGUAGES)||[["en","English"]]}},"background.mode":{type:"select",options:[["color","Color"],["image","Image"],["none","None (transparent · OBS)"]]},"background.color":{type:"color"},"background.path":{type:"text"},"ui.mocap_view":{type:"select",label:"Mocap window",options:[["off","Off"],["both","Webcam + skeleton"],["wireframe","Skeleton only"],["video","Webcam only"]]},"ui.mocap_visibility":{type:"select",label:"Mocap window visibility",options:[["always","Always on (black while idle)"],["auto","Auto (hide when tracking is off)"]]},"performance.tracking_pipeline":{type:"select",label:"Tracking mode",options:[["FULL_BODY","Full Body"],["FACE","Face only"],["UPPER_BODY","Upper body"]]},"performance.render_resolution":{type:"select",options:[["720p","720p (HD · GPU Saving)"],["1080p","1080p (Full HD · Recommended)"],["1440p","1440p (2K · High resolution)"]]},"performance.render_fps":{type:"slider",min:15,max:240,step:1},"performance.gpu_preference":{type:"select",label:"Graphics card (GPU)",options:[["default","Default"],["high-performance","Dedicated GPU (High Performance)"],["low-power","Integrated GPU (Low Power)"]]},"performance.shadows":{type:"select",options:[["auto","Auto"],["on","Enabled"],["off","Disabled (GPU saving)"]]},"performance.antialias":{type:"select",label:"Anti-Aliasing (AA)",options:[["auto","Enabled (Hardware MSAA · Recommended)"],["off","Disabled"]]},"performance.spring_bone":{type:"select",label:"Hair/cloth physics (Spring Bone)",options:[["full","Full (every frame)"],["half","Half (1 frame out of 2 · Saving)"],["off","Off"]]},"performance.infer_mode":{type:"select",options:[["native","Native (Auto)"],["640x360","640×360 (Recommended · 30 FPS smooth)"],["640x480","640×480 (Standard 4:3 format)"],["1280x720","1280×720 (HD 720p · High precision)"]]},"performance.pose_fps":{type:"slider",min:5,max:30,step:1},"performance.hand_fps":{type:"slider",min:5,max:30,step:1},"performance.min_tracking_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_pose_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_face_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_joint_confidence":{type:"slider",min:.05,max:1,step:.05},"tracking.hand_recovery_mode":{type:"select",options:[["normal","Normal"],["aggressive","Aggressive"],["off","Off"]]},"tracking.hand_detection_sensitivity":{type:"select",options:[["high","High"],["normal","Normal"],["low","Low"]]},"tracking.stabilize_hand_percent":{type:"slider",min:0,max:100,step:1},"tracking.stabilize_arm":{type:"slider",min:0,max:100,step:1},"tracking.stabilize_arm_time":{type:"slider",min:0,max:2,step:.05},"tracking.native_smoothing":{type:"slider",min:0,max:1,step:.01},"tracking.body_bend_reduction":{type:"slider",min:0,max:1,step:.01},"tracking.upper_body_guard_strength":{type:"slider",min:0,max:1,step:.01},"tracking.guard_jump_deg":{type:"slider",min:5,max:120,step:1},"tracking.guard_hold_ms":{type:"slider",min:0,max:2e3,step:10},"tracking.guard_reacquire_deg":{type:"slider",min:5,max:120,step:1},"tracking.adaptive_smoothing_strength":{type:"slider",min:0,max:1,step:.01},"tracking.guard_confidence_min":{type:"slider",min:0,max:1,step:.01},"tracking.guard_release_ms":{type:"slider",min:0,max:2e3,step:10},"tracking.guard_mode":{type:"select",options:[["off","Off"],["auto","Auto"]]},"tracking.desk_torso_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_hips_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_legs_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_max_yaw_deg":{type:"slider",min:0,max:90,step:1},"tracking.desk_max_pitch_deg":{type:"slider",min:0,max:90,step:1},"tracking.desk_max_roll_deg":{type:"slider",min:0,max:90,step:1},"body.anchor_strength":{type:"slider",min:0,max:1,step:.01},"body.transition_ms":{type:"slider",min:0,max:2e3,step:10},"avatar.offset_x":{type:"slider",min:-5,max:5,step:.01},"avatar.offset_y":{type:"slider",min:-5,max:5,step:.01},"avatar.offset_z":{type:"slider",min:-5,max:5,step:.01},"avatar.rotation_y":{type:"slider",min:-180,max:180,step:1},"second_avatar.offset_x":{type:"slider",min:-20,max:20,step:.1},"second_avatar.offset_y":{type:"slider",min:-10,max:10,step:.1},"second_avatar.offset_z":{type:"slider",min:-10,max:10,step:.1},"second_avatar.rotation_y":{type:"slider",min:-180,max:180,step:1},"stage.scale":{type:"slider",min:.1,max:5,step:.01},"stage.rotation_x":{type:"slider",min:-180,max:180,step:1},"stage.rotation_y":{type:"slider",min:-180,max:180,step:1},"stage.rotation_z":{type:"slider",min:-180,max:180,step:1},"stage.offset_x":{type:"slider",min:-10,max:10,step:.05},"stage.offset_y":{type:"slider",min:-10,max:10,step:.05},"stage.offset_z":{type:"slider",min:-10,max:10,step:.05},"stage.scene_zoom":{type:"slider",min:.5,max:3,step:.01},"stage.lights_intensity":{type:"slider",min:0,max:3,step:.05},"collider.preset":{type:"select",options:[["CUSTOM","Custom"],["NONE","None"]]},"collider.reaction":{type:"select",options:[["z_push","Z push"],["bounce","Bounce"],["block","Block"]]},"collider.head":{type:"slider",min:0,max:200,step:1},"collider.chest":{type:"slider",min:0,max:200,step:1},"collider.waist":{type:"slider",min:0,max:200,step:1},"collider.hip":{type:"slider",min:0,max:200,step:1},"collider.front_clearance":{type:"slider",min:0,max:50,step:1},"lip.analysis_fps":{type:"slider",min:5,max:60,step:1},"lip.fft_size":{type:"select",label:"FFT size",options:[["256","256"],["512","512"],["1024","1024"],["2048","2048"]]},"lip.mic_mix":{type:"slider",min:0,max:1,step:.01},"lip.threshold":{type:"slider",min:0,max:.2,step:.001},"lip.response_gain":{type:"slider",min:0,max:3,step:.05},"lip.vowel_emphasis":{type:"slider",min:0,max:3,step:.05},"recorder.mode":{type:"select",label:"Recording source",options:[["video_audio","Video + Audio"],["video","Video only"],["audio","Audio only"]]},"recorder.audio_only_variant":{type:"select",label:"Audio only mode",options:[["both","Processed + RAW"],["processed","Processed"],["raw","RAW"]]},"recorder.capture_source":{type:"select",label:"Output source",options:[["classic_v74","Classic output · recommended"],["clean_scene","Clean scene output · experimental (no UI)"],["native_xr","XR native video only · fallback"]]},"recorder.output_format":{type:"select",options:[["webm","WebM"],["mp4","MP4"]]},"recorder.audio_profile":{type:"select",options:[["podcast","Podcast"],["call","Call (Browser echo/noise filters)"]]},"recorder.hardware_encode":{type:"select",options:[["auto","Auto"],["on","On"],["off","Off (CPU)"]]},"recorder.width":{type:"slider",min:320,max:3840,step:2},"recorder.height":{type:"slider",min:240,max:2160,step:2},"recorder.fps":{type:"slider",min:15,max:60,step:1},"recorder.gate_threshold_db":{type:"slider",min:-80,max:-5,step:.5},"recorder.gate_hold_ms":{type:"slider",min:0,max:1e3,step:10},"recorder.gate_release_ms":{type:"slider",min:0,max:1e3,step:10},"recorder.video_bps":{type:"slider",min:5e5,max:2e7,step:1e5},"recorder.audio_bps":{type:"slider",min:32e3,max:32e4,step:8e3},"recorder.segment_minutes":{type:"select",options:[["0","Off"],["30","Every 30 min"],["60","Every 60 min"]]},"recorder.raw_audio_format":{type:"select",options:[["flac","FLAC (lossless)"],["wav","WAV (large)"]]},"recorder.filename":{type:"text"},"camera.optimized":{type:"toggle"},"camera.width":{type:"slider",min:160,max:1920,step:2},"camera.height":{type:"slider",min:120,max:1080,step:2},"camera.fps":{type:"slider",min:5,max:60,step:1}};function Nl(e){const t=[];for(const[r,n]of Object.entries(e||{})){if(Al.has(r)||!n||typeof n!="object"||Array.isArray(n))continue;const i=El[r]||{},s=[];for(const[a,o]of Object.entries(n)){const l=`${r}.${a}`;if(Ml.has(l))continue;const c=Tl[l]||{};if(c.hidden||o!==null&&typeof o=="object")continue;const d=c.type||(typeof o=="boolean"?"toggle":typeof o=="number"?"number":"text");s.push({type:d,path:l,label:c.label||ts(a),min:c.min,max:c.max,step:c.step,options:c.options})}s.length&&t.push({id:r,title:i.title||ts(r),icon:i.icon||"⚙",controls:s})}return t.sort((r,n)=>{const i=es.indexOf(r.id),s=es.indexOf(n.id);return(i<0?999:i)-(s<0?999:s)}),t}var Ol=_e("<option> </option>"),Rl=_e("<select></select>"),Cl=_e("<select><option> </option><option> </option></select>"),Pl=_e('<input type="range"/> <span class="xra-val"> </span>',1),Il=_e('<input type="checkbox"/>'),Ll=_e('<input type="color"/>'),zl=_e('<input type="number"/>'),Dl=_e('<input type="text"/>'),Bl=_e('<label class="xra-row"><span class="xra-row-label"> </span> <!></label>');function Vl(e,t){Wt(t,!0);const r=ft(()=>typeof t.control.options=="function"?t.control.options():t.control.options||[]),n=f=>f===!1?"off":"auto",i=f=>f==="off"?!1:null;var s=Bl(),a=D(s),o=q(a,!0),l=I(a,2);{var c=f=>{var g=Rl();Yt(g,21,()=>p(r),Pa,(k,A)=>{var x=Ol(),E=q(x,!0),M={};he(C=>{K(E,C),M!==(M=p(A)[0])&&(x.value=(x.__value=M)??"")},[()=>re(p(A)[1])]),N(k,x)});var m;cr(g),he(k=>{m!==(m=k)&&(g.value=(g.__value=m)??"",Lt(g,m))},[()=>Be(t.control.path)]),ee("change",g,k=>it(t.control.path,k.currentTarget.value)),N(f,g)},d=f=>{var g=Cl(),m=D(g),k=q(m,!0);m.value=m.__value="auto";var A=I(m),x=q(A,!0);A.value=A.__value="off";var E;cr(g),he((M,C,P)=>{K(k,M),K(x,C),E!==(E=P)&&(g.value=(g.__value=E)??"",Lt(g,E))},[()=>re("Auto (follow tracking)"),()=>re("Off"),()=>n(Be(t.control.path))]),ee("change",g,M=>it(t.control.path,i(M.currentTarget.value))),N(f,g)},h=f=>{var g=Pl(),m=G(g),k=I(m,2),A=q(k,!0);he((x,E)=>{Ae(m,"min",t.control.min),Ae(m,"max",t.control.max),Ae(m,"step",t.control.step),Tn(m,x),K(A,E)},[()=>Be(t.control.path,t.control.min),()=>Be(t.control.path)]),ee("input",m,x=>it(t.control.path,Number(x.currentTarget.value))),N(f,g)},w=f=>{var g=Il();he(m=>fl(g,m),[()=>!!Be(t.control.path)]),ee("change",g,m=>it(t.control.path,m.currentTarget.checked)),N(f,g)},_=f=>{var g=Ll();he(m=>Tn(g,m),[()=>Be(t.control.path)]),ee("input",g,m=>it(t.control.path,m.currentTarget.value)),N(f,g)},v=f=>{var g=zl();he(m=>{Ae(g,"step",t.control.step||"any"),Tn(g,m)},[()=>Be(t.control.path,0)]),ee("input",g,m=>it(t.control.path,Number(m.currentTarget.value))),N(f,g)},S=f=>{var g=Dl();he(m=>Tn(g,m),[()=>Be(t.control.path,"")]),ee("change",g,m=>it(t.control.path,m.currentTarget.value)),N(f,g)};ht(l,f=>{t.control.type==="select"?f(c):t.control.type==="tristate"?f(d,1):t.control.type==="slider"?f(h,2):t.control.type==="toggle"?f(w,3):t.control.type==="color"?f(_,4):t.control.type==="number"?f(v,5):t.control.type==="text"&&f(S,6)})}he(f=>K(o,f),[()=>re(t.control.label)]),N(e,s),jt()}lr(["change","input"]),uo();/**
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
 */const Fl={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
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
 */const Hl=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
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
 */const rs=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();var Ul=Wo("<svg><!><!></svg>");function ce(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]),n=ie(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Wt(t,!1);let i=_t(t,"name",8,void 0),s=_t(t,"color",8,"currentColor"),a=_t(t,"size",8,24),o=_t(t,"strokeWidth",8,2),l=_t(t,"absoluteStrokeWidth",8,!1),c=_t(t,"iconNode",24,()=>[]);vl();var d=Ul();Xa(d,(_,v,S)=>({...Fl,..._,...n,width:a(),height:a(),stroke:s(),"stroke-width":v,class:S}),[()=>Hl(n)?void 0:{"aria-hidden":"true"},()=>(sr(l()),sr(o()),sr(a()),Gt(()=>l()?Number(o())*24/Number(a()):o())),()=>(sr(rs),sr(i()),sr(r),Gt(()=>rs("lucide-icon","lucide",i()?`lucide-${i()}`:"",r.class)))]);var h=D(d);Yt(h,1,c,Pa,(_,v)=>{var S=ft(()=>Bi(p(v),2));let f=()=>p(S)[0],g=()=>p(S)[1];var m=Z(),k=G(m);rl(k,f,!0,(A,x)=>{Xa(A,()=>({...g()}))}),N(_,m)});var w=I(h);ae(w,t,"default",{}),N(e,d),jt()}function Wl(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];ce(e,le({name:"camera"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);ae(o,t,"default",{}),N(i,a)},$$slots:{default:!0}}))}function jl(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 5H3"}],["path",{d:"M12 19H3"}],["path",{d:"M14 3v4"}],["path",{d:"M16 17v4"}],["path",{d:"M21 12h-9"}],["path",{d:"M21 19h-5"}],["path",{d:"M21 5h-7"}],["path",{d:"M8 10v4"}],["path",{d:"M8 12H3"}]];ce(e,le({name:"sliders-horizontal"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);ae(o,t,"default",{}),N(i,a)},$$slots:{default:!0}}))}function Xl(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"5",r:"1"}],["path",{d:"m9 20 3-6 3 6"}],["path",{d:"m6 8 6 2 6-2"}],["path",{d:"M12 10v4"}]];ce(e,le({name:"person-standing"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);ae(o,t,"default",{}),N(i,a)},$$slots:{default:!0}}))}function Gl(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];ce(e,le({name:"zap"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);ae(o,t,"default",{}),N(i,a)},$$slots:{default:!0}}))}function Yl(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]];ce(e,le({name:"activity"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);ae(o,t,"default",{}),N(i,a)},$$slots:{default:!0}}))}function ql(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];ce(e,le({name:"shield"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);ae(o,t,"default",{}),N(i,a)},$$slots:{default:!0}}))}function Kl(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 19v3"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3"}]];ce(e,le({name:"mic"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);ae(o,t,"default",{}),N(i,a)},$$slots:{default:!0}}))}function Zl(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]];ce(e,le({name:"image"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);ae(o,t,"default",{}),N(i,a)},$$slots:{default:!0}}))}function Ql(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 18v-7"}],["path",{d:"M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"}],["path",{d:"M14 18v-7"}],["path",{d:"M18 18v-7"}],["path",{d:"M3 22h18"}],["path",{d:"M6 18v-7"}]];ce(e,le({name:"landmark"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);ae(o,t,"default",{}),N(i,a)},$$slots:{default:!0}}))}function Jl(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];ce(e,le({name:"user"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);ae(o,t,"default",{}),N(i,a)},$$slots:{default:!0}}))}function ec(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];ce(e,le({name:"globe"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);ae(o,t,"default",{}),N(i,a)},$$slots:{default:!0}}))}function tc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]];ce(e,le({name:"video"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);ae(o,t,"default",{}),N(i,a)},$$slots:{default:!0}}))}function rc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];ce(e,le({name:"sparkles"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);ae(o,t,"default",{}),N(i,a)},$$slots:{default:!0}}))}function nc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 20v-9"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97"}],["path",{d:"M22 13h-4"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97"}],["path",{d:"M6 13H2"}],["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13"}]];ce(e,le({name:"bug"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);ae(o,t,"default",{}),N(i,a)},$$slots:{default:!0}}))}function ic(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]];ce(e,le({name:"monitor"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);ae(o,t,"default",{}),N(i,a)},$$slots:{default:!0}}))}function ac(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"10",r:"8"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 22h10"}],["path",{d:"M12 22v-4"}]];ce(e,le({name:"webcam"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);ae(o,t,"default",{}),N(i,a)},$$slots:{default:!0}}))}function ns(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}]];ce(e,le({name:"circle"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);ae(o,t,"default",{}),N(i,a)},$$slots:{default:!0}}))}function sc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];ce(e,le({name:"square"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);ae(o,t,"default",{}),N(i,a)},$$slots:{default:!0}}))}function oc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]];ce(e,le({name:"eye"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);ae(o,t,"default",{}),N(i,a)},$$slots:{default:!0}}))}function lc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}],["path",{d:"m2 2 20 20"}]];ce(e,le({name:"eye-off"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);ae(o,t,"default",{}),N(i,a)},$$slots:{default:!0}}))}function cc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];ce(e,le({name:"folder-open"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);ae(o,t,"default",{}),N(i,a)},$$slots:{default:!0}}))}function uc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];ce(e,le({name:"info"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);ae(o,t,"default",{}),N(i,a)},$$slots:{default:!0}}))}function fc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ce(e,le({name:"x"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);ae(o,t,"default",{}),N(i,a)},$$slots:{default:!0}}))}function dc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];ce(e,le({name:"settings"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);ae(o,t,"default",{}),N(i,a)},$$slots:{default:!0}}))}function vc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ce(e,le({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(i,s)=>{var a=Z(),o=G(a);ae(o,t,"default",{}),N(i,a)},$$slots:{default:!0}}))}function at(e,t){const r={Camera:Wl,SlidersHorizontal:jl,PersonStanding:Xl,Zap:Gl,Activity:Yl,Shield:ql,Mic:Kl,Image:Zl,Landmark:Ql,User:Jl,Globe:ec,Video:tc,Sparkles:rc,Bug:nc,Monitor:ic,Webcam:ac,Circle:ns,Square:sc,Eye:oc,EyeOff:lc,FolderOpen:cc,Info:uc,X:fc,Settings:dc,RefreshCw:vc};let n=_t(t,"name",3,"Circle"),i=_t(t,"size",3,16),s=_t(t,"strokeWidth",3,2),a=_t(t,"class",3,"");const o=ft(()=>r[n()]??ns);var l=Z(),c=G(l);tl(c,()=>p(o),(d,h)=>{h(d,{get size(){return i()},get"stroke-width"(){return s()},get class(){return a()}})}),N(e,l)}var pc=_e('<div class="xra-sec-body"></div>'),hc=_e('<details class="xra-sec"><summary><span class="xra-sec-title"><!> <span> </span></span> <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></summary> <!></details>');function _c(e,t){Wt(t,!0);const r="ui.sections_open";let n=F(Le(Gt(()=>{var f;return((f=Be(r,{}))==null?void 0:f[t.section.id])??!1}))),i;function s(){$(n,!p(n)),it(`${r}.${t.section.id}`,p(n))}Tr(()=>{Q.focusNonce,!(Q.focusSection!==t.section.id||!Q.panelOpen)&&($(n,!0),it(`${r}.${t.section.id}`,!0),requestAnimationFrame(()=>i==null?void 0:i.scrollIntoView({block:"nearest",behavior:"smooth"})))});var a=hc(),o=D(a),l=D(o),c=D(l);at(c,{get name(){return t.section.icon},size:15,class:"xra-sec-icon"});var d=I(c,2),h=q(d,!0),w=I(l,2);let _;var v=I(o,2);{var S=f=>{var g=pc();Yt(g,21,()=>t.section.controls,m=>m.path,(m,k)=>{var A=Z(),x=G(A);{var E=C=>{Vl(C,{get control(){return p(k)}})},M=ft(()=>!p(k).when||p(k).when(je));ht(x,C=>{p(M)&&C(E)})}N(m,A)}),N(f,g)};ht(v,f=>{p(n)&&f(S)})}qa(a,f=>i=f,()=>i),he(f=>{a.open=p(n),K(h,f),_=We(w,0,"xra-sec-chevron",null,_,{open:p(n)})},[()=>re(t.section.title)]),ee("click",o,f=>{f.preventDefault(),s()}),N(e,a),jt()}lr(["click"]);var on=_e('<option class="svelte-x8svx4"> </option>'),gc=_e('<div class="warn svelte-x8svx4"> </div>'),mc=_e('<div class="xra-startup svelte-x8svx4"><div class="card svelte-x8svx4"><div class="head svelte-x8svx4"><div class="svelte-x8svx4"><h2 class="svelte-x8svx4">XR Animator</h2> <div class="sub svelte-x8svx4"> </div></div></div> <div class="grid svelte-x8svx4"><label class="field svelte-x8svx4"><div class="sub svelte-x8svx4">Language</div> <select class="svelte-x8svx4"></select></label> <label class="field svelte-x8svx4"><div class="sub svelte-x8svx4">Master preset</div> <select class="svelte-x8svx4"></select></label></div> <div class="status svelte-x8svx4"> </div> <section class="camera svelte-x8svx4"><div class="camera-head svelte-x8svx4"><div class="camera-title svelte-x8svx4"> </div> <div> </div></div> <div class="camera-row svelte-x8svx4"><select class="svelte-x8svx4"><!></select> <button type="button" class="action svelte-x8svx4"><!></button></div> <!></section> <div class="sub bg svelte-x8svx4"> </div> <div class="avatar svelte-x8svx4"><div class="sub svelte-x8svx4"> </div> <button type="button" class="action svelte-x8svx4"> </button></div> <div class="foot svelte-x8svx4"><button type="button" class="action primary confirm svelte-x8svx4"> </button></div></div></div>');function yc(e,t){Wt(t,!0);const r=()=>window.XRA,n=y=>re(y),i=["AUTO","ECO","LOW","BALANCED","QUALITY","HIGH","MAX","CUSTOM"];function s(){var y,b,T;try{(T=(b=(y=r())==null?void 0:y.profileService)==null?void 0:b.save)==null||T.call(b,0)}catch{}}const a=(()=>{var b,T;const y=(T=(b=r())==null?void 0:b.i18n)==null?void 0:T.LANGUAGES;return Array.isArray(y)&&y.length?y:[["auto","Auto / System"],["en","English"],["it","Italiano"]]})();let o=F("auto"),l=F("CUSTOM"),c=F(""),d=F("default"),h=F(Le([])),w=F(!1),_=F(""),v=F(!1),S=F(""),f=F(""),g=F("Loading avatar…"),m=F(!0),k=F(!1),A=F(!1),x=F(!1),E=F(!1),M=0,C=[];async function P(y){const b=r();if(y=String(y||"CUSTOM").toUpperCase(),y==="CUSTOM"){b.config.performance.master_preset="CUSTOM",s(),$(c,"CUSTOM · ready");return}if(y==="AUTO"){$(c,"Benchmarking…");const T=await b.performance.benchmarkHardwareOnly();$(c,`AUTO → ${T.preset} (${T.fps.toFixed(1)} fps)`),await b.performance.applyPresetSafe(T.preset),b.config.performance.master_preset="AUTO",b.config.performance.auto_last_result=T,s();return}$(c,`${y}: applying…`),await b.performance.applyPresetSafe(y),$(c,`${y} · applied`)}function J(y=""){var V,W,te;const b=(V=r())==null?void 0:V.nativeBridge,T=((W=b==null?void 0:b.activeCamera)==null?void 0:W.call(b))||{},O=!!((te=b==null?void 0:b.cameraRunning)!=null&&te.call(b));$(v,O),$(S,y||(O?`${n("ON")} · ${T.label||n("Default camera")}`:n("OFF")),!0)}async function ge(y=!1){var T,O,V;const b=(T=r())==null?void 0:T.nativeBridge;if(b!=null&&b.enumerateCameras){$(x,!0);try{const W=await b.enumerateCameras({requestPermission:y}),te=b.activeCamera()||{};$(h,(W||[]).map(Me=>({deviceId:Me.deviceId,label:Me.label})),!0);const pe=te.deviceId||((O=je.devices)==null?void 0:O.camera_device_id)||"";$(_,p(h).some(Me=>Me.deviceId===pe)?pe:((V=p(h)[0])==null?void 0:V.deviceId)||"",!0),$(w,!0),J()}catch{$(w,!0),J(n("Camera unavailable"))}finally{$(x,!1)}}}async function Ve(y){var V,W;const b=(V=r())==null?void 0:V.nativeBridge,T=((W=y==null?void 0:y.currentTarget)==null?void 0:W.value)??p(_),O=p(h).find(te=>te.deviceId===T);if(O){$(x,!0);try{const te={deviceId:O.deviceId,label:O.label};b.cameraRunning()?await b.switchCamera(te):await b.setCameraPreference(te),J()}catch(te){J("Error · "+te.message)}finally{$(x,!1)}}}function Fe(){var T,O,V,W,te,pe,Me,He;const y=(V=(O=(T=r())==null?void 0:T.xraBackend)==null?void 0:O.snapshot)==null?void 0:V.call(O),b=(y==null?void 0:y.capture)||((He=(Me=(pe=(te=(W=window.SA_bridge)==null?void 0:W.backend)==null?void 0:te.status)==null?void 0:pe.call(te))==null?void 0:Me.backend)==null?void 0:He.capture);if(b!=null&&b.camera_busy){const Ot=(b.busy_processes&&b.busy_processes.length?b.busy_processes:b.busy_process?[b.busy_process]:[]).filter(mr=>!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(String(mr).trim()));if(Ot.length)return{busy:!0,proc:Ot.join(", ")}}if(b!=null&&b.last_error&&b.last_error.includes("Webcam occupata")){const we=b.last_error.match(/Webcam occupata da:\s*([^.]+)/i),Ot=we?we[1].trim():"";if(!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(Ot))return{busy:!0,proc:b.last_error}}return{busy:!1,proc:""}}function Ie(){var y,b,T,O,V,W,te,pe,Me;if(typeof((b=(y=r())==null?void 0:y.nativeBridge)==null?void 0:b.isAvatarReady)=="function")return r().nativeBridge.isAvatarReady();if((T=window.MMD_SA)!=null&&T.MMD_started){const He=(W=(V=(O=window.MMD_SA)==null?void 0:O.THREEX)==null?void 0:V.get_model)==null?void 0:W.call(V,0);let we=He;if((He==null?void 0:He.type)==="MMD_dummy")try{we=He.model||null}catch{we=null}const Ot=((te=we==null?void 0:we.model)==null?void 0:te.scene)||(we==null?void 0:we.mesh)||(we==null?void 0:we.scene)||null;if(we&&!(He!=null&&He.loading)&&!we.loading&&!((Me=(pe=window.MMD_SA)==null?void 0:pe.THREEX)!=null&&Me._loading_model)&&Ot)return Ot.visible!==!1}return!1}function yt(){var b,T,O;const y=(b=r())==null?void 0:b.xraBackend;return!y||!y.active?!0:!!((O=(T=y.snapshot)==null?void 0:T.call(y))!=null&&O.ready)}function Ke(){if(p(E)||!Q.startupOpen)return;const y=Fe();$(f,y.busy?`Webcam in use by another application (${y.proc}). Close it to start tracking.`:"",!0),Ie()?yt()?y.busy?($(m,!0),$(g,n("Camera busy…"),!0)):p(k)?$(m,!0):($(m,!1),$(g,"START")):($(m,!0),$(g,n("Connecting to backend…"),!0)):($(m,!0),$(g,n("Loading avatar…"),!0))}async function lt(y){var T,O,V;const b=((T=y==null?void 0:y.currentTarget)==null?void 0:T.value)??p(l);$(l,b,!0),$(A,!0);try{await P(b),r().events.emit("state",{path:"performance.master_preset",value:r().config.performance.master_preset}),kl()}catch(W){console.error("[XRA START]",W),$(c,"Preset error: "+W.message)}finally{$(A,!1),(V=(O=r().ui)==null?void 0:O.refresh)==null||V.call(O)}}function wt(y){var b,T,O,V;$(o,((b=y==null?void 0:y.currentTarget)==null?void 0:b.value)??p(o),!0),(V=(O=(T=r())==null?void 0:T.i18n)==null?void 0:O.setLanguage)==null||V.call(O,p(o))}async function ke(){var y,b;try{await((b=(y=r().nativeBridge)==null?void 0:y.openVrmPicker)==null?void 0:b.call(y))}catch(T){r().toast("VRM loader: "+T.message,"error",4500)}}async function Nt(y=!1){var T,O,V,W,te,pe;if(p(E)||p(m))return;$(E,!0),M&&(clearInterval(M),M=0),$(k,!0),$(g,"Starting…");const b=r();if(s(),Q.startupOpen=!1,(O=(T=b.ui)==null?void 0:T.refresh)==null||O.call(T),y)try{typeof b.whenNativeReady=="function"&&await b.whenNativeReady(15e3),(V=b.xraBackend)!=null&&V.waitUntilReady&&await b.xraBackend.waitUntilReady(6e3).catch(()=>{}),await Qa()}catch(Me){(te=(W=globalThis.XRA_CAMERA_OWNERSHIP)==null?void 0:W.isOwnershipError)!=null&&te.call(W,Me)||(console.warn("[XRA START]","Auto-starting camera on START failed",Me),(pe=b.toast)==null||pe.call(b,"Starting camera: "+Me.message,"warn",5e3))}}Si(()=>{var b,T,O,V,W,te,pe,Me,He,we,Ot,mr,ms,ys,ws,bs,xs,Bn,Ss,ks,$s,Es;const y=r();$(c,n("Ready."),!0),$(o,((T=(b=y==null?void 0:y.config)==null?void 0:b.ui)==null?void 0:T.language)||"auto",!0),$(l,((V=(O=y==null?void 0:y.config)==null?void 0:O.performance)==null?void 0:V.master_preset)==="MINIMAL"?"ECO":((te=(W=y==null?void 0:y.config)==null?void 0:W.performance)==null?void 0:te.master_preset)||"CUSTOM",!0),$(d,((Me=(pe=y==null?void 0:y.config)==null?void 0:pe.background)==null?void 0:Me.path)||((we=(He=y==null?void 0:y.config)==null?void 0:He.background)==null?void 0:we.color)||"default",!0);try{const Rt=(ms=(mr=(Ot=window.SA_bridge)==null?void 0:Ot.backend)==null?void 0:mr.status)==null?void 0:ms.call(mr),Vn=(ws=(ys=window.System)==null?void 0:ys._browser)==null?void 0:ws.camera;(xs=(bs=Rt==null?void 0:Rt.backend)==null?void 0:bs.capture)!=null&&xs.running&&!(Vn!=null&&Vn.running)&&((Ss=(Bn=window.SA_bridge.backend)==null?void 0:Bn.stop)==null||Ss.call(Bn).catch(()=>{}))}catch{}J(),setTimeout(()=>ge(!1),100),M=setInterval(Ke,300),window.addEventListener("MMDStarted",Ke),(ks=y.xraBackend)!=null&&ks.onStatus&&y.xraBackend.onStatus(Ke),Ke(),(Es=($s=y.whenNativeReady)==null?void 0:$s.call(y))==null||Es.then(()=>{Q.startupOpen&&ge(!1)});for(const Rt of["camera-started","camera-stopped","camera-switched"])C.push(y.events.on(Rt,()=>{Q.startupOpen&&ge(!1)}));for(const Rt of["avatar-loading","avatar-changed","avatar-ready"])C.push(y.events.on(Rt,()=>Ke()));return()=>{M&&clearInterval(M),window.removeEventListener("MMDStarted",Ke);for(const Rt of C)try{Rt()}catch{}C=[]}});var hr=mc(),Br=D(hr),_r=D(Br),R=D(_r),X=I(D(R),2),oe=q(X,!0),de=I(_r,2),Ne=D(de),Se=I(D(Ne),2);Yt(Se,21,()=>a,([y,b])=>y,(y,b)=>{var T=ft(()=>Bi(p(b),2));let O=()=>p(T)[0],V=()=>p(T)[1];var W=on(),te=q(W,!0),pe={};he(()=>{K(te,V()),pe!==(pe=O())&&(W.value=(W.__value=pe)??"")}),N(y,W)});var Ze;cr(Se);var gr=I(Ne,2),Vt=I(D(gr),2);Yt(Vt,20,()=>i,y=>y,(y,b)=>{var T=on(),O=q(T,!0),V={};he(()=>{K(O,b),V!==(V=b)&&(T.value=(T.__value=V)??"")}),N(y,T)});var zn;cr(Vt);var ls=I(de,2),Nc=q(ls,!0),cs=I(ls,2),us=D(cs),fs=D(us),Oc=q(fs,!0),ds=I(fs,2);let vs;var Rc=q(ds,!0),ps=I(us,2),Qt=D(ps),Cc=D(Qt);{var Pc=y=>{var b=on(),T=q(b,!0);b.value=b.__value="",he(O=>K(T,O),[()=>n("Loading cameras…")]),N(y,b)},Ic=y=>{var b=on(),T=q(b,!0);b.value=b.__value="",he(O=>K(T,O),[()=>n("No cameras found")]),N(y,b)},Lc=y=>{var b=Z(),T=G(b);Yt(T,17,()=>p(h),O=>O.deviceId,(O,V)=>{var W=on(),te=q(W,!0),pe={};he(()=>{K(te,p(V).label),pe!==(pe=p(V).deviceId)&&(W.value=(W.__value=pe)??"")}),N(O,W)}),N(y,b)};ht(Cc,y=>{p(w)?p(h).length?y(Lc,-1):y(Ic,1):y(Pc)})}var Dn;cr(Qt);var vn=I(Qt,2),zc=D(vn);at(zc,{name:"RefreshCw",size:14});var Dc=I(ps,2);{var Bc=y=>{var b=gc(),T=q(b,!0);he(()=>K(T,p(f))),N(y,b)};ht(Dc,y=>{p(f)&&y(Bc)})}var hs=I(cs,2),Vc=q(hs),_s=I(hs,2),gs=D(_s),Fc=q(gs,!0),$i=I(gs,2),Hc=q($i,!0),Uc=I(_s,2),Ei=D(Uc),Wc=q(Ei,!0);he((y,b,T,O,V,W)=>{K(oe,y),Se.disabled=p(E),Ze!==(Ze=p(o))&&(Se.value=(Se.__value=Ze)??"",Lt(Se,Ze)),Vt.disabled=p(A)||p(E),zn!==(zn=p(l))&&(Vt.value=(Vt.__value=zn)??"",Lt(Vt,zn)),K(Nc,p(c)),K(Oc,b),vs=We(ds,1,"camera-state svelte-x8svx4",null,vs,{on:p(v)}),K(Rc,p(S)),Qt.disabled=p(x),Dn!==(Dn=p(_))&&(Qt.value=(Qt.__value=Dn)??"",Lt(Qt,Dn)),Ae(vn,"title",T),Ae(vn,"aria-label",O),vn.disabled=p(x),K(Vc,`Background: ${p(d)??""}`),K(Fc,V),$i.disabled=p(E),K(Hc,W),Ei.disabled=p(m)||p(k),K(Wc,p(g))},[()=>n("Quick setup · changes apply immediately."),()=>n("Webcam"),()=>n("Refresh cameras"),()=>n("Refresh cameras"),()=>n("Avatar: the last VRM you chose is copied into avatars/ and restored at startup."),()=>n("Load / change VRM…")]),ee("change",Se,wt),ee("change",Vt,lt),ee("change",Qt,Ve),ee("click",vn,()=>ge(!0)),ee("click",$i,ke),ee("click",Ei,()=>Nt(!0)),N(e,hr),jt()}lr(["change","click"]);var wc=_e('<button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button>'),bc=_e('<nav class="xra-dock group fixed left-2 top-1/2 z-[99990] flex w-[46px] max-h-[92vh] -translate-y-1/2 flex-col gap-0.5 overflow-hidden rounded-xl border border-white/10 bg-[var(--xra-ui-bg)] p-1.5 font-sans text-[12.5px] leading-snug text-[var(--xra-ui-fg)] shadow-[0_12px_40px_rgba(0,0,0,.55)] transition-[width] duration-200 hover:w-[232px]"><!> <div class="my-1 h-px bg-white/10"></div> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button></nav>');function xc(e,t){Wt(t,!0);const r=()=>window.XRA;let n=F(!1),i=F(!1),s=0;function a(){var X,oe,de,Ne,Se;const R=r();if(R){try{$(n,!!((oe=(X=R.nativeBridge)==null?void 0:X.cameraRunning)!=null&&oe.call(X)))}catch{}try{$(i,!!((Se=(Ne=(de=R.recorder)==null?void 0:de.status)==null?void 0:Ne.call(de))!=null&&Se.active))}catch{}}}let o=F(!1),l=F("");async function c(){var X,oe,de,Ne;if(p(o))return;$(o,!0);const R=!p(n);$(l,R?"Starting…":"Stopping…",!0);try{R?(await Qa(),$(n,!0)):(await bl(),$(n,!1))}catch(Se){try{await((oe=(X=r().nativeBridge)==null?void 0:X.forceStopCamera)==null?void 0:oe.call(X))}catch{}$(n,!1),(Ne=(de=r()).toast)==null||Ne.call(de,"Tracking: "+Se.message,"warn",4500)}finally{$(o,!1),$(l,""),setTimeout(a,250)}}let d=F(!1),h=F("");async function w(){var X,oe;if(p(d))return;$(d,!0);const R=!p(i);$(h,R?"Starting…":"Stopping…",!0);try{R?(await xl(),$(i,!0)):(await Sl(),$(i,!1))}catch(de){$(i,!1),(oe=(X=r()).toast)==null||oe.call(X,"Recording: "+de.message,"warn",4500)}finally{$(d,!1),$(h,""),setTimeout(a,250)}}async function _(){var R,X,oe,de;try{await((X=(R=r().nativeBridge)==null?void 0:R.openVrmPicker)==null?void 0:X.call(R))}catch(Ne){(de=(oe=r()).toast)==null||de.call(oe,"VRM loader: "+Ne.message,"error",4500)}}function v(){var R,X;try{(X=(R=r().nativeBridge)==null?void 0:R.showAbout)==null||X.call(R)}catch{}}const S=[{id:"ui",icon:"Monitor",label:"UI Settings"},{id:"camera",icon:"Camera",label:"Webcam settings"},{id:"avatar",icon:"User",label:"Model settings"},{id:"second_avatar",icon:"Globe",label:"Studio link"},{id:"stage",icon:"Landmark",label:"Environment + Camera"},{id:"background",icon:"Image",label:"Background"},{id:"lip",icon:"Mic",label:"Audio"}],f="hover:bg-white/10",g="flex-1 overflow-hidden opacity-0 transition-opacity duration-150 group-hover:opacity-100";Si(()=>(a(),s=setInterval(a,1e3),()=>clearInterval(s)));var m=bc(),k=D(m);Yt(k,17,()=>S,R=>R.id,(R,X)=>{var oe=wc();We(oe,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var de=D(oe),Ne=D(de);at(Ne,{get name(){return p(X).icon},size:16});var Se=I(de,2);We(Se,1,Or(g));var Ze=q(Se,!0);he((gr,Vt)=>{Ae(oe,"title",gr),K(Ze,Vt)},[()=>re(p(X).label),()=>re(p(X).label)]),ee("click",oe,()=>yl(p(X).id)),N(R,oe)});var A=I(k,4),x=D(A),E=D(x);{let R=ft(()=>p(n)?"text-emerald-400":"");at(E,{name:"Webcam",size:16,get class(){return p(R)}})}var M=I(x,2);We(M,1,Or(g));var C=q(M,!0),P=I(A,2),J=D(P),ge=D(J);{let R=ft(()=>p(d)?"Circle":p(i)?"Square":"Circle"),X=ft(()=>p(i)?"text-red-400":"");at(ge,{get name(){return p(R)},size:16,get class(){return p(X)}})}var Ve=I(J,2);We(Ve,1,Or(g));var Fe=q(Ve,!0),Ie=I(P,2);We(Ie,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var yt=D(Ie),Ke=D(yt);at(Ke,{name:"FolderOpen",size:16});var lt=I(yt,2);We(lt,1,Or(g));var wt=q(lt,!0),ke=I(Ie,2);We(ke,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var Nt=D(ke),hr=D(Nt);at(hr,{name:"Info",size:16});var Br=I(Nt,2);We(Br,1,Or(g));var _r=q(Br,!0);he((R,X,oe,de,Ne,Se,Ze,gr)=>{We(A,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${p(n)?"bg-emerald-500/20 hover:bg-emerald-500/30":f} ${p(o)?"opacity-60":""}`),Ae(A,"title",R),A.disabled=p(o),K(C,X),We(P,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${p(i)?"bg-red-500/30 hover:bg-red-500/40 text-red-200":f} ${p(d)?"opacity-60":""}`),Ae(P,"title",oe),P.disabled=p(d),K(Fe,de),Ae(Ie,"title",Ne),K(wt,Se),Ae(ke,"title",Ze),K(_r,gr)},[()=>re("Tracking"),()=>p(o)?re(p(l)):p(n)?re("Tracking on"):re("Tracking off"),()=>re("Record"),()=>p(d)?re(p(h)):p(i)?re("Stop recording"):re("Record"),()=>re("Load / change VRM…"),()=>re("Load / change VRM…"),()=>re("About"),()=>re("About")]),ee("click",A,c),ee("click",P,w),ee("click",Ie,_),ee("click",ke,v),N(e,m),jt()}lr(["click"]);var Sc=_e('<div class="absolute inset-0 z-30 grid place-items-center bg-black text-[12px] text-[var(--xra-ui-fg)]"> </div>'),kc=_e('<div class="xra-mocap-window fixed z-[99991] flex flex-col overflow-hidden rounded-xl border border-white/15 bg-[var(--xra-ui-bg)] text-[var(--xra-ui-fg)] shadow-[0_16px_48px_rgba(0,0,0,.6)] font-sans"><header class="flex shrink-0 cursor-move touch-none select-none items-center gap-2 px-2 py-1.5"><!> <span class="flex-1 text-[12px] font-semibold"> </span> <select class="rounded-md border border-white/15 bg-[#101214] px-1.5 py-0.5 text-[11px] text-[var(--xra-ui-fg)]"><option> </option><option> </option><option> </option><option> </option></select> <button type="button" class="rounded-md border border-white/15 bg-white/5 px-1.5 py-0.5 cursor-pointer text-[var(--xra-ui-fg)]"><!></button></header> <div class="relative min-h-0 flex-1 overflow-hidden bg-black"><!> <div class="absolute bottom-0 right-0 z-20 h-5 w-5 cursor-nwse-resize touch-none"></div></div></div>');function $c(e,t){Wt(t,!0);const r=()=>window.XRA,n=Be("ui.mocap_window",{})||{};let i=F(Le(Number.isFinite(n.x)?n.x:48)),s=F(Le(Number.isFinite(n.y)?n.y:96)),a=F(Le(Number.isFinite(n.w)?n.w:360)),o=F(Le(Number.isFinite(n.h)?n.h:270)),l=F(void 0),c=F(!1),d=0;const h=ft(()=>Be("ui.mocap_visibility","always")!=="auto"||p(c));function w(){it("ui.mocap_window",{x:Math.round(p(i)),y:Math.round(p(s)),w:Math.round(p(a)),h:Math.round(p(o))})}function _(){var m,k,A;try{(A=(k=(m=r())==null?void 0:m.nativeBridge)==null?void 0:k.updateMocapWindow)==null||A.call(k)}catch{}}function v(m,k){m.preventDefault();const A=m.clientX,x=m.clientY,E=p(i),M=p(s),C=p(a),P=p(o),J=Ve=>{const Fe=Ve.clientX-A,Ie=Ve.clientY-x;k==="move"?($(i,Math.max(0,Math.min(window.innerWidth-80,E+Fe)),!0),$(s,Math.max(0,Math.min(window.innerHeight-30,M+Ie)),!0)):($(a,Math.max(200,Math.min(window.innerWidth-p(i),C+Fe)),!0),$(o,Math.max(130,Math.min(window.innerHeight-p(s),P+Ie)),!0))},ge=()=>{window.removeEventListener("pointermove",J),window.removeEventListener("pointerup",ge),w()};window.addEventListener("pointermove",J),window.addEventListener("pointerup",ge)}Tr(()=>{var k,A,x;const m=p(l);if(m){try{(x=(A=(k=r())==null?void 0:k.nativeBridge)==null?void 0:A.attachMocapWindow)==null||x.call(A,m)}catch{}return()=>{var E,M,C;try{(C=(M=(E=r())==null?void 0:E.nativeBridge)==null?void 0:M.detachMocapWindow)==null||C.call(M)}catch{}}}}),Tr(()=>{p(i),p(s),p(a),p(o),p(c),_()}),Si(()=>{const m=()=>{var k,A,x;$(c,!!((x=(A=(k=r())==null?void 0:k.nativeBridge)==null?void 0:A.cameraRunning)!=null&&x.call(A)))};return m(),d=setInterval(m,500),window.addEventListener("resize",_),()=>{clearInterval(d),window.removeEventListener("resize",_)}});var S=Z(),f=G(S);{var g=m=>{var k=kc(),A=D(k),x=D(A);at(x,{name:"Activity",size:14});var E=I(x,2),M=q(E,!0),C=I(E,2),P=D(C),J=q(P,!0);P.value=P.__value="both";var ge=I(P),Ve=q(ge,!0);ge.value=ge.__value="wireframe";var Fe=I(ge),Ie=q(Fe,!0);Fe.value=Fe.__value="video";var yt=I(Fe),Ke=q(yt,!0);yt.value=yt.__value="off";var lt;cr(C);var wt=I(C,2),ke=D(wt);at(ke,{name:"X",size:13});var Nt=I(A,2),hr=D(Nt);{var Br=R=>{var X=Sc(),oe=q(X,!0);he(de=>K(oe,de),[()=>re("Tracking is off")]),N(R,X)};ht(hr,R=>{p(c)||R(Br)})}var _r=I(hr,2);qa(Nt,R=>$(l,R),()=>p(l)),he((R,X,oe,de,Ne,Se,Ze,gr)=>{Ba(k,`left:${p(i)??""}px; top:${p(s)??""}px; width:${p(a)??""}px; height:${p(o)??""}px;`),K(M,R),K(J,X),K(Ve,oe),K(Ie,de),K(Ke,Ne),lt!==(lt=Se)&&(C.value=(C.__value=lt)??"",Lt(C,lt)),Ae(wt,"title",Ze),Ae(_r,"title",gr)},[()=>re("Mocap"),()=>re("Webcam + skeleton"),()=>re("Skeleton only"),()=>re("Webcam only"),()=>re("Off"),()=>Be("ui.mocap_view","off"),()=>re("Close"),()=>re("Resize")]),ee("pointerdown",A,R=>v(R,"move")),ee("change",C,R=>it("ui.mocap_view",R.currentTarget.value)),ee("pointerdown",C,R=>R.stopPropagation()),ee("click",wt,()=>it("ui.mocap_view","off")),ee("pointerdown",wt,R=>R.stopPropagation()),ee("pointerdown",_r,R=>{R.stopPropagation(),v(R,"resize")}),N(m,k)};ht(f,m=>{p(h)&&m(g)})}N(e,S),jt()}lr(["pointerdown","change","click"]);var Ec=_e('<aside class="xra-panel"><header class="xra-panel-head"><strong>XR Animator</strong> <span class="xra-spacer"></span> <button><!></button> <button title="Close panel"><!></button></header> <div class="xra-panel-body"></div></aside>'),Ac=_e('<button class="xra-panel-launcher"><!></button>'),Mc=_e("<!> <!> <!> <!>",1);function Tc(e,t){Wt(t,!0),$l();const r=ft(()=>Nl(je));var n=Mc(),i=G(n);{var s=v=>{yc(v,{})};ht(i,v=>{Q.ready&&Q.startupOpen&&v(s)})}var a=I(i,2);{var o=v=>{xc(v,{})};ht(a,v=>{Q.ready&&!Q.startupOpen&&v(o)})}var l=I(a,2);{var c=v=>{$c(v,{})},d=ft(()=>Q.ready&&!Q.startupOpen&&Be("ui.mocap_view","off")!=="off");ht(l,v=>{p(d)&&v(c)})}var h=I(l,2);{var w=v=>{var E,M,C;var S=Ec(),f=D(S),g=I(D(f),4);Ae(g,"title",((C=(M=(E=window.XRA)==null?void 0:E.i18n)==null?void 0:M.t)==null?void 0:C.call(M,"Clean screen mode (Press Esc to restore)"))||"Clean screen (Esc)");var m=D(g);at(m,{name:"EyeOff",size:15});var k=I(g,2),A=D(k);at(A,{name:"X",size:15});var x=I(f,2);Yt(x,21,()=>p(r),P=>P.id,(P,J)=>{_c(P,{get section(){return p(J)}})}),ee("click",g,function(...P){Cn==null||Cn.apply(this,P)}),ee("click",k,()=>Q.panelOpen=!1),N(v,S)},_=v=>{var S=Ac(),f=D(S);at(f,{name:"Settings",size:16}),ee("click",S,()=>{Q.panelOpen=!0,Ja()}),N(v,S)};ht(h,v=>{Q.ready&&!Q.startupOpen&&Q.panelOpen?v(w):Q.ready&&!Q.startupOpen&&v(_,1)})}N(e,n),jt()}lr(["click"]),window.XRA_SVELTE_UI=!0;function is(){let e=document.getElementById("XRA_SVELTE");e||(e=document.createElement("div"),e.id="XRA_SVELTE",document.body.appendChild(e)),qo(Tc,{target:e})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",is):is()})();

})();
