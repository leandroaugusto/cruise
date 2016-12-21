// Main JS

$(document).ready(function(){

	// $('body').flowtype({ 
	// 	minimum   : 768,
	// 	maximum   : 1420,
	// 	minFont   : 12,
	// 	maxFont   : 16,
	// 	fontRatio : 36
	// });

	// Show current page menu
	var currPage = $('section').data('page');

	$('header a[data-page='+currPage+']').addClass('active');


	// MODAL
	var modal = $('.modal');
	var mySwiper = new Swiper('.swiper-container', {
	    speed: 400,
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev'
	});

	$('a[data-image]').on('click', function(e) {
		e.preventDefault();

		var img = $(this).attr('data-image');

		modal.fadeIn();
		mySwiper.slideTo(img);

		$('html, body').animate({
			scrollTop: 0
		},200)
	})

	modal.find('.close').on('click', function() {
		modal.fadeOut();
	})

})