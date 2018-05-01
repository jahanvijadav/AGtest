'use strict';

angular.
    module("productList").
    controller("ProductListController", ProductListController);

ProductListController.$inject = ['$scope', '$http'];

function ProductListController($scope, $http) {
    $scope.products = [];

    $scope.init = function () {
        getProducts();
    }

    function getProducts() {
        return $http.get('../products/products.json').
            then(function (response) {
                $scope.products = response.data;
            }, function (error) {
                return toastr.error("There was an error retrieving the products.");
            })
    }
}
