/**
 * Created by marlon on 21/07/15.
 */
require('uikit-lightbox');

exports.init = function (selector) {
    setTimeout(function () {
        var $element = $(selector);
        UIkit.lightbox($element);
    }, 0);
};