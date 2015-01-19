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

var queryString = function (data) {
    utils.removeInvalidAttributes(data);
    if (!$.isEmptyObject(data)) {
        return '?'.concat($.param(data));
    }
    return '';
};

exports.ViewModel = function () {
    var self = this;

    self.menus = ko.observableArray([]);

    self.openUrl = function (value) {
        window.location = value['url'];
    };

    findAll('menu', self.menus);

    $('body > .spinner').css('display', 'none');
    $('body > .content').css('display', 'block');
};

exports.findAll = findAll;

exports.queryString = queryString;

exports.currentQuery = function () {
    return JSON.parse($('input[name=query]').val());
};

exports.getBackgroundUrl = function (value) {
    return value ? 'url(' + value + ')' : 'none';
};

exports.addBackgroundImage = function (item, fieldName) {
    var value = item[fieldName];
    if ($.isArray(value)) {
        value = value.length ? value[0] : '';
    }
    item.backgroundImage = this.getBackgroundUrl(value);
};