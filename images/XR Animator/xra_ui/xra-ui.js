(function(){
var Uc=Object.defineProperty;var Ms=de=>{throw TypeError(de)};var Wc=(de,ne,xe)=>ne in de?Uc(de,ne,{enumerable:!0,configurable:!0,writable:!0,value:xe}):de[ne]=xe;var Qe=(de,ne,xe)=>Wc(de,typeof ne!="symbol"?ne+"":ne,xe),Oi=(de,ne,xe)=>ne.has(de)||Ms("Cannot "+xe);var u=(de,ne,xe)=>(Oi(de,ne,"read from private field"),xe?xe.call(de):ne.get(de)),B=(de,ne,xe)=>ne.has(de)?Ms("Cannot add the same private member more than once"):ne instanceof WeakSet?ne.add(de):ne.set(de,xe),z=(de,ne,xe,nr)=>(Oi(de,ne,"write to private field"),nr?nr.call(de,xe):ne.set(de,xe),xe),j=(de,ne,xe)=>(Oi(de,ne,"access private method"),xe);(function(){"use strict";var us,Lr,er,hr,zr,Dr,Br,Dt,Vr,Xe,vn,Bt,gt,Mt,Fr,_r,K,Pi,Ci,yn,Ri,Ts,Ns,jr,jc,wn,fs,st,Mi,ot,gr,Re,Ye,Ie,qe,Tt,mr,tr,Hr,pn,hn,Vt,Bn,le,Gc,Xc,Ii,Yc,Li,bn,jn,zi,Di,mt,Nt,Ke,yr,_n,gn,Vn,ds;var ne=Array.isArray,xe=Array.prototype.indexOf,nr=Array.prototype.includes,xn=Array.from,Bi=Object.defineProperty,jt=Object.getOwnPropertyDescriptor,Vi=Object.getOwnPropertyDescriptors,Os=Object.prototype,Ps=Array.prototype,Gn=Object.getPrototypeOf,Fi=Object.isExtensible;function Gr(e){return typeof e=="function"}const Cs=()=>{};function Rs(e){return e()}function Xn(e){for(var t=0;t<e.length;t++)e[t]()}function Hi(){var e,t,r=new Promise((n,i)=>{e=n,t=i});return{promise:r,resolve:e,reject:t}}function Ui(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const Ne=2,kr=4,Xr=8,Yn=1<<24,ut=16,Je=32,Rt=64,qn=128,Kn=256,ft=512,Se=1024,ye=2048,et=4096,Oe=8192,Pe=16384,$r=32768,Sn=1<<25,Gt=65536,kn=1<<17,Is=1<<18,Er=1<<19,Wi=1<<20,xt=1<<25,$n=1<<21,Ar=1<<22,Xt=1<<23,St=Symbol("$state"),ji=Symbol("component"),Gi=Symbol("legacy props"),Ls=Symbol(""),En=Symbol("attributes"),Zn=Symbol("class"),Qn=Symbol("style"),Yr=Symbol("text"),qr=new class extends Error{constructor(){super(...arguments);Qe(this,"name","StaleReactionError");Qe(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},An=!!((us=globalThis.document)!=null&&us.contentType)&&globalThis.document.contentType.includes("xml"),zs=1,Ds=2,Xi=4,Bs=8,Vs=16,Fs=1,Hs=2,Yi=4,Us=8,Ws=16,js=1,Gs=2,we=Symbol("uninitialized"),qi="http://www.w3.org/1999/xhtml",Xs="http://www.w3.org/2000/svg",Ys="@attach";function qs(){console.warn("https://svelte.dev/e/derived_inert")}function Ks(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Zs(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Ki(e){return e===this.v}function Qs(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Zi(e){return!Qs(e,this.v)}function Js(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function eo(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function to(e,t,r){throw new Error("https://svelte.dev/e/each_key_duplicate")}function ro(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function no(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function io(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ao(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function so(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function oo(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function lo(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function co(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function uo(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Mr=!1,qc=!1;function fo(){Mr=!0}let ve=null;function Tr(e){ve=e}function Yt(e,t=!1,r){ve={p:ve,i:!1,c:null,e:null,s:e,x:null,r:U,l:Mr&&!t?{s:null,u:null,$:[]}:null}}function qt(e){var t=ve,r=t.e;if(r!==null){t.e=null;for(var n of r)ya(n)}return t.i=!0,ve=t.p,Jn(e)}function Jn(e={}){return Bi(e,ji,{value:!0}),e}function Kr(){return!Mr||ve!==null&&ve.l===null}let Nr=[];function vo(){var e=Nr;Nr=[],Xn(e)}function kt(e){if(Nr.length===0){var t=Nr;queueMicrotask(()=>{t===Nr&&vo()})}Nr.push(e)}const po=-7169;function pe(e,t){e.f=e.f&po|t}function ei(e){(e.f&ft)!==0||e.deps===null?pe(e,Se):pe(e,et)}function Qi(e,t,r){(e.f&ye)!==0?t.add(e):(e.f&et)!==0&&r.add(e),pe(e,Se)}function ho(e,t){if(t){const r=document.body;e.autofocus=!0,kt(()=>{document.activeElement===r&&e.focus()})}}function Zr(e){var t=H,r=U;rt(null),nt(null);try{return e()}finally{rt(t),nt(r)}}function Ji(e,t,r,n){const i=Kr()?Or:ti;var a=e.filter(_=>!_.settled),s=t.map(i);if(r.length===0&&a.length===0){n(s);return}var o=U,l=_o(),c=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(_=>_.promise)):null;function d(_){if((o.f&Pe)===0){l();try{n([...s,..._])}catch(v){Et(v,o)}Mn()}}var h=ea();if(r.length===0){c.then(()=>d([])).finally(h);return}function w(){Promise.all(r.map(_=>go(_))).then(d).catch(_=>Et(_,o)).finally(h)}c?c.then(()=>{l(),w(),Mn()}):w()}function _o(){var e=U,t=H,r=ve,n=L;return function(a=!0){nt(e),rt(t),Tr(r),a&&(e.f&Pe)===0&&(n==null||n.activate(),n==null||n.apply())}}function Mn(e=!0){nt(null),rt(null),Tr(null),e&&(L==null||L.deactivate())}function ea(){var e=U,t=e.b,r=L,n=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,r),r.increment(n,e),()=>{t==null||t.update_pending_count(-1,r),r.decrement(n,e)}}function Or(e){var t=Ne|ye;return U!==null&&(U.f|=Er),{ctx:ve,deps:null,effects:null,equals:Ki,f:t,fn:e,reactions:null,rv:0,v:we,wv:0,parent:U,ac:null}}const Qr=Symbol("obsolete");function go(e,t,r){let n=U;n===null&&eo();var i=void 0,a=Kt(we),s=!H,o=new Set;return No(()=>{var _,v;var l=U,c=Hi();i=c.promise;try{Promise.resolve(e()).then(c.resolve,S=>{S!==qr&&c.reject(S)}).finally(Mn)}catch(S){c.reject(S),Mn()}var d=L;if(s){if((l.f&$r)!==0)var h=ea();if((_=n.b)!=null&&_.is_rendered())(v=d.async_deriveds.get(l))==null||v.reject(Qr);else for(const S of o.values())S.reject(Qr);o.add(c),d.async_deriveds.set(l,c)}const w=(S,f=void 0)=>{h==null||h(),o.delete(c),f!==Qr&&(d.activate(),f?(a.f|=Xt,Cr(a,f)):((a.f&Xt)!==0&&(a.f^=Xt),Cr(a,S)),d.deactivate())};c.promise.then(w,S=>w(null,S||"unknown"))}),fi(()=>{for(const l of o)l.reject(Qr)}),new Promise(l=>{function c(d){function h(){d===i?l(a):c(i)}d.then(h,h)}c(i)})}function tt(e){const t=Or(e);return Aa(t),t}function ti(e){const t=Or(e);return t.equals=Zi,t}function mo(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)Me(t[r])}}function ri(e){var t,r=U,n=e.parent;if(!Lt&&n!==null&&e.v!==we&&(n.f&(Pe|Oe))!==0)return qs(),e.v;nt(n);try{mo(e),t=Pa(e)}finally{nt(r)}return t}function ta(e){var t=ri(e);if(!e.equals(t)&&(e.wv=Na(),(!(L!=null&&L.is_fork)||e.deps===null)&&(L!==null?(L.capture(e,t,!0),Jr==null||Jr.capture(e,t,!0)):e.v=t,e.deps===null))){pe(e,Se);return}Lt||(Ae!==null?(ui()||L!=null&&L.is_fork)&&Ae.set(e,t):ei(e))}function yo(e){var t;if(e.effects!==null)for(const r of e.effects)(r.teardown||r.ac)&&((t=r.teardown)==null||t.call(r),r.ac!==null&&Zr(()=>{r.ac.abort(qr),r.ac=null}),r.fn!==null&&(r.teardown=Cs),sn(r,0),vi(r))}function ra(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&Ir(t)}let ni=null,Pr=null,L=null,Jr=null,Ae=null,ii=null,ai=!1,en=null,Tn=null;var na=0,Kc=new Set;let wo=1;const Dn=class Dn{constructor(){B(this,K);Qe(this,"id",wo++);B(this,Lr,!1);Qe(this,"linked",!0);B(this,er,null);B(this,hr,null);Qe(this,"async_deriveds",new Map);Qe(this,"current",new Map);Qe(this,"previous",new Map);B(this,zr,new Set);B(this,Dr,new Set);B(this,Br,0);B(this,Dt,new Map);B(this,Vr,null);B(this,Xe,[]);B(this,vn,[]);B(this,Bt,new Set);B(this,gt,new Set);B(this,Mt,new Map);B(this,Fr,new Set);Qe(this,"is_fork",!1);B(this,_r,!1);Pr===null?ni=Pr=this:(z(Pr,hr,this),z(this,er,Pr)),Pr=this}skip_effect(t){u(this,Mt).has(t)||u(this,Mt).set(t,{d:[],m:[]}),u(this,Fr).delete(t)}unskip_effect(t,r=n=>this.schedule(n)){var n=u(this,Mt).get(t);if(n){u(this,Mt).delete(t);for(var i of n.d)pe(i,ye),r(i);for(i of n.m)pe(i,et),r(i)}u(this,Fr).add(t)}capture(t,r,n=!1){t.v!==we&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&Xt)===0&&(this.current.set(t,[r,n]),Ae==null||Ae.set(t,r)),this.is_fork||(t.v=r)}activate(){L=this}deactivate(){L=null,Ae=null}flush(){try{ai=!0,L=this,j(this,K,yn).call(this)}finally{na=0,ii=null,en=null,Tn=null,ai=!1,L=null,Ae=null,$t.clear()}}discard(){var t;for(const r of u(this,Dr))r(this);u(this,Dr).clear();for(const r of this.async_deriveds.values())r.reject(Qr);j(this,K,wn).call(this),(t=u(this,Vr))==null||t.resolve()}register_created_effect(t){u(this,vn).push(t)}increment(t,r){if(z(this,Br,u(this,Br)+1),t){let n=u(this,Dt).get(r)??0;u(this,Dt).set(r,n+1)}}decrement(t,r){if(z(this,Br,u(this,Br)-1),t){let n=u(this,Dt).get(r)??0;n===1?u(this,Dt).delete(r):u(this,Dt).set(r,n-1)}u(this,_r)||(z(this,_r,!0),kt(()=>{z(this,_r,!1),this.linked&&this.flush()}))}transfer_effects(t,r){for(const n of t)u(this,Bt).add(n);for(const n of r)u(this,gt).add(n);t.clear(),r.clear()}oncommit(t){u(this,zr).add(t)}ondiscard(t){u(this,Dr).add(t)}settled(){return(u(this,Vr)??z(this,Vr,Hi())).promise}static ensure(){if(L===null){const t=L=new Dn;ai||kt(()=>{u(t,Lr)||t.flush()})}return L}apply(){{Ae=null;return}}schedule(t){var r;if(ii=t,(r=t.b)!=null&&r.is_pending&&(t.f&(kr|Xr|Yn))!==0&&(t.f&$r)===0){t.b.defer_effect(t);return}u(this,Xe).push(t)}};Lr=new WeakMap,er=new WeakMap,hr=new WeakMap,zr=new WeakMap,Dr=new WeakMap,Br=new WeakMap,Dt=new WeakMap,Vr=new WeakMap,Xe=new WeakMap,vn=new WeakMap,Bt=new WeakMap,gt=new WeakMap,Mt=new WeakMap,Fr=new WeakMap,_r=new WeakMap,K=new WeakSet,Pi=function(){if(this.is_fork)return!0;for(const n of u(this,Dt).keys()){for(var t=n,r=!1;t.parent!==null;){if(u(this,Mt).has(t)){r=!0;break}t=t.parent}if(!r)return!0}return!1},Ci=function(){var t=[];for(const a of u(this,Xe))if(!((a.f&Pe)!==0||(a.f&(ye|et))===0)){for(var r=a,n=!1;r.parent!==null;){r=r.parent;var i=r.f;if((i&(Rt|Je))!==0){if((i&Se)===0){n=!0;break}r.f^=Se}}n||t.push(r)}return z(this,Xe,[]),t},yn=function(){var o,l,c,d;z(this,Lr,!0);for(const h of u(this,Bt))u(this,gt).delete(h),pe(h,ye),this.schedule(h);for(const h of u(this,gt))pe(h,et),this.schedule(h);this.apply();for(var t=en=[],r=[],n=Tn=[];u(this,Xe).length>0;){na++>1e3&&(j(this,K,wn).call(this),bo());for(const h of j(this,K,Ci).call(this))try{j(this,K,Ri).call(this,h,t,r)}catch(w){throw oa(h),j(this,K,Pi).call(this)||this.discard(),w}}if(L=null,n.length>0){var i=Dn.ensure();for(const h of n)i.schedule(h)}if(en=null,Tn=null,j(this,K,Pi).call(this)){j(this,K,jr).call(this,r),j(this,K,jr).call(this,t);for(const[h,w]of u(this,Mt))sa(h,w);n.length>0&&j(o=L,K,yn).call(o);return}const a=j(this,K,Ts).call(this);if(a){j(this,K,jr).call(this,r),j(this,K,jr).call(this,t),j(l=a,K,Ns).call(l,this);return}u(this,Bt).clear(),u(this,gt).clear();for(const h of u(this,zr))h(this);u(this,zr).clear(),Jr=this,ia(r),ia(t),Jr=null,(c=u(this,Vr))==null||c.resolve();var s=L;if(u(this,Br)===0&&(u(this,Xe).length===0||s!==null)&&j(this,K,wn).call(this),u(this,Xe).length>0)if(s!==null){for(const h of u(this,Xe))u(s,Xe).push(h);z(this,Xe,[])}else s=this;s!==null&&($t.clear(),j(d=s,K,yn).call(d))},Ri=function(t,r,n){t.f^=Se;for(var i=t.first;i!==null;){var a=i.f,s=(a&(Je|Rt))!==0,o=s&&(a&Se)!==0,l=o||(a&Oe)!==0||u(this,Mt).has(i);if(!l&&i.fn!==null){s?i.f^=Se:(a&kr)!==0?r.push(i):an(i)&&((a&ut)!==0&&u(this,gt).add(i),Ir(i));var c=i.first;if(c!==null){i=c;continue}}for(;i!==null;){var d=i.next;if(d!==null){i=d;break}i=i.parent}}},Ts=function(){for(var t=u(this,er);t!==null;){if(!t.is_fork){for(const[r,[,n]]of this.current)if(t.current.has(r)&&!n)return t}t=u(t,er)}return null},Ns=function(t){var n;for(const[i,a]of t.current)!this.previous.has(i)&&t.previous.has(i)&&this.previous.set(i,t.previous.get(i)),this.current.set(i,a);for(const[i,a]of t.async_deriveds){const s=this.async_deriveds.get(i);s&&a.promise.then(s.resolve).catch(s.reject)}t.async_deriveds.clear(),this.transfer_effects(u(t,Bt),u(t,gt));const r=i=>{var a=i.reactions;if(a!==null&&!((i.f&Ne)!==0&&(i.f&(ye|et))===0))for(const l of a){var s=l.f;if((s&Ne)!==0)r(l);else{var o=l;s&(Ar|ut)&&!this.async_deriveds.has(o)&&(u(this,gt).delete(o),pe(o,ye),this.schedule(o))}}};for(const i of this.current.keys())r(i);this.oncommit(()=>t.discard()),j(n=t,K,wn).call(n),L=this,j(this,K,yn).call(this)},jr=function(t){for(var r=0;r<t.length;r+=1)Qi(t[r],u(this,Bt),u(this,gt))},jc=function(){var h,w;for(let _=ni;_!==null;_=u(_,hr)){var t=_.id<this.id,r=[];for(const[v,[S,f]]of this.current){if(_.current.has(v)){var n=_.current.get(v)[0];if(t&&S!==n)_.current.set(v,[S,f]);else continue}r.push(v)}if(t)for(const[v,S]of this.async_deriveds){const f=_.async_deriveds.get(v);f&&S.promise.then(f.resolve).catch(f.reject)}var i=[..._.current.keys()].filter(v=>!_.current.get(v)[1]);if(!(!u(_,Lr)||i.length===0)){var a=i.filter(v=>!this.current.has(v));if(a.length===0)t&&_.discard();else if(r.length>0){if(t)for(const v of u(this,Fr))_.unskip_effect(v,S=>{var f;(S.f&(ut|Ar))!==0?_.schedule(S):j(f=_,K,jr).call(f,[S])});_.activate();var s=new Set,o=new Map;for(var l of r)aa(l,a,s,o);o=new Map;var c=[..._.current].filter(([v,S])=>{const f=this.current.get(v);return f?f[0]!==S[0]||f[1]!==S[1]:!0}).map(([v])=>v);if(c.length>0)for(const v of u(this,vn))(v.f&(Pe|Oe|kn))===0&&si(v,c,o)&&((v.f&(Ar|ut))!==0?(pe(v,ye),_.schedule(v)):u(_,Bt).add(v));if(u(_,Xe).length>0&&!u(_,_r)){_.apply();for(var d of j(h=_,K,Ci).call(h))j(w=_,K,Ri).call(w,d,[],[])}_.deactivate()}}}},wn=function(){if(this.linked){var t=u(this,er),r=u(this,hr);t===null?ni=r:z(t,hr,r),r===null?Pr=t:z(r,er,t),this.linked=!1}};let ir=Dn;function bo(){try{ao()}catch(e){Et(e,ii)}}let dt=null;function ia(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(Pe|Oe))===0&&an(n)&&(dt=new Set,Ir(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&Sa(n),(dt==null?void 0:dt.size)>0)){$t.clear();for(const i of dt){if((i.f&(Pe|Oe))!==0)continue;const a=[i];let s=i.parent;for(;s!==null;)dt.has(s)&&(dt.delete(s),a.push(s)),s=s.parent;for(let o=a.length-1;o>=0;o--){const l=a[o];(l.f&(Pe|Oe))===0&&Ir(l)}}dt.clear()}}dt=null}}function aa(e,t,r,n){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(const i of e.reactions){const a=i.f;(a&Ne)!==0?aa(i,t,r,n):(a&(Ar|ut))!==0&&(a&ye)===0&&si(i,t,n)&&(pe(i,ye),oi(i))}}function si(e,t,r){const n=r.get(e);if(n!==void 0)return n;if(e.deps!==null)for(const i of e.deps){if(nr.call(t,i))return!0;if((i.f&Ne)!==0&&si(i,t,r))return r.set(i,!0),!0}return r.set(e,!1),!1}function oi(e){L.schedule(e)}function sa(e,t){if(!((e.f&Je)!==0&&(e.f&Se)!==0)){(e.f&ye)!==0?t.d.push(e):(e.f&et)!==0&&t.m.push(e),pe(e,Se);for(var r=e.first;r!==null;)sa(r,t),r=r.next}}function oa(e){pe(e,Se);for(var t=e.first;t!==null;)oa(t),t=t.next}let Nn=new Set;const $t=new Map;let la=!1;function Kt(e,t){var r={f:0,v:e,reactions:null,equals:Ki,rv:0,wv:0};return r}function G(e,t){const r=Kt(e);return Aa(r),r}function xo(e,t=!1,r=!0){var i;const n=Kt(e);return t||(n.equals=Zi),Mr&&r&&ve!==null&&ve.l!==null&&((i=ve.l).s??(i.s=[])).push(n),n}function E(e,t,r=!1){H!==null&&(!pt||(H.f&kn)!==0)&&Kr()&&(H.f&(Ne|ut|Ar|kn))!==0&&(At===null||!At.has(e))&&co();let n=r?ze(t):t;return Cr(e,n,Tn)}var ar=null,li=0;function Cr(e,t,r=null){if(!e.equals(t)){Lt?$t.set(e,t):$t.has(e)||$t.set(e,e.v);var n=ir.ensure();if(n.capture(e,t),(e.f&Ne)!==0){const i=e;(e.f&ye)!==0&&ri(i),Ae===null&&ei(i)}e.wv=Na(),ar=null,li=0,ua(e,ye,r),ar=null,Kr()&&U!==null&&(U.f&Se)!==0&&(U.f&(Je|Rt))===0&&(it===null?Co([e]):it.push(e)),!n.is_fork&&Nn.size>0&&!la&&So()}return t}function So(){la=!1;for(const e of Nn){(e.f&Se)!==0&&pe(e,et);let t;try{t=an(e)}catch{t=!0}t&&Ir(e)}Nn.clear()}function ca(e,t=1){var r=p(e),n=t===1?r++:r--;return E(e,r),n}function tn(e){E(e,e.v+1)}function ua(e,t,r){var n=e.reactions;if(n!==null){var i=Kr(),a=n.length;if(li+=a,li>1e5&&ar===null&&(ar=new Set),ar!==null){if(ar.has(e))return;ar.add(e)}for(var s=0;s<a;s++){var o=n[s],l=o.f;if(!(!i&&o===U)){var c=(l&ye)===0;if(c&&pe(o,t),(l&kn)!==0)Nn.add(o);else if((l&Ne)!==0){var d=o;Ae==null||Ae.delete(d),ua(d,et,r)}else if(c){var h=o;(l&ut)!==0&&dt!==null&&dt.add(h),r!==null?r.push(h):oi(h)}}}}}function ze(e){if(typeof e!="object"||e===null||St in e||ji in e)return e;const t=Gn(e);if(t!==Os&&t!==Ps)return e;var r=new Map,n=ne(e),i=G(0),a=cr,s=o=>{if(cr===a)return o();var l=H,c=cr;rt(null),Ta(a);var d=o();return rt(l),Ta(c),d};return n&&r.set("length",G(e.length)),new Proxy(e,{defineProperty(o,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&oo();var d=r.get(l);return d===void 0?s(()=>{var h=G(c.value);return r.set(l,h),h}):E(d,c.value,!0),!0},deleteProperty(o,l){var c=r.get(l);if(c===void 0){if(l in o){const d=s(()=>G(we));r.set(l,d),tn(i)}}else E(c,we),tn(i);return!0},get(o,l,c){var _;if(l===St)return e;var d=r.get(l),h=l in o;if(d===void 0&&(!h||(_=jt(o,l))!=null&&_.writable)&&(d=s(()=>{var v=ze(h?o[l]:we),S=G(v);return S}),r.set(l,d)),d!==void 0){var w=p(d);return w===we?void 0:w}return Reflect.get(o,l,c)},getOwnPropertyDescriptor(o,l){var w;(w=this.has)==null||w.call(this,o,l);var c=Reflect.getOwnPropertyDescriptor(o,l),d=r.get(l);if(d!==void 0){var h=p(d);if(h===we)return;if(c&&"value"in c)c.value=h;else return{enumerable:!0,configurable:!0,value:h,writable:!0}}return c},has(o,l){var w;if(l===St)return!0;var c=r.get(l),d=c!==void 0&&c.v!==we||Reflect.has(o,l);if(c!==void 0||U!==null&&(!d||(w=jt(o,l))!=null&&w.writable)){c===void 0&&(c=s(()=>{var _=d?ze(o[l]):we,v=G(_);return v}),r.set(l,c));var h=p(c);if(h===we)return!1}return d},set(o,l,c,d){var k;var h=r.get(l),w=l in o;if(n&&l==="length")for(var _=c;_<h.v;_+=1){var v=r.get(_+"");v!==void 0?E(v,we):_ in o&&(v=s(()=>G(we)),r.set(_+"",v))}if(h===void 0)(!w||(k=jt(o,l))!=null&&k.writable)&&(h=s(()=>G(void 0)),E(h,ze(c)),r.set(l,h));else{w=h.v!==we;var S=s(()=>ze(c));E(h,S)}var f=Reflect.getOwnPropertyDescriptor(o,l);if(f!=null&&f.set&&f.set.call(d,c),!w){if(n&&typeof l=="string"){var g=r.get("length"),m=Number(l);Number.isInteger(m)&&m>=g.v&&E(g,m+1)}tn(i)}return!0},ownKeys(o){p(i);var l=Reflect.ownKeys(o).filter(h=>{var w=r.get(h);return w===void 0||w.v!==we});for(var[c,d]of r)d.v!==we&&!(c in o)&&l.push(c);return l},setPrototypeOf(){lo()}})}function fa(e){try{if(e!==null&&typeof e=="object"&&St in e)return e[St]}catch{}return e}function da(e,t){return Object.is(fa(e),fa(t))}var va,pa,ha,_a;function ko(){if(va===void 0){va=window,pa=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;ha=jt(t,"firstChild").get,_a=jt(t,"nextSibling").get,Fi(e)&&(e[Zn]=void 0,e[En]=null,e[Qn]=void 0,e.__e=void 0),Fi(r)&&(r[Yr]=void 0)}}function It(e=""){return document.createTextNode(e)}function sr(e){return ha.call(e)}function rn(e){return _a.call(e)}function D(e,t){return sr(e)}function X(e,t=!1){{var r=sr(e);return r instanceof Comment&&r.data===""?rn(r):r}}function Y(e,t=!1){return sr(e)}function C(e,t=1,r=!1){let n=e;for(;t--;)n=rn(n);return n}function $o(e){e.textContent=""}function ga(){return!1}function ci(e,t,r){return t==null||t===qi?r?document.createElement(e,{is:r}):document.createElement(e):r?document.createElementNS(t,e,{is:r}):document.createElementNS(t,e)}function Eo(e){var t=U;if(t===null)return H.f|=Xt,e;if((t.f&$r)===0&&(t.f&kr)===0)throw e;Et(e,t)}function Et(e,t){if(!(t!==null&&(t.f&Pe)!==0)){for(;t!==null;){if((t.f&qn)!==0&&(t.f&(Pe|Sn))===0){if((t.f&$r)===0)throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw e}}function ma(e){U===null&&(H===null&&io(),no()),Lt&&ro()}function Ao(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function vt(e,t){var r=U;r!==null&&(r.f&Oe)!==0&&(e|=Oe);var n={ctx:ve,deps:null,nodes:null,f:e|ye|ft,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};L==null||L.register_created_effect(n);var i=n;if((e&kr)!==0)en!==null?en.push(n):ir.ensure().schedule(n);else if(t!==null){try{Ir(n)}catch(s){throw Me(n),s}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&Er)===0&&(i=i.first,(e&ut)!==0&&(e&Gt)!==0&&i!==null&&(i.f|=Gt))}if(i!==null&&(i.parent=r,r!==null&&Ao(i,r),H!==null&&(H.f&Ne)!==0&&(e&Rt)===0)){var a=H;(a.effects??(a.effects=[])).push(i)}return n}function ui(){return H!==null&&!pt}function fi(e){const t=vt(Xr,null);return pe(t,Se),t.teardown=e,t}function Rr(e){ma();var t=U.f,r=!H&&(t&Je)!==0&&ve!==null&&!ve.i;if(r){var n=ve;(n.e??(n.e=[])).push(e)}else return ya(e)}function ya(e){return vt(kr|Wi,e)}function Mo(e){return ma(),vt(Xr|Wi,e)}function To(e){ir.ensure();const t=vt(Rt|Er,e);return(r={})=>new Promise(n=>{r.outro?or(t,()=>{Me(t),n(void 0)}):(Me(t),n(void 0))})}function di(e){return vt(kr,e)}function No(e){return vt(Ar|Er,e)}function wa(e,t=0){return vt(Xr|t,e)}function _e(e,t=[],r=[],n=[]){Ji(n,t,r,i=>{vt(Xr,()=>{e(...i.map(p))})})}function nn(e,t=0){var r=vt(ut|t,e);return r}function ba(e,t=0){var r=vt(Yn|t,e);return r}function De(e){return vt(Je|Er,e)}function xa(e){var t=e.teardown;if(t!==null){const r=Lt,n=H;Ea(!0),rt(null);try{t.call(null)}catch(i){Et(i,e.parent)}finally{Ea(r),rt(n)}}}function vi(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const i=r.ac;i!==null&&Zr(()=>{i.abort(qr)});var n=r.next;(r.f&Rt)!==0?r.parent=null:Me(r,t),r=n}}function Oo(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Je)===0&&Me(t),t=r}}function Me(e,t=!0){var r=!1;(t||(e.f&Is)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Po(e.nodes.start,e.nodes.end),r=!0),e.f|=Sn,vi(e,t&&!r),sn(e,0);var n=e.nodes&&e.nodes.t;if(n!==null)for(const a of n)a.stop();xa(e),e.f^=Sn,e.f|=Pe;var i=e.parent;i!==null&&i.first!==null&&Sa(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Po(e,t){for(;e!==null;){var r=e===t?null:rn(e);e.remove(),e=r}}function Sa(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function or(e,t,r=!0){var n=[];e.f|=Kn,ka(e,n,!0);var i=()=>{r&&Me(e),t&&t()},a=n.length;if(a>0){var s=()=>--a||i();for(var o of n)o.out(s)}else i()}function ka(e,t,r){if((e.f&Oe)===0){e.f^=Oe;var n=e.nodes&&e.nodes.t;if(n!==null)for(const o of n)(o.is_global||r)&&t.push(o);for(var i=e.first;i!==null;){var a=i.next;if((i.f&Rt)===0){var s=(i.f&Gt)!==0||(i.f&Je)!==0&&(e.f&ut)!==0;ka(i,t,s?r:!1)}i=a}}}function On(e){e.f&=~Kn,$a(e,!0)}function $a(e,t){if((e.f&Kn)===0&&(e.f&Oe)!==0){e.f^=Oe,(e.f&Se)===0&&(pe(e,ye),ir.ensure().schedule(e));for(var r=e.first;r!==null;){var n=r.next,i=(r.f&Gt)!==0||(r.f&Je)!==0;$a(r,i?t:!1),r=n}var a=e.nodes&&e.nodes.t;if(a!==null)for(const s of a)(s.is_global||t)&&s.in()}}function pi(e,t){if(e.nodes)for(var r=e.nodes.start,n=e.nodes.end;r!==null;){var i=r===n?null:rn(r);t.append(r),r=i}}let Pn=!1,Lt=!1;function Ea(e){Lt=e}let H=null,pt=!1;function rt(e){H=e}let U=null;function nt(e){U=e}let At=null;function Aa(e){H!==null&&((H.f&$n)!==0||(H.f&Ne)!==0)&&(At??(At=new Set)).add(e)}let Be=null,We=0,it=null;function Co(e){it=e}let Ma=1,lr=0,cr=lr;function Ta(e){cr=e}function Na(){return++Ma}function an(e){var t=e.f;if((t&ye)!==0)return!0;if((t&et)!==0){for(var r=e.deps,n=r.length,i=0;i<n;i++){var a=r[i];if(an(a)&&ta(a),a.wv>e.wv)return!0}(t&ft)!==0&&Ae===null&&pe(e,Se)}return!1}function Oa(e,t,r=!0){var n=e.reactions;if(n!==null&&!(At!==null&&At.has(e)))for(var i=0;i<n.length;i++){var a=n[i];(a.f&Ne)!==0?Oa(a,t,!1):t===a&&(r?pe(a,ye):(a.f&Se)!==0&&pe(a,et),oi(a))}}function Pa(e){var t=Be,r=We,n=it,i=H,a=At,s=ve,o=pt,l=cr,c=e.f;Be=null,We=0,it=null,H=(c&(Je|Rt))===0?e:null,At=null,Tr(e.ctx),pt=!1,cr=++lr,e.ac!==null&&(Zr(()=>{e.ac.abort(qr)}),e.ac=null);try{e.f|=$n;var d=e.fn,h=d();e.f|=$r;var w=Ca(e);if(Kr()&&it!==null&&!pt&&w!==null&&(e.f&(Ne|et|ye))===0)for(var _=0;_<it.length;_++)Oa(it[_],e);if(i!==null&&i!==e){if(lr++,i.deps!==null)for(let v=0;v<r;v+=1)i.deps[v].rv=lr;if(t!==null)for(const v of t)v.rv=lr;it!==null&&(n===null?n=it:n.push(...it))}return(e.f&Xt)!==0&&(e.f^=Xt),h}catch(v){return Ca(e),Eo(v)}finally{e.f^=$n,Be=t,We=r,it=n,H=i,At=a,Tr(s),pt=o,cr=l}}function Ca(e){var i;var t=e.deps,r=L==null?void 0:L.is_fork;if(Be!==null){var n;if(r||sn(e,We),t!==null&&We>0)for(t.length=We+Be.length,n=0;n<Be.length;n++)t[We+n]=Be[n];else e.deps=t=Be;if(ui()&&(e.f&ft)!==0)for(n=We;n<t.length;n++)((i=t[n]).reactions??(i.reactions=[])).push(e)}else!r&&t!==null&&We<t.length&&(sn(e,We),t.length=We);return t}function Ro(e,t){let r=t.reactions;if(r!==null){var n=xe.call(r,e);if(n!==-1){var i=r.length-1;i===0?r=t.reactions=null:(r[n]=r[i],r.pop())}}if(r===null&&(t.f&Ne)!==0&&(Be===null||!nr.call(Be,t))){var a=t;(a.f&ft)!==0&&(a.f^=ft),a.v!==we&&ei(a),a.ac!==null&&Zr(()=>{a.ac.abort(qr),a.ac=null,pe(a,ye)}),yo(a),sn(a,0)}}function sn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Ro(e,r[n])}function Ir(e){var t=e.f;if((t&Pe)===0){pe(e,Se);var r=U,n=Pn;U=e,Pn=(t&(Je|Rt))===0;try{(t&(ut|Yn))!==0?Oo(e):vi(e),xa(e);var i=Pa(e);e.teardown=typeof i=="function"?i:null,e.wv=Ma;var a}finally{Pn=n,U=r}}}function p(e){var t=e.f,r=(t&Ne)!==0;if(H!==null&&!pt){var n=U!==null&&(U.f&Pe)!==0;if(!n&&(At===null||!At.has(e))){var i=H.deps;if((H.f&$n)!==0)e.rv<lr&&(e.rv=lr,Be===null&&i!==null&&i[We]===e?We++:Be===null?Be=[e]:Be.push(e));else{H.deps??(H.deps=[]),nr.call(H.deps,e)||H.deps.push(e);var a=e.reactions;a===null?e.reactions=[H]:nr.call(a,H)||a.push(H)}}}if(Lt&&$t.has(e))return $t.get(e);if(r){var s=e;if(Lt){var o=s.v;return((s.f&Se)===0&&s.reactions!==null||Ia(s))&&(o=ri(s)),$t.set(s,o),o}var l=(s.f&ft)===0&&!pt&&H!==null&&(Pn||(H.f&ft)!==0),c=(s.f&$r)===0;an(s)&&(l&&(s.f|=ft),ta(s)),l&&!c&&(ra(s),Ra(s))}if(Ae!=null&&Ae.has(e))return Ae.get(e);if((e.f&Xt)!==0)throw e.v;return e.v}function Ra(e){if(e.f|=ft,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&Ne)!==0&&(t.f&ft)===0&&(ra(t),Ra(t))}function Ia(e){if(e.v===we)return!0;if(e.deps===null)return!1;for(const t of e.deps)if($t.has(t)||(t.f&Ne)!==0&&Ia(t))return!0;return!1}function Zt(e){var t=pt;try{return pt=!0,e()}finally{pt=t}}function ur(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(St in e)hi(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&St in r&&hi(r)}}}function hi(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{hi(e[n],t)}catch{}const r=Gn(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=Vi(r);for(let i in n){const a=n[i].get;if(a)try{a.call(e)}catch{}}}}}function Io(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Lo=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function zo(e){return Lo.includes(e)}const Do={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Bo(e){return e=e.toLowerCase(),Do[e]??e}const Vo=["touchstart","touchmove"];function Fo(e){return Vo.includes(e)}const fr=Symbol("events"),La=new Set,_i=new Set;function Ho(e,t,r,n={}){function i(a){if(n.capture||yi.call(t,a),!a.cancelBubble)return Zr(()=>r==null?void 0:r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?(i.__removed=!1,kt(()=>{i.__removed||t.addEventListener(e,i,n)})):t.addEventListener(e,i,n),i}function Z(e,t,r){(t[fr]??(t[fr]={}))[e]=r}function dr(e){for(var t=0;t<e.length;t++)La.add(e[t]);for(var r of _i)r(e)}let gi=null,mi=!1;function yi(e){var S,f;var t=this,r=t.ownerDocument,n=e.type,i=((S=e.composedPath)==null?void 0:S.call(e))||[],a=i[0]||e.target;gi=e,mi||(mi=!0,setTimeout(()=>{mi=!1,gi=null}));var s=0,o=gi===e&&e[fr];if(o){var l=i.indexOf(o);if(l!==-1&&(t===document||t===window)){e[fr]=t;return}var c=i.indexOf(t);if(c===-1)return;l<=c&&(s=l)}if(a=i[s]||e.target,a!==t){Bi(e,"currentTarget",{configurable:!0,get(){return a||r}});var d=H,h=U;rt(null),nt(null);try{for(var w,_=[];a!==null&&a!==t;){try{var v=(f=a[fr])==null?void 0:f[n];v!=null&&(!a.disabled||e.target===a)&&v.call(a,e)}catch(g){w?_.push(g):w=g}if(e.cancelBubble)break;s++,a=s<i.length?i[s]:null}if(w){for(let g of _)queueMicrotask(()=>{throw g});throw w}}finally{e[fr]=t,delete e.currentTarget,rt(d),nt(h)}}}const wi=((fs=globalThis==null?void 0:globalThis.window)==null?void 0:fs.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Uo(e){return(wi==null?void 0:wi.createHTML(e))??e}function za(e){var t=ci("template");return t.innerHTML=Uo(e.replaceAll("<!>","<!---->")),t.content}function on(e,t){var r=U;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function ge(e,t){var r=(t&js)!==0,n=(t&Gs)!==0,i,a=!e.startsWith("<!>");return()=>{i===void 0&&(i=za(a?e:"<!>"+e),r||(i=sr(i)));var s=n||pa?document.importNode(i,!0):i.cloneNode(!0);if(r){var o=sr(s),l=s.lastChild;on(o,l)}else on(s,s);return s}}function Wo(e,t,r="svg"){var n=!e.startsWith("<!>"),i=`<${r}>${n?e:"<!>"+e}</${r}>`,a;return()=>{if(!a){var s=za(i),o=sr(s);a=sr(o)}var l=a.cloneNode(!0);return on(l,l),l}}function jo(e,t){return Wo(e,t,"svg")}function Q(){var e=document.createDocumentFragment(),t=document.createComment(""),r=It();return e.append(t,r),on(t,r),e}function N(e,t){e!==null&&e.before(t)}function Go(e){let t=0,r=Kt(0),n;return()=>{ui()&&(p(r),wa(()=>(t===0&&(n=Zt(()=>e(()=>tn(r)))),t+=1,()=>{kt(()=>{t-=1,t===0&&(n==null||n(),n=void 0,tn(r))})})))}}var Xo=Gt|Er;function Yo(e,t,r,n){new qo(e,t,r,n)}class qo{constructor(t,r,n,i){B(this,le);Qe(this,"parent");Qe(this,"is_pending",!1);Qe(this,"transform_error");B(this,st);B(this,Mi,null);B(this,ot);B(this,gr);B(this,Re);B(this,Ye,null);B(this,Ie,null);B(this,qe,null);B(this,Tt,null);B(this,mr,0);B(this,tr,0);B(this,Hr,!1);B(this,pn,new Set);B(this,hn,new Set);B(this,Vt,null);B(this,Bn,Go(()=>(z(this,Vt,Kt(u(this,mr))),()=>{z(this,Vt,null)})));var a;z(this,st,t),z(this,ot,r),z(this,gr,s=>{var o=U;o.b=this,o.f|=qn,n(s)}),this.parent=U.b,this.transform_error=i??((a=this.parent)==null?void 0:a.transform_error)??(s=>s),z(this,Re,nn(()=>{j(this,le,Li).call(this)},Xo))}defer_effect(t){Qi(t,u(this,pn),u(this,hn))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!u(this,ot).pending}update_pending_count(t,r){j(this,le,zi).call(this,t,r),z(this,mr,u(this,mr)+t),!(!u(this,Vt)||u(this,Hr))&&(z(this,Hr,!0),kt(()=>{z(this,Hr,!1),u(this,Vt)&&Cr(u(this,Vt),u(this,mr))}))}get_effect_pending(){return u(this,Bn).call(this),p(u(this,Vt))}error(t){if(!u(this,ot).onerror&&!u(this,ot).failed)throw t;L!=null&&L.is_fork?(u(this,Ye)&&L.skip_effect(u(this,Ye)),u(this,Ie)&&L.skip_effect(u(this,Ie)),u(this,qe)&&L.skip_effect(u(this,qe)),L.oncommit(()=>{j(this,le,Di).call(this,t)})):j(this,le,Di).call(this,t)}}st=new WeakMap,Mi=new WeakMap,ot=new WeakMap,gr=new WeakMap,Re=new WeakMap,Ye=new WeakMap,Ie=new WeakMap,qe=new WeakMap,Tt=new WeakMap,mr=new WeakMap,tr=new WeakMap,Hr=new WeakMap,pn=new WeakMap,hn=new WeakMap,Vt=new WeakMap,Bn=new WeakMap,le=new WeakSet,Gc=function(){try{z(this,Ye,De(()=>u(this,gr).call(this,u(this,st))))}catch(t){this.error(t)}},Xc=function(t){const r=u(this,ot).failed,{reset:n,invoke_onerror:i}=j(this,le,Ii).call(this,t);kt(i),r&&z(this,qe,De(()=>{r(u(this,st),()=>t,()=>n)}))},Ii=function(t){var r=!1,n=!1;const i=()=>{if(r){Zs();return}r=!0,n&&uo(),u(this,qe)!==null&&or(u(this,qe),()=>{z(this,qe,null)}),j(this,le,jn).call(this,()=>{j(this,le,Li).call(this)})};return{reset:i,invoke_onerror:()=>{var s,o;try{n=!0,(o=(s=u(this,ot)).onerror)==null||o.call(s,t,i),n=!1}catch(l){Et(l,u(this,Re)&&u(this,Re).parent)}}}},Yc=function(){const t=u(this,ot).pending;t&&(this.is_pending=!0,z(this,Ie,De(()=>t(u(this,st)))),kt(()=>{var r=z(this,Tt,document.createDocumentFragment()),n=It(),i=!1;if(r.append(n),z(this,Ye,j(this,le,jn).call(this,()=>{try{return De(()=>u(this,gr).call(this,n))}catch(a){try{this.error(a),i=!0}catch(s){Et(s,u(this,Re).parent)}return null}})),u(this,Ye)===null){z(this,Tt,null),i&&j(this,le,bn).call(this,L);return}u(this,tr)===0&&(u(this,st).before(r),z(this,Tt,null),or(u(this,Ie),()=>{z(this,Ie,null)}),j(this,le,bn).call(this,L))}))},Li=function(){try{if(this.is_pending=this.has_pending_snippet(),z(this,tr,0),z(this,mr,0),z(this,Ye,De(()=>{u(this,gr).call(this,u(this,st))})),u(this,tr)>0){var t=z(this,Tt,document.createDocumentFragment());pi(u(this,Ye),t);const r=u(this,ot).pending;z(this,Ie,De(()=>r(u(this,st))))}else j(this,le,bn).call(this,L)}catch(r){this.error(r)}},bn=function(t){this.is_pending=!1,t.transfer_effects(u(this,pn),u(this,hn))},jn=function(t){var r=U,n=H,i=ve;nt(u(this,Re)),rt(u(this,Re)),Tr(u(this,Re).ctx);try{return ir.ensure(),t()}finally{nt(r),rt(n),Tr(i)}},zi=function(t,r){var n;if(!this.has_pending_snippet()){this.parent&&j(n=this.parent,le,zi).call(n,t,r);return}z(this,tr,u(this,tr)+t),u(this,tr)===0&&(j(this,le,bn).call(this,r),u(this,Ie)&&or(u(this,Ie),()=>{z(this,Ie,null)}),u(this,Tt)&&(u(this,st).before(u(this,Tt)),z(this,Tt,null)))},Di=function(t){u(this,Ye)&&(Me(u(this,Ye)),z(this,Ye,null)),u(this,Ie)&&(Me(u(this,Ie)),z(this,Ie,null)),u(this,qe)&&(Me(u(this,qe)),z(this,qe,null));let r=u(this,ot).failed;const n=i=>{const{reset:a,invoke_onerror:s}=j(this,le,Ii).call(this,i);s(),r&&z(this,qe,j(this,le,jn).call(this,()=>{try{return De(()=>{var o=U;o.b=this,o.f|=qn,r(u(this,st),()=>i,()=>a)})}catch(o){return Et(o,u(this,Re).parent),null}}))};kt(()=>{var i;try{i=this.transform_error(t)}catch(a){Et(a,u(this,Re)&&u(this,Re).parent);return}i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(n,a=>Et(a,u(this,Re)&&u(this,Re).parent)):n(i)})};function q(e,t){var r=t==null?"":typeof t=="object"?`${t}`:t;r!==(e[Yr]??(e[Yr]=e.nodeValue))&&(e[Yr]=r,e.nodeValue=`${r}`)}function Ko(e,t){return Zo(e,t)}const Cn=new Map;function Zo(e,{target:t,anchor:r,props:n={},events:i,context:a,intro:s=!0,transformError:o}){ko();var l=void 0,c=To(()=>{var d=r??t.appendChild(It());Yo(d,{pending:()=>{}},_=>{Yt({});var v=ve;a&&(v.c=a),i&&(n.$$events=i),l=e(_,n)||Jn(),qt()},o);var h=new Set,w=_=>{for(var v=0;v<_.length;v++){var S=_[v];if(!h.has(S)){h.add(S);var f=Fo(S);for(const k of[t,document]){var g=Cn.get(k);g===void 0&&(g=new Map,Cn.set(k,g));var m=g.get(S);m===void 0?(k.addEventListener(S,yi,{passive:f}),g.set(S,1)):g.set(S,m+1)}}}};return w(xn(La)),_i.add(w),()=>{var f;for(var _ of h)for(const g of[t,document]){var v=Cn.get(g),S=v.get(_);--S==0?(g.removeEventListener(_,yi),v.delete(_),v.size===0&&Cn.delete(g)):v.set(_,S)}_i.delete(w),d!==r&&((f=d.parentNode)==null||f.removeChild(d))}});return Qo.set(l,c),l}let Qo=new WeakMap;class bi{constructor(t,r=!0){Qe(this,"anchor");B(this,mt,new Map);B(this,Nt,new Map);B(this,Ke,new Map);B(this,yr,new Set);B(this,_n,!0);B(this,gn,t=>{if(u(this,mt).has(t)){var r=u(this,mt).get(t),n=u(this,Nt).get(r);if(n)On(n),u(this,yr).delete(r);else{var i=u(this,Ke).get(r);i&&(On(i.effect),u(this,Nt).set(r,i.effect),u(this,Ke).delete(r),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),n=i.effect)}for(const[a,s]of u(this,mt)){if(u(this,mt).delete(a),a===t)break;const o=u(this,Ke).get(s);o&&(Me(o.effect),u(this,Ke).delete(s))}for(const[a,s]of u(this,Nt)){if(a===r||u(this,yr).has(a))continue;const o=()=>{if(Array.from(u(this,mt).values()).includes(a)){var c=document.createDocumentFragment();pi(s,c),c.append(It()),u(this,Ke).set(a,{effect:s,fragment:c})}else Me(s);u(this,yr).delete(a),u(this,Nt).delete(a)};u(this,_n)||!n?(u(this,yr).add(a),or(s,o,!1)):o()}}});B(this,Vn,t=>{u(this,mt).delete(t);const r=Array.from(u(this,mt).values());for(const[n,i]of u(this,Ke))r.includes(n)||(Me(i.effect),u(this,Ke).delete(n))});this.anchor=t,z(this,_n,r)}ensure(t,r){var n=L,i=ga();if(r&&!u(this,Nt).has(t)&&!u(this,Ke).has(t))if(i){var a=document.createDocumentFragment(),s=It();a.append(s),u(this,Ke).set(t,{effect:De(()=>r(s)),fragment:a})}else u(this,Nt).set(t,De(()=>r(this.anchor)));if(u(this,mt).set(n,t),i){for(const[o,l]of u(this,Nt))o===t?n.unskip_effect(l):n.skip_effect(l);for(const[o,l]of u(this,Ke))o===t?n.unskip_effect(l.effect):n.skip_effect(l.effect);n.oncommit(u(this,gn)),n.ondiscard(u(this,Vn))}else u(this,gn).call(this,n)}}mt=new WeakMap,Nt=new WeakMap,Ke=new WeakMap,yr=new WeakMap,_n=new WeakMap,gn=new WeakMap,Vn=new WeakMap;function ht(e,t,r=!1){var n=new bi(e),i=r?Gt:0;function a(s,o){n.ensure(s,o)}nn(()=>{var s=!1;t((o,l=0)=>{s=!0,a(l,o)}),s||a(-1,null)},i)}function Da(e,t){return t}function Jo(e,t,r){for(var n=[],i=t.length,a,s=t.length,o=0;o<i;o++){let h=t[o];or(h,()=>{if(a){if(a.pending.delete(h),a.done.add(h),a.pending.size===0){var w=e.outrogroups;xi(e,xn(a.done)),w.delete(a),w.size===0&&(e.outrogroups=null)}}else s-=1},!1)}if(s===0){var l=n.length===0&&r!==null&&e.pending.size===0;if(l){var c=r,d=c.parentNode;$o(d),d.append(c),e.items.clear()}xi(e,t,!l)}else a={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(a)}function xi(e,t,r=!0){var n;if(e.pending.size>0){n=new Set;for(const s of e.pending.values())for(const o of s)n.add(e.items.get(o).e)}for(var i=0;i<t.length;i++){var a=t[i];if(n!=null&&n.has(a)){a.f|=xt;const s=document.createDocumentFragment();pi(a,s)}else Me(t[i],r)}}var Ba;function Qt(e,t,r,n,i,a=null){var s=e,o=new Map,l=(t&Xi)!==0;if(l){var c=e;s=c.appendChild(It())}var d=null,h=ti(()=>{var k=r();return ne(k)?k:k==null?[]:xn(k)}),w,_=new Map,v=!0;function S(k){(m.effect.f&Pe)===0&&(m.pending.delete(k),m.fallback=d,el(m,w,s,t,n),d!==null&&(w.length===0?(d.f&xt)===0?On(d):(d.f^=xt,cn(d,null,s)):or(d,()=>{d=null})))}function f(k){m.pending.delete(k)}var g=nn(()=>{w=p(h);for(var k=w.length,A=new Set,x=L,$=ga(),M=0;M<k;M+=1){var R=w[M],I=n(R,M),te=v?null:o.get(I);te?(te.v&&Cr(te.v,R),te.i&&Cr(te.i,M),$&&x.unskip_effect(te.e)):(te=tl(o,v?s:Ba??(Ba=It()),R,I,M,i,t,r),v||(te.e.f|=xt),o.set(I,te)),A.add(I)}if(k===0&&a&&!d&&(v?d=De(()=>a(s)):(d=De(()=>a(Ba??(Ba=It()))),d.f|=xt)),k>A.size&&to(),!v)if(_.set(x,A),$){for(const[me,Fe]of o)A.has(me)||x.skip_effect(Fe.e);x.oncommit(S),x.ondiscard(f)}else S(x);p(h)}),m={effect:g,items:o,pending:_,outrogroups:null,fallback:d};v=!1}function ln(e){for(;e!==null&&(e.f&Je)===0;)e=e.next;return e}function el(e,t,r,n,i){var te,me,Fe,He,Le,yt,Ze,lt,wt;var a=(n&Bs)!==0,s=t.length,o=e.items,l=ln(e.effect.first),c,d=null,h,w=[],_=[],v,S,f,g;if(a)for(g=0;g<s;g+=1)v=t[g],S=i(v,g),f=o.get(S).e,(f.f&xt)===0&&((me=(te=f.nodes)==null?void 0:te.a)==null||me.measure(),(h??(h=new Set)).add(f));for(g=0;g<s;g+=1){if(v=t[g],S=i(v,g),f=o.get(S).e,e.outrogroups!==null)for(const ke of e.outrogroups)ke.pending.delete(f),ke.done.delete(f);if((f.f&Oe)!==0&&(On(f),a&&((He=(Fe=f.nodes)==null?void 0:Fe.a)==null||He.unfix(),(h??(h=new Set)).delete(f))),(f.f&xt)!==0)if(f.f^=xt,f===l)cn(f,null,r);else{var m=d?d.next:l;f===e.effect.last&&(e.effect.last=f.prev),f.prev&&(f.prev.next=f.next),f.next&&(f.next.prev=f.prev),Jt(e,d,f),Jt(e,f,m),cn(f,m,r),d=f,w=[],_=[],l=ln(d.next);continue}if(f!==l){if(c!==void 0&&c.has(f)){if(w.length<_.length){var k=_[0],A;d=k.prev;var x=w[0],$=w[w.length-1];for(A=0;A<w.length;A+=1)cn(w[A],k,r);for(A=0;A<_.length;A+=1)c.delete(_[A]);Jt(e,x.prev,$.next),Jt(e,d,x),Jt(e,$,k),l=k,d=$,g-=1,w=[],_=[]}else c.delete(f),cn(f,l,r),Jt(e,f.prev,f.next),Jt(e,f,d===null?e.effect.first:d.next),Jt(e,d,f),d=f;continue}for(w=[],_=[];l!==null&&l!==f;)(c??(c=new Set)).add(l),_.push(l),l=ln(l.next);if(l===null)continue}(f.f&xt)===0&&w.push(f),d=f,l=ln(f.next)}if(e.outrogroups!==null){for(const ke of e.outrogroups)ke.pending.size===0&&(xi(e,xn(ke.done)),(Le=e.outrogroups)==null||Le.delete(ke));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||c!==void 0){var M=[];if(c!==void 0)for(f of c)(f.f&Oe)===0&&M.push(f);for(;l!==null;)(l.f&Oe)===0&&l!==e.fallback&&M.push(l),l=ln(l.next);var R=M.length;if(R>0){var I=(n&Xi)!==0&&s===0?r:null;if(a){for(g=0;g<R;g+=1)(Ze=(yt=M[g].nodes)==null?void 0:yt.a)==null||Ze.measure();for(g=0;g<R;g+=1)(wt=(lt=M[g].nodes)==null?void 0:lt.a)==null||wt.fix()}Jo(e,M,I)}}a&&kt(()=>{var ke,Ot;if(h!==void 0)for(f of h)(Ot=(ke=f.nodes)==null?void 0:ke.a)==null||Ot.apply()})}function tl(e,t,r,n,i,a,s,o){var l=(s&zs)!==0?(s&Vs)===0?xo(r,!1,!1):Kt(r):null,c=(s&Ds)!==0?Kt(i):null;return{v:l,i:c,e:De(()=>(a(t,l??r,c??i,o),()=>{e.delete(n)}))}}function cn(e,t,r){if(e.nodes)for(var n=e.nodes.start,i=e.nodes.end,a=t&&(t.f&xt)===0?t.nodes.start:r;n!==null;){var s=rn(n);if(a.before(n),n===i)return;n=s}}function Jt(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function oe(e,t,r,n,i){var o,l;if((o=t.$$host)!=null&&o.$$shadowRoot){const c=ci("slot");N(e,c);return}var a=(l=t.$$slots)==null?void 0:l[r],s=!1;a===!0&&(a=t.children,s=!0),a===void 0||a(e,s?()=>n:n)}function rl(e,t,r){var n=new bi(e);nn(()=>{var i=t()??null;n.ensure(i,i&&(a=>r(a,i)))},Gt)}function nl(e,t,r,n,i,a){var s=null,o=e,l=new bi(o,!1);nn(()=>{const c=t()||null;var d=Xs;if(c===null){l.ensure(null,null);return}return l.ensure(c,h=>{if(c){if(s=ci(c,d),on(s,s),n){var w=null,_=s.appendChild(It());n(s,_),w==null||w.remove()}U.nodes.end=s,h.before(s)}}),()=>{}},Gt),fi(()=>{})}function il(e,t){var r=void 0,n;ba(()=>{r!==(r=t())&&(n&&(Me(n),n=null),r&&(n=De(()=>{di(()=>r(e))})))})}function Va(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=Va(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function al(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=Va(e))&&(n&&(n+=" "),n+=t);return n}function vr(e){return typeof e=="object"?al(e):e??""}const Fa=[...` 	
\r\f \v\uFEFF`];function sl(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var i of Object.keys(r))if(r[i])n=n?n+" "+i:i;else if(n.length)for(var a=i.length,s=0;(s=n.indexOf(i,s))>=0;){var o=s+a;(s===0||Fa.includes(n[s-1]))&&(o===n.length||Fa.includes(n[o]))?n=(s===0?"":n.substring(0,s))+n.substring(o+1):s=o}}return n===""?null:n}function Ha(e,t=!1){var r=t?" !important;":";",n="";for(var i of Object.keys(e)){var a=e[i];a!=null&&a!==""&&(n+=" "+i+": "+a+r)}return n}function Si(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function ol(e,t){if(t){var r="",n,i;if(Array.isArray(t)?(n=t[0],i=t[1]):n=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var a=!1,s=0,o=!1,l=[];n&&l.push(...Object.keys(n).map(Si)),i&&l.push(...Object.keys(i).map(Si));var c=0,d=-1;const S=e.length;for(var h=0;h<S;h++){var w=e[h];if(o?w==="/"&&e[h-1]==="*"&&(o=!1):a?a===w&&(a=!1):w==="/"&&e[h+1]==="*"?o=!0:w==='"'||w==="'"?a=w:w==="("?s++:w===")"&&s--,!o&&a===!1&&s===0){if(w===":"&&d===-1)d=h;else if(w===";"||h===S-1){if(d!==-1){var _=Si(e.substring(c,d).trim());if(!l.includes(_)){w!==";"&&h++;var v=e.substring(c,h).trim();r+=" "+v+";"}}c=h+1,d=-1}}}}return n&&(r+=Ha(n)),i&&(r+=Ha(i,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Ce(e,t,r,n,i,a){var s=e[Zn];if(s!==r||s===void 0){var o=sl(r,n,a);o==null?e.removeAttribute("class"):t?e.className=o:e.setAttribute("class",o),e[Zn]=r}else if(a&&i!==a)for(var l in a){var c=!!a[l];(i==null||c!==!!i[l])&&e.classList.toggle(l,c)}return a}function ki(e,t={},r,n){for(var i in r){var a=r[i];t[i]!==a&&(r[i]==null?e.style.removeProperty(i):e.style.setProperty(i,a,n))}}function Ua(e,t,r,n){var i=e[Qn];if(i!==t){var a=ol(t,n);a==null?e.removeAttribute("style"):e.style.cssText=a,e[Qn]=t}else n&&(Array.isArray(n)?(ki(e,r==null?void 0:r[0],n[0]),ki(e,r==null?void 0:r[1],n[1],"important")):ki(e,r,n));return n}function Wa(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function ja(e,t){var r=!("__defaultValue"in e);!r&&e.__defaultValue===t||(e.__defaultValue=t,Ga(e,!r||"__value"in e))}function Ga(e,t){var r=e.__defaultValue,n=e.multiple,i=n?r??[]:null;if(!(n&&!ne(i))){var a=e.selectedIndex,s=t&&n?new Set(e.selectedOptions):null;for(var o of e.options){var l=$i(o);Wa(o,n?i.includes(l):da(l,r))}if(t)if(s!==null)for(o of e.options){var c=s.has(o);o.selected!==c&&(o.selected=c)}else e.selectedIndex!==a&&(e.selectedIndex=a)}}function zt(e,t,r=!1){if(e.multiple){if(t==null)return;if(!ne(t))return Ks();for(var n of e.options)n.selected=t.includes($i(n));return}for(n of e.options){var i=$i(n);if(da(i,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function pr(e){var t=new MutationObserver(r=>{r.every(ll)||("__defaultValue"in e&&Ga(e,!1),"__value"in e&&zt(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),fi(()=>{t.disconnect()})}function $i(e){return"__value"in e?e.__value:e.value}function ll(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(r=>r.nodeName==="SELECTEDCONTENT")}return!1}const un=Symbol("class"),fn=Symbol("style"),Xa=Symbol("is custom element"),Ya=Symbol("is html"),cl=An?"input":"INPUT",ul=An?"option":"OPTION",qa=An?"select":"SELECT",fl=An?"progress":"PROGRESS";function Rn(e,t){var r=In(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==fl)||(e.value=t??"")}function dl(e,t){var r=In(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function $e(e,t,r,n){var i=In(e);i[t]!==(i[t]=r)&&(t==="loading"&&(e[Ls]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Qa(e).has(t)?e[t]=r:e.setAttribute(t,r))}function vl(e,t,r,n,i=!1,a=!1){var s=In(e),o=s[Xa],l=!s[Ya],c=t||{},d=e.nodeName===ul,h=e.nodeName===qa;for(var w in t)!(w in r)&&w[0]+w[1]!=="$$"&&(r[w]=null);r.class?r.class=vr(r.class):r[un]&&(r.class=null),r[fn]&&(r.style??(r.style=null));var _=Qa(e);if(e.nodeName===cl&&"type"in r&&("value"in r||"__value"in r)){var v=r.type;(v!==c.type||v===void 0&&e.hasAttribute("type"))&&(c.type=v,$e(e,"type",v))}for(const x in r){let $=r[x];if(d&&x==="value"&&$==null){e.value=e.__value="",c[x]=$;continue}if(x==="class"){var S=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ce(e,S,$,n,t==null?void 0:t[un],r[un]),c[x]=$,c[un]=r[un];continue}if(x==="style"){Ua(e,$,t==null?void 0:t[fn],r[fn]),c[x]=$,c[fn]=r[fn];continue}var f=c[x];if(!($===f&&!($===void 0&&e.hasAttribute(x)))){c[x]=$;var g=x[0]+x[1];if(g!=="$$")if(g==="on"){const M={},R="$$"+x;let I=x.slice(2);var m=zo(I);if(Io(I)&&(I=I.slice(0,-7),M.capture=!0),!m&&f){if($!=null)continue;e.removeEventListener(I,c[R],M),c[R]=null}if(m)Z(I,e,$),dr([I]);else if($!=null){let te=function(me){c[x].call(this,me)};c[R]=Ho(I,e,te,M)}}else if(x==="style")$e(e,x,$);else if(x==="autofocus")ho(e,!!$);else if(!o&&(x==="__value"||x==="value"&&$!=null))e.value=e.__value=$;else if(x==="selected"&&d)Wa(e,$);else{var k=x;l||(k=Bo(k));var A=k==="defaultValue"||k==="defaultChecked";if(h&&k==="defaultValue")continue;if($==null&&!o&&!A)if(s[x]=null,k==="value"||k==="checked"){let M=e;const R=t===void 0;if(k==="value"){let I=M.defaultValue;M.removeAttribute(k),M.defaultValue=I,M.value=M.__value=R?I:null}else{let I=M.defaultChecked;M.removeAttribute(k),M.defaultChecked=I,M.checked=R?I:!1}}else e.removeAttribute(x);else A||(o||typeof $!="string")&&_.has(k)?(e[k]=$,k in s&&(s[k]=we)):typeof $!="function"&&$e(e,k,$)}}}return c}function Ka(e,t,r=[],n=[],i=[],a,s=!1,o=!1){Ji(i,r,n,l=>{var c=void 0,d={},h=e.nodeName===qa,w=!1;if(ba(()=>{var v=t(...l.map(p)),S=vl(e,c,v,a,s,o);if(w&&h){var f=e;"defaultValue"in v&&ja(f,v.defaultValue),"value"in v&&zt(f,v.value)}for(let m of Object.getOwnPropertySymbols(d))v[m]||Me(d[m]);for(let m of Object.getOwnPropertySymbols(v)){var g=v[m];m.description===Ys&&(!c||g!==c[m])&&(d[m]&&Me(d[m]),d[m]=De(()=>il(e,()=>g))),S[m]=g}c=S}),h){var _=e;di(()=>{var v=c;"defaultValue"in v&&ja(_,v.defaultValue),zt(_,v.value,!0),pr(_)})}w=!0})}function In(e){return e[En]??(e[En]={[Xa]:e.nodeName.includes("-"),[Ya]:e.namespaceURI===qi})}var Za=new Map;function Qa(e){var t=e.getAttribute("is")||e.nodeName,r=Za.get(t);if(r)return r;Za.set(t,r=new Set);for(var n,i=e,a=Element.prototype;a!==i;){n=Vi(i);for(var s in n)n[s].set&&s!=="innerHTML"&&s!=="textContent"&&s!=="innerText"&&r.add(s);i=Gn(i)}return r}function Ei(e,t){return e===t||(e==null?void 0:e[St])===t}function Ja(e=Jn(),t,r,n){var i=ve.r,a=U;return di(()=>{var s,o;return wa(()=>{s=o,o=[],Zt(()=>{Ei(r(...o),e)||(t(e,...o),s&&Ei(r(...s),e)&&t(null,...s))})}),()=>{let l=a;for(;l!==i&&l.parent!==null&&l.parent.f&Sn;)l=l.parent;const c=()=>{o&&Ei(r(...o),e)&&t(null,...o)},d=l.teardown;l.teardown=()=>{c(),d==null||d()}}}),e}function pl(e=!1){const t=ve,r=t.l.u;if(!r)return;let n=()=>ur(t.s);if(e){let i=0,a={};const s=Or(()=>{let o=!1;const l=t.s;for(const c in l)l[c]!==a[c]&&(a[c]=l[c],o=!0);return o&&i++,i});n=()=>p(s)}r.b.length&&Mo(()=>{es(t,n),Xn(r.b)}),Rr(()=>{const i=Zt(()=>r.m.map(Rs));return()=>{for(const a of i)typeof a=="function"&&a()}}),r.a.length&&Rr(()=>{es(t,n),Xn(r.a)})}function es(e,t){if(e.l.s)for(const r of e.l.s)p(r);t()}let Ln=!1;function hl(e){var t=Ln;try{return Ln=!1,[e(),Ln]}finally{Ln=t}}const _l={get(e,t){if(!e.exclude.includes(t))return p(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var n=U;try{nt(e.parent_effect),e.special[t]=_t({get[t](){return e.props[t]}},t,Yi)}finally{nt(n)}}return e.special[t](r),ca(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),ca(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ie(e,t){return new Proxy({props:e,exclude:t,special:{},version:Kt(0),parent_effect:U},_l)}const gl={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Gr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let i=e.props[n];Gr(i)&&(i=i());const a=jt(i,t);if(a&&a.set)return a.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Gr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const i=jt(n,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===St||t===Gi)return!1;for(let r of e.props)if(Gr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Gr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function ce(...e){return new Proxy({props:e},gl)}function _t(e,t,r,n){var A;var i=!Mr||(r&Hs)!==0,a=(r&Us)!==0,s=(r&Ws)!==0,o=n,l=!0,c=void 0,d=()=>s&&i?(c??(c=Or(n)),p(c)):(l&&(l=!1,o=s?Zt(n):n),o);let h;if(a){var w=St in e||Gi in e;h=((A=jt(e,t))==null?void 0:A.set)??(w&&t in e?x=>e[t]=x:void 0)}var _,v=!1;a?[_,v]=hl(()=>e[t]):_=e[t],_===void 0&&n!==void 0&&(_=d(),h&&(i&&so(),h(_)));var S;if(i?S=()=>{var x=e[t];return x===void 0?d():(l=!0,x)}:S=()=>{var x=e[t];return x!==void 0&&(o=void 0),x===void 0?o:x},i&&(r&Yi)===0)return S;if(h){var f=e.$$legacy;return(function(x,$){return arguments.length>0?((!i||!$||f||v)&&h($?S():x),x):S()})}var g=!1,m=((r&Fs)!==0?Or:ti)(()=>(g=!1,S()));a&&p(m);var k=U;return(function(x,$){if(arguments.length>0){const M=$?p(m):i&&a?ze(x):x;return E(m,M),g=!0,o!==void 0&&(o=M),x}return Lt&&g||(k.f&Pe)!==0?m.v:p(m)})}function Ai(e){ve===null&&Js(),Mr&&ve.l!==null?ml(ve).m.push(e):Rr(()=>{const t=Zt(e);if(typeof t=="function")return t})}function ml(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const yl="5";typeof window<"u"&&((ds=window.__svelte??(window.__svelte={})).v??(ds.v=new Set)).add(yl);const J=ze({ready:!1,cleanScreen:!1,panelOpen:!0,settingsOpen:!1,startupOpen:!0,focusSection:null,focusNonce:0,status:{}});function wl(e){J.panelOpen=!0,J.focusSection=e,J.focusNonce++}const je=ze({});function ts(e){try{return structuredClone(e)}catch{return JSON.parse(JSON.stringify(e))}}function ee(e){var t,r,n;if(e==null)return e;try{return((n=(r=(t=window.XRA)==null?void 0:t.i18n)==null?void 0:r.t)==null?void 0:n.call(r,e))??e}catch{return e}}function Ve(e,t){const r=e.split(".");let n=je;for(const i of r){if(n==null)return t;n=n[i]}return n===void 0?t:n}function bl(e){var r,n,i,a,s,o,l,c;const t=window.XRA;if(t){if(e.startsWith("background.")){(n=(r=t.background)==null?void 0:r.apply)==null||n.call(r);return}if(e==="ui.language"){(a=(i=t.i18n)==null?void 0:i.setLanguage)==null||a.call(i,je.ui.language);return}if(e==="ui.preview_wireframe"){typeof t.applyMocapWireframeVisibility=="function"&&t.applyMocapWireframeVisibility();return}if(e==="ui.mocap_view"){typeof t.applyMocapWireframeVisibility=="function"&&t.applyMocapWireframeVisibility();return}if(e.startsWith("performance.")){window.XRA_render_fps_limit=Number(je.performance.render_fps??60),window.XRA_gpu_preference=String(je.performance.gpu_preference||"default"),window.XRA_preserve_drawing_buffer=je.performance.preserve_drawing_buffer!==!1,window.XRA_antialias=je.performance.antialias!=="off",(o=(s=t.events)==null?void 0:s.emit)==null||o.call(s,"performance",je.performance);return}(c=(l=t.events)==null?void 0:l.emit)==null||c.call(l,"config-change",{path:e,value:Ve(e)})}}function at(e,t){var a,s;const r=window.XRA,n=e.split(".");let i=je;for(let o=0;o<n.length-1;o++)i[n[o]]==null&&(i[n[o]]={}),i=i[n[o]];if(i[n[n.length-1]]=t,r!=null&&r.config){let o=r.config;for(let l=0;l<n.length-1;l++)o[n[l]]==null&&(o[n[l]]={}),o=o[n[l]];o[n[n.length-1]]=t}bl(e);try{(s=(a=r==null?void 0:r.profileService)==null?void 0:a.save)==null||s.call(a)}catch{}}function rs(e,t,r){return new Promise((n,i)=>{const a=setTimeout(()=>i(new Error(`${r} timed out after ${t} ms`)),t);Promise.resolve(e).then(s=>{clearTimeout(a),n(s)},s=>{clearTimeout(a),i(s)})})}async function ns({timeout:e=12e3,dataTimeout:t=8e3}={}){var n,i,a;const r=(n=window.XRA)==null?void 0:n.nativeBridge;if(!(r!=null&&r.startNativeStreamer))throw new Error("native bridge unavailable");try{await rs(r.startNativeStreamer(),e,"Camera start");const s=performance.now()+t;for(;performance.now()<s;){if((i=r.cameraDataReady)!=null&&i.call(r))return!0;await new Promise(o=>setTimeout(o,120))}return!0}catch(s){try{await((a=r.forceStopCamera)==null?void 0:a.call(r))}catch{}throw s}}async function xl({timeout:e=8e3}={}){var r,n;const t=(r=window.XRA)==null?void 0:r.nativeBridge;if(t!=null&&t.stopNativeStreamer)try{await rs(t.stopNativeStreamer(),e,"Camera stop")}catch(i){try{await((n=t.forceStopCamera)==null?void 0:n.call(t))}catch{}throw i}}function zn(){var e,t,r;J.cleanScreen=!J.cleanScreen,document.body.classList.toggle("xra-total-clean-screen",J.cleanScreen);try{(r=(t=(e=window.XRA)==null?void 0:e.ui)==null?void 0:t.setHidden)==null||r.call(t,J.cleanScreen)}catch{}}function Sl(){var e;try{Object.assign(je,ts(((e=window.XRA)==null?void 0:e.config)||{}))}catch{}}function is(){var e;try{const t=(e=window.SA_bridge)==null?void 0:e.backend;t&&typeof t.status=="function"&&(J.status=t.status()||{})}catch{}}function kl(){const e=()=>window.XRA&&window.XRA.config?(Object.assign(je,ts(window.XRA.config)),J.ready=!0,is(),window.addEventListener("keydown",t=>{t.key==="Escape"&&J.cleanScreen&&(t.preventDefault(),zn())},!0),!0):!1;if(!e()){const t=setInterval(()=>{e()&&clearInterval(t)},200)}}const $l={camera:{title:"Camera",icon:"Camera"},devices:{title:"Devices",icon:"SlidersHorizontal"},pose_model:{title:"Pose model",icon:"PersonStanding"},performance:{title:"Performance",icon:"Zap"},tracking:{title:"Motion capture",icon:"Activity"},body:{title:"Body",icon:"PersonStanding"},collider:{title:"Body collider",icon:"Shield"},lip:{title:"Audio & Lip-sync",icon:"Mic"},background:{title:"Background",icon:"Image"},avatar:{title:"Character position (avatar only)",icon:"User"},second_avatar:{title:"Remote avatar (Studio Link)",icon:"Globe"},stage:{title:"3D Stage & Environment",icon:"Landmark"},recorder:{title:"Recording / capture",icon:"Video"},visual_effects:{title:"Visual effects",icon:"Sparkles"},debug:{title:"Diagnostics",icon:"Bug"},ui:{title:"UI & overlays",icon:"Monitor"}},as=["performance","tracking","body","collider","lip","background","stage","avatar","second_avatar","recorder","visual_effects","debug","ui","camera","devices","pose_model"],El=new Set(["left_settings","_custom_","_excluded_"]),Al=new Set(["camera.view_presets","camera.selected_view_preset","ui.preview_video","ui.preview_wireframe","ui.preview_debug","performance.auto_last_result","recorder.output_dir"]);function ss(e){const t=String(e).replace(/_/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").trim();return t.charAt(0).toUpperCase()+t.slice(1)}const Ml={"ui.language":{type:"select",options:()=>{var e,t;return((t=(e=window.XRA)==null?void 0:e.i18n)==null?void 0:t.LANGUAGES)||[["en","English"]]}},"background.mode":{type:"select",options:[["color","Color"],["image","Image"],["none","None (transparent · OBS)"]]},"background.color":{type:"color"},"background.path":{type:"text"},"ui.mocap_view":{type:"select",label:"Mocap window",options:[["off","Off"],["both","Webcam + skeleton"],["wireframe","Skeleton only"],["video","Webcam only"]]},"ui.mocap_visibility":{type:"select",label:"Mocap window visibility",options:[["always","Always on (black while idle)"],["auto","Auto (hide when tracking is off)"]]},"performance.tracking_pipeline":{type:"select",label:"Tracking mode",options:[["FULL_BODY","Full Body"],["FACE","Face only"],["UPPER_BODY","Upper body"]]},"performance.render_resolution":{type:"select",options:[["720p","720p (HD · GPU Saving)"],["1080p","1080p (Full HD · Recommended)"],["1440p","1440p (2K · High resolution)"]]},"performance.render_fps":{type:"slider",min:15,max:240,step:1},"performance.gpu_preference":{type:"select",label:"Graphics card (GPU)",options:[["default","Default"],["high-performance","Dedicated GPU (High Performance)"],["low-power","Integrated GPU (Low Power)"]]},"performance.shadows":{type:"select",options:[["auto","Auto"],["on","Enabled"],["off","Disabled (GPU saving)"]]},"performance.antialias":{type:"select",label:"Anti-Aliasing (AA)",options:[["auto","Enabled (Hardware MSAA · Recommended)"],["off","Disabled"]]},"performance.spring_bone":{type:"select",label:"Hair/cloth physics (Spring Bone)",options:[["full","Full (every frame)"],["half","Half (1 frame out of 2 · Saving)"],["off","Off"]]},"performance.infer_mode":{type:"select",options:[["native","Native (Auto)"],["640x360","640×360 (Recommended · 30 FPS smooth)"],["640x480","640×480 (Standard 4:3 format)"],["1280x720","1280×720 (HD 720p · High precision)"]]},"performance.pose_fps":{type:"slider",min:5,max:30,step:1},"performance.hand_fps":{type:"slider",min:5,max:30,step:1},"performance.min_tracking_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_pose_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_face_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_joint_confidence":{type:"slider",min:.05,max:1,step:.05},"tracking.hand_recovery_mode":{type:"select",options:[["normal","Normal"],["aggressive","Aggressive"],["off","Off"]]},"tracking.hand_detection_sensitivity":{type:"select",options:[["high","High"],["normal","Normal"],["low","Low"]]},"tracking.stabilize_hand_percent":{type:"slider",min:0,max:100,step:1},"tracking.stabilize_arm":{type:"slider",min:0,max:100,step:1},"tracking.stabilize_arm_time":{type:"slider",min:0,max:2,step:.05},"tracking.native_smoothing":{type:"slider",min:0,max:1,step:.01},"tracking.body_bend_reduction":{type:"slider",min:0,max:1,step:.01},"tracking.upper_body_guard_strength":{type:"slider",min:0,max:1,step:.01},"tracking.guard_jump_deg":{type:"slider",min:5,max:120,step:1},"tracking.guard_hold_ms":{type:"slider",min:0,max:2e3,step:10},"tracking.guard_reacquire_deg":{type:"slider",min:5,max:120,step:1},"tracking.adaptive_smoothing_strength":{type:"slider",min:0,max:1,step:.01},"tracking.guard_confidence_min":{type:"slider",min:0,max:1,step:.01},"tracking.guard_release_ms":{type:"slider",min:0,max:2e3,step:10},"tracking.guard_mode":{type:"select",options:[["off","Off"],["auto","Auto"]]},"tracking.desk_torso_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_hips_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_legs_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_max_yaw_deg":{type:"slider",min:0,max:90,step:1},"tracking.desk_max_pitch_deg":{type:"slider",min:0,max:90,step:1},"tracking.desk_max_roll_deg":{type:"slider",min:0,max:90,step:1},"body.anchor_strength":{type:"slider",min:0,max:1,step:.01},"body.transition_ms":{type:"slider",min:0,max:2e3,step:10},"avatar.offset_x":{type:"slider",min:-5,max:5,step:.01},"avatar.offset_y":{type:"slider",min:-5,max:5,step:.01},"avatar.offset_z":{type:"slider",min:-5,max:5,step:.01},"avatar.rotation_y":{type:"slider",min:-180,max:180,step:1},"second_avatar.offset_x":{type:"slider",min:-20,max:20,step:.1},"second_avatar.offset_y":{type:"slider",min:-10,max:10,step:.1},"second_avatar.offset_z":{type:"slider",min:-10,max:10,step:.1},"second_avatar.rotation_y":{type:"slider",min:-180,max:180,step:1},"stage.scale":{type:"slider",min:.1,max:5,step:.01},"stage.rotation_x":{type:"slider",min:-180,max:180,step:1},"stage.rotation_y":{type:"slider",min:-180,max:180,step:1},"stage.rotation_z":{type:"slider",min:-180,max:180,step:1},"stage.offset_x":{type:"slider",min:-10,max:10,step:.05},"stage.offset_y":{type:"slider",min:-10,max:10,step:.05},"stage.offset_z":{type:"slider",min:-10,max:10,step:.05},"stage.scene_zoom":{type:"slider",min:.5,max:3,step:.01},"stage.lights_intensity":{type:"slider",min:0,max:3,step:.05},"collider.preset":{type:"select",options:[["CUSTOM","Custom"],["NONE","None"]]},"collider.reaction":{type:"select",options:[["z_push","Z push"],["bounce","Bounce"],["block","Block"]]},"collider.head":{type:"slider",min:0,max:200,step:1},"collider.chest":{type:"slider",min:0,max:200,step:1},"collider.waist":{type:"slider",min:0,max:200,step:1},"collider.hip":{type:"slider",min:0,max:200,step:1},"collider.front_clearance":{type:"slider",min:0,max:50,step:1},"lip.analysis_fps":{type:"slider",min:5,max:60,step:1},"lip.fft_size":{type:"select",label:"FFT size",options:[["256","256"],["512","512"],["1024","1024"],["2048","2048"]]},"lip.mic_mix":{type:"slider",min:0,max:1,step:.01},"lip.threshold":{type:"slider",min:0,max:.2,step:.001},"lip.response_gain":{type:"slider",min:0,max:3,step:.05},"lip.vowel_emphasis":{type:"slider",min:0,max:3,step:.05},"recorder.mode":{type:"select",label:"Recording source",options:[["video_audio","Video + Audio"],["video","Video only"],["audio","Audio only"]]},"recorder.audio_only_variant":{type:"select",label:"Audio only mode",options:[["both","Processed + RAW"],["processed","Processed"],["raw","RAW"]]},"recorder.capture_source":{type:"select",label:"Output source",options:[["classic_v74","Classic output · recommended"],["clean_scene","Clean scene output · experimental (no UI)"],["native_xr","XR native video only · fallback"]]},"recorder.output_format":{type:"select",options:[["webm","WebM"],["mp4","MP4"]]},"recorder.audio_profile":{type:"select",options:[["podcast","Podcast"],["call","Call (Browser echo/noise filters)"]]},"recorder.hardware_encode":{type:"select",options:[["auto","Auto"],["on","On"],["off","Off (CPU)"]]},"recorder.width":{type:"slider",min:320,max:3840,step:2},"recorder.height":{type:"slider",min:240,max:2160,step:2},"recorder.fps":{type:"slider",min:15,max:60,step:1},"recorder.gate_threshold_db":{type:"slider",min:-80,max:-5,step:.5},"recorder.gate_hold_ms":{type:"slider",min:0,max:1e3,step:10},"recorder.gate_release_ms":{type:"slider",min:0,max:1e3,step:10},"recorder.video_bps":{type:"slider",min:5e5,max:2e7,step:1e5},"recorder.audio_bps":{type:"slider",min:32e3,max:32e4,step:8e3},"recorder.segment_minutes":{type:"select",options:[["0","Off"],["30","Every 30 min"],["60","Every 60 min"]]},"recorder.raw_audio_format":{type:"select",options:[["flac","FLAC (lossless)"],["wav","WAV (large)"]]},"recorder.filename":{type:"text"},"camera.optimized":{type:"toggle"},"camera.width":{type:"slider",min:160,max:1920,step:2},"camera.height":{type:"slider",min:120,max:1080,step:2},"camera.fps":{type:"slider",min:5,max:60,step:1}};function Tl(e){const t=[];for(const[r,n]of Object.entries(e||{})){if(El.has(r)||!n||typeof n!="object"||Array.isArray(n))continue;const i=$l[r]||{},a=[];for(const[s,o]of Object.entries(n)){const l=`${r}.${s}`;if(Al.has(l))continue;const c=Ml[l]||{};if(c.hidden||o!==null&&typeof o=="object")continue;const d=c.type||(typeof o=="boolean"?"toggle":typeof o=="number"?"number":"text");a.push({type:d,path:l,label:c.label||ss(s),min:c.min,max:c.max,step:c.step,options:c.options})}a.length&&t.push({id:r,title:i.title||ss(r),icon:i.icon||"⚙",controls:a})}return t.sort((r,n)=>{const i=as.indexOf(r.id),a=as.indexOf(n.id);return(i<0?999:i)-(a<0?999:a)}),t}var Nl=ge("<option> </option>"),Ol=ge("<select></select>"),Pl=ge("<select><option> </option><option> </option></select>"),Cl=ge('<input type="range"/> <span class="xra-val"> </span>',1),Rl=ge('<input type="checkbox"/>'),Il=ge('<input type="color"/>'),Ll=ge('<input type="number"/>'),zl=ge('<input type="text"/>'),Dl=ge('<label class="xra-row"><span class="xra-row-label"> </span> <!></label>');function Bl(e,t){Yt(t,!0);const r=tt(()=>typeof t.control.options=="function"?t.control.options():t.control.options||[]),n=f=>f===!1?"off":"auto",i=f=>f==="off"?!1:null;var a=Dl(),s=D(a),o=Y(s,!0),l=C(s,2);{var c=f=>{var g=Ol();Qt(g,21,()=>p(r),Da,(k,A)=>{var x=Nl(),$=Y(x,!0),M={};_e(R=>{q($,R),M!==(M=p(A)[0])&&(x.value=(x.__value=M)??"")},[()=>ee(p(A)[1])]),N(k,x)});var m;pr(g),_e(k=>{m!==(m=k)&&(g.value=(g.__value=m)??"",zt(g,m))},[()=>Ve(t.control.path)]),Z("change",g,k=>at(t.control.path,k.currentTarget.value)),N(f,g)},d=f=>{var g=Pl(),m=D(g),k=Y(m,!0);m.value=m.__value="auto";var A=C(m),x=Y(A,!0);A.value=A.__value="off";var $;pr(g),_e((M,R,I)=>{q(k,M),q(x,R),$!==($=I)&&(g.value=(g.__value=$)??"",zt(g,$))},[()=>ee("Auto (follow tracking)"),()=>ee("Off"),()=>n(Ve(t.control.path))]),Z("change",g,M=>at(t.control.path,i(M.currentTarget.value))),N(f,g)},h=f=>{var g=Cl(),m=X(g),k=C(m,2),A=Y(k,!0);_e((x,$)=>{$e(m,"min",t.control.min),$e(m,"max",t.control.max),$e(m,"step",t.control.step),Rn(m,x),q(A,$)},[()=>Ve(t.control.path,t.control.min),()=>Ve(t.control.path)]),Z("input",m,x=>at(t.control.path,Number(x.currentTarget.value))),N(f,g)},w=f=>{var g=Rl();_e(m=>dl(g,m),[()=>!!Ve(t.control.path)]),Z("change",g,m=>at(t.control.path,m.currentTarget.checked)),N(f,g)},_=f=>{var g=Il();_e(m=>Rn(g,m),[()=>Ve(t.control.path)]),Z("input",g,m=>at(t.control.path,m.currentTarget.value)),N(f,g)},v=f=>{var g=Ll();_e(m=>{$e(g,"step",t.control.step||"any"),Rn(g,m)},[()=>Ve(t.control.path,0)]),Z("input",g,m=>at(t.control.path,Number(m.currentTarget.value))),N(f,g)},S=f=>{var g=zl();_e(m=>Rn(g,m),[()=>Ve(t.control.path,"")]),Z("change",g,m=>at(t.control.path,m.currentTarget.value)),N(f,g)};ht(l,f=>{t.control.type==="select"?f(c):t.control.type==="tristate"?f(d,1):t.control.type==="slider"?f(h,2):t.control.type==="toggle"?f(w,3):t.control.type==="color"?f(_,4):t.control.type==="number"?f(v,5):t.control.type==="text"&&f(S,6)})}_e(f=>q(o,f),[()=>ee(t.control.label)]),N(e,a),qt()}dr(["change","input"]),fo();/**
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
 */const Vl={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
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
 */const Fl=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
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
 */const os=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();var Hl=jo("<svg><!><!></svg>");function ue(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]),n=ie(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Yt(t,!1);let i=_t(t,"name",8,void 0),a=_t(t,"color",8,"currentColor"),s=_t(t,"size",8,24),o=_t(t,"strokeWidth",8,2),l=_t(t,"absoluteStrokeWidth",8,!1),c=_t(t,"iconNode",24,()=>[]);pl();var d=Hl();Ka(d,(_,v,S)=>({...Vl,..._,...n,width:s(),height:s(),stroke:a(),"stroke-width":v,class:S}),[()=>Fl(n)?void 0:{"aria-hidden":"true"},()=>(ur(l()),ur(o()),ur(s()),Zt(()=>l()?Number(o())*24/Number(s()):o())),()=>(ur(os),ur(i()),ur(r),Zt(()=>os("lucide-icon","lucide",i()?`lucide-${i()}`:"",r.class)))]);var h=D(d);Qt(h,1,c,Da,(_,v)=>{var S=tt(()=>Ui(p(v),2));let f=()=>p(S)[0],g=()=>p(S)[1];var m=Q(),k=X(m);nl(k,f,!0,(A,x)=>{Ka(A,()=>({...g()}))}),N(_,m)});var w=C(h);oe(w,t,"default",{}),N(e,d),qt()}function Ul(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];ue(e,ce({name:"camera"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Wl(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 5H3"}],["path",{d:"M12 19H3"}],["path",{d:"M14 3v4"}],["path",{d:"M16 17v4"}],["path",{d:"M21 12h-9"}],["path",{d:"M21 19h-5"}],["path",{d:"M21 5h-7"}],["path",{d:"M8 10v4"}],["path",{d:"M8 12H3"}]];ue(e,ce({name:"sliders-horizontal"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function jl(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"5",r:"1"}],["path",{d:"m9 20 3-6 3 6"}],["path",{d:"m6 8 6 2 6-2"}],["path",{d:"M12 10v4"}]];ue(e,ce({name:"person-standing"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Gl(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];ue(e,ce({name:"zap"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Xl(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]];ue(e,ce({name:"activity"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Yl(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];ue(e,ce({name:"shield"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function ql(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 19v3"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3"}]];ue(e,ce({name:"mic"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Kl(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]];ue(e,ce({name:"image"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Zl(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 18v-7"}],["path",{d:"M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"}],["path",{d:"M14 18v-7"}],["path",{d:"M18 18v-7"}],["path",{d:"M3 22h18"}],["path",{d:"M6 18v-7"}]];ue(e,ce({name:"landmark"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Ql(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];ue(e,ce({name:"user"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Jl(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];ue(e,ce({name:"globe"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function ec(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]];ue(e,ce({name:"video"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function tc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];ue(e,ce({name:"sparkles"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function rc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 20v-9"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97"}],["path",{d:"M22 13h-4"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97"}],["path",{d:"M6 13H2"}],["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13"}]];ue(e,ce({name:"bug"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function nc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]];ue(e,ce({name:"monitor"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function ic(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"10",r:"8"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 22h10"}],["path",{d:"M12 22v-4"}]];ue(e,ce({name:"webcam"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function ls(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}]];ue(e,ce({name:"circle"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function ac(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];ue(e,ce({name:"square"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function sc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]];ue(e,ce({name:"eye"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function oc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}],["path",{d:"m2 2 20 20"}]];ue(e,ce({name:"eye-off"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function lc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];ue(e,ce({name:"folder-open"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function cc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];ue(e,ce({name:"info"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function uc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ue(e,ce({name:"x"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function fc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];ue(e,ce({name:"settings"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function dc(e,t){const r=ie(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ue(e,ce({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Ge(e,t){const r={Camera:Ul,SlidersHorizontal:Wl,PersonStanding:jl,Zap:Gl,Activity:Xl,Shield:Yl,Mic:ql,Image:Kl,Landmark:Zl,User:Ql,Globe:Jl,Video:ec,Sparkles:tc,Bug:rc,Monitor:nc,Webcam:ic,Circle:ls,Square:ac,Eye:sc,EyeOff:oc,FolderOpen:lc,Info:cc,X:uc,Settings:fc,RefreshCw:dc};let n=_t(t,"name",3,"Circle"),i=_t(t,"size",3,16),a=_t(t,"strokeWidth",3,2),s=_t(t,"class",3,"");const o=tt(()=>r[n()]??ls);var l=Q(),c=X(l);rl(c,()=>p(o),(d,h)=>{h(d,{get size(){return i()},get"stroke-width"(){return a()},get class(){return s()}})}),N(e,l)}var vc=ge('<div class="xra-sec-body"></div>'),pc=ge('<details class="xra-sec"><summary><span class="xra-sec-title"><!> <span> </span></span> <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></summary> <!></details>');function hc(e,t){Yt(t,!0);const r="ui.sections_open";let n=G(ze(Zt(()=>{var f;return((f=Ve(r,{}))==null?void 0:f[t.section.id])??!1}))),i;function a(){E(n,!p(n)),at(`${r}.${t.section.id}`,p(n))}Rr(()=>{J.focusNonce,!(J.focusSection!==t.section.id||!J.panelOpen)&&(E(n,!0),at(`${r}.${t.section.id}`,!0),requestAnimationFrame(()=>i==null?void 0:i.scrollIntoView({block:"nearest",behavior:"smooth"})))});var s=pc(),o=D(s),l=D(o),c=D(l);Ge(c,{get name(){return t.section.icon},size:15,class:"xra-sec-icon"});var d=C(c,2),h=Y(d,!0),w=C(l,2);let _;var v=C(o,2);{var S=f=>{var g=vc();Qt(g,21,()=>t.section.controls,m=>m.path,(m,k)=>{var A=Q(),x=X(A);{var $=R=>{Bl(R,{get control(){return p(k)}})},M=tt(()=>!p(k).when||p(k).when(je));ht(x,R=>{p(M)&&R($)})}N(m,A)}),N(f,g)};ht(v,f=>{p(n)&&f(S)})}Ja(s,f=>i=f,()=>i),_e(f=>{s.open=p(n),q(h,f),_=Ce(w,0,"xra-sec-chevron",null,_,{open:p(n)})},[()=>ee(t.section.title)]),Z("click",o,f=>{f.preventDefault(),a()}),N(e,s),qt()}dr(["click"]);var dn=ge('<option class="svelte-x8svx4"> </option>'),_c=ge('<div class="warn svelte-x8svx4"> </div>'),gc=ge('<div class="xra-startup svelte-x8svx4"><div class="card svelte-x8svx4"><div class="head svelte-x8svx4"><div class="svelte-x8svx4"><h2 class="svelte-x8svx4">XR Animator</h2> <div class="sub svelte-x8svx4"> </div></div></div> <div class="grid svelte-x8svx4"><label class="field svelte-x8svx4"><div class="sub svelte-x8svx4">Language</div> <select class="svelte-x8svx4"></select></label> <label class="field svelte-x8svx4"><div class="sub svelte-x8svx4">Master preset</div> <select class="svelte-x8svx4"></select></label></div> <div class="status svelte-x8svx4"> </div> <section class="camera svelte-x8svx4"><div class="camera-head svelte-x8svx4"><div class="camera-title svelte-x8svx4"> </div> <div> </div></div> <div class="camera-row svelte-x8svx4"><select class="svelte-x8svx4"><!></select> <button type="button" class="action svelte-x8svx4"><!></button></div> <!></section> <div class="sub bg svelte-x8svx4"> </div> <div class="avatar svelte-x8svx4"><div class="sub svelte-x8svx4"> </div> <button type="button" class="action svelte-x8svx4"> </button></div> <div class="foot svelte-x8svx4"><button type="button" class="action primary confirm svelte-x8svx4"> </button></div></div></div>');function mc(e,t){Yt(t,!0);const r=()=>window.XRA,n=y=>ee(y),i=["AUTO","ECO","LOW","BALANCED","QUALITY","HIGH","MAX","CUSTOM"];function a(){var y,b,T;try{(T=(b=(y=r())==null?void 0:y.profileService)==null?void 0:b.save)==null||T.call(b,0)}catch{}}const s=(()=>{var b,T;const y=(T=(b=r())==null?void 0:b.i18n)==null?void 0:T.LANGUAGES;return Array.isArray(y)&&y.length?y:[["auto","Auto / System"],["en","English"],["it","Italiano"]]})();let o=G("auto"),l=G("CUSTOM"),c=G(""),d=G("default"),h=G(ze([])),w=G(!1),_=G(""),v=G(!1),S=G(""),f=G(""),g=G("Loading avatar…"),m=G(!0),k=G(!1),A=G(!1),x=G(!1),$=G(!1),M=0,R=[];async function I(y){const b=r();if(y=String(y||"CUSTOM").toUpperCase(),y==="CUSTOM"){b.config.performance.master_preset="CUSTOM",a(),E(c,"CUSTOM · ready");return}if(y==="AUTO"){E(c,"Benchmarking…");const T=await b.performance.benchmarkHardwareOnly();E(c,`AUTO → ${T.preset} (${T.fps.toFixed(1)} fps)`),await b.performance.applyPresetSafe(T.preset),b.config.performance.master_preset="AUTO",b.config.performance.auto_last_result=T,a();return}E(c,`${y}: applying…`),await b.performance.applyPresetSafe(y),E(c,`${y} · applied`)}function te(y=""){var F,W,re;const b=(F=r())==null?void 0:F.nativeBridge,T=((W=b==null?void 0:b.activeCamera)==null?void 0:W.call(b))||{},O=!!((re=b==null?void 0:b.cameraRunning)!=null&&re.call(b));E(v,O),E(S,y||(O?`${n("ON")} · ${T.label||n("Default camera")}`:n("OFF")),!0)}async function me(y=!1){var T,O,F;const b=(T=r())==null?void 0:T.nativeBridge;if(b!=null&&b.enumerateCameras){E(x,!0);try{const W=await b.enumerateCameras({requestPermission:y}),re=b.activeCamera()||{};E(h,(W||[]).map(Te=>({deviceId:Te.deviceId,label:Te.label})),!0);const he=re.deviceId||((O=je.devices)==null?void 0:O.camera_device_id)||"";E(_,p(h).some(Te=>Te.deviceId===he)?he:((F=p(h)[0])==null?void 0:F.deviceId)||"",!0),E(w,!0),te()}catch{E(w,!0),te(n("Camera unavailable"))}finally{E(x,!1)}}}async function Fe(y){var F,W;const b=(F=r())==null?void 0:F.nativeBridge,T=((W=y==null?void 0:y.currentTarget)==null?void 0:W.value)??p(_),O=p(h).find(re=>re.deviceId===T);if(O){E(x,!0);try{const re={deviceId:O.deviceId,label:O.label};b.cameraRunning()?await b.switchCamera(re):await b.setCameraPreference(re),te()}catch(re){te("Error · "+re.message)}finally{E(x,!1)}}}function He(){var T,O,F,W,re,he,Te,Ue;const y=(F=(O=(T=r())==null?void 0:T.xraBackend)==null?void 0:O.snapshot)==null?void 0:F.call(O),b=(y==null?void 0:y.capture)||((Ue=(Te=(he=(re=(W=window.SA_bridge)==null?void 0:W.backend)==null?void 0:re.status)==null?void 0:he.call(re))==null?void 0:Te.backend)==null?void 0:Ue.capture);if(b!=null&&b.camera_busy){const Pt=(b.busy_processes&&b.busy_processes.length?b.busy_processes:b.busy_process?[b.busy_process]:[]).filter(Sr=>!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(String(Sr).trim()));if(Pt.length)return{busy:!0,proc:Pt.join(", ")}}if(b!=null&&b.last_error&&b.last_error.includes("Webcam occupata")){const be=b.last_error.match(/Webcam occupata da:\s*([^.]+)/i),Pt=be?be[1].trim():"";if(!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(Pt))return{busy:!0,proc:b.last_error}}return{busy:!1,proc:""}}function Le(){var y,b,T,O,F,W,re,he,Te;if(typeof((b=(y=r())==null?void 0:y.nativeBridge)==null?void 0:b.isAvatarReady)=="function")return r().nativeBridge.isAvatarReady();if((T=window.MMD_SA)!=null&&T.MMD_started){const Ue=(W=(F=(O=window.MMD_SA)==null?void 0:O.THREEX)==null?void 0:F.get_model)==null?void 0:W.call(F,0);let be=Ue;if((Ue==null?void 0:Ue.type)==="MMD_dummy")try{be=Ue.model||null}catch{be=null}const Pt=((re=be==null?void 0:be.model)==null?void 0:re.scene)||(be==null?void 0:be.mesh)||(be==null?void 0:be.scene)||null;if(be&&!(Ue!=null&&Ue.loading)&&!be.loading&&!((Te=(he=window.MMD_SA)==null?void 0:he.THREEX)!=null&&Te._loading_model)&&Pt)return Pt.visible!==!1}return!1}function yt(){var b,T,O;const y=(b=r())==null?void 0:b.xraBackend;return!y||!y.active?!0:!!((O=(T=y.snapshot)==null?void 0:T.call(y))!=null&&O.ready)}function Ze(){if(p($)||!J.startupOpen)return;const y=He();E(f,y.busy?`Webcam in use by another application (${y.proc}). Close it to start tracking.`:"",!0),Le()?yt()?y.busy?(E(m,!0),E(g,n("Camera busy…"),!0)):p(k)?E(m,!0):(E(m,!1),E(g,"START")):(E(m,!0),E(g,n("Connecting to backend…"),!0)):(E(m,!0),E(g,n("Loading avatar…"),!0))}async function lt(y){var T,O,F;const b=((T=y==null?void 0:y.currentTarget)==null?void 0:T.value)??p(l);E(l,b,!0),E(A,!0);try{await I(b),r().events.emit("state",{path:"performance.master_preset",value:r().config.performance.master_preset}),Sl()}catch(W){console.error("[XRA START]",W),E(c,"Preset error: "+W.message)}finally{E(A,!1),(F=(O=r().ui)==null?void 0:O.refresh)==null||F.call(O)}}function wt(y){var b,T,O,F;E(o,((b=y==null?void 0:y.currentTarget)==null?void 0:b.value)??p(o),!0),(F=(O=(T=r())==null?void 0:T.i18n)==null?void 0:O.setLanguage)==null||F.call(O,p(o))}async function ke(){var y,b;try{await((b=(y=r().nativeBridge)==null?void 0:y.openVrmPicker)==null?void 0:b.call(y))}catch(T){r().toast("VRM loader: "+T.message,"error",4500)}}async function Ot(y=!1){var T,O,F,W,re,he;if(p($)||p(m))return;E($,!0),M&&(clearInterval(M),M=0),E(k,!0),E(g,"Starting…");const b=r();if(a(),J.startupOpen=!1,(O=(T=b.ui)==null?void 0:T.refresh)==null||O.call(T),y)try{typeof b.whenNativeReady=="function"&&await b.whenNativeReady(15e3),(F=b.xraBackend)!=null&&F.waitUntilReady&&await b.xraBackend.waitUntilReady(6e3).catch(()=>{}),await ns()}catch(Te){(re=(W=globalThis.XRA_CAMERA_OWNERSHIP)==null?void 0:W.isOwnershipError)!=null&&re.call(W,Te)||(console.warn("[XRA START]","Auto-starting camera on START failed",Te),(he=b.toast)==null||he.call(b,"Starting camera: "+Te.message,"warn",5e3))}}Ai(()=>{var b,T,O,F,W,re,he,Te,Ue,be,Pt,Sr,ys,ws,bs,xs,Ss,Un,ks,$s,Es,As;const y=r();E(c,n("Ready."),!0),E(o,((T=(b=y==null?void 0:y.config)==null?void 0:b.ui)==null?void 0:T.language)||"auto",!0),E(l,((F=(O=y==null?void 0:y.config)==null?void 0:O.performance)==null?void 0:F.master_preset)==="MINIMAL"?"ECO":((re=(W=y==null?void 0:y.config)==null?void 0:W.performance)==null?void 0:re.master_preset)||"CUSTOM",!0),E(d,((Te=(he=y==null?void 0:y.config)==null?void 0:he.background)==null?void 0:Te.path)||((be=(Ue=y==null?void 0:y.config)==null?void 0:Ue.background)==null?void 0:be.color)||"default",!0);try{const Ct=(ys=(Sr=(Pt=window.SA_bridge)==null?void 0:Pt.backend)==null?void 0:Sr.status)==null?void 0:ys.call(Sr),Wn=(bs=(ws=window.System)==null?void 0:ws._browser)==null?void 0:bs.camera;(Ss=(xs=Ct==null?void 0:Ct.backend)==null?void 0:xs.capture)!=null&&Ss.running&&!(Wn!=null&&Wn.running)&&((ks=(Un=window.SA_bridge.backend)==null?void 0:Un.stop)==null||ks.call(Un).catch(()=>{}))}catch{}te(),setTimeout(()=>me(!1),100),M=setInterval(Ze,300),window.addEventListener("MMDStarted",Ze),($s=y.xraBackend)!=null&&$s.onStatus&&y.xraBackend.onStatus(Ze),Ze(),(As=(Es=y.whenNativeReady)==null?void 0:Es.call(y))==null||As.then(()=>{J.startupOpen&&me(!1)});for(const Ct of["camera-started","camera-stopped","camera-switched"])R.push(y.events.on(Ct,()=>{J.startupOpen&&me(!1)}));for(const Ct of["avatar-loading","avatar-changed","avatar-ready"])R.push(y.events.on(Ct,()=>Ze()));return()=>{M&&clearInterval(M),window.removeEventListener("MMDStarted",Ze);for(const Ct of R)try{Ct()}catch{}R=[]}});var wr=gc(),Ur=D(wr),br=D(Ur),fe=D(br),Ft=C(D(fe),2),xr=Y(Ft,!0),Ht=C(br,2),Wr=D(Ht),P=C(D(Wr),2);Qt(P,21,()=>s,([y,b])=>y,(y,b)=>{var T=tt(()=>Ui(p(b),2));let O=()=>p(T)[0],F=()=>p(T)[1];var W=dn(),re=Y(W,!0),he={};_e(()=>{q(re,F()),he!==(he=O())&&(W.value=(W.__value=he)??"")}),N(y,W)});var V;pr(P);var ae=C(Wr,2),se=C(D(ae),2);Qt(se,20,()=>i,y=>y,(y,b)=>{var T=dn(),O=Y(T,!0),F={};_e(()=>{q(O,b),F!==(F=b)&&(T.value=(T.__value=F)??"")}),N(y,T)});var Ee;pr(se);var ct=C(Ht,2),bt=Y(ct,!0),Ut=C(ct,2),Wt=D(Ut),Fn=D(Wt),Tc=Y(Fn,!0),vs=C(Fn,2);let ps;var Nc=Y(vs,!0),hs=C(Wt,2),rr=D(hs),Oc=D(rr);{var Pc=y=>{var b=dn(),T=Y(b,!0);b.value=b.__value="",_e(O=>q(T,O),[()=>n("Loading cameras…")]),N(y,b)},Cc=y=>{var b=dn(),T=Y(b,!0);b.value=b.__value="",_e(O=>q(T,O),[()=>n("No cameras found")]),N(y,b)},Rc=y=>{var b=Q(),T=X(b);Qt(T,17,()=>p(h),O=>O.deviceId,(O,F)=>{var W=dn(),re=Y(W,!0),he={};_e(()=>{q(re,p(F).label),he!==(he=p(F).deviceId)&&(W.value=(W.__value=he)??"")}),N(O,W)}),N(y,b)};ht(Oc,y=>{p(w)?p(h).length?y(Rc,-1):y(Cc,1):y(Pc)})}var Hn;pr(rr);var mn=C(rr,2),Ic=D(mn);Ge(Ic,{name:"RefreshCw",size:14});var Lc=C(hs,2);{var zc=y=>{var b=_c(),T=Y(b,!0);_e(()=>q(T,p(f))),N(y,b)};ht(Lc,y=>{p(f)&&y(zc)})}var _s=C(Ut,2),Dc=Y(_s),gs=C(_s,2),ms=D(gs),Bc=Y(ms,!0),Ti=C(ms,2),Vc=Y(Ti,!0),Fc=C(gs,2),Ni=D(Fc),Hc=Y(Ni,!0);_e((y,b,T,O,F,W)=>{q(xr,y),P.disabled=p($),V!==(V=p(o))&&(P.value=(P.__value=V)??"",zt(P,V)),se.disabled=p(A)||p($),Ee!==(Ee=p(l))&&(se.value=(se.__value=Ee)??"",zt(se,Ee)),q(bt,p(c)),q(Tc,b),ps=Ce(vs,1,"camera-state svelte-x8svx4",null,ps,{on:p(v)}),q(Nc,p(S)),rr.disabled=p(x),Hn!==(Hn=p(_))&&(rr.value=(rr.__value=Hn)??"",zt(rr,Hn)),$e(mn,"title",T),$e(mn,"aria-label",O),mn.disabled=p(x),q(Dc,`Background: ${p(d)??""}`),q(Bc,F),Ti.disabled=p($),q(Vc,W),Ni.disabled=p(m)||p(k),q(Hc,p(g))},[()=>n("Quick setup · changes apply immediately."),()=>n("Webcam"),()=>n("Refresh cameras"),()=>n("Refresh cameras"),()=>n("Avatar: the last VRM you chose is copied into avatars/ and restored at startup."),()=>n("Load / change VRM…")]),Z("change",P,wt),Z("change",se,lt),Z("change",rr,Fe),Z("click",mn,()=>me(!0)),Z("click",Ti,ke),Z("click",Ni,()=>Ot(!0)),N(e,wr),qt()}dr(["change","click"]);var yc=ge('<button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button>'),wc=ge('<nav class="xra-dock group fixed left-2 top-1/2 z-[99990] flex w-[46px] max-h-[92vh] -translate-y-1/2 flex-col gap-0.5 overflow-hidden rounded-xl border border-white/10 bg-[var(--xra-ui-bg)] p-1.5 font-sans text-[12.5px] leading-snug text-[var(--xra-ui-fg)] shadow-[0_12px_40px_rgba(0,0,0,.55)] transition-[width] duration-200 hover:w-[232px]"><!> <div class="my-1 h-px bg-white/10"></div> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button></nav>');function bc(e,t){Yt(t,!0);const r=()=>window.XRA;let n=G(!1),i=G(!1),a=G(!1),s=0;function o(){var V,ae,se,Ee,ct,bt,Ut;const P=r();if(P){try{E(n,!!((ae=(V=P.nativeBridge)==null?void 0:V.cameraRunning)!=null&&ae.call(V)))}catch{}try{E(i,!!((ct=(Ee=(se=P.recorder)==null?void 0:se.status)==null?void 0:Ee.call(se))!=null&&ct.active))}catch{}try{E(a,!!((Ut=(bt=P.nativeBridge)==null?void 0:bt.getPreviewVisibility)!=null&&Ut.call(bt,"video")))}catch{}}}let l=G(!1),c=G("");async function d(){var V,ae,se,Ee;if(p(l))return;E(l,!0);const P=!p(n);E(c,P?"Starting…":"Stopping…",!0);try{P?(await ns(),E(n,!0)):(await xl(),E(n,!1))}catch(ct){try{await((ae=(V=r().nativeBridge)==null?void 0:V.forceStopCamera)==null?void 0:ae.call(V))}catch{}E(n,!1),(Ee=(se=r()).toast)==null||Ee.call(se,"Tracking: "+ct.message,"warn",4500)}finally{E(l,!1),E(c,""),setTimeout(o,250)}}async function h(){var V,ae,se;const P=r().recorder;try{(V=P.status)!=null&&V.call(P).active?await P.stop():await P.start()}catch(Ee){(se=(ae=r()).toast)==null||se.call(ae,"Recording: "+Ee.message,"warn",4e3)}finally{setTimeout(o,250)}}function w(){var V,ae;const P=!p(a);try{(ae=(V=r().nativeBridge)==null?void 0:V.setPreviewVisibility)==null||ae.call(V,"video",P)}catch{}E(a,P)}async function _(){var P,V,ae,se;try{await((V=(P=r().nativeBridge)==null?void 0:P.openVrmPicker)==null?void 0:V.call(P))}catch(Ee){(se=(ae=r()).toast)==null||se.call(ae,"VRM loader: "+Ee.message,"error",4500)}}function v(){var P,V;try{(V=(P=r().nativeBridge)==null?void 0:P.showAbout)==null||V.call(P)}catch{}}const S=[{id:"ui",icon:"Monitor",label:"UI Settings"},{id:"camera",icon:"Camera",label:"Webcam settings"},{id:"avatar",icon:"User",label:"Model settings"},{id:"second_avatar",icon:"Globe",label:"Studio link"},{id:"stage",icon:"Landmark",label:"Environment + Camera"},{id:"background",icon:"Image",label:"Background"},{id:"lip",icon:"Mic",label:"Audio"}],f="hover:bg-white/10",g="flex-1 overflow-hidden opacity-0 transition-opacity duration-150 group-hover:opacity-100";Ai(()=>(o(),s=setInterval(o,1e3),()=>clearInterval(s)));var m=wc(),k=D(m);Qt(k,17,()=>S,P=>P.id,(P,V)=>{var ae=yc();Ce(ae,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var se=D(ae),Ee=D(se);Ge(Ee,{get name(){return p(V).icon},size:16});var ct=C(se,2);Ce(ct,1,vr(g));var bt=Y(ct,!0);_e((Ut,Wt)=>{$e(ae,"title",Ut),q(bt,Wt)},[()=>ee(p(V).label),()=>ee(p(V).label)]),Z("click",ae,()=>wl(p(V).id)),N(P,ae)});var A=C(k,4),x=D(A),$=D(x);{let P=tt(()=>p(n)?"text-emerald-400":"");Ge($,{name:"Webcam",size:16,get class(){return p(P)}})}var M=C(x,2);Ce(M,1,vr(g));var R=Y(M,!0),I=C(A,2),te=D(I),me=D(te);{let P=tt(()=>p(i)?"Square":"Circle"),V=tt(()=>p(i)?"text-red-400":"");Ge(me,{get name(){return p(P)},size:16,get class(){return p(V)}})}var Fe=C(te,2);Ce(Fe,1,vr(g));var He=Y(Fe,!0),Le=C(I,2),yt=D(Le),Ze=D(yt);{let P=tt(()=>p(a)?"Eye":"EyeOff");Ge(Ze,{get name(){return p(P)},size:16})}var lt=C(yt,2);Ce(lt,1,vr(g));var wt=Y(lt,!0),ke=C(Le,2);Ce(ke,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var Ot=D(ke),wr=D(Ot);Ge(wr,{name:"FolderOpen",size:16});var Ur=C(Ot,2);Ce(Ur,1,vr(g));var br=Y(Ur,!0),fe=C(ke,2);Ce(fe,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var Ft=D(fe),xr=D(Ft);Ge(xr,{name:"Info",size:16});var Ht=C(Ft,2);Ce(Ht,1,vr(g));var Wr=Y(Ht,!0);_e((P,V,ae,se,Ee,ct,bt,Ut,Wt,Fn)=>{Ce(A,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${p(n)?"bg-emerald-500/20 hover:bg-emerald-500/30":f} ${p(l)?"opacity-60":""}`),$e(A,"title",P),A.disabled=p(l),q(R,V),Ce(I,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${p(i)?"bg-red-500/30 hover:bg-red-500/40 text-red-200":f}`),$e(I,"title",ae),q(He,se),Ce(Le,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${p(a)?"bg-emerald-500/20 hover:bg-emerald-500/30":f}`),$e(Le,"title",Ee),q(wt,ct),$e(ke,"title",bt),q(br,Ut),$e(fe,"title",Wt),q(Wr,Fn)},[()=>ee("Tracking"),()=>p(l)?ee(p(c)):p(n)?ee("Tracking on"):ee("Tracking off"),()=>ee("Record"),()=>p(i)?ee("Stop recording"):ee("Record"),()=>ee("Preview"),()=>p(a)?ee("Hide preview"):ee("Show preview"),()=>ee("Load / change VRM…"),()=>ee("Load / change VRM…"),()=>ee("About"),()=>ee("About")]),Z("click",A,d),Z("click",I,h),Z("click",Le,w),Z("click",ke,_),Z("click",fe,v),N(e,m),qt()}dr(["click"]);var xc=ge('<div class="absolute inset-0 z-30 grid place-items-center bg-black text-[12px] text-[var(--xra-ui-fg)]"> </div>'),Sc=ge('<div class="xra-mocap-window fixed z-[99991] flex flex-col overflow-hidden rounded-xl border border-white/15 bg-[var(--xra-ui-bg)] text-[var(--xra-ui-fg)] shadow-[0_16px_48px_rgba(0,0,0,.6)] font-sans"><header class="flex shrink-0 cursor-move touch-none select-none items-center gap-2 px-2 py-1.5"><!> <span class="flex-1 text-[12px] font-semibold"> </span> <select class="rounded-md border border-white/15 bg-[#101214] px-1.5 py-0.5 text-[11px] text-[var(--xra-ui-fg)]"><option> </option><option> </option><option> </option><option> </option></select> <button type="button" class="rounded-md border border-white/15 bg-white/5 px-1.5 py-0.5 cursor-pointer text-[var(--xra-ui-fg)]"><!></button></header> <div class="relative min-h-0 flex-1 overflow-hidden bg-black"><!> <div class="absolute bottom-0 right-0 z-20 h-5 w-5 cursor-nwse-resize touch-none"></div></div></div>');function kc(e,t){Yt(t,!0);const r=()=>window.XRA,n=Ve("ui.mocap_window",{})||{};let i=G(ze(Number.isFinite(n.x)?n.x:48)),a=G(ze(Number.isFinite(n.y)?n.y:96)),s=G(ze(Number.isFinite(n.w)?n.w:360)),o=G(ze(Number.isFinite(n.h)?n.h:270)),l=G(void 0),c=G(!1),d=0;const h=tt(()=>Ve("ui.mocap_visibility","always")!=="auto"||p(c));function w(){at("ui.mocap_window",{x:Math.round(p(i)),y:Math.round(p(a)),w:Math.round(p(s)),h:Math.round(p(o))})}function _(){var m,k,A;try{(A=(k=(m=r())==null?void 0:m.nativeBridge)==null?void 0:k.updateMocapWindow)==null||A.call(k)}catch{}}function v(m,k){m.preventDefault();const A=m.clientX,x=m.clientY,$=p(i),M=p(a),R=p(s),I=p(o),te=Fe=>{const He=Fe.clientX-A,Le=Fe.clientY-x;k==="move"?(E(i,Math.max(0,Math.min(window.innerWidth-80,$+He)),!0),E(a,Math.max(0,Math.min(window.innerHeight-30,M+Le)),!0)):(E(s,Math.max(200,Math.min(window.innerWidth-p(i),R+He)),!0),E(o,Math.max(130,Math.min(window.innerHeight-p(a),I+Le)),!0))},me=()=>{window.removeEventListener("pointermove",te),window.removeEventListener("pointerup",me),w()};window.addEventListener("pointermove",te),window.addEventListener("pointerup",me)}Rr(()=>{var k,A,x;const m=p(l);if(m){try{(x=(A=(k=r())==null?void 0:k.nativeBridge)==null?void 0:A.attachMocapWindow)==null||x.call(A,m)}catch{}return()=>{var $,M,R;try{(R=(M=($=r())==null?void 0:$.nativeBridge)==null?void 0:M.detachMocapWindow)==null||R.call(M)}catch{}}}}),Rr(()=>{p(i),p(a),p(s),p(o),p(c),_()}),Ai(()=>{const m=()=>{var k,A,x;E(c,!!((x=(A=(k=r())==null?void 0:k.nativeBridge)==null?void 0:A.cameraRunning)!=null&&x.call(A)))};return m(),d=setInterval(m,500),window.addEventListener("resize",_),()=>{clearInterval(d),window.removeEventListener("resize",_)}});var S=Q(),f=X(S);{var g=m=>{var k=Sc(),A=D(k),x=D(A);Ge(x,{name:"Activity",size:14});var $=C(x,2),M=Y($,!0),R=C($,2),I=D(R),te=Y(I,!0);I.value=I.__value="both";var me=C(I),Fe=Y(me,!0);me.value=me.__value="wireframe";var He=C(me),Le=Y(He,!0);He.value=He.__value="video";var yt=C(He),Ze=Y(yt,!0);yt.value=yt.__value="off";var lt;pr(R);var wt=C(R,2),ke=D(wt);Ge(ke,{name:"X",size:13});var Ot=C(A,2),wr=D(Ot);{var Ur=fe=>{var Ft=xc(),xr=Y(Ft,!0);_e(Ht=>q(xr,Ht),[()=>ee("Tracking is off")]),N(fe,Ft)};ht(wr,fe=>{p(c)||fe(Ur)})}var br=C(wr,2);Ja(Ot,fe=>E(l,fe),()=>p(l)),_e((fe,Ft,xr,Ht,Wr,P,V,ae)=>{Ua(k,`left:${p(i)??""}px; top:${p(a)??""}px; width:${p(s)??""}px; height:${p(o)??""}px;`),q(M,fe),q(te,Ft),q(Fe,xr),q(Le,Ht),q(Ze,Wr),lt!==(lt=P)&&(R.value=(R.__value=lt)??"",zt(R,lt)),$e(wt,"title",V),$e(br,"title",ae)},[()=>ee("Mocap"),()=>ee("Webcam + skeleton"),()=>ee("Skeleton only"),()=>ee("Webcam only"),()=>ee("Off"),()=>Ve("ui.mocap_view","off"),()=>ee("Close"),()=>ee("Resize")]),Z("pointerdown",A,fe=>v(fe,"move")),Z("change",R,fe=>at("ui.mocap_view",fe.currentTarget.value)),Z("pointerdown",R,fe=>fe.stopPropagation()),Z("click",wt,()=>at("ui.mocap_view","off")),Z("pointerdown",wt,fe=>fe.stopPropagation()),Z("pointerdown",br,fe=>{fe.stopPropagation(),v(fe,"resize")}),N(m,k)};ht(f,m=>{p(h)&&m(g)})}N(e,S),qt()}dr(["pointerdown","change","click"]);var $c=ge('<aside class="xra-panel"><header class="xra-panel-head"><strong>XR Animator</strong> <span class="xra-spacer"></span> <button><!></button> <button title="Close panel"><!></button></header> <div class="xra-panel-body"></div></aside>'),Ec=ge('<button class="xra-panel-launcher"><!></button>'),Ac=ge("<!> <!> <!> <!>",1);function Mc(e,t){Yt(t,!0),kl();const r=tt(()=>Tl(je));var n=Ac(),i=X(n);{var a=v=>{mc(v,{})};ht(i,v=>{J.ready&&J.startupOpen&&v(a)})}var s=C(i,2);{var o=v=>{bc(v,{})};ht(s,v=>{J.ready&&!J.startupOpen&&v(o)})}var l=C(s,2);{var c=v=>{kc(v,{})},d=tt(()=>J.ready&&!J.startupOpen&&Ve("ui.mocap_view","off")!=="off");ht(l,v=>{p(d)&&v(c)})}var h=C(l,2);{var w=v=>{var $,M,R;var S=$c(),f=D(S),g=C(D(f),4);$e(g,"title",((R=(M=($=window.XRA)==null?void 0:$.i18n)==null?void 0:M.t)==null?void 0:R.call(M,"Clean screen mode (Press Esc to restore)"))||"Clean screen (Esc)");var m=D(g);Ge(m,{name:"EyeOff",size:15});var k=C(g,2),A=D(k);Ge(A,{name:"X",size:15});var x=C(f,2);Qt(x,21,()=>p(r),I=>I.id,(I,te)=>{hc(I,{get section(){return p(te)}})}),Z("click",g,function(...I){zn==null||zn.apply(this,I)}),Z("click",k,()=>J.panelOpen=!1),N(v,S)},_=v=>{var S=Ec(),f=D(S);Ge(f,{name:"Settings",size:16}),Z("click",S,()=>{J.panelOpen=!0,is()}),N(v,S)};ht(h,v=>{J.ready&&!J.startupOpen&&J.panelOpen?v(w):J.ready&&!J.startupOpen&&v(_,1)})}N(e,n),qt()}dr(["click"]),window.XRA_SVELTE_UI=!0;function cs(){let e=document.getElementById("XRA_SVELTE");e||(e=document.createElement("div"),e.id="XRA_SVELTE",document.body.appendChild(e)),Ko(Mc,{target:e})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",cs):cs()})();

})();
