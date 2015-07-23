/**
 * Created by marlon on 22/07/15.
 */
var $ = require('jquery');
var ko = require('knockout');
var crud = require('../../common/crud');

ViewModel = function () {
    var self = this;

    self.dataModel = {
        key: {
            label: 'Chave da URL',
            type: 'text'
        },
        titleHtml: {
            label: 'Título',
            type: 'html-editor'
        },
        image: {
            label: 'Imagem',
            type: 'upload'
        },
        order: {
            label: 'Ordem',
            type: 'number'
        }
    };

    ko.utils.extend(self, new crud.ViewModel('category', self.dataModel));
};

ko.applyBindings(new ViewModel());