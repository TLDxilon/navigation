$(document).ready(function($){

    /*Menú options lateral*/
    var $html           = $('html');
    var $changeOption = $('.js-option');
    var $changeOptionColor = $('.js-option-color');
    var $changeTransparent = $('.js-transparent');
    var $openOptions = $('.open-options');
    var $closeOptions = $('.close-options');


    /*
     Para cerrar y abril el panel lateral
    */

    $openOptions.on('click', function(event){
        event.preventDefault();
        $html.addClass('panel-is-open');

    });
    $closeOptions.on('click', function(event){
        event.preventDefault();
        $html.removeClass('panel-is-open');

    });




    $changeOption.each(function(index) {
        $(this).on('click', function(){
            event.preventDefault();
            var dataValue         = $(this).data('value');
            var dataOption        = $(this).data('option');
            var dataElement       = $(this).data('element');
            var $element          = $(dataElement);

            // expresión regular que busca si esa clase existe ya
            // y la elimina
            $element.attr('class', function(i, c){
                var pattern = '(^|\\s)' + dataOption + '\\S+';
                var myReg  = new RegExp(pattern, "g");
                return c.replace(myReg, '');
            });

            // actualizo con la nueva clase
            $element.addClass(dataOption + dataValue);

            var widthLogo = $('.js-width-logo').outerWidth(true);
            var $logo2 = $('.logo-floating');
            $logo2.css('width', (widthLogo) + 'px');




        });

    });



   $changeOptionColor.each(function(index) {
        $(this).on('click', function(){
            event.preventDefault();
            var dataValue         = $(this).data('value');
            var dataOption        = $(this).data('option');
            var dataElement       = $(this).data('element');
            var $element          = $(dataElement);


            // expresión regular que busca si esa clase existe ya
            // y la elimina
            $element.attr('class', function(i, c){
                var pattern = '(^|\\s)' + dataOption + '\\S+';
                var myReg  = new RegExp(pattern, "g");
                return c.replace(myReg, '');
            });

            // actualizo con la nueva clase
            $element.addClass(dataOption + dataValue);



            fixForegroundColor();



        });



    });



  $changeTransparent.each(function(index) {
        $(this).on('click', function(){
            event.preventDefault();
            var dataValue         = $(this).data('value');
            var dataOption        = $(this).data('option');
            var dataElement       = $(this).data('element');
            var $element          = $(dataElement);


            // expresión regular que busca si esa clase existe ya
            // y la elimina
            $element.attr('class', function(i, c){
                var pattern = '(^|\\s)' + dataOption + '\\S+';
                var myReg  = new RegExp(pattern, "g");
                return c.replace(myReg, '');
            });

            // actualizo con la nueva clase
            $element.addClass(dataOption + dataValue);

            initFixedHeader();
            fixForegroundColor();




        });



    });



    var $sliderOptions = $('.option-slider');

    /*
     Range control init panel lateral
    */
    $sliderOptions.on("change", function () {

        var $this = $(this);
        var value           = $this.val();
        var dataValues         = $this.data('values');
        var dataOption        = $this.data('option');
        var dataElement       = $this.data('element');
        var $element          = $(dataElement);

        // expresión regular que busca si esa clase existe ya
        // y la actualiza
        $element.attr('class', function(i, c){
            var pattern = '(^|\\s)' + dataOption + '\\S+';
            var myReg  = new RegExp(pattern, "g");
            return c.replace(myReg, '');
        });

        $element.addClass(dataOption+ "-" + dataValues[value]);

        console.log("Clase: ." + dataOption+ "-" + dataValues[value]);

        /* Check padding del primer bloque en funcion de la altura del nav */
        fixHeaderPadding();

    });
});