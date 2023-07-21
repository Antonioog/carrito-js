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

  //Elimina cursos del carrito...
  carrito.addEventListener("click", eliminarCurso);

  //Vaciar el carrito...
  vaciarCarritoBtn.addEventListener("click", () => {
    articulosCarrito = [];

    limpiarHTML();
  });
}

//Funciones...
function agregarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSelecionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSelecionado);
  }
}

//Eliminar Curso del carrito...
function eliminarCurso(e) {
  if (e.target.classList.contains("borrar-curso")) {
    const cursoID = e.target.getAttribute("data-id");

    //Elimina del arreglo de articulos carrito por el data-id...
    articulosCarrito = articulosCarrito.filter((curso) => curso.id !== cursoID);

    carritoHTML();
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

  //Revisar si un articulo ya existe en el carrito...
  const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id);
  if (existe) {
    //Actualizamos la cantidad
    const cursos = articulosCarrito.map((curso) => {
      if (curso.id === infoCurso.id) {
        curso.cantidad++;
        return curso;
      } else {
        return curso;
      }
    });
    articulosCarrito = [...cursos];
  } else {
    articulosCarrito = [...articulosCarrito, infoCurso];
  }
  //Agregar elementos al arreglo carrito...

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
