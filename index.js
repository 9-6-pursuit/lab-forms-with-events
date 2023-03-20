let list = document.querySelector("#list");
let unOndered = document.querySelector("#task-list");
let textInput = document.querySelector("#text");
let error = document.querySelector("p");

list.addEventListener("submit", function(event) {
  event.preventDefault();

  let task = textInput.value;
  if (!task) {
    error.textContent = "Error. Todo cannot be empty";
    return;
  }

  let newLi = document.createElement("li");
  newLi.textContent = task;
  unOndered.append(newLi);

  textInput.value = "";
  error.textContent = "";
});

unOndered.addEventListener("click", function(event) {
  let clickedListItem = event.target;
  if (clickedListItem.tagName === "LI") {
    if (clickedListItem.style.textDecoration === "line-through") {
      clickedListItem.style.textDecoration = "none";
    } else {
      clickedListItem.style.textDecoration = "line-through";
    }
  }
});







