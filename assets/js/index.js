var movimentacoes = JSON.parse(localStorage.getItem("movimentacoes")) || []

var totalReceitas = 0
var totalDespesas = 0

movimentacoes.forEach(function(movimentacao){
    if(movimentacao.tipo == "Receita"){
        totalReceitas += Number(movimentacao.valor)
    }else{
        totalDespesas += Number(movimentacao.valor)
    }
})

var saldo = totalReceitas - totalDespesas

document.querySelector("#totalReceitas").innerHTML = "R$ " + totalReceitas.toFixed(2)
document.querySelector("#totalDespesas").innerHTML = "R$ " + totalDespesas.toFixed(2)
document.querySelector("#saldo").innerHTML = "R$ " + saldo.toFixed(2)

var divMovimentacoes = document.querySelector("#movimentacoes")

var inicio = movimentacoes.length - 4

if(inicio < 0){
    inicio = 0
}

for(var i = movimentacoes.length - 1; i >= inicio; i--){
    var movimentacao = movimentacoes[i]

    if(movimentacao.tipo == "Receita"){
        divMovimentacoes.innerHTML +=
        '<div class="movimento">' +
            '<div class="movimento-icone movimento-receita">↑</div>' +
            '<div class="movimento-texto">' +
                '<h4>' + movimentacao.descricao + '</h4>' +
                '<p>' + movimentacao.data + '</p>' +
            '</div>' +
            '<strong class="valor-receita">+ R$ ' + Number(movimentacao.valor).toFixed(2) + '</strong>' +
        '</div>'
    }else{
        divMovimentacoes.innerHTML +=
        '<div class="movimento">' +
            '<div class="movimento-icone movimento-despesa">↓</div>' +
            '<div class="movimento-texto">' +
                '<h4>' + movimentacao.descricao + '</h4>' +
                '<p>' + movimentacao.data + '</p>' +
            '</div>' +
            '<strong class="valor-despesa">- R$ ' + Number(movimentacao.valor).toFixed(2) + '</strong>' +
        '</div>'
    }
}