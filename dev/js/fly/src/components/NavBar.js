(function(){
	function NavBar(navbar) {
		this.navbar = navbar;
		this.btn;
		this.navbarHeigh = navbar.clientHeight;
		this.open = false;
		this.getElements();
		this.bindClick();
		this.log();
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