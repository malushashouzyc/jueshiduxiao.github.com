/**
 * @author liangxiao
 * @version [v1.0]
 * @description
 */

/*jslint browser: true, vars: true, nomen: true, indent: 4, maxlen: 80, plusplus: true, sloppy: true*/
/*global define: true, $: true, App: true */
define(function (require, exports, module) {
    'use strict';

    var EffectSlide = {
        init: function () {
            var $wrapper = this.$wrapper;
            var $items = this.$items;
            var direction = this.direction;
            var width = $items.eq(0).width();
            var height = $items.eq(0).height();

            if ($wrapper.css('position') === 'static') {
                $wrapper.css('position', 'relative');
            }
            $wrapper.css('overflow', 'hidden');
            $items.css({
                'display': 'block',
                'position': 'absolute',
                'top': 0,
                'left': 0
            });
            $.each($items, function (index, item) {
                if (direction === 0) {
                    $(item).css('left', index * width);
                } else {
                    $(item).css('top', index * height);
                }
            });
            if (direction === 0) {
                $wrapper.scrollLeft(0);
            } else {
                $wrapper.scrollTop(0);
            }
        },
        swap: function (pageIndex, callback) {
            var $wrapper = this.$wrapper;
            var $items = this.$items;
            var direction = this.direction;
            var curIndex = this.curIndex;
            var width = $items.eq(0).width();
            var height = $items.eq(0).height();
            var pageSize = this.pageSize;
            var animateParams = {};

            // same
            if (pageIndex === curIndex) {
                return;
            }
            // clear
            $wrapper.stop();
            // begin
            if (direction === 0) {
                animateParams = {
                    'scrollLeft': pageIndex * pageSize * width
                };
            } else {
                animateParams = {
                    'scrollTop': pageIndex * pageSize * height
                };
            }
            $wrapper.animate(animateParams, 500);
            // callback
            if ($.isFunction(callback)) {
                callback();
            }
        }
    };

    return EffectSlide;
});
