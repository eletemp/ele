"use strict";
const express=require("express");
let app=express();
//托管静态资源
app.use("/",express.static("webapp"));
//把模板注入到app中
app.set("view engine","ejs");
app.set("views","webapp");
//-------路由---------
require("./route/UserRoute")(app);
//-------监听端口-------
app.listen(9090,function(err){
    if(err) throw err;
});
