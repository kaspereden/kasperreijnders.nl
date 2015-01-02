(function (angular) {
	'use strict';

	/**
	 * @ngdoc overview
	 * @name websiteApp
	 * @description
	 * # websiteApp
	 *
	 * Main module of the application.
	 */
	angular
		.module('websiteApp', [
			'ngResource',
			'ngRoute',
			'ngSanitize',
			'wpJsonApi'
		])
		.config(function ($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'views/main.html',
					controller: 'MainCtrl'
				})
				.when('/posts', {
					templateUrl: 'views/posts.html',
					controller: 'PostsCtrl'
				})
				.otherwise({
					redirectTo: '/'
				});
		});

}(angular));
