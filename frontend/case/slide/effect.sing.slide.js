/**
 * @author liangxiao
 * @version [v1.0]
 * @description
 */

/*jslint browser: true, vars: true, nomen: true, indent: 4, maxlen: 180, plusplus: true, sloppy: true*/
/*global define: true, $: true, App: true */
define(function (require, exports, module) {
    'use strict';

    var EffectSingSlide = {
        init: function () {
            var $wrapper = this.$wrapper;
            var $items = this.$items;
            var direction = this.direction;
            var pageSize = this.pageSize;
            var width = $items.eq(0).width();
            var height = $items.eq(0).height();

            if ($wrapper.css('position') === 'static') {
                $wrapper.css('position', 'relative');
            }
            $wrapper.css('overflow', 'hidden');
            $items.css({
                'position': 'absolute',
                'top': 0,
                'left': 0
            });
            $.each($items, function (index, item) {
                if (direction === 0) {
                    $(item).css('left', index % pageSize * width);
                } else {
                    $(item).css('top', index % pageSize * height);
                }
            });
            $items.slice(pageSize).hide();
        },
        swap: function (pageIndex, callback) {
            var $items = this.$items;
            var direction = this.direction;
            var pageSize = this.pageSize;
            var curIndex = this.curIndex;
            var height = $items.eq(0).height();

            // same
            if (pageIndex === curIndex) {
                return;
            }

            var isNext = false;
            if (pageIndex > curIndex) {
                isNext = true;
            }
            if (pageIndex === 0 && curIndex === this.pageCount - 1) {
                isNext = true;
            }
            if (pageIndex === this.pageCount - 1 && curIndex === 0) {
                isNext = false;
            }

            $items.hide().stop();
            if (isNext) {
                $.each($items.slice(curIndex * pageSize, (curIndex + 1) * pageSize), function (index, item) {
                    if (direction === 0) {
                        $(item).css({'top': 0}).show().animate({top: -height}, 500);
                    } else {
                        $(item).css({'top': height * index}).show().animate({top: -height * index}, 500);
                    }
                });
                $.each($items.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize), function (index, item) {
                    if (direction === 0) {
                        $(item).css({'top': height}).show().animate({top: 0}, 500);
                    } else {
                        $(item).css({'top': height * (index + 1)}).show().animate({top: height * index}, 500);
                    }
                });
            } else {
                $.each($items.slice(curIndex * pageSize, (curIndex + 1) * pageSize), function (index, item) {
                    if (direction === 0) {
                        $(item).css({'top': 0}).show().animate({top: height}, 500);
                    } else {
                        $(item).css({'top': height * index}).show().animate({top: height * index}, 500);
                    }
                });
                $.each($items.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize), function (index, item) {
                    if (direction === 0) {
                        $(item).css({'top': -height}).show().animate({top: 0}, 500);
                    } else {
                        $(item).css({'top': -height * (index + 1)}).show().animate({top: height * index}, 500);
                    }
                });
            }
            // callback
            if ($.isFunction(callback)) {
                callback();
            }
        }
    };

    module.exports = EffectSingSlide;
});
