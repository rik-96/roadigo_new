$(window).on('load', function() {
  setTimeout(function() {
    $('#overlay').fadeOut();
  }, 2000)
});


function appearDropDown(){
  var x = document.getElementById("navbar");
  if (x.className === "topnav topnav2" || x.className === "topnav topnav2 prod-navbar"){
    $('.topnav2').addClass("responsive");
    $('.responsive').css('opacity');
    $('.responsive').addClass('in');
    $('#bar-icon').hide();
    $('#close-icon').show();
    //x.className += " responsive";
  } else if (x.className === "topnav topnav2 responsive") {
    x.className = "topnav topnav2";
    $('#close-icon').hide();
    $('#bar-icon').show();
  } else {
    x.className = "topnav topnav2 prod-navbar";
    $('#close-icon').hide();
    $('#bar-icon').show();
  }
}

function appearDropDown2(){
  var x = document.getElementById("navbar-at-landing");
  if (x.className === "topnav topnav1" || x.className === "topnav topnav1 prod-navbar"){
    $('.topnav1').addClass("responsive");
    $('.responsive').css('opacity');
    $('.responsive').addClass('in');
    //x.className += " responsive";
  } else if (x.className === "topnav topnav1 responsive") {
    x.className = "topnav topnav1";
  } else {
    x.className = "topnav topnav1 prod-navbar";
  }
}

setTimeout(function(){
  $('#tagline').fadeIn();
}, 1000);

setTimeout(function(){
  $('#home-title').fadeIn();
}, 1000);

var animateHTML = function() {
  var elems;
  var windowHeight;
  function init() {
    elems = document.querySelectorAll('.hidden-view');
    if ($(window).width() < 1025){
        for (var i = 0; i < elems.length; i++) {
            elems[i].className = elems[i].className.replace(
              'hidden',
              ''
            );
        }
    return
    }
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }
  function addEventHandlers() {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  }
  function checkPosition() {
    for (var i = 0; i < elems.length; i++) {
      var positionFromTop = elems[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace(
          'hidden-view',
          'fade-in-element'
        );
      }
    }
  }
  return {
    init: init
  };
};
animateHTML().init();

function openImg(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expanded-img");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
} 