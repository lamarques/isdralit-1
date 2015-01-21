/**
 * Created by marlon on 21/01/15.
 */
var $ = require('jquery');
var ko = require('knockout');
var base = require('../../common/base');

require('bootstrap');

ViewModel = function () {
    var self = this;

    self.headers = ko.observableArray(['Coluna 1', 'Coluna 2']);
    self.rows = ko.observableArray([['Valor 1', 'Valor 2'], ['Valor 3', 'Valor 4']]);

    ko.utils.extend(self, new base.ViewModel());
};

ko.applyBindings(new ViewModel());