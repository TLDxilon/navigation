$(document).ready(function($){


    var $fixedNav = $('.js-fixed');
    var $fixedNavTransparent = $('.js-fixed.bg-transparent');
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
            actualPadding = maxPadding;

            // Logo width
            actualWidthlogo = maxWidth;

            console.log({
                'actualPadding':actualPadding,
                'actualWidthlogo': actualWidthlogo
            });

        /* When user is scrolling  */
        }else if( (offset > start) && (offset <= until) ){

            // Opacity
            opacity = 0 + offset/until;

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
            $fixedPadding.css({
                'padding-top': actualPadding + 'px',
                'padding-bottom': actualPadding + 'px'
            });
        }
        if ($('width-logo-fixed')) {
            $fixedBrand.css({
                'width': actualWidthlogo + 'px'
            });
        }
    });
});