$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 50) {
    $('#navbar').fadeIn();
    $('#navbar-at-landing').addClass('invis');
  } else {
    $('#navbar').fadeOut();
    $('#navbar-at-landing').removeClass('invis');
  }
});