'use strict';

sellingPages.controller('CreateAreaController',
	function CreateAreaController($scope, $http, userDataService, areaDataService){

        //var debugUser = userDataService.getUser();
        //console.log(JSON.stringify(debugUser, null, 4));


        // Call getAllAreas from the areaDataService, and wait for the $http.get promise ajax
        // to complete and return the data before proceeding.
        $scope.getAllAreas = function()
        {
            areaDataService.getAllAreas().then(function(response)
            {
                $scope.areas = response;
                //console.log(JSON.stringify($scope.areas, null, 4));
            })

        }

        $scope.getAllAreas();

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
             * "AreaListingIds":[0]}
             **/
		    if (this.area.isCity == true)
		    {
    	         var Area = {
    	        "AreaId"   : this.areas.Areas.AreaName.AreaId,
                "CityName" : this.area.cityName,
                "isCity" : true
                }
		    }	    
		    else if (this.area.isCity == false || this.area.isCity == null)
		    {
                    var Area = {
		            "AreaName" : this.area.areaName,
		            "isCity" : false
		        }
		    }

            $http({
                method: 'POST',
                url: API_URL + 'area',
                data: Area,
                headers: {'Content-Type' : 'application/json'}}).success(function(Area, status, headers, config) {
                     $scope.SetNewAreaToAreaService(Area)
                     //console.log(JSON.stringify(Area, null, 4));
                     $scope.getAllAreas();

            }).error(function(Area, status, headers, config){



            });

            $scope.SetNewAreaToAreaService = function (Area)
            {
                areaDataService.setArea(Area.Area);
                //var debugUser = areaDataService.getArea();
                //console.log(JSON.stringify(debugUser, null, 4));
            }
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