/**
 * Created by marlon on 30/12/14.
 */

var libs = require('./libs');

exports.ViewModel = function () {
    var self = this;

    self.menus = libs.ko.observableArray([]);

    self.findMenus = function () {
        libs.$.ajax({
            url: "/menu/find"
        }).done(function (menus) {
            menus.forEach(function (menu) {
                self.menus.push(menu);
            });
        });
    };

    self.findMenus();
};

