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
  // theme config
app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('pink', {
            'default': '700', // by default use shade 400 from the pink palette for primary intentions
            'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
            'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
            'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
        })
        // If you specify less than all of the keys, it will inherit from the
        // default shades
        .accentPalette('pink', {
            'default': '600' // use shade 200 for default, and keep all other shades the same
        });
});

  app.config(function ($routeSegmentProvider) {
    $routeSegmentProvider.
        when('/',          'inicio').
        when('/dc',          'dc').
        when('/dc/Pacientes',          'dc.pacientes').
        when('/dc/Medicos',          'dc.medicos').
        // when('/dc/Pacientes',    's1.prefs').
        when('/section1/:id',      's1.itemInfo').
        when('/section1/:id/edit', 's1.itemInfo.edit').
        when('/section2',          's2').
        segment('inicio', {
            templateUrl: 'views/main.html',
            // controller: 'MainCtrl'
        }).
        segment('dc', {
            templateUrl: 'views/app.html',
            controller: 'MainCtrl'}).
        within().
            segment('pacientes', {
                default: true,
                controller: 'PacientesCtrl',
                templateUrl: 'views/pacientes/index.html'}).
            segment('medicos', {
                default: true,
                controller: 'MedicosCtrl',
                templateUrl: 'views/medicos/index.html'
              }).

            segment('itemInfo', {
                templateUrl: 'views/section1/item.html',
                controller: 'Section1ItemCtrl',
                dependencies: ['id']}).

            within().

                segment('overview', {
                    default: true,
                    templateUrl: 'views/section1/item/overview.html'}).

                segment('edit', {
                     templateUrl: 'views/section1/item/edit.html'}).

                up().

            segment('prefs', {
                templateUrl: 'views/section1/prefs.html'}).

            up().

        segment('s2', {
            templateUrl: 'views/section2.html',
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
