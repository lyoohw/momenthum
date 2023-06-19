const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODO_KEY = "toDos";

let toDos = [];

function saveToDos(){
    localStorage.setItem("toDos", JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.composedPath()[1];
    toDos = toDos.filter((toDo)=>(
        toDo.id !== parseInt(li.id)
    ));
    li.remove();
    saveToDos();
}

function checkToDo(event){
    const li = event.composedPath()[1];
    const span = li.children[1];
    li.classList.toggle("todoListLi");
    li.classList.toggle("checked");
    span.classList.toggle("checkedText");
}

function paintToDo(newToDoObj){
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    li.classList.add("todoListLi");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", checkToDo);
    const span = document.createElement("span");
    span.innerText = newToDoObj.todo;
    const button = document.createElement("button");
    button.addEventListener("click", deleteToDo);
    button.innerText = "❌";

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        todo: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODO_KEY);

if(savedToDos !== null){
    const parseToDo = JSON.parse(savedToDos);
    toDos = parseToDo;
    parseToDo.forEach(paintToDo);
};