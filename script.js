var startButton = document.getElementById("startButton");
var nextButton = document.getElementById("next-btn");
var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerButtons = document.getElementById("answer-buttons");
var shuffledQuestions = "";
var currentQuestionIndex = "";

var questions = [
  {
    question: "What is the third planet from the sun?",
    answers: [
      { text: "Earth", correct: true },
      { text: "Mars", correct: false },
      { text: "Mercury", correct: false },
      { text: "Venus", correct: false },
    ],
  },
  {
    question: "what is the third planet from the sun?",
    answers: [
      { text: "Earth", correct: true },
      { text: "Mars", correct: false },
      { text: "Mercury", correct: false },
      { text: "Venus", correct: false },
    ],
  },
  {
    question: "what is the third planet from the sun?",
    answers: [
      { text: "Earth", correct: true },
      { text: "Mars", correct: false },
      { text: "Mercury", correct: false },
      { text: "Venus", correct: false },
    ],
  },
  {
    question: "what is the third planet from the sun?",
    answers: [
      { text: "Earth", correct: true },
      { text: "Mars", correct: false },
      { text: "Mercury", correct: false },
      { text: "Venus", correct: false },
    ],
  },
];

function startQuiz() {
  startButton.classList.add("hide");
  questionContainerEl.classList.remove("hide");
  shuffledQuestions = questions.sort(function () {
    Math.random() - 0.5;
  });
  currentQuestionIndex = 0;
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  currentQuestionIndex++;
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionEl.innerText = question.question;
  question.answers.forEach(function (answer) {
    var button = document.createElement("button");
    button.innerText = answer.text;
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add("hide");
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(event) {
  var selectedButton = event.target;
  var correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtons.children).forEach(function (button) {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1)
    nextButton.classList.remove("hide");
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

startButton.addEventListener("click", startQuiz);
