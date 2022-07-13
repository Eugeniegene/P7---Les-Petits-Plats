async function getDataJson() {
  const response = await fetch('data/recipes.json');
  const recipes = await response.json();
  return recipes;
}

async function displayData(recipes) {
  const recipeSection = document.querySelector('#recipes_cards');
  recipeSection.innerHTML = '';
  recipes.forEach((recipe) => {
    /** getRecipeCard is defined in recipes_cards */
    // eslint-disable-next-line no-undef
    const recipeCard = getRecipeCard(recipe);
    recipeSection.appendChild(recipeCard);
  });
}

async function init() {
  const { recipes } = await getDataJson();
  displayData(recipes);
}

init();
 
