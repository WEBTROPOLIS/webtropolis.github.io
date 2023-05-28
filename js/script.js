


function encriptar(){
    var txt = document.getElementById("inputText").value.toLowerCase();
    
    var txtCifrado = txt.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");
    document.getElementById("buscarImg").style.display="none";
    document.getElementById("txtDerecho").style.display="none";
    document.getElementById("textoDerecho2").innerHTML=txtCifrado;
    document.getElementById("copiar").style.visibility = "visible";
    document.getElementById("copiar").style.display = "inherit";    
    
}

function desencriptar(){
    var txt = document.getElementById("inputText").value.toLowerCase();
    
    var txtCifrado = txt.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");
    document.getElementById("buscarImg").style.display="none";
    document.getElementById("txtDerecho").style.display="none";
    document.getElementById("textoDerecho2").innerHTML=txtCifrado;
    document.getElementById("copiar").style.display = "visible";
    document.getElementById("copiar").style.display = "inherit";    
    
}

function copiar(){
    var contenido = document.querySelector("#textoDerecho2");
    contenido.select();
    document.execCommand("copy");
    alert("¡Copiado!");
    
}