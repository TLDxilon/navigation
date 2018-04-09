var $header  = $('header');  /* site header */
var _isTransparent  = $header.find('.is-transparent');  /* check if there is a menu is transparent */

var url = $('.background-image').css('background-image');
var imageSrc = url.substr(5, url.indexOf('")')-5);

if(_isTransparent){


        var $element   = $header.find('.js-change-color');

        console.log( checkForegroundContrast(null,imageSrc) );
        console.log( $element);

        if(checkForegroundContrast(null,imageSrc) > 125) {

            $element.addClass('fg-dark');
            $element.removeClass('fg-white');

        }
        else{

            $element.addClass('fg-white');
            $element.removeClass('fg-dark');

        }



}



