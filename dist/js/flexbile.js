!function(e,o){"use strict";var u={},l=1;!function(){var t=o.querySelector('meta[name="viewport"]'),e=o.querySelector('meta[name="hotcss"]'),i=1024,n=0;if(e){var a=e.getAttribute("content");if(a){var r=a.match(/initial\-dpr=([\d\.]+)/);r&&(l=parseFloat(r[1]));var d=a.match(/max\-width=([\d\.]+)/);d&&(i=parseFloat(d[1]));var m=a.match(/design\-width=([\d\.]+)/);m&&(n=parseFloat(m[1]))}}o.documentElement.setAttribute("data-dpr",l),u.dpr=l,o.documentElement.setAttribute("max-width",i),u.maxWidth=i,n&&(o.documentElement.setAttribute("design-width",n),u.designWidth=n);var s=1/l,c="width=device-width, initial-scale="+s+", minimum-scale="+s+", maximum-scale="+s+", user-scalable=no";t?t.setAttribute("content",c):((t=o.createElement("meta")).setAttribute("name","viewport"),t.setAttribute("content",c),o.head.appendChild(t))}(),u.px2rem=function(t,e){return e||(e=parseInt(u.designWidth,10)),320*parseInt(t,10)/e/20},u.rem2px=function(t,e){return e||(e=parseInt(u.designWidth,10)),20*t*e/320},u.mresize=function(){var t=o.documentElement.getBoundingClientRect().width||e.innerWidth;if(u.maxWidth&&t/u.dpr>u.maxWidth&&(t=u.maxWidth*u.dpr),!t)return!1;o.documentElement.style.fontSize=t/l/10+"px",u.callback&&u.callback()},u.mresize(),e.addEventListener("resize",function(){clearTimeout(u.tid),u.tid=setTimeout(u.mresize,33)},!1),e.addEventListener("load",u.mresize,!1),setTimeout(function(){u.mresize()},333),e.hotcss=u}(window,document);