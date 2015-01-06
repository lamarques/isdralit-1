/**
 * Created by marlon on 30/12/14.
 */

var $ = require('jquery');
var ko = require('knockout');

var findAll = function (name, observableArray, itemAction, completionAction) {
    $.ajax({
        url: '/' + name + '/find'
    }).done(function (values) {
        if (itemAction) {
            values.forEach(function (value) {
                itemAction(value);
            });
        }
        ko.utils.arrayPushAll(observableArray, values);
        if (completionAction) {
            completionAction();
        }
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

exports.addBackgroundImage = function (value, fieldName) {
    value.backgroundImage = 'url(' + value[fieldName] + ')';
};