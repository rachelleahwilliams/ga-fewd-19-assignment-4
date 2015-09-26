/*global document, $ */
(function () {
    'use strict';

    $(document).ready(function () {
        /* ----- Begin writing your JavaScript here ------*/

        $('.readmore').click(function () {
            $('#show-this-on-click').slideDown(450);
            $('.readmore').hide(500);
            $('.readless').show(500);
        });

        $('.readless').click(function () {
            $('#show-this-on-click').slideUp(450);
            $('.readless').hide(1000);
            $('.readmore').show(1000);
        });

        $('.learnmore').click(function () {
            $('span').slideDown(1000);
            $('.learnmore').hide(1000);
        });

        /* ----- Finish writing your JavaScript here -----*/
    });
}());