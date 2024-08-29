const inpBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");


function addTask(){
    if(inpBox.value === ""){
        alert("You must write something!");
    }else{
        let li = document.createElement('li');
        li.innerHTML = inpBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inpBox.value = "";
    saveData();
};

listContainer.addEventListener("click", (e) => {
    // console.log(e); //Event Object
    if(e.target.nodeName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
};

function showtask(){
    listContainer.innerHTML = localStorage.getItem("data")
};

showtask();
