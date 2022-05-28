const li = document.querySelectorAll(".nav__link");
const sec = document.querySelectorAll("section");
const themeBtn = document.querySelector(".theme-btn");
const navToggle = document.querySelector(".nav-toggle");
const navBar = document.querySelector(".navbar");

function activeLink(){
    let len = sec.length;
    while(--len && window.scrollY + 75 < sec[len].offsetTop){}
    li.forEach(itx => itx.classList.remove("active"));
    li[len].classList.add("active");
}
activeLink();

window.addEventListener("scroll", activeLink);


themeBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-mode");
})

navToggle.addEventListener("click", () => {
    navBar.classList.toggle("navbar-show");
})
