window.onload = init;

function init() {
    const slider = new Slider('.slick-center', {
        prevArrow: $('.pic-prev'),
        nextArrow: $('.pic-next'),
        infinite: false,
        dots: false,
        arrows: true,
        autoplay: false,
        swipe: true,
        touchMove: false,
        centerMode: true,
        centerPadding: '12%',
        slidesToShow: 3,
        slidesToScroll: 3,
        lazyLoad: 'progressive',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false
                }
            },
        ]
    });
    slider.run();

    // const sliderTeam = new Slider('.slider-team', {
    //     // prevArrow: $('.pic-prev'),
    //     // nextArrow: $('.pic-next'),
    //     infinite: true,
    //     dots: false,
    //     arrows: true,
    //     autoplay: false,
    //     swipe: true,
    //     touchMove: false,
    //     centerMode: true,
    //     centerPadding: '12%',
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     lazyLoad: 'progressive',
    //     responsive: [
    //         {
    //             breakpoint: 992,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 1
    //             }
    //         },
    //         {
    //             breakpoint: 500,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 centerMode: false
    //             }
    //         },
    //     ]
    // });
    // sliderTeam.run();

    const sliderComment = new Slider('.slider-comment');
    sliderComment.run();
}