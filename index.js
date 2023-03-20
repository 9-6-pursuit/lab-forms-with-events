let form = document.getElementById('main-form');

let unorderedList = document.body.querySelector('ul');

let clearButton = document.getElementById('clear-button');

let paragraph = document.body.querySelector('p');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let inputfield = form.querySelector('input');

    let newListItem = document.createElement('li');

    let deleteButton = document.createElement('button');

    deleteButton.innerHTML = 'Delete';

    deleteButton.onclick = () => {
        newListItem.remove();

        refreshElements([clearButton, unorderedList]);
    }

    newListItem.innerHTML = inputfield.value;
    
    newListItem.addEventListener("click", (event) => {
        event.target.style.textDecoration = event.target.style.textDecoration === "line-through" ? "" : "line-through";
    });

    if(inputfield.value) {
      unorderedList.append(newListItem);
      paragraph.style.display = 'none';
    }
    else {
      paragraph.style.display = '';
      paragraph.innerHTML = 'Error. Todo cannot be empty';
    }

    newListItem.append(deleteButton);

    inputfield.value = null;

    refreshElements([clearButton, unorderedList]);
});

form.onmouseleave = () => {
  paragraph.style.display = 'none';
}

function refreshElements(elements){
    for(const element of elements){
        if(unorderedList.querySelectorAll('li').length < 1){
            element.style.display = "none";
        } else {
            element.style.display = "";
        }
    }
}

clearButton.onclick = () => {
    unorderedList.querySelectorAll('li').forEach(listElement => {
        listElement.remove();
    });
}

refreshElements([clearButton, unorderedList]);