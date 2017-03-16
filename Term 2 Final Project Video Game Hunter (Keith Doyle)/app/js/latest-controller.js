angular.module('app')
.controller('LatestController', ['$scope','$http', '$sce', function($scope, $http, $sce) {

	var url = 'http://www.giantbomb.com/api/games/?api_key=5c6f880f5549c762499359920e9df7d637b71dad&format=jsonp&json_callback=JSON_CALLBACK&field_list=image,name,site_detail_url&limit=50&filter=original_release_date:2016-1-1%2000:00:00|2017-3-15%2000:00:00,platforms:145|146|157&sort=original_release_date:desc';

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