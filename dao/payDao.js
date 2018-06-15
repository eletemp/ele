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
        let location=fields.location;
        let detail_address=fields.detail_address;
        let phone=fields.phone;
        console.log("name="+name);
        let sql="insert into orderitem(name,sex,location,detail_address,phone)\n" +
            "VALUES(?,?,?,?,?)";
        con.query(sql,[name,sex,location,detail_address,phone],function(err,results,fields){
            if(err) throw err;
            console.log("results="+results);
            callback(results);
    });
}
module.exports={queryDeliverCost,addAddress};