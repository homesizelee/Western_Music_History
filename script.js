let currentMode = null;
let currentQuestions = [];
let currentIndex = 0;
let currentQuestion = null;

function shuffleArray(array) {
  const copied = [...array];
  for (let i = copied.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copied[i], copied[j]] = [copied[j], copied[i]];
  }
  return copied;
}

function startQuiz(mode) {
  currentMode = mode;
  currentIndex = 0;

  if (mode === "truefalse") {
    currentQuestions = shuffleArray(trueFalseQuestions);
    document.getElementById("mode-label").textContent = "マルバツ問題";
  } else {
    currentQuestions = shuffleArray(multipleChoiceQuestions);
    document.getElementById("mode-label").textContent = "選択式問題";
  }

  document.getElementById("mode-select").classList.add("hidden");
  document.getElementById("quiz-area").classList.remove("hidden");

  showQuestion();
}

function showQuestion() {
  clearResult();

  if (currentIndex >= currentQuestions.length) {
    showFinishedMessage();
    return;
  }

  currentQuestion = currentQuestions[currentIndex];

  document.getElementById("progress").textContent =
    `${currentIndex + 1} / ${currentQuestions.length}`;

  document.getElementById("range-label").textContent =
    currentQuestion.range ? `出題範囲：${currentQuestion.range}` : "";

  document.getElementById("question-text").textContent = currentQuestion.question;

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  let choices = [];

  if (currentMode === "truefalse") {
    choices = ["○", "×"];
  } else {
    choices = shuffleArray(currentQuestion.choices);
  }

  choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.className = "choice-button";

    if (currentMode === "multiple") {
      const label = ["A", "B", "C", "D"][index];
      button.textContent = `${label}. ${choice}`;
      button.dataset.answerText = choice;
    } else {
      button.textContent = choice;
      button.dataset.answerText = choice;
    }

    button.onclick = () => checkAnswer(button.dataset.answerText, button);
    choicesDiv.appendChild(button);
  });
}

function checkAnswer(selected, selectedButton) {
  const buttons = document.querySelectorAll(".choice-button");
  buttons.forEach(button => button.disabled = true);

  const correctAnswer = currentQuestion.answer;

  if (selected === correctAnswer) {
    selectedButton.classList.add("correct");
    document.getElementById("result").textContent = "正解です。";
  } else {
    selectedButton.classList.add("wrong");
    document.getElementById("result").textContent = "不正解です。";

    buttons.forEach(button => {
      if (button.dataset.answerText === correctAnswer) {
        button.classList.add("correct");
      }
    });
  }

  document.getElementById("answer-note").textContent =
    `正解：${correctAnswer}`;

  document.getElementById("next-button").classList.remove("hidden");
}

function nextQuestion() {
  currentIndex++;
  showQuestion();
}

function showFinishedMessage() {
  document.getElementById("progress").textContent = "";
  document.getElementById("range-label").textContent = "";
  document.getElementById("question-text").textContent =
    "この形式の問題を一通り解き終えました。もう一度解く場合は、形式選択に戻ってください。";
  document.getElementById("choices").innerHTML = "";
  document.getElementById("result").textContent = "";
  document.getElementById("answer-note").textContent = "";
  document.getElementById("next-button").classList.add("hidden");
}

function clearResult() {
  document.getElementById("result").textContent = "";
  document.getElementById("answer-note").textContent = "";
  document.getElementById("next-button").classList.add("hidden");
}

function backToMenu() {
  currentMode = null;
  currentQuestions = [];
  currentIndex = 0;
  currentQuestion = null;

  document.getElementById("quiz-area").classList.add("hidden");
  document.getElementById("mode-select").classList.remove("hidden");
}
