export default class Todo {
    constructor(text, pElem, index) {
        this.text = text;
        this.index = index;

        this.container = document.createElement("div");

        this.pElem = document.createElement("p");
        this.pElem.textContent = this.text;

        this.okElem = document.createElement("button");
        this.okElem.textContent = "✓";

        this.deleteElem = document.createElement("button");
        this.deleteElem.textContent = "X";

        this.container.appendChild(this.pElem);
        this.container.appendChild(this.okElem);
        this.container.appendChild(this.deleteElem);

        pElem.appendChild(this.container);

        
        this.deleteElem.addEventListener("click", () => {
            this.remove();
        });

        
        this.okElem.addEventListener("click", () => {
            this.ready();
        });
    }

    remove() {
        const event = new CustomEvent("remove", {
            detail: this.index
        });
        window.dispatchEvent(event);
    }

    ready() {
        this.pElem.classList.toggle("done");
    }
}