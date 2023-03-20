const list = document.querySelector("form");
const unordered = document.querySelector("ul");
const listT = document.querySelector('input');
const deleteButton = document.querySelectorAll("button")[1]

list.addEventListener("submit", (event) => {
    event.preventDefault();

if (listT){
    const newList = document.createElement("li")
    newList.textContent = listT.value
    unordered.append(newList)

    deleteButton.addEventListener("click", () => {
        newList.remove()
    })

}

unordered.addEventListener("click", (event) => {
        event.target.style.textDecoration = 'line-through solid'
})
})
