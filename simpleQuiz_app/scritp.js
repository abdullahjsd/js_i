const questions =[
    {
        question:"soru 1",
        answer:[
            {text:"cevap y",correct:false},
            {text:"cevap d",correct:true},
            {text:"cevap y",correct:false},
            {text:"cevap y",correct:false},
        ]
    },
    {
        question:"soru 2",
        answer:[
            {text:"cevap y",correct:false},
            {text:"cevap d",correct:true},
            {text:"cevap y",correct:false},
            {text:"cevap y",correct:false},
        ]
    },
    {
        question:"soru 3",
        answer:[
            {text:"cevap y",correct:false},
            {text:"cevap d",correct:true},
            {text:"cevap y",correct:false},
            {text:"cevap y",correct:false},
        ]
    },
    {
        question:"soru 4",
        answer:[
            {text:"cevap y",correct:false},
            {text:"cevap d",correct:true},
            {text:"cevap y",correct:false},
            {text:"cevap y",correct:false},
        ]
    },
    {
        question:"soru 5",
        answer:[
            {text:"cevap y",correct:false},
            {text:"cevap d",correct:true},
            {text:"cevap y",correct:false},
            {text:"cevap y",correct:false},
        ]
    },
]


const questionsElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-buttons")
const nextBtn = document.getElementById("next-btn")


let currentQuestionIndex = 0;
let score =0;

function startQuiz(){
    currentQuestionIndex = 0;
    score=0
    nextBtn.innerHTML = "Next"
    showQuestion()
}

function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1 
    questionsElement.innerHTML = questionNo +". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer =>{
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerButtons.appendChild(button)
        if(answer.correct){
            button.dataset.correct= answer.correct
        }
        button.addEventListener("click", sectEnswer)
    })




}

function resetState(){
    nextBtn.style.display="none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function sectEnswer(e){
    const selectedBtn= e.target
    const isCorrect = selectedBtn.dataset.correct === "true"
    if(isCorrect){
        selectedBtn.classList.add("correct")
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }
        button.Disabled = "true"
      });
      nextBtn.style.display ="block"
}

function showScore(){
    resetState()
    questionsElement.innerHTML=`you score ${score} out of ${questions.length}!`
    nextBtn.innerHTML = "Play Again"
    nextBtn.style.display = "block"
}

function handleNextBotton(){
    currentQuestionIndex++
    if(currentQuestionIndex<questions.length){
        showQuestion()
    }else{
        showScore()
    }
}



nextBtn.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextBotton()
    }else{
        startQuiz()
    }
})

startQuiz()