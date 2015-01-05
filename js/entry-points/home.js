/**
 * Created by marlon on 18/12/14.
 */
var $ = require('jquery');
var ko = require('knockout');

var base = require('../common/base');

ViewModel = function () {
    var self = this;

    self.banners = ko.observableArray([]);
    self.products = ko.observableArray([]);
    self.informations = ko.observableArray([]);

    self.addBackgroundImage = function (value, fieldName) {
        value.backgroundImage = 'url(' + value[fieldName] + ')';
    };

    base.findAll('banner', self.banners, function(banner) {
        self.addBackgroundImage(banner, 'imageUrl');
    });
    base.findAll('product', self.products, function(product) {
        self.addBackgroundImage(product, 'buttonImageUrl');
    });
    base.findAll('information', self.informations, function(information) {
        self.addBackgroundImage(information, 'imageUrl');
    });

    ko.utils.extend(self, new base.ViewModel());
};

ko.applyBindings(new ViewModel());