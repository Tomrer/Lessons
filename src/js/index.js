import '../scss/main.scss';

import $ from 'jquery';
// eslint-disable-next-line no-unused-vars
import slick from 'slick-carousel';
window.jQuery = $;
require("@fancyapps/fancybox");

$(document).ready(function () {
    $('.hero').slick({
        dots: true
    });
});
