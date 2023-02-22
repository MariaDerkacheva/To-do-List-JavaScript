let inputPrincipal = document.querySelector(".input")
let botonAgregar = document.querySelector(".boton-agregar")
let contenido = document.querySelector(".contenedor")
let botonEditar;
let auxiliar = 0;

class Item {
  constructor(valueInput) {
    this.id = auxiliar
    this.crearDiv(valueInput)
    auxiliar += 1;
  }

  crearDiv() {
    //se crea el contenedor que tendra la lista de tareas
    let contenedorTareas = document.createElement("div")
    contenido.classList.add("estiloContenedorTareas")

    // se crea un div que tendra la tarea y sus botones
    let divTarea = document.createElement("div")
    divTarea.classList.add("estiloTarea")
    contenedorTareas.appendChild(divTarea)

    //se crea un input con el valor de la tarea
    let inputItem = document.createElement("input")
    inputItem.type = "text"
    //el input de la tarea tendra el valor ingresado en el primer input
    inputItem.placeholder = inputPrincipal.value
    inputItem.disabled = true
    inputItem.classList.add("inputItemEstilos")

    //se agrega el div de la tarea al contenedor padre "contenido"
    contenido.appendChild(contenedorTareas)
    //y luego se agrega los inputs que se van creando 
    divTarea.appendChild(inputItem)

    //?boton editar
    let botonEditar = document.createElement("button")
    //le agrego el icono
    botonEditar.innerHTML = "<i class='fas fa-lock'></i>"
    botonEditar.classList.add("estiloBotones")
    divTarea.appendChild(botonEditar)

    //escucha
    botonEditar.addEventListener("click", () => {

      //cambia el valor al contrario que tenia, es decir true a false y false a true
      //y lo guarda en => inputItem.disabled
      inputItem.disabled = !inputItem.disabled
      //dependiendo del valor guarado pone el icono que corresponde 
      inputItem.disabled ? 
        (botonEditar.innerHTML = "<i class='fas fa-lock'></i>") : (botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>")


      //?opcion 2 de escritura
      /*inputItem.disabled=false
      botonEditar.innerHTML= "<i class='fas fa-lock-open'></i>"
    
      inputItem.disabled =! true ? (
      inputItem.disabled=true
      ) : (
        inputItem.disabled=false,
        botonEditar.addEventListener("click", () => {
          botonEditar.innerHTML= "<i class='fas fa-lock'></i>"
        })
      )*/
    })

    //?boton remover
    let botonRemover = document.createElement("button")
    //le agrego el icono
    botonRemover.innerHTML = "<i class='fas fa-trash'></i>"
    botonRemover.classList.add("estiloBotones")
    divTarea.appendChild(botonRemover)

    botonRemover.addEventListener("click", () => {
      divTarea.remove()
    })
  }
}

botonAgregar.addEventListener("click", () => {
  if (inputPrincipal.value == "") {

    Swal.fire({
      title: 'Debes ingresar una tarea',
      icon: 'error',//icono de correcto 
      confirmButtonText: 'Cerrar', // boton
      backdrop: true,
      timer: 1500, //en cuanto tiempo se va cerrar 
      timerProgressBar: true, //barra de tiempo 
      showCloseButton: true // la X para cerrar el alert
    })
  } else {
    new Item(inputPrincipal.value)
    inputPrincipal.value = ""
  }
})


/************* Dark mode *************/
let botonS = document.querySelector("#switch")

botonS.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  botonS.classList.toggle("active");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  } else {
    localStorage.setItem("dark-mode", "false");
  }
});

// obtenemos al modo actual
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark");
  botonS.classList.add("active")

} else {
  document.body.classList.remove("dark");
  botonS.classList.remove("active")

}