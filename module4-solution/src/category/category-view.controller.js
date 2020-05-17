(function () {

    'use strict';

    CategoryViewController.$inject = ['categoryList'];
    function CategoryViewController(categoryList) {
        var vm = this;
        vm.categoryList = categoryList;
    }

    angular.module('MenuApp').controller('CategoryViewController', CategoryViewController)

})();