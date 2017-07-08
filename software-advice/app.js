'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.abtest'


])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  //$locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/ab-test'});
 
}])
.controller('globalController', function( $scope, $rootScope, $anchorScroll, $location, $timeout, $window) {


});
