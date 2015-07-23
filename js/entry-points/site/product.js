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

    self.categories = ko.observableArray([]);
    self.itemSuggestions = ko.observableArray([]);
    self.selectedPhoto = ko.observable();

    self.selectPhoto = function (data, event) {
        self.selectedPhoto(data.url);
        zoom.set('.gallery > .photo > div', '/' + data.path);
    };

    self.openProduct = function (data, event) {
        window.location = '/views/product/' + (data.path || '');
    };

    self.setImages = function (item) {
        var images = item.images;
        if (images) {
            images.forEach(function (image) {
                image.url = base.getBackgroundUrl('/' + image.path);
            });
            if (images.length) {
                self.selectPhoto(images[0]);
            }
        }
    };

    var query = base.currentQuery();
    base.findAll('category', self.categories, { key: query['category.key'] }, function (category) {
        var suggestions = [];
        category.items = ko.observableArray([]);
        base.findAll('item', category.items, {}, function (item) {
            item.isMain = item.key == query['key'];
            if (item.isMain) {
                self.setImages(item);
                item.measuresImageSource = item.measuresImage ? '/' + item.measuresImage.path : '';
                item.informations = ko.observableArray([]);
                base.findAll('technical', item.informations, { item: item._id });
            } else if (suggestions.length < 4) {
                item.path = category.key + '/' + item.key;
                base.addBackgroundImage(item, 'backgroundImage');
                suggestions.push(item);
            }
        }, function () {
            ko.utils.arrayPushAll(self.itemSuggestions, suggestions);
            tabBar.init('.tab-bar');
        });
    });

    ko.utils.extend(self, new base.ViewModel());
};

ko.applyBindings(new ViewModel());