'use strict';

/**
 * @ngdoc overview
 * @name ggesportsWebApp
 * @description
 * # ggesportsWebApp
 *
 * Main module of the application.
 */
angular
  .module('ggesportsWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/tournaments/:torneoId', {
        templateUrl: 'views/tournament.html',
        controller: 'TournamentCtrl',
        controllerAs: 'tournament'
      })
      .when('/tournament/:torneoId/inscription', {
        templateUrl: 'views/inscription.html',
        controller: 'InscriptionCtrl',
        controllerAs: 'inscription'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
