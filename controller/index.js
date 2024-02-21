document.addEventListener("DOMContentLoaded", function() {
    var enlaceIngresarCorreo = document.getElementById("enlaceIngresarCorreo");
    var checkbox = document.getElementById("inicioSesion");

    enlaceIngresarCorreo.addEventListener("click", function() {
        checkbox.checked = !checkbox.checked;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var recuperarSesionLink = document.getElementById("recuperarSesion");
    var checkbox = document.getElementById("recuperarC");

    recuperarSesionLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
        checkbox.checked = !checkbox.checked;
    });

    volverSesionLabel.addEventListener("click", function() {
        checkbox.checked = !checkbox.checked;
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var botonRecuperar = document.querySelector(".recuperar"); // Selecciona el botón con la clase "recuperar"
    var checkbox = document.getElementById("verificacion");

    botonRecuperar.addEventListener("click", function(event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del botón
        checkbox.checked = !checkbox.checked;
    });
});
    

/*regitro*/

const registroElement = document.getElementById("registro");

registroElement.addEventListener("click", function() {
    // Redireccionar a otro HTML
    window.location.href = "../views/registro.html";
});



