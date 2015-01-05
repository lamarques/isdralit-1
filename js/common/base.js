/**
 * Created by marlon on 30/12/14.
 */

var $ = require('jquery');
var ko = require('knockout');

var findAll = function (name, observableArray, itemAction) {
    $.ajax({
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

    self.menus = ko.observableArray([]);
    
    self.openUrl = function(value) {
        window.location = value['url'];
    };

    findAll('menu', self.menus);
};

exports.findAll = findAll;