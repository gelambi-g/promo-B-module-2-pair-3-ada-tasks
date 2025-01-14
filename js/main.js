"use strict";

const btnAdd = document.querySelector(".js-btn-add");
const formAdd = document.querySelector(".js-text-task-add");
const taskFilter = document.querySelector(".js-text-task-filter");
const btnFilter = document.querySelector(".js-btn-filter");
const list = document.querySelector(".js-list");
const span = document.querySelector(".js-span");
const p = document.querySelector(".js-p");


//Tenemos que crear una funcion que modifique el array para cambiar las tareas a completas o no. Un splice
let tasks = [];

function renderTask (array) {
     //llamar a la funcion con parametro ajustado

    list.innerHTML = "";
    for (const task of array) {
    
    if (task.completed === true) {
      list.innerHTML += `<li class="tachado"><input type="checkbox" id="${task.id}" checked /> ${task.name}</li>`; 
    } else {
        list.innerHTML += `<li><input type="checkbox" id="${task.id}"/> ${task.name}</li>`;  
    }
  }
};

renderTask (tasks);
 

  //Ejercicio  2.12 
const handleClickList = (event) => {
    const taskId = parseInt(event.target.id); // Obtengo el id del checkbox clickado por la usuaria
    if (!taskId) return; 
    const indexId = tasks.findIndex ((task) => task.id === taskId);
    if (tasks [indexId].completed === true) {
      tasks [indexId].completed = false;
    } else {
      tasks [indexId].completed = true;
    }
    renderTask(tasks);
    renderCompleted();
    
  };
  
list.addEventListener("click", handleClickList);

//Filtrar tareas. crear evento para boton, crear la funcion del evento,...
//si la tarea buscada existe que se pinte y si no existe, que salta mensaje la tarea no existe.

const handleClickFilter = (ev) => {
  ev.preventDefault();
  const InputTaskFilter = taskFilter.value.toLowerCase();
  const taskFilterSearch = tasks.filter((oneTask)=> oneTask.name.toLowerCase().includes(InputTaskFilter));
  
 
  renderTask(taskFilterSearch);
      
};


btnFilter.addEventListener("click", handleClickFilter);
  
const GITHUB_USER = "<tu_usuario_de_github_aqui>";
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;

function renderCompleted () {
  const completed = tasks.filter ((taskCompleted) => taskCompleted.completed);
  const completedNot = !completed 
  const notCompleted = tasks.filter ((taskNOTCompleted) => taskNOTCompleted.completed === completedNot);
  p.innerHTML = `Tienes ${tasks.length} tareas: ${completed.length}  completadas y ${notCompleted.length} por realizar.`
  
}

fetch("https://dev.adalab.es/api/todo")
.then((resp) => resp.json())
.then((infoTask) => {
  tasks = infoTask.results;
  
  for (const oneTask of tasks) {
    list.innerHTML += `<li>${oneTask.name}</li>`;
  };
  renderTask(tasks);
  renderCompleted();
});

function handleClickAdd (ev) {
    ev.preventDefault ();
    const valueInputAdd = formAdd.value;
    const newTask = {
      name: `${valueInputAdd}`,
      completed: false,
    };


    //const index = tasks.indexOf(valueInputAdd);
    // if(index === -1) {
    //     tasks.push(valueInputAdd);
    //     list.innerHTML += `<li><input type="checkbox"/> ${valueInputAdd}</li>`;
    // } else {
    //     span.innerHTML = "La tarea ya existe.";
    // };

    renderTask ();
  };
 btnAdd.addEventListener("click", handleClickAdd);
