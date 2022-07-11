/** recipesToDisplay is defined in tags_generator* */
/** fillFiltersAll is defined in recipes_filter_selector */
/** filteredRecipesWithTags is defined in recipes_input_selector */
/** displayData is defined in the index file */
/* eslint-disable no-undef */

async function getDataRecipes() {
  const response = await fetch('data/recipes.json');
  const { recipes } = response;
  return ({ recipes: [recipes] });
}

const searchbarMainInput = document.querySelector('#search-input #dataInput');
const noResultText = document.querySelector('.no-result-message');
/** recipesToDisplay is defined in tags_generator* */
// eslint-disable-next-line no-undef
recipesToDisplay = [];

function searchRecipesDisplay() {
  const article = document.getElementsByName('article');
  const cards = document.querySelectorAll('article');
  const searchQuery = document.getElementById('dataInput').value.trim();
  for (let i = 0; i < cards.length; i += 1) {
    if (cards[i].innerText.toLowerCase()
      .includes(searchQuery.toLowerCase())) {
      cards[i].classList.remove('is-hidden');
    } else {
      cards[i].classList.add('is-hidden');
    }
  }
  return (article);
}
searchRecipesDisplay();
/* *******SEARCH FUNCTION******** */
async function liveSearch() {
  const { recipes } = await getDataRecipes();
  let tagsAreUsed = false;
  recipesToDisplay = [];
  let mainInput;

  if ((searchbarMainInput.value.length > 2)) {
    mainInput = searchbarMainInput.value;
    const regex = new RegExp(`${mainInput.trim()}`, 'i');
    for (let i = 0; i < recipes.length; i += 1) {
      let recipeIsMatching = false;
      if (regex.test(recipes[i].name)) {
        recipeIsMatching = true;
      } else if (regex.test(recipes[i].description)) {
        recipeIsMatching = true;
      }
      for (let j = 0; j < recipes[i].ingredients.length; j += 1) {
        if (regex.test(recipes[i].ingredients[j].ingredient)) {
          recipeIsMatching = true;
        }
      }
      if (recipeIsMatching === true) {
        recipesToDisplay.push(recipes[i]);
      }
    }
    /* ****THE RECIPES WILL BE ACTUALISED***** */
    fillFiltersAll(recipesToDisplay);
  }

  if (Array.from(document.querySelectorAll(' .ingredients_tags_wrapper .ingredient-tag .filter-item-ingredient')).length > 0
  || Array.from(document.querySelectorAll('.appliance_tags_wrapper .appliance-tag .filter-item-appliance')).length > 0
  || Array.from(document.querySelectorAll('.ustensil_tags_wrapper .ustencils-tag .filter-item-ustencils')).length > 0) {
    tagsAreUsed = true;
    if (recipesToDisplay.length > 0) {
      recipesToDisplay = filteredRecipesWithTags(recipesToDisplay);
    } else {
      recipesToDisplay = filteredRecipesWithTags(recipes);
    }
  }

  /* ****ERROR MESSAGE IF NOTHING COMES OUT***** */
  /* ***The message will be displayed in case of an impossible search*** */
  if (recipesToDisplay.length > 0) {
    noResultText.innerHTML = '';
    displayData(recipesToDisplay);
  } else {
    displayData(recipesToDisplay);
    noResultText.innerHTML = '<p>Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.</p>';
  }
  /* ****IF SEARCHBAR IS EMPTY***** */
  /* ***This indicades the minimum condition to allow a research*** */
  if (((searchbarMainInput.value === '') || (searchbarMainInput.value.length < 3)) && tagsAreUsed === false) {
    fillFiltersAll(recipes);
    displayData(recipes);
    noResultText.innerHTML = '';
  }
}

let typingTimer;
const typeInterval = 100;
searchbarMainInput.addEventListener('keyup', () => { /* press enter to search as well */
  clearTimeout(typingTimer);
  typingTimer = setTimeout(liveSearch, typeInterval);
});
