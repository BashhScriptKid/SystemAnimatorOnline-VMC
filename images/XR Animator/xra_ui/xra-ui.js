(function(){
var Bc=Object.defineProperty;var Es=fe=>{throw TypeError(fe)};var Vc=(fe,ae,ke)=>ae in fe?Bc(fe,ae,{enumerable:!0,configurable:!0,writable:!0,value:ke}):fe[ae]=ke;var et=(fe,ae,ke)=>Vc(fe,typeof ae!="symbol"?ae+"":ae,ke),Ni=(fe,ae,ke)=>ae.has(fe)||Es("Cannot "+ke);var u=(fe,ae,ke)=>(Ni(fe,ae,"read from private field"),ke?ke.call(fe):ae.get(fe)),z=(fe,ae,ke)=>ae.has(fe)?Es("Cannot add the same private member more than once"):ae instanceof WeakSet?ae.add(fe):ae.set(fe,ke),I=(fe,ae,ke,nr)=>(Ni(fe,ae,"write to private field"),nr?nr.call(fe,ke):ae.set(fe,ke),ke),U=(fe,ae,ke)=>(Ni(fe,ae,"access private method"),ke);(function(){"use strict";var ss,Cr,Qt,hr,Rr,Ir,Lr,Dt,zr,qe,fn,Bt,gt,At,Dr,_r,Y,Ti,Oi,gn,Pi,As,Ms,Hr,Fc,mn,os,ot,Ei,lt,gr,ze,Ke,De,Ze,Mt,mr,Jt,Br,dn,vn,Vt,zn,le,Hc,Uc,Ci,jc,Ri,yn,Un,Ii,Li,mt,Nt,Qe,yr,pn,hn,Dn,ls;var ae=Array.isArray,ke=Array.prototype.indexOf,nr=Array.prototype.includes,wn=Array.from,zi=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,Di=Object.getOwnPropertyDescriptors,Ns=Object.prototype,Ts=Array.prototype,jn=Object.getPrototypeOf,Bi=Object.isExtensible;function Ur(e){return typeof e=="function"}const Os=()=>{};function Ps(e){return e()}function Wn(e){for(var t=0;t<e.length;t++)e[t]()}function Vi(){var e,t,r=new Promise((n,i)=>{e=n,t=i});return{promise:r,resolve:e,reject:t}}function Fi(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const Oe=2,xr=4,jr=8,Gn=1<<24,ut=16,tt=32,Ct=64,Xn=128,Yn=256,ft=512,$e=1024,we=2048,rt=4096,Re=8192,Ie=16384,Sr=32768,bn=1<<25,jt=65536,xn=1<<17,Cs=1<<18,kr=1<<19,Hi=1<<20,bt=1<<25,Sn=1<<21,$r=1<<22,Wt=1<<23,xt=Symbol("$state"),Ui=Symbol("component"),ji=Symbol("legacy props"),Rs=Symbol(""),kn=Symbol("attributes"),qn=Symbol("class"),Kn=Symbol("style"),Wr=Symbol("text"),Gr=new class extends Error{constructor(){super(...arguments);et(this,"name","StaleReactionError");et(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},$n=!!((ss=globalThis.document)!=null&&ss.contentType)&&globalThis.document.contentType.includes("xml"),Is=1,Ls=2,Wi=4,zs=8,Ds=16,Bs=1,Vs=2,Gi=4,Fs=8,Hs=16,Us=1,js=2,be=Symbol("uninitialized"),Xi="http://www.w3.org/1999/xhtml",Ws="http://www.w3.org/2000/svg",Gs="@attach";function Xs(){console.warn("https://svelte.dev/e/derived_inert")}function Ys(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function qs(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Yi(e){return e===this.v}function Ks(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function qi(e){return!Ks(e,this.v)}function Zs(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Qs(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Js(e,t,r){throw new Error("https://svelte.dev/e/each_key_duplicate")}function eo(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function to(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ro(e){throw new Error("https://svelte.dev/e/effect_orphan")}function no(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function io(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function ao(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function so(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function oo(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function lo(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Er=!1,Wc=!1;function co(){Er=!0}let de=null;function Ar(e){de=e}function Gt(e,t=!1,r){de={p:de,i:!1,c:null,e:null,s:e,x:null,r:V,l:Er&&!t?{s:null,u:null,$:[]}:null}}function Xt(e){var t=de,r=t.e;if(r!==null){t.e=null;for(var n of r)ga(n)}return t.i=!0,de=t.p,Zn(e)}function Zn(e={}){return zi(e,Ui,{value:!0}),e}function Xr(){return!Er||de!==null&&de.l===null}let Mr=[];function uo(){var e=Mr;Mr=[],Wn(e)}function St(e){if(Mr.length===0){var t=Mr;queueMicrotask(()=>{t===Mr&&uo()})}Mr.push(e)}const fo=-7169;function ge(e,t){e.f=e.f&fo|t}function Qn(e){(e.f&ft)!==0||e.deps===null?ge(e,$e):ge(e,rt)}function Ki(e,t,r){(e.f&we)!==0?t.add(e):(e.f&rt)!==0&&r.add(e),ge(e,$e)}function vo(e,t){if(t){const r=document.body;e.autofocus=!0,St(()=>{document.activeElement===r&&e.focus()})}}function Yr(e){var t=B,r=V;nt(null),it(null);try{return e()}finally{nt(t),it(r)}}function Zi(e,t,r,n){const i=Xr()?Nr:Jn;var a=e.filter(_=>!_.settled),s=t.map(i);if(r.length===0&&a.length===0){n(s);return}var o=V,l=po(),c=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(_=>_.promise)):null;function d(_){if((o.f&Ie)===0){l();try{n([...s,..._])}catch(v){$t(v,o)}En()}}var p=Qi();if(r.length===0){c.then(()=>d([])).finally(p);return}function m(){Promise.all(r.map(_=>ho(_))).then(d).catch(_=>$t(_,o)).finally(p)}c?c.then(()=>{l(),m(),En()}):m()}function po(){var e=V,t=B,r=de,n=R;return function(a=!0){it(e),nt(t),Ar(r),a&&(e.f&Ie)===0&&(n==null||n.activate(),n==null||n.apply())}}function En(e=!0){it(null),nt(null),Ar(null),e&&(R==null||R.deactivate())}function Qi(){var e=V,t=e.b,r=R,n=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,r),r.increment(n,e),()=>{t==null||t.update_pending_count(-1,r),r.decrement(n,e)}}function Nr(e){var t=Oe|we;return V!==null&&(V.f|=kr),{ctx:de,deps:null,effects:null,equals:Yi,f:t,fn:e,reactions:null,rv:0,v:be,wv:0,parent:V,ac:null}}const qr=Symbol("obsolete");function ho(e,t,r){let n=V;n===null&&Qs();var i=void 0,a=Yt(be),s=!B,o=new Set;return Mo(()=>{var _,v;var l=V,c=Vi();i=c.promise;try{Promise.resolve(e()).then(c.resolve,x=>{x!==Gr&&c.reject(x)}).finally(En)}catch(x){c.reject(x),En()}var d=R;if(s){if((l.f&Sr)!==0)var p=Qi();if((_=n.b)!=null&&_.is_rendered())(v=d.async_deriveds.get(l))==null||v.reject(qr);else for(const x of o.values())x.reject(qr);o.add(c),d.async_deriveds.set(l,c)}const m=(x,f=void 0)=>{p==null||p(),o.delete(c),f!==qr&&(d.activate(),f?(a.f|=Wt,Or(a,f)):((a.f&Wt)!==0&&(a.f^=Wt),Or(a,x)),d.deactivate())};c.promise.then(m,x=>m(null,x||"unknown"))}),ci(()=>{for(const l of o)l.reject(qr)}),new Promise(l=>{function c(d){function p(){d===i?l(a):c(i)}d.then(p,p)}c(i)})}function dt(e){const t=Nr(e);return $a(t),t}function Jn(e){const t=Nr(e);return t.equals=qi,t}function _o(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)Ne(t[r])}}function ei(e){var t,r=V,n=e.parent;if(!It&&n!==null&&e.v!==be&&(n.f&(Ie|Re))!==0)return Xs(),e.v;it(n);try{_o(e),t=Ta(e)}finally{it(r)}return t}function Ji(e){var t=ei(e);if(!e.equals(t)&&(e.wv=Ma(),(!(R!=null&&R.is_fork)||e.deps===null)&&(R!==null?(R.capture(e,t,!0),Kr==null||Kr.capture(e,t,!0)):e.v=t,e.deps===null))){ge(e,$e);return}It||(Me!==null?(li()||R!=null&&R.is_fork)&&Me.set(e,t):Qn(e))}function go(e){var t;if(e.effects!==null)for(const r of e.effects)(r.teardown||r.ac)&&((t=r.teardown)==null||t.call(r),r.ac!==null&&Yr(()=>{r.ac.abort(Gr),r.ac=null}),r.fn!==null&&(r.teardown=Os),nn(r,0),fi(r))}function ea(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&Pr(t)}let ti=null,Tr=null,R=null,Kr=null,Me=null,ri=null,ni=!1,Zr=null,An=null;var ta=0,Gc=new Set;let mo=1;const Ln=class Ln{constructor(){z(this,Y);et(this,"id",mo++);z(this,Cr,!1);et(this,"linked",!0);z(this,Qt,null);z(this,hr,null);et(this,"async_deriveds",new Map);et(this,"current",new Map);et(this,"previous",new Map);z(this,Rr,new Set);z(this,Ir,new Set);z(this,Lr,0);z(this,Dt,new Map);z(this,zr,null);z(this,qe,[]);z(this,fn,[]);z(this,Bt,new Set);z(this,gt,new Set);z(this,At,new Map);z(this,Dr,new Set);et(this,"is_fork",!1);z(this,_r,!1);Tr===null?ti=Tr=this:(I(Tr,hr,this),I(this,Qt,Tr)),Tr=this}skip_effect(t){u(this,At).has(t)||u(this,At).set(t,{d:[],m:[]}),u(this,Dr).delete(t)}unskip_effect(t,r=n=>this.schedule(n)){var n=u(this,At).get(t);if(n){u(this,At).delete(t);for(var i of n.d)ge(i,we),r(i);for(i of n.m)ge(i,rt),r(i)}u(this,Dr).add(t)}capture(t,r,n=!1){t.v!==be&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&Wt)===0&&(this.current.set(t,[r,n]),Me==null||Me.set(t,r)),this.is_fork||(t.v=r)}activate(){R=this}deactivate(){R=null,Me=null}flush(){try{ni=!0,R=this,U(this,Y,gn).call(this)}finally{ta=0,ri=null,Zr=null,An=null,ni=!1,R=null,Me=null,kt.clear()}}discard(){var t;for(const r of u(this,Ir))r(this);u(this,Ir).clear();for(const r of this.async_deriveds.values())r.reject(qr);U(this,Y,mn).call(this),(t=u(this,zr))==null||t.resolve()}register_created_effect(t){u(this,fn).push(t)}increment(t,r){if(I(this,Lr,u(this,Lr)+1),t){let n=u(this,Dt).get(r)??0;u(this,Dt).set(r,n+1)}}decrement(t,r){if(I(this,Lr,u(this,Lr)-1),t){let n=u(this,Dt).get(r)??0;n===1?u(this,Dt).delete(r):u(this,Dt).set(r,n-1)}u(this,_r)||(I(this,_r,!0),St(()=>{I(this,_r,!1),this.linked&&this.flush()}))}transfer_effects(t,r){for(const n of t)u(this,Bt).add(n);for(const n of r)u(this,gt).add(n);t.clear(),r.clear()}oncommit(t){u(this,Rr).add(t)}ondiscard(t){u(this,Ir).add(t)}settled(){return(u(this,zr)??I(this,zr,Vi())).promise}static ensure(){if(R===null){const t=R=new Ln;ni||St(()=>{u(t,Cr)||t.flush()})}return R}apply(){{Me=null;return}}schedule(t){var r;if(ri=t,(r=t.b)!=null&&r.is_pending&&(t.f&(xr|jr|Gn))!==0&&(t.f&Sr)===0){t.b.defer_effect(t);return}u(this,qe).push(t)}};Cr=new WeakMap,Qt=new WeakMap,hr=new WeakMap,Rr=new WeakMap,Ir=new WeakMap,Lr=new WeakMap,Dt=new WeakMap,zr=new WeakMap,qe=new WeakMap,fn=new WeakMap,Bt=new WeakMap,gt=new WeakMap,At=new WeakMap,Dr=new WeakMap,_r=new WeakMap,Y=new WeakSet,Ti=function(){if(this.is_fork)return!0;for(const n of u(this,Dt).keys()){for(var t=n,r=!1;t.parent!==null;){if(u(this,At).has(t)){r=!0;break}t=t.parent}if(!r)return!0}return!1},Oi=function(){var t=[];for(const a of u(this,qe))if(!((a.f&Ie)!==0||(a.f&(we|rt))===0)){for(var r=a,n=!1;r.parent!==null;){r=r.parent;var i=r.f;if((i&(Ct|tt))!==0){if((i&$e)===0){n=!0;break}r.f^=$e}}n||t.push(r)}return I(this,qe,[]),t},gn=function(){var o,l,c,d;I(this,Cr,!0);for(const p of u(this,Bt))u(this,gt).delete(p),ge(p,we),this.schedule(p);for(const p of u(this,gt))ge(p,rt),this.schedule(p);this.apply();for(var t=Zr=[],r=[],n=An=[];u(this,qe).length>0;){ta++>1e3&&(U(this,Y,mn).call(this),yo());for(const p of U(this,Y,Oi).call(this))try{U(this,Y,Pi).call(this,p,t,r)}catch(m){throw aa(p),U(this,Y,Ti).call(this)||this.discard(),m}}if(R=null,n.length>0){var i=Ln.ensure();for(const p of n)i.schedule(p)}if(Zr=null,An=null,U(this,Y,Ti).call(this)){U(this,Y,Hr).call(this,r),U(this,Y,Hr).call(this,t);for(const[p,m]of u(this,At))ia(p,m);n.length>0&&U(o=R,Y,gn).call(o);return}const a=U(this,Y,As).call(this);if(a){U(this,Y,Hr).call(this,r),U(this,Y,Hr).call(this,t),U(l=a,Y,Ms).call(l,this);return}u(this,Bt).clear(),u(this,gt).clear();for(const p of u(this,Rr))p(this);u(this,Rr).clear(),Kr=this,ra(r),ra(t),Kr=null,(c=u(this,zr))==null||c.resolve();var s=R;if(u(this,Lr)===0&&(u(this,qe).length===0||s!==null)&&U(this,Y,mn).call(this),u(this,qe).length>0)if(s!==null){for(const p of u(this,qe))u(s,qe).push(p);I(this,qe,[])}else s=this;s!==null&&(kt.clear(),U(d=s,Y,gn).call(d))},Pi=function(t,r,n){t.f^=$e;for(var i=t.first;i!==null;){var a=i.f,s=(a&(tt|Ct))!==0,o=s&&(a&$e)!==0,l=o||(a&Re)!==0||u(this,At).has(i);if(!l&&i.fn!==null){s?i.f^=$e:(a&xr)!==0?r.push(i):rn(i)&&((a&ut)!==0&&u(this,gt).add(i),Pr(i));var c=i.first;if(c!==null){i=c;continue}}for(;i!==null;){var d=i.next;if(d!==null){i=d;break}i=i.parent}}},As=function(){for(var t=u(this,Qt);t!==null;){if(!t.is_fork){for(const[r,[,n]]of this.current)if(t.current.has(r)&&!n)return t}t=u(t,Qt)}return null},Ms=function(t){var n;for(const[i,a]of t.current)!this.previous.has(i)&&t.previous.has(i)&&this.previous.set(i,t.previous.get(i)),this.current.set(i,a);for(const[i,a]of t.async_deriveds){const s=this.async_deriveds.get(i);s&&a.promise.then(s.resolve).catch(s.reject)}t.async_deriveds.clear(),this.transfer_effects(u(t,Bt),u(t,gt));const r=i=>{var a=i.reactions;if(a!==null&&!((i.f&Oe)!==0&&(i.f&(we|rt))===0))for(const l of a){var s=l.f;if((s&Oe)!==0)r(l);else{var o=l;s&($r|ut)&&!this.async_deriveds.has(o)&&(u(this,gt).delete(o),ge(o,we),this.schedule(o))}}};for(const i of this.current.keys())r(i);this.oncommit(()=>t.discard()),U(n=t,Y,mn).call(n),R=this,U(this,Y,gn).call(this)},Hr=function(t){for(var r=0;r<t.length;r+=1)Ki(t[r],u(this,Bt),u(this,gt))},Fc=function(){var p,m;for(let _=ti;_!==null;_=u(_,hr)){var t=_.id<this.id,r=[];for(const[v,[x,f]]of this.current){if(_.current.has(v)){var n=_.current.get(v)[0];if(t&&x!==n)_.current.set(v,[x,f]);else continue}r.push(v)}if(t)for(const[v,x]of this.async_deriveds){const f=_.async_deriveds.get(v);f&&x.promise.then(f.resolve).catch(f.reject)}var i=[..._.current.keys()].filter(v=>!_.current.get(v)[1]);if(!(!u(_,Cr)||i.length===0)){var a=i.filter(v=>!this.current.has(v));if(a.length===0)t&&_.discard();else if(r.length>0){if(t)for(const v of u(this,Dr))_.unskip_effect(v,x=>{var f;(x.f&(ut|$r))!==0?_.schedule(x):U(f=_,Y,Hr).call(f,[x])});_.activate();var s=new Set,o=new Map;for(var l of r)na(l,a,s,o);o=new Map;var c=[..._.current].filter(([v,x])=>{const f=this.current.get(v);return f?f[0]!==x[0]||f[1]!==x[1]:!0}).map(([v])=>v);if(c.length>0)for(const v of u(this,fn))(v.f&(Ie|Re|xn))===0&&ii(v,c,o)&&((v.f&($r|ut))!==0?(ge(v,we),_.schedule(v)):u(_,Bt).add(v));if(u(_,qe).length>0&&!u(_,_r)){_.apply();for(var d of U(p=_,Y,Oi).call(p))U(m=_,Y,Pi).call(m,d,[],[])}_.deactivate()}}}},mn=function(){if(this.linked){var t=u(this,Qt),r=u(this,hr);t===null?ti=r:I(t,hr,r),r===null?Tr=t:I(r,Qt,t),this.linked=!1}};let ir=Ln;function yo(){try{no()}catch(e){$t(e,ri)}}let vt=null;function ra(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(Ie|Re))===0&&rn(n)&&(vt=new Set,Pr(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&ba(n),(vt==null?void 0:vt.size)>0)){kt.clear();for(const i of vt){if((i.f&(Ie|Re))!==0)continue;const a=[i];let s=i.parent;for(;s!==null;)vt.has(s)&&(vt.delete(s),a.push(s)),s=s.parent;for(let o=a.length-1;o>=0;o--){const l=a[o];(l.f&(Ie|Re))===0&&Pr(l)}}vt.clear()}}vt=null}}function na(e,t,r,n){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(const i of e.reactions){const a=i.f;(a&Oe)!==0?na(i,t,r,n):(a&($r|ut))!==0&&(a&we)===0&&ii(i,t,n)&&(ge(i,we),ai(i))}}function ii(e,t,r){const n=r.get(e);if(n!==void 0)return n;if(e.deps!==null)for(const i of e.deps){if(nr.call(t,i))return!0;if((i.f&Oe)!==0&&ii(i,t,r))return r.set(i,!0),!0}return r.set(e,!1),!1}function ai(e){R.schedule(e)}function ia(e,t){if(!((e.f&tt)!==0&&(e.f&$e)!==0)){(e.f&we)!==0?t.d.push(e):(e.f&rt)!==0&&t.m.push(e),ge(e,$e);for(var r=e.first;r!==null;)ia(r,t),r=r.next}}function aa(e){ge(e,$e);for(var t=e.first;t!==null;)aa(t),t=t.next}let Mn=new Set;const kt=new Map;let sa=!1;function Yt(e,t){var r={f:0,v:e,reactions:null,equals:Yi,rv:0,wv:0};return r}function G(e,t){const r=Yt(e);return $a(r),r}function wo(e,t=!1,r=!0){var i;const n=Yt(e);return t||(n.equals=qi),Er&&r&&de!==null&&de.l!==null&&((i=de.l).s??(i.s=[])).push(n),n}function M(e,t,r=!1){B!==null&&(!ht||(B.f&xn)!==0)&&Xr()&&(B.f&(Oe|ut|$r|xn))!==0&&(Et===null||!Et.has(e))&&oo();let n=r?Fe(t):t;return Or(e,n,An)}var ar=null,si=0;function Or(e,t,r=null){if(!e.equals(t)){It?kt.set(e,t):kt.has(e)||kt.set(e,e.v);var n=ir.ensure();if(n.capture(e,t),(e.f&Oe)!==0){const i=e;(e.f&we)!==0&&ei(i),Me===null&&Qn(i)}e.wv=Ma(),ar=null,si=0,la(e,we,r),ar=null,Xr()&&V!==null&&(V.f&$e)!==0&&(V.f&(tt|Ct))===0&&(at===null?Oo([e]):at.push(e)),!n.is_fork&&Mn.size>0&&!sa&&bo()}return t}function bo(){sa=!1;for(const e of Mn){(e.f&$e)!==0&&ge(e,rt);let t;try{t=rn(e)}catch{t=!0}t&&Pr(e)}Mn.clear()}function oa(e,t=1){var r=g(e),n=t===1?r++:r--;return M(e,r),n}function Qr(e){M(e,e.v+1)}function la(e,t,r){var n=e.reactions;if(n!==null){var i=Xr(),a=n.length;if(si+=a,si>1e5&&ar===null&&(ar=new Set),ar!==null){if(ar.has(e))return;ar.add(e)}for(var s=0;s<a;s++){var o=n[s],l=o.f;if(!(!i&&o===V)){var c=(l&we)===0;if(c&&ge(o,t),(l&xn)!==0)Mn.add(o);else if((l&Oe)!==0){var d=o;Me==null||Me.delete(d),la(d,rt,r)}else if(c){var p=o;(l&ut)!==0&&vt!==null&&vt.add(p),r!==null?r.push(p):ai(p)}}}}}function Fe(e){if(typeof e!="object"||e===null||xt in e||Ui in e)return e;const t=jn(e);if(t!==Ns&&t!==Ts)return e;var r=new Map,n=ae(e),i=G(0),a=cr,s=o=>{if(cr===a)return o();var l=B,c=cr;nt(null),Aa(a);var d=o();return nt(l),Aa(c),d};return n&&r.set("length",G(e.length)),new Proxy(e,{defineProperty(o,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&ao();var d=r.get(l);return d===void 0?s(()=>{var p=G(c.value);return r.set(l,p),p}):M(d,c.value,!0),!0},deleteProperty(o,l){var c=r.get(l);if(c===void 0){if(l in o){const d=s(()=>G(be));r.set(l,d),Qr(i)}}else M(c,be),Qr(i);return!0},get(o,l,c){var _;if(l===xt)return e;var d=r.get(l),p=l in o;if(d===void 0&&(!p||(_=Ut(o,l))!=null&&_.writable)&&(d=s(()=>{var v=Fe(p?o[l]:be),x=G(v);return x}),r.set(l,d)),d!==void 0){var m=g(d);return m===be?void 0:m}return Reflect.get(o,l,c)},getOwnPropertyDescriptor(o,l){var m;(m=this.has)==null||m.call(this,o,l);var c=Reflect.getOwnPropertyDescriptor(o,l),d=r.get(l);if(d!==void 0){var p=g(d);if(p===be)return;if(c&&"value"in c)c.value=p;else return{enumerable:!0,configurable:!0,value:p,writable:!0}}return c},has(o,l){var m;if(l===xt)return!0;var c=r.get(l),d=c!==void 0&&c.v!==be||Reflect.has(o,l);if(c!==void 0||V!==null&&(!d||(m=Ut(o,l))!=null&&m.writable)){c===void 0&&(c=s(()=>{var _=d?Fe(o[l]):be,v=G(_);return v}),r.set(l,c));var p=g(c);if(p===be)return!1}return d},set(o,l,c,d){var k;var p=r.get(l),m=l in o;if(n&&l==="length")for(var _=c;_<p.v;_+=1){var v=r.get(_+"");v!==void 0?M(v,be):_ in o&&(v=s(()=>G(be)),r.set(_+"",v))}if(p===void 0)(!m||(k=Ut(o,l))!=null&&k.writable)&&(p=s(()=>G(void 0)),M(p,Fe(c)),r.set(l,p));else{m=p.v!==be;var x=s(()=>Fe(c));M(p,x)}var f=Reflect.getOwnPropertyDescriptor(o,l);if(f!=null&&f.set&&f.set.call(d,c),!m){if(n&&typeof l=="string"){var h=r.get("length"),b=Number(l);Number.isInteger(b)&&b>=h.v&&M(h,b+1)}Qr(i)}return!0},ownKeys(o){g(i);var l=Reflect.ownKeys(o).filter(p=>{var m=r.get(p);return m===void 0||m.v!==be});for(var[c,d]of r)d.v!==be&&!(c in o)&&l.push(c);return l},setPrototypeOf(){so()}})}function ca(e){try{if(e!==null&&typeof e=="object"&&xt in e)return e[xt]}catch{}return e}function ua(e,t){return Object.is(ca(e),ca(t))}var fa,da,va,pa;function xo(){if(fa===void 0){fa=window,da=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;va=Ut(t,"firstChild").get,pa=Ut(t,"nextSibling").get,Bi(e)&&(e[qn]=void 0,e[kn]=null,e[Kn]=void 0,e.__e=void 0),Bi(r)&&(r[Wr]=void 0)}}function Rt(e=""){return document.createTextNode(e)}function sr(e){return va.call(e)}function Jr(e){return pa.call(e)}function L(e,t){return sr(e)}function K(e,t=!1){{var r=sr(e);return r instanceof Comment&&r.data===""?Jr(r):r}}function X(e,t=!1){return sr(e)}function O(e,t=1,r=!1){let n=e;for(;t--;)n=Jr(n);return n}function So(e){e.textContent=""}function ha(){return!1}function oi(e,t,r){return t==null||t===Xi?r?document.createElement(e,{is:r}):document.createElement(e):r?document.createElementNS(t,e,{is:r}):document.createElementNS(t,e)}function ko(e){var t=V;if(t===null)return B.f|=Wt,e;if((t.f&Sr)===0&&(t.f&xr)===0)throw e;$t(e,t)}function $t(e,t){if(!(t!==null&&(t.f&Ie)!==0)){for(;t!==null;){if((t.f&Xn)!==0&&(t.f&(Ie|bn))===0){if((t.f&Sr)===0)throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw e}}function _a(e){V===null&&(B===null&&ro(),to()),It&&eo()}function $o(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function pt(e,t){var r=V;r!==null&&(r.f&Re)!==0&&(e|=Re);var n={ctx:de,deps:null,nodes:null,f:e|we|ft,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};R==null||R.register_created_effect(n);var i=n;if((e&xr)!==0)Zr!==null?Zr.push(n):ir.ensure().schedule(n);else if(t!==null){try{Pr(n)}catch(s){throw Ne(n),s}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&kr)===0&&(i=i.first,(e&ut)!==0&&(e&jt)!==0&&i!==null&&(i.f|=jt))}if(i!==null&&(i.parent=r,r!==null&&$o(i,r),B!==null&&(B.f&Oe)!==0&&(e&Ct)===0)){var a=B;(a.effects??(a.effects=[])).push(i)}return n}function li(){return B!==null&&!ht}function ci(e){const t=pt(jr,null);return ge(t,$e),t.teardown=e,t}function en(e){_a();var t=V.f,r=!B&&(t&tt)!==0&&de!==null&&!de.i;if(r){var n=de;(n.e??(n.e=[])).push(e)}else return ga(e)}function ga(e){return pt(xr|Hi,e)}function Eo(e){return _a(),pt(jr|Hi,e)}function Ao(e){ir.ensure();const t=pt(Ct|kr,e);return(r={})=>new Promise(n=>{r.outro?or(t,()=>{Ne(t),n(void 0)}):(Ne(t),n(void 0))})}function ui(e){return pt(xr,e)}function Mo(e){return pt($r|kr,e)}function ma(e,t=0){return pt(jr|t,e)}function xe(e,t=[],r=[],n=[]){Zi(n,t,r,i=>{pt(jr,()=>{e(...i.map(g))})})}function tn(e,t=0){var r=pt(ut|t,e);return r}function ya(e,t=0){var r=pt(Gn|t,e);return r}function He(e){return pt(tt|kr,e)}function wa(e){var t=e.teardown;if(t!==null){const r=It,n=B;ka(!0),nt(null);try{t.call(null)}catch(i){$t(i,e.parent)}finally{ka(r),nt(n)}}}function fi(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const i=r.ac;i!==null&&Yr(()=>{i.abort(Gr)});var n=r.next;(r.f&Ct)!==0?r.parent=null:Ne(r,t),r=n}}function No(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&tt)===0&&Ne(t),t=r}}function Ne(e,t=!0){var r=!1;(t||(e.f&Cs)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(To(e.nodes.start,e.nodes.end),r=!0),e.f|=bn,fi(e,t&&!r),nn(e,0);var n=e.nodes&&e.nodes.t;if(n!==null)for(const a of n)a.stop();wa(e),e.f^=bn,e.f|=Ie;var i=e.parent;i!==null&&i.first!==null&&ba(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function To(e,t){for(;e!==null;){var r=e===t?null:Jr(e);e.remove(),e=r}}function ba(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function or(e,t,r=!0){var n=[];e.f|=Yn,xa(e,n,!0);var i=()=>{r&&Ne(e),t&&t()},a=n.length;if(a>0){var s=()=>--a||i();for(var o of n)o.out(s)}else i()}function xa(e,t,r){if((e.f&Re)===0){e.f^=Re;var n=e.nodes&&e.nodes.t;if(n!==null)for(const o of n)(o.is_global||r)&&t.push(o);for(var i=e.first;i!==null;){var a=i.next;if((i.f&Ct)===0){var s=(i.f&jt)!==0||(i.f&tt)!==0&&(e.f&ut)!==0;xa(i,t,s?r:!1)}i=a}}}function Nn(e){e.f&=~Yn,Sa(e,!0)}function Sa(e,t){if((e.f&Yn)===0&&(e.f&Re)!==0){e.f^=Re,(e.f&$e)===0&&(ge(e,we),ir.ensure().schedule(e));for(var r=e.first;r!==null;){var n=r.next,i=(r.f&jt)!==0||(r.f&tt)!==0;Sa(r,i?t:!1),r=n}var a=e.nodes&&e.nodes.t;if(a!==null)for(const s of a)(s.is_global||t)&&s.in()}}function di(e,t){if(e.nodes)for(var r=e.nodes.start,n=e.nodes.end;r!==null;){var i=r===n?null:Jr(r);t.append(r),r=i}}let Tn=!1,It=!1;function ka(e){It=e}let B=null,ht=!1;function nt(e){B=e}let V=null;function it(e){V=e}let Et=null;function $a(e){B!==null&&((B.f&Sn)!==0||(B.f&Oe)!==0)&&(Et??(Et=new Set)).add(e)}let Ue=null,We=0,at=null;function Oo(e){at=e}let Ea=1,lr=0,cr=lr;function Aa(e){cr=e}function Ma(){return++Ea}function rn(e){var t=e.f;if((t&we)!==0)return!0;if((t&rt)!==0){for(var r=e.deps,n=r.length,i=0;i<n;i++){var a=r[i];if(rn(a)&&Ji(a),a.wv>e.wv)return!0}(t&ft)!==0&&Me===null&&ge(e,$e)}return!1}function Na(e,t,r=!0){var n=e.reactions;if(n!==null&&!(Et!==null&&Et.has(e)))for(var i=0;i<n.length;i++){var a=n[i];(a.f&Oe)!==0?Na(a,t,!1):t===a&&(r?ge(a,we):(a.f&$e)!==0&&ge(a,rt),ai(a))}}function Ta(e){var t=Ue,r=We,n=at,i=B,a=Et,s=de,o=ht,l=cr,c=e.f;Ue=null,We=0,at=null,B=(c&(tt|Ct))===0?e:null,Et=null,Ar(e.ctx),ht=!1,cr=++lr,e.ac!==null&&(Yr(()=>{e.ac.abort(Gr)}),e.ac=null);try{e.f|=Sn;var d=e.fn,p=d();e.f|=Sr;var m=Oa(e);if(Xr()&&at!==null&&!ht&&m!==null&&(e.f&(Oe|rt|we))===0)for(var _=0;_<at.length;_++)Na(at[_],e);if(i!==null&&i!==e){if(lr++,i.deps!==null)for(let v=0;v<r;v+=1)i.deps[v].rv=lr;if(t!==null)for(const v of t)v.rv=lr;at!==null&&(n===null?n=at:n.push(...at))}return(e.f&Wt)!==0&&(e.f^=Wt),p}catch(v){return Oa(e),ko(v)}finally{e.f^=Sn,Ue=t,We=r,at=n,B=i,Et=a,Ar(s),ht=o,cr=l}}function Oa(e){var i;var t=e.deps,r=R==null?void 0:R.is_fork;if(Ue!==null){var n;if(r||nn(e,We),t!==null&&We>0)for(t.length=We+Ue.length,n=0;n<Ue.length;n++)t[We+n]=Ue[n];else e.deps=t=Ue;if(li()&&(e.f&ft)!==0)for(n=We;n<t.length;n++)((i=t[n]).reactions??(i.reactions=[])).push(e)}else!r&&t!==null&&We<t.length&&(nn(e,We),t.length=We);return t}function Po(e,t){let r=t.reactions;if(r!==null){var n=ke.call(r,e);if(n!==-1){var i=r.length-1;i===0?r=t.reactions=null:(r[n]=r[i],r.pop())}}if(r===null&&(t.f&Oe)!==0&&(Ue===null||!nr.call(Ue,t))){var a=t;(a.f&ft)!==0&&(a.f^=ft),a.v!==be&&Qn(a),a.ac!==null&&Yr(()=>{a.ac.abort(Gr),a.ac=null,ge(a,we)}),go(a),nn(a,0)}}function nn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Po(e,r[n])}function Pr(e){var t=e.f;if((t&Ie)===0){ge(e,$e);var r=V,n=Tn;V=e,Tn=(t&(tt|Ct))===0;try{(t&(ut|Gn))!==0?No(e):fi(e),wa(e);var i=Ta(e);e.teardown=typeof i=="function"?i:null,e.wv=Ea;var a}finally{Tn=n,V=r}}}function g(e){var t=e.f,r=(t&Oe)!==0;if(B!==null&&!ht){var n=V!==null&&(V.f&Ie)!==0;if(!n&&(Et===null||!Et.has(e))){var i=B.deps;if((B.f&Sn)!==0)e.rv<lr&&(e.rv=lr,Ue===null&&i!==null&&i[We]===e?We++:Ue===null?Ue=[e]:Ue.push(e));else{B.deps??(B.deps=[]),nr.call(B.deps,e)||B.deps.push(e);var a=e.reactions;a===null?e.reactions=[B]:nr.call(a,B)||a.push(B)}}}if(It&&kt.has(e))return kt.get(e);if(r){var s=e;if(It){var o=s.v;return((s.f&$e)===0&&s.reactions!==null||Ca(s))&&(o=ei(s)),kt.set(s,o),o}var l=(s.f&ft)===0&&!ht&&B!==null&&(Tn||(B.f&ft)!==0),c=(s.f&Sr)===0;rn(s)&&(l&&(s.f|=ft),Ji(s)),l&&!c&&(ea(s),Pa(s))}if(Me!=null&&Me.has(e))return Me.get(e);if((e.f&Wt)!==0)throw e.v;return e.v}function Pa(e){if(e.f|=ft,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&Oe)!==0&&(t.f&ft)===0&&(ea(t),Pa(t))}function Ca(e){if(e.v===be)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(kt.has(t)||(t.f&Oe)!==0&&Ca(t))return!0;return!1}function qt(e){var t=ht;try{return ht=!0,e()}finally{ht=t}}function ur(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(xt in e)vi(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&xt in r&&vi(r)}}}function vi(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{vi(e[n],t)}catch{}const r=jn(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=Di(r);for(let i in n){const a=n[i].get;if(a)try{a.call(e)}catch{}}}}}function Co(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Ro=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Io(e){return Ro.includes(e)}const Lo={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function zo(e){return e=e.toLowerCase(),Lo[e]??e}const Do=["touchstart","touchmove"];function Bo(e){return Do.includes(e)}const fr=Symbol("events"),Ra=new Set,pi=new Set;function Vo(e,t,r,n={}){function i(a){if(n.capture||gi.call(t,a),!a.cancelBubble)return Yr(()=>r==null?void 0:r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?(i.__removed=!1,St(()=>{i.__removed||t.addEventListener(e,i,n)})):t.addEventListener(e,i,n),i}function J(e,t,r){(t[fr]??(t[fr]={}))[e]=r}function dr(e){for(var t=0;t<e.length;t++)Ra.add(e[t]);for(var r of pi)r(e)}let hi=null,_i=!1;function gi(e){var x,f;var t=this,r=t.ownerDocument,n=e.type,i=((x=e.composedPath)==null?void 0:x.call(e))||[],a=i[0]||e.target;hi=e,_i||(_i=!0,setTimeout(()=>{_i=!1,hi=null}));var s=0,o=hi===e&&e[fr];if(o){var l=i.indexOf(o);if(l!==-1&&(t===document||t===window)){e[fr]=t;return}var c=i.indexOf(t);if(c===-1)return;l<=c&&(s=l)}if(a=i[s]||e.target,a!==t){zi(e,"currentTarget",{configurable:!0,get(){return a||r}});var d=B,p=V;nt(null),it(null);try{for(var m,_=[];a!==null&&a!==t;){try{var v=(f=a[fr])==null?void 0:f[n];v!=null&&(!a.disabled||e.target===a)&&v.call(a,e)}catch(h){m?_.push(h):m=h}if(e.cancelBubble)break;s++,a=s<i.length?i[s]:null}if(m){for(let h of _)queueMicrotask(()=>{throw h});throw m}}finally{e[fr]=t,delete e.currentTarget,nt(d),it(p)}}}const mi=((os=globalThis==null?void 0:globalThis.window)==null?void 0:os.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Fo(e){return(mi==null?void 0:mi.createHTML(e))??e}function Ia(e){var t=oi("template");return t.innerHTML=Fo(e.replaceAll("<!>","<!---->")),t.content}function an(e,t){var r=V;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function Se(e,t){var r=(t&Us)!==0,n=(t&js)!==0,i,a=!e.startsWith("<!>");return()=>{i===void 0&&(i=Ia(a?e:"<!>"+e),r||(i=sr(i)));var s=n||da?document.importNode(i,!0):i.cloneNode(!0);if(r){var o=sr(s),l=s.lastChild;an(o,l)}else an(s,s);return s}}function Ho(e,t,r="svg"){var n=!e.startsWith("<!>"),i=`<${r}>${n?e:"<!>"+e}</${r}>`,a;return()=>{if(!a){var s=Ia(i),o=sr(s);a=sr(o)}var l=a.cloneNode(!0);return an(l,l),l}}function Uo(e,t){return Ho(e,t,"svg")}function re(){var e=document.createDocumentFragment(),t=document.createComment(""),r=Rt();return e.append(t,r),an(t,r),e}function N(e,t){e!==null&&e.before(t)}function jo(e){let t=0,r=Yt(0),n;return()=>{li()&&(g(r),ma(()=>(t===0&&(n=qt(()=>e(()=>Qr(r)))),t+=1,()=>{St(()=>{t-=1,t===0&&(n==null||n(),n=void 0,Qr(r))})})))}}var Wo=jt|kr;function Go(e,t,r,n){new Xo(e,t,r,n)}class Xo{constructor(t,r,n,i){z(this,le);et(this,"parent");et(this,"is_pending",!1);et(this,"transform_error");z(this,ot);z(this,Ei,null);z(this,lt);z(this,gr);z(this,ze);z(this,Ke,null);z(this,De,null);z(this,Ze,null);z(this,Mt,null);z(this,mr,0);z(this,Jt,0);z(this,Br,!1);z(this,dn,new Set);z(this,vn,new Set);z(this,Vt,null);z(this,zn,jo(()=>(I(this,Vt,Yt(u(this,mr))),()=>{I(this,Vt,null)})));var a;I(this,ot,t),I(this,lt,r),I(this,gr,s=>{var o=V;o.b=this,o.f|=Xn,n(s)}),this.parent=V.b,this.transform_error=i??((a=this.parent)==null?void 0:a.transform_error)??(s=>s),I(this,ze,tn(()=>{U(this,le,Ri).call(this)},Wo))}defer_effect(t){Ki(t,u(this,dn),u(this,vn))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!u(this,lt).pending}update_pending_count(t,r){U(this,le,Ii).call(this,t,r),I(this,mr,u(this,mr)+t),!(!u(this,Vt)||u(this,Br))&&(I(this,Br,!0),St(()=>{I(this,Br,!1),u(this,Vt)&&Or(u(this,Vt),u(this,mr))}))}get_effect_pending(){return u(this,zn).call(this),g(u(this,Vt))}error(t){if(!u(this,lt).onerror&&!u(this,lt).failed)throw t;R!=null&&R.is_fork?(u(this,Ke)&&R.skip_effect(u(this,Ke)),u(this,De)&&R.skip_effect(u(this,De)),u(this,Ze)&&R.skip_effect(u(this,Ze)),R.oncommit(()=>{U(this,le,Li).call(this,t)})):U(this,le,Li).call(this,t)}}ot=new WeakMap,Ei=new WeakMap,lt=new WeakMap,gr=new WeakMap,ze=new WeakMap,Ke=new WeakMap,De=new WeakMap,Ze=new WeakMap,Mt=new WeakMap,mr=new WeakMap,Jt=new WeakMap,Br=new WeakMap,dn=new WeakMap,vn=new WeakMap,Vt=new WeakMap,zn=new WeakMap,le=new WeakSet,Hc=function(){try{I(this,Ke,He(()=>u(this,gr).call(this,u(this,ot))))}catch(t){this.error(t)}},Uc=function(t){const r=u(this,lt).failed,{reset:n,invoke_onerror:i}=U(this,le,Ci).call(this,t);St(i),r&&I(this,Ze,He(()=>{r(u(this,ot),()=>t,()=>n)}))},Ci=function(t){var r=!1,n=!1;const i=()=>{if(r){qs();return}r=!0,n&&lo(),u(this,Ze)!==null&&or(u(this,Ze),()=>{I(this,Ze,null)}),U(this,le,Un).call(this,()=>{U(this,le,Ri).call(this)})};return{reset:i,invoke_onerror:()=>{var s,o;try{n=!0,(o=(s=u(this,lt)).onerror)==null||o.call(s,t,i),n=!1}catch(l){$t(l,u(this,ze)&&u(this,ze).parent)}}}},jc=function(){const t=u(this,lt).pending;t&&(this.is_pending=!0,I(this,De,He(()=>t(u(this,ot)))),St(()=>{var r=I(this,Mt,document.createDocumentFragment()),n=Rt(),i=!1;if(r.append(n),I(this,Ke,U(this,le,Un).call(this,()=>{try{return He(()=>u(this,gr).call(this,n))}catch(a){try{this.error(a),i=!0}catch(s){$t(s,u(this,ze).parent)}return null}})),u(this,Ke)===null){I(this,Mt,null),i&&U(this,le,yn).call(this,R);return}u(this,Jt)===0&&(u(this,ot).before(r),I(this,Mt,null),or(u(this,De),()=>{I(this,De,null)}),U(this,le,yn).call(this,R))}))},Ri=function(){try{if(this.is_pending=this.has_pending_snippet(),I(this,Jt,0),I(this,mr,0),I(this,Ke,He(()=>{u(this,gr).call(this,u(this,ot))})),u(this,Jt)>0){var t=I(this,Mt,document.createDocumentFragment());di(u(this,Ke),t);const r=u(this,lt).pending;I(this,De,He(()=>r(u(this,ot))))}else U(this,le,yn).call(this,R)}catch(r){this.error(r)}},yn=function(t){this.is_pending=!1,t.transfer_effects(u(this,dn),u(this,vn))},Un=function(t){var r=V,n=B,i=de;it(u(this,ze)),nt(u(this,ze)),Ar(u(this,ze).ctx);try{return ir.ensure(),t()}finally{it(r),nt(n),Ar(i)}},Ii=function(t,r){var n;if(!this.has_pending_snippet()){this.parent&&U(n=this.parent,le,Ii).call(n,t,r);return}I(this,Jt,u(this,Jt)+t),u(this,Jt)===0&&(U(this,le,yn).call(this,r),u(this,De)&&or(u(this,De),()=>{I(this,De,null)}),u(this,Mt)&&(u(this,ot).before(u(this,Mt)),I(this,Mt,null)))},Li=function(t){u(this,Ke)&&(Ne(u(this,Ke)),I(this,Ke,null)),u(this,De)&&(Ne(u(this,De)),I(this,De,null)),u(this,Ze)&&(Ne(u(this,Ze)),I(this,Ze,null));let r=u(this,lt).failed;const n=i=>{const{reset:a,invoke_onerror:s}=U(this,le,Ci).call(this,i);s(),r&&I(this,Ze,U(this,le,Un).call(this,()=>{try{return He(()=>{var o=V;o.b=this,o.f|=Xn,r(u(this,ot),()=>i,()=>a)})}catch(o){return $t(o,u(this,ze).parent),null}}))};St(()=>{var i;try{i=this.transform_error(t)}catch(a){$t(a,u(this,ze)&&u(this,ze).parent);return}i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(n,a=>$t(a,u(this,ze)&&u(this,ze).parent)):n(i)})};function Z(e,t){var r=t==null?"":typeof t=="object"?`${t}`:t;r!==(e[Wr]??(e[Wr]=e.nodeValue))&&(e[Wr]=r,e.nodeValue=`${r}`)}function Yo(e,t){return qo(e,t)}const On=new Map;function qo(e,{target:t,anchor:r,props:n={},events:i,context:a,intro:s=!0,transformError:o}){xo();var l=void 0,c=Ao(()=>{var d=r??t.appendChild(Rt());Go(d,{pending:()=>{}},_=>{Gt({});var v=de;a&&(v.c=a),i&&(n.$$events=i),l=e(_,n)||Zn(),Xt()},o);var p=new Set,m=_=>{for(var v=0;v<_.length;v++){var x=_[v];if(!p.has(x)){p.add(x);var f=Bo(x);for(const k of[t,document]){var h=On.get(k);h===void 0&&(h=new Map,On.set(k,h));var b=h.get(x);b===void 0?(k.addEventListener(x,gi,{passive:f}),h.set(x,1)):h.set(x,b+1)}}}};return m(wn(Ra)),pi.add(m),()=>{var f;for(var _ of p)for(const h of[t,document]){var v=On.get(h),x=v.get(_);--x==0?(h.removeEventListener(_,gi),v.delete(_),v.size===0&&On.delete(h)):v.set(_,x)}pi.delete(m),d!==r&&((f=d.parentNode)==null||f.removeChild(d))}});return Ko.set(l,c),l}let Ko=new WeakMap;class yi{constructor(t,r=!0){et(this,"anchor");z(this,mt,new Map);z(this,Nt,new Map);z(this,Qe,new Map);z(this,yr,new Set);z(this,pn,!0);z(this,hn,t=>{if(u(this,mt).has(t)){var r=u(this,mt).get(t),n=u(this,Nt).get(r);if(n)Nn(n),u(this,yr).delete(r);else{var i=u(this,Qe).get(r);i&&(Nn(i.effect),u(this,Nt).set(r,i.effect),u(this,Qe).delete(r),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),n=i.effect)}for(const[a,s]of u(this,mt)){if(u(this,mt).delete(a),a===t)break;const o=u(this,Qe).get(s);o&&(Ne(o.effect),u(this,Qe).delete(s))}for(const[a,s]of u(this,Nt)){if(a===r||u(this,yr).has(a))continue;const o=()=>{if(Array.from(u(this,mt).values()).includes(a)){var c=document.createDocumentFragment();di(s,c),c.append(Rt()),u(this,Qe).set(a,{effect:s,fragment:c})}else Ne(s);u(this,yr).delete(a),u(this,Nt).delete(a)};u(this,pn)||!n?(u(this,yr).add(a),or(s,o,!1)):o()}}});z(this,Dn,t=>{u(this,mt).delete(t);const r=Array.from(u(this,mt).values());for(const[n,i]of u(this,Qe))r.includes(n)||(Ne(i.effect),u(this,Qe).delete(n))});this.anchor=t,I(this,pn,r)}ensure(t,r){var n=R,i=ha();if(r&&!u(this,Nt).has(t)&&!u(this,Qe).has(t))if(i){var a=document.createDocumentFragment(),s=Rt();a.append(s),u(this,Qe).set(t,{effect:He(()=>r(s)),fragment:a})}else u(this,Nt).set(t,He(()=>r(this.anchor)));if(u(this,mt).set(n,t),i){for(const[o,l]of u(this,Nt))o===t?n.unskip_effect(l):n.skip_effect(l);for(const[o,l]of u(this,Qe))o===t?n.unskip_effect(l.effect):n.skip_effect(l.effect);n.oncommit(u(this,hn)),n.ondiscard(u(this,Dn))}else u(this,hn).call(this,n)}}mt=new WeakMap,Nt=new WeakMap,Qe=new WeakMap,yr=new WeakMap,pn=new WeakMap,hn=new WeakMap,Dn=new WeakMap;function Lt(e,t,r=!1){var n=new yi(e),i=r?jt:0;function a(s,o){n.ensure(s,o)}tn(()=>{var s=!1;t((o,l=0)=>{s=!0,a(l,o)}),s||a(-1,null)},i)}function La(e,t){return t}function Zo(e,t,r){for(var n=[],i=t.length,a,s=t.length,o=0;o<i;o++){let p=t[o];or(p,()=>{if(a){if(a.pending.delete(p),a.done.add(p),a.pending.size===0){var m=e.outrogroups;wi(e,wn(a.done)),m.delete(a),m.size===0&&(e.outrogroups=null)}}else s-=1},!1)}if(s===0){var l=n.length===0&&r!==null&&e.pending.size===0;if(l){var c=r,d=c.parentNode;So(d),d.append(c),e.items.clear()}wi(e,t,!l)}else a={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(a)}function wi(e,t,r=!0){var n;if(e.pending.size>0){n=new Set;for(const s of e.pending.values())for(const o of s)n.add(e.items.get(o).e)}for(var i=0;i<t.length;i++){var a=t[i];if(n!=null&&n.has(a)){a.f|=bt;const s=document.createDocumentFragment();di(a,s)}else Ne(t[i],r)}}var za;function Kt(e,t,r,n,i,a=null){var s=e,o=new Map,l=(t&Wi)!==0;if(l){var c=e;s=c.appendChild(Rt())}var d=null,p=Jn(()=>{var k=r();return ae(k)?k:k==null?[]:wn(k)}),m,_=new Map,v=!0;function x(k){(b.effect.f&Ie)===0&&(b.pending.delete(k),b.fallback=d,Qo(b,m,s,t,n),d!==null&&(m.length===0?(d.f&bt)===0?Nn(d):(d.f^=bt,on(d,null,s)):or(d,()=>{d=null})))}function f(k){b.pending.delete(k)}var h=tn(()=>{m=g(p);for(var k=m.length,P=new Set,S=R,$=ha(),E=0;E<k;E+=1){var F=m[E],j=n(F,E),te=v?null:o.get(j);te?(te.v&&Or(te.v,F),te.i&&Or(te.i,E),$&&S.unskip_effect(te.e)):(te=Jo(o,v?s:za??(za=Rt()),F,j,E,i,t,r),v||(te.e.f|=bt),o.set(j,te)),P.add(j)}if(k===0&&a&&!d&&(v?d=He(()=>a(s)):(d=He(()=>a(za??(za=Rt()))),d.f|=bt)),k>P.size&&Js(),!v)if(_.set(S,P),$){for(const[Ae,je]of o)P.has(Ae)||S.skip_effect(je.e);S.oncommit(x),S.ondiscard(f)}else x(S);g(p)}),b={effect:h,items:o,pending:_,outrogroups:null,fallback:d};v=!1}function sn(e){for(;e!==null&&(e.f&tt)===0;)e=e.next;return e}function Qo(e,t,r,n,i){var te,Ae,je,Tt,Ft,q,he,me,Be;var a=(n&zs)!==0,s=t.length,o=e.items,l=sn(e.effect.first),c,d=null,p,m=[],_=[],v,x,f,h;if(a)for(h=0;h<s;h+=1)v=t[h],x=i(v,h),f=o.get(x).e,(f.f&bt)===0&&((Ae=(te=f.nodes)==null?void 0:te.a)==null||Ae.measure(),(p??(p=new Set)).add(f));for(h=0;h<s;h+=1){if(v=t[h],x=i(v,h),f=o.get(x).e,e.outrogroups!==null)for(const ye of e.outrogroups)ye.pending.delete(f),ye.done.delete(f);if((f.f&Re)!==0&&(Nn(f),a&&((Tt=(je=f.nodes)==null?void 0:je.a)==null||Tt.unfix(),(p??(p=new Set)).delete(f))),(f.f&bt)!==0)if(f.f^=bt,f===l)on(f,null,r);else{var b=d?d.next:l;f===e.effect.last&&(e.effect.last=f.prev),f.prev&&(f.prev.next=f.next),f.next&&(f.next.prev=f.prev),Zt(e,d,f),Zt(e,f,b),on(f,b,r),d=f,m=[],_=[],l=sn(d.next);continue}if(f!==l){if(c!==void 0&&c.has(f)){if(m.length<_.length){var k=_[0],P;d=k.prev;var S=m[0],$=m[m.length-1];for(P=0;P<m.length;P+=1)on(m[P],k,r);for(P=0;P<_.length;P+=1)c.delete(_[P]);Zt(e,S.prev,$.next),Zt(e,d,S),Zt(e,$,k),l=k,d=$,h-=1,m=[],_=[]}else c.delete(f),on(f,l,r),Zt(e,f.prev,f.next),Zt(e,f,d===null?e.effect.first:d.next),Zt(e,d,f),d=f;continue}for(m=[],_=[];l!==null&&l!==f;)(c??(c=new Set)).add(l),_.push(l),l=sn(l.next);if(l===null)continue}(f.f&bt)===0&&m.push(f),d=f,l=sn(f.next)}if(e.outrogroups!==null){for(const ye of e.outrogroups)ye.pending.size===0&&(wi(e,wn(ye.done)),(Ft=e.outrogroups)==null||Ft.delete(ye));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||c!==void 0){var E=[];if(c!==void 0)for(f of c)(f.f&Re)===0&&E.push(f);for(;l!==null;)(l.f&Re)===0&&l!==e.fallback&&E.push(l),l=sn(l.next);var F=E.length;if(F>0){var j=(n&Wi)!==0&&s===0?r:null;if(a){for(h=0;h<F;h+=1)(he=(q=E[h].nodes)==null?void 0:q.a)==null||he.measure();for(h=0;h<F;h+=1)(Be=(me=E[h].nodes)==null?void 0:me.a)==null||Be.fix()}Zo(e,E,j)}}a&&St(()=>{var ye,Pe;if(p!==void 0)for(f of p)(Pe=(ye=f.nodes)==null?void 0:ye.a)==null||Pe.apply()})}function Jo(e,t,r,n,i,a,s,o){var l=(s&Is)!==0?(s&Ds)===0?wo(r,!1,!1):Yt(r):null,c=(s&Ls)!==0?Yt(i):null;return{v:l,i:c,e:He(()=>(a(t,l??r,c??i,o),()=>{e.delete(n)}))}}function on(e,t,r){if(e.nodes)for(var n=e.nodes.start,i=e.nodes.end,a=t&&(t.f&bt)===0?t.nodes.start:r;n!==null;){var s=Jr(n);if(a.before(n),n===i)return;n=s}}function Zt(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function oe(e,t,r,n,i){var o,l;if((o=t.$$host)!=null&&o.$$shadowRoot){const c=oi("slot");N(e,c);return}var a=(l=t.$$slots)==null?void 0:l[r],s=!1;a===!0&&(a=t.children,s=!0),a===void 0||a(e,s?()=>n:n)}function el(e,t,r){var n=new yi(e);tn(()=>{var i=t()??null;n.ensure(i,i&&(a=>r(a,i)))},jt)}function tl(e,t,r,n,i,a){var s=null,o=e,l=new yi(o,!1);tn(()=>{const c=t()||null;var d=Ws;if(c===null){l.ensure(null,null);return}return l.ensure(c,p=>{if(c){if(s=oi(c,d),an(s,s),n){var m=null,_=s.appendChild(Rt());n(s,_),m==null||m.remove()}V.nodes.end=s,p.before(s)}}),()=>{}},jt),ci(()=>{})}function rl(e,t){var r=void 0,n;ya(()=>{r!==(r=t())&&(n&&(Ne(n),n=null),r&&(n=He(()=>{ui(()=>r(e))})))})}function Da(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=Da(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function nl(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=Da(e))&&(n&&(n+=" "),n+=t);return n}function vr(e){return typeof e=="object"?nl(e):e??""}const Ba=[...` 	
\r\f \v\uFEFF`];function il(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var i of Object.keys(r))if(r[i])n=n?n+" "+i:i;else if(n.length)for(var a=i.length,s=0;(s=n.indexOf(i,s))>=0;){var o=s+a;(s===0||Ba.includes(n[s-1]))&&(o===n.length||Ba.includes(n[o]))?n=(s===0?"":n.substring(0,s))+n.substring(o+1):s=o}}return n===""?null:n}function Va(e,t=!1){var r=t?" !important;":";",n="";for(var i of Object.keys(e)){var a=e[i];a!=null&&a!==""&&(n+=" "+i+": "+a+r)}return n}function bi(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function al(e,t){if(t){var r="",n,i;if(Array.isArray(t)?(n=t[0],i=t[1]):n=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var a=!1,s=0,o=!1,l=[];n&&l.push(...Object.keys(n).map(bi)),i&&l.push(...Object.keys(i).map(bi));var c=0,d=-1;const x=e.length;for(var p=0;p<x;p++){var m=e[p];if(o?m==="/"&&e[p-1]==="*"&&(o=!1):a?a===m&&(a=!1):m==="/"&&e[p+1]==="*"?o=!0:m==='"'||m==="'"?a=m:m==="("?s++:m===")"&&s--,!o&&a===!1&&s===0){if(m===":"&&d===-1)d=p;else if(m===";"||p===x-1){if(d!==-1){var _=bi(e.substring(c,d).trim());if(!l.includes(_)){m!==";"&&p++;var v=e.substring(c,p).trim();r+=" "+v+";"}}c=p+1,d=-1}}}}return n&&(r+=Va(n)),i&&(r+=Va(i,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Le(e,t,r,n,i,a){var s=e[qn];if(s!==r||s===void 0){var o=il(r,n,a);o==null?e.removeAttribute("class"):t?e.className=o:e.setAttribute("class",o),e[qn]=r}else if(a&&i!==a)for(var l in a){var c=!!a[l];(i==null||c!==!!i[l])&&e.classList.toggle(l,c)}return a}function xi(e,t={},r,n){for(var i in r){var a=r[i];t[i]!==a&&(r[i]==null?e.style.removeProperty(i):e.style.setProperty(i,a,n))}}function Fa(e,t,r,n){var i=e[Kn];if(i!==t){var a=al(t,n);a==null?e.removeAttribute("style"):e.style.cssText=a,e[Kn]=t}else n&&(Array.isArray(n)?(xi(e,r==null?void 0:r[0],n[0]),xi(e,r==null?void 0:r[1],n[1],"important")):xi(e,r,n));return n}function Ha(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Ua(e,t){var r=!("__defaultValue"in e);!r&&e.__defaultValue===t||(e.__defaultValue=t,ja(e,!r||"__value"in e))}function ja(e,t){var r=e.__defaultValue,n=e.multiple,i=n?r??[]:null;if(!(n&&!ae(i))){var a=e.selectedIndex,s=t&&n?new Set(e.selectedOptions):null;for(var o of e.options){var l=Si(o);Ha(o,n?i.includes(l):ua(l,r))}if(t)if(s!==null)for(o of e.options){var c=s.has(o);o.selected!==c&&(o.selected=c)}else e.selectedIndex!==a&&(e.selectedIndex=a)}}function zt(e,t,r=!1){if(e.multiple){if(t==null)return;if(!ae(t))return Ys();for(var n of e.options)n.selected=t.includes(Si(n));return}for(n of e.options){var i=Si(n);if(ua(i,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function pr(e){var t=new MutationObserver(r=>{r.every(sl)||("__defaultValue"in e&&ja(e,!1),"__value"in e&&zt(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ci(()=>{t.disconnect()})}function Si(e){return"__value"in e?e.__value:e.value}function sl(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(r=>r.nodeName==="SELECTEDCONTENT")}return!1}const ln=Symbol("class"),cn=Symbol("style"),Wa=Symbol("is custom element"),Ga=Symbol("is html"),ol=$n?"input":"INPUT",ll=$n?"option":"OPTION",Xa=$n?"select":"SELECT",cl=$n?"progress":"PROGRESS";function Pn(e,t){var r=Cn(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==cl)||(e.value=t??"")}function ul(e,t){var r=Cn(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function Ee(e,t,r,n){var i=Cn(e);i[t]!==(i[t]=r)&&(t==="loading"&&(e[Rs]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Ka(e).has(t)?e[t]=r:e.setAttribute(t,r))}function fl(e,t,r,n,i=!1,a=!1){var s=Cn(e),o=s[Wa],l=!s[Ga],c=t||{},d=e.nodeName===ll,p=e.nodeName===Xa;for(var m in t)!(m in r)&&m[0]+m[1]!=="$$"&&(r[m]=null);r.class?r.class=vr(r.class):r[ln]&&(r.class=null),r[cn]&&(r.style??(r.style=null));var _=Ka(e);if(e.nodeName===ol&&"type"in r&&("value"in r||"__value"in r)){var v=r.type;(v!==c.type||v===void 0&&e.hasAttribute("type"))&&(c.type=v,Ee(e,"type",v))}for(const S in r){let $=r[S];if(d&&S==="value"&&$==null){e.value=e.__value="",c[S]=$;continue}if(S==="class"){var x=e.namespaceURI==="http://www.w3.org/1999/xhtml";Le(e,x,$,n,t==null?void 0:t[ln],r[ln]),c[S]=$,c[ln]=r[ln];continue}if(S==="style"){Fa(e,$,t==null?void 0:t[cn],r[cn]),c[S]=$,c[cn]=r[cn];continue}var f=c[S];if(!($===f&&!($===void 0&&e.hasAttribute(S)))){c[S]=$;var h=S[0]+S[1];if(h!=="$$")if(h==="on"){const E={},F="$$"+S;let j=S.slice(2);var b=Io(j);if(Co(j)&&(j=j.slice(0,-7),E.capture=!0),!b&&f){if($!=null)continue;e.removeEventListener(j,c[F],E),c[F]=null}if(b)J(j,e,$),dr([j]);else if($!=null){let te=function(Ae){c[S].call(this,Ae)};c[F]=Vo(j,e,te,E)}}else if(S==="style")Ee(e,S,$);else if(S==="autofocus")vo(e,!!$);else if(!o&&(S==="__value"||S==="value"&&$!=null))e.value=e.__value=$;else if(S==="selected"&&d)Ha(e,$);else{var k=S;l||(k=zo(k));var P=k==="defaultValue"||k==="defaultChecked";if(p&&k==="defaultValue")continue;if($==null&&!o&&!P)if(s[S]=null,k==="value"||k==="checked"){let E=e;const F=t===void 0;if(k==="value"){let j=E.defaultValue;E.removeAttribute(k),E.defaultValue=j,E.value=E.__value=F?j:null}else{let j=E.defaultChecked;E.removeAttribute(k),E.defaultChecked=j,E.checked=F?j:!1}}else e.removeAttribute(S);else P||(o||typeof $!="string")&&_.has(k)?(e[k]=$,k in s&&(s[k]=be)):typeof $!="function"&&Ee(e,k,$)}}}return c}function Ya(e,t,r=[],n=[],i=[],a,s=!1,o=!1){Zi(i,r,n,l=>{var c=void 0,d={},p=e.nodeName===Xa,m=!1;if(ya(()=>{var v=t(...l.map(g)),x=fl(e,c,v,a,s,o);if(m&&p){var f=e;"defaultValue"in v&&Ua(f,v.defaultValue),"value"in v&&zt(f,v.value)}for(let b of Object.getOwnPropertySymbols(d))v[b]||Ne(d[b]);for(let b of Object.getOwnPropertySymbols(v)){var h=v[b];b.description===Gs&&(!c||h!==c[b])&&(d[b]&&Ne(d[b]),d[b]=He(()=>rl(e,()=>h))),x[b]=h}c=x}),p){var _=e;ui(()=>{var v=c;"defaultValue"in v&&Ua(_,v.defaultValue),zt(_,v.value,!0),pr(_)})}m=!0})}function Cn(e){return e[kn]??(e[kn]={[Wa]:e.nodeName.includes("-"),[Ga]:e.namespaceURI===Xi})}var qa=new Map;function Ka(e){var t=e.getAttribute("is")||e.nodeName,r=qa.get(t);if(r)return r;qa.set(t,r=new Set);for(var n,i=e,a=Element.prototype;a!==i;){n=Di(i);for(var s in n)n[s].set&&s!=="innerHTML"&&s!=="textContent"&&s!=="innerText"&&r.add(s);i=jn(i)}return r}function ki(e,t){return e===t||(e==null?void 0:e[xt])===t}function Za(e=Zn(),t,r,n){var i=de.r,a=V;return ui(()=>{var s,o;return ma(()=>{s=o,o=[],qt(()=>{ki(r(...o),e)||(t(e,...o),s&&ki(r(...s),e)&&t(null,...s))})}),()=>{let l=a;for(;l!==i&&l.parent!==null&&l.parent.f&bn;)l=l.parent;const c=()=>{o&&ki(r(...o),e)&&t(null,...o)},d=l.teardown;l.teardown=()=>{c(),d==null||d()}}}),e}function dl(e=!1){const t=de,r=t.l.u;if(!r)return;let n=()=>ur(t.s);if(e){let i=0,a={};const s=Nr(()=>{let o=!1;const l=t.s;for(const c in l)l[c]!==a[c]&&(a[c]=l[c],o=!0);return o&&i++,i});n=()=>g(s)}r.b.length&&Eo(()=>{Qa(t,n),Wn(r.b)}),en(()=>{const i=qt(()=>r.m.map(Ps));return()=>{for(const a of i)typeof a=="function"&&a()}}),r.a.length&&en(()=>{Qa(t,n),Wn(r.a)})}function Qa(e,t){if(e.l.s)for(const r of e.l.s)g(r);t()}let Rn=!1;function vl(e){var t=Rn;try{return Rn=!1,[e(),Rn]}finally{Rn=t}}const pl={get(e,t){if(!e.exclude.includes(t))return g(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var n=V;try{it(e.parent_effect),e.special[t]=_t({get[t](){return e.props[t]}},t,Gi)}finally{it(n)}}return e.special[t](r),oa(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),oa(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function se(e,t){return new Proxy({props:e,exclude:t,special:{},version:Yt(0),parent_effect:V},pl)}const hl={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Ur(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let i=e.props[n];Ur(i)&&(i=i());const a=Ut(i,t);if(a&&a.set)return a.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Ur(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const i=Ut(n,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===xt||t===ji)return!1;for(let r of e.props)if(Ur(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Ur(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function ce(...e){return new Proxy({props:e},hl)}function _t(e,t,r,n){var P;var i=!Er||(r&Vs)!==0,a=(r&Fs)!==0,s=(r&Hs)!==0,o=n,l=!0,c=void 0,d=()=>s&&i?(c??(c=Nr(n)),g(c)):(l&&(l=!1,o=s?qt(n):n),o);let p;if(a){var m=xt in e||ji in e;p=((P=Ut(e,t))==null?void 0:P.set)??(m&&t in e?S=>e[t]=S:void 0)}var _,v=!1;a?[_,v]=vl(()=>e[t]):_=e[t],_===void 0&&n!==void 0&&(_=d(),p&&(i&&io(),p(_)));var x;if(i?x=()=>{var S=e[t];return S===void 0?d():(l=!0,S)}:x=()=>{var S=e[t];return S!==void 0&&(o=void 0),S===void 0?o:S},i&&(r&Gi)===0)return x;if(p){var f=e.$$legacy;return(function(S,$){return arguments.length>0?((!i||!$||f||v)&&p($?x():S),S):x()})}var h=!1,b=((r&Bs)!==0?Nr:Jn)(()=>(h=!1,x()));a&&g(b);var k=V;return(function(S,$){if(arguments.length>0){const E=$?g(b):i&&a?Fe(S):S;return M(b,E),h=!0,o!==void 0&&(o=E),S}return It&&h||(k.f&Ie)!==0?b.v:g(b)})}function $i(e){de===null&&Zs(),Er&&de.l!==null?_l(de).m.push(e):en(()=>{const t=qt(e);if(typeof t=="function")return t})}function _l(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const gl="5";typeof window<"u"&&((ls=window.__svelte??(window.__svelte={})).v??(ls.v=new Set)).add(gl);const ee=Fe({ready:!1,cleanScreen:!1,panelOpen:!0,settingsOpen:!1,startupOpen:!0,focusSection:null,focusNonce:0,status:{}});function ml(e){ee.panelOpen=!0,ee.focusSection=e,ee.focusNonce++}const Ge=Fe({});function Ja(e){try{return structuredClone(e)}catch{return JSON.parse(JSON.stringify(e))}}function ie(e){var t,r,n;if(e==null)return e;try{return((n=(r=(t=window.XRA)==null?void 0:t.i18n)==null?void 0:r.t)==null?void 0:n.call(r,e))??e}catch{return e}}function Xe(e,t){const r=e.split(".");let n=Ge;for(const i of r){if(n==null)return t;n=n[i]}return n===void 0?t:n}function yl(e){var r,n,i,a,s,o,l,c;const t=window.XRA;if(t){if(e.startsWith("background.")){(n=(r=t.background)==null?void 0:r.apply)==null||n.call(r);return}if(e==="ui.language"){(a=(i=t.i18n)==null?void 0:i.setLanguage)==null||a.call(i,Ge.ui.language);return}if(e==="ui.preview_wireframe"){typeof t.applyMocapWireframeVisibility=="function"&&t.applyMocapWireframeVisibility();return}if(e==="ui.mocap_view"){typeof t.applyMocapWireframeVisibility=="function"&&t.applyMocapWireframeVisibility();return}if(e.startsWith("performance.")){window.XRA_render_fps_limit=Number(Ge.performance.render_fps??60),window.XRA_gpu_preference=String(Ge.performance.gpu_preference||"default"),window.XRA_preserve_drawing_buffer=Ge.performance.preserve_drawing_buffer!==!1,window.XRA_antialias=Ge.performance.antialias!=="off",(o=(s=t.events)==null?void 0:s.emit)==null||o.call(s,"performance",Ge.performance);return}(c=(l=t.events)==null?void 0:l.emit)==null||c.call(l,"config-change",{path:e,value:Xe(e)})}}function st(e,t){var a,s;const r=window.XRA,n=e.split(".");let i=Ge;for(let o=0;o<n.length-1;o++)i[n[o]]==null&&(i[n[o]]={}),i=i[n[o]];if(i[n[n.length-1]]=t,r!=null&&r.config){let o=r.config;for(let l=0;l<n.length-1;l++)o[n[l]]==null&&(o[n[l]]={}),o=o[n[l]];o[n[n.length-1]]=t}yl(e);try{(s=(a=r==null?void 0:r.profileService)==null?void 0:a.save)==null||s.call(a)}catch{}}function In(){var e,t,r;ee.cleanScreen=!ee.cleanScreen,document.body.classList.toggle("xra-total-clean-screen",ee.cleanScreen);try{(r=(t=(e=window.XRA)==null?void 0:e.ui)==null?void 0:t.setHidden)==null||r.call(t,ee.cleanScreen)}catch{}}function wl(){var e;try{Object.assign(Ge,Ja(((e=window.XRA)==null?void 0:e.config)||{}))}catch{}}function es(){var e;try{const t=(e=window.SA_bridge)==null?void 0:e.backend;t&&typeof t.status=="function"&&(ee.status=t.status()||{})}catch{}}function bl(){const e=()=>window.XRA&&window.XRA.config?(Object.assign(Ge,Ja(window.XRA.config)),ee.ready=!0,es(),window.addEventListener("keydown",t=>{t.key==="Escape"&&ee.cleanScreen&&(t.preventDefault(),In())},!0),!0):!1;if(!e()){const t=setInterval(()=>{e()&&clearInterval(t)},200)}}const xl={camera:{title:"Camera",icon:"Camera"},devices:{title:"Devices",icon:"SlidersHorizontal"},pose_model:{title:"Pose model",icon:"PersonStanding"},performance:{title:"Performance",icon:"Zap"},tracking:{title:"Motion capture",icon:"Activity"},body:{title:"Body",icon:"PersonStanding"},collider:{title:"Body collider",icon:"Shield"},lip:{title:"Audio & Lip-sync",icon:"Mic"},background:{title:"Background",icon:"Image"},avatar:{title:"Character position (avatar only)",icon:"User"},second_avatar:{title:"Remote avatar (Studio Link)",icon:"Globe"},stage:{title:"3D Stage & Environment",icon:"Landmark"},recorder:{title:"Recording / capture",icon:"Video"},visual_effects:{title:"Visual effects",icon:"Sparkles"},debug:{title:"Diagnostics",icon:"Bug"},ui:{title:"UI & overlays",icon:"Monitor"}},ts=["performance","tracking","body","collider","lip","background","stage","avatar","second_avatar","recorder","visual_effects","debug","ui","camera","devices","pose_model"],Sl=new Set(["left_settings","_custom_","_excluded_"]),kl=new Set(["camera.view_presets","camera.selected_view_preset","ui.preview_video","ui.preview_wireframe","ui.preview_debug","performance.auto_last_result","recorder.output_dir"]);function rs(e){const t=String(e).replace(/_/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").trim();return t.charAt(0).toUpperCase()+t.slice(1)}const $l={"ui.language":{type:"select",options:()=>{var e,t;return((t=(e=window.XRA)==null?void 0:e.i18n)==null?void 0:t.LANGUAGES)||[["en","English"]]}},"background.mode":{type:"select",options:[["color","Color"],["image","Image"],["none","None (transparent · OBS)"]]},"background.color":{type:"color"},"background.path":{type:"text"},"ui.mocap_view":{type:"select",label:"Mocap window",options:[["off","Off"],["both","Webcam + skeleton"],["wireframe","Skeleton only"],["video","Webcam only"]]},"performance.tracking_pipeline":{type:"select",label:"Tracking mode",options:[["FULL_BODY","Full Body"],["FACE","Face only"],["UPPER_BODY","Upper body"]]},"performance.render_resolution":{type:"select",options:[["720p","720p (HD · GPU Saving)"],["1080p","1080p (Full HD · Recommended)"],["1440p","1440p (2K · High resolution)"]]},"performance.render_fps":{type:"slider",min:15,max:240,step:1},"performance.gpu_preference":{type:"select",label:"Graphics card (GPU)",options:[["default","Default"],["high-performance","Dedicated GPU (High Performance)"],["low-power","Integrated GPU (Low Power)"]]},"performance.shadows":{type:"select",options:[["auto","Auto"],["on","Enabled"],["off","Disabled (GPU saving)"]]},"performance.antialias":{type:"select",label:"Anti-Aliasing (AA)",options:[["auto","Enabled (Hardware MSAA · Recommended)"],["off","Disabled"]]},"performance.spring_bone":{type:"select",label:"Hair/cloth physics (Spring Bone)",options:[["full","Full (every frame)"],["half","Half (1 frame out of 2 · Saving)"],["off","Off"]]},"performance.infer_mode":{type:"select",options:[["native","Native (Auto)"],["640x360","640×360 (Recommended · 30 FPS smooth)"],["640x480","640×480 (Standard 4:3 format)"],["1280x720","1280×720 (HD 720p · High precision)"]]},"performance.pose_fps":{type:"slider",min:5,max:30,step:1},"performance.hand_fps":{type:"slider",min:5,max:30,step:1},"performance.min_tracking_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_pose_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_face_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_joint_confidence":{type:"slider",min:.05,max:1,step:.05},"tracking.hand_recovery_mode":{type:"select",options:[["normal","Normal"],["aggressive","Aggressive"],["off","Off"]]},"tracking.hand_detection_sensitivity":{type:"select",options:[["high","High"],["normal","Normal"],["low","Low"]]},"tracking.stabilize_hand_percent":{type:"slider",min:0,max:100,step:1},"tracking.stabilize_arm":{type:"slider",min:0,max:100,step:1},"tracking.stabilize_arm_time":{type:"slider",min:0,max:2,step:.05},"tracking.native_smoothing":{type:"slider",min:0,max:1,step:.01},"tracking.body_bend_reduction":{type:"slider",min:0,max:1,step:.01},"tracking.upper_body_guard_strength":{type:"slider",min:0,max:1,step:.01},"tracking.guard_jump_deg":{type:"slider",min:5,max:120,step:1},"tracking.guard_hold_ms":{type:"slider",min:0,max:2e3,step:10},"tracking.guard_reacquire_deg":{type:"slider",min:5,max:120,step:1},"tracking.adaptive_smoothing_strength":{type:"slider",min:0,max:1,step:.01},"tracking.guard_confidence_min":{type:"slider",min:0,max:1,step:.01},"tracking.guard_release_ms":{type:"slider",min:0,max:2e3,step:10},"tracking.guard_mode":{type:"select",options:[["off","Off"],["auto","Auto"]]},"tracking.desk_torso_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_hips_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_legs_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_max_yaw_deg":{type:"slider",min:0,max:90,step:1},"tracking.desk_max_pitch_deg":{type:"slider",min:0,max:90,step:1},"tracking.desk_max_roll_deg":{type:"slider",min:0,max:90,step:1},"body.anchor_strength":{type:"slider",min:0,max:1,step:.01},"body.transition_ms":{type:"slider",min:0,max:2e3,step:10},"avatar.offset_x":{type:"slider",min:-5,max:5,step:.01},"avatar.offset_y":{type:"slider",min:-5,max:5,step:.01},"avatar.offset_z":{type:"slider",min:-5,max:5,step:.01},"avatar.rotation_y":{type:"slider",min:-180,max:180,step:1},"second_avatar.offset_x":{type:"slider",min:-20,max:20,step:.1},"second_avatar.offset_y":{type:"slider",min:-10,max:10,step:.1},"second_avatar.offset_z":{type:"slider",min:-10,max:10,step:.1},"second_avatar.rotation_y":{type:"slider",min:-180,max:180,step:1},"stage.scale":{type:"slider",min:.1,max:5,step:.01},"stage.rotation_x":{type:"slider",min:-180,max:180,step:1},"stage.rotation_y":{type:"slider",min:-180,max:180,step:1},"stage.rotation_z":{type:"slider",min:-180,max:180,step:1},"stage.offset_x":{type:"slider",min:-10,max:10,step:.05},"stage.offset_y":{type:"slider",min:-10,max:10,step:.05},"stage.offset_z":{type:"slider",min:-10,max:10,step:.05},"stage.scene_zoom":{type:"slider",min:.5,max:3,step:.01},"stage.lights_intensity":{type:"slider",min:0,max:3,step:.05},"collider.preset":{type:"select",options:[["CUSTOM","Custom"],["NONE","None"]]},"collider.reaction":{type:"select",options:[["z_push","Z push"],["bounce","Bounce"],["block","Block"]]},"collider.head":{type:"slider",min:0,max:200,step:1},"collider.chest":{type:"slider",min:0,max:200,step:1},"collider.waist":{type:"slider",min:0,max:200,step:1},"collider.hip":{type:"slider",min:0,max:200,step:1},"collider.front_clearance":{type:"slider",min:0,max:50,step:1},"lip.analysis_fps":{type:"slider",min:5,max:60,step:1},"lip.fft_size":{type:"select",label:"FFT size",options:[["256","256"],["512","512"],["1024","1024"],["2048","2048"]]},"lip.mic_mix":{type:"slider",min:0,max:1,step:.01},"lip.threshold":{type:"slider",min:0,max:.2,step:.001},"lip.response_gain":{type:"slider",min:0,max:3,step:.05},"lip.vowel_emphasis":{type:"slider",min:0,max:3,step:.05},"recorder.mode":{type:"select",label:"Recording source",options:[["video_audio","Video + Audio"],["video","Video only"],["audio","Audio only"]]},"recorder.audio_only_variant":{type:"select",label:"Audio only mode",options:[["both","Processed + RAW"],["processed","Processed"],["raw","RAW"]]},"recorder.capture_source":{type:"select",label:"Output source",options:[["classic_v74","Classic output · recommended"],["clean_scene","Clean scene output · experimental (no UI)"],["native_xr","XR native video only · fallback"]]},"recorder.output_format":{type:"select",options:[["webm","WebM"],["mp4","MP4"]]},"recorder.audio_profile":{type:"select",options:[["podcast","Podcast"],["call","Call (Browser echo/noise filters)"]]},"recorder.hardware_encode":{type:"select",options:[["auto","Auto"],["on","On"],["off","Off (CPU)"]]},"recorder.width":{type:"slider",min:320,max:3840,step:2},"recorder.height":{type:"slider",min:240,max:2160,step:2},"recorder.fps":{type:"slider",min:15,max:60,step:1},"recorder.gate_threshold_db":{type:"slider",min:-80,max:-5,step:.5},"recorder.gate_hold_ms":{type:"slider",min:0,max:1e3,step:10},"recorder.gate_release_ms":{type:"slider",min:0,max:1e3,step:10},"recorder.video_bps":{type:"slider",min:5e5,max:2e7,step:1e5},"recorder.audio_bps":{type:"slider",min:32e3,max:32e4,step:8e3},"recorder.segment_minutes":{type:"select",options:[["0","Off"],["30","Every 30 min"],["60","Every 60 min"]]},"recorder.raw_audio_format":{type:"select",options:[["flac","FLAC (lossless)"],["wav","WAV (large)"]]},"recorder.filename":{type:"text"},"camera.optimized":{type:"toggle"},"camera.width":{type:"slider",min:160,max:1920,step:2},"camera.height":{type:"slider",min:120,max:1080,step:2},"camera.fps":{type:"slider",min:5,max:60,step:1}};function El(e){const t=[];for(const[r,n]of Object.entries(e||{})){if(Sl.has(r)||!n||typeof n!="object"||Array.isArray(n))continue;const i=xl[r]||{},a=[];for(const[s,o]of Object.entries(n)){const l=`${r}.${s}`;if(kl.has(l))continue;const c=$l[l]||{};if(c.hidden||o!==null&&typeof o=="object")continue;const d=c.type||(typeof o=="boolean"?"toggle":typeof o=="number"?"number":"text");a.push({type:d,path:l,label:c.label||rs(s),min:c.min,max:c.max,step:c.step,options:c.options})}a.length&&t.push({id:r,title:i.title||rs(r),icon:i.icon||"⚙",controls:a})}return t.sort((r,n)=>{const i=ts.indexOf(r.id),a=ts.indexOf(n.id);return(i<0?999:i)-(a<0?999:a)}),t}var Al=Se("<option> </option>"),Ml=Se("<select></select>"),Nl=Se("<select><option> </option><option> </option></select>"),Tl=Se('<input type="range"/> <span class="xra-val"> </span>',1),Ol=Se('<input type="checkbox"/>'),Pl=Se('<input type="color"/>'),Cl=Se('<input type="number"/>'),Rl=Se('<input type="text"/>'),Il=Se('<label class="xra-row"><span class="xra-row-label"> </span> <!></label>');function Ll(e,t){Gt(t,!0);const r=dt(()=>typeof t.control.options=="function"?t.control.options():t.control.options||[]),n=f=>f===!1?"off":"auto",i=f=>f==="off"?!1:null;var a=Il(),s=L(a),o=X(s,!0),l=O(s,2);{var c=f=>{var h=Ml();Kt(h,21,()=>g(r),La,(k,P)=>{var S=Al(),$=X(S,!0),E={};xe(F=>{Z($,F),E!==(E=g(P)[0])&&(S.value=(S.__value=E)??"")},[()=>ie(g(P)[1])]),N(k,S)});var b;pr(h),xe(k=>{b!==(b=k)&&(h.value=(h.__value=b)??"",zt(h,b))},[()=>Xe(t.control.path)]),J("change",h,k=>st(t.control.path,k.currentTarget.value)),N(f,h)},d=f=>{var h=Nl(),b=L(h),k=X(b,!0);b.value=b.__value="auto";var P=O(b),S=X(P,!0);P.value=P.__value="off";var $;pr(h),xe((E,F,j)=>{Z(k,E),Z(S,F),$!==($=j)&&(h.value=(h.__value=$)??"",zt(h,$))},[()=>ie("Auto (follow tracking)"),()=>ie("Off"),()=>n(Xe(t.control.path))]),J("change",h,E=>st(t.control.path,i(E.currentTarget.value))),N(f,h)},p=f=>{var h=Tl(),b=K(h),k=O(b,2),P=X(k,!0);xe((S,$)=>{Ee(b,"min",t.control.min),Ee(b,"max",t.control.max),Ee(b,"step",t.control.step),Pn(b,S),Z(P,$)},[()=>Xe(t.control.path,t.control.min),()=>Xe(t.control.path)]),J("input",b,S=>st(t.control.path,Number(S.currentTarget.value))),N(f,h)},m=f=>{var h=Ol();xe(b=>ul(h,b),[()=>!!Xe(t.control.path)]),J("change",h,b=>st(t.control.path,b.currentTarget.checked)),N(f,h)},_=f=>{var h=Pl();xe(b=>Pn(h,b),[()=>Xe(t.control.path)]),J("input",h,b=>st(t.control.path,b.currentTarget.value)),N(f,h)},v=f=>{var h=Cl();xe(b=>{Ee(h,"step",t.control.step||"any"),Pn(h,b)},[()=>Xe(t.control.path,0)]),J("input",h,b=>st(t.control.path,Number(b.currentTarget.value))),N(f,h)},x=f=>{var h=Rl();xe(b=>Pn(h,b),[()=>Xe(t.control.path,"")]),J("change",h,b=>st(t.control.path,b.currentTarget.value)),N(f,h)};Lt(l,f=>{t.control.type==="select"?f(c):t.control.type==="tristate"?f(d,1):t.control.type==="slider"?f(p,2):t.control.type==="toggle"?f(m,3):t.control.type==="color"?f(_,4):t.control.type==="number"?f(v,5):t.control.type==="text"&&f(x,6)})}xe(f=>Z(o,f),[()=>ie(t.control.label)]),N(e,a),Xt()}dr(["change","input"]),co();/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
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
 */const ns=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();var Bl=Uo("<svg><!><!></svg>");function ue(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]),n=se(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Gt(t,!1);let i=_t(t,"name",8,void 0),a=_t(t,"color",8,"currentColor"),s=_t(t,"size",8,24),o=_t(t,"strokeWidth",8,2),l=_t(t,"absoluteStrokeWidth",8,!1),c=_t(t,"iconNode",24,()=>[]);dl();var d=Bl();Ya(d,(_,v,x)=>({...zl,..._,...n,width:s(),height:s(),stroke:a(),"stroke-width":v,class:x}),[()=>Dl(n)?void 0:{"aria-hidden":"true"},()=>(ur(l()),ur(o()),ur(s()),qt(()=>l()?Number(o())*24/Number(s()):o())),()=>(ur(ns),ur(i()),ur(r),qt(()=>ns("lucide-icon","lucide",i()?`lucide-${i()}`:"",r.class)))]);var p=L(d);Kt(p,1,c,La,(_,v)=>{var x=dt(()=>Fi(g(v),2));let f=()=>g(x)[0],h=()=>g(x)[1];var b=re(),k=K(b);tl(k,f,!0,(P,S)=>{Ya(P,()=>({...h()}))}),N(_,b)});var m=O(p);oe(m,t,"default",{}),N(e,d),Xt()}function Vl(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];ue(e,ce({name:"camera"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=re(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Fl(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M10 5H3"}],["path",{d:"M12 19H3"}],["path",{d:"M14 3v4"}],["path",{d:"M16 17v4"}],["path",{d:"M21 12h-9"}],["path",{d:"M21 19h-5"}],["path",{d:"M21 5h-7"}],["path",{d:"M8 10v4"}],["path",{d:"M8 12H3"}]];ue(e,ce({name:"sliders-horizontal"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=re(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Hl(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"5",r:"1"}],["path",{d:"m9 20 3-6 3 6"}],["path",{d:"m6 8 6 2 6-2"}],["path",{d:"M12 10v4"}]];ue(e,ce({name:"person-standing"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=re(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Ul(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];ue(e,ce({name:"zap"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=re(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function jl(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]];ue(e,ce({name:"activity"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=re(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Wl(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];ue(e,ce({name:"shield"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=re(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Gl(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 19v3"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3"}]];ue(e,ce({name:"mic"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=re(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Xl(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]];ue(e,ce({name:"image"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=re(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Yl(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M10 18v-7"}],["path",{d:"M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"}],["path",{d:"M14 18v-7"}],["path",{d:"M18 18v-7"}],["path",{d:"M3 22h18"}],["path",{d:"M6 18v-7"}]];ue(e,ce({name:"landmark"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=re(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function ql(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];ue(e,ce({name:"user"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=re(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Kl(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];ue(e,ce({name:"globe"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=re(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Zl(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]];ue(e,ce({name:"video"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=re(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Ql(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];ue(e,ce({name:"sparkles"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=re(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Jl(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 20v-9"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97"}],["path",{d:"M22 13h-4"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97"}],["path",{d:"M6 13H2"}],["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13"}]];ue(e,ce({name:"bug"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=re(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function ec(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]];ue(e,ce({name:"monitor"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=re(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function tc(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"10",r:"8"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 22h10"}],["path",{d:"M12 22v-4"}]];ue(e,ce({name:"webcam"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=re(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function is(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}]];ue(e,ce({name:"circle"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=re(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function rc(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];ue(e,ce({name:"square"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=re(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function nc(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]];ue(e,ce({name:"eye"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=re(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function ic(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}],["path",{d:"m2 2 20 20"}]];ue(e,ce({name:"eye-off"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=re(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function ac(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];ue(e,ce({name:"folder-open"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=re(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function sc(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];ue(e,ce({name:"info"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=re(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function oc(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ue(e,ce({name:"x"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=re(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function lc(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];ue(e,ce({name:"settings"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=re(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function cc(e,t){const r=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ue(e,ce({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=re(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Ye(e,t){const r={Camera:Vl,SlidersHorizontal:Fl,PersonStanding:Hl,Zap:Ul,Activity:jl,Shield:Wl,Mic:Gl,Image:Xl,Landmark:Yl,User:ql,Globe:Kl,Video:Zl,Sparkles:Ql,Bug:Jl,Monitor:ec,Webcam:tc,Circle:is,Square:rc,Eye:nc,EyeOff:ic,FolderOpen:ac,Info:sc,X:oc,Settings:lc,RefreshCw:cc};let n=_t(t,"name",3,"Circle"),i=_t(t,"size",3,16),a=_t(t,"strokeWidth",3,2),s=_t(t,"class",3,"");const o=dt(()=>r[n()]??is);var l=re(),c=K(l);el(c,()=>g(o),(d,p)=>{p(d,{get size(){return i()},get"stroke-width"(){return a()},get class(){return s()}})}),N(e,l)}var uc=Se('<div class="xra-sec-body"></div>'),fc=Se('<details class="xra-sec"><summary><span class="xra-sec-title"><!> <span> </span></span> <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></summary> <!></details>');function dc(e,t){Gt(t,!0);const r="ui.sections_open";let n=G(Fe(qt(()=>{var f;return((f=Xe(r,{}))==null?void 0:f[t.section.id])??!1}))),i;function a(){M(n,!g(n)),st(`${r}.${t.section.id}`,g(n))}en(()=>{ee.focusNonce,!(ee.focusSection!==t.section.id||!ee.panelOpen)&&(M(n,!0),st(`${r}.${t.section.id}`,!0),requestAnimationFrame(()=>i==null?void 0:i.scrollIntoView({block:"nearest",behavior:"smooth"})))});var s=fc(),o=L(s),l=L(o),c=L(l);Ye(c,{get name(){return t.section.icon},size:15,class:"xra-sec-icon"});var d=O(c,2),p=X(d,!0),m=O(l,2);let _;var v=O(o,2);{var x=f=>{var h=uc();Kt(h,21,()=>t.section.controls,b=>b.path,(b,k)=>{var P=re(),S=K(P);{var $=F=>{Ll(F,{get control(){return g(k)}})},E=dt(()=>!g(k).when||g(k).when(Ge));Lt(S,F=>{g(E)&&F($)})}N(b,P)}),N(f,h)};Lt(v,f=>{g(n)&&f(x)})}Za(s,f=>i=f,()=>i),xe(f=>{s.open=g(n),Z(p,f),_=Le(m,0,"xra-sec-chevron",null,_,{open:g(n)})},[()=>ie(t.section.title)]),J("click",o,f=>{f.preventDefault(),a()}),N(e,s),Xt()}dr(["click"]);var un=Se('<option class="svelte-x8svx4"> </option>'),vc=Se('<div class="warn svelte-x8svx4"> </div>'),pc=Se('<div class="xra-startup svelte-x8svx4"><div class="card svelte-x8svx4"><div class="head svelte-x8svx4"><div class="svelte-x8svx4"><h2 class="svelte-x8svx4">XR Animator</h2> <div class="sub svelte-x8svx4"> </div></div></div> <div class="grid svelte-x8svx4"><label class="field svelte-x8svx4"><div class="sub svelte-x8svx4">Language</div> <select class="svelte-x8svx4"></select></label> <label class="field svelte-x8svx4"><div class="sub svelte-x8svx4">Master preset</div> <select class="svelte-x8svx4"></select></label></div> <div class="status svelte-x8svx4"> </div> <section class="camera svelte-x8svx4"><div class="camera-head svelte-x8svx4"><div class="camera-title svelte-x8svx4"> </div> <div> </div></div> <div class="camera-row svelte-x8svx4"><select class="svelte-x8svx4"><!></select> <button type="button" class="action svelte-x8svx4"><!></button></div> <!></section> <div class="sub bg svelte-x8svx4"> </div> <div class="avatar svelte-x8svx4"><div class="sub svelte-x8svx4"> </div> <button type="button" class="action svelte-x8svx4"> </button></div> <div class="foot svelte-x8svx4"><button type="button" class="action primary confirm svelte-x8svx4"> </button></div></div></div>');function hc(e,t){Gt(t,!0);const r=()=>window.XRA,n=y=>ie(y),i=["AUTO","ECO","LOW","BALANCED","QUALITY","HIGH","MAX","CUSTOM"];function a(){var y,w,A;try{(A=(w=(y=r())==null?void 0:y.profileService)==null?void 0:w.save)==null||A.call(w,0)}catch{}}const s=(()=>{var w,A;const y=(A=(w=r())==null?void 0:w.i18n)==null?void 0:A.LANGUAGES;return Array.isArray(y)&&y.length?y:[["auto","Auto / System"],["en","English"],["it","Italiano"]]})();let o=G("auto"),l=G("CUSTOM"),c=G(""),d=G("default"),p=G(Fe([])),m=G(!1),_=G(""),v=G(!1),x=G(""),f=G(""),h=G("Loading avatar…"),b=G(!0),k=G(!1),P=G(!1),S=G(!1),$=G(!1),E=0,F=[];async function j(y){const w=r();if(y=String(y||"CUSTOM").toUpperCase(),y==="CUSTOM"){w.config.performance.master_preset="CUSTOM",a(),M(c,"CUSTOM · ready");return}if(y==="AUTO"){M(c,"Benchmarking…");const A=await w.performance.benchmarkHardwareOnly();M(c,`AUTO → ${A.preset} (${A.fps.toFixed(1)} fps)`),await w.performance.applyPresetSafe(A.preset),w.config.performance.master_preset="AUTO",w.config.performance.auto_last_result=A,a();return}M(c,`${y}: applying…`),await w.performance.applyPresetSafe(y),M(c,`${y} · applied`)}function te(y=""){var D,H,ne;const w=(D=r())==null?void 0:D.nativeBridge,A=((H=w==null?void 0:w.activeCamera)==null?void 0:H.call(w))||{},T=!!((ne=w==null?void 0:w.cameraRunning)!=null&&ne.call(w));M(v,T),M(x,y||(T?`${n("ON")} · ${A.label||n("Default camera")}`:n("OFF")),!0)}async function Ae(y=!1){var A,T,D;const w=(A=r())==null?void 0:A.nativeBridge;if(w!=null&&w.enumerateCameras){M(S,!0);try{const H=await w.enumerateCameras({requestPermission:y}),ne=w.activeCamera()||{};M(p,(H||[]).map(Ce=>({deviceId:Ce.deviceId,label:Ce.label})),!0);const ve=ne.deviceId||((T=Ge.devices)==null?void 0:T.camera_device_id)||"";M(_,g(p).some(Ce=>Ce.deviceId===ve)?ve:((D=g(p)[0])==null?void 0:D.deviceId)||"",!0),M(m,!0),te()}catch{M(m,!0),te(n("Camera unavailable"))}finally{M(S,!1)}}}async function je(y){var D,H;const w=(D=r())==null?void 0:D.nativeBridge,A=((H=y==null?void 0:y.currentTarget)==null?void 0:H.value)??g(_),T=g(p).find(ne=>ne.deviceId===A);if(T){M(S,!0);try{const ne={deviceId:T.deviceId,label:T.label};w.cameraRunning()?await w.switchCamera(ne):await w.setCameraPreference(ne),te()}catch(ne){te("Error · "+ne.message)}finally{M(S,!1)}}}function Tt(){var A,T,D,H,ne,ve,Ce,Te;const y=(D=(T=(A=r())==null?void 0:A.xraBackend)==null?void 0:T.snapshot)==null?void 0:D.call(T),w=(y==null?void 0:y.capture)||((Te=(Ce=(ve=(ne=(H=window.SA_bridge)==null?void 0:H.backend)==null?void 0:ne.status)==null?void 0:ve.call(ne))==null?void 0:Ce.backend)==null?void 0:Te.capture);if(w!=null&&w.camera_busy){const Ot=(w.busy_processes&&w.busy_processes.length?w.busy_processes:w.busy_process?[w.busy_process]:[]).filter(br=>!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(String(br).trim()));if(Ot.length)return{busy:!0,proc:Ot.join(", ")}}if(w!=null&&w.last_error&&w.last_error.includes("Webcam occupata")){const pe=w.last_error.match(/Webcam occupata da:\s*([^.]+)/i),Ot=pe?pe[1].trim():"";if(!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(Ot))return{busy:!0,proc:w.last_error}}return{busy:!1,proc:""}}function Ft(){var y,w,A,T,D,H,ne,ve,Ce;if(typeof((w=(y=r())==null?void 0:y.nativeBridge)==null?void 0:w.isAvatarReady)=="function")return r().nativeBridge.isAvatarReady();if((A=window.MMD_SA)!=null&&A.MMD_started){const Te=(H=(D=(T=window.MMD_SA)==null?void 0:T.THREEX)==null?void 0:D.get_model)==null?void 0:H.call(D,0);let pe=Te;if((Te==null?void 0:Te.type)==="MMD_dummy")try{pe=Te.model||null}catch{pe=null}const Ot=((ne=pe==null?void 0:pe.model)==null?void 0:ne.scene)||(pe==null?void 0:pe.mesh)||(pe==null?void 0:pe.scene)||null;if(pe&&!(Te!=null&&Te.loading)&&!pe.loading&&!((Ce=(ve=window.MMD_SA)==null?void 0:ve.THREEX)!=null&&Ce._loading_model)&&Ot)return Ot.visible!==!1}return!1}function q(){var w,A,T;const y=(w=r())==null?void 0:w.xraBackend;return!y||!y.active?!0:!!((T=(A=y.snapshot)==null?void 0:A.call(y))!=null&&T.ready)}function he(){if(g($)||!ee.startupOpen)return;const y=Tt();M(f,y.busy?`Webcam in use by another application (${y.proc}). Close it to start tracking.`:"",!0),Ft()?q()?y.busy?(M(b,!0),M(h,n("Camera busy…"),!0)):g(k)?M(b,!0):(M(b,!1),M(h,"START")):(M(b,!0),M(h,n("Connecting to backend…"),!0)):(M(b,!0),M(h,n("Loading avatar…"),!0))}async function me(y){var A,T,D;const w=((A=y==null?void 0:y.currentTarget)==null?void 0:A.value)??g(l);M(l,w,!0),M(P,!0);try{await j(w),r().events.emit("state",{path:"performance.master_preset",value:r().config.performance.master_preset}),wl()}catch(H){console.error("[XRA START]",H),M(c,"Preset error: "+H.message)}finally{M(P,!1),(D=(T=r().ui)==null?void 0:T.refresh)==null||D.call(T)}}function Be(y){var w,A,T,D;M(o,((w=y==null?void 0:y.currentTarget)==null?void 0:w.value)??g(o),!0),(D=(T=(A=r())==null?void 0:A.i18n)==null?void 0:T.setLanguage)==null||D.call(T,g(o))}async function ye(){var y,w;try{await((w=(y=r().nativeBridge)==null?void 0:y.openVrmPicker)==null?void 0:w.call(y))}catch(A){r().toast("VRM loader: "+A.message,"error",4500)}}async function Pe(y=!1){var A,T,D,H,ne,ve,Ce,Te;if(g($)||g(b))return;M($,!0),E&&(clearInterval(E),E=0),M(k,!0),M(h,"Starting…");const w=r();if(a(),ee.startupOpen=!1,(T=(A=w.ui)==null?void 0:A.refresh)==null||T.call(A),y)try{typeof w.whenNativeReady=="function"&&await w.whenNativeReady(15e3),(D=w.xraBackend)!=null&&D.waitUntilReady&&await w.xraBackend.waitUntilReady(6e3).catch(()=>{}),await((ne=(H=w.nativeBridge)==null?void 0:H.startNativeStreamer)==null?void 0:ne.call(H))}catch(pe){(Ce=(ve=globalThis.XRA_CAMERA_OWNERSHIP)==null?void 0:ve.isOwnershipError)!=null&&Ce.call(ve,pe)||(console.warn("[XRA START]","Auto-starting camera on START failed",pe),(Te=w.toast)==null||Te.call(w,"Starting camera: "+pe.message,"warn",5e3))}}$i(()=>{var w,A,T,D,H,ne,ve,Ce,Te,pe,Ot,br,gs,ms,ys,ws,bs,Fn,xs,Ss,ks,$s;const y=r();M(c,n("Ready."),!0),M(o,((A=(w=y==null?void 0:y.config)==null?void 0:w.ui)==null?void 0:A.language)||"auto",!0),M(l,((D=(T=y==null?void 0:y.config)==null?void 0:T.performance)==null?void 0:D.master_preset)==="MINIMAL"?"ECO":((ne=(H=y==null?void 0:y.config)==null?void 0:H.performance)==null?void 0:ne.master_preset)||"CUSTOM",!0),M(d,((Ce=(ve=y==null?void 0:y.config)==null?void 0:ve.background)==null?void 0:Ce.path)||((pe=(Te=y==null?void 0:y.config)==null?void 0:Te.background)==null?void 0:pe.color)||"default",!0);try{const Pt=(gs=(br=(Ot=window.SA_bridge)==null?void 0:Ot.backend)==null?void 0:br.status)==null?void 0:gs.call(br),Hn=(ys=(ms=window.System)==null?void 0:ms._browser)==null?void 0:ys.camera;(bs=(ws=Pt==null?void 0:Pt.backend)==null?void 0:ws.capture)!=null&&bs.running&&!(Hn!=null&&Hn.running)&&((xs=(Fn=window.SA_bridge.backend)==null?void 0:Fn.stop)==null||xs.call(Fn).catch(()=>{}))}catch{}te(),setTimeout(()=>Ae(!1),100),E=setInterval(he,300),window.addEventListener("MMDStarted",he),(Ss=y.xraBackend)!=null&&Ss.onStatus&&y.xraBackend.onStatus(he),he(),($s=(ks=y.whenNativeReady)==null?void 0:ks.call(y))==null||$s.then(()=>{ee.startupOpen&&Ae(!1)});for(const Pt of["camera-started","camera-stopped","camera-switched"])F.push(y.events.on(Pt,()=>{ee.startupOpen&&Ae(!1)}));for(const Pt of["avatar-loading","avatar-changed","avatar-ready"])F.push(y.events.on(Pt,()=>he()));return()=>{E&&clearInterval(E),window.removeEventListener("MMDStarted",he);for(const Pt of F)try{Pt()}catch{}F=[]}});var yt=pc(),wt=L(yt),er=L(wt),Vr=L(er),wr=O(L(Vr),2),Fr=X(wr,!0),C=O(er,2),W=L(C),Q=O(L(W),2);Kt(Q,21,()=>s,([y,w])=>y,(y,w)=>{var A=dt(()=>Fi(g(w),2));let T=()=>g(A)[0],D=()=>g(A)[1];var H=un(),ne=X(H,!0),ve={};xe(()=>{Z(ne,D()),ve!==(ve=T())&&(H.value=(H.__value=ve)??"")}),N(y,H)});var _e;pr(Q);var ct=O(W,2),Ve=O(L(ct),2);Kt(Ve,20,()=>i,y=>y,(y,w)=>{var A=un(),T=X(A,!0),D={};xe(()=>{Z(T,w),D!==(D=w)&&(A.value=(A.__value=D)??"")}),N(y,A)});var Je;pr(Ve);var Ht=O(C,2),tr=X(Ht,!0),Bn=O(Ht,2),cs=L(Bn),us=L(cs),$c=X(us,!0),fs=O(us,2);let ds;var Ec=X(fs,!0),vs=O(cs,2),rr=L(vs),Ac=L(rr);{var Mc=y=>{var w=un(),A=X(w,!0);w.value=w.__value="",xe(T=>Z(A,T),[()=>n("Loading cameras…")]),N(y,w)},Nc=y=>{var w=un(),A=X(w,!0);w.value=w.__value="",xe(T=>Z(A,T),[()=>n("No cameras found")]),N(y,w)},Tc=y=>{var w=re(),A=K(w);Kt(A,17,()=>g(p),T=>T.deviceId,(T,D)=>{var H=un(),ne=X(H,!0),ve={};xe(()=>{Z(ne,g(D).label),ve!==(ve=g(D).deviceId)&&(H.value=(H.__value=ve)??"")}),N(T,H)}),N(y,w)};Lt(Ac,y=>{g(m)?g(p).length?y(Tc,-1):y(Nc,1):y(Mc)})}var Vn;pr(rr);var _n=O(rr,2),Oc=L(_n);Ye(Oc,{name:"RefreshCw",size:14});var Pc=O(vs,2);{var Cc=y=>{var w=vc(),A=X(w,!0);xe(()=>Z(A,g(f))),N(y,w)};Lt(Pc,y=>{g(f)&&y(Cc)})}var ps=O(Bn,2),Rc=X(ps),hs=O(ps,2),_s=L(hs),Ic=X(_s,!0),Ai=O(_s,2),Lc=X(Ai,!0),zc=O(hs,2),Mi=L(zc),Dc=X(Mi,!0);xe((y,w,A,T,D,H)=>{Z(Fr,y),Q.disabled=g($),_e!==(_e=g(o))&&(Q.value=(Q.__value=_e)??"",zt(Q,_e)),Ve.disabled=g(P)||g($),Je!==(Je=g(l))&&(Ve.value=(Ve.__value=Je)??"",zt(Ve,Je)),Z(tr,g(c)),Z($c,w),ds=Le(fs,1,"camera-state svelte-x8svx4",null,ds,{on:g(v)}),Z(Ec,g(x)),rr.disabled=g(S),Vn!==(Vn=g(_))&&(rr.value=(rr.__value=Vn)??"",zt(rr,Vn)),Ee(_n,"title",A),Ee(_n,"aria-label",T),_n.disabled=g(S),Z(Rc,`Background: ${g(d)??""}`),Z(Ic,D),Ai.disabled=g($),Z(Lc,H),Mi.disabled=g(b)||g(k),Z(Dc,g(h))},[()=>n("Quick setup · changes apply immediately."),()=>n("Webcam"),()=>n("Refresh cameras"),()=>n("Refresh cameras"),()=>n("Avatar: the last VRM you chose is copied into avatars/ and restored at startup."),()=>n("Load / change VRM…")]),J("change",Q,Be),J("change",Ve,me),J("change",rr,je),J("click",_n,()=>Ae(!0)),J("click",Ai,ye),J("click",Mi,()=>Pe(!0)),N(e,yt),Xt()}dr(["change","click"]);var _c=Se('<button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button>'),gc=Se('<nav class="xra-dock group fixed left-2 top-1/2 z-[99990] flex w-[46px] max-h-[92vh] -translate-y-1/2 flex-col gap-0.5 overflow-hidden rounded-xl border border-white/10 bg-[var(--xra-ui-bg)] p-1.5 font-sans text-[12.5px] leading-snug text-[var(--xra-ui-fg)] shadow-[0_12px_40px_rgba(0,0,0,.55)] transition-[width] duration-200 hover:w-[232px]"><!> <div class="my-1 h-px bg-white/10"></div> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button></nav>');function mc(e,t){Gt(t,!0);const r=()=>window.XRA;let n=G(!1),i=G(!1),a=G(!1),s=0;function o(){var W,Q,_e,ct,Ve,Je,Ht;const C=r();if(C){try{M(n,!!((Q=(W=C.nativeBridge)==null?void 0:W.cameraRunning)!=null&&Q.call(W)))}catch{}try{M(i,!!((Ve=(ct=(_e=C.recorder)==null?void 0:_e.status)==null?void 0:ct.call(_e))!=null&&Ve.active))}catch{}try{M(a,!!((Ht=(Je=C.nativeBridge)==null?void 0:Je.getPreviewVisibility)!=null&&Ht.call(Je,"video")))}catch{}}}async function l(){var W,Q;const C=r().nativeBridge;try{C.cameraRunning()?await C.stopNativeStreamer():await C.startNativeStreamer()}catch(_e){(Q=(W=r()).toast)==null||Q.call(W,"Tracking: "+_e.message,"warn",4e3)}finally{setTimeout(o,250)}}async function c(){var W,Q,_e;const C=r().recorder;try{(W=C.status)!=null&&W.call(C).active?await C.stop():await C.start()}catch(ct){(_e=(Q=r()).toast)==null||_e.call(Q,"Recording: "+ct.message,"warn",4e3)}finally{setTimeout(o,250)}}function d(){var W,Q;const C=!g(a);try{(Q=(W=r().nativeBridge)==null?void 0:W.setPreviewVisibility)==null||Q.call(W,"video",C)}catch{}M(a,C)}async function p(){var C,W,Q,_e;try{await((W=(C=r().nativeBridge)==null?void 0:C.openVrmPicker)==null?void 0:W.call(C))}catch(ct){(_e=(Q=r()).toast)==null||_e.call(Q,"VRM loader: "+ct.message,"error",4500)}}function m(){var C,W;try{(W=(C=r().nativeBridge)==null?void 0:C.showAbout)==null||W.call(C)}catch{}}const _=[{id:"ui",icon:"Monitor",label:"UI Settings"},{id:"camera",icon:"Camera",label:"Webcam settings"},{id:"avatar",icon:"User",label:"Model settings"},{id:"second_avatar",icon:"Globe",label:"Studio link"},{id:"stage",icon:"Landmark",label:"Environment + Camera"},{id:"background",icon:"Image",label:"Background"},{id:"lip",icon:"Mic",label:"Audio"}],v="hover:bg-white/10",x="flex-1 overflow-hidden opacity-0 transition-opacity duration-150 group-hover:opacity-100";$i(()=>(o(),s=setInterval(o,1e3),()=>clearInterval(s)));var f=gc(),h=L(f);Kt(h,17,()=>_,C=>C.id,(C,W)=>{var Q=_c();Le(Q,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var _e=L(Q),ct=L(_e);Ye(ct,{get name(){return g(W).icon},size:16});var Ve=O(_e,2);Le(Ve,1,vr(x));var Je=X(Ve,!0);xe((Ht,tr)=>{Ee(Q,"title",Ht),Z(Je,tr)},[()=>ie(g(W).label),()=>ie(g(W).label)]),J("click",Q,()=>ml(g(W).id)),N(C,Q)});var b=O(h,4),k=L(b),P=L(k);{let C=dt(()=>g(n)?"text-emerald-400":"");Ye(P,{name:"Webcam",size:16,get class(){return g(C)}})}var S=O(k,2);Le(S,1,vr(x));var $=X(S,!0),E=O(b,2),F=L(E),j=L(F);{let C=dt(()=>g(i)?"Square":"Circle"),W=dt(()=>g(i)?"text-red-400":"");Ye(j,{get name(){return g(C)},size:16,get class(){return g(W)}})}var te=O(F,2);Le(te,1,vr(x));var Ae=X(te,!0),je=O(E,2),Tt=L(je),Ft=L(Tt);{let C=dt(()=>g(a)?"Eye":"EyeOff");Ye(Ft,{get name(){return g(C)},size:16})}var q=O(Tt,2);Le(q,1,vr(x));var he=X(q,!0),me=O(je,2);Le(me,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var Be=L(me),ye=L(Be);Ye(ye,{name:"FolderOpen",size:16});var Pe=O(Be,2);Le(Pe,1,vr(x));var yt=X(Pe,!0),wt=O(me,2);Le(wt,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var er=L(wt),Vr=L(er);Ye(Vr,{name:"Info",size:16});var wr=O(er,2);Le(wr,1,vr(x));var Fr=X(wr,!0);xe((C,W,Q,_e,ct,Ve,Je,Ht,tr,Bn)=>{Le(b,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${g(n)?"bg-emerald-500/20":v}`),Ee(b,"title",C),Z($,W),Le(E,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${g(i)?"bg-red-500/30 text-red-200":v}`),Ee(E,"title",Q),Z(Ae,_e),Le(je,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${g(a)?"bg-emerald-500/20":v}`),Ee(je,"title",ct),Z(he,Ve),Ee(me,"title",Je),Z(yt,Ht),Ee(wt,"title",tr),Z(Fr,Bn)},[()=>ie("Tracking"),()=>g(n)?ie("Tracking on"):ie("Tracking off"),()=>ie("Record"),()=>g(i)?ie("Stop recording"):ie("Record"),()=>ie("Preview"),()=>g(a)?ie("Hide preview"):ie("Show preview"),()=>ie("Load / change VRM…"),()=>ie("Load / change VRM…"),()=>ie("About"),()=>ie("About")]),J("click",b,l),J("click",E,c),J("click",je,d),J("click",me,p),J("click",wt,m),N(e,f),Xt()}dr(["click"]);var yc=Se('<div class="xra-mocap-window fixed z-[99991] flex flex-col overflow-hidden rounded-xl border border-white/15 bg-[var(--xra-ui-bg)] text-[var(--xra-ui-fg)] shadow-[0_16px_48px_rgba(0,0,0,.6)] font-sans"><header class="flex shrink-0 cursor-move touch-none select-none items-center gap-2 px-2 py-1.5"><!> <span class="flex-1 text-[12px] font-semibold"> </span> <select class="rounded-md border border-white/15 bg-[#101214] px-1.5 py-0.5 text-[11px] text-[var(--xra-ui-fg)]"><option> </option><option> </option><option> </option><option> </option></select> <button type="button" class="rounded-md border border-white/15 bg-white/5 px-1.5 py-0.5 cursor-pointer text-[var(--xra-ui-fg)]"><!></button></header> <div class="relative min-h-0 flex-1 overflow-hidden bg-black/60"><div class="absolute bottom-0 right-0 z-20 h-5 w-5 cursor-nwse-resize touch-none"></div></div></div>');function wc(e,t){Gt(t,!0);const r=()=>window.XRA,n=Xe("ui.mocap_window",{})||{};let i=G(Fe(Number.isFinite(n.x)?n.x:48)),a=G(Fe(Number.isFinite(n.y)?n.y:96)),s=G(Fe(Number.isFinite(n.w)?n.w:360)),o=G(Fe(Number.isFinite(n.h)?n.h:270)),l;function c(){st("ui.mocap_window",{x:Math.round(g(i)),y:Math.round(g(a)),w:Math.round(g(s)),h:Math.round(g(o))})}function d(){var q,he,me;try{(me=(he=(q=r())==null?void 0:q.nativeBridge)==null?void 0:he.updateMocapWindow)==null||me.call(he)}catch{}}function p(q,he){q.preventDefault();const me=q.clientX,Be=q.clientY,ye=g(i),Pe=g(a),yt=g(s),wt=g(o),er=wr=>{const Fr=wr.clientX-me,C=wr.clientY-Be;he==="move"?(M(i,Math.max(0,Math.min(window.innerWidth-80,ye+Fr)),!0),M(a,Math.max(0,Math.min(window.innerHeight-30,Pe+C)),!0)):(M(s,Math.max(200,Math.min(window.innerWidth-g(i),yt+Fr)),!0),M(o,Math.max(130,Math.min(window.innerHeight-g(a),wt+C)),!0))},Vr=()=>{window.removeEventListener("pointermove",er),window.removeEventListener("pointerup",Vr),c()};window.addEventListener("pointermove",er),window.addEventListener("pointerup",Vr)}en(()=>{g(i),g(a),g(s),g(o),d()}),$i(()=>{var he,me,Be;try{(Be=(me=(he=r())==null?void 0:he.nativeBridge)==null?void 0:me.attachMocapWindow)==null||Be.call(me,l)}catch{}const q=()=>d();return window.addEventListener("resize",q),()=>{var ye,Pe,yt;window.removeEventListener("resize",q);try{(yt=(Pe=(ye=r())==null?void 0:ye.nativeBridge)==null?void 0:Pe.detachMocapWindow)==null||yt.call(Pe)}catch{}}});var m=yc(),_=L(m),v=L(_);Ye(v,{name:"Activity",size:14});var x=O(v,2),f=X(x,!0),h=O(x,2),b=L(h),k=X(b,!0);b.value=b.__value="both";var P=O(b),S=X(P,!0);P.value=P.__value="wireframe";var $=O(P),E=X($,!0);$.value=$.__value="video";var F=O($),j=X(F,!0);F.value=F.__value="off";var te;pr(h);var Ae=O(h,2),je=L(Ae);Ye(je,{name:"X",size:13});var Tt=O(_,2),Ft=X(Tt);Za(Tt,q=>l=q,()=>l),xe((q,he,me,Be,ye,Pe,yt,wt)=>{Fa(m,`left:${g(i)??""}px; top:${g(a)??""}px; width:${g(s)??""}px; height:${g(o)??""}px;`),Z(f,q),Z(k,he),Z(S,me),Z(E,Be),Z(j,ye),te!==(te=Pe)&&(h.value=(h.__value=te)??"",zt(h,te)),Ee(Ae,"title",yt),Ee(Ft,"title",wt)},[()=>ie("Mocap"),()=>ie("Webcam + skeleton"),()=>ie("Skeleton only"),()=>ie("Webcam only"),()=>ie("Off"),()=>Xe("ui.mocap_view","off"),()=>ie("Close"),()=>ie("Resize")]),J("pointerdown",_,q=>p(q,"move")),J("change",h,q=>st("ui.mocap_view",q.currentTarget.value)),J("pointerdown",h,q=>q.stopPropagation()),J("click",Ae,()=>st("ui.mocap_view","off")),J("pointerdown",Ae,q=>q.stopPropagation()),J("pointerdown",Ft,q=>{q.stopPropagation(),p(q,"resize")}),N(e,m),Xt()}dr(["pointerdown","change","click"]);var bc=Se('<aside class="xra-panel"><header class="xra-panel-head"><strong>XR Animator</strong> <span class="xra-spacer"></span> <button><!></button> <button title="Close panel"><!></button></header> <div class="xra-panel-body"></div></aside>'),xc=Se('<button class="xra-panel-launcher"><!></button>'),Sc=Se("<!> <!> <!> <!>",1);function kc(e,t){Gt(t,!0),bl();const r=dt(()=>El(Ge));var n=Sc(),i=K(n);{var a=v=>{hc(v,{})};Lt(i,v=>{ee.ready&&ee.startupOpen&&v(a)})}var s=O(i,2);{var o=v=>{mc(v,{})};Lt(s,v=>{ee.ready&&!ee.startupOpen&&v(o)})}var l=O(s,2);{var c=v=>{wc(v,{})},d=dt(()=>ee.ready&&!ee.startupOpen&&Xe("ui.mocap_view","off")!=="off");Lt(l,v=>{g(d)&&v(c)})}var p=O(l,2);{var m=v=>{var $,E,F;var x=bc(),f=L(x),h=O(L(f),4);Ee(h,"title",((F=(E=($=window.XRA)==null?void 0:$.i18n)==null?void 0:E.t)==null?void 0:F.call(E,"Clean screen mode (Press Esc to restore)"))||"Clean screen (Esc)");var b=L(h);Ye(b,{name:"EyeOff",size:15});var k=O(h,2),P=L(k);Ye(P,{name:"X",size:15});var S=O(f,2);Kt(S,21,()=>g(r),j=>j.id,(j,te)=>{dc(j,{get section(){return g(te)}})}),J("click",h,function(...j){In==null||In.apply(this,j)}),J("click",k,()=>ee.panelOpen=!1),N(v,x)},_=v=>{var x=xc(),f=L(x);Ye(f,{name:"Settings",size:16}),J("click",x,()=>{ee.panelOpen=!0,es()}),N(v,x)};Lt(p,v=>{ee.ready&&!ee.startupOpen&&ee.panelOpen?v(m):ee.ready&&!ee.startupOpen&&v(_,1)})}N(e,n),Xt()}dr(["click"]),window.XRA_SVELTE_UI=!0;function as(){let e=document.getElementById("XRA_SVELTE");e||(e=document.createElement("div"),e.id="XRA_SVELTE",document.body.appendChild(e)),Yo(kc,{target:e})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",as):as()})();

})();
