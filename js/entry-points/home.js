/**
 * Created by marlon on 18/12/14.
 */
var $ = require('../../libs/jquery/dist/jquery');
var ko = require('../../libs/knockout/dist/knockout');

ViewModel = function () {
    var self = this;

    self.menus = ko.observableArray([]);

    self.findMenus = function () {
        $.ajax({
            url: "/menu/find"
        }).done(function (menus) {
            menus.forEach(function (menu) {
                self.menus.push(menu);
            });
        });
    };

    self.findMenus();
}

ko.applyBindings(new ViewModel());