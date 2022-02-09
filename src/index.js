import "./styles.css";
const cardButtons = document.querySelectorAll(".card button");
const modalInner = document.querySelector(".modal-inner");
const outerModal = document.querySelector(".modal-outer");

function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest(".card");
  // img source
  const imgSrc = card.querySelector("img").src;
  const desc = card.dataset.description;

  // populate modal with the info
  modalInner.innerHTML = `
  <img src='${imgSrc.replace("200", "600")}' alt='${desc}' />
  <p>${desc}</p>
  `;

  // show modal
  outerModal.classList.add("open");
}

cardButtons.forEach((button) => {
  button.addEventListener("click", handleCardButtonClick);
});

outerModal.addEventListener("click", function (e) {
  const isOutside = !e.target.closest(".modal-inner");
  if (isOutside) {
    outerModal.classList.remove("open");
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    outerModal.classList.remove("open");
  }
});
