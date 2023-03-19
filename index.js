const list = document.querySelector("form");

list.addEventListener("submit", (event) => {
  event.preventDefault();

  const unOrdered = document.querySelector("ul");
  let listText = document.getElementById("list").value;
  if (listText) {
    const newLi = document.createElement("li");
    newLi.textContent = listText;
    unOrdered.append(newLi);
  }
  listText = "";
});
