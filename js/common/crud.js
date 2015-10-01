/**
 * Created by marlon on 23/01/15.
 */
var $ = require('jquery');
var ko = require('knockout');
var base = require('./base');
var lightbox = require('./lightbox');
var htmleditor = require('./html-editor');
var upload = require('./upload');
require('bootstrap');

var external = this;

exports.save = function (name, data, successfulAction) {
    console.log(name);
    console.log(data);
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
        var model = dataModel[fieldName];
        var field = {
            name: fieldName,
            label: model.label,
            type: model.type,
            isMultiple: model.isMultiple,
            isFormHidden: model.isFormHidden,
            isTableHidden: model.isTableHidden,
            fieldOptionName: model.fieldOptionName,
            value: model.isMultiple ? ko.observableArray([]) : ko.observable()
        };
        field.options = external.getOptions(field);
        fields.push(field);
    }

    return fields;
};
//conversar com o marlon
exports.getOptions = function (field) {
    var options = ko.observableArray([]);

    if (field.type == 'combo-box') {
        base.findAll(field.name, options, {}, function (option) {
            option.optionText = external.getOptionText(field, option);
        });
    }

    options.subscribe(function () {
        setTimeout(function () {
            external.selectCurrentOption(field);
        }, 0);
    });

    return options;
};

exports.getOptionText = function (field, option) {
    if (option) {
        var value = option[field.fieldOptionName];
        return value.replace(/(<([^>]+)>)/ig, ' ').replace(/  +/g, ' ').trim();
    }
};

exports.findOption = function (field, value) {
    var result = undefined;
    if (value && field.type == 'combo-box') {
        field.options().forEach(function (option) {
            if (option && option._id == value._id) {
                result = option;
            }
        });
    }
    return result;
};

exports.selectCurrentOption = function (field) {
    if (field.type == 'combo-box') {
        var query = base.currentQuery();
        var value = query[field.name];
        if (value) {
            var filter = {
                '_id': value
            };
            field.value(external.findOption(field, filter));
        }
    }
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
            if (!$.isArray(value)) {
                value = [value];
            }

            var link = '';
            for (var index = 0; index < value.length; index++) {
                var file = value[index];
                if (file) {
                    link += index ? ', ' : '';
                    link += '<a class="upload-link" href="/';
                    link += file['path'];
                    link += '" data-uk-lightbox data-lightbox-type="image">';
                    link += file['originalname'];
                    link += '</a>';
                }
            }

            value = link || 'Nenhum arquivo anexado.';
        } else if (field.type == 'combo-box') {
            value = external.getOptionText(field, value);
        }
        return value;
    };

    self.selectRow = function (data) {
        self.selectedId(data._id);

        self.fields().forEach(function (field) {
            var value = data[field.name];
            if (!value && field.isMultiple)
            {
                value = [];
            }
            field.value(external.findOption(field, value) || value);
        });

        if (!value && field.isMultiple)
        {
            value = [];
        }
    };

    self.getValue = function (value) {
        if (value == undefined) {
            return null;
        } else if ($.isArray(value)) {
            var array = [];
            for (var index = 0; index < value.length; index++) {
                array.push(self.getValue(value[index]));
            }
            return array;
        }
        else if (typeof value === 'object') {
            return value._id;
        }
        return value;
    };

    self.find = function () {
        self.dataValues([]);

        base.findAll(name, self.dataValues, base.currentQuery());
    };

    self.save = function () {
        var data = {
            _id: self.selectedId()
        };

        self.fields().forEach(function (field) {
            var value = field.value();
            data[field.name] = self.getValue(value);
        });

        external.save(name, data, function () {
            self.clear();
            self.find();
        });
    };

    self.clear = function () {
        self.selectedId(undefined);

        self.fields().forEach(self.clearValue);
    };

    self.clearValue = function (field) {
        field.value(field.isMultiple ? [] : undefined);
        external.selectCurrentOption(field);
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
        } else if (field.type == 'html-editor') {
            htmleditor.init(field);
        }
    });

    external.selectCurrentMenu();

    ko.utils.extend(self, new base.ViewModel());
};