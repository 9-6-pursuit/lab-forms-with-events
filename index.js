const list = document.querySelector("#todo")
list.addEventListener("submit", (event) => {
    event.preventDefault()
    let val = event.target.list.value
    let paragraph = document.querySelector("p")
    paragraph.textContent = "Error"
    if (!!val) {
        let unordered = document.querySelector("ul")
        let lineItem = document.createElement("li")
        lineItem.textContent = event.target.list.value
        lineItem.className = "cross"
        unordered.append(lineItem)
        event.target.list.value = ""
    } else {
        paragraph.style.display = "initial"
    }
let listItems = document.querySelectorAll(".cross")

listItems.forEach(listItem => listItem.addEventListener("click", (event) => {
    listItem.style.textDecoration = "line-through"
    console.log(listItem)
})
    )
})