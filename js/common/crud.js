/**
 * Created by marlon on 23/01/15.
 */
var $ = require('jquery');
var ko = require('knockout');
var base = require('./base');

require('bootstrap');

var getFields = function (dataModel) {
    var fields = [];
    for (var fieldName in dataModel) {
        fields.push({
            name: fieldName,
            label: dataModel[fieldName].label,
            type: dataModel[fieldName].type,
            value: ko.observable()
        });
    }
    return fields;
};

exports.ViewModel = function (name, dataModel) {
    var self = this;

    self.selectedId = ko.observable();
    self.fields = ko.observableArray(getFields(dataModel));
    self.dataValues = ko.observableArray([]);

    self.clearTitle = ko.computed(function () {
        return self.selectedId() ? 'Novo' : 'Limpar';
    });

    self.selectRow = function (data) {
        self.selectedId(data._id);

        self.fields().forEach(function (field) {
            field.value(data[field.name]);
        });
    };

    self.find = function () {
        self.dataValues([]);

        base.findAll(name, self.dataValues);
    };

    self.save = function () {
        var data = {
            _id: self.selectedId()
        };
        self.fields().forEach(function (field) {
            data[field.name] = field.value();
        });

        self.find();
    };

    self.clear = function () {
        self.selectedId(undefined);

        self.fields().forEach(function (field) {
            field.value(undefined);
        });
    };

    self.remove = function () {
        self.clear();

        self.find();
    };

    self.find();

    ko.utils.extend(self, new base.ViewModel());
};