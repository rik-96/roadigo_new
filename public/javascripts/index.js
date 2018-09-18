function appearDropDown(){
  var x = document.getElementById("navbar");
  if (x.className === "topnav" || x.className === "topnav sticky"){
    x.className += " responsive";
    console.log("yeo")
  } else if (x.className === "topnav responsive") {
    x.className = "topnav";
    console.log('naa');
  } else {
    x.className = "topnav sticky";
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
    console.log(elems);
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