const openBtn = document.querySelector(".open-btn");

const closeBtn = document.querySelector(".close-btn");

const modal = document.querySelector(".modal-overlay");

openBtn.addEventListener("click", function () {
  modal.classList.add("show-modal");
});

closeBtn.addEventListener("click", function () {
  modal.classList.remove("show-modal");
});

window.addEventListener("click", function (e) {
  if (e.target == modal) {
    modal.classList.remove("show-modal");
  }
});
