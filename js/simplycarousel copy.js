(function($, window, document) {
	$.fn.slider = function(options){
		var q = $.fn.slider.settings = $.extend({}, $.fn.slider.defaults, options),
		slide = this,
		total_time = q.transition_time + q.next_slides,
		interval;
		function carousel(){
			var i = $(q.slideOn).index();    
		    slide.eq(i).removeClass(q.on).fadeOut(q.transition_time);	
		    if (i == slide.length-1 ){ i = -1 }; // loop to start
		    slide.eq(i + 1).fadeIn(q.transition_time).addClass(q.on);
		}
		slide.fadeOut();	
		slide.first().addClass(q.on).fadeIn(q.transition_time);
		// set carousel interval
		interval = setInterval(carousel, total_time);
	}			
	// Defaults
    $.fn.slider.defaults = {
        transition_time : 1000,
        next_slides : 2500,
        on : 'on',
        slideOn : '.carousel-slide.on'
    };   
	$.fn.sliderArrow = function(options){
		var q = $.fn.sliderArrow.settings = $.extend({}, $.fn.sliderArrow.defaults, options),
		slide = this,
		total_time = q.transition_time + q.next_slides,
		interval,
		right = this.closest(q.container).find(q.rightArrow),
		left = this.closest(q.container).find(q.leftArrow);
		
		function carousel(){
			var i = $(q.slideOn).index();    
			slide.eq(i).removeClass(q.on).fadeOut(q.transition_time);	
	     	if (i == slide.length-1 ){ i = -1 }; // loop to start
		 	slide.eq(i + 1).fadeIn(q.transition_time).addClass(q.on);

		}
		slide.fadeOut();	
		slide.first().addClass(q.on).fadeIn(q.transition_time);
		// set carousel interval
		interval = setInterval(carousel, total_time);	
		
		right.on('click', function(){carousel();});
		left.on('click', function(){
			var i =$(q.slideOn).index();
		    slide.eq(i).removeClass(q.on).fadeOut(q.transition_time);    
			if (i < 0 ){ i = slide.length -1 }; // loop to start	
			slide.eq(i -1).fadeIn(q.transition_time).addClass(q.on); 
		});
		$(q.arrow).hide();
		$(q.container).hover(function(){	
			clearTimeout(interval);
			$(q.arrow).show();
		}, function(){
			interval = setInterval(carousel, total_time);
			$(q.arrow).hide()
		});	
		//window loaded @ < 480px;
		if($(window).width() <= 480) {
			clearTimeout(interval);
			$(q.container).hover(function(){	
			}, function(){
				clearTimeout(interval);
			});
		}	
		$(window).on('resize', function(){
			if($(window).width() <= 480) {
				clearTimeout(interval);
				$(q.container).hover(function(){	
				}, function(){
					clearTimeout(interval);
				});				
			} else {
				clearTimeout(interval);
				interval = setInterval(carousel, total_time);
				$(q.container).mouseover(function(){
				});
			}	 
		});
	}			
	// Defaults
    $.fn.sliderArrow.defaults = {
        transition_time : 1000,
        next_slides : 2500,
        on : 'on',
        slideOn : '.carousel-slide.on',
        container: '.container',
        arrow: '.arrow',
        rightArrow: '.arrow.right',
        leftArrow: '.arrow.left'
    };   
}(jQuery, window, document));


