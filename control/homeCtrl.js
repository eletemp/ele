"use strict";

const homeDao=require("../dao/homeDao");
function queryAllShops(req,res){
    homeDao.queryAllShops(function(results){
    //    将数据渲染到页面
        renderHome(req,res,results);
    });
}
function renderHome(req,res,results){
    var array=[];
    for(var i=0;i<results.length;i++){
        array.push({
            shop_name:results[i].shop_name,
            start_cost:results[i].start_cost,
            deliver_cost:results[i].deliver_cost,
            shop_img:results[i].shop_img
        });
    }
    let shops={
        arr:array
    };
    console.log(shops.arr[0]);
    res.render("home.ejs",shops);
}
module.exports={queryAllShops};