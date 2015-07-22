/**
 * Created by marlon on 22/07/15.
 */
var mongoose = require('mongoose');

ObjectId = mongoose.Schema.Types.ObjectId;

Item = mongoose.model('Item', mongoose.Schema({
    key: String,
    titleHtml: String,
    detailHtml: String,
    category: {
        type: ObjectId,
        ref: 'Category'
    },
    backgroundImage: {
        type: ObjectId,
        ref: 'File'
    },
    image: {
        type: ObjectId,
        ref: 'File'
    },
    images: [{
        type: ObjectId,
        ref: 'File'
    }],
    order: Number
}));

exports.defaultValues = [
    new Item({
        key: 'item-1',
        titleHtml: 'Item 1',
        detailHtml: 'Detalhes do produto 1',
        order: 0
    }),
    new Item({
        key: 'item-2',
        titleHtml: 'Item 2',
        detailHtml: 'Detalhes do produto 2',
        order: 1
    }),
    new Item({
        key: 'item-3',
        titleHtml: 'Item 3',
        detailHtml: 'Detalhes do produto 3',
        order: 2
    }),
    new Item({
        key: 'item-4',
        titleHtml: 'Item 4',
        detailHtml: 'Detalhes do produto 4',
        order: 3
    })
];

exports.Model = Item;
exports.Populate = 'backgroundImage image images';
exports.Sort = 'order';