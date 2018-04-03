$(document).ready(function($){
    var $IsFixed        = $('.js-fixed');

    var $subnavBottom   = $('.js-subnav-bottom');
    var heightNavbar = $('.navbar').outerHeight(true);
    var heightSubnav = $('.subnav').outerHeight(true);



    $('.fix-header-padding').css('padding-top', (heightNavbar) + 'px').css('padding-bottom', (heightSubnav) + 'px');


    /*Subnav bottom sticky */

        var heightFixedOffset = $IsFixed.offset().top + 1;

        console.log($IsFixed.offset().top);

        $(window).on('scroll', function () {
            if ($(window).scrollTop() > heightFixedOffset) {
                $IsFixed.addClass('sticky');
                $subnavBottom.removeClass('subnav-bottom-absolute');

            } else {
                $subnavBottom.addClass('subnav-bottom-absolute');
                $IsFixed.removeClass('sticky');
            }
        });


});