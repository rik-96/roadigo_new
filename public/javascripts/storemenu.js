function checkdrop(){
  if($('.dropdown-content').css('display') == 'none'){
    $('.dropdown-content').css('display', 'block');
  } else {
    $('.dropdown-content').css('display', 'none');
  }
}