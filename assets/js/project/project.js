document.addEventListener("DOMContentLoaded", function() {
    const mySwiper = new Swiper(".swiper", {
        slidesPerview: 1,
        effect: "fade",
        loop: true,
        autoplay: {
            delay: 9000,
            disableOnInteraction: false,
        },
        pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
    });
    $(".play-btn").on("click", function () {
        if ($(this).hasClass("playing")) {
            mySwiper.autoplay.stop();
            $(this).removeClass("playing").addClass("paused");
        } else {
            mySwiper.autoplay.start();
            $(this).removeClass("paused").addClass("playing");
        }
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