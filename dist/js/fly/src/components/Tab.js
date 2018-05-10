(function(){
	var q, o = false, on, off, s, b, bt;
	q = function(e){return document.querySelector(e);}



	var tbs = document.querySelectorAll('[fy-tab]');
	var l = tbs.length;
	for (var i = 0; i < l; i++) {
		var ctb = tbs[i];
		(function(ctb){
			var tb = ctb;
			function b(){
				var tbh, tbb;
				tbh = tb.querySelector('[fy-tab-h]');
				tbb = tb.querySelector('[fy-tab-b]');
			}
			b();
		})(ctb);
	}

	
	var t = q('[fy-tab-h]').children;
	var b = q('[fy-tab-b]');

	var cc = q('[fy-tab]')
	// var childs = cc.querySelector('[fy-tab-h]');
	// console.log(cc)

	if (t == undefined || b == undefined) { return;}
	
	var l = t.length;
	
	for (var i = 0; i < l; i++) {
		var c = t[i];
		(function(c){
			var j = c;
			function b(){
				j.onclick = function(){
					if (!j.classList.contains('-a')) {
						on(j);	
					}
				}
			}
			b();
		})(c);
	}

	on = function(tab){
		q('[fy-tab-h] > .-a').classList.remove('-a');
		tab.classList.add('-a');
		var i = tab.getAttribute('fy-tab-i');
		open(i);
	}

	open = function(i){
		console.log(i);
		q('[fy-tab-b] > .-a').classList.remove('-a');
		q('[fy-tab-b="'+i+'"]').classList.add('-a');
	}



	
})();