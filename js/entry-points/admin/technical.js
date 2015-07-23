/**
 * Created by marlon on 22/07/15.
 */
var $ = require('jquery');
var ko = require('knockout');
var crud = require('../../common/crud');

ViewModel = function () {
    var self = this;

    self.dataModel = {
        item: {
            label: 'Produto',
            type: 'combo-box',
            fieldOptionName: 'titleHtml'
        },
        titleHtml: {
            label: 'Título',
            type: 'html-editor'
        },
        detailHtml: {
            label: 'Descrição',
            type: 'html-editor'
        },
        order: {
            label: 'Ordem',
            type: 'number'
        }
    };

    ko.utils.extend(self, new crud.ViewModel('technical', self.dataModel));
};

ko.applyBindings(new ViewModel());