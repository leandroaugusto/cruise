// Main JS

$(document).ready(function(){

	// Show current page menu
	var currPage = $('section').data('page'),
			setAutoHeight = currPage === 'press';

	$('header a[data-page='+currPage+']').addClass('active');


	// MODAL
	var modal = $('.modal');
	var mySwiper = new Swiper('.swiper-container', {
	    speed: 400,
	    autoHeight: setAutoHeight,
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev'
	});

	$('a[data-image]').on('click', function(e) {
		e.preventDefault();

		var img = $(this).attr('data-image');

		modal.fadeIn();
		mySwiper.update();
		mySwiper.slideTo(img);

		$('html, body').animate({
			scrollTop: 0
		},200)
	})

	modal.find('.close').on('click', function() {
		modal.fadeOut();
	});

	$('#nav-icon1').on('click', function() {
		$(this).toggleClass('open');
		$('header ul, .follow').toggleClass('open');
	});

})
