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
initializeFormEvents();

const postsContentElement = document.querySelector(".posts__content");
renderCards(postsContentElement);

editButton.addEventListener("click", () => openPopup("edit"));
closeButtonProfile.addEventListener("click", () => closePopup);

form.addEventListener("submit", handleProfileFormSubmit);
