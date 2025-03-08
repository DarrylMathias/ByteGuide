function hamburger(){
    const innerNav = document.querySelector(".innernav");
    innerNav.classList.toggle("flex-direction-col")
    const navElements = document.querySelectorAll(".nav-child");
    for(let i=0; i<navElements.length; i++){
        navElements[i].classList.toggle("visibility")
        navElements[i].classList.toggle("expand-top")
    }
    document.querySelector(".nav").classList.toggle("flex-direction-col")
    document.querySelector(".hamburger-logo").classList.toggle("rotate")

}