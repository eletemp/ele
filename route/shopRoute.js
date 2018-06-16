"use strict";
const formidable=require("formidable"),
    bodyParser=require("body-parser"),
    cookiePaser = require('cookie-parser'),
    session = require('express-session'),
    shopCtrl=require("../control/shopCtrl");
module.exports=function(app){
    app.use(bodyParser.json()); // for parsing application/json
    app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
    var cartItem={}
    app.use("/shop",function(req,res){
        var user=req.session.user;
        if(user==undefined){
            user={id:"",username:""};
        }
       let shopid=req.query.id;
        shopCtrl.queryAllfoods(req,res,shopid,user.username);
    });
    /*app.get("/shop",function(req,res){
        let shopid=req.param.id;
        shopCtrl.queryAllfoods(req,res,shopid);
    });*/
    app.use("/searchFood",function (req,res) {
        let keyword=req.body.keyWord;
        shopCtrl.searchFood(req,res,keyword);
    });
    app.post("/getCart",function (req,res) {
        res.writeHead(200);
        res.end(JSON.stringify(cartItem));
    });
    app.post("/storeCart",function (req,res) {
        let form=new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            cartItem=req.body.params;
            res.writeHead(200);
            res.end(JSON.stringify({msg:"OK"}));
        });
    })
}