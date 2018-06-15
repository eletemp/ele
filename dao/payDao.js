"use strict";
const jdbcUtil=require("../util/jdbcUtil");
function queryDeliverCost(shopid,callback){
    let con=jdbcUtil.getConnection();
    var str="select deliver_cost from shop where id="+shopid;
    con.query(str,function (err,results,fields) {
        if(err) throw err;
        callback(results);
    });
}
function addAddress(fields,callback){
        let con=jdbcUtil.getConnection();
        let name=fields.name;
        let sex=fields.sex;
        if(sex=='2'){
            sex='女';
        }
        if(sex=='1'){
            sex='男';
        }
        let location=fields.location;
        let detail_address=fields.detail_address;
        let phone=fields.phone;
        console.log("name="+name);
        let sql="insert into orderitem(name,sex,location,detail_address,phone,user_id)\n" +
            "VALUES(?,?,?,?,?,?)";
        con.query(sql,[name,sex,location,detail_address,phone,1],function(err,results,fields){
            if(err) throw err;
            callback(results);
    });
}
function queryAddress(fields,callback){
    let con=jdbcUtil.getConnection();
    let user_id=fields;
    var str="select name,detail_address,phone from orderitem where user_id="+user_id;
    con.query(str,function (err,results,fields) {
        if(err) throw err;
        callback(results);
    });
}
module.exports={queryDeliverCost,addAddress,queryAddress};