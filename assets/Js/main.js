$(document).ready(function(){
    const imgItems = $('.slider li').length; // Número de slider
    console.log(imgItems);

    // Agregando paginación
    // for(i = 1; i <= imgItems; i++){

    // }

    $('.slider li').hide(); // Ocultando todos los slider
    $('.slider li:first').show(); // Muestra el primer slide
    $('.paginacion li:first').css({'color': '#000000'}); // Damos estilos al primer item de la pagina

});