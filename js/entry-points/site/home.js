/**
 * Created by marlon on 18/12/14.
 */
var $ = require('jquery');
var ko = require('knockout');
var slider = require('../../common/slider');
var base = require('../../common/base');

ViewModel = function () {
    var self = this;

    self.banners = ko.observableArray([]);
    self.categories = ko.observableArray([]);
    self.informations = ko.observableArray([]);

    self.openProducts = function (data, event) {
        window.location = '/views/product/' + (data.key || '');
        event.stopPropagation();
    };

    base.findAll('banner', self.banners, {}, function (banner) {
        base.addBackgroundImage(banner, 'image');
    }, function () {
        slider.init('.banner');
    });

    base.findAll('category', self.categories, {}, function (category) {
        base.addBackgroundImage(category, 'image');
    });

    base.findAll('information', self.informations, {}, function (information) {
        base.addBackgroundImage(information, 'image');
    });

    ko.utils.extend(self, new base.ViewModel());
};

ko.applyBindings(new ViewModel());