$(document).ready(function () {
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
});