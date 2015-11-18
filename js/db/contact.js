var mongoose = require('mongoose');

ObjectId = mongoose.Schema.Types.ObjectId;

Contact = mongoose.model('Contact', mongoose.Schema({

    firstName: String,
    state: String,
    email: String,
    subject: String,
    content: String,
    cellphone:String,
    date:Date
    //category: String

}));


exports.Model = Contact;
exports.Populate = '';
exports.Sort = 'firstName';