!function(o){PPAdvancedMenu=function(e,n){this.node=e,this.menu_wrap=e.find(".pp-advanced-menu-main-wrapper"),this.wrap=e.find(".pp-advanced-menu__container"),this.menu=e.find(".pp-advanced-menu"),this.dropdownMenu=e.find(".pp-advanced-menu__container.pp-advanced-menu--dropdown"),this.anchorLink=e.find(".pp-advanced-menu--main .pp-menu-item-anchor"),this.menuToggle=e.find(".pp-menu-toggle"),this.settings=e.find(".pp-advanced-menu__container").data("settings"),this.settings&&(this.menuId=this.settings.menu_id,this.menuType=n.menu_type,this.fullWidth=n.full_width,this.menuLayout=n.layout,this.showSubmenuOn=n.show_submenu_on,this.showSubmenuOnClick="click"==this.showSubmenuOn,this.onepage_menu=n.onepage_menu,this.duration=400,this.iconValue=n.submenu_icon.value,this.subIndicatorsContent="",this.iconValue&&(this.subIndicatorsContent=-1<this.iconValue.indexOf("<")?this.iconValue:`<i class="${this.iconValue}"></i>`),this.init())};var a=!(PPAdvancedMenu.prototype={stretchElement:null,init:function(){this.menu.length&&(jQuery.fn.smartmenus&&(jQuery.SmartMenus.prototype.isCSSOn=function(){return!0},elementorFrontend.config.is_rtl&&(jQuery.fn.smartmenus.defaults.rightToLeftSubMenus=!0)),"horizontal"===this.menuLayout&&"undefined"!=typeof o.fn.smartmenus&&this.menu.smartmenus({subIndicators:""!==this.subIndicatorsContent,subIndicatorsText:this.subIndicatorsContent,subIndicatorsPos:"append",subMenusMaxWidth:"1000px",subMenusMinWidth:"",showOnClick:this.showSubmenuOnClick,collapsibleBehavior:"link"}).on("click","span.sub-arrow",function(e){var n=o(this).closest("a.has-submenu");n.toggleClass("highlighted"),n.attr("aria-expanded","false"==n.attr("aria-expanded")?"true":"false");n=n.siblings("ul");n.attr("aria-hidden","false"==n.attr("aria-hidden")?"true":"false"),n.attr("aria-expanded","false"==n.attr("aria-expanded")?"true":"false"),"true"===n.attr("aria-expanded")?n.css({width:"auto",display:"block"}):n.css({width:"auto",display:"none"}),e.preventDefault(),e.stopPropagation()}),"vertical"===this.menuLayout&&"undefined"!=typeof o.fn.smartmenus&&this.menu.smartmenus({subIndicators:""!==this.subIndicatorsContent,subIndicatorsText:this.subIndicatorsContent,subIndicatorsPos:"append",subMenusMaxWidth:"",subMenusMinWidth:"",mainMenuSubOffsetX:"0px",mainMenuSubOffsetY:"0px",subMenusSubOffsetX:"0px",subMenusSubOffsetY:"0px",showOnClick:this.showSubmenuOnClick,collapsibleBehavior:"link"}).on("click","span.sub-arrow",function(e){var n=o(this).closest("a.has-submenu");n.toggleClass("highlighted"),n.attr("aria-expanded","false"==n.attr("aria-expanded")?"true":"false");n=n.siblings("ul");n.attr("aria-hidden","false"==n.attr("aria-hidden")?"true":"false"),n.attr("aria-expanded","false"==n.attr("aria-expanded")?"true":"false"),"true"===n.attr("aria-expanded")?n.css({width:"auto",display:"block"}):n.css({width:"auto",display:"none"}),e.preventDefault(),e.stopPropagation()}),"default"===this.menuType&&(this.initStretchElement(),this.stretchMenu()),"off-canvas"===this.menuType&&this.initOffCanvas(),"full-screen"===this.menuType&&this.initFullScreen(),this.bindEvents(),elementorFrontend.isEditMode()||this.followMenuAnchors(),o(window).on("load",o.proxy(this.resetDimensions,this)),this.menu.smartmenus("refresh"))},getElementSettings:function(e){return"undefined"!=typeof this.settings[e]&&this.settings[e]},bindEvents:function(){var t=this;this.menu.length&&(this.menuToggle.on("click",o.proxy(this.toggleMenu,this)),"yes"===this.onepage_menu&&this.menu.on("click",'.menu-item > a[href*="#"]',function(e){var n=o(this).attr("href");"#"!==n&&(n=n.split("#")[1],0<o("body").find("#"+n).length&&(e.preventDefault(),o(this).toggleClass("pp-active")),t.closeMenu())}),"default"===this.menuType&&elementorFrontend.addListenerOnce(this.node.data("model-cid"),"resize",o.proxy(this.stretchMenu,this)),this.closeMenuESC())},panelUpdate:function(){var s=this;"undefined"!=typeof elementor&&o("body").hasClass("elementor-editor-active")&&elementor.hooks.addAction("panel/open_editor/widget/pp-advanced-menu",function(e,n,t){e.$el.find('select[data-setting="dropdown"]').on("change",function(){n.attributes.id===s.menuId&&("all"===o(this).val()&&s.node.find(".pp-advanced-menu--main").hide(),"all"!==o(this).val()&&s.node.find(".pp-advanced-menu--main").show())}),n.attributes.id===s.menuId&&"all"===s.settings.breakpoint&&s.toggleMenu()})},initStretchElement:function(){this.stretchElement=new elementorFrontend.modules.StretchElement({element:this.dropdownMenu})},stretchMenu:function(){"stretch"==this.fullWidth?(this.stretchElement.stretch(),this.dropdownMenu.css("top",this.menuToggle.outerHeight())):this.stretchElement.reset()},initOffCanvas:function(){o(".pp-menu-"+this.settings.menu_id).each(function(e,n){o(n).parent().is("body")&&o(n).remove()}),0<this.menu_wrap.find(".pp-menu-off-canvas").length&&(0<o(".pp-offcanvas-container > .pp-menu-"+this.settings.menu_id).length&&o(".pp-offcanvas-container > .pp-menu-"+this.settings.menu_id).remove(),0<o("body > .pp-menu-"+this.settings.menu_id).length&&o("body > .pp-menu-"+this.settings.menu_id).remove(),o("body").prepend(this.node.find(".pp-menu-"+this.settings.menu_id))),o(".pp-menu-clear").fadeOut(400,function(){o(this).remove()}),o(".pp-menu-"+this.settings.menu_id).css("height",window.innerHeight+150+"px"),o(".pp-menu-"+this.settings.menu_id).find(".pp-menu-close").on("click",o.proxy(this.closeMenu,this))},initFullScreen:function(){o("body").addClass("pp-menu--full-screen"),o(".pp-menu-"+this.settings.menu_id).css("height",window.innerHeight+150+"px"),o(".pp-menu-"+this.settings.menu_id).find(".pp-menu-close").on("click",o.proxy(this.closeMenu,this))},resetDimensions:function(){"full-screen"===this.menuType&&o(".pp-menu-"+this.settings.menu_id).css("height",window.innerHeight+150+"px")},toggleMenu:function(){this.menuToggle.toggleClass("pp-active");var e,n=this.menuType,t=this.menuToggle.hasClass("pp-active");o("html").removeClass("pp-menu-toggle-open"),t&&o("html").addClass("pp-menu-toggle-open"),"default"===n&&(e=this.dropdownMenu,t?(e.hide().slideDown(250,function(){e.css("display","")}),this.stretchMenu()):e.show().slideUp(250,function(){e.css("display","")})),"off-canvas"===n&&this.toggleOffCanvas(),"full-screen"===n&&this.toggleFullScreen()},toggleOffCanvas:function(){var e=this.menuToggle.hasClass("pp-active"),n=o("body").find(".pp-menu-"+this.menuId),t=this.duration,s=this;o("html").removeClass("pp-menu-toggle-open"),t=e?(o("body").addClass("pp-menu--off-canvas"),o("html").addClass("pp-menu-toggle-open"),0):this.duration,o(".pp-menu-open").removeClass("pp-menu-open"),o(".pp-advanced-menu--toggle .pp-menu-toggle").not(this.menuToggle).removeClass("pp-active"),setTimeout(function(){o(".pp-menu-off-canvas").removeAttr("style"),e?(o("body").addClass("pp-menu-open"),n.addClass("pp-menu-open").css("z-index","999999"),0===o(".pp-menu-clear").length&&o("body").append('<div class="pp-menu-clear" style="transition: none !important;"></div>'),o(".pp-menu-clear").off("click").on("click",o.proxy(s.closeMenu,s)),o(".pp-menu-clear").fadeIn()):(o(".pp-menu-open").removeClass("pp-menu-open"),o("body").removeClass("pp-menu--off-canvas"),o("html").removeClass("pp-menu-toggle-open"),o(".pp-menu-clear").fadeOut())},t)},toggleFullScreen:function(){var e=this.menuToggle.hasClass("pp-active");o("body").find(".pp-menu-"+this.menuId);o("html").removeClass("pp-menu-toggle-open"),e&&(o("html").addClass("pp-menu-toggle-open"),this.node.find(".pp-menu-full-screen").addClass("pp-menu-open"))},closeMenu:function(){var e;"default"!==this.menuType&&(o(".pp-menu-open").removeClass("pp-menu-open"),this.menuToggle.removeClass("pp-active"),o("html").removeClass("pp-menu-toggle-open"),"full-screen"===this.menuType&&(e=this.node.find(".pp-menu-full-screen").data("scroll"),o(window).scrollTop(e)),o(".pp-menu-clear").fadeOut())},closeMenuESC:function(){var n=this;o(document).on("keydown",function(e){27===e.keyCode&&n.closeMenu()})},followMenuAnchors:function(){var e=this;this.anchorLink.each(function(){location.pathname===this.pathname&&""!==this.hash&&e.followMenuAnchorEle(o(this))})},followMenuAnchorEle:function(n){var e=n[0].hash;let t=-300,s;try{s=o(decodeURIComponent(e))}catch(i){return}s.length&&(s.hasClass("pp-menu-anchor")||(e=jQuery(window).height()/2,t=-s.outerHeight()+e),elementorFrontend.waypoint(s,function(e){"down"===e?n.addClass("pp-menu-item-active"):n.removeClass("pp-menu-item-active")},{offset:"50%",triggerOnce:!1}),elementorFrontend.waypoint(s,function(e){"down"===e?n.removeClass("pp-menu-item-active"):n.addClass("pp-menu-item-active")},{offset:t,triggerOnce:!1}))}}),e=function(e){var n,t,s,i,o=(s={},i=(o=e).data("model-cid"),a&&i?(n=elementorFrontend.config.elements.data[i],t=elementorFrontend.config.elements.keys[n.attributes.widgetType||n.attributes.elType],jQuery.each(n.getActiveControls(),function(e){-1!==t.indexOf(e)&&(s[e]=n.attributes[e])})):s=o.data("settings")||{},s);new PPAdvancedMenu(e,o)};o(window).on("elementor/frontend/init",function(){elementorFrontend.isEditMode()&&(a=!0),elementorFrontend.hooks.addAction("frontend/element_ready/pp-advanced-menu.default",e)})}(jQuery);