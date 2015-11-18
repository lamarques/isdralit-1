
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
var now = new Date();
console.log(now);
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
        state: {
            label:'Selecione seu estado',
            type: 'combo-box2'
        },
        cellphone: {
            label: 'Telefone',
            type: 'text'
        },
        subject: {
            label: 'Título',
            type: 'text'
        },
        content: {
            label: 'Sua mensagem',
            type: 'text-area'

        }




    };



        ko.utils.extend(self, new crud.ViewModelContact('contact', self.dataModel));

};


ko.applyBindings(new ViewModel());