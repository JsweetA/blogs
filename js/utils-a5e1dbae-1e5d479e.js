var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var e=Uint8Array,t=Uint16Array,a=Int32Array,f=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),o=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),i=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),l=function(r,n){for(var e=new t(31),f=0;f<31;++f)e[f]=n+=1<<r[f-1];var o=new a(e[30]);for(f=1;f<30;++f)for(var i=e[f];i<e[f+1];++i)o[i]=i-e[f]<<5|f;return{b:e,r:o}},u=l(f,2),v=u.b,c=u.r;v[28]=258,c[258]=28;for(var s=l(o,0),d=s.b,h=s.r,g=new t(32768),w=0;w<32768;++w){var b=(43690&w)>>1|(21845&w)<<1;b=(61680&(b=(52428&b)>>2|(13107&b)<<2))>>4|(3855&b)<<4,g[w]=((65280&b)>>8|(255&b)<<8)>>1}var y=function(r,n,e){for(var a=r.length,f=0,o=new t(n);f<a;++f)r[f]&&++o[r[f]-1];var i,l=new t(n);for(f=1;f<n;++f)l[f]=l[f-1]+o[f-1]<<1;if(e){i=new t(1<<n);var u=15-n;for(f=0;f<a;++f)if(r[f])for(var v=f<<4|r[f],c=n-r[f],s=l[r[f]-1]++<<c,d=s|(1<<c)-1;s<=d;++s)i[g[s]>>u]=v}else for(i=new t(a),f=0;f<a;++f)r[f]&&(i[f]=g[l[r[f]-1]++]>>15-r[f]);return i},m=new e(288);for(w=0;w<144;++w)m[w]=8;for(w=144;w<256;++w)m[w]=9;for(w=256;w<280;++w)m[w]=7;for(w=280;w<288;++w)m[w]=8;var p=new e(32);for(w=0;w<32;++w)p[w]=5;var M=y(m,9,0),C=y(m,9,1),x=y(p,5,0),k=y(p,5,1),T=function(r){for(var n=r[0],e=1;e<r.length;++e)r[e]>n&&(n=r[e]);return n},S=function(r,n,e){var t=n/8|0;return(r[t]|r[t+1]<<8)>>(7&n)&e},A=function(r,n){var e=n/8|0;return(r[e]|r[e+1]<<8|r[e+2]<<16)>>(7&n)},E=function(r){return(r+7)/8|0},z=function(r,n,t){(null==n||n<0)&&(n=0),(null==t||t>r.length)&&(t=r.length);var a=new e(t-n);return a.set(r.subarray(n,t)),a},U=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],O=function(r,n,e){var t=new Error(n||U[r]);if(t.code=r,Error.captureStackTrace&&Error.captureStackTrace(t,O),!e)throw t;return t},D=function(r,n,t,a){var l=r.length,u=a?a.length:0;if(!l||n.f&&!n.l)return t||new e(0);var c=!t||2!=n.i,s=n.i;t||(t=new e(3*l));var h=function(r){var n=t.length;if(r>n){var a=new e(Math.max(2*n,r));a.set(t),t=a}},g=n.f||0,w=n.p||0,b=n.b||0,m=n.l,p=n.d,M=n.m,x=n.n,U=8*l;do{if(!m){g=S(r,w,1);var D=S(r,w+1,3);if(w+=3,!D){var F=r[(J=E(w)+4)-4]|r[J-3]<<8,I=J+F;if(I>l){s&&O(0);break}c&&h(b+F),t.set(r.subarray(J,I),b),n.b=b+=F,n.p=w=8*I,n.f=g;continue}if(1==D)m=C,p=k,M=9,x=5;else if(2==D){var _=S(r,w,31)+257,j=S(r,w+10,15)+4,P=_+S(r,w+5,31)+1;w+=14;for(var R=new e(P),W=new e(19),q=0;q<j;++q)W[i[q]]=S(r,w+3*q,7);w+=3*j;var B=T(W),G=(1<<B)-1,H=y(W,B,1);for(q=0;q<P;){var J,K=H[S(r,w,G)];if(w+=15&K,(J=K>>4)<16)R[q++]=J;else{var L=0,N=0;for(16==J?(N=3+S(r,w,3),w+=2,L=R[q-1]):17==J?(N=3+S(r,w,7),w+=3):18==J&&(N=11+S(r,w,127),w+=7);N--;)R[q++]=L}}var Q=R.subarray(0,_),V=R.subarray(_);M=T(Q),x=T(V),m=y(Q,M,1),p=y(V,x,1)}else O(1);if(w>U){s&&O(0);break}}c&&h(b+131072);for(var X=(1<<M)-1,Y=(1<<x)-1,Z=w;;Z=w){var $=(L=m[A(r,w)&X])>>4;if((w+=15&L)>U){s&&O(0);break}if(L||O(2),$<256)t[b++]=$;else{if(256==$){Z=w,m=null;break}var rr=$-254;if($>264){var nr=f[q=$-257];rr=S(r,w,(1<<nr)-1)+v[q],w+=nr}var er=p[A(r,w)&Y],tr=er>>4;er||O(3),w+=15&er;V=d[tr];if(tr>3){nr=o[tr];V+=A(r,w)&(1<<nr)-1,w+=nr}if(w>U){s&&O(0);break}c&&h(b+131072);var ar=b+rr;if(b<V){var fr=u-V,or=Math.min(V,ar);for(fr+b<0&&O(3);b<or;++b)t[b]=a[fr+b]}for(;b<ar;b+=4)t[b]=t[b-V],t[b+1]=t[b+1-V],t[b+2]=t[b+2-V],t[b+3]=t[b+3-V];b=ar}}n.l=m,n.p=Z,n.b=b,n.f=g,m&&(g=1,n.m=M,n.d=p,n.n=x)}while(!g);return b==t.length?t:z(t,0,b)},F=function(r,n,e){e<<=7&n;var t=n/8|0;r[t]|=e,r[t+1]|=e>>8},I=function(r,n,e){e<<=7&n;var t=n/8|0;r[t]|=e,r[t+1]|=e>>8,r[t+2]|=e>>16},_=function(r,n){for(var a=[],f=0;f<r.length;++f)r[f]&&a.push({s:f,f:r[f]});var o=a.length,i=a.slice();if(!o)return{t:G,l:0};if(1==o){var l=new e(a[0].s+1);return l[a[0].s]=1,{t:l,l:1}}a.sort((function(r,n){return r.f-n.f})),a.push({s:-1,f:25001});var u=a[0],v=a[1],c=0,s=1,d=2;for(a[0]={s:-1,f:u.f+v.f,l:u,r:v};s!=o-1;)u=a[a[c].f<a[d].f?c++:d++],v=a[c!=s&&a[c].f<a[d].f?c++:d++],a[s++]={s:-1,f:u.f+v.f,l:u,r:v};var h=i[0].s;for(f=1;f<o;++f)i[f].s>h&&(h=i[f].s);var g=new t(h+1),w=j(a[s-1],g,0);if(w>n){f=0;var b=0,y=w-n,m=1<<y;for(i.sort((function(r,n){return g[n.s]-g[r.s]||r.f-n.f}));f<o;++f){var p=i[f].s;if(!(g[p]>n))break;b+=m-(1<<w-g[p]),g[p]=n}for(b>>=y;b>0;){var M=i[f].s;g[M]<n?b-=1<<n-g[M]++-1:++f}for(;f>=0&&b;--f){var C=i[f].s;g[C]==n&&(--g[C],++b)}w=n}return{t:new e(g),l:w}},j=function(r,n,e){return-1==r.s?Math.max(j(r.l,n,e+1),j(r.r,n,e+1)):n[r.s]=e},P=function(r){for(var n=r.length;n&&!r[--n];);for(var e=new t(++n),a=0,f=r[0],o=1,i=function(r){e[a++]=r},l=1;l<=n;++l)if(r[l]==f&&l!=n)++o;else{if(!f&&o>2){for(;o>138;o-=138)i(32754);o>2&&(i(o>10?o-11<<5|28690:o-3<<5|12305),o=0)}else if(o>3){for(i(f),--o;o>6;o-=6)i(8304);o>2&&(i(o-3<<5|8208),o=0)}for(;o--;)i(f);o=1,f=r[l]}return{c:e.subarray(0,a),n:n}},R=function(r,n){for(var e=0,t=0;t<n.length;++t)e+=r[t]*n[t];return e},W=function(r,n,e){var t=e.length,a=E(n+2);r[a]=255&t,r[a+1]=t>>8,r[a+2]=255^r[a],r[a+3]=255^r[a+1];for(var f=0;f<t;++f)r[a+f+4]=e[f];return 8*(a+4+t)},q=function(r,n,e,a,l,u,v,c,s,d,h){F(n,h++,e),++l[256];for(var g=_(l,15),w=g.t,b=g.l,C=_(u,15),k=C.t,T=C.l,S=P(w),A=S.c,E=S.n,z=P(k),U=z.c,O=z.n,D=new t(19),j=0;j<A.length;++j)++D[31&A[j]];for(j=0;j<U.length;++j)++D[31&U[j]];for(var q=_(D,7),B=q.t,G=q.l,H=19;H>4&&!B[i[H-1]];--H);var J,K,L,N,Q=d+5<<3,V=R(l,m)+R(u,p)+v,X=R(l,w)+R(u,k)+v+14+3*H+R(D,B)+2*D[16]+3*D[17]+7*D[18];if(s>=0&&Q<=V&&Q<=X)return W(n,h,r.subarray(s,s+d));if(F(n,h,1+(X<V)),h+=2,X<V){J=y(w,b,0),K=w,L=y(k,T,0),N=k;var Y=y(B,G,0);F(n,h,E-257),F(n,h+5,O-1),F(n,h+10,H-4),h+=14;for(j=0;j<H;++j)F(n,h+3*j,B[i[j]]);h+=3*H;for(var Z=[A,U],$=0;$<2;++$){var rr=Z[$];for(j=0;j<rr.length;++j){var nr=31&rr[j];F(n,h,Y[nr]),h+=B[nr],nr>15&&(F(n,h,rr[j]>>5&127),h+=rr[j]>>12)}}}else J=M,K=m,L=x,N=p;for(j=0;j<c;++j){var er=a[j];if(er>255){I(n,h,J[(nr=er>>18&31)+257]),h+=K[nr+257],nr>7&&(F(n,h,er>>23&31),h+=f[nr]);var tr=31&er;I(n,h,L[tr]),h+=N[tr],tr>3&&(I(n,h,er>>5&8191),h+=o[tr])}else I(n,h,J[er]),h+=K[er]}return I(n,h,J[256]),h+K[256]},B=new a([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),G=new e(0),H=function(){var r=1,n=0;return{p:function(e){for(var t=r,a=n,f=0|e.length,o=0;o!=f;){for(var i=Math.min(o+2655,f);o<i;++o)a+=t+=e[o];t=(65535&t)+15*(t>>16),a=(65535&a)+15*(a>>16)}r=t,n=a},d:function(){return(255&(r%=65521))<<24|(65280&r)<<8|(255&(n%=65521))<<8|n>>8}}},J=function(r,n,i,l,u){if(!u&&(u={l:1},n.dictionary)){var v=n.dictionary.subarray(-32768),s=new e(v.length+r.length);s.set(v),s.set(r,v.length),r=s,u.w=v.length}return function(r,n,i,l,u,v){var s=v.z||r.length,d=new e(l+s+5*(1+Math.ceil(s/7e3))+u),g=d.subarray(l,d.length-u),w=v.l,b=7&(v.r||0);if(n){b&&(g[0]=v.r>>3);for(var y=B[n-1],m=y>>13,p=8191&y,M=(1<<i)-1,C=v.p||new t(32768),x=v.h||new t(M+1),k=Math.ceil(i/3),T=2*k,S=function(n){return(r[n]^r[n+1]<<k^r[n+2]<<T)&M},A=new a(25e3),U=new t(288),O=new t(32),D=0,F=0,I=v.i||0,_=0,j=v.w||0,P=0;I+2<s;++I){var R=S(I),G=32767&I,H=x[R];if(C[G]=H,x[R]=G,j<=I){var J=s-I;if((D>7e3||_>24576)&&(J>423||!w)){b=q(r,g,0,A,U,O,F,_,P,I-P,b),_=D=F=0,P=I;for(var K=0;K<286;++K)U[K]=0;for(K=0;K<30;++K)O[K]=0}var L=2,N=0,Q=p,V=G-H&32767;if(J>2&&R==S(I-V))for(var X=Math.min(m,J)-1,Y=Math.min(32767,I),Z=Math.min(258,J);V<=Y&&--Q&&G!=H;){if(r[I+L]==r[I+L-V]){for(var $=0;$<Z&&r[I+$]==r[I+$-V];++$);if($>L){if(L=$,N=V,$>X)break;var rr=Math.min(V,$-2),nr=0;for(K=0;K<rr;++K){var er=I-V+K&32767,tr=er-C[er]&32767;tr>nr&&(nr=tr,H=er)}}}V+=(G=H)-(H=C[G])&32767}if(N){A[_++]=268435456|c[L]<<18|h[N];var ar=31&c[L],fr=31&h[N];F+=f[ar]+o[fr],++U[257+ar],++O[fr],j=I+L,++D}else A[_++]=r[I],++U[r[I]]}}for(I=Math.max(I,j);I<s;++I)A[_++]=r[I],++U[r[I]];b=q(r,g,w,A,U,O,F,_,P,I-P,b),w||(v.r=7&b|g[b/8|0]<<3,b-=7,v.h=x,v.p=C,v.i=I,v.w=j)}else{for(I=v.w||0;I<s+w;I+=65535){var or=I+65535;or>=s&&(g[b/8|0]=w,or=s),b=W(g,b+1,r.subarray(I,or))}v.i=s}return z(d,0,l+E(b)+u)}(r,null==n.level?6:n.level,null==n.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(r.length)))):12+n.mem,i,l,u)},K=function(r,n,e){for(;e;++n)r[n]=e,e>>>=8},L=function(r,n){var e=n.level,t=0==e?0:e<6?1:9==e?3:2;if(r[0]=120,r[1]=t<<6|(n.dictionary&&32),r[1]|=31-(r[0]<<8|r[1])%31,n.dictionary){var a=H();a.p(n.dictionary),K(r,2,a.d())}},N=function(r,n){return(8!=(15&r[0])||r[0]>>4>7||(r[0]<<8|r[1])%31)&&O(6,"invalid zlib data"),(r[1]>>5&1)==+!n&&O(6,"invalid zlib data: "+(32&r[1]?"need":"unexpected")+" dictionary"),2+(r[1]>>3&4)};var Q="undefined"!=typeof TextEncoder&&new TextEncoder,V="undefined"!=typeof TextDecoder&&new TextDecoder;try{V.decode(G,{stream:!0}),1}catch(er){}var X=function(r){for(var n="",e=0;;){var t=r[e++],a=(t>127)+(t>223)+(t>239);if(e+a>r.length)return{s:n,r:z(r,e-1)};a?3==a?(t=((15&t)<<18|(63&r[e++])<<12|(63&r[e++])<<6|63&r[e++])-65536,n+=String.fromCharCode(55296|t>>10,56320|1023&t)):n+=1&a?String.fromCharCode((31&t)<<6|63&r[e++]):String.fromCharCode((15&t)<<12|(63&r[e++])<<6|63&r[e++]):n+=String.fromCharCode(t)}};function Y(r,n){if(n){for(var t=new e(r.length),a=0;a<r.length;++a)t[a]=r.charCodeAt(a);return t}if(Q)return Q.encode(r);var f=r.length,o=new e(r.length+(r.length>>1)),i=0,l=function(r){o[i++]=r};for(a=0;a<f;++a){if(i+5>o.length){var u=new e(i+8+(f-a<<1));u.set(o),o=u}var v=r.charCodeAt(a);v<128||n?l(v):v<2048?(l(192|v>>6),l(128|63&v)):v>55295&&v<57344?(l(240|(v=65536+(1047552&v)|1023&r.charCodeAt(++a))>>18),l(128|v>>12&63),l(128|v>>6&63),l(128|63&v)):(l(224|v>>12),l(128|v>>6&63),l(128|63&v))}return z(o,0,i)}function Z(r,n){if(n){for(var e="",t=0;t<r.length;t+=16384)e+=String.fromCharCode.apply(null,r.subarray(t,t+16384));return e}if(V)return V.decode(r);var a=X(r),f=a.s;return(e=a.r).length&&O(8),f}function $(r,n=100){let e;return(...t)=>{e&&clearTimeout(e),e=setTimeout((()=>{r(...t)}),n)}}function rr(r){const n=function(r,n){n||(n={});var e=H();e.p(r);var t=J(r,n,n.dictionary?6:2,4);return L(t,n),K(t,t.length-4,e.d()),t}(Y(r),{level:9}),e=Z(n,!0);return btoa(e)}function nr(r){const n=atob(r);if(n.startsWith("xÚ")){const r=Y(n,!0);return Z(D((e=r).subarray(N(e,t&&t.dictionary),-4),{i:2},t&&t.out,t&&t.dictionary))}var e,t;return decodeURIComponent(escape(n))}export{nr as a,r as c,$ as d,n as g,rr as u};
