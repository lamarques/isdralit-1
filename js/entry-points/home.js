/**
 * Created by marlon on 18/12/14.
 */
var libs = require('../common/libs');
var base = require('../common/base');

ViewModel = function () {
    var self = this;

    self.banners = libs.ko.observableArray([]);
    self.products = libs.ko.observableArray([]);

    base.findAll('banner', self.banners, function(banner) {
        banner.backgroundImage = 'url(' + banner.imageUrl + ')';
    });
    base.findAll('product', self.products, function(product) {
        product.backgroundImage = 'url(' + product.buttonImageUrl + ')';
    });

    libs.ko.utils.extend(self, new base.ViewModel());
};

libs.ko.applyBindings(new ViewModel());