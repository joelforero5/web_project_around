import { addCard } from "./cards.js";
import {
  popup,
  closeButton,
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

export function initializeFormEvents() {
  editButton.addEventListener("click", () => openPopup("edit"));
  addCardButton.addEventListener("click", () => openPopup("add"));
  closeButton.addEventListener("click", closePopup);
}

export function openPopup(mode) {
  popup.setAttribute("data-mode", mode);
  popup.classList.add("popup__opened");
  if (mode === "edit") {
    currentMod = popupTitle.textContent = "Editar perfil";
    popupName.placeholder = "Nombre";
    popupSecondary.placeholder = "Acerca de mí";
    popupName.value = profileName.textContent.trim();
    popupSecondary.value = profileOccupation.textContent.trim();
  } else if (mode === "add") {
    popupTitle.textContent = "Nuevo lugar";
    popupName.placeholder = "Titulo";
    popupSecondary.placeholder = "Enlace a la Imagen";
    popupName.value = "";
    popupSecondary.value = "";
  }
}

export function closePopup() {
  popup.classList.remove("popup__opened");
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
