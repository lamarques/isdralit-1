/**
 * Created by marlon on 21/01/15.
 */
var $ = require('jquery');
var ko = require('knockout');
var base = require('../../common/base');

require('bootstrap');

ViewModel = function () {
    var self = this;

    ko.utils.extend(self, new base.ViewModel());
};

ko.applyBindings(new ViewModel());