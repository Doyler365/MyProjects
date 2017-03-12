angular.module('app')
.controller('PlatformController', ['$scope','$http', '$sce', function($scope, $http, $sce) {

	var url = 'http://www.giantbomb.com/api/platforms/?api_key=5c6f880f5549c762499359920e9df7d637b71dad&format=jsonp&json_callback=JSON_CALLBACK&field_list=image,name,site_detail_url&sort=release_date:desc&filter=id:146|145|157|139|35|20|94|';

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