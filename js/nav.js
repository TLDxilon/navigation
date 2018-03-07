$(document).ready(function(){
    var lastScrollPosition = 0;
    var widthLogo = $('.js-width-logo').outerWidth(true);
    var $navBarFixed = $('.navbar-fixed');
    var $searchBar = $('.js-searchbar');
    var $searchBarFixed = $('.js-fixed-searchbar');
    var $backdrop = $('.backdrop');
    var $body = $('body');
    var $html = $('html');
    var $logo = $('.logo-floating');


///////////////MMENU///////////////

    $("#menu").mmenu({
        "extensions": [
            "pagedim-black",
            "position-right",
            "theme-dark",
            "border-full",
            "listview-huge"
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
    });

/////////////////////////////


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



    var $changeOption = $('.js-option');
    var $openOptions = $('.open-options');
    var $closeOptions = $('.close-options');

    $changeOption.each(function(index) {
        $(this).on('click', function(){
            event.preventDefault();
            var dataValue         = $(this).data('value');
            var dataOption        = $(this).data('option');
            var dataElement       = $(this).data('element');
            var $element          = $(dataElement);




            $element.attr('class', function(i, c){
                var pattern = '(^|\\s)' + dataOption + '\\S+';
                var myReg  = new RegExp(pattern, "g");
                return c.replace(myReg, '');
            });


            console.log(dataElement);
            $element.addClass(dataOption + dataValue);

            var widthLogo = $('.js-width-logo').outerWidth(true);
            var $logo2 = $('.logo-floating');
            $logo2.css('width', (widthLogo) + 'px');
        });
    });

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




});