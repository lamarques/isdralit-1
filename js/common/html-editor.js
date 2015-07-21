/**
 * Created by marlon on 21/07/15.
 */
require('uikit-html-editor');

exports.init = function (selector) {
    setTimeout(function () {
        var $element = $(selector);
        UIkit.htmleditor($element);
    }, 0);
};