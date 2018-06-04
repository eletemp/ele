$(function () {
    $("#btn_login").on("click",function () {
        //序列化表格内内容为字符串，用于ajax请求
        var userinfo=$("#log_form").serialize();
        //转成json格式的字符串
        var userstr=paramToJson(userinfo);
        //转json
        var json=strToJson(userstr);
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
                    $(".log_msg").text("账号或密码错误").show(500);
                    setTimeout(function(){
                        $(".log_msg").hide(500);
                    },1500);
                }
                console.log(data);
            },
            error:function(){}
        });
    });
    $("#log_a").on("click",function () {
        $("#log_a").addClass("active");
        $("#reg_a").removeClass("active");
        $("#reg_form").hide(500);
        setTimeout(function () {
            $("#log_form").show(500);
        },500);
    });
    $("#reg_a").on("click",function () {
        $("#reg_a").addClass("active");
        $("#log_a").removeClass("active");
        $("#log_form").hide(500);
        setTimeout(function () {
            $("#reg_form").show(500);
        },500);

    });
//    表单验证
    $("#reg_form").bootstrapValidator({
        message : '该值不合法',
        feedbackIcons : {
            valid : 'glyphicon glyphicon-ok',
            invalid : 'glyphicon glyphicon-remove',
            validating : 'glyphicon glyphicon-refresh'
        },
        fields:{
            regname:{
                validators:{
                    notEmpty:{//非空验证
                        message:'用户名不能为空'
                    },
                    stringLength:{//长度验证
                        min:3,
                        max:16,
                        message:"用户名长度为3-16"
                    },
                    regexp:{//正则式验证
                        regexp : /^[0-9a-zA-Z_]+$/,
                        message : '用户名只能为字母、数字、下划线'
                    },
                    remote:{
                        type: 'POST',
                        url: '/checkUsername',
                        message:'该用户名已被占用'
                    }
                }
            },
            regpwd:{
                validators:{
                    notEmpty:{
                        message:"密码不能为空"
                    },
                    stringLength:{//长度验证
                        min:3,
                        max:16,
                        message:"密码长度为3-16"
                    },
                    regexp:{//正则式验证
                        regexp : /^[0-9a-zA-Z_]+$/,
                        message : '密码只能为字母、数字、下划线'
                    }
                }
            },
            confirm_pwd:{
                message: '两次密码不一致',
                validators:{
                    notEmpty: {
                        message : '请确认密码'
                    },
                    identical: {
                        field: 'regpwd',
                        message: '两次密码不一致'
                    }
                }
            }
        }
    })
    $("#btn_regist").on("click",function () {
        console.log($("#reg_form").data("bootstrapValidator").isValid());
        var userinfo=strToJson(paramToJson($("#reg_form").serialize()));
        $.ajax({
            type:"post",
            url:"/register",
            async:false,
            data:userinfo,
            success:function(data){
                var json=strToJson(data);
                $(".log_msg").text(json.regMsg).show(500);
                setTimeout(function(){
                    $(".log_msg").hide(500);
                },1500);
                setTimeout(function(){
                    window.location.href="./home.html";
                },2000);
            },
            error:function(){}
        });
    })
});