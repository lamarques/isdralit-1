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

exports.defaultValues = [
    new Banner({
        detailHtml: 'As melhores soluções<br>em acabamentos<br>e coberturas',
        imageUrl: '/images/banner-1.jpg',
        url: '/',
        order: 0
    })
];

exports.Model = Banner;