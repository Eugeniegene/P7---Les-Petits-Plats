/* eslint-disable no-plusplus */
async function getDataRecipes() {
  const response = await fetch('data/recipes.json');
  // eslint-disable-next-line no-return-await
  return await response.json();
}
/* *Filter selection input */
/* **************GET A SPECIFIC INGREDIENT VIA INPUT******************* */
async function getDetailedFilterIngredients() {
  getDataRecipes();
  const filterRender = document.querySelectorAll('.list_ingredients span');
  const cards = document.querySelectorAll('span.filter-item-ingredient');
  const searchQuery = document.getElementById('ingredient-input').value;
  cards.forEach((card) => {
    if (card.innerText.toLowerCase().includes(searchQuery.toLowerCase())) {
      card.classList.remove('is-hidden');
    } else {
      card.classList.add('is-hidden');
    }
  });
  return (filterRender);
}
/** getInputIngredient is defined in tags_generator */
// eslint-disable-next-line no-unused-vars
async function getInputIngredient() {
  const searchInputIngredient = document.getElementById('ingredient-input');
  searchInputIngredient.addEventListener('keyup', () => {
    /** typingTimer is defined in recipes_input_selector */
    // eslint-disable-next-line no-undef
    clearTimeout(typingTimer);
    /** typingTimer is defined in recipes_input_selector */
    // eslint-disable-next-line no-undef
    typingTimer = setTimeout(getDetailedFilterIngredients, typeInterval);
  });
}

/* **************GET A SPECIFIC APPLIANCE VIA INPUT******************* */

async function getDetailedFilterAppliance() {
  getDataRecipes();
  const filterRender = document.querySelectorAll('.list_appliance span');
  const cards = document.querySelectorAll('span.filter-item-appliance');
  const searchQuery = document.getElementById('appliance-input').value;
  cards.forEach((card) => {
    if (card.innerText.toLowerCase().includes(searchQuery.toLowerCase())) {
      card.classList.remove('is-hidden');
    } else {
      card.classList.add('is-hidden');
    }
  });
  return (filterRender);
}
/** getInputAppliance is defined in tags_generator */
// eslint-disable-next-line no-unused-vars
async function getInputAppliance() {
  const searchInputAppliance = document.getElementById('appliance-input');
  searchInputAppliance.addEventListener('keyup', () => {
    /** typingTimer is defined in recipes_input_selector */
    // eslint-disable-next-line no-undef
    clearTimeout(typingTimer);
    /** typingTimer is defined in recipes_input_selector */
    // eslint-disable-next-line no-undef
    typingTimer = setTimeout(getDetailedFilterAppliance, typeInterval);
  });
}

/* **************GET A SPECIFIC USTENSIL VIA INPUT******************* */
async function getDetailedFilterUstensil() {
  getDataRecipes();
  const filterRender = document.querySelectorAll('.list_ustensils span');
  const cards = document.querySelectorAll('span.filter-item-ustensils');
  const searchQuery = document.getElementById('ustensils-input').value;
  cards.forEach((card) => {
    if (card.innerText.toLowerCase().includes(searchQuery.toLowerCase())) {
      card.classList.remove('is-hidden');
    } else {
      card.classList.add('is-hidden');
    }
  });
  return (filterRender);
}
/** getInputUstensil is defined in tags_generator */
// eslint-disable-next-line no-unused-vars
async function getInputUstensil() {
  const searchInputUstensil = document.getElementById('ustensils-input');
  searchInputUstensil.addEventListener('keyup', () => {
    /** typingTimer is defined in recipes_input_selector */
    // eslint-disable-next-line no-undef
    clearTimeout(typingTimer);
    /** typingTimer is defined in recipes_input_selector */
    // eslint-disable-next-line no-undef
    typingTimer = setTimeout(getDetailedFilterUstensil, typeInterval);
  });
}
