
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const qt = document.querySelector("#quote");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const weather = document.querySelector("#weather");


const HIDDEN_CLASSNAME = "hidden";
const LOGIN_FORM = "loginForm";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello! ${username} !`;
    
    loginForm.classList.remove(LOGIN_FORM);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    qt.classList.remove(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
    todoList.classList.remove(HIDDEN_CLASSNAME);
    weather.classList.remove(HIDDEN_CLASSNAME);
}



const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)

}else{
    //show the greetings 
    paintGreetings(savedUsername);
}