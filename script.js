let currentMode = null;
let currentSessionKey = "all";
let currentScopeLabel = "全範囲";
let currentQuestions = [];
let currentIndex = 0;
let currentQuestion = null;
let correctCount = 0;
let hasAnswered = false;

const elements = {
  modeSelect: document.getElementById("mode-select"),
  rangeSelect: document.getElementById("range-select"),
  rangeBackButton: document.getElementById("range-back-button"),
  rangeModeDescription: document.getElementById("range-mode-description"),
  allRangeButton: document.getElementById("all-range-button"),
  allRangeCount: document.getElementById("all-range-count"),
  rangeButtons: document.getElementById("range-buttons"),
  quizArea: document.getElementById("quiz-area"),
  progress: document.getElementById("progress"),
  progressTrack: document.getElementById("progress-track"),
  progressBar: document.getElementById("progress-bar"),
  rangeLabel: document.getElementById("range-label"),
  scopeLabel: document.getElementById("scope-label"),
  modeLabel: document.getElementById("mode-label"),
  questionBlock: document.getElementById("question-block"),
  questionNumber: document.getElementById("question-number"),
  questionText: document.getElementById("question-text"),
  choices: document.getElementById("choices"),
  feedback: document.getElementById("feedback"),
  result: document.getElementById("result"),
  answerNote: document.getElementById("answer-note"),
  quizActions: document.getElementById("quiz-actions"),
  nextButton: document.getElementById("next-button"),
  backButton: document.getElementById("back-button"),
  statusButton: document.getElementById("status-button"),
  statusDialog: document.getElementById("status-dialog"),
  statusCloseIcon: document.getElementById("status-close-icon"),
  statusCloseButton: document.getElementById("status-close-button"),
  statusRing: document.getElementById("status-ring"),
  statusPercentage: document.getElementById("status-percentage"),
  statusMessage: document.getElementById("status-message"),
  statusAnswered: document.getElementById("status-answered"),
  statusCorrect: document.getElementById("status-correct"),
  statusWrong: document.getElementById("status-wrong"),
  statusRemaining: document.getElementById("status-remaining")
};

function shuffleArray(array) {
  const copied = [...array];
  for (let i = copied.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copied[i], copied[j]] = [copied[j], copied[i]];
  }
  return copied;
}

function normalizeRange(range) {
  return String(range || "").replace(/\s+/g, " ").trim();
}

function getSessionNumber(range) {
  const normalized = normalizeRange(range);
  const match = normalized.match(/第\s*(\d+)\s*回/);

  if (match) return Number(match[1]);

  // 最新題庫の選択式・第13回は、回数の接頭辞が省略されているため補完する。
  if (
    /^バロック期の音楽[（(]2[）)]/.test(normalized) ||
    normalized.includes("17世紀音楽の新しい語法と声楽ジャンル")
  ) {
    return 13;
  }

  return null;
}

function getModeQuestions(mode) {
  return mode === "truefalse" ? trueFalseQuestions : multipleChoiceQuestions;
}

function getModeLabel(mode) {
  return mode === "truefalse" ? "マルバツ問題" : "選択式問題";
}

function getSessionTitle(sessionNumber, questions) {
  const question = questions.find(item => getSessionNumber(item.range) === sessionNumber);
  if (!question) return `第${sessionNumber}回`;

  const normalized = normalizeRange(question.range);
  const withoutNumber = normalized.replace(
    new RegExp(`^第\\s*${sessionNumber}\\s*回\\s*[:：]?\\s*`),
    ""
  );
  return withoutNumber || `第${sessionNumber}回`;
}

function formatQuestionRange(range) {
  const normalized = normalizeRange(range);
  const sessionNumber = getSessionNumber(normalized);

  if (sessionNumber === 13 && !/^第\s*13\s*回/.test(normalized)) {
    return `第13回 ${normalized}`;
  }

  return normalized;
}

function getSessionGroups(mode) {
  const questions = getModeQuestions(mode);
  const groups = new Map();

  questions.forEach(question => {
    const sessionNumber = getSessionNumber(question.range);
    if (sessionNumber === null) return;

    if (!groups.has(sessionNumber)) {
      groups.set(sessionNumber, []);
    }
    groups.get(sessionNumber).push(question);
  });

  return [...groups.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([sessionNumber, items]) => ({
      sessionNumber,
      questions: items,
      title: getSessionTitle(sessionNumber, items),
      label: `第${sessionNumber}回 ${getSessionTitle(sessionNumber, items)}`
    }));
}

function setQuestionCounts() {
  document.getElementById("truefalse-count").textContent =
    `${trueFalseQuestions.length} 問`;
  document.getElementById("multiple-count").textContent =
    `${multipleChoiceQuestions.length} 問`;
}

function renderRangeOptions(mode) {
  const questions = getModeQuestions(mode);
  const groups = getSessionGroups(mode);

  elements.rangeModeDescription.textContent =
    `${getModeLabel(mode)}を選択中です。復習したい授業回を選んでください。`;
  elements.allRangeCount.textContent = `${questions.length} 問`;
  elements.rangeButtons.innerHTML = "";

  groups.forEach(group => {
    const button = document.createElement("button");
    button.className = "range-button";
    button.type = "button";
    button.dataset.session = String(group.sessionNumber);
    button.setAttribute(
      "aria-label",
      `第${group.sessionNumber}回 ${group.title}、${group.questions.length}問`
    );
    button.innerHTML = `
      <span class="range-number"></span>
      <span class="range-title"></span>
      <span class="range-count"></span>
    `;
    button.querySelector(".range-number").textContent = `第${group.sessionNumber}回`;
    button.querySelector(".range-title").textContent = group.title;
    button.querySelector(".range-count").textContent = `${group.questions.length} 問`;
    button.addEventListener("click", () => startQuiz(String(group.sessionNumber)));
    elements.rangeButtons.appendChild(button);
  });
}

function openRangeSelect(mode) {
  currentMode = mode;
  currentSessionKey = "all";
  currentScopeLabel = "全範囲";
  renderRangeOptions(mode);

  elements.modeSelect.classList.add("hidden");
  elements.quizArea.classList.add("hidden");
  elements.rangeSelect.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
  requestAnimationFrame(() => elements.allRangeButton.focus({ preventScroll: true }));
}

function startQuiz(sessionKey = "all") {
  const sourceQuestions = getModeQuestions(currentMode);
  const sessionGroups = getSessionGroups(currentMode);
  const selectedGroup = sessionGroups.find(
    group => String(group.sessionNumber) === String(sessionKey)
  );

  currentSessionKey = sessionKey;
  currentScopeLabel = selectedGroup ? selectedGroup.label : "全範囲";
  currentQuestions = shuffleArray(
    selectedGroup ? selectedGroup.questions : sourceQuestions
  );
  currentIndex = 0;
  correctCount = 0;
  currentQuestion = null;
  hasAnswered = false;

  elements.modeLabel.textContent = getModeLabel(currentMode);
  elements.scopeLabel.textContent = selectedGroup
    ? `第${selectedGroup.sessionNumber}回`
    : "全範囲";
  elements.modeSelect.classList.add("hidden");
  elements.rangeSelect.classList.add("hidden");
  elements.quizArea.classList.remove("hidden");
  elements.statusButton.classList.remove("hidden");
  restoreQuizLayout();
  showQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateProgress() {
  const current = currentIndex + 1;
  const total = currentQuestions.length;
  const percent = total ? Math.round((current / total) * 100) : 0;

  elements.progress.innerHTML = `<strong>${current}</strong> / ${total}`;
  elements.progressBar.style.width = `${percent}%`;
  elements.progressTrack.setAttribute("aria-valuenow", String(percent));
  elements.progressTrack.setAttribute(
    "aria-valuetext",
    `${total}問中${current}問目`
  );
}

function showQuestion() {
  clearResult();

  if (currentIndex >= currentQuestions.length) {
    showFinishedMessage();
    return;
  }

  currentQuestion = currentQuestions[currentIndex];
  hasAnswered = false;
  updateProgress();

  const formattedRange = formatQuestionRange(currentQuestion.range);
  elements.rangeLabel.textContent = formattedRange
    ? `出題範囲：${formattedRange}`
    : "";
  elements.questionNumber.textContent =
    `QUESTION ${String(currentIndex + 1).padStart(2, "0")}`;
  elements.questionText.textContent = currentQuestion.question;
  elements.choices.innerHTML = "";

  const choices = currentMode === "truefalse"
    ? ["○", "×"]
    : shuffleArray(currentQuestion.choices);

  choices.forEach((choice, index) => {
    const button = document.createElement("button");
    const label = currentMode === "multiple"
      ? ["A", "B", "C", "D"][index]
      : ["○", "×"][index];

    button.className = "choice-button";
    button.type = "button";
    button.dataset.answerText = choice;
    button.innerHTML = `
      <span class="choice-key" aria-hidden="true">${label}</span>
      <span class="choice-text"></span>
    `;
    button.querySelector(".choice-text").textContent = choice;
    button.setAttribute("aria-label", `${label}、${choice}`);
    button.addEventListener("click", () => checkAnswer(choice, button));
    elements.choices.appendChild(button);
  });

  requestAnimationFrame(() => elements.questionText.focus({ preventScroll: true }));
}

function checkAnswer(selected, selectedButton) {
  if (hasAnswered) return;
  hasAnswered = true;

  const buttons = elements.choices.querySelectorAll(".choice-button");
  buttons.forEach(button => {
    button.disabled = true;
  });

  const correctAnswer = currentQuestion.answer;
  const isCorrect = selected === correctAnswer;

  if (isCorrect) {
    correctCount++;
    selectedButton.classList.add("correct");
    elements.result.textContent = "✓ 正解です";
    elements.feedback.classList.add("is-correct");
  } else {
    selectedButton.classList.add("wrong");
    elements.result.textContent = "不正解です";
    elements.feedback.classList.add("is-wrong");

    buttons.forEach(button => {
      if (button.dataset.answerText === correctAnswer) {
        button.classList.add("correct");
      }
    });
  }

  elements.answerNote.innerHTML = "";
  const answerLabel = document.createElement("strong");
  answerLabel.textContent = "正解：";
  elements.answerNote.append(answerLabel, document.createTextNode(correctAnswer));
  elements.feedback.classList.remove("hidden");
  elements.nextButton.classList.remove("hidden");
  elements.nextButton.textContent = currentIndex === currentQuestions.length - 1
    ? "結果を見る →"
    : "次の問題へ →";
  elements.nextButton.focus({ preventScroll: true });
}

function nextQuestion() {
  currentIndex++;
  showQuestion();
}

function updateStatusDialog() {
  const total = currentQuestions.length;
  const answered = Math.min(currentIndex + (hasAnswered ? 1 : 0), total);
  const wrong = answered - correctCount;
  const remaining = Math.max(total - answered, 0);
  const percentage = answered ? Math.round((correctCount / answered) * 100) : 0;
  let message = "まずは一問、挑戦してみましょう。";

  if (answered > 0 && percentage === 100) {
    message = "ここまで全問正解です。その調子です。";
  } else if (answered > 0 && percentage >= 80) {
    message = "よく理解できています。順調に進んでいます。";
  } else if (answered > 0 && percentage >= 60) {
    message = "着実に進んでいます。間違えた問題も確認しましょう。";
  } else if (answered > 0) {
    message = "焦らず、正解を確認しながら進みましょう。";
  }

  elements.statusRing.style.setProperty("--status-percent", String(percentage));
  elements.statusPercentage.textContent = percentage;
  elements.statusMessage.textContent = message;
  elements.statusAnswered.textContent = answered;
  elements.statusCorrect.textContent = correctCount;
  elements.statusWrong.textContent = wrong;
  elements.statusRemaining.textContent = remaining;
}

function openStatusDialog() {
  updateStatusDialog();

  if (typeof elements.statusDialog.showModal === "function") {
    elements.statusDialog.showModal();
  } else {
    elements.statusDialog.setAttribute("open", "");
  }

  elements.statusCloseButton.focus();
}

function closeStatusDialog() {
  if (typeof elements.statusDialog.close === "function" && elements.statusDialog.open) {
    elements.statusDialog.close();
  } else {
    elements.statusDialog.removeAttribute("open");
    elements.statusButton.focus();
  }
}

function showFinishedMessage() {
  const total = currentQuestions.length;
  const percentage = total ? Math.round((correctCount / total) * 100) : 0;
  let message = "もう一度挑戦して、知識を定着させましょう。";

  if (percentage === 100) {
    message = "全問正解です。すばらしい仕上がりです。";
  } else if (percentage >= 80) {
    message = "よく理解できています。間違えた箇所を確認しましょう。";
  } else if (percentage >= 60) {
    message = "あと一歩です。苦手な範囲を重点的に復習しましょう。";
  }

  elements.progress.innerHTML = `<strong>${total}</strong> / ${total}`;
  elements.progressBar.style.width = "100%";
  elements.progressTrack.setAttribute("aria-valuenow", "100");
  elements.progressTrack.setAttribute("aria-valuetext", "完了");
  elements.rangeLabel.textContent = "全問終了";
  elements.questionBlock.classList.add("hidden");
  elements.statusButton.classList.add("hidden");
  elements.choices.innerHTML = `
    <div class="finish-state">
      <div class="finish-medallion" aria-hidden="true">${percentage}<small>%</small></div>
      <h2>おつかれさまでした</h2>
      <p class="finish-scope">${currentScopeLabel}</p>
      <p><strong>${total}問中 ${correctCount}問</strong> 正解しました。</p>
      <p>${message}</p>
      <div class="finish-actions">
        <button class="finish-button" type="button" data-action="retry">同じ範囲でもう一度</button>
        <button class="finish-button secondary" type="button" data-action="range">回数選択へ戻る</button>
      </div>
    </div>
  `;
  elements.feedback.classList.add("hidden");
  elements.quizActions.classList.add("hidden");

  elements.choices.querySelector('[data-action="retry"]').addEventListener("click", () => {
    startQuiz(currentSessionKey);
  });
  elements.choices.querySelector('[data-action="range"]').addEventListener("click", backToRangeSelect);
  elements.choices.querySelector('[data-action="retry"]').focus({ preventScroll: true });
}

function restoreQuizLayout() {
  elements.questionBlock.classList.remove("hidden");
  elements.quizActions.classList.remove("hidden");
}

function clearResult() {
  elements.result.textContent = "";
  elements.answerNote.textContent = "";
  elements.feedback.className = "feedback hidden";
  elements.nextButton.classList.add("hidden");
}

function resetQuizState() {
  currentQuestions = [];
  currentIndex = 0;
  currentQuestion = null;
  correctCount = 0;
  hasAnswered = false;
  restoreQuizLayout();
  clearResult();
}

function backToRangeSelect() {
  if (elements.statusDialog.open) {
    closeStatusDialog();
  }

  resetQuizState();
  renderRangeOptions(currentMode);
  elements.quizArea.classList.add("hidden");
  elements.modeSelect.classList.add("hidden");
  elements.rangeSelect.classList.remove("hidden");
  elements.statusButton.classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
  requestAnimationFrame(() => elements.allRangeButton.focus({ preventScroll: true }));
}

function backToModeSelect() {
  if (elements.statusDialog.open) {
    closeStatusDialog();
  }

  resetQuizState();
  currentMode = null;
  currentSessionKey = "all";
  currentScopeLabel = "全範囲";
  elements.quizArea.classList.add("hidden");
  elements.rangeSelect.classList.add("hidden");
  elements.modeSelect.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
  requestAnimationFrame(() => {
    document.querySelector(".mode-button").focus({ preventScroll: true });
  });
}

function handleKeyboard(event) {
  if (elements.quizArea.classList.contains("hidden")) return;
  if (elements.statusDialog.open) return;

  if (!hasAnswered && /^[1-4]$/.test(event.key)) {
    const index = Number(event.key) - 1;
    const button = elements.choices.querySelectorAll(".choice-button")[index];
    if (button) button.click();
  }

  if (hasAnswered && (event.key === "Enter" || event.key === "ArrowRight")) {
    if (document.activeElement !== elements.nextButton) {
      event.preventDefault();
      elements.nextButton.click();
    }
  }
}

document.querySelectorAll(".mode-button").forEach(button => {
  button.addEventListener("click", () => openRangeSelect(button.dataset.mode));
});

elements.rangeBackButton.addEventListener("click", backToModeSelect);
elements.allRangeButton.addEventListener("click", () => startQuiz("all"));
elements.backButton.addEventListener("click", backToRangeSelect);
elements.nextButton.addEventListener("click", nextQuestion);
elements.statusButton.addEventListener("click", openStatusDialog);
elements.statusCloseIcon.addEventListener("click", closeStatusDialog);
elements.statusCloseButton.addEventListener("click", closeStatusDialog);
elements.statusDialog.addEventListener("close", () => elements.statusButton.focus());
elements.statusDialog.addEventListener("click", event => {
  if (event.target === elements.statusDialog) {
    closeStatusDialog();
  }
});
document.addEventListener("keydown", handleKeyboard);
setQuestionCounts();
