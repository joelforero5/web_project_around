import { addCard } from "./cards.js";
import {
  popup,
  closeButtonProfile,
  profileName,
  profileOccupation,
  popupName,
  popupSecondary,
  popupTitle,
  form,
  editButton,
  addCardButton,
  postsContentElement,
} from "./constants.js";
import { validationConfig } from "./index.js";
import { resetValidation } from "./validate.js";

export function initializeFormEvents() {
  editButton.addEventListener("click", () => openPopup("edit"));
  addCardButton.addEventListener("click", () => openPopup("add"));
  closeButtonProfile.addEventListener("click", closePopup);
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target === popup) {
      closePopup();
    }
  });
  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      const openedPopup = document.querySelector(".popup__opened");
      if (openedPopup) closePopup();
    }
  });
}

export function openPopup(mode) {
  popup.setAttribute("data-mode", mode);
  popup.classList.add("popup__opened");
  if (mode === "edit") {
    popupTitle.textContent = "Editar perfil";
    popupName.placeholder = "Nombre";
    popupSecondary.placeholder = "Acerca de mí";
    popupName.required = true;
    popupName.minLength = 2;
    popupName.maxLength = 40;
    popupName.value = profileName.textContent.trim();
    popupName.required = true;
    popupSecondary.minLength = 2;
    popupSecondary.maxLength = 200;
    popupSecondary.type = "text";
    popupSecondary.value = profileOccupation.textContent.trim();
  } else if (mode === "add") {
    popupTitle.textContent = "Nuevo lugar";
    popupName.placeholder = "Titulo";
    popupSecondary.placeholder = "Enlace a la Imagen";
    popupName.minLength = 2;
    popupName.maxLength = 30;
    popupName.value = "";
    popupSecondary.type = "url";
    popupSecondary.value = "";
  }
}

export function closePopup() {
  popup.classList.remove("popup__opened");
  const formElement = popup.querySelector(".popup__form");
  resetValidation(formElement, validationConfig);
}

export function handleProfileFormSubmit(event) {
  event.preventDefault();
  const mode = popup.getAttribute("data-mode");
  if (mode === "edit") {
    profileName.textContent = popupName.value.trim();
    profileOccupation.textContent = popupSecondary.value.trim();
  } else if (mode === "add") {
    const name = popupName.value.trim();
    const imageUrl = popupSecondary.value.trim();
    if (!imageUrl) {
      console.warn("URL de imagen vacía");
      return;
    } else if (!name || !imageUrl) {
      console.warn("Faltan campos para crear la tarjeta.");
      return;
    }
    const cardData = {
      name: name,
      link: imageUrl,
    };
    addCard(postsContentElement, cardData);
  }

  closePopup();
}
