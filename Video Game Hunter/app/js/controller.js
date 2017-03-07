angular.module('app')
.controller('MyController', ['$scope','$http', function($scope, $http) {
	
	$http.get('http://www.giantbomb.com/api/game/3030-4725/?api_key=5c6f880f5549c762499359920e9df7d637b71dad&format=json')
    .then(function(games){
      $scope.games = games.data.hits;
    })
    .catch(function(error){
       debugger;
    });
	
	
	$http.get('https://pixabay.com/api/?key=1721193-5394d2a2ae3701a0f13d87d72&q=blue+flowers&image_type=photo')
    .then(function(pictures){
      $scope.pictures = pictures.data.hits;
    })
    .catch(function(error){
       debugger;
    });
}]);