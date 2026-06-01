const personajes = [
  { id: 1, nombre: "A-Bomb", imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg" },
  { id: 2, nombre: "Abe Sapien", imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/2-abe-sapien.jpg" },
  { id: 3, nombre: "Abin Sur", imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/3-abin-sur.jpg" },
  { id: 4, nombre: "Abomination", imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/4-abomination.jpg" },
  { id: 5, nombre: "Abraxas", imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/5-abraxas.jpg" },
];

const btnSuperheroes = document.querySelector("#btnSuperheroes")
const rowGaleria = document.querySelector("#rowGaleria")

const cargarSuperheroes = (arregloSuperheroes) => {
    rowGaleria.innerHTML = ""

    arregloSuperheroes.forEach(personaje => {
        rowGaleria.innerHTML += `
            <div class="col-3 my-2" data-id=${personaje.id}>
          <div class="card">
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