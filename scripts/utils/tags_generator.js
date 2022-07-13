/** liveSearch is used numerous times here and is defined in recipes_input_selector */
/* eslint-disable no-undef */
/* eslint-disable no-loop-func */
/* eslint-disable no-restricted-syntax */
const filterItemIngredients = document.getElementsByClassName('filter-item-ingredient');
const filterItemAppliance = document.getElementsByClassName('filter-item-appliance');
const filterItemUstencils = document.getElementsByClassName('filter-item-ustencils');
let tagIngredientAlreadyAdded = false;
let tagApplianceAlreadyAdded = false;
let tagUstencilAlreadyAdded = false;
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
    for (const element of filterItemIngredients) {
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
    }
  }
}
/** addTagFilterAppliance is used in recipes_filter_selector */
// eslint-disable-next-line no-unused-vars
function addTagFilterAppliance() {
  if (tagApplianceAlreadyAdded === false) {
    tagApplianceAlreadyAdded = true;
    for (const element of filterItemAppliance) {
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
    }
  }
}
/** addTagFilterUstencils is used in recipes_filter_selector */
// eslint-disable-next-line no-unused-vars
function addTagFilterUstencils() {
  if (tagUstencilAlreadyAdded === false) {
    tagUstencilAlreadyAdded = true;
    for (const element of filterItemUstencils) {
      element.addEventListener('click', (e) => {
        liveSearch();
        const tagUstencils = document.createElement('div');
        tagUstencils.setAttribute('class', 'ustencils-tag');
        tagUstencils.classList.add('tagUstencils');
        tagUstencils.innerHTML = e.target.outerHTML;
        const deleteTagIcon = document.createElement('span');
        deleteTagIcon.className = 'deleteIcon';
        const deleteIconImg = document.createElement('i');
        deleteIconImg.className = 'fa-regular fa-circle-xmark';
        deleteIconImg.style.cursor = 'pointer';
        deleteIconImg.style.width = '20px';
        deleteTagIcon.addEventListener('click', () => {
          tagUstencils.remove();
          liveSearch();
          return false;
        });
        utensilTagsWrapper.appendChild(tagUstencils);
        tagUstencils.appendChild(deleteTagIcon);
        deleteTagIcon.appendChild(deleteIconImg);
      });
    }
  }
}
/** *******TAGS FILTERING RECIPES******* */
/** filteredRecipesWithTags is called in recipes_input_selector* */
// eslint-disable-next-line no-unused-vars
function filteredRecipesWithTags(recipesToFilter) {
  const taggedIngredientsDOM = Array.from(document.querySelectorAll('.ingredients_tags_wrapper .ingredient-tag .filter-item-ingredient'));
  const taggedAppliancesDOM = Array.from(document.querySelectorAll('.appliance_tags_wrapper .appliance-tag .filter-item-appliance'));
  const taggedustensilsDOM = Array.from(document.querySelectorAll('.ustensil_tags_wrapper .ustencils-tag .filter-item-ustencils'));
  const recipesToDisplay = [];
  const taggedIngredients = [];
  const taggedAppliances = [];
  const taggedustensils = [];

  for (let i = 0; i < taggedIngredientsDOM.length; i += 1) {
    taggedIngredients.push(taggedIngredientsDOM[i].innerText);
  }
  for (let i = 0; i < taggedAppliancesDOM.length; i += 1) {
    taggedAppliances.push(taggedAppliancesDOM[i].innerText);
  }
  for (let i = 0; i < taggedustensilsDOM.length; i += 1) {
    taggedustensils.push(taggedustensilsDOM[i].innerText);
  }
  for (let i = 0; i < recipesToFilter.length; i += 1) {
    let recipeIsMatching = false;
    let ingredientIsMatching = false;
    let applianceIsMatching = false;
    let utensilIsMatching = false;
    let ingredientsMatching = 0;
    let appliancesMatching = 0;
    let ustensilsMatching = 0;
    const ingredientsInTheRecipe = [];
    const appliancesInTheRecipe = [];
    const ustensilsInTheRecipe = [];

    for (let j = 0; j < recipesToFilter[i].ingredients.length; j += 1) {
      ingredientsInTheRecipe.push(recipesToFilter[i].ingredients[j].ingredient);
    }

    appliancesInTheRecipe.push(recipesToFilter[i].appliance);

    for (let j = 0; j < recipesToFilter[i].ustensils.length; j += 1) {
      ustensilsInTheRecipe.push(recipesToFilter[i].ustensils[j]);
    }

    if (taggedIngredients.length > 0) {
      for (let j = 0; j < taggedIngredients.length; j += 1) {
        if (ingredientsInTheRecipe.includes(taggedIngredients[j])) {
          ingredientsMatching += 1;
        }
      }
    }
    if (taggedAppliances.length > 0) {
      for (let j = 0; j < taggedAppliances.length; j += 1) {
        if (appliancesInTheRecipe.includes(taggedAppliances[j])) {
          appliancesMatching += 1;
        }
      }
    }
    if (taggedustensils.length > 0) {
      for (let j = 0; j < taggedustensils.length; j += 1) {
        if (ustensilsInTheRecipe.includes(taggedustensils[j])) {
          ustensilsMatching += 1;
        }
      }
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
    if (recipeIsMatching === true) {
      recipesToDisplay.push(recipesToFilter[i]);
    }
  }
  /** fillFiltersAll is defined in recipes_filter_selector (l.244) */
  // eslint-disable-next-line no-undef
  fillFiltersAll(recipesToDisplay);
  return recipesToDisplay;
}
