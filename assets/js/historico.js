var tabela = document.querySelector("#tabelaHistorico");

var movimentacoes = JSON.parse(localStorage.getItem("movimentacoes")) || [];

movimentacoes.forEach(function(movimentacao,indice){
    var novaLinha = document.createElement("tr");

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
});

var indiceParaExcluir;

function mostrarConfirmacao(indice){
    indiceParaExcluir = indice;
    document.querySelector("#confirmacaoExcluir").classList.add("ativo");
}

function cancelarExclusao(){
    document.querySelector("#confirmacaoExcluir").classList.remove("ativo");
}

function confirmarExclusao(){
    movimentacoes.splice(indiceParaExcluir,1);

    localStorage.setItem("movimentacoes",JSON.stringify(movimentacoes));

    location.reload();
}

function mostrarConfirmacaoTudo(){
    document.querySelector("#confirmacaoExcluirTudo").classList.add("ativo");
}

function cancelarExclusaoTudo(){
    document.querySelector("#confirmacaoExcluirTudo").classList.remove("ativo");
}

function confirmarExclusaoTudo(){
    localStorage.removeItem("movimentacoes");
    location.reload();
}
