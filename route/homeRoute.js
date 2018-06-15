"use strict";
const formidable=require("formidable"),
    cookiePaser = require('cookie-parser'),
    session = require('express-session'),
    homeCtrl=require("../control/homeCtrl");
module.exports=function(app){

    app.use("/home",function(req,res){
        var user=req.session.user;
        if(user==undefined){
            user={id:"",username:""};
        }
        let form=new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            homeCtrl.queryAllShops(fields,user.username,req,res);
        });

    });
    app.use("/search",function(req,res){
        let keyword=req.body.keyWord;
        homeCtrl.globalsearch(req,res,keyword);
    });
}