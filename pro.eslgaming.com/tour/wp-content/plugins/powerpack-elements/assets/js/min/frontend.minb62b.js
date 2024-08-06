!function(d){"use strict";var _=!1,C=function(e){var t,i,a={},o=e.data("model-cid");return _&&o?(t=elementorFrontend.config.elements.data[o],i=elementorFrontend.config.elements.keys[t.attributes.widgetType||t.attributes.elType],jQuery.each(t.getActiveControls(),function(e){-1!==i.indexOf(e)&&(a[e]=t.attributes[e])})):a=e.data("settings")||{},a},l=function(t,i,e){d(t).closest(".elementor-widget-wrap").addClass("e-swiper-container"),d(t).closest(".elementor-widget").addClass("e-widget-swiper"),new elementorFrontend.utils.swiper(t,e).then(function(e){c(t,i,e)})},c=function(e,t,i){"yes"===t.pause_on_hover&&(e.on("mouseover",function(){i.autoplay.stop()}),e.on("mouseout",function(){i.autoplay.start()})),y(i,".pp-swiper-slider","swiper")},t=function(e,t){var i=C(e),a=e.find(".pp-swiper-slider"),e=a.attr("data-slider-settings")!==undefined?JSON.parse(a.attr("data-slider-settings")):"";l(a,i,e)},y=function(a,o,n){void 0===n&&(n="swiper");["ppe-tabs-switched","ppe-toggle-switched","ppe-accordion-switched","ppe-popup-opened"].forEach(function(i){void 0!==i&&d(document).on(i,function(e,t){0<(t="ppe-popup-opened"==i?d(".pp-modal-popup-"+t):t).find(o).length&&setTimeout(function(){"slick"===n?a.slick("setPosition"):"swiper"===n?a.update():"gallery"===n&&t.find(".pp-image-gallery").eq(0).isotope("layout")},100)})})},i=function(e,t){var i=e.data("id"),e=e.find(".pp-image-hotspots"),e=JSON.parse(e.attr("data-tooltip-options")),a="pp-tooltip pp-tooltip-"+i,o=e.arrow,n=e.always_open,s=e.trigger,p=e.distance,l=e.animation,r=e.width,i=e.size,d=e.zindex;""!==i&&undefined!==i&&(a+=" pp-tooltip-size-"+i),t(".pp-hot-spot-wrap[data-tooltip]").each(function(){var e=t(this).data("tooltip-position");t(this).pptooltipster({trigger:s,animation:l,minWidth:0,maxWidth:r,ppclass:a,position:e,arrow:"yes"===o,distance:p,interactive:!0,positionTracker:!0,zIndex:d}),"yes"===n&&(t(this).pptooltipster(),t(this).pptooltipster("show"))})},a=function(e){var t,i;void 0!==e&&(t=e.find(".pp-image-comparison").eq(0),i=t.data("settings"),e.imagesLoaded(function(){t.twentytwenty({default_offset_pct:i.visible_ratio,orientation:i.orientation,before_label:i.before_label,after_label:i.after_label,move_slider_on_hover:i.slider_on_hover,move_with_handle_only:i.slider_with_handle,click_to_move:i.slider_with_click,no_overlay:i.no_overlay})}))},o=function(e,a){var t=e.find(".pp-counter").eq(0),i=t.data("target"),o=e.find(".pp-counter-number").data("separator"),e=e.find(".pp-counter-number").data("separator-char"),n=""!==e?"("+e+"ddd).dd":"(,ddd).dd";"undefined"!=typeof elementorFrontend.waypoint&&elementorFrontend.waypoint(t,function(){a(i).each(function(){var e=a(this).data("to"),t=a(this).data("speed"),i=new Odometer({el:this,value:0,duration:t,format:"yes"===o?n:""});i.render(),setInterval(function(){i.update(e)})})},{offset:"80%",triggerOnce:!0})},s=function(e,t){var e=e.find(".swiper-slide-visible"),i=-1;e.each(function(){var e=t(this).find(".pp-info-box").outerHeight();i<e&&(i=e)}),e.each(function(){t(this).find(".pp-info-box").animate({height:i},{duration:200,easing:"linear"})})},n=function(t,i){var a=C(t),o=t.find(".pp-info-box-carousel"),e=o.attr("data-slider-settings")!==undefined?JSON.parse(o.attr("data-slider-settings")):"",n=a.equal_height_boxes;o.length&&(i(o).closest(".elementor-widget-wrap").addClass("e-swiper-container"),i(o).closest(".elementor-widget").addClass("e-widget-swiper"),new elementorFrontend.utils.swiper(o,e).then(function(e){"yes"===n&&(s(t,i),e.on("slideChange",function(){s(t,i)})),c(o,a,e)}))},p=function(e,t){var i,a=e.data("id"),o=C(e),n=e.find(".pp-instagram-feed").eq(0),s=o.feed_layout;n.length&&("carousel"===s?(n=e.find(".pp-swiper-slider").eq(0),e=JSON.parse(n.attr("data-slider-settings")),l(n,o,e)):"masonry"===s&&(i=t("#pp-instafeed-"+a).imagesLoaded(function(){i.masonry({itemSelector:".pp-feed-item",percentPosition:!0})})))},r=function(e,t){var s=e.find(".pp-image-slider").eq(0),i=s.attr("id"),a=s.data("slider-settings"),o=s.data("fancybox-settings"),p=e.find(".pp-image-slider-container .pp-image-slider-thumb-item-wrap"),l=C(e);t(s).closest(".elementor-widget-wrap").addClass("e-swiper-container"),t(s).closest(".elementor-widget").addClass("e-widget-swiper"),new elementorFrontend.utils.swiper(s,a).then(function(e){var t,i,a,o,n;t=s,a=e,o=p,"yes"===(i=l).pause_on_hover&&(t.on("mouseover",function(){a.autoplay.stop()}),t.on("mouseout",function(){a.autoplay.start()})),"slideshow"===i.skin&&(o.removeClass("pp-active-slide"),o.eq(0).addClass("pp-active-slide"),a.on("slideChange",function(){var e="yes"==i.infinite_loop?a.realIndex:a.activeIndex;o.removeClass("pp-active-slide"),o.eq(e).addClass("pp-active-slide")}),n=i.infinite_loop?1:0,d(o).on("click",function(){a.slideTo(d(this).index()+n,500)})),y(a,".pp-image-slider","swiper")}),t('.pp-swiper-slide:not(.swiper-slide-duplicate) .pp-image-slider-slide-link[data-fancybox="'+i+'"]').fancybox(o)},f=function(e,i){var t,a,o,n,s,p,l,r,d,c,f,u,m,g,h,v,w,_,y,b;e.hasClass("pp-visibility-hidden")||(t=e.find(".pp-modal-popup").eq(0),a=e.data("id"),b=(o=C(e)).overlay_switch,n="pp-modal-popup-"+o.layout_type,s=o.close_button_position,p="animated "+o.popup_animation_in,l=t.data("type"),r=t.data("iframe-class"),d=t.data("src"),c=t.data("trigger-element"),f=t.data("delay"),u=t.data("disable-on"),e=o.trigger,m="yes"===o.prevent_scroll,g=o.enable_url_trigger,h="popup_"+a,v=t.data("display-after"),w=" pp-modal-popup-"+a+" "+n+" "+s+" "+p,_={disableOn:u,showCloseBtn:"yes"===o.close_button,enableEscapeKey:"yes"===o.esc_exit,closeOnBgClick:"yes"===o.click_exit,closeOnContentClick:"yes"===o.content_close,closeMarkup:'<div class="mfp-close">&#215;</div>',closeBtnInside:"win-top-left"!==s&&"win-top-right"!==s,removalDelay:500,callbacks:{open:function(){i(document).trigger("ppe-popup-opened",[a]),m||i("html").css({overflow:""})},close:function(){m||i("html").css({overflow:"hidden"})}}},elementorFrontend.isEditMode()&&(i.magnificPopup.close(),i("#pp-modal-popup-wrap-"+a).hasClass("pp-popup-preview")&&(_.items={src:d,type:l},_.mainClass=w,i.magnificPopup.open(_))),"yes"!==b&&(w+=" pp-no-overlay"),y=function(e){""!==e&&undefined!==e&&""!==(d=i("[data-url-identifier='"+e+"']").data("src"))&&undefined!==d&&(_.items={src:d,type:l},_.mainClass=w,i.magnificPopup.open(_))},i(window).on("load",function(){var e;"yes"===g&&(e=window.location.href.split("#")[1],y(e),i("a").click(function(e){var t=i(this).attr("href");0!==t.indexOf("#")||""!==(t=t.split("#")[1])&&(e.preventDefault(),y(t))}))}),b=i(".pp-modal-popup-link"),undefined!==_.disableOn&&i(window).width()>_.disableOn||undefined===_.disableOn?(b.show(),"exit-intent"===e?(0===v&&i.removeCookie(h,{path:"/"}),_.items={src:d},_.type=l,_.mainClass="mfp-fade mfp-fade-side",i(document).on("mouseleave",function(e){e.clientY<0&&!i.cookie(h)&&(i.magnificPopup.open(_),0<v?i.cookie(h,v,{expires:v,path:"/"}):i.removeCookie(h))})):"page-load"===e?(0===v&&i.removeCookie(h,{path:"/"}),_.items={src:d},_.type=l,i.cookie(h)||setTimeout(function(){i.magnificPopup.open(_),0<v?i.cookie(h,v,{expires:v,path:"/"}):i.removeCookie(h)},f)):(void 0!==c&&""!==c||(c=".pp-modal-popup-link"),_.iframe={markup:'<div class="'+r+'"><div class="modal-popup-window-inner"><div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe></div></div></div>'},_.items={src:d,type:l},_.mainClass=w,i(c).magnificPopup(_))):b.hide())},u=function(a){var e=C(a),t=a.data("id"),i=a.find("[data-tooltip]"),o="pp-tooltip pp-tooltip-"+t,n=e.tooltip_arrow,s=e.tooltip_trigger,p=e.tooltip_animation,t=e.tooltip_size,l=e.tooltip_zindex,r=elementorFrontend.config.breakpoints;""!==t&&undefined!==t&&(o+=" pp-tooltip-size-"+t),i.each(function(){var e=d(this).data("tooltip-position"),t=d(this).data("tooltip-width"),i=d(this).data("tooltip-distance");window.innerWidth<=r.lg&&window.innerWidth>=r.md&&(e=a.find(".pp-pricing-table-tooptip[data-tooltip]").data("tooltip-position-tablet")),window.innerWidth<r.md&&(e=a.find(".pp-pricing-table-tooptip[data-tooltip]").data("tooltip-position-mobile")),d(this).pptooltipster({trigger:s,animation:p,minWidth:t,ppclass:o,side:e,arrow:"yes"===n,distance:i,interactive:!0,positionTracker:!0,zIndex:l})})},m=function(e,t){var i=e.find(".pp-table").eq(0),a=C(e);"responsive"===a.table_type&&("yes"===a.scrollable&&0<a.breakpoint&&jQuery(window).width()>=a.breakpoint&&jQuery(i).removeAttr("data-tablesaw-mode"),t(document).trigger("enhance.tablesaw")),u(e)},g=function(e,t){var e=e.find(".pp-toggle-container").eq(0),i=t(e).find(".pp-toggle-switch-container"),a=t(e).find(".pp-toggle-switch"),o=t(e).find(".pp-primary-toggle-label"),n=t(e).find(".pp-secondary-toggle-label"),s=t(e).find(".pp-toggle-section-primary"),p=t(e).find(".pp-toggle-section-secondary");a.on("click",function(){s.toggle(0,"swing",function(){i.toggleClass("pp-toggle-switch-on")}),p.toggle(),a.prop("checked",!1),o.hasClass("pp-toggle-active")?(o.removeClass("pp-toggle-active"),n.addClass("pp-toggle-active")):(o.addClass("pp-toggle-active"),n.removeClass("pp-toggle-active")),s.is(":visible")?t(document).trigger("ppe-toggle-switched",[s]):t(document).trigger("ppe-toggle-switched",[p])}),o.on("click",function(){a.prop("checked",!1),i.removeClass("pp-toggle-switch-on"),t(this).addClass("pp-toggle-active"),n.removeClass("pp-toggle-active"),s.show(),p.hide(),t(document).trigger("ppe-toggle-switched",[s])}),n.on("click",function(){a.prop("checked",!0),i.addClass("pp-toggle-switch-on"),t(this).addClass("pp-toggle-active"),o.removeClass("pp-toggle-active"),p.show(),s.hide(),t(document).trigger("ppe-toggle-switched",[p])})},h=function(a,o){var e,t,n,i=a.find(".pp-image-gallery-container").eq(0),s=a.find(".pp-image-gallery").eq(0),p=C(a),l=a.find(".pp-image-gallery-justified").eq(0),r=a.data("id"),d=s.attr("id"),c=p.lightbox_library,p=s.data("fancybox-settings"),f=i.data("settings"),u=[],m=[];_||(s.hasClass("pp-image-gallery-masonry")||s.hasClass("pp-image-gallery-filter-enabled")||"yes"===f.pagination)&&(h="fitRows",s.hasClass("pp-image-gallery-masonry")&&(h="masonry"),i=a.find(".pp-gallery-filters .pp-gallery-filter"),e="",o(i).each(function(){""!==e&&e!==undefined||(e=o(this).attr("data-default"))}),t={itemSelector:".pp-grid-item-wrap",layoutMode:h,percentPosition:!0,filter:e},n={},a.imagesLoaded(function(){n=s.isotope(t),s.find(".pp-gallery-slide-image").on("load",function(){o(this).hasClass("lazyloaded")||setTimeout(function(){s.isotope("layout")},500)})}),a.on("click",".pp-gallery-filter",function(){var e=o(this),t=e.attr("data-filter"),i=e.attr("data-gallery-index"),a=s.find(t);"*"===t&&(a=s.find(".pp-grid-item-wrap")),o(a).each(function(){var e=o(this).find(".pp-image-gallery-item-link");"fancybox"===c?e.attr("data-fancybox",i+"_"+r):e.attr("data-elementor-lightbox-slideshow",i+"_"+r)}),e.siblings().removeClass("pp-active"),e.addClass("pp-active"),n.isotope({filter:t})}),o(".pp-filters-dropdown").on("change",function(){var e=this.value,t=o(this).find(":selected").attr("data-gallery-index"),i=s.find(e);"*"===e&&(i=s.find(".pp-grid-item-wrap")),o(i).each(function(){var e=o(this).find(".pp-image-gallery-item-link");"fancybox"===c?e.attr("data-fancybox",t+"_"+r):e.attr("data-elementor-lightbox-slideshow",t+"_"+r)}),n.isotope({filter:e})}),v(),o(window).on("hashchange",function(){v()}),y(s,".pp-image-gallery","gallery"),elementorFrontend.elements.$window.on("elementor-pro/motion-fx/recalc",function(){n.isotope("layout")}));var g=f.tilt_enable!==undefined?f.tilt_enable:"";"yes"===g&&o(s).find(".pp-image-gallery-thumbnail-wrap").tilt({disableAxis:f.tilt_axis,maxTilt:f.tilt_amount,scale:f.tilt_scale,speed:f.tilt_speed,perspective:1e3}),0<l.length&&l.imagesLoaded(function(){}).done(function(e){l.justifiedGallery({rowHeight:f.row_height,lastRow:f.last_row,selector:"div",waitThumbnailsLoad:!0,margins:f.image_spacing,border:0})});var h='.pp-grid-item-wrap .pp-image-gallery-item-link[data-fancybox="'+d+'"]';function v(){setTimeout(function(){location.hash&&0<o(location.hash).length&&o(location.hash).parent().hasClass("pp-gallery-filters")&&o(location.hash).trigger("click")},500)}function w(){var t,i,e;a.find(".pp-gallery-load-more").removeClass("disabled pp-loading"),0<u.length&&(t=1,i=[],o(u).each(function(){var e=o(this).data("item-id");if(-1===o.inArray(e,m)){if(!(t<=parseInt(f.per_page,10)))return!1;m.push(e),i.push(this),t++}}),0<i.length&&(i=o(i)).imagesLoaded(function(){s.isotope("insert",i),setTimeout(function(){s.isotope("layout")},500),"yes"===g&&o(s).find(".pp-grid-item").tilt({disableAxis:f.tilt_axis,maxTilt:f.tilt_amount,scale:f.tilt_scale,speed:f.tilt_speed})}),0<l.length&&l.imagesLoaded(function(){}).done(function(e){setTimeout(function(){l.justifiedGallery("norewind")},100)}),u.length===m.length&&a.find(".pp-gallery-pagination").hide(),0<o(e='.pp-grid-item-wrap .pp-image-gallery-item-link[data-fancybox="'+d+'"]').length&&o(e).fancybox({loop:!0}))}0<o(h).length&&o(h).fancybox(p),s.find(".pp-grid-item-wrap").each(function(){m.push(o(this).data("item-id"))}),a.find(".pp-gallery-load-more").on("click",function(e){e.preventDefault(),o(this).addClass("disabled pp-loading"),0<u.length?w():(e={action:"pp_gallery_get_images",pp_action:"pp_gallery_get_images",settings:f},o.ajax({type:"post",url:window.location.href.split("#").shift(),data:e,success:function(e){e.success&&((e=e.data.items)&&o(e).each(function(){o(this).hasClass("pp-grid-item-wrap")&&u.push(this)}),w())},error:function(e,t){console.log(t)}}))})},v=function(e){var t="pp-tooltip pp-tooltip-"+e.data("id"),i=e.find(".pp-button[data-tooltip]").data("tooltip-position"),a=elementorFrontend.config.breakpoints;window.innerWidth<=a.lg&&window.innerWidth>=a.md&&(i=e.find(".pp-button[data-tooltip]").data("tooltip-position-tablet")),window.innerWidth<a.md&&(i=e.find(".pp-button[data-tooltip]").data("tooltip-position-mobile")),e.find(".pp-button[data-tooltip]").pptooltipster({trigger:"hover",animation:"fade",ppclass:t,side:i,interactive:!0,positionTracker:!0})},w=function(e,t){var i,a=d("<iframe/>"),o=e.data("src");0===e.find("iframe").length&&((t.hasClass("pp-video-type-youtube")||t.hasClass("pp-video-type-vimeo")||t.hasClass("pp-video-type-dailymotion"))&&a.attr("src",o),a.attr("frameborder","0"),a.attr("allowfullscreen","1"),a.attr("allow","autoplay;encrypted-media;"),e.html(a),t.hasClass("pp-video-type-hosted")&&(i=JSON.parse(t.data("hosted-html")),a.on("load",function(){a.contents().find("body").html(i),a.contents().find("video").css({width:"100%",height:"100%"}),a.contents().find("video").attr("autoplay","autoplay")})))},b=function(e,i){var a=e.find(".pp-showcase-preview").eq(0),t=a.attr("data-slider-settings")!==undefined?JSON.parse(a.attr("data-slider-settings")):"",o=a.attr("id"),n=a.data("rtl"),s=e.find(".pp-showcase-preview-wrap"),p=e.find(".pp-showcase-navigation-items"),l=e.find(".pp-showcase .pp-showcase-navigation-item-wrap"),r=e.find(".pp-showcase .pp-video-play"),d=C(e),c=d.scrollable_nav,f=d.preview_position,u=d.preview_stack,e=elementorFrontend.config.breakpoints;a.slick({slidesToShow:1,slidesToScroll:1,autoplay:"yes"===d.autoplay,autoplaySpeed:d.autoplay_speed,arrows:"yes"===d.arrows,prevArrow:t.prevArrow,nextArrow:t.nextArrow,dots:"yes"===d.dots,fade:"fade"===d.effect,speed:d.animation_speed,infinite:"yes"===d.infinite_loop,pauseOnHover:"yes"===d.pause_on_hover,adaptiveHeight:"yes"===d.adaptive_height,rtl:"yes"===n,asNavFor:"yes"===c?p:""}),a.slick("setPosition"),"yes"===c?p.slick({slidesToShow:d.nav_items!==undefined&&""!==d.nav_items?parseInt(d.nav_items,10):5,slidesToScroll:1,asNavFor:a,arrows:!1,dots:!1,infinite:"yes"===d.infinite_loop,focusOnSelect:!0,vertical:"top"!==f&&"bottom"!==f,centerMode:"yes"===d.nav_center_mode,centerPadding:"0px",responsive:[{breakpoint:e.lg,settings:{slidesToShow:d.nav_items_tablet!==undefined&&""!==d.nav_items_tablet?parseInt(d.nav_items_tablet,10):3,slidesToScroll:1,vertical:u!==undefined&&"tablet"!==u}},{breakpoint:e.md,settings:{slidesToShow:d.nav_items_mobile!==undefined&&""!==d.nav_items_mobile?parseInt(d.nav_items_mobile,10):2,slidesToScroll:1,vertical:!1}}]}):(l.removeClass("pp-active-slide"),l.eq(0).addClass("pp-active-slide"),a.on("beforeChange",function(e,t,i,a){i=a,l.removeClass("pp-active-slide"),l.eq(i).addClass("pp-active-slide")}),l.each(function(t){i(this).on("click",function(e){e.preventDefault(),a.slick("slickGoTo",t)})})),y(a,".pp-showcase","slick"),_&&s.resize(function(){a.slick("setPosition")}),i('.slick-slide:not(.slick-cloned) .pp-showcase-item-link[data-fancybox="'+o+'"]').fancybox({loop:!0}),r.off("click").on("click",function(e){e.preventDefault();var t=i(this).closest(".pp-video"),e=i(this).find(".pp-video-player");w(e,t)})},k=function(e,t){var i,a=e.find(".pp-timeline-horizontal .pp-timeline-items").eq(0),o=e.find(".pp-timeline-wrapper"),n=o.data("rtl"),s=e.find(".pp-timeline-navigation"),p=s.data("nav-arrow")!==undefined?JSON.parse(s.data("nav-arrow")):"",l=p!==undefined?p.replaceAll("right","left"):"",r=C(e),d=r.columns!==undefined&&""!==r.columns?parseInt(r.columns,10):3,c=r.columns_tablet!==undefined&&""!==r.columns_tablet?parseInt(r.columns_tablet,10):2,f=r.columns_mobile!==undefined&&""!==r.columns_mobile?parseInt(r.columns_mobile,10):1,u=r.slides_to_scroll!==undefined&&""!==r.slides_to_scroll?parseInt(r.slides_to_scroll,10):3,m=r.slides_to_scroll_tablet!==undefined&&""!==r.slides_to_scroll_tablet?parseInt(r.slides_to_scroll_tablet,10):2,g=r.slides_to_scroll_mobile!==undefined&&""!==r.slides_to_scroll_mobile?parseInt(r.slides_to_scroll_mobile,10):1,h=elementorFrontend.config.breakpoints;"horizontal"===r.layout&&(i=!1,_&&(l=(p="undefined"!=typeof r.select_arrow?r.select_arrow.value:"")!==undefined?p.replace("right","left"):"",p='<i class="'+p+'"></i>',l='<i class="'+l+'"></i>'),"yes"===r.infinite_loop&&"yes"===r.center_mode&&(i=!0),a.slick({slidesToShow:d,slidesToScroll:u,autoplay:"yes"===r.autoplay,autoplaySpeed:r.autoplay_speed,arrows:!1,pauseOnHover:"yes"===r.pause_on_hover,pauseOnFocus:"yes"===r.pause_on_hover,dots:"yes"===r.dots,centerMode:i,speed:r.animation_speed,infinite:"yes"===r.infinite_loop,rtl:"yes"===n,asNavFor:s,responsive:[{breakpoint:h.lg,settings:{slidesToShow:c,slidesToScroll:m}},{breakpoint:h.md,settings:{slidesToShow:f,slidesToScroll:g}}]}),s.slick({slidesToShow:d,slidesToScroll:u,autoplay:"yes"===r.autoplay,autoplaySpeed:r.autoplay_speed,asNavFor:a,arrows:"yes"===r.arrows,pauseOnHover:"yes"===r.pause_on_hover,pauseOnFocus:"yes"===r.pause_on_hover,prevArrow:'<div class="pp-slider-arrow pp-arrow pp-arrow-prev">'+l+"</div>",nextArrow:'<div class="pp-slider-arrow pp-arrow pp-arrow-next">'+p+"</div>",centerMode:"yes"===r.center_mode,infinite:"yes"===r.infinite_loop,rtl:"yes"===n,focusOnSelect:!0,responsive:[{breakpoint:h.lg,settings:{slidesToShow:c,slidesToScroll:m}},{breakpoint:h.md,settings:{slidesToShow:f,slidesToScroll:g}}]}),a.slick("setPosition"),_&&o.resize(function(){a.slick("setPosition")}),"yes"===r.pause_on_hover&&(e.find(".pp-timeline-card").mouseover(function(){a.slick("slickPause"),s.slick("slickPause")}),e.find(".pp-timeline-card").mouseleave(function(){a.slick("slickPlay"),s.slick("slickPlay")})),y(a,".pp-timeline-horizontal .pp-timeline-items","slick"),y(s,".pp-timeline-navigation","slick"));r={};_&&(r.window=elementor.$previewContents);new PPTimeline(r,e)},x=function(e,t){var i=C(e),a=e.find(".pp-swiper-slider"),o=e.find(".pp-card-slider-item"),n=JSON.parse(a.attr("data-slider-settings")),s=0;l(a,i,n),o.each(function(){t(this).height()>s&&(s=t(this).height())}),"no"!==i.open_lightbox&&e.find(".pp-card-slider-item.swiper-slide-duplicate").each(function(){let e=t(this).find(".pp-card-slider-image a");e.removeAttr("data-elementor-open-lightbox data-elementor-lightbox-slideshow data-elementor-lightbox-index"),e.removeClass("elementor-clickable")}),a.css("height",s+70+"px")},T=function(e,t){var i=e.find(".pp-image-accordion").eq(0),a=C(e),e=a.accordion_action,a=a.disable_body_click,i=i.attr("id"),o=t("#"+i+" .pp-image-accordion-item");"on-hover"===e?o.hover(function(){o.css("flex","1"),o.removeClass("pp-image-accordion-active"),t(this).addClass("pp-image-accordion-active"),o.find(".pp-image-accordion-content-wrap").removeClass("pp-image-accordion-content-active"),t(this).find(".pp-image-accordion-content-wrap").addClass("pp-image-accordion-content-active"),t(this).css("flex","3")},function(){o.css("flex","1"),o.find(".pp-image-accordion-content-wrap").removeClass("pp-image-accordion-content-active"),o.removeClass("pp-image-accordion-active")}):"on-click"===e&&(o.click(function(e){e.stopPropagation(),o.css("flex","1"),o.removeClass("pp-image-accordion-active"),t(this).addClass("pp-image-accordion-active"),o.find(".pp-image-accordion-content-wrap").removeClass("pp-image-accordion-content-active"),t(this).find(".pp-image-accordion-content-wrap").addClass("pp-image-accordion-content-active"),t(this).css("flex","3")}),t("#"+i).click(function(e){e.stopPropagation()}),"yes"!==a&&t("body").click(function(){o.css("flex","1"),o.find(".pp-image-accordion-content-wrap").removeClass("pp-image-accordion-content-active"),o.removeClass("pp-image-accordion-active")}))},S=function(e,s){var t=e.find(".pp-accordion-tab-title"),e=C(e),p=e.accordion_type,l=e.toggle_speed;t.each(function(){s(this).hasClass("pp-accordion-tab-active-default")&&(s(this).addClass("pp-accordion-tab-show pp-accordion-tab-active"),s(this).next().slideDown(l))}),t.unbind("click"),t.on("click keypress",function(e){var t,i,a,o,n;e.preventDefault(),1!=e.which&&13!=e.which&&32!=e.which&&e.which!=undefined||(i=(t=s(this)).parent(),a=t.closest(".pp-advanced-accordion"),o=t.closest(".pp-accordion-item"),n=a.find(".pp-accordion-tab-title"),e=a.find(".pp-accordion-tab-content"),s(document).trigger("ppe-accordion-switched",[i]),"accordion"===p?(n.removeClass("pp-accordion-tab-active-default"),e.removeClass("pp-accordion-tab-active-default"),t.hasClass("pp-accordion-tab-show")?(o.removeClass("pp-accordion-item-active"),t.removeClass("pp-accordion-tab-show pp-accordion-tab-active"),t.attr("aria-expanded","false"),t.next().slideUp(l)):(a.find(".pp-accordion-item").removeClass("pp-accordion-item-active"),n.removeClass("pp-accordion-tab-show pp-accordion-tab-active"),e.slideUp(l),t.toggleClass("pp-accordion-tab-show pp-accordion-tab-active"),n.attr("aria-expanded","false"),o.toggleClass("pp-accordion-item-active"),t.hasClass("pp-accordion-tab-title")&&t.attr("aria-expanded","true"),t.next().slideToggle(l))):t.hasClass("pp-accordion-tab-show")?(t.removeClass("pp-accordion-tab-show pp-accordion-tab-active"),t.next().slideUp(l)):(t.addClass("pp-accordion-tab-show pp-accordion-tab-active"),t.next().slideDown(l)))}),q(),s(window).on("hashchange",function(){q()})};function q(){var e;location.hash&&0<d(location.hash).length&&((e=d(location.hash+".pp-accordion-tab-title"))&&0<e.length&&(location.href="#",d("html, body").animate({scrollTop:e.parents(".pp-accordion-item").offset().top-50+"px"},500,function(){e.parents(".pp-accordion-item").hasClass("pp-accordion-item-active")||e.trigger("click")})))}var I=function(e,t){var i=e.find(".pp-magazine-slider").eq(0),a=i.data("slider-settings"),e=C(e);l(i,e,a)};window.VideoHandler=function(e,t){var i=e.find(".pp-video"),a=e.find(".pp-video-play"),o=a.hasClass("pp-video-play-lightbox");a.off("click").on("click",function(e){e.preventDefault();e=t(this).find(".pp-video-player");o||w(e,i)}),"1"!=a.data("autoplay")||o||w(e.find(".pp-video-player"),i)};var O=function(e,a){var t,i,o=e.find(".pp-video-gallery").eq(0),n=C(e),s=e.find(".pp-video-play"),p=o.data("action");"inline"===p&&s.off("click").on("click",function(e){e.preventDefault();var t=a("<iframe/>"),i=a(this).data("src"),e=a(this).find(".pp-video-player");t.attr("src",i),t.attr("frameborder","0"),t.attr("allowfullscreen","1"),t.attr("allow","autoplay;encrypted-media;"),e.html(t)}),_||"grid"===n.layout&&o.hasClass("pp-video-gallery-filter-enabled")&&(t={itemSelector:".pp-grid-item-wrap",layoutMode:"fitRows",percentPosition:!0},i={},e.imagesLoaded(function(){i=o.isotope(t)}),e.on("click",".pp-gallery-filter",function(){var e=a(this),t=e.attr("data-filter");e.siblings().removeClass("pp-active"),e.addClass("pp-active"),i.isotope({filter:t})})),"lightbox"===p&&(a.fancybox.defaults.media.dailymotion={matcher:/dailymotion.com\/video\/(.*)\/?(.*)/,params:{additionalInfos:0,autoStart:1},type:"iframe",url:"//www.dailymotion.com/embed/video/$1"}),"carousel"===n.layout&&(p=e.find(".pp-video-gallery-wrap").eq(0),e=e.find(".pp-video-gallery").eq(0),p=JSON.parse(p.attr("data-slider-settings")),l(e,n,p))},P=function(e,t){var i=e.find(".pp-album").eq(0),a=i.data("id"),o=i.data("fancybox-class"),i=i.data("fancybox-axis"),e=C(e);"fancybox"===e.lightbox_library&&t('[data-fancybox="'+a+'"]').fancybox({loop:"yes"===e.loop,arrows:"yes"===e.arrows,infobar:"yes"===e.slides_counter,keyboard:"yes"===e.keyboard,toolbar:"yes"===e.toolbar,buttons:e.toolbar_buttons,animationEffect:e.lightbox_animation,transitionEffect:e.transition_effect,baseClass:o,thumbs:{autoStart:"yes"===e.thumbs_auto_start,axis:i}})},F=function(e,i){var t,o,a=e.find(".pp-testimonials").eq(0),n=e.find(".pp-testimonials-wrap"),s=a.data("layout");"carousel"!==s&&"slideshow"!==s||(t=JSON.parse(a.attr("data-slider-settings")),o=e.find(".pp-testimonials-thumb-item-wrap"),e=C(e),a.slick(t),"slideshow"===s&&"yes"===e.thumbnail_nav&&(o.removeClass("pp-active-slide"),o.eq(0).addClass("pp-active-slide"),a.on("beforeChange",function(e,t,i,a){i=a,o.removeClass("pp-active-slide"),o.eq(i).addClass("pp-active-slide")}),o.each(function(t){i(this).on("click",function(e){e.preventDefault(),a.slick("slickGoTo",t)})})),a.slick("setPosition"),y(a,".pp-testimonials","slick"),_&&n.resize(function(){a.slick("setPosition")}))},z=function(e){var t=C(e),i=e.find(".pp-image-scroll-container"),a=i.find(".pp-image-scroll-overlay"),e=i.find(".pp-image-scroll-vertical"),o=i.find(".pp-image-scroll-image img"),n=t.direction_type,s=t.reverse,t=t.trigger_type,p=null;function l(){o.css("transform",("vertical"===n?"translateY":"translateX")+"( -"+p+"px)")}function r(){o.css("transform",("vertical"===n?"translateY":"translateX")+"(0px)")}function d(){p="vertical"===n?o.height()-i.height():o.width()-i.width()}"scroll"===t?(i.addClass("pp-container-scroll"),"vertical"===n?e.addClass("pp-image-scroll-ver"):i.imagesLoaded(function(){a.css({width:o.width(),height:o.height()})})):("yes"===s&&i.imagesLoaded(function(){i.addClass("pp-container-scroll-instant"),d(),l()}),"vertical"===n&&e.removeClass("pp-image-scroll-ver"),i.mouseenter(function(){i.removeClass("pp-container-scroll-instant"),d(),("yes"===s?r:l)()}),i.mouseleave(function(){("yes"===s?l:r)()}))},L=function(e,t){t(document).ready(function(){"undefined"!==twttr&&twttr.widgets.load()})},N=function(s,e){var p=C(s),l=s.find(".pp-tabbed-gallery-carousel").eq(0),r=l.attr("data-slider-settings")!==undefined?JSON.parse(l.attr("data-slider-settings")):"",t=".pp-tabbed-gallery-"+s.data("id");e(l).closest(".elementor-widget-wrap").addClass("e-swiper-container"),e(l).closest(".elementor-widget").addClass("e-widget-swiper"),new elementorFrontend.utils.swiper(l,r).then(function(e){var i,t,a,o,n,e=e;c(l,p,e),t=p,a=r,o=e,(n=(i=s).find(".pp-gallery-filters .pp-gallery-filter")).removeClass("pp-active-slide"),n.eq(0).addClass("pp-active-slide"),void 0!==o&&(o.on("slideChange",function(){var e=i.find(".swiper-slide.swiper-slide-active").data("swiper-slide-index"),t=i.find(".swiper-slide.swiper-slide-next").data("swiper-slide-index");n.eq(e).data("group")!==n.eq(t).data("group")&&(n.removeClass("pp-active-slide"),t=n.eq(t).data("group"),n.filter('[data-group="'+t+'"]').addClass("pp-active-slide"))}),n.each(function(){d(this).on("click",function(e){e.preventDefault(),e=d(window).width()<=480&&t.slides_per_view_mobile<=2?d(this).data("index")+parseInt(t.slides_per_view_mobile):d(window).width()<=768&&t.slides_per_view_tablet<=2?d(this).data("index")+parseInt(t.slides_per_view_tablet):d(this).data("index")+parseInt(a.slidesPerView),n.removeClass("pp-active-slide"),d(this).addClass("pp-active-slide"),o.slideTo(e)})}))}),e('.swiper-slide:not(.swiper-slide-duplicate) .pp-image-slider-slide-link[data-fancybox="'+t+'"]').fancybox({loop:!0})},R=function(e){var t,i,a=C(e);"carousel"===a.layout&&(t=e.find(".pp-coupons-carousel"),i=JSON.parse(t.attr("data-slider-settings")),l(t,a,i)),e.find(".pp-coupon").each(function(){var t=d(this).find(".pp-coupon-code").attr("data-coupon-code");d(this).find(".pp-coupon-code").not(".pp-copied").on("click",function(){var e=d(this);e.append('<input type="text" value="'+t+'" id="ppCouponInput">'),document.getElementById("ppCouponInput").select(),document.execCommand("copy"),d("#ppCouponInput").remove(),"copy"===a.coupon_style?(e.addClass("pp-copied"),e.find(".pp-coupon-copy-text").fadeOut().text(ppCoupons.copied_text).fadeIn()):(e.find(".pp-coupon-reveal-wrap").css({transform:"translate(200px, 0px)"}),setTimeout(function(){e.find(".pp-coupon-code-text-wrap").removeClass("pp-unreavel"),e.find(".pp-coupon-code-text").text(t),e.find(".pp-coupon-reveal-wrap").remove()},150),setTimeout(function(){e.addClass("pp-copied"),e.find(".pp-coupon-copy-text").fadeOut().text(ppCoupons.copied_text).fadeIn()},500))})})},A=function(e,t){var i,a=C(e),o=e.find(".pp-category-wrap"),n=o.find(".pp-category");"yes"===a.equal_height&&(i=0,o.each(function(){t(this).outerHeight()>i&&(i=t(this).outerHeight())}),n.css("height",i+"px")),"carousel"===a.layout&&(n=e.find(".pp-categories-carousel"),e=JSON.parse(n.attr("data-slider-settings")),l(n,a,e))},H=function(e,t){void 0!==e&&e.find("select:not([multiple])").each(function(){var e=t(this);(e.next().hasClass("chosen-container")?e.next():e).wrap('<span class="pp-gf-select-custom"></span>')})},J=function(e){var t=C(e),i=e.find(".pp-sitemap-list"),e=t.sitemap_tree,t=t.sitemap_tree_style;"yes"===e&&("plus_circle"===t?i.treed():"caret"===t?i.treed({openedClass:"fa-caret-down",closedClass:"fa-caret-right"}):"plus"===t?i.treed({openedClass:"fa-minus",closedClass:"fa-plus"}):"folder"===t&&i.treed({openedClass:"fa-folder-open",closedClass:"fa-folder"}))},D=function(e){var t=C(e).breadcrumbs_type;"powerpack"!==t&&e.find(".pp-breadcrumbs a").parent().css({padding:"0","background-color":"transparent",border:"0",margin:"0","box-shadow":"none"}),"yoast"!==t&&"rankmath"!==t||e.find(".pp-breadcrumbs a").parent().parent().css({padding:"0","background-color":"transparent",border:"0",margin:"0","box-shadow":"none"})},W=function(e,t){var i=e.find(".pp-login-form"),a=e.find(".pp-login-form-wrap").data("page-url"),o=C(e),n=e.find(".pp-fb-login-button").data("appid"),s=e.find(".pp-google-login-button").data("clientid");0<t(i).length&&new PPLoginForm(e,o,{id:e.data("id"),messages:{empty_username:ppLogin.empty_username,empty_password:ppLogin.empty_password,empty_password_1:ppLogin.empty_password_1,empty_password_2:ppLogin.empty_password_2,empty_recaptcha:ppLogin.empty_recaptcha,email_sent:ppLogin.email_sent,reset_success:ppLogin.reset_success},i18n:{pw_toggle_text:{show:ppLogin.show_password,hide:ppLogin.hide_password}},page_url:a,facebook_login:"yes"===o.facebook_login?"true":"false",facebook_app_id:n,facebook_sdk_url:"",google_login:"yes"===o.google_login?"true":"false",enable_recaptcha:"yes"===o.enable_recaptcha?"true":"false",google_client_id:s})},j=function(e,t){u(e)},E=function(e,t){var i=e.find(".pp-registration-form"),a=C(e);0<t(i).length&&new PPRegistrationForm(e,{id:e.data("id"),min_pass_length:i.data("password-length"),pws_meter:"yes"===a.enable_pws_meter,i18n:{messages:{error:{invalid_username:ppRegistration.invalid_username,username_exists:ppRegistration.username_exists,empty_email:ppRegistration.empty_email,invalid_email:ppRegistration.invalid_email,email_exists:ppRegistration.email_exists,password:ppRegistration.password,password_length:ppRegistration.password_length,password_mismatch:ppRegistration.password_mismatch,invalid_url:ppRegistration.invalid_url,recaptcha_php_ver:ppRegistration.recaptcha_php_ver,recaptcha_missing_key:ppRegistration.recaptcha_missing_key},success:a.success_message},pw_toggle_text:{show:ppRegistration.show_password,hide:ppRegistration.hide_password}},ajaxurl:ppRegistration.ajax_url})},M=function(e,l){var t,r,d,i=C(e),a=e.find(".pp-content-reveal-content-wrapper"),o=e.find(".pp-content-reveal-content"),n=e.find(".pp-content-reveal-saparator"),s=e.find(".pp-content-reveal-button-inner"),p=e.find(".pp-content-reveal-buttons-wrapper"),c=o.outerHeight(),f=a.data("scroll-top"),u=a.data("visibility"),m=a.data("content-height"),g=1e3*a.data("speed"),h=a.data("lines"),v=e.find(".pp-content-reveal-content p").css("line-height"),e=o.css("padding-top");"reveal"===i.default_content_state&&n.hide(),"lines"==u?("0"==h?t=a.outerHeight():(t=parseInt(v,10)*h+parseInt(e,10),"unreveal"===i.default_content_state&&a.css("height",t+"px")),e=o.find("> *"),d=r=0,e.each(function(e){if(r<h){var t=(a=this,s=window.getComputedStyle(a),(p=document.createElement(a.nodeName)).setAttribute("style","margin:0px;padding:0px;font-family:"+s.fontFamily+";font-size:"+s.fontSize),p.innerHTML="test",a=(p=a.parentNode.appendChild(p)).clientHeight,p.parentNode.removeChild(p),a),i=l(this).outerHeight()/t,a=window.getComputedStyle(this);if(1<i&&isFinite(i)){for(var o=0,n=1,n=1;n<=i;n++)r<h&&(d+=t,r++,o++);o===i&&(d+=parseInt(a.marginTop)+parseInt(a.marginBottom))}else d+=l(this).outerHeight(!0),r++}var a,s,p}),o.outerHeight(!0)-1<=d&&(p.hide(),n.hide())):("unreveal"===i.default_content_state&&a.css("height",m+"px"),t=m),s.on("click",function(){n.slideToggle(g),l(this).toggleClass("pp-content-revealed"),s.hasClass("pp-content-revealed")?a.animate({height:c+"px"},g):(a.animate({height:t+"px"},g),"yes"==f&&l("html, body").animate({scrollTop:a.offset().top-50+"px"}))})};d(document).on("posts.rendered",function(e,t){M(t,d)});var B=function(e){var t,i,a,o,n,s;e.data("pp-wrapper-link")&&(t=e.data("pp-wrapper-link"),i=e.data("id"),a=t.url,o=t.is_external?"_blank":"_self",n=t.nofollow?"nofollow":"",s=document.createElement("a"),e.on("click.onPPWrapperLink",function(){s.id="pp-wrapper-link-"+i,s.href=a,s.target=o,s.rel=n,s.style.display="none",document.body.appendChild(s);var e=document.getElementById(s.id);e.click();var t=setTimeout(function(){document.body.removeChild(e),clearTimeout(t)})}))},G=function(a,e){var t,o,i,n,s,p,l,r,d,c,f,u=C(a);"yes"===u.pp_elements_tooltip_enable&&(i="pp-tooltip pp-tooltip-"+(o=(t=a).data("id")),n=u.pp_elements_tooltip_position,s=u.pp_elements_tooltip_arrow,f=u.pp_elements_tooltip_target,p=u.pp_elements_tooltip_selector,l=u.pp_elements_tooltip_trigger,r=""!==u.pp_elements_tooltip_distance&&undefined!==u.pp_elements_tooltip_distance?u.pp_elements_tooltip_distance.size:"",d=u.pp_elements_tooltip_animation,c=""!==u.pp_elements_tooltip_width&&undefined!==u.pp_elements_tooltip_width?u.pp_elements_tooltip_width.size:"",u=u.pp_elements_tooltip_zindex,"custom"===f&&""!==p&&(f=a.find(p),p.length&&(t=f)),a.hasClass("tooltipstered")&&a.pptooltipster("destroy"),t.hasClass("tooltipstered")&&e(t).pptooltipster("destroy"),e(t).pptooltipster({trigger:l,content:a.find("#pp-tooltip-content-"+o),animation:d,minWidth:0,maxWidth:c,ppclass:i,position:n,arrow:"yes"===s,distance:r,interactive:!0,positionTracker:!0,zIndex:u,functionInit:function(e,t){var i=a.find("#pp-tooltip-content-"+o).detach();e.content(i)}}))};d(window).on("elementor/frontend/init",function(){elementorFrontend.isEditMode()&&(_=!0);var e={"pp-image-hotspots.default":i,"pp-image-comparison.default":a,"pp-counter.default":o,"pp-logo-carousel.default":t,"pp-info-box-carousel.default":n,"pp-instafeed.default":p,"pp-team-member-carousel.default":t,"pp-modal-popup.default":f,"pp-table.default":m,"pp-toggle.default":g,"pp-image-gallery.default":h,"pp-image-slider.default":r,"pp-buttons.default":v,"pp-showcase.default":b,"pp-timeline.default":k,"pp-card-slider.default":x,"pp-image-accordion.default":T,"pp-advanced-accordion.default":S,"pp-content-ticker.default":t,"pp-magazine-slider.default":I,"pp-video.default":VideoHandler,"pp-video-gallery.default":O,"pp-testimonials.default":F,"pp-scroll-image.default":z,"pp-album.default":P,"pp-twitter-timeline.default":L,"pp-twitter-tweet.default":L,"pp-tabbed-gallery.default":N,"pp-faq.default":S,"pp-coupons.default":R,"pp-categories.default":A,"pp-gravity-forms.default":H,"pp-sitemap.default":J,"pp-breadcrumbs.default":D,"pp-login-form.default":W,"pp-registration-form.default":E,"pp-pricing-table.default":j,"pp-content-reveal.default":M,"pp-business-reviews.default":t,"pp-business-reviews.classic":t,"pp-business-reviews.card":t};d.each(e,function(e,t){elementorFrontend.hooks.addAction("frontend/element_ready/"+e,t)}),elementorFrontend.hooks.addAction("frontend/element_ready/global",B),elementorFrontend.hooks.addAction("frontend/element_ready/widget",G)})}(jQuery);