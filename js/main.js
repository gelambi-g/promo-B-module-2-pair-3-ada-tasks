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

  function renderTask () {

    list.innerHTML = "";
    for (const task of tasks) {
    
    if (task.completed === true) {
      list.innerHTML += `<li class="tachado"><input type="checkbox" checked /> ${task.name}</li>`; 
    } else {
        list.innerHTML += `<li><input type="checkbox"/> ${task.name}</li>`;  
    }
  }
};

//tenemos que escuchar el evento en la ul
function handleCheckboxCompleted (){

   
}



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




  //Ejercicio  2.12 


  const handleClickList = (event) => {
    const taskId = parseInt(event.target.id); // Obtengo el id del checkbox clickado por la usuaria
    if (!taskId) return; // Si no ha pulsado en el checkbox, no queremos hacer nada y salimos de la función
  
    // Busca la tarea que tenga el id `taskId` en el array `tasks`
    // Una vez que has obtenido la tarea, actualiza la propiedad `completed`
    // Pinta de nuevo las tareas en el html
  };
  
  list.addEventListener("click", handleClickList);