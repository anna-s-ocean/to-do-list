const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//create a new task and display 
function addTask(){
    if(inputBox.value === ''){
        alert("you must write your task!");
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value; 
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
    

}
//on click check or uncheck task (LI) and delete is x btn is clicked span)
listContainer.addEventListener("click", function(e){
    if(e.target.tagName=== "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

//persist the list in the broswer during a refresh
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//persist data even if broswer is closed 
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();