$(function () {

    $('.menuItem', 'header').on('click', function () {
       $('#checkbox', 'header').trigger('click'); 
    });

    $('#link-streat-1' , 'header').on('click', function () {
        $('#adress-1', 'footer').trigger('click');
    })

    $('#link-streat-2', 'header').on('click', function () {
        $('#adress-2', 'footer').trigger('click');
    })

    $('.features__list li', '#features').on('click', function () {
        $('a', this)[0].click();
    });

    $('#modal-features__item-5 a').on('click', function () {
        $('.mfp-close').trigger('click');
    });


    // Краткое описание тренажёров

    $('.service__item', '#service').hover(function () {
        $('.service__item-text', this).slideToggle("slow").css('display', 'block');
    });
    
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] 
        },
        image: {
        }
    });

    if ($(window).width() > 600) {
    $('.popup-gallery').slick({
        slidesToScroll: 1,
        pauseOnHover: true,
        slidesToShow: 4,
        slidesToScroll: 1,     
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
        speed: 200,
    });
    } else {
        $('.popup-gallery').slick({
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 200,
        });
    };

    // Удалени лишней анимации на устройсвах
    if ($(window).width() < 1000){
        $('.form__form', '#form').removeClass('flipInX');
    }
    
    $('#adress-2', 'footer').on('click', function () {
        $('#map', 'footer').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d647.9779547870723!2d60.61588626938847!3d56.88831242548529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16df412adf3ff%3A0xd0320297ca7410c1!2z0YPQuy4g0JHQsNGD0LzQsNC90LAsIDUsINCV0LrQsNGC0LXRgNC40L3QsdGD0YDQsywg0KHQstC10YDQtNC70L7QstGB0LrQsNGPINC-0LHQuy4sIDYyMDAxNw!5e0!3m2!1sru!2sru!4v1567855396575!5m2!1sru!2sru');
        
        $(this).addClass('btn-active');
        $('#adress-1', 'footer').removeClass('btn-active');
        $('#second-phone', 'footer').css('display', 'block');
        $('#first-phone', 'footer').css('display', 'none');
    });

    $('#adress-1', 'footer').on('click', function () {
        $('#map', 'footer').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1090.4406801854593!2d60.639542214485054!3d56.86512972477765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16d088a36f533%3A0x9f0880800797e3bc!2z0JbQtdC90YHQutC40Lkg0L7Qt9C00L7RgNC-0LLQuNGC0LXQu9GM0L3Ri9C5INC60LvRg9CxINCvINCyINCi0L7QvdGD0YHQtQ!5e0!3m2!1sru!2sru!4v1567812335135!5m2!1sru!2sru');

        $(this).addClass('btn-active');
        $('#adress-2', 'footer').removeClass('btn-active');
        $('#second-phone', 'footer').css('display', 'none');
        $('#first-phone', 'footer').css('display', 'block');
    });


    $('#social li', 'footer').on('click', function () {
        $('a', this)[0].click();
    });

    $('.popup-modal').magnificPopup({
        type: 'inline',
        preloader: false
    });

    

});

jQuery(function ($) {
    $(document).ready(function () {
        //enabling stickUp on the '.navbar-wrapper' class
        $('.header__menu').stickUp({
            parts: {
                0: 'home',
                1: 'features',
                2: 'service',
                3: 'gallery',
                4: 'form',
                5: 'price'
            },
            itemClass: 'menuItem',
            itemHover: 'active'
        });
    });
});
