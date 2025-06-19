const editButton = document.querySelector(".profile__button_edit");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__button-cancel");
const profileName = document.getElementById("profile__name");
const profileOccupation = document.getElementById("profile__occupation");
const popupName = document.getElementById("popup__name");
const popupOccupation = document.getElementById("popup__about");
const form = document.getElementById("popup__form");
editButton.addEventListener("click", () => {
  popupName.value = profileName.textContent.trim();
  popupOccupation.value = profileOccupation.textContent.trim();

  popup.classList.add("popup__opened");
});

closeButton.addEventListener("click", () => {
  popup.classList.remove("popup__opened");
});

form.addEventListener("submit", handleProfileFormSubmit);

function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = popupName.value.trim();
  profileOccupation.textContent = popupOccupation.value.trim();
  popup.classList.remove("popup__opened");
}
