const list = document.querySelector("form");
let warningLine = document.getElementById("warning");
let warned = false;

list.addEventListener("submit", (event) => {
  event.preventDefault();
  if (warned) {
    warningLine.innerText = "";
    warned = false;
  }
  const unOrdered = document.querySelector("ul"); // the unordered list where the todo items go
  let toDoForm = document.getElementById("todo"); // var for form element by id
  let listText = document.getElementById("list").value; // what the user inputs
  if (listText) {
    const newLine = document.createElement("li"); // the new list element with the new todo item
    newLine.textContent = listText;
    unOrdered.append(newLine);
  } else {
    warningLine.innerText = "Enter some text. This field cannot be left blank.";
    warned = true;
  }
  toDoForm.reset(); // resets the form on submission
});
