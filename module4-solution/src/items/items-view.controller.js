(function () {

    'use strict';

    ItemsViewController.$inject = ['categoryContent'];
    function ItemsViewController(categoryContent) {
        var vm = this;
        vm.categoryContent = categoryContent;
        // Get the item list and the category name
        if (categoryContent.menu_items) {
            vm.itemList = categoryContent.menu_items;
        }
        if (categoryContent.category) {
            vm.categoryTitle = categoryContent.category.name;
        } else {
            vm.categoryTitle = 'Unknown';
        }
    }

    angular.module('MenuApp').controller('ItemsViewController', ItemsViewController)

})();