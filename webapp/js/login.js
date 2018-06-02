$(function () {
    $("#btn_login").on("click",function () {
        //序列化表格内内容为字符串，用于ajax请求
        var userinfo=$("#log_form").serialize();
        //转成json格式的字符串
        var userstr=paramToJson(userinfo);
        //转json
        var json=strToJson(userstr);
        console.log(json);
        $.ajax({
            type:"post",
            url:"/login",
            async:false,
            data:json,
            success:function(data){
                var json=strToJson(data);
                if(json.status=="success"){
                    window.location.href="./home.html";
                }else{
                    $(".log_msg")[0].innerText="账号或密码错误";
                }
                console.log(data);
            },
            error:function(){}
        });
    });

});