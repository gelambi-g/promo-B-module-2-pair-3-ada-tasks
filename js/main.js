"use strict";

const btnAdd = document.querySelector(".js-btn-add");
const formAdd = document.querySelector(".js-text-task-add");
const taskFilter = document.querySelector(".js-text-task-filter");
const btnFilter = document.querySelector(".js-btn-filter");
const list = document.querySelector(".js-list");
const span = document.querySelector(".js-span");

const tasks = [
    { name: "Recoger setas en el campo", completed: true, id: 1 },
    { name: "Comprar pilas", completed: true, id: 2 },
    { name: "Poner una lavadora de blancos", completed: true, id: 3 },
    { name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
      completed: false,
      id: 4,
    },
  ];

  function renderTask () {
    list.innerHTML = "";
    for (const task of tasks) {
    
    if (task.completed === true) {
      list.innerHTML += `<li class="tachado"> ${task.name}</li>`;  
    } else {
        list.innerHTML += `<li> ${task.name}</li>`;  
    }
  }
};

function handleClickAdd (ev) {
    ev.preventDefault ();
    const valueInputAdd = formAdd.value;
    const index = tasks.indexOf(valueInputAdd);
    if(index === -1) {
        tasks.push(valueInputAdd);
    } else {
        span.innerHTML = "La tarea ya existe.";
    };

    renderTask ();
  };

  renderTask ();
  btnAdd.addEventListener("click", handleClickAdd);