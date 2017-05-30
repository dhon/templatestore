'use strict';

// Declare app level module which depends on views, and components
angular.module('templateStore', [
  'ngRoute',
  'templateStore.templates'
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/templates'});
}]);