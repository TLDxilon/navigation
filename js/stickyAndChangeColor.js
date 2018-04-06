$(document).ready(function($) {


    var $header  = $('header');  /* site header */


    var $fixedElement   = $header.find('.js-fixed');        /* check if there is a menu is fixed */
    var _isTransparent  = $header.find('.is-transparent');  /* check if there is a menu is transparent */


    /* if menu is Fixed */
    if ($fixedElement.length){

        var _fixedElementIsSubnavButton = $fixedElement.hasClass('js-subnav-bottom');
        var heightFixedOffset = $fixedElement.offset().top;
        var _oldTextColor, _stickyBgColor;



        // expresión regular que busca una clase que empiece por:
        function getClassStartsWith(t,n){var r=$.grep(t.split(" "),function(t,r){return 0===t.indexOf(n);}).join();return r||!1;}

        _oldTextColor = getClassStartsWith( $fixedElement[0].className,'fg-');




        /* on window scroll event */
        $(window).on('scroll', function () {

            if ($(window).scrollTop() > heightFixedOffset) {

                $fixedElement.addClass('sticky');

                if (_fixedElementIsSubnavButton) {
                    $fixedElement.removeClass('subnav-bottom-absolute');
                }

                if(_isTransparent){
                    /* Background-color del menu fixed */
                    _stickyBgColor = $fixedElement.find('.js-background-color').css('background-color');

                    if (checkContrastForegroundColor(_stickyBgColor) === 'dark') {
                        $fixedElement.addClass('fg-dark');
                        $fixedElement.removeClass('fg-white');
                    }
                    else {
                        $fixedElement.addClass('fg-white');
                        $fixedElement.removeClass('fg-dark');
                    }
                }



            } else {

                if (_fixedElementIsSubnavButton) {
                    $fixedElement.addClass('subnav-bottom-absolute');
                }

                $fixedElement.removeClass('sticky');


                if (_isTransparent) {
                $fixedElement.removeClass( getClassStartsWith( $fixedElement[0].className,'fg-') );
                    $fixedElement.addClass(_oldTextColor);
                }


            }


        });


        /* Mientras no se hace fixed y no es transparente cógeme el color según el fondo si no es transparente*/


            _stickyBgColor = $fixedElement.find('.js-background-color').css('background-color');
            console.log('_stickyBgColor', _stickyBgColor);
            if (checkContrastForegroundColor(_stickyBgColor) === 'dark') {
                $fixedElement.addClass('fg-dark');
                $fixedElement.removeClass('fg-white');
            }
            else {
                $fixedElement.addClass('fg-white');
                $fixedElement.removeClass('fg-dark');
            }
        if (_isTransparent) {
            $fixedElement.removeClass( getClassStartsWith( $fixedElement[0].className,'fg-') );
            $fixedElement.addClass(_oldTextColor);
        }




    }/* _isFixed */


    });


