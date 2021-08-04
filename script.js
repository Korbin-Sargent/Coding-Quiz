var startButton = document.getElementById("startButton");
var questionContainerEl = document.getElementById("question-container");

var questions = [
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
  setNextQuestion();
}

function setNextQuestion() {}

function selectAnswer() {}

startButton.addEventListener("click", startQuiz);
