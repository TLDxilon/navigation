var $subnav         = $('.js-subnav');

var $subnavTop      = $('.js-subnav-top');


var heightNavbar = $('.navbar').outerHeight(true);
var heightSubnav = $subnav.outerHeight(true);
var heightSubnavTopOffset = $subnavTop.offset().top;



$('.fix-header-padding').css('padding-top', (heightNavbar) + 'px').css('padding-bottom', (heightSubnav) + 'px');


/*Subnav bottom sticky */




console.log(heightSubnavTopOffset);
$(window).on('scroll', function(){
    if ( $(window).scrollTop() > heightSubnavTopOffset ){
        $subnavTop.addClass('sticky');

    } else {

        $subnavTop.removeClass('sticky');
    }
});

