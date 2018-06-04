"use strict";
//引入数据库工具包
const jdbcUtil=require("../util/jdbcUtil");
function queryAllShops(callback){
    let con=jdbcUtil.getConnection();
    let str="select * from shop";
    con.query(str,function (err,results,fields) {
        if(err) throw err;
        callback(results);
    });
}
function globalsearch(keyword,callback){
    let con=jdbcUtil.getConnection();
    let str="select * from shop where shop_name like"+"'%"+keyword+"%'";
    con.query(str,function (err,results,fields) {
        if(err) throw err;
        callback(results);
    });
}
module.exports={queryAllShops,globalsearch};