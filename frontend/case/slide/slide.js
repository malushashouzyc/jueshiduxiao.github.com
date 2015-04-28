/**
 * @author liangxiao
 * @version [v1.0]
 * @description
 */

/*jslint browser: true, vars: true, nomen: true, indent: 4, maxlen: 80, plusplus: true, sloppy: true*/
/*global define: true, $: true, App: true */
define(function (require, exports, module) {
    'use strict';

    // slide effect
    var Effect = require('./effect.list');
    // default params
    var defParams = {
        pageSize: 1,
        effect: 'show',
        direction: 0 // [0-水平，1-垂直]
    };
    // Slide
    var Slide = function () {
        this.init.apply(this, arguments);
    };
    Slide.prototype = {
        init: function ($wrapper, $items, conf) {
            this.params = $.extend({}, defParams, conf);
            this.$wrapper = $wrapper;
            this.$items = $items;
            this.pageSize = this.params.pageSize;
            this.direction = this.params.direction;
            this.effect = Effect[this.params.effect] || Effect[defParams.effect];
            this.curIndex = 0;
            this.pageCount = parseInt(this.$items.length / this.pageSize, 10);

            // init
            this.effect.init.call(this);
        },
        prev: function () {
            this.jump(this.curIndex - 1);
        },
        next: function () {
            this.jump(this.curIndex + 1);
        },
        jump: function (pageIndex) {
            if (pageIndex < 0) {
                pageIndex = this.pageCount - 1;
            }
            if (pageIndex > this.pageCount - 1) {
                pageIndex = 0;
            }

            // swap
            var self = this;
            this.effect.swap.call(this, pageIndex, function () {
                self.curIndex = pageIndex;
            });
        },
        getCurIndex: function () {
            return this.curIndex;
        }
    };

    return Slide;
});
