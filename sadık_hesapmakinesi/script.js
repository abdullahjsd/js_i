const display = document.querySelector(".colculator_input");
const kesy = document.querySelector(".colculator_keys");


let displayValue = "0";
let firstValue =null;
let operator =null;
let wFsV= false

updateDisplay()
function updateDisplay(){
    display.value = displayValue
}

kesy.addEventListener("click", function(e){
    const element =e.target;

    if(!element.matches("button"))return;

    if (element.classList.contains("operator")){
        // console.log("operatör", element.value)
        handleOperator(element.value)
        updateDisplay();
        return;
    }

    if (element.classList.contains("decimal")){
        // console.log("decimal", element.value)
        inputDecimal(element.value)
        updateDisplay()
        return;
    }

    if (element.classList.contains("clear")){
        // console.log("clear", element.value)
        clear()
        updateDisplay()
        return;
    }
   inputNumber(element.value);
   updateDisplay()
})

function handleOperator(nextOperator){
    const value = parseFloat(displayValue)

    if(operator && wFsV){
        operator = nextOperator;
        return;
    }

    if ( firstValue === null){
        firstValue=value;
    }else if(operator){
        const result = calculate(firstValue, value, operator)

        displayValue = `${parseFloat(result.toFixed(2))}`
        firstValue = result;
    }
    wFsV =true
    operator=nextOperator

    console.log(displayValue,firstValue,operator,wFsV)
}

function calculate(first, second, operator){
    if(operator=== "+"){
        return first +second;
    }else if(operator === "-"){
        return first - second;
    }else if(operator === "*"){
        return first * second;
    }else if(operator === "/"){
        return first / second;
    }
    return second;
}

function inputNumber(num){
    if (wFsV){
        displayValue =num;
        wFsV=false
    }else{
    displayValue = displayValue === "0" ? num: displayValue + num;
    }
    console.log(displayValue,firstValue,operator,wFsV)

}  

function inputDecimal(){
    if (!displayValue.includes(".")){
        displayValue +="."
    }
}

function clear(){
    displayValue ="0"
}





