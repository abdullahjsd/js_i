const inputBox = document.querySelector("#input-box")
const listContainer = document.querySelector("#list-container")


function addTask(){
    if(inputBox.value ===""){
        alert("You must write sometthing !")
        function myFunction() {
           
        }
setInterval(myFunction, 3000);

       
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
}

















