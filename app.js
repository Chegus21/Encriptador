function realizarAccion() {
    const textoInput = document.getElementById("textoInput").value.toLowerCase();
    const accionSelect = document.getElementById("accionSelect").value;
    let resultado = "";

    if (accionSelect === "encriptar") {
        resultado = encriptarTexto(textoInput);
    } else {
        resultado = desencriptarTexto(textoInput);
    }

    // Mostrar el resultado en el área de texto
    document.getElementById("resultadoTextarea").value = resultado;

    // Agregar al registro automático
    document.getElementById("registroTextarea").value += `\n${accionSelect}: ${resultado}\n`;
}

function encriptarTexto(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function desencriptarTexto(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function copiarResultado() {
    const resultadoTextarea = document.getElementById("resultadoTextarea");
    resultadoTextarea.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}
