//Variables...
const carrito = document.querySelector("#carrito");
const ContenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = [];

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
    const cursoSelecionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSelecionado);
  }
}

//Lee el contenido del html al que le dimos click y extrae al informacion del curso...
function leerDatosCurso(curso) {
  console.log(curso);

  //Crear un objeto con el contenido del curso actual...
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  //Agregar elementos al arreglo carrito...
  articulosCarrito = [...articulosCarrito, infoCurso];
  console.log(articulosCarrito);

  carritoHTML();
}

//Muestra el cerrito de cmpras en el html...
function carritoHTML() {
  //Limpiar el HTML...
  limpiarHTML();
  //Recorre el carrito y genera el HTML

  articulosCarrito.forEach((curso) => {
    const { imagen, titulo, precio, cantidad, id } = curso;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>
        <img src="${imagen}" width="100">
      </td>
      <td>${titulo}</td>
      <td>${precio}</td>
      <td>${cantidad}</td>
      <td>
        <a href="#" class = "borrar-curso" data-id = "${id}">X</a>
      </td>
    `;

    //Agrega el html del carrito en el tbody...
    ContenedorCarrito.appendChild(row);
  });
}

//Elimina los cursos del body.
function limpiarHTML() {
  //Forma Lenta
  //ContenedorCarrito.innerHTML = "";

  //Forma con mejor performance...

  while (ContenedorCarrito.firstChild) {
    ContenedorCarrito.removeChild(ContenedorCarrito.firstChild);
  }
}
