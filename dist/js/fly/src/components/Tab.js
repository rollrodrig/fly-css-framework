(function(){
	
	var q = function(e){return document.querySelector(e);}

	function Tab(tab){
		this._tab = tab;
		this._h;
		this._b;
		this._getElements();
		this._getHeaderItems();
		this._bindClick();
		this._log();
	}
	Tab.prototype._getElements = function(){
		this._h = this._tab.getElementsByClassName('fy-tab_h')[0];
		this._b = this._tab.getElementsByClassName('fy-tab_b')[0];
	
	}
	Tab.prototype._getHeaderItems = function(){
		this._headerItems = this._h.getElementsByClassName('fy-tab_i');
	}
	Tab.prototype._bindClick = function(){
		var l = this._headerItems.length;
		for (var i = 0; i < l; i++) {
			var current = this._headerItems[i];
			current.addEventListener('click', function(a){
				console.log(this);
			});
		}
	}
	Tab.prototype._log = function(){
		// console.log(this._h);
		// console.log(this._b);
		// console.log(this._headerItems);
	}
	Tab.prototype.q = function(){

	}


	Tab.prototype.on = function(){
		var t = q('[fy-tab-h]');
		t.getElementsByClassName('-a')[0].classList.remove('-a');
		tab.classList.add('-a');
		var i = tab.getAttribute('fy-tab-i');
		open(i);
	}
	Tab.prototype.off = function(){
		console.log(i);
		q('[fy-tab-b] > .-a').classList.remove('-a');
		q('[fy-tab-b="'+i+'"]').classList.add('-a');		
	}
	var t = q('[fy-tab]');
	tab = new Tab(t);


	
	// var t = q('[fy-tab-h]').children;
	// var b = q('[fy-tab-b]');

	// if (t == undefined || b == undefined) { return;}
	
	// var l = t.length;
	
	// for (var i = 0; i < l; i++) {
	// 	var c = t[i];
	// 	(function(c){
	// 		var j = c;
	// 		function b(){
	// 			j.onclick = function(){
	// 				if (!j.classList.contains('-a')) {
	// 					on(j);	
	// 				}
	// 			}
	// 		}
	// 		b();
	// 	})(c);
	// }

	// on = function(tab){
	// 	var t = q('[fy-tab-h]');
	// 	t.getElementsByClassName('-a')[0].classList.remove('-a');
	// 	tab.classList.add('-a');
	// 	var i = tab.getAttribute('fy-tab-i');
	// 	open(i);
	// }

	// open = function(i){
	// 	console.log(i);
	// 	q('[fy-tab-b] > .-a').classList.remove('-a');
	// 	q('[fy-tab-b="'+i+'"]').classList.add('-a');
	// }



	
})();