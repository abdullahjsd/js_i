const input =document.querySelector(".Cinput")
let buttons   =document.querySelector(".buttons")
 

let inputValue="0"


update()
 function update(){
    input.value=inputValue
}

buttons.addEventListener("click",function(e){
    const element = e.target
    if(!element.matches("button")) return;

    if(element.classList.contains("operator")){
        console.log("operatör");
        return
    }
    if(element.classList.contains("decimal")){
        console.log("decimal");
        return
    }
    if(element.classList.contains("clear")){
        console.log("clear");
        return
    }
 
    inputNumber(element.value)
   update()
})

function inputNumber(num){
    inputValue=num
}

