"use strict";

const btnAdd = document.querySelector(".js-btn-add");
const formAdd = document.querySelector(".js-text-task-add");
const taskFilter = document.querySelector(".js-text-task-filter");
const btnFilter = document.querySelector(".js-btn-filter");
const list = document.querySelector(".js-list");
const span = document.querySelector(".js-span");


//Tenemos que crear una funcion que modifique el array para cambiar las tareas a completas o no. Un splice
const tasks = [
    { name: "Recoger setas en el campo", completed: true, id: 1 },
    { name: "Comprar pilas", completed: true, id: 2 },
    { name: "Poner una lavadora de blancos", completed: true, id: 3 },
    { name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
      completed: false,
      id: 4,
    },
  ];

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
    
  };
  
  list.addEventListener("click", handleClickList);


//Filtrar tareas. crear evento para boton, crear la funcion del evento,...
//si la tarea buscada existe que se pinte y si no existe, que salta mensaje la tarea no existe.

const handleClickFilter = (ev) => {
  ev.preventDefault();
  const InputTaskFilter = taskFilter.value.toLowerCase();
  const taskFilterSearch = tasks.filter((oneTask)=> oneTask.name.includes(InputTaskFilter));
  
 
  renderTask(taskFilterSearch);
      

  
}


btnFilter.addEventListener("click", handleClickFilter);
  
// function handleClickAdd (ev) {
//     ev.preventDefault ();
//     const valueInputAdd = formAdd.value;
//     const index = tasks.indexOf(valueInputAdd);
//     if(index === -1) {
//         tasks.push(valueInputAdd);
//         list.innerHTML += `<li><input type="checkbox"/> ${valueInputAdd}</li>`;
//     } else {
//         span.innerHTML = "La tarea ya existe.";
//     };

//     renderTask ();
//   };
 // btnAdd.addEventListener("click", handleClickAdd);
