async function getRecipes() {
  const response = await fetch ("data/recipes.json");
  const recipes = response.recipes;
  return ({ recipes: [recipes] });
};

const matchList = document.getElementById('update');

let searchbarMainInput = document.querySelector("#search-input #dataInput");
let mainInputSearchResultRecipes = [];
let matches = [];
let noResultText = document.querySelector(".no-result-message");


function searchRecipesDisplay(){
    const article = document.getElementsByName('article');
    console.log(article, "toto");
    let cards = document.querySelectorAll('article');
    let search_query = document.getElementById("dataInput").value;
    console.log(search_query);
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
  recipesToDisplay = [];
  let tagsAreUsed = false;
  let mainInput;
  
  if( (searchbarMainInput.value.length > 2) ) {
      mainInput = searchbarMainInput.value;
      const regex = new RegExp(`${mainInput}`, 'gi');
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

  if(Array.from(document.querySelectorAll(".ingredient-tag .tagIngredient")).length > 0){
      tagsAreUsed = true;
      if(recipesToDisplay.length > 0) {
          recipesToDisplay = filterWithTags(recipesToDisplay);
      }
      else {
          recipesToDisplay = filterWithTags(recipes); 
      }
  }

/*****ERROR MESSAGE IF NOTHING COMES OUT******/
  if(recipesToDisplay.length > 0) {
      noResultText.innerHTML = "";
      searchRecipesDisplay();
  } else {
      searchRecipesDisplay();
      noResultText.innerHTML = "<p>Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.</p>";
  }
/*****IF SEARCHBAR IS EMPTY******/
  if ( ( (searchbarMainInput.value === '') || (searchbarMainInput.value.length < 3 ) ) && searchbarMainInput === false ) {
    fillFiltersAll(recipes);
      searchRecipesDisplay();
      noResultText.innerHTML = "";
  }
};

let typingTimer;               
let typeInterval = 100;  
searchbarMainInput.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(liveSearch, searchRecipesDisplay, typeInterval);
});
