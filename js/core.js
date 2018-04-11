
//Header GLOBAL default options
var HEADER_MIN_PADDING = 10; // padding mínimo para el elemento fixed
var LOGO_MIN_WIDTH     = 180; // ancho mínimo del logo en fixed
var HEADER_LEEWAY      = 200; // space where magic happens!

$(document).ready(function($){

    /*
        Animación de opacidad, tamaño del logo y padding de la cabecera cuando es fixed y hacemos scroll
     */
    var $header  = $('header');  /* site header */

    /* Elemento fixed de la cabecera */
    var $fixedNav       = $header.find('.js-fixed');


    // If header is fixed
    if ($fixedNav.length) {

        initFixedHeader();

    }

    /* Check padding del primer bloque en funcion de la altura del nav */
    fixHeaderPadding();


    /* Check the background and refresh the foreground */
    refreshForeground();


    /* Init mmenu with custom options */
    initMmenu(menuCustomize);


});