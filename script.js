const burgerMenu = document.getElementById("burger-menu");
const screenMenu = document.getElementById("screen-menu");
const closeBtn = document.getElementById("close-btn");
const swipers = document.querySelectorAll(".swiper-slide");
console.log(swipers);

burgerMenu.addEventListener("click", () => {
    screenMenu.classList.add("show");
});

closeBtn.addEventListener("click", () => {
    screenMenu.classList.remove("show");
});
