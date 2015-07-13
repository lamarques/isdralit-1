/* global exports */

/**
 * Created by gustavocastrohs on 09/07/15.
 */
var mongoose = require('mongoose'),
     ObjectId = mongoose.Schema.ObjectId;



InformationSchema = mongoose.Schema({
    titleHtml: String,
    detailHtml: String,
    order: Number
});

exports.Model = mongoose.model('InformationSchema', InformationSchema);