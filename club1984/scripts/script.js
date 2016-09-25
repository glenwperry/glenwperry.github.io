var slide1bottom = $("#slide1").offset().top + $("#slide1").height();

$(window).on("scroll",function() {
	var stop=Math.round($(window).scrolltop());

	if(stop > slide1bottom) {
		$("body:before").addClass("red");
	} else {
		$("body.before").removeClass("red");
	}

});