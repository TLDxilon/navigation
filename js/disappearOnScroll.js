var fadeStart=100
    ,fadeUntil=400
    ,dissapear = $('.dissapear')
;



$(window).bind('scroll', function(){
    var offset = $(document).scrollTop()
        ,opacity=0
    ;
    if( offset<=fadeStart ){
        opacity=1;
    }else if( offset<=fadeUntil ){
        opacity=1-offset/fadeUntil;
    }
    dissapear.css('opacity',opacity);
});