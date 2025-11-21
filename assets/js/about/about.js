document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.ani-underline').classList.add('on');
    document.querySelector('.ani-underline__2').classList.add('on');

    const bars = document.querySelectorAll(".stack-bar-fill");

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

    const menuAbout = document.querySelector(".menu-about");
    const menuStack = document.querySelector(".menu-stack");

    const sectionAbout = document.getElementById("section-about");
    const sectionStack = document.getElementById("section-stack");

    function removeAllActive() {
        menuAbout.classList.remove("active");
        menuStack.classList.remove("active");
    }

    function updateActiveByScroll() {
        const scrollPos = window.scrollY + window.innerHeight / 2;
        const aboutTop = sectionAbout.offsetTop;
        const stackTop = sectionStack.offsetTop;
        removeAllActive();

        if (scrollPos >= stackTop) {
            menuStack.classList.add("active");
        } else {
            menuAbout.classList.add("active");
        }
    }
    updateActiveByScroll();
    window.addEventListener("scroll", updateActiveByScroll);
});
