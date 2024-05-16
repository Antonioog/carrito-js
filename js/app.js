//Variables...
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = [];

//Cargar los eventListeners...
cargarEventListener();
function cargarEventListener() {
  listaCursos.addEventListener("click", agregarCurso);
}

//Funciones...
function agregarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
  }
}

//Lee elcontenido del HTML al que le dimos click y extrae la informacion del curso...
function leerDatosCurso(curso) {
  console.log(curso);

  //Crear un onjeto con el contenido del curso actual.
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  //Revisa si un elemento ya esta en el carrito...
  const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id);
  if (existe) {
    //Actualizamos la cantidad...
    const cursos = articulosCarrito.map((curso) => {
      if (curso.id === infoCurso.id) {
        curso.cantidad++;
        return curso; //Retorna el objeto actualizado
      } else {
        return curso; //Retorna los objetos que no son los duplicados
      }
    });
    articulosCarrito = [...cursos];
  } else {
    articulosCarrito = [...articulosCarrito, infoCurso];
  }

  //Agrega elelmentos al arreglo del carrito...

  console.log(articulosCarrito);
  carritoHTML();

  //Muestra el carrito de compras en el HTML...
  function carritoHTML() {
    //Limpiar el html...
    limpiarHTML();
    //Recorreo el carrito y genera el html...

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
        <a href = "#" class="borrar-curso" data-id="${id}" /> X </td>
      </td>
    `;

      //Agrega el HTML  de nuestro codigo en el tbody...
      contenedorCarrito.appendChild(row);
    });
  }

  //Eliminar los cursos del tbody...
  function limpiarHTML() {
    //Forma lento de limpiar el HTML...
    //contenedorCarrito.innerHTML = "";

    //Forma mas efectiva de limpiar el HTML...
    while (contenedorCarrito.firstChild) {
      contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
  }
}
