

/*
  Funcion para inicializar el comportamiento fixed del header
  @$fixedNav es el elemento fixed
*/
function initFixedHeader() {

    var $header   = $('header');  /* site header */
    var $fixedNav = $header.find('.js-fixed');

    // Check to know if element is transparent
    var _isTransparent  = $fixedNav.hasClass('is-transparent');
    var _isSubnavButton = $fixedNav.hasClass('js-subnav-bottom');

    var start = $fixedNav.offset().top;
    var until = start + HEADER_LEEWAY;
    var offset, opacity, actualPadding, actualWidthlogo;

    // Style fixes on scroll
    var $fixPadding     = $header.find('.padding-fixed');
    var $fixLogoSize    = $header.find('.width-logo-fixed');

    // Color variables
    var _oldTextColor = getClassStartsWith( $fixedNav[0].className,'fg-');
    var _stickyBgColor;

    var maxPadding, minPadding, difPadding;
    var maxWidth, minWidth, difWidth;

    function _fixDefaultPadding(){
        maxPadding = $fixPadding.css('padding-top').replace('px', '');
        minPadding = HEADER_MIN_PADDING;
        difPadding = maxPadding - minPadding;
    }
    function _fixDefaultLogoSize(){
        maxWidth = $fixLogoSize.css('width').replace('px', '');
        minWidth = LOGO_MIN_WIDTH;
        if(maxWidth <= minWidth){
            minWidth = maxWidth;
        }
        difWidth = maxWidth - minWidth;
    }

    function _checkScroll(){

        // Check actual scroll position
        offset = $(window).scrollTop();

        /* When scroll is on top */
        if( offset <= start ){

            /* Padding, logo and trasnparent update */
            if ($fixPadding.length) {
                $fixPadding.css({
                    'padding-top': '',
                    'padding-bottom': ''
                });
                _fixDefaultPadding();
                console.log('maxPadding is on top:'+ maxPadding);
            }
            if ($fixLogoSize.length) {
                $fixLogoSize.css({
                    'width': ''
                });
                _fixDefaultLogoSize();
                console.log('maxWidth is on top:'+ maxWidth);
            }

            if (_isTransparent) {
                // background on scroll becomes opacity 1 -> true
                $header.find('.js-background').css({'opacity': '' });

                $fixedNav.removeClass( getClassStartsWith( $fixedNav[0].className,'fg-') );
                $fixedNav.addClass(_oldTextColor);
            }

            if (_isSubnavButton) {
                $fixedNav.addClass('subnav-bottom-absolute');
            }
            $fixedNav.removeClass('sticky');
        }

        /* When sticky starts */
        else {

            $fixedNav.addClass('sticky');

            /* When user is scrolling inside leeway */
            if( (offset > start) && (offset <= until) ){

                // Opacity
                opacity = 0 + (offset-start)/until;

                // Logo Padding
                actualPadding = maxPadding -(( (offset-start) / until ) * difPadding);

                // Logo Width
                actualWidthlogo = maxWidth - (( (offset-start) / until ) * difWidth);

            }

            /* When scroll is out of leeway */
            else if( offset > until ){

                // Opacity
                opacity=1;

                // Logo padding
                actualPadding = minPadding;

                // Logo width
                actualWidthlogo = minWidth;

            }

            /* Padding, logo and trasnparent update */
            if ($fixPadding.length) {
                $fixPadding.css({
                    'padding-top': actualPadding + 'px',
                    'padding-bottom': actualPadding + 'px'
                });
            }
            if ($fixLogoSize.length) {
                $fixLogoSize.css({
                    'width': actualWidthlogo + 'px'
                });
            }
            if (_isTransparent) {
                // background on scroll becomes opacity 1 -> true
                $header.find('.js-background').css({'opacity': opacity });
            }
            if (_isSubnavButton) {
                $fixedNav.removeClass('subnav-bottom-absolute');
            }

            /* Background-color del menu fixed */
            _stickyBgColor = $fixedNav.find('.js-background-color').css('background-color');

            if (checkContrastForegroundColor(_stickyBgColor) === 'dark') {
                $fixedNav.addClass('fg-dark');
                $fixedNav.removeClass('fg-white');
            }
            else {
                $fixedNav.addClass('fg-white');
                $fixedNav.removeClass('fg-dark');
            }

        }

    }

    if ($fixPadding.length) {
        _fixDefaultPadding();
    }
    if ($fixLogoSize.length) {
        _fixDefaultLogoSize();
    }

    $(window).on('scroll', function(){
        _checkScroll();
    });

}

/*
  Funcion para corregir el padding del primer bloque en funcion de la altura del nav
*/
function fixHeaderPadding(){

    var _fixHeaderPaddingClass = 'fix-header-padding';

    var $header  = $('header');  /* site header */
    var $navBar  = $header.find('.navbar');   /* navbar */
    var $subNav  = $header.find('.subnav');   /* subnav */
    var $hero  =   $header.find('.hero');   /* hero */

    var _navbarHeight = $navBar.outerHeight(true);
    var _subnavHeight = $subNav.outerHeight(true);

    var $elementToFixPadding;

    // There is hero
    if($hero.length){

        $elementToFixPadding = $hero.find('.' + _fixHeaderPaddingClass);

    }
    // There is not hero
    else {
        var $firstBlockAfterHeader = $('.site-header + * ');

        $firstBlockAfterHeader.addClass(_fixHeaderPaddingClass);

        $elementToFixPadding = $firstBlockAfterHeader;

    }

    // If element has subnav bottom
    if ($subNav.hasClass('js-subnav-bottom')){

        $elementToFixPadding.css({
            'padding-top'  : (_navbarHeight) + 'px',
            'padding-bottom' : (_subnavHeight) + 'px'
        });

    }
    // If element hasn't subnav bottom
    else  {

        $elementToFixPadding.css({
            'padding-top'  : (_navbarHeight) + 'px'
        });

    }

} // end function



/*
  Funcion para actualizar el foreground según el color de fondo o transparencia..
*/
function fixForegroundColor() {

    var $header  = $('header');  /* site header */
    var $hero = $header.find('.hero');

    /* .js-change-color es la clase de los elementos que deben actualizar su color (foreground) */
    var $fgChange = $('.js-change-color');

    $fgChange.each(function(index) {

        var $this = $(this);

        /* If element is transparent */
        if($this.hasClass('is-transparent')) {

            var $firstBlockAfterHeader = $('.site-header + * ');

            if ($hero.length) {
                var _heroForegroundClass = getClassStartsWith($hero[0].className, 'fg-');
                $this.addClass(_heroForegroundClass);

            }
            else {
                var _firstBlockForegroundClass = getClassStartsWith($firstBlockAfterHeader[0].className, 'fg-');
                $this.addClass(_firstBlockForegroundClass);

            }
        }/* _isTransparent */

        /* If element isn't transparent */
        else{

            /* Leemos el color de fondo del elemento que js-change-color */
            var _thisBackgroundColor = $this.find('.js-background-color').css('background-color');

            /* Check para el contraste del color de fondo */
            if (checkContrastForegroundColor(_thisBackgroundColor) === 'dark') {
                $this.addClass('fg-dark');
                $this.removeClass('fg-white');
            }
            else {
                $this.addClass('fg-white');
                $this.removeClass('fg-dark');
            }

        }/* _No Transparent */

    });


}


/*
 * initMmenu function
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

    $MENU_MOBILE.mmenu(menuOptions);

}// initMmenu



/*
 función que al hacer scroll desaparece poco a poco el elemento que tenga esa clase.
 */
function disappearOnScroll() {

    var $dissapear = $('.dissapear');

    if ($dissapear.length) {
        $(window).bind('scroll', function () {

            var offsetDissapear = dissapear.offset().top;

            console.log("OFFSET DISSAPEAR", offsetDissapear);
            var fadeStart = 100;
            var fadeUntil = offsetDissapear + 400;

            var offset = $(document).scrollTop()
                , opacity = 0
            ;
            if (offset <= fadeStart) {
                opacity = 1;
            } else if (offset <= fadeUntil) {
                opacity = 1 - offset / fadeUntil;
            }
            dissapear.css('opacity', opacity);
        });
    }
}



function initSearch() {

    var $backdrop       = $('.backdrop');
    var $searchBar      = $('.js-searchbar');
    var $searchOpen      = $('.js-search-open');
    var $searchClose      = $('.js-search-close');
    var $html           = $('html');



    /* Abrimos el buscador al hacer click en la lupa*/

    $searchOpen.on('click', function(event){
        event.preventDefault();

        $html.addClass('search-is-open');

        // setTimeout(function(){
        //     $searchBar.find('input').focus();
        //     console.log('INPUT');
        // },2500);

        return false;
    });
    /* Cerramos el buscador al hacer click en la lupa */




    $searchClose.on('click', function(event){
        event.preventDefault();
        $html.removeClass('search-is-open');

    });
    /* Abrimos el buscador en el fixed menú al hacer click en la lupa*/


    $backdrop.on('click', function(){
        $html.removeClass('search-is-open');

    });

}