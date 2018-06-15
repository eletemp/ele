"use strict";
const shopDao=require("../dao/shopDao");
function queryAllfoods(req,res,shopid,user){
    shopDao.queryAllfoods(shopid,function (results) {
    //    将数据渲染到页面
        renderShop(req,res,results,user);
    });
}
function searchFood(req,res,keyword){
    shopDao.searchFood(keyword,function(results){
        renderShop(req,res,results);
    });
}
function renderShop(req,res,results,user){
    var array=[];
    for(var i=0;i<results.length;i++){
        array.push({
            food_id:results[i].id,
            food_name:results[i].food_name,
            food_price:results[i].food_price,
            food_img:results[i].food_img,
            food_sales:results[i].food_sales
        });
    }
    let shops={
        arr:array,
        user:user
    };
    res.render("shop.ejs",shops);
}
module.exports={queryAllfoods,searchFood};