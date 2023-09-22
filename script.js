const burger = document.querySelector(".res-nav");
const nav_bar = document.querySelector(".nav-bar-2 ul");
const header = document.querySelector(".header-2")


burger.addEventListener('click',()=>{
    nav_bar.classList.toggle('v-nav');
    header.classList.toggle('h-nav');
})