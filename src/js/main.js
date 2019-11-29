window.onload = init;

function init() {
    const sliderTeam = new Slider('.slider', {
        centerMode: true,
        centerPadding: '180px',
        slidesToShow: 1,
        speed: 400,
    });
    sliderTeam.run();

    const sliderComment = new Slider('.slider-comment');
    sliderComment.run();
}