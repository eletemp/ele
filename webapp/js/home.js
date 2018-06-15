$(function(angular){
    // $(".item").on("click",function(){
    //     var id=$(this).attr("id");
    //     window.localStorage.setItem("shopid",id);
    // // 跳转到指定商铺页面
    //    window.location.href="./shop.ejs";
    // });
    var app=angular.module("homeApp",["ele.service.cart"]);
    app.controller("cartCtrl",["$scope","cart",function ($scope,cart) {
        $scope.cartItem=cart.getCartItem();
        console.log("cartItem "+$scope.cartItem);
        // $scope.addItem=cart.addItem;
        $scope.add=cart.add;
        $scope.sub=cart.sub;
    }])
})(angular)