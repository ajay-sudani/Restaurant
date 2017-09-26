'use strict';

angular
  .module('routerApp').filter('slice', function() {
  return function(arr, start, end) {
    return arr.slice(start, end);
  };
});


angular
  .module('routerApp')
  .controller('dashboardCtrl', ['$scope', '$http', '$state', 'dashboardSvc', function ($scope, $http, $state, dashboardSvc) {

  	$scope.range = dashboardSvc.range;
  	$scope.timeSlots = dashboardSvc.timeSlots;
  	$scope.selectedRange = $scope.range[2];
  	$scope.startRange = 0;
  	$scope.endRange = 12;
  	$scope.isLoading = true;

  	navigator.geolocation.getCurrentPosition(function(position){
      $scope.$apply(function(){
	  	$scope.position = position;
        codeLatLng(position.coords.latitude,position.coords.longitude);
      });
    });

    function codeLatLng(lat, lng) {
	    var latlng = new google.maps.LatLng(lat, lng);
	    var geocoder = new google.maps.Geocoder();
	  	$scope.isLoading = true;
	    geocoder.geocode({'latLng': latlng}, function(results, status) {
	      if (status == google.maps.GeocoderStatus.OK) {
	        if (results[0]) {
	            for (var i=0; i<results[0].address_components.length; i++) {
		            for (var b=0;b<results[0].address_components[i].types.length;b++) {
		            //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
		                if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
		                    //this is the object you are looking for city
		                    $scope.city = results[0].address_components[i];
		                    $scope.$apply();
		                }
		                if (results[0].address_components[i].types[b] == "country") {
		                    //this is the object you are looking for country
		                    $scope.country = results[0].address_components[i];
		                    $scope.$apply();
		                }
		            }
	        	}
		        getRestaurants(lat, lng);

	        } else {
		  	  $scope.isLoading = false;
	          // alert("No results found");
	        }
	      } else {
	        alert("Geocoder failed due to: " + status);
	      }
    	});
  	}

    var google_api_key = 'AIzaSyDh8hLjLxCFgMbOZA5Txb3CZdoGf30asxI';
    var map;
  	function getRestaurants(lat, lng) {
	  	$scope.isLoading = true;
		var pyrmont = new google.maps.LatLng(lat,lng);
		var service;
		map = new google.maps.Map(document.getElementById('map'), {
			center: pyrmont,
			zoom: 15
		});
		var request = {
			location: pyrmont,
			radius: $scope.selectedRange.value,
			query: 'restaurant'
		};
		service = new google.maps.places.PlacesService(map);
		service.textSearch(request, getRestaurantsCallback);		
    }

    function getRestaurantsCallback(results, status) {
	    $scope.restaurants = results;
	  	$scope.isLoading = false;
	    for (var i = 0; i < results.length; i++) {
	    	if (results[i].photos) {
	    		$scope.restaurants[i].displayPhoto = new google.maps.Marker({
			    icon: results[i].photos[0].getUrl({'maxWidth': 360, 'maxHeight': 150})
			 });
	    	}
	    	$scope.restaurants[i].availableSeat = Math.floor(Math.random() * (50 - 0 + 1)) + 0;
 	    };
	    $scope.$apply();
	    console.log($scope.restaurants);
	}

	$scope.rangeChange = function(range){
		$scope.selectedRange = range;
		getRestaurants($scope.position.coords.latitude,$scope.position.coords.longitude);
	}

	$scope.nextRange = function(){
		if ($scope.endRange < $scope.restaurants.length) {
			$scope.startRange = $scope.startRange + 12;
  			$scope.endRange = $scope.endRange + 12;
		}
	}

	$scope.previousRange = function(){
		if ($scope.startRange > 0) {
			$scope.startRange = $scope.startRange - 12;
  			$scope.endRange = $scope.endRange - 12;
  		}
	}

	$scope.bookTable = function(){
		document.getElementById('restaurant-modal').classList.add('active');
		$('.restaurant-modal .items .item').removeClass('active');
		$('#timeSloat').addClass('active');
		$scope.selectedTimeSloat = undefined;
		$scope.userName = '';
		$scope.userEmail = '';
		$scope.userNmuber = '';
	}

	$scope.timeSloatChange = function(time){
		$scope.selectedTimeSloat = time;
	}

	$scope.nextValidation = function(id){
		$('.restaurant-modal .items .item').removeClass('active');
		$('#'+id).addClass('active');
	}

	$scope.confirmTable = function(){
		var result = dashboardSvc.checkValidation($scope.userEmail, $scope.userName, $scope.userNmuber);
		if (result) {
			$('.restaurant-modal .items .item').removeClass('active');
			$('#successBook').addClass('active');
		}	
	}

	$scope.closeOrderModal = function(){
		document.getElementById('restaurant-modal').classList.remove('active');
	}
  }]);
