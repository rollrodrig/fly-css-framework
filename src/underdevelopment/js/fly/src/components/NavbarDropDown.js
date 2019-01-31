(function(){
	var t = document.querySelectorAll('[fy-nb-dd]');
	if(t.length <= 0 || t.length == null) { return; }
	
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
	
	for(var i = 0; i < t.length; i++ ) {
		new NavBarDropDown(t[i]);
	}
	
})();











