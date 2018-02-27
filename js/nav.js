$(document).ready(function(){

var $navBarFixed = $('.navbar-fixed');


$(window).on('scroll', function(){
    // Hago que baje al darle al scroll hacia arriba
    var newScrollPosition = window.scrollY;

    // Detectamos que el scroll sube
    if (newScrollPosition < lastScrollPosition){

        console.log('newScrollPosition', newScrollPosition);
        console.log('lastScrollPosition',lastScrollPosition);


        // Oculta la navegación cuando está a la altura de la cabecera
        if (newScrollPosition < 400){
            $navBarFixed.addClass('is-hide');
        } else {
            // Muestro la navegación al subir
            $navBarFixed.removeClass('is-hide');
        }

    }

    // Oculto la navegación al bajar
    if (newScrollPosition > lastScrollPosition){
        $navBarFixed.addClass('is-hide');
    }

        lastScrollPosition = newScrollPosition;


    });
});