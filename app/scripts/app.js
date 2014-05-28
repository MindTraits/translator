'use strict';

/* App Module */

var TranslatorApp = angular.module('TranslatorApp', ['ngRoute','TranslatorControllers']);


/**
 * App route configuration.
 * All the routes are here. To create a route we are chaining when() methods together and
 * end with an otherwise.
 *
 * To create a route:
 *
 * $routeProvider.when('/path/to/route', {
 *     templateUrl : 'the location of the template',
 *     controller : ' the name on the controller to load for the route'
 * }
 */
 
 	TranslatorApp.config(['$routeProvider',function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: "/views/main.html",
			controller: 'MainCtrl'
		})
		.otherwise({
        redirectTo: '/'
      });
  }]);