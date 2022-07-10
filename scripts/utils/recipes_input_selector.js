async function getRecipes() {
  const response = await fetch ("data/recipes.json");
  const recipes = response.recipes;
  return ({ recipes: [recipes] });
};

const matchList = document.getElementById('update');

let searchbarMainInput = document.querySelector("#search-input #dataInput");
let mainInputSearchResultRecipes = [];
let noResultText = document.querySelector(".no-result-message");
recipesToDisplay = [];


function searchRecipesDisplay(recipesToDisplay){
    const article = document.getElementsByName('article');
    let cards = document.querySelectorAll('article');
    let search_query = document.getElementById("dataInput").value.trim();
    for (var i = 0; i < cards.length; i++) {
        if(cards[i].innerText.toLowerCase()
          .includes(search_query.toLowerCase())) {
            cards[i].classList.remove("is-hidden");
        } else {
          cards[i].classList.add("is-hidden");
        }
      }
    return(article);
}
/********SEARCH FUNCTION******** */
async function liveSearch() {
  const {recipes} = await getDataRecipes();
  let tagsAreUsed = false;
  recipesToDisplay = [];
  let mainInput;
  
  if( (searchbarMainInput.value.length > 2) ) {
      mainInput = searchbarMainInput.value;
      const regex = new RegExp(`${mainInput.trim()}`, 'i');
      for(let i=0; i<recipes.length; i++) {
          let recipeIsMatching = false;
          /*****SEARCHING A NAME INSIDE THE RECIPE******/
          if(regex.test(recipes[i].name)) {
              recipeIsMatching = true;
            } 
          /*****SEARCHING A DESCRIPTION INSIDE THE RECIPE******/
          else if (regex.test(recipes[i].description)) {
              recipeIsMatching = true;
            } 
          /*****SEARCHING AN INGREDIENT INSIDE THE RECIPE******/
          for(let j=0; j<recipes[i].ingredients.length; j++) {
              if(regex.test(recipes[i].ingredients[j].ingredient)) {
                  recipeIsMatching = true;
              }
            }
          if(recipeIsMatching === true) {
              recipesToDisplay.push(recipes[i]);
            }
        }
      /*****THE RECIPES WILL BE ACTUALISED******/
      fillFiltersAll(recipesToDisplay);
  }

  if (Array.from(document.querySelectorAll(" .ingredients_tags_wrapper .ingredient-tag .filter-item-ingredient")).length > 0 ||
  Array.from(document.querySelectorAll(".appliance_tags_wrapper .appliance-tag .filter-item-appliance")).length > 0 ||
  Array.from(document.querySelectorAll(".ustensil_tags_wrapper .ustencils-tag .filter-item-ustencils")).length > 0 ){
      tagsAreUsed = true;
      if(recipesToDisplay.length > 0) {
          recipesToDisplay = filteredRecipesWithTags(recipesToDisplay);
      }
      else {
        console.log(recipes);
          recipesToDisplay = filteredRecipesWithTags(recipes);
      }
  }

    /*****ERROR MESSAGE IF NOTHING COMES OUT******/
    /****The message will be displayed in case of an impossible search****/
  if(recipesToDisplay.length > 0) {
      noResultText.innerHTML = "";
      displayData(recipesToDisplay);
  } else {
    displayData(recipesToDisplay);
      noResultText.innerHTML = "<p>Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.</p>";
  }
    /*****IF SEARCHBAR IS EMPTY******/
  /****This indicades the minimum condition to allow a research****/
  if ( ( (searchbarMainInput.value === '') || (searchbarMainInput.value.length < 3 ) ) && tagsAreUsed === false ) {
      fillFiltersAll(recipes);
      displayData(recipes);
      noResultText.innerHTML = "";
  }
};

let recipes;
let typingTimer;               
let typeInterval = 100;  
searchbarMainInput.addEventListener('keyup', () => { //press enter to search as well
    clearTimeout(typingTimer);
    typingTimer = setTimeout(liveSearch, displayData, typeInterval);
});
