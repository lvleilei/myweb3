/**
 * Created by wcs on 2017/3/7.
 */
//alert(1); //����
window.onload = function () {
    //�����ֲ�ͼ
    banner();


    //��ʼ����ʾ����   �� �� �ֵ���ʾ��Ϣ
    $('.bao').tooltip();
    $('.bei').tooltip();
    //��̬����  wjs-tabs ���
    setWidth();
}
//�����ֲ�ͼ
function banner(){
    //��banner�󶨴����¼�
    var banner = document.querySelector(".banner");
    //���������¼����
    var startX = 0;
    var moveX = 0;
    var distanceX = 0;
    banner.addEventListener("touchstart", function (e) {
        startX = e.targetTouches[0].clientX;//������ʼ����
    })
    banner.addEventListener("touchmove", function (e) {
        moveX = e.targetTouches[0].clientX;//�ƶ��������
         distanceX = moveX - startX;//������
    })
    banner.addEventListener("touchend", function (e) {
        //�ڴ����������ж��û�������ʽ
        if(distanceX > 0){
            //���һ��� ��һ��
            $('.carousel').carousel('prev');
        }
        if(distanceX < 0){
            //���󻬶� ��һ��
            $('.carousel').carousel('next');
        }

        //��������
        distanceX=0;
        moveX=0;
        startX=0;

    })
}

//��̬����wjs-tabs ���
function setWidth(){
    var w =0;
    //��ȡ����li�Ŀ�� �ۼ���W��
    $(".wjs-tabs li").each(function (index,e) {
        w+=$(e).outerWidth(true);
    });
    console.log(w);
    $(".wjs-tabs").width(w);//�ѿ�����ø�ul
}