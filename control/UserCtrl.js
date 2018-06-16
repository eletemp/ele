"use strict";
const userDao=require("../dao/UserDao");
function login(body,res,callback) {
    userDao.selectUser(body.username,body.password,function (results) {
        var json={};
        if(results.length>0){
            json={status:"success"};
            // res.render("home.ejs",json);
            callback(results[0]);
            res.redirect('/')
        }else{
            json={status:"用户名或密码错误"};
            res.render("login.ejs",json);
        }
        /*res.writeHead(200);
        res.end(JSON.stringify(json));*/

    })
}
function checkUsername(fields,res) {
    userDao.selectUsername(fields.regname,function (results) {
        results=results||[];
        // res.writeHead(200);
        if(results.length>0){
            res.end("{\"valid\":false}");
        }else{
            res.end("{\"valid\":true}");
        }
    })
}
function register(fields,res) {
    userDao.insertUser(fields.regname,fields.regpwd,function (results) {
        console.log("fields "+JSON.stringify(fields));
        // res.writeHead(200);
        if(results.affectedRows==1){
            // res.end("{regMsg:'注册成功'}");
            res.render("login.ejs",{status:"注册成功"});
        }else{
            // res.end("{regMsg:'注册失败'}");
            res.render("login.ejs",{status:"注册失败"});
        }

    });
}
module.exports={login,checkUsername,register};