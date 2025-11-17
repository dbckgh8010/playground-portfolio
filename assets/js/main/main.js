$(function() {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);

    const $imgBox = $(".moving-img");
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1521px)", () => {
        gsap.to(".moving-img", {
            scrollTrigger: {
                trigger: ".motion-section",
                start: "top top",
                end: "70% center",
                scrub: 0.5,
            },
            motionPath: {
                path: [
                    { x: 0, y: 0 },
                    { x: 300, y: 300},
                    { x: 400, y: 500},
                    { x: 270, y: 2100} 
                ],
                curviness: 1.25,
                autoRotate: false,
            },
            rotateY: 360,
            rotation: 6,
            ease: "none",
        });
    });
    mm.add("(min-width: 1201px) and (max-width: 1520px)", () => {
        gsap.to(".moving-img", {
            scrollTrigger: {
                trigger: ".motion-section",
                start: "top top",
                end: "70% center",
                scrub: 0.5,
            },
            motionPath: {
                path: [
                    { x: 0, y: 0 },
                    { x: 300, y: 300},
                    { x: 400, y: 500},
                    { x: 270, y: 2150} 
                ],
                curviness: 1.25,
                autoRotate: false,
            },
            rotateY: 360,
            rotation: 6,
            ease: "none",
        });
    });
    mm.add("(min-width: 1101px) and (max-width: 1200px)", () => {
        gsap.to(".moving-img", {
            scrollTrigger: {
                trigger: ".motion-section",
                start: "top top",
                end: "78% 70%",
                scrub: 1,
            },
            motionPath: {
                path: [
                    { x: 0, y: 0 },
                    { x: 250, y: 300},
                    { x: 300, y: 500},
                    { x: 230, y: 2300} 
                ],
                curviness: 1.25,
                autoRotate: false,
            },
            rotateY: 360,
            rotation: 6,
            ease: "none",
        });
    });
});

$(function() {
    AOS.init({duration: 1200})
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
    const cardSwiper = new Swiper(".inner-cards", {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 40,
        speed: 2000,
        allowTouchMove: false,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            waitForTransition: false,
        },
        freeMode: true,
        freeModeMomentum: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1000: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1600: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1920: {
                slidesPerView: 3,
                spaceBetween: 40,
            }
        }
    });
    $(".inner-cards").on('mouseenter',function() {
        cardSwiper.autoplay.stop();
    });
    $(".inner-cards").on('mouseleave',function() {
        cardSwiper.autoplay.start();
    });
})