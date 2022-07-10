const tagsBloc = document.getElementById('tags_selected');
const filterItemIngredients = document.getElementsByClassName('filter-item-ingredient');
const filterItemAppliance = document.getElementsByClassName('filter-item-appliance');
const filterItemUstencils = document.getElementsByClassName('filter-item-ustencils');
let tagIngredientAlreadyAdded = false;
let tagApplianceAlreadyAdded = false;
let tagUstencilAlreadyAdded = false;
/*****TAGS WRAPPERS ****/
let ingredientTagsWrapper = document.querySelector('.ingredients_tags_wrapper');
let applianceTagsWrapper = document.querySelector('.appliance_tags_wrapper');
let utensilTagsWrapper = document.querySelector('.ustensil_tags_wrapper');

/******TAG ARRAYS******* */
let ingredientsTags=[];
let applianceTags=[];
let ustencilsTags=[];

/*******ADD TAG FOR FILTERS WITH DELETE TAG EVENT*******/
function addTagFilterIngredients(){
    if (tagIngredientAlreadyAdded == false) {
        tagIngredientAlreadyAdded = true;
    for(let element of filterItemIngredients){
        element.addEventListener('click', function (e){
            liveSearch();
            let tagIngredient = document.createElement('div');
            tagIngredient.setAttribute('class', 'ingredient-tag');
            tagIngredient.classList.add('tagIngredient');
            tagIngredient.innerHTML = e.target.outerHTML;
            let deleteTagIcon = document.createElement("span");
            deleteTagIcon.className="deleteIcon";
            let deleteIconImg = document.createElement('i');
            deleteIconImg.className='fa-regular fa-circle-xmark';
            deleteIconImg.style.cursor = 'pointer';
            deleteIconImg.style.width= '20px';
            deleteTagIcon.addEventListener('click', function(e){
                tagIngredient.remove();
                liveSearch();
                return false;
            })
            ingredientTagsWrapper.appendChild(tagIngredient);
            tagIngredient.appendChild(deleteTagIcon);
            deleteTagIcon.appendChild(deleteIconImg);
        });
    }
}
}
function addTagFilterAppliance(){   
    if (tagApplianceAlreadyAdded == false) {
        tagApplianceAlreadyAdded = true;
    for(let element of filterItemAppliance){
        element.addEventListener('click', function (e){
            liveSearch();
            let tagAppliance = document.createElement('div');
            tagAppliance.setAttribute('class', 'appliance-tag');
            tagAppliance.classList.add('tagAppliance');
            tagAppliance.innerHTML = e.target.outerHTML;
            let deleteTagIcon = document.createElement("span");
            deleteTagIcon.className="deleteIcon";
            let deleteIconImg = document.createElement('i');
            deleteIconImg.className='fa-regular fa-circle-xmark';
            deleteIconImg.style.cursor = 'pointer';
            deleteIconImg.style.width= '20px';
            deleteTagIcon.addEventListener('click', function(e){
                tagAppliance.remove();
                liveSearch();
                return false;
            })
            applianceTagsWrapper.appendChild(tagAppliance);
            tagAppliance.appendChild(deleteTagIcon);
            deleteTagIcon.appendChild(deleteIconImg);
        });
    }
}
}
function addTagFilterUstencils(){   
    if (tagUstencilAlreadyAdded == false) {
        tagUstencilAlreadyAdded = true;
    for(let element of filterItemUstencils){
        element.addEventListener('click', function (e){
            liveSearch();
            let tagUstencils = document.createElement('div');
            tagUstencils.setAttribute('class', 'ustencils-tag');
            tagUstencils.classList.add('tagUstencils');
            tagUstencils.innerHTML = e.target.outerHTML;
            let deleteTagIcon = document.createElement("span");
            deleteTagIcon.className="deleteIcon";
            let deleteIconImg = document.createElement('i');
            deleteIconImg.className='fa-regular fa-circle-xmark';
            deleteIconImg.style.cursor = 'pointer';
            deleteIconImg.style.width= '20px';
            deleteTagIcon.addEventListener('click', function(e){
                tagUstencils.remove();
                liveSearch();
                return false;
            })
            utensilTagsWrapper.appendChild(tagUstencils);
            tagUstencils.appendChild(deleteTagIcon);
            deleteTagIcon.appendChild(deleteIconImg);
        });
    }
}
}
/*********TAGS FILTERING RECIPES********/
function filteredRecipesWithTags (recipesToFilter) {
    taggedIngredientsDOM = Array.from(document.querySelectorAll('.ingredients_tags_wrapper .ingredient-tag .filter-item-ingredient'));
    taggedAppliancesDOM = Array.from(document.querySelectorAll('.appliance_tags_wrapper .appliance-tag .filter-item-appliance'));
    taggedustensilsDOM = Array.from(document.querySelectorAll('.ustensil_tags_wrapper .ustencils-tag .filter-item-ustencils'));
    const recipesToDisplay = [];
    let taggedIngredients = [];
    let taggedAppliances = [];
    let taggedustensils = [];

    for(let i=0; i<taggedIngredientsDOM.length; i++) {
        taggedIngredients.push(taggedIngredientsDOM[i].innerText);
    }
    for(let i=0; i<taggedAppliancesDOM.length; i++) {
        taggedAppliances.push(taggedAppliancesDOM[i].innerText);
    }
    for(let i=0; i<taggedustensilsDOM.length; i++) {
        taggedustensils.push(taggedustensilsDOM[i].innerText);
    }
    for(let i=0; i<recipesToFilter.length; i++) {
        let recipeIsMatching = false; 
        let ingredientIsMatching = false;
        let applianceIsMatching = false;
        let utensilIsMatching = false;
        let ingredientsMatching = 0;
        let appliancesMatching = 0;
        let ustensilsMatching = 0;
        let ingredientsInTheRecipe = [];
        let appliancesInTheRecipe = [];
        let ustensilsInTheRecipe = [];

        for(let j=0; j<recipesToFilter[i].ingredients.length; j++) {
            ingredientsInTheRecipe.push(recipesToFilter[i].ingredients[j].ingredient);
        }

        appliancesInTheRecipe.push(recipesToFilter[i].appliance);

        for(let j=0; j<recipesToFilter[i].ustensils.length; j++) {
            ustensilsInTheRecipe.push(recipesToFilter[i].ustensils[j]);
        }
        //console.log("recipes",i);
        
        if(taggedIngredients.length > 0) {
            for(let j=0; j<taggedIngredients.length; j++) {
                if(ingredientsInTheRecipe.includes(taggedIngredients[j])){
                    ingredientsMatching++;
                    console.log('test boucle ingredients match');
                }
            }
        }
        if(taggedAppliances.length > 0){
            for(let j=0; j<taggedAppliances.length; j++) {
                if(appliancesInTheRecipe.includes(taggedAppliances[j])) {
                    appliancesMatching++;
                    console.log('test boucle appliance match');
                }
            }
        }
        if(taggedustensils.length > 0) {
            for(let j=0; j<taggedustensils.length; j++) {
                if(ustensilsInTheRecipe.includes(taggedustensils[j])){
                    ustensilsMatching++;
                    console.log('test boucle ustensils match');
                }
            }
        }
    
        if(ingredientsMatching === taggedIngredients.length) {
            ingredientIsMatching = true;
        }
        if(taggedAppliances.length > 0) {
            if(appliancesMatching > 0){
                applianceIsMatching = true;
            }
        } else applianceIsMatching = true;

        if(ustensilsMatching === taggedustensils.length) {
            utensilIsMatching = true;
        }
        if((ingredientIsMatching === true) && (applianceIsMatching === true) && (utensilIsMatching === true)) {
            recipeIsMatching = true;
        }
        if(recipeIsMatching === true) {
            recipesToDisplay.push(recipesToFilter[i]);
        }
    }
    fillFiltersAll(recipesToDisplay);
    return recipesToDisplay;
}
