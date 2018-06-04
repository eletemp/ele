"use strict";
const userDao=require("../dao/UserDao");
function login(fields,res) {
    userDao.selectUser(fields.username,fields.password,function (results) {
        res.writeHead(200);
        if(results.length!=0){
            res.end(JSON.stringify({status:"success"}));
        }else{
            res.end(JSON.stringify({status:"failed"}));
        }
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
        console.log("results "+JSON.stringify(results));
        res.writeHead(200);
        if(results.affectedRows==1){
            res.end("{regMsg:'注册成功'}");
        }else{
            res.end("{regMsg:'注册失败'}");
        }

    });
}
module.exports={login,checkUsername,register};