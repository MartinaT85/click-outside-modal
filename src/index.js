import "./styles.css";
const cardButtons = document.querySelectorAll(".card button");

function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest(".card");
  // img source
  const imgSrc = card.querySelector("img").src;
  const desc = card.dataset.description;
}

cardButtons.forEach((button) => {
  button.addEventListener("click", handleCardButtonClick);
});
