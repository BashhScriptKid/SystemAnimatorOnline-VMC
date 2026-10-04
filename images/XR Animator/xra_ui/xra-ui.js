(function(){
var Wc=Object.defineProperty;var Ao=fe=>{throw TypeError(fe)};var jc=(fe,ae,be)=>ae in fe?Wc(fe,ae,{enumerable:!0,configurable:!0,writable:!0,value:be}):fe[ae]=be;var tt=(fe,ae,be)=>jc(fe,typeof ae!="symbol"?ae+"":ae,be),Oi=(fe,ae,be)=>ae.has(fe)||Ao("Cannot "+be);var u=(fe,ae,be)=>(Oi(fe,ae,"read from private field"),be?be.call(fe):ae.get(fe)),V=(fe,ae,be)=>ae.has(fe)?Ao("Cannot add the same private member more than once"):ae instanceof WeakSet?ae.add(fe):ae.set(fe,be),z=(fe,ae,be,Zt)=>(Oi(fe,ae,"write to private field"),Zt?Zt.call(fe,be):ae.set(fe,be),be),U=(fe,ae,be)=>(Oi(fe,ae,"access private method"),be);(function(){"use strict";var uo,Cn,Gt,un,On,Pn,Rn,zt,In,Ke,lr,Dt,mt,Nt,Ln,fn,J,Pi,Ri,hr,Ii,Mo,No,Fn,Xc,_r,fo,lt,Ni,ct,dn,Ie,Ze,Le,Qe,Tt,vn,Yt,zn,cr,ur,Bt,Br,le,Gc,Yc,Li,qc,zi,gr,Xr,Di,Bi,yt,Ct,Je,pn,fr,dr,Vr,vo;var ae=Array.isArray,be=Array.prototype.indexOf,Zt=Array.prototype.includes,mr=Array.from,Vi=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,Fi=Object.getOwnPropertyDescriptors,To=Object.prototype,Co=Array.prototype,Gr=Object.getPrototypeOf,Hi=Object.isExtensible;function Hn(e){return typeof e=="function"}const Oo=()=>{};function Po(e){return e()}function Yr(e){for(var t=0;t<e.length;t++)e[t]()}function Ui(){var e,t,n=new Promise((r,i)=>{e=r,t=i});return{promise:n,resolve:e,reject:t}}function Wi(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const n=[];for(const r of e)if(n.push(r),n.length===t)break;return n}const Me=2,yn=4,Un=8,qr=1<<24,dt=16,nt=32,Pt=64,Kr=128,Zr=256,vt=512,xe=1024,ye=2048,rt=4096,Oe=8192,Pe=16384,wn=32768,yr=1<<25,Ft=65536,wr=1<<17,Ro=1<<18,bn=1<<19,ji=1<<20,bt=1<<25,br=1<<21,xn=1<<22,Ht=1<<23,xt=Symbol("$state"),Xi=Symbol("component"),Gi=Symbol("legacy props"),Io=Symbol(""),xr=Symbol("attributes"),Qr=Symbol("class"),Jr=Symbol("style"),Wn=Symbol("text"),jn=new class extends Error{constructor(){super(...arguments);tt(this,"name","StaleReactionError");tt(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},kr=!!((uo=globalThis.document)!=null&&uo.contentType)&&globalThis.document.contentType.includes("xml"),Lo=1,zo=2,Yi=4,Do=8,Bo=16,Vo=1,Fo=2,qi=4,Ho=8,Uo=16,Wo=1,jo=2,we=Symbol("uninitialized"),Ki="http://www.w3.org/1999/xhtml",Xo="http://www.w3.org/2000/svg",Go="@attach";function Yo(){console.warn("https://svelte.dev/e/derived_inert")}function qo(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Ko(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Zi(e){return e===this.v}function Zo(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Qi(e){return!Zo(e,this.v)}function Qo(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Jo(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function es(e,t,n){throw new Error("https://svelte.dev/e/each_key_duplicate")}function ts(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ns(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function rs(e){throw new Error("https://svelte.dev/e/effect_orphan")}function is(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function as(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function os(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ss(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ls(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function cs(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let kn=!1,Kc=!1;function us(){kn=!0}let de=null;function Sn(e){de=e}function kt(e,t=!1,n){de={p:de,i:!1,c:null,e:null,s:e,x:null,r:H,l:kn&&!t?{s:null,u:null,$:[]}:null}}function St(e){var t=de,n=t.e;if(n!==null){t.e=null;for(var r of n)wa(r)}return t.i=!0,de=t.p,ei(e)}function ei(e={}){return Vi(e,Xi,{value:!0}),e}function Xn(){return!kn||de!==null&&de.l===null}let En=[];function fs(){var e=En;En=[],Yr(e)}function Et(e){if(En.length===0){var t=En;queueMicrotask(()=>{t===En&&fs()})}En.push(e)}const ds=-7169;function pe(e,t){e.f=e.f&ds|t}function ti(e){(e.f&vt)!==0||e.deps===null?pe(e,xe):pe(e,rt)}function Ji(e,t,n){(e.f&ye)!==0?t.add(e):(e.f&rt)!==0&&n.add(e),pe(e,xe)}function vs(e,t){if(t){const n=document.body;e.autofocus=!0,Et(()=>{document.activeElement===n&&e.focus()})}}function Gn(e){var t=F,n=H;it(null),at(null);try{return e()}finally{it(t),at(n)}}function ea(e,t,n,r){const i=Xn()?$n:ni;var o=e.filter(h=>!h.settled),a=t.map(i);if(n.length===0&&o.length===0){r(a);return}var s=H,l=ps(),c=o.length===1?o[0].promise:o.length>1?Promise.all(o.map(h=>h.promise)):null;function f(h){if((s.f&Pe)===0){l();try{r([...a,...h])}catch(g){At(g,s)}Sr()}}var p=ta();if(n.length===0){c.then(()=>f([])).finally(p);return}function b(){Promise.all(n.map(h=>hs(h))).then(f).catch(h=>At(h,s)).finally(p)}c?c.then(()=>{l(),b(),Sr()}):b()}function ps(){var e=H,t=F,n=de,r=L;return function(o=!0){at(e),it(t),Sn(n),o&&(e.f&Pe)===0&&(r==null||r.activate(),r==null||r.apply())}}function Sr(e=!0){at(null),it(null),Sn(null),e&&(L==null||L.deactivate())}function ta(){var e=H,t=e.b,n=L,r=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,n),n.increment(r,e),()=>{t==null||t.update_pending_count(-1,n),n.decrement(r,e)}}function $n(e){var t=Me|ye;return H!==null&&(H.f|=bn),{ctx:de,deps:null,effects:null,equals:Zi,f:t,fn:e,reactions:null,rv:0,v:we,wv:0,parent:H,ac:null}}const Yn=Symbol("obsolete");function hs(e,t,n){let r=H;r===null&&Jo();var i=void 0,o=Ut(we),a=!F,s=new Set;return Ms(()=>{var h,g;var l=H,c=Ui();i=c.promise;try{Promise.resolve(e()).then(c.resolve,S=>{S!==jn&&c.reject(S)}).finally(Sr)}catch(S){c.reject(S),Sr()}var f=L;if(a){if((l.f&wn)!==0)var p=ta();if((h=r.b)!=null&&h.is_rendered())(g=f.async_deriveds.get(l))==null||g.reject(Yn);else for(const S of s.values())S.reject(Yn);s.add(c),f.async_deriveds.set(l,c)}const b=(S,d=void 0)=>{p==null||p(),s.delete(c),d!==Yn&&(f.activate(),d?(o.f|=Ht,Mn(o,d)):((o.f&Ht)!==0&&(o.f^=Ht),Mn(o,S)),f.deactivate())};c.promise.then(b,S=>b(null,S||"unknown"))}),Ar(()=>{for(const l of s)l.reject(Yn)}),new Promise(l=>{function c(f){function p(){f===i?l(o):c(i)}f.then(p,p)}c(i)})}function Be(e){const t=$n(e);return Ma(t),t}function ni(e){const t=$n(e);return t.equals=Qi,t}function _s(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)$e(t[n])}}function ri(e){var t,n=H,r=e.parent;if(!It&&r!==null&&e.v!==we&&(r.f&(Pe|Oe))!==0)return Yo(),e.v;at(r);try{_s(e),t=Pa(e)}finally{at(n)}return t}function na(e){var t=ri(e);if(!e.equals(t)&&(e.wv=Ca(),(!(L!=null&&L.is_fork)||e.deps===null)&&(L!==null?(L.capture(e,t,!0),qn==null||qn.capture(e,t,!0)):e.v=t,e.deps===null))){pe(e,xe);return}It||(Ee!==null?(fi()||L!=null&&L.is_fork)&&Ee.set(e,t):ti(e))}function gs(e){var t;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),n.ac!==null&&Gn(()=>{n.ac.abort(jn),n.ac=null}),n.fn!==null&&(n.teardown=Oo),tr(n,0),vi(n))}function ra(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&Nn(t)}let ii=null,An=null,L=null,qn=null,Ee=null,ai=null,oi=!1,Kn=null,Er=null;var ia=0,Zc=new Set;let ms=1;const Dr=class Dr{constructor(){V(this,J);tt(this,"id",ms++);V(this,Cn,!1);tt(this,"linked",!0);V(this,Gt,null);V(this,un,null);tt(this,"async_deriveds",new Map);tt(this,"current",new Map);tt(this,"previous",new Map);V(this,On,new Set);V(this,Pn,new Set);V(this,Rn,0);V(this,zt,new Map);V(this,In,null);V(this,Ke,[]);V(this,lr,[]);V(this,Dt,new Set);V(this,mt,new Set);V(this,Nt,new Map);V(this,Ln,new Set);tt(this,"is_fork",!1);V(this,fn,!1);An===null?ii=An=this:(z(An,un,this),z(this,Gt,An)),An=this}skip_effect(t){u(this,Nt).has(t)||u(this,Nt).set(t,{d:[],m:[]}),u(this,Ln).delete(t)}unskip_effect(t,n=r=>this.schedule(r)){var r=u(this,Nt).get(t);if(r){u(this,Nt).delete(t);for(var i of r.d)pe(i,ye),n(i);for(i of r.m)pe(i,rt),n(i)}u(this,Ln).add(t)}capture(t,n,r=!1){t.v!==we&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&Ht)===0&&(this.current.set(t,[n,r]),Ee==null||Ee.set(t,n)),this.is_fork||(t.v=n)}activate(){L=this}deactivate(){L=null,Ee=null}flush(){try{oi=!0,L=this,U(this,J,hr).call(this)}finally{ia=0,ai=null,Kn=null,Er=null,oi=!1,L=null,Ee=null,$t.clear()}}discard(){var t;for(const n of u(this,Pn))n(this);u(this,Pn).clear();for(const n of this.async_deriveds.values())n.reject(Yn);U(this,J,_r).call(this),(t=u(this,In))==null||t.resolve()}register_created_effect(t){u(this,lr).push(t)}increment(t,n){if(z(this,Rn,u(this,Rn)+1),t){let r=u(this,zt).get(n)??0;u(this,zt).set(n,r+1)}}decrement(t,n){if(z(this,Rn,u(this,Rn)-1),t){let r=u(this,zt).get(n)??0;r===1?u(this,zt).delete(n):u(this,zt).set(n,r-1)}u(this,fn)||(z(this,fn,!0),Et(()=>{z(this,fn,!1),this.linked&&this.flush()}))}transfer_effects(t,n){for(const r of t)u(this,Dt).add(r);for(const r of n)u(this,mt).add(r);t.clear(),n.clear()}oncommit(t){u(this,On).add(t)}ondiscard(t){u(this,Pn).add(t)}settled(){return(u(this,In)??z(this,In,Ui())).promise}static ensure(){if(L===null){const t=L=new Dr;oi||Et(()=>{u(t,Cn)||t.flush()})}return L}apply(){{Ee=null;return}}schedule(t){var n;if(ai=t,(n=t.b)!=null&&n.is_pending&&(t.f&(yn|Un|qr))!==0&&(t.f&wn)===0){t.b.defer_effect(t);return}u(this,Ke).push(t)}};Cn=new WeakMap,Gt=new WeakMap,un=new WeakMap,On=new WeakMap,Pn=new WeakMap,Rn=new WeakMap,zt=new WeakMap,In=new WeakMap,Ke=new WeakMap,lr=new WeakMap,Dt=new WeakMap,mt=new WeakMap,Nt=new WeakMap,Ln=new WeakMap,fn=new WeakMap,J=new WeakSet,Pi=function(){if(this.is_fork)return!0;for(const r of u(this,zt).keys()){for(var t=r,n=!1;t.parent!==null;){if(u(this,Nt).has(t)){n=!0;break}t=t.parent}if(!n)return!0}return!1},Ri=function(){var t=[];for(const o of u(this,Ke))if(!((o.f&Pe)!==0||(o.f&(ye|rt))===0)){for(var n=o,r=!1;n.parent!==null;){n=n.parent;var i=n.f;if((i&(Pt|nt))!==0){if((i&xe)===0){r=!0;break}n.f^=xe}}r||t.push(n)}return z(this,Ke,[]),t},hr=function(){var s,l,c,f;z(this,Cn,!0);for(const p of u(this,Dt))u(this,mt).delete(p),pe(p,ye),this.schedule(p);for(const p of u(this,mt))pe(p,rt),this.schedule(p);this.apply();for(var t=Kn=[],n=[],r=Er=[];u(this,Ke).length>0;){ia++>1e3&&(U(this,J,_r).call(this),ys());for(const p of U(this,J,Ri).call(this))try{U(this,J,Ii).call(this,p,t,n)}catch(b){throw la(p),U(this,J,Pi).call(this)||this.discard(),b}}if(L=null,r.length>0){var i=Dr.ensure();for(const p of r)i.schedule(p)}if(Kn=null,Er=null,U(this,J,Pi).call(this)){U(this,J,Fn).call(this,n),U(this,J,Fn).call(this,t);for(const[p,b]of u(this,Nt))sa(p,b);r.length>0&&U(s=L,J,hr).call(s);return}const o=U(this,J,Mo).call(this);if(o){U(this,J,Fn).call(this,n),U(this,J,Fn).call(this,t),U(l=o,J,No).call(l,this);return}u(this,Dt).clear(),u(this,mt).clear();for(const p of u(this,On))p(this);u(this,On).clear(),qn=this,aa(n),aa(t),qn=null,(c=u(this,In))==null||c.resolve();var a=L;if(u(this,Rn)===0&&(u(this,Ke).length===0||a!==null)&&U(this,J,_r).call(this),u(this,Ke).length>0)if(a!==null){for(const p of u(this,Ke))u(a,Ke).push(p);z(this,Ke,[])}else a=this;a!==null&&($t.clear(),U(f=a,J,hr).call(f))},Ii=function(t,n,r){t.f^=xe;for(var i=t.first;i!==null;){var o=i.f,a=(o&(nt|Pt))!==0,s=a&&(o&xe)!==0,l=s||(o&Oe)!==0||u(this,Nt).has(i);if(!l&&i.fn!==null){a?i.f^=xe:(o&yn)!==0?n.push(i):er(i)&&((o&dt)!==0&&u(this,mt).add(i),Nn(i));var c=i.first;if(c!==null){i=c;continue}}for(;i!==null;){var f=i.next;if(f!==null){i=f;break}i=i.parent}}},Mo=function(){for(var t=u(this,Gt);t!==null;){if(!t.is_fork){for(const[n,[,r]]of this.current)if(t.current.has(n)&&!r)return t}t=u(t,Gt)}return null},No=function(t){var r;for(const[i,o]of t.current)!this.previous.has(i)&&t.previous.has(i)&&this.previous.set(i,t.previous.get(i)),this.current.set(i,o);for(const[i,o]of t.async_deriveds){const a=this.async_deriveds.get(i);a&&o.promise.then(a.resolve).catch(a.reject)}t.async_deriveds.clear(),this.transfer_effects(u(t,Dt),u(t,mt));const n=i=>{var o=i.reactions;if(o!==null&&!((i.f&Me)!==0&&(i.f&(ye|rt))===0))for(const l of o){var a=l.f;if((a&Me)!==0)n(l);else{var s=l;a&(xn|dt)&&!this.async_deriveds.has(s)&&(u(this,mt).delete(s),pe(s,ye),this.schedule(s))}}};for(const i of this.current.keys())n(i);this.oncommit(()=>t.discard()),U(r=t,J,_r).call(r),L=this,U(this,J,hr).call(this)},Fn=function(t){for(var n=0;n<t.length;n+=1)Ji(t[n],u(this,Dt),u(this,mt))},Xc=function(){var p,b;for(let h=ii;h!==null;h=u(h,un)){var t=h.id<this.id,n=[];for(const[g,[S,d]]of this.current){if(h.current.has(g)){var r=h.current.get(g)[0];if(t&&S!==r)h.current.set(g,[S,d]);else continue}n.push(g)}if(t)for(const[g,S]of this.async_deriveds){const d=h.async_deriveds.get(g);d&&S.promise.then(d.resolve).catch(d.reject)}var i=[...h.current.keys()].filter(g=>!h.current.get(g)[1]);if(!(!u(h,Cn)||i.length===0)){var o=i.filter(g=>!this.current.has(g));if(o.length===0)t&&h.discard();else if(n.length>0){if(t)for(const g of u(this,Ln))h.unskip_effect(g,S=>{var d;(S.f&(dt|xn))!==0?h.schedule(S):U(d=h,J,Fn).call(d,[S])});h.activate();var a=new Set,s=new Map;for(var l of n)oa(l,o,a,s);s=new Map;var c=[...h.current].filter(([g,S])=>{const d=this.current.get(g);return d?d[0]!==S[0]||d[1]!==S[1]:!0}).map(([g])=>g);if(c.length>0)for(const g of u(this,lr))(g.f&(Pe|Oe|wr))===0&&si(g,c,s)&&((g.f&(xn|dt))!==0?(pe(g,ye),h.schedule(g)):u(h,Dt).add(g));if(u(h,Ke).length>0&&!u(h,fn)){h.apply();for(var f of U(p=h,J,Ri).call(p))U(b=h,J,Ii).call(b,f,[],[])}h.deactivate()}}}},_r=function(){if(this.linked){var t=u(this,Gt),n=u(this,un);t===null?ii=n:z(t,un,n),n===null?An=t:z(n,Gt,t),this.linked=!1}};let Qt=Dr;function ys(){try{is()}catch(e){At(e,ai)}}let pt=null;function aa(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(Pe|Oe))===0&&er(r)&&(pt=new Set,Nn(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Sa(r),(pt==null?void 0:pt.size)>0)){$t.clear();for(const i of pt){if((i.f&(Pe|Oe))!==0)continue;const o=[i];let a=i.parent;for(;a!==null;)pt.has(a)&&(pt.delete(a),o.push(a)),a=a.parent;for(let s=o.length-1;s>=0;s--){const l=o[s];(l.f&(Pe|Oe))===0&&Nn(l)}}pt.clear()}}pt=null}}function oa(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const i of e.reactions){const o=i.f;(o&Me)!==0?oa(i,t,n,r):(o&(xn|dt))!==0&&(o&ye)===0&&si(i,t,r)&&(pe(i,ye),li(i))}}function si(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const i of e.deps){if(Zt.call(t,i))return!0;if((i.f&Me)!==0&&si(i,t,n))return n.set(i,!0),!0}return n.set(e,!1),!1}function li(e){L.schedule(e)}function sa(e,t){if(!((e.f&nt)!==0&&(e.f&xe)!==0)){(e.f&ye)!==0?t.d.push(e):(e.f&rt)!==0&&t.m.push(e),pe(e,xe);for(var n=e.first;n!==null;)sa(n,t),n=n.next}}function la(e){pe(e,xe);for(var t=e.first;t!==null;)la(t),t=t.next}let $r=new Set;const $t=new Map;let ca=!1;function Ut(e,t){var n={f:0,v:e,reactions:null,equals:Zi,rv:0,wv:0};return n}function X(e,t){const n=Ut(e);return Ma(n),n}function ws(e,t=!1,n=!0){var i;const r=Ut(e);return t||(r.equals=Qi),kn&&n&&de!==null&&de.l!==null&&((i=de.l).s??(i.s=[])).push(r),r}function T(e,t,n=!1){F!==null&&(!_t||(F.f&wr)!==0)&&Xn()&&(F.f&(Me|dt|xn|wr))!==0&&(Mt===null||!Mt.has(e))&&ls();let r=n?Re(t):t;return Mn(e,r,Er)}var Jt=null,ci=0;function Mn(e,t,n=null){if(!e.equals(t)){It?$t.set(e,t):$t.has(e)||$t.set(e,e.v);var r=Qt.ensure();if(r.capture(e,t),(e.f&Me)!==0){const i=e;(e.f&ye)!==0&&ri(i),Ee===null&&ti(i)}e.wv=Ca(),Jt=null,ci=0,fa(e,ye,n),Jt=null,Xn()&&H!==null&&(H.f&xe)!==0&&(H.f&(nt|Pt))===0&&(ot===null?Cs([e]):ot.push(e)),!r.is_fork&&$r.size>0&&!ca&&bs()}return t}function bs(){ca=!1;for(const e of $r){(e.f&xe)!==0&&pe(e,rt);let t;try{t=er(e)}catch{t=!0}t&&Nn(e)}$r.clear()}function ua(e,t=1){var n=v(e),r=t===1?n++:n--;return T(e,n),r}function Zn(e){T(e,e.v+1)}function fa(e,t,n){var r=e.reactions;if(r!==null){var i=Xn(),o=r.length;if(ci+=o,ci>1e5&&Jt===null&&(Jt=new Set),Jt!==null){if(Jt.has(e))return;Jt.add(e)}for(var a=0;a<o;a++){var s=r[a],l=s.f;if(!(!i&&s===H)){var c=(l&ye)===0;if(c&&pe(s,t),(l&wr)!==0)$r.add(s);else if((l&Me)!==0){var f=s;Ee==null||Ee.delete(f),fa(f,rt,n)}else if(c){var p=s;(l&dt)!==0&&pt!==null&&pt.add(p),n!==null?n.push(p):li(p)}}}}}function Re(e){if(typeof e!="object"||e===null||xt in e||Xi in e)return e;const t=Gr(e);if(t!==To&&t!==Co)return e;var n=new Map,r=ae(e),i=X(0),o=an,a=s=>{if(an===o)return s();var l=F,c=an;it(null),Ta(o);var f=s();return it(l),Ta(c),f};return r&&n.set("length",X(e.length)),new Proxy(e,{defineProperty(s,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&os();var f=n.get(l);return f===void 0?a(()=>{var p=X(c.value);return n.set(l,p),p}):T(f,c.value,!0),!0},deleteProperty(s,l){var c=n.get(l);if(c===void 0){if(l in s){const f=a(()=>X(we));n.set(l,f),Zn(i)}}else T(c,we),Zn(i);return!0},get(s,l,c){var h;if(l===xt)return e;var f=n.get(l),p=l in s;if(f===void 0&&(!p||(h=Vt(s,l))!=null&&h.writable)&&(f=a(()=>{var g=Re(p?s[l]:we),S=X(g);return S}),n.set(l,f)),f!==void 0){var b=v(f);return b===we?void 0:b}return Reflect.get(s,l,c)},getOwnPropertyDescriptor(s,l){var b;(b=this.has)==null||b.call(this,s,l);var c=Reflect.getOwnPropertyDescriptor(s,l),f=n.get(l);if(f!==void 0){var p=v(f);if(p===we)return;if(c&&"value"in c)c.value=p;else return{enumerable:!0,configurable:!0,value:p,writable:!0}}return c},has(s,l){var b;if(l===xt)return!0;var c=n.get(l),f=c!==void 0&&c.v!==we||Reflect.has(s,l);if(c!==void 0||H!==null&&(!f||(b=Vt(s,l))!=null&&b.writable)){c===void 0&&(c=a(()=>{var h=f?Re(s[l]):we,g=X(h);return g}),n.set(l,c));var p=v(c);if(p===we)return!1}return f},set(s,l,c,f){var w;var p=n.get(l),b=l in s;if(r&&l==="length")for(var h=c;h<p.v;h+=1){var g=n.get(h+"");g!==void 0?T(g,we):h in s&&(g=a(()=>X(we)),n.set(h+"",g))}if(p===void 0)(!b||(w=Vt(s,l))!=null&&w.writable)&&(p=a(()=>X(void 0)),T(p,Re(c)),n.set(l,p));else{b=p.v!==we;var S=a(()=>Re(c));T(p,S)}var d=Reflect.getOwnPropertyDescriptor(s,l);if(d!=null&&d.set&&d.set.call(f,c),!b){if(r&&typeof l=="string"){var _=n.get("length"),y=Number(l);Number.isInteger(y)&&y>=_.v&&T(_,y+1)}Zn(i)}return!0},ownKeys(s){v(i);var l=Reflect.ownKeys(s).filter(p=>{var b=n.get(p);return b===void 0||b.v!==we});for(var[c,f]of n)f.v!==we&&!(c in s)&&l.push(c);return l},setPrototypeOf(){ss()}})}function da(e){try{if(e!==null&&typeof e=="object"&&xt in e)return e[xt]}catch{}return e}function va(e,t){return Object.is(da(e),da(t))}var pa,ha,_a,ga;function xs(){if(pa===void 0){pa=window,ha=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;_a=Vt(t,"firstChild").get,ga=Vt(t,"nextSibling").get,Hi(e)&&(e[Qr]=void 0,e[xr]=null,e[Jr]=void 0,e.__e=void 0),Hi(n)&&(n[Wn]=void 0)}}function Rt(e=""){return document.createTextNode(e)}function en(e){return _a.call(e)}function Qn(e){return ga.call(e)}function B(e,t){return en(e)}function G(e,t=!1){{var n=en(e);return n instanceof Comment&&n.data===""?Qn(n):n}}function q(e,t=!1){return en(e)}function R(e,t=1,n=!1){let r=e;for(;t--;)r=Qn(r);return r}function ks(e){e.textContent=""}function ma(){return!1}function ui(e,t,n){return t==null||t===Ki?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function Ss(e){var t=H;if(t===null)return F.f|=Ht,e;if((t.f&wn)===0&&(t.f&yn)===0)throw e;At(e,t)}function At(e,t){if(!(t!==null&&(t.f&Pe)!==0)){for(;t!==null;){if((t.f&Kr)!==0&&(t.f&(Pe|yr))===0){if((t.f&wn)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}}function ya(e){H===null&&(F===null&&rs(),ns()),It&&ts()}function Es(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function ht(e,t){var n=H;n!==null&&(n.f&Oe)!==0&&(e|=Oe);var r={ctx:de,deps:null,nodes:null,f:e|ye|vt,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};L==null||L.register_created_effect(r);var i=r;if((e&yn)!==0)Kn!==null?Kn.push(r):Qt.ensure().schedule(r);else if(t!==null){try{Nn(r)}catch(a){throw $e(r),a}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&bn)===0&&(i=i.first,(e&dt)!==0&&(e&Ft)!==0&&i!==null&&(i.f|=Ft))}if(i!==null&&(i.parent=n,n!==null&&Es(i,n),F!==null&&(F.f&Me)!==0&&(e&Pt)===0)){var o=F;(o.effects??(o.effects=[])).push(i)}return r}function fi(){return F!==null&&!_t}function Ar(e){const t=ht(Un,null);return pe(t,xe),t.teardown=e,t}function tn(e){ya();var t=H.f,n=!F&&(t&nt)!==0&&de!==null&&!de.i;if(n){var r=de;(r.e??(r.e=[])).push(e)}else return wa(e)}function wa(e){return ht(yn|ji,e)}function $s(e){return ya(),ht(Un|ji,e)}function As(e){Qt.ensure();const t=ht(Pt|bn,e);return(n={})=>new Promise(r=>{n.outro?nn(t,()=>{$e(t),r(void 0)}):($e(t),r(void 0))})}function di(e){return ht(yn,e)}function Ms(e){return ht(xn|bn,e)}function ba(e,t=0){return ht(Un|t,e)}function he(e,t=[],n=[],r=[]){ea(r,t,n,i=>{ht(Un,()=>{e(...i.map(v))})})}function Jn(e,t=0){var n=ht(dt|t,e);return n}function xa(e,t=0){var n=ht(qr|t,e);return n}function Ve(e){return ht(nt|bn,e)}function ka(e){var t=e.teardown;if(t!==null){const n=It,r=F;Aa(!0),it(null);try{t.call(null)}catch(i){At(i,e.parent)}finally{Aa(n),it(r)}}}function vi(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const i=n.ac;i!==null&&Gn(()=>{i.abort(jn)});var r=n.next;(n.f&Pt)!==0?n.parent=null:$e(n,t),n=r}}function Ns(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&nt)===0&&$e(t),t=n}}function $e(e,t=!0){var n=!1;(t||(e.f&Ro)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Ts(e.nodes.start,e.nodes.end),n=!0),e.f|=yr,vi(e,t&&!n),tr(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(const o of r)o.stop();ka(e),e.f^=yr,e.f|=Pe;var i=e.parent;i!==null&&i.first!==null&&Sa(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Ts(e,t){for(;e!==null;){var n=e===t?null:Qn(e);e.remove(),e=n}}function Sa(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function nn(e,t,n=!0){var r=[];e.f|=Zr,Ea(e,r,!0);var i=()=>{n&&$e(e),t&&t()},o=r.length;if(o>0){var a=()=>--o||i();for(var s of r)s.out(a)}else i()}function Ea(e,t,n){if((e.f&Oe)===0){e.f^=Oe;var r=e.nodes&&e.nodes.t;if(r!==null)for(const s of r)(s.is_global||n)&&t.push(s);for(var i=e.first;i!==null;){var o=i.next;if((i.f&Pt)===0){var a=(i.f&Ft)!==0||(i.f&nt)!==0&&(e.f&dt)!==0;Ea(i,t,a?n:!1)}i=o}}}function Mr(e){e.f&=~Zr,$a(e,!0)}function $a(e,t){if((e.f&Zr)===0&&(e.f&Oe)!==0){e.f^=Oe,(e.f&xe)===0&&(pe(e,ye),Qt.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,i=(n.f&Ft)!==0||(n.f&nt)!==0;$a(n,i?t:!1),n=r}var o=e.nodes&&e.nodes.t;if(o!==null)for(const a of o)(a.is_global||t)&&a.in()}}function pi(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var i=n===r?null:Qn(n);t.append(n),n=i}}let Nr=!1,It=!1;function Aa(e){It=e}let F=null,_t=!1;function it(e){F=e}let H=null;function at(e){H=e}let Mt=null;function Ma(e){F!==null&&((F.f&br)!==0||(F.f&Me)!==0)&&(Mt??(Mt=new Set)).add(e)}let Fe=null,Xe=0,ot=null;function Cs(e){ot=e}let Na=1,rn=0,an=rn;function Ta(e){an=e}function Ca(){return++Na}function er(e){var t=e.f;if((t&ye)!==0)return!0;if((t&rt)!==0){for(var n=e.deps,r=n.length,i=0;i<r;i++){var o=n[i];if(er(o)&&na(o),o.wv>e.wv)return!0}(t&vt)!==0&&Ee===null&&pe(e,xe)}return!1}function Oa(e,t,n=!0){var r=e.reactions;if(r!==null&&!(Mt!==null&&Mt.has(e)))for(var i=0;i<r.length;i++){var o=r[i];(o.f&Me)!==0?Oa(o,t,!1):t===o&&(n?pe(o,ye):(o.f&xe)!==0&&pe(o,rt),li(o))}}function Pa(e){var t=Fe,n=Xe,r=ot,i=F,o=Mt,a=de,s=_t,l=an,c=e.f;Fe=null,Xe=0,ot=null,F=(c&(nt|Pt))===0?e:null,Mt=null,Sn(e.ctx),_t=!1,an=++rn,e.ac!==null&&(Gn(()=>{e.ac.abort(jn)}),e.ac=null);try{e.f|=br;var f=e.fn,p=f();e.f|=wn;var b=Ra(e);if(Xn()&&ot!==null&&!_t&&b!==null&&(e.f&(Me|rt|ye))===0)for(var h=0;h<ot.length;h++)Oa(ot[h],e);if(i!==null&&i!==e){if(rn++,i.deps!==null)for(let g=0;g<n;g+=1)i.deps[g].rv=rn;if(t!==null)for(const g of t)g.rv=rn;ot!==null&&(r===null?r=ot:r.push(...ot))}return(e.f&Ht)!==0&&(e.f^=Ht),p}catch(g){return Ra(e),Ss(g)}finally{e.f^=br,Fe=t,Xe=n,ot=r,F=i,Mt=o,Sn(a),_t=s,an=l}}function Ra(e){var i;var t=e.deps,n=L==null?void 0:L.is_fork;if(Fe!==null){var r;if(n||tr(e,Xe),t!==null&&Xe>0)for(t.length=Xe+Fe.length,r=0;r<Fe.length;r++)t[Xe+r]=Fe[r];else e.deps=t=Fe;if(fi()&&(e.f&vt)!==0)for(r=Xe;r<t.length;r++)((i=t[r]).reactions??(i.reactions=[])).push(e)}else!n&&t!==null&&Xe<t.length&&(tr(e,Xe),t.length=Xe);return t}function Os(e,t){let n=t.reactions;if(n!==null){var r=be.call(n,e);if(r!==-1){var i=n.length-1;i===0?n=t.reactions=null:(n[r]=n[i],n.pop())}}if(n===null&&(t.f&Me)!==0&&(Fe===null||!Zt.call(Fe,t))){var o=t;(o.f&vt)!==0&&(o.f^=vt),o.v!==we&&ti(o),o.ac!==null&&Gn(()=>{o.ac.abort(jn),o.ac=null,pe(o,ye)}),gs(o),tr(o,0)}}function tr(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Os(e,n[r])}function Nn(e){var t=e.f;if((t&Pe)===0){pe(e,xe);var n=H,r=Nr;H=e,Nr=(t&(nt|Pt))===0;try{(t&(dt|qr))!==0?Ns(e):vi(e),ka(e);var i=Pa(e);e.teardown=typeof i=="function"?i:null,e.wv=Na;var o}finally{Nr=r,H=n}}}function v(e){var t=e.f,n=(t&Me)!==0;if(F!==null&&!_t){var r=H!==null&&(H.f&Pe)!==0;if(!r&&(Mt===null||!Mt.has(e))){var i=F.deps;if((F.f&br)!==0)e.rv<rn&&(e.rv=rn,Fe===null&&i!==null&&i[Xe]===e?Xe++:Fe===null?Fe=[e]:Fe.push(e));else{F.deps??(F.deps=[]),Zt.call(F.deps,e)||F.deps.push(e);var o=e.reactions;o===null?e.reactions=[F]:Zt.call(o,F)||o.push(F)}}}if(It&&$t.has(e))return $t.get(e);if(n){var a=e;if(It){var s=a.v;return((a.f&xe)===0&&a.reactions!==null||La(a))&&(s=ri(a)),$t.set(a,s),s}var l=(a.f&vt)===0&&!_t&&F!==null&&(Nr||(F.f&vt)!==0),c=(a.f&wn)===0;er(a)&&(l&&(a.f|=vt),na(a)),l&&!c&&(ra(a),Ia(a))}if(Ee!=null&&Ee.has(e))return Ee.get(e);if((e.f&Ht)!==0)throw e.v;return e.v}function Ia(e){if(e.f|=vt,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&Me)!==0&&(t.f&vt)===0&&(ra(t),Ia(t))}function La(e){if(e.v===we)return!0;if(e.deps===null)return!1;for(const t of e.deps)if($t.has(t)||(t.f&Me)!==0&&La(t))return!0;return!1}function Wt(e){var t=_t;try{return _t=!0,e()}finally{_t=t}}function on(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(xt in e)hi(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&xt in n&&hi(n)}}}function hi(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{hi(e[r],t)}catch{}const n=Gr(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=Fi(n);for(let i in r){const o=r[i].get;if(o)try{o.call(e)}catch{}}}}}function Ps(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Rs=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Is(e){return Rs.includes(e)}const Ls={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function zs(e){return e=e.toLowerCase(),Ls[e]??e}const Ds=["touchstart","touchmove"];function Bs(e){return Ds.includes(e)}const sn=Symbol("events"),za=new Set,_i=new Set;function Da(e,t,n,r={}){function i(o){if(r.capture||yi.call(t,o),!o.cancelBubble)return Gn(()=>n==null?void 0:n.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?(i.__removed=!1,Et(()=>{i.__removed||t.addEventListener(e,i,r)})):t.addEventListener(e,i,r),i}function Tr(e,t,n,r,i){var o={capture:r,passive:i},a=Da(e,t,n,o);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Ar(()=>{a.__removed=!0,t.removeEventListener(e,a,o)})}function K(e,t,n){(t[sn]??(t[sn]={}))[e]=n}function ln(e){for(var t=0;t<e.length;t++)za.add(e[t]);for(var n of _i)n(e)}let gi=null,mi=!1;function yi(e){var S,d;var t=this,n=t.ownerDocument,r=e.type,i=((S=e.composedPath)==null?void 0:S.call(e))||[],o=i[0]||e.target;gi=e,mi||(mi=!0,setTimeout(()=>{mi=!1,gi=null}));var a=0,s=gi===e&&e[sn];if(s){var l=i.indexOf(s);if(l!==-1&&(t===document||t===window)){e[sn]=t;return}var c=i.indexOf(t);if(c===-1)return;l<=c&&(a=l)}if(o=i[a]||e.target,o!==t){Vi(e,"currentTarget",{configurable:!0,get(){return o||n}});var f=F,p=H;it(null),at(null);try{for(var b,h=[];o!==null&&o!==t;){try{var g=(d=o[sn])==null?void 0:d[r];g!=null&&(!o.disabled||e.target===o)&&g.call(o,e)}catch(_){b?h.push(_):b=_}if(e.cancelBubble)break;a++,o=a<i.length?i[a]:null}if(b){for(let _ of h)queueMicrotask(()=>{throw _});throw b}}finally{e[sn]=t,delete e.currentTarget,it(f),at(p)}}}const wi=((fo=globalThis==null?void 0:globalThis.window)==null?void 0:fo.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Vs(e){return(wi==null?void 0:wi.createHTML(e))??e}function Ba(e){var t=ui("template");return t.innerHTML=Vs(e.replaceAll("<!>","<!---->")),t.content}function nr(e,t){var n=H;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function _e(e,t){var n=(t&Wo)!==0,r=(t&jo)!==0,i,o=!e.startsWith("<!>");return()=>{i===void 0&&(i=Ba(o?e:"<!>"+e),n||(i=en(i)));var a=r||ha?document.importNode(i,!0):i.cloneNode(!0);if(n){var s=en(a),l=a.lastChild;nr(s,l)}else nr(a,a);return a}}function Fs(e,t,n="svg"){var r=!e.startsWith("<!>"),i=`<${n}>${r?e:"<!>"+e}</${n}>`,o;return()=>{if(!o){var a=Ba(i),s=en(a);o=en(s)}var l=o.cloneNode(!0);return nr(l,l),l}}function Hs(e,t){return Fs(e,t,"svg")}function Z(){var e=document.createDocumentFragment(),t=document.createComment(""),n=Rt();return e.append(t,n),nr(t,n),e}function A(e,t){e!==null&&e.before(t)}function Us(e){let t=0,n=Ut(0),r;return()=>{fi()&&(v(n),ba(()=>(t===0&&(r=Wt(()=>e(()=>Zn(n)))),t+=1,()=>{Et(()=>{t-=1,t===0&&(r==null||r(),r=void 0,Zn(n))})})))}}var Ws=Ft|bn;function js(e,t,n,r){new Xs(e,t,n,r)}class Xs{constructor(t,n,r,i){V(this,le);tt(this,"parent");tt(this,"is_pending",!1);tt(this,"transform_error");V(this,lt);V(this,Ni,null);V(this,ct);V(this,dn);V(this,Ie);V(this,Ze,null);V(this,Le,null);V(this,Qe,null);V(this,Tt,null);V(this,vn,0);V(this,Yt,0);V(this,zn,!1);V(this,cr,new Set);V(this,ur,new Set);V(this,Bt,null);V(this,Br,Us(()=>(z(this,Bt,Ut(u(this,vn))),()=>{z(this,Bt,null)})));var o;z(this,lt,t),z(this,ct,n),z(this,dn,a=>{var s=H;s.b=this,s.f|=Kr,r(a)}),this.parent=H.b,this.transform_error=i??((o=this.parent)==null?void 0:o.transform_error)??(a=>a),z(this,Ie,Jn(()=>{U(this,le,zi).call(this)},Ws))}defer_effect(t){Ji(t,u(this,cr),u(this,ur))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!u(this,ct).pending}update_pending_count(t,n){U(this,le,Di).call(this,t,n),z(this,vn,u(this,vn)+t),!(!u(this,Bt)||u(this,zn))&&(z(this,zn,!0),Et(()=>{z(this,zn,!1),u(this,Bt)&&Mn(u(this,Bt),u(this,vn))}))}get_effect_pending(){return u(this,Br).call(this),v(u(this,Bt))}error(t){if(!u(this,ct).onerror&&!u(this,ct).failed)throw t;L!=null&&L.is_fork?(u(this,Ze)&&L.skip_effect(u(this,Ze)),u(this,Le)&&L.skip_effect(u(this,Le)),u(this,Qe)&&L.skip_effect(u(this,Qe)),L.oncommit(()=>{U(this,le,Bi).call(this,t)})):U(this,le,Bi).call(this,t)}}lt=new WeakMap,Ni=new WeakMap,ct=new WeakMap,dn=new WeakMap,Ie=new WeakMap,Ze=new WeakMap,Le=new WeakMap,Qe=new WeakMap,Tt=new WeakMap,vn=new WeakMap,Yt=new WeakMap,zn=new WeakMap,cr=new WeakMap,ur=new WeakMap,Bt=new WeakMap,Br=new WeakMap,le=new WeakSet,Gc=function(){try{z(this,Ze,Ve(()=>u(this,dn).call(this,u(this,lt))))}catch(t){this.error(t)}},Yc=function(t){const n=u(this,ct).failed,{reset:r,invoke_onerror:i}=U(this,le,Li).call(this,t);Et(i),n&&z(this,Qe,Ve(()=>{n(u(this,lt),()=>t,()=>r)}))},Li=function(t){var n=!1,r=!1;const i=()=>{if(n){Ko();return}n=!0,r&&cs(),u(this,Qe)!==null&&nn(u(this,Qe),()=>{z(this,Qe,null)}),U(this,le,Xr).call(this,()=>{U(this,le,zi).call(this)})};return{reset:i,invoke_onerror:()=>{var a,s;try{r=!0,(s=(a=u(this,ct)).onerror)==null||s.call(a,t,i),r=!1}catch(l){At(l,u(this,Ie)&&u(this,Ie).parent)}}}},qc=function(){const t=u(this,ct).pending;t&&(this.is_pending=!0,z(this,Le,Ve(()=>t(u(this,lt)))),Et(()=>{var n=z(this,Tt,document.createDocumentFragment()),r=Rt(),i=!1;if(n.append(r),z(this,Ze,U(this,le,Xr).call(this,()=>{try{return Ve(()=>u(this,dn).call(this,r))}catch(o){try{this.error(o),i=!0}catch(a){At(a,u(this,Ie).parent)}return null}})),u(this,Ze)===null){z(this,Tt,null),i&&U(this,le,gr).call(this,L);return}u(this,Yt)===0&&(u(this,lt).before(n),z(this,Tt,null),nn(u(this,Le),()=>{z(this,Le,null)}),U(this,le,gr).call(this,L))}))},zi=function(){try{if(this.is_pending=this.has_pending_snippet(),z(this,Yt,0),z(this,vn,0),z(this,Ze,Ve(()=>{u(this,dn).call(this,u(this,lt))})),u(this,Yt)>0){var t=z(this,Tt,document.createDocumentFragment());pi(u(this,Ze),t);const n=u(this,ct).pending;z(this,Le,Ve(()=>n(u(this,lt))))}else U(this,le,gr).call(this,L)}catch(n){this.error(n)}},gr=function(t){this.is_pending=!1,t.transfer_effects(u(this,cr),u(this,ur))},Xr=function(t){var n=H,r=F,i=de;at(u(this,Ie)),it(u(this,Ie)),Sn(u(this,Ie).ctx);try{return Qt.ensure(),t()}finally{at(n),it(r),Sn(i)}},Di=function(t,n){var r;if(!this.has_pending_snippet()){this.parent&&U(r=this.parent,le,Di).call(r,t,n);return}z(this,Yt,u(this,Yt)+t),u(this,Yt)===0&&(U(this,le,gr).call(this,n),u(this,Le)&&nn(u(this,Le),()=>{z(this,Le,null)}),u(this,Tt)&&(u(this,lt).before(u(this,Tt)),z(this,Tt,null)))},Bi=function(t){u(this,Ze)&&($e(u(this,Ze)),z(this,Ze,null)),u(this,Le)&&($e(u(this,Le)),z(this,Le,null)),u(this,Qe)&&($e(u(this,Qe)),z(this,Qe,null));let n=u(this,ct).failed;const r=i=>{const{reset:o,invoke_onerror:a}=U(this,le,Li).call(this,i);a(),n&&z(this,Qe,U(this,le,Xr).call(this,()=>{try{return Ve(()=>{var s=H;s.b=this,s.f|=Kr,n(u(this,lt),()=>i,()=>o)})}catch(s){return At(s,u(this,Ie).parent),null}}))};Et(()=>{var i;try{i=this.transform_error(t)}catch(o){At(o,u(this,Ie)&&u(this,Ie).parent);return}i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(r,o=>At(o,u(this,Ie)&&u(this,Ie).parent)):r(i)})};function Y(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e[Wn]??(e[Wn]=e.nodeValue))&&(e[Wn]=n,e.nodeValue=`${n}`)}function Gs(e,t){return Ys(e,t)}const Cr=new Map;function Ys(e,{target:t,anchor:n,props:r={},events:i,context:o,intro:a=!0,transformError:s}){xs();var l=void 0,c=As(()=>{var f=n??t.appendChild(Rt());js(f,{pending:()=>{}},h=>{kt({});var g=de;o&&(g.c=o),i&&(r.$$events=i),l=e(h,r)||ei(),St()},s);var p=new Set,b=h=>{for(var g=0;g<h.length;g++){var S=h[g];if(!p.has(S)){p.add(S);var d=Bs(S);for(const w of[t,document]){var _=Cr.get(w);_===void 0&&(_=new Map,Cr.set(w,_));var y=_.get(S);y===void 0?(w.addEventListener(S,yi,{passive:d}),_.set(S,1)):_.set(S,y+1)}}}};return b(mr(za)),_i.add(b),()=>{var d;for(var h of p)for(const _ of[t,document]){var g=Cr.get(_),S=g.get(h);--S==0?(_.removeEventListener(h,yi),g.delete(h),g.size===0&&Cr.delete(_)):g.set(h,S)}_i.delete(b),f!==n&&((d=f.parentNode)==null||d.removeChild(f))}});return qs.set(l,c),l}let qs=new WeakMap;class bi{constructor(t,n=!0){tt(this,"anchor");V(this,yt,new Map);V(this,Ct,new Map);V(this,Je,new Map);V(this,pn,new Set);V(this,fr,!0);V(this,dr,t=>{if(u(this,yt).has(t)){var n=u(this,yt).get(t),r=u(this,Ct).get(n);if(r)Mr(r),u(this,pn).delete(n);else{var i=u(this,Je).get(n);i&&(Mr(i.effect),u(this,Ct).set(n,i.effect),u(this,Je).delete(n),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),r=i.effect)}for(const[o,a]of u(this,yt)){if(u(this,yt).delete(o),o===t)break;const s=u(this,Je).get(a);s&&($e(s.effect),u(this,Je).delete(a))}for(const[o,a]of u(this,Ct)){if(o===n||u(this,pn).has(o))continue;const s=()=>{if(Array.from(u(this,yt).values()).includes(o)){var c=document.createDocumentFragment();pi(a,c),c.append(Rt()),u(this,Je).set(o,{effect:a,fragment:c})}else $e(a);u(this,pn).delete(o),u(this,Ct).delete(o)};u(this,fr)||!r?(u(this,pn).add(o),nn(a,s,!1)):s()}}});V(this,Vr,t=>{u(this,yt).delete(t);const n=Array.from(u(this,yt).values());for(const[r,i]of u(this,Je))n.includes(r)||($e(i.effect),u(this,Je).delete(r))});this.anchor=t,z(this,fr,n)}ensure(t,n){var r=L,i=ma();if(n&&!u(this,Ct).has(t)&&!u(this,Je).has(t))if(i){var o=document.createDocumentFragment(),a=Rt();o.append(a),u(this,Je).set(t,{effect:Ve(()=>n(a)),fragment:o})}else u(this,Ct).set(t,Ve(()=>n(this.anchor)));if(u(this,yt).set(r,t),i){for(const[s,l]of u(this,Ct))s===t?r.unskip_effect(l):r.skip_effect(l);for(const[s,l]of u(this,Je))s===t?r.unskip_effect(l.effect):r.skip_effect(l.effect);r.oncommit(u(this,dr)),r.ondiscard(u(this,Vr))}else u(this,dr).call(this,r)}}yt=new WeakMap,Ct=new WeakMap,Je=new WeakMap,pn=new WeakMap,fr=new WeakMap,dr=new WeakMap,Vr=new WeakMap;function Ge(e,t,n=!1){var r=new bi(e),i=n?Ft:0;function o(a,s){r.ensure(a,s)}Jn(()=>{var a=!1;t((s,l=0)=>{a=!0,o(l,s)}),a||o(-1,null)},i)}function Va(e,t){return t}function Ks(e,t,n){for(var r=[],i=t.length,o,a=t.length,s=0;s<i;s++){let p=t[s];nn(p,()=>{if(o){if(o.pending.delete(p),o.done.add(p),o.pending.size===0){var b=e.outrogroups;xi(e,mr(o.done)),b.delete(o),b.size===0&&(e.outrogroups=null)}}else a-=1},!1)}if(a===0){var l=r.length===0&&n!==null&&e.pending.size===0;if(l){var c=n,f=c.parentNode;ks(f),f.append(c),e.items.clear()}xi(e,t,!l)}else o={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(o)}function xi(e,t,n=!0){var r;if(e.pending.size>0){r=new Set;for(const a of e.pending.values())for(const s of a)r.add(e.items.get(s).e)}for(var i=0;i<t.length;i++){var o=t[i];if(r!=null&&r.has(o)){o.f|=bt;const a=document.createDocumentFragment();pi(o,a)}else $e(t[i],n)}}var Fa;function jt(e,t,n,r,i,o=null){var a=e,s=new Map,l=(t&Yi)!==0;if(l){var c=e;a=c.appendChild(Rt())}var f=null,p=ni(()=>{var w=n();return ae(w)?w:w==null?[]:mr(w)}),b,h=new Map,g=!0;function S(w){(y.effect.f&Pe)===0&&(y.pending.delete(w),y.fallback=f,Zs(y,b,a,t,r),f!==null&&(b.length===0?(f.f&bt)===0?Mr(f):(f.f^=bt,ir(f,null,a)):nn(f,()=>{f=null})))}function d(w){y.pending.delete(w)}var _=Jn(()=>{b=v(p);for(var w=b.length,E=new Set,k=L,M=ma(),$=0;$<w;$+=1){var C=b[$],O=r(C,$),D=g?null:s.get(O);D?(D.v&&Mn(D.v,C),D.i&&Mn(D.i,$),M&&k.unskip_effect(D.e)):(D=Qs(s,g?a:Fa??(Fa=Rt()),C,O,$,i,t,n),g||(D.e.f|=bt),s.set(O,D)),E.add(O)}if(w===0&&o&&!f&&(g?f=Ve(()=>o(a)):(f=Ve(()=>o(Fa??(Fa=Rt()))),f.f|=bt)),w>E.size&&es(),!g)if(h.set(k,E),M){for(const[re,Ne]of s)E.has(re)||k.skip_effect(Ne.e);k.oncommit(S),k.ondiscard(d)}else S(k);v(p)}),y={effect:_,items:s,pending:h,outrogroups:null,fallback:f};g=!1}function rr(e){for(;e!==null&&(e.f&nt)===0;)e=e.next;return e}function Zs(e,t,n,r,i){var D,re,Ne,We,ke,je,qt,ut,wt;var o=(r&Do)!==0,a=t.length,s=e.items,l=rr(e.effect.first),c,f=null,p,b=[],h=[],g,S,d,_;if(o)for(_=0;_<a;_+=1)g=t[_],S=i(g,_),d=s.get(S).e,(d.f&bt)===0&&((re=(D=d.nodes)==null?void 0:D.a)==null||re.measure(),(p??(p=new Set)).add(d));for(_=0;_<a;_+=1){if(g=t[_],S=i(g,_),d=s.get(S).e,e.outrogroups!==null)for(const Se of e.outrogroups)Se.pending.delete(d),Se.done.delete(d);if((d.f&Oe)!==0&&(Mr(d),o&&((We=(Ne=d.nodes)==null?void 0:Ne.a)==null||We.unfix(),(p??(p=new Set)).delete(d))),(d.f&bt)!==0)if(d.f^=bt,d===l)ir(d,null,n);else{var y=f?f.next:l;d===e.effect.last&&(e.effect.last=d.prev),d.prev&&(d.prev.next=d.next),d.next&&(d.next.prev=d.prev),Xt(e,f,d),Xt(e,d,y),ir(d,y,n),f=d,b=[],h=[],l=rr(f.next);continue}if(d!==l){if(c!==void 0&&c.has(d)){if(b.length<h.length){var w=h[0],E;f=w.prev;var k=b[0],M=b[b.length-1];for(E=0;E<b.length;E+=1)ir(b[E],w,n);for(E=0;E<h.length;E+=1)c.delete(h[E]);Xt(e,k.prev,M.next),Xt(e,f,k),Xt(e,M,w),l=w,f=M,_-=1,b=[],h=[]}else c.delete(d),ir(d,l,n),Xt(e,d.prev,d.next),Xt(e,d,f===null?e.effect.first:f.next),Xt(e,f,d),f=d;continue}for(b=[],h=[];l!==null&&l!==d;)(c??(c=new Set)).add(l),h.push(l),l=rr(l.next);if(l===null)continue}(d.f&bt)===0&&b.push(d),f=d,l=rr(d.next)}if(e.outrogroups!==null){for(const Se of e.outrogroups)Se.pending.size===0&&(xi(e,mr(Se.done)),(ke=e.outrogroups)==null||ke.delete(Se));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||c!==void 0){var $=[];if(c!==void 0)for(d of c)(d.f&Oe)===0&&$.push(d);for(;l!==null;)(l.f&Oe)===0&&l!==e.fallback&&$.push(l),l=rr(l.next);var C=$.length;if(C>0){var O=(r&Yi)!==0&&a===0?n:null;if(o){for(_=0;_<C;_+=1)(qt=(je=$[_].nodes)==null?void 0:je.a)==null||qt.measure();for(_=0;_<C;_+=1)(wt=(ut=$[_].nodes)==null?void 0:ut.a)==null||wt.fix()}Ks(e,$,O)}}o&&Et(()=>{var Se,ze;if(p!==void 0)for(d of p)(ze=(Se=d.nodes)==null?void 0:Se.a)==null||ze.apply()})}function Qs(e,t,n,r,i,o,a,s){var l=(a&Lo)!==0?(a&Bo)===0?ws(n,!1,!1):Ut(n):null,c=(a&zo)!==0?Ut(i):null;return{v:l,i:c,e:Ve(()=>(o(t,l??n,c??i,s),()=>{e.delete(r)}))}}function ir(e,t,n){if(e.nodes)for(var r=e.nodes.start,i=e.nodes.end,o=t&&(t.f&bt)===0?t.nodes.start:n;r!==null;){var a=Qn(r);if(o.before(r),r===i)return;r=a}}function Xt(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function se(e,t,n,r,i){var s,l;if((s=t.$$host)!=null&&s.$$shadowRoot){const c=ui("slot");A(e,c);return}var o=(l=t.$$slots)==null?void 0:l[n],a=!1;o===!0&&(o=t.children,a=!0),o===void 0||o(e,a?()=>r:r)}function Js(e,t,n){var r=new bi(e);Jn(()=>{var i=t()??null;r.ensure(i,i&&(o=>n(o,i)))},Ft)}function el(e,t,n,r,i,o){var a=null,s=e,l=new bi(s,!1);Jn(()=>{const c=t()||null;var f=Xo;if(c===null){l.ensure(null,null);return}return l.ensure(c,p=>{if(c){if(a=ui(c,f),nr(a,a),r){var b=null,h=a.appendChild(Rt());r(a,h),b==null||b.remove()}H.nodes.end=a,p.before(a)}}),()=>{}},Ft),Ar(()=>{})}function tl(e,t){var n=void 0,r;xa(()=>{n!==(n=t())&&(r&&($e(r),r=null),n&&(r=Ve(()=>{di(()=>n(e))})))})}function Ha(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Ha(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function nl(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Ha(e))&&(r&&(r+=" "),r+=t);return r}function Tn(e){return typeof e=="object"?nl(e):e??""}const Ua=[...` 	
\r\f \v\uFEFF`];function rl(e,t,n){var r=e==null?"":""+e;if(t&&(r=r?r+" "+t:t),n){for(var i of Object.keys(n))if(n[i])r=r?r+" "+i:i;else if(r.length)for(var o=i.length,a=0;(a=r.indexOf(i,a))>=0;){var s=a+o;(a===0||Ua.includes(r[a-1]))&&(s===r.length||Ua.includes(r[s]))?r=(a===0?"":r.substring(0,a))+r.substring(s+1):a=s}}return r===""?null:r}function Wa(e,t=!1){var n=t?" !important;":";",r="";for(var i of Object.keys(e)){var o=e[i];o!=null&&o!==""&&(r+=" "+i+": "+o+n)}return r}function ki(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function il(e,t){if(t){var n="",r,i;if(Array.isArray(t)?(r=t[0],i=t[1]):r=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var o=!1,a=0,s=!1,l=[];r&&l.push(...Object.keys(r).map(ki)),i&&l.push(...Object.keys(i).map(ki));var c=0,f=-1;const S=e.length;for(var p=0;p<S;p++){var b=e[p];if(s?b==="/"&&e[p-1]==="*"&&(s=!1):o?o===b&&(o=!1):b==="/"&&e[p+1]==="*"?s=!0:b==='"'||b==="'"?o=b:b==="("?a++:b===")"&&a--,!s&&o===!1&&a===0){if(b===":"&&f===-1)f=p;else if(b===";"||p===S-1){if(f!==-1){var h=ki(e.substring(c,f).trim());if(!l.includes(h)){b!==";"&&p++;var g=e.substring(c,p).trim();n+=" "+g+";"}}c=p+1,f=-1}}}}return r&&(n+=Wa(r)),i&&(n+=Wa(i,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function He(e,t,n,r,i,o){var a=e[Qr];if(a!==n||a===void 0){var s=rl(n,r,o);s==null?e.removeAttribute("class"):t?e.className=s:e.setAttribute("class",s),e[Qr]=n}else if(o&&i!==o)for(var l in o){var c=!!o[l];(i==null||c!==!!i[l])&&e.classList.toggle(l,c)}return o}function Si(e,t={},n,r){for(var i in n){var o=n[i];t[i]!==o&&(n[i]==null?e.style.removeProperty(i):e.style.setProperty(i,o,r))}}function Or(e,t,n,r){var i=e[Jr];if(i!==t){var o=il(t,r);o==null?e.removeAttribute("style"):e.style.cssText=o,e[Jr]=t}else r&&(Array.isArray(r)?(Si(e,n==null?void 0:n[0],r[0]),Si(e,n==null?void 0:n[1],r[1],"important")):Si(e,n,r));return r}function ja(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Xa(e,t){var n=!("__defaultValue"in e);!n&&e.__defaultValue===t||(e.__defaultValue=t,Ga(e,!n||"__value"in e))}function Ga(e,t){var n=e.__defaultValue,r=e.multiple,i=r?n??[]:null;if(!(r&&!ae(i))){var o=e.selectedIndex,a=t&&r?new Set(e.selectedOptions):null;for(var s of e.options){var l=Ei(s);ja(s,r?i.includes(l):va(l,n))}if(t)if(a!==null)for(s of e.options){var c=a.has(s);s.selected!==c&&(s.selected=c)}else e.selectedIndex!==o&&(e.selectedIndex=o)}}function Lt(e,t,n=!1){if(e.multiple){if(t==null)return;if(!ae(t))return qo();for(var r of e.options)r.selected=t.includes(Ei(r));return}for(r of e.options){var i=Ei(r);if(va(i,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function cn(e){var t=new MutationObserver(n=>{n.every(al)||("__defaultValue"in e&&Ga(e,!1),"__value"in e&&Lt(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Ar(()=>{t.disconnect()})}function Ei(e){return"__value"in e?e.__value:e.value}function al(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(n=>n.nodeName==="SELECTEDCONTENT")}return!1}const ar=Symbol("class"),or=Symbol("style"),Ya=Symbol("is custom element"),qa=Symbol("is html"),ol=kr?"input":"INPUT",sl=kr?"option":"OPTION",Ka=kr?"select":"SELECT",ll=kr?"progress":"PROGRESS";function Pr(e,t){var n=Rr(e);n.value===(n.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==ll)||(e.value=t??"")}function cl(e,t){var n=Rr(e);n.checked!==(n.checked=t??void 0)&&(e.checked=t)}function Ae(e,t,n,r){var i=Rr(e);i[t]!==(i[t]=n)&&(t==="loading"&&(e[Io]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Ja(e).has(t)?e[t]=n:e.setAttribute(t,n))}function ul(e,t,n,r,i=!1,o=!1){var a=Rr(e),s=a[Ya],l=!a[qa],c=t||{},f=e.nodeName===sl,p=e.nodeName===Ka;for(var b in t)!(b in n)&&b[0]+b[1]!=="$$"&&(n[b]=null);n.class?n.class=Tn(n.class):n[ar]&&(n.class=null),n[or]&&(n.style??(n.style=null));var h=Ja(e);if(e.nodeName===ol&&"type"in n&&("value"in n||"__value"in n)){var g=n.type;(g!==c.type||g===void 0&&e.hasAttribute("type"))&&(c.type=g,Ae(e,"type",g))}for(const k in n){let M=n[k];if(f&&k==="value"&&M==null){e.value=e.__value="",c[k]=M;continue}if(k==="class"){var S=e.namespaceURI==="http://www.w3.org/1999/xhtml";He(e,S,M,r,t==null?void 0:t[ar],n[ar]),c[k]=M,c[ar]=n[ar];continue}if(k==="style"){Or(e,M,t==null?void 0:t[or],n[or]),c[k]=M,c[or]=n[or];continue}var d=c[k];if(!(M===d&&!(M===void 0&&e.hasAttribute(k)))){c[k]=M;var _=k[0]+k[1];if(_!=="$$")if(_==="on"){const $={},C="$$"+k;let O=k.slice(2);var y=Is(O);if(Ps(O)&&(O=O.slice(0,-7),$.capture=!0),!y&&d){if(M!=null)continue;e.removeEventListener(O,c[C],$),c[C]=null}if(y)K(O,e,M),ln([O]);else if(M!=null){let D=function(re){c[k].call(this,re)};c[C]=Da(O,e,D,$)}}else if(k==="style")Ae(e,k,M);else if(k==="autofocus")vs(e,!!M);else if(!s&&(k==="__value"||k==="value"&&M!=null))e.value=e.__value=M;else if(k==="selected"&&f)ja(e,M);else{var w=k;l||(w=zs(w));var E=w==="defaultValue"||w==="defaultChecked";if(p&&w==="defaultValue")continue;if(M==null&&!s&&!E)if(a[k]=null,w==="value"||w==="checked"){let $=e;const C=t===void 0;if(w==="value"){let O=$.defaultValue;$.removeAttribute(w),$.defaultValue=O,$.value=$.__value=C?O:null}else{let O=$.defaultChecked;$.removeAttribute(w),$.defaultChecked=O,$.checked=C?O:!1}}else e.removeAttribute(k);else E||(s||typeof M!="string")&&h.has(w)?(e[w]=M,w in a&&(a[w]=we)):typeof M!="function"&&Ae(e,w,M)}}}return c}function Za(e,t,n=[],r=[],i=[],o,a=!1,s=!1){ea(i,n,r,l=>{var c=void 0,f={},p=e.nodeName===Ka,b=!1;if(xa(()=>{var g=t(...l.map(v)),S=ul(e,c,g,o,a,s);if(b&&p){var d=e;"defaultValue"in g&&Xa(d,g.defaultValue),"value"in g&&Lt(d,g.value)}for(let y of Object.getOwnPropertySymbols(f))g[y]||$e(f[y]);for(let y of Object.getOwnPropertySymbols(g)){var _=g[y];y.description===Go&&(!c||_!==c[y])&&(f[y]&&$e(f[y]),f[y]=Ve(()=>tl(e,()=>_))),S[y]=_}c=S}),p){var h=e;di(()=>{var g=c;"defaultValue"in g&&Xa(h,g.defaultValue),Lt(h,g.value,!0),cn(h)})}b=!0})}function Rr(e){return e[xr]??(e[xr]={[Ya]:e.nodeName.includes("-"),[qa]:e.namespaceURI===Ki})}var Qa=new Map;function Ja(e){var t=e.getAttribute("is")||e.nodeName,n=Qa.get(t);if(n)return n;Qa.set(t,n=new Set);for(var r,i=e,o=Element.prototype;o!==i;){r=Fi(i);for(var a in r)r[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&n.add(a);i=Gr(i)}return n}function $i(e,t){return e===t||(e==null?void 0:e[xt])===t}function Ai(e=ei(),t,n,r){var i=de.r,o=H;return di(()=>{var a,s;return ba(()=>{a=s,s=[],Wt(()=>{$i(n(...s),e)||(t(e,...s),a&&$i(n(...a),e)&&t(null,...a))})}),()=>{let l=o;for(;l!==i&&l.parent!==null&&l.parent.f&yr;)l=l.parent;const c=()=>{s&&$i(n(...s),e)&&t(null,...s)},f=l.teardown;l.teardown=()=>{c(),f==null||f()}}}),e}function fl(e=!1){const t=de,n=t.l.u;if(!n)return;let r=()=>on(t.s);if(e){let i=0,o={};const a=$n(()=>{let s=!1;const l=t.s;for(const c in l)l[c]!==o[c]&&(o[c]=l[c],s=!0);return s&&i++,i});r=()=>v(a)}n.b.length&&$s(()=>{eo(t,r),Yr(n.b)}),tn(()=>{const i=Wt(()=>n.m.map(Po));return()=>{for(const o of i)typeof o=="function"&&o()}}),n.a.length&&tn(()=>{eo(t,r),Yr(n.a)})}function eo(e,t){if(e.l.s)for(const n of e.l.s)v(n);t()}let Ir=!1;function dl(e){var t=Ir;try{return Ir=!1,[e(),Ir]}finally{Ir=t}}const vl={get(e,t){if(!e.exclude.includes(t))return v(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,n){if(!(t in e.special)){var r=H;try{at(e.parent_effect),e.special[t]=gt({get[t](){return e.props[t]}},t,qi)}finally{at(r)}}return e.special[t](n),ua(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),ua(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function oe(e,t){return new Proxy({props:e,exclude:t,special:{},version:Ut(0),parent_effect:H},vl)}const pl={get(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(Hn(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r)return r[t]}},set(e,t,n){let r=e.props.length;for(;r--;){let i=e.props[r];Hn(i)&&(i=i());const o=Vt(i,t);if(o&&o.set)return o.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(Hn(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r){const i=Vt(r,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===xt||t===Gi)return!1;for(let n of e.props)if(Hn(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){const t=[];for(let n of e.props)if(Hn(n)&&(n=n()),!!n){for(const r in n)t.includes(r)||t.push(r);for(const r of Object.getOwnPropertySymbols(n))t.includes(r)||t.push(r)}return t}};function ce(...e){return new Proxy({props:e},pl)}function gt(e,t,n,r){var E;var i=!kn||(n&Fo)!==0,o=(n&Ho)!==0,a=(n&Uo)!==0,s=r,l=!0,c=void 0,f=()=>a&&i?(c??(c=$n(r)),v(c)):(l&&(l=!1,s=a?Wt(r):r),s);let p;if(o){var b=xt in e||Gi in e;p=((E=Vt(e,t))==null?void 0:E.set)??(b&&t in e?k=>e[t]=k:void 0)}var h,g=!1;o?[h,g]=dl(()=>e[t]):h=e[t],h===void 0&&r!==void 0&&(h=f(),p&&(i&&as(),p(h)));var S;if(i?S=()=>{var k=e[t];return k===void 0?f():(l=!0,k)}:S=()=>{var k=e[t];return k!==void 0&&(s=void 0),k===void 0?s:k},i&&(n&qi)===0)return S;if(p){var d=e.$$legacy;return(function(k,M){return arguments.length>0?((!i||!M||d||g)&&p(M?S():k),k):S()})}var _=!1,y=((n&Vo)!==0?$n:ni)(()=>(_=!1,S()));o&&v(y);var w=H;return(function(k,M){if(arguments.length>0){const $=M?v(y):i&&o?Re(k):k;return T(y,$),_=!0,s!==void 0&&(s=$),k}return It&&_||(w.f&Pe)!==0?y.v:v(y)})}function Mi(e){de===null&&Qo(),kn&&de.l!==null?hl(de).m.push(e):tn(()=>{const t=Wt(e);if(typeof t=="function")return t})}function hl(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const _l="5";typeof window<"u"&&((vo=window.__svelte??(window.__svelte={})).v??(vo.v=new Set)).add(_l);const Q=Re({ready:!1,cleanScreen:!1,panelOpen:!0,settingsOpen:!1,startupOpen:!0,focusSection:null,focusNonce:0,popupSection:null,dockExpanded:!1,status:{}});function gl(e){Q.popupSection=Q.popupSection===e?null:e}const Ye=Re({});function to(e){try{return structuredClone(e)}catch{return JSON.parse(JSON.stringify(e))}}function ne(e){var t,n,r;if(e==null)return e;try{return((r=(n=(t=window.XRA)==null?void 0:t.i18n)==null?void 0:n.t)==null?void 0:r.call(n,e))??e}catch{return e}}function Ue(e,t){const n=e.split(".");let r=Ye;for(const i of n){if(r==null)return t;r=r[i]}return r===void 0?t:r}function ml(e){var n,r,i,o,a,s,l,c;const t=window.XRA;if(t){if(e.startsWith("background.")){(r=(n=t.background)==null?void 0:n.apply)==null||r.call(n);return}if(e==="ui.language"){(o=(i=t.i18n)==null?void 0:i.setLanguage)==null||o.call(i,Ye.ui.language);return}if(e==="ui.preview_wireframe"){typeof t.applyMocapWireframeVisibility=="function"&&t.applyMocapWireframeVisibility();return}if(e==="ui.mocap_view"){typeof t.applyMocapWireframeVisibility=="function"&&t.applyMocapWireframeVisibility();return}if(e.startsWith("performance.")){window.XRA_render_fps_limit=Number(Ye.performance.render_fps??60),window.XRA_gpu_preference=String(Ye.performance.gpu_preference||"default"),window.XRA_preserve_drawing_buffer=Ye.performance.preserve_drawing_buffer!==!1,window.XRA_antialias=Ye.performance.antialias!=="off",(s=(a=t.events)==null?void 0:a.emit)==null||s.call(a,"performance",Ye.performance);return}(c=(l=t.events)==null?void 0:l.emit)==null||c.call(l,"config-change",{path:e,value:Ue(e)})}}function st(e,t){var o,a;const n=window.XRA,r=e.split(".");let i=Ye;for(let s=0;s<r.length-1;s++)i[r[s]]==null&&(i[r[s]]={}),i=i[r[s]];if(i[r[r.length-1]]=t,n!=null&&n.config){let s=n.config;for(let l=0;l<r.length-1;l++)s[r[l]]==null&&(s[r[l]]={}),s=s[r[l]];s[r[r.length-1]]=t}ml(e);try{(a=(o=n==null?void 0:n.profileService)==null?void 0:o.save)==null||a.call(o)}catch{}}function Lr(e,t,n){return new Promise((r,i)=>{const o=setTimeout(()=>i(new Error(`${n} timed out after ${t} ms`)),t);Promise.resolve(e).then(a=>{clearTimeout(o),r(a)},a=>{clearTimeout(o),i(a)})})}async function no({timeout:e=12e3,dataTimeout:t=8e3}={}){var r,i,o;const n=(r=window.XRA)==null?void 0:r.nativeBridge;if(!(n!=null&&n.startNativeStreamer))throw new Error("native bridge unavailable");try{await Lr(n.startNativeStreamer(),e,"Camera start");const a=performance.now()+t;for(;performance.now()<a;){if((i=n.cameraDataReady)!=null&&i.call(n))return!0;await new Promise(s=>setTimeout(s,120))}return!0}catch(a){try{await((o=n.forceStopCamera)==null?void 0:o.call(n))}catch{}throw a}}async function yl({timeout:e=8e3}={}){var n,r;const t=(n=window.XRA)==null?void 0:n.nativeBridge;if(t!=null&&t.stopNativeStreamer)try{await Lr(t.stopNativeStreamer(),e,"Camera stop")}catch(i){try{await((r=t.forceStopCamera)==null?void 0:r.call(t))}catch{}throw i}}async function wl({timeout:e=12e3,readyTimeout:t=6e3}={}){var r,i,o,a;const n=(r=window.XRA)==null?void 0:r.recorder;if(!(n!=null&&n.start))throw new Error("recorder unavailable");try{await Lr(n.start(),e,"Recording start");const s=performance.now()+t;for(;performance.now()<s;){if((o=(i=n.status)==null?void 0:i.call(n))!=null&&o.active)return!0;await new Promise(l=>setTimeout(l,120))}return!0}catch(s){try{await((a=n.stop)==null?void 0:a.call(n))}catch{}throw s}}async function bl({timeout:e=8e3}={}){var n,r;const t=(n=window.XRA)==null?void 0:n.recorder;if(t!=null&&t.stop)try{await Lr(t.stop(),e,"Recording stop")}catch(i){try{await((r=t.stop)==null?void 0:r.call(t))}catch{}throw i}}function zr(){var e,t,n;Q.cleanScreen=!Q.cleanScreen,document.body.classList.toggle("xra-total-clean-screen",Q.cleanScreen);try{(n=(t=(e=window.XRA)==null?void 0:e.ui)==null?void 0:t.setHidden)==null||n.call(t,Q.cleanScreen)}catch{}}function xl(){var e;try{Object.assign(Ye,to(((e=window.XRA)==null?void 0:e.config)||{}))}catch{}}function ro(){var e;try{const t=(e=window.SA_bridge)==null?void 0:e.backend;t&&typeof t.status=="function"&&(Q.status=t.status()||{})}catch{}}function kl(){const e=()=>window.XRA&&window.XRA.config?(Object.assign(Ye,to(window.XRA.config)),Q.ready=!0,ro(),window.addEventListener("keydown",t=>{t.key==="Escape"&&Q.cleanScreen&&(t.preventDefault(),zr())},!0),!0):!1;if(!e()){const t=setInterval(()=>{e()&&clearInterval(t)},200)}}const Sl={camera:{title:"Camera",icon:"Camera"},devices:{title:"Devices",icon:"SlidersHorizontal"},pose_model:{title:"Pose model",icon:"PersonStanding"},performance:{title:"Performance",icon:"Zap"},tracking:{title:"Motion capture",icon:"Activity"},body:{title:"Body",icon:"PersonStanding"},collider:{title:"Body collider",icon:"Shield"},lip:{title:"Audio & Lip-sync",icon:"Mic"},background:{title:"Background",icon:"Image"},avatar:{title:"Character position (avatar only)",icon:"User"},second_avatar:{title:"Remote avatar (Studio Link)",icon:"Globe"},stage:{title:"3D Stage & Environment",icon:"Landmark"},recorder:{title:"Recording / capture",icon:"Video"},visual_effects:{title:"Visual effects",icon:"Sparkles"},debug:{title:"Diagnostics",icon:"Bug"},ui:{title:"UI & overlays",icon:"Monitor"}},io=["performance","tracking","body","collider","lip","background","stage","avatar","second_avatar","recorder","visual_effects","debug","ui","camera","devices","pose_model"],El=new Set(["left_settings","_custom_","_excluded_"]),$l=new Set(["camera.view_presets","camera.selected_view_preset","ui.preview_video","ui.preview_wireframe","ui.preview_debug","performance.auto_last_result","recorder.output_dir"]);function ao(e){const t=String(e).replace(/_/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").trim();return t.charAt(0).toUpperCase()+t.slice(1)}const Al={"ui.language":{type:"select",options:()=>{var e,t;return((t=(e=window.XRA)==null?void 0:e.i18n)==null?void 0:t.LANGUAGES)||[["en","English"]]}},"background.mode":{type:"select",options:[["color","Color"],["image","Image"],["none","None (transparent · OBS)"]]},"background.color":{type:"color"},"background.path":{type:"text"},"ui.mocap_view":{type:"select",label:"Mocap window",options:[["off","Off"],["both","Webcam + skeleton"],["wireframe","Skeleton only"],["video","Webcam only"]]},"ui.mocap_visibility":{type:"select",label:"Mocap window visibility",options:[["always","Always on (black while idle)"],["auto","Auto (hide when tracking is off)"]]},"performance.tracking_pipeline":{type:"select",label:"Tracking mode",options:[["FULL_BODY","Full Body"],["FACE","Face only"],["UPPER_BODY","Upper body"]]},"performance.render_resolution":{type:"select",options:[["720p","720p (HD · GPU Saving)"],["1080p","1080p (Full HD · Recommended)"],["1440p","1440p (2K · High resolution)"]]},"performance.render_fps":{type:"slider",min:15,max:240,step:1},"performance.gpu_preference":{type:"select",label:"Graphics card (GPU)",options:[["default","Default"],["high-performance","Dedicated GPU (High Performance)"],["low-power","Integrated GPU (Low Power)"]]},"performance.shadows":{type:"select",options:[["auto","Auto"],["on","Enabled"],["off","Disabled (GPU saving)"]]},"performance.antialias":{type:"select",label:"Anti-Aliasing (AA)",options:[["auto","Enabled (Hardware MSAA · Recommended)"],["off","Disabled"]]},"performance.spring_bone":{type:"select",label:"Hair/cloth physics (Spring Bone)",options:[["full","Full (every frame)"],["half","Half (1 frame out of 2 · Saving)"],["off","Off"]]},"performance.infer_mode":{type:"select",options:[["native","Native (Auto)"],["640x360","640×360 (Recommended · 30 FPS smooth)"],["640x480","640×480 (Standard 4:3 format)"],["1280x720","1280×720 (HD 720p · High precision)"]]},"performance.pose_fps":{type:"slider",min:5,max:30,step:1},"performance.hand_fps":{type:"slider",min:5,max:30,step:1},"performance.min_tracking_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_pose_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_face_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_joint_confidence":{type:"slider",min:.05,max:1,step:.05},"tracking.hand_recovery_mode":{type:"select",options:[["normal","Normal"],["aggressive","Aggressive"],["off","Off"]]},"tracking.hand_detection_sensitivity":{type:"select",options:[["high","High"],["normal","Normal"],["low","Low"]]},"tracking.stabilize_hand_percent":{type:"slider",min:0,max:100,step:1},"tracking.stabilize_arm":{type:"slider",min:0,max:100,step:1},"tracking.stabilize_arm_time":{type:"slider",min:0,max:2,step:.05},"tracking.native_smoothing":{type:"slider",min:0,max:1,step:.01},"tracking.body_bend_reduction":{type:"slider",min:0,max:1,step:.01},"tracking.upper_body_guard_strength":{type:"slider",min:0,max:1,step:.01},"tracking.guard_jump_deg":{type:"slider",min:5,max:120,step:1},"tracking.guard_hold_ms":{type:"slider",min:0,max:2e3,step:10},"tracking.guard_reacquire_deg":{type:"slider",min:5,max:120,step:1},"tracking.adaptive_smoothing_strength":{type:"slider",min:0,max:1,step:.01},"tracking.guard_confidence_min":{type:"slider",min:0,max:1,step:.01},"tracking.guard_release_ms":{type:"slider",min:0,max:2e3,step:10},"tracking.guard_mode":{type:"select",options:[["off","Off"],["auto","Auto"]]},"tracking.desk_torso_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_hips_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_legs_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_max_yaw_deg":{type:"slider",min:0,max:90,step:1},"tracking.desk_max_pitch_deg":{type:"slider",min:0,max:90,step:1},"tracking.desk_max_roll_deg":{type:"slider",min:0,max:90,step:1},"body.anchor_strength":{type:"slider",min:0,max:1,step:.01},"body.transition_ms":{type:"slider",min:0,max:2e3,step:10},"avatar.offset_x":{type:"slider",min:-5,max:5,step:.01},"avatar.offset_y":{type:"slider",min:-5,max:5,step:.01},"avatar.offset_z":{type:"slider",min:-5,max:5,step:.01},"avatar.rotation_y":{type:"slider",min:-180,max:180,step:1},"second_avatar.offset_x":{type:"slider",min:-20,max:20,step:.1},"second_avatar.offset_y":{type:"slider",min:-10,max:10,step:.1},"second_avatar.offset_z":{type:"slider",min:-10,max:10,step:.1},"second_avatar.rotation_y":{type:"slider",min:-180,max:180,step:1},"stage.scale":{type:"slider",min:.1,max:5,step:.01},"stage.rotation_x":{type:"slider",min:-180,max:180,step:1},"stage.rotation_y":{type:"slider",min:-180,max:180,step:1},"stage.rotation_z":{type:"slider",min:-180,max:180,step:1},"stage.offset_x":{type:"slider",min:-10,max:10,step:.05},"stage.offset_y":{type:"slider",min:-10,max:10,step:.05},"stage.offset_z":{type:"slider",min:-10,max:10,step:.05},"stage.scene_zoom":{type:"slider",min:.5,max:3,step:.01},"stage.lights_intensity":{type:"slider",min:0,max:3,step:.05},"collider.preset":{type:"select",options:[["CUSTOM","Custom"],["NONE","None"]]},"collider.reaction":{type:"select",options:[["z_push","Z push"],["bounce","Bounce"],["block","Block"]]},"collider.head":{type:"slider",min:0,max:200,step:1},"collider.chest":{type:"slider",min:0,max:200,step:1},"collider.waist":{type:"slider",min:0,max:200,step:1},"collider.hip":{type:"slider",min:0,max:200,step:1},"collider.front_clearance":{type:"slider",min:0,max:50,step:1},"lip.analysis_fps":{type:"slider",min:5,max:60,step:1},"lip.fft_size":{type:"select",label:"FFT size",options:[["256","256"],["512","512"],["1024","1024"],["2048","2048"]]},"lip.mic_mix":{type:"slider",min:0,max:1,step:.01},"lip.threshold":{type:"slider",min:0,max:.2,step:.001},"lip.response_gain":{type:"slider",min:0,max:3,step:.05},"lip.vowel_emphasis":{type:"slider",min:0,max:3,step:.05},"recorder.mode":{type:"select",label:"Recording source",options:[["video_audio","Video + Audio"],["video","Video only"],["audio","Audio only"]]},"recorder.audio_only_variant":{type:"select",label:"Audio only mode",options:[["both","Processed + RAW"],["processed","Processed"],["raw","RAW"]]},"recorder.capture_source":{type:"select",label:"Output source",options:[["classic_v74","Classic output · recommended"],["clean_scene","Clean scene output · experimental (no UI)"],["native_xr","XR native video only · fallback"]]},"recorder.output_format":{type:"select",options:[["webm","WebM"],["mp4","MP4"]]},"recorder.audio_profile":{type:"select",options:[["podcast","Podcast"],["call","Call (Browser echo/noise filters)"]]},"recorder.hardware_encode":{type:"select",options:[["auto","Auto"],["on","On"],["off","Off (CPU)"]]},"recorder.width":{type:"slider",min:320,max:3840,step:2},"recorder.height":{type:"slider",min:240,max:2160,step:2},"recorder.fps":{type:"slider",min:15,max:60,step:1},"recorder.gate_threshold_db":{type:"slider",min:-80,max:-5,step:.5},"recorder.gate_hold_ms":{type:"slider",min:0,max:1e3,step:10},"recorder.gate_release_ms":{type:"slider",min:0,max:1e3,step:10},"recorder.video_bps":{type:"slider",min:5e5,max:2e7,step:1e5},"recorder.audio_bps":{type:"slider",min:32e3,max:32e4,step:8e3},"recorder.segment_minutes":{type:"select",options:[["0","Off"],["30","Every 30 min"],["60","Every 60 min"]]},"recorder.raw_audio_format":{type:"select",options:[["flac","FLAC (lossless)"],["wav","WAV (large)"]]},"recorder.filename":{type:"text"},"camera.optimized":{type:"toggle"},"camera.width":{type:"slider",min:160,max:1920,step:2},"camera.height":{type:"slider",min:120,max:1080,step:2},"camera.fps":{type:"slider",min:5,max:60,step:1}};function Ml(e){const t=[];for(const[n,r]of Object.entries(e||{})){if(El.has(n)||!r||typeof r!="object"||Array.isArray(r))continue;const i=Sl[n]||{},o=[];for(const[a,s]of Object.entries(r)){const l=`${n}.${a}`;if($l.has(l))continue;const c=Al[l]||{};if(c.hidden||s!==null&&typeof s=="object")continue;const f=c.type||(typeof s=="boolean"?"toggle":typeof s=="number"?"number":"text");o.push({type:f,path:l,label:c.label||ao(a),min:c.min,max:c.max,step:c.step,options:c.options})}o.length&&t.push({id:n,title:i.title||ao(n),icon:i.icon||"⚙",controls:o})}return t.sort((n,r)=>{const i=io.indexOf(n.id),o=io.indexOf(r.id);return(i<0?999:i)-(o<0?999:o)}),t}var Nl=_e("<option> </option>"),Tl=_e("<select></select>"),Cl=_e("<select><option> </option><option> </option></select>"),Ol=_e('<span class="xra-val"> </span> <input type="range"/>',1),Pl=_e('<input type="checkbox"/>'),Rl=_e('<input type="color"/>'),Il=_e('<input type="number"/>'),Ll=_e('<input type="text"/>'),zl=_e('<label><span class="xra-row-label"> </span> <!></label>');function Dl(e,t){kt(t,!0);const n=Be(()=>typeof t.control.options=="function"?t.control.options():t.control.options||[]),r=_=>_===!1?"off":"auto",i=_=>_==="off"?!1:null;var o=zl();let a;var s=B(o),l=q(s,!0),c=R(s,2);{var f=_=>{var y=Tl();jt(y,21,()=>v(n),Va,(E,k)=>{var M=Nl(),$=q(M,!0),C={};he(O=>{Y($,O),C!==(C=v(k)[0])&&(M.value=(M.__value=C)??"")},[()=>ne(v(k)[1])]),A(E,M)});var w;cn(y),he(E=>{w!==(w=E)&&(y.value=(y.__value=w)??"",Lt(y,w))},[()=>Ue(t.control.path)]),K("change",y,E=>st(t.control.path,E.currentTarget.value)),A(_,y)},p=_=>{var y=Cl(),w=B(y),E=q(w,!0);w.value=w.__value="auto";var k=R(w),M=q(k,!0);k.value=k.__value="off";var $;cn(y),he((C,O,D)=>{Y(E,C),Y(M,O),$!==($=D)&&(y.value=(y.__value=$)??"",Lt(y,$))},[()=>ne("Auto (follow tracking)"),()=>ne("Off"),()=>r(Ue(t.control.path))]),K("change",y,C=>st(t.control.path,i(C.currentTarget.value))),A(_,y)},b=_=>{const y=Be(()=>Number(Ue(t.control.path,t.control.min))),w=Be(()=>t.control.max>t.control.min?Math.round((v(y)-t.control.min)/(t.control.max-t.control.min)*100):0);var E=Ol(),k=G(E),M=q(k,!0),$=R(k,2);he(C=>{Y(M,C),Ae($,"min",t.control.min),Ae($,"max",t.control.max),Ae($,"step",t.control.step),Or($,`--xra-fill:${v(w)??""}%`),Pr($,v(y))},[()=>Ue(t.control.path)]),K("input",$,C=>st(t.control.path,Number(C.currentTarget.value))),A(_,E)},h=_=>{var y=Pl();he(w=>cl(y,w),[()=>!!Ue(t.control.path)]),K("change",y,w=>st(t.control.path,w.currentTarget.checked)),A(_,y)},g=_=>{var y=Rl();he(w=>Pr(y,w),[()=>Ue(t.control.path)]),K("input",y,w=>st(t.control.path,w.currentTarget.value)),A(_,y)},S=_=>{var y=Il();he(w=>{Ae(y,"step",t.control.step||"any"),Pr(y,w)},[()=>Ue(t.control.path,0)]),K("input",y,w=>st(t.control.path,Number(w.currentTarget.value))),A(_,y)},d=_=>{var y=Ll();he(w=>Pr(y,w),[()=>Ue(t.control.path,"")]),K("change",y,w=>st(t.control.path,w.currentTarget.value)),A(_,y)};Ge(c,_=>{t.control.type==="select"?_(f):t.control.type==="tristate"?_(p,1):t.control.type==="slider"?_(b,2):t.control.type==="toggle"?_(h,3):t.control.type==="color"?_(g,4):t.control.type==="number"?_(S,5):t.control.type==="text"&&_(d,6)})}he(_=>{a=He(o,1,"xra-row",null,a,{"xra-row-slider":t.control.type==="slider"}),Y(l,_)},[()=>ne(t.control.label)]),A(e,o),St()}ln(["change","input"]);function oo(e,t){kt(t,!0);var n=Z(),r=G(n);jt(r,17,()=>t.section.controls,i=>i.path,(i,o)=>{var a=Z(),s=G(a);{var l=f=>{Dl(f,{get control(){return v(o)}})},c=Be(()=>!v(o).when||v(o).when(Ye));Ge(s,f=>{v(c)&&f(l)})}A(i,a)}),A(e,n),St()}us();/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
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
 */const so=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();var Fl=Hs("<svg><!><!></svg>");function ue(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]),r=oe(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);kt(t,!1);let i=gt(t,"name",8,void 0),o=gt(t,"color",8,"currentColor"),a=gt(t,"size",8,24),s=gt(t,"strokeWidth",8,2),l=gt(t,"absoluteStrokeWidth",8,!1),c=gt(t,"iconNode",24,()=>[]);fl();var f=Fl();Za(f,(h,g,S)=>({...Bl,...h,...r,width:a(),height:a(),stroke:o(),"stroke-width":g,class:S}),[()=>Vl(r)?void 0:{"aria-hidden":"true"},()=>(on(l()),on(s()),on(a()),Wt(()=>l()?Number(s())*24/Number(a()):s())),()=>(on(so),on(i()),on(n),Wt(()=>so("lucide-icon","lucide",i()?`lucide-${i()}`:"",n.class)))]);var p=B(f);jt(p,1,c,Va,(h,g)=>{var S=Be(()=>Wi(v(g),2));let d=()=>v(S)[0],_=()=>v(S)[1];var y=Z(),w=G(y);el(w,d,!0,(E,k)=>{Za(E,()=>({..._()}))}),A(h,y)});var b=R(p);se(b,t,"default",{}),A(e,f),St()}function Hl(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];ue(e,ce({name:"camera"},()=>n,{get iconNode(){return r},children:(i,o)=>{var a=Z(),s=G(a);se(s,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function Ul(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 5H3"}],["path",{d:"M12 19H3"}],["path",{d:"M14 3v4"}],["path",{d:"M16 17v4"}],["path",{d:"M21 12h-9"}],["path",{d:"M21 19h-5"}],["path",{d:"M21 5h-7"}],["path",{d:"M8 10v4"}],["path",{d:"M8 12H3"}]];ue(e,ce({name:"sliders-horizontal"},()=>n,{get iconNode(){return r},children:(i,o)=>{var a=Z(),s=G(a);se(s,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function Wl(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"5",r:"1"}],["path",{d:"m9 20 3-6 3 6"}],["path",{d:"m6 8 6 2 6-2"}],["path",{d:"M12 10v4"}]];ue(e,ce({name:"person-standing"},()=>n,{get iconNode(){return r},children:(i,o)=>{var a=Z(),s=G(a);se(s,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function jl(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];ue(e,ce({name:"zap"},()=>n,{get iconNode(){return r},children:(i,o)=>{var a=Z(),s=G(a);se(s,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function Xl(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]];ue(e,ce({name:"activity"},()=>n,{get iconNode(){return r},children:(i,o)=>{var a=Z(),s=G(a);se(s,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function Gl(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];ue(e,ce({name:"shield"},()=>n,{get iconNode(){return r},children:(i,o)=>{var a=Z(),s=G(a);se(s,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function Yl(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 19v3"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3"}]];ue(e,ce({name:"mic"},()=>n,{get iconNode(){return r},children:(i,o)=>{var a=Z(),s=G(a);se(s,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function ql(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]];ue(e,ce({name:"image"},()=>n,{get iconNode(){return r},children:(i,o)=>{var a=Z(),s=G(a);se(s,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function Kl(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 18v-7"}],["path",{d:"M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"}],["path",{d:"M14 18v-7"}],["path",{d:"M18 18v-7"}],["path",{d:"M3 22h18"}],["path",{d:"M6 18v-7"}]];ue(e,ce({name:"landmark"},()=>n,{get iconNode(){return r},children:(i,o)=>{var a=Z(),s=G(a);se(s,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function Zl(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];ue(e,ce({name:"user"},()=>n,{get iconNode(){return r},children:(i,o)=>{var a=Z(),s=G(a);se(s,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function Ql(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];ue(e,ce({name:"globe"},()=>n,{get iconNode(){return r},children:(i,o)=>{var a=Z(),s=G(a);se(s,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function Jl(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]];ue(e,ce({name:"video"},()=>n,{get iconNode(){return r},children:(i,o)=>{var a=Z(),s=G(a);se(s,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function ec(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];ue(e,ce({name:"sparkles"},()=>n,{get iconNode(){return r},children:(i,o)=>{var a=Z(),s=G(a);se(s,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function tc(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 20v-9"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97"}],["path",{d:"M22 13h-4"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97"}],["path",{d:"M6 13H2"}],["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13"}]];ue(e,ce({name:"bug"},()=>n,{get iconNode(){return r},children:(i,o)=>{var a=Z(),s=G(a);se(s,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function nc(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]];ue(e,ce({name:"monitor"},()=>n,{get iconNode(){return r},children:(i,o)=>{var a=Z(),s=G(a);se(s,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function rc(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"10",r:"8"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 22h10"}],["path",{d:"M12 22v-4"}]];ue(e,ce({name:"webcam"},()=>n,{get iconNode(){return r},children:(i,o)=>{var a=Z(),s=G(a);se(s,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function lo(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}]];ue(e,ce({name:"circle"},()=>n,{get iconNode(){return r},children:(i,o)=>{var a=Z(),s=G(a);se(s,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function ic(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];ue(e,ce({name:"square"},()=>n,{get iconNode(){return r},children:(i,o)=>{var a=Z(),s=G(a);se(s,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function ac(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]];ue(e,ce({name:"eye"},()=>n,{get iconNode(){return r},children:(i,o)=>{var a=Z(),s=G(a);se(s,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function oc(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}],["path",{d:"m2 2 20 20"}]];ue(e,ce({name:"eye-off"},()=>n,{get iconNode(){return r},children:(i,o)=>{var a=Z(),s=G(a);se(s,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function sc(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];ue(e,ce({name:"folder-open"},()=>n,{get iconNode(){return r},children:(i,o)=>{var a=Z(),s=G(a);se(s,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function lc(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];ue(e,ce({name:"info"},()=>n,{get iconNode(){return r},children:(i,o)=>{var a=Z(),s=G(a);se(s,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function cc(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ue(e,ce({name:"x"},()=>n,{get iconNode(){return r},children:(i,o)=>{var a=Z(),s=G(a);se(s,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function uc(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];ue(e,ce({name:"settings"},()=>n,{get iconNode(){return r},children:(i,o)=>{var a=Z(),s=G(a);se(s,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function fc(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ue(e,ce({name:"refresh-cw"},()=>n,{get iconNode(){return r},children:(i,o)=>{var a=Z(),s=G(a);se(s,t,"default",{}),A(i,a)},$$slots:{default:!0}}))}function qe(e,t){const n={Camera:Hl,SlidersHorizontal:Ul,PersonStanding:Wl,Zap:jl,Activity:Xl,Shield:Gl,Mic:Yl,Image:ql,Landmark:Kl,User:Zl,Globe:Ql,Video:Jl,Sparkles:ec,Bug:tc,Monitor:nc,Webcam:rc,Circle:lo,Square:ic,Eye:ac,EyeOff:oc,FolderOpen:sc,Info:lc,X:cc,Settings:uc,RefreshCw:fc};let r=gt(t,"name",3,"Circle"),i=gt(t,"size",3,16),o=gt(t,"strokeWidth",3,2),a=gt(t,"class",3,"");const s=Be(()=>n[r()]??lo);var l=Z(),c=G(l);Js(c,()=>v(s),(f,p)=>{p(f,{get size(){return i()},get"stroke-width"(){return o()},get class(){return a()}})}),A(e,l)}var dc=_e('<div class="xra-sec-body"><!></div>'),vc=_e('<details class="xra-sec"><summary><span class="xra-sec-title"><!> <span> </span></span> <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></summary> <!></details>');function pc(e,t){kt(t,!0);const n="ui.sections_open";let r=X(Re(Wt(()=>{var d;return((d=Ue(n,{}))==null?void 0:d[t.section.id])??!1}))),i;function o(){T(r,!v(r)),st(`${n}.${t.section.id}`,v(r))}tn(()=>{Q.focusNonce,!(Q.focusSection!==t.section.id||!Q.panelOpen)&&(T(r,!0),st(`${n}.${t.section.id}`,!0),requestAnimationFrame(()=>i==null?void 0:i.scrollIntoView({block:"nearest",behavior:"smooth"})))});var a=vc(),s=B(a),l=B(s),c=B(l);qe(c,{get name(){return t.section.icon},size:15,class:"xra-sec-icon"});var f=R(c,2),p=q(f,!0),b=R(l,2);let h;var g=R(s,2);{var S=d=>{var _=dc(),y=B(_);oo(y,{get section(){return t.section}}),A(d,_)};Ge(g,d=>{v(r)&&d(S)})}Ai(a,d=>i=d,()=>i),he(d=>{a.open=v(r),Y(p,d),h=He(b,0,"xra-sec-chevron",null,h,{open:v(r)})},[()=>ne(t.section.title)]),K("click",s,d=>{d.preventDefault(),o()}),A(e,a),St()}ln(["click"]);var sr=_e('<option class="svelte-x8svx4"> </option>'),hc=_e('<div class="warn svelte-x8svx4"> </div>'),_c=_e('<div class="xra-startup svelte-x8svx4"><div class="card svelte-x8svx4" role="dialog" aria-label="XR Animator VMC"><div class="col left svelte-x8svx4"><div class="brand svelte-x8svx4"><span class="logo svelte-x8svx4">XR</span> <span class="name svelte-x8svx4">Animator <b class="svelte-x8svx4">VMC</b></span></div> <div class="sub svelte-x8svx4"> </div> <pre class="log svelte-x8svx4"> </pre> <div class="credits svelte-x8svx4">Engine: XR Animator by Butz Yung (CC BY-NC-SA 4.0)<br class="svelte-x8svx4"/> Backends: native MediaPipe · optional ONNX Runtime</div></div> <div class="col right svelte-x8svx4"><div class="group-title svelte-x8svx4"> </div> <button type="button" class="q primary svelte-x8svx4"> </button> <button type="button" class="q svelte-x8svx4"> </button> <div class="group-title svelte-x8svx4"> <span></span></div> <div class="row svelte-x8svx4"><select class="svelte-x8svx4"><!></select> <button type="button" class="q icon svelte-x8svx4"><!></button></div> <!> <div class="group-title svelte-x8svx4"> </div> <label class="field svelte-x8svx4"><span class="svelte-x8svx4"> </span> <select class="svelte-x8svx4"></select></label> <label class="field svelte-x8svx4"><span class="svelte-x8svx4"> </span> <select class="svelte-x8svx4"></select></label> <button type="button" class="q ghost svelte-x8svx4"> </button></div></div></div>');function gc(e,t){kt(t,!0);const n=()=>window.XRA,r=m=>ne(m),i=["AUTO","ECO","LOW","BALANCED","QUALITY","HIGH","MAX","CUSTOM"],o=4e3;function a(){var m,x,N;try{(N=(x=(m=n())==null?void 0:m.profileService)==null?void 0:x.save)==null||N.call(x,0)}catch{}}const s=(()=>{var x,N;const m=(N=(x=n())==null?void 0:x.i18n)==null?void 0:N.LANGUAGES;return Array.isArray(m)&&m.length?m:[["auto","Auto / System"],["en","English"],["it","Italiano"]]})();let l=X("auto"),c=X("CUSTOM"),f=X("default"),p=X(Re([])),b=X(!1),h=X(""),g=X(!1),S=X(""),d=X(""),_=X(!1),y=X(!1),w=X(!1),E=X(Re([])),k=!1,M=!1,$=0,C=0,O=[];function D(m){(v(E).length?v(E)[v(E).length-1]:"")!==m&&T(E,[...v(E),m].slice(-40),!0)}function re(){var m,x,N;k||(k=!0,C&&(clearInterval(C),C=0),a(),Q.startupOpen=!1,(N=(x=(m=n())==null?void 0:m.ui)==null?void 0:x.refresh)==null||N.call(x))}async function Ne(){var m,x;T(_,!0),D("Starting tracking…");try{await no()}catch(N){(x=(m=n()).toast)==null||x.call(m,"Tracking: "+N.message,"warn",4500)}finally{T(_,!1),re()}}async function We(m){const x=n();if(m=String(m||"CUSTOM").toUpperCase(),m==="CUSTOM"){x.config.performance.master_preset="CUSTOM",a(),D("Preset: CUSTOM");return}if(m==="AUTO"){D("Benchmarking hardware…");const N=await x.performance.benchmarkHardwareOnly();D(`AUTO → ${N.preset} (${N.fps.toFixed(1)} fps)`),await x.performance.applyPresetSafe(N.preset),x.config.performance.master_preset="AUTO",x.config.performance.auto_last_result=N,a();return}D(`Applying preset: ${m}…`),await x.performance.applyPresetSafe(m),D(`Preset ${m} applied`)}function ke(m=""){var j,ee,ie;const x=(j=n())==null?void 0:j.nativeBridge,N=((ee=x==null?void 0:x.activeCamera)==null?void 0:ee.call(x))||{},I=!!((ie=x==null?void 0:x.cameraRunning)!=null&&ie.call(x));T(g,I),T(S,m||(I?`${r("ON")} · ${N.label||r("Default camera")}`:r("OFF")),!0)}async function je(m=!1){var N,I,j;const x=(N=n())==null?void 0:N.nativeBridge;if(x!=null&&x.enumerateCameras){T(w,!0);try{const ee=await x.enumerateCameras({requestPermission:m}),ie=x.activeCamera()||{};T(p,(ee||[]).map(De=>({deviceId:De.deviceId,label:De.label})),!0);const me=ie.deviceId||((I=Ye.devices)==null?void 0:I.camera_device_id)||"";T(h,v(p).some(De=>De.deviceId===me)?me:((j=v(p)[0])==null?void 0:j.deviceId)||"",!0),T(b,!0),ke(),D(v(p).length?`${v(p).length} camera${v(p).length>1?"s":""} detected`:"No cameras found")}catch{T(b,!0),ke(r("Camera unavailable")),D("Camera enumeration failed")}finally{T(w,!1)}}}async function qt(m){var j,ee;const x=(j=n())==null?void 0:j.nativeBridge,N=((ee=m==null?void 0:m.currentTarget)==null?void 0:ee.value)??v(h),I=v(p).find(ie=>ie.deviceId===N);if(I){T(w,!0);try{const ie={deviceId:I.deviceId,label:I.label};x.cameraRunning()?await x.switchCamera(ie):await x.setCameraPreference(ie),ke(),D(`Webcam: ${I.label}`)}catch(ie){ke("Error · "+ie.message),D("Webcam switch failed")}finally{T(w,!1)}}}function ut(){var N,I,j,ee,ie,me,De,Ce;const m=(j=(I=(N=n())==null?void 0:N.xraBackend)==null?void 0:I.snapshot)==null?void 0:j.call(I),x=(m==null?void 0:m.capture)||((Ce=(De=(me=(ie=(ee=window.SA_bridge)==null?void 0:ee.backend)==null?void 0:ie.status)==null?void 0:me.call(ie))==null?void 0:De.backend)==null?void 0:Ce.capture);if(x!=null&&x.camera_busy){const ft=(x.busy_processes&&x.busy_processes.length?x.busy_processes:x.busy_process?[x.busy_process]:[]).filter(pr=>!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(String(pr).trim()));if(ft.length)return{busy:!0,proc:ft.join(", ")}}if(x!=null&&x.last_error&&x.last_error.includes("Webcam occupata")){const ge=x.last_error.match(/Webcam occupata da:\s*([^.]+)/i),ft=ge?ge[1].trim():"";if(!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(ft))return{busy:!0,proc:x.last_error}}return{busy:!1,proc:""}}function wt(){var m,x,N,I,j,ee,ie,me,De;if(typeof((x=(m=n())==null?void 0:m.nativeBridge)==null?void 0:x.isAvatarReady)=="function")return n().nativeBridge.isAvatarReady();if((N=window.MMD_SA)!=null&&N.MMD_started){const Ce=(ee=(j=(I=window.MMD_SA)==null?void 0:I.THREEX)==null?void 0:j.get_model)==null?void 0:ee.call(j,0);let ge=Ce;if((Ce==null?void 0:Ce.type)==="MMD_dummy")try{ge=Ce.model||null}catch{ge=null}const ft=((ie=ge==null?void 0:ge.model)==null?void 0:ie.scene)||(ge==null?void 0:ge.mesh)||(ge==null?void 0:ge.scene)||null;if(ge&&!(Ce!=null&&Ce.loading)&&!ge.loading&&!((De=(me=window.MMD_SA)==null?void 0:me.THREEX)!=null&&De._loading_model)&&ft)return ft.visible!==!1}return!1}function Se(){var x,N,I;const m=(x=n())==null?void 0:x.xraBackend;return!m||!m.active?!0:!!((I=(N=m.snapshot)==null?void 0:N.call(m))!=null&&I.ready)}function ze(){if(k)return;const m=ut();m.busy?(T(d,`Webcam in use by another application (${m.proc}). Close it to start tracking.`),D("Webcam is busy — close the other app")):T(d,""),wt()&&D("Avatar ready"),Se()&&D("Mocap backend ready")}function Dn(){ze(),!v(_)&&!M&&Date.now()-$>o&&re()}async function Bn(m){var N,I,j;const x=((N=m==null?void 0:m.currentTarget)==null?void 0:N.value)??v(c);T(c,x,!0),T(y,!0);try{await We(x),n().events.emit("state",{path:"performance.master_preset",value:n().config.performance.master_preset}),xl()}catch(ee){console.error("[XRA START]",ee),D("Preset error: "+ee.message)}finally{T(y,!1),(j=(I=n().ui)==null?void 0:I.refresh)==null||j.call(I)}}function Vn(m){var x,N,I,j;T(l,((x=m==null?void 0:m.currentTarget)==null?void 0:x.value)??v(l),!0),(j=(I=(N=n())==null?void 0:N.i18n)==null?void 0:I.setLanguage)==null||j.call(I,v(l))}async function P(){var m,x;try{await((x=(m=n().nativeBridge)==null?void 0:m.openVrmPicker)==null?void 0:x.call(m))}catch(N){n().toast("VRM loader: "+N.message,"error",4500)}}Mi(()=>{var N,I,j,ee,ie,me,De,Ce,ge,ft,pr,Eo,$o;const m=n();$=Date.now(),D("Initializing XR Animator VMC…"),T(l,((I=(N=m==null?void 0:m.config)==null?void 0:N.ui)==null?void 0:I.language)||"auto",!0),T(c,((ee=(j=m==null?void 0:m.config)==null?void 0:j.performance)==null?void 0:ee.master_preset)==="MINIMAL"?"ECO":((me=(ie=m==null?void 0:m.config)==null?void 0:ie.performance)==null?void 0:me.master_preset)||"CUSTOM",!0),T(f,((Ce=(De=m==null?void 0:m.config)==null?void 0:De.background)==null?void 0:Ce.path)||((ft=(ge=m==null?void 0:m.config)==null?void 0:ge.background)==null?void 0:ft.color)||"default",!0),ke(),setTimeout(()=>je(!1),100),C=setInterval(Dn,250),window.addEventListener("MMDStarted",ze),(pr=m.xraBackend)!=null&&pr.onStatus&&m.xraBackend.onStatus(ze);const x=mn=>{mn.key==="Escape"&&re()};window.addEventListener("keydown",x,!0),ze(),($o=(Eo=m.whenNativeReady)==null?void 0:Eo.call(m))==null||$o.then(()=>{Q.startupOpen&&je(!1)});for(const mn of["camera-started","camera-stopped","camera-switched"])O.push(m.events.on(mn,()=>{Q.startupOpen&&je(!1)}));for(const mn of["avatar-loading","avatar-changed","avatar-ready"])O.push(m.events.on(mn,()=>ze()));return()=>{C&&clearInterval(C),window.removeEventListener("MMDStarted",ze),window.removeEventListener("keydown",x,!0);for(const mn of O)try{mn()}catch{}O=[]}});var W=_c(),te=B(W),ve=B(te),Te=R(B(ve),2),et=q(Te,!0),Ot=R(Te,2),hn=q(Ot,!0),Ti=R(ve,2),po=B(Ti),Tc=q(po,!0),Fr=R(po,2),Cc=q(Fr,!0),Hr=R(Fr,2),Oc=q(Hr,!0),ho=R(Hr,2),_o=B(ho),Pc=R(_o);let go;var mo=R(ho,2),Kt=B(mo),Rc=B(Kt);{var Ic=m=>{var x=sr(),N=q(x,!0);x.value=x.__value="",he(I=>Y(N,I),[()=>r("Loading cameras…")]),A(m,x)},Lc=m=>{var x=sr(),N=q(x,!0);x.value=x.__value="",he(I=>Y(N,I),[()=>r("No cameras found")]),A(m,x)},zc=m=>{var x=Z(),N=G(x);jt(N,17,()=>v(p),I=>I.deviceId,(I,j)=>{var ee=sr(),ie=q(ee,!0),me={};he(()=>{Y(ie,v(j).label),me!==(me=v(j).deviceId)&&(ee.value=(ee.__value=me)??"")}),A(I,ee)}),A(m,x)};Ge(Rc,m=>{v(b)?v(p).length?m(zc,-1):m(Lc,1):m(Ic)})}var Ur;cn(Kt);var vr=R(Kt,2),Dc=B(vr);qe(Dc,{name:"RefreshCw",size:14});var yo=R(mo,2);{var Bc=m=>{var x=hc(),N=q(x,!0);he(()=>Y(N,v(d))),A(m,x)};Ge(yo,m=>{v(d)&&m(Bc)})}var wo=R(yo,2),Vc=q(wo,!0),bo=R(wo,2),xo=B(bo),Fc=q(xo,!0),_n=R(xo,2);jt(_n,20,()=>i,m=>m,(m,x)=>{var N=sr(),I=q(N,!0),j={};he(()=>{Y(I,x),j!==(j=x)&&(N.value=(N.__value=j)??"")}),A(m,N)});var Wr;cn(_n);var ko=R(bo,2),So=B(ko),Hc=q(So,!0),gn=R(So,2);jt(gn,21,()=>s,([m,x])=>m,(m,x)=>{var N=Be(()=>Wi(v(x),2));let I=()=>v(N)[0],j=()=>v(N)[1];var ee=sr(),ie=q(ee,!0),me={};he(()=>{Y(ie,j()),me!==(me=I())&&(ee.value=(ee.__value=me)??"")}),A(m,ee)});var jr;cn(gn);var Ci=R(ko,2),Uc=q(Ci,!0);he((m,x,N,I,j,ee,ie,me,De,Ce,ge,ft)=>{Y(et,m),Y(hn,x),Y(Tc,N),Fr.disabled=v(_),Y(Cc,I),Hr.disabled=v(_),Y(Oc,j),Y(_o,`${ee??""} `),go=He(Pc,1,"dot svelte-x8svx4",null,go,{on:v(g)}),Kt.disabled=v(w)||v(_),Ur!==(Ur=v(h))&&(Kt.value=(Kt.__value=Ur)??"",Lt(Kt,Ur)),Ae(vr,"title",ie),Ae(vr,"aria-label",me),vr.disabled=v(w)||v(_),Y(Vc,De),Y(Fc,Ce),_n.disabled=v(y)||v(_),Wr!==(Wr=v(c))&&(_n.value=(_n.__value=Wr)??"",Lt(_n,Wr)),Y(Hc,ge),gn.disabled=v(_),jr!==(jr=v(l))&&(gn.value=(gn.__value=jr)??"",Lt(gn,jr)),Ci.disabled=v(_),Y(Uc,ft)},[()=>r("Quick setup · changes apply immediately."),()=>v(E).join(`
`),()=>r("Quick start"),()=>v(_)?r("Starting…"):r("Start tracking"),()=>r("Load / change VRM…"),()=>r("Webcam"),()=>r("Refresh cameras"),()=>r("Refresh cameras"),()=>r("Options"),()=>r("Master preset"),()=>r("Language"),()=>r("Continue")]),K("click",W,re),K("click",te,m=>m.stopPropagation()),Tr("pointerenter",te,()=>{M=!0,$=Date.now()}),K("pointermove",te,()=>{$=Date.now()}),Tr("pointerleave",te,()=>{M=!1,$=Date.now()}),K("click",Fr,Ne),K("click",Hr,P),K("change",Kt,qt),K("click",vr,()=>je(!0)),K("change",_n,Bn),K("change",gn,Vn),K("click",Ci,re),A(e,W),St()}ln(["click","pointermove","change"]);var mc=_e('<button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button>'),yc=_e('<nav class="xra-dock group fixed left-2 top-1/2 z-[99990] flex w-[46px] max-h-[92vh] -translate-y-1/2 flex-col gap-0.5 overflow-hidden rounded-xl border border-white/10 bg-[var(--xra-ui-bg)] p-1.5 font-sans text-[12.5px] leading-snug text-[var(--xra-ui-fg)] shadow-[0_12px_40px_rgba(0,0,0,.55)] transition-[width] duration-200 hover:w-[232px]"><!> <div class="my-1 h-px bg-white/10"></div> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button></nav>');function wc(e,t){kt(t,!0);const n=()=>window.XRA;let r=X(!1),i=X(!1),o=0;function a(){var W,te,ve,Te,et;const P=n();if(P){try{T(r,!!((te=(W=P.nativeBridge)==null?void 0:W.cameraRunning)!=null&&te.call(W)))}catch{}try{T(i,!!((et=(Te=(ve=P.recorder)==null?void 0:ve.status)==null?void 0:Te.call(ve))!=null&&et.active))}catch{}}}let s=X(!1),l=X("");async function c(){var W,te,ve,Te;if(v(s))return;T(s,!0);const P=!v(r);T(l,P?"Starting…":"Stopping…",!0);try{P?(await no(),T(r,!0)):(await yl(),T(r,!1))}catch(et){try{await((te=(W=n().nativeBridge)==null?void 0:W.forceStopCamera)==null?void 0:te.call(W))}catch{}T(r,!1),(Te=(ve=n()).toast)==null||Te.call(ve,"Tracking: "+et.message,"warn",4500)}finally{T(s,!1),T(l,""),setTimeout(a,250)}}let f=X(!1),p=X("");async function b(){var W,te;if(v(f))return;T(f,!0);const P=!v(i);T(p,P?"Starting…":"Stopping…",!0);try{P?(await wl(),T(i,!0)):(await bl(),T(i,!1))}catch(ve){T(i,!1),(te=(W=n()).toast)==null||te.call(W,"Recording: "+ve.message,"warn",4500)}finally{T(f,!1),T(p,""),setTimeout(a,250)}}async function h(){var P,W,te,ve;try{await((W=(P=n().nativeBridge)==null?void 0:P.openVrmPicker)==null?void 0:W.call(P))}catch(Te){(ve=(te=n()).toast)==null||ve.call(te,"VRM loader: "+Te.message,"error",4500)}}function g(){var P,W;try{(W=(P=n().nativeBridge)==null?void 0:P.showAbout)==null||W.call(P)}catch{}}const S=[{id:"ui",icon:"Monitor",label:"UI Settings"},{id:"camera",icon:"Camera",label:"Webcam settings"},{id:"avatar",icon:"User",label:"Model settings"},{id:"second_avatar",icon:"Globe",label:"Studio link"},{id:"stage",icon:"Landmark",label:"Environment + Camera"},{id:"background",icon:"Image",label:"Background"},{id:"lip",icon:"Mic",label:"Audio"}],d="hover:bg-white/10",_="flex-1 overflow-hidden opacity-0 transition-opacity duration-150 group-hover:opacity-100";Mi(()=>(a(),o=setInterval(a,1e3),()=>clearInterval(o)));var y=yc(),w=B(y);jt(w,17,()=>S,P=>P.id,(P,W)=>{var te=mc();He(te,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var ve=B(te),Te=B(ve);qe(Te,{get name(){return v(W).icon},size:16});var et=R(ve,2);He(et,1,Tn(_));var Ot=q(et,!0);he((hn,Ti)=>{Ae(te,"title",hn),Y(Ot,Ti)},[()=>ne(v(W).label),()=>ne(v(W).label)]),K("click",te,()=>gl(v(W).id)),A(P,te)});var E=R(w,4),k=B(E),M=B(k);{let P=Be(()=>v(r)?"text-emerald-400":"");qe(M,{name:"Webcam",size:16,get class(){return v(P)}})}var $=R(k,2);He($,1,Tn(_));var C=q($,!0),O=R(E,2),D=B(O),re=B(D);{let P=Be(()=>v(f)?"Circle":v(i)?"Square":"Circle"),W=Be(()=>v(i)?"text-red-400":"");qe(re,{get name(){return v(P)},size:16,get class(){return v(W)}})}var Ne=R(D,2);He(Ne,1,Tn(_));var We=q(Ne,!0),ke=R(O,2);He(ke,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var je=B(ke),qt=B(je);qe(qt,{name:"FolderOpen",size:16});var ut=R(je,2);He(ut,1,Tn(_));var wt=q(ut,!0),Se=R(ke,2);He(Se,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var ze=B(Se),Dn=B(ze);qe(Dn,{name:"Info",size:16});var Bn=R(ze,2);He(Bn,1,Tn(_));var Vn=q(Bn,!0);he((P,W,te,ve,Te,et,Ot,hn)=>{He(E,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${v(r)?"bg-emerald-500/20 hover:bg-emerald-500/30":d} ${v(s)?"opacity-60":""}`),Ae(E,"title",P),E.disabled=v(s),Y(C,W),He(O,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${v(i)?"bg-red-500/30 hover:bg-red-500/40 text-red-200":d} ${v(f)?"opacity-60":""}`),Ae(O,"title",te),O.disabled=v(f),Y(We,ve),Ae(ke,"title",Te),Y(wt,et),Ae(Se,"title",Ot),Y(Vn,hn)},[()=>ne("Tracking"),()=>v(s)?ne(v(l)):v(r)?ne("Tracking on"):ne("Tracking off"),()=>ne("Record"),()=>v(f)?ne(v(p)):v(i)?ne("Stop recording"):ne("Record"),()=>ne("Load / change VRM…"),()=>ne("Load / change VRM…"),()=>ne("About"),()=>ne("About")]),Tr("pointerenter",y,()=>{Q.dockExpanded=!0}),Tr("pointerleave",y,()=>{Q.dockExpanded=!1}),K("click",E,c),K("click",O,b),K("click",ke,h),K("click",Se,g),A(e,y),St()}ln(["click"]);var bc=_e('<div class="absolute inset-0 z-30 grid place-items-center bg-black text-[12px] text-[var(--xra-ui-fg)]"> </div>'),xc=_e('<div class="xra-mocap-window fixed z-[99991] flex flex-col overflow-hidden rounded-xl border border-white/15 bg-[var(--xra-ui-bg)] text-[var(--xra-ui-fg)] shadow-[0_16px_48px_rgba(0,0,0,.6)] font-sans"><header class="flex shrink-0 cursor-move touch-none select-none items-center gap-2 px-2 py-1.5"><!> <span class="flex-1 text-[12px] font-semibold"> </span> <select class="rounded-md border border-white/15 bg-[#101214] px-1.5 py-0.5 text-[11px] text-[var(--xra-ui-fg)]"><option> </option><option> </option><option> </option><option> </option></select> <button type="button" class="rounded-md border border-white/15 bg-white/5 px-1.5 py-0.5 cursor-pointer text-[var(--xra-ui-fg)]"><!></button></header> <div class="relative min-h-0 flex-1 overflow-hidden bg-black"><!> <div class="absolute bottom-0 right-0 z-20 h-5 w-5 cursor-nwse-resize touch-none"></div></div></div>');function kc(e,t){kt(t,!0);const n=()=>window.XRA,r=Ue("ui.mocap_window",{})||{};let i=X(Re(Number.isFinite(r.x)?r.x:48)),o=X(Re(Number.isFinite(r.y)?r.y:96)),a=X(Re(Number.isFinite(r.w)?r.w:360)),s=X(Re(Number.isFinite(r.h)?r.h:270)),l=X(void 0),c=X(!1),f=0;const p=Be(()=>Ue("ui.mocap_visibility","always")!=="auto"||v(c));function b(){st("ui.mocap_window",{x:Math.round(v(i)),y:Math.round(v(o)),w:Math.round(v(a)),h:Math.round(v(s))})}function h(){var y,w,E;try{(E=(w=(y=n())==null?void 0:y.nativeBridge)==null?void 0:w.updateMocapWindow)==null||E.call(w)}catch{}}function g(y,w){y.preventDefault();const E=y.clientX,k=y.clientY,M=v(i),$=v(o),C=v(a),O=v(s),D=Ne=>{const We=Ne.clientX-E,ke=Ne.clientY-k;w==="move"?(T(i,Math.max(0,Math.min(window.innerWidth-80,M+We)),!0),T(o,Math.max(0,Math.min(window.innerHeight-30,$+ke)),!0)):(T(a,Math.max(200,Math.min(window.innerWidth-v(i),C+We)),!0),T(s,Math.max(130,Math.min(window.innerHeight-v(o),O+ke)),!0))},re=()=>{window.removeEventListener("pointermove",D),window.removeEventListener("pointerup",re),b()};window.addEventListener("pointermove",D),window.addEventListener("pointerup",re)}tn(()=>{var w,E,k;const y=v(l);if(y){try{(k=(E=(w=n())==null?void 0:w.nativeBridge)==null?void 0:E.attachMocapWindow)==null||k.call(E,y)}catch{}return()=>{var M,$,C;try{(C=($=(M=n())==null?void 0:M.nativeBridge)==null?void 0:$.detachMocapWindow)==null||C.call($)}catch{}}}}),tn(()=>{v(i),v(o),v(a),v(s),v(c),h()}),Mi(()=>{const y=()=>{var w,E,k;T(c,!!((k=(E=(w=n())==null?void 0:w.nativeBridge)==null?void 0:E.cameraRunning)!=null&&k.call(E)))};return y(),f=setInterval(y,500),window.addEventListener("resize",h),()=>{clearInterval(f),window.removeEventListener("resize",h)}});var S=Z(),d=G(S);{var _=y=>{var w=xc(),E=B(w),k=B(E);qe(k,{name:"Activity",size:14});var M=R(k,2),$=q(M,!0),C=R(M,2),O=B(C),D=q(O,!0);O.value=O.__value="both";var re=R(O),Ne=q(re,!0);re.value=re.__value="wireframe";var We=R(re),ke=q(We,!0);We.value=We.__value="video";var je=R(We),qt=q(je,!0);je.value=je.__value="off";var ut;cn(C);var wt=R(C,2),Se=B(wt);qe(Se,{name:"X",size:13});var ze=R(E,2),Dn=B(ze);{var Bn=P=>{var W=bc(),te=q(W,!0);he(ve=>Y(te,ve),[()=>ne("Tracking is off")]),A(P,W)};Ge(Dn,P=>{v(c)||P(Bn)})}var Vn=R(Dn,2);Ai(ze,P=>T(l,P),()=>v(l)),he((P,W,te,ve,Te,et,Ot,hn)=>{Or(w,`left:${v(i)??""}px; top:${v(o)??""}px; width:${v(a)??""}px; height:${v(s)??""}px;`),Y($,P),Y(D,W),Y(Ne,te),Y(ke,ve),Y(qt,Te),ut!==(ut=et)&&(C.value=(C.__value=ut)??"",Lt(C,ut)),Ae(wt,"title",Ot),Ae(Vn,"title",hn)},[()=>ne("Mocap"),()=>ne("Webcam + skeleton"),()=>ne("Skeleton only"),()=>ne("Webcam only"),()=>ne("Off"),()=>Ue("ui.mocap_view","off"),()=>ne("Close"),()=>ne("Resize")]),K("pointerdown",E,P=>g(P,"move")),K("change",C,P=>st("ui.mocap_view",P.currentTarget.value)),K("pointerdown",C,P=>P.stopPropagation()),K("click",wt,()=>st("ui.mocap_view","off")),K("pointerdown",wt,P=>P.stopPropagation()),K("pointerdown",Vn,P=>{P.stopPropagation(),g(P,"resize")}),A(y,w)};Ge(d,y=>{v(p)&&y(_)})}A(e,S),St()}ln(["pointerdown","change","click"]);var Sc=_e('<aside class="xra-section-popup fixed top-1/2 z-[99992] flex max-h-[72vh] w-[320px] -translate-y-1/2 flex-col overflow-hidden rounded-xl border border-white/12 bg-[var(--xra-ui-bg)] text-[12.5px] leading-[1.45] text-[var(--xra-ui-fg)] shadow-[0_16px_48px_rgba(0,0,0,.6)] font-sans transition-[left] duration-200"><header class="flex shrink-0 items-center gap-2 border-b border-white/10 bg-[var(--xra-ui-bg2)] px-3 py-2"><!> <span class="text-[12.5px] font-semibold"> </span></header> <div class="min-h-0 flex-1 overflow-auto px-2.5 py-2"><!></div></aside>');function Ec(e,t){kt(t,!0);let n;tn(()=>{const f=b=>{const h=b.target;n&&h instanceof Node&&n.contains(h)||h instanceof Element&&h.closest(".xra-dock")||(Q.popupSection=null)},p=b=>{b.key==="Escape"&&(Q.popupSection=null)};return document.addEventListener("pointerdown",f,!0),window.addEventListener("keydown",p,!0),()=>{document.removeEventListener("pointerdown",f,!0),window.removeEventListener("keydown",p,!0)}});var r=Sc(),i=B(r),o=B(i);qe(o,{get name(){return t.section.icon},size:15,class:"text-[var(--xra-ui-dim)]"});var a=R(o,2),s=q(a,!0),l=R(i,2),c=B(l);oo(c,{get section(){return t.section}}),Ai(r,f=>n=f,()=>n),he(f=>{Or(r,`left:${Q.dockExpanded?248:62}px;`),Y(s,f)},[()=>ne(t.section.title)]),A(e,r),St()}var $c=_e('<aside class="xra-panel"><header class="xra-panel-head"><strong>XR Animator</strong> <span class="xra-spacer"></span> <button><!></button> <button title="Close panel"><!></button></header> <div class="xra-panel-body"></div></aside>'),Ac=_e('<button class="xra-panel-launcher"><!></button>'),Mc=_e("<!> <!> <!> <!> <!>",1);function Nc(e,t){kt(t,!0),kl();const n=Be(()=>Ml(Ye));var r=Mc(),i=G(r);{var o=d=>{wc(d,{})};Ge(i,d=>{Q.ready&&d(o)})}var a=R(i,2);{var s=d=>{const _=Be(()=>v(n).find(k=>k.id===Q.popupSection));var y=Z(),w=G(y);{var E=k=>{Ec(k,{get section(){return v(_)}})};Ge(w,k=>{v(_)&&k(E)})}A(d,y)};Ge(a,d=>{Q.ready&&Q.popupSection&&d(s)})}var l=R(a,2);{var c=d=>{kc(d,{})},f=Be(()=>Q.ready&&Ue("ui.mocap_view","off")!=="off");Ge(l,d=>{v(f)&&d(c)})}var p=R(l,2);{var b=d=>{var C,O,D;var _=$c(),y=B(_),w=R(B(y),4);Ae(w,"title",((D=(O=(C=window.XRA)==null?void 0:C.i18n)==null?void 0:O.t)==null?void 0:D.call(O,"Clean screen mode (Press Esc to restore)"))||"Clean screen (Esc)");var E=B(w);qe(E,{name:"EyeOff",size:15});var k=R(w,2),M=B(k);qe(M,{name:"X",size:15});var $=R(y,2);jt($,21,()=>v(n),re=>re.id,(re,Ne)=>{pc(re,{get section(){return v(Ne)}})}),K("click",w,function(...re){zr==null||zr.apply(this,re)}),K("click",k,()=>Q.panelOpen=!1),A(d,_)},h=d=>{var _=Ac(),y=B(_);qe(y,{name:"Settings",size:16}),K("click",_,()=>{Q.panelOpen=!0,ro()}),A(d,_)};Ge(p,d=>{Q.ready&&Q.panelOpen?d(b):Q.ready&&d(h,1)})}var g=R(p,2);{var S=d=>{gc(d,{})};Ge(g,d=>{Q.ready&&Q.startupOpen&&d(S)})}A(e,r),St()}ln(["click"]),window.XRA_SVELTE_UI=!0;function co(){let e=document.getElementById("XRA_SVELTE");e||(e=document.createElement("div"),e.id="XRA_SVELTE",document.body.appendChild(e)),Gs(Nc,{target:e})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",co):co()})();

})();
