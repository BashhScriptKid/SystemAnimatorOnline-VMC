(function(){
var Xc=Object.defineProperty;var Mo=fe=>{throw TypeError(fe)};var Gc=(fe,ae,Se)=>ae in fe?Xc(fe,ae,{enumerable:!0,configurable:!0,writable:!0,value:Se}):fe[ae]=Se;var tt=(fe,ae,Se)=>Gc(fe,typeof ae!="symbol"?ae+"":ae,Se),Pi=(fe,ae,Se)=>ae.has(fe)||Mo("Cannot "+Se);var u=(fe,ae,Se)=>(Pi(fe,ae,"read from private field"),Se?Se.call(fe):ae.get(fe)),V=(fe,ae,Se)=>ae.has(fe)?Mo("Cannot add the same private member more than once"):ae instanceof WeakSet?ae.add(fe):ae.set(fe,Se),B=(fe,ae,Se,Zt)=>(Pi(fe,ae,"write to private field"),Zt?Zt.call(fe,Se):ae.set(fe,Se),Se),j=(fe,ae,Se)=>(Pi(fe,ae,"access private method"),Se);(function(){"use strict";var fo,Nr,qt,cr,Cr,Or,Pr,Dt,Rr,Ke,un,Bt,yt,Nt,Lr,ur,J,Ri,Li,gn,Ii,To,No,Vr,qc,mn,po,ct,Ni,ut,fr,De,Ze,Be,Qe,Ct,dr,Yt,Ir,fn,dn,Vt,Vn,le,Yc,Kc,zi,Zc,Di,yn,Gn,Bi,Vi,wt,Ot,Je,pr,pn,vn,Fn,vo;var ae=Array.isArray,Se=Array.prototype.indexOf,Zt=Array.prototype.includes,wn=Array.from,Fi=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,Hi=Object.getOwnPropertyDescriptors,Co=Object.prototype,Oo=Array.prototype,qn=Object.getPrototypeOf,Ui=Object.isExtensible;function Fr(e){return typeof e=="function"}const Po=()=>{};function Ro(e){return e()}function Yn(e){for(var t=0;t<e.length;t++)e[t]()}function ji(){var e,t,r=new Promise((n,i)=>{e=n,t=i});return{promise:r,resolve:e,reject:t}}function Wi(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const Ne=2,mr=4,Hr=8,Kn=1<<24,vt=16,rt=32,Rt=64,Zn=128,Qn=256,ht=512,Ee=1024,be=2048,nt=4096,Re=8192,Le=16384,yr=32768,bn=1<<25,Ht=65536,xn=1<<17,Lo=1<<18,wr=1<<19,Xi=1<<20,xt=1<<25,kn=1<<21,br=1<<22,Ut=1<<23,kt=Symbol("$state"),Gi=Symbol("component"),qi=Symbol("legacy props"),Io=Symbol(""),Sn=Symbol("attributes"),Jn=Symbol("class"),ei=Symbol("style"),Ur=Symbol("text"),jr=new class extends Error{constructor(){super(...arguments);tt(this,"name","StaleReactionError");tt(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},En=!!((fo=globalThis.document)!=null&&fo.contentType)&&globalThis.document.contentType.includes("xml"),zo=1,Do=2,Yi=4,Bo=8,Vo=16,Fo=1,Ho=2,Ki=4,Uo=8,jo=16,Wo=1,Xo=2,xe=Symbol("uninitialized"),Zi="http://www.w3.org/1999/xhtml",Go="http://www.w3.org/2000/svg",qo="@attach";function Yo(){console.warn("https://svelte.dev/e/derived_inert")}function Ko(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Zo(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Qi(e){return e===this.v}function Qo(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Ji(e){return!Qo(e,this.v)}function Jo(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function es(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function ts(e,t,r){throw new Error("https://svelte.dev/e/each_key_duplicate")}function rs(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ns(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function is(e){throw new Error("https://svelte.dev/e/effect_orphan")}function as(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function os(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function ss(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ls(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function cs(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function us(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let xr=!1,Qc=!1;function fs(){xr=!0}let de=null;function kr(e){de=e}function St(e,t=!1,r){de={p:de,i:!1,c:null,e:null,s:e,x:null,r:H,l:xr&&!t?{s:null,u:null,$:[]}:null}}function Et(e){var t=de,r=t.e;if(r!==null){t.e=null;for(var n of r)ba(n)}return t.i=!0,de=t.p,ti(e)}function ti(e={}){return Fi(e,Gi,{value:!0}),e}function Wr(){return!xr||de!==null&&de.l===null}let Sr=[];function ds(){var e=Sr;Sr=[],Yn(e)}function $t(e){if(Sr.length===0){var t=Sr;queueMicrotask(()=>{t===Sr&&ds()})}Sr.push(e)}const ps=-7169;function me(e,t){e.f=e.f&ps|t}function ri(e){(e.f&ht)!==0||e.deps===null?me(e,Ee):me(e,nt)}function ea(e,t,r){(e.f&be)!==0?t.add(e):(e.f&nt)!==0&&r.add(e),me(e,Ee)}function vs(e,t){if(t){const r=document.body;e.autofocus=!0,$t(()=>{document.activeElement===r&&e.focus()})}}function Xr(e){var t=F,r=H;it(null),at(null);try{return e()}finally{it(t),at(r)}}function ta(e,t,r,n){const i=Wr()?Er:ni;var o=e.filter(_=>!_.settled),a=t.map(i);if(r.length===0&&o.length===0){n(a);return}var s=H,l=hs(),c=o.length===1?o[0].promise:o.length>1?Promise.all(o.map(_=>_.promise)):null;function f(_){if((s.f&Le)===0){l();try{n([...a,..._])}catch(g){Mt(g,s)}$n()}}var p=ra();if(r.length===0){c.then(()=>f([])).finally(p);return}function y(){Promise.all(r.map(_=>_s(_))).then(f).catch(_=>Mt(_,s)).finally(p)}c?c.then(()=>{l(),y(),$n()}):y()}function hs(){var e=H,t=F,r=de,n=z;return function(o=!0){at(e),it(t),kr(r),o&&(e.f&Le)===0&&(n==null||n.activate(),n==null||n.apply())}}function $n(e=!0){at(null),it(null),kr(null),e&&(z==null||z.deactivate())}function ra(){var e=H,t=e.b,r=z,n=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,r),r.increment(n,e),()=>{t==null||t.update_pending_count(-1,r),r.decrement(n,e)}}function Er(e){var t=Ne|be;return H!==null&&(H.f|=wr),{ctx:de,deps:null,effects:null,equals:Qi,f:t,fn:e,reactions:null,rv:0,v:xe,wv:0,parent:H,ac:null}}const Gr=Symbol("obsolete");function _s(e,t,r){let n=H;n===null&&es();var i=void 0,o=jt(xe),a=!F,s=new Set;return Ts(()=>{var _,g;var l=H,c=ji();i=c.promise;try{Promise.resolve(e()).then(c.resolve,E=>{E!==jr&&c.reject(E)}).finally($n)}catch(E){c.reject(E),$n()}var f=z;if(a){if((l.f&yr)!==0)var p=ra();if((_=n.b)!=null&&_.is_rendered())(g=f.async_deriveds.get(l))==null||g.reject(Gr);else for(const E of s.values())E.reject(Gr);s.add(c),f.async_deriveds.set(l,c)}const y=(E,v=void 0)=>{p==null||p(),s.delete(c),v!==Gr&&(f.activate(),v?(o.f|=Ut,Ar(o,v)):((o.f&Ut)!==0&&(o.f^=Ut),Ar(o,E)),f.deactivate())};c.promise.then(y,E=>y(null,E||"unknown"))}),Tn(()=>{for(const l of s)l.reject(Gr)}),new Promise(l=>{function c(f){function p(){f===i?l(o):c(i)}f.then(p,p)}c(i)})}function Ie(e){const t=Er(e);return Ta(t),t}function ni(e){const t=Er(e);return t.equals=Ji,t}function gs(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)Te(t[r])}}function ii(e){var t,r=H,n=e.parent;if(!It&&n!==null&&e.v!==xe&&(n.f&(Le|Re))!==0)return Yo(),e.v;at(n);try{gs(e),t=Ra(e)}finally{at(r)}return t}function na(e){var t=ii(e);if(!e.equals(t)&&(e.wv=Oa(),(!(z!=null&&z.is_fork)||e.deps===null)&&(z!==null?(z.capture(e,t,!0),qr==null||qr.capture(e,t,!0)):e.v=t,e.deps===null))){me(e,Ee);return}It||(Me!==null?(di()||z!=null&&z.is_fork)&&Me.set(e,t):ri(e))}function ms(e){var t;if(e.effects!==null)for(const r of e.effects)(r.teardown||r.ac)&&((t=r.teardown)==null||t.call(r),r.ac!==null&&Xr(()=>{r.ac.abort(jr),r.ac=null}),r.fn!==null&&(r.teardown=Po),en(r,0),vi(r))}function ia(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&Mr(t)}let ai=null,$r=null,z=null,qr=null,Me=null,oi=null,si=!1,Yr=null,An=null;var aa=0,Jc=new Set;let ys=1;const Bn=class Bn{constructor(){V(this,J);tt(this,"id",ys++);V(this,Nr,!1);tt(this,"linked",!0);V(this,qt,null);V(this,cr,null);tt(this,"async_deriveds",new Map);tt(this,"current",new Map);tt(this,"previous",new Map);V(this,Cr,new Set);V(this,Or,new Set);V(this,Pr,0);V(this,Dt,new Map);V(this,Rr,null);V(this,Ke,[]);V(this,un,[]);V(this,Bt,new Set);V(this,yt,new Set);V(this,Nt,new Map);V(this,Lr,new Set);tt(this,"is_fork",!1);V(this,ur,!1);$r===null?ai=$r=this:(B($r,cr,this),B(this,qt,$r)),$r=this}skip_effect(t){u(this,Nt).has(t)||u(this,Nt).set(t,{d:[],m:[]}),u(this,Lr).delete(t)}unskip_effect(t,r=n=>this.schedule(n)){var n=u(this,Nt).get(t);if(n){u(this,Nt).delete(t);for(var i of n.d)me(i,be),r(i);for(i of n.m)me(i,nt),r(i)}u(this,Lr).add(t)}capture(t,r,n=!1){t.v!==xe&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&Ut)===0&&(this.current.set(t,[r,n]),Me==null||Me.set(t,r)),this.is_fork||(t.v=r)}activate(){z=this}deactivate(){z=null,Me=null}flush(){try{si=!0,z=this,j(this,J,gn).call(this)}finally{aa=0,oi=null,Yr=null,An=null,si=!1,z=null,Me=null,At.clear()}}discard(){var t;for(const r of u(this,Or))r(this);u(this,Or).clear();for(const r of this.async_deriveds.values())r.reject(Gr);j(this,J,mn).call(this),(t=u(this,Rr))==null||t.resolve()}register_created_effect(t){u(this,un).push(t)}increment(t,r){if(B(this,Pr,u(this,Pr)+1),t){let n=u(this,Dt).get(r)??0;u(this,Dt).set(r,n+1)}}decrement(t,r){if(B(this,Pr,u(this,Pr)-1),t){let n=u(this,Dt).get(r)??0;n===1?u(this,Dt).delete(r):u(this,Dt).set(r,n-1)}u(this,ur)||(B(this,ur,!0),$t(()=>{B(this,ur,!1),this.linked&&this.flush()}))}transfer_effects(t,r){for(const n of t)u(this,Bt).add(n);for(const n of r)u(this,yt).add(n);t.clear(),r.clear()}oncommit(t){u(this,Cr).add(t)}ondiscard(t){u(this,Or).add(t)}settled(){return(u(this,Rr)??B(this,Rr,ji())).promise}static ensure(){if(z===null){const t=z=new Bn;si||$t(()=>{u(t,Nr)||t.flush()})}return z}apply(){{Me=null;return}}schedule(t){var r;if(oi=t,(r=t.b)!=null&&r.is_pending&&(t.f&(mr|Hr|Kn))!==0&&(t.f&yr)===0){t.b.defer_effect(t);return}u(this,Ke).push(t)}};Nr=new WeakMap,qt=new WeakMap,cr=new WeakMap,Cr=new WeakMap,Or=new WeakMap,Pr=new WeakMap,Dt=new WeakMap,Rr=new WeakMap,Ke=new WeakMap,un=new WeakMap,Bt=new WeakMap,yt=new WeakMap,Nt=new WeakMap,Lr=new WeakMap,ur=new WeakMap,J=new WeakSet,Ri=function(){if(this.is_fork)return!0;for(const n of u(this,Dt).keys()){for(var t=n,r=!1;t.parent!==null;){if(u(this,Nt).has(t)){r=!0;break}t=t.parent}if(!r)return!0}return!1},Li=function(){var t=[];for(const o of u(this,Ke))if(!((o.f&Le)!==0||(o.f&(be|nt))===0)){for(var r=o,n=!1;r.parent!==null;){r=r.parent;var i=r.f;if((i&(Rt|rt))!==0){if((i&Ee)===0){n=!0;break}r.f^=Ee}}n||t.push(r)}return B(this,Ke,[]),t},gn=function(){var s,l,c,f;B(this,Nr,!0);for(const p of u(this,Bt))u(this,yt).delete(p),me(p,be),this.schedule(p);for(const p of u(this,yt))me(p,nt),this.schedule(p);this.apply();for(var t=Yr=[],r=[],n=An=[];u(this,Ke).length>0;){aa++>1e3&&(j(this,J,mn).call(this),ws());for(const p of j(this,J,Li).call(this))try{j(this,J,Ii).call(this,p,t,r)}catch(y){throw ca(p),j(this,J,Ri).call(this)||this.discard(),y}}if(z=null,n.length>0){var i=Bn.ensure();for(const p of n)i.schedule(p)}if(Yr=null,An=null,j(this,J,Ri).call(this)){j(this,J,Vr).call(this,r),j(this,J,Vr).call(this,t);for(const[p,y]of u(this,Nt))la(p,y);n.length>0&&j(s=z,J,gn).call(s);return}const o=j(this,J,To).call(this);if(o){j(this,J,Vr).call(this,r),j(this,J,Vr).call(this,t),j(l=o,J,No).call(l,this);return}u(this,Bt).clear(),u(this,yt).clear();for(const p of u(this,Cr))p(this);u(this,Cr).clear(),qr=this,oa(r),oa(t),qr=null,(c=u(this,Rr))==null||c.resolve();var a=z;if(u(this,Pr)===0&&(u(this,Ke).length===0||a!==null)&&j(this,J,mn).call(this),u(this,Ke).length>0)if(a!==null){for(const p of u(this,Ke))u(a,Ke).push(p);B(this,Ke,[])}else a=this;a!==null&&(At.clear(),j(f=a,J,gn).call(f))},Ii=function(t,r,n){t.f^=Ee;for(var i=t.first;i!==null;){var o=i.f,a=(o&(rt|Rt))!==0,s=a&&(o&Ee)!==0,l=s||(o&Re)!==0||u(this,Nt).has(i);if(!l&&i.fn!==null){a?i.f^=Ee:(o&mr)!==0?r.push(i):Jr(i)&&((o&vt)!==0&&u(this,yt).add(i),Mr(i));var c=i.first;if(c!==null){i=c;continue}}for(;i!==null;){var f=i.next;if(f!==null){i=f;break}i=i.parent}}},To=function(){for(var t=u(this,qt);t!==null;){if(!t.is_fork){for(const[r,[,n]]of this.current)if(t.current.has(r)&&!n)return t}t=u(t,qt)}return null},No=function(t){var n;for(const[i,o]of t.current)!this.previous.has(i)&&t.previous.has(i)&&this.previous.set(i,t.previous.get(i)),this.current.set(i,o);for(const[i,o]of t.async_deriveds){const a=this.async_deriveds.get(i);a&&o.promise.then(a.resolve).catch(a.reject)}t.async_deriveds.clear(),this.transfer_effects(u(t,Bt),u(t,yt));const r=i=>{var o=i.reactions;if(o!==null&&!((i.f&Ne)!==0&&(i.f&(be|nt))===0))for(const l of o){var a=l.f;if((a&Ne)!==0)r(l);else{var s=l;a&(br|vt)&&!this.async_deriveds.has(s)&&(u(this,yt).delete(s),me(s,be),this.schedule(s))}}};for(const i of this.current.keys())r(i);this.oncommit(()=>t.discard()),j(n=t,J,mn).call(n),z=this,j(this,J,gn).call(this)},Vr=function(t){for(var r=0;r<t.length;r+=1)ea(t[r],u(this,Bt),u(this,yt))},qc=function(){var p,y;for(let _=ai;_!==null;_=u(_,cr)){var t=_.id<this.id,r=[];for(const[g,[E,v]]of this.current){if(_.current.has(g)){var n=_.current.get(g)[0];if(t&&E!==n)_.current.set(g,[E,v]);else continue}r.push(g)}if(t)for(const[g,E]of this.async_deriveds){const v=_.async_deriveds.get(g);v&&E.promise.then(v.resolve).catch(v.reject)}var i=[..._.current.keys()].filter(g=>!_.current.get(g)[1]);if(!(!u(_,Nr)||i.length===0)){var o=i.filter(g=>!this.current.has(g));if(o.length===0)t&&_.discard();else if(r.length>0){if(t)for(const g of u(this,Lr))_.unskip_effect(g,E=>{var v;(E.f&(vt|br))!==0?_.schedule(E):j(v=_,J,Vr).call(v,[E])});_.activate();var a=new Set,s=new Map;for(var l of r)sa(l,o,a,s);s=new Map;var c=[..._.current].filter(([g,E])=>{const v=this.current.get(g);return v?v[0]!==E[0]||v[1]!==E[1]:!0}).map(([g])=>g);if(c.length>0)for(const g of u(this,un))(g.f&(Le|Re|xn))===0&&li(g,c,s)&&((g.f&(br|vt))!==0?(me(g,be),_.schedule(g)):u(_,Bt).add(g));if(u(_,Ke).length>0&&!u(_,ur)){_.apply();for(var f of j(p=_,J,Li).call(p))j(y=_,J,Ii).call(y,f,[],[])}_.deactivate()}}}},mn=function(){if(this.linked){var t=u(this,qt),r=u(this,cr);t===null?ai=r:B(t,cr,r),r===null?$r=t:B(r,qt,t),this.linked=!1}};let Qt=Bn;function ws(){try{as()}catch(e){Mt(e,oi)}}let _t=null;function oa(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(Le|Re))===0&&Jr(n)&&(_t=new Set,Mr(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&Ea(n),(_t==null?void 0:_t.size)>0)){At.clear();for(const i of _t){if((i.f&(Le|Re))!==0)continue;const o=[i];let a=i.parent;for(;a!==null;)_t.has(a)&&(_t.delete(a),o.push(a)),a=a.parent;for(let s=o.length-1;s>=0;s--){const l=o[s];(l.f&(Le|Re))===0&&Mr(l)}}_t.clear()}}_t=null}}function sa(e,t,r,n){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(const i of e.reactions){const o=i.f;(o&Ne)!==0?sa(i,t,r,n):(o&(br|vt))!==0&&(o&be)===0&&li(i,t,n)&&(me(i,be),ci(i))}}function li(e,t,r){const n=r.get(e);if(n!==void 0)return n;if(e.deps!==null)for(const i of e.deps){if(Zt.call(t,i))return!0;if((i.f&Ne)!==0&&li(i,t,r))return r.set(i,!0),!0}return r.set(e,!1),!1}function ci(e){z.schedule(e)}function la(e,t){if(!((e.f&rt)!==0&&(e.f&Ee)!==0)){(e.f&be)!==0?t.d.push(e):(e.f&nt)!==0&&t.m.push(e),me(e,Ee);for(var r=e.first;r!==null;)la(r,t),r=r.next}}function ca(e){me(e,Ee);for(var t=e.first;t!==null;)ca(t),t=t.next}let Mn=new Set;const At=new Map;let ua=!1;function jt(e,t){var r={f:0,v:e,reactions:null,equals:Qi,rv:0,wv:0};return r}function Y(e,t){const r=jt(e);return Ta(r),r}function bs(e,t=!1,r=!0){var i;const n=jt(e);return t||(n.equals=Ji),xr&&r&&de!==null&&de.l!==null&&((i=de.l).s??(i.s=[])).push(n),n}function N(e,t,r=!1){F!==null&&(!mt||(F.f&xn)!==0)&&Wr()&&(F.f&(Ne|vt|br|xn))!==0&&(Tt===null||!Tt.has(e))&&cs();let n=r?ze(t):t;return Ar(e,n,An)}var Jt=null,ui=0;function Ar(e,t,r=null){if(!e.equals(t)){It?At.set(e,t):At.has(e)||At.set(e,e.v);var n=Qt.ensure();if(n.capture(e,t),(e.f&Ne)!==0){const i=e;(e.f&be)!==0&&ii(i),Me===null&&ri(i)}e.wv=Oa(),Jt=null,ui=0,da(e,be,r),Jt=null,Wr()&&H!==null&&(H.f&Ee)!==0&&(H.f&(rt|Rt))===0&&(ot===null?Os([e]):ot.push(e)),!n.is_fork&&Mn.size>0&&!ua&&xs()}return t}function xs(){ua=!1;for(const e of Mn){(e.f&Ee)!==0&&me(e,nt);let t;try{t=Jr(e)}catch{t=!0}t&&Mr(e)}Mn.clear()}function fa(e,t=1){var r=d(e),n=t===1?r++:r--;return N(e,r),n}function Kr(e){N(e,e.v+1)}function da(e,t,r){var n=e.reactions;if(n!==null){var i=Wr(),o=n.length;if(ui+=o,ui>1e5&&Jt===null&&(Jt=new Set),Jt!==null){if(Jt.has(e))return;Jt.add(e)}for(var a=0;a<o;a++){var s=n[a],l=s.f;if(!(!i&&s===H)){var c=(l&be)===0;if(c&&me(s,t),(l&xn)!==0)Mn.add(s);else if((l&Ne)!==0){var f=s;Me==null||Me.delete(f),da(f,nt,r)}else if(c){var p=s;(l&vt)!==0&&_t!==null&&_t.add(p),r!==null?r.push(p):ci(p)}}}}}function ze(e){if(typeof e!="object"||e===null||kt in e||Gi in e)return e;const t=qn(e);if(t!==Co&&t!==Oo)return e;var r=new Map,n=ae(e),i=Y(0),o=ir,a=s=>{if(ir===o)return s();var l=F,c=ir;it(null),Ca(o);var f=s();return it(l),Ca(c),f};return n&&r.set("length",Y(e.length)),new Proxy(e,{defineProperty(s,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&ss();var f=r.get(l);return f===void 0?a(()=>{var p=Y(c.value);return r.set(l,p),p}):N(f,c.value,!0),!0},deleteProperty(s,l){var c=r.get(l);if(c===void 0){if(l in s){const f=a(()=>Y(xe));r.set(l,f),Kr(i)}}else N(c,xe),Kr(i);return!0},get(s,l,c){var _;if(l===kt)return e;var f=r.get(l),p=l in s;if(f===void 0&&(!p||(_=Ft(s,l))!=null&&_.writable)&&(f=a(()=>{var g=ze(p?s[l]:xe),E=Y(g);return E}),r.set(l,f)),f!==void 0){var y=d(f);return y===xe?void 0:y}return Reflect.get(s,l,c)},getOwnPropertyDescriptor(s,l){var y;(y=this.has)==null||y.call(this,s,l);var c=Reflect.getOwnPropertyDescriptor(s,l),f=r.get(l);if(f!==void 0){var p=d(f);if(p===xe)return;if(c&&"value"in c)c.value=p;else return{enumerable:!0,configurable:!0,value:p,writable:!0}}return c},has(s,l){var y;if(l===kt)return!0;var c=r.get(l),f=c!==void 0&&c.v!==xe||Reflect.has(s,l);if(c!==void 0||H!==null&&(!f||(y=Ft(s,l))!=null&&y.writable)){c===void 0&&(c=a(()=>{var _=f?ze(s[l]):xe,g=Y(_);return g}),r.set(l,c));var p=d(c);if(p===xe)return!1}return f},set(s,l,c,f){var h;var p=r.get(l),y=l in s;if(n&&l==="length")for(var _=c;_<p.v;_+=1){var g=r.get(_+"");g!==void 0?N(g,xe):_ in s&&(g=a(()=>Y(xe)),r.set(_+"",g))}if(p===void 0)(!y||(h=Ft(s,l))!=null&&h.writable)&&(p=a(()=>Y(void 0)),N(p,ze(c)),r.set(l,p));else{y=p.v!==xe;var E=a(()=>ze(c));N(p,E)}var v=Reflect.getOwnPropertyDescriptor(s,l);if(v!=null&&v.set&&v.set.call(f,c),!y){if(n&&typeof l=="string"){var x=r.get("length"),w=Number(l);Number.isInteger(w)&&w>=x.v&&N(x,w+1)}Kr(i)}return!0},ownKeys(s){d(i);var l=Reflect.ownKeys(s).filter(p=>{var y=r.get(p);return y===void 0||y.v!==xe});for(var[c,f]of r)f.v!==xe&&!(c in s)&&l.push(c);return l},setPrototypeOf(){ls()}})}function pa(e){try{if(e!==null&&typeof e=="object"&&kt in e)return e[kt]}catch{}return e}function va(e,t){return Object.is(pa(e),pa(t))}var ha,_a,ga,ma;function ks(){if(ha===void 0){ha=window,_a=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;ga=Ft(t,"firstChild").get,ma=Ft(t,"nextSibling").get,Ui(e)&&(e[Jn]=void 0,e[Sn]=null,e[ei]=void 0,e.__e=void 0),Ui(r)&&(r[Ur]=void 0)}}function Lt(e=""){return document.createTextNode(e)}function er(e){return ga.call(e)}function Zr(e){return ma.call(e)}function D(e,t){return er(e)}function K(e,t=!1){{var r=er(e);return r instanceof Comment&&r.data===""?Zr(r):r}}function W(e,t=!1){return er(e)}function O(e,t=1,r=!1){let n=e;for(;t--;)n=Zr(n);return n}function Ss(e){e.textContent=""}function ya(){return!1}function fi(e,t,r){return t==null||t===Zi?r?document.createElement(e,{is:r}):document.createElement(e):r?document.createElementNS(t,e,{is:r}):document.createElementNS(t,e)}function Es(e){var t=H;if(t===null)return F.f|=Ut,e;if((t.f&yr)===0&&(t.f&mr)===0)throw e;Mt(e,t)}function Mt(e,t){if(!(t!==null&&(t.f&Le)!==0)){for(;t!==null;){if((t.f&Zn)!==0&&(t.f&(Le|bn))===0){if((t.f&yr)===0)throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw e}}function wa(e){H===null&&(F===null&&is(),ns()),It&&rs()}function $s(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function gt(e,t){var r=H;r!==null&&(r.f&Re)!==0&&(e|=Re);var n={ctx:de,deps:null,nodes:null,f:e|be|ht,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};z==null||z.register_created_effect(n);var i=n;if((e&mr)!==0)Yr!==null?Yr.push(n):Qt.ensure().schedule(n);else if(t!==null){try{Mr(n)}catch(a){throw Te(n),a}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&wr)===0&&(i=i.first,(e&vt)!==0&&(e&Ht)!==0&&i!==null&&(i.f|=Ht))}if(i!==null&&(i.parent=r,r!==null&&$s(i,r),F!==null&&(F.f&Ne)!==0&&(e&Rt)===0)){var o=F;(o.effects??(o.effects=[])).push(i)}return n}function di(){return F!==null&&!mt}function Tn(e){const t=gt(Hr,null);return me(t,Ee),t.teardown=e,t}function tr(e){wa();var t=H.f,r=!F&&(t&rt)!==0&&de!==null&&!de.i;if(r){var n=de;(n.e??(n.e=[])).push(e)}else return ba(e)}function ba(e){return gt(mr|Xi,e)}function As(e){return wa(),gt(Hr|Xi,e)}function Ms(e){Qt.ensure();const t=gt(Rt|wr,e);return(r={})=>new Promise(n=>{r.outro?rr(t,()=>{Te(t),n(void 0)}):(Te(t),n(void 0))})}function pi(e){return gt(mr,e)}function Ts(e){return gt(br|wr,e)}function xa(e,t=0){return gt(Hr|t,e)}function pe(e,t=[],r=[],n=[]){ta(n,t,r,i=>{gt(Hr,()=>{e(...i.map(d))})})}function Qr(e,t=0){var r=gt(vt|t,e);return r}function ka(e,t=0){var r=gt(Kn|t,e);return r}function He(e){return gt(rt|wr,e)}function Sa(e){var t=e.teardown;if(t!==null){const r=It,n=F;Ma(!0),it(null);try{t.call(null)}catch(i){Mt(i,e.parent)}finally{Ma(r),it(n)}}}function vi(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const i=r.ac;i!==null&&Xr(()=>{i.abort(jr)});var n=r.next;(r.f&Rt)!==0?r.parent=null:Te(r,t),r=n}}function Ns(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&rt)===0&&Te(t),t=r}}function Te(e,t=!0){var r=!1;(t||(e.f&Lo)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Cs(e.nodes.start,e.nodes.end),r=!0),e.f|=bn,vi(e,t&&!r),en(e,0);var n=e.nodes&&e.nodes.t;if(n!==null)for(const o of n)o.stop();Sa(e),e.f^=bn,e.f|=Le;var i=e.parent;i!==null&&i.first!==null&&Ea(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Cs(e,t){for(;e!==null;){var r=e===t?null:Zr(e);e.remove(),e=r}}function Ea(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function rr(e,t,r=!0){var n=[];e.f|=Qn,$a(e,n,!0);var i=()=>{r&&Te(e),t&&t()},o=n.length;if(o>0){var a=()=>--o||i();for(var s of n)s.out(a)}else i()}function $a(e,t,r){if((e.f&Re)===0){e.f^=Re;var n=e.nodes&&e.nodes.t;if(n!==null)for(const s of n)(s.is_global||r)&&t.push(s);for(var i=e.first;i!==null;){var o=i.next;if((i.f&Rt)===0){var a=(i.f&Ht)!==0||(i.f&rt)!==0&&(e.f&vt)!==0;$a(i,t,a?r:!1)}i=o}}}function Nn(e){e.f&=~Qn,Aa(e,!0)}function Aa(e,t){if((e.f&Qn)===0&&(e.f&Re)!==0){e.f^=Re,(e.f&Ee)===0&&(me(e,be),Qt.ensure().schedule(e));for(var r=e.first;r!==null;){var n=r.next,i=(r.f&Ht)!==0||(r.f&rt)!==0;Aa(r,i?t:!1),r=n}var o=e.nodes&&e.nodes.t;if(o!==null)for(const a of o)(a.is_global||t)&&a.in()}}function hi(e,t){if(e.nodes)for(var r=e.nodes.start,n=e.nodes.end;r!==null;){var i=r===n?null:Zr(r);t.append(r),r=i}}let Cn=!1,It=!1;function Ma(e){It=e}let F=null,mt=!1;function it(e){F=e}let H=null;function at(e){H=e}let Tt=null;function Ta(e){F!==null&&((F.f&kn)!==0||(F.f&Ne)!==0)&&(Tt??(Tt=new Set)).add(e)}let Ue=null,Ge=0,ot=null;function Os(e){ot=e}let Na=1,nr=0,ir=nr;function Ca(e){ir=e}function Oa(){return++Na}function Jr(e){var t=e.f;if((t&be)!==0)return!0;if((t&nt)!==0){for(var r=e.deps,n=r.length,i=0;i<n;i++){var o=r[i];if(Jr(o)&&na(o),o.wv>e.wv)return!0}(t&ht)!==0&&Me===null&&me(e,Ee)}return!1}function Pa(e,t,r=!0){var n=e.reactions;if(n!==null&&!(Tt!==null&&Tt.has(e)))for(var i=0;i<n.length;i++){var o=n[i];(o.f&Ne)!==0?Pa(o,t,!1):t===o&&(r?me(o,be):(o.f&Ee)!==0&&me(o,nt),ci(o))}}function Ra(e){var t=Ue,r=Ge,n=ot,i=F,o=Tt,a=de,s=mt,l=ir,c=e.f;Ue=null,Ge=0,ot=null,F=(c&(rt|Rt))===0?e:null,Tt=null,kr(e.ctx),mt=!1,ir=++nr,e.ac!==null&&(Xr(()=>{e.ac.abort(jr)}),e.ac=null);try{e.f|=kn;var f=e.fn,p=f();e.f|=yr;var y=La(e);if(Wr()&&ot!==null&&!mt&&y!==null&&(e.f&(Ne|nt|be))===0)for(var _=0;_<ot.length;_++)Pa(ot[_],e);if(i!==null&&i!==e){if(nr++,i.deps!==null)for(let g=0;g<r;g+=1)i.deps[g].rv=nr;if(t!==null)for(const g of t)g.rv=nr;ot!==null&&(n===null?n=ot:n.push(...ot))}return(e.f&Ut)!==0&&(e.f^=Ut),p}catch(g){return La(e),Es(g)}finally{e.f^=kn,Ue=t,Ge=r,ot=n,F=i,Tt=o,kr(a),mt=s,ir=l}}function La(e){var i;var t=e.deps,r=z==null?void 0:z.is_fork;if(Ue!==null){var n;if(r||en(e,Ge),t!==null&&Ge>0)for(t.length=Ge+Ue.length,n=0;n<Ue.length;n++)t[Ge+n]=Ue[n];else e.deps=t=Ue;if(di()&&(e.f&ht)!==0)for(n=Ge;n<t.length;n++)((i=t[n]).reactions??(i.reactions=[])).push(e)}else!r&&t!==null&&Ge<t.length&&(en(e,Ge),t.length=Ge);return t}function Ps(e,t){let r=t.reactions;if(r!==null){var n=Se.call(r,e);if(n!==-1){var i=r.length-1;i===0?r=t.reactions=null:(r[n]=r[i],r.pop())}}if(r===null&&(t.f&Ne)!==0&&(Ue===null||!Zt.call(Ue,t))){var o=t;(o.f&ht)!==0&&(o.f^=ht),o.v!==xe&&ri(o),o.ac!==null&&Xr(()=>{o.ac.abort(jr),o.ac=null,me(o,be)}),ms(o),en(o,0)}}function en(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Ps(e,r[n])}function Mr(e){var t=e.f;if((t&Le)===0){me(e,Ee);var r=H,n=Cn;H=e,Cn=(t&(rt|Rt))===0;try{(t&(vt|Kn))!==0?Ns(e):vi(e),Sa(e);var i=Ra(e);e.teardown=typeof i=="function"?i:null,e.wv=Na;var o}finally{Cn=n,H=r}}}function d(e){var t=e.f,r=(t&Ne)!==0;if(F!==null&&!mt){var n=H!==null&&(H.f&Le)!==0;if(!n&&(Tt===null||!Tt.has(e))){var i=F.deps;if((F.f&kn)!==0)e.rv<nr&&(e.rv=nr,Ue===null&&i!==null&&i[Ge]===e?Ge++:Ue===null?Ue=[e]:Ue.push(e));else{F.deps??(F.deps=[]),Zt.call(F.deps,e)||F.deps.push(e);var o=e.reactions;o===null?e.reactions=[F]:Zt.call(o,F)||o.push(F)}}}if(It&&At.has(e))return At.get(e);if(r){var a=e;if(It){var s=a.v;return((a.f&Ee)===0&&a.reactions!==null||za(a))&&(s=ii(a)),At.set(a,s),s}var l=(a.f&ht)===0&&!mt&&F!==null&&(Cn||(F.f&ht)!==0),c=(a.f&yr)===0;Jr(a)&&(l&&(a.f|=ht),na(a)),l&&!c&&(ia(a),Ia(a))}if(Me!=null&&Me.has(e))return Me.get(e);if((e.f&Ut)!==0)throw e.v;return e.v}function Ia(e){if(e.f|=ht,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&Ne)!==0&&(t.f&ht)===0&&(ia(t),Ia(t))}function za(e){if(e.v===xe)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(At.has(t)||(t.f&Ne)!==0&&za(t))return!0;return!1}function Wt(e){var t=mt;try{return mt=!0,e()}finally{mt=t}}function ar(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(kt in e)_i(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&kt in r&&_i(r)}}}function _i(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{_i(e[n],t)}catch{}const r=qn(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=Hi(r);for(let i in n){const o=n[i].get;if(o)try{o.call(e)}catch{}}}}}function Rs(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Ls=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Is(e){return Ls.includes(e)}const zs={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Ds(e){return e=e.toLowerCase(),zs[e]??e}const Bs=["touchstart","touchmove"];function Vs(e){return Bs.includes(e)}const or=Symbol("events"),Da=new Set,gi=new Set;function Ba(e,t,r,n={}){function i(o){if(n.capture||wi.call(t,o),!o.cancelBubble)return Xr(()=>r==null?void 0:r.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?(i.__removed=!1,$t(()=>{i.__removed||t.addEventListener(e,i,n)})):t.addEventListener(e,i,n),i}function On(e,t,r,n,i){var o={capture:n,passive:i},a=Ba(e,t,r,o);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Tn(()=>{a.__removed=!0,t.removeEventListener(e,a,o)})}function Z(e,t,r){(t[or]??(t[or]={}))[e]=r}function sr(e){for(var t=0;t<e.length;t++)Da.add(e[t]);for(var r of gi)r(e)}let mi=null,yi=!1;function wi(e){var E,v;var t=this,r=t.ownerDocument,n=e.type,i=((E=e.composedPath)==null?void 0:E.call(e))||[],o=i[0]||e.target;mi=e,yi||(yi=!0,setTimeout(()=>{yi=!1,mi=null}));var a=0,s=mi===e&&e[or];if(s){var l=i.indexOf(s);if(l!==-1&&(t===document||t===window)){e[or]=t;return}var c=i.indexOf(t);if(c===-1)return;l<=c&&(a=l)}if(o=i[a]||e.target,o!==t){Fi(e,"currentTarget",{configurable:!0,get(){return o||r}});var f=F,p=H;it(null),at(null);try{for(var y,_=[];o!==null&&o!==t;){try{var g=(v=o[or])==null?void 0:v[n];g!=null&&(!o.disabled||e.target===o)&&g.call(o,e)}catch(x){y?_.push(x):y=x}if(e.cancelBubble)break;a++,o=a<i.length?i[a]:null}if(y){for(let x of _)queueMicrotask(()=>{throw x});throw y}}finally{e[or]=t,delete e.currentTarget,it(f),at(p)}}}const bi=((po=globalThis==null?void 0:globalThis.window)==null?void 0:po.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Fs(e){return(bi==null?void 0:bi.createHTML(e))??e}function Va(e){var t=fi("template");return t.innerHTML=Fs(e.replaceAll("<!>","<!---->")),t.content}function tn(e,t){var r=H;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function _e(e,t){var r=(t&Wo)!==0,n=(t&Xo)!==0,i,o=!e.startsWith("<!>");return()=>{i===void 0&&(i=Va(o?e:"<!>"+e),r||(i=er(i)));var a=n||_a?document.importNode(i,!0):i.cloneNode(!0);if(r){var s=er(a),l=a.lastChild;tn(s,l)}else tn(a,a);return a}}function Hs(e,t,r="svg"){var n=!e.startsWith("<!>"),i=`<${r}>${n?e:"<!>"+e}</${r}>`,o;return()=>{if(!o){var a=Va(i),s=er(a);o=er(s)}var l=o.cloneNode(!0);return tn(l,l),l}}function Us(e,t){return Hs(e,t,"svg")}function Q(){var e=document.createDocumentFragment(),t=document.createComment(""),r=Lt();return e.append(t,r),tn(t,r),e}function $(e,t){e!==null&&e.before(t)}function js(e){let t=0,r=jt(0),n;return()=>{di()&&(d(r),xa(()=>(t===0&&(n=Wt(()=>e(()=>Kr(r)))),t+=1,()=>{$t(()=>{t-=1,t===0&&(n==null||n(),n=void 0,Kr(r))})})))}}var Ws=Ht|wr;function Xs(e,t,r,n){new Gs(e,t,r,n)}class Gs{constructor(t,r,n,i){V(this,le);tt(this,"parent");tt(this,"is_pending",!1);tt(this,"transform_error");V(this,ct);V(this,Ni,null);V(this,ut);V(this,fr);V(this,De);V(this,Ze,null);V(this,Be,null);V(this,Qe,null);V(this,Ct,null);V(this,dr,0);V(this,Yt,0);V(this,Ir,!1);V(this,fn,new Set);V(this,dn,new Set);V(this,Vt,null);V(this,Vn,js(()=>(B(this,Vt,jt(u(this,dr))),()=>{B(this,Vt,null)})));var o;B(this,ct,t),B(this,ut,r),B(this,fr,a=>{var s=H;s.b=this,s.f|=Zn,n(a)}),this.parent=H.b,this.transform_error=i??((o=this.parent)==null?void 0:o.transform_error)??(a=>a),B(this,De,Qr(()=>{j(this,le,Di).call(this)},Ws))}defer_effect(t){ea(t,u(this,fn),u(this,dn))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!u(this,ut).pending}update_pending_count(t,r){j(this,le,Bi).call(this,t,r),B(this,dr,u(this,dr)+t),!(!u(this,Vt)||u(this,Ir))&&(B(this,Ir,!0),$t(()=>{B(this,Ir,!1),u(this,Vt)&&Ar(u(this,Vt),u(this,dr))}))}get_effect_pending(){return u(this,Vn).call(this),d(u(this,Vt))}error(t){if(!u(this,ut).onerror&&!u(this,ut).failed)throw t;z!=null&&z.is_fork?(u(this,Ze)&&z.skip_effect(u(this,Ze)),u(this,Be)&&z.skip_effect(u(this,Be)),u(this,Qe)&&z.skip_effect(u(this,Qe)),z.oncommit(()=>{j(this,le,Vi).call(this,t)})):j(this,le,Vi).call(this,t)}}ct=new WeakMap,Ni=new WeakMap,ut=new WeakMap,fr=new WeakMap,De=new WeakMap,Ze=new WeakMap,Be=new WeakMap,Qe=new WeakMap,Ct=new WeakMap,dr=new WeakMap,Yt=new WeakMap,Ir=new WeakMap,fn=new WeakMap,dn=new WeakMap,Vt=new WeakMap,Vn=new WeakMap,le=new WeakSet,Yc=function(){try{B(this,Ze,He(()=>u(this,fr).call(this,u(this,ct))))}catch(t){this.error(t)}},Kc=function(t){const r=u(this,ut).failed,{reset:n,invoke_onerror:i}=j(this,le,zi).call(this,t);$t(i),r&&B(this,Qe,He(()=>{r(u(this,ct),()=>t,()=>n)}))},zi=function(t){var r=!1,n=!1;const i=()=>{if(r){Zo();return}r=!0,n&&us(),u(this,Qe)!==null&&rr(u(this,Qe),()=>{B(this,Qe,null)}),j(this,le,Gn).call(this,()=>{j(this,le,Di).call(this)})};return{reset:i,invoke_onerror:()=>{var a,s;try{n=!0,(s=(a=u(this,ut)).onerror)==null||s.call(a,t,i),n=!1}catch(l){Mt(l,u(this,De)&&u(this,De).parent)}}}},Zc=function(){const t=u(this,ut).pending;t&&(this.is_pending=!0,B(this,Be,He(()=>t(u(this,ct)))),$t(()=>{var r=B(this,Ct,document.createDocumentFragment()),n=Lt(),i=!1;if(r.append(n),B(this,Ze,j(this,le,Gn).call(this,()=>{try{return He(()=>u(this,fr).call(this,n))}catch(o){try{this.error(o),i=!0}catch(a){Mt(a,u(this,De).parent)}return null}})),u(this,Ze)===null){B(this,Ct,null),i&&j(this,le,yn).call(this,z);return}u(this,Yt)===0&&(u(this,ct).before(r),B(this,Ct,null),rr(u(this,Be),()=>{B(this,Be,null)}),j(this,le,yn).call(this,z))}))},Di=function(){try{if(this.is_pending=this.has_pending_snippet(),B(this,Yt,0),B(this,dr,0),B(this,Ze,He(()=>{u(this,fr).call(this,u(this,ct))})),u(this,Yt)>0){var t=B(this,Ct,document.createDocumentFragment());hi(u(this,Ze),t);const r=u(this,ut).pending;B(this,Be,He(()=>r(u(this,ct))))}else j(this,le,yn).call(this,z)}catch(r){this.error(r)}},yn=function(t){this.is_pending=!1,t.transfer_effects(u(this,fn),u(this,dn))},Gn=function(t){var r=H,n=F,i=de;at(u(this,De)),it(u(this,De)),kr(u(this,De).ctx);try{return Qt.ensure(),t()}finally{at(r),it(n),kr(i)}},Bi=function(t,r){var n;if(!this.has_pending_snippet()){this.parent&&j(n=this.parent,le,Bi).call(n,t,r);return}B(this,Yt,u(this,Yt)+t),u(this,Yt)===0&&(j(this,le,yn).call(this,r),u(this,Be)&&rr(u(this,Be),()=>{B(this,Be,null)}),u(this,Ct)&&(u(this,ct).before(u(this,Ct)),B(this,Ct,null)))},Vi=function(t){u(this,Ze)&&(Te(u(this,Ze)),B(this,Ze,null)),u(this,Be)&&(Te(u(this,Be)),B(this,Be,null)),u(this,Qe)&&(Te(u(this,Qe)),B(this,Qe,null));let r=u(this,ut).failed;const n=i=>{const{reset:o,invoke_onerror:a}=j(this,le,zi).call(this,i);a(),r&&B(this,Qe,j(this,le,Gn).call(this,()=>{try{return He(()=>{var s=H;s.b=this,s.f|=Zn,r(u(this,ct),()=>i,()=>o)})}catch(s){return Mt(s,u(this,De).parent),null}}))};$t(()=>{var i;try{i=this.transform_error(t)}catch(o){Mt(o,u(this,De)&&u(this,De).parent);return}i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(n,o=>Mt(o,u(this,De)&&u(this,De).parent)):n(i)})};function U(e,t){var r=t==null?"":typeof t=="object"?`${t}`:t;r!==(e[Ur]??(e[Ur]=e.nodeValue))&&(e[Ur]=r,e.nodeValue=`${r}`)}function qs(e,t){return Ys(e,t)}const Pn=new Map;function Ys(e,{target:t,anchor:r,props:n={},events:i,context:o,intro:a=!0,transformError:s}){ks();var l=void 0,c=Ms(()=>{var f=r??t.appendChild(Lt());Xs(f,{pending:()=>{}},_=>{St({});var g=de;o&&(g.c=o),i&&(n.$$events=i),l=e(_,n)||ti(),Et()},s);var p=new Set,y=_=>{for(var g=0;g<_.length;g++){var E=_[g];if(!p.has(E)){p.add(E);var v=Vs(E);for(const h of[t,document]){var x=Pn.get(h);x===void 0&&(x=new Map,Pn.set(h,x));var w=x.get(E);w===void 0?(h.addEventListener(E,wi,{passive:v}),x.set(E,1)):x.set(E,w+1)}}}};return y(wn(Da)),gi.add(y),()=>{var v;for(var _ of p)for(const x of[t,document]){var g=Pn.get(x),E=g.get(_);--E==0?(x.removeEventListener(_,wi),g.delete(_),g.size===0&&Pn.delete(x)):g.set(_,E)}gi.delete(y),f!==r&&((v=f.parentNode)==null||v.removeChild(f))}});return Ks.set(l,c),l}let Ks=new WeakMap;class xi{constructor(t,r=!0){tt(this,"anchor");V(this,wt,new Map);V(this,Ot,new Map);V(this,Je,new Map);V(this,pr,new Set);V(this,pn,!0);V(this,vn,t=>{if(u(this,wt).has(t)){var r=u(this,wt).get(t),n=u(this,Ot).get(r);if(n)Nn(n),u(this,pr).delete(r);else{var i=u(this,Je).get(r);i&&(Nn(i.effect),u(this,Ot).set(r,i.effect),u(this,Je).delete(r),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),n=i.effect)}for(const[o,a]of u(this,wt)){if(u(this,wt).delete(o),o===t)break;const s=u(this,Je).get(a);s&&(Te(s.effect),u(this,Je).delete(a))}for(const[o,a]of u(this,Ot)){if(o===r||u(this,pr).has(o))continue;const s=()=>{if(Array.from(u(this,wt).values()).includes(o)){var c=document.createDocumentFragment();hi(a,c),c.append(Lt()),u(this,Je).set(o,{effect:a,fragment:c})}else Te(a);u(this,pr).delete(o),u(this,Ot).delete(o)};u(this,pn)||!n?(u(this,pr).add(o),rr(a,s,!1)):s()}}});V(this,Fn,t=>{u(this,wt).delete(t);const r=Array.from(u(this,wt).values());for(const[n,i]of u(this,Je))r.includes(n)||(Te(i.effect),u(this,Je).delete(n))});this.anchor=t,B(this,pn,r)}ensure(t,r){var n=z,i=ya();if(r&&!u(this,Ot).has(t)&&!u(this,Je).has(t))if(i){var o=document.createDocumentFragment(),a=Lt();o.append(a),u(this,Je).set(t,{effect:He(()=>r(a)),fragment:o})}else u(this,Ot).set(t,He(()=>r(this.anchor)));if(u(this,wt).set(n,t),i){for(const[s,l]of u(this,Ot))s===t?n.unskip_effect(l):n.skip_effect(l);for(const[s,l]of u(this,Je))s===t?n.unskip_effect(l.effect):n.skip_effect(l.effect);n.oncommit(u(this,vn)),n.ondiscard(u(this,Fn))}else u(this,vn).call(this,n)}}wt=new WeakMap,Ot=new WeakMap,Je=new WeakMap,pr=new WeakMap,pn=new WeakMap,vn=new WeakMap,Fn=new WeakMap;function qe(e,t,r=!1){var n=new xi(e),i=r?Ht:0;function o(a,s){n.ensure(a,s)}Qr(()=>{var a=!1;t((s,l=0)=>{a=!0,o(l,s)}),a||o(-1,null)},i)}function Fa(e,t){return t}function Zs(e,t,r){for(var n=[],i=t.length,o,a=t.length,s=0;s<i;s++){let p=t[s];rr(p,()=>{if(o){if(o.pending.delete(p),o.done.add(p),o.pending.size===0){var y=e.outrogroups;ki(e,wn(o.done)),y.delete(o),y.size===0&&(e.outrogroups=null)}}else a-=1},!1)}if(a===0){var l=n.length===0&&r!==null&&e.pending.size===0;if(l){var c=r,f=c.parentNode;Ss(f),f.append(c),e.items.clear()}ki(e,t,!l)}else o={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(o)}function ki(e,t,r=!0){var n;if(e.pending.size>0){n=new Set;for(const a of e.pending.values())for(const s of a)n.add(e.items.get(s).e)}for(var i=0;i<t.length;i++){var o=t[i];if(n!=null&&n.has(o)){o.f|=xt;const a=document.createDocumentFragment();hi(o,a)}else Te(t[i],r)}}var Ha;function Xt(e,t,r,n,i,o=null){var a=e,s=new Map,l=(t&Yi)!==0;if(l){var c=e;a=c.appendChild(Lt())}var f=null,p=ni(()=>{var h=r();return ae(h)?h:h==null?[]:wn(h)}),y,_=new Map,g=!0;function E(h){(w.effect.f&Le)===0&&(w.pending.delete(h),w.fallback=f,Qs(w,y,a,t,n),f!==null&&(y.length===0?(f.f&xt)===0?Nn(f):(f.f^=xt,nn(f,null,a)):rr(f,()=>{f=null})))}function v(h){w.pending.delete(h)}var x=Qr(()=>{y=d(p);for(var h=y.length,S=new Set,k=z,A=ya(),M=0;M<h;M+=1){var L=y[M],C=n(L,M),P=g?null:s.get(C);P?(P.v&&Ar(P.v,L),P.i&&Ar(P.i,M),A&&k.unskip_effect(P.e)):(P=Js(s,g?a:Ha??(Ha=Lt()),L,C,M,i,t,r),g||(P.e.f|=xt),s.set(C,P)),S.add(C)}if(h===0&&o&&!f&&(g?f=He(()=>o(a)):(f=He(()=>o(Ha??(Ha=Lt()))),f.f|=xt)),h>S.size&&ts(),!g)if(_.set(k,S),A){for(const[te,ke]of s)S.has(te)||k.skip_effect(ke.e);k.oncommit(E),k.ondiscard(v)}else E(k);d(p)}),w={effect:x,items:s,pending:_,outrogroups:null,fallback:f};g=!1}function rn(e){for(;e!==null&&(e.f&rt)===0;)e=e.next;return e}function Qs(e,t,r,n,i){var P,te,ke,ve,ge,Ce,ft,dt,bt;var o=(n&Bo)!==0,a=t.length,s=e.items,l=rn(e.effect.first),c,f=null,p,y=[],_=[],g,E,v,x;if(o)for(x=0;x<a;x+=1)g=t[x],E=i(g,x),v=s.get(E).e,(v.f&xt)===0&&((te=(P=v.nodes)==null?void 0:P.a)==null||te.measure(),(p??(p=new Set)).add(v));for(x=0;x<a;x+=1){if(g=t[x],E=i(g,x),v=s.get(E).e,e.outrogroups!==null)for(const Ae of e.outrogroups)Ae.pending.delete(v),Ae.done.delete(v);if((v.f&Re)!==0&&(Nn(v),o&&((ve=(ke=v.nodes)==null?void 0:ke.a)==null||ve.unfix(),(p??(p=new Set)).delete(v))),(v.f&xt)!==0)if(v.f^=xt,v===l)nn(v,null,r);else{var w=f?f.next:l;v===e.effect.last&&(e.effect.last=v.prev),v.prev&&(v.prev.next=v.next),v.next&&(v.next.prev=v.prev),Gt(e,f,v),Gt(e,v,w),nn(v,w,r),f=v,y=[],_=[],l=rn(f.next);continue}if(v!==l){if(c!==void 0&&c.has(v)){if(y.length<_.length){var h=_[0],S;f=h.prev;var k=y[0],A=y[y.length-1];for(S=0;S<y.length;S+=1)nn(y[S],h,r);for(S=0;S<_.length;S+=1)c.delete(_[S]);Gt(e,k.prev,A.next),Gt(e,f,k),Gt(e,A,h),l=h,f=A,x-=1,y=[],_=[]}else c.delete(v),nn(v,l,r),Gt(e,v.prev,v.next),Gt(e,v,f===null?e.effect.first:f.next),Gt(e,f,v),f=v;continue}for(y=[],_=[];l!==null&&l!==v;)(c??(c=new Set)).add(l),_.push(l),l=rn(l.next);if(l===null)continue}(v.f&xt)===0&&y.push(v),f=v,l=rn(v.next)}if(e.outrogroups!==null){for(const Ae of e.outrogroups)Ae.pending.size===0&&(ki(e,wn(Ae.done)),(ge=e.outrogroups)==null||ge.delete(Ae));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||c!==void 0){var M=[];if(c!==void 0)for(v of c)(v.f&Re)===0&&M.push(v);for(;l!==null;)(l.f&Re)===0&&l!==e.fallback&&M.push(l),l=rn(l.next);var L=M.length;if(L>0){var C=(n&Yi)!==0&&a===0?r:null;if(o){for(x=0;x<L;x+=1)(ft=(Ce=M[x].nodes)==null?void 0:Ce.a)==null||ft.measure();for(x=0;x<L;x+=1)(bt=(dt=M[x].nodes)==null?void 0:dt.a)==null||bt.fix()}Zs(e,M,C)}}o&&$t(()=>{var Ae,Ve;if(p!==void 0)for(v of p)(Ve=(Ae=v.nodes)==null?void 0:Ae.a)==null||Ve.apply()})}function Js(e,t,r,n,i,o,a,s){var l=(a&zo)!==0?(a&Vo)===0?bs(r,!1,!1):jt(r):null,c=(a&Do)!==0?jt(i):null;return{v:l,i:c,e:He(()=>(o(t,l??r,c??i,s),()=>{e.delete(n)}))}}function nn(e,t,r){if(e.nodes)for(var n=e.nodes.start,i=e.nodes.end,o=t&&(t.f&xt)===0?t.nodes.start:r;n!==null;){var a=Zr(n);if(o.before(n),n===i)return;n=a}}function Gt(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function se(e,t,r,n,i){var s,l;if((s=t.$$host)!=null&&s.$$shadowRoot){const c=fi("slot");$(e,c);return}var o=(l=t.$$slots)==null?void 0:l[r],a=!1;o===!0&&(o=t.children,a=!0),o===void 0||o(e,a?()=>n:n)}function el(e,t,r){var n=new xi(e);Qr(()=>{var i=t()??null;n.ensure(i,i&&(o=>r(o,i)))},Ht)}function tl(e,t,r,n,i,o){var a=null,s=e,l=new xi(s,!1);Qr(()=>{const c=t()||null;var f=Go;if(c===null){l.ensure(null,null);return}return l.ensure(c,p=>{if(c){if(a=fi(c,f),tn(a,a),n){var y=null,_=a.appendChild(Lt());n(a,_),y==null||y.remove()}H.nodes.end=a,p.before(a)}}),()=>{}},Ht),Tn(()=>{})}function rl(e,t){var r=void 0,n;ka(()=>{r!==(r=t())&&(n&&(Te(n),n=null),r&&(n=He(()=>{pi(()=>r(e))})))})}function Ua(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=Ua(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function nl(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=Ua(e))&&(n&&(n+=" "),n+=t);return n}function Tr(e){return typeof e=="object"?nl(e):e??""}const ja=[...` 	
\r\f \v\uFEFF`];function il(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var i of Object.keys(r))if(r[i])n=n?n+" "+i:i;else if(n.length)for(var o=i.length,a=0;(a=n.indexOf(i,a))>=0;){var s=a+o;(a===0||ja.includes(n[a-1]))&&(s===n.length||ja.includes(n[s]))?n=(a===0?"":n.substring(0,a))+n.substring(s+1):a=s}}return n===""?null:n}function Wa(e,t=!1){var r=t?" !important;":";",n="";for(var i of Object.keys(e)){var o=e[i];o!=null&&o!==""&&(n+=" "+i+": "+o+r)}return n}function Si(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function al(e,t){if(t){var r="",n,i;if(Array.isArray(t)?(n=t[0],i=t[1]):n=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var o=!1,a=0,s=!1,l=[];n&&l.push(...Object.keys(n).map(Si)),i&&l.push(...Object.keys(i).map(Si));var c=0,f=-1;const E=e.length;for(var p=0;p<E;p++){var y=e[p];if(s?y==="/"&&e[p-1]==="*"&&(s=!1):o?o===y&&(o=!1):y==="/"&&e[p+1]==="*"?s=!0:y==='"'||y==="'"?o=y:y==="("?a++:y===")"&&a--,!s&&o===!1&&a===0){if(y===":"&&f===-1)f=p;else if(y===";"||p===E-1){if(f!==-1){var _=Si(e.substring(c,f).trim());if(!l.includes(_)){y!==";"&&p++;var g=e.substring(c,p).trim();r+=" "+g+";"}}c=p+1,f=-1}}}}return n&&(r+=Wa(n)),i&&(r+=Wa(i,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function je(e,t,r,n,i,o){var a=e[Jn];if(a!==r||a===void 0){var s=il(r,n,o);s==null?e.removeAttribute("class"):t?e.className=s:e.setAttribute("class",s),e[Jn]=r}else if(o&&i!==o)for(var l in o){var c=!!o[l];(i==null||c!==!!i[l])&&e.classList.toggle(l,c)}return o}function Ei(e,t={},r,n){for(var i in r){var o=r[i];t[i]!==o&&(r[i]==null?e.style.removeProperty(i):e.style.setProperty(i,o,n))}}function Rn(e,t,r,n){var i=e[ei];if(i!==t){var o=al(t,n);o==null?e.removeAttribute("style"):e.style.cssText=o,e[ei]=t}else n&&(Array.isArray(n)?(Ei(e,r==null?void 0:r[0],n[0]),Ei(e,r==null?void 0:r[1],n[1],"important")):Ei(e,r,n));return n}function Xa(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Ga(e,t){var r=!("__defaultValue"in e);!r&&e.__defaultValue===t||(e.__defaultValue=t,qa(e,!r||"__value"in e))}function qa(e,t){var r=e.__defaultValue,n=e.multiple,i=n?r??[]:null;if(!(n&&!ae(i))){var o=e.selectedIndex,a=t&&n?new Set(e.selectedOptions):null;for(var s of e.options){var l=$i(s);Xa(s,n?i.includes(l):va(l,r))}if(t)if(a!==null)for(s of e.options){var c=a.has(s);s.selected!==c&&(s.selected=c)}else e.selectedIndex!==o&&(e.selectedIndex=o)}}function zt(e,t,r=!1){if(e.multiple){if(t==null)return;if(!ae(t))return Ko();for(var n of e.options)n.selected=t.includes($i(n));return}for(n of e.options){var i=$i(n);if(va(i,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function lr(e){var t=new MutationObserver(r=>{r.every(ol)||("__defaultValue"in e&&qa(e,!1),"__value"in e&&zt(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Tn(()=>{t.disconnect()})}function $i(e){return"__value"in e?e.__value:e.value}function ol(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(r=>r.nodeName==="SELECTEDCONTENT")}return!1}const an=Symbol("class"),on=Symbol("style"),Ya=Symbol("is custom element"),Ka=Symbol("is html"),sl=En?"input":"INPUT",ll=En?"option":"OPTION",Za=En?"select":"SELECT",cl=En?"progress":"PROGRESS";function sn(e,t){var r=Ln(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==cl)||(e.value=t??"")}function ul(e,t){var r=Ln(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function $e(e,t,r,n){var i=Ln(e);i[t]!==(i[t]=r)&&(t==="loading"&&(e[Io]=r),r==null?e.removeAttribute(t):typeof r!="string"&&eo(e).has(t)?e[t]=r:e.setAttribute(t,r))}function fl(e,t,r,n,i=!1,o=!1){var a=Ln(e),s=a[Ya],l=!a[Ka],c=t||{},f=e.nodeName===ll,p=e.nodeName===Za;for(var y in t)!(y in r)&&y[0]+y[1]!=="$$"&&(r[y]=null);r.class?r.class=Tr(r.class):r[an]&&(r.class=null),r[on]&&(r.style??(r.style=null));var _=eo(e);if(e.nodeName===sl&&"type"in r&&("value"in r||"__value"in r)){var g=r.type;(g!==c.type||g===void 0&&e.hasAttribute("type"))&&(c.type=g,$e(e,"type",g))}for(const k in r){let A=r[k];if(f&&k==="value"&&A==null){e.value=e.__value="",c[k]=A;continue}if(k==="class"){var E=e.namespaceURI==="http://www.w3.org/1999/xhtml";je(e,E,A,n,t==null?void 0:t[an],r[an]),c[k]=A,c[an]=r[an];continue}if(k==="style"){Rn(e,A,t==null?void 0:t[on],r[on]),c[k]=A,c[on]=r[on];continue}var v=c[k];if(!(A===v&&!(A===void 0&&e.hasAttribute(k)))){c[k]=A;var x=k[0]+k[1];if(x!=="$$")if(x==="on"){const M={},L="$$"+k;let C=k.slice(2);var w=Is(C);if(Rs(C)&&(C=C.slice(0,-7),M.capture=!0),!w&&v){if(A!=null)continue;e.removeEventListener(C,c[L],M),c[L]=null}if(w)Z(C,e,A),sr([C]);else if(A!=null){let P=function(te){c[k].call(this,te)};c[L]=Ba(C,e,P,M)}}else if(k==="style")$e(e,k,A);else if(k==="autofocus")vs(e,!!A);else if(!s&&(k==="__value"||k==="value"&&A!=null))e.value=e.__value=A;else if(k==="selected"&&f)Xa(e,A);else{var h=k;l||(h=Ds(h));var S=h==="defaultValue"||h==="defaultChecked";if(p&&h==="defaultValue")continue;if(A==null&&!s&&!S)if(a[k]=null,h==="value"||h==="checked"){let M=e;const L=t===void 0;if(h==="value"){let C=M.defaultValue;M.removeAttribute(h),M.defaultValue=C,M.value=M.__value=L?C:null}else{let C=M.defaultChecked;M.removeAttribute(h),M.defaultChecked=C,M.checked=L?C:!1}}else e.removeAttribute(k);else S||(s||typeof A!="string")&&_.has(h)?(e[h]=A,h in a&&(a[h]=xe)):typeof A!="function"&&$e(e,h,A)}}}return c}function Qa(e,t,r=[],n=[],i=[],o,a=!1,s=!1){ta(i,r,n,l=>{var c=void 0,f={},p=e.nodeName===Za,y=!1;if(ka(()=>{var g=t(...l.map(d)),E=fl(e,c,g,o,a,s);if(y&&p){var v=e;"defaultValue"in g&&Ga(v,g.defaultValue),"value"in g&&zt(v,g.value)}for(let w of Object.getOwnPropertySymbols(f))g[w]||Te(f[w]);for(let w of Object.getOwnPropertySymbols(g)){var x=g[w];w.description===qo&&(!c||x!==c[w])&&(f[w]&&Te(f[w]),f[w]=He(()=>rl(e,()=>x))),E[w]=x}c=E}),p){var _=e;pi(()=>{var g=c;"defaultValue"in g&&Ga(_,g.defaultValue),zt(_,g.value,!0),lr(_)})}y=!0})}function Ln(e){return e[Sn]??(e[Sn]={[Ya]:e.nodeName.includes("-"),[Ka]:e.namespaceURI===Zi})}var Ja=new Map;function eo(e){var t=e.getAttribute("is")||e.nodeName,r=Ja.get(t);if(r)return r;Ja.set(t,r=new Set);for(var n,i=e,o=Element.prototype;o!==i;){n=Hi(i);for(var a in n)n[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&r.add(a);i=qn(i)}return r}function Ai(e,t){return e===t||(e==null?void 0:e[kt])===t}function Mi(e=ti(),t,r,n){var i=de.r,o=H;return pi(()=>{var a,s;return xa(()=>{a=s,s=[],Wt(()=>{Ai(r(...s),e)||(t(e,...s),a&&Ai(r(...a),e)&&t(null,...a))})}),()=>{let l=o;for(;l!==i&&l.parent!==null&&l.parent.f&bn;)l=l.parent;const c=()=>{s&&Ai(r(...s),e)&&t(null,...s)},f=l.teardown;l.teardown=()=>{c(),f==null||f()}}}),e}function dl(e=!1){const t=de,r=t.l.u;if(!r)return;let n=()=>ar(t.s);if(e){let i=0,o={};const a=Er(()=>{let s=!1;const l=t.s;for(const c in l)l[c]!==o[c]&&(o[c]=l[c],s=!0);return s&&i++,i});n=()=>d(a)}r.b.length&&As(()=>{to(t,n),Yn(r.b)}),tr(()=>{const i=Wt(()=>r.m.map(Ro));return()=>{for(const o of i)typeof o=="function"&&o()}}),r.a.length&&tr(()=>{to(t,n),Yn(r.a)})}function to(e,t){if(e.l.s)for(const r of e.l.s)d(r);t()}let In=!1;function pl(e){var t=In;try{return In=!1,[e(),In]}finally{In=t}}const vl={get(e,t){if(!e.exclude.includes(t))return d(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var n=H;try{at(e.parent_effect),e.special[t]=st({get[t](){return e.props[t]}},t,Ki)}finally{at(n)}}return e.special[t](r),fa(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),fa(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function oe(e,t){return new Proxy({props:e,exclude:t,special:{},version:jt(0),parent_effect:H},vl)}const hl={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Fr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let i=e.props[n];Fr(i)&&(i=i());const o=Ft(i,t);if(o&&o.set)return o.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Fr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const i=Ft(n,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===kt||t===qi)return!1;for(let r of e.props)if(Fr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Fr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function ce(...e){return new Proxy({props:e},hl)}function st(e,t,r,n){var S;var i=!xr||(r&Ho)!==0,o=(r&Uo)!==0,a=(r&jo)!==0,s=n,l=!0,c=void 0,f=()=>a&&i?(c??(c=Er(n)),d(c)):(l&&(l=!1,s=a?Wt(n):n),s);let p;if(o){var y=kt in e||qi in e;p=((S=Ft(e,t))==null?void 0:S.set)??(y&&t in e?k=>e[t]=k:void 0)}var _,g=!1;o?[_,g]=pl(()=>e[t]):_=e[t],_===void 0&&n!==void 0&&(_=f(),p&&(i&&os(),p(_)));var E;if(i?E=()=>{var k=e[t];return k===void 0?f():(l=!0,k)}:E=()=>{var k=e[t];return k!==void 0&&(s=void 0),k===void 0?s:k},i&&(r&Ki)===0)return E;if(p){var v=e.$$legacy;return(function(k,A){return arguments.length>0?((!i||!A||v||g)&&p(A?E():k),k):E()})}var x=!1,w=((r&Fo)!==0?Er:ni)(()=>(x=!1,E()));o&&d(w);var h=H;return(function(k,A){if(arguments.length>0){const M=A?d(w):i&&o?ze(k):k;return N(w,M),x=!0,s!==void 0&&(s=M),k}return It&&x||(h.f&Le)!==0?w.v:d(w)})}function Ti(e){de===null&&Jo(),xr&&de.l!==null?_l(de).m.push(e):tr(()=>{const t=Wt(e);if(typeof t=="function")return t})}function _l(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const gl="5";typeof window<"u"&&((vo=window.__svelte??(window.__svelte={})).v??(vo.v=new Set)).add(gl);const X=ze({ready:!1,cleanScreen:!1,panelOpen:!0,settingsOpen:!1,startupOpen:!0,focusSection:null,focusNonce:0,popupSection:null,dockExpanded:!1,search:"",status:{}});function ml(e){X.popupSection=X.popupSection===e?null:e}const We=ze({});function ro(e){try{return structuredClone(e)}catch{return JSON.parse(JSON.stringify(e))}}function ne(e){var t,r,n;if(e==null)return e;try{return((n=(r=(t=window.XRA)==null?void 0:t.i18n)==null?void 0:r.t)==null?void 0:n.call(r,e))??e}catch{return e}}function Xe(e,t){const r=e.split(".");let n=We;for(const i of r){if(n==null)return t;n=n[i]}return n===void 0?t:n}function yl(e){var r,n,i,o,a,s,l,c;const t=window.XRA;if(t){if(e.startsWith("background.")){(n=(r=t.background)==null?void 0:r.apply)==null||n.call(r);return}if(e==="ui.language"){(o=(i=t.i18n)==null?void 0:i.setLanguage)==null||o.call(i,We.ui.language);return}if(e==="ui.preview_wireframe"){typeof t.applyMocapWireframeVisibility=="function"&&t.applyMocapWireframeVisibility();return}if(e==="ui.mocap_view"){typeof t.applyMocapWireframeVisibility=="function"&&t.applyMocapWireframeVisibility();return}if(e.startsWith("performance.")){window.XRA_render_fps_limit=Number(We.performance.render_fps??60),window.XRA_gpu_preference=String(We.performance.gpu_preference||"default"),window.XRA_preserve_drawing_buffer=We.performance.preserve_drawing_buffer!==!1,window.XRA_antialias=We.performance.antialias!=="off",(s=(a=t.events)==null?void 0:a.emit)==null||s.call(a,"performance",We.performance);return}(c=(l=t.events)==null?void 0:l.emit)==null||c.call(l,"config-change",{path:e,value:Xe(e)})}}function lt(e,t){var o,a;const r=window.XRA,n=e.split(".");let i=We;for(let s=0;s<n.length-1;s++)i[n[s]]==null&&(i[n[s]]={}),i=i[n[s]];if(i[n[n.length-1]]=t,r!=null&&r.config){let s=r.config;for(let l=0;l<n.length-1;l++)s[n[l]]==null&&(s[n[l]]={}),s=s[n[l]];s[n[n.length-1]]=t}yl(e);try{(a=(o=r==null?void 0:r.profileService)==null?void 0:o.save)==null||a.call(o)}catch{}}function zn(e,t,r){return new Promise((n,i)=>{const o=setTimeout(()=>i(new Error(`${r} timed out after ${t} ms`)),t);Promise.resolve(e).then(a=>{clearTimeout(o),n(a)},a=>{clearTimeout(o),i(a)})})}async function no({timeout:e=12e3,dataTimeout:t=8e3}={}){var n,i,o;const r=(n=window.XRA)==null?void 0:n.nativeBridge;if(!(r!=null&&r.startNativeStreamer))throw new Error("native bridge unavailable");try{await zn(r.startNativeStreamer(),e,"Camera start");const a=performance.now()+t;for(;performance.now()<a;){if((i=r.cameraDataReady)!=null&&i.call(r))return!0;await new Promise(s=>setTimeout(s,120))}return!0}catch(a){try{await((o=r.forceStopCamera)==null?void 0:o.call(r))}catch{}throw a}}async function wl({timeout:e=8e3}={}){var r,n;const t=(r=window.XRA)==null?void 0:r.nativeBridge;if(t!=null&&t.stopNativeStreamer)try{await zn(t.stopNativeStreamer(),e,"Camera stop")}catch(i){try{await((n=t.forceStopCamera)==null?void 0:n.call(t))}catch{}throw i}}async function bl({timeout:e=12e3,readyTimeout:t=6e3}={}){var n,i,o,a;const r=(n=window.XRA)==null?void 0:n.recorder;if(!(r!=null&&r.start))throw new Error("recorder unavailable");try{await zn(r.start(),e,"Recording start");const s=performance.now()+t;for(;performance.now()<s;){if((o=(i=r.status)==null?void 0:i.call(r))!=null&&o.active)return!0;await new Promise(l=>setTimeout(l,120))}return!0}catch(s){try{await((a=r.stop)==null?void 0:a.call(r))}catch{}throw s}}async function xl({timeout:e=8e3}={}){var r,n;const t=(r=window.XRA)==null?void 0:r.recorder;if(t!=null&&t.stop)try{await zn(t.stop(),e,"Recording stop")}catch(i){try{await((n=t.stop)==null?void 0:n.call(t))}catch{}throw i}}function Dn(){var e,t,r;X.cleanScreen=!X.cleanScreen,document.body.classList.toggle("xra-total-clean-screen",X.cleanScreen);try{(r=(t=(e=window.XRA)==null?void 0:e.ui)==null?void 0:t.setHidden)==null||r.call(t,X.cleanScreen)}catch{}}function kl(){var e;try{Object.assign(We,ro(((e=window.XRA)==null?void 0:e.config)||{}))}catch{}}function io(){var e;try{const t=(e=window.SA_bridge)==null?void 0:e.backend;t&&typeof t.status=="function"&&(X.status=t.status()||{})}catch{}}function Sl(){const e=()=>window.XRA&&window.XRA.config?(Object.assign(We,ro(window.XRA.config)),X.ready=!0,io(),window.addEventListener("keydown",t=>{t.key==="Escape"&&X.cleanScreen&&(t.preventDefault(),Dn())},!0),!0):!1;if(!e()){const t=setInterval(()=>{e()&&clearInterval(t)},200)}}const El={camera:{title:"Camera",icon:"Camera"},devices:{title:"Devices",icon:"SlidersHorizontal"},pose_model:{title:"Pose model",icon:"PersonStanding"},performance:{title:"Performance",icon:"Zap"},tracking:{title:"Motion capture",icon:"Activity"},body:{title:"Body",icon:"PersonStanding"},collider:{title:"Body collider",icon:"Shield"},lip:{title:"Audio & Lip-sync",icon:"Mic"},background:{title:"Background",icon:"Image"},avatar:{title:"Character position (avatar only)",icon:"User"},second_avatar:{title:"Remote avatar (Studio Link)",icon:"Globe"},stage:{title:"3D Stage & Environment",icon:"Landmark"},recorder:{title:"Recording / capture",icon:"Video"},visual_effects:{title:"Visual effects",icon:"Sparkles"},debug:{title:"Diagnostics",icon:"Bug"},ui:{title:"UI & overlays",icon:"Monitor"}},ao=["performance","tracking","body","collider","lip","background","stage","avatar","second_avatar","recorder","visual_effects","debug","ui","camera","devices","pose_model"],$l=new Set(["left_settings","_custom_","_excluded_"]),Al=new Set(["camera.view_presets","camera.selected_view_preset","ui.preview_video","ui.preview_wireframe","ui.preview_debug","performance.auto_last_result","recorder.output_dir"]);function oo(e){const t=String(e).replace(/_/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").trim();return t.charAt(0).toUpperCase()+t.slice(1)}const ln=e=>{var t;return String(((t=e.tracking)==null?void 0:t.guard_mode)||"").toLowerCase()!=="off"},Ml={"ui.language":{type:"select",options:()=>{var e,t;return((t=(e=window.XRA)==null?void 0:e.i18n)==null?void 0:t.LANGUAGES)||[["en","English"]]}},"background.mode":{type:"select",options:[["color","Color"],["image","Image"],["none","None (transparent · OBS)"]]},"background.color":{type:"color",when:e=>{var t;return((t=e.background)==null?void 0:t.mode)==="color"}},"background.path":{type:"text",when:e=>{var t;return((t=e.background)==null?void 0:t.mode)==="image"},desc:"Path or file name of the background image."},"ui.mocap_view":{type:"select",label:"Mocap window",options:[["off","Off"],["both","Webcam + skeleton"],["wireframe","Skeleton only"],["video","Webcam only"]]},"ui.mocap_visibility":{type:"select",label:"Mocap window visibility",options:[["always","Always on (black while idle)"],["auto","Auto (hide when tracking is off)"]]},"performance.tracking_pipeline":{type:"select",label:"Tracking mode",options:[["FULL_BODY","Full Body"],["FACE","Face only"],["UPPER_BODY","Upper body"]]},"performance.render_resolution":{type:"select",options:[["720p","720p (HD · GPU Saving)"],["1080p","1080p (Full HD · Recommended)"],["1440p","1440p (2K · High resolution)"]]},"performance.render_fps":{type:"slider",min:15,max:240,step:1},"performance.gpu_preference":{type:"select",label:"Graphics card (GPU)",options:[["default","Default"],["high-performance","Dedicated GPU (High Performance)"],["low-power","Integrated GPU (Low Power)"]]},"performance.shadows":{type:"select",options:[["auto","Auto"],["on","Enabled"],["off","Disabled (GPU saving)"]]},"performance.antialias":{type:"select",label:"Anti-Aliasing (AA)",options:[["auto","Enabled (Hardware MSAA · Recommended)"],["off","Disabled"]]},"performance.spring_bone":{type:"select",label:"Hair/cloth physics (Spring Bone)",options:[["full","Full (every frame)"],["half","Half (1 frame out of 2 · Saving)"],["off","Off"]]},"performance.infer_mode":{type:"select",options:[["native","Native (Auto)"],["640x360","640×360 (Recommended · 30 FPS smooth)"],["640x480","640×480 (Standard 4:3 format)"],["1280x720","1280×720 (HD 720p · High precision)"]]},"performance.pose_fps":{type:"slider",min:5,max:30,step:1},"performance.hand_fps":{type:"slider",min:5,max:30,step:1},"performance.min_tracking_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_pose_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_face_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_joint_confidence":{type:"slider",min:.05,max:1,step:.05},"tracking.hand_recovery_mode":{type:"select",options:[["normal","Normal"],["aggressive","Aggressive"],["off","Off"]],desc:"How the backend re-acquires hands after they leave the frame."},"tracking.hand_detection_sensitivity":{type:"select",options:[["high","High"],["normal","Normal"],["low","Low"]]},"tracking.stabilize_hand_percent":{type:"slider",min:0,max:100,step:1,group:"Stabilization"},"tracking.stabilize_arm":{type:"slider",min:0,max:100,step:1},"tracking.stabilize_arm_time":{type:"slider",min:0,max:2,step:.05},"tracking.native_smoothing":{type:"slider",min:0,max:1,step:.01,group:"Smoothing"},"tracking.adaptive_smoothing_strength":{type:"slider",min:0,max:1,step:.01},"tracking.body_bend_reduction":{type:"slider",min:0,max:1,step:.01,group:"Body"},"tracking.upper_body_guard":{type:"toggle",group:"Guard",desc:"Hold the upper body steady when tracking confidence drops."},"tracking.upper_body_guard_strength":{type:"slider",min:0,max:1,step:.01,group:"Guard",enabled:e=>{var t;return!!((t=e.tracking)!=null&&t.upper_body_guard)}},"tracking.guard_mode":{type:"select",group:"Guard",options:[["off","Off"],["auto","Auto"]],desc:"Auto re-acquires tracking after an occlusion or a fast jump."},"tracking.guard_jump_deg":{type:"slider",min:5,max:120,step:1,enabled:ln,desc:"Largest sudden joint-angle jump (deg) treated as noise."},"tracking.guard_hold_ms":{type:"slider",min:0,max:2e3,step:10,enabled:ln,desc:"How long to hold the pose before re-acquiring (ms)."},"tracking.guard_reacquire_deg":{type:"slider",min:5,max:120,step:1,enabled:ln,desc:"Angle (deg) needed to end the hold and resume tracking."},"tracking.guard_confidence_min":{type:"slider",min:0,max:1,step:.01,enabled:ln},"tracking.guard_release_ms":{type:"slider",min:0,max:2e3,step:10,enabled:ln},"tracking.desk_torso_lock":{type:"slider",min:0,max:1,step:.01,group:"Desk lock",desc:"Lock torso rotation when working at a desk."},"tracking.desk_hips_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_legs_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_max_yaw_deg":{type:"slider",min:0,max:90,step:1},"tracking.desk_max_pitch_deg":{type:"slider",min:0,max:90,step:1},"tracking.desk_max_roll_deg":{type:"slider",min:0,max:90,step:1},"body.anchor_strength":{type:"slider",min:0,max:1,step:.01},"body.transition_ms":{type:"slider",min:0,max:2e3,step:10},"avatar.offset_x":{type:"slider",min:-5,max:5,step:.01},"avatar.offset_y":{type:"slider",min:-5,max:5,step:.01},"avatar.offset_z":{type:"slider",min:-5,max:5,step:.01},"avatar.rotation_y":{type:"slider",min:-180,max:180,step:1},"second_avatar.offset_x":{type:"slider",min:-20,max:20,step:.1},"second_avatar.offset_y":{type:"slider",min:-10,max:10,step:.1},"second_avatar.offset_z":{type:"slider",min:-10,max:10,step:.1},"second_avatar.rotation_y":{type:"slider",min:-180,max:180,step:1},"stage.scale":{type:"slider",min:.1,max:5,step:.01},"stage.rotation_x":{type:"slider",min:-180,max:180,step:1},"stage.rotation_y":{type:"slider",min:-180,max:180,step:1},"stage.rotation_z":{type:"slider",min:-180,max:180,step:1},"stage.offset_x":{type:"slider",min:-10,max:10,step:.05},"stage.offset_y":{type:"slider",min:-10,max:10,step:.05},"stage.offset_z":{type:"slider",min:-10,max:10,step:.05},"stage.scene_zoom":{type:"slider",min:.5,max:3,step:.01},"stage.lights_intensity":{type:"slider",min:0,max:3,step:.05},"collider.preset":{type:"select",options:[["CUSTOM","Custom"],["NONE","None"]]},"collider.reaction":{type:"select",options:[["z_push","Z push"],["bounce","Bounce"],["block","Block"]]},"collider.head":{type:"slider",min:0,max:200,step:1},"collider.chest":{type:"slider",min:0,max:200,step:1},"collider.waist":{type:"slider",min:0,max:200,step:1},"collider.hip":{type:"slider",min:0,max:200,step:1},"collider.front_clearance":{type:"slider",min:0,max:50,step:1},"lip.analysis_fps":{type:"slider",min:5,max:60,step:1},"lip.fft_size":{type:"select",label:"FFT size",options:[["256","256"],["512","512"],["1024","1024"],["2048","2048"]]},"lip.mic_mix":{type:"slider",min:0,max:1,step:.01},"lip.threshold":{type:"slider",min:0,max:.2,step:.001},"lip.response_gain":{type:"slider",min:0,max:3,step:.05},"lip.vowel_emphasis":{type:"slider",min:0,max:3,step:.05},"recorder.mode":{type:"select",label:"Recording source",options:[["video_audio","Video + Audio"],["video","Video only"],["audio","Audio only"]]},"recorder.audio_only_variant":{type:"select",label:"Audio only mode",options:[["both","Processed + RAW"],["processed","Processed"],["raw","RAW"]]},"recorder.capture_source":{type:"select",label:"Output source",options:[["classic_v74","Classic output · recommended"],["clean_scene","Clean scene output · experimental (no UI)"],["native_xr","XR native video only · fallback"]]},"recorder.output_format":{type:"select",options:[["webm","WebM"],["mp4","MP4"]]},"recorder.audio_profile":{type:"select",options:[["podcast","Podcast"],["call","Call (Browser echo/noise filters)"]]},"recorder.hardware_encode":{type:"select",options:[["auto","Auto"],["on","On"],["off","Off (CPU)"]]},"recorder.width":{type:"slider",min:320,max:3840,step:2},"recorder.height":{type:"slider",min:240,max:2160,step:2},"recorder.fps":{type:"slider",min:15,max:60,step:1},"recorder.gate_threshold_db":{type:"slider",min:-80,max:-5,step:.5},"recorder.gate_hold_ms":{type:"slider",min:0,max:1e3,step:10},"recorder.gate_release_ms":{type:"slider",min:0,max:1e3,step:10},"recorder.video_bps":{type:"slider",min:5e5,max:2e7,step:1e5},"recorder.audio_bps":{type:"slider",min:32e3,max:32e4,step:8e3},"recorder.segment_minutes":{type:"select",options:[["0","Off"],["30","Every 30 min"],["60","Every 60 min"]]},"recorder.raw_audio_format":{type:"select",options:[["flac","FLAC (lossless)"],["wav","WAV (large)"]]},"recorder.filename":{type:"text"},"camera.optimized":{type:"toggle"},"camera.width":{type:"slider",min:160,max:1920,step:2},"camera.height":{type:"slider",min:120,max:1080,step:2},"camera.fps":{type:"slider",min:5,max:60,step:1}};function Tl(e){const t=[];for(const[r,n]of Object.entries(e||{})){if($l.has(r)||!n||typeof n!="object"||Array.isArray(n))continue;const i=El[r]||{},o=[];for(const[a,s]of Object.entries(n)){const l=`${r}.${a}`;if(Al.has(l))continue;const c=Ml[l]||{};if(c.hidden||s!==null&&typeof s=="object")continue;const f=c.type||(typeof s=="boolean"?"toggle":typeof s=="number"?"number":"text");o.push({type:f,path:l,label:c.label||oo(a),min:c.min,max:c.max,step:c.step,options:c.options,when:c.when,enabled:c.enabled,group:c.group,desc:c.desc})}o.length&&t.push({id:r,title:i.title||oo(r),icon:i.icon||"⚙",controls:o})}return t.sort((r,n)=>{const i=ao.indexOf(r.id),o=ao.indexOf(n.id);return(i<0?999:i)-(o<0?999:o)}),t}var Nl=_e("<option> </option>"),Cl=_e("<select></select>"),Ol=_e("<select><option> </option><option> </option></select>"),Pl=_e('<span class="xra-val"> </span> <div class="xra-meter-wrap"><div class="xra-meter"></div> <input class="xra-meter-input" type="range"/> <div class="xra-meter-scale"><span> </span><span> </span></div></div>',1),Rl=_e('<input type="checkbox"/>'),Ll=_e('<input type="color"/>'),Il=_e('<input type="number"/>'),zl=_e('<input type="text"/>'),Dl=_e('<label><span class="xra-row-label"> </span> <!></label>');function Bl(e,t){St(t,!0);let r=st(t,"disabled",3,!1);const n=Ie(()=>typeof t.control.options=="function"?t.control.options():t.control.options||[]),i=w=>w===!1?"off":"auto",o=w=>w==="off"?!1:null;var a=Dl();let s;var l=D(a),c=W(l,!0),f=O(l,2);{var p=w=>{var h=Cl();Xt(h,21,()=>d(n),Fa,(k,A)=>{var M=Nl(),L=W(M,!0),C={};pe(P=>{U(L,P),C!==(C=d(A)[0])&&(M.value=(M.__value=C)??"")},[()=>ne(d(A)[1])]),$(k,M)});var S;lr(h),pe(k=>{h.disabled=r(),S!==(S=k)&&(h.value=(h.__value=S)??"",zt(h,S))},[()=>Xe(t.control.path)]),Z("change",h,k=>lt(t.control.path,k.currentTarget.value)),$(w,h)},y=w=>{var h=Ol(),S=D(h),k=W(S,!0);S.value=S.__value="auto";var A=O(S),M=W(A,!0);A.value=A.__value="off";var L;lr(h),pe((C,P,te)=>{h.disabled=r(),U(k,C),U(M,P),L!==(L=te)&&(h.value=(h.__value=L)??"",zt(h,L))},[()=>ne("Auto (follow tracking)"),()=>ne("Off"),()=>i(Xe(t.control.path))]),Z("change",h,C=>lt(t.control.path,o(C.currentTarget.value))),$(w,h)},_=w=>{const h=Ie(()=>Number(Xe(t.control.path,t.control.min))),S=Ie(()=>t.control.max>t.control.min?Math.round((d(h)-t.control.min)/(t.control.max-t.control.min)*100):0);var k=Pl(),A=K(k),M=W(A,!0),L=O(A,2),C=D(L),P=O(C,2),te=O(P,2),ke=D(te),ve=W(ke,!0),ge=O(ke),Ce=W(ge,!0);pe(ft=>{U(M,ft),Rn(C,`--xra-fill:${d(S)??""}%`),$e(P,"min",t.control.min),$e(P,"max",t.control.max),$e(P,"step",t.control.step),sn(P,d(h)),P.disabled=r(),U(ve,t.control.min),U(Ce,t.control.max)},[()=>Xe(t.control.path)]),Z("input",P,ft=>lt(t.control.path,Number(ft.currentTarget.value))),$(w,k)},g=w=>{var h=Rl();pe(S=>{ul(h,S),h.disabled=r()},[()=>!!Xe(t.control.path)]),Z("change",h,S=>lt(t.control.path,S.currentTarget.checked)),$(w,h)},E=w=>{var h=Ll();pe(S=>{sn(h,S),h.disabled=r()},[()=>Xe(t.control.path)]),Z("input",h,S=>lt(t.control.path,S.currentTarget.value)),$(w,h)},v=w=>{var h=Il();pe(S=>{$e(h,"step",t.control.step||"any"),sn(h,S),h.disabled=r()},[()=>Xe(t.control.path,0)]),Z("input",h,S=>lt(t.control.path,Number(S.currentTarget.value))),$(w,h)},x=w=>{var h=zl();pe(S=>{sn(h,S),h.disabled=r()},[()=>Xe(t.control.path,"")]),Z("change",h,S=>lt(t.control.path,S.currentTarget.value)),$(w,h)};qe(f,w=>{t.control.type==="select"?w(p):t.control.type==="tristate"?w(y,1):t.control.type==="slider"?w(_,2):t.control.type==="toggle"?w(g,3):t.control.type==="color"?w(E,4):t.control.type==="number"?w(v,5):t.control.type==="text"&&w(x,6)})}pe(w=>{s=je(a,1,"xra-row",null,s,{"xra-row-slider":t.control.type==="slider",disabled:r()}),$e(l,"title",t.control.desc||""),U(c,w)},[()=>ne(t.control.label)]),$(e,a),Et()}sr(["change","input"]);var Vl=_e('<div class="xra-group"> </div>');function so(e,t){St(t,!0);const r=Ie(()=>{const o=(X.search||"").trim().toLowerCase(),a=[];let s=null;for(const l of t.section.controls)l.when&&!l.when(We)||o&&!`${l.label} ${l.path}`.toLowerCase().includes(o)||(l.group&&l.group!==s?(a.push({header:l.group}),s=l.group):l.group||(s=null),a.push({control:l,disabled:l.enabled?!l.enabled(We):!1}));return a});var n=Q(),i=K(n);Xt(i,19,()=>d(r),(o,a)=>o.header?`g${a}`:o.control.path,(o,a)=>{var s=Q(),l=K(s);{var c=p=>{var y=Vl(),_=W(y,!0);pe(()=>U(_,d(a).header)),$(p,y)},f=p=>{Bl(p,{get control(){return d(a).control},get disabled(){return d(a).disabled}})};qe(l,p=>{d(a).header?p(c):p(f,-1)})}$(o,s)}),$(e,n),Et()}fs();/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
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
 */const lo=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();var Ul=Us("<svg><!><!></svg>");function ue(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]),n=oe(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);St(t,!1);let i=st(t,"name",8,void 0),o=st(t,"color",8,"currentColor"),a=st(t,"size",8,24),s=st(t,"strokeWidth",8,2),l=st(t,"absoluteStrokeWidth",8,!1),c=st(t,"iconNode",24,()=>[]);dl();var f=Ul();Qa(f,(_,g,E)=>({...Fl,..._,...n,width:a(),height:a(),stroke:o(),"stroke-width":g,class:E}),[()=>Hl(n)?void 0:{"aria-hidden":"true"},()=>(ar(l()),ar(s()),ar(a()),Wt(()=>l()?Number(s())*24/Number(a()):s())),()=>(ar(lo),ar(i()),ar(r),Wt(()=>lo("lucide-icon","lucide",i()?`lucide-${i()}`:"",r.class)))]);var p=D(f);Xt(p,1,c,Fa,(_,g)=>{var E=Ie(()=>Wi(d(g),2));let v=()=>d(E)[0],x=()=>d(E)[1];var w=Q(),h=K(w);tl(h,v,!0,(S,k)=>{Qa(S,()=>({...x()}))}),$(_,w)});var y=O(p);se(y,t,"default",{}),$(e,f),Et()}function jl(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];ue(e,ce({name:"camera"},()=>r,{get iconNode(){return n},children:(i,o)=>{var a=Q(),s=K(a);se(s,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function Wl(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M10 5H3"}],["path",{d:"M12 19H3"}],["path",{d:"M14 3v4"}],["path",{d:"M16 17v4"}],["path",{d:"M21 12h-9"}],["path",{d:"M21 19h-5"}],["path",{d:"M21 5h-7"}],["path",{d:"M8 10v4"}],["path",{d:"M8 12H3"}]];ue(e,ce({name:"sliders-horizontal"},()=>r,{get iconNode(){return n},children:(i,o)=>{var a=Q(),s=K(a);se(s,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function Xl(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"5",r:"1"}],["path",{d:"m9 20 3-6 3 6"}],["path",{d:"m6 8 6 2 6-2"}],["path",{d:"M12 10v4"}]];ue(e,ce({name:"person-standing"},()=>r,{get iconNode(){return n},children:(i,o)=>{var a=Q(),s=K(a);se(s,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function Gl(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];ue(e,ce({name:"zap"},()=>r,{get iconNode(){return n},children:(i,o)=>{var a=Q(),s=K(a);se(s,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function ql(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]];ue(e,ce({name:"activity"},()=>r,{get iconNode(){return n},children:(i,o)=>{var a=Q(),s=K(a);se(s,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function Yl(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];ue(e,ce({name:"shield"},()=>r,{get iconNode(){return n},children:(i,o)=>{var a=Q(),s=K(a);se(s,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function Kl(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 19v3"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3"}]];ue(e,ce({name:"mic"},()=>r,{get iconNode(){return n},children:(i,o)=>{var a=Q(),s=K(a);se(s,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function Zl(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]];ue(e,ce({name:"image"},()=>r,{get iconNode(){return n},children:(i,o)=>{var a=Q(),s=K(a);se(s,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function Ql(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M10 18v-7"}],["path",{d:"M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"}],["path",{d:"M14 18v-7"}],["path",{d:"M18 18v-7"}],["path",{d:"M3 22h18"}],["path",{d:"M6 18v-7"}]];ue(e,ce({name:"landmark"},()=>r,{get iconNode(){return n},children:(i,o)=>{var a=Q(),s=K(a);se(s,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function Jl(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];ue(e,ce({name:"user"},()=>r,{get iconNode(){return n},children:(i,o)=>{var a=Q(),s=K(a);se(s,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function ec(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];ue(e,ce({name:"globe"},()=>r,{get iconNode(){return n},children:(i,o)=>{var a=Q(),s=K(a);se(s,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function tc(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]];ue(e,ce({name:"video"},()=>r,{get iconNode(){return n},children:(i,o)=>{var a=Q(),s=K(a);se(s,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function rc(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];ue(e,ce({name:"sparkles"},()=>r,{get iconNode(){return n},children:(i,o)=>{var a=Q(),s=K(a);se(s,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function nc(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 20v-9"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97"}],["path",{d:"M22 13h-4"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97"}],["path",{d:"M6 13H2"}],["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13"}]];ue(e,ce({name:"bug"},()=>r,{get iconNode(){return n},children:(i,o)=>{var a=Q(),s=K(a);se(s,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function ic(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]];ue(e,ce({name:"monitor"},()=>r,{get iconNode(){return n},children:(i,o)=>{var a=Q(),s=K(a);se(s,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function ac(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"10",r:"8"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 22h10"}],["path",{d:"M12 22v-4"}]];ue(e,ce({name:"webcam"},()=>r,{get iconNode(){return n},children:(i,o)=>{var a=Q(),s=K(a);se(s,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function co(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}]];ue(e,ce({name:"circle"},()=>r,{get iconNode(){return n},children:(i,o)=>{var a=Q(),s=K(a);se(s,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function oc(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];ue(e,ce({name:"square"},()=>r,{get iconNode(){return n},children:(i,o)=>{var a=Q(),s=K(a);se(s,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function sc(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]];ue(e,ce({name:"eye"},()=>r,{get iconNode(){return n},children:(i,o)=>{var a=Q(),s=K(a);se(s,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function lc(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}],["path",{d:"m2 2 20 20"}]];ue(e,ce({name:"eye-off"},()=>r,{get iconNode(){return n},children:(i,o)=>{var a=Q(),s=K(a);se(s,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function cc(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];ue(e,ce({name:"folder-open"},()=>r,{get iconNode(){return n},children:(i,o)=>{var a=Q(),s=K(a);se(s,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function uc(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];ue(e,ce({name:"info"},()=>r,{get iconNode(){return n},children:(i,o)=>{var a=Q(),s=K(a);se(s,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function fc(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ue(e,ce({name:"x"},()=>r,{get iconNode(){return n},children:(i,o)=>{var a=Q(),s=K(a);se(s,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function dc(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];ue(e,ce({name:"settings"},()=>r,{get iconNode(){return n},children:(i,o)=>{var a=Q(),s=K(a);se(s,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function pc(e,t){const r=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ue(e,ce({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(i,o)=>{var a=Q(),s=K(a);se(s,t,"default",{}),$(i,a)},$$slots:{default:!0}}))}function Ye(e,t){const r={Camera:jl,SlidersHorizontal:Wl,PersonStanding:Xl,Zap:Gl,Activity:ql,Shield:Yl,Mic:Kl,Image:Zl,Landmark:Ql,User:Jl,Globe:ec,Video:tc,Sparkles:rc,Bug:nc,Monitor:ic,Webcam:ac,Circle:co,Square:oc,Eye:sc,EyeOff:lc,FolderOpen:cc,Info:uc,X:fc,Settings:dc,RefreshCw:pc};let n=st(t,"name",3,"Circle"),i=st(t,"size",3,16),o=st(t,"strokeWidth",3,2),a=st(t,"class",3,"");const s=Ie(()=>r[n()]??co);var l=Q(),c=K(l);el(c,()=>d(s),(f,p)=>{p(f,{get size(){return i()},get"stroke-width"(){return o()},get class(){return a()}})}),$(e,l)}var vc=_e('<div class="xra-sec-body"><!></div>'),hc=_e('<details class="xra-sec"><summary><span class="xra-sec-title"><!> <span> </span></span> <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></summary> <!></details>');function _c(e,t){St(t,!0);const r="ui.sections_open";let n=Y(ze(Wt(()=>{var x;return((x=Xe(r,{}))==null?void 0:x[t.section.id])??!1})));const i=Ie(()=>!!(X.search||"").trim());let o;function a(){N(n,!d(n)),lt(`${r}.${t.section.id}`,d(n))}tr(()=>{X.focusNonce,!(X.focusSection!==t.section.id||!X.panelOpen)&&(N(n,!0),lt(`${r}.${t.section.id}`,!0),requestAnimationFrame(()=>o==null?void 0:o.scrollIntoView({block:"nearest",behavior:"smooth"})))});var s=hc(),l=D(s),c=D(l),f=D(c);Ye(f,{get name(){return t.section.icon},size:15,class:"xra-sec-icon"});var p=O(f,2),y=W(p,!0),_=O(c,2);let g;var E=O(l,2);{var v=x=>{var w=vc(),h=D(w);so(h,{get section(){return t.section}}),$(x,w)};qe(E,x=>{(d(n)||d(i))&&x(v)})}Mi(s,x=>o=x,()=>o),pe(x=>{s.open=d(n)||d(i),U(y,x),g=je(_,0,"xra-sec-chevron",null,g,{open:d(n)})},[()=>ne(t.section.title)]),Z("click",l,x=>{x.preventDefault(),a()}),$(e,s),Et()}sr(["click"]);var cn=_e('<option class="svelte-x8svx4"> </option>'),gc=_e('<div class="warn svelte-x8svx4"> </div>'),mc=_e('<div class="xra-startup svelte-x8svx4"><div class="card svelte-x8svx4" role="dialog" aria-label="XR Animator VMC"><div class="col left svelte-x8svx4"><div class="brand svelte-x8svx4"><span class="logo svelte-x8svx4">XR</span> <span class="name svelte-x8svx4">Animator <b class="svelte-x8svx4">VMC</b></span></div> <div class="sub svelte-x8svx4"> </div> <pre class="log svelte-x8svx4"> </pre> <div class="credits svelte-x8svx4">Engine: XR Animator by Butz Yung (CC BY-NC-SA 4.0)<br class="svelte-x8svx4"/> Backends: native MediaPipe · optional ONNX Runtime</div></div> <div class="col right svelte-x8svx4"><div class="group-title svelte-x8svx4"> </div> <button type="button" class="q primary svelte-x8svx4"> </button> <button type="button" class="q svelte-x8svx4"> </button> <div class="group-title svelte-x8svx4"> <span></span></div> <div class="row svelte-x8svx4"><select class="svelte-x8svx4"><!></select> <button type="button" class="q icon svelte-x8svx4"><!></button></div> <!> <div class="group-title svelte-x8svx4"> </div> <label class="field svelte-x8svx4"><span class="svelte-x8svx4"> </span> <select class="svelte-x8svx4"></select></label> <label class="field svelte-x8svx4"><span class="svelte-x8svx4"> </span> <select class="svelte-x8svx4"></select></label> <button type="button" class="q ghost svelte-x8svx4"> </button></div></div></div>');function yc(e,t){St(t,!0);const r=()=>window.XRA,n=m=>ne(m),i=["AUTO","ECO","LOW","BALANCED","QUALITY","HIGH","MAX","CUSTOM"],o=4e3;function a(){var m,b,T;try{(T=(b=(m=r())==null?void 0:m.profileService)==null?void 0:b.save)==null||T.call(b,0)}catch{}}const s=(()=>{var b,T;const m=(T=(b=r())==null?void 0:b.i18n)==null?void 0:T.LANGUAGES;return Array.isArray(m)&&m.length?m:[["auto","Auto / System"],["en","English"],["it","Italiano"]]})();let l=Y("auto"),c=Y("CUSTOM"),f=Y("default"),p=Y(ze([])),y=Y(!1),_=Y(""),g=Y(!1),E=Y(""),v=Y(""),x=Y(!1),w=Y(!1),h=Y(!1),S=Y(ze([])),k=!1,A=!1,M=0,L=0,C=[];function P(m){(d(S).length?d(S)[d(S).length-1]:"")!==m&&N(S,[...d(S),m].slice(-40),!0)}function te(){var m,b,T;k||(k=!0,L&&(clearInterval(L),L=0),a(),X.startupOpen=!1,(T=(b=(m=r())==null?void 0:m.ui)==null?void 0:b.refresh)==null||T.call(b))}async function ke(){var m,b;N(x,!0),P("Starting tracking…");try{await no()}catch(T){(b=(m=r()).toast)==null||b.call(m,"Tracking: "+T.message,"warn",4500)}finally{N(x,!1),te()}}async function ve(m){const b=r();if(m=String(m||"CUSTOM").toUpperCase(),m==="CUSTOM"){b.config.performance.master_preset="CUSTOM",a(),P("Preset: CUSTOM");return}if(m==="AUTO"){P("Benchmarking hardware…");const T=await b.performance.benchmarkHardwareOnly();P(`AUTO → ${T.preset} (${T.fps.toFixed(1)} fps)`),await b.performance.applyPresetSafe(T.preset),b.config.performance.master_preset="AUTO",b.config.performance.auto_last_result=T,a();return}P(`Applying preset: ${m}…`),await b.performance.applyPresetSafe(m),P(`Preset ${m} applied`)}function ge(m=""){var q,ee,ie;const b=(q=r())==null?void 0:q.nativeBridge,T=((ee=b==null?void 0:b.activeCamera)==null?void 0:ee.call(b))||{},I=!!((ie=b==null?void 0:b.cameraRunning)!=null&&ie.call(b));N(g,I),N(E,m||(I?`${n("ON")} · ${T.label||n("Default camera")}`:n("OFF")),!0)}async function Ce(m=!1){var T,I,q;const b=(T=r())==null?void 0:T.nativeBridge;if(b!=null&&b.enumerateCameras){N(h,!0);try{const ee=await b.enumerateCameras({requestPermission:m}),ie=b.activeCamera()||{};N(p,(ee||[]).map(Fe=>({deviceId:Fe.deviceId,label:Fe.label})),!0);const we=ie.deviceId||((I=We.devices)==null?void 0:I.camera_device_id)||"";N(_,d(p).some(Fe=>Fe.deviceId===we)?we:((q=d(p)[0])==null?void 0:q.deviceId)||"",!0),N(y,!0),ge(),P(d(p).length?`${d(p).length} camera${d(p).length>1?"s":""} detected`:"No cameras found")}catch{N(y,!0),ge(n("Camera unavailable")),P("Camera enumeration failed")}finally{N(h,!1)}}}async function ft(m){var q,ee;const b=(q=r())==null?void 0:q.nativeBridge,T=((ee=m==null?void 0:m.currentTarget)==null?void 0:ee.value)??d(_),I=d(p).find(ie=>ie.deviceId===T);if(I){N(h,!0);try{const ie={deviceId:I.deviceId,label:I.label};b.cameraRunning()?await b.switchCamera(ie):await b.setCameraPreference(ie),ge(),P(`Webcam: ${I.label}`)}catch(ie){ge("Error · "+ie.message),P("Webcam switch failed")}finally{N(h,!1)}}}function dt(){var T,I,q,ee,ie,we,Fe,Pe;const m=(q=(I=(T=r())==null?void 0:T.xraBackend)==null?void 0:I.snapshot)==null?void 0:q.call(I),b=(m==null?void 0:m.capture)||((Pe=(Fe=(we=(ie=(ee=window.SA_bridge)==null?void 0:ee.backend)==null?void 0:ie.status)==null?void 0:we.call(ie))==null?void 0:Fe.backend)==null?void 0:Pe.capture);if(b!=null&&b.camera_busy){const pt=(b.busy_processes&&b.busy_processes.length?b.busy_processes:b.busy_process?[b.busy_process]:[]).filter(_n=>!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(String(_n).trim()));if(pt.length)return{busy:!0,proc:pt.join(", ")}}if(b!=null&&b.last_error&&b.last_error.includes("Webcam occupata")){const ye=b.last_error.match(/Webcam occupata da:\s*([^.]+)/i),pt=ye?ye[1].trim():"";if(!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(pt))return{busy:!0,proc:b.last_error}}return{busy:!1,proc:""}}function bt(){var m,b,T,I,q,ee,ie,we,Fe;if(typeof((b=(m=r())==null?void 0:m.nativeBridge)==null?void 0:b.isAvatarReady)=="function")return r().nativeBridge.isAvatarReady();if((T=window.MMD_SA)!=null&&T.MMD_started){const Pe=(ee=(q=(I=window.MMD_SA)==null?void 0:I.THREEX)==null?void 0:q.get_model)==null?void 0:ee.call(q,0);let ye=Pe;if((Pe==null?void 0:Pe.type)==="MMD_dummy")try{ye=Pe.model||null}catch{ye=null}const pt=((ie=ye==null?void 0:ye.model)==null?void 0:ie.scene)||(ye==null?void 0:ye.mesh)||(ye==null?void 0:ye.scene)||null;if(ye&&!(Pe!=null&&Pe.loading)&&!ye.loading&&!((Fe=(we=window.MMD_SA)==null?void 0:we.THREEX)!=null&&Fe._loading_model)&&pt)return pt.visible!==!1}return!1}function Ae(){var b,T,I;const m=(b=r())==null?void 0:b.xraBackend;return!m||!m.active?!0:!!((I=(T=m.snapshot)==null?void 0:T.call(m))!=null&&I.ready)}function Ve(){if(k)return;const m=dt();m.busy?(N(v,`Webcam in use by another application (${m.proc}). Close it to start tracking.`),P("Webcam is busy — close the other app")):N(v,""),bt()&&P("Avatar ready"),Ae()&&P("Mocap backend ready")}function zr(){Ve(),!d(x)&&!A&&Date.now()-M>o&&te()}async function Dr(m){var T,I,q;const b=((T=m==null?void 0:m.currentTarget)==null?void 0:T.value)??d(c);N(c,b,!0),N(w,!0);try{await ve(b),r().events.emit("state",{path:"performance.master_preset",value:r().config.performance.master_preset}),kl()}catch(ee){console.error("[XRA START]",ee),P("Preset error: "+ee.message)}finally{N(w,!1),(q=(I=r().ui)==null?void 0:I.refresh)==null||q.call(I)}}function Br(m){var b,T,I,q;N(l,((b=m==null?void 0:m.currentTarget)==null?void 0:b.value)??d(l),!0),(q=(I=(T=r())==null?void 0:T.i18n)==null?void 0:I.setLanguage)==null||q.call(I,d(l))}async function R(){var m,b;try{await((b=(m=r().nativeBridge)==null?void 0:m.openVrmPicker)==null?void 0:b.call(m))}catch(T){r().toast("VRM loader: "+T.message,"error",4500)}}Ti(()=>{var T,I,q,ee,ie,we,Fe,Pe,ye,pt,_n,$o,Ao;const m=r();M=Date.now(),P("Initializing XR Animator VMC…"),N(l,((I=(T=m==null?void 0:m.config)==null?void 0:T.ui)==null?void 0:I.language)||"auto",!0),N(c,((ee=(q=m==null?void 0:m.config)==null?void 0:q.performance)==null?void 0:ee.master_preset)==="MINIMAL"?"ECO":((we=(ie=m==null?void 0:m.config)==null?void 0:ie.performance)==null?void 0:we.master_preset)||"CUSTOM",!0),N(f,((Pe=(Fe=m==null?void 0:m.config)==null?void 0:Fe.background)==null?void 0:Pe.path)||((pt=(ye=m==null?void 0:m.config)==null?void 0:ye.background)==null?void 0:pt.color)||"default",!0),ge(),setTimeout(()=>Ce(!1),100),L=setInterval(zr,250),window.addEventListener("MMDStarted",Ve),(_n=m.xraBackend)!=null&&_n.onStatus&&m.xraBackend.onStatus(Ve);const b=gr=>{gr.key==="Escape"&&te()};window.addEventListener("keydown",b,!0),Ve(),(Ao=($o=m.whenNativeReady)==null?void 0:$o.call(m))==null||Ao.then(()=>{X.startupOpen&&Ce(!1)});for(const gr of["camera-started","camera-stopped","camera-switched"])C.push(m.events.on(gr,()=>{X.startupOpen&&Ce(!1)}));for(const gr of["avatar-loading","avatar-changed","avatar-ready"])C.push(m.events.on(gr,()=>Ve()));return()=>{L&&clearInterval(L),window.removeEventListener("MMDStarted",Ve),window.removeEventListener("keydown",b,!0);for(const gr of C)try{gr()}catch{}C=[]}});var G=mc(),re=D(G),he=D(re),Oe=O(D(he),2),et=W(Oe,!0),Pt=O(Oe,2),vr=W(Pt,!0),Ci=O(he,2),ho=D(Ci),Oc=W(ho,!0),Hn=O(ho,2),Pc=W(Hn,!0),Un=O(Hn,2),Rc=W(Un,!0),_o=O(Un,2),go=D(_o),Lc=O(go);let mo;var yo=O(_o,2),Kt=D(yo),Ic=D(Kt);{var zc=m=>{var b=cn(),T=W(b,!0);b.value=b.__value="",pe(I=>U(T,I),[()=>n("Loading cameras…")]),$(m,b)},Dc=m=>{var b=cn(),T=W(b,!0);b.value=b.__value="",pe(I=>U(T,I),[()=>n("No cameras found")]),$(m,b)},Bc=m=>{var b=Q(),T=K(b);Xt(T,17,()=>d(p),I=>I.deviceId,(I,q)=>{var ee=cn(),ie=W(ee,!0),we={};pe(()=>{U(ie,d(q).label),we!==(we=d(q).deviceId)&&(ee.value=(ee.__value=we)??"")}),$(I,ee)}),$(m,b)};qe(Ic,m=>{d(y)?d(p).length?m(Bc,-1):m(Dc,1):m(zc)})}var jn;lr(Kt);var hn=O(Kt,2),Vc=D(hn);Ye(Vc,{name:"RefreshCw",size:14});var wo=O(yo,2);{var Fc=m=>{var b=gc(),T=W(b,!0);pe(()=>U(T,d(v))),$(m,b)};qe(wo,m=>{d(v)&&m(Fc)})}var bo=O(wo,2),Hc=W(bo,!0),xo=O(bo,2),ko=D(xo),Uc=W(ko,!0),hr=O(ko,2);Xt(hr,20,()=>i,m=>m,(m,b)=>{var T=cn(),I=W(T,!0),q={};pe(()=>{U(I,b),q!==(q=b)&&(T.value=(T.__value=q)??"")}),$(m,T)});var Wn;lr(hr);var So=O(xo,2),Eo=D(So),jc=W(Eo,!0),_r=O(Eo,2);Xt(_r,21,()=>s,([m,b])=>m,(m,b)=>{var T=Ie(()=>Wi(d(b),2));let I=()=>d(T)[0],q=()=>d(T)[1];var ee=cn(),ie=W(ee,!0),we={};pe(()=>{U(ie,q()),we!==(we=I())&&(ee.value=(ee.__value=we)??"")}),$(m,ee)});var Xn;lr(_r);var Oi=O(So,2),Wc=W(Oi,!0);pe((m,b,T,I,q,ee,ie,we,Fe,Pe,ye,pt)=>{U(et,m),U(vr,b),U(Oc,T),Hn.disabled=d(x),U(Pc,I),Un.disabled=d(x),U(Rc,q),U(go,`${ee??""} `),mo=je(Lc,1,"dot svelte-x8svx4",null,mo,{on:d(g)}),Kt.disabled=d(h)||d(x),jn!==(jn=d(_))&&(Kt.value=(Kt.__value=jn)??"",zt(Kt,jn)),$e(hn,"title",ie),$e(hn,"aria-label",we),hn.disabled=d(h)||d(x),U(Hc,Fe),U(Uc,Pe),hr.disabled=d(w)||d(x),Wn!==(Wn=d(c))&&(hr.value=(hr.__value=Wn)??"",zt(hr,Wn)),U(jc,ye),_r.disabled=d(x),Xn!==(Xn=d(l))&&(_r.value=(_r.__value=Xn)??"",zt(_r,Xn)),Oi.disabled=d(x),U(Wc,pt)},[()=>n("Quick setup · changes apply immediately."),()=>d(S).join(`
`),()=>n("Quick start"),()=>d(x)?n("Starting…"):n("Start tracking"),()=>n("Load / change VRM…"),()=>n("Webcam"),()=>n("Refresh cameras"),()=>n("Refresh cameras"),()=>n("Options"),()=>n("Master preset"),()=>n("Language"),()=>n("Continue")]),Z("click",G,te),Z("click",re,m=>m.stopPropagation()),On("pointerenter",re,()=>{A=!0,M=Date.now()}),Z("pointermove",re,()=>{M=Date.now()}),On("pointerleave",re,()=>{A=!1,M=Date.now()}),Z("click",Hn,ke),Z("click",Un,R),Z("change",Kt,ft),Z("click",hn,()=>Ce(!0)),Z("change",hr,Dr),Z("change",_r,Br),Z("click",Oi,te),$(e,G),Et()}sr(["click","pointermove","change"]);var wc=_e('<button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button>'),bc=_e('<nav class="xra-dock group fixed left-2 top-1/2 z-[99990] flex w-[46px] max-h-[92vh] -translate-y-1/2 flex-col gap-0.5 overflow-hidden rounded-xl border border-white/10 bg-[var(--xra-ui-bg)] p-1.5 font-sans text-[12.5px] leading-snug text-[var(--xra-ui-fg)] shadow-[0_12px_40px_rgba(0,0,0,.55)] transition-[width] duration-200 hover:w-[232px]"><!> <div class="my-1 h-px bg-white/10"></div> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button></nav>');function xc(e,t){St(t,!0);const r=()=>window.XRA;let n=Y(!1),i=Y(!1),o=0;function a(){var G,re,he,Oe,et;const R=r();if(R){try{N(n,!!((re=(G=R.nativeBridge)==null?void 0:G.cameraRunning)!=null&&re.call(G)))}catch{}try{N(i,!!((et=(Oe=(he=R.recorder)==null?void 0:he.status)==null?void 0:Oe.call(he))!=null&&et.active))}catch{}}}let s=Y(!1),l=Y("");async function c(){var G,re,he,Oe;if(d(s))return;N(s,!0);const R=!d(n);N(l,R?"Starting…":"Stopping…",!0);try{R?(await no(),N(n,!0)):(await wl(),N(n,!1))}catch(et){try{await((re=(G=r().nativeBridge)==null?void 0:G.forceStopCamera)==null?void 0:re.call(G))}catch{}N(n,!1),(Oe=(he=r()).toast)==null||Oe.call(he,"Tracking: "+et.message,"warn",4500)}finally{N(s,!1),N(l,""),setTimeout(a,250)}}let f=Y(!1),p=Y("");async function y(){var G,re;if(d(f))return;N(f,!0);const R=!d(i);N(p,R?"Starting…":"Stopping…",!0);try{R?(await bl(),N(i,!0)):(await xl(),N(i,!1))}catch(he){N(i,!1),(re=(G=r()).toast)==null||re.call(G,"Recording: "+he.message,"warn",4500)}finally{N(f,!1),N(p,""),setTimeout(a,250)}}async function _(){var R,G,re,he;try{await((G=(R=r().nativeBridge)==null?void 0:R.openVrmPicker)==null?void 0:G.call(R))}catch(Oe){(he=(re=r()).toast)==null||he.call(re,"VRM loader: "+Oe.message,"error",4500)}}function g(){var R,G;try{(G=(R=r().nativeBridge)==null?void 0:R.showAbout)==null||G.call(R)}catch{}}const E=[{id:"ui",icon:"Monitor",label:"UI Settings"},{id:"camera",icon:"Camera",label:"Webcam settings"},{id:"avatar",icon:"User",label:"Model settings"},{id:"second_avatar",icon:"Globe",label:"Studio link"},{id:"stage",icon:"Landmark",label:"Environment + Camera"},{id:"background",icon:"Image",label:"Background"},{id:"lip",icon:"Mic",label:"Audio"}],v="hover:bg-white/10",x="flex-1 overflow-hidden opacity-0 transition-opacity duration-150 group-hover:opacity-100";Ti(()=>(a(),o=setInterval(a,1e3),()=>clearInterval(o)));var w=bc(),h=D(w);Xt(h,17,()=>E,R=>R.id,(R,G)=>{var re=wc();je(re,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var he=D(re),Oe=D(he);Ye(Oe,{get name(){return d(G).icon},size:16});var et=O(he,2);je(et,1,Tr(x));var Pt=W(et,!0);pe((vr,Ci)=>{$e(re,"aria-label",vr),U(Pt,Ci)},[()=>ne(d(G).label),()=>ne(d(G).label)]),Z("click",re,()=>ml(d(G).id)),$(R,re)});var S=O(h,4),k=D(S),A=D(k);{let R=Ie(()=>d(n)?"text-emerald-400":"");Ye(A,{name:"Webcam",size:16,get class(){return d(R)}})}var M=O(k,2);je(M,1,Tr(x));var L=W(M,!0),C=O(S,2),P=D(C),te=D(P);{let R=Ie(()=>d(f)?"Circle":d(i)?"Square":"Circle"),G=Ie(()=>d(i)?"text-red-400":"");Ye(te,{get name(){return d(R)},size:16,get class(){return d(G)}})}var ke=O(P,2);je(ke,1,Tr(x));var ve=W(ke,!0),ge=O(C,2);je(ge,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var Ce=D(ge),ft=D(Ce);Ye(ft,{name:"FolderOpen",size:16});var dt=O(Ce,2);je(dt,1,Tr(x));var bt=W(dt,!0),Ae=O(ge,2);je(Ae,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var Ve=D(Ae),zr=D(Ve);Ye(zr,{name:"Info",size:16});var Dr=O(Ve,2);je(Dr,1,Tr(x));var Br=W(Dr,!0);pe((R,G,re,he,Oe,et,Pt,vr)=>{je(S,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${d(n)?"bg-emerald-500/20 hover:bg-emerald-500/30":v} ${d(s)?"opacity-60":""}`),$e(S,"aria-label",R),S.disabled=d(s),U(L,G),je(C,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${d(i)?"bg-red-500/30 hover:bg-red-500/40 text-red-200":v} ${d(f)?"opacity-60":""}`),$e(C,"aria-label",re),C.disabled=d(f),U(ve,he),$e(ge,"aria-label",Oe),U(bt,et),$e(Ae,"aria-label",Pt),U(Br,vr)},[()=>ne("Tracking"),()=>d(s)?ne(d(l)):d(n)?ne("Tracking on"):ne("Tracking off"),()=>ne("Record"),()=>d(f)?ne(d(p)):d(i)?ne("Stop recording"):ne("Record"),()=>ne("Load / change VRM…"),()=>ne("Load / change VRM…"),()=>ne("About"),()=>ne("About")]),On("pointerenter",w,()=>{X.dockExpanded=!0}),On("pointerleave",w,()=>{X.dockExpanded=!1}),Z("click",S,c),Z("click",C,y),Z("click",ge,_),Z("click",Ae,g),$(e,w),Et()}sr(["click"]);var kc=_e('<div class="absolute inset-0 z-30 grid place-items-center bg-black text-[12px] text-[var(--xra-ui-fg)]"> </div>'),Sc=_e('<div class="xra-mocap-window fixed z-[99991] flex flex-col overflow-hidden rounded-xl border border-white/15 bg-[var(--xra-ui-bg)] text-[var(--xra-ui-fg)] shadow-[0_16px_48px_rgba(0,0,0,.6)] font-sans"><header class="flex shrink-0 cursor-move touch-none select-none items-center gap-2 px-2 py-1.5"><!> <span class="flex-1 text-[12px] font-semibold"> </span> <select class="rounded-md border border-white/15 bg-[#101214] px-1.5 py-0.5 text-[11px] text-[var(--xra-ui-fg)]"><option> </option><option> </option><option> </option><option> </option></select> <button type="button" class="rounded-md border border-white/15 bg-white/5 px-1.5 py-0.5 cursor-pointer text-[var(--xra-ui-fg)]"><!></button></header> <div class="relative min-h-0 flex-1 overflow-hidden bg-black"><!> <div class="absolute bottom-0 right-0 z-20 h-5 w-5 cursor-nwse-resize touch-none"></div></div></div>');function Ec(e,t){St(t,!0);const r=()=>window.XRA,n=Xe("ui.mocap_window",{})||{};let i=Y(ze(Number.isFinite(n.x)?n.x:48)),o=Y(ze(Number.isFinite(n.y)?n.y:96)),a=Y(ze(Number.isFinite(n.w)?n.w:360)),s=Y(ze(Number.isFinite(n.h)?n.h:270)),l=Y(void 0),c=Y(!1),f=0;const p=Ie(()=>Xe("ui.mocap_visibility","always")!=="auto"||d(c));function y(){lt("ui.mocap_window",{x:Math.round(d(i)),y:Math.round(d(o)),w:Math.round(d(a)),h:Math.round(d(s))})}function _(){var w,h,S;try{(S=(h=(w=r())==null?void 0:w.nativeBridge)==null?void 0:h.updateMocapWindow)==null||S.call(h)}catch{}}function g(w,h){w.preventDefault();const S=w.clientX,k=w.clientY,A=d(i),M=d(o),L=d(a),C=d(s),P=ke=>{const ve=ke.clientX-S,ge=ke.clientY-k;h==="move"?(N(i,Math.max(0,Math.min(window.innerWidth-80,A+ve)),!0),N(o,Math.max(0,Math.min(window.innerHeight-30,M+ge)),!0)):(N(a,Math.max(200,Math.min(window.innerWidth-d(i),L+ve)),!0),N(s,Math.max(130,Math.min(window.innerHeight-d(o),C+ge)),!0))},te=()=>{window.removeEventListener("pointermove",P),window.removeEventListener("pointerup",te),y()};window.addEventListener("pointermove",P),window.addEventListener("pointerup",te)}tr(()=>{var h,S,k;const w=d(l);if(w){try{(k=(S=(h=r())==null?void 0:h.nativeBridge)==null?void 0:S.attachMocapWindow)==null||k.call(S,w)}catch{}return()=>{var A,M,L;try{(L=(M=(A=r())==null?void 0:A.nativeBridge)==null?void 0:M.detachMocapWindow)==null||L.call(M)}catch{}}}}),tr(()=>{d(i),d(o),d(a),d(s),d(c),_()}),Ti(()=>{const w=()=>{var h,S,k;N(c,!!((k=(S=(h=r())==null?void 0:h.nativeBridge)==null?void 0:S.cameraRunning)!=null&&k.call(S)))};return w(),f=setInterval(w,500),window.addEventListener("resize",_),()=>{clearInterval(f),window.removeEventListener("resize",_)}});var E=Q(),v=K(E);{var x=w=>{var h=Sc(),S=D(h),k=D(S);Ye(k,{name:"Activity",size:14});var A=O(k,2),M=W(A,!0),L=O(A,2),C=D(L),P=W(C,!0);C.value=C.__value="both";var te=O(C),ke=W(te,!0);te.value=te.__value="wireframe";var ve=O(te),ge=W(ve,!0);ve.value=ve.__value="video";var Ce=O(ve),ft=W(Ce,!0);Ce.value=Ce.__value="off";var dt;lr(L);var bt=O(L,2),Ae=D(bt);Ye(Ae,{name:"X",size:13});var Ve=O(S,2),zr=D(Ve);{var Dr=R=>{var G=kc(),re=W(G,!0);pe(he=>U(re,he),[()=>ne("Tracking is off")]),$(R,G)};qe(zr,R=>{d(c)||R(Dr)})}var Br=O(zr,2);Mi(Ve,R=>N(l,R),()=>d(l)),pe((R,G,re,he,Oe,et,Pt,vr)=>{Rn(h,`left:${d(i)??""}px; top:${d(o)??""}px; width:${d(a)??""}px; height:${d(s)??""}px;`),U(M,R),U(P,G),U(ke,re),U(ge,he),U(ft,Oe),dt!==(dt=et)&&(L.value=(L.__value=dt)??"",zt(L,dt)),$e(bt,"title",Pt),$e(Br,"title",vr)},[()=>ne("Mocap"),()=>ne("Webcam + skeleton"),()=>ne("Skeleton only"),()=>ne("Webcam only"),()=>ne("Off"),()=>Xe("ui.mocap_view","off"),()=>ne("Close"),()=>ne("Resize")]),Z("pointerdown",S,R=>g(R,"move")),Z("change",L,R=>lt("ui.mocap_view",R.currentTarget.value)),Z("pointerdown",L,R=>R.stopPropagation()),Z("click",bt,()=>lt("ui.mocap_view","off")),Z("pointerdown",bt,R=>R.stopPropagation()),Z("pointerdown",Br,R=>{R.stopPropagation(),g(R,"resize")}),$(w,h)};qe(v,w=>{d(p)&&w(x)})}$(e,E),Et()}sr(["pointerdown","change","click"]);var $c=_e('<aside class="xra-section-popup fixed top-1/2 z-[99992] flex max-h-[72vh] w-[320px] -translate-y-1/2 flex-col overflow-hidden rounded-xl border border-white/12 bg-[var(--xra-ui-bg)] text-[12.5px] leading-[1.45] text-[var(--xra-ui-fg)] shadow-[0_16px_48px_rgba(0,0,0,.6)] font-sans transition-[left] duration-200"><header class="flex shrink-0 items-center gap-2 bg-[var(--xra-ui-bg2)] px-3 py-2 shadow-[inset_0_-1px_0_var(--xra-ui-accent-soft)]"><!> <span class="text-[12.5px] font-semibold text-[#cfcfcf]"> </span></header> <div class="min-h-0 flex-1 overflow-auto px-2.5 py-2"><!></div></aside>');function Ac(e,t){St(t,!0);let r;tr(()=>{const f=y=>{const _=y.target;r&&_ instanceof Node&&r.contains(_)||_ instanceof Element&&_.closest(".xra-dock")||(X.popupSection=null)},p=y=>{y.key==="Escape"&&(X.popupSection=null)};return document.addEventListener("pointerdown",f,!0),window.addEventListener("keydown",p,!0),()=>{document.removeEventListener("pointerdown",f,!0),window.removeEventListener("keydown",p,!0)}});var n=$c(),i=D(n),o=D(i);Ye(o,{get name(){return t.section.icon},size:14,class:"text-[var(--xra-ui-dim)]"});var a=O(o,2),s=W(a,!0),l=O(i,2),c=D(l);so(c,{get section(){return t.section}}),Mi(n,f=>r=f,()=>r),pe(f=>{Rn(n,`left:${X.dockExpanded?248:62}px;`),U(s,f)},[()=>ne(t.section.title)]),$(e,n),Et()}var Mc=_e('<aside class="xra-panel"><header class="xra-panel-head"><strong>XR Animator</strong> <span class="xra-spacer"></span> <button><!></button> <button title="Close panel"><!></button></header> <div class="xra-panel-search"><input type="search" placeholder="Search settings…"/></div> <div class="xra-panel-body"></div></aside>'),Tc=_e('<button class="xra-panel-launcher"><!></button>'),Nc=_e("<!> <!> <!> <!> <!>",1);function Cc(e,t){St(t,!0),Sl();const r=Ie(()=>Tl(We));var n=Nc(),i=K(n);{var o=v=>{xc(v,{})};qe(i,v=>{X.ready&&v(o)})}var a=O(i,2);{var s=v=>{const x=Ie(()=>d(r).find(k=>k.id===X.popupSection));var w=Q(),h=K(w);{var S=k=>{Ac(k,{get section(){return d(x)}})};qe(h,k=>{d(x)&&k(S)})}$(v,w)};qe(a,v=>{X.ready&&X.popupSection&&v(s)})}var l=O(a,2);{var c=v=>{Ec(v,{})},f=Ie(()=>X.ready&&Xe("ui.mocap_view","off")!=="off");qe(l,v=>{d(f)&&v(c)})}var p=O(l,2);{var y=v=>{var P,te,ke;var x=Mc(),w=D(x),h=O(D(w),4);$e(h,"title",((ke=(te=(P=window.XRA)==null?void 0:P.i18n)==null?void 0:te.t)==null?void 0:ke.call(te,"Clean screen mode (Press Esc to restore)"))||"Clean screen (Esc)");var S=D(h);Ye(S,{name:"EyeOff",size:15});var k=O(h,2),A=D(k);Ye(A,{name:"X",size:15});var M=O(w,2),L=D(M),C=O(M,2);Xt(C,21,()=>d(r),ve=>ve.id,(ve,ge)=>{_c(ve,{get section(){return d(ge)}})}),pe(()=>sn(L,X.search)),Z("click",h,function(...ve){Dn==null||Dn.apply(this,ve)}),Z("click",k,()=>X.panelOpen=!1),Z("input",L,ve=>X.search=ve.currentTarget.value),$(v,x)},_=v=>{var x=Tc(),w=D(x);Ye(w,{name:"Settings",size:16}),Z("click",x,()=>{X.panelOpen=!0,io()}),$(v,x)};qe(p,v=>{X.ready&&X.panelOpen?v(y):X.ready&&v(_,1)})}var g=O(p,2);{var E=v=>{yc(v,{})};qe(g,v=>{X.ready&&X.startupOpen&&v(E)})}$(e,n),Et()}sr(["click","input"]),window.XRA_SVELTE_UI=!0;function uo(){let e=document.getElementById("XRA_SVELTE");e||(e=document.createElement("div"),e.id="XRA_SVELTE",document.body.appendChild(e)),qs(Cc,{target:e})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",uo):uo()})();

})();
