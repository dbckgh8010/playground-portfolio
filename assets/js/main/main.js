$(function() {
    AOS.init({duration: 1200})

    const projectSwiper = new Swiper(".project-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        grabcursor: true,
        loop: false,
        breakpoints: {
            
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1
            },
            1024: {
                slidesPerView: 2,
            },
            1560: {
                slidesPerView: 3
            }
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev"
        }
    });
})
$(function() {
    const pcSwiper = new Swiper(".pc-swiper", {
        slidesPerView: 1,
        loop: false,
        autoHeight: true,
        allowTouchMove: false,
    });
    const tabletSwiper = new Swiper(".tablet-swiper", {
        autoHeight: true,
        loop: false,
        slidesPerView: 1,
        allowTouchMove: false,
    });
    const mobileSwiper = new Swiper(".mobile-swiper", {
        autoHeight: true,
        loop: false,
        slidesPerView: 1,
        allowTouchMove: false,
    });
    const infoSwiper = new Swiper(".info-swiper", {
        autoHeight: true,
        loop: false,
        slidesPerView: 1,
        spaceBetween: 40,
        speed: 0,
        pagination: {
            el: ".swiper-pagination",
        },
    });
    infoSwiper.controller.control = [pcSwiper, tabletSwiper, mobileSwiper];

    const desktopSwiper = new Swiper(".desktop-swiper", {
        slidesPerView: 1,
        loop: false,
        autoHeight: true,
        allowTouchMove: false,
    });
    const pageInfoSwiper = new Swiper(".page-info-swiper", {
        autoHeight: true,
        loop: false,
        slidesPerView: 1,
        spaceBetween: 40,
        speed: 0,
        pagination: {
            el: ".swiper-pagination",
        },
    });
    pageInfoSwiper.on("slideChange", () => {
        desktopSwiper.slideTo(pageInfoSwiper.activeIndex);
    });
})
$(function() {
    $(".category-item").click(function () {
        $(".category-item").removeClass('active');
        $(this).addClass('active');
        
        const tabName = $(this).data('tab');
        $(".page-item").hide();

        if (tabName === 'all') {
            $(".page-item").show();
        } else {
            $(`.page-item[data-tab="${tabName}"]`).show();
        }
        ScrollTrigger.refresh();
    });
    $('.category-item[data-tab="all"]').click();
})
$(function() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
    
    gsap.fromTo(".sc-inner-left", 
        {opacity: 0},
        {opacity: 1, duration: 1, delay: 0.5}
    );
    gsap.fromTo(".sc-inner-right", 
        {opacity: 0},
        {opacity: 1, duration: 1, delay: 1}
    );

    let pinStart = 80;
    let gap = 30;
})
$(function() {    
    $(".card1, .card2, .card3, .card4").each(function() {
        gsap.from($(this), {
            scrollTrigger: {
                trigger: this,
                start: "top bottom",
                end: "top 80%",
                scrub: 2,
            },
            opacity: 0,
            y: 100,
            duration: 1
        })
    })
})