let parentGround =document.getElementById("parent_ground");
let denemebutton =document.querySelector(".button");
let basla        =document.getElementById("basla")
let boxes        =document.querySelectorAll(".box")

 



for(i=0;i<100;i++){
     let boxes = document.createElement("div");
     boxes.classList.add("box")
     parentGround.appendChild(boxes);

     boxes.addEventListener("click",function(){
         console.log("tiklandı");
     })
   
}






basla.addEventListener("click",function(){
    let transparan  =document.querySelector(".transparan").style.display="none"


 })


 




 









