const msjaencriptar = document.querySelector(".txt-a-encriptar");
const msjencriptado = document.querySelector(".mensaje");

function btnEncriptar() {
    if (msjaencriptar.value != "") {
        const textoEncriptado = encriptar(msjaencriptar.value);
        msjencriptado.value = textoEncriptado;
        msjaencriptar.value = " ";
    } else {
        alert("Nada para Encriptar!");
    }
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i<matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function btnDesencriptar() {
    if (msjencriptado.value != ""){
        const textoDesencriptado = desencriptar(msjencriptado.value);
        msjaencriptar.value = textoDesencriptado;
        msjencriptado.value = " ";
    } else {
        alert("Nada para Desencriptar!");
    }
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i<matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

function btnCopiar() {
    if (msjencriptado.value != "") {
        navigator.clipboard.writeText(msjencriptado.value);
        alert("Texto Encriptado en portapapeles");
    } else {
        if (msjaencriptar.value != "") {
            alert("Texto Desencriptado en portapapeles")
        } else { alert("Sin texto a copiar!");}
    }
}