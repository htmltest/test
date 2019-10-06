$(document).ready(function() {

    $('.reviews-list').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        dots: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true
                }
            }
        ]
    });

    $('.community-list').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        dots: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

});

$(window).on('load resize', function() {
    $('.reviews-list').each(function() {
        var curList = $(this);

        curList.find('.reviews-item-name').css({'min-height': '0px'});

        if ($(window).width() > 1199) {
            curList.find('.reviews-item-name').each(function() {
                var curBlock = $(this);
                var curHeight = curBlock.outerHeight();
                var curTop = curBlock.offset().top;

                curList.find('.reviews-item-name').each(function() {
                    var otherBlock = $(this);
                    if (otherBlock.offset().top == curTop) {
                        var newHeight = otherBlock.outerHeight();
                        if (newHeight > curHeight) {
                            curBlock.css({'min-height': newHeight + 'px'});
                        } else {
                            otherBlock.css({'min-height': curHeight + 'px'});
                        }
                    }
                });
            });
        }

        curList.find('.reviews-item-text').css({'min-height': '0px'});

        if ($(window).width() > 1199) {
            curList.find('.reviews-item-text').each(function() {
                var curBlock = $(this);
                var curHeight = curBlock.outerHeight();
                var curTop = curBlock.offset().top;

                curList.find('.reviews-item-text').each(function() {
                    var otherBlock = $(this);
                    if (otherBlock.offset().top == curTop) {
                        var newHeight = otherBlock.outerHeight();
                        if (newHeight > curHeight) {
                            curBlock.css({'min-height': newHeight + 'px'});
                        } else {
                            otherBlock.css({'min-height': curHeight + 'px'});
                        }
                    }
                });
            });
        }
    });
});