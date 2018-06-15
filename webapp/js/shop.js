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
    app.controller("shopCtrl",["$scope","$http","$location","cart",function ($scope,$http,$location,cart) {
        var flag=false;
        if(!flag){
            $scope.cartItem=cart.getCartItem();
            flag=true;
        }
        console.log(flag);
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
$(function(){
    //    点击结算按钮，进行页面跳转
    $("#checkout").on("click",function(){
    //    页面跳转       获取shopId
        var idStr=location.search;
        var id=idStr.slice(1,idStr.length);
        window.location.href="/pay?"+id;
    });
    // $(".add_food").on("click",function(){
    //     $(".point").css({
    //         left: $(this).offset().left,
    //         top: $(this).offset().top
    //     });
    //     $(".point").show();
    //     var left = $(".point").offset().left;
    //     var top = $(".point").offset().top;
    //     var car_left = $("#car_logo").offset().left;
    //     var car_top = $("#car_logo").offset().top;
    //     var mid_left = (left+car_left)/2;
    //     var mid_top = (top+car_top)/2-top;
    //     var left_speed1 = 20;
    //     var left_speed2 = 1;
    //     var top_speed2 = 1;
    //     var speed = 40;
    //     var interval1 = setInterval(function(){
    //         var current_left = $(".point").offset().left;
    //         var current_top = $(".point").offset().top;
    //         var newpoint = new Object();
    //         if (current_left <= (mid_left-200)){
    //             var target_top = (current_top-mid_top+100)/5;
    //             newpoint.left = current_left+left_speed1;
    //             newpoint.top = current_top-target_top;
    //             $(".point").offset(newpoint);
    //         }
    //         else if(current_left <= (car_left)){
    //             var target_top = (car_top-current_top)/speed;
    //             newpoint.left = current_left+left_speed1;
    //             newpoint.top = current_top+target_top;
    //             $(".point").offset(newpoint);
    //             speed = speed*0.91;
    //         }
    //         else {
    //             clearInterval(interval1);
    //         }
    //     },30);
    // });
    //$(document).on("click",function(event){
    //    var e = event || window.event;
    //    console.log(e.clientX+"  "+ e.clientY);
    //    //1609  912
//})
});
// function GetRequest() {
//     var url = location.search; //获取url中"?"符后的字串
//     var theRequest = new Object();
//     if (url.indexOf("?") != -1) {
//         var str = url.substr(1);
//         strs = str.split("&");
//         for(var i = 0; i < strs.length; i ++) {
//             theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
//         }
//     }
//     return theRequest;
// }
