"use strict";
const formidable=require("formidable"),
    userCtrl=require("../control/UserCtrl")
module.exports=function(app) {
    app.post("/login",function (req,res) {
        let form=new formidable.IncomingForm();
        form.parse(req,function (err,fields,files) {
            userCtrl.login(fields,res);
        });
    });
}