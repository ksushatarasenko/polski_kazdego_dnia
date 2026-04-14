function showAnswer() {
  document.getElementById("answer").style.display = "block";
}

function quiz1() {
  document.getElementById("quizResult1").innerHTML = "❌ To jest litera";
}

function quiz2() {
  document.getElementById("quizResult1").innerHTML =
    "✅ Dobrze! To jest głoska";
}

function quiz3() {
  document.getElementById("quizResult1").innerHTML = "❌ To nie jest głoska";
}

function checkAnswer(word) {
  if (word === "igliwie") {
    document.getElementById("quizResult2").innerHTML =
      "✅ Dobrze! Igliwie to хвоя";
  } else {
    document.getElementById("quizResult2").innerHTML = "❌ Spróbuj jeszcze raz";
  }
}

// Pytania
function toggleAnswer(id) {
  const answer = document.getElementById(id);

  if (answer.style.display === "block") {
    answer.style.display = "none";
  } else {
    answer.style.display = "block";
  }
}

// Вопрос с вариантами ответов

// выбор варианта
document.querySelectorAll(".option").forEach((option) => {
  option.addEventListener("click", function () {
    const question = this.closest(".question");

    // убираем выделение у других вариантов
    question.querySelectorAll(".option").forEach((o) => {
      o.classList.remove("selected");
    });

    // выделяем выбранный
    this.classList.add("selected");
  });
});

// проверка теста
function checkQuiz() {
  document.querySelectorAll(".question").forEach((question) => {
    const correct = question.dataset.answer;
    const selected = question.querySelector(".option.selected");

    // сброс цветов
    question.querySelectorAll(".option").forEach((o) => {
      o.classList.remove("correct", "wrong");
    });

    if (!selected) return;

    if (selected.dataset.value === correct) {
      selected.classList.add("correct");
    } else {
      selected.classList.add("wrong");

      // подсветка правильного ответа
      question.querySelectorAll(".option").forEach((o) => {
        if (o.dataset.value === correct) {
          o.classList.add("correct");
        }
      });
    }
  });
}

// Kto to powiedział?

document.querySelectorAll(".option").forEach((option) => {
  option.addEventListener("click", function () {
    let question = this.closest(".question");

    question.querySelectorAll(".option").forEach((o) => {
      o.classList.remove("selected");
    });

    this.classList.add("selected");
  });
});

// интерактив с вводом.

function checkGrammar() {
  let correct = true;

  document.querySelectorAll("input[data-answer]").forEach((input) => {
    if (input.value.trim().toLowerCase() === input.dataset.answer) {
      input.style.background = "#b8f5b8";
    } else {
      input.style.background = "#ffb8b8";
      correct = false;
    }
  });

  const result = document.getElementById("grammar-result");

  if (correct) {
    result.textContent = "Świetnie!";
  } else {
    result.textContent = "Spróbuj jeszcze raz.";
  }
}

function closeWord() {
  document.getElementById("word-info").style.display = "none";
}
// модалОкно
document.querySelectorAll(".vocab-word").forEach((word) => {
  word.addEventListener("click", function () {
    const key = this.dataset.word;

    const data = document.getElementById("word-" + key);

    const modal = document.getElementById("vocab-modal");

    document.getElementById("modal-content").innerHTML = data.innerHTML;

    modal.style.display = "flex";
  });
});

document.querySelector(".modal-close").addEventListener("click", closeModal);

document.getElementById("vocab-modal").addEventListener("click", function (e) {
  if (e.target.id === "vocab-modal") {
    closeModal();
  }
});

function closeModal() {
  document.getElementById("vocab-modal").style.display = "none";
}

// mapa
document.querySelectorAll(".map-point").forEach((point) => {
  point.addEventListener("click", function () {
    const city = this.dataset.city;

    const data = document.getElementById("city-" + city);

    const modal = document.getElementById("vocab-modal");

    document.getElementById("modal-content").innerHTML = data.innerHTML;

    modal.style.display = "flex";
  });
});
// проверка ответа
function checkAnswers(setId) {
  const set = document.getElementById(setId);

  const inputs = set.querySelectorAll("input");

  inputs.forEach((input) => {
    const correct = input.dataset.answer.trim();
    const user = input.value.trim();

    if (user === correct) {
      input.style.border = "2px solid green";
      input.style.background = "#d4edda";
    } else {
      input.style.border = "2px solid red";
      input.style.background = "#f8d7da";
    }
  });
}

// печатался только выбранный блок
function printTask(id) {
  const el = document.getElementById(id);
  el.classList.add("printable");

  window.print();

  el.classList.remove("printable");
}

// end печатался только выбранный блок
