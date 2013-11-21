// USED FOR DEMO1
function menuCollapse(){
	if($(window).width() < 769) {
      	$('#nav').hide();
	    $('#menu').show();
    } else {
      	$('#nav').show();
      	$('#menu').hide();
    }
}
$(document).ready(function(){
	$('a[href*=#]').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top -80
	    }, 500);
	    return false;
	});

	menuCollapse();	
	$(window).on('resize', function(){menuCollapse();});
	$('#menu').click(function(){$('#nav').slideToggle();});
	$('.carousel-slide').slider();
});