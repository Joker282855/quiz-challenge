var centralContent = document.querySelector('#information');
var questions = document.querySelector('#questions');""
var title = document.querySelector('#quizcode');
var answer = document.querySelector('#answer');
var startBtn = document.querySelector('#start');
var timeEl = document.querySelector('#time');
var rightIncorrect = document.querySelector('#response');
var timeLeft = 60;

var responseA = function () {

    rightIncorrect.textContent = "Correct"
};
var responseB = function () {
    rightWrong.textContent = "Incorrect!"
};

document.getElementsById('start').onclick = function () {
    var timerInterval = setInterval(function () {
      if (timeLeft > 0) {
          timeEl.textContent = 'Time: ' + timeLeft;
          timeLeft--;
      } else { 
        clearInterval(timerInterval)
        title.textContent = 'Your Score is' + timeLeft + '! Enter Your Initials'
        rightIncorrect.textContent = ''
        answer.innerHTML = "<input id='score' class'score-form'/>" +
                            "<button class='choice' onClick='window.location.reload();'>Enter</button>";
      }
    }, 1000);

    questions.textContent = '';
    title.textContent = "Comonly used data types do NOT include:"
                        "<button id='incorect1' class='choice-1'>Strings</button>" +
                        "<br>" +
                        "<button id='incorrect1' class='choice-1'>Booleans</button>" +
                        "<br>" +
                        "<button id='correct1' class='choice'>Alerts</button>" +
                        "<br>" +
                        "<button id='incorrect1' class='choice-1'>Numbers</button>" +
                        "<br>";

    var correct1 =  document.querySelector('#correct1');
    console.log(correct1)
    var incorrectB = document.querySelector('.answer');

    incorrectB.addEventListener("click", function (event) {
        if (event.target.classname === "choice-1") {
            console.log('response')
            timeLeft -= 10;
            responseB();
        }
    });

    document.getElementById('correct1').onclick = function () {
        responseA();
        title.textContent = "How do you call a function in javascrpit:"
        answer.innerHTML = "<button id='correctTwo' class='choice-2'>helperFunction()" +
                           "<br>" +
                           "<button id='incorrectvase' class='chocie-in'>()" +
                           "<br>" +
                           "<button id='incorrectvase' class='choice-in'>/()" +
                           "<br>" +
                           "<button id='incorrectvase' class='choice-in'>main" +
                           "<br>";

        var correctB = document.querySelector('#correctTwo');
        console.log(correctB)

    }



