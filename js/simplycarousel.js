(function($, window, document) {
	$.fn.slider = function(options){
		var q = $.fn.slider.settings = $.extend({}, $.fn.slider.defaults, options),
		slide = this,
		total_time = q.transition_time + q.next_slides,
		interval,
		on = 'on';
		function carousel(){
			var i = $(q.slideOn).index();    
		    slide.eq(i).removeClass(on).fadeOut(q.transition_time);	
		    if (i == slide.length-1 ){ i = -1 }; // loop to start
		    slide.eq(i + 1).fadeIn(q.transition_time).addClass(on);
		}		
		slide.fadeOut();	
		slide.first().addClass(on).fadeIn(q.transition_time);
		// set carousel interval
		interval = setInterval(carousel, total_time);
	}			
	// Defaults
    $.fn.slider.defaults = {
        transition_time : 1000,
        next_slides : 2500,
		slideOn :'.carousel-slide.on'
    };   
	$.fn.sliderArrow = function(options){
		var q = $.fn.sliderArrow.settings = $.extend({}, $.fn.sliderArrow.defaults, options),
		slide = this,
		total_time = q.transition_time + q.next_slides,
		interval,
		container = '#main_banner',
		right = this.closest(container).find('.arrow.right'),
		left = this.closest(container).find('.arrow.left'),
		arrow = '.arrow',
		on = 'on';
				
		function carousel(){
			var i = $(q.slideOn).index();    
			slide.eq(i).removeClass(on).fadeOut(q.transition_time);	
	     	if (i == slide.length-1 ){ i = -1 }; // loop to start
		 	slide.eq(i + 1).fadeIn(q.transition_time).addClass(on);
		}
		slide.fadeOut();	
		slide.first().addClass(on).fadeIn(q.transition_time);
		// set carousel interval
		interval = setInterval(carousel, total_time);	
		
		right.on('click', function(){carousel();});
		left.on('click', function(){
			var i =$(q.slideOn).index();
		    slide.eq(i).removeClass(on).fadeOut(q.transition_time);    
			if (i < 0 ){ i = slide.length -1 }; // loop to start	
			slide.eq(i -1).fadeIn(q.transition_time).addClass(on); 
		});
		$(arrow).hide();
		$(container).hover(function(){	
			clearTimeout(interval);
			$(arrow).show();
		}, function(){
			interval = setInterval(carousel, total_time);
			$(arrow).hide()
		});	
	}			
	// Defaults
    $.fn.sliderArrow.defaults = {
        transition_time : 1000,
        next_slides : 2500,
		slideOn :'.carousel-slide.on'
    };   
}(jQuery, window, document));


