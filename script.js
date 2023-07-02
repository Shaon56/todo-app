const inputBox = document.getElementById("input-box");  //target input id
const listContainer = document.getElementById("list-container");    //target ul

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;  //push input from user in inputBox.
        listContainer.appendChild(li);  //add a new child element as the last child of a parent element(li).
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = "";    //output of inputBox value.
    saveData();
}

listContainer.addEventListener("click", function(e){    //create function for li & span
    if(e.target.tagName === "LI"){  //This condition is used to determine if the click event occurred on an <li> element.
        e.target.classList.toggle("checked");   
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){    //display a list of tasks stored in the browser's localStorage
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();