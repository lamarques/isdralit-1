/**
 * Created by marlon on 21/01/15.
 */
var $ = require('jquery');
var ko = require('knockout');
var crud = require('../../common/crud');

ViewModel = function () {
    var self = this;

    self.dataModel = {
        detailHtml: {
            label: 'Descrição',
            type: 'text-area'
        },
        image: {
            label: 'Imagem',
            type: 'upload'
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

    ko.utils.extend(self, new crud.ViewModel('banner', self.dataModel));
};

ko.applyBindings(new ViewModel());