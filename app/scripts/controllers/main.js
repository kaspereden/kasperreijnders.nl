(function () {
	'use strict';


	/**
	 * @ngdoc function
	 * @name websiteApp.controller:MainCtrl
	 * @description
	 * # MainCtrl
	 * Controller of the websiteApp
	 */
	angular.module('websiteApp')
		.controller('MainCtrl', ['$scope', 'Status', function ($scope, Status) {
			Status.get().then(function () {
				console.log('services are available');
			});
		}]);
}());
