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

        // console.log("results-----"+JSON.stringify(results));
    })
}
module.exports={login};