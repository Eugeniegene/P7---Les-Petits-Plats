async function getDataJson () {                                  
    const response = await fetch ("data/recipes.json");
    const recipes = await response.json();
    return recipes;
}

async function displayData(recipes) {
    const recipeSection = document.querySelector("#recipes_cards");

    recipes.forEach((recipe) => {
        const recipeModel = recipesFactory(recipe);
        const recipeCard = recipeModel.getRecipeCard();
        recipeSection.appendChild(recipeCard);
    });
};

async function init() {
    const { recipes } = await getDataJson();
    displayData(recipes);
};

init();