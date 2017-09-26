'use strict';

angular
    .module('routerApp')
    .factory('dashboardSvc', function ($http, $rootScope, $q) {
        var deferred = $q.defer();
        var google_api_key = 'AIzaSyDh8hLjLxCFgMbOZA5Txb3CZdoGf30asxI';
        var range = [
            {
                'name' : '500m',
                'value' : 500
            },
            {
                'name' : '1km',
                'value' : 1000
            },
            {
                'name' : '5km',
                'value' : 5000
            },
            {
                'name' : '10km',
                'value' : 10000
            }
        ];

        var timeSlots = [
            {
                'name' : '5pm to 6pm',
                'value' : 5
            },
            {
                'name' : '6pm to 7pm',
                'value' : 6
            },
            {
                'name' : '7pm to 8pm',
                'value' : 7
            },
            {
                'name' : '8pm to 9pm',
                'value' : 8
            },
            {
                'name' : '9pm to 10pm',
                'value' : 9
            },
            {
                'name' : '10pm to 11pm',
                'value' : 10
            }
        ];
        function checkValidation(userEmail, userName, userNmuber){
            $('#bookOrder .input').removeClass('error');
            if (!userEmail || !userName || !userNmuber) {
                if (!userEmail) {
                    $('#userEmail').addClass('error');
                }
                if (!userName) {
                    $('#userName').addClass('error');
                }
                if (!userNmuber) {
                    $('#userNmuber').addClass('error');
                }
                return false;
            } else {
                return true;
            }
            
        }
        return {
            range : range,
            timeSlots : timeSlots,
            checkValidation: checkValidation,
            getRestaurants: function (lat, lng) {
                var url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=123+main+street&location=' + lat + ',' + lng + '&radius=10000&key=' + google_api_key;
                return $http.get(url);
            },
        };
    });