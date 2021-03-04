var $startPrompt = document.querySelector("#start-prompt");
var $startBtn = document.querySelector("#start-prompt button");
var $questionPrompt = document.querySelector("#question-prompt");
var $questionText = document.querySelector("#question-text");
var $questionOptions = document.querySelector("#options");
var $timer = document.querySelector("#timer");


var secondsLeft = 10;



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
    options: ["true", "False"],
    correctAnswer: "True",
  },
];

$startBtn.addEventListener("click", startQuestions);


function startQuestions() {

  $startPrompt.classList.add("hide");
  $questionPrompt.classList.remove("hide");
  	$questionText.textContent = questions[0].text;
 	 questions[0].options.forEach(function (item) {
    var $btn = document.createElement("button");
    $btn.textContent = item;
    options.addEventListener("click", answers)
    $questionOptions.append($btn);
    startTime();
  });
}

function answers(e){
  $questionOptions = e.target;
  if ($questionOptions.textContent === questions[0].correctAnswer){
    console.log("it worked")
  }

}

function startTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    $timer.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

