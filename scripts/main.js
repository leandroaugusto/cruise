// Main JS

$(document).ready(function(){

	// Show current page menu
	var currPage = $('section').data('page');

	$('header a[data-page='+currPage+']').addClass('active');

})