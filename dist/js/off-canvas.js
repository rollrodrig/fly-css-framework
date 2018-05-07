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