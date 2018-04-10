$(document).ready(function($) {


    var $header  = $('header');  /* site header */


    var $fixedElement   = $header.find('.js-fixed');        /* check if there is a menu is fixed */
    var _isTransparent  = $header.find('.is-transparent');  /* check if there is a menu is transparent */


    /* Elemento que contien la clase para el color del texto (fg-'color') */
    var $fgChange = $('.js-change-color');


     $fgChange.each(function(index) {

         var $this = $(this);

         _isTransparent = $this.hasClass('is-transparent');

         if(_isTransparent) {

             console.log('%c Oh es transparente estoy en el elemento ' + index + ' del EACH', 'background: #222; color: #eee');


             var $NextBLock = $('.site-header + * ');
             console.log('$NextBLock', $NextBLock);


             if ($('.hero').length) {
                 var $Hero = $('.hero');
                 var _getHeroFg = getClassStartsWith($Hero[0].className, 'fg-');
                 console.log('_getHeroFg', _getHeroFg);
                 $this.addClass(_getHeroFg);

             }
             else {
                 var _getNextBlockFg = getClassStartsWith($NextBLock[0].className, 'fg-');
                 console.log('_getNextBlockFg', _getNextBlockFg);
                 $NextBLock.addClass('fix-header-padding');
                 $this.addClass(_getNextBlockFg);

             }
          }/* _isTransparent */


          else{

             console.log('%c Oh no es transparente estoy en el elemento ' + index + ' del EACH', 'background: #222; color: #eee');

             /* Elemento que contien la clase para el color del texto (fg-'color') */


             /* Leemos el color de fondo del elemento que js-change-color */
             var _bgCssColor = $this.find('.js-background-color').css('background-color');

             console.log('El color de fondo para este elemento es '
                 + _bgCssColor + ' y le añado la clase "'+ checkContrastForegroundColor(_bgCssColor) + "'");



             /* Check para el contraste del color de fondo */
             if (checkContrastForegroundColor(_bgCssColor) === 'dark') {
                 $this.addClass('fg-dark');
                 $this.removeClass('fg-white');
             }
             else {
                 $this.addClass('fg-white');
                 $this.removeClass('fg-dark');
             }

         }/* _No Transparent */


         if($this.hasClass('js-fixed')){

             var _fixedElementIsSubnavButton = $fixedElement.hasClass('js-subnav-bottom');
             var heightFixedOffset = $fixedElement.offset().top;
             var _oldTextColor, _stickyBgColor;

             if (_isTransparent) {
                 _oldTextColor = getClassStartsWith( $fixedElement[0].className,'fg-');
                 console.log('old text color', _oldTextColor);
             }


             /* on window scroll event */
             $(window).on('scroll', function () {

                 if ($(window).scrollTop() > heightFixedOffset) {

                     $fixedElement.addClass('sticky');

                     if (_fixedElementIsSubnavButton) {
                         $fixedElement.removeClass('subnav-bottom-absolute');
                     }

                         /* Background-color del menu fixed */
                         _stickyBgColor = $fixedElement.find('.js-background-color').css('background-color');

                         if (checkContrastForegroundColor(_stickyBgColor) === 'dark') {
                             $fixedElement.addClass('fg-dark');
                             $fixedElement.removeClass('fg-white');
                         }
                         else {
                             $fixedElement.addClass('fg-white');
                             $fixedElement.removeClass('fg-dark');
                         }




                 }
                 else {

                     if (_fixedElementIsSubnavButton) {
                         $fixedElement.addClass('subnav-bottom-absolute');
                     }

                     $fixedElement.removeClass('sticky');


                     if (_isTransparent) {
                         $fixedElement.removeClass( getClassStartsWith( $fixedElement[0].className,'fg-') );
                         $fixedElement.addClass(_oldTextColor);
                     }


                 }




             });




         }/* _isFixed */

         else{

         }
     });




    /* if menu is Fixed */












    if(!($('.hero').length)){

    }
    else{
        var $NextBLock = $('.site-header + * ');
        var _getNextBlockFg = getClassStartsWith( $NextBLock[0].className,'fg-');

        console.log('_getNextBlockFg', _getNextBlockFg);

        $fgChange.addClass(_getNextBlockFg);
        $NextBLock.addClass('fix-header-padding');
    }

});

