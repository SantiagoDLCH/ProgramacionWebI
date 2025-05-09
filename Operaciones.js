function sumar() {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;

    var resul = parseInt(n1) + parseInt(n2);
    document.getElementById("r").innerHTML = isNaN(resul) ? "Error: Entrada no válida" : resul;
}

function restar() {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;

    var resul = parseInt(n1) - parseInt(n2);
    document.getElementById("r").innerHTML = isNaN(resul) ? "Error: Entrada no válida" : resul;
}

function multiplicar() {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;

    var resul = parseInt(n1) * parseInt(n2);
    document.getElementById("r").innerHTML = isNaN(resul) ? "Error: Entrada no válida" : resul;
}

function dividir() {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;

    if (parseInt(n2) === 0) {
        document.getElementById("r").innerHTML = "Error: División por cero";
    } else {
        var resul = parseInt(n1) / parseInt(n2);
        document.getElementById("r").innerHTML = isNaN(resul) ? "Error: Entrada no válida" : resul;
    }
}



