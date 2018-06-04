"use strict";
const connection=require("../util/jdbcUtil");
let conn=connection.getConnection();
//用于登录，不为空即为登录成功
function selectUser(username,password,callback){
    var sql="SELECT * from user where username=? and password=?;";
    conn.query(sql,[username,password],function (err,results,fields) {
        callback(results);
    });
}
//用于注册
function insertUser(username,password,callback) {
    var sql="INSERT INTO USER (username, password) VALUES(?, ?);";
    conn.query(sql,[username,password],function (err,results,fields) {
        callback(results);
    })
}
//验证用户名
function selectUsername(username,callback) {
    var sql="SELECT username from user where username=?;";
    conn.query(sql,[username],function (err,results,fields) {
        callback(results);
    });
}
module.exports={selectUser,insertUser,selectUsername}