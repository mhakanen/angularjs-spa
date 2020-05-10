(function () {

    'use strict';

    // App module
    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItems);

    // Controller
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {

        var vm = this;
        vm.searchTerm = '';
        vm.resultList;

        vm.search = function () {
            // If no search term given, just return empty array (personally I would prefer to return all items in that case)
            if (!vm.searchTerm) {
                vm.resultList = [];
            } else {
                MenuSearchService.getMatchedMenuItems(vm.searchTerm).then(function (items) {
                    vm.resultList = items;
                });
            }
        }

        vm.removeItem = function (index) {
            vm.resultList.splice(index, 1);
        }
    }

    // Service for searching wanted items
    MenuSearchService.$inject = ['$http', '$q'];
    function MenuSearchService($http, $q) {

        var service = this;
        const menuItemsUrl = 'https://davids-restaurant.herokuapp.com/menu_items.json';

        service.getMatchedMenuItems = function (searchTerm) {

            var matchingItems = [];
            return $http({
                method: 'GET',
                url: menuItemsUrl
            }).then(function success(response) {
                // Add matching items to the result array by using Array.filter() method
                matchingItems = response.data.menu_items.filter(checkDescription);
                return matchingItems;
            }, function failure(error) {
                console.log('Fetching menu items failed:', error);
                return matchingItems; // Return empty array, so that error message is displayed also in failure case
            });

            // Return true if searchTerm is found in the item description
            // Note: in real life the item name would probably be included in the search as well, but this is done by the instructions...  
            function checkDescription(item) {
                return item.description.toLowerCase().includes(searchTerm.toLowerCase()) // Make it case insensitive
            }
        }

    }

    // Found items irective
    function FoundItems() {

        // Directive definition object
        return {
            restrict: 'E',
            templateUrl: 'found-items-list.html',
            scope: {
                items: '<foundItems',
                removeItem: '&onRemove'
            }
        }
    }

})();