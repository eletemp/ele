"use strict";
const formidable=require("formidable"),
    bodyParser=require("body-parser"),
    userCtrl=require("../control/UserCtrl"),
    cookieParser = require('cookie-parser'),
    session = require('express-session');

module.exports=function(app) {
    app.use(cookieParser());
    app.use(session({
        secret: '12345',
        name: 'name',
        cookie: {maxAge: 600000},
        resave: false,
        saveUninitialized: true,
    }));
    // let user={}
    app.use(bodyParser.json()); // for parsing application/json
    app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
    app.use("/login",function (req,res) {
        let form=new formidable.IncomingForm();
        form.parse(req,function (err,fields,files) {
            userCtrl.login(fields,res,function (user) {
                if(user!=undefined){
                    req.session.user = {id:user.id,username:user.username};
                }
            });
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