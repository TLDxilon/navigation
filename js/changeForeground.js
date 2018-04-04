
$(document).ready(function($){
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

    // var color = $('.navbar').find('.js-background-color').css('background-color');
    //
    // if (checkContrastForegroundColor(color) === 'dark') {
    //     $('.navbar-menu-inner, .navbar__tools').addClass('fg-dark');
    //     $('.navbar-menu-inner, .navbar__tools').removeClass('fg-white');
    // } else {
    //     $('.navbar-menu-inner, .navbar__tools').addClass('fg-white');
    //     $('.navbar-menu-inner, .navbar__tools').removeClass('fg-dark');
    // }
});