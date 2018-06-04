"use strict";
const formidable=require("formidable"),
    bodyParser=require("body-parser"),
    userCtrl=require("../control/UserCtrl");

module.exports=function(app) {
    app.use(bodyParser.json());
    app.post("/login",function (req,res) {
        let form=new formidable.IncomingForm();
        form.parse(req,function (err,fields,files) {
            userCtrl.login(fields,res);
        });
    });
    app.post("/checkUsername",function (req,res) {
        let form=new formidable.IncomingForm();
        form.parse(req,function (err,fields,files) {
            userCtrl.checkUsername(fields,res);
        });
    });
    app.post("/register",function (req,res) {
        let form=new formidable.IncomingForm();
        form.parse(req,function (err,fields,files) {
            userCtrl.register(fields,res);
        });
    });
}