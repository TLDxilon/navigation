
$(document).ready(function($){



    /*Menú options lateral*/
    var $html           = $('html');
    var $changeOption = $('.js-option');
    var $openOptions = $('.open-options');
    var $closeOptions = $('.close-options');


    /*
     Para cerrar y abril el panel lateral
    */

    $openOptions.on('click', function(){
        event.preventDefault();
        $html.addClass('panel-is-open');

    });
    $closeOptions.on('click', function(){
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

            function checkContrastForegroundColor( color ) {

                var rgb = colorValues(color);

                //http://www.w3.org/TR/AERT#color-contrast
                var o = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) /1000);

                if(o > 125) {
                    return 'dark';
                }else{
                    return 'light';
                }


            }

            var color = $('.navbar').find('.js-background-color').css('background-color');

            if (checkContrastForegroundColor(color) === 'dark') {
                $('.navbar-logo, .subnav').addClass('fg-dark');
                $('.navbar-logo, .subnav').removeClass('fg-white');
            } else {
                $('.navbar-logo, .subnav').addClass('fg-white');
                $('.navbar-logo, .subnav').removeClass('fg-dark');
            }




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


        var heightNavbar = $('.navbar').outerHeight(true);
        var heightSubnav = $('.subnav').outerHeight(true);


        $('.fix-header-padding').css('padding-top', (heightNavbar) + 'px').css('padding-bottom', (heightSubnav) + 'px');



        var $fixedNav = $('.js-fixed');
        var $isTransparent = $('.is-transparent');
        var $background = $('.is-transparent .js-fixed-background');
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