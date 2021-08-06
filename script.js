var submitScore = document.getElementById("submitName");
var highScoreBtn = document.getElementById("high-score-btn");
var quizTimer = document.getElementById("timer");
var userScore = document.getElementById("userScore");
var displayScore = document.getElementById("display-score");
var startButton = document.getElementById("startButton");
var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerButtons = document.getElementById("answer-buttons");
var userName = "";
var currentQuestionIndex = "";
var timerInterval;
var secondsLeft = 60;
var correctAnswerCount = 0;

var localStorageContents =
  JSON.parse(localStorage.getItem("playerScore")) || [];
console.log(localStorageContents);

// if (localStorageContents !== null) {
//   var previousHighScore = localStorageContents;
// } else {
//   previousHighScore = [];
// }

// console.log(previousHighScore);

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
    question: "What is the largest planet in our solar system?",
    answers: [
      { answer: "Saturn" },
      { answer: "Uranus" },
      { answer: "Neptune" },
      { answer: "Jupiter" },
    ],
    correctAnswer: "Jupiter",
  },
  {
    question: "What is the smallest planet in our solar system?",
    answers: [
      { answer: "Mercury" },
      { answer: "Uranus" },
      { answer: "Neptune" },
      { answer: "Mars" },
    ],
    correctAnswer: "Mercury",
  },
];

function setTime() {
  // Sets interval in variable
  secondsLeft = 60;
  timerInterval = setInterval(function () {
    secondsLeft--;
    quizTimer.textContent = secondsLeft + " seconds left";
    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to end the quiz
      endGame();
    }
  }, 1000);
}

function startQuiz() {
  setTime();
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
  } else {
    secondsLeft = secondsLeft - 10;
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

//Function to end the game. Removes hide class from start button and
function endGame() {
  startButton.classList.remove("hide");
  startButton.innerText = "Restart";
  displayScore.classList.remove("hide");
  questionContainerEl.classList.add("hide");
  userScore.innerText =
    "Your Score is " +
    correctAnswerCount +
    "! Click restart button to try again";
  userScore.classList.remove("hide");
  previousHighScore.push(correctAnswerCount);
  clearInterval(timerInterval);
  setHighScoreName();
  // userName = prompt("Enter user name to record score");
  // if (userName == "") {
  //   alert("Must Enter User Name");
  //   return userName;
  // }
  // localStorage.setItem(userName, JSON.stringify(previousHighScore));
}

function setHighScoreName() {
  userName = prompt("Enter user name to record score");
  if (userName == "") {
    alert("Must Enter User Name");
    return setHighScoreName();
  }
  var userObj = {};
  userObj.name = userName;
  userObj.userHighScore = correctAnswerCount;
  localStorageContents.push(userObj);
  localStorage.setItem("playerScore", JSON.stringify(localStorageContents));
}

function displayHighScore() {
  var parsedUserScore = JSON.parse(localStorage.getItem("playerScore"));
  //get item for high score from local storage
  // questionContainerEl.classList.add("hide");
  startButton.classList.add("hide");
  displayScore.classList.add("hide");
  var highScoresList = document.getElementById("highScoresList");
  highScoresList.classList.remove("hide");
  for (var i = 0; i < parsedUserScore.length; i++) {
    var currentPlayer = parsedUserScore[i];
    var playerName = currentPlayer.name;
    var playerScore = currentPlayer.userHighScore;
    var highScoresListItem = document.createElement("li");
    highScoresListItem.textContent = playerName + playerScore;
    highScoresList.appendChild(highScoresListItem);
  }
}

startButton.addEventListener("click", startQuiz);
highScoreBtn.addEventListener("click", displayHighScore);
