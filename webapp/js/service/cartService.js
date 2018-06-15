(function (angular) {
    var app=angular.module("ele.service.cart",[]);
    app.service("cart",function () {
        //里面有很多item
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
        // 总价格   单价*数量
        this.totalPrice=function(){
            var tPrice=0;
           for(var item in cartItem){
               tPrice+=parseInt(cartItem[item].food_price)*parseInt(cartItem[item].quantity);
           }
           return tPrice;
        }
        //清空购物车
        this.removeItems=function () {
            for(var item in cartItem){
                delete cartItem[item];
            }
            return;
        }
    });
})(angular);