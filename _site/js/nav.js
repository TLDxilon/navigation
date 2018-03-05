$(document).ready(function(){
    var lastScrollPosition = 0;
    var widthLogo = $('.branding-logo').outerWidth(true);
    var $navBarFixed = $('.navbar-fixed');
    var $searchBar = $('.js-searchbar');
    var $searchBarFixed = $('.js-fixed-searchbar');
    var $backdrop = $('.backdrop');
    var $body = $('body');
    var $html = $('html');
    var $logo = $('.navbar-item--logo');





    $('.js-search-open').on('click', function(){
        event.preventDefault();
        $html.addClass('search-is-open');
        setTimeout(function(){
            $searchBar.find('input').focus();
        },300);

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
        },300);


    });

    $('.js-search-close').on('click', function(){
        event.preventDefault();
        $html.removeClass('search-fixed-is-open');

    });
    $backdrop.on('click', function(){
        $html.removeClass('search-is-open');
        $html.removeClass('search-fixed-is-open');

    });


    $logo.css('width', (widthLogo) + 'px');




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
            var widthLogo = $('.branding-logo').outerWidth(true);


            $logo.css('width', (widthLogo) + 'px');

            $element.attr('class', function(i, c){
                var pattern = '(^|\\s)' + dataOption + '\\S+';
                var myReg  = new RegExp(pattern, "g");
                return c.replace(myReg, '');
            });
            console.log(dataElement);
            $element.addClass(dataOption + dataValue);


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