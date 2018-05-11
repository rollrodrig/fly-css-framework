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