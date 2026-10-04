(function(){
var Vc=Object.defineProperty;var Es=de=>{throw TypeError(de)};var Bc=(de,ie,Se)=>ie in de?Vc(de,ie,{enumerable:!0,configurable:!0,writable:!0,value:Se}):de[ie]=Se;var st=(de,ie,Se)=>Bc(de,typeof ie!="symbol"?ie+"":ie,Se),Ti=(de,ie,Se)=>ie.has(de)||Es("Cannot "+Se);var u=(de,ie,Se)=>(Ti(de,ie,"read from private field"),Se?Se.call(de):ie.get(de)),z=(de,ie,Se)=>ie.has(de)?Es("Cannot add the same private member more than once"):ie instanceof WeakSet?ie.add(de):ie.set(de,Se),R=(de,ie,Se,ln)=>(Ti(de,ie,"write to private field"),ln?ln.call(de,Se):ie.set(de,Se),Se),j=(de,ie,Se)=>(Ti(de,ie,"access private method"),Se);(function(){"use strict";var os,zn,rn,wn,Dn,Vn,Bn,Wt,Fn,et,fr,jt,kt,Ct,Hn,bn,q,Oi,Pi,gr,Ci,As,Ms,Wn,Fc,mr,ls,vt,Ai,pt,xn,Fe,tt,He,nt,Rt,Sn,an,Un,dr,vr,Gt,Dr,le,Hc,Uc,Ri,Wc,Ii,yr,Wr,Li,zi,$t,It,rt,kn,pr,hr,Vr,cs;var ie=Array.isArray,Se=Array.prototype.indexOf,ln=Array.prototype.includes,wr=Array.from,Di=Object.defineProperty,Yt=Object.getOwnPropertyDescriptor,Vi=Object.getOwnPropertyDescriptors,Ns=Object.prototype,Ts=Array.prototype,jr=Object.getPrototypeOf,Bi=Object.isExtensible;function jn(e){return typeof e=="function"}const Os=()=>{};function Ps(e){return e()}function Gr(e){for(var t=0;t<e.length;t++)e[t]()}function Fi(){var e,t,n=new Promise((r,i)=>{e=r,t=i});return{promise:n,resolve:e,reject:t}}function Hi(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const n=[];for(const r of e)if(n.push(r),n.length===t)break;return n}const Ie=2,En=4,Gn=8,Xr=1<<24,gt=16,ot=32,Vt=64,Yr=128,qr=256,mt=512,ke=1024,ye=2048,lt=4096,De=8192,Ve=16384,An=32768,br=1<<25,qt=65536,xr=1<<17,Cs=1<<18,Mn=1<<19,Ui=1<<20,At=1<<25,Sr=1<<21,Nn=1<<22,Kt=1<<23,Mt=Symbol("$state"),Wi=Symbol("component"),ji=Symbol("legacy props"),Rs=Symbol(""),kr=Symbol("attributes"),Kr=Symbol("class"),Zr=Symbol("style"),Xn=Symbol("text"),Yn=new class extends Error{constructor(){super(...arguments);st(this,"name","StaleReactionError");st(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},$r=!!((os=globalThis.document)!=null&&os.contentType)&&globalThis.document.contentType.includes("xml"),Is=1,Ls=2,Gi=4,zs=8,Ds=16,Vs=1,Bs=2,Xi=4,Fs=8,Hs=16,Us=1,Ws=2,we=Symbol("uninitialized"),Yi="http://www.w3.org/1999/xhtml",js="http://www.w3.org/2000/svg",Gs="@attach";function Xs(){console.warn("https://svelte.dev/e/derived_inert")}function Ys(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function qs(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function qi(e){return e===this.v}function Ks(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Ki(e){return!Ks(e,this.v)}function Zs(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Qs(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Js(e,t,n){throw new Error("https://svelte.dev/e/each_key_duplicate")}function eo(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function to(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function no(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ro(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function io(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function ao(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function so(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function oo(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function lo(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Tn=!1,jc=!1;function co(){Tn=!0}let ve=null;function On(e){ve=e}function Zt(e,t=!1,n){ve={p:ve,i:!1,c:null,e:null,s:e,x:null,r:F,l:Tn&&!t?{s:null,u:null,$:[]}:null}}function Qt(e){var t=ve,n=t.e;if(n!==null){t.e=null;for(var r of n)ma(r)}return t.i=!0,ve=t.p,Qr(e)}function Qr(e={}){return Di(e,Wi,{value:!0}),e}function qn(){return!Tn||ve!==null&&ve.l===null}let Pn=[];function uo(){var e=Pn;Pn=[],Gr(e)}function Nt(e){if(Pn.length===0){var t=Pn;queueMicrotask(()=>{t===Pn&&uo()})}Pn.push(e)}const fo=-7169;function me(e,t){e.f=e.f&fo|t}function Jr(e){(e.f&mt)!==0||e.deps===null?me(e,ke):me(e,lt)}function Zi(e,t,n){(e.f&ye)!==0?t.add(e):(e.f&lt)!==0&&n.add(e),me(e,ke)}function vo(e,t){if(t){const n=document.body;e.autofocus=!0,Nt(()=>{document.activeElement===n&&e.focus()})}}function Kn(e){var t=B,n=F;ct(null),ut(null);try{return e()}finally{ct(t),ut(n)}}function Qi(e,t,n,r){const i=qn()?Cn:ei;var a=e.filter(h=>!h.settled),s=t.map(i);if(n.length===0&&a.length===0){r(s);return}var o=F,l=po(),c=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(h=>h.promise)):null;function v(h){if((o.f&Ve)===0){l();try{r([...s,...h])}catch(d){Ot(d,o)}Er()}}var p=Ji();if(n.length===0){c.then(()=>v([])).finally(p);return}function y(){Promise.all(n.map(h=>ho(h))).then(v).catch(h=>Ot(h,o)).finally(p)}c?c.then(()=>{l(),y(),Er()}):y()}function po(){var e=F,t=B,n=ve,r=C;return function(a=!0){ut(e),ct(t),On(n),a&&(e.f&Ve)===0&&(r==null||r.activate(),r==null||r.apply())}}function Er(e=!0){ut(null),ct(null),On(null),e&&(C==null||C.deactivate())}function Ji(){var e=F,t=e.b,n=C,r=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,n),n.increment(r,e),()=>{t==null||t.update_pending_count(-1,n),n.decrement(r,e)}}function Cn(e){var t=Ie|ye;return F!==null&&(F.f|=Mn),{ctx:ve,deps:null,effects:null,equals:qi,f:t,fn:e,reactions:null,rv:0,v:we,wv:0,parent:F,ac:null}}const Zn=Symbol("obsolete");function ho(e,t,n){let r=F;r===null&&Qs();var i=void 0,a=Jt(we),s=!B,o=new Set;return Mo(()=>{var h,d;var l=F,c=Fi();i=c.promise;try{Promise.resolve(e()).then(c.resolve,x=>{x!==Yn&&c.reject(x)}).finally(Er)}catch(x){c.reject(x),Er()}var v=C;if(s){if((l.f&An)!==0)var p=Ji();if((h=r.b)!=null&&h.is_rendered())(d=v.async_deriveds.get(l))==null||d.reject(Zn);else for(const x of o.values())x.reject(Zn);o.add(c),v.async_deriveds.set(l,c)}const y=(x,f=void 0)=>{p==null||p(),o.delete(c),f!==Zn&&(v.activate(),f?(a.f|=Kt,In(a,f)):((a.f&Kt)!==0&&(a.f^=Kt),In(a,x)),v.deactivate())};c.promise.then(y,x=>y(null,x||"unknown"))}),ui(()=>{for(const l of o)l.reject(Zn)}),new Promise(l=>{function c(v){function p(){v===i?l(a):c(i)}v.then(p,p)}c(i)})}function yt(e){const t=Cn(e);return Ea(t),t}function ei(e){const t=Cn(e);return t.equals=Ki,t}function _o(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)Te(t[n])}}function ti(e){var t,n=F,r=e.parent;if(!Ft&&r!==null&&e.v!==we&&(r.f&(Ve|De))!==0)return Xs(),e.v;ut(r);try{_o(e),t=Oa(e)}finally{ut(n)}return t}function ea(e){var t=ti(e);if(!e.equals(t)&&(e.wv=Na(),(!(C!=null&&C.is_fork)||e.deps===null)&&(C!==null?(C.capture(e,t,!0),Qn==null||Qn.capture(e,t,!0)):e.v=t,e.deps===null))){me(e,ke);return}Ft||(Ne!==null?(ci()||C!=null&&C.is_fork)&&Ne.set(e,t):Jr(e))}function go(e){var t;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),n.ac!==null&&Kn(()=>{n.ac.abort(Yn),n.ac=null}),n.fn!==null&&(n.teardown=Os),ir(n,0),di(n))}function ta(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&Ln(t)}let ni=null,Rn=null,C=null,Qn=null,Ne=null,ri=null,ii=!1,Jn=null,Ar=null;var na=0,Gc=new Set;let mo=1;const zr=class zr{constructor(){z(this,q);st(this,"id",mo++);z(this,zn,!1);st(this,"linked",!0);z(this,rn,null);z(this,wn,null);st(this,"async_deriveds",new Map);st(this,"current",new Map);st(this,"previous",new Map);z(this,Dn,new Set);z(this,Vn,new Set);z(this,Bn,0);z(this,Wt,new Map);z(this,Fn,null);z(this,et,[]);z(this,fr,[]);z(this,jt,new Set);z(this,kt,new Set);z(this,Ct,new Map);z(this,Hn,new Set);st(this,"is_fork",!1);z(this,bn,!1);Rn===null?ni=Rn=this:(R(Rn,wn,this),R(this,rn,Rn)),Rn=this}skip_effect(t){u(this,Ct).has(t)||u(this,Ct).set(t,{d:[],m:[]}),u(this,Hn).delete(t)}unskip_effect(t,n=r=>this.schedule(r)){var r=u(this,Ct).get(t);if(r){u(this,Ct).delete(t);for(var i of r.d)me(i,ye),n(i);for(i of r.m)me(i,lt),n(i)}u(this,Hn).add(t)}capture(t,n,r=!1){t.v!==we&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&Kt)===0&&(this.current.set(t,[n,r]),Ne==null||Ne.set(t,n)),this.is_fork||(t.v=n)}activate(){C=this}deactivate(){C=null,Ne=null}flush(){try{ii=!0,C=this,j(this,q,gr).call(this)}finally{na=0,ri=null,Jn=null,Ar=null,ii=!1,C=null,Ne=null,Tt.clear()}}discard(){var t;for(const n of u(this,Vn))n(this);u(this,Vn).clear();for(const n of this.async_deriveds.values())n.reject(Zn);j(this,q,mr).call(this),(t=u(this,Fn))==null||t.resolve()}register_created_effect(t){u(this,fr).push(t)}increment(t,n){if(R(this,Bn,u(this,Bn)+1),t){let r=u(this,Wt).get(n)??0;u(this,Wt).set(n,r+1)}}decrement(t,n){if(R(this,Bn,u(this,Bn)-1),t){let r=u(this,Wt).get(n)??0;r===1?u(this,Wt).delete(n):u(this,Wt).set(n,r-1)}u(this,bn)||(R(this,bn,!0),Nt(()=>{R(this,bn,!1),this.linked&&this.flush()}))}transfer_effects(t,n){for(const r of t)u(this,jt).add(r);for(const r of n)u(this,kt).add(r);t.clear(),n.clear()}oncommit(t){u(this,Dn).add(t)}ondiscard(t){u(this,Vn).add(t)}settled(){return(u(this,Fn)??R(this,Fn,Fi())).promise}static ensure(){if(C===null){const t=C=new zr;ii||Nt(()=>{u(t,zn)||t.flush()})}return C}apply(){{Ne=null;return}}schedule(t){var n;if(ri=t,(n=t.b)!=null&&n.is_pending&&(t.f&(En|Gn|Xr))!==0&&(t.f&An)===0){t.b.defer_effect(t);return}u(this,et).push(t)}};zn=new WeakMap,rn=new WeakMap,wn=new WeakMap,Dn=new WeakMap,Vn=new WeakMap,Bn=new WeakMap,Wt=new WeakMap,Fn=new WeakMap,et=new WeakMap,fr=new WeakMap,jt=new WeakMap,kt=new WeakMap,Ct=new WeakMap,Hn=new WeakMap,bn=new WeakMap,q=new WeakSet,Oi=function(){if(this.is_fork)return!0;for(const r of u(this,Wt).keys()){for(var t=r,n=!1;t.parent!==null;){if(u(this,Ct).has(t)){n=!0;break}t=t.parent}if(!n)return!0}return!1},Pi=function(){var t=[];for(const a of u(this,et))if(!((a.f&Ve)!==0||(a.f&(ye|lt))===0)){for(var n=a,r=!1;n.parent!==null;){n=n.parent;var i=n.f;if((i&(Vt|ot))!==0){if((i&ke)===0){r=!0;break}n.f^=ke}}r||t.push(n)}return R(this,et,[]),t},gr=function(){var o,l,c,v;R(this,zn,!0);for(const p of u(this,jt))u(this,kt).delete(p),me(p,ye),this.schedule(p);for(const p of u(this,kt))me(p,lt),this.schedule(p);this.apply();for(var t=Jn=[],n=[],r=Ar=[];u(this,et).length>0;){na++>1e3&&(j(this,q,mr).call(this),yo());for(const p of j(this,q,Pi).call(this))try{j(this,q,Ci).call(this,p,t,n)}catch(y){throw sa(p),j(this,q,Oi).call(this)||this.discard(),y}}if(C=null,r.length>0){var i=zr.ensure();for(const p of r)i.schedule(p)}if(Jn=null,Ar=null,j(this,q,Oi).call(this)){j(this,q,Wn).call(this,n),j(this,q,Wn).call(this,t);for(const[p,y]of u(this,Ct))aa(p,y);r.length>0&&j(o=C,q,gr).call(o);return}const a=j(this,q,As).call(this);if(a){j(this,q,Wn).call(this,n),j(this,q,Wn).call(this,t),j(l=a,q,Ms).call(l,this);return}u(this,jt).clear(),u(this,kt).clear();for(const p of u(this,Dn))p(this);u(this,Dn).clear(),Qn=this,ra(n),ra(t),Qn=null,(c=u(this,Fn))==null||c.resolve();var s=C;if(u(this,Bn)===0&&(u(this,et).length===0||s!==null)&&j(this,q,mr).call(this),u(this,et).length>0)if(s!==null){for(const p of u(this,et))u(s,et).push(p);R(this,et,[])}else s=this;s!==null&&(Tt.clear(),j(v=s,q,gr).call(v))},Ci=function(t,n,r){t.f^=ke;for(var i=t.first;i!==null;){var a=i.f,s=(a&(ot|Vt))!==0,o=s&&(a&ke)!==0,l=o||(a&De)!==0||u(this,Ct).has(i);if(!l&&i.fn!==null){s?i.f^=ke:(a&En)!==0?n.push(i):rr(i)&&((a&gt)!==0&&u(this,kt).add(i),Ln(i));var c=i.first;if(c!==null){i=c;continue}}for(;i!==null;){var v=i.next;if(v!==null){i=v;break}i=i.parent}}},As=function(){for(var t=u(this,rn);t!==null;){if(!t.is_fork){for(const[n,[,r]]of this.current)if(t.current.has(n)&&!r)return t}t=u(t,rn)}return null},Ms=function(t){var r;for(const[i,a]of t.current)!this.previous.has(i)&&t.previous.has(i)&&this.previous.set(i,t.previous.get(i)),this.current.set(i,a);for(const[i,a]of t.async_deriveds){const s=this.async_deriveds.get(i);s&&a.promise.then(s.resolve).catch(s.reject)}t.async_deriveds.clear(),this.transfer_effects(u(t,jt),u(t,kt));const n=i=>{var a=i.reactions;if(a!==null&&!((i.f&Ie)!==0&&(i.f&(ye|lt))===0))for(const l of a){var s=l.f;if((s&Ie)!==0)n(l);else{var o=l;s&(Nn|gt)&&!this.async_deriveds.has(o)&&(u(this,kt).delete(o),me(o,ye),this.schedule(o))}}};for(const i of this.current.keys())n(i);this.oncommit(()=>t.discard()),j(r=t,q,mr).call(r),C=this,j(this,q,gr).call(this)},Wn=function(t){for(var n=0;n<t.length;n+=1)Zi(t[n],u(this,jt),u(this,kt))},Fc=function(){var p,y;for(let h=ni;h!==null;h=u(h,wn)){var t=h.id<this.id,n=[];for(const[d,[x,f]]of this.current){if(h.current.has(d)){var r=h.current.get(d)[0];if(t&&x!==r)h.current.set(d,[x,f]);else continue}n.push(d)}if(t)for(const[d,x]of this.async_deriveds){const f=h.async_deriveds.get(d);f&&x.promise.then(f.resolve).catch(f.reject)}var i=[...h.current.keys()].filter(d=>!h.current.get(d)[1]);if(!(!u(h,zn)||i.length===0)){var a=i.filter(d=>!this.current.has(d));if(a.length===0)t&&h.discard();else if(n.length>0){if(t)for(const d of u(this,Hn))h.unskip_effect(d,x=>{var f;(x.f&(gt|Nn))!==0?h.schedule(x):j(f=h,q,Wn).call(f,[x])});h.activate();var s=new Set,o=new Map;for(var l of n)ia(l,a,s,o);o=new Map;var c=[...h.current].filter(([d,x])=>{const f=this.current.get(d);return f?f[0]!==x[0]||f[1]!==x[1]:!0}).map(([d])=>d);if(c.length>0)for(const d of u(this,fr))(d.f&(Ve|De|xr))===0&&ai(d,c,o)&&((d.f&(Nn|gt))!==0?(me(d,ye),h.schedule(d)):u(h,jt).add(d));if(u(h,et).length>0&&!u(h,bn)){h.apply();for(var v of j(p=h,q,Pi).call(p))j(y=h,q,Ci).call(y,v,[],[])}h.deactivate()}}}},mr=function(){if(this.linked){var t=u(this,rn),n=u(this,wn);t===null?ni=n:R(t,wn,n),n===null?Rn=t:R(n,rn,t),this.linked=!1}};let cn=zr;function yo(){try{ro()}catch(e){Ot(e,ri)}}let wt=null;function ra(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(Ve|De))===0&&rr(r)&&(wt=new Set,Ln(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&xa(r),(wt==null?void 0:wt.size)>0)){Tt.clear();for(const i of wt){if((i.f&(Ve|De))!==0)continue;const a=[i];let s=i.parent;for(;s!==null;)wt.has(s)&&(wt.delete(s),a.push(s)),s=s.parent;for(let o=a.length-1;o>=0;o--){const l=a[o];(l.f&(Ve|De))===0&&Ln(l)}}wt.clear()}}wt=null}}function ia(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const i of e.reactions){const a=i.f;(a&Ie)!==0?ia(i,t,n,r):(a&(Nn|gt))!==0&&(a&ye)===0&&ai(i,t,r)&&(me(i,ye),si(i))}}function ai(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const i of e.deps){if(ln.call(t,i))return!0;if((i.f&Ie)!==0&&ai(i,t,n))return n.set(i,!0),!0}return n.set(e,!1),!1}function si(e){C.schedule(e)}function aa(e,t){if(!((e.f&ot)!==0&&(e.f&ke)!==0)){(e.f&ye)!==0?t.d.push(e):(e.f&lt)!==0&&t.m.push(e),me(e,ke);for(var n=e.first;n!==null;)aa(n,t),n=n.next}}function sa(e){me(e,ke);for(var t=e.first;t!==null;)sa(t),t=t.next}let Mr=new Set;const Tt=new Map;let oa=!1;function Jt(e,t){var n={f:0,v:e,reactions:null,equals:qi,rv:0,wv:0};return n}function Y(e,t){const n=Jt(e);return Ea(n),n}function wo(e,t=!1,n=!0){var i;const r=Jt(e);return t||(r.equals=Ki),Tn&&n&&ve!==null&&ve.l!==null&&((i=ve.l).s??(i.s=[])).push(r),r}function M(e,t,n=!1){B!==null&&(!xt||(B.f&xr)!==0)&&qn()&&(B.f&(Ie|gt|Nn|xr))!==0&&(Pt===null||!Pt.has(e))&&oo();let r=n?We(t):t;return In(e,r,Ar)}var un=null,oi=0;function In(e,t,n=null){if(!e.equals(t)){Ft?Tt.set(e,t):Tt.has(e)||Tt.set(e,e.v);var r=cn.ensure();if(r.capture(e,t),(e.f&Ie)!==0){const i=e;(e.f&ye)!==0&&ti(i),Ne===null&&Jr(i)}e.wv=Na(),un=null,oi=0,ca(e,ye,n),un=null,qn()&&F!==null&&(F.f&ke)!==0&&(F.f&(ot|Vt))===0&&(ft===null?Oo([e]):ft.push(e)),!r.is_fork&&Mr.size>0&&!oa&&bo()}return t}function bo(){oa=!1;for(const e of Mr){(e.f&ke)!==0&&me(e,lt);let t;try{t=rr(e)}catch{t=!0}t&&Ln(e)}Mr.clear()}function la(e,t=1){var n=g(e),r=t===1?n++:n--;return M(e,n),r}function er(e){M(e,e.v+1)}function ca(e,t,n){var r=e.reactions;if(r!==null){var i=qn(),a=r.length;if(oi+=a,oi>1e5&&un===null&&(un=new Set),un!==null){if(un.has(e))return;un.add(e)}for(var s=0;s<a;s++){var o=r[s],l=o.f;if(!(!i&&o===F)){var c=(l&ye)===0;if(c&&me(o,t),(l&xr)!==0)Mr.add(o);else if((l&Ie)!==0){var v=o;Ne==null||Ne.delete(v),ca(v,lt,n)}else if(c){var p=o;(l&gt)!==0&&wt!==null&&wt.add(p),n!==null?n.push(p):si(p)}}}}}function We(e){if(typeof e!="object"||e===null||Mt in e||Wi in e)return e;const t=jr(e);if(t!==Ns&&t!==Ts)return e;var n=new Map,r=ie(e),i=Y(0),a=pn,s=o=>{if(pn===a)return o();var l=B,c=pn;ct(null),Ma(a);var v=o();return ct(l),Ma(c),v};return r&&n.set("length",Y(e.length)),new Proxy(e,{defineProperty(o,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&ao();var v=n.get(l);return v===void 0?s(()=>{var p=Y(c.value);return n.set(l,p),p}):M(v,c.value,!0),!0},deleteProperty(o,l){var c=n.get(l);if(c===void 0){if(l in o){const v=s(()=>Y(we));n.set(l,v),er(i)}}else M(c,we),er(i);return!0},get(o,l,c){var h;if(l===Mt)return e;var v=n.get(l),p=l in o;if(v===void 0&&(!p||(h=Yt(o,l))!=null&&h.writable)&&(v=s(()=>{var d=We(p?o[l]:we),x=Y(d);return x}),n.set(l,v)),v!==void 0){var y=g(v);return y===we?void 0:y}return Reflect.get(o,l,c)},getOwnPropertyDescriptor(o,l){var y;(y=this.has)==null||y.call(this,o,l);var c=Reflect.getOwnPropertyDescriptor(o,l),v=n.get(l);if(v!==void 0){var p=g(v);if(p===we)return;if(c&&"value"in c)c.value=p;else return{enumerable:!0,configurable:!0,value:p,writable:!0}}return c},has(o,l){var y;if(l===Mt)return!0;var c=n.get(l),v=c!==void 0&&c.v!==we||Reflect.has(o,l);if(c!==void 0||F!==null&&(!v||(y=Yt(o,l))!=null&&y.writable)){c===void 0&&(c=s(()=>{var h=v?We(o[l]):we,d=Y(h);return d}),n.set(l,c));var p=g(c);if(p===we)return!1}return v},set(o,l,c,v){var k;var p=n.get(l),y=l in o;if(r&&l==="length")for(var h=c;h<p.v;h+=1){var d=n.get(h+"");d!==void 0?M(d,we):h in o&&(d=s(()=>Y(we)),n.set(h+"",d))}if(p===void 0)(!y||(k=Yt(o,l))!=null&&k.writable)&&(p=s(()=>Y(void 0)),M(p,We(c)),n.set(l,p));else{y=p.v!==we;var x=s(()=>We(c));M(p,x)}var f=Reflect.getOwnPropertyDescriptor(o,l);if(f!=null&&f.set&&f.set.call(v,c),!y){if(r&&typeof l=="string"){var _=n.get("length"),b=Number(l);Number.isInteger(b)&&b>=_.v&&M(_,b+1)}er(i)}return!0},ownKeys(o){g(i);var l=Reflect.ownKeys(o).filter(p=>{var y=n.get(p);return y===void 0||y.v!==we});for(var[c,v]of n)v.v!==we&&!(c in o)&&l.push(c);return l},setPrototypeOf(){so()}})}function ua(e){try{if(e!==null&&typeof e=="object"&&Mt in e)return e[Mt]}catch{}return e}function fa(e,t){return Object.is(ua(e),ua(t))}var da,va,pa,ha;function xo(){if(da===void 0){da=window,va=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;pa=Yt(t,"firstChild").get,ha=Yt(t,"nextSibling").get,Bi(e)&&(e[Kr]=void 0,e[kr]=null,e[Zr]=void 0,e.__e=void 0),Bi(n)&&(n[Xn]=void 0)}}function Bt(e=""){return document.createTextNode(e)}function fn(e){return pa.call(e)}function tr(e){return ha.call(e)}function I(e,t){return fn(e)}function K(e,t=!1){{var n=fn(e);return n instanceof Comment&&n.data===""?tr(n):n}}function Z(e,t=!1){return fn(e)}function P(e,t=1,n=!1){let r=e;for(;t--;)r=tr(r);return r}function So(e){e.textContent=""}function _a(){return!1}function li(e,t,n){return t==null||t===Yi?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function ko(e){var t=F;if(t===null)return B.f|=Kt,e;if((t.f&An)===0&&(t.f&En)===0)throw e;Ot(e,t)}function Ot(e,t){if(!(t!==null&&(t.f&Ve)!==0)){for(;t!==null;){if((t.f&Yr)!==0&&(t.f&(Ve|br))===0){if((t.f&An)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}}function ga(e){F===null&&(B===null&&no(),to()),Ft&&eo()}function $o(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function bt(e,t){var n=F;n!==null&&(n.f&De)!==0&&(e|=De);var r={ctx:ve,deps:null,nodes:null,f:e|ye|mt,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};C==null||C.register_created_effect(r);var i=r;if((e&En)!==0)Jn!==null?Jn.push(r):cn.ensure().schedule(r);else if(t!==null){try{Ln(r)}catch(s){throw Te(r),s}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&Mn)===0&&(i=i.first,(e&gt)!==0&&(e&qt)!==0&&i!==null&&(i.f|=qt))}if(i!==null&&(i.parent=n,n!==null&&$o(i,n),B!==null&&(B.f&Ie)!==0&&(e&Vt)===0)){var a=B;(a.effects??(a.effects=[])).push(i)}return r}function ci(){return B!==null&&!xt}function ui(e){const t=bt(Gn,null);return me(t,ke),t.teardown=e,t}function Nr(e){ga();var t=F.f,n=!B&&(t&ot)!==0&&ve!==null&&!ve.i;if(n){var r=ve;(r.e??(r.e=[])).push(e)}else return ma(e)}function ma(e){return bt(En|Ui,e)}function Eo(e){return ga(),bt(Gn|Ui,e)}function Ao(e){cn.ensure();const t=bt(Vt|Mn,e);return(n={})=>new Promise(r=>{n.outro?dn(t,()=>{Te(t),r(void 0)}):(Te(t),r(void 0))})}function fi(e){return bt(En,e)}function Mo(e){return bt(Nn|Mn,e)}function ya(e,t=0){return bt(Gn|t,e)}function be(e,t=[],n=[],r=[]){Qi(r,t,n,i=>{bt(Gn,()=>{e(...i.map(g))})})}function nr(e,t=0){var n=bt(gt|t,e);return n}function wa(e,t=0){var n=bt(Xr|t,e);return n}function je(e){return bt(ot|Mn,e)}function ba(e){var t=e.teardown;if(t!==null){const n=Ft,r=B;$a(!0),ct(null);try{t.call(null)}catch(i){Ot(i,e.parent)}finally{$a(n),ct(r)}}}function di(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const i=n.ac;i!==null&&Kn(()=>{i.abort(Yn)});var r=n.next;(n.f&Vt)!==0?n.parent=null:Te(n,t),n=r}}function No(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&ot)===0&&Te(t),t=n}}function Te(e,t=!0){var n=!1;(t||(e.f&Cs)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(To(e.nodes.start,e.nodes.end),n=!0),e.f|=br,di(e,t&&!n),ir(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(const a of r)a.stop();ba(e),e.f^=br,e.f|=Ve;var i=e.parent;i!==null&&i.first!==null&&xa(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function To(e,t){for(;e!==null;){var n=e===t?null:tr(e);e.remove(),e=n}}function xa(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function dn(e,t,n=!0){var r=[];e.f|=qr,Sa(e,r,!0);var i=()=>{n&&Te(e),t&&t()},a=r.length;if(a>0){var s=()=>--a||i();for(var o of r)o.out(s)}else i()}function Sa(e,t,n){if((e.f&De)===0){e.f^=De;var r=e.nodes&&e.nodes.t;if(r!==null)for(const o of r)(o.is_global||n)&&t.push(o);for(var i=e.first;i!==null;){var a=i.next;if((i.f&Vt)===0){var s=(i.f&qt)!==0||(i.f&ot)!==0&&(e.f&gt)!==0;Sa(i,t,s?n:!1)}i=a}}}function Tr(e){e.f&=~qr,ka(e,!0)}function ka(e,t){if((e.f&qr)===0&&(e.f&De)!==0){e.f^=De,(e.f&ke)===0&&(me(e,ye),cn.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,i=(n.f&qt)!==0||(n.f&ot)!==0;ka(n,i?t:!1),n=r}var a=e.nodes&&e.nodes.t;if(a!==null)for(const s of a)(s.is_global||t)&&s.in()}}function vi(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var i=n===r?null:tr(n);t.append(n),n=i}}let Or=!1,Ft=!1;function $a(e){Ft=e}let B=null,xt=!1;function ct(e){B=e}let F=null;function ut(e){F=e}let Pt=null;function Ea(e){B!==null&&((B.f&Sr)!==0||(B.f&Ie)!==0)&&(Pt??(Pt=new Set)).add(e)}let Ge=null,Ze=0,ft=null;function Oo(e){ft=e}let Aa=1,vn=0,pn=vn;function Ma(e){pn=e}function Na(){return++Aa}function rr(e){var t=e.f;if((t&ye)!==0)return!0;if((t&lt)!==0){for(var n=e.deps,r=n.length,i=0;i<r;i++){var a=n[i];if(rr(a)&&ea(a),a.wv>e.wv)return!0}(t&mt)!==0&&Ne===null&&me(e,ke)}return!1}function Ta(e,t,n=!0){var r=e.reactions;if(r!==null&&!(Pt!==null&&Pt.has(e)))for(var i=0;i<r.length;i++){var a=r[i];(a.f&Ie)!==0?Ta(a,t,!1):t===a&&(n?me(a,ye):(a.f&ke)!==0&&me(a,lt),si(a))}}function Oa(e){var t=Ge,n=Ze,r=ft,i=B,a=Pt,s=ve,o=xt,l=pn,c=e.f;Ge=null,Ze=0,ft=null,B=(c&(ot|Vt))===0?e:null,Pt=null,On(e.ctx),xt=!1,pn=++vn,e.ac!==null&&(Kn(()=>{e.ac.abort(Yn)}),e.ac=null);try{e.f|=Sr;var v=e.fn,p=v();e.f|=An;var y=Pa(e);if(qn()&&ft!==null&&!xt&&y!==null&&(e.f&(Ie|lt|ye))===0)for(var h=0;h<ft.length;h++)Ta(ft[h],e);if(i!==null&&i!==e){if(vn++,i.deps!==null)for(let d=0;d<n;d+=1)i.deps[d].rv=vn;if(t!==null)for(const d of t)d.rv=vn;ft!==null&&(r===null?r=ft:r.push(...ft))}return(e.f&Kt)!==0&&(e.f^=Kt),p}catch(d){return Pa(e),ko(d)}finally{e.f^=Sr,Ge=t,Ze=n,ft=r,B=i,Pt=a,On(s),xt=o,pn=l}}function Pa(e){var i;var t=e.deps,n=C==null?void 0:C.is_fork;if(Ge!==null){var r;if(n||ir(e,Ze),t!==null&&Ze>0)for(t.length=Ze+Ge.length,r=0;r<Ge.length;r++)t[Ze+r]=Ge[r];else e.deps=t=Ge;if(ci()&&(e.f&mt)!==0)for(r=Ze;r<t.length;r++)((i=t[r]).reactions??(i.reactions=[])).push(e)}else!n&&t!==null&&Ze<t.length&&(ir(e,Ze),t.length=Ze);return t}function Po(e,t){let n=t.reactions;if(n!==null){var r=Se.call(n,e);if(r!==-1){var i=n.length-1;i===0?n=t.reactions=null:(n[r]=n[i],n.pop())}}if(n===null&&(t.f&Ie)!==0&&(Ge===null||!ln.call(Ge,t))){var a=t;(a.f&mt)!==0&&(a.f^=mt),a.v!==we&&Jr(a),a.ac!==null&&Kn(()=>{a.ac.abort(Yn),a.ac=null,me(a,ye)}),go(a),ir(a,0)}}function ir(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Po(e,n[r])}function Ln(e){var t=e.f;if((t&Ve)===0){me(e,ke);var n=F,r=Or;F=e,Or=(t&(ot|Vt))===0;try{(t&(gt|Xr))!==0?No(e):di(e),ba(e);var i=Oa(e);e.teardown=typeof i=="function"?i:null,e.wv=Aa;var a}finally{Or=r,F=n}}}function g(e){var t=e.f,n=(t&Ie)!==0;if(B!==null&&!xt){var r=F!==null&&(F.f&Ve)!==0;if(!r&&(Pt===null||!Pt.has(e))){var i=B.deps;if((B.f&Sr)!==0)e.rv<vn&&(e.rv=vn,Ge===null&&i!==null&&i[Ze]===e?Ze++:Ge===null?Ge=[e]:Ge.push(e));else{B.deps??(B.deps=[]),ln.call(B.deps,e)||B.deps.push(e);var a=e.reactions;a===null?e.reactions=[B]:ln.call(a,B)||a.push(B)}}}if(Ft&&Tt.has(e))return Tt.get(e);if(n){var s=e;if(Ft){var o=s.v;return((s.f&ke)===0&&s.reactions!==null||Ra(s))&&(o=ti(s)),Tt.set(s,o),o}var l=(s.f&mt)===0&&!xt&&B!==null&&(Or||(B.f&mt)!==0),c=(s.f&An)===0;rr(s)&&(l&&(s.f|=mt),ea(s)),l&&!c&&(ta(s),Ca(s))}if(Ne!=null&&Ne.has(e))return Ne.get(e);if((e.f&Kt)!==0)throw e.v;return e.v}function Ca(e){if(e.f|=mt,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&Ie)!==0&&(t.f&mt)===0&&(ta(t),Ca(t))}function Ra(e){if(e.v===we)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Tt.has(t)||(t.f&Ie)!==0&&Ra(t))return!0;return!1}function en(e){var t=xt;try{return xt=!0,e()}finally{xt=t}}function hn(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Mt in e)pi(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&Mt in n&&pi(n)}}}function pi(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{pi(e[r],t)}catch{}const n=jr(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=Vi(n);for(let i in r){const a=r[i].get;if(a)try{a.call(e)}catch{}}}}}function Co(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Ro=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Io(e){return Ro.includes(e)}const Lo={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function zo(e){return e=e.toLowerCase(),Lo[e]??e}const Do=["touchstart","touchmove"];function Vo(e){return Do.includes(e)}const _n=Symbol("events"),Ia=new Set,hi=new Set;function Bo(e,t,n,r={}){function i(a){if(r.capture||mi.call(t,a),!a.cancelBubble)return Kn(()=>n==null?void 0:n.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?(i.__removed=!1,Nt(()=>{i.__removed||t.addEventListener(e,i,r)})):t.addEventListener(e,i,r),i}function J(e,t,n){(t[_n]??(t[_n]={}))[e]=n}function gn(e){for(var t=0;t<e.length;t++)Ia.add(e[t]);for(var n of hi)n(e)}let _i=null,gi=!1;function mi(e){var x,f;var t=this,n=t.ownerDocument,r=e.type,i=((x=e.composedPath)==null?void 0:x.call(e))||[],a=i[0]||e.target;_i=e,gi||(gi=!0,setTimeout(()=>{gi=!1,_i=null}));var s=0,o=_i===e&&e[_n];if(o){var l=i.indexOf(o);if(l!==-1&&(t===document||t===window)){e[_n]=t;return}var c=i.indexOf(t);if(c===-1)return;l<=c&&(s=l)}if(a=i[s]||e.target,a!==t){Di(e,"currentTarget",{configurable:!0,get(){return a||n}});var v=B,p=F;ct(null),ut(null);try{for(var y,h=[];a!==null&&a!==t;){try{var d=(f=a[_n])==null?void 0:f[r];d!=null&&(!a.disabled||e.target===a)&&d.call(a,e)}catch(_){y?h.push(_):y=_}if(e.cancelBubble)break;s++,a=s<i.length?i[s]:null}if(y){for(let _ of h)queueMicrotask(()=>{throw _});throw y}}finally{e[_n]=t,delete e.currentTarget,ct(v),ut(p)}}}const yi=((ls=globalThis==null?void 0:globalThis.window)==null?void 0:ls.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Fo(e){return(yi==null?void 0:yi.createHTML(e))??e}function La(e){var t=li("template");return t.innerHTML=Fo(e.replaceAll("<!>","<!---->")),t.content}function ar(e,t){var n=F;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function xe(e,t){var n=(t&Us)!==0,r=(t&Ws)!==0,i,a=!e.startsWith("<!>");return()=>{i===void 0&&(i=La(a?e:"<!>"+e),n||(i=fn(i)));var s=r||va?document.importNode(i,!0):i.cloneNode(!0);if(n){var o=fn(s),l=s.lastChild;ar(o,l)}else ar(s,s);return s}}function Ho(e,t,n="svg"){var r=!e.startsWith("<!>"),i=`<${n}>${r?e:"<!>"+e}</${n}>`,a;return()=>{if(!a){var s=La(i),o=fn(s);a=fn(o)}var l=a.cloneNode(!0);return ar(l,l),l}}function Uo(e,t){return Ho(e,t,"svg")}function te(){var e=document.createDocumentFragment(),t=document.createComment(""),n=Bt();return e.append(t,n),ar(t,n),e}function N(e,t){e!==null&&e.before(t)}function Wo(e){let t=0,n=Jt(0),r;return()=>{ci()&&(g(n),ya(()=>(t===0&&(r=en(()=>e(()=>er(n)))),t+=1,()=>{Nt(()=>{t-=1,t===0&&(r==null||r(),r=void 0,er(n))})})))}}var jo=qt|Mn;function Go(e,t,n,r){new Xo(e,t,n,r)}class Xo{constructor(t,n,r,i){z(this,le);st(this,"parent");st(this,"is_pending",!1);st(this,"transform_error");z(this,vt);z(this,Ai,null);z(this,pt);z(this,xn);z(this,Fe);z(this,tt,null);z(this,He,null);z(this,nt,null);z(this,Rt,null);z(this,Sn,0);z(this,an,0);z(this,Un,!1);z(this,dr,new Set);z(this,vr,new Set);z(this,Gt,null);z(this,Dr,Wo(()=>(R(this,Gt,Jt(u(this,Sn))),()=>{R(this,Gt,null)})));var a;R(this,vt,t),R(this,pt,n),R(this,xn,s=>{var o=F;o.b=this,o.f|=Yr,r(s)}),this.parent=F.b,this.transform_error=i??((a=this.parent)==null?void 0:a.transform_error)??(s=>s),R(this,Fe,nr(()=>{j(this,le,Ii).call(this)},jo))}defer_effect(t){Zi(t,u(this,dr),u(this,vr))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!u(this,pt).pending}update_pending_count(t,n){j(this,le,Li).call(this,t,n),R(this,Sn,u(this,Sn)+t),!(!u(this,Gt)||u(this,Un))&&(R(this,Un,!0),Nt(()=>{R(this,Un,!1),u(this,Gt)&&In(u(this,Gt),u(this,Sn))}))}get_effect_pending(){return u(this,Dr).call(this),g(u(this,Gt))}error(t){if(!u(this,pt).onerror&&!u(this,pt).failed)throw t;C!=null&&C.is_fork?(u(this,tt)&&C.skip_effect(u(this,tt)),u(this,He)&&C.skip_effect(u(this,He)),u(this,nt)&&C.skip_effect(u(this,nt)),C.oncommit(()=>{j(this,le,zi).call(this,t)})):j(this,le,zi).call(this,t)}}vt=new WeakMap,Ai=new WeakMap,pt=new WeakMap,xn=new WeakMap,Fe=new WeakMap,tt=new WeakMap,He=new WeakMap,nt=new WeakMap,Rt=new WeakMap,Sn=new WeakMap,an=new WeakMap,Un=new WeakMap,dr=new WeakMap,vr=new WeakMap,Gt=new WeakMap,Dr=new WeakMap,le=new WeakSet,Hc=function(){try{R(this,tt,je(()=>u(this,xn).call(this,u(this,vt))))}catch(t){this.error(t)}},Uc=function(t){const n=u(this,pt).failed,{reset:r,invoke_onerror:i}=j(this,le,Ri).call(this,t);Nt(i),n&&R(this,nt,je(()=>{n(u(this,vt),()=>t,()=>r)}))},Ri=function(t){var n=!1,r=!1;const i=()=>{if(n){qs();return}n=!0,r&&lo(),u(this,nt)!==null&&dn(u(this,nt),()=>{R(this,nt,null)}),j(this,le,Wr).call(this,()=>{j(this,le,Ii).call(this)})};return{reset:i,invoke_onerror:()=>{var s,o;try{r=!0,(o=(s=u(this,pt)).onerror)==null||o.call(s,t,i),r=!1}catch(l){Ot(l,u(this,Fe)&&u(this,Fe).parent)}}}},Wc=function(){const t=u(this,pt).pending;t&&(this.is_pending=!0,R(this,He,je(()=>t(u(this,vt)))),Nt(()=>{var n=R(this,Rt,document.createDocumentFragment()),r=Bt(),i=!1;if(n.append(r),R(this,tt,j(this,le,Wr).call(this,()=>{try{return je(()=>u(this,xn).call(this,r))}catch(a){try{this.error(a),i=!0}catch(s){Ot(s,u(this,Fe).parent)}return null}})),u(this,tt)===null){R(this,Rt,null),i&&j(this,le,yr).call(this,C);return}u(this,an)===0&&(u(this,vt).before(n),R(this,Rt,null),dn(u(this,He),()=>{R(this,He,null)}),j(this,le,yr).call(this,C))}))},Ii=function(){try{if(this.is_pending=this.has_pending_snippet(),R(this,an,0),R(this,Sn,0),R(this,tt,je(()=>{u(this,xn).call(this,u(this,vt))})),u(this,an)>0){var t=R(this,Rt,document.createDocumentFragment());vi(u(this,tt),t);const n=u(this,pt).pending;R(this,He,je(()=>n(u(this,vt))))}else j(this,le,yr).call(this,C)}catch(n){this.error(n)}},yr=function(t){this.is_pending=!1,t.transfer_effects(u(this,dr),u(this,vr))},Wr=function(t){var n=F,r=B,i=ve;ut(u(this,Fe)),ct(u(this,Fe)),On(u(this,Fe).ctx);try{return cn.ensure(),t()}finally{ut(n),ct(r),On(i)}},Li=function(t,n){var r;if(!this.has_pending_snippet()){this.parent&&j(r=this.parent,le,Li).call(r,t,n);return}R(this,an,u(this,an)+t),u(this,an)===0&&(j(this,le,yr).call(this,n),u(this,He)&&dn(u(this,He),()=>{R(this,He,null)}),u(this,Rt)&&(u(this,vt).before(u(this,Rt)),R(this,Rt,null)))},zi=function(t){u(this,tt)&&(Te(u(this,tt)),R(this,tt,null)),u(this,He)&&(Te(u(this,He)),R(this,He,null)),u(this,nt)&&(Te(u(this,nt)),R(this,nt,null));let n=u(this,pt).failed;const r=i=>{const{reset:a,invoke_onerror:s}=j(this,le,Ri).call(this,i);s(),n&&R(this,nt,j(this,le,Wr).call(this,()=>{try{return je(()=>{var o=F;o.b=this,o.f|=Yr,n(u(this,vt),()=>i,()=>a)})}catch(o){return Ot(o,u(this,Fe).parent),null}}))};Nt(()=>{var i;try{i=this.transform_error(t)}catch(a){Ot(a,u(this,Fe)&&u(this,Fe).parent);return}i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(r,a=>Ot(a,u(this,Fe)&&u(this,Fe).parent)):r(i)})};function Q(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e[Xn]??(e[Xn]=e.nodeValue))&&(e[Xn]=n,e.nodeValue=`${n}`)}function Yo(e,t){return qo(e,t)}const Pr=new Map;function qo(e,{target:t,anchor:n,props:r={},events:i,context:a,intro:s=!0,transformError:o}){xo();var l=void 0,c=Ao(()=>{var v=n??t.appendChild(Bt());Go(v,{pending:()=>{}},h=>{Zt({});var d=ve;a&&(d.c=a),i&&(r.$$events=i),l=e(h,r)||Qr(),Qt()},o);var p=new Set,y=h=>{for(var d=0;d<h.length;d++){var x=h[d];if(!p.has(x)){p.add(x);var f=Vo(x);for(const k of[t,document]){var _=Pr.get(k);_===void 0&&(_=new Map,Pr.set(k,_));var b=_.get(x);b===void 0?(k.addEventListener(x,mi,{passive:f}),_.set(x,1)):_.set(x,b+1)}}}};return y(wr(Ia)),hi.add(y),()=>{var f;for(var h of p)for(const _ of[t,document]){var d=Pr.get(_),x=d.get(h);--x==0?(_.removeEventListener(h,mi),d.delete(h),d.size===0&&Pr.delete(_)):d.set(h,x)}hi.delete(y),v!==n&&((f=v.parentNode)==null||f.removeChild(v))}});return Ko.set(l,c),l}let Ko=new WeakMap;class wi{constructor(t,n=!0){st(this,"anchor");z(this,$t,new Map);z(this,It,new Map);z(this,rt,new Map);z(this,kn,new Set);z(this,pr,!0);z(this,hr,t=>{if(u(this,$t).has(t)){var n=u(this,$t).get(t),r=u(this,It).get(n);if(r)Tr(r),u(this,kn).delete(n);else{var i=u(this,rt).get(n);i&&(Tr(i.effect),u(this,It).set(n,i.effect),u(this,rt).delete(n),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),r=i.effect)}for(const[a,s]of u(this,$t)){if(u(this,$t).delete(a),a===t)break;const o=u(this,rt).get(s);o&&(Te(o.effect),u(this,rt).delete(s))}for(const[a,s]of u(this,It)){if(a===n||u(this,kn).has(a))continue;const o=()=>{if(Array.from(u(this,$t).values()).includes(a)){var c=document.createDocumentFragment();vi(s,c),c.append(Bt()),u(this,rt).set(a,{effect:s,fragment:c})}else Te(s);u(this,kn).delete(a),u(this,It).delete(a)};u(this,pr)||!r?(u(this,kn).add(a),dn(s,o,!1)):o()}}});z(this,Vr,t=>{u(this,$t).delete(t);const n=Array.from(u(this,$t).values());for(const[r,i]of u(this,rt))n.includes(r)||(Te(i.effect),u(this,rt).delete(r))});this.anchor=t,R(this,pr,n)}ensure(t,n){var r=C,i=_a();if(n&&!u(this,It).has(t)&&!u(this,rt).has(t))if(i){var a=document.createDocumentFragment(),s=Bt();a.append(s),u(this,rt).set(t,{effect:je(()=>n(s)),fragment:a})}else u(this,It).set(t,je(()=>n(this.anchor)));if(u(this,$t).set(r,t),i){for(const[o,l]of u(this,It))o===t?r.unskip_effect(l):r.skip_effect(l);for(const[o,l]of u(this,rt))o===t?r.unskip_effect(l.effect):r.skip_effect(l.effect);r.oncommit(u(this,hr)),r.ondiscard(u(this,Vr))}else u(this,hr).call(this,r)}}$t=new WeakMap,It=new WeakMap,rt=new WeakMap,kn=new WeakMap,pr=new WeakMap,hr=new WeakMap,Vr=new WeakMap;function Ht(e,t,n=!1){var r=new wi(e),i=n?qt:0;function a(s,o){r.ensure(s,o)}nr(()=>{var s=!1;t((o,l=0)=>{s=!0,a(l,o)}),s||a(-1,null)},i)}function za(e,t){return t}function Zo(e,t,n){for(var r=[],i=t.length,a,s=t.length,o=0;o<i;o++){let p=t[o];dn(p,()=>{if(a){if(a.pending.delete(p),a.done.add(p),a.pending.size===0){var y=e.outrogroups;bi(e,wr(a.done)),y.delete(a),y.size===0&&(e.outrogroups=null)}}else s-=1},!1)}if(s===0){var l=r.length===0&&n!==null&&e.pending.size===0;if(l){var c=n,v=c.parentNode;So(v),v.append(c),e.items.clear()}bi(e,t,!l)}else a={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(a)}function bi(e,t,n=!0){var r;if(e.pending.size>0){r=new Set;for(const s of e.pending.values())for(const o of s)r.add(e.items.get(o).e)}for(var i=0;i<t.length;i++){var a=t[i];if(r!=null&&r.has(a)){a.f|=At;const s=document.createDocumentFragment();vi(a,s)}else Te(t[i],n)}}var Da;function tn(e,t,n,r,i,a=null){var s=e,o=new Map,l=(t&Gi)!==0;if(l){var c=e;s=c.appendChild(Bt())}var v=null,p=ei(()=>{var k=n();return ie(k)?k:k==null?[]:wr(k)}),y,h=new Map,d=!0;function x(k){(b.effect.f&Ve)===0&&(b.pending.delete(k),b.fallback=v,Qo(b,y,s,t,r),v!==null&&(y.length===0?(v.f&At)===0?Tr(v):(v.f^=At,or(v,null,s)):dn(v,()=>{v=null})))}function f(k){b.pending.delete(k)}var _=nr(()=>{y=g(p);for(var k=y.length,L=new Set,S=C,A=_a(),$=0;$<k;$+=1){var G=y[$],H=r(G,$),se=d?null:o.get(H);se?(se.v&&In(se.v,G),se.i&&In(se.i,$),A&&S.unskip_effect(se.e)):(se=Jo(o,d?s:Da??(Da=Bt()),G,H,$,i,t,n),d||(se.e.f|=At),o.set(H,se)),L.add(H)}if(k===0&&a&&!v&&(d?v=je(()=>a(s)):(v=je(()=>a(Da??(Da=Bt()))),v.f|=At)),k>L.size&&Js(),!d)if(h.set(S,L),A){for(const[Ee,Oe]of o)L.has(Ee)||S.skip_effect(Oe.e);S.oncommit(x),S.ondiscard(f)}else x(S);g(p)}),b={effect:_,items:o,pending:h,outrogroups:null,fallback:v};d=!1}function sr(e){for(;e!==null&&(e.f&ot)===0;)e=e.next;return e}function Qo(e,t,n,r,i){var se,Ee,Oe,Xt,sn,Lt,Ye,X,Le;var a=(r&zs)!==0,s=t.length,o=e.items,l=sr(e.effect.first),c,v=null,p,y=[],h=[],d,x,f,_;if(a)for(_=0;_<s;_+=1)d=t[_],x=i(d,_),f=o.get(x).e,(f.f&At)===0&&((Ee=(se=f.nodes)==null?void 0:se.a)==null||Ee.measure(),(p??(p=new Set)).add(f));for(_=0;_<s;_+=1){if(d=t[_],x=i(d,_),f=o.get(x).e,e.outrogroups!==null)for(const ge of e.outrogroups)ge.pending.delete(f),ge.done.delete(f);if((f.f&De)!==0&&(Tr(f),a&&((Xt=(Oe=f.nodes)==null?void 0:Oe.a)==null||Xt.unfix(),(p??(p=new Set)).delete(f))),(f.f&At)!==0)if(f.f^=At,f===l)or(f,null,n);else{var b=v?v.next:l;f===e.effect.last&&(e.effect.last=f.prev),f.prev&&(f.prev.next=f.next),f.next&&(f.next.prev=f.prev),nn(e,v,f),nn(e,f,b),or(f,b,n),v=f,y=[],h=[],l=sr(v.next);continue}if(f!==l){if(c!==void 0&&c.has(f)){if(y.length<h.length){var k=h[0],L;v=k.prev;var S=y[0],A=y[y.length-1];for(L=0;L<y.length;L+=1)or(y[L],k,n);for(L=0;L<h.length;L+=1)c.delete(h[L]);nn(e,S.prev,A.next),nn(e,v,S),nn(e,A,k),l=k,v=A,_-=1,y=[],h=[]}else c.delete(f),or(f,l,n),nn(e,f.prev,f.next),nn(e,f,v===null?e.effect.first:v.next),nn(e,v,f),v=f;continue}for(y=[],h=[];l!==null&&l!==f;)(c??(c=new Set)).add(l),h.push(l),l=sr(l.next);if(l===null)continue}(f.f&At)===0&&y.push(f),v=f,l=sr(f.next)}if(e.outrogroups!==null){for(const ge of e.outrogroups)ge.pending.size===0&&(bi(e,wr(ge.done)),(sn=e.outrogroups)==null||sn.delete(ge));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||c!==void 0){var $=[];if(c!==void 0)for(f of c)(f.f&De)===0&&$.push(f);for(;l!==null;)(l.f&De)===0&&l!==e.fallback&&$.push(l),l=sr(l.next);var G=$.length;if(G>0){var H=(r&Gi)!==0&&s===0?n:null;if(a){for(_=0;_<G;_+=1)(Ye=(Lt=$[_].nodes)==null?void 0:Lt.a)==null||Ye.measure();for(_=0;_<G;_+=1)(Le=(X=$[_].nodes)==null?void 0:X.a)==null||Le.fix()}Zo(e,$,H)}}a&&Nt(()=>{var ge,Pe;if(p!==void 0)for(f of p)(Pe=(ge=f.nodes)==null?void 0:ge.a)==null||Pe.apply()})}function Jo(e,t,n,r,i,a,s,o){var l=(s&Is)!==0?(s&Ds)===0?wo(n,!1,!1):Jt(n):null,c=(s&Ls)!==0?Jt(i):null;return{v:l,i:c,e:je(()=>(a(t,l??n,c??i,o),()=>{e.delete(r)}))}}function or(e,t,n){if(e.nodes)for(var r=e.nodes.start,i=e.nodes.end,a=t&&(t.f&At)===0?t.nodes.start:n;r!==null;){var s=tr(r);if(a.before(r),r===i)return;r=s}}function nn(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function oe(e,t,n,r,i){var o,l;if((o=t.$$host)!=null&&o.$$shadowRoot){const c=li("slot");N(e,c);return}var a=(l=t.$$slots)==null?void 0:l[n],s=!1;a===!0&&(a=t.children,s=!0),a===void 0||a(e,s?()=>r:r)}function el(e,t,n){var r=new wi(e);nr(()=>{var i=t()??null;r.ensure(i,i&&(a=>n(a,i)))},qt)}function tl(e,t,n,r,i,a){var s=null,o=e,l=new wi(o,!1);nr(()=>{const c=t()||null;var v=js;if(c===null){l.ensure(null,null);return}return l.ensure(c,p=>{if(c){if(s=li(c,v),ar(s,s),r){var y=null,h=s.appendChild(Bt());r(s,h),y==null||y.remove()}F.nodes.end=s,p.before(s)}}),()=>{}},qt),ui(()=>{})}function nl(e,t){var n=void 0,r;wa(()=>{n!==(n=t())&&(r&&(Te(r),r=null),n&&(r=je(()=>{fi(()=>n(e))})))})}function Va(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Va(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function rl(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Va(e))&&(r&&(r+=" "),r+=t);return r}function mn(e){return typeof e=="object"?rl(e):e??""}const Ba=[...` 	
\r\f \v\uFEFF`];function il(e,t,n){var r=e==null?"":""+e;if(t&&(r=r?r+" "+t:t),n){for(var i of Object.keys(n))if(n[i])r=r?r+" "+i:i;else if(r.length)for(var a=i.length,s=0;(s=r.indexOf(i,s))>=0;){var o=s+a;(s===0||Ba.includes(r[s-1]))&&(o===r.length||Ba.includes(r[o]))?r=(s===0?"":r.substring(0,s))+r.substring(o+1):s=o}}return r===""?null:r}function Fa(e,t=!1){var n=t?" !important;":";",r="";for(var i of Object.keys(e)){var a=e[i];a!=null&&a!==""&&(r+=" "+i+": "+a+n)}return r}function xi(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function al(e,t){if(t){var n="",r,i;if(Array.isArray(t)?(r=t[0],i=t[1]):r=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var a=!1,s=0,o=!1,l=[];r&&l.push(...Object.keys(r).map(xi)),i&&l.push(...Object.keys(i).map(xi));var c=0,v=-1;const x=e.length;for(var p=0;p<x;p++){var y=e[p];if(o?y==="/"&&e[p-1]==="*"&&(o=!1):a?a===y&&(a=!1):y==="/"&&e[p+1]==="*"?o=!0:y==='"'||y==="'"?a=y:y==="("?s++:y===")"&&s--,!o&&a===!1&&s===0){if(y===":"&&v===-1)v=p;else if(y===";"||p===x-1){if(v!==-1){var h=xi(e.substring(c,v).trim());if(!l.includes(h)){y!==";"&&p++;var d=e.substring(c,p).trim();n+=" "+d+";"}}c=p+1,v=-1}}}}return r&&(n+=Fa(r)),i&&(n+=Fa(i,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function Be(e,t,n,r,i,a){var s=e[Kr];if(s!==n||s===void 0){var o=il(n,r,a);o==null?e.removeAttribute("class"):t?e.className=o:e.setAttribute("class",o),e[Kr]=n}else if(a&&i!==a)for(var l in a){var c=!!a[l];(i==null||c!==!!i[l])&&e.classList.toggle(l,c)}return a}function Si(e,t={},n,r){for(var i in n){var a=n[i];t[i]!==a&&(n[i]==null?e.style.removeProperty(i):e.style.setProperty(i,a,r))}}function Ha(e,t,n,r){var i=e[Zr];if(i!==t){var a=al(t,r);a==null?e.removeAttribute("style"):e.style.cssText=a,e[Zr]=t}else r&&(Array.isArray(r)?(Si(e,n==null?void 0:n[0],r[0]),Si(e,n==null?void 0:n[1],r[1],"important")):Si(e,n,r));return r}function Ua(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Wa(e,t){var n=!("__defaultValue"in e);!n&&e.__defaultValue===t||(e.__defaultValue=t,ja(e,!n||"__value"in e))}function ja(e,t){var n=e.__defaultValue,r=e.multiple,i=r?n??[]:null;if(!(r&&!ie(i))){var a=e.selectedIndex,s=t&&r?new Set(e.selectedOptions):null;for(var o of e.options){var l=ki(o);Ua(o,r?i.includes(l):fa(l,n))}if(t)if(s!==null)for(o of e.options){var c=s.has(o);o.selected!==c&&(o.selected=c)}else e.selectedIndex!==a&&(e.selectedIndex=a)}}function Ut(e,t,n=!1){if(e.multiple){if(t==null)return;if(!ie(t))return Ys();for(var r of e.options)r.selected=t.includes(ki(r));return}for(r of e.options){var i=ki(r);if(fa(i,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function yn(e){var t=new MutationObserver(n=>{n.every(sl)||("__defaultValue"in e&&ja(e,!1),"__value"in e&&Ut(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ui(()=>{t.disconnect()})}function ki(e){return"__value"in e?e.__value:e.value}function sl(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(n=>n.nodeName==="SELECTEDCONTENT")}return!1}const lr=Symbol("class"),cr=Symbol("style"),Ga=Symbol("is custom element"),Xa=Symbol("is html"),ol=$r?"input":"INPUT",ll=$r?"option":"OPTION",Ya=$r?"select":"SELECT",cl=$r?"progress":"PROGRESS";function Cr(e,t){var n=Rr(e);n.value===(n.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==cl)||(e.value=t??"")}function ul(e,t){var n=Rr(e);n.checked!==(n.checked=t??void 0)&&(e.checked=t)}function $e(e,t,n,r){var i=Rr(e);i[t]!==(i[t]=n)&&(t==="loading"&&(e[Rs]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Za(e).has(t)?e[t]=n:e.setAttribute(t,n))}function fl(e,t,n,r,i=!1,a=!1){var s=Rr(e),o=s[Ga],l=!s[Xa],c=t||{},v=e.nodeName===ll,p=e.nodeName===Ya;for(var y in t)!(y in n)&&y[0]+y[1]!=="$$"&&(n[y]=null);n.class?n.class=mn(n.class):n[lr]&&(n.class=null),n[cr]&&(n.style??(n.style=null));var h=Za(e);if(e.nodeName===ol&&"type"in n&&("value"in n||"__value"in n)){var d=n.type;(d!==c.type||d===void 0&&e.hasAttribute("type"))&&(c.type=d,$e(e,"type",d))}for(const S in n){let A=n[S];if(v&&S==="value"&&A==null){e.value=e.__value="",c[S]=A;continue}if(S==="class"){var x=e.namespaceURI==="http://www.w3.org/1999/xhtml";Be(e,x,A,r,t==null?void 0:t[lr],n[lr]),c[S]=A,c[lr]=n[lr];continue}if(S==="style"){Ha(e,A,t==null?void 0:t[cr],n[cr]),c[S]=A,c[cr]=n[cr];continue}var f=c[S];if(!(A===f&&!(A===void 0&&e.hasAttribute(S)))){c[S]=A;var _=S[0]+S[1];if(_!=="$$")if(_==="on"){const $={},G="$$"+S;let H=S.slice(2);var b=Io(H);if(Co(H)&&(H=H.slice(0,-7),$.capture=!0),!b&&f){if(A!=null)continue;e.removeEventListener(H,c[G],$),c[G]=null}if(b)J(H,e,A),gn([H]);else if(A!=null){let se=function(Ee){c[S].call(this,Ee)};c[G]=Bo(H,e,se,$)}}else if(S==="style")$e(e,S,A);else if(S==="autofocus")vo(e,!!A);else if(!o&&(S==="__value"||S==="value"&&A!=null))e.value=e.__value=A;else if(S==="selected"&&v)Ua(e,A);else{var k=S;l||(k=zo(k));var L=k==="defaultValue"||k==="defaultChecked";if(p&&k==="defaultValue")continue;if(A==null&&!o&&!L)if(s[S]=null,k==="value"||k==="checked"){let $=e;const G=t===void 0;if(k==="value"){let H=$.defaultValue;$.removeAttribute(k),$.defaultValue=H,$.value=$.__value=G?H:null}else{let H=$.defaultChecked;$.removeAttribute(k),$.defaultChecked=H,$.checked=G?H:!1}}else e.removeAttribute(S);else L||(o||typeof A!="string")&&h.has(k)?(e[k]=A,k in s&&(s[k]=we)):typeof A!="function"&&$e(e,k,A)}}}return c}function qa(e,t,n=[],r=[],i=[],a,s=!1,o=!1){Qi(i,n,r,l=>{var c=void 0,v={},p=e.nodeName===Ya,y=!1;if(wa(()=>{var d=t(...l.map(g)),x=fl(e,c,d,a,s,o);if(y&&p){var f=e;"defaultValue"in d&&Wa(f,d.defaultValue),"value"in d&&Ut(f,d.value)}for(let b of Object.getOwnPropertySymbols(v))d[b]||Te(v[b]);for(let b of Object.getOwnPropertySymbols(d)){var _=d[b];b.description===Gs&&(!c||_!==c[b])&&(v[b]&&Te(v[b]),v[b]=je(()=>nl(e,()=>_))),x[b]=_}c=x}),p){var h=e;fi(()=>{var d=c;"defaultValue"in d&&Wa(h,d.defaultValue),Ut(h,d.value,!0),yn(h)})}y=!0})}function Rr(e){return e[kr]??(e[kr]={[Ga]:e.nodeName.includes("-"),[Xa]:e.namespaceURI===Yi})}var Ka=new Map;function Za(e){var t=e.getAttribute("is")||e.nodeName,n=Ka.get(t);if(n)return n;Ka.set(t,n=new Set);for(var r,i=e,a=Element.prototype;a!==i;){r=Vi(i);for(var s in r)r[s].set&&s!=="innerHTML"&&s!=="textContent"&&s!=="innerText"&&n.add(s);i=jr(i)}return n}function $i(e,t){return e===t||(e==null?void 0:e[Mt])===t}function Qa(e=Qr(),t,n,r){var i=ve.r,a=F;return fi(()=>{var s,o;return ya(()=>{s=o,o=[],en(()=>{$i(n(...o),e)||(t(e,...o),s&&$i(n(...s),e)&&t(null,...s))})}),()=>{let l=a;for(;l!==i&&l.parent!==null&&l.parent.f&br;)l=l.parent;const c=()=>{o&&$i(n(...o),e)&&t(null,...o)},v=l.teardown;l.teardown=()=>{c(),v==null||v()}}}),e}function dl(e=!1){const t=ve,n=t.l.u;if(!n)return;let r=()=>hn(t.s);if(e){let i=0,a={};const s=Cn(()=>{let o=!1;const l=t.s;for(const c in l)l[c]!==a[c]&&(a[c]=l[c],o=!0);return o&&i++,i});r=()=>g(s)}n.b.length&&Eo(()=>{Ja(t,r),Gr(n.b)}),Nr(()=>{const i=en(()=>n.m.map(Ps));return()=>{for(const a of i)typeof a=="function"&&a()}}),n.a.length&&Nr(()=>{Ja(t,r),Gr(n.a)})}function Ja(e,t){if(e.l.s)for(const n of e.l.s)g(n);t()}let Ir=!1;function vl(e){var t=Ir;try{return Ir=!1,[e(),Ir]}finally{Ir=t}}const pl={get(e,t){if(!e.exclude.includes(t))return g(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,n){if(!(t in e.special)){var r=F;try{ut(e.parent_effect),e.special[t]=St({get[t](){return e.props[t]}},t,Xi)}finally{ut(r)}}return e.special[t](n),la(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),la(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ae(e,t){return new Proxy({props:e,exclude:t,special:{},version:Jt(0),parent_effect:F},pl)}const hl={get(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(jn(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r)return r[t]}},set(e,t,n){let r=e.props.length;for(;r--;){let i=e.props[r];jn(i)&&(i=i());const a=Yt(i,t);if(a&&a.set)return a.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(jn(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r){const i=Yt(r,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===Mt||t===ji)return!1;for(let n of e.props)if(jn(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){const t=[];for(let n of e.props)if(jn(n)&&(n=n()),!!n){for(const r in n)t.includes(r)||t.push(r);for(const r of Object.getOwnPropertySymbols(n))t.includes(r)||t.push(r)}return t}};function ce(...e){return new Proxy({props:e},hl)}function St(e,t,n,r){var L;var i=!Tn||(n&Bs)!==0,a=(n&Fs)!==0,s=(n&Hs)!==0,o=r,l=!0,c=void 0,v=()=>s&&i?(c??(c=Cn(r)),g(c)):(l&&(l=!1,o=s?en(r):r),o);let p;if(a){var y=Mt in e||ji in e;p=((L=Yt(e,t))==null?void 0:L.set)??(y&&t in e?S=>e[t]=S:void 0)}var h,d=!1;a?[h,d]=vl(()=>e[t]):h=e[t],h===void 0&&r!==void 0&&(h=v(),p&&(i&&io(),p(h)));var x;if(i?x=()=>{var S=e[t];return S===void 0?v():(l=!0,S)}:x=()=>{var S=e[t];return S!==void 0&&(o=void 0),S===void 0?o:S},i&&(n&Xi)===0)return x;if(p){var f=e.$$legacy;return(function(S,A){return arguments.length>0?((!i||!A||f||d)&&p(A?x():S),S):x()})}var _=!1,b=((n&Vs)!==0?Cn:ei)(()=>(_=!1,x()));a&&g(b);var k=F;return(function(S,A){if(arguments.length>0){const $=A?g(b):i&&a?We(S):S;return M(b,$),_=!0,o!==void 0&&(o=$),S}return Ft&&_||(k.f&Ve)!==0?b.v:g(b)})}function Ei(e){ve===null&&Zs(),Tn&&ve.l!==null?_l(ve).m.push(e):Nr(()=>{const t=en(e);if(typeof t=="function")return t})}function _l(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const gl="5";typeof window<"u"&&((cs=window.__svelte??(window.__svelte={})).v??(cs.v=new Set)).add(gl);const ee=We({ready:!1,cleanScreen:!1,panelOpen:!0,settingsOpen:!1,startupOpen:!0,focusSection:null,focusNonce:0,status:{}});function ml(e){ee.panelOpen=!0,ee.focusSection=e,ee.focusNonce++}const Qe=We({});function es(e){try{return structuredClone(e)}catch{return JSON.parse(JSON.stringify(e))}}function re(e){var t,n,r;if(e==null)return e;try{return((r=(n=(t=window.XRA)==null?void 0:t.i18n)==null?void 0:n.t)==null?void 0:r.call(n,e))??e}catch{return e}}function Xe(e,t){const n=e.split(".");let r=Qe;for(const i of n){if(r==null)return t;r=r[i]}return r===void 0?t:r}function yl(e){var n,r,i,a,s,o,l,c;const t=window.XRA;if(t){if(e.startsWith("background.")){(r=(n=t.background)==null?void 0:n.apply)==null||r.call(n);return}if(e==="ui.language"){(a=(i=t.i18n)==null?void 0:i.setLanguage)==null||a.call(i,Qe.ui.language);return}if(e==="ui.preview_wireframe"){typeof t.applyMocapWireframeVisibility=="function"&&t.applyMocapWireframeVisibility();return}if(e==="ui.mocap_view"){typeof t.applyMocapWireframeVisibility=="function"&&t.applyMocapWireframeVisibility();return}if(e.startsWith("performance.")){window.XRA_render_fps_limit=Number(Qe.performance.render_fps??60),window.XRA_gpu_preference=String(Qe.performance.gpu_preference||"default"),window.XRA_preserve_drawing_buffer=Qe.performance.preserve_drawing_buffer!==!1,window.XRA_antialias=Qe.performance.antialias!=="off",(o=(s=t.events)==null?void 0:s.emit)==null||o.call(s,"performance",Qe.performance);return}(c=(l=t.events)==null?void 0:l.emit)==null||c.call(l,"config-change",{path:e,value:Xe(e)})}}function dt(e,t){var a,s;const n=window.XRA,r=e.split(".");let i=Qe;for(let o=0;o<r.length-1;o++)i[r[o]]==null&&(i[r[o]]={}),i=i[r[o]];if(i[r[r.length-1]]=t,n!=null&&n.config){let o=n.config;for(let l=0;l<r.length-1;l++)o[r[l]]==null&&(o[r[l]]={}),o=o[r[l]];o[r[r.length-1]]=t}yl(e);try{(s=(a=n==null?void 0:n.profileService)==null?void 0:a.save)==null||s.call(a)}catch{}}function Lr(){var e,t,n;ee.cleanScreen=!ee.cleanScreen,document.body.classList.toggle("xra-total-clean-screen",ee.cleanScreen);try{(n=(t=(e=window.XRA)==null?void 0:e.ui)==null?void 0:t.setHidden)==null||n.call(t,ee.cleanScreen)}catch{}}function wl(){var e;try{Object.assign(Qe,es(((e=window.XRA)==null?void 0:e.config)||{}))}catch{}}function ts(){var e;try{const t=(e=window.SA_bridge)==null?void 0:e.backend;t&&typeof t.status=="function"&&(ee.status=t.status()||{})}catch{}}function bl(){const e=()=>window.XRA&&window.XRA.config?(Object.assign(Qe,es(window.XRA.config)),ee.ready=!0,ts(),window.addEventListener("keydown",t=>{t.key==="Escape"&&ee.cleanScreen&&(t.preventDefault(),Lr())},!0),!0):!1;if(!e()){const t=setInterval(()=>{e()&&clearInterval(t)},200)}}const xl={camera:{title:"Camera",icon:"Camera"},devices:{title:"Devices",icon:"SlidersHorizontal"},pose_model:{title:"Pose model",icon:"PersonStanding"},performance:{title:"Performance",icon:"Zap"},tracking:{title:"Motion capture",icon:"Activity"},body:{title:"Body",icon:"PersonStanding"},collider:{title:"Body collider",icon:"Shield"},lip:{title:"Audio & Lip-sync",icon:"Mic"},background:{title:"Background",icon:"Image"},avatar:{title:"Character position (avatar only)",icon:"User"},second_avatar:{title:"Remote avatar (Studio Link)",icon:"Globe"},stage:{title:"3D Stage & Environment",icon:"Landmark"},recorder:{title:"Recording / capture",icon:"Video"},visual_effects:{title:"Visual effects",icon:"Sparkles"},debug:{title:"Diagnostics",icon:"Bug"},ui:{title:"UI & overlays",icon:"Monitor"}},ns=["performance","tracking","body","collider","lip","background","stage","avatar","second_avatar","recorder","visual_effects","debug","ui","camera","devices","pose_model"],Sl=new Set(["left_settings","_custom_","_excluded_"]),kl=new Set(["camera.view_presets","camera.selected_view_preset","ui.preview_video","ui.preview_wireframe","ui.preview_debug","performance.auto_last_result","recorder.output_dir"]);function rs(e){const t=String(e).replace(/_/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").trim();return t.charAt(0).toUpperCase()+t.slice(1)}const $l={"ui.language":{type:"select",options:()=>{var e,t;return((t=(e=window.XRA)==null?void 0:e.i18n)==null?void 0:t.LANGUAGES)||[["en","English"]]}},"background.mode":{type:"select",options:[["color","Color"],["image","Image"],["none","None (transparent · OBS)"]]},"background.color":{type:"color"},"background.path":{type:"text"},"ui.mocap_view":{type:"select",label:"Mocap window",options:[["off","Off"],["both","Webcam + skeleton"],["wireframe","Skeleton only"],["video","Webcam only"]]},"performance.tracking_pipeline":{type:"select",label:"Tracking mode",options:[["FULL_BODY","Full Body"],["FACE","Face only"],["UPPER_BODY","Upper body"]]},"performance.render_resolution":{type:"select",options:[["720p","720p (HD · GPU Saving)"],["1080p","1080p (Full HD · Recommended)"],["1440p","1440p (2K · High resolution)"]]},"performance.render_fps":{type:"slider",min:15,max:240,step:1},"performance.gpu_preference":{type:"select",label:"Graphics card (GPU)",options:[["default","Default"],["high-performance","Dedicated GPU (High Performance)"],["low-power","Integrated GPU (Low Power)"]]},"performance.shadows":{type:"select",options:[["auto","Auto"],["on","Enabled"],["off","Disabled (GPU saving)"]]},"performance.antialias":{type:"select",label:"Anti-Aliasing (AA)",options:[["auto","Enabled (Hardware MSAA · Recommended)"],["off","Disabled"]]},"performance.spring_bone":{type:"select",label:"Hair/cloth physics (Spring Bone)",options:[["full","Full (every frame)"],["half","Half (1 frame out of 2 · Saving)"],["off","Off"]]},"performance.infer_mode":{type:"select",options:[["native","Native (Auto)"],["640x360","640×360 (Recommended · 30 FPS smooth)"],["640x480","640×480 (Standard 4:3 format)"],["1280x720","1280×720 (HD 720p · High precision)"]]},"performance.pose_fps":{type:"slider",min:5,max:30,step:1},"performance.hand_fps":{type:"slider",min:5,max:30,step:1},"performance.min_tracking_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_pose_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_face_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_joint_confidence":{type:"slider",min:.05,max:1,step:.05},"tracking.hand_recovery_mode":{type:"select",options:[["normal","Normal"],["aggressive","Aggressive"],["off","Off"]]},"tracking.hand_detection_sensitivity":{type:"select",options:[["high","High"],["normal","Normal"],["low","Low"]]},"tracking.stabilize_hand_percent":{type:"slider",min:0,max:100,step:1},"tracking.stabilize_arm":{type:"slider",min:0,max:100,step:1},"tracking.stabilize_arm_time":{type:"slider",min:0,max:2,step:.05},"tracking.native_smoothing":{type:"slider",min:0,max:1,step:.01},"tracking.body_bend_reduction":{type:"slider",min:0,max:1,step:.01},"tracking.upper_body_guard_strength":{type:"slider",min:0,max:1,step:.01},"tracking.guard_jump_deg":{type:"slider",min:5,max:120,step:1},"tracking.guard_hold_ms":{type:"slider",min:0,max:2e3,step:10},"tracking.guard_reacquire_deg":{type:"slider",min:5,max:120,step:1},"tracking.adaptive_smoothing_strength":{type:"slider",min:0,max:1,step:.01},"tracking.guard_confidence_min":{type:"slider",min:0,max:1,step:.01},"tracking.guard_release_ms":{type:"slider",min:0,max:2e3,step:10},"tracking.guard_mode":{type:"select",options:[["off","Off"],["auto","Auto"]]},"tracking.desk_torso_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_hips_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_legs_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_max_yaw_deg":{type:"slider",min:0,max:90,step:1},"tracking.desk_max_pitch_deg":{type:"slider",min:0,max:90,step:1},"tracking.desk_max_roll_deg":{type:"slider",min:0,max:90,step:1},"body.anchor_strength":{type:"slider",min:0,max:1,step:.01},"body.transition_ms":{type:"slider",min:0,max:2e3,step:10},"avatar.offset_x":{type:"slider",min:-5,max:5,step:.01},"avatar.offset_y":{type:"slider",min:-5,max:5,step:.01},"avatar.offset_z":{type:"slider",min:-5,max:5,step:.01},"avatar.rotation_y":{type:"slider",min:-180,max:180,step:1},"second_avatar.offset_x":{type:"slider",min:-20,max:20,step:.1},"second_avatar.offset_y":{type:"slider",min:-10,max:10,step:.1},"second_avatar.offset_z":{type:"slider",min:-10,max:10,step:.1},"second_avatar.rotation_y":{type:"slider",min:-180,max:180,step:1},"stage.scale":{type:"slider",min:.1,max:5,step:.01},"stage.rotation_x":{type:"slider",min:-180,max:180,step:1},"stage.rotation_y":{type:"slider",min:-180,max:180,step:1},"stage.rotation_z":{type:"slider",min:-180,max:180,step:1},"stage.offset_x":{type:"slider",min:-10,max:10,step:.05},"stage.offset_y":{type:"slider",min:-10,max:10,step:.05},"stage.offset_z":{type:"slider",min:-10,max:10,step:.05},"stage.scene_zoom":{type:"slider",min:.5,max:3,step:.01},"stage.lights_intensity":{type:"slider",min:0,max:3,step:.05},"collider.preset":{type:"select",options:[["CUSTOM","Custom"],["NONE","None"]]},"collider.reaction":{type:"select",options:[["z_push","Z push"],["bounce","Bounce"],["block","Block"]]},"collider.head":{type:"slider",min:0,max:200,step:1},"collider.chest":{type:"slider",min:0,max:200,step:1},"collider.waist":{type:"slider",min:0,max:200,step:1},"collider.hip":{type:"slider",min:0,max:200,step:1},"collider.front_clearance":{type:"slider",min:0,max:50,step:1},"lip.analysis_fps":{type:"slider",min:5,max:60,step:1},"lip.fft_size":{type:"select",label:"FFT size",options:[["256","256"],["512","512"],["1024","1024"],["2048","2048"]]},"lip.mic_mix":{type:"slider",min:0,max:1,step:.01},"lip.threshold":{type:"slider",min:0,max:.2,step:.001},"lip.response_gain":{type:"slider",min:0,max:3,step:.05},"lip.vowel_emphasis":{type:"slider",min:0,max:3,step:.05},"recorder.mode":{type:"select",label:"Recording source",options:[["video_audio","Video + Audio"],["video","Video only"],["audio","Audio only"]]},"recorder.audio_only_variant":{type:"select",label:"Audio only mode",options:[["both","Processed + RAW"],["processed","Processed"],["raw","RAW"]]},"recorder.capture_source":{type:"select",label:"Output source",options:[["classic_v74","Classic output · recommended"],["clean_scene","Clean scene output · experimental (no UI)"],["native_xr","XR native video only · fallback"]]},"recorder.output_format":{type:"select",options:[["webm","WebM"],["mp4","MP4"]]},"recorder.audio_profile":{type:"select",options:[["podcast","Podcast"],["call","Call (Browser echo/noise filters)"]]},"recorder.hardware_encode":{type:"select",options:[["auto","Auto"],["on","On"],["off","Off (CPU)"]]},"recorder.width":{type:"slider",min:320,max:3840,step:2},"recorder.height":{type:"slider",min:240,max:2160,step:2},"recorder.fps":{type:"slider",min:15,max:60,step:1},"recorder.gate_threshold_db":{type:"slider",min:-80,max:-5,step:.5},"recorder.gate_hold_ms":{type:"slider",min:0,max:1e3,step:10},"recorder.gate_release_ms":{type:"slider",min:0,max:1e3,step:10},"recorder.video_bps":{type:"slider",min:5e5,max:2e7,step:1e5},"recorder.audio_bps":{type:"slider",min:32e3,max:32e4,step:8e3},"recorder.segment_minutes":{type:"select",options:[["0","Off"],["30","Every 30 min"],["60","Every 60 min"]]},"recorder.raw_audio_format":{type:"select",options:[["flac","FLAC (lossless)"],["wav","WAV (large)"]]},"recorder.filename":{type:"text"},"camera.optimized":{type:"toggle"},"camera.width":{type:"slider",min:160,max:1920,step:2},"camera.height":{type:"slider",min:120,max:1080,step:2},"camera.fps":{type:"slider",min:5,max:60,step:1}};function El(e){const t=[];for(const[n,r]of Object.entries(e||{})){if(Sl.has(n)||!r||typeof r!="object"||Array.isArray(r))continue;const i=xl[n]||{},a=[];for(const[s,o]of Object.entries(r)){const l=`${n}.${s}`;if(kl.has(l))continue;const c=$l[l]||{};if(c.hidden||o!==null&&typeof o=="object")continue;const v=c.type||(typeof o=="boolean"?"toggle":typeof o=="number"?"number":"text");a.push({type:v,path:l,label:c.label||rs(s),min:c.min,max:c.max,step:c.step,options:c.options})}a.length&&t.push({id:n,title:i.title||rs(n),icon:i.icon||"⚙",controls:a})}return t.sort((n,r)=>{const i=ns.indexOf(n.id),a=ns.indexOf(r.id);return(i<0?999:i)-(a<0?999:a)}),t}var Al=xe("<option> </option>"),Ml=xe("<select></select>"),Nl=xe("<select><option> </option><option> </option></select>"),Tl=xe('<input type="range"/> <span class="xra-val"> </span>',1),Ol=xe('<input type="checkbox"/>'),Pl=xe('<input type="color"/>'),Cl=xe('<input type="number"/>'),Rl=xe('<input type="text"/>'),Il=xe('<label class="xra-row"><span class="xra-row-label"> </span> <!></label>');function Ll(e,t){Zt(t,!0);const n=yt(()=>typeof t.control.options=="function"?t.control.options():t.control.options||[]),r=f=>f===!1?"off":"auto",i=f=>f==="off"?!1:null;var a=Il(),s=I(a),o=Z(s,!0),l=P(s,2);{var c=f=>{var _=Ml();tn(_,21,()=>g(n),za,(k,L)=>{var S=Al(),A=Z(S,!0),$={};be(G=>{Q(A,G),$!==($=g(L)[0])&&(S.value=(S.__value=$)??"")},[()=>re(g(L)[1])]),N(k,S)});var b;yn(_),be(k=>{b!==(b=k)&&(_.value=(_.__value=b)??"",Ut(_,b))},[()=>Xe(t.control.path)]),J("change",_,k=>dt(t.control.path,k.currentTarget.value)),N(f,_)},v=f=>{var _=Nl(),b=I(_),k=Z(b,!0);b.value=b.__value="auto";var L=P(b),S=Z(L,!0);L.value=L.__value="off";var A;yn(_),be(($,G,H)=>{Q(k,$),Q(S,G),A!==(A=H)&&(_.value=(_.__value=A)??"",Ut(_,A))},[()=>re("Auto (follow tracking)"),()=>re("Off"),()=>r(Xe(t.control.path))]),J("change",_,$=>dt(t.control.path,i($.currentTarget.value))),N(f,_)},p=f=>{var _=Tl(),b=K(_),k=P(b,2),L=Z(k,!0);be((S,A)=>{$e(b,"min",t.control.min),$e(b,"max",t.control.max),$e(b,"step",t.control.step),Cr(b,S),Q(L,A)},[()=>Xe(t.control.path,t.control.min),()=>Xe(t.control.path)]),J("input",b,S=>dt(t.control.path,Number(S.currentTarget.value))),N(f,_)},y=f=>{var _=Ol();be(b=>ul(_,b),[()=>!!Xe(t.control.path)]),J("change",_,b=>dt(t.control.path,b.currentTarget.checked)),N(f,_)},h=f=>{var _=Pl();be(b=>Cr(_,b),[()=>Xe(t.control.path)]),J("input",_,b=>dt(t.control.path,b.currentTarget.value)),N(f,_)},d=f=>{var _=Cl();be(b=>{$e(_,"step",t.control.step||"any"),Cr(_,b)},[()=>Xe(t.control.path,0)]),J("input",_,b=>dt(t.control.path,Number(b.currentTarget.value))),N(f,_)},x=f=>{var _=Rl();be(b=>Cr(_,b),[()=>Xe(t.control.path,"")]),J("change",_,b=>dt(t.control.path,b.currentTarget.value)),N(f,_)};Ht(l,f=>{t.control.type==="select"?f(c):t.control.type==="tristate"?f(v,1):t.control.type==="slider"?f(p,2):t.control.type==="toggle"?f(y,3):t.control.type==="color"?f(h,4):t.control.type==="number"?f(d,5):t.control.type==="text"&&f(x,6)})}be(f=>Q(o,f),[()=>re(t.control.label)]),N(e,a),Qt()}gn(["change","input"]),co();/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
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
 */const is=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();var Vl=Uo("<svg><!><!></svg>");function ue(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]),r=ae(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Zt(t,!1);let i=St(t,"name",8,void 0),a=St(t,"color",8,"currentColor"),s=St(t,"size",8,24),o=St(t,"strokeWidth",8,2),l=St(t,"absoluteStrokeWidth",8,!1),c=St(t,"iconNode",24,()=>[]);dl();var v=Vl();qa(v,(h,d,x)=>({...zl,...h,...r,width:s(),height:s(),stroke:a(),"stroke-width":d,class:x}),[()=>Dl(r)?void 0:{"aria-hidden":"true"},()=>(hn(l()),hn(o()),hn(s()),en(()=>l()?Number(o())*24/Number(s()):o())),()=>(hn(is),hn(i()),hn(n),en(()=>is("lucide-icon","lucide",i()?`lucide-${i()}`:"",n.class)))]);var p=I(v);tn(p,1,c,za,(h,d)=>{var x=yt(()=>Hi(g(d),2));let f=()=>g(x)[0],_=()=>g(x)[1];var b=te(),k=K(b);tl(k,f,!0,(L,S)=>{qa(L,()=>({..._()}))}),N(h,b)});var y=P(p);oe(y,t,"default",{}),N(e,v),Qt()}function Bl(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];ue(e,ce({name:"camera"},()=>n,{get iconNode(){return r},children:(i,a)=>{var s=te(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Fl(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 5H3"}],["path",{d:"M12 19H3"}],["path",{d:"M14 3v4"}],["path",{d:"M16 17v4"}],["path",{d:"M21 12h-9"}],["path",{d:"M21 19h-5"}],["path",{d:"M21 5h-7"}],["path",{d:"M8 10v4"}],["path",{d:"M8 12H3"}]];ue(e,ce({name:"sliders-horizontal"},()=>n,{get iconNode(){return r},children:(i,a)=>{var s=te(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Hl(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"5",r:"1"}],["path",{d:"m9 20 3-6 3 6"}],["path",{d:"m6 8 6 2 6-2"}],["path",{d:"M12 10v4"}]];ue(e,ce({name:"person-standing"},()=>n,{get iconNode(){return r},children:(i,a)=>{var s=te(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Ul(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];ue(e,ce({name:"zap"},()=>n,{get iconNode(){return r},children:(i,a)=>{var s=te(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Wl(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]];ue(e,ce({name:"activity"},()=>n,{get iconNode(){return r},children:(i,a)=>{var s=te(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function jl(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];ue(e,ce({name:"shield"},()=>n,{get iconNode(){return r},children:(i,a)=>{var s=te(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Gl(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 19v3"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3"}]];ue(e,ce({name:"mic"},()=>n,{get iconNode(){return r},children:(i,a)=>{var s=te(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Xl(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]];ue(e,ce({name:"image"},()=>n,{get iconNode(){return r},children:(i,a)=>{var s=te(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Yl(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 18v-7"}],["path",{d:"M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"}],["path",{d:"M14 18v-7"}],["path",{d:"M18 18v-7"}],["path",{d:"M3 22h18"}],["path",{d:"M6 18v-7"}]];ue(e,ce({name:"landmark"},()=>n,{get iconNode(){return r},children:(i,a)=>{var s=te(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function ql(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];ue(e,ce({name:"user"},()=>n,{get iconNode(){return r},children:(i,a)=>{var s=te(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Kl(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];ue(e,ce({name:"globe"},()=>n,{get iconNode(){return r},children:(i,a)=>{var s=te(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Zl(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]];ue(e,ce({name:"video"},()=>n,{get iconNode(){return r},children:(i,a)=>{var s=te(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Ql(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];ue(e,ce({name:"sparkles"},()=>n,{get iconNode(){return r},children:(i,a)=>{var s=te(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Jl(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 20v-9"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97"}],["path",{d:"M22 13h-4"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97"}],["path",{d:"M6 13H2"}],["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13"}]];ue(e,ce({name:"bug"},()=>n,{get iconNode(){return r},children:(i,a)=>{var s=te(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function ec(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]];ue(e,ce({name:"monitor"},()=>n,{get iconNode(){return r},children:(i,a)=>{var s=te(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function tc(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"10",r:"8"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 22h10"}],["path",{d:"M12 22v-4"}]];ue(e,ce({name:"webcam"},()=>n,{get iconNode(){return r},children:(i,a)=>{var s=te(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function as(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}]];ue(e,ce({name:"circle"},()=>n,{get iconNode(){return r},children:(i,a)=>{var s=te(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function nc(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];ue(e,ce({name:"square"},()=>n,{get iconNode(){return r},children:(i,a)=>{var s=te(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function rc(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]];ue(e,ce({name:"eye"},()=>n,{get iconNode(){return r},children:(i,a)=>{var s=te(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function ic(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}],["path",{d:"m2 2 20 20"}]];ue(e,ce({name:"eye-off"},()=>n,{get iconNode(){return r},children:(i,a)=>{var s=te(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function ac(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];ue(e,ce({name:"folder-open"},()=>n,{get iconNode(){return r},children:(i,a)=>{var s=te(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function sc(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];ue(e,ce({name:"info"},()=>n,{get iconNode(){return r},children:(i,a)=>{var s=te(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function oc(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ue(e,ce({name:"x"},()=>n,{get iconNode(){return r},children:(i,a)=>{var s=te(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function lc(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];ue(e,ce({name:"settings"},()=>n,{get iconNode(){return r},children:(i,a)=>{var s=te(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function cc(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ue(e,ce({name:"refresh-cw"},()=>n,{get iconNode(){return r},children:(i,a)=>{var s=te(),o=K(s);oe(o,t,"default",{}),N(i,s)},$$slots:{default:!0}}))}function Je(e,t){const n={Camera:Bl,SlidersHorizontal:Fl,PersonStanding:Hl,Zap:Ul,Activity:Wl,Shield:jl,Mic:Gl,Image:Xl,Landmark:Yl,User:ql,Globe:Kl,Video:Zl,Sparkles:Ql,Bug:Jl,Monitor:ec,Webcam:tc,Circle:as,Square:nc,Eye:rc,EyeOff:ic,FolderOpen:ac,Info:sc,X:oc,Settings:lc,RefreshCw:cc};let r=St(t,"name",3,"Circle"),i=St(t,"size",3,16),a=St(t,"strokeWidth",3,2),s=St(t,"class",3,"");const o=yt(()=>n[r()]??as);var l=te(),c=K(l);el(c,()=>g(o),(v,p)=>{p(v,{get size(){return i()},get"stroke-width"(){return a()},get class(){return s()}})}),N(e,l)}var uc=xe('<div class="xra-sec-body"></div>'),fc=xe('<details class="xra-sec"><summary><span class="xra-sec-title"><!> <span> </span></span> <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></summary> <!></details>');function dc(e,t){Zt(t,!0);const n="ui.sections_open";let r=Y(We(en(()=>{var f;return((f=Xe(n,{}))==null?void 0:f[t.section.id])??!1}))),i;function a(){M(r,!g(r)),dt(`${n}.${t.section.id}`,g(r))}Nr(()=>{ee.focusNonce,!(ee.focusSection!==t.section.id||!ee.panelOpen)&&(M(r,!0),dt(`${n}.${t.section.id}`,!0),requestAnimationFrame(()=>i==null?void 0:i.scrollIntoView({block:"nearest",behavior:"smooth"})))});var s=fc(),o=I(s),l=I(o),c=I(l);Je(c,{get name(){return t.section.icon},size:15,class:"xra-sec-icon"});var v=P(c,2),p=Z(v,!0),y=P(l,2);let h;var d=P(o,2);{var x=f=>{var _=uc();tn(_,21,()=>t.section.controls,b=>b.path,(b,k)=>{var L=te(),S=K(L);{var A=G=>{Ll(G,{get control(){return g(k)}})},$=yt(()=>!g(k).when||g(k).when(Qe));Ht(S,G=>{g($)&&G(A)})}N(b,L)}),N(f,_)};Ht(d,f=>{g(r)&&f(x)})}Qa(s,f=>i=f,()=>i),be(f=>{s.open=g(r),Q(p,f),h=Be(y,0,"xra-sec-chevron",null,h,{open:g(r)})},[()=>re(t.section.title)]),J("click",o,f=>{f.preventDefault(),a()}),N(e,s),Qt()}gn(["click"]);var ur=xe('<option class="svelte-x8svx4"> </option>'),vc=xe('<div class="warn svelte-x8svx4"> </div>'),pc=xe('<div class="xra-startup svelte-x8svx4"><div class="card svelte-x8svx4"><div class="head svelte-x8svx4"><div class="svelte-x8svx4"><h2 class="svelte-x8svx4">XR Animator</h2> <div class="sub svelte-x8svx4"> </div></div></div> <div class="grid svelte-x8svx4"><label class="field svelte-x8svx4"><div class="sub svelte-x8svx4">Language</div> <select class="svelte-x8svx4"></select></label> <label class="field svelte-x8svx4"><div class="sub svelte-x8svx4">Master preset</div> <select class="svelte-x8svx4"></select></label></div> <div class="status svelte-x8svx4"> </div> <section class="camera svelte-x8svx4"><div class="camera-head svelte-x8svx4"><div class="camera-title svelte-x8svx4"> </div> <div> </div></div> <div class="camera-row svelte-x8svx4"><select class="svelte-x8svx4"><!></select> <button type="button" class="action svelte-x8svx4"><!></button></div> <!></section> <div class="sub bg svelte-x8svx4"> </div> <div class="avatar svelte-x8svx4"><div class="sub svelte-x8svx4"> </div> <button type="button" class="action svelte-x8svx4"> </button></div> <div class="foot svelte-x8svx4"><button type="button" class="action primary confirm svelte-x8svx4"> </button></div></div></div>');function hc(e,t){Zt(t,!0);const n=()=>window.XRA,r=m=>re(m),i=["AUTO","ECO","LOW","BALANCED","QUALITY","HIGH","MAX","CUSTOM"];function a(){var m,w,E;try{(E=(w=(m=n())==null?void 0:m.profileService)==null?void 0:w.save)==null||E.call(w,0)}catch{}}const s=(()=>{var w,E;const m=(E=(w=n())==null?void 0:w.i18n)==null?void 0:E.LANGUAGES;return Array.isArray(m)&&m.length?m:[["auto","Auto / System"],["en","English"],["it","Italiano"]]})();let o=Y("auto"),l=Y("CUSTOM"),c=Y(""),v=Y("default"),p=Y(We([])),y=Y(!1),h=Y(""),d=Y(!1),x=Y(""),f=Y(""),_=Y("Loading avatar…"),b=Y(!0),k=Y(!1),L=Y(!1),S=Y(!1),A=Y(!1),$=0,G=[];async function H(m){const w=n();if(m=String(m||"CUSTOM").toUpperCase(),m==="CUSTOM"){w.config.performance.master_preset="CUSTOM",a(),M(c,"CUSTOM · ready");return}if(m==="AUTO"){M(c,"Benchmarking…");const E=await w.performance.benchmarkHardwareOnly();M(c,`AUTO → ${E.preset} (${E.fps.toFixed(1)} fps)`),await w.performance.applyPresetSafe(E.preset),w.config.performance.master_preset="AUTO",w.config.performance.auto_last_result=E,a();return}M(c,`${m}: applying…`),await w.performance.applyPresetSafe(m),M(c,`${m} · applied`)}function se(m=""){var V,W,ne;const w=(V=n())==null?void 0:V.nativeBridge,E=((W=w==null?void 0:w.activeCamera)==null?void 0:W.call(w))||{},O=!!((ne=w==null?void 0:w.cameraRunning)!=null&&ne.call(w));M(d,O),M(x,m||(O?`${r("ON")} · ${E.label||r("Default camera")}`:r("OFF")),!0)}async function Ee(m=!1){var E,O,V;const w=(E=n())==null?void 0:E.nativeBridge;if(w!=null&&w.enumerateCameras){M(S,!0);try{const W=await w.enumerateCameras({requestPermission:m}),ne=w.activeCamera()||{};M(p,(W||[]).map(ze=>({deviceId:ze.deviceId,label:ze.label})),!0);const he=ne.deviceId||((O=Qe.devices)==null?void 0:O.camera_device_id)||"";M(h,g(p).some(ze=>ze.deviceId===he)?he:((V=g(p)[0])==null?void 0:V.deviceId)||"",!0),M(y,!0),se()}catch{M(y,!0),se(r("Camera unavailable"))}finally{M(S,!1)}}}async function Oe(m){var V,W;const w=(V=n())==null?void 0:V.nativeBridge,E=((W=m==null?void 0:m.currentTarget)==null?void 0:W.value)??g(h),O=g(p).find(ne=>ne.deviceId===E);if(O){M(S,!0);try{const ne={deviceId:O.deviceId,label:O.label};w.cameraRunning()?await w.switchCamera(ne):await w.setCameraPreference(ne),se()}catch(ne){se("Error · "+ne.message)}finally{M(S,!1)}}}function Xt(){var E,O,V,W,ne,he,ze,Re;const m=(V=(O=(E=n())==null?void 0:E.xraBackend)==null?void 0:O.snapshot)==null?void 0:V.call(O),w=(m==null?void 0:m.capture)||((Re=(ze=(he=(ne=(W=window.SA_bridge)==null?void 0:W.backend)==null?void 0:ne.status)==null?void 0:he.call(ne))==null?void 0:ze.backend)==null?void 0:Re.capture);if(w!=null&&w.camera_busy){const zt=(w.busy_processes&&w.busy_processes.length?w.busy_processes:w.busy_process?[w.busy_process]:[]).filter($n=>!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(String($n).trim()));if(zt.length)return{busy:!0,proc:zt.join(", ")}}if(w!=null&&w.last_error&&w.last_error.includes("Webcam occupata")){const _e=w.last_error.match(/Webcam occupata da:\s*([^.]+)/i),zt=_e?_e[1].trim():"";if(!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(zt))return{busy:!0,proc:w.last_error}}return{busy:!1,proc:""}}function sn(){var m,w,E,O,V,W,ne,he,ze;if(typeof((w=(m=n())==null?void 0:m.nativeBridge)==null?void 0:w.isAvatarReady)=="function")return n().nativeBridge.isAvatarReady();if((E=window.MMD_SA)!=null&&E.MMD_started){const Re=(W=(V=(O=window.MMD_SA)==null?void 0:O.THREEX)==null?void 0:V.get_model)==null?void 0:W.call(V,0);let _e=Re;if((Re==null?void 0:Re.type)==="MMD_dummy")try{_e=Re.model||null}catch{_e=null}const zt=((ne=_e==null?void 0:_e.model)==null?void 0:ne.scene)||(_e==null?void 0:_e.mesh)||(_e==null?void 0:_e.scene)||null;if(_e&&!(Re!=null&&Re.loading)&&!_e.loading&&!((ze=(he=window.MMD_SA)==null?void 0:he.THREEX)!=null&&ze._loading_model)&&zt)return zt.visible!==!1}return!1}function Lt(){var w,E,O;const m=(w=n())==null?void 0:w.xraBackend;return!m||!m.active?!0:!!((O=(E=m.snapshot)==null?void 0:E.call(m))!=null&&O.ready)}function Ye(){if(g(A)||!ee.startupOpen)return;const m=Xt();M(f,m.busy?`Webcam in use by another application (${m.proc}). Close it to start tracking.`:"",!0),sn()?Lt()?m.busy?(M(b,!0),M(_,r("Camera busy…"),!0)):g(k)?M(b,!0):(M(b,!1),M(_,"START")):(M(b,!0),M(_,r("Connecting to backend…"),!0)):(M(b,!0),M(_,r("Loading avatar…"),!0))}async function X(m){var E,O,V;const w=((E=m==null?void 0:m.currentTarget)==null?void 0:E.value)??g(l);M(l,w,!0),M(L,!0);try{await H(w),n().events.emit("state",{path:"performance.master_preset",value:n().config.performance.master_preset}),wl()}catch(W){console.error("[XRA START]",W),M(c,"Preset error: "+W.message)}finally{M(L,!1),(V=(O=n().ui)==null?void 0:O.refresh)==null||V.call(O)}}function Le(m){var w,E,O,V;M(o,((w=m==null?void 0:m.currentTarget)==null?void 0:w.value)??g(o),!0),(V=(O=(E=n())==null?void 0:E.i18n)==null?void 0:O.setLanguage)==null||V.call(O,g(o))}async function ge(){var m,w;try{await((w=(m=n().nativeBridge)==null?void 0:m.openVrmPicker)==null?void 0:w.call(m))}catch(E){n().toast("VRM loader: "+E.message,"error",4500)}}async function Pe(m=!1){var E,O,V,W,ne,he,ze,Re;if(g(A)||g(b))return;M(A,!0),$&&(clearInterval($),$=0),M(k,!0),M(_,"Starting…");const w=n();if(a(),ee.startupOpen=!1,(O=(E=w.ui)==null?void 0:E.refresh)==null||O.call(E),m)try{typeof w.whenNativeReady=="function"&&await w.whenNativeReady(15e3),(V=w.xraBackend)!=null&&V.waitUntilReady&&await w.xraBackend.waitUntilReady(6e3).catch(()=>{}),await((ne=(W=w.nativeBridge)==null?void 0:W.startNativeStreamer)==null?void 0:ne.call(W))}catch(_e){(ze=(he=globalThis.XRA_CAMERA_OWNERSHIP)==null?void 0:he.isOwnershipError)!=null&&ze.call(he,_e)||(console.warn("[XRA START]","Auto-starting camera on START failed",_e),(Re=w.toast)==null||Re.call(w,"Starting camera: "+_e.message,"warn",5e3))}}Ei(()=>{var w,E,O,V,W,ne,he,ze,Re,_e,zt,$n,gs,ms,ys,ws,bs,Hr,xs,Ss,ks,$s;const m=n();M(c,r("Ready."),!0),M(o,((E=(w=m==null?void 0:m.config)==null?void 0:w.ui)==null?void 0:E.language)||"auto",!0),M(l,((V=(O=m==null?void 0:m.config)==null?void 0:O.performance)==null?void 0:V.master_preset)==="MINIMAL"?"ECO":((ne=(W=m==null?void 0:m.config)==null?void 0:W.performance)==null?void 0:ne.master_preset)||"CUSTOM",!0),M(v,((ze=(he=m==null?void 0:m.config)==null?void 0:he.background)==null?void 0:ze.path)||((_e=(Re=m==null?void 0:m.config)==null?void 0:Re.background)==null?void 0:_e.color)||"default",!0);try{const Dt=(gs=($n=(zt=window.SA_bridge)==null?void 0:zt.backend)==null?void 0:$n.status)==null?void 0:gs.call($n),Ur=(ys=(ms=window.System)==null?void 0:ms._browser)==null?void 0:ys.camera;(bs=(ws=Dt==null?void 0:Dt.backend)==null?void 0:ws.capture)!=null&&bs.running&&!(Ur!=null&&Ur.running)&&((xs=(Hr=window.SA_bridge.backend)==null?void 0:Hr.stop)==null||xs.call(Hr).catch(()=>{}))}catch{}se(),setTimeout(()=>Ee(!1),100),$=setInterval(Ye,300),window.addEventListener("MMDStarted",Ye),(Ss=m.xraBackend)!=null&&Ss.onStatus&&m.xraBackend.onStatus(Ye),Ye(),($s=(ks=m.whenNativeReady)==null?void 0:ks.call(m))==null||$s.then(()=>{ee.startupOpen&&Ee(!1)});for(const Dt of["camera-started","camera-stopped","camera-switched"])G.push(m.events.on(Dt,()=>{ee.startupOpen&&Ee(!1)}));for(const Dt of["avatar-loading","avatar-changed","avatar-ready"])G.push(m.events.on(Dt,()=>Ye()));return()=>{$&&clearInterval($),window.removeEventListener("MMDStarted",Ye);for(const Dt of G)try{Dt()}catch{}G=[]}});var Et=pc(),it=I(Et),Ue=I(it),at=I(Ue),qe=P(I(at),2),Ce=Z(qe,!0),T=P(Ue,2),D=I(T),U=P(I(D),2);tn(U,21,()=>s,([m,w])=>m,(m,w)=>{var E=yt(()=>Hi(g(w),2));let O=()=>g(E)[0],V=()=>g(E)[1];var W=ur(),ne=Z(W,!0),he={};be(()=>{Q(ne,V()),he!==(he=O())&&(W.value=(W.__value=he)??"")}),N(m,W)});var fe;yn(U);var Ke=P(D,2),Ae=P(I(Ke),2);tn(Ae,20,()=>i,m=>m,(m,w)=>{var E=ur(),O=Z(E,!0),V={};be(()=>{Q(O,w),V!==(V=w)&&(E.value=(E.__value=V)??"")}),N(m,E)});var Me;yn(Ae);var ht=P(T,2),pe=Z(ht,!0),_t=P(ht,2),Br=I(_t),us=I(Br),$c=Z(us,!0),fs=P(us,2);let ds;var Ec=Z(fs,!0),vs=P(Br,2),on=I(vs),Ac=I(on);{var Mc=m=>{var w=ur(),E=Z(w,!0);w.value=w.__value="",be(O=>Q(E,O),[()=>r("Loading cameras…")]),N(m,w)},Nc=m=>{var w=ur(),E=Z(w,!0);w.value=w.__value="",be(O=>Q(E,O),[()=>r("No cameras found")]),N(m,w)},Tc=m=>{var w=te(),E=K(w);tn(E,17,()=>g(p),O=>O.deviceId,(O,V)=>{var W=ur(),ne=Z(W,!0),he={};be(()=>{Q(ne,g(V).label),he!==(he=g(V).deviceId)&&(W.value=(W.__value=he)??"")}),N(O,W)}),N(m,w)};Ht(Ac,m=>{g(y)?g(p).length?m(Tc,-1):m(Nc,1):m(Mc)})}var Fr;yn(on);var _r=P(on,2),Oc=I(_r);Je(Oc,{name:"RefreshCw",size:14});var Pc=P(vs,2);{var Cc=m=>{var w=vc(),E=Z(w,!0);be(()=>Q(E,g(f))),N(m,w)};Ht(Pc,m=>{g(f)&&m(Cc)})}var ps=P(_t,2),Rc=Z(ps),hs=P(ps,2),_s=I(hs),Ic=Z(_s,!0),Mi=P(_s,2),Lc=Z(Mi,!0),zc=P(hs,2),Ni=I(zc),Dc=Z(Ni,!0);be((m,w,E,O,V,W)=>{Q(Ce,m),U.disabled=g(A),fe!==(fe=g(o))&&(U.value=(U.__value=fe)??"",Ut(U,fe)),Ae.disabled=g(L)||g(A),Me!==(Me=g(l))&&(Ae.value=(Ae.__value=Me)??"",Ut(Ae,Me)),Q(pe,g(c)),Q($c,w),ds=Be(fs,1,"camera-state svelte-x8svx4",null,ds,{on:g(d)}),Q(Ec,g(x)),on.disabled=g(S),Fr!==(Fr=g(h))&&(on.value=(on.__value=Fr)??"",Ut(on,Fr)),$e(_r,"title",E),$e(_r,"aria-label",O),_r.disabled=g(S),Q(Rc,`Background: ${g(v)??""}`),Q(Ic,V),Mi.disabled=g(A),Q(Lc,W),Ni.disabled=g(b)||g(k),Q(Dc,g(_))},[()=>r("Quick setup · changes apply immediately."),()=>r("Webcam"),()=>r("Refresh cameras"),()=>r("Refresh cameras"),()=>r("Avatar: the last VRM you chose is copied into avatars/ and restored at startup."),()=>r("Load / change VRM…")]),J("change",U,Le),J("change",Ae,X),J("change",on,Oe),J("click",_r,()=>Ee(!0)),J("click",Mi,ge),J("click",Ni,()=>Pe(!0)),N(e,Et),Qt()}gn(["change","click"]);var _c=xe('<button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button>'),gc=xe('<nav class="xra-dock group fixed left-2 top-1/2 z-[99990] flex w-[46px] max-h-[92vh] -translate-y-1/2 flex-col gap-0.5 overflow-hidden rounded-xl border border-white/10 bg-[var(--xra-ui-bg)] p-1.5 font-sans text-[12.5px] leading-snug text-[var(--xra-ui-fg)] shadow-[0_12px_40px_rgba(0,0,0,.55)] transition-[width] duration-200 hover:w-[232px]"><!> <div class="my-1 h-px bg-white/10"></div> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button></nav>');function mc(e,t){Zt(t,!0);const n=()=>window.XRA;let r=Y(!1),i=Y(!1),a=Y(!1),s=0;function o(){var D,U,fe,Ke,Ae,Me,ht;const T=n();if(T){try{M(r,!!((U=(D=T.nativeBridge)==null?void 0:D.cameraRunning)!=null&&U.call(D)))}catch{}try{M(i,!!((Ae=(Ke=(fe=T.recorder)==null?void 0:fe.status)==null?void 0:Ke.call(fe))!=null&&Ae.active))}catch{}try{M(a,!!((ht=(Me=T.nativeBridge)==null?void 0:Me.getPreviewVisibility)!=null&&ht.call(Me,"video")))}catch{}}}async function l(){var D,U;const T=n().nativeBridge;try{T.cameraRunning()?await T.stopNativeStreamer():await T.startNativeStreamer()}catch(fe){(U=(D=n()).toast)==null||U.call(D,"Tracking: "+fe.message,"warn",4e3)}finally{setTimeout(o,250)}}async function c(){var D,U,fe;const T=n().recorder;try{(D=T.status)!=null&&D.call(T).active?await T.stop():await T.start()}catch(Ke){(fe=(U=n()).toast)==null||fe.call(U,"Recording: "+Ke.message,"warn",4e3)}finally{setTimeout(o,250)}}function v(){var D,U;const T=!g(a);try{(U=(D=n().nativeBridge)==null?void 0:D.setPreviewVisibility)==null||U.call(D,"video",T)}catch{}M(a,T)}async function p(){var T,D,U,fe;try{await((D=(T=n().nativeBridge)==null?void 0:T.openVrmPicker)==null?void 0:D.call(T))}catch(Ke){(fe=(U=n()).toast)==null||fe.call(U,"VRM loader: "+Ke.message,"error",4500)}}function y(){var T,D;try{(D=(T=n().nativeBridge)==null?void 0:T.showAbout)==null||D.call(T)}catch{}}const h=[{id:"ui",icon:"Monitor",label:"UI Settings"},{id:"camera",icon:"Camera",label:"Webcam settings"},{id:"avatar",icon:"User",label:"Model settings"},{id:"second_avatar",icon:"Globe",label:"Studio link"},{id:"stage",icon:"Landmark",label:"Environment + Camera"},{id:"background",icon:"Image",label:"Background"},{id:"lip",icon:"Mic",label:"Audio"}],d="hover:bg-white/10",x="flex-1 overflow-hidden opacity-0 transition-opacity duration-150 group-hover:opacity-100";Ei(()=>(o(),s=setInterval(o,1e3),()=>clearInterval(s)));var f=gc(),_=I(f);tn(_,17,()=>h,T=>T.id,(T,D)=>{var U=_c();Be(U,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var fe=I(U),Ke=I(fe);Je(Ke,{get name(){return g(D).icon},size:16});var Ae=P(fe,2);Be(Ae,1,mn(x));var Me=Z(Ae,!0);be((ht,pe)=>{$e(U,"title",ht),Q(Me,pe)},[()=>re(g(D).label),()=>re(g(D).label)]),J("click",U,()=>ml(g(D).id)),N(T,U)});var b=P(_,4),k=I(b),L=I(k);{let T=yt(()=>g(r)?"text-emerald-400":"");Je(L,{name:"Webcam",size:16,get class(){return g(T)}})}var S=P(k,2);Be(S,1,mn(x));var A=Z(S,!0),$=P(b,2),G=I($),H=I(G);{let T=yt(()=>g(i)?"Square":"Circle"),D=yt(()=>g(i)?"text-red-400":"");Je(H,{get name(){return g(T)},size:16,get class(){return g(D)}})}var se=P(G,2);Be(se,1,mn(x));var Ee=Z(se,!0),Oe=P($,2),Xt=I(Oe),sn=I(Xt);{let T=yt(()=>g(a)?"Eye":"EyeOff");Je(sn,{get name(){return g(T)},size:16})}var Lt=P(Xt,2);Be(Lt,1,mn(x));var Ye=Z(Lt,!0),X=P(Oe,2);Be(X,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var Le=I(X),ge=I(Le);Je(ge,{name:"FolderOpen",size:16});var Pe=P(Le,2);Be(Pe,1,mn(x));var Et=Z(Pe,!0),it=P(X,2);Be(it,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var Ue=I(it),at=I(Ue);Je(at,{name:"Info",size:16});var qe=P(Ue,2);Be(qe,1,mn(x));var Ce=Z(qe,!0);be((T,D,U,fe,Ke,Ae,Me,ht,pe,_t)=>{Be(b,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${g(r)?"bg-emerald-500/20":d}`),$e(b,"title",T),Q(A,D),Be($,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${g(i)?"bg-red-500/30 text-red-200":d}`),$e($,"title",U),Q(Ee,fe),Be(Oe,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${g(a)?"bg-emerald-500/20":d}`),$e(Oe,"title",Ke),Q(Ye,Ae),$e(X,"title",Me),Q(Et,ht),$e(it,"title",pe),Q(Ce,_t)},[()=>re("Tracking"),()=>g(r)?re("Tracking on"):re("Tracking off"),()=>re("Record"),()=>g(i)?re("Stop recording"):re("Record"),()=>re("Preview"),()=>g(a)?re("Hide preview"):re("Show preview"),()=>re("Load / change VRM…"),()=>re("Load / change VRM…"),()=>re("About"),()=>re("About")]),J("click",b,l),J("click",$,c),J("click",Oe,v),J("click",X,p),J("click",it,y),N(e,f),Qt()}gn(["click"]);var yc=xe('<div class="xra-mocap-window fixed z-[99991] flex flex-col overflow-hidden rounded-xl border border-white/15 bg-[var(--xra-ui-bg)] text-[var(--xra-ui-fg)] shadow-[0_16px_48px_rgba(0,0,0,.6)] font-sans"><header class="flex shrink-0 cursor-move touch-none select-none items-center gap-2 px-2 py-1.5"><!> <span class="flex-1 text-[12px] font-semibold"> </span> <select class="rounded-md border border-white/15 bg-[#101214] px-1.5 py-0.5 text-[11px] text-[var(--xra-ui-fg)]"><option> </option><option> </option><option> </option><option> </option></select> <button type="button" class="rounded-md border border-white/15 bg-white/5 px-1.5 py-0.5 cursor-pointer text-[var(--xra-ui-fg)]"><!></button></header> <div class="relative min-h-0 flex-1 bg-black/50"><canvas class="absolute inset-0 h-full w-full"></canvas> <div class="absolute bottom-0 right-0 z-10 h-5 w-5 cursor-nwse-resize touch-none"></div></div></div>');function wc(e,t){Zt(t,!0);const n=()=>window.XRA,r=Xe("ui.mocap_window",{})||{};let i=Y(We(Number.isFinite(r.x)?r.x:48)),a=Y(We(Number.isFinite(r.y)?r.y:96)),s=Y(We(Number.isFinite(r.w)?r.w:360)),o=Y(We(Number.isFinite(r.h)?r.h:270)),l,c=0;function v(){dt("ui.mocap_window",{x:Math.round(g(i)),y:Math.round(g(a)),w:Math.round(g(s)),h:Math.round(g(o))})}function p(X,Le){X.preventDefault();const ge=X.clientX,Pe=X.clientY,Et=g(i),it=g(a),Ue=g(s),at=g(o),qe=T=>{const D=T.clientX-ge,U=T.clientY-Pe;Le==="move"?(M(i,Math.max(0,Math.min(window.innerWidth-80,Et+D)),!0),M(a,Math.max(0,Math.min(window.innerHeight-30,it+U)),!0)):(M(s,Math.max(200,Math.min(window.innerWidth-g(i),Ue+D)),!0),M(o,Math.max(130,Math.min(window.innerHeight-g(a),at+U)),!0))},Ce=()=>{window.removeEventListener("pointermove",qe),window.removeEventListener("pointerup",Ce),v()};window.addEventListener("pointermove",qe),window.addEventListener("pointerup",Ce)}function y(){var Ae,Me,ht;if(c=requestAnimationFrame(y),!l)return;const X=l.parentElement;if(!X)return;const Le=window.devicePixelRatio||1,ge=X.clientWidth,Pe=X.clientHeight;if(ge<2||Pe<2)return;const Et=Math.round(ge*Le),it=Math.round(Pe*Le);(l.width!==Et||l.height!==it)&&(l.width=Et,l.height=it);const Ue=l.getContext("2d");if(!Ue)return;Ue.setTransform(Le,0,0,Le,0,0),Ue.clearRect(0,0,ge,Pe);const at=Xe("ui.mocap_view","off");if(at==="off")return;const qe=((ht=(Me=(Ae=n())==null?void 0:Ae.nativeBridge)==null?void 0:Me.getMocapSources)==null?void 0:ht.call(Me))||{},Ce=qe.cameraRect||{x:0,y:0,w:window.innerWidth,h:window.innerHeight};if(!Ce.w||!Ce.h)return;const T=Math.min(ge/Ce.w,Pe/Ce.h),D=(ge-Ce.w*T)/2,U=(Pe-Ce.h*T)/2,fe=pe=>D+(pe-Ce.x)*T,Ke=pe=>U+(pe-Ce.y)*T;if(at==="both"||at==="video"){const pe=qe.videoCanvas&&qe.videoCanvas.width?qe.videoCanvas:qe.video,_t=(pe==null?void 0:pe.videoWidth)||(pe==null?void 0:pe.width)||0;if(pe&&_t)try{Ue.drawImage(pe,D,U,Ce.w*T,Ce.h*T)}catch{}}if(at==="both"||at==="wireframe")for(const pe of qe.canvases||[]){const _t=pe.rect;if(_t)try{Ue.drawImage(pe.node,fe(_t.x),Ke(_t.y),_t.w*T,_t.h*T)}catch{}}}Ei(()=>(y(),()=>cancelAnimationFrame(c)));var h=yc(),d=I(h),x=I(d);Je(x,{name:"Activity",size:14});var f=P(x,2),_=Z(f,!0),b=P(f,2),k=I(b),L=Z(k,!0);k.value=k.__value="both";var S=P(k),A=Z(S,!0);S.value=S.__value="wireframe";var $=P(S),G=Z($,!0);$.value=$.__value="video";var H=P($),se=Z(H,!0);H.value=H.__value="off";var Ee;yn(b);var Oe=P(b,2),Xt=I(Oe);Je(Xt,{name:"X",size:13});var sn=P(d,2),Lt=I(sn);Qa(Lt,X=>l=X,()=>l);var Ye=P(Lt,2);be((X,Le,ge,Pe,Et,it,Ue,at)=>{Ha(h,`left:${g(i)??""}px; top:${g(a)??""}px; width:${g(s)??""}px; height:${g(o)??""}px;`),Q(_,X),Q(L,Le),Q(A,ge),Q(G,Pe),Q(se,Et),Ee!==(Ee=it)&&(b.value=(b.__value=Ee)??"",Ut(b,Ee)),$e(Oe,"title",Ue),$e(Ye,"title",at)},[()=>re("Mocap"),()=>re("Webcam + skeleton"),()=>re("Skeleton only"),()=>re("Webcam only"),()=>re("Off"),()=>Xe("ui.mocap_view","off"),()=>re("Close"),()=>re("Resize")]),J("pointerdown",d,X=>p(X,"move")),J("change",b,X=>dt("ui.mocap_view",X.currentTarget.value)),J("pointerdown",b,X=>X.stopPropagation()),J("click",Oe,()=>dt("ui.mocap_view","off")),J("pointerdown",Oe,X=>X.stopPropagation()),J("pointerdown",Ye,X=>{X.stopPropagation(),p(X,"resize")}),N(e,h),Qt()}gn(["pointerdown","change","click"]);var bc=xe('<aside class="xra-panel"><header class="xra-panel-head"><strong>XR Animator</strong> <span class="xra-spacer"></span> <button><!></button> <button title="Close panel"><!></button></header> <div class="xra-panel-body"></div></aside>'),xc=xe('<button class="xra-panel-launcher"><!></button>'),Sc=xe("<!> <!> <!> <!>",1);function kc(e,t){Zt(t,!0),bl();const n=yt(()=>El(Qe));var r=Sc(),i=K(r);{var a=d=>{hc(d,{})};Ht(i,d=>{ee.ready&&ee.startupOpen&&d(a)})}var s=P(i,2);{var o=d=>{mc(d,{})};Ht(s,d=>{ee.ready&&!ee.startupOpen&&d(o)})}var l=P(s,2);{var c=d=>{wc(d,{})},v=yt(()=>ee.ready&&!ee.startupOpen&&Xe("ui.mocap_view","off")!=="off");Ht(l,d=>{g(v)&&d(c)})}var p=P(l,2);{var y=d=>{var A,$,G;var x=bc(),f=I(x),_=P(I(f),4);$e(_,"title",((G=($=(A=window.XRA)==null?void 0:A.i18n)==null?void 0:$.t)==null?void 0:G.call($,"Clean screen mode (Press Esc to restore)"))||"Clean screen (Esc)");var b=I(_);Je(b,{name:"EyeOff",size:15});var k=P(_,2),L=I(k);Je(L,{name:"X",size:15});var S=P(f,2);tn(S,21,()=>g(n),H=>H.id,(H,se)=>{dc(H,{get section(){return g(se)}})}),J("click",_,function(...H){Lr==null||Lr.apply(this,H)}),J("click",k,()=>ee.panelOpen=!1),N(d,x)},h=d=>{var x=xc(),f=I(x);Je(f,{name:"Settings",size:16}),J("click",x,()=>{ee.panelOpen=!0,ts()}),N(d,x)};Ht(p,d=>{ee.ready&&!ee.startupOpen&&ee.panelOpen?d(y):ee.ready&&!ee.startupOpen&&d(h,1)})}N(e,r),Qt()}gn(["click"]),window.XRA_SVELTE_UI=!0;function ss(){let e=document.getElementById("XRA_SVELTE");e||(e=document.createElement("div"),e.id="XRA_SVELTE",document.body.appendChild(e)),Yo(kc,{target:e})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ss):ss()})();

})();
