"use strict";var q=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var l=q(function(A,g){
function P(e,r,a,s,t,v,f){var n,u,o,c,i,y,x;for(n=r.data,u=t.data,o=r.accessors[0],c=t.accessors[0],i=s,y=f,x=0;x<e;x++){if(o(n,i)>c(u,y))return x;i+=a,y+=v}return-1}g.exports=P
});var d=q(function(B,b){
var p=require('@stdlib/array-base-arraylike2object/dist'),j=l();function k(e,r,a,s,t,v,f){var n,u,o,c,i;if(e<=0)return-1;if(o=p(r),c=p(t),o.accessorProtocol||c.accessorProtocol)return j(e,o,a,s,c,v,f);for(n=s,u=f,i=0;i<e;i++){if(r[n]>t[u])return i;n+=a,u+=v}return-1}b.exports=k
});var I=q(function(C,G){
var h=require('@stdlib/strided-base-stride2offset/dist'),m=d();function O(e,r,a,s,t){return m(e,r,a,h(e,a),s,t,h(e,t))}G.exports=O
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),T=I(),w=d();R(T,"ndarray",w);module.exports=T;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
