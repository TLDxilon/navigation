$(document).ready(function($){

    var fadeStart=$('.bg-transparent.js-fixed').offset().top
        ,fadeUntil=300
        ,fading = $('.bg-transparent.js-fixed');



    $(window).bind('scroll', function(){
        var offset = $(document).scrollTop()
            ,opacity=0
        ;
        if( offset<=fadeStart ){
            opacity=0;
        }else if( offset<=fadeUntil ){
            opacity=0+offset/fadeUntil;
        }else if( offset>=fadeUntil ){
            opacity=1;
        }
        fading.css('background-color','rgba(255, 255, 255,'+ opacity + ')');
    });
});