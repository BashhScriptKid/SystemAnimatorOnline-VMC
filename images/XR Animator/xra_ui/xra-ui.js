(function(){
var Lc=Object.defineProperty;var $s=ae=>{throw TypeError(ae)};var zc=(ae,Z,ge)=>Z in ae?Lc(ae,Z,{enumerable:!0,configurable:!0,writable:!0,value:ge}):ae[Z]=ge;var We=(ae,Z,ge)=>zc(ae,typeof Z!="symbol"?Z+"":Z,ge),Mi=(ae,Z,ge)=>Z.has(ae)||$s("Cannot "+ge);var f=(ae,Z,ge)=>(Mi(ae,Z,"read from private field"),ge?ge.call(ae):Z.get(ae)),R=(ae,Z,ge)=>Z.has(ae)?$s("Cannot add the same private member more than once"):Z instanceof WeakSet?Z.add(ae):Z.set(ae,ge),P=(ae,Z,ge,Gt)=>(Mi(ae,Z,"write to private field"),Gt?Gt.call(ae,ge):Z.set(ae,ge),ge),U=(ae,Z,ge)=>(Mi(ae,Z,"access private method"),ge);(function(){"use strict";var is,Ar,Ut,ar,Mr,Nr,Tr,Nt,Or,De,an,Tt,lt,yt,Pr,sr,j,Ni,Ti,dn,Oi,ks,Es,Lr,Dc,vn,as,Ze,Si,Qe,or,Oe,Be,Pe,Ve,wt,lr,Ht,Cr,sn,on,Ot,Cn,ee,Bc,Vc,Pi,Fc,Ci,pn,Fn,Ri,Ii,ct,bt,Fe,cr,ln,cn,Rn,ss;var Z=Array.isArray,ge=Array.prototype.indexOf,Gt=Array.prototype.includes,hn=Array.from,Li=Object.defineProperty,Ct=Object.getOwnPropertyDescriptor,zi=Object.getOwnPropertyDescriptors,As=Object.prototype,Ms=Array.prototype,Un=Object.getPrototypeOf,Di=Object.isExtensible;function zr(e){return typeof e=="function"}const Ns=()=>{};function Ts(e){return e()}function Hn(e){for(var t=0;t<e.length;t++)e[t]()}function Bi(){var e,t,r=new Promise((n,i)=>{e=n,t=i});return{promise:r,resolve:e,reject:t}}function Vi(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const ke=2,hr=4,Dr=8,jn=1<<24,tt=16,Ge=32,kt=64,Wn=128,Gn=256,rt=512,me=1024,he=2048,Xe=4096,Me=8192,Ne=16384,_r=32768,_n=1<<25,Rt=65536,gn=1<<17,Os=1<<18,gr=1<<19,Fi=1<<20,ut=1<<25,mn=1<<21,mr=1<<22,It=1<<23,dt=Symbol("$state"),Ui=Symbol("component"),Hi=Symbol("legacy props"),Ps=Symbol(""),yn=Symbol("attributes"),Xn=Symbol("class"),Yn=Symbol("style"),Br=Symbol("text"),Vr=new class extends Error{constructor(){super(...arguments);We(this,"name","StaleReactionError");We(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},wn=!!((is=globalThis.document)!=null&&is.contentType)&&globalThis.document.contentType.includes("xml"),Cs=1,Rs=2,ji=4,Is=8,Ls=16,zs=1,Ds=2,Wi=4,Bs=8,Vs=16,Fs=1,Us=2,_e=Symbol("uninitialized"),Gi="http://www.w3.org/1999/xhtml",Hs="http://www.w3.org/2000/svg",js="@attach";function Ws(){console.warn("https://svelte.dev/e/derived_inert")}function Gs(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Xs(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Xi(e){return e===this.v}function Ys(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Yi(e){return!Ys(e,this.v)}function qs(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Ks(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Zs(e,t,r){throw new Error("https://svelte.dev/e/each_key_duplicate")}function Qs(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Js(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function eo(e){throw new Error("https://svelte.dev/e/effect_orphan")}function to(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ro(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function no(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function io(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ao(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function so(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let yr=!1,Uc=!1;function oo(){yr=!0}let se=null;function wr(e){se=e}function Xt(e,t=!1,r){se={p:se,i:!1,c:null,e:null,s:e,x:null,r:V,l:yr&&!t?{s:null,u:null,$:[]}:null}}function Yt(e){var t=se,r=t.e;if(r!==null){t.e=null;for(var n of r)_a(n)}return t.i=!0,se=t.p,qn(e)}function qn(e={}){return Li(e,Ui,{value:!0}),e}function Fr(){return!yr||se!==null&&se.l===null}let br=[];function lo(){var e=br;br=[],Hn(e)}function vt(e){if(br.length===0){var t=br;queueMicrotask(()=>{t===br&&lo()})}br.push(e)}const co=-7169;function pe(e,t){e.f=e.f&co|t}function Kn(e){(e.f&rt)!==0||e.deps===null?pe(e,me):pe(e,Xe)}function qi(e,t,r){(e.f&he)!==0?t.add(e):(e.f&Xe)!==0&&r.add(e),pe(e,me)}function fo(e,t){if(t){const r=document.body;e.autofocus=!0,vt(()=>{document.activeElement===r&&e.focus()})}}function Ur(e){var t=B,r=V;Ye(null),qe(null);try{return e()}finally{Ye(t),qe(r)}}function Ki(e,t,r,n){const i=Fr()?xr:Zn;var a=e.filter(v=>!v.settled),s=t.map(i);if(r.length===0&&a.length===0){n(s);return}var o=V,l=uo(),c=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(v=>v.promise)):null;function p(v){if((o.f&Ne)===0){l();try{n([...s,...v])}catch(u){gt(u,o)}bn()}}var d=Zi();if(r.length===0){c.then(()=>p([])).finally(d);return}function g(){Promise.all(r.map(v=>vo(v))).then(p).catch(v=>gt(v,o)).finally(d)}c?c.then(()=>{l(),g(),bn()}):g()}function uo(){var e=V,t=B,r=se,n=O;return function(a=!0){qe(e),Ye(t),wr(r),a&&(e.f&Ne)===0&&(n==null||n.activate(),n==null||n.apply())}}function bn(e=!0){qe(null),Ye(null),wr(null),e&&(O==null||O.deactivate())}function Zi(){var e=V,t=e.b,r=O,n=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,r),r.increment(n,e),()=>{t==null||t.update_pending_count(-1,r),r.decrement(n,e)}}function xr(e){var t=ke|he;return V!==null&&(V.f|=gr),{ctx:se,deps:null,effects:null,equals:Xi,f:t,fn:e,reactions:null,rv:0,v:_e,wv:0,parent:V,ac:null}}const Hr=Symbol("obsolete");function vo(e,t,r){let n=V;n===null&&Ks();var i=void 0,a=Lt(_e),s=!B,o=new Set;return Eo(()=>{var v,u;var l=V,c=Bi();i=c.promise;try{Promise.resolve(e()).then(c.resolve,_=>{_!==Vr&&c.reject(_)}).finally(bn)}catch(_){c.reject(_),bn()}var p=O;if(s){if((l.f&_r)!==0)var d=Zi();if((v=n.b)!=null&&v.is_rendered())(u=p.async_deriveds.get(l))==null||u.reject(Hr);else for(const _ of o.values())_.reject(Hr);o.add(c),p.async_deriveds.set(l,c)}const g=(_,h=void 0)=>{d==null||d(),o.delete(c),h!==Hr&&(p.activate(),h?(a.f|=It,$r(a,h)):((a.f&It)!==0&&(a.f^=It),$r(a,_)),p.deactivate())};c.promise.then(g,_=>g(null,_||"unknown"))}),oi(()=>{for(const l of o)l.reject(Hr)}),new Promise(l=>{function c(p){function d(){p===i?l(a):c(i)}p.then(d,d)}c(i)})}function pt(e){const t=xr(e);return $a(t),t}function Zn(e){const t=xr(e);return t.equals=Yi,t}function po(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)Se(t[r])}}function Qn(e){var t,r=V,n=e.parent;if(!At&&n!==null&&e.v!==_e&&(n.f&(Ne|Me))!==0)return Ws(),e.v;qe(n);try{po(e),t=Na(e)}finally{qe(r)}return t}function Qi(e){var t=Qn(e);if(!e.equals(t)&&(e.wv=Aa(),(!(O!=null&&O.is_fork)||e.deps===null)&&(O!==null?(O.capture(e,t,!0),jr==null||jr.capture(e,t,!0)):e.v=t,e.deps===null))){pe(e,me);return}At||(xe!==null?(si()||O!=null&&O.is_fork)&&xe.set(e,t):Kn(e))}function ho(e){var t;if(e.effects!==null)for(const r of e.effects)(r.teardown||r.ac)&&((t=r.teardown)==null||t.call(r),r.ac!==null&&Ur(()=>{r.ac.abort(Vr),r.ac=null}),r.fn!==null&&(r.teardown=Ns),Kr(r,0),ci(r))}function Ji(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&kr(t)}let Jn=null,Sr=null,O=null,jr=null,xe=null,ei=null,ti=!1,Wr=null,xn=null;var ea=0,Hc=new Set;let _o=1;const Pn=class Pn{constructor(){R(this,j);We(this,"id",_o++);R(this,Ar,!1);We(this,"linked",!0);R(this,Ut,null);R(this,ar,null);We(this,"async_deriveds",new Map);We(this,"current",new Map);We(this,"previous",new Map);R(this,Mr,new Set);R(this,Nr,new Set);R(this,Tr,0);R(this,Nt,new Map);R(this,Or,null);R(this,De,[]);R(this,an,[]);R(this,Tt,new Set);R(this,lt,new Set);R(this,yt,new Map);R(this,Pr,new Set);We(this,"is_fork",!1);R(this,sr,!1);Sr===null?Jn=Sr=this:(P(Sr,ar,this),P(this,Ut,Sr)),Sr=this}skip_effect(t){f(this,yt).has(t)||f(this,yt).set(t,{d:[],m:[]}),f(this,Pr).delete(t)}unskip_effect(t,r=n=>this.schedule(n)){var n=f(this,yt).get(t);if(n){f(this,yt).delete(t);for(var i of n.d)pe(i,he),r(i);for(i of n.m)pe(i,Xe),r(i)}f(this,Pr).add(t)}capture(t,r,n=!1){t.v!==_e&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&It)===0&&(this.current.set(t,[r,n]),xe==null||xe.set(t,r)),this.is_fork||(t.v=r)}activate(){O=this}deactivate(){O=null,xe=null}flush(){try{ti=!0,O=this,U(this,j,dn).call(this)}finally{ea=0,ei=null,Wr=null,xn=null,ti=!1,O=null,xe=null,ht.clear()}}discard(){var t;for(const r of f(this,Nr))r(this);f(this,Nr).clear();for(const r of this.async_deriveds.values())r.reject(Hr);U(this,j,vn).call(this),(t=f(this,Or))==null||t.resolve()}register_created_effect(t){f(this,an).push(t)}increment(t,r){if(P(this,Tr,f(this,Tr)+1),t){let n=f(this,Nt).get(r)??0;f(this,Nt).set(r,n+1)}}decrement(t,r){if(P(this,Tr,f(this,Tr)-1),t){let n=f(this,Nt).get(r)??0;n===1?f(this,Nt).delete(r):f(this,Nt).set(r,n-1)}f(this,sr)||(P(this,sr,!0),vt(()=>{P(this,sr,!1),this.linked&&this.flush()}))}transfer_effects(t,r){for(const n of t)f(this,Tt).add(n);for(const n of r)f(this,lt).add(n);t.clear(),r.clear()}oncommit(t){f(this,Mr).add(t)}ondiscard(t){f(this,Nr).add(t)}settled(){return(f(this,Or)??P(this,Or,Bi())).promise}static ensure(){if(O===null){const t=O=new Pn;ti||vt(()=>{f(t,Ar)||t.flush()})}return O}apply(){{xe=null;return}}schedule(t){var r;if(ei=t,(r=t.b)!=null&&r.is_pending&&(t.f&(hr|Dr|jn))!==0&&(t.f&_r)===0){t.b.defer_effect(t);return}f(this,De).push(t)}};Ar=new WeakMap,Ut=new WeakMap,ar=new WeakMap,Mr=new WeakMap,Nr=new WeakMap,Tr=new WeakMap,Nt=new WeakMap,Or=new WeakMap,De=new WeakMap,an=new WeakMap,Tt=new WeakMap,lt=new WeakMap,yt=new WeakMap,Pr=new WeakMap,sr=new WeakMap,j=new WeakSet,Ni=function(){if(this.is_fork)return!0;for(const n of f(this,Nt).keys()){for(var t=n,r=!1;t.parent!==null;){if(f(this,yt).has(t)){r=!0;break}t=t.parent}if(!r)return!0}return!1},Ti=function(){var t=[];for(const a of f(this,De))if(!((a.f&Ne)!==0||(a.f&(he|Xe))===0)){for(var r=a,n=!1;r.parent!==null;){r=r.parent;var i=r.f;if((i&(kt|Ge))!==0){if((i&me)===0){n=!0;break}r.f^=me}}n||t.push(r)}return P(this,De,[]),t},dn=function(){var o,l,c,p;P(this,Ar,!0);for(const d of f(this,Tt))f(this,lt).delete(d),pe(d,he),this.schedule(d);for(const d of f(this,lt))pe(d,Xe),this.schedule(d);this.apply();for(var t=Wr=[],r=[],n=xn=[];f(this,De).length>0;){ea++>1e3&&(U(this,j,vn).call(this),go());for(const d of U(this,j,Ti).call(this))try{U(this,j,Oi).call(this,d,t,r)}catch(g){throw ia(d),U(this,j,Ni).call(this)||this.discard(),g}}if(O=null,n.length>0){var i=Pn.ensure();for(const d of n)i.schedule(d)}if(Wr=null,xn=null,U(this,j,Ni).call(this)){U(this,j,Lr).call(this,r),U(this,j,Lr).call(this,t);for(const[d,g]of f(this,yt))na(d,g);n.length>0&&U(o=O,j,dn).call(o);return}const a=U(this,j,ks).call(this);if(a){U(this,j,Lr).call(this,r),U(this,j,Lr).call(this,t),U(l=a,j,Es).call(l,this);return}f(this,Tt).clear(),f(this,lt).clear();for(const d of f(this,Mr))d(this);f(this,Mr).clear(),jr=this,ta(r),ta(t),jr=null,(c=f(this,Or))==null||c.resolve();var s=O;if(f(this,Tr)===0&&(f(this,De).length===0||s!==null)&&U(this,j,vn).call(this),f(this,De).length>0)if(s!==null){for(const d of f(this,De))f(s,De).push(d);P(this,De,[])}else s=this;s!==null&&(ht.clear(),U(p=s,j,dn).call(p))},Oi=function(t,r,n){t.f^=me;for(var i=t.first;i!==null;){var a=i.f,s=(a&(Ge|kt))!==0,o=s&&(a&me)!==0,l=o||(a&Me)!==0||f(this,yt).has(i);if(!l&&i.fn!==null){s?i.f^=me:(a&hr)!==0?r.push(i):qr(i)&&((a&tt)!==0&&f(this,lt).add(i),kr(i));var c=i.first;if(c!==null){i=c;continue}}for(;i!==null;){var p=i.next;if(p!==null){i=p;break}i=i.parent}}},ks=function(){for(var t=f(this,Ut);t!==null;){if(!t.is_fork){for(const[r,[,n]]of this.current)if(t.current.has(r)&&!n)return t}t=f(t,Ut)}return null},Es=function(t){var n;for(const[i,a]of t.current)!this.previous.has(i)&&t.previous.has(i)&&this.previous.set(i,t.previous.get(i)),this.current.set(i,a);for(const[i,a]of t.async_deriveds){const s=this.async_deriveds.get(i);s&&a.promise.then(s.resolve).catch(s.reject)}t.async_deriveds.clear(),this.transfer_effects(f(t,Tt),f(t,lt));const r=i=>{var a=i.reactions;if(a!==null&&!((i.f&ke)!==0&&(i.f&(he|Xe))===0))for(const l of a){var s=l.f;if((s&ke)!==0)r(l);else{var o=l;s&(mr|tt)&&!this.async_deriveds.has(o)&&(f(this,lt).delete(o),pe(o,he),this.schedule(o))}}};for(const i of this.current.keys())r(i);this.oncommit(()=>t.discard()),U(n=t,j,vn).call(n),O=this,U(this,j,dn).call(this)},Lr=function(t){for(var r=0;r<t.length;r+=1)qi(t[r],f(this,Tt),f(this,lt))},Dc=function(){var d,g;for(let v=Jn;v!==null;v=f(v,ar)){var t=v.id<this.id,r=[];for(const[u,[_,h]]of this.current){if(v.current.has(u)){var n=v.current.get(u)[0];if(t&&_!==n)v.current.set(u,[_,h]);else continue}r.push(u)}if(t)for(const[u,_]of this.async_deriveds){const h=v.async_deriveds.get(u);h&&_.promise.then(h.resolve).catch(h.reject)}var i=[...v.current.keys()].filter(u=>!v.current.get(u)[1]);if(!(!f(v,Ar)||i.length===0)){var a=i.filter(u=>!this.current.has(u));if(a.length===0)t&&v.discard();else if(r.length>0){if(t)for(const u of f(this,Pr))v.unskip_effect(u,_=>{var h;(_.f&(tt|mr))!==0?v.schedule(_):U(h=v,j,Lr).call(h,[_])});v.activate();var s=new Set,o=new Map;for(var l of r)ra(l,a,s,o);o=new Map;var c=[...v.current].filter(([u,_])=>{const h=this.current.get(u);return h?h[0]!==_[0]||h[1]!==_[1]:!0}).map(([u])=>u);if(c.length>0)for(const u of f(this,an))(u.f&(Ne|Me|gn))===0&&ri(u,c,o)&&((u.f&(mr|tt))!==0?(pe(u,he),v.schedule(u)):f(v,Tt).add(u));if(f(v,De).length>0&&!f(v,sr)){v.apply();for(var p of U(d=v,j,Ti).call(d))U(g=v,j,Oi).call(g,p,[],[])}v.deactivate()}}}},vn=function(){if(this.linked){var t=f(this,Ut),r=f(this,ar);t===null?Jn=r:P(t,ar,r),r===null?Sr=t:P(r,Ut,t),this.linked=!1}};let qt=Pn;function go(){try{to()}catch(e){gt(e,ei)}}let nt=null;function ta(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(Ne|Me))===0&&qr(n)&&(nt=new Set,kr(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&wa(n),(nt==null?void 0:nt.size)>0)){ht.clear();for(const i of nt){if((i.f&(Ne|Me))!==0)continue;const a=[i];let s=i.parent;for(;s!==null;)nt.has(s)&&(nt.delete(s),a.push(s)),s=s.parent;for(let o=a.length-1;o>=0;o--){const l=a[o];(l.f&(Ne|Me))===0&&kr(l)}}nt.clear()}}nt=null}}function ra(e,t,r,n){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(const i of e.reactions){const a=i.f;(a&ke)!==0?ra(i,t,r,n):(a&(mr|tt))!==0&&(a&he)===0&&ri(i,t,n)&&(pe(i,he),ni(i))}}function ri(e,t,r){const n=r.get(e);if(n!==void 0)return n;if(e.deps!==null)for(const i of e.deps){if(Gt.call(t,i))return!0;if((i.f&ke)!==0&&ri(i,t,r))return r.set(i,!0),!0}return r.set(e,!1),!1}function ni(e){O.schedule(e)}function na(e,t){if(!((e.f&Ge)!==0&&(e.f&me)!==0)){(e.f&he)!==0?t.d.push(e):(e.f&Xe)!==0&&t.m.push(e),pe(e,me);for(var r=e.first;r!==null;)na(r,t),r=r.next}}function ia(e){pe(e,me);for(var t=e.first;t!==null;)ia(t),t=t.next}let Sn=new Set;const ht=new Map;let aa=!1;function Lt(e,t){var r={f:0,v:e,reactions:null,equals:Xi,rv:0,wv:0};return r}function q(e,t){const r=Lt(e);return $a(r),r}function mo(e,t=!1,r=!0){var i;const n=Lt(e);return t||(n.equals=Yi),yr&&r&&se!==null&&se.l!==null&&((i=se.l).s??(i.s=[])).push(n),n}function A(e,t,r=!1){B!==null&&(!at||(B.f&gn)!==0)&&Fr()&&(B.f&(ke|tt|mr|gn))!==0&&(mt===null||!mt.has(e))&&ao();let n=r?_t(t):t;return $r(e,n,xn)}var Kt=null,ii=0;function $r(e,t,r=null){if(!e.equals(t)){At?ht.set(e,t):ht.has(e)||ht.set(e,e.v);var n=qt.ensure();if(n.capture(e,t),(e.f&ke)!==0){const i=e;(e.f&he)!==0&&Qn(i),xe===null&&Kn(i)}e.wv=Aa(),Kt=null,ii=0,oa(e,he,r),Kt=null,Fr()&&V!==null&&(V.f&me)!==0&&(V.f&(Ge|kt))===0&&(Ke===null?No([e]):Ke.push(e)),!n.is_fork&&Sn.size>0&&!aa&&yo()}return t}function yo(){aa=!1;for(const e of Sn){(e.f&me)!==0&&pe(e,Xe);let t;try{t=qr(e)}catch{t=!0}t&&kr(e)}Sn.clear()}function sa(e,t=1){var r=w(e),n=t===1?r++:r--;return A(e,r),n}function Gr(e){A(e,e.v+1)}function oa(e,t,r){var n=e.reactions;if(n!==null){var i=Fr(),a=n.length;if(ii+=a,ii>1e5&&Kt===null&&(Kt=new Set),Kt!==null){if(Kt.has(e))return;Kt.add(e)}for(var s=0;s<a;s++){var o=n[s],l=o.f;if(!(!i&&o===V)){var c=(l&he)===0;if(c&&pe(o,t),(l&gn)!==0)Sn.add(o);else if((l&ke)!==0){var p=o;xe==null||xe.delete(p),oa(p,Xe,r)}else if(c){var d=o;(l&tt)!==0&&nt!==null&&nt.add(d),r!==null?r.push(d):ni(d)}}}}}function _t(e){if(typeof e!="object"||e===null||dt in e||Ui in e)return e;const t=Un(e);if(t!==As&&t!==Ms)return e;var r=new Map,n=Z(e),i=q(0),a=er,s=o=>{if(er===a)return o();var l=B,c=er;Ye(null),Ea(a);var p=o();return Ye(l),Ea(c),p};return n&&r.set("length",q(e.length)),new Proxy(e,{defineProperty(o,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&no();var p=r.get(l);return p===void 0?s(()=>{var d=q(c.value);return r.set(l,d),d}):A(p,c.value,!0),!0},deleteProperty(o,l){var c=r.get(l);if(c===void 0){if(l in o){const p=s(()=>q(_e));r.set(l,p),Gr(i)}}else A(c,_e),Gr(i);return!0},get(o,l,c){var v;if(l===dt)return e;var p=r.get(l),d=l in o;if(p===void 0&&(!d||(v=Ct(o,l))!=null&&v.writable)&&(p=s(()=>{var u=_t(d?o[l]:_e),_=q(u);return _}),r.set(l,p)),p!==void 0){var g=w(p);return g===_e?void 0:g}return Reflect.get(o,l,c)},getOwnPropertyDescriptor(o,l){var g;(g=this.has)==null||g.call(this,o,l);var c=Reflect.getOwnPropertyDescriptor(o,l),p=r.get(l);if(p!==void 0){var d=w(p);if(d===_e)return;if(c&&"value"in c)c.value=d;else return{enumerable:!0,configurable:!0,value:d,writable:!0}}return c},has(o,l){var g;if(l===dt)return!0;var c=r.get(l),p=c!==void 0&&c.v!==_e||Reflect.has(o,l);if(c!==void 0||V!==null&&(!p||(g=Ct(o,l))!=null&&g.writable)){c===void 0&&(c=s(()=>{var v=p?_t(o[l]):_e,u=q(v);return u}),r.set(l,c));var d=w(c);if(d===_e)return!1}return p},set(o,l,c,p){var $;var d=r.get(l),g=l in o;if(n&&l==="length")for(var v=c;v<d.v;v+=1){var u=r.get(v+"");u!==void 0?A(u,_e):v in o&&(u=s(()=>q(_e)),r.set(v+"",u))}if(d===void 0)(!g||($=Ct(o,l))!=null&&$.writable)&&(d=s(()=>q(void 0)),A(d,_t(c)),r.set(l,d));else{g=d.v!==_e;var _=s(()=>_t(c));A(d,_)}var h=Reflect.getOwnPropertyDescriptor(o,l);if(h!=null&&h.set&&h.set.call(p,c),!g){if(n&&typeof l=="string"){var b=r.get("length"),S=Number(l);Number.isInteger(S)&&S>=b.v&&A(b,S+1)}Gr(i)}return!0},ownKeys(o){w(i);var l=Reflect.ownKeys(o).filter(d=>{var g=r.get(d);return g===void 0||g.v!==_e});for(var[c,p]of r)p.v!==_e&&!(c in o)&&l.push(c);return l},setPrototypeOf(){io()}})}function la(e){try{if(e!==null&&typeof e=="object"&&dt in e)return e[dt]}catch{}return e}function ca(e,t){return Object.is(la(e),la(t))}var fa,ua,da,va;function wo(){if(fa===void 0){fa=window,ua=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;da=Ct(t,"firstChild").get,va=Ct(t,"nextSibling").get,Di(e)&&(e[Xn]=void 0,e[yn]=null,e[Yn]=void 0,e.__e=void 0),Di(r)&&(r[Br]=void 0)}}function Et(e=""){return document.createTextNode(e)}function Zt(e){return da.call(e)}function Xr(e){return va.call(e)}function z(e,t){return Zt(e)}function W(e,t=!1){{var r=Zt(e);return r instanceof Comment&&r.data===""?Xr(r):r}}function oe(e,t=!1){return Zt(e)}function D(e,t=1,r=!1){let n=e;for(;t--;)n=Xr(n);return n}function bo(e){e.textContent=""}function pa(){return!1}function ai(e,t,r){return t==null||t===Gi?r?document.createElement(e,{is:r}):document.createElement(e):r?document.createElementNS(t,e,{is:r}):document.createElementNS(t,e)}function xo(e){var t=V;if(t===null)return B.f|=It,e;if((t.f&_r)===0&&(t.f&hr)===0)throw e;gt(e,t)}function gt(e,t){if(!(t!==null&&(t.f&Ne)!==0)){for(;t!==null;){if((t.f&Wn)!==0&&(t.f&(Ne|_n))===0){if((t.f&_r)===0)throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw e}}function ha(e){V===null&&(B===null&&eo(),Js()),At&&Qs()}function So(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function it(e,t){var r=V;r!==null&&(r.f&Me)!==0&&(e|=Me);var n={ctx:se,deps:null,nodes:null,f:e|he|rt,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};O==null||O.register_created_effect(n);var i=n;if((e&hr)!==0)Wr!==null?Wr.push(n):qt.ensure().schedule(n);else if(t!==null){try{kr(n)}catch(s){throw Se(n),s}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&gr)===0&&(i=i.first,(e&tt)!==0&&(e&Rt)!==0&&i!==null&&(i.f|=Rt))}if(i!==null&&(i.parent=r,r!==null&&So(i,r),B!==null&&(B.f&ke)!==0&&(e&kt)===0)){var a=B;(a.effects??(a.effects=[])).push(i)}return n}function si(){return B!==null&&!at}function oi(e){const t=it(Dr,null);return pe(t,me),t.teardown=e,t}function $n(e){ha();var t=V.f,r=!B&&(t&Ge)!==0&&se!==null&&!se.i;if(r){var n=se;(n.e??(n.e=[])).push(e)}else return _a(e)}function _a(e){return it(hr|Fi,e)}function $o(e){return ha(),it(Dr|Fi,e)}function ko(e){qt.ensure();const t=it(kt|gr,e);return(r={})=>new Promise(n=>{r.outro?Qt(t,()=>{Se(t),n(void 0)}):(Se(t),n(void 0))})}function li(e){return it(hr,e)}function Eo(e){return it(mr|gr,e)}function ga(e,t=0){return it(Dr|t,e)}function we(e,t=[],r=[],n=[]){Ki(n,t,r,i=>{it(Dr,()=>{e(...i.map(w))})})}function Yr(e,t=0){var r=it(tt|t,e);return r}function ma(e,t=0){var r=it(jn|t,e);return r}function Re(e){return it(Ge|gr,e)}function ya(e){var t=e.teardown;if(t!==null){const r=At,n=B;Sa(!0),Ye(null);try{t.call(null)}catch(i){gt(i,e.parent)}finally{Sa(r),Ye(n)}}}function ci(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const i=r.ac;i!==null&&Ur(()=>{i.abort(Vr)});var n=r.next;(r.f&kt)!==0?r.parent=null:Se(r,t),r=n}}function Ao(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Ge)===0&&Se(t),t=r}}function Se(e,t=!0){var r=!1;(t||(e.f&Os)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Mo(e.nodes.start,e.nodes.end),r=!0),e.f|=_n,ci(e,t&&!r),Kr(e,0);var n=e.nodes&&e.nodes.t;if(n!==null)for(const a of n)a.stop();ya(e),e.f^=_n,e.f|=Ne;var i=e.parent;i!==null&&i.first!==null&&wa(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Mo(e,t){for(;e!==null;){var r=e===t?null:Xr(e);e.remove(),e=r}}function wa(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Qt(e,t,r=!0){var n=[];e.f|=Gn,ba(e,n,!0);var i=()=>{r&&Se(e),t&&t()},a=n.length;if(a>0){var s=()=>--a||i();for(var o of n)o.out(s)}else i()}function ba(e,t,r){if((e.f&Me)===0){e.f^=Me;var n=e.nodes&&e.nodes.t;if(n!==null)for(const o of n)(o.is_global||r)&&t.push(o);for(var i=e.first;i!==null;){var a=i.next;if((i.f&kt)===0){var s=(i.f&Rt)!==0||(i.f&Ge)!==0&&(e.f&tt)!==0;ba(i,t,s?r:!1)}i=a}}}function kn(e){e.f&=~Gn,xa(e,!0)}function xa(e,t){if((e.f&Gn)===0&&(e.f&Me)!==0){e.f^=Me,(e.f&me)===0&&(pe(e,he),qt.ensure().schedule(e));for(var r=e.first;r!==null;){var n=r.next,i=(r.f&Rt)!==0||(r.f&Ge)!==0;xa(r,i?t:!1),r=n}var a=e.nodes&&e.nodes.t;if(a!==null)for(const s of a)(s.is_global||t)&&s.in()}}function fi(e,t){if(e.nodes)for(var r=e.nodes.start,n=e.nodes.end;r!==null;){var i=r===n?null:Xr(r);t.append(r),r=i}}let En=!1,At=!1;function Sa(e){At=e}let B=null,at=!1;function Ye(e){B=e}let V=null;function qe(e){V=e}let mt=null;function $a(e){B!==null&&((B.f&mn)!==0||(B.f&ke)!==0)&&(mt??(mt=new Set)).add(e)}let Ie=null,Le=0,Ke=null;function No(e){Ke=e}let ka=1,Jt=0,er=Jt;function Ea(e){er=e}function Aa(){return++ka}function qr(e){var t=e.f;if((t&he)!==0)return!0;if((t&Xe)!==0){for(var r=e.deps,n=r.length,i=0;i<n;i++){var a=r[i];if(qr(a)&&Qi(a),a.wv>e.wv)return!0}(t&rt)!==0&&xe===null&&pe(e,me)}return!1}function Ma(e,t,r=!0){var n=e.reactions;if(n!==null&&!(mt!==null&&mt.has(e)))for(var i=0;i<n.length;i++){var a=n[i];(a.f&ke)!==0?Ma(a,t,!1):t===a&&(r?pe(a,he):(a.f&me)!==0&&pe(a,Xe),ni(a))}}function Na(e){var t=Ie,r=Le,n=Ke,i=B,a=mt,s=se,o=at,l=er,c=e.f;Ie=null,Le=0,Ke=null,B=(c&(Ge|kt))===0?e:null,mt=null,wr(e.ctx),at=!1,er=++Jt,e.ac!==null&&(Ur(()=>{e.ac.abort(Vr)}),e.ac=null);try{e.f|=mn;var p=e.fn,d=p();e.f|=_r;var g=Ta(e);if(Fr()&&Ke!==null&&!at&&g!==null&&(e.f&(ke|Xe|he))===0)for(var v=0;v<Ke.length;v++)Ma(Ke[v],e);if(i!==null&&i!==e){if(Jt++,i.deps!==null)for(let u=0;u<r;u+=1)i.deps[u].rv=Jt;if(t!==null)for(const u of t)u.rv=Jt;Ke!==null&&(n===null?n=Ke:n.push(...Ke))}return(e.f&It)!==0&&(e.f^=It),d}catch(u){return Ta(e),xo(u)}finally{e.f^=mn,Ie=t,Le=r,Ke=n,B=i,mt=a,wr(s),at=o,er=l}}function Ta(e){var i;var t=e.deps,r=O==null?void 0:O.is_fork;if(Ie!==null){var n;if(r||Kr(e,Le),t!==null&&Le>0)for(t.length=Le+Ie.length,n=0;n<Ie.length;n++)t[Le+n]=Ie[n];else e.deps=t=Ie;if(si()&&(e.f&rt)!==0)for(n=Le;n<t.length;n++)((i=t[n]).reactions??(i.reactions=[])).push(e)}else!r&&t!==null&&Le<t.length&&(Kr(e,Le),t.length=Le);return t}function To(e,t){let r=t.reactions;if(r!==null){var n=ge.call(r,e);if(n!==-1){var i=r.length-1;i===0?r=t.reactions=null:(r[n]=r[i],r.pop())}}if(r===null&&(t.f&ke)!==0&&(Ie===null||!Gt.call(Ie,t))){var a=t;(a.f&rt)!==0&&(a.f^=rt),a.v!==_e&&Kn(a),a.ac!==null&&Ur(()=>{a.ac.abort(Vr),a.ac=null,pe(a,he)}),ho(a),Kr(a,0)}}function Kr(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)To(e,r[n])}function kr(e){var t=e.f;if((t&Ne)===0){pe(e,me);var r=V,n=En;V=e,En=(t&(Ge|kt))===0;try{(t&(tt|jn))!==0?Ao(e):ci(e),ya(e);var i=Na(e);e.teardown=typeof i=="function"?i:null,e.wv=ka;var a}finally{En=n,V=r}}}function w(e){var t=e.f,r=(t&ke)!==0;if(B!==null&&!at){var n=V!==null&&(V.f&Ne)!==0;if(!n&&(mt===null||!mt.has(e))){var i=B.deps;if((B.f&mn)!==0)e.rv<Jt&&(e.rv=Jt,Ie===null&&i!==null&&i[Le]===e?Le++:Ie===null?Ie=[e]:Ie.push(e));else{B.deps??(B.deps=[]),Gt.call(B.deps,e)||B.deps.push(e);var a=e.reactions;a===null?e.reactions=[B]:Gt.call(a,B)||a.push(B)}}}if(At&&ht.has(e))return ht.get(e);if(r){var s=e;if(At){var o=s.v;return((s.f&me)===0&&s.reactions!==null||Pa(s))&&(o=Qn(s)),ht.set(s,o),o}var l=(s.f&rt)===0&&!at&&B!==null&&(En||(B.f&rt)!==0),c=(s.f&_r)===0;qr(s)&&(l&&(s.f|=rt),Qi(s)),l&&!c&&(Ji(s),Oa(s))}if(xe!=null&&xe.has(e))return xe.get(e);if((e.f&It)!==0)throw e.v;return e.v}function Oa(e){if(e.f|=rt,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&ke)!==0&&(t.f&rt)===0&&(Ji(t),Oa(t))}function Pa(e){if(e.v===_e)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(ht.has(t)||(t.f&ke)!==0&&Pa(t))return!0;return!1}function zt(e){var t=at;try{return at=!0,e()}finally{at=t}}function tr(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(dt in e)ui(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&dt in r&&ui(r)}}}function ui(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{ui(e[n],t)}catch{}const r=Un(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=zi(r);for(let i in n){const a=n[i].get;if(a)try{a.call(e)}catch{}}}}}function Oo(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Po=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Co(e){return Po.includes(e)}const Ro={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Io(e){return e=e.toLowerCase(),Ro[e]??e}const Lo=["touchstart","touchmove"];function zo(e){return Lo.includes(e)}const rr=Symbol("events"),Ca=new Set,di=new Set;function Do(e,t,r,n={}){function i(a){if(n.capture||hi.call(t,a),!a.cancelBubble)return Ur(()=>r==null?void 0:r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?(i.__removed=!1,vt(()=>{i.__removed||t.addEventListener(e,i,n)})):t.addEventListener(e,i,n),i}function ue(e,t,r){(t[rr]??(t[rr]={}))[e]=r}function Er(e){for(var t=0;t<e.length;t++)Ca.add(e[t]);for(var r of di)r(e)}let vi=null,pi=!1;function hi(e){var _,h;var t=this,r=t.ownerDocument,n=e.type,i=((_=e.composedPath)==null?void 0:_.call(e))||[],a=i[0]||e.target;vi=e,pi||(pi=!0,setTimeout(()=>{pi=!1,vi=null}));var s=0,o=vi===e&&e[rr];if(o){var l=i.indexOf(o);if(l!==-1&&(t===document||t===window)){e[rr]=t;return}var c=i.indexOf(t);if(c===-1)return;l<=c&&(s=l)}if(a=i[s]||e.target,a!==t){Li(e,"currentTarget",{configurable:!0,get(){return a||r}});var p=B,d=V;Ye(null),qe(null);try{for(var g,v=[];a!==null&&a!==t;){try{var u=(h=a[rr])==null?void 0:h[n];u!=null&&(!a.disabled||e.target===a)&&u.call(a,e)}catch(b){g?v.push(b):g=b}if(e.cancelBubble)break;s++,a=s<i.length?i[s]:null}if(g){for(let b of v)queueMicrotask(()=>{throw b});throw g}}finally{e[rr]=t,delete e.currentTarget,Ye(p),qe(d)}}}const _i=((as=globalThis==null?void 0:globalThis.window)==null?void 0:as.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Bo(e){return(_i==null?void 0:_i.createHTML(e))??e}function Ra(e){var t=ai("template");return t.innerHTML=Bo(e.replaceAll("<!>","<!---->")),t.content}function Zr(e,t){var r=V;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function be(e,t){var r=(t&Fs)!==0,n=(t&Us)!==0,i,a=!e.startsWith("<!>");return()=>{i===void 0&&(i=Ra(a?e:"<!>"+e),r||(i=Zt(i)));var s=n||ua?document.importNode(i,!0):i.cloneNode(!0);if(r){var o=Zt(s),l=s.lastChild;Zr(o,l)}else Zr(s,s);return s}}function Vo(e,t,r="svg"){var n=!e.startsWith("<!>"),i=`<${r}>${n?e:"<!>"+e}</${r}>`,a;return()=>{if(!a){var s=Ra(i),o=Zt(s);a=Zt(o)}var l=a.cloneNode(!0);return Zr(l,l),l}}function Fo(e,t){return Vo(e,t,"svg")}function X(){var e=document.createDocumentFragment(),t=document.createComment(""),r=Et();return e.append(t,r),Zr(t,r),e}function E(e,t){e!==null&&e.before(t)}function Uo(e){let t=0,r=Lt(0),n;return()=>{si()&&(w(r),ga(()=>(t===0&&(n=zt(()=>e(()=>Gr(r)))),t+=1,()=>{vt(()=>{t-=1,t===0&&(n==null||n(),n=void 0,Gr(r))})})))}}var Ho=Rt|gr;function jo(e,t,r,n){new Wo(e,t,r,n)}class Wo{constructor(t,r,n,i){R(this,ee);We(this,"parent");We(this,"is_pending",!1);We(this,"transform_error");R(this,Ze);R(this,Si,null);R(this,Qe);R(this,or);R(this,Oe);R(this,Be,null);R(this,Pe,null);R(this,Ve,null);R(this,wt,null);R(this,lr,0);R(this,Ht,0);R(this,Cr,!1);R(this,sn,new Set);R(this,on,new Set);R(this,Ot,null);R(this,Cn,Uo(()=>(P(this,Ot,Lt(f(this,lr))),()=>{P(this,Ot,null)})));var a;P(this,Ze,t),P(this,Qe,r),P(this,or,s=>{var o=V;o.b=this,o.f|=Wn,n(s)}),this.parent=V.b,this.transform_error=i??((a=this.parent)==null?void 0:a.transform_error)??(s=>s),P(this,Oe,Yr(()=>{U(this,ee,Ci).call(this)},Ho))}defer_effect(t){qi(t,f(this,sn),f(this,on))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!f(this,Qe).pending}update_pending_count(t,r){U(this,ee,Ri).call(this,t,r),P(this,lr,f(this,lr)+t),!(!f(this,Ot)||f(this,Cr))&&(P(this,Cr,!0),vt(()=>{P(this,Cr,!1),f(this,Ot)&&$r(f(this,Ot),f(this,lr))}))}get_effect_pending(){return f(this,Cn).call(this),w(f(this,Ot))}error(t){if(!f(this,Qe).onerror&&!f(this,Qe).failed)throw t;O!=null&&O.is_fork?(f(this,Be)&&O.skip_effect(f(this,Be)),f(this,Pe)&&O.skip_effect(f(this,Pe)),f(this,Ve)&&O.skip_effect(f(this,Ve)),O.oncommit(()=>{U(this,ee,Ii).call(this,t)})):U(this,ee,Ii).call(this,t)}}Ze=new WeakMap,Si=new WeakMap,Qe=new WeakMap,or=new WeakMap,Oe=new WeakMap,Be=new WeakMap,Pe=new WeakMap,Ve=new WeakMap,wt=new WeakMap,lr=new WeakMap,Ht=new WeakMap,Cr=new WeakMap,sn=new WeakMap,on=new WeakMap,Ot=new WeakMap,Cn=new WeakMap,ee=new WeakSet,Bc=function(){try{P(this,Be,Re(()=>f(this,or).call(this,f(this,Ze))))}catch(t){this.error(t)}},Vc=function(t){const r=f(this,Qe).failed,{reset:n,invoke_onerror:i}=U(this,ee,Pi).call(this,t);vt(i),r&&P(this,Ve,Re(()=>{r(f(this,Ze),()=>t,()=>n)}))},Pi=function(t){var r=!1,n=!1;const i=()=>{if(r){Xs();return}r=!0,n&&so(),f(this,Ve)!==null&&Qt(f(this,Ve),()=>{P(this,Ve,null)}),U(this,ee,Fn).call(this,()=>{U(this,ee,Ci).call(this)})};return{reset:i,invoke_onerror:()=>{var s,o;try{n=!0,(o=(s=f(this,Qe)).onerror)==null||o.call(s,t,i),n=!1}catch(l){gt(l,f(this,Oe)&&f(this,Oe).parent)}}}},Fc=function(){const t=f(this,Qe).pending;t&&(this.is_pending=!0,P(this,Pe,Re(()=>t(f(this,Ze)))),vt(()=>{var r=P(this,wt,document.createDocumentFragment()),n=Et(),i=!1;if(r.append(n),P(this,Be,U(this,ee,Fn).call(this,()=>{try{return Re(()=>f(this,or).call(this,n))}catch(a){try{this.error(a),i=!0}catch(s){gt(s,f(this,Oe).parent)}return null}})),f(this,Be)===null){P(this,wt,null),i&&U(this,ee,pn).call(this,O);return}f(this,Ht)===0&&(f(this,Ze).before(r),P(this,wt,null),Qt(f(this,Pe),()=>{P(this,Pe,null)}),U(this,ee,pn).call(this,O))}))},Ci=function(){try{if(this.is_pending=this.has_pending_snippet(),P(this,Ht,0),P(this,lr,0),P(this,Be,Re(()=>{f(this,or).call(this,f(this,Ze))})),f(this,Ht)>0){var t=P(this,wt,document.createDocumentFragment());fi(f(this,Be),t);const r=f(this,Qe).pending;P(this,Pe,Re(()=>r(f(this,Ze))))}else U(this,ee,pn).call(this,O)}catch(r){this.error(r)}},pn=function(t){this.is_pending=!1,t.transfer_effects(f(this,sn),f(this,on))},Fn=function(t){var r=V,n=B,i=se;qe(f(this,Oe)),Ye(f(this,Oe)),wr(f(this,Oe).ctx);try{return qt.ensure(),t()}finally{qe(r),Ye(n),wr(i)}},Ri=function(t,r){var n;if(!this.has_pending_snippet()){this.parent&&U(n=this.parent,ee,Ri).call(n,t,r);return}P(this,Ht,f(this,Ht)+t),f(this,Ht)===0&&(U(this,ee,pn).call(this,r),f(this,Pe)&&Qt(f(this,Pe),()=>{P(this,Pe,null)}),f(this,wt)&&(f(this,Ze).before(f(this,wt)),P(this,wt,null)))},Ii=function(t){f(this,Be)&&(Se(f(this,Be)),P(this,Be,null)),f(this,Pe)&&(Se(f(this,Pe)),P(this,Pe,null)),f(this,Ve)&&(Se(f(this,Ve)),P(this,Ve,null));let r=f(this,Qe).failed;const n=i=>{const{reset:a,invoke_onerror:s}=U(this,ee,Pi).call(this,i);s(),r&&P(this,Ve,U(this,ee,Fn).call(this,()=>{try{return Re(()=>{var o=V;o.b=this,o.f|=Wn,r(f(this,Ze),()=>i,()=>a)})}catch(o){return gt(o,f(this,Oe).parent),null}}))};vt(()=>{var i;try{i=this.transform_error(t)}catch(a){gt(a,f(this,Oe)&&f(this,Oe).parent);return}i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(n,a=>gt(a,f(this,Oe)&&f(this,Oe).parent)):n(i)})};function le(e,t){var r=t==null?"":typeof t=="object"?`${t}`:t;r!==(e[Br]??(e[Br]=e.nodeValue))&&(e[Br]=r,e.nodeValue=`${r}`)}function Go(e,t){return Xo(e,t)}const An=new Map;function Xo(e,{target:t,anchor:r,props:n={},events:i,context:a,intro:s=!0,transformError:o}){wo();var l=void 0,c=ko(()=>{var p=r??t.appendChild(Et());jo(p,{pending:()=>{}},v=>{Xt({});var u=se;a&&(u.c=a),i&&(n.$$events=i),l=e(v,n)||qn(),Yt()},o);var d=new Set,g=v=>{for(var u=0;u<v.length;u++){var _=v[u];if(!d.has(_)){d.add(_);var h=zo(_);for(const $ of[t,document]){var b=An.get($);b===void 0&&(b=new Map,An.set($,b));var S=b.get(_);S===void 0?($.addEventListener(_,hi,{passive:h}),b.set(_,1)):b.set(_,S+1)}}}};return g(hn(Ca)),di.add(g),()=>{var h;for(var v of d)for(const b of[t,document]){var u=An.get(b),_=u.get(v);--_==0?(b.removeEventListener(v,hi),u.delete(v),u.size===0&&An.delete(b)):u.set(v,_)}di.delete(g),p!==r&&((h=p.parentNode)==null||h.removeChild(p))}});return Yo.set(l,c),l}let Yo=new WeakMap;class gi{constructor(t,r=!0){We(this,"anchor");R(this,ct,new Map);R(this,bt,new Map);R(this,Fe,new Map);R(this,cr,new Set);R(this,ln,!0);R(this,cn,t=>{if(f(this,ct).has(t)){var r=f(this,ct).get(t),n=f(this,bt).get(r);if(n)kn(n),f(this,cr).delete(r);else{var i=f(this,Fe).get(r);i&&(kn(i.effect),f(this,bt).set(r,i.effect),f(this,Fe).delete(r),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),n=i.effect)}for(const[a,s]of f(this,ct)){if(f(this,ct).delete(a),a===t)break;const o=f(this,Fe).get(s);o&&(Se(o.effect),f(this,Fe).delete(s))}for(const[a,s]of f(this,bt)){if(a===r||f(this,cr).has(a))continue;const o=()=>{if(Array.from(f(this,ct).values()).includes(a)){var c=document.createDocumentFragment();fi(s,c),c.append(Et()),f(this,Fe).set(a,{effect:s,fragment:c})}else Se(s);f(this,cr).delete(a),f(this,bt).delete(a)};f(this,ln)||!n?(f(this,cr).add(a),Qt(s,o,!1)):o()}}});R(this,Rn,t=>{f(this,ct).delete(t);const r=Array.from(f(this,ct).values());for(const[n,i]of f(this,Fe))r.includes(n)||(Se(i.effect),f(this,Fe).delete(n))});this.anchor=t,P(this,ln,r)}ensure(t,r){var n=O,i=pa();if(r&&!f(this,bt).has(t)&&!f(this,Fe).has(t))if(i){var a=document.createDocumentFragment(),s=Et();a.append(s),f(this,Fe).set(t,{effect:Re(()=>r(s)),fragment:a})}else f(this,bt).set(t,Re(()=>r(this.anchor)));if(f(this,ct).set(n,t),i){for(const[o,l]of f(this,bt))o===t?n.unskip_effect(l):n.skip_effect(l);for(const[o,l]of f(this,Fe))o===t?n.unskip_effect(l.effect):n.skip_effect(l.effect);n.oncommit(f(this,cn)),n.ondiscard(f(this,Rn))}else f(this,cn).call(this,n)}}ct=new WeakMap,bt=new WeakMap,Fe=new WeakMap,cr=new WeakMap,ln=new WeakMap,cn=new WeakMap,Rn=new WeakMap;function Dt(e,t,r=!1){var n=new gi(e),i=r?Rt:0;function a(s,o){n.ensure(s,o)}Yr(()=>{var s=!1;t((o,l=0)=>{s=!0,a(l,o)}),s||a(-1,null)},i)}function Ia(e,t){return t}function qo(e,t,r){for(var n=[],i=t.length,a,s=t.length,o=0;o<i;o++){let d=t[o];Qt(d,()=>{if(a){if(a.pending.delete(d),a.done.add(d),a.pending.size===0){var g=e.outrogroups;mi(e,hn(a.done)),g.delete(a),g.size===0&&(e.outrogroups=null)}}else s-=1},!1)}if(s===0){var l=n.length===0&&r!==null&&e.pending.size===0;if(l){var c=r,p=c.parentNode;bo(p),p.append(c),e.items.clear()}mi(e,t,!l)}else a={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(a)}function mi(e,t,r=!0){var n;if(e.pending.size>0){n=new Set;for(const s of e.pending.values())for(const o of s)n.add(e.items.get(o).e)}for(var i=0;i<t.length;i++){var a=t[i];if(n!=null&&n.has(a)){a.f|=ut;const s=document.createDocumentFragment();fi(a,s)}else Se(t[i],r)}}var La;function Bt(e,t,r,n,i,a=null){var s=e,o=new Map,l=(t&ji)!==0;if(l){var c=e;s=c.appendChild(Et())}var p=null,d=Zn(()=>{var $=r();return Z($)?$:$==null?[]:hn($)}),g,v=new Map,u=!0;function _($){(S.effect.f&Ne)===0&&(S.pending.delete($),S.fallback=p,Ko(S,g,s,t,n),p!==null&&(g.length===0?(p.f&ut)===0?kn(p):(p.f^=ut,Jr(p,null,s)):Qt(p,()=>{p=null})))}function h($){S.pending.delete($)}var b=Yr(()=>{g=w(d);for(var $=g.length,I=new Set,x=O,M=pa(),T=0;T<$;T+=1){var te=g[T],ie=n(te,T),de=u?null:o.get(ie);de?(de.v&&$r(de.v,te),de.i&&$r(de.i,T),M&&x.unskip_effect(de.e)):(de=Zo(o,u?s:La??(La=Et()),te,ie,T,i,t,r),u||(de.e.f|=ut),o.set(ie,de)),I.add(ie)}if($===0&&a&&!p&&(u?p=Re(()=>a(s)):(p=Re(()=>a(La??(La=Et()))),p.f|=ut)),$>I.size&&Zs(),!u)if(v.set(x,I),M){for(const[Ue,Je]of o)I.has(Ue)||x.skip_effect(Je.e);x.oncommit(_),x.ondiscard(h)}else _(x);w(d)}),S={effect:b,items:o,pending:v,outrogroups:null,fallback:p};u=!1}function Qr(e){for(;e!==null&&(e.f&Ge)===0;)e=e.next;return e}function Ko(e,t,r,n,i){var de,Ue,Je,fr,Rr,ur,ft,xt,dr;var a=(n&Is)!==0,s=t.length,o=e.items,l=Qr(e.effect.first),c,p=null,d,g=[],v=[],u,_,h,b;if(a)for(b=0;b<s;b+=1)u=t[b],_=i(u,b),h=o.get(_).e,(h.f&ut)===0&&((Ue=(de=h.nodes)==null?void 0:de.a)==null||Ue.measure(),(d??(d=new Set)).add(h));for(b=0;b<s;b+=1){if(u=t[b],_=i(u,b),h=o.get(_).e,e.outrogroups!==null)for(const He of e.outrogroups)He.pending.delete(h),He.done.delete(h);if((h.f&Me)!==0&&(kn(h),a&&((fr=(Je=h.nodes)==null?void 0:Je.a)==null||fr.unfix(),(d??(d=new Set)).delete(h))),(h.f&ut)!==0)if(h.f^=ut,h===l)Jr(h,null,r);else{var S=p?p.next:l;h===e.effect.last&&(e.effect.last=h.prev),h.prev&&(h.prev.next=h.next),h.next&&(h.next.prev=h.prev),Vt(e,p,h),Vt(e,h,S),Jr(h,S,r),p=h,g=[],v=[],l=Qr(p.next);continue}if(h!==l){if(c!==void 0&&c.has(h)){if(g.length<v.length){var $=v[0],I;p=$.prev;var x=g[0],M=g[g.length-1];for(I=0;I<g.length;I+=1)Jr(g[I],$,r);for(I=0;I<v.length;I+=1)c.delete(v[I]);Vt(e,x.prev,M.next),Vt(e,p,x),Vt(e,M,$),l=$,p=M,b-=1,g=[],v=[]}else c.delete(h),Jr(h,l,r),Vt(e,h.prev,h.next),Vt(e,h,p===null?e.effect.first:p.next),Vt(e,p,h),p=h;continue}for(g=[],v=[];l!==null&&l!==h;)(c??(c=new Set)).add(l),v.push(l),l=Qr(l.next);if(l===null)continue}(h.f&ut)===0&&g.push(h),p=h,l=Qr(h.next)}if(e.outrogroups!==null){for(const He of e.outrogroups)He.pending.size===0&&(mi(e,hn(He.done)),(Rr=e.outrogroups)==null||Rr.delete(He));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||c!==void 0){var T=[];if(c!==void 0)for(h of c)(h.f&Me)===0&&T.push(h);for(;l!==null;)(l.f&Me)===0&&l!==e.fallback&&T.push(l),l=Qr(l.next);var te=T.length;if(te>0){var ie=(n&ji)!==0&&s===0?r:null;if(a){for(b=0;b<te;b+=1)(ft=(ur=T[b].nodes)==null?void 0:ur.a)==null||ft.measure();for(b=0;b<te;b+=1)(dr=(xt=T[b].nodes)==null?void 0:xt.a)==null||dr.fix()}qo(e,T,ie)}}a&&vt(()=>{var He,vr;if(d!==void 0)for(h of d)(vr=(He=h.nodes)==null?void 0:He.a)==null||vr.apply()})}function Zo(e,t,r,n,i,a,s,o){var l=(s&Cs)!==0?(s&Ls)===0?mo(r,!1,!1):Lt(r):null,c=(s&Rs)!==0?Lt(i):null;return{v:l,i:c,e:Re(()=>(a(t,l??r,c??i,o),()=>{e.delete(n)}))}}function Jr(e,t,r){if(e.nodes)for(var n=e.nodes.start,i=e.nodes.end,a=t&&(t.f&ut)===0?t.nodes.start:r;n!==null;){var s=Xr(n);if(a.before(n),n===i)return;n=s}}function Vt(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function J(e,t,r,n,i){var o,l;if((o=t.$$host)!=null&&o.$$shadowRoot){const c=ai("slot");E(e,c);return}var a=(l=t.$$slots)==null?void 0:l[r],s=!1;a===!0&&(a=t.children,s=!0),a===void 0||a(e,s?()=>n:n)}function Qo(e,t,r){var n=new gi(e);Yr(()=>{var i=t()??null;n.ensure(i,i&&(a=>r(a,i)))},Rt)}function Jo(e,t,r,n,i,a){var s=null,o=e,l=new gi(o,!1);Yr(()=>{const c=t()||null;var p=Hs;if(c===null){l.ensure(null,null);return}return l.ensure(c,d=>{if(c){if(s=ai(c,p),Zr(s,s),n){var g=null,v=s.appendChild(Et());n(s,v),g==null||g.remove()}V.nodes.end=s,d.before(s)}}),()=>{}},Rt),oi(()=>{})}function el(e,t){var r=void 0,n;ma(()=>{r!==(r=t())&&(n&&(Se(n),n=null),r&&(n=Re(()=>{li(()=>r(e))})))})}function za(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=za(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function tl(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=za(e))&&(n&&(n+=" "),n+=t);return n}function nr(e){return typeof e=="object"?tl(e):e??""}const Da=[...` 	
\r\f \v\uFEFF`];function rl(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var i of Object.keys(r))if(r[i])n=n?n+" "+i:i;else if(n.length)for(var a=i.length,s=0;(s=n.indexOf(i,s))>=0;){var o=s+a;(s===0||Da.includes(n[s-1]))&&(o===n.length||Da.includes(n[o]))?n=(s===0?"":n.substring(0,s))+n.substring(o+1):s=o}}return n===""?null:n}function Ba(e,t=!1){var r=t?" !important;":";",n="";for(var i of Object.keys(e)){var a=e[i];a!=null&&a!==""&&(n+=" "+i+": "+a+r)}return n}function yi(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function nl(e,t){if(t){var r="",n,i;if(Array.isArray(t)?(n=t[0],i=t[1]):n=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var a=!1,s=0,o=!1,l=[];n&&l.push(...Object.keys(n).map(yi)),i&&l.push(...Object.keys(i).map(yi));var c=0,p=-1;const _=e.length;for(var d=0;d<_;d++){var g=e[d];if(o?g==="/"&&e[d-1]==="*"&&(o=!1):a?a===g&&(a=!1):g==="/"&&e[d+1]==="*"?o=!0:g==='"'||g==="'"?a=g:g==="("?s++:g===")"&&s--,!o&&a===!1&&s===0){if(g===":"&&p===-1)p=d;else if(g===";"||d===_-1){if(p!==-1){var v=yi(e.substring(c,p).trim());if(!l.includes(v)){g!==";"&&d++;var u=e.substring(c,d).trim();r+=" "+u+";"}}c=d+1,p=-1}}}}return n&&(r+=Ba(n)),i&&(r+=Ba(i,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Te(e,t,r,n,i,a){var s=e[Xn];if(s!==r||s===void 0){var o=rl(r,n,a);o==null?e.removeAttribute("class"):t?e.className=o:e.setAttribute("class",o),e[Xn]=r}else if(a&&i!==a)for(var l in a){var c=!!a[l];(i==null||c!==!!i[l])&&e.classList.toggle(l,c)}return a}function wi(e,t={},r,n){for(var i in r){var a=r[i];t[i]!==a&&(r[i]==null?e.style.removeProperty(i):e.style.setProperty(i,a,n))}}function il(e,t,r,n){var i=e[Yn];if(i!==t){var a=nl(t,n);a==null?e.removeAttribute("style"):e.style.cssText=a,e[Yn]=t}else n&&(Array.isArray(n)?(wi(e,r==null?void 0:r[0],n[0]),wi(e,r==null?void 0:r[1],n[1],"important")):wi(e,r,n));return n}function Va(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Fa(e,t){var r=!("__defaultValue"in e);!r&&e.__defaultValue===t||(e.__defaultValue=t,Ua(e,!r||"__value"in e))}function Ua(e,t){var r=e.__defaultValue,n=e.multiple,i=n?r??[]:null;if(!(n&&!Z(i))){var a=e.selectedIndex,s=t&&n?new Set(e.selectedOptions):null;for(var o of e.options){var l=bi(o);Va(o,n?i.includes(l):ca(l,r))}if(t)if(s!==null)for(o of e.options){var c=s.has(o);o.selected!==c&&(o.selected=c)}else e.selectedIndex!==a&&(e.selectedIndex=a)}}function ir(e,t,r=!1){if(e.multiple){if(t==null)return;if(!Z(t))return Gs();for(var n of e.options)n.selected=t.includes(bi(n));return}for(n of e.options){var i=bi(n);if(ca(i,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function en(e){var t=new MutationObserver(r=>{r.every(al)||("__defaultValue"in e&&Ua(e,!1),"__value"in e&&ir(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),oi(()=>{t.disconnect()})}function bi(e){return"__value"in e?e.__value:e.value}function al(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(r=>r.nodeName==="SELECTEDCONTENT")}return!1}const tn=Symbol("class"),rn=Symbol("style"),Ha=Symbol("is custom element"),ja=Symbol("is html"),sl=wn?"input":"INPUT",ol=wn?"option":"OPTION",Wa=wn?"select":"SELECT",ll=wn?"progress":"PROGRESS";function Mn(e,t){var r=Nn(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==ll)||(e.value=t??"")}function cl(e,t){var r=Nn(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function Ee(e,t,r,n){var i=Nn(e);i[t]!==(i[t]=r)&&(t==="loading"&&(e[Ps]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Ya(e).has(t)?e[t]=r:e.setAttribute(t,r))}function fl(e,t,r,n,i=!1,a=!1){var s=Nn(e),o=s[Ha],l=!s[ja],c=t||{},p=e.nodeName===ol,d=e.nodeName===Wa;for(var g in t)!(g in r)&&g[0]+g[1]!=="$$"&&(r[g]=null);r.class?r.class=nr(r.class):r[tn]&&(r.class=null),r[rn]&&(r.style??(r.style=null));var v=Ya(e);if(e.nodeName===sl&&"type"in r&&("value"in r||"__value"in r)){var u=r.type;(u!==c.type||u===void 0&&e.hasAttribute("type"))&&(c.type=u,Ee(e,"type",u))}for(const x in r){let M=r[x];if(p&&x==="value"&&M==null){e.value=e.__value="",c[x]=M;continue}if(x==="class"){var _=e.namespaceURI==="http://www.w3.org/1999/xhtml";Te(e,_,M,n,t==null?void 0:t[tn],r[tn]),c[x]=M,c[tn]=r[tn];continue}if(x==="style"){il(e,M,t==null?void 0:t[rn],r[rn]),c[x]=M,c[rn]=r[rn];continue}var h=c[x];if(!(M===h&&!(M===void 0&&e.hasAttribute(x)))){c[x]=M;var b=x[0]+x[1];if(b!=="$$")if(b==="on"){const T={},te="$$"+x;let ie=x.slice(2);var S=Co(ie);if(Oo(ie)&&(ie=ie.slice(0,-7),T.capture=!0),!S&&h){if(M!=null)continue;e.removeEventListener(ie,c[te],T),c[te]=null}if(S)ue(ie,e,M),Er([ie]);else if(M!=null){let de=function(Ue){c[x].call(this,Ue)};c[te]=Do(ie,e,de,T)}}else if(x==="style")Ee(e,x,M);else if(x==="autofocus")fo(e,!!M);else if(!o&&(x==="__value"||x==="value"&&M!=null))e.value=e.__value=M;else if(x==="selected"&&p)Va(e,M);else{var $=x;l||($=Io($));var I=$==="defaultValue"||$==="defaultChecked";if(d&&$==="defaultValue")continue;if(M==null&&!o&&!I)if(s[x]=null,$==="value"||$==="checked"){let T=e;const te=t===void 0;if($==="value"){let ie=T.defaultValue;T.removeAttribute($),T.defaultValue=ie,T.value=T.__value=te?ie:null}else{let ie=T.defaultChecked;T.removeAttribute($),T.defaultChecked=ie,T.checked=te?ie:!1}}else e.removeAttribute(x);else I||(o||typeof M!="string")&&v.has($)?(e[$]=M,$ in s&&(s[$]=_e)):typeof M!="function"&&Ee(e,$,M)}}}return c}function Ga(e,t,r=[],n=[],i=[],a,s=!1,o=!1){Ki(i,r,n,l=>{var c=void 0,p={},d=e.nodeName===Wa,g=!1;if(ma(()=>{var u=t(...l.map(w)),_=fl(e,c,u,a,s,o);if(g&&d){var h=e;"defaultValue"in u&&Fa(h,u.defaultValue),"value"in u&&ir(h,u.value)}for(let S of Object.getOwnPropertySymbols(p))u[S]||Se(p[S]);for(let S of Object.getOwnPropertySymbols(u)){var b=u[S];S.description===js&&(!c||b!==c[S])&&(p[S]&&Se(p[S]),p[S]=Re(()=>el(e,()=>b))),_[S]=b}c=_}),d){var v=e;li(()=>{var u=c;"defaultValue"in u&&Fa(v,u.defaultValue),ir(v,u.value,!0),en(v)})}g=!0})}function Nn(e){return e[yn]??(e[yn]={[Ha]:e.nodeName.includes("-"),[ja]:e.namespaceURI===Gi})}var Xa=new Map;function Ya(e){var t=e.getAttribute("is")||e.nodeName,r=Xa.get(t);if(r)return r;Xa.set(t,r=new Set);for(var n,i=e,a=Element.prototype;a!==i;){n=zi(i);for(var s in n)n[s].set&&s!=="innerHTML"&&s!=="textContent"&&s!=="innerText"&&r.add(s);i=Un(i)}return r}function xi(e,t){return e===t||(e==null?void 0:e[dt])===t}function ul(e=qn(),t,r,n){var i=se.r,a=V;return li(()=>{var s,o;return ga(()=>{s=o,o=[],zt(()=>{xi(r(...o),e)||(t(e,...o),s&&xi(r(...s),e)&&t(null,...s))})}),()=>{let l=a;for(;l!==i&&l.parent!==null&&l.parent.f&_n;)l=l.parent;const c=()=>{o&&xi(r(...o),e)&&t(null,...o)},p=l.teardown;l.teardown=()=>{c(),p==null||p()}}}),e}function dl(e=!1){const t=se,r=t.l.u;if(!r)return;let n=()=>tr(t.s);if(e){let i=0,a={};const s=xr(()=>{let o=!1;const l=t.s;for(const c in l)l[c]!==a[c]&&(a[c]=l[c],o=!0);return o&&i++,i});n=()=>w(s)}r.b.length&&$o(()=>{qa(t,n),Hn(r.b)}),$n(()=>{const i=zt(()=>r.m.map(Ts));return()=>{for(const a of i)typeof a=="function"&&a()}}),r.a.length&&$n(()=>{qa(t,n),Hn(r.a)})}function qa(e,t){if(e.l.s)for(const r of e.l.s)w(r);t()}let Tn=!1;function vl(e){var t=Tn;try{return Tn=!1,[e(),Tn]}finally{Tn=t}}const pl={get(e,t){if(!e.exclude.includes(t))return w(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var n=V;try{qe(e.parent_effect),e.special[t]=st({get[t](){return e.props[t]}},t,Wi)}finally{qe(n)}}return e.special[t](r),sa(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),sa(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function Q(e,t){return new Proxy({props:e,exclude:t,special:{},version:Lt(0),parent_effect:V},pl)}const hl={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(zr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let i=e.props[n];zr(i)&&(i=i());const a=Ct(i,t);if(a&&a.set)return a.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(zr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const i=Ct(n,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===dt||t===Hi)return!1;for(let r of e.props)if(zr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(zr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function re(...e){return new Proxy({props:e},hl)}function st(e,t,r,n){var I;var i=!yr||(r&Ds)!==0,a=(r&Bs)!==0,s=(r&Vs)!==0,o=n,l=!0,c=void 0,p=()=>s&&i?(c??(c=xr(n)),w(c)):(l&&(l=!1,o=s?zt(n):n),o);let d;if(a){var g=dt in e||Hi in e;d=((I=Ct(e,t))==null?void 0:I.set)??(g&&t in e?x=>e[t]=x:void 0)}var v,u=!1;a?[v,u]=vl(()=>e[t]):v=e[t],v===void 0&&n!==void 0&&(v=p(),d&&(i&&ro(),d(v)));var _;if(i?_=()=>{var x=e[t];return x===void 0?p():(l=!0,x)}:_=()=>{var x=e[t];return x!==void 0&&(o=void 0),x===void 0?o:x},i&&(r&Wi)===0)return _;if(d){var h=e.$$legacy;return(function(x,M){return arguments.length>0?((!i||!M||h||u)&&d(M?_():x),x):_()})}var b=!1,S=((r&zs)!==0?xr:Zn)(()=>(b=!1,_()));a&&w(S);var $=V;return(function(x,M){if(arguments.length>0){const T=M?w(S):i&&a?_t(x):x;return A(S,T),b=!0,o!==void 0&&(o=T),x}return At&&b||($.f&Ne)!==0?S.v:w(S)})}function Ka(e){se===null&&qs(),yr&&se.l!==null?_l(se).m.push(e):$n(()=>{const t=zt(e);if(typeof t=="function")return t})}function _l(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const gl="5";typeof window<"u"&&((ss=window.__svelte??(window.__svelte={})).v??(ss.v=new Set)).add(gl);const K=_t({ready:!1,cleanScreen:!1,panelOpen:!0,settingsOpen:!1,startupOpen:!0,focusSection:null,focusNonce:0,status:{}});function ml(e){K.panelOpen=!0,K.focusSection=e,K.focusNonce++}const ze=_t({});function Za(e){try{return structuredClone(e)}catch{return JSON.parse(JSON.stringify(e))}}function ye(e){var t,r,n;if(e==null)return e;try{return((n=(r=(t=window.XRA)==null?void 0:t.i18n)==null?void 0:r.t)==null?void 0:n.call(r,e))??e}catch{return e}}function Mt(e,t){const r=e.split(".");let n=ze;for(const i of r){if(n==null)return t;n=n[i]}return n===void 0?t:n}function yl(e){var r,n,i,a,s,o,l,c;const t=window.XRA;if(t){if(e.startsWith("background.")){(n=(r=t.background)==null?void 0:r.apply)==null||n.call(r);return}if(e==="ui.language"){(a=(i=t.i18n)==null?void 0:i.setLanguage)==null||a.call(i,ze.ui.language);return}if(e.startsWith("performance.")){window.XRA_render_fps_limit=Number(ze.performance.render_fps??60),window.XRA_gpu_preference=String(ze.performance.gpu_preference||"default"),window.XRA_preserve_drawing_buffer=ze.performance.preserve_drawing_buffer!==!1,window.XRA_antialias=ze.performance.antialias!=="off",(o=(s=t.events)==null?void 0:s.emit)==null||o.call(s,"performance",ze.performance);return}(c=(l=t.events)==null?void 0:l.emit)==null||c.call(l,"config-change",{path:e,value:Mt(e)})}}function Ft(e,t){var a,s;const r=window.XRA,n=e.split(".");let i=ze;for(let o=0;o<n.length-1;o++)i[n[o]]==null&&(i[n[o]]={}),i=i[n[o]];if(i[n[n.length-1]]=t,r!=null&&r.config){let o=r.config;for(let l=0;l<n.length-1;l++)o[n[l]]==null&&(o[n[l]]={}),o=o[n[l]];o[n[n.length-1]]=t}yl(e);try{(s=(a=r==null?void 0:r.profileService)==null?void 0:a.save)==null||s.call(a)}catch{}}function On(){var e,t,r;K.cleanScreen=!K.cleanScreen,document.body.classList.toggle("xra-total-clean-screen",K.cleanScreen);try{(r=(t=(e=window.XRA)==null?void 0:e.ui)==null?void 0:t.setHidden)==null||r.call(t,K.cleanScreen)}catch{}}function wl(){var e;try{Object.assign(ze,Za(((e=window.XRA)==null?void 0:e.config)||{}))}catch{}}function Qa(){var e;try{const t=(e=window.SA_bridge)==null?void 0:e.backend;t&&typeof t.status=="function"&&(K.status=t.status()||{})}catch{}}function bl(){const e=()=>window.XRA&&window.XRA.config?(Object.assign(ze,Za(window.XRA.config)),K.ready=!0,Qa(),window.addEventListener("keydown",t=>{t.key==="Escape"&&K.cleanScreen&&(t.preventDefault(),On())},!0),!0):!1;if(!e()){const t=setInterval(()=>{e()&&clearInterval(t)},200)}}const xl={camera:{title:"Camera",icon:"Camera"},devices:{title:"Devices",icon:"SlidersHorizontal"},pose_model:{title:"Pose model",icon:"PersonStanding"},performance:{title:"Performance",icon:"Zap"},tracking:{title:"Motion capture",icon:"Activity"},body:{title:"Body",icon:"PersonStanding"},collider:{title:"Body collider",icon:"Shield"},lip:{title:"Audio & Lip-sync",icon:"Mic"},background:{title:"Background",icon:"Image"},avatar:{title:"Character position (avatar only)",icon:"User"},second_avatar:{title:"Remote avatar (Studio Link)",icon:"Globe"},stage:{title:"3D Stage & Environment",icon:"Landmark"},recorder:{title:"Recording / capture",icon:"Video"},visual_effects:{title:"Visual effects",icon:"Sparkles"},debug:{title:"Diagnostics",icon:"Bug"},ui:{title:"UI & overlays",icon:"Monitor"}},Ja=["performance","tracking","body","collider","lip","background","stage","avatar","second_avatar","recorder","visual_effects","debug","ui","camera","devices","pose_model"],Sl=new Set(["left_settings","_custom_","_excluded_"]),$l=new Set(["camera.view_presets","camera.selected_view_preset","ui.preview_video","ui.preview_wireframe","ui.preview_debug","performance.auto_last_result","recorder.output_dir"]);function es(e){const t=String(e).replace(/_/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").trim();return t.charAt(0).toUpperCase()+t.slice(1)}const kl={"ui.language":{type:"select",options:()=>{var e,t;return((t=(e=window.XRA)==null?void 0:e.i18n)==null?void 0:t.LANGUAGES)||[["en","English"]]}},"background.mode":{type:"select",options:[["color","Color"],["image","Image"],["none","None (transparent · OBS)"]]},"background.color":{type:"color"},"background.path":{type:"text"},"performance.tracking_pipeline":{type:"select",label:"Tracking mode",options:[["FULL_BODY","Full Body"],["FACE","Face only"],["UPPER_BODY","Upper body"]]},"performance.render_resolution":{type:"select",options:[["720p","720p (HD · GPU Saving)"],["1080p","1080p (Full HD · Recommended)"],["1440p","1440p (2K · High resolution)"]]},"performance.render_fps":{type:"slider",min:15,max:240,step:1},"performance.gpu_preference":{type:"select",label:"Graphics card (GPU)",options:[["default","Default"],["high-performance","Dedicated GPU (High Performance)"],["low-power","Integrated GPU (Low Power)"]]},"performance.shadows":{type:"select",options:[["auto","Auto"],["on","Enabled"],["off","Disabled (GPU saving)"]]},"performance.antialias":{type:"select",label:"Anti-Aliasing (AA)",options:[["auto","Enabled (Hardware MSAA · Recommended)"],["off","Disabled"]]},"performance.spring_bone":{type:"select",label:"Hair/cloth physics (Spring Bone)",options:[["full","Full (every frame)"],["half","Half (1 frame out of 2 · Saving)"],["off","Off"]]},"performance.infer_mode":{type:"select",options:[["native","Native (Auto)"],["640x360","640×360 (Recommended · 30 FPS smooth)"],["640x480","640×480 (Standard 4:3 format)"],["1280x720","1280×720 (HD 720p · High precision)"]]},"performance.pose_fps":{type:"slider",min:5,max:30,step:1},"performance.hand_fps":{type:"slider",min:5,max:30,step:1},"performance.min_tracking_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_pose_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_face_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_joint_confidence":{type:"slider",min:.05,max:1,step:.05},"tracking.hand_recovery_mode":{type:"select",options:[["normal","Normal"],["aggressive","Aggressive"],["off","Off"]]},"tracking.hand_detection_sensitivity":{type:"select",options:[["high","High"],["normal","Normal"],["low","Low"]]},"tracking.stabilize_hand_percent":{type:"slider",min:0,max:100,step:1},"tracking.stabilize_arm":{type:"slider",min:0,max:100,step:1},"tracking.stabilize_arm_time":{type:"slider",min:0,max:2,step:.05},"tracking.native_smoothing":{type:"slider",min:0,max:1,step:.01},"tracking.body_bend_reduction":{type:"slider",min:0,max:1,step:.01},"tracking.upper_body_guard_strength":{type:"slider",min:0,max:1,step:.01},"tracking.guard_jump_deg":{type:"slider",min:5,max:120,step:1},"tracking.guard_hold_ms":{type:"slider",min:0,max:2e3,step:10},"tracking.guard_reacquire_deg":{type:"slider",min:5,max:120,step:1},"tracking.adaptive_smoothing_strength":{type:"slider",min:0,max:1,step:.01},"tracking.guard_confidence_min":{type:"slider",min:0,max:1,step:.01},"tracking.guard_release_ms":{type:"slider",min:0,max:2e3,step:10},"tracking.guard_mode":{type:"select",options:[["off","Off"],["auto","Auto"]]},"tracking.desk_torso_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_hips_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_legs_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_max_yaw_deg":{type:"slider",min:0,max:90,step:1},"tracking.desk_max_pitch_deg":{type:"slider",min:0,max:90,step:1},"tracking.desk_max_roll_deg":{type:"slider",min:0,max:90,step:1},"body.anchor_strength":{type:"slider",min:0,max:1,step:.01},"body.transition_ms":{type:"slider",min:0,max:2e3,step:10},"avatar.offset_x":{type:"slider",min:-5,max:5,step:.01},"avatar.offset_y":{type:"slider",min:-5,max:5,step:.01},"avatar.offset_z":{type:"slider",min:-5,max:5,step:.01},"avatar.rotation_y":{type:"slider",min:-180,max:180,step:1},"second_avatar.offset_x":{type:"slider",min:-20,max:20,step:.1},"second_avatar.offset_y":{type:"slider",min:-10,max:10,step:.1},"second_avatar.offset_z":{type:"slider",min:-10,max:10,step:.1},"second_avatar.rotation_y":{type:"slider",min:-180,max:180,step:1},"stage.scale":{type:"slider",min:.1,max:5,step:.01},"stage.rotation_x":{type:"slider",min:-180,max:180,step:1},"stage.rotation_y":{type:"slider",min:-180,max:180,step:1},"stage.rotation_z":{type:"slider",min:-180,max:180,step:1},"stage.offset_x":{type:"slider",min:-10,max:10,step:.05},"stage.offset_y":{type:"slider",min:-10,max:10,step:.05},"stage.offset_z":{type:"slider",min:-10,max:10,step:.05},"stage.scene_zoom":{type:"slider",min:.5,max:3,step:.01},"stage.lights_intensity":{type:"slider",min:0,max:3,step:.05},"collider.preset":{type:"select",options:[["CUSTOM","Custom"],["NONE","None"]]},"collider.reaction":{type:"select",options:[["z_push","Z push"],["bounce","Bounce"],["block","Block"]]},"collider.head":{type:"slider",min:0,max:200,step:1},"collider.chest":{type:"slider",min:0,max:200,step:1},"collider.waist":{type:"slider",min:0,max:200,step:1},"collider.hip":{type:"slider",min:0,max:200,step:1},"collider.front_clearance":{type:"slider",min:0,max:50,step:1},"lip.analysis_fps":{type:"slider",min:5,max:60,step:1},"lip.fft_size":{type:"select",label:"FFT size",options:[["256","256"],["512","512"],["1024","1024"],["2048","2048"]]},"lip.mic_mix":{type:"slider",min:0,max:1,step:.01},"lip.threshold":{type:"slider",min:0,max:.2,step:.001},"lip.response_gain":{type:"slider",min:0,max:3,step:.05},"lip.vowel_emphasis":{type:"slider",min:0,max:3,step:.05},"recorder.mode":{type:"select",label:"Recording source",options:[["video_audio","Video + Audio"],["video","Video only"],["audio","Audio only"]]},"recorder.audio_only_variant":{type:"select",label:"Audio only mode",options:[["both","Processed + RAW"],["processed","Processed"],["raw","RAW"]]},"recorder.capture_source":{type:"select",label:"Output source",options:[["classic_v74","Classic output · recommended"],["clean_scene","Clean scene output · experimental (no UI)"],["native_xr","XR native video only · fallback"]]},"recorder.output_format":{type:"select",options:[["webm","WebM"],["mp4","MP4"]]},"recorder.audio_profile":{type:"select",options:[["podcast","Podcast"],["call","Call (Browser echo/noise filters)"]]},"recorder.hardware_encode":{type:"select",options:[["auto","Auto"],["on","On"],["off","Off (CPU)"]]},"recorder.width":{type:"slider",min:320,max:3840,step:2},"recorder.height":{type:"slider",min:240,max:2160,step:2},"recorder.fps":{type:"slider",min:15,max:60,step:1},"recorder.gate_threshold_db":{type:"slider",min:-80,max:-5,step:.5},"recorder.gate_hold_ms":{type:"slider",min:0,max:1e3,step:10},"recorder.gate_release_ms":{type:"slider",min:0,max:1e3,step:10},"recorder.video_bps":{type:"slider",min:5e5,max:2e7,step:1e5},"recorder.audio_bps":{type:"slider",min:32e3,max:32e4,step:8e3},"recorder.segment_minutes":{type:"select",options:[["0","Off"],["30","Every 30 min"],["60","Every 60 min"]]},"recorder.raw_audio_format":{type:"select",options:[["flac","FLAC (lossless)"],["wav","WAV (large)"]]},"recorder.filename":{type:"text"},"camera.optimized":{type:"toggle"},"camera.width":{type:"slider",min:160,max:1920,step:2},"camera.height":{type:"slider",min:120,max:1080,step:2},"camera.fps":{type:"slider",min:5,max:60,step:1}};function El(e){const t=[];for(const[r,n]of Object.entries(e||{})){if(Sl.has(r)||!n||typeof n!="object"||Array.isArray(n))continue;const i=xl[r]||{},a=[];for(const[s,o]of Object.entries(n)){const l=`${r}.${s}`;if($l.has(l))continue;const c=kl[l]||{};if(c.hidden||o!==null&&typeof o=="object")continue;const p=c.type||(typeof o=="boolean"?"toggle":typeof o=="number"?"number":"text");a.push({type:p,path:l,label:c.label||es(s),min:c.min,max:c.max,step:c.step,options:c.options})}a.length&&t.push({id:r,title:i.title||es(r),icon:i.icon||"⚙",controls:a})}return t.sort((r,n)=>{const i=Ja.indexOf(r.id),a=Ja.indexOf(n.id);return(i<0?999:i)-(a<0?999:a)}),t}var Al=be("<option> </option>"),Ml=be("<select></select>"),Nl=be('<input type="range"/> <span class="xra-val"> </span>',1),Tl=be('<input type="checkbox"/>'),Ol=be('<input type="color"/>'),Pl=be('<input type="number"/>'),Cl=be('<input type="text"/>'),Rl=be('<label class="xra-row"><span class="xra-row-label"> </span> <!></label>');function Il(e,t){Xt(t,!0);const r=pt(()=>typeof t.control.options=="function"?t.control.options():t.control.options||[]);var n=Rl(),i=z(n),a=oe(i,!0),s=D(i,2);{var o=v=>{var u=Ml();Bt(u,21,()=>w(r),Ia,(h,b)=>{var S=Al(),$=oe(S,!0),I={};we(x=>{le($,x),I!==(I=w(b)[0])&&(S.value=(S.__value=I)??"")},[()=>ye(w(b)[1])]),E(h,S)});var _;en(u),we(h=>{_!==(_=h)&&(u.value=(u.__value=_)??"",ir(u,_))},[()=>Mt(t.control.path)]),ue("change",u,h=>Ft(t.control.path,h.currentTarget.value)),E(v,u)},l=v=>{var u=Nl(),_=W(u),h=D(_,2),b=oe(h,!0);we((S,$)=>{Ee(_,"min",t.control.min),Ee(_,"max",t.control.max),Ee(_,"step",t.control.step),Mn(_,S),le(b,$)},[()=>Mt(t.control.path,t.control.min),()=>Mt(t.control.path)]),ue("input",_,S=>Ft(t.control.path,Number(S.currentTarget.value))),E(v,u)},c=v=>{var u=Tl();we(_=>cl(u,_),[()=>!!Mt(t.control.path)]),ue("change",u,_=>Ft(t.control.path,_.currentTarget.checked)),E(v,u)},p=v=>{var u=Ol();we(_=>Mn(u,_),[()=>Mt(t.control.path)]),ue("input",u,_=>Ft(t.control.path,_.currentTarget.value)),E(v,u)},d=v=>{var u=Pl();we(_=>{Ee(u,"step",t.control.step||"any"),Mn(u,_)},[()=>Mt(t.control.path,0)]),ue("input",u,_=>Ft(t.control.path,Number(_.currentTarget.value))),E(v,u)},g=v=>{var u=Cl();we(_=>Mn(u,_),[()=>Mt(t.control.path,"")]),ue("change",u,_=>Ft(t.control.path,_.currentTarget.value)),E(v,u)};Dt(s,v=>{t.control.type==="select"?v(o):t.control.type==="slider"?v(l,1):t.control.type==="toggle"?v(c,2):t.control.type==="color"?v(p,3):t.control.type==="number"?v(d,4):t.control.type==="text"&&v(g,5)})}we(v=>le(a,v),[()=>ye(t.control.label)]),E(e,n),Yt()}Er(["change","input"]),oo();/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Ll={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const zl=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const ts=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();var Dl=Fo("<svg><!><!></svg>");function ne(e,t){const r=Q(t,["children","$$slots","$$events","$$legacy"]),n=Q(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Xt(t,!1);let i=st(t,"name",8,void 0),a=st(t,"color",8,"currentColor"),s=st(t,"size",8,24),o=st(t,"strokeWidth",8,2),l=st(t,"absoluteStrokeWidth",8,!1),c=st(t,"iconNode",24,()=>[]);dl();var p=Dl();Ga(p,(v,u,_)=>({...Ll,...v,...n,width:s(),height:s(),stroke:a(),"stroke-width":u,class:_}),[()=>zl(n)?void 0:{"aria-hidden":"true"},()=>(tr(l()),tr(o()),tr(s()),zt(()=>l()?Number(o())*24/Number(s()):o())),()=>(tr(ts),tr(i()),tr(r),zt(()=>ts("lucide-icon","lucide",i()?`lucide-${i()}`:"",r.class)))]);var d=z(p);Bt(d,1,c,Ia,(v,u)=>{var _=pt(()=>Vi(w(u),2));let h=()=>w(_)[0],b=()=>w(_)[1];var S=X(),$=W(S);Jo($,h,!0,(I,x)=>{Ga(I,()=>({...b()}))}),E(v,S)});var g=D(d);J(g,t,"default",{}),E(e,p),Yt()}function Bl(e,t){const r=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];ne(e,re({name:"camera"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=X(),o=W(s);J(o,t,"default",{}),E(i,s)},$$slots:{default:!0}}))}function Vl(e,t){const r=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M10 5H3"}],["path",{d:"M12 19H3"}],["path",{d:"M14 3v4"}],["path",{d:"M16 17v4"}],["path",{d:"M21 12h-9"}],["path",{d:"M21 19h-5"}],["path",{d:"M21 5h-7"}],["path",{d:"M8 10v4"}],["path",{d:"M8 12H3"}]];ne(e,re({name:"sliders-horizontal"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=X(),o=W(s);J(o,t,"default",{}),E(i,s)},$$slots:{default:!0}}))}function Fl(e,t){const r=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"5",r:"1"}],["path",{d:"m9 20 3-6 3 6"}],["path",{d:"m6 8 6 2 6-2"}],["path",{d:"M12 10v4"}]];ne(e,re({name:"person-standing"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=X(),o=W(s);J(o,t,"default",{}),E(i,s)},$$slots:{default:!0}}))}function Ul(e,t){const r=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];ne(e,re({name:"zap"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=X(),o=W(s);J(o,t,"default",{}),E(i,s)},$$slots:{default:!0}}))}function Hl(e,t){const r=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]];ne(e,re({name:"activity"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=X(),o=W(s);J(o,t,"default",{}),E(i,s)},$$slots:{default:!0}}))}function jl(e,t){const r=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];ne(e,re({name:"shield"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=X(),o=W(s);J(o,t,"default",{}),E(i,s)},$$slots:{default:!0}}))}function Wl(e,t){const r=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 19v3"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3"}]];ne(e,re({name:"mic"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=X(),o=W(s);J(o,t,"default",{}),E(i,s)},$$slots:{default:!0}}))}function Gl(e,t){const r=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]];ne(e,re({name:"image"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=X(),o=W(s);J(o,t,"default",{}),E(i,s)},$$slots:{default:!0}}))}function Xl(e,t){const r=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M10 18v-7"}],["path",{d:"M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"}],["path",{d:"M14 18v-7"}],["path",{d:"M18 18v-7"}],["path",{d:"M3 22h18"}],["path",{d:"M6 18v-7"}]];ne(e,re({name:"landmark"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=X(),o=W(s);J(o,t,"default",{}),E(i,s)},$$slots:{default:!0}}))}function Yl(e,t){const r=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];ne(e,re({name:"user"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=X(),o=W(s);J(o,t,"default",{}),E(i,s)},$$slots:{default:!0}}))}function ql(e,t){const r=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];ne(e,re({name:"globe"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=X(),o=W(s);J(o,t,"default",{}),E(i,s)},$$slots:{default:!0}}))}function Kl(e,t){const r=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]];ne(e,re({name:"video"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=X(),o=W(s);J(o,t,"default",{}),E(i,s)},$$slots:{default:!0}}))}function Zl(e,t){const r=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];ne(e,re({name:"sparkles"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=X(),o=W(s);J(o,t,"default",{}),E(i,s)},$$slots:{default:!0}}))}function Ql(e,t){const r=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 20v-9"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97"}],["path",{d:"M22 13h-4"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97"}],["path",{d:"M6 13H2"}],["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13"}]];ne(e,re({name:"bug"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=X(),o=W(s);J(o,t,"default",{}),E(i,s)},$$slots:{default:!0}}))}function Jl(e,t){const r=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]];ne(e,re({name:"monitor"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=X(),o=W(s);J(o,t,"default",{}),E(i,s)},$$slots:{default:!0}}))}function ec(e,t){const r=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"10",r:"8"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 22h10"}],["path",{d:"M12 22v-4"}]];ne(e,re({name:"webcam"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=X(),o=W(s);J(o,t,"default",{}),E(i,s)},$$slots:{default:!0}}))}function rs(e,t){const r=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}]];ne(e,re({name:"circle"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=X(),o=W(s);J(o,t,"default",{}),E(i,s)},$$slots:{default:!0}}))}function tc(e,t){const r=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];ne(e,re({name:"square"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=X(),o=W(s);J(o,t,"default",{}),E(i,s)},$$slots:{default:!0}}))}function rc(e,t){const r=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]];ne(e,re({name:"eye"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=X(),o=W(s);J(o,t,"default",{}),E(i,s)},$$slots:{default:!0}}))}function nc(e,t){const r=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}],["path",{d:"m2 2 20 20"}]];ne(e,re({name:"eye-off"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=X(),o=W(s);J(o,t,"default",{}),E(i,s)},$$slots:{default:!0}}))}function ic(e,t){const r=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];ne(e,re({name:"folder-open"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=X(),o=W(s);J(o,t,"default",{}),E(i,s)},$$slots:{default:!0}}))}function ac(e,t){const r=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];ne(e,re({name:"info"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=X(),o=W(s);J(o,t,"default",{}),E(i,s)},$$slots:{default:!0}}))}function sc(e,t){const r=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ne(e,re({name:"x"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=X(),o=W(s);J(o,t,"default",{}),E(i,s)},$$slots:{default:!0}}))}function oc(e,t){const r=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];ne(e,re({name:"settings"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=X(),o=W(s);J(o,t,"default",{}),E(i,s)},$$slots:{default:!0}}))}function lc(e,t){const r=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ne(e,re({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=X(),o=W(s);J(o,t,"default",{}),E(i,s)},$$slots:{default:!0}}))}function ot(e,t){const r={Camera:Bl,SlidersHorizontal:Vl,PersonStanding:Fl,Zap:Ul,Activity:Hl,Shield:jl,Mic:Wl,Image:Gl,Landmark:Xl,User:Yl,Globe:ql,Video:Kl,Sparkles:Zl,Bug:Ql,Monitor:Jl,Webcam:ec,Circle:rs,Square:tc,Eye:rc,EyeOff:nc,FolderOpen:ic,Info:ac,X:sc,Settings:oc,RefreshCw:lc};let n=st(t,"name",3,"Circle"),i=st(t,"size",3,16),a=st(t,"strokeWidth",3,2),s=st(t,"class",3,"");const o=pt(()=>r[n()]??rs);var l=X(),c=W(l);Qo(c,()=>w(o),(p,d)=>{d(p,{get size(){return i()},get"stroke-width"(){return a()},get class(){return s()}})}),E(e,l)}var cc=be('<div class="xra-sec-body"></div>'),fc=be('<details class="xra-sec"><summary><span class="xra-sec-title"><!> <span> </span></span> <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></summary> <!></details>');function uc(e,t){Xt(t,!0);const r="ui.sections_open";let n=q(_t(zt(()=>{var h;return((h=Mt(r,{}))==null?void 0:h[t.section.id])??!1}))),i;function a(){A(n,!w(n)),Ft(`${r}.${t.section.id}`,w(n))}$n(()=>{K.focusNonce,!(K.focusSection!==t.section.id||!K.panelOpen)&&(A(n,!0),Ft(`${r}.${t.section.id}`,!0),requestAnimationFrame(()=>i==null?void 0:i.scrollIntoView({block:"nearest",behavior:"smooth"})))});var s=fc(),o=z(s),l=z(o),c=z(l);ot(c,{get name(){return t.section.icon},size:15,class:"xra-sec-icon"});var p=D(c,2),d=oe(p,!0),g=D(l,2);let v;var u=D(o,2);{var _=h=>{var b=cc();Bt(b,21,()=>t.section.controls,S=>S.path,(S,$)=>{var I=X(),x=W(I);{var M=te=>{Il(te,{get control(){return w($)}})},T=pt(()=>!w($).when||w($).when(ze));Dt(x,te=>{w(T)&&te(M)})}E(S,I)}),E(h,b)};Dt(u,h=>{w(n)&&h(_)})}ul(s,h=>i=h,()=>i),we(h=>{s.open=w(n),le(d,h),v=Te(g,0,"xra-sec-chevron",null,v,{open:w(n)})},[()=>ye(t.section.title)]),ue("click",o,h=>{h.preventDefault(),a()}),E(e,s),Yt()}Er(["click"]);var nn=be('<option class="svelte-x8svx4"> </option>'),dc=be('<div class="warn svelte-x8svx4"> </div>'),vc=be('<div class="xra-startup svelte-x8svx4"><div class="card svelte-x8svx4"><div class="head svelte-x8svx4"><div class="svelte-x8svx4"><h2 class="svelte-x8svx4">XR Animator</h2> <div class="sub svelte-x8svx4"> </div></div></div> <div class="grid svelte-x8svx4"><label class="field svelte-x8svx4"><div class="sub svelte-x8svx4">Language</div> <select class="svelte-x8svx4"></select></label> <label class="field svelte-x8svx4"><div class="sub svelte-x8svx4">Master preset</div> <select class="svelte-x8svx4"></select></label></div> <div class="status svelte-x8svx4"> </div> <section class="camera svelte-x8svx4"><div class="camera-head svelte-x8svx4"><div class="camera-title svelte-x8svx4"> </div> <div> </div></div> <div class="camera-row svelte-x8svx4"><select class="svelte-x8svx4"><!></select> <button type="button" class="action svelte-x8svx4"><!></button></div> <!></section> <div class="sub bg svelte-x8svx4"> </div> <div class="avatar svelte-x8svx4"><div class="sub svelte-x8svx4"> </div> <button type="button" class="action svelte-x8svx4"> </button></div> <div class="foot svelte-x8svx4"><button type="button" class="action primary confirm svelte-x8svx4"> </button></div></div></div>');function pc(e,t){Xt(t,!0);const r=()=>window.XRA,n=m=>ye(m),i=["AUTO","ECO","LOW","BALANCED","QUALITY","HIGH","MAX","CUSTOM"];function a(){var m,y,k;try{(k=(y=(m=r())==null?void 0:m.profileService)==null?void 0:y.save)==null||k.call(y,0)}catch{}}const s=(()=>{var y,k;const m=(k=(y=r())==null?void 0:y.i18n)==null?void 0:k.LANGUAGES;return Array.isArray(m)&&m.length?m:[["auto","Auto / System"],["en","English"],["it","Italiano"]]})();let o=q("auto"),l=q("CUSTOM"),c=q(""),p=q("default"),d=q(_t([])),g=q(!1),v=q(""),u=q(!1),_=q(""),h=q(""),b=q("Loading avatar…"),S=q(!0),$=q(!1),I=q(!1),x=q(!1),M=q(!1),T=0,te=[];async function ie(m){const y=r();if(m=String(m||"CUSTOM").toUpperCase(),m==="CUSTOM"){y.config.performance.master_preset="CUSTOM",a(),A(c,"CUSTOM · ready");return}if(m==="AUTO"){A(c,"Benchmarking…");const k=await y.performance.benchmarkHardwareOnly();A(c,`AUTO → ${k.preset} (${k.fps.toFixed(1)} fps)`),await y.performance.applyPresetSafe(k.preset),y.config.performance.master_preset="AUTO",y.config.performance.auto_last_result=k,a();return}A(c,`${m}: applying…`),await y.performance.applyPresetSafe(m),A(c,`${m} · applied`)}function de(m=""){var L,F,Y;const y=(L=r())==null?void 0:L.nativeBridge,k=((F=y==null?void 0:y.activeCamera)==null?void 0:F.call(y))||{},N=!!((Y=y==null?void 0:y.cameraRunning)!=null&&Y.call(y));A(u,N),A(_,m||(N?`${n("ON")} · ${k.label||n("Default camera")}`:n("OFF")),!0)}async function Ue(m=!1){var k,N,L;const y=(k=r())==null?void 0:k.nativeBridge;if(y!=null&&y.enumerateCameras){A(x,!0);try{const F=await y.enumerateCameras({requestPermission:m}),Y=y.activeCamera()||{};A(d,(F||[]).map(Ae=>({deviceId:Ae.deviceId,label:Ae.label})),!0);const ce=Y.deviceId||((N=ze.devices)==null?void 0:N.camera_device_id)||"";A(v,w(d).some(Ae=>Ae.deviceId===ce)?ce:((L=w(d)[0])==null?void 0:L.deviceId)||"",!0),A(g,!0),de()}catch{A(g,!0),de(n("Camera unavailable"))}finally{A(x,!1)}}}async function Je(m){var L,F;const y=(L=r())==null?void 0:L.nativeBridge,k=((F=m==null?void 0:m.currentTarget)==null?void 0:F.value)??w(v),N=w(d).find(Y=>Y.deviceId===k);if(N){A(x,!0);try{const Y={deviceId:N.deviceId,label:N.label};y.cameraRunning()?await y.switchCamera(Y):await y.setCameraPreference(Y),de()}catch(Y){de("Error · "+Y.message)}finally{A(x,!1)}}}function fr(){var k,N,L,F,Y,ce,Ae,$e;const m=(L=(N=(k=r())==null?void 0:k.xraBackend)==null?void 0:N.snapshot)==null?void 0:L.call(N),y=(m==null?void 0:m.capture)||(($e=(Ae=(ce=(Y=(F=window.SA_bridge)==null?void 0:F.backend)==null?void 0:Y.status)==null?void 0:ce.call(Y))==null?void 0:Ae.backend)==null?void 0:$e.capture);if(y!=null&&y.camera_busy){const St=(y.busy_processes&&y.busy_processes.length?y.busy_processes:y.busy_process?[y.busy_process]:[]).filter(pr=>!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(String(pr).trim()));if(St.length)return{busy:!0,proc:St.join(", ")}}if(y!=null&&y.last_error&&y.last_error.includes("Webcam occupata")){const fe=y.last_error.match(/Webcam occupata da:\s*([^.]+)/i),St=fe?fe[1].trim():"";if(!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(St))return{busy:!0,proc:y.last_error}}return{busy:!1,proc:""}}function Rr(){var m,y,k,N,L,F,Y,ce,Ae;if(typeof((y=(m=r())==null?void 0:m.nativeBridge)==null?void 0:y.isAvatarReady)=="function")return r().nativeBridge.isAvatarReady();if((k=window.MMD_SA)!=null&&k.MMD_started){const $e=(F=(L=(N=window.MMD_SA)==null?void 0:N.THREEX)==null?void 0:L.get_model)==null?void 0:F.call(L,0);let fe=$e;if(($e==null?void 0:$e.type)==="MMD_dummy")try{fe=$e.model||null}catch{fe=null}const St=((Y=fe==null?void 0:fe.model)==null?void 0:Y.scene)||(fe==null?void 0:fe.mesh)||(fe==null?void 0:fe.scene)||null;if(fe&&!($e!=null&&$e.loading)&&!fe.loading&&!((Ae=(ce=window.MMD_SA)==null?void 0:ce.THREEX)!=null&&Ae._loading_model)&&St)return St.visible!==!1}return!1}function ur(){var y,k,N;const m=(y=r())==null?void 0:y.xraBackend;return!m||!m.active?!0:!!((N=(k=m.snapshot)==null?void 0:k.call(m))!=null&&N.ready)}function ft(){if(w(M)||!K.startupOpen)return;const m=fr();A(h,m.busy?`Webcam in use by another application (${m.proc}). Close it to start tracking.`:"",!0),Rr()?ur()?m.busy?(A(S,!0),A(b,n("Camera busy…"),!0)):w($)?A(S,!0):(A(S,!1),A(b,"START")):(A(S,!0),A(b,n("Connecting to backend…"),!0)):(A(S,!0),A(b,n("Loading avatar…"),!0))}async function xt(m){var k,N,L;const y=((k=m==null?void 0:m.currentTarget)==null?void 0:k.value)??w(l);A(l,y,!0),A(I,!0);try{await ie(y),r().events.emit("state",{path:"performance.master_preset",value:r().config.performance.master_preset}),wl()}catch(F){console.error("[XRA START]",F),A(c,"Preset error: "+F.message)}finally{A(I,!1),(L=(N=r().ui)==null?void 0:N.refresh)==null||L.call(N)}}function dr(m){var y,k,N,L;A(o,((y=m==null?void 0:m.currentTarget)==null?void 0:y.value)??w(o),!0),(L=(N=(k=r())==null?void 0:k.i18n)==null?void 0:N.setLanguage)==null||L.call(N,w(o))}async function He(){var m,y;try{await((y=(m=r().nativeBridge)==null?void 0:m.openVrmPicker)==null?void 0:y.call(m))}catch(k){r().toast("VRM loader: "+k.message,"error",4500)}}async function vr(m=!1){var k,N,L,F,Y,ce,Ae,$e;if(w(M)||w(S))return;A(M,!0),T&&(clearInterval(T),T=0),A($,!0),A(b,"Starting…");const y=r();if(a(),K.startupOpen=!1,(N=(k=y.ui)==null?void 0:k.refresh)==null||N.call(k),m)try{typeof y.whenNativeReady=="function"&&await y.whenNativeReady(15e3),(L=y.xraBackend)!=null&&L.waitUntilReady&&await y.xraBackend.waitUntilReady(6e3).catch(()=>{}),await((Y=(F=y.nativeBridge)==null?void 0:F.startNativeStreamer)==null?void 0:Y.call(F))}catch(fe){(Ae=(ce=globalThis.XRA_CAMERA_OWNERSHIP)==null?void 0:ce.isOwnershipError)!=null&&Ae.call(ce,fe)||(console.warn("[XRA START]","Auto-starting camera on START failed",fe),($e=y.toast)==null||$e.call(y,"Starting camera: "+fe.message,"warn",5e3))}}Ka(()=>{var y,k,N,L,F,Y,ce,Ae,$e,fe,St,pr,hs,_s,gs,ms,ys,Bn,ws,bs,xs,Ss;const m=r();A(c,n("Ready."),!0),A(o,((k=(y=m==null?void 0:m.config)==null?void 0:y.ui)==null?void 0:k.language)||"auto",!0),A(l,((L=(N=m==null?void 0:m.config)==null?void 0:N.performance)==null?void 0:L.master_preset)==="MINIMAL"?"ECO":((Y=(F=m==null?void 0:m.config)==null?void 0:F.performance)==null?void 0:Y.master_preset)||"CUSTOM",!0),A(p,((Ae=(ce=m==null?void 0:m.config)==null?void 0:ce.background)==null?void 0:Ae.path)||((fe=($e=m==null?void 0:m.config)==null?void 0:$e.background)==null?void 0:fe.color)||"default",!0);try{const $t=(hs=(pr=(St=window.SA_bridge)==null?void 0:St.backend)==null?void 0:pr.status)==null?void 0:hs.call(pr),Vn=(gs=(_s=window.System)==null?void 0:_s._browser)==null?void 0:gs.camera;(ys=(ms=$t==null?void 0:$t.backend)==null?void 0:ms.capture)!=null&&ys.running&&!(Vn!=null&&Vn.running)&&((ws=(Bn=window.SA_bridge.backend)==null?void 0:Bn.stop)==null||ws.call(Bn).catch(()=>{}))}catch{}de(),setTimeout(()=>Ue(!1),100),T=setInterval(ft,300),window.addEventListener("MMDStarted",ft),(bs=m.xraBackend)!=null&&bs.onStatus&&m.xraBackend.onStatus(ft),ft(),(Ss=(xs=m.whenNativeReady)==null?void 0:xs.call(m))==null||Ss.then(()=>{K.startupOpen&&Ue(!1)});for(const $t of["camera-started","camera-stopped","camera-switched"])te.push(m.events.on($t,()=>{K.startupOpen&&Ue(!1)}));for(const $t of["avatar-loading","avatar-changed","avatar-ready"])te.push(m.events.on($t,()=>ft()));return()=>{T&&clearInterval(T),window.removeEventListener("MMDStarted",ft);for(const $t of te)try{$t()}catch{}te=[]}});var In=vc(),Ir=z(In),fn=z(Ir),$i=z(fn),Ln=D(z($i),2),ki=oe(Ln,!0),C=D(fn,2),H=z(C),G=D(z(H),2);Bt(G,21,()=>s,([m,y])=>m,(m,y)=>{var k=pt(()=>Vi(w(y),2));let N=()=>w(k)[0],L=()=>w(k)[1];var F=nn(),Y=oe(F,!0),ce={};we(()=>{le(Y,L()),ce!==(ce=N())&&(F.value=(F.__value=ce)??"")}),E(m,F)});var ve;en(G);var et=D(H,2),Ce=D(z(et),2);Bt(Ce,20,()=>i,m=>m,(m,y)=>{var k=nn(),N=oe(k,!0),L={};we(()=>{le(N,y),L!==(L=y)&&(k.value=(k.__value=L)??"")}),E(m,k)});var je;en(Ce);var Pt=D(C,2),jt=oe(Pt,!0),zn=D(Pt,2),os=z(zn),ls=z(os),xc=oe(ls,!0),cs=D(ls,2);let fs;var Sc=oe(cs,!0),us=D(os,2),Wt=z(us),$c=z(Wt);{var kc=m=>{var y=nn(),k=oe(y,!0);y.value=y.__value="",we(N=>le(k,N),[()=>n("Loading cameras…")]),E(m,y)},Ec=m=>{var y=nn(),k=oe(y,!0);y.value=y.__value="",we(N=>le(k,N),[()=>n("No cameras found")]),E(m,y)},Ac=m=>{var y=X(),k=W(y);Bt(k,17,()=>w(d),N=>N.deviceId,(N,L)=>{var F=nn(),Y=oe(F,!0),ce={};we(()=>{le(Y,w(L).label),ce!==(ce=w(L).deviceId)&&(F.value=(F.__value=ce)??"")}),E(N,F)}),E(m,y)};Dt($c,m=>{w(g)?w(d).length?m(Ac,-1):m(Ec,1):m(kc)})}var Dn;en(Wt);var un=D(Wt,2),Mc=z(un);ot(Mc,{name:"RefreshCw",size:14});var Nc=D(us,2);{var Tc=m=>{var y=dc(),k=oe(y,!0);we(()=>le(k,w(h))),E(m,y)};Dt(Nc,m=>{w(h)&&m(Tc)})}var ds=D(zn,2),Oc=oe(ds),vs=D(ds,2),ps=z(vs),Pc=oe(ps,!0),Ei=D(ps,2),Cc=oe(Ei,!0),Rc=D(vs,2),Ai=z(Rc),Ic=oe(Ai,!0);we((m,y,k,N,L,F)=>{le(ki,m),G.disabled=w(M),ve!==(ve=w(o))&&(G.value=(G.__value=ve)??"",ir(G,ve)),Ce.disabled=w(I)||w(M),je!==(je=w(l))&&(Ce.value=(Ce.__value=je)??"",ir(Ce,je)),le(jt,w(c)),le(xc,y),fs=Te(cs,1,"camera-state svelte-x8svx4",null,fs,{on:w(u)}),le(Sc,w(_)),Wt.disabled=w(x),Dn!==(Dn=w(v))&&(Wt.value=(Wt.__value=Dn)??"",ir(Wt,Dn)),Ee(un,"title",k),Ee(un,"aria-label",N),un.disabled=w(x),le(Oc,`Background: ${w(p)??""}`),le(Pc,L),Ei.disabled=w(M),le(Cc,F),Ai.disabled=w(S)||w($),le(Ic,w(b))},[()=>n("Quick setup · changes apply immediately."),()=>n("Webcam"),()=>n("Refresh cameras"),()=>n("Refresh cameras"),()=>n("Avatar: the last VRM you chose is copied into avatars/ and restored at startup."),()=>n("Load / change VRM…")]),ue("change",G,dr),ue("change",Ce,xt),ue("change",Wt,Je),ue("click",un,()=>Ue(!0)),ue("click",Ei,He),ue("click",Ai,()=>vr(!0)),E(e,In),Yt()}Er(["change","click"]);var hc=be('<button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button>'),_c=be('<nav class="xra-dock group fixed left-2 top-1/2 z-[99990] flex w-[46px] max-h-[92vh] -translate-y-1/2 flex-col gap-0.5 overflow-hidden rounded-xl border border-white/10 bg-[var(--xra-ui-bg)] p-1.5 font-sans text-[12.5px] leading-snug text-[var(--xra-ui-fg)] shadow-[0_12px_40px_rgba(0,0,0,.55)] transition-[width] duration-200 hover:w-[232px]"><!> <div class="my-1 h-px bg-white/10"></div> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button></nav>');function gc(e,t){Xt(t,!0);const r=()=>window.XRA;let n=q(!1),i=q(!1),a=q(!1),s=0;function o(){var H,G,ve,et,Ce,je,Pt;const C=r();if(C){try{A(n,!!((G=(H=C.nativeBridge)==null?void 0:H.cameraRunning)!=null&&G.call(H)))}catch{}try{A(i,!!((Ce=(et=(ve=C.recorder)==null?void 0:ve.status)==null?void 0:et.call(ve))!=null&&Ce.active))}catch{}try{A(a,!!((Pt=(je=C.nativeBridge)==null?void 0:je.getPreviewVisibility)!=null&&Pt.call(je,"video")))}catch{}}}async function l(){var H,G;const C=r().nativeBridge;try{C.cameraRunning()?await C.stopNativeStreamer():await C.startNativeStreamer()}catch(ve){(G=(H=r()).toast)==null||G.call(H,"Tracking: "+ve.message,"warn",4e3)}finally{setTimeout(o,250)}}async function c(){var H,G,ve;const C=r().recorder;try{(H=C.status)!=null&&H.call(C).active?await C.stop():await C.start()}catch(et){(ve=(G=r()).toast)==null||ve.call(G,"Recording: "+et.message,"warn",4e3)}finally{setTimeout(o,250)}}function p(){var H,G;const C=!w(a);try{(G=(H=r().nativeBridge)==null?void 0:H.setPreviewVisibility)==null||G.call(H,"video",C)}catch{}A(a,C)}async function d(){var C,H,G,ve;try{await((H=(C=r().nativeBridge)==null?void 0:C.openVrmPicker)==null?void 0:H.call(C))}catch(et){(ve=(G=r()).toast)==null||ve.call(G,"VRM loader: "+et.message,"error",4500)}}function g(){var C,H;try{(H=(C=r().nativeBridge)==null?void 0:C.showAbout)==null||H.call(C)}catch{}}const v=[{id:"ui",icon:"Monitor",label:"UI Settings"},{id:"camera",icon:"Camera",label:"Webcam settings"},{id:"avatar",icon:"User",label:"Model settings"},{id:"second_avatar",icon:"Globe",label:"Studio link"},{id:"stage",icon:"Landmark",label:"Environment + Camera"},{id:"background",icon:"Image",label:"Background"},{id:"lip",icon:"Mic",label:"Audio"}],u="hover:bg-white/10",_="flex-1 overflow-hidden opacity-0 transition-opacity duration-150 group-hover:opacity-100";Ka(()=>(o(),s=setInterval(o,1e3),()=>clearInterval(s)));var h=_c(),b=z(h);Bt(b,17,()=>v,C=>C.id,(C,H)=>{var G=hc();Te(G,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var ve=z(G),et=z(ve);ot(et,{get name(){return w(H).icon},size:16});var Ce=D(ve,2);Te(Ce,1,nr(_));var je=oe(Ce,!0);we((Pt,jt)=>{Ee(G,"title",Pt),le(je,jt)},[()=>ye(w(H).label),()=>ye(w(H).label)]),ue("click",G,()=>ml(w(H).id)),E(C,G)});var S=D(b,4),$=z(S),I=z($);{let C=pt(()=>w(n)?"text-emerald-400":"");ot(I,{name:"Webcam",size:16,get class(){return w(C)}})}var x=D($,2);Te(x,1,nr(_));var M=oe(x,!0),T=D(S,2),te=z(T),ie=z(te);{let C=pt(()=>w(i)?"Square":"Circle"),H=pt(()=>w(i)?"text-red-400":"");ot(ie,{get name(){return w(C)},size:16,get class(){return w(H)}})}var de=D(te,2);Te(de,1,nr(_));var Ue=oe(de,!0),Je=D(T,2),fr=z(Je),Rr=z(fr);{let C=pt(()=>w(a)?"Eye":"EyeOff");ot(Rr,{get name(){return w(C)},size:16})}var ur=D(fr,2);Te(ur,1,nr(_));var ft=oe(ur,!0),xt=D(Je,2);Te(xt,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var dr=z(xt),He=z(dr);ot(He,{name:"FolderOpen",size:16});var vr=D(dr,2);Te(vr,1,nr(_));var In=oe(vr,!0),Ir=D(xt,2);Te(Ir,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var fn=z(Ir),$i=z(fn);ot($i,{name:"Info",size:16});var Ln=D(fn,2);Te(Ln,1,nr(_));var ki=oe(Ln,!0);we((C,H,G,ve,et,Ce,je,Pt,jt,zn)=>{Te(S,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${w(n)?"bg-emerald-500/20":u}`),Ee(S,"title",C),le(M,H),Te(T,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${w(i)?"bg-red-500/30 text-red-200":u}`),Ee(T,"title",G),le(Ue,ve),Te(Je,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${w(a)?"bg-emerald-500/20":u}`),Ee(Je,"title",et),le(ft,Ce),Ee(xt,"title",je),le(In,Pt),Ee(Ir,"title",jt),le(ki,zn)},[()=>ye("Tracking"),()=>w(n)?ye("Tracking on"):ye("Tracking off"),()=>ye("Record"),()=>w(i)?ye("Stop recording"):ye("Record"),()=>ye("Preview"),()=>w(a)?ye("Hide preview"):ye("Show preview"),()=>ye("Load / change VRM…"),()=>ye("Load / change VRM…"),()=>ye("About"),()=>ye("About")]),ue("click",S,l),ue("click",T,c),ue("click",Je,p),ue("click",xt,d),ue("click",Ir,g),E(e,h),Yt()}Er(["click"]);var mc=be('<aside class="xra-panel"><header class="xra-panel-head"><strong>XR Animator</strong> <span class="xra-spacer"></span> <button><!></button> <button title="Close panel"><!></button></header> <div class="xra-panel-body"></div></aside>'),yc=be('<button class="xra-panel-launcher"><!></button>'),wc=be("<!> <!> <!>",1);function bc(e,t){Xt(t,!0),bl();const r=pt(()=>El(ze));var n=wc(),i=W(n);{var a=d=>{pc(d,{})};Dt(i,d=>{K.ready&&K.startupOpen&&d(a)})}var s=D(i,2);{var o=d=>{gc(d,{})};Dt(s,d=>{K.ready&&!K.startupOpen&&d(o)})}var l=D(s,2);{var c=d=>{var $,I,x;var g=mc(),v=z(g),u=D(z(v),4);Ee(u,"title",((x=(I=($=window.XRA)==null?void 0:$.i18n)==null?void 0:I.t)==null?void 0:x.call(I,"Clean screen mode (Press Esc to restore)"))||"Clean screen (Esc)");var _=z(u);ot(_,{name:"EyeOff",size:15});var h=D(u,2),b=z(h);ot(b,{name:"X",size:15});var S=D(v,2);Bt(S,21,()=>w(r),M=>M.id,(M,T)=>{uc(M,{get section(){return w(T)}})}),ue("click",u,function(...M){On==null||On.apply(this,M)}),ue("click",h,()=>K.panelOpen=!1),E(d,g)},p=d=>{var g=yc(),v=z(g);ot(v,{name:"Settings",size:16}),ue("click",g,()=>{K.panelOpen=!0,Qa()}),E(d,g)};Dt(l,d=>{K.ready&&!K.startupOpen&&K.panelOpen?d(c):K.ready&&!K.startupOpen&&d(p,1)})}E(e,n),Yt()}Er(["click"]),window.XRA_SVELTE_UI=!0;function ns(){let e=document.getElementById("XRA_SVELTE");e||(e=document.createElement("div"),e.id="XRA_SVELTE",document.body.appendChild(e)),Go(bc,{target:e})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ns):ns()})();

})();
