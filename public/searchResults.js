let searchVal = localStorage.getItem("searchVal");
let gridElements = document.querySelectorAll(".grid-elements");
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
}
let date = new Date();
let hrs = date.getHours();
if ((hrs >= 0 && hrs <= 7) || (hrs >= 17 && hrs <= 23)) {
    darkMode();
}
for (let i = 1; i <= 40; i++) {
    document.querySelector(".recipe" + i).addEventListener("click", changePage);
}
async function changePage() {
    let recipe = this.children[2].innerHTML.trim();
    localStorage.setItem("contentData", recipe);
    window.open("./recipe.html", "_self");
}
let countries = ["American", "Canadian", "Croatian", "French", "British", "Mexican", "Indian", "Italian", "Chinese", "Egyptian", "Thai", "Dutch", "Filipino", "Greek", "Irish", "Jamaican", "Japanese", "Kenyan", "Malaysian", "Moroccan", "Polish", "Portuguese", "Russian", "Spanish", "Tunisian", "Turkish", "Ukrainian", "Uruguayan", "Vietnamese"];
let categories = ["Beef", "Miscellaneous", "Pork", "Side", "Starter", "Vegetarian", "Lamb", "Seafood", "Vegan", "Dessert", "Breakfast", "Goat", "Starter", "Pasta", "Chicken"];
async function search() {
    flag = true
    let head = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
    for (el of countries) {
        if (el == searchVal) {
            head = "https://www.themealdb.com/api/json/v1/1/filter.php?a=";
            flag = false;
        }
    }
    for (el of categories) {
        if (el == searchVal) {
            head = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
            flag = false;
        }
    }
    const rawData = await fetch(head + searchVal.trim());
    if (rawData.status == 404) {
        console.log("Could'nt Fetch API");
    } else {
        const data = await rawData.json();
        console.log(data);
        let noOfResults = data.meals ? data.meals.length : 0;
        if (noOfResults < 1) {
            document.querySelector("p.searchResult").style.display = "block";
            setTimeout(() => {
                document.querySelector("p.searchResult").style.display = "none";
            }, 10000);
        }
        for (let i = 0; i < noOfResults; i++) {
            gridElements[i].style.display = "block";
            document.querySelector(".recipe" + (i + 1) + " img").src = data.meals[i].strMealThumb;
            document.querySelector(".recipe" + (i + 1) + " .caption").innerHTML = data.meals[i].strMeal;
            if (flag) {
                document.querySelector(".recipe" + (i + 1) + " .tags").innerHTML = data.meals[i].strArea;
                document.querySelector(".recipe" + (i + 1) + " .menu-type").innerHTML = data.meals[i].strCategory;
            } else {
                document.querySelector(".recipe" + (i + 1) + " .tags").innerHTML = "";
                document.querySelector(".recipe" + (i + 1) + " .menu-type").innerHTML = "";
            }
        }
    }
}
search();