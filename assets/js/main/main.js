$(document).ready(function () {
    function startMarquee($container, reverse) {
        let speed = 20000;
        let totalWidth = 0;
        let $items = $container.find(".scroll-item");

        if ($items.length === 0) return; // 스크롤 아이템이 없으면 실행 안 함

        $items.each((_, el) => totalWidth += $(el).outerWidth(true));
        $container.append($items.clone()); // 아이템 복제하여 무한 스크롤처럼 만듦

        (function animate() {
            $container.css("transform", "translateX(0)")
                .animate(
                    { transform: `translateX(${reverse ? "" : "-"}${totalWidth}px)` },
                    {
                        duration: speed,
                        easing: "linear",
                        step: function (now) {
                            $(this).css("transform", `translateX(${now}px)`);
                        },
                        complete: animate // 애니메이션이 끝나면 다시 실행
                    }
                );
        })();
    };

    $(".scroll-right").each(function () { startMarquee($(this), false); });
    $(".scroll-left").each(function () { startMarquee($(this), true); });


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
                start: "top 95%",
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
                start: "top 95%",
                end: "top 50%",
                scrub: 2,
            },
            opacity: 0,
            x: 200,
            duration: 1
        })
    })
});