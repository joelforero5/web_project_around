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
