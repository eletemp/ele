"use strict";
const homeCtrl=require("../control/homeCtrl");
module.exports=function(app){
    app.use("/home",function(req,res){
        homeCtrl.queryAllShops(req,res);
    });
}