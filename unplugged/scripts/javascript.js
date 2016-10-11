$(".photos").hide();
$(document).ready(function() {
  //mouseover to highlight
  $('.tour').on('mouseenter', function() {
    $(this).addClass('highlight');
    $(this).find('.per-night').animate({'top': '-14px', 'opacity': '1'}, 'fast');
  });
  $('.tour').on('mouseleave', function() {
    $(this).removeClass('highlight');
  });
  //click to show photos and slideout and hide those deployed (buttons still stick for region sorting)
  $(".see-details").on('click', function(event) {
    event.stopPropagation();
    event.preventDefault();
    $(this).closest('.tour').find('.photos').slideToggle();
    $(".photos").not($(this).closest(".tour").find(".photos")).slideUp();
  });
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
    $(".photos").slideUp();
    $(".tour").fadeOut("slow", function() {
    $(".tour").hide();
    $(".high-sierra").slideDown("medium");
    });
  });
  $("#socal").on("click",function() {
    $(".photos").slideUp();
    $(".tour").fadeOut("slow", function() {
    $(".tour").hide();
    $(".socal").slideDown("medium");
	});
  });
  $("#coast").on("click",function() {
    $(".photos").slideUp();
    $(".tour").fadeOut("slow", function() {
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
});