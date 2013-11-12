$(document).ready(function(){
	$('a[href*=#]').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top -80
	    }, 500);
	    return false;
	});
	$('.carousel-slide').slider();
});