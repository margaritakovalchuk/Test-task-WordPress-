class Slider {
    constructor(sliderClassName = '.slider', config = {
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
    }){
        this.slider = $(sliderClassName);
        this.config = config;
    }

    run() {
        this.slider.slick(this.config);
    }
}
