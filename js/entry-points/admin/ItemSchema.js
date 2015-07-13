/**
 * Created by marlon on 09/07/15.
 */
var $ = require('jquery');
var ko = require('knockout');
var crud = require('../../common/crud');

ViewModel = function () {
    var self = this;

    
    
    self.dataModel = {
        key: {
            label: 'key',
            type: 'text'
        },
        titleHtml: {
            label: 'Titulo',
            type: 'text-area'
        },
         backgroundImageUrl: {
            label: 'URL da imagem de backgroud',
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

    console.log(self.dataModel);
    ko.utils.extend(self, new crud.ViewModel('ItemSchema', self.dataModel));

};

ko.applyBindings(new ViewModel());