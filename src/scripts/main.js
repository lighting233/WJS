/**
 * Created by light on 2016/10/20.
 */

$(function () {
    function resize() {
        var windowWidth = $(window).width();
        var isSmallScreen = windowWidth < 768;

        $('#main_ad > .carousel-inner > .item').each(function (i, item) {
            var $item = $(item);
            var imgSrc = isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');

            $item.css('backgroundImage','url("' + imgSrc +'")');

            if(isSmallScreen){
                $item.html('<img src="'+ imgSrc +'"/>');
            }else {
                $item.empty();
            }

        });


        //初始化tooltip插件
        $('[data-toggle="tooltip"]').tooltip();


        /*控制标签页的标签容器宽度*/

        var $ulContainer = $('.nav-tabs');
        //获取所有子元素宽度和
        var width = 30;
        //遍历子元素
        $ulContainer.children().each(function (index,element) {
            width += element.clientWidth;
        });

        if(width > windowWidth){
            $ulContainer.css('width',width).parent().css('overflow-x','scroll');
        }else {
            $ulContainer.css('width', 'auto');
            $ulContainer.parent().css('overflow-x', 'hidden');
        }
    }

    $(window).on('resize',resize).trigger('resize');


    var $newsTitle = $('.news-title');
    $('#news .nav-pills a').on('click',function () {
        var $this = $(this);
        var title = $this.data('title');
        $newsTitle.text(title);
    });


    var $carousels = $('.carousel');
    var startX,endX;
    var offset = 50;

    $carousels.on('touchstart',function (e) {
        startX = e.originalEvent.touches[0].clientX;

    });

    $carousels.on('touchmove',function (e) {
        endX = e.originalEvent.touches[0].clientX;

    });

    $carousels.on('touchend',function (e) {
        var distance = Math.abs(startX - endX);

        if (distance > offset){
            $(this).carousel(startX > endX ? 'next' : 'prev');
        }
    });


});
