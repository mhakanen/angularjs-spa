(function () {

    'use strict';

    var categoryComponent = {
        templateUrl: 'src/category/categories-component.template.html',
        bindings: {
            categoryList: '<'
        }
    };

    angular.module('MenuApp').component('categories', categoryComponent);

})();