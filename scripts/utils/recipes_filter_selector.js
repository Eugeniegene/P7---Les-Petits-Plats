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
  const ustencilsBox = document.getElementsByClassName('ustenciles_tag');
  const template = document.createElement('div');
  template.className = 'template';

  const article = document.createElement('div');
  article.className = 'ustencils_close';

  const headerUstensils = document.createElement('header');
  headerUstensils.className = 'headUstensils';

  const title = document.createElement('h2');
  title.textContent = 'Ustenciles';
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

  const inputUstencils = document.createElement('input');
  inputUstencils.setAttribute('id', 'ustencils-input');
  inputUstencils.className = 'input_ustencils';
  inputUstencils.setAttribute('placeholder', 'Selectionner un ustencile...');

  const ustencilsListedBloc = document.createElement('div');
  ustencilsListedBloc.className = 'list_ustencils';
  ustencilsListedBloc.style.display = 'none';

  arrow.addEventListener('click', (e) => {
    if (e.target.className === 'fa-solid fa-angle-down fa-lg') {
      article.classList.remove('ustencils_close');
      article.classList.add('ustencils');
      headerUstensils.style.display = 'none';
      inputUstencils.style.display = 'flex';
      arrow.style.display = 'none';
      arrowUp.style.display = 'flex';
      template.style.width = '828px';
      ustencilsListedBloc.style.display = 'flex';
      /** getInputUstencil is defined in recipes_inside_filter_input */
      // eslint-disable-next-line no-undef
      getInputUstencil();
      /** addTagFilterUstencils is defined in tags_generator */
      // eslint-disable-next-line no-undef
      addTagFilterUstencils();
    }
  });

  arrowUp.addEventListener('click', (e) => {
    if (e.target.className === 'fa-solid fa-angle-up fa-lg') {
      article.classList.remove('ustencils');
      article.classList.add('ustencils_close');
      inputUstencils.style.display = 'none';
      ustencilsListedBloc.style.display = 'none';
      headerUstensils.style.display = 'flex';
      arrow.style.display = 'flex';
      arrowUp.style.display = 'none';
      template.style.width = '170px';
    }
  });

  // APPEND SECTION
  ustencilsBox[0].appendChild(template);
  template.appendChild(article);
  article.appendChild(headerUstensils);
  headerUstensils.appendChild(title);
  headerUstensils.appendChild(spanAngle);
  spanAngle.appendChild(arrow);
  article.appendChild(hiddenAngle);
  hiddenAngle.appendChild(arrowUp);
  article.appendChild(inputUstencils);
  article.appendChild(ustencilsListedBloc);

  return (article);
}

const fillFiltersAll = (recipes) => {
  const ingredientBlocAppend = document.querySelector('.list_ingredients');
  const applianceBlocAppend = document.querySelector('.list_appareils');
  const ustencilsBlocAppend = document.querySelector('.list_ustencils');

  const ingredientsList = [];
  const ustencilsList = [];
  const applianceList = [];

  ingredientBlocAppend.innerHTML = '';
  applianceBlocAppend.innerHTML = '';
  ustencilsBlocAppend.innerHTML = '';

  for (let i = 0; i < recipes.length; i++) {
    /** ****INGREDIENTS*** */
    for (let j = 0; j < recipes[i].ingredients.length; j++) {
      if (ingredientsList.includes(recipes[i].ingredients[j].ingredient) === false) {
        ingredientsList.push(recipes[i].ingredients[j].ingredient);
        const filterItem = document.createElement('span');
        filterItem.classList.add('filter-item-ingredient');
        filterItem.innerText = recipes[i].ingredients[j].ingredient;
        ingredientBlocAppend.appendChild(filterItem);
      }
    }
    /** ****APPLIANCE*** */
    if (applianceList.includes(recipes[i].appliance) === false) {
      applianceList.push(recipes[i].appliance);
      const filterItem = document.createElement('span');
      filterItem.classList.add('filter-item-appliance');
      filterItem.innerText = recipes[i].appliance;
      applianceBlocAppend.appendChild(filterItem);
    }
    /* *****USTENSILS*** */
    for (let j = 0; j < recipes[i].ustensils.length; j++) {
      if (ustencilsList.includes(recipes[i].ustensils[j]) === false) {
        ustencilsList.push(recipes[i].ustensils[j]);
        const filterItem = document.createElement('span');
        filterItem.classList.add('filter-item-ustencils');
        filterItem.innerText = recipes[i].ustensils[j];
        ustencilsBlocAppend.appendChild(filterItem);
      }
    }
  }
  tagIngredientAlreadyAdded = false;
  addTagFilterIngredients();
  tagApplianceAlreadyAdded = false;
  addTagFilterAppliance();
  tagUstencilAlreadyAdded = false;
  addTagFilterUstencils();
};

/* *** IS ONE FILTER ALREADY OPEN ? **** */
/* * To avoid all filters to open when one of them is trully needed, this will only open one */
async function isArrowClicked() {
  const arrowIngredientsDown = document.querySelector('.ingredients_close .headIngredients .angle-down');
  const arrowApplianceDown = document.querySelector('.appareils_close .headAppliance .angle-down');
  const arrowUstensilsDown = document.querySelector('.ustencils_close .headUstensils .angle-down');

  let ingredientsCloseElement;
  let arrowIngredientsUp;

  let ustensilsCloseElement;
  let arrowUstencilsUp;

  let applianceCloseElement;
  let arrowApplianceUp;

  arrowApplianceDown.addEventListener('click', () => {
    ingredientsCloseElement = document.querySelector('.ingredients');
    arrowIngredientsUp = document.querySelector('.ingredients .angle-up .fa-angle-up');
    ustensilsCloseElement = document.querySelector('.ustencils');
    arrowUstencilsUp = document.querySelector('.ustencils .angle-up .fa-angle-up');
    if (ingredientsCloseElement != null) {
      arrowIngredientsUp.click();
    }
    if (ustensilsCloseElement != null) {
      arrowUstencilsUp.click();
    }
  });

  arrowIngredientsDown.addEventListener('click', () => {
    ustensilsCloseElement = document.querySelector('.ustencils');
    arrowUstencilsUp = document.querySelector('.ustencils .angle-up .fa-angle-up');
    applianceCloseElement = document.querySelector('.appareils');
    arrowApplianceUp = document.querySelector('.appareils .angle-up .fa-angle-up');
    if (ustensilsCloseElement != null) {
      arrowUstencilsUp.click();
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
