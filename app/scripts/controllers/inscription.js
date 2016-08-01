 'use strict';

/**
 * @ngdoc function
 * @name ggesportsWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ggesportsWebApp
 */
angular.module('ggesportsWebApp').controller('InscriptionCtrl', function ($scope, $routeParams, $http) {

    var torneoId = $routeParams.torneoId;

    console.debug('Id del torneo: ' + torneoId);
    
    $http.get('http://localhost:3000/torneos/' + $routeParams.torneoId + '.json').success(function(data) {
      $scope.torneo = data;
      console.debug(data);
  	});

  	$scope.inscribir = function(){
  	  var data = 
        {
          "current_gamer": {
            "battletag": $scope.battletag,
            "correo": $scope.email,
            "facebook_token": getCookie('fbToken'),
            "facebook_id": getCookie('fbUserId')
          },
          "torneo":{
            "id": $routeParams.torneoId
          }
        };
      
      console.log($scope.review);
      if ($scope.myForm.$valid){
        $http({
          method: 'POST',
          url: 'http://localhost:3000/inscripciones',
          data: data
        })
        .success(function(response) {
          console.debug(response);
        });
      }
      

  	}


}).directive('myDirective', function() {
      return {
          require: 'ngModel',
          link: function(scope, element, attr, mCtrl) {
              function myValidation(value) {
                  var pattern = /^\D.{2,11}#\d{4}$/;
                  if (pattern.test(value)) {
                      mCtrl.$setValidity('charE', true);
                  } else {
                      mCtrl.$setValidity('charE', false);
                  }
                  return value;
              }
              mCtrl.$parsers.push(myValidation);
          }
      };
   })
  .directive('myDirectiveEmail', function() {
      return {
          require: 'ngModel',
          link: function(scope, element, attr, mCtrl) {
              function myValidation(value) {
                  var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                  if (pattern.test(value)) {
                      mCtrl.$setValidity('charE', true);
                  } else {
                      mCtrl.$setValidity('charE', false);
                  }
                  return value;
              }
              mCtrl.$parsers.push(myValidation);
          }
      };
   });
