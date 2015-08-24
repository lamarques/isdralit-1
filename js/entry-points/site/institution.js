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

        base.findAll('institution', function (item) {


    });

    ko.utils.extend(self, new base.ViewModel());
};

ko.applyBindings(new ViewModel());