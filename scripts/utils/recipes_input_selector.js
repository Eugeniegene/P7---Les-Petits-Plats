async function getRecipes() {
  const response = await fetch ("data/recipes.json");
  const recipes = response.recipes;
  return ({ recipes: [recipes] });
};

function liveSearch() {
  const article = document.getElementsByName('article');
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
let typingTimer;               
let typeInterval = 500;  
let searchInput = document.getElementById('search-input');

searchInput.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(liveSearch, typeInterval);
});

async function init() {
  const { recipes } = await getDataJson();
  displayData(recipes);
};

init();
