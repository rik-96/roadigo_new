$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 80) {
    $('#navbar').fadeIn();
    $('#navbar').removeClass('responsive');
    $('#navbar-at-landing').addClass('invis');
  } else {
    $('#navbar').fadeOut();
    $('#navbar-at-landing').removeClass('invis');
  }
});