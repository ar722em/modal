const openBtn = document.querySelector(".btn");
const closeBtn = document.querySelector(".close-btn");
const modelOverlay = document.querySelector(".modal-overlay");

openBtn.addEventListener("click", () => {
  modelOverlay.classList.toggle("open-modal");
});

closeBtn.addEventListener("click", () => {
  modelOverlay.classList.toggle("open-modal");
});
