


if ($('.dissapear').length) {
    $(window).bind('scroll', function () {
        var dissapear = $('.dissapear');
        var offsetDissapear = dissapear.offset().top;
        console.log("OFFSET DISSAPEAR", offsetDissapear);
        var fadeStart = 100;
        var fadeUntil = offsetDissapear + 400;

        var offset = $(document).scrollTop()
            , opacity = 0
        ;
        if (offset <= fadeStart) {
            opacity = 1;
        } else if (offset <= fadeUntil) {
            opacity = 1 - offset / fadeUntil;
        }
        dissapear.css('opacity', opacity);
    });
}