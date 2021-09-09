const button = document.querySelector(".todo__button");
const todoList = document.querySelector(".todo__list");
const input = document.querySelector(".todo__input");

const saveLocal = () => {
    let todos = todoList.innerHTML;
    localStorage.setItem('todos', todos);
}

const onButtonClick = () => {
    if (input.value.length > 0) {
        const item = document.createElement("li");
        const itemTitle = document.createElement("h2");
        const buttonDelete = document.createElement("button");

        buttonDelete.innerText = "Удалить";
        buttonDelete.setAttribute("class", "todo__item-btn");

        itemTitle.innerText = input.value;
        itemTitle.setAttribute("class", "todo__item-text");

        input.value = "";

        item.setAttribute("class", "todo__item");
        item.appendChild(itemTitle);
        item.appendChild(buttonDelete);

        todoList.appendChild(item);

        item.addEventListener("click", () => {
        	itemTitle.classList.toggle("todo__item-text--done");
        });

        buttonDelete.addEventListener("click", () => {
            todoList.removeChild(buttonDelete.parentNode);
            saveLocal();
        });

        saveLocal();
    }
};

button.addEventListener("click", onButtonClick);


if (localStorage.getItem("todos")) {
    todoList.innerHTML = localStorage.getItem("todos");
};

const buttonsDelete = document.querySelectorAll(".todo__item-btn");
const todoItems = document.querySelectorAll(".todo__item");
const todoItemsText = document.querySelectorAll(".todo__item-text");

for (let i = 0; i < buttonsDelete.length; i++) {
    buttonsDelete[i].addEventListener("click", () => {
        todoList.removeChild(buttonsDelete[i].parentNode);
        saveLocal();
    });
}

for (let i = 0; i < todoItems.length; i++) {
	todoItems[i].addEventListener("click", () => {
		todoItemsText[i].classList.toggle("todo__item-text--done");
	});
}
