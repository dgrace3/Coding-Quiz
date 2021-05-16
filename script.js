
var quiz_score = 0;
var questionHeader = document.querySelector(".question");
var startButton = document.querySelector(".start_btn");
var qzIntro = document.querySelector("#quiz_intro");
var theMain =document.querySelector(".main_bdy");
var btnSection = document.querySelector(".buttons");
var feedBck = document.querySelector(".feedback");
var formSection = document.querySelector(".initialform");
var timerPart = document.querySelector("#timesection");
var q1 = "Commonly used data types DO NOT include:";
var q2 = "Javascript is a:"
var gameOver = "All Done!"
var newBtn1 = document.createElement("button");
var newBtn2 = document.createElement("button");
var newBtn3 = document.createElement("button");
var newBtn4 = document.createElement("button");
var newBtn5 = document.createElement("button");
var newBtn6 = document.createElement("button");
var newBtn7 = document.createElement("button");
var newBtn8 = document.createElement("button");
var result = document.createElement("h2");
var formCreate = document.createElement("form");
var i = document.createElement("input");
var s = document.createElement("input");

// questionHeader.textContent = "Commonly used data types DO NOT include:";
// funtion startQuiz() {
//     console.log("dalkjdasf");
// };
function startQuiz() {
    setTime()
    console.log(secondsLeft)

}

startButton.addEventListener("click", questionOne, startQuiz);
startButton.addEventListener("click", startQuiz);
var secondsLeft = 60

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerPart.textContent = "Time: " + secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        testOver();
      }
  
    }, 1000);
  }
  



function questionOne() {
    questionHeader.textContent = q1;
    qzIntro.remove();
    startButton.remove();
    newBtn1
    newBtn1.innerHTML = "1. Strings"
    btnSection.appendChild(newBtn1)
    newBtn1.setAttribute("id","answer1")
    newBtn1.setAttribute("class", "questOneBtns")
    newBtn2
    newBtn2.innerHTML = "2. Booleans"
    btnSection.appendChild(newBtn2)
    newBtn2.setAttribute("id","answer2")
    newBtn2.setAttribute("class", "questOneBtns")
    newBtn3
    newBtn3.innerHTML = "3. Numbers"
    btnSection.appendChild(newBtn3)
    newBtn3.setAttribute("id","answer3")
    newBtn3.setAttribute("class", "questOneBtns")
    newBtn4
    newBtn4.innerHTML = "4. Alerts"
    btnSection.appendChild(newBtn4)
    newBtn4.setAttribute("id","answer4")
    newBtn4.setAttribute("class", "questOneBtns")

}

newBtn1.addEventListener("click", checkQueOne)
newBtn2.addEventListener("click", checkQueOne)
newBtn3.addEventListener("click", checkQueOne)
newBtn4.addEventListener("click", checkQueOne)



newBtn1.addEventListener("click", timedelay1)
newBtn2.addEventListener("click", timedelay1)
newBtn3.addEventListener("click", timedelay1)
newBtn4.addEventListener("click", timedelay1)


function timedelay1() {
    setTimeout(questionTwo, 2500)
}

function checkQueOne(event) {
    if(this.id === "answer1") {
        result.innerHTML = "WRONG!"
        feedBck.appendChild(result)
        result.setAttribute("id", "ansresult")
        result.setAttribute("style", "color:#A9A9A9")
        newBtn1.removeEventListener("click", checkQueOne)
        newBtn2.removeEventListener("click", checkQueOne)
        newBtn3.removeEventListener("click", checkQueOne)
        newBtn4.removeEventListener("click", checkQueOne)
        secondsLeft = secondsLeft - 10
        return
    } else if(this.id==="answer2") {
        result.innerHTML = "WRONG!"
        feedBck.appendChild(result)
        result.setAttribute("id", "ansresult")
        result.setAttribute("style", "color:#A9A9A9")
        newBtn1.removeEventListener("click", checkQueOne)
        newBtn2.removeEventListener("click", checkQueOne)
        newBtn3.removeEventListener("click", checkQueOne)
        newBtn4.removeEventListener("click", checkQueOne)
        secondsLeft = secondsLeft - 10
        return
    } else if(this.id==="answer3") {
        result.innerHTML = "WRONG!"
        feedBck.appendChild(result)
        result.setAttribute("id", "ansresult")
        result.setAttribute("style", "color:#A9A9A9")
        newBtn1.removeEventListener("click", checkQueOne)
        newBtn2.removeEventListener("click", checkQueOne)
        newBtn3.removeEventListener("click", checkQueOne)
        newBtn4.removeEventListener("click", checkQueOne)
        secondsLeft = secondsLeft - 10
        return
    } else {
        result.innerHTML = "CORRECT!"
        feedBck.appendChild(result)
        result.setAttribute("id", "ansresult")
        result.setAttribute("style", "color:#A9A9A9")
        quiz_score = quiz_score + 20 

        newBtn1.removeEventListener("click", checkQueOne)
        newBtn2.removeEventListener("click", checkQueOne)
        newBtn3.removeEventListener("click", checkQueOne)
        newBtn4.removeEventListener("click", checkQueOne)
        return
    }

}


function questionTwo() {
    questionHeader.textContent = q2;
    document.querySelectorAll('.questOneBtns').forEach(e => e.remove());
    result.remove()
    newBtn5
    newBtn5.innerHTML = "1. A Gaming Console"
    btnSection.appendChild(newBtn5)
    newBtn5.setAttribute("id","answer5")
    newBtn5.setAttribute("class", "questOneBtns")
    newBtn6
    newBtn6.innerHTML = "2. A Programming Language"
    btnSection.appendChild(newBtn6)
    newBtn6.setAttribute("id","answer6")
    newBtn6.setAttribute("class", "questOneBtns")
    newBtn7
    newBtn7.innerHTML = "3. A Brown Ink Pen"
    btnSection.appendChild(newBtn7)
    newBtn7.setAttribute("id","answer7")
    newBtn7.setAttribute("class", "questOneBtns")
    newBtn8
    newBtn8.innerHTML = "4. A Coffee Prescription"
    btnSection.appendChild(newBtn8)
    newBtn8.setAttribute("id","answer8")
    newBtn8.setAttribute("class", "questOneBtns")

}

newBtn5.addEventListener("click", checkQueTwo)
newBtn6.addEventListener("click", checkQueTwo)
newBtn7.addEventListener("click", checkQueTwo)
newBtn8.addEventListener("click", checkQueTwo)

newBtn5.addEventListener("click", timedelay2)
newBtn6.addEventListener("click", timedelay2)
newBtn7.addEventListener("click", timedelay2)
newBtn8.addEventListener("click", timedelay2)



function checkQueTwo(event) {
    if(this.id === "answer5") {
        result.innerHTML = "WRONG!"
        feedBck.appendChild(result)
        result.setAttribute("id", "ansresult")
        result.setAttribute("style", "color:#A9A9A9")
        newBtn5.removeEventListener("click", checkQueTwo)
        newBtn6.removeEventListener("click", checkQueTwo)
        newBtn7.removeEventListener("click", checkQueTwo)
        newBtn8.removeEventListener("click", checkQueTwo)
        secondsLeft = secondsLeft - 10
        return
    } else if(this.id==="answer6") {
        result.innerHTML = "CORRECT!"
        feedBck.appendChild(result)
        result.setAttribute("id", "ansresult")
        result.setAttribute("style", "color:#A9A9A9")
        newBtn5.removeEventListener("click", checkQueTwo)
        newBtn6.removeEventListener("click", checkQueTwo)
        newBtn7.removeEventListener("click", checkQueTwo)
        newBtn8.removeEventListener("click", checkQueTwo)
        quiz_score = quiz_score + 20
        return
    } else if(this.id==="answer7") {
        result.innerHTML = "WRONG!"
        feedBck.appendChild(result)
        result.setAttribute("id", "ansresult")
        result.setAttribute("style", "color:#A9A9A9")
        newBtn5.removeEventListener("click", checkQueTwo)
        newBtn6.removeEventListener("click", checkQueTwo)
        newBtn7.removeEventListener("click", checkQueTwo)
        newBtn8.removeEventListener("click", checkQueTwo)
        secondsLeft = secondsLeft - 10
        return
    } else {
        result.innerHTML = "WRONG!"
        feedBck.appendChild(result)
        result.setAttribute("id", "ansresult")
        result.setAttribute("style", "color:#A9A9A9")
        newBtn5.removeEventListener("click", checkQueTwo)
        newBtn6.removeEventListener("click", checkQueTwo)
        newBtn7.removeEventListener("click", checkQueTwo)
        newBtn8.removeEventListener("click", checkQueTwo)
        secondsLeft = secondsLeft - 10
        return
    }

}

function timedelay2() {
    setTimeout(testOver, 2500)
}

var formArray = []
function testOver() {
    questionHeader.textContent = gameOver;

    document.querySelectorAll('.questOneBtns').forEach(e => e.remove());

    result.remove()
    // formCreate.setAttribute('method',"post");
    // formCreate.setAttribute('action',"submit.php");


    // i.setAttribute('type',"text");
    // i.setAttribute('name',"initials");

  

    // formCreate.appendChild(i);
    // formCreate.appendChild(s);
    formSection.appendChild(formCreate);
    // formArray.push(formValues)
    // console.log(formArray)

}


