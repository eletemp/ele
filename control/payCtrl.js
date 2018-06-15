"use strict";
const payDao=require("../dao/payDao");
function queryDeliverCost(req,res,shopid){
    payDao.queryDeliverCost(shopid,function(results){
        res.render("pay.ejs",results[0]);
    });
}
function addAddress(fields,res){
    payDao.addAddress(fields,function(results){
        if(results!=null){
            console.log("success");
        }else{
            console.log("failed");
        }
    });
}
module.exports={queryDeliverCost,addAddress};