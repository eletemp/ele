"use strict";
const jdbcUtil=require("../util/jdbcUtil");
function queryAllfoods(shopid,callback){
    let con=jdbcUtil.getConnection();
    let str="select * from food where id in (select food_id from shop_food where shop_id="+shopid+")";
    con.query(str,function (err,results,fields) {
        if(err) throw err;
        callback(results);
    });
}
function searchFood(keyword,callback) {
    let con=jdbcUtil.getConnection();
    let str="select * from food where food_name like"+"'%"+keyword+"%'";
    con.query(str,function (err,results,fields) {
        if(err) throw err;
        // console.log(results);
        callback(results);
    });
}
module.exports={queryAllfoods,searchFood};