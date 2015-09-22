
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
        //    type: 'combo-box',
        //    fieldOptionName:self.state
        //},
        subject: {
            label: 'Título',
            type: 'text'
        },
        content: {
            label: 'Sua menssagem',
            type: 'text-area'
        }
        //,
        //category: {
        //    label: 'Categoria',
        //    type: 'combo-box',
        //    fieldOptionName: self.categories
        //}
    };
    //self.state = [
    //    'RS'
    //];
    ko.utils.extend(self, new crud.ViewModel('contact', self.dataModel));
};

ko.applyBindings(new ViewModel());