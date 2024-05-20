
function startGame() {
  //make the button visible
  document.getElementById("startGame").style.display = "none";
  document.getElementById('main').style.backgroundImage= "url(img/background.jpg)";
  document.getElementById('QuestionCard').style.display = "block";
  loadElements()
}

let questions = [
  {
    question: "Was ist die Hauptstadt von Italien?",
    answers: ["Berlin", "Rom", "London", "München"],
    correctAnswer: 1
  },
  {
    question: "Was ist die Hauptstadt von Deutschland?",
    answers: ["Berlin", "Rom", "London", "München"],
    correctAnswer: 0
  },
  {
    question: "Was ist die Hauptstadt von England?",
    answers: ["Berlin", "Rom", "London", "München"],
    correctAnswer: 0
  }
];

function loadElements(){
  let Index = 0;
  let question = questions[Index];
  let AnswersDiv = document.getElementById('answer');

  document.getElementById('question').textContent = question.question
  question.answers.forEach((answers, index) => {
    let answerButton = document.createElement('button');
    answerButton.textContent = answers;
    answerButton.id = "answers";
    answerButton.onclick = () => checkAnswer(index)
    AnswersDiv.appendChild(answerButton);
  })

}
document.addEventListener('DOMContentLoaded', () => {
      let animalImg = document.getElementById('animal');
      let animalOpen = document.getElementById('animalOpen')
      animalImg.addEventListener('mouseover', () => {
      document.getElementById('Sprechblase').style.display = "flex"
      animalImg.style.display = "none"
      animalOpen.style.display = "flex"
    });
    animalImg.addEventListener('mouseout', () => {
      document.getElementById('Sprechblase').style.display = "none"
      animalImg.style.display = "flex"
      animalOpen.style.display = "none"
    });
});