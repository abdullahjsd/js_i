const input =document.querySelector("input")
const buttons   =document.querySelector(".buttons")


 
let inputValue="0"

myfunction()
function myfunction(){
    input.value=inputValue
}

buttons.addEventListener("click",function(e){
    const element=e.target
    if(!element.matches("button"))return;

})