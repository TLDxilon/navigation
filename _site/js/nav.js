$(document).ready(function(){
    var lastScrollPosition = 0;
    var $navBarFixed = $('.navbar-fixed');
    var $searchBar = $('.js-searchbar');









    $('.js-search-open').on('click', function(){
        event.preventDefault();
        $searchBar.css('display', 'block');
        $searchBar.find('input').focus();
        $('.backdrop').css('display', 'block');
    });

    $('.js-search-close').on('click', function(){
        event.preventDefault();
        $searchBar.css('display', 'none');
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
        $('.options').css('left', '0');
    });
    $closeOptions.on('click', function(){
        $('.options').css('left', '-120px');
    });



});
