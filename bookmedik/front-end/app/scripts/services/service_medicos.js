'use strict';

/**
 * @ngdoc service
 * @name bookmedikApp.serviceMedicos
 * @description
 * # serviceMedicos
 * Service in the bookmedikApp.
 */
var app = angular.module('bookmedikApp')
	app.service('serviceMedicos', function (serviceUrl, $resource) {
    	// AngularJS will instantiate a singleton by calling "new" on this function
    	this.Get_Medicos = function() {
	        return $resource(serviceUrl.server().app()+'medicos', {}
	        , {
	            add: {
	                method: 'GET', isArray: false,
	                params: {
	                    // token: $localStorage.token,
	                }
	            }
	        });
	    };
    	this.Add_Medicos = function() {
	        return $resource(serviceUrl.server().app()+'medicos', {}
	        , {
	            add: {
	                method: 'POST', isArray: false,
	                params: {
	                    // token: $localStorage.token,
	                }
	            }
	        });
	    };
	    // this.Update_Medicos = function() {
	    //     return $resource(serviceUrl.server().app()+'medicos/:id', {}
	    //     , {
	    //         update: {
	    //             method: 'PUT', isArray: false,
	    //             params: {
	    //                 // token: $localStorage.token,
	    //             }
	    //         }
	    //     });
	    // };
	});
