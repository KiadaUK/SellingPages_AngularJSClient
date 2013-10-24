'use strict';

sellingPages.controller('IndexController',
    [
        '$scope',
        '$timeout',
        'Facebook',
        '$http',
        'userDataService',

        function($scope, $timeout, Facebook, $http, userDataService) {
            $scope.template = 'templates/scripts.html';
            // Define user empty data :/

            $scope.user = {};
            //$scope.userDataService = userDataService;

            // Defining user logged status
            $scope.logged = false;
            /**
             * Watch for Facebook to be ready.
             * There's also the event that could be used
             */
            // TODO: Refactor ajax submit new user into UserDataService method
            $scope.submitNewUser = function(response, $http)
            {
                var User = {
                    "Name" : response.name,
                    "FacebookId" : response.id,
                    "FacebookUsername" : response.username
                };

                //console.log(JSON.stringify(User, null, 4));
                $http({
                    method: 'POST',
                    url: API_URL + 'users/',
                    data: User,
                    headers: {'Content-Type' : 'application/json'}}).success(function(User, status, headers, config) {

                        console.log("Success");
                        $scope.setNewUserToUserDataService(User);
                        console.log(JSON.stringify(User, null, 4));

                    }).error(function(User, status, headers, config){

                        console.log("Error");

                    });
            }

            $scope.setNewUserToUserDataService = function (User)
            {

                userDataService.setUser(User.User);
                var debugUser = userDataService.getUser();
                console.log(JSON.stringify(debugUser, null, 4));
            }


            $scope.$watch(
                function() {
                    return Facebook.isReady();
                },
                function(newVal) {
                    if (newVal)
                        $scope.facebookReady = true;
                }
            );

            /**
             * IntentLogin
             */
            $scope.IntentLogin = function() {
                Facebook.getLoginStatus(function(response) {
                    if (response.status == 'connected') {
                        $scope.logged = true;
                        $scope.me();
                    }
                    else
                        $scope.login();
                });
            };

            /**
             * Login
             */
            $scope.login = function() {
                Facebook.login(function(response) {
                    if (response.status == 'connected') {
                        $scope.logged = true;
                        $scope.me();
                    }

                });
            };

            /**
             * me
             */
            $scope.me = function() {
                Facebook.api('/me', function(response) {

                    $scope.$apply(function() {
                        $scope.user = response;
                        $scope.submitNewUser(response, $http);

                });
            })};

            /**
             * Logout
             */
            $scope.logout = function() {
                Facebook.logout(function() {
                    $scope.$apply(function() {
                        $scope.user   = {};
                        $scope.logged = false;
                    });
                });
            }




        }
    ])

