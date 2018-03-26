var $subnav         = $('.js-subnav');

var $subnavBottom   = $('.js-subnav-bottom');



var heightNavbar = $('.navbar').outerHeight(true);
var heightSubnav = $subnav.outerHeight(true);
var heightSubnavBottomOffset = $subnavBottom.offset().top;

var heightSubnavBottomOffsetAll = heightSubnavBottomOffset + heightNavbar + heightSubnav;

$('.fix-header-padding').css('padding-top', (heightNavbar) + 'px').css('padding-bottom', (heightSubnav) + 'px');


/*Subnav bottom sticky */




console.log(heightSubnavBottomOffsetAll);
$(window).on('scroll', function(){
    if ( $(window).scrollTop() > heightSubnavBottomOffsetAll ){
        $subnavBottom.addClass('sticky');
        $subnavBottom.removeClass('subnav-bottom-absolute');
    } else {
        $subnavBottom.addClass('subnav-bottom-absolute');
        $subnavBottom.removeClass('sticky');
    }
});

