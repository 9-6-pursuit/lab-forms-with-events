const list = document.querySelector("form");

list.addEventListener("submit", (event) => {
  event.preventDefault();

  const unOrdered = document.querySelector("ul");
  const listText = document.getElementById("list").value;
  if (listText) {
    const newLi = document.createElement("li");
  }
});
