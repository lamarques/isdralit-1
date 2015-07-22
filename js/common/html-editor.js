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
        editor.on('change', function (editor) {
            field.value(editor.getValue());
        });

        field.value.subscribe(function (value) {
            value = value || '';
            if (editor.getValue() != value) {
                editor.setValue(value);
            }
        });
    }, 0);
};