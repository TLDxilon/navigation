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
        $searchBar.css('display', 'block');
        $searchBar.find('input').focus();
        $backdrop.css('display', 'block');
        $body.addClass('no-scroll-body');
        $html.addClass('no-scroll-html');
    });

    $('.js-search-close').on('click', function(){
        event.preventDefault();
        $html.removeClass('search-is-open');
        $searchBar.css('display', 'none');
        $backdrop.css('display', 'none');
        $body.removeClass('no-scroll-body');
        $html.removeClass('no-scroll-html');
    });


    $('.js-fixed-search-open').on('click', function(){
        event.preventDefault();
        $html.addClass('search-is-open');
        $searchBarFixed.css('display', 'block');
        $searchBarFixed.find('input').focus();
        $backdrop.css('display', 'block');
        $body.addClass('no-scroll-body');

    });

    $('.js-search-close').on('click', function(){
        event.preventDefault();
        $html.removeClass('search-is-open');
        $searchBarFixed.css('display', 'none');
        $backdrop.css('display', 'none');
        $body.removeClass('no-scroll-body');
        $html.removeClass('no-scroll-html');
    });
    $backdrop.on('click', function(){
        $html.removeClass('search-is-open');
        $searchBarFixed.css('display', 'none');
        $searchBar.css('display', 'none');
        $backdrop.css('display', 'none');
        $body.removeClass('no-scroll-body');
        $html.removeClass('no-scroll-html');
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
