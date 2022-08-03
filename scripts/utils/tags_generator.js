/** liveSearch is used numerous times here and is defined in recipes_input_selector */
/* eslint-disable no-undef */
/* eslint-disable no-loop-func */
/* eslint-disable no-restricted-syntax */
const filterItemIngredients = document.getElementsByClassName('filter-item-ingredient');
const filterItemAppliance = document.getElementsByClassName('filter-item-appliance');
const filterItemUstensils = document.getElementsByClassName('filter-item-ustensils');
let tagIngredientAlreadyAdded = false;
let tagApplianceAlreadyAdded = false;
let tagUstensilAlreadyAdded = false;
/* ****TAGS WRAPPERS *** */
const ingredientTagsWrapper = document.querySelector('.ingredients_tags_wrapper');
const applianceTagsWrapper = document.querySelector('.appliance_tags_wrapper');
const utensilTagsWrapper = document.querySelector('.ustensil_tags_wrapper');

/** *****ADD TAG FOR FILTERS WITH DELETE TAG EVENT****** */
/** addTagFilter is used in recipes_filter_selector */
// eslint-disable-next-line no-unused-vars
function addTagFilterIngredients() {
  if (tagIngredientAlreadyAdded === false) {
    tagIngredientAlreadyAdded = true;
    Array.from(filterItemIngredients).forEach((element) => {
      element.addEventListener('click', (e) => {
        liveSearch();
        const tagIngredient = document.createElement('div');
        tagIngredient.setAttribute('class', 'ingredient-tag');
        tagIngredient.classList.add('tagIngredient');
        tagIngredient.innerHTML = e.target.outerHTML;
        const deleteTagIcon = document.createElement('span');
        deleteTagIcon.className = 'deleteIcon';
        const deleteIconImg = document.createElement('i');
        deleteIconImg.className = 'fa-regular fa-circle-xmark';
        deleteIconImg.style.cursor = 'pointer';
        deleteIconImg.style.width = '20px';
        deleteTagIcon.addEventListener('click', () => {
          tagIngredient.remove();
          liveSearch();
          return false;
        });
        ingredientTagsWrapper.appendChild(tagIngredient);
        tagIngredient.appendChild(deleteTagIcon);
        deleteTagIcon.appendChild(deleteIconImg);
      });
    });
  }
}
/** addTagFilterAppliance is used in recipes_filter_selector */
// eslint-disable-next-line no-unused-vars
function addTagFilterAppliance() {
  if (tagApplianceAlreadyAdded === false) {
    tagApplianceAlreadyAdded = true;
    Array.from(filterItemAppliance).forEach((element) => {
      element.addEventListener('click', (e) => {
        liveSearch();
        const tagAppliance = document.createElement('div');
        tagAppliance.setAttribute('class', 'appliance-tag');
        tagAppliance.classList.add('tagAppliance');
        tagAppliance.innerHTML = e.target.outerHTML;
        const deleteTagIcon = document.createElement('span');
        deleteTagIcon.className = 'deleteIcon';
        const deleteIconImg = document.createElement('i');
        deleteIconImg.className = 'fa-regular fa-circle-xmark';
        deleteIconImg.style.cursor = 'pointer';
        deleteIconImg.style.width = '20px';
        deleteTagIcon.addEventListener('click', () => {
          tagAppliance.remove();
          liveSearch();
          return false;
        });
        applianceTagsWrapper.appendChild(tagAppliance);
        tagAppliance.appendChild(deleteTagIcon);
        deleteTagIcon.appendChild(deleteIconImg);
      });
    });
  }
}
/** addTagFilterUstensils is used in recipes_filter_selector */
// eslint-disable-next-line no-unused-vars
function addTagFilterUstensils() {
  if (tagUstensilAlreadyAdded === false) {
    tagUstensilAlreadyAdded = true;
    Array.from(filterItemUstensils).forEach((element) => {
      element.addEventListener('click', (e) => {
        liveSearch();
        const tagUstensils = document.createElement('div');
        tagUstensils.setAttribute('class', 'ustensils-tag');
        tagUstensils.classList.add('tagUstensils');
        tagUstensils.innerHTML = e.target.outerHTML;
        const deleteTagIcon = document.createElement('span');
        deleteTagIcon.className = 'deleteIcon';
        const deleteIconImg = document.createElement('i');
        deleteIconImg.className = 'fa-regular fa-circle-xmark';
        deleteIconImg.style.cursor = 'pointer';
        deleteIconImg.style.width = '20px';
        deleteTagIcon.addEventListener('click', () => {
          tagUstensils.remove();
          liveSearch();
          return false;
        });
        utensilTagsWrapper.appendChild(tagUstensils);
        tagUstensils.appendChild(deleteTagIcon);
        deleteTagIcon.appendChild(deleteIconImg);
      });
    });
  }
}
/** *******TAGS FILTERING RECIPES******* */
/** filteredRecipesWithTags is called in recipes_input_selector* */
// eslint-disable-next-line no-unused-vars
function filteredRecipesWithTags(recipesToFilter) {
  const taggedIngredientsDOM = Array.from(document.querySelectorAll('.ingredients_tags_wrapper .ingredient-tag .filter-item-ingredient'));
  const taggedAppliancesDOM = Array.from(document.querySelectorAll('.appliance_tags_wrapper .appliance-tag .filter-item-appliance'));
  const taggedustensilsDOM = Array.from(document.querySelectorAll('.ustensil_tags_wrapper .ustensils-tag .filter-item-ustensils'));
  let recipesToDisplay = [];
  let taggedIngredients = [];
  let taggedAppliances = [];
  let taggedustensils = [];

  taggedIngredients = taggedIngredientsDOM.map((taggedIngredient) => taggedIngredient.innerText);
  taggedAppliances = taggedAppliancesDOM.map((taggedAppliance) => taggedAppliance.innerText);
  taggedustensils = taggedustensilsDOM.map((taggedUtensil) => taggedUtensil.innerText);

  recipesToDisplay = recipesToFilter.filter((recipe) => {
    let recipeIsMatching = false;
    let ingredientIsMatching = false;
    let applianceIsMatching = false;
    let utensilIsMatching = false;
    let ingredientsMatching = 0;
    let appliancesMatching = 0;
    let ustensilsMatching = 0;
    let ingredientsInTheRecipe = [];
    const appliancesInTheRecipe = [];
    let ustensilsInTheRecipe = [];

    ingredientsInTheRecipe = recipe.ingredients.map(({ ingredient }) => ingredient);

    appliancesInTheRecipe.push(recipe.appliance);

    ustensilsInTheRecipe = recipe.ustensils.map((ustensil) => ustensil);

    if (taggedIngredients.length > 0) {
      taggedIngredients.forEach((taggedIngredient) => {
        if (ingredientsInTheRecipe.includes(taggedIngredient)) {
          ingredientsMatching += 1;
        }
      });
    }
    if (taggedAppliances.length > 0) {
      taggedAppliances.forEach((taggedAppliance) => {
        if (appliancesInTheRecipe.includes(taggedAppliance)) {
          appliancesMatching += 1;
        }
      });
    }
    if (taggedustensils.length > 0) {
      taggedustensils.forEach((taggedustensil) => {
        if (ustensilsInTheRecipe.includes(taggedustensil)) {
          ustensilsMatching += 1;
        }
      });
    }
    if (ingredientsMatching === taggedIngredients.length) {
      ingredientIsMatching = true;
    }
    if (taggedAppliances.length > 0) {
      if (appliancesMatching > 0) {
        applianceIsMatching = true;
      }
    } else applianceIsMatching = true;

    if (ustensilsMatching === taggedustensils.length) {
      utensilIsMatching = true;
    }
    if ((ingredientIsMatching === true) && (applianceIsMatching === true)
    && (utensilIsMatching === true)) {
      recipeIsMatching = true;
    }
    return recipeIsMatching;
  });
  /** fillFiltersAll is defined in recipes_filter_selector (l.244) */
  // eslint-disable-next-line no-undef
  fillFiltersAll(recipesToDisplay);
  return recipesToDisplay;
}
