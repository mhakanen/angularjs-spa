(function () {

    'use strict';

    var itemsComponent = {
        templateUrl: 'src/items/items-component.template.html',
        bindings: {
            itemList: '<',
            categoryTitle: '@'
        }
    };

    angular.module('MenuApp').component('items', itemsComponent);

})();