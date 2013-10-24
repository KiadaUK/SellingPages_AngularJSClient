'use strict';

sellingPages.controller('CreateAreaController',
	function CreateAreaController($scope, $http, userDataService){

		getAllAreas();
        var debugUser = userDataService.getUser();
        console.log(JSON.stringify(debugUser, null, 4));
		function getAllAreas()
		{
			
			$http.get(API_URL + 'areas').success(
			function(data, status, headers, config) {
 	    
 		    $scope.areas = data;
 	    
 		    }).

 	 	   error(function(data, status, headers, config) {

 		    });
		}
		
		$scope.submitNewArea = function()
		{

            /**
		     * signature:
             * 
             *{"AreaId":0,
             * "AreaName":"String",
             * "CityName":"String",
             * "IsCity":false,
             * "AreasCityIds":[0],
             * "AreaListingIds":[0]
             * }
             **/
		    if (this.area.isCity == true)
		    {
    	         var Area = {
    	        "AreaId"   : this.areas.Areas.AreaName.AreaId,
                "CityName" : this.area.cityName,
                "isCity" : this.area.isCity
                }
		    }	    
		    else if (this.area.isCity == false || this.area.isCity == null)
		    {
                    var Area = {
		            "AreaName" : this.area.areaName,
		            "isCity" : this.area.isCity
		        }
		    }

            $http({
                method: 'POST',
                url: API_URL + 'area',
                data: Area,
                headers: {'Content-Type' : 'application/json'}}).success(function(Area, status, headers, config) {

                    getAllAreas();

            }).error(function(Area, status, headers, config){



            });
        }
    });
		
         /**
		//Longform get request

		$http({
		method: 'GET',
		url: 'http://localhost:4321/api/areas' }).
 		success(function(data, status, headers, config) {
 	    
 	    $scope.areas = data;
 	    //console.log($scope.area.Area.AreaName);
 	    console.log(JSON.stringify($scope.areas, null, 4));
 	    
 	    }).
 	    error(function(data, status, headers, config) {
  	    // called asynchronously if an error occurs
 	    // or server returns response with an error status.
 	    });
        **/
		
		


/**
   1) Get a list of all areas
   2) Create select list with area names as the text, area id's as the value
   3) Add a new city to the areas list of citys
  
 **/