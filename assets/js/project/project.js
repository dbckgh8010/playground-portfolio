document.addEventListener("DOMContentLoaded", function() {
    const mySwiper = new Swiper(".swiper", {
        slidesPerView: 1,
        effect: "fade",
        loop: true,
        autoplay: {
            delay: 8000,
            disableOnInteraction: false,
        },
        pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
    });

    const controlBtn = document.querySelector(".play-btn");
    let isPlaying = true;
    controlBtn.addEventListener("click", () => {
        const swiper = mySwiper;
        if (isPlaying) {
            swiper.autoplay.stop();
            swiper.slideTo(swiper.activeIndex, 0);
            controlBtn.classList.add("playing");
        } else {
            swiper.params.autoplay.enabled = true;
            swiper.autoplay.start();
            controlBtn.classList.remove("playing");
        };
        isPlaying = !isPlaying;
    });

    const bars = document.querySelectorAll(".contribution-bar-fill");

    bars.forEach(bar => {
        const target = Number(bar.dataset.percent) || 0;

        function animateBar() {
            bar.style.transition = "none";
            bar.style.width = "0%";
            bar.textContent = "0%";

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    bar.style.transition = "width 3s ease-out";
                    bar.style.width = target + "%";

                    let current = 0;
                    const duration = 3000;
                    const frame = 16;
                    const totalFrames = duration / frame;
                    const increment = target / totalFrames;
                    const counter = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            current = target;
                            clearInterval(counter);
                        }
                        bar.textContent = Math.floor(current) + "%";
                    }, frame);
                });
            });
            setTimeout(animateBar, 8000);
        }
        animateBar();
    });
})