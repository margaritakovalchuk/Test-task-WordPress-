function Slider(sliderClassName, config = {
    // initialSlide: 2,
    // arrows: true,
    // slidesToScroll: 1,

    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
}) {
    this.sliderClassName = sliderClassName;
    this.config = config;
}

Slider.prototype = (function () {
    const slider = document.querySelector(this.sliderClassName);

    function run() {
        slider.slick(this.config)
    }

    return { run };
})();
