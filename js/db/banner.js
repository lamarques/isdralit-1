/**
 * Created by marlon on 30/12/14.
 */
var mongoose = require('mongoose');

Banner = mongoose.model('Banner', mongoose.Schema({
    detailHtml: String,
    imageUrl: String,
    url: String,
    order: Number
}));

exports.initialCharge = function () {
    Banner.count(function (err, count) {
        if (err) {
            return console.error(err);
        }
        if (count == 0) {
            var banners = [
                new Banner({
                    detailHtml: 'As melhores soluções<br>em acabamentos<br>e coberturas',
                    imageUrl: '/images/banner-1.jpg',
                    url: '/',
                    order: 0
                })
            ];

            banners.forEach(function (banner) {
                banner.save(function (err, banner) {
                    if (err) {
                        return console.error(err);
                    }
                });
            });
        }
    });
};

exports.findAll = function (res) {
    Banner.find({}).sort('order').lean().exec(function (err, banners) {
        if (err) {
            res.status(404).send(err);
        } else {
            res.send(banners);
        }
    });
};

this.initialCharge();