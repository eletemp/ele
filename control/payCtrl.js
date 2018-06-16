"use strict";
const payDao=require("../dao/payDao");
function queryDeliverCost(req,res,shopid,callback){
    payDao.queryDeliverCost(shopid,function(results){
        callback(results[0]);
    });
}
function queryAddress(req,res,userid,callback){
    payDao.queryAddress(userid,function(results){
        callback(results[0]);
    });
}
function renderPayUI(req,res,shopid,userid){
    var array={};
    queryDeliverCost(req,res,shopid,function(results1){
        let address=queryAddress(req,res,userid,function(results2){
            array={deliver:results1,address:results2};
            res.render("pay.ejs",array)
        });
        ;
    });

}
function addAddress(fields,res){
    payDao.addAddress(fields,function(results){
    //    在前台显示添加成功或失败
        res.redirect("/pay?id=1");
    });
}
function updateAddress(fields,order_id,res){
    payDao.updateAddress(fields,order_id,function(results){
        console.log(results);
    });
}

module.exports={renderPayUI,addAddress,updateAddress};