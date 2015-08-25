/**
 * Created by marlon on 06/01/15.
 */
var $ = require('jquery');
var ko = require('knockout');
var utils = require('../../common/utils');
var zoom = require('../../common/zoom');
var base = require('../../common/base');

ViewModel = function () {
    var self = this;

    self.institutions = ko.observableArray([]);

    base.findAll('institution', self.institutions, {}, function (institution) {
        base.addBackgroundImage(institution, 'image');
    });

    ko.utils.extend(self, new base.ViewModel());
};

ko.applyBindings(new ViewModel());