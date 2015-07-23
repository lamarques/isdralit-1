/**
 * Created by marlon on 09/07/15.
 */
var $ = require('jquery');
var ko = require('knockout');
var crud = require('../../common/crud');

ViewModel = function () {
    var self = this;

    self.dataModel = {
        
        titleHtml: {
            label: 'Descrição',
            type: 'text-area'
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


    ko.utils.extend(self, new crud.ViewModel('product', self.dataModel));

};

ko.applyBindings(new ViewModel());