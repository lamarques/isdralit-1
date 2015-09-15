/**
 * Created by marlon on 06/01/15.
 */
var $ = require('jquery');
var ko = require('knockout');
var utils = require('../../common/utils');
var zoom = require('../../common/zoom');
var base = require('../../common/base');
var crud = require('../../common/crud');

ViewModel = function () {
    var self = this;

    self.contact = {
        firstName: ko.observable(),
        lastName: ko.observable(),
        email: ko.observable(),
        subject: ko.observable(),
        content: ko.observable(),
        category: ko.observable()
    };

    self.categories = [
        'Volvo', 'Saab', 'Fiat', 'Audi'
    ];

    self.submit = function (data) {
    };


    //ko.utils.extend(self, new base.ViewModel());
    ko.utils.extend(self, new crud.ViewModel('contact', self.dataModel));
};

ko.applyBindings(new ViewModel());