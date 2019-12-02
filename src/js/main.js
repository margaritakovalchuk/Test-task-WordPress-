window.onload = init;

function init() {
    const sliderTeam = new Slider('.slider-team', {
        centerMode: true,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next'),
        infinite: false,
        dots: false,
        arrows: true,
        autoplay: false,
        swipe: true,
        touchMove: false,
        centerPadding: '10%',
        slidesToShow: 2,
        slidesToScroll: 1,
        lazyLoad: 'progressive',
        variableWidth: true,
        // responsive: [
        //     {
        //         breakpoint: 992,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 1
        //         }
        //     },
        //     {
        //         breakpoint: 500,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //             centerMode: false
        //         }
        //     },
        // ]
    });
    sliderTeam.run();

    const sliderComment = new Slider('');
    sliderComment.run();
}