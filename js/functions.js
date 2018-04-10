/*
    colorValues
    @color puede ser HEX, RGB, HSL
    return array of [r,g,b,a] from any valid color. if failed returns undefine
 */
function colorValues(color) {
    if (color === '')
        return;
    if (color.toLowerCase() === 'transparent')
        return [0, 0, 0, 0];
    if (color[0] === '#')
    {
        if (color.length < 7)
        {
            // convert #RGB and #RGBA to #RRGGBB and #RRGGBBAA
            color = '#' + color[1] + color[1] + color[2] + color[2] + color[3] + color[3] + (color.length > 4 ? color[4] + color[4] : '');
        }
        return [parseInt(color.substr(1, 2), 16),
            parseInt(color.substr(3, 2), 16),
            parseInt(color.substr(5, 2), 16),
            color.length > 7 ? parseInt(color.substr(7, 2), 16)/255 : 1];
    }
    if (color.indexOf('rgb') === -1)
    {
        // convert named colors
        var temp_elem = document.body.appendChild(document.createElement('fictum')); // intentionally use unknown tag to lower chances of css rule override with !important
        var flag = 'rgb(1, 2, 3)'; // this flag tested on chrome 59, ff 53, ie9, ie10, ie11, edge 14
        temp_elem.style.color = flag;
        if (temp_elem.style.color !== flag)
            return; // color set failed - some monstrous css rule is probably taking over the color of our object
        temp_elem.style.color = color;
        if (temp_elem.style.color === flag || temp_elem.style.color === '')
            return; // color parse failed
        color = getComputedStyle(temp_elem).color;
        document.body.removeChild(temp_elem);
    }
    if (color.indexOf('rgb') === 0)
    {
        if (color.indexOf('rgba') === -1)
            color += ',1'; // convert 'rgb(R,G,B)' to 'rgb(R,G,B)A' which looks awful but will pass the regxep below
        return color.match(/[\.\d]+/g).map(function (a)
        {
            return +a
        });
    }
}

/*
     checkContrastForegroundColor
     @color puede ser HEX, RGB, HSL
     return 'dark' or 'light' como color recomendado de foreground
 */
function checkContrastForegroundColor( color ) {

    /* colorValues devuelve cualquier color en array RGBA */
    var rgb = colorValues(color);

    //http://www.w3.org/TR/AERT#color-contrast
    var o = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) /1000);

    if(o > 125) {
        return 'dark';
    }else{
        return 'light';
    }


};

/*
    getClassStartsWith
    @t elemento
    @n string con string de inicio de clase
    return la clase/s que encuentre
 */
function getClassStartsWith(t,n){var r=$.grep(t.split(" "),function(t,r){return 0===t.indexOf(n);}).join();return r||!1;}
