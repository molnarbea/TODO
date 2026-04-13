import Todos from "./Todos.js";
import TodoInput from "./TodoInput.js";

const todoContainer = document.querySelector(".todos");
const inputContainer = document.querySelector(".input");

new Todos(todoContainer, inputContainer);
new TodoInput(inputContainer);