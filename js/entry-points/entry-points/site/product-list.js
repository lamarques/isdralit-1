/**
 * Created by marlon on 06/01/15.
 */
var $ = require('jquery');
var ko = require('knockout');
var base = require('../../common/base');

ViewModel = function () {
    var self = this;

    self.categories = ko.observableArray([]);

    self.openProduct = function (path, data, event) {
        window.location = '/views/product/' + (path || '');
    };

    base.findAll('category', self.categories, base.currentQuery(), function (category) {
        category.titleHtml = category.titleHtml.replace(/(<([^>]+)>)/ig, ' ').replace(/  +/g, ' ').trim();
        category.items = ko.observableArray([]);

        var query = {
            category: category._id
        };
        base.findAll('item', category.items, query, function (item) {
            base.addBackgroundImage(item, 'image');
        });
    });

    ko.utils.extend(self, new base.ViewModel());
};

ko.applyBindings(new ViewModel());