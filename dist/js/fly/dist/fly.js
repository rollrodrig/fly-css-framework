(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
require('./components/OffCanvas');
require('./components/NavBar');
require('./components/Tab');
},{"./components/NavBar":2,"./components/OffCanvas":3,"./components/Tab":4}],2:[function(require,module,exports){
(function(){
	var q, o = false, on, off, nb, nbh, b;
	q = function(e){ return document.querySelector(e);}
	nb = q('[fy-navbar]');
	b = q('[fy-navbar-btn]');
	if (nb == undefined || b  == undefined) { return;}
	nbh = nb.clientHeight;
	off = function(){
		nb.style.height = nbh+"px";
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
},{}],4:[function(require,module,exports){
(function(){
	var q = function(e){return document.querySelector(e);}
	function Tab(tab){
		this._tab = tab;
		this._currentOpenTab;
		this._h;
		this._b;

		this._tabHeaderClass = 'fy-tab_h';
		this._tabBodyClass = 'fy-tab_b';

		this._tabHeaderItemsName = 'fy-tab-i';
		this._taBodyitemsName = 'fy-tab-b';

		this._tabActiveClass = '-a';
		this._getElements();
		this._addHeaderItemsIndex();
		this._addBodyItemsIndex();
	}
	Tab.prototype._getElements = function(){
		this._h = this._tab.getElementsByClassName(this._tabHeaderClass)[0];
		this._b = this._tab.getElementsByClassName(this._tabBodyClass)[0];
		this._headerItems = this._h.children;
		this._bodyItems = this._b.children;
	}
	Tab.prototype._addHeaderItemsIndex = function(){
		var l = this._headerItems.length;
		var _that = this;
		for (var i = 0; i < l; i++) {
			var c = this._headerItems[i];
			c.setAttribute(this._tabHeaderItemsName,i);
			c.addEventListener('click', function(a){
				_that._handleClick(this);
			});
		}
	}
	Tab.prototype._addBodyItemsIndex = function(current,i){
		var l = this._bodyItems.length;
		for (var i = 0; i < l; i++) {
			var c = this._bodyItems[i];
			c.setAttribute(this._taBodyitemsName,i);
		}	
	}
	Tab.prototype._handleClick = function(tab){
		this._h.getElementsByClassName(this._tabActiveClass)[0]
			.classList
			.remove(this._tabActiveClass);
		tab.classList
			.add(this._tabActiveClass);
		var index = tab.getAttribute(this._tabHeaderItemsName);
		this._openBodyElem(index);
		// current.classList.add(this.tabActiveClass);
	}
	Tab.prototype._openBodyElem = function(index){
		this._b.getElementsByClassName(this._tabActiveClass)[0]
			.classList
			.remove(this._tabActiveClass);
		this._b.querySelector('['+this._taBodyitemsName+'="'+index+'"]')
			.classList
			.add(this._tabActiveClass);
	}
	var t = document.querySelectorAll('[fy-tab]');
	for(var i = 0; i < t.length; i++ ) {
		new Tab(t[i]);
	}
	
})();
},{}]},{},[1]);
