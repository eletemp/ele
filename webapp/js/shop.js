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
    app.controller("shopCtrl",["$scope","cart",function ($scope,cart) {
        $scope.cartItem=cart.getCartItem();
        $scope.addItem=cart.addItem;
        $scope.add=cart.add;
        $scope.sub=cart.sub;
    }]);
})(angular);

$(function(){
    $("#add_food").on("click",function(){
        $(".point").show();
        var left = $(".point").offset().left;
        var top = $(".point").offset().top;
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
            console.log(target_top);
        },20);
        //var interval2 = setInterval(function(){
        //    var current_left = $(".point").offset().left;
        //    var current_top = $(".point").offset().top;
        //    var target_top = (car_top-current_top)/5;
        //    if (current_left >= car_left){
        //        clearInterval(interval2);
        //    }
        //    var newpoint = new Object();
        //    newpoint.left = current_left+left_speed1;
        //    newpoint.top = current_top+target_top;
        //    $(".point").offset(newpoint);
        //    //left_speed2 = left_speed2+1;
        //    //top_speed2 = top_speed2+1;
        //},20);

        //console.log("left="+left+"  "+"top="+top);
        //console.log("car_left="+car_left+"  "+"car_top="+car_top);
        //console.log("camid_left="+mid_left+"  "+"mid_top="+mid_top);
    });
    //$(document).on("click",function(event){
    //    var e = event || window.event;
    //    console.log(e.clientX+"  "+ e.clientY);
    //    //1609  912
    //})
});
