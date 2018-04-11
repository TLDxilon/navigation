/*

Menú fixed que aparece por encima

 */


$(document).ready(function($){




    var lastScrollPosition = 0;
    var widthLogo       = $('.js-width-logo').outerWidth(true);
    var $navBarFixed    = $('.navbar-fixed');
    var $logo           = $('.logo-floating');


    $logo.css('width', (widthLogo) + 'px');





    $(window).on('scroll', function(){
        // Hago que baje al darle al scroll hacia arriba

        var newScrollPosition = window.scrollY;

        // Muestro la navegación al subir
        if (newScrollPosition < lastScrollPosition){

          //  console.log('newScrollPosition',newScrollPosition);
          //  console.log('lastScrollPosition',lastScrollPosition);


            // Oculta la navegación cuando está a la altura de la cabecera
            if (newScrollPosition < 500){
                $navBarFixed.addClass('is-hide');

            } else {
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