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

document.querySelectorAll(".option").forEach((option) => {
  option.addEventListener("click", function () {
    const question = this.parentElement;
    const options = question.querySelectorAll(".option");

    options.forEach((o) => o.classList.remove("selected"));

    this.classList.add("selected");
  });
});

function checkQuiz() {
  document.querySelectorAll(".question").forEach((question) => {
    const correct = question.dataset.correct;
    const options = question.querySelectorAll(".option");

    options.forEach((option) => {
      const letter = option.textContent.trim().charAt(0);

      if (letter === correct) {
        option.classList.add("correct");
      }

      if (option.classList.contains("selected") && letter !== correct) {
        option.classList.add("wrong");
      }
    });
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

function checkQuiz() {
  document.querySelectorAll(".question").forEach((question) => {
    let correct = question.dataset.answer;
    let selected = question.querySelector(".option.selected");

    question.querySelectorAll(".option").forEach((o) => {
      o.classList.remove("correct", "wrong");
    });

    if (!selected) return;

    if (selected.dataset.value === correct) {
      selected.classList.add("correct");
    } else {
      selected.classList.add("wrong");

      question.querySelectorAll(".option").forEach((o) => {
        if (o.dataset.value === correct) {
          o.classList.add("correct");
        }
      });
    }
  });
}

// Ułóż wydarzenia w kolejności - (перетаскивание событий)
const list = document.getElementById("events");

if (list) {
  let draggedItem = null;

  list.addEventListener("dragstart", (e) => {
    draggedItem = e.target;
    e.target.classList.add("dragging");
  });

  list.addEventListener("dragend", (e) => {
    e.target.classList.remove("dragging");
  });

  list.addEventListener("dragover", (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(list, e.clientY);
    const draggable = document.querySelector(".dragging");

    if (afterElement == null) {
      list.appendChild(draggable);
    } else {
      list.insertBefore(draggable, afterElement);
    }
  });
}


function getDragAfterElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll("li:not(.dragging)"),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;

      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY },
  ).element;
}

function checkOrder() {
  const items = document.querySelectorAll("#events li");
  let correctCount = 0;

  items.forEach((item, index) => {
    item.classList.remove("correct", "wrong");

    if (parseInt(item.dataset.order) === index + 1) {
      item.classList.add("correct");
      correctCount++;
    } else {
      item.classList.add("wrong");
    }
  });

  const result = document.getElementById("order-result");

  if (correctCount === items.length) {
    result.textContent = "Świetnie! Wszystko jest w dobrej kolejności.";
    result.style.color = "green";
  } else {
    result.textContent = "Sprawdź czerwone zdania i spróbuj poprawić.";
    result.style.color = "red";
  }
}

// // end Ułóż wydarzenia w kolejności - (перетаскивание событий)

// klik slowa
document.addEventListener("DOMContentLoaded", function () {
  const words = document.querySelectorAll("#verb-text span");

  words.forEach((word) => {
    word.addEventListener("click", function () {
      this.classList.toggle("selected");
    });
  });

  window.checkVerbs = function () {
    let correct = true;

    words.forEach((word) => {
      word.classList.remove("correct", "wrong");

      if (word.classList.contains("selected")) {
        if (word.dataset.verb === "true") {
          word.classList.add("correct");
        } else {
          word.classList.add("wrong");
          correct = false;
        }
      } else {
        if (word.dataset.verb === "true") {
          correct = false;
        }
      }
    });

    const result = document.getElementById("verb-result");

    if (correct) {
      result.textContent = "Świetnie! Wszystkie czasowniki są poprawne.";
      result.style.color = "green";
    } else {
      result.textContent = "Spróbuj ponownie.";
      result.style.color = "red";
    }
  };
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
document.querySelectorAll(".vocab-word").forEach(word=>{

word.addEventListener("click", function(){

const key=this.dataset.word

const data=document.getElementById("word-"+key)

const modal=document.getElementById("vocab-modal")

document.getElementById("modal-content").innerHTML=data.innerHTML

modal.style.display="flex"

})

})

document.querySelector(".modal-close").addEventListener("click", closeModal)

document.getElementById("vocab-modal").addEventListener("click", function(e){

if(e.target.id==="vocab-modal"){
closeModal()
}

})

function closeModal(){
document.getElementById("vocab-modal").style.display="none"
}

// mapa
document.querySelectorAll(".map-point").forEach(point=>{

point.addEventListener("click",function(){

const city=this.dataset.city

const data=document.getElementById("city-"+city)

const modal=document.getElementById("vocab-modal")

document.getElementById("modal-content").innerHTML=data.innerHTML

modal.style.display="flex"

})

})
// проверка ответа
function checkAnswers(setId){

const set=document.getElementById(setId)

const inputs=set.querySelectorAll("input")

inputs.forEach(input=>{

const correct=input.dataset.answer.trim()
const user=input.value.trim()

if(user===correct){

input.style.border="2px solid green"
input.style.background="#d4edda"

}else{

input.style.border="2px solid red"
input.style.background="#f8d7da"

}

})

}