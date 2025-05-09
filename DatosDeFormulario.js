function leer() 
{
    var nom = document.forms["formulario"].elements["user"].value;
    var clave = document.getElementById("pass").value;
    var carrera1 = document.getElementById("carrera").value;

    var gen = document.querySelector('input[name="genero"]:checked');
    var g = gen ? gen.value : "No seleccionado"; 

    var ok = document.getElementById("casilla").checked;
    
    document.getElementById("resultado").innerHTML = 
        "Tu nombre es: " + nom + 
        "<br>Tu contraseña es: " + clave + 
        "<br>Tu carrera es: " + carrera1 + 
        "<br>Tu género es: " + g + 
        "<br>Aceptación de los acuerdos: " + (ok ? "Aceptado" : "No aceptado");
}

