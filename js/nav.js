$(document).ready(function($){
    var lastScrollPosition = 0;
    var heightTopbar = $('.topbar').outerHeight(true);
    var heightNavbar = $('.navbar').outerHeight(true);
    var widthLogo       = $('.js-width-logo').outerWidth(true);
    var $navBarFixed    = $('.navbar-fixed');
    var $searchBar      = $('.js-searchbar');
    var $searchBarFixed = $('.js-fixed-searchbar');
    var $backdrop       = $('.backdrop');
    var $body           = $('body');
    var $html           = $('html');
    var $logo           = $('.logo-floating');
    var $menuMobile     = $('#menu');


/*Subnav fijo */


        var heightSubnav = $('.subnav').offset().top;

        $(window).on('scroll', function(){
            if ( $(window).scrollTop() > heightSubnav ){
                $('.subnav').addClass('subnav-sticky');
            } else {
                $('.subnav').removeClass('subnav-sticky');
            }
        });



    if($( ".navbar-fixed-inner" ).hasClass( "bg-transparent" )) {
        console.log("Tiene la clase bg-transparent" + $( ".navbar-fixed-inner" ).hasClass( "bg-transparent" ));
        $( this ).removeClass('bg-transparent');
    }




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


    $('.js-search-open').on('click', function(){
        event.preventDefault();
        $html.addClass('search-is-open');
        setTimeout(function(){
            $searchBar.find('input').focus();
            console.log('INPUT');
        },200);

    });

    $('.js-search-close').on('click', function(){
        event.preventDefault();
        $html.removeClass('search-is-open');

    });


    $('.js-fixed-search-open').on('click', function(){
        event.preventDefault();
        $html.addClass('search-fixed-is-open');
        setTimeout(function(){
            $searchBarFixed.find('input').focus();
            console.log('INPUT');
        }, 200);


    });

    $('.js-search-close').on('click', function(){
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

            console.log('newScrollPosition',newScrollPosition);
            console.log('lastScrollPosition',lastScrollPosition);


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

    var $changeOption = $('.js-option');
    var $changeOptionMobile = $('.js-option-mobile');
    var $openOptions = $('.open-options');
    var $closeOptions = $('.close-options');

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
    /*
     Para cerrar y abril el panel lateral
    */

    $openOptions.on('click', function(){
        event.preventDefault();
        $('.options').css('display', 'block');
        $('.design').css('width', '90%');
        $('.navbar-fixed').css('width', '90%');
    });
    $closeOptions.on('click', function(){
        event.preventDefault();
        $('.options').css('display', 'none');
        $('.design').css('width', '100%');
        $('.navbar-fixed').css('width', '100%');
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