(function () {

    'use strict'

    SignupController.$inject = ['UserDataService']
    function SignupController(UserDataService) {
        var vm = this;
        vm.stored = false;
        console.log(vm);

        // Pattern for phone number validation
        vm.phoneNbrFormat = /\d{3}-\d{3}-\d{4}/;

        // Store sign up data
        vm.signMeUp = function () {
            var user = {
                firstName: vm.firstName,
                lastName: vm.lastName,
                email: vm.email,
                phone: vm.phone,
                dish: vm.dish
            };
            UserDataService.storeData(user);
            vm.stored = true;;
        }

        // Set form back to its initial state
        vm.resetForm = function (form) {
            if (form) {
                form.$setPristine();
                form.$setUntouched();
            }
            vm.firstName = vm.lastName = vm.email = vm.phone = vm.dish = '';
        }

        function setDefaults() {
            vm.firstName = vm.lastName = vm.email = vm.phone = vm.dish = '';
        }
    }

    angular.module('public').controller('SignupController', SignupController);

})();