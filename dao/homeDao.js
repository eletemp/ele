"use strict";
//引入数据库工具包
const jdbcUtil=require("../util/jdbcUtil");
function queryAllShops(callback){
    var con=jdbcUtil.getConnection();
    var str="select * from shop";
    con.query(str,function (err,results,fields) {
        if(err) throw err;
        // console.log(results);
        callback(results);
    });
}
module.exports={queryAllShops};