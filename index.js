let form = document.querySelector("#to-do-list-box")
//set to a variable to simplify code. 
//check back with querySelectorAll & "form"

// console.log(form)

form.addEventListener("submit",(event) => {
    event.preventDefault()

    let targetList = event.target.list.value
    let liElement = document.createElement("li")
    let errorMessage = document.querySelector("p")
    let unorderedList = document.querySelector("#to-do-list")
    
    if(!targetList) {
        
        errorMessage.textContent = "Error. To do list cannot be empty."
        unorderedList.prepend(errorMessage)
    }
    else {
        
        liElement.textContent = targetList
        // console.log(!targetList)
        // console.log(liElement)
        
        unorderedList.append(liElement) 
        errorMessage.textContent = ""
        
    }
    liElement.addEventListener("click", () => {
        liElement.style.textDecoration = "line-through"
    })
});


  