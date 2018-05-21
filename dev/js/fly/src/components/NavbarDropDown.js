(function(){
	var q = function(e){return document.querySelector(e);}
	
	function NavBarDropDown(dropDown) {
		this.dropDown = dropDown;
		this.open = false;
		this.childMinHeight = '50px';
		this.childMaxHeight = 'auto';
		this.hh();
		this.run();
	}

	NavBarDropDown.prototype.hh = function() {
		this.childMinHeight = this.dropDown.clientHeight+'px';
	}
	
	NavBarDropDown.prototype.run = function(){
		var that = this;
		this.dropDown.addEventListener('click', function(){
			if (this.open) {
				this.classList.remove('-o');
				this.style.height = that.childMinHeight;
			}else {
				this.classList.add('-o');
				this.style.height = that.childMaxHeight;
			}
			this.open = !this.open;
		});
	}

	var t = document.querySelectorAll('[fy-nb-dd]');
	for(var i = 0; i < t.length; i++ ) {
		new NavBarDropDown(t[i]);
	}
})();











