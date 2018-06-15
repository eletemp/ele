"use strict";
var payCtrl=require("../control/payCtrl");
const formidable=require("formidable"),
    bodyParser=require("body-parser");
module.exports=function(app){
    app.use(bodyParser.json());
    app.use("/pay",function(req,res){
        //查询这家店的配送费
        let shopid=req.query.id;
        payCtrl.queryDeliverCost(req,res,shopid);
    });
    app.post("/address",function(req,res){
        let form=new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            payCtrl.addAddress(fields,res);
        });
    });
    app.use("/address",function(req,res){
    //    获取地址
        let form=new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            console.log("fields="+fields);
            payCtrl.addAddress(fields,res);
        });
    });
}