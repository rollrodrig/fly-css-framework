(function(){
	var q, o = false, on, off, c, b;
	q = function(e){return document.querySelector(e);}
	c = q('[fy-offc-s]');
	b = q('[fy-offc-b]');
	on = function(){
		c.style.left = "0";
	}
	off = function(){
		c.style.left = "-250px";
	}
	b.onclick = function(){
		o?off():on();
		o = !o;
	}
})();