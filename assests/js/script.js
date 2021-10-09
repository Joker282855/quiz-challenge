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
        question: 'What is the getElementByIdMethod used for',
        answers: [
            {text: "To change the content of an html element", correct: false},
            {text: "selects an html element/container", correct: true},
            {text: "passes a value into another function", correct: false},
            {text: "finds error in the text", correct: false}
        ],
        question: "What command logs informaiton in the console",
        answers: [
            {text: "console.log()", correct: true},
            {text: "createElement", correct: false},
            {text: "startWriting()", correct: false},
            {text: "addClassList()", correct: false}
        ],
        question: "How do I add a child element to the parent element",
        answers: [
            {text: "appendchild()", correct: false},
            {text: "makechild()", correct: false},
            {test: "joinchild()", correct: false},
            {test: "appendChild()", correct: true}
        ],
        question: "What does the method innerHtml do",
        answers: [
            {text: "renders html elements on the page", correct: false},
            {text: "leaves the html text the same", correct:false},
            {text: "sets or returns the html content of an element", corret: true},
            {text: "switches places with an html tag", correct: false}
        ],
        quesiton: "How do you enclose an array",
        answers: [
            {text: "curly brackets", correct: false},
            {text: "square brackets", correct: true},
            {text: "forward slashes", correct: false},
            {test: "backward slashes", correct: false}
        ],
        question: "How do we initiate startFunction() as a funciton in javascript",
        answers: [
            {text: "simply state the funciton at the top of the file", correct: false},
            {text: "only type the command startFunciton()", correct: false},
            {text: "type startFunciton() again at the bottom of the file", correct: true},
            {text: "only type startFunction() at the top of the file", correct: false}
        ],
        question: "What command cause a message to appear in the top right of your computer",
        answers: [
            {text: "window.alert", correct: false},
            {text: "window.log", correct: false},
            {text: "window.prompt", correct: true},
            {text: "window.window", correct: false}
        ],
        question: "What is a variable called when it is not inside a function",
        answers: [
            {text: "local variable", correct: false},
            {text: "global variable", correct: true},
            {text: "hidden variable", correct: false},
            {text: "ran variable", correct: false}
        ]
    }
]