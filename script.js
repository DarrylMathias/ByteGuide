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
let date = new Date();
let hrs = date.getHours();
if ((hrs >= 0 && hrs <= 7) || (hrs >= 17 && hrs <= 23)) {
    darkMode();
}
let addedMeals = new Set();
async function updateRandomMeal() {
    for (let i = 1; i <= 8;) {
        const rawData = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        if (rawData.status == 404) {
            console.log("Could'nt Fetch API");
        } else {
            const data = await rawData.json();
            const mealName = data.meals[0].strMeal;
            if (!addedMeals.has(mealName)) {
                addedMeals.add(mealName);
                document.querySelector(".recipe" + i + " img").src = data.meals[0].strMealThumb;
                document.querySelector(".recipe" + i + " .menu-type").innerHTML = data.meals[0].strCategory;
                document.querySelector(".recipe" + i + " .caption").innerHTML = data.meals[0].strMeal;
                document.querySelector(".recipe" + i + " .tags").innerHTML = data.meals[0].strArea;
                i++;
            }
        }
    }
}
updateRandomMeal();
for (let i = 1; i <= 8; i++) {
    document.querySelector(".recipe" + i).addEventListener("click", changePage);
}
async function changePage() {
    let recipe = this.children[2].innerHTML.trim();
    localStorage.setItem("contentData", recipe);
    window.open("./public/recipe.html", "_self");
}
document.querySelector("#search-button").addEventListener("click", searchRes);
let tags = document.querySelectorAll(".tag-element");
for (let el of tags) {
    el.addEventListener("click", searchRes2);
}
async function searchRes() {
    console.log(this);
    localStorage.setItem("searchVal", document.querySelector("#searchBar").value.trim());
    window.open("./public/searchResult.html", "_self");
}
async function searchRes2() {
    console.log(this);
    localStorage.setItem("searchVal", this.innerHTML);
    window.open("./public/searchResult.html", "_self");
}
let countries = ["American","Canadian","Croatian","French","British","Mexican","Indian","Italian","Chinese","Egyptian","Thai","Dutch","Filipino","Greek","Irish","Jamaican","Japanese","Kenyan","Malaysian","Moroccan","Polish","Portuguese","Russian","Spanish","Tunisian","Turkish","Ukrainian","Uruguayan","Vietnamese"];
let categories = ["Beef","Miscellaneous","Pork","Side","Starter","Vegetarian","Lamb","Seafood","Vegan","Dessert","Breakfast","Goat","Starter","Pasta","Chicken"];
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // Random index
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
    return arr;
}
function addShuffled(){
    grandArray = shuffleArray(countries.concat(categories));
    finalArray = (grandArray).slice(0,16);
    for(let i=0; i<16; i++){
        document.querySelectorAll(".tag-element")[i].innerHTML = finalArray[i];
    }
}
addShuffled();