let recipe = localStorage.getItem("contentData");
async function fetchData() {
    let rawData = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + recipe);
    if (rawData.status == 404) {
        console.log("Could'nt Fetch API");
    } else {
        const data = await rawData.json();
        document.querySelector(".flex-img img").src = data.meals[0].strMealThumb;
        document.querySelector(".menu-type").innerHTML = data.meals[0].strCategory;
        document.querySelector(".caption").innerHTML = data.meals[0].strMeal;
        document.querySelector(".nationality").innerHTML = data.meals[0].strArea;
        document.querySelector(".category").innerHTML = data.meals[0].strCategory;

        // Ingredients Extraction
        const ingredients = [];
        ingredients.push(data.meals[0].strIngredient1);
        ingredients.push(data.meals[0].strIngredient2);
        ingredients.push(data.meals[0].strIngredient3);
        ingredients.push(data.meals[0].strIngredient4);
        ingredients.push(data.meals[0].strIngredient5);
        ingredients.push(data.meals[0].strIngredient6);
        ingredients.push(data.meals[0].strIngredient7);
        ingredients.push(data.meals[0].strIngredient8);
        ingredients.push(data.meals[0].strIngredient9);
        ingredients.push(data.meals[0].strIngredient10);
        ingredients.push(data.meals[0].strIngredient11);
        ingredients.push(data.meals[0].strIngredient12);
        ingredients.push(data.meals[0].strIngredient13);
        ingredients.push(data.meals[0].strIngredient14);
        ingredients.push(data.meals[0].strIngredient15);
        ingredients.push(data.meals[0].strIngredient16);
        ingredients.push(data.meals[0].strIngredient17);
        ingredients.push(data.meals[0].strIngredient18);
        ingredients.push(data.meals[0].strIngredient19);
        ingredients.push(data.meals[0].strIngredient20);

        // Measure Extraction
        const measures = []
        measures.push(data.meals[0].strMeasure1);
        measures.push(data.meals[0].strMeasure2);
        measures.push(data.meals[0].strMeasure3);
        measures.push(data.meals[0].strMeasure4);
        measures.push(data.meals[0].strMeasure5);
        measures.push(data.meals[0].strMeasure6);
        measures.push(data.meals[0].strMeasure7);
        measures.push(data.meals[0].strMeasure8);
        measures.push(data.meals[0].strMeasure9);
        measures.push(data.meals[0].strMeasure10);
        measures.push(data.meals[0].strMeasure11);
        measures.push(data.meals[0].strMeasure12);
        measures.push(data.meals[0].strMeasure13);
        measures.push(data.meals[0].strMeasure14);
        measures.push(data.meals[0].strMeasure15);
        measures.push(data.meals[0].strMeasure16);
        measures.push(data.meals[0].strMeasure17);
        measures.push(data.meals[0].strMeasure18);
        measures.push(data.meals[0].strMeasure19);
        measures.push(data.meals[0].strMeasure20);


        for(let i=0; i<20; i++){
            if(ingredients[i] != "" && ingredients[i] != null){
                const li = document.createElement("li");
                const node = document.createTextNode(measures[i] + "  " + ingredients[i]);
                li.appendChild(node);
                document.querySelector(".ingredients ul").appendChild(li);
            }
        }
        const instructions = data.meals[0].strInstructions.split(".");
        for(let i=0; i<instructions.length-1; i++){
            const li = document.createElement("li");
            const node = document.createTextNode(" " + instructions[i] + ".");
            li.appendChild(node);
            document.querySelector(".instructions ol").appendChild(li);
        }
        let ytlink = data.meals[0].strYoutube;
        let videoID = ytlink.split("v=")[1]?.split("&")[0]; 
        let embedURL = `https://www.youtube.com/embed/${videoID}`;
        document.querySelector(".video iframe").setAttribute("src",embedURL);
        document.querySelector(".additional a").setAttribute("href",data.meals[0].strSource);
        document.querySelector(".additional a").innerHTML = data.meals[0].strSource;
    }
}
fetchData();