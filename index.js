console.log("Code your solution!")
// seledted the form
const list = document.querySelector("#todo")
list.addEventListener("submit", (event) => {
    event.preventDefault()
    let val = event.target.list.value
    // created text for p tag
    let paragraph = document.querySelector("p")
    paragraph.textContent = "Error"
    // if the user did not input any entry then the p tag error will be triggered
    if (!!val) {
        let unordered = document.querySelector("ul")
        let lineItem = document.createElement("li")
        lineItem.textContent = event.target.list.value
        lineItem.className = "cross"
        unordered.append(lineItem)
        paragraph.style.display = "none"
        event.target.list.value = ""
        // if there is an input then the error text becomes invivible and there will be an list item
    } else {
        paragraph.style.display = "initial"
    }
    // crated html collection of all list items
let listItems = document.querySelectorAll(".cross")
// If the list item is clicked on then the item will be crossed out
listItems.forEach(listItem => listItem.addEventListener("click", (event) => {
    listItem.style.textDecoration = "line-through"
    console.log(listItem)
})
    )
})

