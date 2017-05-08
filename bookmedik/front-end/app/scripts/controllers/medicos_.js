'use strict';

/**
 * @ngdoc function
 * @name bookmedikApp.controller:MedicosCtrl
 * @description
 * # MedicosCtrl
 * Controller of the bookmedikApp
 */
var app = angular.module('bookmedikApp')
  	app.controller('MedicosCtrl', function (serviceMedicos, $scope) {
  		$scope.bodysave = 	{
							name:   {
										nombres:"deivids", apellidos:"Criollo"
									},
							genero: "MASCULINO",
							completed: false,
							email:"deividscriollo@gmail.com",
							fecha_nac: Date,
							documentos:{cedula:"1004034805"},
							especialidad:"Medico General",
							direccion:{
										pais: "Ecuador", 
										estado: "Imbabura", 
										ciudad: "Ibarra", 
										barrio: "Caranqui",
										calle_pri: "Gral. Julio Andrade",
										calle_sec: "Pri. Cory Cory",
										numero: "Sin numero"
									},
							phone:{casa:"06265518", movil:"0987113522"},
							note: 'Getting there...'
						};
		// get
		serviceMedicos.GET_Medicos().add().$promise.then(function(data) {
    		console.log(data);
    	});
		// add
    	serviceMedicos.Add_Medicos().add($scope.body).$promise.then(function(data) {
    		console.log(data);
    	});
    	// update
    	console.log($scope.bodys);
    	// serviceMedicos.Update_Medicos({id:'24615'}).Actualizar($scope.bodys).$promise.then(function(data) {
    	// 	console.log(data);
    	// });
  	});
