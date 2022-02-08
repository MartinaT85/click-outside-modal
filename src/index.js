import "./styles.css";
const cardButtons = document.querySelectorAll(".card button");

function handleCardButtonClick() {
  console.log("you clicked it");
}

cardButtons.forEach((button) => {
  button.addEventListener("click", handleCardButtonClick);
});
