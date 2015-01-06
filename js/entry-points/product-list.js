/**
 * Created by marlon on 06/01/15.
 */
var $ = require('jquery');
var ko = require('knockout');
var base = require('../common/base');

ViewModel = function () {
    var self = this;

    self.products = ko.observableArray([]);

    self.openProduct = function (data, event) {
        window.location = '/views/product/' + (data._id || '');
    };

    base.findAll('product', self.products, function (product) {
        base.addBackgroundImage(product, 'buttonImageUrl');
    });

    ko.utils.extend(self, new base.ViewModel());
};

ko.applyBindings(new ViewModel());