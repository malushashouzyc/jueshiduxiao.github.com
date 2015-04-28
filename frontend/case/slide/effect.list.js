/**
 * @author liangxiao
 * @version [v1.0]
 * @description
 */

/*jslint browser: true, vars: true, nomen: true, indent: 4, maxlen: 80, plusplus: true, sloppy: true*/
/*global define: true, $: true, App: true */
define(function (require, exports, module) {
    'use strict';

    // EffectList
    var EffectList = {};
    EffectList.show = {
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
            var pageSize = this.pageSize;
            var curIndex = this.curIndex;

            // same
            if (pageIndex === curIndex) {
                return;
            }
            $items.slice(curIndex * pageSize,
                (curIndex + 1) * pageSize).hide();
            $items.slice(pageIndex * pageSize,
                (pageIndex + 1) * pageSize).show();
            // callback
            if ($.isFunction(callback)) {
                callback();
            }
        }
    };
    EffectList.slide = require('./effect.slide.js');
    EffectList.fade = require('./effect.fade.js');
    EffectList.singSlide = require('./effect.sing.slide.js');
    EffectList.singSlideUp = require('./effect.sing.slide.up.js');

    return EffectList;
});
