(function(){
	var e = document.querySelectorAll('[fly-tt-o]');
	if(e.length <= 0 || e.length == null) { return; }
	function Tooltip(btn) {
		this.btn = btn;
		this.closes;
		this.tooltipId;
		this.tooltip;
		this.getTooltipId();
		this.getTooltip();
		this.getClose();
		this.bindClick();
		this.open = false;
		this.align = null;
		this.getAlign();
		// this.log();
	}

	Tooltip.prototype.getTooltipId = function(){
		this.tooltipId = this.btn.getAttribute('fly-tt-o');
	}

	Tooltip.prototype.getTooltip = function(){
		this.tooltip = document.querySelectorAll('[fly-tt-w="'+this.tooltipId+'"]')[0];
	}

	Tooltip.prototype.getClose = function(){
		this.closes = this.tooltip.querySelectorAll('[fly-tt-c]');
		for (var i = this.closes.length - 1; i >= 0; i--) {
			var c = this.closes[i]
			c.addEventListener('click', function(e){
				e.preventDefault()
				this.off();
			}.bind(this));
		}
	}

	Tooltip.prototype.getAlign = function(){
		this.align = this.tooltip.getAttribute('fly-tt-a');
	}	

	Tooltip.prototype.bindClick = function(){
		this.btn.addEventListener('click', function(e){
			e.preventDefault();
			this.handleClick();
		}.bind(this));
	}

	Tooltip.prototype.handleClick = function(){
		this.open == false?this.on():this.off();
	}

	Tooltip.prototype.off = function(){
		this.tooltip.style.display = 'none';
		this.open = false;
	}

	Tooltip.prototype.on = function(){
		this.tooltip.style.display = 'block';
		this.getCoords(); // tooltip should be visible first
		this.open = true;
	}	


	Tooltip.prototype.getCoords = function() {
		var rect = this.btn.getBoundingClientRect();
		var innerWidth = window.innerWidth;
		var tooltipWidth = this.tooltip.offsetWidth;
		var tooltipHeight = this.tooltip.offsetHeight;
		
		var top = rect.top-tooltipHeight + window.pageYOffset;
		var left = rect.left - (tooltipWidth*0.3);

		if (this.align == "left") {
			left = rect.left - tooltipWidth + rect.width;
		}

		if (this.align == "right") {
			left = rect.left
		}		
		
		if (left < 0) {
			left = 5;
		}

		if ((left+tooltipWidth)>innerWidth) {
			left = innerWidth - tooltipWidth - 5;
		}		

		this.tooltip.style.left = left+'px';
		this.tooltip.style.top = top+'px';

	}
	
	for(var i = 0; i < e.length; i++ ) {
		new Tooltip(e[i]);
	}

}());