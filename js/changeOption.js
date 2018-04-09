$(document).ready(function($){

    /*Menú options lateral*/
    var $html           = $('html');
    var $changeOption = $('.js-option');
    var $changeOptionColor = $('.js-option-color');
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




        });

    });


    $changeOptionColor.each(function(index) {
        $(this).on('click', function(){
            event.preventDefault();
            var dataValue         = $(this).data('value');
            var dataOption        = $(this).data('option');
            var dataElement       = $(this).data('element');
            var $element          = $(dataElement);
            var _BgColor;

            // expresión regular que busca si esa clase existe ya
            // y la elimina
            $element.attr('class', function(i, c){
                var pattern = '(^|\\s)' + dataOption + '\\S+';
                var myReg  = new RegExp(pattern, "g");
                return c.replace(myReg, '');
            });

            // actualizo con la nueva clase
            $element.addClass(dataOption + dataValue);

            /* Background-color del menu  */
            _BgColor = $element.css('background-color');
            //* Elemento que actualiza el fg-
            var $fgChange = $element.parents( ".js-change-color" );
            //Compruebo el ratio de color
            if (checkContrastForegroundColor(_BgColor) === 'dark') {
                $fgChange.addClass('fg-dark');
                $fgChange.removeClass('fg-white');
            }
            else {
                $fgChange.addClass('fg-white');
                $fgChange.removeClass('fg-dark');
            }



            /*
            /*Aquí vuelvo a poner el javascript del stickyAnimation.js para actualizarlo respecto la opacidad*/


            var $fixedNav = $('.js-fixed');
            var $isTransparent = $('.is-transparent');
            var $background = $('.is-transparent .js-background');


            var start = $fixedNav.offset().top ;
            var until = start + 300;
            var offset, opacity;




            $(window).bind('scroll', function(){

                offset = $(document).scrollTop();

                console.log('Scrolling' , {
                    'offset' : offset,
                    'start': start,
                    'until': until
                });

                /* When scroll is on top */
                if( offset <= start ){

                    // Opacity
                    opacity = 0;



                    if ($isTransparent) {
                        // background on scroll becomes opacity 1 -> true
                        $background.css({'opacity': '' });
                    }
                }

                /* When sticky starts */
                else {

                    /* When user is scrolling  */
                    if( (offset > start) && (offset <= until) ){

                        // Opacity
                        opacity = 0 + (offset-start)/until;



                    }

                    /* When scroll is out  */
                    else if( offset > until ){
                        // Opacity
                        opacity=1;

                    }

                    if ($isTransparent) {
                        // background on scroll becomes opacity 1 -> true
                        $background.css({'opacity': opacity });
                    }


                }


            });
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


        /*Aquí vuelvo a poner el javascript del fixHeaderPadding.js para actualizarlo al cambiar tamaño de nav*/
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


        /*
        /*Aquí vuelvo a poner el javascript del stickyAnimantion.js para actualizarlo al cambiar tamaños*/


        var $fixedNav = $('.js-fixed');
        var $isTransparent = $('.is-transparent');
        var $background = $('.is-transparent .js-background');
        var $fixedPadding = $('.padding-fixed');
        var $fixedBrand = $('.width-logo-fixed');

        var start = $fixedNav.offset().top ;
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
            if(maxWidth <= 180){
                minWidth = maxWidth;
            }
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

                // Opacity
                opacity = 0;

                // Logo padding
                //actualPadding = maxPadding;

                // Logo width
                //actualWidthlogo = maxWidth;

                console.log({
                    'actualPadding':actualPadding,
                    'actualWidthlogo': actualWidthlogo
                });

                if ($fixedPadding) {
                    $fixedPadding.css({
                        'padding-top': '',
                        'padding-bottom': ''
                    });
                }
                if ($fixedBrand) {
                    $fixedBrand.css({
                        'width': ''
                    });
                }
                if ($isTransparent) {
                    // background on scroll becomes opacity 1 -> true
                    $background.css({'opacity': '' });
                }
            }

            /* When sticky starts */
            else {

                /* When user is scrolling  */
                if( (offset > start) && (offset <= until) ){

                    // Opacity
                    opacity = 0 + (offset-start)/until;

                    // Logo Padding
                    actualPadding = maxPadding -(( (offset-start) / until ) * difPadding);

                    // Logo Width
                    actualWidthlogo = maxWidth - (( (offset-start) / until ) * difWidth);

                    console.log({
                        'actualPadding':actualPadding,
                        'actualWidthlogo': actualWidthlogo
                    });


                }

                /* When scroll is out  */
                else if( offset > until ){

                    // Opacity
                    opacity=1;

                    // Logo padding
                    actualPadding = minPadding;

                    // Logo width
                    actualWidthlogo = minWidth;

                    console.log({
                        'actualPadding':actualPadding,
                        'actualWidthlogo': actualWidthlogo
                    });

                }

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
                if ($isTransparent) {
                    // background on scroll becomes opacity 1 -> true
                    $background.css({'opacity': opacity });
                }


            }


        });



    });
});