$(document).ready(function($) {


    var $header  = $('header');  /* site header */


    var $fixedElement   = $header.find('.js-fixed');        /* check if there is a menu is fixed */
    var _isTransparent  = $header.find('.is-transparent');  /* check if there is a menu is transparent */


    /* Elemento que contien la clase para el color del texto (fg-'color') */
    var $fgChange = $('.js-change-color');


    if(_isTransparent.length){

        $fgChange.each(function(index) {

            console.log('% Oh estoy en el elemento ' + index + ' del EACH', 'background: #222; color: #eee');


            var $NextBLock = $('.site-header + * ');
            console.log('$NextBLock', $NextBLock);




            if($('.hero').length){
                var $Hero = $('.hero');
                var _getHeroFg = getClassStartsWith( $Hero[0].className,'fg-');
                console.log('_getHeroFg', _getHeroFg);
                $fgChange.addClass(_getHeroFg);

            }
            else{
                var _getNextBlockFg = getClassStartsWith( $NextBLock[0].className,'fg-');
                console.log('_getNextBlockFg', _getNextBlockFg);
                $fgChange.addClass(_getNextBlockFg);

            }
        });

    }
    else{
        $fgChange.each(function(index) {

            console.log('%c Oh estoy en el elemento ' + index + ' del EACH', 'background: #222; color: #eee');

            /* Elemento que contien la clase para el color del texto (fg-'color') */
            var $this = $(this);

            /* Leemos el color de fondo del elemento que js-change-color */
            var _bgCssColor = $this.find('.js-background-color').css('background-color');

            console.log('El color de fondo para este elemento es '
                + _bgCssColor + ' y le añado la clase "'+ checkContrastForegroundColor(_bgCssColor) + "'");



            /* Check para el contraste del color de fondo */
            if (checkContrastForegroundColor(_bgCssColor) === 'dark') {
                $fgChange.addClass('fg-dark');
                $fgChange.removeClass('fg-white');
            }
            else {
                $fgChange.addClass('fg-white');
                $fgChange.removeClass('fg-dark');
            }

        });
    }











    /* if menu is Fixed */
    if ($fixedElement.length){

        var _fixedElementIsSubnavButton = $fixedElement.hasClass('js-subnav-bottom');
        var heightFixedOffset = $fixedElement.offset().top;
        var _oldTextColor, _stickyBgColor;

        _oldTextColor = getClassStartsWith( $fixedElement[0].className,'fg-');

        console.log('old text color', _oldTextColor);

        /* on window scroll event */
        $(window).on('scroll', function () {

            if ($(window).scrollTop() > heightFixedOffset) {

                $fixedElement.addClass('sticky');

                if (_fixedElementIsSubnavButton) {
                    $fixedElement.removeClass('subnav-bottom-absolute');
                }

                if(_isTransparent.length){
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



            }
            else {

                if (_fixedElementIsSubnavButton) {
                    $fixedElement.addClass('subnav-bottom-absolute');
                }

                $fixedElement.removeClass('sticky');


                if (_isTransparent.length) {
                    $fixedElement.removeClass( getClassStartsWith( $fixedElement[0].className,'fg-') );
                    $fixedElement.addClass(_oldTextColor);
                }


            }




        });




    }/* _isFixed */




});

