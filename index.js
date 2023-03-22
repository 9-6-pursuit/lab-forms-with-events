const list = document.querySelector("form");
list.addEventListener("submit", (event) => {
event.preventDefault();

const unOrdered = document.querySelector("ul")
const listText = document.getElementById("list").value;
if (listText){
const newLi = document.createElement("li")
newLi.textContent =listText
unOrdered.append(newLi)
newLi.addEventListener("click", (event) => {
    event.preventDefault()
    newLi.style.textDecoration ="line-through"
})
} 

else{
    const paragraph = document.querySelector("p")
    paragraph.textContent = "Error: Todo cannot be empty"
}
})
