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
                console.log(tagIngredient);
                tagIngredient.remove();
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
function filteredRecipesWithTags (filteredRecipes) {
    taggedIngredientsDOM = Array.from(document.querySelectorAll('.ingredients_tags_wrapper .filter-item-ingredient .ingredient-tag'));
    taggedAppliancesDOM = Array.from(document.querySelectorAll('.appliance_tags_wrapper .filter-item-appliance .appliance-tag'));
    taggedUtensilsDOM = Array.from(document.querySelectorAll('.ustensil_tags_wrapper .filter-item-ustencils .ustencils-tag'));
    let taggedIngredients = [];
    let taggedAppliances = [];
    let taggedUtensils = [];

    for(let i=0; i<taggedIngredientsDOM.length; i++) {
        taggedIngredients.push(taggedIngredientsDOM[i].innerText);
    }
    for(let i=0; i<taggedAppliancesDOM.length; i++) {
        taggedAppliances.push(taggedAppliancesDOM[i].innerText);
    }
    for(let i=0; i<taggedUtensilsDOM.length; i++) {
        taggedUtensils.push(taggedUtensilsDOM[i].innerText);
    }
};
