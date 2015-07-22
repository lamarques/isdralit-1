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
        detailHtml: {
            label: 'Descrição',
            type: 'html-editor'
        },
        backgroundImage: {
            label: 'Imagem do Anúncio',
            type: 'upload'
        },
        image: {
            label: 'Imagem do Catálogo',
            type: 'upload'
        },
        images: {
            label: 'Galeria de Imagens',
            type: 'upload-multiple'
        },
        order: {
            label: 'Ordem',
            type: 'number'
        }
    };

    ko.utils.extend(self, new crud.ViewModel('item', self.dataModel));
};

ko.applyBindings(new ViewModel());