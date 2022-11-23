// Seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const botaoCancelar = document.querySelector("#botao-cancelar");

let oldInputValue;

// Funções
const saveTodo = (text) => {
  const todo = document.createElement("div");
  todo.classList.add("todo");

  const todoTitle = document.createElement("h3");
  todoTitle.innerText = text;
  todo.appendChild(todoTitle);

  const botaoFinalizar = document.createElement("button");
  botaoFinalizar.classList.add("finalizar-todo");
  botaoFinalizar.innerHTML = '<i class="fa-solid fa-check"></i>';
  todo.appendChild(botaoFinalizar);

  const botaoDeletar = document.createElement("button");
  botaoDeletar.classList.add("remover-todo");
  botaoDeletar.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  todo.appendChild(botaoDeletar); 

  todoList.appendChild(todo);

  todoInput.value = "";
};

// Eventos
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = todoInput.value;

  if (inputValue) {
    saveTodo(inputValue);
  }
});

document.addEventListener("click", (e) => {
  const targetEl = e.target;
  const parentEl = targetEl.closest("div");
  let todoTitle;

  if (parentEl && parentEl.querySelector("h3")) {
    todoTitle = parentEl.querySelector("h3").innerText || "";
  }

  if (targetEl.classList.contains("finalizar-todo")) {
    parentEl.classList.toggle("feito");
  }

  if (targetEl.classList.contains("remover-todo")) {
    parentEl.remove();
  }

});

botaoCancelar.addEventListener("click", (e) => {
  e.preventDefault();
  toggleForms();
});