(function(){
	function ConfirmationPop(btn) {
		this.btn = btn;
		this.close;
		this.popId;
		this.pop;
		this.getPopId();
		this.getPop();
		this.getClose();
		this.bindClick();
		this.open = false;
		// this.log();
	}

	ConfirmationPop.prototype.getPopId = function(){
		this.popId = this.btn.getAttribute('fly-cpop-o');
	}

	ConfirmationPop.prototype.getPop = function(){
		this.pop = document.querySelectorAll('[fly-cpop-w="'+this.popId+'"]')[0];
	}
	ConfirmationPop.prototype.getClose = function(){
		this.popId = this.btn.getAttribute('fly-cpop-o');
		this.closes = this.pop.querySelectorAll('[fly-cpop-c]');

		for (var i = this.closes.length - 1; i >= 0; i--) {
			var c = this.closes[i]
			c.addEventListener('click', function(e){
				e.preventDefault()
				this.off();
			}.bind(this));
		}


	}

	ConfirmationPop.prototype.bindClick = function(){
		this.btn.addEventListener('click', function(e){
			e.preventDefault();
			this.handleClick();
		}.bind(this));
	}

	ConfirmationPop.prototype.handleClick = function(){
		this.open == false?this.on():this.off();
	}

	ConfirmationPop.prototype.off = function(){
		this.pop.classList.remove('-on');
		this.pop.classList.add('-off');
		this.open = !this.open;
	}

	ConfirmationPop.prototype.on = function(){
		this.pop.classList.remove('-off');
		this.pop.classList.add('-on');
		this.open = !this.open;
	}	

	ConfirmationPop.prototype.log = function(){
		console.log(this.btn);
	}

	var e = document.querySelectorAll('[fly-cpop-o]');
	for(var i = 0; i < e.length; i++ ) {
		new ConfirmationPop(e[i]);
	}

})();