document.getElementById("Botao enviar").addEventListener("click", validaFormulario)

function validaFormulario(){
    if(document.getElementById("Nome").value != "" && 
    document.getElementById("Celular").value !=""){
    alert("Dados enviados. Em breve retornaremos o contato.");
    }else{
        alert("Algo deu errado. Verifique o dados e tente novamente.")
    }
}
