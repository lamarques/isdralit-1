/**
 * Created by marlon on 06/01/15.
 */
var $ = require('jquery');
var ko = require('knockout');
var zoom = require('../common/zoom');
var tabBar = require('../common/tab-bar');
var base = require('../common/base');

ViewModel = function () {
    var self = this;

    self.products = ko.observableArray([]);
    self.selectedPhoto = ko.observable();

    self.selectPhoto = function (data, event) {
        self.selectedPhoto(data.normal);
        zoom.set('.gallery > .photo > div', data.url);
    };

    base.findAll('product', self.products, base.currentQuery(), function (product) {
        product.items.forEach(function (item) {
            item.images = [];
            item.imagesUrl.forEach(function (imageUrl) {
                item.images.push({
                    url: imageUrl,
                    small: base.getBackgroundUrl(imageUrl.replace(/\.([^.]+)$/, '-small.$1')),
                    normal: base.getBackgroundUrl(imageUrl)
                });
            });
            if (item.images.length) {
                self.selectPhoto(item.images[0]);
            }
        });
    }, function () {
        tabBar.init('.tab-bar');
    });

    ko.utils.extend(self, new base.ViewModel());
};

ko.applyBindings(new ViewModel());