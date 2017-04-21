'use strict';

/**
 * @ngdoc overview
 * @name bookmedikApp
 * @description
 * # bookmedikApp
 *
 * Main module of the application.
 */
var app = angular.module('bookmedikApp', [
                                          'ngAnimate',
                                          'ngAria',
                                          'ngCookies',
                                          'ngMessages',
                                          'ngResource',
                                          'ngRoute',
                                          'ngSanitize',
                                          'ngTouch',
                                          'ngMaterial',
                                          'satellizer',
                                          'route-segment',
                                          'view-segment'
                                        ])
  app.config(function ($routeSegmentProvider) {
    $routeSegmentProvider.
        when('/section1',          's1').
        when('/section1/prefs',    's1.prefs').
        when('/section1/:id',      's1.itemInfo').
        when('/section1/:id/edit', 's1.itemInfo.edit').
        when('/section2',          's2').
        segment('s1', {
            templateUrl: 'templates/section1.html',
            controller: 'MainCtrl'}).
        within().
            segment('home', {
                default: true,
                templateUrl: 'templates/section1/home.html'}).

            segment('itemInfo', {
                templateUrl: 'templates/section1/item.html',
                controller: 'Section1ItemCtrl',
                dependencies: ['id']}).

            within().

                segment('overview', {
                    default: true,
                    templateUrl: 'templates/section1/item/overview.html'}).

                segment('edit', {
                     templateUrl: 'templates/section1/item/edit.html'}).

                up().

            segment('prefs', {
                templateUrl: 'templates/section1/prefs.html'}).

            up().

        segment('s2', {
            templateUrl: 'templates/section2.html',
            controller: 'MainCtrl'
          });
    });
  // .config(function ($routeProvider) {
  //   $routeProvider
  //     .when('/', {
  //       templateUrl: 'views/main.html',
  //       controller: 'MainCtrl',
  //       controllerAs: 'main'
  //     })
  //     .when('/about', {
  //       templateUrl: 'views/about.html',
  //       controller: 'AboutCtrl',
  //       controllerAs: 'about'
  //     })
  //     .otherwise({
  //       redirectTo: '/'
  //     });
  // });
