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
    currentQuestionIndex = 0
    score=0
    nextBtn.innerHTML = "Next"
    showQuestion()
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex
    questionsElement.innerHTML = questionNo +". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer =>{
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerButtons.appendChild(button)
    })




}