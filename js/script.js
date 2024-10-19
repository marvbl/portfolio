$(document).ready(function() {
    $('.single-item').slick({
        infinite: true, // Looping
        slidesToShow: 1, // Show one slide at a time
        slidesToScroll: 1, // Scroll one slide at a time
        arrows: true, // Show navigation arrows
        prevArrow: "<button type='button' class='slick-prev'><img src='images/left-arrow.png' alt='Previous'></button>", // Use custom previous arrow
        nextArrow: "<button type='button' class='slick-next'><img src='images/right-arrow.png' alt='Next'></button>", // Use custom next arrow
        dots: true, // Show dots for pagination
        responsive: [
            {
                breakpoint: 768, // Adjust settings for tablets
                settings: {
                    slidesToShow: 1, // Keep one slide shown
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576, // Adjust settings for mobile
                settings: {
                    slidesToShow: 1, // Keep one slide shown
                    slidesToScroll: 1,
                }
            }
        ]
    });
});

