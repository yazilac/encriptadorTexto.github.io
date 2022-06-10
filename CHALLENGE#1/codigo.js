var inputMensaje = document.querySelector("#mensaje");
var inputResultado = document.querySelector("#resultado");
var contador = document.getElementById("contador");
var btnEncriptar = document.querySelector("#encriptar");
var btnDesencriptar = document.querySelector("#desencriptar");
var btnCopiar = document.querySelector("#copiar");
function encriptar(){
    var mensaje = inputMensaje.value;
    var palabraOculta = mensaje.replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("a","ai")
    .replaceAll("o","ober")
    .replaceAll("u","ufat")
    .normalize('NFD').replace(/[\u0300-\u036f]/g,"");///quitar acentos
    inputResultado.value= palabraOculta;
}
function desencriptar(){
    var mensaje = inputMensaje.value;
    var desencriptaMensaje = mensaje.replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ai","a")
    .replaceAll("ober","o")
    .replaceAll("ufat","u");
    inputResultado.value= desencriptaMensaje;
}
//funcion para copiar
function copiar(){
    var mensajeEncriptado = document.getElementById('resultado');
    mensajeEncriptado.select();
    document.execCommand('copy');
    inputMensaje.value = "";
    
}
///contar caracteres
inputMensaje.addEventListener("keyup",e=>{
    if (inputMensaje.value.length ) {
        contador.innerHTML = inputMensaje.value.length;
    }
})
btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick= copiar;