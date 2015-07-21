/**
 * Created by marlon on 30/12/14.
 */
var mongoose = require('mongoose');

ObjectId = mongoose.Schema.Types.ObjectId;

Banner = mongoose.model('Banner', mongoose.Schema({
    detailHtml: String,
    image: {
        type: ObjectId,
        ref: 'File'
    },
    url: String,
    order: Number
}));

exports.defaultValues = [
    new Banner({
        detailHtml: 'As melhores soluções<br>em acabamentos<br>e coberturas',
        url: '/',
        order: 0
    }),
    new Banner({
        detailHtml: 'As melhores soluções<br>em acabamentos<br>e coberturas',
        url: '/',
        order: 1
    })
];

exports.Model = Banner;
exports.Populate = 'image';
exports.Sort = 'order';