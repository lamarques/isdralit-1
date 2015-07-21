/**
 * Created by marlon on 21/07/15.
 */
require('uikit-html-editor');

exports.init = function (field) {
    setTimeout(function () {
        var $element = $('#' + field.name);

        UIkit.htmleditor($element, {
            mode: 'tab',
            lblCodeview: 'HTML',
            lblPreview: 'Visualização'
        });

        var editor = $element.parent().find('.CodeMirror')[0].CodeMirror;
        $element.data('editor', editor);
    }, 0);
};