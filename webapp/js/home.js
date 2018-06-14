(function(angular){
    var app=angular.module("homeApp",["ele.service.cart"]);
    app.controller("cartCtrl",["$scope","$http","cart",function ($scope,$http,cart) {
        var flag=false;
        if(!flag){
            $scope.cartItem=cart.getCartItem();
            console.log($scope.cartItem);
            flag=true;
        }
        $scope.add=cart.add;
        $scope.sub=cart.sub;
        $scope.removeItems=cart.removeItems;
        if(flag){
            //监听数据变化，时刻发送到后台保存
            $scope.$watch("cartItem",function (now,old) {
                $scope.isEmpty=jQuery.isEmptyObject($scope.cartItem);
                console.log( $scope.isEmpty);
                $scope.totalPrice=cart.totalPrice();
                $scope.totalItems=cart.totalItems();
                $http.post("/storeCart",{
                    params:now
                }).success(function (data) {
                    console.log("保存成功 "+data.msg);
                });
            },true);
        }
    }]);
})(angular)
var close=true;
$(".cartbtn").on("click",function () {
    if(close){//打开
        $(".cartbtn").toggleClass("active");
        $(".sidebar").animate({
            right: 0,
        },500);
    }else{
        $(".cartbtn").toggleClass("active");
        $(".sidebar").animate({
            right: "-295px",
        },500);
    }
    close=!close;
});


