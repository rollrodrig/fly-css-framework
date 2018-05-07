(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
require('./components/OffCanvas');
require('./components/NavBar');
},{"./components/NavBar":2,"./components/OffCanvas":3}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
(function(){
	var q, o = false, on, off, s, b, bt;
	q = function(e){return document.querySelector(e);}
	s = q('[fy-offc-s]');
	b = q('[fy-offc-b]');
	bt = q('[fy-offc-bt]');
	if (s == undefined || b == undefined || bt == undefined) { return;}

	on = function(){
		s.style.left = "0";
		bt.classList.add('-on');
		b.style.width = document.body.clientWidth+"px";
		b.style.marginLeft = "250px";
	}
	off = function(){
		s.style.left = "-250px";
		bt.classList.remove('-on');
		b.style.marginLeft = "0";
		setTimeout(function(){
			b.style.width = null;
			b.style.marginLeft = null;
		},500)
		
	}
	bt.onclick = function(){
		o?off():on();
		o = !o;
	}
})();
},{}]},{},[1]);
