angular.module('app')
.controller('GenreController', ['$scope','$http', '$sce', function($scope, $http, $sce) {

	var url = 'http://www.giantbomb.com/api/genres/?api_key=5c6f880f5549c762499359920e9df7d637b71dad&format=jsonp&json_callback=JSON_CALLBACK';

    $sce.trustAsResourceUrl(url)

    var aCallback = function(results){
		debugger
    }

	$http.jsonp(url, {jsonpCallbackParam: 'json_callback'})
	.then(function(results){
      $scope.results = results.data.results;
    })
    .catch(function(error){
    	
		debugger;
	})
	 
	
}]);