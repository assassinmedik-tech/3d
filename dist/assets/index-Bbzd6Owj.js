(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qa="180",$c=0,Ro=1,Kc=2,to=1,Zc=2,Pn=3,qn=0,Ve=1,He=2,Xn=0,zi=1,Ge=2,Co=3,Po=4,jc=5,ai=100,Jc=101,Qc=102,th=103,eh=104,nh=200,ih=201,sh=202,rh=203,aa=204,oa=205,ah=206,oh=207,lh=208,ch=209,hh=210,uh=211,dh=212,fh=213,ph=214,la=0,ca=1,ha=2,Gi=3,ua=4,da=5,fa=6,pa=7,Yl=0,mh=1,gh=2,Yn=0,_h=1,vh=2,xh=3,ql=4,Mh=5,yh=6,Sh=7,$l=300,Vi=301,Wi=302,ma=303,ga=304,gr=306,lr=1e3,li=1001,_a=1002,pn=1003,Eh=1004,Rs=1005,Mn=1006,br=1007,ci=1008,Sn=1009,Kl=1010,Zl=1011,_s=1012,eo=1013,ui=1014,Ln=1015,Ss=1016,no=1017,io=1018,vs=1020,jl=35902,Jl=35899,Ql=1021,tc=1022,fn=1023,xs=1026,Ms=1027,ec=1028,so=1029,nc=1030,ro=1031,ao=1033,ir=33776,sr=33777,rr=33778,ar=33779,va=35840,xa=35841,Ma=35842,ya=35843,Sa=36196,Ea=37492,ba=37496,Ta=37808,wa=37809,Aa=37810,Ra=37811,Ca=37812,Pa=37813,La=37814,Da=37815,Ia=37816,Ua=37817,Na=37818,Fa=37819,Oa=37820,Ba=37821,ka=36492,za=36494,Ha=36495,Ga=36283,Va=36284,Wa=36285,Xa=36286,bh=3200,Th=3201,ic=0,wh=1,Wn="",ke="srgb",Xi="srgb-linear",cr="linear",ne="srgb",xi=7680,Lo=519,Ah=512,Rh=513,Ch=514,sc=515,Ph=516,Lh=517,Dh=518,Ih=519,Ya=35044,Do="300 es",yn=2e3,hr=2001;class ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Io=1234567;const ps=Math.PI/180,Yi=180/Math.PI;function In(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function Yt(i,t,e){return Math.max(t,Math.min(e,i))}function oo(i,t){return(i%t+t)%t}function Uh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Nh(i,t,e){return i!==t?(e-i)/(t-i):0}function ms(i,t,e){return(1-e)*i+e*t}function Fh(i,t,e,n){return ms(i,t,1-Math.exp(-e*n))}function Oh(i,t=1){return t-Math.abs(oo(i,t*2)-t)}function Bh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function kh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function zh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Hh(i,t){return i+Math.random()*(t-i)}function Gh(i){return i*(.5-Math.random())}function Vh(i){i!==void 0&&(Io=i);let t=Io+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Wh(i){return i*ps}function Xh(i){return i*Yi}function Yh(i){return(i&i-1)===0&&i!==0}function qh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function $h(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Kh(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),d=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*u,c*f,o*l);break;case"YZY":i.set(c*f,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*f,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*d,o*l);break;case"YXY":i.set(c*d,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*d,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function un(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Zh={DEG2RAD:ps,RAD2DEG:Yi,generateUUID:In,clamp:Yt,euclideanModulo:oo,mapLinear:Uh,inverseLerp:Nh,lerp:ms,damp:Fh,pingpong:Oh,smoothstep:Bh,smootherstep:kh,randInt:zh,randFloat:Hh,randFloatSpread:Gh,seededRandom:Vh,degToRad:Wh,radToDeg:Xh,isPowerOfTwo:Yh,ceilPowerOfTwo:qh,floorPowerOfTwo:$h,setQuaternionFromProperEuler:Kh,normalize:te,denormalize:un};class Nt{constructor(t=0,e=0){Nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const f=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==f||l!==d||h!==g){let m=1-o;const p=c*f+l*d+h*g+u*_,E=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const A=Math.sqrt(b),w=Math.atan2(A,p*E);m=Math.sin(m*w)/A,o=Math.sin(o*w)/A}const S=o*E;if(c=c*m+f*S,l=l*m+d*S,h=h*m+g*S,u=u*m+_*S,m===1-o){const A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-o*d,t[e+2]=l*g+h*d+o*f-c*u,t[e+3]=h*g-o*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Tr.copy(this).projectOnVector(t),this.sub(Tr)}reflect(t){return this.sub(Tr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tr=new D,Uo=new pi;class zt{constructor(t,e,n,s,r,a,o,c,l){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],E=s[1],b=s[4],S=s[7],A=s[2],w=s[5],R=s[8];return r[0]=a*_+o*E+c*A,r[3]=a*m+o*b+c*w,r[6]=a*p+o*S+c*R,r[1]=l*_+h*E+u*A,r[4]=l*m+h*b+u*w,r[7]=l*p+h*S+u*R,r[2]=f*_+d*E+g*A,r[5]=f*m+d*b+g*w,r[8]=f*p+d*S+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,f=o*c-h*r,d=l*r-a*c,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=f*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(wr.makeScale(t,e)),this}rotate(t){return this.premultiply(wr.makeRotation(-t)),this}translate(t,e){return this.premultiply(wr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wr=new zt;function rc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jh(){const i=ur("canvas");return i.style.display="block",i}const No={};function ys(i){i in No||(No[i]=!0,console.warn(i))}function Jh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Fo=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oo=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qh(){const i={enabled:!0,workingColorSpace:Xi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ne&&(s.r=Un(s.r),s.g=Un(s.g),s.b=Un(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ne&&(s.r=Hi(s.r),s.g=Hi(s.g),s.b=Hi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wn?cr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ys("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ys("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xi]:{primaries:t,whitePoint:n,transfer:cr,toXYZ:Fo,fromXYZ:Oo,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:t,whitePoint:n,transfer:ne,toXYZ:Fo,fromXYZ:Oo,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}}),i}const jt=Qh();function Un(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Mi;class tu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Mi===void 0&&(Mi=ur("canvas")),Mi.width=t.width,Mi.height=t.height;const s=Mi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Mi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ur("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Un(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Un(e[n]/255)*255):e[n]=Un(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let eu=0;class lo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=In(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ar(s[a].image)):r.push(Ar(s[a]))}else r=Ar(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ar(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?tu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nu=0;const Rr=new D;class Oe extends ji{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=li,s=li,r=Mn,a=ci,o=fn,c=Sn,l=Oe.DEFAULT_ANISOTROPY,h=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=In(),this.name="",this.source=new lo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Rr).x}get height(){return this.source.getSize(Rr).y}get depth(){return this.source.getSize(Rr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$l)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case lr:t.x=t.x-Math.floor(t.x);break;case li:t.x=t.x<0?0:1;break;case _a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case lr:t.y=t.y-Math.floor(t.y);break;case li:t.y=t.y<0?0:1;break;case _a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=$l;Oe.DEFAULT_ANISOTROPY=1;class se{constructor(t=0,e=0,n=0,s=1){se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(l+1)/2,S=(d+1)/2,A=(p+1)/2,w=(h+f)/4,R=(u+_)/4,C=(g+m)/4;return b>S&&b>A?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=w/n,r=R/n):S>A?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=w/s,r=C/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=R/r,s=C/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(f-h)/E,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iu extends ji{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Oe(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new lo(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class di extends iu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ac extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class su extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Es{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ln):ln.fromBufferAttribute(r,a),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cs.copy(n.boundingBox)),Cs.applyMatrix4(t.matrixWorld),this.union(Cs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ns),Ps.subVectors(this.max,ns),yi.subVectors(t.a,ns),Si.subVectors(t.b,ns),Ei.subVectors(t.c,ns),Bn.subVectors(Si,yi),kn.subVectors(Ei,Si),Jn.subVectors(yi,Ei);let e=[0,-Bn.z,Bn.y,0,-kn.z,kn.y,0,-Jn.z,Jn.y,Bn.z,0,-Bn.x,kn.z,0,-kn.x,Jn.z,0,-Jn.x,-Bn.y,Bn.x,0,-kn.y,kn.x,0,-Jn.y,Jn.x,0];return!Cr(e,yi,Si,Ei,Ps)||(e=[1,0,0,0,1,0,0,0,1],!Cr(e,yi,Si,Ei,Ps))?!1:(Ls.crossVectors(Bn,kn),e=[Ls.x,Ls.y,Ls.z],Cr(e,yi,Si,Ei,Ps))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Tn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Tn=[new D,new D,new D,new D,new D,new D,new D,new D],ln=new D,Cs=new Es,yi=new D,Si=new D,Ei=new D,Bn=new D,kn=new D,Jn=new D,ns=new D,Ps=new D,Ls=new D,Qn=new D;function Cr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Qn.fromArray(i,r);const o=s.x*Math.abs(Qn.x)+s.y*Math.abs(Qn.y)+s.z*Math.abs(Qn.z),c=t.dot(Qn),l=e.dot(Qn),h=n.dot(Qn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const ru=new Es,is=new D,Pr=new D;class _r{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ru.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;is.subVectors(t,this.center);const e=is.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(is,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Pr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(is.copy(t.center).add(Pr)),this.expandByPoint(is.copy(t.center).sub(Pr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const wn=new D,Lr=new D,Ds=new D,zn=new D,Dr=new D,Is=new D,Ir=new D;class oc{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wn.copy(this.origin).addScaledVector(this.direction,e),wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Lr.copy(t).add(e).multiplyScalar(.5),Ds.copy(e).sub(t).normalize(),zn.copy(this.origin).sub(Lr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ds),o=zn.dot(this.direction),c=-zn.dot(Ds),l=zn.lengthSq(),h=Math.abs(1-a*a);let u,f,d,g;if(h>0)if(u=a*c-o,f=a*o-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Lr).addScaledVector(Ds,f),d}intersectSphere(t,e){wn.subVectors(t.center,this.origin);const n=wn.dot(this.direction),s=wn.dot(wn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,wn)!==null}intersectTriangle(t,e,n,s,r){Dr.subVectors(e,t),Is.subVectors(n,t),Ir.crossVectors(Dr,Is);let a=this.direction.dot(Ir),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zn.subVectors(this.origin,t);const c=o*this.direction.dot(Is.crossVectors(zn,Is));if(c<0)return null;const l=o*this.direction.dot(Dr.cross(zn));if(l<0||c+l>a)return null;const h=-o*zn.dot(Ir);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,n,s,r,a,o,c,l,h,u,f,d,g,_,m){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,f,d,g,_,m)}set(t,e,n,s,r,a,o,c,l,h,u,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/bi.setFromMatrixColumn(t,0).length(),r=1/bi.setFromMatrixColumn(t,1).length(),a=1/bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,d=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-_*l,e[9]=-o*c,e[2]=_-f*l,e[6]=g+d*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,g=l*h,_=l*u;e[0]=f+_*o,e[4]=g*o-d,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=_+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,g=l*h,_=l*u;e[0]=f-_*o,e[4]=-a*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*h,d=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=d*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,d=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=a*c,d=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=a*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(au,t,ou)}lookAt(t,e,n){const s=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),Hn.crossVectors(n,$e),Hn.lengthSq()===0&&(Math.abs(n.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),Hn.crossVectors(n,$e)),Hn.normalize(),Us.crossVectors($e,Hn),s[0]=Hn.x,s[4]=Us.x,s[8]=$e.x,s[1]=Hn.y,s[5]=Us.y,s[9]=$e.y,s[2]=Hn.z,s[6]=Us.z,s[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],E=n[3],b=n[7],S=n[11],A=n[15],w=s[0],R=s[4],C=s[8],M=s[12],v=s[1],P=s[5],U=s[9],N=s[13],G=s[2],V=s[6],X=s[10],K=s[14],H=s[3],st=s[7],ct=s[11],St=s[15];return r[0]=a*w+o*v+c*G+l*H,r[4]=a*R+o*P+c*V+l*st,r[8]=a*C+o*U+c*X+l*ct,r[12]=a*M+o*N+c*K+l*St,r[1]=h*w+u*v+f*G+d*H,r[5]=h*R+u*P+f*V+d*st,r[9]=h*C+u*U+f*X+d*ct,r[13]=h*M+u*N+f*K+d*St,r[2]=g*w+_*v+m*G+p*H,r[6]=g*R+_*P+m*V+p*st,r[10]=g*C+_*U+m*X+p*ct,r[14]=g*M+_*N+m*K+p*St,r[3]=E*w+b*v+S*G+A*H,r[7]=E*R+b*P+S*V+A*st,r[11]=E*C+b*U+S*X+A*ct,r[15]=E*M+b*N+S*K+A*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*o*f+n*l*f+s*o*d-n*c*d)+_*(+e*c*d-e*l*f+r*a*f-s*a*d+s*l*h-r*c*h)+m*(+e*l*u-e*o*d-r*a*u+n*a*d+r*o*h-n*l*h)+p*(-s*o*h-e*c*u+e*o*f+s*a*u-n*a*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],E=u*m*l-_*f*l+_*c*d-o*m*d-u*c*p+o*f*p,b=g*f*l-h*m*l-g*c*d+a*m*d+h*c*p-a*f*p,S=h*_*l-g*u*l+g*o*d-a*_*d-h*o*p+a*u*p,A=g*u*c-h*_*c-g*o*f+a*_*f+h*o*m-a*u*m,w=e*E+n*b+s*S+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return t[0]=E*R,t[1]=(_*f*r-u*m*r-_*s*d+n*m*d+u*s*p-n*f*p)*R,t[2]=(o*m*r-_*c*r+_*s*l-n*m*l-o*s*p+n*c*p)*R,t[3]=(u*c*r-o*f*r-u*s*l+n*f*l+o*s*d-n*c*d)*R,t[4]=b*R,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*R,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*p-e*c*p)*R,t[7]=(a*f*r-h*c*r+h*s*l-e*f*l-a*s*d+e*c*d)*R,t[8]=S*R,t[9]=(g*u*r-h*_*r-g*n*d+e*_*d+h*n*p-e*u*p)*R,t[10]=(a*_*r-g*o*r+g*n*l-e*_*l-a*n*p+e*o*p)*R,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*d-e*o*d)*R,t[12]=A*R,t[13]=(h*_*s-g*u*s+g*n*f-e*_*f-h*n*m+e*u*m)*R,t[14]=(g*o*s-a*_*s-g*n*c+e*_*c+a*n*m-e*o*m)*R,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*f+e*o*f)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,f=r*l,d=r*h,g=r*u,_=a*h,m=a*u,p=o*u,E=c*l,b=c*h,S=c*u,A=n.x,w=n.y,R=n.z;return s[0]=(1-(_+p))*A,s[1]=(d+S)*A,s[2]=(g-b)*A,s[3]=0,s[4]=(d-S)*w,s[5]=(1-(f+p))*w,s[6]=(m+E)*w,s[7]=0,s[8]=(g+b)*R,s[9]=(m-E)*R,s[10]=(1-(f+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=bi.set(s[0],s[1],s[2]).length();const a=bi.set(s[4],s[5],s[6]).length(),o=bi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],cn.copy(this);const l=1/r,h=1/a,u=1/o;return cn.elements[0]*=l,cn.elements[1]*=l,cn.elements[2]*=l,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=u,cn.elements[9]*=u,cn.elements[10]*=u,e.setFromRotationMatrix(cn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=yn,c=!1){const l=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s);let g,_;if(c)g=r/(a-r),_=a*r/(a-r);else if(o===yn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===hr)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=yn,c=!1){const l=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s);let g,_;if(c)g=1/(a-r),_=a/(a-r);else if(o===yn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===hr)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const bi=new D,cn=new fe,au=new D(0,0,0),ou=new D(1,1,1),Hn=new D,Us=new D,$e=new D,Bo=new fe,ko=new pi;class on{constructor(t=0,e=0,n=0,s=on.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ko.setFromEuler(this),this.setFromQuaternion(ko,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class lc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let lu=0;const zo=new D,Ti=new pi,An=new fe,Ns=new D,ss=new D,cu=new D,hu=new pi,Ho=new D(1,0,0),Go=new D(0,1,0),Vo=new D(0,0,1),Wo={type:"added"},uu={type:"removed"},wi={type:"childadded",child:null},Ur={type:"childremoved",child:null};class ye extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new D,e=new on,n=new pi,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new zt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.premultiply(Ti),this}rotateX(t){return this.rotateOnAxis(Ho,t)}rotateY(t){return this.rotateOnAxis(Go,t)}rotateZ(t){return this.rotateOnAxis(Vo,t)}translateOnAxis(t,e){return zo.copy(t).applyQuaternion(this.quaternion),this.position.add(zo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ho,t)}translateY(t){return this.translateOnAxis(Go,t)}translateZ(t){return this.translateOnAxis(Vo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ns.copy(t):Ns.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(ss,Ns,this.up):An.lookAt(Ns,ss,this.up),this.quaternion.setFromRotationMatrix(An),s&&(An.extractRotation(s.matrixWorld),Ti.setFromRotationMatrix(An),this.quaternion.premultiply(Ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wo),wi.child=t,this.dispatchEvent(wi),wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(uu),Ur.child=t,this.dispatchEvent(Ur),Ur.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wo),wi.child=t,this.dispatchEvent(wi),wi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,t,cu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,hu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ye.DEFAULT_UP=new D(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new D,Rn=new D,Nr=new D,Cn=new D,Ai=new D,Ri=new D,Xo=new D,Fr=new D,Or=new D,Br=new D,kr=new se,zr=new se,Hr=new se;class sn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),hn.subVectors(t,e),s.cross(hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){hn.subVectors(s,e),Rn.subVectors(n,e),Nr.subVectors(t,e);const a=hn.dot(hn),o=hn.dot(Rn),c=hn.dot(Nr),l=Rn.dot(Rn),h=Rn.dot(Nr),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-o*h)*f,g=(a*h-o*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Cn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Cn.x),c.addScaledVector(a,Cn.y),c.addScaledVector(o,Cn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return kr.setScalar(0),zr.setScalar(0),Hr.setScalar(0),kr.fromBufferAttribute(t,e),zr.fromBufferAttribute(t,n),Hr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(kr,r.x),a.addScaledVector(zr,r.y),a.addScaledVector(Hr,r.z),a}static isFrontFacing(t,e,n,s){return hn.subVectors(n,e),Rn.subVectors(t,e),hn.cross(Rn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),hn.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return sn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ai.subVectors(s,n),Ri.subVectors(r,n),Fr.subVectors(t,n);const c=Ai.dot(Fr),l=Ri.dot(Fr);if(c<=0&&l<=0)return e.copy(n);Or.subVectors(t,s);const h=Ai.dot(Or),u=Ri.dot(Or);if(h>=0&&u<=h)return e.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Ai,a);Br.subVectors(t,r);const d=Ai.dot(Br),g=Ri.dot(Br);if(g>=0&&d<=g)return e.copy(r);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Ri,o);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Xo.subVectors(r,s),o=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(Xo,o);const p=1/(m+_+f);return a=_*p,o=f*p,e.copy(n).addScaledVector(Ai,a).addScaledVector(Ri,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const cc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},Fs={h:0,s:0,l:0};function Gr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=oo(t,1),e=Yt(e,0,1),n=Yt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Gr(a,r,t+1/3),this.g=Gr(a,r,t),this.b=Gr(a,r,t-1/3)}return jt.colorSpaceToWorking(this,s),this}setStyle(t,e=ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){const n=cc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Un(t.r),this.g=Un(t.g),this.b=Un(t.b),this}copyLinearToSRGB(t){return this.r=Hi(t.r),this.g=Hi(t.g),this.b=Hi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return jt.workingToColorSpace(Le.copy(this),t),Math.round(Yt(Le.r*255,0,255))*65536+Math.round(Yt(Le.g*255,0,255))*256+Math.round(Yt(Le.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(Le.copy(this),e);const n=Le.r,s=Le.g,r=Le.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=ke){jt.workingToColorSpace(Le.copy(this),t);const e=Le.r,n=Le.g,s=Le.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Gn),this.setHSL(Gn.h+t,Gn.s+e,Gn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Gn),t.getHSL(Fs);const n=ms(Gn.h,Fs.h,e),s=ms(Gn.s,Fs.s,e),r=ms(Gn.l,Fs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Le=new qt;qt.NAMES=cc;let du=0;class mi extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=In(),this.name="",this.type="Material",this.blending=zi,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=aa,this.blendDst=oa,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=Gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zi&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==aa&&(n.blendSrc=this.blendSrc),this.blendDst!==oa&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Bt extends mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=Yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new D,Os=new Nt;let fu=0;class We{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ya,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Os.fromBufferAttribute(this,e),Os.applyMatrix3(t),this.setXY(e,Os.x,Os.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=un(e,this.array)),e}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=un(e,this.array)),e}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=un(e,this.array)),e}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=un(e,this.array)),e}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array),r=te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ya&&(t.usage=this.usage),t}}class hc extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class uc extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class re extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}}let pu=0;const en=new fe,Vr=new ye,Ci=new D,Ke=new Es,rs=new Es,Re=new D;class we extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rc(t)?uc:hc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this}scale(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this}lookAt(t){return Vr.lookAt(t),Vr.updateMatrix(),this.applyMatrix4(Vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new re(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _r);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];rs.setFromBufferAttribute(o),this.morphTargetsRelative?(Re.addVectors(Ke.min,rs.min),Ke.expandByPoint(Re),Re.addVectors(Ke.max,rs.max),Ke.expandByPoint(Re)):(Ke.expandByPoint(rs.min),Ke.expandByPoint(rs.max))}Ke.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Re));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Re.fromBufferAttribute(o,l),c&&(Ci.fromBufferAttribute(t,l),Re.add(Ci)),s=Math.max(s,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new We(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new D,c[C]=new D;const l=new D,h=new D,u=new D,f=new Nt,d=new Nt,g=new Nt,_=new D,m=new D;function p(C,M,v){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,v),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,M),g.fromBufferAttribute(r,v),h.sub(l),u.sub(l),d.sub(f),g.sub(f);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(P),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(P),o[C].add(_),o[M].add(_),o[v].add(_),c[C].add(m),c[M].add(m),c[v].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let C=0,M=E.length;C<M;++C){const v=E[C],P=v.start,U=v.count;for(let N=P,G=P+U;N<G;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const b=new D,S=new D,A=new D,w=new D;function R(C){A.fromBufferAttribute(s,C),w.copy(A);const M=o[C];b.copy(M),b.sub(A.multiplyScalar(A.dot(M))).normalize(),S.crossVectors(w,M);const P=S.dot(c[C])<0?-1:1;a.setXYZW(C,b.x,b.y,b.z,P)}for(let C=0,M=E.length;C<M;++C){const v=E[C],P=v.start,U=v.count;for(let N=P,G=P+U;N<G;N+=3)R(t.getX(N+0)),R(t.getX(N+1)),R(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new D,r=new D,a=new D,o=new D,c=new D,l=new D,h=new D,u=new D;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?d=c[_]*o.data.stride+o.offset:d=c[_]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new We(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yo=new fe,ti=new oc,Bs=new _r,qo=new D,ks=new D,zs=new D,Hs=new D,Wr=new D,Gs=new D,$o=new D,Vs=new D;class Y extends ye{constructor(t=new we,e=new Bt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Gs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(Wr.fromBufferAttribute(u,t),a?Gs.addScaledVector(Wr,h):Gs.addScaledVector(Wr.sub(e),h))}e.add(Gs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(r),ti.copy(t.ray).recast(t.near),!(Bs.containsPoint(ti.origin)===!1&&(ti.intersectSphere(Bs,qo)===null||ti.origin.distanceToSquared(qo)>(t.far-t.near)**2))&&(Yo.copy(r).invert(),ti.copy(t.ray).applyMatrix4(Yo),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ti)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],E=Math.max(m.start,d.start),b=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let S=E,A=b;S<A;S+=3){const w=o.getX(S),R=o.getX(S+1),C=o.getX(S+2);s=Ws(this,p,t,n,l,h,u,w,R,C),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const E=o.getX(m),b=o.getX(m+1),S=o.getX(m+2);s=Ws(this,a,t,n,l,h,u,E,b,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],E=Math.max(m.start,d.start),b=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let S=E,A=b;S<A;S+=3){const w=S,R=S+1,C=S+2;s=Ws(this,p,t,n,l,h,u,w,R,C),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const E=m,b=m+1,S=m+2;s=Ws(this,a,t,n,l,h,u,E,b,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function mu(i,t,e,n,s,r,a,o){let c;if(t.side===Ve?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===qn,o),c===null)return null;Vs.copy(o),Vs.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Vs);return l<e.near||l>e.far?null:{distance:l,point:Vs.clone(),object:i}}function Ws(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,ks),i.getVertexPosition(c,zs),i.getVertexPosition(l,Hs);const h=mu(i,t,e,n,ks,zs,Hs,$o);if(h){const u=new D;sn.getBarycoord($o,ks,zs,Hs,u),s&&(h.uv=sn.getInterpolatedAttribute(s,o,c,l,u,new Nt)),r&&(h.uv1=sn.getInterpolatedAttribute(r,o,c,l,u,new Nt)),a&&(h.normal=sn.getInterpolatedAttribute(a,o,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new D,materialIndex:0};sn.getNormal(ks,zs,Hs,f.normal),h.face=f,h.barycoord=u}return h}class dt extends we{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(u,2));function g(_,m,p,E,b,S,A,w,R,C,M){const v=S/R,P=A/C,U=S/2,N=A/2,G=w/2,V=R+1,X=C+1;let K=0,H=0;const st=new D;for(let ct=0;ct<X;ct++){const St=ct*P-N;for(let Wt=0;Wt<V;Wt++){const le=Wt*v-U;st[_]=le*E,st[m]=St*b,st[p]=G,l.push(st.x,st.y,st.z),st[_]=0,st[m]=0,st[p]=w>0?1:-1,h.push(st.x,st.y,st.z),u.push(Wt/R),u.push(1-ct/C),K+=1}}for(let ct=0;ct<C;ct++)for(let St=0;St<R;St++){const Wt=f+St+V*ct,le=f+St+V*(ct+1),pe=f+(St+1)+V*(ct+1),Jt=f+(St+1)+V*ct;c.push(Wt,le,Jt),c.push(le,pe,Jt),H+=6}o.addGroup(d,H,M),d+=H,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function qi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Fe(i){const t={};for(let e=0;e<i.length;e++){const n=qi(i[e]);for(const s in n)t[s]=n[s]}return t}function gu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function dc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const _u={clone:qi,merge:Fe};var vu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vu,this.fragmentShader=xu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qi(t.uniforms),this.uniformsGroups=gu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class fc extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vn=new D,Ko=new Nt,Zo=new Nt;class ze extends fc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Yi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yi*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z)}getViewSize(t,e){return this.getViewBounds(t,Ko,Zo),e.subVectors(Zo,Ko)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ps*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Pi=-90,Li=1;class Mu extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ze(Pi,Li,t,e);s.layers=this.layers,this.add(s);const r=new ze(Pi,Li,t,e);r.layers=this.layers,this.add(r);const a=new ze(Pi,Li,t,e);a.layers=this.layers,this.add(a);const o=new ze(Pi,Li,t,e);o.layers=this.layers,this.add(o);const c=new ze(Pi,Li,t,e);c.layers=this.layers,this.add(c);const l=new ze(Pi,Li,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class pc extends Oe{constructor(t=[],e=Vi,n,s,r,a,o,c,l,h){super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yu extends di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new pc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new dt(5,5,5),r=new $n({name:"CubemapFromEquirect",uniforms:qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:Xn});r.uniforms.tEquirect.value=e;const a=new Y(s,r),o=e.minFilter;return e.minFilter===ci&&(e.minFilter=Mn),new Mu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class oe extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Su={type:"move"};class Xr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Su)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new oe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class co{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new qt(t),this.density=e}clone(){return new co(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Eu extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class bu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ya,this.updateRanges=[],this.version=0,this.uuid=In()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ne=new D;class dr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=un(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=un(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=un(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=un(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array),r=te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new We(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new dr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ho extends mi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Di;const as=new D,Ii=new D,Ui=new D,Ni=new Nt,os=new Nt,mc=new fe,Xs=new D,ls=new D,Ys=new D,jo=new Nt,Yr=new Nt,Jo=new Nt;class gc extends ye{constructor(t=new ho){if(super(),this.isSprite=!0,this.type="Sprite",Di===void 0){Di=new we;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new bu(e,5);Di.setIndex([0,1,2,0,2,3]),Di.setAttribute("position",new dr(n,3,0,!1)),Di.setAttribute("uv",new dr(n,2,3,!1))}this.geometry=Di,this.material=t,this.center=new Nt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ii.setFromMatrixScale(this.matrixWorld),mc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ui.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ii.multiplyScalar(-Ui.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;qs(Xs.set(-.5,-.5,0),Ui,a,Ii,s,r),qs(ls.set(.5,-.5,0),Ui,a,Ii,s,r),qs(Ys.set(.5,.5,0),Ui,a,Ii,s,r),jo.set(0,0),Yr.set(1,0),Jo.set(1,1);let o=t.ray.intersectTriangle(Xs,ls,Ys,!1,as);if(o===null&&(qs(ls.set(-.5,.5,0),Ui,a,Ii,s,r),Yr.set(0,1),o=t.ray.intersectTriangle(Xs,Ys,ls,!1,as),o===null))return;const c=t.ray.origin.distanceTo(as);c<t.near||c>t.far||e.push({distance:c,point:as.clone(),uv:sn.getInterpolation(as,Xs,ls,Ys,jo,Yr,Jo,new Nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function qs(i,t,e,n,s,r){Ni.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(os.x=r*Ni.x-s*Ni.y,os.y=s*Ni.x+r*Ni.y):os.copy(Ni),i.copy(t),i.x+=os.x,i.y+=os.y,i.applyMatrix4(mc)}const qr=new D,Tu=new D,wu=new zt;class si{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=qr.subVectors(n,e).cross(Tu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(qr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||wu.getNormalMatrix(t),s=this.coplanarPoint(qr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new _r,Au=new Nt(.5,.5),$s=new D;class uo{constructor(t=new si,e=new si,n=new si,s=new si,r=new si,a=new si){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],_=r[9],m=r[10],p=r[11],E=r[12],b=r[13],S=r[14],A=r[15];if(s[0].setComponents(l-a,d-h,p-g,A-E).normalize(),s[1].setComponents(l+a,d+h,p+g,A+E).normalize(),s[2].setComponents(l+o,d+u,p+_,A+b).normalize(),s[3].setComponents(l-o,d-u,p-_,A-b).normalize(),n)s[4].setComponents(c,f,m,S).normalize(),s[5].setComponents(l-c,d-f,p-m,A-S).normalize();else if(s[4].setComponents(l-c,d-f,p-m,A-S).normalize(),e===yn)s[5].setComponents(l+c,d+f,p+m,A+S).normalize();else if(e===hr)s[5].setComponents(c,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(t){ei.center.set(0,0,0);const e=Au.distanceTo(t.center);return ei.radius=.7071067811865476+e,ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if($s.x=s.normal.x>0?t.max.x:t.min.x,$s.y=s.normal.y>0?t.max.y:t.min.y,$s.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint($s)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fo extends mi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Qo=new fe,qa=new oc,Ks=new _r,Zs=new D;class _c extends ye{constructor(t=new we,e=new fo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(s),Ks.radius+=r,t.ray.intersectsSphere(Ks)===!1)return;Qo.copy(s).invert(),qa.copy(t.ray).applyMatrix4(Qo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let g=f,_=d;g<_;g++){const m=l.getX(g);Zs.fromBufferAttribute(u,m),tl(Zs,m,c,s,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,_=d;g<_;g++)Zs.fromBufferAttribute(u,g),tl(Zs,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function tl(i,t,e,n,s,r,a){const o=qa.distanceSqToPoint(i);if(o<e){const c=new D;qa.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Ru extends Oe{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vc extends Oe{constructor(t,e,n=ui,s,r,a,o=pn,c=pn,l,h=xs,u=1){if(h!==xs&&h!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new lo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class xc extends Oe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class po extends we{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],c=[],l=[],h=e/2,u=Math.PI/2*t,f=e,d=2*u+f,g=n*2+r,_=s+1,m=new D,p=new D;for(let E=0;E<=g;E++){let b=0,S=0,A=0,w=0;if(E<=n){const M=E/n,v=M*Math.PI/2;S=-h-t*Math.cos(v),A=t*Math.sin(v),w=-t*Math.cos(v),b=M*u}else if(E<=n+r){const M=(E-n)/r;S=-h+M*e,A=t,w=0,b=u+M*f}else{const M=(E-n-r)/n,v=M*Math.PI/2;S=h+t*Math.sin(v),A=t*Math.cos(v),w=t*Math.sin(v),b=u+f+M*u}const R=Math.max(0,Math.min(1,b/d));let C=0;E===0?C=.5/s:E===g&&(C=-.5/s);for(let M=0;M<=s;M++){const v=M/s,P=v*Math.PI*2,U=Math.sin(P),N=Math.cos(P);p.x=-A*N,p.y=S,p.z=A*U,o.push(p.x,p.y,p.z),m.set(-A*N,w,A*U),m.normalize(),c.push(m.x,m.y,m.z),l.push(v+C,R)}if(E>0){const M=(E-1)*_;for(let v=0;v<s;v++){const P=M+v,U=M+v+1,N=E*_+v,G=E*_+v+1;a.push(P,U,N),a.push(U,G,N)}}}this.setIndex(a),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new po(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class vr extends we{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new D,h=new Nt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(o,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ue extends we{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;E(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(f,3)),this.setAttribute("uv",new re(d,2));function E(){const S=new D,A=new D;let w=0;const R=(e-t)/n;for(let C=0;C<=r;C++){const M=[],v=C/r,P=v*(e-t)+t;for(let U=0;U<=s;U++){const N=U/s,G=N*c+o,V=Math.sin(G),X=Math.cos(G);A.x=P*V,A.y=-v*n+m,A.z=P*X,u.push(A.x,A.y,A.z),S.set(V,R,X).normalize(),f.push(S.x,S.y,S.z),d.push(N,1-v),M.push(g++)}_.push(M)}for(let C=0;C<s;C++)for(let M=0;M<r;M++){const v=_[M][C],P=_[M+1][C],U=_[M+1][C+1],N=_[M][C+1];(t>0||M!==0)&&(h.push(v,P,N),w+=3),(e>0||M!==r-1)&&(h.push(P,U,N),w+=3)}l.addGroup(p,w,0),p+=w}function b(S){const A=g,w=new Nt,R=new D;let C=0;const M=S===!0?t:e,v=S===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*v,0),f.push(0,v,0),d.push(.5,.5),g++;const P=g;for(let U=0;U<=s;U++){const G=U/s*c+o,V=Math.cos(G),X=Math.sin(G);R.x=M*X,R.y=m*v,R.z=M*V,u.push(R.x,R.y,R.z),f.push(0,v,0),w.x=V*.5+.5,w.y=X*.5*v+.5,d.push(w.x,w.y),g++}for(let U=0;U<s;U++){const N=A+U,G=P+U;S===!0?h.push(G,G+1,N):h.push(G+1,G,N),C+=3}l.addGroup(p,C,S===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ue(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class xr extends we{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const b=new D,S=new D,A=new D;for(let w=0;w<e.length;w+=3)d(e[w+0],b),d(e[w+1],S),d(e[w+2],A),c(b,S,A,E)}function c(E,b,S,A){const w=A+1,R=[];for(let C=0;C<=w;C++){R[C]=[];const M=E.clone().lerp(S,C/w),v=b.clone().lerp(S,C/w),P=w-C;for(let U=0;U<=P;U++)U===0&&C===w?R[C][U]=M:R[C][U]=M.clone().lerp(v,U/P)}for(let C=0;C<w;C++)for(let M=0;M<2*(w-C)-1;M++){const v=Math.floor(M/2);M%2===0?(f(R[C][v+1]),f(R[C+1][v]),f(R[C][v])):(f(R[C][v+1]),f(R[C+1][v+1]),f(R[C+1][v]))}}function l(E){const b=new D;for(let S=0;S<r.length;S+=3)b.x=r[S+0],b.y=r[S+1],b.z=r[S+2],b.normalize().multiplyScalar(E),r[S+0]=b.x,r[S+1]=b.y,r[S+2]=b.z}function h(){const E=new D;for(let b=0;b<r.length;b+=3){E.x=r[b+0],E.y=r[b+1],E.z=r[b+2];const S=m(E)/2/Math.PI+.5,A=p(E)/Math.PI+.5;a.push(S,1-A)}g(),u()}function u(){for(let E=0;E<a.length;E+=6){const b=a[E+0],S=a[E+2],A=a[E+4],w=Math.max(b,S,A),R=Math.min(b,S,A);w>.9&&R<.1&&(b<.2&&(a[E+0]+=1),S<.2&&(a[E+2]+=1),A<.2&&(a[E+4]+=1))}}function f(E){r.push(E.x,E.y,E.z)}function d(E,b){const S=E*3;b.x=t[S+0],b.y=t[S+1],b.z=t[S+2]}function g(){const E=new D,b=new D,S=new D,A=new D,w=new Nt,R=new Nt,C=new Nt;for(let M=0,v=0;M<r.length;M+=9,v+=6){E.set(r[M+0],r[M+1],r[M+2]),b.set(r[M+3],r[M+4],r[M+5]),S.set(r[M+6],r[M+7],r[M+8]),w.set(a[v+0],a[v+1]),R.set(a[v+2],a[v+3]),C.set(a[v+4],a[v+5]),A.copy(E).add(b).add(S).divideScalar(3);const P=m(A);_(w,v+0,E,P),_(R,v+2,b,P),_(C,v+4,S,P)}}function _(E,b,S,A){A<0&&E.x===1&&(a[b]=E.x-1),S.x===0&&S.z===0&&(a[b]=A/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xr(t.vertices,t.indices,t.radius,t.details)}}class fr extends xr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new fr(t.radius,t.detail)}}class pr extends xr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new pr(t.radius,t.detail)}}class dn extends we{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,f=e/c,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const E=p*f-a;for(let b=0;b<l;b++){const S=b*u-r;g.push(S,-E,0),_.push(0,0,1),m.push(b/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<o;E++){const b=E+l*p,S=E+l*(p+1),A=E+1+l*(p+1),w=E+1+l*p;d.push(b,S,w),d.push(S,A,w)}this.setIndex(d),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dn(t.width,t.height,t.widthSegments,t.heightSegments)}}class gs extends we{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],h=[];let u=t;const f=(e-t)/s,d=new D,g=new Nt;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const E=p+m,b=E,S=E+n+1,A=E+n+2,w=E+1;o.push(b,S,w),o.push(S,A,w)}}this.setIndex(o),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gs(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Dn extends we{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new D,f=new D,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const E=[],b=p/n;let S=0;p===0&&a===0?S=.5/e:p===n&&c===Math.PI&&(S=-.5/e);for(let A=0;A<=e;A++){const w=A/e;u.x=-t*Math.cos(s+w*r)*Math.sin(a+b*o),u.y=t*Math.cos(a+b*o),u.z=t*Math.sin(s+w*r)*Math.sin(a+b*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(w+S,1-b),E.push(l++)}h.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){const b=h[p][E+1],S=h[p][E],A=h[p+1][E],w=h[p+1][E+1];(p!==0||a>0)&&d.push(b,S,w),(p!==n-1||c<Math.PI)&&d.push(S,A,w)}this.setIndex(d),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class De extends we{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new D,u=new D,f=new D;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const _=g/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,E=(s+1)*d+g;a.push(_,m,E),a.push(m,p,E)}this.setIndex(a),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new De(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ee extends mi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ic,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Cu extends mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Pu extends mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Mr extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Lu extends Mr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const $r=new fe,el=new D,nl=new D;class mo{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uo,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;el.setFromMatrixPosition(t.matrixWorld),e.position.copy(el),nl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nl),e.updateMatrixWorld(),$r.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($r,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($r)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Du extends mo{constructor(){super(new ze(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=Yi*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Iu extends Mr{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Du}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const il=new fe,cs=new D,Kr=new D;class Uu extends mo{constructor(){super(new ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Nt(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),cs.setFromMatrixPosition(t.matrixWorld),n.position.copy(cs),Kr.copy(n.position),Kr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Kr),n.updateMatrixWorld(),s.makeTranslation(-cs.x,-cs.y,-cs.z),il.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(il,n.coordinateSystem,n.reversedDepth)}}class Nu extends Mr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Uu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Mc extends fc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Fu extends mo{constructor(){super(new Mc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ou extends Mr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new Fu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Bu extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function sl(i,t,e,n){const s=ku(n);switch(e){case Ql:return i*t;case ec:return i*t/s.components*s.byteLength;case so:return i*t/s.components*s.byteLength;case nc:return i*t*2/s.components*s.byteLength;case ro:return i*t*2/s.components*s.byteLength;case tc:return i*t*3/s.components*s.byteLength;case fn:return i*t*4/s.components*s.byteLength;case ao:return i*t*4/s.components*s.byteLength;case ir:case sr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case rr:case ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xa:case ya:return Math.max(i,16)*Math.max(t,8)/4;case va:case Ma:return Math.max(i,8)*Math.max(t,8)/2;case Sa:case Ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case La:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Da:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Na:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Oa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ba:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ka:case za:case Ha:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ga:case Va:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Wa:case Xa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ku(i){switch(i){case Sn:case Kl:return{byteLength:1,components:1};case _s:case Zl:case Ss:return{byteLength:2,components:1};case no:case io:return{byteLength:2,components:4};case ui:case eo:case Ln:return{byteLength:4,components:1};case jl:case Jl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qa);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function zu(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Hu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Vu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$u=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ku=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Zu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ju=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ju=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,td=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ed=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ud=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,md=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_d="gl_FragColor = linearToOutputTexel( gl_FragColor );",vd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Md=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ed=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Td=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ad=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ld=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Id=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ud=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Od=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$d=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ef=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,af=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,of=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,df=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ff=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_f=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ef=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,bf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Af=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Df=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,If=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ff=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$f=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Kf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ep=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,np=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ip=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ap=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,op=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,up=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_p=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:Hu,alphahash_pars_fragment:Gu,alphamap_fragment:Vu,alphamap_pars_fragment:Wu,alphatest_fragment:Xu,alphatest_pars_fragment:Yu,aomap_fragment:qu,aomap_pars_fragment:$u,batching_pars_vertex:Ku,batching_vertex:Zu,begin_vertex:ju,beginnormal_vertex:Ju,bsdfs:Qu,iridescence_fragment:td,bumpmap_pars_fragment:ed,clipping_planes_fragment:nd,clipping_planes_pars_fragment:id,clipping_planes_pars_vertex:sd,clipping_planes_vertex:rd,color_fragment:ad,color_pars_fragment:od,color_pars_vertex:ld,color_vertex:cd,common:hd,cube_uv_reflection_fragment:ud,defaultnormal_vertex:dd,displacementmap_pars_vertex:fd,displacementmap_vertex:pd,emissivemap_fragment:md,emissivemap_pars_fragment:gd,colorspace_fragment:_d,colorspace_pars_fragment:vd,envmap_fragment:xd,envmap_common_pars_fragment:Md,envmap_pars_fragment:yd,envmap_pars_vertex:Sd,envmap_physical_pars_fragment:Id,envmap_vertex:Ed,fog_vertex:bd,fog_pars_vertex:Td,fog_fragment:wd,fog_pars_fragment:Ad,gradientmap_pars_fragment:Rd,lightmap_pars_fragment:Cd,lights_lambert_fragment:Pd,lights_lambert_pars_fragment:Ld,lights_pars_begin:Dd,lights_toon_fragment:Ud,lights_toon_pars_fragment:Nd,lights_phong_fragment:Fd,lights_phong_pars_fragment:Od,lights_physical_fragment:Bd,lights_physical_pars_fragment:kd,lights_fragment_begin:zd,lights_fragment_maps:Hd,lights_fragment_end:Gd,logdepthbuf_fragment:Vd,logdepthbuf_pars_fragment:Wd,logdepthbuf_pars_vertex:Xd,logdepthbuf_vertex:Yd,map_fragment:qd,map_pars_fragment:$d,map_particle_fragment:Kd,map_particle_pars_fragment:Zd,metalnessmap_fragment:jd,metalnessmap_pars_fragment:Jd,morphinstance_vertex:Qd,morphcolor_vertex:tf,morphnormal_vertex:ef,morphtarget_pars_vertex:nf,morphtarget_vertex:sf,normal_fragment_begin:rf,normal_fragment_maps:af,normal_pars_fragment:of,normal_pars_vertex:lf,normal_vertex:cf,normalmap_pars_fragment:hf,clearcoat_normal_fragment_begin:uf,clearcoat_normal_fragment_maps:df,clearcoat_pars_fragment:ff,iridescence_pars_fragment:pf,opaque_fragment:mf,packing:gf,premultiplied_alpha_fragment:_f,project_vertex:vf,dithering_fragment:xf,dithering_pars_fragment:Mf,roughnessmap_fragment:yf,roughnessmap_pars_fragment:Sf,shadowmap_pars_fragment:Ef,shadowmap_pars_vertex:bf,shadowmap_vertex:Tf,shadowmask_pars_fragment:wf,skinbase_vertex:Af,skinning_pars_vertex:Rf,skinning_vertex:Cf,skinnormal_vertex:Pf,specularmap_fragment:Lf,specularmap_pars_fragment:Df,tonemapping_fragment:If,tonemapping_pars_fragment:Uf,transmission_fragment:Nf,transmission_pars_fragment:Ff,uv_pars_fragment:Of,uv_pars_vertex:Bf,uv_vertex:kf,worldpos_vertex:zf,background_vert:Hf,background_frag:Gf,backgroundCube_vert:Vf,backgroundCube_frag:Wf,cube_vert:Xf,cube_frag:Yf,depth_vert:qf,depth_frag:$f,distanceRGBA_vert:Kf,distanceRGBA_frag:Zf,equirect_vert:jf,equirect_frag:Jf,linedashed_vert:Qf,linedashed_frag:tp,meshbasic_vert:ep,meshbasic_frag:np,meshlambert_vert:ip,meshlambert_frag:sp,meshmatcap_vert:rp,meshmatcap_frag:ap,meshnormal_vert:op,meshnormal_frag:lp,meshphong_vert:cp,meshphong_frag:hp,meshphysical_vert:up,meshphysical_frag:dp,meshtoon_vert:fp,meshtoon_frag:pp,points_vert:mp,points_frag:gp,shadow_vert:_p,shadow_frag:vp,sprite_vert:xp,sprite_frag:Mp},ot={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},vn={basic:{uniforms:Fe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Fe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new qt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Fe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Fe([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Fe([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new qt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Fe([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Fe([ot.points,ot.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Fe([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Fe([ot.common,ot.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Fe([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Fe([ot.sprite,ot.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Fe([ot.common,ot.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Fe([ot.lights,ot.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};vn.physical={uniforms:Fe([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const js={r:0,b:0,g:0},ni=new on,yp=new fe;function Sp(i,t,e,n,s,r,a){const o=new qt(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?e:t).get(S)),S}function _(b){let S=!1;const A=g(b);A===null?p(o,c):A&&A.isColor&&(p(A,1),S=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,S){const A=g(S);A&&(A.isCubeTexture||A.mapping===gr)?(h===void 0&&(h=new Y(new dt(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:qi(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ni.copy(S.backgroundRotation),ni.x*=-1,ni.y*=-1,ni.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(yp.makeRotationFromEuler(ni)),h.material.toneMapped=jt.getTransfer(A.colorSpace)!==ne,(u!==A||f!==A.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,f=A.version,d=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Y(new dn(2,2),new $n({name:"BackgroundMaterial",uniforms:qi(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=jt.getTransfer(A.colorSpace)!==ne,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=A,f=A.version,d=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,S){b.getRGB(js,dc(i)),n.buffers.color.setClear(js.r,js.g,js.b,S,a)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,S=1){o.set(b),c=S,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(o,c)},render:_,addToRenderList:m,dispose:E}}function Ep(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(v,P,U,N,G){let V=!1;const X=u(N,U,P);r!==X&&(r=X,l(r.object)),V=d(v,N,U,G),V&&g(v,N,U,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,S(v,P,U,N),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,P,U){const N=U.wireframe===!0;let G=n[v.id];G===void 0&&(G={},n[v.id]=G);let V=G[P.id];V===void 0&&(V={},G[P.id]=V);let X=V[N];return X===void 0&&(X=f(c()),V[N]=X),X}function f(v){const P=[],U=[],N=[];for(let G=0;G<e;G++)P[G]=0,U[G]=0,N[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:N,object:v,attributes:{},index:null}}function d(v,P,U,N){const G=r.attributes,V=P.attributes;let X=0;const K=U.getAttributes();for(const H in K)if(K[H].location>=0){const ct=G[H];let St=V[H];if(St===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(St=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(St=v.instanceColor)),ct===void 0||ct.attribute!==St||St&&ct.data!==St.data)return!0;X++}return r.attributesNum!==X||r.index!==N}function g(v,P,U,N){const G={},V=P.attributes;let X=0;const K=U.getAttributes();for(const H in K)if(K[H].location>=0){let ct=V[H];ct===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(ct=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(ct=v.instanceColor));const St={};St.attribute=ct,ct&&ct.data&&(St.data=ct.data),G[H]=St,X++}r.attributes=G,r.attributesNum=X,r.index=N}function _(){const v=r.newAttributes;for(let P=0,U=v.length;P<U;P++)v[P]=0}function m(v){p(v,0)}function p(v,P){const U=r.newAttributes,N=r.enabledAttributes,G=r.attributeDivisors;U[v]=1,N[v]===0&&(i.enableVertexAttribArray(v),N[v]=1),G[v]!==P&&(i.vertexAttribDivisor(v,P),G[v]=P)}function E(){const v=r.newAttributes,P=r.enabledAttributes;for(let U=0,N=P.length;U<N;U++)P[U]!==v[U]&&(i.disableVertexAttribArray(U),P[U]=0)}function b(v,P,U,N,G,V,X){X===!0?i.vertexAttribIPointer(v,P,U,G,V):i.vertexAttribPointer(v,P,U,N,G,V)}function S(v,P,U,N){_();const G=N.attributes,V=U.getAttributes(),X=P.defaultAttributeValues;for(const K in V){const H=V[K];if(H.location>=0){let st=G[K];if(st===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&(st=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&(st=v.instanceColor)),st!==void 0){const ct=st.normalized,St=st.itemSize,Wt=t.get(st);if(Wt===void 0)continue;const le=Wt.buffer,pe=Wt.type,Jt=Wt.bytesPerElement,$=pe===i.INT||pe===i.UNSIGNED_INT||st.gpuType===eo;if(st.isInterleavedBufferAttribute){const J=st.data,gt=J.stride,Ut=st.offset;if(J.isInstancedInterleavedBuffer){for(let wt=0;wt<H.locationSize;wt++)p(H.location+wt,J.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let wt=0;wt<H.locationSize;wt++)m(H.location+wt);i.bindBuffer(i.ARRAY_BUFFER,le);for(let wt=0;wt<H.locationSize;wt++)b(H.location+wt,St/H.locationSize,pe,ct,gt*Jt,(Ut+St/H.locationSize*wt)*Jt,$)}else{if(st.isInstancedBufferAttribute){for(let J=0;J<H.locationSize;J++)p(H.location+J,st.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let J=0;J<H.locationSize;J++)m(H.location+J);i.bindBuffer(i.ARRAY_BUFFER,le);for(let J=0;J<H.locationSize;J++)b(H.location+J,St/H.locationSize,pe,ct,St*Jt,St/H.locationSize*J*Jt,$)}}else if(X!==void 0){const ct=X[K];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(H.location,ct);break;case 3:i.vertexAttrib3fv(H.location,ct);break;case 4:i.vertexAttrib4fv(H.location,ct);break;default:i.vertexAttrib1fv(H.location,ct)}}}}E()}function A(){C();for(const v in n){const P=n[v];for(const U in P){const N=P[U];for(const G in N)h(N[G].object),delete N[G];delete P[U]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;const P=n[v.id];for(const U in P){const N=P[U];for(const G in N)h(N[G].object),delete N[G];delete P[U]}delete n[v.id]}function R(v){for(const P in n){const U=n[P];if(U[v.id]===void 0)continue;const N=U[v.id];for(const G in N)h(N[G].object),delete N[G];delete U[v.id]}}function C(){M(),a=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function bp(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)a(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Tp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==fn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const C=R===Ss&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Sn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Ln&&!C)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:A,maxSamples:w}}function wp(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new si,o=new zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const E=r?0:n,b=E*4;let S=p.clippingState||null;c.value=S,S=h(g,f,b,d);for(let A=0;A!==b;++A)S[A]=e[A];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=d+_*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,S=d;b!==_;++b,S+=4)a.copy(u[b]).applyMatrix4(E,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Ap(i){let t=new WeakMap;function e(a,o){return o===ma?a.mapping=Vi:o===ga&&(a.mapping=Wi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ma||o===ga)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new yu(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const ki=4,rl=[.125,.215,.35,.446,.526,.582],oi=20,Zr=new Mc,al=new qt;let jr=null,Jr=0,Qr=0,ta=!1;const ri=(1+Math.sqrt(5))/2,Fi=1/ri,ol=[new D(-ri,Fi,0),new D(ri,Fi,0),new D(-Fi,0,ri),new D(Fi,0,ri),new D(0,ri,-Fi),new D(0,ri,Fi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Rp=new D;class ll{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Rp}=r;jr=this._renderer.getRenderTarget(),Jr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ul(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(jr,Jr,Qr),this._renderer.xr.enabled=ta,t.scissorTest=!1,Js(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vi||t.mapping===Wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jr=this._renderer.getRenderTarget(),Jr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Ss,format:fn,colorSpace:Xi,depthBuffer:!1},s=cl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cp(r)),this._blurMaterial=Pp(r,t,e)}return s}_compileMaterial(t){const e=new Y(this._lodPlanes[0],t);this._renderer.compile(e,Zr)}_sceneToCubeUV(t,e,n,s,r){const c=new ze(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(al),u.toneMapping=Yn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new Bt({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),m=new Y(new dt,_);let p=!1;const E=t.background;E?E.isColor&&(_.color.copy(E),t.background=null,p=!0):(_.color.copy(al),p=!0);for(let b=0;b<6;b++){const S=b%3;S===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[b],r.y,r.z)):S===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[b]));const A=this._cubeSize;Js(s,S*A,b>2?A:0,A,A),u.setRenderTarget(s),p&&u.render(m,c),u.render(t,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=E}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Vi||t.mapping===Wi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ul()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Y(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Js(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Zr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ol[(s-r-1)%ol.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Y(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*oi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):oi;m>oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${oi}`);const p=[];let E=0;for(let R=0;R<oi;++R){const C=R/_,M=Math.exp(-C*C/2);p.push(M),R===0?E+=M:R<m&&(E+=2*M)}for(let R=0;R<p.length;R++)p[R]=p[R]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;const S=this._sizeLods[s],A=3*S*(s>b-ki?s-b+ki:0),w=4*(this._cubeSize-S);Js(e,A,w,3*S,2*S),c.setRenderTarget(e),c.render(u,Zr)}}function Cp(i){const t=[],e=[],n=[];let s=i;const r=i-ki+1+rl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-ki?c=rl[a-i+ki-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*d),b=new Float32Array(m*g*d),S=new Float32Array(p*g*d);for(let w=0;w<d;w++){const R=w%3*2/3-1,C=w>2?0:-1,M=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];E.set(M,_*g*w),b.set(f,m*g*w);const v=[w,w,w,w,w,w];S.set(v,p*g*w)}const A=new we;A.setAttribute("position",new We(E,_)),A.setAttribute("uv",new We(b,m)),A.setAttribute("faceIndex",new We(S,p)),t.push(A),s>ki&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function cl(i,t,e){const n=new di(i,t,e);return n.texture.mapping=gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Js(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Pp(i,t,e){const n=new Float32Array(oi),s=new D(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function hl(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function ul(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function go(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Lp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===ma||c===ga,h=c===Vi||c===Wi;if(l||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new ll(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new ll(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Dp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ys("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ip(i,t,e,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const d in f)t.update(f[d],i.ARRAY_BUFFER)}function l(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const E=d.array;_=d.version;for(let b=0,S=E.length;b<S;b+=3){const A=E[b+0],w=E[b+1],R=E[b+2];f.push(A,w,w,R,R,A)}}else if(g!==void 0){const E=g.array;_=g.version;for(let b=0,S=E.length/3-1;b<S;b+=3){const A=b+0,w=b+1,R=b+2;f.push(A,w,w,R,R,A)}}else return;const m=new(rc(f)?uc:hc)(f,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Up(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*a),e.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*a,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=d[E]*_[E];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Np(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Fp(i,t,e){const n=new WeakMap,s=new se;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let v=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var d=v;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let A=o.attributes.position.count*S,w=1;A>t.maxTextureSize&&(w=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const R=new Float32Array(A*w*4*u),C=new ac(R,A,w,u);C.type=Ln,C.needsUpdate=!0;const M=S*4;for(let P=0;P<u;P++){const U=p[P],N=E[P],G=b[P],V=A*w*4*P;for(let X=0;X<U.count;X++){const K=X*M;g===!0&&(s.fromBufferAttribute(U,X),R[V+K+0]=s.x,R[V+K+1]=s.y,R[V+K+2]=s.z,R[V+K+3]=0),_===!0&&(s.fromBufferAttribute(N,X),R[V+K+4]=s.x,R[V+K+5]=s.y,R[V+K+6]=s.z,R[V+K+7]=0),m===!0&&(s.fromBufferAttribute(G,X),R[V+K+8]=s.x,R[V+K+9]=s.y,R[V+K+10]=s.z,R[V+K+11]=G.itemSize===4?s.w:1)}}f={count:u,texture:C,size:new Nt(A,w)},n.set(o,f),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Op(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}const Sc=new Oe,dl=new vc(1,1),Ec=new ac,bc=new su,Tc=new pc,fl=[],pl=[],ml=new Float32Array(16),gl=new Float32Array(9),_l=new Float32Array(4);function Ji(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=fl[s];if(r===void 0&&(r=new Float32Array(s),fl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function yr(i,t){let e=pl[t];e===void 0&&(e=new Int32Array(t),pl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Bp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function kp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function zp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function Hp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function Gp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(be(e,n))return;_l.set(n),i.uniformMatrix2fv(this.addr,!1,_l),Te(e,n)}}function Vp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(be(e,n))return;gl.set(n),i.uniformMatrix3fv(this.addr,!1,gl),Te(e,n)}}function Wp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(be(e,n))return;ml.set(n),i.uniformMatrix4fv(this.addr,!1,ml),Te(e,n)}}function Xp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function qp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function $p(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function Kp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Zp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function jp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function Jp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function Qp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(dl.compareFunction=sc,r=dl):r=Sc,e.setTexture2D(t||r,s)}function tm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||bc,s)}function em(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Tc,s)}function nm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ec,s)}function im(i){switch(i){case 5126:return Bp;case 35664:return kp;case 35665:return zp;case 35666:return Hp;case 35674:return Gp;case 35675:return Vp;case 35676:return Wp;case 5124:case 35670:return Xp;case 35667:case 35671:return Yp;case 35668:case 35672:return qp;case 35669:case 35673:return $p;case 5125:return Kp;case 36294:return Zp;case 36295:return jp;case 36296:return Jp;case 35678:case 36198:case 36298:case 36306:case 35682:return Qp;case 35679:case 36299:case 36307:return tm;case 35680:case 36300:case 36308:case 36293:return em;case 36289:case 36303:case 36311:case 36292:return nm}}function sm(i,t){i.uniform1fv(this.addr,t)}function rm(i,t){const e=Ji(t,this.size,2);i.uniform2fv(this.addr,e)}function am(i,t){const e=Ji(t,this.size,3);i.uniform3fv(this.addr,e)}function om(i,t){const e=Ji(t,this.size,4);i.uniform4fv(this.addr,e)}function lm(i,t){const e=Ji(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function cm(i,t){const e=Ji(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function hm(i,t){const e=Ji(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function um(i,t){i.uniform1iv(this.addr,t)}function dm(i,t){i.uniform2iv(this.addr,t)}function fm(i,t){i.uniform3iv(this.addr,t)}function pm(i,t){i.uniform4iv(this.addr,t)}function mm(i,t){i.uniform1uiv(this.addr,t)}function gm(i,t){i.uniform2uiv(this.addr,t)}function _m(i,t){i.uniform3uiv(this.addr,t)}function vm(i,t){i.uniform4uiv(this.addr,t)}function xm(i,t,e){const n=this.cache,s=t.length,r=yr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Sc,r[a])}function Mm(i,t,e){const n=this.cache,s=t.length,r=yr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||bc,r[a])}function ym(i,t,e){const n=this.cache,s=t.length,r=yr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Tc,r[a])}function Sm(i,t,e){const n=this.cache,s=t.length,r=yr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ec,r[a])}function Em(i){switch(i){case 5126:return sm;case 35664:return rm;case 35665:return am;case 35666:return om;case 35674:return lm;case 35675:return cm;case 35676:return hm;case 5124:case 35670:return um;case 35667:case 35671:return dm;case 35668:case 35672:return fm;case 35669:case 35673:return pm;case 5125:return mm;case 36294:return gm;case 36295:return _m;case 36296:return vm;case 35678:case 36198:case 36298:case 36306:case 35682:return xm;case 35679:case 36299:case 36307:return Mm;case 35680:case 36300:case 36308:case 36293:return ym;case 36289:case 36303:case 36311:case 36292:return Sm}}class bm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=im(e.type)}}class Tm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Em(e.type)}}class wm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ea=/(\w+)(\])?(\[|\.)?/g;function vl(i,t){i.seq.push(t),i.map[t.id]=t}function Am(i,t,e){const n=i.name,s=n.length;for(ea.lastIndex=0;;){const r=ea.exec(n),a=ea.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){vl(e,l===void 0?new bm(o,i,t):new Tm(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new wm(o),vl(e,u)),e=u}}}class or{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Am(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function xl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Rm=37297;let Cm=0;function Pm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Ml=new zt;function Lm(i){jt._getMatrix(Ml,jt.workingColorSpace,i);const t=`mat3( ${Ml.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(i)){case cr:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function yl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Pm(i.getShaderSource(t),o)}else return r}function Dm(i,t){const e=Lm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Im(i,t){let e;switch(t){case _h:e="Linear";break;case vh:e="Reinhard";break;case xh:e="Cineon";break;case ql:e="ACESFilmic";break;case yh:e="AgX";break;case Sh:e="Neutral";break;case Mh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Qs=new D;function Um(){jt.getLuminanceCoefficients(Qs);const i=Qs.x.toFixed(4),t=Qs.y.toFixed(4),e=Qs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(us).join(`
`)}function Fm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Om(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function us(i){return i!==""}function Sl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function El(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Bm=/^[ \t]*#include +<([\w\d./]+)>/gm;function $a(i){return i.replace(Bm,zm)}const km=new Map;function zm(i,t){let e=Gt[t];if(e===void 0){const n=km.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return $a(e)}const Hm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bl(i){return i.replace(Hm,Gm)}function Gm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Vm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===to?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Pn&&(t="SHADOWMAP_TYPE_VSM"),t}function Wm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Vi:case Wi:t="ENVMAP_TYPE_CUBE";break;case gr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Xm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Wi:t="ENVMAP_MODE_REFRACTION";break}return t}function Ym(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Yl:t="ENVMAP_BLENDING_MULTIPLY";break;case mh:t="ENVMAP_BLENDING_MIX";break;case gh:t="ENVMAP_BLENDING_ADD";break}return t}function qm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function $m(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Vm(e),l=Wm(e),h=Xm(e),u=Ym(e),f=qm(e),d=Nm(e),g=Fm(r),_=s.createProgram();let m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(us).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(us).join(`
`),p.length>0&&(p+=`
`)):(m=[Tl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(us).join(`
`),p=[Tl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Yn?Im("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Dm("linearToOutputTexel",e.outputColorSpace),Um(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(us).join(`
`)),a=$a(a),a=Sl(a,e),a=El(a,e),o=$a(o),o=Sl(o,e),o=El(o,e),a=bl(a),o=bl(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Do?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Do?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=E+m+a,S=E+p+o,A=xl(s,s.VERTEX_SHADER,b),w=xl(s,s.FRAGMENT_SHADER,S);s.attachShader(_,A),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(P){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(_)||"",N=s.getShaderInfoLog(A)||"",G=s.getShaderInfoLog(w)||"",V=U.trim(),X=N.trim(),K=G.trim();let H=!0,st=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,w);else{const ct=yl(s,A,"vertex"),St=yl(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+ct+`
`+St)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(X===""||K==="")&&(st=!1);st&&(P.diagnostics={runnable:H,programLog:V,vertexShader:{log:X,prefix:m},fragmentShader:{log:K,prefix:p}})}s.deleteShader(A),s.deleteShader(w),C=new or(s,_),M=Om(s,_)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,Rm)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Cm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let Km=0;class Zm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new jm(t),e.set(t,n)),n}}class jm{constructor(t){this.id=Km++,this.code=t,this.usedTimes=0}}function Jm(i,t,e,n,s,r,a){const o=new lc,c=new Zm,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,v,P,U,N){const G=U.fog,V=N.geometry,X=M.isMeshStandardMaterial?U.environment:null,K=(M.isMeshStandardMaterial?e:t).get(M.envMap||X),H=K&&K.mapping===gr?K.image.height:null,st=g[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const ct=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,St=ct!==void 0?ct.length:0;let Wt=0;V.morphAttributes.position!==void 0&&(Wt=1),V.morphAttributes.normal!==void 0&&(Wt=2),V.morphAttributes.color!==void 0&&(Wt=3);let le,pe,Jt,$;if(st){const Qt=vn[st];le=Qt.vertexShader,pe=Qt.fragmentShader}else le=M.vertexShader,pe=M.fragmentShader,c.update(M),Jt=c.getVertexShaderID(M),$=c.getFragmentShaderID(M);const J=i.getRenderTarget(),gt=i.state.buffers.depth.getReversed(),Ut=N.isInstancedMesh===!0,wt=N.isBatchedMesh===!0,$t=!!M.map,Ce=!!M.matcap,L=!!K,me=!!M.aoMap,Ot=!!M.lightMap,Dt=!!M.bumpMap,xt=!!M.normalMap,ge=!!M.displacementMap,Mt=!!M.emissiveMap,Ht=!!M.metalnessMap,Ae=!!M.roughnessMap,Me=M.anisotropy>0,T=M.clearcoat>0,x=M.dispersion>0,B=M.iridescence>0,q=M.sheen>0,j=M.transmission>0,W=Me&&!!M.anisotropyMap,Tt=T&&!!M.clearcoatMap,rt=T&&!!M.clearcoatNormalMap,yt=T&&!!M.clearcoatRoughnessMap,Et=B&&!!M.iridescenceMap,nt=B&&!!M.iridescenceThicknessMap,ut=q&&!!M.sheenColorMap,Lt=q&&!!M.sheenRoughnessMap,bt=!!M.specularMap,lt=!!M.specularColorMap,kt=!!M.specularIntensityMap,I=j&&!!M.transmissionMap,it=j&&!!M.thicknessMap,at=!!M.gradientMap,pt=!!M.alphaMap,tt=M.alphaTest>0,Z=!!M.alphaHash,vt=!!M.extensions;let Ft=Yn;M.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ft=i.toneMapping);const ce={shaderID:st,shaderType:M.type,shaderName:M.name,vertexShader:le,fragmentShader:pe,defines:M.defines,customVertexShaderID:Jt,customFragmentShaderID:$,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:wt,batchingColor:wt&&N._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&N.instanceColor!==null,instancingMorph:Ut&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Xi,alphaToCoverage:!!M.alphaToCoverage,map:$t,matcap:Ce,envMap:L,envMapMode:L&&K.mapping,envMapCubeUVHeight:H,aoMap:me,lightMap:Ot,bumpMap:Dt,normalMap:xt,displacementMap:f&&ge,emissiveMap:Mt,normalMapObjectSpace:xt&&M.normalMapType===wh,normalMapTangentSpace:xt&&M.normalMapType===ic,metalnessMap:Ht,roughnessMap:Ae,anisotropy:Me,anisotropyMap:W,clearcoat:T,clearcoatMap:Tt,clearcoatNormalMap:rt,clearcoatRoughnessMap:yt,dispersion:x,iridescence:B,iridescenceMap:Et,iridescenceThicknessMap:nt,sheen:q,sheenColorMap:ut,sheenRoughnessMap:Lt,specularMap:bt,specularColorMap:lt,specularIntensityMap:kt,transmission:j,transmissionMap:I,thicknessMap:it,gradientMap:at,opaque:M.transparent===!1&&M.blending===zi&&M.alphaToCoverage===!1,alphaMap:pt,alphaTest:tt,alphaHash:Z,combine:M.combine,mapUv:$t&&_(M.map.channel),aoMapUv:me&&_(M.aoMap.channel),lightMapUv:Ot&&_(M.lightMap.channel),bumpMapUv:Dt&&_(M.bumpMap.channel),normalMapUv:xt&&_(M.normalMap.channel),displacementMapUv:ge&&_(M.displacementMap.channel),emissiveMapUv:Mt&&_(M.emissiveMap.channel),metalnessMapUv:Ht&&_(M.metalnessMap.channel),roughnessMapUv:Ae&&_(M.roughnessMap.channel),anisotropyMapUv:W&&_(M.anisotropyMap.channel),clearcoatMapUv:Tt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:rt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&_(M.sheenRoughnessMap.channel),specularMapUv:bt&&_(M.specularMap.channel),specularColorMapUv:lt&&_(M.specularColorMap.channel),specularIntensityMapUv:kt&&_(M.specularIntensityMap.channel),transmissionMapUv:I&&_(M.transmissionMap.channel),thicknessMapUv:it&&_(M.thicknessMap.channel),alphaMapUv:pt&&_(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(xt||Me),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!V.attributes.uv&&($t||pt),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:gt,skinning:N.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Wt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ft,decodeVideoTexture:$t&&M.map.isVideoTexture===!0&&jt.getTransfer(M.map.colorSpace)===ne,decodeVideoTextureEmissive:Mt&&M.emissiveMap.isVideoTexture===!0&&jt.getTransfer(M.emissiveMap.colorSpace)===ne,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===He,flipSided:M.side===Ve,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:vt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&M.extensions.multiDraw===!0||wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ce.vertexUv1s=l.has(1),ce.vertexUv2s=l.has(2),ce.vertexUv3s=l.has(3),l.clear(),ce}function p(M){const v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)v.push(P),v.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(E(v,M),b(v,M),v.push(i.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function E(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function b(M,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),v.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),M.push(o.mask)}function S(M){const v=g[M.type];let P;if(v){const U=vn[v];P=_u.clone(U.uniforms)}else P=M.uniforms;return P}function A(M,v){let P;for(let U=0,N=h.length;U<N;U++){const G=h[U];if(G.cacheKey===v){P=G,++P.usedTimes;break}}return P===void 0&&(P=new $m(i,v,M,r),h.push(P)),P}function w(M){if(--M.usedTimes===0){const v=h.indexOf(M);h[v]=h[h.length-1],h.pop(),M.destroy()}}function R(M){c.remove(M)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:A,releaseProgram:w,releaseShaderCache:R,programs:h,dispose:C}}function Qm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function t0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function wl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Al(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,d,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,f,d,g,_,m){const p=a(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(u,f,d,g,_,m){const p=a(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||t0),n.length>1&&n.sort(f||wl),s.length>1&&s.sort(f||wl)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function e0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Al,i.set(n,[a])):s>=r.length?(a=new Al,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function n0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new qt};break;case"SpotLight":e={position:new D,direction:new D,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function i0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let s0=0;function r0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function a0(i){const t=new n0,e=i0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const s=new D,r=new fe,a=new fe;function o(l){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,E=0,b=0,S=0,A=0,w=0,R=0;l.sort(r0);for(let M=0,v=l.length;M<v;M++){const P=l[M],U=P.color,N=P.intensity,G=P.distance,V=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=U.r*N,u+=U.g*N,f+=U.b*N;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],N);R++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,H=e.get(P);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=V,n.directionalShadowMatrix[d]=P.shadow.matrix,E++}n.directional[d]=X,d++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(U).multiplyScalar(N),X.distance=G,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[_]=X;const K=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,K.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=K.matrix,P.castShadow){const H=e.get(P);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=V,S++}_++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(U).multiplyScalar(N),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=X,m++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const K=P.shadow,H=e.get(P);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,H.shadowCameraNear=K.camera.near,H.shadowCameraFar=K.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=P.shadow.matrix,b++}n.point[g]=X,g++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(N),X.groundColor.copy(P.groundColor).multiplyScalar(N),n.hemi[p]=X,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==E||C.numPointShadows!==b||C.numSpotShadows!==S||C.numSpotMaps!==A||C.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=E,C.numPointShadows=b,C.numSpotShadows=S,C.numSpotMaps=A,C.numLightProbes=R,n.version=s0++)}function c(l,h){let u=0,f=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){const b=l[p];if(b.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(b.isSpotLight){const S=n.spot[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(b.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function Rl(i){const t=new a0(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function o0(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Rl(i),t.set(s,[o])):r>=a.length?(o=new Rl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const l0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function h0(i,t,e){let n=new uo;const s=new Nt,r=new Nt,a=new se,o=new Cu({depthPacking:Th}),c=new Pu,l={},h=e.maxTextureSize,u={[qn]:Ve,[Ve]:qn,[He]:He},f=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:l0,fragmentShader:c0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new we;g.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Y(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=to;let p=this.type;this.render=function(w,R,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=i.getRenderTarget(),v=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Xn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const N=p!==Pn&&this.type===Pn,G=p===Pn&&this.type!==Pn;for(let V=0,X=w.length;V<X;V++){const K=w[V],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const st=H.getFrameExtents();if(s.multiply(st),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,H.mapSize.y=r.y)),H.map===null||N===!0||G===!0){const St=this.type!==Pn?{minFilter:pn,magFilter:pn}:{};H.map!==null&&H.map.dispose(),H.map=new di(s.x,s.y,St),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ct=H.getViewportCount();for(let St=0;St<ct;St++){const Wt=H.getViewport(St);a.set(r.x*Wt.x,r.y*Wt.y,r.x*Wt.z,r.y*Wt.w),U.viewport(a),H.updateMatrices(K,St),n=H.getFrustum(),S(R,C,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===Pn&&E(H,C),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,v,P)};function E(w,R){const C=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new di(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,C,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,C,d,_,null)}function b(w,R,C,M){let v=null;const P=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)v=P;else if(v=C.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const U=v.uuid,N=R.uuid;let G=l[U];G===void 0&&(G={},l[U]=G);let V=G[N];V===void 0&&(V=v.clone(),G[N]=V,R.addEventListener("dispose",A)),v=V}if(v.visible=R.visible,v.wireframe=R.wireframe,M===Pn?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:u[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const U=i.properties.get(v);U.light=C}return v}function S(w,R,C,M,v){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===Pn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const N=t.update(w),G=w.material;if(Array.isArray(G)){const V=N.groups;for(let X=0,K=V.length;X<K;X++){const H=V[X],st=G[H.materialIndex];if(st&&st.visible){const ct=b(w,st,M,v);w.onBeforeShadow(i,w,R,C,N,ct,H),i.renderBufferDirect(C,null,N,ct,w,H),w.onAfterShadow(i,w,R,C,N,ct,H)}}}else if(G.visible){const V=b(w,G,M,v);w.onBeforeShadow(i,w,R,C,N,V,null),i.renderBufferDirect(C,null,N,V,w,null),w.onAfterShadow(i,w,R,C,N,V,null)}}const U=w.children;for(let N=0,G=U.length;N<G;N++)S(U[N],R,C,M,v)}function A(w){w.target.removeEventListener("dispose",A);for(const C in l){const M=l[C],v=w.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}const u0={[la]:ca,[ha]:fa,[ua]:pa,[Gi]:da,[ca]:la,[fa]:ha,[pa]:ua,[da]:Gi};function d0(i,t){function e(){let I=!1;const it=new se;let at=null;const pt=new se(0,0,0,0);return{setMask:function(tt){at!==tt&&!I&&(i.colorMask(tt,tt,tt,tt),at=tt)},setLocked:function(tt){I=tt},setClear:function(tt,Z,vt,Ft,ce){ce===!0&&(tt*=Ft,Z*=Ft,vt*=Ft),it.set(tt,Z,vt,Ft),pt.equals(it)===!1&&(i.clearColor(tt,Z,vt,Ft),pt.copy(it))},reset:function(){I=!1,at=null,pt.set(-1,0,0,0)}}}function n(){let I=!1,it=!1,at=null,pt=null,tt=null;return{setReversed:function(Z){if(it!==Z){const vt=t.get("EXT_clip_control");Z?vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.ZERO_TO_ONE_EXT):vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.NEGATIVE_ONE_TO_ONE_EXT),it=Z;const Ft=tt;tt=null,this.setClear(Ft)}},getReversed:function(){return it},setTest:function(Z){Z?J(i.DEPTH_TEST):gt(i.DEPTH_TEST)},setMask:function(Z){at!==Z&&!I&&(i.depthMask(Z),at=Z)},setFunc:function(Z){if(it&&(Z=u0[Z]),pt!==Z){switch(Z){case la:i.depthFunc(i.NEVER);break;case ca:i.depthFunc(i.ALWAYS);break;case ha:i.depthFunc(i.LESS);break;case Gi:i.depthFunc(i.LEQUAL);break;case ua:i.depthFunc(i.EQUAL);break;case da:i.depthFunc(i.GEQUAL);break;case fa:i.depthFunc(i.GREATER);break;case pa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=Z}},setLocked:function(Z){I=Z},setClear:function(Z){tt!==Z&&(it&&(Z=1-Z),i.clearDepth(Z),tt=Z)},reset:function(){I=!1,at=null,pt=null,tt=null,it=!1}}}function s(){let I=!1,it=null,at=null,pt=null,tt=null,Z=null,vt=null,Ft=null,ce=null;return{setTest:function(Qt){I||(Qt?J(i.STENCIL_TEST):gt(i.STENCIL_TEST))},setMask:function(Qt){it!==Qt&&!I&&(i.stencilMask(Qt),it=Qt)},setFunc:function(Qt,bn,_n){(at!==Qt||pt!==bn||tt!==_n)&&(i.stencilFunc(Qt,bn,_n),at=Qt,pt=bn,tt=_n)},setOp:function(Qt,bn,_n){(Z!==Qt||vt!==bn||Ft!==_n)&&(i.stencilOp(Qt,bn,_n),Z=Qt,vt=bn,Ft=_n)},setLocked:function(Qt){I=Qt},setClear:function(Qt){ce!==Qt&&(i.clearStencil(Qt),ce=Qt)},reset:function(){I=!1,it=null,at=null,pt=null,tt=null,Z=null,vt=null,Ft=null,ce=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,E=null,b=null,S=null,A=null,w=null,R=new qt(0,0,0),C=0,M=!1,v=null,P=null,U=null,N=null,G=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,K=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=K>=2);let st=null,ct={};const St=i.getParameter(i.SCISSOR_BOX),Wt=i.getParameter(i.VIEWPORT),le=new se().fromArray(St),pe=new se().fromArray(Wt);function Jt(I,it,at,pt){const tt=new Uint8Array(4),Z=i.createTexture();i.bindTexture(I,Z),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let vt=0;vt<at;vt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,tt):i.texImage2D(it+vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,tt);return Z}const $={};$[i.TEXTURE_2D]=Jt(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=Jt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=Jt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=Jt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(Gi),Dt(!1),xt(Ro),J(i.CULL_FACE),me(Xn);function J(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function gt(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Ut(I,it){return u[I]!==it?(i.bindFramebuffer(I,it),u[I]=it,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=it),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=it),!0):!1}function wt(I,it){let at=d,pt=!1;if(I){at=f.get(it),at===void 0&&(at=[],f.set(it,at));const tt=I.textures;if(at.length!==tt.length||at[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,vt=tt.length;Z<vt;Z++)at[Z]=i.COLOR_ATTACHMENT0+Z;at.length=tt.length,pt=!0}}else at[0]!==i.BACK&&(at[0]=i.BACK,pt=!0);pt&&i.drawBuffers(at)}function $t(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const Ce={[ai]:i.FUNC_ADD,[Jc]:i.FUNC_SUBTRACT,[Qc]:i.FUNC_REVERSE_SUBTRACT};Ce[th]=i.MIN,Ce[eh]=i.MAX;const L={[nh]:i.ZERO,[ih]:i.ONE,[sh]:i.SRC_COLOR,[aa]:i.SRC_ALPHA,[hh]:i.SRC_ALPHA_SATURATE,[lh]:i.DST_COLOR,[ah]:i.DST_ALPHA,[rh]:i.ONE_MINUS_SRC_COLOR,[oa]:i.ONE_MINUS_SRC_ALPHA,[ch]:i.ONE_MINUS_DST_COLOR,[oh]:i.ONE_MINUS_DST_ALPHA,[uh]:i.CONSTANT_COLOR,[dh]:i.ONE_MINUS_CONSTANT_COLOR,[fh]:i.CONSTANT_ALPHA,[ph]:i.ONE_MINUS_CONSTANT_ALPHA};function me(I,it,at,pt,tt,Z,vt,Ft,ce,Qt){if(I===Xn){_===!0&&(gt(i.BLEND),_=!1);return}if(_===!1&&(J(i.BLEND),_=!0),I!==jc){if(I!==m||Qt!==M){if((p!==ai||S!==ai)&&(i.blendEquation(i.FUNC_ADD),p=ai,S=ai),Qt)switch(I){case zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ge:i.blendFunc(i.ONE,i.ONE);break;case Co:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Po:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ge:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Co:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Po:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,b=null,A=null,w=null,R.set(0,0,0),C=0,m=I,M=Qt}return}tt=tt||it,Z=Z||at,vt=vt||pt,(it!==p||tt!==S)&&(i.blendEquationSeparate(Ce[it],Ce[tt]),p=it,S=tt),(at!==E||pt!==b||Z!==A||vt!==w)&&(i.blendFuncSeparate(L[at],L[pt],L[Z],L[vt]),E=at,b=pt,A=Z,w=vt),(Ft.equals(R)===!1||ce!==C)&&(i.blendColor(Ft.r,Ft.g,Ft.b,ce),R.copy(Ft),C=ce),m=I,M=!1}function Ot(I,it){I.side===He?gt(i.CULL_FACE):J(i.CULL_FACE);let at=I.side===Ve;it&&(at=!at),Dt(at),I.blending===zi&&I.transparent===!1?me(Xn):me(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const pt=I.stencilWrite;o.setTest(pt),pt&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Mt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(I){v!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),v=I)}function xt(I){I!==$c?(J(i.CULL_FACE),I!==P&&(I===Ro?i.cullFace(i.BACK):I===Kc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):gt(i.CULL_FACE),P=I}function ge(I){I!==U&&(X&&i.lineWidth(I),U=I)}function Mt(I,it,at){I?(J(i.POLYGON_OFFSET_FILL),(N!==it||G!==at)&&(i.polygonOffset(it,at),N=it,G=at)):gt(i.POLYGON_OFFSET_FILL)}function Ht(I){I?J(i.SCISSOR_TEST):gt(i.SCISSOR_TEST)}function Ae(I){I===void 0&&(I=i.TEXTURE0+V-1),st!==I&&(i.activeTexture(I),st=I)}function Me(I,it,at){at===void 0&&(st===null?at=i.TEXTURE0+V-1:at=st);let pt=ct[at];pt===void 0&&(pt={type:void 0,texture:void 0},ct[at]=pt),(pt.type!==I||pt.texture!==it)&&(st!==at&&(i.activeTexture(at),st=at),i.bindTexture(I,it||$[I]),pt.type=I,pt.texture=it)}function T(){const I=ct[st];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{i.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{i.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{i.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function rt(){try{i.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function yt(){try{i.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Et(){try{i.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function nt(){try{i.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ut(I){le.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),le.copy(I))}function Lt(I){pe.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),pe.copy(I))}function bt(I,it){let at=l.get(it);at===void 0&&(at=new WeakMap,l.set(it,at));let pt=at.get(I);pt===void 0&&(pt=i.getUniformBlockIndex(it,I.name),at.set(I,pt))}function lt(I,it){const pt=l.get(it).get(I);c.get(it)!==pt&&(i.uniformBlockBinding(it,pt,I.__bindingPointIndex),c.set(it,pt))}function kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},st=null,ct={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,E=null,b=null,S=null,A=null,w=null,R=new qt(0,0,0),C=0,M=!1,v=null,P=null,U=null,N=null,G=null,le.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:gt,bindFramebuffer:Ut,drawBuffers:wt,useProgram:$t,setBlending:me,setMaterial:Ot,setFlipSided:Dt,setCullFace:xt,setLineWidth:ge,setPolygonOffset:Mt,setScissorTest:Ht,activeTexture:Ae,bindTexture:Me,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:B,texImage2D:Et,texImage3D:nt,updateUBOMapping:bt,uniformBlockBinding:lt,texStorage2D:rt,texStorage3D:yt,texSubImage2D:q,texSubImage3D:j,compressedTexSubImage2D:W,compressedTexSubImage3D:Tt,scissor:ut,viewport:Lt,reset:kt}}function f0(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Nt,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return d?new OffscreenCanvas(T,x):ur("canvas")}function _(T,x,B){let q=1;const j=Me(T);if((j.width>B||j.height>B)&&(q=B/Math.max(j.width,j.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const W=Math.floor(q*j.width),Tt=Math.floor(q*j.height);u===void 0&&(u=g(W,Tt));const rt=x?g(W,Tt):u;return rt.width=W,rt.height=Tt,rt.getContext("2d").drawImage(T,0,0,W,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+W+"x"+Tt+")."),rt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(T,x,B,q,j=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let W=x;if(x===i.RED&&(B===i.FLOAT&&(W=i.R32F),B===i.HALF_FLOAT&&(W=i.R16F),B===i.UNSIGNED_BYTE&&(W=i.R8)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(W=i.R8UI),B===i.UNSIGNED_SHORT&&(W=i.R16UI),B===i.UNSIGNED_INT&&(W=i.R32UI),B===i.BYTE&&(W=i.R8I),B===i.SHORT&&(W=i.R16I),B===i.INT&&(W=i.R32I)),x===i.RG&&(B===i.FLOAT&&(W=i.RG32F),B===i.HALF_FLOAT&&(W=i.RG16F),B===i.UNSIGNED_BYTE&&(W=i.RG8)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(W=i.RG8UI),B===i.UNSIGNED_SHORT&&(W=i.RG16UI),B===i.UNSIGNED_INT&&(W=i.RG32UI),B===i.BYTE&&(W=i.RG8I),B===i.SHORT&&(W=i.RG16I),B===i.INT&&(W=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(W=i.RGB8UI),B===i.UNSIGNED_SHORT&&(W=i.RGB16UI),B===i.UNSIGNED_INT&&(W=i.RGB32UI),B===i.BYTE&&(W=i.RGB8I),B===i.SHORT&&(W=i.RGB16I),B===i.INT&&(W=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),B===i.UNSIGNED_INT&&(W=i.RGBA32UI),B===i.BYTE&&(W=i.RGBA8I),B===i.SHORT&&(W=i.RGBA16I),B===i.INT&&(W=i.RGBA32I)),x===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(W=i.R11F_G11F_B10F)),x===i.RGBA){const Tt=j?cr:jt.getTransfer(q);B===i.FLOAT&&(W=i.RGBA32F),B===i.HALF_FLOAT&&(W=i.RGBA16F),B===i.UNSIGNED_BYTE&&(W=Tt===ne?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function S(T,x){let B;return T?x===null||x===ui||x===vs?B=i.DEPTH24_STENCIL8:x===Ln?B=i.DEPTH32F_STENCIL8:x===_s&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ui||x===vs?B=i.DEPTH_COMPONENT24:x===Ln?B=i.DEPTH_COMPONENT32F:x===_s&&(B=i.DEPTH_COMPONENT16),B}function A(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==pn&&T.minFilter!==Mn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function w(T){const x=T.target;x.removeEventListener("dispose",w),C(x),x.isVideoTexture&&h.delete(x)}function R(T){const x=T.target;x.removeEventListener("dispose",R),v(x)}function C(T){const x=n.get(T);if(x.__webglInit===void 0)return;const B=T.source,q=f.get(B);if(q){const j=q[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&M(T),Object.keys(q).length===0&&f.delete(B)}n.remove(T)}function M(T){const x=n.get(T);i.deleteTexture(x.__webglTexture);const B=T.source,q=f.get(B);delete q[x.__cacheKey],a.memory.textures--}function v(T){const x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let j=0;j<x.__webglFramebuffer[q].length;j++)i.deleteFramebuffer(x.__webglFramebuffer[q][j]);else i.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)i.deleteFramebuffer(x.__webglFramebuffer[q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=T.textures;for(let q=0,j=B.length;q<j;q++){const W=n.get(B[q]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(B[q])}n.remove(T)}let P=0;function U(){P=0}function N(){const T=P;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),P+=1,T}function G(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function V(T,x){const B=n.get(T);if(T.isVideoTexture&&Ht(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){const q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(B,T,x);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function X(T,x){const B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){$(B,T,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function K(T,x){const B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){$(B,T,x);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function H(T,x){const B=n.get(T);if(T.version>0&&B.__version!==T.version){J(B,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}const st={[lr]:i.REPEAT,[li]:i.CLAMP_TO_EDGE,[_a]:i.MIRRORED_REPEAT},ct={[pn]:i.NEAREST,[Eh]:i.NEAREST_MIPMAP_NEAREST,[Rs]:i.NEAREST_MIPMAP_LINEAR,[Mn]:i.LINEAR,[br]:i.LINEAR_MIPMAP_NEAREST,[ci]:i.LINEAR_MIPMAP_LINEAR},St={[Ah]:i.NEVER,[Ih]:i.ALWAYS,[Rh]:i.LESS,[sc]:i.LEQUAL,[Ch]:i.EQUAL,[Dh]:i.GEQUAL,[Ph]:i.GREATER,[Lh]:i.NOTEQUAL};function Wt(T,x){if(x.type===Ln&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Mn||x.magFilter===br||x.magFilter===Rs||x.magFilter===ci||x.minFilter===Mn||x.minFilter===br||x.minFilter===Rs||x.minFilter===ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,st[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,st[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,st[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ct[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ct[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,St[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===pn||x.minFilter!==Rs&&x.minFilter!==ci||x.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function le(T,x){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",w));const q=x.source;let j=f.get(q);j===void 0&&(j={},f.set(q,j));const W=G(x);if(W!==T.__cacheKey){j[W]===void 0&&(j[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),j[W].usedTimes++;const Tt=j[T.__cacheKey];Tt!==void 0&&(j[T.__cacheKey].usedTimes--,Tt.usedTimes===0&&M(x)),T.__cacheKey=W,T.__webglTexture=j[W].texture}return B}function pe(T,x,B){return Math.floor(Math.floor(T/B)/x)}function Jt(T,x,B,q){const W=T.updateRanges;if(W.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,B,q,x.data);else{W.sort((nt,ut)=>nt.start-ut.start);let Tt=0;for(let nt=1;nt<W.length;nt++){const ut=W[Tt],Lt=W[nt],bt=ut.start+ut.count,lt=pe(Lt.start,x.width,4),kt=pe(ut.start,x.width,4);Lt.start<=bt+1&&lt===kt&&pe(Lt.start+Lt.count-1,x.width,4)===lt?ut.count=Math.max(ut.count,Lt.start+Lt.count-ut.start):(++Tt,W[Tt]=Lt)}W.length=Tt+1;const rt=i.getParameter(i.UNPACK_ROW_LENGTH),yt=i.getParameter(i.UNPACK_SKIP_PIXELS),Et=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let nt=0,ut=W.length;nt<ut;nt++){const Lt=W[nt],bt=Math.floor(Lt.start/4),lt=Math.ceil(Lt.count/4),kt=bt%x.width,I=Math.floor(bt/x.width),it=lt,at=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,kt),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),e.texSubImage2D(i.TEXTURE_2D,0,kt,I,it,at,B,q,x.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,rt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,yt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Et)}}function $(T,x,B){let q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=i.TEXTURE_3D);const j=le(T,x),W=x.source;e.bindTexture(q,T.__webglTexture,i.TEXTURE0+B);const Tt=n.get(W);if(W.version!==Tt.__version||j===!0){e.activeTexture(i.TEXTURE0+B);const rt=jt.getPrimaries(jt.workingColorSpace),yt=x.colorSpace===Wn?null:jt.getPrimaries(x.colorSpace),Et=x.colorSpace===Wn||rt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let nt=_(x.image,!1,s.maxTextureSize);nt=Ae(x,nt);const ut=r.convert(x.format,x.colorSpace),Lt=r.convert(x.type);let bt=b(x.internalFormat,ut,Lt,x.colorSpace,x.isVideoTexture);Wt(q,x);let lt;const kt=x.mipmaps,I=x.isVideoTexture!==!0,it=Tt.__version===void 0||j===!0,at=W.dataReady,pt=A(x,nt);if(x.isDepthTexture)bt=S(x.format===Ms,x.type),it&&(I?e.texStorage2D(i.TEXTURE_2D,1,bt,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,bt,nt.width,nt.height,0,ut,Lt,null));else if(x.isDataTexture)if(kt.length>0){I&&it&&e.texStorage2D(i.TEXTURE_2D,pt,bt,kt[0].width,kt[0].height);for(let tt=0,Z=kt.length;tt<Z;tt++)lt=kt[tt],I?at&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,lt.width,lt.height,ut,Lt,lt.data):e.texImage2D(i.TEXTURE_2D,tt,bt,lt.width,lt.height,0,ut,Lt,lt.data);x.generateMipmaps=!1}else I?(it&&e.texStorage2D(i.TEXTURE_2D,pt,bt,nt.width,nt.height),at&&Jt(x,nt,ut,Lt)):e.texImage2D(i.TEXTURE_2D,0,bt,nt.width,nt.height,0,ut,Lt,nt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){I&&it&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,bt,kt[0].width,kt[0].height,nt.depth);for(let tt=0,Z=kt.length;tt<Z;tt++)if(lt=kt[tt],x.format!==fn)if(ut!==null)if(I){if(at)if(x.layerUpdates.size>0){const vt=sl(lt.width,lt.height,x.format,x.type);for(const Ft of x.layerUpdates){const ce=lt.data.subarray(Ft*vt/lt.data.BYTES_PER_ELEMENT,(Ft+1)*vt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,Ft,lt.width,lt.height,1,ut,ce)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,lt.width,lt.height,nt.depth,ut,lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,bt,lt.width,lt.height,nt.depth,0,lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?at&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,lt.width,lt.height,nt.depth,ut,Lt,lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,bt,lt.width,lt.height,nt.depth,0,ut,Lt,lt.data)}else{I&&it&&e.texStorage2D(i.TEXTURE_2D,pt,bt,kt[0].width,kt[0].height);for(let tt=0,Z=kt.length;tt<Z;tt++)lt=kt[tt],x.format!==fn?ut!==null?I?at&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,lt.width,lt.height,ut,lt.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,bt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?at&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,lt.width,lt.height,ut,Lt,lt.data):e.texImage2D(i.TEXTURE_2D,tt,bt,lt.width,lt.height,0,ut,Lt,lt.data)}else if(x.isDataArrayTexture)if(I){if(it&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,bt,nt.width,nt.height,nt.depth),at)if(x.layerUpdates.size>0){const tt=sl(nt.width,nt.height,x.format,x.type);for(const Z of x.layerUpdates){const vt=nt.data.subarray(Z*tt/nt.data.BYTES_PER_ELEMENT,(Z+1)*tt/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,nt.width,nt.height,1,ut,Lt,vt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ut,Lt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,bt,nt.width,nt.height,nt.depth,0,ut,Lt,nt.data);else if(x.isData3DTexture)I?(it&&e.texStorage3D(i.TEXTURE_3D,pt,bt,nt.width,nt.height,nt.depth),at&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ut,Lt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,bt,nt.width,nt.height,nt.depth,0,ut,Lt,nt.data);else if(x.isFramebufferTexture){if(it)if(I)e.texStorage2D(i.TEXTURE_2D,pt,bt,nt.width,nt.height);else{let tt=nt.width,Z=nt.height;for(let vt=0;vt<pt;vt++)e.texImage2D(i.TEXTURE_2D,vt,bt,tt,Z,0,ut,Lt,null),tt>>=1,Z>>=1}}else if(kt.length>0){if(I&&it){const tt=Me(kt[0]);e.texStorage2D(i.TEXTURE_2D,pt,bt,tt.width,tt.height)}for(let tt=0,Z=kt.length;tt<Z;tt++)lt=kt[tt],I?at&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,ut,Lt,lt):e.texImage2D(i.TEXTURE_2D,tt,bt,ut,Lt,lt);x.generateMipmaps=!1}else if(I){if(it){const tt=Me(nt);e.texStorage2D(i.TEXTURE_2D,pt,bt,tt.width,tt.height)}at&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,Lt,nt)}else e.texImage2D(i.TEXTURE_2D,0,bt,ut,Lt,nt);m(x)&&p(q),Tt.__version=W.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function J(T,x,B){if(x.image.length!==6)return;const q=le(T,x),j=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);const W=n.get(j);if(j.version!==W.__version||q===!0){e.activeTexture(i.TEXTURE0+B);const Tt=jt.getPrimaries(jt.workingColorSpace),rt=x.colorSpace===Wn?null:jt.getPrimaries(x.colorSpace),yt=x.colorSpace===Wn||Tt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Et=x.isCompressedTexture||x.image[0].isCompressedTexture,nt=x.image[0]&&x.image[0].isDataTexture,ut=[];for(let Z=0;Z<6;Z++)!Et&&!nt?ut[Z]=_(x.image[Z],!0,s.maxCubemapSize):ut[Z]=nt?x.image[Z].image:x.image[Z],ut[Z]=Ae(x,ut[Z]);const Lt=ut[0],bt=r.convert(x.format,x.colorSpace),lt=r.convert(x.type),kt=b(x.internalFormat,bt,lt,x.colorSpace),I=x.isVideoTexture!==!0,it=W.__version===void 0||q===!0,at=j.dataReady;let pt=A(x,Lt);Wt(i.TEXTURE_CUBE_MAP,x);let tt;if(Et){I&&it&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,kt,Lt.width,Lt.height);for(let Z=0;Z<6;Z++){tt=ut[Z].mipmaps;for(let vt=0;vt<tt.length;vt++){const Ft=tt[vt];x.format!==fn?bt!==null?I?at&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,vt,0,0,Ft.width,Ft.height,bt,Ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,vt,kt,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,vt,0,0,Ft.width,Ft.height,bt,lt,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,vt,kt,Ft.width,Ft.height,0,bt,lt,Ft.data)}}}else{if(tt=x.mipmaps,I&&it){tt.length>0&&pt++;const Z=Me(ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,kt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(nt){I?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ut[Z].width,ut[Z].height,bt,lt,ut[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,kt,ut[Z].width,ut[Z].height,0,bt,lt,ut[Z].data);for(let vt=0;vt<tt.length;vt++){const ce=tt[vt].image[Z].image;I?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,vt+1,0,0,ce.width,ce.height,bt,lt,ce.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,vt+1,kt,ce.width,ce.height,0,bt,lt,ce.data)}}else{I?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,bt,lt,ut[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,kt,bt,lt,ut[Z]);for(let vt=0;vt<tt.length;vt++){const Ft=tt[vt];I?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,vt+1,0,0,bt,lt,Ft.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,vt+1,kt,bt,lt,Ft.image[Z])}}}m(x)&&p(i.TEXTURE_CUBE_MAP),W.__version=j.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function gt(T,x,B,q,j,W){const Tt=r.convert(B.format,B.colorSpace),rt=r.convert(B.type),yt=b(B.internalFormat,Tt,rt,B.colorSpace),Et=n.get(x),nt=n.get(B);if(nt.__renderTarget=x,!Et.__hasExternalTextures){const ut=Math.max(1,x.width>>W),Lt=Math.max(1,x.height>>W);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,W,yt,ut,Lt,x.depth,0,Tt,rt,null):e.texImage2D(j,W,yt,ut,Lt,0,Tt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Mt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,j,nt.__webglTexture,0,ge(x)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,j,nt.__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(T,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){const q=x.depthTexture,j=q&&q.isDepthTexture?q.type:null,W=S(x.stencilBuffer,j),Tt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=ge(x);Mt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,W,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,W,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,W,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,T)}else{const q=x.textures;for(let j=0;j<q.length;j++){const W=q[j],Tt=r.convert(W.format,W.colorSpace),rt=r.convert(W.type),yt=b(W.internalFormat,Tt,rt,W.colorSpace),Et=ge(x);B&&Mt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,yt,x.width,x.height):Mt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et,yt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,yt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function wt(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(x.depthTexture);q.__renderTarget=x,(!q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);const j=q.__webglTexture,W=ge(x);if(x.depthTexture.format===xs)Mt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(x.depthTexture.format===Ms)Mt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function $t(T){const x=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const q=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",j)};q.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=q}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const q=T.texture.mipmaps;q&&q.length>0?wt(x.__webglFramebuffer[0],T):wt(x.__webglFramebuffer,T)}else if(B){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=i.createRenderbuffer(),Ut(x.__webglDepthbuffer[q],T,!1);else{const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,W)}}else{const q=T.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ut(x.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,W)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(T,x,B){const q=n.get(T);x!==void 0&&gt(q.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&$t(T)}function L(T){const x=T.texture,B=n.get(T),q=n.get(x);T.addEventListener("dispose",R);const j=T.textures,W=T.isWebGLCubeRenderTarget===!0,Tt=j.length>1;if(Tt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=x.version,a.memory.textures++),W){B.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[rt]=[];for(let yt=0;yt<x.mipmaps.length;yt++)B.__webglFramebuffer[rt][yt]=i.createFramebuffer()}else B.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let rt=0;rt<x.mipmaps.length;rt++)B.__webglFramebuffer[rt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let rt=0,yt=j.length;rt<yt;rt++){const Et=n.get(j[rt]);Et.__webglTexture===void 0&&(Et.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Mt(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let rt=0;rt<j.length;rt++){const yt=j[rt];B.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[rt]);const Et=r.convert(yt.format,yt.colorSpace),nt=r.convert(yt.type),ut=b(yt.internalFormat,Et,nt,yt.colorSpace,T.isXRRenderTarget===!0),Lt=ge(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,ut,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,B.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Ut(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Wt(i.TEXTURE_CUBE_MAP,x);for(let rt=0;rt<6;rt++)if(x.mipmaps&&x.mipmaps.length>0)for(let yt=0;yt<x.mipmaps.length;yt++)gt(B.__webglFramebuffer[rt][yt],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,yt);else gt(B.__webglFramebuffer[rt],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(x)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let rt=0,yt=j.length;rt<yt;rt++){const Et=j[rt],nt=n.get(Et);let ut=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ut=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,nt.__webglTexture),Wt(ut,Et),gt(B.__webglFramebuffer,T,Et,i.COLOR_ATTACHMENT0+rt,ut,0),m(Et)&&p(ut)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(rt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,q.__webglTexture),Wt(rt,x),x.mipmaps&&x.mipmaps.length>0)for(let yt=0;yt<x.mipmaps.length;yt++)gt(B.__webglFramebuffer[yt],T,x,i.COLOR_ATTACHMENT0,rt,yt);else gt(B.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,rt,0);m(x)&&p(rt),e.unbindTexture()}T.depthBuffer&&$t(T)}function me(T){const x=T.textures;for(let B=0,q=x.length;B<q;B++){const j=x[B];if(m(j)){const W=E(T),Tt=n.get(j).__webglTexture;e.bindTexture(W,Tt),p(W),e.unbindTexture()}}}const Ot=[],Dt=[];function xt(T){if(T.samples>0){if(Mt(T)===!1){const x=T.textures,B=T.width,q=T.height;let j=i.COLOR_BUFFER_BIT;const W=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(T),rt=x.length>1;if(rt)for(let Et=0;Et<x.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);const yt=T.texture.mipmaps;yt&&yt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Et=0;Et<x.length;Et++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[Et]);const nt=n.get(x[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,nt,0)}i.blitFramebuffer(0,0,B,q,0,0,B,q,j,i.NEAREST),c===!0&&(Ot.length=0,Dt.length=0,Ot.push(i.COLOR_ATTACHMENT0+Et),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ot.push(W),Dt.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Dt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ot))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let Et=0;Et<x.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[Et]);const nt=n.get(x[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ge(T){return Math.min(s.maxSamples,T.samples)}function Mt(T){const x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ht(T){const x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function Ae(T,x){const B=T.colorSpace,q=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==Xi&&B!==Wn&&(jt.getTransfer(B)===ne?(q!==fn||j!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function Me(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=U,this.setTexture2D=V,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=H,this.rebindTextures=Ce,this.setupRenderTarget=L,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Mt}function p0(i,t){function e(n,s=Wn){let r;const a=jt.getTransfer(s);if(n===Sn)return i.UNSIGNED_BYTE;if(n===no)return i.UNSIGNED_SHORT_4_4_4_4;if(n===io)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Jl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Kl)return i.BYTE;if(n===Zl)return i.SHORT;if(n===_s)return i.UNSIGNED_SHORT;if(n===eo)return i.INT;if(n===ui)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===Ss)return i.HALF_FLOAT;if(n===Ql)return i.ALPHA;if(n===tc)return i.RGB;if(n===fn)return i.RGBA;if(n===xs)return i.DEPTH_COMPONENT;if(n===Ms)return i.DEPTH_STENCIL;if(n===ec)return i.RED;if(n===so)return i.RED_INTEGER;if(n===nc)return i.RG;if(n===ro)return i.RG_INTEGER;if(n===ao)return i.RGBA_INTEGER;if(n===ir||n===sr||n===rr||n===ar)if(a===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ir)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ir)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===va||n===xa||n===Ma||n===ya)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===va)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ma)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sa||n===Ea||n===ba)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sa||n===Ea)return a===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ba)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ta||n===wa||n===Aa||n===Ra||n===Ca||n===Pa||n===La||n===Da||n===Ia||n===Ua||n===Na||n===Fa||n===Oa||n===Ba)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ta)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Aa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ra)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ca)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===La)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Da)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ia)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ua)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Na)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ba)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ka||n===za||n===Ha)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ka)return a===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===za)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ha)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ga||n===Va||n===Wa||n===Xa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ga)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Va)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const m0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new xc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new $n({vertexShader:m0,fragmentShader:g0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Y(new dn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class v0 extends ji{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new _0,p={},E=e.getContextAttributes();let b=null,S=null;const A=[],w=[],R=new Nt;let C=null;const M=new ze;M.viewport=new se;const v=new ze;v.viewport=new se;const P=[M,v],U=new Bu;let N=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let J=A[$];return J===void 0&&(J=new Xr,A[$]=J),J.getTargetRaySpace()},this.getControllerGrip=function($){let J=A[$];return J===void 0&&(J=new Xr,A[$]=J),J.getGripSpace()},this.getHand=function($){let J=A[$];return J===void 0&&(J=new Xr,A[$]=J),J.getHandSpace()};function V($){const J=w.indexOf($.inputSource);if(J===-1)return;const gt=A[J];gt!==void 0&&(gt.update($.inputSource,$.frame,l||a),gt.dispatchEvent({type:$.type,data:$.inputSource}))}function X(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",K);for(let $=0;$<A.length;$++){const J=w[$];J!==null&&(w[$]=null,A[$].disconnect(J))}N=null,G=null,m.reset();for(const $ in p)delete p[$];t.setRenderTarget(b),d=null,f=null,u=null,s=null,S=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",X),s.addEventListener("inputsourceschange",K),E.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,Ut=null,wt=null;E.depth&&(wt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=E.stencil?Ms:xs,Ut=E.stencil?vs:ui);const $t={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer($t),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new di(f.textureWidth,f.textureHeight,{format:fn,type:Sn,depthTexture:new vc(f.textureWidth,f.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const gt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,gt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new di(d.framebufferWidth,d.framebufferHeight,{format:fn,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Jt.setContext(s),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K($){for(let J=0;J<$.removed.length;J++){const gt=$.removed[J],Ut=w.indexOf(gt);Ut>=0&&(w[Ut]=null,A[Ut].disconnect(gt))}for(let J=0;J<$.added.length;J++){const gt=$.added[J];let Ut=w.indexOf(gt);if(Ut===-1){for(let $t=0;$t<A.length;$t++)if($t>=w.length){w.push(gt),Ut=$t;break}else if(w[$t]===null){w[$t]=gt,Ut=$t;break}if(Ut===-1)break}const wt=A[Ut];wt&&wt.connect(gt)}}const H=new D,st=new D;function ct($,J,gt){H.setFromMatrixPosition(J.matrixWorld),st.setFromMatrixPosition(gt.matrixWorld);const Ut=H.distanceTo(st),wt=J.projectionMatrix.elements,$t=gt.projectionMatrix.elements,Ce=wt[14]/(wt[10]-1),L=wt[14]/(wt[10]+1),me=(wt[9]+1)/wt[5],Ot=(wt[9]-1)/wt[5],Dt=(wt[8]-1)/wt[0],xt=($t[8]+1)/$t[0],ge=Ce*Dt,Mt=Ce*xt,Ht=Ut/(-Dt+xt),Ae=Ht*-Dt;if(J.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ae),$.translateZ(Ht),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),wt[10]===-1)$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Me=Ce+Ht,T=L+Ht,x=ge-Ae,B=Mt+(Ut-Ae),q=me*L/T*Me,j=Ot*L/T*Me;$.projectionMatrix.makePerspective(x,B,q,j,Me,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function St($,J){J===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(J.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let J=$.near,gt=$.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(gt=m.depthFar)),U.near=v.near=M.near=J,U.far=v.far=M.far=gt,(N!==U.near||G!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),N=U.near,G=U.far),U.layers.mask=$.layers.mask|6,M.layers.mask=U.layers.mask&3,v.layers.mask=U.layers.mask&5;const Ut=$.parent,wt=U.cameras;St(U,Ut);for(let $t=0;$t<wt.length;$t++)St(wt[$t],Ut);wt.length===2?ct(U,M,v):U.projectionMatrix.copy(M.projectionMatrix),Wt($,U,Ut)};function Wt($,J,gt){gt===null?$.matrix.copy(J.matrixWorld):($.matrix.copy(gt.matrixWorld),$.matrix.invert(),$.matrix.multiply(J.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Yi*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function($){return p[$]};let le=null;function pe($,J){if(h=J.getViewerPose(l||a),g=J,h!==null){const gt=h.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let Ut=!1;gt.length!==U.cameras.length&&(U.cameras.length=0,Ut=!0);for(let L=0;L<gt.length;L++){const me=gt[L];let Ot=null;if(d!==null)Ot=d.getViewport(me);else{const xt=u.getViewSubImage(f,me);Ot=xt.viewport,L===0&&(t.setRenderTargetTextures(S,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(S))}let Dt=P[L];Dt===void 0&&(Dt=new ze,Dt.layers.enable(L),Dt.viewport=new se,P[L]=Dt),Dt.matrix.fromArray(me.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(me.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),L===0&&(U.matrix.copy(Dt.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ut===!0&&U.cameras.push(Dt)}const wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const L=u.getDepthInformation(gt[0]);L&&L.isValid&&L.texture&&m.init(L,s.renderState)}if(wt&&wt.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let L=0;L<gt.length;L++){const me=gt[L].camera;if(me){let Ot=p[me];Ot||(Ot=new xc,p[me]=Ot);const Dt=u.getCameraImage(me);Ot.sourceTexture=Dt}}}}for(let gt=0;gt<A.length;gt++){const Ut=w[gt],wt=A[gt];Ut!==null&&wt!==void 0&&wt.update(Ut,J,l||a)}le&&le($,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const Jt=new yc;Jt.setAnimationLoop(pe),this.setAnimationLoop=function($){le=$},this.dispose=function(){}}}const ii=new on,x0=new fe;function M0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,dc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,b,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,E,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ve&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ve&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=t.get(p),b=E.envMap,S=E.envMapRotation;b&&(m.envMap.value=b,ii.copy(S),ii.x*=-1,ii.y*=-1,ii.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),m.envMapRotation.value.setFromMatrix4(x0.makeRotationFromEuler(ii)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ve&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function y0(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,b){const S=b.program;n.uniformBlockBinding(E,S)}function l(E,b){let S=s[E.id];S===void 0&&(g(E),S=h(E),s[E.id]=S,E.addEventListener("dispose",m));const A=b.program;n.updateUBOMapping(E,A);const w=t.render.frame;r[E.id]!==w&&(f(E),r[E.id]=w)}function h(E){const b=u();E.__bindingPointIndex=b;const S=i.createBuffer(),A=E.__size,w=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,A,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const b=s[E.id],S=E.uniforms,A=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let w=0,R=S.length;w<R;w++){const C=Array.isArray(S[w])?S[w]:[S[w]];for(let M=0,v=C.length;M<v;M++){const P=C[M];if(d(P,w,M,A)===!0){const U=P.__offset,N=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let V=0;V<N.length;V++){const X=N[V],K=_(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,U+G,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,G),G+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(E,b,S,A){const w=E.value,R=b+"_"+S;if(A[R]===void 0)return typeof w=="number"||typeof w=="boolean"?A[R]=w:A[R]=w.clone(),!0;{const C=A[R];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return A[R]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(E){const b=E.uniforms;let S=0;const A=16;for(let R=0,C=b.length;R<C;R++){const M=Array.isArray(b[R])?b[R]:[b[R]];for(let v=0,P=M.length;v<P;v++){const U=M[v],N=Array.isArray(U.value)?U.value:[U.value];for(let G=0,V=N.length;G<V;G++){const X=N[G],K=_(X),H=S%A,st=H%K.boundary,ct=H+st;S+=st,ct!==0&&A-ct<K.storage&&(S+=A-ct),U.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=K.storage}}}const w=S%A;return w>0&&(S+=A-w),E.__size=S,E.__cache={},this}function _(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){const b=E.target;b.removeEventListener("dispose",m);const S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class S0{constructor(t={}){const{canvas:e=jh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const E=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let A=!1;this._outputColorSpace=ke;let w=0,R=0,C=null,M=-1,v=null;const P=new se,U=new se;let N=null;const G=new qt(0);let V=0,X=e.width,K=e.height,H=1,st=null,ct=null;const St=new se(0,0,X,K),Wt=new se(0,0,X,K);let le=!1;const pe=new uo;let Jt=!1,$=!1;const J=new fe,gt=new D,Ut=new se,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function Ce(){return C===null?H:1}let L=n;function me(y,F){return e.getContext(y,F)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qa}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",tt,!1),L===null){const F="webgl2";if(L=me(F,y),L===null)throw me(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ot,Dt,xt,ge,Mt,Ht,Ae,Me,T,x,B,q,j,W,Tt,rt,yt,Et,nt,ut,Lt,bt,lt,kt;function I(){Ot=new Dp(L),Ot.init(),bt=new p0(L,Ot),Dt=new Tp(L,Ot,t,bt),xt=new d0(L,Ot),Dt.reversedDepthBuffer&&f&&xt.buffers.depth.setReversed(!0),ge=new Np(L),Mt=new Qm,Ht=new f0(L,Ot,xt,Mt,Dt,bt,ge),Ae=new Ap(S),Me=new Lp(S),T=new zu(L),lt=new Ep(L,T),x=new Ip(L,T,ge,lt),B=new Op(L,x,T,ge),nt=new Fp(L,Dt,Ht),rt=new wp(Mt),q=new Jm(S,Ae,Me,Ot,Dt,lt,rt),j=new M0(S,Mt),W=new e0,Tt=new o0(Ot),Et=new Sp(S,Ae,Me,xt,B,d,c),yt=new h0(S,B,Dt),kt=new y0(L,ge,Dt,xt),ut=new bp(L,Ot,ge),Lt=new Up(L,Ot,ge),ge.programs=q.programs,S.capabilities=Dt,S.extensions=Ot,S.properties=Mt,S.renderLists=W,S.shadowMap=yt,S.state=xt,S.info=ge}I();const it=new v0(S,L);this.xr=it,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const y=Ot.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ot.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(y){y!==void 0&&(H=y,this.setSize(X,K,!1))},this.getSize=function(y){return y.set(X,K)},this.setSize=function(y,F,k=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=y,K=F,e.width=Math.floor(y*H),e.height=Math.floor(F*H),k===!0&&(e.style.width=y+"px",e.style.height=F+"px"),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(X*H,K*H).floor()},this.setDrawingBufferSize=function(y,F,k){X=y,K=F,H=k,e.width=Math.floor(y*k),e.height=Math.floor(F*k),this.setViewport(0,0,y,F)},this.getCurrentViewport=function(y){return y.copy(P)},this.getViewport=function(y){return y.copy(St)},this.setViewport=function(y,F,k,z){y.isVector4?St.set(y.x,y.y,y.z,y.w):St.set(y,F,k,z),xt.viewport(P.copy(St).multiplyScalar(H).round())},this.getScissor=function(y){return y.copy(Wt)},this.setScissor=function(y,F,k,z){y.isVector4?Wt.set(y.x,y.y,y.z,y.w):Wt.set(y,F,k,z),xt.scissor(U.copy(Wt).multiplyScalar(H).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(y){xt.setScissorTest(le=y)},this.setOpaqueSort=function(y){st=y},this.setTransparentSort=function(y){ct=y},this.getClearColor=function(y){return y.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor(...arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha(...arguments)},this.clear=function(y=!0,F=!0,k=!0){let z=0;if(y){let O=!1;if(C!==null){const et=C.texture.format;O=et===ao||et===ro||et===so}if(O){const et=C.texture.type,ht=et===Sn||et===ui||et===_s||et===vs||et===no||et===io,_t=Et.getClearColor(),ft=Et.getClearAlpha(),Ct=_t.r,It=_t.g,At=_t.b;ht?(g[0]=Ct,g[1]=It,g[2]=At,g[3]=ft,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Ct,_[1]=It,_[2]=At,_[3]=ft,L.clearBufferiv(L.COLOR,0,_))}else z|=L.COLOR_BUFFER_BIT}F&&(z|=L.DEPTH_BUFFER_BIT),k&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),Et.dispose(),W.dispose(),Tt.dispose(),Mt.dispose(),Ae.dispose(),Me.dispose(),B.dispose(),lt.dispose(),kt.dispose(),q.dispose(),it.dispose(),it.removeEventListener("sessionstart",_n),it.removeEventListener("sessionend",So),Zn.stop()};function at(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const y=ge.autoReset,F=yt.enabled,k=yt.autoUpdate,z=yt.needsUpdate,O=yt.type;I(),ge.autoReset=y,yt.enabled=F,yt.autoUpdate=k,yt.needsUpdate=z,yt.type=O}function tt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Z(y){const F=y.target;F.removeEventListener("dispose",Z),vt(F)}function vt(y){Ft(y),Mt.remove(y)}function Ft(y){const F=Mt.get(y).programs;F!==void 0&&(F.forEach(function(k){q.releaseProgram(k)}),y.isShaderMaterial&&q.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,k,z,O,et){F===null&&(F=wt);const ht=O.isMesh&&O.matrixWorld.determinant()<0,_t=Gc(y,F,k,z,O);xt.setMaterial(z,ht);let ft=k.index,Ct=1;if(z.wireframe===!0){if(ft=x.getWireframeAttribute(k),ft===void 0)return;Ct=2}const It=k.drawRange,At=k.attributes.position;let Xt=It.start*Ct,ee=(It.start+It.count)*Ct;et!==null&&(Xt=Math.max(Xt,et.start*Ct),ee=Math.min(ee,(et.start+et.count)*Ct)),ft!==null?(Xt=Math.max(Xt,0),ee=Math.min(ee,ft.count)):At!=null&&(Xt=Math.max(Xt,0),ee=Math.min(ee,At.count));const xe=ee-Xt;if(xe<0||xe===1/0)return;lt.setup(O,z,_t,k,ft);let he,ae=ut;if(ft!==null&&(he=T.get(ft),ae=Lt,ae.setIndex(he)),O.isMesh)z.wireframe===!0?(xt.setLineWidth(z.wireframeLinewidth*Ce()),ae.setMode(L.LINES)):ae.setMode(L.TRIANGLES);else if(O.isLine){let Rt=z.linewidth;Rt===void 0&&(Rt=1),xt.setLineWidth(Rt*Ce()),O.isLineSegments?ae.setMode(L.LINES):O.isLineLoop?ae.setMode(L.LINE_LOOP):ae.setMode(L.LINE_STRIP)}else O.isPoints?ae.setMode(L.POINTS):O.isSprite&&ae.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ys("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ae.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))ae.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Rt=O._multiDrawStarts,_e=O._multiDrawCounts,Zt=O._multiDrawCount,Ye=ft?T.get(ft).bytesPerElement:1,vi=Mt.get(z).currentProgram.getUniforms();for(let qe=0;qe<Zt;qe++)vi.setValue(L,"_gl_DrawID",qe),ae.render(Rt[qe]/Ye,_e[qe])}else if(O.isInstancedMesh)ae.renderInstances(Xt,xe,O.count);else if(k.isInstancedBufferGeometry){const Rt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,_e=Math.min(k.instanceCount,Rt);ae.renderInstances(Xt,xe,_e)}else ae.render(Xt,xe)};function ce(y,F,k){y.transparent===!0&&y.side===He&&y.forceSinglePass===!1?(y.side=Ve,y.needsUpdate=!0,As(y,F,k),y.side=qn,y.needsUpdate=!0,As(y,F,k),y.side=He):As(y,F,k)}this.compile=function(y,F,k=null){k===null&&(k=y),p=Tt.get(k),p.init(F),b.push(p),k.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),y!==k&&y.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const z=new Set;return y.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const et=O.material;if(et)if(Array.isArray(et))for(let ht=0;ht<et.length;ht++){const _t=et[ht];ce(_t,k,O),z.add(_t)}else ce(et,k,O),z.add(et)}),p=b.pop(),z},this.compileAsync=function(y,F,k=null){const z=this.compile(y,F,k);return new Promise(O=>{function et(){if(z.forEach(function(ht){Mt.get(ht).currentProgram.isReady()&&z.delete(ht)}),z.size===0){O(y);return}setTimeout(et,10)}Ot.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let Qt=null;function bn(y){Qt&&Qt(y)}function _n(){Zn.stop()}function So(){Zn.start()}const Zn=new yc;Zn.setAnimationLoop(bn),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(y){Qt=y,it.setAnimationLoop(y),y===null?Zn.stop():Zn.start()},it.addEventListener("sessionstart",_n),it.addEventListener("sessionend",So),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(F),F=it.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,F,C),p=Tt.get(y,b.length),p.init(F),b.push(p),J.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),pe.setFromProjectionMatrix(J,yn,F.reversedDepth),$=this.localClippingEnabled,Jt=rt.init(this.clippingPlanes,$),m=W.get(y,E.length),m.init(),E.push(m),it.enabled===!0&&it.isPresenting===!0){const et=S.xr.getDepthSensingMesh();et!==null&&Sr(et,F,-1/0,S.sortObjects)}Sr(y,F,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(st,ct),$t=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,$t&&Et.addToRenderList(m,y),this.info.render.frame++,Jt===!0&&rt.beginShadows();const k=p.state.shadowsArray;yt.render(k,y,F),Jt===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,O=m.transmissive;if(p.setupLights(),F.isArrayCamera){const et=F.cameras;if(O.length>0)for(let ht=0,_t=et.length;ht<_t;ht++){const ft=et[ht];bo(z,O,y,ft)}$t&&Et.render(y);for(let ht=0,_t=et.length;ht<_t;ht++){const ft=et[ht];Eo(m,y,ft,ft.viewport)}}else O.length>0&&bo(z,O,y,F),$t&&Et.render(y),Eo(m,y,F);C!==null&&R===0&&(Ht.updateMultisampleRenderTarget(C),Ht.updateRenderTargetMipmap(C)),y.isScene===!0&&y.onAfterRender(S,y,F),lt.resetDefaultState(),M=-1,v=null,b.pop(),b.length>0?(p=b[b.length-1],Jt===!0&&rt.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Sr(y,F,k,z){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||pe.intersectsSprite(y)){z&&Ut.setFromMatrixPosition(y.matrixWorld).applyMatrix4(J);const ht=B.update(y),_t=y.material;_t.visible&&m.push(y,ht,_t,k,Ut.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||pe.intersectsObject(y))){const ht=B.update(y),_t=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ut.copy(y.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Ut.copy(ht.boundingSphere.center)),Ut.applyMatrix4(y.matrixWorld).applyMatrix4(J)),Array.isArray(_t)){const ft=ht.groups;for(let Ct=0,It=ft.length;Ct<It;Ct++){const At=ft[Ct],Xt=_t[At.materialIndex];Xt&&Xt.visible&&m.push(y,ht,Xt,k,Ut.z,At)}}else _t.visible&&m.push(y,ht,_t,k,Ut.z,null)}}const et=y.children;for(let ht=0,_t=et.length;ht<_t;ht++)Sr(et[ht],F,k,z)}function Eo(y,F,k,z){const O=y.opaque,et=y.transmissive,ht=y.transparent;p.setupLightsView(k),Jt===!0&&rt.setGlobalState(S.clippingPlanes,k),z&&xt.viewport(P.copy(z)),O.length>0&&ws(O,F,k),et.length>0&&ws(et,F,k),ht.length>0&&ws(ht,F,k),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function bo(y,F,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new di(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?Ss:Sn,minFilter:ci,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const et=p.state.transmissionRenderTarget[z.id],ht=z.viewport||P;et.setSize(ht.z*S.transmissionResolutionScale,ht.w*S.transmissionResolutionScale);const _t=S.getRenderTarget(),ft=S.getActiveCubeFace(),Ct=S.getActiveMipmapLevel();S.setRenderTarget(et),S.getClearColor(G),V=S.getClearAlpha(),V<1&&S.setClearColor(16777215,.5),S.clear(),$t&&Et.render(k);const It=S.toneMapping;S.toneMapping=Yn;const At=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),Jt===!0&&rt.setGlobalState(S.clippingPlanes,z),ws(y,k,z),Ht.updateMultisampleRenderTarget(et),Ht.updateRenderTargetMipmap(et),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let ee=0,xe=F.length;ee<xe;ee++){const he=F[ee],ae=he.object,Rt=he.geometry,_e=he.material,Zt=he.group;if(_e.side===He&&ae.layers.test(z.layers)){const Ye=_e.side;_e.side=Ve,_e.needsUpdate=!0,To(ae,k,z,Rt,_e,Zt),_e.side=Ye,_e.needsUpdate=!0,Xt=!0}}Xt===!0&&(Ht.updateMultisampleRenderTarget(et),Ht.updateRenderTargetMipmap(et))}S.setRenderTarget(_t,ft,Ct),S.setClearColor(G,V),At!==void 0&&(z.viewport=At),S.toneMapping=It}function ws(y,F,k){const z=F.isScene===!0?F.overrideMaterial:null;for(let O=0,et=y.length;O<et;O++){const ht=y[O],_t=ht.object,ft=ht.geometry,Ct=ht.group;let It=ht.material;It.allowOverride===!0&&z!==null&&(It=z),_t.layers.test(k.layers)&&To(_t,F,k,ft,It,Ct)}}function To(y,F,k,z,O,et){y.onBeforeRender(S,F,k,z,O,et),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),O.onBeforeRender(S,F,k,z,y,et),O.transparent===!0&&O.side===He&&O.forceSinglePass===!1?(O.side=Ve,O.needsUpdate=!0,S.renderBufferDirect(k,F,z,O,y,et),O.side=qn,O.needsUpdate=!0,S.renderBufferDirect(k,F,z,O,y,et),O.side=He):S.renderBufferDirect(k,F,z,O,y,et),y.onAfterRender(S,F,k,z,O,et)}function As(y,F,k){F.isScene!==!0&&(F=wt);const z=Mt.get(y),O=p.state.lights,et=p.state.shadowsArray,ht=O.state.version,_t=q.getParameters(y,O.state,et,F,k),ft=q.getProgramCacheKey(_t);let Ct=z.programs;z.environment=y.isMeshStandardMaterial?F.environment:null,z.fog=F.fog,z.envMap=(y.isMeshStandardMaterial?Me:Ae).get(y.envMap||z.environment),z.envMapRotation=z.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,Ct===void 0&&(y.addEventListener("dispose",Z),Ct=new Map,z.programs=Ct);let It=Ct.get(ft);if(It!==void 0){if(z.currentProgram===It&&z.lightsStateVersion===ht)return Ao(y,_t),It}else _t.uniforms=q.getUniforms(y),y.onBeforeCompile(_t,S),It=q.acquireProgram(_t,ft),Ct.set(ft,It),z.uniforms=_t.uniforms;const At=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(At.clippingPlanes=rt.uniform),Ao(y,_t),z.needsLights=Wc(y),z.lightsStateVersion=ht,z.needsLights&&(At.ambientLightColor.value=O.state.ambient,At.lightProbe.value=O.state.probe,At.directionalLights.value=O.state.directional,At.directionalLightShadows.value=O.state.directionalShadow,At.spotLights.value=O.state.spot,At.spotLightShadows.value=O.state.spotShadow,At.rectAreaLights.value=O.state.rectArea,At.ltc_1.value=O.state.rectAreaLTC1,At.ltc_2.value=O.state.rectAreaLTC2,At.pointLights.value=O.state.point,At.pointLightShadows.value=O.state.pointShadow,At.hemisphereLights.value=O.state.hemi,At.directionalShadowMap.value=O.state.directionalShadowMap,At.directionalShadowMatrix.value=O.state.directionalShadowMatrix,At.spotShadowMap.value=O.state.spotShadowMap,At.spotLightMatrix.value=O.state.spotLightMatrix,At.spotLightMap.value=O.state.spotLightMap,At.pointShadowMap.value=O.state.pointShadowMap,At.pointShadowMatrix.value=O.state.pointShadowMatrix),z.currentProgram=It,z.uniformsList=null,It}function wo(y){if(y.uniformsList===null){const F=y.currentProgram.getUniforms();y.uniformsList=or.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function Ao(y,F){const k=Mt.get(y);k.outputColorSpace=F.outputColorSpace,k.batching=F.batching,k.batchingColor=F.batchingColor,k.instancing=F.instancing,k.instancingColor=F.instancingColor,k.instancingMorph=F.instancingMorph,k.skinning=F.skinning,k.morphTargets=F.morphTargets,k.morphNormals=F.morphNormals,k.morphColors=F.morphColors,k.morphTargetsCount=F.morphTargetsCount,k.numClippingPlanes=F.numClippingPlanes,k.numIntersection=F.numClipIntersection,k.vertexAlphas=F.vertexAlphas,k.vertexTangents=F.vertexTangents,k.toneMapping=F.toneMapping}function Gc(y,F,k,z,O){F.isScene!==!0&&(F=wt),Ht.resetTextureUnits();const et=F.fog,ht=z.isMeshStandardMaterial?F.environment:null,_t=C===null?S.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Xi,ft=(z.isMeshStandardMaterial?Me:Ae).get(z.envMap||ht),Ct=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,It=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),At=!!k.morphAttributes.position,Xt=!!k.morphAttributes.normal,ee=!!k.morphAttributes.color;let xe=Yn;z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(xe=S.toneMapping);const he=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ae=he!==void 0?he.length:0,Rt=Mt.get(z),_e=p.state.lights;if(Jt===!0&&($===!0||y!==v)){const Ue=y===v&&z.id===M;rt.setState(z,y,Ue)}let Zt=!1;z.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==_e.state.version||Rt.outputColorSpace!==_t||O.isBatchedMesh&&Rt.batching===!1||!O.isBatchedMesh&&Rt.batching===!0||O.isBatchedMesh&&Rt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Rt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Rt.instancing===!1||!O.isInstancedMesh&&Rt.instancing===!0||O.isSkinnedMesh&&Rt.skinning===!1||!O.isSkinnedMesh&&Rt.skinning===!0||O.isInstancedMesh&&Rt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Rt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Rt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Rt.instancingMorph===!1&&O.morphTexture!==null||Rt.envMap!==ft||z.fog===!0&&Rt.fog!==et||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==rt.numPlanes||Rt.numIntersection!==rt.numIntersection)||Rt.vertexAlphas!==Ct||Rt.vertexTangents!==It||Rt.morphTargets!==At||Rt.morphNormals!==Xt||Rt.morphColors!==ee||Rt.toneMapping!==xe||Rt.morphTargetsCount!==ae)&&(Zt=!0):(Zt=!0,Rt.__version=z.version);let Ye=Rt.currentProgram;Zt===!0&&(Ye=As(z,F,O));let vi=!1,qe=!1,es=!1;const ve=Ye.getUniforms(),Qe=Rt.uniforms;if(xt.useProgram(Ye.program)&&(vi=!0,qe=!0,es=!0),z.id!==M&&(M=z.id,qe=!0),vi||v!==y){xt.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ve.setValue(L,"projectionMatrix",y.projectionMatrix),ve.setValue(L,"viewMatrix",y.matrixWorldInverse);const Be=ve.map.cameraPosition;Be!==void 0&&Be.setValue(L,gt.setFromMatrixPosition(y.matrixWorld)),Dt.logarithmicDepthBuffer&&ve.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ve.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),v!==y&&(v=y,qe=!0,es=!0)}if(O.isSkinnedMesh){ve.setOptional(L,O,"bindMatrix"),ve.setOptional(L,O,"bindMatrixInverse");const Ue=O.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),ve.setValue(L,"boneTexture",Ue.boneTexture,Ht))}O.isBatchedMesh&&(ve.setOptional(L,O,"batchingTexture"),ve.setValue(L,"batchingTexture",O._matricesTexture,Ht),ve.setOptional(L,O,"batchingIdTexture"),ve.setValue(L,"batchingIdTexture",O._indirectTexture,Ht),ve.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&ve.setValue(L,"batchingColorTexture",O._colorsTexture,Ht));const tn=k.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&nt.update(O,k,Ye),(qe||Rt.receiveShadow!==O.receiveShadow)&&(Rt.receiveShadow=O.receiveShadow,ve.setValue(L,"receiveShadow",O.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Qe.envMap.value=ft,Qe.flipEnvMap.value=ft.isCubeTexture&&ft.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&F.environment!==null&&(Qe.envMapIntensity.value=F.environmentIntensity),qe&&(ve.setValue(L,"toneMappingExposure",S.toneMappingExposure),Rt.needsLights&&Vc(Qe,es),et&&z.fog===!0&&j.refreshFogUniforms(Qe,et),j.refreshMaterialUniforms(Qe,z,H,K,p.state.transmissionRenderTarget[y.id]),or.upload(L,wo(Rt),Qe,Ht)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(or.upload(L,wo(Rt),Qe,Ht),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ve.setValue(L,"center",O.center),ve.setValue(L,"modelViewMatrix",O.modelViewMatrix),ve.setValue(L,"normalMatrix",O.normalMatrix),ve.setValue(L,"modelMatrix",O.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ue=z.uniformsGroups;for(let Be=0,Er=Ue.length;Be<Er;Be++){const jn=Ue[Be];kt.update(jn,Ye),kt.bind(jn,Ye)}}return Ye}function Vc(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function Wc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(y,F,k){const z=Mt.get(y);z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Mt.get(y.texture).__webglTexture=F,Mt.get(y.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:k,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,F){const k=Mt.get(y);k.__webglFramebuffer=F,k.__useDefaultFramebuffer=F===void 0};const Xc=L.createFramebuffer();this.setRenderTarget=function(y,F=0,k=0){C=y,w=F,R=k;let z=!0,O=null,et=!1,ht=!1;if(y){const ft=Mt.get(y);if(ft.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(L.FRAMEBUFFER,null),z=!1;else if(ft.__webglFramebuffer===void 0)Ht.setupRenderTarget(y);else if(ft.__hasExternalTextures)Ht.rebindTextures(y,Mt.get(y.texture).__webglTexture,Mt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const At=y.depthTexture;if(ft.__boundDepthTexture!==At){if(At!==null&&Mt.has(At)&&(y.width!==At.image.width||y.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ht.setupDepthRenderbuffer(y)}}const Ct=y.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(ht=!0);const It=Mt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(It[F])?O=It[F][k]:O=It[F],et=!0):y.samples>0&&Ht.useMultisampledRTT(y)===!1?O=Mt.get(y).__webglMultisampledFramebuffer:Array.isArray(It)?O=It[k]:O=It,P.copy(y.viewport),U.copy(y.scissor),N=y.scissorTest}else P.copy(St).multiplyScalar(H).floor(),U.copy(Wt).multiplyScalar(H).floor(),N=le;if(k!==0&&(O=Xc),xt.bindFramebuffer(L.FRAMEBUFFER,O)&&z&&xt.drawBuffers(y,O),xt.viewport(P),xt.scissor(U),xt.setScissorTest(N),et){const ft=Mt.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,ft.__webglTexture,k)}else if(ht){const ft=F;for(let Ct=0;Ct<y.textures.length;Ct++){const It=Mt.get(y.textures[Ct]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ct,It.__webglTexture,k,ft)}}else if(y!==null&&k!==0){const ft=Mt.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ft.__webglTexture,k)}M=-1},this.readRenderTargetPixels=function(y,F,k,z,O,et,ht,_t=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=Mt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ht!==void 0&&(ft=ft[ht]),ft){xt.bindFramebuffer(L.FRAMEBUFFER,ft);try{const Ct=y.textures[_t],It=Ct.format,At=Ct.type;if(!Dt.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-z&&k>=0&&k<=y.height-O&&(y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+_t),L.readPixels(F,k,z,O,bt.convert(It),bt.convert(At),et))}finally{const Ct=C!==null?Mt.get(C).__webglFramebuffer:null;xt.bindFramebuffer(L.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(y,F,k,z,O,et,ht,_t=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=Mt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ht!==void 0&&(ft=ft[ht]),ft)if(F>=0&&F<=y.width-z&&k>=0&&k<=y.height-O){xt.bindFramebuffer(L.FRAMEBUFFER,ft);const Ct=y.textures[_t],It=Ct.format,At=Ct.type;if(!Dt.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Xt),L.bufferData(L.PIXEL_PACK_BUFFER,et.byteLength,L.STREAM_READ),y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+_t),L.readPixels(F,k,z,O,bt.convert(It),bt.convert(At),0);const ee=C!==null?Mt.get(C).__webglFramebuffer:null;xt.bindFramebuffer(L.FRAMEBUFFER,ee);const xe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Jh(L,xe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Xt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,et),L.deleteBuffer(Xt),L.deleteSync(xe),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,F=null,k=0){const z=Math.pow(2,-k),O=Math.floor(y.image.width*z),et=Math.floor(y.image.height*z),ht=F!==null?F.x:0,_t=F!==null?F.y:0;Ht.setTexture2D(y,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,ht,_t,O,et),xt.unbindTexture()};const Yc=L.createFramebuffer(),qc=L.createFramebuffer();this.copyTextureToTexture=function(y,F,k=null,z=null,O=0,et=null){et===null&&(O!==0?(ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),et=O,O=0):et=0);let ht,_t,ft,Ct,It,At,Xt,ee,xe;const he=y.isCompressedTexture?y.mipmaps[et]:y.image;if(k!==null)ht=k.max.x-k.min.x,_t=k.max.y-k.min.y,ft=k.isBox3?k.max.z-k.min.z:1,Ct=k.min.x,It=k.min.y,At=k.isBox3?k.min.z:0;else{const tn=Math.pow(2,-O);ht=Math.floor(he.width*tn),_t=Math.floor(he.height*tn),y.isDataArrayTexture?ft=he.depth:y.isData3DTexture?ft=Math.floor(he.depth*tn):ft=1,Ct=0,It=0,At=0}z!==null?(Xt=z.x,ee=z.y,xe=z.z):(Xt=0,ee=0,xe=0);const ae=bt.convert(F.format),Rt=bt.convert(F.type);let _e;F.isData3DTexture?(Ht.setTexture3D(F,0),_e=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Ht.setTexture2DArray(F,0),_e=L.TEXTURE_2D_ARRAY):(Ht.setTexture2D(F,0),_e=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const Zt=L.getParameter(L.UNPACK_ROW_LENGTH),Ye=L.getParameter(L.UNPACK_IMAGE_HEIGHT),vi=L.getParameter(L.UNPACK_SKIP_PIXELS),qe=L.getParameter(L.UNPACK_SKIP_ROWS),es=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,he.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,he.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ct),L.pixelStorei(L.UNPACK_SKIP_ROWS,It),L.pixelStorei(L.UNPACK_SKIP_IMAGES,At);const ve=y.isDataArrayTexture||y.isData3DTexture,Qe=F.isDataArrayTexture||F.isData3DTexture;if(y.isDepthTexture){const tn=Mt.get(y),Ue=Mt.get(F),Be=Mt.get(tn.__renderTarget),Er=Mt.get(Ue.__renderTarget);xt.bindFramebuffer(L.READ_FRAMEBUFFER,Be.__webglFramebuffer),xt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Er.__webglFramebuffer);for(let jn=0;jn<ft;jn++)ve&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Mt.get(y).__webglTexture,O,At+jn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Mt.get(F).__webglTexture,et,xe+jn)),L.blitFramebuffer(Ct,It,ht,_t,Xt,ee,ht,_t,L.DEPTH_BUFFER_BIT,L.NEAREST);xt.bindFramebuffer(L.READ_FRAMEBUFFER,null),xt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(O!==0||y.isRenderTargetTexture||Mt.has(y)){const tn=Mt.get(y),Ue=Mt.get(F);xt.bindFramebuffer(L.READ_FRAMEBUFFER,Yc),xt.bindFramebuffer(L.DRAW_FRAMEBUFFER,qc);for(let Be=0;Be<ft;Be++)ve?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,tn.__webglTexture,O,At+Be):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,tn.__webglTexture,O),Qe?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ue.__webglTexture,et,xe+Be):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ue.__webglTexture,et),O!==0?L.blitFramebuffer(Ct,It,ht,_t,Xt,ee,ht,_t,L.COLOR_BUFFER_BIT,L.NEAREST):Qe?L.copyTexSubImage3D(_e,et,Xt,ee,xe+Be,Ct,It,ht,_t):L.copyTexSubImage2D(_e,et,Xt,ee,Ct,It,ht,_t);xt.bindFramebuffer(L.READ_FRAMEBUFFER,null),xt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Qe?y.isDataTexture||y.isData3DTexture?L.texSubImage3D(_e,et,Xt,ee,xe,ht,_t,ft,ae,Rt,he.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(_e,et,Xt,ee,xe,ht,_t,ft,ae,he.data):L.texSubImage3D(_e,et,Xt,ee,xe,ht,_t,ft,ae,Rt,he):y.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,et,Xt,ee,ht,_t,ae,Rt,he.data):y.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,et,Xt,ee,he.width,he.height,ae,he.data):L.texSubImage2D(L.TEXTURE_2D,et,Xt,ee,ht,_t,ae,Rt,he);L.pixelStorei(L.UNPACK_ROW_LENGTH,Zt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ye),L.pixelStorei(L.UNPACK_SKIP_PIXELS,vi),L.pixelStorei(L.UNPACK_SKIP_ROWS,qe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,es),et===0&&F.generateMipmaps&&L.generateMipmap(_e),xt.unbindTexture()},this.initRenderTarget=function(y){Mt.get(y).__webglFramebuffer===void 0&&Ht.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ht.setTextureCube(y,0):y.isData3DTexture?Ht.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ht.setTexture2DArray(y,0):Ht.setTexture2D(y,0),xt.unbindTexture()},this.resetState=function(){w=0,R=0,C=null,xt.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}function E0(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new we;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=Cl(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let _=0;_<a[h].length;++_)d.push(a[h][_][f]);const g=Cl(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Cl(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new We(a,e,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){const _=h.getComponent(f,g);o.setComponent(f+u,g,_)}}else a.set(h.array,c);c+=h.count*e}return s!==void 0&&(o.gpuType=s),o}function xn(i,t){return i+Math.random()*(t-i)}function gi(i,t,e){const n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);const s=new Ru(n);return s.colorSpace=ke,s.wrapS=s.wrapT=lr,s.anisotropy=4,s}function Oi(i,t,e,n,s={}){const{grime:r=18,hazard:a=!1,grate:o=!1}=s,c=gi(256,256,(l,h,u)=>{l.fillStyle=i,l.fillRect(0,0,h,u);for(let d=0;d<1100;d++){const g=Math.floor(Math.random()*22);l.fillStyle=`rgba(${g},${g+5},${g+8},${Math.random()*.2})`,l.fillRect(Math.random()*h,Math.random()*u,xn(1,8),xn(1,2))}l.strokeStyle=t,l.globalAlpha=.7,l.lineWidth=2;for(let d=0;d<=h;d+=h/4)l.beginPath(),l.moveTo(d,0),l.lineTo(d,u),l.stroke();for(let d=0;d<=u;d+=u/4)l.beginPath(),l.moveTo(0,d),l.lineTo(h,d),l.stroke();l.globalAlpha=.18,l.lineWidth=1;for(let d=h/8;d<h;d+=h/4)l.beginPath(),l.moveTo(d,0),l.lineTo(d,u),l.stroke();for(let d=u/8;d<u;d+=u/4)l.beginPath(),l.moveTo(0,d),l.lineTo(h,d),l.stroke();l.globalAlpha=.5,l.fillStyle="rgba(160,190,195,.35)";for(let d=8;d<h;d+=h/4)for(let g=8;g<u;g+=u/4)l.beginPath(),l.arc(d,g,1.5,0,Math.PI*2),l.fill();l.globalAlpha=.12;for(let d=0;d<18;d++){l.strokeStyle=r,l.lineWidth=xn(1,3),l.beginPath();const g=Math.random()*h,_=Math.random()*u;l.moveTo(g,_),l.lineTo(g+xn(-26,26),_+xn(-6,6)),l.stroke()}if(o){l.globalAlpha=.6,l.strokeStyle="rgba(0,0,0,.6)",l.lineWidth=2;for(let d=6;d<u;d+=10)l.beginPath(),l.moveTo(0,d),l.lineTo(h,d),l.stroke();for(let d=6;d<h;d+=24)l.beginPath(),l.moveTo(d,0),l.lineTo(d,u),l.stroke()}if(a){l.save(),l.globalAlpha=.5,l.fillStyle="#b67822",l.translate(h*.5,u*.5);for(let d=-6;d<6;d++)l.save(),l.rotate(-Math.PI/4),l.fillRect(d*48,-6,18,12),l.restore();l.restore()}const f=l.createRadialGradient(h/2,u/2,h*.28,h/2,u/2,h*.72);f.addColorStop(0,"rgba(0,0,0,0)"),f.addColorStop(1,"rgba(0,0,0,.34)"),l.fillStyle=f,l.fillRect(0,0,h,u)});return c.repeat.set(e,n),c}function hi(){return gi(64,64,(i,t,e)=>{const n=i.createRadialGradient(t/2,e/2,0,t/2,e/2,t/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.18,"rgba(220,250,255,.85)"),n.addColorStop(.45,"rgba(130,230,255,.28)"),n.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=n,i.fillRect(0,0,t,e)})}function b0(){return gi(64,64,(i,t,e)=>{const n=i.createRadialGradient(t/2,e/2,0,t/2,e/2,t/2);n.addColorStop(0,"rgba(0,0,0,.72)"),n.addColorStop(.5,"rgba(0,0,0,.38)"),n.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=n,i.fillRect(0,0,t,e)})}function na(){return gi(64,64,(i,t,e)=>{const n=i.createRadialGradient(t/2,e/2,0,t/2,e/2,t/2);n.addColorStop(0,"rgba(255,255,255,.5)"),n.addColorStop(.4,"rgba(255,255,255,.16)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=n,i.fillRect(0,0,t,e)})}function ia(i=0){const t=["#76f2ff","#ffb45c","#7fffc4"],e=t[i%t.length];return gi(128,80,(n,s,r)=>{n.fillStyle="#031014",n.fillRect(0,0,s,r),n.strokeStyle="rgba(100,220,240,.28)",n.lineWidth=1,n.strokeRect(3.5,3.5,s-7,r-7),n.fillStyle=e,n.globalAlpha=.85,n.font="7px monospace",n.fillText(i===1?"POWER GRID // 09":i===2?"LIFE SUPPORT // OK":"SYS ARCHIVE // 447",9,15),n.globalAlpha=.45;for(let a=0;a<5;a++)n.fillRect(9,23+a*7,xn(16,54),2);n.globalAlpha=.75,n.strokeStyle=e,n.beginPath();for(let a=9;a<s-12;a+=2){const o=48+Math.sin(a*.24+i)*6*Math.sin(a*.06);a===9?n.moveTo(a,o):n.lineTo(a,o)}n.stroke(),n.globalAlpha=.6,n.fillStyle=e;for(let a=0;a<6;a++){const o=xn(3,12);n.fillRect(9+a*8,70-o,4,o)}n.globalAlpha=.25,n.fillStyle="#8bffff";for(let a=0;a<r;a+=3)n.fillRect(0,a,s,.6)})}function T0(i,t="",e="#6ce8ff"){return gi(256,80,(n,s,r)=>{n.fillStyle="rgba(4,12,16,.92)",n.fillRect(0,0,s,r),n.strokeStyle="rgba(108,232,255,.45)",n.strokeRect(2,2,s-4,r-4),n.fillStyle=e,n.fillRect(0,0,5,r),n.font="bold 21px monospace",n.textBaseline="middle",n.fillText(i,18,t?31:41),t&&(n.fillStyle="rgba(160,205,212,.7)",n.font="9px monospace",n.fillText(t,19,56)),n.globalAlpha=.22,n.fillStyle=e;for(let a=0;a<r;a+=4)n.fillRect(0,a,s,.5)})}function w0(){const i=(e,n,s,r={})=>new Ee({color:e,roughness:n,metalness:s,...r}),t={wall:i(2569019,.8,.42),wallDark:i(1581350,.88,.35),wallPanel:i(3425872,.7,.5),trim:i(4873576,.4,.78),trimDark:i(2503482,.52,.72),floorMetal:i(2765882,.78,.5),crate:i(3754321,.72,.46),crateDark:i(2503482,.8,.4),crateOlive:i(4543043,.78,.34),hazard:i(10119716,.65,.45),pipe:i(5729140,.42,.8),pipeDark:i(2898497,.58,.66),rubber:i(856597,.96,.05),screenBlack:i(330510,.4,.4),glass:new Ee({color:7724262,roughness:.08,metalness:.1,transparent:!0,opacity:.14,depthWrite:!1,emissive:1867660,emissiveIntensity:.55,side:He}),holo:new Bt({color:8187135,transparent:!0,opacity:.3,side:He,depthWrite:!1,blending:Ge}),emissiveCyan:new Bt({color:10156287}),emissiveCyanDim:new Bt({color:2855846}),emissiveOrange:new Bt({color:16755801}),emissiveRed:new Bt({color:16730690}),emissiveWhite:new Bt({color:15334911}),emissiveGreen:new Bt({color:8191940}),screenCyan:new Bt({color:11073279}),dust:new fo({color:11004146,size:.026,transparent:!0,opacity:.42,depthWrite:!1,sizeAttenuation:!0})};return t.floorLab=new Ee({map:Oi("#26343d","rgba(80,108,118,.35)",10,8,{grime:"#5d7a82"}),roughness:.7,metalness:.48}),t.floorHall=new Ee({map:Oi("#253138","rgba(72,98,108,.32)",3,8,{grime:"#5a7278",grate:!0}),roughness:.78,metalness:.44}),t.floorStorage=new Ee({map:Oi("#293330","rgba(88,100,90,.28)",6,6,{grime:"#5d6a58",hazard:!0}),roughness:.84,metalness:.36}),t.floorMaint=new Ee({map:Oi("#2b332d","rgba(90,96,78,.3)",6,6,{grime:"#6b6b4c",grate:!0}),roughness:.8,metalness:.42}),t.floorResearch=new Ee({map:Oi("#23343a","rgba(70,120,120,.3)",6,5,{grime:"#527e7e"}),roughness:.6,metalness:.5}),t.floorExtract=new Ee({map:Oi("#232e35","rgba(70,96,104,.32)",6,6,{grime:"#4e6e78",hazard:!0}),roughness:.74,metalness:.46}),t.ceiling=i(791062,.94,.24),t.screenA=new Bt({map:ia(0),color:16777215}),t.screenB=new Bt({map:ia(1),color:16777215}),t.screenC=new Bt({map:ia(2),color:16777215}),t.shadow=new Bt({map:b0(),transparent:!0,opacity:.55,depthWrite:!1}),t.poolCyan=new Bt({map:na(),color:6678271,transparent:!0,opacity:.13,depthWrite:!1,blending:Ge}),t.poolOrange=new Bt({map:na(),color:16751690,transparent:!0,opacity:.12,depthWrite:!1,blending:Ge}),t.poolWhite=new Bt({map:na(),color:12578815,transparent:!0,opacity:.15,depthWrite:!1,blending:Ge}),t}const Pl=new fe,Ll=new pi,Dl=new D,Il=new D,Ul=new on;class A0{constructor(){this.buckets=new Map}addGeo(t,e,n=[0,0,0],s=[0,0,0],r=[1,1,1]){const a=t.clone();Ul.set(s[0],s[1],s[2]),Ll.setFromEuler(Ul),Dl.set(n[0],n[1],n[2]),Il.set(r[0],r[1],r[2]),Pl.compose(Dl,Ll,Il),a.applyMatrix4(Pl),this.buckets.has(e)||this.buckets.set(e,[]),this.buckets.get(e).push(a),t.dispose()}box(t,e,n,s,r,a,o,c=0,l=0,h=0){this.addGeo(new dt(t,e,n),s,[r,a,o],[l,c,h])}cyl(t,e,n,s,r,a,o,c,l=0,h=0,u=0){this.addGeo(new ue(t,e,n,s),r,[a,o,c],[l,u,h])}shadow(t,e,n,s,r,a=1){const o=new dn(n,s);this.addGeo(o,r,[t,.014,e],[-Math.PI/2,0,0])}flush(t,{receive:e=!0}={}){for(const[n,s]of this.buckets){if(!s.length)continue;const r=E0(s,!1);if(!r){console.warn("Geometry merge failed for material",n);continue}const a=new Y(r,n);a.receiveShadow=e,a.castShadow=!1,a.matrixAutoUpdate=!1,a.updateMatrix(),t.add(a);for(const o of s)o.dispose()}this.buckets.clear()}}function Ie(i,t,e,n=.8){const s=new ho({map:i,color:t,transparent:!0,opacity:n,depthWrite:!1,blending:Ge,fog:!0}),r=new gc(s);return r.scale.set(e,e,1),r}class R0{constructor({scene:t,mats:e,batch:n,addCollider:s,interactables:r,glowTex:a,addAnim:o}){this.scene=t,this.m=e,this.batch=n,this.addCollider=s,this.interactables=r,this.glowTex=a,this.addAnim=o,this.containers=new Map,this.warningSprites=[],this.screens=[]}contact(t,e,n,s){this.batch.shadow(t,e,n,s,this.m.shadow)}sprite(t,e,n,s,r=1.4,a=.65){const o=Ie(this.glowTex,s,r,a);return o.position.set(t,e,n),this.scene.add(o),o}crate(t,e,n=1.2,s={}){const{y:r=0,rot:a=0,material:o=this.m.crate,lid:c=!0,label:l=!0,shadow:h=!0}=s,u=n*.92;this.batch.box(n,u,n,o,t,r+u/2,e,a);const f=.075;for(const d of[-1,1])for(const g of[-1,1])this.batch.box(f,u+.03,f,this.m.trimDark,t+d*(n/2-f/2),r+u/2,e+g*(n/2-f/2),a);return c&&(this.batch.box(n*.94,.06,n*.94,this.m.trimDark,t,r+u+.02,e,a),this.batch.box(n*.5,.035,.12,this.m.hazard,t,r+u+.06,e+n*.26,a)),l&&(this.batch.box(n*.38,n*.22,.02,this.m.hazard,t,r+u*.55,e+n/2+.03,a),this.batch.box(n*.22,.03,.025,this.m.rubber,t,r+u*.55+.06,e+n/2+.045,a)),h&&this.contact(t,e,n*1.4,n*1.4),a===0||Math.abs(Math.sin(a))<.01?this.addCollider(t,e,n,n,{sight:u>1.7}):this.addCollider(t,e,n,n,{sight:u>1.7}),r+u}crateStack(t,e,n=1,s={}){const{rot:r=0,material:a=this.m.crate}=s,o=1.25*n;return this.crate(t,e,o,{rot:r,material:a}),this.crate(t+o*.65,e+o*.12,o*.78,{y:0,rot:r,material:a}),this.crate(t+o*.3,e-o*.3,o*.9,{y:o*.92,rot:r,material:a}),o*.92+o*.82}barrel(t,e,n={}){const{color:s=this.m.crateOlive,y:r=0}=n;this.batch.cyl(.36,.38,1.1,10,s,t,r+.55,e),this.batch.cyl(.39,.39,.06,10,this.m.trimDark,t,r+.18,e),this.batch.cyl(.39,.39,.06,10,this.m.trimDark,t,r+.92,e),this.batch.cyl(.3,.3,.03,10,this.m.emissiveOrange,t,r+1.12,e),this.addCollider(t,e,.8,.8,{sight:!1}),this.contact(t,e,1.1,1.1)}desk(t,e,n=0,s={}){const{w:r=2.6,d:a=.95,h:o=1,material:c=this.m.trimDark}=s,l=Math.abs(Math.cos(n))>.5,h=l?r:a,u=l?a:r;this.batch.box(h,.1,u,c,t,o,e,n),this.batch.box(h*.94,.04,u*.9,this.m.floorMetal,t,o+.06,e,n);for(const f of[-1,1])for(const d of[-1,1])this.batch.box(.08,o,.08,this.m.trim,t+f*(h/2-.12),o/2,e+d*(u/2-.12),n);return this.batch.box(h*.8,.5,.06,this.m.wallDark,t,o-.35,e+0,n),this.batch.box(h*.5,.03,.03,this.m.emissiveCyanDim,t,o-.1,e+(l?u/2-.02:0),n),this.contact(t,e,h*1.3,u*1.8),this.addCollider(t,e,h,u,{sight:!1}),o+.1}monitor(t,e,n,s=0,r=0,a=1){const o=r===1?this.m.screenB:r===2?this.m.screenC:this.m.screenA,c=new oe;c.position.set(t,e,n),c.rotation.y=s;const l=new Y(new ue(.16*a,.2*a,.04,8),this.m.trimDark);l.position.y=.02;const h=new Y(new dt(.07,.26,.07),this.m.trim);h.position.set(0,.15,-.05);const u=new Y(new dt(.78*a,.5*a,.07),this.m.screenBlack);u.position.set(0,.48*a,.02),u.rotation.x=-.08;const f=new Y(new dn(.68*a,.4*a),o);return f.position.set(0,.48*a,.06),f.rotation.x=-.08,c.add(l,h,u,f),this.scene.add(c),this.screens.push({mesh:f,base:1,phase:Math.random()*6.28}),c}chair(t,e,n=0){this.batch.cyl(.34,.34,.09,8,this.m.rubber,t,.46,e,0,n),this.batch.box(.09,.42,.09,this.m.trimDark,t,.22,e,n),this.batch.cyl(.3,.34,.06,8,this.m.trimDark,t,.05,e),this.batch.box(.62,.55,.09,this.m.crateDark,t,.86,e+(Math.cos(n)>.5?.34:-.34),n),this.contact(t,e,1.1,1.1)}shelf(t,e,n=0,s=3.2,r={}){const{h:a=2.5}=r,o=Math.abs(Math.cos(n))>.5,c=o?s:.8,l=o?.8:s;this.batch.box(.1,a,.1,this.m.trim,t-c/2,a/2,e-l/2,n),this.batch.box(.1,a,.1,this.m.trim,t+c/2,a/2,e-l/2,n),this.batch.box(.1,a,.1,this.m.trim,t-c/2,a/2,e+l/2,n),this.batch.box(.1,a,.1,this.m.trim,t+c/2,a/2,e+l/2,n);for(let h=0;h<3;h++){const u=.35+h*.85;this.batch.box(c,.07,l,this.m.floorMetal,t,u,e,n);const f=3;for(let d=0;d<f;d++){const g=o?t-s*.32+d*s*.32:t,_=o?e:e-s*.32+d*s*.32;Math.random()>.18&&(this.batch.box(.52,.38,.5,Math.random()>.5?this.m.crate:this.m.crateDark,g,u+.22,_,n),Math.random()>.5&&this.batch.box(.18,.04,.02,Math.random()>.5?this.m.hazard:this.m.emissiveOrange,g,u+.24,_+.26,n))}}this.batch.box(c,.04,.12,this.m.emissiveCyanDim,t,a-.08,e+l/2,n),this.addCollider(t,e,c,l,{sight:!0}),this.contact(t,e,c*1.15,l*2)}serverRack(t,e,n=0,s=0){const c=Math.abs(Math.cos(n))>.5,l=c?1.15:.85,h=c?.85:1.15;this.batch.box(l,2.35,h,this.m.wallDark,t,2.35/2,e,n),this.batch.box(l*.92,2.35*.9,.04,this.m.floorMetal,t,2.35/2,e+(c?h/2:0),n);for(let u=0;u<7;u++)this.batch.box(l*.72,.05,.03,this.m.trim,t,.35+u*.26,e+(c?h/2+.02:0),n),u%2===0&&this.batch.box(.04,.02,.025,u===2?this.m.emissiveOrange:this.m.emissiveCyan,t+l*.28,.35+u*.26,e+(c?h/2+.04:0),n);this.batch.box(l*.4,.03,.04,this.m.emissiveCyanDim,t,2.35-.12,e+(c?h/2+.03:0),n),this.batch.box(.05,.05,.05,s===1?this.m.emissiveOrange:this.m.emissiveCyan,t+l*.3,2.35-.14,e+(c?h/2+.03:0),n),this.addCollider(t,e,l,h,{sight:!0}),this.contact(t,e,l*1.4,h*1.5)}pipe(t,e,n,s,r,a,o=.11,c=this.m.pipe){const l=new D(t,e,n),h=new D(s,r,a),u=l.clone().add(h).multiplyScalar(.5),f=h.clone().sub(l),d=f.length(),g=new pi().setFromUnitVectors(new D(0,1,0),f.normalize()),_=new on().setFromQuaternion(g);return this.batch.addGeo(new ue(o,o,d,8),c,[u.x,u.y,u.z],[_.x,_.y,_.z]),u}pipeCluster(t,e,n=0,s=3){const r=Math.abs(Math.cos(n))>.5;for(let a=0;a<s;a++){const o=a*.24;r?this.pipe(t-2.4,3.2-o,e,t+2.4,3.2-o,e,.09+a%2*.03,a%2?this.m.pipe:this.m.pipeDark):this.pipe(t,3.2-o,e-2.4,t,3.2-o,e+2.4,.09+a%2*.03,a%2?this.m.pipe:this.m.pipeDark)}}conduit(t,e,n,s=0,r=this.m.emissiveCyanDim){const a=Math.abs(Math.cos(s))>.5,o=a?n:.04,c=a?.04:n;this.batch.box(o,.035,c,r,t,.08,e,s)}cable(t,e,n,s,r=.05){this.pipe(t,r,e,n,r,s,.025,this.m.rubber),this.batch.box(.05,.03,.05,this.m.trimDark,t,r,e),this.batch.box(.05,.03,.05,this.m.trimDark,n,r,s)}ceilingLamp(t,e,n="cyan",s=1,r={}){const a=n==="orange"?this.m.emissiveOrange:n==="white"?this.m.emissiveWhite:n==="red"?this.m.emissiveRed:this.m.emissiveCyan,o=n==="orange"?this.m.poolOrange:this.m.poolWhite;if(this.batch.box(.24,.08,2.2*s,this.m.trimDark,t,4.12,e),this.batch.box(.16,.04,1.9*s,a,t,4.065,e),this.sprite(t,3.98,e,n==="orange"?16755548:n==="white"?14088447:7137535,2.3*s,.22),this.batch.addGeo(new dn(3.4*s,5.4*s),o,[t,.018,e],[-Math.PI/2,0,0]),r.fixture!==!1)for(const c of[-1,1])this.batch.box(.06,.3,.06,this.m.trimDark,t+c*.7*s,4.18,e+1.04*s)}warningLight(t,e,n,s=16742954,r={}){const a=s===16726576?this.m.emissiveRed:this.m.emissiveOrange;this.batch.box(.2,.12,.1,this.m.trimDark,t,e,n),this.batch.box(.13,.06,.02,a,t,e,n+.06);const o=this.sprite(t,e,n+.12,s,1,.55);this.warningSprites.push({sprite:o,base:.55,phase:Math.random()*6.2,speed:r.speed||2.2,active:!0})}sign(t,e,n,s,r,a,o=1.8,c=.56,l="#6ce8ff"){const h=new Bt({map:T0(t,e,l),transparent:!0,side:He,depthWrite:!1}),u=new Y(new dn(o,c),h);return u.position.set(n,s,r),u.rotation.y=a,this.scene.add(u),u}terminal(t,e,n,s,r){const a=new oe;a.position.set(t,e,n),a.rotation.y=s;const o=new Y(new dt(1.05,.9,.7),this.m.trimDark);o.position.y=.45;const c=new Y(new dt(1.12,.06,.76),this.m.trim);c.position.y=.93;const l=new Y(new dt(.94,.62,.1),this.m.screenBlack);l.position.set(0,1.22,.05),l.rotation.x=-.26;const h=new Y(new dn(.82,.5),this.m.screenA);h.position.set(0,1.23,.115),h.rotation.x=-.26;const u=new Y(new dt(.3,.025,.03),this.m.emissiveCyan);u.position.set(0,.98,.37);const f=Ie(this.glowTex,7137535,1.5,.24);f.position.set(0,1.24,.22),a.add(o,c,l,h,u,f),this.scene.add(a),this.addCollider(t,n,1.2,.85,{sight:!1}),this.contact(t,n,1.6,1.2);const d={kind:"terminal",id:r.id,x:t,y:e+1.2,z:n,radius:2.1,label:r.label||"Access terminal",title:r.title,source:r.source,body:r.body,used:!1};return this.interactables.push(d),d}locker(t,e,n=0,s={}){const{id:r="hide-locker",label:a="Hide in service locker",type:o="locker",hideOffset:c=.25}=s,l=1.05,h=2.45,u=.72,f=Math.abs(Math.cos(n))>.5,d=f?l:u,g=f?u:l;this.batch.box(d,h,g,this.m.wallDark,t,h/2,e,n),this.batch.box(d*1.08,.08,g*1.12,this.m.trim,t,h-.02,e,n),this.batch.box(d*1.04,.06,g*1.08,this.m.trimDark,t,.04,e,n);const _=Math.sin(n),m=Math.cos(n),p=_*(d/2+.016),E=m*(g/2+.016);f?this.batch.box(d*.98,h*.92,.025,this.m.wallPanel,t+p,h/2,e+E):this.batch.box(.025,h*.92,g*.98,this.m.wallPanel,t+p,h/2,e+E);for(let w=0;w<5;w++)f?this.batch.box(.4,.025,.02,this.m.rubber,t+p*1.35,1.75+w*.05,e+E*1.35):this.batch.box(.02,.025,.4,this.m.rubber,t+p*1.35,1.75+w*.05,e+E*1.35);const b=t+p*3.2+(f?.3:0),S=e+E*3.2+(f?0:.3);this.batch.box(.08,.24,.06,this.m.emissiveCyan,b,1.2,S),this.batch.box(.18,.04,.02,this.m.emissiveOrange,t-p*2.4,2.2,e-E*2.4),this.addCollider(t,e,d,g,{sight:!0}),this.contact(t,e,d*1.5,g*1.8);const A={kind:"hide",id:r,label:a,type:o,x:t+_*(o==="locker"?.65:c),y:1.2,z:e+m*(o==="locker"?.65:c),radius:2,hidePos:{x:t+_*.35,z:e+m*.35,yaw:Math.atan2(-_,-m)},hideType:o};return this.interactables.push(A),A}crateHide(t,e,n=0,s={}){const{id:r="hide-crates"}=s;this.crate(t,e,1.4,{rot:n,material:this.m.crateDark}),this.crate(t+1.3,e+.2,1.4,{rot:n,material:this.m.crate}),this.crate(t+.65,e-1.15,1.1,{rot:n,material:this.m.crateOlive});const a=Math.sin(n),o=Math.cos(n),c=t+a*1.4,l=e+o*1.4,h={kind:"hide",id:r,label:"Conceal behind cargo crates",type:"crates",x:c,y:1.1,z:l,radius:2.2,hidePos:{x:c,z:l,yaw:Math.atan2(-a,-o)},hideType:"crates"};this.interactables.push(h)}containerBox(t,e,n,s,r,a="Search storage container"){const o=new oe;o.position.set(t,0,e),o.rotation.y=n;const c=new Y(new dt(1.65,.9,1),this.m.crateDark);c.position.y=.45;const l=new oe;l.position.set(0,.92,-.5);const h=new Y(new dt(1.72,.13,1.06),this.m.trimDark);h.position.set(0,.06,.5);const u=new Y(new dt(.3,.07,.06),this.m.emissiveOrange);u.position.set(0,.15,.53),l.add(h,u);const f=new Y(new dt(1.4,.035,.03),this.m.emissiveCyan);f.position.set(0,.72,.512);const d=[];for(const m of[-1,1])for(const p of[-1,1]){const E=new Y(new dt(.09,.96,.09),this.m.trim);E.position.set(m*.79,.48,p*.47),d.push(E)}o.add(c,l,f,...d);const g=Ie(this.glowTex,16752973,1,.22);g.position.set(0,1.1,0),o.add(g),this.scene.add(o),this.addCollider(t,e,1.8,1.2,{sight:!1}),this.contact(t,e,2.4,1.8);const _={opened:!1,lid:l,group:o,spr:g};return this.containers.set(s,_),this.interactables.push({kind:"container",id:s,x:t,y:.9,z:e,radius:2.1,label:a,loot:r,opened:!1}),_}specimenTank(t,e,n=6291408){const s=new oe;s.position.set(t,0,e);const r=new Y(new ue(.72,.72,2.3,14,1,!0),this.m.glass);r.position.y=1.45;const a=new Y(new ue(.5,.5,1.9,10),new Bt({color:n,transparent:!0,opacity:.25,depthWrite:!1,blending:Ge}));a.position.y=1.42;const o=new Y(new ue(.95,1.05,.35,12),this.m.trimDark);o.position.y=.18;const c=new Y(new ue(.8,.8,.18,12),this.m.trim);c.position.y=2.68;const l=new Y(new De(.76,.025,4,18),this.m.emissiveCyan);l.position.y=2.55,l.rotation.x=Math.PI/2;const h=new Y(new ue(.45,.6,.22,10),this.m.trimDark);h.position.y=2.86;const u=Ie(this.glowTex,n,2.4,.18);u.position.y=1.5,s.add(r,a,o,c,l,h,u),this.scene.add(s),this.addCollider(t,e,1.8,1.8,{sight:!1}),this.contact(t,e,2.4,2.4),this.addAnim((f,d)=>{a.scale.y=1+Math.sin(d*1.3+t)*.03,u.material.opacity=.16+Math.sin(d*2+t)*.04})}generator(t,e,n=0){this.batch.cyl(1.55,1.75,.3,14,this.m.trimDark,t,.15,e),this.batch.cyl(1.28,1.4,2.35,14,this.m.wallDark,t,1.5,e),this.batch.cyl(1.48,1.48,.14,14,this.m.trim,t,2.72,e),this.batch.cyl(.9,.9,.2,14,this.m.trimDark,t,2.88,e);for(let a=0;a<6;a++){const o=a/6*Math.PI*2;this.batch.box(.28,1.5,.28,this.m.trimDark,t+Math.cos(o)*1.45,1.35,e+Math.sin(o)*1.45,o)}for(let a=0;a<3;a++)this.batch.addGeo(new De(1.32,.035,4,20),this.m.emissiveOrange,[t,.7+a*.7,e],[Math.PI/2,0,0]);for(let a=0;a<4;a++){const o=-.7+a*.45;this.batch.cyl(.11,.11,.03,10,this.m.emissiveCyan,t+Math.cos(o)*1.62,1.55,e+Math.sin(o)*1.62,Math.PI/2,0,o),this.batch.cyl(.14,.14,.05,10,this.m.trimDark,t+Math.cos(o)*1.58,1.55,e+Math.sin(o)*1.58,Math.PI/2,0,o)}this.pipe(t-.7,2.8,e,t-.7,4.15,e,.13,this.m.pipe),this.pipe(t+.7,2.8,e,t+.7,4.15,e,.13,this.m.pipe),this.addCollider(t,e,3.4,3.4,{sight:!0}),this.contact(t,e,4.4,4.4);const s=new Y(new De(.82,.05,4,20),this.m.emissiveOrange);s.position.set(t,1.8,e),s.rotation.x=Math.PI/2,this.scene.add(s);const r=Ie(this.glowTex,16747050,3.2,.2);r.position.set(t,1.6,e),this.scene.add(r),this.addAnim((a,o)=>{s.rotation.z+=a*.9,s.scale.setScalar(1+Math.sin(o*3)*.035),r.material.opacity=.15+Math.sin(o*2.4)*.05}),this.warningLight(t+2.1,2.7,e+1.1,16742954)}holoTable(t,e){this.batch.cyl(1.65,1.9,.22,16,this.m.trimDark,t,.11,e),this.batch.cyl(.5,.7,.95,12,this.m.trim,t,.65,e),this.batch.addGeo(new De(1.4,.05,5,26),this.m.emissiveCyan,[t,.98,e],[Math.PI/2,0,0]),this.batch.addGeo(new De(1.12,.018,4,26),this.m.emissiveCyanDim,[t,1,e],[Math.PI/2,0,0]);for(let c=0;c<3;c++){const l=c*Math.PI*2/3+.5;this.batch.box(.75,.75,.55,this.m.trimDark,t+Math.cos(l)*2.35,.42,e+Math.sin(l)*2.35,-l),this.batch.box(.62,.04,.4,this.m.emissiveCyanDim,t+Math.cos(l)*2.35,.82,e+Math.sin(l)*2.35,-l)}this.addCollider(t,e,3.6,3.6,{sight:!1}),this.contact(t,e,4.4,4.4);const n=new oe;n.position.set(t,1.85,e);const s=new Y(new fr(.72,1),new Bt({color:7991295,wireframe:!0,transparent:!0,opacity:.42,blending:Ge,depthWrite:!1})),r=new Y(new fr(.32,0),new Bt({color:14221311,transparent:!0,opacity:.22,blending:Ge,depthWrite:!1})),a=new Y(new De(1.02,.012,3,32),new Bt({color:7137535,transparent:!0,opacity:.5,blending:Ge,depthWrite:!1}));a.rotation.x=Math.PI/2.4;const o=Ie(this.glowTex,7137535,3,.2);n.add(s,r,a,o),this.scene.add(n),this.addAnim((c,l)=>{s.rotation.y+=c*.3,s.rotation.x=Math.sin(l*.4)*.12,r.rotation.y-=c*.5,a.rotation.z+=c*.25,n.position.y=1.85+Math.sin(l*1.2)*.04})}extractionPad(t,e){this.batch.addGeo(new vr(3.8,36),this.m.floorExtract,[t,.02,e],[-Math.PI/2,0,0]),this.batch.addGeo(new gs(3.18,3.32,36),this.m.emissiveCyan,[t,.02+.02,e],[-Math.PI/2,0,0]),this.batch.addGeo(new gs(2.5,2.56,36),this.m.emissiveCyanDim,[t,.02+.02,e],[-Math.PI/2,0,0]),this.batch.addGeo(new gs(1.55,1.63,36),this.m.emissiveOrange,[t,.02+.02,e],[-Math.PI/2,0,0]);for(let c=0;c<8;c++){const l=c*Math.PI/4;this.batch.box(.22,.025,.8,this.m.emissiveCyanDim,t+Math.cos(l)*1.95,.02+.03,e+Math.sin(l)*1.95,l)}for(let c=0;c<4;c++){const l=c*Math.PI/2+Math.PI/4,h=t+Math.cos(l)*4.5,u=e+Math.sin(l)*4.5;this.batch.box(.34,.85,.34,this.m.trimDark,h,.42,u),this.batch.box(.16,.1,.2,this.m.emissiveCyan,h,.9,u),this.sprite(h,1,u,7137535,1,.5)}this.contact(t,e,9,9),this.batch.cyl(.42,.55,.5,10,this.m.trimDark,t,3,e),this.batch.cyl(.16,.2,2.4,8,this.m.trim,t,1.5,e),this.batch.addGeo(new De(.65,.03,4,18),this.m.emissiveCyan,[t,2.6,e],[Math.PI/2,0,0]);const s=new oe;s.position.set(t,2.72,e);const r=new Bt({color:9434879,transparent:!0,opacity:.24,side:He,depthWrite:!1,blending:Ge});for(let c=0;c<2;c++){const l=new Y(new dn(4.2,.5),r);l.position.x=c===0?2.1:-2.1,l.rotation.y=Math.PI/2,s.add(l)}const a=new Y(new Dn(.18,8,6),new Bt({color:14221311}));s.add(a);const o=Ie(this.glowTex,7137535,3.2,.4);return s.add(o),this.scene.add(s),this.addAnim(c=>{s.rotation.y+=c*.8}),this.batch.addGeo(new dt(7.6,.1,.18),this.m.trimDark,[t,3.6,e+4.2],[0,0,0]),this.warningLight(t-5.9,2.6,e+2.7,16742954),{x:t,z:e,beacon:s}}railing(t,e,n,s=0,r={}){const{color:a=this.m.trim}=r,o=Math.abs(Math.cos(s))>.5,c=Math.max(2,Math.round(n/2.2));for(let l=0;l<=c;l++){const h=l/c-.5,u=o?t+h*n:t,f=o?e:e+h*n;this.batch.box(.09,1.15,.09,a,u,.57,f)}o?(this.batch.box(n,.06,.06,a,t,1.1,e),this.batch.box(n,.04,.04,this.m.emissiveCyanDim,t,.65,e)):(this.batch.box(.06,.06,n,a,t,1.1,e),this.batch.box(.04,.04,n,this.m.emissiveCyanDim,t,.65,e)),o?this.addCollider(t,e,n,.18,{sight:!1}):this.addCollider(t,e,.18,n,{sight:!1})}dropship(t,e,n=0){const s=new oe;s.position.set(t,0,e),s.rotation.y=n;const r=new Y(new dt(3.2,.8,1.7),this.m.wallDark);r.position.y=1.4;const a=new Y(new dt(1.3,.65,1.35),this.m.wallPanel);a.position.set(2.05,1.32,0),a.rotation.z=-.16;const o=new Y(new dt(.6,.35,1.05),new Bt({color:4184559,transparent:!0,opacity:.6}));o.position.set(2.4,1.5,0),o.rotation.z=-.16;for(const h of[-1,1]){const u=new Y(new ue(.38,.44,1.6,8),this.m.wallPanel);u.rotation.z=Math.PI/2,u.position.set(-.8,1.4,h*1.35);const f=new Y(new ue(.26,.26,.1,8),this.m.emissiveCyan);f.rotation.z=Math.PI/2,f.position.set(-1.62,1.4,h*1.35);const d=new Y(new dt(1.1,.12,1.1),this.m.trimDark);d.position.set(-.4,1.32,h*1.25),s.add(u,f,d)}for(const h of[-1.1,1.1])for(const u of[-.7,.7]){const f=new Y(new ue(.06,.08,1,6),this.m.trim);f.position.set(h,.5,u),s.add(f);const d=new Y(new dt(.5,.1,.4),this.m.trimDark);d.position.set(h,.05,u),s.add(d)}const c=new Y(new dt(2.8,.05,.02),this.m.emissiveCyan);c.position.set(0,1.4,.86);const l=Ie(this.glowTex,7137535,4,.12);l.position.set(0,1.5,0),s.add(r,a,o,c,l),this.scene.add(s),this.addCollider(t,e,4.2,2.6,{sight:!0}),this.contact(t,e,5.2,4.2),this.addAnim((h,u)=>{l.material.opacity=.1+Math.sin(u*1.7)*.03})}workbench(t,e,n=0){const s=Math.abs(Math.cos(n))>.5,r=s?3.2:.9,a=s?.9:3.2;this.batch.box(r,.1,a,this.m.trimDark,t,.92,e,n),this.batch.box(r*.95,.05,a*.88,this.m.floorMetal,t,.98,e,n);for(const o of[-1,1])this.batch.box(.1,.92,.1,this.m.trim,t+(s?o*(r/2-.15):0),.46,e+(s?0:o*(a/2-.15)),n);return this.addCollider(t,e,r,a,{sight:!1}),this.contact(t,e,r*1.2,a*1.6),1}toolRack(t,e,n,s=0){this.batch.box(1.6,1,.06,this.m.wallDark,t,e,n,s);for(let r=0;r<5;r++){const a=-.6+r*.3;this.batch.box(.05,.26+r%3*.12,.04,r%2?this.m.trim:this.m.hazard,t+a,e,n+.06,s)}}pipeWork(t,e){this.pipeCluster(t,e,0,3),this.pipeCluster(t,e+.4,Math.PI/2,2);const n=new Y(new De(.3,.04,5,14),this.m.emissiveOrange);n.position.set(t+1.7,2.2,e+1.2),n.rotation.y=Math.PI/2,this.scene.add(n),this.batch.box(.1,.1,1.1,this.m.pipe,t+1.7,2.2,e+.7,0,Math.PI/2)}dust(t=170){const e=new Float32Array(t*3);for(let r=0;r<t;r++)e[r*3]=xn(-22,32),e[r*3+1]=xn(.3,3.9),e[r*3+2]=xn(-32,28);const n=new we;n.setAttribute("position",new We(e,3));const s=new _c(n,this.m.dust);this.scene.add(s),this.addAnim((r,a)=>{const o=n.attributes.position;for(let c=0;c<t;c++){const l=o.getY(c)+r*(.02+c%5*.004);o.setY(c,l>4?.2:l),o.setX(c,o.getX(c)+Math.sin(a*.2+c)*r*.02)}o.needsUpdate=!0})}}function C0({scene:i,mats:t,batch:e,addCollider:n,glowTex:s,x:r,z:a,axis:o="x",width:c=2.8,locked:l=!1,name:h="door"}){const u=o==="x",f=new oe;f.position.set(r,0,a),f.rotation.y=u?0:Math.PI/2,i.add(f);for(const C of[-1,1]){const M=u?r+C*(c/2+.14):r,v=u?a:a+C*(c/2+.14);e.box(u?.28:.62,3.15,u?.62:.28,t.trimDark,M,1.575,v),e.box(u?.05:.64,1.2,u?.64:.05,t.hazard,M+(u?C*.12:0),.62,v+(u?0:C*.12))}const d=r,g=a;e.box(u?c+.56:.62,.38,u?.62:c+.56,t.trimDark,d,3.36,g),e.box(u?c:.18,.03,u?.18:c,t.emissiveCyanDim,d,.03,g);const _=c/2-.03,m=new Ee({color:2503741,roughness:.68,metalness:.55}),p=[];for(const C of[-1,1]){const M=new oe;M.position.set(C*(c/4+.015),1.34,0);const v=new Y(new dt(_,2.6,.15),m);M.add(v);for(let G=0;G<2;G++){const V=new Y(new dt(_*.86,.035,.18),t.trimDark);V.position.set(0,-.72+G*.55,0),M.add(V)}const P=new Y(new dt(.06,2.3,.17),t.emissiveCyanDim);P.position.x=C*(_/2-.09),M.add(P);const U=new Y(new dt(_*.5,.025,.17),t.emissiveCyan);U.position.set(0,-1.05,0),M.add(U);const N=new Y(new dt(.22,.12,.17),t.hazard);N.position.set(0,.5,0),M.add(N),M.userData.baseX=M.position.x,M.userData.side=C,f.add(M),p.push(M)}const E=Ie(s,l?16730690:7137535,.85,.55);E.position.set(0,3.6,0),f.add(E);const b=new Y(new dt(.6,.05,.08),l?t.emissiveRed:t.emissiveCyan);b.position.set(0,3.16,.34),f.add(b);const w=n(r,a,u?c:.36,u?.36:c,{sight:!0,name:h,door:!0});return{name:h,x:r,z:a,axis:o,width:c,locked:l,unlocked:!l,openAmount:0,group:f,panels:p,collider:w,statusSprite:E,statusBar:b,setLocked(C){this.locked=C,this.unlocked=!C,E.material.color.set(C?16730690:7137535),b.material=C?t.emissiveRed:t.emissiveCyan},unlock(){return this.locked?(this.locked=!1,this.unlocked=!0,E.material.color.set(7137535),b.material=t.emissiveCyan,!0):!1},update(C,M,v,P){let U=!1;if(!this.locked){const K=v.x-this.x,H=v.z-this.z;if(U=K*K+H*H<9,!U)for(const st of P){const ct=st.position.x-this.x,St=st.position.z-this.z;if(ct*ct+St*St<2.6*2.6){U=!0;break}}}const N=U?1:0;this.openAmount+=(N-this.openAmount)*Math.min(1,C*7),Math.abs(this.openAmount-N)<.002&&(this.openAmount=N);const G=this.openAmount*(this.width*.47);for(const K of this.panels)K.position.x=K.userData.baseX+K.userData.side*G;const V=this.openAmount<.5;this.collider.solid=V,this.collider.sight=V;const X=.38+Math.sin(M*(this.locked?5:2.4)+this.x)*.16;E.material.opacity=X,this.locked&&E.scale.setScalar(.8+Math.sin(M*4)*.1)}}}const Nl={lab:[{x:-6.5,z:5},{x:5.5,z:5.2},{x:6.4,z:-5.2},{x:-6.4,z:-5}],storage:[{x:0,z:-13.5},{x:0,z:-18.5},{x:0,z:-24.5},{x:4,z:-27},{x:4.5,z:-31},{x:-4,z:-30.5},{x:-3.5,z:-25}]};function Fl(i,t,e){return Math.max(t,Math.min(e,i))}function ds(i,t,e,n){for(let s=0;s<i.length;s++){const r=i[s];if(!r.solid||t+n<r.minX||t-n>r.maxX||e+n<r.minZ||e-n>r.maxZ)continue;const a=Fl(t,r.minX,r.maxX),o=Fl(e,r.minZ,r.maxZ),c=t-a,l=e-o;if(c*c+l*l<n*n)return r}return null}function Ol(i,t,e,n=.34){return!!ds(i,t,e,n)}function wc(i,t,e,n,s=.36){if(e!==0){const r=t.x+e;if(!ds(i,r,t.z,s))t.x=r;else{const a=Math.sign(e)*Math.max(.01,Math.abs(e)*.3);ds(i,t.x+a,t.z,s)||(t.x+=a)}}if(n!==0){const r=t.z+n;if(!ds(i,t.x,r,s))t.z=r;else{const a=Math.sign(n)*Math.max(.01,Math.abs(n)*.3);ds(i,t.x,t.z+a,s)||(t.z+=a)}}}function P0(i,t,e,n,s){const r=e-i,a=n-t;let o=0,c=1;for(const[l,h,u,f]of[[i,r,s.minX,s.maxX],[t,a,s.minZ,s.maxZ]])if(Math.abs(h)<1e-8){if(l<u||l>f)return!1}else{let d=(u-l)/h,g=(f-l)/h;if(d>g){const _=d;d=g,g=_}if(o=Math.max(o,d),c=Math.min(c,g),o>c)return!1}return!0}function L0(i,t,e,n,s){for(let r=0;r<i.length;r++){const a=i[r];if(!(a.sight===!1||a.solid===!1)&&P0(t,e,n,s,a))return!0}return!1}class D0{constructor(t,e="medium"){this.scene=t,this.quality=e,this.mats=w0(),this.batch=new A0,this.glowTex=hi(),this.colliders=[],this.interactables=[],this.doors=[],this.anims=[],this.pointLights=[],this.lootAnchors={},this.extractionActive=!1,this.time=0,this.props=new R0({scene:t,mats:this.mats,batch:this.batch,addCollider:(n,s,r,a,o)=>this.addCollider(n,s,r,a,o),interactables:this.interactables,glowTex:this.glowTex,addAnim:n=>this.anims.push(n)}),this.build(),this.batch.flush(t),this.createLights(),this.createSky(),e!=="low"&&this.props.dust(e==="high"?210:150)}addCollider(t,e,n,s,r={}){const a={minX:t-n/2,maxX:t+n/2,minZ:e-s/2,maxZ:e+s/2,solid:r.solid!==!1,sight:r.sight!==!1,name:r.name||""};return this.colliders.push(a),a}floor(t,e,n,s,r){this.batch.box(n,.18,s,r,t,-.09,e)}ceiling(t,e,n,s){if(this.batch.box(n,.16,s,this.mats.ceiling,t,4.36,e),n>s)for(let a=0;a<3;a++)this.batch.box(n,.16,.24,this.mats.trimDark,t,4.2,e-s/2+1.4+a*(s-2.8)/2);else for(let a=0;a<3;a++)this.batch.box(.24,.16,s,this.mats.trimDark,t-n/2+1.4+a*(n-2.8)/2,4.2,e)}wall(t,e,n,s,r={}){const a=r.h||4.2,o=n>s;this.batch.box(n,a,s,this.mats.wall,t,a/2,e),this.batch.box(n+.06,.42,s+.06,this.mats.wallDark,t,.21,e),this.batch.box(n+.08,.12,s+.08,this.mats.trim,t,a-.12,e);const c=r.accent==="orange"?this.mats.emissiveOrange:r.accent==="red"?this.mats.emissiveRed:r.accent==="none"?null:this.mats.emissiveCyanDim;c&&(o?(this.batch.box(n*.94,.028,.025,c,t,.72,e+s/2+.02),this.batch.box(n*.94,.028,.025,c,t,.72,e-s/2-.02)):(this.batch.box(.025,.028,s*.94,c,t+n/2+.02,.72,e),this.batch.box(.025,.028,s*.94,c,t-n/2-.02,.72,e)));const l=o?n:s,h=Math.min(6,Math.max(1,Math.floor(l/2.6)));for(let u=0;u<h;u++){const f=(u+.5)/h-.5;if(o){const d=t+f*(l-.8);this.batch.box(1.15,2.3,.035,this.mats.wallPanel,d,2.2,e+s/2+.015),this.batch.box(1.15,2.3,.035,this.mats.wallPanel,d,2.2,e-s/2-.015),this.batch.box(.08,3.25,s+.07,this.mats.trimDark,t+(u/h-.5)*l,1.9,e)}else{const d=e+f*(l-.8);this.batch.box(.035,2.3,1.15,this.mats.wallPanel,t+n/2+.015,2.2,d),this.batch.box(.035,2.3,1.15,this.mats.wallPanel,t-n/2-.015,2.2,d),this.batch.box(n+.07,3.25,.08,this.mats.trimDark,t,1.9,e+(u/h-.5)*l)}}this.addCollider(t,e,n,s,{sight:!0,name:"wall"})}lintel(t,e,n,s,r={}){this.batch.box(n,1.3,s,this.mats.wall,t,3.55,e),this.batch.box(n+.04,.08,s+.04,this.mats.trim,t,2.93,e),r.accent!==!1&&(n>s?this.batch.box(n*.8,.03,.02,this.mats.emissiveCyanDim,t,3.05,e+s/2+.02):this.batch.box(.02,.03,s*.8,this.mats.emissiveCyanDim,t+n/2+.02,3.05,e))}build(){const t=this.mats,e=this.props;this.batch.box(90,.12,90,t.floorMetal,6,-.2,-2),this.floor(0,0,22,18,t.floorLab),this.ceiling(0,0,22,18),this.wall(-6.2,-9,9.6,.4,{accent:"orange"}),this.wall(6.2,-9,9.6,.4,{accent:"orange"}),this.wall(-6.2,9,9.6,.4,{accent:"orange"}),this.wall(6.2,9,9.6,.4,{accent:"orange"}),this.wall(-11,-5.2,.4,7.6),this.wall(-11,5.2,.4,7.6),this.wall(11,-5.2,.4,7.6),this.wall(11,5.2,.4,7.6),this.lintel(0,-9,2.8,.4),this.lintel(0,9,2.8,.4),this.lintel(-11,0,.4,2.8),this.lintel(11,0,.4,2.8),e.ceilingLamp(-6,-3.5,"cyan",1),e.ceilingLamp(6,-3.5,"cyan",1),e.ceilingLamp(-6,4.5,"white",.9),e.ceilingLamp(6,4.5,"white",.9),e.ceilingLamp(0,0,"cyan",1.2),e.holoTable(0,.4),e.desk(-7.5,-7.55,0,{w:3.4}),e.monitor(-8.4,1.1,-7.5,0,0),e.monitor(-7.1,1.1,-7.5,0,1,.9),e.chair(-8.4,-6.3,0),e.terminal(-4.3,0,-8,0,{id:"lab-log",source:"LAB-01 // PERSONAL ARCHIVE",title:"THE LAST SHIFT",label:"Read Dr. Voss’s archive",body:`DR. E. VOSS — SHIFT LOG 447

<warn>02:13</warn> — Deep-core resonance is holding at 8.2 terahertz. Project ECHO is stable. Or it was.

<warn>03:41</warn> — Unit K-7 walked a patrol route through a sealed bulkhead. I have never seen a security unit ignore architecture. I am logging this off-grid.

<b>04:02</b> — Something answered our signal. Not the relay. Something below the array.

RECOVERY NOTE: The research evidence I left on this desk must reach extraction. Security card is in the storage bay.`}),e.desk(7.9,-7.4,0,{w:2.8}),e.monitor(8.2,1.1,-7.35,0,2),e.chair(8.2,-6.2,Math.PI),e.desk(9.65,3.9,Math.PI/2,{w:2.6}),e.monitor(9.6,1.1,3.8,-Math.PI/2,1),e.chair(8.6,3.8,Math.PI/2);for(let r=0;r<3;r++)e.serverRack(-10.15,-5.8+r*1.55,Math.PI/2,r===1?1:0);e.serverRack(10.15,-4.6,-Math.PI/2,1),e.serverRack(10.15,-3.2,-Math.PI/2,0),e.crate(-8.7,7,1.45,{material:t.crate}),e.crate(-7,7.5,1.1,{material:t.crateOlive}),e.barrel(-5.4,7.8),e.crate(7.7,2.3,1.3,{material:t.crateDark}),e.contact(.5,6.3,3.5,3.5),e.cable(-8.5,-6.5,-4.5,-4),e.cable(-4.5,-4,.7,2),e.cable(8.5,-6.4,6,-2),e.conduit(-8,8.4,5,0,t.emissiveOrange),e.conduit(8,8.4,5,0,t.emissiveOrange),e.locker(10.2,7,-Math.PI/2,{id:"hide-lab",label:"Hide in lab service locker"}),e.sign("LAB-01","CENTRAL RESEARCH",0,3.42,-8.77,0,2.4,.7),e.sign("RESEARCH","LEVEL 4 CLEARANCE",-10.77,3.42,0,Math.PI/2,2.2,.7,"#ffa14d"),e.sign("EXTRACTION","PAD 09 // SOUTH",0,3.42,8.77,Math.PI,2.4,.7),e.sign("EAST ACCESS","MAINTENANCE BAY",10.77,3.42,0,-Math.PI/2,2.2,.7),e.sign("CAUTION","AUTONOMOUS SECURITY ACTIVE",4,2.75,8.77,Math.PI,3,.62,"#ffa14d"),this.floor(-17,0,12,10,t.floorResearch),this.ceiling(-17,0,12,10),this.wall(-23,0,.4,10,{accent:"red"}),this.wall(-17,-5,12,.4,{accent:"none"}),this.wall(-17,5,12,.4,{accent:"none"}),e.ceilingLamp(-19.5,-2.8,"cyan",.8),e.ceilingLamp(-14.5,2.8,"red",.7),e.warningLight(-11.75,2.8,1.65,16726576),e.warningLight(-11.75,2.8,-1.65,16726576),e.specimenTank(-20,-3.25,6291400),e.specimenTank(-20,3.25,6674687),e.serverRack(-13.2,-4.1,Math.PI/2,0),e.desk(-15.8,4.15,0,{w:2.4}),e.monitor(-15.8,1.1,4.1,Math.PI,2),e.chair(-15.8,3.1,Math.PI),e.terminal(-22.2,0,0,Math.PI/2,{id:"research-log",source:"RESEARCH // PROJECT ECHO",title:"PROJECT ECHO",label:"Access Project ECHO terminal",body:`PROJECT ECHO // CONTAINMENT REPORT

Subject 09 was recovered from the array substrate. It emits a structured signal through solid matter.

<b>Directive 12:</b> The quantum core is not equipment. It is a key. Do not let it leave the outpost.

<warn>Addendum:</warn> The directive has been overridden by Recovery Command. The core is now a priority asset. Extract it.

NOTE: Security core has locked this wing. External keycard required.`}),this.batch.cyl(.72,.9,.22,12,t.trimDark,-15.5,.11,0),this.batch.cyl(.28,.4,.95,10,t.trim,-15.5,.65,0),this.batch.addGeo(new De(.55,.03,4,18),t.emissiveCyan,[-15.5,1.18,0],[Math.PI/2,0,0]);const n=e.sprite(-15.5,1.35,0,7137535,1.8,.28);this.anims.push((r,a)=>{n.material.opacity=.2+Math.sin(a*2)*.07}),this.addCollider(-15.5,0,1.6,1.8,{sight:!1}),e.conduit(-17,4.55,8,0,t.emissiveOrange),e.cable(-22.5,2.5,-18,4.2),e.cable(-21,-2,-14,-4.2),e.pipe(-22.6,3.55,-4.6,-12.2,3.55,-4.6,.1,t.pipe),e.pipe(-22.6,3.55,4.6,-12.2,3.55,4.6,.1,t.pipe),e.sign("RESEARCH","QUARANTINE // NO ENTRY",-17,3,-4.76,0,3,.65,"#ff5a55"),e.sign("CONTAINMENT","PROJECT ECHO",-22.76,2.9,2.9,Math.PI/2,2.4,.6,"#ff5a55"),this.floor(0,-27,16,12,t.floorStorage),this.ceiling(0,-27,16,12),this.wall(-4.7,-21,6.6,.4,{accent:"orange"}),this.wall(4.7,-21,6.6,.4,{accent:"orange"}),this.wall(-8,-27,.4,12,{accent:"orange"}),this.wall(8,-27,.4,12,{accent:"orange"}),this.wall(0,-33,16,.4,{accent:"orange"}),this.lintel(0,-21,2.8,.4),e.ceilingLamp(-4,-24,"orange",.85),e.ceilingLamp(4,-30,"orange",.85),e.ceilingLamp(0,-27,"white",.8),e.warningLight(0,3,-32.7,16742954),e.warningLight(-7.75,2.5,-22.2,16742954),e.shelf(-7.2,-25,Math.PI/2,4.2),e.shelf(-7.2,-30.4,Math.PI/2,4),e.shelf(7.2,-27.3,Math.PI/2,5.2),e.shelf(4.4,-23,0,3.4),e.crateStack(2.6,-26,.9,{rot:.2}),e.crate(-3,-30.2,1.5,{material:t.crate}),e.crate(-1.3,-30.3,.9,{material:t.crateOlive}),e.crate(6.4,-31.4,1.3,{material:t.crateDark}),e.barrel(6.6,-22),e.barrel(5.7,-22.3,{color:t.crate}),e.pipeCluster(-2,-32.6,0,3),e.pipe(7.75,3,-24,7.75,3,-30,.13,t.pipe),e.pipe(7.75,2.7,-24,7.75,2.7,-30,.08,t.pipeDark),e.cable(-7,-22.2,3.4,-23),e.crateHide(5.2,-28.2,0,{id:"hide-storage"}),e.containerBox(4,-23.4,.28,"storage-keycard","keycard","Search security crate"),e.containerBox(-5.9,-22.3,-.18,"storage-tools","battery","Search tool crate"),e.terminal(7.25,0,-22.5,-Math.PI/2,{id:"storage-log",source:"SECURITY GRID // STORAGE 02",title:"UNIT DEPLOYMENT",label:"Read security grid status",body:`SECURITY GRID // AUTONOMOUS UNITS

<warn>K-7:</warn> ONLINE — central lab patrol
<warn>K-9:</warn> ONLINE — storage / north access

Visual recognition protocol active. Concealment lockers are authorized for personnel use.

Security override card stored in crate B-4. Clearance remains under command lock.

<warn>NOTE:</warn> Units will investigate sound and last-known position. They are not omniscient. Break contact.`}),e.sign("STORAGE 02","CARGO // SECURE",0,3.42,-20.77,0,2.6,.7,"#ffa14d"),e.sign("AUTHORIZED","PERSONNEL ONLY",7.76,2.7,-25.8,-Math.PI/2,2.2,.6,"#ffa14d"),this.floor(27,0,12,14,t.floorMaint),this.ceiling(27,0,12,14),this.wall(21,-4.2,.4,5.6,{accent:"orange"}),this.wall(21,4.2,.4,5.6,{accent:"orange"}),this.wall(33,0,.4,14,{accent:"orange"}),this.wall(27,-7,12,.4,{accent:"orange"}),this.wall(27,7,12,.4,{accent:"orange"}),this.lintel(21,0,.4,2.8),e.ceilingLamp(27,-3.8,"orange",.9),e.ceilingLamp(27,3.2,"white",.8),e.generator(29,-3.5),e.workbench(26.8,6,0),e.toolRack(32.75,2.1,0,-Math.PI/2),e.toolRack(23.2,2,-7.75,0),e.locker(22.4,-6.55,0,{id:"hide-maint",label:"Hide in maintenance locker"}),e.containerBox(31.2,-6.3,0,"maint-supply","medkit","Search medical locker"),e.barrel(32,5.8,{color:t.crate}),e.barrel(31.1,6.1),e.crate(23,6.1,1.2,{material:t.crateOlive}),e.pipeWork(24.4,-5.7),e.pipe(22.6,3,6.5,32.4,3,6.5,.14,t.pipe),e.pipe(22.6,2.65,6.1,32.4,2.65,6.1,.08,t.pipeDark),e.cable(22.2,4,31.8,4.2),e.warningLight(32.7,2.9,0,16742954),e.terminal(30.2,0,6.15,Math.PI,{id:"maint-log",source:"ENGINEERING // POWER SUBSYSTEM",title:"GRID FAILURE",label:"Access power grid terminal",body:`POWER SUBSYSTEM // DIAGNOSTIC

Primary tap: <warn>UNSTABLE</warn>
Extraction pad: <b>HOLDING</b>
Local battery reserves: NOMINAL

Security units are drawing from the emergency bus. Their optical sensors are tuned for movement in low light.

RECOVERY ADVICE: Sprinting drains suit energy. The battery cell in this bay will recharge your lamp. Use cover, not firepower.`}),e.sign("MAINTENANCE","SERVICE BAY 03",20.77,3.42,0,-Math.PI/2,2.6,.7,"#ffa14d"),e.sign("DANGER","HIGH VOLTAGE // GENERATOR",27,2.8,-6.78,0,3.2,.7,"#ffa14d"),this.floor(0,-15,4,12,t.floorHall),this.ceiling(0,-15,4,12),this.wall(-2,-15,.4,12),this.wall(2,-15,.4,12),e.ceilingLamp(0,-12.2,"cyan",.62),e.ceilingLamp(0,-16.2,"cyan",.62),e.ceilingLamp(0,-19,"orange",.62),e.pipe(-1.72,3.2,-9.5,-1.72,3.2,-20.5,.1,t.pipe),e.pipe(-1.72,2.9,-9.5,-1.72,2.9,-20.5,.06,t.pipeDark),e.pipe(1.72,3.15,-9.5,1.72,3.15,-20.5,.08,t.pipe),e.sign("SEC-02","AUTHORIZED ACCESS",1.77,2.6,-14.5,-Math.PI/2,2.2,.6),this.floor(16,0,10,4,t.floorHall),this.ceiling(16,0,10,4),this.wall(16,-2,10,.4),this.wall(16,2,10,.4),e.ceilingLamp(14,0,"cyan",.6),e.ceilingLamp(18,0,"cyan",.6),e.pipe(11.5,3.2,-1.72,20.5,3.2,-1.72,.1,t.pipe),e.pipe(11.5,2.92,-1.72,20.5,2.92,-1.72,.06,t.pipeDark),e.conduit(16,1.78,8,0,t.emissiveCyanDim),this.floor(0,12,4,6,t.floorHall),this.ceiling(0,12,4,6),this.wall(-2,12,.4,6),this.wall(2,12,.4,6),e.ceilingLamp(0,12,"cyan",.6),e.pipe(-1.72,3.2,9.5,-1.72,3.2,14.8,.1,t.pipe),e.pipe(1.72,3.2,9.5,1.72,3.2,14.8,.1,t.pipe),this.floor(0,22,14,14,t.floorExtract),this.wall(-4.2,15,5.6,.4,{accent:"orange"}),this.wall(4.2,15,5.6,.4,{accent:"orange"}),this.wall(-7,22,.4,14,{accent:"orange"}),this.wall(7,22,.4,14,{accent:"orange"}),this.wall(0,29,14,.4,{accent:"orange"}),this.lintel(0,15,2.8,.4),e.extractionPad(0,22.1),e.railing(-6.45,22.2,12,Math.PI/2),e.railing(6.45,22.2,12,Math.PI/2),e.dropship(4.55,26.4,-.22),e.crate(-5.15,26.7,1.35,{material:t.crate}),e.crate(-5.35,25.25,.95,{material:t.crateOlive}),e.crate(5.2,17,1.1,{material:t.crateDark}),e.barrel(-5.6,17.3),e.warningLight(0,3,15.25,16742954),e.warningLight(-6.7,2.5,27.4,16742954),e.warningLight(6.7,2.5,27.4,16742954),e.sign("EXTRACTION","PAD 09 // RECOVERY",0,2.9,28.77,Math.PI,4.2,1.1),e.sign("HOLD","AWAIT EXTRACTION LOCK",-6.76,2.5,19.4,Math.PI/2,2.2,.6,"#ffa14d"),this.batch.box(3.2,20,3.2,t.wallDark,-17,10,34),this.batch.box(2,14,2,t.wallDark,20,7,33),this.batch.box(4,8,4,t.wallDark,25,4,22),e.sprite(-17,20.4,34,16726576,1.4,.65),e.sprite(20,14.4,33,16726576,1.1,.55);const s=[{x:0,z:-9,axis:"x",locked:!1,name:"lab-north"},{x:0,z:9,axis:"x",locked:!1,name:"lab-south"},{x:0,z:-21,axis:"x",locked:!1,name:"storage"},{x:11,z:0,axis:"z",locked:!1,name:"lab-east"},{x:21,z:0,axis:"z",locked:!1,name:"maintenance"},{x:-11,z:0,axis:"z",locked:!0,name:"research"}];for(const r of s)this.doors.push(C0({scene:this.scene,mats:t,batch:this.batch,addCollider:(...a)=>this.addCollider(...a),glowTex:this.glowTex,...r}));this.researchDoor=this.doors.find(r=>r.name==="research"),this.interactables.push({kind:"door",id:"research-door",x:-10.4,y:1.2,z:0,radius:2.4,label:"Research wing sealed — requires security keycard"}),this.interactables.push({kind:"extraction",id:"extraction",x:0,y:1.2,z:22.1,radius:3.3,label:"Initiate extraction"}),this.lootAnchors={"doc-lab":{x:-7.2,y:1.18,z:-7.35},"component-lab":{x:7.7,y:1.3,z:2.3},"doc-storage":{x:-3,y:1.55,z:-30.2},"component-storage":{x:-6.9,y:1.72,z:-26},"module-research":{x:-15.5,y:1.4,z:0},"cell-maint":{x:25.4,y:1.12,z:5.9},"cell-extract":{x:-5.15,y:1.38,z:26.7}}}createLights(){const t=this.scene,e=new Lu(4159890,527632,1.15);t.add(e),this.hemi=e;const n=new Ou(11461368,1.9);n.position.set(18,28,16),n.target.position.set(0,0,-6),n.castShadow=this.quality!=="low",n.shadow.mapSize.set(this.quality==="high"?2048:1024,this.quality==="high"?2048:1024),n.shadow.camera.left=-34,n.shadow.camera.right=34,n.shadow.camera.top=38,n.shadow.camera.bottom=-38,n.shadow.camera.near=1,n.shadow.camera.far=90,n.shadow.bias=-.0012,n.shadow.normalBias=.02,t.add(n),t.add(n.target),this.dirLight=n;const s=(r,a,o,c,l,h)=>{const u=new Nu(r,a,o,2);return u.position.set(c,l,h),u.castShadow=!1,t.add(u),this.pointLights.push(u),u};this.labLight=s(7137535,58,30,0,3.65,.5),this.labFill=s(4039869,30,20,0,3.6,-6),this.storageLight=s(16751690,50,24,0,3.55,-27),this.maintLight=s(16756828,46,22,27,3.55,.5),this.researchLight=s(7137535,40,20,-17,3.5,0),this.extractLight=s(7137535,65,34,0,3.2,22),this.anims.push((r,a)=>{this.labLight.intensity=58+Math.sin(a*7.1)*1.4,this.storageLight.intensity=50+Math.sin(a*3.3+1)*1.2,this.maintLight.intensity=46+Math.sin(a*5.2+2)*1.1,this.extractLight.intensity=(this.extractionActive?85:65)+Math.sin(a*2.4)*2})}createSky(){const t=new we,e=420,n=new Float32Array(e*3);for(let o=0;o<e;o++){const c=Math.random()*Math.PI*2,l=55+Math.random()*30,h=8+Math.random()*55;n[o*3]=Math.cos(c)*l,n[o*3+1]=h,n[o*3+2]=Math.sin(c)*l}t.setAttribute("position",new We(n,3));const s=new _c(t,new fo({color:12576754,size:.34,sizeAttenuation:!0,transparent:!0,opacity:.75,depthWrite:!1,fog:!1}));this.scene.add(s);const r=Ie(this.glowTex,12577535,15,.75);r.position.set(26,31,48),this.scene.add(r);const a=Ie(this.glowTex,16777215,5,.9);a.position.copy(r.position),this.scene.add(a),this.stars=s}unlockResearchDoor(){if(!this.researchDoor||this.researchDoor.unlocked)return!1;this.researchDoor.unlock();const t=this.interactables.find(e=>e.id==="research-door");return t&&(t.label="Research wing unlocked"),!0}openContainer(t){const e=this.props.containers.get(t),n=this.interactables.find(s=>s.kind==="container"&&s.id===t);n&&(n.opened=!0),e&&(e.opened=!0)}setExtractionActive(t){this.extractionActive=t,this.extractLight&&(this.extractLight.color.set(t?16752973:7137535),this.extractLight.intensity=t?85:65)}setQuality(t){this.quality=t,this.stars&&(this.stars.visible=t!=="low"),this.dirLight&&(this.dirLight.castShadow=t!=="low"),this.dirLight&&t!=="low"&&(this.dirLight.shadow.mapSize.set(t==="high"?2048:1024,t==="high"?2048:1024),this.dirLight.shadow.map&&(this.dirLight.shadow.map.dispose(),this.dirLight.shadow.map=null))}update(t,e,n){this.time+=t;const s=this.time;for(const a of this.doors)a.update(t,s,e,n);for(const a of this.anims)a(t,s);for(const a of this.props.warningSprites)a.active&&(a.sprite.material.opacity=a.base*(.55+Math.sin(s*a.speed+a.phase)*.35));for(const a of this.props.containers.values()){const o=a.opened?1:0;a.open=(a.open||0)+(o-(a.open||0))*Math.min(1,t*4),a.lid.rotation.x=-a.open*1.35,a.spr.material.opacity=a.opened?.05:.2+Math.sin(s*2.5)*.04}const r=.9+Math.sin(s*16)*.02+Math.sin(s*2.1)*.03;this.mats.screenA.color.setScalar(r),this.mats.screenB.color.setScalar(r*.97),this.mats.screenC.color.setScalar(r*1.02)}}function tr(i,t,e,n=8){const s=new po(i,t,3,n);return new Y(s,e)}class I0{constructor(t){this.scene=t,this.group=new oe,this.model=new oe,this.group.add(this.model),this.scene.add(this.group);const e=new Ee({color:2504258,roughness:.68,metalness:.32}),n=new Ee({color:4414054,roughness:.48,metalness:.55}),s=new Ee({color:1779502,roughness:.62,metalness:.42}),r=new Ee({color:3943969,roughness:.9,metalness:.1}),a=new Bt({color:9434623}),o=new Bt({color:3713468}),c=new Bt({color:16752973}),l=new Bt({color:7664383});this.materials={suit:e,armor:n,armorDark:s,cyan:a,cyanDim:o,orange:c};const h=new Y(new dt(.52,.56,.32),e);h.position.y=1.28,h.geometry.translate(0,0,0),this.model.add(h);const u=new Y(new dt(.55,.38,.12),n);u.position.set(0,1.36,.18),this.model.add(u);const f=new Y(new dt(.22,.025,.02),a);f.position.set(0,1.4,.25),this.model.add(f);const d=new Y(new dt(.05,.22,.02),o);d.position.set(-.17,1.31,.25),this.model.add(d);const g=new Y(new dt(.1,.06,.02),c);g.position.set(.16,1.28,.25),this.model.add(g);const _=new Y(new dt(.5,.1,.34),r);_.position.y=1,this.model.add(_);const m=new Y(new dt(.12,.07,.03),n);m.position.set(0,1,.18),this.model.add(m);const p=new Y(new dt(.42,.22,.3),s);p.position.y=.9,this.model.add(p);const E=new Y(new dt(.38,.48,.2),s);E.position.set(0,1.28,-.23),this.model.add(E);const b=new Y(new dt(.32,.1,.16),n);b.position.set(0,1.55,-.22),this.model.add(b);for(const U of[-1,1]){const N=new Y(new ue(.028,.028,.5,6),o);N.position.set(U*.16,1.28,-.34),this.model.add(N)}const S=new Y(new dt(.22,.025,.02),a);S.position.set(0,1.12,-.34),this.model.add(S),this.head=new oe,this.head.position.set(0,1.68,0),this.model.add(this.head);const A=new Y(new ue(.1,.12,.1,8),s);A.position.y=-.15,this.head.add(A);const w=new Y(new Dn(.205,12,9),n);w.scale.set(1,1.06,1.02),this.head.add(w);const R=new Y(new dt(.28,.12,.18),s);R.position.set(0,-.08,.1),this.head.add(R);const C=new Y(new dt(.26,.095,.045),l);C.position.set(0,.02,.19),this.head.add(C);const M=new Y(new dt(.3,.03,.03),s);M.position.set(0,.09,.18),this.head.add(M);for(const U of[-1,1]){const N=new Y(new dt(.055,.12,.12),n);N.position.set(U*.2,0,0),this.head.add(N);const G=new Y(new dt(.012,.035,.04),a);G.position.set(U*.232,.01,.04),this.head.add(G)}const v=new Y(new ue(.008,.012,.22,5),s);v.position.set(.17,.22,-.05),v.rotation.z=-.18,this.head.add(v);const P=new Y(new Dn(.022,6,5),c);P.position.set(.2,.33,-.05),this.head.add(P),this.visorGlow=Ie(hi(),6285823,.55,.3),this.visorGlow.position.set(0,.02,.23),this.head.add(this.visorGlow),this.arms=[];for(const U of[-1,1]){const N=new oe;N.position.set(U*.34,1.47,0),this.model.add(N);const G=new Y(new Dn(.12,8,6),n);G.scale.set(1.1,.8,1),N.add(G);const V=new Y(new dt(.1,.02,.14),a);V.position.set(U*.03,.07,.02),N.add(V);const X=tr(.075,.24,e,6);X.position.y=-.2,N.add(X);const K=new Y(new Dn(.075,6,5),s);K.position.y=-.36,N.add(K);const H=tr(.065,.22,n,6);H.position.y=-.5,N.add(H);const st=new Y(new dt(.11,.13,.13),s);st.position.set(0,-.66,.02),N.add(st);const ct=new Y(new dt(.1,.025,.1),o);ct.position.set(0,-.43,0),N.add(ct),N.rotation.x=U*.03,this.arms.push({pivot:N,side:U})}this.legs=[];for(const U of[-1,1]){const N=new oe;N.position.set(U*.145,.88,0),this.model.add(N);const G=tr(.095,.28,e,6);G.position.y=-.22,N.add(G);const V=new Y(new dt(.16,.14,.09),n);V.position.set(0,-.38,.06),N.add(V);const X=tr(.078,.28,s,6);X.position.y=-.54,N.add(X);const K=new Y(new dt(.16,.14,.28),n);K.position.set(0,-.75,.05),N.add(K);const H=new Y(new dt(.09,.018,.02),a);H.position.set(0,-.71,.2),N.add(H);const st=new Y(new dt(.02,.18,.06),c);st.position.set(U*.09,-.2,.03),N.add(st),this.legs.push({pivot:N,side:U})}this.group.position.set(0,0,6.4),this.group.rotation.y=Math.PI,this.physics={pos:new D(0,0,6.4),radius:.38,walkSpeed:3.35,sprintSpeed:5.7,yaw:Math.PI,moveAmount:0,speed:0,stride:0,time:0},this.health=100,this.maxHealth=100,this.energy=100,this.battery=100,this.flashlightOn=!1,this.hidden=!1,this.hideType=null,this.sprinting=!1,this.lastDamage=-10,this.alive=!0,this.onFootstep=null,this.onDamage=null,this.flashlight=new Iu(12449023,0,22,.5,.55,1.4),this.flashlight.position.set(0,1.6,.15),this.flashlight.target.position.set(0,-.5,5),this.group.add(this.flashlight),this.group.add(this.flashlight.target)}get position(){return this.physics.pos}setFlashlight(t){return t&&this.battery<=0?!1:(this.flashlightOn=t,this.flashlight.intensity=t?55:0,!0)}setHidden(t,e=null){this.hidden=t,this.hideType=e,t?(this.physics.speed=0,this.physics.moveAmount=0,this.model.visible=!1,this.sprinting=!1):(this.model.visible=!0,this.model.scale.set(1,1,1),this.model.position.y=0)}teleport(t,e,n=this.physics.yaw){this.physics.pos.set(t,0,e),this.physics.yaw=n,this.group.position.set(t,0,e),this.group.rotation.y=n}takeDamage(t){return this.alive?(this.health=Math.max(0,this.health-t),this.health<=0?(this.alive=!1,!0):(this.onDamage&&this.onDamage(t),!1)):!1}heal(t){this.health=Math.min(this.maxHealth,this.health+t)}rechargeBattery(t){this.battery=Math.min(100,this.battery+t)}update(t,e,n,s,r=!0){const a=this.physics;if(a.time+=t,!this.alive){this.animate(t,0,!1);return}let o=0,c=0;const l=r&&!this.hidden&&(e.x!==0||e.z!==0);if(l){const g=Math.hypot(e.x,e.z),_=e.x/g,m=e.z/g,p=-Math.sin(n),E=-Math.cos(n),b=Math.cos(n),S=-Math.sin(n);o=p*m+b*_,c=E*m+S*_}const h=r&&!this.hidden&&e.sprint&&this.energy>1&&l;this.sprinting=h,h?this.energy=Math.max(0,this.energy-t*19):this.energy=Math.min(100,this.energy+t*(l?8:13));const u=l?h?a.sprintSpeed:a.walkSpeed:0,f=l?12:16;if(a.speed+=(u-a.speed)*Math.min(1,t*f),a.speed<.02&&(a.speed=0),a.speed>.02&&l){const g=a.speed*t;wc(s.colliders,a.pos,o*g,c*g,a.radius);let m=Math.atan2(o,c)-a.yaw;for(;m>Math.PI;)m-=Math.PI*2;for(;m<-Math.PI;)m+=Math.PI*2;a.yaw+=m*Math.min(1,t*12),a.moveAmount=Math.min(1,a.moveAmount+t*5),a.stride+=g*(h?1.5:1),a.stride>(h?2.1:1.55)&&(a.stride=0,this.onFootstep&&this.onFootstep(h))}else a.moveAmount=Math.max(0,a.moveAmount-t*6),a.stride=Math.max(0,a.stride-t);a.pos.x=Math.max(-30,Math.min(36,a.pos.x)),a.pos.z=Math.max(-35,Math.min(31,a.pos.z)),this.group.position.set(a.pos.x,0,a.pos.z),this.group.rotation.y=a.yaw,this.flashlightOn?(this.battery=Math.max(0,this.battery-t*4.6),this.flashlight.intensity=55+Math.sin(a.time*23)*1.2,this.battery<=0&&this.setFlashlight(!1)):this.flashlight.intensity=0;const d=a.speed>.15&&l;this.animate(t,a.moveAmount*(h?1.5:1),d),this.visorGlow.material.opacity=.24+Math.sin(a.time*2.2)*.06}animate(t,e,n){const s=this.physics.time,r=Math.sin(this.physics.stride*Math.PI*2),a=e,o=Math.sin(s*1.7)*.012;this.model.position.y=o+(n?Math.abs(Math.sin(this.physics.stride*Math.PI*2))*.035*a:0),this.model.rotation.x=n?-.05*a:0,this.model.rotation.z=n?Math.sin(this.physics.stride*Math.PI)*.02:0,this.head.rotation.y=Math.sin(s*.55)*.05,this.head.rotation.x=Math.sin(s*.9)*.02;for(const c of this.arms){const l=r*.72*a*c.side;c.pivot.rotation.x=l+(n?0:Math.sin(s*1.7+c.side)*.02),c.pivot.rotation.z=c.side*(.06+.03*a)}for(const c of this.legs){const l=r*.68*a*c.side;c.pivot.rotation.x=l}if(!n){for(const c of this.arms)c.pivot.rotation.x*=.9;for(const c of this.legs)c.pivot.rotation.x*=.9}this.hidden&&this.hideType==="crates"&&(this.model.rotation.x=-.22,this.model.position.y=-.18)}}class U0{constructor(t){this.camera=t,this.yaw=Math.PI,this.pitch=.24,this.distance=4.4,this.zoom=4.4,this.target=new D,this.smoothPos=new D,this.smoothTarget=new D,this.initialized=!1,this.shake=0,this.sensitivity=.0032}handleMouse(t,e){this.yaw-=t*this.sensitivity,this.pitch+=e*this.sensitivity,this.pitch=Math.max(-.12,Math.min(1,this.pitch))}zoomBy(t){this.zoom=Math.max(2.6,Math.min(6.6,this.zoom+t*.003))}addShake(t){this.shake=Math.min(.25,this.shake+t)}update(t,e,n,s=!1,r=null){const a=e.position,o=s&&r==="crates"?.85:1.36;this.target.set(a.x,o,a.z);const c=s&&r==="locker"?2.4:this.zoom,l=Math.cos(this.pitch)*c,h=Math.sin(this.pitch)*c;let u=a.x+Math.sin(this.yaw)*l,f=a.z+Math.cos(this.yaw)*l,d=o+h;if(!s){let p=1;for(let E=1;E<=12;E++){const b=E/12,S=a.x+(u-a.x)*b,A=a.z+(f-a.z)*b;let w=!1;for(let R=0;R<n.colliders.length;R++){const C=n.colliders[R];if(C.solid&&S>C.minX-.22&&S<C.maxX+.22&&A>C.minZ-.22&&A<C.maxZ+.22){w=!0;break}}if(w){p=Math.max(.18,(E-1)/12);break}}if(p<1){const b=Math.max(.4,p*c-.35)/c;u=a.x+(u-a.x)*b,f=a.z+(f-a.z)*b,d=o+h*Math.max(.4,b)}}if(d=Math.max(.55,Math.min(3.85,d)),!this.initialized)this.smoothPos.set(u,d,f),this.smoothTarget.copy(this.target),this.initialized=!0;else{const m=1-Math.exp(-t*11);this.smoothPos.x+=(u-this.smoothPos.x)*m,this.smoothPos.y+=(d-this.smoothPos.y)*m,this.smoothPos.z+=(f-this.smoothPos.z)*m,this.smoothTarget.lerp(this.target,1-Math.exp(-t*16))}this.shake*=Math.exp(-t*9);const g=(Math.random()-.5)*this.shake,_=(Math.random()-.5)*this.shake;this.camera.position.set(this.smoothPos.x+g,this.smoothPos.y+_,this.smoothPos.z),this.camera.lookAt(this.smoothTarget.x,this.smoothTarget.y+.1,this.smoothTarget.z),this.camera.rotation.z=0}}function hs(i,t){return gi(64,64,(e,n,s)=>{e.clearRect(0,0,n,s),e.beginPath(),e.arc(n/2,s/2,25,0,Math.PI*2),e.fillStyle="rgba(3,10,14,.78)",e.fill(),e.strokeStyle=t,e.lineWidth=2,e.stroke(),e.fillStyle=t,e.font="bold 34px monospace",e.textAlign="center",e.textBaseline="middle",e.fillText(i,n/2,s/2+2)})}const sa={patrol:hs("·","#6ce8ff"),suspicious:hs("?","#ffa14d"),investigate:hs("?","#ffa14d"),search:hs("?","#ffa14d"),chase:hs("!","#ff4a42")};class Bl{constructor(t,e){this.scene=t,this.name=e.name||"K-7",this.patrol=e.patrol,this.patrolIndex=0,this.state="patrol",this.detection=0,this.visible=!1,this.lastSeen=new D(e.start.x,0,e.start.z),this.target=new D(e.start.x,0,e.start.z),this.losTimer=0,this.stateTimer=0,this.waitTimer=0,this.attackTimer=0,this.scanPhase=Math.random()*6.28,this.time=Math.random()*10,this.dead=!1,this.onStateChange=null,this.onDetect=null,this.onAttack=null,this.visionRange=e.visionRange||13,this.visionHalfCos=Math.cos((e.fov||72)*Math.PI/360),this.speed=0,this.yaw=Math.random()*Math.PI*2,this.physics={pos:new D(e.start.x,0,e.start.z),radius:.48},this.build(e.start),this.enterPatrol(!0)}get position(){return this.physics.pos}build(t){const e=new Ee({color:2829360,roughness:.48,metalness:.7}),n=new Ee({color:1382170,roughness:.58,metalness:.62}),s=new Ee({color:4930090,roughness:.4,metalness:.7}),r=new Bt({color:16751165}),a=new Bt({color:16726576});this.eyeMat=r,this.eyeAlertMat=a;const o=new oe;o.position.set(t.x,0,t.z),this.scene.add(o),this.group=o,this.body=new oe,o.add(this.body);const c=new Y(new De(.42,.055,5,18),s);c.rotation.x=Math.PI/2,c.position.y=.36,this.body.add(c);const l=new Y(new De(.28,.02,4,16),r);l.rotation.x=Math.PI/2,l.position.y=.33,this.body.add(l);const h=Ie(hi(),16747066,1.6,.22);h.position.y=.33,this.body.add(h),this.ringGlow=h,this.ring=l;const u=new Y(new dn(1.6,1.6),new Bt({map:hi(),color:16747066,transparent:!0,opacity:.18,depthWrite:!1,blending:Ge}));u.rotation.x=-Math.PI/2,u.position.y=.04,o.add(u),this.groundGlow=u;const f=new Y(new ue(.34,.46,.45,8),n);f.position.y=.62,this.body.add(f);const d=new Y(new ue(.42,.36,.1,8),s);d.position.y=.88,this.body.add(d);const g=new Y(new dt(.64,.72,.44),e);g.position.y=1.23,this.body.add(g);const _=new Y(new dt(.5,.44,.08),n);_.position.set(0,1.3,.24),this.body.add(_);const m=new Y(new ue(.09,.09,.06,10),r);m.rotation.x=Math.PI/2,m.position.set(0,1.3,.29),this.body.add(m),this.core=m;const p=Ie(hi(),16742954,.7,.3);p.position.set(0,1.3,.34),this.body.add(p),this.coreGlow=p;for(let v=0;v<3;v++){const P=new Y(new dt(.4,.03,.03),s);P.position.set(0,1.02+v*.08,.24),this.body.add(P)}for(const v of[-1,1]){const P=new Y(new dt(.18,.28,.3),e);P.position.set(v*.42,1.45,0),this.body.add(P);const U=new Y(new dt(.025,.16,.02),r);U.position.set(v*.52,1.45,.02),this.body.add(U);const N=new Y(new ue(.045,.035,.62,6),n);N.position.set(v*.44,1.02,.05),N.rotation.z=v*.16,this.body.add(N);const G=new Y(new ue(.06,.03,.32,6),s);G.position.set(v*.52,.66,.07),this.body.add(G);const V=new Y(new Dn(.05,6,5),r);V.position.set(v*.53,.51,.07),this.body.add(V)}this.head=new oe,this.head.position.set(0,1.68,0),this.body.add(this.head);const E=new Y(new dt(.44,.25,.4),e);this.head.add(E);const b=new Y(new dt(.48,.06,.44),n);b.position.y=.1,this.head.add(b);const S=new Y(new dt(.34,.1,.05),n);S.position.set(0,0,.21),this.head.add(S),this.eye=new Y(new dt(.28,.045,.03),r),this.eye.position.set(0,0,.24),this.head.add(this.eye),this.eyeGlow=Ie(hi(),16742954,.9,.4),this.eyeGlow.position.set(0,0,.3),this.head.add(this.eyeGlow);const A=new Y(new ue(.012,.02,.34,5),n);A.position.set(.14,.27,-.08),A.rotation.z=-.25,this.head.add(A);const w=new Y(new Dn(.03,5,4),r);w.position.set(.18,.43,-.08),this.head.add(w);const R=new ho({map:sa.patrol,transparent:!0,depthWrite:!1,depthTest:!1});this.stateSprite=new gc(R),this.stateSprite.scale.set(.45,.45,1),this.stateSprite.position.y=2.35,o.add(this.stateSprite);const C=new Bt({color:16752973,transparent:!0,opacity:.05,depthWrite:!1,side:He,blending:Ge}),M=new Y(new vr(2.8,18,-.45,.9),C);M.rotation.x=-Math.PI/2,M.position.set(0,.06,1.4),o.add(M),this.scanCone=M,this.scanConeMat=C,this.body.traverse(v=>{v.isMesh&&!v.material.transparent&&(v.castShadow=!0)})}setState(t){if(this.state===t)return;this.state=t,this.stateTimer=0;const e=sa[t]||sa.patrol;this.stateSprite.material.map=e,this.stateSprite.material.needsUpdate=!0;const n=t==="chase";this.eyeMat.color.set(n?16726576:t==="patrol"?16751165:16757852);const s=n?16726576:16752973;this.eyeGlow.material.color.set(s),this.ringGlow.material.color.set(s),this.ring.material.color.set(n?16726576:16751165),this.groundGlow.material.color.set(s),this.core.material.color.set(n?16726576:16751165),this.coreGlow.material.color.set(s),this.scanConeMat.color.set(n?16726576:16752973),this.scanConeMat.opacity=n?.12:.055,this.onStateChange&&this.onStateChange(this,t),t==="chase"&&this.onDetect&&this.onDetect(this)}enterPatrol(t=!1){if(this.setState("patrol"),t){let e=0,n=1/0;for(let s=0;s<this.patrol.length;s++){this.patrol[s].x*this.patrol[s].x+this.patrol[s].z*this.patrol[s].z;const r=this.position.x-this.patrol[s].x,a=this.position.z-this.patrol[s].z,o=r*r+a*a;o<n&&(n=o,e=s)}this.patrolIndex=e}this.target.set(this.patrol[this.patrolIndex].x,0,this.patrol[this.patrolIndex].z)}alertTo(t,e=!1){this.state==="chase"||this.dead||(this.lastSeen.set(t.x,0,t.z),this.target.set(t.x,0,t.z),this.setState("investigate"),this.stateTimer=0,this.detection=Math.max(this.detection,.35),e&&(this.detection=Math.min(.9,this.detection+.3)))}canSee(t,e){if(t.hidden||!t.alive)return!1;const n=t.position.x,s=t.position.z,r=n-this.position.x,a=s-this.position.z,o=Math.hypot(r,a);if(o>this.visionRange)return!1;const c=Math.sin(this.yaw),l=Math.cos(this.yaw),u=(r*c+a*l)/(o||1)>=this.visionHalfCos,f=o<3;return!(!u&&!f||L0(e.colliders,this.position.x,this.position.z,n,s))}moveToward(t,e,n,s,r){const a=t-this.position.x,o=e-this.position.z,c=Math.hypot(a,o);if(c<.1)return this.speed*=.8,c;const l=a/c,h=o/c,u=Math.min(n*s,c);wc(r.colliders,this.physics.pos,l*u,h*u,this.physics.radius);let d=Math.atan2(l,h)-this.yaw;for(;d>Math.PI;)d-=Math.PI*2;for(;d<-Math.PI;)d+=Math.PI*2;return this.yaw+=d*Math.min(1,s*7),this.speed=n,c}update(t,e,n,s=!0){if(this.time+=t,this.dead)return;const r=s&&e.alive&&this.canSee(e,n);this.visible=r,r?(this.lastSeen.set(e.position.x,0,e.position.z),this.losTimer=0):this.losTimer+=t;const a=Math.hypot(e.position.x-this.position.x,e.position.z-this.position.z),o=e.physics.speed>4.5,c=(.55+Math.max(0,1-a/this.visionRange)*1.15)*(o?1.35:1);if(s)switch(this.state){case"patrol":{r?(this.detection=Math.min(1,this.detection+c*t),this.detection>=1?this.startChase():this.detection>.3?(this.setState("suspicious"),this.stateTimer=0):this.patrolStep(t,n)):(this.detection=Math.max(0,this.detection-t*.4),this.patrolStep(t,n));break}case"suspicious":{this.speed*=.85,r?(this.detection=Math.min(1,this.detection+c*1.1*t),this.faceToward(e.position.x,e.position.z,t,8),this.detection>=1&&this.startChase()):(this.detection=Math.max(0,this.detection-t*.35),this.stateTimer+=t,this.stateTimer>1.4&&(this.target.copy(this.lastSeen),this.setState("search"),this.stateTimer=0));break}case"chase":{Math.hypot(this.lastSeen.x-this.position.x,this.lastSeen.z-this.position.z),r?(this.detection=1,this.lastSeen.set(e.position.x,0,e.position.z),this.target.copy(this.lastSeen)):(this.detection=Math.max(.35,this.detection-t*.08),this.losTimer>1.3&&this.target.copy(this.lastSeen),this.losTimer>5.5&&(this.setState("search"),this.stateTimer=0));const _=this.moveToward(this.target.x,this.target.z,3.55,t,n);r&&a<1.55?(this.speed*=.4,this.faceToward(e.position.x,e.position.z,t,10),this.attackTimer-=t,this.attackTimer<=0&&(this.attackTimer=.95,this.onAttack&&this.onAttack(this,12))):this.attackTimer=Math.min(this.attackTimer,.35),_<1&&!r&&(this.setState("search"),this.stateTimer=0);break}case"search":{this.stateTimer+=t;const _=this.moveToward(this.target.x,this.target.z,1.85,t,n);r?(this.detection=Math.min(1,this.detection+c*1.3*t),this.detection>=.8&&this.startChase()):this.detection=Math.max(0,this.detection-t*.25),_<.8&&(this.yaw+=t*.9*Math.sin(this.time*1.7+this.scanPhase),this.speed*=.8),this.stateTimer>5.5&&this.returnToPatrol();break}case"investigate":{this.stateTimer+=t;const _=this.moveToward(this.target.x,this.target.z,2.15,t,n);r&&(this.detection=Math.min(1,this.detection+c*1.3*t),this.detection>=.85&&this.startChase()),_<.9&&(this.speed*=.7,this.yaw+=t*.6*Math.sin(this.time*1.4+this.scanPhase)),this.stateTimer>7&&this.returnToPatrol();break}case"return":{const _=this.patrol[this.returnIndex===void 0?this.patrolIndex:this.returnIndex],m=this.moveToward(_.x,_.z,1.6,t,n);r&&(this.detection=Math.min(1,this.detection+c*t),this.detection>=.9&&this.startChase()),m<.7&&(this.setState("patrol"),this.waitTimer=1);break}}const l=this.state==="chase";this.stateSprite.material.opacity=this.state==="patrol"?.3:.85,this.stateSprite.scale.setScalar(l?.52+Math.sin(this.time*8)*.04:.42),this.stateSprite.position.y=2.35+Math.sin(this.time*2)*.04;const h=l?.7+Math.sin(this.time*14)*.3:.55+Math.sin(this.time*3)*.15;this.eyeGlow.material.opacity=h,this.coreGlow.material.opacity=h*.7,this.ringGlow.material.opacity=.16+Math.sin(this.time*5)*.04;const u=Math.max(0,this.speed),f=.06+Math.sin(this.time*2.6)*.018;this.body.position.y=f+(l?.04:0),this.body.rotation.x=Zh.damp(this.body.rotation.x,l?-.12:0,4,t),this.body.rotation.z=Math.sin(this.time*1.3)*.015,this.ring.rotation.z+=t*(l?3.5:1.3),this.scanCone.position.y=.07,this.groundGlow.material.opacity=l?.28:.14+Math.sin(this.time*2.4)*.03;let g=this.yaw-this.head.rotation.y;for(;g>Math.PI;)g-=Math.PI*2;for(;g<-Math.PI;)g+=Math.PI*2;this.head.rotation.y+=g*Math.min(1,t*5),!l&&u<.2&&(this.head.rotation.y=Math.sin(this.time*.8+this.scanPhase)*.6),this.group.position.set(this.position.x,0,this.position.z),this.group.rotation.y=this.yaw,this.eye.material=l?this.eyeAlertMat:this.eyeMat,s||(this.speed*=.9)}faceToward(t,e,n,s=6){let a=Math.atan2(t-this.position.x,e-this.position.z)-this.yaw;for(;a>Math.PI;)a-=Math.PI*2;for(;a<-Math.PI;)a+=Math.PI*2;this.yaw+=a*Math.min(1,n*s)}patrolStep(t,e){if(this.waitTimer>0){this.waitTimer-=t,this.speed*=.85,this.yaw+=t*.6*Math.sin(this.time*1.4+this.scanPhase),this.waitTimer<=0&&(this.patrolIndex=(this.patrolIndex+1)%this.patrol.length,this.target.set(this.patrol[this.patrolIndex].x,0,this.patrol[this.patrolIndex].z));return}this.moveToward(this.target.x,this.target.z,1.35,t,e)<.55&&(this.waitTimer=1.1+Math.random()*1.4,this.detection=Math.max(0,this.detection-.15))}returnToPatrol(){this.setState("return"),this.detection*=.4,this.returnIndex=this.patrolIndex,this.target.set(this.patrol[this.returnIndex].x,0,this.patrol[this.returnIndex].z),this.waitTimer=0}startChase(){this.state!=="chase"&&(this.detection=1,this.setState("chase"),this.attackTimer=.5,this.target.copy(this.lastSeen))}get isAlerted(){return this.state==="chase"||this.state==="search"||this.state==="investigate"||this.state==="suspicious"}}const N0={"doc-lab":{name:"Voss Field Log",type:"RESEARCH DOCUMENT",rarity:"rare",rarityLabel:"RARE",research:!0,credits:160,color:7137535,shape:"document",desc:"Dr. Voss’s final shift log. Proof the outpost received a reply."},"doc-storage":{name:"Signal Analysis",type:"RESEARCH DOCUMENT",rarity:"rare",rarityLabel:"RARE",research:!0,credits:180,color:7137535,shape:"document",desc:"Encrypted array telemetry. Required for research validation."},"module-research":{name:"Quantum Core",type:"RARE TECHNOLOGY",rarity:"legendary",rarityLabel:"LEGENDARY",research:!0,credits:450,color:16752973,shape:"module",desc:"Project ECHO’s containment core. A priority recovery asset."},"component-lab":{name:"Neural Processor",type:"ELECTRONIC COMPONENT",rarity:"uncommon",rarityLabel:"UNCOMMON",research:!1,credits:90,color:8253624,shape:"component",desc:"Prototype processing lattice pulled from the lab server stack."},"component-storage":{name:"Optic Sensor Array",type:"ELECTRONIC COMPONENT",rarity:"uncommon",rarityLabel:"UNCOMMON",research:!1,credits:100,color:8253624,shape:"component",desc:"Wide-spectrum optical array. Valuable to survey teams."},"cell-maint":{name:"Fusion Energy Cell",type:"ENERGY CELL",rarity:"uncommon",rarityLabel:"UNCOMMON",research:!1,credits:80,color:8253624,shape:"cell",battery:45,desc:"Compact fusion cell. Restores suit lamp battery on pickup."},"cell-extract":{name:"Beacon Power Cell",type:"ENERGY CELL",rarity:"common",rarityLabel:"COMMON",research:!1,credits:60,color:10466232,shape:"cell",battery:30,desc:"Spare extraction beacon cell. Still holding a charge."}},ra={common:"r-common",uncommon:"r-uncommon",rare:"r-rare",legendary:"r-legendary"},fi={metal:new Ee({color:3029568,roughness:.42,metalness:.8}),dark:new Ee({color:1054491,roughness:.6,metalness:.5}),board:new Ee({color:1192742,roughness:.7,metalness:.25}),paper:new Ee({color:13096662,roughness:.9,metalness:.05})};function kl(i){const t=new oe,e=new Y(new dt(.42,.055,.3),fi.dark);t.add(e);const n=new Y(new dt(.36,.02,.25),fi.paper);n.position.y=.035,t.add(n);const s=new Y(new dt(.06,.06,.31),new Bt({color:i.color}));s.position.x=.11,t.add(s);const r=new Y(new dt(.3,.012,.02),new Bt({color:16752973}));return r.position.set(-.02,.03,.135),t.add(r),t}function F0(i){const t=new oe,e=new Y(new dt(.4,.05,.3),fi.board);t.add(e);for(let s=0;s<3;s++){const r=new Y(new dt(.1,.06,.08),fi.dark);r.position.set(-.11+s*.12,.04,.05),t.add(r)}const n=new Bt({color:i.color});for(let s=0;s<4;s++){const r=new Y(new dt(.28,.008,.01),n);r.position.set(0,.03,-.1+s*.05),t.add(r)}for(const s of[-1,1]){const r=new Y(new dt(.03,.02,.02),new Bt({color:16752973}));r.position.set(s*.19,.02,.12),t.add(r)}return t}function O0(i){const t=new oe,e=new Y(new ue(.12,.12,.34,10),fi.metal);t.add(e);const n=new Y(new ue(.075,.075,.3,8),new Bt({color:i.color,transparent:!0,opacity:.95}));t.add(n);for(const s of[-1,1]){const r=new Y(new ue(.14,.1,.06,10),fi.dark);r.position.y=s*.19,t.add(r);const a=new Y(new De(.105,.014,4,12),new Bt({color:i.color}));a.rotation.x=Math.PI/2,a.position.y=s*.155,t.add(a)}return t}function B0(i){const t=new oe,e=new Y(new De(.2,.025,5,16),fi.metal);e.rotation.x=Math.PI/2,t.add(e);const n=new Y(new De(.26,.012,4,18),new Bt({color:i.color}));n.rotation.x=Math.PI/2.6,t.add(n);const s=new Y(new pr(.13,0),new Bt({color:i.color,transparent:!0,opacity:.95}));t.add(s);const r=new Y(new pr(.19,0),new Bt({color:14286847,wireframe:!0,transparent:!0,opacity:.45}));return t.add(r),t.userData.core=s,t.userData.inner=r,t.userData.ring2=n,t}class k0{constructor(t,e){this.scene=t,this.world=e,this.items=new Map,this.dropCounter=0,this.glow=hi();let n=0;for(const[s,r]of Object.entries(e.lootAnchors))this.spawn(s,r,n++,!1)}spawn(t,e,n=0,s=!1){const r=N0[t];if(!r)return null;const a=new oe;a.position.set(e.x,e.y,e.z),a.rotation.y=Math.random()*3;let o;switch(r.shape){case"document":o=kl(r);break;case"component":o=F0(r);break;case"cell":o=O0(r);break;case"module":o=B0(r);break;default:o=kl(r)}a.add(o);const c=Ie(this.glow,r.color,r.rarity==="legendary"?1.6:1.1,.28);c.position.y=.08,a.add(c),this.scene.add(a);const l=`loot-${n}-${this.dropCounter++}`,h={uid:l,metaId:t,meta:r,group:a,model:o,sprite:c,anchor:{...e},baseY:e.y,dropped:s,available:!0,collecting:0,phase:Math.random()*6.28,spin:Math.random()*.6+.25,interactable:null},u={kind:"loot",id:l,x:e.x,y:e.y,z:e.z,radius:1.9,label:`Collect ${r.name}`,active:!0,rarity:r.rarity};return h.interactable=u,this.world.interactables.push(u),this.items.set(l,h),h}spawnDropped(t,e,n){return this.spawn(t,{x:e,y:.35,z:n},900+this.items.size,!0)}pickup(t){const e=this.items.get(t);return!e||!e.available?null:(e.available=!1,e.collecting=1e-4,e.interactable.active=!1,e)}update(t,e){for(const[n,s]of this.items){if(!s.group.parent)continue;if(s.collecting>0){s.collecting+=t*4;const a=Math.min(1,s.collecting);s.group.scale.setScalar(Math.max(.001,1-a)),s.group.position.y=s.baseY+a*.55,s.sprite.material.opacity=(1-a)*.3,a>=1&&(this.scene.remove(s.group),this.disposeItem(s),this.items.delete(n));continue}const r=Math.sin(e*1.9+s.phase)*.045;if(s.group.position.y=s.baseY+r,s.model.rotation.y+=t*s.spin,s.meta.shape==="module"){const a=s.model.userData.core,o=s.model.userData.inner,c=s.model.userData.ring2;a&&(a.rotation.y-=t*1.6),a&&(a.rotation.x+=t*.7),o&&(o.rotation.x-=t*.8),c&&(c.rotation.z+=t*.9)}s.sprite.material.opacity=.24+Math.sin(e*2.4+s.phase)*.07}}disposeItem(t){t.group.traverse(n=>{n.isMesh&&n.geometry&&n.geometry.dispose()});const e=this.world.interactables.indexOf(t.interactable);e>=0&&this.world.interactables.splice(e,1)}availableResearchCount(){let t=0;for(const e of this.items.values())e.available&&e.meta.research&&t++;return t}nearestResearch(t,e){let n=null,s=1/0;for(const r of this.items.values()){if(!r.available||!r.meta.research)continue;const a=(r.anchor.x-t)**2+(r.anchor.z-e)**2;a<s&&(s=a,n=r)}return n}}const zl={document:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M5 2.5h9l5 5v14H5z"/><path d="M14 2.5v5h5M8 12h8M8 15.5h8M8 8.5h3"/><circle cx="16.5" cy="18" r="2.2"/></svg>',component:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><rect x="6" y="6" width="12" height="12" rx="1"/><rect x="9.5" y="9.5" width="5" height="5"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></svg>',cell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="7" y="4" width="10" height="17" rx="2"/><path d="M10 2h4M9.5 8h5M9.5 17h5"/><path d="M12 10l-1.5 3h3L12 16" stroke-width="1.2"/></svg>',module:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M12 2l7 5v10l-7 5-7-5V7z"/><path d="M12 7l3.5 2.5v5L12 17l-3.5-2.5v-5z"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/></svg>'};function Hl(i,t){return`<span style="color:${"#"+t.toString(16).padStart(6,"0")};display:block;width:100%;height:100%">${zl[i]||zl.component}</span>`}function Gl(i){const t=Math.max(0,Math.floor(i)),e=Math.floor(t/60);return`${String(e).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`}function z0(i){const t=Math.max(0,Math.floor(i)),e=Math.floor(t/3600);return`${String(e).padStart(2,"0")}:${String(Math.floor(t%3600/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`}class H0{constructor(){this.callbacks={},this.mobile=!1,this.toastCount=0,this.lastInventorySig="",this.lastBattery=-1,this.screens=["title","pause","inventory","log","dead","complete"],this.el={};const t=["hud","objective-text","objective-sub","objective-dist","objective-fill","health-num","health-bar","energy-num","energy-bar","battery-num","battery-bar","threat-dot","threat-text","signal-state","quick-slots","inv-count","prompt-key","prompt-text","interact-prompt","extract-panel","extract-fill","extract-time","hidden-indicator","toast-stack","damage-vignette","objective-marker","marker-label","marker-dist","screen-title","screen-pause","screen-inventory","screen-log","screen-dead","screen-complete","inventory-grid","inv-research","inv-credits","inv-slots","clearance-line","log-source","log-title","log-body","complete-time","complete-research","complete-credits","complete-list","loading","load-fill","load-status","btn-start","btn-title-audio","btn-title-quality","btn-resume","btn-pause-audio","btn-restart","btn-close-inventory","btn-close-log","btn-retry","btn-replay","btn-flashlight","btn-inventory","btn-pause","joystick","joystick-stick","look-hint","btn-touch-sprint","btn-touch-interact","btn-touch-flashlight","btn-touch-inventory","title-clock","error-panel","error-text"];for(const e of t)this.el[e]=document.getElementById(e);this.qualityButtons=[...document.querySelectorAll("[data-quality]")],this.mobile=window.matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0,this.mobile&&document.body.classList.add("is-mobile"),this.el.hud.classList.add("hud-off"),this.buildQuickSlots(),this.bind()}on(t,e){this.callbacks[t]=e}emit(t,...e){const n=this.callbacks[t];n&&n(...e)}bind(){const t=(s,r)=>{s&&s.addEventListener("click",a=>{a.preventDefault(),this.emit("uiSound"),this.emit(r)})};t(this.el["btn-start"],"start"),t(this.el["btn-title-audio"],"audio"),t(this.el["btn-title-quality"],"qualityCycle"),t(this.el["btn-resume"],"resume"),t(this.el["btn-pause-audio"],"audio"),t(this.el["btn-restart"],"restart"),t(this.el["btn-close-inventory"],"closeInventory"),t(this.el["btn-close-log"],"closeLog"),t(this.el["btn-retry"],"restart"),t(this.el["btn-replay"],"restart"),t(this.el["btn-flashlight"],"flashlight"),t(this.el["btn-inventory"],"inventory"),t(this.el["btn-pause"],"pause"),t(this.el["btn-touch-inventory"],"inventory"),t(this.el["btn-touch-flashlight"],"flashlight"),t(this.el["btn-touch-interact"],"interact"),t(this.el["btn-touch-interact"],"uiSound");for(const s of this.qualityButtons)s.addEventListener("click",r=>{r.preventDefault(),this.emit("quality",s.dataset.quality)});const e=this.el["btn-touch-sprint"],n=s=>{e.classList.toggle("active",s),this.emit("sprintHold",s)};e.addEventListener("pointerdown",s=>{s.preventDefault(),e.setPointerCapture(s.pointerId),n(!0)}),e.addEventListener("pointerup",s=>{s.preventDefault(),n(!1)}),e.addEventListener("pointercancel",()=>n(!1)),e.addEventListener("pointerleave",()=>n(!1)),this.el["inventory-grid"].addEventListener("click",s=>{const r=s.target.closest("[data-drop]");r&&(s.preventDefault(),this.emit("uiSound"),this.emit("drop",r.dataset.drop))}),this.el["quick-slots"].addEventListener("click",()=>this.emit("inventory"))}buildQuickSlots(){const t=this.el["quick-slots"];t.innerHTML="";for(let e=0;e<6;e++){const n=document.createElement("div");n.className="quick-slot empty",n.dataset.slot=String(e),t.appendChild(n)}}setMobileButtonsVisible(t){t?document.body.classList.add("is-mobile"):document.body.classList.remove("is-mobile")}showScreen(t){for(const e of this.screens){const n=this.el[`screen-${e}`];n&&n.classList.toggle("hidden",e!==t)}t&&this.el.hud.classList.add("hud-off")}hideScreens(){for(const t of this.screens)this.el[`screen-${t}`].classList.add("hidden");this.el.hud.classList.remove("hud-off")}showTitle(){this.showScreen("title"),this.el["screen-title"].classList.remove("hidden")}showPause(){this.showScreen("pause")}showInventory(){this.showScreen("inventory")}showLog(){this.showScreen("log")}showDead(){this.showScreen("dead")}showComplete(){this.showScreen("complete")}setLoading(t,e){this.el["load-fill"].style.width=`${Math.round(t*100)}%`,e&&(this.el["load-status"].textContent=e)}hideLoading(){this.el.loading.classList.add("done"),setTimeout(()=>this.el.loading.classList.add("hidden"),550)}setError(t){this.el.loading.classList.add("hidden"),this.el["error-panel"].classList.remove("hidden"),this.el["error-text"].textContent=t}setTitleClock(t){this.el["title-clock"].textContent=`T+ ${z0(t)}`}setVitals(t,e,n){const s=Math.max(0,Math.min(100,t)),r=Math.max(0,Math.min(100,e)),a=Math.max(0,Math.min(100,n));this.el["health-num"].textContent=Math.round(s),this.el["energy-num"].textContent=Math.round(r),this.el["battery-num"].textContent=Math.round(a),this.el["health-bar"].style.transform=`scaleX(${s/100})`,this.el["energy-bar"].style.transform=`scaleX(${r/100})`,this.el["battery-bar"].style.transform=`scaleX(${a/100})`,this.el["btn-flashlight"].classList.toggle("active",this.flashlightOn),this.lastBattery>=0&&a<this.lastBattery-.2?this.el["battery-num"].style.color="#ffa14d":a>99&&(this.el["battery-num"].style.color=""),this.lastBattery=a}setFlashlight(t){this.flashlightOn=t,this.el["btn-flashlight"].classList.toggle("active",t)}setObjective(t,e,n,s){this.el["objective-text"].textContent=t,this.el["objective-sub"].textContent=e,this.el["objective-dist"].textContent=n===null?"-- M":`${Math.round(n)} M`,s!==null&&(this.el["objective-fill"].style.width=`${Math.max(0,Math.min(1,s))*100}%`)}setThreat(t,e){const n=this.el["threat-dot"];n.className="threat-dot"+(t>=2?" alert":t>=1?" warn":""),this.el["threat-text"].textContent=e;const s=this.el["signal-state"];s.textContent=t>=2?"HOSTILE":t>=1?"CONTACT":"LINK OK",s.className=t>=2?"signal-bad":t>=1?"signal-warn":"signal-ok"}setPrompt(t,e="E",n=!0){n&&t?(this.el["prompt-text"].textContent=t,this.el["prompt-key"].textContent=e,this.el["interact-prompt"].classList.add("show"),this.el["btn-touch-interact"].classList.add("hot")):(this.el["interact-prompt"].classList.remove("show"),this.el["btn-touch-interact"].classList.remove("hot"))}setHidden(t){this.el["hidden-indicator"].classList.toggle("show",t)}setMarker(t,e,n,s,r="OBJECTIVE"){const a=this.el["objective-marker"];a.classList.toggle("show",t),t&&(a.style.left=`${e}px`,a.style.top=`${n}px`,this.el["marker-dist"].textContent=s===null?"":`${Math.round(s)}M`,this.el["marker-label"].textContent=r)}setExtraction(t,e=0,n=0){this.el["extract-panel"].classList.toggle("active",t),t&&(this.el["extract-fill"].style.width=`${Math.max(0,Math.min(1,e))*100}%`,this.el["extract-time"].textContent=Gl(Math.ceil(n)))}flashDamage(){const t=this.el["damage-vignette"];t.classList.add("hit"),clearTimeout(this.damageTimer),this.damageTimer=setTimeout(()=>t.classList.remove("hit"),140)}toast(t,e="",n="",s=3e3){const r=this.el["toast-stack"];for(;r.children.length>=4;)r.removeChild(r.firstChild);const a=document.createElement("div");a.className=`toast ${n?ra[n]||`r-${n}`:""}`,a.innerHTML=`<b>${t}</b>${e?`<span class="t-sub">${e}</span>`:""}`,r.appendChild(a),setTimeout(()=>{a.classList.add("out"),setTimeout(()=>a.remove(),340)},s)}renderInventory(t,e,n,s,r=!1){const a=t.map(l=>l.uid).join(",")+`|${e}|${n}|${s}|${r}`;if(a===this.lastInventorySig)return;this.lastInventorySig=a,this.el["inv-count"].textContent=`${t.length}/6`,this.el["inv-research"].textContent=String(e),this.el["inv-credits"].textContent=String(n),this.el["inv-slots"].textContent=`${t.length}/6`,this.el["clearance-line"].innerHTML=`SECURITY CLEARANCE: <b>${s?"LEVEL 4 — RESEARCH":"NONE"}</b>`;const o=this.el["quick-slots"].children;for(let l=0;l<6;l++){const h=o[l],u=t[l];if(h.className="quick-slot",u){const f=u.meta;h.classList.add("filled",ra[f.rarity]||"r-common"),f.research&&h.classList.add("research"),h.title=`${f.name} — ${f.rarityLabel}`,h.innerHTML=`<span class="slot-glyph">${Hl(f.shape,f.color)}</span><i class="slot-rarity"></i>`}else h.classList.add("empty"),h.title="Empty slot",h.innerHTML=""}const c=this.el["inventory-grid"];c.innerHTML="";for(let l=0;l<6;l++){const h=t[l];if(!h){const d=document.createElement("div");d.className="inv-card empty",d.innerHTML=`SLOT ${String(l+1).padStart(2,"0")}<br />EMPTY`,c.appendChild(d);continue}const u=h.meta,f=document.createElement("div");f.className=`inv-card ${ra[u.rarity]||"r-common"}`,f.innerHTML=`
        <div class="inv-top">
          <span class="inv-icon">${Hl(u.shape,u.color)}</span>
          <span class="inv-rarity" style="color:#${u.color.toString(16).padStart(6,"0")}">${u.rarityLabel}</span>
        </div>
        <div class="inv-name">${u.name}</div>
        <div class="inv-desc">${u.desc}</div>
        <div class="inv-bottom">
          <span class="inv-credits">${u.credits} CR</span>
          <span class="inv-tag">${u.research?"RESEARCH":u.type}</span>
          <button class="inv-drop" data-drop="${h.uid}">DROP</button>
        </div>`,c.appendChild(f)}}showLog(t,e,n){this.el["log-source"].textContent=t||"TERMINAL // UNKNOWN",this.el["log-title"].innerHTML=e||"ARCHIVE <b>ENTRY</b>",this.el["log-body"].innerHTML=(n||"").replace(/<warn>/g,'<span class="warn">').replace(/<\/warn>/g,"</span>"),this.showScreen("log")}setQualityLabel(t){this.el["btn-title-quality"].textContent=`GRAPHICS: ${t.toUpperCase()}`;for(const e of this.qualityButtons)e.classList.toggle("active",e.dataset.quality===t)}setAudioLabel(t){this.el["btn-title-audio"].textContent=`AUDIO: ${t?"ON":"OFF"}`;const e=this.el["btn-pause-audio"];e.innerHTML=`AUDIO <b>${t?"ON":"OFF"}</b>`}showComplete({time:t,research:e,credits:n,items:s}){this.el["complete-time"].textContent=Gl(t),this.el["complete-research"].textContent=`${e} / 3`,this.el["complete-credits"].textContent=String(n);const r=this.el["complete-list"];r.innerHTML="";for(const a of s){const o=document.createElement("div");o.className="complete-row",o.innerHTML=`<span>${a.meta.name}${a.meta.research?" [RESEARCH]":""}</span><span>+${a.meta.credits} CR</span>`,r.appendChild(o)}this.showScreen("complete")}setMobileLookHintHidden(t){t&&document.body.classList.add("has-looked")}setPromptKeyForMobile(){this.el["prompt-key"].textContent=this.mobile?"USE":"E"}}class G0{constructor(){this.ctx=null,this.master=null,this.enabled=!0;try{localStorage.getItem("ls09_audio")==="off"&&(this.enabled=!1)}catch{}this.ambientGain=null,this.humGain=null,this.ready=!1,this.beepTimer=0,this.ambientStarted=!1,this.noiseBuffer=null,this.failed=!1}ensure(){if(this.ctx||this.failed)return this.ctx;try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return this.failed=!0,null;const e=new t;this.ctx=e,this.master=e.createGain(),this.master.gain.value=this.enabled?.5:0,this.master.connect(e.destination);const n=e.sampleRate*2,s=e.createBuffer(1,n,e.sampleRate),r=s.getChannelData(0);for(let a=0;a<n;a++)r[a]=Math.random()*2-1;this.noiseBuffer=s,this.startAmbient(),this.ready=!0}catch{this.failed=!0,this.ctx=null}return this.ctx}resume(){this.ctx||this.ensure(),this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}setEnabled(t){this.enabled=t;try{localStorage.setItem("ls09_audio",t?"on":"off")}catch{}if(!this.ctx){t&&this.ensure();return}const e=this.ctx.currentTime;this.master.gain.cancelScheduledValues(e),this.master.gain.setTargetAtTime(t?.5:0,e,.08),t&&this.resume()}toggle(){return this.setEnabled(!this.enabled),this.enabled}startAmbient(){const t=this.ctx;if(!t||this.ambientStarted)return;this.ambientStarted=!0;const e=t.currentTime;this.ambientGain=t.createGain(),this.ambientGain.gain.value=0,this.ambientGain.connect(this.master),this.ambientGain.gain.setTargetAtTime(.16,e,1.5);const n=t.createOscillator();n.type="sine",n.frequency.value=54;const s=t.createOscillator();s.type="triangle",s.frequency.value=81.5;const r=t.createGain();r.gain.value=.22;const a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=160,n.connect(a),s.connect(a),a.connect(r),r.connect(this.ambientGain),n.start(),s.start();const o=t.createBufferSource();o.buffer=this.noiseBuffer,o.loop=!0;const c=t.createBiquadFilter();c.type="bandpass",c.frequency.value=320,c.Q.value=.6;const l=t.createGain();l.gain.value=.07,o.connect(c),c.connect(l),l.connect(this.ambientGain),o.start();const h=t.createOscillator();h.type="sine",h.frequency.value=.14;const u=t.createGain();u.gain.value=.035,h.connect(u),u.connect(this.ambientGain),h.start(),this.humGain=t.createGain(),this.humGain.gain.value=0,this.humGain.connect(this.master);const f=t.createOscillator();f.type="sawtooth",f.frequency.value=92;const d=t.createBiquadFilter();d.type="lowpass",d.frequency.value=240;const g=t.createGain();g.gain.value=.11,f.connect(d),d.connect(g),g.connect(this.humGain),f.start();const _=t.createOscillator();_.type="triangle",_.frequency.value=176;const m=t.createGain();m.gain.value=.05,_.connect(m),m.connect(this.humGain),_.start()}setPaused(t){if(!this.ctx)return;const e=this.ctx.currentTime;this.ambientGain&&this.ambientGain.gain.setTargetAtTime(t?.035:.16,e,.2)}update(t,e,n,s){if(!this.ctx||!this.ready||!this.enabled)return;const a=this.ctx.currentTime;if(this.humGain){const c=Math.max(0,1-e/16)*.14+(n>.2?.05:0);this.humGain.gain.setTargetAtTime(c,a,.25)}this.beepTimer-=t,n>.3&&this.beepTimer<=0&&(this.beepTimer=n>.9?.62:1.4,this.robotBeep(n>.9?1:.5,e)),s&&this.beepTimer<=0&&(this.beepTimer=.9,this.robotBeep(.4,10))}tone(t,e,n="sine",s=.12,r=null,a=0){if(!(!this.ctx||!this.enabled))try{const o=this.ctx,c=o.currentTime+a,l=o.createOscillator();l.type=n,l.frequency.setValueAtTime(t,c),r&&l.frequency.exponentialRampToValueAtTime(Math.max(20,r),c+e);const h=o.createGain();h.gain.setValueAtTime(1e-4,c),h.gain.exponentialRampToValueAtTime(s,c+.012),h.gain.exponentialRampToValueAtTime(1e-4,c+e),l.connect(h),h.connect(this.master),l.start(c),l.stop(c+e+.02)}catch{}}noise(t,e=.1,n=800,s=1,r=0){if(!(!this.ctx||!this.enabled))try{const a=this.ctx,o=a.currentTime+r,c=a.createBufferSource();c.buffer=this.noiseBuffer,c.playbackRate.value=.8+Math.random()*.4;const l=a.createBiquadFilter();l.type="bandpass",l.frequency.value=n,l.Q.value=s;const h=a.createGain();h.gain.setValueAtTime(1e-4,o),h.gain.exponentialRampToValueAtTime(e,o+.008),h.gain.exponentialRampToValueAtTime(1e-4,o+t),c.connect(l),l.connect(h),h.connect(this.master),c.start(o),c.stop(o+t+.03)}catch{}}ui(t=!0){this.tone(t?660:440,.045,"square",.025),this.tone(t?990:660,.03,"sine",.02,null,.03)}footstep(t=!1){this.noise(t?.1:.13,t?.06:.04,t?260:180,.8),this.tone(t?72:60,.07,"sine",.025)}pickup(t="common"){const e=t==="legendary"?523.25:t==="rare"?440:392;this.tone(e,.12,"sine",.06),this.tone(e*1.5,.16,"sine",.045,null,.07),this.tone(e*2,.22,"triangle",.03,null,.14),t==="legendary"&&this.tone(e*2.5,.4,"sine",.03,null,.2)}container(){this.noise(.18,.09,420,.7),this.tone(180,.12,"sawtooth",.03,120)}terminal(){this.tone(520,.06,"square",.025),this.tone(880,.08,"sine",.03,null,.06)}unlock(){this.tone(392,.1,"sine",.05),this.tone(587,.14,"sine",.05,null,.09),this.tone(784,.28,"triangle",.04,null,.18),this.noise(.3,.06,300,.5,.1)}hide(){this.noise(.2,.06,220,.6),this.tone(140,.15,"sine",.03,100)}damage(){this.noise(.22,.15,120,.8),this.tone(85,.3,"sawtooth",.08,42)}robotBeep(t=.5,e=10){const n=Math.max(.005,.045*(1-Math.min(1,e/16)));this.tone(520+t*220,.08,"square",n*t),t>.8&&this.tone(760,.12,"sawtooth",n,400,.07)}alert(){this.tone(880,.1,"square",.06),this.tone(660,.1,"square",.06,null,.12),this.tone(988,.3,"sawtooth",.04,440,.24)}extractionStart(){this.tone(220,.4,"sine",.06,330),this.tone(330,.6,"triangle",.04,440,.3),this.tone(660,.5,"sine",.03,null,.6)}tick(t=!1){this.tone(t?880:520,.06,"square",t?.04:.025)}complete(){const t=[523.25,659.25,783.99,1046.5];t.forEach((e,n)=>this.tone(e,.5,"sine",.06,null,n*.14)),t.forEach((e,n)=>this.tone(e/2,.7,"triangle",.04,null,n*.14))}death(){this.tone(220,.9,"sawtooth",.08,55),this.noise(1.2,.12,100,.5)}footstepSilent(){}}const Q=new H0,Vt=new G0;function V0(i){try{return localStorage.getItem(i)}catch{return null}}function W0(i,t){try{localStorage.setItem(i,t)}catch{}}function X0(){const i=V0("ls09_quality");return i==="low"||i==="medium"||i==="high"?i:window.matchMedia("(pointer: coarse)").matches?(navigator.deviceMemory||4)<=4?"low":"medium":"high"}let mn=X0();const $i=Q.mobile,an=document.getElementById("game");let Xe;try{Xe=new S0({canvas:an,antialias:mn!=="low",powerPreference:"high-performance",alpha:!1,stencil:!1})}catch(i){throw Q.setError("WebGL could not be initialized on this device. Try enabling hardware acceleration or a different browser."),i}Xe.outputColorSpace=ke;Xe.toneMapping=ql;Xe.toneMappingExposure=1.32;Xe.shadowMap.enabled=mn!=="low";Xe.shadowMap.type=to;Xe.setPixelRatio(mn==="high"?Math.min(window.devicePixelRatio||1,2):mn==="medium"?Math.min(window.devicePixelRatio||1,1.5):1);Xe.setSize(window.innerWidth,window.innerHeight);const Kn=new Eu;Kn.background=new qt(198669);Kn.fog=new co(397850,.026);const Je=new ze(62,window.innerWidth/window.innerHeight,.08,130);Je.rotation.order="YXZ";Q.setLoading(.18,"INITIALIZING RECOVERY SUIT");const Kt=new D0(Kn,mn);Q.setLoading(.52,"OUTPOST GEOMETRY ONLINE");const mt=new I0(Kn);mt.teleport(0,4.6,Math.PI);const de=new U0(Je);de.yaw=0;const _i=new k0(Kn,Kt),En=[new Bl(Kn,{name:"K-7",start:{x:-6.5,z:-5},patrol:Nl.lab,visionRange:13,fov:76}),new Bl(Kn,{name:"K-9",start:{x:0,z:-13.5},patrol:Nl.storage,visionRange:12.5,fov:74})];Q.setLoading(.82,"SECURITY UNITS DEPLOYED");Q.setAudioLabel(Vt.enabled);Q.setQualityLabel(mn);Q.setPromptKeyForMobile();let Pt="menu",Ki=0,fs=0,Zi=performance.now()/1e3,gn=[],Qi=!1,_o=0,Nn=null,Ka=null,Za=!1,Vl=-10,Bi=null;const Wl=new Set,ie={active:!1,elapsed:0,duration:12,lastTick:-1,alerted:!1},er={x:0,z:0,sprint:!1},Ze=new Set;let vo=!1,je={x:0,z:0,pointerId:null},rn={id:null,x:0,y:0},ts=!1,ja=0,Ja=0;const nr=new D,Xl=new D;function xo(i,t=!1){mn=i;const e=i==="high"?Math.min(window.devicePixelRatio||1,2):i==="medium"?Math.min(window.devicePixelRatio||1,1.5):1;Xe.setPixelRatio(e),Xe.setSize(window.innerWidth,window.innerHeight),Xe.shadowMap.enabled=i!=="low",Kt.setQuality(i),Kt.labFill&&(Kt.labFill.visible=i!=="low"),Kt.researchLight&&(Kt.researchLight.visible=i!=="low"),Q.setQualityLabel(i),W0("ls09_quality",i),t&&Q.toast("GRAPHICS PROFILE",`${i.toUpperCase()} — ${i==="low"?"battery saver":i==="medium"?"balanced":"full detail"}`,"rare")}xo(mn);for(const i of En)i.onAttack=(t,e)=>{if(Pt!=="playing"||mt.hidden)return;const n=mt.takeDamage(e);Q.flashDamage(),de.addShake(.15),Vt.damage(),n&&Lc()},i.onStateChange=(t,e)=>{if(Pt==="playing"&&e==="chase"){Vt.alert(),Ki-Vl>4&&(Vl=Ki,Q.toast("DETECTION // UNIT "+t.name,"Break line of sight or conceal yourself","warn"));for(const n of En){if(n===t)continue;n.position.distanceTo(t.position)<28&&n.alertTo(mt.position,!0)}}};function nn(){return gn.filter(i=>i.meta.research).length}function Y0(){return gn.reduce((i,t)=>i+t.meta.credits,0)}function Ac(){return Y0()+_o}function On(){Q.renderInventory(gn,nn(),Ac(),Qi,Pt==="inventory")}function q0(){let i=null,t=1/0;for(const e of Kt.interactables){if(e.active===!1||e.kind==="container"&&e.opened||e.kind==="door"&&Kt.researchDoor&&Kt.researchDoor.unlocked)continue;const n=e.x-mt.position.x,s=e.z-mt.position.z,r=n*n+s*s;r>e.radius*e.radius||r<t&&(t=r,i=e)}return i}function $0(i){return i?i.kind==="extraction"?nn()>=3?"Initiate extraction":`Extraction locked — ${nn()} / 3 research`:i.kind==="door"?Qi?"Unlock research wing":"Sealed — security keycard required":i.label:""}function Rc(){if(Pt!=="playing"||!mt.alive)return;if(mt.hidden){Q0();return}const i=Nn;if(!i)return;const t=nn();if(i.kind==="loot")Cc(i.id);else if(i.kind==="hide")J0(i);else if(i.kind==="terminal")j0(i);else if(i.kind==="container")Z0(i);else if(i.kind==="door"){if(Kt.researchDoor&&Kt.researchDoor.unlocked)return;Qi?(Kt.unlockResearchDoor(),Vt.unlock(),de.addShake(.05),Q.toast("CLEARANCE ACCEPTED","Research wing unlocked — Level 4 access","good",3600),Q.setPrompt("","E",!1),Nn=null):(Vt.ui(!1),Q.toast("ACCESS DENIED","Security keycard required. Search the storage bay.","warn",3600))}else if(i.kind==="extraction"){if(ie.active)return;t>=3?Pc():(Vt.ui(!1),Q.toast("EXTRACTION DENIED",`${t} / 3 research assets validated. Recover ${3-t} more.`,"warn",3600))}}function Cc(i){if(gn.length>=6){Vt.ui(!1),Q.toast("FIELD PACK FULL","Open the pack (TAB) and discard an item to free a slot.","warn",4e3);return}const t=_i.pickup(i);if(!t)return;const e=t.meta,n={uid:t.uid,metaId:t.metaId,meta:e};if(gn.push(n),e.battery){const s=mt.battery;mt.rechargeBattery(e.battery),mt.battery>s&&Q.toast("BATTERY RECHARGED",`+${Math.round(mt.battery-s)}% suit lamp capacity`,"good",3200)}Vt.pickup(e.rarity),Q.toast(`ACQUIRED // ${e.name.toUpperCase()}`,`${e.rarityLabel} • ${e.type} • +${e.credits} CR`,e.rarity,3600),On(),Q.setPrompt("","E",!1),Nn=null,nn()>=3&&!Za&&(Za=!0,setTimeout(()=>{Pt==="playing"&&(Q.toast("EXTRACTION READY","Research validated. Proceed to extraction pad 09.","good",4400),Vt.unlock())},700))}function K0(i){if(Pt!=="inventory")return;const t=gn.findIndex(o=>o.uid===i);if(t<0)return;const[e]=gn.splice(t,1),n=Math.sin(mt.physics.yaw),s=Math.cos(mt.physics.yaw),r=mt.position.x+n*.7,a=mt.position.z+s*.7;_i.spawnDropped(e.metaId,r,a),Vt.ui(!1),Q.toast("ITEM DISCARDED",`${e.meta.name} dropped at your position`,"",2600),On()}function Z0(i){if(i.opened)return;i.opened=!0,Kt.openContainer(i.id),Vt.container();const t=i.loot;t==="keycard"?(Qi=!0,Vt.unlock(),Q.toast("SECURITY KEYCARD","Level 4 research clearance acquired","good",4200)):t==="medkit"?(mt.heal(45),Q.toast("MEDKIT RECOVERED","+45 suit integrity","good",3200)):t==="battery"?(mt.rechargeBattery(100),Q.toast("BATTERY REPLACED","Suit lamp fully charged","good",3200)):t==="credits"&&(_o+=120,Q.toast("CREDITS RECOVERED","+120 CR","uncommon",3200)),On()}function j0(i){Pt="log",Ts(),Vt.setPaused(!0),Vt.terminal(),Q.setPrompt("","E",!1),Nn=null,Wl.has(i.id)||(Wl.add(i.id),_o+=25,Bi={title:"DATA RECOVERED",sub:"+25 CR // archive copy secured",rarity:"rare"}),Q.showLog(i.source,i.title,i.body),On()}function J0(i){mt.hidden||(Ka=i,mt.setHidden(!0,i.hideType),mt.teleport(i.hidePos.x,i.hidePos.z,i.hidePos.yaw+Math.PI),de.yaw=i.hidePos.yaw,de.pitch=.04,de.initialized=!1,Vt.hide(),Q.setHidden(!0),Q.setPrompt("","E",!1),Q.toast("CONCEALED","Enemy visual contact blocked","good",2200),Nn=null)}function Q0(){if(!mt.hidden||!Ka)return;const i=de.yaw,t=-Math.sin(i),e=-Math.cos(i);let n=mt.position.x+t*.95,s=mt.position.z+e*.95;Ol(Kt.colliders,n,s,.42)&&(n=mt.position.x+t*.35,s=mt.position.z+e*.35),Ol(Kt.colliders,n,s,.42)&&(n=mt.position.x,s=mt.position.z),mt.setHidden(!1),mt.teleport(n,s,i+Math.PI),de.yaw=i,de.pitch=.22,de.initialized=!1,Ka=null,Vt.hide(),Q.setHidden(!1),Q.toast("LEFT COVER","You are exposed again","",1800)}function Pc(){ie.active=!0,ie.elapsed=0,ie.lastTick=12,ie.alerted=!1,Za=!0,Kt.setExtractionActive(!0),Vt.extractionStart(),Q.toast("EXTRACTION INITIATED","Hold position on pad 09 for 12 seconds","good",4200),$i&&Q.setPrompt("","USE",!1),Nn=null}function tg(i){ie.active=!1,Kt.setExtractionActive(!1),Q.setExtraction(!1),Vt.ui(!1),Q.toast("EXTRACTION ABORTED",i,"warn",3600)}function eg(i){if(!ie.active)return;ie.elapsed+=i;const t=Math.min(1,ie.elapsed/ie.duration),e=Math.max(0,ie.duration-ie.elapsed);if(Math.hypot(mt.position.x,mt.position.z-22.1)>7.2){tg("You left the extraction zone.");return}if(t>=1){ie.active=!1,Kt.setExtractionActive(!1),Q.setExtraction(!1),Dc();return}Q.setExtraction(!0,t,e);const s=Math.ceil(e);if(s!==ie.lastTick&&(ie.lastTick=s,Vt.tick(s<=3)),ie.elapsed>3.2&&!ie.alerted){ie.alerted=!0;let r=null,a=1/0;for(const o of En){const c=Math.hypot(o.position.x,o.position.z-22.1);c<a&&(a=c,r=o)}r&&(r.alertTo({x:0,z:22.1},!0),Q.toast("SECURITY ALERT","A unit is moving toward the extraction pad","warn",3600))}}function Lc(){Pt!=="dead"&&(Pt="dead",Ts(),ie.active=!1,Kt.setExtractionActive(!1),Q.setExtraction(!1),Q.setPrompt("","E",!1),mt.alive=!1,mt.setFlashlight(!1),Vt.setPaused(!0),Vt.death(),Q.showDead())}function Dc(){Pt="complete",Ts(),Vt.setPaused(!0),Q.setPrompt("","E",!1),Q.setExtraction(!1);const i=Ac()+300;Q.showComplete({time:Ki,research:nn(),credits:i,items:gn.slice()}),Vt.complete()}function ng(){if(ie.active)return{text:"Hold position for extraction",sub:"EXTRACTION IN PROGRESS",label:"EXTRACTION",target:{x:0,y:1.4,z:22.1},progress:nn()/3};if(nn()>=3)return{text:"Reach the extraction pad",sub:"RESEARCH VALIDATED — PAD 09 // SOUTH",label:"EXTRACTION",target:{x:0,y:1.4,z:22.1},progress:1};const i=r=>gn.some(a=>a.metaId===r);let t=null,e="Recover remaining research assets",n=`${nn()} / 3 RESEARCH ITEMS`,s="RESEARCH";if(i("doc-lab"))if(Qi)if(i("doc-storage"))if(i("module-research")){const r=_i.nearestResearch(mt.position.x,mt.position.z);r?(e="Recover remaining research",n=`${nn()} / 3 RESEARCH ITEMS`,t={x:r.anchor.x,y:r.anchor.y,z:r.anchor.z}):(e="Return to the extraction pad",n=`${nn()} / 3 RESEARCH ITEMS`,t={x:0,y:1.4,z:22.1})}else{e="Recover Project ECHO’s quantum core",n=Kt.researchDoor&&Kt.researchDoor.unlocked?"RESEARCH WING // LEVEL 4 ACCESS":"RESEARCH WING // LOCKED",s="QUANTUM CORE";const r=Kt.lootAnchors["module-research"];t={x:r.x,y:r.y,z:r.z}}else{e="Recover the signal analysis",n="STORAGE 02 // ARCHIVE",s="RESEARCH LOG";const r=Kt.lootAnchors["doc-storage"];t={x:r.x,y:r.y,z:r.z}}else{e="Recover the security keycard",n="STORAGE 02 // CARGO CRATE",s="SECURITY CARD";const r=Kt.interactables.find(a=>a.kind==="container"&&a.id==="storage-keycard");t=r?{x:r.x,y:1,z:r.z}:{x:0,y:1,z:-23}}else{e="Recover Dr. Voss’s field log",n="LAB-01 // CENTRAL",s="RESEARCH LOG";const r=Kt.lootAnchors["doc-lab"];t={x:r.x,y:r.y,z:r.z}}return{text:e,sub:n,label:s,target:t,progress:nn()/3}}function ig(){const i=ng(),t=i.target?Math.hypot(i.target.x-mt.position.x,i.target.z-mt.position.z):null;if(Q.setObjective(i.text,i.sub,t,i.progress),!i.target){Q.setMarker(!1);return}const e=i.target;if(nr.set(e.x,e.y+.35,e.z),Xl.copy(nr).sub(Je.position),Je.getWorldDirection(nr),Xl.dot(nr)<=.08){Q.setMarker(!1);return}const n=new D(e.x,e.y+.35,e.z).project(Je);let s=(n.x*.5+.5)*window.innerWidth,r=(-n.y*.5+.5)*window.innerHeight;const a=$i?46:70,o=92,c=$i?210:100;s=Math.max(a,Math.min(window.innerWidth-a,s)),r=Math.max(o,Math.min(window.innerHeight-c,r)),Q.setMarker(!0,s,r,t,i.label)}function sg(){if(ie.active){Q.setPrompt("","E",!1),Nn=null;return}if(mt.hidden){Q.setPrompt("Leave concealment",$i?"USE":"E",!0),Nn=null;return}const i=q0();if(Nn=i,!i){Q.setPrompt("","E",!1);return}let t=$0(i);if(i.kind==="loot"){const e=_i.items.get(i.id);e&&(t=`Collect ${e.meta.name} — ${e.meta.rarityLabel}`)}Q.setPrompt(t,$i?"USE":"E",!0)}function rg(i){Q.setVitals(mt.health,mt.energy,mt.battery),Q.setFlashlight(mt.flashlightOn),Q.setHidden(mt.hidden),On();let t=0,e=!1,n=!1,s=1/0;for(const c of En)t=Math.max(t,c.detection),c.state==="chase"?e=!0:(c.state==="search"||c.state==="investigate"||c.state==="suspicious")&&(n=!0),s=Math.min(s,mt.position.distanceTo(c.position));const r=e?2:n||t>.06?1:0;let a="NO HOSTILES DETECTED";e?a="SECURITY UNIT IN PURSUIT":t>.06?a="MOVEMENT DETECTED // BREAK LINE OF SIGHT":n&&(a="UNIT SEARCHING // STAY CONCEALED"),Q.setThreat(r,a),Q.setExtraction(ie.active,ie.elapsed/ie.duration,Math.max(0,ie.duration-ie.elapsed)),ig(),sg();const o=e?1:Math.max(0,Math.min(1,t));Vt.update(i,s,o,ie.active)}function bs(){if(!($i||Pt!=="playing")&&document.pointerLockElement!==an)try{const i=an.requestPointerLock?.();i&&i.catch&&i.catch(()=>{})}catch{}}function Ts(){if(document.pointerLockElement===an)try{document.exitPointerLock()}catch{}ts=!1}window.addEventListener("keydown",i=>{if(i.code==="Tab"){if(i.preventDefault(),i.repeat)return;Pt==="playing"?Oc():Pt==="inventory"&&mr();return}if(i.code==="Escape"){Pt==="playing"?yo():Pt==="paused"?Fc():Pt==="inventory"?mr():Pt==="log"&&Bc();return}if(i.code==="KeyE"){Pt==="playing"&&!i.repeat&&Rc();return}if(i.code==="KeyF"){Pt==="playing"&&!i.repeat&&kc();return}if(i.code==="KeyM"){i.repeat||zc();return}Pt==="playing"&&Ze.add(i.code)});window.addEventListener("keyup",i=>{Ze.delete(i.code)});an.addEventListener("pointerdown",i=>{if(Pt==="playing")if(i.pointerType==="touch"){if(i.clientX<window.innerWidth*.36)return;rn.id=i.pointerId,rn.x=i.clientX,rn.y=i.clientY;try{an.setPointerCapture(i.pointerId)}catch{}Q.setMobileLookHintHidden(!0)}else i.button===0&&(document.pointerLockElement!==an&&bs(),ts=!0,ja=i.clientX,Ja=i.clientY)});an.addEventListener("pointermove",i=>{if(Pt==="playing"&&i.pointerType==="touch"&&rn.id===i.pointerId){const t=i.clientX-rn.x,e=i.clientY-rn.y;rn.x=i.clientX,rn.y=i.clientY,de.handleMouse(t*1.55,e*1.3)}});an.addEventListener("pointerup",i=>{rn.id===i.pointerId&&(rn.id=null),i.pointerType!=="touch"&&(ts=!1)});an.addEventListener("pointercancel",i=>{rn.id===i.pointerId&&(rn.id=null),ts=!1});window.addEventListener("pointermove",i=>{Pt!=="playing"||i.pointerType==="touch"||(document.pointerLockElement===an?de.handleMouse(i.movementX||0,i.movementY||0):ts&&(de.handleMouse(i.clientX-ja,i.clientY-Ja),ja=i.clientX,Ja=i.clientY))});window.addEventListener("pointerup",()=>{ts=!1});an.addEventListener("wheel",i=>{Pt==="playing"&&(i.preventDefault(),de.zoomBy(i.deltaY))},{passive:!1});const Fn=Q.el.joystick,Ic=Q.el["joystick-stick"];function Uc(i,t){const e=Fn.getBoundingClientRect(),n=e.left+e.width/2,s=e.top+e.height/2,r=e.width*.32;let a=i-n,o=t-s;const c=Math.hypot(a,o);c>r&&(a=a/c*r,o=o/c*r),je.x=a/r,je.z=-o/r,Ic.style.transform=`translate(${a}px, ${o}px)`,Fn.classList.add("active")}Fn.addEventListener("pointerdown",i=>{i.preventDefault(),Pt==="playing"&&(je.pointerId=i.pointerId,Fn.setPointerCapture(i.pointerId),Uc(i.clientX,i.clientY))});Fn.addEventListener("pointermove",i=>{je.pointerId===i.pointerId&&(i.preventDefault(),Uc(i.clientX,i.clientY))});function Mo(i){je.pointerId===i.pointerId&&(je.pointerId=null,je.x=0,je.z=0,Ic.style.transform="translate(0px, 0px)",Fn.classList.remove("active"))}Fn.addEventListener("pointerup",Mo);Fn.addEventListener("pointercancel",Mo);Fn.addEventListener("pointerleave",i=>{je.pointerId===i.pointerId&&Mo(i)});Q.on("start",()=>Nc());Q.on("pause",()=>{Pt==="playing"&&yo()});Q.on("resume",()=>Fc());Q.on("inventory",()=>{Pt==="playing"?Oc():Pt==="inventory"&&mr()});Q.on("closeInventory",()=>mr());Q.on("closeLog",()=>Bc());Q.on("interact",()=>Rc());Q.on("flashlight",()=>kc());Q.on("drop",i=>K0(i));Q.on("restart",()=>location.reload());Q.on("audio",()=>zc());Q.on("quality",i=>xo(i,!0));Q.on("qualityCycle",()=>{const i=["low","medium","high"],t=i[(i.indexOf(mn)+1)%i.length];xo(t,!1),Q.toast("GRAPHICS PROFILE",t.toUpperCase(),"rare",1800)});Q.on("sprintHold",i=>{vo=i});Q.on("uiSound",()=>Vt.ui(!0));function Nc(){if(Pt==="menu"){Pt="playing",Ki=0,Zi=performance.now()/1e3,Q.hideScreens(),Vt.ensure(),Vt.resume(),Vt.setPaused(!1),Vt.ui(!0),de.yaw=0,de.pitch=.26,de.zoom=4.4,de.initialized=!1;for(const i of En)i.grace=5;bs(),On(),Q.toast("MISSION ACTIVE","Recover three research assets. Reach extraction pad 09.","rare",5e3)}}function yo(){Pt==="playing"&&(Pt="paused",Ze.clear(),vo=!1,Ts(),Vt.setPaused(!0),Q.setPrompt("","E",!1),Q.showPause())}function Fc(){Pt==="paused"&&(Pt="playing",Zi=performance.now()/1e3,Q.hideScreens(),Vt.setPaused(!1),bs())}function Oc(){Pt==="playing"&&(Pt="inventory",Ts(),Vt.setPaused(!0),Q.setPrompt("","E",!1),On(),Q.showInventory())}function mr(){Pt==="inventory"&&(Pt="playing",Zi=performance.now()/1e3,Q.hideScreens(),Vt.setPaused(!1),On(),bs())}function Bc(){Pt==="log"&&(Pt="playing",Zi=performance.now()/1e3,Q.hideScreens(),Vt.setPaused(!1),bs(),Bi&&(Q.toast(Bi.title,Bi.sub,Bi.rarity,3200),Bi=null))}function kc(){if(Pt!=="playing")return;if(mt.battery<=0){Vt.ui(!1),Q.toast("BATTERY DEPLETED","Find a power cell or battery supply","warn",2800);return}mt.setFlashlight(!mt.flashlightOn)?Vt.ui(!0):Vt.ui(!1),Q.setFlashlight(mt.flashlightOn)}function zc(){const i=Vt.toggle();Q.setAudioLabel(i),i&&Vt.ui(!0)}document.addEventListener("visibilitychange",()=>{document.hidden&&Pt==="playing"&&yo()});window.addEventListener("resize",()=>{Je.aspect=window.innerWidth/window.innerHeight,Je.updateProjectionMatrix(),Xe.setSize(window.innerWidth,window.innerHeight);const i=mn==="high"?Math.min(window.devicePixelRatio||1,2):mn==="medium"?Math.min(window.devicePixelRatio||1,1.5):1;Xe.setPixelRatio(i)});function ag(){let i=0,t=0;(Ze.has("KeyA")||Ze.has("ArrowLeft"))&&(i-=1),(Ze.has("KeyD")||Ze.has("ArrowRight"))&&(i+=1),(Ze.has("KeyW")||Ze.has("ArrowUp"))&&(t+=1),(Ze.has("KeyS")||Ze.has("ArrowDown"))&&(t-=1),Math.hypot(je.x,je.z)>.12&&(i=je.x,t=je.z);const e=Math.hypot(i,t);return e>1&&(i/=e,t/=e),er.x=i,er.z=t,er.sprint=Ze.has("ShiftLeft")||Ze.has("ShiftRight")||vo,er}function og(i){if(mt.hidden){const t=mt.hideType==="locker"?1.53:1.08,e=mt.position,n=de.shake;Je.position.set(e.x+(Math.random()-.5)*n,t+(Math.random()-.5)*n,e.z+(Math.random()-.5)*n);const s=Math.max(-.55,Math.min(.55,de.pitch));Je.rotation.set(-s,de.yaw,0),de.shake*=Math.exp(-i*9)}else de.update(i,mt,Kt,!1,null)}function lg(i){Ki+=i;const t=ag();mt.update(i,t,de.yaw,Kt,Pt==="playing"),Kt.update(i,mt.position,En),_i.update(i,Ki);for(const e of En)e.update(i,mt,Kt,!0);og(i),eg(i),rg(i),mt.health<=0&&Pt==="playing"&&Lc()}function cg(i){fs+=i;const t=.9+Math.sin(fs*.055)*.1,e=8.2;Je.position.set(Math.sin(t)*e,2.72+Math.sin(fs*.3)*.04,Math.cos(t)*e),Je.lookAt(-.6,1.25,-.5),mt.update(i,{x:0,z:0,sprint:!1},0,Kt,!1),Kt.update(i,mt.position,En),_i.update(i,fs);for(const n of En)n.update(i,mt,Kt,!1);mt.physics.speed=0}function Hc(i){const t=i/1e3,e=Math.min(.05,Math.max(1e-4,t-Zi));Zi=t,Pt==="menu"?(cg(e),Q.setTitleClock(fs)):Pt==="playing"?lg(e):de.shake*=Math.exp(-e*9),Xe.render(Kn,Je),requestAnimationFrame(Hc)}On();Q.setLoading(1,"READY");Q.showTitle();requestAnimationFrame(Hc);setTimeout(()=>{Q.hideLoading()},420);window.__LOST_SIGNAL__={get state(){return Pt},get player(){return mt},get camera(){return Je},get world(){return Kt},get inventory(){return gn},get extraction(){return ie},get robots(){return En},start:()=>Nc(),teleport:(i,t)=>mt.teleport(i,t),collectResearch:()=>{for(const i of _i.items.values())i.meta.research&&i.available&&gn.length<6&&Cc(i.uid)},unlock:()=>{Qi=!0,Kt.unlockResearchDoor()},readyExtraction:()=>{Pt="playing",Pc()},completeNow:()=>{Pt==="playing"&&Dc()}};
