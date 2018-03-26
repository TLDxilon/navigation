$(document).ready(function($){

    var fadeStart=0
        ,fadeUntil=100
        ,fading = $('.bg-transparent.sticky');



    $(window).bind('scroll', function(){
        var offset = $(document).scrollTop()
            ,opacity=0
        ;
        if( offset<=fadeStart ){
            opacity=0;
        }else if( offset<=fadeUntil ){
            opacity=0+offset/fadeUntil;
        }
        fading.css('background-color','rgba(255, 255, 255,'+ opacity + ')');
    });
});