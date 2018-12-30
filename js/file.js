$(document).ready(function(){
  $('.navbar-toggler').click(function(){
    if($(this).attr('data-click-state') == 1) {
      $(this).attr('data-click-state', 0)
      $('.img').css('top', '0')
    } else {
      $(this).attr('data-click-state', 1)
      $('.img').css('top', '41vh')
    }
  });
});

// TODO:
//       cuando se aplica esta funcion
//       1) animar la caída de la imagen
//       2) ajustar el resto de secciones
//
