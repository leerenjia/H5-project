function fixPagesHeight(){$(".swiper-slide,.swiper-container").css({height:$(window).height()})}$(window).on("resize",function(){fixPagesHeight()}),fixPagesHeight();var mySwiper=new Swiper(".swiper-container",{direction:"vertical",mousewheelControl:!0,watchSlidesProgress:!0,onInit:function(s){s.myactive=0,console.log(s.activeIndex)},onProgress:function(s){for(var e=0;e<s.slides.length;e++){var n,r=s.slides[e],i=r.progress;n=i*s.height*.8,scale=1-Math.min(Math.abs(.2*i),1),boxShadowOpacity=0,r.style.boxShadow="0px 0px 10px rgba(0,0,0,"+boxShadowOpacity+")",e==s.myactive?(es=r.style,es.webkitTransform=es.MsTransform=es.msTransform=es.MozTransform=es.OTransform=es.transform="translate3d(0,"+n+"px,0) scale("+scale+")",es.zIndex=0):(es=r.style,es.webkitTransform=es.MsTransform=es.msTransform=es.MozTransform=es.OTransform=es.transform="",es.zIndex=1)}},onTransitionEnd:function(s,e){for(var n=0;n<s.slides.length;n++)es=s.slides[n].style,es.webkitTransform=es.MsTransform=es.msTransform=es.MozTransform=es.OTransform=es.transform="",s.slides[n].style.zIndex=Math.abs(s.slides[n].progress);s.myactive=s.activeIndex},onSetTransition:function(s,e){for(var n=0;n<s.slides.length;n++)es=s.slides[n].style,es.webkitTransitionDuration=es.MsTransitionDuration=es.msTransitionDuration=es.MozTransitionDuration=es.OTransitionDuration=es.transitionDuration=e+"ms"}});