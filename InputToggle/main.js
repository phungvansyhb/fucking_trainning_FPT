class todoObj {
    constructor(content, isError, isDone) {
        this.content = content;
        this.isError = isError;
        this.isDone = isDone;
    }
    content = "";
    isError = false;
    isDone = false;
}

function render(todoObj) {
    if (todoObj.isError === true) {
        document.querySelector(".message-error").classList.add("show");
    } else {
        let todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");
        //  create span content
        let content = document.createTextNode(todoObj.content);
        let span = document.createElement("span");
        span.appendChild(content);
        // create icon remove
        let icon = document.createElement("i");
        icon.classList.add("fa", "fa-times");

        todoItem.appendChild(span);
        todoItem.appendChild(icon);
        document.querySelector(".result-todo-list").appendChild(todoItem);
    }
}
document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
});

function getValue() {
    let form = document.forms.form;
    let todo = {};
    if (form.todo.value.trim() === "") {
        todo = new todoObj("", true, false);
    } else {
        todo = new todoObj(form.todo.value.trim(), false, false);
    }
    render(todo);
    console.log(todo, form.todo.value);
}

function handleClick(e) {
    let tag = e.target.tagName;
    console.log(e.target.tagName);
    if (tag === "SPAN") {
        e.target.parentElement.classList.toggle("done");
        if (e.target.parentElement.classList.value.includes("done")) {
            console.log(e.target);
            e.target.innerText += "(Completed)";
        } else
            e.target.innerText = e.target.innerText.replace("(Completed)", "");
    }
    if (tag === "I") {
        document
            .querySelector(".result-todo-list")
            .removeChild(e.target.parentElement);
    }
}
