
//        category: ko.observable("Escolhe uma categoria")
//    };
//
//    self.categories = [
//        'Arquiteto', 'Construtor', 'Vendedor', 'Engenheiro', 'Consumidor final',
//        'Profissional da Construção Civil', 'Lojista'
//    ];
//
/**
 * Created by marlon on 22/07/15.
 */
var $ = require('jquery');
var ko = require('knockout');
var crud = require('../../common/crud');

ViewModel = function () {
    var self = this;

    self.dataModel = {

        firstName: {
            label: 'Nome',
            type: 'text'
        },

        email: {
            label: 'E-mail',
            type: 'text'
        },
        cellphone: {
            label: 'Telefone',
            type: 'text'
        },
        //state: {
        //    label: 'Estado',
        //    type: 'combo-box2',
        //    fieldOptionName:ko.observableArray(['RS', 'SC', 'PR'])
        //},
        subject: {
            label: 'Título',
            type: 'text'
        },
        content: {
            label: 'Sua mensagem',
            type: 'text-area'
        }
        //states: ko.observableArray(['RS', 'SC', 'PR']),
        //categories : ko.observableArray( [
        //    'Arquiteto', 'Construtor', 'Vendedor', 'Engenheiro', 'Consumidor final',
        //    'Profissional da Construção Civil', 'Lojista'
        //])
    };
    //self.state = [
    //    'RS'
    //];
    ko.utils.extend(self, new crud.ViewModel('contact', self.dataModel));
};

ko.applyBindings(new ViewModel());