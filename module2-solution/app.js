(function () {

    'use strict';

    // Create app module
    angular.module('ShoppingListCheckOff', []);

    // Controller for items to buy
    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {

        var vm = this;
        vm.items = ShoppingListCheckOffService.toBuyItems();

        vm.itemBought = function (index) {
            ShoppingListCheckOffService.moveItem(index);
        };
    }

    // Controller for already bought items
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {

        var vm = this;
        vm.items = ShoppingListCheckOffService.boughtItems();
    }

    // Service handling the two item lists
    function ShoppingListCheckOffService() {

        var service = this;

        var toBuyItems = [
            { name: "cookies", quantity: 10 },
            { name: "hamburgers", quantity: 2 },
            { name: "apples", quantity: 5 },
            { name: "oranges", quantity: 5 },
            { name: "bread", quantity: 1 },
            { name: "milk", quantity: 1 },
        ];

        var boughtItems = [];

        service.toBuyItems = function () {
            return toBuyItems;
        };

        service.boughtItems = function () {
            return boughtItems;
        };

        service.moveItem = function (index) {
            var item = toBuyItems[index];
            if (item) {
                boughtItems.push(item); // Append item to bought list
                toBuyItems.splice(index, 1); // Remove item from to buy list
            } else {
                console.log('Could not find item with index', index);
            }
        };

    }

    // Bind controllers and service to the module
    angular.module('ShoppingListCheckOff')
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

})();