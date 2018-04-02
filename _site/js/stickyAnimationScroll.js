$(document).ready(function($){


    var $fixedNav = $('.js-fixed');
    var $fixedNavTransparent = $('.js-fixed.bg-transparent');
    var $fixPadding = $('.padding-fixed');
    var $fixBrand = $('.width-logo-fixed');

    $fixPadding.animate({


    }, 1500 );




    var Start = $fixedNav.offset().top;
    if ($('.padding-fixed').length) {
        var maxPadding = $fixPadding.css('padding-top').replace('px', '');
        var minPadding= 10;
        var difPadding= maxPadding - minPadding;
    }else{

    }
    if ($('.width-logo-fixed').length) {
        var maxWidth = $fixPadding.css('width').replace('px', '');
        var minWidth= 180;
        var difWidth= maxWidth - minWidth;
    }else{

    }

    var Until = Start + 80;
    var offset, opacity, actualPadding;


    $(window).bind('scroll', function(){

        offset = $(document).scrollTop();

        // console.log('MAX PADDING',maxPadding);
        // console.log('MIN PADDING',minPadding);
        // console.log('DIFERENCIA PADDING',difPadding);
        console.log('MAX WIDTH',maxWidth);
        console.log('MIN WIDTH',minWidth);
        console.log('DIFERENCIA WIDTH',difWidth);

        /* When scroll is on top */
        if( offset<=Start ){

            // Opacity
            opacity = 0;

            // Logo padding
            actualPadding = maxPadding;

            // Logo width
            actualWidthlogo = maxWidth;



        /* When user is scrolling  */
        }else if( offset <= Until ){

            // Opacity
            opacity = 0 + offset/Until;

            // Logo Padding
            actualPadding = maxPadding -((offset/Until) * difPadding);
            // console.log({
            //    'offset' : offset,
            //    'until' : Until,
            //    'difPadding': difPadding,
            //     'actual': actualPadding
            // });

            // Logo Width
            actualWidthlogo = maxWidth -((offset/Until) * difWidth);
            console.log({
                'offset' : offset,
                'until' : Until,
                'difPadding': difWidth,
                'actual': actualWidthlogo
            });


        /* When scroll is out  */
        }else if( offset > Until ){

            // Opacity
            opacity=1;

            // Logo padding
            actualPadding = minPadding;

            // Logo width
            actualWidthlogo = minWidth;

        }

        /* Update css */
        $fixedNavTransparent.css('background-color','rgba(0, 0, 0,'+ opacity + ')');

        if ($('padding-fixed')) {
            $fixPadding.css({
                'padding-top': actualPadding + 'px',
                'padding-bottom': actualPadding + 'px'
            });
        }
        if ($('width-logo-fixed')) {
            $fixBrand.css({
                'width': actualWidthlogo + 'px'
            });
        }
    });
});