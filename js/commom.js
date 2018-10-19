function fixPagesHeight() {
    $('.swiper-slide,.swiper-container').css({
        height: $(window).height(),
    })
}
$(window).on('resize', function() {
    fixPagesHeight();
})
fixPagesHeight();

//主滑动组件
var mySwiper = new Swiper('.swiper-container', {
    //组件滑动方向: vertical , horizontal
    direction: 'vertical',

    //是否允许鼠标滚轮滚动
    mousewheelControl: true,

    // ?
    watchSlidesProgress: true,

    //初始化函数
    onInit: function(swiper) {
        swiper.myactive = 0;
        console.log(swiper.activeIndex);

    },
    onProgress: function(swiper) {
        for (var i = 0; i < swiper.slides.length; i++) {
            var slide = swiper.slides[i];
            var progress = slide.progress;
            var translate, boxShadow;
            translate = progress * swiper.height * 0.8;
            scale = 1 - Math.min(Math.abs(progress * 0.2), 1);
            boxShadowOpacity = 0;
            slide.style.boxShadow = '0px 0px 10px rgba(0,0,0,' + boxShadowOpacity + ')';
            if (i == swiper.myactive) {
                es = slide.style;
                es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = 'translate3d(0,' + (translate) + 'px,0) scale(' + scale + ')';
                es.zIndex=0;
            }else{
                es = slide.style;
                es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform ='';
                es.zIndex=1;
            }
        }
    },
    onTransitionEnd: function(swiper, speed) {
        for (var i = 0; i < swiper.slides.length; i++) {
            	es = swiper.slides[i].style;
            	es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = '';
            	swiper.slides[i].style.zIndex = Math.abs(swiper.slides[i].progress);
        }
        swiper.myactive = swiper.activeIndex;
    },
    onSetTransition: function(swiper, speed) {
        for (var i = 0; i < swiper.slides.length; i++) {
            es = swiper.slides[i].style;
            es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = speed + 'ms';
        }
    }
});