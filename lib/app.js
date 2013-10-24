'use strict';
//var API_URL = "http://192.168.0.16/api/";
var API_URL = "http://localhost:3952/api/";
var sellingPages = angular.module('sellingPages', ['facebook','ngSanitize','ui.router'])
	.config(['FacebookProvider', '$routeProvider',
        function(FacebookProvider, $routeProvider){
            var myAppId = '4605923966';

            FacebookProvider.init(myAppId);

            $routeProvider.when('/login',
                {
                    templateUrl: 'templates/login.html'
                });

            $routeProvider.when('/admin/area',
                {
                    templateUrl: 'app/admin/area/index.html'
                });

            $routeProvider.when('/admin/area/create',
                {
                    templateUrl: 'app/admin/area/create.html',
                    controller: 'CreateAreaController'
                });

            $routeProvider.when ('/admin/user/create',
                {
                    templateUrl: 'app/admin/user/create.html',
                    controller: 'CreateUserController'
                });
            $routeProvider.when('/admin/listing/sandbox',
            {
                templateUrl: 'app/admin/listing/sandbox.html',
                controller: 'CreateListingController'
            });
        }]
 );
