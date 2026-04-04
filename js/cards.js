document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", function (e) {
    e.stopPropagation();

    document.querySelectorAll(".card").forEach((c) => {
      c.classList.remove("active");
    });

    card.classList.add("active");
    document.body.classList.add("modal-open");
  });
});

document.addEventListener("click", function () {
  document.querySelectorAll(".card").forEach((card) => {
    card.classList.remove("active");
  });
  document.body.classList.remove("modal-open");
});

// только для таблицы
const tooltip = document.getElementById("tooltip");
let tooltipLocked = false;

// клик по ячейке

document.querySelectorAll(".cell").forEach((cell) => {
  cell.addEventListener("click", function (e) {
    if (tooltipLocked) return; // 💥 блокировка

    e.stopPropagation();

    const text = cell.dataset.text;

    tooltip.innerHTML = `<span class="tooltip-close">&times;</span>${text}`;
    tooltip.style.pointerEvents = "block";

    setTimeout(() => {
      tooltip.style.display = "block";
      tooltip.style.pointerEvents = "auto";
    }, 100);

    tooltip.style.top = e.clientY + 10 + "px";
    tooltip.style.left = e.clientX + 10 + "px";
  });
});

// закрытие
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("tooltip-close")) {
    tooltipLocked = true; // 🚫 блокируем

    tooltip.style.display = "none";

    setTimeout(() => {
      tooltipLocked = false; // ✅ разблокируем
    }, 200);

    return;
  }

  if (!tooltip.contains(e.target)) {
    tooltip.style.display = "none";
  }
});
