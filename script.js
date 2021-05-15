
var quiz_score = 0;
var questionHeader = document.querySelector(".question");
var startButton = document.querySelector(".start_btn");
var qzIntro = document.querySelector("#quiz_intro");
var theMain =document.querySelector(".main_bdy");
var btnSection = document.querySelector(".buttons");
var feedBck = document.querySelector(".feedback");
var q1 = "Commonly used data types DO NOT include:";
var q2 = "Javascript is a:"
var newBtn1 = document.createElement("button");
var newBtn2 = document.createElement("button");
var newBtn3 = document.createElement("button");
var newBtn4 = document.createElement("button");
var result = document.createElement("h2");
console.log(q1)

// questionHeader.textContent = "Commonly used data types DO NOT include:";
// funtion startQuiz() {
//     console.log("dalkjdasf");
// };
function startQuiz() {
    questionOne()
   
}

startButton.addEventListener("click", startQuiz);


function questionOne() {
    questionHeader.textContent = q1;
    qzIntro.remove();
    startButton.remove();
    newBtn1
    newBtn1.innerHTML = "1. Strings"
    btnSection.appendChild(newBtn1)
    newBtn1.setAttribute("id","answer1")
    newBtn2
    newBtn2.innerHTML = "2. Booleans"
    btnSection.appendChild(newBtn2)
    newBtn2.setAttribute("id","answer2")
    newBtn3
    newBtn3.innerHTML = "3. Numbers"
    btnSection.appendChild(newBtn3)
    newBtn3.setAttribute("id","answer3")
    newBtn4
    newBtn4.innerHTML = "4. Alerts"
    btnSection.appendChild(newBtn4)
    newBtn4.setAttribute("id","answer4")

}

newBtn1.addEventListener("click", checkQueOne)
newBtn2.addEventListener("click", checkQueOne)
newBtn3.addEventListener("click", checkQueOne)
newBtn4.addEventListener("click", checkQueOne)

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
        return
    } else {
        result.innerHTML = "CORRECT!"
        feedBck.appendChild(result)
        result.setAttribute("id", "ansresult")
        result.setAttribute("style", "color:#A9A9A9")
        quiz_score = quiz_score + 20 
        console.log(quiz_score)
        newBtn1.removeEventListener("click", checkQueOne)
        newBtn2.removeEventListener("click", checkQueOne)
        newBtn3.removeEventListener("click", checkQueOne)
        newBtn4.removeEventListener("click", checkQueOne)
        return
    }

}


