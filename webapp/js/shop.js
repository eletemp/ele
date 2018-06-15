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
    });
    app.controller("shopCtrl",["$scope","$http","cart",function ($scope,$http,cart) {
        // $scope.cartItem={};
        var flag=false;
        if(!flag){
            $scope.cartItem=cart.getCartItem();
            flag=true;
        }
        $scope.addItem=cart.addItem;
        $scope.add=cart.add;
        $scope.sub=cart.sub;
        $scope.addItemAnimate=function (food_id,food_name,food_price,$event) {
            cart.addItem(food_id,food_name,food_price);
            animate($event.clientX,$event.clientY);
        }
        $scope.addAnimate=function (food_id,$event) {
            cart.add(food_id);
            var left=$(event.currentTarget).offset().left;
            var top=$(event.currentTarget).offset().top;
            animate($event.clientX,$event.clientY);
        }
        if(flag){
            //监听数据变化，时刻发送到后台保存
            $scope.$watch("cartItem",function (now,old) {
                $http.post("/storeCart",{
                    params:now
                }).success(function (data) {
                    console.log(data);
                    console.log("保存成功 "+data.msg);
                });
            },true);
        }

        $scope.addItem=cart.addItem;
        $scope.add=function (shopid,$event) {
            cart.add(shopid);
         //小球的动画
           console.log($event);
        }
        $scope.sub=cart.sub;
        $scope.totalPrice=cart.totalPrice;
        $scope.removeItems=cart.removeItems;


    }]);
})(angular);
function animate(left,top) {
    $(".point").show();
    $(".point").offset({
        left: left,
        top: top
    });
    var car_left = $("#car_logo").offset().left;
    var car_top = $("#car_logo").offset().top;
    var mid_left = (left+car_left)/2;
    var mid_top = (top+car_top)/2-top;
    var left_speed1 = 20;
    var left_speed2 = 1;
    var top_speed2 = 1;
    var speed = 60;
    var interval1 = setInterval(function(){
        var current_left = $(".point").offset().left;
        var current_top = $(".point").offset().top;
        var newpoint = new Object();
        if (current_left <= (mid_left-200)){
            //clearInterval(interval1);
            var target_top = (current_top-mid_top+100)/5;
            newpoint.left = current_left+left_speed1;
            newpoint.top = current_top-target_top;
            $(".point").offset(newpoint);
        }
        else if(current_left <= (car_left)){
            var target_top = (car_top-current_top)/speed;
            newpoint.left = current_left+left_speed1;
            newpoint.top = current_top+target_top;
            $(".point").offset(newpoint);
            speed = speed*0.91;
        }
        else {
            clearInterval(interval1);
        }
        // console.log(target_top);
    },20);
    var interval2 = setInterval(function(){
        var current_left = $(".point").offset().left;
        var current_top = $(".point").offset().top;
        var target_top = (car_top-current_top)/5;
        if (current_left >= car_left){
            clearInterval(interval2);
        }
        var newpoint = new Object();
        newpoint.left = current_left+left_speed1;
        newpoint.top = current_top+target_top;
        $(".point").offset(newpoint);
        //left_speed2 = left_speed2+1;
        //top_speed2 = top_speed2+1;
    },20);
    setTimeout(function () {
        $(".point").hide();
    },800);
}
