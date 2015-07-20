/**
 * Created by marlon on 20/07/15.
 */
require('uikit-upload');

exports.init = function (selector) {
    setTimeout(function () {
        var $element = $(selector);

        var $progress = $element.find('.uk-progress');
        var $bar = $progress.find('.uk-progress-bar');

        var $uploadSelect = $element.find('.uk-form-file input[type=file]');
        var $uploadDrop = $element.find('.uk-placeholder');

        var settings = {
            action: '/',
            allow: '*.(jpg|jpeg|gif|png)',
            loadstart: function () {
                $bar.css('width', '0%').text('0%');
                $progress.removeClass('uk-hidden');
            },
            progress: function (percent) {
                percent = Math.ceil(percent);
                $bar.css('width', percent + '%').text(percent + '%');
            },
            allcomplete: function (response) {
                $bar.css('width', '100%').text('100%');
                setTimeout(function () {
                    $progress.addClass('uk-hidden');
                }, 250);
            }
        };

        UIkit.uploadSelect($uploadSelect, settings);
        UIkit.uploadDrop($uploadDrop, settings);
    }, 0);
};