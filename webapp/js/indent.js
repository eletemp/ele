$(function(){
    $("#address_manage").on("click",function(){
        $("#add_address").show();
        $("body").css("background","gainsboro");
    });
    $("#add_close").on("click",function(){
        $("body").css("background","#f7f7f7");
        $("#add_address").hide()
    });
    $("#save").on("click",function(){
        alert("保存成功！");
        $("#add_address").hide();
        $("body").css("background","#f7f7f7");
    });
    $("#cancel").on("click",function(){
        $("#add_address").hide();
        $("body").css("background","#f7f7f7");
    });
});