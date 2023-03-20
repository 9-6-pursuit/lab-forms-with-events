const list = document.querySelector("form");
list.addEventListener("submit", (event)=>{
    event.preventDefault();

    const unOrdered = document.querySelector("ul")
    const listText = document.getElementById("list").value
    console.log(listText)
    if(listText){
        const newLi = document.createElement("li")
        newLi.textContent = listText
        unOrdered.append(newLi)
    } else {
        const err = document.querySelector("p")
        err.textContent = "Error! to-do cannot be empty"
        p.append(err)
    }
})


unOrdered.addEventListener("click",(event2)=>{
        event2.target.style.textDecoration = 'line-through';
    }
)
