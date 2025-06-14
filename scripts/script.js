const editButton = document.querySelector(".profile__button_edit");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__button-cancel");
editButton.addEventListener("click", () => {
  popup.classList.add("popup__opened");
});

closeButton.addEventListener("click", () => {
  popup.classList.remove("popup__opened");
});
