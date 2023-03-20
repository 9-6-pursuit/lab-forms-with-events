let form = document.getElementById('main-form');

let unorderedList = document.body.querySelector('ul');

let clearButton = document.getElementById('clear-button');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let inputfield = form.querySelector('input');

    let newListItem = document.createElement('li');

    let deleteButton = document.createElement('button');

    deleteButton.innerHTML = 'Delete';

    deleteButton.onclick = () => {
        newListItem.remove();

        refreshClearButton();
        
        refreshUnorderedList();
    }

    newListItem.innerHTML = inputfield.value;
    
    newListItem.addEventListener("click", (event) => {
        event.target.style.textDecoration = event.target.style.textDecoration === "line-through" ? "" : "line-through";
    });

    if(inputfield.value)
        unorderedList.append(newListItem);

    newListItem.append(deleteButton);

    inputfield.value = null;

    refreshClearButton();
    refreshUnorderedList();
});

function refreshClearButton(){
    if(unorderedList.querySelectorAll('li').length < 1){
        clearButton.style.display = "none";
    } else {
        clearButton.style.display = "";
    }
}

function refreshUnorderedList(){
    if(unorderedList.querySelectorAll('li').length < 1){
        unorderedList.style.display = "none";
    } else {
        unorderedList.style.display = "";
    }
}

clearButton.onclick = () => {
    unorderedList.querySelectorAll('li').forEach(listElement => {
        listElement.remove();
    });
}

refreshClearButton();
refreshUnorderedList();