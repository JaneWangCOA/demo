parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n=document.querySelector("#demo"),e=document.querySelector("#style"),r="/*您好，我是一名前端新人\n接下来我要加样式了\n我要加的样式是*/\n#div1{\n  border: 1px solid red;\n  width: 200px;\n  height: 200px;\n}\n/*接下来我把div变成一个八卦图\n请注意\n先变个圆*/\n#div1{\n  border-radius: 50%;\n  box-shadow: 0 0 3px rgba(0,0,0,0.5);\n  border: none;\n}\n/*八卦是由阴阳组成的，\n一黑一白*/\n#div1{\n  background: linear-gradient(90deg,white 50%,black 50%,black 100%)\n}\n#div1::before{\n  content: '';\n  display:block;\n  width: 100px;\n  height: 100px;\n  background: black;\n  border-radius: 50%;\n  top: 0;\n  left: 50%;\n  transform: translateX(50%);\n  background: radial-gradient(circle,white 25%,black 25%,black 100%)\n}\n#div1::after{\n  content: '';\n  display:block;\n  width: 100px;\n  height: 100px;\n  background: white;\n  border-radius: 50%;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(50%);\n  background: radial-gradient(circle,black 25%,white 25%,white 100%)\n}\n",o="",t=0,d=function d(){setTimeout(function(){console.log(r[t]),10===r[t].charCodeAt()?o+="<br/>":" "===r[t]?o+="&nbsp;":o+=r[t],n.innerHTML=o,e.innerHTML=r.substring(0,t),window.scrollTo(0,99999),demo.scrollTo(0,9999),(t+=1)<r.length&&d()},10)};d();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.9ac443a0.js.map