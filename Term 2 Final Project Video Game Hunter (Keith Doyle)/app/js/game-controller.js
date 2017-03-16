angular.module('app')
.controller('GameController', ['$scope','$http', '$sce', function($scope, $http, $sce) {

	var url = 'http://www.giantbomb.com/api/games/?api_key=5c6f880f5549c762499359920e9df7d637b71dad&format=jsonp&json_callback=JSON_CALLBACK&filter=platforms:157';

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