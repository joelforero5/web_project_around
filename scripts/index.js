const editButton = document.querySelector(".profile__button_edit");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__button-cancel");
const profileName = document.getElementById("profile__name");
const profileOccupation = document.getElementById("profile__occupation");
const popupName = document.getElementById("popup__name");
const popupOccupation = document.getElementById("popup__about");
const form = document.getElementById("popup__form");

const initialCards = [
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
initialCards.forEach((item) => {
  loadImages(item.link, item.name);
});
function loadImages(imgValue, titleValue) {
  const postsContentElement = document.querySelector(".posts__content");
  const postsCardTemplate = document.querySelector(
    "#posts__card-template"
  ).content;
  const postsCardElement = postsCardTemplate
    .querySelector(".posts__card")
    .cloneNode(true);

  postsCardElement.querySelector(".posts__card-image").src = imgValue;
  postsCardElement.querySelector(".posts__card-title").textContent = titleValue;
  postsContentElement.append(postsCardElement);
}

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
