/**
 * Created by marlon on 18/12/14.
 */
var libs = require('../common/libs');
var base = require('../common/base');

ViewModel = function () {
    var self = this;

    self.banners = libs.ko.observableArray([]);

    self.findBanners = function () {
        libs.$.ajax({
            url: '/banner/find'
        }).done(function (banners) {
            banners.forEach(function (banner) {
                banner.backgroundImage = 'url(' + banner.imageUrl + ')';
                self.banners.push(banner);
            });
        });
    };

    self.findBanners();

    libs.ko.utils.extend(self, new base.ViewModel());
};

libs.ko.applyBindings(new ViewModel());