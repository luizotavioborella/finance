function cancelar(){
    window.location.href = "historico.html"
}

function confirmar(){
    var movimentacoes = JSON.parse(localStorage.getItem("movimentacoes"))
    var indice = localStorage.getItem("excluir")

    movimentacoes.splice(indice,1)

    localStorage.setItem("movimentacoes",JSON.stringify(movimentacoes))

    window.location.href = "historico.html"
}