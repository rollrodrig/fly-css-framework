(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
require('./components/Import');
},{"./components/Import":3}],2:[function(require,module,exports){
require('./Fly');
//require('./other scripts');
},{"./Fly":1}],3:[function(require,module,exports){
require('./OffCanvas');
},{"./OffCanvas":4}],4:[function(require,module,exports){
(function(){
	var q, o = false, on, off;
	q = function(e){
		return document.querySelector(e);
	}
	on = function(){
		q('[fy-offc-s]').style.left = "0";
	}
	off = function(){
		q('[fy-offc-s]').style.left = "-250px";
	}
	q('[fy-offc-t]').onclick = function(){
		o?off():on();
		o = !o;
	}			
})();
},{}]},{},[2]);
