(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
require('./components/OffCanvas');
require('./components/NavBar');
require('./components/Tab');
},{"./components/NavBar":2,"./components/OffCanvas":3,"./components/Tab":4}],2:[function(require,module,exports){
(function(){
	function NavBar(navbar) {
		this.navbar = navbar;
		this.btn;
		this.navbarHeigh = navbar.clientHeight;
		this.open = false;
		this.getElements();
		this.bindClick();
		this.log();
	}
	NavBar.prototype.getElements = function(){
		this.btn = this.navbar.getElementsByClassName('fy-nbb')[0];
	}
	NavBar.prototype.bindClick = function(){
		this.btn.addEventListener('click', function(){
			this.handleClick();
		}.bind(this));
	}
	NavBar.prototype.handleClick = function(){
		this.open?this.off():this.on();
		this.open = !this.open;
	}
	NavBar.prototype.on = function(){
		this.navbar.style.height = "auto";
		this.btn.classList.add('-on');
	}
	NavBar.prototype.off = function(){
		this.navbar.style.height = this.navbarHeigh+"px";
		this.btn.classList.remove('-on');
	}
	NavBar.prototype.log = function(){
		console.log(this.btn);
	}

	var e = document.querySelectorAll('[fy-navbar]');
	for(var i = 0; i < e.length; i++ ) {
		new NavBar(e[i]);
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
		this.tab = tab;
		this.currentOpenTab;
		this.h;
		this.b;

		this.tabHeaderClass = 'fy-tab_h';
		this.tabBodyClass = 'fy-tab_b';

		this.tabHeaderItemsName = 'fy-tab-i';
		this.taBodyitemsName = 'fy-tab-b';

		this.tabActiveClass = '-a';
		this.getElements();
		this.addHeaderItemsIndex();
		this.addBodyItemsIndex();
	}
	Tab.prototype.getElements = function(){
		this.h = this.tab.getElementsByClassName(this.tabHeaderClass)[0];
		this.b = this.tab.getElementsByClassName(this.tabBodyClass)[0];
		this.headerItems = this.h.children;
		this.bodyItems = this.b.children;
	}
	Tab.prototype.addHeaderItemsIndex = function(){
		var l = this.headerItems.length;
		var _that = this;
		for (var i = 0; i < l; i++) {
			var c = this.headerItems[i];
			c.setAttribute(this.tabHeaderItemsName,i);
			c.addEventListener('click', function(a){
				_that.handleClick(this);
			});
		}
	}
	Tab.prototype.addBodyItemsIndex = function(current,i){
		var l = this.bodyItems.length;
		for (var i = 0; i < l; i++) {
			var c = this.bodyItems[i];
			c.setAttribute(this.taBodyitemsName,i);
		}	
	}
	Tab.prototype.handleClick = function(tab){
		this.h.getElementsByClassName(this.tabActiveClass)[0]
			.classList
			.remove(this.tabActiveClass);
		tab.classList
			.add(this.tabActiveClass);
		var index = tab.getAttribute(this.tabHeaderItemsName);
		this.openBodyElem(index);
		// current.classList.add(this.tabActiveClass);
	}
	Tab.prototype.openBodyElem = function(index){
		this.b.getElementsByClassName(this.tabActiveClass)[0]
			.classList
			.remove(this.tabActiveClass);
		this.b.querySelector('['+this.taBodyitemsName+'="'+index+'"]')
			.classList
			.add(this.tabActiveClass);
	}
	var t = document.querySelectorAll('[fy-tab]');
	for(var i = 0; i < t.length; i++ ) {
		new Tab(t[i]);
	}
	
})();
},{}]},{},[1]);
