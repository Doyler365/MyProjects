var app = angular.module('app',['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
 
	$urlRouterProvider.otherwise("/");

    $stateProvider
	
        .state('latest', {
          url: "/",
          templateUrl: "templates/latest.html",
          controller: 'LatestController'
        })
		
		.state('platform', {
          url: "/",
          templateUrl: "templates/platform.html",
          controller: 'PlatformController'
        })
		
		.state('genre', {
          url: "/",
          templateUrl: "templates/genre.html",
          controller: 'GenreController'
        })
		
		.state('game', {
          url: "/",
          templateUrl: "templates/game.html",
          controller: 'GameController'
        })
});