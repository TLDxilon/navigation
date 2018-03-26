var $subnav         = $('.js-subnav');
var $subnavTop      = $('.js-subnav-top');

var heightNavbar = $('.navbar').outerHeight(true);
var heightSubnav = $subnav.outerHeight(true);



$('.fix-header-padding').css('padding-top', (heightNavbar) + 'px').css('padding-bottom', (heightSubnav) + 'px');


/*Subnav bottom sticky */



if ($subnav.hasClass( "js-subnav-top" ) ) {
    console.log("Tiene la clase js-subnav-top", $subnav.hasClass( "js-subnav-top" ));
    var heightSubnavTopOffset = $subnavTop.offset().top;
    console.log(heightSubnavTopOffset);
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > heightSubnavTopOffset) {
            $subnavTop.addClass('sticky');

        } else {

            $subnavTop.removeClass('sticky');
        }
    });
}

