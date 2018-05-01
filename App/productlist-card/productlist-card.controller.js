angular
            .module('productList-card', ['ngMaterial'])
            .controller('cardController', cardController);

         /* function cardController ($scope) {            
         }  */
         

         cardController.$inject = ['$scope', '$http'];

function cardController($scope, $http) {
    $scope.products = [];

    $scope.init = function () {
        getProducts();
    }

    function getProducts() {
        return $http.get('../products/necklaces.json').
            then(function (response) {
                $scope.products = response.data;
            }, function (error) {
                return toastr.error("There was an error retrieving the products.");
            })
    }
}
