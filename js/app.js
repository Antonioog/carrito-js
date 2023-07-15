//Variables...
const carrito = document.querySelector("#carrito");
const ContenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");

//Eventos o acciones.
cargarEventListeners();
function cargarEventListeners() {
  //Cuando agregamos un curso presionando 'Agregar al carrito'
  listaCursos.addEventListener("click", agregarCurso);
}

//Funciones...
function agregarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    console.log("Agragndo al carrito...");
  }
}
