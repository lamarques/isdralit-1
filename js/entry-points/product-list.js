/**
 * Created by marlon on 06/01/15.
 */
var $ = require('jquery');
var ko = require('knockout');
var base = require('../common/base');

ViewModel = function () {
    var self = this;

    self.products = ko.observableArray([]);

    base.findAll('product', self.products);

    ko.utils.extend(self, new base.ViewModel());
};

ko.applyBindings(new ViewModel());