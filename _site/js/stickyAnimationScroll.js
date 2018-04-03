$(document).ready(function($){


    var $fixedNav = $('.js-fixed');
    var $fixedNavTransparent = $('.js-fixed.bg-transparent');
    var $fixPadding = $('.padding-fixed');
    var $fixBrand = $('.width-logo-fixed');


    var Start = $fixedNav.offset().top + 10;
    var Until = Start + 300;
    var offset, opacity, actualPadding, actualWidthlogo;

    if ($('.padding-fixed').length) {
        var maxPadding = $fixPadding.css('padding-top').replace('px', '');
        var minPadding= 10;
        var difPadding= maxPadding - minPadding;
    }else{

    }
    if ($('.width-logo-fixed').length) {
        var maxWidth = $fixBrand.css('width').replace('px', '');
        var minWidth= 180;
        var difWidth= maxWidth - minWidth;
    }else{

    }



    $(window).bind('scroll', function(){

        offset = $(document).scrollTop();

        console.log('Scrolling' , {
            'offset' : offset,
            'start': Start,
            'until': Until
        });

        /* When scroll is on top */
        if( offset <= Start ){

            // Opacity
            opacity = 0;

            // Logo padding
            actualPadding = maxPadding;

            // Logo width
            actualWidthlogo = maxWidth;

            console.log({
                'actualPadding':actualPadding,
                'actualWidthlogo': actualWidthlogo
            });

        /* When user is scrolling  */
        }else if( (offset > Start) && (offset <= Until) ){

            // Opacity
            opacity = 0 + offset/Until;

            // Logo Padding
            actualPadding = maxPadding -(( (offset-Start) / Until ) * difPadding);

            // Logo Width
            actualWidthlogo = maxWidth - (( (offset-Start) / Until ) * difWidth);

            console.log({
                'actualPadding':actualPadding,
                'actualWidthlogo': actualWidthlogo
            });

        /* When scroll is out  */
        }else if( offset > Until ){

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