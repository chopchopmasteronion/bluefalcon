// public/js/services/ReminderService.js
angular.module('ReminderService', []).factory('Reminder', ['$http', function($http) {

    return {
        // call to get all reminder
        get : function() {
            return $http.get('/api/reminders');
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new reminder
        create : function(reminderData) {
            return $http.post('/api/reminders', reminderData);
        },

        // call to DELETE a reminder
        delete : function(id) {
            return $http.delete('/api/reminders/' + id);
        }
    }

}]);
