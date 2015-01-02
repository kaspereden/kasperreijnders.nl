(function (angular) {
	'use strict';

	// wp stands for WordPress (see also wp-json documentation)

	/**
	 *
	 */
	function responder(serviceResponse, $q) {
		// do error handling here generic
		var deferred = $q.defer();

		serviceResponse.success(function (response) {
			deferred.resolve(response);
		});

		serviceResponse.error(function (error) {
			// @TODO: implement some error handling
			deferred.reject(error);
		});

		return deferred.promise;
	}

	var wpJsonApi = angular.module('wpJsonApi', []);

	wpJsonApi.service('Status', ['$http', function ($http) {
		return {
			get: function () {
				return $http.get('/wp-json/')
			}
		};
	}]);

	wpJsonApi.service('Posts', ['$http', '$q', function ($http, $q) {
		return {
			get: function (pageNumber) {
				var page = '?page=' + (pageNumber || 1);
				return responder($http.get('/wp-json/posts' + page),  $q)
			},
			getPostWithFilter: function (filter, name) {
				return responder($http.get('/wp-json/posts/?filter[' + filter + ']=' + name),  $q)
			}
		};
	}]);

	//users
	//media
	//taxonomies
	//pages

}(angular));
//
//
//var servicesDeclaration = {
//	name: "Kasper",
//	description: "Vocalist, ICT, HCM, Scout, Incentro",
//	URL: "http://kasperreijnders.nl",
//	routes: {
//		"/": {
//			supports: [
//				"HEAD",
//				"GET"
//			],
//			meta: {
//				self: "http://kasperreijnders.nl/wp-json/"
//			}
//		},
//		"/posts": {
//			supports: [
//				"HEAD",
//				"GET",
//				"POST"
//			],
//			meta: {
//				self: "http://kasperreijnders.nl/wp-json/posts"
//			},
//			accepts_json: true
//		},
//		"/posts/<id>": {
//			supports: [
//				"HEAD",
//				"GET",
//				"POST",
//				"PUT",
//				"PATCH",
//				"DELETE"
//			],
//			accepts_json: true
//		},
//		"/posts/<id>/revisions": {
//			supports: [
//				"HEAD",
//				"GET"
//			]
//		},
//		"/posts/<id>/meta": {
//			supports: [
//				"HEAD",
//				"GET",
//				"POST"
//			],
//			accepts_json: true
//		},
//		"/posts/<id>/meta/<mid>": {
//			supports: [
//				"HEAD",
//				"GET",
//				"POST",
//				"PUT",
//				"PATCH",
//				"DELETE"
//			],
//			accepts_json: true
//		},
//		"/posts/<id>/comments": {
//			supports: [
//				"HEAD",
//				"GET"
//			]
//		},
//		"/posts/<id>/comments/<comment>": {
//			supports: [
//				"HEAD",
//				"GET",
//				"DELETE"
//			]
//		},
//		"/posts/types": {
//			supports: [
//				"HEAD",
//				"GET"
//			],
//			meta: {
//				self: "http://kasperreijnders.nl/wp-json/posts/types"
//			}
//		},
//		"/posts/types/<type>": {
//			supports: [
//				"HEAD",
//				"GET"
//			]
//		},
//		"/posts/statuses": {
//			supports: [
//				"HEAD",
//				"GET"
//			],
//			meta: {
//				self: "http://kasperreijnders.nl/wp-json/posts/statuses"
//			}
//		},
//		"/users": {
//			supports: [
//				"HEAD",
//				"GET",
//				"POST"
//			],
//			meta: {
//				self: "http://kasperreijnders.nl/wp-json/users"
//			},
//			accepts_json: true
//		},
//		"/users/<id>": {
//			supports: [
//				"HEAD",
//				"GET",
//				"POST",
//				"PUT",
//				"PATCH",
//				"DELETE"
//			],
//			accepts_json: true
//		},
//		"/users/me": {
//			supports: [
//				"HEAD",
//				"GET"
//			],
//			meta: {
//				self: "http://kasperreijnders.nl/wp-json/users/me"
//			}
//		},
//		"/media": {
//			supports: [
//				"HEAD",
//				"GET",
//				"POST"
//			],
//			meta: {
//				self: "http://kasperreijnders.nl/wp-json/media"
//			}
//		},
//		"/media/<id>": {
//			supports: [
//				"HEAD",
//				"GET",
//				"POST",
//				"PUT",
//				"PATCH",
//				"DELETE"
//			]
//		},
//		"/taxonomies": {
//			supports: [
//				"HEAD",
//				"GET"
//			],
//			meta: {
//				self: "http://kasperreijnders.nl/wp-json/taxonomies"
//			}
//		},
//		"/taxonomies/<taxonomy>": {
//			supports: [
//				"HEAD",
//				"GET"
//			]
//		},
//		"/taxonomies/<taxonomy>/terms": {
//			supports: [
//				"HEAD",
//				"GET"
//			]
//		},
//		"/taxonomies/<taxonomy>/terms/<term>": {
//			supports: [
//				"HEAD",
//				"GET"
//			]
//		},
//		"/pages": {
//			supports: [
//				"HEAD",
//				"GET",
//				"POST"
//			],
//			meta: {
//				self: "http://kasperreijnders.nl/wp-json/pages"
//			},
//			accepts_json: true
//		},
//		"/pages/<id>": {
//			supports: [
//				"HEAD",
//				"GET",
//				"POST",
//				"PUT",
//				"PATCH",
//				"DELETE"
//			],
//			accepts_json: true
//		},
//		"/pages/<id>/revisions": {
//			supports: [
//				"HEAD",
//				"GET"
//			]
//		},
//		"/pages/<id>/comments": {
//			supports: [
//				"HEAD",
//				"GET"
//			]
//		},
//		"/pages/<id>/comments/<comment>": {
//			supports: [
//				"HEAD",
//				"GET",
//				"DELETE"
//			]
//		},
//		"/pages/<path>": {
//			supports: [
//				"HEAD",
//				"GET",
//				"POST",
//				"PUT",
//				"PATCH",
//				"DELETE"
//			],
//			accepts_json: true
//		}
//	},
//	authentication: [],
//	meta: {
//		links: {
//			help: "https://github.com/WP-API/WP-API",
//			profile: "https://raw.github.com/WP-API/WP-API/master/docs/schema.json"
//		}
//	}
//}
