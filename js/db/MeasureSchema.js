/* global exports */

/**
 * Created by gustavocastrohs on 09/07/15.
 */
var mongoose = require('mongoose');

MeasureSchema = mongoose.Schema({
    header: String,
    values: Array,
    precision: Number,
    order: Number
});


exports.Model = mongoose.model('MeasureSchema', MeasureSchema);;