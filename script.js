const questions = [
  {
    question: "What is the capital of Austrailia?",
    correctAnswer: "Canberra"
  },
  {
    question: "What is the largest animal?",
    correctAnswer: "Blue Whale"
  }
];

let questionIndex = 0;
let score = 0;

function displayQuestion() {
  const question = questions[questionIndex];
  let questionHTML = `<h2>${question.question}</h2>`;
  document.getElementById("questionContainer").innerHTML = questionHTML;
}

function nextQuestion() {
  const selectedAnswer = document.getElementById("answerInput").value;

  if (!selectedAnswer)
  {
    alert("Please enter an answer.");
    return ;
  }

  if (selectedAnswer.trim().toLowerCase() === questions[questionIndex].correctAnswer.toLowerCase())
  {
    score++;
  }

  questionIndex++;

  if (questionIndex < questions.length)
  {
    displayQuestion();
    document.getElementById("answerInput").value = "";
  } else {
    document.getElementById("result").innerHTML = `Your score is ${score}/${questions.length}`;
    document.getElementById("nextButton").style.display = "none";
  }
}

displayQuestion();