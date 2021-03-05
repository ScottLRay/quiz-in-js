// the start prompt
var $startPrompt = document.querySelector("#start-prompt");
// the start button
var $startBtn = document.querySelector("#start-prompt button");
// the question prompt
var $questionPrompt = document.querySelector("#question-prompt");
// the questions
var $questionText = document.querySelector("#question-text");
// the options for the questions
var $questionOptions = document.querySelector("#options");
// the timer
var $timer = document.querySelector("#timer");
// the score
var $score = document.querySelector("#score");
// button to submit name
var $sBtn = document.querySelector("#sbutton");

// different varablies that i need for the functions
var secondsLeft = 100;
var timerInterval;
var currentQuestion = 0;
var score = 0;
score = secondsLeft;
var scoreText = [];


// i need questions for the quiz
var questions = [
  {
    text: "What is 10/2?",
    options: ["3", "5", "115"],
    correctAnswer: "5",
  },
  {
    text: "What is 30/3?",
    options: ["3", "5", "10"],
    correctAnswer: "10",
  },
  {
    text: "what is 20-5",
    options: ["10", "15", "30"],
    correctAnswer: "30",
  },
  {
    text: "Are you awesome?",
    options: ["True", "False"],
    correctAnswer: "True",
  },
];

$startBtn.addEventListener("click", startQuestions);
function startQuestions() {
  $startPrompt.classList.add("hide");
  $questionPrompt.classList.remove("hide");

  renderQuestion();
}

function renderQuestion() {
  $questionOptions.innerHTML = "";
  $questionText.textContent = questions[currentQuestion].text;
  questions[currentQuestion].options.forEach(function (item) {
    var $btn = document.createElement("button");
    $btn.textContent = item;
    options.addEventListener("click", answers);
    $questionOptions.append($btn);
    startTime();
  });
}

function answers(e) {
  var val = e.target.textContent;
  if (val === questions[currentQuestion].correctAnswer) {
    // What do we want to do if the answer was correct
    
    clearInterval(timerInterval);
  } else if (val !== questions[currentQuestion].correctAnswer) {
    // What do we want to do if the answer was wrong
    
  }
  currentQuestion++;
  if (questions.length === currentQuestion) {
    // If this code fires, it means we are out of questions

    $questionPrompt.classList.add("hide");
    alert("You won the game!");
    endGame();
  } else {
    // We have more questions
    renderQuestion();
  }
}

// End Game
function endGame() {
  if (secondsLeft === 0) {
    
    alert("You lost the game!");
  }
  $score.classList.remove("hide");
  saveHighScore();
}

function startTime() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    $timer.textContent = secondsLeft + " seconds left";
  }, 1000);
}
function saveHighScore() {
  // Save related form data as an object
  var userName = {
    userName: userName.value,
    score: score.value,
    
  };
  // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
  localStorage.setItem("highscore", JSON.stringify(userName));
}
function renderHighScore() {
  // Use JSON.parse() to convert text to JavaScript object
  var lastScore = JSON.parse(localStorage.getItem("highScore"));
  // Check if data is returned, if not exit out of the function
  if (lastScore !== null) {
  document.getElementById("saved-uname").innerHTML = lastScore.userName;
  document.getElementById("saved-score").innerHTML = lastScore.score;
  
  } else {
    return;
  }
}
  $sBtn.addEventListener("click", function (e) {
     e.preventDefault();
     saveHighScore();
     renderHighScore();
  });
 

