$(function () {

    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        dots: false,
        // fade: true,

    });
    

    $('.main_slide').on('init afterChange', function (e, s, c) {
        const current = $('main_slide .slilck-current');

        console.log(c, s.slideCount);

        $('.num span').text(s.slideCount);
        $('.num strong').text(c ? (c + 1) : 1);

        current
            .addClass('on')
            .siblings()
            .removeClass('on')

        $('.visual_slide .menu li')
            .eq(0)
            .addClass('on');

        $('.visual_slide .menu li')
            .eq(c)
            .addClass('on')
            .siblings()
            .removeClass('on');

    });
    $('.sub_slide').slick({
        arrows: false,
        autoplay: false,
        pauseOnHover: false,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 4,
    });


    $('.visual_slide .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev')
    });

    $('.visual_slide .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext')
    });


    $('.visual_sub_slid .arrows .left').on('click', function () {
        $('.sub_slide').slick('slickPrev')
    });

    $('.visual_sub_slid .arrows .right').on('click', function () {
        $('.sub_slide').slick('slickNext')
    });

    $('.main_visual .main_slide').on('afterChange', function (e, s, c) {
        console.log(e, s, c);//c=0,1
        $('.main_visual .num span').text('0' + (c + 1));
    })

    


    
});