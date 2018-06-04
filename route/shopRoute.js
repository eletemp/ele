"use strict";
const shopCtrl=require("../control/shopCtrl");
module.exports=function(app){
    app.use("/shop",function(req,res){
       let shopid=req.query.id;
        shopCtrl.queryAllfoods(req,res,shopid);
    });
    app.get("/shop",function(req,res){
        let shopid=req.param.id;
        shopCtrl.queryAllfoods(req,res,shopid);
    });
    app.use("/searchFood",function (req,res) {
        let keyword=req.body.keyWord;
        shopCtrl.searchFood(req,res,keyword);
    })
}