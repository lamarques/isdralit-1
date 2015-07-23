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
        category: {
            label: 'Categoria',
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
        backgroundImage: {
            label: 'Imagem do Anúncio',
            type: 'upload',
            isTableHidden: true
        },
        image: {
            label: 'Imagem do Catálogo',
            type: 'upload',
            isTableHidden: true
        },
        images: {
            label: 'Galeria de Imagens',
            type: 'upload',
            isMultiple: true,
            isTableHidden: true
        },
        order: {
            label: 'Ordem',
            type: 'number'
        }
    };

    self.openTechnical = function () {
        window.location = '/cms/views/technical/item/' + self.selectedId();
    };

    ko.utils.extend(self, new crud.ViewModel('item', self.dataModel));
};

ko.applyBindings(new ViewModel());