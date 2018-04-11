

/*
  Funcion para inicializar el comportamiento fixed del header
  @$fixedNav es el elemento fixed
*/
function initFixedHeader() {

    var $header   = $('header');  /* site header */
    var $fixedNav = $header.find('.js-fixed');

    // Check to know if element is transparent
    var _isTransparent  = $fixedNav.hasClass('is-transparent');

    var start = $fixedNav.offset().top;
    var until = start + HEADER_LEEWAY;
    var offset, opacity, actualPadding, actualWidthlogo;

    // Style fixes on scroll
    var $fixPadding     = $header.find('.padding-fixed');
    var $fixLogoSize    = $header.find('.width-logo-fixed');

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
        offset = $(document).scrollTop();

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
            }

        }

        /* When sticky starts */
        else {

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
  Funcion para actualizar el foreground según el color de fondo transparencia..
*/

function refreshForeground() {
    var $header  = $('header');  /* site header */


    var $fixedElement   = $header.find('.js-fixed');        /* check if there is a menu is fixed */
    var _isTransparent  = $header.find('.is-transparent');  /* check if there is a menu is transparent */


    /* Elemento que contien la clase para el color del texto (fg-'color') */
    var $fgChange = $('.js-change-color');



    $fgChange.each(function(index) {

        var $this = $(this);

        _isTransparent = $this.hasClass('is-transparent');

        if(_isTransparent) {

            console.log('%c Oh es transparente estoy en el elemento ' + index + ' del EACH', 'background: #222; color: #eee');


            var $NextBLock = $('.site-header + * ');
            console.log('$NextBLock', $NextBLock);


            if ($('.hero').length) {
                var $Hero = $('.hero');
                var _getHeroFg = getClassStartsWith($Hero[0].className, 'fg-');
                console.log('_getHeroFg', _getHeroFg);
                $this.addClass(_getHeroFg);

            }
            else {
                var _getNextBlockFg = getClassStartsWith($NextBLock[0].className, 'fg-');
                console.log('_getNextBlockFg', _getNextBlockFg);
                $NextBLock.addClass('fix-header-padding');
                $this.addClass(_getNextBlockFg);

            }
        }/* _isTransparent */


        else{

            console.log('%c Oh no es transparente estoy en el elemento ' + index + ' del EACH', 'background: #222; color: #eee');

            /* Elemento que contien la clase para el color del texto (fg-'color') */


            /* Leemos el color de fondo del elemento que js-change-color */
            var _bgCssColor = $this.find('.js-background-color').css('background-color');

            console.log('El color de fondo para este elemento es '
                + _bgCssColor + ' y le añado la clase "'+ checkContrastForegroundColor(_bgCssColor) + "'");



            /* Check para el contraste del color de fondo */
            if (checkContrastForegroundColor(_bgCssColor) === 'dark') {
                $this.addClass('fg-dark');
                $this.removeClass('fg-white');
            }
            else {
                $this.addClass('fg-white');
                $this.removeClass('fg-dark');
            }

        }/* _No Transparent */


        if($this.hasClass('js-fixed')){

            var _fixedElementIsSubnavButton = $fixedElement.hasClass('js-subnav-bottom');
            var heightFixedOffset = $fixedElement.offset().top;
            var _oldTextColor, _stickyBgColor;

            if (_isTransparent) {
                _oldTextColor = getClassStartsWith( $fixedElement[0].className,'fg-');
                console.log('old text color', _oldTextColor);
            }


            /* on window scroll event */
            $(window).on('scroll', function () {

                if ($(window).scrollTop() > heightFixedOffset) {

                    $fixedElement.addClass('sticky');

                    if (_fixedElementIsSubnavButton) {
                        $fixedElement.removeClass('subnav-bottom-absolute');
                    }

                    /* Background-color del menu fixed */
                    _stickyBgColor = $fixedElement.find('.js-background-color').css('background-color');

                    if (checkContrastForegroundColor(_stickyBgColor) === 'dark') {
                        $fixedElement.addClass('fg-dark');
                        $fixedElement.removeClass('fg-white');
                    }
                    else {
                        $fixedElement.addClass('fg-white');
                        $fixedElement.removeClass('fg-dark');
                    }




                }
                else {

                    if (_fixedElementIsSubnavButton) {
                        $fixedElement.addClass('subnav-bottom-absolute');
                    }

                    $fixedElement.removeClass('sticky');


                    if (_isTransparent) {
                        $fixedElement.removeClass( getClassStartsWith( $fixedElement[0].className,'fg-') );
                        $fixedElement.addClass(_oldTextColor);
                    }


                }




            });




        }/* _isFixed */

        else{

        }
    });


}


/*
 * initMmenu funtcion
 * @options: object with custom mmenu options
 *
 */
function initMmenu(options) {
    var $menuMobile     = $('#menu');


    /* Custom mmenu options */
    var menuCustomize = {
        "extensions": [
            $menuMobile.data('extension-position'),
            $menuMobile.data('extension-theme'),
        ],
        "iconPanels": $menuMobile.data('icon-panels')

    };
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

