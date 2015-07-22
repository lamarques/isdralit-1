/**
 * Created by marlon on 22/07/15.
 */
var mongoose = require('mongoose');

ObjectId = mongoose.Schema.Types.ObjectId;

Category = mongoose.model('Category', mongoose.Schema({
    key: String,
    titleHtml: String,
    image: {
        type: ObjectId,
        ref: 'File'
    },
    order: Number
}));

exports.defaultValues = [
    new Category({
        key: 'caixas-de-agua',
        titleHtml: 'Caixas<br>de água',
        order: 0
    }),
    new Category({
        key: 'acabamentos-em-pvc',
        titleHtml: 'Acabamentos<br>em PVC',
        order: 1
    }),
    new Category({
        key: 'coberturas',
        titleHtml: 'Coberturas',
        order: 2
    }),
    new Category({
        key: 'tubos-e-conexoes',
        titleHtml: 'Tubos<br>e conexões',
        order: 3
    })
];

exports.Model = Category;
exports.Populate = 'image';
exports.Sort = 'order';