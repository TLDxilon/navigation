
$(document).ready(function($){

    /*Menú options lateral*/
    var $html           = $('html');
    var $changeOption = $('.js-option');
    var $openOptions = $('.open-options');
    var $closeOptions = $('.close-options');


    /*
     Para cerrar y abril el panel lateral
    */

    $openOptions.on('click', function(event){
        event.preventDefault();
        $html.addClass('panel-is-open');

    });
    $closeOptions.on('click', function(event){
        event.preventDefault();
        $html.removeClass('panel-is-open');

    });




    $changeOption.each(function(index) {
        $(this).on('click', function(){
            event.preventDefault();
            var dataValue         = $(this).data('value');
            var dataOption        = $(this).data('option');
            var dataElement       = $(this).data('element');
            var $element          = $(dataElement);

            // expresión regular que busca si esa clase existe ya
            // y la elimina
            $element.attr('class', function(i, c){
                var pattern = '(^|\\s)' + dataOption + '\\S+';
                var myReg  = new RegExp(pattern, "g");
                return c.replace(myReg, '');
            });

            // actualizo con la nueva clase
            $element.addClass(dataOption + dataValue);

            var widthLogo = $('.js-width-logo').outerWidth(true);
            var $logo2 = $('.logo-floating');
            $logo2.css('width', (widthLogo) + 'px');




            var $header  = $('header');  /* site header */


            var $fixedElement   = $header.find('.js-fixed');        /* check if there is a menu is fixed */
            var _isTransparent  = $header.find('.is-transparent');  /* check if there is a menu is transparent */


            /* if menu is Fixed */
            if ($fixedElement.length) {

                var _fixedElementIsSubnavButton = $fixedElement.hasClass('js-subnav-bottom');
                var heightFixedOffset = $fixedElement.offset().top;
                var _oldTextColor, _stickyBgColor;

                /* Foreground color when navbar is NOT sticky */
                // _oldTextColor = $fixedElement.css('color');


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

                        /* Background-color del menu fixed */
                        _stickyBgColor = $fixedElement.find('.js-background-color').css('background-color');

                        if (checkContrastForegroundColor(_stickyBgColor) === 'dark') {
                            $fixedElement.addClass('fg-dark');
                            $fixedElement.removeClass('fg-white');
                        } else {
                            $fixedElement.addClass('fg-white');
                            $fixedElement.removeClass('fg-dark');
                        }

                    } else {

                        if (_fixedElementIsSubnavButton) {
                            $fixedElement.addClass('subnav-bottom-absolute');
                        }

                        $fixedElement.removeClass('sticky');
                        $fixedElement.removeClass( getClassStartsWith( $fixedElement[0].className,'fg-') );
                        $fixedElement.addClass(_oldTextColor);
                    }


                });

            }/* _isFixed */

        });
    });


    var $sliderOptions = $('.option-slider');

    /*
     Range control init panel lateral
    */
    $sliderOptions.on("change", function () {

        var $this = $(this);
        var value           = $this.val();
        var dataValues         = $this.data('values');
        var dataOption        = $this.data('option');
        var dataElement       = $this.data('element');
        var $element          = $(dataElement);

        // expresión regular que busca si esa clase existe ya
        // y la actualiza
        $element.attr('class', function(i, c){
            var pattern = '(^|\\s)' + dataOption + '\\S+';
            var myReg  = new RegExp(pattern, "g");
            return c.replace(myReg, '');
        });

        $element.addClass(dataOption+ "-" + dataValues[value]);

        console.log("Clase: ." + dataOption+ "-" + dataValues[value]);


        /*
             Fix para corregir el padding del primer bloque en funcion de la altura del nav
           */

        var $header  = $('header');  /* site header */
        var $navBar  = $header.find('.navbar');   /* navbar */
        var $subNav  = $header.find('.subnav');   /* subnav */



        var $fixHeaderPadding = $('.fix-header-padding');
        var heightNavbar = $navBar.outerHeight(true);
        var heightSubnav = $subNav.outerHeight(true);

        if ($fixHeaderPadding.length) {

            $fixHeaderPadding.css({'padding-top'  : (heightNavbar) + 'px'});

            if ($subNav.hasClass('js-subnav-bottom')){
                $fixHeaderPadding.css({'padding-bottom' : (heightSubnav) + 'px'});
            }

        }
        /* Fix end */



        var $fixedNav = $('.js-fixed');

        var $fixedPadding = $('.padding-fixed');
        var $fixedBrand = $('.width-logo-fixed');

        var start = $fixedNav.offset().top + 10;
        var until = start + 300;
        var offset, opacity, actualPadding, actualWidthlogo;

        if ($('.padding-fixed').length) {
            var maxPadding = $fixedPadding.css('padding-top').replace('px', '');
            var minPadding= 10;
            var difPadding= maxPadding - minPadding;
        }else{

        }
        if ($('.width-logo-fixed').length) {
            var maxWidth = $fixedBrand.css('width').replace('px', '');
            var minWidth= 180;
            var difWidth= maxWidth - minWidth;
            console.log('maxWidth', maxWidth)
        }else{

        }



        $(window).bind('scroll', function(){

            offset = $(document).scrollTop();

            console.log('Scrolling' , {
                'offset' : offset,
                'start': start,
                'until': until
            });

            /* When scroll is on top */
            if( offset <= start ){


                // Logo padding
                actualPadding = maxPadding;

                // Logo width
                actualWidthlogo = maxWidth;

                console.log({
                    'actualPadding':actualPadding,
                    'actualWidthlogo': actualWidthlogo
                });

                /* When user is scrolling  */
            }else if( (offset > start) && (offset <= until) ){


                // Logo Padding
                actualPadding = maxPadding -(( (offset-start) / until ) * difPadding);

                // Logo Width
                actualWidthlogo = maxWidth - (( (offset-start) / until ) * difWidth);

                console.log({
                    'actualPadding':actualPadding,
                    'actualWidthlogo': actualWidthlogo
                });

                /* When scroll is out  */
            }else if( offset > until ){


                // Logo padding
                actualPadding = minPadding;

                // Logo width
                actualWidthlogo = minWidth;

                console.log({
                    'actualPadding':actualPadding,
                    'actualWidthlogo': actualWidthlogo
                });

            }

            /* Update css */


            if ($fixedPadding) {
                $fixedPadding.css({
                    'padding-top': actualPadding + 'px',
                    'padding-bottom': actualPadding + 'px'
                });
            }
            if ($fixedBrand) {
                $fixedBrand.css({
                    'width': actualWidthlogo + 'px'
                });
            }
        });


    });
});