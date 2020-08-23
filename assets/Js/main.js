$(document).ready(function () {
  let boton = $(".hamburguer");
  let menu = $("header nav");
  let top = $(".top ");
  // Menu desplegable movil
  $(window).on("resize", function (e) {
    checkScreenSize();
  });

  checkScreenSize();

  function checkScreenSize() {
    let newWindowWidth = $(window).width();
    if (newWindowWidth < 1200 ) {
      boton.on("click", function () {
        menu.slideToggle(1000);
      });
    
      menu.on("click", function () {
        menu.fadeOut();
      });

    }
  }

  // Boton subir a seccion de incio
  top.on("click", function () {
    $("html body").animate({ scrollTop: 0 }, 500);
  });

  top.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      top.fadeIn();
    } else {
      top.fadeOut();
    }
  });
});
