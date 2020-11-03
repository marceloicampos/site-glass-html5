function mudaFoto (foto) {
    document.getElementById("icone").src = foto;
}

var quebrada = false;
function mudaLampada(tipo) {
    if (!quebrada) {
        document.getElementById("luz").src = "./imagens/" + tipo + ".jpg";
    if (tipo == 'lampada-quebrada') {
        quebrada = true;
    }
    }
}