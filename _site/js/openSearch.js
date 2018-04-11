
$(document).ready(function($){

    var $backdrop       = $('.backdrop');
    var $searchBar      = $('.js-searchbar');
    var $searchBarFixed = $('.js-fixed-searchbar');
    var $html           = $('html');



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
    $('.js-fixed-search-close').on('click', function(event){
        event.preventDefault();
        $html.removeClass('search-fixed-is-open');

    });





    $backdrop.on('click', function(){
        $html.removeClass('search-is-open');
        $html.removeClass('search-fixed-is-open');

    });



});