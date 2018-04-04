$(document).ready(function($){
    var $IsFixed        = $('.js-fixed');

    var $subnavBottom   = $('.js-subnav-bottom');
    var heightNavbar = $('.navbar').outerHeight(true);
    var heightSubnav = $('.subnav').outerHeight(true);



    $('.fix-header-padding').css('padding-top', (heightNavbar) + 'px').css('padding-bottom', (heightSubnav) + 'px');



    function checkContrastForegroundColor( color ) {

        var rgb = colorValues(color);

        //http://www.w3.org/TR/AERT#color-contrast
        var o = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) /1000);

        if(o > 125) {
            return 'dark';
        }else{
            return 'light';
        }


    }

    /*Subnav bottom sticky */

        var heightFixedOffset = $IsFixed.offset().top;

        console.log($IsFixed.offset().top);

        $(window).on('scroll', function () {

            if ($(window).scrollTop() > heightFixedOffset) {
                $IsFixed.addClass('sticky');
                $subnavBottom.removeClass('subnav-bottom-absolute');


                var color = $('.sticky').find('.js-background-color').css('background-color');
                if (checkContrastForegroundColor(color) === 'dark') {
                    $('.navbar-menu-inner, .navbar__tools').addClass('fg-dark');
                    $('.navbar-menu-inner, .navbar__tools').removeClass('fg-white');
                } else {
                    $('.navbar-menu-inner, .navbar__tools').addClass('fg-white');
                    $('.navbar-menu-inner, .navbar__tools').removeClass('fg-dark');
                }

            } else {
                $subnavBottom.addClass('subnav-bottom-absolute');
                $IsFixed.removeClass('sticky');

            }


        });


});