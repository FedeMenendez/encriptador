const textArea=document.querySelector (".texto");
const mensaje=document.querySelector(".mensaje");

function btnEncriptar(){
    
    const textoEncriptado=encriptar(textArea.value);
    mensaje.value=textoEncriptado;
    textArea.value="";
}

function encriptar(stringEncriptado){
    let matrizCodigo=[["e","enter"],["i","ines"],["o","ober"],["a","ai"],["u","ufat"]];
    stringEncriptado=stringEncriptado.toLowerCase();
    for (let i=0;i<matrizCodigo.length;i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado=stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}
function btnDesencriptar(){
    const textoDesencriptado=desencriptar(textArea.value);
    mensaje.value=textoDesencriptado;
    textArea.value="";
}

function desencriptar(stringDesencriptado){
    let matrizCodigo=[["e","enter"],["i","imes"],["o","ober"],["a","ai"],["u","ufat"]];
    stringDesencriptado=stringDesencriptado.toLowerCase();
    for (let i=0;i<matrizCodigo.length;i++){
        if(stringDesencriptado.includes(matrizCodigo[i][0])){
            stringDesencriptado=stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}

function copiar(){
    const textoCopiar=document.querySelector(".mensaje")
    textoCopiar.select();
    document.execCommand ("copy");
    alert ("Texto copiado!")
}
