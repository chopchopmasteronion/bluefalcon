// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // nerds page that will use the NerdController
        .when('/reminders', {
            templateUrl: 'views/reminder.html',
            controller: 'ReminderController'
        });

    $locationProvider.html5Mode(true);

}]);
