//scroll button
$(function() {
	$('a[href*=#]').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
	});
});


//scroll collor
$(document).scroll(function() {
    if ($(this).scrollTop() < 100) {
        $('.nav').attr('style', 'background-color:rgba(100,0,0,0.2)');
    } else if ($(this).scrollTop() < 105) {
        $('.nav').attr('style', 'background-color:rgba(100,0,0,0.22)');
    } else if ($(this).scrollTop() < 110) {
        $('.nav').attr('style', 'background-color:rgba(100,0,0,0.24)');
    } else if ($(this).scrollTop() < 115) {
        $('.nav').attr('style', 'background-color:rgba(100,0,0,0.26)');
    } else if ($(this).scrollTop() < 120) {
        $('.nav').attr('style', 'background-color:rgba(100,0,0,0.28)');
    } else if ($(this).scrollTop() < 125) {
        $('.nav').attr('style', 'background-color:rgba(100,0,0,0.3)');
    } else if ($(this).scrollTop() < 130) {
        $('.nav').attr('style', 'background-color:rgba(100,0,0,0.32)');
    } else {
        $('.nav').css('background-color', '#911b1b');
    }
});

