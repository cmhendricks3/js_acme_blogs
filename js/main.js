function createElemWithText(element = "p", text = "", className){
    const newElement = document.createElement(element);
    const newText = document.createTextNode(text);
    newElement.appendChild(newText);
    if(className) newElement.classList.add(className);
    return newElement;
}

function createSelectOptions(jsonData){
    if(!jsonData) return;
    const elementArray = [];
    jsonData.forEach(user => {
        const newElement = document.createElement("option");
        newElement.value = user.id;
        newElement.textContent = user.name;
        elementArray.push(newElement);
    } )
    return elementArray;
}

function toggleCommentSection(postId){
    if(!postId) return;
    const section = document.querySelector(`section[data-post-id = '${postId}']`);
    if(section) section.classList.toggle("hide");
    return section;
}

function toggleCommentButton(postId){
    if(!postId) return;
    const button = document.querySelector(`button[data-post-id = '${postId}']`);
    if(button) button.textContent = button.textContent ==
         'Show Comments' ? 'Hide Comments' : 'Show Comments';
    return button;
}

function deleteChildElements(parentElement){
    if(!parentElement?.tagName) return;
    let child = parentElement.lastElementChild;
    while(child){
        parentElement.removeChild(child);
        child = parentElement.lastElementChild;
    }
    return parentElement;
}

function addButtonListeners(){
    const postId = 1;
    const button = document.querySelectorAll(`button[data-post-id = '${postId}']`);
    if(button){
        button.forEach(button =>{
           const postId = button.dataset.postId;  
           button.addEventListener("click", function(e) {toggleComments(e, postId)},
            false);
        })
    }
    return button;
}

function removeButtonListeners(){
    const postId = 1;
    const button = document.querySelectorAll(`button[data-post-id = '${postId}']`);
    if(button){
        button.forEach(button =>{
           const postId = button.dataset.postId;  
           button.removeEventListener("click", function(e) {toggleComments(e, postId)},
           false);
        })
    }
    return button;
}

function createComments(jsonData){
    if(!jsonData) return;
    let fragment = document.createDocumentFragment();
    jsonData.forEach(comment =>{
        const newArticle = document.createElement("article");
        const h3Elem = createElemWithText('h3', comment.name);
        const parElem1 = createElemWithText('p', comment.body);
        const parElem2 = createElemWithText('p', `From: ${comment.email}`);
        newArticle.appendChild(h3Elem);
        newArticle.appendChild(parElem1);
        newArticle.appendChild(parElem2);
        fragment.append(newArticle);
    })
    return fragment;
}

function populateSelectMenu(jsonData){
    if(!jsonData) return;
    const menuElement = document.getElementById("selectMenu");
    const newArray = createSelectOptions(jsonData);
    newArray.forEach(option =>{
        menuElement.append(option);
    });
    return menuElement;
}

const getUsers = async() =>{
    try{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    return jsonUserData;
    }
    catch(e){
        console.error(e);
    }    
}

function getUserPosts(userId){
    
}

function getUser(userId){

}

function getPostComments(postId){

}

function displayComments(postId){

}

function createPosts(postsData){

}

function displayPosts(postsData){

}

function toggleComments(event, postId){

}

function refreshPosts(postsData){

}

function selectMenuChangeEventHandler(){

}

function initPage(){

}

function initApp(){

}