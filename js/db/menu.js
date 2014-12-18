/**
 * Created by marlon on 17/12/14.
 */
var mongoose = require('mongoose');

Menu = mongoose.model('Menu', mongoose.Schema({
    name: String,
    url: String
}));

exports.initialCharge = function() {
    Menu.count(function (err, count) {
        if (err) {
            return console.error(err);
        }
        if (count == 0) {
            var menus = [
                new Menu({
                    name: 'Home',
                    url: '/'
                }),
                new Menu({
                    name: 'Produtos',
                    url: '/'
                }),
                new Menu({
                    name: 'Institucional',
                    url: '/'
                }),
                new Menu({
                    name: 'Contato',
                    url: '/'
                })
            ];

            menus.forEach(function(menu) {
                menu.save(function (err, menu) {
                    if (err) {
                        return console.error(err);
                    }
                });
            });
        }
    });
};

exports.findAll = function(res) {
    Menu.find({}).lean().exec(function (err, menus) {
        if (err) {
            res.status(404).send(err);
        } else {
            res.send(menus);
        }
    });
};

this.initialCharge();