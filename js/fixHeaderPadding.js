$(document).ready(function($){

    /*
      Fix para corregir el padding del primer bloque en funcion de la altura del nav
    */

    var $header  = $('header');  /* site header */
    var $navBar  = $header.find('.navbar');   /* navbar */
    var $subNav  = $header.find('.subnav');   /* subnav */



    var $fixHeaderPadding = $header.find('.fix-header-padding');
    var heightNavbar = $navBar.outerHeight(true);
    var heightSubnav = $subNav.outerHeight(true);

    if ($fixHeaderPadding.length) {

        $fixHeaderPadding.css({'padding-top'  : (heightNavbar) + 'px'});

        if ($subNav.hasClass('js-subnav-bottom')){
            $fixHeaderPadding.css({'padding-bottom' : (heightSubnav) + 'px'});
        }

    }
    /* Fix end */

});