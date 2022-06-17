function showIngredients (){
    getDataJson();
    const ingredientBox = document.getElementsByClassName('ingredients_tag');
    const template = document.createElement('div');
    template.className='template';

    const article = document.createElement( 'div' );
    article.className = 'ingredients';

    const headerIngr = document.createElement('header');
    
    const title = document.createElement('h2');
    title.textContent = 'Ingredients';
    title.className = 'nom';

    const spanAngle = document.createElement('span');
    spanAngle.className='angle-down';

    const arrow = document.createElement('i');
    arrow.className="fa-solid fa-angle-down";

    const hiddenAngle = document.createElement('span');
    hiddenAngle.className='angle-up';

    const arrowUp = document.createElement('i');
    arrowUp.className="fa-solid fa-angle-up";

    const inputIng = document.createElement ('input');
    inputIng.className='input_ingredients';
    inputIng.setAttribute('placeholder', "Ingredients à selectioner")

    const ingredientsListedBloc = document.createElement('div')
    ingredientsListedBloc.className ='list_ingredients';

    //APPEND SECTION
    ingredientBox[0].appendChild(template);
    template.appendChild(article);
    article.appendChild(headerIngr);
    headerIngr.appendChild(title);
    headerIngr.appendChild(spanAngle);
    headerIngr.appendChild(arrow);
    headerIngr.appendChild(hiddenAngle);
    headerIngr.appendChild(arrowUp);
    article.appendChild(inputIng);
    article.appendChild(ingredientsListedBloc);

    return (article);
}

showIngredients();

function showAppliance (){
    getDataJson();
    const applianceBox = document.getElementsByClassName('appareils_tag');
    const template = document.createElement('div');
    template.className='template';

    const article = document.createElement( 'div' );
    article.className = 'appareils';

    const headerAppliance = document.createElement('header');
    
    const title = document.createElement('h2');
    title.textContent = 'Appareils';
    title.className = 'nom';

    const spanAngle = document.createElement('span');
    spanAngle.className='angle-down';

    const arrow = document.createElement('i');
    arrow.className="fa-solid fa-angle-down";

    const hiddenAngle = document.createElement('span');
    hiddenAngle.className='angle-up';

    const arrowUp = document.createElement('i');
    arrowUp.className="fa-solid fa-angle-up";

    const inputAppliance = document.createElement ('input');
    inputAppliance.className='input_ingredients';
    inputAppliance.setAttribute('placeholder', "Appareils à selectioner")

    const applianceListedBloc = document.createElement('div')
    applianceListedBloc.className ='list_appareils';


    //APPEND SECTION
    applianceBox[0].appendChild(template);
    template.appendChild(article);
    article.appendChild(headerAppliance);
    headerAppliance.appendChild(title);
    headerAppliance.appendChild(spanAngle);
    headerAppliance.appendChild(arrow);
    headerAppliance.appendChild(hiddenAngle);
    headerAppliance.appendChild(arrowUp);
    article.appendChild(inputAppliance);
    article.appendChild(applianceListedBloc);

    return (article);
}
showAppliance();

function showUstensils (){
    getDataJson();
    const ustencilsBox = document.getElementsByClassName('ustenciles_tag');
    const template = document.createElement('div');
    template.className='template';

    const article = document.createElement('div');
    article.className = 'ustencils';

    const headerUstensils = document.createElement('header');
    
    const title = document.createElement('h2');
    title.textContent = 'Ustenciles';
    title.className = 'nom';

    const spanAngle = document.createElement('span');
    spanAngle.className='angle-down';

    const arrow = document.createElement('i');
    arrow.className="fa-solid fa-angle-down";

    const hiddenAngle = document.createElement('span');
    hiddenAngle.className='angle-up';

    const arrowUp = document.createElement('i');
    arrowUp.className="fa-solid fa-angle-up";

    const inputUstencils = document.createElement ('input');
    inputUstencils.className='input_ingredients';
    inputUstencils.setAttribute('placeholder', "Appareils à selectioner")

    const ustencilsListedBloc = document.createElement('div')
    ustencilsListedBloc.className ='list_appareils';


    //APPEND SECTION
    ustencilsBox[0].appendChild(template);
    template.appendChild(article);
    article.appendChild(headerUstensils);
    headerUstensils.appendChild(title);
    headerUstensils.appendChild(spanAngle);
    headerUstensils.appendChild(arrow);
    headerUstensils.appendChild(hiddenAngle);
    headerUstensils.appendChild(arrowUp);
    article.appendChild(inputUstencils);
    article.appendChild(ustencilsListedBloc);

    return (article);
}
showUstensils();

/* async function getIngredientsData() {
    const response = await fetch ("data/recipes.json");
    const ingredients = response.ingredients;
    return ({ recipes: [ingredients] });
}*/
