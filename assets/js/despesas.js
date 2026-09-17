// mostrar movimentações na tabela de despesas
var tabela = document.querySelector("#tabelaDespesas");

var movimentacoes = JSON.parse(localStorage.getItem("movimentacoes")) || [];

movimentacoes.forEach(function(movimentacao, indice) {

    var novaLinha = document.createElement("tr");

    if(movimentacao.tipo == "Despesa"){ // vai adicionar somente se foi cadastrado como Despesa
        novaLinha.innerHTML = `
            <td>${movimentacao.descricao}</td>

            <td>R$ ${movimentacao.valor}</td>

            <td>${movimentacao.tipo}</td>

            <td>${movimentacao.data}</td>

            <td>
                <button onclick="mostrarConfirmacao(${indice})">
                    <img src="assets/img/deletar.png" alt="Excluir">
                </button>
            </td>
        `;

        tabela.appendChild(novaLinha);
    }
});


var indiceParaExcluir;

function mostrarConfirmacao(indice) {
    indiceParaExcluir = indice;
    document.querySelector("#confirmacaoExcluir").classList.add("ativo");
}

function cancelarExclusao() {
    document.querySelector("#confirmacaoExcluir").classList.remove("ativo");
}

function confirmarExclusao() {

    var movimentacoes = JSON.parse(localStorage.getItem("movimentacoes"));

    movimentacoes.splice(indiceParaExcluir, 1);

    localStorage.setItem("movimentacoes", JSON.stringify(movimentacoes));

    location.reload(); // para recarregar a página após a remoção da movimentação
}