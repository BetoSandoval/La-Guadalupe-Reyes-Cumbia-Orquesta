$(document).ready(function () {
  let boton = $(".hamburguer");
  let menu = $("header nav");

  boton.on('click', function () {
    menu.slideToggle(1000);
  });

  menu.on('click', function() {
      menu.fadeOut();
  });
});
