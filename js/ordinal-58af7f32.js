import{i as e}from"./init-cf76ae07.js";class t extends Map{constructor(e,t=r){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),null!=e)for(const[n,r]of e)this.set(n,r)}get(e){return super.get(n(this,e))}has(e){return super.has(n(this,e))}set(e,t){return super.set(function({_intern:e,_key:t},n){const r=t(n);return e.has(r)?e.get(r):(e.set(r,n),n)}(this,e),t)}delete(e){return super.delete(function({_intern:e,_key:t},n){const r=t(n);e.has(r)&&(n=e.get(r),e.delete(r));return n}(this,e))}}function n({_intern:e,_key:t},n){const r=t(n);return e.has(r)?e.get(r):n}function r(e){return null!==e&&"object"==typeof e?e.valueOf():e}const s=Symbol("implicit");function u(){var n=new t,r=[],i=[],o=s;function c(e){let t=n.get(e);if(void 0===t){if(o!==s)return o;n.set(e,t=r.push(e)-1)}return i[t%i.length]}return c.domain=function(e){if(!arguments.length)return r.slice();r=[],n=new t;for(const t of e)n.has(t)||n.set(t,r.push(t)-1);return c},c.range=function(e){return arguments.length?(i=Array.from(e),c):i.slice()},c.unknown=function(e){return arguments.length?(o=e,c):o},c.copy=function(){return u(r,i).unknown(o)},e.apply(c,arguments),c}export{u as o};