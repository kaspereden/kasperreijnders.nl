(function (angular) {
	'use strict';


	/**
	 * @ngdoc function
	 * @name websiteApp.controller:PostsCtrl
	 * @description
	 * # PostsCtrl
	 * Controller of the websiteApp
	 */
	angular.module('websiteApp')
		.controller('PostsCtrl', ['$scope', 'Posts', function ($scope, Posts) {
			Posts.get().then(function (posts) {
				$scope.posts = posts;
			});
		}]);
}(angular));
