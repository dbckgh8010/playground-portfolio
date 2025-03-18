$(document).ready(function () {
    const projectSwiper = new Swiper(".project-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        grabcursor: true,
        loop: false,
        breakpoints: {
            640: {
                slidesPerView: 2
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
    
    let pinStart = 80;
    let gap = 30;
    
    $(".card1, .card3").each(function() {
        gsap.from($(this), {
            scrollTrigger: {
                trigger: this,
                start: "top bottom",
                end: "top 50%",
                scrub: 2,
            },
            opacity: 0,
            x: -200,
            duration: 1
        })
    })
    $(".card2, .card4").each(function() {
        gsap.from($(this), {
            scrollTrigger: {
                trigger: this,
                start: "top bottom",
                end: "top 80%",
                scrub: 2,
            },
            opacity: 0,
            x: 200,
            duration: 1
        })
    })
});