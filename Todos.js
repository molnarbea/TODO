import Todo from "./Todo.js";

export default class Todos {
    constructor(pElem, iPElem) {
        this.list = [];
        this.pElem = pElem;
        this.iPElem = iPElem;

        window.addEventListener("add", (e) => {
            this.addTodo(e.detail);
        });

        window.addEventListener("remove", (e) => {
            this.removeTodo(e.detail);
        });
    }

    addTodo(text) {
        const todo = new Todo(text, this.pElem, this.list.length);
        this.list.push(todo);
    }

    removeTodo(index) {
        this.list.splice(index, 1);
        this.render();
    }

    render() {
        this.pElem.innerHTML = "";
        this.list.forEach((todo, index) => {
            new Todo(todo.text, this.pElem, index);
        });
    }
}