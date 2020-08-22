$(document).ready(function () {
  let boton = $(".hamburguer");
  let menu = $("header nav");
  let top = $('.top ');

  boton.on('click', function () {
    menu.slideToggle(1000);
  });

  menu.on('click', function() {
      menu.fadeOut();
  });

  top.on('click', function(){
    $('html body').animate({scrollTop: 0}, 500);
  })
});
