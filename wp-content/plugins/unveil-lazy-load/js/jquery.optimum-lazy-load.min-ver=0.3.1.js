/**
 * Plugin Name: Unveil Lazy Load
 * Author: Daisuke Maruyama
 * Author URI: http://marubon.info/
 * Plugin URI: http://wordpress.org/plugins/unveil-lazy-load/
 * License: GPLv2 or later 
 */
;(function(e){function b(){c=a.filter(function(){var f=e(this),a=d.scrollTop(),b=a+d.height(),c=f.offset().top;return c+f.height()>=a-g&&c<=b+g});a=a.not(c.trigger("scrollin"))}var d=e(window),g=200,a=e("img[data-src]"),c;a.bind("scrollin",{},function(){var a=jQuery(this),b=a.attr("data-src");a.unbind("scrollin").hide().removeAttr("data-src");this.src=b;a.fadeIn()});d.scroll(b);d.resize(b);b();return this})(jQuery);