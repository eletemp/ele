"use strict";
const formidable=require("formidable"),
    bodyParser=require("body-parser"),
    userCtrl=require("../control/UserCtrl");

module.exports=function(app) {
    app.use(bodyParser.json()); // for parsing application/json
    app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
    app.use("/login",function (req,res) {
        let form=new formidable.IncomingForm();
        form.parse(req,function (err,fields,files) {
            console.log("fields "+JSON.stringify(fields));
            userCtrl.login(fields,res);
        });
    });
    app.use("/loginui",function (req,res) {
        res.render("login.ejs",{status:"欢迎"})
    });
    app.post("/checkUsername",function (req,res) {
        let form=new formidable.IncomingForm();
        form.parse(req,function (err,fields,files) {
            userCtrl.checkUsername(fields,res);
        });
    });
    app.use("/register",function (req,res) {
        console.log("register");
        let form=new formidable.IncomingForm();
        form.parse(req,function (err,fields,files) {
            console.log("fields "+JSON.stringify(fields));
            userCtrl.register(fields,res);
        });
    });
}