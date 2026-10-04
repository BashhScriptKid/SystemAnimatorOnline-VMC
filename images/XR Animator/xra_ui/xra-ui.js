(function(){
var Vc=Object.defineProperty;var Es=de=>{throw TypeError(de)};var Bc=(de,se,Se)=>se in de?Vc(de,se,{enumerable:!0,configurable:!0,writable:!0,value:Se}):de[se]=Se;var at=(de,se,Se)=>Bc(de,typeof se!="symbol"?se+"":se,Se),Ni=(de,se,Se)=>se.has(de)||Es("Cannot "+Se);var u=(de,se,Se)=>(Ni(de,se,"read from private field"),Se?Se.call(de):se.get(de)),D=(de,se,Se)=>se.has(de)?Es("Cannot add the same private member more than once"):se instanceof WeakSet?se.add(de):se.set(de,Se),I=(de,se,Se,sr)=>(Ni(de,se,"write to private field"),sr?sr.call(de,Se):se.set(de,Se),Se),W=(de,se,Se)=>(Ni(de,se,"access private method"),Se);(function(){"use strict";var ss,Ir,tr,mr,Lr,zr,Dr,Ht,Vr,et,un,Ut,kt,Pt,Br,yr,q,Ti,Oi,_n,Pi,As,Ms,Hr,Fc,gn,os,dt,Ei,vt,wr,Ue,tt,je,rt,Ct,br,rr,Fr,fn,dn,jt,zn,ce,Hc,Uc,Ci,jc,Ri,mn,Un,Ii,Li,$t,Rt,nt,xr,vn,pn,Dn,ls;var se=Array.isArray,Se=Array.prototype.indexOf,sr=Array.prototype.includes,yn=Array.from,zi=Object.defineProperty,Gt=Object.getOwnPropertyDescriptor,Di=Object.getOwnPropertyDescriptors,Ns=Object.prototype,Ts=Array.prototype,jn=Object.getPrototypeOf,Vi=Object.isExtensible;function Ur(e){return typeof e=="function"}const Os=()=>{};function Ps(e){return e()}function Wn(e){for(var t=0;t<e.length;t++)e[t]()}function Bi(){var e,t,r=new Promise((n,i)=>{e=n,t=i});return{promise:r,resolve:e,reject:t}}function Fi(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const Ie=2,kr=4,jr=8,Gn=1<<24,gt=16,st=32,zt=64,Xn=128,Yn=256,mt=512,ke=1024,ye=2048,ot=4096,Be=8192,Fe=16384,$r=32768,wn=1<<25,Xt=65536,bn=1<<17,Cs=1<<18,Er=1<<19,Hi=1<<20,Et=1<<25,xn=1<<21,Ar=1<<22,Yt=1<<23,At=Symbol("$state"),Ui=Symbol("component"),ji=Symbol("legacy props"),Rs=Symbol(""),Sn=Symbol("attributes"),qn=Symbol("class"),Kn=Symbol("style"),Wr=Symbol("text"),Gr=new class extends Error{constructor(){super(...arguments);at(this,"name","StaleReactionError");at(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},kn=!!((ss=globalThis.document)!=null&&ss.contentType)&&globalThis.document.contentType.includes("xml"),Is=1,Ls=2,Wi=4,zs=8,Ds=16,Vs=1,Bs=2,Gi=4,Fs=8,Hs=16,Us=1,js=2,we=Symbol("uninitialized"),Xi="http://www.w3.org/1999/xhtml",Ws="http://www.w3.org/2000/svg",Gs="@attach";function Xs(){console.warn("https://svelte.dev/e/derived_inert")}function Ys(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function qs(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Yi(e){return e===this.v}function Ks(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function qi(e){return!Ks(e,this.v)}function Zs(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Qs(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Js(e,t,r){throw new Error("https://svelte.dev/e/each_key_duplicate")}function eo(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function to(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ro(e){throw new Error("https://svelte.dev/e/effect_orphan")}function no(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function io(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function ao(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function so(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function oo(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function lo(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Mr=!1,Wc=!1;function co(){Mr=!0}let ve=null;function Nr(e){ve=e}function qt(e,t=!1,r){ve={p:ve,i:!1,c:null,e:null,s:e,x:null,r:U,l:Mr&&!t?{s:null,u:null,$:[]}:null}}function Kt(e){var t=ve,r=t.e;if(r!==null){t.e=null;for(var n of r)ga(n)}return t.i=!0,ve=t.p,Zn(e)}function Zn(e={}){return zi(e,Ui,{value:!0}),e}function Xr(){return!Mr||ve!==null&&ve.l===null}let Tr=[];function uo(){var e=Tr;Tr=[],Wn(e)}function Mt(e){if(Tr.length===0){var t=Tr;queueMicrotask(()=>{t===Tr&&uo()})}Tr.push(e)}const fo=-7169;function ge(e,t){e.f=e.f&fo|t}function Qn(e){(e.f&mt)!==0||e.deps===null?ge(e,ke):ge(e,ot)}function Ki(e,t,r){(e.f&ye)!==0?t.add(e):(e.f&ot)!==0&&r.add(e),ge(e,ke)}function vo(e,t){if(t){const r=document.body;e.autofocus=!0,Mt(()=>{document.activeElement===r&&e.focus()})}}function Yr(e){var t=H,r=U;lt(null),ct(null);try{return e()}finally{lt(t),ct(r)}}function Zi(e,t,r,n){const i=Xr()?Or:Jn;var a=e.filter(h=>!h.settled),s=t.map(i);if(r.length===0&&a.length===0){n(s);return}var o=U,l=po(),c=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(h=>h.promise)):null;function v(h){if((o.f&Fe)===0){l();try{n([...s,...h])}catch(d){Tt(d,o)}$n()}}var p=Qi();if(r.length===0){c.then(()=>v([])).finally(p);return}function y(){Promise.all(r.map(h=>ho(h))).then(v).catch(h=>Tt(h,o)).finally(p)}c?c.then(()=>{l(),y(),$n()}):y()}function po(){var e=U,t=H,r=ve,n=R;return function(a=!0){ct(e),lt(t),Nr(r),a&&(e.f&Fe)===0&&(n==null||n.activate(),n==null||n.apply())}}function $n(e=!0){ct(null),lt(null),Nr(null),e&&(R==null||R.deactivate())}function Qi(){var e=U,t=e.b,r=R,n=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,r),r.increment(n,e),()=>{t==null||t.update_pending_count(-1,r),r.decrement(n,e)}}function Or(e){var t=Ie|ye;return U!==null&&(U.f|=Er),{ctx:ve,deps:null,effects:null,equals:Yi,f:t,fn:e,reactions:null,rv:0,v:we,wv:0,parent:U,ac:null}}const qr=Symbol("obsolete");function ho(e,t,r){let n=U;n===null&&Qs();var i=void 0,a=Zt(we),s=!H,o=new Set;return Mo(()=>{var h,d;var l=U,c=Bi();i=c.promise;try{Promise.resolve(e()).then(c.resolve,b=>{b!==Gr&&c.reject(b)}).finally($n)}catch(b){c.reject(b),$n()}var v=R;if(s){if((l.f&$r)!==0)var p=Qi();if((h=n.b)!=null&&h.is_rendered())(d=v.async_deriveds.get(l))==null||d.reject(qr);else for(const b of o.values())b.reject(qr);o.add(c),v.async_deriveds.set(l,c)}const y=(b,f=void 0)=>{p==null||p(),o.delete(c),f!==qr&&(v.activate(),f?(a.f|=Yt,Cr(a,f)):((a.f&Yt)!==0&&(a.f^=Yt),Cr(a,b)),v.deactivate())};c.promise.then(y,b=>y(null,b||"unknown"))}),ci(()=>{for(const l of o)l.reject(qr)}),new Promise(l=>{function c(v){function p(){v===i?l(a):c(i)}v.then(p,p)}c(i)})}function yt(e){const t=Or(e);return $a(t),t}function Jn(e){const t=Or(e);return t.equals=qi,t}function _o(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)Me(t[r])}}function ei(e){var t,r=U,n=e.parent;if(!Vt&&n!==null&&e.v!==we&&(n.f&(Fe|Be))!==0)return Xs(),e.v;ct(n);try{_o(e),t=Ta(e)}finally{ct(r)}return t}function Ji(e){var t=ei(e);if(!e.equals(t)&&(e.wv=Ma(),(!(R!=null&&R.is_fork)||e.deps===null)&&(R!==null?(R.capture(e,t,!0),Kr==null||Kr.capture(e,t,!0)):e.v=t,e.deps===null))){ge(e,ke);return}Vt||(Ae!==null?(li()||R!=null&&R.is_fork)&&Ae.set(e,t):Qn(e))}function go(e){var t;if(e.effects!==null)for(const r of e.effects)(r.teardown||r.ac)&&((t=r.teardown)==null||t.call(r),r.ac!==null&&Yr(()=>{r.ac.abort(Gr),r.ac=null}),r.fn!==null&&(r.teardown=Os),rn(r,0),fi(r))}function ea(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&Rr(t)}let ti=null,Pr=null,R=null,Kr=null,Ae=null,ri=null,ni=!1,Zr=null,En=null;var ta=0,Gc=new Set;let mo=1;const Ln=class Ln{constructor(){D(this,q);at(this,"id",mo++);D(this,Ir,!1);at(this,"linked",!0);D(this,tr,null);D(this,mr,null);at(this,"async_deriveds",new Map);at(this,"current",new Map);at(this,"previous",new Map);D(this,Lr,new Set);D(this,zr,new Set);D(this,Dr,0);D(this,Ht,new Map);D(this,Vr,null);D(this,et,[]);D(this,un,[]);D(this,Ut,new Set);D(this,kt,new Set);D(this,Pt,new Map);D(this,Br,new Set);at(this,"is_fork",!1);D(this,yr,!1);Pr===null?ti=Pr=this:(I(Pr,mr,this),I(this,tr,Pr)),Pr=this}skip_effect(t){u(this,Pt).has(t)||u(this,Pt).set(t,{d:[],m:[]}),u(this,Br).delete(t)}unskip_effect(t,r=n=>this.schedule(n)){var n=u(this,Pt).get(t);if(n){u(this,Pt).delete(t);for(var i of n.d)ge(i,ye),r(i);for(i of n.m)ge(i,ot),r(i)}u(this,Br).add(t)}capture(t,r,n=!1){t.v!==we&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&Yt)===0&&(this.current.set(t,[r,n]),Ae==null||Ae.set(t,r)),this.is_fork||(t.v=r)}activate(){R=this}deactivate(){R=null,Ae=null}flush(){try{ni=!0,R=this,W(this,q,_n).call(this)}finally{ta=0,ri=null,Zr=null,En=null,ni=!1,R=null,Ae=null,Nt.clear()}}discard(){var t;for(const r of u(this,zr))r(this);u(this,zr).clear();for(const r of this.async_deriveds.values())r.reject(qr);W(this,q,gn).call(this),(t=u(this,Vr))==null||t.resolve()}register_created_effect(t){u(this,un).push(t)}increment(t,r){if(I(this,Dr,u(this,Dr)+1),t){let n=u(this,Ht).get(r)??0;u(this,Ht).set(r,n+1)}}decrement(t,r){if(I(this,Dr,u(this,Dr)-1),t){let n=u(this,Ht).get(r)??0;n===1?u(this,Ht).delete(r):u(this,Ht).set(r,n-1)}u(this,yr)||(I(this,yr,!0),Mt(()=>{I(this,yr,!1),this.linked&&this.flush()}))}transfer_effects(t,r){for(const n of t)u(this,Ut).add(n);for(const n of r)u(this,kt).add(n);t.clear(),r.clear()}oncommit(t){u(this,Lr).add(t)}ondiscard(t){u(this,zr).add(t)}settled(){return(u(this,Vr)??I(this,Vr,Bi())).promise}static ensure(){if(R===null){const t=R=new Ln;ni||Mt(()=>{u(t,Ir)||t.flush()})}return R}apply(){{Ae=null;return}}schedule(t){var r;if(ri=t,(r=t.b)!=null&&r.is_pending&&(t.f&(kr|jr|Gn))!==0&&(t.f&$r)===0){t.b.defer_effect(t);return}u(this,et).push(t)}};Ir=new WeakMap,tr=new WeakMap,mr=new WeakMap,Lr=new WeakMap,zr=new WeakMap,Dr=new WeakMap,Ht=new WeakMap,Vr=new WeakMap,et=new WeakMap,un=new WeakMap,Ut=new WeakMap,kt=new WeakMap,Pt=new WeakMap,Br=new WeakMap,yr=new WeakMap,q=new WeakSet,Ti=function(){if(this.is_fork)return!0;for(const n of u(this,Ht).keys()){for(var t=n,r=!1;t.parent!==null;){if(u(this,Pt).has(t)){r=!0;break}t=t.parent}if(!r)return!0}return!1},Oi=function(){var t=[];for(const a of u(this,et))if(!((a.f&Fe)!==0||(a.f&(ye|ot))===0)){for(var r=a,n=!1;r.parent!==null;){r=r.parent;var i=r.f;if((i&(zt|st))!==0){if((i&ke)===0){n=!0;break}r.f^=ke}}n||t.push(r)}return I(this,et,[]),t},_n=function(){var o,l,c,v;I(this,Ir,!0);for(const p of u(this,Ut))u(this,kt).delete(p),ge(p,ye),this.schedule(p);for(const p of u(this,kt))ge(p,ot),this.schedule(p);this.apply();for(var t=Zr=[],r=[],n=En=[];u(this,et).length>0;){ta++>1e3&&(W(this,q,gn).call(this),yo());for(const p of W(this,q,Oi).call(this))try{W(this,q,Pi).call(this,p,t,r)}catch(y){throw aa(p),W(this,q,Ti).call(this)||this.discard(),y}}if(R=null,n.length>0){var i=Ln.ensure();for(const p of n)i.schedule(p)}if(Zr=null,En=null,W(this,q,Ti).call(this)){W(this,q,Hr).call(this,r),W(this,q,Hr).call(this,t);for(const[p,y]of u(this,Pt))ia(p,y);n.length>0&&W(o=R,q,_n).call(o);return}const a=W(this,q,As).call(this);if(a){W(this,q,Hr).call(this,r),W(this,q,Hr).call(this,t),W(l=a,q,Ms).call(l,this);return}u(this,Ut).clear(),u(this,kt).clear();for(const p of u(this,Lr))p(this);u(this,Lr).clear(),Kr=this,ra(r),ra(t),Kr=null,(c=u(this,Vr))==null||c.resolve();var s=R;if(u(this,Dr)===0&&(u(this,et).length===0||s!==null)&&W(this,q,gn).call(this),u(this,et).length>0)if(s!==null){for(const p of u(this,et))u(s,et).push(p);I(this,et,[])}else s=this;s!==null&&(Nt.clear(),W(v=s,q,_n).call(v))},Pi=function(t,r,n){t.f^=ke;for(var i=t.first;i!==null;){var a=i.f,s=(a&(st|zt))!==0,o=s&&(a&ke)!==0,l=o||(a&Be)!==0||u(this,Pt).has(i);if(!l&&i.fn!==null){s?i.f^=ke:(a&kr)!==0?r.push(i):tn(i)&&((a&gt)!==0&&u(this,kt).add(i),Rr(i));var c=i.first;if(c!==null){i=c;continue}}for(;i!==null;){var v=i.next;if(v!==null){i=v;break}i=i.parent}}},As=function(){for(var t=u(this,tr);t!==null;){if(!t.is_fork){for(const[r,[,n]]of this.current)if(t.current.has(r)&&!n)return t}t=u(t,tr)}return null},Ms=function(t){var n;for(const[i,a]of t.current)!this.previous.has(i)&&t.previous.has(i)&&this.previous.set(i,t.previous.get(i)),this.current.set(i,a);for(const[i,a]of t.async_deriveds){const s=this.async_deriveds.get(i);s&&a.promise.then(s.resolve).catch(s.reject)}t.async_deriveds.clear(),this.transfer_effects(u(t,Ut),u(t,kt));const r=i=>{var a=i.reactions;if(a!==null&&!((i.f&Ie)!==0&&(i.f&(ye|ot))===0))for(const l of a){var s=l.f;if((s&Ie)!==0)r(l);else{var o=l;s&(Ar|gt)&&!this.async_deriveds.has(o)&&(u(this,kt).delete(o),ge(o,ye),this.schedule(o))}}};for(const i of this.current.keys())r(i);this.oncommit(()=>t.discard()),W(n=t,q,gn).call(n),R=this,W(this,q,_n).call(this)},Hr=function(t){for(var r=0;r<t.length;r+=1)Ki(t[r],u(this,Ut),u(this,kt))},Fc=function(){var p,y;for(let h=ti;h!==null;h=u(h,mr)){var t=h.id<this.id,r=[];for(const[d,[b,f]]of this.current){if(h.current.has(d)){var n=h.current.get(d)[0];if(t&&b!==n)h.current.set(d,[b,f]);else continue}r.push(d)}if(t)for(const[d,b]of this.async_deriveds){const f=h.async_deriveds.get(d);f&&b.promise.then(f.resolve).catch(f.reject)}var i=[...h.current.keys()].filter(d=>!h.current.get(d)[1]);if(!(!u(h,Ir)||i.length===0)){var a=i.filter(d=>!this.current.has(d));if(a.length===0)t&&h.discard();else if(r.length>0){if(t)for(const d of u(this,Br))h.unskip_effect(d,b=>{var f;(b.f&(gt|Ar))!==0?h.schedule(b):W(f=h,q,Hr).call(f,[b])});h.activate();var s=new Set,o=new Map;for(var l of r)na(l,a,s,o);o=new Map;var c=[...h.current].filter(([d,b])=>{const f=this.current.get(d);return f?f[0]!==b[0]||f[1]!==b[1]:!0}).map(([d])=>d);if(c.length>0)for(const d of u(this,un))(d.f&(Fe|Be|bn))===0&&ii(d,c,o)&&((d.f&(Ar|gt))!==0?(ge(d,ye),h.schedule(d)):u(h,Ut).add(d));if(u(h,et).length>0&&!u(h,yr)){h.apply();for(var v of W(p=h,q,Oi).call(p))W(y=h,q,Pi).call(y,v,[],[])}h.deactivate()}}}},gn=function(){if(this.linked){var t=u(this,tr),r=u(this,mr);t===null?ti=r:I(t,mr,r),r===null?Pr=t:I(r,tr,t),this.linked=!1}};let or=Ln;function yo(){try{no()}catch(e){Tt(e,ri)}}let wt=null;function ra(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(Fe|Be))===0&&tn(n)&&(wt=new Set,Rr(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&ba(n),(wt==null?void 0:wt.size)>0)){Nt.clear();for(const i of wt){if((i.f&(Fe|Be))!==0)continue;const a=[i];let s=i.parent;for(;s!==null;)wt.has(s)&&(wt.delete(s),a.push(s)),s=s.parent;for(let o=a.length-1;o>=0;o--){const l=a[o];(l.f&(Fe|Be))===0&&Rr(l)}}wt.clear()}}wt=null}}function na(e,t,r,n){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(const i of e.reactions){const a=i.f;(a&Ie)!==0?na(i,t,r,n):(a&(Ar|gt))!==0&&(a&ye)===0&&ii(i,t,n)&&(ge(i,ye),ai(i))}}function ii(e,t,r){const n=r.get(e);if(n!==void 0)return n;if(e.deps!==null)for(const i of e.deps){if(sr.call(t,i))return!0;if((i.f&Ie)!==0&&ii(i,t,r))return r.set(i,!0),!0}return r.set(e,!1),!1}function ai(e){R.schedule(e)}function ia(e,t){if(!((e.f&st)!==0&&(e.f&ke)!==0)){(e.f&ye)!==0?t.d.push(e):(e.f&ot)!==0&&t.m.push(e),ge(e,ke);for(var r=e.first;r!==null;)ia(r,t),r=r.next}}function aa(e){ge(e,ke);for(var t=e.first;t!==null;)aa(t),t=t.next}let An=new Set;const Nt=new Map;let sa=!1;function Zt(e,t){var r={f:0,v:e,reactions:null,equals:Yi,rv:0,wv:0};return r}function Y(e,t){const r=Zt(e);return $a(r),r}function wo(e,t=!1,r=!0){var i;const n=Zt(e);return t||(n.equals=qi),Mr&&r&&ve!==null&&ve.l!==null&&((i=ve.l).s??(i.s=[])).push(n),n}function M(e,t,r=!1){H!==null&&(!xt||(H.f&bn)!==0)&&Xr()&&(H.f&(Ie|gt|Ar|bn))!==0&&(Ot===null||!Ot.has(e))&&oo();let n=r?Ge(t):t;return Cr(e,n,En)}var lr=null,si=0;function Cr(e,t,r=null){if(!e.equals(t)){Vt?Nt.set(e,t):Nt.has(e)||Nt.set(e,e.v);var n=or.ensure();if(n.capture(e,t),(e.f&Ie)!==0){const i=e;(e.f&ye)!==0&&ei(i),Ae===null&&Qn(i)}e.wv=Ma(),lr=null,si=0,la(e,ye,r),lr=null,Xr()&&U!==null&&(U.f&ke)!==0&&(U.f&(st|zt))===0&&(ut===null?Oo([e]):ut.push(e)),!n.is_fork&&An.size>0&&!sa&&bo()}return t}function bo(){sa=!1;for(const e of An){(e.f&ke)!==0&&ge(e,ot);let t;try{t=tn(e)}catch{t=!0}t&&Rr(e)}An.clear()}function oa(e,t=1){var r=g(e),n=t===1?r++:r--;return M(e,r),n}function Qr(e){M(e,e.v+1)}function la(e,t,r){var n=e.reactions;if(n!==null){var i=Xr(),a=n.length;if(si+=a,si>1e5&&lr===null&&(lr=new Set),lr!==null){if(lr.has(e))return;lr.add(e)}for(var s=0;s<a;s++){var o=n[s],l=o.f;if(!(!i&&o===U)){var c=(l&ye)===0;if(c&&ge(o,t),(l&bn)!==0)An.add(o);else if((l&Ie)!==0){var v=o;Ae==null||Ae.delete(v),la(v,ot,r)}else if(c){var p=o;(l&gt)!==0&&wt!==null&&wt.add(p),r!==null?r.push(p):ai(p)}}}}}function Ge(e){if(typeof e!="object"||e===null||At in e||Ui in e)return e;const t=jn(e);if(t!==Ns&&t!==Ts)return e;var r=new Map,n=se(e),i=Y(0),a=dr,s=o=>{if(dr===a)return o();var l=H,c=dr;lt(null),Aa(a);var v=o();return lt(l),Aa(c),v};return n&&r.set("length",Y(e.length)),new Proxy(e,{defineProperty(o,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&ao();var v=r.get(l);return v===void 0?s(()=>{var p=Y(c.value);return r.set(l,p),p}):M(v,c.value,!0),!0},deleteProperty(o,l){var c=r.get(l);if(c===void 0){if(l in o){const v=s(()=>Y(we));r.set(l,v),Qr(i)}}else M(c,we),Qr(i);return!0},get(o,l,c){var h;if(l===At)return e;var v=r.get(l),p=l in o;if(v===void 0&&(!p||(h=Gt(o,l))!=null&&h.writable)&&(v=s(()=>{var d=Ge(p?o[l]:we),b=Y(d);return b}),r.set(l,v)),v!==void 0){var y=g(v);return y===we?void 0:y}return Reflect.get(o,l,c)},getOwnPropertyDescriptor(o,l){var y;(y=this.has)==null||y.call(this,o,l);var c=Reflect.getOwnPropertyDescriptor(o,l),v=r.get(l);if(v!==void 0){var p=g(v);if(p===we)return;if(c&&"value"in c)c.value=p;else return{enumerable:!0,configurable:!0,value:p,writable:!0}}return c},has(o,l){var y;if(l===At)return!0;var c=r.get(l),v=c!==void 0&&c.v!==we||Reflect.has(o,l);if(c!==void 0||U!==null&&(!v||(y=Gt(o,l))!=null&&y.writable)){c===void 0&&(c=s(()=>{var h=v?Ge(o[l]):we,d=Y(h);return d}),r.set(l,c));var p=g(c);if(p===we)return!1}return v},set(o,l,c,v){var k;var p=r.get(l),y=l in o;if(n&&l==="length")for(var h=c;h<p.v;h+=1){var d=r.get(h+"");d!==void 0?M(d,we):h in o&&(d=s(()=>Y(we)),r.set(h+"",d))}if(p===void 0)(!y||(k=Gt(o,l))!=null&&k.writable)&&(p=s(()=>Y(void 0)),M(p,Ge(c)),r.set(l,p));else{y=p.v!==we;var b=s(()=>Ge(c));M(p,b)}var f=Reflect.getOwnPropertyDescriptor(o,l);if(f!=null&&f.set&&f.set.call(v,c),!y){if(n&&typeof l=="string"){var _=r.get("length"),x=Number(l);Number.isInteger(x)&&x>=_.v&&M(_,x+1)}Qr(i)}return!0},ownKeys(o){g(i);var l=Reflect.ownKeys(o).filter(p=>{var y=r.get(p);return y===void 0||y.v!==we});for(var[c,v]of r)v.v!==we&&!(c in o)&&l.push(c);return l},setPrototypeOf(){so()}})}function ca(e){try{if(e!==null&&typeof e=="object"&&At in e)return e[At]}catch{}return e}function ua(e,t){return Object.is(ca(e),ca(t))}var fa,da,va,pa;function xo(){if(fa===void 0){fa=window,da=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;va=Gt(t,"firstChild").get,pa=Gt(t,"nextSibling").get,Vi(e)&&(e[qn]=void 0,e[Sn]=null,e[Kn]=void 0,e.__e=void 0),Vi(r)&&(r[Wr]=void 0)}}function Dt(e=""){return document.createTextNode(e)}function cr(e){return va.call(e)}function Jr(e){return pa.call(e)}function L(e,t){return cr(e)}function K(e,t=!1){{var r=cr(e);return r instanceof Comment&&r.data===""?Jr(r):r}}function Z(e,t=!1){return cr(e)}function P(e,t=1,r=!1){let n=e;for(;t--;)n=Jr(n);return n}function So(e){e.textContent=""}function ha(){return!1}function oi(e,t,r){return t==null||t===Xi?r?document.createElement(e,{is:r}):document.createElement(e):r?document.createElementNS(t,e,{is:r}):document.createElementNS(t,e)}function ko(e){var t=U;if(t===null)return H.f|=Yt,e;if((t.f&$r)===0&&(t.f&kr)===0)throw e;Tt(e,t)}function Tt(e,t){if(!(t!==null&&(t.f&Fe)!==0)){for(;t!==null;){if((t.f&Xn)!==0&&(t.f&(Fe|wn))===0){if((t.f&$r)===0)throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw e}}function _a(e){U===null&&(H===null&&ro(),to()),Vt&&eo()}function $o(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function bt(e,t){var r=U;r!==null&&(r.f&Be)!==0&&(e|=Be);var n={ctx:ve,deps:null,nodes:null,f:e|ye|mt,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};R==null||R.register_created_effect(n);var i=n;if((e&kr)!==0)Zr!==null?Zr.push(n):or.ensure().schedule(n);else if(t!==null){try{Rr(n)}catch(s){throw Me(n),s}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&Er)===0&&(i=i.first,(e&gt)!==0&&(e&Xt)!==0&&i!==null&&(i.f|=Xt))}if(i!==null&&(i.parent=r,r!==null&&$o(i,r),H!==null&&(H.f&Ie)!==0&&(e&zt)===0)){var a=H;(a.effects??(a.effects=[])).push(i)}return n}function li(){return H!==null&&!xt}function ci(e){const t=bt(jr,null);return ge(t,ke),t.teardown=e,t}function Mn(e){_a();var t=U.f,r=!H&&(t&st)!==0&&ve!==null&&!ve.i;if(r){var n=ve;(n.e??(n.e=[])).push(e)}else return ga(e)}function ga(e){return bt(kr|Hi,e)}function Eo(e){return _a(),bt(jr|Hi,e)}function Ao(e){or.ensure();const t=bt(zt|Er,e);return(r={})=>new Promise(n=>{r.outro?ur(t,()=>{Me(t),n(void 0)}):(Me(t),n(void 0))})}function ui(e){return bt(kr,e)}function Mo(e){return bt(Ar|Er,e)}function ma(e,t=0){return bt(jr|t,e)}function be(e,t=[],r=[],n=[]){Zi(n,t,r,i=>{bt(jr,()=>{e(...i.map(g))})})}function en(e,t=0){var r=bt(gt|t,e);return r}function ya(e,t=0){var r=bt(Gn|t,e);return r}function Xe(e){return bt(st|Er,e)}function wa(e){var t=e.teardown;if(t!==null){const r=Vt,n=H;ka(!0),lt(null);try{t.call(null)}catch(i){Tt(i,e.parent)}finally{ka(r),lt(n)}}}function fi(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const i=r.ac;i!==null&&Yr(()=>{i.abort(Gr)});var n=r.next;(r.f&zt)!==0?r.parent=null:Me(r,t),r=n}}function No(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&st)===0&&Me(t),t=r}}function Me(e,t=!0){var r=!1;(t||(e.f&Cs)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(To(e.nodes.start,e.nodes.end),r=!0),e.f|=wn,fi(e,t&&!r),rn(e,0);var n=e.nodes&&e.nodes.t;if(n!==null)for(const a of n)a.stop();wa(e),e.f^=wn,e.f|=Fe;var i=e.parent;i!==null&&i.first!==null&&ba(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function To(e,t){for(;e!==null;){var r=e===t?null:Jr(e);e.remove(),e=r}}function ba(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function ur(e,t,r=!0){var n=[];e.f|=Yn,xa(e,n,!0);var i=()=>{r&&Me(e),t&&t()},a=n.length;if(a>0){var s=()=>--a||i();for(var o of n)o.out(s)}else i()}function xa(e,t,r){if((e.f&Be)===0){e.f^=Be;var n=e.nodes&&e.nodes.t;if(n!==null)for(const o of n)(o.is_global||r)&&t.push(o);for(var i=e.first;i!==null;){var a=i.next;if((i.f&zt)===0){var s=(i.f&Xt)!==0||(i.f&st)!==0&&(e.f&gt)!==0;xa(i,t,s?r:!1)}i=a}}}function Nn(e){e.f&=~Yn,Sa(e,!0)}function Sa(e,t){if((e.f&Yn)===0&&(e.f&Be)!==0){e.f^=Be,(e.f&ke)===0&&(ge(e,ye),or.ensure().schedule(e));for(var r=e.first;r!==null;){var n=r.next,i=(r.f&Xt)!==0||(r.f&st)!==0;Sa(r,i?t:!1),r=n}var a=e.nodes&&e.nodes.t;if(a!==null)for(const s of a)(s.is_global||t)&&s.in()}}function di(e,t){if(e.nodes)for(var r=e.nodes.start,n=e.nodes.end;r!==null;){var i=r===n?null:Jr(r);t.append(r),r=i}}let Tn=!1,Vt=!1;function ka(e){Vt=e}let H=null,xt=!1;function lt(e){H=e}let U=null;function ct(e){U=e}let Ot=null;function $a(e){H!==null&&((H.f&xn)!==0||(H.f&Ie)!==0)&&(Ot??(Ot=new Set)).add(e)}let Ye=null,Qe=0,ut=null;function Oo(e){ut=e}let Ea=1,fr=0,dr=fr;function Aa(e){dr=e}function Ma(){return++Ea}function tn(e){var t=e.f;if((t&ye)!==0)return!0;if((t&ot)!==0){for(var r=e.deps,n=r.length,i=0;i<n;i++){var a=r[i];if(tn(a)&&Ji(a),a.wv>e.wv)return!0}(t&mt)!==0&&Ae===null&&ge(e,ke)}return!1}function Na(e,t,r=!0){var n=e.reactions;if(n!==null&&!(Ot!==null&&Ot.has(e)))for(var i=0;i<n.length;i++){var a=n[i];(a.f&Ie)!==0?Na(a,t,!1):t===a&&(r?ge(a,ye):(a.f&ke)!==0&&ge(a,ot),ai(a))}}function Ta(e){var t=Ye,r=Qe,n=ut,i=H,a=Ot,s=ve,o=xt,l=dr,c=e.f;Ye=null,Qe=0,ut=null,H=(c&(st|zt))===0?e:null,Ot=null,Nr(e.ctx),xt=!1,dr=++fr,e.ac!==null&&(Yr(()=>{e.ac.abort(Gr)}),e.ac=null);try{e.f|=xn;var v=e.fn,p=v();e.f|=$r;var y=Oa(e);if(Xr()&&ut!==null&&!xt&&y!==null&&(e.f&(Ie|ot|ye))===0)for(var h=0;h<ut.length;h++)Na(ut[h],e);if(i!==null&&i!==e){if(fr++,i.deps!==null)for(let d=0;d<r;d+=1)i.deps[d].rv=fr;if(t!==null)for(const d of t)d.rv=fr;ut!==null&&(n===null?n=ut:n.push(...ut))}return(e.f&Yt)!==0&&(e.f^=Yt),p}catch(d){return Oa(e),ko(d)}finally{e.f^=xn,Ye=t,Qe=r,ut=n,H=i,Ot=a,Nr(s),xt=o,dr=l}}function Oa(e){var i;var t=e.deps,r=R==null?void 0:R.is_fork;if(Ye!==null){var n;if(r||rn(e,Qe),t!==null&&Qe>0)for(t.length=Qe+Ye.length,n=0;n<Ye.length;n++)t[Qe+n]=Ye[n];else e.deps=t=Ye;if(li()&&(e.f&mt)!==0)for(n=Qe;n<t.length;n++)((i=t[n]).reactions??(i.reactions=[])).push(e)}else!r&&t!==null&&Qe<t.length&&(rn(e,Qe),t.length=Qe);return t}function Po(e,t){let r=t.reactions;if(r!==null){var n=Se.call(r,e);if(n!==-1){var i=r.length-1;i===0?r=t.reactions=null:(r[n]=r[i],r.pop())}}if(r===null&&(t.f&Ie)!==0&&(Ye===null||!sr.call(Ye,t))){var a=t;(a.f&mt)!==0&&(a.f^=mt),a.v!==we&&Qn(a),a.ac!==null&&Yr(()=>{a.ac.abort(Gr),a.ac=null,ge(a,ye)}),go(a),rn(a,0)}}function rn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Po(e,r[n])}function Rr(e){var t=e.f;if((t&Fe)===0){ge(e,ke);var r=U,n=Tn;U=e,Tn=(t&(st|zt))===0;try{(t&(gt|Gn))!==0?No(e):fi(e),wa(e);var i=Ta(e);e.teardown=typeof i=="function"?i:null,e.wv=Ea;var a}finally{Tn=n,U=r}}}function g(e){var t=e.f,r=(t&Ie)!==0;if(H!==null&&!xt){var n=U!==null&&(U.f&Fe)!==0;if(!n&&(Ot===null||!Ot.has(e))){var i=H.deps;if((H.f&xn)!==0)e.rv<fr&&(e.rv=fr,Ye===null&&i!==null&&i[Qe]===e?Qe++:Ye===null?Ye=[e]:Ye.push(e));else{H.deps??(H.deps=[]),sr.call(H.deps,e)||H.deps.push(e);var a=e.reactions;a===null?e.reactions=[H]:sr.call(a,H)||a.push(H)}}}if(Vt&&Nt.has(e))return Nt.get(e);if(r){var s=e;if(Vt){var o=s.v;return((s.f&ke)===0&&s.reactions!==null||Ca(s))&&(o=ei(s)),Nt.set(s,o),o}var l=(s.f&mt)===0&&!xt&&H!==null&&(Tn||(H.f&mt)!==0),c=(s.f&$r)===0;tn(s)&&(l&&(s.f|=mt),Ji(s)),l&&!c&&(ea(s),Pa(s))}if(Ae!=null&&Ae.has(e))return Ae.get(e);if((e.f&Yt)!==0)throw e.v;return e.v}function Pa(e){if(e.f|=mt,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&Ie)!==0&&(t.f&mt)===0&&(ea(t),Pa(t))}function Ca(e){if(e.v===we)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Nt.has(t)||(t.f&Ie)!==0&&Ca(t))return!0;return!1}function Qt(e){var t=xt;try{return xt=!0,e()}finally{xt=t}}function vr(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(At in e)vi(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&At in r&&vi(r)}}}function vi(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{vi(e[n],t)}catch{}const r=jn(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=Di(r);for(let i in n){const a=n[i].get;if(a)try{a.call(e)}catch{}}}}}function Co(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Ro=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Io(e){return Ro.includes(e)}const Lo={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function zo(e){return e=e.toLowerCase(),Lo[e]??e}const Do=["touchstart","touchmove"];function Vo(e){return Do.includes(e)}const pr=Symbol("events"),Ra=new Set,pi=new Set;function Bo(e,t,r,n={}){function i(a){if(n.capture||gi.call(t,a),!a.cancelBubble)return Yr(()=>r==null?void 0:r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?(i.__removed=!1,Mt(()=>{i.__removed||t.addEventListener(e,i,n)})):t.addEventListener(e,i,n),i}function J(e,t,r){(t[pr]??(t[pr]={}))[e]=r}function hr(e){for(var t=0;t<e.length;t++)Ra.add(e[t]);for(var r of pi)r(e)}let hi=null,_i=!1;function gi(e){var b,f;var t=this,r=t.ownerDocument,n=e.type,i=((b=e.composedPath)==null?void 0:b.call(e))||[],a=i[0]||e.target;hi=e,_i||(_i=!0,setTimeout(()=>{_i=!1,hi=null}));var s=0,o=hi===e&&e[pr];if(o){var l=i.indexOf(o);if(l!==-1&&(t===document||t===window)){e[pr]=t;return}var c=i.indexOf(t);if(c===-1)return;l<=c&&(s=l)}if(a=i[s]||e.target,a!==t){zi(e,"currentTarget",{configurable:!0,get(){return a||r}});var v=H,p=U;lt(null),ct(null);try{for(var y,h=[];a!==null&&a!==t;){try{var d=(f=a[pr])==null?void 0:f[n];d!=null&&(!a.disabled||e.target===a)&&d.call(a,e)}catch(_){y?h.push(_):y=_}if(e.cancelBubble)break;s++,a=s<i.length?i[s]:null}if(y){for(let _ of h)queueMicrotask(()=>{throw _});throw y}}finally{e[pr]=t,delete e.currentTarget,lt(v),ct(p)}}}const mi=((os=globalThis==null?void 0:globalThis.window)==null?void 0:os.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Fo(e){return(mi==null?void 0:mi.createHTML(e))??e}function Ia(e){var t=oi("template");return t.innerHTML=Fo(e.replaceAll("<!>","<!---->")),t.content}function nn(e,t){var r=U;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function xe(e,t){var r=(t&Us)!==0,n=(t&js)!==0,i,a=!e.startsWith("<!>");return()=>{i===void 0&&(i=Ia(a?e:"<!>"+e),r||(i=cr(i)));var s=n||da?document.importNode(i,!0):i.cloneNode(!0);if(r){var o=cr(s),l=s.lastChild;nn(o,l)}else nn(s,s);return s}}function Ho(e,t,r="svg"){var n=!e.startsWith("<!>"),i=`<${r}>${n?e:"<!>"+e}</${r}>`,a;return()=>{if(!a){var s=Ia(i),o=cr(s);a=cr(o)}var l=a.cloneNode(!0);return nn(l,l),l}}function Uo(e,t){return Ho(e,t,"svg")}function te(){var e=document.createDocumentFragment(),t=document.createComment(""),r=Dt();return e.append(t,r),nn(t,r),e}function N(e,t){e!==null&&e.before(t)}function jo(e){let t=0,r=Zt(0),n;return()=>{li()&&(g(r),ma(()=>(t===0&&(n=Qt(()=>e(()=>Qr(r)))),t+=1,()=>{Mt(()=>{t-=1,t===0&&(n==null||n(),n=void 0,Qr(r))})})))}}var Wo=Xt|Er;function Go(e,t,r,n){new Xo(e,t,r,n)}class Xo{constructor(t,r,n,i){D(this,ce);at(this,"parent");at(this,"is_pending",!1);at(this,"transform_error");D(this,dt);D(this,Ei,null);D(this,vt);D(this,wr);D(this,Ue);D(this,tt,null);D(this,je,null);D(this,rt,null);D(this,Ct,null);D(this,br,0);D(this,rr,0);D(this,Fr,!1);D(this,fn,new Set);D(this,dn,new Set);D(this,jt,null);D(this,zn,jo(()=>(I(this,jt,Zt(u(this,br))),()=>{I(this,jt,null)})));var a;I(this,dt,t),I(this,vt,r),I(this,wr,s=>{var o=U;o.b=this,o.f|=Xn,n(s)}),this.parent=U.b,this.transform_error=i??((a=this.parent)==null?void 0:a.transform_error)??(s=>s),I(this,Ue,en(()=>{W(this,ce,Ri).call(this)},Wo))}defer_effect(t){Ki(t,u(this,fn),u(this,dn))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!u(this,vt).pending}update_pending_count(t,r){W(this,ce,Ii).call(this,t,r),I(this,br,u(this,br)+t),!(!u(this,jt)||u(this,Fr))&&(I(this,Fr,!0),Mt(()=>{I(this,Fr,!1),u(this,jt)&&Cr(u(this,jt),u(this,br))}))}get_effect_pending(){return u(this,zn).call(this),g(u(this,jt))}error(t){if(!u(this,vt).onerror&&!u(this,vt).failed)throw t;R!=null&&R.is_fork?(u(this,tt)&&R.skip_effect(u(this,tt)),u(this,je)&&R.skip_effect(u(this,je)),u(this,rt)&&R.skip_effect(u(this,rt)),R.oncommit(()=>{W(this,ce,Li).call(this,t)})):W(this,ce,Li).call(this,t)}}dt=new WeakMap,Ei=new WeakMap,vt=new WeakMap,wr=new WeakMap,Ue=new WeakMap,tt=new WeakMap,je=new WeakMap,rt=new WeakMap,Ct=new WeakMap,br=new WeakMap,rr=new WeakMap,Fr=new WeakMap,fn=new WeakMap,dn=new WeakMap,jt=new WeakMap,zn=new WeakMap,ce=new WeakSet,Hc=function(){try{I(this,tt,Xe(()=>u(this,wr).call(this,u(this,dt))))}catch(t){this.error(t)}},Uc=function(t){const r=u(this,vt).failed,{reset:n,invoke_onerror:i}=W(this,ce,Ci).call(this,t);Mt(i),r&&I(this,rt,Xe(()=>{r(u(this,dt),()=>t,()=>n)}))},Ci=function(t){var r=!1,n=!1;const i=()=>{if(r){qs();return}r=!0,n&&lo(),u(this,rt)!==null&&ur(u(this,rt),()=>{I(this,rt,null)}),W(this,ce,Un).call(this,()=>{W(this,ce,Ri).call(this)})};return{reset:i,invoke_onerror:()=>{var s,o;try{n=!0,(o=(s=u(this,vt)).onerror)==null||o.call(s,t,i),n=!1}catch(l){Tt(l,u(this,Ue)&&u(this,Ue).parent)}}}},jc=function(){const t=u(this,vt).pending;t&&(this.is_pending=!0,I(this,je,Xe(()=>t(u(this,dt)))),Mt(()=>{var r=I(this,Ct,document.createDocumentFragment()),n=Dt(),i=!1;if(r.append(n),I(this,tt,W(this,ce,Un).call(this,()=>{try{return Xe(()=>u(this,wr).call(this,n))}catch(a){try{this.error(a),i=!0}catch(s){Tt(s,u(this,Ue).parent)}return null}})),u(this,tt)===null){I(this,Ct,null),i&&W(this,ce,mn).call(this,R);return}u(this,rr)===0&&(u(this,dt).before(r),I(this,Ct,null),ur(u(this,je),()=>{I(this,je,null)}),W(this,ce,mn).call(this,R))}))},Ri=function(){try{if(this.is_pending=this.has_pending_snippet(),I(this,rr,0),I(this,br,0),I(this,tt,Xe(()=>{u(this,wr).call(this,u(this,dt))})),u(this,rr)>0){var t=I(this,Ct,document.createDocumentFragment());di(u(this,tt),t);const r=u(this,vt).pending;I(this,je,Xe(()=>r(u(this,dt))))}else W(this,ce,mn).call(this,R)}catch(r){this.error(r)}},mn=function(t){this.is_pending=!1,t.transfer_effects(u(this,fn),u(this,dn))},Un=function(t){var r=U,n=H,i=ve;ct(u(this,Ue)),lt(u(this,Ue)),Nr(u(this,Ue).ctx);try{return or.ensure(),t()}finally{ct(r),lt(n),Nr(i)}},Ii=function(t,r){var n;if(!this.has_pending_snippet()){this.parent&&W(n=this.parent,ce,Ii).call(n,t,r);return}I(this,rr,u(this,rr)+t),u(this,rr)===0&&(W(this,ce,mn).call(this,r),u(this,je)&&ur(u(this,je),()=>{I(this,je,null)}),u(this,Ct)&&(u(this,dt).before(u(this,Ct)),I(this,Ct,null)))},Li=function(t){u(this,tt)&&(Me(u(this,tt)),I(this,tt,null)),u(this,je)&&(Me(u(this,je)),I(this,je,null)),u(this,rt)&&(Me(u(this,rt)),I(this,rt,null));let r=u(this,vt).failed;const n=i=>{const{reset:a,invoke_onerror:s}=W(this,ce,Ci).call(this,i);s(),r&&I(this,rt,W(this,ce,Un).call(this,()=>{try{return Xe(()=>{var o=U;o.b=this,o.f|=Xn,r(u(this,dt),()=>i,()=>a)})}catch(o){return Tt(o,u(this,Ue).parent),null}}))};Mt(()=>{var i;try{i=this.transform_error(t)}catch(a){Tt(a,u(this,Ue)&&u(this,Ue).parent);return}i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(n,a=>Tt(a,u(this,Ue)&&u(this,Ue).parent)):n(i)})};function Q(e,t){var r=t==null?"":typeof t=="object"?`${t}`:t;r!==(e[Wr]??(e[Wr]=e.nodeValue))&&(e[Wr]=r,e.nodeValue=`${r}`)}function Yo(e,t){return qo(e,t)}const On=new Map;function qo(e,{target:t,anchor:r,props:n={},events:i,context:a,intro:s=!0,transformError:o}){xo();var l=void 0,c=Ao(()=>{var v=r??t.appendChild(Dt());Go(v,{pending:()=>{}},h=>{qt({});var d=ve;a&&(d.c=a),i&&(n.$$events=i),l=e(h,n)||Zn(),Kt()},o);var p=new Set,y=h=>{for(var d=0;d<h.length;d++){var b=h[d];if(!p.has(b)){p.add(b);var f=Vo(b);for(const k of[t,document]){var _=On.get(k);_===void 0&&(_=new Map,On.set(k,_));var x=_.get(b);x===void 0?(k.addEventListener(b,gi,{passive:f}),_.set(b,1)):_.set(b,x+1)}}}};return y(yn(Ra)),pi.add(y),()=>{var f;for(var h of p)for(const _ of[t,document]){var d=On.get(_),b=d.get(h);--b==0?(_.removeEventListener(h,gi),d.delete(h),d.size===0&&On.delete(_)):d.set(h,b)}pi.delete(y),v!==r&&((f=v.parentNode)==null||f.removeChild(v))}});return Ko.set(l,c),l}let Ko=new WeakMap;class yi{constructor(t,r=!0){at(this,"anchor");D(this,$t,new Map);D(this,Rt,new Map);D(this,nt,new Map);D(this,xr,new Set);D(this,vn,!0);D(this,pn,t=>{if(u(this,$t).has(t)){var r=u(this,$t).get(t),n=u(this,Rt).get(r);if(n)Nn(n),u(this,xr).delete(r);else{var i=u(this,nt).get(r);i&&(Nn(i.effect),u(this,Rt).set(r,i.effect),u(this,nt).delete(r),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),n=i.effect)}for(const[a,s]of u(this,$t)){if(u(this,$t).delete(a),a===t)break;const o=u(this,nt).get(s);o&&(Me(o.effect),u(this,nt).delete(s))}for(const[a,s]of u(this,Rt)){if(a===r||u(this,xr).has(a))continue;const o=()=>{if(Array.from(u(this,$t).values()).includes(a)){var c=document.createDocumentFragment();di(s,c),c.append(Dt()),u(this,nt).set(a,{effect:s,fragment:c})}else Me(s);u(this,xr).delete(a),u(this,Rt).delete(a)};u(this,vn)||!n?(u(this,xr).add(a),ur(s,o,!1)):o()}}});D(this,Dn,t=>{u(this,$t).delete(t);const r=Array.from(u(this,$t).values());for(const[n,i]of u(this,nt))r.includes(n)||(Me(i.effect),u(this,nt).delete(n))});this.anchor=t,I(this,vn,r)}ensure(t,r){var n=R,i=ha();if(r&&!u(this,Rt).has(t)&&!u(this,nt).has(t))if(i){var a=document.createDocumentFragment(),s=Dt();a.append(s),u(this,nt).set(t,{effect:Xe(()=>r(s)),fragment:a})}else u(this,Rt).set(t,Xe(()=>r(this.anchor)));if(u(this,$t).set(n,t),i){for(const[o,l]of u(this,Rt))o===t?n.unskip_effect(l):n.skip_effect(l);for(const[o,l]of u(this,nt))o===t?n.unskip_effect(l.effect):n.skip_effect(l.effect);n.oncommit(u(this,pn)),n.ondiscard(u(this,Dn))}else u(this,pn).call(this,n)}}$t=new WeakMap,Rt=new WeakMap,nt=new WeakMap,xr=new WeakMap,vn=new WeakMap,pn=new WeakMap,Dn=new WeakMap;function Bt(e,t,r=!1){var n=new yi(e),i=r?Xt:0;function a(s,o){n.ensure(s,o)}en(()=>{var s=!1;t((o,l=0)=>{s=!0,a(l,o)}),s||a(-1,null)},i)}function La(e,t){return t}function Zo(e,t,r){for(var n=[],i=t.length,a,s=t.length,o=0;o<i;o++){let p=t[o];ur(p,()=>{if(a){if(a.pending.delete(p),a.done.add(p),a.pending.size===0){var y=e.outrogroups;wi(e,yn(a.done)),y.delete(a),y.size===0&&(e.outrogroups=null)}}else s-=1},!1)}if(s===0){var l=n.length===0&&r!==null&&e.pending.size===0;if(l){var c=r,v=c.parentNode;So(v),v.append(c),e.items.clear()}wi(e,t,!l)}else a={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(a)}function wi(e,t,r=!0){var n;if(e.pending.size>0){n=new Set;for(const s of e.pending.values())for(const o of s)n.add(e.items.get(o).e)}for(var i=0;i<t.length;i++){var a=t[i];if(n!=null&&n.has(a)){a.f|=Et;const s=document.createDocumentFragment();di(a,s)}else Me(t[i],r)}}var za;function Jt(e,t,r,n,i,a=null){var s=e,o=new Map,l=(t&Wi)!==0;if(l){var c=e;s=c.appendChild(Dt())}var v=null,p=Jn(()=>{var k=r();return se(k)?k:k==null?[]:yn(k)}),y,h=new Map,d=!0;function b(k){(x.effect.f&Fe)===0&&(x.pending.delete(k),x.fallback=v,Qo(x,y,s,t,n),v!==null&&(y.length===0?(v.f&Et)===0?Nn(v):(v.f^=Et,sn(v,null,s)):ur(v,()=>{v=null})))}function f(k){x.pending.delete(k)}var _=en(()=>{y=g(p);for(var k=y.length,C=new Set,S=R,$=ha(),E=0;E<k;E+=1){var B=y[E],X=n(B,E),re=d?null:o.get(X);re?(re.v&&Cr(re.v,B),re.i&&Cr(re.i,E),$&&S.unskip_effect(re.e)):(re=Jo(o,d?s:za??(za=Dt()),B,X,E,i,t,r),d||(re.e.f|=Et),o.set(X,re)),C.add(X)}if(k===0&&a&&!v&&(d?v=Xe(()=>a(s)):(v=Xe(()=>a(za??(za=Dt()))),v.f|=Et)),k>C.size&&Js(),!d)if(h.set(S,C),$){for(const[We,Ne]of o)C.has(We)||S.skip_effect(Ne.e);S.oncommit(b),S.ondiscard(f)}else b(S);g(p)}),x={effect:_,items:o,pending:h,outrogroups:null,fallback:v};d=!1}function an(e){for(;e!==null&&(e.f&st)===0;)e=e.next;return e}function Qo(e,t,r,n,i){var re,We,Ne,pt,nr,Wt,Ze,it,G;var a=(n&zs)!==0,s=t.length,o=e.items,l=an(e.effect.first),c,v=null,p,y=[],h=[],d,b,f,_;if(a)for(_=0;_<s;_+=1)d=t[_],b=i(d,_),f=o.get(b).e,(f.f&Et)===0&&((We=(re=f.nodes)==null?void 0:re.a)==null||We.measure(),(p??(p=new Set)).add(f));for(_=0;_<s;_+=1){if(d=t[_],b=i(d,_),f=o.get(b).e,e.outrogroups!==null)for(const pe of e.outrogroups)pe.pending.delete(f),pe.done.delete(f);if((f.f&Be)!==0&&(Nn(f),a&&((pt=(Ne=f.nodes)==null?void 0:Ne.a)==null||pt.unfix(),(p??(p=new Set)).delete(f))),(f.f&Et)!==0)if(f.f^=Et,f===l)sn(f,null,r);else{var x=v?v.next:l;f===e.effect.last&&(e.effect.last=f.prev),f.prev&&(f.prev.next=f.next),f.next&&(f.next.prev=f.prev),er(e,v,f),er(e,f,x),sn(f,x,r),v=f,y=[],h=[],l=an(v.next);continue}if(f!==l){if(c!==void 0&&c.has(f)){if(y.length<h.length){var k=h[0],C;v=k.prev;var S=y[0],$=y[y.length-1];for(C=0;C<y.length;C+=1)sn(y[C],k,r);for(C=0;C<h.length;C+=1)c.delete(h[C]);er(e,S.prev,$.next),er(e,v,S),er(e,$,k),l=k,v=$,_-=1,y=[],h=[]}else c.delete(f),sn(f,l,r),er(e,f.prev,f.next),er(e,f,v===null?e.effect.first:v.next),er(e,v,f),v=f;continue}for(y=[],h=[];l!==null&&l!==f;)(c??(c=new Set)).add(l),h.push(l),l=an(l.next);if(l===null)continue}(f.f&Et)===0&&y.push(f),v=f,l=an(f.next)}if(e.outrogroups!==null){for(const pe of e.outrogroups)pe.pending.size===0&&(wi(e,yn(pe.done)),(nr=e.outrogroups)==null||nr.delete(pe));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||c!==void 0){var E=[];if(c!==void 0)for(f of c)(f.f&Be)===0&&E.push(f);for(;l!==null;)(l.f&Be)===0&&l!==e.fallback&&E.push(l),l=an(l.next);var B=E.length;if(B>0){var X=(n&Wi)!==0&&s===0?r:null;if(a){for(_=0;_<B;_+=1)(Ze=(Wt=E[_].nodes)==null?void 0:Wt.a)==null||Ze.measure();for(_=0;_<B;_+=1)(G=(it=E[_].nodes)==null?void 0:it.a)==null||G.fix()}Zo(e,E,X)}}a&&Mt(()=>{var pe,me;if(p!==void 0)for(f of p)(me=(pe=f.nodes)==null?void 0:pe.a)==null||me.apply()})}function Jo(e,t,r,n,i,a,s,o){var l=(s&Is)!==0?(s&Ds)===0?wo(r,!1,!1):Zt(r):null,c=(s&Ls)!==0?Zt(i):null;return{v:l,i:c,e:Xe(()=>(a(t,l??r,c??i,o),()=>{e.delete(n)}))}}function sn(e,t,r){if(e.nodes)for(var n=e.nodes.start,i=e.nodes.end,a=t&&(t.f&Et)===0?t.nodes.start:r;n!==null;){var s=Jr(n);if(a.before(n),n===i)return;n=s}}function er(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function le(e,t,r,n,i){var o,l;if((o=t.$$host)!=null&&o.$$shadowRoot){const c=oi("slot");N(e,c);return}var a=(l=t.$$slots)==null?void 0:l[r],s=!1;a===!0&&(a=t.children,s=!0),a===void 0||a(e,s?()=>n:n)}function el(e,t,r){var n=new yi(e);en(()=>{var i=t()??null;n.ensure(i,i&&(a=>r(a,i)))},Xt)}function tl(e,t,r,n,i,a){var s=null,o=e,l=new yi(o,!1);en(()=>{const c=t()||null;var v=Ws;if(c===null){l.ensure(null,null);return}return l.ensure(c,p=>{if(c){if(s=oi(c,v),nn(s,s),n){var y=null,h=s.appendChild(Dt());n(s,h),y==null||y.remove()}U.nodes.end=s,p.before(s)}}),()=>{}},Xt),ci(()=>{})}function rl(e,t){var r=void 0,n;ya(()=>{r!==(r=t())&&(n&&(Me(n),n=null),r&&(n=Xe(()=>{ui(()=>r(e))})))})}function Da(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=Da(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function nl(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=Da(e))&&(n&&(n+=" "),n+=t);return n}function _r(e){return typeof e=="object"?nl(e):e??""}const Va=[...` 	
\r\f \v\uFEFF`];function il(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var i of Object.keys(r))if(r[i])n=n?n+" "+i:i;else if(n.length)for(var a=i.length,s=0;(s=n.indexOf(i,s))>=0;){var o=s+a;(s===0||Va.includes(n[s-1]))&&(o===n.length||Va.includes(n[o]))?n=(s===0?"":n.substring(0,s))+n.substring(o+1):s=o}}return n===""?null:n}function Ba(e,t=!1){var r=t?" !important;":";",n="";for(var i of Object.keys(e)){var a=e[i];a!=null&&a!==""&&(n+=" "+i+": "+a+r)}return n}function bi(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function al(e,t){if(t){var r="",n,i;if(Array.isArray(t)?(n=t[0],i=t[1]):n=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var a=!1,s=0,o=!1,l=[];n&&l.push(...Object.keys(n).map(bi)),i&&l.push(...Object.keys(i).map(bi));var c=0,v=-1;const b=e.length;for(var p=0;p<b;p++){var y=e[p];if(o?y==="/"&&e[p-1]==="*"&&(o=!1):a?a===y&&(a=!1):y==="/"&&e[p+1]==="*"?o=!0:y==='"'||y==="'"?a=y:y==="("?s++:y===")"&&s--,!o&&a===!1&&s===0){if(y===":"&&v===-1)v=p;else if(y===";"||p===b-1){if(v!==-1){var h=bi(e.substring(c,v).trim());if(!l.includes(h)){y!==";"&&p++;var d=e.substring(c,p).trim();r+=" "+d+";"}}c=p+1,v=-1}}}}return n&&(r+=Ba(n)),i&&(r+=Ba(i,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function He(e,t,r,n,i,a){var s=e[qn];if(s!==r||s===void 0){var o=il(r,n,a);o==null?e.removeAttribute("class"):t?e.className=o:e.setAttribute("class",o),e[qn]=r}else if(a&&i!==a)for(var l in a){var c=!!a[l];(i==null||c!==!!i[l])&&e.classList.toggle(l,c)}return a}function xi(e,t={},r,n){for(var i in r){var a=r[i];t[i]!==a&&(r[i]==null?e.style.removeProperty(i):e.style.setProperty(i,a,n))}}function Fa(e,t,r,n){var i=e[Kn];if(i!==t){var a=al(t,n);a==null?e.removeAttribute("style"):e.style.cssText=a,e[Kn]=t}else n&&(Array.isArray(n)?(xi(e,r==null?void 0:r[0],n[0]),xi(e,r==null?void 0:r[1],n[1],"important")):xi(e,r,n));return n}function Ha(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Ua(e,t){var r=!("__defaultValue"in e);!r&&e.__defaultValue===t||(e.__defaultValue=t,ja(e,!r||"__value"in e))}function ja(e,t){var r=e.__defaultValue,n=e.multiple,i=n?r??[]:null;if(!(n&&!se(i))){var a=e.selectedIndex,s=t&&n?new Set(e.selectedOptions):null;for(var o of e.options){var l=Si(o);Ha(o,n?i.includes(l):ua(l,r))}if(t)if(s!==null)for(o of e.options){var c=s.has(o);o.selected!==c&&(o.selected=c)}else e.selectedIndex!==a&&(e.selectedIndex=a)}}function Ft(e,t,r=!1){if(e.multiple){if(t==null)return;if(!se(t))return Ys();for(var n of e.options)n.selected=t.includes(Si(n));return}for(n of e.options){var i=Si(n);if(ua(i,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function gr(e){var t=new MutationObserver(r=>{r.every(sl)||("__defaultValue"in e&&ja(e,!1),"__value"in e&&Ft(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ci(()=>{t.disconnect()})}function Si(e){return"__value"in e?e.__value:e.value}function sl(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(r=>r.nodeName==="SELECTEDCONTENT")}return!1}const on=Symbol("class"),ln=Symbol("style"),Wa=Symbol("is custom element"),Ga=Symbol("is html"),ol=kn?"input":"INPUT",ll=kn?"option":"OPTION",Xa=kn?"select":"SELECT",cl=kn?"progress":"PROGRESS";function Pn(e,t){var r=Cn(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==cl)||(e.value=t??"")}function ul(e,t){var r=Cn(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function $e(e,t,r,n){var i=Cn(e);i[t]!==(i[t]=r)&&(t==="loading"&&(e[Rs]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Ka(e).has(t)?e[t]=r:e.setAttribute(t,r))}function fl(e,t,r,n,i=!1,a=!1){var s=Cn(e),o=s[Wa],l=!s[Ga],c=t||{},v=e.nodeName===ll,p=e.nodeName===Xa;for(var y in t)!(y in r)&&y[0]+y[1]!=="$$"&&(r[y]=null);r.class?r.class=_r(r.class):r[on]&&(r.class=null),r[ln]&&(r.style??(r.style=null));var h=Ka(e);if(e.nodeName===ol&&"type"in r&&("value"in r||"__value"in r)){var d=r.type;(d!==c.type||d===void 0&&e.hasAttribute("type"))&&(c.type=d,$e(e,"type",d))}for(const S in r){let $=r[S];if(v&&S==="value"&&$==null){e.value=e.__value="",c[S]=$;continue}if(S==="class"){var b=e.namespaceURI==="http://www.w3.org/1999/xhtml";He(e,b,$,n,t==null?void 0:t[on],r[on]),c[S]=$,c[on]=r[on];continue}if(S==="style"){Fa(e,$,t==null?void 0:t[ln],r[ln]),c[S]=$,c[ln]=r[ln];continue}var f=c[S];if(!($===f&&!($===void 0&&e.hasAttribute(S)))){c[S]=$;var _=S[0]+S[1];if(_!=="$$")if(_==="on"){const E={},B="$$"+S;let X=S.slice(2);var x=Io(X);if(Co(X)&&(X=X.slice(0,-7),E.capture=!0),!x&&f){if($!=null)continue;e.removeEventListener(X,c[B],E),c[B]=null}if(x)J(X,e,$),hr([X]);else if($!=null){let re=function(We){c[S].call(this,We)};c[B]=Bo(X,e,re,E)}}else if(S==="style")$e(e,S,$);else if(S==="autofocus")vo(e,!!$);else if(!o&&(S==="__value"||S==="value"&&$!=null))e.value=e.__value=$;else if(S==="selected"&&v)Ha(e,$);else{var k=S;l||(k=zo(k));var C=k==="defaultValue"||k==="defaultChecked";if(p&&k==="defaultValue")continue;if($==null&&!o&&!C)if(s[S]=null,k==="value"||k==="checked"){let E=e;const B=t===void 0;if(k==="value"){let X=E.defaultValue;E.removeAttribute(k),E.defaultValue=X,E.value=E.__value=B?X:null}else{let X=E.defaultChecked;E.removeAttribute(k),E.defaultChecked=X,E.checked=B?X:!1}}else e.removeAttribute(S);else C||(o||typeof $!="string")&&h.has(k)?(e[k]=$,k in s&&(s[k]=we)):typeof $!="function"&&$e(e,k,$)}}}return c}function Ya(e,t,r=[],n=[],i=[],a,s=!1,o=!1){Zi(i,r,n,l=>{var c=void 0,v={},p=e.nodeName===Xa,y=!1;if(ya(()=>{var d=t(...l.map(g)),b=fl(e,c,d,a,s,o);if(y&&p){var f=e;"defaultValue"in d&&Ua(f,d.defaultValue),"value"in d&&Ft(f,d.value)}for(let x of Object.getOwnPropertySymbols(v))d[x]||Me(v[x]);for(let x of Object.getOwnPropertySymbols(d)){var _=d[x];x.description===Gs&&(!c||_!==c[x])&&(v[x]&&Me(v[x]),v[x]=Xe(()=>rl(e,()=>_))),b[x]=_}c=b}),p){var h=e;ui(()=>{var d=c;"defaultValue"in d&&Ua(h,d.defaultValue),Ft(h,d.value,!0),gr(h)})}y=!0})}function Cn(e){return e[Sn]??(e[Sn]={[Wa]:e.nodeName.includes("-"),[Ga]:e.namespaceURI===Xi})}var qa=new Map;function Ka(e){var t=e.getAttribute("is")||e.nodeName,r=qa.get(t);if(r)return r;qa.set(t,r=new Set);for(var n,i=e,a=Element.prototype;a!==i;){n=Di(i);for(var s in n)n[s].set&&s!=="innerHTML"&&s!=="textContent"&&s!=="innerText"&&r.add(s);i=jn(i)}return r}function ki(e,t){return e===t||(e==null?void 0:e[At])===t}function Za(e=Zn(),t,r,n){var i=ve.r,a=U;return ui(()=>{var s,o;return ma(()=>{s=o,o=[],Qt(()=>{ki(r(...o),e)||(t(e,...o),s&&ki(r(...s),e)&&t(null,...s))})}),()=>{let l=a;for(;l!==i&&l.parent!==null&&l.parent.f&wn;)l=l.parent;const c=()=>{o&&ki(r(...o),e)&&t(null,...o)},v=l.teardown;l.teardown=()=>{c(),v==null||v()}}}),e}function dl(e=!1){const t=ve,r=t.l.u;if(!r)return;let n=()=>vr(t.s);if(e){let i=0,a={};const s=Or(()=>{let o=!1;const l=t.s;for(const c in l)l[c]!==a[c]&&(a[c]=l[c],o=!0);return o&&i++,i});n=()=>g(s)}r.b.length&&Eo(()=>{Qa(t,n),Wn(r.b)}),Mn(()=>{const i=Qt(()=>r.m.map(Ps));return()=>{for(const a of i)typeof a=="function"&&a()}}),r.a.length&&Mn(()=>{Qa(t,n),Wn(r.a)})}function Qa(e,t){if(e.l.s)for(const r of e.l.s)g(r);t()}let Rn=!1;function vl(e){var t=Rn;try{return Rn=!1,[e(),Rn]}finally{Rn=t}}const pl={get(e,t){if(!e.exclude.includes(t))return g(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var n=U;try{ct(e.parent_effect),e.special[t]=St({get[t](){return e.props[t]}},t,Gi)}finally{ct(n)}}return e.special[t](r),oa(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),oa(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function oe(e,t){return new Proxy({props:e,exclude:t,special:{},version:Zt(0),parent_effect:U},pl)}const hl={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Ur(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let i=e.props[n];Ur(i)&&(i=i());const a=Gt(i,t);if(a&&a.set)return a.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Ur(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const i=Gt(n,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===At||t===ji)return!1;for(let r of e.props)if(Ur(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Ur(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function ue(...e){return new Proxy({props:e},hl)}function St(e,t,r,n){var C;var i=!Mr||(r&Bs)!==0,a=(r&Fs)!==0,s=(r&Hs)!==0,o=n,l=!0,c=void 0,v=()=>s&&i?(c??(c=Or(n)),g(c)):(l&&(l=!1,o=s?Qt(n):n),o);let p;if(a){var y=At in e||ji in e;p=((C=Gt(e,t))==null?void 0:C.set)??(y&&t in e?S=>e[t]=S:void 0)}var h,d=!1;a?[h,d]=vl(()=>e[t]):h=e[t],h===void 0&&n!==void 0&&(h=v(),p&&(i&&io(),p(h)));var b;if(i?b=()=>{var S=e[t];return S===void 0?v():(l=!0,S)}:b=()=>{var S=e[t];return S!==void 0&&(o=void 0),S===void 0?o:S},i&&(r&Gi)===0)return b;if(p){var f=e.$$legacy;return(function(S,$){return arguments.length>0?((!i||!$||f||d)&&p($?b():S),S):b()})}var _=!1,x=((r&Vs)!==0?Or:Jn)(()=>(_=!1,b()));a&&g(x);var k=U;return(function(S,$){if(arguments.length>0){const E=$?g(x):i&&a?Ge(S):S;return M(x,E),_=!0,o!==void 0&&(o=E),S}return Vt&&_||(k.f&Fe)!==0?x.v:g(x)})}function $i(e){ve===null&&Zs(),Mr&&ve.l!==null?_l(ve).m.push(e):Mn(()=>{const t=Qt(e);if(typeof t=="function")return t})}function _l(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const gl="5";typeof window<"u"&&((ls=window.__svelte??(window.__svelte={})).v??(ls.v=new Set)).add(gl);const ee=Ge({ready:!1,cleanScreen:!1,panelOpen:!0,settingsOpen:!1,startupOpen:!0,focusSection:null,focusNonce:0,status:{}});function ml(e){ee.panelOpen=!0,ee.focusSection=e,ee.focusNonce++}const qe=Ge({});function Ja(e){try{return structuredClone(e)}catch{return JSON.parse(JSON.stringify(e))}}function ae(e){var t,r,n;if(e==null)return e;try{return((n=(r=(t=window.XRA)==null?void 0:t.i18n)==null?void 0:r.t)==null?void 0:n.call(r,e))??e}catch{return e}}function Ke(e,t){const r=e.split(".");let n=qe;for(const i of r){if(n==null)return t;n=n[i]}return n===void 0?t:n}function yl(e){var r,n,i,a,s,o,l,c;const t=window.XRA;if(t){if(e.startsWith("background.")){(n=(r=t.background)==null?void 0:r.apply)==null||n.call(r);return}if(e==="ui.language"){(a=(i=t.i18n)==null?void 0:i.setLanguage)==null||a.call(i,qe.ui.language);return}if(e==="ui.preview_wireframe"){typeof t.applyMocapWireframeVisibility=="function"&&t.applyMocapWireframeVisibility();return}if(e==="ui.mocap_view"){typeof t.applyMocapWireframeVisibility=="function"&&t.applyMocapWireframeVisibility();return}if(e.startsWith("performance.")){window.XRA_render_fps_limit=Number(qe.performance.render_fps??60),window.XRA_gpu_preference=String(qe.performance.gpu_preference||"default"),window.XRA_preserve_drawing_buffer=qe.performance.preserve_drawing_buffer!==!1,window.XRA_antialias=qe.performance.antialias!=="off",(o=(s=t.events)==null?void 0:s.emit)==null||o.call(s,"performance",qe.performance);return}(c=(l=t.events)==null?void 0:l.emit)==null||c.call(l,"config-change",{path:e,value:Ke(e)})}}function ft(e,t){var a,s;const r=window.XRA,n=e.split(".");let i=qe;for(let o=0;o<n.length-1;o++)i[n[o]]==null&&(i[n[o]]={}),i=i[n[o]];if(i[n[n.length-1]]=t,r!=null&&r.config){let o=r.config;for(let l=0;l<n.length-1;l++)o[n[l]]==null&&(o[n[l]]={}),o=o[n[l]];o[n[n.length-1]]=t}yl(e);try{(s=(a=r==null?void 0:r.profileService)==null?void 0:a.save)==null||s.call(a)}catch{}}function In(){var e,t,r;ee.cleanScreen=!ee.cleanScreen,document.body.classList.toggle("xra-total-clean-screen",ee.cleanScreen);try{(r=(t=(e=window.XRA)==null?void 0:e.ui)==null?void 0:t.setHidden)==null||r.call(t,ee.cleanScreen)}catch{}}function wl(){var e;try{Object.assign(qe,Ja(((e=window.XRA)==null?void 0:e.config)||{}))}catch{}}function es(){var e;try{const t=(e=window.SA_bridge)==null?void 0:e.backend;t&&typeof t.status=="function"&&(ee.status=t.status()||{})}catch{}}function bl(){const e=()=>window.XRA&&window.XRA.config?(Object.assign(qe,Ja(window.XRA.config)),ee.ready=!0,es(),window.addEventListener("keydown",t=>{t.key==="Escape"&&ee.cleanScreen&&(t.preventDefault(),In())},!0),!0):!1;if(!e()){const t=setInterval(()=>{e()&&clearInterval(t)},200)}}const xl={camera:{title:"Camera",icon:"Camera"},devices:{title:"Devices",icon:"SlidersHorizontal"},pose_model:{title:"Pose model",icon:"PersonStanding"},performance:{title:"Performance",icon:"Zap"},tracking:{title:"Motion capture",icon:"Activity"},body:{title:"Body",icon:"PersonStanding"},collider:{title:"Body collider",icon:"Shield"},lip:{title:"Audio & Lip-sync",icon:"Mic"},background:{title:"Background",icon:"Image"},avatar:{title:"Character position (avatar only)",icon:"User"},second_avatar:{title:"Remote avatar (Studio Link)",icon:"Globe"},stage:{title:"3D Stage & Environment",icon:"Landmark"},recorder:{title:"Recording / capture",icon:"Video"},visual_effects:{title:"Visual effects",icon:"Sparkles"},debug:{title:"Diagnostics",icon:"Bug"},ui:{title:"UI & overlays",icon:"Monitor"}},ts=["performance","tracking","body","collider","lip","background","stage","avatar","second_avatar","recorder","visual_effects","debug","ui","camera","devices","pose_model"],Sl=new Set(["left_settings","_custom_","_excluded_"]),kl=new Set(["camera.view_presets","camera.selected_view_preset","ui.preview_video","ui.preview_debug","performance.auto_last_result","recorder.output_dir"]);function rs(e){const t=String(e).replace(/_/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").trim();return t.charAt(0).toUpperCase()+t.slice(1)}const $l={"ui.language":{type:"select",options:()=>{var e,t;return((t=(e=window.XRA)==null?void 0:e.i18n)==null?void 0:t.LANGUAGES)||[["en","English"]]}},"background.mode":{type:"select",options:[["color","Color"],["image","Image"],["none","None (transparent · OBS)"]]},"background.color":{type:"color"},"background.path":{type:"text"},"ui.preview_wireframe":{type:"tristate",label:"Mocap wireframe"},"ui.mocap_view":{type:"select",label:"Mocap window",options:[["off","Off"],["both","Webcam + skeleton"],["wireframe","Skeleton only"],["video","Webcam only"]]},"performance.tracking_pipeline":{type:"select",label:"Tracking mode",options:[["FULL_BODY","Full Body"],["FACE","Face only"],["UPPER_BODY","Upper body"]]},"performance.render_resolution":{type:"select",options:[["720p","720p (HD · GPU Saving)"],["1080p","1080p (Full HD · Recommended)"],["1440p","1440p (2K · High resolution)"]]},"performance.render_fps":{type:"slider",min:15,max:240,step:1},"performance.gpu_preference":{type:"select",label:"Graphics card (GPU)",options:[["default","Default"],["high-performance","Dedicated GPU (High Performance)"],["low-power","Integrated GPU (Low Power)"]]},"performance.shadows":{type:"select",options:[["auto","Auto"],["on","Enabled"],["off","Disabled (GPU saving)"]]},"performance.antialias":{type:"select",label:"Anti-Aliasing (AA)",options:[["auto","Enabled (Hardware MSAA · Recommended)"],["off","Disabled"]]},"performance.spring_bone":{type:"select",label:"Hair/cloth physics (Spring Bone)",options:[["full","Full (every frame)"],["half","Half (1 frame out of 2 · Saving)"],["off","Off"]]},"performance.infer_mode":{type:"select",options:[["native","Native (Auto)"],["640x360","640×360 (Recommended · 30 FPS smooth)"],["640x480","640×480 (Standard 4:3 format)"],["1280x720","1280×720 (HD 720p · High precision)"]]},"performance.pose_fps":{type:"slider",min:5,max:30,step:1},"performance.hand_fps":{type:"slider",min:5,max:30,step:1},"performance.min_tracking_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_pose_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_face_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_joint_confidence":{type:"slider",min:.05,max:1,step:.05},"tracking.hand_recovery_mode":{type:"select",options:[["normal","Normal"],["aggressive","Aggressive"],["off","Off"]]},"tracking.hand_detection_sensitivity":{type:"select",options:[["high","High"],["normal","Normal"],["low","Low"]]},"tracking.stabilize_hand_percent":{type:"slider",min:0,max:100,step:1},"tracking.stabilize_arm":{type:"slider",min:0,max:100,step:1},"tracking.stabilize_arm_time":{type:"slider",min:0,max:2,step:.05},"tracking.native_smoothing":{type:"slider",min:0,max:1,step:.01},"tracking.body_bend_reduction":{type:"slider",min:0,max:1,step:.01},"tracking.upper_body_guard_strength":{type:"slider",min:0,max:1,step:.01},"tracking.guard_jump_deg":{type:"slider",min:5,max:120,step:1},"tracking.guard_hold_ms":{type:"slider",min:0,max:2e3,step:10},"tracking.guard_reacquire_deg":{type:"slider",min:5,max:120,step:1},"tracking.adaptive_smoothing_strength":{type:"slider",min:0,max:1,step:.01},"tracking.guard_confidence_min":{type:"slider",min:0,max:1,step:.01},"tracking.guard_release_ms":{type:"slider",min:0,max:2e3,step:10},"tracking.guard_mode":{type:"select",options:[["off","Off"],["auto","Auto"]]},"tracking.desk_torso_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_hips_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_legs_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_max_yaw_deg":{type:"slider",min:0,max:90,step:1},"tracking.desk_max_pitch_deg":{type:"slider",min:0,max:90,step:1},"tracking.desk_max_roll_deg":{type:"slider",min:0,max:90,step:1},"body.anchor_strength":{type:"slider",min:0,max:1,step:.01},"body.transition_ms":{type:"slider",min:0,max:2e3,step:10},"avatar.offset_x":{type:"slider",min:-5,max:5,step:.01},"avatar.offset_y":{type:"slider",min:-5,max:5,step:.01},"avatar.offset_z":{type:"slider",min:-5,max:5,step:.01},"avatar.rotation_y":{type:"slider",min:-180,max:180,step:1},"second_avatar.offset_x":{type:"slider",min:-20,max:20,step:.1},"second_avatar.offset_y":{type:"slider",min:-10,max:10,step:.1},"second_avatar.offset_z":{type:"slider",min:-10,max:10,step:.1},"second_avatar.rotation_y":{type:"slider",min:-180,max:180,step:1},"stage.scale":{type:"slider",min:.1,max:5,step:.01},"stage.rotation_x":{type:"slider",min:-180,max:180,step:1},"stage.rotation_y":{type:"slider",min:-180,max:180,step:1},"stage.rotation_z":{type:"slider",min:-180,max:180,step:1},"stage.offset_x":{type:"slider",min:-10,max:10,step:.05},"stage.offset_y":{type:"slider",min:-10,max:10,step:.05},"stage.offset_z":{type:"slider",min:-10,max:10,step:.05},"stage.scene_zoom":{type:"slider",min:.5,max:3,step:.01},"stage.lights_intensity":{type:"slider",min:0,max:3,step:.05},"collider.preset":{type:"select",options:[["CUSTOM","Custom"],["NONE","None"]]},"collider.reaction":{type:"select",options:[["z_push","Z push"],["bounce","Bounce"],["block","Block"]]},"collider.head":{type:"slider",min:0,max:200,step:1},"collider.chest":{type:"slider",min:0,max:200,step:1},"collider.waist":{type:"slider",min:0,max:200,step:1},"collider.hip":{type:"slider",min:0,max:200,step:1},"collider.front_clearance":{type:"slider",min:0,max:50,step:1},"lip.analysis_fps":{type:"slider",min:5,max:60,step:1},"lip.fft_size":{type:"select",label:"FFT size",options:[["256","256"],["512","512"],["1024","1024"],["2048","2048"]]},"lip.mic_mix":{type:"slider",min:0,max:1,step:.01},"lip.threshold":{type:"slider",min:0,max:.2,step:.001},"lip.response_gain":{type:"slider",min:0,max:3,step:.05},"lip.vowel_emphasis":{type:"slider",min:0,max:3,step:.05},"recorder.mode":{type:"select",label:"Recording source",options:[["video_audio","Video + Audio"],["video","Video only"],["audio","Audio only"]]},"recorder.audio_only_variant":{type:"select",label:"Audio only mode",options:[["both","Processed + RAW"],["processed","Processed"],["raw","RAW"]]},"recorder.capture_source":{type:"select",label:"Output source",options:[["classic_v74","Classic output · recommended"],["clean_scene","Clean scene output · experimental (no UI)"],["native_xr","XR native video only · fallback"]]},"recorder.output_format":{type:"select",options:[["webm","WebM"],["mp4","MP4"]]},"recorder.audio_profile":{type:"select",options:[["podcast","Podcast"],["call","Call (Browser echo/noise filters)"]]},"recorder.hardware_encode":{type:"select",options:[["auto","Auto"],["on","On"],["off","Off (CPU)"]]},"recorder.width":{type:"slider",min:320,max:3840,step:2},"recorder.height":{type:"slider",min:240,max:2160,step:2},"recorder.fps":{type:"slider",min:15,max:60,step:1},"recorder.gate_threshold_db":{type:"slider",min:-80,max:-5,step:.5},"recorder.gate_hold_ms":{type:"slider",min:0,max:1e3,step:10},"recorder.gate_release_ms":{type:"slider",min:0,max:1e3,step:10},"recorder.video_bps":{type:"slider",min:5e5,max:2e7,step:1e5},"recorder.audio_bps":{type:"slider",min:32e3,max:32e4,step:8e3},"recorder.segment_minutes":{type:"select",options:[["0","Off"],["30","Every 30 min"],["60","Every 60 min"]]},"recorder.raw_audio_format":{type:"select",options:[["flac","FLAC (lossless)"],["wav","WAV (large)"]]},"recorder.filename":{type:"text"},"camera.optimized":{type:"toggle"},"camera.width":{type:"slider",min:160,max:1920,step:2},"camera.height":{type:"slider",min:120,max:1080,step:2},"camera.fps":{type:"slider",min:5,max:60,step:1}};function El(e){const t=[];for(const[r,n]of Object.entries(e||{})){if(Sl.has(r)||!n||typeof n!="object"||Array.isArray(n))continue;const i=xl[r]||{},a=[];for(const[s,o]of Object.entries(n)){const l=`${r}.${s}`;if(kl.has(l))continue;const c=$l[l]||{};if(c.hidden||o!==null&&typeof o=="object")continue;const v=c.type||(typeof o=="boolean"?"toggle":typeof o=="number"?"number":"text");a.push({type:v,path:l,label:c.label||rs(s),min:c.min,max:c.max,step:c.step,options:c.options})}a.length&&t.push({id:r,title:i.title||rs(r),icon:i.icon||"⚙",controls:a})}return t.sort((r,n)=>{const i=ts.indexOf(r.id),a=ts.indexOf(n.id);return(i<0?999:i)-(a<0?999:a)}),t}var Al=xe("<option> </option>"),Ml=xe("<select></select>"),Nl=xe("<select><option> </option><option> </option></select>"),Tl=xe('<input type="range"/> <span class="xra-val"> </span>',1),Ol=xe('<input type="checkbox"/>'),Pl=xe('<input type="color"/>'),Cl=xe('<input type="number"/>'),Rl=xe('<input type="text"/>'),Il=xe('<label class="xra-row"><span class="xra-row-label"> </span> <!></label>');function Ll(e,t){qt(t,!0);const r=yt(()=>typeof t.control.options=="function"?t.control.options():t.control.options||[]),n=f=>f===!1?"off":"auto",i=f=>f==="off"?!1:null;var a=Il(),s=L(a),o=Z(s,!0),l=P(s,2);{var c=f=>{var _=Ml();Jt(_,21,()=>g(r),La,(k,C)=>{var S=Al(),$=Z(S,!0),E={};be(B=>{Q($,B),E!==(E=g(C)[0])&&(S.value=(S.__value=E)??"")},[()=>ae(g(C)[1])]),N(k,S)});var x;gr(_),be(k=>{x!==(x=k)&&(_.value=(_.__value=x)??"",Ft(_,x))},[()=>Ke(t.control.path)]),J("change",_,k=>ft(t.control.path,k.currentTarget.value)),N(f,_)},v=f=>{var _=Nl(),x=L(_),k=Z(x,!0);x.value=x.__value="auto";var C=P(x),S=Z(C,!0);C.value=C.__value="off";var $;gr(_),be((E,B,X)=>{Q(k,E),Q(S,B),$!==($=X)&&(_.value=(_.__value=$)??"",Ft(_,$))},[()=>ae("Auto (follow tracking)"),()=>ae("Off"),()=>n(Ke(t.control.path))]),J("change",_,E=>ft(t.control.path,i(E.currentTarget.value))),N(f,_)},p=f=>{var _=Tl(),x=K(_),k=P(x,2),C=Z(k,!0);be((S,$)=>{$e(x,"min",t.control.min),$e(x,"max",t.control.max),$e(x,"step",t.control.step),Pn(x,S),Q(C,$)},[()=>Ke(t.control.path,t.control.min),()=>Ke(t.control.path)]),J("input",x,S=>ft(t.control.path,Number(S.currentTarget.value))),N(f,_)},y=f=>{var _=Ol();be(x=>ul(_,x),[()=>!!Ke(t.control.path)]),J("change",_,x=>ft(t.control.path,x.currentTarget.checked)),N(f,_)},h=f=>{var _=Pl();be(x=>Pn(_,x),[()=>Ke(t.control.path)]),J("input",_,x=>ft(t.control.path,x.currentTarget.value)),N(f,_)},d=f=>{var _=Cl();be(x=>{$e(_,"step",t.control.step||"any"),Pn(_,x)},[()=>Ke(t.control.path,0)]),J("input",_,x=>ft(t.control.path,Number(x.currentTarget.value))),N(f,_)},b=f=>{var _=Rl();be(x=>Pn(_,x),[()=>Ke(t.control.path,"")]),J("change",_,x=>ft(t.control.path,x.currentTarget.value)),N(f,_)};Bt(l,f=>{t.control.type==="select"?f(c):t.control.type==="tristate"?f(v,1):t.control.type==="slider"?f(p,2):t.control.type==="toggle"?f(y,3):t.control.type==="color"?f(h,4):t.control.type==="number"?f(d,5):t.control.type==="text"&&f(b,6)})}be(f=>Q(o,f),[()=>ae(t.control.label)]),N(e,a),Kt()}hr(["change","input"]),co();/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
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
 */const ns=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();var Vl=Uo("<svg><!><!></svg>");function fe(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]),n=oe(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);qt(t,!1);let i=St(t,"name",8,void 0),a=St(t,"color",8,"currentColor"),s=St(t,"size",8,24),o=St(t,"strokeWidth",8,2),l=St(t,"absoluteStrokeWidth",8,!1),c=St(t,"iconNode",24,()=>[]);dl();var v=Vl();Ya(v,(h,d,b)=>({...zl,...h,...n,width:s(),height:s(),stroke:a(),"stroke-width":d,class:b}),[()=>Dl(n)?void 0:{"aria-hidden":"true"},()=>(vr(l()),vr(o()),vr(s()),Qt(()=>l()?Number(o())*24/Number(s()):o())),()=>(vr(ns),vr(i()),vr(r),Qt(()=>ns("lucide-icon","lucide",i()?`lucide-${i()}`:"",r.class)))]);var p=L(v);Jt(p,1,c,La,(h,d)=>{var b=yt(()=>Fi(g(d),2));let f=()=>g(b)[0],_=()=>g(b)[1];var x=te(),k=K(x);tl(k,f,!0,(C,S)=>{Ya(C,()=>({..._()}))}),N(h,x)});var y=P(p);le(y,t,"default",{}),N(e,v),Kt()}function Bl(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];fe(e,ue({name:"camera"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=te(),o=K(s);le(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Fl(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M10 5H3"}],["path",{d:"M12 19H3"}],["path",{d:"M14 3v4"}],["path",{d:"M16 17v4"}],["path",{d:"M21 12h-9"}],["path",{d:"M21 19h-5"}],["path",{d:"M21 5h-7"}],["path",{d:"M8 10v4"}],["path",{d:"M8 12H3"}]];fe(e,ue({name:"sliders-horizontal"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=te(),o=K(s);le(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Hl(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"5",r:"1"}],["path",{d:"m9 20 3-6 3 6"}],["path",{d:"m6 8 6 2 6-2"}],["path",{d:"M12 10v4"}]];fe(e,ue({name:"person-standing"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=te(),o=K(s);le(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Ul(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];fe(e,ue({name:"zap"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=te(),o=K(s);le(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function jl(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]];fe(e,ue({name:"activity"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=te(),o=K(s);le(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Wl(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];fe(e,ue({name:"shield"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=te(),o=K(s);le(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Gl(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 19v3"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3"}]];fe(e,ue({name:"mic"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=te(),o=K(s);le(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Xl(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]];fe(e,ue({name:"image"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=te(),o=K(s);le(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Yl(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M10 18v-7"}],["path",{d:"M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"}],["path",{d:"M14 18v-7"}],["path",{d:"M18 18v-7"}],["path",{d:"M3 22h18"}],["path",{d:"M6 18v-7"}]];fe(e,ue({name:"landmark"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=te(),o=K(s);le(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function ql(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];fe(e,ue({name:"user"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=te(),o=K(s);le(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Kl(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];fe(e,ue({name:"globe"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=te(),o=K(s);le(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Zl(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]];fe(e,ue({name:"video"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=te(),o=K(s);le(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Ql(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];fe(e,ue({name:"sparkles"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=te(),o=K(s);le(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Jl(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 20v-9"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97"}],["path",{d:"M22 13h-4"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97"}],["path",{d:"M6 13H2"}],["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13"}]];fe(e,ue({name:"bug"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=te(),o=K(s);le(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function ec(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]];fe(e,ue({name:"monitor"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=te(),o=K(s);le(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function tc(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"10",r:"8"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 22h10"}],["path",{d:"M12 22v-4"}]];fe(e,ue({name:"webcam"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=te(),o=K(s);le(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function is(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}]];fe(e,ue({name:"circle"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=te(),o=K(s);le(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function rc(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];fe(e,ue({name:"square"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=te(),o=K(s);le(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function nc(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]];fe(e,ue({name:"eye"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=te(),o=K(s);le(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function ic(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}],["path",{d:"m2 2 20 20"}]];fe(e,ue({name:"eye-off"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=te(),o=K(s);le(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function ac(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];fe(e,ue({name:"folder-open"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=te(),o=K(s);le(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function sc(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];fe(e,ue({name:"info"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=te(),o=K(s);le(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function oc(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];fe(e,ue({name:"x"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=te(),o=K(s);le(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function lc(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];fe(e,ue({name:"settings"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=te(),o=K(s);le(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function cc(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];fe(e,ue({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(i,a)=>{var s=te(),o=K(s);le(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Je(e,t){const r={Camera:Bl,SlidersHorizontal:Fl,PersonStanding:Hl,Zap:Ul,Activity:jl,Shield:Wl,Mic:Gl,Image:Xl,Landmark:Yl,User:ql,Globe:Kl,Video:Zl,Sparkles:Ql,Bug:Jl,Monitor:ec,Webcam:tc,Circle:is,Square:rc,Eye:nc,EyeOff:ic,FolderOpen:ac,Info:sc,X:oc,Settings:lc,RefreshCw:cc};let n=St(t,"name",3,"Circle"),i=St(t,"size",3,16),a=St(t,"strokeWidth",3,2),s=St(t,"class",3,"");const o=yt(()=>r[n()]??is);var l=te(),c=K(l);el(c,()=>g(o),(v,p)=>{p(v,{get size(){return i()},get"stroke-width"(){return a()},get class(){return s()}})}),N(e,l)}var uc=xe('<div class="xra-sec-body"></div>'),fc=xe('<details class="xra-sec"><summary><span class="xra-sec-title"><!> <span> </span></span> <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></summary> <!></details>');function dc(e,t){qt(t,!0);const r="ui.sections_open";let n=Y(Ge(Qt(()=>{var f;return((f=Ke(r,{}))==null?void 0:f[t.section.id])??!1}))),i;function a(){M(n,!g(n)),ft(`${r}.${t.section.id}`,g(n))}Mn(()=>{ee.focusNonce,!(ee.focusSection!==t.section.id||!ee.panelOpen)&&(M(n,!0),ft(`${r}.${t.section.id}`,!0),requestAnimationFrame(()=>i==null?void 0:i.scrollIntoView({block:"nearest",behavior:"smooth"})))});var s=fc(),o=L(s),l=L(o),c=L(l);Je(c,{get name(){return t.section.icon},size:15,class:"xra-sec-icon"});var v=P(c,2),p=Z(v,!0),y=P(l,2);let h;var d=P(o,2);{var b=f=>{var _=uc();Jt(_,21,()=>t.section.controls,x=>x.path,(x,k)=>{var C=te(),S=K(C);{var $=B=>{Ll(B,{get control(){return g(k)}})},E=yt(()=>!g(k).when||g(k).when(qe));Bt(S,B=>{g(E)&&B($)})}N(x,C)}),N(f,_)};Bt(d,f=>{g(n)&&f(b)})}Za(s,f=>i=f,()=>i),be(f=>{s.open=g(n),Q(p,f),h=He(y,0,"xra-sec-chevron",null,h,{open:g(n)})},[()=>ae(t.section.title)]),J("click",o,f=>{f.preventDefault(),a()}),N(e,s),Kt()}hr(["click"]);var cn=xe('<option class="svelte-x8svx4"> </option>'),vc=xe('<div class="warn svelte-x8svx4"> </div>'),pc=xe('<div class="xra-startup svelte-x8svx4"><div class="card svelte-x8svx4"><div class="head svelte-x8svx4"><div class="svelte-x8svx4"><h2 class="svelte-x8svx4">XR Animator</h2> <div class="sub svelte-x8svx4"> </div></div></div> <div class="grid svelte-x8svx4"><label class="field svelte-x8svx4"><div class="sub svelte-x8svx4">Language</div> <select class="svelte-x8svx4"></select></label> <label class="field svelte-x8svx4"><div class="sub svelte-x8svx4">Master preset</div> <select class="svelte-x8svx4"></select></label></div> <div class="status svelte-x8svx4"> </div> <section class="camera svelte-x8svx4"><div class="camera-head svelte-x8svx4"><div class="camera-title svelte-x8svx4"> </div> <div> </div></div> <div class="camera-row svelte-x8svx4"><select class="svelte-x8svx4"><!></select> <button type="button" class="action svelte-x8svx4"><!></button></div> <!></section> <div class="sub bg svelte-x8svx4"> </div> <div class="avatar svelte-x8svx4"><div class="sub svelte-x8svx4"> </div> <button type="button" class="action svelte-x8svx4"> </button></div> <div class="foot svelte-x8svx4"><button type="button" class="action primary confirm svelte-x8svx4"> </button></div></div></div>');function hc(e,t){qt(t,!0);const r=()=>window.XRA,n=m=>ae(m),i=["AUTO","ECO","LOW","BALANCED","QUALITY","HIGH","MAX","CUSTOM"];function a(){var m,w,A;try{(A=(w=(m=r())==null?void 0:m.profileService)==null?void 0:w.save)==null||A.call(w,0)}catch{}}const s=(()=>{var w,A;const m=(A=(w=r())==null?void 0:w.i18n)==null?void 0:A.LANGUAGES;return Array.isArray(m)&&m.length?m:[["auto","Auto / System"],["en","English"],["it","Italiano"]]})();let o=Y("auto"),l=Y("CUSTOM"),c=Y(""),v=Y("default"),p=Y(Ge([])),y=Y(!1),h=Y(""),d=Y(!1),b=Y(""),f=Y(""),_=Y("Loading avatar…"),x=Y(!0),k=Y(!1),C=Y(!1),S=Y(!1),$=Y(!1),E=0,B=[];async function X(m){const w=r();if(m=String(m||"CUSTOM").toUpperCase(),m==="CUSTOM"){w.config.performance.master_preset="CUSTOM",a(),M(c,"CUSTOM · ready");return}if(m==="AUTO"){M(c,"Benchmarking…");const A=await w.performance.benchmarkHardwareOnly();M(c,`AUTO → ${A.preset} (${A.fps.toFixed(1)} fps)`),await w.performance.applyPresetSafe(A.preset),w.config.performance.master_preset="AUTO",w.config.performance.auto_last_result=A,a();return}M(c,`${m}: applying…`),await w.performance.applyPresetSafe(m),M(c,`${m} · applied`)}function re(m=""){var V,j,ie;const w=(V=r())==null?void 0:V.nativeBridge,A=((j=w==null?void 0:w.activeCamera)==null?void 0:j.call(w))||{},O=!!((ie=w==null?void 0:w.cameraRunning)!=null&&ie.call(w));M(d,O),M(b,m||(O?`${n("ON")} · ${A.label||n("Default camera")}`:n("OFF")),!0)}async function We(m=!1){var A,O,V;const w=(A=r())==null?void 0:A.nativeBridge;if(w!=null&&w.enumerateCameras){M(S,!0);try{const j=await w.enumerateCameras({requestPermission:m}),ie=w.activeCamera()||{};M(p,(j||[]).map(Ve=>({deviceId:Ve.deviceId,label:Ve.label})),!0);const he=ie.deviceId||((O=qe.devices)==null?void 0:O.camera_device_id)||"";M(h,g(p).some(Ve=>Ve.deviceId===he)?he:((V=g(p)[0])==null?void 0:V.deviceId)||"",!0),M(y,!0),re()}catch{M(y,!0),re(n("Camera unavailable"))}finally{M(S,!1)}}}async function Ne(m){var V,j;const w=(V=r())==null?void 0:V.nativeBridge,A=((j=m==null?void 0:m.currentTarget)==null?void 0:j.value)??g(h),O=g(p).find(ie=>ie.deviceId===A);if(O){M(S,!0);try{const ie={deviceId:O.deviceId,label:O.label};w.cameraRunning()?await w.switchCamera(ie):await w.setCameraPreference(ie),re()}catch(ie){re("Error · "+ie.message)}finally{M(S,!1)}}}function pt(){var A,O,V,j,ie,he,Ve,Re;const m=(V=(O=(A=r())==null?void 0:A.xraBackend)==null?void 0:O.snapshot)==null?void 0:V.call(O),w=(m==null?void 0:m.capture)||((Re=(Ve=(he=(ie=(j=window.SA_bridge)==null?void 0:j.backend)==null?void 0:ie.status)==null?void 0:he.call(ie))==null?void 0:Ve.backend)==null?void 0:Re.capture);if(w!=null&&w.camera_busy){const It=(w.busy_processes&&w.busy_processes.length?w.busy_processes:w.busy_process?[w.busy_process]:[]).filter(Sr=>!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(String(Sr).trim()));if(It.length)return{busy:!0,proc:It.join(", ")}}if(w!=null&&w.last_error&&w.last_error.includes("Webcam occupata")){const _e=w.last_error.match(/Webcam occupata da:\s*([^.]+)/i),It=_e?_e[1].trim():"";if(!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(It))return{busy:!0,proc:w.last_error}}return{busy:!1,proc:""}}function nr(){var m,w,A,O,V,j,ie,he,Ve;if(typeof((w=(m=r())==null?void 0:m.nativeBridge)==null?void 0:w.isAvatarReady)=="function")return r().nativeBridge.isAvatarReady();if((A=window.MMD_SA)!=null&&A.MMD_started){const Re=(j=(V=(O=window.MMD_SA)==null?void 0:O.THREEX)==null?void 0:V.get_model)==null?void 0:j.call(V,0);let _e=Re;if((Re==null?void 0:Re.type)==="MMD_dummy")try{_e=Re.model||null}catch{_e=null}const It=((ie=_e==null?void 0:_e.model)==null?void 0:ie.scene)||(_e==null?void 0:_e.mesh)||(_e==null?void 0:_e.scene)||null;if(_e&&!(Re!=null&&Re.loading)&&!_e.loading&&!((Ve=(he=window.MMD_SA)==null?void 0:he.THREEX)!=null&&Ve._loading_model)&&It)return It.visible!==!1}return!1}function Wt(){var w,A,O;const m=(w=r())==null?void 0:w.xraBackend;return!m||!m.active?!0:!!((O=(A=m.snapshot)==null?void 0:A.call(m))!=null&&O.ready)}function Ze(){if(g($)||!ee.startupOpen)return;const m=pt();M(f,m.busy?`Webcam in use by another application (${m.proc}). Close it to start tracking.`:"",!0),nr()?Wt()?m.busy?(M(x,!0),M(_,n("Camera busy…"),!0)):g(k)?M(x,!0):(M(x,!1),M(_,"START")):(M(x,!0),M(_,n("Connecting to backend…"),!0)):(M(x,!0),M(_,n("Loading avatar…"),!0))}async function it(m){var A,O,V;const w=((A=m==null?void 0:m.currentTarget)==null?void 0:A.value)??g(l);M(l,w,!0),M(C,!0);try{await X(w),r().events.emit("state",{path:"performance.master_preset",value:r().config.performance.master_preset}),wl()}catch(j){console.error("[XRA START]",j),M(c,"Preset error: "+j.message)}finally{M(C,!1),(V=(O=r().ui)==null?void 0:O.refresh)==null||V.call(O)}}function G(m){var w,A,O,V;M(o,((w=m==null?void 0:m.currentTarget)==null?void 0:w.value)??g(o),!0),(V=(O=(A=r())==null?void 0:A.i18n)==null?void 0:O.setLanguage)==null||V.call(O,g(o))}async function pe(){var m,w;try{await((w=(m=r().nativeBridge)==null?void 0:m.openVrmPicker)==null?void 0:w.call(m))}catch(A){r().toast("VRM loader: "+A.message,"error",4500)}}async function me(m=!1){var A,O,V,j,ie,he,Ve,Re;if(g($)||g(x))return;M($,!0),E&&(clearInterval(E),E=0),M(k,!0),M(_,"Starting…");const w=r();if(a(),ee.startupOpen=!1,(O=(A=w.ui)==null?void 0:A.refresh)==null||O.call(A),m)try{typeof w.whenNativeReady=="function"&&await w.whenNativeReady(15e3),(V=w.xraBackend)!=null&&V.waitUntilReady&&await w.xraBackend.waitUntilReady(6e3).catch(()=>{}),await((ie=(j=w.nativeBridge)==null?void 0:j.startNativeStreamer)==null?void 0:ie.call(j))}catch(_e){(Ve=(he=globalThis.XRA_CAMERA_OWNERSHIP)==null?void 0:he.isOwnershipError)!=null&&Ve.call(he,_e)||(console.warn("[XRA START]","Auto-starting camera on START failed",_e),(Re=w.toast)==null||Re.call(w,"Starting camera: "+_e.message,"warn",5e3))}}$i(()=>{var w,A,O,V,j,ie,he,Ve,Re,_e,It,Sr,gs,ms,ys,ws,bs,Fn,xs,Ss,ks,$s;const m=r();M(c,n("Ready."),!0),M(o,((A=(w=m==null?void 0:m.config)==null?void 0:w.ui)==null?void 0:A.language)||"auto",!0),M(l,((V=(O=m==null?void 0:m.config)==null?void 0:O.performance)==null?void 0:V.master_preset)==="MINIMAL"?"ECO":((ie=(j=m==null?void 0:m.config)==null?void 0:j.performance)==null?void 0:ie.master_preset)||"CUSTOM",!0),M(v,((Ve=(he=m==null?void 0:m.config)==null?void 0:he.background)==null?void 0:Ve.path)||((_e=(Re=m==null?void 0:m.config)==null?void 0:Re.background)==null?void 0:_e.color)||"default",!0);try{const Lt=(gs=(Sr=(It=window.SA_bridge)==null?void 0:It.backend)==null?void 0:Sr.status)==null?void 0:gs.call(Sr),Hn=(ys=(ms=window.System)==null?void 0:ms._browser)==null?void 0:ys.camera;(bs=(ws=Lt==null?void 0:Lt.backend)==null?void 0:ws.capture)!=null&&bs.running&&!(Hn!=null&&Hn.running)&&((xs=(Fn=window.SA_bridge.backend)==null?void 0:Fn.stop)==null||xs.call(Fn).catch(()=>{}))}catch{}re(),setTimeout(()=>We(!1),100),E=setInterval(Ze,300),window.addEventListener("MMDStarted",Ze),(Ss=m.xraBackend)!=null&&Ss.onStatus&&m.xraBackend.onStatus(Ze),Ze(),($s=(ks=m.whenNativeReady)==null?void 0:ks.call(m))==null||$s.then(()=>{ee.startupOpen&&We(!1)});for(const Lt of["camera-started","camera-stopped","camera-switched"])B.push(m.events.on(Lt,()=>{ee.startupOpen&&We(!1)}));for(const Lt of["avatar-loading","avatar-changed","avatar-ready"])B.push(m.events.on(Lt,()=>Ze()));return()=>{E&&clearInterval(E),window.removeEventListener("MMDStarted",Ze);for(const Lt of B)try{Lt()}catch{}B=[]}});var Te=pc(),Oe=L(Te),Le=L(Oe),ze=L(Le),Pe=P(L(ze),2),ht=Z(Pe,!0),T=P(Le,2),z=L(T),F=P(L(z),2);Jt(F,21,()=>s,([m,w])=>m,(m,w)=>{var A=yt(()=>Fi(g(w),2));let O=()=>g(A)[0],V=()=>g(A)[1];var j=cn(),ie=Z(j,!0),he={};be(()=>{Q(ie,V()),he!==(he=O())&&(j.value=(j.__value=he)??"")}),N(m,j)});var ne;gr(F);var Ce=P(z,2),Ee=P(L(Ce),2);Jt(Ee,20,()=>i,m=>m,(m,w)=>{var A=cn(),O=Z(A,!0),V={};be(()=>{Q(O,w),V!==(V=w)&&(A.value=(A.__value=V)??"")}),N(m,A)});var De;gr(Ee);var _t=P(T,2),ir=Z(_t,!0),Vn=P(_t,2),cs=L(Vn),us=L(cs),$c=Z(us,!0),fs=P(us,2);let ds;var Ec=Z(fs,!0),vs=P(cs,2),ar=L(vs),Ac=L(ar);{var Mc=m=>{var w=cn(),A=Z(w,!0);w.value=w.__value="",be(O=>Q(A,O),[()=>n("Loading cameras…")]),N(m,w)},Nc=m=>{var w=cn(),A=Z(w,!0);w.value=w.__value="",be(O=>Q(A,O),[()=>n("No cameras found")]),N(m,w)},Tc=m=>{var w=te(),A=K(w);Jt(A,17,()=>g(p),O=>O.deviceId,(O,V)=>{var j=cn(),ie=Z(j,!0),he={};be(()=>{Q(ie,g(V).label),he!==(he=g(V).deviceId)&&(j.value=(j.__value=he)??"")}),N(O,j)}),N(m,w)};Bt(Ac,m=>{g(y)?g(p).length?m(Tc,-1):m(Nc,1):m(Mc)})}var Bn;gr(ar);var hn=P(ar,2),Oc=L(hn);Je(Oc,{name:"RefreshCw",size:14});var Pc=P(vs,2);{var Cc=m=>{var w=vc(),A=Z(w,!0);be(()=>Q(A,g(f))),N(m,w)};Bt(Pc,m=>{g(f)&&m(Cc)})}var ps=P(Vn,2),Rc=Z(ps),hs=P(ps,2),_s=L(hs),Ic=Z(_s,!0),Ai=P(_s,2),Lc=Z(Ai,!0),zc=P(hs,2),Mi=L(zc),Dc=Z(Mi,!0);be((m,w,A,O,V,j)=>{Q(ht,m),F.disabled=g($),ne!==(ne=g(o))&&(F.value=(F.__value=ne)??"",Ft(F,ne)),Ee.disabled=g(C)||g($),De!==(De=g(l))&&(Ee.value=(Ee.__value=De)??"",Ft(Ee,De)),Q(ir,g(c)),Q($c,w),ds=He(fs,1,"camera-state svelte-x8svx4",null,ds,{on:g(d)}),Q(Ec,g(b)),ar.disabled=g(S),Bn!==(Bn=g(h))&&(ar.value=(ar.__value=Bn)??"",Ft(ar,Bn)),$e(hn,"title",A),$e(hn,"aria-label",O),hn.disabled=g(S),Q(Rc,`Background: ${g(v)??""}`),Q(Ic,V),Ai.disabled=g($),Q(Lc,j),Mi.disabled=g(x)||g(k),Q(Dc,g(_))},[()=>n("Quick setup · changes apply immediately."),()=>n("Webcam"),()=>n("Refresh cameras"),()=>n("Refresh cameras"),()=>n("Avatar: the last VRM you chose is copied into avatars/ and restored at startup."),()=>n("Load / change VRM…")]),J("change",F,G),J("change",Ee,it),J("change",ar,Ne),J("click",hn,()=>We(!0)),J("click",Ai,pe),J("click",Mi,()=>me(!0)),N(e,Te),Kt()}hr(["change","click"]);var _c=xe('<button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button>'),gc=xe('<nav class="xra-dock group fixed left-2 top-1/2 z-[99990] flex w-[46px] max-h-[92vh] -translate-y-1/2 flex-col gap-0.5 overflow-hidden rounded-xl border border-white/10 bg-[var(--xra-ui-bg)] p-1.5 font-sans text-[12.5px] leading-snug text-[var(--xra-ui-fg)] shadow-[0_12px_40px_rgba(0,0,0,.55)] transition-[width] duration-200 hover:w-[232px]"><!> <div class="my-1 h-px bg-white/10"></div> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button></nav>');function mc(e,t){qt(t,!0);const r=()=>window.XRA;let n=Y(!1),i=Y(!1),a=Y(!1),s=0;function o(){var z,F,ne,Ce,Ee,De,_t;const T=r();if(T){try{M(n,!!((F=(z=T.nativeBridge)==null?void 0:z.cameraRunning)!=null&&F.call(z)))}catch{}try{M(i,!!((Ee=(Ce=(ne=T.recorder)==null?void 0:ne.status)==null?void 0:Ce.call(ne))!=null&&Ee.active))}catch{}try{M(a,!!((_t=(De=T.nativeBridge)==null?void 0:De.getPreviewVisibility)!=null&&_t.call(De,"video")))}catch{}}}async function l(){var z,F;const T=r().nativeBridge;try{T.cameraRunning()?await T.stopNativeStreamer():await T.startNativeStreamer()}catch(ne){(F=(z=r()).toast)==null||F.call(z,"Tracking: "+ne.message,"warn",4e3)}finally{setTimeout(o,250)}}async function c(){var z,F,ne;const T=r().recorder;try{(z=T.status)!=null&&z.call(T).active?await T.stop():await T.start()}catch(Ce){(ne=(F=r()).toast)==null||ne.call(F,"Recording: "+Ce.message,"warn",4e3)}finally{setTimeout(o,250)}}function v(){var z,F;const T=!g(a);try{(F=(z=r().nativeBridge)==null?void 0:z.setPreviewVisibility)==null||F.call(z,"video",T)}catch{}M(a,T)}async function p(){var T,z,F,ne;try{await((z=(T=r().nativeBridge)==null?void 0:T.openVrmPicker)==null?void 0:z.call(T))}catch(Ce){(ne=(F=r()).toast)==null||ne.call(F,"VRM loader: "+Ce.message,"error",4500)}}function y(){var T,z;try{(z=(T=r().nativeBridge)==null?void 0:T.showAbout)==null||z.call(T)}catch{}}const h=[{id:"ui",icon:"Monitor",label:"UI Settings"},{id:"camera",icon:"Camera",label:"Webcam settings"},{id:"avatar",icon:"User",label:"Model settings"},{id:"second_avatar",icon:"Globe",label:"Studio link"},{id:"stage",icon:"Landmark",label:"Environment + Camera"},{id:"background",icon:"Image",label:"Background"},{id:"lip",icon:"Mic",label:"Audio"}],d="hover:bg-white/10",b="flex-1 overflow-hidden opacity-0 transition-opacity duration-150 group-hover:opacity-100";$i(()=>(o(),s=setInterval(o,1e3),()=>clearInterval(s)));var f=gc(),_=L(f);Jt(_,17,()=>h,T=>T.id,(T,z)=>{var F=_c();He(F,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var ne=L(F),Ce=L(ne);Je(Ce,{get name(){return g(z).icon},size:16});var Ee=P(ne,2);He(Ee,1,_r(b));var De=Z(Ee,!0);be((_t,ir)=>{$e(F,"title",_t),Q(De,ir)},[()=>ae(g(z).label),()=>ae(g(z).label)]),J("click",F,()=>ml(g(z).id)),N(T,F)});var x=P(_,4),k=L(x),C=L(k);{let T=yt(()=>g(n)?"text-emerald-400":"");Je(C,{name:"Webcam",size:16,get class(){return g(T)}})}var S=P(k,2);He(S,1,_r(b));var $=Z(S,!0),E=P(x,2),B=L(E),X=L(B);{let T=yt(()=>g(i)?"Square":"Circle"),z=yt(()=>g(i)?"text-red-400":"");Je(X,{get name(){return g(T)},size:16,get class(){return g(z)}})}var re=P(B,2);He(re,1,_r(b));var We=Z(re,!0),Ne=P(E,2),pt=L(Ne),nr=L(pt);{let T=yt(()=>g(a)?"Eye":"EyeOff");Je(nr,{get name(){return g(T)},size:16})}var Wt=P(pt,2);He(Wt,1,_r(b));var Ze=Z(Wt,!0),it=P(Ne,2);He(it,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var G=L(it),pe=L(G);Je(pe,{name:"FolderOpen",size:16});var me=P(G,2);He(me,1,_r(b));var Te=Z(me,!0),Oe=P(it,2);He(Oe,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var Le=L(Oe),ze=L(Le);Je(ze,{name:"Info",size:16});var Pe=P(Le,2);He(Pe,1,_r(b));var ht=Z(Pe,!0);be((T,z,F,ne,Ce,Ee,De,_t,ir,Vn)=>{He(x,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${g(n)?"bg-emerald-500/20":d}`),$e(x,"title",T),Q($,z),He(E,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${g(i)?"bg-red-500/30 text-red-200":d}`),$e(E,"title",F),Q(We,ne),He(Ne,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${g(a)?"bg-emerald-500/20":d}`),$e(Ne,"title",Ce),Q(Ze,Ee),$e(it,"title",De),Q(Te,_t),$e(Oe,"title",ir),Q(ht,Vn)},[()=>ae("Tracking"),()=>g(n)?ae("Tracking on"):ae("Tracking off"),()=>ae("Record"),()=>g(i)?ae("Stop recording"):ae("Record"),()=>ae("Preview"),()=>g(a)?ae("Hide preview"):ae("Show preview"),()=>ae("Load / change VRM…"),()=>ae("Load / change VRM…"),()=>ae("About"),()=>ae("About")]),J("click",x,l),J("click",E,c),J("click",Ne,v),J("click",it,p),J("click",Oe,y),N(e,f),Kt()}hr(["click"]);var yc=xe('<div class="xra-mocap-window fixed z-[99991] flex flex-col overflow-hidden rounded-xl border border-white/15 bg-[var(--xra-ui-bg)] text-[var(--xra-ui-fg)] shadow-[0_16px_48px_rgba(0,0,0,.6)] font-sans"><header class="flex shrink-0 cursor-move touch-none select-none items-center gap-2 px-2 py-1.5"><!> <span class="flex-1 text-[12px] font-semibold"> </span> <select class="rounded-md border border-white/15 bg-[#101214] px-1.5 py-0.5 text-[11px] text-[var(--xra-ui-fg)]"><option> </option><option> </option><option> </option><option> </option></select> <button type="button" class="rounded-md border border-white/15 bg-white/5 px-1.5 py-0.5 cursor-pointer text-[var(--xra-ui-fg)]"><!></button></header> <div class="relative min-h-0 flex-1 bg-black/50"><canvas class="absolute inset-0 h-full w-full"></canvas> <div class="absolute bottom-0 right-0 z-10 h-5 w-5 cursor-nwse-resize touch-none"></div></div></div>');function wc(e,t){qt(t,!0);const r=()=>window.XRA,n=Ke("ui.mocap_window",{})||{};let i=Y(Ge(Number.isFinite(n.x)?n.x:48)),a=Y(Ge(Number.isFinite(n.y)?n.y:96)),s=Y(Ge(Number.isFinite(n.w)?n.w:360)),o=Y(Ge(Number.isFinite(n.h)?n.h:270)),l,c=0;function v(){ft("ui.mocap_window",{x:Math.round(g(i)),y:Math.round(g(a)),w:Math.round(g(s)),h:Math.round(g(o))})}function p(G,pe){G.preventDefault();const me=G.clientX,Te=G.clientY,Oe=g(i),Le=g(a),ze=g(s),Pe=g(o),ht=z=>{const F=z.clientX-me,ne=z.clientY-Te;pe==="move"?(M(i,Math.max(0,Math.min(window.innerWidth-80,Oe+F)),!0),M(a,Math.max(0,Math.min(window.innerHeight-30,Le+ne)),!0)):(M(s,Math.max(200,Math.min(window.innerWidth-g(i),ze+F)),!0),M(o,Math.max(130,Math.min(window.innerHeight-g(a),Pe+ne)),!0))},T=()=>{window.removeEventListener("pointermove",ht),window.removeEventListener("pointerup",T),v()};window.addEventListener("pointermove",ht),window.addEventListener("pointerup",T)}function y(G,pe,me,Te,Oe,Le,ze){if(!Oe||!Le)return;const Pe=Math.min(me/Oe,Te/Le),ht=Oe*Pe,T=Le*Pe,z=(me-ht)/2,F=(Te-T)/2;ze&&(G.save(),G.translate(me,0),G.scale(-1,1)),G.drawImage(pe,z,F,ht,T),ze&&G.restore()}function h(){var ne,Ce,Ee,De;if(c=requestAnimationFrame(h),!l)return;const G=l.parentElement;if(!G)return;const pe=window.devicePixelRatio||1,me=G.clientWidth,Te=G.clientHeight;if(me<2||Te<2)return;const Oe=Math.round(me*pe),Le=Math.round(Te*pe);(l.width!==Oe||l.height!==Le)&&(l.width=Oe,l.height=Le);const ze=l.getContext("2d");if(!ze)return;ze.setTransform(pe,0,0,pe,0,0),ze.clearRect(0,0,me,Te);const Pe=Ke("ui.mocap_view","off");if(Pe==="off")return;const ht=((Ee=(Ce=(ne=r())==null?void 0:ne.nativeBridge)==null?void 0:Ce.getMocapSources)==null?void 0:Ee.call(Ce))||{},T=ht.video,z=(ht.canvases||[]).find(_t=>_t&&_t.width),F=!!((De=qe.devices)!=null&&De.mirror_preview);(Pe==="both"||Pe==="video")&&T&&T.readyState>=2&&y(ze,T,me,Te,T.videoWidth,T.videoHeight,F),(Pe==="both"||Pe==="wireframe")&&z&&y(ze,z,me,Te,z.width,z.height,!1)}$i(()=>(h(),()=>cancelAnimationFrame(c)));var d=yc(),b=L(d),f=L(b);Je(f,{name:"Activity",size:14});var _=P(f,2),x=Z(_,!0),k=P(_,2),C=L(k),S=Z(C,!0);C.value=C.__value="both";var $=P(C),E=Z($,!0);$.value=$.__value="wireframe";var B=P($),X=Z(B,!0);B.value=B.__value="video";var re=P(B),We=Z(re,!0);re.value=re.__value="off";var Ne;gr(k);var pt=P(k,2),nr=L(pt);Je(nr,{name:"X",size:13});var Wt=P(b,2),Ze=L(Wt);Za(Ze,G=>l=G,()=>l);var it=P(Ze,2);be((G,pe,me,Te,Oe,Le,ze,Pe)=>{Fa(d,`left:${g(i)??""}px; top:${g(a)??""}px; width:${g(s)??""}px; height:${g(o)??""}px;`),Q(x,G),Q(S,pe),Q(E,me),Q(X,Te),Q(We,Oe),Ne!==(Ne=Le)&&(k.value=(k.__value=Ne)??"",Ft(k,Ne)),$e(pt,"title",ze),$e(it,"title",Pe)},[()=>ae("Mocap"),()=>ae("Webcam + skeleton"),()=>ae("Skeleton only"),()=>ae("Webcam only"),()=>ae("Off"),()=>Ke("ui.mocap_view","off"),()=>ae("Close"),()=>ae("Resize")]),J("pointerdown",b,G=>p(G,"move")),J("change",k,G=>ft("ui.mocap_view",G.currentTarget.value)),J("pointerdown",k,G=>G.stopPropagation()),J("click",pt,()=>ft("ui.mocap_view","off")),J("pointerdown",pt,G=>G.stopPropagation()),J("pointerdown",it,G=>{G.stopPropagation(),p(G,"resize")}),N(e,d),Kt()}hr(["pointerdown","change","click"]);var bc=xe('<aside class="xra-panel"><header class="xra-panel-head"><strong>XR Animator</strong> <span class="xra-spacer"></span> <button><!></button> <button title="Close panel"><!></button></header> <div class="xra-panel-body"></div></aside>'),xc=xe('<button class="xra-panel-launcher"><!></button>'),Sc=xe("<!> <!> <!> <!>",1);function kc(e,t){qt(t,!0),bl();const r=yt(()=>El(qe));var n=Sc(),i=K(n);{var a=d=>{hc(d,{})};Bt(i,d=>{ee.ready&&ee.startupOpen&&d(a)})}var s=P(i,2);{var o=d=>{mc(d,{})};Bt(s,d=>{ee.ready&&!ee.startupOpen&&d(o)})}var l=P(s,2);{var c=d=>{wc(d,{})},v=yt(()=>ee.ready&&!ee.startupOpen&&Ke("ui.mocap_view","off")!=="off");Bt(l,d=>{g(v)&&d(c)})}var p=P(l,2);{var y=d=>{var $,E,B;var b=bc(),f=L(b),_=P(L(f),4);$e(_,"title",((B=(E=($=window.XRA)==null?void 0:$.i18n)==null?void 0:E.t)==null?void 0:B.call(E,"Clean screen mode (Press Esc to restore)"))||"Clean screen (Esc)");var x=L(_);Je(x,{name:"EyeOff",size:15});var k=P(_,2),C=L(k);Je(C,{name:"X",size:15});var S=P(f,2);Jt(S,21,()=>g(r),X=>X.id,(X,re)=>{dc(X,{get section(){return g(re)}})}),J("click",_,function(...X){In==null||In.apply(this,X)}),J("click",k,()=>ee.panelOpen=!1),N(d,b)},h=d=>{var b=xc(),f=L(b);Je(f,{name:"Settings",size:16}),J("click",b,()=>{ee.panelOpen=!0,es()}),N(d,b)};Bt(p,d=>{ee.ready&&!ee.startupOpen&&ee.panelOpen?d(y):ee.ready&&!ee.startupOpen&&d(h,1)})}N(e,n),Kt()}hr(["click"]),window.XRA_SVELTE_UI=!0;function as(){let e=document.getElementById("XRA_SVELTE");e||(e=document.createElement("div"),e.id="XRA_SVELTE",document.body.appendChild(e)),Yo(kc,{target:e})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",as):as()})();

})();
