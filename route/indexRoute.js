"use strict";
module.exports=function(app){
    app.use("/index",function(req,res){
        res.render("index.ejs");
    });
}