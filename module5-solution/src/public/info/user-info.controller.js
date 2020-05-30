(function () {

    'use strict'

    UserInfoController.$inject = ['userData', 'MenuService'];
    function UserInfoController(userData, MenuService) {

        var vm = this;
        vm.userStored = false;
        storeUserData(userData);

        // Store injected data
        function storeUserData(data) {
            // Check if real data or empty object
            if (data.hasOwnProperty('firstName')) {
                vm.userStored = true;
                vm.firstName = data.firstName;
                vm.lastName = data.lastName;
                vm.email = data.email;
                vm.phone = data.phone;
                vm.dish = data.dish;
                if (vm.dish) {
                    getMenuItem(vm.dish);
                }
            }
        }

        // Get menu item based on the code
        function getMenuItem(code) {
            var category = code[0];
            MenuService.getMenuItems(category).then(
                function (response) {
                    for (const item of response.menu_items) {
                        if (item.short_name == code) {
                            vm.menuItem = item;
                            break;
                        }
                    }
                }
            )
        }
    }

    angular.module('public').controller('UserInfoController', UserInfoController);

})();