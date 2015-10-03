/*global document, $ */
(function () {
    'use strict';

    $(document).ready(function () {
        /* ----- Begin writing your JavaScript here ------*/

        $('.readmore1 a').click(function (e) {
            e.preventDefault();
            $('#show-this-on-click').slideDown();
            $('.readmore1').hide();
            $('.readless1').show();
        });

        $('.readless1 a').click(function (e) {
            e.preventDefault();
            $('#show-this-on-click').slideUp();
            $('.readless1').hide();
            $('.readmore1').show();
        });

        $('.readmore2 a').click(function (e) {
            e.preventDefault();
            $('#show-this-on-click').slideDown();
            $('.readmore2').hide();
            $('.readless2').show();
        });

        $('.readless2 a').click(function (e) {
            e.preventDefault();
            $('#show-this-on-click').slideUp();
            $('.readless2').hide();
            $('.readmore2').show();
        });

        $('.learnmore').click(function (e) {
            e.preventDefault();
            $('span').slideDown();
            $('.learnmore').hide();
        });

        /* ----- Finish writing your JavaScript here -----*/
    });
}());