const letterContainer = document.getElementById("letter-container")
const optoinsContainer = document.getElementById("optoins-container")
const userInputSection = document.getElementById("user-input-section")
const canvas = document.getElementById("canvas")
const newGameContainer = document.getElementById("new-game-container")
const resultText = document.getElementById("result-text")
const newGameButton = document.getElementById("new-game-button")


let options = {
    fruits:[
        "Apple",
        "Blueberry",
        "Mandarin",
        "Pineapple",
        "Pomegranete",
        "Watermelon",
    ],
    animals:[
        "Hedgehop",
        "Rhinoceros",
        "Squirrel",
        "Panther",
        "Walrus",
        "Zebra",
    ],
    countries:[
        "India",
        "Hungary",
        "Kyrgyzstan",
        "Switzerland",
        "Zimbabawe",
        "Dominica",
    ]
}

//count
let winCount = 0;
let count = 0;

let chosenWord = "";

// display option buttons
const displayOptions = () =>{
    optoinsContainer.innerHTML += `<h3>Please Select An Option</h3>`
    let buttonCon = document.createElement("div");
    for(let value in options){
        buttonCon.innerHTML += `<button class="options" onclick="generatorWord=('${value}')">${value}</button>`
        
    }
    optoinsContainer.appendChild(buttonCon)
}

//word generator
let generatorWord = (optionValue) =>{
    let optionsButtons = document.querySelectorAll("options");

    //if opton value matshes teh button innerText the highlight teh buton
    optionsButtons.forEach((button) => {
        if(button.innerText.toLowerCase() === optionValue ){
            button.classList.add("active");
        }
        button.disabled = true;
    
    })
    //initially hid letters
    letterContainer.classList.remove("hide");
    userInputSection.innerText = "";

    let optionArray = options[optionValue];
    //choose random word
    chosenWord = optionArray[Math.floor(Math.random () * optionArray.length)];
    chosenWord = chosenWord.toLocaleUpperCase();
    console.log(chosenWord)

    //replace every letter..
    let dislayItem = chosenWord.replace(/./g,'<span class="dashes">_</span>');

    //display each element...
    userInputSection.innerHTML = dislayItem;
};


//Inital function (called whe page load.....)
const initializer = () =>{
    winCount = 0;
    count = 0 ;

    //for creatin letter buttons
    for (let i =65;i<91 ; i++){
        let button = document.createElement("button");
        button.classList.add("letters")
        //Number to a-z
        button.innerText = String.fromCharCode(i);
        letterContainer.append(button)
    }
    displayOptions()
}
// New game
newGameButton.addEventListener("click",initializer);
window.onload = initializer;

















































































