/* all variables and functions from line 312 to 317 were defined in tags_generator */
/* eslint-disable no-undef */

/* eslint-disable no-plusplus */
/* eslint-disable no-return-await */
function showIngredients() {
  /** getDataJson is defined in the index file */
  // eslint-disable-next-line no-undef
  getDataJson();
  const ingredientBox = document.getElementsByClassName('ingredients_tag');
  const template = document.createElement('div');
  template.className = 'template';

  const article = document.createElement('div');
  article.className = 'ingredients_close';

  const headerIngr = document.createElement('header');
  headerIngr.className = 'headIngredients';

  const title = document.createElement('h2');
  title.textContent = 'Ingredients';
  title.className = 'nom';

  const spanAngle = document.createElement('span');
  spanAngle.className = 'angle-down';

  const arrow = document.createElement('i');
  arrow.className = 'fa-solid fa-angle-down fa-lg';
  arrow.style.cursor = 'pointer';

  const hiddenAngle = document.createElement('span');
  hiddenAngle.className = 'angle-up';

  const arrowUp = document.createElement('i');
  arrowUp.className = 'fa-solid fa-angle-up fa-lg';
  arrowUp.style.display = 'none';

  const inputIng = document.createElement('input');
  inputIng.setAttribute('id', 'ingredient-input');
  inputIng.className = 'input_ingredients';
  inputIng.setAttribute('placeholder', 'Selectionner un ingrédient...');

  const ingredientsListedBloc = document.createElement('div');
  ingredientsListedBloc.className = 'list_ingredients';
  ingredientsListedBloc.style.display = 'none';

  arrow.addEventListener('click', (e) => {
    if (e.target.className === 'fa-solid fa-angle-down fa-lg') {
      article.classList.remove('ingredients_close');
      article.classList.add('ingredients');
      headerIngr.style.display = 'none';
      inputIng.style.display = 'flex';
      arrow.style.display = 'none';
      arrowUp.style.display = 'flex';
      template.style.width = '828px';
      ingredientsListedBloc.style.display = 'flex';
      /** getInputIngredient is defined in recipes_inside_filter_input */
      // eslint-disable-next-line no-undef
      getInputIngredient();
      /** addTagFilterIngredients is defined in tags_generator */
      // eslint-disable-next-line no-undef
      addTagFilterIngredients();
    }
  });

  arrowUp.addEventListener('click', (e) => {
    if (e.target.className === 'fa-solid fa-angle-up fa-lg') {
      article.classList.remove('ingredients');
      article.classList.add('ingredients_close');
      inputIng.style.display = 'none';
      ingredientsListedBloc.style.display = 'none';
      headerIngr.style.display = 'flex';
      arrow.style.display = 'flex';
      arrowUp.style.display = 'none';
      template.style.width = '170px';
    }
  });

  // APPEND SECTION
  ingredientBox[0].appendChild(template);
  template.appendChild(article);
  article.appendChild(headerIngr);
  headerIngr.appendChild(title);
  headerIngr.appendChild(spanAngle);
  spanAngle.appendChild(arrow);
  article.appendChild(hiddenAngle);
  hiddenAngle.appendChild(arrowUp);
  article.appendChild(inputIng);
  article.appendChild(ingredientsListedBloc);

  return (article);
}

function showAppliance() {
  /** getDataJson is defined in the index file */
  // eslint-disable-next-line no-undef
  getDataJson();
  const applianceBox = document.getElementsByClassName('appareils_tag');
  const template = document.createElement('div');
  template.className = 'template';

  const article = document.createElement('div');
  article.className = 'appareils_close';

  const headerAppliance = document.createElement('header');
  headerAppliance.className = 'headAppliance';

  const title = document.createElement('h2');
  title.textContent = 'Appareils';
  title.className = 'nom';

  const spanAngle = document.createElement('span');
  spanAngle.className = 'angle-down';

  const arrow = document.createElement('i');
  arrow.className = 'fa-solid fa-angle-down fa-lg';
  arrow.style.cursor = 'pointer';

  const hiddenAngle = document.createElement('span');
  hiddenAngle.className = 'angle-up';

  const arrowUp = document.createElement('i');
  arrowUp.className = 'fa-solid fa-angle-up fa-lg';
  arrowUp.style.display = 'none';

  const inputAppliance = document.createElement('input');
  inputAppliance.setAttribute('id', 'appliance-input');
  inputAppliance.className = 'input_appliance';
  inputAppliance.setAttribute('placeholder', 'Selectionner un appareil...');

  const applianceListedBloc = document.createElement('div');
  applianceListedBloc.className = 'list_appareils';
  applianceListedBloc.style.display = 'none';

  arrow.addEventListener('click', (e) => {
    if (e.target.className === 'fa-solid fa-angle-down fa-lg') {
      article.classList.remove('appareils_close');
      article.classList.add('appareils');
      headerAppliance.style.display = 'none';
      inputAppliance.style.display = 'flex';
      arrow.style.display = 'none';
      arrowUp.style.display = 'flex';
      template.style.width = '828px';
      applianceListedBloc.style.display = 'flex';
      /** getInputAppliance is defined in recipes_inside_filter_input */
      // eslint-disable-next-line no-undef
      getInputAppliance();
      /** addTagFilterAppliance is defined in tags_generator */
      // eslint-disable-next-line no-undef
      addTagFilterAppliance();
    }
  });

  arrowUp.addEventListener('click', (e) => {
    if (e.target.className === 'fa-solid fa-angle-up fa-lg') {
      article.classList.remove('appareils');
      article.classList.add('appareils_close');
      inputAppliance.style.display = 'none';
      applianceListedBloc.style.display = 'none';
      headerAppliance.style.display = 'flex';
      arrow.style.display = 'flex';
      arrowUp.style.display = 'none';
      template.style.width = '170px';
    }
  });

  // APPEND SECTION
  applianceBox[0].appendChild(template);
  template.appendChild(article);
  article.appendChild(headerAppliance);
  headerAppliance.appendChild(title);
  headerAppliance.appendChild(spanAngle);
  spanAngle.appendChild(arrow);
  article.appendChild(hiddenAngle);
  hiddenAngle.appendChild(arrowUp);
  article.appendChild(inputAppliance);
  article.appendChild(applianceListedBloc);

  return (article);
}

function showUstensils() {
  /** getDataJson is defined in the index file */
  // eslint-disable-next-line no-undef
  getDataJson();
  const ustensilsBox = document.getElementsByClassName('ustensiles_tag');
  const template = document.createElement('div');
  template.className = 'template';

  const article = document.createElement('div');
  article.className = 'ustensils_close';

  const headerUstensils = document.createElement('header');
  headerUstensils.className = 'headUstensils';

  const title = document.createElement('h2');
  title.textContent = 'Ustensiles';
  title.className = 'nom';

  const spanAngle = document.createElement('span');
  spanAngle.className = 'angle-down';

  const arrow = document.createElement('i');
  arrow.className = 'fa-solid fa-angle-down fa-lg';
  arrow.style.cursor = 'pointer';

  const hiddenAngle = document.createElement('span');
  hiddenAngle.className = 'angle-up';

  const arrowUp = document.createElement('i');
  arrowUp.className = 'fa-solid fa-angle-up fa-lg';
  arrowUp.style.display = 'none';

  const inputUstensils = document.createElement('input');
  inputUstensils.setAttribute('id', 'ustensils-input');
  inputUstensils.className = 'input_ustensils';
  inputUstensils.setAttribute('placeholder', 'Selectionner un ustensile...');

  const ustensilsListedBloc = document.createElement('div');
  ustensilsListedBloc.className = 'list_ustensils';
  ustensilsListedBloc.style.display = 'none';

  arrow.addEventListener('click', (e) => {
    if (e.target.className === 'fa-solid fa-angle-down fa-lg') {
      article.classList.remove('ustensils_close');
      article.classList.add('ustensils');
      headerUstensils.style.display = 'none';
      inputUstensils.style.display = 'flex';
      arrow.style.display = 'none';
      arrowUp.style.display = 'flex';
      template.style.width = '828px';
      ustensilsListedBloc.style.display = 'flex';
      /** getInputUstensil is defined in recipes_inside_filter_input */
      // eslint-disable-next-line no-undef
      getInputUstensil();
      /** addTagFilterUstensils is defined in tags_generator */
      // eslint-disable-next-line no-undef
      addTagFilterUstensils();
    }
  });

  arrowUp.addEventListener('click', (e) => {
    if (e.target.className === 'fa-solid fa-angle-up fa-lg') {
      article.classList.remove('ustensils');
      article.classList.add('ustensils_close');
      inputUstensils.style.display = 'none';
      ustensilsListedBloc.style.display = 'none';
      headerUstensils.style.display = 'flex';
      arrow.style.display = 'flex';
      arrowUp.style.display = 'none';
      template.style.width = '170px';
    }
  });

  // APPEND SECTION
  ustensilsBox[0].appendChild(template);
  template.appendChild(article);
  article.appendChild(headerUstensils);
  headerUstensils.appendChild(title);
  headerUstensils.appendChild(spanAngle);
  spanAngle.appendChild(arrow);
  article.appendChild(hiddenAngle);
  hiddenAngle.appendChild(arrowUp);
  article.appendChild(inputUstensils);
  article.appendChild(ustensilsListedBloc);

  return (article);
}

const fillFiltersAll = (recipes) => {
  const ingredientBlocAppend = document.querySelector('.list_ingredients');
  const applianceBlocAppend = document.querySelector('.list_appareils');
  const ustensilsBlocAppend = document.querySelector('.list_ustensils');

  const ingredientsList = [];
  const ustensilsList = [];
  const applianceList = [];

  ingredientBlocAppend.innerHTML = '';
  applianceBlocAppend.innerHTML = '';
  ustensilsBlocAppend.innerHTML = '';

  recipes.forEach((recipe) => {
    /** ****INGREDIENTS*** */
    recipe.ingredients.forEach(({ ingredient }) => {
      if (ingredientsList.includes(ingredient) === false) {
        ingredientsList.push(ingredient);
        const filterItem = document.createElement('span');
        filterItem.classList.add('filter-item-ingredient');
        filterItem.innerText = ingredient;
        ingredientBlocAppend.appendChild(filterItem);
      }
    });
    /** ****APPLIANCE*** */
    if (applianceList.includes(recipe.appliance) === false) {
      applianceList.push(recipe.appliance);
      const filterItem = document.createElement('span');
      filterItem.classList.add('filter-item-appliance');
      filterItem.innerText = recipe.appliance;
      applianceBlocAppend.appendChild(filterItem);
    }
    /* *****USTENSILS*** */
    recipe.ustensils.forEach((ustensil) => {
      if (ustensilsList.includes(ustensil) === false) {
        ustensilsList.push(ustensil);
        const filterItem = document.createElement('span');
        filterItem.classList.add('filter-item-ustensils');
        filterItem.innerText = ustensil;
        ustensilsBlocAppend.appendChild(filterItem);
      }
    });
  });
  tagIngredientAlreadyAdded = false;
  addTagFilterIngredients();
  tagApplianceAlreadyAdded = false;
  addTagFilterAppliance();
  tagUstensilAlreadyAdded = false;
  addTagFilterUstensils();
};

/* *** IS ONE FILTER ALREADY OPEN ? **** */
/* * To avoid all filters to open when one of them is trully needed, this will only open one */
async function isArrowClicked() {
  const arrowIngredientsDown = document.querySelector('.ingredients_close .headIngredients .angle-down');
  const arrowApplianceDown = document.querySelector('.appareils_close .headAppliance .angle-down');
  const arrowUstensilsDown = document.querySelector('.ustensils_close .headUstensils .angle-down');

  let ingredientsCloseElement;
  let arrowIngredientsUp;

  let ustensilsCloseElement;
  let arrowUstensilsUp;

  let applianceCloseElement;
  let arrowApplianceUp;

  arrowApplianceDown.addEventListener('click', () => {
    ingredientsCloseElement = document.querySelector('.ingredients');
    arrowIngredientsUp = document.querySelector('.ingredients .angle-up .fa-angle-up');
    ustensilsCloseElement = document.querySelector('.ustensils');
    arrowUstensilsUp = document.querySelector('.ustensils .angle-up .fa-angle-up');
    if (ingredientsCloseElement != null) {
      arrowIngredientsUp.click();
    }
    if (ustensilsCloseElement != null) {
      arrowUstensilsUp.click();
    }
  });

  arrowIngredientsDown.addEventListener('click', () => {
    ustensilsCloseElement = document.querySelector('.ustensils');
    arrowUstensilsUp = document.querySelector('.ustensils .angle-up .fa-angle-up');
    applianceCloseElement = document.querySelector('.appareils');
    arrowApplianceUp = document.querySelector('.appareils .angle-up .fa-angle-up');
    if (ustensilsCloseElement != null) {
      arrowUstensilsUp.click();
    }
    if (applianceCloseElement != null) {
      arrowApplianceUp.click();
    }
  });

  arrowUstensilsDown.addEventListener('click', () => {
    ingredientsCloseElement = document.querySelector('.ingredients');
    arrowIngredientsUp = document.querySelector('.ingredients .angle-up .fa-angle-up');
    applianceCloseElement = document.querySelector('.appareils');
    arrowApplianceUp = document.querySelector('.appareils .angle-up .fa-angle-up');
    if (ingredientsCloseElement != null) {
      arrowIngredientsUp.click();
    }
    if (applianceCloseElement != null) {
      arrowApplianceUp.click();
    }
  });
}

async function getDataRecipes() {
  const response = await fetch('data/recipes.json');
  return await response.json();
}
async function init() {
  showIngredients();
  showAppliance();
  showUstensils();
  isArrowClicked();
  const { recipes } = await getDataRecipes();
  fillFiltersAll(recipes);
}
init();
