import {
  imagePopup,
  fullImage,
  caption,
  closeButtonImage,
} from "./constants.js";
export const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];
export function createCard({ name, link }) {
  const template = document
    .querySelector("#posts__card-template")
    .content.querySelector(".posts__card")
    .cloneNode(true);

  template.querySelector(".posts__card-image").src = link;
  template.querySelector(".posts__card-title").textContent = name;
  const likedButton = template.querySelector(".posts__card-like-button");
  const deleteButton = template.querySelector(".posts__card-delete-button");
  const image = template.querySelector(".posts__card-image");
  likedButton.addEventListener("click", toggleLike);
  deleteButton.addEventListener("click", function (event) {
    deleteCard(event, template);
  });
  image.addEventListener("click", () => {
    console.log("Imagen clickeada: abriendo popup");
    openImage(name, link);
  });
  return template;
}
export function renderCards(container) {
  initialCards.forEach((cardData) => {
    const card = createCard(cardData);
    container.append(card);
  });
}
export function addCard(container, cardData) {
  const card = createCard(cardData);
  container.prepend(card);
}
export function toggleLike(event) {
  const likeIcon = event.currentTarget.querySelector(".posts__card-like-icon");
  const isActive = likeIcon.classList.toggle("posts__card-like-icon--active");

  likeIcon.src = isActive
    ? "./images/posts__card-icon-like--active.png"
    : "./images/posts__card-icon-like.svg";
}
export function deleteCard(event, template) {
  const card = event.currentTarget.closest(".posts__card");
  card.remove();
}
export function openImage(name, link) {
  fullImage.src = link;
  fullImage.alt = name;
  caption.textContent = name;
  imagePopup.classList.add("popup__opened");
  console.log("Popup de imagen abierto");
}
closeButtonImage.addEventListener("click", () => {
  imagePopup.classList.remove("popup__opened");
});
