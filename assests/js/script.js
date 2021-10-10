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
    rightIncorrect.textContent = "Incorrect! You just lost a few seconds"
};

document.getElementById('start').onclick = function () {
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
    answer.innerHTML =  "<button id='incorect1' class='choice-1'>Strings</button>" +
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
        if (event.target.className === "choice-1") {
            console.log('response')
            timeLeft -= 10;
            responseB();
        }
    });

    document.getElementById('correct1').onclick = function () {
        responseA();
        title.textContent = "How do you call a function in javascrpit:"
        answer.innerHTML = "<button id='correct2' class='choice'>helperFunction()</button>" +
                           "<br>" +
                           "<button id='incorrect2' class='choice-1'>marine-core()</buton>" +
                           "<br>" +
                           "<button id='incorrect2' class='choice-1'>helperFinder/()</button>" +
                           "<br>" +
                           "<button id='incorrect2' class='choice-1'>main{}</button>" +
                           "<br>";

        var correctB = document.querySelector('#correct2');
        console.log(correctB)

        document.getElementById('correct2').onclick = function () {
            responseA()
            title.textContent = "What command logs information about a vairable."
            answer.innerHTML = "<button id='incorrect3' class='choice-1'>window.prompt()</button>" +
                               "<br>" +
                               "<button id='incorrect3' class='choice-1'>window.alert()</button>" +
                               "<br>" +
                               "<button id='correct3' class='choice-1'>console.log()</button>" +
                               "<br>" +
                               "<button id='incorrect3' class='choice-1>res.status()</button>" +
                               "<br>";
                               
            var correctB = document.querySelector('#correct3');
            console.log(correctB);

            document.getElementById('correct3').onclick = function () {
            responseA();
            title.textContent = "A useful tool used during development and debugging for printing content to the debugger is:"
            answer.innerHTML = "<button id='incorrect4' class='choice-1'>Javascript</button>" +
                               "<br>" +
                               "<button id='correct4' class='choice'>Console.log</button>" +
                               "<br>" +
                               "<button id='incorrect4' class='choice-1'>Terminal/Bash</button>" +
                               "<br>" +
                               "<button id='incorrect4' class='choice-1'>For Loops</button>" +
                               "<br>";

                var correctC =document.querySelector('#correct4');
                console.log(correctC);

                document.getElementById('correct4').onclick = function () {
                    responseA();
                    title.textContent = "What needs to be added to a button to make it do somehting when clicked"
                    answer.innerHTML = "<button id='incorrect5' class='choice-1'>AppendChild</button>" +
                                      "<br>" +
                                      "<button id='incorrect5' class='choice-1'>createElement</button>" +
                                      "<br>" +
                                      "<button id='correct5' class='choice'>addEventListener</button>" +
                                      "<br>" +
                                      "<button id='incorrect5' class='choice-1'>findAll</button>" +
                                      "<br>"; 
                    var correctD = document.querySelector('#correct5');
                    console.log(correctD);
                    var incorrectA = document.querySelector('.choice-1');
                    console.log(incorrectA);

                    correctD.addEventListener("click", function () {
                        title.textContent = "Your score is " + timeLeft + "! Enter Your Initials"
                        rightIncorrect.textContent = ''
                        clearInterval(timerInterval)
                        answer.innerHTML = "<input id='initial' class='score' />" +
                                           "<button id='input-score' class='choice'>Enter</button>";

                        document.getElementById('input-score').onclick = function () {
                            var initials = document.querySelector('#initial').value;
                            console.log(initials);
                            var tempObject = { initials, timeLeft }
                            var highScores = JSON.parse(localStorage.getItem("High-Score")) || []
                            highScores.push(tempObject);
                            localStorage.setItem('High-Score', JSON.stringify(highScores))

                            window.location.reload();
                        }           
                    });

                };
            }

        }

    }
}


