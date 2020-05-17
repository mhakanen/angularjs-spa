(function () {

    'use strict';

    // Route definitions
    RouteConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RouteConfiguration($stateProvider, $urlRouterProvider) {

        // Redirect to home if url doesn't match
        $urlRouterProvider
            .otherwise('/');

        $stateProvider

            // Home page
            .state('home', {
                url: '/',
                templateUrl: 'src/home.template.html'
            })

            // Category page
            .state('categories', {
                url: '/categories',
                templateUrl: 'src/category/category-view.template.html',
                controller: 'CategoryViewController as categoryCtrl',
                resolve: {
                    categoryList: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })

            // Item details page
            .state('items', {
                url: '/menu_items/{categoryShortName}',
                templateUrl: 'src/items/items-view.template.html',
                controller: 'ItemsViewController as itemsCtrl',
                resolve: {
                    categoryContent: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
                        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
                    }]
                }
            });
    }

    angular.module('MenuApp').config(RouteConfiguration);

})();