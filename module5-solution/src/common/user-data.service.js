(function () {

    'use strict'

    UserDataService.$inject = ['$q'];
    function UserDataService($q) {

        var service = this;
        // Only one user stored, so this is a very simple 'service'
        var user = {};

        service.storeData = function (userData) {
            user = userData;
        };

        service.getUser = function () {
            // Return user via a promise
            return $q.resolve(user);
        };
    }

    angular.module('common').service('UserDataService', UserDataService);

})();