(function(){
var Uc=Object.defineProperty;var Ms=ue=>{throw TypeError(ue)};var Wc=(ue,ie,Se)=>ie in ue?Uc(ue,ie,{enumerable:!0,configurable:!0,writable:!0,value:Se}):ue[ie]=Se;var Je=(ue,ie,Se)=>Wc(ue,typeof ie!="symbol"?ie+"":ie,Se),Ni=(ue,ie,Se)=>ie.has(ue)||Ms("Cannot "+Se);var u=(ue,ie,Se)=>(Ni(ue,ie,"read from private field"),Se?Se.call(ue):ie.get(ue)),V=(ue,ie,Se)=>ie.has(ue)?Ms("Cannot add the same private member more than once"):ie instanceof WeakSet?ie.add(ue):ie.set(ue,Se),I=(ue,ie,Se,sr)=>(Ni(ue,ie,"write to private field"),sr?sr.call(ue,Se):ie.set(ue,Se),Se),j=(ue,ie,Se)=>(Ni(ue,ie,"access private method"),Se);(function(){"use strict";var cs,Lr,Qt,mr,zr,Dr,Br,Dt,Vr,Ye,fn,Bt,mt,At,Fr,yr,K,Oi,Pi,mn,Ci,Ts,Ns,Ur,jc,yn,us,ot,Ai,lt,wr,Ie,qe,Le,Ke,Mt,br,Jt,Hr,dn,vn,Vt,Dn,oe,Gc,Xc,Ri,Yc,Ii,wn,Wn,Li,zi,yt,Tt,Ze,xr,pn,hn,Bn,fs;var ie=Array.isArray,Se=Array.prototype.indexOf,sr=Array.prototype.includes,bn=Array.from,Di=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,Bi=Object.getOwnPropertyDescriptors,Os=Object.prototype,Ps=Array.prototype,jn=Object.getPrototypeOf,Vi=Object.isExtensible;function Wr(e){return typeof e=="function"}const Cs=()=>{};function Rs(e){return e()}function Gn(e){for(var t=0;t<e.length;t++)e[t]()}function Fi(){var e,t,r=new Promise((n,i)=>{e=n,t=i});return{promise:r,resolve:e,reject:t}}function Hi(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const Ne=2,kr=4,jr=8,Xn=1<<24,ft=16,et=32,Rt=64,Yn=128,qn=256,dt=512,ke=1024,we=2048,tt=4096,Pe=8192,Ce=16384,$r=32768,xn=1<<25,Wt=65536,Sn=1<<17,Is=1<<18,Er=1<<19,Ui=1<<20,bt=1<<25,kn=1<<21,Ar=1<<22,jt=1<<23,xt=Symbol("$state"),Wi=Symbol("component"),ji=Symbol("legacy props"),Ls=Symbol(""),$n=Symbol("attributes"),Kn=Symbol("class"),Zn=Symbol("style"),Gr=Symbol("text"),Xr=new class extends Error{constructor(){super(...arguments);Je(this,"name","StaleReactionError");Je(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},En=!!((cs=globalThis.document)!=null&&cs.contentType)&&globalThis.document.contentType.includes("xml"),zs=1,Ds=2,Gi=4,Bs=8,Vs=16,Fs=1,Hs=2,Xi=4,Us=8,Ws=16,js=1,Gs=2,be=Symbol("uninitialized"),Yi="http://www.w3.org/1999/xhtml",Xs="http://www.w3.org/2000/svg",Ys="@attach";function qs(){console.warn("https://svelte.dev/e/derived_inert")}function Ks(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Zs(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function qi(e){return e===this.v}function Qs(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Ki(e){return!Qs(e,this.v)}function Js(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function eo(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function to(e,t,r){throw new Error("https://svelte.dev/e/each_key_duplicate")}function ro(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function no(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function io(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ao(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function so(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function oo(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function lo(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function co(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function uo(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Mr=!1,qc=!1;function fo(){Mr=!0}let fe=null;function Tr(e){fe=e}function Gt(e,t=!1,r){fe={p:fe,i:!1,c:null,e:null,s:e,x:null,r:U,l:Mr&&!t?{s:null,u:null,$:[]}:null}}function Xt(e){var t=fe,r=t.e;if(r!==null){t.e=null;for(var n of r)ma(n)}return t.i=!0,fe=t.p,Qn(e)}function Qn(e={}){return Di(e,Wi,{value:!0}),e}function Yr(){return!Mr||fe!==null&&fe.l===null}let Nr=[];function vo(){var e=Nr;Nr=[],Gn(e)}function St(e){if(Nr.length===0){var t=Nr;queueMicrotask(()=>{t===Nr&&vo()})}Nr.push(e)}const po=-7169;function pe(e,t){e.f=e.f&po|t}function Jn(e){(e.f&dt)!==0||e.deps===null?pe(e,ke):pe(e,tt)}function Zi(e,t,r){(e.f&we)!==0?t.add(e):(e.f&tt)!==0&&r.add(e),pe(e,ke)}function ho(e,t){if(t){const r=document.body;e.autofocus=!0,St(()=>{document.activeElement===r&&e.focus()})}}function qr(e){var t=H,r=U;nt(null),it(null);try{return e()}finally{nt(t),it(r)}}function Qi(e,t,r,n){const i=Yr()?Or:ei;var a=e.filter(_=>!_.settled),s=t.map(i);if(r.length===0&&a.length===0){n(s);return}var o=U,l=_o(),c=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(_=>_.promise)):null;function d(_){if((o.f&Ce)===0){l();try{n([...s,..._])}catch(v){$t(v,o)}An()}}var h=Ji();if(r.length===0){c.then(()=>d([])).finally(h);return}function w(){Promise.all(r.map(_=>go(_))).then(d).catch(_=>$t(_,o)).finally(h)}c?c.then(()=>{l(),w(),An()}):w()}function _o(){var e=U,t=H,r=fe,n=R;return function(a=!0){it(e),nt(t),Tr(r),a&&(e.f&Ce)===0&&(n==null||n.activate(),n==null||n.apply())}}function An(e=!0){it(null),nt(null),Tr(null),e&&(R==null||R.deactivate())}function Ji(){var e=U,t=e.b,r=R,n=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,r),r.increment(n,e),()=>{t==null||t.update_pending_count(-1,r),r.decrement(n,e)}}function Or(e){var t=Ne|we;return U!==null&&(U.f|=Er),{ctx:fe,deps:null,effects:null,equals:qi,f:t,fn:e,reactions:null,rv:0,v:be,wv:0,parent:U,ac:null}}const Kr=Symbol("obsolete");function go(e,t,r){let n=U;n===null&&eo();var i=void 0,a=Yt(be),s=!H,o=new Set;return No(()=>{var _,v;var l=U,c=Fi();i=c.promise;try{Promise.resolve(e()).then(c.resolve,x=>{x!==Xr&&c.reject(x)}).finally(An)}catch(x){c.reject(x),An()}var d=R;if(s){if((l.f&$r)!==0)var h=Ji();if((_=n.b)!=null&&_.is_rendered())(v=d.async_deriveds.get(l))==null||v.reject(Kr);else for(const x of o.values())x.reject(Kr);o.add(c),d.async_deriveds.set(l,c)}const w=(x,f=void 0)=>{h==null||h(),o.delete(c),f!==Kr&&(d.activate(),f?(a.f|=jt,Cr(a,f)):((a.f&jt)!==0&&(a.f^=jt),Cr(a,x)),d.deactivate())};c.promise.then(w,x=>w(null,x||"unknown"))}),ui(()=>{for(const l of o)l.reject(Kr)}),new Promise(l=>{function c(d){function h(){d===i?l(a):c(i)}d.then(h,h)}c(i)})}function rt(e){const t=Or(e);return Ea(t),t}function ei(e){const t=Or(e);return t.equals=Ki,t}function mo(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)Me(t[r])}}function ti(e){var t,r=U,n=e.parent;if(!Lt&&n!==null&&e.v!==be&&(n.f&(Ce|Pe))!==0)return qs(),e.v;it(n);try{mo(e),t=Oa(e)}finally{it(r)}return t}function ea(e){var t=ti(e);if(!e.equals(t)&&(e.wv=Ta(),(!(R!=null&&R.is_fork)||e.deps===null)&&(R!==null?(R.capture(e,t,!0),Zr==null||Zr.capture(e,t,!0)):e.v=t,e.deps===null))){pe(e,ke);return}Lt||(Ae!==null?(ci()||R!=null&&R.is_fork)&&Ae.set(e,t):Jn(e))}function yo(e){var t;if(e.effects!==null)for(const r of e.effects)(r.teardown||r.ac)&&((t=r.teardown)==null||t.call(r),r.ac!==null&&qr(()=>{r.ac.abort(Xr),r.ac=null}),r.fn!==null&&(r.teardown=Cs),nn(r,0),di(r))}function ta(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&Ir(t)}let ri=null,Pr=null,R=null,Zr=null,Ae=null,ni=null,ii=!1,Qr=null,Mn=null;var ra=0,Kc=new Set;let wo=1;const zn=class zn{constructor(){V(this,K);Je(this,"id",wo++);V(this,Lr,!1);Je(this,"linked",!0);V(this,Qt,null);V(this,mr,null);Je(this,"async_deriveds",new Map);Je(this,"current",new Map);Je(this,"previous",new Map);V(this,zr,new Set);V(this,Dr,new Set);V(this,Br,0);V(this,Dt,new Map);V(this,Vr,null);V(this,Ye,[]);V(this,fn,[]);V(this,Bt,new Set);V(this,mt,new Set);V(this,At,new Map);V(this,Fr,new Set);Je(this,"is_fork",!1);V(this,yr,!1);Pr===null?ri=Pr=this:(I(Pr,mr,this),I(this,Qt,Pr)),Pr=this}skip_effect(t){u(this,At).has(t)||u(this,At).set(t,{d:[],m:[]}),u(this,Fr).delete(t)}unskip_effect(t,r=n=>this.schedule(n)){var n=u(this,At).get(t);if(n){u(this,At).delete(t);for(var i of n.d)pe(i,we),r(i);for(i of n.m)pe(i,tt),r(i)}u(this,Fr).add(t)}capture(t,r,n=!1){t.v!==be&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&jt)===0&&(this.current.set(t,[r,n]),Ae==null||Ae.set(t,r)),this.is_fork||(t.v=r)}activate(){R=this}deactivate(){R=null,Ae=null}flush(){try{ii=!0,R=this,j(this,K,mn).call(this)}finally{ra=0,ni=null,Qr=null,Mn=null,ii=!1,R=null,Ae=null,kt.clear()}}discard(){var t;for(const r of u(this,Dr))r(this);u(this,Dr).clear();for(const r of this.async_deriveds.values())r.reject(Kr);j(this,K,yn).call(this),(t=u(this,Vr))==null||t.resolve()}register_created_effect(t){u(this,fn).push(t)}increment(t,r){if(I(this,Br,u(this,Br)+1),t){let n=u(this,Dt).get(r)??0;u(this,Dt).set(r,n+1)}}decrement(t,r){if(I(this,Br,u(this,Br)-1),t){let n=u(this,Dt).get(r)??0;n===1?u(this,Dt).delete(r):u(this,Dt).set(r,n-1)}u(this,yr)||(I(this,yr,!0),St(()=>{I(this,yr,!1),this.linked&&this.flush()}))}transfer_effects(t,r){for(const n of t)u(this,Bt).add(n);for(const n of r)u(this,mt).add(n);t.clear(),r.clear()}oncommit(t){u(this,zr).add(t)}ondiscard(t){u(this,Dr).add(t)}settled(){return(u(this,Vr)??I(this,Vr,Fi())).promise}static ensure(){if(R===null){const t=R=new zn;ii||St(()=>{u(t,Lr)||t.flush()})}return R}apply(){{Ae=null;return}}schedule(t){var r;if(ni=t,(r=t.b)!=null&&r.is_pending&&(t.f&(kr|jr|Xn))!==0&&(t.f&$r)===0){t.b.defer_effect(t);return}u(this,Ye).push(t)}};Lr=new WeakMap,Qt=new WeakMap,mr=new WeakMap,zr=new WeakMap,Dr=new WeakMap,Br=new WeakMap,Dt=new WeakMap,Vr=new WeakMap,Ye=new WeakMap,fn=new WeakMap,Bt=new WeakMap,mt=new WeakMap,At=new WeakMap,Fr=new WeakMap,yr=new WeakMap,K=new WeakSet,Oi=function(){if(this.is_fork)return!0;for(const n of u(this,Dt).keys()){for(var t=n,r=!1;t.parent!==null;){if(u(this,At).has(t)){r=!0;break}t=t.parent}if(!r)return!0}return!1},Pi=function(){var t=[];for(const a of u(this,Ye))if(!((a.f&Ce)!==0||(a.f&(we|tt))===0)){for(var r=a,n=!1;r.parent!==null;){r=r.parent;var i=r.f;if((i&(Rt|et))!==0){if((i&ke)===0){n=!0;break}r.f^=ke}}n||t.push(r)}return I(this,Ye,[]),t},mn=function(){var o,l,c,d;I(this,Lr,!0);for(const h of u(this,Bt))u(this,mt).delete(h),pe(h,we),this.schedule(h);for(const h of u(this,mt))pe(h,tt),this.schedule(h);this.apply();for(var t=Qr=[],r=[],n=Mn=[];u(this,Ye).length>0;){ra++>1e3&&(j(this,K,yn).call(this),bo());for(const h of j(this,K,Pi).call(this))try{j(this,K,Ci).call(this,h,t,r)}catch(w){throw sa(h),j(this,K,Oi).call(this)||this.discard(),w}}if(R=null,n.length>0){var i=zn.ensure();for(const h of n)i.schedule(h)}if(Qr=null,Mn=null,j(this,K,Oi).call(this)){j(this,K,Ur).call(this,r),j(this,K,Ur).call(this,t);for(const[h,w]of u(this,At))aa(h,w);n.length>0&&j(o=R,K,mn).call(o);return}const a=j(this,K,Ts).call(this);if(a){j(this,K,Ur).call(this,r),j(this,K,Ur).call(this,t),j(l=a,K,Ns).call(l,this);return}u(this,Bt).clear(),u(this,mt).clear();for(const h of u(this,zr))h(this);u(this,zr).clear(),Zr=this,na(r),na(t),Zr=null,(c=u(this,Vr))==null||c.resolve();var s=R;if(u(this,Br)===0&&(u(this,Ye).length===0||s!==null)&&j(this,K,yn).call(this),u(this,Ye).length>0)if(s!==null){for(const h of u(this,Ye))u(s,Ye).push(h);I(this,Ye,[])}else s=this;s!==null&&(kt.clear(),j(d=s,K,mn).call(d))},Ci=function(t,r,n){t.f^=ke;for(var i=t.first;i!==null;){var a=i.f,s=(a&(et|Rt))!==0,o=s&&(a&ke)!==0,l=o||(a&Pe)!==0||u(this,At).has(i);if(!l&&i.fn!==null){s?i.f^=ke:(a&kr)!==0?r.push(i):rn(i)&&((a&ft)!==0&&u(this,mt).add(i),Ir(i));var c=i.first;if(c!==null){i=c;continue}}for(;i!==null;){var d=i.next;if(d!==null){i=d;break}i=i.parent}}},Ts=function(){for(var t=u(this,Qt);t!==null;){if(!t.is_fork){for(const[r,[,n]]of this.current)if(t.current.has(r)&&!n)return t}t=u(t,Qt)}return null},Ns=function(t){var n;for(const[i,a]of t.current)!this.previous.has(i)&&t.previous.has(i)&&this.previous.set(i,t.previous.get(i)),this.current.set(i,a);for(const[i,a]of t.async_deriveds){const s=this.async_deriveds.get(i);s&&a.promise.then(s.resolve).catch(s.reject)}t.async_deriveds.clear(),this.transfer_effects(u(t,Bt),u(t,mt));const r=i=>{var a=i.reactions;if(a!==null&&!((i.f&Ne)!==0&&(i.f&(we|tt))===0))for(const l of a){var s=l.f;if((s&Ne)!==0)r(l);else{var o=l;s&(Ar|ft)&&!this.async_deriveds.has(o)&&(u(this,mt).delete(o),pe(o,we),this.schedule(o))}}};for(const i of this.current.keys())r(i);this.oncommit(()=>t.discard()),j(n=t,K,yn).call(n),R=this,j(this,K,mn).call(this)},Ur=function(t){for(var r=0;r<t.length;r+=1)Zi(t[r],u(this,Bt),u(this,mt))},jc=function(){var h,w;for(let _=ri;_!==null;_=u(_,mr)){var t=_.id<this.id,r=[];for(const[v,[x,f]]of this.current){if(_.current.has(v)){var n=_.current.get(v)[0];if(t&&x!==n)_.current.set(v,[x,f]);else continue}r.push(v)}if(t)for(const[v,x]of this.async_deriveds){const f=_.async_deriveds.get(v);f&&x.promise.then(f.resolve).catch(f.reject)}var i=[..._.current.keys()].filter(v=>!_.current.get(v)[1]);if(!(!u(_,Lr)||i.length===0)){var a=i.filter(v=>!this.current.has(v));if(a.length===0)t&&_.discard();else if(r.length>0){if(t)for(const v of u(this,Fr))_.unskip_effect(v,x=>{var f;(x.f&(ft|Ar))!==0?_.schedule(x):j(f=_,K,Ur).call(f,[x])});_.activate();var s=new Set,o=new Map;for(var l of r)ia(l,a,s,o);o=new Map;var c=[..._.current].filter(([v,x])=>{const f=this.current.get(v);return f?f[0]!==x[0]||f[1]!==x[1]:!0}).map(([v])=>v);if(c.length>0)for(const v of u(this,fn))(v.f&(Ce|Pe|Sn))===0&&ai(v,c,o)&&((v.f&(Ar|ft))!==0?(pe(v,we),_.schedule(v)):u(_,Bt).add(v));if(u(_,Ye).length>0&&!u(_,yr)){_.apply();for(var d of j(h=_,K,Pi).call(h))j(w=_,K,Ci).call(w,d,[],[])}_.deactivate()}}}},yn=function(){if(this.linked){var t=u(this,Qt),r=u(this,mr);t===null?ri=r:I(t,mr,r),r===null?Pr=t:I(r,Qt,t),this.linked=!1}};let or=zn;function bo(){try{ao()}catch(e){$t(e,ni)}}let vt=null;function na(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(Ce|Pe))===0&&rn(n)&&(vt=new Set,Ir(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&xa(n),(vt==null?void 0:vt.size)>0)){kt.clear();for(const i of vt){if((i.f&(Ce|Pe))!==0)continue;const a=[i];let s=i.parent;for(;s!==null;)vt.has(s)&&(vt.delete(s),a.push(s)),s=s.parent;for(let o=a.length-1;o>=0;o--){const l=a[o];(l.f&(Ce|Pe))===0&&Ir(l)}}vt.clear()}}vt=null}}function ia(e,t,r,n){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(const i of e.reactions){const a=i.f;(a&Ne)!==0?ia(i,t,r,n):(a&(Ar|ft))!==0&&(a&we)===0&&ai(i,t,n)&&(pe(i,we),si(i))}}function ai(e,t,r){const n=r.get(e);if(n!==void 0)return n;if(e.deps!==null)for(const i of e.deps){if(sr.call(t,i))return!0;if((i.f&Ne)!==0&&ai(i,t,r))return r.set(i,!0),!0}return r.set(e,!1),!1}function si(e){R.schedule(e)}function aa(e,t){if(!((e.f&et)!==0&&(e.f&ke)!==0)){(e.f&we)!==0?t.d.push(e):(e.f&tt)!==0&&t.m.push(e),pe(e,ke);for(var r=e.first;r!==null;)aa(r,t),r=r.next}}function sa(e){pe(e,ke);for(var t=e.first;t!==null;)sa(t),t=t.next}let Tn=new Set;const kt=new Map;let oa=!1;function Yt(e,t){var r={f:0,v:e,reactions:null,equals:qi,rv:0,wv:0};return r}function G(e,t){const r=Yt(e);return Ea(r),r}function xo(e,t=!1,r=!0){var i;const n=Yt(e);return t||(n.equals=Ki),Mr&&r&&fe!==null&&fe.l!==null&&((i=fe.l).s??(i.s=[])).push(n),n}function E(e,t,r=!1){H!==null&&(!ht||(H.f&Sn)!==0)&&Yr()&&(H.f&(Ne|ft|Ar|Sn))!==0&&(Et===null||!Et.has(e))&&co();let n=r?De(t):t;return Cr(e,n,Mn)}var lr=null,oi=0;function Cr(e,t,r=null){if(!e.equals(t)){Lt?kt.set(e,t):kt.has(e)||kt.set(e,e.v);var n=or.ensure();if(n.capture(e,t),(e.f&Ne)!==0){const i=e;(e.f&we)!==0&&ti(i),Ae===null&&Jn(i)}e.wv=Ta(),lr=null,oi=0,ca(e,we,r),lr=null,Yr()&&U!==null&&(U.f&ke)!==0&&(U.f&(et|Rt))===0&&(at===null?Co([e]):at.push(e)),!n.is_fork&&Tn.size>0&&!oa&&So()}return t}function So(){oa=!1;for(const e of Tn){(e.f&ke)!==0&&pe(e,tt);let t;try{t=rn(e)}catch{t=!0}t&&Ir(e)}Tn.clear()}function la(e,t=1){var r=p(e),n=t===1?r++:r--;return E(e,r),n}function Jr(e){E(e,e.v+1)}function ca(e,t,r){var n=e.reactions;if(n!==null){var i=Yr(),a=n.length;if(oi+=a,oi>1e5&&lr===null&&(lr=new Set),lr!==null){if(lr.has(e))return;lr.add(e)}for(var s=0;s<a;s++){var o=n[s],l=o.f;if(!(!i&&o===U)){var c=(l&we)===0;if(c&&pe(o,t),(l&Sn)!==0)Tn.add(o);else if((l&Ne)!==0){var d=o;Ae==null||Ae.delete(d),ca(d,tt,r)}else if(c){var h=o;(l&ft)!==0&&vt!==null&&vt.add(h),r!==null?r.push(h):si(h)}}}}}function De(e){if(typeof e!="object"||e===null||xt in e||Wi in e)return e;const t=jn(e);if(t!==Os&&t!==Ps)return e;var r=new Map,n=ie(e),i=G(0),a=dr,s=o=>{if(dr===a)return o();var l=H,c=dr;nt(null),Ma(a);var d=o();return nt(l),Ma(c),d};return n&&r.set("length",G(e.length)),new Proxy(e,{defineProperty(o,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&oo();var d=r.get(l);return d===void 0?s(()=>{var h=G(c.value);return r.set(l,h),h}):E(d,c.value,!0),!0},deleteProperty(o,l){var c=r.get(l);if(c===void 0){if(l in o){const d=s(()=>G(be));r.set(l,d),Jr(i)}}else E(c,be),Jr(i);return!0},get(o,l,c){var _;if(l===xt)return e;var d=r.get(l),h=l in o;if(d===void 0&&(!h||(_=Ut(o,l))!=null&&_.writable)&&(d=s(()=>{var v=De(h?o[l]:be),x=G(v);return x}),r.set(l,d)),d!==void 0){var w=p(d);return w===be?void 0:w}return Reflect.get(o,l,c)},getOwnPropertyDescriptor(o,l){var w;(w=this.has)==null||w.call(this,o,l);var c=Reflect.getOwnPropertyDescriptor(o,l),d=r.get(l);if(d!==void 0){var h=p(d);if(h===be)return;if(c&&"value"in c)c.value=h;else return{enumerable:!0,configurable:!0,value:h,writable:!0}}return c},has(o,l){var w;if(l===xt)return!0;var c=r.get(l),d=c!==void 0&&c.v!==be||Reflect.has(o,l);if(c!==void 0||U!==null&&(!d||(w=Ut(o,l))!=null&&w.writable)){c===void 0&&(c=s(()=>{var _=d?De(o[l]):be,v=G(_);return v}),r.set(l,c));var h=p(c);if(h===be)return!1}return d},set(o,l,c,d){var S;var h=r.get(l),w=l in o;if(n&&l==="length")for(var _=c;_<h.v;_+=1){var v=r.get(_+"");v!==void 0?E(v,be):_ in o&&(v=s(()=>G(be)),r.set(_+"",v))}if(h===void 0)(!w||(S=Ut(o,l))!=null&&S.writable)&&(h=s(()=>G(void 0)),E(h,De(c)),r.set(l,h));else{w=h.v!==be;var x=s(()=>De(c));E(h,x)}var f=Reflect.getOwnPropertyDescriptor(o,l);if(f!=null&&f.set&&f.set.call(d,c),!w){if(n&&typeof l=="string"){var g=r.get("length"),m=Number(l);Number.isInteger(m)&&m>=g.v&&E(g,m+1)}Jr(i)}return!0},ownKeys(o){p(i);var l=Reflect.ownKeys(o).filter(h=>{var w=r.get(h);return w===void 0||w.v!==be});for(var[c,d]of r)d.v!==be&&!(c in o)&&l.push(c);return l},setPrototypeOf(){lo()}})}function ua(e){try{if(e!==null&&typeof e=="object"&&xt in e)return e[xt]}catch{}return e}function fa(e,t){return Object.is(ua(e),ua(t))}var da,va,pa,ha;function ko(){if(da===void 0){da=window,va=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;pa=Ut(t,"firstChild").get,ha=Ut(t,"nextSibling").get,Vi(e)&&(e[Kn]=void 0,e[$n]=null,e[Zn]=void 0,e.__e=void 0),Vi(r)&&(r[Gr]=void 0)}}function It(e=""){return document.createTextNode(e)}function cr(e){return pa.call(e)}function en(e){return ha.call(e)}function L(e,t){return cr(e)}function X(e,t=!1){{var r=cr(e);return r instanceof Comment&&r.data===""?en(r):r}}function Y(e,t=!1){return cr(e)}function C(e,t=1,r=!1){let n=e;for(;t--;)n=en(n);return n}function $o(e){e.textContent=""}function _a(){return!1}function li(e,t,r){return t==null||t===Yi?r?document.createElement(e,{is:r}):document.createElement(e):r?document.createElementNS(t,e,{is:r}):document.createElementNS(t,e)}function Eo(e){var t=U;if(t===null)return H.f|=jt,e;if((t.f&$r)===0&&(t.f&kr)===0)throw e;$t(e,t)}function $t(e,t){if(!(t!==null&&(t.f&Ce)!==0)){for(;t!==null;){if((t.f&Yn)!==0&&(t.f&(Ce|xn))===0){if((t.f&$r)===0)throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw e}}function ga(e){U===null&&(H===null&&io(),no()),Lt&&ro()}function Ao(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function pt(e,t){var r=U;r!==null&&(r.f&Pe)!==0&&(e|=Pe);var n={ctx:fe,deps:null,nodes:null,f:e|we|dt,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};R==null||R.register_created_effect(n);var i=n;if((e&kr)!==0)Qr!==null?Qr.push(n):or.ensure().schedule(n);else if(t!==null){try{Ir(n)}catch(s){throw Me(n),s}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&Er)===0&&(i=i.first,(e&ft)!==0&&(e&Wt)!==0&&i!==null&&(i.f|=Wt))}if(i!==null&&(i.parent=r,r!==null&&Ao(i,r),H!==null&&(H.f&Ne)!==0&&(e&Rt)===0)){var a=H;(a.effects??(a.effects=[])).push(i)}return n}function ci(){return H!==null&&!ht}function ui(e){const t=pt(jr,null);return pe(t,ke),t.teardown=e,t}function Rr(e){ga();var t=U.f,r=!H&&(t&et)!==0&&fe!==null&&!fe.i;if(r){var n=fe;(n.e??(n.e=[])).push(e)}else return ma(e)}function ma(e){return pt(kr|Ui,e)}function Mo(e){return ga(),pt(jr|Ui,e)}function To(e){or.ensure();const t=pt(Rt|Er,e);return(r={})=>new Promise(n=>{r.outro?ur(t,()=>{Me(t),n(void 0)}):(Me(t),n(void 0))})}function fi(e){return pt(kr,e)}function No(e){return pt(Ar|Er,e)}function ya(e,t=0){return pt(jr|t,e)}function ge(e,t=[],r=[],n=[]){Qi(n,t,r,i=>{pt(jr,()=>{e(...i.map(p))})})}function tn(e,t=0){var r=pt(ft|t,e);return r}function wa(e,t=0){var r=pt(Xn|t,e);return r}function Be(e){return pt(et|Er,e)}function ba(e){var t=e.teardown;if(t!==null){const r=Lt,n=H;$a(!0),nt(null);try{t.call(null)}catch(i){$t(i,e.parent)}finally{$a(r),nt(n)}}}function di(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const i=r.ac;i!==null&&qr(()=>{i.abort(Xr)});var n=r.next;(r.f&Rt)!==0?r.parent=null:Me(r,t),r=n}}function Oo(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&et)===0&&Me(t),t=r}}function Me(e,t=!0){var r=!1;(t||(e.f&Is)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Po(e.nodes.start,e.nodes.end),r=!0),e.f|=xn,di(e,t&&!r),nn(e,0);var n=e.nodes&&e.nodes.t;if(n!==null)for(const a of n)a.stop();ba(e),e.f^=xn,e.f|=Ce;var i=e.parent;i!==null&&i.first!==null&&xa(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Po(e,t){for(;e!==null;){var r=e===t?null:en(e);e.remove(),e=r}}function xa(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function ur(e,t,r=!0){var n=[];e.f|=qn,Sa(e,n,!0);var i=()=>{r&&Me(e),t&&t()},a=n.length;if(a>0){var s=()=>--a||i();for(var o of n)o.out(s)}else i()}function Sa(e,t,r){if((e.f&Pe)===0){e.f^=Pe;var n=e.nodes&&e.nodes.t;if(n!==null)for(const o of n)(o.is_global||r)&&t.push(o);for(var i=e.first;i!==null;){var a=i.next;if((i.f&Rt)===0){var s=(i.f&Wt)!==0||(i.f&et)!==0&&(e.f&ft)!==0;Sa(i,t,s?r:!1)}i=a}}}function Nn(e){e.f&=~qn,ka(e,!0)}function ka(e,t){if((e.f&qn)===0&&(e.f&Pe)!==0){e.f^=Pe,(e.f&ke)===0&&(pe(e,we),or.ensure().schedule(e));for(var r=e.first;r!==null;){var n=r.next,i=(r.f&Wt)!==0||(r.f&et)!==0;ka(r,i?t:!1),r=n}var a=e.nodes&&e.nodes.t;if(a!==null)for(const s of a)(s.is_global||t)&&s.in()}}function vi(e,t){if(e.nodes)for(var r=e.nodes.start,n=e.nodes.end;r!==null;){var i=r===n?null:en(r);t.append(r),r=i}}let On=!1,Lt=!1;function $a(e){Lt=e}let H=null,ht=!1;function nt(e){H=e}let U=null;function it(e){U=e}let Et=null;function Ea(e){H!==null&&((H.f&kn)!==0||(H.f&Ne)!==0)&&(Et??(Et=new Set)).add(e)}let Ve=null,je=0,at=null;function Co(e){at=e}let Aa=1,fr=0,dr=fr;function Ma(e){dr=e}function Ta(){return++Aa}function rn(e){var t=e.f;if((t&we)!==0)return!0;if((t&tt)!==0){for(var r=e.deps,n=r.length,i=0;i<n;i++){var a=r[i];if(rn(a)&&ea(a),a.wv>e.wv)return!0}(t&dt)!==0&&Ae===null&&pe(e,ke)}return!1}function Na(e,t,r=!0){var n=e.reactions;if(n!==null&&!(Et!==null&&Et.has(e)))for(var i=0;i<n.length;i++){var a=n[i];(a.f&Ne)!==0?Na(a,t,!1):t===a&&(r?pe(a,we):(a.f&ke)!==0&&pe(a,tt),si(a))}}function Oa(e){var t=Ve,r=je,n=at,i=H,a=Et,s=fe,o=ht,l=dr,c=e.f;Ve=null,je=0,at=null,H=(c&(et|Rt))===0?e:null,Et=null,Tr(e.ctx),ht=!1,dr=++fr,e.ac!==null&&(qr(()=>{e.ac.abort(Xr)}),e.ac=null);try{e.f|=kn;var d=e.fn,h=d();e.f|=$r;var w=Pa(e);if(Yr()&&at!==null&&!ht&&w!==null&&(e.f&(Ne|tt|we))===0)for(var _=0;_<at.length;_++)Na(at[_],e);if(i!==null&&i!==e){if(fr++,i.deps!==null)for(let v=0;v<r;v+=1)i.deps[v].rv=fr;if(t!==null)for(const v of t)v.rv=fr;at!==null&&(n===null?n=at:n.push(...at))}return(e.f&jt)!==0&&(e.f^=jt),h}catch(v){return Pa(e),Eo(v)}finally{e.f^=kn,Ve=t,je=r,at=n,H=i,Et=a,Tr(s),ht=o,dr=l}}function Pa(e){var i;var t=e.deps,r=R==null?void 0:R.is_fork;if(Ve!==null){var n;if(r||nn(e,je),t!==null&&je>0)for(t.length=je+Ve.length,n=0;n<Ve.length;n++)t[je+n]=Ve[n];else e.deps=t=Ve;if(ci()&&(e.f&dt)!==0)for(n=je;n<t.length;n++)((i=t[n]).reactions??(i.reactions=[])).push(e)}else!r&&t!==null&&je<t.length&&(nn(e,je),t.length=je);return t}function Ro(e,t){let r=t.reactions;if(r!==null){var n=Se.call(r,e);if(n!==-1){var i=r.length-1;i===0?r=t.reactions=null:(r[n]=r[i],r.pop())}}if(r===null&&(t.f&Ne)!==0&&(Ve===null||!sr.call(Ve,t))){var a=t;(a.f&dt)!==0&&(a.f^=dt),a.v!==be&&Jn(a),a.ac!==null&&qr(()=>{a.ac.abort(Xr),a.ac=null,pe(a,we)}),yo(a),nn(a,0)}}function nn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Ro(e,r[n])}function Ir(e){var t=e.f;if((t&Ce)===0){pe(e,ke);var r=U,n=On;U=e,On=(t&(et|Rt))===0;try{(t&(ft|Xn))!==0?Oo(e):di(e),ba(e);var i=Oa(e);e.teardown=typeof i=="function"?i:null,e.wv=Aa;var a}finally{On=n,U=r}}}function p(e){var t=e.f,r=(t&Ne)!==0;if(H!==null&&!ht){var n=U!==null&&(U.f&Ce)!==0;if(!n&&(Et===null||!Et.has(e))){var i=H.deps;if((H.f&kn)!==0)e.rv<fr&&(e.rv=fr,Ve===null&&i!==null&&i[je]===e?je++:Ve===null?Ve=[e]:Ve.push(e));else{H.deps??(H.deps=[]),sr.call(H.deps,e)||H.deps.push(e);var a=e.reactions;a===null?e.reactions=[H]:sr.call(a,H)||a.push(H)}}}if(Lt&&kt.has(e))return kt.get(e);if(r){var s=e;if(Lt){var o=s.v;return((s.f&ke)===0&&s.reactions!==null||Ra(s))&&(o=ti(s)),kt.set(s,o),o}var l=(s.f&dt)===0&&!ht&&H!==null&&(On||(H.f&dt)!==0),c=(s.f&$r)===0;rn(s)&&(l&&(s.f|=dt),ea(s)),l&&!c&&(ta(s),Ca(s))}if(Ae!=null&&Ae.has(e))return Ae.get(e);if((e.f&jt)!==0)throw e.v;return e.v}function Ca(e){if(e.f|=dt,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&Ne)!==0&&(t.f&dt)===0&&(ta(t),Ca(t))}function Ra(e){if(e.v===be)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(kt.has(t)||(t.f&Ne)!==0&&Ra(t))return!0;return!1}function qt(e){var t=ht;try{return ht=!0,e()}finally{ht=t}}function vr(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(xt in e)pi(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&xt in r&&pi(r)}}}function pi(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{pi(e[n],t)}catch{}const r=jn(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=Bi(r);for(let i in n){const a=n[i].get;if(a)try{a.call(e)}catch{}}}}}function Io(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Lo=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function zo(e){return Lo.includes(e)}const Do={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Bo(e){return e=e.toLowerCase(),Do[e]??e}const Vo=["touchstart","touchmove"];function Fo(e){return Vo.includes(e)}const pr=Symbol("events"),Ia=new Set,hi=new Set;function Ho(e,t,r,n={}){function i(a){if(n.capture||mi.call(t,a),!a.cancelBubble)return qr(()=>r==null?void 0:r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?(i.__removed=!1,St(()=>{i.__removed||t.addEventListener(e,i,n)})):t.addEventListener(e,i,n),i}function Z(e,t,r){(t[pr]??(t[pr]={}))[e]=r}function hr(e){for(var t=0;t<e.length;t++)Ia.add(e[t]);for(var r of hi)r(e)}let _i=null,gi=!1;function mi(e){var x,f;var t=this,r=t.ownerDocument,n=e.type,i=((x=e.composedPath)==null?void 0:x.call(e))||[],a=i[0]||e.target;_i=e,gi||(gi=!0,setTimeout(()=>{gi=!1,_i=null}));var s=0,o=_i===e&&e[pr];if(o){var l=i.indexOf(o);if(l!==-1&&(t===document||t===window)){e[pr]=t;return}var c=i.indexOf(t);if(c===-1)return;l<=c&&(s=l)}if(a=i[s]||e.target,a!==t){Di(e,"currentTarget",{configurable:!0,get(){return a||r}});var d=H,h=U;nt(null),it(null);try{for(var w,_=[];a!==null&&a!==t;){try{var v=(f=a[pr])==null?void 0:f[n];v!=null&&(!a.disabled||e.target===a)&&v.call(a,e)}catch(g){w?_.push(g):w=g}if(e.cancelBubble)break;s++,a=s<i.length?i[s]:null}if(w){for(let g of _)queueMicrotask(()=>{throw g});throw w}}finally{e[pr]=t,delete e.currentTarget,nt(d),it(h)}}}const yi=((us=globalThis==null?void 0:globalThis.window)==null?void 0:us.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Uo(e){return(yi==null?void 0:yi.createHTML(e))??e}function La(e){var t=li("template");return t.innerHTML=Uo(e.replaceAll("<!>","<!---->")),t.content}function an(e,t){var r=U;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function me(e,t){var r=(t&js)!==0,n=(t&Gs)!==0,i,a=!e.startsWith("<!>");return()=>{i===void 0&&(i=La(a?e:"<!>"+e),r||(i=cr(i)));var s=n||va?document.importNode(i,!0):i.cloneNode(!0);if(r){var o=cr(s),l=s.lastChild;an(o,l)}else an(s,s);return s}}function Wo(e,t,r="svg"){var n=!e.startsWith("<!>"),i=`<${r}>${n?e:"<!>"+e}</${r}>`,a;return()=>{if(!a){var s=La(i),o=cr(s);a=cr(o)}var l=a.cloneNode(!0);return an(l,l),l}}function jo(e,t){return Wo(e,t,"svg")}function Q(){var e=document.createDocumentFragment(),t=document.createComment(""),r=It();return e.append(t,r),an(t,r),e}function N(e,t){e!==null&&e.before(t)}function Go(e){let t=0,r=Yt(0),n;return()=>{ci()&&(p(r),ya(()=>(t===0&&(n=qt(()=>e(()=>Jr(r)))),t+=1,()=>{St(()=>{t-=1,t===0&&(n==null||n(),n=void 0,Jr(r))})})))}}var Xo=Wt|Er;function Yo(e,t,r,n){new qo(e,t,r,n)}class qo{constructor(t,r,n,i){V(this,oe);Je(this,"parent");Je(this,"is_pending",!1);Je(this,"transform_error");V(this,ot);V(this,Ai,null);V(this,lt);V(this,wr);V(this,Ie);V(this,qe,null);V(this,Le,null);V(this,Ke,null);V(this,Mt,null);V(this,br,0);V(this,Jt,0);V(this,Hr,!1);V(this,dn,new Set);V(this,vn,new Set);V(this,Vt,null);V(this,Dn,Go(()=>(I(this,Vt,Yt(u(this,br))),()=>{I(this,Vt,null)})));var a;I(this,ot,t),I(this,lt,r),I(this,wr,s=>{var o=U;o.b=this,o.f|=Yn,n(s)}),this.parent=U.b,this.transform_error=i??((a=this.parent)==null?void 0:a.transform_error)??(s=>s),I(this,Ie,tn(()=>{j(this,oe,Ii).call(this)},Xo))}defer_effect(t){Zi(t,u(this,dn),u(this,vn))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!u(this,lt).pending}update_pending_count(t,r){j(this,oe,Li).call(this,t,r),I(this,br,u(this,br)+t),!(!u(this,Vt)||u(this,Hr))&&(I(this,Hr,!0),St(()=>{I(this,Hr,!1),u(this,Vt)&&Cr(u(this,Vt),u(this,br))}))}get_effect_pending(){return u(this,Dn).call(this),p(u(this,Vt))}error(t){if(!u(this,lt).onerror&&!u(this,lt).failed)throw t;R!=null&&R.is_fork?(u(this,qe)&&R.skip_effect(u(this,qe)),u(this,Le)&&R.skip_effect(u(this,Le)),u(this,Ke)&&R.skip_effect(u(this,Ke)),R.oncommit(()=>{j(this,oe,zi).call(this,t)})):j(this,oe,zi).call(this,t)}}ot=new WeakMap,Ai=new WeakMap,lt=new WeakMap,wr=new WeakMap,Ie=new WeakMap,qe=new WeakMap,Le=new WeakMap,Ke=new WeakMap,Mt=new WeakMap,br=new WeakMap,Jt=new WeakMap,Hr=new WeakMap,dn=new WeakMap,vn=new WeakMap,Vt=new WeakMap,Dn=new WeakMap,oe=new WeakSet,Gc=function(){try{I(this,qe,Be(()=>u(this,wr).call(this,u(this,ot))))}catch(t){this.error(t)}},Xc=function(t){const r=u(this,lt).failed,{reset:n,invoke_onerror:i}=j(this,oe,Ri).call(this,t);St(i),r&&I(this,Ke,Be(()=>{r(u(this,ot),()=>t,()=>n)}))},Ri=function(t){var r=!1,n=!1;const i=()=>{if(r){Zs();return}r=!0,n&&uo(),u(this,Ke)!==null&&ur(u(this,Ke),()=>{I(this,Ke,null)}),j(this,oe,Wn).call(this,()=>{j(this,oe,Ii).call(this)})};return{reset:i,invoke_onerror:()=>{var s,o;try{n=!0,(o=(s=u(this,lt)).onerror)==null||o.call(s,t,i),n=!1}catch(l){$t(l,u(this,Ie)&&u(this,Ie).parent)}}}},Yc=function(){const t=u(this,lt).pending;t&&(this.is_pending=!0,I(this,Le,Be(()=>t(u(this,ot)))),St(()=>{var r=I(this,Mt,document.createDocumentFragment()),n=It(),i=!1;if(r.append(n),I(this,qe,j(this,oe,Wn).call(this,()=>{try{return Be(()=>u(this,wr).call(this,n))}catch(a){try{this.error(a),i=!0}catch(s){$t(s,u(this,Ie).parent)}return null}})),u(this,qe)===null){I(this,Mt,null),i&&j(this,oe,wn).call(this,R);return}u(this,Jt)===0&&(u(this,ot).before(r),I(this,Mt,null),ur(u(this,Le),()=>{I(this,Le,null)}),j(this,oe,wn).call(this,R))}))},Ii=function(){try{if(this.is_pending=this.has_pending_snippet(),I(this,Jt,0),I(this,br,0),I(this,qe,Be(()=>{u(this,wr).call(this,u(this,ot))})),u(this,Jt)>0){var t=I(this,Mt,document.createDocumentFragment());vi(u(this,qe),t);const r=u(this,lt).pending;I(this,Le,Be(()=>r(u(this,ot))))}else j(this,oe,wn).call(this,R)}catch(r){this.error(r)}},wn=function(t){this.is_pending=!1,t.transfer_effects(u(this,dn),u(this,vn))},Wn=function(t){var r=U,n=H,i=fe;it(u(this,Ie)),nt(u(this,Ie)),Tr(u(this,Ie).ctx);try{return or.ensure(),t()}finally{it(r),nt(n),Tr(i)}},Li=function(t,r){var n;if(!this.has_pending_snippet()){this.parent&&j(n=this.parent,oe,Li).call(n,t,r);return}I(this,Jt,u(this,Jt)+t),u(this,Jt)===0&&(j(this,oe,wn).call(this,r),u(this,Le)&&ur(u(this,Le),()=>{I(this,Le,null)}),u(this,Mt)&&(u(this,ot).before(u(this,Mt)),I(this,Mt,null)))},zi=function(t){u(this,qe)&&(Me(u(this,qe)),I(this,qe,null)),u(this,Le)&&(Me(u(this,Le)),I(this,Le,null)),u(this,Ke)&&(Me(u(this,Ke)),I(this,Ke,null));let r=u(this,lt).failed;const n=i=>{const{reset:a,invoke_onerror:s}=j(this,oe,Ri).call(this,i);s(),r&&I(this,Ke,j(this,oe,Wn).call(this,()=>{try{return Be(()=>{var o=U;o.b=this,o.f|=Yn,r(u(this,ot),()=>i,()=>a)})}catch(o){return $t(o,u(this,Ie).parent),null}}))};St(()=>{var i;try{i=this.transform_error(t)}catch(a){$t(a,u(this,Ie)&&u(this,Ie).parent);return}i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(n,a=>$t(a,u(this,Ie)&&u(this,Ie).parent)):n(i)})};function q(e,t){var r=t==null?"":typeof t=="object"?`${t}`:t;r!==(e[Gr]??(e[Gr]=e.nodeValue))&&(e[Gr]=r,e.nodeValue=`${r}`)}function Ko(e,t){return Zo(e,t)}const Pn=new Map;function Zo(e,{target:t,anchor:r,props:n={},events:i,context:a,intro:s=!0,transformError:o}){ko();var l=void 0,c=To(()=>{var d=r??t.appendChild(It());Yo(d,{pending:()=>{}},_=>{Gt({});var v=fe;a&&(v.c=a),i&&(n.$$events=i),l=e(_,n)||Qn(),Xt()},o);var h=new Set,w=_=>{for(var v=0;v<_.length;v++){var x=_[v];if(!h.has(x)){h.add(x);var f=Fo(x);for(const S of[t,document]){var g=Pn.get(S);g===void 0&&(g=new Map,Pn.set(S,g));var m=g.get(x);m===void 0?(S.addEventListener(x,mi,{passive:f}),g.set(x,1)):g.set(x,m+1)}}}};return w(bn(Ia)),hi.add(w),()=>{var f;for(var _ of h)for(const g of[t,document]){var v=Pn.get(g),x=v.get(_);--x==0?(g.removeEventListener(_,mi),v.delete(_),v.size===0&&Pn.delete(g)):v.set(_,x)}hi.delete(w),d!==r&&((f=d.parentNode)==null||f.removeChild(d))}});return Qo.set(l,c),l}let Qo=new WeakMap;class wi{constructor(t,r=!0){Je(this,"anchor");V(this,yt,new Map);V(this,Tt,new Map);V(this,Ze,new Map);V(this,xr,new Set);V(this,pn,!0);V(this,hn,t=>{if(u(this,yt).has(t)){var r=u(this,yt).get(t),n=u(this,Tt).get(r);if(n)Nn(n),u(this,xr).delete(r);else{var i=u(this,Ze).get(r);i&&(Nn(i.effect),u(this,Tt).set(r,i.effect),u(this,Ze).delete(r),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),n=i.effect)}for(const[a,s]of u(this,yt)){if(u(this,yt).delete(a),a===t)break;const o=u(this,Ze).get(s);o&&(Me(o.effect),u(this,Ze).delete(s))}for(const[a,s]of u(this,Tt)){if(a===r||u(this,xr).has(a))continue;const o=()=>{if(Array.from(u(this,yt).values()).includes(a)){var c=document.createDocumentFragment();vi(s,c),c.append(It()),u(this,Ze).set(a,{effect:s,fragment:c})}else Me(s);u(this,xr).delete(a),u(this,Tt).delete(a)};u(this,pn)||!n?(u(this,xr).add(a),ur(s,o,!1)):o()}}});V(this,Bn,t=>{u(this,yt).delete(t);const r=Array.from(u(this,yt).values());for(const[n,i]of u(this,Ze))r.includes(n)||(Me(i.effect),u(this,Ze).delete(n))});this.anchor=t,I(this,pn,r)}ensure(t,r){var n=R,i=_a();if(r&&!u(this,Tt).has(t)&&!u(this,Ze).has(t))if(i){var a=document.createDocumentFragment(),s=It();a.append(s),u(this,Ze).set(t,{effect:Be(()=>r(s)),fragment:a})}else u(this,Tt).set(t,Be(()=>r(this.anchor)));if(u(this,yt).set(n,t),i){for(const[o,l]of u(this,Tt))o===t?n.unskip_effect(l):n.skip_effect(l);for(const[o,l]of u(this,Ze))o===t?n.unskip_effect(l.effect):n.skip_effect(l.effect);n.oncommit(u(this,hn)),n.ondiscard(u(this,Bn))}else u(this,hn).call(this,n)}}yt=new WeakMap,Tt=new WeakMap,Ze=new WeakMap,xr=new WeakMap,pn=new WeakMap,hn=new WeakMap,Bn=new WeakMap;function _t(e,t,r=!1){var n=new wi(e),i=r?Wt:0;function a(s,o){n.ensure(s,o)}tn(()=>{var s=!1;t((o,l=0)=>{s=!0,a(l,o)}),s||a(-1,null)},i)}function za(e,t){return t}function Jo(e,t,r){for(var n=[],i=t.length,a,s=t.length,o=0;o<i;o++){let h=t[o];ur(h,()=>{if(a){if(a.pending.delete(h),a.done.add(h),a.pending.size===0){var w=e.outrogroups;bi(e,bn(a.done)),w.delete(a),w.size===0&&(e.outrogroups=null)}}else s-=1},!1)}if(s===0){var l=n.length===0&&r!==null&&e.pending.size===0;if(l){var c=r,d=c.parentNode;$o(d),d.append(c),e.items.clear()}bi(e,t,!l)}else a={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(a)}function bi(e,t,r=!0){var n;if(e.pending.size>0){n=new Set;for(const s of e.pending.values())for(const o of s)n.add(e.items.get(o).e)}for(var i=0;i<t.length;i++){var a=t[i];if(n!=null&&n.has(a)){a.f|=bt;const s=document.createDocumentFragment();vi(a,s)}else Me(t[i],r)}}var Da;function Kt(e,t,r,n,i,a=null){var s=e,o=new Map,l=(t&Gi)!==0;if(l){var c=e;s=c.appendChild(It())}var d=null,h=ei(()=>{var S=r();return ie(S)?S:S==null?[]:bn(S)}),w,_=new Map,v=!0;function x(S){(m.effect.f&Ce)===0&&(m.pending.delete(S),m.fallback=d,el(m,w,s,t,n),d!==null&&(w.length===0?(d.f&bt)===0?Nn(d):(d.f^=bt,on(d,null,s)):ur(d,()=>{d=null})))}function f(S){m.pending.delete(S)}var g=tn(()=>{w=p(h);for(var S=w.length,M=new Set,k=R,$=_a(),A=0;A<S;A+=1){var P=w[A],z=n(P,A),re=v?null:o.get(z);re?(re.v&&Cr(re.v,P),re.i&&Cr(re.i,A),$&&k.unskip_effect(re.e)):(re=tl(o,v?s:Da??(Da=It()),P,z,A,i,t,r),v||(re.e.f|=bt),o.set(z,re)),M.add(z)}if(S===0&&a&&!d&&(v?d=Be(()=>a(s)):(d=Be(()=>a(Da??(Da=It()))),d.f|=bt)),S>M.size&&to(),!v)if(_.set(k,M),$){for(const[he,Qe]of o)M.has(he)||k.skip_effect(Qe.e);k.oncommit(x),k.ondiscard(f)}else x(k);p(h)}),m={effect:g,items:o,pending:_,outrogroups:null,fallback:d};v=!1}function sn(e){for(;e!==null&&(e.f&et)===0;)e=e.next;return e}function el(e,t,r,n,i){var re,he,Qe,Ee,ct,Nt,He,wt,ze;var a=(n&Bs)!==0,s=t.length,o=e.items,l=sn(e.effect.first),c,d=null,h,w=[],_=[],v,x,f,g;if(a)for(g=0;g<s;g+=1)v=t[g],x=i(v,g),f=o.get(x).e,(f.f&bt)===0&&((he=(re=f.nodes)==null?void 0:re.a)==null||he.measure(),(h??(h=new Set)).add(f));for(g=0;g<s;g+=1){if(v=t[g],x=i(v,g),f=o.get(x).e,e.outrogroups!==null)for(const Oe of e.outrogroups)Oe.pending.delete(f),Oe.done.delete(f);if((f.f&Pe)!==0&&(Nn(f),a&&((Ee=(Qe=f.nodes)==null?void 0:Qe.a)==null||Ee.unfix(),(h??(h=new Set)).delete(f))),(f.f&bt)!==0)if(f.f^=bt,f===l)on(f,null,r);else{var m=d?d.next:l;f===e.effect.last&&(e.effect.last=f.prev),f.prev&&(f.prev.next=f.next),f.next&&(f.next.prev=f.prev),Zt(e,d,f),Zt(e,f,m),on(f,m,r),d=f,w=[],_=[],l=sn(d.next);continue}if(f!==l){if(c!==void 0&&c.has(f)){if(w.length<_.length){var S=_[0],M;d=S.prev;var k=w[0],$=w[w.length-1];for(M=0;M<w.length;M+=1)on(w[M],S,r);for(M=0;M<_.length;M+=1)c.delete(_[M]);Zt(e,k.prev,$.next),Zt(e,d,k),Zt(e,$,S),l=S,d=$,g-=1,w=[],_=[]}else c.delete(f),on(f,l,r),Zt(e,f.prev,f.next),Zt(e,f,d===null?e.effect.first:d.next),Zt(e,d,f),d=f;continue}for(w=[],_=[];l!==null&&l!==f;)(c??(c=new Set)).add(l),_.push(l),l=sn(l.next);if(l===null)continue}(f.f&bt)===0&&w.push(f),d=f,l=sn(f.next)}if(e.outrogroups!==null){for(const Oe of e.outrogroups)Oe.pending.size===0&&(bi(e,bn(Oe.done)),(ct=e.outrogroups)==null||ct.delete(Oe));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||c!==void 0){var A=[];if(c!==void 0)for(f of c)(f.f&Pe)===0&&A.push(f);for(;l!==null;)(l.f&Pe)===0&&l!==e.fallback&&A.push(l),l=sn(l.next);var P=A.length;if(P>0){var z=(n&Gi)!==0&&s===0?r:null;if(a){for(g=0;g<P;g+=1)(He=(Nt=A[g].nodes)==null?void 0:Nt.a)==null||He.measure();for(g=0;g<P;g+=1)(ze=(wt=A[g].nodes)==null?void 0:wt.a)==null||ze.fix()}Jo(e,A,z)}}a&&St(()=>{var Oe,Ft;if(h!==void 0)for(f of h)(Ft=(Oe=f.nodes)==null?void 0:Oe.a)==null||Ft.apply()})}function tl(e,t,r,n,i,a,s,o){var l=(s&zs)!==0?(s&Vs)===0?xo(r,!1,!1):Yt(r):null,c=(s&Ds)!==0?Yt(i):null;return{v:l,i:c,e:Be(()=>(a(t,l??r,c??i,o),()=>{e.delete(n)}))}}function on(e,t,r){if(e.nodes)for(var n=e.nodes.start,i=e.nodes.end,a=t&&(t.f&bt)===0?t.nodes.start:r;n!==null;){var s=en(n);if(a.before(n),n===i)return;n=s}}function Zt(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function se(e,t,r,n,i){var o,l;if((o=t.$$host)!=null&&o.$$shadowRoot){const c=li("slot");N(e,c);return}var a=(l=t.$$slots)==null?void 0:l[r],s=!1;a===!0&&(a=t.children,s=!0),a===void 0||a(e,s?()=>n:n)}function rl(e,t,r){var n=new wi(e);tn(()=>{var i=t()??null;n.ensure(i,i&&(a=>r(a,i)))},Wt)}function nl(e,t,r,n,i,a){var s=null,o=e,l=new wi(o,!1);tn(()=>{const c=t()||null;var d=Xs;if(c===null){l.ensure(null,null);return}return l.ensure(c,h=>{if(c){if(s=li(c,d),an(s,s),n){var w=null,_=s.appendChild(It());n(s,_),w==null||w.remove()}U.nodes.end=s,h.before(s)}}),()=>{}},Wt),ui(()=>{})}function il(e,t){var r=void 0,n;wa(()=>{r!==(r=t())&&(n&&(Me(n),n=null),r&&(n=Be(()=>{fi(()=>r(e))})))})}function Ba(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=Ba(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function al(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=Ba(e))&&(n&&(n+=" "),n+=t);return n}function _r(e){return typeof e=="object"?al(e):e??""}const Va=[...` 	
\r\f \v\uFEFF`];function sl(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var i of Object.keys(r))if(r[i])n=n?n+" "+i:i;else if(n.length)for(var a=i.length,s=0;(s=n.indexOf(i,s))>=0;){var o=s+a;(s===0||Va.includes(n[s-1]))&&(o===n.length||Va.includes(n[o]))?n=(s===0?"":n.substring(0,s))+n.substring(o+1):s=o}}return n===""?null:n}function Fa(e,t=!1){var r=t?" !important;":";",n="";for(var i of Object.keys(e)){var a=e[i];a!=null&&a!==""&&(n+=" "+i+": "+a+r)}return n}function xi(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function ol(e,t){if(t){var r="",n,i;if(Array.isArray(t)?(n=t[0],i=t[1]):n=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var a=!1,s=0,o=!1,l=[];n&&l.push(...Object.keys(n).map(xi)),i&&l.push(...Object.keys(i).map(xi));var c=0,d=-1;const x=e.length;for(var h=0;h<x;h++){var w=e[h];if(o?w==="/"&&e[h-1]==="*"&&(o=!1):a?a===w&&(a=!1):w==="/"&&e[h+1]==="*"?o=!0:w==='"'||w==="'"?a=w:w==="("?s++:w===")"&&s--,!o&&a===!1&&s===0){if(w===":"&&d===-1)d=h;else if(w===";"||h===x-1){if(d!==-1){var _=xi(e.substring(c,d).trim());if(!l.includes(_)){w!==";"&&h++;var v=e.substring(c,h).trim();r+=" "+v+";"}}c=h+1,d=-1}}}}return n&&(r+=Fa(n)),i&&(r+=Fa(i,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Re(e,t,r,n,i,a){var s=e[Kn];if(s!==r||s===void 0){var o=sl(r,n,a);o==null?e.removeAttribute("class"):t?e.className=o:e.setAttribute("class",o),e[Kn]=r}else if(a&&i!==a)for(var l in a){var c=!!a[l];(i==null||c!==!!i[l])&&e.classList.toggle(l,c)}return a}function Si(e,t={},r,n){for(var i in r){var a=r[i];t[i]!==a&&(r[i]==null?e.style.removeProperty(i):e.style.setProperty(i,a,n))}}function Ha(e,t,r,n){var i=e[Zn];if(i!==t){var a=ol(t,n);a==null?e.removeAttribute("style"):e.style.cssText=a,e[Zn]=t}else n&&(Array.isArray(n)?(Si(e,r==null?void 0:r[0],n[0]),Si(e,r==null?void 0:r[1],n[1],"important")):Si(e,r,n));return n}function Ua(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Wa(e,t){var r=!("__defaultValue"in e);!r&&e.__defaultValue===t||(e.__defaultValue=t,ja(e,!r||"__value"in e))}function ja(e,t){var r=e.__defaultValue,n=e.multiple,i=n?r??[]:null;if(!(n&&!ie(i))){var a=e.selectedIndex,s=t&&n?new Set(e.selectedOptions):null;for(var o of e.options){var l=ki(o);Ua(o,n?i.includes(l):fa(l,r))}if(t)if(s!==null)for(o of e.options){var c=s.has(o);o.selected!==c&&(o.selected=c)}else e.selectedIndex!==a&&(e.selectedIndex=a)}}function zt(e,t,r=!1){if(e.multiple){if(t==null)return;if(!ie(t))return Ks();for(var n of e.options)n.selected=t.includes(ki(n));return}for(n of e.options){var i=ki(n);if(fa(i,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function gr(e){var t=new MutationObserver(r=>{r.every(ll)||("__defaultValue"in e&&ja(e,!1),"__value"in e&&zt(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ui(()=>{t.disconnect()})}function ki(e){return"__value"in e?e.__value:e.value}function ll(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(r=>r.nodeName==="SELECTEDCONTENT")}return!1}const ln=Symbol("class"),cn=Symbol("style"),Ga=Symbol("is custom element"),Xa=Symbol("is html"),cl=En?"input":"INPUT",ul=En?"option":"OPTION",Ya=En?"select":"SELECT",fl=En?"progress":"PROGRESS";function Cn(e,t){var r=Rn(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==fl)||(e.value=t??"")}function dl(e,t){var r=Rn(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function $e(e,t,r,n){var i=Rn(e);i[t]!==(i[t]=r)&&(t==="loading"&&(e[Ls]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Za(e).has(t)?e[t]=r:e.setAttribute(t,r))}function vl(e,t,r,n,i=!1,a=!1){var s=Rn(e),o=s[Ga],l=!s[Xa],c=t||{},d=e.nodeName===ul,h=e.nodeName===Ya;for(var w in t)!(w in r)&&w[0]+w[1]!=="$$"&&(r[w]=null);r.class?r.class=_r(r.class):r[ln]&&(r.class=null),r[cn]&&(r.style??(r.style=null));var _=Za(e);if(e.nodeName===cl&&"type"in r&&("value"in r||"__value"in r)){var v=r.type;(v!==c.type||v===void 0&&e.hasAttribute("type"))&&(c.type=v,$e(e,"type",v))}for(const k in r){let $=r[k];if(d&&k==="value"&&$==null){e.value=e.__value="",c[k]=$;continue}if(k==="class"){var x=e.namespaceURI==="http://www.w3.org/1999/xhtml";Re(e,x,$,n,t==null?void 0:t[ln],r[ln]),c[k]=$,c[ln]=r[ln];continue}if(k==="style"){Ha(e,$,t==null?void 0:t[cn],r[cn]),c[k]=$,c[cn]=r[cn];continue}var f=c[k];if(!($===f&&!($===void 0&&e.hasAttribute(k)))){c[k]=$;var g=k[0]+k[1];if(g!=="$$")if(g==="on"){const A={},P="$$"+k;let z=k.slice(2);var m=zo(z);if(Io(z)&&(z=z.slice(0,-7),A.capture=!0),!m&&f){if($!=null)continue;e.removeEventListener(z,c[P],A),c[P]=null}if(m)Z(z,e,$),hr([z]);else if($!=null){let re=function(he){c[k].call(this,he)};c[P]=Ho(z,e,re,A)}}else if(k==="style")$e(e,k,$);else if(k==="autofocus")ho(e,!!$);else if(!o&&(k==="__value"||k==="value"&&$!=null))e.value=e.__value=$;else if(k==="selected"&&d)Ua(e,$);else{var S=k;l||(S=Bo(S));var M=S==="defaultValue"||S==="defaultChecked";if(h&&S==="defaultValue")continue;if($==null&&!o&&!M)if(s[k]=null,S==="value"||S==="checked"){let A=e;const P=t===void 0;if(S==="value"){let z=A.defaultValue;A.removeAttribute(S),A.defaultValue=z,A.value=A.__value=P?z:null}else{let z=A.defaultChecked;A.removeAttribute(S),A.defaultChecked=z,A.checked=P?z:!1}}else e.removeAttribute(k);else M||(o||typeof $!="string")&&_.has(S)?(e[S]=$,S in s&&(s[S]=be)):typeof $!="function"&&$e(e,S,$)}}}return c}function qa(e,t,r=[],n=[],i=[],a,s=!1,o=!1){Qi(i,r,n,l=>{var c=void 0,d={},h=e.nodeName===Ya,w=!1;if(wa(()=>{var v=t(...l.map(p)),x=vl(e,c,v,a,s,o);if(w&&h){var f=e;"defaultValue"in v&&Wa(f,v.defaultValue),"value"in v&&zt(f,v.value)}for(let m of Object.getOwnPropertySymbols(d))v[m]||Me(d[m]);for(let m of Object.getOwnPropertySymbols(v)){var g=v[m];m.description===Ys&&(!c||g!==c[m])&&(d[m]&&Me(d[m]),d[m]=Be(()=>il(e,()=>g))),x[m]=g}c=x}),h){var _=e;fi(()=>{var v=c;"defaultValue"in v&&Wa(_,v.defaultValue),zt(_,v.value,!0),gr(_)})}w=!0})}function Rn(e){return e[$n]??(e[$n]={[Ga]:e.nodeName.includes("-"),[Xa]:e.namespaceURI===Yi})}var Ka=new Map;function Za(e){var t=e.getAttribute("is")||e.nodeName,r=Ka.get(t);if(r)return r;Ka.set(t,r=new Set);for(var n,i=e,a=Element.prototype;a!==i;){n=Bi(i);for(var s in n)n[s].set&&s!=="innerHTML"&&s!=="textContent"&&s!=="innerText"&&r.add(s);i=jn(i)}return r}function $i(e,t){return e===t||(e==null?void 0:e[xt])===t}function Qa(e=Qn(),t,r,n){var i=fe.r,a=U;return fi(()=>{var s,o;return ya(()=>{s=o,o=[],qt(()=>{$i(r(...o),e)||(t(e,...o),s&&$i(r(...s),e)&&t(null,...s))})}),()=>{let l=a;for(;l!==i&&l.parent!==null&&l.parent.f&xn;)l=l.parent;const c=()=>{o&&$i(r(...o),e)&&t(null,...o)},d=l.teardown;l.teardown=()=>{c(),d==null||d()}}}),e}function pl(e=!1){const t=fe,r=t.l.u;if(!r)return;let n=()=>vr(t.s);if(e){let i=0,a={};const s=Or(()=>{let o=!1;const l=t.s;for(const c in l)l[c]!==a[c]&&(a[c]=l[c],o=!0);return o&&i++,i});n=()=>p(s)}r.b.length&&Mo(()=>{Ja(t,n),Gn(r.b)}),Rr(()=>{const i=qt(()=>r.m.map(Rs));return()=>{for(const a of i)typeof a=="function"&&a()}}),r.a.length&&Rr(()=>{Ja(t,n),Gn(r.a)})}function Ja(e,t){if(e.l.s)for(const r of e.l.s)p(r);t()}let In=!1;function hl(e){var t=In;try{return In=!1,[e(),In]}finally{In=t}}const _l={get(e,t){if(!e.exclude.includes(t))return p(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var n=U;try{it(e.parent_effect),e.special[t]=gt({get[t](){return e.props[t]}},t,Xi)}finally{it(n)}}return e.special[t](r),la(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),la(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ae(e,t){return new Proxy({props:e,exclude:t,special:{},version:Yt(0),parent_effect:U},_l)}const gl={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Wr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let i=e.props[n];Wr(i)&&(i=i());const a=Ut(i,t);if(a&&a.set)return a.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Wr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const i=Ut(n,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===xt||t===ji)return!1;for(let r of e.props)if(Wr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Wr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function le(...e){return new Proxy({props:e},gl)}function gt(e,t,r,n){var M;var i=!Mr||(r&Hs)!==0,a=(r&Us)!==0,s=(r&Ws)!==0,o=n,l=!0,c=void 0,d=()=>s&&i?(c??(c=Or(n)),p(c)):(l&&(l=!1,o=s?qt(n):n),o);let h;if(a){var w=xt in e||ji in e;h=((M=Ut(e,t))==null?void 0:M.set)??(w&&t in e?k=>e[t]=k:void 0)}var _,v=!1;a?[_,v]=hl(()=>e[t]):_=e[t],_===void 0&&n!==void 0&&(_=d(),h&&(i&&so(),h(_)));var x;if(i?x=()=>{var k=e[t];return k===void 0?d():(l=!0,k)}:x=()=>{var k=e[t];return k!==void 0&&(o=void 0),k===void 0?o:k},i&&(r&Xi)===0)return x;if(h){var f=e.$$legacy;return(function(k,$){return arguments.length>0?((!i||!$||f||v)&&h($?x():k),k):x()})}var g=!1,m=((r&Fs)!==0?Or:ei)(()=>(g=!1,x()));a&&p(m);var S=U;return(function(k,$){if(arguments.length>0){const A=$?p(m):i&&a?De(k):k;return E(m,A),g=!0,o!==void 0&&(o=A),k}return Lt&&g||(S.f&Ce)!==0?m.v:p(m)})}function Ei(e){fe===null&&Js(),Mr&&fe.l!==null?ml(fe).m.push(e):Rr(()=>{const t=qt(e);if(typeof t=="function")return t})}function ml(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const yl="5";typeof window<"u"&&((fs=window.__svelte??(window.__svelte={})).v??(fs.v=new Set)).add(yl);const J=De({ready:!1,cleanScreen:!1,panelOpen:!0,settingsOpen:!1,startupOpen:!0,focusSection:null,focusNonce:0,status:{}});function wl(e){J.panelOpen=!0,J.focusSection=e,J.focusNonce++}const Ge=De({});function es(e){try{return structuredClone(e)}catch{return JSON.parse(JSON.stringify(e))}}function ee(e){var t,r,n;if(e==null)return e;try{return((n=(r=(t=window.XRA)==null?void 0:t.i18n)==null?void 0:r.t)==null?void 0:n.call(r,e))??e}catch{return e}}function Fe(e,t){const r=e.split(".");let n=Ge;for(const i of r){if(n==null)return t;n=n[i]}return n===void 0?t:n}function bl(e){var r,n,i,a,s,o,l,c;const t=window.XRA;if(t){if(e.startsWith("background.")){(n=(r=t.background)==null?void 0:r.apply)==null||n.call(r);return}if(e==="ui.language"){(a=(i=t.i18n)==null?void 0:i.setLanguage)==null||a.call(i,Ge.ui.language);return}if(e==="ui.preview_wireframe"){typeof t.applyMocapWireframeVisibility=="function"&&t.applyMocapWireframeVisibility();return}if(e==="ui.mocap_view"){typeof t.applyMocapWireframeVisibility=="function"&&t.applyMocapWireframeVisibility();return}if(e.startsWith("performance.")){window.XRA_render_fps_limit=Number(Ge.performance.render_fps??60),window.XRA_gpu_preference=String(Ge.performance.gpu_preference||"default"),window.XRA_preserve_drawing_buffer=Ge.performance.preserve_drawing_buffer!==!1,window.XRA_antialias=Ge.performance.antialias!=="off",(o=(s=t.events)==null?void 0:s.emit)==null||o.call(s,"performance",Ge.performance);return}(c=(l=t.events)==null?void 0:l.emit)==null||c.call(l,"config-change",{path:e,value:Fe(e)})}}function st(e,t){var a,s;const r=window.XRA,n=e.split(".");let i=Ge;for(let o=0;o<n.length-1;o++)i[n[o]]==null&&(i[n[o]]={}),i=i[n[o]];if(i[n[n.length-1]]=t,r!=null&&r.config){let o=r.config;for(let l=0;l<n.length-1;l++)o[n[l]]==null&&(o[n[l]]={}),o=o[n[l]];o[n[n.length-1]]=t}bl(e);try{(s=(a=r==null?void 0:r.profileService)==null?void 0:a.save)==null||s.call(a)}catch{}}function ts(e,t,r){return new Promise((n,i)=>{const a=setTimeout(()=>i(new Error(`${r} timed out after ${t} ms`)),t);Promise.resolve(e).then(s=>{clearTimeout(a),n(s)},s=>{clearTimeout(a),i(s)})})}async function rs({timeout:e=12e3,dataTimeout:t=8e3}={}){var n,i,a;const r=(n=window.XRA)==null?void 0:n.nativeBridge;if(!(r!=null&&r.startNativeStreamer))throw new Error("native bridge unavailable");try{await ts(r.startNativeStreamer(),e,"Camera start");const s=performance.now()+t;for(;performance.now()<s;){if((i=r.cameraDataReady)!=null&&i.call(r))return!0;await new Promise(o=>setTimeout(o,120))}return!0}catch(s){try{await((a=r.forceStopCamera)==null?void 0:a.call(r))}catch{}throw s}}async function xl({timeout:e=8e3}={}){var r,n;const t=(r=window.XRA)==null?void 0:r.nativeBridge;if(t!=null&&t.stopNativeStreamer)try{await ts(t.stopNativeStreamer(),e,"Camera stop")}catch(i){try{await((n=t.forceStopCamera)==null?void 0:n.call(t))}catch{}throw i}}function Ln(){var e,t,r;J.cleanScreen=!J.cleanScreen,document.body.classList.toggle("xra-total-clean-screen",J.cleanScreen);try{(r=(t=(e=window.XRA)==null?void 0:e.ui)==null?void 0:t.setHidden)==null||r.call(t,J.cleanScreen)}catch{}}function Sl(){var e;try{Object.assign(Ge,es(((e=window.XRA)==null?void 0:e.config)||{}))}catch{}}function ns(){var e;try{const t=(e=window.SA_bridge)==null?void 0:e.backend;t&&typeof t.status=="function"&&(J.status=t.status()||{})}catch{}}function kl(){const e=()=>window.XRA&&window.XRA.config?(Object.assign(Ge,es(window.XRA.config)),J.ready=!0,ns(),window.addEventListener("keydown",t=>{t.key==="Escape"&&J.cleanScreen&&(t.preventDefault(),Ln())},!0),!0):!1;if(!e()){const t=setInterval(()=>{e()&&clearInterval(t)},200)}}const $l={camera:{title:"Camera",icon:"Camera"},devices:{title:"Devices",icon:"SlidersHorizontal"},pose_model:{title:"Pose model",icon:"PersonStanding"},performance:{title:"Performance",icon:"Zap"},tracking:{title:"Motion capture",icon:"Activity"},body:{title:"Body",icon:"PersonStanding"},collider:{title:"Body collider",icon:"Shield"},lip:{title:"Audio & Lip-sync",icon:"Mic"},background:{title:"Background",icon:"Image"},avatar:{title:"Character position (avatar only)",icon:"User"},second_avatar:{title:"Remote avatar (Studio Link)",icon:"Globe"},stage:{title:"3D Stage & Environment",icon:"Landmark"},recorder:{title:"Recording / capture",icon:"Video"},visual_effects:{title:"Visual effects",icon:"Sparkles"},debug:{title:"Diagnostics",icon:"Bug"},ui:{title:"UI & overlays",icon:"Monitor"}},is=["performance","tracking","body","collider","lip","background","stage","avatar","second_avatar","recorder","visual_effects","debug","ui","camera","devices","pose_model"],El=new Set(["left_settings","_custom_","_excluded_"]),Al=new Set(["camera.view_presets","camera.selected_view_preset","ui.preview_video","ui.preview_wireframe","ui.preview_debug","performance.auto_last_result","recorder.output_dir"]);function as(e){const t=String(e).replace(/_/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").trim();return t.charAt(0).toUpperCase()+t.slice(1)}const Ml={"ui.language":{type:"select",options:()=>{var e,t;return((t=(e=window.XRA)==null?void 0:e.i18n)==null?void 0:t.LANGUAGES)||[["en","English"]]}},"background.mode":{type:"select",options:[["color","Color"],["image","Image"],["none","None (transparent · OBS)"]]},"background.color":{type:"color"},"background.path":{type:"text"},"ui.mocap_view":{type:"select",label:"Mocap window",options:[["off","Off"],["both","Webcam + skeleton"],["wireframe","Skeleton only"],["video","Webcam only"]]},"ui.mocap_visibility":{type:"select",label:"Mocap window visibility",options:[["always","Always on (black while idle)"],["auto","Auto (hide when tracking is off)"]]},"performance.tracking_pipeline":{type:"select",label:"Tracking mode",options:[["FULL_BODY","Full Body"],["FACE","Face only"],["UPPER_BODY","Upper body"]]},"performance.render_resolution":{type:"select",options:[["720p","720p (HD · GPU Saving)"],["1080p","1080p (Full HD · Recommended)"],["1440p","1440p (2K · High resolution)"]]},"performance.render_fps":{type:"slider",min:15,max:240,step:1},"performance.gpu_preference":{type:"select",label:"Graphics card (GPU)",options:[["default","Default"],["high-performance","Dedicated GPU (High Performance)"],["low-power","Integrated GPU (Low Power)"]]},"performance.shadows":{type:"select",options:[["auto","Auto"],["on","Enabled"],["off","Disabled (GPU saving)"]]},"performance.antialias":{type:"select",label:"Anti-Aliasing (AA)",options:[["auto","Enabled (Hardware MSAA · Recommended)"],["off","Disabled"]]},"performance.spring_bone":{type:"select",label:"Hair/cloth physics (Spring Bone)",options:[["full","Full (every frame)"],["half","Half (1 frame out of 2 · Saving)"],["off","Off"]]},"performance.infer_mode":{type:"select",options:[["native","Native (Auto)"],["640x360","640×360 (Recommended · 30 FPS smooth)"],["640x480","640×480 (Standard 4:3 format)"],["1280x720","1280×720 (HD 720p · High precision)"]]},"performance.pose_fps":{type:"slider",min:5,max:30,step:1},"performance.hand_fps":{type:"slider",min:5,max:30,step:1},"performance.min_tracking_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_pose_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_face_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_joint_confidence":{type:"slider",min:.05,max:1,step:.05},"tracking.hand_recovery_mode":{type:"select",options:[["normal","Normal"],["aggressive","Aggressive"],["off","Off"]]},"tracking.hand_detection_sensitivity":{type:"select",options:[["high","High"],["normal","Normal"],["low","Low"]]},"tracking.stabilize_hand_percent":{type:"slider",min:0,max:100,step:1},"tracking.stabilize_arm":{type:"slider",min:0,max:100,step:1},"tracking.stabilize_arm_time":{type:"slider",min:0,max:2,step:.05},"tracking.native_smoothing":{type:"slider",min:0,max:1,step:.01},"tracking.body_bend_reduction":{type:"slider",min:0,max:1,step:.01},"tracking.upper_body_guard_strength":{type:"slider",min:0,max:1,step:.01},"tracking.guard_jump_deg":{type:"slider",min:5,max:120,step:1},"tracking.guard_hold_ms":{type:"slider",min:0,max:2e3,step:10},"tracking.guard_reacquire_deg":{type:"slider",min:5,max:120,step:1},"tracking.adaptive_smoothing_strength":{type:"slider",min:0,max:1,step:.01},"tracking.guard_confidence_min":{type:"slider",min:0,max:1,step:.01},"tracking.guard_release_ms":{type:"slider",min:0,max:2e3,step:10},"tracking.guard_mode":{type:"select",options:[["off","Off"],["auto","Auto"]]},"tracking.desk_torso_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_hips_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_legs_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_max_yaw_deg":{type:"slider",min:0,max:90,step:1},"tracking.desk_max_pitch_deg":{type:"slider",min:0,max:90,step:1},"tracking.desk_max_roll_deg":{type:"slider",min:0,max:90,step:1},"body.anchor_strength":{type:"slider",min:0,max:1,step:.01},"body.transition_ms":{type:"slider",min:0,max:2e3,step:10},"avatar.offset_x":{type:"slider",min:-5,max:5,step:.01},"avatar.offset_y":{type:"slider",min:-5,max:5,step:.01},"avatar.offset_z":{type:"slider",min:-5,max:5,step:.01},"avatar.rotation_y":{type:"slider",min:-180,max:180,step:1},"second_avatar.offset_x":{type:"slider",min:-20,max:20,step:.1},"second_avatar.offset_y":{type:"slider",min:-10,max:10,step:.1},"second_avatar.offset_z":{type:"slider",min:-10,max:10,step:.1},"second_avatar.rotation_y":{type:"slider",min:-180,max:180,step:1},"stage.scale":{type:"slider",min:.1,max:5,step:.01},"stage.rotation_x":{type:"slider",min:-180,max:180,step:1},"stage.rotation_y":{type:"slider",min:-180,max:180,step:1},"stage.rotation_z":{type:"slider",min:-180,max:180,step:1},"stage.offset_x":{type:"slider",min:-10,max:10,step:.05},"stage.offset_y":{type:"slider",min:-10,max:10,step:.05},"stage.offset_z":{type:"slider",min:-10,max:10,step:.05},"stage.scene_zoom":{type:"slider",min:.5,max:3,step:.01},"stage.lights_intensity":{type:"slider",min:0,max:3,step:.05},"collider.preset":{type:"select",options:[["CUSTOM","Custom"],["NONE","None"]]},"collider.reaction":{type:"select",options:[["z_push","Z push"],["bounce","Bounce"],["block","Block"]]},"collider.head":{type:"slider",min:0,max:200,step:1},"collider.chest":{type:"slider",min:0,max:200,step:1},"collider.waist":{type:"slider",min:0,max:200,step:1},"collider.hip":{type:"slider",min:0,max:200,step:1},"collider.front_clearance":{type:"slider",min:0,max:50,step:1},"lip.analysis_fps":{type:"slider",min:5,max:60,step:1},"lip.fft_size":{type:"select",label:"FFT size",options:[["256","256"],["512","512"],["1024","1024"],["2048","2048"]]},"lip.mic_mix":{type:"slider",min:0,max:1,step:.01},"lip.threshold":{type:"slider",min:0,max:.2,step:.001},"lip.response_gain":{type:"slider",min:0,max:3,step:.05},"lip.vowel_emphasis":{type:"slider",min:0,max:3,step:.05},"recorder.mode":{type:"select",label:"Recording source",options:[["video_audio","Video + Audio"],["video","Video only"],["audio","Audio only"]]},"recorder.audio_only_variant":{type:"select",label:"Audio only mode",options:[["both","Processed + RAW"],["processed","Processed"],["raw","RAW"]]},"recorder.capture_source":{type:"select",label:"Output source",options:[["classic_v74","Classic output · recommended"],["clean_scene","Clean scene output · experimental (no UI)"],["native_xr","XR native video only · fallback"]]},"recorder.output_format":{type:"select",options:[["webm","WebM"],["mp4","MP4"]]},"recorder.audio_profile":{type:"select",options:[["podcast","Podcast"],["call","Call (Browser echo/noise filters)"]]},"recorder.hardware_encode":{type:"select",options:[["auto","Auto"],["on","On"],["off","Off (CPU)"]]},"recorder.width":{type:"slider",min:320,max:3840,step:2},"recorder.height":{type:"slider",min:240,max:2160,step:2},"recorder.fps":{type:"slider",min:15,max:60,step:1},"recorder.gate_threshold_db":{type:"slider",min:-80,max:-5,step:.5},"recorder.gate_hold_ms":{type:"slider",min:0,max:1e3,step:10},"recorder.gate_release_ms":{type:"slider",min:0,max:1e3,step:10},"recorder.video_bps":{type:"slider",min:5e5,max:2e7,step:1e5},"recorder.audio_bps":{type:"slider",min:32e3,max:32e4,step:8e3},"recorder.segment_minutes":{type:"select",options:[["0","Off"],["30","Every 30 min"],["60","Every 60 min"]]},"recorder.raw_audio_format":{type:"select",options:[["flac","FLAC (lossless)"],["wav","WAV (large)"]]},"recorder.filename":{type:"text"},"camera.optimized":{type:"toggle"},"camera.width":{type:"slider",min:160,max:1920,step:2},"camera.height":{type:"slider",min:120,max:1080,step:2},"camera.fps":{type:"slider",min:5,max:60,step:1}};function Tl(e){const t=[];for(const[r,n]of Object.entries(e||{})){if(El.has(r)||!n||typeof n!="object"||Array.isArray(n))continue;const i=$l[r]||{},a=[];for(const[s,o]of Object.entries(n)){const l=`${r}.${s}`;if(Al.has(l))continue;const c=Ml[l]||{};if(c.hidden||o!==null&&typeof o=="object")continue;const d=c.type||(typeof o=="boolean"?"toggle":typeof o=="number"?"number":"text");a.push({type:d,path:l,label:c.label||as(s),min:c.min,max:c.max,step:c.step,options:c.options})}a.length&&t.push({id:r,title:i.title||as(r),icon:i.icon||"⚙",controls:a})}return t.sort((r,n)=>{const i=is.indexOf(r.id),a=is.indexOf(n.id);return(i<0?999:i)-(a<0?999:a)}),t}var Nl=me("<option> </option>"),Ol=me("<select></select>"),Pl=me("<select><option> </option><option> </option></select>"),Cl=me('<input type="range"/> <span class="xra-val"> </span>',1),Rl=me('<input type="checkbox"/>'),Il=me('<input type="color"/>'),Ll=me('<input type="number"/>'),zl=me('<input type="text"/>'),Dl=me('<label class="xra-row"><span class="xra-row-label"> </span> <!></label>');function Bl(e,t){Gt(t,!0);const r=rt(()=>typeof t.control.options=="function"?t.control.options():t.control.options||[]),n=f=>f===!1?"off":"auto",i=f=>f==="off"?!1:null;var a=Dl(),s=L(a),o=Y(s,!0),l=C(s,2);{var c=f=>{var g=Ol();Kt(g,21,()=>p(r),za,(S,M)=>{var k=Nl(),$=Y(k,!0),A={};ge(P=>{q($,P),A!==(A=p(M)[0])&&(k.value=(k.__value=A)??"")},[()=>ee(p(M)[1])]),N(S,k)});var m;gr(g),ge(S=>{m!==(m=S)&&(g.value=(g.__value=m)??"",zt(g,m))},[()=>Fe(t.control.path)]),Z("change",g,S=>st(t.control.path,S.currentTarget.value)),N(f,g)},d=f=>{var g=Pl(),m=L(g),S=Y(m,!0);m.value=m.__value="auto";var M=C(m),k=Y(M,!0);M.value=M.__value="off";var $;gr(g),ge((A,P,z)=>{q(S,A),q(k,P),$!==($=z)&&(g.value=(g.__value=$)??"",zt(g,$))},[()=>ee("Auto (follow tracking)"),()=>ee("Off"),()=>n(Fe(t.control.path))]),Z("change",g,A=>st(t.control.path,i(A.currentTarget.value))),N(f,g)},h=f=>{var g=Cl(),m=X(g),S=C(m,2),M=Y(S,!0);ge((k,$)=>{$e(m,"min",t.control.min),$e(m,"max",t.control.max),$e(m,"step",t.control.step),Cn(m,k),q(M,$)},[()=>Fe(t.control.path,t.control.min),()=>Fe(t.control.path)]),Z("input",m,k=>st(t.control.path,Number(k.currentTarget.value))),N(f,g)},w=f=>{var g=Rl();ge(m=>dl(g,m),[()=>!!Fe(t.control.path)]),Z("change",g,m=>st(t.control.path,m.currentTarget.checked)),N(f,g)},_=f=>{var g=Il();ge(m=>Cn(g,m),[()=>Fe(t.control.path)]),Z("input",g,m=>st(t.control.path,m.currentTarget.value)),N(f,g)},v=f=>{var g=Ll();ge(m=>{$e(g,"step",t.control.step||"any"),Cn(g,m)},[()=>Fe(t.control.path,0)]),Z("input",g,m=>st(t.control.path,Number(m.currentTarget.value))),N(f,g)},x=f=>{var g=zl();ge(m=>Cn(g,m),[()=>Fe(t.control.path,"")]),Z("change",g,m=>st(t.control.path,m.currentTarget.value)),N(f,g)};_t(l,f=>{t.control.type==="select"?f(c):t.control.type==="tristate"?f(d,1):t.control.type==="slider"?f(h,2):t.control.type==="toggle"?f(w,3):t.control.type==="color"?f(_,4):t.control.type==="number"?f(v,5):t.control.type==="text"&&f(x,6)})}ge(f=>q(o,f),[()=>ee(t.control.label)]),N(e,a),Xt()}hr(["change","input"]),fo();/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
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
 */const ss=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();var Hl=jo("<svg><!><!></svg>");function ce(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]),n=ae(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Gt(t,!1);let i=gt(t,"name",8,void 0),a=gt(t,"color",8,"currentColor"),s=gt(t,"size",8,24),o=gt(t,"strokeWidth",8,2),l=gt(t,"absoluteStrokeWidth",8,!1),c=gt(t,"iconNode",24,()=>[]);pl();var d=Hl();qa(d,(_,v,x)=>({...Vl,..._,...n,width:s(),height:s(),stroke:a(),"stroke-width":v,class:x}),[()=>Fl(n)?void 0:{"aria-hidden":"true"},()=>(vr(l()),vr(o()),vr(s()),qt(()=>l()?Number(o())*24/Number(s()):o())),()=>(vr(ss),vr(i()),vr(r),qt(()=>ss("lucide-icon","lucide",i()?`lucide-${i()}`:"",r.class)))]);var h=L(d);Kt(h,1,c,za,(_,v)=>{var x=rt(()=>Hi(p(v),2));let f=()=>p(x)[0],g=()=>p(x)[1];var m=Q(),S=X(m);nl(S,f,!0,(M,k)=>{qa(M,()=>({...g()}))}),N(_,m)});var w=C(h);se(w,t,"default",{}),N(e,d),Xt()}function Ul(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];ce(e,le({name:"camera"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Wl(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M10 5H3"}],["path",{d:"M12 19H3"}],["path",{d:"M14 3v4"}],["path",{d:"M16 17v4"}],["path",{d:"M21 12h-9"}],["path",{d:"M21 19h-5"}],["path",{d:"M21 5h-7"}],["path",{d:"M8 10v4"}],["path",{d:"M8 12H3"}]];ce(e,le({name:"sliders-horizontal"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function jl(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"5",r:"1"}],["path",{d:"m9 20 3-6 3 6"}],["path",{d:"m6 8 6 2 6-2"}],["path",{d:"M12 10v4"}]];ce(e,le({name:"person-standing"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Gl(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];ce(e,le({name:"zap"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Xl(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]];ce(e,le({name:"activity"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Yl(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];ce(e,le({name:"shield"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function ql(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 19v3"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3"}]];ce(e,le({name:"mic"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Kl(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]];ce(e,le({name:"image"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Zl(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M10 18v-7"}],["path",{d:"M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"}],["path",{d:"M14 18v-7"}],["path",{d:"M18 18v-7"}],["path",{d:"M3 22h18"}],["path",{d:"M6 18v-7"}]];ce(e,le({name:"landmark"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Ql(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];ce(e,le({name:"user"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Jl(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];ce(e,le({name:"globe"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function ec(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]];ce(e,le({name:"video"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function tc(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];ce(e,le({name:"sparkles"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function rc(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 20v-9"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97"}],["path",{d:"M22 13h-4"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97"}],["path",{d:"M6 13H2"}],["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13"}]];ce(e,le({name:"bug"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function nc(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]];ce(e,le({name:"monitor"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function ic(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"10",r:"8"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 22h10"}],["path",{d:"M12 22v-4"}]];ce(e,le({name:"webcam"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function os(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}]];ce(e,le({name:"circle"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function ac(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];ce(e,le({name:"square"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function sc(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]];ce(e,le({name:"eye"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function oc(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}],["path",{d:"m2 2 20 20"}]];ce(e,le({name:"eye-off"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function lc(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];ce(e,le({name:"folder-open"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function cc(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];ce(e,le({name:"info"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function uc(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ce(e,le({name:"x"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function fc(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];ce(e,le({name:"settings"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function dc(e,t){const r=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ce(e,le({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=Q(),o=X(s);se(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Xe(e,t){const r={Camera:Ul,SlidersHorizontal:Wl,PersonStanding:jl,Zap:Gl,Activity:Xl,Shield:Yl,Mic:ql,Image:Kl,Landmark:Zl,User:Ql,Globe:Jl,Video:ec,Sparkles:tc,Bug:rc,Monitor:nc,Webcam:ic,Circle:os,Square:ac,Eye:sc,EyeOff:oc,FolderOpen:lc,Info:cc,X:uc,Settings:fc,RefreshCw:dc};let n=gt(t,"name",3,"Circle"),i=gt(t,"size",3,16),a=gt(t,"strokeWidth",3,2),s=gt(t,"class",3,"");const o=rt(()=>r[n()]??os);var l=Q(),c=X(l);rl(c,()=>p(o),(d,h)=>{h(d,{get size(){return i()},get"stroke-width"(){return a()},get class(){return s()}})}),N(e,l)}var vc=me('<div class="xra-sec-body"></div>'),pc=me('<details class="xra-sec"><summary><span class="xra-sec-title"><!> <span> </span></span> <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></summary> <!></details>');function hc(e,t){Gt(t,!0);const r="ui.sections_open";let n=G(De(qt(()=>{var f;return((f=Fe(r,{}))==null?void 0:f[t.section.id])??!1}))),i;function a(){E(n,!p(n)),st(`${r}.${t.section.id}`,p(n))}Rr(()=>{J.focusNonce,!(J.focusSection!==t.section.id||!J.panelOpen)&&(E(n,!0),st(`${r}.${t.section.id}`,!0),requestAnimationFrame(()=>i==null?void 0:i.scrollIntoView({block:"nearest",behavior:"smooth"})))});var s=pc(),o=L(s),l=L(o),c=L(l);Xe(c,{get name(){return t.section.icon},size:15,class:"xra-sec-icon"});var d=C(c,2),h=Y(d,!0),w=C(l,2);let _;var v=C(o,2);{var x=f=>{var g=vc();Kt(g,21,()=>t.section.controls,m=>m.path,(m,S)=>{var M=Q(),k=X(M);{var $=P=>{Bl(P,{get control(){return p(S)}})},A=rt(()=>!p(S).when||p(S).when(Ge));_t(k,P=>{p(A)&&P($)})}N(m,M)}),N(f,g)};_t(v,f=>{p(n)&&f(x)})}Qa(s,f=>i=f,()=>i),ge(f=>{s.open=p(n),q(h,f),_=Re(w,0,"xra-sec-chevron",null,_,{open:p(n)})},[()=>ee(t.section.title)]),Z("click",o,f=>{f.preventDefault(),a()}),N(e,s),Xt()}hr(["click"]);var un=me('<option class="svelte-x8svx4"> </option>'),_c=me('<div class="warn svelte-x8svx4"> </div>'),gc=me('<div class="xra-startup svelte-x8svx4"><div class="card svelte-x8svx4"><div class="head svelte-x8svx4"><div class="svelte-x8svx4"><h2 class="svelte-x8svx4">XR Animator</h2> <div class="sub svelte-x8svx4"> </div></div></div> <div class="grid svelte-x8svx4"><label class="field svelte-x8svx4"><div class="sub svelte-x8svx4">Language</div> <select class="svelte-x8svx4"></select></label> <label class="field svelte-x8svx4"><div class="sub svelte-x8svx4">Master preset</div> <select class="svelte-x8svx4"></select></label></div> <div class="status svelte-x8svx4"> </div> <section class="camera svelte-x8svx4"><div class="camera-head svelte-x8svx4"><div class="camera-title svelte-x8svx4"> </div> <div> </div></div> <div class="camera-row svelte-x8svx4"><select class="svelte-x8svx4"><!></select> <button type="button" class="action svelte-x8svx4"><!></button></div> <!></section> <div class="sub bg svelte-x8svx4"> </div> <div class="avatar svelte-x8svx4"><div class="sub svelte-x8svx4"> </div> <button type="button" class="action svelte-x8svx4"> </button></div> <div class="foot svelte-x8svx4"><button type="button" class="action primary confirm svelte-x8svx4"> </button></div></div></div>');function mc(e,t){Gt(t,!0);const r=()=>window.XRA,n=y=>ee(y),i=["AUTO","ECO","LOW","BALANCED","QUALITY","HIGH","MAX","CUSTOM"];function a(){var y,b,T;try{(T=(b=(y=r())==null?void 0:y.profileService)==null?void 0:b.save)==null||T.call(b,0)}catch{}}const s=(()=>{var b,T;const y=(T=(b=r())==null?void 0:b.i18n)==null?void 0:T.LANGUAGES;return Array.isArray(y)&&y.length?y:[["auto","Auto / System"],["en","English"],["it","Italiano"]]})();let o=G("auto"),l=G("CUSTOM"),c=G(""),d=G("default"),h=G(De([])),w=G(!1),_=G(""),v=G(!1),x=G(""),f=G(""),g=G("Loading avatar…"),m=G(!0),S=G(!1),M=G(!1),k=G(!1),$=G(!1),A=0,P=[];async function z(y){const b=r();if(y=String(y||"CUSTOM").toUpperCase(),y==="CUSTOM"){b.config.performance.master_preset="CUSTOM",a(),E(c,"CUSTOM · ready");return}if(y==="AUTO"){E(c,"Benchmarking…");const T=await b.performance.benchmarkHardwareOnly();E(c,`AUTO → ${T.preset} (${T.fps.toFixed(1)} fps)`),await b.performance.applyPresetSafe(T.preset),b.config.performance.master_preset="AUTO",b.config.performance.auto_last_result=T,a();return}E(c,`${y}: applying…`),await b.performance.applyPresetSafe(y),E(c,`${y} · applied`)}function re(y=""){var F,W,ne;const b=(F=r())==null?void 0:F.nativeBridge,T=((W=b==null?void 0:b.activeCamera)==null?void 0:W.call(b))||{},O=!!((ne=b==null?void 0:b.cameraRunning)!=null&&ne.call(b));E(v,O),E(x,y||(O?`${n("ON")} · ${T.label||n("Default camera")}`:n("OFF")),!0)}async function he(y=!1){var T,O,F;const b=(T=r())==null?void 0:T.nativeBridge;if(b!=null&&b.enumerateCameras){E(k,!0);try{const W=await b.enumerateCameras({requestPermission:y}),ne=b.activeCamera()||{};E(h,(W||[]).map(Te=>({deviceId:Te.deviceId,label:Te.label})),!0);const _e=ne.deviceId||((O=Ge.devices)==null?void 0:O.camera_device_id)||"";E(_,p(h).some(Te=>Te.deviceId===_e)?_e:((F=p(h)[0])==null?void 0:F.deviceId)||"",!0),E(w,!0),re()}catch{E(w,!0),re(n("Camera unavailable"))}finally{E(k,!1)}}}async function Qe(y){var F,W;const b=(F=r())==null?void 0:F.nativeBridge,T=((W=y==null?void 0:y.currentTarget)==null?void 0:W.value)??p(_),O=p(h).find(ne=>ne.deviceId===T);if(O){E(k,!0);try{const ne={deviceId:O.deviceId,label:O.label};b.cameraRunning()?await b.switchCamera(ne):await b.setCameraPreference(ne),re()}catch(ne){re("Error · "+ne.message)}finally{E(k,!1)}}}function Ee(){var T,O,F,W,ne,_e,Te,We;const y=(F=(O=(T=r())==null?void 0:T.xraBackend)==null?void 0:O.snapshot)==null?void 0:F.call(O),b=(y==null?void 0:y.capture)||((We=(Te=(_e=(ne=(W=window.SA_bridge)==null?void 0:W.backend)==null?void 0:ne.status)==null?void 0:_e.call(ne))==null?void 0:Te.backend)==null?void 0:We.capture);if(b!=null&&b.camera_busy){const Pt=(b.busy_processes&&b.busy_processes.length?b.busy_processes:b.busy_process?[b.busy_process]:[]).filter(Sr=>!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(String(Sr).trim()));if(Pt.length)return{busy:!0,proc:Pt.join(", ")}}if(b!=null&&b.last_error&&b.last_error.includes("Webcam occupata")){const xe=b.last_error.match(/Webcam occupata da:\s*([^.]+)/i),Pt=xe?xe[1].trim():"";if(!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(Pt))return{busy:!0,proc:b.last_error}}return{busy:!1,proc:""}}function ct(){var y,b,T,O,F,W,ne,_e,Te;if(typeof((b=(y=r())==null?void 0:y.nativeBridge)==null?void 0:b.isAvatarReady)=="function")return r().nativeBridge.isAvatarReady();if((T=window.MMD_SA)!=null&&T.MMD_started){const We=(W=(F=(O=window.MMD_SA)==null?void 0:O.THREEX)==null?void 0:F.get_model)==null?void 0:W.call(F,0);let xe=We;if((We==null?void 0:We.type)==="MMD_dummy")try{xe=We.model||null}catch{xe=null}const Pt=((ne=xe==null?void 0:xe.model)==null?void 0:ne.scene)||(xe==null?void 0:xe.mesh)||(xe==null?void 0:xe.scene)||null;if(xe&&!(We!=null&&We.loading)&&!xe.loading&&!((Te=(_e=window.MMD_SA)==null?void 0:_e.THREEX)!=null&&Te._loading_model)&&Pt)return Pt.visible!==!1}return!1}function Nt(){var b,T,O;const y=(b=r())==null?void 0:b.xraBackend;return!y||!y.active?!0:!!((O=(T=y.snapshot)==null?void 0:T.call(y))!=null&&O.ready)}function He(){if(p($)||!J.startupOpen)return;const y=Ee();E(f,y.busy?`Webcam in use by another application (${y.proc}). Close it to start tracking.`:"",!0),ct()?Nt()?y.busy?(E(m,!0),E(g,n("Camera busy…"),!0)):p(S)?E(m,!0):(E(m,!1),E(g,"START")):(E(m,!0),E(g,n("Connecting to backend…"),!0)):(E(m,!0),E(g,n("Loading avatar…"),!0))}async function wt(y){var T,O,F;const b=((T=y==null?void 0:y.currentTarget)==null?void 0:T.value)??p(l);E(l,b,!0),E(M,!0);try{await z(b),r().events.emit("state",{path:"performance.master_preset",value:r().config.performance.master_preset}),Sl()}catch(W){console.error("[XRA START]",W),E(c,"Preset error: "+W.message)}finally{E(M,!1),(F=(O=r().ui)==null?void 0:O.refresh)==null||F.call(O)}}function ze(y){var b,T,O,F;E(o,((b=y==null?void 0:y.currentTarget)==null?void 0:b.value)??p(o),!0),(F=(O=(T=r())==null?void 0:T.i18n)==null?void 0:O.setLanguage)==null||F.call(O,p(o))}async function Oe(){var y,b;try{await((b=(y=r().nativeBridge)==null?void 0:y.openVrmPicker)==null?void 0:b.call(y))}catch(T){r().toast("VRM loader: "+T.message,"error",4500)}}async function Ft(y=!1){var T,O,F,W,ne,_e;if(p($)||p(m))return;E($,!0),A&&(clearInterval(A),A=0),E(S,!0),E(g,"Starting…");const b=r();if(a(),J.startupOpen=!1,(O=(T=b.ui)==null?void 0:T.refresh)==null||O.call(T),y)try{typeof b.whenNativeReady=="function"&&await b.whenNativeReady(15e3),(F=b.xraBackend)!=null&&F.waitUntilReady&&await b.xraBackend.waitUntilReady(6e3).catch(()=>{}),await rs()}catch(Te){(ne=(W=globalThis.XRA_CAMERA_OWNERSHIP)==null?void 0:W.isOwnershipError)!=null&&ne.call(W,Te)||(console.warn("[XRA START]","Auto-starting camera on START failed",Te),(_e=b.toast)==null||_e.call(b,"Starting camera: "+Te.message,"warn",5e3))}}Ei(()=>{var b,T,O,F,W,ne,_e,Te,We,xe,Pt,Sr,ys,ws,bs,xs,Ss,Hn,ks,$s,Es,As;const y=r();E(c,n("Ready."),!0),E(o,((T=(b=y==null?void 0:y.config)==null?void 0:b.ui)==null?void 0:T.language)||"auto",!0),E(l,((F=(O=y==null?void 0:y.config)==null?void 0:O.performance)==null?void 0:F.master_preset)==="MINIMAL"?"ECO":((ne=(W=y==null?void 0:y.config)==null?void 0:W.performance)==null?void 0:ne.master_preset)||"CUSTOM",!0),E(d,((Te=(_e=y==null?void 0:y.config)==null?void 0:_e.background)==null?void 0:Te.path)||((xe=(We=y==null?void 0:y.config)==null?void 0:We.background)==null?void 0:xe.color)||"default",!0);try{const Ct=(ys=(Sr=(Pt=window.SA_bridge)==null?void 0:Pt.backend)==null?void 0:Sr.status)==null?void 0:ys.call(Sr),Un=(bs=(ws=window.System)==null?void 0:ws._browser)==null?void 0:bs.camera;(Ss=(xs=Ct==null?void 0:Ct.backend)==null?void 0:xs.capture)!=null&&Ss.running&&!(Un!=null&&Un.running)&&((ks=(Hn=window.SA_bridge.backend)==null?void 0:Hn.stop)==null||ks.call(Hn).catch(()=>{}))}catch{}re(),setTimeout(()=>he(!1),100),A=setInterval(He,300),window.addEventListener("MMDStarted",He),($s=y.xraBackend)!=null&&$s.onStatus&&y.xraBackend.onStatus(He),He(),(As=(Es=y.whenNativeReady)==null?void 0:Es.call(y))==null||As.then(()=>{J.startupOpen&&he(!1)});for(const Ct of["camera-started","camera-stopped","camera-switched"])P.push(y.events.on(Ct,()=>{J.startupOpen&&he(!1)}));for(const Ct of["avatar-loading","avatar-changed","avatar-ready"])P.push(y.events.on(Ct,()=>He()));return()=>{A&&clearInterval(A),window.removeEventListener("MMDStarted",He);for(const Ct of P)try{Ct()}catch{}P=[]}});var er=gc(),_n=L(er),Ot=L(_n),de=L(Ot),tr=C(L(de),2),rr=Y(tr,!0),nr=C(Ot,2),D=L(nr),B=C(L(D),2);Kt(B,21,()=>s,([y,b])=>y,(y,b)=>{var T=rt(()=>Hi(p(b),2));let O=()=>p(T)[0],F=()=>p(T)[1];var W=un(),ne=Y(W,!0),_e={};ge(()=>{q(ne,F()),_e!==(_e=O())&&(W.value=(W.__value=_e)??"")}),N(y,W)});var te;gr(B);var ve=C(D,2),ye=C(L(ve),2);Kt(ye,20,()=>i,y=>y,(y,b)=>{var T=un(),O=Y(T,!0),F={};ge(()=>{q(O,b),F!==(F=b)&&(T.value=(T.__value=F)??"")}),N(y,T)});var Ue;gr(ye);var ut=C(nr,2),ir=Y(ut,!0),Ht=C(ut,2),Vn=L(Ht),ds=L(Vn),Tc=Y(ds,!0),vs=C(ds,2);let ps;var Nc=Y(vs,!0),hs=C(Vn,2),ar=L(hs),Oc=L(ar);{var Pc=y=>{var b=un(),T=Y(b,!0);b.value=b.__value="",ge(O=>q(T,O),[()=>n("Loading cameras…")]),N(y,b)},Cc=y=>{var b=un(),T=Y(b,!0);b.value=b.__value="",ge(O=>q(T,O),[()=>n("No cameras found")]),N(y,b)},Rc=y=>{var b=Q(),T=X(b);Kt(T,17,()=>p(h),O=>O.deviceId,(O,F)=>{var W=un(),ne=Y(W,!0),_e={};ge(()=>{q(ne,p(F).label),_e!==(_e=p(F).deviceId)&&(W.value=(W.__value=_e)??"")}),N(O,W)}),N(y,b)};_t(Oc,y=>{p(w)?p(h).length?y(Rc,-1):y(Cc,1):y(Pc)})}var Fn;gr(ar);var gn=C(ar,2),Ic=L(gn);Xe(Ic,{name:"RefreshCw",size:14});var Lc=C(hs,2);{var zc=y=>{var b=_c(),T=Y(b,!0);ge(()=>q(T,p(f))),N(y,b)};_t(Lc,y=>{p(f)&&y(zc)})}var _s=C(Ht,2),Dc=Y(_s),gs=C(_s,2),ms=L(gs),Bc=Y(ms,!0),Mi=C(ms,2),Vc=Y(Mi,!0),Fc=C(gs,2),Ti=L(Fc),Hc=Y(Ti,!0);ge((y,b,T,O,F,W)=>{q(rr,y),B.disabled=p($),te!==(te=p(o))&&(B.value=(B.__value=te)??"",zt(B,te)),ye.disabled=p(M)||p($),Ue!==(Ue=p(l))&&(ye.value=(ye.__value=Ue)??"",zt(ye,Ue)),q(ir,p(c)),q(Tc,b),ps=Re(vs,1,"camera-state svelte-x8svx4",null,ps,{on:p(v)}),q(Nc,p(x)),ar.disabled=p(k),Fn!==(Fn=p(_))&&(ar.value=(ar.__value=Fn)??"",zt(ar,Fn)),$e(gn,"title",T),$e(gn,"aria-label",O),gn.disabled=p(k),q(Dc,`Background: ${p(d)??""}`),q(Bc,F),Mi.disabled=p($),q(Vc,W),Ti.disabled=p(m)||p(S),q(Hc,p(g))},[()=>n("Quick setup · changes apply immediately."),()=>n("Webcam"),()=>n("Refresh cameras"),()=>n("Refresh cameras"),()=>n("Avatar: the last VRM you chose is copied into avatars/ and restored at startup."),()=>n("Load / change VRM…")]),Z("change",B,ze),Z("change",ye,wt),Z("change",ar,Qe),Z("click",gn,()=>he(!0)),Z("click",Mi,Oe),Z("click",Ti,()=>Ft(!0)),N(e,er),Xt()}hr(["change","click"]);var yc=me('<button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button>'),wc=me('<nav class="xra-dock group fixed left-2 top-1/2 z-[99990] flex w-[46px] max-h-[92vh] -translate-y-1/2 flex-col gap-0.5 overflow-hidden rounded-xl border border-white/10 bg-[var(--xra-ui-bg)] p-1.5 font-sans text-[12.5px] leading-snug text-[var(--xra-ui-fg)] shadow-[0_12px_40px_rgba(0,0,0,.55)] transition-[width] duration-200 hover:w-[232px]"><!> <div class="my-1 h-px bg-white/10"></div> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button></nav>');function bc(e,t){Gt(t,!0);const r=()=>window.XRA;let n=G(!1),i=G(!1),a=G(!1),s=0;function o(){var B,te,ve,ye,Ue,ut,ir;const D=r();if(D){try{E(n,!!((te=(B=D.nativeBridge)==null?void 0:B.cameraRunning)!=null&&te.call(B)))}catch{}try{E(i,!!((Ue=(ye=(ve=D.recorder)==null?void 0:ve.status)==null?void 0:ye.call(ve))!=null&&Ue.active))}catch{}try{E(a,!!((ir=(ut=D.nativeBridge)==null?void 0:ut.getPreviewVisibility)!=null&&ir.call(ut,"video")))}catch{}}}let l=G(!1);async function c(){var B,te,ve,ye;if(p(l))return;E(l,!0);const D=!p(n);try{D?(await rs(),E(n,!0)):(await xl(),E(n,!1))}catch(Ue){try{await((te=(B=r().nativeBridge)==null?void 0:B.forceStopCamera)==null?void 0:te.call(B))}catch{}E(n,!1),(ye=(ve=r()).toast)==null||ye.call(ve,"Tracking: "+Ue.message,"warn",4500)}finally{E(l,!1),setTimeout(o,250)}}async function d(){var B,te,ve;const D=r().recorder;try{(B=D.status)!=null&&B.call(D).active?await D.stop():await D.start()}catch(ye){(ve=(te=r()).toast)==null||ve.call(te,"Recording: "+ye.message,"warn",4e3)}finally{setTimeout(o,250)}}function h(){var B,te;const D=!p(a);try{(te=(B=r().nativeBridge)==null?void 0:B.setPreviewVisibility)==null||te.call(B,"video",D)}catch{}E(a,D)}async function w(){var D,B,te,ve;try{await((B=(D=r().nativeBridge)==null?void 0:D.openVrmPicker)==null?void 0:B.call(D))}catch(ye){(ve=(te=r()).toast)==null||ve.call(te,"VRM loader: "+ye.message,"error",4500)}}function _(){var D,B;try{(B=(D=r().nativeBridge)==null?void 0:D.showAbout)==null||B.call(D)}catch{}}const v=[{id:"ui",icon:"Monitor",label:"UI Settings"},{id:"camera",icon:"Camera",label:"Webcam settings"},{id:"avatar",icon:"User",label:"Model settings"},{id:"second_avatar",icon:"Globe",label:"Studio link"},{id:"stage",icon:"Landmark",label:"Environment + Camera"},{id:"background",icon:"Image",label:"Background"},{id:"lip",icon:"Mic",label:"Audio"}],x="hover:bg-white/10",f="flex-1 overflow-hidden opacity-0 transition-opacity duration-150 group-hover:opacity-100";Ei(()=>(o(),s=setInterval(o,1e3),()=>clearInterval(s)));var g=wc(),m=L(g);Kt(m,17,()=>v,D=>D.id,(D,B)=>{var te=yc();Re(te,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var ve=L(te),ye=L(ve);Xe(ye,{get name(){return p(B).icon},size:16});var Ue=C(ve,2);Re(Ue,1,_r(f));var ut=Y(Ue,!0);ge((ir,Ht)=>{$e(te,"title",ir),q(ut,Ht)},[()=>ee(p(B).label),()=>ee(p(B).label)]),Z("click",te,()=>wl(p(B).id)),N(D,te)});var S=C(m,4),M=L(S),k=L(M);{let D=rt(()=>p(n)?"text-emerald-400":"");Xe(k,{name:"Webcam",size:16,get class(){return p(D)}})}var $=C(M,2);Re($,1,_r(f));var A=Y($,!0),P=C(S,2),z=L(P),re=L(z);{let D=rt(()=>p(i)?"Square":"Circle"),B=rt(()=>p(i)?"text-red-400":"");Xe(re,{get name(){return p(D)},size:16,get class(){return p(B)}})}var he=C(z,2);Re(he,1,_r(f));var Qe=Y(he,!0),Ee=C(P,2),ct=L(Ee),Nt=L(ct);{let D=rt(()=>p(a)?"Eye":"EyeOff");Xe(Nt,{get name(){return p(D)},size:16})}var He=C(ct,2);Re(He,1,_r(f));var wt=Y(He,!0),ze=C(Ee,2);Re(ze,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var Oe=L(ze),Ft=L(Oe);Xe(Ft,{name:"FolderOpen",size:16});var er=C(Oe,2);Re(er,1,_r(f));var _n=Y(er,!0),Ot=C(ze,2);Re(Ot,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var de=L(Ot),tr=L(de);Xe(tr,{name:"Info",size:16});var rr=C(de,2);Re(rr,1,_r(f));var nr=Y(rr,!0);ge((D,B,te,ve,ye,Ue,ut,ir,Ht,Vn)=>{Re(S,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${p(n)?"bg-emerald-500/20":x} ${p(l)?"opacity-60":""}`),$e(S,"title",D),S.disabled=p(l),q(A,B),Re(P,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${p(i)?"bg-red-500/30 text-red-200":x}`),$e(P,"title",te),q(Qe,ve),Re(Ee,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${p(a)?"bg-emerald-500/20":x}`),$e(Ee,"title",ye),q(wt,Ue),$e(ze,"title",ut),q(_n,ir),$e(Ot,"title",Ht),q(nr,Vn)},[()=>ee("Tracking"),()=>p(l)?ee("Starting…"):p(n)?ee("Tracking on"):ee("Tracking off"),()=>ee("Record"),()=>p(i)?ee("Stop recording"):ee("Record"),()=>ee("Preview"),()=>p(a)?ee("Hide preview"):ee("Show preview"),()=>ee("Load / change VRM…"),()=>ee("Load / change VRM…"),()=>ee("About"),()=>ee("About")]),Z("click",S,c),Z("click",P,d),Z("click",Ee,h),Z("click",ze,w),Z("click",Ot,_),N(e,g),Xt()}hr(["click"]);var xc=me('<div class="absolute inset-0 z-30 grid place-items-center bg-black text-[12px] text-[var(--xra-ui-fg)]"> </div>'),Sc=me('<div class="xra-mocap-window fixed z-[99991] flex flex-col overflow-hidden rounded-xl border border-white/15 bg-[var(--xra-ui-bg)] text-[var(--xra-ui-fg)] shadow-[0_16px_48px_rgba(0,0,0,.6)] font-sans"><header class="flex shrink-0 cursor-move touch-none select-none items-center gap-2 px-2 py-1.5"><!> <span class="flex-1 text-[12px] font-semibold"> </span> <select class="rounded-md border border-white/15 bg-[#101214] px-1.5 py-0.5 text-[11px] text-[var(--xra-ui-fg)]"><option> </option><option> </option><option> </option><option> </option></select> <button type="button" class="rounded-md border border-white/15 bg-white/5 px-1.5 py-0.5 cursor-pointer text-[var(--xra-ui-fg)]"><!></button></header> <div class="relative min-h-0 flex-1 overflow-hidden bg-black"><!> <div class="absolute bottom-0 right-0 z-20 h-5 w-5 cursor-nwse-resize touch-none"></div></div></div>');function kc(e,t){Gt(t,!0);const r=()=>window.XRA,n=Fe("ui.mocap_window",{})||{};let i=G(De(Number.isFinite(n.x)?n.x:48)),a=G(De(Number.isFinite(n.y)?n.y:96)),s=G(De(Number.isFinite(n.w)?n.w:360)),o=G(De(Number.isFinite(n.h)?n.h:270)),l=G(void 0),c=G(!1),d=0;const h=rt(()=>Fe("ui.mocap_visibility","always")!=="auto"||p(c));function w(){st("ui.mocap_window",{x:Math.round(p(i)),y:Math.round(p(a)),w:Math.round(p(s)),h:Math.round(p(o))})}function _(){var m,S,M;try{(M=(S=(m=r())==null?void 0:m.nativeBridge)==null?void 0:S.updateMocapWindow)==null||M.call(S)}catch{}}function v(m,S){m.preventDefault();const M=m.clientX,k=m.clientY,$=p(i),A=p(a),P=p(s),z=p(o),re=Qe=>{const Ee=Qe.clientX-M,ct=Qe.clientY-k;S==="move"?(E(i,Math.max(0,Math.min(window.innerWidth-80,$+Ee)),!0),E(a,Math.max(0,Math.min(window.innerHeight-30,A+ct)),!0)):(E(s,Math.max(200,Math.min(window.innerWidth-p(i),P+Ee)),!0),E(o,Math.max(130,Math.min(window.innerHeight-p(a),z+ct)),!0))},he=()=>{window.removeEventListener("pointermove",re),window.removeEventListener("pointerup",he),w()};window.addEventListener("pointermove",re),window.addEventListener("pointerup",he)}Rr(()=>{var S,M,k;const m=p(l);if(m){try{(k=(M=(S=r())==null?void 0:S.nativeBridge)==null?void 0:M.attachMocapWindow)==null||k.call(M,m)}catch{}return()=>{var $,A,P;try{(P=(A=($=r())==null?void 0:$.nativeBridge)==null?void 0:A.detachMocapWindow)==null||P.call(A)}catch{}}}}),Rr(()=>{p(i),p(a),p(s),p(o),p(c),_()}),Ei(()=>{const m=()=>{var S,M,k;E(c,!!((k=(M=(S=r())==null?void 0:S.nativeBridge)==null?void 0:M.cameraRunning)!=null&&k.call(M)))};return m(),d=setInterval(m,500),window.addEventListener("resize",_),()=>{clearInterval(d),window.removeEventListener("resize",_)}});var x=Q(),f=X(x);{var g=m=>{var S=Sc(),M=L(S),k=L(M);Xe(k,{name:"Activity",size:14});var $=C(k,2),A=Y($,!0),P=C($,2),z=L(P),re=Y(z,!0);z.value=z.__value="both";var he=C(z),Qe=Y(he,!0);he.value=he.__value="wireframe";var Ee=C(he),ct=Y(Ee,!0);Ee.value=Ee.__value="video";var Nt=C(Ee),He=Y(Nt,!0);Nt.value=Nt.__value="off";var wt;gr(P);var ze=C(P,2),Oe=L(ze);Xe(Oe,{name:"X",size:13});var Ft=C(M,2),er=L(Ft);{var _n=de=>{var tr=xc(),rr=Y(tr,!0);ge(nr=>q(rr,nr),[()=>ee("Tracking is off")]),N(de,tr)};_t(er,de=>{p(c)||de(_n)})}var Ot=C(er,2);Qa(Ft,de=>E(l,de),()=>p(l)),ge((de,tr,rr,nr,D,B,te,ve)=>{Ha(S,`left:${p(i)??""}px; top:${p(a)??""}px; width:${p(s)??""}px; height:${p(o)??""}px;`),q(A,de),q(re,tr),q(Qe,rr),q(ct,nr),q(He,D),wt!==(wt=B)&&(P.value=(P.__value=wt)??"",zt(P,wt)),$e(ze,"title",te),$e(Ot,"title",ve)},[()=>ee("Mocap"),()=>ee("Webcam + skeleton"),()=>ee("Skeleton only"),()=>ee("Webcam only"),()=>ee("Off"),()=>Fe("ui.mocap_view","off"),()=>ee("Close"),()=>ee("Resize")]),Z("pointerdown",M,de=>v(de,"move")),Z("change",P,de=>st("ui.mocap_view",de.currentTarget.value)),Z("pointerdown",P,de=>de.stopPropagation()),Z("click",ze,()=>st("ui.mocap_view","off")),Z("pointerdown",ze,de=>de.stopPropagation()),Z("pointerdown",Ot,de=>{de.stopPropagation(),v(de,"resize")}),N(m,S)};_t(f,m=>{p(h)&&m(g)})}N(e,x),Xt()}hr(["pointerdown","change","click"]);var $c=me('<aside class="xra-panel"><header class="xra-panel-head"><strong>XR Animator</strong> <span class="xra-spacer"></span> <button><!></button> <button title="Close panel"><!></button></header> <div class="xra-panel-body"></div></aside>'),Ec=me('<button class="xra-panel-launcher"><!></button>'),Ac=me("<!> <!> <!> <!>",1);function Mc(e,t){Gt(t,!0),kl();const r=rt(()=>Tl(Ge));var n=Ac(),i=X(n);{var a=v=>{mc(v,{})};_t(i,v=>{J.ready&&J.startupOpen&&v(a)})}var s=C(i,2);{var o=v=>{bc(v,{})};_t(s,v=>{J.ready&&!J.startupOpen&&v(o)})}var l=C(s,2);{var c=v=>{kc(v,{})},d=rt(()=>J.ready&&!J.startupOpen&&Fe("ui.mocap_view","off")!=="off");_t(l,v=>{p(d)&&v(c)})}var h=C(l,2);{var w=v=>{var $,A,P;var x=$c(),f=L(x),g=C(L(f),4);$e(g,"title",((P=(A=($=window.XRA)==null?void 0:$.i18n)==null?void 0:A.t)==null?void 0:P.call(A,"Clean screen mode (Press Esc to restore)"))||"Clean screen (Esc)");var m=L(g);Xe(m,{name:"EyeOff",size:15});var S=C(g,2),M=L(S);Xe(M,{name:"X",size:15});var k=C(f,2);Kt(k,21,()=>p(r),z=>z.id,(z,re)=>{hc(z,{get section(){return p(re)}})}),Z("click",g,function(...z){Ln==null||Ln.apply(this,z)}),Z("click",S,()=>J.panelOpen=!1),N(v,x)},_=v=>{var x=Ec(),f=L(x);Xe(f,{name:"Settings",size:16}),Z("click",x,()=>{J.panelOpen=!0,ns()}),N(v,x)};_t(h,v=>{J.ready&&!J.startupOpen&&J.panelOpen?v(w):J.ready&&!J.startupOpen&&v(_,1)})}N(e,n),Xt()}hr(["click"]),window.XRA_SVELTE_UI=!0;function ls(){let e=document.getElementById("XRA_SVELTE");e||(e=document.createElement("div"),e.id="XRA_SVELTE",document.body.appendChild(e)),Ko(Mc,{target:e})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ls):ls()})();

})();
