export default class TodoInput {
    constructor(iPElem) {
        this.pElem = iPElem;

        this.inputElem = document.createElement("input");
        this.buttonElem = document.createElement("button");
        this.buttonElem.textContent = "Add";

        this.pElem.appendChild(this.inputElem);
        this.pElem.appendChild(this.buttonElem);

        this.buttonElem.addEventListener("click", () => {
            this.add();
        });
    }

    add() {
        const value = this.inputElem.value;

        const event = new CustomEvent("add", {
            detail: value
        });

        window.dispatchEvent(event);
        this.inputElem.value = "";
    }
}