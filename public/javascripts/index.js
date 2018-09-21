function appearDropDown(){
  var x = document.getElementById("navbar");
  var y = document.getElementById("hrhead");
  if (x.className === "topnav" || x.className === "topnav sticky"){
    x.className += " responsive";
    y.className += " invis";
  } else if (x.className === "topnav responsive") {
    x.className = "topnav";
    y.className = "hrofhead";
  } else {
    x.className = "topnav sticky";
    y.className = "hrofhead";
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

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    console.log(slides);
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}