'use strict';

/**
 * @ngdoc function
 * @name bookmedikApp.controller:PacientesCtrl
 * @description
 * # PacientesCtrlCtrl
 * Controller of the bookmedikApp
 */

var app = angular.module('bookmedikApp')
  	app.controller('PacientesCtrl', function (servicePacientes, $scope, $mdDialog) {
    	console.log(servicePacientes);
    	$scope.add_resource = function(ev){
    		$mdDialog.show({
		      controller: Dialog_add_Ctrl,
		      templateUrl: 'views/pacientes/add.html',
		      parent: angular.element(document.body),
		      targetEvent: ev,
		      clickOutsideToClose:true,
		      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
		    })
		    .then(function(answer) {
		      $scope.status = 'You said the information was .';
		    }, function() {
		      $scope.status = 'You cancelled the dialog.';
		    });
    	}

    	function Dialog_add_Ctrl(servicePacientes, $scope){
    		$scope.data = {nombre:'deivid', apellido:'criollo'}
    		$scope.Add_ = function(){

    			
    			// 
				// servicePacientes.Pacientes().add($scope.data).$promise.then(function(response) {
				servicePacientes.Pacientes().add($scope.data_param_impuesto).$promise.then(function(data) {

				    console.log(response);
				    // $scope.pack = $scope.pack.concat(response.quotes);
				    // $rootScope.$broadcast('fetch-done');
				    // if (response.quotes.length == 0) {
				    //   $rootScope.$broadcast('fetch-nomore');
				    // }
				});
    		}


    	}
  	});
