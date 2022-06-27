function showIngredients (){
    getDataJson();
    const ingredientBox = document.getElementsByClassName('ingredients_tag');
    const template = document.createElement('div');
    template.className='template';

    const article = document.createElement( 'div' );
    article.className = 'ingredients_close';
    //article.style.display='none';

    const headerIngr = document.createElement('header');
    headerIngr.className = 'headUstensils';
    
    const title = document.createElement('h2');
    title.textContent = 'Ingredients';
    title.className = 'nom';

    const spanAngle = document.createElement('span');
    spanAngle.className='angle-down';

    const arrow = document.createElement('i');
    arrow.className="fa-solid fa-angle-down fa-lg";

    const hiddenAngle = document.createElement('span');
    hiddenAngle.className='angle-up';

    const arrowUp = document.createElement('i');
    arrowUp.className="fa-solid fa-angle-up fa-lg";
    arrowUp.style.display='none';

    const inputIng = document.createElement ('input');
    inputIng.className='input_ingredients';
    inputIng.setAttribute('placeholder', "Ingredients à selectioner")

    const ingredientsListedBloc = document.createElement('div')
    ingredientsListedBloc.className ='list_ingredients';
    ingredientsListedBloc.style.display = "none";

    arrow.addEventListener ('click', function (e){
        if (e.target.className == 'fa-solid fa-angle-down fa-lg') {
            article.classList.remove('ingredients_close');
            article.classList.add('ingredients');
            headerIngr.style.display='none';
            arrow.style.display='none';
            arrowUp.style.display='flex';
            template.style.width= "828px"
            ingredientsListedBloc.style.display = "flex";
        }});

    arrowUp.addEventListener ('click', function (e){
        if (e.target.className == 'fa-solid fa-angle-up fa-lg') {
            article.classList.remove('ingredients');
            article.classList.add('ingredients_close');
            inputIng.style.display='none';
            ingredientsListedBloc.style.display="none";
            headerIngr.style.display='flex';
            arrow.style.display='flex';
            arrowUp.style.display='none';
        }});

    //APPEND SECTION
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


function showAppliance (){
    getDataJson();
    const applianceBox = document.getElementsByClassName('appareils_tag');
    const template = document.createElement('div');
    template.className='template';

    const closeArticle = document.createElement ('div');
    closeArticle.className = "appareils_close";

    const article = document.createElement('div');
    article.className = 'appareils';
    article.style.display='none';

    const headerAppliance = document.createElement('header');
    headerAppliance.className = 'headAppliance';
    
    const title = document.createElement('h2');
    title.textContent = 'Appareils';
    title.className = 'nom';

    const spanAngle = document.createElement('span');
    spanAngle.className='angle-down';

    const arrow = document.createElement('i');
    arrow.className="fa-solid fa-angle-down fa-lg";

    const hiddenAngle = document.createElement('span');
    hiddenAngle.className='angle-up';

    const arrowUp = document.createElement('i');
    arrowUp.className="fa-solid fa-angle-up fa-lg";

    arrow.addEventListener ('click', function (e){
        if (e.target.className == 'fa-solid fa-angle-down fa-lg') {
            closeArticle.style.display='none';
            article.style.display='block';
        }});

    arrowUp.addEventListener ('click', function (e){
        if (e.target.className == 'fa-solid fa-angle-up fa-lg') {
            article.style.display='none';
            closeArticle.style.display='block';
        }});

    const inputAppliance = document.createElement ('input');
    inputAppliance.className='input_appliance';
    inputAppliance.setAttribute('placeholder', "Appareils à selectioner")

    const applianceListedBloc = document.createElement('div')
    applianceListedBloc.className ='list_appareils';

    //APPEND SECTION
    applianceBox[0].appendChild(template);
    template.appendChild(closeArticle);
    template.appendChild(article);
    closeArticle.appendChild(headerAppliance);
    headerAppliance.appendChild(title);
    headerAppliance.appendChild(spanAngle);
    spanAngle.appendChild(arrow);
    article.appendChild(hiddenAngle);
    hiddenAngle.appendChild(arrowUp);
    article.appendChild(inputAppliance);
    article.appendChild(applianceListedBloc);

    return (article);
}


function showUstensils (){
    getDataJson();
    const ustencilsBox = document.getElementsByClassName('ustenciles_tag');
    const template = document.createElement('div');
    template.className='template';

    const closeArticle = document.createElement ('div');
    closeArticle.className = "ustencils_close";

    const article = document.createElement('div');
    article.className = 'ustencils';
    article.style.display='none';

    const headerUstensils = document.createElement('header');
    headerUstensils.className = 'headUstensils';
    
    const title = document.createElement('h2'); 
    title.textContent = 'Ustenciles';
    title.className = 'nom';

    const spanAngle = document.createElement('span');
    spanAngle.className='angle-down';

    const arrow = document.createElement('i');
    arrow.className="fa-solid fa-angle-down fa-lg";
    
    const hiddenAngle = document.createElement('span');
    hiddenAngle.className='angle-up';

    const arrowUp = document.createElement('i');
    arrowUp.className="fa-solid fa-angle-up fa-lg";

    arrow.addEventListener ('click', function (e){
        if (e.target.className == 'fa-solid fa-angle-down fa-lg') {
            //e.target.className = 'ustencils';
            closeArticle.style.display='none';
            article.style.display='block';
        }});

    arrowUp.addEventListener ('click', function (e){
        if (e.target.className == 'fa-solid fa-angle-up fa-lg') {
            //e.target.className = 'ustencils';
            article.style.display='none';
            closeArticle.style.display='block';
        }});

    console.log (closeArticle, 'toto');

    const inputUstencils = document.createElement ('input');
    inputUstencils.className='input_ingredients';
    inputUstencils.setAttribute('placeholder', "Appareils à selectioner")

    const ustencilsListedBloc = document.createElement('div')
    ustencilsListedBloc.className ='list_ustencils';

    //APPEND SECTION
    ustencilsBox[0].appendChild(template);
    template.appendChild(closeArticle);
    template.appendChild(article);
    closeArticle.appendChild(headerUstensils);
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
    let ingredientBlocAppend = document.querySelector(".list_ingredients");
    let applianceBlocAppend = document.querySelector(".list_appareils");
    let ustencilsBlocAppend = document.querySelector(".list_ustencils");

    let ingredientsList = [];
    let ustencilsList = [];
    let applianceList = [];
    
    ingredientBlocAppend.innerHTML ="";
    applianceBlocAppend.innerHTML ="";
    ustencilsBlocAppend.innerHTML ="";

    for(let i=0; i<recipes.length; i++) {
        //ingrédients
        for(let j=0; j<recipes[i].ingredients.length; j++) {
            if(ingredientsList.includes(recipes[i].ingredients[j].ingredient) === false) {
                ingredientsList.push(recipes[i].ingredients[j].ingredient);
                let filterItem = document.createElement('span');
                filterItem.classList.add('filter-item');
                filterItem.innerText = recipes[i].ingredients[j].ingredient;
                var br = document.createElement("br");
                ingredientBlocAppend.appendChild(filterItem);
            }
        }
        //appareils
            if (applianceList.includes(recipes[i].appliance) === false) {
                applianceList.push(recipes[i].appliance);
                let filterItem = document.createElement('span');
                filterItem.classList.add('filter-item');
                filterItem.innerText = recipes[i].appliance;
                applianceBlocAppend.appendChild(filterItem);
            }
        //ustensiles
        for(let j=0; j<recipes[i].ustensils.length; j++) {
            if (ustencilsList.includes(recipes[i].ustensils[j]) === false) {
                ustencilsList.push(recipes[i].ustensils[j]);
                let filterItem = document.createElement('span');
                filterItem.classList.add('filter-item');
                filterItem.innerText = recipes[i].ustensils[j];
                ustencilsBlocAppend.appendChild(filterItem);
            }
        }
    }
    console.log(ingredientBlocAppend);

}

async function getDataRecipes() {
    const response = await fetch ("data/recipes.json");
    return await response.json();
}

async function init(){
    showIngredients();
    showAppliance();
    showUstensils();
    const { recipes } = await getDataRecipes();
    fillFiltersAll(recipes);
}
init();
