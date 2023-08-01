let parentGround =document.getElementById("parent_ground");
let denemebutton =document.querySelector(".button");
let basla        =document.getElementById("basla")
let boxes        =document.querySelectorAll(".box")
 

let kare = 63;
let bbomba=5;
 
 
for(i=0;i<kare;i++){
     let boxes = document.createElement("div");
          boxes.classList.add("box")
          parentGround.appendChild(boxes);

     let balonimg     =document.createElement("img")
          balonimg.style.width="65px"
          balonimg.classList.add("sekil")
          balonimg.src=("img/balon.jpg")
          boxes.appendChild(balonimg);
 /******************************* */


          boxes.addEventListener("click",function(){
               let rst =Math.floor(Math.random() * kare);
            

 
                  
                         
               
               
               // if(rst==patla){
               //           console.log("bonba patadı");
               //      }
               //      else{
               //           console.log("patlamaı");
               //      }
          })
 
   
}






/* oyuna başlamadan önce ki transparan */
basla.addEventListener("click",function(){
    let transparan  =document.querySelector(".transparan").style.display="none"


 })


 




 









