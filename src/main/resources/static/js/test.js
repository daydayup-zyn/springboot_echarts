$(function () {
    $('#submit').click(function () {
        var a = $("#a").val()
        var b = $("#b").val()
        getDataByType(a,b)
    })

})
function getDataByType(a,b){
    var chartData = "";
    $.ajax({
        url:'/hh/test',
        type:'post',
        async:false,
        data:{
            a : a,
            b : b
        },
        dataType:'json',
        success:function(data){
            console.warn(data);
            chartData = data;
        }
    });
    return chartData;
}