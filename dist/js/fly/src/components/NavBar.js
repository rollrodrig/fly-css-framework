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