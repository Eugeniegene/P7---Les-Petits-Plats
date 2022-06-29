const tagsBloc = document.getElementById('tags_selected');
const filterItemIngredients = document.getElementsByClassName('filter-item-ingredient');
const filterItemAppliance = document.getElementsByClassName('filter-item-appliance');
const filterItemUstencils = document.getElementsByClassName('filter-item-ustencils');

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
    for(let element of filterItemIngredients){
        element.addEventListener('click', function (){
            let tagIngredient = document.createElement('div');
            tagIngredient.setAttribute('id', 'ingredient-tag');
            tagIngredient.classList.add('tagIngredient');
            tagIngredient.innerHTML = "${ingredients}";
            let deleteTagIcon = document.createElement("span");
            deleteTagIcon.className="deleteIcon";
            let deleteIconImg = document.createElement('i');
            deleteIconImg.className='fa-regular fa-circle-xmark';
            deleteIconImg.style.cursor = 'pointer';
            deleteTagIcon.addEventListener('click', function(){
                this.parentNode.remove()
                return false;
            })
            ingredientTagsWrapper.appendChild(tagIngredient);
            ingredientTagsWrapper.appendChild(deleteTagIcon);
            deleteTagIcon.appendChild(deleteIconImg);
            console.log(element.outerHTML + "test");
        });
    }
}
function addTagFilterAppliance(){   
    for(let element of filterItemAppliance){
        element.addEventListener('click', function (){
            let tagAppliance = document.createElement('div');
            tagAppliance.setAttribute('id', 'appliance-tag');
            tagAppliance.classList.add('tagAppliance');
            tagAppliance.innerHTML = "${appliance}";
            let deleteTagIcon = document.createElement("span");
            deleteTagIcon.className="deleteIcon";
            let deleteIconImg = document.createElement('i');
            deleteIconImg.className='fa-regular fa-circle-xmark';
            deleteIconImg.style.cursor = 'pointer';
            deleteTagIcon.addEventListener('click', function(){
                this.parentNode.remove()
                return false;
            })
            applianceTagsWrapper.appendChild(tagAppliance);
            applianceTagsWrapper.appendChild(deleteTagIcon);
            deleteTagIcon.appendChild(deleteIconImg);
            console.log(element.outerHTML + "test");
        });
    }
}
function addTagFilterUstencils(){   
    for(let element of filterItemUstencils){
        element.addEventListener('click', function (){
            let tagUstencils = document.createElement('div');
            tagUstencils.setAttribute('id', 'ustencils-tag');
            tagUstencils.classList.add('tagUstencils');
            tagUstencils.innerHTML = "${ustencils}";
            let deleteTagIcon = document.createElement("span");
            deleteTagIcon.className="deleteIcon";
            let deleteIconImg = document.createElement('i');
            deleteIconImg.className='fa-regular fa-circle-xmark';
            deleteTagIcon.addEventListener('click', function(){
                this.parentNode.remove()
                return false;
            })
            utensilTagsWrapper.appendChild(tagUstencils);
            utensilTagsWrapper.appendChild(deleteTagIcon);
            deleteTagIcon.appendChild(deleteIconImg);
            console.log(element.outerHTML + "test");
        });
    }
}
