/**
 * Created by ��� on 2017/3/11.
 */
//alert(1);

$(function(){
    // 给每一屏都加上背景图片
    var arrBg = ['images/img_01.jpg','images/img_02.jpg','images/img_03.jpg','images/img_04.jpg','images/img_05.jpg'];
    $('.section').each(function(i,item){
        $(item).css({'backgroundImage':'url('+ arrBg[i] +')'});
    })
    //插件初始化代码
    $('#dowebok').fullpage({
        //滚动到某一屏后的回调函数, 参数index 表示当前是那一屏
        afterLoad: function(link,index){
            //console.log(index);
            $('.section').removeClass('current');
            //代码的目的 让第一屏刷新时有动画
            setTimeout(function () {
                $('.section').eq(index-1).addClass('current');
            },100);
            if(index == 2){
                // 绘制圆环
                huan('canvas1',300,'HTML5');
                huan('canvas2',180,'CSS3');
                huan('canvas3',250,'动画');
                huan('canvas4',300,'jQuery');
            }
        }

    });
    $('#LL-nav li:nth-child(1)').click(function () {
        $('#page1').addClass('current').siblings().removeClass('current');
    })
    $('#LL-nav li:nth-child(2)').click(function () {
        $('#page2').addClass('current').siblings().removeClass('current');
    })
    $('#LL-nav li:nth-child(3)').click(function () {
        $('#page3').addClass('current').siblings().removeClass('current');
    })
    $('#LL-nav li:nth-child(4)').click(function () {
        $('#page4').addClass('current').siblings().removeClass('current');
    })
    $('#LL-nav li:nth-child(5)').click(function () {
        $('#page5').addClass('current').siblings().removeClass('current');
    })


    $('.right-nav li:nth-child(1)').click(function () {
        $('#page1').addClass('current').siblings().removeClass('current');
    })
    $('.right-nav li:nth-child(2)').click(function () {
        $('#page2').addClass('current').siblings().removeClass('current');
    })
    $('.right-nav li:nth-child(3)').click(function () {
        $('#page3').addClass('current').siblings().removeClass('current');
    })
    $('.right-nav li:nth-child(4)').click(function () {
        $('#page4').addClass('current').siblings().removeClass('current');
    })
    $('.right-nav li:nth-child(5)').click(function () {
        $('#page5').addClass('current').siblings().removeClass('current');
    })


});