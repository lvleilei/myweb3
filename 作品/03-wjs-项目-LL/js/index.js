/**
 * Created by wcs on 2017/3/7.
 */
//alert(1); //测试
window.onload = function () {
    //触屏轮播图
    banner();


    //初始化提示工具   宝 北 字的提示信息
    $('.bao').tooltip();
    $('.bei').tooltip();
    //动态设置  wjs-tabs 宽度
    setWidth();
}
//触屏轮播图
function banner(){
    //给banner绑定触屏事件
    var banner = document.querySelector(".banner");
    //定义变量记录数据
    var startX = 0;
    var moveX = 0;
    var distanceX = 0;
    banner.addEventListener("touchstart", function (e) {
        startX = e.targetTouches[0].clientX;//触屏起始坐标
    })
    banner.addEventListener("touchmove", function (e) {
        moveX = e.targetTouches[0].clientX;//移动后的坐标
         distanceX = moveX - startX;//算距离差
    })
    banner.addEventListener("touchend", function (e) {
        //在触屏结束后，判断用户操作方式
        if(distanceX > 0){
            //向右滑动 上一张
            $('.carousel').carousel('prev');
        }
        if(distanceX < 0){
            //向左滑动 下一张
            $('.carousel').carousel('next');
        }

        //数据重置
        distanceX=0;
        moveX=0;
        startX=0;

    })
}

//动态设置wjs-tabs 宽度
function setWidth(){
    var w =0;
    //获取所有li的宽度 累加在W中
    $(".wjs-tabs li").each(function (index,e) {
        w+=$(e).outerWidth(true);
    });
    console.log(w);
    $(".wjs-tabs").width(w);//把宽度设置给ul
}