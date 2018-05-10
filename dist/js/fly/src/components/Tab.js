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