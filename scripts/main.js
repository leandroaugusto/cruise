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

})