'use strict';

/**
 * @ngdoc service
 * @name bookmedikApp.servicePacientes
 * @description
 * # servicePacientes
 * Service in the bookmedikApp.
 */
var app = angular.module('bookmedikApp')
  	app.service('servicePacientes', function ($resource, serviceUrl) {
    	this.Pacientes = function() {
	        return $resource(serviceUrl.server().app()+'pacientes', {}
	        , {
	            add: {
	                method: 'GET', isArray: false,
	                params: {
	                    // token: $localStorage.token,
	                }
	            }
	        });
	    };
  	});
