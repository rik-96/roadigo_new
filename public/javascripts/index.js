function appearDropDown(){
  var x = document.getElementById("navbar");
  if (x.className === "topnav" || x.className === "topnav prod-navbar"){
    $('.topnav').addClass("responsive");
    $('.responsive').css('opacity');
    $('.responsive').addClass('in');
    //x.className += " responsive";
  } else if (x.className === "topnav responsive") {
    x.className = "topnav";
  } else {
    x.className = "topnav prod-navbar";
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