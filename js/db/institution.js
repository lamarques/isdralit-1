/**
 * Created by marlon on 22/07/15.
 */
var mongoose = require('mongoose');

ObjectId = mongoose.Schema.Types.ObjectId;

Institution = mongoose.model('Institution', mongoose.Schema({
    key: String,
    titleHtml: String,
    detailHtml: String,
    image: {
        type: ObjectId,
        ref: 'File'
    },
    order: Number
}));

exports.defaultValues = [
    new Item({
        key: 'institution',
        titleHtml: 'Item 1',
        detailHtml: 'text ahsdkjhaskjd kajhskdjhaskjdh',
        order: 0
    })
];

exports.Model = Institution;
exports.Sort = 'order';