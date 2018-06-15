"use strict";
const payDao=require("../dao/payDao");
function queryDeliverCost(req,res,shopid){
    payDao.queryDeliverCost(shopid,function(results){
        res.render("pay.ejs",results[0]);
    });
}
function addAddress(fields,res){
    payDao.addAddress(fields,function(results){
        console.log(results);
    });
}
module.exports={queryDeliverCost,addAddress};