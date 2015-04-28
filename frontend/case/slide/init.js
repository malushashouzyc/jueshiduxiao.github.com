define(function (require, exports, module) {
    var Slide = require('./slide');
    var effect = 'show';
    effect = 'fade';
    effect = 'slide';
    effect = 'singSlideUp';
    effect = 'singSlide';


    slide0 = new Slide($('.wrapper-0'), $('.wrapper-0 a'), {
        effect: effect
    });
    slide1 = new Slide($('.wrapper-1'), $('.wrapper-1 a'), {
        effect: effect,
        pageSize: 3
    });
    slide2 = new Slide($('.wrapper-2'), $('.wrapper-2 a'), {
        effect: effect,
        direction: 1
    });
    slide3 = new Slide($('.wrapper-3'), $('.wrapper-3 a'), {
        effect: effect,
        direction: 1,
        pageSize: 3
    });


    // buttons
    var handle = null;
    var $btns0 = $('.btns-0 a');
    $btns0.bind('mouseover', function (e) {
        var $self = $(this);

        window.clearTimeout(handle);
        handle = window.setTimeout(function () {
            var index = $self.index();

            $btns0.removeClass('current');
            $self.addClass('current');
            // do
            slide0.jump(index);
            slide1.jump(index);
            slide2.jump(index);
            slide3.jump(index);
        }, 200);
    });


    var $btns1 = $('.btns-1 a');
    $btns1.bind('click', function (e) {
        var $self = $(this);
        var btnType = $self.data('type');
        // do
        slide0[btnType]();
        slide1[btnType]();
        slide2[btnType]();
        slide3[btnType]();
    });


    // auto
    window.setInterval(function () {
        // slide0.next();
        // slide1.next();
        // slide2.next();
        // slide3.next();
    }, 2000);
});
