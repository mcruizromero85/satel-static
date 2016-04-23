 'use strict';

/**
 * @ngdoc function
 * @name ggesportsWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ggesportsWebApp
 */
angular.module('ggesportsWebApp')
  .controller('InscriptionCtrl', function ($scope, $routeParams, $http) {

    var torneoId = $routeParams.torneoId;

    console.debug('Id del torneo: ' + torneoId);
    
    $http.get('http://localhost:3000/torneos/' + $routeParams.torneoId + '.json').success(function(data) {
      $scope.torneo = data;
      console.debug(data);
  	});

  });
