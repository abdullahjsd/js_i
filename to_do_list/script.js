const inputBox = document.querySelector("#input-box")
const listContainer = document.querySelector("#list-container")



// function showAndCloseAlert() {
//     var alertBox = alert("Bu alert 3 saniye sonra kapanacak.");
//     setTimeout(function() {
//         alertBox.close(); 
//     }, 3000); 
// }
// showAndCloseAlert()

function addTask(){
    if(inputBox.value ===""){
        alert("Lütfen bir değer giriniz...")
    }else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);




     

        let span = document.createElement("span");
            span.className="clearSpan"
            span.innerHTML="×"
            li.appendChild(span)

        

    }
    inputBox.value=""
    saveData()

}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
},false)

 function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
 }
 function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
 }
 
 showTask()













