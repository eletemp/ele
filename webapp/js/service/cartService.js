(function (angular) {
    var app=angular.module("ele.service.cart",[]);
    app.service("cart",function () {
        var cartItem={};
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
    })
})(angular)