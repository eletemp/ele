"use strict";
const homeDao=require("../dao/homeDao");
function queryAllShops(fields,user,req,res){
    homeDao.queryAllShops(function(results){
        console.log(results[0]);
    //    将数据渲染到页面
        renderHome(fields,user,req,res,results);
    });
}
//搜索商家或美食
function globalsearch(req,res,keyword,user,fields){
    homeDao.globalsearch(keyword,function(results){
        renderHome({address:"南华大学"},user,req,res,results);
    });
}

function renderHome(fields,user,req,res,results){
    console.log(results);
    var array=[];
    for(var i=0;i<results.length;i++){
        array.push({
            id:results[i].id,
            shop_name:results[i].shop_name,
            start_cost:results[i].start_cost,
            deliver_cost:results[i].deliver_cost,
            shop_img:results[i].shop_img
        });
    }
    let shops={
        arr:array,
        address:fields.address,
        user:user
    };
    res.render("home.ejs",shops);
}
module.exports={queryAllShops,globalsearch};