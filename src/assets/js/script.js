$(document).ready(function(argument) {
	$(window).on('scroll', function () {
		let scrolled = window.scrollY;
		var offset = $(".container:first").offset().top;

		if (scrolled > 50) {
			$("header:first").addClass('pagescrolled');
		}else{
			$("header:first").removeClass('pagescrolled');
		}
	});
});