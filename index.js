//console.log("Code your solution!")

//This function creates an li, adds a textNode to li, and returns li
function contactTemplate(item) {
    const li = document.createElement("li");
    li.textContent += item;
    return li;
};
//This function assigns above function to the li. It, selects the ul and appends li as last child of ul(PUTS LI INSIDE OF UL)
function generateContact(item) {
    const li = contactTemplate(item);
    const ul = document.querySelector("ul");
    ul.append(li);
};
//Selects body element
const body = document.querySelector('body');
//Creates a form tag and set an attributes
const form = document.createElement('form');
form.setAttribute('id', 'form-content')
//Creates h1 tag and adds a textNode to h1 tag, then appends h1 to the body(PUTS H1 INSIDE BODY) 
const h1 = document.createElement('h1');
h1.textContent = "My To-Dos";
body.append(h1);

//Creates an input tag and sets attributes for tag, then appends input tag to the form
const input = document.createElement('input');
//setting key/pair values as attributes to input tag (name)key, (userInput)value
input.setAttribute('name', 'userInput')
input.setAttribute('id', 'name')
input.setAttribute('type', 'text')
form.append(input);

//Creates a Button tag, set attributes and give it a textNode
const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit')
submitButton.textContent = 'submit'
//Appends button to form 
form.append(submitButton);
//Appends whole form to body
body.append(form);

//Creates a p tag and appends it to body 
const paragraph = document.createElement('p');
body.append(paragraph);

//Creates an ul tag
const unOrderedList = document.createElement('ul');
//Appends ul as a sibling of the form tag
form.after(unOrderedList);

//Selects the form tag by its id
const formQuery = document.querySelector("#form-content");
//We are adding an EventListener on the form tag w/2 arguments, the type(submit) and a callback(event).
formQuery.addEventListener("submit", (event) => {
    //With an expected return to stop the default behavior of pressing submit button
    event.preventDefault();
    //Creates variable to store the value of userInput
    const item = event.target.userInput.value;
    //If input box is empty when button pressed, a message will appear inside p tag
    if(!item) {
    paragraph.textContent = "Please enter an item"; 
    } else { 
        //Call above function that selects ul and appends li as a child of unordered list
        generateContact(item);
        //Resets the input field of above function
        event.target.reset()
    }
});
    //Appends ul tag to form tag
form.append(unOrderedList);
    
    //Selects unordered list to add an EventListener w/2 arguments
document.querySelector("ul").addEventListener("click", (event) => {
    //Expected to stop the default behavior of clicking on ul
    event.preventDefault();
    //When target ul is clicked a text-decoration will be applied to that ul
    event.target.style["text-decoration"] = "line-through";
});
// //make a button
// const delBut = document.createElement("button");
// //set name on button
// delBut.textContent = "Delete";
// //put button at the end of the li element
// form.append(delBut);
// //tell button what to do when clicked
// delBut.addEventListener("click", (event) => {
//     event.preventDefault();
//     //remove the whole list item
//     li.remove();
// })

/*const input = document.querySelector('input')
const button = document.querySelector('button')
const form = document.querySelector('form')

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const myList = document.createElement("li")
    myList.textContent = input.value
    document.querySelector("ul").append(myList);

    const toDo = document.querySelectorAll("ul li")

    toDo.forEach((li) => {
        myList.addEventListener("click", () => {
        myList.style.textDecoration = "line-through solid";
    })
})
form.reset();
})*/




























//console.log("Code your solution!")