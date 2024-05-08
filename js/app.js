//Creamos las variables...
const carrito = document.querySelector("#carrito");
const contenedorCursos = document.querySelector("lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");

//Agregamos los eventListeners...
cargarEventListeners();
function cargarEventListeners() {
  //Cuando agregamos un curso presionando el boton de agregar curso...
  listaCursos.addEventListener("click", agregarCurso);
}

//Cremaos las funciones
function agregarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    //Codigo para serleccionar el elementos padres del btn agregar curso....
    const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
  }
}

//Leer el contenido del curso al que le dimos click.
function leerDatosCurso(curso) {
  console.log(curso);
  //Construimos el objeto de los datos que mostraremos de curso seleccionado....
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };
  console.log(infoCurso);
}
