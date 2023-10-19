const inputBox = document.querySelector("#input-box")
const listContainer = document.querySelector("#list-container")


function addTask(){
    if(inputBox.value ===""){
        alert("You must write sometthing !")
    }else {
        let li = document.createElement("li");
        let myicon = document.createElement("i")

        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        console.log(myicon)
    }
}

















console.log(listContainer)