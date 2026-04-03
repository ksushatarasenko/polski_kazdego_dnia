const editor = document.querySelector('.editor');
const page = document.getElementById('page');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');

// =====================
// ОТКРЫТИЕ МОДАЛКИ
// =====================
function openModal(zone) {
  const scale = page.clientWidth / page.naturalWidth;

  // пересчет координат в реальные
  const realTop = zone.top / scale;
  const realLeft = zone.left / scale;
  const realWidth = zone.width / scale;
  const realHeight = zone.height / scale;

  const img = new Image();
  img.src = page.src;

  img.onload = () => {
    const imgWidth = img.naturalWidth;

    modalBody.innerHTML = `
      <div style="
        width: ${realWidth}px;
        height: ${realHeight}px;
        overflow: hidden;
        background: white;
      ">
        <img src="${page.src}" style="
          position: relative;
          left: -${realLeft}px;
          top: -${realTop}px;
          width: ${imgWidth}px;
          display: block;
        ">
      </div>
    `;

    modal.classList.add('open');
  };
}

// =====================
// ЗАКРЫТИЕ
// =====================
function closeModal() {
  modal.classList.remove('open');
}

// клик по фону (НЕ по контенту)
modal.addEventListener('click', (e) => {
  if (!e.target.closest('.modal-content')) {
    closeModal();
  }
});

// ESC закрывает
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// =====================
// ЗОНЫ
// =====================
const zones = [
  { top: 78, left: 82, width: 634, height: 211 }
];

zones.forEach(z => {
  const div = document.createElement('div');
  div.className = 'zone';

  div.style.top = z.top + 'px';
  div.style.left = z.left + 'px';
  div.style.width = z.width + 'px';
  div.style.height = z.height + 'px';

  div.addEventListener('click', () => openModal(z));

  editor.appendChild(div);
});