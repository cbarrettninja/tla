/* == jquery mousewheel plugin == Version: 3.1.13, License: MIT License (MIT) */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
/* == malihu jquery custom scrollbar plugin == Version: 3.1.3, License: MIT License (MIT) */
!function(e){"undefined"!=typeof module&&module.exports?module.exports=e:e(jQuery,window,document)}(function(e){!function(t){var o="function"==typeof define&&define.amd,a="undefined"!=typeof module&&module.exports,n="https:"==document.location.protocol?"https:":"http:",i="cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";o||(a?require("jquery-mousewheel")(e):e.event.special.mousewheel||e("head").append(decodeURI("%3Cscript src="+n+"//"+i+"%3E%3C/script%3E"))),t()}(function(){var t,o="mCustomScrollbar",a="mCS",n=".mCustomScrollbar",i={setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:!0,alwaysShowScrollbar:0,snapOffset:0,mouseWheel:{enable:!0,scrollAmount:"auto",axis:"y",deltaFactor:"auto",disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,documentTouchScroll:!0,advanced:{autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:!0,updateOnImageLoad:"auto",autoUpdateTimeout:60},theme:"light",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0}},r=0,l={},s=window.attachEvent&&!window.addEventListener?1:0,c=!1,d=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar","mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer","mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"],u={init:function(t){var t=e.extend(!0,{},i,t),o=f.call(this);if(t.live){var s=t.liveSelector||this.selector||n,c=e(s);if("off"===t.live)return void m(s);l[s]=setTimeout(function(){c.mCustomScrollbar(t),"once"===t.live&&c.length&&m(s)},500)}else m(s);return t.setWidth=t.set_width?t.set_width:t.setWidth,t.setHeight=t.set_height?t.set_height:t.setHeight,t.axis=t.horizontalScroll?"x":p(t.axis),t.scrollInertia=t.scrollInertia>0&&t.scrollInertia<17?17:t.scrollInertia,"object"!=typeof t.mouseWheel&&1==t.mouseWheel&&(t.mouseWheel={enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1}),t.mouseWheel.scrollAmount=t.mouseWheelPixels?t.mouseWheelPixels:t.mouseWheel.scrollAmount,t.mouseWheel.normalizeDelta=t.advanced.normalizeMouseWheelDelta?t.advanced.normalizeMouseWheelDelta:t.mouseWheel.normalizeDelta,t.scrollButtons.scrollType=g(t.scrollButtons.scrollType),h(t),e(o).each(function(){var o=e(this);if(!o.data(a)){o.data(a,{idx:++r,opt:t,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:!1,tweenRunning:!1,sequential:{},langDir:o.css("direction"),cbOffsets:null,trigger:null,poll:{size:{o:0,n:0},img:{o:0,n:0},change:{o:0,n:0}}});var n=o.data(a),i=n.opt,l=o.data("mcs-axis"),s=o.data("mcs-scrollbar-position"),c=o.data("mcs-theme");l&&(i.axis=l),s&&(i.scrollbarPosition=s),c&&(i.theme=c,h(i)),v.call(this),n&&i.callbacks.onCreate&&"function"==typeof i.callbacks.onCreate&&i.callbacks.onCreate.call(this),e("#mCSB_"+n.idx+"_container img:not(."+d[2]+")").addClass(d[2]),u.update.call(null,o)}})},update:function(t,o){var n=t||f.call(this);return e(n).each(function(){var t=e(this);if(t.data(a)){var n=t.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container"),l=e("#mCSB_"+n.idx),s=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];if(!r.length)return;n.tweenRunning&&N(t),o&&n&&i.callbacks.onBeforeUpdate&&"function"==typeof i.callbacks.onBeforeUpdate&&i.callbacks.onBeforeUpdate.call(this),t.hasClass(d[3])&&t.removeClass(d[3]),t.hasClass(d[4])&&t.removeClass(d[4]),l.css("max-height","none"),l.height()!==t.height()&&l.css("max-height",t.height()),_.call(this),"y"===i.axis||i.advanced.autoExpandHorizontalScroll||r.css("width",x(r)),n.overflowed=y.call(this),M.call(this),i.autoDraggerLength&&S.call(this),b.call(this),T.call(this);var c=[Math.abs(r[0].offsetTop),Math.abs(r[0].offsetLeft)];"x"!==i.axis&&(n.overflowed[0]?s[0].height()>s[0].parent().height()?B.call(this):(V(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}),n.contentReset.y=null):(B.call(this),"y"===i.axis?k.call(this):"yx"===i.axis&&n.overflowed[1]&&V(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}))),"y"!==i.axis&&(n.overflowed[1]?s[1].width()>s[1].parent().width()?B.call(this):(V(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}),n.contentReset.x=null):(B.call(this),"x"===i.axis?k.call(this):"yx"===i.axis&&n.overflowed[0]&&V(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}))),o&&n&&(2===o&&i.callbacks.onImageLoad&&"function"==typeof i.callbacks.onImageLoad?i.callbacks.onImageLoad.call(this):3===o&&i.callbacks.onSelectorChange&&"function"==typeof i.callbacks.onSelectorChange?i.callbacks.onSelectorChange.call(this):i.callbacks.onUpdate&&"function"==typeof i.callbacks.onUpdate&&i.callbacks.onUpdate.call(this)),X.call(this)}})},scrollTo:function(t,o){if("undefined"!=typeof t&&null!=t){var n=f.call(this);return e(n).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l={trigger:"external",scrollInertia:r.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:!1,timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},s=e.extend(!0,{},l,o),c=q.call(this,t),d=s.scrollInertia>0&&s.scrollInertia<17?17:s.scrollInertia;c[0]=Y.call(this,c[0],"y"),c[1]=Y.call(this,c[1],"x"),s.moveDragger&&(c[0]*=i.scrollRatio.y,c[1]*=i.scrollRatio.x),s.dur=oe()?0:d,setTimeout(function(){null!==c[0]&&"undefined"!=typeof c[0]&&"x"!==r.axis&&i.overflowed[0]&&(s.dir="y",s.overwrite="all",V(n,c[0].toString(),s)),null!==c[1]&&"undefined"!=typeof c[1]&&"y"!==r.axis&&i.overflowed[1]&&(s.dir="x",s.overwrite="none",V(n,c[1].toString(),s))},s.timeout)}})}},stop:function(){var t=f.call(this);return e(t).each(function(){var t=e(this);t.data(a)&&N(t)})},disable:function(t){var o=f.call(this);return e(o).each(function(){var o=e(this);if(o.data(a)){{o.data(a)}X.call(this,"remove"),k.call(this),t&&B.call(this),M.call(this,!0),o.addClass(d[3])}})},destroy:function(){var t=f.call(this);return e(t).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx),s=e("#mCSB_"+i.idx+"_container"),c=e(".mCSB_"+i.idx+"_scrollbar");r.live&&m(r.liveSelector||e(t).selector),X.call(this,"remove"),k.call(this),B.call(this),n.removeData(a),K(this,"mcs"),c.remove(),s.find("img."+d[2]).removeClass(d[2]),l.replaceWith(s.contents()),n.removeClass(o+" _"+a+"_"+i.idx+" "+d[6]+" "+d[7]+" "+d[5]+" "+d[3]).addClass(d[4])}})}},f=function(){return"object"!=typeof e(this)||e(this).length<1?n:this},h=function(t){var o=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],a=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],n=["minimal","minimal-dark"],i=["minimal","minimal-dark"],r=["minimal","minimal-dark"];t.autoDraggerLength=e.inArray(t.theme,o)>-1?!1:t.autoDraggerLength,t.autoExpandScrollbar=e.inArray(t.theme,a)>-1?!1:t.autoExpandScrollbar,t.scrollButtons.enable=e.inArray(t.theme,n)>-1?!1:t.scrollButtons.enable,t.autoHideScrollbar=e.inArray(t.theme,i)>-1?!0:t.autoHideScrollbar,t.scrollbarPosition=e.inArray(t.theme,r)>-1?"outside":t.scrollbarPosition},m=function(e){l[e]&&(clearTimeout(l[e]),K(l,e))},p=function(e){return"yx"===e||"xy"===e||"auto"===e?"yx":"x"===e||"horizontal"===e?"x":"y"},g=function(e){return"stepped"===e||"pixels"===e||"step"===e||"click"===e?"stepped":"stepless"},v=function(){var t=e(this),n=t.data(a),i=n.opt,r=i.autoExpandScrollbar?" "+d[1]+"_expand":"",l=["<div id='mCSB_"+n.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_vertical"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+n.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_horizontal"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],s="yx"===i.axis?"mCSB_vertical_horizontal":"x"===i.axis?"mCSB_horizontal":"mCSB_vertical",c="yx"===i.axis?l[0]+l[1]:"x"===i.axis?l[1]:l[0],u="yx"===i.axis?"<div id='mCSB_"+n.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",f=i.autoHideScrollbar?" "+d[6]:"",h="x"!==i.axis&&"rtl"===n.langDir?" "+d[7]:"";i.setWidth&&t.css("width",i.setWidth),i.setHeight&&t.css("height",i.setHeight),i.setLeft="y"!==i.axis&&"rtl"===n.langDir?"989999px":i.setLeft,t.addClass(o+" _"+a+"_"+n.idx+f+h).wrapInner("<div id='mCSB_"+n.idx+"' class='mCustomScrollBox mCS-"+i.theme+" "+s+"'><div id='mCSB_"+n.idx+"_container' class='mCSB_container' style='position:relative; top:"+i.setTop+"; left:"+i.setLeft+";' dir="+n.langDir+" /></div>");var m=e("#mCSB_"+n.idx),p=e("#mCSB_"+n.idx+"_container");"y"===i.axis||i.advanced.autoExpandHorizontalScroll||p.css("width",x(p)),"outside"===i.scrollbarPosition?("static"===t.css("position")&&t.css("position","relative"),t.css("overflow","visible"),m.addClass("mCSB_outside").after(c)):(m.addClass("mCSB_inside").append(c),p.wrap(u)),w.call(this);var g=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];g[0].css("min-height",g[0].height()),g[1].css("min-width",g[1].width())},x=function(t){var o=[t[0].scrollWidth,Math.max.apply(Math,t.children().map(function(){return e(this).outerWidth(!0)}).get())],a=t.parent().width();return o[0]>a?o[0]:o[1]>a?o[1]:"100%"},_=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx+"_container");if(n.advanced.autoExpandHorizontalScroll&&"y"!==n.axis){i.css({width:"auto","min-width":0,"overflow-x":"scroll"});var r=Math.ceil(i[0].scrollWidth);3===n.advanced.autoExpandHorizontalScroll||2!==n.advanced.autoExpandHorizontalScroll&&r>i.parent().width()?i.css({width:r,"min-width":"100%","overflow-x":"inherit"}):i.css({"overflow-x":"inherit",position:"absolute"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(i[0].getBoundingClientRect().right+.4)-Math.floor(i[0].getBoundingClientRect().left),"min-width":"100%",position:"relative"}).unwrap()}},w=function(){var t=e(this),o=t.data(a),n=o.opt,i=e(".mCSB_"+o.idx+"_scrollbar:first"),r=ee(n.scrollButtons.tabindex)?"tabindex='"+n.scrollButtons.tabindex+"'":"",l=["<a href='#' class='"+d[13]+"' oncontextmenu='return false;' "+r+" />","<a href='#' class='"+d[14]+"' oncontextmenu='return false;' "+r+" />","<a href='#' class='"+d[15]+"' oncontextmenu='return false;' "+r+" />","<a href='#' class='"+d[16]+"' oncontextmenu='return false;' "+r+" />"],s=["x"===n.axis?l[2]:l[0],"x"===n.axis?l[3]:l[1],l[2],l[3]];n.scrollButtons.enable&&i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])},S=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[n.height()/i.outerHeight(!1),n.width()/i.outerWidth(!1)],c=[parseInt(r[0].css("min-height")),Math.round(l[0]*r[0].parent().height()),parseInt(r[1].css("min-width")),Math.round(l[1]*r[1].parent().width())],d=s&&c[1]<c[0]?c[0]:c[1],u=s&&c[3]<c[2]?c[2]:c[3];r[0].css({height:d,"max-height":r[0].parent().height()-10}).find(".mCSB_dragger_bar").css({"line-height":c[0]+"px"}),r[1].css({width:u,"max-width":r[1].parent().width()-10})},b=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[i.outerHeight(!1)-n.height(),i.outerWidth(!1)-n.width()],s=[l[0]/(r[0].parent().height()-r[0].height()),l[1]/(r[1].parent().width()-r[1].width())];o.scrollRatio={y:s[0],x:s[1]}},C=function(e,t,o){var a=o?d[0]+"_expanded":"",n=e.closest(".mCSB_scrollTools");"active"===t?(e.toggleClass(d[0]+" "+a),n.toggleClass(d[1]),e[0]._draggable=e[0]._draggable?0:1):e[0]._draggable||("hide"===t?(e.removeClass(d[0]),n.removeClass(d[1])):(e.addClass(d[0]),n.addClass(d[1])))},y=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=null==o.overflowed?i.height():i.outerHeight(!1),l=null==o.overflowed?i.width():i.outerWidth(!1),s=i[0].scrollHeight,c=i[0].scrollWidth;return s>r&&(r=s),c>l&&(l=c),[r>n.height(),l>n.width()]},B=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx),r=e("#mCSB_"+o.idx+"_container"),l=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")];if(N(t),("x"!==n.axis&&!o.overflowed[0]||"y"===n.axis&&o.overflowed[0])&&(l[0].add(r).css("top",0),V(t,"_resetY")),"y"!==n.axis&&!o.overflowed[1]||"x"===n.axis&&o.overflowed[1]){var s=dx=0;"rtl"===o.langDir&&(s=i.width()-r.outerWidth(!1),dx=Math.abs(s/o.scrollRatio.x)),r.css("left",s),l[1].css("left",dx),V(t,"_resetX")}},T=function(){function t(){r=setTimeout(function(){e.event.special.mousewheel?(clearTimeout(r),R.call(o[0])):t()},100)}var o=e(this),n=o.data(a),i=n.opt;if(!n.bindEvents){if(I.call(this),i.contentTouchScroll&&D.call(this),E.call(this),i.mouseWheel.enable){var r;t()}L.call(this),P.call(this),i.advanced.autoScrollOnFocus&&z.call(this),i.scrollButtons.enable&&H.call(this),i.keyboard.enable&&U.call(this),n.bindEvents=!0}},k=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=".mCSB_"+o.idx+"_scrollbar",l=e("#mCSB_"+o.idx+",#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,"+r+" ."+d[12]+",#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal,"+r+">a"),s=e("#mCSB_"+o.idx+"_container");n.advanced.releaseDraggableSelectors&&l.add(e(n.advanced.releaseDraggableSelectors)),n.advanced.extraDraggableSelectors&&l.add(e(n.advanced.extraDraggableSelectors)),o.bindEvents&&(e(document).add(e(!W()||top.document)).unbind("."+i),l.each(function(){e(this).unbind("."+i)}),clearTimeout(t[0]._focusTimeout),K(t[0],"_focusTimeout"),clearTimeout(o.sequential.step),K(o.sequential,"step"),clearTimeout(s[0].onCompleteTimeout),K(s[0],"onCompleteTimeout"),o.bindEvents=!1)},M=function(t){var o=e(this),n=o.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container_wrapper"),l=r.length?r:e("#mCSB_"+n.idx+"_container"),s=[e("#mCSB_"+n.idx+"_scrollbar_vertical"),e("#mCSB_"+n.idx+"_scrollbar_horizontal")],c=[s[0].find(".mCSB_dragger"),s[1].find(".mCSB_dragger")];"x"!==i.axis&&(n.overflowed[0]&&!t?(s[0].add(c[0]).add(s[0].children("a")).css("display","block"),l.removeClass(d[8]+" "+d[10])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[0].css("display","none"),l.removeClass(d[10])):(s[0].css("display","none"),l.addClass(d[10])),l.addClass(d[8]))),"y"!==i.axis&&(n.overflowed[1]&&!t?(s[1].add(c[1]).add(s[1].children("a")).css("display","block"),l.removeClass(d[9]+" "+d[11])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[1].css("display","none"),l.removeClass(d[11])):(s[1].css("display","none"),l.addClass(d[11])),l.addClass(d[9]))),n.overflowed[0]||n.overflowed[1]?o.removeClass(d[5]):o.addClass(d[5])},O=function(t){var o=t.type,a=t.target.ownerDocument!==document?[e(frameElement).offset().top,e(frameElement).offset().left]:null,n=W()&&t.target.ownerDocument!==top.document?[e(t.view.frameElement).offset().top,e(t.view.frameElement).offset().left]:[0,0];switch(o){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return a?[t.originalEvent.pageY-a[0]+n[0],t.originalEvent.pageX-a[1]+n[1],!1]:[t.originalEvent.pageY,t.originalEvent.pageX,!1];case"touchstart":case"touchmove":case"touchend":var i=t.originalEvent.touches[0]||t.originalEvent.changedTouches[0],r=t.originalEvent.touches.length||t.originalEvent.changedTouches.length;return t.target.ownerDocument!==document?[i.screenY,i.screenX,r>1]:[i.pageY,i.pageX,r>1];default:return a?[t.pageY-a[0]+n[0],t.pageX-a[1]+n[1],!1]:[t.pageY,t.pageX,!1]}},I=function(){function t(e){var t=m.find("iframe");if(t.length){var o=e?"auto":"none";t.css("pointer-events",o)}}function o(e,t,o,a){if(m[0].idleTimer=u.scrollInertia<233?250:0,n.attr("id")===h[1])var i="x",r=(n[0].offsetLeft-t+a)*d.scrollRatio.x;else var i="y",r=(n[0].offsetTop-e+o)*d.scrollRatio.y;V(l,r.toString(),{dir:i,drag:!0})}var n,i,r,l=e(this),d=l.data(a),u=d.opt,f=a+"_"+d.idx,h=["mCSB_"+d.idx+"_dragger_vertical","mCSB_"+d.idx+"_dragger_horizontal"],m=e("#mCSB_"+d.idx+"_container"),p=e("#"+h[0]+",#"+h[1]),g=u.advanced.releaseDraggableSelectors?p.add(e(u.advanced.releaseDraggableSelectors)):p,v=u.advanced.extraDraggableSelectors?e(!W()||top.document).add(e(u.advanced.extraDraggableSelectors)):e(!W()||top.document);p.bind("mousedown."+f+" touchstart."+f+" pointerdown."+f+" MSPointerDown."+f,function(o){if(o.stopImmediatePropagation(),o.preventDefault(),Z(o)){c=!0,s&&(document.onselectstart=function(){return!1}),t(!1),N(l),n=e(this);var a=n.offset(),d=O(o)[0]-a.top,f=O(o)[1]-a.left,h=n.height()+a.top,m=n.width()+a.left;h>d&&d>0&&m>f&&f>0&&(i=d,r=f),C(n,"active",u.autoExpandScrollbar)}}).bind("touchmove."+f,function(e){e.stopImmediatePropagation(),e.preventDefault();var t=n.offset(),a=O(e)[0]-t.top,l=O(e)[1]-t.left;o(i,r,a,l)}),e(document).add(v).bind("mousemove."+f+" pointermove."+f+" MSPointerMove."+f,function(e){if(n){var t=n.offset(),a=O(e)[0]-t.top,l=O(e)[1]-t.left;if(i===a&&r===l)return;o(i,r,a,l)}}).add(g).bind("mouseup."+f+" touchend."+f+" pointerup."+f+" MSPointerUp."+f,function(e){n&&(C(n,"active",u.autoExpandScrollbar),n=null),c=!1,s&&(document.onselectstart=null),t(!0)})},D=function(){function o(e){if(!$(e)||c||O(e)[2])return void(t=0);t=1,b=0,C=0,d=1,y.removeClass("mCS_touch_action");var o=I.offset();u=O(e)[0]-o.top,f=O(e)[1]-o.left,z=[O(e)[0],O(e)[1]]}function n(e){if($(e)&&!c&&!O(e)[2]&&(T.documentTouchScroll||e.preventDefault(),e.stopImmediatePropagation(),(!C||b)&&d)){g=G();var t=M.offset(),o=O(e)[0]-t.top,a=O(e)[1]-t.left,n="mcsLinearOut";if(E.push(o),R.push(a),z[2]=Math.abs(O(e)[0]-z[0]),z[3]=Math.abs(O(e)[1]-z[1]),B.overflowed[0])var i=D[0].parent().height()-D[0].height(),r=u-o>0&&o-u>-(i*B.scrollRatio.y)&&(2*z[3]<z[2]||"yx"===T.axis);if(B.overflowed[1])var l=D[1].parent().width()-D[1].width(),h=f-a>0&&a-f>-(l*B.scrollRatio.x)&&(2*z[2]<z[3]||"yx"===T.axis);r||h?(U||e.preventDefault(),b=1):(C=1,y.addClass("mCS_touch_action")),U&&e.preventDefault(),w="yx"===T.axis?[u-o,f-a]:"x"===T.axis?[null,f-a]:[u-o,null],I[0].idleTimer=250,B.overflowed[0]&&s(w[0],A,n,"y","all",!0),B.overflowed[1]&&s(w[1],A,n,"x",L,!0)}}function i(e){if(!$(e)||c||O(e)[2])return void(t=0);t=1,e.stopImmediatePropagation(),N(y),p=G();var o=M.offset();h=O(e)[0]-o.top,m=O(e)[1]-o.left,E=[],R=[]}function r(e){if($(e)&&!c&&!O(e)[2]){d=0,e.stopImmediatePropagation(),b=0,C=0,v=G();var t=M.offset(),o=O(e)[0]-t.top,a=O(e)[1]-t.left;if(!(v-g>30)){_=1e3/(v-p);var n="mcsEaseOut",i=2.5>_,r=i?[E[E.length-2],R[R.length-2]]:[0,0];x=i?[o-r[0],a-r[1]]:[o-h,a-m];var u=[Math.abs(x[0]),Math.abs(x[1])];_=i?[Math.abs(x[0]/4),Math.abs(x[1]/4)]:[_,_];var f=[Math.abs(I[0].offsetTop)-x[0]*l(u[0]/_[0],_[0]),Math.abs(I[0].offsetLeft)-x[1]*l(u[1]/_[1],_[1])];w="yx"===T.axis?[f[0],f[1]]:"x"===T.axis?[null,f[1]]:[f[0],null],S=[4*u[0]+T.scrollInertia,4*u[1]+T.scrollInertia];var y=parseInt(T.contentTouchScroll)||0;w[0]=u[0]>y?w[0]:0,w[1]=u[1]>y?w[1]:0,B.overflowed[0]&&s(w[0],S[0],n,"y",L,!1),B.overflowed[1]&&s(w[1],S[1],n,"x",L,!1)}}}function l(e,t){var o=[1.5*t,2*t,t/1.5,t/2];return e>90?t>4?o[0]:o[3]:e>60?t>3?o[3]:o[2]:e>30?t>8?o[1]:t>6?o[0]:t>4?t:o[2]:t>8?t:o[3]}function s(e,t,o,a,n,i){e&&V(y,e.toString(),{dur:t,scrollEasing:o,dir:a,overwrite:n,drag:i})}var d,u,f,h,m,p,g,v,x,_,w,S,b,C,y=e(this),B=y.data(a),T=B.opt,k=a+"_"+B.idx,M=e("#mCSB_"+B.idx),I=e("#mCSB_"+B.idx+"_container"),D=[e("#mCSB_"+B.idx+"_dragger_vertical"),e("#mCSB_"+B.idx+"_dragger_horizontal")],E=[],R=[],A=0,L="yx"===T.axis?"none":"all",z=[],P=I.find("iframe"),H=["touchstart."+k+" pointerdown."+k+" MSPointerDown."+k,"touchmove."+k+" pointermove."+k+" MSPointerMove."+k,"touchend."+k+" pointerup."+k+" MSPointerUp."+k],U=void 0!==document.body.style.touchAction;I.bind(H[0],function(e){o(e)}).bind(H[1],function(e){n(e)}),M.bind(H[0],function(e){i(e)}).bind(H[2],function(e){r(e)}),P.length&&P.each(function(){e(this).load(function(){W(this)&&e(this.contentDocument||this.contentWindow.document).bind(H[0],function(e){o(e),i(e)}).bind(H[1],function(e){n(e)}).bind(H[2],function(e){r(e)})})})},E=function(){function o(){return window.getSelection?window.getSelection().toString():document.selection&&"Control"!=document.selection.type?document.selection.createRange().text:0}function n(e,t,o){d.type=o&&i?"stepped":"stepless",d.scrollAmount=10,F(r,e,t,"mcsLinearOut",o?60:null)}var i,r=e(this),l=r.data(a),s=l.opt,d=l.sequential,u=a+"_"+l.idx,f=e("#mCSB_"+l.idx+"_container"),h=f.parent();f.bind("mousedown."+u,function(e){t||i||(i=1,c=!0)}).add(document).bind("mousemove."+u,function(e){if(!t&&i&&o()){var a=f.offset(),r=O(e)[0]-a.top+f[0].offsetTop,c=O(e)[1]-a.left+f[0].offsetLeft;r>0&&r<h.height()&&c>0&&c<h.width()?d.step&&n("off",null,"stepped"):("x"!==s.axis&&l.overflowed[0]&&(0>r?n("on",38):r>h.height()&&n("on",40)),"y"!==s.axis&&l.overflowed[1]&&(0>c?n("on",37):c>h.width()&&n("on",39)))}}).bind("mouseup."+u+" dragend."+u,function(e){t||(i&&(i=0,n("off",null)),c=!1)})},R=function(){function t(t,a){if(N(o),!A(o,t.target)){var r="auto"!==i.mouseWheel.deltaFactor?parseInt(i.mouseWheel.deltaFactor):s&&t.deltaFactor<100?100:t.deltaFactor||100,d=i.scrollInertia;if("x"===i.axis||"x"===i.mouseWheel.axis)var u="x",f=[Math.round(r*n.scrollRatio.x),parseInt(i.mouseWheel.scrollAmount)],h="auto"!==i.mouseWheel.scrollAmount?f[1]:f[0]>=l.width()?.9*l.width():f[0],m=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetLeft),p=c[1][0].offsetLeft,g=c[1].parent().width()-c[1].width(),v=t.deltaX||t.deltaY||a;else var u="y",f=[Math.round(r*n.scrollRatio.y),parseInt(i.mouseWheel.scrollAmount)],h="auto"!==i.mouseWheel.scrollAmount?f[1]:f[0]>=l.height()?.9*l.height():f[0],m=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetTop),p=c[0][0].offsetTop,g=c[0].parent().height()-c[0].height(),v=t.deltaY||a;"y"===u&&!n.overflowed[0]||"x"===u&&!n.overflowed[1]||((i.mouseWheel.invert||t.webkitDirectionInvertedFromDevice)&&(v=-v),i.mouseWheel.normalizeDelta&&(v=0>v?-1:1),(v>0&&0!==p||0>v&&p!==g||i.mouseWheel.preventDefault)&&(t.stopImmediatePropagation(),t.preventDefault()),t.deltaFactor<2&&!i.mouseWheel.normalizeDelta&&(h=t.deltaFactor,d=17),V(o,(m-v*h).toString(),{dir:u,dur:d}))}}if(e(this).data(a)){var o=e(this),n=o.data(a),i=n.opt,r=a+"_"+n.idx,l=e("#mCSB_"+n.idx),c=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")],d=e("#mCSB_"+n.idx+"_container").find("iframe");d.length&&d.each(function(){e(this).load(function(){W(this)&&e(this.contentDocument||this.contentWindow.document).bind("mousewheel."+r,function(e,o){t(e,o)})})}),l.bind("mousewheel."+r,function(e,o){t(e,o)})}},W=function(e){var t=null;if(e){try{var o=e.contentDocument||e.contentWindow.document;t=o.body.innerHTML}catch(a){}return null!==t}try{var o=top.document;t=o.body.innerHTML}catch(a){}return null!==t},A=function(t,o){var n=o.nodeName.toLowerCase(),i=t.data(a).opt.mouseWheel.disableOver,r=["select","textarea"];return e.inArray(n,i)>-1&&!(e.inArray(n,r)>-1&&!e(o).is(":focus"))},L=function(){var t,o=e(this),n=o.data(a),i=a+"_"+n.idx,r=e("#mCSB_"+n.idx+"_container"),l=r.parent(),s=e(".mCSB_"+n.idx+"_scrollbar ."+d[12]);s.bind("mousedown."+i+" touchstart."+i+" pointerdown."+i+" MSPointerDown."+i,function(o){c=!0,e(o.target).hasClass("mCSB_dragger")||(t=1)}).bind("touchend."+i+" pointerup."+i+" MSPointerUp."+i,function(e){c=!1}).bind("click."+i,function(a){if(t&&(t=0,e(a.target).hasClass(d[12])||e(a.target).hasClass("mCSB_draggerRail"))){N(o);var i=e(this),s=i.find(".mCSB_dragger");if(i.parent(".mCSB_scrollTools_horizontal").length>0){if(!n.overflowed[1])return;var c="x",u=a.pageX>s.offset().left?-1:1,f=Math.abs(r[0].offsetLeft)-.9*u*l.width()}else{if(!n.overflowed[0])return;var c="y",u=a.pageY>s.offset().top?-1:1,f=Math.abs(r[0].offsetTop)-.9*u*l.height()}V(o,f.toString(),{dir:c,scrollEasing:"mcsEaseInOut"})}})},z=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=e("#mCSB_"+o.idx+"_container"),l=r.parent();r.bind("focusin."+i,function(o){var a=e(document.activeElement),i=r.find(".mCustomScrollBox").length,s=0;a.is(n.advanced.autoScrollOnFocus)&&(N(t),clearTimeout(t[0]._focusTimeout),t[0]._focusTimer=i?(s+17)*i:0,t[0]._focusTimeout=setTimeout(function(){var e=[te(a)[0],te(a)[1]],o=[r[0].offsetTop,r[0].offsetLeft],i=[o[0]+e[0]>=0&&o[0]+e[0]<l.height()-a.outerHeight(!1),o[1]+e[1]>=0&&o[0]+e[1]<l.width()-a.outerWidth(!1)],c="yx"!==n.axis||i[0]||i[1]?"all":"none";"x"===n.axis||i[0]||V(t,e[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:c,dur:s}),"y"===n.axis||i[1]||V(t,e[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:c,dur:s})},t[0]._focusTimer))})},P=function(){var t=e(this),o=t.data(a),n=a+"_"+o.idx,i=e("#mCSB_"+o.idx+"_container").parent();i.bind("scroll."+n,function(t){(0!==i.scrollTop()||0!==i.scrollLeft())&&e(".mCSB_"+o.idx+"_scrollbar").css("visibility","hidden")})},H=function(){var t=e(this),o=t.data(a),n=o.opt,i=o.sequential,r=a+"_"+o.idx,l=".mCSB_"+o.idx+"_scrollbar",s=e(l+">a");s.bind("mousedown."+r+" touchstart."+r+" pointerdown."+r+" MSPointerDown."+r+" mouseup."+r+" touchend."+r+" pointerup."+r+" MSPointerUp."+r+" mouseout."+r+" pointerout."+r+" MSPointerOut."+r+" click."+r,function(a){function r(e,o){i.scrollAmount=n.scrollButtons.scrollAmount,F(t,e,o)}if(a.preventDefault(),Z(a)){var l=e(this).attr("class");switch(i.type=n.scrollButtons.scrollType,a.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if("stepped"===i.type)return;c=!0,o.tweenRunning=!1,r("on",l);break;case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if("stepped"===i.type)return;c=!1,i.dir&&r("off",l);break;case"click":if("stepped"!==i.type||o.tweenRunning)return;r("on",l)}}})},U=function(){function t(t){function a(e,t){r.type=i.keyboard.scrollType,r.scrollAmount=i.keyboard.scrollAmount,"stepped"===r.type&&n.tweenRunning||F(o,e,t)}switch(t.type){case"blur":n.tweenRunning&&r.dir&&a("off",null);break;case"keydown":case"keyup":var l=t.keyCode?t.keyCode:t.which,s="on";if("x"!==i.axis&&(38===l||40===l)||"y"!==i.axis&&(37===l||39===l)){if((38===l||40===l)&&!n.overflowed[0]||(37===l||39===l)&&!n.overflowed[1])return;"keyup"===t.type&&(s="off"),e(document.activeElement).is(u)||(t.preventDefault(),t.stopImmediatePropagation(),a(s,l))}else if(33===l||34===l){if((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type){N(o);var f=34===l?-1:1;if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=Math.abs(c[0].offsetLeft)-.9*f*d.width();else var h="y",m=Math.abs(c[0].offsetTop)-.9*f*d.height();V(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}else if((35===l||36===l)&&!e(document.activeElement).is(u)&&((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type)){if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=35===l?Math.abs(d.width()-c.outerWidth(!1)):0;else var h="y",m=35===l?Math.abs(d.height()-c.outerHeight(!1)):0;V(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}}var o=e(this),n=o.data(a),i=n.opt,r=n.sequential,l=a+"_"+n.idx,s=e("#mCSB_"+n.idx),c=e("#mCSB_"+n.idx+"_container"),d=c.parent(),u="input,textarea,select,datalist,keygen,[contenteditable='true']",f=c.find("iframe"),h=["blur."+l+" keydown."+l+" keyup."+l];f.length&&f.each(function(){e(this).load(function(){W(this)&&e(this.contentDocument||this.contentWindow.document).bind(h[0],function(e){t(e)})})}),s.attr("tabindex","0").bind(h[0],function(e){t(e)})},F=function(t,o,n,i,r){function l(e){u.snapAmount&&(f.scrollAmount=u.snapAmount instanceof Array?"x"===f.dir[0]?u.snapAmount[1]:u.snapAmount[0]:u.snapAmount);var o="stepped"!==f.type,a=r?r:e?o?p/1.5:g:1e3/60,n=e?o?7.5:40:2.5,s=[Math.abs(h[0].offsetTop),Math.abs(h[0].offsetLeft)],d=[c.scrollRatio.y>10?10:c.scrollRatio.y,c.scrollRatio.x>10?10:c.scrollRatio.x],m="x"===f.dir[0]?s[1]+f.dir[1]*d[1]*n:s[0]+f.dir[1]*d[0]*n,v="x"===f.dir[0]?s[1]+f.dir[1]*parseInt(f.scrollAmount):s[0]+f.dir[1]*parseInt(f.scrollAmount),x="auto"!==f.scrollAmount?v:m,_=i?i:e?o?"mcsLinearOut":"mcsEaseInOut":"mcsLinear",w=e?!0:!1;return e&&17>a&&(x="x"===f.dir[0]?s[1]:s[0]),V(t,x.toString(),{dir:f.dir[0],scrollEasing:_,dur:a,onComplete:w}),e?void(f.dir=!1):(clearTimeout(f.step),void(f.step=setTimeout(function(){l()},a)))}function s(){clearTimeout(f.step),K(f,"step"),N(t)}var c=t.data(a),u=c.opt,f=c.sequential,h=e("#mCSB_"+c.idx+"_container"),m="stepped"===f.type?!0:!1,p=u.scrollInertia<26?26:u.scrollInertia,g=u.scrollInertia<1?17:u.scrollInertia;switch(o){case"on":if(f.dir=[n===d[16]||n===d[15]||39===n||37===n?"x":"y",n===d[13]||n===d[15]||38===n||37===n?-1:1],N(t),ee(n)&&"stepped"===f.type)return;l(m);break;case"off":s(),(m||c.tweenRunning&&f.dir)&&l(!0)}},q=function(t){var o=e(this).data(a).opt,n=[];return"function"==typeof t&&(t=t()),t instanceof Array?n=t.length>1?[t[0],t[1]]:"x"===o.axis?[null,t[0]]:[t[0],null]:(n[0]=t.y?t.y:t.x||"x"===o.axis?null:t,n[1]=t.x?t.x:t.y||"y"===o.axis?null:t),"function"==typeof n[0]&&(n[0]=n[0]()),"function"==typeof n[1]&&(n[1]=n[1]()),n},Y=function(t,o){if(null!=t&&"undefined"!=typeof t){var n=e(this),i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx+"_container"),s=l.parent(),c=typeof t;o||(o="x"===r.axis?"x":"y");var d="x"===o?l.outerWidth(!1):l.outerHeight(!1),f="x"===o?l[0].offsetLeft:l[0].offsetTop,h="x"===o?"left":"top";switch(c){case"function":return t();case"object":var m=t.jquery?t:e(t);if(!m.length)return;return"x"===o?te(m)[1]:te(m)[0];case"string":case"number":if(ee(t))return Math.abs(t);if(-1!==t.indexOf("%"))return Math.abs(d*parseInt(t)/100);if(-1!==t.indexOf("-="))return Math.abs(f-parseInt(t.split("-=")[1]));if(-1!==t.indexOf("+=")){var p=f+parseInt(t.split("+=")[1]);return p>=0?0:Math.abs(p)}if(-1!==t.indexOf("px")&&ee(t.split("px")[0]))return Math.abs(t.split("px")[0]);if("top"===t||"left"===t)return 0;if("bottom"===t)return Math.abs(s.height()-l.outerHeight(!1));if("right"===t)return Math.abs(s.width()-l.outerWidth(!1));if("first"===t||"last"===t){var m=l.find(":"+t);return"x"===o?te(m)[1]:te(m)[0]}return e(t).length?"x"===o?te(e(t))[1]:te(e(t))[0]:(l.css(h,t),void u.update.call(null,n[0]))}}},X=function(t){function o(){return clearTimeout(f[0].autoUpdate),0===l.parents("html").length?void(l=null):void(f[0].autoUpdate=setTimeout(function(){return c.advanced.updateOnSelectorChange&&(s.poll.change.n=i(),s.poll.change.n!==s.poll.change.o)?(s.poll.change.o=s.poll.change.n,void r(3)):c.advanced.updateOnContentResize&&(s.poll.size.n=l[0].scrollHeight+l[0].scrollWidth+f[0].offsetHeight+l[0].offsetHeight+l[0].offsetWidth,s.poll.size.n!==s.poll.size.o)?(s.poll.size.o=s.poll.size.n,void r(1)):!c.advanced.updateOnImageLoad||"auto"===c.advanced.updateOnImageLoad&&"y"===c.axis||(s.poll.img.n=f.find("img").length,s.poll.img.n===s.poll.img.o)?void((c.advanced.updateOnSelectorChange||c.advanced.updateOnContentResize||c.advanced.updateOnImageLoad)&&o()):(s.poll.img.o=s.poll.img.n,void f.find("img").each(function(){n(this)}))},c.advanced.autoUpdateTimeout))}function n(t){function o(e,t){return function(){return t.apply(e,arguments)}}function a(){this.onload=null,e(t).addClass(d[2]),r(2)}if(e(t).hasClass(d[2]))return void r();var n=new Image;n.onload=o(n,a),n.src=t.src}function i(){c.advanced.updateOnSelectorChange===!0&&(c.advanced.updateOnSelectorChange="*");var e=0,t=f.find(c.advanced.updateOnSelectorChange);

return c.advanced.updateOnSelectorChange&&t.length>0&&t.each(function(){e+=this.offsetHeight+this.offsetWidth}),e}function r(e){clearTimeout(f[0].autoUpdate),u.update.call(null,l[0],e)}var l=e(this),s=l.data(a),c=s.opt,f=e("#mCSB_"+s.idx+"_container");return t?(clearTimeout(f[0].autoUpdate),void K(f[0],"autoUpdate")):void o()},j=function(e,t,o){return Math.round(e/t)*t-o},N=function(t){var o=t.data(a),n=e("#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal");n.each(function(){J.call(this)})},V=function(t,o,n){function i(e){return s&&c.callbacks[e]&&"function"==typeof c.callbacks[e]}function r(){return[c.callbacks.alwaysTriggerOffsets||w>=S[0]+y,c.callbacks.alwaysTriggerOffsets||-B>=w]}function l(){var e=[h[0].offsetTop,h[0].offsetLeft],o=[x[0].offsetTop,x[0].offsetLeft],a=[h.outerHeight(!1),h.outerWidth(!1)],i=[f.height(),f.width()];t[0].mcs={content:h,top:e[0],left:e[1],draggerTop:o[0],draggerLeft:o[1],topPct:Math.round(100*Math.abs(e[0])/(Math.abs(a[0])-i[0])),leftPct:Math.round(100*Math.abs(e[1])/(Math.abs(a[1])-i[1])),direction:n.dir}}var s=t.data(a),c=s.opt,d={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:c.scrollInertia,overwrite:"all",callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},n=e.extend(d,n),u=[n.dur,n.drag?0:n.dur],f=e("#mCSB_"+s.idx),h=e("#mCSB_"+s.idx+"_container"),m=h.parent(),p=c.callbacks.onTotalScrollOffset?q.call(t,c.callbacks.onTotalScrollOffset):[0,0],g=c.callbacks.onTotalScrollBackOffset?q.call(t,c.callbacks.onTotalScrollBackOffset):[0,0];if(s.trigger=n.trigger,(0!==m.scrollTop()||0!==m.scrollLeft())&&(e(".mCSB_"+s.idx+"_scrollbar").css("visibility","visible"),m.scrollTop(0).scrollLeft(0)),"_resetY"!==o||s.contentReset.y||(i("onOverflowYNone")&&c.callbacks.onOverflowYNone.call(t[0]),s.contentReset.y=1),"_resetX"!==o||s.contentReset.x||(i("onOverflowXNone")&&c.callbacks.onOverflowXNone.call(t[0]),s.contentReset.x=1),"_resetY"!==o&&"_resetX"!==o){if(!s.contentReset.y&&t[0].mcs||!s.overflowed[0]||(i("onOverflowY")&&c.callbacks.onOverflowY.call(t[0]),s.contentReset.x=null),!s.contentReset.x&&t[0].mcs||!s.overflowed[1]||(i("onOverflowX")&&c.callbacks.onOverflowX.call(t[0]),s.contentReset.x=null),c.snapAmount){var v=c.snapAmount instanceof Array?"x"===n.dir?c.snapAmount[1]:c.snapAmount[0]:c.snapAmount;o=j(o,v,c.snapOffset)}switch(n.dir){case"x":var x=e("#mCSB_"+s.idx+"_dragger_horizontal"),_="left",w=h[0].offsetLeft,S=[f.width()-h.outerWidth(!1),x.parent().width()-x.width()],b=[o,0===o?0:o/s.scrollRatio.x],y=p[1],B=g[1],T=y>0?y/s.scrollRatio.x:0,k=B>0?B/s.scrollRatio.x:0;break;case"y":var x=e("#mCSB_"+s.idx+"_dragger_vertical"),_="top",w=h[0].offsetTop,S=[f.height()-h.outerHeight(!1),x.parent().height()-x.height()],b=[o,0===o?0:o/s.scrollRatio.y],y=p[0],B=g[0],T=y>0?y/s.scrollRatio.y:0,k=B>0?B/s.scrollRatio.y:0}b[1]<0||0===b[0]&&0===b[1]?b=[0,0]:b[1]>=S[1]?b=[S[0],S[1]]:b[0]=-b[0],t[0].mcs||(l(),i("onInit")&&c.callbacks.onInit.call(t[0])),clearTimeout(h[0].onCompleteTimeout),Q(x[0],_,Math.round(b[1]),u[1],n.scrollEasing),(s.tweenRunning||!(0===w&&b[0]>=0||w===S[0]&&b[0]<=S[0]))&&Q(h[0],_,Math.round(b[0]),u[0],n.scrollEasing,n.overwrite,{onStart:function(){n.callbacks&&n.onStart&&!s.tweenRunning&&(i("onScrollStart")&&(l(),c.callbacks.onScrollStart.call(t[0])),s.tweenRunning=!0,C(x),s.cbOffsets=r())},onUpdate:function(){n.callbacks&&n.onUpdate&&i("whileScrolling")&&(l(),c.callbacks.whileScrolling.call(t[0]))},onComplete:function(){if(n.callbacks&&n.onComplete){"yx"===c.axis&&clearTimeout(h[0].onCompleteTimeout);var e=h[0].idleTimer||0;h[0].onCompleteTimeout=setTimeout(function(){i("onScroll")&&(l(),c.callbacks.onScroll.call(t[0])),i("onTotalScroll")&&b[1]>=S[1]-T&&s.cbOffsets[0]&&(l(),c.callbacks.onTotalScroll.call(t[0])),i("onTotalScrollBack")&&b[1]<=k&&s.cbOffsets[1]&&(l(),c.callbacks.onTotalScrollBack.call(t[0])),s.tweenRunning=!1,h[0].idleTimer=0,C(x,"hide")},e)}}})}},Q=function(e,t,o,a,n,i,r){function l(){S.stop||(x||m.call(),x=G()-v,s(),x>=S.time&&(S.time=x>S.time?x+f-(x-S.time):x+f-1,S.time<x+1&&(S.time=x+1)),S.time<a?S.id=h(l):g.call())}function s(){a>0?(S.currVal=u(S.time,_,b,a,n),w[t]=Math.round(S.currVal)+"px"):w[t]=o+"px",p.call()}function c(){f=1e3/60,S.time=x+f,h=window.requestAnimationFrame?window.requestAnimationFrame:function(e){return s(),setTimeout(e,.01)},S.id=h(l)}function d(){null!=S.id&&(window.requestAnimationFrame?window.cancelAnimationFrame(S.id):clearTimeout(S.id),S.id=null)}function u(e,t,o,a,n){switch(n){case"linear":case"mcsLinear":return o*e/a+t;case"mcsLinearOut":return e/=a,e--,o*Math.sqrt(1-e*e)+t;case"easeInOutSmooth":return e/=a/2,1>e?o/2*e*e+t:(e--,-o/2*(e*(e-2)-1)+t);case"easeInOutStrong":return e/=a/2,1>e?o/2*Math.pow(2,10*(e-1))+t:(e--,o/2*(-Math.pow(2,-10*e)+2)+t);case"easeInOut":case"mcsEaseInOut":return e/=a/2,1>e?o/2*e*e*e+t:(e-=2,o/2*(e*e*e+2)+t);case"easeOutSmooth":return e/=a,e--,-o*(e*e*e*e-1)+t;case"easeOutStrong":return o*(-Math.pow(2,-10*e/a)+1)+t;case"easeOut":case"mcsEaseOut":default:var i=(e/=a)*e,r=i*e;return t+o*(.499999999999997*r*i+-2.5*i*i+5.5*r+-6.5*i+4*e)}}e._mTween||(e._mTween={top:{},left:{}});var f,h,r=r||{},m=r.onStart||function(){},p=r.onUpdate||function(){},g=r.onComplete||function(){},v=G(),x=0,_=e.offsetTop,w=e.style,S=e._mTween[t];"left"===t&&(_=e.offsetLeft);var b=o-_;S.stop=0,"none"!==i&&d(),c()},G=function(){return window.performance&&window.performance.now?window.performance.now():window.performance&&window.performance.webkitNow?window.performance.webkitNow():Date.now?Date.now():(new Date).getTime()},J=function(){var e=this;e._mTween||(e._mTween={top:{},left:{}});for(var t=["top","left"],o=0;o<t.length;o++){var a=t[o];e._mTween[a].id&&(window.requestAnimationFrame?window.cancelAnimationFrame(e._mTween[a].id):clearTimeout(e._mTween[a].id),e._mTween[a].id=null,e._mTween[a].stop=1)}},K=function(e,t){try{delete e[t]}catch(o){e[t]=null}},Z=function(e){return!(e.which&&1!==e.which)},$=function(e){var t=e.originalEvent.pointerType;return!(t&&"touch"!==t&&2!==t)},ee=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},te=function(e){var t=e.parents(".mCSB_container");return[e.offset().top-t.offset().top,e.offset().left-t.offset().left]},oe=function(){function e(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}var t=e();return t?document[t]:!1};e.fn[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o].defaults=i,window[o]=!0,e(window).load(function(){e(n)[o](),e.extend(e.expr[":"],{mcsInView:e.expr[":"].mcsInView||function(t){var o,a,n=e(t),i=n.parents(".mCSB_container");if(i.length)return o=i.parent(),a=[i[0].offsetTop,i[0].offsetLeft],a[0]+te(n)[0]>=0&&a[0]+te(n)[0]<o.height()-n.outerHeight(!1)&&a[1]+te(n)[1]>=0&&a[1]+te(n)[1]<o.width()-n.outerWidth(!1)},mcsOverflow:e.expr[":"].mcsOverflow||function(t){var o=e(t).data(a);if(o)return o.overflowed[0]||o.overflowed[1]}})})})});
/*!
 * ui-select
 * http://github.com/angular-ui/ui-select
 * Version: 0.16.0 - 2016-03-23T20:51:56.609Z
 * License: MIT
 */
!function(){"use strict";var e={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,COMMAND:91,MAP:{91:"COMMAND",8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",17:"CTRL",18:"ALT",19:"PAUSEBREAK",20:"CAPSLOCK",27:"ESC",32:"SPACE",33:"PAGE_UP",34:"PAGE_DOWN",35:"END",36:"HOME",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN",43:"+",44:"PRINTSCREEN",45:"INSERT",46:"DELETE",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",61:"=",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NUMLOCK",145:"SCROLLLOCK",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},isControl:function(t){var s=t.which;switch(s){case e.COMMAND:case e.SHIFT:case e.CTRL:case e.ALT:return!0}return t.metaKey?!0:!1},isFunctionKey:function(e){return e=e.which?e.which:e,e>=112&&123>=e},isVerticalMovement:function(t){return~[e.UP,e.DOWN].indexOf(t)},isHorizontalMovement:function(t){return~[e.LEFT,e.RIGHT,e.BACKSPACE,e.DELETE].indexOf(t)},toSeparator:function(t){var s={ENTER:"\n",TAB:"	",SPACE:" "}[t];return s?s:e[t]?void 0:t}};void 0===angular.element.prototype.querySelectorAll&&(angular.element.prototype.querySelectorAll=function(e){return angular.element(this[0].querySelectorAll(e))}),void 0===angular.element.prototype.closest&&(angular.element.prototype.closest=function(e){for(var t=this[0],s=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector;t;){if(s.bind(t)(e))return t;t=t.parentElement}return!1});var t=0,s=angular.module("ui.select",[]).constant("uiSelectConfig",{theme:"bootstrap",searchEnabled:!0,sortable:!1,placeholder:"",refreshDelay:1e3,closeOnSelect:!0,skipFocusser:!1,dropdownPosition:"auto",generateId:function(){return t++},appendToBody:!1}).service("uiSelectMinErr",function(){var e=angular.$$minErr("ui.select");return function(){var t=e.apply(this,arguments),s=t.message.replace(new RegExp("\nhttp://errors.angularjs.org/.*"),"");return new Error(s)}}).directive("uisTranscludeAppend",function(){return{link:function(e,t,s,i,c){c(e,function(e){t.append(e)})}}}).filter("highlight",function(){function e(e){return(""+e).replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}return function(t,s){return s&&t?(""+t).replace(new RegExp(e(s),"gi"),'<span class="ui-select-highlight">$&</span>'):t}}).factory("uisOffset",["$document","$window",function(e,t){return function(s){var i=s[0].getBoundingClientRect();return{width:i.width||s.prop("offsetWidth"),height:i.height||s.prop("offsetHeight"),top:i.top+(t.pageYOffset||e[0].documentElement.scrollTop),left:i.left+(t.pageXOffset||e[0].documentElement.scrollLeft)}}}]);s.directive("uiSelectChoices",["uiSelectConfig","uisRepeatParser","uiSelectMinErr","$compile","$window",function(e,t,s,i,c){return{restrict:"EA",require:"^uiSelect",replace:!0,transclude:!0,templateUrl:function(t){t.addClass("ui-select-choices");var s=t.parent().attr("theme")||e.theme;return s+"/choices.tpl.html"},compile:function(l,n){if(!n.repeat)throw s("repeat","Expected 'repeat' expression.");return function(l,n,a,r,o){var u=a.groupBy,d=a.groupFilter;if(r.parseRepeatAttr(a.repeat,u,d),r.disableChoiceExpression=a.uiDisableChoice,r.onHighlightCallback=a.onHighlight,r.dropdownPosition=a.position?a.position.toLowerCase():e.dropdownPosition,u){var p=n.querySelectorAll(".ui-select-choices-group");if(1!==p.length)throw s("rows","Expected 1 .ui-select-choices-group but got '{0}'.",p.length);p.attr("ng-repeat",t.getGroupNgRepeatExpression())}var g=n.querySelectorAll(".ui-select-choices-row");if(1!==g.length)throw s("rows","Expected 1 .ui-select-choices-row but got '{0}'.",g.length);g.attr("ng-repeat",r.parserResult.repeatExpression(u)).attr("ng-if","$select.open"),c.document.addEventListener&&g.attr("ng-mouseenter","$select.setActiveItem("+r.parserResult.itemName+")").attr("ng-click","$select.select("+r.parserResult.itemName+",$select.skipFocusser,$event)");var h=n.querySelectorAll(".ui-select-choices-row-inner");if(1!==h.length)throw s("rows","Expected 1 .ui-select-choices-row-inner but got '{0}'.",h.length);h.attr("uis-transclude-append",""),c.document.addEventListener||h.attr("ng-mouseenter","$select.setActiveItem("+r.parserResult.itemName+")").attr("ng-click","$select.select("+r.parserResult.itemName+",$select.skipFocusser,$event)"),i(n,o)(l),l.$watch("$select.search",function(e){e&&!r.open&&r.multiple&&r.activate(!1,!0),r.activeIndex=r.tagging.isActivated?-1:0,!a.minimumInputLength||r.search.length>=a.minimumInputLength?r.refresh(a.refresh):r.items=[]}),a.$observe("refreshDelay",function(){var t=l.$eval(a.refreshDelay);r.refreshDelay=void 0!==t?t:e.refreshDelay})}}}}]),s.controller("uiSelectCtrl",["$scope","$element","$timeout","$filter","uisRepeatParser","uiSelectMinErr","uiSelectConfig","$parse","$injector","$window",function(t,s,i,c,l,n,a,r,o,u){function d(e,t,s){if(e.findIndex)return e.findIndex(t,s);for(var i,c=Object(e),l=c.length>>>0,n=0;l>n;n++)if(i=c[n],t.call(s,i,n,c))return n;return-1}function p(){(v.resetSearchInput||void 0===v.resetSearchInput&&a.resetSearchInput)&&(v.search=m,v.selected&&v.items.length&&!v.multiple&&(v.activeIndex=d(v.items,function(e){return angular.equals(this,e)},v.selected)))}function g(e,t){var s,i,c=[];for(s=0;s<t.length;s++)for(i=0;i<e.length;i++)e[i].name==[t[s]]&&c.push(e[i]);return c}function h(t){var s=!0;switch(t){case e.DOWN:!v.open&&v.multiple?v.activate(!1,!0):v.activeIndex<v.items.length-1&&v.activeIndex++;break;case e.UP:!v.open&&v.multiple?v.activate(!1,!0):(v.activeIndex>0||0===v.search.length&&v.tagging.isActivated&&v.activeIndex>-1)&&v.activeIndex--;break;case e.TAB:(!v.multiple||v.open)&&v.select(v.items[v.activeIndex],!0);break;case e.ENTER:v.open&&(v.tagging.isActivated||v.activeIndex>=0)?v.select(v.items[v.activeIndex],v.skipFocusser):v.activate(!1,!0);break;case e.ESC:v.close();break;default:s=!1}return s}function f(){var e=s.querySelectorAll(".ui-select-choices-content"),t=e.querySelectorAll(".ui-select-choices-row");if(t.length<1)throw n("choices","Expected multiple .ui-select-choices-row but got '{0}'.",t.length);if(!(v.activeIndex<0)){var i=t[v.activeIndex],c=i.offsetTop+i.clientHeight-e[0].scrollTop,l=e[0].offsetHeight;c>l?e[0].scrollTop+=c-l:c<i.clientHeight&&(v.isGrouped&&0===v.activeIndex?e[0].scrollTop=0:e[0].scrollTop-=i.clientHeight-c)}}var v=this,m="";if(v.placeholder=a.placeholder,v.searchEnabled=a.searchEnabled,v.sortable=a.sortable,v.refreshDelay=a.refreshDelay,v.paste=a.paste,v.removeSelected=!1,v.closeOnSelect=!0,v.skipFocusser=!1,v.search=m,v.activeIndex=0,v.items=[],v.open=!1,v.focus=!1,v.disabled=!1,v.selected=void 0,v.dropdownPosition="auto",v.focusser=void 0,v.resetSearchInput=!0,v.multiple=void 0,v.disableChoiceExpression=void 0,v.tagging={isActivated:!1,fct:void 0},v.taggingTokens={isActivated:!1,tokens:void 0},v.lockChoiceExpression=void 0,v.clickTriggeredSelect=!1,v.$filter=c,v.$animate=function(){try{return o.get("$animate")}catch(e){return null}}(),v.searchInput=s.querySelectorAll("input.ui-select-search"),1!==v.searchInput.length)throw n("searchInput","Expected 1 input.ui-select-search but got '{0}'.",v.searchInput.length);v.isEmpty=function(){return angular.isUndefined(v.selected)||null===v.selected||""===v.selected||v.multiple&&0===v.selected.length},v.activate=function(e,c){if(!v.disabled&&!v.open){c||p(),t.$broadcast("uis:activate"),v.open=!0,v.activeIndex=v.activeIndex>=v.items.length?0:v.activeIndex,-1===v.activeIndex&&v.taggingLabel!==!1&&(v.activeIndex=0);var l=s.querySelectorAll(".ui-select-choices-content");v.$animate&&v.$animate.on&&v.$animate.enabled(l[0])?v.$animate.on("enter",l[0],function(t,s){"close"===s&&i(function(){v.focusSearchInput(e)})}):i(function(){v.focusSearchInput(e),!v.tagging.isActivated&&v.items.length>1&&f()})}},v.focusSearchInput=function(e){v.search=e||v.search,v.searchInput[0].focus()},v.findGroupByName=function(e){return v.groups&&v.groups.filter(function(t){return t.name===e})[0]},v.parseRepeatAttr=function(e,s,i){function c(e){var c=t.$eval(s);if(v.groups=[],angular.forEach(e,function(e){var t=angular.isFunction(c)?c(e):e[c],s=v.findGroupByName(t);s?s.items.push(e):v.groups.push({name:t,items:[e]})}),i){var l=t.$eval(i);angular.isFunction(l)?v.groups=l(v.groups):angular.isArray(l)&&(v.groups=g(v.groups,l))}v.items=[],v.groups.forEach(function(e){v.items=v.items.concat(e.items)})}function a(e){v.items=e}v.setItemsFn=s?c:a,v.parserResult=l.parse(e),v.isGrouped=!!s,v.itemProperty=v.parserResult.itemName;var o=v.parserResult.source,u=function(){var e=o(t);t.$uisSource=Object.keys(e).map(function(t){var s={};return s[v.parserResult.keyName]=t,s.value=e[t],s})};v.parserResult.keyName&&(u(),v.parserResult.source=r("$uisSource"+v.parserResult.filters),t.$watch(o,function(e,t){e!==t&&u()},!0)),v.refreshItems=function(e){e=e||v.parserResult.source(t);var s=v.selected;if(v.isEmpty()||angular.isArray(s)&&!s.length||!v.removeSelected)v.setItemsFn(e);else if(void 0!==e){var i=e.filter(function(e){return s.every(function(t){return!angular.equals(e,t)})});v.setItemsFn(i)}("auto"===v.dropdownPosition||"up"===v.dropdownPosition)&&t.calculateDropdownPos()},t.$watchCollection(v.parserResult.source,function(e){if(void 0===e||null===e)v.items=[];else{if(!angular.isArray(e))throw n("items","Expected an array but got '{0}'.",e);v.refreshItems(e),v.ngModel.$modelValue=null}})};var $;v.refresh=function(e){void 0!==e&&($&&i.cancel($),$=i(function(){t.$eval(e)},v.refreshDelay))},v.isActive=function(e){if(!v.open)return!1;var t=v.items.indexOf(e[v.itemProperty]),s=t==v.activeIndex;return!s||0>t&&v.taggingLabel!==!1||0>t&&v.taggingLabel===!1?!1:(s&&!angular.isUndefined(v.onHighlightCallback)&&e.$eval(v.onHighlightCallback),s)},v.isDisabled=function(e){if(v.open){var t,s=v.items.indexOf(e[v.itemProperty]),i=!1;return s>=0&&!angular.isUndefined(v.disableChoiceExpression)&&(t=v.items[s],i=!!e.$eval(v.disableChoiceExpression),t._uiSelectChoiceDisabled=i),i}},v.select=function(e,s,c){if(void 0===e||!e._uiSelectChoiceDisabled){if(!v.items&&!v.search&&!v.tagging.isActivated)return;if(!e||!e._uiSelectChoiceDisabled){if(v.tagging.isActivated){if(v.taggingLabel===!1)if(v.activeIndex<0){if(e=void 0!==v.tagging.fct?v.tagging.fct(v.search):v.search,!e||angular.equals(v.items[0],e))return}else e=v.items[v.activeIndex];else if(0===v.activeIndex){if(void 0===e)return;if(void 0!==v.tagging.fct&&"string"==typeof e){if(e=v.tagging.fct(e),!e)return}else"string"==typeof e&&(e=e.replace(v.taggingLabel,"").trim())}if(v.selected&&angular.isArray(v.selected)&&v.selected.filter(function(t){return angular.equals(t,e)}).length>0)return v.close(s),void 0}t.$broadcast("uis:select",e);var l={};l[v.parserResult.itemName]=e,i(function(){v.onSelectCallback(t,{$item:e,$model:v.parserResult.modelMapper(t,l)})}),v.closeOnSelect&&v.close(s),c&&"click"===c.type&&(v.clickTriggeredSelect=!0)}}},v.close=function(e){v.open&&(v.ngModel&&v.ngModel.$setTouched&&v.ngModel.$setTouched(),p(),v.open=!1,t.$broadcast("uis:close",e))},v.setFocus=function(){v.focus||v.focusInput[0].focus()},v.clear=function(e){v.select(void 0),e.stopPropagation(),i(function(){v.focusser[0].focus()},0,!1)},v.toggle=function(e){v.open?(v.close(),e.preventDefault(),e.stopPropagation()):v.activate()},v.isLocked=function(e,t){var s,i=v.selected[t];return i&&!angular.isUndefined(v.lockChoiceExpression)&&(s=!!e.$eval(v.lockChoiceExpression),i._uiSelectChoiceLocked=s),s};var b=null;v.sizeSearchInput=function(){var e=v.searchInput[0],s=v.searchInput.parent().parent()[0],c=function(){return s.clientWidth*!!e.offsetParent},l=function(t){if(0===t)return!1;var s=t-e.offsetLeft-10;return 50>s&&(s=t),v.searchInput.css("width",s+"px"),!0};v.searchInput.css("width","10px"),i(function(){null!==b||l(c())||(b=t.$watch(c,function(e){l(e)&&(b(),b=null)}))})},v.searchInput.on("keydown",function(s){var c=s.which;~[e.ENTER,e.ESC].indexOf(c)&&(s.preventDefault(),s.stopPropagation()),t.$apply(function(){var t=!1;if((v.items.length>0||v.tagging.isActivated)&&(h(c),v.taggingTokens.isActivated)){for(var l=0;l<v.taggingTokens.tokens.length;l++)v.taggingTokens.tokens[l]===e.MAP[s.keyCode]&&v.search.length>0&&(t=!0);t&&i(function(){v.searchInput.triggerHandler("tagged");var t=v.search.replace(e.MAP[s.keyCode],"").trim();v.tagging.fct&&(t=v.tagging.fct(t)),t&&v.select(t,!0)})}}),e.isVerticalMovement(c)&&v.items.length>0&&f(),(c===e.ENTER||c===e.ESC)&&(s.preventDefault(),s.stopPropagation())}),v.searchInput.on("paste",function(t){var s;if(s=window.clipboardData&&window.clipboardData.getData?window.clipboardData.getData("Text"):(t.originalEvent||t).clipboardData.getData("text/plain"),s=v.search+s,s&&s.length>0)if(v.taggingTokens.isActivated){var i=e.toSeparator(v.taggingTokens.tokens[0]),c=s.split(i||v.taggingTokens.tokens[0]);if(c&&c.length>0){var l=v.search;angular.forEach(c,function(e){var t=v.tagging.fct?v.tagging.fct(e):e;t&&v.select(t,!0)}),v.search=l||m,t.preventDefault(),t.stopPropagation()}}else v.paste&&(v.paste(s),v.search=m,t.preventDefault(),t.stopPropagation())}),v.searchInput.on("tagged",function(){i(function(){p()})}),t.$on("$destroy",function(){v.searchInput.off("keyup keydown tagged blur paste")}),angular.element(u).bind("resize",function(){v.sizeSearchInput()})}]),s.directive("uiSelect",["$document","uiSelectConfig","uiSelectMinErr","uisOffset","$compile","$parse","$timeout",function(e,t,s,i,c,l,n){return{restrict:"EA",templateUrl:function(e,s){var i=s.theme||t.theme;return i+(angular.isDefined(s.multiple)?"/select-multiple.tpl.html":"/select.tpl.html")},replace:!0,transclude:!0,require:["uiSelect","^ngModel"],scope:!0,controller:"uiSelectCtrl",controllerAs:"$select",compile:function(c,a){var r=/{(.*)}\s*{(.*)}/.exec(a.ngClass);if(r){var o="{"+r[1]+", "+r[2]+"}";a.ngClass=o,c.attr("ng-class",o)}return angular.isDefined(a.multiple)?c.append("<ui-select-multiple/>").removeAttr("multiple"):c.append("<ui-select-single/>"),a.inputId&&(c.querySelectorAll("input.ui-select-search")[0].id=a.inputId),function(c,a,r,o,u){function d(e){if(h.open){var t=!1;if(t=window.jQuery?window.jQuery.contains(a[0],e.target):a[0].contains(e.target),!t&&!h.clickTriggeredSelect){var s;if(h.skipFocusser)s=!0;else{var i=["input","button","textarea","select"],l=angular.element(e.target).controller("uiSelect");s=l&&l!==h,s||(s=~i.indexOf(e.target.tagName.toLowerCase()))}h.close(s),c.$digest()}h.clickTriggeredSelect=!1}}function p(){var t=i(a);m=angular.element('<div class="ui-select-placeholder"></div>'),m[0].style.width=t.width+"px",m[0].style.height=t.height+"px",a.after(m),$=a[0].style.width,e.find("body").append(a),a[0].style.position="absolute",a[0].style.left=t.left+"px",a[0].style.top=t.top+"px",a[0].style.width=t.width+"px"}function g(){null!==m&&(m.replaceWith(a),m=null,a[0].style.position="",a[0].style.left="",a[0].style.top="",a[0].style.width=$,h.setFocus())}var h=o[0],f=o[1];h.generatedId=t.generateId(),h.baseTitle=r.title||"Select box",h.focusserTitle=h.baseTitle+" focus",h.focusserId="focusser-"+h.generatedId,h.closeOnSelect=function(){return angular.isDefined(r.closeOnSelect)?l(r.closeOnSelect)():t.closeOnSelect}(),c.$watch("skipFocusser",function(){var e=c.$eval(r.skipFocusser);h.skipFocusser=void 0!==e?e:t.skipFocusser}),h.onSelectCallback=l(r.onSelect),h.onRemoveCallback=l(r.onRemove),h.limit=angular.isDefined(r.limit)?parseInt(r.limit,10):void 0,h.ngModel=f,h.choiceGrouped=function(e){return h.isGrouped&&e&&e.name},r.tabindex&&r.$observe("tabindex",function(e){h.focusInput.attr("tabindex",e),a.removeAttr("tabindex")}),c.$watch("searchEnabled",function(){var e=c.$eval(r.searchEnabled);h.searchEnabled=void 0!==e?e:t.searchEnabled}),c.$watch("sortable",function(){var e=c.$eval(r.sortable);h.sortable=void 0!==e?e:t.sortable}),r.$observe("disabled",function(){h.disabled=void 0!==r.disabled?r.disabled:!1}),r.$observe("resetSearchInput",function(){var e=c.$eval(r.resetSearchInput);h.resetSearchInput=void 0!==e?e:!0}),r.$observe("paste",function(){h.paste=c.$eval(r.paste)}),r.$observe("tagging",function(){if(void 0!==r.tagging){var e=c.$eval(r.tagging);h.tagging={isActivated:!0,fct:e!==!0?e:void 0}}else h.tagging={isActivated:!1,fct:void 0}}),r.$observe("taggingLabel",function(){void 0!==r.tagging&&(h.taggingLabel="false"===r.taggingLabel?!1:void 0!==r.taggingLabel?r.taggingLabel:"(new)")}),r.$observe("taggingTokens",function(){if(void 0!==r.tagging){var e=void 0!==r.taggingTokens?r.taggingTokens.split("|"):[",","ENTER"];h.taggingTokens={isActivated:!0,tokens:e}}}),angular.isDefined(r.autofocus)&&n(function(){h.setFocus()}),angular.isDefined(r.focusOn)&&c.$on(r.focusOn,function(){n(function(){h.setFocus()})}),e.on("click",d),c.$on("$destroy",function(){e.off("click",d)}),u(c,function(e){var t=angular.element("<div>").append(e),i=t.querySelectorAll(".ui-select-match");if(i.removeAttr("ui-select-match"),i.removeAttr("data-ui-select-match"),1!==i.length)throw s("transcluded","Expected 1 .ui-select-match but got '{0}'.",i.length);a.querySelectorAll(".ui-select-match").replaceWith(i);var c=t.querySelectorAll(".ui-select-choices");if(c.removeAttr("ui-select-choices"),c.removeAttr("data-ui-select-choices"),1!==c.length)throw s("transcluded","Expected 1 .ui-select-choices but got '{0}'.",c.length);a.querySelectorAll(".ui-select-choices").replaceWith(c)});var v=c.$eval(r.appendToBody);(void 0!==v?v:t.appendToBody)&&(c.$watch("$select.open",function(e){e?p():g()}),c.$on("$destroy",function(){g()}));var m=null,$="",b=null,w="direction-up";c.$watch("$select.open",function(){("auto"===h.dropdownPosition||"up"===h.dropdownPosition)&&c.calculateDropdownPos()});var x=function(e,t){e=e||i(a),t=t||i(b),b[0].style.position="absolute",b[0].style.top=-1*t.height+"px",a.addClass(w)},y=function(e,t){a.removeClass(w),e=e||i(a),t=t||i(b),b[0].style.position="",b[0].style.top=""};c.calculateDropdownPos=function(){if(h.open){if(b=angular.element(a).querySelectorAll(".ui-select-dropdown"),0===b.length)return;b[0].style.opacity=0,n(function(){if("up"===h.dropdownPosition)x();else{a.removeClass(w);var t=i(a),s=i(b),c=e[0].documentElement.scrollTop||e[0].body.scrollTop;t.top+t.height+s.height>c+e[0].documentElement.clientHeight?x(t,s):y(t,s)}b[0].style.opacity=1})}else{if(null===b||0===b.length)return;b[0].style.position="",b[0].style.top="",a.removeClass(w)}}}}}}]),s.directive("uiSelectMatch",["uiSelectConfig",function(e){return{restrict:"EA",require:"^uiSelect",replace:!0,transclude:!0,templateUrl:function(t){t.addClass("ui-select-match");var s=t.parent().attr("theme")||e.theme,i=t.parent().attr("multiple");return s+(i?"/match-multiple.tpl.html":"/match.tpl.html")},link:function(t,s,i,c){function l(e){c.allowClear=angular.isDefined(e)?""===e?!0:"true"===e.toLowerCase():!1}c.lockChoiceExpression=i.uiLockChoice,i.$observe("placeholder",function(t){c.placeholder=void 0!==t?t:e.placeholder}),i.$observe("allowClear",l),l(i.allowClear),c.multiple&&c.sizeSearchInput()}}}]),s.directive("uiSelectMultiple",["uiSelectMinErr","$timeout",function(t,s){return{restrict:"EA",require:["^uiSelect","^ngModel"],controller:["$scope","$timeout",function(e,t){var s,i=this,c=e.$select;angular.isUndefined(c.selected)&&(c.selected=[]),e.$evalAsync(function(){s=e.ngModel}),i.activeMatchIndex=-1,i.updateModel=function(){s.$setViewValue(Date.now()),i.refreshComponent()},i.refreshComponent=function(){c.refreshItems(),c.sizeSearchInput()},i.removeChoice=function(s){var l=c.selected[s];if(!l._uiSelectChoiceLocked){var n={};n[c.parserResult.itemName]=l,c.selected.splice(s,1),i.activeMatchIndex=-1,c.sizeSearchInput(),t(function(){c.onRemoveCallback(e,{$item:l,$model:c.parserResult.modelMapper(e,n)})}),i.updateModel()}},i.getPlaceholder=function(){return c.selected&&c.selected.length?void 0:c.placeholder}}],controllerAs:"$selectMultiple",link:function(i,c,l,n){function a(e){return angular.isNumber(e.selectionStart)?e.selectionStart:e.value.length}function r(t){function s(){switch(t){case e.LEFT:return~g.activeMatchIndex?u:n;case e.RIGHT:return~g.activeMatchIndex&&r!==n?o:(d.activate(),!1);case e.BACKSPACE:return~g.activeMatchIndex?(g.removeChoice(r),u):n;case e.DELETE:return~g.activeMatchIndex?(g.removeChoice(g.activeMatchIndex),r):!1}}var i=a(d.searchInput[0]),c=d.selected.length,l=0,n=c-1,r=g.activeMatchIndex,o=g.activeMatchIndex+1,u=g.activeMatchIndex-1,p=r;return i>0||d.search.length&&t==e.RIGHT?!1:(d.close(),p=s(),g.activeMatchIndex=d.selected.length&&p!==!1?Math.min(n,Math.max(l,p)):-1,!0)}function o(e){if(void 0===e||void 0===d.search)return!1;var t=e.filter(function(e){return void 0===d.search.toUpperCase()||void 0===e?!1:e.toUpperCase()===d.search.toUpperCase()}).length>0;return t}function u(e,t){var s=-1;if(angular.isArray(e))for(var i=angular.copy(e),c=0;c<i.length;c++)if(void 0===d.tagging.fct)i[c]+" "+d.taggingLabel===t&&(s=c);else{var l=i[c];angular.isObject(l)&&(l.isTag=!0),angular.equals(l,t)&&(s=c)}return s}var d=n[0],p=i.ngModel=n[1],g=i.$selectMultiple;d.multiple=!0,d.removeSelected=!0,d.focusInput=d.searchInput,p.$isEmpty=function(e){return!e||0===e.length},p.$parsers.unshift(function(){for(var e,t={},s=[],c=d.selected.length-1;c>=0;c--)t={},t[d.parserResult.itemName]=d.selected[c],e=d.parserResult.modelMapper(i,t),s.unshift(e);return s}),p.$formatters.unshift(function(e){var t,s=d.parserResult.source(i,{$select:{search:""}}),c={};if(!s)return e;var l=[],n=function(e,s){if(e&&e.length){for(var n=e.length-1;n>=0;n--){if(c[d.parserResult.itemName]=e[n],t=d.parserResult.modelMapper(i,c),d.parserResult.trackByExp){var a=/(\w*)\./.exec(d.parserResult.trackByExp),r=/\.([^\s]+)/.exec(d.parserResult.trackByExp);if(a&&a.length>0&&a[1]==d.parserResult.itemName&&r&&r.length>0&&t[r[1]]==s[r[1]])return l.unshift(e[n]),!0}if(angular.equals(t,s))return l.unshift(e[n]),!0}return!1}};if(!e)return l;for(var a=e.length-1;a>=0;a--)n(d.selected,e[a])||n(s,e[a])||l.unshift(e[a]);return l}),i.$watchCollection(function(){return p.$modelValue},function(e,t){t!=e&&(p.$modelValue=null,g.refreshComponent())}),p.$render=function(){if(!angular.isArray(p.$viewValue)){if(!angular.isUndefined(p.$viewValue)&&null!==p.$viewValue)throw t("multiarr","Expected model value to be array but got '{0}'",p.$viewValue);d.selected=[]}d.selected=p.$viewValue,g.refreshComponent(),i.$evalAsync()},i.$on("uis:select",function(e,t){d.selected.length>=d.limit||(d.selected.push(t),g.updateModel())}),i.$on("uis:activate",function(){g.activeMatchIndex=-1}),i.$watch("$select.disabled",function(e,t){t&&!e&&d.sizeSearchInput()}),d.searchInput.on("keydown",function(t){var s=t.which;i.$apply(function(){var i=!1;e.isHorizontalMovement(s)&&(i=r(s)),i&&s!=e.TAB&&(t.preventDefault(),t.stopPropagation())})}),d.searchInput.on("keyup",function(t){if(e.isVerticalMovement(t.which)||i.$evalAsync(function(){d.activeIndex=d.taggingLabel===!1?-1:0}),d.tagging.isActivated&&d.search.length>0){if(t.which===e.TAB||e.isControl(t)||e.isFunctionKey(t)||t.which===e.ESC||e.isVerticalMovement(t.which))return;if(d.activeIndex=d.taggingLabel===!1?-1:0,d.taggingLabel===!1)return;var s,c,l,n,a=angular.copy(d.items),r=angular.copy(d.items),p=!1,g=-1;if(void 0!==d.tagging.fct){if(l=d.$filter("filter")(a,{isTag:!0}),l.length>0&&(n=l[0]),a.length>0&&n&&(p=!0,a=a.slice(1,a.length),r=r.slice(1,r.length)),s=d.tagging.fct(d.search),r.some(function(e){return angular.equals(e,d.tagging.fct(d.search))})||d.selected.some(function(e){return angular.equals(e,s)}))return i.$evalAsync(function(){d.activeIndex=0,d.items=a}),void 0;s.isTag=!0}else{if(l=d.$filter("filter")(a,function(e){return e.match(d.taggingLabel)}),l.length>0&&(n=l[0]),c=a[0],void 0!==c&&a.length>0&&n&&(p=!0,a=a.slice(1,a.length),r=r.slice(1,r.length)),s=d.search+" "+d.taggingLabel,u(d.selected,d.search)>-1)return;if(o(r.concat(d.selected)))return p&&(a=r,i.$evalAsync(function(){d.activeIndex=0,d.items=a})),void 0;if(o(r))return p&&(d.items=r.slice(1,r.length)),void 0}p&&(g=u(d.selected,s)),g>-1?a=a.slice(g+1,a.length-1):(a=[],a.push(s),a=a.concat(r)),i.$evalAsync(function(){d.activeIndex=0,d.items=a})}}),d.searchInput.on("blur",function(){s(function(){g.activeMatchIndex=-1})})}}}]),s.directive("uiSelectSingle",["$timeout","$compile",function(t,s){return{restrict:"EA",require:["^uiSelect","^ngModel"],link:function(i,c,l,n){var a=n[0],r=n[1];r.$parsers.unshift(function(e){var t,s={};return s[a.parserResult.itemName]=e,t=a.parserResult.modelMapper(i,s)}),r.$formatters.unshift(function(e){var t,s=a.parserResult.source(i,{$select:{search:""}}),c={};if(s){var l=function(s){return c[a.parserResult.itemName]=s,t=a.parserResult.modelMapper(i,c),t==e};if(a.selected&&l(a.selected))return a.selected;for(var n=s.length-1;n>=0;n--)if(l(s[n]))return s[n]}return e}),i.$watch("$select.selected",function(e){r.$viewValue!==e&&r.$setViewValue(e)}),r.$render=function(){a.selected=r.$viewValue},i.$on("uis:select",function(e,t){a.selected=t}),i.$on("uis:close",function(e,s){t(function(){a.focusser.prop("disabled",!1),s||a.focusser[0].focus()},0,!1)}),i.$on("uis:activate",function(){o.prop("disabled",!0)});var o=angular.element("<input ng-disabled='$select.disabled' class='ui-select-focusser ui-select-offscreen' type='text' id='{{ $select.focusserId }}' aria-label='{{ $select.focusserTitle }}' aria-haspopup='true' role='button' />");s(o)(i),a.focusser=o,a.focusInput=o,c.parent().append(o),o.bind("focus",function(){i.$evalAsync(function(){a.focus=!0})}),o.bind("blur",function(){i.$evalAsync(function(){a.focus=!1})}),o.bind("keydown",function(t){return t.which===e.BACKSPACE?(t.preventDefault(),t.stopPropagation(),a.select(void 0),i.$apply(),void 0):(t.which===e.TAB||e.isControl(t)||e.isFunctionKey(t)||t.which===e.ESC||((t.which==e.DOWN||t.which==e.UP||t.which==e.ENTER||t.which==e.SPACE)&&(t.preventDefault(),t.stopPropagation(),a.activate()),i.$digest()),void 0)}),o.bind("keyup input",function(t){t.which===e.TAB||e.isControl(t)||e.isFunctionKey(t)||t.which===e.ESC||t.which==e.ENTER||t.which===e.BACKSPACE||(a.activate(o.val()),o.val(""),i.$digest())})}}}]),s.directive("uiSelectSort",["$timeout","uiSelectConfig","uiSelectMinErr",function(e,t,s){return{require:"^^uiSelect",link:function(t,i,c,l){if(null===t[c.uiSelectSort])throw s("sort","Expected a list to sort");var n=angular.extend({axis:"horizontal"},t.$eval(c.uiSelectSortOptions)),a=n.axis,r="dragging",o="dropping",u="dropping-before",d="dropping-after";t.$watch(function(){return l.sortable},function(e){e?i.attr("draggable",!0):i.removeAttr("draggable")}),i.on("dragstart",function(e){i.addClass(r),(e.dataTransfer||e.originalEvent.dataTransfer).setData("text",t.$index.toString())}),i.on("dragend",function(){i.removeClass(r)});var p,g=function(e,t){this.splice(t,0,this.splice(e,1)[0])},h=function(e){e.preventDefault();var t="vertical"===a?e.offsetY||e.layerY||(e.originalEvent?e.originalEvent.offsetY:0):e.offsetX||e.layerX||(e.originalEvent?e.originalEvent.offsetX:0);t<this["vertical"===a?"offsetHeight":"offsetWidth"]/2?(i.removeClass(d),i.addClass(u)):(i.removeClass(u),i.addClass(d))},f=function(t){t.preventDefault();var s=parseInt((t.dataTransfer||t.originalEvent.dataTransfer).getData("text"),10);e.cancel(p),p=e(function(){v(s)},20)},v=function(e){var s=t.$eval(c.uiSelectSort),l=s[e],n=null;n=i.hasClass(u)?e<t.$index?t.$index-1:t.$index:e<t.$index?t.$index:t.$index+1,g.apply(s,[e,n]),t.$apply(function(){t.$emit("uiSelectSort:change",{array:s,item:l,from:e,to:n})}),i.removeClass(o),i.removeClass(u),i.removeClass(d),i.off("drop",f)};i.on("dragenter",function(){i.hasClass(r)||(i.addClass(o),i.on("dragover",h),i.on("drop",f))}),i.on("dragleave",function(e){e.target==i&&(i.removeClass(o),i.removeClass(u),i.removeClass(d),i.off("dragover",h),i.off("drop",f))})}}}]),s.service("uisRepeatParser",["uiSelectMinErr","$parse",function(e,t){var s=this;s.parse=function(s){var i;if(i=s.match(/^\s*(?:([\s\S]+?)\s+as\s+)?(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(\s*[\s\S]+?)?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),!i)throw e("iexp","Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.",s);var c=i[5],l="";if(i[3]){c=i[5].replace(/(^\()|(\)$)/g,"");var n=i[5].match(/^\s*(?:[\s\S]+?)(?:[^\|]|\|\|)+([\s\S]*)\s*$/);n&&n[1].trim()&&(l=n[1],c=c.replace(l,""))}return{itemName:i[4]||i[2],keyName:i[3],source:t(c),filters:l,trackByExp:i[6],modelMapper:t(i[1]||i[4]||i[2]),repeatExpression:function(e){var t=this.itemName+" in "+(e?"$group.items":"$select.items");return this.trackByExp&&(t+=" track by "+this.trackByExp),t}}},s.getGroupNgRepeatExpression=function(){return"$group in $select.groups"}}])}(),angular.module("ui.select").run(["$templateCache",function(e){e.put("bootstrap/choices.tpl.html",'<ul class="ui-select-choices ui-select-choices-content ui-select-dropdown dropdown-menu" role="listbox" ng-show="$select.open"><li class="ui-select-choices-group" id="ui-select-choices-{{ $select.generatedId }}"><div class="divider" ng-show="$select.isGrouped && $index > 0"></div><div ng-show="$select.isGrouped" class="ui-select-choices-group-label dropdown-header" ng-bind="$group.name"></div><div id="ui-select-choices-row-{{ $select.generatedId }}-{{$index}}" class="ui-select-choices-row" ng-class="{active: $select.isActive(this), disabled: $select.isDisabled(this)}" role="option"><a href="" class="ui-select-choices-row-inner"></a></div></li></ul>'),e.put("bootstrap/match-multiple.tpl.html",'<span class="ui-select-match"><span ng-repeat="$item in $select.selected"><span class="ui-select-match-item btn btn-default btn-xs" tabindex="-1" type="button" ng-disabled="$select.disabled" ng-click="$selectMultiple.activeMatchIndex = $index;" ng-class="{\'btn-primary\':$selectMultiple.activeMatchIndex === $index, \'select-locked\':$select.isLocked(this, $index)}" ui-select-sort="$select.selected"><span class="close ui-select-match-close" ng-hide="$select.disabled" ng-click="$selectMultiple.removeChoice($index)">&nbsp;&times;</span> <span uis-transclude-append=""></span></span></span></span>'),e.put("bootstrap/match.tpl.html",'<div class="ui-select-match" ng-hide="$select.open" ng-disabled="$select.disabled" ng-class="{\'btn-default-focus\':$select.focus}"><span tabindex="-1" class="btn btn-default form-control ui-select-toggle" aria-label="{{ $select.baseTitle }} activate" ng-disabled="$select.disabled" ng-click="$select.activate()" style="outline: 0;"><span ng-show="$select.isEmpty()" class="ui-select-placeholder text-muted">{{$select.placeholder}}</span> <span ng-hide="$select.isEmpty()" class="ui-select-match-text pull-left" ng-class="{\'ui-select-allow-clear\': $select.allowClear && !$select.isEmpty()}" ng-transclude=""></span> <i class="caret pull-right" ng-click="$select.toggle($event)"></i> <a ng-show="$select.allowClear && !$select.isEmpty()" aria-label="{{ $select.baseTitle }} clear" style="margin-right: 10px" ng-click="$select.clear($event)" class="btn btn-xs btn-link pull-right"><i class="glyphicon glyphicon-remove" aria-hidden="true"></i></a></span></div>'),e.put("bootstrap/select-multiple.tpl.html",'<div class="ui-select-container ui-select-multiple ui-select-bootstrap dropdown form-control" ng-class="{open: $select.open}"><div><div class="ui-select-match"></div><input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="ui-select-search input-xs" placeholder="{{$selectMultiple.getPlaceholder()}}" ng-disabled="$select.disabled" ng-hide="$select.disabled" ng-click="$select.activate()" ng-model="$select.search" role="combobox" aria-label="{{ $select.baseTitle }}" ondrop="return false;"></div><div class="ui-select-choices"></div></div>'),e.put("bootstrap/select.tpl.html",'<div class="ui-select-container ui-select-bootstrap dropdown" ng-class="{open: $select.open}"><div class="ui-select-match"></div><input type="text" autocomplete="off" tabindex="-1" aria-expanded="true" aria-label="{{ $select.baseTitle }}" aria-owns="ui-select-choices-{{ $select.generatedId }}" aria-activedescendant="ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}" class="form-control ui-select-search" placeholder="{{$select.placeholder}}" ng-model="$select.search" ng-show="$select.searchEnabled && $select.open"><div class="ui-select-choices"></div></div>'),e.put("select2/choices.tpl.html",'<ul class="ui-select-choices ui-select-choices-content select2-results"><li class="ui-select-choices-group" ng-class="{\'select2-result-with-children\': $select.choiceGrouped($group) }"><div ng-show="$select.choiceGrouped($group)" class="ui-select-choices-group-label select2-result-label" ng-bind="$group.name"></div><ul role="listbox" id="ui-select-choices-{{ $select.generatedId }}" ng-class="{\'select2-result-sub\': $select.choiceGrouped($group), \'select2-result-single\': !$select.choiceGrouped($group) }"><li role="option" id="ui-select-choices-row-{{ $select.generatedId }}-{{$index}}" class="ui-select-choices-row" ng-class="{\'select2-highlighted\': $select.isActive(this), \'select2-disabled\': $select.isDisabled(this)}"><div class="select2-result-label ui-select-choices-row-inner"></div></li></ul></li></ul>'),e.put("select2/match-multiple.tpl.html",'<span class="ui-select-match"><li class="ui-select-match-item select2-search-choice" ng-repeat="$item in $select.selected" ng-class="{\'select2-search-choice-focus\':$selectMultiple.activeMatchIndex === $index, \'select2-locked\':$select.isLocked(this, $index)}" ui-select-sort="$select.selected"><span uis-transclude-append=""></span> <a href="javascript:;" class="ui-select-match-close select2-search-choice-close" ng-click="$selectMultiple.removeChoice($index)" tabindex="-1"></a></li></span>'),e.put("select2/match.tpl.html",'<a class="select2-choice ui-select-match" ng-class="{\'select2-default\': $select.isEmpty()}" ng-click="$select.toggle($event)" aria-label="{{ $select.baseTitle }} select"><span ng-show="$select.isEmpty()" class="select2-chosen">{{$select.placeholder}}</span> <span ng-hide="$select.isEmpty()" class="select2-chosen" ng-transclude=""></span> <abbr ng-if="$select.allowClear && !$select.isEmpty()" class="select2-search-choice-close" ng-click="$select.clear($event)"></abbr> <span class="select2-arrow ui-select-toggle"><b></b></span></a>'),e.put("select2/select-multiple.tpl.html",'<div class="ui-select-container ui-select-multiple select2 select2-container select2-container-multi" ng-class="{\'select2-container-active select2-dropdown-open open\': $select.open, \'select2-container-disabled\': $select.disabled}"><ul class="select2-choices"><span class="ui-select-match"></span><li class="select2-search-field"><input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="combobox" aria-expanded="true" aria-owns="ui-select-choices-{{ $select.generatedId }}" aria-label="{{ $select.baseTitle }}" aria-activedescendant="ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}" class="select2-input ui-select-search" placeholder="{{$selectMultiple.getPlaceholder()}}" ng-disabled="$select.disabled" ng-hide="$select.disabled" ng-model="$select.search" ng-click="$select.activate()" style="width: 34px;" ondrop="return false;"></li></ul><div class="ui-select-dropdown select2-drop select2-with-searchbox select2-drop-active" ng-class="{\'select2-display-none\': !$select.open}"><div class="ui-select-choices"></div></div></div>'),e.put("select2/select.tpl.html",'<div class="ui-select-container select2 select2-container" ng-class="{\'select2-container-active select2-dropdown-open open\': $select.open, \'select2-container-disabled\': $select.disabled, \'select2-container-active\': $select.focus, \'select2-allowclear\': $select.allowClear && !$select.isEmpty()}"><div class="ui-select-match"></div><div class="ui-select-dropdown select2-drop select2-with-searchbox select2-drop-active" ng-class="{\'select2-display-none\': !$select.open}"><div class="select2-search" ng-show="$select.searchEnabled"><input type="text" autocomplete="off" autocorrect="false" autocapitalize="off" spellcheck="false" role="combobox" aria-expanded="true" aria-owns="ui-select-choices-{{ $select.generatedId }}" aria-label="{{ $select.baseTitle }}" aria-activedescendant="ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}" class="ui-select-search select2-input" ng-model="$select.search"></div><div class="ui-select-choices"></div></div></div>'),e.put("selectize/choices.tpl.html",'<div ng-show="$select.open" class="ui-select-choices ui-select-dropdown selectize-dropdown single"><div class="ui-select-choices-content selectize-dropdown-content"><div class="ui-select-choices-group optgroup" role="listbox"><div ng-show="$select.isGrouped" class="ui-select-choices-group-label optgroup-header" ng-bind="$group.name"></div><div role="option" class="ui-select-choices-row" ng-class="{active: $select.isActive(this), disabled: $select.isDisabled(this)}"><div class="option ui-select-choices-row-inner" data-selectable=""></div></div></div></div></div>'),e.put("selectize/match.tpl.html",'<div ng-hide="($select.open || $select.isEmpty())" class="ui-select-match" ng-transclude=""></div>'),e.put("selectize/select.tpl.html",'<div class="ui-select-container selectize-control single" ng-class="{\'open\': $select.open}"><div class="selectize-input" ng-class="{\'focus\': $select.open, \'disabled\': $select.disabled, \'selectize-focus\' : $select.focus}" ng-click="$select.open && !$select.searchEnabled ? $select.toggle($event) : $select.activate()"><div class="ui-select-match"></div><input type="text" autocomplete="off" tabindex="-1" class="ui-select-search ui-select-toggle" ng-click="$select.toggle($event)" placeholder="{{$select.placeholder}}" ng-model="$select.search" ng-hide="!$select.searchEnabled || ($select.selected && !$select.open)" ng-disabled="$select.disabled" aria-label="{{ $select.baseTitle }}"></div><div class="ui-select-choices"></div></div>')
}]);
/*
 AngularJS v1.5.3
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(A,e,B){'use strict';function C(a){var c=[];v(c,e.noop).chars(a);return c.join("")}function h(a,c){var b={},d=a.split(","),l;for(l=0;l<d.length;l++)b[c?e.lowercase(d[l]):d[l]]=!0;return b}function D(a,c){null===a||a===B?a="":"string"!==typeof a&&(a=""+a);g.innerHTML=a;var b=5;do{if(0===b)throw w("uinput");b--;11>=document.documentMode&&n(g);a=g.innerHTML;g.innerHTML=a}while(a!==g.innerHTML);for(b=g.firstChild;b;){switch(b.nodeType){case 1:c.start(b.nodeName.toLowerCase(),E(b.attributes));
break;case 3:c.chars(b.textContent)}var d;if(!(d=b.firstChild)&&(1==b.nodeType&&c.end(b.nodeName.toLowerCase()),d=b.nextSibling,!d))for(;null==d;){b=b.parentNode;if(b===g)break;d=b.nextSibling;1==b.nodeType&&c.end(b.nodeName.toLowerCase())}b=d}for(;b=g.firstChild;)g.removeChild(b)}function E(a){for(var c={},b=0,d=a.length;b<d;b++){var l=a[b];c[l.name]=l.value}return c}function x(a){return a.replace(/&/g,"&amp;").replace(F,function(a){var b=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(b-55296)+
(a-56320)+65536)+";"}).replace(G,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function v(a,c){var b=!1,d=e.bind(a,a.push);return{start:function(a,f){a=e.lowercase(a);!b&&H[a]&&(b=a);b||!0!==t[a]||(d("<"),d(a),e.forEach(f,function(b,f){var g=e.lowercase(f),h="img"===a&&"src"===g||"background"===g;!0!==I[g]||!0===y[g]&&!c(b,h)||(d(" "),d(f),d('="'),d(x(b)),d('"'))}),d(">"))},end:function(a){a=e.lowercase(a);b||!0!==t[a]||!0===z[a]||(d("</"),d(a),d(">"));a==
b&&(b=!1)},chars:function(a){b||d(x(a))}}}function n(a){if(a.nodeType===Node.ELEMENT_NODE)for(var c=a.attributes,b=0,d=c.length;b<d;b++){var e=c[b],f=e.name.toLowerCase();if("xmlns:ns1"===f||0===f.indexOf("ns1:"))a.removeAttributeNode(e),b--,d--}(c=a.firstChild)&&n(c);(c=a.nextSibling)&&n(c)}var w=e.$$minErr("$sanitize"),F=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,G=/([^\#-~ |!])/g,z=h("area,br,col,hr,img,wbr"),q=h("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),k=h("rp,rt"),u=e.extend({},k,q),q=e.extend({},
q,h("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),k=e.extend({},k,h("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),J=h("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),
H=h("script,style"),t=e.extend({},z,q,k,u),y=h("background,cite,href,longdesc,src,xlink:href"),u=h("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),k=h("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
!0),I=e.extend({},y,k,u),g;(function(a){if(a.document&&a.document.implementation)a=a.document.implementation.createHTMLDocument("inert");else throw w("noinert");var c=(a.documentElement||a.getDocumentElement()).getElementsByTagName("body");1===c.length?g=c[0]:(c=a.createElement("html"),g=a.createElement("body"),c.appendChild(g),a.appendChild(c))})(A);e.module("ngSanitize",[]).provider("$sanitize",function(){var a=!1;this.$get=["$$sanitizeUri",function(c){a&&e.extend(t,J);return function(a){var d=
[];D(a,v(d,function(a,b){return!/^unsafe:/.test(c(a,b))}));return d.join("")}}];this.enableSvg=function(c){return e.isDefined(c)?(a=c,this):a}});e.module("ngSanitize").filter("linky",["$sanitize",function(a){var c=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,b=/^mailto:/i,d=e.$$minErr("linky"),g=e.isString;return function(f,h,m){function k(a){a&&p.push(C(a))}function q(a,b){var c;p.push("<a ");e.isFunction(m)&&(m=m(a));if(e.isObject(m))for(c in m)p.push(c+
'="'+m[c]+'" ');else m={};!e.isDefined(h)||"target"in m||p.push('target="',h,'" ');p.push('href="',a.replace(/"/g,"&quot;"),'">');k(b);p.push("</a>")}if(null==f||""===f)return f;if(!g(f))throw d("notstring",f);for(var r=f,p=[],s,n;f=r.match(c);)s=f[0],f[2]||f[4]||(s=(f[3]?"http://":"mailto:")+s),n=f.index,k(r.substr(0,n)),q(s,f[0].replace(b,"")),r=r.substring(n+f[0].length);k(r);return a(p.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

/*! angularjs-slider - v2.11.0 -  (c) Rafal Zajac <rzajac@gmail.com>, Valentin Hervieu <valentin@hervieu.me>, Jussi Saarivirta <jusasi@gmail.com>, Angelin Sirbu <angelin.sirbu@gmail.com> -  https://github.com/angular-slider/angularjs-slider -  2016-04-01 */
!function(a,b){"use strict";"function"==typeof define&&define.amd?define(["angular"],b):"object"==typeof module&&module.exports?module.exports=b(require("angular")):b(a.angular)}(this,function(a){"use strict";var b=a.module("rzModule",[]).factory("RzSliderOptions",function(){var b={floor:0,ceil:null,step:1,precision:0,minRange:0,id:null,translate:null,stepsArray:null,draggableRange:!1,draggableRangeOnly:!1,showSelectionBar:!1,showSelectionBarEnd:!1,showSelectionBarFromValue:null,hidePointerLabels:!1,hideLimitLabels:!1,readOnly:!1,disabled:!1,interval:350,showTicks:!1,showTicksValues:!1,ticksTooltip:null,ticksValuesTooltip:null,vertical:!1,getSelectionBarColor:null,getPointerColor:null,keyboardSupport:!0,scale:1,enforceStep:!0,enforceRange:!1,noSwitching:!1,onlyBindHandles:!1,onStart:null,onChange:null,onEnd:null,rightToLeft:!1},c={},d={};return d.options=function(b){a.extend(c,b)},d.getOptions=function(d){return a.extend({},b,c,d)},d}).factory("rzThrottle",["$timeout",function(a){return function(b,c,d){var e,f,g,h=Date.now||function(){return(new Date).getTime()},i=null,j=0;d=d||{};var k=function(){j=h(),i=null,g=b.apply(e,f),e=f=null};return function(){var l=h(),m=c-(l-j);return e=this,f=arguments,0>=m?(a.cancel(i),i=null,j=l,g=b.apply(e,f),e=f=null):i||d.trailing===!1||(i=a(k,m)),g}}}]).factory("RzSlider",["$timeout","$document","$window","$compile","RzSliderOptions","rzThrottle",function(b,c,d,e,f,g){var h=function(a,b){this.scope=a,this.sliderElem=b,this.range=void 0!==this.scope.rzSliderModel&&void 0!==this.scope.rzSliderHigh,this.dragging={active:!1,value:0,difference:0,offset:0,lowLimit:0,highLimit:0},this.positionProperty="left",this.dimensionProperty="width",this.handleHalfDim=0,this.maxPos=0,this.precision=0,this.step=1,this.tracking="",this.minValue=0,this.maxValue=0,this.valueRange=0,this.initHasRun=!1,this.internalChange=!1,this.fullBar=null,this.selBar=null,this.minH=null,this.maxH=null,this.flrLab=null,this.ceilLab=null,this.minLab=null,this.maxLab=null,this.cmbLab=null,this.ticks=null,this.init()};return h.prototype={init:function(){var b,c,e=this,f=function(){e.calcViewDimensions()};this.applyOptions(),this.initElemHandles(),this.manageElementsStyle(),this.setDisabledState(),this.calcViewDimensions(),this.setMinAndMax(),this.addAccessibility(),this.updateCeilLab(),this.updateFloorLab(),this.initHandles(),this.manageEventsBindings(),this.scope.$on("reCalcViewDimensions",f),a.element(d).on("resize",f),this.initHasRun=!0,b=g(function(){e.onLowHandleChange()},e.options.interval),c=g(function(){e.onHighHandleChange()},e.options.interval),this.scope.$on("rzSliderForceRender",function(){e.resetLabelsValue(),b(),e.range&&c(),e.resetSlider()}),this.scope.$watch("rzSliderOptions()",function(a,b){a!==b&&(e.applyOptions(),e.resetSlider())},!0),this.scope.$watch("rzSliderModel",function(a,c){e.internalChange||a!==c&&b()}),this.scope.$watch("rzSliderHigh",function(a,b){e.internalChange||a!==b&&(null!=a&&c(),(e.range&&null==a||!e.range&&null!=a)&&(e.applyOptions(),e.resetSlider()))}),this.scope.$on("$destroy",function(){e.unbindEvents(),a.element(d).off("resize",f)})},onLowHandleChange:function(){this.setMinAndMax(),this.updateLowHandle(this.valueToOffset(this.scope.rzSliderModel)),this.updateSelectionBar(),this.updateTicksScale(),this.updateAriaAttributes(),this.range&&this.updateCmbLabel()},onHighHandleChange:function(){this.setMinAndMax(),this.updateHighHandle(this.valueToOffset(this.scope.rzSliderHigh)),this.updateSelectionBar(),this.updateTicksScale(),this.updateCmbLabel(),this.updateAriaAttributes()},applyOptions:function(){var a;a=this.scope.rzSliderOptions?this.scope.rzSliderOptions():{},this.options=f.getOptions(a),this.options.step<=0&&(this.options.step=1),this.range=void 0!==this.scope.rzSliderModel&&void 0!==this.scope.rzSliderHigh,this.options.draggableRange=this.range&&this.options.draggableRange,this.options.draggableRangeOnly=this.range&&this.options.draggableRangeOnly,this.options.draggableRangeOnly&&(this.options.draggableRange=!0),this.options.showTicks=this.options.showTicks||this.options.showTicksValues,this.scope.showTicks=this.options.showTicks,this.options.showSelectionBar=this.options.showSelectionBar||this.options.showSelectionBarEnd||null!==this.options.showSelectionBarFromValue,this.options.stepsArray?(this.options.floor=0,this.options.ceil=this.options.stepsArray.length-1,this.options.step=1,this.options.translate?this.customTrFn=this.options.translate:this.customTrFn=function(a){return this.options.stepsArray[a]}):this.options.translate?this.customTrFn=this.options.translate:this.customTrFn=function(a){return String(a)},this.options.vertical&&(this.positionProperty="bottom",this.dimensionProperty="height")},resetSlider:function(){this.manageElementsStyle(),this.addAccessibility(),this.setMinAndMax(),this.updateCeilLab(),this.updateFloorLab(),this.unbindEvents(),this.manageEventsBindings(),this.setDisabledState(),this.calcViewDimensions()},initElemHandles:function(){a.forEach(this.sliderElem.children(),function(b,c){var d=a.element(b);switch(c){case 0:this.fullBar=d;break;case 1:this.selBar=d;break;case 2:this.minH=d;break;case 3:this.maxH=d;break;case 4:this.flrLab=d;break;case 5:this.ceilLab=d;break;case 6:this.minLab=d;break;case 7:this.maxLab=d;break;case 8:this.cmbLab=d;break;case 9:this.ticks=d}},this),this.selBar.rzsp=0,this.minH.rzsp=0,this.maxH.rzsp=0,this.flrLab.rzsp=0,this.ceilLab.rzsp=0,this.minLab.rzsp=0,this.maxLab.rzsp=0,this.cmbLab.rzsp=0},manageElementsStyle:function(){this.range?this.maxH.css("display",""):this.maxH.css("display","none"),this.alwaysHide(this.flrLab,this.options.showTicksValues||this.options.hideLimitLabels),this.alwaysHide(this.ceilLab,this.options.showTicksValues||this.options.hideLimitLabels),this.alwaysHide(this.minLab,this.options.showTicksValues||this.options.hidePointerLabels),this.alwaysHide(this.maxLab,this.options.showTicksValues||!this.range||this.options.hidePointerLabels),this.alwaysHide(this.cmbLab,this.options.showTicksValues||!this.range||this.options.hidePointerLabels),this.alwaysHide(this.selBar,!this.range&&!this.options.showSelectionBar),this.options.vertical&&this.sliderElem.addClass("rz-vertical"),this.options.draggableRange?this.selBar.addClass("rz-draggable"):this.selBar.removeClass("rz-draggable")},alwaysHide:function(a,b){a.rzAlwaysHide=b,b?this.hideEl(a):this.showEl(a)},manageEventsBindings:function(){this.options.disabled||this.options.readOnly?this.unbindEvents():this.bindEvents()},setDisabledState:function(){this.options.disabled?this.sliderElem.attr("disabled","disabled"):this.sliderElem.attr("disabled",null)},resetLabelsValue:function(){this.minLab.rzsv=void 0,this.maxLab.rzsv=void 0},initHandles:function(){this.updateLowHandle(this.valueToOffset(this.scope.rzSliderModel)),this.range&&this.updateHighHandle(this.valueToOffset(this.scope.rzSliderHigh)),this.updateSelectionBar(),this.range&&this.updateCmbLabel(),this.updateTicksScale()},translateFn:function(a,b,c,d){d=void 0===d?!0:d;var e=String(d?this.customTrFn(a,this.options.id,c):a),f=!1;(void 0===b.rzsv||b.rzsv.length!==e.length||b.rzsv.length>0&&0===b.rzsd)&&(f=!0,b.rzsv=e),b.html(e),f&&this.getDimension(b)},setMinAndMax:function(){this.step=+this.options.step,this.precision=+this.options.precision,this.minValue=this.options.floor,this.options.enforceStep&&(this.scope.rzSliderModel=this.roundStep(this.scope.rzSliderModel),this.range&&(this.scope.rzSliderHigh=this.roundStep(this.scope.rzSliderHigh))),null!=this.options.ceil?this.maxValue=this.options.ceil:this.maxValue=this.options.ceil=this.range?this.scope.rzSliderHigh:this.scope.rzSliderModel,this.options.enforceRange&&(this.scope.rzSliderModel=this.sanitizeValue(this.scope.rzSliderModel),this.range&&(this.scope.rzSliderHigh=this.sanitizeValue(this.scope.rzSliderHigh))),this.valueRange=this.maxValue-this.minValue},addAccessibility:function(){this.minH.attr("role","slider"),this.updateAriaAttributes(),!this.options.keyboardSupport||this.options.readOnly||this.options.disabled?this.minH.attr("tabindex",""):this.minH.attr("tabindex","0"),this.options.vertical&&this.minH.attr("aria-orientation","vertical"),this.range&&(this.maxH.attr("role","slider"),!this.options.keyboardSupport||this.options.readOnly||this.options.disabled?this.maxH.attr("tabindex",""):this.maxH.attr("tabindex","0"),this.options.vertical&&this.maxH.attr("aria-orientation","vertical"))},updateAriaAttributes:function(){this.minH.attr({"aria-valuenow":this.scope.rzSliderModel,"aria-valuetext":this.customTrFn(this.scope.rzSliderModel,this.options.id,"model"),"aria-valuemin":this.minValue,"aria-valuemax":this.maxValue}),this.range&&this.maxH.attr({"aria-valuenow":this.scope.rzSliderHigh,"aria-valuetext":this.customTrFn(this.scope.rzSliderHigh,this.options.id,"high"),"aria-valuemin":this.minValue,"aria-valuemax":this.maxValue})},calcViewDimensions:function(){var a=this.getDimension(this.minH);this.handleHalfDim=a/2,this.barDimension=this.getDimension(this.fullBar),this.maxPos=this.barDimension-a,this.getDimension(this.sliderElem),this.sliderElem.rzsp=this.sliderElem[0].getBoundingClientRect()[this.positionProperty],this.initHasRun&&(this.updateFloorLab(),this.updateCeilLab(),this.initHandles())},updateTicksScale:function(){if(this.options.showTicks){var a=Math.round((this.maxValue-this.minValue)/this.step)+1;this.scope.ticks=[];for(var b=0;a>b;b++){var c=this.roundStep(this.minValue+b*this.step),d={selected:this.isTickSelected(c)};d.selected&&this.options.getSelectionBarColor&&(d.style={"background-color":this.getSelectionBarColor()}),this.options.ticksTooltip&&(d.tooltip=this.options.ticksTooltip(c),d.tooltipPlacement=this.options.vertical?"right":"top"),this.options.showTicksValues&&(d.value=this.getDisplayValue(c,"tick-value"),this.options.ticksValuesTooltip&&(d.valueTooltip=this.options.ticksValuesTooltip(c),d.valueTooltipPlacement=this.options.vertical?"right":"top")),this.options.rightToLeft?this.scope.ticks.unshift(d):this.scope.ticks.push(d)}}},isTickSelected:function(a){if(!this.range)if(null!==this.options.showSelectionBarFromValue){var b=this.options.showSelectionBarFromValue;if(this.scope.rzSliderModel>b&&a>=b&&a<=this.scope.rzSliderModel)return!0;if(this.scope.rzSliderModel<b&&b>=a&&a>=this.scope.rzSliderModel)return!0}else if(this.options.showSelectionBarEnd){if(a>=this.scope.rzSliderModel)return!0}else if(this.options.showSelectionBar&&a<=this.scope.rzSliderModel)return!0;return this.range&&a>=this.scope.rzSliderModel&&a<=this.scope.rzSliderHigh?!0:!1},updateFloorLab:function(){this.translateFn(this.minValue,this.flrLab,"floor"),this.getDimension(this.flrLab);var a=this.options.rightToLeft?this.barDimension-this.flrLab.rzsd:0;this.setPosition(this.flrLab,a)},updateCeilLab:function(){this.translateFn(this.maxValue,this.ceilLab,"ceil"),this.getDimension(this.ceilLab);var a=this.options.rightToLeft?0:this.barDimension-this.ceilLab.rzsd;this.setPosition(this.ceilLab,a)},updateHandles:function(a,b){"rzSliderModel"===a?this.updateLowHandle(b):this.updateHighHandle(b),this.updateSelectionBar(),this.updateTicksScale(),this.range&&this.updateCmbLabel()},getHandleLabelPos:function(a,b){var c=this[a].rzsd,d=b-c/2+this.handleHalfDim,e=this.barDimension-c;return this.options.rightToLeft&&"minLab"===a||!this.options.rightToLeft&&"maxLab"===a?Math.min(d,e):Math.min(Math.max(d,0),e)},updateLowHandle:function(a){if(this.setPosition(this.minH,a),this.translateFn(this.scope.rzSliderModel,this.minLab,"model"),this.setPosition(this.minLab,this.getHandleLabelPos("minLab",a)),this.options.getPointerColor){var b=this.getPointerColor("min");this.scope.minPointerStyle={backgroundColor:b}}this.shFloorCeil()},updateHighHandle:function(a){if(this.setPosition(this.maxH,a),this.translateFn(this.scope.rzSliderHigh,this.maxLab,"high"),this.setPosition(this.maxLab,this.getHandleLabelPos("maxLab",a)),this.options.getPointerColor){var b=this.getPointerColor("max");this.scope.maxPointerStyle={backgroundColor:b}}this.shFloorCeil()},shFloorCeil:function(){var a=!1,b=!1,c=this.options.rightToLeft,d=this.flrLab.rzsp,e=this.flrLab.rzsd,f=this.minLab.rzsp,g=this.minLab.rzsd,h=this.maxLab.rzsp,i=this.maxLab.rzsd,j=this.ceilLab.rzsp,k=this.handleHalfDim,l=c?f+g>=d-e-5:d+e+5>=f,m=c?j+k+10>=f-g:f+g>=j-k-10,n=c?h>=d-e-k:d+e+k>=h,o=c?j+10>=h-i:h+i>=j-10;l?(a=!0,this.hideEl(this.flrLab)):(a=!1,this.showEl(this.flrLab)),m?(b=!0,this.hideEl(this.ceilLab)):(b=!1,this.showEl(this.ceilLab)),this.range&&(o?this.hideEl(this.ceilLab):b||this.showEl(this.ceilLab),n?this.hideEl(this.flrLab):a||this.showEl(this.flrLab))},updateSelectionBar:function(){var a=0,b=0,c=this.options.rightToLeft?!this.options.showSelectionBarEnd:this.options.showSelectionBarEnd,d=this.options.rightToLeft?this.maxH.rzsp+this.handleHalfDim:this.minH.rzsp+this.handleHalfDim;if(this.range)b=Math.abs(this.maxH.rzsp-this.minH.rzsp),a=d;else if(null!==this.options.showSelectionBarFromValue){var e=this.options.showSelectionBarFromValue,f=this.valueToOffset(e),g=this.options.rightToLeft?this.scope.rzSliderModel<=e:this.scope.rzSliderModel>e;g?(b=this.minH.rzsp-f,a=f+this.handleHalfDim):(b=f-this.minH.rzsp,a=this.minH.rzsp+this.handleHalfDim)}else c?(b=Math.abs(this.maxPos-this.minH.rzsp)+this.handleHalfDim,a=this.minH.rzsp+this.handleHalfDim):(b=Math.abs(this.maxH.rzsp-this.minH.rzsp)+this.handleHalfDim,a=0);if(this.setDimension(this.selBar,b),this.setPosition(this.selBar,a),this.options.getSelectionBarColor){var h=this.getSelectionBarColor();this.scope.barStyle={backgroundColor:h}}},getSelectionBarColor:function(){return this.range?this.options.getSelectionBarColor(this.scope.rzSliderModel,this.scope.rzSliderHigh):this.options.getSelectionBarColor(this.scope.rzSliderModel)},getPointerColor:function(a){return"max"===a?this.options.getPointerColor(this.scope.rzSliderHigh,a):this.options.getPointerColor(this.scope.rzSliderModel,a)},updateCmbLabel:function(){var a=null;if(a=this.options.rightToLeft?this.minLab.rzsp-this.minLab.rzsd-10<=this.maxLab.rzsp:this.minLab.rzsp+this.minLab.rzsd+10>=this.maxLab.rzsp){var b=this.getDisplayValue(this.scope.rzSliderModel,"model"),c=this.getDisplayValue(this.scope.rzSliderHigh,"high"),d="";d=b===c?b:this.options.rightToLeft?c+" - "+b:b+" - "+c,this.translateFn(d,this.cmbLab,"cmb",!1);var e=Math.min(Math.max(this.selBar.rzsp+this.selBar.rzsd/2-this.cmbLab.rzsd/2,0),this.barDimension-this.cmbLab.rzsd);this.setPosition(this.cmbLab,e),this.hideEl(this.minLab),this.hideEl(this.maxLab),this.showEl(this.cmbLab)}else this.showEl(this.maxLab),this.showEl(this.minLab),this.hideEl(this.cmbLab)},getDisplayValue:function(a,b){return this.customTrFn(a,this.options.id,b)},roundStep:function(a){var b=parseFloat((a-this.minValue)/this.step).toPrecision(12);b=Math.round(b)*this.step;var c=(this.minValue+b).toFixed(this.precision);return+c},hideEl:function(a){return a.css({opacity:0})},showEl:function(a){return a.rzAlwaysHide?a:a.css({opacity:1})},setPosition:function(a,b){a.rzsp=b;var c={};return c[this.positionProperty]=b+"px",a.css(c),b},getDimension:function(a){var b=a[0].getBoundingClientRect();return this.options.vertical?a.rzsd=(b.bottom-b.top)*this.options.scale:a.rzsd=(b.right-b.left)*this.options.scale,a.rzsd},setDimension:function(a,b){a.rzsd=b;var c={};return c[this.dimensionProperty]=b+"px",a.css(c),b},valueToOffset:function(a){return this.options.rightToLeft?(this.maxValue-this.sanitizeValue(a))*this.maxPos/this.valueRange||0:(this.sanitizeValue(a)-this.minValue)*this.maxPos/this.valueRange||0},sanitizeValue:function(a){return Math.min(Math.max(a,this.minValue),this.maxValue)},offsetToValue:function(a){return this.options.rightToLeft?(1-a/this.maxPos)*this.valueRange+this.minValue:a/this.maxPos*this.valueRange+this.minValue},getEventXY:function(a){var b=this.options.vertical?"clientY":"clientX";return b in a?a[b]:void 0===a.originalEvent?a.touches[0][b]:a.originalEvent.touches[0][b]},getEventPosition:function(a){var b=this.sliderElem.rzsp,c=0;return c=this.options.vertical?-this.getEventXY(a)+b:this.getEventXY(a)-b,(c-this.handleHalfDim)*this.options.scale},getEventNames:function(a){var b={moveEvent:"",endEvent:""};return a.touches||void 0!==a.originalEvent&&a.originalEvent.touches?(b.moveEvent="touchmove",b.endEvent="touchend"):(b.moveEvent="mousemove",b.endEvent="mouseup"),b},getNearestHandle:function(a){if(!this.range)return this.minH;var b=this.getEventPosition(a),c=Math.abs(b-this.minH.rzsp),d=Math.abs(b-this.maxH.rzsp);return d>c?this.minH:c>d?this.maxH:this.options.rightToLeft?b>this.minH.rzsp?this.minH:this.maxH:b<this.minH.rzsp?this.minH:this.maxH},focusElement:function(a){var b=0;a[b].focus()},bindEvents:function(){var b,c,d;this.options.draggableRange?(b="rzSliderDrag",c=this.onDragStart,d=this.onDragMove):(b="rzSliderModel",c=this.onStart,d=this.onMove),this.options.onlyBindHandles||(this.selBar.on("mousedown",a.bind(this,c,null,b)),this.selBar.on("mousedown",a.bind(this,d,this.selBar))),this.options.draggableRangeOnly?(this.minH.on("mousedown",a.bind(this,c,null,b)),this.maxH.on("mousedown",a.bind(this,c,null,b))):(this.minH.on("mousedown",a.bind(this,this.onStart,this.minH,"rzSliderModel")),this.range&&this.maxH.on("mousedown",a.bind(this,this.onStart,this.maxH,"rzSliderHigh")),this.options.onlyBindHandles||(this.fullBar.on("mousedown",a.bind(this,this.onStart,null,null)),this.fullBar.on("mousedown",a.bind(this,this.onMove,this.fullBar)),this.ticks.on("mousedown",a.bind(this,this.onStart,null,null)),this.ticks.on("mousedown",a.bind(this,this.onMove,this.ticks)))),this.options.onlyBindHandles||(this.selBar.on("touchstart",a.bind(this,c,null,b)),this.selBar.on("touchstart",a.bind(this,d,this.selBar))),this.options.draggableRangeOnly?(this.minH.on("touchstart",a.bind(this,c,null,b)),this.maxH.on("touchstart",a.bind(this,c,null,b))):(this.minH.on("touchstart",a.bind(this,this.onStart,this.minH,"rzSliderModel")),this.range&&this.maxH.on("touchstart",a.bind(this,this.onStart,this.maxH,"rzSliderHigh")),this.options.onlyBindHandles||(this.fullBar.on("touchstart",a.bind(this,this.onStart,null,null)),this.fullBar.on("touchstart",a.bind(this,this.onMove,this.fullBar)),this.ticks.on("touchstart",a.bind(this,this.onStart,null,null)),this.ticks.on("touchstart",a.bind(this,this.onMove,this.ticks)))),this.options.keyboardSupport&&(this.minH.on("focus",a.bind(this,this.onPointerFocus,this.minH,"rzSliderModel")),this.range&&this.maxH.on("focus",a.bind(this,this.onPointerFocus,this.maxH,"rzSliderHigh")))},unbindEvents:function(){this.minH.off(),this.maxH.off(),this.fullBar.off(),this.selBar.off(),this.ticks.off()},onStart:function(b,d,e){var f,g,h=this.getEventNames(e);e.stopPropagation(),e.preventDefault(),this.calcViewDimensions(),b?this.tracking=d:(b=this.getNearestHandle(e),this.tracking=b===this.minH?"rzSliderModel":"rzSliderHigh"),b.addClass("rz-active"),this.options.keyboardSupport&&this.focusElement(b),f=a.bind(this,this.dragging.active?this.onDragMove:this.onMove,b),g=a.bind(this,this.onEnd,f),c.on(h.moveEvent,f),c.one(h.endEvent,g),this.callOnStart()},onMove:function(a,b){var c,d=this.getEventPosition(b),e=this.options.rightToLeft?this.minValue:this.maxValue,f=this.options.rightToLeft?this.maxValue:this.minValue;0>=d?c=f:d>=this.maxPos?c=e:(c=this.offsetToValue(d),c=this.roundStep(c)),this.positionTrackingHandle(c)},onEnd:function(a,b){var d=this.getEventNames(b).moveEvent;this.options.keyboardSupport||(this.minH.removeClass("rz-active"),this.maxH.removeClass("rz-active"),this.tracking=""),this.dragging.active=!1,c.off(d,a),this.scope.$emit("slideEnded"),this.callOnEnd()},onPointerFocus:function(b,c){this.tracking=c,b.one("blur",a.bind(this,this.onPointerBlur,b)),b.on("keydown",a.bind(this,this.onKeyboardEvent)),b.addClass("rz-active")},onPointerBlur:function(a){a.off("keydown"),this.tracking="",a.removeClass("rz-active")},getKeyActions:function(a){var b=a+this.step,c=a-this.step,d=a+this.valueRange/10,e=a-this.valueRange/10,f={UP:b,DOWN:c,LEFT:c,RIGHT:b,PAGEUP:d,PAGEDOWN:e,HOME:this.minValue,END:this.maxValue};return this.options.rightToLeft&&(f.LEFT=b,f.RIGHT=c,this.options.vertical&&(f.UP=c,f.DOWN=b)),f},onKeyboardEvent:function(a){var b=this.scope[this.tracking],c=a.keyCode||a.which,d={38:"UP",40:"DOWN",37:"LEFT",39:"RIGHT",33:"PAGEUP",34:"PAGEDOWN",36:"HOME",35:"END"},e=this.getKeyActions(b),f=d[c],g=e[f];if(null!=g&&""!==this.tracking){a.preventDefault();var h=this.roundStep(this.sanitizeValue(g));if(this.options.draggableRangeOnly){var i,j,k=this.scope.rzSliderHigh-this.scope.rzSliderModel;"rzSliderModel"===this.tracking?(i=h,j=h+k,j>this.maxValue&&(j=this.maxValue,i=j-k)):(j=h,i=h-k,i<this.minValue&&(i=this.minValue,j=i+k)),this.positionTrackingBar(i,j)}else this.positionTrackingHandle(h)}},onDragStart:function(a,b,c){var d=this.getEventPosition(c);this.dragging={active:!0,value:this.offsetToValue(d),difference:this.scope.rzSliderHigh-this.scope.rzSliderModel,lowLimit:this.options.rightToLeft?this.minH.rzsp-d:d-this.minH.rzsp,highLimit:this.options.rightToLeft?d-this.maxH.rzsp:this.maxH.rzsp-d},this.onStart(a,b,c)},getValue:function(a,b,c,d){var e=this.options.rightToLeft,f=null;return f="min"===a?c?d?e?this.minValue:this.maxValue-this.dragging.difference:e?this.maxValue-this.dragging.difference:this.minValue:e?this.offsetToValue(b+this.dragging.lowLimit):this.offsetToValue(b-this.dragging.lowLimit):c?d?e?this.minValue+this.dragging.difference:this.maxValue:e?this.maxValue:this.minValue+this.dragging.difference:e?this.offsetToValue(b+this.dragging.lowLimit)+this.dragging.difference:this.offsetToValue(b-this.dragging.lowLimit)+this.dragging.difference,this.roundStep(f)},onDragMove:function(a,b){var c,d,e,f,g,h,i,j,k=this.getEventPosition(b);if(this.options.rightToLeft?(e=this.dragging.lowLimit,f=this.dragging.highLimit,i=this.maxH,j=this.minH):(e=this.dragging.highLimit,f=this.dragging.lowLimit,i=this.minH,j=this.maxH),g=f>=k,h=k>=this.maxPos-e,g){if(0===i.rzsp)return;c=this.getValue("min",k,!0,!1),d=this.getValue("max",k,!0,!1)}else if(h){if(j.rzsp===this.maxPos)return;d=this.getValue("max",k,!0,!0),c=this.getValue("min",k,!0,!0)}else c=this.getValue("min",k,!1),d=this.getValue("max",k,!1);this.positionTrackingBar(c,d)},positionTrackingBar:function(a,b){this.scope.rzSliderModel=a,this.scope.rzSliderHigh=b,this.updateHandles("rzSliderModel",this.valueToOffset(a)),this.updateHandles("rzSliderHigh",this.valueToOffset(b)),this.applyModel()},positionTrackingHandle:function(a){var b=!1;this.range&&(a=this.applyMinRange(a),"rzSliderModel"===this.tracking&&a>this.scope.rzSliderHigh?(this.options.noSwitching&&this.scope.rzSliderHigh!==this.minValue?a=this.applyMinRange(this.scope.rzSliderHigh):(this.scope[this.tracking]=this.scope.rzSliderHigh,this.updateHandles(this.tracking,this.maxH.rzsp),this.updateAriaAttributes(),this.tracking="rzSliderHigh",this.minH.removeClass("rz-active"),this.maxH.addClass("rz-active"),this.options.keyboardSupport&&this.focusElement(this.maxH)),b=!0):"rzSliderHigh"===this.tracking&&a<this.scope.rzSliderModel&&(this.options.noSwitching&&this.scope.rzSliderModel!==this.maxValue?a=this.applyMinRange(this.scope.rzSliderModel):(this.scope[this.tracking]=this.scope.rzSliderModel,this.updateHandles(this.tracking,this.minH.rzsp),this.updateAriaAttributes(),this.tracking="rzSliderModel",this.maxH.removeClass("rz-active"),this.minH.addClass("rz-active"),this.options.keyboardSupport&&this.focusElement(this.minH)),b=!0)),this.scope[this.tracking]!==a&&(this.scope[this.tracking]=a,this.updateHandles(this.tracking,this.valueToOffset(a)),this.updateAriaAttributes(),b=!0),b&&this.applyModel()},applyMinRange:function(a){if(0!==this.options.minRange){var b="rzSliderModel"===this.tracking?this.scope.rzSliderHigh:this.scope.rzSliderModel,c=Math.abs(a-b);if(c<this.options.minRange)return"rzSliderModel"===this.tracking?this.scope.rzSliderHigh-this.options.minRange:this.scope.rzSliderModel+this.options.minRange}return a},applyModel:function(){this.internalChange=!0,this.scope.$apply(),this.callOnChange(),this.internalChange=!1},callOnStart:function(){if(this.options.onStart){var a=this;this.scope.$evalAsync(function(){a.options.onStart(a.options.id,a.scope.rzSliderModel,a.scope.rzSliderHigh)})}},callOnChange:function(){if(this.options.onChange){var a=this;this.scope.$evalAsync(function(){a.options.onChange(a.options.id,a.scope.rzSliderModel,a.scope.rzSliderHigh)})}},callOnEnd:function(){if(this.options.onEnd){var a=this;this.scope.$evalAsync(function(){a.options.onEnd(a.options.id,a.scope.rzSliderModel,a.scope.rzSliderHigh)})}}},h}]).directive("rzslider",["RzSlider",function(a){return{restrict:"E",scope:{rzSliderModel:"=?",rzSliderHigh:"=?",rzSliderOptions:"&?",rzSliderTplUrl:"@"},templateUrl:function(a,b){return b.rzSliderTplUrl||"rzSliderTpl.html"},link:function(b,c){b.slider=new a(b,c)}}}]);return b.run(["$templateCache",function(a){a.put("rzSliderTpl.html",'<span class=rz-bar-wrapper><span class=rz-bar></span></span> <span class=rz-bar-wrapper><span class="rz-bar rz-selection" ng-style=barStyle></span></span> <span class="rz-pointer rz-pointer-min" ng-style=minPointerStyle></span> <span class="rz-pointer rz-pointer-max" ng-style=maxPointerStyle></span> <span class="rz-bubble rz-limit"></span> <span class="rz-bubble rz-limit"></span> <span class=rz-bubble></span> <span class=rz-bubble></span> <span class=rz-bubble></span><ul ng-show=showTicks class=rz-ticks><li ng-repeat="t in ticks track by $index" class=rz-tick ng-class="{\'rz-selected\': t.selected}" ng-style=t.style ng-attr-uib-tooltip="{{ t.tooltip }}" ng-attr-tooltip-placement={{t.tooltipPlacement}} ng-attr-tooltip-append-to-body="{{ t.tooltip ? true : undefined}}"><span ng-if="t.value != null" class=rz-tick-value ng-attr-uib-tooltip="{{ t.valueTooltip }}" ng-attr-tooltip-placement={{t.valueTooltipPlacement}}>{{ t.value }}</span></li></ul>')}]),b});
/**
 * angular-ui-notification - Angular.js service providing simple notifications using Bootstrap 3 styles with css transitions for animating
 * @author Alex_Crack
 * @version v0.1.0
 * @link https://github.com/alexcrack/angular-ui-notification
 * @license MIT
 */
angular.module("ui-notification",[]),angular.module("ui-notification").provider("Notification",function(){this.options={delay:5e3,startTop:10,startRight:10,verticalSpacing:10,horizontalSpacing:10,positionX:"right",positionY:"top",replaceMessage:!1,templateUrl:"angular-ui-notification.html"},this.setOptions=function(t){if(!angular.isObject(t))throw new Error("Options should be an object!");this.options=angular.extend({},this.options,t)},this.$get=["$timeout","$http","$compile","$templateCache","$rootScope","$injector","$sce","$q","$window",function(t,e,i,n,o,s,a,r,l){var p=this.options,c=p.startTop,u=p.startRight,d=p.verticalSpacing,m=p.horizontalSpacing,g=p.delay,f=[],h=!1,y=function(s,y){var v=r.defer();return"object"!=typeof s&&(s={message:s}),s.scope=s.scope?s.scope:o,s.template=s.templateUrl?s.templateUrl:p.templateUrl,s.delay=angular.isUndefined(s.delay)?g:s.delay,s.type=y||p.type||"",s.positionY=s.positionY?s.positionY:p.positionY,s.positionX=s.positionX?s.positionX:p.positionX,s.replaceMessage=s.replaceMessage?s.replaceMessage:p.replaceMessage,e.get(s.template,{cache:n}).success(function(e){var n=s.scope.$new();n.message=a.trustAsHtml(s.message),n.title=a.trustAsHtml(s.title),n.t=s.type.substr(0,1),n.delay=s.delay;var o=function(){for(var t=0,e=0,i=c,n=u,o=[],a=f.length-1;a>=0;a--){var r=f[a];if(s.replaceMessage&&a<f.length-1)r.addClass("killed");else{var l=parseInt(r[0].offsetHeight),p=parseInt(r[0].offsetWidth),g=o[r._positionY+r._positionX];h+l>window.innerHeight&&(g=c,e++,t=0);var h=i=g?0===t?g:g+d:c,y=n+e*(m+p);r.css(r._positionY,h+"px"),"center"==r._positionX?r.css("left",parseInt(window.innerWidth/2-p/2)+"px"):r.css(r._positionX,y+"px"),o[r._positionY+r._positionX]=h+l,t++}}},r=i(e)(n);r._positionY=s.positionY,r._positionX=s.positionX,r.addClass(s.type),r.bind("webkitTransitionEnd oTransitionEnd otransitionend transitionend msTransitionEnd click",function(t){t=t.originalEvent||t,("click"===t.type||"opacity"===t.propertyName&&t.elapsedTime>=1)&&(r.remove(),f.splice(f.indexOf(r),1),o())}),angular.isNumber(s.delay)&&t(function(){r.addClass("killed")},s.delay),angular.element(document.getElementsByTagName("body")).append(r);var p=-(parseInt(r[0].offsetHeight)+50);r.css(r._positionY,p+"px"),f.push(r),n._templateElement=r,n.kill=function(e){e?(f.splice(f.indexOf(n._templateElement),1),n._templateElement.remove(),t(o)):n._templateElement.addClass("killed")},t(o),h||(angular.element(l).bind("resize",function(){t(o)}),h=!0),v.resolve(n)}).error(function(t){throw new Error("Template ("+s.template+") could not be loaded. "+t)}),v.promise};return y.primary=function(t){return this(t,"primary")},y.error=function(t){return this(t,"error")},y.success=function(t){return this(t,"success")},y.info=function(t){return this(t,"info")},y.warning=function(t){return this(t,"warning")},y.clearAll=function(){angular.forEach(f,function(t){t.addClass("killed")})},y}]}),angular.module("ui-notification").run(["$templateCache",function(t){t.put("angular-ui-notification.html",'<div class="ui-notification"><h3 ng-show="title" ng-bind-html="title"></h3><div class="message" ng-bind-html="message"></div></div>')}]);
/**
 * ng-scrollbars 0.0.9
 */
(function () {
  'use strict';

  function ScrollBarsProvider() {
    this.defaults = {
      scrollButtons: {
        enable: true //enable scrolling buttons by default
      },
      axis: 'yx' //enable 2 axis scrollbars by default
    };

    // TODO: can we do this without jquery?
    $.mCustomScrollbar.defaults.scrollButtons = this.defaults.scrollButtons;
    $.mCustomScrollbar.defaults.axis = this.defaults.axis;

    this.$get = function ScrollBarsProvider() {
      return {
        defaults: this.defaults
      }
    }
  }

  function render(defaults, configuredDefaults, elem, scope) {

    elem = $(elem);

    elem.mCustomScrollbar('destroy');

    var config = {};
    if (scope.ngScrollbarsConfig) {
      config = scope.ngScrollbarsConfig;
    }

    // apply configured provider defaults only if the scope's config isn't defined (it has priority in that case)
    for (var setting in defaults) {
      if (defaults.hasOwnProperty(setting)) {

        switch (setting) {

          case 'scrollButtons':
            if (!config.hasOwnProperty(setting)) {
              configuredDefaults.scrollButtons = defaults[setting];
            }
            break;

          case 'axis':
            if (!config.hasOwnProperty(setting)) {
              configuredDefaults.axis = defaults[setting];
            }
            break;

          default:
            if (!config.hasOwnProperty(setting)) {
              config[setting] = defaults[setting];
            }
            break;

        }
      }
    }

    elem.mCustomScrollbar(config);
  }

  function ScrollBarsDirective(ScrollBars) {
    return {
      scope: {
        ngScrollbarsConfig: '=?',
        ngScrollbarsUpdate: '=?',
        element: '=?'
      },
      link: function (scope, elem, attrs) {

        scope.elem = $(elem);

        var defaults = ScrollBars.defaults;
        var configuredDefaults = $.mCustomScrollbar.defaults;

        scope.ngScrollbarsUpdate = function () {
          $(elem).mCustomScrollbar.apply(elem, arguments);
        };

        scope.$watch('ngScrollbarsConfig', function (newVal, oldVal) {
          if (newVal !== undefined) {
            render(defaults, configuredDefaults, elem, scope);
          }
        });

        render(defaults, configuredDefaults, elem, scope);
      }
    };
  }

  angular.module('ngScrollbars', [])
    .provider('ScrollBars', ScrollBarsProvider)
    .directive('ngScrollbars', ScrollBarsDirective);

  ScrollBarsProvider.$inject = [];
  ScrollBarsDirective.$inject = ['ScrollBars'];

})();
/*! ngImgCrop v0.3.2 License: MIT */!function(){"use strict";var e=angular.module("ngImgCrop",[]);e.factory("cropAreaCircle",["cropArea",function(e){var t=function(){e.apply(this,arguments),this._boxResizeBaseSize=20,this._boxResizeNormalRatio=.9,this._boxResizeHoverRatio=1.2,this._iconMoveNormalRatio=.9,this._iconMoveHoverRatio=1.2,this._boxResizeNormalSize=this._boxResizeBaseSize*this._boxResizeNormalRatio,this._boxResizeHoverSize=this._boxResizeBaseSize*this._boxResizeHoverRatio,this._posDragStartX=0,this._posDragStartY=0,this._posResizeStartX=0,this._posResizeStartY=0,this._posResizeStartSize=0,this._boxResizeIsHover=!1,this._areaIsHover=!1,this._boxResizeIsDragging=!1,this._areaIsDragging=!1};return t.prototype=new e,t.prototype._calcCirclePerimeterCoords=function(e){var t=this._size/2,i=e*(Math.PI/180),r=this._x+t*Math.cos(i),s=this._y+t*Math.sin(i);return[r,s]},t.prototype._calcResizeIconCenterCoords=function(){return this._calcCirclePerimeterCoords(-45)},t.prototype._isCoordWithinArea=function(e){return Math.sqrt((e[0]-this._x)*(e[0]-this._x)+(e[1]-this._y)*(e[1]-this._y))<this._size/2},t.prototype._isCoordWithinBoxResize=function(e){var t=this._calcResizeIconCenterCoords(),i=this._boxResizeHoverSize/2;return e[0]>t[0]-i&&e[0]<t[0]+i&&e[1]>t[1]-i&&e[1]<t[1]+i},t.prototype._drawArea=function(e,t,i){e.arc(t[0],t[1],i/2,0,2*Math.PI)},t.prototype.draw=function(){e.prototype.draw.apply(this,arguments),this._cropCanvas.drawIconMove([this._x,this._y],this._areaIsHover?this._iconMoveHoverRatio:this._iconMoveNormalRatio),this._cropCanvas.drawIconResizeBoxNESW(this._calcResizeIconCenterCoords(),this._boxResizeBaseSize,this._boxResizeIsHover?this._boxResizeHoverRatio:this._boxResizeNormalRatio)},t.prototype.processMouseMove=function(e,t){var i="default",r=!1;if(this._boxResizeIsHover=!1,this._areaIsHover=!1,this._areaIsDragging)this._x=e-this._posDragStartX,this._y=t-this._posDragStartY,this._areaIsHover=!0,i="move",r=!0,this._events.trigger("area-move");else if(this._boxResizeIsDragging){i="nesw-resize";var s,o,a;o=e-this._posResizeStartX,a=this._posResizeStartY-t,s=o>a?this._posResizeStartSize+2*a:this._posResizeStartSize+2*o,this._size=Math.max(this._minSize,s),this._boxResizeIsHover=!0,r=!0,this._events.trigger("area-resize")}else this._isCoordWithinBoxResize([e,t])?(i="nesw-resize",this._areaIsHover=!1,this._boxResizeIsHover=!0,r=!0):this._isCoordWithinArea([e,t])&&(i="move",this._areaIsHover=!0,r=!0);return this._dontDragOutside(),angular.element(this._ctx.canvas).css({cursor:i}),r},t.prototype.processMouseDown=function(e,t){this._isCoordWithinBoxResize([e,t])?(this._areaIsDragging=!1,this._areaIsHover=!1,this._boxResizeIsDragging=!0,this._boxResizeIsHover=!0,this._posResizeStartX=e,this._posResizeStartY=t,this._posResizeStartSize=this._size,this._events.trigger("area-resize-start")):this._isCoordWithinArea([e,t])&&(this._areaIsDragging=!0,this._areaIsHover=!0,this._boxResizeIsDragging=!1,this._boxResizeIsHover=!1,this._posDragStartX=e-this._x,this._posDragStartY=t-this._y,this._events.trigger("area-move-start"))},t.prototype.processMouseUp=function(){this._areaIsDragging&&(this._areaIsDragging=!1,this._events.trigger("area-move-end")),this._boxResizeIsDragging&&(this._boxResizeIsDragging=!1,this._events.trigger("area-resize-end")),this._areaIsHover=!1,this._boxResizeIsHover=!1,this._posDragStartX=0,this._posDragStartY=0},t}]),e.factory("cropAreaSquare",["cropArea",function(e){var t=function(){e.apply(this,arguments),this._resizeCtrlBaseRadius=10,this._resizeCtrlNormalRatio=.75,this._resizeCtrlHoverRatio=1,this._iconMoveNormalRatio=.9,this._iconMoveHoverRatio=1.2,this._resizeCtrlNormalRadius=this._resizeCtrlBaseRadius*this._resizeCtrlNormalRatio,this._resizeCtrlHoverRadius=this._resizeCtrlBaseRadius*this._resizeCtrlHoverRatio,this._posDragStartX=0,this._posDragStartY=0,this._posResizeStartX=0,this._posResizeStartY=0,this._posResizeStartSize=0,this._resizeCtrlIsHover=-1,this._areaIsHover=!1,this._resizeCtrlIsDragging=-1,this._areaIsDragging=!1};return t.prototype=new e,t.prototype._calcSquareCorners=function(){var e=this._size/2;return[[this._x-e,this._y-e],[this._x+e,this._y-e],[this._x-e,this._y+e],[this._x+e,this._y+e]]},t.prototype._calcSquareDimensions=function(){var e=this._size/2;return{left:this._x-e,top:this._y-e,right:this._x+e,bottom:this._y+e}},t.prototype._isCoordWithinArea=function(e){var t=this._calcSquareDimensions();return e[0]>=t.left&&e[0]<=t.right&&e[1]>=t.top&&e[1]<=t.bottom},t.prototype._isCoordWithinResizeCtrl=function(e){for(var t=this._calcSquareCorners(),i=-1,r=0,s=t.length;s>r;r++){var o=t[r];if(e[0]>o[0]-this._resizeCtrlHoverRadius&&e[0]<o[0]+this._resizeCtrlHoverRadius&&e[1]>o[1]-this._resizeCtrlHoverRadius&&e[1]<o[1]+this._resizeCtrlHoverRadius){i=r;break}}return i},t.prototype._drawArea=function(e,t,i){var r=i/2;e.rect(t[0]-r,t[1]-r,i,i)},t.prototype.draw=function(){e.prototype.draw.apply(this,arguments),this._cropCanvas.drawIconMove([this._x,this._y],this._areaIsHover?this._iconMoveHoverRatio:this._iconMoveNormalRatio);for(var t=this._calcSquareCorners(),i=0,r=t.length;r>i;i++){var s=t[i];this._cropCanvas.drawIconResizeCircle(s,this._resizeCtrlBaseRadius,this._resizeCtrlIsHover===i?this._resizeCtrlHoverRatio:this._resizeCtrlNormalRatio)}},t.prototype.processMouseMove=function(e,t){var i="default",r=!1;if(this._resizeCtrlIsHover=-1,this._areaIsHover=!1,this._areaIsDragging)this._x=e-this._posDragStartX,this._y=t-this._posDragStartY,this._areaIsHover=!0,i="move",r=!0,this._events.trigger("area-move");else if(this._resizeCtrlIsDragging>-1){var s,o;switch(this._resizeCtrlIsDragging){case 0:s=-1,o=-1,i="nwse-resize";break;case 1:s=1,o=-1,i="nesw-resize";break;case 2:s=-1,o=1,i="nesw-resize";break;case 3:s=1,o=1,i="nwse-resize"}var a,n=(e-this._posResizeStartX)*s,h=(t-this._posResizeStartY)*o;a=n>h?this._posResizeStartSize+h:this._posResizeStartSize+n;var c=this._size;this._size=Math.max(this._minSize,a);var l=(this._size-c)/2;this._x+=l*s,this._y+=l*o,this._resizeCtrlIsHover=this._resizeCtrlIsDragging,r=!0,this._events.trigger("area-resize")}else{var u=this._isCoordWithinResizeCtrl([e,t]);if(u>-1){switch(u){case 0:i="nwse-resize";break;case 1:i="nesw-resize";break;case 2:i="nesw-resize";break;case 3:i="nwse-resize"}this._areaIsHover=!1,this._resizeCtrlIsHover=u,r=!0}else this._isCoordWithinArea([e,t])&&(i="move",this._areaIsHover=!0,r=!0)}return this._dontDragOutside(),angular.element(this._ctx.canvas).css({cursor:i}),r},t.prototype.processMouseDown=function(e,t){var i=this._isCoordWithinResizeCtrl([e,t]);i>-1?(this._areaIsDragging=!1,this._areaIsHover=!1,this._resizeCtrlIsDragging=i,this._resizeCtrlIsHover=i,this._posResizeStartX=e,this._posResizeStartY=t,this._posResizeStartSize=this._size,this._events.trigger("area-resize-start")):this._isCoordWithinArea([e,t])&&(this._areaIsDragging=!0,this._areaIsHover=!0,this._resizeCtrlIsDragging=-1,this._resizeCtrlIsHover=-1,this._posDragStartX=e-this._x,this._posDragStartY=t-this._y,this._events.trigger("area-move-start"))},t.prototype.processMouseUp=function(){this._areaIsDragging&&(this._areaIsDragging=!1,this._events.trigger("area-move-end")),this._resizeCtrlIsDragging>-1&&(this._resizeCtrlIsDragging=-1,this._events.trigger("area-resize-end")),this._areaIsHover=!1,this._resizeCtrlIsHover=-1,this._posDragStartX=0,this._posDragStartY=0},t}]),e.factory("cropArea",["cropCanvas",function(e){var t=function(t,i){this._ctx=t,this._events=i,this._minSize=80,this._cropCanvas=new e(t),this._image=new Image,this._x=0,this._y=0,this._size=200};return t.prototype.getImage=function(){return this._image},t.prototype.setImage=function(e){this._image=e},t.prototype.getX=function(){return this._x},t.prototype.setX=function(e){this._x=e,this._dontDragOutside()},t.prototype.getY=function(){return this._y},t.prototype.setY=function(e){this._y=e,this._dontDragOutside()},t.prototype.getSize=function(){return this._size},t.prototype.setSize=function(e){this._size=Math.max(this._minSize,e),this._dontDragOutside()},t.prototype.getMinSize=function(){return this._minSize},t.prototype.setMinSize=function(e){this._minSize=e,this._size=Math.max(this._minSize,this._size),this._dontDragOutside()},t.prototype._dontDragOutside=function(){var e=this._ctx.canvas.height,t=this._ctx.canvas.width;this._size>t&&(this._size=t),this._size>e&&(this._size=e),this._x<this._size/2&&(this._x=this._size/2),this._x>t-this._size/2&&(this._x=t-this._size/2),this._y<this._size/2&&(this._y=this._size/2),this._y>e-this._size/2&&(this._y=e-this._size/2)},t.prototype._drawArea=function(){},t.prototype.draw=function(){this._cropCanvas.drawCropArea(this._image,[this._x,this._y],this._size,this._drawArea)},t.prototype.processMouseMove=function(){},t.prototype.processMouseDown=function(){},t.prototype.processMouseUp=function(){},t}]),e.factory("cropCanvas",[function(){var e=[[-.5,-2],[-3,-4.5],[-.5,-7],[-7,-7],[-7,-.5],[-4.5,-3],[-2,-.5]],t=[[.5,-2],[3,-4.5],[.5,-7],[7,-7],[7,-.5],[4.5,-3],[2,-.5]],i=[[-.5,2],[-3,4.5],[-.5,7],[-7,7],[-7,.5],[-4.5,3],[-2,.5]],r=[[.5,2],[3,4.5],[.5,7],[7,7],[7,.5],[4.5,3],[2,.5]],s=[[-1.5,-2.5],[-1.5,-6],[-5,-6],[0,-11],[5,-6],[1.5,-6],[1.5,-2.5]],o=[[-2.5,-1.5],[-6,-1.5],[-6,-5],[-11,0],[-6,5],[-6,1.5],[-2.5,1.5]],a=[[-1.5,2.5],[-1.5,6],[-5,6],[0,11],[5,6],[1.5,6],[1.5,2.5]],n=[[2.5,-1.5],[6,-1.5],[6,-5],[11,0],[6,5],[6,1.5],[2.5,1.5]],h={areaOutline:"#fff",resizeBoxStroke:"#fff",resizeBoxFill:"#444",resizeBoxArrowFill:"#fff",resizeCircleStroke:"#fff",resizeCircleFill:"#444",moveIconFill:"#fff"};return function(c){var l=function(e,t,i){return[i*e[0]+t[0],i*e[1]+t[1]]},u=function(e,t,i,r){c.save(),c.fillStyle=t,c.beginPath();var s,o=l(e[0],i,r);c.moveTo(o[0],o[1]);for(var a in e)a>0&&(s=l(e[a],i,r),c.lineTo(s[0],s[1]));c.lineTo(o[0],o[1]),c.fill(),c.closePath(),c.restore()};this.drawIconMove=function(e,t){u(s,h.moveIconFill,e,t),u(o,h.moveIconFill,e,t),u(a,h.moveIconFill,e,t),u(n,h.moveIconFill,e,t)},this.drawIconResizeCircle=function(e,t,i){var r=t*i;c.save(),c.strokeStyle=h.resizeCircleStroke,c.lineWidth=2,c.fillStyle=h.resizeCircleFill,c.beginPath(),c.arc(e[0],e[1],r,0,2*Math.PI),c.fill(),c.stroke(),c.closePath(),c.restore()},this.drawIconResizeBoxBase=function(e,t,i){var r=t*i;c.save(),c.strokeStyle=h.resizeBoxStroke,c.lineWidth=2,c.fillStyle=h.resizeBoxFill,c.fillRect(e[0]-r/2,e[1]-r/2,r,r),c.strokeRect(e[0]-r/2,e[1]-r/2,r,r),c.restore()},this.drawIconResizeBoxNESW=function(e,r,s){this.drawIconResizeBoxBase(e,r,s),u(t,h.resizeBoxArrowFill,e,s),u(i,h.resizeBoxArrowFill,e,s)},this.drawIconResizeBoxNWSE=function(t,i,s){this.drawIconResizeBoxBase(t,i,s),u(e,h.resizeBoxArrowFill,t,s),u(r,h.resizeBoxArrowFill,t,s)},this.drawCropArea=function(e,t,i,r){var s=e.width/c.canvas.width,o=e.height/c.canvas.height,a=t[0]-i/2,n=t[1]-i/2;c.save(),c.strokeStyle=h.areaOutline,c.lineWidth=2,c.beginPath(),r(c,t,i),c.stroke(),c.clip(),i>0&&c.drawImage(e,a*s,n*o,i*s,i*o,a,n,i,i),c.beginPath(),r(c,t,i),c.stroke(),c.clip(),c.restore()}}}]),e.service("cropEXIF",[function(){function e(e){return!!e.exifdata}function t(e,t){t=t||e.match(/^data\:([^\;]+)\;base64,/im)[1]||"",e=e.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var i=atob(e),r=i.length,s=new ArrayBuffer(r),o=new Uint8Array(s),a=0;r>a;a++)o[a]=i.charCodeAt(a);return s}function i(e,t){var i=new XMLHttpRequest;i.open("GET",e,!0),i.responseType="blob",i.onload=function(){(200==this.status||0===this.status)&&t(this.response)},i.send()}function r(e,r){function a(t){var i=s(t),a=o(t);e.exifdata=i||{},e.iptcdata=a||{},r&&r.call(e)}if(e.src)if(/^data\:/i.test(e.src)){var n=t(e.src);a(n)}else if(/^blob\:/i.test(e.src)){var h=new FileReader;h.onload=function(e){a(e.target.result)},i(e.src,function(e){h.readAsArrayBuffer(e)})}else{var c=new XMLHttpRequest;c.onload=function(){if(200!=this.status&&0!==this.status)throw"Could not load image";a(c.response),c=null},c.open("GET",e.src,!0),c.responseType="arraybuffer",c.send(null)}else if(window.FileReader&&(e instanceof window.Blob||e instanceof window.File)){var h=new FileReader;h.onload=function(e){u&&console.log("Got file of length "+e.target.result.byteLength),a(e.target.result)},h.readAsArrayBuffer(e)}}function s(e){var t=new DataView(e);if(u&&console.log("Got file of length "+e.byteLength),255!=t.getUint8(0)||216!=t.getUint8(1))return u&&console.log("Not a valid JPEG"),!1;for(var i,r=2,s=e.byteLength;s>r;){if(255!=t.getUint8(r))return u&&console.log("Not a valid marker at offset "+r+", found: "+t.getUint8(r)),!1;if(i=t.getUint8(r+1),u&&console.log(i),225==i)return u&&console.log("Found 0xFFE1 marker"),l(t,r+4,t.getUint16(r+2)-2);r+=2+t.getUint16(r+2)}}function o(e){var t=new DataView(e);if(u&&console.log("Got file of length "+e.byteLength),255!=t.getUint8(0)||216!=t.getUint8(1))return u&&console.log("Not a valid JPEG"),!1;for(var i=2,r=e.byteLength,s=function(e,t){return 56===e.getUint8(t)&&66===e.getUint8(t+1)&&73===e.getUint8(t+2)&&77===e.getUint8(t+3)&&4===e.getUint8(t+4)&&4===e.getUint8(t+5)};r>i;){if(s(t,i)){var o=t.getUint8(i+7);o%2!==0&&(o+=1),0===o&&(o=4);var n=i+8+o,h=t.getUint16(i+6+o);return a(e,n,h)}i++}}function a(e,t,i){for(var r,s,o,a,n,h=new DataView(e),l={},u=t;t+i>u;)28===h.getUint8(u)&&2===h.getUint8(u+1)&&(a=h.getUint8(u+2),a in _&&(o=h.getInt16(u+3),n=o+5,s=_[a],r=c(h,u+5,o),l.hasOwnProperty(s)?l[s]instanceof Array?l[s].push(r):l[s]=[l[s],r]:l[s]=r)),u++;return l}function n(e,t,i,r,s){var o,a,n,c=e.getUint16(i,!s),l={};for(n=0;c>n;n++)o=i+12*n+2,a=r[e.getUint16(o,!s)],!a&&u&&console.log("Unknown tag: "+e.getUint16(o,!s)),l[a]=h(e,o,t,i,s);return l}function h(e,t,i,r,s){var o,a,n,h,l,u,g=e.getUint16(t+2,!s),d=e.getUint32(t+4,!s),f=e.getUint32(t+8,!s)+i;switch(g){case 1:case 7:if(1==d)return e.getUint8(t+8,!s);for(o=d>4?f:t+8,a=[],h=0;d>h;h++)a[h]=e.getUint8(o+h);return a;case 2:return o=d>4?f:t+8,c(e,o,d-1);case 3:if(1==d)return e.getUint16(t+8,!s);for(o=d>2?f:t+8,a=[],h=0;d>h;h++)a[h]=e.getUint16(o+2*h,!s);return a;case 4:if(1==d)return e.getUint32(t+8,!s);for(a=[],h=0;d>h;h++)a[h]=e.getUint32(f+4*h,!s);return a;case 5:if(1==d)return l=e.getUint32(f,!s),u=e.getUint32(f+4,!s),n=new Number(l/u),n.numerator=l,n.denominator=u,n;for(a=[],h=0;d>h;h++)l=e.getUint32(f+8*h,!s),u=e.getUint32(f+4+8*h,!s),a[h]=new Number(l/u),a[h].numerator=l,a[h].denominator=u;return a;case 9:if(1==d)return e.getInt32(t+8,!s);for(a=[],h=0;d>h;h++)a[h]=e.getInt32(f+4*h,!s);return a;case 10:if(1==d)return e.getInt32(f,!s)/e.getInt32(f+4,!s);for(a=[],h=0;d>h;h++)a[h]=e.getInt32(f+8*h,!s)/e.getInt32(f+4+8*h,!s);return a}}function c(e,t,i){for(var r="",s=t;t+i>s;s++)r+=String.fromCharCode(e.getUint8(s));return r}function l(e,t){if("Exif"!=c(e,t,4))return u&&console.log("Not valid EXIF data! "+c(e,t,4)),!1;var i,r,s,o,a,h=t+6;if(18761==e.getUint16(h))i=!1;else{if(19789!=e.getUint16(h))return u&&console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"),!1;i=!0}if(42!=e.getUint16(h+2,!i))return u&&console.log("Not valid TIFF data! (no 0x002A)"),!1;var l=e.getUint32(h+4,!i);if(8>l)return u&&console.log("Not valid TIFF data! (First offset less than 8)",e.getUint32(h+4,!i)),!1;if(r=n(e,h,h+l,d,i),r.ExifIFDPointer){o=n(e,h,h+r.ExifIFDPointer,g,i);for(s in o){switch(s){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":o[s]=p[s][o[s]];break;case"ExifVersion":case"FlashpixVersion":o[s]=String.fromCharCode(o[s][0],o[s][1],o[s][2],o[s][3]);break;case"ComponentsConfiguration":o[s]=p.Components[o[s][0]]+p.Components[o[s][1]]+p.Components[o[s][2]]+p.Components[o[s][3]]}r[s]=o[s]}}if(r.GPSInfoIFDPointer){a=n(e,h,h+r.GPSInfoIFDPointer,f,i);for(s in a){switch(s){case"GPSVersionID":a[s]=a[s][0]+"."+a[s][1]+"."+a[s][2]+"."+a[s][3]}r[s]=a[s]}}return r}var u=!1,g=this.Tags={36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",40965:"InteroperabilityIFDPointer",42016:"ImageUniqueID"},d=this.TiffTags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright"},f=this.GPSTags={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential"},p=this.StringValues={ExposureProgram:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}},_={120:"caption",110:"credit",25:"keywords",55:"dateCreated",80:"byline",85:"bylineTitle",122:"captionWriter",105:"headline",116:"copyright",15:"category"};this.getData=function(t,i){return(t instanceof Image||t instanceof HTMLImageElement)&&!t.complete?!1:(e(t)?i&&i.call(t):r(t,i),!0)},this.getTag=function(t,i){return e(t)?t.exifdata[i]:void 0},this.getAllTags=function(t){if(!e(t))return{};var i,r=t.exifdata,s={};for(i in r)r.hasOwnProperty(i)&&(s[i]=r[i]);return s},this.pretty=function(t){if(!e(t))return"";var i,r=t.exifdata,s="";for(i in r)r.hasOwnProperty(i)&&(s+="object"==typeof r[i]?r[i]instanceof Number?i+" : "+r[i]+" ["+r[i].numerator+"/"+r[i].denominator+"]\r\n":i+" : ["+r[i].length+" values]\r\n":i+" : "+r[i]+"\r\n");return s},this.readFromBinaryFile=function(e){return s(e)}}]),e.factory("cropHost",["$document","cropAreaCircle","cropAreaSquare","cropEXIF",function(e,t,i,r){var s=function(e){var t=e.getBoundingClientRect(),i=document.body,r=document.documentElement,s=window.pageYOffset||r.scrollTop||i.scrollTop,o=window.pageXOffset||r.scrollLeft||i.scrollLeft,a=r.clientTop||i.clientTop||0,n=r.clientLeft||i.clientLeft||0,h=t.top+s-a,c=t.left+o-n;return{top:Math.round(h),left:Math.round(c)}};return function(o,a,n){function h(){c.clearRect(0,0,c.canvas.width,c.canvas.height),null!==l&&(c.drawImage(l,0,0,c.canvas.width,c.canvas.height),c.save(),c.fillStyle="rgba(0, 0, 0, 0.65)",c.fillRect(0,0,c.canvas.width,c.canvas.height),c.restore(),u.draw())}var c=null,l=null,u=null,g=[100,100],d=[300,300],f=200,p="image/png",_=null,m=function(){if(null!==l){u.setImage(l);var e=[l.width,l.height],t=l.width/l.height,i=e;i[0]>d[0]?(i[0]=d[0],i[1]=i[0]/t):i[0]<g[0]&&(i[0]=g[0],i[1]=i[0]/t),i[1]>d[1]?(i[1]=d[1],i[0]=i[1]*t):i[1]<g[1]&&(i[1]=g[1],i[0]=i[1]*t),o.prop("width",i[0]).prop("height",i[1]).css({"margin-left":-i[0]/2+"px","margin-top":-i[1]/2+"px"}),u.setX(c.canvas.width/2),u.setY(c.canvas.height/2),u.setSize(Math.min(200,c.canvas.width/2,c.canvas.height/2))}else o.prop("width",0).prop("height",0).css({"margin-top":0});h()},v=function(e){return angular.isDefined(e.changedTouches)?e.changedTouches:e.originalEvent.changedTouches},S=function(e){if(null!==l){var t,i,r=s(c.canvas);"touchmove"===e.type?(t=v(e)[0].pageX,i=v(e)[0].pageY):(t=e.pageX,i=e.pageY),u.processMouseMove(t-r.left,i-r.top),h()}},z=function(e){if(e.preventDefault(),e.stopPropagation(),null!==l){var t,i,r=s(c.canvas);"touchstart"===e.type?(t=v(e)[0].pageX,i=v(e)[0].pageY):(t=e.pageX,i=e.pageY),u.processMouseDown(t-r.left,i-r.top),h()}},I=function(e){if(null!==l){var t,i,r=s(c.canvas);"touchend"===e.type?(t=v(e)[0].pageX,i=v(e)[0].pageY):(t=e.pageX,i=e.pageY),u.processMouseUp(t-r.left,i-r.top),h()}};this.getResultImageDataURI=function(){var e,t;return t=angular.element("<canvas></canvas>")[0],e=t.getContext("2d"),t.width=f,t.height=f,null!==l&&e.drawImage(l,(u.getX()-u.getSize()/2)*(l.width/c.canvas.width),(u.getY()-u.getSize()/2)*(l.height/c.canvas.height),u.getSize()*(l.width/c.canvas.width),u.getSize()*(l.height/c.canvas.height),0,0,f,f),null!==_?t.toDataURL(p,_):t.toDataURL(p)},this.setNewImageSource=function(e){if(l=null,m(),n.trigger("image-updated"),e){var t=new Image;"http"===e.substring(0,4).toLowerCase()&&(t.crossOrigin="anonymous"),t.onload=function(){n.trigger("load-done"),r.getData(t,function(){var e=r.getTag(t,"Orientation");if([3,6,8].indexOf(e)>-1){var i=document.createElement("canvas"),s=i.getContext("2d"),o=t.width,a=t.height,h=0,c=0,u=0;switch(e){case 3:h=-t.width,c=-t.height,u=180;break;case 6:o=t.height,a=t.width,c=-t.height,u=90;break;case 8:o=t.height,a=t.width,h=-t.width,u=270}i.width=o,i.height=a,s.rotate(u*Math.PI/180),s.drawImage(t,h,c),l=new Image,l.src=i.toDataURL("image/png")}else l=t;m(),n.trigger("image-updated")})},t.onerror=function(){n.trigger("load-error")},n.trigger("load-start"),t.src=e}},this.setMaxDimensions=function(e,t){if(d=[e,t],null!==l){var i=c.canvas.width,r=c.canvas.height,s=[l.width,l.height],a=l.width/l.height,n=s;n[0]>d[0]?(n[0]=d[0],n[1]=n[0]/a):n[0]<g[0]&&(n[0]=g[0],n[1]=n[0]/a),n[1]>d[1]?(n[1]=d[1],n[0]=n[1]*a):n[1]<g[1]&&(n[1]=g[1],n[0]=n[1]*a),o.prop("width",n[0]).prop("height",n[1]).css({"margin-left":-n[0]/2+"px","margin-top":-n[1]/2+"px"});var f=c.canvas.width/i,p=c.canvas.height/r,_=Math.min(f,p);u.setX(u.getX()*f),u.setY(u.getY()*p),u.setSize(u.getSize()*_)}else o.prop("width",0).prop("height",0).css({"margin-top":0});h()},this.setAreaMinSize=function(e){e=parseInt(e,10),isNaN(e)||(u.setMinSize(e),h())},this.setResultImageSize=function(e){e=parseInt(e,10),isNaN(e)||(f=e)},this.setResultImageFormat=function(e){p=e},this.setResultImageQuality=function(e){e=parseFloat(e),!isNaN(e)&&e>=0&&1>=e&&(_=e)},this.setAreaType=function(e){var r=u.getSize(),s=u.getMinSize(),o=u.getX(),a=u.getY(),g=t;"square"===e&&(g=i),u=new g(c,n),u.setMinSize(s),u.setSize(r),u.setX(o),u.setY(a),null!==l&&u.setImage(l),h()},c=o[0].getContext("2d"),u=new t(c,n),e.on("mousemove",S),o.on("mousedown",z),e.on("mouseup",I),e.on("touchmove",S),o.on("touchstart",z),e.on("touchend",I),this.destroy=function(){e.off("mousemove",S),o.off("mousedown",z),e.off("mouseup",S),e.off("touchmove",S),o.off("touchstart",z),e.off("touchend",S),o.remove()}}}]),e.factory("cropPubSub",[function(){return function(){var e={};this.on=function(t,i){return t.split(" ").forEach(function(t){e[t]||(e[t]=[]),e[t].push(i)}),this},this.trigger=function(t,i){return angular.forEach(e[t],function(e){e.call(null,i)}),this}}}]),e.directive("imgCrop",["$timeout","cropHost","cropPubSub",function(e,t,i){return{restrict:"E",scope:{image:"=",resultImage:"=",changeOnFly:"=",areaType:"@",areaMinSize:"=",resultImageSize:"=",resultImageFormat:"@",resultImageQuality:"=",onChange:"&",onLoadBegin:"&",onLoadDone:"&",onLoadError:"&"},template:"<canvas></canvas>",controller:["$scope",function(e){e.events=new i}],link:function(i,r){var s,o=i.events,a=new t(r.find("canvas"),{},o),n=function(e){var t=a.getResultImageDataURI();s!==t&&(s=t,angular.isDefined(e.resultImage)&&(e.resultImage=t),e.onChange({$dataURI:e.resultImage}))},h=function(t){return function(){e(function(){i.$apply(function(e){t(e)})})}};o.on("load-start",h(function(e){e.onLoadBegin({})})).on("load-done",h(function(e){e.onLoadDone({})})).on("load-error",h(function(e){e.onLoadError({})})).on("area-move area-resize",h(function(e){e.changeOnFly&&n(e)})).on("area-move-end area-resize-end image-updated",h(function(e){n(e)})),i.$watch("image",function(){a.setNewImageSource(i.image)}),i.$watch("areaType",function(){a.setAreaType(i.areaType),n(i)}),i.$watch("areaMinSize",function(){a.setAreaMinSize(i.areaMinSize),n(i)}),i.$watch("resultImageSize",function(){a.setResultImageSize(i.resultImageSize),n(i)}),i.$watch("resultImageFormat",function(){a.setResultImageFormat(i.resultImageFormat),n(i)}),i.$watch("resultImageQuality",function(){a.setResultImageQuality(i.resultImageQuality),n(i)}),i.$watch(function(){return[r[0].clientWidth,r[0].clientHeight]},function(e){a.setMaxDimensions(e[0],e[1]),n(i)},!0),i.$on("$destroy",function(){a.destroy()})}}}])}();
/**
 * Created by supostat on 16.11.15.
 */

MathJax.Hub.Config({
    CommonHTML: {linebreaks: {automatic: true}},
    "HTML-CSS": {linebreaks: {automatic: true}},
    SVG: {linebreaks: {automatic: true}},
    showMathMenu: false,
    tex2jax: {inlineMath: [['$$', '$$']]},
    styles: {
        ".MathJax_Display": {
            "text-align": "left",
            margin: "1em 0em",
            width: "auto"
        }
    }
});


var app = angular.module('TLA_STUDENT', ['ui.bootstrap', 'timer', 'ngDialog', 'ui.select', 'ngSanitize', 'ui-notification', 'rzModule', 'ngScrollbars', 'ngImgCrop', 'ngFileUpload'])
    .constant('ENDPOINT_URI', '/v1/')
    .config(function (NotificationProvider) {
        NotificationProvider.setOptions({
            delay: 10000,
            startTop: 20,
            startRight: 10,
            verticalSpacing: 20,
            horizontalSpacing: 20,
            positionX: 'right',
            positionY: 'top'
        });
    })
    .filter('rangeFilter', function () {
        return function (items, rangeInfo) {
            var filtered = [];
            var min = parseInt(rangeInfo.priceMin);
            var max = parseInt(rangeInfo.priceMax);
            // If time is with the range
            angular.forEach(items, function (item) {
                if (item[rangeInfo.property] >= min && item[rangeInfo.property] <= max) {
                    filtered.push(item);
                }
            });
            return filtered;
        };
    })
    .directive('customOnChange', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var onChangeHandler = scope.$eval(attrs.customOnChange);
                element.bind('change', onChangeHandler);
            }
        };
    })
    .directive(
        "bnCmdEnter",
        function cmdEnterDirective() {
            return ({
                link: link,
                require: "^?form",
                restrict: "A"
            });
            function link(scope, element, attributes, formController) {
                if (!attributes.bnCmdEnter && !formController) {
                    return;
                }

                element.on("keydown", handleKeyEvent);

                function closestForm() {
                    var parent = element.parent();
                    while (parent.length && ( parent[0].tagName !== "FORM" )) {
                        parent = parent.parent();
                    }
                    return ( parent );
                }

                // I listen for key events, looking for the CMD+Enter combination.
                function handleKeyEvent(event) {
                    // Is CMD+Enter event.
                    if (( event.which === 13 ) && event.metaKey) {
                        event.preventDefault();
                        attributes.bnCmdEnter
                            ? triggerExpression(event)
                            : triggerFormEvent()
                        ;
                    }
                }

                function triggerExpression(keyEvent) {
                    scope.$apply(
                        function changeViewModel() {
                            scope.$eval(
                                attributes.bnCmdEnter,
                                {
                                    $event: keyEvent
                                }
                            );
                        }
                    );
                }

                // I find the closest form element and trigger the "submit" event.
                function triggerFormEvent() {
                    closestForm().triggerHandler("submit");
                }
            }
        }
    )
    .filter('truncate', function () {
        return function (text, length) {
            if (text) {
                var words = text.split(' ');
                if (words.length < length) {
                    return text;
                }
                return words.slice(0, length).join(' ') + ' …';
            }
        };
    });
app.controller('FinishedQuizzesController', ['$scope', 'PracticeExamsModel',
    function ($scope, PracticeExamsModel) {

        function getFinishedQuizzes() {
            PracticeExamsModel.getFinishedQuizzes().then(function (result) {
                console.log(result.data);
                $scope.quizzes = result.data;
            })
        }

        $scope.getResultClass = function (quiz) {
            return parseInt(quiz.percentage) < 80 ? 'red' : 'green';
        };

        $scope.quizzes = [];

        getFinishedQuizzes();
    }]);
/**
 * Created by supostat on 16.11.15.
 */

app.filter('questionCount', function () {
    return function (items) {
        items = items + 1;
        return items;
    }
});

app.controller('PracticeExamController', ['$scope', 'PracticeExamsModel', 'ngDialog', '$sce',
    function ($scope, PracticeExamsModel, ngDialog, $sce) {
        $scope.practice = {};
        $scope.timer = false;
        var showQuestions = function (id) {
            PracticeExamsModel.fetch(id).then(function (result) {
                $scope.practice = result.data;
                MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
                MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
                MathJax.Hub.Queue(function () {
                    $('#practice').css('opacity', 1);
                });
                $scope.timer = true;
                //$scope.selectedAnswers = $scope.quizpractice.answers;
                //$scope.time_start = $scope.quizpractice.start_practice;
            });
        };

        $scope.essayChange = function (question) {
            var essay = {
                id: question.id,
                essayText: question.essayText,
                quizpractice_id: $scope.practice.id
            };

            PracticeExamsModel.essayChange(essay).then(function (result) {
                question.answered = true;
            })
        };

        $scope.selectAnswer = function (question, answer) {
            question.answered = true;
            var answer = {
                question_id: question.id,
                answer_id: answer.id,
                quizpractice_id: $scope.practice.id
            };

            PracticeExamsModel.selectAnswer(answer).then(function (result) {
                $scope.selectedAnswers = result.data;
            });
        };


        $scope.stopPractice = function (timer) {
            if (timer) {
                $('#practice').submit();
                return;
            }
            $scope.cnt = 0;
            $scope.qis = 0;

            angular.forEach($scope.practice.questions, function (item) {
                $scope.cnt += item.answered ? 1 : 0;
            });

            angular.forEach($scope.practice.sections, function (section) {
                angular.forEach(section.questions, function (question) {
                    $scope.cnt += question.answered ? 1 : 0;
                    $scope.qis++;
                });
            });
            if ($scope.cnt == ($scope.practice.questions ? $scope.practice.questions.length + $scope.qis : $scope.qis)) {
                $('#practice').submit();
            } else {
                ngDialog.openConfirm({
                    template: 'stopPractice',
                    scope: $scope
                }).then(function () {
                    $('#practice').submit();
                });
            }
        };

        $scope.trustAsHtml = function (string) {
            return $sce.trustAsHtml(string);
        };

        $scope.getCount = function () {
            $scope.questionCount = $scope.questionCount + 1;
            return $scope.questionCount;
        };
        $scope.questionItem = 0;

        $scope.showQuestions = showQuestions;


    }]);
/**
 * Created by supostat on 16.11.15.
 */


app.controller('PracticeExamListController',
    ['$scope', 'QuizzesModel', '$http', 'ExamsModel', 'SubjectsModel', 'TopicsModel', 'SubtopicsModel', 'ENDPOINT_URI', '$sce', 'ngDialog',
        function ($scope, QuizzesModel, $http, ExamsModel, SubjectsModel, TopicsModel, SubtopicsModel, ENDPOINT_URI, $sce, ngDialog) {

            ExamsModel.all().then(function (result) {
                $scope.selectedExamType = result.data.data[0];
                $scope.exam_types = result.data.data;
            });

            $scope.$watch('selectedExamType', function (selectedExamType) {
                SubjectsModel.all(selectedExamType.id).then(function (result) {
                    if (result.data.length) {
                        $scope.selectedSubject = result.data[0];
                        $scope.subjects = result.data;
                    } else {
                        $scope.exams = [];
                        $scope.subjects = [];
                        $scope.selectedSubject = {};
                    }
                })
            });

            $scope.onVideoSubjectSelect = function (selectedSubject) {
                if(selectedSubject) {
                    $http.get(ENDPOINT_URI + 'videos/getVideos', {params:{subject_id: selectedSubject.id}}).then(function (response) {
                        $scope.videos = response.data;
                    });
                } else {
                    getVideos();
                }
            };

            $scope.$watch('selectedSubject', function (selectedSubject) {
                QuizzesModel.all(selectedSubject.id).then(function (result) {
                    $scope.exams = result.data;
                });
                refreshTopics();
            });

            var csrfToken = $('meta[name="csrf-token"]').attr("content");

            $scope.stopPractice = function (index) {
                if (index.practice) {
                    var data = {
                        quizpractice_id: index.practice.id,
                        _csrf: csrfToken,
                        from_list: 1
                    };
                    $http.post('/student/finish-practice', data).then(function (result) {
                        index.practice = false;
                        index.viewed['viewed'] = false;
                    })
                }
            };

            $scope.getLength = function (length) {
                return humanizeDuration(length, {delimiter: ", "});
            };

            $scope.$watch('selectedFilterType', function (selectedFilterType) {
                refreshTopics();
            });
            $scope.$watch('selectedTopic', function (selectedTopic) {
                if (selectedTopic) {
                    SubtopicsModel.all(selectedTopic.id).then(function (result) {
                        $scope.subtopics = result.data;
                    });
                } else {
                    $scope.subtopics = null;
                }
            });
            var refreshTopics = function () {
                if ($scope.selectedFilterType.name == 'Modified') {
                    TopicsModel.all($scope.selectedSubject.id).then(function (result) {
                        $scope.topics = result.data;
                    });
                } else {
                    $scope.selectedTopic = null;
                    $scope.selectedSubTopic = null;
                    $scope.selectedQuestionNumber = null;
                    $scope.timer = true;
                }
            };

            $scope.filterTypes = [
                {
                    name: "Standard"
                },
                {
                    name: "Modified"
                }
            ];

            function videosSubjects() {
                $http.get(ENDPOINT_URI + 'subjects/getVideosSubjects').then(function (response) {
                    $scope.videosSubjects = response.data;
                });
            }

            function getVideos() {
                $http.get(ENDPOINT_URI + 'videos/getVideos').then(function (response) {
                    $scope.videos = response.data;
                });
            }

            $scope.showVideo = function (video) {
                $scope.viewingVideo.HTMLframe = $sce.trustAsHtml(video.iframe);
                console.log($scope.viewingVideo.HTMLframe);

                ngDialog.openConfirm({
                    template: '/templates/view-video.tpl.html',
                    scope: $scope,
                    className: 'ngdialog-theme-default showing-video'

                });
            };

            videosSubjects();
            getVideos();

            $scope.questionNumber = ['5', '10', '15', '20'];
            $scope.selectedQuestionNumber = '';

            $scope.exams = [];
            $scope.viewingVideo = {};

            $scope.selectedFilterType = $scope.filterTypes[0];
            $scope.selectedExamType = {};
            $scope.selectedSubject = {};
            $scope.selectedTopic = {};
            $scope.selectedSubTopic = {};
            $scope.selectedVideosSubject = {};
            $scope.videos = [];
            $scope.videosSubjects = [];

            $scope.exam_types = [];
            $scope.subjects = [];
            $scope.topics = [];
            $scope.subtopics = [];

            $scope.timer = true;
        }]);
/**
 * Created by supostat on 28.12.15.
 */


app.controller('StudentProfileController', ['$scope', '$http', 'Notification', '$timeout', '$window', 'ngDialog', 'ENDPOINT_URI',
    function ($scope, $http, Notification, $timeout, $window, ngDialog, ENDPOINT_URI) {

        function getUserData() {
            console.log(ENDPOINT_URI);
            $http.get(ENDPOINT_URI + 'students/getProfileData').then(function (response) {
                console.log(response.data);
                $scope.profile = response.data;
            });
        }

        getUserData();

        $scope.changeAvatar = function () {
            ngDialog.openConfirm({
                template: '/templates/change-avatar.tpl.html',
                scope: $scope,
                className: 'ngdialog-theme-default cropAvatarDialog'
            }).then(function (avatar) {
                console.log(avatar);
                $http.post(ENDPOINT_URI + 'student/update-avatar', avatar).then(
                    function () {
                        getUserData();
                    }
                );
            })
        };

        $scope.handleFileSelect = function (evt) {
            var file = evt.currentTarget.files[0];
            var reader = new FileReader();
            console.log(reader);
            reader.onload = function (evt) {
                $scope.$apply(function ($scope) {
                    $scope.avatar.original = evt.target.result;
                });
            };
            reader.readAsDataURL(file);
        };

        $scope.saveProfile = function (profile) {
            $http.post(ENDPOINT_URI + 'students/saveProfile', profile).then(function (response) {
                Notification.success({
                    message: 'Successfully updated',
                    title: 'Profile'
                });
            });
        };

        $scope.changePassword = function (password) {
            $scope.btnDisabled = true;
            $http.post(ENDPOINT_URI + 'students/changePassword', password).then(function (response) {
                $scope.btnDisabled = false;
                Notification.success({
                    message: 'Successfully updated',
                    title: 'Password'
                });
            }, function () {
                $scope.btnDisabled = false;
                Notification.error({
                    message: 'Error',
                    title: 'Password'
                });
            });
        };

        $scope.getDisabled = function (password) {
            if($scope.frmChangePassword.$invalid) {
                return true;
            }
            if(password.newPassword != '' && (password.newPassword != password.confirmNewPassword)) {
                return true;
            }
            if($scope.btnDisabled) {
                return true;
            }

            return false;
        };

        $scope.password = {};
        $scope.password.newPassword = '';
        $scope.password.confirmNewPassword = '';
        $scope.profile = {};
        $scope.avatar = {};
        $scope.avatar.original = '';
        $scope.avatar.cropped = '';
        $scope.avatar.coords = '';
        $scope.btnDisabled = false;


    }]);
/**
 * Created by supostat on 06.01.16.
 */

app.controller('SearchController', ['$scope', 'UsersModel', 'SubjectsModel', function ($scope, UsersModel, SubjectsModel) {

    $scope.userTypes = [
        {id: 2, value: 'Tutor'},
        {id: 3, value: 'School'}
    ];

    function getSubjects() {
        SubjectsModel.getSubjectsListByUserType().then(function (result) {
            $scope.subjects = result.data;
        });
    }

    $scope.search = {};
    $scope.userType = {};
    $scope.search.userType = $scope.userTypes[0];
    $scope.names = [];

    $scope.selectUserType = function (userType) {
        console.log($scope.users);
        if (userType) {
            search();
        }
    };

    function search() {
        var request = {
            userType: $scope.search.userType.id,
            userName: $scope.search.userName ? $scope.search.userName.name : undefined,
            userSubject: $scope.search.subject ? $scope.search.subject.id : undefined
        };
        UsersModel.searchUsers(request).then(function (result) {
            $scope.users = result.data;
            if (!$scope.names.length) {
                $scope.names = result.data;
            }
        });
    }

    $scope.writeSubjects = function (user) {
        if (user) {
            return user.subjects.map(function (elem) {
                return elem.name;
            }).join(", ");
        }
    };

    $scope.getAvatarSrc = function (user) {
        if (user) {
            if (user.avatar) return user.avatar.thumb;
            if (user.sex == 1) return '/images/nophoto-male.jpg';
            if (user.sex == 0) return '/images/nophoto-female.jpg';
        }
    };

    $scope.selectUserName = function (userName) {
        search();
    };

    $scope.selectSubject = function (subjectId) {
        search();
    };

    $scope.sendRequest = function (user) {
        var request = {
            id: user.id,
            type: $scope.search.userType.id
        };

        UsersModel.sendRequest(request).then(function (result) {
            user.requested = result.data;
        });
    };

    $scope.view = '/templates/views/list.html';

    $scope.showBlocks = function () {
        $scope.listView = 'blocks';
    };

    getSubjects();
    search();
}]);
/**
 * Created by igorpugachev on 18.04.16.
 */

app.controller('StudentChatController', ['$scope', '$http', 'ENDPOINT_URI',
    function ($scope, $http, ENDPOINT_URI) {
        function getTutors() {
            $http.get(ENDPOINT_URI + 'chat/getChats').then(function (response) {
                $scope.chats = response.data;
            });
        }

        getTutors();

        $scope.getAvatar = function (chat) {
            if(chat.avatar) {
                return chat.avatar;
            }
            return '/images/no_avatar2.png';
        };

        $scope.chats = [];
    }
]);
/**
 * Created by igorpugachev on 18.04.16.
 */

app.controller('StudentMessagesController', ['$scope', '$http', 'ENDPOINT_URI', '$interval', '$timeout',
    function ($scope, $http, ENDPOINT_URI, $interval, $timeout) {

        var chat_id;

        $scope.onInit = function (id) {
            chat_id = id;

            getMessages(chat_id);

            $interval(function () {
                checkMessages();
            }, 1000);

        };


        function checkMessages() {
            $http.get(ENDPOINT_URI + 'chat/checkMessages/' + chat_id).then(function (response) {
                if(response.data.length) {
                    angular.forEach(response.data, function (item) {
                        $scope.messages.push(item);
                    });
                    $timeout(function () {
                        $scope.element.updateScrollbar('scrollTo', 'bottom');
                    }, 200);
                }
            });
        }

        function getMessages(tutor_id) {
            $http.get(ENDPOINT_URI + 'chat/getMessages/' + chat_id).then(function (response) {
                if(response.data.length > $scope.messages.length) {
                    $timeout(function () {
                        $scope.element.updateScrollbar('scrollTo', 'bottom');
                    }, 200);
                }
                $scope.messages = response.data;
            });
        }


        $scope.sendMessage = function () {

            $scope.newMessage.chat_id = chat_id;

            $http.post(ENDPOINT_URI + 'chat/sendMessage', $scope.newMessage).then(function (response) {

                $scope.messages.push(response.data);

                $timeout(function () {
                    $scope.element.updateScrollbar('scrollTo', 'bottom');
                }, 200);

                $scope.newMessage = {};
            });
        };

        $scope.getTime = function (time) {

            return moment(time * 1000).calendar();

        };
        $scope.element = {};

        $scope.element.config = {
            autoHideScrollbar: true,
            theme: 'dark-thick',
            advanced: {
                updateOnContentResize: true
            },
            setHeight: 500,
            scrollInertia: 0,
            callbacks:{
                onInit: function(){
                    $scope.element.updateScrollbar('scrollTo', 'bottom');
                },
                onScroll:function(el){
                    // console.log(this.mcs);
                }
            }
        };
        $scope.messages = [];
        $scope.newMessage = {};
    }
])
;
app.controller('StudentTutorController', ['$scope', '$http', 'ENDPOINT_URI', '$sce', 'Upload', 'Notification',
    function ($scope, $http, ENDPOINT_URI, $sce, Upload, Notification) {

        $scope.init = function (tutor_id, avatar) {
            $scope.tutor_id = tutor_id;
            $scope.student.avatar = avatar;

            $http.get(ENDPOINT_URI + 'students/getGradeLevels/' + tutor_id).then(function (response) {
                $scope.gradeLevels = response.data.grade_levels;
                $scope.students = response.data.students;
                if($scope.gradeLevels.length) {
                    $scope.selectedGradeLevel.value = $scope.gradeLevels[0];
                    getSubject($scope.selectedGradeLevel.value);
                }
            })
        };

        function getSubject(selectedGradeLevel) {
            var data = {
                tutor_id: $scope.tutor_id,
                level_id: selectedGradeLevel.id
            };

            $http.get(ENDPOINT_URI + 'students/getSubjects', {params: data}).then(function (response) {
                $scope.subjects = response.data;
                if($scope.subjects.length) {
                    $scope.selectedSubject.value = $scope.subjects[0];
                    getLessons($scope.selectedSubject.value);
                }
            })
        }
        function getLessons(selectedSubject) {
            var data = {
                tutor_id: $scope.tutor_id,
                level_id: $scope.selectedGradeLevel.value.id,
                subject_id: selectedSubject.id
            };

            $http.get(ENDPOINT_URI + 'students/getLessons', {params: data}).then(function (response) {
                $scope.lessons = response.data;
                if($scope.lessons.length) {
                    $scope.selectedLesson.value = $scope.lessons[0];
                    $scope.onSelectLesson($scope.lessons[0]);
                }
            })
        }
        
        
        
        function getLesson(lesson) {
            var data = {
                tutor_id: $scope.tutor_id,
                subject_id: $scope.selectedSubject.value.id
            };

            $http.get(ENDPOINT_URI + 'students/getLesson/' + lesson.id, {params: data}).then(function (response) {
                $scope.viewedLesson = response.data;
                angular.forEach($scope.viewedLesson.videos, function (item) {
                   item.HTMLIframe = $sce.trustAsHtml(item.iframe);
                });
            });
        }

        $scope.onSelectGrade = function (item, model) {
            getSubject(model);
        };

        $scope.onSelectSubject = function (item, model) {
            if(!item) {
                $scope.selectedSubject.value = undefined;
                $scope.selectedLesson.value = undefined;
            } else {
                getLessons(model);
            }
        };

        $scope.onSelectLesson =  function (item) {
            if(item) {
                getLesson(item);
            }
        };

        $scope.addComment = function (student, assignment, form) {
            if(form.$invalid) return;
            var data = {
                comment: assignment.newComment,
                assignment_id: assignment.id,
                file: assignment.student_file
            };
            if(!assignment.comments) {
                assignment.comments.data = [];
            }

            $http.post(ENDPOINT_URI + 'assignments/addStudentAssignment', data).then(function (response) {
                assignment.comments.data.push(response.data);
                assignment.newComment = null;
            });

        };

        $scope.getAvatar = function (data, comment) {
            if(comment.owner_type == 0) {
                return data.student_avatar;
            };

            if(comment.owner_type == 1) {
                return data.tutor_avatar;
            }
        };

        $scope.getStudentAvatar = function (student) {
            if(student.avatar) {
                return '/uploads/avatars/students/' + student.id + '/' + student.avatar;
            }
            return '/images/no_avatar2.png';
        };

        $scope.upload = function(assignment) {
            Upload.upload({
                url: ENDPOINT_URI + 'students/uploadAssignment',
                data: {
                    'File': assignment.student_file,
                    'id': assignment.id
                }
            }).then(function (response) {
                Notification.success({
                    message: 'Successfully uploaded',
                    title: 'File'
                });

                if(!assignment.student_files) {
                    assignment.student_files = [];
                }
                assignment.student_files.push(response.data);
                assignment.student_file = null;
            });
        };


        $scope.addChat = function (student) {
            var data = {
                user_id: student.data.user_id
            };

            $http.post(ENDPOINT_URI + 'chat/createChat', data).then(function () {
                student.hasChat = true;
            });

        };

        $scope.removeChat = function (student) {
            $http.post(ENDPOINT_URI + 'chat/removeChat', {user_id: student.data.user_id}).then(function () {
                student.hasChat = false;
            });
        };

        $scope.student = {};
        $scope.gradeLevels = [];
        $scope.subjects = [];
        $scope.lessons = [];
        $scope.tutor_id = null;
        $scope.selectedSubject = {};
        $scope.selectedLesson = {};
        $scope.selectedGradeLevel = {};
        $scope.viewedLesson = {};
    }]);
/**
 * Created by supostat on 23.03.16.
 */

app.controller('TutorSearchController', ['$scope', '$http', 'ENDPOINT_URI', 'Notification', '$filter',
    function ($scope, $http, ENDPOINT_URI, Notification, $filter) {

        $scope.priceTypes = [
            {
                id: 0,
                name: 'Price per subject'
            },
            {
                id: 1,
                name: 'Price for all subjects'
            }
        ];

        function getFilterData() {
            $http.get(ENDPOINT_URI + 'subject/get-tutors-subjects').then(
                function (response) {
                    $scope.subjects = response.data;
                },
                function (response) {

                }
            );
            $http.get(ENDPOINT_URI + 'tutors').then(
                function (response) {
                    $scope.tutors = response.data;
                    $scope.filteredTutors = response.data;
                    $scope.tutorsList = response.data;
                    $scope.totalItems = response.data.length;
                    filtering();
                },
                function (response) {
                }
            );

            $http.get(ENDPOINT_URI + 'tutors/getMinMaxSubjectPrice/' + $scope.priceTypes[0].id).then(function (response) {
                var max = parseInt(response.data.max) + 20;
                $scope.slider = {
                    minValue: 0,
                    maxValue: response.data.max,
                    options: {
                        floor: 0,
                        ceil: max,
                        step: 5,
                        minRange: 5,
                        translate: function (value) {
                            return '$' + value;
                        }
                    }
                };
            });
        }

        getFilterData();

        function paginate(tutors) {
            var begin = (($scope.currentPage - 1) * $scope.maxSize);
            var end = begin + $scope.maxSize;
            $scope.showingTutors = tutors ? tutors.slice(begin, end) : $scope.filteredTutors.slice(begin, end);

            $scope.showingTutors.forEach(function (item) {
                item.subjectList = getTutorSubjects(item); 
            })
        }

        function getTutorSubjects(tutor) {
            return tutor.subjects.map(function(elem){
                return elem.name;
            }).join(", ");
        };

        function filtering(tutors) {
            var property = $scope.selectedPriceType.value.id == 0 ? 'price_per_subject' : 'price_for_all_subjects';
            var filteredTutors = $filter('rangeFilter')(tutors ? tutors : $scope.tutors, {
                priceMin: $scope.slider.minValue,
                priceMax: $scope.slider.maxValue,
                property: property
            });
            $scope.totalItems = filteredTutors.length;
            paginate(filteredTutors);
        }

        $scope.searchTutor = function (item) {
            if (item) {
                $scope.selectedSubject.value = null;
                $scope.filteredTutors = $filter('filter')($scope.tutors, {
                    first_name: item.first_name,
                    last_name: item.last_name
                });
                paginate();
            } else {
                $scope.filteredTutors = $filter('filter')($scope.tutors, {});
                filtering();
            }
        };
        $scope.searchSubject = function (item) {
            if (item) {
                $scope.filteredTutors = $filter('filter')($scope.tutors, {$: item});
                filtering($scope.filteredTutors);
            } else {
                $scope.filteredTutors = $filter('filter')($scope.tutors, {});
                filtering();
            }

        };

        $scope.sendRequest = function (tutor) {
            $http.post(ENDPOINT_URI + 'student/send-request', tutor).then(
                function () {
                    Notification.success({
                        message: 'Successfully send',
                        title: 'Request'
                    });
                    tutor.requested = true;
                },
                function (response) {
                    Notification.error({
                        message: response.data,
                    });
                }
            );
        };

        $scope.changePriceType = function (type) {
            $http.get(ENDPOINT_URI + 'tutors/getMinMaxSubjectPrice/' + type.id).then(function (response) {
                var max = parseInt(response.data.max) + 200;
                $scope.slider = {
                    minValue: 5,
                    maxValue: response.data.max,
                    options: {
                        floor: 0,
                        ceil: max,
                        step: 5,
                        minRange: 5,
                        translate: function (value) {
                            return '$' + value;
                        }
                    }
                };

                filtering($scope.filteredTutors);
            });
        };


        $scope.selectedPriceType = {
            value: $scope.priceTypes[0]
        };

        $scope.$on("slideEnded", function () {
            if ($scope.selectedSubject) {
                filtering($scope.filteredTutors);
            } else {
                filtering();
            }
            $scope.$apply();

        });

        $scope.getTutorPrice = function (tutor) {
            return $scope.selectedPriceType.value == 0 ? tutor.price_per_subject : tutor.price_for_all_subjects;
        };

        $scope.createChat = function (tutor) {
            $http.post(ENDPOINT_URI + 'chat/createChat', {user_id: tutor.user_id}).then(function (response) {
                tutor.hasChat = true;
            });
        };

        $scope.removeChat = function (tutor) {
            $http.post(ENDPOINT_URI + 'chat/removeChat', {user_id: tutor.user_id}).then(function (response) {
                tutor.hasChat = false;
            });
        };

        $scope.slider = {};

        $scope.subjects = [];
        $scope.tutors = [];
        $scope.tutorsList = [];
        $scope.selectedSubject = {};
        $scope.selectedTutor = {};
        $scope.searching = {};
        $scope.filteredTutors = [];
        $scope.prices = {};
        $scope.showingTutors = [];

        $scope.currentPage = 1;
        $scope.maxSize = 5;

        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };

        $scope.pageChanged = function () {
            paginate($scope.filteredTutors);
        };

    }]);
app.controller('StudentViewProfileController', ['$scope', '$stateParams', 'StudentsModel',
    function ($scope, $stateParams, StudentsModel) {
        function getAvatarSrc(student) {
            if(student.avatar) return student.avatar.thumb;
            if(student.sex == 1) return '/images/nophoto-male.jpg';
            if(student.sex == 0) return '/images/nophoto-female.jpg';
        }


        function getStudentData() {
            console.log($stateParams);
            StudentsModel.getStudent($stateParams.id).then(function (result) {
                console.log(result.data);
                $scope.student = result.data;
            })
        }

        $scope.student = {};
        $scope.getAvatarSrc = getAvatarSrc;

        getStudentData();
    }]);
app.controller('StudentListController', ['$scope', '$state', 'StudentsModel', '$log',
    function ($scope, $state, StudentsModel, $log) {
        $scope.view = '/templates/views/students-list.html';

        $scope.views = [{
            name: 'List',
            template: '/templates/views/students-list.html',
            icon: 'btn btn-default navbar-btn fa fa-list'
        }, {
            name: 'Grid',
            template: '/templates/views/students-grid.html',
            icon: 'btn btn-default navbar-btn fa fa-th'
        }];

        function getAvatarSrc(student) {
            if(student.avatar) return student.avatar.thumb;
            if(student.sex == 1) return '/images/nophoto-male.jpg';
            if(student.sex == 0) return '/images/nophoto-female.jpg';
        }

        function getStudentsList() {
            StudentsModel.getStudentsList().then(function (result) {
                $scope.students = result.data;
                $scope.maxSize = $scope.students.length;
                $scope.filteredStudents = $scope.students.slice(0, 5);
            })
        }

        $scope.viewProfile = function (student) {
            return 'usersProfiles.students.student({id: student.id})';
        };

        $scope.numPerPage = 5;
        $scope.currentPage = 1;

        $scope.pageChanged = function (currentPage) {
            var begin = ((currentPage - 1) * $scope.numPerPage);
            var end = begin + $scope.numPerPage;
            $scope.filteredStudents = $scope.students.slice(begin, end);
        };

        $scope.students = [];
        $scope.getAvatarSrc = getAvatarSrc;
        getStudentsList();
    }]);
/**
 * Created by supostat on 23.03.16.
 */

app.controller('TutorViewProfileController', ['$scope', 'ENDPOINT_URI', '$http', 'Notification', '$sce',
    function ($scope, ENDPOINT_URI, $http, Notification, $sce) {
        function getTutor(id) {
            $http.get(ENDPOINT_URI + 'tutors/' + id).then(
                function (response) {
                    $scope.tutor = response.data;
                    $scope.tutor.iframe = $sce.trustAsHtml($scope.tutor.iframe);
                    console.log($scope.tutor);
                },
                function (response) {
                }
            );
        }

        $scope.getYoutubeId = function (url) {
            if(url) {
                var regexp = '(?:youtube(?:-nocookie)?\.com/(?:[^/]+/.+/|(?:v|e(?:mbed)?)/|.*[?&]v=)|youtu\.be/)([^"&?/ ]{11})';
                var match = url.match(regexp);
                if(match) {
                    return 'https://www.youtube.com/embed/' + match[1];
                }
                return false;
            }
        };

        $scope.sendRequest = function (tutor) {
            $http.post(ENDPOINT_URI + 'student/send-request', tutor).then(
                function () {
                    Notification.success({
                        message: 'Successfully send',
                        title: 'Request'
                    });
                    tutor.requested = true;
                },
                function (response) {
                    Notification.error({
                        message: response.data
                    });
                }
            );
        };

        $scope.getTutor = getTutor;

        $scope.tutor = {};
    }]);
/**
 * Created by supostat on 05.11.15.
 */
app.service('AnswersModel', ['$http', 'ENDPOINT_URI', function ($http, ENDPOINT_URI) {
    var service = this,
        path = 'answers';

    function getUrl() {
        return ENDPOINT_URI + path;
    }

    function getUrlForId(itemId) {
        return getUrl(path) + '/' + itemId;
    }

    service.all = function (id) {
        return $http.get(getUrl() + '/list/' + id);
    };

    service.fetch = function (itemId) {
        return $http.get(getUrlForId(itemId));
    };

    service.create = function (item) {
        return $http.post(getUrl(), item);
    };

    service.update = function (itemId, item) {
        return $http.put(getUrlForId(itemId), item);
    };

    service.destroy = function (itemId) {
        return $http.delete(getUrlForId(itemId));
    };
}]);
/**
 * Created by supostat on 05.11.15.
 */
app.service('ExamsModel', ['$http', 'ENDPOINT_URI', function ($http, ENDPOINT_URI) {
    var service = this,
        path = 'examtypes';

    function getUrl() {
        return ENDPOINT_URI + path;
    }

    function getUrlForId(itemId) {
        return getUrl(path) + '/' + itemId;
    }

    service.allfree = function () {
        return $http.get('/v1/examtypes/allfree');
    };

    service.all = function () {
        return $http.get(getUrl());
    };

    service.fetch = function (itemId) {
        return $http.get(getUrlForId(itemId));
    };

    service.create = function (item) {
        return $http.post(getUrl(), item);
    };

    service.update = function (itemId, item) {
        return $http.put(getUrlForId(itemId), item);
    };

    service.checkFree = function (itemId) {
        return $http.post(getUrl() + '/checkfree/' + itemId);
    };

    service.destroy = function (itemId) {
        return $http.delete(getUrlForId(itemId));
    };

    service.saveOrder = function (data) {
        return $http.post(getUrl() + '/saveOrder', data);
    };


    service.changeState = function (item) {
        item.active = !item.active;
        return $http.put(getUrl() + '/changeState/' + item.id, item);
    };
}]);
/**
 * Created by supostat on 09.11.15.
 */

app.service('PracticeExamsModel', ['$http', 'ENDPOINT_URI', function ($http, ENDPOINT_URI) {
    var service = this,
        path = 'quizpractices';

    function getUrl() {
        return ENDPOINT_URI + path;
    }

    function getUrlForId(itemId) {
        return getUrl(path) + '/' + itemId;
    }

    service.selectAnswer = function (answer) {
        return $http.post(getUrl() + '/selectanswer', answer);
    };

    service.essayChange = function (question) {
        return $http.post(getUrl() + '/essaychange', question);
    };

    service.all = function (subject_id) {
        return $http.get(getUrl() + '/all?id=' + subject_id);
    };

    service.fetch = function (itemId) {
        return $http.get(getUrlForId(itemId));
    };

    service.getQuestions = function (itemId) {
        return $http.get(getUrl() + '/viewall/' + itemId);
    };

    service.getFinishedQuizzes = function () {
        return $http.get(getUrl() + '/getFinishedQuizzes');
    };

    service.create = function (item) {
        return $http.post(getUrl(), item);
    };

    service.update = function (itemId, item) {
        return $http.put(getUrlForId(itemId), item);
    };

    service.destroy = function (itemId) {
        return $http.delete(getUrlForId(itemId));
    };

}]);

/**
 * Created by supostat on 05.11.15.
 */
app.service('QuestionsModel', ['$http', 'ENDPOINT_URI', 'Upload', function ($http, ENDPOINT_URI, Upload) {
    var service = this,
        path = 'questions';

    function getUrl() {
        return ENDPOINT_URI + path;
    }

    function getUrlForId(itemId) {
        return getUrl(path) + '/' + itemId;
    }

    service.all = function (id) {
        return $http.get(getUrl() + '/list?quiz_id=' + id);
    };

    service.images = function (id) {
        return $http.get(getUrl() + '/images?question_id=' + id);
    };

    service.fetch = function (itemId) {
        return $http.get(getUrlForId(itemId));
    };

    service.create = function (item) {
        return Upload.upload({
            url: getUrl(),
            data: {
                'Question[imageFiles]': item.files,
                question: item.question
            }
        });
    };

    service.update = function (itemId, item) {
        return Upload.upload({
            url: getUrl()+'/update/' + itemId,
            data: {
                'Question[imageFiles]': item.newImages,
                question: item.question,
                oldImages: item.oldImages
            },
            method: 'POST'
        });
    };

    service.destroy = function (itemId) {
        return $http.delete(getUrlForId(itemId));
    };
}]);
/**
 * Created by supostat on 05.11.15.
 */
app.service('QuizzesModel', ['$http', 'ENDPOINT_URI', function ($http, ENDPOINT_URI) {
    var service = this,
        path = 'quizes';

    function getUrl() {
        return ENDPOINT_URI + path;
    }

    function getUrlForId(itemId) {
        return getUrl(path) + '/' + itemId;
    }

    service.all = function (subject_id) {
        return $http.get(getUrl() + '/all?subject_id=' + subject_id);
    };

    service.allQuizzes = function () {
        return $http.get(getUrl() + '/list');
    };

    service.fetch = function (itemId) {
        return $http.get(getUrlForId(itemId));
    };

    service.create = function (item) {
        return $http.post(getUrl(), item);
    };

    service.update = function (itemId, item) {
        return $http.put(getUrlForId(itemId), item);
    };

    service.saveOrder = function (data) {
        return $http.post(getUrl() + '/saveOrder', data);
    };

    service.destroy = function (itemId) {
        return $http.delete(getUrlForId(itemId));
    };
}]);
/**
 * Created by supostat on 05.11.15.
 */
app.service('SectionsModel', ['$http', 'ENDPOINT_URI', function ($http, ENDPOINT_URI) {
    var service = this,
        path = 'sections';

    function getUrl() {
        return ENDPOINT_URI + path;
    }

    function getUrlForId(itemId) {
        return getUrl(path) + '/' + itemId;
    }

    service.all = function (id) {
        return $http.get(getUrl() + '/list/' + id);
    };

    service.fetch = function (itemId) {
        return $http.get(getUrlForId(itemId));
    };

    service.create = function (item) {
        return $http.post(getUrl(), item);
    };

    service.update = function (itemId, item) {
        return $http.put(getUrlForId(itemId), item);
    };

    service.destroy = function (itemId) {
        return $http.delete(getUrlForId(itemId));
    };
}]);
app.service('StudentsModel', ['$http', 'ENDPOINT_URI', function ($http, ENDPOINT_URI) {
    var url = ENDPOINT_URI + 'students';

    var service = this;

    service.getStudentsList = function () {
        return $http.get(url);
    };

    service.getStudent = function (id) {
        return $http.get(url + '/' + id);
    }
}]);
/**
 * Created by supostat on 05.11.15.
 */
app.service('SubjectsModel', ['$http', 'ENDPOINT_URI', function ($http, ENDPOINT_URI) {
    var service = this,
        path = 'subjects';

    function getUrl() {
        return ENDPOINT_URI + path;
    }

    function getUrlForId(itemId) {
        return getUrl(path) + '/' + itemId;
    }

    service.all = function (exam_id) {
        return $http.get(getUrl() + '/all?exam_id=' + exam_id);
    };

    service.getOriginList = function (exam_id) {
        return $http.get(getUrl() + '/list?exam_id=' + exam_id);
    };

    service.fetch = function (itemId) {
        return $http.get(getUrlForId(itemId));
    };

    service.getTutorSubjectList = function (exam_id) {
        return $http.get(getUrl() + '/getTutorSubjectList/' + exam_id);
    };

    service.create = function (item) {
        return $http.post(getUrl(), item);
    };
    service.add = function (item) {
        return $http.post(getUrl() + '/add', item);
    };

    service.update = function (itemId, item) {
        return $http.put(getUrlForId(itemId), item);
    };

    service.saveOrder = function (data) {
        return $http.post(getUrl() + '/saveOrder', data);
    };

    service.destroy = function (itemId) {
        return $http.delete(getUrlForId(itemId));
    };
    service.remove = function (itemId) {
        return $http.post(getUrl() + '/remove/' + itemId);
    };
}]);
/**
 * Created by supostat on 09.11.15.
 */

app.service('SubtopicsModel', ['$http', 'ENDPOINT_URI', function ($http, ENDPOINT_URI) {
    var service = this,
        path = 'subtopic';

    function getUrl() {
        return ENDPOINT_URI + path;
    }

    function getUrlForId(itemId) {
        return getUrl(path) + '/' + itemId;
    }

    service.all = function (topic_id) {
        return $http.get(getUrl() + '/all?id=' + topic_id);
    };

    service.fetch = function (itemId) {
        return $http.get(getUrlForId(itemId));
    };

    service.create = function (item) {
        return $http.post(getUrl(), item);
    };

    service.update = function (itemId, item) {
        return $http.put(getUrlForId(itemId), item);
    };

    service.destroy = function (itemId) {
        return $http.delete(getUrlForId(itemId));
    };

}]);

/**
 * Created by supostat on 09.11.15.
 */

app.service('TopicsModel', ['$http', 'ENDPOINT_URI', function ($http, ENDPOINT_URI) {
    var service = this,
        path = 'topic';

    function getUrl() {
        return ENDPOINT_URI + path;
    }

    function getUrlForId(itemId) {
        return getUrl(path) + '/' + itemId;
    }

    service.all = function (subject_id) {
        return $http.get(getUrl() + '/all?id=' + subject_id);
    };

    service.fetch = function (itemId) {
        return $http.get(getUrlForId(itemId));
    };

    service.create = function (item) {
        return $http.post(getUrl(), item);
    };

    service.update = function (itemId, item) {
        return $http.put(getUrlForId(itemId), item);
    };

    service.destroy = function (itemId) {
        return $http.delete(getUrlForId(itemId));
    };

}]);

app.service('TutorsModel', ['$http', 'ENDPOINT_URI', function ($http, ENDPOINT_URI) {
    var url = ENDPOINT_URI + 'tutors';

    var service = this;

    service.getStudentsList = function () {
        return $http.get(url + '/students');
    };

    service.getStudentsRequests = function () {
        return $http.get(url + '/studentsRequests');
    };

    service.acceptRequest = function (data) {
        return $http.post(url + '/acceptRequest', data);
    };

    service.rejectRequest = function (data) {
        return $http.post(url + '/rejectRequest', data);
    };
}]);
app.service('UsersListModel', ['$http', 'ENDPOINT_URI',
    function ($http, ENDPOINT_URI) {
        var url = ENDPOINT_URI + 'users',
            service = this;

        service.getUsersList = function () {
            return $http.get(url);
        };

    }]);


/**
 * Created by supostat on 28.12.15.
 */
app.service('UsersModel', ['$http', 'ENDPOINT_URI', 'Upload', function ($http, ENDPOINT_URI, Upload) {
    var user = {};
    var url = ENDPOINT_URI + 'users';

    var service = this;

    service.getCurrentUser = function () {
        return $http.get(url + '/get-user-data');
    };

    service.saveProfile = function (data) {
        return Upload.upload({
            url: url + '/profile/' + data.id,
            data: data
        });
    };

    service.getNamesByType = function (type, data) {
        return $http.post(url + '/getNamesByType/' + type, data);
    };

    service.sendRequest = function (data) {
        return $http.post(url + '/sendRequest', data);
    };

    service.getRequests = function (data) {
        return $http.get(url + '/getRequests', {params: data});
    };

    service.getTutorStudentsCount = function () {
        return $http.get(url + '/getStudentsCount');
    };

    service.getRequestsCount = function () {
        return $http.get(url + '/getRequestsCount');
    };

    service.searchUsers = function (data) {
        return $http.post(url + '/searchUsers', data);
    };
}]);

/**
 * Created by supostat on 02.11.15.
 */

app.service('answersService', function($http, $stateParams, $state) {
    var answers = [];

    var addAnswer = function(newObj) {
        answers.push(newObj);
    };

    var init = function(data) {
        answers = data;
    };

    var getAnswers = function(){
        return answers;
    };

    return {
        addAnswer: addAnswer,
        getAnswers: getAnswers,
        init: init
    };

});
/**
 * Created by supostat on 09.11.15.
 */


app.factory('QuestionsService', ['TopicsModel', 'SubtopicsModel', function (TopicsModel, SubtopicsModel) {
    var topics = {},
        subtopics = {},
        answers = {},
        images = [];

    answers.list = [];
    topics.list = [];
    subtopics.list = [];
    topics.selected = {};
    subtopics.selected = {};

    answers.init = function (data) {
        answers.list = data;
    };

    answers.add = function(newObj) {
        answers.list.push(newObj);
    };

    subtopics.select = function (data) {
        subtopics.selected = data;
    };
    topics.select = function (data) {
        topics.selected = data;
    };

    answers.get = function(){
        return answers.list;
    };

    topics.init = function(data) {
       topics.list = data;
    };

    topics.add = function(newTopic) {
       topics.list.push(newTopic);
    };

    subtopics.init = function (data) {
        angular.forEach(data, function (value, key) {
            subtopics.add(value);
        })
    };

    subtopics.add = function(newSubtopic) {
        subtopics.list.push(newSubtopic);
    };

    return {
        answers: answers,
        topics: topics,
        subtopics: subtopics
    }
}]);
/**
 * Created by supostat on 09.11.15.
 */

app.factory('Test', [function () {
    var fn = {};

    fn.item = {
        FirstName: ''
    };

    return fn;
}]);
/**
 * Created by supostat on 14.12.15.
 */


app.service("User", ['$http', 'ENDPOINT_URI', function ($http, ENDPOINT_URI) {
    var service = this;

    service.isAdmin = function () {
        return $http.get(ENDPOINT_URI + 'users/getpermission');
    };
}]);
/**
 * Created by supostat on 15.12.15.
 */


app.service('UsersService', ['$http', 'ENDPOINT_URI', function ($http, ENDPOINT_URI) {
    var user = {};
    var url = ENDPOINT_URI + 'users';
    user.role = 'admin';
    return {
        getUser: function () {
            return user;
        },
        generateRoleData: function () {
            $http.get(url + '/getpermission').then(function (result) {
                user.role = result.data ? result.data : 'guest';
                return user;
            });
        },
        getUsers: function (usertype) {
            console.log(usertype);
            var link = usertype?'/' + usertype.id:'';
            return $http.get(url + '/get-users' + link);
        },
        deleteUser: function (user) {
            return $http.delete(url + '/' + user.id);
        },
        getRolesTypes: function () {
            return $http.get(url + '/get-roles');
        }
    };

}]);
//# sourceMappingURL=angular_student.js.map
