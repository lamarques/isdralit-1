///**
// * Created by marlon on 06/01/15.
// */
//var $ = require('jquery');
//var ko = require('knockout');
//var utils = require('../../common/utils');
//var zoom = require('../../common/zoom');
//var base = require('../../common/base');
//var crud = require('../../common/crud');
//
//
//ViewModel = function () {
//    var self = this;
//
//    self.extra= ko.observable("Digite seu Nome");
//
//
//    self.contact = {
//        id : ko.observable(),
//        firstName: ko.observable("Digite seu Nome"),
//        lastName: ko.observable("Digite seu Sobre nome"),
//        email: ko.observable("Digite seu e-mail"),
//        subject: ko.observable("Digite o título"),
//        content: ko.observable("Sua menssagem"),
//        category: ko.observable("Escolhe uma categoria")
//    };
//
//    self.categories = [
//        'Arquiteto', 'Construtor', 'Vendedor', 'Engenheiro', 'Consumidor final',
//        'Profissional da Construção Civil', 'Lojista'
//    ];
//
//
//    self.submit = function (data) {
//        console.log('extra ==  '+ data.extra);
//        console.log('nome   == '+self.contact.firstName);
//
//        crud.save('contact', self , function (value) {
//            console.log(value); //Registro salvo no banco
//            self.contact.id(value._id);
//
//        });
//    };
//
//
//    //ko.utils.extend(self, new base.ViewModel());
//    ko.utils.extend(self, new crud.ViewModel('contact', self.dataModel));
//};
//
//ko.applyBindings(new ViewModel());

/**
 * Created by marlon on 22/07/15.
 */
var $ = require('jquery');
var ko = require('knockout');
var crud = require('../../common/crud');

ViewModel = function () {
    var self = this;

    self.dataModel = {
        titulo: {
            label: 'Formulário de Contato',
            type: 'label'
        },
        firstName: {
            label: 'Nome',
            type: 'text'
        },
        lastName: {
            label: 'Sobre nome',
            type: 'text'
        },
        email: {
            label: 'email',
            type: 'text'
        },
        subject: {
            label: 'Titulo',
            type: 'text'
        },
        content: {
            label: 'Sua menssagem',
            type: 'text'
        },
        category: {
            label: 'Categoria',
            type: 'combo-box',
            fieldOptionName: self.categories
        }
    };
    self.categories = [
        'Arquiteto', 'Construtor', 'Vendedor', 'Engenheiro', 'Consumidor final',
        'Profissional da Construção Civil', 'Lojista'
    ];
    ko.utils.extend(self, new crud.ViewModel('contact', self.dataModel));
};

ko.applyBindings(new ViewModel());