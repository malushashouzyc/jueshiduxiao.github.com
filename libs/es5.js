/**
 * @author liangxiao
 * @version [v1.0]
 * @description
 */

/*jslint browser: true, vars: true, nomen: true, indent: 4, maxlen: 80, plusplus: true, sloppy: true*/
/*global define: true, $: true, App: true */
(function () {
    'use strict';

    /*---------------------------------------*
    * Function
    *---------------------------------------*/
    (function (fp) {
        // bind
        if (typeof fp.bind === 'function') {
            return;
        }
        fp.bind = function (thisContext) {
            var thisFunction = this;
            return function () {
                return thisFunction.apply(thisContext, arguments);
            };
        };
    }(Function.prototype));


    /*---------------------------------------*
    * Interval | Timeout
    *---------------------------------------*/
    (function (w) {
        var wi = w.setInterval;
        var wt = w.setTimeout;

        w.setInterval = function () {
            var args = arguments;
            var func = args[0];
            var delay = args[1];
            var newArgs = Array.prototype.slice.call(args, 2);

            return wi(function () {
                func.apply(window, newArgs);
            }, delay);
        };
        w.setTimeout = function () {
            var args = arguments;
            var func = args[0];
            var delay = args[1];
            var newArgs = Array.prototype.slice.call(args, 2);

            return wt(function () {
                func.apply(window, newArgs);
            }, delay);
        };
    }(window));
}());
