const list = document.querySelector("form")
list.addEventListener("submit", (event) => {
    event.preventDefault();


const unOrdered = document.querySelector("ul")
const listText = document.getElementById("list").value;
if (listText) {
    const newLi = document.createElement("li")
    newLi.textContent = listText
    unOrdered.append(newLi)
    newLi.addEventListener("click", (event) => {
        newLi.style.textDecoration = "line-through"
    })
} else document.querySelector("p").textContent = "Error! To-Do Cannot Be Empty"
})
