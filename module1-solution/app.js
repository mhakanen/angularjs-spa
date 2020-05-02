(function () {

    'use strict';

    // Main module
    angular.module('LunchCheck', []);

    // Controller function
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {

        $scope.checkListContents = function () {

            // Check if item list is undefined or empty
            if (!$scope.myLunchDishes) {
                showEmptyMessage();
            }
            else {
                var lunchDishArray = $scope.myLunchDishes.split(',');
                // Filter the array of empty items
                lunchDishArray = lunchDishArray.filter(function (item) {
                    return Boolean(item.trim()); // Trim whitespace and check for falsy
                })
                $scope.color = 'green';
                // Check first if any items left after filtering
                if (lunchDishArray.length === 0) {
                    showEmptyMessage();
                } else if (lunchDishArray.length > 3) {
                    $scope.message = 'Too much!';
                } else {
                    $scope.message = 'Enjoy!';
                }
            }
        }

        function showEmptyMessage() {
            $scope.message = 'Please enter data first';
            $scope.color = 'red';
        }
    }

    // Bind controller to the module   
    angular.module('LunchCheck').controller('LunchCheckController', LunchCheckController);

})();