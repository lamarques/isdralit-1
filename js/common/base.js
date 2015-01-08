/**
 * Created by marlon on 30/12/14.
 */

var $ = require('jquery');
var ko = require('knockout');
var utils = require('./utils');

var findAll = function (name, observableArray, query, itemAction, completionAction) {
    $.ajax({
        url: '/' + name + '/find' + queryString(query)
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

var queryString = function(data) {
    utils.removeInvalidAttributes(data);
    if (!$.isEmptyObject(data)) {
        return '?'.concat($.param(data));
    }
    return '';
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

exports.queryString = queryString;

exports.currentQuery = function() {
    return JSON.parse($('input[name=query]').val());
};

exports.addBackgroundImage = function (value, fieldName) {
    value.backgroundImage = 'url(' + value[fieldName] + ')';
};