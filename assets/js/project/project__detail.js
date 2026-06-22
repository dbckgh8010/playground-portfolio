const btn = document.querySelector(".img__open-btn");
const image = document.querySelector(".project__img");

btn.addEventListener('click', () => {
    image.classList.toggle('active');
    btn.classList.toggle('active');
});