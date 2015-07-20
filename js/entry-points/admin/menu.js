/**
 * Created by marlon on 21/01/15.
 */
var $ = require('jquery');
var ko = require('knockout');
var crud = require('../../common/crud');

ViewModel = function () {
    var self = this;

    self.dataModel = {
        name: {
            label: 'Nome',
            type: 'text'
        },
        url: {
            label: 'URL',
            type: 'upload'
        },
        order: {
            label: 'Ordem',
            type: 'number'
        }
    };

    ko.utils.extend(self, new crud.ViewModel('menu', self.dataModel));
};

ko.applyBindings(new ViewModel());