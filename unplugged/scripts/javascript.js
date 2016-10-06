$(".details").hide();
$(".slideout").hide();
$(document).ready(function() {
  //mouseover to highlight
  $('.tour').on('mouseenter', function() {
    $(this).addClass('highlight');
    $(this).find('.per-night').animate({'top': '-14px', 'opacity': '1'}, 'fast');
  });
  $('.tour').on('mouseleave', function() {
    $(this).removeClass('highlight');
  });
  //click to show details and slideout
  $('.see-details').on('click', function(event) {
    event.stopPropagation();
    event.preventDefault();
    $(this).closest('.tour').find('.details').slideToggle();
    $(this).closest('.tour').find('.slideout').slideToggle();
  });
  //nights auto multiply price
    $(".cashtotal").prepend("$");
    $('.nights').on('keyup', function() {
    var nights = +$(this).val();
    var dailyPrice = +$(this).closest(".tour").data("daily-price");
    $('.cashtotal').text(nights * dailyPrice);
    $('.nights-count').text($(this).val());
  });
  //autofill 3 on focus
    $('.nights').on('focus', function() {
    $('.nights').val(3);
  });	
});