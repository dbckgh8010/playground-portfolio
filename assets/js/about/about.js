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
    };

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
    };
    updateActiveByScroll();
    window.addEventListener("scroll", updateActiveByScroll);

    const modal = document.querySelector(".modal");
    const modalInner = document.querySelector(".modal-inner");
    const resumeBtn = document.querySelector('.resume-btn');
    const footer = document.querySelector('footer');
    //이력서를 보이도록 하는 이벤트
    resumeBtn.addEventListener('click', () => {
        modal.classList.add('on');
    });
    //이력서를 끄기 위한 이벤트
    modal.addEventListener('click', () => {
        modal.classList.remove('on');
    });
    //이력서를 눌렀을때는 꺼지지 않도록 이벤트를 추가
    modalInner.addEventListener('click', (e) => {
        e.stopPropagation();
    });
    //esc를 눌러도 꺼지도록 설정
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.classList.remove('on');
        }
    });

    //이력서 여는 아이콘 버튼이 footer에 들어가기전에 꺼버리기
    function hideModal() {
        const scrollBottom = window.scrollY + window.innerHeight;
        const footerTop = footer.offsetTop;

        if (scrollBottom >= footerTop) {
            resumeBtn.classList.add('hide');
        } else {
            resumeBtn.classList.remove('hide');
        }
    };

    window.addEventListener('scroll', hideModal);
    hideModal();
});
