/**
 * Created by marlon on 21/01/15.
 */
var $ = require('jquery');
var ko = require('knockout');
var crud = require('../../common/crud');

ViewModel = function () {
    var self = this;

    self.dataModel = {
        titleHtml: {
            label: 'Título',
            type: 'text'
        },
        detailHtml: {
            label: 'Descrição',
            type: 'text'
        },
        imageUrl: {
            label: 'URL da imagem',
            type: 'text'
        },
        url: {
            label: 'URL',
            type: 'text'
        },
        order: {
            label: 'Ordem',
            type: 'number'
        }
    };

    ko.utils.extend(self, new crud.ViewModel('information', self.dataModel));
};

ko.applyBindings(new ViewModel());