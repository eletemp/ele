$(function(){
    // $("#saveAdd").on("click",function(){
    //     //序列化表格内内容为字符串，用于ajax请求
    //     var address=$("#order-form").serialize();
    //     //转成json格式的字符串
    //     var addStr=paramToJson(address);
    //     //转json
    //     var json=strToJson(addStr);
    //     console.log(json);
    //     $.ajax({
    //         type:"post",
    //         url:"/address",
    //         async:false,
    //         dataType:'json',
    //         data:json,
    //         success:function(data){
    //             console.log(data);
    //         },
    //         error:function(){}
    //     });
    // });
    $("#order").on("click",function () {
        console.log("aa");

        var a=confirm("下单成功");
        if(a==true){
            window.location.href="/home";
        }
    })
//    表单验证
    $("#order-form").bootstrapValidator({
        message : '该值不合法',
        feedbackIcons : {
            valid : 'glyphicon glyphicon-ok',
            invalid : 'glyphicon glyphicon-remove',
            validating : 'glyphicon glyphicon-refresh'
        },
        fields:{
            name:{
                validators:{
                    notEmpty:{//非空验证
                        message:'姓名不能为空'
                    }
                }
            },
            sex:{
                validators:{
                    notEmpty:{
                        message:"性别不能为空"
                    }
                }
            },
            location:{
                validators:{
                    notEmpty:{
                        message:"地址不能为空"
                    }
                }
            },
            detail_address:{
                validators:{
                    notEmpty:{
                        message:"详细地址不能为空"
                    }
                }
            },
            phone:{
                validators:{
                    notEmpty:{
                        message:"电话不能为空"
                    }
                },
                stringLength:{//长度验证
                    min:3,
                    max:11,
                    message:"电话号码位数为11位"
                },
                regexp:{//正则式验证
                    regexp : /^[0-9]+$/,
                    message : '电话号码只能为数字'
                },
            }
        }
    });
});
