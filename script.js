function hamburger() {
    const innerNav = document.querySelector(".innernav");
    innerNav.classList.toggle("flex-direction-col")
    const navElements = document.querySelectorAll(".nav-child");
    for (let i = 0; i < navElements.length; i++) {
        navElements[i].classList.toggle("visibility")
        navElements[i].classList.toggle("expand-top")
    }
    document.querySelector(".theme-switch").classList.toggle("align-self");
    document.querySelector(".nav").classList.toggle("flex-direction-col")
    document.querySelector(".hamburger-logo").classList.toggle("rotate")
}
function darkMode() {
    document.querySelector("body").classList.toggle("html-dark-theme");
    document.querySelector(".nav").classList.toggle("nav-dark");
    document.querySelector(".logonav").classList.toggle("nav-dark");
    document.querySelector(".innernav").classList.toggle("nav-dark");
    document.querySelector(".second-feature").classList.toggle("html-pseudo-dark");
    document.querySelector(".popular-tags").classList.toggle("nav-dark");
    const tags = document.querySelectorAll(".tag-element")
    for (let i = 0; i < tags.length; i++) {
        tags[i].classList.toggle("tag-element-js");
    };
}