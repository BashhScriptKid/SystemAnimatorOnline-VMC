(function(){
var Wc=Object.defineProperty;var $s=fe=>{throw TypeError(fe)};var jc=(fe,ae,xe)=>ae in fe?Wc(fe,ae,{enumerable:!0,configurable:!0,writable:!0,value:xe}):fe[ae]=xe;var tt=(fe,ae,xe)=>jc(fe,typeof ae!="symbol"?ae+"":ae,xe),Oi=(fe,ae,xe)=>ae.has(fe)||$s("Cannot "+xe);var u=(fe,ae,xe)=>(Oi(fe,ae,"read from private field"),xe?xe.call(fe):ae.get(fe)),V=(fe,ae,xe)=>ae.has(fe)?$s("Cannot add the same private member more than once"):ae instanceof WeakSet?ae.add(fe):ae.set(fe,xe),D=(fe,ae,xe,Zt)=>(Oi(fe,ae,"write to private field"),Zt?Zt.call(fe,xe):ae.set(fe,xe),xe),U=(fe,ae,xe)=>(Oi(fe,ae,"access private method"),xe);(function(){"use strict";var us,Cn,Gt,un,On,Pn,Rn,zt,In,Ke,lr,Dt,mt,Nt,Ln,fn,J,Pi,Ri,hr,Ii,As,Ms,Fn,Xc,_r,fs,lt,Ni,ct,dn,ze,Ze,De,Qe,Tt,vn,Yt,zn,cr,ur,Bt,Br,le,Gc,Yc,Li,qc,zi,gr,Xr,Di,Bi,yt,Ct,Je,pn,fr,dr,Vr,ds;var ae=Array.isArray,xe=Array.prototype.indexOf,Zt=Array.prototype.includes,mr=Array.from,Vi=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,Fi=Object.getOwnPropertyDescriptors,Ns=Object.prototype,Ts=Array.prototype,Gr=Object.getPrototypeOf,Hi=Object.isExtensible;function Hn(e){return typeof e=="function"}const Cs=()=>{};function Os(e){return e()}function Yr(e){for(var t=0;t<e.length;t++)e[t]()}function Ui(){var e,t,n=new Promise((r,i)=>{e=r,t=i});return{promise:n,resolve:e,reject:t}}function Wi(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const n=[];for(const r of e)if(n.push(r),n.length===t)break;return n}const Te=2,yn=4,Un=8,qr=1<<24,dt=16,nt=32,Pt=64,Kr=128,Zr=256,vt=512,ke=1024,we=2048,rt=4096,Re=8192,Ie=16384,wn=32768,yr=1<<25,Ft=65536,wr=1<<17,Ps=1<<18,bn=1<<19,ji=1<<20,bt=1<<25,br=1<<21,xn=1<<22,Ht=1<<23,xt=Symbol("$state"),Xi=Symbol("component"),Gi=Symbol("legacy props"),Rs=Symbol(""),xr=Symbol("attributes"),Qr=Symbol("class"),Jr=Symbol("style"),Wn=Symbol("text"),jn=new class extends Error{constructor(){super(...arguments);tt(this,"name","StaleReactionError");tt(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},kr=!!((us=globalThis.document)!=null&&us.contentType)&&globalThis.document.contentType.includes("xml"),Is=1,Ls=2,Yi=4,zs=8,Ds=16,Bs=1,Vs=2,qi=4,Fs=8,Hs=16,Us=1,Ws=2,be=Symbol("uninitialized"),Ki="http://www.w3.org/1999/xhtml",js="http://www.w3.org/2000/svg",Xs="@attach";function Gs(){console.warn("https://svelte.dev/e/derived_inert")}function Ys(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function qs(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Zi(e){return e===this.v}function Ks(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Qi(e){return!Ks(e,this.v)}function Zs(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Qs(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Js(e,t,n){throw new Error("https://svelte.dev/e/each_key_duplicate")}function eo(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function to(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function no(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ro(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function io(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function ao(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function so(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function oo(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function lo(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let kn=!1,Kc=!1;function co(){kn=!0}let de=null;function Sn(e){de=e}function kt(e,t=!1,n){de={p:de,i:!1,c:null,e:null,s:e,x:null,r:H,l:kn&&!t?{s:null,u:null,$:[]}:null}}function St(e){var t=de,n=t.e;if(n!==null){t.e=null;for(var r of n)wa(r)}return t.i=!0,de=t.p,ei(e)}function ei(e={}){return Vi(e,Xi,{value:!0}),e}function Xn(){return!kn||de!==null&&de.l===null}let En=[];function uo(){var e=En;En=[],Yr(e)}function Et(e){if(En.length===0){var t=En;queueMicrotask(()=>{t===En&&uo()})}En.push(e)}const fo=-7169;function pe(e,t){e.f=e.f&fo|t}function ti(e){(e.f&vt)!==0||e.deps===null?pe(e,ke):pe(e,rt)}function Ji(e,t,n){(e.f&we)!==0?t.add(e):(e.f&rt)!==0&&n.add(e),pe(e,ke)}function vo(e,t){if(t){const n=document.body;e.autofocus=!0,Et(()=>{document.activeElement===n&&e.focus()})}}function Gn(e){var t=F,n=H;it(null),at(null);try{return e()}finally{it(t),at(n)}}function ea(e,t,n,r){const i=Xn()?$n:ni;var s=e.filter(h=>!h.settled),a=t.map(i);if(n.length===0&&s.length===0){r(a);return}var o=H,l=po(),c=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(h=>h.promise)):null;function f(h){if((o.f&Ie)===0){l();try{r([...a,...h])}catch(g){At(g,o)}Sr()}}var p=ta();if(n.length===0){c.then(()=>f([])).finally(p);return}function b(){Promise.all(n.map(h=>ho(h))).then(f).catch(h=>At(h,o)).finally(p)}c?c.then(()=>{l(),b(),Sr()}):b()}function po(){var e=H,t=F,n=de,r=z;return function(s=!0){at(e),it(t),Sn(n),s&&(e.f&Ie)===0&&(r==null||r.activate(),r==null||r.apply())}}function Sr(e=!0){at(null),it(null),Sn(null),e&&(z==null||z.deactivate())}function ta(){var e=H,t=e.b,n=z,r=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,n),n.increment(r,e),()=>{t==null||t.update_pending_count(-1,n),n.decrement(r,e)}}function $n(e){var t=Te|we;return H!==null&&(H.f|=bn),{ctx:de,deps:null,effects:null,equals:Zi,f:t,fn:e,reactions:null,rv:0,v:be,wv:0,parent:H,ac:null}}const Yn=Symbol("obsolete");function ho(e,t,n){let r=H;r===null&&Qs();var i=void 0,s=Ut(be),a=!F,o=new Set;return Mo(()=>{var h,g;var l=H,c=Ui();i=c.promise;try{Promise.resolve(e()).then(c.resolve,S=>{S!==jn&&c.reject(S)}).finally(Sr)}catch(S){c.reject(S),Sr()}var f=z;if(a){if((l.f&wn)!==0)var p=ta();if((h=r.b)!=null&&h.is_rendered())(g=f.async_deriveds.get(l))==null||g.reject(Yn);else for(const S of o.values())S.reject(Yn);o.add(c),f.async_deriveds.set(l,c)}const b=(S,d=void 0)=>{p==null||p(),o.delete(c),d!==Yn&&(f.activate(),d?(s.f|=Ht,Mn(s,d)):((s.f&Ht)!==0&&(s.f^=Ht),Mn(s,S)),f.deactivate())};c.promise.then(b,S=>b(null,S||"unknown"))}),Ar(()=>{for(const l of o)l.reject(Yn)}),new Promise(l=>{function c(f){function p(){f===i?l(s):c(i)}f.then(p,p)}c(i)})}function Fe(e){const t=$n(e);return Ma(t),t}function ni(e){const t=$n(e);return t.equals=Qi,t}function _o(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)Me(t[n])}}function ri(e){var t,n=H,r=e.parent;if(!It&&r!==null&&e.v!==be&&(r.f&(Ie|Re))!==0)return Gs(),e.v;at(r);try{_o(e),t=Pa(e)}finally{at(n)}return t}function na(e){var t=ri(e);if(!e.equals(t)&&(e.wv=Ca(),(!(z!=null&&z.is_fork)||e.deps===null)&&(z!==null?(z.capture(e,t,!0),qn==null||qn.capture(e,t,!0)):e.v=t,e.deps===null))){pe(e,ke);return}It||(Ae!==null?(fi()||z!=null&&z.is_fork)&&Ae.set(e,t):ti(e))}function go(e){var t;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),n.ac!==null&&Gn(()=>{n.ac.abort(jn),n.ac=null}),n.fn!==null&&(n.teardown=Cs),tr(n,0),vi(n))}function ra(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&Nn(t)}let ii=null,An=null,z=null,qn=null,Ae=null,ai=null,si=!1,Kn=null,Er=null;var ia=0,Zc=new Set;let mo=1;const Dr=class Dr{constructor(){V(this,J);tt(this,"id",mo++);V(this,Cn,!1);tt(this,"linked",!0);V(this,Gt,null);V(this,un,null);tt(this,"async_deriveds",new Map);tt(this,"current",new Map);tt(this,"previous",new Map);V(this,On,new Set);V(this,Pn,new Set);V(this,Rn,0);V(this,zt,new Map);V(this,In,null);V(this,Ke,[]);V(this,lr,[]);V(this,Dt,new Set);V(this,mt,new Set);V(this,Nt,new Map);V(this,Ln,new Set);tt(this,"is_fork",!1);V(this,fn,!1);An===null?ii=An=this:(D(An,un,this),D(this,Gt,An)),An=this}skip_effect(t){u(this,Nt).has(t)||u(this,Nt).set(t,{d:[],m:[]}),u(this,Ln).delete(t)}unskip_effect(t,n=r=>this.schedule(r)){var r=u(this,Nt).get(t);if(r){u(this,Nt).delete(t);for(var i of r.d)pe(i,we),n(i);for(i of r.m)pe(i,rt),n(i)}u(this,Ln).add(t)}capture(t,n,r=!1){t.v!==be&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&Ht)===0&&(this.current.set(t,[n,r]),Ae==null||Ae.set(t,n)),this.is_fork||(t.v=n)}activate(){z=this}deactivate(){z=null,Ae=null}flush(){try{si=!0,z=this,U(this,J,hr).call(this)}finally{ia=0,ai=null,Kn=null,Er=null,si=!1,z=null,Ae=null,$t.clear()}}discard(){var t;for(const n of u(this,Pn))n(this);u(this,Pn).clear();for(const n of this.async_deriveds.values())n.reject(Yn);U(this,J,_r).call(this),(t=u(this,In))==null||t.resolve()}register_created_effect(t){u(this,lr).push(t)}increment(t,n){if(D(this,Rn,u(this,Rn)+1),t){let r=u(this,zt).get(n)??0;u(this,zt).set(n,r+1)}}decrement(t,n){if(D(this,Rn,u(this,Rn)-1),t){let r=u(this,zt).get(n)??0;r===1?u(this,zt).delete(n):u(this,zt).set(n,r-1)}u(this,fn)||(D(this,fn,!0),Et(()=>{D(this,fn,!1),this.linked&&this.flush()}))}transfer_effects(t,n){for(const r of t)u(this,Dt).add(r);for(const r of n)u(this,mt).add(r);t.clear(),n.clear()}oncommit(t){u(this,On).add(t)}ondiscard(t){u(this,Pn).add(t)}settled(){return(u(this,In)??D(this,In,Ui())).promise}static ensure(){if(z===null){const t=z=new Dr;si||Et(()=>{u(t,Cn)||t.flush()})}return z}apply(){{Ae=null;return}}schedule(t){var n;if(ai=t,(n=t.b)!=null&&n.is_pending&&(t.f&(yn|Un|qr))!==0&&(t.f&wn)===0){t.b.defer_effect(t);return}u(this,Ke).push(t)}};Cn=new WeakMap,Gt=new WeakMap,un=new WeakMap,On=new WeakMap,Pn=new WeakMap,Rn=new WeakMap,zt=new WeakMap,In=new WeakMap,Ke=new WeakMap,lr=new WeakMap,Dt=new WeakMap,mt=new WeakMap,Nt=new WeakMap,Ln=new WeakMap,fn=new WeakMap,J=new WeakSet,Pi=function(){if(this.is_fork)return!0;for(const r of u(this,zt).keys()){for(var t=r,n=!1;t.parent!==null;){if(u(this,Nt).has(t)){n=!0;break}t=t.parent}if(!n)return!0}return!1},Ri=function(){var t=[];for(const s of u(this,Ke))if(!((s.f&Ie)!==0||(s.f&(we|rt))===0)){for(var n=s,r=!1;n.parent!==null;){n=n.parent;var i=n.f;if((i&(Pt|nt))!==0){if((i&ke)===0){r=!0;break}n.f^=ke}}r||t.push(n)}return D(this,Ke,[]),t},hr=function(){var o,l,c,f;D(this,Cn,!0);for(const p of u(this,Dt))u(this,mt).delete(p),pe(p,we),this.schedule(p);for(const p of u(this,mt))pe(p,rt),this.schedule(p);this.apply();for(var t=Kn=[],n=[],r=Er=[];u(this,Ke).length>0;){ia++>1e3&&(U(this,J,_r).call(this),yo());for(const p of U(this,J,Ri).call(this))try{U(this,J,Ii).call(this,p,t,n)}catch(b){throw la(p),U(this,J,Pi).call(this)||this.discard(),b}}if(z=null,r.length>0){var i=Dr.ensure();for(const p of r)i.schedule(p)}if(Kn=null,Er=null,U(this,J,Pi).call(this)){U(this,J,Fn).call(this,n),U(this,J,Fn).call(this,t);for(const[p,b]of u(this,Nt))oa(p,b);r.length>0&&U(o=z,J,hr).call(o);return}const s=U(this,J,As).call(this);if(s){U(this,J,Fn).call(this,n),U(this,J,Fn).call(this,t),U(l=s,J,Ms).call(l,this);return}u(this,Dt).clear(),u(this,mt).clear();for(const p of u(this,On))p(this);u(this,On).clear(),qn=this,aa(n),aa(t),qn=null,(c=u(this,In))==null||c.resolve();var a=z;if(u(this,Rn)===0&&(u(this,Ke).length===0||a!==null)&&U(this,J,_r).call(this),u(this,Ke).length>0)if(a!==null){for(const p of u(this,Ke))u(a,Ke).push(p);D(this,Ke,[])}else a=this;a!==null&&($t.clear(),U(f=a,J,hr).call(f))},Ii=function(t,n,r){t.f^=ke;for(var i=t.first;i!==null;){var s=i.f,a=(s&(nt|Pt))!==0,o=a&&(s&ke)!==0,l=o||(s&Re)!==0||u(this,Nt).has(i);if(!l&&i.fn!==null){a?i.f^=ke:(s&yn)!==0?n.push(i):er(i)&&((s&dt)!==0&&u(this,mt).add(i),Nn(i));var c=i.first;if(c!==null){i=c;continue}}for(;i!==null;){var f=i.next;if(f!==null){i=f;break}i=i.parent}}},As=function(){for(var t=u(this,Gt);t!==null;){if(!t.is_fork){for(const[n,[,r]]of this.current)if(t.current.has(n)&&!r)return t}t=u(t,Gt)}return null},Ms=function(t){var r;for(const[i,s]of t.current)!this.previous.has(i)&&t.previous.has(i)&&this.previous.set(i,t.previous.get(i)),this.current.set(i,s);for(const[i,s]of t.async_deriveds){const a=this.async_deriveds.get(i);a&&s.promise.then(a.resolve).catch(a.reject)}t.async_deriveds.clear(),this.transfer_effects(u(t,Dt),u(t,mt));const n=i=>{var s=i.reactions;if(s!==null&&!((i.f&Te)!==0&&(i.f&(we|rt))===0))for(const l of s){var a=l.f;if((a&Te)!==0)n(l);else{var o=l;a&(xn|dt)&&!this.async_deriveds.has(o)&&(u(this,mt).delete(o),pe(o,we),this.schedule(o))}}};for(const i of this.current.keys())n(i);this.oncommit(()=>t.discard()),U(r=t,J,_r).call(r),z=this,U(this,J,hr).call(this)},Fn=function(t){for(var n=0;n<t.length;n+=1)Ji(t[n],u(this,Dt),u(this,mt))},Xc=function(){var p,b;for(let h=ii;h!==null;h=u(h,un)){var t=h.id<this.id,n=[];for(const[g,[S,d]]of this.current){if(h.current.has(g)){var r=h.current.get(g)[0];if(t&&S!==r)h.current.set(g,[S,d]);else continue}n.push(g)}if(t)for(const[g,S]of this.async_deriveds){const d=h.async_deriveds.get(g);d&&S.promise.then(d.resolve).catch(d.reject)}var i=[...h.current.keys()].filter(g=>!h.current.get(g)[1]);if(!(!u(h,Cn)||i.length===0)){var s=i.filter(g=>!this.current.has(g));if(s.length===0)t&&h.discard();else if(n.length>0){if(t)for(const g of u(this,Ln))h.unskip_effect(g,S=>{var d;(S.f&(dt|xn))!==0?h.schedule(S):U(d=h,J,Fn).call(d,[S])});h.activate();var a=new Set,o=new Map;for(var l of n)sa(l,s,a,o);o=new Map;var c=[...h.current].filter(([g,S])=>{const d=this.current.get(g);return d?d[0]!==S[0]||d[1]!==S[1]:!0}).map(([g])=>g);if(c.length>0)for(const g of u(this,lr))(g.f&(Ie|Re|wr))===0&&oi(g,c,o)&&((g.f&(xn|dt))!==0?(pe(g,we),h.schedule(g)):u(h,Dt).add(g));if(u(h,Ke).length>0&&!u(h,fn)){h.apply();for(var f of U(p=h,J,Ri).call(p))U(b=h,J,Ii).call(b,f,[],[])}h.deactivate()}}}},_r=function(){if(this.linked){var t=u(this,Gt),n=u(this,un);t===null?ii=n:D(t,un,n),n===null?An=t:D(n,Gt,t),this.linked=!1}};let Qt=Dr;function yo(){try{ro()}catch(e){At(e,ai)}}let pt=null;function aa(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(Ie|Re))===0&&er(r)&&(pt=new Set,Nn(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Sa(r),(pt==null?void 0:pt.size)>0)){$t.clear();for(const i of pt){if((i.f&(Ie|Re))!==0)continue;const s=[i];let a=i.parent;for(;a!==null;)pt.has(a)&&(pt.delete(a),s.push(a)),a=a.parent;for(let o=s.length-1;o>=0;o--){const l=s[o];(l.f&(Ie|Re))===0&&Nn(l)}}pt.clear()}}pt=null}}function sa(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const i of e.reactions){const s=i.f;(s&Te)!==0?sa(i,t,n,r):(s&(xn|dt))!==0&&(s&we)===0&&oi(i,t,r)&&(pe(i,we),li(i))}}function oi(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const i of e.deps){if(Zt.call(t,i))return!0;if((i.f&Te)!==0&&oi(i,t,n))return n.set(i,!0),!0}return n.set(e,!1),!1}function li(e){z.schedule(e)}function oa(e,t){if(!((e.f&nt)!==0&&(e.f&ke)!==0)){(e.f&we)!==0?t.d.push(e):(e.f&rt)!==0&&t.m.push(e),pe(e,ke);for(var n=e.first;n!==null;)oa(n,t),n=n.next}}function la(e){pe(e,ke);for(var t=e.first;t!==null;)la(t),t=t.next}let $r=new Set;const $t=new Map;let ca=!1;function Ut(e,t){var n={f:0,v:e,reactions:null,equals:Zi,rv:0,wv:0};return n}function Y(e,t){const n=Ut(e);return Ma(n),n}function wo(e,t=!1,n=!0){var i;const r=Ut(e);return t||(r.equals=Qi),kn&&n&&de!==null&&de.l!==null&&((i=de.l).s??(i.s=[])).push(r),r}function C(e,t,n=!1){F!==null&&(!_t||(F.f&wr)!==0)&&Xn()&&(F.f&(Te|dt|xn|wr))!==0&&(Mt===null||!Mt.has(e))&&oo();let r=n?Le(t):t;return Mn(e,r,Er)}var Jt=null,ci=0;function Mn(e,t,n=null){if(!e.equals(t)){It?$t.set(e,t):$t.has(e)||$t.set(e,e.v);var r=Qt.ensure();if(r.capture(e,t),(e.f&Te)!==0){const i=e;(e.f&we)!==0&&ri(i),Ae===null&&ti(i)}e.wv=Ca(),Jt=null,ci=0,fa(e,we,n),Jt=null,Xn()&&H!==null&&(H.f&ke)!==0&&(H.f&(nt|Pt))===0&&(st===null?Co([e]):st.push(e)),!r.is_fork&&$r.size>0&&!ca&&bo()}return t}function bo(){ca=!1;for(const e of $r){(e.f&ke)!==0&&pe(e,rt);let t;try{t=er(e)}catch{t=!0}t&&Nn(e)}$r.clear()}function ua(e,t=1){var n=v(e),r=t===1?n++:n--;return C(e,n),r}function Zn(e){C(e,e.v+1)}function fa(e,t,n){var r=e.reactions;if(r!==null){var i=Xn(),s=r.length;if(ci+=s,ci>1e5&&Jt===null&&(Jt=new Set),Jt!==null){if(Jt.has(e))return;Jt.add(e)}for(var a=0;a<s;a++){var o=r[a],l=o.f;if(!(!i&&o===H)){var c=(l&we)===0;if(c&&pe(o,t),(l&wr)!==0)$r.add(o);else if((l&Te)!==0){var f=o;Ae==null||Ae.delete(f),fa(f,rt,n)}else if(c){var p=o;(l&dt)!==0&&pt!==null&&pt.add(p),n!==null?n.push(p):li(p)}}}}}function Le(e){if(typeof e!="object"||e===null||xt in e||Xi in e)return e;const t=Gr(e);if(t!==Ns&&t!==Ts)return e;var n=new Map,r=ae(e),i=Y(0),s=an,a=o=>{if(an===s)return o();var l=F,c=an;it(null),Ta(s);var f=o();return it(l),Ta(c),f};return r&&n.set("length",Y(e.length)),new Proxy(e,{defineProperty(o,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&ao();var f=n.get(l);return f===void 0?a(()=>{var p=Y(c.value);return n.set(l,p),p}):C(f,c.value,!0),!0},deleteProperty(o,l){var c=n.get(l);if(c===void 0){if(l in o){const f=a(()=>Y(be));n.set(l,f),Zn(i)}}else C(c,be),Zn(i);return!0},get(o,l,c){var h;if(l===xt)return e;var f=n.get(l),p=l in o;if(f===void 0&&(!p||(h=Vt(o,l))!=null&&h.writable)&&(f=a(()=>{var g=Le(p?o[l]:be),S=Y(g);return S}),n.set(l,f)),f!==void 0){var b=v(f);return b===be?void 0:b}return Reflect.get(o,l,c)},getOwnPropertyDescriptor(o,l){var b;(b=this.has)==null||b.call(this,o,l);var c=Reflect.getOwnPropertyDescriptor(o,l),f=n.get(l);if(f!==void 0){var p=v(f);if(p===be)return;if(c&&"value"in c)c.value=p;else return{enumerable:!0,configurable:!0,value:p,writable:!0}}return c},has(o,l){var b;if(l===xt)return!0;var c=n.get(l),f=c!==void 0&&c.v!==be||Reflect.has(o,l);if(c!==void 0||H!==null&&(!f||(b=Vt(o,l))!=null&&b.writable)){c===void 0&&(c=a(()=>{var h=f?Le(o[l]):be,g=Y(h);return g}),n.set(l,c));var p=v(c);if(p===be)return!1}return f},set(o,l,c,f){var w;var p=n.get(l),b=l in o;if(r&&l==="length")for(var h=c;h<p.v;h+=1){var g=n.get(h+"");g!==void 0?C(g,be):h in o&&(g=a(()=>Y(be)),n.set(h+"",g))}if(p===void 0)(!b||(w=Vt(o,l))!=null&&w.writable)&&(p=a(()=>Y(void 0)),C(p,Le(c)),n.set(l,p));else{b=p.v!==be;var S=a(()=>Le(c));C(p,S)}var d=Reflect.getOwnPropertyDescriptor(o,l);if(d!=null&&d.set&&d.set.call(f,c),!b){if(r&&typeof l=="string"){var _=n.get("length"),y=Number(l);Number.isInteger(y)&&y>=_.v&&C(_,y+1)}Zn(i)}return!0},ownKeys(o){v(i);var l=Reflect.ownKeys(o).filter(p=>{var b=n.get(p);return b===void 0||b.v!==be});for(var[c,f]of n)f.v!==be&&!(c in o)&&l.push(c);return l},setPrototypeOf(){so()}})}function da(e){try{if(e!==null&&typeof e=="object"&&xt in e)return e[xt]}catch{}return e}function va(e,t){return Object.is(da(e),da(t))}var pa,ha,_a,ga;function xo(){if(pa===void 0){pa=window,ha=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;_a=Vt(t,"firstChild").get,ga=Vt(t,"nextSibling").get,Hi(e)&&(e[Qr]=void 0,e[xr]=null,e[Jr]=void 0,e.__e=void 0),Hi(n)&&(n[Wn]=void 0)}}function Rt(e=""){return document.createTextNode(e)}function en(e){return _a.call(e)}function Qn(e){return ga.call(e)}function B(e,t){return en(e)}function q(e,t=!1){{var n=en(e);return n instanceof Comment&&n.data===""?Qn(n):n}}function G(e,t=!1){return en(e)}function O(e,t=1,n=!1){let r=e;for(;t--;)r=Qn(r);return r}function ko(e){e.textContent=""}function ma(){return!1}function ui(e,t,n){return t==null||t===Ki?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function So(e){var t=H;if(t===null)return F.f|=Ht,e;if((t.f&wn)===0&&(t.f&yn)===0)throw e;At(e,t)}function At(e,t){if(!(t!==null&&(t.f&Ie)!==0)){for(;t!==null;){if((t.f&Kr)!==0&&(t.f&(Ie|yr))===0){if((t.f&wn)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}}function ya(e){H===null&&(F===null&&no(),to()),It&&eo()}function Eo(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function ht(e,t){var n=H;n!==null&&(n.f&Re)!==0&&(e|=Re);var r={ctx:de,deps:null,nodes:null,f:e|we|vt,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};z==null||z.register_created_effect(r);var i=r;if((e&yn)!==0)Kn!==null?Kn.push(r):Qt.ensure().schedule(r);else if(t!==null){try{Nn(r)}catch(a){throw Me(r),a}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&bn)===0&&(i=i.first,(e&dt)!==0&&(e&Ft)!==0&&i!==null&&(i.f|=Ft))}if(i!==null&&(i.parent=n,n!==null&&Eo(i,n),F!==null&&(F.f&Te)!==0&&(e&Pt)===0)){var s=F;(s.effects??(s.effects=[])).push(i)}return r}function fi(){return F!==null&&!_t}function Ar(e){const t=ht(Un,null);return pe(t,ke),t.teardown=e,t}function tn(e){ya();var t=H.f,n=!F&&(t&nt)!==0&&de!==null&&!de.i;if(n){var r=de;(r.e??(r.e=[])).push(e)}else return wa(e)}function wa(e){return ht(yn|ji,e)}function $o(e){return ya(),ht(Un|ji,e)}function Ao(e){Qt.ensure();const t=ht(Pt|bn,e);return(n={})=>new Promise(r=>{n.outro?nn(t,()=>{Me(t),r(void 0)}):(Me(t),r(void 0))})}function di(e){return ht(yn,e)}function Mo(e){return ht(xn|bn,e)}function ba(e,t=0){return ht(Un|t,e)}function he(e,t=[],n=[],r=[]){ea(r,t,n,i=>{ht(Un,()=>{e(...i.map(v))})})}function Jn(e,t=0){var n=ht(dt|t,e);return n}function xa(e,t=0){var n=ht(qr|t,e);return n}function He(e){return ht(nt|bn,e)}function ka(e){var t=e.teardown;if(t!==null){const n=It,r=F;Aa(!0),it(null);try{t.call(null)}catch(i){At(i,e.parent)}finally{Aa(n),it(r)}}}function vi(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const i=n.ac;i!==null&&Gn(()=>{i.abort(jn)});var r=n.next;(n.f&Pt)!==0?n.parent=null:Me(n,t),n=r}}function No(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&nt)===0&&Me(t),t=n}}function Me(e,t=!0){var n=!1;(t||(e.f&Ps)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(To(e.nodes.start,e.nodes.end),n=!0),e.f|=yr,vi(e,t&&!n),tr(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(const s of r)s.stop();ka(e),e.f^=yr,e.f|=Ie;var i=e.parent;i!==null&&i.first!==null&&Sa(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function To(e,t){for(;e!==null;){var n=e===t?null:Qn(e);e.remove(),e=n}}function Sa(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function nn(e,t,n=!0){var r=[];e.f|=Zr,Ea(e,r,!0);var i=()=>{n&&Me(e),t&&t()},s=r.length;if(s>0){var a=()=>--s||i();for(var o of r)o.out(a)}else i()}function Ea(e,t,n){if((e.f&Re)===0){e.f^=Re;var r=e.nodes&&e.nodes.t;if(r!==null)for(const o of r)(o.is_global||n)&&t.push(o);for(var i=e.first;i!==null;){var s=i.next;if((i.f&Pt)===0){var a=(i.f&Ft)!==0||(i.f&nt)!==0&&(e.f&dt)!==0;Ea(i,t,a?n:!1)}i=s}}}function Mr(e){e.f&=~Zr,$a(e,!0)}function $a(e,t){if((e.f&Zr)===0&&(e.f&Re)!==0){e.f^=Re,(e.f&ke)===0&&(pe(e,we),Qt.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,i=(n.f&Ft)!==0||(n.f&nt)!==0;$a(n,i?t:!1),n=r}var s=e.nodes&&e.nodes.t;if(s!==null)for(const a of s)(a.is_global||t)&&a.in()}}function pi(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var i=n===r?null:Qn(n);t.append(n),n=i}}let Nr=!1,It=!1;function Aa(e){It=e}let F=null,_t=!1;function it(e){F=e}let H=null;function at(e){H=e}let Mt=null;function Ma(e){F!==null&&((F.f&br)!==0||(F.f&Te)!==0)&&(Mt??(Mt=new Set)).add(e)}let Ue=null,Xe=0,st=null;function Co(e){st=e}let Na=1,rn=0,an=rn;function Ta(e){an=e}function Ca(){return++Na}function er(e){var t=e.f;if((t&we)!==0)return!0;if((t&rt)!==0){for(var n=e.deps,r=n.length,i=0;i<r;i++){var s=n[i];if(er(s)&&na(s),s.wv>e.wv)return!0}(t&vt)!==0&&Ae===null&&pe(e,ke)}return!1}function Oa(e,t,n=!0){var r=e.reactions;if(r!==null&&!(Mt!==null&&Mt.has(e)))for(var i=0;i<r.length;i++){var s=r[i];(s.f&Te)!==0?Oa(s,t,!1):t===s&&(n?pe(s,we):(s.f&ke)!==0&&pe(s,rt),li(s))}}function Pa(e){var t=Ue,n=Xe,r=st,i=F,s=Mt,a=de,o=_t,l=an,c=e.f;Ue=null,Xe=0,st=null,F=(c&(nt|Pt))===0?e:null,Mt=null,Sn(e.ctx),_t=!1,an=++rn,e.ac!==null&&(Gn(()=>{e.ac.abort(jn)}),e.ac=null);try{e.f|=br;var f=e.fn,p=f();e.f|=wn;var b=Ra(e);if(Xn()&&st!==null&&!_t&&b!==null&&(e.f&(Te|rt|we))===0)for(var h=0;h<st.length;h++)Oa(st[h],e);if(i!==null&&i!==e){if(rn++,i.deps!==null)for(let g=0;g<n;g+=1)i.deps[g].rv=rn;if(t!==null)for(const g of t)g.rv=rn;st!==null&&(r===null?r=st:r.push(...st))}return(e.f&Ht)!==0&&(e.f^=Ht),p}catch(g){return Ra(e),So(g)}finally{e.f^=br,Ue=t,Xe=n,st=r,F=i,Mt=s,Sn(a),_t=o,an=l}}function Ra(e){var i;var t=e.deps,n=z==null?void 0:z.is_fork;if(Ue!==null){var r;if(n||tr(e,Xe),t!==null&&Xe>0)for(t.length=Xe+Ue.length,r=0;r<Ue.length;r++)t[Xe+r]=Ue[r];else e.deps=t=Ue;if(fi()&&(e.f&vt)!==0)for(r=Xe;r<t.length;r++)((i=t[r]).reactions??(i.reactions=[])).push(e)}else!n&&t!==null&&Xe<t.length&&(tr(e,Xe),t.length=Xe);return t}function Oo(e,t){let n=t.reactions;if(n!==null){var r=xe.call(n,e);if(r!==-1){var i=n.length-1;i===0?n=t.reactions=null:(n[r]=n[i],n.pop())}}if(n===null&&(t.f&Te)!==0&&(Ue===null||!Zt.call(Ue,t))){var s=t;(s.f&vt)!==0&&(s.f^=vt),s.v!==be&&ti(s),s.ac!==null&&Gn(()=>{s.ac.abort(jn),s.ac=null,pe(s,we)}),go(s),tr(s,0)}}function tr(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Oo(e,n[r])}function Nn(e){var t=e.f;if((t&Ie)===0){pe(e,ke);var n=H,r=Nr;H=e,Nr=(t&(nt|Pt))===0;try{(t&(dt|qr))!==0?No(e):vi(e),ka(e);var i=Pa(e);e.teardown=typeof i=="function"?i:null,e.wv=Na;var s}finally{Nr=r,H=n}}}function v(e){var t=e.f,n=(t&Te)!==0;if(F!==null&&!_t){var r=H!==null&&(H.f&Ie)!==0;if(!r&&(Mt===null||!Mt.has(e))){var i=F.deps;if((F.f&br)!==0)e.rv<rn&&(e.rv=rn,Ue===null&&i!==null&&i[Xe]===e?Xe++:Ue===null?Ue=[e]:Ue.push(e));else{F.deps??(F.deps=[]),Zt.call(F.deps,e)||F.deps.push(e);var s=e.reactions;s===null?e.reactions=[F]:Zt.call(s,F)||s.push(F)}}}if(It&&$t.has(e))return $t.get(e);if(n){var a=e;if(It){var o=a.v;return((a.f&ke)===0&&a.reactions!==null||La(a))&&(o=ri(a)),$t.set(a,o),o}var l=(a.f&vt)===0&&!_t&&F!==null&&(Nr||(F.f&vt)!==0),c=(a.f&wn)===0;er(a)&&(l&&(a.f|=vt),na(a)),l&&!c&&(ra(a),Ia(a))}if(Ae!=null&&Ae.has(e))return Ae.get(e);if((e.f&Ht)!==0)throw e.v;return e.v}function Ia(e){if(e.f|=vt,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&Te)!==0&&(t.f&vt)===0&&(ra(t),Ia(t))}function La(e){if(e.v===be)return!0;if(e.deps===null)return!1;for(const t of e.deps)if($t.has(t)||(t.f&Te)!==0&&La(t))return!0;return!1}function Wt(e){var t=_t;try{return _t=!0,e()}finally{_t=t}}function sn(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(xt in e)hi(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&xt in n&&hi(n)}}}function hi(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{hi(e[r],t)}catch{}const n=Gr(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=Fi(n);for(let i in r){const s=r[i].get;if(s)try{s.call(e)}catch{}}}}}function Po(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Ro=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Io(e){return Ro.includes(e)}const Lo={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function zo(e){return e=e.toLowerCase(),Lo[e]??e}const Do=["touchstart","touchmove"];function Bo(e){return Do.includes(e)}const on=Symbol("events"),za=new Set,_i=new Set;function Da(e,t,n,r={}){function i(s){if(r.capture||yi.call(t,s),!s.cancelBubble)return Gn(()=>n==null?void 0:n.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?(i.__removed=!1,Et(()=>{i.__removed||t.addEventListener(e,i,r)})):t.addEventListener(e,i,r),i}function Tr(e,t,n,r,i){var s={capture:r,passive:i},a=Da(e,t,n,s);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Ar(()=>{a.__removed=!0,t.removeEventListener(e,a,s)})}function K(e,t,n){(t[on]??(t[on]={}))[e]=n}function ln(e){for(var t=0;t<e.length;t++)za.add(e[t]);for(var n of _i)n(e)}let gi=null,mi=!1;function yi(e){var S,d;var t=this,n=t.ownerDocument,r=e.type,i=((S=e.composedPath)==null?void 0:S.call(e))||[],s=i[0]||e.target;gi=e,mi||(mi=!0,setTimeout(()=>{mi=!1,gi=null}));var a=0,o=gi===e&&e[on];if(o){var l=i.indexOf(o);if(l!==-1&&(t===document||t===window)){e[on]=t;return}var c=i.indexOf(t);if(c===-1)return;l<=c&&(a=l)}if(s=i[a]||e.target,s!==t){Vi(e,"currentTarget",{configurable:!0,get(){return s||n}});var f=F,p=H;it(null),at(null);try{for(var b,h=[];s!==null&&s!==t;){try{var g=(d=s[on])==null?void 0:d[r];g!=null&&(!s.disabled||e.target===s)&&g.call(s,e)}catch(_){b?h.push(_):b=_}if(e.cancelBubble)break;a++,s=a<i.length?i[a]:null}if(b){for(let _ of h)queueMicrotask(()=>{throw _});throw b}}finally{e[on]=t,delete e.currentTarget,it(f),at(p)}}}const wi=((fs=globalThis==null?void 0:globalThis.window)==null?void 0:fs.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Vo(e){return(wi==null?void 0:wi.createHTML(e))??e}function Ba(e){var t=ui("template");return t.innerHTML=Vo(e.replaceAll("<!>","<!---->")),t.content}function nr(e,t){var n=H;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function _e(e,t){var n=(t&Us)!==0,r=(t&Ws)!==0,i,s=!e.startsWith("<!>");return()=>{i===void 0&&(i=Ba(s?e:"<!>"+e),n||(i=en(i)));var a=r||ha?document.importNode(i,!0):i.cloneNode(!0);if(n){var o=en(a),l=a.lastChild;nr(o,l)}else nr(a,a);return a}}function Fo(e,t,n="svg"){var r=!e.startsWith("<!>"),i=`<${n}>${r?e:"<!>"+e}</${n}>`,s;return()=>{if(!s){var a=Ba(i),o=en(a);s=en(o)}var l=s.cloneNode(!0);return nr(l,l),l}}function Ho(e,t){return Fo(e,t,"svg")}function Z(){var e=document.createDocumentFragment(),t=document.createComment(""),n=Rt();return e.append(t,n),nr(t,n),e}function $(e,t){e!==null&&e.before(t)}function Uo(e){let t=0,n=Ut(0),r;return()=>{fi()&&(v(n),ba(()=>(t===0&&(r=Wt(()=>e(()=>Zn(n)))),t+=1,()=>{Et(()=>{t-=1,t===0&&(r==null||r(),r=void 0,Zn(n))})})))}}var Wo=Ft|bn;function jo(e,t,n,r){new Xo(e,t,n,r)}class Xo{constructor(t,n,r,i){V(this,le);tt(this,"parent");tt(this,"is_pending",!1);tt(this,"transform_error");V(this,lt);V(this,Ni,null);V(this,ct);V(this,dn);V(this,ze);V(this,Ze,null);V(this,De,null);V(this,Qe,null);V(this,Tt,null);V(this,vn,0);V(this,Yt,0);V(this,zn,!1);V(this,cr,new Set);V(this,ur,new Set);V(this,Bt,null);V(this,Br,Uo(()=>(D(this,Bt,Ut(u(this,vn))),()=>{D(this,Bt,null)})));var s;D(this,lt,t),D(this,ct,n),D(this,dn,a=>{var o=H;o.b=this,o.f|=Kr,r(a)}),this.parent=H.b,this.transform_error=i??((s=this.parent)==null?void 0:s.transform_error)??(a=>a),D(this,ze,Jn(()=>{U(this,le,zi).call(this)},Wo))}defer_effect(t){Ji(t,u(this,cr),u(this,ur))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!u(this,ct).pending}update_pending_count(t,n){U(this,le,Di).call(this,t,n),D(this,vn,u(this,vn)+t),!(!u(this,Bt)||u(this,zn))&&(D(this,zn,!0),Et(()=>{D(this,zn,!1),u(this,Bt)&&Mn(u(this,Bt),u(this,vn))}))}get_effect_pending(){return u(this,Br).call(this),v(u(this,Bt))}error(t){if(!u(this,ct).onerror&&!u(this,ct).failed)throw t;z!=null&&z.is_fork?(u(this,Ze)&&z.skip_effect(u(this,Ze)),u(this,De)&&z.skip_effect(u(this,De)),u(this,Qe)&&z.skip_effect(u(this,Qe)),z.oncommit(()=>{U(this,le,Bi).call(this,t)})):U(this,le,Bi).call(this,t)}}lt=new WeakMap,Ni=new WeakMap,ct=new WeakMap,dn=new WeakMap,ze=new WeakMap,Ze=new WeakMap,De=new WeakMap,Qe=new WeakMap,Tt=new WeakMap,vn=new WeakMap,Yt=new WeakMap,zn=new WeakMap,cr=new WeakMap,ur=new WeakMap,Bt=new WeakMap,Br=new WeakMap,le=new WeakSet,Gc=function(){try{D(this,Ze,He(()=>u(this,dn).call(this,u(this,lt))))}catch(t){this.error(t)}},Yc=function(t){const n=u(this,ct).failed,{reset:r,invoke_onerror:i}=U(this,le,Li).call(this,t);Et(i),n&&D(this,Qe,He(()=>{n(u(this,lt),()=>t,()=>r)}))},Li=function(t){var n=!1,r=!1;const i=()=>{if(n){qs();return}n=!0,r&&lo(),u(this,Qe)!==null&&nn(u(this,Qe),()=>{D(this,Qe,null)}),U(this,le,Xr).call(this,()=>{U(this,le,zi).call(this)})};return{reset:i,invoke_onerror:()=>{var a,o;try{r=!0,(o=(a=u(this,ct)).onerror)==null||o.call(a,t,i),r=!1}catch(l){At(l,u(this,ze)&&u(this,ze).parent)}}}},qc=function(){const t=u(this,ct).pending;t&&(this.is_pending=!0,D(this,De,He(()=>t(u(this,lt)))),Et(()=>{var n=D(this,Tt,document.createDocumentFragment()),r=Rt(),i=!1;if(n.append(r),D(this,Ze,U(this,le,Xr).call(this,()=>{try{return He(()=>u(this,dn).call(this,r))}catch(s){try{this.error(s),i=!0}catch(a){At(a,u(this,ze).parent)}return null}})),u(this,Ze)===null){D(this,Tt,null),i&&U(this,le,gr).call(this,z);return}u(this,Yt)===0&&(u(this,lt).before(n),D(this,Tt,null),nn(u(this,De),()=>{D(this,De,null)}),U(this,le,gr).call(this,z))}))},zi=function(){try{if(this.is_pending=this.has_pending_snippet(),D(this,Yt,0),D(this,vn,0),D(this,Ze,He(()=>{u(this,dn).call(this,u(this,lt))})),u(this,Yt)>0){var t=D(this,Tt,document.createDocumentFragment());pi(u(this,Ze),t);const n=u(this,ct).pending;D(this,De,He(()=>n(u(this,lt))))}else U(this,le,gr).call(this,z)}catch(n){this.error(n)}},gr=function(t){this.is_pending=!1,t.transfer_effects(u(this,cr),u(this,ur))},Xr=function(t){var n=H,r=F,i=de;at(u(this,ze)),it(u(this,ze)),Sn(u(this,ze).ctx);try{return Qt.ensure(),t()}finally{at(n),it(r),Sn(i)}},Di=function(t,n){var r;if(!this.has_pending_snippet()){this.parent&&U(r=this.parent,le,Di).call(r,t,n);return}D(this,Yt,u(this,Yt)+t),u(this,Yt)===0&&(U(this,le,gr).call(this,n),u(this,De)&&nn(u(this,De),()=>{D(this,De,null)}),u(this,Tt)&&(u(this,lt).before(u(this,Tt)),D(this,Tt,null)))},Bi=function(t){u(this,Ze)&&(Me(u(this,Ze)),D(this,Ze,null)),u(this,De)&&(Me(u(this,De)),D(this,De,null)),u(this,Qe)&&(Me(u(this,Qe)),D(this,Qe,null));let n=u(this,ct).failed;const r=i=>{const{reset:s,invoke_onerror:a}=U(this,le,Li).call(this,i);a(),n&&D(this,Qe,U(this,le,Xr).call(this,()=>{try{return He(()=>{var o=H;o.b=this,o.f|=Kr,n(u(this,lt),()=>i,()=>s)})}catch(o){return At(o,u(this,ze).parent),null}}))};Et(()=>{var i;try{i=this.transform_error(t)}catch(s){At(s,u(this,ze)&&u(this,ze).parent);return}i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(r,s=>At(s,u(this,ze)&&u(this,ze).parent)):r(i)})};function W(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e[Wn]??(e[Wn]=e.nodeValue))&&(e[Wn]=n,e.nodeValue=`${n}`)}function Go(e,t){return Yo(e,t)}const Cr=new Map;function Yo(e,{target:t,anchor:n,props:r={},events:i,context:s,intro:a=!0,transformError:o}){xo();var l=void 0,c=Ao(()=>{var f=n??t.appendChild(Rt());jo(f,{pending:()=>{}},h=>{kt({});var g=de;s&&(g.c=s),i&&(r.$$events=i),l=e(h,r)||ei(),St()},o);var p=new Set,b=h=>{for(var g=0;g<h.length;g++){var S=h[g];if(!p.has(S)){p.add(S);var d=Bo(S);for(const w of[t,document]){var _=Cr.get(w);_===void 0&&(_=new Map,Cr.set(w,_));var y=_.get(S);y===void 0?(w.addEventListener(S,yi,{passive:d}),_.set(S,1)):_.set(S,y+1)}}}};return b(mr(za)),_i.add(b),()=>{var d;for(var h of p)for(const _ of[t,document]){var g=Cr.get(_),S=g.get(h);--S==0?(_.removeEventListener(h,yi),g.delete(h),g.size===0&&Cr.delete(_)):g.set(h,S)}_i.delete(b),f!==n&&((d=f.parentNode)==null||d.removeChild(f))}});return qo.set(l,c),l}let qo=new WeakMap;class bi{constructor(t,n=!0){tt(this,"anchor");V(this,yt,new Map);V(this,Ct,new Map);V(this,Je,new Map);V(this,pn,new Set);V(this,fr,!0);V(this,dr,t=>{if(u(this,yt).has(t)){var n=u(this,yt).get(t),r=u(this,Ct).get(n);if(r)Mr(r),u(this,pn).delete(n);else{var i=u(this,Je).get(n);i&&(Mr(i.effect),u(this,Ct).set(n,i.effect),u(this,Je).delete(n),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),r=i.effect)}for(const[s,a]of u(this,yt)){if(u(this,yt).delete(s),s===t)break;const o=u(this,Je).get(a);o&&(Me(o.effect),u(this,Je).delete(a))}for(const[s,a]of u(this,Ct)){if(s===n||u(this,pn).has(s))continue;const o=()=>{if(Array.from(u(this,yt).values()).includes(s)){var c=document.createDocumentFragment();pi(a,c),c.append(Rt()),u(this,Je).set(s,{effect:a,fragment:c})}else Me(a);u(this,pn).delete(s),u(this,Ct).delete(s)};u(this,fr)||!r?(u(this,pn).add(s),nn(a,o,!1)):o()}}});V(this,Vr,t=>{u(this,yt).delete(t);const n=Array.from(u(this,yt).values());for(const[r,i]of u(this,Je))n.includes(r)||(Me(i.effect),u(this,Je).delete(r))});this.anchor=t,D(this,fr,n)}ensure(t,n){var r=z,i=ma();if(n&&!u(this,Ct).has(t)&&!u(this,Je).has(t))if(i){var s=document.createDocumentFragment(),a=Rt();s.append(a),u(this,Je).set(t,{effect:He(()=>n(a)),fragment:s})}else u(this,Ct).set(t,He(()=>n(this.anchor)));if(u(this,yt).set(r,t),i){for(const[o,l]of u(this,Ct))o===t?r.unskip_effect(l):r.skip_effect(l);for(const[o,l]of u(this,Je))o===t?r.unskip_effect(l.effect):r.skip_effect(l.effect);r.oncommit(u(this,dr)),r.ondiscard(u(this,Vr))}else u(this,dr).call(this,r)}}yt=new WeakMap,Ct=new WeakMap,Je=new WeakMap,pn=new WeakMap,fr=new WeakMap,dr=new WeakMap,Vr=new WeakMap;function Ge(e,t,n=!1){var r=new bi(e),i=n?Ft:0;function s(a,o){r.ensure(a,o)}Jn(()=>{var a=!1;t((o,l=0)=>{a=!0,s(l,o)}),a||s(-1,null)},i)}function Va(e,t){return t}function Ko(e,t,n){for(var r=[],i=t.length,s,a=t.length,o=0;o<i;o++){let p=t[o];nn(p,()=>{if(s){if(s.pending.delete(p),s.done.add(p),s.pending.size===0){var b=e.outrogroups;xi(e,mr(s.done)),b.delete(s),b.size===0&&(e.outrogroups=null)}}else a-=1},!1)}if(a===0){var l=r.length===0&&n!==null&&e.pending.size===0;if(l){var c=n,f=c.parentNode;ko(f),f.append(c),e.items.clear()}xi(e,t,!l)}else s={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(s)}function xi(e,t,n=!0){var r;if(e.pending.size>0){r=new Set;for(const a of e.pending.values())for(const o of a)r.add(e.items.get(o).e)}for(var i=0;i<t.length;i++){var s=t[i];if(r!=null&&r.has(s)){s.f|=bt;const a=document.createDocumentFragment();pi(s,a)}else Me(t[i],n)}}var Fa;function jt(e,t,n,r,i,s=null){var a=e,o=new Map,l=(t&Yi)!==0;if(l){var c=e;a=c.appendChild(Rt())}var f=null,p=ni(()=>{var w=n();return ae(w)?w:w==null?[]:mr(w)}),b,h=new Map,g=!0;function S(w){(y.effect.f&Ie)===0&&(y.pending.delete(w),y.fallback=f,Zo(y,b,a,t,r),f!==null&&(b.length===0?(f.f&bt)===0?Mr(f):(f.f^=bt,ir(f,null,a)):nn(f,()=>{f=null})))}function d(w){y.pending.delete(w)}var _=Jn(()=>{b=v(p);for(var w=b.length,E=new Set,k=z,A=ma(),M=0;M<w;M+=1){var P=b[M],T=r(P,M),L=g?null:o.get(T);L?(L.v&&Mn(L.v,P),L.i&&Mn(L.i,M),A&&k.unskip_effect(L.e)):(L=Qo(o,g?a:Fa??(Fa=Rt()),P,T,M,i,t,n),g||(L.e.f|=bt),o.set(T,L)),E.add(T)}if(w===0&&s&&!f&&(g?f=He(()=>s(a)):(f=He(()=>s(Fa??(Fa=Rt()))),f.f|=bt)),w>E.size&&Js(),!g)if(h.set(k,E),A){for(const[te,Se]of o)E.has(te)||k.skip_effect(Se.e);k.oncommit(S),k.ondiscard(d)}else S(k);v(p)}),y={effect:_,items:o,pending:h,outrogroups:null,fallback:f};g=!1}function rr(e){for(;e!==null&&(e.f&nt)===0;)e=e.next;return e}function Zo(e,t,n,r,i){var L,te,Se,Ce,me,Ee,qt,ut,wt;var s=(r&zs)!==0,a=t.length,o=e.items,l=rr(e.effect.first),c,f=null,p,b=[],h=[],g,S,d,_;if(s)for(_=0;_<a;_+=1)g=t[_],S=i(g,_),d=o.get(S).e,(d.f&bt)===0&&((te=(L=d.nodes)==null?void 0:L.a)==null||te.measure(),(p??(p=new Set)).add(d));for(_=0;_<a;_+=1){if(g=t[_],S=i(g,_),d=o.get(S).e,e.outrogroups!==null)for(const $e of e.outrogroups)$e.pending.delete(d),$e.done.delete(d);if((d.f&Re)!==0&&(Mr(d),s&&((Ce=(Se=d.nodes)==null?void 0:Se.a)==null||Ce.unfix(),(p??(p=new Set)).delete(d))),(d.f&bt)!==0)if(d.f^=bt,d===l)ir(d,null,n);else{var y=f?f.next:l;d===e.effect.last&&(e.effect.last=d.prev),d.prev&&(d.prev.next=d.next),d.next&&(d.next.prev=d.prev),Xt(e,f,d),Xt(e,d,y),ir(d,y,n),f=d,b=[],h=[],l=rr(f.next);continue}if(d!==l){if(c!==void 0&&c.has(d)){if(b.length<h.length){var w=h[0],E;f=w.prev;var k=b[0],A=b[b.length-1];for(E=0;E<b.length;E+=1)ir(b[E],w,n);for(E=0;E<h.length;E+=1)c.delete(h[E]);Xt(e,k.prev,A.next),Xt(e,f,k),Xt(e,A,w),l=w,f=A,_-=1,b=[],h=[]}else c.delete(d),ir(d,l,n),Xt(e,d.prev,d.next),Xt(e,d,f===null?e.effect.first:f.next),Xt(e,f,d),f=d;continue}for(b=[],h=[];l!==null&&l!==d;)(c??(c=new Set)).add(l),h.push(l),l=rr(l.next);if(l===null)continue}(d.f&bt)===0&&b.push(d),f=d,l=rr(d.next)}if(e.outrogroups!==null){for(const $e of e.outrogroups)$e.pending.size===0&&(xi(e,mr($e.done)),(me=e.outrogroups)==null||me.delete($e));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||c!==void 0){var M=[];if(c!==void 0)for(d of c)(d.f&Re)===0&&M.push(d);for(;l!==null;)(l.f&Re)===0&&l!==e.fallback&&M.push(l),l=rr(l.next);var P=M.length;if(P>0){var T=(r&Yi)!==0&&a===0?n:null;if(s){for(_=0;_<P;_+=1)(qt=(Ee=M[_].nodes)==null?void 0:Ee.a)==null||qt.measure();for(_=0;_<P;_+=1)(wt=(ut=M[_].nodes)==null?void 0:ut.a)==null||wt.fix()}Ko(e,M,T)}}s&&Et(()=>{var $e,Be;if(p!==void 0)for(d of p)(Be=($e=d.nodes)==null?void 0:$e.a)==null||Be.apply()})}function Qo(e,t,n,r,i,s,a,o){var l=(a&Is)!==0?(a&Ds)===0?wo(n,!1,!1):Ut(n):null,c=(a&Ls)!==0?Ut(i):null;return{v:l,i:c,e:He(()=>(s(t,l??n,c??i,o),()=>{e.delete(r)}))}}function ir(e,t,n){if(e.nodes)for(var r=e.nodes.start,i=e.nodes.end,s=t&&(t.f&bt)===0?t.nodes.start:n;r!==null;){var a=Qn(r);if(s.before(r),r===i)return;r=a}}function Xt(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function oe(e,t,n,r,i){var o,l;if((o=t.$$host)!=null&&o.$$shadowRoot){const c=ui("slot");$(e,c);return}var s=(l=t.$$slots)==null?void 0:l[n],a=!1;s===!0&&(s=t.children,a=!0),s===void 0||s(e,a?()=>r:r)}function Jo(e,t,n){var r=new bi(e);Jn(()=>{var i=t()??null;r.ensure(i,i&&(s=>n(s,i)))},Ft)}function el(e,t,n,r,i,s){var a=null,o=e,l=new bi(o,!1);Jn(()=>{const c=t()||null;var f=js;if(c===null){l.ensure(null,null);return}return l.ensure(c,p=>{if(c){if(a=ui(c,f),nr(a,a),r){var b=null,h=a.appendChild(Rt());r(a,h),b==null||b.remove()}H.nodes.end=a,p.before(a)}}),()=>{}},Ft),Ar(()=>{})}function tl(e,t){var n=void 0,r;xa(()=>{n!==(n=t())&&(r&&(Me(r),r=null),n&&(r=He(()=>{di(()=>n(e))})))})}function Ha(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Ha(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function nl(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Ha(e))&&(r&&(r+=" "),r+=t);return r}function Tn(e){return typeof e=="object"?nl(e):e??""}const Ua=[...` 	
\r\f \v\uFEFF`];function rl(e,t,n){var r=e==null?"":""+e;if(t&&(r=r?r+" "+t:t),n){for(var i of Object.keys(n))if(n[i])r=r?r+" "+i:i;else if(r.length)for(var s=i.length,a=0;(a=r.indexOf(i,a))>=0;){var o=a+s;(a===0||Ua.includes(r[a-1]))&&(o===r.length||Ua.includes(r[o]))?r=(a===0?"":r.substring(0,a))+r.substring(o+1):a=o}}return r===""?null:r}function Wa(e,t=!1){var n=t?" !important;":";",r="";for(var i of Object.keys(e)){var s=e[i];s!=null&&s!==""&&(r+=" "+i+": "+s+n)}return r}function ki(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function il(e,t){if(t){var n="",r,i;if(Array.isArray(t)?(r=t[0],i=t[1]):r=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var s=!1,a=0,o=!1,l=[];r&&l.push(...Object.keys(r).map(ki)),i&&l.push(...Object.keys(i).map(ki));var c=0,f=-1;const S=e.length;for(var p=0;p<S;p++){var b=e[p];if(o?b==="/"&&e[p-1]==="*"&&(o=!1):s?s===b&&(s=!1):b==="/"&&e[p+1]==="*"?o=!0:b==='"'||b==="'"?s=b:b==="("?a++:b===")"&&a--,!o&&s===!1&&a===0){if(b===":"&&f===-1)f=p;else if(b===";"||p===S-1){if(f!==-1){var h=ki(e.substring(c,f).trim());if(!l.includes(h)){b!==";"&&p++;var g=e.substring(c,p).trim();n+=" "+g+";"}}c=p+1,f=-1}}}}return r&&(n+=Wa(r)),i&&(n+=Wa(i,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function We(e,t,n,r,i,s){var a=e[Qr];if(a!==n||a===void 0){var o=rl(n,r,s);o==null?e.removeAttribute("class"):t?e.className=o:e.setAttribute("class",o),e[Qr]=n}else if(s&&i!==s)for(var l in s){var c=!!s[l];(i==null||c!==!!i[l])&&e.classList.toggle(l,c)}return s}function Si(e,t={},n,r){for(var i in n){var s=n[i];t[i]!==s&&(n[i]==null?e.style.removeProperty(i):e.style.setProperty(i,s,r))}}function Or(e,t,n,r){var i=e[Jr];if(i!==t){var s=il(t,r);s==null?e.removeAttribute("style"):e.style.cssText=s,e[Jr]=t}else r&&(Array.isArray(r)?(Si(e,n==null?void 0:n[0],r[0]),Si(e,n==null?void 0:n[1],r[1],"important")):Si(e,n,r));return r}function ja(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Xa(e,t){var n=!("__defaultValue"in e);!n&&e.__defaultValue===t||(e.__defaultValue=t,Ga(e,!n||"__value"in e))}function Ga(e,t){var n=e.__defaultValue,r=e.multiple,i=r?n??[]:null;if(!(r&&!ae(i))){var s=e.selectedIndex,a=t&&r?new Set(e.selectedOptions):null;for(var o of e.options){var l=Ei(o);ja(o,r?i.includes(l):va(l,n))}if(t)if(a!==null)for(o of e.options){var c=a.has(o);o.selected!==c&&(o.selected=c)}else e.selectedIndex!==s&&(e.selectedIndex=s)}}function Lt(e,t,n=!1){if(e.multiple){if(t==null)return;if(!ae(t))return Ys();for(var r of e.options)r.selected=t.includes(Ei(r));return}for(r of e.options){var i=Ei(r);if(va(i,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function cn(e){var t=new MutationObserver(n=>{n.every(al)||("__defaultValue"in e&&Ga(e,!1),"__value"in e&&Lt(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Ar(()=>{t.disconnect()})}function Ei(e){return"__value"in e?e.__value:e.value}function al(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(n=>n.nodeName==="SELECTEDCONTENT")}return!1}const ar=Symbol("class"),sr=Symbol("style"),Ya=Symbol("is custom element"),qa=Symbol("is html"),sl=kr?"input":"INPUT",ol=kr?"option":"OPTION",Ka=kr?"select":"SELECT",ll=kr?"progress":"PROGRESS";function Pr(e,t){var n=Rr(e);n.value===(n.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==ll)||(e.value=t??"")}function cl(e,t){var n=Rr(e);n.checked!==(n.checked=t??void 0)&&(e.checked=t)}function Ne(e,t,n,r){var i=Rr(e);i[t]!==(i[t]=n)&&(t==="loading"&&(e[Rs]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Ja(e).has(t)?e[t]=n:e.setAttribute(t,n))}function ul(e,t,n,r,i=!1,s=!1){var a=Rr(e),o=a[Ya],l=!a[qa],c=t||{},f=e.nodeName===ol,p=e.nodeName===Ka;for(var b in t)!(b in n)&&b[0]+b[1]!=="$$"&&(n[b]=null);n.class?n.class=Tn(n.class):n[ar]&&(n.class=null),n[sr]&&(n.style??(n.style=null));var h=Ja(e);if(e.nodeName===sl&&"type"in n&&("value"in n||"__value"in n)){var g=n.type;(g!==c.type||g===void 0&&e.hasAttribute("type"))&&(c.type=g,Ne(e,"type",g))}for(const k in n){let A=n[k];if(f&&k==="value"&&A==null){e.value=e.__value="",c[k]=A;continue}if(k==="class"){var S=e.namespaceURI==="http://www.w3.org/1999/xhtml";We(e,S,A,r,t==null?void 0:t[ar],n[ar]),c[k]=A,c[ar]=n[ar];continue}if(k==="style"){Or(e,A,t==null?void 0:t[sr],n[sr]),c[k]=A,c[sr]=n[sr];continue}var d=c[k];if(!(A===d&&!(A===void 0&&e.hasAttribute(k)))){c[k]=A;var _=k[0]+k[1];if(_!=="$$")if(_==="on"){const M={},P="$$"+k;let T=k.slice(2);var y=Io(T);if(Po(T)&&(T=T.slice(0,-7),M.capture=!0),!y&&d){if(A!=null)continue;e.removeEventListener(T,c[P],M),c[P]=null}if(y)K(T,e,A),ln([T]);else if(A!=null){let L=function(te){c[k].call(this,te)};c[P]=Da(T,e,L,M)}}else if(k==="style")Ne(e,k,A);else if(k==="autofocus")vo(e,!!A);else if(!o&&(k==="__value"||k==="value"&&A!=null))e.value=e.__value=A;else if(k==="selected"&&f)ja(e,A);else{var w=k;l||(w=zo(w));var E=w==="defaultValue"||w==="defaultChecked";if(p&&w==="defaultValue")continue;if(A==null&&!o&&!E)if(a[k]=null,w==="value"||w==="checked"){let M=e;const P=t===void 0;if(w==="value"){let T=M.defaultValue;M.removeAttribute(w),M.defaultValue=T,M.value=M.__value=P?T:null}else{let T=M.defaultChecked;M.removeAttribute(w),M.defaultChecked=T,M.checked=P?T:!1}}else e.removeAttribute(k);else E||(o||typeof A!="string")&&h.has(w)?(e[w]=A,w in a&&(a[w]=be)):typeof A!="function"&&Ne(e,w,A)}}}return c}function Za(e,t,n=[],r=[],i=[],s,a=!1,o=!1){ea(i,n,r,l=>{var c=void 0,f={},p=e.nodeName===Ka,b=!1;if(xa(()=>{var g=t(...l.map(v)),S=ul(e,c,g,s,a,o);if(b&&p){var d=e;"defaultValue"in g&&Xa(d,g.defaultValue),"value"in g&&Lt(d,g.value)}for(let y of Object.getOwnPropertySymbols(f))g[y]||Me(f[y]);for(let y of Object.getOwnPropertySymbols(g)){var _=g[y];y.description===Xs&&(!c||_!==c[y])&&(f[y]&&Me(f[y]),f[y]=He(()=>tl(e,()=>_))),S[y]=_}c=S}),p){var h=e;di(()=>{var g=c;"defaultValue"in g&&Xa(h,g.defaultValue),Lt(h,g.value,!0),cn(h)})}b=!0})}function Rr(e){return e[xr]??(e[xr]={[Ya]:e.nodeName.includes("-"),[qa]:e.namespaceURI===Ki})}var Qa=new Map;function Ja(e){var t=e.getAttribute("is")||e.nodeName,n=Qa.get(t);if(n)return n;Qa.set(t,n=new Set);for(var r,i=e,s=Element.prototype;s!==i;){r=Fi(i);for(var a in r)r[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&n.add(a);i=Gr(i)}return n}function $i(e,t){return e===t||(e==null?void 0:e[xt])===t}function Ai(e=ei(),t,n,r){var i=de.r,s=H;return di(()=>{var a,o;return ba(()=>{a=o,o=[],Wt(()=>{$i(n(...o),e)||(t(e,...o),a&&$i(n(...a),e)&&t(null,...a))})}),()=>{let l=s;for(;l!==i&&l.parent!==null&&l.parent.f&yr;)l=l.parent;const c=()=>{o&&$i(n(...o),e)&&t(null,...o)},f=l.teardown;l.teardown=()=>{c(),f==null||f()}}}),e}function fl(e=!1){const t=de,n=t.l.u;if(!n)return;let r=()=>sn(t.s);if(e){let i=0,s={};const a=$n(()=>{let o=!1;const l=t.s;for(const c in l)l[c]!==s[c]&&(s[c]=l[c],o=!0);return o&&i++,i});r=()=>v(a)}n.b.length&&$o(()=>{es(t,r),Yr(n.b)}),tn(()=>{const i=Wt(()=>n.m.map(Os));return()=>{for(const s of i)typeof s=="function"&&s()}}),n.a.length&&tn(()=>{es(t,r),Yr(n.a)})}function es(e,t){if(e.l.s)for(const n of e.l.s)v(n);t()}let Ir=!1;function dl(e){var t=Ir;try{return Ir=!1,[e(),Ir]}finally{Ir=t}}const vl={get(e,t){if(!e.exclude.includes(t))return v(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,n){if(!(t in e.special)){var r=H;try{at(e.parent_effect),e.special[t]=gt({get[t](){return e.props[t]}},t,qi)}finally{at(r)}}return e.special[t](n),ua(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),ua(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function se(e,t){return new Proxy({props:e,exclude:t,special:{},version:Ut(0),parent_effect:H},vl)}const pl={get(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(Hn(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r)return r[t]}},set(e,t,n){let r=e.props.length;for(;r--;){let i=e.props[r];Hn(i)&&(i=i());const s=Vt(i,t);if(s&&s.set)return s.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(Hn(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r){const i=Vt(r,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===xt||t===Gi)return!1;for(let n of e.props)if(Hn(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){const t=[];for(let n of e.props)if(Hn(n)&&(n=n()),!!n){for(const r in n)t.includes(r)||t.push(r);for(const r of Object.getOwnPropertySymbols(n))t.includes(r)||t.push(r)}return t}};function ce(...e){return new Proxy({props:e},pl)}function gt(e,t,n,r){var E;var i=!kn||(n&Vs)!==0,s=(n&Fs)!==0,a=(n&Hs)!==0,o=r,l=!0,c=void 0,f=()=>a&&i?(c??(c=$n(r)),v(c)):(l&&(l=!1,o=a?Wt(r):r),o);let p;if(s){var b=xt in e||Gi in e;p=((E=Vt(e,t))==null?void 0:E.set)??(b&&t in e?k=>e[t]=k:void 0)}var h,g=!1;s?[h,g]=dl(()=>e[t]):h=e[t],h===void 0&&r!==void 0&&(h=f(),p&&(i&&io(),p(h)));var S;if(i?S=()=>{var k=e[t];return k===void 0?f():(l=!0,k)}:S=()=>{var k=e[t];return k!==void 0&&(o=void 0),k===void 0?o:k},i&&(n&qi)===0)return S;if(p){var d=e.$$legacy;return(function(k,A){return arguments.length>0?((!i||!A||d||g)&&p(A?S():k),k):S()})}var _=!1,y=((n&Bs)!==0?$n:ni)(()=>(_=!1,S()));s&&v(y);var w=H;return(function(k,A){if(arguments.length>0){const M=A?v(y):i&&s?Le(k):k;return C(y,M),_=!0,o!==void 0&&(o=M),k}return It&&_||(w.f&Ie)!==0?y.v:v(y)})}function Mi(e){de===null&&Zs(),kn&&de.l!==null?hl(de).m.push(e):tn(()=>{const t=Wt(e);if(typeof t=="function")return t})}function hl(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const _l="5";typeof window<"u"&&((ds=window.__svelte??(window.__svelte={})).v??(ds.v=new Set)).add(_l);const Q=Le({ready:!1,cleanScreen:!1,panelOpen:!0,settingsOpen:!1,startupOpen:!0,focusSection:null,focusNonce:0,popupSection:null,dockExpanded:!1,status:{}});function gl(e){Q.popupSection=Q.popupSection===e?null:e}const Ye=Le({});function ts(e){try{return structuredClone(e)}catch{return JSON.parse(JSON.stringify(e))}}function re(e){var t,n,r;if(e==null)return e;try{return((r=(n=(t=window.XRA)==null?void 0:t.i18n)==null?void 0:n.t)==null?void 0:r.call(n,e))??e}catch{return e}}function je(e,t){const n=e.split(".");let r=Ye;for(const i of n){if(r==null)return t;r=r[i]}return r===void 0?t:r}function ml(e){var n,r,i,s,a,o,l,c;const t=window.XRA;if(t){if(e.startsWith("background.")){(r=(n=t.background)==null?void 0:n.apply)==null||r.call(n);return}if(e==="ui.language"){(s=(i=t.i18n)==null?void 0:i.setLanguage)==null||s.call(i,Ye.ui.language);return}if(e==="ui.preview_wireframe"){typeof t.applyMocapWireframeVisibility=="function"&&t.applyMocapWireframeVisibility();return}if(e==="ui.mocap_view"){typeof t.applyMocapWireframeVisibility=="function"&&t.applyMocapWireframeVisibility();return}if(e.startsWith("performance.")){window.XRA_render_fps_limit=Number(Ye.performance.render_fps??60),window.XRA_gpu_preference=String(Ye.performance.gpu_preference||"default"),window.XRA_preserve_drawing_buffer=Ye.performance.preserve_drawing_buffer!==!1,window.XRA_antialias=Ye.performance.antialias!=="off",(o=(a=t.events)==null?void 0:a.emit)==null||o.call(a,"performance",Ye.performance);return}(c=(l=t.events)==null?void 0:l.emit)==null||c.call(l,"config-change",{path:e,value:je(e)})}}function ot(e,t){var s,a;const n=window.XRA,r=e.split(".");let i=Ye;for(let o=0;o<r.length-1;o++)i[r[o]]==null&&(i[r[o]]={}),i=i[r[o]];if(i[r[r.length-1]]=t,n!=null&&n.config){let o=n.config;for(let l=0;l<r.length-1;l++)o[r[l]]==null&&(o[r[l]]={}),o=o[r[l]];o[r[r.length-1]]=t}ml(e);try{(a=(s=n==null?void 0:n.profileService)==null?void 0:s.save)==null||a.call(s)}catch{}}function Lr(e,t,n){return new Promise((r,i)=>{const s=setTimeout(()=>i(new Error(`${n} timed out after ${t} ms`)),t);Promise.resolve(e).then(a=>{clearTimeout(s),r(a)},a=>{clearTimeout(s),i(a)})})}async function ns({timeout:e=12e3,dataTimeout:t=8e3}={}){var r,i,s;const n=(r=window.XRA)==null?void 0:r.nativeBridge;if(!(n!=null&&n.startNativeStreamer))throw new Error("native bridge unavailable");try{await Lr(n.startNativeStreamer(),e,"Camera start");const a=performance.now()+t;for(;performance.now()<a;){if((i=n.cameraDataReady)!=null&&i.call(n))return!0;await new Promise(o=>setTimeout(o,120))}return!0}catch(a){try{await((s=n.forceStopCamera)==null?void 0:s.call(n))}catch{}throw a}}async function yl({timeout:e=8e3}={}){var n,r;const t=(n=window.XRA)==null?void 0:n.nativeBridge;if(t!=null&&t.stopNativeStreamer)try{await Lr(t.stopNativeStreamer(),e,"Camera stop")}catch(i){try{await((r=t.forceStopCamera)==null?void 0:r.call(t))}catch{}throw i}}async function wl({timeout:e=12e3,readyTimeout:t=6e3}={}){var r,i,s,a;const n=(r=window.XRA)==null?void 0:r.recorder;if(!(n!=null&&n.start))throw new Error("recorder unavailable");try{await Lr(n.start(),e,"Recording start");const o=performance.now()+t;for(;performance.now()<o;){if((s=(i=n.status)==null?void 0:i.call(n))!=null&&s.active)return!0;await new Promise(l=>setTimeout(l,120))}return!0}catch(o){try{await((a=n.stop)==null?void 0:a.call(n))}catch{}throw o}}async function bl({timeout:e=8e3}={}){var n,r;const t=(n=window.XRA)==null?void 0:n.recorder;if(t!=null&&t.stop)try{await Lr(t.stop(),e,"Recording stop")}catch(i){try{await((r=t.stop)==null?void 0:r.call(t))}catch{}throw i}}function zr(){var e,t,n;Q.cleanScreen=!Q.cleanScreen,document.body.classList.toggle("xra-total-clean-screen",Q.cleanScreen);try{(n=(t=(e=window.XRA)==null?void 0:e.ui)==null?void 0:t.setHidden)==null||n.call(t,Q.cleanScreen)}catch{}}function xl(){var e;try{Object.assign(Ye,ts(((e=window.XRA)==null?void 0:e.config)||{}))}catch{}}function rs(){var e;try{const t=(e=window.SA_bridge)==null?void 0:e.backend;t&&typeof t.status=="function"&&(Q.status=t.status()||{})}catch{}}function kl(){const e=()=>window.XRA&&window.XRA.config?(Object.assign(Ye,ts(window.XRA.config)),Q.ready=!0,rs(),window.addEventListener("keydown",t=>{t.key==="Escape"&&Q.cleanScreen&&(t.preventDefault(),zr())},!0),!0):!1;if(!e()){const t=setInterval(()=>{e()&&clearInterval(t)},200)}}const Sl={camera:{title:"Camera",icon:"Camera"},devices:{title:"Devices",icon:"SlidersHorizontal"},pose_model:{title:"Pose model",icon:"PersonStanding"},performance:{title:"Performance",icon:"Zap"},tracking:{title:"Motion capture",icon:"Activity"},body:{title:"Body",icon:"PersonStanding"},collider:{title:"Body collider",icon:"Shield"},lip:{title:"Audio & Lip-sync",icon:"Mic"},background:{title:"Background",icon:"Image"},avatar:{title:"Character position (avatar only)",icon:"User"},second_avatar:{title:"Remote avatar (Studio Link)",icon:"Globe"},stage:{title:"3D Stage & Environment",icon:"Landmark"},recorder:{title:"Recording / capture",icon:"Video"},visual_effects:{title:"Visual effects",icon:"Sparkles"},debug:{title:"Diagnostics",icon:"Bug"},ui:{title:"UI & overlays",icon:"Monitor"}},is=["performance","tracking","body","collider","lip","background","stage","avatar","second_avatar","recorder","visual_effects","debug","ui","camera","devices","pose_model"],El=new Set(["left_settings","_custom_","_excluded_"]),$l=new Set(["camera.view_presets","camera.selected_view_preset","ui.preview_video","ui.preview_wireframe","ui.preview_debug","performance.auto_last_result","recorder.output_dir"]);function as(e){const t=String(e).replace(/_/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").trim();return t.charAt(0).toUpperCase()+t.slice(1)}const Al={"ui.language":{type:"select",options:()=>{var e,t;return((t=(e=window.XRA)==null?void 0:e.i18n)==null?void 0:t.LANGUAGES)||[["en","English"]]}},"background.mode":{type:"select",options:[["color","Color"],["image","Image"],["none","None (transparent · OBS)"]]},"background.color":{type:"color"},"background.path":{type:"text"},"ui.mocap_view":{type:"select",label:"Mocap window",options:[["off","Off"],["both","Webcam + skeleton"],["wireframe","Skeleton only"],["video","Webcam only"]]},"ui.mocap_visibility":{type:"select",label:"Mocap window visibility",options:[["always","Always on (black while idle)"],["auto","Auto (hide when tracking is off)"]]},"performance.tracking_pipeline":{type:"select",label:"Tracking mode",options:[["FULL_BODY","Full Body"],["FACE","Face only"],["UPPER_BODY","Upper body"]]},"performance.render_resolution":{type:"select",options:[["720p","720p (HD · GPU Saving)"],["1080p","1080p (Full HD · Recommended)"],["1440p","1440p (2K · High resolution)"]]},"performance.render_fps":{type:"slider",min:15,max:240,step:1},"performance.gpu_preference":{type:"select",label:"Graphics card (GPU)",options:[["default","Default"],["high-performance","Dedicated GPU (High Performance)"],["low-power","Integrated GPU (Low Power)"]]},"performance.shadows":{type:"select",options:[["auto","Auto"],["on","Enabled"],["off","Disabled (GPU saving)"]]},"performance.antialias":{type:"select",label:"Anti-Aliasing (AA)",options:[["auto","Enabled (Hardware MSAA · Recommended)"],["off","Disabled"]]},"performance.spring_bone":{type:"select",label:"Hair/cloth physics (Spring Bone)",options:[["full","Full (every frame)"],["half","Half (1 frame out of 2 · Saving)"],["off","Off"]]},"performance.infer_mode":{type:"select",options:[["native","Native (Auto)"],["640x360","640×360 (Recommended · 30 FPS smooth)"],["640x480","640×480 (Standard 4:3 format)"],["1280x720","1280×720 (HD 720p · High precision)"]]},"performance.pose_fps":{type:"slider",min:5,max:30,step:1},"performance.hand_fps":{type:"slider",min:5,max:30,step:1},"performance.min_tracking_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_pose_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_face_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_joint_confidence":{type:"slider",min:.05,max:1,step:.05},"tracking.hand_recovery_mode":{type:"select",options:[["normal","Normal"],["aggressive","Aggressive"],["off","Off"]]},"tracking.hand_detection_sensitivity":{type:"select",options:[["high","High"],["normal","Normal"],["low","Low"]]},"tracking.stabilize_hand_percent":{type:"slider",min:0,max:100,step:1},"tracking.stabilize_arm":{type:"slider",min:0,max:100,step:1},"tracking.stabilize_arm_time":{type:"slider",min:0,max:2,step:.05},"tracking.native_smoothing":{type:"slider",min:0,max:1,step:.01},"tracking.body_bend_reduction":{type:"slider",min:0,max:1,step:.01},"tracking.upper_body_guard_strength":{type:"slider",min:0,max:1,step:.01},"tracking.guard_jump_deg":{type:"slider",min:5,max:120,step:1},"tracking.guard_hold_ms":{type:"slider",min:0,max:2e3,step:10},"tracking.guard_reacquire_deg":{type:"slider",min:5,max:120,step:1},"tracking.adaptive_smoothing_strength":{type:"slider",min:0,max:1,step:.01},"tracking.guard_confidence_min":{type:"slider",min:0,max:1,step:.01},"tracking.guard_release_ms":{type:"slider",min:0,max:2e3,step:10},"tracking.guard_mode":{type:"select",options:[["off","Off"],["auto","Auto"]]},"tracking.desk_torso_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_hips_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_legs_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_max_yaw_deg":{type:"slider",min:0,max:90,step:1},"tracking.desk_max_pitch_deg":{type:"slider",min:0,max:90,step:1},"tracking.desk_max_roll_deg":{type:"slider",min:0,max:90,step:1},"body.anchor_strength":{type:"slider",min:0,max:1,step:.01},"body.transition_ms":{type:"slider",min:0,max:2e3,step:10},"avatar.offset_x":{type:"slider",min:-5,max:5,step:.01},"avatar.offset_y":{type:"slider",min:-5,max:5,step:.01},"avatar.offset_z":{type:"slider",min:-5,max:5,step:.01},"avatar.rotation_y":{type:"slider",min:-180,max:180,step:1},"second_avatar.offset_x":{type:"slider",min:-20,max:20,step:.1},"second_avatar.offset_y":{type:"slider",min:-10,max:10,step:.1},"second_avatar.offset_z":{type:"slider",min:-10,max:10,step:.1},"second_avatar.rotation_y":{type:"slider",min:-180,max:180,step:1},"stage.scale":{type:"slider",min:.1,max:5,step:.01},"stage.rotation_x":{type:"slider",min:-180,max:180,step:1},"stage.rotation_y":{type:"slider",min:-180,max:180,step:1},"stage.rotation_z":{type:"slider",min:-180,max:180,step:1},"stage.offset_x":{type:"slider",min:-10,max:10,step:.05},"stage.offset_y":{type:"slider",min:-10,max:10,step:.05},"stage.offset_z":{type:"slider",min:-10,max:10,step:.05},"stage.scene_zoom":{type:"slider",min:.5,max:3,step:.01},"stage.lights_intensity":{type:"slider",min:0,max:3,step:.05},"collider.preset":{type:"select",options:[["CUSTOM","Custom"],["NONE","None"]]},"collider.reaction":{type:"select",options:[["z_push","Z push"],["bounce","Bounce"],["block","Block"]]},"collider.head":{type:"slider",min:0,max:200,step:1},"collider.chest":{type:"slider",min:0,max:200,step:1},"collider.waist":{type:"slider",min:0,max:200,step:1},"collider.hip":{type:"slider",min:0,max:200,step:1},"collider.front_clearance":{type:"slider",min:0,max:50,step:1},"lip.analysis_fps":{type:"slider",min:5,max:60,step:1},"lip.fft_size":{type:"select",label:"FFT size",options:[["256","256"],["512","512"],["1024","1024"],["2048","2048"]]},"lip.mic_mix":{type:"slider",min:0,max:1,step:.01},"lip.threshold":{type:"slider",min:0,max:.2,step:.001},"lip.response_gain":{type:"slider",min:0,max:3,step:.05},"lip.vowel_emphasis":{type:"slider",min:0,max:3,step:.05},"recorder.mode":{type:"select",label:"Recording source",options:[["video_audio","Video + Audio"],["video","Video only"],["audio","Audio only"]]},"recorder.audio_only_variant":{type:"select",label:"Audio only mode",options:[["both","Processed + RAW"],["processed","Processed"],["raw","RAW"]]},"recorder.capture_source":{type:"select",label:"Output source",options:[["classic_v74","Classic output · recommended"],["clean_scene","Clean scene output · experimental (no UI)"],["native_xr","XR native video only · fallback"]]},"recorder.output_format":{type:"select",options:[["webm","WebM"],["mp4","MP4"]]},"recorder.audio_profile":{type:"select",options:[["podcast","Podcast"],["call","Call (Browser echo/noise filters)"]]},"recorder.hardware_encode":{type:"select",options:[["auto","Auto"],["on","On"],["off","Off (CPU)"]]},"recorder.width":{type:"slider",min:320,max:3840,step:2},"recorder.height":{type:"slider",min:240,max:2160,step:2},"recorder.fps":{type:"slider",min:15,max:60,step:1},"recorder.gate_threshold_db":{type:"slider",min:-80,max:-5,step:.5},"recorder.gate_hold_ms":{type:"slider",min:0,max:1e3,step:10},"recorder.gate_release_ms":{type:"slider",min:0,max:1e3,step:10},"recorder.video_bps":{type:"slider",min:5e5,max:2e7,step:1e5},"recorder.audio_bps":{type:"slider",min:32e3,max:32e4,step:8e3},"recorder.segment_minutes":{type:"select",options:[["0","Off"],["30","Every 30 min"],["60","Every 60 min"]]},"recorder.raw_audio_format":{type:"select",options:[["flac","FLAC (lossless)"],["wav","WAV (large)"]]},"recorder.filename":{type:"text"},"camera.optimized":{type:"toggle"},"camera.width":{type:"slider",min:160,max:1920,step:2},"camera.height":{type:"slider",min:120,max:1080,step:2},"camera.fps":{type:"slider",min:5,max:60,step:1}};function Ml(e){const t=[];for(const[n,r]of Object.entries(e||{})){if(El.has(n)||!r||typeof r!="object"||Array.isArray(r))continue;const i=Sl[n]||{},s=[];for(const[a,o]of Object.entries(r)){const l=`${n}.${a}`;if($l.has(l))continue;const c=Al[l]||{};if(c.hidden||o!==null&&typeof o=="object")continue;const f=c.type||(typeof o=="boolean"?"toggle":typeof o=="number"?"number":"text");s.push({type:f,path:l,label:c.label||as(a),min:c.min,max:c.max,step:c.step,options:c.options})}s.length&&t.push({id:n,title:i.title||as(n),icon:i.icon||"⚙",controls:s})}return t.sort((n,r)=>{const i=is.indexOf(n.id),s=is.indexOf(r.id);return(i<0?999:i)-(s<0?999:s)}),t}var Nl=_e("<option> </option>"),Tl=_e("<select></select>"),Cl=_e("<select><option> </option><option> </option></select>"),Ol=_e('<span class="xra-val"> </span> <div class="xra-meter-wrap"><div class="xra-meter"></div> <input class="xra-meter-input" type="range"/></div> <div class="xra-meter-scale"><span> </span><span> </span></div>',1),Pl=_e('<input type="checkbox"/>'),Rl=_e('<input type="color"/>'),Il=_e('<input type="number"/>'),Ll=_e('<input type="text"/>'),zl=_e('<label><span class="xra-row-label"> </span> <!></label>');function Dl(e,t){kt(t,!0);const n=Fe(()=>typeof t.control.options=="function"?t.control.options():t.control.options||[]),r=_=>_===!1?"off":"auto",i=_=>_==="off"?!1:null;var s=zl();let a;var o=B(s),l=G(o,!0),c=O(o,2);{var f=_=>{var y=Tl();jt(y,21,()=>v(n),Va,(E,k)=>{var A=Nl(),M=G(A,!0),P={};he(T=>{W(M,T),P!==(P=v(k)[0])&&(A.value=(A.__value=P)??"")},[()=>re(v(k)[1])]),$(E,A)});var w;cn(y),he(E=>{w!==(w=E)&&(y.value=(y.__value=w)??"",Lt(y,w))},[()=>je(t.control.path)]),K("change",y,E=>ot(t.control.path,E.currentTarget.value)),$(_,y)},p=_=>{var y=Cl(),w=B(y),E=G(w,!0);w.value=w.__value="auto";var k=O(w),A=G(k,!0);k.value=k.__value="off";var M;cn(y),he((P,T,L)=>{W(E,P),W(A,T),M!==(M=L)&&(y.value=(y.__value=M)??"",Lt(y,M))},[()=>re("Auto (follow tracking)"),()=>re("Off"),()=>r(je(t.control.path))]),K("change",y,P=>ot(t.control.path,i(P.currentTarget.value))),$(_,y)},b=_=>{const y=Fe(()=>Number(je(t.control.path,t.control.min))),w=Fe(()=>t.control.max>t.control.min?Math.round((v(y)-t.control.min)/(t.control.max-t.control.min)*100):0);var E=Ol(),k=q(E),A=G(k,!0),M=O(k,2),P=B(M),T=O(P,2),L=O(M,2),te=B(L),Se=G(te,!0),Ce=O(te),me=G(Ce,!0);he(Ee=>{W(A,Ee),Or(P,`--xra-fill:${v(w)??""}%`),Ne(T,"min",t.control.min),Ne(T,"max",t.control.max),Ne(T,"step",t.control.step),Pr(T,v(y)),W(Se,t.control.min),W(me,t.control.max)},[()=>je(t.control.path)]),K("input",T,Ee=>ot(t.control.path,Number(Ee.currentTarget.value))),$(_,E)},h=_=>{var y=Pl();he(w=>cl(y,w),[()=>!!je(t.control.path)]),K("change",y,w=>ot(t.control.path,w.currentTarget.checked)),$(_,y)},g=_=>{var y=Rl();he(w=>Pr(y,w),[()=>je(t.control.path)]),K("input",y,w=>ot(t.control.path,w.currentTarget.value)),$(_,y)},S=_=>{var y=Il();he(w=>{Ne(y,"step",t.control.step||"any"),Pr(y,w)},[()=>je(t.control.path,0)]),K("input",y,w=>ot(t.control.path,Number(w.currentTarget.value))),$(_,y)},d=_=>{var y=Ll();he(w=>Pr(y,w),[()=>je(t.control.path,"")]),K("change",y,w=>ot(t.control.path,w.currentTarget.value)),$(_,y)};Ge(c,_=>{t.control.type==="select"?_(f):t.control.type==="tristate"?_(p,1):t.control.type==="slider"?_(b,2):t.control.type==="toggle"?_(h,3):t.control.type==="color"?_(g,4):t.control.type==="number"?_(S,5):t.control.type==="text"&&_(d,6)})}he(_=>{a=We(s,1,"xra-row",null,a,{"xra-row-slider":t.control.type==="slider"}),W(l,_)},[()=>re(t.control.label)]),$(e,s),St()}ln(["change","input"]);function ss(e,t){kt(t,!0);var n=Z(),r=q(n);jt(r,17,()=>t.section.controls,i=>i.path,(i,s)=>{var a=Z(),o=q(a);{var l=f=>{Dl(f,{get control(){return v(s)}})},c=Fe(()=>!v(s).when||v(s).when(Ye));Ge(o,f=>{v(c)&&f(l)})}$(i,a)}),$(e,n),St()}co();/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
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
 */const os=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();var Fl=Ho("<svg><!><!></svg>");function ue(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]),r=se(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);kt(t,!1);let i=gt(t,"name",8,void 0),s=gt(t,"color",8,"currentColor"),a=gt(t,"size",8,24),o=gt(t,"strokeWidth",8,2),l=gt(t,"absoluteStrokeWidth",8,!1),c=gt(t,"iconNode",24,()=>[]);fl();var f=Fl();Za(f,(h,g,S)=>({...Bl,...h,...r,width:a(),height:a(),stroke:s(),"stroke-width":g,class:S}),[()=>Vl(r)?void 0:{"aria-hidden":"true"},()=>(sn(l()),sn(o()),sn(a()),Wt(()=>l()?Number(o())*24/Number(a()):o())),()=>(sn(os),sn(i()),sn(n),Wt(()=>os("lucide-icon","lucide",i()?`lucide-${i()}`:"",n.class)))]);var p=B(f);jt(p,1,c,Va,(h,g)=>{var S=Fe(()=>Wi(v(g),2));let d=()=>v(S)[0],_=()=>v(S)[1];var y=Z(),w=q(y);el(w,d,!0,(E,k)=>{Za(E,()=>({..._()}))}),$(h,y)});var b=O(p);oe(b,t,"default",{}),$(e,f),St()}function Hl(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];ue(e,ce({name:"camera"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Z(),o=q(a);oe(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function Ul(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 5H3"}],["path",{d:"M12 19H3"}],["path",{d:"M14 3v4"}],["path",{d:"M16 17v4"}],["path",{d:"M21 12h-9"}],["path",{d:"M21 19h-5"}],["path",{d:"M21 5h-7"}],["path",{d:"M8 10v4"}],["path",{d:"M8 12H3"}]];ue(e,ce({name:"sliders-horizontal"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Z(),o=q(a);oe(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function Wl(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"5",r:"1"}],["path",{d:"m9 20 3-6 3 6"}],["path",{d:"m6 8 6 2 6-2"}],["path",{d:"M12 10v4"}]];ue(e,ce({name:"person-standing"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Z(),o=q(a);oe(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function jl(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];ue(e,ce({name:"zap"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Z(),o=q(a);oe(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function Xl(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]];ue(e,ce({name:"activity"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Z(),o=q(a);oe(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function Gl(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];ue(e,ce({name:"shield"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Z(),o=q(a);oe(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function Yl(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 19v3"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3"}]];ue(e,ce({name:"mic"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Z(),o=q(a);oe(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function ql(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]];ue(e,ce({name:"image"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Z(),o=q(a);oe(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function Kl(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 18v-7"}],["path",{d:"M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"}],["path",{d:"M14 18v-7"}],["path",{d:"M18 18v-7"}],["path",{d:"M3 22h18"}],["path",{d:"M6 18v-7"}]];ue(e,ce({name:"landmark"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Z(),o=q(a);oe(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function Zl(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];ue(e,ce({name:"user"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Z(),o=q(a);oe(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function Ql(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];ue(e,ce({name:"globe"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Z(),o=q(a);oe(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function Jl(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]];ue(e,ce({name:"video"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Z(),o=q(a);oe(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function ec(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];ue(e,ce({name:"sparkles"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Z(),o=q(a);oe(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function tc(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 20v-9"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97"}],["path",{d:"M22 13h-4"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97"}],["path",{d:"M6 13H2"}],["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13"}]];ue(e,ce({name:"bug"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Z(),o=q(a);oe(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function nc(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]];ue(e,ce({name:"monitor"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Z(),o=q(a);oe(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function rc(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"10",r:"8"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 22h10"}],["path",{d:"M12 22v-4"}]];ue(e,ce({name:"webcam"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Z(),o=q(a);oe(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function ls(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}]];ue(e,ce({name:"circle"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Z(),o=q(a);oe(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function ic(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];ue(e,ce({name:"square"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Z(),o=q(a);oe(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function ac(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]];ue(e,ce({name:"eye"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Z(),o=q(a);oe(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function sc(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}],["path",{d:"m2 2 20 20"}]];ue(e,ce({name:"eye-off"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Z(),o=q(a);oe(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function oc(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];ue(e,ce({name:"folder-open"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Z(),o=q(a);oe(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function lc(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];ue(e,ce({name:"info"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Z(),o=q(a);oe(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function cc(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ue(e,ce({name:"x"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Z(),o=q(a);oe(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function uc(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];ue(e,ce({name:"settings"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Z(),o=q(a);oe(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function fc(e,t){const n=se(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ue(e,ce({name:"refresh-cw"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Z(),o=q(a);oe(o,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function qe(e,t){const n={Camera:Hl,SlidersHorizontal:Ul,PersonStanding:Wl,Zap:jl,Activity:Xl,Shield:Gl,Mic:Yl,Image:ql,Landmark:Kl,User:Zl,Globe:Ql,Video:Jl,Sparkles:ec,Bug:tc,Monitor:nc,Webcam:rc,Circle:ls,Square:ic,Eye:ac,EyeOff:sc,FolderOpen:oc,Info:lc,X:cc,Settings:uc,RefreshCw:fc};let r=gt(t,"name",3,"Circle"),i=gt(t,"size",3,16),s=gt(t,"strokeWidth",3,2),a=gt(t,"class",3,"");const o=Fe(()=>n[r()]??ls);var l=Z(),c=q(l);Jo(c,()=>v(o),(f,p)=>{p(f,{get size(){return i()},get"stroke-width"(){return s()},get class(){return a()}})}),$(e,l)}var dc=_e('<div class="xra-sec-body"><!></div>'),vc=_e('<details class="xra-sec"><summary><span class="xra-sec-title"><!> <span> </span></span> <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></summary> <!></details>');function pc(e,t){kt(t,!0);const n="ui.sections_open";let r=Y(Le(Wt(()=>{var d;return((d=je(n,{}))==null?void 0:d[t.section.id])??!1}))),i;function s(){C(r,!v(r)),ot(`${n}.${t.section.id}`,v(r))}tn(()=>{Q.focusNonce,!(Q.focusSection!==t.section.id||!Q.panelOpen)&&(C(r,!0),ot(`${n}.${t.section.id}`,!0),requestAnimationFrame(()=>i==null?void 0:i.scrollIntoView({block:"nearest",behavior:"smooth"})))});var a=vc(),o=B(a),l=B(o),c=B(l);qe(c,{get name(){return t.section.icon},size:15,class:"xra-sec-icon"});var f=O(c,2),p=G(f,!0),b=O(l,2);let h;var g=O(o,2);{var S=d=>{var _=dc(),y=B(_);ss(y,{get section(){return t.section}}),$(d,_)};Ge(g,d=>{v(r)&&d(S)})}Ai(a,d=>i=d,()=>i),he(d=>{a.open=v(r),W(p,d),h=We(b,0,"xra-sec-chevron",null,h,{open:v(r)})},[()=>re(t.section.title)]),K("click",o,d=>{d.preventDefault(),s()}),$(e,a),St()}ln(["click"]);var or=_e('<option class="svelte-x8svx4"> </option>'),hc=_e('<div class="warn svelte-x8svx4"> </div>'),_c=_e('<div class="xra-startup svelte-x8svx4"><div class="card svelte-x8svx4" role="dialog" aria-label="XR Animator VMC"><div class="col left svelte-x8svx4"><div class="brand svelte-x8svx4"><span class="logo svelte-x8svx4">XR</span> <span class="name svelte-x8svx4">Animator <b class="svelte-x8svx4">VMC</b></span></div> <div class="sub svelte-x8svx4"> </div> <pre class="log svelte-x8svx4"> </pre> <div class="credits svelte-x8svx4">Engine: XR Animator by Butz Yung (CC BY-NC-SA 4.0)<br class="svelte-x8svx4"/> Backends: native MediaPipe · optional ONNX Runtime</div></div> <div class="col right svelte-x8svx4"><div class="group-title svelte-x8svx4"> </div> <button type="button" class="q primary svelte-x8svx4"> </button> <button type="button" class="q svelte-x8svx4"> </button> <div class="group-title svelte-x8svx4"> <span></span></div> <div class="row svelte-x8svx4"><select class="svelte-x8svx4"><!></select> <button type="button" class="q icon svelte-x8svx4"><!></button></div> <!> <div class="group-title svelte-x8svx4"> </div> <label class="field svelte-x8svx4"><span class="svelte-x8svx4"> </span> <select class="svelte-x8svx4"></select></label> <label class="field svelte-x8svx4"><span class="svelte-x8svx4"> </span> <select class="svelte-x8svx4"></select></label> <button type="button" class="q ghost svelte-x8svx4"> </button></div></div></div>');function gc(e,t){kt(t,!0);const n=()=>window.XRA,r=m=>re(m),i=["AUTO","ECO","LOW","BALANCED","QUALITY","HIGH","MAX","CUSTOM"],s=4e3;function a(){var m,x,N;try{(N=(x=(m=n())==null?void 0:m.profileService)==null?void 0:x.save)==null||N.call(x,0)}catch{}}const o=(()=>{var x,N;const m=(N=(x=n())==null?void 0:x.i18n)==null?void 0:N.LANGUAGES;return Array.isArray(m)&&m.length?m:[["auto","Auto / System"],["en","English"],["it","Italiano"]]})();let l=Y("auto"),c=Y("CUSTOM"),f=Y("default"),p=Y(Le([])),b=Y(!1),h=Y(""),g=Y(!1),S=Y(""),d=Y(""),_=Y(!1),y=Y(!1),w=Y(!1),E=Y(Le([])),k=!1,A=!1,M=0,P=0,T=[];function L(m){(v(E).length?v(E)[v(E).length-1]:"")!==m&&C(E,[...v(E),m].slice(-40),!0)}function te(){var m,x,N;k||(k=!0,P&&(clearInterval(P),P=0),a(),Q.startupOpen=!1,(N=(x=(m=n())==null?void 0:m.ui)==null?void 0:x.refresh)==null||N.call(x))}async function Se(){var m,x;C(_,!0),L("Starting tracking…");try{await ns()}catch(N){(x=(m=n()).toast)==null||x.call(m,"Tracking: "+N.message,"warn",4500)}finally{C(_,!1),te()}}async function Ce(m){const x=n();if(m=String(m||"CUSTOM").toUpperCase(),m==="CUSTOM"){x.config.performance.master_preset="CUSTOM",a(),L("Preset: CUSTOM");return}if(m==="AUTO"){L("Benchmarking hardware…");const N=await x.performance.benchmarkHardwareOnly();L(`AUTO → ${N.preset} (${N.fps.toFixed(1)} fps)`),await x.performance.applyPresetSafe(N.preset),x.config.performance.master_preset="AUTO",x.config.performance.auto_last_result=N,a();return}L(`Applying preset: ${m}…`),await x.performance.applyPresetSafe(m),L(`Preset ${m} applied`)}function me(m=""){var X,ee,ie;const x=(X=n())==null?void 0:X.nativeBridge,N=((ee=x==null?void 0:x.activeCamera)==null?void 0:ee.call(x))||{},I=!!((ie=x==null?void 0:x.cameraRunning)!=null&&ie.call(x));C(g,I),C(S,m||(I?`${r("ON")} · ${N.label||r("Default camera")}`:r("OFF")),!0)}async function Ee(m=!1){var N,I,X;const x=(N=n())==null?void 0:N.nativeBridge;if(x!=null&&x.enumerateCameras){C(w,!0);try{const ee=await x.enumerateCameras({requestPermission:m}),ie=x.activeCamera()||{};C(p,(ee||[]).map(Ve=>({deviceId:Ve.deviceId,label:Ve.label})),!0);const ye=ie.deviceId||((I=Ye.devices)==null?void 0:I.camera_device_id)||"";C(h,v(p).some(Ve=>Ve.deviceId===ye)?ye:((X=v(p)[0])==null?void 0:X.deviceId)||"",!0),C(b,!0),me(),L(v(p).length?`${v(p).length} camera${v(p).length>1?"s":""} detected`:"No cameras found")}catch{C(b,!0),me(r("Camera unavailable")),L("Camera enumeration failed")}finally{C(w,!1)}}}async function qt(m){var X,ee;const x=(X=n())==null?void 0:X.nativeBridge,N=((ee=m==null?void 0:m.currentTarget)==null?void 0:ee.value)??v(h),I=v(p).find(ie=>ie.deviceId===N);if(I){C(w,!0);try{const ie={deviceId:I.deviceId,label:I.label};x.cameraRunning()?await x.switchCamera(ie):await x.setCameraPreference(ie),me(),L(`Webcam: ${I.label}`)}catch(ie){me("Error · "+ie.message),L("Webcam switch failed")}finally{C(w,!1)}}}function ut(){var N,I,X,ee,ie,ye,Ve,Pe;const m=(X=(I=(N=n())==null?void 0:N.xraBackend)==null?void 0:I.snapshot)==null?void 0:X.call(I),x=(m==null?void 0:m.capture)||((Pe=(Ve=(ye=(ie=(ee=window.SA_bridge)==null?void 0:ee.backend)==null?void 0:ie.status)==null?void 0:ye.call(ie))==null?void 0:Ve.backend)==null?void 0:Pe.capture);if(x!=null&&x.camera_busy){const ft=(x.busy_processes&&x.busy_processes.length?x.busy_processes:x.busy_process?[x.busy_process]:[]).filter(pr=>!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(String(pr).trim()));if(ft.length)return{busy:!0,proc:ft.join(", ")}}if(x!=null&&x.last_error&&x.last_error.includes("Webcam occupata")){const ge=x.last_error.match(/Webcam occupata da:\s*([^.]+)/i),ft=ge?ge[1].trim():"";if(!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(ft))return{busy:!0,proc:x.last_error}}return{busy:!1,proc:""}}function wt(){var m,x,N,I,X,ee,ie,ye,Ve;if(typeof((x=(m=n())==null?void 0:m.nativeBridge)==null?void 0:x.isAvatarReady)=="function")return n().nativeBridge.isAvatarReady();if((N=window.MMD_SA)!=null&&N.MMD_started){const Pe=(ee=(X=(I=window.MMD_SA)==null?void 0:I.THREEX)==null?void 0:X.get_model)==null?void 0:ee.call(X,0);let ge=Pe;if((Pe==null?void 0:Pe.type)==="MMD_dummy")try{ge=Pe.model||null}catch{ge=null}const ft=((ie=ge==null?void 0:ge.model)==null?void 0:ie.scene)||(ge==null?void 0:ge.mesh)||(ge==null?void 0:ge.scene)||null;if(ge&&!(Pe!=null&&Pe.loading)&&!ge.loading&&!((Ve=(ye=window.MMD_SA)==null?void 0:ye.THREEX)!=null&&Ve._loading_model)&&ft)return ft.visible!==!1}return!1}function $e(){var x,N,I;const m=(x=n())==null?void 0:x.xraBackend;return!m||!m.active?!0:!!((I=(N=m.snapshot)==null?void 0:N.call(m))!=null&&I.ready)}function Be(){if(k)return;const m=ut();m.busy?(C(d,`Webcam in use by another application (${m.proc}). Close it to start tracking.`),L("Webcam is busy — close the other app")):C(d,""),wt()&&L("Avatar ready"),$e()&&L("Mocap backend ready")}function Dn(){Be(),!v(_)&&!A&&Date.now()-M>s&&te()}async function Bn(m){var N,I,X;const x=((N=m==null?void 0:m.currentTarget)==null?void 0:N.value)??v(c);C(c,x,!0),C(y,!0);try{await Ce(x),n().events.emit("state",{path:"performance.master_preset",value:n().config.performance.master_preset}),xl()}catch(ee){console.error("[XRA START]",ee),L("Preset error: "+ee.message)}finally{C(y,!1),(X=(I=n().ui)==null?void 0:I.refresh)==null||X.call(I)}}function Vn(m){var x,N,I,X;C(l,((x=m==null?void 0:m.currentTarget)==null?void 0:x.value)??v(l),!0),(X=(I=(N=n())==null?void 0:N.i18n)==null?void 0:I.setLanguage)==null||X.call(I,v(l))}async function R(){var m,x;try{await((x=(m=n().nativeBridge)==null?void 0:m.openVrmPicker)==null?void 0:x.call(m))}catch(N){n().toast("VRM loader: "+N.message,"error",4500)}}Mi(()=>{var N,I,X,ee,ie,ye,Ve,Pe,ge,ft,pr,Ss,Es;const m=n();M=Date.now(),L("Initializing XR Animator VMC…"),C(l,((I=(N=m==null?void 0:m.config)==null?void 0:N.ui)==null?void 0:I.language)||"auto",!0),C(c,((ee=(X=m==null?void 0:m.config)==null?void 0:X.performance)==null?void 0:ee.master_preset)==="MINIMAL"?"ECO":((ye=(ie=m==null?void 0:m.config)==null?void 0:ie.performance)==null?void 0:ye.master_preset)||"CUSTOM",!0),C(f,((Pe=(Ve=m==null?void 0:m.config)==null?void 0:Ve.background)==null?void 0:Pe.path)||((ft=(ge=m==null?void 0:m.config)==null?void 0:ge.background)==null?void 0:ft.color)||"default",!0),me(),setTimeout(()=>Ee(!1),100),P=setInterval(Dn,250),window.addEventListener("MMDStarted",Be),(pr=m.xraBackend)!=null&&pr.onStatus&&m.xraBackend.onStatus(Be);const x=mn=>{mn.key==="Escape"&&te()};window.addEventListener("keydown",x,!0),Be(),(Es=(Ss=m.whenNativeReady)==null?void 0:Ss.call(m))==null||Es.then(()=>{Q.startupOpen&&Ee(!1)});for(const mn of["camera-started","camera-stopped","camera-switched"])T.push(m.events.on(mn,()=>{Q.startupOpen&&Ee(!1)}));for(const mn of["avatar-loading","avatar-changed","avatar-ready"])T.push(m.events.on(mn,()=>Be()));return()=>{P&&clearInterval(P),window.removeEventListener("MMDStarted",Be),window.removeEventListener("keydown",x,!0);for(const mn of T)try{mn()}catch{}T=[]}});var j=_c(),ne=B(j),ve=B(ne),Oe=O(B(ve),2),et=G(Oe,!0),Ot=O(Oe,2),hn=G(Ot,!0),Ti=O(ve,2),vs=B(Ti),Tc=G(vs,!0),Fr=O(vs,2),Cc=G(Fr,!0),Hr=O(Fr,2),Oc=G(Hr,!0),ps=O(Hr,2),hs=B(ps),Pc=O(hs);let _s;var gs=O(ps,2),Kt=B(gs),Rc=B(Kt);{var Ic=m=>{var x=or(),N=G(x,!0);x.value=x.__value="",he(I=>W(N,I),[()=>r("Loading cameras…")]),$(m,x)},Lc=m=>{var x=or(),N=G(x,!0);x.value=x.__value="",he(I=>W(N,I),[()=>r("No cameras found")]),$(m,x)},zc=m=>{var x=Z(),N=q(x);jt(N,17,()=>v(p),I=>I.deviceId,(I,X)=>{var ee=or(),ie=G(ee,!0),ye={};he(()=>{W(ie,v(X).label),ye!==(ye=v(X).deviceId)&&(ee.value=(ee.__value=ye)??"")}),$(I,ee)}),$(m,x)};Ge(Rc,m=>{v(b)?v(p).length?m(zc,-1):m(Lc,1):m(Ic)})}var Ur;cn(Kt);var vr=O(Kt,2),Dc=B(vr);qe(Dc,{name:"RefreshCw",size:14});var ms=O(gs,2);{var Bc=m=>{var x=hc(),N=G(x,!0);he(()=>W(N,v(d))),$(m,x)};Ge(ms,m=>{v(d)&&m(Bc)})}var ys=O(ms,2),Vc=G(ys,!0),ws=O(ys,2),bs=B(ws),Fc=G(bs,!0),_n=O(bs,2);jt(_n,20,()=>i,m=>m,(m,x)=>{var N=or(),I=G(N,!0),X={};he(()=>{W(I,x),X!==(X=x)&&(N.value=(N.__value=X)??"")}),$(m,N)});var Wr;cn(_n);var xs=O(ws,2),ks=B(xs),Hc=G(ks,!0),gn=O(ks,2);jt(gn,21,()=>o,([m,x])=>m,(m,x)=>{var N=Fe(()=>Wi(v(x),2));let I=()=>v(N)[0],X=()=>v(N)[1];var ee=or(),ie=G(ee,!0),ye={};he(()=>{W(ie,X()),ye!==(ye=I())&&(ee.value=(ee.__value=ye)??"")}),$(m,ee)});var jr;cn(gn);var Ci=O(xs,2),Uc=G(Ci,!0);he((m,x,N,I,X,ee,ie,ye,Ve,Pe,ge,ft)=>{W(et,m),W(hn,x),W(Tc,N),Fr.disabled=v(_),W(Cc,I),Hr.disabled=v(_),W(Oc,X),W(hs,`${ee??""} `),_s=We(Pc,1,"dot svelte-x8svx4",null,_s,{on:v(g)}),Kt.disabled=v(w)||v(_),Ur!==(Ur=v(h))&&(Kt.value=(Kt.__value=Ur)??"",Lt(Kt,Ur)),Ne(vr,"title",ie),Ne(vr,"aria-label",ye),vr.disabled=v(w)||v(_),W(Vc,Ve),W(Fc,Pe),_n.disabled=v(y)||v(_),Wr!==(Wr=v(c))&&(_n.value=(_n.__value=Wr)??"",Lt(_n,Wr)),W(Hc,ge),gn.disabled=v(_),jr!==(jr=v(l))&&(gn.value=(gn.__value=jr)??"",Lt(gn,jr)),Ci.disabled=v(_),W(Uc,ft)},[()=>r("Quick setup · changes apply immediately."),()=>v(E).join(`
`),()=>r("Quick start"),()=>v(_)?r("Starting…"):r("Start tracking"),()=>r("Load / change VRM…"),()=>r("Webcam"),()=>r("Refresh cameras"),()=>r("Refresh cameras"),()=>r("Options"),()=>r("Master preset"),()=>r("Language"),()=>r("Continue")]),K("click",j,te),K("click",ne,m=>m.stopPropagation()),Tr("pointerenter",ne,()=>{A=!0,M=Date.now()}),K("pointermove",ne,()=>{M=Date.now()}),Tr("pointerleave",ne,()=>{A=!1,M=Date.now()}),K("click",Fr,Se),K("click",Hr,R),K("change",Kt,qt),K("click",vr,()=>Ee(!0)),K("change",_n,Bn),K("change",gn,Vn),K("click",Ci,te),$(e,j),St()}ln(["click","pointermove","change"]);var mc=_e('<button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button>'),yc=_e('<nav class="xra-dock group fixed left-2 top-1/2 z-[99990] flex w-[46px] max-h-[92vh] -translate-y-1/2 flex-col gap-0.5 overflow-hidden rounded-xl border border-white/10 bg-[var(--xra-ui-bg)] p-1.5 font-sans text-[12.5px] leading-snug text-[var(--xra-ui-fg)] shadow-[0_12px_40px_rgba(0,0,0,.55)] transition-[width] duration-200 hover:w-[232px]"><!> <div class="my-1 h-px bg-white/10"></div> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button></nav>');function wc(e,t){kt(t,!0);const n=()=>window.XRA;let r=Y(!1),i=Y(!1),s=0;function a(){var j,ne,ve,Oe,et;const R=n();if(R){try{C(r,!!((ne=(j=R.nativeBridge)==null?void 0:j.cameraRunning)!=null&&ne.call(j)))}catch{}try{C(i,!!((et=(Oe=(ve=R.recorder)==null?void 0:ve.status)==null?void 0:Oe.call(ve))!=null&&et.active))}catch{}}}let o=Y(!1),l=Y("");async function c(){var j,ne,ve,Oe;if(v(o))return;C(o,!0);const R=!v(r);C(l,R?"Starting…":"Stopping…",!0);try{R?(await ns(),C(r,!0)):(await yl(),C(r,!1))}catch(et){try{await((ne=(j=n().nativeBridge)==null?void 0:j.forceStopCamera)==null?void 0:ne.call(j))}catch{}C(r,!1),(Oe=(ve=n()).toast)==null||Oe.call(ve,"Tracking: "+et.message,"warn",4500)}finally{C(o,!1),C(l,""),setTimeout(a,250)}}let f=Y(!1),p=Y("");async function b(){var j,ne;if(v(f))return;C(f,!0);const R=!v(i);C(p,R?"Starting…":"Stopping…",!0);try{R?(await wl(),C(i,!0)):(await bl(),C(i,!1))}catch(ve){C(i,!1),(ne=(j=n()).toast)==null||ne.call(j,"Recording: "+ve.message,"warn",4500)}finally{C(f,!1),C(p,""),setTimeout(a,250)}}async function h(){var R,j,ne,ve;try{await((j=(R=n().nativeBridge)==null?void 0:R.openVrmPicker)==null?void 0:j.call(R))}catch(Oe){(ve=(ne=n()).toast)==null||ve.call(ne,"VRM loader: "+Oe.message,"error",4500)}}function g(){var R,j;try{(j=(R=n().nativeBridge)==null?void 0:R.showAbout)==null||j.call(R)}catch{}}const S=[{id:"ui",icon:"Monitor",label:"UI Settings"},{id:"camera",icon:"Camera",label:"Webcam settings"},{id:"avatar",icon:"User",label:"Model settings"},{id:"second_avatar",icon:"Globe",label:"Studio link"},{id:"stage",icon:"Landmark",label:"Environment + Camera"},{id:"background",icon:"Image",label:"Background"},{id:"lip",icon:"Mic",label:"Audio"}],d="hover:bg-white/10",_="flex-1 overflow-hidden opacity-0 transition-opacity duration-150 group-hover:opacity-100";Mi(()=>(a(),s=setInterval(a,1e3),()=>clearInterval(s)));var y=yc(),w=B(y);jt(w,17,()=>S,R=>R.id,(R,j)=>{var ne=mc();We(ne,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var ve=B(ne),Oe=B(ve);qe(Oe,{get name(){return v(j).icon},size:16});var et=O(ve,2);We(et,1,Tn(_));var Ot=G(et,!0);he((hn,Ti)=>{Ne(ne,"title",hn),W(Ot,Ti)},[()=>re(v(j).label),()=>re(v(j).label)]),K("click",ne,()=>gl(v(j).id)),$(R,ne)});var E=O(w,4),k=B(E),A=B(k);{let R=Fe(()=>v(r)?"text-emerald-400":"");qe(A,{name:"Webcam",size:16,get class(){return v(R)}})}var M=O(k,2);We(M,1,Tn(_));var P=G(M,!0),T=O(E,2),L=B(T),te=B(L);{let R=Fe(()=>v(f)?"Circle":v(i)?"Square":"Circle"),j=Fe(()=>v(i)?"text-red-400":"");qe(te,{get name(){return v(R)},size:16,get class(){return v(j)}})}var Se=O(L,2);We(Se,1,Tn(_));var Ce=G(Se,!0),me=O(T,2);We(me,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var Ee=B(me),qt=B(Ee);qe(qt,{name:"FolderOpen",size:16});var ut=O(Ee,2);We(ut,1,Tn(_));var wt=G(ut,!0),$e=O(me,2);We($e,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var Be=B($e),Dn=B(Be);qe(Dn,{name:"Info",size:16});var Bn=O(Be,2);We(Bn,1,Tn(_));var Vn=G(Bn,!0);he((R,j,ne,ve,Oe,et,Ot,hn)=>{We(E,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${v(r)?"bg-emerald-500/20 hover:bg-emerald-500/30":d} ${v(o)?"opacity-60":""}`),Ne(E,"title",R),E.disabled=v(o),W(P,j),We(T,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${v(i)?"bg-red-500/30 hover:bg-red-500/40 text-red-200":d} ${v(f)?"opacity-60":""}`),Ne(T,"title",ne),T.disabled=v(f),W(Ce,ve),Ne(me,"title",Oe),W(wt,et),Ne($e,"title",Ot),W(Vn,hn)},[()=>re("Tracking"),()=>v(o)?re(v(l)):v(r)?re("Tracking on"):re("Tracking off"),()=>re("Record"),()=>v(f)?re(v(p)):v(i)?re("Stop recording"):re("Record"),()=>re("Load / change VRM…"),()=>re("Load / change VRM…"),()=>re("About"),()=>re("About")]),Tr("pointerenter",y,()=>{Q.dockExpanded=!0}),Tr("pointerleave",y,()=>{Q.dockExpanded=!1}),K("click",E,c),K("click",T,b),K("click",me,h),K("click",$e,g),$(e,y),St()}ln(["click"]);var bc=_e('<div class="absolute inset-0 z-30 grid place-items-center bg-black text-[12px] text-[var(--xra-ui-fg)]"> </div>'),xc=_e('<div class="xra-mocap-window fixed z-[99991] flex flex-col overflow-hidden rounded-xl border border-white/15 bg-[var(--xra-ui-bg)] text-[var(--xra-ui-fg)] shadow-[0_16px_48px_rgba(0,0,0,.6)] font-sans"><header class="flex shrink-0 cursor-move touch-none select-none items-center gap-2 px-2 py-1.5"><!> <span class="flex-1 text-[12px] font-semibold"> </span> <select class="rounded-md border border-white/15 bg-[#101214] px-1.5 py-0.5 text-[11px] text-[var(--xra-ui-fg)]"><option> </option><option> </option><option> </option><option> </option></select> <button type="button" class="rounded-md border border-white/15 bg-white/5 px-1.5 py-0.5 cursor-pointer text-[var(--xra-ui-fg)]"><!></button></header> <div class="relative min-h-0 flex-1 overflow-hidden bg-black"><!> <div class="absolute bottom-0 right-0 z-20 h-5 w-5 cursor-nwse-resize touch-none"></div></div></div>');function kc(e,t){kt(t,!0);const n=()=>window.XRA,r=je("ui.mocap_window",{})||{};let i=Y(Le(Number.isFinite(r.x)?r.x:48)),s=Y(Le(Number.isFinite(r.y)?r.y:96)),a=Y(Le(Number.isFinite(r.w)?r.w:360)),o=Y(Le(Number.isFinite(r.h)?r.h:270)),l=Y(void 0),c=Y(!1),f=0;const p=Fe(()=>je("ui.mocap_visibility","always")!=="auto"||v(c));function b(){ot("ui.mocap_window",{x:Math.round(v(i)),y:Math.round(v(s)),w:Math.round(v(a)),h:Math.round(v(o))})}function h(){var y,w,E;try{(E=(w=(y=n())==null?void 0:y.nativeBridge)==null?void 0:w.updateMocapWindow)==null||E.call(w)}catch{}}function g(y,w){y.preventDefault();const E=y.clientX,k=y.clientY,A=v(i),M=v(s),P=v(a),T=v(o),L=Se=>{const Ce=Se.clientX-E,me=Se.clientY-k;w==="move"?(C(i,Math.max(0,Math.min(window.innerWidth-80,A+Ce)),!0),C(s,Math.max(0,Math.min(window.innerHeight-30,M+me)),!0)):(C(a,Math.max(200,Math.min(window.innerWidth-v(i),P+Ce)),!0),C(o,Math.max(130,Math.min(window.innerHeight-v(s),T+me)),!0))},te=()=>{window.removeEventListener("pointermove",L),window.removeEventListener("pointerup",te),b()};window.addEventListener("pointermove",L),window.addEventListener("pointerup",te)}tn(()=>{var w,E,k;const y=v(l);if(y){try{(k=(E=(w=n())==null?void 0:w.nativeBridge)==null?void 0:E.attachMocapWindow)==null||k.call(E,y)}catch{}return()=>{var A,M,P;try{(P=(M=(A=n())==null?void 0:A.nativeBridge)==null?void 0:M.detachMocapWindow)==null||P.call(M)}catch{}}}}),tn(()=>{v(i),v(s),v(a),v(o),v(c),h()}),Mi(()=>{const y=()=>{var w,E,k;C(c,!!((k=(E=(w=n())==null?void 0:w.nativeBridge)==null?void 0:E.cameraRunning)!=null&&k.call(E)))};return y(),f=setInterval(y,500),window.addEventListener("resize",h),()=>{clearInterval(f),window.removeEventListener("resize",h)}});var S=Z(),d=q(S);{var _=y=>{var w=xc(),E=B(w),k=B(E);qe(k,{name:"Activity",size:14});var A=O(k,2),M=G(A,!0),P=O(A,2),T=B(P),L=G(T,!0);T.value=T.__value="both";var te=O(T),Se=G(te,!0);te.value=te.__value="wireframe";var Ce=O(te),me=G(Ce,!0);Ce.value=Ce.__value="video";var Ee=O(Ce),qt=G(Ee,!0);Ee.value=Ee.__value="off";var ut;cn(P);var wt=O(P,2),$e=B(wt);qe($e,{name:"X",size:13});var Be=O(E,2),Dn=B(Be);{var Bn=R=>{var j=bc(),ne=G(j,!0);he(ve=>W(ne,ve),[()=>re("Tracking is off")]),$(R,j)};Ge(Dn,R=>{v(c)||R(Bn)})}var Vn=O(Dn,2);Ai(Be,R=>C(l,R),()=>v(l)),he((R,j,ne,ve,Oe,et,Ot,hn)=>{Or(w,`left:${v(i)??""}px; top:${v(s)??""}px; width:${v(a)??""}px; height:${v(o)??""}px;`),W(M,R),W(L,j),W(Se,ne),W(me,ve),W(qt,Oe),ut!==(ut=et)&&(P.value=(P.__value=ut)??"",Lt(P,ut)),Ne(wt,"title",Ot),Ne(Vn,"title",hn)},[()=>re("Mocap"),()=>re("Webcam + skeleton"),()=>re("Skeleton only"),()=>re("Webcam only"),()=>re("Off"),()=>je("ui.mocap_view","off"),()=>re("Close"),()=>re("Resize")]),K("pointerdown",E,R=>g(R,"move")),K("change",P,R=>ot("ui.mocap_view",R.currentTarget.value)),K("pointerdown",P,R=>R.stopPropagation()),K("click",wt,()=>ot("ui.mocap_view","off")),K("pointerdown",wt,R=>R.stopPropagation()),K("pointerdown",Vn,R=>{R.stopPropagation(),g(R,"resize")}),$(y,w)};Ge(d,y=>{v(p)&&y(_)})}$(e,S),St()}ln(["pointerdown","change","click"]);var Sc=_e('<aside class="xra-section-popup fixed top-1/2 z-[99992] flex max-h-[72vh] w-[320px] -translate-y-1/2 flex-col overflow-hidden rounded-xl border border-white/12 bg-[var(--xra-ui-bg)] text-[12.5px] leading-[1.45] text-[var(--xra-ui-fg)] shadow-[0_16px_48px_rgba(0,0,0,.6)] font-sans transition-[left] duration-200"><header class="flex shrink-0 items-center gap-2 bg-[var(--xra-ui-bg2)] px-3 py-2 shadow-[inset_0_-1px_0_var(--xra-ui-accent-soft)]"><!> <span class="text-[12.5px] font-semibold text-[#cfcfcf]"> </span></header> <div class="min-h-0 flex-1 overflow-auto px-2.5 py-2"><!></div></aside>');function Ec(e,t){kt(t,!0);let n;tn(()=>{const f=b=>{const h=b.target;n&&h instanceof Node&&n.contains(h)||h instanceof Element&&h.closest(".xra-dock")||(Q.popupSection=null)},p=b=>{b.key==="Escape"&&(Q.popupSection=null)};return document.addEventListener("pointerdown",f,!0),window.addEventListener("keydown",p,!0),()=>{document.removeEventListener("pointerdown",f,!0),window.removeEventListener("keydown",p,!0)}});var r=Sc(),i=B(r),s=B(i);qe(s,{get name(){return t.section.icon},size:14,class:"text-[var(--xra-ui-dim)]"});var a=O(s,2),o=G(a,!0),l=O(i,2),c=B(l);ss(c,{get section(){return t.section}}),Ai(r,f=>n=f,()=>n),he(f=>{Or(r,`left:${Q.dockExpanded?248:62}px;`),W(o,f)},[()=>re(t.section.title)]),$(e,r),St()}var $c=_e('<aside class="xra-panel"><header class="xra-panel-head"><strong>XR Animator</strong> <span class="xra-spacer"></span> <button><!></button> <button title="Close panel"><!></button></header> <div class="xra-panel-body"></div></aside>'),Ac=_e('<button class="xra-panel-launcher"><!></button>'),Mc=_e("<!> <!> <!> <!> <!>",1);function Nc(e,t){kt(t,!0),kl();const n=Fe(()=>Ml(Ye));var r=Mc(),i=q(r);{var s=d=>{wc(d,{})};Ge(i,d=>{Q.ready&&d(s)})}var a=O(i,2);{var o=d=>{const _=Fe(()=>v(n).find(k=>k.id===Q.popupSection));var y=Z(),w=q(y);{var E=k=>{Ec(k,{get section(){return v(_)}})};Ge(w,k=>{v(_)&&k(E)})}$(d,y)};Ge(a,d=>{Q.ready&&Q.popupSection&&d(o)})}var l=O(a,2);{var c=d=>{kc(d,{})},f=Fe(()=>Q.ready&&je("ui.mocap_view","off")!=="off");Ge(l,d=>{v(f)&&d(c)})}var p=O(l,2);{var b=d=>{var P,T,L;var _=$c(),y=B(_),w=O(B(y),4);Ne(w,"title",((L=(T=(P=window.XRA)==null?void 0:P.i18n)==null?void 0:T.t)==null?void 0:L.call(T,"Clean screen mode (Press Esc to restore)"))||"Clean screen (Esc)");var E=B(w);qe(E,{name:"EyeOff",size:15});var k=O(w,2),A=B(k);qe(A,{name:"X",size:15});var M=O(y,2);jt(M,21,()=>v(n),te=>te.id,(te,Se)=>{pc(te,{get section(){return v(Se)}})}),K("click",w,function(...te){zr==null||zr.apply(this,te)}),K("click",k,()=>Q.panelOpen=!1),$(d,_)},h=d=>{var _=Ac(),y=B(_);qe(y,{name:"Settings",size:16}),K("click",_,()=>{Q.panelOpen=!0,rs()}),$(d,_)};Ge(p,d=>{Q.ready&&Q.panelOpen?d(b):Q.ready&&d(h,1)})}var g=O(p,2);{var S=d=>{gc(d,{})};Ge(g,d=>{Q.ready&&Q.startupOpen&&d(S)})}$(e,r),St()}ln(["click"]),window.XRA_SVELTE_UI=!0;function cs(){let e=document.getElementById("XRA_SVELTE");e||(e=document.createElement("div"),e.id="XRA_SVELTE",document.body.appendChild(e)),Go(Nc,{target:e})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",cs):cs()})();

})();
