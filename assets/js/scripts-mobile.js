$(document).ready(function() {

	// Switch current mockup
	function layout_preview(number){
		var image = 'mobile-mockups/mockup' + (number) + '.jpg';
		var background = 'background-' + (number);
		$('#image').attr('src', image);
		$('html').attr('class', background);
		$("#current-layout option[value="+ number +"]").attr("selected","selected");
	};

	// Get layout number from hash tag in URL
	var number = window.location.href.split('#')[1];
	if (number != undefined) {
		layout_preview(number);
	}

	// Use select drop down to change the layout number
	$('#current-layout').change(function() {
		var number = $(this).val();
		var hash = number;
        location.hash = hash;
		layout_preview(number);
	});

	$(".container").niceScroll({
		 cursorcolor:"#333",
		 cursorborder: "none"
	});

});
