var app = angular.module('templateStore', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'templates.html',
		controller: 'TemplatesCtrl'
	})
	.when('/:templateId', {
		templateUrl: 'template-details.html',
		controller: 'TemplateDetailsCtrl'
	});
}])

.controller('TemplatesCtrl', ['$scope', '$http', function($scope, $http){
  console.log("TemplatesCtrl loaded");
	$http.get('templates.json').then(function(response){
		$scope.templates = response.data;
	});
}])

.controller('TemplateDetailsCtrl', ['$scope', '$http', '$routeParams', '$filter', function($scope, $http, $routeParams, $filter){
	console.log("TemplateDetailsCtrl loaded");
	var templateId = $routeParams.templateId;
	$http.get('templates.json').then(function(response){
		$scope.template = $filter('filter')(response.data, function(d){
			return d.id == templateId;
		})[0];
		$scope.mainImage = $scope.template.images[0].name;
	});

	$scope.setImage = function(image){
		$scope.mainImage = image.name;
	};
}]);