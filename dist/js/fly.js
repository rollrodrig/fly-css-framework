(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
require('./components/Import');
},{"./components/Import":3}],2:[function(require,module,exports){
require('./Fly');
//require('./other scripts');
},{"./Fly":1}],3:[function(require,module,exports){
require('./OffCanvas');
require('./NavBar');
},{"./NavBar":4,"./OffCanvas":5}],4:[function(require,module,exports){
(function(){
	var q, o = false, on, off, nb, nbh, b;
	q = function(e){ return document.querySelector(e);}
	nb = q('[fly-navbar]');
	b = q('[fly-navbar-btn]');
	if (nb == undefined || b  == undefined) { return;}
	nbh = nb.clientHeight;
	off = function(){
		nb.style.height = nbh;
		b.classList.remove('-on');
	}
	on = function(){
		nb.style.height = "auto";
		b.classList.add('-on');
	}
	b.onclick = function(){
		o?off():on();
		o = !o;
	}

})();
},{}],5:[function(require,module,exports){
(function(){
	var q, o = false, on, off, c, b;
	q = function(e){return document.querySelector(e);}
	c = q('[fy-offc-s]');
	b = q('[fy-offc-b]');
	if (c == undefined || b == undefined) { return;}
	on = function(){
		c.style.left = "0";
		b.classList.add('-on');
	}
	off = function(){
		c.style.left = "-250px";
		b.classList.remove('-on');
	}
	b.onclick = function(){
		o?off():on();
		o = !o;
	}
})();
},{}]},{},[2]);
