/**
 * Created by marlon on 18/12/14.
 */
var libs = require('../common/libs');
var base = require('../common/base');

ViewModel = function () {
    var self = this;

    self.banners = libs.ko.observableArray([]);
    self.products = libs.ko.observableArray([]);
    self.informations = libs.ko.observableArray([]);

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

    libs.ko.utils.extend(self, new base.ViewModel());
};

libs.ko.applyBindings(new ViewModel());