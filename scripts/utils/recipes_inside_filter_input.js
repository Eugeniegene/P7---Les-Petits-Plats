async function getDataRecipes() {
    const response = await fetch ("data/recipes.json");
    return await response.json();
}

/* *Filter selection input */ 
/***************GET A SPECIFIC INGREDIENT VIA INPUT********************/
async function getDetailedFilterIngredients(){
    getDataRecipes();
    const filterRender = document.querySelectorAll('.list_ingredients span');
    let cards = document.querySelectorAll('span.filter-item-ingredient');
    let search_query = document.getElementById("ingredient-input").value;
    console.log(search_query);
    console.log(cards[0].innerText);
    for (var i = 0; i < cards.length; i++) {
      if(cards[i].innerText.toLowerCase().includes(search_query.toLowerCase())) {
            cards[i].classList.remove("is-hidden");
      } else {
        cards[i].classList.add("is-hidden");
      }
    }
    return(filterRender);
}

async function getInputIngredient(){
    let searchInputIngredient = document.getElementById('ingredient-input');
    searchInputIngredient.addEventListener('keyup', () => {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(getDetailedFilterIngredients, typeInterval);
    });
}

/***************GET A SPECIFIC APPLIANCE VIA INPUT********************/

async function getDetailedFilterAppliance(){
  getDataRecipes();
  const filterRender = document.querySelectorAll('.list_appliance span');
  let cards = document.querySelectorAll('span.filter-item-appliance');
  let search_query = document.getElementById("appliance-input").value;
  console.log(search_query);
  console.log(cards[0].innerText);
  for (var i = 0; i < cards.length; i++) {
    if(cards[i].innerText.toLowerCase()
      .includes(search_query.toLowerCase())) {
        cards[i].classList.remove("is-hidden");
    } else {
      cards[i].classList.add("is-hidden");
    }
  }
  return(filterRender);
}

async function getInputAppliance(){
  let searchInputAppliance = document.getElementById('appliance-input');
  searchInputAppliance.addEventListener('keyup', () => {
      clearTimeout(typingTimer);
      typingTimer = setTimeout(getDetailedFilterAppliance, typeInterval);
  });
}

/***************GET A SPECIFIC USTENCIL VIA INPUT********************/
async function getDetailedFilterUstencil(){
  getDataRecipes();
  const filterRender = document.querySelectorAll('.list_ustencils span');
  let cards = document.querySelectorAll('span.filter-item-ustencils');
  let search_query = document.getElementById("ustencils-input").value;
  console.log(search_query);
  console.log(cards[0].innerText);
  for (var i = 0; i < cards.length; i++) {
    if(cards[i].innerText.toLowerCase()
      .includes(search_query.toLowerCase())) {
        cards[i].classList.remove("is-hidden");
    } else {
      cards[i].classList.add("is-hidden");
    }
  }
  return(filterRender);
}

async function getInputUstencil(){
  let searchInputUstencil = document.getElementById('ustencils-input');
  searchInputUstencil.addEventListener('keyup', () => {
      clearTimeout(typingTimer);
      typingTimer = setTimeout(getDetailedFilterUstencil, typeInterval);
  });
}
