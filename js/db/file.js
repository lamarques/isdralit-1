/**
 * Created by marlon on 20/07/15.
 */
var mongoose = require('mongoose');

File = mongoose.model('File', mongoose.Schema({
    fieldname: String,
    originalname: String,
    encoding: String,
    mimetype: String,
    destination: String,
    filename: String,
    path: String,
    size: Number
}));

exports.defaultValues = [];

exports.Model = File;