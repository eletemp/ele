"use strict";
var payCtrl=require("../control/payCtrl");
const formidable=require("formidable"),
    bodyParser=require("body-parser");
module.exports=function(app){
    app.use(bodyParser.json());
    app.use("/pay",function(req,res){
        //查询这家店的配送费
        let shopid=req.query.id;
        payCtrl.renderPayUI(req,res,shopid,1);
    });
    app.use("/addAddress",function(req,res){
    //    获取地址
        let form=new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            payCtrl.addAddress(fields,res);
        });
    });
    app.use("/updateAddress",function(req,res){
        //    获取地址
        let form=new formidable.IncomingForm();
        let order_id=req.query.id;
        form.parse(req,function(err,fields,files){
            payCtrl.updateAddress(fields,order_id,res);
        });
    });
}