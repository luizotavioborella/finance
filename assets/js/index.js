var movimentacoes = JSON.parse(localStorage.getItem("movimentacoes")) || [] // captura as movimentações salvas em localStorage e transforma em objeto

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


// quadros de total receitas, total despesas e total do saldo

document.querySelector("#totalReceitas").innerHTML = "R$ " + totalReceitas.toFixed(2) // casa após vírgula
document.querySelector("#totalDespesas").innerHTML = "R$ " + totalDespesas.toFixed(2)
document.querySelector("#saldo").innerHTML = "R$ " + saldo.toFixed(2)



// quadro de últimas movimentações

var divMovimentacoes = document.querySelector("#movimentacoes")

var inicio = movimentacoes.length - 4 // para mostrar as últimas 4 movimentações (conta quantos indices tem e subtrai 4. Ex: se tem 10 itens, 10 - 4 = 6, inicia mostrando do indice 6, para mostrar as 4 mais recentes)

if(inicio < 0){ // se tiver menos que 4 movimentações ele da um valor negativo, então devemos começar do indice zero. Ex: se existe somente 2 movimentações, 2 - 4 = -2, não existe indice -2
    inicio = 0
}

for(var i = movimentacoes.length - 1; //inicio (começa pelo último indice da lista. Ex: se tem 6 itens e o primeiro é zero, o último será 5, por isso -1)
    i >= inicio; // condição (ele só vai mostrar a quantidade definida antes, os 4 mais recentes)
    i-- // passo (a cada vez que o for percorrer, vai ser diminuído 1 do indice)
){
    var movimentacao = movimentacoes[i] // pega a movimentação que está no indice atual

    if(movimentacao.tipo == "Receita"){ // se foi salvo como receita
        divMovimentacoes.innerHTML += // adiciona na div já existente as seguintes divs:
        '<div class="movimento">' +
            '<div class="movimento-icone movimento-receita">↑</div>' + // icone de receitas (seta pra cima)
            '<div class="movimento-texto">' +
                '<h4>' + movimentacao.descricao + '</h4>' + // informações (descrição = receita, e data)
                '<p>' + movimentacao.data + '</p>' + // data da movimentação
            '</div>' +
            '<strong class="valor-receita">+ R$ ' + Number(movimentacao.valor).toFixed(2) + '</strong>' + // adiciona o valor da movimentação
        '</div>'
    }else{ // se não foi salvo como receita, ou seja, despesa
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