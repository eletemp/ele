"use strict";
const payDao=require("../dao/payDao");
function queryDeliverCost(req,res,shopid){
    payDao.queryDeliverCost(shopid,function(results){
        console.log(results[0]);
        res.render("pay.ejs",results[0]);
    });
}
function addAddress(fields,res){
    payDao.addAddress(fields,function(results){
        if(results!=null){
        //    查询地址
            payDao.queryAddress(1,function(results){
                let address=results[results.length-1];
                console.log(address);
                res.render("pay.ejs",address);
            });
        }else{
            res.render("pay.ejs",null);
        }
    });
}
module.exports={queryDeliverCost,addAddress};