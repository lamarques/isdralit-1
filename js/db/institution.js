/**
 * Created by marlon on 22/07/15.
 */
var mongoose = require('mongoose');

ObjectId = mongoose.Schema.Types.ObjectId;


Institution = mongoose.model('Institution', mongoose.Schema({
    url: String,
    titleHtml: String,
    detailHtml: String,
    image: {
        type: ObjectId,
        ref: 'File'
    },
    order: Number

}));



exports.Model = Institution;
exports.Populate = 'image';
exports.Sort = 'order';