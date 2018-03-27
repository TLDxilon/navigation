$(document).ready(function($){


    var $fixedNav = $('.js-fixed');
    var $fixedNavTransparent = $('.js-fixed.bg-transparent');
    var $fixPadding = $('.padding-fixed');


    $fixPadding.animate({


    }, 1500 );




    var Start = $fixedNav.offset().top;

    var maxPadding= $fixPadding.css('padding-top').replace('px','');
    var minPadding= 10;
    var difPadding= maxPadding - minPadding;
    var Until = 80;
    var offset, opacity, actualPadding;


    $(window).bind('scroll', function(){

        offset = $(document).scrollTop();

        console.log('MAX PADDING',maxPadding);
        console.log('MIN PADDING',minPadding);
        console.log('DIFERENCIA PADDING',difPadding);


        /* When scroll is on top */
        if( offset<=Start ){

            // Opacity
            opacity = 0;

            // Logo padding
            actualPadding = maxPadding;

        /* When user is scrolling  */
        }else if( offset <= Until ){

            // Opacity
            opacity = 0 + offset/Until;

            // Logo Padding
            actualPadding = maxPadding -((offset/Until) * difPadding);
            console.log({
               'offset' : offset,
               'until' : Until,
               'difPadding': difPadding,
                'actual': actualPadding
            });


        /* When scroll is out  */
        }else if( offset > Until ){

            // Opacity
            opacity=1;

            // Logo padding
            actualPadding = minPadding;

        }

        /* Update css */
        $fixedNavTransparent.css('background-color','rgba(255, 255, 255,'+ opacity + ')');

        if ($('padding-fixed')) {
            $fixPadding.css({
                'padding-top': actualPadding + 'px',
                'padding-bottom': actualPadding + 'px'
            });
        }
    });
});