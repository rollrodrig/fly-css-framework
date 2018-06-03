(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*!
 * fly css framework v1.0.0 (http://flycssframework.com/)
 * Copyright 2018 The flycssframework Authors (http://supervectorcode.com/)
 * Copyright 2018 Supervectorcode, Inc.
 * Licensed under MIT
 */
require('./components/Base');
require('./components/OffCanvas');
require('./components/NavBar');
require('./components/Tab');
require('./components/NavBarDropDown');
require('./components/ConfirmationPop');
require('./components/Tooltip');


},{"./components/Base":2,"./components/ConfirmationPop":3,"./components/NavBar":4,"./components/NavBarDropDown":5,"./components/OffCanvas":6,"./components/Tab":7,"./components/Tooltip":8}],2:[function(require,module,exports){
var Flycssframework = (function(){
	var instance;
	function init(){
		return {
		}
	}
	return {
		getInstance: function(){
			if (!instance) {
				instance = init();
			}
			return instance;
		}
	}
}());	
},{}],3:[function(require,module,exports){
(function(){
	function ConfirmationPop(btn) {
		this.btn = btn;
		this.closes;
		this.popId;
		this.pop;
		this.getPopId();
		this.getPop();
		this.getClose();
		this.bindClick();
		this.open = false;
		// this.log();
	}

	ConfirmationPop.prototype.getPopId = function(){
		this.popId = this.btn.getAttribute('fly-cpop-o');
	}

	ConfirmationPop.prototype.getPop = function(){
		this.pop = document.querySelectorAll('[fly-cpop-w="'+this.popId+'"]')[0];
	}
	ConfirmationPop.prototype.getClose = function(){
		this.popId = this.btn.getAttribute('fly-cpop-o');
		this.closes = this.pop.querySelectorAll('[fly-cpop-c]');

		for (var i = this.closes.length - 1; i >= 0; i--) {
			var c = this.closes[i]
			c.addEventListener('click', function(e){
				e.preventDefault()
				this.off();
			}.bind(this));
		}


	}

	ConfirmationPop.prototype.bindClick = function(){
		this.btn.addEventListener('click', function(e){
			e.preventDefault();
			this.handleClick();
		}.bind(this));
	}

	ConfirmationPop.prototype.handleClick = function(){
		this.open == false?this.on():this.off();
	}

	ConfirmationPop.prototype.off = function(){
		this.pop.classList.remove('-on');
		this.pop.classList.add('-off');
		this.open = false;
	}

	ConfirmationPop.prototype.on = function(){
		this.pop.classList.remove('-off');
		this.pop.classList.add('-on');
		this.open = true;
	}	

	ConfirmationPop.prototype.log = function(){
		console.log(this.btn);
	}

	var e = document.querySelectorAll('[fly-cpop-o]');
	for(var i = 0; i < e.length; i++ ) {
		new ConfirmationPop(e[i]);
	}

})();
},{}],4:[function(require,module,exports){
(function(){
	function NavBar(navbar) {
		this.navbar = navbar;
		this.btn;
		this.navbarHeigh = navbar.clientHeight;
		this.open = false;
		this.getElements();
		this.bindClick();
		// this.log();
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
},{}],5:[function(require,module,exports){
(function(){
	var q = function(e){return document.querySelector(e);}
	
	function NavBarDropDown(dropDown) {
		this.dropDown = dropDown;
		this.open = false;
		this.childMinHeight = '50px';
		this.childMaxHeight = 'auto';
		this.hh();
		this.run();
	}

	NavBarDropDown.prototype.hh = function() {
		this.childMinHeight = this.dropDown.clientHeight+'px';
	}
	
	NavBarDropDown.prototype.run = function(){
		var that = this;
		this.dropDown.addEventListener('click', function(){
			if (this.open) {
				this.classList.remove('-o');
				this.style.height = that.childMinHeight;
			}else {
				this.classList.add('-o');
				this.style.height = that.childMaxHeight;
			}
			this.open = !this.open;
		});
	}

	var t = document.querySelectorAll('[fy-nb-dd]');
	for(var i = 0; i < t.length; i++ ) {
		new NavBarDropDown(t[i]);
	}
})();












},{}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
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
		this.tabPreviousIndexOpen = 0;
		this.tabIndexOpen = 0;
		this.getElements();
		this.addHeaderItemsIndex();
		this.addBodyItemsIndex();
		this.setCurrentTab();
	}
	Tab.prototype.setCurrentTab = function(){
		var i = this.h.getElementsByClassName(this.tabActiveClass)[0]
				.getAttribute(this.tabHeaderItemsName)
		this.tabPreviousIndexOpen = i;
		this.tabIndexOpen = i;		
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
		this.tabPreviousIndexOpen = this.tabIndexOpen;
		this.tabIndexOpen = index;
		this.openBodyElem(index);
		// current.classList.add(this.tabActiveClass);
	}
	Tab.prototype.openBodyElem = function(index){
		// console.log(this.b.getElementsByClassName(this.tabActiveClass)[0]);
		// this.b.getElementsByClassName(this.tabActiveClass)[0]
		// 	.classList
		// 	.remove(this.tabActiveClass);
			
		this.b.querySelector('['+this.taBodyitemsName+'="'+this.tabPreviousIndexOpen+'"]')
			.classList
			.remove(this.tabActiveClass);
		this.b.querySelector('['+this.taBodyitemsName+'="'+this.tabIndexOpen+'"]')
			.classList
			.add(this.tabActiveClass);
	}
	var t = document.querySelectorAll('[fy-tab]');
	for(var i = 0; i < t.length; i++ ) {
		new Tab(t[i]);
	}
	
})();
},{}],8:[function(require,module,exports){
(function(){
	function Tooltip(btn) {
		this.btn = btn;
		this.closes;
		this.tooltipId;
		this.tooltip;
		this.getTooltipId();
		this.getTooltip();
		this.getClose();
		this.bindClick();
		this.open = false;
		this.align = null;
		this.getAlign();
		// this.log();
	}

	Tooltip.prototype.getTooltipId = function(){
		this.tooltipId = this.btn.getAttribute('fly-tt-o');
	}

	Tooltip.prototype.getTooltip = function(){
		this.tooltip = document.querySelectorAll('[fly-tt-w="'+this.tooltipId+'"]')[0];
	}

	Tooltip.prototype.getClose = function(){
		this.closes = this.tooltip.querySelectorAll('[fly-tt-c]');
		for (var i = this.closes.length - 1; i >= 0; i--) {
			var c = this.closes[i]
			c.addEventListener('click', function(e){
				e.preventDefault()
				this.off();
			}.bind(this));
		}
	}

	Tooltip.prototype.getAlign = function(){
		this.align = this.tooltip.getAttribute('fly-tt-a');
	}	

	Tooltip.prototype.bindClick = function(){
		this.btn.addEventListener('click', function(e){
			e.preventDefault();
			this.handleClick();
		}.bind(this));
	}

	Tooltip.prototype.handleClick = function(){
		this.open == false?this.on():this.off();
	}

	Tooltip.prototype.off = function(){
		this.tooltip.style.display = 'none';
		this.open = false;
	}

	Tooltip.prototype.on = function(){
		this.tooltip.style.display = 'block';
		this.getCoords(); // tooltip should be visible first
		this.open = true;
	}	


	Tooltip.prototype.getCoords = function() {
		var rect = this.btn.getBoundingClientRect();
		var innerWidth = window.innerWidth;
		var tooltipWidth = this.tooltip.offsetWidth;
		var tooltipHeight = this.tooltip.offsetHeight;
		
		var top = rect.top-tooltipHeight + window.pageYOffset;
		var left = rect.left - (tooltipWidth*0.3);

		if (this.align == "left") {
			left = rect.left - tooltipWidth + rect.width;
		}

		if (this.align == "right") {
			left = rect.left
		}		
		
		if (left < 0) {
			left = 5;
		}

		if ((left+tooltipWidth)>innerWidth) {
			left = innerWidth - tooltipWidth - 5;
		}		

		this.tooltip.style.left = left+'px';
		this.tooltip.style.top = top+'px';

	}

	var e = document.querySelectorAll('[fly-tt-o]');
	for(var i = 0; i < e.length; i++ ) {
		new Tooltip(e[i]);
	}

}());
},{}]},{},[1]);
