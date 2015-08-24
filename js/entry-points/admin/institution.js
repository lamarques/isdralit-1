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


        image: {
            label: 'Imagem da pagina do institucional',
            type: 'upload',
            isTableHidden: true
        },

        order: {
            label: 'Ordem',
            type: 'number'
        }
    };



    ko.utils.extend(self, new crud.ViewModel('institution', self.dataModel));
};

ko.applyBindings(new ViewModel());