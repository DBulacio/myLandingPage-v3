$(document).ready(function(){
  $('.navbar-toggler').click(function(){
    if($(this).attr('data-click-state') == 1) {
      $(this).attr('data-click-state', 0)
      $('.img').css('padding-top', '0')
      $('.showcase h1').css('padding-top', '2rem')
    } else {
      $(this).attr('data-click-state', 1)
      $('.img').css('padding-top', '16.48rem')
      $('.showcase h1').css('padding-top', '7.5rem')
    }
  });
});

// TODO:
//       cuando se aplica esta funcion
//       1) animar la caída de la imagen
//
