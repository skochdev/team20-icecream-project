parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"TacW":[function(require,module,exports) {
const e=document.querySelectorAll(".card");function t(e){const t=this.querySelector(".card__inner"),o=t.offsetHeight/8,r=t.offsetWidth/8,n=e.offsetY,s=e.offsetX;t.style.transform=`rotateX(${(-n+o)/10}deg) rotateY(${(s-r)/4}deg)`}function o(e){this.querySelector(".card__inner").style.transform=""}e.forEach(e=>{e.addEventListener("mousemove",t),e.addEventListener("mouseleave",o)});
},{}]},{},["TacW"], null)
//# sourceMappingURL=/team20-icecream-project/masorny.f7573b81.js.map