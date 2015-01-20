/**
 * Created by marlon on 06/01/15.
 */
var $ = require('jquery');
var ko = require('knockout');
var utils = require('../../common/utils');
var zoom = require('../../common/zoom');
var tabBar = require('../../common/tab-bar');
var base = require('../../common/base');

ViewModel = function () {
    var self = this;

    self.products = ko.observableArray([]);
    self.itemSuggestions = ko.observableArray([]);
    self.selectedPhoto = ko.observable();

    self.selectPhoto = function (data, event) {
        self.selectedPhoto(data.normal);
        zoom.set('.gallery > .photo > div', data.url);
    };

    self.openProduct = function (data, event) {
        window.location = '/views/product/' + (data.path || '');
    };

    self.setMeasures = function (item) {
        item.measureHeaders = [];
        item.measureRows = [];

        item.measures.forEach(function (measure) {
            item.measureHeaders.push(measure.header);
            measure.values.forEach(function (value, index) {
                if (!item.measureRows[index]) {
                    item.measureRows[index] = [];
                }
                item.measureRows[index].push(utils.formatNumber(value, measure.precision));
            });
        });
    };

    var query = base.currentQuery();
    base.findAll('product', self.products, query, function (product) {
        var suggestions = [];
        product.items.forEach(function (item) {
            item.isMain = item.key == query['items.key'];
            if (item.isMain) {
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

                self.setMeasures(item);
            } else if (suggestions.length < 4) {
                item.path = product.key + '/' + item.key;
                base.addBackgroundImage(item, 'backgroundImageUrl');
                suggestions.push(item);
            }
        });
        ko.utils.arrayPushAll(self.itemSuggestions, suggestions);
    }, function () {
        tabBar.init('.tab-bar');
    });

    ko.utils.extend(self, new base.ViewModel());
};

ko.applyBindings(new ViewModel());