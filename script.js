var correctAnswerCount = 0;
var userScore = document.getElementById("userScore");
var displayScore = document.getElementById("display-score");
var startButton = document.getElementById("startButton");
var nextButton = document.getElementById("next-btn");
var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerButtons = document.getElementById("answer-buttons");
var currentQuestionIndex = "";

var localStorageContents = JSON.parse(localStorage.getItem("userScore"));
console.log(localStorageContents);
// var previousHighScore;
if (localStorageContents !== null) {
  let previousHighScore = localStorageContents;
} else {
  previousHighScore = [];
}
console.log(previousHighScore);

var questions = [
  {
    question: "What is the third planet from the sun?",
    answers: [
      { answer: "Earth" },
      { answer: "Mars" },
      { answer: "Mercury" },
      { answer: "Venus" },
    ],
    correctAnswer: "Earth",
  },
  {
    question: "How many planets are in our solar system, not including Pluto?",
    answers: [
      { answer: "7" },
      { answer: "8" },
      { answer: "9" },
      { answer: "10" },
    ],
    correctAnswer: "8",
  },
  {
    question: "What is the oldest planet in our solar system?",
    answers: [
      { answer: "Earth" },
      { answer: "Jupiter" },
      { answer: "Mercury" },
      { answer: "Neptune" },
    ],
    correctAnswer: "Jupiter",
  },
  {
    question: "What is the larget planet in our solar system?",
    answers: [
      { answer: "Saturn" },
      { answer: "Uranus" },
      { answer: "Neptune" },
      { answer: "Jupiter" },
    ],
    correctAnswer: "Jupiter",
  },
];

function startQuiz() {
  displayScore.classList.add("hide");
  startButton.classList.add("hide");
  questionContainerEl.classList.remove("hide");
  currentQuestionIndex = 0;
  correctAnswerCount = 0;
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(questions[currentQuestionIndex]);
  // console.log(currentQuestionIndex);
}

//appends the question text and answer buttons to the container
function showQuestion(question) {
  questionEl.innerText = question.question;
  question.answers.forEach(function (answer) {
    //create buttons for each answer
    var button = document.createElement("button");
    //insert text for each answer as the text declared in var questions
    button.innerText = answer.answer;
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
  // console.log(currentQuestionIndex);
}

function resetState() {
  answerButtons.innerHTML = "";
}

function selectAnswer(event) {
  var selectedButton = event.target;
  console.log(selectedButton.textContent);

  console.log(questions[currentQuestionIndex].correctAnswer);

  if (
    selectedButton.textContent == questions[currentQuestionIndex].correctAnswer
  ) {
    correctAnswerCount += 5;
  }
  console.log(correctAnswerCount);
  if (questions.length > currentQuestionIndex + 1) {
    currentQuestionIndex++;
    setNextQuestion();
    console.log(currentQuestionIndex);
  } else {
    endGame();
  }
}
function endGame() {
  startButton.classList.remove("hide");
  startButton.innerText = "Restart";
  displayScore.classList.remove("hide");
  questionContainerEl.classList.add("hide");
  userScore.innerText = correctAnswerCount;
  previousHighScore.push(correctAnswerCount);
  localStorage.setItem("userScore", JSON.stringify(previousHighScore));
}
startButton.addEventListener("click", startQuiz);
