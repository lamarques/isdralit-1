/**
 * Created by marlon on 30/12/14.
 */

var libs = require('./libs');

var findAll = function (name, observableArray, itemAction) {
    libs.$.ajax({
        url: '/' + name + '/find'
    }).done(function (values) {
        values.forEach(function (value) {
            if (itemAction) {
                itemAction(value);
            }
            observableArray.push(value);
        });
    });
};

exports.ViewModel = function () {
    var self = this;

    self.menus = libs.ko.observableArray([]);

    findAll('menu', self.menus);
};

exports.findAll = findAll;