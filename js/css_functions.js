/**
 * Gets styles by a classname
 *
 * @notice The className must be 1:1 the same as in the CSS
 * @param string className_
 */
function getStyle(className_) {

    var styleSheets = window.document.styleSheets;
    var styleSheetsLength = styleSheets.length;
    for(var i = 0; i < styleSheetsLength; i++){
        var classes = styleSheets[i].rules || styleSheets[i].cssRules;
        if (!classes)
            continue;
        var classesLength = classes.length;
        for (var x = 0; x < classesLength; x++) {
            if (classes[x].selectorText == className_) {
                var ret;
                if(classes[x].cssText){
                    ret = classes[x].cssText;
                } else {
                    ret = classes[x].style.cssText;
                }
                if(ret.indexOf(classes[x].selectorText) == -1){
                    ret = classes[x].selectorText + "{" + ret + "}";
                }
                return ret;
            }
        }
    }

}


function getStyleFromLast(className) {
    var classes = document.styleSheets[0].rules || document.styleSheets[0].cssRules
    for(var x=0;x<classes.length;x++) {
        if(classes[x].selectorText==className) {
            //this is where I can collect the style information, but how?
        }
    }
}