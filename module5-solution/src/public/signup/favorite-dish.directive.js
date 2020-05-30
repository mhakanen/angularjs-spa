(function () {

    // https://docs.angularjs.org/guide/forms

    'use strict';

    FavoriteDish.$inject = ['MenuService']
    function FavoriteDish(MenuService) {

        var shortNames = [];
        MenuService.getMenuItems().then(
            function (response) {
                response.menu_items.forEach(function (item) {
                    shortNames.push(item.short_name);
                });
            }
        );

        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, elemement, attrs, controller) {

                // Here controller is the ngModelController (set via the require)
                controller.$validators.favorite = function (modelValue, viewValue) {
                    if (controller.$isEmpty(modelValue)) {
                        // Consider empty models to be valid
                        return true;
                    }

                    // Check if input value is included in short names
                    return shortNames.includes(viewValue);
                };
            }
        }
    }

    angular.module('public').directive('favoriteDish', FavoriteDish);

})();