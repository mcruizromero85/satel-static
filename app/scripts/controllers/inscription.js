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

  	$scope.inscribir = function(){
  	  var data = 
        {
          "inscripcion": {
            "battletag": $scope.battletag,
            "email": $scope.email  
            }
        };

      var config = {
        headers : {
         'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
        }
      }

      $http.post('http://localhost:3000/inscripciones', data, config)
        .success(function (data, status, headers, config) {
          console.debug(data);
          //$scope.PostDataResponse = data;
        })
        .error(function (data, status, header, config) {
          $scope.ResponseDetails = "Data: " + data +
            "<hr />status: " + status +
            "<hr />headers: " + header +
            "<hr />config: " + config;
        });
  	}

  	

  });
