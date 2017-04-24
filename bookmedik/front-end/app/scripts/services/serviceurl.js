'use strict';

/**
 * @ngdoc service
 * @name bookmedikApp.serviceUrl
 * @description
 * # serviceUrl
 * Service in the bookmedikApp.
 */
var app = angular.module('bookmedikApp')
  	.service('serviceUrl', function () {
    	// AngularJS will instantiate a singleton by calling "new" on this function
	    this.server=function() {
	        return {
	            app: function() {
	                return "http://localhost:8000/index.php/";
	            }
	            
	        }
	    };
  	});
