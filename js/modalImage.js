const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");

document.addEventListener("click", function (e) {
  const trigger = e.target.closest(".open-modal");

  // если клик по элементу, который открывает модалку
  if (trigger) {
    e.stopPropagation(); // чтобы сразу не закрылось
    modalImage.src = trigger.dataset.img;
    modal.style.display = "flex";
    return;
  }

  // если модалка открыта — закрываем при ЛЮБОМ клике
  if (modal.style.display === "flex") {
    modal.style.display = "none";
    modalImage.src = "";
  }
});