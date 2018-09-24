$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 50) {
    $('#navbar').fadeIn();
  } else {
    $('#navbar').fadeOut();
  }
});