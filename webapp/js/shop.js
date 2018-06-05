(function(angular) {
    var app=angular.module("shopApp",["ele.service.cart"]);
    app.filter('notnull',function () {
        return function (cartItem) {
            var items={};
            for(var key in cartItem){
                if(cartItem[key]!=null){
                    items[key]=cartItem[key];
                }
            }
            return items;
        }
    })
    app.controller("shopCtrl",["$scope","cart",function ($scope,cart) {
        $scope.cartItem=cart.getCartItem();
        $scope.addItem=cart.addItem;
        $scope.add=cart.add;
        $scope.sub=cart.sub;
    }]);
})(angular)
