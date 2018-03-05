$(document).ready(function(){
    var lastScrollPosition = 0;
    var $navBarFixed = $('.navbar-fixed');
    var $searchBar = $('.js-searchbar');
    var $searchBarFixed = $('.js-fixed-searchbar');
    var $backdrop = $('.backdrop');
    var $body = $('body');
    var $html = $('html');





    $('.js-search-open').on('click', function(){
        event.preventDefault();
        $html.addClass('search-is-open');
        $searchBar.find('input').focus();

    });

    $('.js-search-close').on('click', function(){
        event.preventDefault();
        $html.removeClass('search-is-open');

    });


    $('.js-fixed-search-open').on('click', function(){
        event.preventDefault();
        $html.addClass('search-fixed-is-open');


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


        });
    });

    $openOptions.on('click', function(){
        event.preventDefault();
        $('.options').css('left', '0');
    });
    $closeOptions.on('click', function(){
        event.preventDefault();
        $('.options').css('left', '-120px');
    });



});