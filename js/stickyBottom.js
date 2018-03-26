var $subnav         = $('.js-subnav');
var $subnavBottom   = $('.js-subnav-bottom');


var heightNavbar = $('.navbar').outerHeight(true);
var heightSubnav = $subnav.outerHeight(true);






$('.fix-header-padding').css('padding-top', (heightNavbar) + 'px').css('padding-bottom', (heightSubnav) + 'px');


/*Subnav bottom sticky */


if ($subnav.hasClass( "js-subnav-bottom" ) ) {
    console.log("Tiene la clase js-subnav-bottom", $subnav.hasClass( "js-subnav-bottom" ));

    var heightSubnavBottomOffset = $subnavBottom.offset().top;

    console.log(heightSubnavBottomOffset);

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > heightSubnavBottomOffset) {
            $subnavBottom.addClass('sticky');
            $subnavBottom.removeClass('subnav-bottom-absolute');
        } else {
            $subnavBottom.addClass('subnav-bottom-absolute');
            $subnavBottom.removeClass('sticky');
        }
    });


}