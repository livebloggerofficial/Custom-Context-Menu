const card = document.querySelector(".card");
const customContextMenu = document.querySelector(".custom-context-menu");

card.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  let topPosition = e.clientY;
  let leftPosition = e.clientX;
  customContextMenu.classList.add("active");

  customContextMenu.style.left = leftPosition + "px";
  customContextMenu.style.top = topPosition + "px";
});

window.addEventListener("click", () => {
  customContextMenu.classList.remove("active");
});
