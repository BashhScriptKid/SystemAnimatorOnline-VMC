(function(){
var ru=Object.defineProperty;var Go=Ae=>{throw TypeError(Ae)};var nu=(Ae,he,Le)=>he in Ae?ru(Ae,he,{enumerable:!0,configurable:!0,writable:!0,value:Le}):Ae[he]=Le;var mt=(Ae,he,Le)=>nu(Ae,typeof he!="symbol"?he+"":he,Le),aa=(Ae,he,Le)=>he.has(Ae)||Go("Cannot "+Le);var f=(Ae,he,Le)=>(aa(Ae,he,"read from private field"),Le?Le.call(Ae):he.get(Ae)),X=(Ae,he,Le)=>he.has(Ae)?Go("Cannot add the same private member more than once"):he instanceof WeakSet?he.add(Ae):he.set(Ae,Le),j=(Ae,he,Le,xr)=>(aa(Ae,he,"write to private field"),xr?xr.call(Ae,Le):he.set(Ae,Le),Le),ee=(Ae,he,Le)=>(aa(Ae,he,"access private method"),Le);(function(){"use strict";var Ho,Qr,gr,Rr,Jr,en,tn,or,rn,dt,In,sr,zt,Yt,nn,Or,se,oa,sa,jn,la,qo,Yo,dn,iu,Wn,Uo,St,na,Et,Pr,et,vt,tt,pt,Kt,Ir,wr,an,Ln,zn,lr,pi,we,au,ou,ca,su,ua,Xn,yi,fa,da,Dt,Zt,ht,Lr,Dn,Bn,hi,jo;var he=Array.isArray,Le=Array.prototype.indexOf,xr=Array.prototype.includes,Gn=Array.from,va=Object.defineProperty,fr=Object.getOwnPropertyDescriptor,pa=Object.getOwnPropertyDescriptors,Ko=Object.prototype,Zo=Array.prototype,bi=Object.getPrototypeOf,ha=Object.isExtensible;function vn(e){return typeof e=="function"}const Qo=()=>{};function Jo(e){return e()}function xi(e){for(var t=0;t<e.length;t++)e[t]()}function _a(){var e,t,r=new Promise((n,i)=>{e=n,t=i});return{promise:r,resolve:e,reject:t}}function ma(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const je=2,Vr=4,pn=8,ki=1<<24,Nt=16,gt=32,rr=64,Si=128,Ei=256,Tt=512,ze=1024,Oe=2048,wt=4096,Qe=8192,Je=16384,Hr=32768,qn=1<<25,dr=65536,Yn=1<<17,es=1<<18,Ur=1<<19,ga=1<<20,Vt=1<<25,Kn=1<<21,jr=1<<22,vr=1<<23,Ht=Symbol("$state"),wa=Symbol("component"),ya=Symbol("legacy props"),ts=Symbol(""),Zn=Symbol("attributes"),Ai=Symbol("class"),$i=Symbol("style"),hn=Symbol("text"),_n=new class extends Error{constructor(){super(...arguments);mt(this,"name","StaleReactionError");mt(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},Qn=!!((Ho=globalThis.document)!=null&&Ho.contentType)&&globalThis.document.contentType.includes("xml"),rs=1,ns=2,ba=4,is=8,as=16,os=1,ss=2,xa=4,ls=8,cs=16,us=1,fs=2,Pe=Symbol("uninitialized"),ka="http://www.w3.org/1999/xhtml",ds="http://www.w3.org/2000/svg",vs="@attach";function ps(){console.warn("https://svelte.dev/e/derived_inert")}function hs(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function _s(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Sa(e){return e===this.v}function ms(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Ea(e){return!ms(e,this.v)}function gs(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function ws(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function ys(e,t,r){throw new Error("https://svelte.dev/e/each_key_duplicate")}function bs(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function xs(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ks(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Ss(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Es(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function As(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function $s(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Ms(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Ns(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Wr=!1,lu=!1;function Ts(){Wr=!0}let $e=null;function Xr(e){$e=e}function Ct(e,t=!1,r){$e={p:$e,i:!1,c:null,e:null,s:e,x:null,r:Z,l:Wr&&!t?{s:null,u:null,$:[]}:null}}function Rt(e){var t=$e,r=t.e;if(r!==null){t.e=null;for(var n of r)Ga(n)}return t.i=!0,$e=t.p,Mi(e)}function Mi(e={}){return va(e,wa,{value:!0}),e}function mn(){return!Wr||$e!==null&&$e.l===null}let Gr=[];function Cs(){var e=Gr;Gr=[],xi(e)}function Ut(e){if(Gr.length===0){var t=Gr;queueMicrotask(()=>{t===Gr&&Cs()})}Gr.push(e)}const Rs=-7169;function Ne(e,t){e.f=e.f&Rs|t}function Ni(e){(e.f&Tt)!==0||e.deps===null?Ne(e,ze):Ne(e,wt)}function Aa(e,t,r){(e.f&Oe)!==0?t.add(e):(e.f&wt)!==0&&r.add(e),Ne(e,ze)}function Os(e,t){if(t){const r=document.body;e.autofocus=!0,Ut(()=>{document.activeElement===r&&e.focus()})}}function gn(e){var t=K,r=Z;yt(null),bt(null);try{return e()}finally{yt(t),bt(r)}}function $a(e,t,r,n){const i=mn()?qr:Ti;var a=e.filter(p=>!p.settled),o=t.map(i);if(r.length===0&&a.length===0){n(o);return}var s=Z,l=Ps(),c=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(p=>p.promise)):null;function d(p){if((s.f&Je)===0){l();try{n([...o,...p])}catch(h){Wt(h,s)}Jn()}}var v=Ma();if(r.length===0){c.then(()=>d([])).finally(v);return}function g(){Promise.all(r.map(p=>Is(p))).then(d).catch(p=>Wt(p,s)).finally(v)}c?c.then(()=>{l(),g(),Jn()}):g()}function Ps(){var e=Z,t=K,r=$e,n=U;return function(a=!0){bt(e),yt(t),Xr(r),a&&(e.f&Je)===0&&(n==null||n.activate(),n==null||n.apply())}}function Jn(e=!0){bt(null),yt(null),Xr(null),e&&(U==null||U.deactivate())}function Ma(){var e=Z,t=e.b,r=U,n=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,r),r.increment(n,e),()=>{t==null||t.update_pending_count(-1,r),r.decrement(n,e)}}function qr(e){var t=je|Oe;return Z!==null&&(Z.f|=Ur),{ctx:$e,deps:null,effects:null,equals:Sa,f:t,fn:e,reactions:null,rv:0,v:Pe,wv:0,parent:Z,ac:null}}const wn=Symbol("obsolete");function Is(e,t,r){let n=Z;n===null&&ws();var i=void 0,a=pr(Pe),o=!K,s=new Set;return qs(()=>{var p,h;var l=Z,c=_a();i=c.promise;try{Promise.resolve(e()).then(c.resolve,y=>{y!==_n&&c.reject(y)}).finally(Jn)}catch(y){c.reject(y),Jn()}var d=U;if(o){if((l.f&Hr)!==0)var v=Ma();if((p=n.b)!=null&&p.is_rendered())(h=d.async_deriveds.get(l))==null||h.reject(wn);else for(const y of s.values())y.reject(wn);s.add(c),d.async_deriveds.set(l,c)}const g=(y,_=void 0)=>{v==null||v(),s.delete(c),_!==wn&&(d.activate(),_?(a.f|=vr,Kr(a,_)):((a.f&vr)!==0&&(a.f^=vr),Kr(a,y)),d.deactivate())};c.promise.then(g,y=>g(null,y||"unknown"))}),ri(()=>{for(const l of s)l.reject(wn)}),new Promise(l=>{function c(d){function v(){d===i?l(a):c(i)}d.then(v,v)}c(i)})}function We(e){const t=qr(e);return to(t),t}function Ti(e){const t=qr(e);return t.equals=Ea,t}function Ls(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)He(t[r])}}function Ci(e){var t,r=Z,n=e.parent;if(!ir&&n!==null&&e.v!==Pe&&(n.f&(Je|Qe))!==0)return ps(),e.v;bt(n);try{Ls(e),t=oo(e)}finally{bt(r)}return t}function Na(e){var t=Ci(e);if(!e.equals(t)&&(e.wv=io(),(!(U!=null&&U.is_fork)||e.deps===null)&&(U!==null?(U.capture(e,t,!0),yn==null||yn.capture(e,t,!0)):e.v=t,e.deps===null))){Ne(e,ze);return}ir||(Ve!==null?(Bi()||U!=null&&U.is_fork)&&Ve.set(e,t):Ni(e))}function zs(e){var t;if(e.effects!==null)for(const r of e.effects)(r.teardown||r.ac)&&((t=r.teardown)==null||t.call(r),r.ac!==null&&gn(()=>{r.ac.abort(_n),r.ac=null}),r.fn!==null&&(r.teardown=Qo),An(r,0),Vi(r))}function Ta(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&Zr(t)}let Ri=null,Yr=null,U=null,yn=null,Ve=null,Oi=null,Pi=!1,bn=null,ei=null;var Ca=0,cu=new Set;let Ds=1;const vi=class vi{constructor(){X(this,se);mt(this,"id",Ds++);X(this,Qr,!1);mt(this,"linked",!0);X(this,gr,null);X(this,Rr,null);mt(this,"async_deriveds",new Map);mt(this,"current",new Map);mt(this,"previous",new Map);X(this,Jr,new Set);X(this,en,new Set);X(this,tn,0);X(this,or,new Map);X(this,rn,null);X(this,dt,[]);X(this,In,[]);X(this,sr,new Set);X(this,zt,new Set);X(this,Yt,new Map);X(this,nn,new Set);mt(this,"is_fork",!1);X(this,Or,!1);Yr===null?Ri=Yr=this:(j(Yr,Rr,this),j(this,gr,Yr)),Yr=this}skip_effect(t){f(this,Yt).has(t)||f(this,Yt).set(t,{d:[],m:[]}),f(this,nn).delete(t)}unskip_effect(t,r=n=>this.schedule(n)){var n=f(this,Yt).get(t);if(n){f(this,Yt).delete(t);for(var i of n.d)Ne(i,Oe),r(i);for(i of n.m)Ne(i,wt),r(i)}f(this,nn).add(t)}capture(t,r,n=!1){t.v!==Pe&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&vr)===0&&(this.current.set(t,[r,n]),Ve==null||Ve.set(t,r)),this.is_fork||(t.v=r)}activate(){U=this}deactivate(){U=null,Ve=null}flush(){try{Pi=!0,U=this,ee(this,se,jn).call(this)}finally{Ca=0,Oi=null,bn=null,ei=null,Pi=!1,U=null,Ve=null,jt.clear()}}discard(){var t;for(const r of f(this,en))r(this);f(this,en).clear();for(const r of this.async_deriveds.values())r.reject(wn);ee(this,se,Wn).call(this),(t=f(this,rn))==null||t.resolve()}register_created_effect(t){f(this,In).push(t)}increment(t,r){if(j(this,tn,f(this,tn)+1),t){let n=f(this,or).get(r)??0;f(this,or).set(r,n+1)}}decrement(t,r){if(j(this,tn,f(this,tn)-1),t){let n=f(this,or).get(r)??0;n===1?f(this,or).delete(r):f(this,or).set(r,n-1)}f(this,Or)||(j(this,Or,!0),Ut(()=>{j(this,Or,!1),this.linked&&this.flush()}))}transfer_effects(t,r){for(const n of t)f(this,sr).add(n);for(const n of r)f(this,zt).add(n);t.clear(),r.clear()}oncommit(t){f(this,Jr).add(t)}ondiscard(t){f(this,en).add(t)}settled(){return(f(this,rn)??j(this,rn,_a())).promise}static ensure(){if(U===null){const t=U=new vi;Pi||Ut(()=>{f(t,Qr)||t.flush()})}return U}apply(){{Ve=null;return}}schedule(t){var r;if(Oi=t,(r=t.b)!=null&&r.is_pending&&(t.f&(Vr|pn|ki))!==0&&(t.f&Hr)===0){t.b.defer_effect(t);return}f(this,dt).push(t)}};Qr=new WeakMap,gr=new WeakMap,Rr=new WeakMap,Jr=new WeakMap,en=new WeakMap,tn=new WeakMap,or=new WeakMap,rn=new WeakMap,dt=new WeakMap,In=new WeakMap,sr=new WeakMap,zt=new WeakMap,Yt=new WeakMap,nn=new WeakMap,Or=new WeakMap,se=new WeakSet,oa=function(){if(this.is_fork)return!0;for(const n of f(this,or).keys()){for(var t=n,r=!1;t.parent!==null;){if(f(this,Yt).has(t)){r=!0;break}t=t.parent}if(!r)return!0}return!1},sa=function(){var t=[];for(const a of f(this,dt))if(!((a.f&Je)!==0||(a.f&(Oe|wt))===0)){for(var r=a,n=!1;r.parent!==null;){r=r.parent;var i=r.f;if((i&(rr|gt))!==0){if((i&ze)===0){n=!0;break}r.f^=ze}}n||t.push(r)}return j(this,dt,[]),t},jn=function(){var s,l,c,d;j(this,Qr,!0);for(const v of f(this,sr))f(this,zt).delete(v),Ne(v,Oe),this.schedule(v);for(const v of f(this,zt))Ne(v,wt),this.schedule(v);this.apply();for(var t=bn=[],r=[],n=ei=[];f(this,dt).length>0;){Ca++>1e3&&(ee(this,se,Wn).call(this),Bs());for(const v of ee(this,se,sa).call(this))try{ee(this,se,la).call(this,v,t,r)}catch(g){throw Ia(v),ee(this,se,oa).call(this)||this.discard(),g}}if(U=null,n.length>0){var i=vi.ensure();for(const v of n)i.schedule(v)}if(bn=null,ei=null,ee(this,se,oa).call(this)){ee(this,se,dn).call(this,r),ee(this,se,dn).call(this,t);for(const[v,g]of f(this,Yt))Pa(v,g);n.length>0&&ee(s=U,se,jn).call(s);return}const a=ee(this,se,qo).call(this);if(a){ee(this,se,dn).call(this,r),ee(this,se,dn).call(this,t),ee(l=a,se,Yo).call(l,this);return}f(this,sr).clear(),f(this,zt).clear();for(const v of f(this,Jr))v(this);f(this,Jr).clear(),yn=this,Ra(r),Ra(t),yn=null,(c=f(this,rn))==null||c.resolve();var o=U;if(f(this,tn)===0&&(f(this,dt).length===0||o!==null)&&ee(this,se,Wn).call(this),f(this,dt).length>0)if(o!==null){for(const v of f(this,dt))f(o,dt).push(v);j(this,dt,[])}else o=this;o!==null&&(jt.clear(),ee(d=o,se,jn).call(d))},la=function(t,r,n){t.f^=ze;for(var i=t.first;i!==null;){var a=i.f,o=(a&(gt|rr))!==0,s=o&&(a&ze)!==0,l=s||(a&Qe)!==0||f(this,Yt).has(i);if(!l&&i.fn!==null){o?i.f^=ze:(a&Vr)!==0?r.push(i):En(i)&&((a&Nt)!==0&&f(this,zt).add(i),Zr(i));var c=i.first;if(c!==null){i=c;continue}}for(;i!==null;){var d=i.next;if(d!==null){i=d;break}i=i.parent}}},qo=function(){for(var t=f(this,gr);t!==null;){if(!t.is_fork){for(const[r,[,n]]of this.current)if(t.current.has(r)&&!n)return t}t=f(t,gr)}return null},Yo=function(t){var n;for(const[i,a]of t.current)!this.previous.has(i)&&t.previous.has(i)&&this.previous.set(i,t.previous.get(i)),this.current.set(i,a);for(const[i,a]of t.async_deriveds){const o=this.async_deriveds.get(i);o&&a.promise.then(o.resolve).catch(o.reject)}t.async_deriveds.clear(),this.transfer_effects(f(t,sr),f(t,zt));const r=i=>{var a=i.reactions;if(a!==null&&!((i.f&je)!==0&&(i.f&(Oe|wt))===0))for(const l of a){var o=l.f;if((o&je)!==0)r(l);else{var s=l;o&(jr|Nt)&&!this.async_deriveds.has(s)&&(f(this,zt).delete(s),Ne(s,Oe),this.schedule(s))}}};for(const i of this.current.keys())r(i);this.oncommit(()=>t.discard()),ee(n=t,se,Wn).call(n),U=this,ee(this,se,jn).call(this)},dn=function(t){for(var r=0;r<t.length;r+=1)Aa(t[r],f(this,sr),f(this,zt))},iu=function(){var v,g;for(let p=Ri;p!==null;p=f(p,Rr)){var t=p.id<this.id,r=[];for(const[h,[y,_]]of this.current){if(p.current.has(h)){var n=p.current.get(h)[0];if(t&&y!==n)p.current.set(h,[y,_]);else continue}r.push(h)}if(t)for(const[h,y]of this.async_deriveds){const _=p.async_deriveds.get(h);_&&y.promise.then(_.resolve).catch(_.reject)}var i=[...p.current.keys()].filter(h=>!p.current.get(h)[1]);if(!(!f(p,Qr)||i.length===0)){var a=i.filter(h=>!this.current.has(h));if(a.length===0)t&&p.discard();else if(r.length>0){if(t)for(const h of f(this,nn))p.unskip_effect(h,y=>{var _;(y.f&(Nt|jr))!==0?p.schedule(y):ee(_=p,se,dn).call(_,[y])});p.activate();var o=new Set,s=new Map;for(var l of r)Oa(l,a,o,s);s=new Map;var c=[...p.current].filter(([h,y])=>{const _=this.current.get(h);return _?_[0]!==y[0]||_[1]!==y[1]:!0}).map(([h])=>h);if(c.length>0)for(const h of f(this,In))(h.f&(Je|Qe|Yn))===0&&Ii(h,c,s)&&((h.f&(jr|Nt))!==0?(Ne(h,Oe),p.schedule(h)):f(p,sr).add(h));if(f(p,dt).length>0&&!f(p,Or)){p.apply();for(var d of ee(v=p,se,sa).call(v))ee(g=p,se,la).call(g,d,[],[])}p.deactivate()}}}},Wn=function(){if(this.linked){var t=f(this,gr),r=f(this,Rr);t===null?Ri=r:j(t,Rr,r),r===null?Yr=t:j(r,gr,t),this.linked=!1}};let kr=vi;function Bs(){try{Ss()}catch(e){Wt(e,Oi)}}let Ot=null;function Ra(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(Je|Qe))===0&&En(n)&&(Ot=new Set,Zr(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&Za(n),(Ot==null?void 0:Ot.size)>0)){jt.clear();for(const i of Ot){if((i.f&(Je|Qe))!==0)continue;const a=[i];let o=i.parent;for(;o!==null;)Ot.has(o)&&(Ot.delete(o),a.push(o)),o=o.parent;for(let s=a.length-1;s>=0;s--){const l=a[s];(l.f&(Je|Qe))===0&&Zr(l)}}Ot.clear()}}Ot=null}}function Oa(e,t,r,n){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(const i of e.reactions){const a=i.f;(a&je)!==0?Oa(i,t,r,n):(a&(jr|Nt))!==0&&(a&Oe)===0&&Ii(i,t,n)&&(Ne(i,Oe),Li(i))}}function Ii(e,t,r){const n=r.get(e);if(n!==void 0)return n;if(e.deps!==null)for(const i of e.deps){if(xr.call(t,i))return!0;if((i.f&je)!==0&&Ii(i,t,r))return r.set(i,!0),!0}return r.set(e,!1),!1}function Li(e){U.schedule(e)}function Pa(e,t){if(!((e.f&gt)!==0&&(e.f&ze)!==0)){(e.f&Oe)!==0?t.d.push(e):(e.f&wt)!==0&&t.m.push(e),Ne(e,ze);for(var r=e.first;r!==null;)Pa(r,t),r=r.next}}function Ia(e){Ne(e,ze);for(var t=e.first;t!==null;)Ia(t),t=t.next}let ti=new Set;const jt=new Map;let La=!1;function pr(e,t){var r={f:0,v:e,reactions:null,equals:Sa,rv:0,wv:0};return r}function V(e,t){const r=pr(e);return to(r),r}function Fs(e,t=!1,r=!0){var i;const n=pr(e);return t||(n.equals=Ea),Wr&&r&&$e!==null&&$e.l!==null&&((i=$e.l).s??(i.s=[])).push(n),n}function N(e,t,r=!1){K!==null&&(!It||(K.f&Yn)!==0)&&mn()&&(K.f&(je|Nt|jr|Yn))!==0&&(Xt===null||!Xt.has(e))&&Ms();let n=r?Xe(t):t;return Kr(e,n,ei)}var Sr=null,zi=0;function Kr(e,t,r=null){if(!e.equals(t)){ir?jt.set(e,t):jt.has(e)||jt.set(e,e.v);var n=kr.ensure();if(n.capture(e,t),(e.f&je)!==0){const i=e;(e.f&Oe)!==0&&Ci(i),Ve===null&&Ni(i)}e.wv=io(),Sr=null,zi=0,Da(e,Oe,r),Sr=null,mn()&&Z!==null&&(Z.f&ze)!==0&&(Z.f&(gt|rr))===0&&(xt===null?Zs([e]):xt.push(e)),!n.is_fork&&ti.size>0&&!La&&Vs()}return t}function Vs(){La=!1;for(const e of ti){(e.f&ze)!==0&&Ne(e,wt);let t;try{t=En(e)}catch{t=!0}t&&Zr(e)}ti.clear()}function za(e,t=1){var r=u(e),n=t===1?r++:r--;return N(e,r),n}function xn(e){N(e,e.v+1)}function Da(e,t,r){var n=e.reactions;if(n!==null){var i=mn(),a=n.length;if(zi+=a,zi>1e5&&Sr===null&&(Sr=new Set),Sr!==null){if(Sr.has(e))return;Sr.add(e)}for(var o=0;o<a;o++){var s=n[o],l=s.f;if(!(!i&&s===Z)){var c=(l&Oe)===0;if(c&&Ne(s,t),(l&Yn)!==0)ti.add(s);else if((l&je)!==0){var d=s;Ve==null||Ve.delete(d),Da(d,wt,r)}else if(c){var v=s;(l&Nt)!==0&&Ot!==null&&Ot.add(v),r!==null?r.push(v):Li(v)}}}}}function Xe(e){if(typeof e!="object"||e===null||Ht in e||wa in e)return e;const t=bi(e);if(t!==Ko&&t!==Zo)return e;var r=new Map,n=he(e),i=V(0),a=Nr,o=s=>{if(Nr===a)return s();var l=K,c=Nr;yt(null),no(a);var d=s();return yt(l),no(c),d};return n&&r.set("length",V(e.length)),new Proxy(e,{defineProperty(s,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&As();var d=r.get(l);return d===void 0?o(()=>{var v=V(c.value);return r.set(l,v),v}):N(d,c.value,!0),!0},deleteProperty(s,l){var c=r.get(l);if(c===void 0){if(l in s){const d=o(()=>V(Pe));r.set(l,d),xn(i)}}else N(c,Pe),xn(i);return!0},get(s,l,c){var p;if(l===Ht)return e;var d=r.get(l),v=l in s;if(d===void 0&&(!v||(p=fr(s,l))!=null&&p.writable)&&(d=o(()=>{var h=Xe(v?s[l]:Pe),y=V(h);return y}),r.set(l,d)),d!==void 0){var g=u(d);return g===Pe?void 0:g}return Reflect.get(s,l,c)},getOwnPropertyDescriptor(s,l){var g;(g=this.has)==null||g.call(this,s,l);var c=Reflect.getOwnPropertyDescriptor(s,l),d=r.get(l);if(d!==void 0){var v=u(d);if(v===Pe)return;if(c&&"value"in c)c.value=v;else return{enumerable:!0,configurable:!0,value:v,writable:!0}}return c},has(s,l){var g;if(l===Ht)return!0;var c=r.get(l),d=c!==void 0&&c.v!==Pe||Reflect.has(s,l);if(c!==void 0||Z!==null&&(!d||(g=fr(s,l))!=null&&g.writable)){c===void 0&&(c=o(()=>{var p=d?Xe(s[l]):Pe,h=V(p);return h}),r.set(l,c));var v=u(c);if(v===Pe)return!1}return d},set(s,l,c,d){var $;var v=r.get(l),g=l in s;if(n&&l==="length")for(var p=c;p<v.v;p+=1){var h=r.get(p+"");h!==void 0?N(h,Pe):p in s&&(h=o(()=>V(Pe)),r.set(p+"",h))}if(v===void 0)(!g||($=fr(s,l))!=null&&$.writable)&&(v=o(()=>V(void 0)),N(v,Xe(c)),r.set(l,v));else{g=v.v!==Pe;var y=o(()=>Xe(c));N(v,y)}var _=Reflect.getOwnPropertyDescriptor(s,l);if(_!=null&&_.set&&_.set.call(d,c),!g){if(n&&typeof l=="string"){var x=r.get("length"),C=Number(l);Number.isInteger(C)&&C>=x.v&&N(x,C+1)}xn(i)}return!0},ownKeys(s){u(i);var l=Reflect.ownKeys(s).filter(v=>{var g=r.get(v);return g===void 0||g.v!==Pe});for(var[c,d]of r)d.v!==Pe&&!(c in s)&&l.push(c);return l},setPrototypeOf(){$s()}})}function Ba(e){try{if(e!==null&&typeof e=="object"&&Ht in e)return e[Ht]}catch{}return e}function Fa(e,t){return Object.is(Ba(e),Ba(t))}var Va,Ha,Ua,ja;function Hs(){if(Va===void 0){Va=window,Ha=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Ua=fr(t,"firstChild").get,ja=fr(t,"nextSibling").get,ha(e)&&(e[Ai]=void 0,e[Zn]=null,e[$i]=void 0,e.__e=void 0),ha(r)&&(r[hn]=void 0)}}function nr(e=""){return document.createTextNode(e)}function Er(e){return Ua.call(e)}function kn(e){return ja.call(e)}function P(e,t){return Er(e)}function ae(e,t=!1){{var r=Er(e);return r instanceof Comment&&r.data===""?kn(r):r}}function H(e,t=!1){return Er(e)}function T(e,t=1,r=!1){let n=e;for(;t--;)n=kn(n);return n}function Us(e){e.textContent=""}function Wa(){return!1}function Di(e,t,r){return t==null||t===ka?r?document.createElement(e,{is:r}):document.createElement(e):r?document.createElementNS(t,e,{is:r}):document.createElementNS(t,e)}function js(e){var t=Z;if(t===null)return K.f|=vr,e;if((t.f&Hr)===0&&(t.f&Vr)===0)throw e;Wt(e,t)}function Wt(e,t){if(!(t!==null&&(t.f&Je)!==0)){for(;t!==null;){if((t.f&Si)!==0&&(t.f&(Je|qn))===0){if((t.f&Hr)===0)throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw e}}function Xa(e){Z===null&&(K===null&&ks(),xs()),ir&&bs()}function Ws(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Pt(e,t){var r=Z;r!==null&&(r.f&Qe)!==0&&(e|=Qe);var n={ctx:$e,deps:null,nodes:null,f:e|Oe|Tt,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};U==null||U.register_created_effect(n);var i=n;if((e&Vr)!==0)bn!==null?bn.push(n):kr.ensure().schedule(n);else if(t!==null){try{Zr(n)}catch(o){throw He(n),o}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&Ur)===0&&(i=i.first,(e&Nt)!==0&&(e&dr)!==0&&i!==null&&(i.f|=dr))}if(i!==null&&(i.parent=r,r!==null&&Ws(i,r),K!==null&&(K.f&je)!==0&&(e&rr)===0)){var a=K;(a.effects??(a.effects=[])).push(i)}return n}function Bi(){return K!==null&&!It}function ri(e){const t=Pt(pn,null);return Ne(t,ze),t.teardown=e,t}function Ar(e){Xa();var t=Z.f,r=!K&&(t&gt)!==0&&$e!==null&&!$e.i;if(r){var n=$e;(n.e??(n.e=[])).push(e)}else return Ga(e)}function Ga(e){return Pt(Vr|ga,e)}function Xs(e){return Xa(),Pt(pn|ga,e)}function Gs(e){kr.ensure();const t=Pt(rr|Ur,e);return(r={})=>new Promise(n=>{r.outro?$r(t,()=>{He(t),n(void 0)}):(He(t),n(void 0))})}function Fi(e){return Pt(Vr,e)}function qs(e){return Pt(jr|Ur,e)}function qa(e,t=0){return Pt(pn|t,e)}function de(e,t=[],r=[],n=[]){$a(n,t,r,i=>{Pt(pn,()=>{e(...i.map(u))})})}function Sn(e,t=0){var r=Pt(Nt|t,e);return r}function Ya(e,t=0){var r=Pt(ki|t,e);return r}function it(e){return Pt(gt|Ur,e)}function Ka(e){var t=e.teardown;if(t!==null){const r=ir,n=K;eo(!0),yt(null);try{t.call(null)}catch(i){Wt(i,e.parent)}finally{eo(r),yt(n)}}}function Vi(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const i=r.ac;i!==null&&gn(()=>{i.abort(_n)});var n=r.next;(r.f&rr)!==0?r.parent=null:He(r,t),r=n}}function Ys(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&gt)===0&&He(t),t=r}}function He(e,t=!0){var r=!1;(t||(e.f&es)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Ks(e.nodes.start,e.nodes.end),r=!0),e.f|=qn,Vi(e,t&&!r),An(e,0);var n=e.nodes&&e.nodes.t;if(n!==null)for(const a of n)a.stop();Ka(e),e.f^=qn,e.f|=Je;var i=e.parent;i!==null&&i.first!==null&&Za(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Ks(e,t){for(;e!==null;){var r=e===t?null:kn(e);e.remove(),e=r}}function Za(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function $r(e,t,r=!0){var n=[];e.f|=Ei,Qa(e,n,!0);var i=()=>{r&&He(e),t&&t()},a=n.length;if(a>0){var o=()=>--a||i();for(var s of n)s.out(o)}else i()}function Qa(e,t,r){if((e.f&Qe)===0){e.f^=Qe;var n=e.nodes&&e.nodes.t;if(n!==null)for(const s of n)(s.is_global||r)&&t.push(s);for(var i=e.first;i!==null;){var a=i.next;if((i.f&rr)===0){var o=(i.f&dr)!==0||(i.f&gt)!==0&&(e.f&Nt)!==0;Qa(i,t,o?r:!1)}i=a}}}function ni(e){e.f&=~Ei,Ja(e,!0)}function Ja(e,t){if((e.f&Ei)===0&&(e.f&Qe)!==0){e.f^=Qe,(e.f&ze)===0&&(Ne(e,Oe),kr.ensure().schedule(e));for(var r=e.first;r!==null;){var n=r.next,i=(r.f&dr)!==0||(r.f&gt)!==0;Ja(r,i?t:!1),r=n}var a=e.nodes&&e.nodes.t;if(a!==null)for(const o of a)(o.is_global||t)&&o.in()}}function Hi(e,t){if(e.nodes)for(var r=e.nodes.start,n=e.nodes.end;r!==null;){var i=r===n?null:kn(r);t.append(r),r=i}}let ii=!1,ir=!1;function eo(e){ir=e}let K=null,It=!1;function yt(e){K=e}let Z=null;function bt(e){Z=e}let Xt=null;function to(e){K!==null&&((K.f&Kn)!==0||(K.f&je)!==0)&&(Xt??(Xt=new Set)).add(e)}let at=null,ut=0,xt=null;function Zs(e){xt=e}let ro=1,Mr=0,Nr=Mr;function no(e){Nr=e}function io(){return++ro}function En(e){var t=e.f;if((t&Oe)!==0)return!0;if((t&wt)!==0){for(var r=e.deps,n=r.length,i=0;i<n;i++){var a=r[i];if(En(a)&&Na(a),a.wv>e.wv)return!0}(t&Tt)!==0&&Ve===null&&Ne(e,ze)}return!1}function ao(e,t,r=!0){var n=e.reactions;if(n!==null&&!(Xt!==null&&Xt.has(e)))for(var i=0;i<n.length;i++){var a=n[i];(a.f&je)!==0?ao(a,t,!1):t===a&&(r?Ne(a,Oe):(a.f&ze)!==0&&Ne(a,wt),Li(a))}}function oo(e){var t=at,r=ut,n=xt,i=K,a=Xt,o=$e,s=It,l=Nr,c=e.f;at=null,ut=0,xt=null,K=(c&(gt|rr))===0?e:null,Xt=null,Xr(e.ctx),It=!1,Nr=++Mr,e.ac!==null&&(gn(()=>{e.ac.abort(_n)}),e.ac=null);try{e.f|=Kn;var d=e.fn,v=d();e.f|=Hr;var g=so(e);if(mn()&&xt!==null&&!It&&g!==null&&(e.f&(je|wt|Oe))===0)for(var p=0;p<xt.length;p++)ao(xt[p],e);if(i!==null&&i!==e){if(Mr++,i.deps!==null)for(let h=0;h<r;h+=1)i.deps[h].rv=Mr;if(t!==null)for(const h of t)h.rv=Mr;xt!==null&&(n===null?n=xt:n.push(...xt))}return(e.f&vr)!==0&&(e.f^=vr),v}catch(h){return so(e),js(h)}finally{e.f^=Kn,at=t,ut=r,xt=n,K=i,Xt=a,Xr(o),It=s,Nr=l}}function so(e){var i;var t=e.deps,r=U==null?void 0:U.is_fork;if(at!==null){var n;if(r||An(e,ut),t!==null&&ut>0)for(t.length=ut+at.length,n=0;n<at.length;n++)t[ut+n]=at[n];else e.deps=t=at;if(Bi()&&(e.f&Tt)!==0)for(n=ut;n<t.length;n++)((i=t[n]).reactions??(i.reactions=[])).push(e)}else!r&&t!==null&&ut<t.length&&(An(e,ut),t.length=ut);return t}function Qs(e,t){let r=t.reactions;if(r!==null){var n=Le.call(r,e);if(n!==-1){var i=r.length-1;i===0?r=t.reactions=null:(r[n]=r[i],r.pop())}}if(r===null&&(t.f&je)!==0&&(at===null||!xr.call(at,t))){var a=t;(a.f&Tt)!==0&&(a.f^=Tt),a.v!==Pe&&Ni(a),a.ac!==null&&gn(()=>{a.ac.abort(_n),a.ac=null,Ne(a,Oe)}),zs(a),An(a,0)}}function An(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Qs(e,r[n])}function Zr(e){var t=e.f;if((t&Je)===0){Ne(e,ze);var r=Z,n=ii;Z=e,ii=(t&(gt|rr))===0;try{(t&(Nt|ki))!==0?Ys(e):Vi(e),Ka(e);var i=oo(e);e.teardown=typeof i=="function"?i:null,e.wv=ro;var a}finally{ii=n,Z=r}}}function u(e){var t=e.f,r=(t&je)!==0;if(K!==null&&!It){var n=Z!==null&&(Z.f&Je)!==0;if(!n&&(Xt===null||!Xt.has(e))){var i=K.deps;if((K.f&Kn)!==0)e.rv<Mr&&(e.rv=Mr,at===null&&i!==null&&i[ut]===e?ut++:at===null?at=[e]:at.push(e));else{K.deps??(K.deps=[]),xr.call(K.deps,e)||K.deps.push(e);var a=e.reactions;a===null?e.reactions=[K]:xr.call(a,K)||a.push(K)}}}if(ir&&jt.has(e))return jt.get(e);if(r){var o=e;if(ir){var s=o.v;return((o.f&ze)===0&&o.reactions!==null||co(o))&&(s=Ci(o)),jt.set(o,s),s}var l=(o.f&Tt)===0&&!It&&K!==null&&(ii||(K.f&Tt)!==0),c=(o.f&Hr)===0;En(o)&&(l&&(o.f|=Tt),Na(o)),l&&!c&&(Ta(o),lo(o))}if(Ve!=null&&Ve.has(e))return Ve.get(e);if((e.f&vr)!==0)throw e.v;return e.v}function lo(e){if(e.f|=Tt,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&je)!==0&&(t.f&Tt)===0&&(Ta(t),lo(t))}function co(e){if(e.v===Pe)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(jt.has(t)||(t.f&je)!==0&&co(t))return!0;return!1}function hr(e){var t=It;try{return It=!0,e()}finally{It=t}}function Tr(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Ht in e)Ui(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&Ht in r&&Ui(r)}}}function Ui(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{Ui(e[n],t)}catch{}const r=bi(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=pa(r);for(let i in n){const a=n[i].get;if(a)try{a.call(e)}catch{}}}}}function Js(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const el=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function tl(e){return el.includes(e)}const rl={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function nl(e){return e=e.toLowerCase(),rl[e]??e}const il=["touchstart","touchmove"];function al(e){return il.includes(e)}const Cr=Symbol("events"),uo=new Set,ji=new Set;function fo(e,t,r,n={}){function i(a){if(n.capture||Gi.call(t,a),!a.cancelBubble)return gn(()=>r==null?void 0:r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?(i.__removed=!1,Ut(()=>{i.__removed||t.addEventListener(e,i,n)})):t.addEventListener(e,i,n),i}function ai(e,t,r,n,i){var a={capture:n,passive:i},o=fo(e,t,r,a);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&ri(()=>{o.__removed=!0,t.removeEventListener(e,o,a)})}function Q(e,t,r){(t[Cr]??(t[Cr]={}))[e]=r}function _r(e){for(var t=0;t<e.length;t++)uo.add(e[t]);for(var r of ji)r(e)}let Wi=null,Xi=!1;function Gi(e){var y,_;var t=this,r=t.ownerDocument,n=e.type,i=((y=e.composedPath)==null?void 0:y.call(e))||[],a=i[0]||e.target;Wi=e,Xi||(Xi=!0,setTimeout(()=>{Xi=!1,Wi=null}));var o=0,s=Wi===e&&e[Cr];if(s){var l=i.indexOf(s);if(l!==-1&&(t===document||t===window)){e[Cr]=t;return}var c=i.indexOf(t);if(c===-1)return;l<=c&&(o=l)}if(a=i[o]||e.target,a!==t){va(e,"currentTarget",{configurable:!0,get(){return a||r}});var d=K,v=Z;yt(null),bt(null);try{for(var g,p=[];a!==null&&a!==t;){try{var h=(_=a[Cr])==null?void 0:_[n];h!=null&&(!a.disabled||e.target===a)&&h.call(a,e)}catch(x){g?p.push(x):g=x}if(e.cancelBubble)break;o++,a=o<i.length?i[o]:null}if(g){for(let x of p)queueMicrotask(()=>{throw x});throw g}}finally{e[Cr]=t,delete e.currentTarget,yt(d),bt(v)}}}const qi=((Uo=globalThis==null?void 0:globalThis.window)==null?void 0:Uo.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function ol(e){return(qi==null?void 0:qi.createHTML(e))??e}function vo(e){var t=Di("template");return t.innerHTML=ol(e.replaceAll("<!>","<!---->")),t.content}function $n(e,t){var r=Z;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function _e(e,t){var r=(t&us)!==0,n=(t&fs)!==0,i,a=!e.startsWith("<!>");return()=>{i===void 0&&(i=vo(a?e:"<!>"+e),r||(i=Er(i)));var o=n||Ha?document.importNode(i,!0):i.cloneNode(!0);if(r){var s=Er(o),l=o.lastChild;$n(s,l)}else $n(o,o);return o}}function sl(e,t,r="svg"){var n=!e.startsWith("<!>"),i=`<${r}>${n?e:"<!>"+e}</${r}>`,a;return()=>{if(!a){var o=vo(i),s=Er(o);a=Er(s)}var l=a.cloneNode(!0);return $n(l,l),l}}function ll(e,t){return sl(e,t,"svg")}function ue(){var e=document.createDocumentFragment(),t=document.createComment(""),r=nr();return e.append(t,r),$n(t,r),e}function R(e,t){e!==null&&e.before(t)}function cl(e){let t=0,r=pr(0),n;return()=>{Bi()&&(u(r),qa(()=>(t===0&&(n=hr(()=>e(()=>xn(r)))),t+=1,()=>{Ut(()=>{t-=1,t===0&&(n==null||n(),n=void 0,xn(r))})})))}}var ul=dr|Ur;function fl(e,t,r,n){new dl(e,t,r,n)}class dl{constructor(t,r,n,i){X(this,we);mt(this,"parent");mt(this,"is_pending",!1);mt(this,"transform_error");X(this,St);X(this,na,null);X(this,Et);X(this,Pr);X(this,et);X(this,vt,null);X(this,tt,null);X(this,pt,null);X(this,Kt,null);X(this,Ir,0);X(this,wr,0);X(this,an,!1);X(this,Ln,new Set);X(this,zn,new Set);X(this,lr,null);X(this,pi,cl(()=>(j(this,lr,pr(f(this,Ir))),()=>{j(this,lr,null)})));var a;j(this,St,t),j(this,Et,r),j(this,Pr,o=>{var s=Z;s.b=this,s.f|=Si,n(o)}),this.parent=Z.b,this.transform_error=i??((a=this.parent)==null?void 0:a.transform_error)??(o=>o),j(this,et,Sn(()=>{ee(this,we,ua).call(this)},ul))}defer_effect(t){Aa(t,f(this,Ln),f(this,zn))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!f(this,Et).pending}update_pending_count(t,r){ee(this,we,fa).call(this,t,r),j(this,Ir,f(this,Ir)+t),!(!f(this,lr)||f(this,an))&&(j(this,an,!0),Ut(()=>{j(this,an,!1),f(this,lr)&&Kr(f(this,lr),f(this,Ir))}))}get_effect_pending(){return f(this,pi).call(this),u(f(this,lr))}error(t){if(!f(this,Et).onerror&&!f(this,Et).failed)throw t;U!=null&&U.is_fork?(f(this,vt)&&U.skip_effect(f(this,vt)),f(this,tt)&&U.skip_effect(f(this,tt)),f(this,pt)&&U.skip_effect(f(this,pt)),U.oncommit(()=>{ee(this,we,da).call(this,t)})):ee(this,we,da).call(this,t)}}St=new WeakMap,na=new WeakMap,Et=new WeakMap,Pr=new WeakMap,et=new WeakMap,vt=new WeakMap,tt=new WeakMap,pt=new WeakMap,Kt=new WeakMap,Ir=new WeakMap,wr=new WeakMap,an=new WeakMap,Ln=new WeakMap,zn=new WeakMap,lr=new WeakMap,pi=new WeakMap,we=new WeakSet,au=function(){try{j(this,vt,it(()=>f(this,Pr).call(this,f(this,St))))}catch(t){this.error(t)}},ou=function(t){const r=f(this,Et).failed,{reset:n,invoke_onerror:i}=ee(this,we,ca).call(this,t);Ut(i),r&&j(this,pt,it(()=>{r(f(this,St),()=>t,()=>n)}))},ca=function(t){var r=!1,n=!1;const i=()=>{if(r){_s();return}r=!0,n&&Ns(),f(this,pt)!==null&&$r(f(this,pt),()=>{j(this,pt,null)}),ee(this,we,yi).call(this,()=>{ee(this,we,ua).call(this)})};return{reset:i,invoke_onerror:()=>{var o,s;try{n=!0,(s=(o=f(this,Et)).onerror)==null||s.call(o,t,i),n=!1}catch(l){Wt(l,f(this,et)&&f(this,et).parent)}}}},su=function(){const t=f(this,Et).pending;t&&(this.is_pending=!0,j(this,tt,it(()=>t(f(this,St)))),Ut(()=>{var r=j(this,Kt,document.createDocumentFragment()),n=nr(),i=!1;if(r.append(n),j(this,vt,ee(this,we,yi).call(this,()=>{try{return it(()=>f(this,Pr).call(this,n))}catch(a){try{this.error(a),i=!0}catch(o){Wt(o,f(this,et).parent)}return null}})),f(this,vt)===null){j(this,Kt,null),i&&ee(this,we,Xn).call(this,U);return}f(this,wr)===0&&(f(this,St).before(r),j(this,Kt,null),$r(f(this,tt),()=>{j(this,tt,null)}),ee(this,we,Xn).call(this,U))}))},ua=function(){try{if(this.is_pending=this.has_pending_snippet(),j(this,wr,0),j(this,Ir,0),j(this,vt,it(()=>{f(this,Pr).call(this,f(this,St))})),f(this,wr)>0){var t=j(this,Kt,document.createDocumentFragment());Hi(f(this,vt),t);const r=f(this,Et).pending;j(this,tt,it(()=>r(f(this,St))))}else ee(this,we,Xn).call(this,U)}catch(r){this.error(r)}},Xn=function(t){this.is_pending=!1,t.transfer_effects(f(this,Ln),f(this,zn))},yi=function(t){var r=Z,n=K,i=$e;bt(f(this,et)),yt(f(this,et)),Xr(f(this,et).ctx);try{return kr.ensure(),t()}finally{bt(r),yt(n),Xr(i)}},fa=function(t,r){var n;if(!this.has_pending_snippet()){this.parent&&ee(n=this.parent,we,fa).call(n,t,r);return}j(this,wr,f(this,wr)+t),f(this,wr)===0&&(ee(this,we,Xn).call(this,r),f(this,tt)&&$r(f(this,tt),()=>{j(this,tt,null)}),f(this,Kt)&&(f(this,St).before(f(this,Kt)),j(this,Kt,null)))},da=function(t){f(this,vt)&&(He(f(this,vt)),j(this,vt,null)),f(this,tt)&&(He(f(this,tt)),j(this,tt,null)),f(this,pt)&&(He(f(this,pt)),j(this,pt,null));let r=f(this,Et).failed;const n=i=>{const{reset:a,invoke_onerror:o}=ee(this,we,ca).call(this,i);o(),r&&j(this,pt,ee(this,we,yi).call(this,()=>{try{return it(()=>{var s=Z;s.b=this,s.f|=Si,r(f(this,St),()=>i,()=>a)})}catch(s){return Wt(s,f(this,et).parent),null}}))};Ut(()=>{var i;try{i=this.transform_error(t)}catch(a){Wt(a,f(this,et)&&f(this,et).parent);return}i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(n,a=>Wt(a,f(this,et)&&f(this,et).parent)):n(i)})};function B(e,t){var r=t==null?"":typeof t=="object"?`${t}`:t;r!==(e[hn]??(e[hn]=e.nodeValue))&&(e[hn]=r,e.nodeValue=`${r}`)}function vl(e,t){return pl(e,t)}const oi=new Map;function pl(e,{target:t,anchor:r,props:n={},events:i,context:a,intro:o=!0,transformError:s}){Hs();var l=void 0,c=Gs(()=>{var d=r??t.appendChild(nr());fl(d,{pending:()=>{}},p=>{Ct({});var h=$e;a&&(h.c=a),i&&(n.$$events=i),l=e(p,n)||Mi(),Rt()},s);var v=new Set,g=p=>{for(var h=0;h<p.length;h++){var y=p[h];if(!v.has(y)){v.add(y);var _=al(y);for(const $ of[t,document]){var x=oi.get($);x===void 0&&(x=new Map,oi.set($,x));var C=x.get(y);C===void 0?($.addEventListener(y,Gi,{passive:_}),x.set(y,1)):x.set(y,C+1)}}}};return g(Gn(uo)),ji.add(g),()=>{var _;for(var p of v)for(const x of[t,document]){var h=oi.get(x),y=h.get(p);--y==0?(x.removeEventListener(p,Gi),h.delete(p),h.size===0&&oi.delete(x)):h.set(p,y)}ji.delete(g),d!==r&&((_=d.parentNode)==null||_.removeChild(d))}});return hl.set(l,c),l}let hl=new WeakMap;class Yi{constructor(t,r=!0){mt(this,"anchor");X(this,Dt,new Map);X(this,Zt,new Map);X(this,ht,new Map);X(this,Lr,new Set);X(this,Dn,!0);X(this,Bn,t=>{if(f(this,Dt).has(t)){var r=f(this,Dt).get(t),n=f(this,Zt).get(r);if(n)ni(n),f(this,Lr).delete(r);else{var i=f(this,ht).get(r);i&&(ni(i.effect),f(this,Zt).set(r,i.effect),f(this,ht).delete(r),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),n=i.effect)}for(const[a,o]of f(this,Dt)){if(f(this,Dt).delete(a),a===t)break;const s=f(this,ht).get(o);s&&(He(s.effect),f(this,ht).delete(o))}for(const[a,o]of f(this,Zt)){if(a===r||f(this,Lr).has(a))continue;const s=()=>{if(Array.from(f(this,Dt).values()).includes(a)){var c=document.createDocumentFragment();Hi(o,c),c.append(nr()),f(this,ht).set(a,{effect:o,fragment:c})}else He(o);f(this,Lr).delete(a),f(this,Zt).delete(a)};f(this,Dn)||!n?(f(this,Lr).add(a),$r(o,s,!1)):s()}}});X(this,hi,t=>{f(this,Dt).delete(t);const r=Array.from(f(this,Dt).values());for(const[n,i]of f(this,ht))r.includes(n)||(He(i.effect),f(this,ht).delete(n))});this.anchor=t,j(this,Dn,r)}ensure(t,r){var n=U,i=Wa();if(r&&!f(this,Zt).has(t)&&!f(this,ht).has(t))if(i){var a=document.createDocumentFragment(),o=nr();a.append(o),f(this,ht).set(t,{effect:it(()=>r(o)),fragment:a})}else f(this,Zt).set(t,it(()=>r(this.anchor)));if(f(this,Dt).set(n,t),i){for(const[s,l]of f(this,Zt))s===t?n.unskip_effect(l):n.skip_effect(l);for(const[s,l]of f(this,ht))s===t?n.unskip_effect(l.effect):n.skip_effect(l.effect);n.oncommit(f(this,Bn)),n.ondiscard(f(this,hi))}else f(this,Bn).call(this,n)}}Dt=new WeakMap,Zt=new WeakMap,ht=new WeakMap,Lr=new WeakMap,Dn=new WeakMap,Bn=new WeakMap,hi=new WeakMap;function ot(e,t,r=!1){var n=new Yi(e),i=r?dr:0;function a(o,s){n.ensure(o,s)}Sn(()=>{var o=!1;t((s,l=0)=>{o=!0,a(l,s)}),o||a(-1,null)},i)}function Ki(e,t){return t}function _l(e,t,r){for(var n=[],i=t.length,a,o=t.length,s=0;s<i;s++){let v=t[s];$r(v,()=>{if(a){if(a.pending.delete(v),a.done.add(v),a.pending.size===0){var g=e.outrogroups;Zi(e,Gn(a.done)),g.delete(a),g.size===0&&(e.outrogroups=null)}}else o-=1},!1)}if(o===0){var l=n.length===0&&r!==null&&e.pending.size===0;if(l){var c=r,d=c.parentNode;Us(d),d.append(c),e.items.clear()}Zi(e,t,!l)}else a={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(a)}function Zi(e,t,r=!0){var n;if(e.pending.size>0){n=new Set;for(const o of e.pending.values())for(const s of o)n.add(e.items.get(s).e)}for(var i=0;i<t.length;i++){var a=t[i];if(n!=null&&n.has(a)){a.f|=Vt;const o=document.createDocumentFragment();Hi(a,o)}else He(t[i],r)}}var po;function Gt(e,t,r,n,i,a=null){var o=e,s=new Map,l=(t&ba)!==0;if(l){var c=e;o=c.appendChild(nr())}var d=null,v=Ti(()=>{var $=r();return he($)?$:$==null?[]:Gn($)}),g,p=new Map,h=!0;function y($){(C.effect.f&Je)===0&&(C.pending.delete($),C.fallback=d,ml(C,g,o,t,n),d!==null&&(g.length===0?(d.f&Vt)===0?ni(d):(d.f^=Vt,Nn(d,null,o)):$r(d,()=>{d=null})))}function _($){C.pending.delete($)}var x=Sn(()=>{g=u(v);for(var $=g.length,z=new Set,b=U,k=Wa(),S=0;S<$;S+=1){var I=g[S],E=n(I,S),A=h?null:s.get(E);A?(A.v&&Kr(A.v,I),A.i&&Kr(A.i,S),k&&b.unskip_effect(A.e)):(A=gl(s,h?o:po??(po=nr()),I,E,S,i,t,r),h||(A.e.f|=Vt),s.set(E,A)),z.add(E)}if($===0&&a&&!d&&(h?d=it(()=>a(o)):(d=it(()=>a(po??(po=nr()))),d.f|=Vt)),$>z.size&&ys(),!h)if(p.set(b,z),k){for(const[L,W]of s)z.has(L)||b.skip_effect(W.e);b.oncommit(y),b.ondiscard(_)}else y(b);u(v)}),C={effect:x,items:s,pending:p,outrogroups:null,fallback:d};h=!1}function Mn(e){for(;e!==null&&(e.f&gt)===0;)e=e.next;return e}function ml(e,t,r,n,i){var A,L,W,F,J,Se,lt,Ge,rt;var a=(n&is)!==0,o=t.length,s=e.items,l=Mn(e.effect.first),c,d=null,v,g=[],p=[],h,y,_,x;if(a)for(x=0;x<o;x+=1)h=t[x],y=i(h,x),_=s.get(y).e,(_.f&Vt)===0&&((L=(A=_.nodes)==null?void 0:A.a)==null||L.measure(),(v??(v=new Set)).add(_));for(x=0;x<o;x+=1){if(h=t[x],y=i(h,x),_=s.get(y).e,e.outrogroups!==null)for(const ye of e.outrogroups)ye.pending.delete(_),ye.done.delete(_);if((_.f&Qe)!==0&&(ni(_),a&&((F=(W=_.nodes)==null?void 0:W.a)==null||F.unfix(),(v??(v=new Set)).delete(_))),(_.f&Vt)!==0)if(_.f^=Vt,_===l)Nn(_,null,r);else{var C=d?d.next:l;_===e.effect.last&&(e.effect.last=_.prev),_.prev&&(_.prev.next=_.next),_.next&&(_.next.prev=_.prev),mr(e,d,_),mr(e,_,C),Nn(_,C,r),d=_,g=[],p=[],l=Mn(d.next);continue}if(_!==l){if(c!==void 0&&c.has(_)){if(g.length<p.length){var $=p[0],z;d=$.prev;var b=g[0],k=g[g.length-1];for(z=0;z<g.length;z+=1)Nn(g[z],$,r);for(z=0;z<p.length;z+=1)c.delete(p[z]);mr(e,b.prev,k.next),mr(e,d,b),mr(e,k,$),l=$,d=k,x-=1,g=[],p=[]}else c.delete(_),Nn(_,l,r),mr(e,_.prev,_.next),mr(e,_,d===null?e.effect.first:d.next),mr(e,d,_),d=_;continue}for(g=[],p=[];l!==null&&l!==_;)(c??(c=new Set)).add(l),p.push(l),l=Mn(l.next);if(l===null)continue}(_.f&Vt)===0&&g.push(_),d=_,l=Mn(_.next)}if(e.outrogroups!==null){for(const ye of e.outrogroups)ye.pending.size===0&&(Zi(e,Gn(ye.done)),(J=e.outrogroups)==null||J.delete(ye));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||c!==void 0){var S=[];if(c!==void 0)for(_ of c)(_.f&Qe)===0&&S.push(_);for(;l!==null;)(l.f&Qe)===0&&l!==e.fallback&&S.push(l),l=Mn(l.next);var I=S.length;if(I>0){var E=(n&ba)!==0&&o===0?r:null;if(a){for(x=0;x<I;x+=1)(lt=(Se=S[x].nodes)==null?void 0:Se.a)==null||lt.measure();for(x=0;x<I;x+=1)(rt=(Ge=S[x].nodes)==null?void 0:Ge.a)==null||rt.fix()}_l(e,S,E)}}a&&Ut(()=>{var ye,G;if(v!==void 0)for(_ of v)(G=(ye=_.nodes)==null?void 0:ye.a)==null||G.apply()})}function gl(e,t,r,n,i,a,o,s){var l=(o&rs)!==0?(o&as)===0?Fs(r,!1,!1):pr(r):null,c=(o&ns)!==0?pr(i):null;return{v:l,i:c,e:it(()=>(a(t,l??r,c??i,s),()=>{e.delete(n)}))}}function Nn(e,t,r){if(e.nodes)for(var n=e.nodes.start,i=e.nodes.end,a=t&&(t.f&Vt)===0?t.nodes.start:r;n!==null;){var o=kn(n);if(a.before(n),n===i)return;n=o}}function mr(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function ge(e,t,r,n,i){var s,l;if((s=t.$$host)!=null&&s.$$shadowRoot){const c=Di("slot");R(e,c);return}var a=(l=t.$$slots)==null?void 0:l[r],o=!1;a===!0&&(a=t.children,o=!0),a===void 0||a(e,o?()=>n:n)}function wl(e,t,r){var n=new Yi(e);Sn(()=>{var i=t()??null;n.ensure(i,i&&(a=>r(a,i)))},dr)}function yl(e,t,r,n,i,a){var o=null,s=e,l=new Yi(s,!1);Sn(()=>{const c=t()||null;var d=ds;if(c===null){l.ensure(null,null);return}return l.ensure(c,v=>{if(c){if(o=Di(c,d),$n(o,o),n){var g=null,p=o.appendChild(nr());n(o,p),g==null||g.remove()}Z.nodes.end=o,v.before(o)}}),()=>{}},dr),ri(()=>{})}function bl(e,t){var r=void 0,n;Ya(()=>{r!==(r=t())&&(n&&(He(n),n=null),r&&(n=it(()=>{Fi(()=>r(e))})))})}function ho(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=ho(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function xl(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=ho(e))&&(n&&(n+=" "),n+=t);return n}function qt(e){return typeof e=="object"?xl(e):e??""}const _o=[...` 	
\r\f \v\uFEFF`];function kl(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var i of Object.keys(r))if(r[i])n=n?n+" "+i:i;else if(n.length)for(var a=i.length,o=0;(o=n.indexOf(i,o))>=0;){var s=o+a;(o===0||_o.includes(n[o-1]))&&(s===n.length||_o.includes(n[s]))?n=(o===0?"":n.substring(0,o))+n.substring(s+1):o=s}}return n===""?null:n}function mo(e,t=!1){var r=t?" !important;":";",n="";for(var i of Object.keys(e)){var a=e[i];a!=null&&a!==""&&(n+=" "+i+": "+a+r)}return n}function Qi(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Sl(e,t){if(t){var r="",n,i;if(Array.isArray(t)?(n=t[0],i=t[1]):n=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var a=!1,o=0,s=!1,l=[];n&&l.push(...Object.keys(n).map(Qi)),i&&l.push(...Object.keys(i).map(Qi));var c=0,d=-1;const y=e.length;for(var v=0;v<y;v++){var g=e[v];if(s?g==="/"&&e[v-1]==="*"&&(s=!1):a?a===g&&(a=!1):g==="/"&&e[v+1]==="*"?s=!0:g==='"'||g==="'"?a=g:g==="("?o++:g===")"&&o--,!s&&a===!1&&o===0){if(g===":"&&d===-1)d=v;else if(g===";"||v===y-1){if(d!==-1){var p=Qi(e.substring(c,d).trim());if(!l.includes(p)){g!==";"&&v++;var h=e.substring(c,v).trim();r+=" "+h+";"}}c=v+1,d=-1}}}}return n&&(r+=mo(n)),i&&(r+=mo(i,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Ie(e,t,r,n,i,a){var o=e[Ai];if(o!==r||o===void 0){var s=kl(r,n,a);s==null?e.removeAttribute("class"):t?e.className=s:e.setAttribute("class",s),e[Ai]=r}else if(a&&i!==a)for(var l in a){var c=!!a[l];(i==null||c!==!!i[l])&&e.classList.toggle(l,c)}return a}function Ji(e,t={},r,n){for(var i in r){var a=r[i];t[i]!==a&&(r[i]==null?e.style.removeProperty(i):e.style.setProperty(i,a,n))}}function si(e,t,r,n){var i=e[$i];if(i!==t){var a=Sl(t,n);a==null?e.removeAttribute("style"):e.style.cssText=a,e[$i]=t}else n&&(Array.isArray(n)?(Ji(e,r==null?void 0:r[0],n[0]),Ji(e,r==null?void 0:r[1],n[1],"important")):Ji(e,r,n));return n}function go(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function wo(e,t){var r=!("__defaultValue"in e);!r&&e.__defaultValue===t||(e.__defaultValue=t,yo(e,!r||"__value"in e))}function yo(e,t){var r=e.__defaultValue,n=e.multiple,i=n?r??[]:null;if(!(n&&!he(i))){var a=e.selectedIndex,o=t&&n?new Set(e.selectedOptions):null;for(var s of e.options){var l=ea(s);go(s,n?i.includes(l):Fa(l,r))}if(t)if(o!==null)for(s of e.options){var c=o.has(s);s.selected!==c&&(s.selected=c)}else e.selectedIndex!==a&&(e.selectedIndex=a)}}function Lt(e,t,r=!1){if(e.multiple){if(t==null)return;if(!he(t))return hs();for(var n of e.options)n.selected=t.includes(ea(n));return}for(n of e.options){var i=ea(n);if(Fa(i,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function ar(e){var t=new MutationObserver(r=>{r.every(El)||("__defaultValue"in e&&yo(e,!1),"__value"in e&&Lt(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ri(()=>{t.disconnect()})}function ea(e){return"__value"in e?e.__value:e.value}function El(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(r=>r.nodeName==="SELECTEDCONTENT")}return!1}const Tn=Symbol("class"),Cn=Symbol("style"),bo=Symbol("is custom element"),xo=Symbol("is html"),Al=Qn?"input":"INPUT",$l=Qn?"option":"OPTION",ko=Qn?"select":"SELECT",Ml=Qn?"progress":"PROGRESS";function Rn(e,t){var r=li(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==Ml)||(e.value=t??"")}function Nl(e,t){var r=li(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function De(e,t,r,n){var i=li(e);i[t]!==(i[t]=r)&&(t==="loading"&&(e[ts]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Ao(e).has(t)?e[t]=r:e.setAttribute(t,r))}function Tl(e,t,r,n,i=!1,a=!1){var o=li(e),s=o[bo],l=!o[xo],c=t||{},d=e.nodeName===$l,v=e.nodeName===ko;for(var g in t)!(g in r)&&g[0]+g[1]!=="$$"&&(r[g]=null);r.class?r.class=qt(r.class):r[Tn]&&(r.class=null),r[Cn]&&(r.style??(r.style=null));var p=Ao(e);if(e.nodeName===Al&&"type"in r&&("value"in r||"__value"in r)){var h=r.type;(h!==c.type||h===void 0&&e.hasAttribute("type"))&&(c.type=h,De(e,"type",h))}for(const b in r){let k=r[b];if(d&&b==="value"&&k==null){e.value=e.__value="",c[b]=k;continue}if(b==="class"){var y=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ie(e,y,k,n,t==null?void 0:t[Tn],r[Tn]),c[b]=k,c[Tn]=r[Tn];continue}if(b==="style"){si(e,k,t==null?void 0:t[Cn],r[Cn]),c[b]=k,c[Cn]=r[Cn];continue}var _=c[b];if(!(k===_&&!(k===void 0&&e.hasAttribute(b)))){c[b]=k;var x=b[0]+b[1];if(x!=="$$")if(x==="on"){const S={},I="$$"+b;let E=b.slice(2);var C=tl(E);if(Js(E)&&(E=E.slice(0,-7),S.capture=!0),!C&&_){if(k!=null)continue;e.removeEventListener(E,c[I],S),c[I]=null}if(C)Q(E,e,k),_r([E]);else if(k!=null){let A=function(L){c[b].call(this,L)};c[I]=fo(E,e,A,S)}}else if(b==="style")De(e,b,k);else if(b==="autofocus")Os(e,!!k);else if(!s&&(b==="__value"||b==="value"&&k!=null))e.value=e.__value=k;else if(b==="selected"&&d)go(e,k);else{var $=b;l||($=nl($));var z=$==="defaultValue"||$==="defaultChecked";if(v&&$==="defaultValue")continue;if(k==null&&!s&&!z)if(o[b]=null,$==="value"||$==="checked"){let S=e;const I=t===void 0;if($==="value"){let E=S.defaultValue;S.removeAttribute($),S.defaultValue=E,S.value=S.__value=I?E:null}else{let E=S.defaultChecked;S.removeAttribute($),S.defaultChecked=E,S.checked=I?E:!1}}else e.removeAttribute(b);else z||(s||typeof k!="string")&&p.has($)?(e[$]=k,$ in o&&(o[$]=Pe)):typeof k!="function"&&De(e,$,k)}}}return c}function So(e,t,r=[],n=[],i=[],a,o=!1,s=!1){$a(i,r,n,l=>{var c=void 0,d={},v=e.nodeName===ko,g=!1;if(Ya(()=>{var h=t(...l.map(u)),y=Tl(e,c,h,a,o,s);if(g&&v){var _=e;"defaultValue"in h&&wo(_,h.defaultValue),"value"in h&&Lt(_,h.value)}for(let C of Object.getOwnPropertySymbols(d))h[C]||He(d[C]);for(let C of Object.getOwnPropertySymbols(h)){var x=h[C];C.description===vs&&(!c||x!==c[C])&&(d[C]&&He(d[C]),d[C]=it(()=>bl(e,()=>x))),y[C]=x}c=y}),v){var p=e;Fi(()=>{var h=c;"defaultValue"in h&&wo(p,h.defaultValue),Lt(p,h.value,!0),ar(p)})}g=!0})}function li(e){return e[Zn]??(e[Zn]={[bo]:e.nodeName.includes("-"),[xo]:e.namespaceURI===ka})}var Eo=new Map;function Ao(e){var t=e.getAttribute("is")||e.nodeName,r=Eo.get(t);if(r)return r;Eo.set(t,r=new Set);for(var n,i=e,a=Element.prototype;a!==i;){n=pa(i);for(var o in n)n[o].set&&o!=="innerHTML"&&o!=="textContent"&&o!=="innerText"&&r.add(o);i=bi(i)}return r}function ta(e,t){return e===t||(e==null?void 0:e[Ht])===t}function ra(e=Mi(),t,r,n){var i=$e.r,a=Z;return Fi(()=>{var o,s;return qa(()=>{o=s,s=[],hr(()=>{ta(r(...s),e)||(t(e,...s),o&&ta(r(...o),e)&&t(null,...o))})}),()=>{let l=a;for(;l!==i&&l.parent!==null&&l.parent.f&qn;)l=l.parent;const c=()=>{s&&ta(r(...s),e)&&t(null,...s)},d=l.teardown;l.teardown=()=>{c(),d==null||d()}}}),e}function Cl(e=!1){const t=$e,r=t.l.u;if(!r)return;let n=()=>Tr(t.s);if(e){let i=0,a={};const o=qr(()=>{let s=!1;const l=t.s;for(const c in l)l[c]!==a[c]&&(a[c]=l[c],s=!0);return s&&i++,i});n=()=>u(o)}r.b.length&&Xs(()=>{$o(t,n),xi(r.b)}),Ar(()=>{const i=hr(()=>r.m.map(Jo));return()=>{for(const a of i)typeof a=="function"&&a()}}),r.a.length&&Ar(()=>{$o(t,n),xi(r.a)})}function $o(e,t){if(e.l.s)for(const r of e.l.s)u(r);t()}let ci=!1;function Rl(e){var t=ci;try{return ci=!1,[e(),ci]}finally{ci=t}}const Ol={get(e,t){if(!e.exclude.includes(t))return u(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var n=Z;try{bt(e.parent_effect),e.special[t]=kt({get[t](){return e.props[t]}},t,xa)}finally{bt(n)}}return e.special[t](r),za(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),za(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function me(e,t){return new Proxy({props:e,exclude:t,special:{},version:pr(0),parent_effect:Z},Ol)}const Pl={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(vn(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let i=e.props[n];vn(i)&&(i=i());const a=fr(i,t);if(a&&a.set)return a.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(vn(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const i=fr(n,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===Ht||t===ya)return!1;for(let r of e.props)if(vn(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(vn(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function xe(...e){return new Proxy({props:e},Pl)}function kt(e,t,r,n){var z;var i=!Wr||(r&ss)!==0,a=(r&ls)!==0,o=(r&cs)!==0,s=n,l=!0,c=void 0,d=()=>o&&i?(c??(c=qr(n)),u(c)):(l&&(l=!1,s=o?hr(n):n),s);let v;if(a){var g=Ht in e||ya in e;v=((z=fr(e,t))==null?void 0:z.set)??(g&&t in e?b=>e[t]=b:void 0)}var p,h=!1;a?[p,h]=Rl(()=>e[t]):p=e[t],p===void 0&&n!==void 0&&(p=d(),v&&(i&&Es(),v(p)));var y;if(i?y=()=>{var b=e[t];return b===void 0?d():(l=!0,b)}:y=()=>{var b=e[t];return b!==void 0&&(s=void 0),b===void 0?s:b},i&&(r&xa)===0)return y;if(v){var _=e.$$legacy;return(function(b,k){return arguments.length>0?((!i||!k||_||h)&&v(k?y():b),b):y()})}var x=!1,C=((r&os)!==0?qr:Ti)(()=>(x=!1,y()));a&&u(C);var $=Z;return(function(b,k){if(arguments.length>0){const S=k?u(C):i&&a?Xe(b):b;return N(C,S),x=!0,s!==void 0&&(s=S),b}return ir&&x||($.f&Je)!==0?C.v:u(C)})}function ui(e){$e===null&&gs(),Wr&&$e.l!==null?Il($e).m.push(e):Ar(()=>{const t=hr(e);if(typeof t=="function")return t})}function Il(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const Ll="5";typeof window<"u"&&((jo=window.__svelte??(window.__svelte={})).v??(jo.v=new Set)).add(Ll);const te=Xe({ready:!1,cleanScreen:!1,panelOpen:!0,settingsOpen:!1,startupOpen:!0,focusSection:null,focusNonce:0,popupSection:null,dockExpanded:!1,search:"",status:{}});function zl(e){te.popupSection=te.popupSection===e?null:e}const Be=Xe({});function Mo(e){try{return structuredClone(e)}catch{return JSON.parse(JSON.stringify(e))}}function ve(e){var t,r,n;if(e==null)return e;try{return((n=(r=(t=window.XRA)==null?void 0:t.i18n)==null?void 0:r.t)==null?void 0:n.call(r,e))??e}catch{return e}}function Fe(e,t){const r=e.split(".");let n=Be;for(const i of r){if(n==null)return t;n=n[i]}return n===void 0?t:n}function Dl(e){var r,n,i,a,o,s,l,c,d,v,g,p,h,y,_,x,C;const t=window.XRA;if(t){if(e.startsWith("background.")){(n=(r=t.background)==null?void 0:r.apply)==null||n.call(r);return}if(e==="ui.language"){(a=(i=t.i18n)==null?void 0:i.setLanguage)==null||a.call(i,Be.ui.language);return}if(e==="ui.preview_wireframe"){typeof t.applyMocapWireframeVisibility=="function"&&t.applyMocapWireframeVisibility();return}if(e==="ui.mocap_view"){typeof t.applyMocapWireframeVisibility=="function"&&t.applyMocapWireframeVisibility();return}if(e.startsWith("performance.")){if(window.XRA_render_fps_limit=Number(Be.performance.render_fps??60),window.XRA_gpu_preference=String(Be.performance.gpu_preference||"default"),window.XRA_preserve_drawing_buffer=Be.performance.preserve_drawing_buffer!==!1,window.XRA_antialias=Be.performance.antialias!=="off",e==="performance.infer_mode"&&((o=Be.camera)!=null&&o.follow_inference))try{(l=(s=t.performance)==null?void 0:s.apply)==null||l.call(s)}catch{}(d=(c=t.events)==null?void 0:c.emit)==null||d.call(c,"performance",Be.performance);return}if(e==="camera.follow_inference"){try{(g=(v=t.performance)==null?void 0:v.apply)==null||g.call(v)}catch{}(h=(p=t.events)==null?void 0:p.emit)==null||h.call(p,"config-change",{path:e,value:Fe(e)});return}if(e==="camera.width"||e==="camera.height"){Bl(),(_=(y=t.events)==null?void 0:y.emit)==null||_.call(y,"config-change",{path:e,value:Fe(e)});return}(C=(x=t.events)==null?void 0:x.emit)==null||C.call(x,"config-change",{path:e,value:Fe(e)})}}let No=0;function Bl(){clearTimeout(No),No=setTimeout(()=>{var e,t,r;try{(r=(t=(e=window.XRA)==null?void 0:e.performance)==null?void 0:t.apply)==null||r.call(t)}catch{}},300)}function Fl(e){var n,i,a,o,s,l,c;const t=Be.camera||(Be.camera={});if(e==="follow")t.follow_inference=!0,t.custom_resolution=!1;else if(e==="custom")t.follow_inference=!1,t.custom_resolution=!0;else{const[d,v]=String(e).split("x").map(Number);d>0&&v>0&&(t.follow_inference=!1,t.custom_resolution=!1,t.width=d,t.height=v)}const r=(n=window.XRA)==null?void 0:n.config;r&&(r.camera||(r.camera={}),r.camera.follow_inference=t.follow_inference,r.camera.custom_resolution=t.custom_resolution,t.width!=null&&(r.camera.width=t.width),t.height!=null&&(r.camera.height=t.height));try{(o=(a=(i=window.XRA)==null?void 0:i.performance)==null?void 0:a.apply)==null||o.call(a)}catch{}try{(c=(l=(s=window.XRA)==null?void 0:s.profileService)==null?void 0:l.save)==null||c.call(l)}catch{}}function ft(e,t){var a,o;const r=window.XRA,n=e.split(".");let i=Be;for(let s=0;s<n.length-1;s++)i[n[s]]==null&&(i[n[s]]={}),i=i[n[s]];if(i[n[n.length-1]]=t,r!=null&&r.config){let s=r.config;for(let l=0;l<n.length-1;l++)s[n[l]]==null&&(s[n[l]]={}),s=s[n[l]];s[n[n.length-1]]=t}Dl(e);try{(o=(a=r==null?void 0:r.profileService)==null?void 0:a.save)==null||o.call(a)}catch{}}function fi(e,t,r){return new Promise((n,i)=>{const a=setTimeout(()=>i(new Error(`${r} timed out after ${t} ms`)),t);Promise.resolve(e).then(o=>{clearTimeout(a),n(o)},o=>{clearTimeout(a),i(o)})})}async function To({timeout:e=12e3,dataTimeout:t=8e3}={}){var i,a,o;const r=(i=window.XRA)==null?void 0:i.nativeBridge;if(!(r!=null&&r.startNativeStreamer))throw new Error("native bridge unavailable");const n=()=>{var s;return(s=window.XRA)!=null&&s.withCameraIntent?window.XRA.withCameraIntent("tracking",()=>r.startNativeStreamer()):r.startNativeStreamer()};try{await fi(n(),e,"Camera start");const s=performance.now()+t;for(;performance.now()<s;){if((a=r.cameraDataReady)!=null&&a.call(r))return!0;await new Promise(l=>setTimeout(l,120))}return!0}catch(s){try{await((o=r.forceStopCamera)==null?void 0:o.call(r))}catch{}throw s}}async function Vl({timeout:e=8e3}={}){var n,i;const t=(n=window.XRA)==null?void 0:n.nativeBridge;if(!(t!=null&&t.stopNativeStreamer))return;const r=()=>{var a;return(a=window.XRA)!=null&&a.withCameraIntent?window.XRA.withCameraIntent("tracking",()=>t.stopNativeStreamer()):t.stopNativeStreamer()};try{await fi(r(),e,"Camera stop")}catch(a){try{await((i=t.forceStopCamera)==null?void 0:i.call(t))}catch{}throw a}}async function Hl({timeout:e=12e3,readyTimeout:t=6e3}={}){var n,i,a,o;const r=(n=window.XRA)==null?void 0:n.recorder;if(!(r!=null&&r.start))throw new Error("recorder unavailable");try{await fi(r.start(),e,"Recording start");const s=performance.now()+t;for(;performance.now()<s;){if((a=(i=r.status)==null?void 0:i.call(r))!=null&&a.active)return!0;await new Promise(l=>setTimeout(l,120))}return!0}catch(s){try{await((o=r.stop)==null?void 0:o.call(r))}catch{}throw s}}async function Ul({timeout:e=8e3}={}){var r,n;const t=(r=window.XRA)==null?void 0:r.recorder;if(t!=null&&t.stop)try{await fi(t.stop(),e,"Recording stop")}catch(i){try{await((n=t.stop)==null?void 0:n.call(t))}catch{}throw i}}function di(){var e,t,r;te.cleanScreen=!te.cleanScreen,document.body.classList.toggle("xra-total-clean-screen",te.cleanScreen);try{(r=(t=(e=window.XRA)==null?void 0:e.ui)==null?void 0:t.setHidden)==null||r.call(t,te.cleanScreen)}catch{}}function jl(){var e;try{Object.assign(Be,Mo(((e=window.XRA)==null?void 0:e.config)||{}))}catch{}}function Co(){var e;try{const t=(e=window.SA_bridge)==null?void 0:e.backend;t&&typeof t.status=="function"&&(te.status=t.status()||{})}catch{}}function Wl(){const e=()=>window.XRA&&window.XRA.config?(Object.assign(Be,Mo(window.XRA.config)),te.ready=!0,Co(),window.addEventListener("keydown",t=>{t.key==="Escape"&&te.cleanScreen&&(t.preventDefault(),di())},!0),!0):!1;if(!e()){const t=setInterval(()=>{e()&&clearInterval(t)},200)}}const Xl={camera:{title:"Camera",icon:"Camera"},devices:{title:"Devices",icon:"SlidersHorizontal"},pose_model:{title:"Pose model",icon:"PersonStanding"},performance:{title:"Performance",icon:"Zap"},tracking:{title:"Motion capture",icon:"Activity"},body:{title:"Body",icon:"PersonStanding"},collider:{title:"Body collider",icon:"Shield"},lip:{title:"Audio & Lip-sync",icon:"Mic"},background:{title:"Background",icon:"Image"},avatar:{title:"Character position (avatar only)",icon:"User"},second_avatar:{title:"Remote avatar (Studio Link)",icon:"Globe"},stage:{title:"3D Stage & Environment",icon:"Landmark"},recorder:{title:"Recording / capture",icon:"Video"},visual_effects:{title:"Visual effects",icon:"Sparkles"},debug:{title:"Diagnostics",icon:"Bug"},ui:{title:"UI & overlays",icon:"Monitor"}},Ro=["performance","camera","tracking","body","collider","lip","background","stage","avatar","second_avatar","recorder","visual_effects","debug","ui","devices","pose_model"],Gl=new Set(["left_settings","_custom_","_excluded_"]),ql=new Set(["camera.view_presets","camera.selected_view_preset","camera.follow_inference","camera.custom_resolution","ui.preview_video","ui.preview_wireframe","ui.preview_debug","performance.auto_last_result","performance.tracker_backend","recorder.output_dir"]),Oo=[[320,240],[352,288],[640,360],[640,480],[1280,720],[1920,1080]];function Po(e){const t=(e==null?void 0:e.camera)||{};return!t.follow_inference&&!!t.custom_resolution}function Io(e){const t=String(e).replace(/_/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").trim();return t.charAt(0).toUpperCase()+t.slice(1)}const On=e=>{var t;return String(((t=e.tracking)==null?void 0:t.guard_mode)||"").toLowerCase()!=="off"},Yl={"ui.language":{type:"select",options:()=>{var e,t;return((t=(e=window.XRA)==null?void 0:e.i18n)==null?void 0:t.LANGUAGES)||[["en","English"]]}},"background.mode":{type:"select",options:[["color","Color"],["image","Image"],["none","None (transparent · OBS)"]]},"background.color":{type:"color",when:e=>{var t;return((t=e.background)==null?void 0:t.mode)==="color"}},"background.path":{type:"text",when:e=>{var t;return((t=e.background)==null?void 0:t.mode)==="image"},desc:"Path or file name of the background image."},"ui.mocap_view":{type:"select",label:"Mocap window",options:[["off","Off"],["both","Webcam + skeleton"],["wireframe","Skeleton only"],["video","Webcam only"]]},"ui.mocap_visibility":{type:"select",label:"Mocap window visibility",options:[["always","Always on (black while idle)"],["auto","Auto (hide when tracking is off)"]]},"performance.tracking_pipeline":{type:"select",label:"Tracking mode",options:[["FULL_BODY","Full Body"],["FACE","Face only"],["UPPER_BODY","Upper body"]]},"performance.render_resolution":{type:"select",options:[["720p","720p (HD · GPU Saving)"],["1080p","1080p (Full HD · Recommended)"],["1440p","1440p (2K · High resolution)"]]},"performance.render_fps":{type:"slider",min:15,max:240,step:1},"performance.gpu_preference":{type:"select",label:"Graphics card (GPU)",options:[["default","Default"],["high-performance","Dedicated GPU (High Performance)"],["low-power","Integrated GPU (Low Power)"]]},"performance.shadows":{type:"select",options:[["auto","Auto"],["on","Enabled"],["off","Disabled (GPU saving)"]]},"performance.antialias":{type:"select",label:"Anti-Aliasing (AA)",options:[["auto","Enabled (Hardware MSAA · Recommended)"],["off","Disabled"]]},"performance.spring_bone":{type:"select",label:"Hair/cloth physics (Spring Bone)",options:[["full","Full (every frame)"],["half","Half (1 frame out of 2 · Saving)"],["off","Off"]]},"performance.infer_mode":{type:"select",options:[["native","Native (Auto)"],["640x360","640×360 (Recommended · 30 FPS smooth)"],["640x480","640×480 (Standard 4:3 format)"],["1280x720","1280×720 (HD 720p · High precision)"]]},"performance.pose_fps":{type:"slider",min:5,max:30,step:1},"performance.hand_fps":{type:"slider",min:5,max:30,step:1},"performance.min_tracking_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_pose_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_face_confidence":{type:"slider",min:.05,max:1,step:.05},"performance.min_joint_confidence":{type:"slider",min:.05,max:1,step:.05},"tracking.hand_recovery_mode":{type:"select",options:[["normal","Normal"],["aggressive","Aggressive"],["off","Off"]],desc:"How the backend re-acquires hands after they leave the frame."},"tracking.hand_detection_sensitivity":{type:"select",options:[["high","High"],["normal","Normal"],["low","Low"]]},"tracking.stabilize_hand_percent":{type:"slider",min:0,max:100,step:1,group:"Stabilization"},"tracking.stabilize_arm":{type:"slider",min:0,max:100,step:1},"tracking.stabilize_arm_time":{type:"slider",min:0,max:2,step:.05},"tracking.native_smoothing":{type:"slider",min:0,max:1,step:.01,group:"Smoothing"},"tracking.adaptive_smoothing_strength":{type:"slider",min:0,max:1,step:.01},"tracking.body_bend_reduction":{type:"slider",min:0,max:1,step:.01,group:"Body"},"tracking.upper_body_guard":{type:"toggle",group:"Guard",desc:"Hold the upper body steady when tracking confidence drops."},"tracking.upper_body_guard_strength":{type:"slider",min:0,max:1,step:.01,group:"Guard",enabled:e=>{var t;return!!((t=e.tracking)!=null&&t.upper_body_guard)}},"tracking.guard_mode":{type:"select",group:"Guard",options:[["off","Off"],["auto","Auto"]],desc:"Auto re-acquires tracking after an occlusion or a fast jump."},"tracking.guard_jump_deg":{type:"slider",min:5,max:120,step:1,enabled:On,desc:"Largest sudden joint-angle jump (deg) treated as noise."},"tracking.guard_hold_ms":{type:"slider",min:0,max:2e3,step:10,enabled:On,desc:"How long to hold the pose before re-acquiring (ms)."},"tracking.guard_reacquire_deg":{type:"slider",min:5,max:120,step:1,enabled:On,desc:"Angle (deg) needed to end the hold and resume tracking."},"tracking.guard_confidence_min":{type:"slider",min:0,max:1,step:.01,enabled:On},"tracking.guard_release_ms":{type:"slider",min:0,max:2e3,step:10,enabled:On},"tracking.desk_torso_lock":{type:"slider",min:0,max:1,step:.01,group:"Desk lock",desc:"Lock torso rotation when working at a desk."},"tracking.desk_hips_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_legs_lock":{type:"slider",min:0,max:1,step:.01},"tracking.desk_max_yaw_deg":{type:"slider",min:0,max:90,step:1},"tracking.desk_max_pitch_deg":{type:"slider",min:0,max:90,step:1},"tracking.desk_max_roll_deg":{type:"slider",min:0,max:90,step:1},"body.anchor_strength":{type:"slider",min:0,max:1,step:.01},"body.transition_ms":{type:"slider",min:0,max:2e3,step:10},"avatar.offset_x":{type:"slider",min:-5,max:5,step:.01},"avatar.offset_y":{type:"slider",min:-5,max:5,step:.01},"avatar.offset_z":{type:"slider",min:-5,max:5,step:.01},"avatar.rotation_y":{type:"slider",min:-180,max:180,step:1},"second_avatar.offset_x":{type:"slider",min:-20,max:20,step:.1},"second_avatar.offset_y":{type:"slider",min:-10,max:10,step:.1},"second_avatar.offset_z":{type:"slider",min:-10,max:10,step:.1},"second_avatar.rotation_y":{type:"slider",min:-180,max:180,step:1},"stage.scale":{type:"slider",min:.1,max:5,step:.01},"stage.rotation_x":{type:"slider",min:-180,max:180,step:1},"stage.rotation_y":{type:"slider",min:-180,max:180,step:1},"stage.rotation_z":{type:"slider",min:-180,max:180,step:1},"stage.offset_x":{type:"slider",min:-10,max:10,step:.05},"stage.offset_y":{type:"slider",min:-10,max:10,step:.05},"stage.offset_z":{type:"slider",min:-10,max:10,step:.05},"stage.scene_zoom":{type:"slider",min:.5,max:3,step:.01},"stage.lights_intensity":{type:"slider",min:0,max:3,step:.05},"collider.preset":{type:"select",options:[["CUSTOM","Custom"],["NONE","None"]]},"collider.reaction":{type:"select",options:[["z_push","Z push"],["bounce","Bounce"],["block","Block"]]},"collider.head":{type:"slider",min:0,max:200,step:1},"collider.chest":{type:"slider",min:0,max:200,step:1},"collider.waist":{type:"slider",min:0,max:200,step:1},"collider.hip":{type:"slider",min:0,max:200,step:1},"collider.front_clearance":{type:"slider",min:0,max:50,step:1},"lip.analysis_fps":{type:"slider",min:5,max:60,step:1},"lip.fft_size":{type:"select",label:"FFT size",options:[["256","256"],["512","512"],["1024","1024"],["2048","2048"]]},"lip.mic_mix":{type:"slider",min:0,max:1,step:.01},"lip.threshold":{type:"slider",min:0,max:.2,step:.001},"lip.response_gain":{type:"slider",min:0,max:3,step:.05},"lip.vowel_emphasis":{type:"slider",min:0,max:3,step:.05},"recorder.mode":{type:"select",label:"Recording source",options:[["video_audio","Video + Audio"],["video","Video only"],["audio","Audio only"]]},"recorder.audio_only_variant":{type:"select",label:"Audio only mode",options:[["both","Processed + RAW"],["processed","Processed"],["raw","RAW"]]},"recorder.capture_source":{type:"select",label:"Output source",options:[["classic_v74","Classic output · recommended"],["clean_scene","Clean scene output · experimental (no UI)"],["native_xr","XR native video only · fallback"]]},"recorder.output_format":{type:"select",options:[["webm","WebM"],["mp4","MP4"]]},"recorder.audio_profile":{type:"select",options:[["podcast","Podcast"],["call","Call (Browser echo/noise filters)"]]},"recorder.hardware_encode":{type:"select",options:[["auto","Auto"],["on","On"],["off","Off (CPU)"]]},"recorder.width":{type:"slider",min:320,max:3840,step:2},"recorder.height":{type:"slider",min:240,max:2160,step:2},"recorder.fps":{type:"slider",min:15,max:60,step:1},"recorder.gate_threshold_db":{type:"slider",min:-80,max:-5,step:.5},"recorder.gate_hold_ms":{type:"slider",min:0,max:1e3,step:10},"recorder.gate_release_ms":{type:"slider",min:0,max:1e3,step:10},"recorder.video_bps":{type:"slider",min:5e5,max:2e7,step:1e5},"recorder.audio_bps":{type:"slider",min:32e3,max:32e4,step:8e3},"recorder.segment_minutes":{type:"select",options:[["0","Off"],["30","Every 30 min"],["60","Every 60 min"]]},"recorder.raw_audio_format":{type:"select",options:[["flac","FLAC (lossless)"],["wav","WAV (large)"]]},"recorder.filename":{type:"text"},"camera.optimized":{type:"toggle"},"camera.width":{type:"slider",min:160,max:1920,step:2,when:e=>Po(e)},"camera.height":{type:"slider",min:120,max:1080,step:2,when:e=>Po(e)},"camera.fps":{type:"slider",min:5,max:60,step:1}};function Kl(e){const t=[];for(const[r,n]of Object.entries(e||{})){if(Gl.has(r)||!n||typeof n!="object"||Array.isArray(n))continue;const i=Xl[r]||{},a=[];for(const[o,s]of Object.entries(n)){const l=`${r}.${o}`;if(ql.has(l))continue;const c=Yl[l]||{};if(c.hidden||s!==null&&typeof s=="object")continue;const d=c.type||(typeof s=="boolean"?"toggle":typeof s=="number"?"number":"text");a.push({type:d,path:l,label:c.label||Io(o),min:c.min,max:c.max,step:c.step,options:c.options,when:c.when,enabled:c.enabled,group:c.group,desc:c.desc})}r==="camera"&&a.unshift({type:"camera-resolution",path:"camera.resolution",label:"Resolution",desc:'Capture resolution. "Follow inference resolution" matches MediaPipe; "Custom…" reveals the width/height sliders.'}),a.length&&t.push({id:r,title:i.title||Io(r),icon:i.icon||"⚙",controls:a})}return t.sort((r,n)=>{const i=Ro.indexOf(r.id),a=Ro.indexOf(n.id);return(i<0?999:i)-(a<0?999:a)}),t}var Lo=_e("<option> </option>"),zo=_e("<select></select>"),Zl=_e("<select><option> </option><option> </option></select>"),Ql=_e('<span class="xra-val"> </span> <div class="xra-meter-wrap"><div class="xra-meter"></div> <input class="xra-meter-input" type="range"/> <div class="xra-meter-scale"><span> </span><span> </span></div></div>',1),Jl=_e('<input type="checkbox"/>'),ec=_e('<input type="color"/>'),tc=_e('<input type="number"/>'),rc=_e('<input type="text"/>'),nc=_e('<label><span class="xra-row-label"> </span> <!></label>');function ic(e,t){Ct(t,!0);let r=kt(t,"disabled",3,!1);const n=We(()=>typeof t.control.options=="function"?t.control.options():t.control.options||[]),i=b=>b===!1?"off":"auto",a=b=>b==="off"?!1:null;function o(){var W,F,J,Se,lt,Ge,rt,ye;const b=[],k=new Set,S=(G,Te)=>{if(G=Number(G),Te=Number(Te),!(G>=320&&Te>=240&&G<=1920&&Te<=1080))return;const Qt=`${G}x${Te}`;k.has(Qt)||(k.add(Qt),b.push([G,Te]))};let I=null;try{const G=(J=(F=(W=window.XRA)==null?void 0:W.xraBackend)==null?void 0:F.snapshot)==null?void 0:J.call(F);I=((lt=(Se=G==null?void 0:G.hardware)==null?void 0:Se.camera)==null?void 0:lt.supported_resolutions)||((ye=(rt=(Ge=G==null?void 0:G.capture)==null?void 0:Ge.hardware)==null?void 0:rt.camera)==null?void 0:ye.supported_resolutions)}catch{}const E=Array.isArray(I)&&I.length?I:Oo;for(const[G,Te]of E)S(G,Te);for(const[G,Te]of Oo)S(G,Te);const A=Fe("camera",{})||{};!A.follow_inference&&!A.custom_resolution&&S(A.width,A.height),b.sort((G,Te)=>G[0]*G[1]-Te[0]*Te[1]);const L=[["follow","Follow inference resolution (auto)"]];for(const[G,Te]of b)L.push([`${G}x${Te}`,`${G}×${Te}`]);return L.push(["custom","Custom…"]),L}function s(){const b=Fe("camera",{})||{};if(b.follow_inference)return"follow";if(b.custom_resolution)return"custom";const k=`${b.width}x${b.height}`;return o().some(S=>S[0]===k)?k:"custom"}var l=nc();let c;var d=P(l),v=H(d,!0),g=T(d,2);{var p=b=>{var k=zo();Gt(k,21,()=>u(n),Ki,(I,E)=>{var A=Lo(),L=H(A,!0),W={};de(F=>{B(L,F),W!==(W=u(E)[0])&&(A.value=(A.__value=W)??"")},[()=>ve(u(E)[1])]),R(I,A)});var S;ar(k),de(I=>{k.disabled=r(),S!==(S=I)&&(k.value=(k.__value=S)??"",Lt(k,S))},[()=>Fe(t.control.path)]),Q("change",k,I=>ft(t.control.path,I.currentTarget.value)),R(b,k)},h=b=>{var k=zo();Gt(k,21,o,Ki,(I,E)=>{var A=Lo(),L=H(A,!0),W={};de(F=>{B(L,F),W!==(W=u(E)[0])&&(A.value=(A.__value=W)??"")},[()=>ve(u(E)[1])]),R(I,A)});var S;ar(k),de(I=>{k.disabled=r(),S!==(S=I)&&(k.value=(k.__value=S)??"",Lt(k,S))},[()=>s()]),Q("change",k,I=>Fl(I.currentTarget.value)),R(b,k)},y=b=>{var k=Zl(),S=P(k),I=H(S,!0);S.value=S.__value="auto";var E=T(S),A=H(E,!0);E.value=E.__value="off";var L;ar(k),de((W,F,J)=>{k.disabled=r(),B(I,W),B(A,F),L!==(L=J)&&(k.value=(k.__value=L)??"",Lt(k,L))},[()=>ve("Auto (follow tracking)"),()=>ve("Off"),()=>i(Fe(t.control.path))]),Q("change",k,W=>ft(t.control.path,a(W.currentTarget.value))),R(b,k)},_=b=>{const k=We(()=>Number(Fe(t.control.path,t.control.min))),S=We(()=>t.control.max>t.control.min?Math.round((u(k)-t.control.min)/(t.control.max-t.control.min)*100):0);var I=Ql(),E=ae(I),A=H(E,!0),L=T(E,2),W=P(L),F=T(W,2),J=T(F,2),Se=P(J),lt=H(Se,!0),Ge=T(Se),rt=H(Ge,!0);de(ye=>{B(A,ye),si(W,`--xra-fill:${u(S)??""}%`),De(F,"min",t.control.min),De(F,"max",t.control.max),De(F,"step",t.control.step),Rn(F,u(k)),F.disabled=r(),B(lt,t.control.min),B(rt,t.control.max)},[()=>Fe(t.control.path)]),Q("input",F,ye=>ft(t.control.path,Number(ye.currentTarget.value))),R(b,I)},x=b=>{var k=Jl();de(S=>{Nl(k,S),k.disabled=r()},[()=>!!Fe(t.control.path)]),Q("change",k,S=>ft(t.control.path,S.currentTarget.checked)),R(b,k)},C=b=>{var k=ec();de(S=>{Rn(k,S),k.disabled=r()},[()=>Fe(t.control.path)]),Q("input",k,S=>ft(t.control.path,S.currentTarget.value)),R(b,k)},$=b=>{var k=tc();de(S=>{De(k,"step",t.control.step||"any"),Rn(k,S),k.disabled=r()},[()=>Fe(t.control.path,0)]),Q("input",k,S=>ft(t.control.path,Number(S.currentTarget.value))),R(b,k)},z=b=>{var k=rc();de(S=>{Rn(k,S),k.disabled=r()},[()=>Fe(t.control.path,"")]),Q("change",k,S=>ft(t.control.path,S.currentTarget.value)),R(b,k)};ot(g,b=>{t.control.type==="select"?b(p):t.control.type==="camera-resolution"?b(h,1):t.control.type==="tristate"?b(y,2):t.control.type==="slider"?b(_,3):t.control.type==="toggle"?b(x,4):t.control.type==="color"?b(C,5):t.control.type==="number"?b($,6):t.control.type==="text"&&b(z,7)})}de(b=>{c=Ie(l,1,"xra-row",null,c,{"xra-row-slider":t.control.type==="slider",disabled:r()}),De(d,"title",t.control.desc||""),B(v,b)},[()=>ve(t.control.label)]),R(e,l),Rt()}_r(["change","input"]);var ac=_e('<div class="xra-group"> </div>');function Do(e,t){Ct(t,!0);const r=We(()=>{const a=(te.search||"").trim().toLowerCase(),o=[];let s=null;for(const l of t.section.controls)l.when&&!l.when(Be)||a&&!`${l.label} ${l.path}`.toLowerCase().includes(a)||(l.group&&l.group!==s?(o.push({header:l.group}),s=l.group):l.group||(s=null),o.push({control:l,disabled:l.enabled?!l.enabled(Be):!1}));return o});var n=ue(),i=ae(n);Gt(i,19,()=>u(r),(a,o)=>a.header?`g${o}`:a.control.path,(a,o)=>{var s=ue(),l=ae(s);{var c=v=>{var g=ac(),p=H(g,!0);de(()=>B(p,u(o).header)),R(v,g)},d=v=>{ic(v,{get control(){return u(o).control},get disabled(){return u(o).disabled}})};ot(l,v=>{u(o).header?v(c):v(d,-1)})}R(a,s)}),R(e,n),Rt()}Ts();/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const oc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const sc=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Bo=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();var lc=ll("<svg><!><!></svg>");function ke(e,t){const r=me(t,["children","$$slots","$$events","$$legacy"]),n=me(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Ct(t,!1);let i=kt(t,"name",8,void 0),a=kt(t,"color",8,"currentColor"),o=kt(t,"size",8,24),s=kt(t,"strokeWidth",8,2),l=kt(t,"absoluteStrokeWidth",8,!1),c=kt(t,"iconNode",24,()=>[]);Cl();var d=lc();So(d,(p,h,y)=>({...oc,...p,...n,width:o(),height:o(),stroke:a(),"stroke-width":h,class:y}),[()=>sc(n)?void 0:{"aria-hidden":"true"},()=>(Tr(l()),Tr(s()),Tr(o()),hr(()=>l()?Number(s())*24/Number(o()):s())),()=>(Tr(Bo),Tr(i()),Tr(r),hr(()=>Bo("lucide-icon","lucide",i()?`lucide-${i()}`:"",r.class)))]);var v=P(d);Gt(v,1,c,Ki,(p,h)=>{var y=We(()=>ma(u(h),2));let _=()=>u(y)[0],x=()=>u(y)[1];var C=ue(),$=ae(C);yl($,_,!0,(z,b)=>{So(z,()=>({...x()}))}),R(p,C)});var g=T(v);ge(g,t,"default",{}),R(e,d),Rt()}function cc(e,t){const r=me(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];ke(e,xe({name:"camera"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=ue(),s=ae(o);ge(s,t,"default",{}),R(i,o)},$$slots:{default:!0}}))}function uc(e,t){const r=me(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M10 5H3"}],["path",{d:"M12 19H3"}],["path",{d:"M14 3v4"}],["path",{d:"M16 17v4"}],["path",{d:"M21 12h-9"}],["path",{d:"M21 19h-5"}],["path",{d:"M21 5h-7"}],["path",{d:"M8 10v4"}],["path",{d:"M8 12H3"}]];ke(e,xe({name:"sliders-horizontal"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=ue(),s=ae(o);ge(s,t,"default",{}),R(i,o)},$$slots:{default:!0}}))}function fc(e,t){const r=me(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"5",r:"1"}],["path",{d:"m9 20 3-6 3 6"}],["path",{d:"m6 8 6 2 6-2"}],["path",{d:"M12 10v4"}]];ke(e,xe({name:"person-standing"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=ue(),s=ae(o);ge(s,t,"default",{}),R(i,o)},$$slots:{default:!0}}))}function dc(e,t){const r=me(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];ke(e,xe({name:"zap"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=ue(),s=ae(o);ge(s,t,"default",{}),R(i,o)},$$slots:{default:!0}}))}function vc(e,t){const r=me(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]];ke(e,xe({name:"activity"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=ue(),s=ae(o);ge(s,t,"default",{}),R(i,o)},$$slots:{default:!0}}))}function pc(e,t){const r=me(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];ke(e,xe({name:"shield"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=ue(),s=ae(o);ge(s,t,"default",{}),R(i,o)},$$slots:{default:!0}}))}function hc(e,t){const r=me(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 19v3"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3"}]];ke(e,xe({name:"mic"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=ue(),s=ae(o);ge(s,t,"default",{}),R(i,o)},$$slots:{default:!0}}))}function _c(e,t){const r=me(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]];ke(e,xe({name:"image"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=ue(),s=ae(o);ge(s,t,"default",{}),R(i,o)},$$slots:{default:!0}}))}function mc(e,t){const r=me(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M10 18v-7"}],["path",{d:"M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"}],["path",{d:"M14 18v-7"}],["path",{d:"M18 18v-7"}],["path",{d:"M3 22h18"}],["path",{d:"M6 18v-7"}]];ke(e,xe({name:"landmark"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=ue(),s=ae(o);ge(s,t,"default",{}),R(i,o)},$$slots:{default:!0}}))}function gc(e,t){const r=me(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];ke(e,xe({name:"user"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=ue(),s=ae(o);ge(s,t,"default",{}),R(i,o)},$$slots:{default:!0}}))}function wc(e,t){const r=me(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];ke(e,xe({name:"globe"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=ue(),s=ae(o);ge(s,t,"default",{}),R(i,o)},$$slots:{default:!0}}))}function yc(e,t){const r=me(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]];ke(e,xe({name:"video"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=ue(),s=ae(o);ge(s,t,"default",{}),R(i,o)},$$slots:{default:!0}}))}function bc(e,t){const r=me(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];ke(e,xe({name:"sparkles"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=ue(),s=ae(o);ge(s,t,"default",{}),R(i,o)},$$slots:{default:!0}}))}function xc(e,t){const r=me(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 20v-9"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97"}],["path",{d:"M22 13h-4"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97"}],["path",{d:"M6 13H2"}],["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13"}]];ke(e,xe({name:"bug"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=ue(),s=ae(o);ge(s,t,"default",{}),R(i,o)},$$slots:{default:!0}}))}function kc(e,t){const r=me(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]];ke(e,xe({name:"monitor"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=ue(),s=ae(o);ge(s,t,"default",{}),R(i,o)},$$slots:{default:!0}}))}function Sc(e,t){const r=me(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"10",r:"8"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 22h10"}],["path",{d:"M12 22v-4"}]];ke(e,xe({name:"webcam"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=ue(),s=ae(o);ge(s,t,"default",{}),R(i,o)},$$slots:{default:!0}}))}function Fo(e,t){const r=me(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}]];ke(e,xe({name:"circle"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=ue(),s=ae(o);ge(s,t,"default",{}),R(i,o)},$$slots:{default:!0}}))}function Ec(e,t){const r=me(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];ke(e,xe({name:"square"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=ue(),s=ae(o);ge(s,t,"default",{}),R(i,o)},$$slots:{default:!0}}))}function Ac(e,t){const r=me(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]];ke(e,xe({name:"eye"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=ue(),s=ae(o);ge(s,t,"default",{}),R(i,o)},$$slots:{default:!0}}))}function $c(e,t){const r=me(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}],["path",{d:"m2 2 20 20"}]];ke(e,xe({name:"eye-off"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=ue(),s=ae(o);ge(s,t,"default",{}),R(i,o)},$$slots:{default:!0}}))}function Mc(e,t){const r=me(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];ke(e,xe({name:"folder-open"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=ue(),s=ae(o);ge(s,t,"default",{}),R(i,o)},$$slots:{default:!0}}))}function Nc(e,t){const r=me(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];ke(e,xe({name:"info"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=ue(),s=ae(o);ge(s,t,"default",{}),R(i,o)},$$slots:{default:!0}}))}function Tc(e,t){const r=me(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ke(e,xe({name:"x"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=ue(),s=ae(o);ge(s,t,"default",{}),R(i,o)},$$slots:{default:!0}}))}function Cc(e,t){const r=me(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];ke(e,xe({name:"settings"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=ue(),s=ae(o);ge(s,t,"default",{}),R(i,o)},$$slots:{default:!0}}))}function Rc(e,t){const r=me(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ke(e,xe({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(i,a)=>{var o=ue(),s=ae(o);ge(s,t,"default",{}),R(i,o)},$$slots:{default:!0}}))}function st(e,t){const r={Camera:cc,SlidersHorizontal:uc,PersonStanding:fc,Zap:dc,Activity:vc,Shield:pc,Mic:hc,Image:_c,Landmark:mc,User:gc,Globe:wc,Video:yc,Sparkles:bc,Bug:xc,Monitor:kc,Webcam:Sc,Circle:Fo,Square:Ec,Eye:Ac,EyeOff:$c,FolderOpen:Mc,Info:Nc,X:Tc,Settings:Cc,RefreshCw:Rc};let n=kt(t,"name",3,"Circle"),i=kt(t,"size",3,16),a=kt(t,"strokeWidth",3,2),o=kt(t,"class",3,"");const s=We(()=>r[n()]??Fo);var l=ue(),c=ae(l);wl(c,()=>u(s),(d,v)=>{v(d,{get size(){return i()},get"stroke-width"(){return a()},get class(){return o()}})}),R(e,l)}var Oc=_e('<div class="xra-sec-body"><!></div>'),Pc=_e('<details class="xra-sec"><summary><span class="xra-sec-title"><!> <span> </span></span> <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></summary> <!></details>');function Ic(e,t){Ct(t,!0);const r="ui.sections_open";let n=V(Xe(hr(()=>{var x;return((x=Fe(r,{}))==null?void 0:x[t.section.id])??!1})));const i=We(()=>!!(te.search||"").trim());let a;function o(){N(n,!u(n)),ft(`${r}.${t.section.id}`,u(n))}Ar(()=>{te.focusNonce,!(te.focusSection!==t.section.id||!te.panelOpen)&&(N(n,!0),ft(`${r}.${t.section.id}`,!0),requestAnimationFrame(()=>a==null?void 0:a.scrollIntoView({block:"nearest",behavior:"smooth"})))});var s=Pc(),l=P(s),c=P(l),d=P(c);st(d,{get name(){return t.section.icon},size:15,class:"xra-sec-icon"});var v=T(d,2),g=H(v,!0),p=T(c,2);let h;var y=T(l,2);{var _=x=>{var C=Oc(),$=P(C);Do($,{get section(){return t.section}}),R(x,C)};ot(y,x=>{(u(n)||u(i))&&x(_)})}ra(s,x=>a=x,()=>a),de(x=>{s.open=u(n)||u(i),B(g,x),h=Ie(p,0,"xra-sec-chevron",null,h,{open:u(n)})},[()=>ve(t.section.title)]),Q("click",l,x=>{x.preventDefault(),o()}),R(e,s),Rt()}_r(["click"]);var Pn=_e('<option class="svelte-x8svx4"> </option>'),Lc=_e('<div class="warn svelte-x8svx4"> </div>'),zc=_e('<div class="xra-startup svelte-x8svx4"><div class="card svelte-x8svx4" role="dialog" aria-label="XR Animator VMC"><div class="col left svelte-x8svx4"><div class="brand svelte-x8svx4"><span class="logo svelte-x8svx4">XR</span> <span class="name svelte-x8svx4">Animator <b class="svelte-x8svx4">VMC</b></span></div> <div class="sub svelte-x8svx4"> </div> <pre class="log svelte-x8svx4"> </pre> <div class="credits svelte-x8svx4">Engine: XR Animator by Butz Yung (CC BY-NC-SA 4.0)<br class="svelte-x8svx4"/> Backends: native MediaPipe · optional ONNX Runtime</div></div> <div class="col right svelte-x8svx4"><div class="group-title svelte-x8svx4"> </div> <button type="button" class="q primary svelte-x8svx4"> </button> <button type="button" class="q svelte-x8svx4"> </button> <div class="group-title svelte-x8svx4"> <span></span></div> <div class="row svelte-x8svx4"><select class="svelte-x8svx4"><!></select> <button type="button" class="q icon svelte-x8svx4"><!></button></div> <!> <div class="group-title svelte-x8svx4"> </div> <label class="field svelte-x8svx4"><span class="svelte-x8svx4"> </span> <select class="svelte-x8svx4"></select></label> <label class="field svelte-x8svx4"><span class="svelte-x8svx4"> </span> <select class="svelte-x8svx4"></select></label> <button type="button" class="q ghost svelte-x8svx4"> </button></div></div></div>');function Dc(e,t){Ct(t,!0);const r=()=>window.XRA,n=m=>ve(m),i=["AUTO","ECO","LOW","BALANCED","QUALITY","HIGH","MAX","CUSTOM"],a=4e3;function o(){var m,w,O;try{(O=(w=(m=r())==null?void 0:m.profileService)==null?void 0:w.save)==null||O.call(w,0)}catch{}}const s=(()=>{var w,O;const m=(O=(w=r())==null?void 0:w.i18n)==null?void 0:O.LANGUAGES;return Array.isArray(m)&&m.length?m:[["auto","Auto / System"],["en","English"],["it","Italiano"]]})();let l=V("auto"),c=V("CUSTOM"),d=V("default"),v=V(Xe([])),g=V(!1),p=V(""),h=V(!1),y=V(""),_=V(""),x=V(!1),C=V(!1),$=V(!1),z=V(Xe([])),b=!1,k=!1,S=0,I=0,E=[];function A(m){(u(z).length?u(z)[u(z).length-1]:"")!==m&&N(z,[...u(z),m].slice(-40),!0)}function L(){var m,w,O;b||(b=!0,I&&(clearInterval(I),I=0),o(),te.startupOpen=!1,(O=(w=(m=r())==null?void 0:m.ui)==null?void 0:w.refresh)==null||O.call(w))}async function W(){var m,w;N(x,!0),A("Starting tracking…");try{await To()}catch(O){(w=(m=r()).toast)==null||w.call(m,"Tracking: "+O.message,"warn",4500)}finally{N(x,!1),L()}}async function F(m){const w=r();if(m=String(m||"CUSTOM").toUpperCase(),m==="CUSTOM"){w.config.performance.master_preset="CUSTOM",o(),A("Preset: CUSTOM");return}if(m==="AUTO"){A("Benchmarking hardware…");const O=await w.performance.benchmarkHardwareOnly();A(`AUTO → ${O.preset} (${O.fps.toFixed(1)} fps)`),await w.performance.applyPresetSafe(O.preset),w.config.performance.master_preset="AUTO",w.config.performance.auto_last_result=O,o();return}A(`Applying preset: ${m}…`),await w.performance.applyPresetSafe(m),A(`Preset ${m} applied`)}function J(m=""){var Y,ie,pe;const w=(Y=r())==null?void 0:Y.nativeBridge,O=((ie=w==null?void 0:w.activeCamera)==null?void 0:ie.call(w))||{},D=!!((pe=w==null?void 0:w.cameraRunning)!=null&&pe.call(w));N(h,D),N(y,m||(D?`${n("ON")} · ${O.label||n("Default camera")}`:n("OFF")),!0)}async function Se(m=!1){var O,D,Y;const w=(O=r())==null?void 0:O.nativeBridge;if(w!=null&&w.enumerateCameras){N($,!0);try{const ie=await w.enumerateCameras({requestPermission:m}),pe=w.activeCamera()||{};N(v,(ie||[]).map(nt=>({deviceId:nt.deviceId,label:nt.label})),!0);const Re=pe.deviceId||((D=Be.devices)==null?void 0:D.camera_device_id)||"";N(p,u(v).some(nt=>nt.deviceId===Re)?Re:((Y=u(v)[0])==null?void 0:Y.deviceId)||"",!0),N(g,!0),J(),A(u(v).length?`${u(v).length} camera${u(v).length>1?"s":""} detected`:"No cameras found")}catch{N(g,!0),J(n("Camera unavailable")),A("Camera enumeration failed")}finally{N($,!1)}}}async function lt(m){var Y,ie;const w=(Y=r())==null?void 0:Y.nativeBridge,O=((ie=m==null?void 0:m.currentTarget)==null?void 0:ie.value)??u(p),D=u(v).find(pe=>pe.deviceId===O);if(D){N($,!0);try{const pe={deviceId:D.deviceId,label:D.label};w.cameraRunning()?await w.switchCamera(pe):await w.setCameraPreference(pe),J(),A(`Webcam: ${D.label}`)}catch(pe){J("Error · "+pe.message),A("Webcam switch failed")}finally{N($,!1)}}}function Ge(){var O,D,Y,ie,pe,Re,nt,Ze;const m=(Y=(D=(O=r())==null?void 0:O.xraBackend)==null?void 0:D.snapshot)==null?void 0:Y.call(D),w=(m==null?void 0:m.capture)||((Ze=(nt=(Re=(pe=(ie=window.SA_bridge)==null?void 0:ie.backend)==null?void 0:pe.status)==null?void 0:Re.call(pe))==null?void 0:nt.backend)==null?void 0:Ze.capture);if(w!=null&&w.camera_busy){const Mt=(w.busy_processes&&w.busy_processes.length?w.busy_processes:w.busy_process?[w.busy_process]:[]).filter(Un=>!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(String(Un).trim()));if(Mt.length)return{busy:!0,proc:Mt.join(", ")}}if(w!=null&&w.last_error&&w.last_error.includes("Webcam occupata")){const Ce=w.last_error.match(/Webcam occupata da:\s*([^.]+)/i),Mt=Ce?Ce[1].trim():"";if(!/^(exe|nw|xra_browser|xr_animator|xra_server)$/i.test(Mt))return{busy:!0,proc:w.last_error}}return{busy:!1,proc:""}}function rt(){var m,w,O,D,Y,ie,pe,Re,nt;if(typeof((w=(m=r())==null?void 0:m.nativeBridge)==null?void 0:w.isAvatarReady)=="function")return r().nativeBridge.isAvatarReady();if((O=window.MMD_SA)!=null&&O.MMD_started){const Ze=(ie=(Y=(D=window.MMD_SA)==null?void 0:D.THREEX)==null?void 0:Y.get_model)==null?void 0:ie.call(Y,0);let Ce=Ze;if((Ze==null?void 0:Ze.type)==="MMD_dummy")try{Ce=Ze.model||null}catch{Ce=null}const Mt=((pe=Ce==null?void 0:Ce.model)==null?void 0:pe.scene)||(Ce==null?void 0:Ce.mesh)||(Ce==null?void 0:Ce.scene)||null;if(Ce&&!(Ze!=null&&Ze.loading)&&!Ce.loading&&!((nt=(Re=window.MMD_SA)==null?void 0:Re.THREEX)!=null&&nt._loading_model)&&Mt)return Mt.visible!==!1}return!1}function ye(){var w,O,D;const m=(w=r())==null?void 0:w.xraBackend;return!m||!m.active?!0:!!((D=(O=m.snapshot)==null?void 0:O.call(m))!=null&&D.ready)}function G(){if(b)return;const m=Ge();m.busy?(N(_,`Webcam in use by another application (${m.proc}). Close it to start tracking.`),A("Webcam is busy — close the other app")):N(_,""),rt()&&A("Avatar ready"),ye()&&A("Mocap backend ready")}function Te(){G(),!u(x)&&!k&&Date.now()-S>a&&L()}async function Qt(m){var O,D,Y;const w=((O=m==null?void 0:m.currentTarget)==null?void 0:O.value)??u(c);N(c,w,!0),N(C,!0);try{await F(w),r().events.emit("state",{path:"performance.master_preset",value:r().config.performance.master_preset}),jl()}catch(ie){console.error("[XRA START]",ie),A("Preset error: "+ie.message)}finally{N(C,!1),(Y=(D=r().ui)==null?void 0:D.refresh)==null||Y.call(D)}}function on(m){var w,O,D,Y;N(l,((w=m==null?void 0:m.currentTarget)==null?void 0:w.value)??u(l),!0),(Y=(D=(O=r())==null?void 0:O.i18n)==null?void 0:D.setLanguage)==null||Y.call(D,u(l))}async function ne(){var m,w;try{await((w=(m=r().nativeBridge)==null?void 0:m.openVrmPicker)==null?void 0:w.call(m))}catch(O){r().toast("VRM loader: "+O.message,"error",4500)}}ui(()=>{var O,D,Y,ie,pe,Re,nt,Ze,Ce,Mt,Un,Wo,Xo;const m=r();S=Date.now(),A("Initializing XR Animator VMC…"),N(l,((D=(O=m==null?void 0:m.config)==null?void 0:O.ui)==null?void 0:D.language)||"auto",!0),N(c,((ie=(Y=m==null?void 0:m.config)==null?void 0:Y.performance)==null?void 0:ie.master_preset)==="MINIMAL"?"ECO":((Re=(pe=m==null?void 0:m.config)==null?void 0:pe.performance)==null?void 0:Re.master_preset)||"CUSTOM",!0),N(d,((Ze=(nt=m==null?void 0:m.config)==null?void 0:nt.background)==null?void 0:Ze.path)||((Mt=(Ce=m==null?void 0:m.config)==null?void 0:Ce.background)==null?void 0:Mt.color)||"default",!0),J(),setTimeout(()=>Se(!1),100),I=setInterval(Te,250),window.addEventListener("MMDStarted",G),(Un=m.xraBackend)!=null&&Un.onStatus&&m.xraBackend.onStatus(G);const w=Fr=>{Fr.key==="Escape"&&L()};window.addEventListener("keydown",w,!0),G(),(Xo=(Wo=m.whenNativeReady)==null?void 0:Wo.call(m))==null||Xo.then(()=>{te.startupOpen&&Se(!1)});for(const Fr of["camera-started","camera-stopped","camera-switched"])E.push(m.events.on(Fr,()=>{te.startupOpen&&Se(!1)}));for(const Fr of["avatar-loading","avatar-changed","avatar-ready"])E.push(m.events.on(Fr,()=>G()));return()=>{I&&clearInterval(I),window.removeEventListener("MMDStarted",G),window.removeEventListener("keydown",w,!0);for(const Fr of E)try{Fr()}catch{}E=[]}});var oe=zc(),re=P(oe),Ee=P(re),qe=T(P(Ee),2),Ye=H(qe,!0),Jt=T(qe,2),er=H(Jt,!0),Fn=T(Ee,2),sn=P(Fn),ia=H(sn,!0),cr=T(sn,2),ln=H(cr,!0),cn=T(cr,2),_i=H(cn,!0),mi=T(cn,2),Vn=P(mi),gi=T(Vn);let wi;var Hn=T(mi,2),M=P(Hn),le=P(M);{var q=m=>{var w=Pn(),O=H(w,!0);w.value=w.__value="",de(D=>B(O,D),[()=>n("Loading cameras…")]),R(m,w)},be=m=>{var w=Pn(),O=H(w,!0);w.value=w.__value="",de(D=>B(O,D),[()=>n("No cameras found")]),R(m,w)},Me=m=>{var w=ue(),O=ae(w);Gt(O,17,()=>u(v),D=>D.deviceId,(D,Y)=>{var ie=Pn(),pe=H(ie,!0),Re={};de(()=>{B(pe,u(Y).label),Re!==(Re=u(Y).deviceId)&&(ie.value=(ie.__value=Re)??"")}),R(D,ie)}),R(m,w)};ot(le,m=>{u(g)?u(v).length?m(Me,-1):m(be,1):m(q)})}var ce;ar(M);var fe=T(M,2),Ue=P(fe);st(Ue,{name:"RefreshCw",size:14});var Ke=T(Hn,2);{var Bt=m=>{var w=Lc(),O=H(w,!0);de(()=>B(O,u(_))),R(m,w)};ot(Ke,m=>{u(_)&&m(Bt)})}var At=T(Ke,2),ct=H(At,!0),Ft=T(At,2),yr=P(Ft),un=H(yr,!0),_t=T(yr,2);Gt(_t,20,()=>i,m=>m,(m,w)=>{var O=Pn(),D=H(O,!0),Y={};de(()=>{B(D,w),Y!==(Y=w)&&(O.value=(O.__value=Y)??"")}),R(m,O)});var tr;ar(_t);var zr=T(Ft,2),Dr=P(zr),Br=H(Dr,!0),$t=T(Dr,2);Gt($t,21,()=>s,([m,w])=>m,(m,w)=>{var O=We(()=>ma(u(w),2));let D=()=>u(O)[0],Y=()=>u(O)[1];var ie=Pn(),pe=H(ie,!0),Re={};de(()=>{B(pe,Y()),Re!==(Re=D())&&(ie.value=(ie.__value=Re)??"")}),R(m,ie)});var ur;ar($t);var br=T(zr,2),fn=H(br,!0);de((m,w,O,D,Y,ie,pe,Re,nt,Ze,Ce,Mt)=>{B(Ye,m),B(er,w),B(ia,O),cr.disabled=u(x),B(ln,D),cn.disabled=u(x),B(_i,Y),B(Vn,`${ie??""} `),wi=Ie(gi,1,"dot svelte-x8svx4",null,wi,{on:u(h)}),M.disabled=u($)||u(x),ce!==(ce=u(p))&&(M.value=(M.__value=ce)??"",Lt(M,ce)),De(fe,"title",pe),De(fe,"aria-label",Re),fe.disabled=u($)||u(x),B(ct,nt),B(un,Ze),_t.disabled=u(C)||u(x),tr!==(tr=u(c))&&(_t.value=(_t.__value=tr)??"",Lt(_t,tr)),B(Br,Ce),$t.disabled=u(x),ur!==(ur=u(l))&&($t.value=($t.__value=ur)??"",Lt($t,ur)),br.disabled=u(x),B(fn,Mt)},[()=>n("Quick setup · changes apply immediately."),()=>u(z).join(`
`),()=>n("Quick start"),()=>u(x)?n("Starting…"):n("Start tracking"),()=>n("Load / change VRM…"),()=>n("Webcam"),()=>n("Refresh cameras"),()=>n("Refresh cameras"),()=>n("Options"),()=>n("Master preset"),()=>n("Language"),()=>n("Continue")]),Q("click",oe,L),Q("click",re,m=>m.stopPropagation()),ai("pointerenter",re,()=>{k=!0,S=Date.now()}),Q("pointermove",re,()=>{S=Date.now()}),ai("pointerleave",re,()=>{k=!1,S=Date.now()}),Q("click",cr,W),Q("click",cn,ne),Q("change",M,lt),Q("click",fe,()=>Se(!0)),Q("change",_t,Qt),Q("change",$t,on),Q("click",br,L),R(e,oe),Rt()}_r(["click","pointermove","change"]);var Bc=_e('<button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button>'),Fc=_e('<nav class="xra-dock group fixed left-2 top-1/2 z-[99990] flex w-[46px] max-h-[92vh] -translate-y-1/2 flex-col gap-0.5 overflow-hidden rounded-xl border border-white/10 bg-[var(--xra-ui-bg)] p-1.5 font-sans text-[12.5px] leading-snug text-[var(--xra-ui-fg)] shadow-[0_12px_40px_rgba(0,0,0,.55)] transition-[width] duration-200 hover:w-[232px]"><!> <div class="my-1 h-px bg-white/10"></div> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button> <button type="button"><span class="grid w-5 shrink-0 place-items-center"><!></span> <span> </span></button></nav>');function Vc(e,t){Ct(t,!0);const r=()=>window.XRA;let n=V(!1),i=V(!1),a=0;function o(){var oe,re,Ee,qe,Ye;const ne=r();if(ne){try{N(n,!!((re=(oe=ne.nativeBridge)==null?void 0:oe.cameraRunning)!=null&&re.call(oe)))}catch{}try{N(i,!!((Ye=(qe=(Ee=ne.recorder)==null?void 0:Ee.status)==null?void 0:qe.call(Ee))!=null&&Ye.active))}catch{}}}let s=V(!1),l=V("");async function c(){var oe,re,Ee,qe;if(u(s))return;N(s,!0);const ne=!u(n);N(l,ne?"Starting…":"Stopping…",!0);try{ne?(await To(),N(n,!0)):(await Vl(),N(n,!1))}catch(Ye){try{await((re=(oe=r().nativeBridge)==null?void 0:oe.forceStopCamera)==null?void 0:re.call(oe))}catch{}N(n,!1),(qe=(Ee=r()).toast)==null||qe.call(Ee,"Tracking: "+Ye.message,"warn",4500)}finally{N(s,!1),N(l,""),setTimeout(o,250)}}let d=V(!1),v=V("");async function g(){var oe,re;if(u(d))return;N(d,!0);const ne=!u(i);N(v,ne?"Starting…":"Stopping…",!0);try{ne?(await Hl(),N(i,!0)):(await Ul(),N(i,!1))}catch(Ee){N(i,!1),(re=(oe=r()).toast)==null||re.call(oe,"Recording: "+Ee.message,"warn",4500)}finally{N(d,!1),N(v,""),setTimeout(o,250)}}async function p(){var ne,oe,re,Ee;try{await((oe=(ne=r().nativeBridge)==null?void 0:ne.openVrmPicker)==null?void 0:oe.call(ne))}catch(qe){(Ee=(re=r()).toast)==null||Ee.call(re,"VRM loader: "+qe.message,"error",4500)}}function h(){var ne,oe;try{(oe=(ne=r().nativeBridge)==null?void 0:ne.showAbout)==null||oe.call(ne)}catch{}}const y=[{id:"ui",icon:"Monitor",label:"UI Settings"},{id:"camera",icon:"Camera",label:"Webcam settings"},{id:"avatar",icon:"User",label:"Model settings"},{id:"second_avatar",icon:"Globe",label:"Studio link"},{id:"stage",icon:"Landmark",label:"Environment + Camera"},{id:"background",icon:"Image",label:"Background"},{id:"lip",icon:"Mic",label:"Audio"}],_="hover:bg-white/10",x="flex-1 overflow-hidden opacity-0 transition-opacity duration-150 group-hover:opacity-100";ui(()=>(o(),a=setInterval(o,1e3),()=>clearInterval(a)));var C=Fc(),$=P(C);Gt($,17,()=>y,ne=>ne.id,(ne,oe)=>{var re=Bc();Ie(re,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var Ee=P(re),qe=P(Ee);st(qe,{get name(){return u(oe).icon},size:16});var Ye=T(Ee,2);Ie(Ye,1,qt(x));var Jt=H(Ye,!0);de((er,Fn)=>{De(re,"aria-label",er),B(Jt,Fn)},[()=>ve(u(oe).label),()=>ve(u(oe).label)]),Q("click",re,()=>zl(u(oe).id)),R(ne,re)});var z=T($,4),b=P(z),k=P(b);{let ne=We(()=>u(n)?"text-emerald-400":"");st(k,{name:"Webcam",size:16,get class(){return u(ne)}})}var S=T(b,2);Ie(S,1,qt(x));var I=H(S,!0),E=T(z,2),A=P(E),L=P(A);{let ne=We(()=>u(d)?"Circle":u(i)?"Square":"Circle"),oe=We(()=>u(i)?"text-red-400":"");st(L,{get name(){return u(ne)},size:16,get class(){return u(oe)}})}var W=T(A,2);Ie(W,1,qt(x));var F=H(W,!0),J=T(E,2);Ie(J,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var Se=P(J),lt=P(Se);st(lt,{name:"FolderOpen",size:16});var Ge=T(Se,2);Ie(Ge,1,qt(x));var rt=H(Ge,!0),ye=T(J,2);Ie(ye,1,"flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer hover:bg-white/10");var G=P(ye),Te=P(G);st(Te,{name:"Info",size:16});var Qt=T(G,2);Ie(Qt,1,qt(x));var on=H(Qt,!0);de((ne,oe,re,Ee,qe,Ye,Jt,er)=>{Ie(z,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${u(n)?"bg-emerald-500/20 hover:bg-emerald-500/30":_} ${u(s)?"opacity-60":""}`),De(z,"aria-label",ne),z.disabled=u(s),B(I,oe),Ie(E,1,`flex items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-1.5 text-left text-inherit whitespace-nowrap cursor-pointer ${u(i)?"bg-red-500/30 hover:bg-red-500/40 text-red-200":_} ${u(d)?"opacity-60":""}`),De(E,"aria-label",re),E.disabled=u(d),B(F,Ee),De(J,"aria-label",qe),B(rt,Ye),De(ye,"aria-label",Jt),B(on,er)},[()=>ve("Tracking"),()=>u(s)?ve(u(l)):u(n)?ve("Tracking on"):ve("Tracking off"),()=>ve("Record"),()=>u(d)?ve(u(v)):u(i)?ve("Stop recording"):ve("Record"),()=>ve("Load / change VRM…"),()=>ve("Load / change VRM…"),()=>ve("About"),()=>ve("About")]),ai("pointerenter",C,()=>{te.dockExpanded=!0}),ai("pointerleave",C,()=>{te.dockExpanded=!1}),Q("click",z,c),Q("click",E,g),Q("click",J,p),Q("click",ye,h),R(e,C),Rt()}_r(["click"]);var Hc=_e('<div class="flex shrink-0 flex-wrap items-center gap-x-2.5 gap-y-0.5 border-y border-white/10 bg-black/25 px-2 py-1 text-[10px] leading-none tabular-nums"><span class="text-[var(--xra-ui-dim)]">CAM <b class="font-semibold text-[var(--xra-ui-fg)]"> </b></span> <span class="text-[var(--xra-ui-dim)]">INF <b class="font-semibold text-[var(--xra-ui-fg)]"> </b> </span> <span class="text-[var(--xra-ui-dim)]">POSE <b> </b></span> <span class="text-[var(--xra-ui-dim)]">FACE <b> </b></span> <span class="text-[var(--xra-ui-dim)]">L <b> </b></span> <span class="text-[var(--xra-ui-dim)]">R <b> </b></span></div>'),Uc=_e('<div class="absolute inset-0 z-30 grid place-items-center bg-black text-[12px] text-[var(--xra-ui-fg)]"> </div>'),jc=_e('<div class="xra-mocap-window fixed z-[99991] flex flex-col overflow-hidden rounded-xl border border-white/15 bg-[var(--xra-ui-bg)] text-[var(--xra-ui-fg)] shadow-[0_16px_48px_rgba(0,0,0,.6)] font-sans"><header class="flex shrink-0 cursor-move touch-none select-none items-center gap-2 px-2 py-1.5"><!> <span class="flex-1 text-[12px] font-semibold"> </span> <span class="flex items-center gap-1 text-[10.5px] tabular-nums text-[var(--xra-ui-dim)]"><span></span> </span> <select class="rounded-md border border-white/15 bg-[#101214] px-1.5 py-0.5 text-[11px] text-[var(--xra-ui-fg)]"><option> </option><option> </option><option> </option><option> </option></select> <button type="button" class="rounded-md border border-white/15 bg-white/5 px-1.5 py-0.5 cursor-pointer text-[var(--xra-ui-fg)]"><!></button></header> <!> <div class="relative min-h-0 flex-1 overflow-hidden bg-black"><!> <div class="absolute bottom-0 right-0 z-20 h-5 w-5 cursor-nwse-resize touch-none"></div></div></div>');function Wc(e,t){Ct(t,!0);const r=()=>window.XRA,n=Fe("ui.mocap_window",{})||{};let i=V(Xe(Number.isFinite(n.x)?n.x:48)),a=V(Xe(Number.isFinite(n.y)?n.y:96)),o=V(Xe(Number.isFinite(n.w)?n.w:360)),s=V(Xe(Number.isFinite(n.h)?n.h:270)),l=V(void 0),c=V(!1),d=V(0),v=null,g=0,p=0,h=V("—"),y=V("—"),_=V(0),x=V(null),C=V(null),$=V(null),z=V(null),b=0;function k(M){if(!Array.isArray(M))return"—";const le=Number(M[0]),q=Number(M[1]);return le>0&&q>0?`${Math.round(le)}×${Math.round(q)}`:"—"}function S(M){if(!Array.isArray(M)||!M.length)return null;let le=0,q=0;for(const be of M){const Me=Number((be==null?void 0:be.score)??(be==null?void 0:be.visibility));Number.isFinite(Me)&&(le+=Me,q++)}return q?le/q:null}function I(M){if(M==null||M==="")return null;const le=Number(M);return Number.isFinite(le)?le:null}function E(M){return Number.isFinite(M)?`${Math.round(M*100)}%`:"—"}function A(M){return Number.isFinite(M)?M>=.75?"text-emerald-400":M>=.5?"text-amber-400":"text-red-400":"text-[var(--xra-ui-dim)]"}function L(){var Ft,yr,un,_t,tr,zr,Dr,Br,$t,ur,br,fn,m;const M=(Ft=r())==null?void 0:Ft.xraBackend,q=(((yr=M==null?void 0:M.snapshot)==null?void 0:yr.call(M))||{}).capture||{},be=performance.now();if(be-b>1e3){b=be;try{(un=M==null?void 0:M.refreshStatus)==null||un.call(M)}catch{}}let Me=k((_t=q.capture_geometry)!=null&&_t[0]?q.capture_geometry:q.geometry);if(Me==="—"){const w=(Dr=(zr=(tr=window.System)==null?void 0:tr._browser)==null?void 0:zr.camera)==null?void 0:Dr.video_canvas;w!=null&&w.width&&(w!=null&&w.height)&&(Me=`${w.width}×${w.height}`)}N(h,Me,!0),N(y,k((Br=q.inference_geometry)!=null&&Br[0]?q.inference_geometry:q.infer_geometry),!0),N(_,Number(q.inference_ema_ms||0),!0);const ce=(($t=q.landmarks)==null?void 0:$t.raw)||null,fe=((ur=q.landmarks)==null?void 0:ur.output)||null;let Ue=I((ce==null?void 0:ce.score_median)??(fe==null?void 0:fe.score_median)),Ke=I((fe==null?void 0:fe.face_confidence)??(ce==null?void 0:ce.face_confidence)),Bt=I((fe==null?void 0:fe.left_hand_confidence)??(ce==null?void 0:ce.left_hand_confidence)),At=I((fe==null?void 0:fe.right_hand_confidence)??(ce==null?void 0:ce.right_hand_confidence));const ct=(br=window.SA_bridge)==null?void 0:br.backend;ct&&(Ue==null&&(Ue=I(S((fn=ct.latest)==null?void 0:fn.keypoints))),Ke==null&&ct.face&&(Ke=I(ct.face.faceInViewConfidence)??((m=ct.face.landmarks)!=null&&m.length?.95:null)),Bt==null&&(Bt=S(ct.leftHand)),At==null&&(At=S(ct.rightHand))),N(x,Ue,!0),N(C,Ke,!0),N($,Bt,!0),N(z,At,!0)}const W=We(()=>Fe("ui.mocap_view","off")!=="off"),F=We(()=>u(W)&&(Fe("ui.mocap_visibility","always")!=="auto"||u(c)));function J(){ft("ui.mocap_window",{x:Math.round(u(i)),y:Math.round(u(a)),w:Math.round(u(o)),h:Math.round(u(s))})}function Se(){var M,le,q;try{(q=(le=(M=r())==null?void 0:M.nativeBridge)==null?void 0:le.updateMocapWindow)==null||q.call(le)}catch{}}function lt(M,le){M.preventDefault();const q=M.clientX,be=M.clientY,Me=u(i),ce=u(a),fe=u(o),Ue=u(s),Ke=At=>{const ct=At.clientX-q,Ft=At.clientY-be;le==="move"?(N(i,Math.max(0,Math.min(window.innerWidth-80,Me+ct)),!0),N(a,Math.max(0,Math.min(window.innerHeight-30,ce+Ft)),!0)):(N(o,Math.max(200,Math.min(window.innerWidth-u(i),fe+ct)),!0),N(s,Math.max(130,Math.min(window.innerHeight-u(a),Ue+Ft)),!0))},Bt=()=>{window.removeEventListener("pointermove",Ke),window.removeEventListener("pointerup",Bt),J()};window.addEventListener("pointermove",Ke),window.addEventListener("pointerup",Bt)}Ar(()=>{var le,q,be;const M=u(l);if(M){try{(be=(q=(le=r())==null?void 0:le.nativeBridge)==null?void 0:q.attachMocapWindow)==null||be.call(q,M)}catch{}return()=>{var Me,ce,fe;try{(fe=(ce=(Me=r())==null?void 0:Me.nativeBridge)==null?void 0:ce.detachMocapWindow)==null||fe.call(ce)}catch{}}}}),Ar(()=>{u(i),u(a),u(o),u(s),u(c),u(F),u(F)&&Se()}),ui(()=>{const M=()=>{var be,Me,ce,fe,Ue,Ke;N(c,!!((ce=(Me=(be=r())==null?void 0:be.nativeBridge)==null?void 0:Me.cameraRunning)!=null&&ce.call(Me)));const le=Number((((Ke=(Ue=(fe=r())==null?void 0:fe.xraBackend)==null?void 0:Ue.snapshot)==null?void 0:Ke.call(Ue))||{}).framesReceived||0),q=performance.now();v!=null&&q>g&&N(d,Math.max(0,(le-v)/((q-g)/1e3)),!0),v=le,g=q,L(),u(F)&&Se()};return M(),p=setInterval(M,500),window.addEventListener("resize",Se),()=>{clearInterval(p),window.removeEventListener("resize",Se)}});var Ge=jc(),rt=P(Ge),ye=P(rt);st(ye,{name:"Activity",size:14});var G=T(ye,2),Te=H(G,!0),Qt=T(G,2),on=P(Qt);let ne;var oe=T(on),re=T(Qt,2),Ee=P(re),qe=H(Ee,!0);Ee.value=Ee.__value="both";var Ye=T(Ee),Jt=H(Ye,!0);Ye.value=Ye.__value="wireframe";var er=T(Ye),Fn=H(er,!0);er.value=er.__value="video";var sn=T(er),ia=H(sn,!0);sn.value=sn.__value="off";var cr;ar(re);var ln=T(re,2),cn=P(ln);st(cn,{name:"X",size:13});var _i=T(rt,2);{var mi=M=>{var le=Hc(),q=P(le),be=T(P(q)),Me=H(be,!0),ce=T(q,2),fe=T(P(ce)),Ue=H(fe,!0),Ke=T(fe,1,!0),Bt=T(ce,2),At=T(P(Bt)),ct=H(At,!0),Ft=T(Bt,2),yr=T(P(Ft)),un=H(yr,!0),_t=T(Ft,2),tr=T(P(_t)),zr=H(tr,!0),Dr=T(_t,2),Br=T(P(Dr)),$t=H(Br,!0);de((ur,br,fn,m,w,O,D,Y,ie)=>{B(Me,u(h)),B(Ue,u(y)),B(Ke,ur),Ie(At,1,br),B(ct,fn),Ie(yr,1,m),B(un,w),Ie(tr,1,O),B(zr,D),Ie(Br,1,Y),B($t,ie)},[()=>u(_)>0?` · ${Math.round(u(_))}ms`:"",()=>qt(A(u(x))),()=>E(u(x)),()=>qt(A(u(C))),()=>E(u(C)),()=>qt(A(u($))),()=>E(u($)),()=>qt(A(u(z))),()=>E(u(z))]),R(M,le)};ot(_i,M=>{u(c)&&M(mi)})}var Vn=T(_i,2),gi=P(Vn);{var wi=M=>{var le=Uc(),q=H(le,!0);de(be=>B(q,be),[()=>ve("Tracking is off")]),R(M,le)};ot(gi,M=>{u(c)||M(wi)})}var Hn=T(gi,2);ra(Vn,M=>N(l,M),()=>u(l)),de((M,le,q,be,Me,ce,fe,Ue,Ke)=>{si(Ge,`display:${u(F)?"flex":"none"}; left:${u(i)??""}px; top:${u(a)??""}px; width:${u(o)??""}px; height:${u(s)??""}px;`),B(Te,M),ne=Ie(on,1,"h-1.5 w-1.5 rounded-full",null,ne,{"bg-[var(--xra-ui-accent)]":u(c),"bg-[#565656]":!u(c)}),B(oe,` ${le??""}`),B(qe,q),B(Jt,be),B(Fn,Me),B(ia,ce),cr!==(cr=fe)&&(re.value=(re.__value=cr)??"",Lt(re,cr)),De(ln,"title",Ue),De(Hn,"title",Ke)},[()=>ve("Mocap"),()=>u(c)?u(d)>=1?`${Math.round(u(d))} fps`:"LIVE":"OFF",()=>ve("Webcam + skeleton"),()=>ve("Skeleton only"),()=>ve("Webcam only"),()=>ve("Off"),()=>Fe("ui.mocap_view","off"),()=>ve("Close"),()=>ve("Resize")]),Q("pointerdown",rt,M=>lt(M,"move")),Q("change",re,M=>ft("ui.mocap_view",M.currentTarget.value)),Q("pointerdown",re,M=>M.stopPropagation()),Q("click",ln,()=>ft("ui.mocap_view","off")),Q("pointerdown",ln,M=>M.stopPropagation()),Q("pointerdown",Hn,M=>{M.stopPropagation(),lt(M,"resize")}),R(e,Ge),Rt()}_r(["pointerdown","change","click"]);var Xc=_e('<aside class="xra-section-popup fixed top-1/2 z-[99992] flex max-h-[72vh] w-[320px] -translate-y-1/2 flex-col overflow-hidden rounded-xl border border-white/12 bg-[var(--xra-ui-bg)] text-[12.5px] leading-[1.45] text-[var(--xra-ui-fg)] shadow-[0_16px_48px_rgba(0,0,0,.6)] font-sans transition-[left] duration-200"><header class="flex shrink-0 items-center gap-2 bg-[var(--xra-ui-bg2)] px-3 py-2 shadow-[inset_0_-1px_0_var(--xra-ui-accent-soft)]"><!> <span class="text-[12.5px] font-semibold text-[#cfcfcf]"> </span></header> <div class="min-h-0 flex-1 overflow-auto px-2.5 py-2"><!></div></aside>');function Gc(e,t){Ct(t,!0);let r;Ar(()=>{const d=g=>{const p=g.target;r&&p instanceof Node&&r.contains(p)||p instanceof Element&&p.closest(".xra-dock")||(te.popupSection=null)},v=g=>{g.key==="Escape"&&(te.popupSection=null)};return document.addEventListener("pointerdown",d,!0),window.addEventListener("keydown",v,!0),()=>{document.removeEventListener("pointerdown",d,!0),window.removeEventListener("keydown",v,!0)}});var n=Xc(),i=P(n),a=P(i);st(a,{get name(){return t.section.icon},size:14,class:"text-[var(--xra-ui-dim)]"});var o=T(a,2),s=H(o,!0),l=T(i,2),c=P(l);Do(c,{get section(){return t.section}}),ra(n,d=>r=d,()=>r),de(d=>{si(n,`left:${te.dockExpanded?248:62}px;`),B(s,d)},[()=>ve(t.section.title)]),R(e,n),Rt()}var qc=_e("<option> </option>"),Yc=_e('<div class="status"> </div>'),Kc=_e('<div><div class="head"><span class="title">Mocap backend</span> <span class="prov" title="Active backend / execution provider"> </span></div> <div class="row"><select></select> <button type="button" title="Refresh backends" aria-label="Refresh backends"><!></button></div> <!></div>');function Zc(e,t){Ct(t,!0);const r=()=>window.XRA;let n=V(Xe([])),i=V(!1),a=V(""),o=V(""),s=V("");const l=We(()=>{var E;return((E=Be.performance)==null?void 0:E.tracker_backend)||"mediapipe-tasks-landmarker"});async function c(){var A,L,W;const E=(A=r())==null?void 0:A.xraBackend;if(E){try{N(n,await((L=E.listBackends)==null?void 0:L.call(E))||[],!0)}catch{}try{const F=((W=E.snapshot)==null?void 0:W.call(E))||{};N(o,F.model||"",!0),N(s,F.providerHuman||F.provider||"",!0)}catch{}}}async function d(E){const L=await(await fetch("/__xra_backend/download",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:E})})).json().catch(()=>({}));if(!L.ok)throw new Error(L.error||"download failed")}async function v(E,A=3e4){var F;const L=r().xraBackend,W=performance.now()+A;for(;performance.now()<W;){const J=((F=L.snapshot)==null?void 0:F.call(L))||{};if(J.model===E&&J.ready)return!0;if(J.model===E&&J.lastError)throw new Error(J.lastError);await new Promise(Se=>setTimeout(Se,250))}return!1}async function g(E){const A=E.currentTarget.value;if(A!==u(l)){N(i,!0);try{const L=u(n).find(F=>F.id===A);L&&L.installed===!1&&(N(a,"Downloading models…"),await d(A),await c()),N(a,"Switching…"),r().xraBackend.select(A),await v(A)?(ft("performance.tracker_backend",A),N(a,"")):N(a,"Not ready yet")}catch(L){N(a,"Error: "+L.message)}finally{N(i,!1),c()}}}ui(c);var p=Kc();let h;var y=P(p),_=T(P(y),2),x=H(_,!0),C=T(y,2),$=P(C);Gt($,21,()=>u(n),E=>E.id,(E,A)=>{var L=qc(),W=H(L),F={};de(()=>{B(W,`${u(A).label??""}${u(A).installed===!1?" · needs download":""}`),F!==(F=u(A).id)&&(L.value=(L.__value=F)??"")}),R(E,L)});var z;ar($);var b=T($,2),k=P(b);st(k,{name:"RefreshCw",size:13});var S=T(C,2);{var I=E=>{var A=Yc(),L=H(A,!0);de(()=>B(L,u(a))),R(E,A)};ot(S,E=>{u(a)&&E(I)})}de(()=>{h=Ie(p,1,"xra-backend",null,h,{busy:u(i)}),B(x,u(s)||u(o)||"—"),$.disabled=u(i),z!==(z=u(l))&&($.value=($.__value=z)??"",Lt($,z)),b.disabled=u(i)}),Q("change",$,g),Q("click",b,c),R(e,p),Rt()}_r(["change","click"]);var Qc=_e('<aside class="xra-panel"><header class="xra-panel-head"><strong>XR Animator</strong> <span class="xra-spacer"></span> <button><!></button> <button title="Close panel"><!></button></header> <div class="xra-panel-search"><input type="search" placeholder="Search settings…"/></div> <div class="xra-panel-body"><!> <!></div></aside>'),Jc=_e('<button class="xra-panel-launcher"><!></button>'),eu=_e("<!> <!> <!> <!> <!>",1);function tu(e,t){Ct(t,!0),Wl();const r=We(()=>Kl(Be));var n=eu(),i=ae(n);{var a=y=>{Vc(y,{})};ot(i,y=>{te.ready&&y(a)})}var o=T(i,2);{var s=y=>{const _=We(()=>u(r).find(z=>z.id===te.popupSection));var x=ue(),C=ae(x);{var $=z=>{Gc(z,{get section(){return u(_)}})};ot(C,z=>{u(_)&&z($)})}R(y,x)};ot(o,y=>{te.ready&&te.popupSection&&y(s)})}var l=T(o,2);{var c=y=>{Wc(y,{})};ot(l,y=>{te.ready&&y(c)})}var d=T(l,2);{var v=y=>{var L,W,F;var _=Qc(),x=P(_),C=T(P(x),4);De(C,"title",((F=(W=(L=window.XRA)==null?void 0:L.i18n)==null?void 0:W.t)==null?void 0:F.call(W,"Clean screen mode (Press Esc to restore)"))||"Clean screen (Esc)");var $=P(C);st($,{name:"EyeOff",size:15});var z=T(C,2),b=P(z);st(b,{name:"X",size:15});var k=T(x,2),S=P(k),I=T(k,2),E=P(I);Zc(E,{});var A=T(E,2);Gt(A,17,()=>u(r),J=>J.id,(J,Se)=>{Ic(J,{get section(){return u(Se)}})}),de(()=>Rn(S,te.search)),Q("click",C,function(...J){di==null||di.apply(this,J)}),Q("click",z,()=>te.panelOpen=!1),Q("input",S,J=>te.search=J.currentTarget.value),R(y,_)},g=y=>{var _=Jc(),x=P(_);st(x,{name:"Settings",size:16}),Q("click",_,()=>{te.panelOpen=!0,Co()}),R(y,_)};ot(d,y=>{te.ready&&te.panelOpen?y(v):te.ready&&y(g,1)})}var p=T(d,2);{var h=y=>{Dc(y,{})};ot(p,y=>{te.ready&&te.startupOpen&&y(h)})}R(e,n),Rt()}_r(["click","input"]),window.XRA_SVELTE_UI=!0;function Vo(){let e=document.getElementById("XRA_SVELTE");e||(e=document.createElement("div"),e.id="XRA_SVELTE",document.body.appendChild(e)),vl(tu,{target:e})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Vo):Vo()})();

})();
