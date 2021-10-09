const startButton = document.getElementById('start-btn');
const questions = document.getElementById('questions-container');

startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('hide')
    questions.classList.remove('hide')
    setNextQuestions()
}

function seNextQuestion() {

}

function selectedAnswer() {

}

const question = [
    {
        question: ''
    }
]