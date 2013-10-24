'use strict';

sellingPages.controller('CreateUserController',
    function CreateUserController($scope, $http){

        $scope.submitNewUser = function()
        {
          var User = {
              "FacebookId": this.user.FacebookId
              //"UserId": this.user.UserId
          }
          console.log(JSON.stringify(User, null, 4));
          $http({
            method: 'POST',
            url: API_URL + 'users/' + User.FacebookId,
            data: User,
            headers: {'Content-Type' : 'application/json'}}).success(function(Area, status, headers, config) {

             console.log("Success");
            }).error(function(User, status, headers, config){

             console.log("Error");

            });

        };
    });