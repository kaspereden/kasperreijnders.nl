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
		.controller('PostsCtrl', ['$scope', '$routeParams', '$q', '$sce', 'Posts', 'Status', function ($scope, $routeParams, $q, $sce, Posts, Status) {
			var pageNumber = $routeParams.pageNumber || 1;
			$scope.currentPage = parseInt(pageNumber, 10);
			var posts = Posts.get(pageNumber);
			posts.then(function (posts) {
				$scope.posts = posts;
				if (posts.length === 0) {
					$scope.lastPage = true;
				}
			});

			var status = Status.get();
			status.then(function (site) {
				$scope.settings = site.data;
			});

			$scope.getPostContent = function (htmlContent) {
				return $sce.trustAsHtml(htmlContent);
			};

			$scope.pageLoading = true;
			$q.when(status, posts).then(function () {
				$scope.pageLoading = false;
			});
		}])
		.controller('PostController', ['$scope', '$routeParams', '$q', '$sce', 'Posts', 'Status', function ($scope, $routeParams, $sce, $q, Posts, Status) {
			var name = $routeParams.name || 1;

			var post = Posts.getPostWithFilter('name', name);
			post.then(function (post) {
				$scope.post = post;
			});

			var status = Status.get();
			status.then(function (site) {
				$scope.settings = site.data;
			});

			$scope.getPostContent = function (htmlContent) {
				return $sce.trustAsHtml(htmlContent);
			};

			$scope.pageLoading = true;
			$q.when(status, post).then(function () {
				$scope.pageLoading = false;
			});
		}]);
}(angular));
