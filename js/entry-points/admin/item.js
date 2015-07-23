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

  self.categorias = ko.observableArray([]);
  base.findAll('product', self.categorias); 
 
    self.dataModel = {
       itens: {
           label: 'Categoria',
           type: 'combo-box',
           optionsText: 'name',

          option : self.categorias
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

       