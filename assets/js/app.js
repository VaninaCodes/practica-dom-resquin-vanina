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