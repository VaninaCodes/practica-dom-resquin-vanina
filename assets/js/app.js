const personajes = [
  { id: 1, nombre: "A-Bomb", imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg" },
  { id: 2, nombre: "Abe Sapien", imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/2-abe-sapien.jpg" },
  { id: 3, nombre: "Abin Sur", imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/3-abin-sur.jpg" },
  { id: 4, nombre: "Abomination", imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/4-abomination.jpg" },
  { id: 5, nombre: "Abraxas", imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/5-abraxas.jpg" },
];

// Renderizado de cards
const btnSuperheroes = document.querySelector("#btnSuperheroes")
const rowGaleria = document.querySelector("#rowGaleria")

const cargarSuperheroes = (arregloSuperheroes) => {
    rowGaleria.innerHTML = ""

    arregloSuperheroes.forEach(personaje => {
        rowGaleria.innerHTML += `
            <div class="col-3 my-2" data-id=${personaje.id}>
          <div class="card h-100 w-100">
            <img
              src=${personaje.imagen}
              class="card-img-top"
              alt=${personaje.nombre}
              style="height: 150px; object-fit: contain"
            />
            <div class="card-body">
              <h5 class="card-title">${personaje.nombre}</h5>
              <button type="button" class="btn btn-danger btn-eliminar">Eliminar</button>
            </div>
          </div>
        </div>
        
        `
    });
}

btnSuperheroes.addEventListener("click", () => {
    cargarSuperheroes(personajes)
})

// Filtro por nombre
const inputBuscador = document.querySelector("#inputBuscador")
const btnBuscador = document.querySelector("#btnBuscador")

const buscar = (arregloSuperheroes) =>{
    // obtiene lo que se escribe y convierte a minuscula
    const texto = inputBuscador.value.toLocaleLowerCase();

    const personajesFiltrados = arregloSuperheroes.filter(personaje => 
        personaje.nombre.toLowerCase().includes(texto));
        // verifica si el nombre tiene el texto buscado
    cargarSuperheroes(personajesFiltrados)
}

// Evento para el boton
btnBuscador.addEventListener("click", (e) => {
    e.preventDefault(); // previene que la pagina se recargue
    buscar(personajes);
});

// Formulario de agregar
const nombreSuperheroe = document.querySelector("#nombreSuperheroe")
const imagenSuperheroe = document.querySelector("#imagenSuperheroe")
const btnAgregar = document.querySelector(".btn-agregar")

btnAgregar.addEventListener("click", (e) => {
    e.preventDefault();

    // lee lo escrito en los inputs
    const nombre = nombreSuperheroe.value;
    const imagen = imagenSuperheroe.value;

    // verifica que los campos tengan contenido
    if (nombre === "" || imagen === ""){
        alert("Campos incompletos!!");
        return;
    }

    const nuevoSuperheroe = {
        id: Date.now(),
        nombre: nombre,
        imagen: imagen
    };

    // agrega el nuevo sh al arreglo
    personajes.push(nuevoSuperheroe);

    // vuelve a cargar la galeria con el nuevo sh
    cargarSuperheroes(personajes);

    // limpia los campos
    nombreSuperheroe.value = "";
    imagenSuperheroe.value = "";
});