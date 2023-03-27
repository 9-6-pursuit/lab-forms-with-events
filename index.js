// const list = document.querySelector("form")
// list.addEventListener("submit", (event) => {
//     event.preventDefault()

// const unOrdered = document.querySelector("ul")
// const listText = document.getElementById("list").ariaValueMax;
// if (listText) {
//     const newLi = document.createElement("li")
//     newLi.textContent = listText
//     unOrdered.append(newLi)
// }
// })





// const form = document.querySelector("form");
// const input = document.querySelector("input[type='text']");
// const error = document.querySelector("p");
// const ul = document.querySelector("ul");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const inputValue = input.value.trim();
  
//   if (inputValue !== "") {
//     const li = document.createElement("li");
//     li.textContent = inputValue;
//     ul.appendChild(li);
//     input.value = "";
//     error.textContent = "";
//   } else {
//     error.textContent = "Error: Empty Field";
//   }
// });

// ul.addEventListener("click", (event) => {
//   if (event.target.tagName === "LI") {
//     event.target.style.textDecoration = "line-through"
//   }
// });

const form = document.querySelector("form");
const ul = document.querySelector("ul");
const errorMsg = document.querySelector("p");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("input[name='todo']");
  const inputValue = input.value.trim();

  if (inputValue) {
    const li = document.createElement("li");
    li.textContent = inputValue;
    ul.append(li);
    input.value = "";
    errorMsg.textContent = "";
  } else {
    errorMsg.textContent = "Error. Todo cannot be empty.";
  }
});

ul.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.style.textDecoration = "line-through";
  }
});

