/**
 * Created by marlon on 06/01/15.
 */
var $ = require('jquery');
var ko = require('knockout');
var utils = require('../../common/utils');
var zoom = require('../../common/zoom');
var base = require('../../common/base');


ViewModel = function () {
    var self = this;
    self.dataModel = {};
    
    ko.utils.extend(self, new base.ViewModel());
};

ko.applyBindings(new ViewModel());

$("select").change(function () {
    var option = $( "select option:selected" ).val();
    var appE = '';
    $.getJSON('../upload/representantes.json', function(data){
    	$("#representante_content").fadeOut('fast', function(){
    		$("#representante_content").html(""); 
			$.each( data, function( key, value ) {
				if(option == key){
					$.each( value, function( k, v){
						appE += '<div class="representantebox">\n';
						appE += '	<div class="representanteheader">\n';
						appE += '		<div class="representantetitulo">'+v['Titulo']+'</div>\n';
		                appE += '		<div class="representantenome">'+v['Nome']+'</div>\n';
		                appE += '		<div class="representantecidade" style="">'+v['Cidade']+'</div>\n';
		                appE += '	</div>\n';
	                	appE += '	<div class="representantebody">\n';
	                	appE += '		<div class="representanteemail">'+v['EmailPrincipal']+'</div>\n';
	                	if(v['EmailSecundario'] != "") appE += '		<div class="representanteemail">'+v['EmailSecundario']+'</div>\n';
	                	appE += '		<div class="representantetelefone">'+v['TelefonePrincipal'];
	                	if(v['TelefoneSecundario'] != "") appE += ' <span style="color: #f7941d;">|</span> '+v['TelefoneSecundario'];
	                	appE +=	'</div>\n';
						appE += '	</div>\n';
						appE += '</div><br>\n';
					});
				}
			});
			$("#representante_content").html(appE);
			$("#representante_content").fadeIn('fast');
    	});
	});
});