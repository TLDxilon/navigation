$(document).ready(function($){
    var lastScrollPosition = 0;
    var widthLogo       = $('.js-width-logo').outerWidth(true);
    var $navBarFixed    = $('.navbar-fixed');
    var $searchBar      = $('.js-searchbar');
    var $searchBarFixed = $('.js-fixed-searchbar');
    var $backdrop       = $('.backdrop');
    var $body           = $('body');
    var $html           = $('html');
    var $logo           = $('.logo-floating');
    var $menuMobile     = $('#menu');







    /* Custom mmenu options */
    var menuCustomize = {
        "extensions": [
            $menuMobile.data('extension-position'),
            $menuMobile.data('extension-theme'),
        ],
        "iconPanels": $menuMobile.data('icon-panels')

    };

    /*
     * initMmenu funtcion
     * @options: object with custom mmenu options
     *
     */
    function initMmenu(options) {

        var menuDefault = {
        "extensions": [
            "pagedim-black",
            "theme-dark",
            "fx-menu-fade",
            "listview-50",
            "fx-panels-slide-100",
            "border-full"
        ],
        "iconPanels": true,
        "navbars": [
            {
                "position": "bottom",
                "content": [
                    "<a class=\"social-item fg-gray\" href=\"{{ site.twitter }}\"><span class=\"icon icon-twitter\"></span></a>",
                    "<a class=\"social-item fg-gray\" href=\"{{ site.pinterest }}\"><span class=\"icon icon-pinterest\"></span></a>",
                    "<a class=\"social-item fg-gray\" href=\"{{ site.linkedin }}\"><span class=\"icon icon-linkedin\"></span></a>",
                    "<a class=\"social-item fg-gray\" href=\"{{ site.twitter }}\"><span class=\"icon icon-twitter\"></span></a>",
                    "<a class=\"social-item fg-gray\" href=\"{{ site.pinterest }}\"><span class=\"icon icon-pinterest\"></span></a>",
                    "<a class=\"social-item fg-gray\" href=\"{{ site.linkedin }}\"><span class=\"icon icon-linkedin\"></span></a>"
                ]
            }
        ]
    };

        var menuOptions = $.extend({}, menuDefault, options);

        console.log("calling mmenu!!!");
        $menuMobile.mmenu(menuOptions);

    }// initMmenu


    /* Init mmenu with custom options */
    initMmenu(menuCustomize);

    var API = $menuMobile.data( "mmenu" );


    $logo.css('width', (widthLogo) + 'px');
    /* Abrimos el buscador al hacer click en la lupa*/

    $('.js-search-open').on('click', function(event){
        event.preventDefault();

        $html.addClass('search-is-open');

        setTimeout(function(){
            //$searchBar.find('input').focus();
            console.log('INPUT');
        },2500);

        return false;
    });
    /* Cerramos el buscador al hacer click en la lupa */




    $('.js-search-close').on('click', function(event){
        event.preventDefault();
        $html.removeClass('search-is-open');

    });
    /* Abrimos el buscador en el fixed menú al hacer click en la lupa*/

    $('.js-fixed-search-open').on('click', function(event){
        event.preventDefault();
        $html.addClass('search-fixed-is-open');
        setTimeout(function(){
            $searchBarFixed.find('input').focus();
            console.log('INPUT');
        }, 200);


    });
    /* Cerramos el buscador en el fixed menú al hacer click en la lupa*/
    $('.js-search-close').on('click', function(event){
        event.preventDefault();
        $html.removeClass('search-fixed-is-open');

    });
    $backdrop.on('click', function(){
        $html.removeClass('search-is-open');
        $html.removeClass('search-fixed-is-open');

    });





    $(window).on('scroll', function(){
        // Hago que baje al darle al scroll hacia arriba

        var newScrollPosition = window.scrollY;

        // Muestro la navegación al subir
        if (newScrollPosition < lastScrollPosition){

          //  console.log('newScrollPosition',newScrollPosition);
          //  console.log('lastScrollPosition',lastScrollPosition);


            // Oculta la navegación cuando está a la altura de la cabecera
            if (newScrollPosition < 500){
                $navBarFixed.addClass('is-hide');

            } else {
                $navBarFixed.removeClass('is-hide');

            }

        }

        // Oculto la navegación al bajar
        if (newScrollPosition > lastScrollPosition){
            $navBarFixed.addClass('is-hide');
        }

        lastScrollPosition = newScrollPosition;
    });




    /*Menú options lateral*/
    var $html           = $('html');
    var $changeOption = $('.js-option');
    var $changeOptionMobile = $('.js-option-mobile');
    var $openOptions = $('.open-options');
    var $closeOptions = $('.close-options');


    /*
     Para cerrar y abril el panel lateral
    */

    $openOptions.on('click', function(){
        event.preventDefault();
        $html.addClass('panel-is-open');

    });
    $closeOptions.on('click', function(){
        event.preventDefault();
        $html.removeClass('panel-is-open');

    });





    $changeOption.each(function(index) {
        $(this).on('click', function(){
            event.preventDefault();
            var dataValue         = $(this).data('value');
            var dataOption        = $(this).data('option');
            var dataElement       = $(this).data('element');
            var $element          = $(dataElement);

            // expresión regular que busca si esa clase existe ya
            // y la elimina
            $element.attr('class', function(i, c){
                var pattern = '(^|\\s)' + dataOption + '\\S+';
                var myReg  = new RegExp(pattern, "g");
                return c.replace(myReg, '');
            });

            // actualizo con la nueva clase
            $element.addClass(dataOption + dataValue);

            var widthLogo = $('.js-width-logo').outerWidth(true);
            var $logo2 = $('.logo-floating');
            $logo2.css('width', (widthLogo) + 'px');

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

            var color = $('.navbar').find('.js-color').css('background-color');

            if (checkContrastForegroundColor(color) === 'dark') {
                $('.navbar-menu-inner, .navbar__tools').addClass('fg-dark');
                $('.navbar-menu-inner, .navbar__tools').removeClass('fg-white');
            } else {
                $('.navbar-menu-inner, .navbar__tools').addClass('fg-white');
                $('.navbar-menu-inner, .navbar__tools').removeClass('fg-dark');
            }



        });
    });


    $changeOptionMobile.each(function(index) {
        $(this).on('click', function(){
            event.preventDefault();
            var dataValue             = $(this).data('value');
            var dataOption            = $(this).data('option');
            var dataElement           = $(this).data('element');
            var dataType              = $(this).data('type');
            var $element              = $(dataElement);



            $element.attr('data-'+ dataType, dataOption + dataValue);
            console.log(dataType, dataOption + dataValue);

            /* Update mmenu options */
            menuCustomize = {
                "extensions": [
                    $menuMobile.data('extension-position'),
                    $menuMobile.data('extension-theme'),
                ],
                "iconPanels": $menuMobile.data('icon-panels')

            };

            /* Update mmenu with custom options */
            API.initPanels();
            //initMmenu(menuCustomize);


        });
    });







    var $sliderOptions = $('.option-slider');



    /*
     Range control init panel lateral
    */
    $sliderOptions.on("change", function () {

        var $this = $(this);
        var value           = $this.val();
        var dataValues         = $this.data('values');
        var dataOption        = $this.data('option');
        var dataElement       = $this.data('element');
        var $element          = $(dataElement);

        // expresión regular que busca si esa clase existe ya
        // y la actualiza
        $element.attr('class', function(i, c){
            var pattern = '(^|\\s)' + dataOption + '\\S+';
            var myReg  = new RegExp(pattern, "g");
            return c.replace(myReg, '');
        });

        $element.addClass(dataOption+ "-" + dataValues[value]);

        console.log("Clase: ." + dataOption+ "-" + dataValues[value]);
    });
});