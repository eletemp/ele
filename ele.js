"use strict";
const express=require("express"),
        bodyParser=require("body-parser");
let app=express();
//托管静态资源
app.use("/",express.static("webapp"));
//把模板注入到app中
app.set("view engine","ejs");
app.set("views","webapp");
//post参数注入 解析 application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//首页渲染
app.get("/",function (req,res) {
    // res.render("index.ejs");
    res.render("login.ejs");
})
app.get("/favicon.ico",function(req,res){
    return;
})
//-------路由---------
require("./route/UserRoute")(app);
require("./route/homeRoute")(app);
require("./route/shopRoute")(app);
//-------监听端口-------
app.listen(8088,function(err){
    if(err) throw err;
    console.log("服务器启动成功");
});
