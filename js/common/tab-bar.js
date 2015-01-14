/**
 * Created by marlon on 12/01/15.
 */
require('tabber');

exports.init = function (selector) {
    setTimeout(function () {
        var $element = $(selector);
        $element.tabber({
            maxWidth: '0px'
        });
    }, 0);
};