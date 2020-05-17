(function () {

    'use strict';

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {
        var service = this;
        const categoryUrl = 'https://davids-restaurant.herokuapp.com/categories.json';
        const itemsUrl = 'https://davids-restaurant.herokuapp.com/menu_items.json';

        // Get category listing
        service.getAllCategories = function () {
            return $http.get(categoryUrl)
                .then(function success(response) {
                    return response.data;
                }, function failure(err) {
                    console.log('Category loading failed', err);
                });
        }

        // Get category items
        service.getItemsForCategory = function (categoryShortName) {
            var requestConfig = { params: { category: categoryShortName } } // Category name added in the GET request as a parameter
            return $http.get(itemsUrl, requestConfig)
                .then(function success(response) {
                    return response.data;
                }, function failure(err) {
                    console.log('Items loading failed', err);
                });
        }
    }

    angular.module('data').service('MenuDataService', MenuDataService);

})();