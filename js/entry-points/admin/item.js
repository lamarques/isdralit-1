/* global self */

/**
 * Created by marlon on 09/07/15.
 */
var $ = require('jquery');
var ko = require('knockout');
var crud = require('../../common/crud');
var base = require('../../common/base'); 
 
ViewModel = function () {
    var self = this;

    self.dataModel = {
//        product: {
//            label: 'Categoria',
//            type: 'combo-box',
//            optionsText: 'titleHtml',
//            options: ko.observableArray([])
//        },
        key: {
            label: 'URL',
            type: 'text'
        },
        titleHtml: {
            label: 'Título',
            type: 'text-area'
        },
        detailHtml: {
            label: 'Descrição',
            type: 'text-area'
        },
        backgroundImageUrl: {
            label: 'URL da imagem de fundo',
            type: 'text'
        },
        imageUrl: {
            label: 'URL da imagem',
            type: 'text'
        },
        order: {
            label: 'Ordem',
            type: 'number'
        }
    };

//    base.findAll('product','name', self.dataModel.product.options);

    ko.utils.extend(self, new crud.ViewModel('Item', self.dataModel));
};

window.viewModel = new ViewModel();
ko.applyBindings(window.viewModel);

       