"use strict";
//引入包
const fs=require("fs"),
    pt=require("path"),
    mysql=require("mysql");
//连接数据库
function getConnection() {
    let connection=mysql.createConnection({
        host     : '127.0.0.1',
        user     : 'root',
        password : '',
        database : 'ele'
    });
    connection.connect();
    return  connection;
}
//将方法暴露出去
module.exports{getConnection};

