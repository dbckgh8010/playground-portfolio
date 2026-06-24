$(function() {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);

    const $imgBox = $(".moving__img");
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1521px)", () => {
        gsap.to(".moving__img", {
            scrollTrigger: {
                trigger: ".motion__section",
                start: "top top",
                end: "70% center",
                scrub: 0.5,
            },
            motionPath: {
                path: [
                    { x: 0, y: 0 },
                    { x: 300, y: 300},
                    { x: 400, y: 500},
                    { x: 270, y: 2330} 
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
        gsap.to(".moving__img", {
            scrollTrigger: {
                trigger: ".motion__section",
                start: "top top",
                end: "70% center",
                scrub: 0.5,
            },
            motionPath: {
                path: [
                    { x: 0, y: 0 },
                    { x: 300, y: 300},
                    { x: 400, y: 500},
                    { x: 270, y: 2330} 
                ],
                curviness: 1.25,
                autoRotate: false,
            },
            rotateY: 360,
            rotation: 6,
            ease: "none",
        });
    });
    mm.add("(min-width: 1025px) and (max-width: 1200px)", () => {
        gsap.to(".moving__img", {
            scrollTrigger: {
                trigger: ".motion__section",
                start: "top top",
                end: "78% 70%",
                scrub: 1,
            },
            motionPath: {
                path: [
                    {x: 0, y: 0},
                    {x: 250, y: 300},
                    {x: 300, y: 500},
                    {x: 210, y: 2330} 
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
    function handleAOS() {
        const windowWidth = $(window).width();

        if(windowWidth <= 768) {
            AOS.init({
                offset: 30,
                duration: 600,
                anchorPlacement: 'top-bottom',
                once: false
            });
        } else if(windowWidth > 768 && windowWidth <= 1024) {
            AOS.init({
                offset: 100,
                durantion: 800,
                anchorPlacement: 'top-bottom',
                once: false
            });
        } else {
            AOS.init({
                offset: 200,
                duration: 1000,
                anchorPlacement: 'top-bottom',
                once: false
            });
        }
    };
    $(window).on('load', () => {
        handleAOS();
    });
})
$(function() {
    $(".category__item").click(function () {
        $(".category__item").removeClass('active');
        $(this).addClass('active');
        
        const tabName = $(this).data('tab');
        $(".page__item").hide();

        if (tabName === 'all') {
            $(".page__item").show();
        } else {
            $(`.page__item[data-tab="${tabName}"]`).show();
        }
        ScrollTrigger.refresh();
    });
    $('.category__item[data-tab="all"]').click();
})

$(function() {
    const cardSwiper = new Swiper(".inner__cards", {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 40,
        speed: 2000,
        allowTouchMove: false,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
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
    $(".inner__cards").on('mouseenter',function() {
        cardSwiper.autoplay.stop();
    });
    $(".inner__cards").on('mouseleave',function() {
        cardSwiper.autoplay.start();
    });
})

$(function() {
    const projectData = {
        shinsegae: {
            title: "신세계L&B",
            desc: `
            <dl class="project-popup__meta-list">
                <div class="project-popup__meta-item">
                    <dt class="project-popup__meta-title">기여도</dt>
                    <dd class="project-popup__meta-desc">100%</dd>
                </div>
                <div class="project-popup__meta-item">
                    <dt class="project-popup__meta-title">유형</dt>
                    <dd class="project-popup__meta-desc">반응형 웹 (PC / Mobile)</dd>
                </div>
                <div class="project-popup__meta-item">
                    <dt class="project-popup__meta-title">작업 범위</dt>
                    <dd class="project-popup__meta-desc">메인 페이지</dd>
                </div>
                <div class="project-popup__meta-item">
                    <dt class="project-popup__meta-title">기술 스택</dt>
                    <dd class="project-popup__meta-desc">HTML5 / CSS3 / JavaScript</dd>
                </div>
            </dl>
            <p class="project-popup__description">신세계 L&B 홈페이지를 클론코딩하여 미디어 쿼리를 활용한 반응형 레이아웃을 구현했습니다.</p>`,
            img: `<img src="assets/img/project/shinsegae-fullpage.png" alt="신세계L&B 메인 풀 페이지 이미지">`,
            viewUrl: "https://dbckgh8010.github.io/shinsegae-lnb_2/",
            detailUrl: "../playground-portfolio/project/shinsegaelnb_2.html"
        },
        hansol: {
            title: "한솔PNS",
            desc: `
            <dl class="project-popup__meta-list">
                <div class="project-popup__meta-item">
                    <dt class="project-popup__meta-title">기여도</dt>
                    <dd class="project-popup__meta-desc">100%</dd>
                </div>
                <div class="project-popup__meta-item">
                    <dt class="project-popup__meta-title">유형</dt>
                    <dd class="project-popup__meta-desc">반응형 웹 (PC / Mobile)</dd>
                </div>
                <div class="project-popup__meta-item">
                    <dt class="project-popup__meta-title">작업 범위</dt>
                    <dd class="project-popup__meta-desc">메인 페이지</dd>
                </div>
                <div class="project-popup__meta-item">
                    <dt class="project-popup__meta-title">기술 스택</dt>
                    <dd class="project-popup__meta-desc">HTML5 / CSS3 / JavaScript</dd>
                </div>
            </dl>
            <p class="project-popup__description">한솔PNS 홈페이지를 클론코딩하여 시맨틱 태그를 준수한 마크업 구조를 설계했습니다.</p>`,
            img: `<img src="assets/img/project/hansolpns-fullpage.png" alt="신세계L&B 메인 풀 페이지 이미지">`,
            viewUrl: "https://dbckgh8010.github.io/hansolpns/",
            detailUrl: "../playground-portfolio/project/hansolpns.html"
        },
        kia: {
            title: "KIA",
            desc: `
            <dl class="project-popup__meta-list">
                <div class="project-popup__meta-item">
                    <dt class="project-popup__meta-title">기여도</dt>
                    <dd class="project-popup__meta-desc">100%</dd>
                </div>
                <div class="project-popup__meta-item">
                    <dt class="project-popup__meta-title">유형</dt>
                    <dd class="project-popup__meta-desc">반응형 웹 (PC / Mobile)</dd>
                </div>
                <div class="project-popup__meta-item">
                    <dt class="project-popup__meta-title">작업 범위</dt>
                    <dd class="project-popup__meta-desc">메인 페이지</dd>
                </div>
                <div class="project-popup__meta-item">
                    <dt class="project-popup__meta-title">기술 스택</dt>
                    <dd class="project-popup__meta-desc">HTML5 / CSS3 / JavaScript</dd>
                </div>
            </dl>
            <p class="project-popup__description">기아 공식 홈페이지를 클론코딩하여 크로스 브라우징을 고려한 UI 구조를 구현했습니다.</p>`,
            img: `<img src="assets/img/project/kia-fullpage.png" alt="기아 자동차 메인 풀 페이지 이미지">`,
            viewUrl: "https://dbckgh8010.github.io/KIA/",
            detailUrl: "../playground-portfolio/project/kia.html",
        },
        genesis: {
            title: "GENESIS",
            desc: `
            <dl class="project-popup__meta-list">
                <div class="project-popup__meta-item">
                    <dt class="project-popup__meta-title">기여도</dt>
                    <dd class="project-popup__meta-desc">100%</dd> 
                </div>
                <div class="project-popup__meta-item">
                    <dt class="project-popup__meta-title">유형</dt>
                    <dd class="project-popup__meta-desc">Desktop(only PC)</dd>
                </div>
                <div class="project-popup__meta-item">
                    <dt class="project-popup__meta-title">작업 범위</dt>
                    <dd class="project-popup__meta-desc">메인 페이지</dd>
                </div>
                <div class="project-popup__meta-item">
                    <dt class="project-popup__meta-title">기술 스택</dt>
                    <dd class="project-popup__meta-desc">HTML5 / CSS3 / JavaScript</dd>
                </div>
            </dl>
            <p class="project-popup__description">제네시스 공식 홈페이지를 클론코딩하여 정적 레이아웃과 슬라이드 UI 인터랙션을 재현했습니다.</p>`,
            img: `<img src="assets/img/project/genesis-fullpage.png" alt="제네시스 메인 풀 페이지 이미지">`,
            viewUrl: "https://dbckgh8010.github.io/genesis/",
            detailUrl: "../playground-portfolio/project/genesis.html",
        }
    };

    $(".project__link").on('click', function() {
        const projectId = $(this).data("id");
        const data = projectData[projectId];

        if (data) {
            $(".popup__site-title").text(data.title);
            $(".project-popup__main-desc").html(data.desc);
            $(".project-popup__main-img").html(data.img);
            $(".project-popup__link--view").attr("href", data.viewUrl);
            $(".project-popup__link--detail").attr("href", data.detailUrl);

            $(".project-popup").addClass("is-open");
            $("body").addClass("on");
        }
    });
    $(".project-popup__close-btn").on("click", function() {
        $(".project-popup").removeClass("is-open");
        $("body").removeClass("on");
    });
})