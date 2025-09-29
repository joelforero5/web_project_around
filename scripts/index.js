import { renderCards, toggleLike } from "./cards.js";
import {
  editButton,
  popup,
  closeButtonProfile,
  profileName,
  profileOccupation,
  popupName,
  popupSecondary,
  form,
} from "./constants.js";
import {
  initializeFormEvents,
  openPopup,
  closePopup,
  handleProfileFormSubmit,
} from "./form.js";
import { enableValidation } from "./validate.js";
initializeFormEvents();

const postsContentElement = document.querySelector(".posts__content");
renderCards(postsContentElement);

closeButtonProfile.addEventListener("click", () => closePopup);

form.addEventListener("submit", handleProfileFormSubmit);
export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__error",
  errorClass: "popup__error_visible",
};
enableValidation(validationConfig);
