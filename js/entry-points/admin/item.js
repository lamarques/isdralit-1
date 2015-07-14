/**
 * Created by marlon on 09/07/15.
 */
var $ = require('jquery');
var ko = require('knockout');
var crud = require('../../common/crud');
//var Product = require ('../../db/product')
ViewModel = function () {
    var self = this;

    
    
    self.dataModel = {
       itens: {
           label: 'Categoria',
           type: 'combo-box',
           optionsText: 'name',
           options:[ { name: 'teste 123 '}, { name: 'uhul' } ]
//        option : ko.observableArray(Product)
       } ,
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

    ko.utils.extend(self, new crud.ViewModel('Item', self.dataModel));

};

ko.applyBindings(new ViewModel());

       