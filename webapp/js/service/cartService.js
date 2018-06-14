(function (angular) {
    var app=angular.module("ele.service.cart",[]);
    app.service("cart",["$http",function ($http) {
        var cartItem={};
        //初始化数据
        $.ajax({
            type:"post",
            url:"/getCart",
            async:false,//同步
            success:function(data){
                var json=strToJson(data);
                cartItem=json;
            },
            error:function(){}
        });
        this.getCartItem=function () {
            return cartItem;
        }
        this.addItem=function (food_id,food_name,food_price) {
            if(cartItem[food_id]==undefined){
                cartItem[food_id]={
                    food_id:food_id,
                    food_name:food_name,
                    food_price:food_price,
                    quantity:1
                };
            }
        }
        this.add=function (food_id) {
            cartItem[food_id].quantity=parseInt(cartItem[food_id].quantity)+1;
        }
        this.sub=function (food_id) {
            if(cartItem[food_id].quantity>1){
                cartItem[food_id].quantity-=1;
            }else{
                delete cartItem[food_id];
            }
        }
    }]);
})(angular)