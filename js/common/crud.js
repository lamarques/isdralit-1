/**
 * Created by marlon on 23/01/15.
 */
var $ = require('jquery');
var ko = require('knockout');
var base = require('./base');
var lightbox = require('./lightbox');
var upload = require('./upload');
require('bootstrap');

var external = this;

exports.save = function (name, data, successfulAction) {
    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        url: '/' + name + '/save',
        data: JSON.stringify(data)
    }).done(function (value) {
        if (successfulAction) {
            successfulAction(value);
        }
    });
};

exports.remove = function (name, id, successfulAction) {
    $.ajax({
        type: 'DELETE',
        url: '/' + name + '/remove/' + id
    }).done(function (value) {
        if (successfulAction) {
            successfulAction(value);
        }
    });
};

exports.getFields = function (dataModel) {
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

exports.selectCurrentMenu = function () {
    var path = document.location.pathname;
    var $link = $('ul > li > a[href="' + path + '"]');
    $link.parent().addClass('active');
};

exports.ViewModel = function (name, dataModel) {
    var self = this;

    self.selectedId = ko.observable();
    self.fields = ko.observableArray(external.getFields(dataModel));
    self.dataValues = ko.observableArray([]);

    self.clearTitle = ko.computed(function () {
        return self.selectedId() ? 'Novo' : 'Limpar';
    });

    self.renderHtml = function (field, data) {
        var value = data ? data[field.name] : field.value();
        if (field.type == 'upload') {
            if (value) {
                var link = '<a class="upload-link" href="/';
                link += value['path'];
                link += '" data-uk-lightbox data-lightbox-type="image">';
                link += value['originalname'];
                link += '</a>';

                value = link;
            } else {
                value = "Nenhum arquivo anexado.";
            }
        }
        return value;
    };

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
            var value = field.value();
            if (value && typeof value === 'object') {
                value = value._id;
            }
            data[field.name] = value || null;
        });

        external.save(name, data, function () {
            self.clear();
            self.find();
        });
    };

    self.clear = function () {
        self.selectedId(undefined);

        self.fields().forEach(self.clearField);
    };

    self.clearField = function (field) {
        field.value(undefined);
    };

    self.remove = function () {
        external.remove(name, self.selectedId(), function () {
            self.clear();
            self.find();
        });
    };

    self.find();

    lightbox.init('[data-uk-lightbox]');

    self.fields().forEach(function (field) {
        if (field.type == 'upload') {
            upload.init(field);
        }
    });

    external.selectCurrentMenu();

    ko.utils.extend(self, new base.ViewModel());
};