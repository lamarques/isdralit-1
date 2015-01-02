/**
 * Created by marlon on 30/12/14.
 */
var db = require('./database');

var charge = function(entity) {
    db.removeAll(entity.Model);
    db.saveAll(entity.defaultValues);
};

exports.start = function () {
    charge(db.Menu);
    charge(db.Banner);
    charge(db.Product);
    charge(db.Information);
};