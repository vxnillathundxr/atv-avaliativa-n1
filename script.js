var nomeglobal;
var mensagemGlobal;

function conferirmensagemwhatsapp(){
    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem").value;
    
    nomeglobal = nome;
    mensagemGlobal = mensagem;

    document.getElementById("confNome").textContent = nome;
    document.getElementById("confMsg").textContent = mensagem;
}

function enviar(){
    var numeroTelefone = "5541999999999"

    var linkWhatsApp = "https://wa.me/" + numeroTelefone + "?text=NOME:" + nomeglobal + " - " + mensagemGlobal;
    

    window.open(linkWhatsApp,"-blank")


}