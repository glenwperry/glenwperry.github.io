
$(document).ready(function() {
  console.log("jquery is ready");
});
  //mouseover to highlight
  $('.tour').on('mouseenter', function() {
  	$(this).addClass('highlight');
    $(this).find('.total').animate({'font-size': '1.1em'}, 'fast');
    $(this).find(".total").animate({"font-size" : "1em"}, "fast");
  });
  $('.tour').on('mouseleave', function() {
  	$(this).removeClass('highlight');
  });
  //click to show photos and slideout and hide those deployed
  $(".see-details").on('click', function(event) {
    $(this).closest('.tour').find('.photos').slideToggle();
    $(".photos").not($(this).closest(".tour").find(".photos")).slideUp();
  });
  //photo caption on mouseover
  // $('.photos').on('mouseenter', 'li', function() {
  //   $(this).find("span").slideToggle();
  // });
  //nights auto multiply price
  $(".cashtotal").prepend("$");
  $('.nights').on('keyup change', function() {
  	var nights = +$(this).closest(".tour").find(".nights").val();
  	var dailyPrice = +$(this).closest(".tour").data("daily-price");
  	$(this).closest(".tour").find(".cashtotal").text(Math.round(nights * dailyPrice));
  	$(this).closest(".tour").find(".nights-count").text(nights);
  	$(this).closest(".tour").find(".cashtotal").prepend("$");
  });
  //error highlight if below 1 night
  $(".nights").on("keyup change", function() {
  	if($(this).val() < 1) {
  //prevent going below zero nights
  $(this).val("0");
  $(this).closest("div").addClass("has-error");
  var nights = +$(this).closest(".tour").find(".nights").val();
  var dailyPrice = +$(this).closest(".tour").data("daily-price");
  $(this).closest(".tour").find(".cashtotal").text(Math.round(nights * dailyPrice));
  $(this).closest(".tour").find(".nights-count").text(nights);
  $(this).closest(".tour").find(".cashtotal").prepend("$");
}
  //forget error class on positive
  if($(this).val() > 0) {
  	$(this).closest("div").removeClass("has-error");
  }
});
    //sort by region
    $("#high-sierra").on("click",function() {
    	$(".tour").fadeOut("fast", function() {
    		$(".tour").hide();
    		$(".high-sierra").slideDown("medium");
    	});
    });
    $("#socal").on("click",function() {
    	$(".tour").fadeOut("fast", function() {
    		$(".tour").hide();
    		$(".socal").slideDown("medium");
    	});
    });
    $("#coast").on("click",function() {
    	$(".tour").fadeOut("fast", function() {
    		$(".tour").hide();
    		$(".coast").slideDown("medium");
    	});
    });
    $("#all").on("click",function() {
    	$(".photos").slideUp();
    	$(".tour").fadeIn("medium");
    });
  //autofill 3 on load
  $('.nights').val(3);