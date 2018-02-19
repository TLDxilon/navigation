$(document).ready(function(){

    var height_topbar = $('.topbar').outerHeight(true);
    var height_logo = $('.navbar-logo--top .navbar-item--logo, .navigation-bottom .navbar-item--logo').outerHeight(true);
    var height_nav = $('.navbar-content').outerHeight(true);
    var height_over_menu = $('.navbar-content').offset().top;
    var lastScrollPosition = 0;

    var $searchBar = $('.search-bar');
    var $navBar = $('.navbar');
    var $navBarContent = $('.navbar-content');
    var $backdrop = $('.backdrop');
    var $menumobile = $('.menu-mobile');
    var $design = $('.design');



/*
    $(window).on('scroll', function(){
        if ( $(window).scrollTop() > height_over_menu ){
            $navBarContent.addClass('navbar-fixed bg-white');
        } else {
            $navBarContent.removeClass('navbar-fixed bg-white');
        }

        //Hago que suba al llegar a 600
        if ($(window).scrollTop() > 1600) {
            $navBarContent.addClass('is-hide');
        } else  {
        }

        //Hago que baje al darle al scroll hacia arriba
        var newScrollPosition = window.scrollY;

        if (newScrollPosition < lastScrollPosition){
            $navBarContent.removeClass('is-hide');
        }else{

        }
        lastScrollPosition = newScrollPosition;
    });
*/

    $(window).on('scroll', function(){
        if ( $(window).scrollTop() > 300 ){
            $navBarContent.addClass('navbar-fixed bg-white');
        } else {
            $navBarContent.removeClass('is-hide');
        }

        //Hago que suba al llegar a 600
        if ($(window).scrollTop() > 1600) {
            $navBarContent.addClass('is-hide');
        } else  {
        }

        //Hago que baje al darle al scroll hacia arriba
        var newScrollPosition = window.scrollY;

        if (newScrollPosition < lastScrollPosition){
            $navBarContent.removeClass('is-hide');
        }else{

        }
        lastScrollPosition = newScrollPosition;
    });

    $('.fix-header-padding').css('padding-top', (height_topbar + height_logo + height_nav) + 'px');



    var toogleMenu = function(){

        $design.toggleClass('page-is-moving');
        if ($design.hasClass('page-is-moving')) {
            $design.removeClass('page-is-static');
            $menumobile.addClass('display-block');
            $navBar.removeClass('search-is-open');

        } else{
            $design.removeClass('page-is-moving');
            $design.addClass('page-is-static');
            $menumobile.css('z-index','-6');


        }
    };

    var toogleSearch = function(){

        $navBarContent.toggleClass('search-is-open');

        if ($navBarContent.hasClass('search-is-open')) {
            $navBarContent.find('input').focus();
            $backdrop.css('display', 'block');
            $searchBar.css('opacity', '1');

        } else{
            $backdrop.css('display', 'none');
            $searchBar.css('opacity', '0');

        }

    };


    $('.js-search-toogle').on('click', function(){
        toogleSearch();
    });

    $('.js-menu-toogle').on('click', function(){
        toogleMenu();
    });


    $backdrop.on('click', function(){
        $(this).css('opacity', '0');
        $navBar.removeClass('search-is-open');

    });


})
