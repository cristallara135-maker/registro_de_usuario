function registrar() {

    let nombre = document.getElementById("nombre").value;

    let paterno = document.getElementById("paterno").value;

    let materno = document.getElementById("materno").value;

    let telefono = document.getElementById("telefono").value;

    let direccion = document.getElementById("direccion").value;

    let correo = document.getElementById("correo").value;

    document.getElementById("resultado").innerHTML =
        "Registro exitoso<br>" +
        "Nombre: " + nombre + "<br>" +
        "Apellido paterno: " + paterno + "<br>" +
        "Apellido materno: " + materno + "<br>" +
        "Telefono: " + telefono + "<br>" +
        "Direccion: " + direccion + "<br>" +
        "Correo: " + correo;

}

// Mostrar fotografia
document.getElementById("foto").addEventListener("change", function() {

    let archivo = this.files[0];

    if (archivo) {
        document.getElementById("imagen").src =
            URL.createObjectURL(archivo);
    }