console.log("Code your solution!")
let header = document.querySelector("h1")
header.textContent = "My To-Do's List"
// change the header text
const form = document.querySelector("form")
// set a variable to to connect to the form 
form.addEventListener("submit", (event) => {
    event.preventDefault();

 // event listener prevents the page from refreshing   
let unOrdered = document.querySelector("ul")
let list = document.createElement("li")
// creates list 
let listText = event.target.list.value
// will show the list value 
// const listText = document.getElementById("list").value


if(!listText){
    let errorMessage = document.createElement("p")
    errorMessage.textContent = "Error please log To-Do"
       form.append(errorMessage)
}
else {
list.textContent = listText
console.log(listText)
unOrdered.append(list)

let removedMessages = document.querySelectorAll("p")
removedMessages.forEach(message => message.remove())

}
 list.addEventListener("click", () => {
   list.style.textDecoration = "line-through"
 })

})



// const errMessage = "Enter a ToDo"


// pList creates unordered list 
// listTexr will show the list value 


// if(!listText){
//   const newList = document.createElement("p")
//   newList.textContent = listText
//   pList.append(newList)
// }


// let toDo = document.querySelectorAll("ul","li")
// toDo.forEach(li => {
//     li.addEventListener("click", (li) => {

//     })

// })

