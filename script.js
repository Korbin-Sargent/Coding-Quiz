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
    question: "How many planets are in our solar system, not including Pluto?",
    answers: [
      { text: "7", correct: false },
      { text: "8", correct: true },
      { text: "9", correct: false },
      { text: "10", correct: false },
    ],
  },
  {
    question: "what is the oldest planet in our solar system?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Mercury", correct: false },
      { text: "Neptune", correct: false },
    ],
  },
  {
    question: "what is the larget planet in our solar system?",
    answers: [
      { text: "Saturn", correct: false },
      { text: "Uranus", correct: false },
      { text: "Neptune", correct: false },
      { text: "Jupiter", correct: true },
    ],
  },
];

function startQuiz() {
  startButton.classList.add("hide");
  questionContainerEl.classList.remove("hide");
  currentQuestionIndex = 0;
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
    button.innerText = answer.text;
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
  // console.log(currentQuestionIndex);
}

function resetState() {
  // nextButton.classList.add("hide");
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(event) {
  var selectedButton = event.target;
  var correct = selectedButton.dataset.correct;

  console.log(selectedButton.dataset.correct);

  // setStatusClass(document.body, correct);
  Array.from(answerButtons.children).forEach(function (button) {
    button.dataset.correct;
  });
  if (questions.length > currentQuestionIndex + 1) {
    currentQuestionIndex++;
    setNextQuestion();
    console.log(currentQuestionIndex);
    // nextButton.classList.remove("hide");
  } else {
    startButton.classList.remove("hide");
    startButton.innerText = "Restart";
    startButton.addEventListener("click", startQuiz);
  }
}

// function setStatusClass(element, correct) {
//   // clearStatusClass(element);
//   if (correct) {
//     element.classList.add("correct");
//   } else {
//     element.classList.add("wrong");
//   }
// }

// function clearStatusClass(element) {
//   element.classList.remove("correct");
//   element.classList.remove("wrong");
// }

startButton.addEventListener("click", startQuiz);
