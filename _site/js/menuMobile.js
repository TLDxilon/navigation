$(document).ready(function($){

    var $menuMobile     = $('#menu');


        /* Custom mmenu options */
    var menuCustomize = {
        "extensions": [
            $menuMobile.data('extension-position'),
            $menuMobile.data('extension-theme'),
        ],
        "iconPanels": $menuMobile.data('icon-panels')

    };

    /*
     * initMmenu funtcion
     * @options: object with custom mmenu options
     *
     */
    function initMmenu(options) {

        var menuDefault = {
            "extensions": [
                "pagedim-black",
                "theme-dark",
                "fx-menu-fade",
                "listview-50",
                "fx-panels-slide-100",
                "border-full"
            ],
            "iconPanels": true,
            "navbars": [
                {
                    "position": "bottom",
                    "content": [
                        "<a class=\"social-item fg-gray\" href=\"{{ site.twitter }}\"><span class=\"icon icon-twitter\"></span></a>",
                        "<a class=\"social-item fg-gray\" href=\"{{ site.pinterest }}\"><span class=\"icon icon-pinterest\"></span></a>",
                        "<a class=\"social-item fg-gray\" href=\"{{ site.linkedin }}\"><span class=\"icon icon-linkedin\"></span></a>",
                        "<a class=\"social-item fg-gray\" href=\"{{ site.twitter }}\"><span class=\"icon icon-twitter\"></span></a>",
                        "<a class=\"social-item fg-gray\" href=\"{{ site.pinterest }}\"><span class=\"icon icon-pinterest\"></span></a>",
                        "<a class=\"social-item fg-gray\" href=\"{{ site.linkedin }}\"><span class=\"icon icon-linkedin\"></span></a>"
                    ]
                }
            ]
        };

        var menuOptions = $.extend({}, menuDefault, options);

        console.log("calling mmenu!!!");
        $menuMobile.mmenu(menuOptions);

    }// initMmenu


    /* Init mmenu with custom options */
    initMmenu(menuCustomize);

    var API = $menuMobile.data( "mmenu" );


});