(function(){
	var q, o = false, on, off, c, b;
	q = function(e){return document.querySelector(e);}
	c = q('[fy-offc-s]');
	b = q('[fy-offc-b]');
	if (c == undefined || b == undefined) { return;}
	on = function(){
		c.style.left = "0";
		b.classList.add('-on');
	}
	off = function(){
		c.style.left = "-250px";
		b.classList.remove('-on');
	}
	b.onclick = function(){
		o?off():on();
		o = !o;
	}
})();