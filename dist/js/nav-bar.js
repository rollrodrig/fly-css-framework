(function(){
	var q, o = false, on, off, navbar, navbarHight, btn;
	
	q = function(e){
		return document.querySelector(e);
	}

	navbar = q('[fly-navbar]');
	navbarHight = navbar.clientHeight;
	btn = q('[fly-navbar-btn]');

	off = function(){
		navbar.style.height = navbarHight;
	}

	on = function(){
		navbar.style.height = "auto";
	}

	btn.onclick = function(){
		o?off():on();
		o = !o;
	}	


})();