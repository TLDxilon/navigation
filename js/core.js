
//Header GLOBAL default options
var HEADER_MIN_PADDING = 10; // padding mínimo para el elemento fixed
var LOGO_MIN_SIZE      = 150; // tamaño mínimo del logo en fixed
var HEADER_LEEWAY      = 200; // space where magic happens!
var $MENU_MOBILE       = $('#menu'); // menu mobile


$(document).ready(function($){

    var $header  = $('header');  /* site header */

    /* Elemento fixed de la cabecera */
    var $fixedNav       = $header.find('.js-fixed');

    /* Custom mmenu options */
    var menuCustomize = {
        "extensions": [
            $MENU_MOBILE.data('extension-position'),
            $MENU_MOBILE.data('extension-theme'),
        ],
        "iconPanels": $MENU_MOBILE.data('icon-panels')

    };
    $('.logobar').imagesLoaded( function() {

    });
    ratioImgLogo();





    /* Check padding del primer bloque en funcion de la altura del nav */
    fixHeaderPadding();

    /* Check the background color and update foreground nav color */
    fixForegroundColor();

    $('body').animate({ opacity: 1 }, 80);

    /* Init mmenu with custom options */
    initMmenu(menuCustomize);
    var API = $MENU_MOBILE.data( "mmenu" );

    /* Init search behavior */
    initSearch();



    // If header is fixed
    if ($fixedNav.length) {

        initFixedHeader();

    }


});