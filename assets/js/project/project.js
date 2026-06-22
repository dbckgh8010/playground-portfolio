document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".portfolio__tab-btn");
    const portfolioItems = document.querySelectorAll(".portfolio__item");

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove("is-active"));
            button.classList.add("is-active");

            const filterValue = button.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                const itemType = item.getAttribute('data-type');

                if (filterValue === 'all' || filterValue === itemType) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});